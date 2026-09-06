import * as T from './vendor/three.module.min.js';

const vertex = `varying vec2 vUv;
void main(){vUv=position.xy*.5+.5;gl_Position=vec4(position.xy,0.,1.);}`;
const reconstruct = `
uniform sampler2D sceneDepth;
uniform mat4 inverseProjection, cameraWorld;
uniform vec2 resolution;
vec3 viewPoint(vec2 uv){float d=texture2D(sceneDepth,uv).x;vec4 p=inverseProjection*vec4(uv*2.-1.,d*2.-1.,1.);return p.xyz/p.w;}
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
`;

// Contact shadows are reconstructed from the actual opaque scene depth, not
// painted circles under rocks. This pass runs at half resolution on both tiers.
const occlusion = `${reconstruct}
varying vec2 vUv;
void main(){
  float depth=texture2D(sceneDepth,vUv).x;
  if(depth>.99998){gl_FragColor=vec4(1.);return;}
  vec3 p=viewPoint(vUv);vec2 px=1./resolution;
  vec3 l=viewPoint(vUv-vec2(px.x,0.)),r=viewPoint(vUv+vec2(px.x,0.));
  vec3 b=viewPoint(vUv-vec2(0.,px.y)),t=viewPoint(vUv+vec2(0.,px.y));
  vec3 dx=abs(r.z-p.z)<abs(l.z-p.z)?r-p:p-l;
  vec3 dy=abs(t.z-p.z)<abs(b.z-p.z)?t-p:p-b;
  vec3 n=normalize(cross(dx,dy));if(n.z<0.)n=-n;
  float radius=clamp(1.8/max(1.,-p.z),.002,.10),sum=0.;
  float angle=hash(floor(vUv*resolution*.5))*6.283185;
  for(int i=0;i<10;i++){
    float fi=float(i),a=fi*2.39996+angle;
    vec2 offset=vec2(cos(a)*resolution.y/resolution.x,sin(a))*radius*sqrt((fi+.5)/10.);
    vec2 qUv=clamp(vUv+offset,px,1.-px);
    if(texture2D(sceneDepth,qUv).x>.99998)continue;
    vec3 delta=viewPoint(qUv)-p;float dist=length(delta);
    float horizon=max(0.,dot(n,delta/max(.001,dist))-.12);
    sum+=horizon*(1.-smoothstep(.1,2.8,dist));
  }
  float ao=clamp(1.-sum*.34,.38,1.);
  gl_FragColor=vec4(vec3(ao),1.);
}`;

