const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d', { alpha: false });
const ui = {
  score: document.querySelector('#score'),
  combo: document.querySelector('#combo'),
  lives: document.querySelector('#lives'),
  depth: document.querySelector('#depth'),
  overlay: document.querySelector('#overlay'),
  title: document.querySelector('#title'),
  message: document.querySelector('#message'),
  start: document.querySelector('#start'),
  sound: document.querySelector('#sound'),
  fullscreen: document.querySelector('#fullscreen'),
  event: document.querySelector('#event'),
  power: document.querySelector('#power'),
  rank: document.querySelector('#rank'),
  mission: document.querySelector('#mission'),
  missionProgress: document.querySelector('#mission-progress'),
};

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const difficultyAt = seconds => 1 + Math.min(seconds / 55, 2.4);

const assets = {
  background: loadImage('assets/reef-kingdom.png?v=atlas'),
  hero: loadImage('assets/hero-fish.png?v=atlas'),
  predator: loadImage('assets/reef-predator.png?v=atlas'),
};

const ranks = [
  { score: 0, name: 'الزريعة', scale: 1 },
  { score: 35, name: 'قارئ التيار', scale: 1.1 },
  { score: 90, name: 'رحّالة الأطلس', scale: 1.2 },
  { score: 180, name: 'سيد الأعماق', scale: 1.32 },
];

const missionDeck = [
  { type: 'pearls', target: 14, label: 'اجمع 14 رمز تيار' },
  { type: 'gold', target: 3, label: 'اعثر على 3 كنوز نحاسية' },
  { type: 'dash', target: 3, label: 'اهزم 3 حرّاس بالاندفاع' },
];

let width = innerWidth;
let height = innerHeight;
let dpr = 1;
let lastTime = performance.now();
let audioContext;
let muted = false;
const keys = new Set();
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

const state = {
  running: false,
  score: 0,
  lives: 3,
  combo: 1,
  comboTime: 0,
  elapsed: 0,
  bubbleClock: 0,
  goldClock: 0,
  enemyClock: 0,
  hitCooldown: 0,
  shake: 0,
  flash: 0,
  relicClock: 0,
  surgeClock: 0,
  eventTime: 0,
  shield: 0,
  slowTime: 0,
  rank: 0,
  mission: null,
  bossClock: 0,
  bossDefeated: false,
};

const target = { x: width * .42, y: height * .55 };
const player = { x: target.x, y: target.y, vx: 0, vy: 0, radius: 34, direction: 1, invulnerable: 0, dashCooldown: 0, dashTime: 0, dashId: 0 };
const bubbles = [];
const enemies = [];
const relics = [];
const particles = [];
let motes = [];

function loadImage(src) {
  const image = new Image();
  image.src = src;
  return image;
}

function resize() {
  width = innerWidth;
  height = innerHeight;
  dpr = Math.min(devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  player.x = clamp(player.x, 70, width - 70);
  player.y = clamp(player.y, 90, height - 60);
  target.x = clamp(target.x, 70, width - 70);
  target.y = clamp(target.y, 90, height - 60);
  makeMotes();
}

function makeMotes() {
  motes = Array.from({ length: reducedMotion ? 35 : 85 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 2.4 + .4,
    speed: Math.random() * 13 + 5,
    drift: Math.random() * Math.PI * 2,
    alpha: Math.random() * .46 + .12,
  }));
}

function moveTarget(event) {
  const rect = canvas.getBoundingClientRect();
  target.x = clamp(event.clientX - rect.left, 55, width - 55);
  target.y = clamp(event.clientY - rect.top, 80, height - 45);
}

function movementFrom(input) {
  return {
    x: (input.has('ArrowRight') || input.has('KeyD') ? 1 : 0) - (input.has('ArrowLeft') || input.has('KeyA') ? 1 : 0),
    y: (input.has('ArrowDown') || input.has('KeyS') ? 1 : 0) - (input.has('ArrowUp') || input.has('KeyW') ? 1 : 0),
  };
}

