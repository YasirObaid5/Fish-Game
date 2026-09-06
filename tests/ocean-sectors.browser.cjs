const {chromium}=require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist');let browser;
const server=http.createServer((req,res)=>{const f=path.resolve(dist,'.'+new URL(req.url,'http://test').pathname.replace(/\/$/,'/index.html'));if(!f.startsWith(dist+path.sep)){res.writeHead(403);return res.end();}fs.readFile(f,(e,d)=>{res.writeHead(e?404:200,{'Content-Type':{'.html':'text/html','.js':'text/javascript','.css':'text/css'}[path.extname(f)]||'application/octet-stream'});res.end(e?'Missing':d);});});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=process.env.GAME_URL||'http://127.0.0.1:'+server.address().port;
 browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',args:['--enable-unsafe-swiftshader']});
 const context=await browser.newContext({viewport:{width:1280,height:800},serviceWorkers:'block'}),page=await context.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&/WebGL|THREE|shader/.test(m.text()))errors.push(m.text());});
 await page.goto(base+'/?test=1');await page.waitForFunction(()=>document.documentElement.dataset.engine==='ready',null,{timeout:90000});await page.locator('#start').click();
 const state=()=>page.evaluate(()=>window.__ocean.snapshot());
 const start=await state();assert.ok(start.streaming.regions>500);assert.ok(start.streaming.active<start.streaming.regions*.5);assert.ok(start.garden.polyps>300);
 const route=[[0,10,22],[85,8,80],[180,-10,-160],[-180,-25,-160],[100,-55,269],[350,-35,0],[0,10,22]],counts=[],active=[];
 for(let pass=0;pass<2;pass++){
  for(const p of route){await page.evaluate(p=>{window.__ocean.place(...p);window.__ocean.aim(0);window.__ocean.simulate(.2);},p);const s=await state();assert.equal(s.streaming.regions,start.streaming.regions);assert.equal(s.collisionTriangles,start.collisionTriangles);assert.ok(s.streaming.active>0&&s.streaming.active<s.streaming.regions*.6);assert.ok(s.position.concat(s.camera).every(Number.isFinite));active.push(s.streaming.active);}
  counts.push((await state()).geometries);
 }
 assert.ok(counts[1]<=counts[0]+5,'A second full tour reuses the existing GPU geometry');assert.ok(Math.max(...active)-Math.min(...active)>80,'Active rendering region follows travel');
 // Leaving a region does not reset a collected reward or the expedition.
 await page.evaluate(()=>{window.__ocean.place(85,8,80);window.__ocean.spawn('pearl',85,8,80);window.__ocean.step(.05);});const collected=await state();
 await page.evaluate(()=>{window.__ocean.place(-260,-30,0);window.__ocean.simulate(.2);window.__ocean.place(85,8,80);window.__ocean.simulate(.2);});const returned=await state();
 assert.equal(returned.run.score,collected.run.score);assert.equal(returned.journal.stats.pearls,collected.journal.stats.pearls);
 assert.deepEqual(errors,[]);console.log('PASS: moving rendering window, preserved collision triangles and rewards, living reef understory, two full world tours with bounded GPU geometry.',{regions:start.streaming.regions,activeRange:[Math.min(...active),Math.max(...active)],geometryCounts:counts});
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{await browser?.close();server.close();});
