import * as T from './vendor/three.module.min.js';

const CELL=32, matrix=new T.Matrix4(), tint=new T.Color();
const lodCache=new WeakMap();

/** Vertex clustering is used only on scenery; the collision mesh is never changed. */
export function sceneryLOD(source, divisions){
  source.computeBoundingBox();const box=source.boundingBox,size=box.getSize(new T.Vector3());
  const step=Math.max(size.x,size.y,size.z)/divisions;
  if(!step)return source;
  const attributes=Object.entries(source.attributes),p=source.attributes.position,cells=new Map(),ids=[],buckets=[];
  for(let i=0;i<p.count;i++){
    const k=[Math.round((p.getX(i)-box.min.x)/step),Math.round((p.getY(i)-box.min.y)/step),Math.round((p.getZ(i)-box.min.z)/step)].join(':');
    let id=cells.get(k);if(id===undefined){id=buckets.length;cells.set(k,id);buckets.push({count:0,values:attributes.map(([,a])=>new Array(a.itemSize).fill(0))});}
    ids[i]=id;const bucket=buckets[id];bucket.count++;
    attributes.forEach(([,a],j)=>{for(let c=0;c<a.itemSize;c++)bucket.values[j][c]+=a.getComponent(i,c);});
  }
  const index=[],seen=new Set(),count=source.index?.count||p.count;
  for(let i=0;i<count;i+=3){const a=ids[source.index?source.index.getX(i):i],b=ids[source.index?source.index.getX(i+1):i+1],c=ids[source.index?source.index.getX(i+2):i+2];
    if(a===b||a===c||b===c)continue;const key=[a,b,c].sort((x,y)=>x-y).join(':');if(seen.has(key))continue;seen.add(key);index.push(a,b,c);
  }
  if(index.length<18)return source;
  const geometry=new T.BufferGeometry();
  attributes.forEach(([name,a],j)=>geometry.setAttribute(name,new T.Float32BufferAttribute(buckets.flatMap(b=>b.values[j].map(v=>v/b.count)),a.itemSize)));
  geometry.setIndex(index);geometry.computeVertexNormals();geometry.computeBoundingSphere();return geometry;
}
function levelsFor(geometry){
  if(!geometry.boundingSphere)geometry.computeBoundingSphere();
  if(geometry.userData.distanceLevels)return geometry.userData.distanceLevels;
  if(lodCache.has(geometry))return lodCache.get(geometry);
  const count=(geometry.index?.count||geometry.attributes.position.count)/3;
  geometry.computeBoundingBox();const size=geometry.boundingBox.getSize(new T.Vector3());
  // Thin leaves and low-poly stems already have a tiny silhouette budget.
  const levels=count<600||Math.min(size.x,size.y,size.z)/Math.max(size.x,size.y,size.z)<.045
    ?[geometry,geometry,geometry]:[geometry,sceneryLOD(geometry,14),sceneryLOD(geometry,7)];
  lodCache.set(geometry,levels);return levels;
}
function staticTransform(mesh){mesh.updateMatrix();mesh.updateMatrixWorld(true);mesh.matrixAutoUpdate=false;}