const composite = `${reconstruct}
uniform sampler2D sceneColor, sceneAO;
uniform vec3 eye, sunDirection, waterColor;
uniform float seaLevel, time, exposure, waterLighting;
varying vec2 vUv;
void main(){
  float rawDepth=texture2D(sceneDepth,vUv).x;
  bool background=rawDepth>.99998;
  vec3 view=viewPoint(vUv);
  vec3 ray=normalize((cameraWorld*vec4(normalize(view),0.)).xyz);
  float hitDistance=length(view);
  float underwater=1.-smoothstep(seaLevel-.12,seaLevel+.18,eye.y);

  // Solve the segment inside water BEFORE applying the optical distance cap.
  // A far-plane sample is not a point thousands of metres under the seabed.
  float entry=0.,exitDistance=hitDistance;
  if(eye.y<seaLevel){
    if(ray.y>.00001)exitDistance=min(hitDistance,(seaLevel-eye.y)/ray.y);
  }else{
    if(ray.y<-.00001)entry=min(hitDistance,(seaLevel-eye.y)/ray.y);
    else entry=hitDistance;
  }
  float waterDistance=clamp(exitDistance-entry,0.,320.);
  // In-scattering is dominated by the first optical length of water. Using a
  // far-plane midpoint here produced the previous black stripe at the horizon.
  float sampleDistance=entry+min(waterDistance,70.)*.5;
  float meanDepth=clamp(seaLevel-(eye.y+ray.y*sampleDistance),0.,100.);
  float density=1.+meanDepth*.004;
  // Clear tropical water retains readable pigment at 10–30 m, progressively
  // losing warm wavelengths and contrast beyond the near reef.
  vec3 extinction=vec3(.025,.0125,.0105)*density;
  vec3 transmission=exp(-extinction*waterDistance);
  vec3 color=texture2D(sceneColor,vUv).rgb;
  vec2 px=1./resolution;

  // Edge-aware upsampling prevents a half-resolution contact shadow from
  // staining the sky or bleeding across the outline of a nearer creature.
  float ao=1.;
  if(!background){
    float weight=.45;
    ao=texture2D(sceneAO,vUv).r*weight;
    for(int i=0;i<4;i++){
      float angle=float(i)*1.5707963+.785398;
      vec2 sampleUV=clamp(vUv+vec2(cos(angle),sin(angle))*px*1.5,px,1.-px);
      float neighborDepth=texture2D(sceneDepth,sampleUV).x;
      float proximity=exp(-abs(viewPoint(sampleUV).z-view.z)/max(.18,-view.z*.008));
      float w=.1375*proximity*(1.-step(.99998,neighborDepth));
      ao+=texture2D(sceneAO,sampleUV).r*w;weight+=w;
    }
    ao/=weight;
  }
  color*=mix(1.,ao,.78);

  // Only real HDR highlights bloom. This is not a uniform veil over the reef.
  vec3 glow=vec3(0.);
  for(int i=0;i<4;i++){
    float angle=float(i)*1.5707963;
    vec2 offset=vec2(cos(angle),sin(angle))*px*4.;
    glow+=max(vec3(0.),texture2D(sceneColor,clamp(vUv+offset,px,1.-px)).rgb-2.);
  }
  color+=glow*.022;

  float depthLight=.28+.72*exp(-meanDepth*.025);
  vec3 scatter=mix(vec3(.008,.082,.126),waterColor*.48,.12)*depthLight*waterLighting;
  // A soft directional phase lobe is integrated in front of opaque geometry.
  // There are no screen-facing ray cards or noisy bands painted on the water.
  vec3 waterSun=normalize(vec3(sunDirection.x/1.333,
    sqrt(max(.01,1.-(1.-sunDirection.y*sunDirection.y)/(1.333*1.333))),
    sunDirection.z/1.333));
  float sunFacing=pow(max(0.,dot(ray,waterSun)),14.);
  scatter+=vec3(.023,.066,.069)*sunFacing*exp(-max(0.,seaLevel-eye.y)*.045)*waterLighting;
  color=color*transmission+scatter*(1.-transmission);

  // At an empty underwater horizon, distant water converges to the exact same
  // optical medium as far terrain. No background-specific depth darkening.
  float horizonMix=background?underwater*(1.-exp(-waterDistance*.025)):0.;
  color=mix(color,scatter,horizonMix*.65);

  float vignette=dot(vUv-.5,vUv-.5);
  color*=1.-vignette*.12;
  gl_FragColor=vec4(max(vec3(0.),color),1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

/** Linear-HDR scene -> half-resolution depth AO -> underwater optical resolve. */
export class OceanRenderer {
  constructor(renderer, { coarse = false } = {}) {
    this.renderer=renderer;this.coarse=coarse;this.quality='high';this.width=0;this.height=0;
    this.target=new T.WebGLRenderTarget(1,1,{type:T.HalfFloatType,minFilter:T.LinearFilter,magFilter:T.LinearFilter});
    this.target.depthTexture=new T.DepthTexture(1,1,T.UnsignedIntType);
    this.target.depthTexture.format=T.DepthFormat;
    this.target.samples=Math.min(renderer.capabilities.maxSamples||0,coarse?2:4);
    this.target.resolveDepthBuffer=true;this.target.resolveStencilBuffer=false;
    this.aoTarget=new T.WebGLRenderTarget(1,1,{depthBuffer:false,type:T.UnsignedByteType});
    const shared={sceneDepth:{value:this.target.depthTexture},inverseProjection:{value:new T.Matrix4()},cameraWorld:{value:new T.Matrix4()},resolution:{value:new T.Vector2(1,1)}};
    this.aoMaterial=new T.ShaderMaterial({vertexShader:vertex,fragmentShader:occlusion,uniforms:shared,depthTest:false,depthWrite:false,toneMapped:false});
    this.material=new T.ShaderMaterial({vertexShader:vertex,fragmentShader:composite,depthTest:false,depthWrite:false,uniforms:{...shared,sceneColor:{value:this.target.texture},sceneAO:{value:this.aoTarget.texture},eye:{value:new T.Vector3()},sunDirection:{value:new T.Vector3()},waterColor:{value:new T.Color()},seaLevel:{value:18},waterLighting:{value:1},time:{value:0},exposure:{value:1}}});
    const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute([-1,-1,0,3,-1,0,-1,3,0],3));
    this.quad=new T.Mesh(geometry,this.material);this.quad.frustumCulled=false;
    this.screen=new T.Scene();this.screen.add(this.quad);this.camera=new T.Camera();
    this.stats={calls:0,triangles:0};
  }
  setQuality(quality){
    this.quality=quality;const samples=quality==='high'?Math.min(this.renderer.capabilities.maxSamples||0,this.coarse?2:4):0;
    if(this.target.samples!==samples){this.target.samples=samples;this.target.dispose();}
    this.width=0;
  }
  resize(){
    const size=this.renderer.getDrawingBufferSize(new T.Vector2());
    const scale=this.quality==='high'?1:.85;
    const w=Math.max(1,Math.round(size.x*scale)),h=Math.max(1,Math.round(size.y*scale));
    if(w===this.width&&h===this.height)return;
    this.width=w;this.height=h;this.target.setSize(w,h);this.aoTarget.setSize(Math.max(1,w>>1),Math.max(1,h>>1));
    this.material.uniforms.resolution.value.set(w,h);
  }
  render(scene,camera,sea,time){
    this.resize();camera.updateMatrixWorld();
    const u=this.material.uniforms;u.inverseProjection.value.copy(camera.projectionMatrixInverse);u.cameraWorld.value.copy(camera.matrixWorld);
    u.eye.value.copy(camera.position);u.sunDirection.value.copy(sea.sunDirection);u.waterColor.value.copy(sea.uniforms.water.value);u.time.value=time;u.waterLighting.value=sea.palette.light;
    const r=this.renderer;const oldAuto=r.info.autoReset;r.info.autoReset=false;r.info.reset();
    r.setRenderTarget(this.target);r.render(scene,camera);
    this.stats.calls=r.info.render.calls;this.stats.triangles=r.info.render.triangles;
    this.quad.material=this.aoMaterial;r.setRenderTarget(this.aoTarget);r.render(this.screen,this.camera);
    this.quad.material=this.material;r.setRenderTarget(null);r.render(this.screen,this.camera);
    r.info.autoReset=oldAuto;
  }
  dispose(){this.target.dispose();this.aoTarget.dispose();this.aoMaterial.dispose();this.material.dispose();this.quad.geometry.dispose();}
}
