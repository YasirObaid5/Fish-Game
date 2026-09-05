import * as T from './vendor/three.module.min.js';

// All animals face local -Z. Their parent owns heading, translation and banking.
// Geometry is shared by species; animation/material instances belong to each animal.
const templates = new Map();
const TAU = Math.PI * 2;
const HERO_PROFILE = [
  [-1.02,.009,.021,-.035],[-.88,.10,.14,-.015],[-.60,.224,.375,.012],
  [-.17,.286,.505,.02],[.29,.243,.43,.005],[.64,.134,.247,0],[.88,.055,.088,0]
];
const SHARK_PROFILE = [
  [-1.85,.007,.012,-.015],[-1.57,.184,.16,.025],[-1.03,.334,.337,.046],
  [-.27,.386,.414,.05],[.43,.267,.29,.035],[1.03,.105,.135,.025],[1.37,.045,.073,.025]
];
const makeBuilder = () => ({ position: [], uv: [], finFlex: [], index: [] });

function section(profile, z) {
  let i = 0;
  while (i < profile.length - 2 && z > profile[i + 1][0]) i++;
  const a = profile[i], b = profile[i + 1];
  const t = T.MathUtils.clamp((z - a[0]) / (b[0] - a[0]), 0, 1);
  // Cubic interpolation keeps the silhouette smooth without a spherical/toy shape.
  const before = profile[Math.max(0, i - 1)], after = profile[Math.min(profile.length - 1, i + 2)];
  return [1,2,3].map(k => {
    const m0 = (b[k] - before[k]) / (b[0] - before[0]);
    const m1 = (after[k] - a[k]) / (after[0] - a[0]);
    return (2*t*t*t-3*t*t+1)*a[k] + (t*t*t-2*t*t+t)*m0*(b[0]-a[0])
      + (-2*t*t*t+3*t*t)*b[k] + (t*t*t-t*t)*m1*(b[0]-a[0]);
  });
}

function finish(builder) {
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(builder.position, 3));
  geometry.setAttribute('uv', new T.Float32BufferAttribute(builder.uv, 2));
  geometry.setAttribute('finFlex', new T.Float32BufferAttribute(builder.finFlex, 1));
  geometry.setIndex(builder.index); geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  geometry.boundingSphere.radius += 1.1; // Animated fins/tails stay inside the culling volume.
  return geometry;
}

function append(builder, geometry, matrix = new T.Matrix4(), flex = 0) {
  const copy = geometry.clone().applyMatrix4(matrix), offset = builder.position.length / 3;
  const p = copy.attributes.position, uv = copy.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    builder.position.push(p.getX(i), p.getY(i), p.getZ(i));
    builder.uv.push(uv?.getX(i) || 0, uv?.getY(i) || 0); builder.finFlex.push(flex);
  }
  if (copy.index) for (const i of copy.index.array) builder.index.push(offset + i);
  else for (let i = 0; i < p.count; i++) builder.index.push(offset + i);
  copy.dispose(); geometry.dispose();
}

function ellipsoid(builder, center, scale, segments = 20, flex = 0) {
  const matrix = new T.Matrix4().compose(new T.Vector3(...center), new T.Quaternion(), new T.Vector3(...scale));
  append(builder, new T.SphereGeometry(1, segments, Math.max(8, Math.round(segments*.65))), matrix, flex);
}

function body(profile, rings, sides) {
  const b = makeBuilder(), start = profile[0][0], end = profile.at(-1)[0];
  for (let ring = 0; ring <= rings; ring++) {
    const v = ring / rings, z = T.MathUtils.lerp(start, end, v), [width, height, center] = section(profile, z);
    for (let side = 0; side <= sides; side++) {
      const u = side / sides, a = u*TAU;
      b.position.push(Math.cos(a)*Math.max(.003,width), center+Math.sin(a)*Math.max(.004,height), z);
      b.uv.push(u,v); b.finFlex.push(0);
      if (ring < rings && side < sides) {
        const i = ring*(sides+1)+side;
        b.index.push(i,i+1,i+sides+1,i+1,i+sides+2,i+sides+1);
      }
    }
  }
  for (const endCap of [0,1]) {
    const z=endCap?end:start, cy=section(profile,z)[2], center=b.position.length/3;
    b.position.push(0,cy,z); b.uv.push(.5,endCap); b.finFlex.push(0);
    for (let side=0;side<sides;side++) {
      const i=(endCap?rings:0)*(sides+1)+side;
      if (endCap) b.index.push(center,i,i+1); else b.index.push(center,i+1,i);
    }
  }
  return b;
}

