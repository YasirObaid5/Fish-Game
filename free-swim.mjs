// Renderer-independent, bounded 3D swimming and readable, escapable predators.
export const SURFACE_Y = 18;
export const WORLD_RADIUS = 150;
export const terrainHeight = (x, z) => -7 + Math.sin(x * .045) * 2.2 + Math.cos(z * .05) * 1.8 + Math.sin((x + z) * .07) * .8;

const TAU = Math.PI * 2;
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const finite = (n, fallback = 0) => Number.isFinite(n) ? n : fallback;
const axis = n => clamp(finite(n), -1, 1);
const angle = n => ((n + Math.PI) % TAU + TAU) % TAU - Math.PI;
const copy = p => ({ x: p.x, y: p.y, z: p.z });
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
const approach = (a, b, rate, dt) => a + (b - a) * (1 - Math.exp(-rate * dt));
const moveAngle = (a, b, step) => angle(a + clamp(angle(b - a), -step, step));
const direction = (yaw, pitch) => ({ x: Math.sin(yaw) * Math.cos(pitch), y: Math.sin(pitch), z: -Math.cos(yaw) * Math.cos(pitch) });

export function createSwimmer() {
  return {
    position: { x: 0, y: 10, z: 22 }, previousPosition: { x: 0, y: 10, z: 22 },
    velocity: { x: 0, y: 0, z: 0 }, yaw: 0, pitch: 0,
    boost: 0, cooldown: 0, airborne: false, airTime: 0, breachReady: true,
    speed: 0, depth: 8, distance: 0, elapsed: 0, boundaryWarning: false,
    feintTime: 0, feintCooldown: 0,
  };
}

/** The unlock is enforced by the game; this module enforces physical/cooldown rules. */
export function triggerFeint(state) {
  if (state.airborne || state.feintCooldown > 0 || state.feintTime > 0) return false;
  state.feintTime = .65;
  state.feintCooldown = 12;
  return true;
}

