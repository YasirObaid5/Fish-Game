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
};

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const difficultyAt = seconds => 1 + Math.min(seconds / 55, 2.4);

const assets = {
  background: loadImage('assets/reef-kingdom.png'),
  hero: loadImage('assets/hero-fish.png'),
  predator: loadImage('assets/reef-predator.png'),
};

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
};

const target = { x: width * .42, y: height * .55 };
const player = { x: target.x, y: target.y, vx: 0, vy: 0, radius: 34, direction: 1, invulnerable: 0 };
const bubbles = [];
const enemies = [];
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
  bubbles.length = 0;
  enemies.length = 0;
  particles.length = 0;
  player.x = width * .42;
  player.y = height * .55;
  player.vx = 0;
  player.vy = 0;
  player.invulnerable = 0;
  target.x = player.x;
  target.y = player.y;
  updateHud();
  ui.overlay.classList.remove('visible');
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
  ui.score.textContent = state.score.toLocaleString('ar');
  ui.combo.textContent = `×${state.combo}`;
  ui.lives.textContent = Array.from({ length: 3 }, (_, i) => i < state.lives ? '♥' : '♡').join(' ');
  ui.depth.style.width = `${Math.min(state.elapsed / 90, 1) * 100}%`;
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
  });
}

function update(dt) {
  updateMotes(dt);
  if (!state.running) return;

  state.elapsed += dt;
  state.comboTime -= dt;
  state.shake = Math.max(0, state.shake - dt * 24);
  state.flash = Math.max(0, state.flash - dt * 2.8);
  state.hitCooldown = Math.max(0, state.hitCooldown - dt);
  player.invulnerable = Math.max(0, player.invulnerable - dt);
  if (state.comboTime <= 0 && state.combo !== 1) state.combo = 1;

  const keyX = (keys.has('arrowright') || keys.has('d') ? 1 : 0) - (keys.has('arrowleft') || keys.has('a') ? 1 : 0);
  const keyY = (keys.has('arrowdown') || keys.has('s') ? 1 : 0) - (keys.has('arrowup') || keys.has('w') ? 1 : 0);
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
      burst(bubble.x, bubble.y, bubble.gold ? '#ffd76f' : '#7ef5ff', bubble.gold ? 22 : 12);
      tone(bubble.gold ? 880 : 660, .08, 'sine', .035);
      bubbles.splice(i, 1);
      updateHud();
    } else if (bubble.y < -60) {
      bubbles.splice(i, 1);
    }
  }

  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    const direction = enemy.fromRight ? -1 : 1;
    enemy.x += direction * enemy.speed * dt;
    enemy.y += (player.y - enemy.y) * .12 * dt + Math.sin(state.elapsed * 2 + enemy.phase) * 8 * dt;
    if (state.hitCooldown <= 0 && player.invulnerable <= 0 && distance(player, enemy) < player.radius + enemy.size * .24) {
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
      enemies.splice(i, 1);
      updateHud();
      if (state.lives <= 0) endGame();
    } else if (enemy.x < -enemy.size * 1.4 || enemy.x > width + enemy.size * 1.4) {
      enemies.splice(i, 1);
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
  enemies.forEach(drawEnemy);
  drawPlayer();
  drawParticles();
  drawForeground();
  ctx.restore();

  if (state.flash > 0) {
    ctx.fillStyle = `rgba(255, 48, 82, ${state.flash * .24})`;
    ctx.fillRect(0, 0, width, height);
  }
}

function drawBackground() {
  const image = assets.background;
  ctx.fillStyle = '#04213e';
  ctx.fillRect(0, 0, width, height);
  if (image.complete && image.naturalWidth) {
    const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight) * 1.08;
    const imageWidth = image.naturalWidth * scale;
    const imageHeight = image.naturalHeight * scale;
    const parallax = ((player.x || width / 2) / Math.max(width, 1) - .5) * -28;
    ctx.drawImage(image, (width - imageWidth) / 2 + parallax, (height - imageHeight) / 2, imageWidth, imageHeight);
  }
  const depth = ctx.createLinearGradient(0, 0, 0, height);
  depth.addColorStop(0, 'rgba(55, 225, 255, .06)');
  depth.addColorStop(.6, 'rgba(2, 24, 63, .02)');
  depth.addColorStop(1, 'rgba(0, 7, 24, .46)');
  ctx.fillStyle = depth;
  ctx.fillRect(0, 0, width, height);
}