function curve(points) { return new T.CatmullRomCurve3(points.map(p => new T.Vector3(...p)), false, 'centripetal'); }

// A curved, finely subdivided membrane. UVs follow its real fin rays.
function membrane(builder, rootPoints, edgePoints, { rays = 26, spans = 5, flex = 0, camber = .016, flip = false } = {}) {
  const root = curve(rootPoints), edge = curve(edgePoints), offset = builder.position.length/3;
  for (let ray = 0; ray <= rays; ray++) {
    const u = ray/rays, a = root.getPoint(u), b = edge.getPoint(u);
    for (let span = 0; span <= spans; span++) {
      const v = span/spans, p = a.clone().lerp(b,v);
      p.x += Math.sin(v*Math.PI)*Math.sin(u*Math.PI)*camber;
      builder.position.push(p.x,p.y,p.z); builder.uv.push(u,v); builder.finFlex.push(flex);
      if (ray < rays && span < spans) {
        const i = offset+ray*(spans+1)+span;
        if (flip) builder.index.push(i,i+1,i+spans+1,i+1,i+spans+2,i+spans+1);
        else builder.index.push(i,i+spans+1,i+1,i+1,i+spans+1,i+spans+2);
      }
    }
  }
}

function seam(builder, points, radius = .006, segments = 20) {
  append(builder, new T.TubeGeometry(curve(points),segments,radius,4,false));
}

