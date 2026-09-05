import test from 'node:test';
import assert from 'node:assert/strict';
import { SURFACE_Y, WORLD_RADIUS, terrainHeight, createSwimmer, stepSwimmer, triggerFeint, createHunter, stepHunter, sweptSphere } from '../free-swim.mjs';

const run = (state, seconds, input = {}, dt = .025) => {
  const events = [];
  for (let elapsed = 0; elapsed < seconds - 1e-9; elapsed += dt) events.push(...stepSwimmer(state, input, dt));
  return events;
};
const point = (x, y, z) => ({ x, y, z });

test('idle stays still; forward, reverse and full 360-degree turning remain bounded', () => {
  const s = createSwimmer();
  run(s, 2); assert.deepEqual(s.position, point(0, 10, 22));
  run(s, 2, { throttle: 1 }); assert.ok(s.position.z < 7);
  const before = s.position.z;
  run(s, 3, { throttle: -1 }); assert.ok(s.position.z > before + 10);
  run(s, 10, { turn: 1 }); assert.ok(Math.abs(s.yaw) <= Math.PI);
  s.yaw = 0;
  stepSwimmer(s, { lookYaw: Math.PI / 2 }, .025);
  run(s, 1.5, { throttle: 1 }); assert.ok(s.position.x > 10);
  run(s, 3); assert.ok(s.speed < .01, 'release decelerates instead of auto-scrolling');
});

test('pitch steering and independent vertical controls move through all three axes', () => {
  const s = createSwimmer();
  run(s, 1, { lift: -1 }); assert.ok(s.position.y < 4.5);
  run(s, 1, { lift: 1 }); assert.ok(s.velocity.y > 7);
  s.position.y = 4;
  stepSwimmer(s, { lookPitch: .7, lookYaw: .8 }, .025);
  const before = { ...s.position };
  run(s, .5, { throttle: 1 });
  assert.ok(s.position.x > before.x && s.position.y > before.y && s.position.z < before.z);
  stepSwimmer(s, { lookPitch: 500 }, .025); assert.equal(s.pitch, 1.35);
  stepSwimmer(s, { lookPitch: -500 }, .025); assert.equal(s.pitch, -1.35);
});

test('diagonal inputs have no extra speed, and timestep clamp prevents large teleports', () => {
  const straight = createSwimmer(), diagonal = createSwimmer();
  straight.position.y = diagonal.position.y = -1;
  run(straight, 1, { throttle: 1 });
  run(diagonal, 1, { throttle: 1, lift: 1 });
  assert.ok(diagonal.speed <= 10 + 1e-8);
  assert.ok(Math.abs(straight.speed - diagonal.speed) < .01);
  const small = createSwimmer(), huge = createSwimmer();
  stepSwimmer(small, { throttle: 1, turn: 1 }, .05);
  stepSwimmer(huge, { throttle: 1, turn: 1 }, 99);
  assert.deepEqual(huge, small);
  const snapshot = structuredClone(huge);
  stepSwimmer(huge, { throttle: 1 }, NaN);
  stepSwimmer(huge, { throttle: 1 }, -1);
  assert.deepEqual(huge, snapshot);
});

test('surface breach is a short ballistic arc with splash, not controllable flight', () => {
  const s = createSwimmer();
  s.position.y = SURFACE_Y - 1;
  s.velocity.y = 8;
  let maxHeight = 0, breaches = 0, splashes = 0, firstAirTime = 0;
  for (let i = 0; i < 200; i++) {
    const wasAir = s.airborne;
    const events = stepSwimmer(s, { lift: 1, boost: true }, .025);
    for (const e of events) { if (e.type === 'breach') breaches++; if (e.type === 'splash') splashes++; }
    if (wasAir && !splashes) { firstAirTime += .025; assert.equal(s.boost, 0); }
    maxHeight = Math.max(maxHeight, s.position.y);
  }
  assert.equal(breaches, 1); assert.equal(splashes, 1);
  assert.ok(maxHeight > SURFACE_Y + 1.5 && maxHeight < SURFACE_Y + 3);
  assert.ok(firstAirTime < 1.4);
  assert.equal(s.airborne, false); assert.ok(s.position.y <= SURFACE_Y);
  assert.equal(s.breachReady, false);
  run(s, .75, { lift: -1 }); assert.equal(s.breachReady, true, 'diving rearms another jump');
});