function showEvent(message) {
  ui.event.textContent = message;
  ui.event.classList.add('visible');
  state.eventTime = 2.6;
}

function startMission() {
  const template = missionDeck[Math.floor(Math.random() * missionDeck.length)];
  state.mission = { ...template, progress: 0, complete: false };
}

function advanceMission(type) {
  const mission = state.mission;
  if (!mission || mission.complete || mission.type !== type) return;
  mission.progress++;
  if (mission.progress >= mission.target) {
    mission.complete = true;
    state.score += 45;
    showEvent('✓ اكتمل مسار الرحلة · مكافأة 45');
    burst(player.x, player.y, '#e8d7a7', 34);
    tone(980, .2, 'triangle', .05);
  }
}

function rankFor(score) {
  let index = 0;
  for (let i = 1; i < ranks.length; i++) if (score >= ranks[i].score) index = i;
  return index;
}

function resetGame() {
  state.running = true;
  state.score = 0;
  state.lives = 3;
  state.combo = 1;
  state.comboTime = 0;
  state.elapsed = 0;
  state.bubbleClock = .35;
  state.goldClock = 3;
  state.enemyClock = 4;
  state.hitCooldown = 0;
  state.shake = 0;
  state.flash = 0;
  state.relicClock = 8;
  state.surgeClock = 24;
  state.eventTime = 0;
  state.shield = 0;
  state.slowTime = 0;
  state.rank = 0;
  state.bossClock = 48;
  state.bossDefeated = false;
  bubbles.length = 0;
  enemies.length = 0;
  relics.length = 0;
  particles.length = 0;
  player.x = width * .42;
  player.y = height * .55;
  player.vx = 0;
  player.vy = 0;
  player.invulnerable = 0;
  player.dashCooldown = 0;
  player.dashTime = 0;
  player.dashId = 0;
  target.x = player.x;
  target.y = player.y;
  startMission();
  updateHud();
  ui.overlay.classList.remove('visible');
  ui.event.classList.remove('visible');
  ensureAudio();
  tone(520, .08, 'sine', .05);
}

function endGame() {
  state.running = false;
  const best = Math.max(Number(localStorage.getItem('fish-game-best') || 0), state.score);
  localStorage.setItem('fish-game-best', best);
  ui.title.textContent = 'انتهت الرحلة';
  ui.message.textContent = `جمعت ${state.score} لؤلؤة · أفضل نتيجة ${best}`;
  ui.start.textContent = 'حاول مرة أخرى';
  ui.overlay.classList.add('visible');
  tone(150, .35, 'sawtooth', .05);
}

function updateHud() {
  const nextRank = rankFor(state.score);
  if (nextRank > state.rank) {
    state.rank = nextRank;
    showEvent(`↟ تطورت إلى ${ranks[nextRank].name}`);
    burst(player.x, player.y, '#e5c581', 28);
  }
  player.radius = 34 * ranks[state.rank].scale;
  ui.score.textContent = state.score.toLocaleString('ar');
  ui.combo.textContent = `×${state.combo}`;
  ui.lives.textContent = Array.from({ length: 3 }, (_, i) => i < state.lives ? '♥' : '♡').join(' ');
  ui.depth.style.width = `${Math.min(state.elapsed / 90, 1) * 100}%`;
  if (state.shield) ui.power.textContent = '🛡 درع المرجان فعّال';
  else if (state.slowTime > 0) ui.power.textContent = `❄ سكون الأعماق ${Math.ceil(state.slowTime)}ث`;
  else if (player.dashCooldown > 0) ui.power.textContent = `⚡ اندفاع ${player.dashCooldown.toFixed(1)}ث`;
  else ui.power.textContent = '⚡ الاندفاع جاهز';
  ui.rank.textContent = ranks[state.rank].name;
  ui.mission.textContent = state.mission?.label || 'اكتشف المهمة';
  ui.missionProgress.textContent = state.mission?.complete ? '✓ مكتملة' : `التقدم: ${state.mission?.progress || 0} من ${state.mission?.target || 0}`;
}