function fishTemplate(kind) {
  const shark = kind === 'predator', small = kind === 'school', profile = shark ? SHARK_PROFILE : HERO_PROFILE;
  const flesh = body(profile, small?18:42, small?16:42), fins = makeBuilder(), iris = makeBuilder(), eyes = makeBuilder(), highlights = makeBuilder(), detail = makeBuilder();
  const count = small ? 9 : 25, spans = small ? 2 : 5;
  if (shark) {
    membrane(fins, [[0,.31,-.61],[0,.45,-.15],[0,.28,.48]], [[0,.36,-.61],[0,1.03,-.18],[0,.28,.48]], {rays:24,spans:4});
    membrane(fins, [[0,.19,.65],[0,.14,.98],[0,.1,1.15]], [[0,.2,.65],[0,.41,.93],[0,.1,1.15]], {rays:12,spans:3});
    membrane(fins, [[0,.09,1.32],[0,.025,1.37],[0,-.05,1.32]], [[0,1.03,2.04],[0,.025,1.64],[0,-.65,1.99]], {rays:28,spans:5});
    for (const side of [-1,1]) {
      membrane(fins, [[side*.27,-.09,-.77],[side*.32,-.13,-.41],[side*.29,-.17,-.10]],
        [[side*.28,-.10,-.77],[side*1.17,-.29,.16],[side*.43,-.23,.56]], {rays:20,spans:4,flex:side*.35});
      membrane(fins, [[side*.15,-.18,.48],[side*.16,-.18,.67]], [[side*.49,-.30,.96],[side*.17,-.20,.93]], {rays:10,spans:3,flex:side*.3});
    }
  } else {
    membrane(fins, [[0,.31,-.69],[0,.507,-.13],[0,.31,.53],[0,.09,.87]],
      [[0,.32,-.69],[0,.79,-.23],[0,.67,.48],[0,.10,.90]], {rays:count,spans});
    membrane(fins, [[0,-.43,-.31],[0,-.42,.26],[0,-.12,.81]],
      [[0,-.45,-.31],[0,-.69,.22],[0,-.14,.86]], {rays:count,spans});
    membrane(fins, [[0,.067,.86],[0,0,.895],[0,-.067,.86]],
      [[0,.56,1.48],[0,.29,1.38],[0,0,1.16],[0,-.29,1.38],[0,-.56,1.48]], {rays:count,spans});
    for (const side of [-1,1]) {
      membrane(fins, [[side*.235,.025,-.45],[side*.235,-.015,-.39],[side*.225,-.06,-.33]],
        [[side*.25,.04,-.46],[side*.67,-.11,.12],[side*.50,-.25,.31]], {rays:small?6:16,spans:small?2:4,flex:side});
      if (!small) membrane(fins, [[side*.12,-.38,-.31],[side*.12,-.42,-.12]],
        [[side*.31,-.61,.24],[side*.12,-.54,.39]], {rays:10,spans:3,flex:side*.5});
    }
  }
  for (const side of [-1,1]) {
    const z = shark?-1.44:-.745, y = shark?.074:.095, x = shark?.224:.168;
    if (!small) ellipsoid(iris,[side*x,y,z],[.025,shark?.043:.050,shark?.041:.047],16);
    ellipsoid(eyes,[side*(x+.020),y,z-.004],[.018,shark?.032:.034,shark?.030:.032],small?10:16);
    if (!small) ellipsoid(highlights,[side*(x+.035),y+.012,z-.016],[.005,.008,.007],10);
    if (!small) {
      const slits = shark?5:1;
      for (let i = 0; i < slits; i++) {
        const pts = [];
        for (let k = 0; k < 9; k++) {
          const t=k/8, zz=(shark?-.93+i*.072:-.49)+Math.sin(t*Math.PI)*.08;
          const [rx,ry,cy] = section(profile,zz), yy=T.MathUtils.lerp(.22,-.20,t);
          pts.push([side*(rx*Math.sqrt(Math.max(.05,1-((yy-cy)/ry)**2))+.003),yy,zz]);
        }
        seam(detail,pts,shark?.007:.006,12);
      }
    }
  }
  if (!small) {
    if (shark) seam(detail,[[-.13,-.12,-1.62],[-.08,-.164,-1.54],[0,-.177,-1.49],[.08,-.164,-1.54],[.13,-.12,-1.62]],.0065,18);
    else seam(detail,[[-.043,-.039,-.999],[0,-.054,-1.02],[.043,-.039,-.999]],.005,14);
  }
  return {
    body: finish(flesh), fins: finish(fins), eyes: finish(eyes),
    ...(!small ? {iris:finish(iris), highlights:finish(highlights), detail:finish(detail)} : {}),
    length: shark?3.99:2.5
  };
}

function turtleTemplate() {
  const body = makeBuilder(), fins = makeBuilder(), eyes = makeBuilder();
  ellipsoid(body,[0,.075,0],[.64,.28,.80],40);
  ellipsoid(body,[0,-.025,-.65],[.18,.135,.37],20);
  ellipsoid(body,[0,.025,-.98],[.183,.142,.275],24);
  ellipsoid(body,[0,-.055,.79],[.055,.04,.25],14);
  for (const side of [-1,1]) {
    membrane(fins, [[side*.42,-.01,-.52],[side*.48,-.025,-.20]],
      [[side*.59,-.04,-.65],[side*1.31,-.13,-.18],[side*1.12,-.15,.02],[side*.57,-.06,.10]], {rays:30,spans:6,flex:side,flip:side<0});
    membrane(fins, [[side*.38,-.035,.45],[side*.26,-.035,.67]],
      [[side*.79,-.065,.68],[side*.58,-.08,.97],[side*.3,-.05,.84]], {rays:16,spans:4,flex:side*.5,flip:side<0});
    ellipsoid(eyes,[side*.161,.061,-1.06],[.014,.030,.032],14);
  }
  return {body:finish(body), fins:finish(fins), eyes:finish(eyes), length:2.05};
}

