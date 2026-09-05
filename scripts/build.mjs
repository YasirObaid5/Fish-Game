import { build } from 'esbuild';
import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
await build({absWorkingDir:root,entryPoints:['ocean.js'],bundle:true,format:'iife',target:'es2020',minify:true,outfile:'ocean.bundle.js',legalComments:'inline'});
const files = ['index.html','style.css','mobile.css','ocean.bundle.js','pwa.js','manifest.webmanifest',
  'icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png'];
await mkdir(new URL('../dist/icons/',import.meta.url),{recursive:true});
const revision = createHash('sha256');
const headers = await readFile(new URL('../_headers',import.meta.url));
revision.update(headers);
await copyFile(new URL('../_headers',import.meta.url),new URL('../dist/_headers',import.meta.url));
const precache = [];
for (const name of files) {
  const bytes = await readFile(new URL('../'+name,import.meta.url));
  revision.update(name).update(bytes);
  precache.push({url:'/'+name, ...(name === 'index.html' ? {} : {integrity:'sha256-'+createHash('sha256').update(bytes).digest('base64')})});
  await copyFile(new URL('../'+name,import.meta.url),new URL('../dist/'+name,import.meta.url));
}
const template = await readFile(new URL('./sw-template.js',import.meta.url),'utf8');
revision.update(template);
const release = revision.digest('hex').slice(0,16);
const worker = template.replace('__PWA_CACHE_NAME__',JSON.stringify('amaq-pwa-'+release)).replace('__PWA_ASSETS__',JSON.stringify(precache,null,2));
await writeFile(new URL('../sw.js',import.meta.url),worker);
await writeFile(new URL('../dist/sw.js',import.meta.url),worker);
await copyFile(new URL('../vendor/THREE-LICENSE.txt',import.meta.url),new URL('../dist/THREE-LICENSE.txt',import.meta.url));
console.log('Built Android PWA '+release+' into dist/.');