function spawnBubble(gold = false) {
  bubbles.push({
    x: 55 + Math.random() * Math.max(1, width - 110),
    y: height + 45,
    radius: gold ? 27 : 21 + Math.random() * 7,
    speed: (gold ? 62 : 48) + Math.random() * 34,
    drift: Math.random() * Math.PI * 2,
    gold,
  });
}

function spawnEnemy() {
  const fromRight = Math.random() > .26;
  const size = clamp(Math.min(width, height) * .22, 130, 210) * (.88 + Math.random() * .25);
  enemies.push({
    x: fromRight ? width + size : -size,
    y: 120 + Math.random() * Math.max(80, height - 240),
    size,
    speed: (74 + Math.random() * 42) * difficultyAt(state.elapsed),
    fromRight,
    phase: Math.random() * Math.PI * 2,
    boss: false,
    hp: 1,
    lastDashId: -1,
  });
}

function spawnBoss() {
  const size = clamp(Math.min(width, height) * .36, 230, 330);
  enemies.push({
    x: width + size,
    y: height * .5,
    size,
    speed: 48,
    fromRight: true,
    phase: 0,
    boss: true,
    hp: 3,
    lastDashId: -1,
  });
  showEvent('⚑ حارس الأطلس ظهر · اندفع خلاله 3 مرات');
  tone(92, .5, 'sawtooth', .055);
}

function spawnRelic() {
  const fromRight = Math.random() > .5;
  relics.push({
    x: fromRight ? width + 45 : -45,
    y: 140 + Math.random() * Math.max(80, height - 280),
    radius: 27,
    speed: 58,
    fromRight,
    phase: Math.random() * Math.PI * 2,
  });
  showEvent('✦ ظهرت جوهرة غامضة في الأعماق');
}

function treasureSurge(count = 10) {
  for (let i = 0; i < count; i++) {
    spawnBubble(i % 3 === 0);
    const bubble = bubbles[bubbles.length - 1];
    bubble.y = height * (.35 + Math.random() * .6);
  }
  showEvent('✦ عاصفة كنوز! اجمعها قبل أن تختفي');
  tone(940, .22, 'sine', .045);
}

function collectRelic(relic) {
  const gift = Math.floor(Math.random() * 3);
  if (gift === 0) {
    state.shield = 1;
    showEvent('🛡 حصلت على درع المرجان');
  } else if (gift === 1) {
    state.slowTime = 7;
    showEvent('❄ تجمّدت حرّاس الأعماق');
  } else {
    treasureSurge(14);
  }
  burst(relic.x, relic.y, '#d990ff', 30);
  tone(1040, .18, 'sine', .05);
}

function dash() {
  if (!state.running || player.dashCooldown > 0) return;
  let { x, y } = movementFrom(keys);
  if (!x && !y) x = player.direction;
  const length = Math.hypot(x, y) || 1;
  x /= length;
  y /= length;
  player.vx += x * 720;
  player.vy += y * 720;
  target.x = clamp(player.x + x * 110, 55, width - 55);
  target.y = clamp(player.y + y * 110, 80, height - 45);
  player.dashCooldown = 2.8;
  player.dashTime = .28;
  player.dashId++;
  player.invulnerable = Math.max(player.invulnerable, .34);
  burst(player.x, player.y, '#b9fbff', 18);
  tone(360, .1, 'triangle', .04);
}

