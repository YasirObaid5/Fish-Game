import * as T from './vendor/three.module.min.js';
import { SeaWorld } from './sea-world.js';
import { OceanRenderer } from './ocean-renderer.js';
import { createFish, animateFish, disposeFish } from './marine-life.js';
import { SURFACE_Y, terrainHeight, WORLD_RADIUS, PLAYER_RADIUS, createSwimmer, stepSwimmer, createHunter, stepHunter, sweptSphere, triggerFeint } from './free-swim.mjs';
import { OceanAudio } from './ocean-audio.js';
import { ScoreFeedback } from './score-feedback.js';
import { SwimEffects } from './free-effects.js';
import { newRun, collect, hit, openTreasure, award, clamp } from './gameplay.mjs';
import { loadJournal, saveJournal, rankOf, RANKS, MEDALS, hasMedal, medalProgress, recordStat, newExpedition, questState, progressQuest, discoverPlace } from './expedition-progress.mjs';

const $=id=>document.getElementById(id), coarse=matchMedia('(pointer:coarse)').matches, reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
const forward=new T.Vector3(0,0,-1), axis=new T.Vector3(), quat=new T.Quaternion(), playerPos=new T.Vector3(), camGoal=new T.Vector3(), aim=new T.Vector3();
let storage;try{storage=localStorage;}catch{}
const journal=loadJournal(storage), audio=new OceanAudio();
let graphicsQuality=coarse?'balanced':'high';try{const saved=storage?.getItem('amaq-graphics-v1');if(['balanced','high'].includes(saved))graphicsQuality=saved;}catch{}
function applyGraphics(){
  renderer.setPixelRatio(Math.min(devicePixelRatio,graphicsQuality==='high'?(coarse?2:2.5):(coarse?1.2:1.5)));
  $('graphics-quality').value=graphicsQuality;
  if(sea){const size=graphicsQuality==='high'?(coarse?1024:2048):(coarse?768:1536);sea.sun.shadow.mapSize.set(size,size);sea.sun.shadow.map?.dispose();sea.sun.shadow.map=null;}
  pipeline?.setQuality(graphicsQuality);
  slowFrames=0;try{storage?.setItem('amaq-graphics-v1',graphicsQuality);}catch{}
}
let best=0;try{best=Number(storage?.getItem('amaq-best'))||0;}catch{}
let mode='menu', biome='reef', swimmer=createSwimmer(), run=newRun(), expedition=newExpedition(journal), time=0,last=0,toastTime=0, hudClock=0, saveClock=0;
let inspectionCamera=null;
let renderer,pipeline,scene,camera,sea,hero,shield,effects,feedback,items=[],hunters=[],fauna=[],race=null, selected='coral-cathedral',wet=0,safeTime=0,slowFrames=0,transient=[];
const keys=new Set(), stick={x:0,y:0,id:null}, look={id:null,x:0,y:0,yaw:0,pitch:0}, depthTouches=new Map();
let dashRequested=false,skillRequested=false, atlasResume=false, cruising=false;
function setCruising(enabled){
  cruising=enabled&&mode==='playing';
  $('cruise-toggle').setAttribute('aria-pressed',String(cruising));
  $('cruise-toggle').querySelector('span').textContent=cruising?'إيقاف السباحة':'سباحة مستمرة';
}
function toggleCruising(){if(mode==='playing'){setCruising(!cruising);canvas.focus();}}
const pearlGeo=new T.SphereGeometry(.22,16,10), torusGeo=new T.TorusGeometry(.43,.018,5,32), ringGeo=new T.TorusGeometry(2,.055,8,64);
const chestGeo=new T.BoxGeometry(1.15,.8,.7);
const materials={
  pearl:new T.MeshPhysicalMaterial({color:0xffecc3,roughness:.16,metalness:.25,clearcoat:1,emissive:0xbba675,emissiveIntensity:.2}),
  gold:new T.MeshStandardMaterial({color:0xffc45e,metalness:.55,roughness:.22,emissive:0xa75d12,emissiveIntensity:.35}),
  chest:new T.MeshStandardMaterial({color:0x725542,metalness:.2,roughness:.7}),
  ring:new T.MeshStandardMaterial({color:0x87e4d0,emissive:0x298b89,emissiveIntensity:.65,metalness:.35,roughness:.25}),
  halo:new T.MeshBasicMaterial({color:0xffe3a6,transparent:true,opacity:.45,depthWrite:false}),
  jelly:new T.MeshPhysicalMaterial({color:0xbd8dcc,emissive:0x533972,emissiveIntensity:.45,roughness:.25,transparent:true,opacity:.62,side:T.DoubleSide,depthWrite:false})
};
const ringMaterial=materials.ring.clone();
function vec(p){return new T.Vector3(p.x,p.y,p.z);}
function toast(text){$('toast').textContent=text;$('toast').classList.add('visible');toastTime=4.5;}
function save(){saveJournal(journal,storage);try{if(run.score>best){best=run.score;storage?.setItem('amaq-best',String(best));}}catch{}$('best').textContent=best;}
function reward(delta,p=swimmer.position,label=''){if(delta||label)feedback.show(delta,vec(p),label);if(delta>0)effects.burst(vec(p));}
function addProgress(kind,count=1){
  const medals=recordStat(journal,kind,count);
  const completed=progressQuest(expedition,journal,kind,count);
  if(completed?.id==='places')expedition.questPlaces=[];
  if(completed){const delta=award(run,completed.reward);reward(delta,swimmer.position,'تحدٍّ مكتمل');toast('اكتمل «'+completed.title+'» — هدف جديد ينتظرك');audio.play('win');}
  for(const medal of medals){toast('فتحت '+medal.name+' — '+medal.ability);reward(0,swimmer.position,medal.ability);audio.play('frenzy');}
  save();renderJournal();
}
function setMode(next){
  mode=next;setCruising(false);document.documentElement.dataset.mode=next;keys.clear();stick.x=stick.y=0;stick.id=null;look.id=null;look.yaw=look.pitch=0;depthTouches.clear();for(const id of ['touch-rise','touch-dive'])$(id).dataset.active='false';dashRequested=skillRequested=false;
  $('stick').querySelector('i').style.transform='';$('menu').hidden=next==='playing';$('hud').hidden=next!=='playing';$('pause').hidden=next==='menu'||next==='ended';
  $('home').hidden=next==='menu';$('worlds').hidden=next==='paused';$('results').hidden=next!=='ended';
  $('heading').innerHTML=next==='paused'?'البحر ينتظرك.':next==='ended'?'حكايةٌ تستحق<br><em>رحلة أخرى.</em>':'لا طريقَ واحداً.<br><em>البحر لك.</em>';
  $('description').textContent=next==='paused'?'رحلتك محفوظة هنا. تابع السباحة عندما تكون مستعداً.':next==='ended'?'تبقى ميدالياتك واكتشافاتك معك. عد إلى البحر بقدراتك الجديدة.':'اسبح حيث يقودك فضولك. من حدائق المرجان إلى ضوء السطح — اكتشف، راوِغ، واقفز.';
  $('start').querySelector('span').textContent=next==='paused'?'تابع الرحلة':'ابدأ الاستكشاف';
  if(next==='ended')$('results').innerHTML='<span>النقاط<b>'+run.score+'</b></span><span>الاكتشافات<b>'+expedition.visited.length+'</b></span><span>الوقت<b>'+Math.floor(run.elapsed/60)+' د</b></span>';
  audio.setMode(next);if(next==='menu')feedback.clear();if(next!=='playing')save();renderJournal();
}
function orient(model,yaw,pitch=0,bank=0,dt=1){
  axis.set(Math.sin(yaw)*Math.cos(pitch),Math.sin(pitch),-Math.cos(yaw)*Math.cos(pitch));quat.setFromUnitVectors(forward,axis);
  if(bank)quat.multiply(new T.Quaternion().setFromAxisAngle(forward,bank));model.quaternion.slerp(quat,1-Math.exp(-dt*9));
}
function spawn(kind,x,y,z,options={}){
  const mesh=new T.Group();
  if(kind==='chest'){
    const body=new T.Mesh(chestGeo,materials.chest);mesh.add(body);body.castShadow=true;
    const lid=new T.Mesh(chestGeo,materials.gold);lid.scale.set(1.03,.15,1.04);lid.position.y=.38;mesh.add(lid);
    const lock=new T.Mesh(pearlGeo,materials.gold);lock.position.set(0,.05,.38);lock.scale.setScalar(.65);mesh.add(lock);
  }else if(kind==='jelly'){
    const body=new T.Mesh(new T.SphereGeometry(.65,16,10,0,Math.PI*2,0,Math.PI*.6),materials.jelly);mesh.add(body);
    const strands=new T.BufferGeometry(),positions=[];
    for(let i=0;i<8;i++)for(let j=0;j<8;j++){const a=i*Math.PI/4,r=.4;positions.push(Math.cos(a)*r+Math.sin(j*.7)*.08,-j*.19,Math.sin(a)*r,Math.cos(a)*r+Math.sin((j+1)*.7)*.08,-(j+1)*.19,Math.sin(a)*r);}
    strands.setAttribute('position',new T.Float32BufferAttribute(positions,3));mesh.add(new T.LineSegments(strands,new T.LineBasicMaterial({color:0xc1b7ef,transparent:true,opacity:.65})));mesh.userData.owned=true;
  }else{
    const body=new T.Mesh(pearlGeo,kind==='pearl'?materials.pearl:materials.gold);if(kind==='shield'||kind==='magnet')body.material=materials.ring;mesh.add(body);
    const halo=new T.Mesh(torusGeo,materials.halo);mesh.add(halo);
  }
  mesh.position.set(x,y,z);if(!options.testPlacement&&!sea.collision.place(mesh.position,PLAYER_RADIUS+.4,terrainHeight,SURFACE_Y-1,WORLD_RADIUS-4)){removeItem({mesh});return null;}scene.add(mesh);
  const obj={kind,mesh,base:mesh.position.clone(),active:true,respawn:0,temporary:options.temporary||false,phase:Math.random()*6.28};items.push(obj);return obj;
}
function removeItem(item){scene.remove(item.mesh);if(item.mesh.userData.owned)item.mesh.traverse(o=>{o.geometry?.dispose();if(o.material&&o.material!==materials.jelly)o.material.dispose();});}
function populate(){
  for(const i of items)removeItem(i);items=[];
  const start=new T.Vector3(0,10,22);
  for(const landmark of sea.landmarks){
    if(landmark.type==='sanctuary')continue;
    const end=landmark.position.clone();
    for(let i=1;i<=10;i++){const p=start.clone().lerp(end,i/11);p.x+=Math.sin(i*.7)*2;p.y=Math.max(terrainHeight(p.x,p.z)+1.3,p.y+Math.sin(i)*.5);spawn(i%5===0?'gold':'pearl',p.x,p.y,p.z);}
    spawn('chest',end.x+2,end.y+1,end.z-2);
    for(let i=0;i<7;i++){const a=i/7*Math.PI*2;spawn('pearl',end.x+Math.cos(a)*5,end.y+1+Math.sin(a)*2,end.z+Math.sin(a)*5);}
  }
  // A first, approachable trail teaches forward swimming and collection.
  for(let i=0;i<5;i++)spawn('pearl',0,10,18-i*1.6);
  hunters.forEach(h=>{scene.remove(h.mesh);disposeFish(h.mesh);});hunters=[];
  for(const [i,p] of [[0,{x:42,y:7,z:-28}],[1,{x:-58,y:6,z:-45}]]){
    const state=createHunter(i,p),mesh=createFish('predator');scene.add(mesh);hunters.push({state,mesh});
  }
  if(race){race.meshes.forEach(m=>scene.remove(m));race=null;}
}
function createFauna(){
  for(let i=0;i<(coarse?18:28);i++){
    const kind=i<2?'turtle':i<4?'manta':'school',mesh=createFish(kind,{scale:kind==='school'?.4:1});scene.add(mesh);
    fauna.push({kind,mesh,phase:i*2.41,center:new T.Vector3(Math.sin(i*2.4)*55,5+Math.sin(i)*4,Math.cos(i*2.4)*55-15),radius:kind==='manta'?16:kind==='turtle'?9:5});
  }
  for(const id of ['titan','lantern','rift']){
    const place=sea.landmarks.find(l=>l.id===id);
    for(let i=0;i<(coarse?4:6);i++){
      const kind=i===0?'manta':'school',mesh=createFish(kind,{scale:kind==='school'?.55:1.3,shadows:false});scene.add(mesh);
      fauna.push({kind,mesh,phase:i*1.8,center:place.position.clone().add(new T.Vector3(0,4,-8)),radius:kind==='manta'?12:7});
    }
  }
}
function start(){
  if(mode==='paused'){setMode('playing');canvas.focus();return;}
  swimmer=createSwimmer();run=newRun();expedition=newExpedition(journal);effects.clear();feedback.clear();populate();safeTime=0;wet=0;selected=sea.landmarks.find(l=>l.type!=='sanctuary').id;
  camera.position.set(0,12.4,30);setMode('playing');canvas.focus();audio.play('start');
  toast(coarse?'الدائرة للسباحة والالتفاف · صعود وغوص يمين الشاشة':'الأسهم للسباحة والالتفاف · R للصعود وF للغوص · اسحب البحر لتغيير نظرك');
}
function togglePause(){if(mode==='playing')setMode('paused');else if(mode==='paused')start();}
function biomeChange(name){biome=name;sea.setBiome(name);document.documentElement.dataset.world=name;document.querySelectorAll('#worlds button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.world===name)));renderJournal();}
function triggerRace(){
  if(race){toast('أكمل سباقك الحالي أولاً');return;}
  const origin=vec(swimmer.position),heading=swimmer.yaw;
  // Curves away from the boundary rather than spawning impossible off-map rings.
  const inward=Math.hypot(origin.x,origin.z)>WORLD_RADIUS-65?Math.atan2(-origin.x,origin.z):heading;
  const points=[];
  for(let i=0;i<7;i++){
    const a=inward+Math.sin(i*.65)*.65,d=7+i*6.5;
    const x=origin.x+Math.sin(a)*d,z=origin.z-Math.cos(a)*d,y=clamp(origin.y+Math.sin(i*.9)*3.5,terrainHeight(x,z)+2,16.5);
    const point=new T.Vector3(x,y,z);sea.collision.place(point,2.2,terrainHeight,16.5,WORLD_RADIUS-4);points.push(point);
  }
  const meshes=points.map((p,i)=>{const m=new T.Mesh(ringGeo,ringMaterial);m.position.copy(p);m.lookAt(points[Math.min(i+1,6)].clone().add(new T.Vector3(.01,0,0)));scene.add(m);return m;});
  race={points,meshes,index:0,time:55,total:0};toast('سباق التيار: اعبر 7 حلقات مرتبة خلال 55 ثانية');audio.play('gate');
}
function stopRace(won){
  if(!race)return;const elapsed=race.total;race.meshes.forEach(m=>scene.remove(m));race=null;
  if(won){const delta=award(run,220);reward(delta,swimmer.position,'سباق مكتمل');addProgress('races');if(!journal.raceBest||elapsed<journal.raceBest)journal.raceBest=elapsed;save();audio.play('win');toast('سباق مكتمل! '+elapsed.toFixed(1)+' ثانية — +220');}
  else toast('فات وقت السباق. جرّب مجدداً من دفتر البحر؛ لا تخسر نقاطاً.');
}
function event(kind){
  const p=vec(swimmer.position),direction=new T.Vector3(Math.sin(swimmer.yaw),0,-Math.cos(swimmer.yaw));
  if(kind==='current'){triggerRace();return;}
  if(kind==='bloom'){
    toast('ازدهار مضيء — لآلئ ذهبية بين قناديل البحر!');audio.play('discover');
    const center=p.clone().addScaledVector(direction,18);center.y=clamp(center.y,terrainHeight(center.x,center.z)+3,13);
    for(let i=0;i<10;i++){const a=i/10*Math.PI*2;spawn(i%3===0?'jelly':'gold',center.x+Math.cos(a)*8,center.y+Math.sin(a*2)*2,center.z+Math.sin(a)*8,{temporary:true});}
    expedition.event={name:'ازدهار القناديل',remaining:40};
  }else if(kind==='shoal'){
    toast('مرّ سرب اللؤلؤ! اتبع اللمعان قبل أن يختفي');audio.play('frenzy');
    for(let i=0;i<18;i++){const q=p.clone().addScaledVector(direction,7+i*1.9);q.x+=Math.sin(i*.55)*4;q.y=clamp(q.y+Math.sin(i*.3)*2,terrainHeight(q.x,q.z)+2,16);if(Math.hypot(q.x,q.z)<WORLD_RADIUS-6)spawn('gold',q.x,q.y,q.z,{temporary:true});}
    expedition.event={name:'سرب اللؤلؤ الذهبي',remaining:35};
  }else{
    toast('كشف المدّ عن كنز قريب — ابحث عن اللمعان');audio.play('treasure');
    const q=p.clone().addScaledVector(direction,14);q.y=clamp(q.y-3,terrainHeight(q.x,q.z)+1,15);spawn('chest',q.x,q.y,q.z,{temporary:true});spawn('magnet',q.x+2,q.y+1,q.z,{temporary:true});
    expedition.event={name:'هدية المدّ',remaining:50};
  }
}
function updateItems(dt,prev){
  const target=vec(swimmer.position);
  for(const item of items){
    if(!item.active){item.respawn-=dt;if(item.respawn<=0&&!item.temporary){item.active=true;item.mesh.visible=true;item.mesh.position.copy(item.base);}continue;}
    if((run.magnet>0||hasMedal(journal,'pearl'))&&['pearl','gold'].includes(item.kind)&&item.mesh.position.distanceTo(target)<(run.magnet>0?7:3))item.mesh.position.lerp(target,1-Math.exp(-dt*5));
    else item.mesh.position.y=item.base.y+Math.sin(time*1.8+item.phase)*(item.kind==='jelly'?.5:.15);
    const renderDistance=item.mesh.position.distanceTo(target);
    item.mesh.visible=renderDistance<(coarse?60:85);
    for(const child of item.mesh.children)if(child.material===materials.halo)child.visible=renderDistance<24;
    if(item.mesh.visible)item.mesh.rotation.y+=dt*.4;
    const hitRadius=item.kind==='jelly'?1.2:item.kind==='chest'?1.3:.8;
    if(!sweptSphere(prev,swimmer.position,item.mesh.position,item.mesh.position,hitRadius))continue;
    if(item.kind==='jelly'){damage();continue;}
    item.active=false;item.mesh.visible=false;item.respawn=item.kind==='chest'?100:55;
    const before=run.score;
    if(item.kind==='chest'){const prize=openTreasure(run);reward(prize.delta,item.mesh.position,prize.reward==='jackpot'?'كنز نادر':'كنز البحر');addProgress('treasures');audio.play('treasure');}
    else{collect(run,item.kind);reward(run.score-before,item.mesh.position);audio.play(item.kind,{combo:run.combo});if(['pearl','gold'].includes(item.kind))addProgress('pearls');}
  }
}
function damage(){
  if(swimmer.feintTime>0)return;
  const before=run.score;const result=hit(run);
  if(result==='immune')return;
  reward(run.score-before,swimmer.position,result==='shield'?'حماية':result==='defeated'?'اندفاع واقٍ':'');audio.play(result==='hurt'?'hurt':'block');
  if(result==='hurt'){document.documentElement.dataset.hurt='true';setTimeout(()=>delete document.documentElement.dataset.hurt,300);toast('اقترب منك الخطر — غيّر اتجاهك أو اندفع بعيداً');}
  if(run.ended)setMode('ended');
}
function updateHunters(dt){
  const safe=vec(swimmer.position).distanceTo(new T.Vector3(0,10,22))<11;
  $('safe-label').hidden=!safe;
  let closest=null;
  for(const h of hunters){
    const wasChasing=h.state.mode==='chase';
    const messages=stepHunter(h.state,swimmer,dt,{safe});h.mesh.position.copy(vec(h.state.position));orient(h.mesh,h.state.yaw,h.state.pitch,0,dt);animateFish(h.mesh,time,h.state.mode==='chase'?1.8:.7);
    for(const e of messages){
      if(e.type==='alert'){toast('مفترس يتأهّب للمطاردة — غيّر اتجاهك واستعد للاندفاع');audio.play('guardian');}
      if(e.type==='attack')damage();
      if(e.type==='escaped'&&wasChasing){const delta=award(run,35);reward(delta,swimmer.position,'هربت بنجاح');addProgress('escapes');audio.play('nearMiss');}
    }
    const d=vec(h.state.position).distanceTo(vec(swimmer.position));if(['chase','telegraph'].includes(h.state.mode)&&(!closest||d<closest.distance))closest={distance:d,x:(h.state.position.x-swimmer.position.x)*Math.cos(swimmer.yaw)+(h.state.position.z-swimmer.position.z)*Math.sin(swimmer.yaw),hunter:h};
  }
  $('threat').hidden=!closest;
  if(closest){$('threat').textContent=(closest.hunter.state.mode==='telegraph'?'يستعد للمطاردة':'مطاردة')+' · '+Math.round(closest.distance)+' م — التفّ، اغص أو اندفع';}
  if(safe){safeTime+=dt;if(safeTime>=14&&run.lives<3){run.lives++;safeTime=0;toast('الملاذ أعاد لك محاولة');audio.play('shield');}}else safeTime=0;
  return closest;
}
function updateDiscoveries(dt){
  const inside=[];
  for(const landmark of sea.landmarks){
    if(mode!=='playing'||landmark.type==='sanctuary'||landmark.position.distanceTo(vec(swimmer.position))>landmark.radius)continue;
    inside.push(landmark.id);
    if((expedition.insidePlaces||[]).includes(landmark.id))continue;
    const before=hasMedal(journal,'explorer'),result=discoverPlace(expedition,journal,biome,landmark.id);
    if(result){reward(award(run,result.delta),landmark.position,result.first?'اكتشاف جديد':landmark.name);toast('وصلت إلى '+landmark.name);audio.play('discover');}
    // Later quest cycles can revisit different destinations; loitering never counts twice.
    expedition.questPlaces ||= [];
    if(questState(expedition).id!=='places')expedition.questPlaces=[];
    if(!expedition.questPlaces.includes(landmark.id)){expedition.questPlaces.push(landmark.id);addProgress('places');}
    if(!before&&hasMedal(journal,'explorer'))toast('فتحت ميدالية الرحّالة — رؤية الكنوز على السونار');
  }
  expedition.insidePlaces=inside;
  for(const f of fauna){
    const a=time*(f.kind==='school'?.23:.1)+f.phase;
    f.mesh.position.set(f.center.x+Math.cos(a)*f.radius,f.center.y+Math.sin(a*.7)*1.2,f.center.z+Math.sin(a)*f.radius);
    f.mesh.visible=f.mesh.position.distanceTo(vec(swimmer.position))<(coarse?55:85);
    if(f.mesh.visible){orient(f.mesh,-a,Math.cos(a*.7)*.07,Math.sin(a)*.1,dt);animateFish(f.mesh,time,f.kind==='school'?1:.6);}
    if(mode==='playing'&&f.mesh.position.distanceTo(vec(swimmer.position))<5&&!expedition.discoveredSpecies.includes(f.kind)){
      expedition.discoveredSpecies.push(f.kind);if(!journal.species.includes(f.kind)){journal.species.push(f.kind);journal.xp+=35;reward(award(run,35),f.mesh.position,{turtle:'سلحفاة بحرية',manta:'شيطان البحر',school:'سرب الشعاب'}[f.kind]);audio.play('discover');save();}
    }
  }
}
function update(dt){
  time+=dt;toastTime-=dt;if(toastTime<=0)$('toast').classList.remove('visible');
  if(mode==='playing'){
    const prev={...swimmer.position};
    const manualThrottle=clamp((keys.has('ArrowUp')||keys.has('KeyW')?1:0)-(keys.has('ArrowDown')||keys.has('KeyS')?1:0)-stick.y,-1,1);
    if(manualThrottle<-.12)setCruising(false);
    const input={turn:clamp((keys.has('ArrowRight')||keys.has('KeyD')?1:0)-(keys.has('ArrowLeft')||keys.has('KeyA')?1:0)+stick.x,-1,1),throttle:cruising?1:manualThrottle,lift:clamp((keys.has('KeyR')||keys.has('KeyE')?1:0)-(keys.has('KeyF')||keys.has('KeyQ')?1:0)+[...depthTouches.values()].reduce((a,b)=>a+b,0),-1,1),lookYaw:look.yaw,lookPitch:look.pitch,boost:dashRequested};
    look.yaw=look.pitch=0;
    if(skillRequested){if(hasMedal(journal,'messi')){if(triggerFeint(swimmer)){run.invulnerable=Math.max(run.invulnerable,.9);audio.play('nearMiss');effects.burst(vec(swimmer.position),0x8cf6e4);toast('مراوغة ميسي!');}}else toast('ميدالية ميسي: اهرب من 3 مطاردات لفتح المراوغة');}
    const previousBoost=swimmer.boost;const messages=stepSwimmer(swimmer,input,dt);
    sea.collision.resolve(swimmer.position,swimmer.velocity,PLAYER_RADIUS,prev,terrainHeight);
    if(Math.hypot(swimmer.position.x,swimmer.position.z)>WORLD_RADIUS){Object.assign(swimmer.position,prev);swimmer.velocity.x=swimmer.velocity.y=swimmer.velocity.z=0;}
    if(swimmer.boost>previousBoost){audio.play('dash');if(hasMedal(journal,'dolphin'))swimmer.cooldown*=.75;}
    dashRequested=skillRequested=false;
    for(const e of messages){
      if(e.type==='breach'){effects.splash(new T.Vector3(swimmer.position.x,SURFACE_Y,swimmer.position.z));audio.play('breach');addProgress('breaches');reward(award(run,10),swimmer.position,'لمسة السماء');}
      if(e.type==='splash'){effects.splash(new T.Vector3(swimmer.position.x,SURFACE_Y,swimmer.position.z),1.3);audio.play('splash');wet=1;}
      if(e.type==='boundary')toast('تيار قوي عند حافة الخليج — عُد إلى الشعاب');
    }
    run.elapsed+=dt;run.distance=swimmer.distance;run.boost=swimmer.boost;run.cooldown=swimmer.cooldown;
    for(const key of ['shield','invulnerable','magnet','frenzy','current','comboTime'])run[key]=Math.max(0,run[key]-dt);if(!run.comboTime)run.combo=0;
    updateItems(dt,prev);if(mode!=='playing')return;
    const threat=updateHunters(dt);if(mode!=='playing')return;
    updateDiscoveries(dt);
    if(race){race.time-=dt;race.total+=dt;const next=race.points[race.index];if(sweptSphere(prev,swimmer.position,next,next,2)){race.meshes[race.index].visible=false;race.index++;reward(award(run,15),swimmer.position);audio.play('gate');if(race.index===race.points.length)stopRace(true);}if(race&&race.time<=0)stopRace(false);}
    expedition.elapsed+=dt;expedition.nextEvent-=dt;
    if(expedition.nextEvent<=0){event(['shoal','bloom','treasure','current'][expedition.eventIndex++%4]);expedition.nextEvent=72;}
    if(expedition.event){expedition.event.remaining-=dt;if(expedition.event.remaining<=0){for(const i of items.filter(i=>i.temporary))removeItem(i);items=items.filter(i=>!i.temporary);expedition.event=null;}}
    audio.update({world:biome,speed:Math.min(1,swimmer.speed/12),boosting:swimmer.boost>0,threat,aboveWater:swimmer.airborne});
    saveClock+=dt;if(saveClock>5){saveClock=0;save();}
  }else if(mode==='menu')updateDiscoveries(dt);
  const active=mode!=='menu';playerPos.copy(active?vec(swimmer.position):new T.Vector3(0,11,22));
  hero.position.copy(playerPos);const visualPitch=active?Math.atan2(swimmer.velocity.y,Math.max(2,Math.hypot(swimmer.velocity.x,swimmer.velocity.z))):0;
  orient(hero,active?swimmer.yaw:-1.15,visualPitch,active?-stick.x*.12:0,dt);animateFish(hero,time,active?.55+swimmer.speed*.065:.55);
  shield.position.copy(playerPos);shield.visible=active&&(run.shield>0||swimmer.feintTime>0);shield.material.opacity=swimmer.feintTime>0?.12:.065;
  updateCamera(dt,active);sea.update(dt,time,playerPos,camera);
  effects.update(mode==='paused'?0:dt,playerPos,vec(swimmer.velocity),time,SURFACE_Y,mode==='playing');feedback.update(dt,camera,mode==='playing');
  wet=Math.max(0,wet-dt*.45);$('water-drops').style.opacity=reduced?'0':String(wet*.75);
  hudClock+=dt;if(hudClock>.1){hudClock=0;updateHUD();}
}
function resolveScenery(p,velocity,padding){return sea.collision?.resolve(p,velocity,padding);}
function updateCamera(dt,active){
  if(inspectionCamera){camera.position.fromArray(inspectionCamera.position);camera.lookAt(new T.Vector3().fromArray(inspectionCamera.target));camera.updateMatrixWorld();return;}
  if(!active){camGoal.set(7.5,12.8,29);aim.set(-.2,10.8,21.4);}
  else{
    const back=coarse&&innerHeight>innerWidth?9:7.4;
    // The view can orbit above/below the fish; pitch never changes forward thrust.
    const viewPitch=clamp(swimmer.pitch-.24,-1.4,1.3),arm=back*Math.cos(viewPitch);
    camGoal.copy(playerPos).add(new T.Vector3(-Math.sin(swimmer.yaw)*arm,1.1-Math.sin(viewPitch)*back,Math.cos(swimmer.yaw)*arm));
    if(playerPos.y<SURFACE_Y-.3)camGoal.y=Math.min(camGoal.y,SURFACE_Y-.48);
    camGoal.y=Math.max(terrainHeight(camGoal.x,camGoal.z)+1,camGoal.y);
    aim.copy(playerPos).add(new T.Vector3(Math.sin(swimmer.yaw)*4*Math.cos(viewPitch),Math.sin(viewPitch)*4+.2,-Math.cos(swimmer.yaw)*4*Math.cos(viewPitch)));
  }
  if(active)camGoal.copy(sea.collision.cameraEnd(playerPos,camGoal));
  camera.position.lerp(camGoal,reduced?1:1-Math.exp(-dt*(active?7:2)));resolveScenery(camera.position,null,.3);camera.lookAt(aim);
  camera.fov=T.MathUtils.lerp(camera.fov,swimmer.boost>0&&active&&!reduced?64:58,1-Math.exp(-dt*4));camera.updateProjectionMatrix();
}
function updateHUD(){
  $('score').textContent=run.score;$('combo').textContent=run.combo>1?'سلسلة ×'+run.combo:'';
  $('lives').textContent='● '.repeat(Math.max(0,run.lives));$('lives').setAttribute('aria-label',run.lives+' محاولات');
  $('shield').textContent=run.shield>0?'حماية '+Math.ceil(run.shield)+' ث':run.magnet>0?'جاذبية اللآلئ':'';
  $('depth').textContent=swimmer.airborne?'فوق السطح':Math.max(0,SURFACE_Y-swimmer.position.y).toFixed(1)+' م';
  $('depth-panel-value').textContent=$('depth').textContent;
  $('touch-rise').dataset.active=String(mode==='playing'&&(keys.has('KeyR')||keys.has('KeyE')||[...depthTouches.values()].includes(1)));
  $('touch-dive').dataset.active=String(mode==='playing'&&(keys.has('KeyF')||keys.has('KeyQ')||[...depthTouches.values()].includes(-1)));
  const angle=((swimmer.yaw*180/Math.PI)%360+360)%360;$('heading-value').textContent=Math.round(angle)+'°';
  $('energy').max=4;$('energy').value=Math.max(0,4-swimmer.cooldown);$('boost-label').textContent=swimmer.cooldown>0?'الاندفاع '+swimmer.cooldown.toFixed(1)+' ث':'الاندفاع جاهز';
  const q=questState(expedition);$('quest-title').textContent=q.title;$('quest-detail').textContent=q.detail;$('quest-count').textContent=q.progress+' / '+q.target;$('quest-progress').max=q.target;$('quest-progress').value=q.progress;
  const target=race?{name:'الحلقة '+(race.index+1)+' / 7',position:race.points[race.index]}:sea.landmarks.find(l=>l.id===selected);
  if(target){const d=target.position.distanceTo(playerPos),dy=target.position.y-playerPos.y;const bearing=Math.atan2(target.position.x-playerPos.x,-(target.position.z-playerPos.z));$('destination').textContent=target.name;$('destination-distance').textContent=Math.round(d)+' م'+(Math.abs(dy)>3?(dy>0?' · أعلى':' · أعمق'):'');$('bearing').style.transform='rotate('+((bearing-swimmer.yaw)*180/Math.PI)+'deg)';}
  $('event-label').textContent=race?'سباق التيار · '+Math.ceil(race.time)+' ث':expedition.event?expedition.event.name+' · '+Math.ceil(expedition.event.remaining)+' ث':'استكشف بحرّية · افتح دفتر البحر لاختيار وجهتك';
  $('skill-label').textContent=hasMedal(journal,'messi')?(swimmer.feintCooldown>0?'مراوغة '+Math.ceil(swimmer.feintCooldown)+' ث':'مراوغة ميسي · X'):'المراوغة مقفلة · 3 هروبات';
  $('touch-skill').dataset.locked=String(!hasMedal(journal,'messi'));$('touch-skill').textContent=hasMedal(journal,'messi')?(swimmer.feintCooldown>0?Math.ceil(swimmer.feintCooldown)+' ث':'مراوغة'):'مراوغة ◇';
  drawRadar();
}
function drawRadar(){
  const c=$('radar'),ctx=c.getContext('2d'),size=c.width,half=size/2,scale=83/WORLD_RADIUS;
  ctx.clearRect(0,0,size,size);ctx.save();ctx.translate(half,half);ctx.strokeStyle='#a5dace35';ctx.lineWidth=1;
  for(const r of [30,60,83]){ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.stroke();}
  ctx.beginPath();ctx.moveTo(-83,0);ctx.lineTo(83,0);ctx.moveTo(0,-83);ctx.lineTo(0,83);ctx.stroke();
  const dot=(x,z,color,r=3)=>{const dx=(x-swimmer.position.x)*scale,dz=(z-swimmer.position.z)*scale;if(Math.hypot(dx,dz)>83)return;ctx.fillStyle=color;ctx.beginPath();ctx.arc(dx,dz,r,0,Math.PI*2);ctx.fill();};
  for(const l of sea.landmarks)dot(l.position.x,l.position.z,l.id===selected?'#ffe0a0':'#96c5bb',l.id===selected?4:2.5);
  if(hasMedal(journal,'explorer'))for(const i of items)if(i.kind==='chest'&&i.active)dot(i.mesh.position.x,i.mesh.position.z,'#f8bb55',3);
  for(const h of hunters)if(h.state.mode==='chase'||h.state.mode==='telegraph')dot(h.state.position.x,h.state.position.z,'#f29b81',4);
  if(race)for(let i=race.index;i<race.points.length;i++)dot(race.points[i].x,race.points[i].z,'#93fce3',3);
  ctx.rotate(swimmer.yaw);ctx.fillStyle='#fff2c7';ctx.beginPath();ctx.moveTo(0,-7);ctx.lineTo(5,5);ctx.lineTo(0,2);ctx.lineTo(-5,5);ctx.closePath();ctx.fill();ctx.restore();
}
function renderJournal(){
  $('rank').textContent=RANKS[rankOf(journal)];$('journal-count').textContent=journal.places.length+' اكتشاف · '+MEDALS.filter(m=>hasMedal(journal,m.id)).length+'/'+MEDALS.length+' ميداليات';
  $('medal-list').replaceChildren();
  for(const m of MEDALS){const unlocked=hasMedal(journal,m.id),card=document.createElement('article');card.className='medal '+(unlocked?'unlocked':'locked');card.innerHTML='<span class="medal-mark" aria-hidden="true">'+m.mark+'</span><div><h3>'+m.name+'</h3><b>'+m.ability+'</b><p>'+m.detail+'</p><small>'+m.condition+' · '+medalProgress(journal,m)+'/'+m.target+(unlocked?' · مفتوحة':'')+'</small><progress max="'+m.target+'" value="'+medalProgress(journal,m)+'" aria-label="تقدم '+m.name+'"></progress></div>';$('medal-list').append(card);}
  if(!sea)return;$('destination-list').replaceChildren();
  for(const l of sea.landmarks){const button=document.createElement('button');button.type='button';button.className='destination-choice';button.dataset.destination=l.id;button.setAttribute('aria-pressed',String(l.id===selected));button.innerHTML='<b>'+l.name+'</b><small>'+(l.type==='sanctuary'?'منطقة آمنة لاستعادة المحاولات':journal.places.includes(biome+':'+l.id)?'مسجّلة في دفترك':'بانتظار اكتشافك')+'</small>';button.onclick=()=>{selected=l.id;closeAtlas();toast('وجهتك: '+l.name+' — اتبع إبرة البوصلة');};$('destination-list').append(button);}
  $('atlas-stats').textContent=journal.places.length+' وجهة · '+journal.species.length+' كائنات · '+journal.quests+' تحديات'+(journal.raceBest?' · أسرع سباق '+journal.raceBest.toFixed(1)+' ث':'');
}
function openAtlas(){atlasResume=mode==='playing';if(atlasResume)setMode('paused');renderJournal();$('atlas').showModal();}
function closeAtlas(){if(!$('atlas').open)return;$('atlas').close();if(atlasResume){atlasResume=false;start();}}
function bind(){
  $('graphics-quality').onchange=e=>{graphicsQuality=e.target.value;applyGraphics();};
  $('cruise-toggle').onclick=toggleCruising;
  $('start').onclick=start;$('home').onclick=()=>setMode('menu');$('pause').onclick=togglePause;
  $('sound').onclick=()=>{audio.toggle();syncAudio();};$('volume').addEventListener('input',e=>{audio.setVolume(Number(e.target.value)/100);syncAudio();});
  $('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{toast('ملء الشاشة غير متاح هنا');}};
  document.querySelectorAll('#worlds button').forEach(b=>b.onclick=()=>biomeChange(b.dataset.world));
  $('open-atlas').onclick=openAtlas;$('menu-atlas').onclick=openAtlas;$('close-atlas').onclick=closeAtlas;
  $('atlas').addEventListener('cancel',e=>{e.preventDefault();closeAtlas();});
  $('start-race').onclick=()=>{closeAtlas();if(mode!=='playing')start();triggerRace();};
  addEventListener('keydown',e=>{
    if(e.target.closest?.('input,textarea,select')||document.querySelector('dialog[open]'))return;
    if(e.code==='Escape'){e.preventDefault();if(!e.repeat)togglePause();return;}
    if(e.code==='KeyM'){e.preventDefault();if(!e.repeat)openAtlas();return;}
    if(mode!=='playing'||(e.code==='Space'&&e.target.closest?.('button,a')))return;
    if(e.code==='KeyC'){e.preventDefault();if(!e.repeat)toggleCruising();return;}
    if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','KeyW','KeyA','KeyS','KeyD','KeyR','KeyF','KeyE','KeyQ','Space','KeyX'].includes(e.code)){e.preventDefault();keys.add(e.code);if(e.code==='Space'&&!e.repeat)dashRequested=true;if(e.code==='KeyX'&&!e.repeat)skillRequested=true;}
  });
  addEventListener('keyup',e=>keys.delete(e.code));
  canvas.addEventListener('pointerdown',e=>{if(mode!=='playing'||look.id!==null)return;look.id=e.pointerId;look.x=e.clientX;look.y=e.clientY;canvas.setPointerCapture(e.pointerId);canvas.focus();});
  canvas.addEventListener('pointermove',e=>{if(e.pointerId!==look.id)return;look.yaw+=(e.clientX-look.x)*.005;look.pitch-=(e.clientY-look.y)*.004;look.x=e.clientX;look.y=e.clientY;});
  const releaseLook=e=>{if(e.pointerId===look.id)look.id=null;};canvas.addEventListener('pointerup',releaseLook);canvas.addEventListener('pointercancel',releaseLook);canvas.addEventListener('lostpointercapture',releaseLook);
  const pad=$('stick');
  const move=e=>{if(e.pointerId!==stick.id)return;const b=pad.getBoundingClientRect(),dx=(e.clientX-b.x-b.width/2)/(b.width*.42),dy=(e.clientY-b.y-b.height/2)/(b.height*.42),len=Math.max(1,Math.hypot(dx,dy));stick.x=dx/len;stick.y=dy/len;pad.querySelector('i').style.transform='translate('+stick.x*27+'px,'+stick.y*27+'px)';};
  pad.addEventListener('pointerdown',e=>{e.preventDefault();if(mode!=='playing')return;stick.id=e.pointerId;pad.setPointerCapture(e.pointerId);move(e);});pad.addEventListener('pointermove',move);
  const release=e=>{if(e.pointerId===stick.id){stick.id=null;stick.x=stick.y=0;pad.querySelector('i').style.transform='';}};pad.addEventListener('pointerup',release);pad.addEventListener('pointercancel',release);pad.addEventListener('lostpointercapture',release);
  for(const [id,lift] of [['touch-rise',1],['touch-dive',-1]]){const b=$(id);b.addEventListener('pointerdown',e=>{e.preventDefault();if(mode!=='playing')return;depthTouches.set(e.pointerId,lift);b.dataset.active='true';b.setPointerCapture(e.pointerId);});for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,e=>depthTouches.delete(e.pointerId));
    const buttonKey='keyboard:'+id;
    b.addEventListener('keydown',e=>{if(mode==='playing'&&['Space','Enter'].includes(e.code)){e.preventDefault();depthTouches.set(buttonKey,lift);}});
    b.addEventListener('keyup',e=>{if(['Space','Enter'].includes(e.code)){e.preventDefault();depthTouches.delete(buttonKey);}});
    b.addEventListener('blur',()=>depthTouches.delete(buttonKey));
  }
  $('touch-boost').addEventListener('pointerdown',e=>{e.preventDefault();if(mode==='playing')dashRequested=true;});$('touch-skill').addEventListener('pointerdown',e=>{e.preventDefault();if(mode==='playing')skillRequested=true;});
  addEventListener('blur',()=>{if(mode==='playing')setMode('paused');audio.quiet();});document.addEventListener('visibilitychange',()=>{if(document.hidden){if(mode==='playing')setMode('paused');audio.quiet();}last=0;});addEventListener('pagehide',()=>{save();audio.quiet();});
  addEventListener('resize',resize);
}
function syncAudio(){const s=audio.snapshot();$('sound').disabled=!s.supported;$('volume').disabled=!s.supported;$('sound').setAttribute('aria-pressed',String(s.enabled));$('sound').setAttribute('aria-label',s.enabled?'كتم الصوت':'تشغيل الصوت');$('volume').value=Math.round(s.volume*100);}
function resize(){const w=innerWidth,h=innerHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false);}
const canvas=$('ocean');
async function init(){
  renderer=new T.WebGLRenderer({canvas,antialias:false,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,coarse?1.3:1.75));renderer.setSize(innerWidth,innerHeight,false);
  renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFShadowMap;
  scene=new T.Scene();camera=new T.PerspectiveCamera(58,innerWidth/innerHeight,.15,1800);camera.position.set(7.5,12.8,29);
  sea=new SeaWorld(scene,{coarse,reduced});sea.setBiome(biome);hero=createFish('hero');scene.add(hero);effects=new SwimEffects(scene,reduced);feedback=new ScoreFeedback($('score-feedback'),reduced);
  shield=new T.Mesh(new T.SphereGeometry(1.35,24,16),new T.MeshBasicMaterial({color:0x8ef5d9,transparent:true,opacity:.06,depthWrite:false}));scene.add(shield);shield.visible=false;
  await sea.ready;pipeline=new OceanRenderer(renderer,{coarse});sea.prepareEnvironment(renderer);createFauna();bind();applyGraphics();syncAudio();setMode('menu');$('start').disabled=false;document.documentElement.dataset.engine='ready';document.documentElement.dataset.engineVersion='free-ocean';
  renderer.setAnimationLoop(now=>{const frameMs=last?now-last:16;const dt=Math.min(.05,frameMs/1000);last=now;update(dt);pipeline.render(scene,camera,sea,time);if(mode==='playing'&&!document.hidden)pipeline.observeFrame(frameMs);});
}
init().catch(error=>{console.error(error);$('error').hidden=false;});
if(new URLSearchParams(location.search).has('test'))window.__ocean={
  snapshot:()=>({mode,cruising,quality:graphicsQuality,streaming:sea.sectors?.stats,adaptiveScale:pipeline.adaptiveScale,garden:sea.garden?.userData,renderPipeline:'depth-optics-v1',reefArt:sea.reefArt?.userData?.assetStats??null,pixelRatio:renderer.getPixelRatio(),worldRadius:WORLD_RADIUS,collisionRecords:sea.collision.records.length,collisionTriangles:sea.collision.triangles,penetrating:sea.collision.contacts(vec(swimmer.position),PLAYER_RADIUS-.04),world:biome,run:{...run},position:[swimmer.position.x,swimmer.position.y,swimmer.position.z],swimmer:JSON.parse(JSON.stringify(swimmer)),audio:audio.snapshot(),journal:JSON.parse(JSON.stringify(journal)),quest:questState(expedition),feedback:feedback.entries.map(e=>e.element.textContent),items:items.filter(i=>i.active).map(i=>({kind:i.kind,p:i.mesh.position.toArray()})),hunters:hunters.map(h=>JSON.parse(JSON.stringify(h.state))),race:race?{index:race.index,time:race.time,points:race.points.map(p=>p.toArray())}:null,landmarks:sea.landmarks.map(l=>({id:l.id,p:l.position.toArray()})),renderSize:[renderer.domElement.width,renderer.domElement.height],camera:camera.position.toArray(),calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,geometries:renderer.info.memory.geometries}),
  step:dt=>{update(dt);pipeline.render(scene,camera,sea,time);},simulate:seconds=>{for(let i=0;i<Math.ceil(seconds/.05);i++)update(.05);pipeline.render(scene,camera,sea,time);},
  place:(x,y,z=swimmer.position.z)=>{Object.assign(swimmer.position,{x,y,z});Object.assign(swimmer.velocity,{x:0,y:0,z:0});swimmer.airborne=false;},
  aim:(yaw,pitch=0)=>{swimmer.yaw=yaw;swimmer.pitch=pitch;},spawn:(kind,x,y,z)=>spawn(kind,x,y,z,{testPlacement:true}),encounter:event,progress:(kind,n)=>addProgress(kind,n),startRace:triggerRace,
  collisionProbe:(from,to,radius=PLAYER_RADIUS)=>{const p={...to};const hits=sea.collision.resolve(p,null,radius,from);return {p,hits,penetrating:sea.collision.contacts(vec(p),radius-.04)};},
  cameraPose:(position,target)=>{inspectionCamera=position?{position,target}:null;},
  solidSamples:(name='lagoon-rocks')=>sea.collision.records.filter(r=>r.name===name).flatMap(r=>(name==='lagoon-rocks'?[0]:[.19,.31,.47,.63,.79]).map(f=>{const v=r.vertices,offset=Math.floor((v.length/9-1)*f)*9,a=new T.Vector3().fromArray(v,offset),b=new T.Vector3().fromArray(v,offset+3),c=new T.Vector3().fromArray(v,offset+6),n=new T.Triangle(a,b,c).getNormal(new T.Vector3()),p=a.clone().add(b).add(c).divideScalar(3);return {p:p.toArray(),n:n.toArray()};})),
  solids:()=>sea.collision.records.map(r=>({name:r.name,index:r.index,min:r.box.min.toArray(),max:r.box.max.toArray()})),
  hunter:(index,p)=>{Object.assign(hunters[index].state,createHunter(index,p));},surface:SURFACE_Y,
};
