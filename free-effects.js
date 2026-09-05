import * as T from './vendor/three.module.min.js';

// Fixed-size world-space particles. Trails follow actual movement, including reversals.
export class SwimEffects {
  constructor(scene, reduced=false) {
    this.reduced=reduced; this.particles=[]; this.ripples=[]; this.clock=0;
    const count=reduced?90:280, geometry=new T.BufferGeometry();
    this.positions=new Float32Array(count*3);this.colors=new Float32Array(count*3);this.count=count;
    geometry.setAttribute('position',new T.BufferAttribute(this.positions,3));
    geometry.setAttribute('color',new T.BufferAttribute(this.colors,3));
    const material=new T.PointsMaterial({size:.095,vertexColors:true,transparent:true,opacity:.72,depthWrite:false});
    material.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
      float r=length(gl_PointCoord-vec2(.5)); if(r>.5)discard; diffuseColor.a*=smoothstep(.5,.26,r);`);};
    this.points=new T.Points(geometry,material);this.points.frustumCulled=false;scene.add(this.points);
    this.ringGeo=new T.RingGeometry(.92,1,64);this.ringGeo.rotateX(-Math.PI/2);
    for(let i=0;i<12;i++){
      const m=new T.Mesh(this.ringGeo,new T.MeshBasicMaterial({color:0xb5f2e6,transparent:true,opacity:0,side:T.DoubleSide,depthWrite:false}));
      scene.add(m);this.ripples.push({mesh:m,age:3});
    }
  }
  particle(pos,velocity,color,life=1.4){
    if(this.particles.length>=this.count)this.particles.shift();
    this.particles.push({p:pos.clone(),v:velocity.clone(),c:new T.Color(color),age:0,life});
  }
  splash(pos,strength=1){
    const n=this.reduced?12:40;
    for(let i=0;i<n;i++){
      const a=i/n*Math.PI*2,r=1+Math.random()*2;
      this.particle(pos,new T.Vector3(Math.cos(a)*r,Math.random()*4*strength+1,Math.sin(a)*r),0xd8fcf3,1.3);
    }
    for(let j=0;j<3;j++){
      const ring=this.ripples.reduce((a,b)=>a.age>b.age?a:b);ring.age=-j*.14;ring.mesh.position.copy(pos);ring.mesh.position.y+=.05;
    }
  }
  burst(pos,color=0xffda8d){for(let i=0;i<(this.reduced?7:18);i++)this.particle(pos,new T.Vector3((Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3),color,.9);}
  update(dt,pos,velocity,time,surface,active){
    this.clock-=dt;
    if(active&&velocity.length()>.65&&this.clock<=0&&pos.y<surface){
      this.clock=this.reduced?.1:.035;
      const back=velocity.clone().normalize().multiplyScalar(-1.1);
      this.particle(pos.clone().add(back).add(new T.Vector3((Math.random()-.5)*.35,0,(Math.random()-.5)*.35)),back.multiplyScalar(.15).add(new T.Vector3(0,.55,0)),0x8adfcf,1.5);
    }
    for(let i=this.particles.length-1;i>=0;i--){const p=this.particles[i];p.age+=dt;if(p.age>p.life){this.particles.splice(i,1);continue;}p.p.addScaledVector(p.v,dt);if(p.p.y>surface)p.v.y-=9*dt;else p.v.y+=.25*dt;}
    for(let i=0;i<this.count;i++){
      const p=this.particles[i];this.positions.set(p?p.p.toArray():[0,-10000,0],i*3);
      const c=p?p.c.clone().multiplyScalar(1-p.age/p.life):new T.Color(0);this.colors.set([c.r,c.g,c.b],i*3);
    }
    this.points.geometry.attributes.position.needsUpdate=true;this.points.geometry.attributes.color.needsUpdate=true;
    for(const ring of this.ripples){ring.age+=dt;ring.mesh.visible=ring.age>=0&&ring.age<2;ring.mesh.scale.setScalar(.4+ring.age*3.2);ring.mesh.material.opacity=Math.max(0,(1-ring.age/2)*.36);}
  }
  clear(){this.particles=[];for(const r of this.ripples)r.age=3;}
}