function update(dt) {
  updateMotes(dt);
  if (!state.running) return;

  state.elapsed += dt;
  state.comboTime -= dt;
  state.shake = Math.max(0, state.shake - dt * 24);
  state.flash = Math.max(0, state.flash - dt * 2.8);
  state.hitCooldown = Math.max(0, state.hitCooldown - dt);
  state.eventTime = Math.max(0, state.eventTime - dt);
  state.slowTime = Math.max(0, state.slowTime - dt);
  player.invulnerable = Math.max(0, player.invulnerable - dt);
  player.dashCooldown = Math.max(0, player.dashCooldown - dt);
  player.dashTime = Math.max(0, player.dashTime - dt);
  if (state.eventTime <= 0) ui.event.classList.remove('visible');
  if (state.comboTime <= 0 && state.combo !== 1) state.combo = 1;

  const { x: keyX, y: keyY } = movementFrom(keys);
  if (keyX || keyY) {
    const length = Math.hypot(keyX, keyY) || 1;
    target.x = clamp(target.x + keyX / length * 330 * dt, 55, width - 55);
    target.y = clamp(target.y + keyY / length * 330 * dt, 80, height - 45);
  }

  const spring = 7.5;
  player.vx += (target.x - player.x) * spring * dt;
  player.vy += (target.y - player.y) * spring * dt;
  const drag = Math.pow(.002, dt);
  player.vx *= drag;
  player.vy *= drag;
  player.x = clamp(player.x + player.vx * dt, 55, width - 55);
  player.y = clamp(player.y + player.vy * dt, 80, height - 45);
  if (Math.abs(player.vx) > 5) player.direction = Math.sign(player.vx);

  state.bubbleClock -= dt;
  state.goldClock -= dt;
  state.enemyClock -= dt;
  state.relicClock -= dt;
  state.surgeClock -= dt;
  state.bossClock -= dt;
  if (state.bubbleClock <= 0) {
    spawnBubble(false);
    state.bubbleClock = clamp(.82 - state.elapsed * .003, .48, .82);
  }
  if (state.goldClock <= 0) {
    spawnBubble(true);
    state.goldClock = 6 + Math.random() * 3;
  }
  if (state.enemyClock <= 0) {
    spawnEnemy();
    state.enemyClock = clamp(4.4 - state.elapsed * .02, 1.7, 4.4);
  }
  if (state.relicClock <= 0) {
    spawnRelic();
    state.relicClock = 13 + Math.random() * 8;
  }
  if (state.surgeClock <= 0) {
    treasureSurge(10);
    state.surgeClock = 28 + Math.random() * 8;
  }
  if (state.bossClock <= 0 && !state.bossDefeated && !enemies.some(enemy => enemy.boss)) {
    spawnBoss();
    state.bossClock = Number.POSITIVE_INFINITY;
  }

  for (let i = bubbles.length - 1; i >= 0; i--) {
    const bubble = bubbles[i];
    bubble.drift += dt * 1.8;
    bubble.y -= bubble.speed * dt;
    bubble.x += Math.sin(bubble.drift) * 15 * dt;
    if (distance(player, bubble) < player.radius + bubble.radius) {
      const base = bubble.gold ? 10 : 1;
      state.combo = state.comboTime > 0 ? Math.min(state.combo + 1, 5) : 1;
      state.comboTime = 2.4;
      state.score += base * state.combo;
      advanceMission('pearls');
      if (bubble.gold) advanceMission('gold');
      burst(bubble.x, bubble.y, bubble.gold ? '#ffd76f' : '#7ef5ff', bubble.gold ? 22 : 12);
      tone(bubble.gold ? 880 : 660, .08, 'sine', .035);
      bubbles.splice(i, 1);
      updateHud();
    } else if (bubble.y < -60) {
      bubbles.splice(i, 1);
    }
  }

  for (let i = relics.length - 1; i >= 0; i--) {
    const relic = relics[i];
    const direction = relic.fromRight ? -1 : 1;
    relic.x += direction * relic.speed * dt;
    relic.y += Math.sin(state.elapsed * 2.2 + relic.phase) * 12 * dt;
    if (distance(player, relic) < player.radius + relic.radius) {
      collectRelic(relic);
      relics.splice(i, 1);
      updateHud();
    } else if (relic.x < -70 || relic.x > width + 70) {
      relics.splice(i, 1);
    }
  }

  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    const direction = enemy.fromRight ? -1 : 1;
    enemy.x += direction * enemy.speed * (state.slowTime > 0 ? .36 : 1) * dt;
    enemy.y += (player.y - enemy.y) * .12 * dt + Math.sin(state.elapsed * 2 + enemy.phase) * 8 * dt;
    const touching = distance(player, enemy) < player.radius + enemy.size * .24;
    if (touching && player.dashTime > 0 && enemy.lastDashId !== player.dashId) {
      enemy.lastDashId = player.dashId;
      enemy.hp--;
      enemy.x -= direction * 85;
      player.vx -= direction * 180;
      burst(enemy.x, enemy.y, enemy.boss ? '#e5c581' : '#b86b45', enemy.boss ? 38 : 24);
      tone(enemy.boss ? 130 : 240, .14, 'square', .045);
      if (enemy.hp <= 0) {
        state.score += enemy.boss ? 120 : 8;
        advanceMission('dash');
        if (enemy.boss) {
          state.bossDefeated = true;
          showEvent('✦ سقط حارس الأطلس · مكافأة 120');
        }
        enemies.splice(i, 1);
        updateHud();
      }
      continue;
    }
    if (state.hitCooldown <= 0 && player.invulnerable <= 0 && touching) {
      if (state.shield) {
        state.shield = 0;
        state.shake = 7;
        burst(enemy.x, enemy.y, '#8cf8ff', 32);
        tone(420, .15, 'triangle', .045);
        enemies.splice(i, 1);
        showEvent('🛡 الدرع صدّ حارس الأعماق');
        continue;
      }
      state.lives--;
      state.combo = 1;
      state.comboTime = 0;
      state.shake = 13;
      state.flash = 1;
      player.invulnerable = 1.6;
      state.hitCooldown = 2.4;
      player.vx += direction * 250;
      burst(player.x, player.y, '#ff526f', 28);
      tone(110, .18, 'sawtooth', .06);
      if (enemy.boss) {
        enemy.x = enemy.fromRight ? width + enemy.size * .75 : -enemy.size * .75;
        enemy.y = 120 + Math.random() * Math.max(80, height - 240);
      } else {
        enemies.splice(i, 1);
      }
      updateHud();
      if (state.lives <= 0) endGame();
    } else if (enemy.x < -enemy.size * 1.4 || enemy.x > width + enemy.size * 1.4) {
      if (enemy.boss) {
        enemy.fromRight = !enemy.fromRight;
        enemy.x = enemy.fromRight ? width + enemy.size : -enemy.size;
        enemy.y = 120 + Math.random() * Math.max(80, height - 240);
      } else {
        enemies.splice(i, 1);
      }
    }
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    const particle = particles[i];
    particle.life -= dt;
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
    particle.vy += 18 * dt;
    particle.vx *= Math.pow(.18, dt);
    if (particle.life <= 0) particles.splice(i, 1);
  }
  updateHud();
}

