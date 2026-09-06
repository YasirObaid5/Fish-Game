import * as T from './vendor/three.module.min.js';

// Small living colonies form an understory beneath the large sculpted corals.
// One shared tube per distance tier; animation runs on the GPU, not per polyp.
function tentacle(rings,sides){
  const p=[],n=[],uv=[],indices=[];
  for(let y=0;y<=rings;y++)for(let j=0;j<=sides;j++){
    const t=y/rings,a=j/sides*Math.PI*2,r=(.073*(1-t)+.018+.035*Math.exp(-(((t-.88)/.12)**2)))*(1+.08*Math.sin(t*14));
    p.push(Math.sin(t*2.1)*.16+Math.cos(a)*r,t,Math.cos(t*2.7)*.06+Math.sin(a)*r);
    n.push(Math.cos(a),.06,Math.sin(a));uv.push(j/sides,t);
    if(y<rings&&j<sides){const k=y*(sides+1)+j;indices.push(k,k+sides+1,k+1,k+1,k+sides+1,k+sides+2);}
  }
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('normal',new T.Float32BufferAttribute(n,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();g.computeBoundingSphere();return g;
}
function tissue(time,depth=false){
  const material=depth?new T.MeshDepthMaterial({depthPacking:T.RGBADepthPacking}):new T.MeshStandardMaterial({color:0xffffff,vertexColors:false,roughness:.48,metalness:.03});
  material.customProgramCacheKey=()=>depth?'reef-garden-depth-1':'reef-garden-tissue-1';
  material.onBeforeCompile=shader=>{
    shader.uniforms.gardenTime=time;
    shader.vertexShader='uniform float gardenTime;varying float gardenTip;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
      gardenTip=position.y;
      vec3 anchor=(modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.)).xyz;
      float wave=gardenTime*1.25+anchor.x*.41+anchor.z*.27;
      transformed.x+=sin(wave+position.y*2.4)*position.y*position.y*.16;
      transformed.z+=cos(wave*.83+position.y)*position.y*position.y*.10;`);
    if(!depth){
      shader.fragmentShader='varying float gardenTip;\n'+shader.fragmentShader;
      shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
        float tip=smoothstep(.73,1.,gardenTip);
        diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*.45+vec3(.64,.74,.57),tip*.72);`);
      shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_end>',`#include <lights_fragment_end>
        float softRim=pow(1.-abs(dot(normal,normalize(vViewPosition))),3.);
        reflectedLight.indirectDiffuse+=diffuseColor.rgb*(.10+softRim*.25);`);
    }
  };
  return material;
}
export function createReefGarden({floor,time,coarse=false}){
  const root=new T.Group();root.name='living-polyp-gardens';
  let seed=75621;const random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};
  const placements=[],colors=[0xa04b78,0x53a798,0xd2944c,0x8b739f,0x6b9d65];
  const colonies=coarse?44:78,arms=coarse?12:19;
  const dummy=new T.Object3D();
  for(let c=0;c<colonies;c++){
    const side=c%2?1:-1,x=side*(9+random()*13),z=23-random()*106;
    const radius=.34+random()*.58,base=floor(x,z),height=.34+random()*.45;
    if(base>15.6)continue;
    const color=new T.Color(colors[c%colors.length]);
    for(let a=0;a<arms;a++){
      const angle=a*2.39996,r=radius*Math.sqrt((a+.5)/arms),px=x+Math.cos(angle)*r,pz=z+Math.sin(angle)*r,ground=floor(px,pz);
      if(Math.abs(ground-base)>1.1||ground>15.7)continue;
      dummy.position.set(px,ground+.015,pz);dummy.rotation.set(Math.cos(angle)*.19,angle,Math.sin(angle)*.19);
      const h=Math.min(height*(.65+random()*.55),16.5-ground);
      dummy.scale.set(.8+random()*.4,h,.8+random()*.4);dummy.updateMatrix();placements.push({matrix:dummy.matrix.clone(),color:color.clone().multiplyScalar(.85+random()*.3)});
    }
  }
  const levels=[tentacle(9,5),tentacle(5,4),tentacle(3,3)];levels[0].userData.distanceLevels=levels;
  const mesh=new T.InstancedMesh(levels[0],tissue(time),placements.length);mesh.name='soft-coral-understory';mesh.customDepthMaterial=tissue(time,true);
  placements.forEach((p,i)=>{mesh.setMatrixAt(i,p.matrix);mesh.setColorAt(i,p.color);});
  mesh.castShadow=false;mesh.receiveShadow=true;mesh.computeBoundingSphere();root.add(mesh);
  root.userData.colonies=colonies;root.userData.polyps=placements.length;return root;
}
