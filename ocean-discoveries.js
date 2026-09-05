import * as T from './vendor/three.module.min.js';

export const isHazard = kind => ['shark', 'guardian', 'jelly'].includes(kind);
export const SPECIAL_KINDS = ['chest', 'magnet', 'gate', 'frenzy', 'jelly'];
export const ENCOUNTERS = [
  { at: 55, kind: 'magnet', title: 'مغناطيس اللآلئ · اقترب من الرمز الأزرق' },
  { at: 115, kind: 'treasure', title: 'كنز بين الشعاب · مكافأة مخبّأة في الصندوق' },
  { at: 205, kind: 'current', title: 'ممر التيار · اعبر الحلقات لتندفع وتكسب نقاطاً' },
  { at: 295, kind: 'whale', title: 'زائر من الأعماق · انظر إلى الحوت فوق الوادي' },
  { at: 345, kind: 'frenzy', title: 'لؤلؤة الشمس · ثماني ثوانٍ من المكافآت المضاعفة' },
  { at: 500, kind: 'jellies', title: 'رقصة القناديل · الفجوات آمنة، اللوامس ليست كذلك' },
  { at: 595, kind: 'treasure', title: 'صندوق أخير · قد يعيد لك قلباً أو يمنحك ثروة' },
  { at: 670, kind: 'current', title: 'تيار العودة · اتبع الضوء حتى نهاية الرحلة' }
];

