import * as T from './vendor/three.module.min.js';
import { OceanAudio } from './ocean-audio.js';
import { aquaticMaterial, waterSurface, lightShafts, UnderwaterView, WaterTrails } from './ocean-look.js';
import { OceanDiscoveries, ENCOUNTERS, SPECIAL_KINDS, isHazard } from './ocean-discoveries.js';
import { ScoreFeedback } from './score-feedback.js';
import { clamp, newRun, movement, advance, boost, collect, hit, overlaps, openTreasure, nearMiss, RUSH_TARGET, RUN_LENGTH } from './gameplay.mjs';

const $ = id => document.getElementById(id);
const canvas = $('ocean');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse = matchMedia('(pointer: coarse)').matches;
const palettes = {
  reef: { name: 'حدائق المرجان', water: 0x12516a, sky: 0xb7e5d8, sand: 0xcbbb95, rock: 0x637e72, coral: [0xde8569,0xc85f60,0xe5b27c,0x628f91], kelp: 0x487d62, fog: .019, light: 3.8 },
  kelp: { name: 'غابة المدّ', water: 0x254f49, sky: 0xdce4b3, sand: 0x92966d, rock: 0x55644d, coral: [0xb38a62,0x8f9c53,0x788b55,0xbdac79], kelp: 0x849b4e, fog: .023, light: 3.1 },
  abyss: { name: 'بحر الليل', water: 0x051b34, sky: 0x6198ce, sand: 0x344a60, rock: 0x35415e, coral: [0x8a67b7,0x6aa5c1,0x4fae9b,0xa5789f], kelp: 0x38688d, fog: .023, light: 1.8 },
};
let world = 'reef', mode = 'menu', run = newRun(), time = 0, flow = 0, last = 0, toastTime = 0;
let waveClock = 0, nextWave = 18, guardianSpawned = false;
const sfx = new OceanAudio();
let look, shafts, trails, discoveries, feedback, encounterIndex=0, routeSeed=0, damageFlash=0;
const cueProjection=new T.Vector3(), collisionPoint=new T.Vector3(), cues=[];
let best = 0;
try { best = Math.max(0, Number(localStorage.getItem('amaq-best')) || 0); } catch {}
$('best').textContent = best;
const keys = new Set(), stick = { x: 0, y: 0, id: null }, pointer = { x: 0, y: 0, active: false };
const position = new T.Vector3(0, 4.4, 0), velocity = new T.Vector3(), aim = new T.Vector3();
let renderer, scene, camera, sun, ambient, floor, surface, hero, heroPivot, shieldMesh;
let chunks = [], fauna = [], items = [], wakes = [], splashes = [];
const tmp = new T.Object3D(), color = new T.Color(), viewTarget = new T.Vector3();
const uniforms = { time: { value: 0 }, flow: { value: 0 } };
const sphere = new T.SphereGeometry(1, 18, 12);
const coralGeo = new T.SphereGeometry(1, 8, 6);
const rockGeo = new T.IcosahedronGeometry(1, coarse?2:3);
const branchGeo = new T.CylinderGeometry(.65, 1, 1, 6);
const pearlGeo = new T.IcosahedronGeometry(.3, 2);
const ringGeo = new T.TorusGeometry(1, .025, 5, 40);
const bubbleGeo = new T.IcosahedronGeometry(.07, 1);
const grassGeo = new T.PlaneGeometry(.12,1,1,5);grassGeo.translate(0,.5,0);
for(let i=0;i<grassGeo.attributes.position.count;i++){
  const p=grassGeo.attributes.position,y=p.getY(i);p.setX(i,p.getX(i)*(1-y)+Math.sin(y*1.8)*.17);p.setZ(i,y*y*.14);
}
grassGeo.computeVertexNormals();
for(let i=0;i<rockGeo.attributes.position.count;i++){
  const p=rockGeo.attributes.position,x=p.getX(i),y=p.getY(i),z=p.getZ(i),n=1+.075*Math.sin(x*9+y*3)*Math.cos(z*7)+.035*Math.sin(y*15);
  p.setXYZ(i,x*n,y*n,z*n);
}
rockGeo.computeVertexNormals();
// Weld shading normals across duplicated icosphere vertices without changing geometry ownership.
const rockNormals=new Map(),rp=rockGeo.attributes.position,rn=rockGeo.attributes.normal;
const rockKey=i=>[rp.getX(i),rp.getY(i),rp.getZ(i)].map(n=>n.toFixed(4)).join(',');
for(let i=0;i<rp.count;i++){const key=rockKey(i),n=rockNormals.get(key)||new T.Vector3();n.add(new T.Vector3(rn.getX(i),rn.getY(i),rn.getZ(i)));rockNormals.set(key,n);}
for(let i=0;i<rp.count;i++){const n=rockNormals.get(rockKey(i)).clone().normalize();rn.setXYZ(i,n.x,n.y,n.z);}
const materials = {};
const mat = (c, roughness = .5, extra = {}) => new T.MeshStandardMaterial({ color: c, roughness, ...extra });

