import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../vendor/three.module.min.js';
import { SeaCollision } from '../sea-collision.js';

function world(mesh){const group=new T.Group();group.add(mesh);return new SeaCollision(group,new Set([mesh.material]));}
test('every rock instance contributes its exact rotated, non-uniformly scaled mesh',()=>{
  const mesh=new T.InstancedMesh(new T.BoxGeometry(2,2,2),new T.MeshBasicMaterial(),15);
  for(let i=0;i<15;i++)mesh.setMatrixAt(i,new T.Matrix4().compose(new T.Vector3(i*8,0,0),new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),.3),new T.Vector3(1,2,.7)));
  const collision=world(mesh);assert.equal(collision.records.length,15);
  for(let i=0;i<15;i++){
    const from={x:i*8,y:0,z:5},to={x:i*8,y:0,z:-5},velocity={x:0,y:0,z:-21};
    assert.ok(collision.resolve(to,velocity,.6,from)>0);assert.ok(to.z>1,'solid stops a full swept crossing');
    assert.equal(collision.contacts(new T.Vector3(to.x,to.y,to.z),.59),0);
  }
});
test('fast boost cannot tunnel through a thin rock face; tangential motion slides',()=>{
  const mesh=new T.Mesh(new T.BoxGeometry(8,8,.07),new T.MeshBasicMaterial()),collision=world(mesh);
  const p={x:2,y:1,z:-8},v={x:4,y:1,z:-21};collision.resolve(p,v,.6,{x:0,y:0,z:8});
  assert.ok(p.z>.6);assert.ok(p.x>1.8);assert.ok(Math.abs(v.z)<.01);assert.ok(v.x>3.9);
});
test('arch opening remains open while the top and side surfaces are solid',()=>{
  const mesh=new T.Mesh(new T.TorusGeometry(6,1,12,48),new T.MeshBasicMaterial()),collision=world(mesh);
  const center={x:0,y:0,z:-5};assert.equal(collision.resolve(center,null,1.55,{x:0,y:0,z:5}),0);assert.ok(Math.abs(center.z+5)<1e-8);
  for(const [x,y] of [[0,6],[6,0],[-6,0]]){const p={x,y,z:-5};assert.ok(collision.resolve(p,null,1.55,{x,y,z:5})>0);assert.equal(collision.contacts(new T.Vector3(p.x,p.y,p.z),1.54),0,'slides around the surface without entering it');}
});
test('camera stops before visible geometry rather than clipping through it',()=>{
  const mesh=new T.Mesh(new T.BoxGeometry(8,8,1),new T.MeshBasicMaterial()),collision=world(mesh);
  const p=collision.cameraEnd(new T.Vector3(0,0,5),new T.Vector3(0,0,-5));assert.ok(p.z>.8);
});

test('treasure placement escapes a rock interior and stays accessible below the surface',()=>{
 const mesh=new T.Mesh(new T.BoxGeometry(8,8,8),new T.MeshBasicMaterial()),collision=world(mesh);
 assert.equal(collision.isInside(new T.Vector3()),true);assert.equal(collision.isInside(new T.Vector3(5,0,0)),false);
 const p=new T.Vector3();assert.equal(collision.place(p,2.1,()=>-10,12,100),true);
 assert.equal(collision.isInside(p),false);assert.equal(collision.contacts(p,2.1),0);assert.ok(p.y<=12);
});
