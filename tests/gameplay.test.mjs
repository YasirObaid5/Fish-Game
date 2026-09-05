import test from 'node:test';
import assert from 'node:assert/strict';
import { newRun, movement, advance, boost, collect, hit, overlaps, RUN_LENGTH } from '../gameplay.mjs';

test('diagonal controls have the same speed as one arrow', () => {
  const diagonal = movement(new Set(['ArrowRight','ArrowUp']));
  assert.ok(Math.abs(Math.hypot(diagonal.x,diagonal.y)-1)<1e-10);
  assert.deepEqual(movement(new Set(['ArrowRight','ArrowLeft'])),{x:0,y:0});
});
test('fast depth crossings collide, nearby fish in another lane do not', () => {
  assert.equal(overlaps({x:0,y:4,z:0},{x:0,y:4,z:2},1,-3),true);
  assert.equal(overlaps({x:0,y:4,z:0},{x:2,y:4,z:2},1,-3),false);
  assert.equal(overlaps({x:0,y:4,z:0},{x:0,y:7,z:.1},1,-1),false);
});
test('boost and shield protect lives; invulnerability prevents double hits', () => {
  const run = newRun();
  assert.equal(boost(run),true);assert.equal(boost(run),false);
  assert.equal(hit(run),'defeated');assert.equal(run.lives,3);
  for(let i=0;i<20;i++)advance(run,.05);
  collect(run,'shield');assert.equal(hit(run),'shield');assert.equal(run.lives,3);
  assert.equal(hit(run),'immune');
  for(let i=0;i<30;i++)advance(run,.05);
  assert.equal(hit(run),'hurt');assert.equal(run.lives,2);assert.equal(hit(run),'immune');
});
test('run wins at 800 metres and is then immutable', () => {
  const run = newRun();
  for(let i=0;i<2000&&!run.ended;i++)advance(run,.05);
  assert.equal(run.distance,RUN_LENGTH);assert.equal(run.won,true);
  const before={...run};advance(run,.05);collect(run);boost(run);hit(run);
  assert.deepEqual(run,before);
});
test('three separated hits end a run and fresh restart resets progress', () => {
  const run=newRun();collect(run,'gold');
  for(let j=0;j<3;j++){hit(run);for(let i=0;i<45;i++)advance(run,.05);}
  assert.equal(run.lives,0);assert.equal(run.ended,true);assert.equal(run.won,false);
  assert.equal(newRun().score,0);assert.equal(newRun().lives,3);
});