function mantaTemplate() {
  const body = makeBuilder(), eyes = makeBuilder();
  ellipsoid(body,[0,0,-.10],[.65,.175,.98],32);
  for (const side of [-1,1]) {
    membrane(body, [[side*.39,.008,-.8],[side*.52,.0,-.18],[side*.39,-.02,.62]],
      [[side*.50,-.025,-1.04],[side*1.25,-.03,-.66],[side*2.34,-.045,.35],[side*1.11,-.06,.80],[side*.44,-.015,.72]],
      {rays:40,spans:9,flex:side,camber:.022,flip:side<0});
    seam(body,[[side*.20,-.07,-.80],[side*.23,-.10,-1.09],[side*.30,-.09,-1.27],[side*.38,-.06,-1.17]],.050,20);
    ellipsoid(eyes,[side*.40,.05,-.86],[.040,.029,.032],14);
  }
  seam(body,[[0,-.015,.66],[0,-.02,1.23],[0,-.035,1.89],[0,-.065,2.63]],.017,36);
  return {body:finish(body), eyes:finish(eyes), length:3.9};
}

const movementGLSL = `
  uniform float uMarineTime, uMarineSpeed, uMarinePhase;
  attribute float finFlex;
  float marineWave(float z) {
    float rear = smoothstep(-.62,1.65,z);
    return sin(uMarineTime*5.4-z*3.25+uMarinePhase)*rear*rear*(.055+uMarineSpeed*.055);
  }
`;

function animateMaterial(material, uniforms, kind, appearance = '') {
  const manta = kind==='manta', turtle = kind==='turtle';
  material.customProgramCacheKey = () => 'marine-v1-'+kind+'-'+appearance;
  material.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = movementGLSL + '\nvarying vec3 vMarinePosition,vMarineNormal; varying vec2 vMarineUv;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\n vMarineNormal = objectNormal;');
    const deformation = manta
      ? 'transformed.y += sin(uMarineTime*1.75-abs(position.x)*.62+uMarinePhase)*pow(abs(position.x),1.35)*.22; transformed.x += marineWave(position.z)*smoothstep(.9,2.6,position.z);'
      : turtle
        ? 'transformed.y += sin(uMarineTime*2.0+uMarinePhase)*abs(finFlex)*pow(abs(position.x),1.2)*.18;'
        : 'transformed.x += marineWave(position.z); transformed.y += sin(uMarineTime*4.7+uMarinePhase+position.z)*abs(finFlex)*max(0.,abs(position.x)-.20)*.30;';
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `
      #include <begin_vertex>
      vMarinePosition = position; vMarineUv = uv;
      ${deformation}
    `);
    if (!manta && !turtle) shader.vertexShader = shader.vertexShader.replace('#include <beginnormal_vertex>', `
      #include <beginnormal_vertex>
      objectNormal.z -= objectNormal.x*(marineWave(position.z+.008)-marineWave(position.z-.008))/.016;
    `);
    if (!appearance) return; // Depth shadow pass uses exactly the same deformation.
    shader.fragmentShader = 'varying vec3 vMarinePosition,vMarineNormal; varying vec2 vMarineUv; uniform vec3 uMarineBack,uMarineSide,uMarineBelly;\n' + shader.fragmentShader;
    let surface;
    if (appearance === 'fins' && kind === 'predator') {
      surface = `
        vec3 p = vMarinePosition;
        vec3 finColor = mix(uMarineBelly,uMarineSide,smoothstep(-.36,.08,p.y));
        finColor = mix(finColor,uMarineBack,smoothstep(.48,1.0,p.y)*.5);
        diffuseColor.rgb *= finColor;
      `;
    } else if (appearance === 'fins' && !turtle && !manta) {
      surface = `
        float ray = pow(.5+.5*cos(vMarineUv.x*${kind==='predator'?'26.':'40.'}*6.283185),15.);
        float border = smoothstep(.87,.99,vMarineUv.y);
        vec3 finColor = mix(uMarineSide*.79,uMarineBelly*.93,border*.78);
        diffuseColor.rgb *= finColor*(.81+ray*.22);
        ${kind==='predator'?'':'diffuseColor.a *= .64+.32*ray+.22*border;'}
      `;
    } else if (turtle) {
      surface = `
        vec3 p = vMarinePosition;
        vec3 c = mix(uMarineBelly,uMarineSide,smoothstep(-.09,.035,p.y));
        float shell = (1.-smoothstep(.71,.88,abs(p.z)))*smoothstep(.0,.10,p.y);
        vec2 q = p.xz*vec2(4.6,3.9); q.x += mod(floor(q.y),2.)*.5;
        vec2 cell = abs(fract(q)-.5);
        float rim = smoothstep(.34,.47,max(cell.x*.88+cell.y*.5,cell.y));
        float mottling = .5+.5*sin(p.x*57.+sin(p.z*34.))*sin(p.z*61.);
        vec3 scute = mix(uMarineBack,uMarineSide,.24+mottling*.16);
        scute = mix(scute,uMarineBelly*.46,rim*.28);
        c = mix(c,scute,shell);
        ${appearance==='fins' ? 'c = mix(uMarineBelly,uMarineSide,smoothstep(-.2,.2,vMarineNormal.y*(gl_FrontFacing?1.:-1.)))*(.9+mottling*.1);' : ''}
        diffuseColor.rgb *= c*(.94+mottling*.07);
      `;
    } else if (manta) {
      surface = `
        vec3 p = vMarinePosition;
        float dorsal = smoothstep(-.2,.2,vMarineNormal.y*(gl_FrontFacing?1.:-1.));
        vec3 c = mix(uMarineBelly,uMarineBack,dorsal);
        float shoulder = exp(-pow((abs(p.x)-(.26+max(0.,p.z+.75)*.48))/.10,2.));
        shoulder *= smoothstep(-.94,-.45,p.z)*(1.-smoothstep(.12,.43,p.z));
        c = mix(c,uMarineSide,shoulder*.72*dorsal);
        diffuseColor.rgb *= c;
      `;
    } else {
      surface = `
        vec3 p = vMarinePosition;
        vec3 c = mix(uMarineBelly,uMarineSide,smoothstep(-.30,.02,p.y));
        c = mix(c,uMarineBack,smoothstep(.14,.41,p.y));
        ${kind==='predator' ? `
          float grain = fract(sin(dot(floor(p.xz*270.+p.y*11.),vec2(127.1,311.7)))*43758.5453);
          c *= .96+grain*.055;
        ` : `
          vec2 grid = vec2(vMarineUv.y*37.,vMarineUv.x*29.);
          grid.x += mod(floor(grid.y),2.)*.5;
          vec2 cell = fract(grid)-.5;
          float arc = 1.-smoothstep(.016,.055,abs(length(vec2(cell.x*.93,cell.y+.21))-.43));
          float scales = smoothstep(-.77,-.45,p.z)*(1.-smoothstep(.69,.91,p.z));
          c *= 1.-arc*scales*.075;
          float stripe = exp(-pow((p.y-(.105+.035*sin(p.z*3.6)))/.024,2.));
          stripe *= smoothstep(-.70,-.39,p.z)*(1.-smoothstep(.68,.88,p.z));
          c = mix(c,uMarineBelly*1.07,stripe*.78);
          c += uMarineSide*arc*scales*.035;
        `}
        diffuseColor.rgb *= c;
      `;
    }
    shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\n'+surface);
  };
  return material;
}

