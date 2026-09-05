export const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
export const RUN_LENGTH = 800;
export function newRun() {
  return { distance: 0, score: 0, pearls: 0, lives: 3, combo: 0, comboTime: 0,
    shield: 0, boost: 0, cooldown: 0, invulnerable: 0, elapsed: 0, ended: false, won: false };
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
  const distance = (9 + Math.min(run.distance / 160, 4) + (run.boost > 0 ? 13 : 0)) * step;
  run.distance = Math.min(RUN_LENGTH, run.distance + distance);
  run.elapsed += step;
  for (const key of ['boost', 'cooldown', 'invulnerable', 'comboTime', 'shield']) run[key] = Math.max(0, run[key] - step);
  if (!run.comboTime) run.combo = 0;
  if (run.distance >= RUN_LENGTH) { run.ended = true; run.won = true; }
  return distance;
}
export function boost(run) {
  if (run.ended || run.cooldown > 0) return false;
  run.boost = .8; run.cooldown = 3.6;
  return true;
}
export function collect(run, kind = 'pearl') {
  if (run.ended) return;
  if (kind === 'shield') { run.shield = 9; run.score += 15; return; }
  run.combo = Math.min(5, run.combo + 1); run.comboTime = 3.5;
  run.pearls++;
  run.score += (kind === 'gold' ? 10 : 2) * run.combo;
}
export function hit(run) {
  if (run.ended || run.invulnerable > 0) return 'immune';
  if (run.boost > 0) { run.score += 25; return 'defeated'; }
  if (run.shield > 0) { run.shield = 0; run.invulnerable = 1.2; return 'shield'; }
  run.lives--; run.combo = 0; run.invulnerable = 2;
  if (run.lives <= 0) run.ended = true;
  return 'hurt';
}
// Swept depth test prevents tunnelling through fish and pearls during a boost.
export function overlaps(player, item, radius, previousZ) {
  const z = clamp(player.z, Math.min(previousZ, item.z), Math.max(previousZ, item.z));
  return (player.x - item.x) ** 2 + (player.y - item.y) ** 2 + (player.z - z) ** 2 < radius ** 2;
}
