// Tests the production build, not a development server. GAME_URL targets a deployed site.
const { chromium } = require('playwright');
const http = require('node:http'), fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..'), dist = path.join(root, 'dist');
const types = { '.js': 'text/javascript', '.html': 'text/html', '.css': 'text/css', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.svg': 'image/svg+xml' };
let revision = '', failStyle = false, browser;
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://local').pathname);
  const file = path.resolve(dist, '.' + pathname.replace(/\/$/, '/index.html'));
  if (!file.startsWith(dist + path.sep)) { res.writeHead(403); res.end(); return; }
  if (failStyle && pathname === '/style.css') { res.writeHead(503); res.end('Simulated interrupted update'); return; }
  fs.readFile(file, (error, data) => {
    if (!error && pathname === '/sw.js' && revision) {
      const source = data.toString();
      const revised = source.replace(/(const CACHE_NAME\s*=\s*['"]amaq-pwa-)[^'"]+(['"])/, '$1test-' + revision + '$2');
      if (source === revised) { res.writeHead(500); res.end('Test needs the CACHE_NAME build contract'); return; }
      data = Buffer.from(revised);
    }
    res.writeHead(error ? 404 : 200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(error ? 'Not found' : data);
  });
});

function interceptAudio() {
  const NativeContext = window.AudioContext;
  window.AudioContext = class extends NativeContext {
    constructor(...args) {
      super(...args);
      const factory = this.createDynamicsCompressor.bind(this);
      this.createDynamicsCompressor = () => {
        const compressor = factory(), meter = this.createAnalyser();
        meter.fftSize = 2048; compressor.connect(meter); window.__soundMeter = meter;
        return compressor;
      };
    }
  };
}

async function insideViewport(page, selectors, scroll = false) {
  const viewport = page.viewportSize();
  for (const selector of selectors) {
    if (scroll) await page.locator(selector).scrollIntoViewIfNeeded();
    const box = await page.locator(selector).boundingBox();
    assert.ok(box, selector + ' is visible');
    assert.ok(box.x >= -1 && box.y >= -1 && box.x + box.width <= viewport.width + 1 && box.y + box.height <= viewport.height + 1,
      selector + ' fits ' + viewport.width + 'x' + viewport.height + ': ' + JSON.stringify(box));
  }
  const overflow = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight, viewport: [innerWidth, innerHeight], outside: [...document.querySelectorAll('body,main,canvas,header,section,dialog,.pwa-update')].map(element => ({ tag: element.tagName, id: element.id, hidden: element.hidden, height: element.getBoundingClientRect().height, bottom: element.getBoundingClientRect().bottom, position: getComputedStyle(element).position })).filter(element => !element.hidden && element.bottom > innerHeight + 1) }));
  assert.ok(overflow.width <= overflow.viewport[0] && overflow.height <= overflow.viewport[1], 'No document overflow: ' + JSON.stringify(overflow));
}

