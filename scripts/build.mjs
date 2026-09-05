import { build } from 'esbuild';
import { mkdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
await build({absWorkingDir:root,entryPoints:['ocean.js'],bundle:true,format:'iife',target:'es2020',minify:true,outfile:'ocean.bundle.js',legalComments:'inline'});
await mkdir(new URL('../dist/',import.meta.url),{recursive:true});
for(const name of ['index.html','style.css','ocean.bundle.js']){
  await copyFile(new URL('../'+name,import.meta.url),new URL('../dist/'+name,import.meta.url));
}
await copyFile(new URL('../vendor/THREE-LICENSE.txt',import.meta.url),new URL('../dist/THREE-LICENSE.txt',import.meta.url));
console.log('Built the 3D game into dist/.');
