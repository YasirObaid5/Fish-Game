// Run with npm run test:audio. Set CHROME_PATH to use an existing Chromium browser.
const { chromium } = require('playwright');
const http = require('node:http'), fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const types = { '.js': 'text/javascript', '.mjs': 'text/javascript', '.html': 'text/html', '.css': 'text/css' };
const server = http.createServer((req, res) => {
  const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://local').pathname).replace(/\/$/, '/index.html'));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  fs.readFile(file, (error, data) => {
    res.writeHead(error ? 404 : 200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    res.end(error ? 'Not found' : data);
  });
});
let browser;
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = process.env.GAME_URL || 'http://127.0.0.1:' + server.address().port;
  browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || undefined, args: ['--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.addInitScript(() => {
    const NativeContext = window.AudioContext;
    window.AudioContext = class extends NativeContext {
      constructor(...args) {
        super(...args);
        const factory = this.createDynamicsCompressor.bind(this);
        this.createDynamicsCompressor = () => {
          const compressor = factory(), meter = this.createAnalyser();
          meter.fftSize = 2048;
          compressor.connect(meter);
          window.__soundMeter = meter;
          return compressor;
        };
      }
    };
  });
  const boot = async () => {
    await page.goto(base + '/?test=1&audio-check=1');
    await page.waitForFunction(() => document.documentElement.dataset.engine === 'ready');
  };
  const state = () => page.evaluate(() => window.__ocean.snapshot());
  const meter = () => page.evaluate(() => {
    const data = new Float32Array(window.__soundMeter.fftSize);
    window.__soundMeter.getFloatTimeDomainData(data);
    return { peak: Math.max(...data.map(Math.abs)), rms: Math.sqrt(data.reduce((n, v) => n + v * v, 0) / data.length) };
  });
  const volume = value => page.locator('#volume').evaluate((el, value) => { el.value = value; el.dispatchEvent(new Event('input', { bubbles: true })); }, String(value));
  const collide = async (kind, event) => {
    const before = (await state()).audio.events[event] || 0;
    const result = await page.evaluate(kind => {
      window.__ocean.place(0, 4.4); window.__ocean.spawn(kind, 0, 4.4, -.1); window.__ocean.step(.05);
      return window.__ocean.snapshot();
    }, kind);
    assert.equal(result.audio.events[event], before + 1, event + ' emitted once for the collision');
    return result;
  };
  await boot();
  assert.equal((await state()).audio.initialized, false, 'No AudioContext or autoplay before a gesture');
  await page.locator('#start').click();
  await page.waitForFunction(() => window.__ocean.snapshot().audio.state === 'running');
  assert.equal((await state()).audio.enabled, true);
  await page.waitForTimeout(450);
  const still = (await state()).audio.swimGain;
  await page.keyboard.down('ArrowRight'); await page.waitForTimeout(450); await page.keyboard.up('ArrowRight');
  assert.ok((await state()).audio.swimGain > still + .02, 'Swimming changes the water sound');
  await page.keyboard.press('Space');
  assert.equal((await state()).audio.lastEvent, 'dash');
  const signal = await meter();
  assert.ok(signal.rms > .0005 && signal.peak < .95, 'Actual audio output is audible and below clipping');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  assert.equal((await state()).audio.state, 'suspended', 'Pause suspends the audio device');
  assert.equal((await state()).audio.voices, 0);
  await page.locator('#start').click();
  await page.evaluate(() => { window.__ocean.place(6.3, 9.9); window.__ocean.simulate(4); });
  await collide('gold', 'gold');
  await collide('shield', 'shield');
  await collide('shark', 'block');
  await page.evaluate(() => window.__ocean.simulate(2.2));
  await collide('shark', 'hurt');
  await page.evaluate(() => window.__ocean.simulate(2.2));
  await page.keyboard.press('Space');
  await collide('shark', 'defeated');
  await page.locator('#sound').click();
  await page.waitForTimeout(250);
  assert.equal((await state()).audio.enabled, false);
  assert.equal((await state()).audio.state, 'suspended');
  assert.ok((await meter()).peak < .0001, 'Muted output is silent');
  await boot();
  assert.equal((await state()).audio.enabled, false, 'Mute preference survives reload');
  await page.locator('#start').click();
  assert.equal((await state()).audio.initialized, false, 'Muted start does not create an audio graph');
  await page.locator('#sound').click();
  await page.waitForFunction(() => window.__ocean.snapshot().audio.state === 'running');
  await volume(40);
  const beforeRange = (await state()).position;
  await page.locator('#volume').focus(); await page.keyboard.press('ArrowRight');
  assert.equal((await state()).audio.volume, .45, 'Range keeps native arrow-key adjustment');
  await page.waitForTimeout(180);
  assert.deepEqual((await state()).position, beforeRange, 'Adjusting volume does not steer the fish');
  await volume(0);
  await page.waitForTimeout(200);
  assert.equal((await state()).audio.state, 'suspended');
  await page.locator('#sound').click();
  assert.ok((await state()).audio.volume > 0, 'Unmute restores volume from zero');
  await volume(40);
  await boot();
  assert.equal((await state()).audio.volume, .4, 'Volume preference survives reload');
  await page.locator('#start').click();
  await page.evaluate(() => { window.__ocean.place(0, 9.8); window.__ocean.spawn('shark', 3, 9.8, -22); });
  await page.waitForFunction(() => window.__ocean.snapshot().audio.lastEvent === 'warning', {}, { timeout: 3000 });
  assert.ok((await state()).audio.lastPan > 0, 'Predator on the right gives a right-sided cue');
  await page.evaluate(() => window.dispatchEvent(new Event('blur')));
  await page.waitForTimeout(250);
  assert.equal((await state()).mode, 'paused');
  assert.equal((await state()).audio.state, 'suspended', 'Leaving the window silences audio');
  await page.locator('#start').click();
  await page.evaluate(() => { Object.defineProperty(document, 'hidden', { value: true, configurable: true }); document.dispatchEvent(new Event('visibilitychange')); });
  await page.waitForTimeout(250);
  assert.equal((await state()).audio.state, 'suspended', 'Hidden-page handler suspends audio');
  await page.evaluate(() => { delete document.hidden; document.dispatchEvent(new Event('visibilitychange')); });
  await page.locator('#start').click();
  await page.evaluate(() => { window.__ocean.place(6.3, 9.9); window.__ocean.simulate(100); });
  assert.equal((await state()).audio.lastEvent, 'win');
  await page.waitForTimeout(2400);
  assert.equal((await state()).audio.state, 'suspended', 'Victory melody finishes then releases the device');
  await page.locator('#start').click();
  await page.evaluate(() => {
    window.__ocean.place(0, 4.4);
    for (let i = 0; i < 3; i++) { window.__ocean.spawn('shark', 0, 4.4, -.1); window.__ocean.step(.05); window.__ocean.simulate(2.1); }
  });
  assert.equal((await state()).audio.lastEvent, 'lose');

  // Offline rendering tests the actual waveforms, not just event names or node calls.
  if (!process.env.GAME_URL) {
    const rendered = await page.evaluate(async () => {
      const { OceanAudio } = await import('/ocean-audio.js');
      const results = [];
      for (const event of ['pearl', 'gold', 'shield', 'dash', 'hurt', 'block', 'defeated', 'warning', 'guardian', 'start', 'win', 'lose', 'treasure', 'magnet', 'gate', 'frenzy', 'nearMiss', 'discover']) {
        const context = new OfflineAudioContext(2, 48000, 32000);
        const audio = new OceanAudio({ context, storage: null });
        audio.setMode('playing'); audio.play(event, { pan: .8, combo: 4 });
        const buffer = await context.startRendering();
        const energy = [0, 0]; let peak = 0;
        for (let channel = 0; channel < 2; channel++) for (const value of buffer.getChannelData(channel)) {
          energy[channel] += value * value; peak = Math.max(peak, Math.abs(value));
        }
        results.push({ event, peak, energy, voices: audio.voices.size });
      }
      const context = new OfflineAudioContext(2, 48000, 32000);
      const audio = new OceanAudio({ context, storage: null }); audio.setMode('playing');
      for (let i = 0; i < 100; i++) audio.play('gold');
      const voiceCount = audio.voices.size;
      const buffer = await context.startRendering();
      let peak = 0;
      for (const v of buffer.getChannelData(0)) peak = Math.max(peak, Math.abs(v));
      return { results, stress: { voiceCount, peak, remaining: audio.voices.size } };
    });
    for (const result of rendered.results) {
      assert.ok(result.peak > .01 && result.peak < .9, result.event + ' produces a bounded audible waveform');
      assert.ok(result.energy[1] > result.energy[0] * 5, result.event + ' is spatialized');
      assert.equal(result.voices, 0, result.event + ' disconnects completed voices');
    }
    assert.ok(rendered.stress.voiceCount <= 28 && rendered.stress.peak < .95);
    assert.equal(rendered.stress.remaining, 0);
    console.log('WAVEFORMS', JSON.stringify(rendered));
  }

  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const mp = await mobile.newPage(); mp.on('pageerror', e => errors.push(e.message));
  await mp.goto(base + '/?test=1'); await mp.waitForFunction(() => document.documentElement.dataset.engine === 'ready');
  for (const selector of ['#sound', '#volume', '#fullscreen', '#start']) {
    const box = await mp.locator(selector).boundingBox();
    assert.ok(box && box.x >= 0 && box.x + box.width <= 390 && box.y + box.height <= 844, selector + ' fits mobile');
  }
  await mp.locator('#start').tap();
  await mp.waitForFunction(() => window.__ocean.snapshot().audio.state === 'running');
  await mp.locator('#touch-boost').tap();
  assert.equal(await mp.evaluate(() => window.__ocean.snapshot().audio.lastEvent), 'dash');
  await mp.locator('#sound').tap();
  assert.equal(await mp.evaluate(() => window.__ocean.snapshot().audio.enabled), false);
  fs.mkdirSync(path.join(root, 'tmp'), { recursive: true });
  await mp.screenshot({ path: path.join(root, 'tmp/audio-mobile.png') });

  const unsupported = await browser.newPage();
  unsupported.on('pageerror', e => errors.push(e.message));
  await unsupported.addInitScript(() => {
    window.AudioContext = undefined; window.webkitAudioContext = undefined;
    Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage denied'); } });
  });
  await unsupported.goto(base + '/?test=1'); await unsupported.waitForFunction(() => document.documentElement.dataset.engine === 'ready');
  await unsupported.locator('#start').click();
  assert.equal(await unsupported.locator('html').getAttribute('data-mode'), 'playing');
  assert.equal(await unsupported.locator('#sound').isDisabled(), true, 'Unsupported audio does not block the game');
  assert.deepEqual(errors, []);
  console.log('PASS: real output, movement mix, all game events, stereo warning, mute, volume, pause/blur, persisted settings, mobile, graceful fallback.');
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(async () => {
  await browser?.close(); server.close();
});