async function settleUpdate(page) {
  return page.evaluate(async () => {
    const registration = await navigator.serviceWorker.ready;
    await registration.update();
    const worker = registration.installing || registration.waiting;
    if (!worker) return 'none';
    if (['installed', 'redundant', 'activated'].includes(worker.state)) return worker.state;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Update did not settle')), 15000);
      worker.addEventListener('statechange', () => {
        if (['installed', 'redundant', 'activated'].includes(worker.state)) { clearTimeout(timer); resolve(worker.state); }
      });
    });
  });
}

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  fs.mkdirSync(path.join(root, 'tmp'), { recursive: true });
  const base = process.env.GAME_URL || 'http://127.0.0.1:' + server.address().port;
  browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || undefined, args: ['--enable-unsafe-swiftshader'] });
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 });
  await context.addInitScript(interceptAudio);
  const page = await context.newPage(), errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const boot = async () => {
    await page.goto(base + '/?test=1&pwa-check=1');
    await page.waitForFunction(() => document.documentElement.dataset.engine === 'ready');
    await page.waitForFunction(() => document.documentElement.dataset.offlineReady === 'true', null, { timeout: 20000 });
    await page.waitForFunction(() => !!navigator.serviceWorker.controller);
  };
  const state = () => page.evaluate(() => window.__ocean.snapshot());
  const shot = name => page.screenshot({ path: path.join(root, 'tmp/pwa-' + name + '.png') });
  await boot();

  const manifestURL = await page.locator('link[rel="manifest"]').evaluate(element => element.href);
  const manifestResponse = await context.request.get(manifestURL);
  assert.equal(manifestResponse.status(), 200);
  const manifest = await manifestResponse.json();
  assert.equal(manifest.id, '/'); assert.equal(manifest.scope, '/');
  assert.equal(manifest.start_url, '/?source=pwa'); assert.equal(manifest.display, 'standalone');
  assert.equal(manifest.lang, 'ar'); assert.equal(manifest.dir, 'rtl');
  assert.ok(manifest.name && manifest.short_name && manifest.theme_color && manifest.background_color);
  assert.ok(manifest.icons.some(icon => icon.sizes === '192x192'));
  assert.ok(manifest.icons.some(icon => icon.sizes === '512x512'));
  assert.ok(manifest.icons.some(icon => icon.sizes === '512x512' && icon.purpose?.split(' ').includes('maskable')));
  for (const icon of manifest.icons) {
    const response = await context.request.get(new URL(icon.src, manifestURL).href);
    assert.equal(response.status(), 200, icon.src + ' is served');
    const bytes = await response.body(), size = Number(icon.sizes.split('x')[0]);
    assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', icon.src + ' is a real PNG');
    assert.equal(bytes.readUInt32BE(16), size); assert.equal(bytes.readUInt32BE(20), size);
  }
  const cdp = await context.newCDPSession(page);
  const parsedManifest = await cdp.send('Page.getAppManifest');
  assert.deepEqual(parsedManifest.errors, [], 'Chrome accepts the manifest');
  try {
    const installability = await cdp.send('Page.getInstallabilityErrors');
    console.log('CHROME INSTALLABILITY', JSON.stringify(installability.installabilityErrors));
    assert.deepEqual(installability.installabilityErrors.filter(error => error.errorId !== 'in-incognito'), [], 'Chrome reports no application installability errors (test context is incognito)');
  } catch (error) {
    if (!/wasn't found|not found|not supported/i.test(error.message)) throw error;
    console.log('CDP installability check unavailable; manifest, worker and icons verified directly.');
  }
  // Browser.newContext is intentionally incognito; verify the real install criteria separately.
  const normalContext = await chromium.launchPersistentContext('', {
    headless: true, executablePath: process.env.CHROME_PATH || undefined,
    args: ['--enable-unsafe-swiftshader'], viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true
  });
  try {
    const normalPage = normalContext.pages()[0] || await normalContext.newPage();
    await normalPage.goto(base + '/?pwa-installability=1');
    await normalPage.waitForFunction(() => document.documentElement.dataset.offlineReady === 'true');
    const normalCDP = await normalContext.newCDPSession(normalPage);
    const result = await normalCDP.send('Page.getInstallabilityErrors');
    assert.deepEqual(result.installabilityErrors, [], 'A normal Chrome profile has no installability errors');
    console.log('NORMAL CHROME INSTALLABILITY', JSON.stringify(result.installabilityErrors));
  } finally { await normalContext.close(); }
  const cacheState = await page.evaluate(async () => {
    const names = (await caches.keys()).filter(name => name.startsWith('amaq-pwa-'));
    return Promise.all(names.map(async name => {
      const cache = await caches.open(name), requests = await cache.keys();
      return { name, paths: requests.map(request => new URL(request.url).pathname), valid: (await Promise.all(requests.map(async request => (await cache.match(request))?.ok))).every(Boolean) };
    }));
  });
  assert.equal(cacheState.length, 1, 'A fresh install has one complete application cache');
  assert.ok(cacheState[0].valid);
  for (const pathname of ['/index.html', '/style.css', '/ocean.bundle.js', '/pwa.js', '/manifest.webmanifest']) {
    assert.ok(cacheState[0].paths.includes(pathname), pathname + ' is precached');
  }
  await insideViewport(page, ['#start', '#worlds', '#install-app', '#sound', '#fullscreen'], true);
  await shot('portrait-menu');

  // Exercise install UI without pretending that headless Chrome installed an Android app.
  await page.evaluate(() => {
    const event = new Event('beforeinstallprompt', { cancelable: true });
    event.prompt = () => { window.__installPrompts = (window.__installPrompts || 0) + 1; return Promise.resolve(); };
    event.userChoice = Promise.resolve({ outcome: 'dismissed' });
    window.dispatchEvent(event);
  });
  assert.equal(await page.evaluate(() => window.__installPrompts || 0), 0, 'Installation never prompts without a gesture');
  await page.locator('#install-app').tap();
  assert.equal(await page.evaluate(() => window.__installPrompts), 1, 'Install gesture invokes the browser prompt');

  await page.locator('#volume').evaluate(element => { element.value = '40'; element.dispatchEvent(new Event('input', { bubbles: true })); });
  await page.evaluate(() => localStorage.setItem('amaq-best', '321'));
  const preferences = await page.evaluate(() => ({ best: localStorage.getItem('amaq-best'), audio: localStorage.getItem('amaq-audio-v1') }));
  await context.setOffline(true);
  await boot();
  assert.deepEqual(await page.evaluate(() => ({ best: localStorage.getItem('amaq-best'), audio: localStorage.getItem('amaq-audio-v1') })), preferences, 'Offline reload preserves score and sound settings');
  assert.equal(await page.locator('#best').innerText(), '321');
  assert.equal((await state()).audio.volume, .4);
  await page.locator('#start').tap();
  await page.waitForFunction(() => window.__ocean.snapshot().audio.state === 'running');
  await page.waitForTimeout(300);
  assert.ok(await page.evaluate(() => {
    const samples = new Float32Array(window.__soundMeter.fftSize); window.__soundMeter.getFloatTimeDomainData(samples);
    return Math.max(...samples.map(Math.abs)) > .0001;
  }), 'Offline play produces actual synthesized audio');
  const score = await page.evaluate(() => { window.__ocean.place(0, 4.4); window.__ocean.spawn('pearl', 0, 4.4, -.1); window.__ocean.step(.05); return window.__ocean.snapshot().run.score; });
  assert.equal(score, 5, 'Offline gameplay and point feedback run from the installed cache');
  await insideViewport(page, ['#stick', '#touch-boost', '#pause', '#sound', '#fullscreen']);
  const stick = await page.locator('#stick').boundingBox(), boost = await page.locator('#touch-boost').boundingBox();
  const center = { x: stick.x + stick.width / 2, y: stick.y + stick.height / 2, id: 1 };
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [center] });
  const right = { ...center, x: center.x + 30 };
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [right] });
  await page.waitForTimeout(220);
  assert.ok((await state()).position[0] > .2, 'Touch joystick moves the fish');
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [right, { x: boost.x + boost.width / 2, y: boost.y + boost.height / 2, id: 2 }] });
  assert.ok((await state()).run.boost > 0, 'Two simultaneous fingers can steer and dash');
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await shot('portrait-play');
  await page.setViewportSize({ width: 844, height: 390 });
  await page.waitForTimeout(200);
  await insideViewport(page, ['#stick', '#touch-boost', '#pause', '#sound', '#fullscreen']);
  await shot('landscape-play');
  await page.locator('#pause').tap();
  await page.locator('#home').tap();
  await insideViewport(page, ['#start', '#worlds', '#install-app', '#sound', '#fullscreen'], true);
  await shot('landscape-menu');
  await context.setOffline(false);

  if (!process.env.GAME_URL) {
    // A broken deployment must leave the complete old version usable.
    const originalCache = cacheState[0].name;
    await page.evaluate(async () => { await caches.open('pwa-test-unrelated'); window.__updateSentinel = 'same page'; });
    revision = 'broken'; failStyle = true;
    assert.equal(await settleUpdate(page), 'redundant', 'An incomplete precache cannot install');
    failStyle = false;
    assert.equal(await page.evaluate(async () => !!(await navigator.serviceWorker.ready).waiting), false);
    assert.ok((await page.evaluate(() => caches.keys())).includes(originalCache));
    const otherPage = await context.newPage();
    otherPage.on('pageerror', error => errors.push(error.message));
    await otherPage.goto(base + '/?test=1&pwa-other-window=1');
    await otherPage.waitForFunction(() => document.documentElement.dataset.engine === 'ready' && document.documentElement.dataset.offlineReady === 'true');
    await otherPage.locator('#start').tap();
    await otherPage.evaluate(() => {
      window.__otherWindowSentinel = 'preserved'; window.__ocean.place(0, 4.4);
      window.__ocean.spawn('pearl', 0, 4.4, -.1); window.__ocean.step(.05); window.__ocean.place(6.3, 9.9);
    });
    await page.locator('#start').tap();
    await page.evaluate(() => { window.__ocean.place(0, 4.4); window.__ocean.spawn('pearl', 0, 4.4, -.1); window.__ocean.step(.05); });
    revision = 'ready';
    assert.equal(await settleUpdate(page), 'installed');
    await page.waitForTimeout(300);
    assert.equal(await page.evaluate(() => window.__updateSentinel), 'same page', 'Waiting update never reloads an active game');
    assert.equal((await state()).mode, 'playing');
    assert.ok((await state()).run.score >= 5);
    assert.equal(await page.locator('#update-app').isVisible(), false, 'Update activation is not offered mid-game');
    await page.locator('#pause').tap();
    assert.equal(await page.locator('#update-app').isVisible(), false, 'Paused runs are also protected');
    await page.locator('#home').tap();
    await page.waitForFunction(() => !document.getElementById('update-app').hidden);
    await Promise.all([page.waitForEvent('domcontentloaded'), page.locator('#update-app').tap()]);
    await page.waitForFunction(() => document.documentElement.dataset.engine === 'ready' && document.documentElement.dataset.offlineReady === 'true');
    assert.equal(await page.evaluate(() => window.__updateSentinel), undefined, 'Only the explicit update action reloads');
    const remaining = await page.evaluate(() => caches.keys());
    assert.ok(remaining.includes('pwa-test-unrelated'), 'Updates never delete other applications caches');
    assert.deepEqual(remaining.filter(name => name.startsWith('amaq-pwa-')), ['amaq-pwa-test-ready']);
    assert.equal(await otherPage.evaluate(() => window.__otherWindowSentinel), 'preserved', 'An update in one window never reloads another window');
    const otherRun = await otherPage.evaluate(() => window.__ocean.snapshot());
    assert.ok(['playing', 'paused'].includes(otherRun.mode) && otherRun.run.score >= 5, 'The other window keeps its active or background-paused run');
    await otherPage.close();
    assert.deepEqual(await page.evaluate(() => ({ best: localStorage.getItem('amaq-best'), audio: localStorage.getItem('amaq-audio-v1') })), preferences, 'Explicit update preserves personal settings and best score');
    await context.setOffline(true); await boot(); await page.locator('#start').tap();
    assert.equal((await state()).mode, 'playing', 'The updated version also launches offline');
    await context.setOffline(false);
  }

  const standalone = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await standalone.addInitScript(() => {
    const native = window.matchMedia.bind(window);
    window.matchMedia = query => { const result = native(query); if (query === '(display-mode: standalone)') Object.defineProperty(result, 'matches', { value: true }); return result; };
    Object.defineProperty(navigator, 'standalone', { value: true });
  });
  const installedPage = await standalone.newPage();
  await installedPage.goto(base + '/?source=pwa');
  await installedPage.waitForFunction(() => document.documentElement.dataset.engine === 'ready');
  assert.equal(await installedPage.evaluate(() => document.documentElement.dataset.appInstalled), 'true');
  assert.equal(await installedPage.locator('#install-app').isVisible(), false, 'Installed display mode hides redundant install controls');
  await installedPage.screenshot({ path: path.join(root, 'tmp/pwa-standalone.png') });
  assert.deepEqual(errors, [], 'No page script errors');
  console.log('PASS: installable Arabic manifest, real PNG icons, complete offline cache, actual offline 3D/audio, preserved preferences, portrait/landscape layout, multi-touch, safe update lifecycle, standalone UI (emulated).');
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(async () => { await browser?.close(); server.close(); });
