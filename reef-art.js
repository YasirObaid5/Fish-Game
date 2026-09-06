import * as THREE from './vendor/three.module.min.js';

// A deliberately small reader for our own static, vertex-coloured Blender kit.
// Unsupported glTF features are rejected, not silently rendered incorrectly.
// This keeps the offline game self-contained without another Three.js runtime.
const COMPONENTS = {
  5120: [Int8Array, 1, 'getInt8'], 5121: [Uint8Array, 1, 'getUint8'],
  5122: [Int16Array, 2, 'getInt16'], 5123: [Uint16Array, 2, 'getUint16'],
  5125: [Uint32Array, 4, 'getUint32'], 5126: [Float32Array, 4, 'getFloat32'],
};
const SIZES = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT4: 16 };
const SPECIES = ['coral_antler', 'coral_fan', 'coral_table', 'sponge_cluster'];

export function parseReefGLB(buffer) {
  const view = new DataView(buffer);
  if (buffer.byteLength < 20 || view.getUint32(0, true) !== 0x46546c67 ||
      view.getUint32(4, true) !== 2 || view.getUint32(8, true) !== buffer.byteLength) {
    throw new Error('The original reef model has an invalid GLB header.');
  }
  let data, binary;
  for (let offset = 12; offset + 8 <= buffer.byteLength;) {
    const length = view.getUint32(offset, true), type = view.getUint32(offset + 4, true);
    const start = offset + 8, end = start + length;
    if (end > buffer.byteLength) throw new Error('Truncated original reef model.');
    if (type === 0x4e4f534a) data = JSON.parse(new TextDecoder().decode(new Uint8Array(buffer, start, length)));
    if (type === 0x004e4942) binary = new DataView(buffer, start, length);
    offset = end;
  }
  if (!data || !binary || data.asset?.version !== '2.0' || data.buffers?.length !== 1 ||
      data.buffers[0].uri || data.extensionsRequired?.length) {
    throw new Error('Unsupported reef kit encoding.');
  }
  const attribute = (index) => {
    const accessor = data.accessors[index], source = data.bufferViews[accessor?.bufferView];
    const config = COMPONENTS[accessor?.componentType], width = SIZES[accessor?.type];
    if (!accessor || accessor.sparse || !source || source.buffer !== 0 || !config || !width) {
      throw new Error('Unsupported reef vertex attribute.');
    }
    const [ArrayType, bytes, read] = config;
    const stride = source.byteStride || bytes * width;
    const base = (source.byteOffset || 0) + (accessor.byteOffset || 0);
    const last = base + Math.max(0, accessor.count - 1) * stride + bytes * width;
    if (stride < bytes * width || last > binary.byteLength || last > (source.byteOffset || 0) + source.byteLength) {
      throw new Error('Reef vertex data exceeds its declared buffer.');
    }
    const array = new ArrayType(accessor.count * width);
    for (let i = 0; i < accessor.count; i++) {
      for (let k = 0; k < width; k++) array[i * width + k] = binary[read](base + i * stride + k * bytes, true);
    }
    return new THREE.BufferAttribute(array, width, !!accessor.normalized);
  };
  const materials = (data.materials || [{}]).map((source) => {
    const pbr = source.pbrMetallicRoughness || {}, rgba = pbr.baseColorFactor || [1, 1, 1, 1];
    if (pbr.baseColorTexture || pbr.metallicRoughnessTexture || source.normalTexture) {
      throw new Error('Reef kit must use original vertex pigment, not external textures.');
    }
    return new THREE.MeshStandardMaterial({
      name: source.name || 'Original reef mineral pigment',
      color: new THREE.Color().setRGB(rgba[0], rgba[1], rgba[2], THREE.LinearSRGBColorSpace),
      vertexColors: true, roughness: pbr.roughnessFactor ?? .72, metalness: pbr.metallicFactor ?? 0,
      side: source.doubleSided ? THREE.DoubleSide : THREE.FrontSide,
    });
  });
  const meshes = (data.meshes || []).map((source) => {
    const group = new THREE.Group();
    group.name = source.name || '';
    for (const primitive of source.primitives) {
      if ((primitive.mode ?? 4) !== 4 || primitive.targets || primitive.attributes.JOINTS_0 !== undefined) {
        throw new Error('Unsupported reef primitive.');
      }
      const geometry = new THREE.BufferGeometry();
      for (const [key, name] of [['POSITION', 'position'], ['NORMAL', 'normal'], ['COLOR_0', 'color']]) {
        if (primitive.attributes[key] !== undefined) geometry.setAttribute(name, attribute(primitive.attributes[key]));
      }
      if (!geometry.attributes.position || !geometry.attributes.color) throw new Error('Missing sculpted reef geometry or pigment.');
      if (primitive.indices !== undefined) geometry.setIndex(attribute(primitive.indices));
      if (!geometry.attributes.normal) geometry.computeVertexNormals();
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
      group.add(new THREE.Mesh(geometry, materials[primitive.material ?? 0]));
    }
    return group;
  });
  const nodes = (data.nodes || []).map((source) => {
    if (source.skin !== undefined) throw new Error('Skinned reef assets are not supported.');
    const node = source.mesh === undefined ? new THREE.Group() : meshes[source.mesh].clone();
    node.name = source.name || node.name;
    if (source.matrix) node.applyMatrix4(new THREE.Matrix4().fromArray(source.matrix));
    else {
      if (source.translation) node.position.fromArray(source.translation);
      if (source.rotation) node.quaternion.fromArray(source.rotation);
      if (source.scale) node.scale.fromArray(source.scale);
    }
    return node;
  });
  data.nodes.forEach((source, i) => (source.children || []).forEach((child) => nodes[i].add(nodes[child])));
  const scene = new THREE.Group();
  for (const index of data.scenes[data.scene ?? 0].nodes) scene.add(nodes[index]);
  scene.updateMatrixWorld(true);
  const templates = new Map();
  for (const name of SPECIES) {
    const root = scene.getObjectByName(name), pieces = [];
    if (!root) throw new Error(`Missing original reef sculpture: ${name}`);
    root.traverse((node) => { if (node.isMesh) pieces.push(node); });
    if (pieces.length !== 1) throw new Error(`Reef sculpture ${name} must have one batched mesh.`);
    const source = pieces[0], geometry = source.geometry.clone().applyMatrix4(source.matrixWorld);
    geometry.computeBoundingBox();
    geometry.translate(0, -geometry.boundingBox.min.y, 0);
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();
    templates.set(name, { geometry, material: source.material,
      triangles: (geometry.index?.count || geometry.attributes.position.count) / 3,
      dimensions: geometry.boundingBox.getSize(new THREE.Vector3()).toArray() });
  }
  // GPU resources are created only by the final instances, never by source nodes.
  return templates;
}

