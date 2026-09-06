// Real production WebGL acceptance. Pixel checks detect a broken/blank frame;
// screenshots still require human review and never establish AAA visual quality.
const {chromium}=require('playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist'),output=path.join(root,'tmp');
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.jpg':'image/jpeg','.png':'image/png','.glb':'model/gltf-binary','.webmanifest':'application/manifest+json'};
let browser;
const server=http.createServer((req,res)=>{
  const pathname=new URL(req.url,'http://local').pathname;
  const file=path.resolve(dist,'.'+decodeURIComponent(pathname).replace(/\/$/,'/index.html'));
  if(!file.startsWith(dist+path.sep)){res.writeHead(403);return res.end();}
  fs.readFile(file,(error,data)=>{res.writeHead(error?404:200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(error?'Missing':data);});
});
const state=page=>page.evaluate(()=>window.__ocean.snapshot());
const errors=[],failedAssets=[],loadedModels=[],frames=[];
function instrument(page){
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error'&&/THREE|WebGL|shader|GL_INVALID|framebuffer/i.test(m.text()))errors.push(m.text());});
  page.on('requestfailed',request=>{if(/\.(glb|jpg|png|js|css)(\?|$)/i.test(request.url()))failedAssets.push({url:request.url(),error:request.failure()?.errorText});});
  page.on('response',response=>{if(/\/assets\//.test(response.url())&&response.status()>=400)failedAssets.push({url:response.url(),status:response.status()});if(/\.glb(\?|$)/i.test(response.url())&&response.ok())loadedModels.push(response.url());});
}
function checkAssetStats(snapshot,label){
  assert.equal(snapshot.renderPipeline,'depth-optics-v1',label+' uses depth optics, not the old direct renderer');
  const kit=snapshot.reefArt;
  assert.ok(kit&&/^Original Blender/.test(kit.source),label+' loaded original Blender sculpture metadata');
  assert.ok(Number.isFinite(kit.fileBytes)&&kit.fileBytes>10000,label+' model has actual binary content');
  assert.equal(kit.assets.length,4,label+' has four original reef species');
  assert.deepEqual(kit.assets.map(a=>a.name).sort(),['coral_antler','coral_fan','coral_table','sponge_cluster']);
  const minInstances=label==='Phone'?8:12,maxInstances=label==='Phone'?16:24;
  assert.ok(Number.isFinite(kit.instances)&&kit.instances>=minInstances&&kit.instances<=maxInstances,label+' uses a bounded number of authored instances');
  assert.ok(Number.isFinite(kit.instanceTriangles)&&kit.instanceTriangles>10000&&kit.instanceTriangles<350000,label+' stays below 350k added reef instance triangles');
  assert.equal(kit.drawCalls,4,label+' batches the kit into four draw calls');
  for(const asset of kit.assets){assert.ok(Number.isFinite(asset.triangles)&&asset.triangles>100,asset.name+' has sculpted geometry');assert.ok(asset.dimensions.every(n=>Number.isFinite(n)&&n>0),asset.name+' has finite positive dimensions');}
}
async function frame(page,name){
  const pixels=await page.evaluate(()=>{
    window.__ocean.step(0);
    const sample=document.createElement('canvas');sample.width=80;sample.height=54;
    const ctx=sample.getContext('2d',{willReadFrequently:true});ctx.drawImage(document.getElementById('ocean'),0,0,80,54);
    const rgba=ctx.getImageData(0,0,80,54).data,colors=new Set();let sum=0,sum2=0,dark=0,bright=0;
    for(let i=0;i<rgba.length;i+=4){const l=.2126*rgba[i]+.7152*rgba[i+1]+.0722*rgba[i+2];sum+=l;sum2+=l*l;if(l<4)dark++;if(l>250)bright++;colors.add((rgba[i]>>3)*1024+(rgba[i+1]>>3)*32+(rgba[i+2]>>3));}
    const n=rgba.length/4,mean=sum/n;return {mean,deviation:Math.sqrt(Math.max(0,sum2/n-mean*mean)),colors:colors.size,darkFraction:dark/n,whiteFraction:bright/n};
  });
  assert.ok(pixels.colors>12&&pixels.deviation>2&&pixels.darkFraction<.95&&pixels.whiteFraction<.95,name+' is a rendered nonblank scene');
  const snapshot=await state(page);assert.ok(snapshot.position.concat(snapshot.camera).every(Number.isFinite),name+' has finite transforms');
  await page.screenshot({path:path.join(output,'optics-'+name+'.png')});
  frames.push({name,...pixels,camera:snapshot.camera,position:snapshot.position,drawCalls:snapshot.calls,renderTriangles:snapshot.triangles});
}
async function pose(page,position,target){
  await page.evaluate(({position,target})=>{window.__ocean.cameraPose(position,target);window.__ocean.simulate(.4);},{position,target});
}
(async()=>{
  fs.mkdirSync(output,{recursive:true});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const base=process.env.GAME_URL||'http://127.0.0.1:'+server.address().port;
  browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-unsafe-swiftshader']});
  const boot=async context=>{const page=await context.newPage();instrument(page);await page.goto(base+'/?test=1&reef-optics=1');await page.waitForFunction(()=>document.documentElement.dataset.engineVersion==='free-ocean',null,{timeout:90000});assert.equal(await page.locator('#error').isVisible(),false);return page;};
  const desktop=await browser.newContext({viewport:{width:1360,height:850},deviceScaleFactor:1,serviceWorkers:'block'}),page=await boot(desktop);
  const desktopStats=(await state(page)).reefArt;
  checkAssetStats(await state(page),'Desktop');await frame(page,'menu');
  await page.locator('#start').click();await page.evaluate(()=>window.__ocean.simulate(5));await frame(page,'default-play');
  assert.equal(await page.locator('#touch-rise').isVisible(),true);assert.equal(await page.locator('#touch-dive').isVisible(),true);
  // Looking toward the surface now orbits the chase camera beneath the fish,
  // while the independent forward throttle must still hold swimming depth.
  await page.evaluate(()=>{window.__ocean.place(85,8,80);window.__ocean.aim(0,1.2);window.__ocean.simulate(1);});
  const lookingUp=await state(page);
  assert.ok(lookingUp.camera[1]<lookingUp.position[1],'Upward view moves the chase camera below the fish so the real surface is visible');
  await page.keyboard.down('ArrowUp');await page.evaluate(()=>window.__ocean.simulate(1));await page.keyboard.up('ArrowUp');
  const forwardLookingUp=await state(page);
  assert.ok(Math.abs(forwardLookingUp.position[1]-8)<.05&&!forwardLookingUp.swimmer.airborne&&forwardLookingUp.position[2]<75,'Forward swimming maintains depth while looking up, without an unintended jump');
  await frame(page,'upward-play');
  await page.evaluate(()=>{window.__ocean.place(0,10,22);window.__ocean.aim(0);});
  await pose(page,[1,8,20],[-13,6,3]);await frame(page,'near-reef');
  await pose(page,[0,12,22],[2,35,4]);await frame(page,'snell-window');
  await pose(page,[0,21,32],[0,18,-65]);await frame(page,'above-surface');
  await page.evaluate(()=>window.__ocean.cameraPose(null));
  // Probe real triangle faces, not bounding boxes. Added rocks must be solid too.
  const collision=await page.evaluate(()=>window.__ocean.solidSamples('reef-ravine-rock').map(({p,n})=>{
    const from={x:p[0]+n[0]*3.5,y:p[1]+n[1]*3.5,z:p[2]+n[2]*3.5},to={x:p[0]-n[0]*1.5,y:p[1]-n[1]*1.5,z:p[2]-n[2]*1.5};return window.__ocean.collisionProbe(from,to);
  }));
  assert.ok(collision.length>=5,'Collision samples include each new ravine rock');
  assert.ok(collision.every(r=>r.hits>0&&r.penetrating===0),'Actual ravine faces stop swept movement without residual penetration');
  // Controlled before/after pair for a human depth-order review: the test-only
  // collectible is deliberately put behind a real opaque face, never in gameplay.
  const face=await page.evaluate(()=>window.__ocean.solidSamples('reef-ravine-rock')[2]);
  const eye=face.p.map((v,i)=>v+face.n[i]*8),behind=face.p.map((v,i)=>v-face.n[i]*3);
  await pose(page,eye,face.p);await frame(page,'rock-occlusion-before');
  await page.evaluate(p=>window.__ocean.spawn('gold',...p),behind);await frame(page,'rock-occlusion-after');
  await page.evaluate(()=>window.__ocean.cameraPose(null));
  const rift=(await state(page)).landmarks.find(l=>l.id==='rift').p;
  await page.evaluate(p=>{window.__ocean.place(p[0],p[1]+4,p[2]+20);window.__ocean.aim(0);window.__ocean.simulate(1);},rift);
  await frame(page,'deep-rift');
  await page.locator('#pause').click();await page.locator('#home').click();await page.locator('[data-world="abyss"]').click();await page.locator('#start').click();
  await pose(page,[0,8,20],[-13,6,3]);await frame(page,'night-reef');
  await page.evaluate(()=>window.__ocean.cameraPose(null));
  await desktop.close();
  const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:1,serviceWorkers:'block'}),phone=await boot(mobile);
  checkAssetStats(await state(phone),'Phone');await phone.locator('#start').tap();await phone.evaluate(()=>window.__ocean.simulate(5));
  await frame(phone,'phone-portrait');
  await phone.setViewportSize({width:844,height:390});await phone.evaluate(()=>window.__ocean.simulate(.5));await frame(phone,'phone-landscape');
  const mobileStats=(await state(phone)).reefArt;
  assert.ok(mobileStats.instances<desktopStats.instances,'Phone uses fewer reef instances than desktop');
  assert.ok(loadedModels.length>=2,'Both fresh browser contexts fetched the actual GLB');
  assert.deepEqual(failedAssets,[],'No failed model, texture or runtime asset requests');assert.deepEqual(errors,[],'No JavaScript, shader or WebGL errors');
  fs.writeFileSync(path.join(output,'reef-optics-report.json'),JSON.stringify({base,collisionSamples:collision.length,loadedModels,frames,visualReviewRequired:['transparent objects behind rocks','water horizon and Snell window','near/middle/far contrast','underwater vs above-water transitions']},null,2));
  console.log('PASS: original four-species Blender kit, bounded instanced triangles, depth optics pipeline, '+collision.length+' solid ravine collision probes, desktop/phone renders and zero model/shader failures. Screenshots still require visual review.');
})().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{await browser?.close();server.close();});