function mesh(geometry, material, parent, x=0, y=0, z=0, sx=1, sy=sx, sz=sx) {
  const m = new T.Mesh(geometry, material);
  m.position.set(x,y,z); m.scale.set(sx,sy,sz); parent.add(m); return m;
}
function fin(points, material, parent, thickness=.045) {
  const shape = new T.Shape();
  const first=points[0],last=points[points.length-1];shape.moveTo((first[0]+last[0])/2,(first[1]+last[1])/2);
  points.forEach(([x,y],i)=>{const next=points[(i+1)%points.length];shape.quadraticCurveTo(x,y,(x+next[0])/2,(y+next[1])/2);});
  shape.closePath();
  const g = new T.ExtrudeGeometry(shape,{depth:thickness,bevelEnabled:true,bevelSize:.025,bevelThickness:.02,bevelSegments:1,steps:1});
  g.translate(0,0,-thickness/2);
  return mesh(g,material,parent);
}
// A sculpted body in local +X; one sine wave continues through the body and tail.
function fish(predator=false, small=false) {
  const group = new T.Group();
  const bodyMat = predator ? materials.shark : materials.hero;
  const finMat = predator ? materials.sharkFin : materials.fin;
  const geom = new T.SphereGeometry(1, small?16:40, small?10:24);
  const p = geom.attributes.position;
  for(let i=0;i<p.count;i++){
    const x=p.getX(i), y=p.getY(i), z=p.getZ(i);
    const taper= .48 + .52 * ((x+1)/2);
    p.setXYZ(i, x * (predator?1.75:1.2), y*(predator?.56:.68)*taper, z*(predator?.48:.4)*taper);
  }
  geom.computeVertexNormals();
  const shades=[];
  for(let i=0;i<p.count;i++){
    const y=p.getY(i),x=p.getX(i);
    const shade=predator?new T.Color(y<-.1?0xd1d5c8:0x668a97):new T.Color(y<-.13?0xf4dda0:y>.25?0xffc26c:0xf29a4e);
    if(!predator&&x<.25&&y>-.1)shade.multiplyScalar(.9+.1*Math.sin(x*24+y*6));
    shades.push(shade.r,shade.g,shade.b);
  }
  geom.setAttribute('color',new T.Float32BufferAttribute(shades,3));
  const body=mesh(geom,bodyMat,group); body.castShadow=!small||predator;body.receiveShadow=true;
  const belly=null;
  const tail = new T.Group(); tail.position.x=predator?-1.55:-1.04; group.add(tail);
  fin(predator ? [[0,0],[-.85,1],[-.65,.05],[-.85,-.7],[-.18,-.24]] : [[0,0],[-.77,.77],[-.65,.08],[-.77,-.77],[-.08,-.14]],finMat,tail);
  const dorsal=fin(predator?[[.55,.28],[-.22,1.18],[-.75,.24]]:[[.65,.35],[.12,.95],[-.67,.33]],finMat,group);
  for (const side of (small&&!predator?[]:[-1,1])) {
    const wing=fin([[.2,0],[-.67,.5],[-.48,-.13]],finMat,group);
    wing.position.set(.03,-.15,side*.28); wing.rotation.x=side*1.2;
    wing.name='pectoral';
    mesh(sphere,materials.eyeRim,group,predator?1.06:.7,.15,side*(predator?.31:.27),.17,.19,.065);
    mesh(sphere,materials.eye,group,predator?1.085:.72,.16,side*(predator?.365:.32),.1,.12,.037);
    mesh(sphere,materials.glint,group,predator?1.11:.747,.195,side*(predator?.398:.35),.027);
    if(!small) for(let i=0;i<3;i++){
      const gill=mesh(new T.TorusGeometry(predator?.28:.25,.013,4,18,1.4),predator?materials.sharkFin:materials.fin,group,.39-i*.1,-.015,side*.32);
      gill.rotation.z=2.4; gill.scale.set(.47,1,.5);
    }
  }
  if(!predator && !small){
    for(let row=0;row<3;row++) for(let i=0;i<7;i++) for(const side of [-1,1]){
      const x=-.62+i*.15, y=.14+row*.105;
      mesh(sphere,materials.scale,group,x,y,side*(.245-Math.abs(x)*.1-row*.03),.058,.025,.018);
    }
    fin([[-.05,-.22],[-.38,-.74],[-.74,-.22]],finMat,group);
  }
  group.userData={tail,body,belly,dorsal,phase:Math.random()*6.28,small};
  return group;
}
function animateFish(f, t, speed=1){
  const u=f.userData; if(!u.tail)return;
  u.tail.rotation.y=Math.sin(t*9*speed+u.phase)*.48;
  u.body.rotation.y=Math.sin(t*9*speed+u.phase-1)*.045;
  u.dorsal.rotation.x=Math.sin(t*4+u.phase)*.08;
  for(const part of f.children) if(part.name==='pectoral')part.rotation.z=Math.sin(t*7+u.phase)*.15;
}
function instances(geo, material, entries, parent){
  if(!entries.length)return;
  const inst=new T.InstancedMesh(geo,material,entries.length);
  entries.forEach((e,i)=>{
    tmp.position.set(...e.p); tmp.rotation.set(...(e.r||[0,0,0])); tmp.scale.set(...e.s);
    if(e.q)tmp.quaternion.copy(e.q);
    tmp.updateMatrix(); inst.setMatrixAt(i,tmp.matrix);
    if(e.c!==undefined)inst.setColorAt(i,color.set(e.c));
  });
  inst.instanceMatrix.needsUpdate=true;
  inst.computeBoundingSphere();inst.receiveShadow=true; parent.add(inst); return inst;
}
function branch(entries,a,b,r,c){
  const direction=new T.Vector3().subVectors(b,a);
  entries.push({p:a.clone().add(b).multiplyScalar(.5).toArray(),s:[r,direction.length(),r],q:new T.Quaternion().setFromUnitVectors(new T.Vector3(0,1,0),direction.normalize()),c});
}
function makeChunk(index){
  const root=new T.Group(); root.position.z=-index*30; scene.add(root);
  const rocks=[],branches=[],tips=[],plates=[],leaves=[],grass=[],pebbles=[];
  const pal=palettes[world];
  for(let i=0;i<20;i++){
    const side=i%2?1:-1, x=side*(9+Math.random()*15), z=-Math.random()*30;
    const h=1.5+Math.random()*5;
    rocks.push({p:[x,h*.24-1,z],s:[2+Math.random()*3,h,2+Math.random()*3],r:[Math.random(),Math.random()*6,Math.random()*.6],c:color.set(pal.rock).offsetHSL(0,0,Math.random()*.09-.04).getHex()});
  }
  for(let i=0;i<16;i++){
    const x=(i%2?1:-1)*(7.8+Math.random()*12),z=-Math.random()*30;
    const c=pal.coral[i%4],h=.8+Math.random()*2.5;
    if(world==='kelp' || i%4===0){
      const kh=world==='kelp'?5+Math.random()*7:h+1;
      for(let j=0;j<6;j++){
        const y=j*kh/6, lx=x+Math.sin(j*.85+i)*.35;
        branch(branches,new T.Vector3(lx,y,z),new T.Vector3(x+Math.sin((j+1)*.85+i)*.35,y+kh/6,z),.07,pal.kelp);
        for(const side of [-1,1])leaves.push({p:[lx+side*.45,y+.4,z],s:[.85,.1,.28],r:[.1,Math.sin(j+i),side*.6],c:pal.kelp});
      }
    } else if(i%3===0){
      for(let j=0;j<5;j++)plates.push({p:[x+Math.sin(j)*.4,.4+j*.3,z+Math.cos(j)*.35],s:[1.3-j*.16,.12,1.2-j*.12],r:[.04*j,0,.09],c});
      branch(branches,new T.Vector3(x,0,z),new T.Vector3(x,h*.5,z),.24,c);
    } else {
      const top=new T.Vector3(x,h,z);
      branch(branches,new T.Vector3(x,0,z),top,.14,c);
      for(let j=0;j<5;j++){
        const end=new T.Vector3(x+Math.sin(j*2.4)*h*.5,h*(.8+Math.random()*.7),z+Math.cos(j*2.4)*h*.4);
        branch(branches,new T.Vector3(x,h*.45,z),end,.095,c);
        for(let k=0;k<2;k++){
          const tip=end.clone().add(new T.Vector3((Math.random()-.5)*.55,.25+Math.random()*.35,(Math.random()-.5)*.5));
          branch(branches,end,tip,.055,c);
          tips.push({p:tip.toArray(),s:[.07,.09,.07],c:world==='abyss'?0xb9f7e0:0xf0c4a0});
        }
      }
    }
  }
  for(let i=0;i<140;i++){
    const x=(Math.random()-.5)*38,z=-Math.random()*30;
    for(let j=0;j<3;j++)grass.push({p:[x+(j-1)*.09,-.66,z+Math.sin(j)*.1],s:[.6+Math.random()*.6,.5+Math.random()*.7,.7],r:[0,Math.random()*Math.PI,(j-1)*.2],c:pal.kelp});
    if(i%3===0)pebbles.push({p:[x+.8,-.5,z+.8],s:[.12+Math.random()*.23,.08+Math.random()*.11,.2+Math.random()*.25],r:[0,Math.random()*6,.1],c:pal.rock});
  }
  instances(grassGeo,materials.leaf,grass,root);
  instances(coralGeo,materials.rock,pebbles,root);
  instances(rockGeo,materials.rock,rocks,root).castShadow=true;
  instances(branchGeo,materials.coral,branches,root);
  instances(coralGeo,materials.tip,tips,root);
  instances(coralGeo,materials.coral,plates,root);
  const vegetation=instances(coralGeo,materials.leaf,leaves,root);
  root.userData={vegetation}; return root;
}
function clearGroup(group){
  group.traverse(obj=>{ if(obj.isInstancedMesh)obj.dispose(); });
  scene.remove(group);
}
function setWorld(name){
  if(!palettes[name])return; world=name; const p=palettes[world];
  scene.background=new T.Color(p.water); scene.fog=new T.FogExp2(p.water,p.fog);
  ambient.color.set(p.sky); ambient.groundColor.set(p.rock); ambient.intensity=world==='abyss'?.85:.78;
  sun.color.set(world==='abyss'?0x92cfee:0xffedc3); sun.intensity=p.light;
  materials.sand.color.set(p.sand); materials.coral.emissive.set(world==='abyss'?0x244358:0x000000);
  materials.tip.emissive.set(world==='abyss'?0x53a7a6:0x000000);
  materials.leaf.emissive.set(world==='abyss'?0x103548:0x000000);
  surface.material.uniforms.waterColor.value.set(p.sky);
  if(look)look.uniforms.waterTint.value.set(p.water);
  if(shafts){shafts.material.uniforms.tint.value.set(p.sky);shafts.material.uniforms.strength.value=world==='abyss'?.25:1;}
  for(const chunk of chunks)clearGroup(chunk);
  chunks=Array.from({length:6},(_,i)=>makeChunk(i));
  $('zone').textContent=p.name;
  document.documentElement.dataset.world=world;
  for(const button of document.querySelectorAll('[data-world]')) if(button.tagName==='BUTTON')button.setAttribute('aria-pressed',String(button.dataset.world===name));
}
function init(){
  renderer=new T.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,coarse?1.35:1.7));
  renderer.setSize(innerWidth,innerHeight);
  renderer.toneMapping=T.ACESFilmicToneMapping; renderer.toneMappingExposure=1.05;
  renderer.shadowMap.enabled=true; renderer.shadowMap.type=T.PCFShadowMap;
  scene=new T.Scene(); camera=new T.PerspectiveCamera(53,innerWidth/innerHeight,.1,160);
  camera.position.set(0,7.3,15);
  ambient=new T.HemisphereLight(0xa0e4de,0x536b59,2.1); scene.add(ambient);
  sun=new T.DirectionalLight(0xffefd5,3.4); sun.position.set(-16,26,8); sun.target.position.set(0,0,-20); scene.add(sun,sun.target);
  sun.castShadow=true; sun.shadow.mapSize.set(coarse?1024:2048,coarse?1024:2048);
  Object.assign(sun.shadow.camera,{left:-25,right:25,top:27,bottom:-27,near:1,far:100});
  sun.shadow.bias=-.0004;sun.shadow.normalBias=.035;sun.shadow.radius=3;
  const rim=new T.DirectionalLight(0x8fd6df,.8); rim.position.set(7,7,13); scene.add(rim);
  materials.hero=new T.MeshPhysicalMaterial({color:0xffffff,roughness:.32,metalness:.1,vertexColors:true,clearcoat:.65,clearcoatRoughness:.24});
  materials.fin=mat(0x277b80,.35,{side:T.DoubleSide,transparent:true,opacity:.91});
  materials.scale=mat(0xf8d997,.5);
  materials.belly=mat(0xe9dfb5,.65);
  materials.shark=mat(0xffffff,.48,{metalness:.08,vertexColors:true});
  materials.sharkFin=mat(0x354755,.5,{side:T.DoubleSide});
  materials.eyeRim=mat(0xdfb25f,.3);
  materials.eye=mat(0x03151c,.13);
  materials.glint=new T.MeshBasicMaterial({color:0xfff4d6});
  materials.rock=mat(0xffffff,.92);
  materials.coral=mat(0xffffff,.7);
  materials.tip=mat(0xffffff,.6);
  materials.leaf=mat(0xffffff,.8,{side:T.DoubleSide});
  materials.sand=mat(0xc1b992,.96);
  materials.pearl=mat(0xffe8b5,.22,{emissive:0xc9a25f,emissiveIntensity:.65,metalness:.18});
  materials.gold=mat(0xffc45d,.2,{emissive:0xd98a22,emissiveIntensity:.95,metalness:.32});
  materials.shield=mat(0x73eed8,.3,{emissive:0x45c4bd,emissiveIntensity:1});
  for(const name of ['hero','shark','rock','coral','leaf','sand','fin'])aquaticMaterial(materials[name],uniforms,{sand:name==='sand',skin:name==='hero'||name==='shark',sway:name==='leaf',rock:name==='rock'});
  const floorGeo=new T.PlaneGeometry(130,220,80,120); floorGeo.rotateX(-Math.PI/2);
  const fp=floorGeo.attributes.position;
  for(let i=0;i<fp.count;i++){const x=fp.getX(i),z=fp.getZ(i);fp.setY(i,Math.sin(x*.29+z*.11)*.12+Math.sin(z*.45)*.035 + Math.max(0,Math.abs(x)-9)*.07);}
  floorGeo.computeVertexNormals(); floor=mesh(floorGeo,materials.sand,scene,0,-.5,-70);floor.receiveShadow=true;
  surface=waterSurface(uniforms);scene.add(surface);
  shafts=lightShafts(scene,uniforms);
  look=new UnderwaterView(renderer,scene,camera,uniforms,reduced,coarse);
  trails=new WaterTrails(scene);discoveries=new OceanDiscoveries(scene);
  feedback=new ScoreFeedback($('score-feedback'),reduced);
  for(let i=0;i<3;i++){const el=document.createElement('div');el.className='depth-cue';el.hidden=true;$('depth-cues').append(el);cues.push(el);}
  heroPivot=new T.Group(); scene.add(heroPivot);
  hero=fish(); heroPivot.add(hero);
  shieldMesh=mesh(new T.SphereGeometry(1.7,22,16),new T.MeshBasicMaterial({color:0x94f9e1,transparent:true,opacity:.1,wireframe:false,depthWrite:false}),heroPivot);
  shieldMesh.visible=false;
  for(let i=0;i<22;i++){
    const f=fish(false,true); f.scale.setScalar(.17+Math.random()*.17);
    f.position.set((Math.random()-.5)*32,3+Math.random()*8,-15-Math.random()*75);
    f.rotation.y=Math.random()*6.28; f.userData.base=f.position.clone(); fauna.push(f);scene.add(f);
  }
  createParticles();
  setWorld('reef'); resize(); bind();
  $('start').disabled=false; $('start').querySelector('span').textContent='ابدأ الغوص';
  document.documentElement.dataset.engine='ready';
  renderer.setAnimationLoop(frame);
}
let dust, dustData;
function createParticles(){
  dustData=new Float32Array((reduced?90:260)*3);
  for(let i=0;i<dustData.length;i+=3){dustData[i]=(Math.random()-.5)*55;dustData[i+1]=Math.random()*15;dustData[i+2]=15-Math.random()*110;}
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.BufferAttribute(dustData,3));
  dust=new T.Points(geo,new T.PointsMaterial({color:0xb4eadf,size:.048,transparent:true,opacity:.5,depthWrite:false}));
  dust.material.onBeforeCompile=shader=>{
    shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
      float bd=length(gl_PointCoord-vec2(.5));if(bd>.5)discard;diffuseColor.a*=pow(1.-bd*2.,1.3);`);
  };
  scene.add(dust);
}
function item(kind,x,y,z){
  let model;
  if(SPECIAL_KINDS.includes(kind))model=discoveries.create(kind);
  else if(kind==='shark'||kind==='guardian'){
    model=fish(true,true); model.rotation.y=-Math.PI/2; model.scale.setScalar(kind==='guardian'?1.5:.9);
  } else {
    model=new T.Group();
    mesh(pearlGeo,materials[kind==='pearl'?'pearl':kind==='gold'?'gold':'shield'],model,0,0,0,kind==='shield'?1.5:1);
    const halo=mesh(ringGeo,new T.MeshBasicMaterial({color:kind==='shield'?0x79fce4:0xffd690,transparent:true,opacity:.55}),model,0,0,0,.5);
    halo.rotation.y=.3;
  }
  model.position.set(x,y,z);scene.add(model);
  items.push({kind,mesh:model,baseY:y,phase:Math.random()*6.28,radius:kind==='guardian'?2.1:kind==='gate'?1.65:kind==='jelly'?1.18:kind==='shark'?1.15:kind==='chest'?1.1:.85,lastZ:z,wakeClock:0,passed:false});
  return model;
}
function spawnWave(){
  const n=Math.floor(run.distance/18),x=Math.sin(n*1.8)*4.6,y=3.7+Math.sin(n*.8)*2.1;
  for(let i=0;i<6;i++)item(i===5?'gold':'pearl',clamp(x+Math.sin(i*.55)*1.1,-6,6),clamp(y+Math.sin(i*.55)*.6,1.7,9),-49-i*2.5);
  if(n>1)item('shark',clamp(-x+Math.sin(n)*1.2,-6,6),clamp(6-y+2,2,8),-61);
  if(n>12&&n%2===0)item('shark',x*.4,7.7,-72);
  if(n%6===4)item('shield',x*.3,4.5,-76);
}
function encounter(event){
  const x=Math.sin(event.at*.13+routeSeed)*3.2,y=4.2+Math.cos(event.at*.17)*1.2;
  toast(event.title);sfx.play('discover');
  if(event.kind==='magnet')item('magnet',x,y,-40);
  if(event.kind==='treasure')item('chest',x,y,-48);
  if(event.kind==='frenzy')item('frenzy',x,y,-45);
  if(event.kind==='whale')discoveries.sighting();
  if(event.kind==='current')for(let i=0;i<3;i++){
    const gx=x+Math.sin(i*.7)*1.2,gy=y+i*.22,z=-42-i*11;
    item('gate',gx,gy,z);item('gold',gx,gy,z-4);
  }
  if(event.kind==='jellies')for(let i=0;i<5;i++)item('jelly',-5+i*2.5,3.8+(i%2)*2.6,-48-(i%2)*8);
}
function celebrateRush(previous){
  if(previous<=0&&run.frenzy>0){toast('حمّى اللآلئ! مكافآت مضاعفة لمدة 8 ثوانٍ');sfx.play('frenzy');}
}
function updateDepthCues(){
  const candidates=mode==='playing'?items.filter(o=>(isHazard(o.kind)||SPECIAL_KINDS.includes(o.kind))&&o.mesh.position.z<0&&o.mesh.position.z>-45).sort((a,b)=>b.mesh.position.z-a.mesh.position.z).slice(0,3):[];
  cues.forEach((el,i)=>{
    const obj=candidates[i];if(!obj){el.hidden=true;return;}
    cueProjection.copy(obj.mesh.position).add(new T.Vector3(0,obj.kind==='jelly'?1.5:1.2,0)).project(camera);
    if(cueProjection.z>1||Math.abs(cueProjection.x)>.92||Math.abs(cueProjection.y)>.76){el.hidden=true;return;}
    el.hidden=false;el.className='depth-cue '+(isHazard(obj.kind)?'danger':'reward');
    const name={shark:'مفترس',guardian:'قرش الوادي',jelly:'قنديل',chest:'كنز',magnet:'مغناطيس',gate:'تيار',frenzy:'حمّى اللآلئ'}[obj.kind];
    el.textContent=name+' · '+Math.ceil(-obj.mesh.position.z)+' م';
    el.style.transform='translate('+((cueProjection.x*.5+.5)*innerWidth)+'px,'+((-cueProjection.y*.5+.5)*innerHeight)+'px) translate(-50%,-100%)';
    el.classList.toggle('near',obj.mesh.position.z>-10);
  });
}
function renderGame(){look.render();}
function disposeItem(obj){
  scene.remove(obj.mesh);
  if(obj.mesh.userData.special)return;
  obj.mesh.traverse(m=>{
    if(!m.isMesh)return;
    // Shared primitives/materials stay alive; each fish owns only its custom meshes.
    if(![sphere,pearlGeo,ringGeo].includes(m.geometry))m.geometry.dispose();
    if(m.material.isMeshBasicMaterial && m.material!==materials.glint)m.material.dispose();
  });
}
function emitWake(pos,hostile=false,size=1){
  if(wakes.length>52 || reduced)return;
  const m=new T.Mesh(ringGeo,new T.MeshBasicMaterial({color:hostile?0xe18879:0xbcece2,transparent:true,opacity:hostile?.18:.12,depthWrite:false}));
  m.position.copy(pos);m.position.z+=hostile?-1.4:1.3;m.scale.set(size*.45,size*.32,1);
  if(hostile)m.rotation.z=Math.random()*3;
  scene.add(m);wakes.push({mesh:m,life:1,max:1,hostile,size});
}
function burst(pos,c){
  for(let i=0;i<(reduced?5:12);i++){
    if(splashes.length>=100)break;
    const m=new T.Mesh(bubbleGeo,new T.MeshBasicMaterial({color:c,transparent:true}));
    m.position.copy(pos);scene.add(m);
    splashes.push({mesh:m,life:.7,v:new T.Vector3((Math.random()-.5)*5,(Math.random()-.5)*5,(Math.random()-.5)*5)});
  }
}
function toast(message){
  $('toast').textContent=message;$('toast').classList.add('visible');toastTime=3.2;
}
function syncSoundUI(){
  const state=sfx.snapshot(),label=state.supported?(state.enabled?'كتم الصوت':'تشغيل الصوت'):'الصوت غير متاح في هذا المتصفح';
  $('sound').setAttribute('aria-pressed',String(state.enabled));
  $('sound').setAttribute('aria-label',label);$('sound').title=label;
  $('sound').disabled=!state.supported;$('volume').disabled=!state.supported;
  $('volume').value=Math.round(state.volume*100);
  $('volume').setAttribute('aria-valuetext',state.muted?'مكتوم':Math.round(state.volume*100)+'٪');
}
function start(){
  if(mode==='paused'){setMode('playing');canvas.focus();return;}
  sfx.stopVoices();feedback.clear();trails.reset();discoveries.reset();encounterIndex=0;routeSeed=Math.random()*6.28;damageFlash=0;
  items.forEach(disposeItem);items=[];
  for(const effect of [...wakes,...splashes]){scene.remove(effect.mesh);effect.mesh.material.dispose();}
  wakes=[];splashes=[];run=newRun();position.set(0,4.4,0);velocity.set(0,0,0);flow=0;nextWave=18;guardianSpawned=false;waveClock=0;
  keys.clear();pointer.active=false;stick.x=stick.y=0;
  // The first pearl trail leads out from the player's starting position.
  for(let i=0;i<8;i++)item(i===7?'gold':'pearl',Math.sin(i*.5)*1.3,4.4,-8-i*2.5);
  setMode('playing');canvas.focus();toast('الأسهم للسباحة · Space للاندفاع عبر المفترسات');sfx.play('start');
}
function setMode(value){
  sfx.setMode(value);syncSoundUI();
  if(value==='ended')sfx.play(run.won?'win':'lose');
  mode=value;document.documentElement.dataset.mode=value;keys.clear();pointer.active=false;stick.x=stick.y=0;
  $('toast').classList.remove('visible');toastTime=0;
  $('menu').hidden=value==='playing';$('hud').hidden=value==='menu';
  $('worlds').hidden=value!=='menu';$('home').hidden=value==='menu'||value==='playing';
  $('results').hidden=value!=='ended';
  $('pause').setAttribute('aria-label',value==='paused'?'متابعة الرحلة':'إيقاف مؤقت');
  if(value==='playing')canvas.focus();
  if(value==='paused'){
    $('heading').textContent='خذ نَفَساً.';$('description').textContent='البحر ينتظرك. تابع رحلتك حين تكون مستعداً.';
    $('start').querySelector('span').textContent='متابعة الرحلة';$('start').focus();
  } else if(value==='menu'){
    $('heading').innerHTML='عالمٌ آخر<br><em>تحت السطح.</em>';
    $('description').innerHTML='بين الضوء والمرجان، تبدأ رحلتك.<br>اسبح مع التيار، اجمع اللآلئ، واكتشف ما تخبّئه الأعماق.';
    $('start').querySelector('span').textContent='ابدأ الغوص';
    items.forEach(disposeItem);items=[];feedback.clear();trails.reset();discoveries.reset();
  } else if(value==='ended'){
    best=Math.max(best,run.score);try{localStorage.setItem('amaq-best',String(best));}catch{}
    $('best').textContent=best;
    $('heading').textContent=run.won?'وصلت إلى النور.':'البحر له أسراره.';
    $('description').textContent=run.won?'عبرت الوادي بسلام. وجهة أخرى تنتظر اكتشافك.':'رحلة أخرى، وفرصة لتسبح أبعد. الاندفاع يحميك من المفترسات.';
    $('results').innerHTML='<span><b>'+run.score+'</b>نقطة</span><span><b>'+Math.floor(run.distance)+'</b>متر</span><span><b>'+run.pearls+'</b>لؤلؤة</span>';
    $('start').querySelector('span').textContent='غُص من جديد';$('start').focus();
  }
}
function togglePause(){if(mode==='playing')setMode('paused');else if(mode==='paused')setMode('playing');}
function dash(){if(mode==='playing'&&boost(run)){emitWake(position,false,1.8);sfx.play('dash');}}
function update(dt){
  const playing=mode==='playing';
  const travel=playing?advance(run,dt):mode==='menu'?dt*1.2:0;
  flow+=travel;
  if(mode==='menu'||playing)time+=dt;
  uniforms.time.value=time;uniforms.flow.value=flow;
  for(let i=0;i<chunks.length;i++){
    chunks[i].position.z=((flow-i*30+150)%180+180)%180-150;
    const v=chunks[i].userData.vegetation;if(v&&!reduced)v.rotation.z=Math.sin(time*.7+i)*.018;
  }
  for(let i=0;i<fauna.length;i++){
    const f=fauna[i],b=f.userData.base;
    f.position.x=b.x+Math.sin(time*.21+i)*3;
    f.position.y=b.y+Math.sin(time*.6+i)*.35;
    f.position.z=((b.z+flow*.5+100)%115+115)%115-100;
    f.rotation.y=Math.PI/2+Math.cos(time*.21+i)*.4;animateFish(f,time,1.1);
  }
  for(let i=0;i<dustData.length;i+=3){
    if(mode==='menu'||playing){dustData[i+1]+=dt*.1;dustData[i+2]+=travel;}
    if(dustData[i+2]>15)dustData[i+2]=-95;if(dustData[i+1]>15)dustData[i+1]=0;
  }
  dust.geometry.attributes.position.needsUpdate=true;
  if(playing){
    const input=movement(keys);
    let ix=input.x+stick.x,iy=input.y+stick.y;
    if(!ix&&!iy&&pointer.active){ix=clamp((pointer.x-position.x)*1.7,-1,1);iy=clamp((pointer.y-position.y)*1.7,-1,1);}
    velocity.x=T.MathUtils.damp(velocity.x,clamp(ix,-1,1)*8,7,dt);
    velocity.y=T.MathUtils.damp(velocity.y,clamp(iy,-1,1)*7,7,dt);
    position.x=clamp(position.x+velocity.x*dt,-6.3,6.3);
    position.y=clamp(position.y+velocity.y*dt,1.6,10);
    if(run.distance>=nextWave){spawnWave();nextWave+=18;}
    while(encounterIndex<ENCOUNTERS.length&&run.distance>=ENCOUNTERS[encounterIndex].at)encounter(ENCOUNTERS[encounterIndex++]);
    if(run.distance>405&&!guardianSpawned){item('guardian',0,4.6,-85);guardianSpawned=true;sfx.play('guardian');toast('قرش الوادي أمامك · تفادَه أو اندفع عبره');}
    if(run.distance>670&&run.distance-travel<=670)toast('ضوء المخرج قريب · واصل السباحة');
    waveClock-=dt;if(waveClock<=0){emitWake(position,false,run.boost>0?1.7:.8);waveClock=run.boost>0?.07:.21;}
    for(let i=items.length-1;i>=0;i--){
      const obj=items[i],p=obj.mesh.position;obj.lastZ=p.z;
      const danger=isHazard(obj.kind);
      p.z+=travel+(danger&&obj.kind!=='jelly'?dt*(obj.kind==='guardian'?6:4):0);
      const magnetic=run.magnet>0&&(obj.kind==='pearl'||obj.kind==='gold')&&p.z<2&&p.distanceTo(position)<9;
      if(magnetic){obj.attracted=true;p.lerp(position,1-Math.exp(-dt*7));}
      else {if(obj.attracted){obj.baseY=p.y;obj.attracted=false;}p.y=obj.baseY+Math.sin(time*1.6+obj.phase)*.18;}
      if(obj.mesh.userData.special)discoveries.animate(obj.mesh,obj.kind,time);
      if(danger&&obj.kind!=='jelly'){
        animateFish(obj.mesh,time,1.25);obj.wakeClock-=dt;
        if(obj.wakeClock<=0){emitWake(p,true,obj.kind==='guardian'?2:1.2);obj.wakeClock=.35;}
      } else if(!obj.mesh.userData.special){obj.mesh.rotation.y+=dt*.7;obj.mesh.rotation.z=Math.sin(time+obj.phase)*.16;}
      collisionPoint.copy(p);if(obj.kind==='jelly')collisionPoint.y-=.45;
      if(overlaps(position,collisionPoint,obj.radius,obj.lastZ)){
        if(danger){
          const previousScore=run.score,result=hit(run);
          if(result!=='immune'){
            feedback.show(run.score-previousScore,position,result==='shield'?'حماية':result==='defeated'?'اندفاع ناجح':run.score===previousScore?'أُصبت':'');
            if(result==='hurt')damageFlash=1;
            burst(p,result==='hurt'?0xe2947d:0xb5edda);sfx.play(result==='shield'?'block':result,{pan:clamp((p.x-position.x)/8,-1,1)});
            if(result==='shield')toast('الدرع حماك');
            if(result==='defeated')toast(obj.kind==='guardian'?'تجاوزت قرش الوادي! +25':'اندفاع ناجح +25');
            disposeItem(obj);items.splice(i,1);
          }
        } else {
          const previousRush=run.frenzy;
          let delta,label='';
          if(obj.kind==='chest'){
            const treasure=openTreasure(run);delta=treasure.delta;
            label={magnet:'كنز + مغناطيس',heal:'كنز + قلب',shield:'كنز + درع',jackpot:'الكنز الكبير!'}[treasure.reward];
            toast(label);sfx.play('treasure');
          }else{
            delta=collect(run,obj.kind);
            label={magnet:'مغناطيس',gate:'تيار سريع',shield:'درع',gold:'لؤلؤة ذهبية',frenzy:'حمّى اللآلئ'}[obj.kind]||'';
            sfx.play(obj.kind,{combo:run.combo,pan:clamp((p.x-position.x)/8,-1,1)});
            if(obj.kind==='shield')toast('درع المدّ · حماية لمدة 9 ثوانٍ');
            if(obj.kind==='magnet')toast('مغناطيس نشط · اللآلئ القريبة تنجذب إليك');
          }
          feedback.show(delta,position,label);burst(p,obj.kind==='shield'||obj.kind==='magnet'?0x88edd3:0xf5d48c);
          celebrateRush(previousRush);
          disposeItem(obj);items.splice(i,1);
        }
      } else if(p.z>14){disposeItem(obj);items.splice(i,1);}
      else if(danger&&!obj.passed&&obj.lastZ<1.5&&p.z>=1.5){
        obj.passed=true;
        const lateral=Math.hypot(position.x-collisionPoint.x,position.y-collisionPoint.y);
        if(lateral>obj.radius&&lateral<obj.radius+1.05){
          const previousRush=run.frenzy,delta=nearMiss(run);
          if(delta){feedback.show(delta,position,'مراوغة قريبة');sfx.play('nearMiss');celebrateRush(previousRush);}
        }
      }
    }
    let threat=null;
    for(const obj of items){
      if(!isHazard(obj.kind))continue;
      const p=obj.mesh.position,dx=p.x-position.x,dy=p.y-position.y;
      if(p.z>2||Math.hypot(dx,dy)>7)continue;
      const distance=Math.hypot(dx,dy,p.z);
      if(!threat||distance<threat.distance)threat={distance,x:dx};
    }
    sfx.update({world,speed:Math.hypot(velocity.x,velocity.y)/9,boosting:run.boost>0,threat});
    if(run.ended)setMode('ended');
  }
  if(playing)damageFlash=Math.max(0,damageFlash-dt*2.4);
  look.uniforms.hurt.value=damageFlash;
  look.uniforms.speed.value=run.boost>0||run.current>0?1:0;
  look.uniforms.rush.value=T.MathUtils.damp(look.uniforms.rush.value,playing&&run.frenzy>0?1:0,4,dt);
  shafts.update(time);discoveries.update(dt,time,playing);
  trails.update(dt,position,travel,time,playing,reduced);
  const active=mode!=='menu';
  const portrait=innerWidth<700;
  const displayPos=active?position:new T.Vector3(portrait?0:-4.5,portrait?7.9:5,0);
  heroPivot.position.lerp(displayPos,1-Math.exp(-dt*5));
  const scale=active?1:portrait?1.45:2.05;
  heroPivot.scale.setScalar(T.MathUtils.damp(heroPivot.scale.x,scale,5,dt));
  hero.rotation.y=T.MathUtils.damp(hero.rotation.y,active?Math.PI/2-velocity.x*.045:-.42+Math.sin(time*.24)*.2,5,dt);
  hero.rotation.z=T.MathUtils.damp(hero.rotation.z,active?velocity.y*.035:Math.sin(time*.8)*.055,5,dt);
  hero.rotation.x=T.MathUtils.damp(hero.rotation.x,active?velocity.x*.045:0,5,dt);
  if(!active)heroPivot.position.y+=Math.sin(time*1.2)*.004;
  else if(playing&&!reduced)heroPivot.position.y+=Math.sin(time*2.4)*.015;
  animateFish(hero,time,run.boost>0?1.7:1);
  shieldMesh.visible=playing&&run.shield>0;
  hero.visible=!(playing&&run.invulnerable>0&&Math.floor(time*12)%2===0);
  for(let i=wakes.length-1;i>=0;i--){
    const w=wakes[i];if(playing||mode==='menu'){w.life-=dt;
    w.mesh.position.z+=travel*.58;w.mesh.scale.x+=dt*.9;w.mesh.scale.y+=dt*.55;}
    w.mesh.material.opacity=w.life*(w.hostile?.16:.1);
    if(w.life<=0){scene.remove(w.mesh);w.mesh.material.dispose();wakes.splice(i,1);}
  }
  for(let i=splashes.length-1;i>=0;i--){
    const s=splashes[i];if(playing||mode==='menu'){s.life-=dt;s.mesh.position.addScaledVector(s.v,dt);s.mesh.position.z+=travel*.6;}
    s.mesh.material.opacity=Math.max(0,s.life/.7);
    if(s.life<=0){scene.remove(s.mesh);s.mesh.material.dispose();splashes.splice(i,1);}
  }
  const camX=active?position.x*.25:0,camY=active?6.8+position.y*.12:7.4;
  aim.set(camX,camY,portrait?20:14.5);camera.position.lerp(aim,1-Math.exp(-dt*(reduced?12:3)));
  viewTarget.set(active?position.x*.22:0,active?position.y*.4+2.2:4.4,-13);
  camera.lookAt(viewTarget);
  camera.fov=T.MathUtils.damp(camera.fov,run.boost>0&&playing&&!reduced?60:53,4,dt);camera.updateProjectionMatrix();
  feedback.update(dt,camera,playing);updateDepthCues();
  if(toastTime>0&&mode==='playing'){toastTime-=dt;if(toastTime<=0)$('toast').classList.remove('visible');}
}
let hudClock=0,slowFrames=0;
function frame(ms){
  const dt=Math.min((ms-last)/1000||.016,.05);last=ms;
  update(dt);renderGame();
  hudClock+=dt;
  if(hudClock>.1){
    hudClock=0;$('score').textContent=run.score;
    $('rush-meter').value=run.frenzy>0?run.frenzy/8*RUSH_TARGET:run.charge;
    $('rush-label').textContent=run.frenzy>0?'حمّى اللآلئ ×2 · '+Math.ceil(run.frenzy)+' ث':'حمّى اللآلئ · '+run.charge+'/'+RUSH_TARGET;
    $('rush-box').classList.toggle('active',run.frenzy>0);
    $('powers').textContent=[run.magnet>0?'مغناطيس '+Math.ceil(run.magnet)+' ث':'',run.current>0?'تيار '+Math.ceil(run.current)+' ث':''].filter(Boolean).join(' · ');$('combo').textContent=run.combo>1?'×'+run.combo+' سلسلة':'';
    $('distance').textContent=Math.floor(run.distance);$('progress').value=run.distance;
    $('lives').textContent=Array.from({length:3},(_,i)=>i<run.lives?'●':'○').join(' ');
    $('lives').setAttribute('aria-label',run.lives+' محاولات');
    $('shield').textContent=run.shield>0?'درع المدّ '+Math.ceil(run.shield)+' ث':'';
    $('energy').value=3.6-run.cooldown;$('boost-label').textContent=run.cooldown>0?'استعادة الطاقة':'الاندفاع جاهز';
  }
  // Adapt only resolution; gameplay and scene geometry stay identical on slower GPUs.
  if(dt>.034)slowFrames++;else slowFrames=Math.max(0,slowFrames-1);
  if(slowFrames>100&&renderer.getPixelRatio()>1){renderer.setPixelRatio(1);slowFrames=0;}
}
function resize(){
  camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight,false);
}
function bind(){
  $('start').onclick=start;$('home').onclick=()=>setMode('menu');$('pause').onclick=togglePause;
  syncSoundUI();
  $('sound').onclick=()=>{sfx.toggle();syncSoundUI();};
  $('volume').oninput=e=>{sfx.setVolume(Number(e.target.value)/100);syncSoundUI();};
  $('volume').addEventListener('focus',()=>{keys.clear();pointer.active=false;});
  $('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{toast('ملء الشاشة غير متاح في هذا المتصفح');}};
  document.querySelectorAll('#worlds button').forEach(b=>b.onclick=()=>setWorld(b.dataset.world));
  addEventListener('resize',resize);
  addEventListener('keydown',e=>{
    if(e.code==='Escape'){e.preventDefault();if(!e.repeat)togglePause();return;}
    if(mode!=='playing'||e.target.closest?.('input,select,textarea')||(e.code==='Space'&&e.target.closest?.('button,a')))return;
    if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','KeyW','KeyA','KeyS','KeyD'].includes(e.code)){
      e.preventDefault();keys.add(e.code);pointer.active=false;
      if(e.code==='Space'&&!e.repeat)dash();
    }
  });
  addEventListener('keyup',e=>keys.delete(e.code));
  addEventListener('blur',()=>{keys.clear();if(mode==='playing')setMode('paused');sfx.quiet();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){if(mode==='playing')setMode('paused');sfx.quiet();}last=performance.now();});
  addEventListener('pagehide',()=>sfx.quiet());
  const steer=e=>{
    if(mode!=='playing')return;
    const rect=canvas.getBoundingClientRect();
    pointer.x=clamp(((e.clientX-rect.left)/rect.width-.5)*15,-6.3,6.3);
    pointer.y=clamp(10-((e.clientY-rect.top)/rect.height)*10,1.6,10);pointer.active=true;
  };
  canvas.addEventListener('pointerdown',e=>{steer(e);canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(e.buttons||e.pointerType==='mouse')steer(e);});
  canvas.addEventListener('pointercancel',()=>pointer.active=false);
  const pad=$('stick'),knob=pad.querySelector('i');
  const drag=e=>{if(e.pointerId!==stick.id)return;const r=pad.getBoundingClientRect();stick.x=clamp((e.clientX-r.left-r.width/2)/35,-1,1);stick.y=clamp((r.top+r.height/2-e.clientY)/35,-1,1);knob.style.transform='translate('+stick.x*24+'px,'+-stick.y*24+'px)';};
  pad.addEventListener('pointerdown',e=>{stick.id=e.pointerId;pointer.active=false;pad.setPointerCapture(e.pointerId);drag(e);});
  pad.addEventListener('pointermove',drag);
  const release=()=>{stick.id=null;stick.x=stick.y=0;knob.style.transform='';};
  pad.addEventListener('pointerup',release);pad.addEventListener('pointercancel',release);pad.addEventListener('lostpointercapture',release);
  $('touch-boost').addEventListener('pointerdown',e=>{e.preventDefault();dash();});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();setMode('paused');$('error').hidden=false;renderer.setAnimationLoop(null);});
  canvas.addEventListener('webglcontextrestored',()=>location.reload());
  if(new URLSearchParams(location.search).has('test')){
    window.__ocean={simulate:seconds=>{for(let t=0;t<seconds;t+=.05)update(.05);renderGame();},snapshot:()=>({mode,world,audio:sfx.snapshot(),feedback:feedback.entries.map(e=>e.element.textContent),encounterIndex,whale:discoveries.whale.visible,renderSize:[look.target.width,look.target.height],run:{...run},position:position.toArray(),camera:camera.position.toArray(),items:items.map(o=>({kind:o.kind,p:o.mesh.position.toArray()})),calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,geometries:renderer.info.memory.geometries}),step:dt=>{update(dt);renderGame();},place:(x,y)=>{position.set(clamp(x,-6.3,6.3),clamp(y,1.6,10),0);velocity.set(0,0,0);},spawn:(kind,x,y,z)=>item(kind,x,y,z),encounter:kind=>encounter(ENCOUNTERS.find(e=>e.kind===kind)||{kind,title:'اختبار',at:0})};
  }
}
try{init();}catch(error){console.error('Ocean initialization failed',error);$('error').hidden=false;$('start').disabled=true;document.documentElement.dataset.engine='error';}
