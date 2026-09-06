import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';

const site = process.env.GAME_URL || 'https://brilliant-kataifi-874958.netlify.app';
const files = ['index.html','style.css','mobile.css','expedition.css','ocean.bundle.js','pwa.js','manifest.webmanifest','sw.js',
  'assets/materials/rock-color.jpg','assets/materials/rock-normal.jpg','assets/materials/rock-arm.jpg',
  'assets/materials/sand-color.jpg','assets/materials/sand-normal.jpg','assets/materials/sand-arm.jpg','assets/models/reef-kit.glb',
  'icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png'];
const digest = value => createHash('sha256').update(value).digest('hex');
const normalizeHTML = bytes => Buffer.from(bytes.toString()
  .replace(/<!--[^]*?-->/g,'')
  .replace(/<meta name="(?:hosting-provider|netlify-deploy)"[^>]*>/g,'')
  .replace(/\s+/g,' '));
for (const file of files) {
  let local = await readFile(new URL('../dist/'+file,import.meta.url));
  const response = await fetch(new URL('/'+file+'?verify='+digest(local).slice(0,16),site),{cache:'no-store'});
  assert.equal(response.status,200,file+' is published');
  let remote = Buffer.from(await response.arrayBuffer());
  if (file === 'sw.js') assert.match(response.headers.get('cache-control') || '',/no-cache|no-store/,'Worker is not stale-cached');
  if (file === 'manifest.webmanifest') assert.match(response.headers.get('content-type') || '',/manifest\+json/);
  if (file === 'index.html') { local = normalizeHTML(local); remote = normalizeHTML(remote); }
  assert.equal(digest(remote),digest(local),file+' matches this production build');
  console.log('MATCH',file,remote.byteLength);
}
console.log('PASS: public Android PWA matches the local production build.');
