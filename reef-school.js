import * as T from './vendor/three.module.min.js';

/** Native anatomy faces -Z; the forked tail extends toward +Z. */
export function createReefSchoolGeometry() {
  const positions = [], colors = [], uvs = [], indices = [];
  const silver = new T.Color(0xb2d9d9), blue = new T.Color(0x448a9a);
  const back = new T.Color(0x163b48), belly = new T.Color(0xd4ddcd);
  const gold = new T.Color(0xbca769), stripe = new T.Color(0x244859);
  const point = (x, y, z, color, u = z + .5, v = y * 2 + .5) => {
    const index = positions.length / 3;
    positions.push(x, y, z); colors.push(color.r, color.g, color.b); uvs.push(u, v);
    return index;
  };

  // Sculpted cross sections: a small snout, deep shoulder, narrow caudal
  // peduncle. Unlike an ellipsoid, the back and belly do not mirror the head.
  const rings = [
    [-.50, .010, .014, -.006], [-.475, .032, .043, -.004],
    [-.40, .058, .095, .008], [-.29, .080, .143, .013],
    [-.13, .089, .165, .010], [.035, .079, .148, .004],
    [.20, .060, .106, -.003], [.34, .036, .061, -.006],
    [.445, .021, .032, -.002], [.50, .012, .025, 0],
  ];
  const radial = 14;
  for (let r = 0; r < rings.length; r++) {
    const [z, width, height, offset] = rings[r];
    for (let j = 0; j <= radial; j++) {
      const a = j / radial * Math.PI * 2, vertical = Math.sin(a);
      const x = Math.cos(a) * width, y = vertical * height + offset;
      const c = silver.clone().lerp(blue, T.MathUtils.smoothstep(vertical, -.05, .72));
      c.lerp(back, T.MathUtils.smoothstep(vertical, .62, .98) * .9);
      c.lerp(belly, T.MathUtils.smoothstep(-vertical, .15, .85) * .72);
      // A dark lateral ribbon and a narrow sandy highlight identify anatomy
      // even when a school occupies only a handful of pixels on screen.
      const ribbon = Math.exp(-Math.pow((vertical - .23) / .15, 2));
      c.lerp(stripe, ribbon * .78);
      const yellowLine = Math.exp(-Math.pow((vertical + .13) / .12, 2));
      c.lerp(gold, yellowLine * .32);
      if (r === 2) c.multiplyScalar(.75); // curved operculum / gill seam
      if (r === 0) c.lerp(stripe, .75); // small mouth, not a blunt white nose
      point(x, y, z, c, (z + .5) / 1.2, j / radial);
    }
  }
  for (let r = 0; r < rings.length - 1; r++) {
    for (let j = 0; j < radial; j++) {
      const a = r * (radial + 1) + j, b = a + radial + 1;
      // Winding faces outward; this matters with a one-sided lit material.
      indices.push(a, a + 1, b, b, a + 1, b + 1);
    }
  }
  const nose = point(0, -.006, -.504, stripe), tailCenter = point(0, 0, .502, blue);
  for (let j = 0; j < radial; j++) {
    indices.push(nose, j + 1, j);
    const a = (rings.length - 1) * (radial + 1) + j;
    indices.push(tailCenter, a, a + 1);
  }

  // Closed, wafer-thin fin meshes; both faces render without DoubleSide.
  function fin(contour, plane = 'yz', thickness = .0035) {
    const projected = contour.map(p => new T.Vector2(p[plane === 'yz' ? 2 : 0], p[1]));
    const triangles = T.ShapeUtils.triangulateShape(projected, []);
    const base = positions.length / 3;
    for (const side of [-1, 1]) {
      for (let i = 0; i < contour.length; i++) {
        const p = contour[i], c = blue.clone().lerp(gold, i ? .70 : .12);
        if (i === 1 || i === contour.length - 1) c.lerp(stripe, .42);
        point(p[0] + (plane === 'yz' ? side * thickness : 0), p[1],
          p[2] + (plane === 'xy' ? side * thickness : 0), c);
      }
    }
    const n = contour.length;
    for (const [a, b, c] of triangles) {
      indices.push(base + a, base + b, base + c);
      indices.push(base + n + c, base + n + b, base + n + a);
    }
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      indices.push(base + i, base + n + i, base + j,
        base + j, base + n + i, base + n + j);
    }
  }
  fin([[0, 0, .435], [0, .078, .51], [0, .245, .715],
    [0, .184, .733], [0, .065, .635], [0, 0, .558],
    [0, -.065, .635], [0, -.184, .733], [0, -.245, .715], [0, -.078, .51]]);
  fin([[0, .128, -.28], [0, .276, -.105], [0, .238, -.065],
    [0, .147, .23], [0, .058, .33], [0, .081, .20]]);
  fin([[0, -.116, -.06], [0, -.218, .10], [0, -.182, .15], [0, -.063, .32]]);
  for (const side of [-1, 1]) {
    fin([[side * .069, -.022, -.28], [side * .237, -.094, -.064],
      [side * .185, -.116, .01], [side * .056, -.037, -.10]], 'xy', .0025);
    fin([[side * .036, -.113, -.11], [side * .073, -.203, .068],
      [side * .032, -.105, .12]], 'xy', .002);
  }

  function eyeGeometry(centerX, radius, color, offset = 0) {
    const source = new T.SphereGeometry(radius, 8, 5);
    source.scale(.28, 1, 1);
    source.translate(centerX + Math.sign(centerX) * offset, .040, -.389);
    const base = positions.length / 3, p = source.attributes.position, uv = source.attributes.uv;
    for (let i = 0; i < p.count; i++) point(p.getX(i), p.getY(i), p.getZ(i), color, uv.getX(i), uv.getY(i));
    for (const index of source.index.array) indices.push(base + index);
    source.dispose();
  }
  for (const side of [-1, 1]) {
    eyeGeometry(side * .054, .031, new T.Color(0xc6b97d));
    eyeGeometry(side * .054, .021, new T.Color(0x061721), .008);
    eyeGeometry(side * .054, .006, new T.Color(0xd8eeee), .014);
  }

  const geometry = new T.BufferGeometry();
  geometry.name = 'reef-fusilier-anatomy';
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  geometry.setAttribute('uv', new T.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  // Average the UV seam's normals so the back never displays a hard seam.
  const normals = geometry.attributes.normal, average = new T.Vector3();
  for (let r = 0; r < rings.length; r++) {
    const a = r * (radial + 1), b = a + radial;
    average.set(normals.getX(a) + normals.getX(b), normals.getY(a) + normals.getY(b), normals.getZ(a) + normals.getZ(b)).normalize();
    normals.setXYZ(a, average.x, average.y, average.z); normals.setXYZ(b, average.x, average.y, average.z);
  }
  geometry.computeBoundingBox(); geometry.computeBoundingSphere();
  geometry.userData.forward = '-Z';
  geometry.userData.triangles = indices.length / 3;
  return geometry;
}

/** Heading for x = cos(angle), z = .7 sin(angle), travelling with angle. */
export function reefSchoolYaw(angle) {
  return Math.atan2(Math.sin(angle), -.7 * Math.cos(angle));
}

/** Optional single-material, single-draw-call swimming for InstancedMesh. */
export function createReefSchoolMaterial(time = { value: 0 }) {
  const material = new T.MeshStandardMaterial({
    name: 'silver-fusilier-scales', color: 0xffffff,
    vertexColors: true, roughness: .38, metalness: .24,
  });
  material.customProgramCacheKey = () => 'reef-school-tail-flex-v1';
  material.onBeforeCompile = shader => {
    shader.uniforms.schoolTime = time;
    shader.vertexShader = 'uniform float schoolTime;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `
      #include <begin_vertex>
      float schoolPhase = 0.;
      #ifdef USE_INSTANCING
        schoolPhase = dot(instanceMatrix[3].xz, vec2(.37, .19));
      #endif
      float tailWeight = smoothstep(-.24, .70, position.z);
      transformed.x += sin(schoolTime * 7.5 - position.z * 5.5 + schoolPhase)
                       * tailWeight * tailWeight * .068;
    `);
  };
  return material;
}
