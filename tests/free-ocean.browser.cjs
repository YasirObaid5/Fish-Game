// Production-build acceptance: real WebGL + keyboard/touch, not a mocked renderer.
const { chromium } = require('playwright');
const http = require('node:http'), fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..'), dist = path.join(root, 'dist');
const types = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.png':'image/png', '.svg':'image/svg+xml', '.webmanifest':'application/manifest+json' };
let browser;
const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://local').pathname;
  const file = path.resolve(dist, '.' + decodeURIComponent(pathname).replace(/\/$/, '/index.html'));
  if (!file.startsWith(dist + path.sep)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (error, bytes) => { res.writeHead(error ? 404 : 200, { 'Content-Type':types[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-store' }); res.end(error ? 'Missing' : bytes); });
});
const near = (a, b, tolerance) => Math.abs(a-b) <= tolerance;
const distance = (a,b) => Math.hypot(...a.map((n,i)=>n-b[i]));

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = process.env.GAME_URL || 'http://127.0.0.1:' + server.address().port;
  fs.mkdirSync(path.join(root, 'tmp'), { recursive:true });
  browser = await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH || undefined,args:['--enable-unsafe-swiftshader']});
  const context = await browser.newContext({ viewport:{width:1360,height:850}, serviceWorkers:'block' });
  const page = await context.newPage(), errors = [], glErrors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', message => {if(message.type()==='error' && /THREE|WebGL|shader|GL_INVALID/i.test(message.text())) glErrors.push(message.text());});
  const state = () => page.evaluate(() => window.__ocean.snapshot());
  const sim = seconds => page.evaluate(seconds => window.__ocean.simulate(seconds), seconds);
  const place = (x,y,z,yaw=0,pitch=0) => page.evaluate(p => {window.__ocean.place(...p.slice(0,3));window.__ocean.aim(p[3],p[4]);}, [x,y,z,yaw,pitch]);
  const hold = async (key, seconds) => {await page.keyboard.down(key);await sim(seconds);await page.keyboard.up(key);};
  const shot = name => page.screenshot({path:path.join(root,'tmp/free-'+name+'.png')});
  const boot = async () => {await page.goto(base+'/?test=1&free-check=1');await page.waitForFunction(()=>document.documentElement.dataset.engineVersion==='free-ocean', null, {timeout:30000});};
  const restart = async () => {if((await state()).mode==='playing')await page.locator('#pause').click();if((await state()).mode!=='menu')await page.locator('#home').click();await page.locator('#start').click();};
  await boot();
  assert.equal(await page.locator('#error').isVisible(),false);
  assert.ok(await page.locator('#ocean').evaluate(canvas => !!canvas.getContext('webgl2')), 'Real WebGL2 context');
  await shot('menu');
  await page.locator('#start').click();
  assert.equal((await state()).hunters.length,2,'Only two active direct-chasing predators');

  // A distant, empty patch isolates controls from pearls, landmarks and sanctuary bonuses.
  await place(85,8,80);let before=await state();
  await sim(1);assert.ok(distance((await state()).position,before.position)<.02,'No automatic forward scrolling');
  await hold('ArrowUp',1.5);let after=await state();assert.ok(after.position[2]<before.position[2]-10,'Arrow up swims forwards');
  before=after;await hold('ArrowDown',2);after=await state();assert.ok(after.position[2]>before.position[2]+5,'Reverse is a genuine escape direction');
  await place(85,8,80);await hold('ArrowRight',1);assert.ok((await state()).swimmer.yaw>1.5);
  await hold('ArrowUp',1);assert.ok((await state()).position[0]>90,'Heading steers the world-space direction');
  await place(85,8,80);await hold('ArrowRight',3.6);assert.ok(Math.abs((await state()).swimmer.yaw)<.2,'A full 360-degree turn wraps naturally');
  await hold('f',.8);assert.ok((await state()).position[1]<4,'F dives');
  await hold('r',1);assert.ok((await state()).swimmer.velocity.y>6,'R rises');
  await place(85,8,80);const viewBefore=await state();
  await page.mouse.move(640,410);await page.mouse.down();await page.mouse.move(820,340,{steps:8});await page.mouse.up();await sim(.2);
  const looked=await state();assert.ok(looked.swimmer.yaw>.6&&looked.swimmer.pitch>.15,'Dragging the sea aims freely in yaw and pitch');
  assert.ok(distance(looked.camera,viewBefore.camera)>1,'Follow camera rotates with the swimmer');

  // Regression: looking at the surface used to turn forward into an unwanted jump.
  await place(85,8,80,0,1.25);
  await hold('ArrowUp',1.5);after=await state();
  assert.ok(Math.abs(after.position[1]-8)<.01 && after.position[2]<70 && !after.swimmer.airborne,'Forward is horizontal even after looking up');
  await place(85,8,80,0,-1.25);
  await page.locator('#cruise-toggle').click();await sim(1.5);after=await state();
  assert.ok(after.cruising && after.position[2]<70 && Math.abs(after.position[1]-8)<.01,'Visible cruise keeps swimming after click release without diving');
  assert.equal(await page.locator('#cruise-toggle').getAttribute('aria-pressed'),'true');
  await page.keyboard.press('c');await sim(2);
  assert.ok(!(await state()).cruising && (await state()).swimmer.speed<.03,'C switches off and decelerates');
  await page.keyboard.press('c');await hold('ArrowDown',.5);assert.equal((await state()).cruising,false,'Reverse cancels cruise');
  await page.keyboard.press('c');await page.locator('#pause').click();await page.locator('#start').click();
  assert.equal((await state()).cruising,false,'Pause/resume never silently restarts cruise');
  await place(85,8,80);
  await shot('swimming');

  // Score labels must match real changes, including a negative damage label.
  await restart();await place(90,7,80);
  await page.evaluate(()=>{const p=window.__ocean.snapshot().position;window.__ocean.spawn('pearl',...p);window.__ocean.step(.05);});
  assert.equal((await state()).run.score,5);assert.ok((await state()).feedback.includes('+5'));
  await page.evaluate(()=>{const p=window.__ocean.snapshot().position;window.__ocean.spawn('jelly',...p);window.__ocean.step(.05);});
  assert.equal((await state()).run.score,2);assert.equal((await state()).run.lives,2);assert.ok((await state()).feedback.includes('-3'));
  await shot('score');await place(0,10,22);await sim(3);

  // Locked controls stay locked; escaping three real hunter state machines earns the unlock.
  await page.keyboard.press('x');await sim(.05);assert.equal((await state()).swimmer.feintTime,0);
  const escapesBefore=(await state()).journal.stats.escapes;
  for(let i=0;i<3;i++){
    await place(80,8,20);
    await page.evaluate(()=>window.__ocean.hunter(0,{x:80,y:8,z:3}));
    await sim(.1);assert.equal((await state()).hunters[0].mode,'telegraph');
    await sim(1.25);assert.equal((await state()).hunters[0].mode,'chase');
    await place(122,8,20);await sim(.1);assert.equal((await state()).hunters[0].mode,'recover');
    await sim(.2);assert.equal((await state()).hunters[0].mode,'recover','Escape does not instantly re-arm its hunter');
  }
  assert.equal((await state()).journal.stats.escapes,escapesBefore+3);
  await place(85,8,80);await page.keyboard.press('x');await sim(.05);
  assert.ok((await state()).swimmer.feintTime>0);assert.ok((await state()).run.invulnerable>0);
  assert.ok((await state()).swimmer.feintCooldown>11,'Unlocked X performs the actual protected double feint');
  const cooldown=(await state()).swimmer.feintCooldown;
  await page.keyboard.press('x');await sim(.05);assert.ok((await state()).swimmer.feintCooldown<cooldown,'Repeated X cannot reset or spam the skill');
  await shot('messi');

  // Surface action is ballistic, visibly rises above sea level, and splashes back under.
  let highest=0;const breachesBefore=(await state()).journal.stats.breaches;
  for(let jump=0;jump<4;jump++){
    await place(85,16.1,80);
    await page.keyboard.down('r');
    const arc=await page.evaluate(()=>{
      const ys=[], air=[];
      for(let i=0;i<60;i++){window.__ocean.step(.05);const s=window.__ocean.snapshot();ys.push(s.position[1]);air.push(s.swimmer.airborne);}
      return {max:Math.max(...ys),wasAir:air.includes(true),end:window.__ocean.snapshot()};
    });
    await page.keyboard.up('r');highest=Math.max(highest,arc.max);
    assert.ok(arc.wasAir&&arc.max>19&&arc.max<21,'A short breach, not flight');
    assert.equal(arc.end.swimmer.airborne,false);assert.ok(arc.end.position[1]<=18);
  }
  assert.equal((await state()).journal.stats.breaches,breachesBefore+4);
  await place(85,8,80);await sim(4);await page.keyboard.press('Space');await sim(.05);
  assert.ok((await state()).swimmer.cooldown<3.05,'Dolphin medal reduces actual boost recovery by 25%');
  assert.ok((await state()).audio.events.breach>=4&&(await state()).audio.events.splash>=4);

  // Sanctuary and above-water escape are independent alternatives to simply outrunning.
  await place(20,10,22);await page.evaluate(()=>window.__ocean.hunter(0,{x:27,y:10,z:22}));await sim(.1);
  assert.equal((await state()).hunters[0].mode,'telegraph');
  await place(0,10,22);await sim(.1);assert.equal((await state()).hunters[0].mode,'recover');
  assert.equal(await page.locator('#safe-label').isVisible(),true);

  // Lifetime pearl collection unlocks the persistent pickup radius, not merely a badge.
  const pearlCount=(await state()).journal.stats.pearls;
  await page.evaluate(count=>window.__ocean.progress('pearls',Math.max(0,60-count)),pearlCount);
  await place(90,7,80);const pearlScore=(await state()).run.score;
  await page.evaluate(()=>window.__ocean.spawn('pearl',92.5,7,80));await sim(.5);
  assert.ok((await state()).run.score>pearlScore,'Pearl medal attracts a pearl from 2.5m away');
  for(const landmark of (await state()).landmarks.filter(l=>l.id!=='sanctuary').slice(0,6)){
    await place(...landmark.p);await sim(.1);
  }
  await page.locator('#pause').click();await page.locator('#home').click();await page.locator('[data-world="kelp"]').click();await page.locator('#start').click();
  await place(...(await state()).landmarks.find(l=>l.id!=='sanctuary').p);await sim(.1);
  assert.ok((await state()).journal.places.length>=6,'Six destinations recorded across the distinct biomes');

  // Chests, ordered ring challenge, visible journals and retained abilities between sessions.
  await place(85,8,80);let treasures=(await state()).journal.stats.treasures;
  await page.evaluate(()=>{window.__ocean.spawn('chest',85,8,80);window.__ocean.step(.05);});
  assert.equal((await state()).journal.stats.treasures,treasures+1);
  await page.evaluate(()=>window.__ocean.startRace());let racing=await state();assert.equal(racing.race.points.length,7);
  for(const p of racing.race.points){await place(...p);await sim(.05);}
  assert.equal((await state()).race,null);assert.ok((await state()).journal.stats.races>=1);
  await page.keyboard.press('m');assert.equal(await page.locator('#atlas').isVisible(),true);
  assert.equal(await page.locator('#medal-list .unlocked').count(),4);
  await shot('journal');await page.locator('#close-atlas').click();
  const savedJournal=(await state()).journal;
  await page.reload();await page.waitForFunction(()=>document.documentElement.dataset.engineVersion==='free-ocean');
  assert.deepEqual((await state()).journal,savedJournal,'Earned progress and medals survive reload');
  await page.locator('#start').click();await place(85,8,80);await page.keyboard.press('x');await sim(.05);
  assert.ok((await state()).swimmer.feintTime>0,'Saved medal remains usable in a new expedition');

  // The ocean stays available beyond the old 800m/short-run finish, without unbounded content.
  await place(0,10,22);await sim(90);const warm=await state();
  await sim(600);const long=await state();
  assert.equal(long.mode,'playing');assert.ok(long.run.elapsed>600);
  assert.ok(long.items.length<220,'Timed surprise entities are cleaned up');
  assert.ok(long.geometries<=warm.geometries+40,'Geometry remains bounded across ten minutes of surprise cycles');
  assert.equal(long.hunters.length,2);
  const geometryCounts=[];
  for(let i=0;i<4;i++){await restart();await sim(.2);geometryCounts.push((await state()).geometries);}
  assert.ok(Math.max(...geometryCounts)-Math.min(...geometryCounts)<=4,'New expeditions do not leak generated hunter/item geometry');
  await shot('long-session');
  for(const world of ['kelp','abyss','reef']){
    await page.locator('#pause').click();await page.locator('#home').click();await page.locator('[data-world="'+world+'"]').click();
    await page.locator('#start').click();await sim(.25);assert.equal((await state()).world,world);await shot(world);
  }

  // Android-sized portrait and landscape, with simultaneous steering, lift and boost.
  const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:1,serviceWorkers:'block'});
  const phone=await mobile.newPage();phone.on('pageerror',e=>errors.push(e.message));
  await phone.goto(base+'/?test=1&free-mobile=1');await phone.waitForFunction(()=>document.documentElement.dataset.engineVersion==='free-ocean');
  await phone.locator('#start').tap();await phone.evaluate(()=>window.__ocean.place(85,8,80));
  await phone.evaluate(()=>window.__ocean.aim(0,1.25));
  await phone.locator('#cruise-toggle').tap();await phone.evaluate(()=>window.__ocean.simulate(1.5));
  let cruiseState=await phone.evaluate(()=>window.__ocean.snapshot());
  assert.ok(cruiseState.cruising && cruiseState.position[2]<70 && Math.abs(cruiseState.position[1]-8)<.01,'Phone forward lock maintains depth after an upward look');
  await phone.locator('#cruise-toggle').tap();await phone.evaluate(()=>window.__ocean.simulate(2));
  assert.ok(!(await phone.evaluate(()=>window.__ocean.snapshot())).cruising,'Second tap stops cruise');
  await phone.evaluate(()=>{window.__ocean.place(85,8,80);window.__ocean.aim(0);});
  const cdp=await mobile.newCDPSession(phone),pad=await phone.locator('#stick').boundingBox(),rise=await phone.locator('#touch-rise').boundingBox(),boost=await phone.locator('#touch-boost').boundingBox();
  const center={x:pad.x+pad.width/2,y:pad.y+pad.height/2,id:1};
  await phone.evaluate(()=>window.__ocean.aim(0,1.25));
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[center]});
  await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{...center,y:center.y-35}]});
  await phone.evaluate(()=>window.__ocean.simulate(1.5));
  const padForward=await phone.evaluate(()=>window.__ocean.snapshot());
  assert.ok(padForward.position[2]<72 && Math.abs(padForward.position[1]-8)<.01 && !padForward.swimmer.airborne,'Phone forward pad cannot rise or jump after looking up');
  await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  await phone.evaluate(()=>{window.__ocean.place(85,8,80);window.__ocean.aim(0);});
  const steering={...center,x:center.x+22,y:center.y-22};
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[center]});
  await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[steering]});
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[steering,{x:rise.x+rise.width/2,y:rise.y+rise.height/2,id:2}]});
  await phone.evaluate(()=>window.__ocean.simulate(.5));let ms=await phone.evaluate(()=>window.__ocean.snapshot());
  assert.ok(ms.swimmer.yaw>.3&&ms.position[2]<79&&ms.position[1]>9,'Two fingers turn, swim and rise simultaneously');
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[steering,{x:rise.x+rise.width/2,y:rise.y+rise.height/2,id:2},{x:boost.x+boost.width/2,y:boost.y+boost.height/2,id:3}]});
  await phone.evaluate(()=>window.__ocean.step(.05));assert.ok((await phone.evaluate(()=>window.__ocean.snapshot())).swimmer.boost>0);
  await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  for(const viewport of [{width:390,height:844},{width:844,height:390}]){
    await phone.setViewportSize(viewport);await phone.waitForTimeout(150);
    for(const selector of ['#cruise-toggle','#stick','#touch-rise','#touch-dive','#touch-boost','#touch-skill','#open-atlas','#pause']){
      const b=await phone.locator(selector).boundingBox();assert.ok(b&&b.x>=0&&b.y>=0&&b.x+b.width<=viewport.width+1&&b.y+b.height<=viewport.height+1,selector+' fits '+JSON.stringify(viewport));
    }
    ms=await phone.evaluate(()=>window.__ocean.snapshot());assert.ok(near(ms.renderSize[0]/ms.renderSize[1],viewport.width/viewport.height,.015));
    await phone.screenshot({path:path.join(root,'tmp/free-mobile-'+viewport.width+'.png')});
  }
  await phone.locator('#open-atlas').tap();assert.equal(await phone.locator('#atlas').isVisible(),true);await phone.locator('#close-atlas').tap();
  assert.deepEqual(errors,[],'No uncaught page errors');assert.deepEqual(glErrors,[],'No renderer or shader errors');
  console.log('PASS: real WebGL free swimming, 360-degree camera, reverse/dive/jumps, score feedback, rare escapable hunters, earned persistent medal abilities, chest/ring missions, ten-minute bounded simulation, three worlds and Android touch layouts. Peak jump:',highest.toFixed(2));
})().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{await browser?.close();server.close();});
