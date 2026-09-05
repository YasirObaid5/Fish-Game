export const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
export const RUN_LENGTH = 800;
export const RUSH_TARGET = 12;
export function newRun() {
  return { distance: 0, score: 0, pearls: 0, lives: 3, combo: 0, comboTime: 0,
    shield: 0, boost: 0, cooldown: 0, invulnerable: 0, elapsed: 0, ended: false, won: false,
    magnet: 0, frenzy: 0, current: 0, charge: 0, treasures: 0, nearMisses: 0 };
}
export function movement(keys) {
  let x = Number(keys.has('ArrowRight') || keys.has('KeyD')) - Number(keys.has('ArrowLeft') || keys.has('KeyA'));
  let y = Number(keys.has('ArrowUp') || keys.has('KeyW')) - Number(keys.has('ArrowDown') || keys.has('KeyS'));
  const length = Math.hypot(x, y) || 1;
  return { x: x / length, y: y / length };
}
export function advance(run, dt) {
  if (run.ended) return 0;
  const step = clamp(dt, 0, .05);
  const distance = (9 + Math.min(run.distance / 160, 4) + (run.boost > 0 ? 13 : 0) + (run.current > 0 ? 5 : 0)) * step;
  run.distance = Math.min(RUN_LENGTH, run.distance + distance);
  run.elapsed += step;
  for (const key of ['boost', 'cooldown', 'invulnerable', 'comboTime', 'shield', 'magnet', 'frenzy', 'current']) run[key] = Math.max(0, run[key] - step);
  if (!run.comboTime) run.combo = 0;
  if (run.distance >= RUN_LENGTH) { run.ended = true; run.won = true; }
  return distance;
}
export function boost(run) {
  if (run.ended || run.cooldown > 0) return false;
  run.boost = .8; run.cooldown = 3.6;
  return true;
}
// Return the actual delta so feedback and saved score can never disagree.
export function award(run, amount) {
  if (run.ended) return 0;
  const before = run.score;
  run.score = Math.max(0, run.score + Math.round(amount));
  return run.score - before;
}
function chargeRush(run, amount) {
  if (run.frenzy > 0) return;
  run.charge += amount;
  if (run.charge >= RUSH_TARGET) { run.charge = 0; run.frenzy = 8; }
}
export function collect(run, kind = 'pearl') {
  if (run.ended) return 0;
  if (kind === 'shield') { run.shield = 9; return award(run, 15); }
  if (kind === 'magnet') { run.magnet = 10; return award(run, 10); }
  if (kind === 'gate') { run.current = 4; return award(run, 15); }
  if (kind === 'frenzy') { run.frenzy = 8; run.charge = 0; return award(run, 20); }
  if (kind !== 'pearl' && kind !== 'gold') return 0;
  run.combo = Math.min(5, run.combo + 1); run.comboTime = 3.5;
  run.pearls++;
  const delta = award(run, (kind === 'gold' ? 10 : 5) * run.combo * (run.frenzy > 0 ? 2 : 1));
  chargeRush(run, 1);
  return delta;
}
export function openTreasure(run, roll = Math.random()) {
  if (run.ended) return { delta: 0, reward: null };
  run.treasures++;
  if (roll < .4) { run.magnet = 10; return { delta: award(run, 40), reward: 'magnet' }; }
  if (roll < .75) {
    const healed = run.lives < 3;
    run.lives = Math.min(3, run.lives + 1);
    if (!healed) run.shield = 9;
    return { delta: award(run, 40), reward: healed ? 'heal' : 'shield' };
  }
  return { delta: award(run, 100), reward: 'jackpot' };
}
export function nearMiss(run) {
  if (run.ended || run.invulnerable > 0 || run.boost > 0) return 0;
  run.nearMisses++; chargeRush(run, 2);
  return award(run, 8);
}
export function hit(run) {
  if (run.ended || run.invulnerable > 0) return 'immune';
  if (run.boost > 0) { award(run, 25); return 'defeated'; }
  if (run.shield > 0) { run.shield = 0; run.invulnerable = 1.2; return 'shield'; }
  award(run, -3);
  run.lives--; run.combo = 0; run.invulnerable = 2;
  if (run.lives <= 0) run.ended = true;
  return 'hurt';
}
// Swept depth test prevents tunnelling through fish and pearls during a boost.
export function overlaps(player, item, radius, previousZ) {
  const z = clamp(player.z, Math.min(previousZ, item.z), Math.max(previousZ, item.z));
  return (player.x - item.x) ** 2 + (player.y - item.y) ** 2 + (player.z - z) ** 2 < radius ** 2;
}
