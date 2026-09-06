const {chromium}=require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist');
let browser;
const server=http.createServer((req,res)=>{const url=new URL(req.url,'http://local'),file=path.resolve(dist,'.'+decodeURIComponent(url.pathname).replace(/\/$/,'/index.html'));if(!file.startsWith(dist+path.sep)){res.writeHead(403);return res.end();}fs.readFile(file,(error,data)=>{res.writeHead(error?404:200,{'Content-Type':{'.js':'text/javascript','.css':'text/css','.html':'text/html','.png':'image/png','.webmanifest':'application/manifest+json'}[path.extname(file)]||'application/octet-stream'});res.end(error?'Missing':data);});});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const base=process.env.GAME_URL||'http://127.0.0.1:'+server.address().port;
 browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',args:['--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1,serviceWorkers:'block'}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 await page.goto(base+'/?test=1');await page.waitForFunction(()=>document.documentElement.dataset.engine==='ready',null,{timeout:90000});
 await page.locator('#start').click();await page.evaluate(()=>window.__ocean.simulate(2));
 fs.mkdirSync(path.join(root,'tmp'),{recursive:true});
 const prefix=process.env.CAPTURE_PREFIX||'optics';
 const capture=async(name)=>{await page.screenshot({path:path.join(root,'tmp',prefix+'-'+name+'.png')});console.log(name,JSON.stringify(await page.evaluate(()=>window.__ocean.snapshot())));};
 await capture('start');
 if(!process.env.CAPTURE_START_ONLY){
   for(const [name,p,yaw,pitch] of [['reef',[2,2,-10],-.4,0],['surface',[0,16.8,80],0,1.2],['above',[0,18.6,80],0,0],['ravine',[-5,5,-41],-.6,0]]){
     await page.evaluate(({p,yaw,pitch})=>{window.__ocean.place(...p);window.__ocean.aim(yaw,pitch);window.__ocean.simulate(.6);},{p,yaw,pitch});await capture(name);
   }
 }
 console.log('ERRORS',JSON.stringify(errors));if(errors.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{await browser?.close();server.close();});