/** Fixed-sized cells retain world state; only nearby cells submit geometry. */
export class OceanSectors {
  constructor(root,{coarse=false,terrain=[]}={}){
    this.root=root;this.coarse=coarse;this.entries=terrain;this.batches=[];this.owned=[];this.lastLevels=new Map();
    root.updateMatrixWorld(true);
    const sources=[];root.traverse(o=>{if(o.isMesh&&!o.userData.sectorManaged&&!o.material?.isShaderMaterial&&!Array.isArray(o.material)&&o.visible&&o.instanceMatrix?.usage!==T.DynamicDrawUsage)sources.push(o);});
    for(const source of sources){
      const levels=levelsFor(source.geometry);
      if(source.isInstancedMesh){
        const cells=new Map();
        for(let i=0;i<source.count;i++){
          source.getMatrixAt(i,matrix);matrix.premultiply(source.matrixWorld);
          const cellWidth=source.name.startsWith('authored-')?8:CELL;
          const pos=new T.Vector3().setFromMatrixPosition(matrix),key=Math.floor(pos.x/cellWidth)+':'+Math.floor(pos.z/cellWidth);
          if(!cells.has(key))cells.set(key,[]);cells.get(key).push({index:i,matrix:matrix.clone()});
        }
        for(const instances of cells.values()){
          const group=new T.Group();group.name='sector-'+source.name;group.userData.sectorManaged=true;
          const meshes=levels.map(geometry=>{
            const mesh=new T.InstancedMesh(geometry,source.material,instances.length);mesh.name=source.name+'-distance';mesh.userData.sectorManaged=true;
            instances.forEach((instance,i)=>{mesh.setMatrixAt(i,instance.matrix);if(source.instanceColor){source.getColorAt(instance.index,tint);mesh.setColorAt(i,tint);}});
            mesh.customDepthMaterial=source.customDepthMaterial;mesh.receiveShadow=source.receiveShadow;mesh.computeBoundingSphere();staticTransform(mesh);group.add(mesh);return mesh;
          });
          root.add(group);const sphere=meshes[0].boundingSphere.clone();
          this.entries.push({group,meshes,sphere,casts:source.castShadow,lod:0});this.batches.push({source,instances,meshes});
        }
        source.visible=false;
      }else{
        const sphere=source.geometry.boundingSphere.clone().applyMatrix4(source.matrixWorld);
        this.entries.push({group:source,meshes:[source],levels,sphere,casts:source.castShadow,lod:0});
      }
      for(const geometry of levels)if(geometry!==source.geometry&&!this.owned.includes(geometry))this.owned.push(geometry);
    }
    this.stats={regions:this.entries.length,active:0,high:0,medium:0,low:0,shadowCasters:0,submittedTriangles:0};
  }
  syncColors(){for(const b of this.batches)if(b.source.instanceColor)for(const mesh of b.meshes){b.instances.forEach((v,i)=>{b.source.getColorAt(v.index,tint);mesh.setColorAt(i,tint);});mesh.instanceColor.needsUpdate=true;}}
  update(camera,position,quality){
    const above=camera.position.y>18,far=above?250:this.coarse?112:155,near=this.coarse?13:19,mid=this.coarse?40:55;
    const stats=this.stats;stats.active=stats.high=stats.medium=stats.low=stats.shadowCasters=stats.submittedTriangles=0;
    for(const e of this.entries){
      const distance=Math.max(0,e.sphere.center.distanceTo(position)-e.sphere.radius);
      // Extra margin at activation boundaries prevents thrashing when hovering.
      const visible=distance<far+(e.group.visible?6:0);e.group.visible=visible;if(!visible)continue;
      let lod=distance<near?0:distance<mid?1:2;
      if(lod>e.lod&&distance<(lod===1?near:mid)+3)lod=e.lod;
      if(lod<e.lod&&distance>(e.lod===1?near:mid)-3)lod=e.lod;
      e.lod=lod;stats.active++;stats[['high','medium','low'][lod]]++;
      const casts=e.casts&&distance<(this.coarse?22:32);
      if(e.levels){e.group.geometry=e.levels[lod];e.group.castShadow=casts;}
      else e.meshes.forEach((mesh,i)=>{mesh.visible=i===lod;mesh.castShadow=casts&&i===lod;});
      if(casts)stats.shadowCasters++;
      const mesh=e.levels?e.group:e.meshes[lod];stats.submittedTriangles+=(mesh.geometry.index?.count||mesh.geometry.attributes.position.count)/3*(mesh.count||1);
    }
  }
  dispose(){for(const g of this.owned)g.dispose();}
}

// All tiers share exactly the same perimeter vertices and analytic normals.
// Only interior rings change density, so there are no heightfield LOD cracks.
function heightTile(cx,cz,width,rings,floor,edgeSegments){
  const positions=[],normals=[],uv=[],index=[],count=edgeSegments*4;
  const point=(x,z)=>{const y=floor(x,z),e=.1,n=new T.Vector3(-(floor(x+e,z)-floor(x-e,z))/(2*e),1,-(floor(x,z+e)-floor(x,z-e))/(2*e)).normalize();positions.push(x,y,z);normals.push(n.x,n.y,n.z);uv.push(x/width,z/width);};
  for(let ring=0;ring<rings;ring++){
    const radius=width*.5*(1-ring/rings);
    for(let side=0;side<4;side++)for(let j=0;j<edgeSegments;j++){
      const t=j/edgeSegments*2-1;
      const [x,z]=side===0?[t,-1]:side===1?[1,t]:side===2?[-t,1]:[-1,-t];point(cx+x*radius,cz+z*radius);
    }
  }
  point(cx,cz);const centre=positions.length/3-1;
  for(let ring=0;ring<rings;ring++)for(let j=0;j<count;j++){
    const a=ring*count+j,b=ring*count+(j+1)%count;
    if(ring===rings-1)index.push(a,centre,b);
    else{const c=a+count,d=b+count;index.push(a,c,b,b,c,d);}
  }
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('normal',new T.Float32BufferAttribute(normals,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(index);g.computeBoundingSphere();return g;
}

export function createTerrainSectors(root,material,floor,{coarse=false,radius=420}={}){
  const entries=[],width=40,extent=Math.ceil(radius*1.3/width);
  for(let x=-extent;x<extent;x++)for(let z=-extent;z<extent;z++){
    const cx=(x+.5)*width,cz=(z+.5)*width,group=new T.Group();group.name='seabed-sector';root.add(group);
    const meshes=[coarse?4:6,2,1].map(rings=>{
      const geometry=heightTile(cx,cz,width,rings,floor,coarse?8:12);
      const mesh=new T.Mesh(geometry,material);mesh.receiveShadow=true;mesh.userData.sectorManaged=true;group.add(mesh);staticTransform(mesh);return mesh;
    });
    entries.push({group,meshes,sphere:meshes[0].geometry.boundingSphere.clone(),casts:false,lod:0});
  }
  return entries;
}
