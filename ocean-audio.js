const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const SETTINGS = 'amaq-audio-v1';
const NOTES = [523.25, 587.33, 659.25, 783.99, 880];

// All sounds are synthesized locally: no downloads, autoplay, or audio dependency.
export class OceanAudio {
  constructor({ context = null, storage } = {}) {
    this.context = context;
    this.supported = Boolean(context || globalThis.AudioContext || globalThis.webkitAudioContext);
    this.volume = .65;
    this.muted = false;
    this.mode = 'menu';
    this.voices = new Set();
    this.loops = [];
    this.lastEvent = null;
    this.lastPan = 0;
    this.eventCount = 0;
    this.events = {};
    this.nextWarning = 0;
    this.nextBubble = 0;
    this.nextUpdate = 0;
    this.lastPickup = -1;
    try {
      this.storage = storage === undefined ? globalThis.localStorage : storage;
      const saved = JSON.parse(this.storage?.getItem(SETTINGS) || 'null');
      if (saved && typeof saved.volume === 'number' && Number.isFinite(saved.volume)) this.volume = clamp(saved.volume, 0, 1);
      if (typeof saved?.muted === 'boolean') this.muted = saved.muted;
    } catch {}
  }
  get enabled() { return this.supported && !this.muted && this.volume > 0; }
  save() {
    try { this.storage?.setItem(SETTINGS, JSON.stringify({ volume: this.volume, muted: this.muted })); } catch {}
  }
  init() {
    if (this.master || !this.supported) return;
    const Context = globalThis.AudioContext || globalThis.webkitAudioContext;
    const ctx = this.context ||= new Context();
    this.master = ctx.createGain();
    this.master.gain.value = 0;
    this.limiter = ctx.createDynamicsCompressor();
    this.limiter.threshold.value = -12;
    this.limiter.knee.value = 12;
    this.limiter.ratio.value = 8;
    this.limiter.attack.value = .003;
    this.limiter.release.value = .2;
    this.master.connect(this.limiter).connect(ctx.destination);
    this.noise = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate);
    this.water = ctx.createBuffer(2, ctx.sampleRate * 4, ctx.sampleRate);
    const noise = this.noise.getChannelData(0);
    for (let i = 0; i < noise.length; i++) noise[i] = Math.random() * 2 - 1;
    for (let c = 0; c < 2; c++) {
      const data = this.water.getChannelData(c);
      let low = 0;
      for (let i = 0; i < data.length; i++) {
        low = low * .985 + (Math.random() * 2 - 1) * .06;
        // Bring loop boundaries to zero to prevent a repeating click.
        data[i] = low * Math.min(1, i / 1800, (data.length - 1 - i) / 1800);
      }
    }
    this.bed = this.loop(this.water, 380);
    this.swim = this.loop(this.noise, 700);
  }
  loop(buffer, frequency) {
    const ctx = this.context, source = ctx.createBufferSource(), filter = ctx.createBiquadFilter(), gain = ctx.createGain();
    source.buffer = buffer; source.loop = true;
    filter.type = 'lowpass'; filter.frequency.value = frequency; filter.Q.value = .5;
    gain.gain.value = 0;
    source.connect(filter).connect(gain).connect(this.master); source.start();
    this.loops.push(source);
    return { source, filter, gain };
  }
  smooth(param, value, seconds = .08) {
    const now = this.context.currentTime;
    param.cancelScheduledValues(now);
    param.setTargetAtTime(value, now, seconds);
  }
  unlock() {
    if (!this.enabled) return;
    try {
      this.init();
      // Called only by a player gesture, never by the animation loop.
      if (!this.context.startRendering) this.context.resume().catch(() => {});
    } catch {
      this.supported = false;
    }
  }
  fadeOut() {
    const gain = this.master.gain, now = this.context.currentTime;
    gain.cancelScheduledValues(now);
    gain.setValueAtTime(gain.value, now);
    gain.linearRampToValueAtTime(0, now + .045);
  }
  mix() {
    if (!this.master) return;
    if (this.enabled && (this.mode === 'playing' || this.mode === 'ended')) this.smooth(this.master.gain, this.volume * .8, .025);
    else this.fadeOut();
  }
  stopVoices() {
    for (const voice of this.voices) {
      voice.source.stop();
      voice.nodes.forEach(node => node.disconnect());
    }
    this.voices.clear();
  }
  suspendAfter(ms) {
    clearTimeout(this.sleepTimer);
    if (this.context?.startRendering) return;
    this.sleepTimer = setTimeout(() => {
      this.stopVoices();
      this.context?.suspend().catch(() => {});
    }, ms);
  }
  setMode(mode) {
    clearTimeout(this.sleepTimer);
    this.mode = mode;
    if (mode === 'playing') {
      this.unlock();
      this.nextUpdate = 0;
      this.nextWarning = (this.context?.currentTime || 0) + .5;
      this.nextBubble = (this.context?.currentTime || 0) + 1.4;
    } else {
      if (this.bed) { this.smooth(this.bed.gain.gain, 0); this.smooth(this.swim.gain.gain, 0); }
      // End-of-run notes can finish; paused/menu states fade to silence immediately.
      this.suspendAfter(mode === 'ended' ? 2200 : 160);
    }
    this.mix();
  }
  quiet() {
    if (!this.master) return;
    this.fadeOut();
    this.suspendAfter(100);
  }
  setVolume(value) {
    if (!Number.isFinite(value)) return;
    this.volume = clamp(value, 0, 1);
    if (this.volume > 0) this.muted = false;
    this.changed();
  }
  toggle() {
    const wasEnabled = this.enabled;
    this.muted = wasEnabled;
    if (!wasEnabled && this.volume === 0) this.volume = .65;
    this.changed();
  }
  changed() {
    this.save();
    if (this.enabled && this.mode === 'playing') {
      clearTimeout(this.sleepTimer);
      this.unlock();
    } else if (!this.enabled) this.quiet();
    this.mix();
  }
  voice({ frequency = 600, end = frequency, duration = .3, gain = .13, delay = 0, pan = 0, noise = false, type = 'sine' } = {}) {
    if (this.voices.size >= 28) return;
    const ctx = this.context, now = ctx.currentTime + delay;
    const source = noise ? ctx.createBufferSource() : ctx.createOscillator();
    const envelope = ctx.createGain(), stereo = ctx.createStereoPanner();
    const nodes = [source, envelope, stereo];
    let output = source;
    if (noise) {
      source.buffer = this.noise;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass'; filter.Q.value = .65;
      filter.frequency.setValueAtTime(frequency, now);
      filter.frequency.exponentialRampToValueAtTime(Math.max(30, end), now + duration);
      source.connect(filter); output = filter; nodes.push(filter);
    } else {
      source.type = type;
      source.frequency.setValueAtTime(frequency, now);
      source.frequency.exponentialRampToValueAtTime(Math.max(30, end), now + duration);
    }
    stereo.pan.value = clamp(pan, -1, 1);
    envelope.gain.setValueAtTime(0, now);
    envelope.gain.linearRampToValueAtTime(gain, now + .012);
    envelope.gain.exponentialRampToValueAtTime(.0001, now + duration);
    envelope.gain.linearRampToValueAtTime(0, now + duration + .015);
    output.connect(envelope).connect(stereo).connect(this.master);
    const voice = { source, nodes };
    this.voices.add(voice);
    source.onended = () => { nodes.forEach(node => node.disconnect()); this.voices.delete(voice); };
    source.start(now); source.stop(now + duration + .025);
  }
  play(event, { combo = 1, pan = 0, strength = 1 } = {}) {
    if (!this.master || !this.enabled || !['playing', 'ended'].includes(this.mode)) return;
    const now = this.context.currentTime;
    if (event === 'pearl' && now - this.lastPickup < .055) return;
    if (event === 'pearl') this.lastPickup = now;
    const tone = (frequency, duration, gain, delay = 0, end = frequency) => this.voice({ frequency, end, duration, gain, delay, pan });
    const wash = (frequency, end, duration, gain) => this.voice({ noise: true, frequency, end, duration, gain, pan });
    const chime = (notes, interval = .085, gain = .12) => notes.forEach((note, i) => {
      tone(note, .4, gain, i * interval);
      tone(note * 2.01, .19, gain * .16, i * interval);
    });
    if (event === 'pearl') {
      const note = NOTES[clamp(Math.floor(combo) - 1, 0, 4)];
      tone(note, .25, .15); tone(note * 2, .12, .027, .025);
    } else if (event === 'breach') { wash(700,2800,.45,.3);tone(420,.3,.035,0,900); }
    else if (event === 'splash') { wash(1800,180,.8,.45);wash(340,130,.45,.18); }
    else if (event === 'gold') chime([659.25, 880, 1318.5]);
    else if (event === 'treasure') chime([392,523.25,659.25,1046.5],.11,.14);
    else if (event === 'magnet') {wash(300,1700,.45,.12);chime([440,659.25],.1,.1);}
    else if (event === 'gate') {wash(250,2100,.65,.3);chime([392,783.99],.1,.1);}
    else if (event === 'frenzy') chime([523.25,659.25,783.99,1046.5,1318.5],.09,.13);
    else if (event === 'nearMiss') {wash(900,300,.2,.13);chime([659.25,987.77],.05,.08);}
    else if (event === 'discover') chime([261.63,392],.18,.065);
    else if (event === 'shield') { wash(500, 2200, .55, .14); chime([392, 587.33, 783.99], .11); }
    else if (event === 'dash') { wash(260, 2300, .65, .5); tone(160, .35, .1, 0, 65); }
    else if (event === 'hurt') { wash(900, 100, .35, .3); tone(115, .32, .2, 0, 42); }
    else if (event === 'block') { wash(1400, 300, .32, .22); chime([1174.66, 783.99], .075, .1); }
    else if (event === 'defeated') { wash(450, 1100, .4, .25); chime([392, 659.25, 987.77], .07); }
    else if (event === 'warning' || event === 'guardian') {
      const g = event === 'guardian' ? .15 : .08 + clamp(strength, 0, 1) * .06;
      tone(110, .19, g, 0, 80); tone(98, .22, g * .8, .26, 65);
    } else if (event === 'start') { wash(1300, 260, .65, .16); chime([261.63, 392, 523.25], .12, .09); }
    else if (event === 'win') chime([523.25, 659.25, 783.99, 1046.5], .18, .15);
    else if (event === 'lose') chime([392, 329.63, 261.63], .19, .11);
    else if (event === 'bubble') tone(300 + Math.random() * 350, .12, .022, 0, 1000);
    else return;
    this.lastEvent = event; this.lastPan = pan; this.eventCount++;
    this.events[event]=(this.events[event]||0)+1;
    if(['hurt','block','defeated','dash','treasure','frenzy','win','lose','start'].includes(event))this.nextWarning=Math.max(this.nextWarning,now+.65);
    if(event!=='bubble'&&event!=='warning')this.nextBubble=Math.max(this.nextBubble,now+1.1);
  }
  update({ world, speed = 0, boosting = false, threat = null, aboveWater = false }) {
    if (!this.master || !this.enabled || this.mode !== 'playing' || this.context.state === 'suspended') return;
    const now = this.context.currentTime;
    if (now < this.nextUpdate) return;
    this.nextUpdate = now + .08;
    const tint = aboveWater ? 1400 : world === 'abyss' ? 170 : world === 'kelp' ? 270 : 420;
    this.smooth(this.bed.filter.frequency, tint + Math.sin(now * .4) * 45, .4);
    this.smooth(this.bed.gain.gain, .16 + Math.sin(now * .65) * .018, .3);
    this.smooth(this.swim.filter.frequency, 420 + clamp(speed, 0, 1) * 800 + (boosting ? 1100 : 0));
    this.smooth(this.swim.gain.gain, .012 + clamp(speed, 0, 1) * .08 + (boosting ? .12 : 0));
    if (threat && threat.distance < 27 && now >= this.nextWarning) {
      const strength = 1 - clamp(threat.distance / 27, 0, 1);
      this.play('warning', { pan: clamp(threat.x / 8, -.9, .9), strength });
      this.nextWarning = now + 1.8 - strength * 1.15;
    }
    if (now >= this.nextBubble) {
      this.play('bubble', { pan: Math.sin(now) * .65 });
      this.nextBubble = now + 2.2 + Math.random() * 2.8;
    }
  }
  snapshot() {
    return { supported: this.supported, initialized: Boolean(this.master), enabled: this.enabled, volume: this.volume,
      muted: this.muted, state: this.context?.state || 'idle', mode: this.mode, voices: this.voices.size,
      lastEvent: this.lastEvent, lastPan: this.lastPan, eventCount: this.eventCount, events: {...this.events},
      swimGain: this.swim?.gain.gain.value || 0, masterGain: this.master?.gain.value || 0 };
  }
}
