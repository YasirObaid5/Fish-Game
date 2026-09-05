import * as T from './vendor/three.module.min.js';
import { SURFACE_Y, terrainHeight, WORLD_RADIUS } from './free-swim.mjs';

const TAU = Math.PI * 2;
const PALETTES = {
  reef: { water: 0x0b6277, deep: 0x06404e, sky: 0x6faed6, horizon: 0xc9e4e6, sand: 0xcac3a4, rock: 0x788e7d, kelp: 0x558863, coral: [0xed907c, 0xdba165, 0xba739a, 0x72b7ad], fog: .015, sun: 3.7 },
  kelp: { water: 0x235f5a, deep: 0x123e42, sky: 0xc5ded1, horizon: 0xe6ecd4, sand: 0xb7b08a, rock: 0x747f5f, kelp: 0x7c9851, coral: [0xc59266, 0xd8b572, 0x8c9982, 0x87b8a0], fog: .017, sun: 3.25 },
  abyss: { water: 0x123b60, deep: 0x08243c, sky: 0x83acd5, horizon: 0xd0d6e8, sand: 0x8598a6, rock: 0x5f7489, kelp: 0x427d86, coral: [0xb592d4, 0x79c8ca, 0x87a3dd, 0xd38fb7], fog: .018, sun: 2.7 },
};

function randomSource(seed = 27931) {
  return () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
}
const transform = new T.Object3D();
const up = new T.Vector3(0, 1, 0);

function entriesMesh(geometry, material, entries, parent, shadow = true) {
  if (!entries.length) return null;
  const mesh = new T.InstancedMesh(geometry, material, entries.length);
  entries.forEach((entry, i) => {
    transform.position.set(...entry.p);
    transform.rotation.set(...(entry.r || [0, 0, 0]));
    if (entry.q) transform.quaternion.copy(entry.q);
    transform.scale.set(...(entry.s || [1, 1, 1]));
    transform.updateMatrix(); mesh.setMatrixAt(i, transform.matrix);
    if (entry.c !== undefined) mesh.setColorAt(i, new T.Color(entry.c));
  });
  mesh.castShadow = shadow; mesh.receiveShadow = true;
  mesh.computeBoundingSphere(); parent.add(mesh); return mesh;
}

function appendBranch(entries, a, b, radius, tint) {
  const start = new T.Vector3(...a), end = new T.Vector3(...b), delta = end.sub(start);
  entries.push({ p: start.addScaledVector(delta, .5).toArray(), s: [radius, delta.length(), radius], q: new T.Quaternion().setFromUnitVectors(up, delta.clone().normalize()), c: tint });
}

function curvedTube(points, radius, material, parent, segments = 32) {
  const curve = new T.CatmullRomCurve3(points.map(p => new T.Vector3(...p)));
  const geometry = new T.TubeGeometry(curve, segments, radius, 11, false);
  const positions = geometry.attributes.position, normals = geometry.attributes.normal;
  for (let i = 0; i < positions.count; i++) {
    const t = Math.floor(i / 12) / segments;
    const offset = radius * (.14 * Math.sin(t * 19) + .07 * Math.cos(t * 31));
    positions.setXYZ(i, positions.getX(i) + normals.getX(i) * offset, positions.getY(i) + normals.getY(i) * offset, positions.getZ(i) + normals.getZ(i) * offset);
  }
  geometry.computeVertexNormals();
  const mesh = new T.Mesh(geometry, material);
  mesh.castShadow = mesh.receiveShadow = true; parent.add(mesh); return mesh;
}

function mergedGeometry(parts) {
  const positions = [], normals = [], uvs = [];
  for (const [source, matrix] of parts) {
    const geometry = source.index ? source.toNonIndexed() : source.clone();
    geometry.applyMatrix4(matrix);
    positions.push(...geometry.attributes.position.array);
    normals.push(...geometry.attributes.normal.array);
    if (geometry.attributes.uv) uvs.push(...geometry.attributes.uv.array);
    else for (let i = 0; i < geometry.attributes.position.count; i++) uvs.push(0, 0);
    geometry.dispose();
  }
  const result = new T.BufferGeometry();
  result.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  result.setAttribute('normal', new T.Float32BufferAttribute(normals, 3));
  result.setAttribute('uv', new T.Float32BufferAttribute(uvs, 2));
  return result;
}

/** A finite, real world-space seascape. Camera and gameplay remain caller-owned. */
export class SeaWorld {
  constructor(scene, { coarse = false, reduced = false } = {}) {
    this.scene = scene; this.coarse = coarse; this.reduced = reduced;
    this.root = new T.Group(); this.root.name = 'living-sea'; scene.add(this.root);
    this.uniforms = { time: { value: 0 }, water: { value: new T.Color() }, above: { value: 0 } };
    this.materials = []; this.rays = []; this.schools = []; this.obstacles = [];
    this.palette = PALETTES.reef; this.biome = 'reef'; this.air = 0;
    this.random = randomSource(); this.fogColor = new T.Color(); this.sunDirection = new T.Vector3(-.36, .85, -.39).normalize();
    this.makeMaterials(); this.makeLighting(); this.makeTerrain();
    this.makeLandmarks(); this.makeReefs(); this.makeVegetation();
    this.makeSurface(); this.makeSky(); this.makeAtmosphere(); this.makeSchools();
    this.setBiome('reef');
  }

