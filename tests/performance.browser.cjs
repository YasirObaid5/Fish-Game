const {chromium}=require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist');let browser;
const server=http.createServer((req,res)=>{const f=path.resolve(dist,'.'+new URL(req.url,'http://test').pathname.replace(/\/$/,'/index.html'));if(!f.startsWith(dist+path.sep)){res.writeHead(403);return res.end();}fs.readFile(f,(e,d)=>{res.writeHead(e?404:200,{'Content-Type':{'.html':'text/html','.js':'text/javascript','.css':'text/css'}[path.extname(f)]||'application/octet-stream'});res.end(e?'Missing':d);});});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=process.env.GAME_URL||'http://127.0.0.1:'+server.address().port;
 browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',args:['--enable-unsafe-swiftshader']});
 const rows=[],errors=[];
 for(const mobile of [false,true]){
  const context=await browser.newContext({viewport:mobile?{width:390,height:844}:{width:1280,height:800},deviceScaleFactor:1,isMobile:mobile,hasTouch:mobile,serviceWorkers:'block'}),page=await context.newPage();
  page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&/WebGL|THREE|shader|GL_INVALID/.test(m.text()))errors.push(m.text());});
  await page.goto(base+'/?test=1');await page.waitForFunction(()=>document.documentElement.dataset.engine==='ready',null,{timeout:90000});await page.locator('#start').click();
  for(const pose of mobile?['reef']:['reef','surface','deep']){
   await page.evaluate(pose=>{window.__ocean.cameraPose?.(null);window.__ocean.place(...(pose==='reef'?[0,10,22]:pose==='surface'?[85,8,80]:[100,-55,269]));window.__ocean.aim(0,pose==='surface'?1.2:0);window.__ocean.simulate(2);},pose);
   const metrics=await page.evaluate(async warmFrames=>{
    for(let i=0;i<warmFrames;i++)await new Promise(requestAnimationFrame);
    const intervals=[];let last=performance.now();for(let i=0;i<60;i++){await new Promise(requestAnimationFrame);const n=performance.now();intervals.push(n-last);last=n;}
    intervals.sort((a,b)=>a-b);const s=window.__ocean.snapshot();const gl=document.querySelector('canvas').getContext('webgl2'),extension=gl.getExtension('WEBGL_debug_renderer_info');
    return {medianMs:intervals[30],p95Ms:intervals[57],drawCalls:s.calls,triangles:s.triangles,geometries:s.geometries,quality:s.quality,adaptiveScale:s.adaptiveScale??1,streaming:s.streaming??null,gpu:extension?gl.getParameter(extension.UNMASKED_RENDERER_WEBGL):'unavailable'};
   },Number(process.env.PERF_WARM_FRAMES)||12);rows.push({device:mobile?'phone-emulated':'desktop-headless',pose,...metrics});
   await page.screenshot({path:path.join(root,'tmp',`performance-${process.env.PERF_LABEL||'current'}-${mobile?'phone':pose}.png`)});
  }
  await context.close();
 }
 assert.deepEqual(errors,[]);const report={base,measuredAt:new Date().toISOString(),warmupFrames:Number(process.env.PERF_WARM_FRAMES)||12,note:'Headless browser on this host; not physical Android FPS. Timings include browser scheduling.',rows};
 fs.writeFileSync(path.join(root,'tmp',`performance-${process.env.PERF_LABEL||'current'}.json`),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{await browser?.close();server.close();});
