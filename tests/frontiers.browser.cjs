const {chromium}=require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist');
let browser;
const server=http.createServer((req,res)=>{const url=new URL(req.url,'http://local'),file=path.resolve(dist,'.'+decodeURIComponent(url.pathname).replace(/\/$/,'/index.html'));if(!file.startsWith(dist+path.sep)){res.writeHead(403);return res.end();}fs.readFile(file,(error,data)=>{res.writeHead(error?404:200,{'Content-Type':{'.js':'text/javascript','.css':'text/css','.html':'text/html','.png':'image/png','.webmanifest':'application/manifest+json'}[path.extname(file)]||'application/octet-stream'});res.end(error?'Missing':data);});});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=process.env.GAME_URL||'http://127.0.0.1:'+server.address().port;
 browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-unsafe-swiftshader']});
 const context=await browser.newContext({viewport:{width:1280,height:820},deviceScaleFactor:1,serviceWorkers:'block'}),page=await context.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&/THREE|WebGL|shader|GL_INVALID/i.test(m.text()))errors.push(m.text());});
 await page.goto(base+'/?test=1');await page.waitForFunction(()=>document.documentElement.dataset.engine==='ready',null,{timeout:30000});
 const state=()=>page.evaluate(()=>window.__ocean.snapshot());
 await page.screenshot({path:path.join(root,'tmp/frontiers-menu.png')});
 await page.locator('#graphics-quality').selectOption('balanced');assert.equal((await state()).quality,'balanced');
 await page.locator('#graphics-quality').selectOption('high');await page.reload();await page.waitForFunction(()=>document.documentElement.dataset.engine==='ready');assert.equal((await state()).quality,'high','Quality choice survives reload');
 await page.locator('#start').click();await page.evaluate(()=>window.__ocean.simulate(5));await page.screenshot({path:path.join(root,'tmp/frontiers-reef.png')});
 const s=await state();assert.equal(s.worldRadius,420);assert.ok(s.collisionRecords>300);assert.ok(s.collisionTriangles>100000);assert.equal(s.landmarks.length,9);
 const meshResults=await page.evaluate(()=>window.__ocean.solidSamples().filter((_,i)=>i%4===0).map(({p,n})=>{
  const from={x:p[0]+n[0]*3.5,y:p[1]+n[1]*3.5,z:p[2]+n[2]*3.5},to={x:p[0]-n[0]*1.5,y:p[1]-n[1]*1.5,z:p[2]-n[2]*1.5};return window.__ocean.collisionProbe(from,to);
 }));assert.ok(meshResults.length>60);assert.ok(meshResults.every(r=>r.hits>0&&r.penetrating===0),'Sampled actual rendered rock faces stop continuous motion without residual penetration');
 // Follow the open surface-water route across the old 150m boundary.
 await page.evaluate(()=>{window.__ocean.place(0,12,100);window.__ocean.aim(Math.PI);});await page.keyboard.down('ArrowUp');await page.evaluate(()=>window.__ocean.simulate(20));await page.keyboard.up('ArrowUp');
 assert.ok((await state()).position[2]>280,'The expanded ocean is traversable beyond the previous boundary');assert.equal((await state()).penetrating,0);
 for(const id of ['titan','lantern','rift']){
  await page.locator('#open-atlas').click();await page.locator('[data-destination="'+id+'"]').click();
  await page.evaluate(id=>{const p=window.__ocean.snapshot().landmarks.find(l=>l.id===id).p;window.__ocean.place(p[0],p[1],p[2]+24);window.__ocean.aim(0);window.__ocean.simulate(1.5);},id);
  await page.screenshot({path:path.join(root,'tmp/frontiers-'+id+'.png')});const st=await state();assert.ok(st.position[1]<-12,'Outer environments add genuine depth, not just more flat water');assert.equal(st.penetrating,0);
 }

 await page.evaluate(()=>window.__ocean.encounter('shoal'));
 let deep=await state();assert.ok(deep.items.some(i=>i.kind==='gold'&&i.p[1]<-20),'Golden shoals spawn at the current deep-water level');
 await page.evaluate(()=>window.__ocean.startRace());deep=await state();assert.ok(deep.race.points.every(p=>p[1]<-20&&Math.hypot(p[0],p[2])<420),'Deep races stay in the expanded world');
 const mobile=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true,serviceWorkers:'block'}),phone=await mobile.newPage();
 phone.on('pageerror',e=>errors.push(e.message));await phone.goto(base+'/?test=1');await phone.waitForFunction(()=>document.documentElement.dataset.engine==='ready');
 await phone.locator('#graphics-quality').selectOption('high');assert.equal((await phone.evaluate(()=>window.__ocean.snapshot())).pixelRatio,2,'High quality enables a higher resolution on a high-density phone');
 await phone.locator('#graphics-quality').selectOption('balanced');assert.ok((await phone.evaluate(()=>window.__ocean.snapshot())).pixelRatio<1.3);
 await phone.locator('#start').tap();await phone.evaluate(()=>window.__ocean.simulate(1));await phone.screenshot({path:path.join(root,'tmp/frontiers-phone.png')});
 assert.deepEqual(errors,[]);console.log('PASS: expanded 840m ocean, nine landmarks, persisted graphics quality, phone resolution modes and '+meshResults.length+' swept collisions against real rock meshes.',JSON.stringify({records:s.collisionRecords,triangles:s.collisionTriangles,drawCalls:s.calls,renderTriangles:s.triangles}));
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{await browser?.close();server.close();});