// Living tissue pigments retain the sculpted vertex variation, replacing the
// dead-wood palette with restrained natural coral fluorescence (not emission).
function livingPigment(geometry, name) {
  const c = geometry.getAttribute('color'), p = geometry.getAttribute('position');
  const clamp = THREE.MathUtils.clamp, mix = THREE.MathUtils.lerp;
  for (let i = 0; i < c.count; i++) {
    const r = c.getX(i), g = c.getY(i), b = c.getZ(i);
    if (name === 'coral_antler') {
      const tip = Math.pow(clamp((r - .27) / .59, 0, 1), 2.2) * .78;
      const family = .42 + .36 * Math.sin(p.getX(i) * .92 + p.getZ(i) * .73);
      const purple = [.38, .045, .23], teal = [.045, .34, .29], cream = [.84, .77, .57];
      const base = purple.map((v, k) => mix(v, teal[k], family));
      c.setXYZ(i, mix(base[0], cream[0], tip), mix(base[1], cream[1], tip), mix(base[2], cream[2], tip));
    } else if (name === 'coral_fan') {
      const lit = clamp((r - .48) / .45, 0, 1);
      const patch = .15 + .28 * Math.sin(p.getX(i) * 1.23 + p.getY(i) * .81);
      c.setXYZ(i, mix(.57, .94, lit) * (1 - patch * .24), mix(.055, .235, lit), mix(.035, .105, lit) + Math.max(0, patch) * .16);
    } else if (name === 'sponge_cluster') {
      c.setXYZ(i, Math.min(.96, r * 1.24), g * .85, b * .67);
    }
  }
  c.needsUpdate = true;
}

