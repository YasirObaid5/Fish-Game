import * as T from './vendor/three.module.min.js';

/**
 * A two-sided dielectric sea boundary, not a caustics texture on the ceiling.
 * Snell's law determines where the sky is visible from below. The remaining
 * underside reflects an intentionally soft, analytic underwater environment.
 * This is an environment approximation, not a screen-space scene reflection.
 */
export function createOceanSurface({
  size = 1260,
  coarse = false,
  time = { value: 0 },
  water = { value: new T.Color(0x126575) },
  sky = 0x80b8db,
  sunDirection = new T.Vector3(-.36, .85, -.39).normalize(),
  surfaceY = 18,
  illumination = 1,
} = {}) {
  const material = new T.ShaderMaterial({
    name: 'Snell-window-ocean',
    side: T.DoubleSide,
    transparent: false,
    depthWrite: true,
    fog: false,
    uniforms: {
      time,
      water,
      sky: { value: new T.Color(sky) },
      sunDirection: { value: sunDirection },
      eye: { value: new T.Vector3() },
      illumination: { value: illumination },
    },
    vertexShader: /* glsl */ `
      uniform float time;
      varying vec3 vOceanWorld;
      void main() {
        // The dense centre follows the viewer, but waves sample absolute world
        // coordinates, so their phase never slides when the camera moves.
        vec3 p = (modelMatrix * vec4(position, 1.)).xyz;
        p.xz += cameraPosition.xz;
        // Keep the gameplay's sea-crossing height exactly in agreement.
        p.y += sin(p.x * .16 + p.z * .12 + time * .72) * .2
             + sin(p.x * .31 - p.z * .24 - time * .55) * .075;
        vOceanWorld = p;
        gl_Position = projectionMatrix * viewMatrix * vec4(vOceanWorld, 1.);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float time;
      uniform vec3 water, sky, sunDirection;
      uniform float illumination;
      varying vec3 vOceanWorld;

      float oceanHash(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * .1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }

      // Value noise and its analytic derivatives. No ridges, cellular edges,
      // rings or repeated bright line patterns are used in this material.
      vec3 oceanNoiseGradient(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        vec2 u = f * f * (3. - 2. * f);
        vec2 du = 6. * f * (1. - f);
        float a = oceanHash(i), b = oceanHash(i + vec2(1., 0.));
        float c = oceanHash(i + vec2(0., 1.)), d = oceanHash(i + vec2(1.));
        float k = a - b - c + d;
        return vec3(a + (b - a) * u.x + (c - a) * u.y + k * u.x * u.y,
          du.x * (b - a + k * u.y), du.y * (c - a + k * u.x));
      }

      float oceanClouds(vec2 p) {
        mat2 rotate = mat2(.8, -.6, .6, .8);
        float n = oceanNoiseGradient(p).x * .58;
        p = rotate * p * 2.07 + 13.2;
        n += oceanNoiseGradient(p).x * .28;
        return n + oceanNoiseGradient(rotate * p * 2.11 + 7.3).x * .14;
      }

      vec3 oceanSky(vec3 direction, bool includeSun) {
        float elevation = max(direction.y, 0.);
        vec3 horizon = vec3(.65, .78, .79);
        vec3 zenith = mix(sky, vec3(.13, .32, .55), .35);
        vec3 color = mix(horizon, zenith, smoothstep(0., .88, elevation));
        vec2 cloudUV = direction.xz / max(.17, direction.y) * 2.3;
        cloudUV += vec2(time * .004, time * .0012);
        float clouds = smoothstep(.53, .76, oceanClouds(cloudUV));
        clouds *= smoothstep(.025, .27, elevation) * .58;
        color = mix(color, vec3(.91, .94, .93), clouds);
        if (includeSun) {
          float sunDot = max(0., dot(direction, sunDirection));
          float antialias = max(fwidth(sunDot), .000016);
          float disk = smoothstep(.99989 - antialias, .999975 + antialias, sunDot);
          color += vec3(1., .90, .69) * (disk * 6. + pow(sunDot, 58.) * .22);
        }
        return color * illumination;
      }

      void main() {
        vec2 p = vOceanWorld.xz;
        vec3 toEye = normalize(cameraPosition - vOceanWorld);
        float distanceToEye = length(cameraPosition - vOceanWorld);
        float a = p.x * .16 + p.y * .12 + time * .72;
        float b = p.x * .31 - p.y * .24 - time * .55;
        vec2 slope = vec2(cos(a) * .032 + cos(b) * .02325,
                          cos(a) * .024 - cos(b) * .018);
        mat2 turn = mat2(.8, -.6, .6, .8);
        vec3 broad = oceanNoiseGradient(p * .28 + vec2(time * .075, -time * .041));
        vec3 middle = oceanNoiseGradient(turn * p * .71 + vec2(-time * .10, time * .034));
        vec3 fine = oceanNoiseGradient(p * 1.67 + vec2(time * .16, time * .055));
        float detail = 1. - smoothstep(25., 190., distanceToEye);
        slope += broad.yz * .092 + transpose(turn) * middle.yz * .041 * detail;
        slope += fine.yz * .017 * detail * detail;
        vec3 normal = normalize(vec3(-slope.x, 1., -slope.y));
        vec3 color;

        if (cameraPosition.y < vOceanWorld.y) {
          vec3 incident = -toEye;
          float cosWater = clamp(dot(incident, normal), 0., 1.);
          const float eta = 1.333;
          float discriminant = 1. - eta * eta * (1. - cosWater * cosWater);
          float cosAir = sqrt(max(0., discriminant));
          vec3 refracted = normalize((incident - normal * cosWater) * eta
                                    + normal * max(.0001, cosAir));

          // Exact dielectric Fresnel, smoothly antialiased at the critical angle.
          float rs = (eta * cosWater - cosAir) / max(.0001, eta * cosWater + cosAir);
          float rp = (cosWater - eta * cosAir) / max(.0001, cosWater + eta * cosAir);
          float fresnel = clamp((rs * rs + rp * rp) * .5, 0., 1.);
          float windowEdge = max(fwidth(discriminant) * 1.25, .015);
          float transmission = smoothstep(-windowEdge, windowEdge, discriminant) * (1. - fresnel);

          // Beyond Snell's window the sea, not luminous sky lines, is reflected.
          vec3 reflected = reflect(incident, normal);
          float down = clamp(-reflected.y, 0., 1.);
          float patches = oceanNoiseGradient(p * .022 + reflected.xz * 3.).x;
          vec3 reflection = mix(water * .38, water * .76 + vec3(.012, .025, .022), down);
          reflection *= .78 + .28 * patches;
          vec3 transmitted = oceanSky(refracted, true);
          // This surface is lit through water; distance absorption belongs to the
          // shared depth compositor, which can also attenuate the real scene.
          color = mix(reflection, transmitted * .82, transmission);
        } else {
          vec3 reflected = reflect(-toEye, normal);
          reflected.y = abs(reflected.y);
          float viewCos = clamp(dot(toEye, normal), 0., 1.);
          float fresnel = .0204 + .9796 * pow(1. - viewCos, 5.);
          vec3 reflection = oceanSky(normalize(reflected), false);
          vec3 body = mix(water * .35, vec3(.006, .071, .102), .62);
          float cloudShade = .83 + .17 * oceanNoiseGradient(p * .019 + time * .009).x;
          color = mix(body * cloudShade, reflection, fresnel);

          // Sun glitter is restricted to its reflected path. Derivative-based
          // broadening prevents tiny high-frequency highlights from crawling.
          vec3 halfVector = normalize(toEye + sunDirection);
          float nh = max(dot(normal, halfVector), 0.);
          float roughness = .085 + min(.055, length(fwidth(normal)) * 1.7);
          float alpha2 = pow(roughness, 4.);
          float denominator = nh * nh * (alpha2 - 1.) + 1.;
          float distribution = alpha2 / max(.000002, 3.14159265 * denominator * denominator);
          float sunlight = min(7., distribution * .018) * max(0., dot(normal, sunDirection));
          color += vec3(1., .88, .61) * sunlight * illumination;
        }
        gl_FragColor = vec4(max(color, vec3(0.)), 1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  });
  const segments = coarse ? 112 : 160;
  const geometry = new T.PlaneGeometry(2, 2, segments, segments);
  geometry.rotateX(-Math.PI / 2);
  // Quadratic spacing invests the same triangle budget close to the camera.
  // The first desktop ring is ~10 cm wide, instead of an almost 8 m tile.
  const points = geometry.attributes.position;
  for (let i = 0; i < points.count; i++) {
    const x = points.getX(i), z = points.getZ(i);
    points.setXYZ(i, Math.sign(x) * x * x * size * .5, 0,
      Math.sign(z) * z * z * size * .5);
  }
  geometry.computeBoundingSphere();
  const mesh = new T.Mesh(geometry, material);
  mesh.name = 'dielectric-ocean-surface';
  mesh.position.y = surfaceY;
  mesh.frustumCulled = false;
  mesh.userData.oceanBoundary = true;
  return {
    mesh,
    material,
    update(elapsed, camera) {
      time.value = elapsed;
      if (camera) material.uniforms.eye.value.copy(camera.position);
    },
  };
}
