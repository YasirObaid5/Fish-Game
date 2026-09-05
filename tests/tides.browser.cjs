const { chromium } = require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const server=http.createServer((req,res)=>{
  const file=path.resolve(root,'.'+new URL(req.url,'http://local').pathname.replace(/\/$/,'/index.html'));
  if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
  fs.readFile(file,(err,data)=>{res.writeHead(err?404:200,{'Content-Type':{'.js':'text/javascript','.mjs':'text/javascript','.html':'text/html','.css':'text/css'}[path.extname(file)]||'application/octet-stream'});res.end(err?'Not found':data);});
});
let browser;
(async()=>{
  await new Promise(r=>server.listen(0,'127.0.0.1',r));fs.mkdirSync(path.join(root,'tmp'),{recursive:true});
  const base=process.env.GAME_URL||'http://127.0.0.1:'+server.address().port;
  browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-unsafe-swiftshader']});
  const page=await browser.newPage({viewport:{width:1440,height:900}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.goto(base+'/?test=1&tides-check=1');await page.waitForFunction(()=>document.documentElement.dataset.engine==='ready');
  const state=()=>page.evaluate(()=>window.__ocean.snapshot());
  const screenshot=name=>page.screenshot({path:path.join(root,'tmp/tides-'+name+'.png')});
  const restart=async()=>{
    const mode=(await state()).mode;
    if(mode==='playing')await page.keyboard.press('Escape');
    if((await state()).mode==='paused')await page.locator('#home').click();
    await page.locator('#start').click();
  };
  await page.waitForTimeout(800);await screenshot('menu');await restart();
  let result=await page.evaluate(()=>{window.__ocean.place(0,4.4);window.__ocean.spawn('pearl',0,4.4,-.1);window.__ocean.step(.05);return window.__ocean.snapshot();});
  assert.equal(result.run.score,5);assert.ok(result.feedback.includes('+5'));
  result=await page.evaluate(()=>{window.__ocean.spawn('shark',0,4.4,-.1);window.__ocean.step(.05);return window.__ocean.snapshot();});
  assert.equal(result.run.score,2);assert.ok(result.feedback.includes('-3'));
  await screenshot('points');
  await page.keyboard.press('Escape');const paused=(await state()).feedback;
  await page.waitForTimeout(1400);assert.deepEqual((await state()).feedback,paused,'Point feedback is frozen during pause');
  await restart();assert.equal((await state()).feedback.length,0);
  result=await page.evaluate(()=>{
    window.__ocean.place(0,4.4);window.__ocean.spawn('magnet',0,4.4,-.1);window.__ocean.step(.05);
    window.__ocean.spawn('gold',3,7.2,-4);window.__ocean.simulate(1);
    return window.__ocean.snapshot();
  });
  assert.ok(result.run.magnet>8);assert.ok(result.run.pearls>=1,'Magnet pulls pearls across height and horizontal distance');
  await restart();
  result=await page.evaluate(()=>{
    window.__ocean.place(0,4.4);
    for(let i=0;i<12;i++){window.__ocean.spawn('pearl',0,4.4,-.1);window.__ocean.step(.05);}
    const before=window.__ocean.snapshot().run.score;
    window.__ocean.spawn('gold',0,4.4,-.1);window.__ocean.step(.05);
    return {state:window.__ocean.snapshot(),delta:window.__ocean.snapshot().run.score-before};
  });
  assert.ok(result.state.run.frenzy>7);assert.equal(result.delta,100);assert.ok(result.state.feedback.some(text=>text.startsWith('+100')));
  await screenshot('rush');
  await restart();
  result=await page.evaluate(()=>{window.__ocean.place(0,4.4);window.__ocean.spawn('shark',1.8,4.4,1);window.__ocean.step(.05);return window.__ocean.snapshot();});
  assert.equal(result.run.nearMisses,1);assert.equal(result.run.score,8);
  await page.evaluate(()=>window.__ocean.simulate(.4));assert.equal((await state()).run.nearMisses,1,'A hazard can reward a close call only once');
  await restart();
  result=await page.evaluate(()=>{window.__ocean.place(0,4.4);window.__ocean.spawn('chest',0,4.4,-.1);window.__ocean.step(.05);return window.__ocean.snapshot();});
  assert.equal(result.run.treasures,1);assert.ok([40,100].includes(result.run.score));
  await restart();
  result=await page.evaluate(()=>{window.__ocean.place(0,4.4);window.__ocean.spawn('gate',0,4.4,-.1);window.__ocean.step(.05);return window.__ocean.snapshot();});
  assert.ok(result.run.current>3);assert.equal(result.run.score,15);
  await restart();
  result=await page.evaluate(()=>{window.__ocean.place(0,4.4);window.__ocean.spawn('jelly',0,4.85,-.1);window.__ocean.step(.05);return window.__ocean.snapshot();});
  assert.equal(result.run.lives,2,'Jellyfish bell and tentacles share a fair collision volume');
  await restart();
  await page.evaluate(()=>{
    window.__ocean.place(0,4.4);window.__ocean.encounter('whale');window.__ocean.simulate(4.5);
    window.__ocean.spawn('chest',-3,3.4,-17);window.__ocean.spawn('gate',2,5,-29);
    window.__ocean.spawn('jelly',4.5,6,-15);window.__ocean.spawn('magnet',-1,6,-24);window.__ocean.step(.05);
  });
  assert.equal((await state()).whale,true);
  await screenshot('encounters');
  await restart();
  await page.evaluate(()=>{window.__ocean.place(0,4.4);window.__ocean.spawn('shark',3,4.4,-20);window.__ocean.spawn('chest',-2,4,-28);window.__ocean.step(.05);});
  assert.ok(await page.locator('.depth-cue:not([hidden])').count()>0,'Distance cues appear over approaching objects');
  assert.match(await page.locator('#depth-cues').innerText(),/م/);
  const size=(await state()).renderSize;assert.deepEqual(size,[1440,900]);
  await page.setViewportSize({width:1000,height:700});await page.waitForTimeout(200);
  assert.deepEqual((await state()).renderSize,[1000,700],'Underwater render target resizes with the viewport');
  await page.setViewportSize({width:1440,height:900});
  for(const world of ['kelp','abyss']){
    await page.keyboard.press('Escape');await page.locator('#home').click();await page.locator('button[data-world="'+world+'"]').click();
    await page.waitForTimeout(300);await screenshot(world);await page.locator('#start').click();
  }
  let warm;
  for(let n=0;n<3;n++){
    await restart();
    result=await page.evaluate(()=>{window.__ocean.place(6.3,9.9);window.__ocean.simulate(100);return window.__ocean.snapshot();});
    assert.equal(result.mode,'ended');assert.equal(result.run.won,true);assert.equal(result.encounterIndex,8);
    if(n===0)warm=result.geometries;else assert.ok(result.geometries<=warm+8,'Repeated runs keep geometry allocations bounded');
  }
  await screenshot('complete');console.log('RENDER',JSON.stringify({calls:result.calls,triangles:result.triangles,geometries:result.geometries}));
  const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'});
  const mp=await mobile.newPage();mp.on('pageerror',e=>errors.push(e.message));
  await mp.goto(base+'/?test=1');await mp.waitForFunction(()=>document.documentElement.dataset.engine==='ready');await mp.locator('#start').tap();
  await mp.evaluate(()=>{window.__ocean.spawn('pearl',0,4.4,-.1);window.__ocean.step(.05);window.__ocean.spawn('gate',-1,4.4,-17);});
  const box=await mp.locator('#rush-box').boundingBox();assert.ok(box.x>=0&&box.x+box.width<=390);
  await mp.screenshot({path:path.join(root,'tmp/tides-mobile.png')});
  assert.deepEqual(errors,[]);
  console.log('PASS: real +5/-3 feedback, pause/reset, vertical magnet, timed rush, one-shot near miss, treasure, current, jellyfish, whale, depth cues, resize, all worlds, complete runs, mobile/reduced motion.');
})().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{await browser?.close();server.close();});