function updateMotes(dt) {
  for (const mote of motes) {
    mote.y -= mote.speed * dt;
    mote.x += Math.sin(state.elapsed + mote.drift) * 3 * dt;
    if (mote.y < -8) {
      mote.y = height + 8;
      mote.x = Math.random() * width;
    }
  }
}

function burst(x, y, color, count) {
  for (let i = 0; i < (reducedMotion ? count / 2 : count); i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 40 + Math.random() * 150;
    particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: .45 + Math.random() * .55, maxLife: 1, size: 2 + Math.random() * 5, color });
  }
}

function draw() {
  const shakeX = state.shake ? (Math.random() - .5) * state.shake : 0;
  const shakeY = state.shake ? (Math.random() - .5) * state.shake : 0;
  ctx.save();
  ctx.translate(shakeX, shakeY);
  drawBackground();
  drawLightShafts();
  drawMotes();
  bubbles.forEach(drawBubble);
  relics.forEach(drawRelic);
  enemies.forEach(drawEnemy);
  drawPlayer();
  drawParticles();
  ctx.restore();

  if (state.flash > 0) {
    ctx.fillStyle = `rgba(255, 48, 82, ${state.flash * .24})`;
    ctx.fillRect(0, 0, width, height);
  }
}

function drawBackground() {
  const image = assets.background;
  ctx.fillStyle = '#071823';
  ctx.fillRect(0, 0, width, height);
  if (image.complete && image.naturalWidth) {
    const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight) * 1.08;
    const imageWidth = image.naturalWidth * scale;
    const imageHeight = image.naturalHeight * scale;
    const parallax = ((player.x || width / 2) / Math.max(width, 1) - .5) * -28;
    ctx.drawImage(image, (width - imageWidth) / 2 + parallax, (height - imageHeight) / 2, imageWidth, imageHeight);
  }
  ctx.fillStyle = 'rgba(3, 15, 24, .16)';
  ctx.fillRect(0, 0, width, height);
}