/** Input axes are signed; lookYaw/lookPitch are angular deltas, not velocities. */
export function stepSwimmer(state, input = {}, delta = 0) {
  const dt = clamp(finite(delta), 0, .05);
  const events = [];
  if (!dt) return events;
  const p = state.position, v = state.velocity;
  state.previousPosition = copy(p);
  state.elapsed += dt;
  state.cooldown = Math.max(0, state.cooldown - dt);
  state.boost = Math.max(0, state.boost - dt);
  state.feintTime = Math.max(0, state.feintTime - dt);
  state.feintCooldown = Math.max(0, state.feintCooldown - dt);
  if (input.skill) triggerFeint(state);
  state.yaw = angle(state.yaw + axis(input.turn) * 1.75 * dt + clamp(finite(input.lookYaw), -Math.PI, Math.PI));
  state.pitch = clamp(state.pitch + clamp(finite(input.lookPitch), -Math.PI, Math.PI), -1.35, 1.35);

  if (input.boost && state.cooldown === 0 && !state.airborne) {
    state.boost = .72;
    state.cooldown = 4;
  }

  if (state.airborne) {
    // No thrust in air: holding rise or repeatedly pressing boost cannot fly.
    state.airTime += dt;
    v.y -= 15 * dt;
    v.x *= Math.exp(-.18 * dt);
    v.z *= Math.exp(-.18 * dt);
  } else {
    if (p.y < SURFACE_Y - 1.2) state.breachReady = true;
    let throttle = axis(input.throttle);
    if (state.boost > 0 && throttle === 0 && !axis(input.lift)) throttle = 1;
    // View pitch never changes forward thrust: depth has its own explicit control.
    const heading = direction(state.yaw, 0);
    const target = { x: heading.x * throttle, y: heading.y * throttle + axis(input.lift) * .8, z: heading.z * throttle };
    const length = Math.max(1, Math.hypot(target.x, target.y, target.z));
    const speed = state.boost > 0 ? 21 : throttle < 0 ? 7.5 : 10;
    for (const key of ['x', 'y', 'z']) target[key] = target[key] / length * speed;
    if (state.feintTime > 0) {
      const elapsed = .65 - state.feintTime;
      // A small left fake, a committed right escape, then a gentle recovery.
      const lateral = elapsed < .16 ? -9 : elapsed < .56 ? 7.5 : 0;
      target.x += Math.cos(state.yaw) * lateral;
      target.z += Math.sin(state.yaw) * lateral;
    }
    // A gradually strengthening inward current makes the finite reef legible.
    const radius = Math.hypot(p.x, p.z);
    if (radius > WORLD_RADIUS - 18) {
      const nx = p.x / radius, nz = p.z / radius;
      const strength = clamp((radius - (WORLD_RADIUS - 18)) / 16, 0, 1);
      const outward = Math.max(0, target.x * nx + target.z * nz);
      target.x -= nx * (outward * strength + 5 * strength);
      target.z -= nz * (outward * strength + 5 * strength);
    }
    const response = state.feintTime > 0 ? 30 : state.boost > 0 ? 5.5 : 3.6;
    v.x = approach(v.x, target.x, response, dt);
    v.y = approach(v.y, target.y, response, dt);
    v.z = approach(v.z, target.z, response, dt);
  }

  p.x += v.x * dt;
  p.y += v.y * dt;
  p.z += v.z * dt;
  if (!state.airborne && p.y > SURFACE_Y) {
    if (v.y > 2.2 && state.breachReady) {
      state.airborne = true;
      state.airTime = 0;
      state.breachReady = false;
      state.boost = 0;
      state.feintTime = 0;
      v.y = Math.min(v.y, 8.5);
      // Remove the integration overshoot so launch height is bounded at every dt.
      p.y = SURFACE_Y;
      events.push({ type: 'breach', position: copy(p) });
    } else {
      p.y = SURFACE_Y;
      v.y = Math.min(0, v.y);
    }
  } else if (state.airborne && p.y <= SURFACE_Y) {
    state.airborne = false;
    state.airTime = 0;
    // Entry resistance preserves a visible dive without a harsh stop.
    v.y = Math.min(-2, v.y * .58);
    events.push({ type: 'splash', position: { x: p.x, y: SURFACE_Y, z: p.z } });
  }

  const floor = terrainHeight(p.x, p.z) + .7;
  if (p.y < floor) { p.y = floor; v.y = Math.max(0, v.y); }
  const radius = Math.hypot(p.x, p.z);
  if (radius > WORLD_RADIUS - 10 && !state.boundaryWarning) {
    state.boundaryWarning = true;
    events.push({ type: 'boundary', position: copy(p) });
  } else if (radius < WORLD_RADIUS - 14) state.boundaryWarning = false;
  if (radius > WORLD_RADIUS) {
    // Only correct a frame's overshoot; no wraparound or teleport to another reef.
    const nx = p.x / radius, nz = p.z / radius;
    p.x = nx * WORLD_RADIUS;
    p.z = nz * WORLD_RADIUS;
    const outward = Math.max(0, v.x * nx + v.z * nz);
    v.x -= nx * outward;
    v.z -= nz * outward;
  }
  state.speed = Math.hypot(v.x, v.y, v.z);
  state.depth = Math.max(0, SURFACE_Y - p.y);
  state.distance += distance(p, state.previousPosition);
  return events;
}

/** Relative swept spheres: handles simultaneous motion in any 3D direction. */
export function sweptSphere(a0, a1, b0, b1, radius) {
  if (!Number.isFinite(radius) || radius < 0) return false;
  const x = a0.x - b0.x, y = a0.y - b0.y, z = a0.z - b0.z;
  const dx = a1.x - b1.x - x, dy = a1.y - b1.y - y, dz = a1.z - b1.z - z;
  const speed2 = dx * dx + dy * dy + dz * dz;
  const t = speed2 > 1e-12 ? clamp(-(x * dx + y * dy + z * dz) / speed2, 0, 1) : 0;
  return (x + dx * t) ** 2 + (y + dy * t) ** 2 + (z + dz * t) ** 2 <= radius * radius;
}

export function createHunter(id, position) {
  const seed = [...String(id)].reduce((value, char) => (value * 31 + char.charCodeAt(0)) >>> 0, 7);
  return {
    id, position: copy(position), previousPosition: copy(position), home: copy(position),
    velocity: { x: 0, y: 0, z: 0 }, yaw: angle((seed % 628) / 100), pitch: 0,
    mode: 'patrol', timer: 0, elapsed: (seed % 100) / 10,
    attackCooldown: 0, lunge: 0, lungeCooldown: 1.8, warning: 0,
  };
}