function materialsFor(kind, uniforms) {
  const hero = kind==='hero', shark = kind==='predator', translucent = hero || kind==='school';
  const flesh = hero
    ? new T.MeshPhysicalMaterial({color:0xffffff,roughness:.43,metalness:.12,clearcoat:.38,clearcoatRoughness:.31,iridescence:.20,iridescenceIOR:1.33,iridescenceThicknessRange:[95,220]})
    : new T.MeshStandardMaterial({color:0xffffff,roughness:shark?.48:.54,metalness:.075,side:kind==='manta'?T.DoubleSide:T.FrontSide});
  const fins = new T.MeshStandardMaterial({color:0xffffff,roughness:.45,metalness:.065,side:T.DoubleSide,transparent:translucent,opacity:translucent?.91:1,depthWrite:!translucent});
  fins.forceSinglePass = true;
  const iris = new T.MeshStandardMaterial({color:shark?0x8d8b79:0xc6a465,roughness:.36,metalness:.14});
  const eyes = new T.MeshPhysicalMaterial({color:0x040f12,roughness:.09,metalness:.03,clearcoat:1,clearcoatRoughness:.06});
  const highlights = new T.MeshStandardMaterial({color:0xe4f6e9,roughness:.1});
  const detail = new T.MeshStandardMaterial({color:shark?0x3b5154:0x28665d,roughness:.7});
  return {
    body:animateMaterial(flesh,uniforms,kind,'body'), fins:animateMaterial(fins,uniforms,kind,'fins'),
    iris:animateMaterial(iris,uniforms,kind), eyes:animateMaterial(eyes,uniforms,kind),
    highlights:animateMaterial(highlights,uniforms,kind), detail:animateMaterial(detail,uniforms,kind)
  };
}

