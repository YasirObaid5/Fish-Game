import test from 'node:test';
import assert from 'node:assert/strict';
import { newRun, collect, hit, advance, boost, award, nearMiss, openTreasure, RUSH_TARGET, RUN_LENGTH } from '../gameplay.mjs';
import { ENCOUNTERS, isHazard } from '../ocean-discoveries.js';

const tick = (run, seconds) => { for (let t=0;t<seconds;t+=.05) advance(run,.05); };
test('score deltas match +5 pickups, combos, and -3 damage', () => {
  const run=newRun();
  assert.equal(collect(run),5);assert.equal(run.score,5);
  assert.equal(collect(run),10);assert.equal(run.score,15);
  assert.equal(hit(run),'hurt');assert.equal(run.score,12);
  assert.equal(hit(run),'immune');assert.equal(run.score,12);
});
test('damage never makes the score negative; report only the actual loss', () => {
  const run=newRun();award(run,2);
  const before=run.score;hit(run);
  assert.equal(run.score-before,-2);assert.equal(run.score,0);
});
test('twelve pickups trigger a timed double-score rush', () => {
  const run=newRun();
  for(let i=0;i<RUSH_TARGET;i++)collect(run);
  assert.equal(run.frenzy,8);assert.equal(run.charge,0);
  assert.equal(collect(run,'gold'),100);
  tick(run,8.1);assert.equal(run.frenzy,0);
  assert.equal(collect(run,'pearl'),5);
});
test('magnet and current are temporary; the current increases forward speed', () => {
  const run=newRun(),normal=newRun();
  assert.equal(collect(run,'magnet'),10);assert.equal(run.magnet,10);
  assert.equal(collect(run,'gate'),15);assert.equal(run.current,4);
  assert.ok(advance(run,.05)>advance(normal,.05));
  tick(run,10);assert.equal(run.magnet,0);assert.equal(run.current,0);
});
test('treasures offer magnet, healing, full-health shield, or jackpot', () => {
  const a=newRun();assert.deepEqual(openTreasure(a,0),{delta:40,reward:'magnet'});assert.equal(a.magnet,10);
  const b=newRun();b.lives=1;assert.equal(openTreasure(b,.5).reward,'heal');assert.equal(b.lives,2);
  const c=newRun();assert.equal(openTreasure(c,.5).reward,'shield');assert.equal(c.lives,3);assert.equal(c.shield,9);
  const d=newRun();assert.deepEqual(openTreasure(d,.99),{delta:100,reward:'jackpot'});assert.equal(d.treasures,1);
});
test('close calls reward skilled dodging, not invulnerability or boosts', () => {
  const run=newRun();assert.equal(nearMiss(run),8);assert.equal(run.nearMisses,1);assert.equal(run.charge,2);
  boost(run);assert.equal(nearMiss(run),0);
  tick(run,1);hit(run);assert.equal(nearMiss(run),0);
});
test('completed runs cannot receive treasure, damage, or near-miss points', () => {
  const run=newRun();tick(run,110);assert.equal(run.ended,true);
  const saved={...run};collect(run,'magnet');openTreasure(run);nearMiss(run);award(run,100);hit(run);
  assert.deepEqual(run,saved);
});
test('encounters are spaced across the journey and jellyfish are hazards', () => {
  assert.ok(ENCOUNTERS.length>=8);
  ENCOUNTERS.forEach((event,i)=>{assert.ok(event.at>0&&event.at<RUN_LENGTH);if(i)assert.ok(event.at>ENCOUNTERS[i-1].at);});
  assert.equal(isHazard('jelly'),true);assert.equal(isHazard('chest'),false);assert.equal(isHazard('gate'),false);
});