function drawLightShafts() {
  ctx.save();
  ctx.globalCompositeOperation = 'screen';
  ctx.globalAlpha = .13;
  const sway = Math.sin(state.elapsed * .2) * 45;
  for (let i = 0; i < 4; i++) {
    const x = width * (.14 + i * .25) + sway * (i % 2 ? 1 : -1);
    const gradient = ctx.createLinearGradient(x, 0, x + 160, height * .8);
    gradient.addColorStop(0, 'rgba(177, 252, 255, .75)');
    gradient.addColorStop(1, 'rgba(55, 188, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(x - 30, -10);
    ctx.lineTo(x + 55, -10);
    ctx.lineTo(x + 240, height * .8);
    ctx.lineTo(x + 80, height * .8);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

function drawMotes() {
  ctx.save();
  ctx.globalCompositeOperation = 'screen';
  for (const mote of motes) {
    ctx.fillStyle = `rgba(146, 244, 255, ${mote.alpha})`;
    ctx.beginPath();
    ctx.arc(mote.x, mote.y, mote.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawBubble(bubble) {
  const { x, y, radius, gold } = bubble;
  ctx.save();
  ctx.translate(x, y);
  ctx.shadowColor = gold ? '#ffc84a' : '#57efff';
  ctx.shadowBlur = gold ? 28 : 17;
  const fill = ctx.createRadialGradient(-radius * .32, -radius * .35, radius * .08, 0, 0, radius);
  fill.addColorStop(0, 'rgba(255,255,255,.94)');
  fill.addColorStop(.22, gold ? 'rgba(255,224,113,.62)' : 'rgba(117,241,255,.44)');
  fill.addColorStop(.72, gold ? 'rgba(255,151,28,.18)' : 'rgba(44,132,255,.12)');
  fill.addColorStop(1, 'rgba(255,255,255,.04)');
  ctx.fillStyle = fill;
  ctx.strokeStyle = gold ? 'rgba(255,229,132,.9)' : 'rgba(198,250,255,.76)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = gold ? '#fff0a5' : '#d7fcff';
  ctx.beginPath();
  ctx.arc(0, 2, radius * .22, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawPlayer() {
  const speed = Math.hypot(player.vx, player.vy);
  const bob = Math.sin(performance.now() * .006) * 3;
  const tilt = clamp(player.vy / 850, -.16, .16);
  const alpha = player.invulnerable > 0 && Math.floor(player.invulnerable * 12) % 2 ? .35 : 1;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(player.x, player.y + bob);
  ctx.rotate(tilt);
  ctx.scale(player.direction, 1);
  ctx.shadowColor = '#4aeaff';
  ctx.shadowBlur = 18 + Math.min(speed * .04, 14);
  const image = assets.hero;
  if (image.complete && image.naturalWidth) {
    const drawWidth = clamp(Math.min(width, height) * .17, 118, 180);
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
  ctx.shadowColor = 'rgba(255, 62, 74, .62)';
  ctx.shadowBlur = 20;
  const image = assets.predator;
  if (image.complete && image.naturalWidth) {
    ctx.drawImage(image, -enemy.size * .58, -enemy.size * .31, enemy.size * 1.16, enemy.size * .64);
  } else {
    ctx.fillStyle = '#a92d45';
    ctx.beginPath();
    ctx.ellipse(0, 0, enemy.size * .48, enemy.size * .22, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawParticles() {
  ctx.save();
  ctx.globalCompositeOperation = 'screen';
  for (const particle of particles) {
    ctx.globalAlpha = clamp(particle.life / particle.maxLife, 0, 1);
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawForeground() {
  const vignette = ctx.createRadialGradient(width / 2, height * .45, Math.min(width, height) * .25, width / 2, height / 2, Math.max(width, height) * .72);
  vignette.addColorStop(0, 'rgba(0, 8, 24, 0)');
  vignette.addColorStop(1, 'rgba(0, 4, 18, .48)');
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);
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
  keys.add(event.key.toLowerCase());
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key)) event.preventDefault();
  if (event.key === ' ' && !state.running) resetGame();
});
addEventListener('keyup', event => keys.delete(event.key.toLowerCase()));
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
}

selfCheck();
resize();
updateHud();
requestAnimationFrame(frame);
