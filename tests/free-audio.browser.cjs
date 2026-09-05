// Interactive/audio acceptance for the free-swimming game. GAME_URL checks a deployed build.
const { chromium } = require('playwright');
const http = require('node:http'), fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const types = { '.js':'text/javascript', '.mjs':'text/javascript', '.html':'text/html', '.css':'text/css', '.webmanifest':'application/manifest+json', '.png':'image/png', '.svg':'image/svg+xml' };
const server = http.createServer((request,response) => {
  const file = path.resolve(root,'.'+decodeURIComponent(new URL(request.url,'http://local').pathname).replace(/\/$/,'/index.html'));
  if (!file.startsWith(root+path.sep)) { response.writeHead(403); response.end(); return; }
  fs.readFile(file,(error,data) => {
    response.writeHead(error?404:200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});
    response.end(error?'Not found':data);
  });
});
let browser;

function attachMeter() {
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

(async () => {
  await new Promise(resolve => server.listen(0,'127.0.0.1',resolve));
  const base = process.env.GAME_URL || 'http://127.0.0.1:'+server.address().port;
  browser = await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-unsafe-swiftshader']});
  const page = await browser.newPage({viewport:{width:1280,height:800}}), errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
  await page.addInitScript(attachMeter);
  const boot = async () => {
    await page.goto(base+'/?test=1&free-audio-check=1');
    await page.waitForFunction(()=>document.documentElement.dataset.engine==='ready');
    assert.equal(await page.locator('html').getAttribute('data-engine-version'),'free-ocean');
  };
  const state = () => page.evaluate(()=>window.__ocean.snapshot());
  const eventCount = async event => (await state()).audio.events[event]||0;
  const waitEvent = (event,before) => page.waitForFunction(({event,before})=>(window.__ocean.snapshot().audio.events[event]||0)>before,{event,before},{timeout:8000});
  const meter = () => page.evaluate(()=>{
    const samples=new Float32Array(window.__soundMeter.fftSize);window.__soundMeter.getFloatTimeDomainData(samples);
    return {peak:Math.max(...samples.map(Math.abs)),rms:Math.sqrt(samples.reduce((sum,value)=>sum+value*value,0)/samples.length)};
  });
  const volume = value => page.locator('#volume').evaluate((element,value)=>{element.value=String(value);element.dispatchEvent(new Event('input',{bubbles:true}));},value);
  const collide = async (kind,event=kind) => {
    const before=await eventCount(event);
    await page.evaluate(kind=>{const p=window.__ocean.snapshot().position;window.__ocean.spawn(kind,...p);window.__ocean.step(.05);},kind);
    assert.equal(await eventCount(event),before+1,event+' sounds exactly once for a pickup');
  };

  await boot();
  assert.equal((await state()).audio.initialized,false,'Opening the menu never autoplays or creates an audio device');
  await page.locator('#start').click();
  await page.waitForFunction(()=>window.__ocean.snapshot().audio.state==='running');
  await page.evaluate(()=>{window.__ocean.place(80,14,80);window.__ocean.aim(0);});
  await page.waitForTimeout(450);
  const baseline=(await state()).audio.swimGain;
  await page.keyboard.down('ArrowUp');await page.waitForTimeout(550);await page.keyboard.up('ArrowUp');
  assert.ok((await state()).audio.swimGain>baseline+.02,'Real forward swimming increases the moving-water sound');
  const dash=await eventCount('dash');await page.keyboard.press('Space');await waitEvent('dash',dash);
  const output=await meter();
  assert.ok(output.rms>.0005&&output.peak<.95,'The actual game mix is audible and does not clip');
  await collide('pearl');await collide('gold');await collide('chest','treasure');

  await page.locator('#sound').click();await page.waitForTimeout(250);
  assert.equal((await state()).audio.enabled,false);assert.equal((await state()).audio.state,'suspended');
  assert.ok((await meter()).peak<.0001,'Mute silences the actual output, not only the UI');
  await boot();assert.equal((await state()).audio.enabled,false,'Mute survives reload');
  await page.locator('#start').click();
  assert.equal((await state()).audio.initialized,false,'Muted play does not allocate an audio graph');
  await page.locator('#sound').click();await page.waitForFunction(()=>window.__ocean.snapshot().audio.state==='running');
  await volume(40);
  await page.locator('#volume').focus();await page.keyboard.press('ArrowRight');
  assert.equal((await state()).audio.volume,.45,'Volume slider retains native arrow-key control');
  await volume(40);await boot();assert.equal((await state()).audio.volume,.4,'Volume survives reload');
  await page.locator('#start').click();await page.waitForFunction(()=>window.__ocean.snapshot().audio.state==='running');

  await page.keyboard.press('Escape');await page.waitForTimeout(250);
  assert.equal((await state()).mode,'paused');assert.equal((await state()).audio.state,'suspended');
  assert.equal((await state()).audio.voices,0,'Pausing disconnects all one-shot voices');
  await page.locator('#start').click();
  await page.evaluate(()=>window.dispatchEvent(new Event('blur')));await page.waitForTimeout(250);
  assert.equal((await state()).mode,'paused');assert.equal((await state()).audio.state,'suspended','Leaving the game releases the audio device');
  await page.locator('#start').click();
  await page.evaluate(()=>{Object.defineProperty(document,'hidden',{value:true,configurable:true});document.dispatchEvent(new Event('visibilitychange'));});
  await page.waitForTimeout(250);assert.equal((await state()).audio.state,'suspended','A hidden document is quiet');
  await page.evaluate(()=>{delete document.hidden;document.dispatchEvent(new Event('visibilitychange'));});
  await page.locator('#start').click();

  // Actual input/physics crosses the water surface and lands again; events are not injected.
  await page.evaluate(()=>{window.__ocean.place(80,window.__ocean.surface-.4,80);window.__ocean.aim(0,0);});
  const breach=await eventCount('breach'), splash=await eventCount('splash');
  await page.keyboard.down('r');await page.keyboard.press('Space');
  await waitEvent('breach',breach);await page.keyboard.up('r');
  await waitEvent('splash',splash);
  assert.ok((await state()).journal.stats.breaches>=1,'The audible breach is also recorded by gameplay');
  await page.evaluate(()=>{window.__ocean.place(80,14,80);window.__ocean.progress('escapes',3);});
  const feint=await eventCount('nearMiss');await page.locator('#ocean').focus();await page.keyboard.press('x');await waitEvent('nearMiss',feint);
  await page.keyboard.press('x');await page.waitForTimeout(100);
  assert.equal(await eventCount('nearMiss'),feint+1,'A cooling-down feint cannot spam its sound');

  // Render the actual waveforms separately to verify all effects, stereo positioning and cleanup.
  if (!process.env.GAME_URL) {
    const rendered=await page.evaluate(async()=>{
      const {OceanAudio}=await import('/ocean-audio.js');
      const results=[];
      for(const event of ['pearl','gold','shield','dash','hurt','block','defeated','warning','guardian','start','win','lose','treasure','magnet','gate','frenzy','nearMiss','discover','breach','splash']){
        const context=new OfflineAudioContext(2,48000,32000),audio=new OceanAudio({context,storage:null});
        audio.setMode('playing');audio.play(event,{pan:.8,combo:4});
        const buffer=await context.startRendering(),energy=[0,0];let peak=0;
        for(let channel=0;channel<2;channel++)for(const sample of buffer.getChannelData(channel)){energy[channel]+=sample*sample;peak=Math.max(peak,Math.abs(sample));}
        results.push({event,peak,energy,voices:audio.voices.size});
      }
      const context=new OfflineAudioContext(2,48000,32000),audio=new OceanAudio({context,storage:null});audio.setMode('playing');
      for(let i=0;i<100;i++)audio.play('gold');
      const voiceCount=audio.voices.size,buffer=await context.startRendering();let peak=0;
      for(const sample of buffer.getChannelData(0))peak=Math.max(peak,Math.abs(sample));
      return {results,stress:{voiceCount,peak,remaining:audio.voices.size}};
    });
    for(const result of rendered.results){
      assert.ok(result.peak>.01&&result.peak<.9,result.event+' has a bounded audible waveform');
      assert.ok(result.energy[1]>result.energy[0]*5,result.event+' is genuinely stereo-positioned');
      assert.equal(result.voices,0,result.event+' releases completed voices');
    }
    assert.ok(rendered.stress.voiceCount<=28&&rendered.stress.peak<.95);assert.equal(rendered.stress.remaining,0);
    console.log('WAVEFORMS',JSON.stringify(rendered));
  }

  const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const mp=await mobile.newPage();mp.on('pageerror',error=>errors.push(error.message));
  await mp.goto(base+'/?test=1&free-audio-mobile=1');await mp.waitForFunction(()=>document.documentElement.dataset.engine==='ready');
  for(const selector of ['#sound','#volume','#start']){
    await mp.locator(selector).scrollIntoViewIfNeeded();const box=await mp.locator(selector).boundingBox();
    assert.ok(box&&box.x>=-1&&box.y>=-1&&box.x+box.width<=391&&box.y+box.height<=845,selector+' remains reachable on mobile');
  }
  await mp.locator('#start').tap();await mp.waitForFunction(()=>window.__ocean.snapshot().audio.state==='running');
  const mobileDash=await mp.evaluate(()=>window.__ocean.snapshot().audio.events.dash||0);
  await mp.locator('#touch-boost').tap();
  await mp.waitForFunction(before=>(window.__ocean.snapshot().audio.events.dash||0)>before,mobileDash);
  await mp.locator('#sound').tap();assert.equal(await mp.evaluate(()=>window.__ocean.snapshot().audio.enabled),false);
  fs.mkdirSync(path.join(root,'tmp'),{recursive:true});await mp.screenshot({path:path.join(root,'tmp/free-audio-mobile.png')});
  await mobile.close();

  const unsupported=await browser.newPage();unsupported.on('pageerror',error=>errors.push(error.message));
  await unsupported.addInitScript(()=>{
    window.AudioContext=undefined;window.webkitAudioContext=undefined;
    Object.defineProperty(window,'localStorage',{get(){throw new Error('Storage denied');}});
  });
  await unsupported.goto(base+'/?test=1');await unsupported.waitForFunction(()=>document.documentElement.dataset.engine==='ready');
  await unsupported.locator('#start').click();
  const fallback=await unsupported.evaluate(()=>window.__ocean.snapshot());
  assert.equal(fallback.mode,'playing');assert.equal(fallback.audio.supported,false);
  assert.equal(fallback.audio.initialized,false);assert.equal(fallback.audio.enabled,false,'No audio/storage support does not break the game');
  assert.deepEqual(errors,[],'No page or console errors');
  console.log('PASS: real free-swim mix, dash/pickups/treasure, breach/splash, unlocked feint, mute silence, saved volume, pause/blur/hidden lifecycle, mobile input and audio/storage fallback.' + (process.env.GAME_URL ? ' Standalone waveform tests are local-only.' : ' All 20 stereo waveforms and voice limits also passed.'));
})().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{await browser?.close();server.close();});