export class OceanDiscoveries {
  constructor(scene) {
    this.scene = scene;
    const standard = (color, extra={}) => new T.MeshStandardMaterial({color, roughness:.45,...extra});
    this.materials = {
      wood:standard(0x5f3925,{roughness:.85}), metal:standard(0xce9c45,{metalness:.65,roughness:.28}),
      glow:standard(0xf2c061,{emissive:0xd99129,emissiveIntensity:1.8,metalness:.25}),
      cyan:standard(0x53d6ce,{emissive:0x279dba,emissiveIntensity:1.4,metalness:.25}),
      white:standard(0xdaede0), bell:standard(0xbb86c5,{transparent:true,opacity:.38,side:T.DoubleSide,depthWrite:false}),
      jelly:standard(0xe5add1,{emissive:0xb53b9f,emissiveIntensity:1.5}),
      whale:standard(0x234b60,{roughness:.4}), belly:standard(0x8ba6a9,{roughness:.65}),
      eye:standard(0x071920,{roughness:.12}), halo:new T.MeshBasicMaterial({color:0x90ead7,transparent:true,opacity:.2,depthWrite:false})
    };
    this.geometries = {
      cube:new T.BoxGeometry(1,1,1), ball:new T.SphereGeometry(1,20,14),
      lid:new T.CylinderGeometry(.6,.6,1.75,18,1,false,0,Math.PI),
      magnet:new T.TorusGeometry(.55,.13,8,28,Math.PI*1.5),
      ring:new T.TorusGeometry(2,.055,8,64), sun:new T.OctahedronGeometry(.7),
      bell:new T.SphereGeometry(1,22,14,0,Math.PI*2,0,Math.PI/2)
    };
    const curve=new T.CatmullRomCurve3(Array.from({length:7},(_,i)=>new T.Vector3(Math.sin(i*.8)*.11,-i*.28,Math.cos(i*.7)*.07)));
    this.geometries.tentacle=new T.TubeGeometry(curve,16,.025,5,false);
    const shape=new T.Shape();shape.moveTo(0,0);shape.bezierCurveTo(-.8,.6,-1.2,2,-2.6,2.6);shape.quadraticCurveTo(-1.7,.3,0,0);
    this.geometries.flipper=new T.ShapeGeometry(shape,16);
    this.materials.whale.side=T.DoubleSide;
    this.whale=this.makeWhale();scene.add(this.whale);this.whale.visible=false;this.whaleAge=-1;
  }
  add(group, geo, mat, x=0,y=0,z=0,sx=1,sy=sx,sz=sx) {
    const mesh=new T.Mesh(this.geometries[geo],this.materials[mat]);mesh.position.set(x,y,z);mesh.scale.set(sx,sy,sz);group.add(mesh);return mesh;
  }
  create(kind) {
    const group=new T.Group();group.userData.special=true;
    if(kind==='chest') {
      this.add(group,'cube','wood',0,-.15,0,1.8,.85,1.15);
      const lid=this.add(group,'lid','wood',0,.28,0);lid.rotation.z=Math.PI/2;lid.rotation.x=Math.PI/2;
      for(const x of [-.65,.65])this.add(group,'cube','metal',x,-.08,0,.12,.95,1.22);
      this.add(group,'cube','metal',0,-.1,.62,.27,.3,.07);
      this.add(group,'ball','glow',0,.72,0,.12);
      group.traverse(m=>{if(m.isMesh){m.castShadow=true;m.receiveShadow=true;}});
    } else if(kind==='magnet') {
      const horseshoe=this.add(group,'magnet','cyan');horseshoe.rotation.z=Math.PI*.75;
      for(const x of [-.39,.39])this.add(group,'cube','white',x,.39,0,.22,.2,.26);
    } else if(kind==='frenzy') {
      this.add(group,'sun','glow');
      for(let i=0;i<8;i++) {const a=i*Math.PI/4;this.add(group,'ball','glow',Math.cos(a)*1,Math.sin(a)*1,0,.08);}
    } else if(kind==='gate') {
      this.add(group,'ring','cyan');
      this.add(group,'ring','halo',0,0,-.3,1.08);
      for(let i=0;i<12;i++){const a=i*Math.PI/6;this.add(group,'ball','white',Math.cos(a)*2,Math.sin(a)*2,0,.065);}
    } else if(kind==='jelly') {
      this.add(group,'bell','bell',0,0,0,1,.68,1);
      this.add(group,'ball','jelly',0,.12,0,.37,.2,.37);
      for(let i=0;i<7;i++){
        const a=i*Math.PI*2/7, tentacle=this.add(group,'tentacle','jelly',Math.cos(a)*.65,0,Math.sin(a)*.65);
        tentacle.userData.tentacle=i;
      }
    }
    return group;
  }
  animate(model, kind, time) {
    if(kind==='jelly') {
      const pulse=1+Math.sin(time*2.2)*.075;model.scale.set(pulse,1/pulse,pulse);
      model.children.forEach(part=>{if(part.userData.tentacle!==undefined)part.rotation.z=Math.sin(time*2+part.userData.tentacle)*.12;});
    } else if(kind==='gate') model.rotation.z=Math.sin(time*.6)*.06;
    else {model.rotation.y=Math.sin(time*.8)*.28;model.rotation.z=Math.sin(time)*.06;}
  }
  makeWhale() {
    const group=new T.Group();
    this.add(group,'ball','whale',0,0,0,5.5,1.15,1.4);
    this.add(group,'ball','belly',.25,-.55,0,4.6,.62,1.13);
    this.add(group,'ball','whale',-4.9,0,0,1.8,.36,.42);
    const tail=new T.Group();tail.position.x=-6;group.add(tail);
    for(const side of [-1,1]) {
      const fluke=this.add(tail,'flipper','whale',0,0,0,.9);fluke.rotation.x=side*Math.PI/2;
      const fin=this.add(group,'flipper','whale',1,-.45,side*1);fin.rotation.x=side*(Math.PI/2+.5);fin.scale.set(.9,1,1);
      this.add(group,'ball','eye',3.7,.15,side*.95,.14);
    }
    group.traverse(m=>{if(m.isMesh){m.castShadow=true;m.receiveShadow=true;}});
    this.add(group,'flipper','whale',-1,1,0,.35,.4,.35);
    group.userData.tail=tail;
    return group;
  }
  sighting() { this.whaleAge=0;this.whale.visible=true; }
  reset() { this.whaleAge=-1;this.whale.visible=false; }
  update(dt, time, active) {
    if(this.whaleAge<0||!active)return;
    this.whaleAge+=dt;
    this.whale.position.set(31-this.whaleAge*5,10.6+Math.sin(time*.7)*.4,-35-this.whaleAge*.35);
    this.whale.rotation.y=Math.PI;this.whale.rotation.z=Math.sin(time*.5)*.025;
    this.whale.userData.tail.rotation.x=Math.sin(time*1.8)*.18;
    if(this.whaleAge>14)this.reset();
  }
}
