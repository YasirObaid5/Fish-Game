import * as T from './vendor/three.module.min.js';

export class ScoreFeedback {
  constructor(container, reduced = false) {
    this.container = container;
    this.reduced = reduced;
    this.entries = [];
    this.projected = new T.Vector3();
  }
  show(delta, position, label = '') {
    if (!delta && !label) return;
    const recent=this.entries.at(-1);
    if(delta>0&&!label&&recent?.amount>0&&!recent.label&&recent.age<.075&&recent.position.distanceTo(position)<1.3){
      recent.amount+=delta;recent.number.textContent='+'+recent.amount;return;
    }
    if (this.entries.length >= 16) this.entries.shift().element.remove();
    const element = document.createElement('div');
    element.className = 'score-pop ' + (delta < 0 ? 'loss' : 'gain');
    const number = document.createElement('b');
    number.dir = 'ltr'; number.textContent = delta ? (delta > 0 ? '+' : '') + delta : '';
    element.append(number);
    if (label) { const caption = document.createElement('small'); caption.textContent = label; element.append(caption); }
    this.container.append(element);
    this.entries.push({ element, number, amount:delta, label, position: position.clone(), age: 0, offset: (this.entries.length % 3 - 1) * 62, lift:(this.entries.length%3)*42 });
  }
  update(dt, camera, playing) {
    for (let i = this.entries.length - 1; i >= 0; i--) {
      const entry = this.entries[i];
      if (playing) entry.age += dt;
      if (entry.age > 1.35) { entry.element.remove(); this.entries.splice(i, 1); continue; }
      this.projected.copy(entry.position).project(camera);
      const visible = this.projected.z > -1 && this.projected.z < 1;
      entry.element.hidden = !visible;
      const x = Math.max(45, Math.min(innerWidth - 45, (this.projected.x * .5 + .5) * innerWidth + entry.offset));
      const rise = this.reduced ? 0 : entry.age * 43;
      const y = Math.max(105, Math.min(innerHeight - 90, (-this.projected.y * .5 + .5) * innerHeight - 28 - rise - entry.lift));
      const scale = this.reduced ? 1 : 1 + Math.sin(Math.min(1, entry.age / .18) * Math.PI) * .2;
      entry.element.style.transform = 'translate(' + x + 'px,' + y + 'px) translate(-50%,-50%) scale(' + scale + ')';
      entry.element.style.opacity = Math.min(1, (1.35 - entry.age) * 3);
    }
  }
  clear() { this.entries.forEach(entry => entry.element.remove()); this.entries = []; }
}