function drawLightShafts() {
  ctx.save();
  ctx.strokeStyle = 'rgba(232, 215, 172, .18)';
  ctx.lineWidth = 1.2;
  ctx.setLineDash([8, 12]);
  const drift = Math.sin(state.elapsed * .22) * 24;
  for (let i = 0; i < 6; i++) {
    const y = height * (.18 + i * .115);
    ctx.beginPath();
    ctx.moveTo(-40, y);
    ctx.bezierCurveTo(width * .25, y - 44 + drift, width * .62, y + 52 - drift, width + 40, y - 16);
    ctx.stroke();
  }
  ctx.restore();
}

function drawMotes() {
  ctx.save();
  for (const mote of motes) {
    ctx.fillStyle = `rgba(220, 193, 137, ${mote.alpha * .58})`;
    ctx.fillRect(mote.x, mote.y, mote.size * 2.4, Math.max(1, mote.size * .55));
  }
  ctx.restore();
}

function drawBubble(bubble) {
  const { x, y, radius, gold } = bubble;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(bubble.drift * .15);
  ctx.fillStyle = gold ? '#b66f43' : '#173f49';
  ctx.strokeStyle = gold ? '#ecd59f' : '#9ec9bd';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.setLineDash([3, 4]);
  ctx.beginPath();
  ctx.arc(0, 0, radius * .68, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#ead8ab';
  ctx.beginPath();
  ctx.moveTo(0, -radius * .34);
  ctx.lineTo(radius * .24, 0);
  ctx.lineTo(0, radius * .34);
  ctx.lineTo(-radius * .24, 0);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawRelic(relic) {
  const pulse = 1 + Math.sin(state.elapsed * 5 + relic.phase) * .08;
  ctx.save();
  ctx.translate(relic.x, relic.y);
  ctx.rotate(state.elapsed * .8);
  ctx.scale(pulse, pulse);
  ctx.strokeStyle = '#ead8ab';
  ctx.fillStyle = '#b66f43';
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = Math.PI / 3 * i;
    const x = Math.cos(angle) * relic.radius;
    const y = Math.sin(angle) * relic.radius;
    if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.rotate(-state.elapsed * .8);
  ctx.fillStyle = '#071823';
  ctx.font = 'bold 22px Segoe UI';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('؟', 0, -1);
  ctx.restore();
}

function drawPlayer() {
  const bob = Math.sin(performance.now() * .006) * 3;
  const tilt = clamp(player.vy / 850, -.16, .16);
  const alpha = player.invulnerable > 0 && Math.floor(player.invulnerable * 12) % 2 ? .35 : 1;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(player.x, player.y + bob);
  ctx.rotate(tilt);
  ctx.scale(player.direction, 1);
  ctx.shadowColor = 'rgba(2, 9, 14, .72)';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  const image = assets.hero;
  if (image.complete && image.naturalWidth) {
    const drawWidth = clamp(Math.min(width, height) * .17, 118, 180) * ranks[state.rank].scale;
    ctx.drawImage(image, -drawWidth * .57, -drawWidth / 3, drawWidth, drawWidth * 2 / 3);
  } else {
    ctx.fillStyle = '#43e7e6';
    ctx.beginPath();
    ctx.ellipse(0, 0, 55, 30, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawEnemy(enemy) {
  const bob = Math.sin(state.elapsed * 3 + enemy.phase) * 5;
  ctx.save();
  ctx.translate(enemy.x, enemy.y + bob);
  ctx.scale(enemy.fromRight ? 1 : -1, 1);
  ctx.shadowColor = 'rgba(2, 9, 14, .78)';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 6;
  ctx.shadowOffsetY = 6;
  const image = assets.predator;
  if (image.complete && image.naturalWidth) {
    ctx.drawImage(image, -enemy.size * .58, -enemy.size * .31, enemy.size * 1.16, enemy.size * .64);
  } else {
    ctx.fillStyle = '#a92d45';
    ctx.beginPath();
    ctx.ellipse(0, 0, enemy.size * .48, enemy.size * .22, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  if (enemy.boss) {
    ctx.shadowColor = 'transparent';
    ctx.fillStyle = '#e7d29b';
    for (let i = 0; i < 3; i++) {
      ctx.globalAlpha = i < enemy.hp ? 1 : .22;
      ctx.fillRect(-22 + i * 18, -enemy.size * .39, 12, 5);
    }
  }
  ctx.restore();
}

function drawParticles() {
  ctx.save();
  for (const particle of particles) {
    ctx.globalAlpha = clamp(particle.life / particle.maxLife, 0, 1);
    ctx.fillStyle = particle.color;
    ctx.fillRect(particle.x, particle.y, particle.size * 1.7, particle.size * .7);
  }
  ctx.restore();
}

function ensureAudio() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === 'suspended') audioContext.resume();
}

function tone(frequency, duration, type, volume) {
  if (muted || !audioContext) return;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  gain.gain.setValueAtTime(volume, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
}

function frame(now) {
  const dt = Math.min((now - lastTime) / 1000, .033);
  lastTime = now;
  update(dt);
  draw();
  requestAnimationFrame(frame);
}

canvas.addEventListener('pointermove', moveTarget);
canvas.addEventListener('pointerdown', event => {
  moveTarget(event);
  if (!state.running) ui.start.focus();
});
addEventListener('keydown', event => {
  const movementKey = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(event.code);
  if (movementKey || event.code === 'Space') event.preventDefault();
  if (movementKey && !keys.has(event.code)) {
    if (!state.running) resetGame();
    target.x = player.x;
    target.y = player.y;
  }
  keys.add(event.code);
  if (event.code === 'Space') state.running ? dash() : resetGame();
});
addEventListener('keyup', event => keys.delete(event.code));
addEventListener('blur', () => keys.clear());
addEventListener('resize', resize);

ui.start.addEventListener('click', resetGame);
ui.sound.addEventListener('click', () => {
  muted = !muted;
  ui.sound.textContent = muted ? '♩' : '♫';
  ui.sound.setAttribute('aria-label', muted ? 'تشغيل الصوت' : 'كتم الصوت');
  if (!muted) {
    ensureAudio();
    tone(620, .07, 'sine', .035);
  }
});
ui.fullscreen.addEventListener('click', () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
  else document.exitFullscreen?.();
});

function selfCheck() {
  console.assert(clamp(12, 0, 10) === 10, 'clamp upper bound');
  console.assert(distance({ x: 0, y: 0 }, { x: 3, y: 4 }) === 5, 'distance calculation');
  console.assert(difficultyAt(200) <= 3.4, 'difficulty ceiling');
  console.assert(movementFrom(new Set(['ArrowLeft', 'ArrowUp'])).x === -1, 'arrow key movement');
  console.assert(rankFor(100) === 2, 'rank thresholds');
}

selfCheck();
resize();
updateHud();
requestAnimationFrame(frame);