/** Create a locally authored animal. options: scale (number), color (hex/CSS lateral tint), phase (radians), shadows (boolean). */
export function createFish(kind = 'hero', options = {}) {
  if (!['hero','predator','turtle','manta','school'].includes(kind)) kind = 'school';
  if (!templates.has(kind)) templates.set(kind,kind==='turtle'?turtleTemplate():kind==='manta'?mantaTemplate():fishTemplate(kind));
  const template = templates.get(kind), group = new T.Group();
  const palette = kind==='predator'?[0x365966,0x80999d,0xdadfd3]
    : kind==='turtle'?[0x34493a,0x78835b,0xc0b281]
      : kind==='manta'?[0x18313b,0x72938e,0xe1e7d6]
        : kind==='school'?[0x225b68,0x77bfc0,0xe4cc83]:[0x0c5360,0x38b8ad,0xe5c984];
  const uniforms = {
    uMarineTime:{value:0},uMarineSpeed:{value:1},uMarinePhase:{value:options.phase ?? Math.random()*TAU},
    uMarineBack:{value:new T.Color(palette[0])},uMarineSide:{value:new T.Color(options.color ?? palette[1])},uMarineBelly:{value:new T.Color(palette[2])}
  };
  const materials = materialsFor(kind,uniforms), casts = options.shadows ?? (kind==='hero'||kind==='predator');
  const depth = casts ? animateMaterial(new T.MeshDepthMaterial({depthPacking:T.RGBADepthPacking}),uniforms,kind) : null;
  for (const [part,geometry] of Object.entries(template)) {
    if (!geometry?.isBufferGeometry) continue;
    const mesh = new T.Mesh(geometry,materials[part]);
    mesh.name = kind+'-'+part; mesh.castShadow = casts && ['body','fins'].includes(part); mesh.receiveShadow = true;
    if (depth) mesh.customDepthMaterial = depth;
    group.add(mesh);
  }
  // Materials without a geometry are not retained (school and manta need fewer draw calls).
  const used = new Set(group.children.map(child=>child.material));
  for (const material of Object.values(materials)) if (!used.has(material)) material.dispose();
  const scale = options.scale ?? (kind==='school'?.36:1);
  group.scale.setScalar(scale); group.name = kind;
  group.userData.marine = {kind,uniforms,materials:[...used],depth,lastTime:null,clock:0,disposed:false};
  group.userData.length = template.length*scale;
  return group;
}

/** A continuous travelling wave; never changes the parent's orientation or position. */
export function animateFish(group, time, speed = 1) {
  const rig = group?.userData.marine;
  if (!rig || rig.disposed || !Number.isFinite(time)) return;
  const swim = T.MathUtils.clamp(Number.isFinite(speed)?speed:1,0,4);
  if (rig.lastTime === null) rig.clock = time;
  else rig.clock += T.MathUtils.clamp(time-rig.lastTime,0,.12)*(.75+Math.min(2.5,swim)*.25);
  rig.lastTime = time; rig.uniforms.uMarineTime.value = rig.clock;
  rig.uniforms.uMarineSpeed.value = T.MathUtils.lerp(rig.uniforms.uMarineSpeed.value,swim,.15);
}

/** Free only this animal's materials. Shared species geometry remains reusable. */
export function disposeFish(group) {
  const rig = group?.userData.marine;
  if (!rig || rig.disposed) return;
  rig.disposed = true; rig.materials.forEach(material=>material.dispose()); rig.depth?.dispose();
  group.removeFromParent();
}
