import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as T from '../vendor/three.module.min.js';
import {OceanSectors,sceneryLOD,createTerrainSectors} from '../ocean-sectors.js';
import {parseReefGLB} from '../reef-art.js';
import {OceanRenderer} from '../ocean-renderer.js';

test('distance regions retain original transforms and reuse resources on repeated travel',()=>{
 const root=new T.Group(),g=new T.SphereGeometry(2,32,20),m=new T.MeshStandardMaterial(),source=new T.InstancedMesh(g,m,8),dummy=new T.Object3D();
 source.name='test-rock';source.castShadow=true;
 for(let i=0;i<8;i++){dummy.position.set(i*60,0,0);dummy.updateMatrix();source.setMatrixAt(i,dummy.matrix);source.setColorAt(i,new T.Color(0xff8040));}
 root.add(source);const original=Array.from(source.instanceMatrix.array),sectors=new OceanSectors(root),camera=new T.PerspectiveCamera();camera.position.set(0,10,0);
 sectors.update(camera,new T.Vector3());assert.equal(source.visible,false);assert.ok(sectors.stats.active<sectors.stats.regions);assert.ok(sectors.stats.high>0);assert.ok(sectors.stats.low>0);
 const atOrigin=sectors.entries.map(e=>e.group.visible),objects=sectors.entries.flatMap(e=>e.meshes),geometries=objects.map(o=>o.geometry.uuid);
 for(let n=0;n<12;n++){sectors.update(camera,new T.Vector3(400,0,0));sectors.update(camera,new T.Vector3());}
 assert.deepEqual(sectors.entries.map(e=>e.group.visible),atOrigin);assert.deepEqual(objects.map(o=>o.geometry.uuid),geometries);assert.deepEqual(Array.from(source.instanceMatrix.array),original);
 source.setColorAt(0,new T.Color(0x55ff99));sectors.syncColors();const a=new T.Color(),b=new T.Color();source.getColorAt(0,a);sectors.batches[0].meshes[0].getColorAt(0,b);assert.deepEqual(a,b);
 sectors.dispose();
});
test('scenery simplification stays finite and never edits the original geometry',()=>{
 const source=new T.IcosahedronGeometry(1,8),before=Array.from(source.attributes.position.array),low=sceneryLOD(source,7);
 assert.ok(low.index.count<source.attributes.position.count);assert.ok(Array.from(low.attributes.position.array).every(Number.isFinite));assert.deepEqual(Array.from(source.attributes.position.array),before);
});
test('Blender distance sculptures retain species and bounds with fewer triangles',async()=>{
 const kits=[];for(const suffix of ['','-mid','-far']){const bytes=await readFile(new URL('../assets/models/reef-kit'+suffix+'.glb',import.meta.url));kits.push(parseReefGLB(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength)));}
 for(const [name,high] of kits[0]){
  const mid=kits[1].get(name),far=kits[2].get(name);assert.ok(mid.triangles<high.triangles*.31);assert.ok(far.triangles<high.triangles*.09);
  for(const asset of [mid,far]){assert.ok(Array.from(asset.geometry.attributes.position.array).every(Number.isFinite));assert.ok(asset.dimensions.every((v,i)=>Math.abs(v-high.dimensions[i])<high.dimensions[i]*.15));}
 }
});
test('seabed regions have bounded three-tier geometry',()=>{
 const root=new T.Group(),cells=createTerrainSectors(root,new T.MeshStandardMaterial(),(x,z)=>Math.sin(x*.01)+Math.cos(z*.01),{radius:80});
 assert.ok(cells.length>0);for(const c of cells){assert.equal(c.meshes.length,3);const edge=c.meshes[0].geometry.attributes.position.array.slice(0,12*4*3);for(const mesh of c.meshes.slice(1))assert.deepEqual(mesh.geometry.attributes.position.array.slice(0,12*4*3),edge,'Every tier keeps the same boundary');assert.ok(c.meshes[0].geometry.index.count>c.meshes[1].geometry.index.count);assert.ok(c.meshes[1].geometry.index.count>c.meshes[2].geometry.index.count);}
});
test('adaptive resolution reacts to sustained pressure and recovers slowly',()=>{
 const pipeline=Object.create(OceanRenderer.prototype);Object.assign(pipeline,{coarse:false,adaptiveScale:1,frameSamples:[],goodWindows:0,warmup:0});
 for(let i=0;i<300;i++)pipeline.observeFrame(48);assert.equal(pipeline.adaptiveScale,.6);
 for(let i=0;i<239;i++)pipeline.observeFrame(16);assert.equal(pipeline.adaptiveScale,.6);pipeline.observeFrame(16);assert.equal(pipeline.adaptiveScale,.65);
 const before=pipeline.adaptiveScale;pipeline.observeFrame(4000);assert.equal(pipeline.adaptiveScale,before);
});