function reefTissueMaterial(source, name, time) {
  const material = source.clone();
  material.name = 'Living ' + name.replaceAll('_', ' ');
  material.roughness = name === 'sponge_cluster' ? .85 : .73;
  material.customProgramCacheKey = () => 'amaq-living-reef-2';
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uReefTime = time;
    shader.vertexShader = shader.vertexShader.replace('#include <common>', `#include <common>
      varying vec3 vReefLocal;
      varying vec3 vReefWorld;`);
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      vReefLocal = position;`);
    shader.vertexShader = shader.vertexShader.replace('#include <worldpos_vertex>', `#include <worldpos_vertex>
      vec4 reefWorld = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        reefWorld = instanceMatrix * reefWorld;
      #endif
      vReefWorld = (modelMatrix * reefWorld).xyz;`);
    shader.fragmentShader = shader.fragmentShader.replace('#include <common>', `#include <common>
      varying vec3 vReefLocal;
      varying vec3 vReefWorld;
      uniform float uReefTime;
      float reefHash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
      float reefPores(vec3 p) {
        vec3 cell = floor(p), centre = fract(p) - .5;
        centre -= (vec3(reefHash(cell), reefHash(cell + 7.13), reefHash(cell + 19.7)) - .5) * .40;
        float pore = 1.0 - smoothstep(.10, .32, length(centre));
        return pore * step(.20, reefHash(cell + 3.71));
      }
    `);
    shader.fragmentShader = shader.fragmentShader.replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      vec3 porePosition = vReefLocal * 34.0;
      float poreVisibility = 1.0 - smoothstep(.18, .66, max(length(dFdx(porePosition)), length(dFdy(porePosition))));
      float pores = reefPores(porePosition) * poreVisibility;
      float bumpHeight = -pores * .009;
      vec3 sigmaX = dFdx(-vViewPosition), sigmaY = dFdy(-vViewPosition);
      vec3 reefR1 = cross(sigmaY, normal), reefR2 = cross(normal, sigmaX);
      float reefDet = dot(sigmaX, reefR1);
      normal = normalize(abs(reefDet) * normal - sign(reefDet) * (dFdx(bumpHeight) * reefR1 + dFdy(bumpHeight) * reefR2));
      diffuseColor.rgb *= 1.0 - pores * .24;
      vec3 reefUp = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
      float topLight = max(0.0, dot(normal, reefUp));
      vec2 waveUv = vReefWorld.xz * .52;
      float wave = sin(waveUv.x + sin(waveUv.y * 1.4 + uReefTime * .20)) + sin(waveUv.y * 1.13 - uReefTime * .16);
      float movingLight = pow(max(0.0, 1.0 - abs(wave) * 1.6), 6.0);
      diffuseColor.rgb *= 1.0 + topLight * movingLight * .11;
    `);
  };
  return material;
}

// Clusters frame the opening swim lane rather than filling the centre with props.
// Each tuple is x, z, scale, heading, additional elevation above the sand.
const COMPOSITION = {
  coral_antler: [[-13, 14, .82, .7, .05], [14, -8, .76, -.4, .05], [-17, 3, .58, 1.8, .05], [20, -24, .68, 2.4, .05], [-22, -27, .62, -.2, .05], [-11, -8, .48, 1.3, .05]],
  coral_fan: [[-11, 4, .91, .15, .10], [14, 3, .82, -.35, .10], [-17, -16, .76, .38, .10], [19, -21, .66, -.5, .10], [-14, 13, .58, .4, .10], [12, -6, .55, -.7, .10]],
  coral_table: [[-11, -9, 1.12, .4, .10], [15, -4, 1.05, -.7, .10], [-13, 10, .84, 1.8, .10], [11, 6, .70, .5, .10], [-17, -28, .87, -.3, .10]],
  sponge_cluster: [[9, 10, 1.16, -.4, .10], [-19, -3, .94, 1.1, .10], [21, -21, 1.06, 2.3, .10]],
};

export async function loadReefArt({ floor, coarse = false, ceiling = 17, time = { value: 0 }, url = 'assets/models/reef-kit.glb' } = {}) {
  if (typeof floor !== 'function') throw new TypeError('Reef art requires the ocean-floor height function.');
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Original reef model could not load (${response.status}).`);
  const bytes = await response.arrayBuffer(), templates = parseReefGLB(bytes);
  const group = new THREE.Group();
  group.name = 'authored-reef';
  const dummy = new THREE.Object3D();
  let instances = 0, instanceTriangles = 0;
  const assets = [];
  for (const [name, source] of templates) {
    const all = COMPOSITION[name], locations = coarse ? all.slice(0, name === 'sponge_cluster' ? 2 : 3) : all;
    livingPigment(source.geometry, name);
    const mesh = new THREE.InstancedMesh(source.geometry, reefTissueMaterial(source.material, name, time), locations.length);
    mesh.name = `authored-${name}`;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.permeable = true;
    for (let i = 0; i < locations.length; i++) {
      const [x, z, scale, heading, offset] = locations[i];
      const ground = Math.min(floor(x, z) + offset, ceiling - .02);
      const fittedScale = Math.min(scale, Math.max(.01, (ceiling - ground) / source.dimensions[1]));
      dummy.position.set(x, ground, z);
      dummy.rotation.set(0, heading, 0);
      dummy.scale.setScalar(fittedScale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      mesh.setColorAt(i, new THREE.Color().setRGB(1 + .04 * Math.sin(i * 1.7), 1 - .035 * Math.cos(i * 2), 1 - .055 * Math.sin(i + 1)));
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.instanceColor.needsUpdate = true;
    mesh.computeBoundingBox();
    mesh.computeBoundingSphere();
    group.add(mesh);
    instances += locations.length;
    instanceTriangles += source.triangles * locations.length;
    assets.push({ name, triangles: source.triangles, dimensions: source.dimensions, instances: locations.length });
  }
  group.userData.assetStats = { source: 'Original Blender reef sculpture', fileBytes: bytes.byteLength,
    instances, instanceTriangles, drawCalls: group.children.length, assets };
  return group;
}
