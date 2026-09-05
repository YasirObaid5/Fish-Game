import * as T from './vendor/three.module.min.js';

// Caustics modulate direct illumination, so they respect real cast shadows.
export function aquaticMaterial(material, uniforms, { sand = false, skin = false, sway = false, rock = false } = {}) {
  material.customProgramCacheKey = () => 'aquatic-v2-' + [sand, skin, sway, rock].join('-');
  material.onBeforeCompile = shader => {
    shader.uniforms.uWaterTime = uniforms.time;
    shader.uniforms.uWaterFlow = uniforms.flow;
    const prefix = 'varying vec3 vWaterWorld; uniform float uWaterTime; uniform float uWaterFlow;\n';
    shader.vertexShader = prefix + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `
      #include <begin_vertex>
      ${skin ? 'transformed.z += sin(uWaterTime*9. + position.x*2.8 + modelMatrix[3].z)*pow(clamp((1.2-position.x)/2.6,0.,1.),2.)*.10;' : ''}
      ${sway ? 'transformed.x += sin(uWaterTime*1.3+position.y*.7+modelMatrix[3].z*.15)*max(0.,position.y)*.025;' : ''}
    `);
    shader.vertexShader = shader.vertexShader.replace('#include <worldpos_vertex>', `
      #include <worldpos_vertex>
      vec4 waterWorld = vec4(transformed,1.);
      #ifdef USE_INSTANCING
        waterWorld = instanceMatrix * waterWorld;
      #endif
      vWaterWorld = (modelMatrix * waterWorld).xyz;
    `);
    shader.fragmentShader = prefix + shader.fragmentShader;
    if (sand) shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', `
      #include <color_fragment>
      vec2 bed = vec2(vWaterWorld.x, vWaterWorld.z-uWaterFlow);
      float ripples = sin(bed.y*8. + sin(bed.x*.8)*1.4 + sin(bed.y*.6));
      float grit = fract(sin(dot(floor(bed*75.),vec2(127.1,311.7)))*43758.5453);
      diffuseColor.rgb *= .89 + .065*ripples + grit*.045;
    `);
    if (rock) shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', `
      #include <color_fragment>
      float stratum = sin(vWaterWorld.y*7.+sin(vWaterWorld.x*3.)+sin(vWaterWorld.z*2.));
      float grain = fract(sin(dot(floor(vWaterWorld*22.),vec3(127.1,311.7,74.7)))*43758.5453);
      diffuseColor.rgb *= .86 + stratum*.065 + grain*.09;
    `);
    shader.fragmentShader = shader.fragmentShader.replace('#include <lights_fragment_end>', `
      #include <lights_fragment_end>
      vec2 waterUV = vWaterWorld.xz*.72;
      waterUV.y -= uWaterFlow*.72;
      waterUV += vec2(sin(waterUV.y*.67+uWaterTime*.52),cos(waterUV.x*.81-uWaterTime*.43))*.65;
      float waveA = sin(waterUV.x*2.1+sin(waterUV.y*1.8+uWaterTime*.4));
      float waveB = sin(waterUV.y*2.3+cos(waterUV.x*1.6-uWaterTime*.35));
      float caustic = pow(1.-min(1.,abs(waveA+waveB)*.65),12.);
      float causticDepth = .4 + .6*smoothstep(-2.,14.,vWaterWorld.y);
      reflectedLight.directDiffuse *= 1. + caustic*causticDepth*1.25;
    `);
  };
  return material;
}

export function waterSurface(uniforms) {
  const geometry = new T.PlaneGeometry(180, 220, 70, 70);
  geometry.rotateX(-Math.PI / 2);
  const material = new T.ShaderMaterial({
    transparent: true, depthWrite: false, side: T.DoubleSide,
    uniforms: { time: uniforms.time, waterColor: { value: new T.Color(0x9febe2) } },
    vertexShader: `uniform float time; varying vec3 vPos; varying float vDepth;
      void main(){vec3 p=position;
        p.y+=sin(p.x*.24+p.z*.19+time*.8)*.22+sin(p.x*.56-p.z*.31-time*.6)*.09;
        vPos=(modelMatrix*vec4(p,1.)).xyz;vec4 mv=modelViewMatrix*vec4(p,1.);vDepth=-mv.z;
        gl_Position=projectionMatrix*mv;}`,
    fragmentShader: `uniform float time; uniform vec3 waterColor; varying vec3 vPos; varying float vDepth;
      void main(){
        vec3 n=normalize(cross(dFdx(vPos),dFdy(vPos)));
        vec3 eye=normalize(cameraPosition-vPos);
        float fresnel=pow(1.-abs(dot(n,eye)),2.);
        vec2 p=vPos.xz*.75;float w=sin(p.x+sin(p.y+time*.4))*sin(p.y*1.2+cos(p.x-time*.6));
        float shimmer=pow(1.-abs(w),18.);
        float sunGlow=exp(-length(vPos.xz-vec2(-18.,-25.))*.085);
        vec3 c=mix(waterColor*.18,waterColor*.65,fresnel)+shimmer*.055+waterColor*sunGlow*.4;
        gl_FragColor=vec4(c,(.13+fresnel*.3+shimmer*.07)*(1.-smoothstep(38.,105.,vDepth)));
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`
  });
  const surface = new T.Mesh(geometry, material);
  surface.position.set(0, 14, -70);
  return surface;
}

export function lightShafts(scene, uniforms) {
  const material = new T.ShaderMaterial({
    uniforms: { time: uniforms.time, tint: { value: new T.Color(0xb7e9dc) }, strength: { value: 1 } },
    transparent: true, depthWrite: false, side: T.DoubleSide, blending: T.AdditiveBlending,
    vertexShader: `varying vec2 vUv; varying float vDepth; void main(){vUv=uv;vec4 p=modelViewMatrix*vec4(position,1.);vDepth=-p.z;gl_Position=projectionMatrix*p;}`,
    fragmentShader: `varying vec2 vUv; varying float vDepth; uniform float time; uniform vec3 tint; uniform float strength;
      void main(){
        float edge=pow(sin(vUv.x*3.14159),3.);
        float ends=smoothstep(0.,.25,vUv.y)*(1.-smoothstep(.5,1.,vUv.y));
        float motion=.75+.25*sin(vUv.y*12.+time*.7+sin(vUv.x*13.));
        float a=edge*ends*motion*.07*strength*exp(-max(0.,vDepth)*.015);
        gl_FragColor=vec4(tint,a);
      }`
  });
  const geometry = new T.PlaneGeometry(5, 24, 1, 1), rays = [];
  for (let i = 0; i < 14; i++) {
    const ray = new T.Mesh(geometry, material);
    ray.position.set(-25 + (i % 7) * 8, 5, -6 - Math.floor(i / 7) * 38 - (i % 3) * 9);
    ray.rotation.z = -.38; ray.rotation.y = .15;
    scene.add(ray); rays.push(ray);
  }
  return { material, update(t) { rays.forEach((ray, i) => { ray.rotation.z = -.38 + Math.sin(t*.22+i)*.015; }); } };
}

// One full-screen pass: depth-dependent absorption, restrained bloom and refraction.
export class UnderwaterView {
  constructor(renderer, scene, camera, uniforms, reduced, coarse) {
    this.renderer = renderer; this.scene = scene; this.camera = camera;
    this.size = new T.Vector2();
    this.target = new T.WebGLRenderTarget(1, 1, {
      type: renderer.extensions.has('EXT_color_buffer_float') ? T.HalfFloatType : T.UnsignedByteType,
      depthTexture: new T.DepthTexture(1, 1), samples: Math.min(2, renderer.capabilities.maxSamples)
    });
    this.uniforms = {
      sceneColor: { value: this.target.texture }, sceneDepth: { value: this.target.depthTexture },
      time: uniforms.time, texel: { value: new T.Vector2(1,1) }, motion: { value: reduced ? 0 : 1 },
      speed: { value: 0 }, rush: { value: 0 }, hurt: { value: 0 },
      near: { value: camera.near }, far: { value: camera.far }, waterTint: { value: new T.Color(0x1e6575) }
    };
    const material = new T.ShaderMaterial({
      uniforms: this.uniforms, depthTest: false, depthWrite: false,
      vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
      fragmentShader: `varying vec2 vUv; uniform sampler2D sceneColor; uniform sampler2D sceneDepth;
        uniform vec2 texel; uniform float time, motion, speed, rush, hurt, near, far; uniform vec3 waterTint;
        vec3 bright(vec2 uv){vec3 c=texture2D(sceneColor,clamp(uv,vec2(.001),vec2(.999))).rgb;return max(vec3(0.),c-vec3(1.15));}
        void main(){
          vec2 wave=vec2(sin(vUv.y*21.+time*1.2),cos(vUv.x*19.-time*.9));
          float edge=smoothstep(0.,.15,min(min(vUv.x,1.-vUv.x),min(vUv.y,1.-vUv.y)));
          vec2 uv=clamp(vUv+wave*(.00055+speed*.0005)*edge*motion,vec2(.001),vec2(.999));
          vec3 c=texture2D(sceneColor,uv).rgb;
          float raw=texture2D(sceneDepth,uv).r;
          float depth=near*far/(far-raw*(far-near));
          float distanceFade=clamp((depth-10.)/100.,0.,1.);
          c*=exp(-vec3(.36,.065,.018)*distanceFade);
          c=mix(c,waterTint*.65,distanceFade*.055);
          vec2 spread=texel*3.;
          vec3 glow=(bright(uv+vec2(spread.x,0.))+bright(uv-vec2(spread.x,0.))+bright(uv+vec2(0.,spread.y))+bright(uv-vec2(0.,spread.y)))*.25;
          c+=glow*.11;
          float vignette=smoothstep(.3,.8,length((vUv-.5)*vec2(1.,.83)));
          c*=1.-vignette*.18;
          c+=vec3(.16,.07,.005)*rush*vignette;
          c=mix(c,vec3(.55,.07,.025),hurt*vignette*.3);
          gl_FragColor=vec4(c,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`
    });
    this.screen = new T.Scene(); this.screen.add(new T.Mesh(new T.PlaneGeometry(2,2), material));
    this.screenCamera = new T.Camera();
    renderer.info.autoReset = false;
  }
  render() {
    const renderer = this.renderer;
    renderer.getDrawingBufferSize(this.size);
    if (this.target.width !== this.size.x || this.target.height !== this.size.y) {
      this.target.setSize(this.size.x, this.size.y);
      this.uniforms.texel.value.set(1/this.size.x, 1/this.size.y);
    }
    renderer.info.reset(); renderer.setRenderTarget(this.target); renderer.render(this.scene, this.camera);
    renderer.setRenderTarget(null); renderer.render(this.screen, this.screenCamera);
  }
}

export class WaterTrails {
  constructor(scene) {
    this.history = [];
    this.meshes = [-1, 1].map(side => {
      const geometry = new T.BufferGeometry(), data = new Float32Array(24*2*3), indices = [];
      for (let i=0;i<23;i++) { const n=i*2; indices.push(n,n+1,n+2,n+1,n+3,n+2); }
      geometry.setAttribute('position', new T.BufferAttribute(data,3)); geometry.setIndex(indices);
      const uv=[];for(let i=0;i<24;i++)uv.push(0,i/23,1,i/23);
      geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));
      const material = new T.ShaderMaterial({
        transparent:true,depthWrite:false,side:T.DoubleSide,blending:T.AdditiveBlending,
        vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
        fragmentShader:'varying vec2 vUv;void main(){float a=sin(vUv.x*3.14159)*pow(1.-vUv.y,2.)*.22;gl_FragColor=vec4(.55,.85,.82,a);}'
      });
      const mesh=new T.Mesh(geometry,material);mesh.frustumCulled=false;scene.add(mesh);
      return {mesh,data,side};
    });
    this.clock=0;
  }
  reset() { this.history=[]; this.meshes.forEach(({mesh})=>mesh.visible=false); }
  update(dt, pos, travel, time, active, reduced) {
    this.meshes.forEach(({mesh})=>mesh.visible=active&&!reduced&&this.history.length>1);
    if(!active||reduced)return;
    for(const p of this.history){p.z+=travel*.84;p.y+=dt*.12;}
    this.clock-=dt;
    if(this.clock<=0){this.history.unshift(pos.clone().add(new T.Vector3(0,0,1.)));this.history.length=Math.min(24,this.history.length);this.clock=.035;}
    for(const {mesh,data,side} of this.meshes){
      for(let i=0;i<24;i++){
        const p=this.history[Math.min(i,this.history.length-1)];if(!p)continue;
        const x=p.x+side*(.34+i*.018)+Math.sin(time*4-i*.5)*i*.003;
        const width=.035+i*.003;
        data.set([x-width,p.y,p.z,x+width,p.y+.014,p.z],i*6);
      }
      mesh.geometry.attributes.position.needsUpdate=true;
    }
  }
}