/** A warning, a committed chase and recovery: never omniscient/perfect homing. */
export function stepHunter(hunter, swimmer, delta, { safe = false } = {}) {
  const dt = clamp(finite(delta), 0, .05), events = [];
  if (!dt) return events;
  const h = hunter, p = h.position, prey = swimmer.position;
  h.previousPosition = copy(p);
  h.timer += dt;
  h.elapsed += dt;
  h.attackCooldown = Math.max(0, h.attackCooldown - dt);
  h.lunge = Math.max(0, h.lunge - dt);
  h.lungeCooldown = Math.max(0, h.lungeCooldown - dt);
  const separation = distance(p, prey);
  const unavailable = safe || swimmer.airborne;
  if ((h.mode === 'telegraph' || h.mode === 'chase') && (unavailable || separation > 36 || (h.mode === 'chase' && h.timer >= 10.5))) {
    const reason = safe ? 'safe' : swimmer.airborne ? 'surface' : separation > 36 ? 'range' : 'timeout';
    events.push({ type: 'escaped', id: h.id, reason, position: copy(p) });
    h.mode = 'recover'; h.timer = 0; h.lunge = 0; h.warning = 0;
  }
  if (h.mode === 'patrol' && !unavailable && separation < 24) {
    h.mode = 'telegraph'; h.timer = 0; h.warning = 1;
    events.push({ type: 'alert', id: h.id, position: copy(p) });
  } else if (h.mode === 'telegraph' && h.timer >= 1.15) {
    h.mode = 'chase'; h.timer = 0; h.warning = 0; h.lungeCooldown = 1.2;
  } else if (h.mode === 'recover' && h.timer >= 6) {
    h.mode = 'patrol'; h.timer = 0;
  }

  let target, speed, turnRate;
  if (h.mode === 'telegraph') {
    target = prey; speed = .7; turnRate = .95;
  } else if (h.mode === 'chase') {
    // Lunges commit to their direction; a late turn can make the hunter overshoot.
    if (h.lungeCooldown === 0 && separation < 15) { h.lunge = .65; h.lungeCooldown = 2.8; }
    target = prey; speed = h.lunge > 0 ? 13.5 : 9.2; turnRate = h.lunge > 0 ? .35 : 1.05;
  } else if (h.mode === 'recover') {
    target = { x: p.x + (p.x - prey.x), y: clamp(h.home.y, terrainHeight(p.x, p.z) + 2, SURFACE_Y - 2), z: p.z + (p.z - prey.z) };
    speed = 5; turnRate = 1.2;
  } else {
    target = { x: h.home.x + Math.sin(h.elapsed * .22) * 8, y: h.home.y + Math.sin(h.elapsed * .33) * 2, z: h.home.z + Math.cos(h.elapsed * .22) * 8 };
    speed = 2.6; turnRate = .8;
  }
  // The boundary current also keeps hunters inside the playable ocean.
  if (Math.hypot(p.x, p.z) > WORLD_RADIUS - 5) target = { x: 0, y: target.y, z: 0 };
  const dx = target.x - p.x, dy = target.y - p.y, dz = target.z - p.z;
  h.yaw = moveAngle(h.yaw, Math.atan2(dx, -dz), turnRate * dt);
  h.pitch = clamp(h.pitch + clamp(Math.atan2(dy, Math.hypot(dx, dz)) - h.pitch, -turnRate * dt, turnRate * dt), -1.3, 1.3);
  const heading = direction(h.yaw, h.pitch);
  for (const key of ['x', 'y', 'z']) {
    h.velocity[key] = approach(h.velocity[key], heading[key] * speed, 3.5, dt);
    p[key] += h.velocity[key] * dt;
  }
  p.y = clamp(p.y, terrainHeight(p.x, p.z) + 1, SURFACE_Y - .7);
  const r = Math.hypot(p.x, p.z);
  if (r > WORLD_RADIUS) { p.x *= WORLD_RADIUS / r; p.z *= WORLD_RADIUS / r; }
  if (h.mode === 'chase' && !unavailable && h.attackCooldown === 0 && sweptSphere(h.previousPosition, p, swimmer.previousPosition || prey, prey, 1.35)) {
    events.push({ type: 'attack', id: h.id, position: copy(p) });
    h.attackCooldown = 3; h.mode = 'recover'; h.timer = 0; h.lunge = 0;
  }
  return events;
}