  material(color, { roughness = .72, sand = false, rock = false, sway = false, wood = false, brain = false, coral = false, ...extra } = {}) {
    const material = new T.MeshStandardMaterial({ color, roughness, ...extra });
    material.customProgramCacheKey = () => `open-sea-5-${sand}-${rock}-${sway}-${wood}-${brain}-${coral}`;
    material.onBeforeCompile = shader => {
      shader.uniforms.uSeaTime = this.uniforms.time;
      const prefix = 'varying vec3 vSeaWorld; varying vec2 vSeaUv; uniform float uSeaTime;\n';
      shader.vertexShader = prefix + shader.vertexShader;
      shader.fragmentShader = prefix + shader.fragmentShader;
      if (sway) shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `
        #include <begin_vertex>
        #ifdef USE_INSTANCING
          vec3 stemWorld=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;
          float swayStrength=pow(clamp((stemWorld.y+9.)*.065,0.,1.8),1.7);
          transformed.x+=sin(uSeaTime*.74+stemWorld.z*.12+stemWorld.y*.22)*swayStrength*.42/max(.12,length(instanceMatrix[0].xyz));
          transformed.z+=cos(uSeaTime*.56+stemWorld.x*.13+stemWorld.y*.19)*swayStrength*.2/max(.12,length(instanceMatrix[2].xyz));
        #endif
      `);
      shader.vertexShader = shader.vertexShader.replace('#include <worldpos_vertex>', `
        #include <worldpos_vertex>
        vec4 seaPoint=vec4(transformed,1.);
        #ifdef USE_INSTANCING
          seaPoint=instanceMatrix*seaPoint;
        #endif
        vSeaWorld=(modelMatrix*seaPoint).xyz; vSeaUv=uv;
      `);
      shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', `
        #include <color_fragment>
        ${sand ? `float ripple=sin(vSeaWorld.z*4.6+sin(vSeaWorld.x*.31)*3.+sin(vSeaWorld.z*.12));
        float grain=fract(sin(dot(floor(vSeaWorld.xz*90.),vec2(12.9898,78.233)))*43758.5453);
        diffuseColor.rgb*=.94+ripple*.045+grain*.05;` : ''}
        ${rock ? `float strata=sin(vSeaWorld.y*5.2+sin(vSeaWorld.x*.6)*2.+sin(vSeaWorld.z*.4));
        float pores=fract(sin(dot(floor(vSeaWorld*29.),vec3(127.1,311.7,74.7)))*43758.5453);
        diffuseColor.rgb*=.86+strata*.05+pores*.14;
        diffuseColor.rgb*=mix(vec3(.77,.86,.9),vec3(1.08,1.03,.88),smoothstep(-7.,5.,vSeaWorld.y));` : ''}
        ${wood ? `float grain=sin(vSeaWorld.z*18.+sin(vSeaWorld.x*4.)*2.);
        diffuseColor.rgb*=.84+.11*grain;` : ''}
        ${sway ? `float vein=pow(max(0.,1.-abs(vSeaUv.x-.5)*7.),8.);
        float folds=sin(vSeaUv.y*42.+sin(vSeaUv.x*16.));
        diffuseColor.rgb*=.91+vein*.16+folds*.035;` : ''}
        ${brain ? `vec3 p=vSeaWorld*7.;float ridges=sin(p.x+sin(p.y*1.3))+cos(p.z+cos(p.y));
        float grooves=pow(1.-min(1.,abs(ridges)*.75),5.);diffuseColor.rgb*=.56+grooves*.59;` : ''}
      `);
      shader.fragmentShader = shader.fragmentShader.replace('#include <lights_fragment_end>', `
        #include <lights_fragment_end>
        vec2 causticUV=vSeaWorld.xz*.56;
        causticUV+=vec2(sin(causticUV.y*.75+uSeaTime*.46),cos(causticUV.x*.72-uSeaTime*.37))*.8;
        float causticA=sin(causticUV.x*2.+sin(causticUV.y*1.7+uSeaTime*.34));
        float causticB=sin(causticUV.y*2.1+cos(causticUV.x*1.7-uSeaTime*.29));
        float caustic=pow(1.-min(1.,abs(causticA+causticB)*.62),16.);
        float submerged=1.-smoothstep(17.3,18.2,vSeaWorld.y);
        reflectedLight.directDiffuse*=1.+caustic*submerged*(.8+.35*smoothstep(-8.,16.,vSeaWorld.y));
        ${coral ? 'float nearby=1.-smoothstep(12.,48.,length(cameraPosition-vSeaWorld));reflectedLight.indirectDiffuse+=diffuseColor.rgb*nearby*.22;' : ''}
        diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.81,.98,1.),clamp((10.-vSeaWorld.y)*.018,0.,.4));
      `);
    };
    this.materials.push(material); return material;
  }

  makeMaterials() {
    this.sandMaterial = this.material(0xcac3a4, { sand: true, roughness: .94 });
    this.rockMaterial = this.material(0x788e7d, { rock: true, roughness: .88 });
    this.archMaterial = this.material(0x99a58d, { rock: true, roughness: .83 });
    this.coralMaterial = this.material(0xffffff, { coral: true, roughness: .56, metalness: .04 });
    this.plateMaterial = this.material(0xffffff, { coral: true, roughness: .68, side: T.DoubleSide });
    this.brainMaterial = this.material(0xffffff, { coral: true, brain: true, roughness: .62 });
    this.kelpMaterial = this.material(0x558863, { sway: !this.reduced, side: T.DoubleSide, roughness: .65 });
    this.kelpMaterial.emissive.set(0x294733); this.kelpMaterial.emissiveIntensity = .32;
    this.stemMaterial = this.material(0x607653, { sway: !this.reduced });
    this.woodMaterial = this.material(0x7b6250, { wood: true, roughness: .93 });
    this.darkWoodMaterial = this.material(0x453e34, { wood: true, roughness: .96 });
    this.sailMaterial = this.material(0xb5b39c, { side: T.DoubleSide, roughness: .98 });
    this.ventMaterial = this.material(0x353e40, { rock: true, roughness: .92 });
    this.ventRimMaterial = this.material(0x9d9258, { emissive: 0x425031, emissiveIntensity: .35 });
  }

  makeLighting() {
    const sun = this.sun = new T.DirectionalLight(0xffefd4, 3.7);
    sun.position.copy(this.sunDirection).multiplyScalar(70); sun.castShadow = true;
    sun.shadow.mapSize.set(this.coarse ? 1024 : 2048, this.coarse ? 1024 : 2048);
    sun.shadow.camera.left = sun.shadow.camera.bottom = -31;
    sun.shadow.camera.right = sun.shadow.camera.top = 31;
    sun.shadow.camera.near = 1; sun.shadow.camera.far = 160;
    sun.shadow.bias = -.00025; sun.shadow.normalBias = .07;
    sun.shadow.radius = 2.5; this.root.add(sun, sun.target);
    this.ambient = new T.HemisphereLight(0xa7ddea, 0x5c786e, 1.45); this.root.add(this.ambient);
    this.fill = new T.DirectionalLight(0x7dbddd, .5); this.fill.position.set(18, 10, 40); this.root.add(this.fill);
    this.scene.fog = new T.FogExp2(0x0b6277, .015); this.scene.background = new T.Color(0x0b6277);
  }

  makeTerrain() {
    const geometry = new T.PlaneGeometry(WORLD_RADIUS * 2.6, WORLD_RADIUS * 2.6, this.coarse ? 80 : 96, this.coarse ? 80 : 96);
    geometry.rotateX(-Math.PI / 2);
    const positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) positions.setY(i, terrainHeight(positions.getX(i), positions.getZ(i)));
    geometry.computeVertexNormals();
    const floor = new T.Mesh(geometry, this.sandMaterial); floor.receiveShadow = true; this.root.add(floor);
    const rock = this.rockGeometry = new T.IcosahedronGeometry(1, this.coarse ? 2 : 3);
    const points = rock.attributes.position;
    for (let i = 0; i < points.count; i++) {
      const x = points.getX(i), y = points.getY(i), z = points.getZ(i);
      const ridge = 1 + .095 * Math.sin(x * 5 + y * 3) * Math.cos(z * 7) + .055 * Math.cos(y * 9 + x * 3);
      points.setXYZ(i, x * ridge, y * ridge, z * ridge);
    }
    rock.computeVertexNormals();
    // Smooth normals across the duplicated vertices of an icosphere.
    const accumulated = new Map(), normals = rock.attributes.normal;
    const key = i => `${points.getX(i).toFixed(4)},${points.getY(i).toFixed(4)},${points.getZ(i).toFixed(4)}`;
    for (let i = 0; i < points.count; i++) {
      const k = key(i), v = accumulated.get(k) || new T.Vector3();
      v.add(new T.Vector3(normals.getX(i), normals.getY(i), normals.getZ(i))); accumulated.set(k, v);
    }
    for (let i = 0; i < points.count; i++) { const n = accumulated.get(key(i)).normalize(); normals.setXYZ(i, n.x, n.y, n.z); }
    const entries = [], random = this.random;
    for (let i = 0; i < (this.coarse ? 112 : 165); i++) {
      const angle = random() * TAU, radius = 15 + Math.sqrt(random()) * 123;
      const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
      if (Math.abs(x) < 7 && z > -30 && z < 40) continue;
      const size = 1.2 + random() * 4.1;
      entries.push({ p: [x, terrainHeight(x, z) + size * .28, z], s: [size, size * (.4 + random() * .5), size * (.55 + random() * .7)], r: [random() * .4, random() * TAU, random() * .3] });
    }
    // Soft distant silhouettes make the bounded lagoon legible, not a tiled corridor.
    for (let i = 0; i < 24; i++) {
      const a = i / 24 * TAU, radius = 146 + random() * 8, x = Math.sin(a) * radius, z = Math.cos(a) * radius;
      entries.push({ p: [x, -5 + random() * 6, z], s: [10 + random() * 13, 10 + random() * 20, 10 + random() * 10], r: [0, a, .12] });
    }
    this.rocks = entriesMesh(rock, this.rockMaterial, entries, this.root);
    entries.filter(e => Math.hypot(e.p[0], e.p[2]) < 120 && Math.min(...e.s) > 2)
      .sort((a, b) => Math.hypot(a.p[0], a.p[2] - 22) - Math.hypot(b.p[0], b.p[2] - 22))
      .slice(0, 12).forEach(e => this.obstacles.push({ position: new T.Vector3(...e.p), radius: Math.min(...e.s) * .84 }));
  }

  makeLandmarks() {
    const definition = [
      ['cathedral', 'كاتدرائية المرجان', 0, null, -22, 'coral'],
      ['wreck', 'حطام اللؤلؤة', 52, null, -50, 'wreck'],
      ['kelp', 'قوس غابة المدّ', -48, null, -65, 'kelp'],
      ['moonpool', 'عين الشمس', -70, 13, 25, 'surface'],
      ['vents', 'المداخن الزرقاء', 62, null, 48, 'vent'],
      ['sanctuary', 'حديقة البداية', 0, 10, 22, 'sanctuary'],
    ];
    this.landmarks = definition.map(([id, name, x, y, z, type]) => ({ id, name, type, radius: 7, position: new T.Vector3(x, y ?? terrainHeight(x, z) + (id === 'wreck' || id === 'kelp' ? 4 : 3), z) }));
    const cathedral = new T.Group(); cathedral.position.set(0, terrainHeight(0, -22), -22); this.root.add(cathedral);
    for (const [z, radius, lean] of [[-4, 1.35, -.13], [2, 1.7, .1]]) {
      const arch = curvedTube([[-10, 0, z], [-9, 5, z - 1], [-6, 11, z], [-1, 13.5, z + 1], [5, 11.5, z], [9, 6, z - 1], [10, 0, z]], radius, this.archMaterial, cathedral, 40);
      arch.rotation.z = lean;
    }
    const buttresses = [];
    for (const side of [-1, 1]) for (let i = 0; i < 6; i++) buttresses.push({ p: [side * (8.5 + i * .3), 1.3 + (i % 2), -7 + i * 2.5], s: [2.3, 2.5 + i * .2, 2], r: [0, i * .8, side * .2] });
    entriesMesh(this.rockGeometry, this.archMaterial, buttresses, cathedral);
    for (const x of [-9, 9]) for (const z of [-26, -20]) this.obstacles.push({ position: new T.Vector3(x, terrainHeight(0, -22) + 4, z), radius: 2.15 });

    this.makeWreck();
    const kelpArch = new T.Group(); kelpArch.position.set(-48, terrainHeight(-48, -65), -65); kelpArch.rotation.y = -.5; this.root.add(kelpArch);
    curvedTube([[-7, 0, 0], [-8, 4, -.5], [-6, 9, -.8], [-1, 10.5, 0], [4, 9, 0], [7, 3, 1], [8, 0, 2]], 1.35, this.rockMaterial, kelpArch);
    for (const x of [-7, 7]) this.obstacles.push({ position: new T.Vector3(x, 3, 0).applyEuler(kelpArch.rotation).add(kelpArch.position), radius: 1.65 });

    const pool = new T.Group(); pool.position.set(-70, 9.5, 25); this.root.add(pool);
    const rim = new T.Mesh(new T.TorusGeometry(9.2, 1.8, 12, 56), this.archMaterial); rim.rotation.x = Math.PI / 2; rim.scale.z = 1.5; rim.receiveShadow = rim.castShadow = true; pool.add(rim);
    const poolRocks = [];
    for (let i = 0; i < 18; i++) { const a = i / 18 * TAU; poolRocks.push({ p: [Math.cos(a) * 10, -3, Math.sin(a) * 10], s: [2.6, 7.5 + Math.sin(i * 2) * 1.5, 2.8], r: [.08, a, .13] }); }
    entriesMesh(this.rockGeometry, this.archMaterial, poolRocks, pool);
    for (let i = 0; i < 8; i++) { const a = i / 8 * TAU; this.obstacles.push({ position: new T.Vector3(-70 + Math.cos(a) * 9.8, 9.5, 25 + Math.sin(a) * 9.8), radius: 2.35 }); }
    this.makeVents();

    const garden = [];
    for (const side of [-1, 1]) for (let i = 0; i < 7; i++) {
      const x = side * (8 + Math.sin(i) * 2), z = 9 + i * 4;
      garden.push({ p: [x, terrainHeight(x, z) + 1.5, z], s: [2.5 + Math.sin(i), 2.5 + i * .2, 3.3], r: [0, i, .2 * side] });
    }
    entriesMesh(this.rockGeometry, this.archMaterial, garden, this.root);
    garden.forEach(e => this.obstacles.push({ position: new T.Vector3(...e.p), radius: Math.min(...e.s) * .83 }));
  }

  makeWreck() {
    const ship = new T.Group(); ship.position.set(52, terrainHeight(52, -50) + .2, -50); ship.rotation.set(.055, -.6, -.13); this.root.add(ship);
    const planks = [];
    for (const side of [-1, 1]) for (let row = 0; row < 6; row++) {
      const geometry = new T.BufferGeometry(), positions = [], normals = [], uv = [], indices = [];
      const start = row === 4 ? -7 : -9, end = row === 5 && side > 0 ? 3 : 9;
      for (let i = 0; i <= 24; i++) {
        const z = start + (end - start) * i / 24, width = Math.pow(Math.max(.02, Math.sin((z + 9) / 18 * Math.PI)), .55) * 3.5;
        const x = side * width * (.5 + row * .11), y = row * .58 + .03 * z * z;
        positions.push(x, y, z, x + side * .08, y + .48, z); normals.push(side, .1, 0, side, .1, 0); uv.push(i / 24, 0, i / 24, 1);
        if (i < 24) { const n = i * 2; indices.push(n, n + 1, n + 2, n + 1, n + 3, n + 2); }
      }
      geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3)); geometry.setAttribute('normal', new T.Float32BufferAttribute(normals, 3)); geometry.setAttribute('uv', new T.Float32BufferAttribute(uv, 2)); geometry.setIndex(indices); geometry.computeVertexNormals();
      const plank = new T.Mesh(geometry, row % 2 ? this.woodMaterial : this.darkWoodMaterial); plank.material.side = T.DoubleSide; plank.castShadow = plank.receiveShadow = true; ship.add(plank);
    }
    for (let i = 0; i < 8; i++) {
      const z = -7 + i * 2, w = Math.pow(Math.sin((z + 9) / 18 * Math.PI), .55) * 3.5;
      curvedTube([[-w, 3.3, z], [-w * .8, 1.2, z], [0, .2, z], [w * .8, 1.2, z], [w, 3.3, z]], .14, this.darkWoodMaterial, ship, 14);
      if (i < 4) planks.push({ p: [0, 2.9, z], s: [w * 1.85, .17, .45], r: [0, .015 * i, 0] });
    }
    entriesMesh(new T.BoxGeometry(1, 1, 1), this.woodMaterial, planks, ship);
    const beams = [];
    appendBranch(beams, [0, 0, 0], [.9, 14, -.7], .22);
    appendBranch(beams, [-4, 10, -.45], [4.2, 10.3, -.6], .13);
    appendBranch(beams, [0, 1, -6], [-2, 5, -9.4], .19);
    entriesMesh(new T.CylinderGeometry(.72, 1, 1, 9), this.darkWoodMaterial, beams, ship);
    const cloth = new T.BufferGeometry();
    cloth.setAttribute('position', new T.Float32BufferAttribute([-3.8, 9.9, -.35, .8, 10.1, -.4, -3, 6.4, .25, -3, 6.4, .25, .8, 10.1, -.4, -1.4, 5.8, .6, -.8, 9.95, -.4, 3.7, 10.12, -.5, 2.8, 7.6, .1], 3)); cloth.computeVertexNormals();
    const sail = new T.Mesh(cloth, this.sailMaterial); sail.castShadow = true; ship.add(sail);
    const anchor = new T.Mesh(new T.TorusGeometry(.9, .12, 6, 24, Math.PI), this.ventMaterial); anchor.position.set(4.7, .8, 4); anchor.rotation.z = Math.PI; ship.add(anchor);
  }

  makeVents() {
    const group = new T.Group(); group.position.set(62, terrainHeight(62, 48), 48); this.root.add(group);
    const formations = [], lips = [];
    for (let i = 0; i < 7; i++) {
      const angle = i * 2.4, x = Math.sin(angle) * (i ? 4.4 : 0), z = Math.cos(angle) * (i ? 4.2 : 0), height = 3 + (i % 3) * 1.5;
      formations.push({ p: [x, height / 2, z], s: [1.2, height, 1.2], r: [0, angle, Math.sin(i) * .04] });
      lips.push({ p: [x, height, z], s: [.7, .7, .7], r: [Math.PI / 2, 0, 0] });
    }
    entriesMesh(new T.CylinderGeometry(.48, 1, 1, 12, 3, true), this.ventMaterial, formations, group);
    entriesMesh(new T.TorusGeometry(1, .19, 8, 18), this.ventRimMaterial, lips, group, false);
    const glow = new T.PointLight(0x54b8c6, 20, 17, 2); glow.position.set(0, 4, 0); group.add(glow);
    this.ventCenter = group.position.clone();
  }

  makeReefs() {
    const random = this.random, branches = [], tips = [], plates = [], brains = [];
    const centers = [[-10, 19], [10, 25], [-11, 3], [11, -10], [-10, -28], [11, -22], [55, -54], [47, -43], [-78, 24], [-62, 30], [68, 46]];
    for (let i = 0; i < (this.coarse ? 45 : 65); i++) {
      const center = centers[i % centers.length], x = center[0] + (random() - .5) * 10, z = center[1] + (random() - .5) * 11;
      const y = terrainHeight(x, z) + .35, scale = .8 + random() * 1.5, tint = this.palette.coral[i % 4];
      if (i % 5 === 0) brains.push({ p: [x + .8, y + scale * .48, z + .8], s: [scale * .8, scale * .7, scale * .95], c: tint });
      if (i % 3 === 0) {
        for (let j = 0; j < 4; j++) plates.push({ p: [x + Math.sin(j * 2) * .7, y + .6 + j * .5, z + Math.cos(j * 2) * .6], s: [scale * (1.5 - j * .2), .13, scale * (1.2 - j * .12)], r: [.08 * j, random() * TAU, .04 * j], c: tint });
        continue;
      }
      const top = [x, y + scale * 1.4, z]; appendBranch(branches, [x, y, z], top, scale * .15, tint);
      for (let j = 0; j < 5; j++) {
        const a = j / 5 * TAU + random(), end = [x + Math.sin(a) * scale * .9, y + scale * (1.7 + random()), z + Math.cos(a) * scale * .7];
        const root = [x, y + scale * (.6 + j * .12), z]; appendBranch(branches, root, end, scale * .085, tint);
        tips.push({ p: end, s: [scale * .077, scale * .13, scale * .077], c: new T.Color(tint).lerp(new T.Color(0xf3dfc1), .3).getHex() });
        for (const side of [-1, 1]) {
          const twig = [end[0] + side * Math.cos(a) * scale * .32, end[1] + scale * .5, end[2] + side * Math.sin(a) * scale * .25];
          appendBranch(branches, end, twig, scale * .044, tint); tips.push({ p: twig, s: [scale * .052, scale * .086, scale * .052], c: new T.Color(tint).lerp(new T.Color(0xf3dfc1), .4).getHex() });
        }
      }
    }
    this.coralMeshes = [entriesMesh(new T.CylinderGeometry(.56, 1, 1, 9), this.coralMaterial, branches, this.root), entriesMesh(new T.SphereGeometry(1, 8, 5), this.coralMaterial, tips, this.root, false), entriesMesh(new T.SphereGeometry(1, 20, 9), this.plateMaterial, plates, this.root), entriesMesh(new T.SphereGeometry(1, 18, 12), this.brainMaterial, brains, this.root)];
    this.coralEntries = [branches, tips, plates, brains];
  }

  makeVegetation() {
    const random = this.random, leaves = [], stems = [], grass = [];
    const blade = new T.PlaneGeometry(1, 1, 2, 7); blade.translate(0, .5, 0);
    const points = blade.attributes.position;
    for (let i = 0; i < points.count; i++) {
      const y = points.getY(i), x = points.getX(i);
      points.setXYZ(i, x * Math.pow(Math.max(.025, Math.sin(y * Math.PI)), .65), y, Math.sin(y * Math.PI) * .18 + x * x * .2);
    }
    blade.computeVertexNormals();
    for (let i = 0; i < (this.coarse ? 56 : 85); i++) {
      const forest = i % 3 !== 0, x = forest ? -48 + (random() - .5) * 39 : (random() - .5) * 170, z = forest ? -65 + (random() - .5) * 34 : (random() - .5) * 150;
      const y = terrainHeight(x, z), height = forest ? 8 + random() * 12 : 3 + random() * 7;
      stems.push({ p: [x, y + height / 2, z], s: [.065, height, .065] });
      for (let j = 1; j < 11; j++) {
        const h = height * j / 11, a = j * 2.39;
        leaves.push({ p: [x, y + h, z], s: [.3 + random() * .4, 2.2 + random() * 1.9, 1], r: [Math.sin(a) * .65, a, .55 + Math.cos(a) * .25], c: new T.Color(0xffffff).multiplyScalar(.72 + random() * .28).getHex() });
      }
    }
    for (let i = 0; i < (this.coarse ? 250 : 450); i++) {
      const a = random() * TAU, radius = 10 + random() * 100, x = Math.cos(a) * radius, z = Math.sin(a) * radius;
      grass.push({ p: [x, terrainHeight(x, z) - .1, z], s: [.18 + random() * .27, .65 + random() * 1.2, .6], r: [.12, random() * TAU, .25] });
    }
    entriesMesh(new T.CylinderGeometry(.6, 1, 1, 6), this.stemMaterial, stems, this.root, false);
    this.kelpLeaves = entriesMesh(blade, this.kelpMaterial, leaves, this.root, false);
    entriesMesh(blade, this.kelpMaterial, grass, this.root, false);
  }

  surfaceHeight(x, z, time) {
    return SURFACE_Y + Math.sin(x * .16 + z * .12 + time * .72) * .2 + Math.sin(x * .31 - z * .24 - time * .55) * .075;
  }

  makeSurface() {
    const material = new T.ShaderMaterial({
      side: T.DoubleSide, fog: true,
      uniforms: { ...T.UniformsUtils.clone(T.UniformsLib.fog), time: this.uniforms.time, water: this.uniforms.water, sky: { value: new T.Color(this.palette.sky) }, sunDirection: { value: this.sunDirection } },
      vertexShader: `uniform float time; varying vec3 vWorld;
        #include <fog_pars_vertex>
        void main(){vec3 p=position;p.y+=sin(p.x*.16+p.z*.12+time*.72)*.2+sin(p.x*.31-p.z*.24-time*.55)*.075;
          vWorld=(modelMatrix*vec4(p,1.)).xyz;vec4 mvPosition=viewMatrix*vec4(vWorld,1.);gl_Position=projectionMatrix*mvPosition;
          #include <fog_vertex>
        }`,
      fragmentShader: `uniform float time;uniform vec3 water,sky,sunDirection;varying vec3 vWorld;
        #include <fog_pars_fragment>
        void main(){
          vec2 p=vWorld.xz;vec3 eye=normalize(cameraPosition-vWorld);
          float distanceToEye=length(cameraPosition-vWorld);
          float detailFade=1.-smoothstep(22.,100.,distanceToEye);
          float a=p.x*.16+p.y*.12+time*.72,b=p.x*.31-p.y*.24-time*.55;
          float fineA=sin(p.x*1.2+p.y*.91+time*.8+sin(p.y*.57-time*.25)*.6);
          float fineB=sin(-p.x*.84+p.y*1.43-time*.65+cos(p.x*.63+time*.2)*.7);
          float fineC=sin(p.x*2.36-p.y*1.58+time*.93+fineA*.32);
          vec3 n=normalize(vec3(-cos(a)*.032-cos(b)*.02325+fineA*.025*detailFade,1.,-cos(a)*.024+cos(b)*.018+fineB*.024*detailFade));
          float above=step(vWorld.y,cameraPosition.y);
          float fresnel=.025+.975*pow(1.-abs(dot(eye,n)),5.);
          vec3 reflection=reflect(-eye,n);float sparkle=pow(max(0.,dot(reflection,sunDirection)),650.);
          float broadSun=pow(max(0.,dot(reflection,sunDirection)),35.);
          vec3 reflectedSky=mix(sky*.55,sky*1.15,clamp(reflection.y*.6+.4,0.,1.));
          vec3 top=mix(water*.62,reflectedSky,fresnel)+vec3(1.,.91,.7)*(sparkle*4.+broadSun*.18);
          // Snell's window is one coherent opening, not a threshold on each tiny wave.
          float window=smoothstep(.61,.79,-eye.y);
          float skyElevation=clamp((-eye.y-.6)*2.5,0.,1.);
          vec3 refractedSky=mix(sky*.85,vec3(.66,.83,.91),skyElevation);
          float sunDot=max(0.,dot(-eye,sunDirection));
          float sunHalo=pow(sunDot,42.);
          float sunDisk=pow(sunDot,1300.);
          vec3 below=mix(water*.8,refractedSky,window*.66);
          below+=vec3(1.,.96,.77)*(sunHalo*.56+sunDisk*2.1)*window;
          float filaments=pow(1.-min(1.,abs(fineA+fineB+fineC*.28)*.67),10.);
          float microRidges=pow(max(0.,fineA*fineB),7.);
          below+=vec3(.43,.66,.65)*(filaments*.105+microRidges*.05)*detailFade;
          below+=vec3(.23,.35,.34)*fresnel*.12;
          float crest=smoothstep(.255,.28,sin(a)*.2+sin(b)*.075);
          top+=crest*.025+vec3(.32,.47,.49)*filaments*.025*detailFade;
          gl_FragColor=vec4(mix(below,top,above),1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,
    });
    const geometry = new T.PlaneGeometry(390, 390, this.coarse ? 80 : 112, this.coarse ? 80 : 112); geometry.rotateX(-Math.PI / 2);
    this.surface = new T.Mesh(geometry, material); this.surface.position.y = SURFACE_Y; this.surface.frustumCulled = false; this.root.add(this.surface);
  }

  makeSky() {
    const material = new T.ShaderMaterial({
      side: T.BackSide, depthWrite: false,
      uniforms: { time: this.uniforms.time, water: this.uniforms.water, air: this.uniforms.above, sky: { value: new T.Color(this.palette.sky) }, horizon: { value: new T.Color(this.palette.horizon) }, sunDirection: { value: this.sunDirection } },
      vertexShader: 'varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader: `varying vec3 vDirection;uniform vec3 sky,horizon,water,sunDirection;uniform float time,air;
        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
        float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
        void main(){vec3 direction=normalize(vDirection);float elevation=max(0.,direction.y);
          vec3 c=mix(horizon,sky,smoothstep(0.,.65,elevation));float sun=max(0.,dot(direction,sunDirection));
          c+=vec3(1.,.86,.59)*(pow(sun,950.)*5.+pow(sun,20.)*.18);
          vec2 cloudUV=direction.xz/max(.15,direction.y)*2.5+vec2(time*.003,0.);
          float cloud=noise(cloudUV)*.6+noise(cloudUV*2.)*.25+noise(cloudUV*4.)*.15;
          float clouds=smoothstep(.59,.77,cloud)*smoothstep(.04,.3,elevation)*.48;
          c=mix(c,vec3(.98,.98,.94),clouds);c=mix(water,c,air);
          gl_FragColor=vec4(c,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
    this.sky = new T.Mesh(new T.SphereGeometry(420, 32, 16), material); this.sky.renderOrder = -5; this.sky.frustumCulled = false; this.root.add(this.sky);
  }

  makeAtmosphere() {
    const shafts = new T.ShaderMaterial({
      transparent: true, depthWrite: false, side: T.DoubleSide, blending: T.AdditiveBlending,
      uniforms: { time: this.uniforms.time, above: this.uniforms.above },
      vertexShader: 'varying vec2 vUv;varying float vDepth;void main(){vUv=uv;vec4 p=modelViewMatrix*vec4(position,1.);vDepth=-p.z;gl_Position=projectionMatrix*p;}',
      fragmentShader: `varying vec2 vUv;varying float vDepth;uniform float time,above;
        void main(){float edge=pow(max(0.,sin(vUv.x*3.14159)),3.);float ends=smoothstep(0.,.15,vUv.y)*(1.-smoothstep(.65,1.,vUv.y));
          float alpha=edge*ends*(.78+.22*sin(vUv.y*13.+time*.5))*.083*exp(-max(0.,vDepth)*.014)*(1.-above);
          gl_FragColor=vec4(.75,.88,.78,alpha);}`,
    });
    const rayGeo = new T.PlaneGeometry(4, 27);
    for (let i = 0; i < 22; i++) {
      const x = (i % 6) * 19 - 48, z = Math.floor(i / 6) * -29 + 31;
      const ray = new T.Mesh(rayGeo, shafts); ray.position.set(x, 5, z); ray.rotation.z = -.35; this.root.add(ray); this.rays.push(ray);
    }
    const count = this.coarse ? 420 : 720, data = [], seeds = [];
    for (let i = 0; i < count; i++) { data.push((this.random() - .5) * 240, -5 + this.random() * 22, (this.random() - .5) * 240); seeds.push(this.random()); }
    const dustGeometry = new T.BufferGeometry(); dustGeometry.setAttribute('position', new T.Float32BufferAttribute(data, 3)); dustGeometry.setAttribute('seed', new T.Float32BufferAttribute(seeds, 1));
    const dustMaterial = new T.ShaderMaterial({
      transparent: true, depthWrite: false, blending: T.AdditiveBlending,
      uniforms: { time: this.uniforms.time, above: this.uniforms.above },
      vertexShader: `attribute float seed;uniform float time;varying float vFade;void main(){vec3 p=position;p.x+=sin(time*.17+seed*50.)*.7;p.y+=sin(time*.3+seed*70.)*.4;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((130.+seed*100.)/max(2.,-mv.z),1.,5.);vFade=exp(-max(0.,-mv.z)*.025)*(.3+seed*.4);}`,
      fragmentShader: `uniform float above;varying float vFade;void main(){float r=length(gl_PointCoord-.5)*2.;float a=(1.-smoothstep(.2,1.,r))*vFade*(1.-above)*.38;gl_FragColor=vec4(.65,.86,.84,a);}`,
    });
    this.root.add(new T.Points(dustGeometry, dustMaterial));
    const bubbles = [], phases = [];
    for (let i = 0; i < 64; i++) { bubbles.push((this.random() - .5) * 10, this.random() * 17, (this.random() - .5) * 9); phases.push(this.random()); }
    const bubblesGeometry = new T.BufferGeometry(); bubblesGeometry.setAttribute('position', new T.Float32BufferAttribute(bubbles, 3)); bubblesGeometry.setAttribute('seed', new T.Float32BufferAttribute(phases, 1));
    const bubblesMaterial = new T.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { time: this.uniforms.time },
      vertexShader: `attribute float seed;uniform float time;varying float vFade;void main(){vec3 p=position;p.y=mod(p.y+time*(.55+seed*.4),17.);p.x+=sin(p.y*.6+seed*15.)*.2;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((150.+seed*80.)/max(2.,-mv.z),1.,13.);vFade=(1.-p.y/19.)*exp(-max(0.,-mv.z)*.014);}`,
      fragmentShader: 'varying float vFade;void main(){vec2 p=gl_PointCoord-.5;float r=length(p)*2.;float ring=exp(-pow((r-.77)*8.,2.));float shine=exp(-length(p-vec2(-.13,.14))*25.);float a=(ring*.26+shine*.55)*vFade;gl_FragColor=vec4(.56,.81,.86,a);}',
    });
    const plume = new T.Points(bubblesGeometry, bubblesMaterial); plume.position.copy(this.ventCenter).add(new T.Vector3(0, 3, 0)); this.root.add(plume);
  }

  makeSchools() {
    const body = new T.SphereGeometry(1, 10, 6), tail = new T.ConeGeometry(1, 1, 3);
    transform.position.set(.1, 0, 0); transform.rotation.set(0, 0, 0); transform.scale.set(.48, .13, .1); transform.updateMatrix(); const bodyMatrix = transform.matrix.clone();
    transform.position.set(-.42, 0, 0); transform.rotation.set(0, 0, -Math.PI / 2); transform.scale.set(.21, .3, .06); transform.updateMatrix();
    const geometry = mergedGeometry([[body, bodyMatrix], [tail, transform.matrix.clone()]]); body.dispose(); tail.dispose();
    const material = this.material(0xc7dfe0, { roughness: .28, metalness: .35 });
    const count = this.coarse ? 42 : 72, entries = [];
    for (let i = 0; i < count; i++) entries.push({ p: [0, 0, 0], c: [0xbdcdb8, 0x86c6ce, 0xd6c191][i % 3] });
    this.schoolMesh = entriesMesh(geometry, material, entries, this.root, false);
    this.schoolMesh.frustumCulled = false; this.schoolMesh.instanceMatrix.setUsage(T.DynamicDrawUsage);
    for (let i = 0; i < count; i++) this.schools.push({ group: i % 3, angle: this.random() * TAU, spread: this.random(), altitude: this.random() });
  }

  setBiome(name) {
    this.biome = PALETTES[name] ? name : 'reef'; this.palette = PALETTES[this.biome]; const p = this.palette;
    this.uniforms.water.value.set(p.water); this.sandMaterial.color.set(p.sand); this.rockMaterial.color.set(p.rock);
    this.archMaterial.color.set(p.rock).lerp(new T.Color(0xd9d5b8), .26); this.kelpMaterial.color.set(p.kelp);
    this.stemMaterial.color.set(p.kelp).multiplyScalar(.7); this.sun.intensity = p.sun;
    this.surface.material.uniforms.sky.value.set(p.sky); this.sky.material.uniforms.sky.value.set(p.sky); this.sky.material.uniforms.horizon.value.set(p.horizon);
    for (let m = 0; m < this.coralMeshes.length; m++) {
      const mesh = this.coralMeshes[m]; if (!mesh) continue;
      for (let i = 0; i < mesh.count; i++) {
        const source = new T.Color(this.coralEntries[m][i].c); let best = 0, distance = Infinity;
        for (let j = 0; j < 4; j++) { const candidate = new T.Color(PALETTES.reef.coral[j]); const d = Math.abs(source.r - candidate.r) + Math.abs(source.g - candidate.g) + Math.abs(source.b - candidate.b); if (d < distance) { best = j; distance = d; } }
        const color = new T.Color(p.coral[best]); if (m === 1) color.lerp(new T.Color(0xf4e5c9), .2);
        mesh.setColorAt(i, color);
      }
      mesh.instanceColor.needsUpdate = true;
    }
  }

  update(dt, time, playerPosition, camera) {
    this.uniforms.time.value = time;
    const surface = this.surfaceHeight(camera.position.x, camera.position.z, time);
    const air = T.MathUtils.smoothstep(camera.position.y, surface - .35, surface + .3);
    this.air += (air - this.air) * (1 - Math.exp(-dt * 9)); this.uniforms.above.value = this.air;
    const depth = T.MathUtils.clamp((SURFACE_Y - camera.position.y) / 28, 0, 1);
    this.fogColor.set(this.palette.water).lerp(new T.Color(this.palette.deep), depth * .5).lerp(new T.Color(this.palette.horizon), this.air);
    this.scene.fog.color.copy(this.fogColor); this.scene.fog.density = T.MathUtils.lerp(this.palette.fog * (1 + depth * .22), .0017, this.air);
    this.scene.background.copy(this.fogColor); this.sky.position.copy(camera.position); this.sky.visible = this.air > .001;
    this.sun.target.position.set(playerPosition.x, 1, playerPosition.z); this.sun.position.copy(this.sun.target.position).addScaledVector(this.sunDirection, 75);
    this.sun.target.updateMatrixWorld(); this.ambient.intensity = 1.25 + (1 - depth) * .3 + this.air * .35;
    this.ambient.color.set(this.palette.sky); this.ambient.groundColor.set(this.palette.water).multiplyScalar(.55);
    for (let i = 0; i < this.rays.length; i++) {
      const ray = this.rays[i]; ray.rotation.y = Math.atan2(camera.position.x - ray.position.x, camera.position.z - ray.position.z);
      ray.rotation.z = -.3 + (this.reduced ? 0 : Math.sin(time * .16 + i) * .025);
    }
    const centers = [[5, 9, -23], [-47, 11, -58], [-13, 13, 19]];
    for (let i = 0; i < this.schools.length; i++) {
      const fish = this.schools[i], center = centers[fish.group], a = fish.angle + time * (.075 + fish.group * .018), radius = 5 + fish.spread * 10;
      transform.position.set(center[0] + Math.cos(a) * radius, center[1] + Math.sin(a * 2 + fish.altitude * 4) * 1.6 + (fish.altitude - .5) * 4, center[2] + Math.sin(a) * radius * .7);
      transform.rotation.set(0, Math.atan2(-Math.cos(a) * .7, -Math.sin(a)), Math.sin(time * 2 + i) * .05); transform.scale.setScalar(.55 + fish.spread * .55); transform.updateMatrix(); this.schoolMesh.setMatrixAt(i, transform.matrix);
    }
    this.schoolMesh.instanceMatrix.needsUpdate = true;
  }

  dispose() {
    const geometries = new Set(), materials = new Set();
    this.root.traverse(object => { if (object.geometry) geometries.add(object.geometry); if (object.material) for (const material of Array.isArray(object.material) ? object.material : [object.material]) materials.add(material); });
    for (const geometry of geometries) geometry.dispose(); for (const material of materials) material.dispose();
    this.sun.shadow.map?.dispose(); this.scene.remove(this.root);
  }
}