test('boost has cooldown, cannot activate midair, and dive never clips through terrain', () => {
  const s = createSwimmer();
  stepSwimmer(s, { throttle: 1, boost: true }, .025);
  assert.equal(s.cooldown, 4); assert.equal(s.boost, .72);
  run(s, 1, { boost: true }); assert.equal(s.boost, 0); assert.ok(s.cooldown > 2.9);
  s.airborne = true; s.position.y = 20; s.cooldown = 0;
  stepSwimmer(s, { boost: true }, .025); assert.equal(s.boost, 0); assert.equal(s.cooldown, 0);
  s.airborne = false; s.position.y = 4;
  run(s, 8, { lift: -1, throttle: 1, turn: .3 });
  assert.ok(s.position.y >= terrainHeight(s.position.x, s.position.z) + .7 - 1e-8);
});

test('ocean edge current and final constraint preserve a continuous finite world', () => {
  const s = createSwimmer(); s.position = point(143, 4, 0); s.yaw = Math.PI / 2; s.velocity.x = 21;
  let warnings = 0;
  for (let i = 0; i < 240; i++) {
    const before = { ...s.position };
    warnings += stepSwimmer(s, { throttle: 1, boost: i === 0 }, .05).filter(e => e.type === 'boundary').length;
    assert.ok(Math.hypot(s.position.x, s.position.z) <= WORLD_RADIUS + 1e-8);
    assert.ok(Math.hypot(s.position.x - before.x, s.position.y - before.y, s.position.z - before.z) < 1.5);
  }
  assert.ok(warnings <= 1); assert.ok(s.position.x > 130);
});

test('swept relative collisions cover every axis, crossing motion and non-contact', () => {
  const zero = point(0, 0, 0);
  for (const axis of ['x', 'y', 'z']) {
    const a = { ...zero, [axis]: -10 }, b = { ...zero, [axis]: 10 };
    assert.equal(sweptSphere(a, b, zero, zero, .1), true);
    assert.equal(sweptSphere(a, b, b, a, .1), true);
  }
  assert.equal(sweptSphere(point(-10, 2, 0), point(10, 2, 0), zero, zero, 1), false);
  assert.equal(sweptSphere(zero, zero, point(1, 0, 0), point(1, 0, 0), 1), true);
  assert.equal(sweptSphere(zero, zero, zero, zero, -1), false);
});

test('hunters warn before chasing and bounded steering lets the prey out-turn them', () => {
  const s = createSwimmer(), h = createHunter('alpha', point(0, 10, 5));
  const events = stepHunter(h, s, .05);
  assert.equal(h.mode, 'telegraph'); assert.equal(events[0].type, 'alert');
  for (let i = 0; i < 20; i++) {
    assert.ok(!stepHunter(h, s, .05).some(e => e.type === 'attack'));
    assert.equal(h.mode, 'telegraph');
  }
  for (let i = 0; i < 5; i++) stepHunter(h, s, .05);
  assert.equal(h.mode, 'chase');
  h.yaw = 0; s.position = point(0, 10, h.position.z + 5);
  stepHunter(h, s, .05); assert.ok(Math.abs(h.yaw) <= 1.05 * .05 + 1e-8);
});

test('distance, safe haven and a surface jump each break a chase once', () => {
  for (const reason of ['range', 'safe', 'surface']) {
    const s = createSwimmer(), h = createHunter(reason, point(0, 10, 0));
    h.mode = 'chase';
    if (reason === 'range') s.position.z = 60;
    if (reason === 'surface') s.airborne = true;
    const events = stepHunter(h, s, .05, { safe: reason === 'safe' });
    assert.equal(h.mode, 'recover');
    assert.equal(events.length, 1); assert.equal(events[0].type, 'escaped'); assert.equal(events[0].reason, reason);
    assert.equal(stepHunter(h, s, .05).length, 0);
  }
});

