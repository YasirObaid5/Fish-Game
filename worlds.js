import * as THREE from './vendor/three.module.min.js';

const canvas = document.querySelector('#world-fx');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.dataset.fx = 'loading';

try {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(52, 1, .1, 40);
  camera.position.z = 8;

  const count = reducedMotion ? 48 : 120;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - .5) * 18;
    positions[i * 3 + 1] = (Math.random() - .5) * 10;
    positions[i * 3 + 2] = Math.random() * -10;
  }

  const pointsGeometry = new THREE.BufferGeometry();
  pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const pointsMaterial = new THREE.PointsMaterial({ color: 0x76e7ef, size: .055, transparent: true, opacity: .44, depthWrite: false });
  const points = new THREE.Points(pointsGeometry, pointsMaterial);
  scene.add(points);

  const rings = new THREE.Group();
  const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xf0cd79, transparent: true, opacity: .2, wireframe: true, depthWrite: false });
  for (let i = 0; i < 7; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.35 + Math.random() * .55, .012, 3, 24), ringMaterial);
    ring.position.set((Math.random() - .5) * 14, (Math.random() - .5) * 8, -1 - Math.random() * 7);
    ring.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    rings.add(ring);
  }
  scene.add(rings);

  const settings = {
    reef: { points: 0x6debf2, rings: 0xffd36e, opacity: .38, speed: .00012 },
    atlas: { points: 0xd9bf82, rings: 0xb86c43, opacity: .24, speed: .00007 },
    void: { points: 0x9df8ff, rings: 0xb48cff, opacity: .72, speed: .00028 },
  };
  let world = document.documentElement.dataset.world || 'reef';
  let pointerX = 0;
  let pointerY = 0;

  function applyWorld(name) {
    world = settings[name] ? name : 'reef';
    const style = settings[world];
    pointsMaterial.color.setHex(style.points);
    pointsMaterial.opacity = style.opacity;
    pointsMaterial.size = world === 'void' ? .085 : .055;
    ringMaterial.color.setHex(style.rings);
    ringMaterial.opacity = world === 'void' ? .48 : .2;
  }

  function resize() {
    const width = innerWidth;
    const height = innerHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
  }

  addEventListener('resize', resize);
  addEventListener('pointermove', event => {
    pointerX = event.clientX / Math.max(innerWidth, 1) - .5;
    pointerY = event.clientY / Math.max(innerHeight, 1) - .5;
  }, { passive: true });
  addEventListener('fish-world-change', event => applyWorld(event.detail));

  function animate(time) {
    const style = settings[world];
    if (!reducedMotion) {
      points.rotation.y = time * style.speed + pointerX * .08;
      points.rotation.x = pointerY * .05;
      rings.rotation.z = time * style.speed * .45;
      rings.rotation.y = Math.sin(time * .00018) * .13 + pointerX * .12;
      const data = pointsGeometry.attributes.position.array;
      for (let i = 1; i < data.length; i += 3) {
        data[i] += world === 'void' ? .0025 : .0012;
        if (data[i] > 5) data[i] = -5;
      }
      pointsGeometry.attributes.position.needsUpdate = true;
    }
    renderer.render(scene, camera);
  }

  applyWorld(world);
  resize();
  renderer.setAnimationLoop(animate);
  document.documentElement.classList.add('webgl-ready');
  document.documentElement.dataset.fx = 'ready';
} catch (error) {
  canvas.hidden = true;
  document.documentElement.dataset.fx = 'fallback';
  console.warn('Three.js ambient layer unavailable; using the 2D fallback.', error);
}
