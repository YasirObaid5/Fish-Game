// Depth-control acceptance against the real production build and WebGL renderer.
const { chromium } = require('playwright');
const http = require('node:http'), fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..'), dist = path.join(root, 'dist');
const mime = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.jpg':'image/jpeg', '.png':'image/png', '.glb':'model/gltf-binary', '.webmanifest':'application/manifest+json' };
let browser;
const server = http.createServer((req,res) => {
  const pathname = new URL(req.url,'http://local').pathname;
  const file = path.resolve(dist,'.'+decodeURIComponent(pathname).replace(/\/$/,'/index.html'));
  if (!file.startsWith(dist+path.sep)) { res.writeHead(403); return res.end(); }
  fs.readFile(file,(error,bytes) => { res.writeHead(error?404:200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(error?'Missing':bytes); });
});
const state = page => page.evaluate(() => window.__ocean.snapshot());
const simulate = (page,seconds) => page.evaluate(seconds => window.__ocean.simulate(seconds),seconds);
const place = page => page.evaluate(() => {window.__ocean.place(85,8,80);window.__ocean.aim(0,1.1);});
async function checkLayout(page,selectors) {
  const viewport = page.viewportSize(), boxes = [];
  for (const selector of selectors) {
    const button = page.locator(selector), b = await button.boundingBox();
    assert.equal(await button.count(),1,selector+' must be unique');
    assert.ok(await button.isVisible(),selector+' must be visible during swimming');
    const minimum = selector.startsWith('#touch-') ? 44 : 40;
    assert.ok(b && b.width>=minimum && b.height>=minimum,selector+' has a usable input target');
    assert.ok(b.x>=0&&b.y>=0&&b.x+b.width<=viewport.width+1&&b.y+b.height<=viewport.height+1,selector+' fits the viewport');
    assert.ok(await button.evaluate(el => {const r=el.getBoundingClientRect();return el.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2));}),selector+' is not covered by another HUD element');
    boxes.push({selector,...b});
  }
  for(let i=0;i<boxes.length;i++)for(let j=i+1;j<boxes.length;j++) {
    const a=boxes[i],b=boxes[j];
    assert.ok(Math.min(a.x+a.width,b.x+b.width)<=Math.max(a.x,b.x)+1||Math.min(a.y+a.height,b.y+b.height)<=Math.max(a.y,b.y)+1,a.selector+' must not overlap '+b.selector);
  }
}
async function desktopDepth(page) {
  await place(page);
  const original=await state(page), rise=await page.locator('#touch-rise').boundingBox();
  await page.mouse.move(rise.x+rise.width/2,rise.y+rise.height/2);await page.mouse.down();
  await simulate(page,.65);
  let current=await state(page);
  assert.ok(current.position[1]>original.position[1]+2,'Mouse hold on visible rise button changes real world-space depth');
  assert.ok(Math.abs(current.position[2]-original.position[2])<.05,'Rise does not secretly enable forward throttle');
  // Leaving the button while held still works; releasing outside cannot leave lift stuck.
  await page.mouse.move(rise.x-45,rise.y-25);await page.mouse.up();await simulate(page,2);
  assert.ok(Math.abs((await state(page)).swimmer.velocity.y)<.05,'Pointer capture releases outside the button');
  await place(page);
  const dive=await page.locator('#touch-dive').boundingBox();
  await page.mouse.move(dive.x+dive.width/2,dive.y+dive.height/2);await page.mouse.down();await simulate(page,.65);await page.mouse.up();
  assert.ok((await state(page)).position[1]<5.5,'Mouse hold on visible dive button descends');
  for(const [key,sign] of [['r',1],['f',-1]]) {
    await place(page);await page.keyboard.down(key);await simulate(page,.65);await page.keyboard.up(key);
    assert.ok(((await state(page)).position[1]-8)*sign>2,'Keyboard '+key+' changes depth independently');
  }
  await place(page);await page.locator('#cruise-toggle').click();
  await page.keyboard.down('f');await simulate(page,.65);await page.keyboard.up('f');
  current=await state(page);
  assert.ok(current.cruising&&current.position[2]<77&&current.position[1]<5.5,'Continuous forward and dive operate simultaneously');
  await page.locator('#cruise-toggle').click();
  await simulate(page,.2);
  const readouts=await page.evaluate(()=>[document.getElementById('depth-panel-value').textContent,document.getElementById('depth').textContent]);
  assert.equal(readouts[0],readouts[1],'Local depth readout matches the actual HUD depth in the same frame');
  // Pause clears held input; returning must not silently keep rising.
  await place(page);await page.keyboard.down('r');await simulate(page,.1);await page.keyboard.press('Escape');await page.keyboard.up('r');
  assert.equal(await page.locator('#touch-rise').isVisible(),false,'Depth controls hide while paused');
  await page.locator('#start').click();await place(page);await simulate(page,.8);
  assert.ok(Math.abs((await state(page)).position[1]-8)<.05,'Paused input is cleared before resuming');
}
async function mobileDepth(page,context) {
  const cdp=await context.newCDPSession(page);
  const point=async (selector,id) => {const b=await page.locator(selector).boundingBox();return {x:b.x+b.width/2,y:b.y+b.height/2,id};};
  const touch=async (type,points) => cdp.send('Input.dispatchTouchEvent',{type,touchPoints:points});
  await place(page);await page.locator('#cruise-toggle').tap();
  await touch('touchStart',[await point('#touch-dive',1)]);await simulate(page,.65);
  let current=await state(page);
  assert.ok(current.cruising&&current.position[2]<77&&current.position[1]<5.5,'Phone holds dive while continuous swimming remains engaged');
  await touch('touchEnd',[]);await page.locator('#cruise-toggle').tap();await place(page);
  const pad=await point('#stick',1),steer={...pad,y:pad.y-34},rise=await point('#touch-rise',2);
  await touch('touchStart',[pad]);await touch('touchMove',[steer]);await touch('touchStart',[steer,rise]);await simulate(page,.65);
  current=await state(page);
  assert.ok(current.position[2]<77&&current.position[1]>10.5,'Two fingers swim forward and ascend at the same time');
  await touch('touchCancel',[]);await simulate(page,2);
  assert.ok((await state(page)).swimmer.speed<.05,'Cancelled touch releases joystick and depth together');
  await cdp.detach();
}
(async () => {
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const base=process.env.GAME_URL||'http://127.0.0.1:'+server.address().port;
  fs.mkdirSync(path.join(root,'tmp'),{recursive:true});
  browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-unsafe-swiftshader']});
  const errors=[];
  const boot=async context => {const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'/?test=1&depth-check=1');await page.waitForFunction(()=>document.documentElement.dataset.engineVersion==='free-ocean',null,{timeout:60000});assert.equal(await page.locator('#touch-rise').isVisible(),false,'No gameplay controls over menu');await page.locator('#start').click();return page;};
  const desktop=await browser.newContext({viewport:{width:1360,height:850},serviceWorkers:'block'}),page=await boot(desktop);
  await checkLayout(page,['#touch-rise','#touch-dive','#cruise-toggle','#open-atlas','#pause']);
  await desktopDepth(page);
  await page.screenshot({path:path.join(root,'tmp/depth-desktop.png')});
  await page.setViewportSize({width:1000,height:600});await checkLayout(page,['#touch-rise','#touch-dive','#cruise-toggle','#open-atlas','#pause']);
  await desktop.close();
  const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:1,serviceWorkers:'block'}),phone=await boot(mobile);
  for(const viewport of [{width:390,height:844},{width:844,height:390},{width:320,height:640}]) {
    await phone.setViewportSize(viewport);
    await checkLayout(phone,['#touch-rise','#touch-dive','#touch-boost','#touch-skill','#stick','#cruise-toggle','#open-atlas','#pause']);
    await mobileDepth(phone,mobile);
    await phone.screenshot({path:path.join(root,'tmp/depth-mobile-'+viewport.width+'.png')});
  }
  assert.deepEqual(errors,[],'No runtime errors while using desktop/mobile depth controls');
  console.log('PASS: visible unique depth controls, real mouse/key/touch ascent and dive, simultaneous forward/lift, safe releases, accurate depth readout, desktop and 3 mobile layouts.');
})().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{await browser?.close();server.close();});
