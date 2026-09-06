import * as T from './vendor/three.module.min.js';

// Static world-space triangles come from the rendered meshes, including every instance.
// Spatial cells only select candidates; collision always uses the actual triangle faces.
const CELL = 20, EPS = .002;
const tri = new T.Triangle(), closest = new T.Vector3(), normal = new T.Vector3();
const probe = new T.Vector3(), step = new T.Vector3(), matrix = new T.Matrix4(), instance = new T.Matrix4();
const a = new T.Vector3(), b = new T.Vector3(), c = new T.Vector3();
const key = (x,y,z) => `${x},${y},${z}`;

export class SeaCollision {
  constructor(root, solidMaterials) {
    this.records=[]; this.cells=new Map(); this.triangles=0;
    root.updateMatrixWorld(true);
    root.traverse(mesh=>{
      if(!mesh.isMesh || !solidMaterials.has(mesh.material))return;
      const count=mesh.isInstancedMesh?mesh.count:1;
      for(let i=0;i<count;i++){
        matrix.copy(mesh.matrixWorld);
        if(mesh.isInstancedMesh){mesh.getMatrixAt(i,instance);matrix.multiply(instance);}
        this.add(mesh.geometry,matrix,mesh.name||mesh.material.name||'solid',i);
      }
    });
  }
  add(geometry,worldMatrix,name,index){
    const position=geometry.attributes.position, indices=geometry.index;
    const length=indices?indices.count:position.count, vertices=new Float32Array(length*3), box=new T.Box3();
    for(let i=0;i<length;i++){
      probe.fromBufferAttribute(position,indices?indices.getX(i):i).applyMatrix4(worldMatrix);
      vertices.set([probe.x,probe.y,probe.z],i*3);box.expandByPoint(probe);
    }
    const record={vertices,box,name,index}, id=this.records.length;
    this.records.push(record);this.triangles+=length/3;
    for(let x=Math.floor(box.min.x/CELL);x<=Math.floor(box.max.x/CELL);x++)
      for(let y=Math.floor(box.min.y/CELL);y<=Math.floor(box.max.y/CELL);y++)
        for(let z=Math.floor(box.min.z/CELL);z<=Math.floor(box.max.z/CELL);z++){
          const k=key(x,y,z), ids=this.cells.get(k)||[];ids.push(id);this.cells.set(k,ids);
        }
  }
  candidates(p,radius){
    const ids=new Set();
    for(let x=Math.floor((p.x-radius)/CELL);x<=Math.floor((p.x+radius)/CELL);x++)
      for(let y=Math.floor((p.y-radius)/CELL);y<=Math.floor((p.y+radius)/CELL);y++)
        for(let z=Math.floor((p.z-radius)/CELL);z<=Math.floor((p.z+radius)/CELL);z++)
          for(const id of this.cells.get(key(x,y,z))||[])ids.add(id);
    return [...ids].map(id=>this.records[id]).filter(r=>r.box.distanceToPoint(p)<radius);
  }
  isInside(p){
    const ray=new T.Ray(p,new T.Vector3(1,.137,.071).normalize()),hit=new T.Vector3();
    for(const record of this.candidates(p,.001)){
      if(!record.box.containsPoint(p))continue;
      const distances=[],v=record.vertices;
      for(let i=0;i<v.length;i+=9){
        a.fromArray(v,i);b.fromArray(v,i+3);c.fromArray(v,i+6);
        if(ray.intersectTriangle(a,b,c,false,hit)){
          const d=hit.distanceTo(p);if(d>EPS&&!distances.some(n=>Math.abs(n-d)<.0001))distances.push(d);
        }
      }
      if(distances.length%2)return true;
    }
    return false;
  }
  place(position,radius,floorHeight,ceiling,boundary){
    const original=new T.Vector3(position.x,position.y,position.z),candidate=new T.Vector3();
    for(const distance of [0,3,6,10,16,24])for(let i=0;i<(distance?8:1);i++){
      const angle=i*Math.PI/4;candidate.copy(original);candidate.x+=Math.sin(angle)*distance;candidate.z+=Math.cos(angle)*distance;
      candidate.y=Math.max(floorHeight(candidate.x,candidate.z)+radius,Math.min(ceiling,original.y));
      if(candidate.y>ceiling||Math.hypot(candidate.x,candidate.z)>boundary)continue;
      if(!this.contacts(candidate,radius)&&!this.isInside(candidate)){position.copy(candidate);return true;}
    }
    return false;
  }
  contacts(p,radius,resolve=false,velocity=null){
    let hits=0;
    for(const record of this.candidates(p,radius)){
      const v=record.vertices;
      for(let i=0;i<v.length;i+=9){
        a.fromArray(v,i);b.fromArray(v,i+3);c.fromArray(v,i+6);tri.set(a,b,c);
        tri.closestPointToPoint(p,closest);normal.copy(p).sub(closest);
        const d=normal.length();if(d>=radius-EPS)continue;
        hits++;
        if(!resolve)continue;
        if(d<1e-8)tri.getNormal(normal);else normal.divideScalar(d);
        p.addScaledVector(normal,radius-d+EPS);
        if(velocity){const inward=Math.min(0,velocity.x*normal.x+velocity.y*normal.y+velocity.z*normal.z);velocity.x-=normal.x*inward;velocity.y-=normal.y*inward;velocity.z-=normal.z*inward;}
      }
    }
    return hits;
  }
  resolve(position,velocity,radius=1.55,previous=null,floorHeight=null){
    const target=new T.Vector3(position.x,position.y,position.z);
    const current=previous?new T.Vector3(previous.x,previous.y,previous.z):target.clone();
    step.copy(target).sub(current);
    // A thin wall cannot be skipped by a dash or a low-frame-rate step.
    const count=Math.max(1,Math.ceil(step.length()/Math.min(.4,radius*.35)));
    step.divideScalar(count);let contacts=0;
    const safe=current.clone();let hasSafe=this.contacts(current,radius)===0;
    for(let i=0;i<count;i++){
      current.add(step);
      for(let iteration=0;iteration<4;iteration++){
        if(floorHeight)current.y=Math.max(current.y,floorHeight(current.x,current.z)+radius);
        const hits=this.contacts(current,radius,true,velocity);contacts+=hits;if(!hits)break;
      }
      if(this.contacts(current,radius)>0&&hasSafe){current.copy(safe);if(velocity)velocity.x=velocity.y=velocity.z=0;}
      else if(this.contacts(current,radius)===0){safe.copy(current);hasSafe=true;}
    }
    position.x=current.x;position.y=current.y;position.z=current.z;
    return contacts;
  }
  cameraEnd(start,end,radius=.32){
    const direction=new T.Vector3().subVectors(end,start), length=direction.length();direction.normalize();
    const position=new T.Vector3();
    for(let d=1.7;d<length;d+=.25){
      position.copy(start).addScaledVector(direction,d);
      if(this.contacts(position,radius))return start.clone().addScaledVector(direction,Math.max(1.5,d-.4));
    }
    return end;
  }
}
