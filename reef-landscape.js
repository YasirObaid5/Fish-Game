import * as T from './vendor/three.module.min.js';

// An authored, asymmetric reef ravine. Every outcrop has a closed rock mesh;
// the exact same top function anchors coral without levitating colonies.
const OUTCROPS = [
  {x:-15,z:12,rx:7,rz:18,h:13,seed:1.8},
  {x:16,z:-5,rx:8,rz:20,h:16,seed:4.2},
  {x:-19,z:-42,rx:9,rz:20,h:23,seed:2.9},
  {x:22,z:-60,rx:10,rz:22,h:24,seed:7.6},
  {x:-37,z:-81,rx:13,rz:23,h:29,seed:11.3},
];
function relief(rock,x,z){
  const u=(x-rock.x)/rock.rx,v=(z-rock.z)/rock.rz;
  const a=Math.atan2(v,u),edge=1.+.09*Math.sin(a*3.+rock.seed)+.055*Math.cos(a*7.-rock.seed);
  const radius=Math.sqrt(u*u+v*v)/edge;
  if(radius>=1)return 0;
  const shoulder=Math.pow(Math.max(0,1-radius*radius),.60);
  const terraces=Math.sin(shoulder*23+rock.seed+Math.sin(a*2.)*.8)*.65+Math.sin(x*.95+z*.56+rock.seed)*.38+Math.sin(x*2.3-z*1.45)*.12;
  return Math.max(0,rock.h*shoulder+terraces*Math.min(1,shoulder*6));
}
export function createReefLandscape({floor,material,coarse=false}){
  const group=new T.Group();group.name='sculpted-reef-ravine';
  const floorAt=(x,z)=>floor(x,z)+Math.max(0,...OUTCROPS.map(rock=>relief(rock,x,z)));
  for(const rock of OUTCROPS){
    const rings=coarse?26:38,sides=coarse?64:88,positions=[],uv=[],indices=[];
    // Polar topology has no square edge, open seam or hidden bounding box.
    for(let row=0;row<=rings;row++){
      const radius=.0001+(1-.0001)*row/rings;
      for(let j=0;j<=sides;j++){
        const a=j/sides*Math.PI*2,edge=1.+.09*Math.sin(a*3.+rock.seed)+.055*Math.cos(a*7.-rock.seed),x=rock.x+Math.cos(a)*rock.rx*radius*edge,z=rock.z+Math.sin(a)*rock.rz*radius*edge;
        positions.push(x,floor(x,z)+relief(rock,x,z)-.15,z);uv.push(x*.12,z*.12);
        if(row<rings&&j<sides){const i=row*(sides+1)+j;indices.push(i,i+1,i+sides+1,i+1,i+sides+2,i+sides+1);}
      }
    }
    const center=positions.length/3;positions.push(rock.x,floor(rock.x,rock.z)-4,rock.z);uv.push(.5,.5);
    for(let j=0;j<sides;j++){const i=rings*(sides+1)+j;indices.push(center,i,i+1);}
    const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geometry.setIndex(indices);geometry.computeVertexNormals();
    const mesh=new T.Mesh(geometry,material);mesh.name='reef-ravine-rock';mesh.castShadow=mesh.receiveShadow=true;group.add(mesh);
  }
  return {group,floorAt};
}