test('a hunter attack uses swept 3D contact and grants a six-second recovery window', () => {
  const s = createSwimmer(), h = createHunter('crossing', point(0, 10, 0));
  h.mode = 'chase'; s.previousPosition = point(-8, 10, 0); s.position = point(8, 10, 0);
  const events = stepHunter(h, s, .05);
  assert.ok(events.some(e => e.type === 'attack')); assert.equal(h.mode, 'recover');
  for (let i = 0; i < 100; i++) assert.ok(!stepHunter(h, s, .05).some(e => e.type === 'attack'));
  assert.equal(h.mode, 'recover');
});

test('feint makes a continuous left-right escape, respects cooldown and cannot activate in air', () => {
  const s = createSwimmer();
  assert.equal(triggerFeint(s), true);
  assert.equal(triggerFeint(s), false);
  assert.equal(s.feintCooldown, 12);
  let minimumX = 0, maximumX = 0, totalTravel = 0;
  for (let i = 0; i < 40; i++) {
    const before = { ...s.position };
    stepSwimmer(s, {}, .025);
    minimumX = Math.min(minimumX, s.position.x);
    maximumX = Math.max(maximumX, s.position.x);
    const travel = Math.hypot(s.position.x - before.x, s.position.y - before.y, s.position.z - before.z);
    assert.ok(travel < .3, 'feint never teleports through a collision');
    totalTravel += travel;
  }
  assert.ok(minimumX < -.6, 'readable first fake');
  assert.ok(maximumX > .7 && maximumX < 3, 'bounded committed escape');
  assert.ok(totalTravel > 2 && totalTravel < 5);
  assert.equal(s.feintTime, 0);
  assert.equal(triggerFeint(s), false);
  run(s, 11.1);
  assert.equal(triggerFeint(s), true);
  s.feintTime = 0; s.feintCooldown = 0; s.airborne = true; s.position.y = 20;
  assert.equal(triggerFeint(s), false);
  stepSwimmer(s, { skill: true }, .025);
  assert.equal(s.feintTime, 0); assert.equal(s.feintCooldown, 0);
});

test('feint follows the heading and cannot breach terrain or the ocean boundary', () => {
  const s = createSwimmer(); s.yaw = Math.PI / 2; s.position = point(0, 4, 0);
  stepSwimmer(s, { skill: true }, .025);
  run(s, .65);
  assert.ok(s.position.z > .7); assert.ok(Math.abs(s.position.x) < .01);
  s.feintCooldown = 0; s.position = point(149.8, terrainHeight(149.8, 0) + .7, 0); s.yaw = 0;
  triggerFeint(s);
  for (let i = 0; i < 40; i++) {
    stepSwimmer(s, { lift: -1 }, .025);
    assert.ok(Math.hypot(s.position.x, s.position.z) <= WORLD_RADIUS + 1e-8);
    assert.ok(s.position.y >= terrainHeight(s.position.x, s.position.z) + .7 - 1e-8);
  }
});

test('a chase cannot persist forever and hunter limits remain valid on a long patrol', () => {
  const s = createSwimmer(), h = createHunter('timeout', point(0, 10, 0));
  h.mode = 'chase'; h.timer = 10.49;
  assert.ok(stepHunter(h, s, .05).some(e => e.type === 'escaped' && e.reason === 'timeout'));
  s.position = point(0, 30, 0); s.airborne = true;
  for (let i = 0; i < 3000; i++) {
    stepHunter(h, s, .05);
    assert.ok(Math.abs(h.yaw) <= Math.PI);
    assert.ok(h.position.y <= SURFACE_Y - .7);
    assert.ok(h.position.y >= terrainHeight(h.position.x, h.position.z) + 1 - 1e-8);
    assert.ok(Math.hypot(h.position.x, h.position.z) <= WORLD_RADIUS + 1e-8);
  }
});
