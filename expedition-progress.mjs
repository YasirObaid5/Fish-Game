const finite = (n, max = 1e8) => Math.max(0, Math.min(max, Number.isFinite(n) ? Math.floor(n) : 0));
export const JOURNAL_KEY = 'amaq-expedition-v1';
export const RANKS = ['رفيق المرجان', 'رحّال التيارات', 'مستكشف الأعماق', 'حارس المحيط'];
export const MEDALS = [
  {id:'messi',name:'ميدالية ميسي',stat:'escapes',target:3,condition:'اهرب من 3 مطاردات',ability:'مراوغة مزدوجة',detail:'اضغط X أو زر المراوغة: خدعة جانبية سريعة مع حماية قصيرة. تستعيدها كل 12 ثانية.',mark:'10'},
  {id:'dolphin',name:'ميدالية الدلفين',stat:'breaches',target:4,condition:'اقفز فوق السطح 4 مرات',ability:'اندفاع أسرع تعافياً',detail:'تعود طاقة الاندفاع أسرع بنسبة 25٪، تلقائياً في كل رحلاتك.',mark:'↑'},
  {id:'pearl',name:'ميدالية اللؤلؤ',stat:'pearls',target:60,condition:'اجمع 60 لؤلؤة',ability:'جاذبية اللآلئ',detail:'تنجذب اللآلئ القريبة إليك تلقائياً من مسافة 3 أمتار.',mark:'◈'},
  {id:'explorer',name:'ميدالية الرحّالة',stat:'places',target:6,condition:'سجّل 6 وجهات في دفتر البحر',ability:'رؤية الكنوز',detail:'يكشف السونار مواقع صناديق الكنز القريبة على الخريطة.',mark:'◎'},
];
export const medalProgress = (journal, medal) => Math.min(medal.target, medal.stat==='places'?journal.places.length:journal.stats[medal.stat]||0);
export const hasMedal = (journal,id) => {const medal=MEDALS.find(m=>m.id===id);return !!medal&&medalProgress(journal,medal)>=medal.target;};
export function recordStat(journal,kind,count=1){
  if(!Object.hasOwn(journal.stats,kind)||!Number.isFinite(count)||count<=0)return [];
  count=Math.floor(count);
  const before=new Set(MEDALS.filter(m=>hasMedal(journal,m.id)).map(m=>m.id));
  journal.stats[kind]=finite(journal.stats[kind]+count);
  return MEDALS.filter(m=>!before.has(m.id)&&hasMedal(journal,m.id));
}
export const QUESTS = [
  { id: 'pearls', title: 'خيط من اللآلئ', detail: 'اجمع 12 لؤلؤة في رحلتك', target: 12, reward: 90 },
  { id: 'places', title: 'ما وراء الشعاب', detail: 'زر وجهتين مختلفتين في الخليج', target: 2, reward: 120 },
  { id: 'breaches', title: 'لمسة من السماء', detail: 'اقفز فوق السطح مرتين — اغص بين القفزتين', target: 2, reward: 100 },
  { id: 'races', title: 'ارقص مع التيار', detail: 'أكمل سباق حلقات واحداً', target: 1, reward: 150 },
  { id: 'treasures', title: 'أسرار البحر', detail: 'افتح صندوقي كنز', target: 2, reward: 140 },
  { id: 'escapes', title: 'أذكى من المفترس', detail: 'افلت من مطاردة واحدة', target: 1, reward: 160 },
];
export function loadJournal(storage) {
  let raw; try { raw = JSON.parse(storage?.getItem(JOURNAL_KEY) || 'null'); } catch {}
  return { xp: finite(raw?.xp), quests: finite(raw?.quests, 1e5), stats: Object.fromEntries(['pearls','breaches','escapes','races','treasures'].map(key=>[key,finite(raw?.stats?.[key])])),
    places: Array.isArray(raw?.places) ? [...new Set(raw.places.filter(x => typeof x === 'string' && /^(reef|kelp|abyss):[a-z-]{1,30}$/.test(x)))].slice(0,60) : [],
    species: Array.isArray(raw?.species) ? [...new Set(raw.species.filter(x => ['turtle','manta','school'].includes(x)))] : [],
    raceBest: Number.isFinite(raw?.raceBest) && raw.raceBest > 0 ? Math.min(raw.raceBest,120) : null };
}
export function saveJournal(journal, storage) { try { storage?.setItem(JOURNAL_KEY,JSON.stringify(journal)); return true; } catch { return false; } }
export const rankOf = journal => Math.min(3, Math.floor(journal.xp / 650));
export function newExpedition(journal) {
  return { questIndex: journal.quests % QUESTS.length, completed: 0, counters: {pearls:0,places:0,breaches:0,races:0,treasures:0,escapes:0},
    baseline: 0, visited: [], discoveredSpecies: [], nextEvent: 28, eventIndex: 0, event: null, elapsed: 0 };
}
export function questState(expedition) {
  const quest = QUESTS[expedition.questIndex];
  return {...quest, progress: Math.min(quest.target, expedition.counters[quest.id] - expedition.baseline)};
}
export function progressQuest(expedition, journal, kind, count=1) {
  if (!Object.hasOwn(expedition.counters,kind) || !Number.isFinite(count) || count <= 0) return null;
  count = Math.floor(count);
  expedition.counters[kind] += count;
  const quest = questState(expedition);
  if (quest.progress < quest.target) return null;
  journal.quests++; journal.xp += quest.reward; expedition.completed++;
  expedition.questIndex = (expedition.questIndex+1)%QUESTS.length;
  expedition.baseline = expedition.counters[QUESTS[expedition.questIndex].id];
  return quest;
}
export function discoverPlace(expedition, journal, biome, id) {
  if (expedition.visited.includes(id)) return null;
  expedition.visited.push(id);
  const key = biome+':'+id, first = !journal.places.includes(key);
  if (first) { journal.places.push(key); journal.xp += 60; }
  return { first, delta: first ? 60 : 20 };
}
