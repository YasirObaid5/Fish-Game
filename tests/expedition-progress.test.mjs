import test from 'node:test';
import assert from 'node:assert/strict';
import { JOURNAL_KEY, MEDALS, QUESTS, loadJournal, saveJournal, recordStat, hasMedal, medalProgress, rankOf, newExpedition, questState, progressQuest, discoverPlace } from '../expedition-progress.mjs';

const memory = (initial = null) => {
  const data = new Map(initial === null ? [] : [[JOURNAL_KEY, initial]]);
  return { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value) };
};

test('missing, denied and malformed storage produce a safe empty journal', () => {
  for (const storage of [undefined, memory(), memory('{broken'), { getItem() { throw Error('Denied'); } }]) {
    const journal = loadJournal(storage);
    assert.equal(journal.xp, 0); assert.equal(journal.quests, 0);
    assert.equal(journal.stats.pearls, 0); assert.deepEqual(journal.places, []);
    assert.equal(rankOf(journal), 0); assert.equal(questState(newExpedition(journal)).id, 'pearls');
  }
  assert.equal(saveJournal(loadJournal(), { setItem() { throw Error('Quota'); } }), false);
});

test('stored fields are bounded, deduplicated and stripped of arbitrary content', () => {
  const journal = loadJournal(memory(JSON.stringify({ xp: -5, quests: 1e9,
    stats: { pearls: 1.6, escapes: '999', breaches: -5, races: null, treasures: 1e20 },
    places: ['reef:coral-cathedral', 'reef:coral-cathedral', '<script>', 'alien:place', 7],
    species: ['manta', 'manta', 'not-a-fish', null], raceBest: -3 })));
  assert.equal(journal.xp, 0); assert.equal(journal.quests, 100000);
  assert.equal(journal.stats.pearls, 1); assert.equal(journal.stats.escapes, 0);
  assert.equal(journal.stats.treasures, 100000000);
  assert.deepEqual(journal.places, ['reef:coral-cathedral']); assert.deepEqual(journal.species, ['manta']);
  assert.equal(journal.raceBest, null);
});

test('lifetime milestones unlock each ability once and survive reload/new expeditions', () => {
  const storage = memory(), journal = loadJournal(storage);
  for (const medal of MEDALS.filter(m => m.stat !== 'places')) {
    assert.equal(hasMedal(journal, medal.id), false);
    assert.deepEqual(recordStat(journal, medal.stat, medal.target - 1), []);
    const earned = recordStat(journal, medal.stat);
    assert.deepEqual(earned.map(m => m.id), [medal.id]);
    assert.equal(hasMedal(journal, medal.id), true);
    assert.deepEqual(recordStat(journal, medal.stat), []);
    assert.equal(medalProgress(journal, medal), medal.target);
  }
  const expedition = newExpedition(journal);
  for (const id of ['arch','garden','lagoon','wreck','spire','vent']) discoverPlace(expedition, journal, 'reef', id);
  assert.equal(hasMedal(journal, 'explorer'), true);
  saveJournal(journal, storage);
  const restored = loadJournal(storage);
  assert.ok(MEDALS.every(m => hasMedal(restored, m.id)));
  assert.deepEqual(newExpedition(restored).visited, []);
  assert.equal(restored.places.length, 6);
});

test('chained quests rotate endlessly without counting work done before the next quest', () => {
  const journal = loadJournal(), expedition = newExpedition(journal);
  progressQuest(expedition, journal, 'places', 20);
  assert.equal(questState(expedition).id, 'pearls');
  const first = progressQuest(expedition, journal, 'pearls', 12);
  assert.equal(first.reward, 90);
  assert.equal(questState(expedition).id, 'places'); assert.equal(questState(expedition).progress, 0);
  for (let i = 0; i < QUESTS.length * 3 - 1; i++) {
    const current = questState(expedition);
    assert.equal(progressQuest(expedition, journal, current.id, current.target).id, current.id);
    assert.equal(questState(expedition).progress, 0);
  }
  assert.equal(journal.quests, QUESTS.length * 3);
  assert.equal(expedition.completed, QUESTS.length * 3);
  assert.equal(questState(expedition).id, 'pearls'); assert.equal(rankOf(journal), 3);
  assert.equal(questState(newExpedition(journal)).id, 'pearls');
});

test('places reward one discovery per expedition and only first visits give lifetime XP', () => {
  const journal = loadJournal(), expedition = newExpedition(journal);
  assert.deepEqual(discoverPlace(expedition, journal, 'reef', 'arch'), { first: true, delta: 60 });
  assert.equal(discoverPlace(expedition, journal, 'reef', 'arch'), null);
  assert.deepEqual(discoverPlace(newExpedition(journal), journal, 'reef', 'arch'), { first: false, delta: 20 });
  assert.equal(journal.xp, 60); assert.equal(journal.places.length, 1);
});

test('invalid runtime progress cannot corrupt counters or spuriously unlock medals', () => {
  const journal = loadJournal(), expedition = newExpedition(journal);
  const baseline = structuredClone({ journal, expedition });
  for (const count of [NaN, Infinity, -Infinity, -1, '3', null]) {
    assert.deepEqual(recordStat(journal, 'escapes', count), []);
    assert.equal(progressQuest(expedition, journal, 'pearls', count), null);
  }
  for (const kind of ['toString', '__proto__', 'unknown']) {
    assert.deepEqual(recordStat(journal, kind), []);
    assert.equal(progressQuest(expedition, journal, kind), null);
  }
  assert.deepEqual({ journal, expedition }, baseline);
});
