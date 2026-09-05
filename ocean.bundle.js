(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var ku=0,ic=1,Hu=2;var kn=1,Wu=2,Ur=3,Nr=0,Xt=1,ht=2,Bi=0,Ns=1,Fr=2,nc=3,rc=4,Xu=5;var Or=100,ju=101,qu=102,Yu=103,Zu=104,Ju=200,Ku=201,$u=202,Qu=203,ed=204,td=205,id=206,nd=207,rd=208,sd=209,ad=210,od=211,ld=212,cd=213,hd=214,sc=0,ac=1,oc=2,To=3,lc=4,cc=5,hc=6,uc=7,ud=0,dd=1,pd=2,bi=0,dc=1,pc=2,mc=3,Fs=4,fc=5,gc=6,vc=7;var _c=300,Br=301,Hn=302,wo=303,Eo=304,Os=306,Ba=1e3,Mn=1001,za=1002,li=1003,md=1004;var Bs=1005;var Dt=1006,Ao=1007;var Wn=1008;var zt=1009,xc=1010,yc=1011,zr=1012,Co=1013,on=1014,di=1015,pi=1016,Ro=1017,Po=1018,Gr=1020,Mc=35902,Sc=35899,fd=1021,gd=1022,Ti=1023,An=1026,Xn=1027,Io=1028,Lo=1029,jn=1030,bc=1031;var Tc=1033,Do=33776,Uo=33777,No=33778,Fo=33779,wc=35840,Ec=35841,Ac=35842,Cc=35843,Rc=36196,Pc=37492,Ic=37496,Lc=37488,Dc=37489,Oo=37490,Uc=37491,Nc=37808,Fc=37809,Oc=37810,Bc=37811,zc=37812,Gc=37813,Vc=37814,kc=37815,Hc=37816,Wc=37817,Xc=37818,jc=37819,qc=37820,Yc=37821,Zc=36492,Jc=36494,Kc=36495,$c=36283,Qc=36284,Bo=36285,eh=36286;var os=2300,Ga=2301,Oa=2302,kl=2303,Hl=2400,Wl=2401,Xl=2402;var th=0,vd=1,qn="",Yt="srgb",ls="srgb-linear",cs="linear",Ye="srgb";var On=7680;var _d=512,xd=513,yd=514,zo=515,Md=516,Sd=517,Go=518,bd=519,jl=35044;var ih="300 es",Qi=2e3,xr=2001;function Vp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function hs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Td(){let n=hs("canvas");return n.style.display="block",n}var lu={},yr=null;function nh(...n){let e="THREE."+n.shift();yr?yr("log",e,...n):console.log(e,...n)}function wd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ae(...n){let e="THREE."+(n=wd(n)).shift();if(yr)yr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ce(...n){let e="THREE."+(n=wd(n)).shift();if(yr)yr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Bn(...n){let e=n.join(" ");e in lu||(lu[e]=!0,Ae(...n))}function Ed(n,e,t){return new Promise(function(i,r){setTimeout(function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var Ad={[sc]:1,[oc]:6,[lc]:7,[To]:5,[ac]:0,[hc]:2,[uc]:4,[cc]:3},Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=1234567,vr=Math.PI/180,Mr=180/Math.PI;function Yn(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Pt[255&n]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[255&e]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[63&t|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[255&i]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function ze(n,e,t){return Math.max(e,Math.min(t,n))}function ql(n,e){return(n%e+e)%e}function rs(n,e,t){return(1-t)*n+t*e}function gr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var zi={DEG2RAD:vr,RAD2DEG:Mr,generateUUID:Yn,clamp:ze,euclideanModulo:ql,mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:rs,damp:function(n,e,t,i){return rs(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(ql(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(cu=n);let e=cu+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*vr},radToDeg:function(n){return n*Mr},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let s=Math.cos,a=Math.sin,l=s(t/2),c=a(t/2),o=s((e+i)/2),h=a((e+i)/2),p=s((e-i)/2),d=a((e-i)/2),u=s((i-e)/2),f=a((i-e)/2);switch(r){case"XYX":n.set(l*h,c*p,c*d,l*o);break;case"YZY":n.set(c*d,l*h,c*p,l*o);break;case"ZXZ":n.set(c*p,c*d,l*h,l*o);break;case"XZX":n.set(l*h,c*f,c*u,l*o);break;case"YXY":n.set(c*u,l*h,c*f,l*o);break;case"ZYZ":n.set(c*f,c*u,l*h,l*o);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Ot,denormalize:gr},lh=class lh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lh.prototype.isVector2=!0;var Q=lh,Wt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,l){let c=i[r+0],o=i[r+1],h=i[r+2],p=i[r+3],d=s[a+0],u=s[a+1],f=s[a+2],m=s[a+3];if(p!==m||c!==d||o!==u||h!==f){let _=c*d+o*u+h*f+p*m;_<0&&(d=-d,u=-u,f=-f,m=-m,_=-_);let g=1-l;if(_<.9995){let v=Math.acos(_),x=Math.sin(v);g=Math.sin(g*v)/x,c=c*g+d*(l=Math.sin(l*v)/x),o=o*g+u*l,h=h*g+f*l,p=p*g+m*l}else{c=c*g+d*l,o=o*g+u*l,h=h*g+f*l,p=p*g+m*l;let v=1/Math.sqrt(c*c+o*o+h*h+p*p);c*=v,o*=v,h*=v,p*=v}}e[t]=c,e[t+1]=o,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){let l=i[r],c=i[r+1],o=i[r+2],h=i[r+3],p=s[a],d=s[a+1],u=s[a+2],f=s[a+3];return e[t]=l*f+h*p+c*u-o*d,e[t+1]=c*f+h*d+o*p-l*u,e[t+2]=o*f+h*u+l*d-c*p,e[t+3]=h*f-l*p-c*d-o*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,o=l(i/2),h=l(r/2),p=l(s/2),d=c(i/2),u=c(r/2),f=c(s/2);switch(a){case"XYZ":this._x=d*h*p+o*u*f,this._y=o*u*p-d*h*f,this._z=o*h*f+d*u*p,this._w=o*h*p-d*u*f;break;case"YXZ":this._x=d*h*p+o*u*f,this._y=o*u*p-d*h*f,this._z=o*h*f-d*u*p,this._w=o*h*p+d*u*f;break;case"ZXY":this._x=d*h*p-o*u*f,this._y=o*u*p+d*h*f,this._z=o*h*f+d*u*p,this._w=o*h*p-d*u*f;break;case"ZYX":this._x=d*h*p-o*u*f,this._y=o*u*p+d*h*f,this._z=o*h*f-d*u*p,this._w=o*h*p+d*u*f;break;case"YZX":this._x=d*h*p+o*u*f,this._y=o*u*p+d*h*f,this._z=o*h*f-d*u*p,this._w=o*h*p-d*u*f;break;case"XZY":this._x=d*h*p-o*u*f,this._y=o*u*p-d*h*f,this._z=o*h*f+d*u*p,this._w=o*h*p+d*u*f;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],l=t[5],c=t[9],o=t[2],h=t[6],p=t[10],d=i+l+p;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(s-o)*u,this._z=(a-r)*u}else if(i>l&&i>p){let u=2*Math.sqrt(1+i-l-p);this._w=(h-c)/u,this._x=.25*u,this._y=(r+a)/u,this._z=(s+o)/u}else if(l>p){let u=2*Math.sqrt(1+l-i-p);this._w=(s-o)/u,this._x=(r+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+p-i-l);this._w=(a-r)/u,this._x=(s+o)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,l=t._x,c=t._y,o=t._z,h=t._w;return this._x=i*h+a*l+r*o-s*c,this._y=r*h+a*c+s*l-i*o,this._z=s*h+a*o+i*c-r*l,this._w=a*h-i*l-r*c-s*o,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,a=-a,l=-l);let c=1-t;if(l<.9995){let o=Math.acos(l),h=Math.sin(o);c=Math.sin(c*o)/h,t=Math.sin(t*o)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ch=class ch{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,o=2*(a*r-l*i),h=2*(l*t-s*r),p=2*(s*i-a*t);return this.x=t+c*o+a*p-l*h,this.y=i+c*h+l*o-s*p,this.z=r+c*p+s*h-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fl.copy(this).projectOnVector(e),this.sub(fl)}reflect(e){return this.sub(fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ch.prototype.isVector3=!0;var w=ch,fl=new w,hu=new Wt,hh=class hh{constructor(e,t,i,r,s,a,l,c,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,l,c,o)}set(e,t,i,r,s,a,l,c,o){let h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],l=i[3],c=i[6],o=i[1],h=i[4],p=i[7],d=i[2],u=i[5],f=i[8],m=r[0],_=r[3],g=r[6],v=r[1],x=r[4],S=r[7],E=r[2],M=r[5],P=r[8];return s[0]=a*m+l*v+c*E,s[3]=a*_+l*x+c*M,s[6]=a*g+l*S+c*P,s[1]=o*m+h*v+p*E,s[4]=o*_+h*x+p*M,s[7]=o*g+h*S+p*P,s[2]=d*m+u*v+f*E,s[5]=d*_+u*x+f*M,s[8]=d*g+u*S+f*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8];return t*a*h-t*l*o-i*s*h+i*l*c+r*s*o-r*a*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],p=h*a-l*o,d=l*c-h*s,u=o*s-a*c,f=t*p+i*d+r*u;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=p*m,e[1]=(r*o-h*i)*m,e[2]=(l*i-r*a)*m,e[3]=d*m,e[4]=(h*t-r*c)*m,e[5]=(r*s-l*t)*m,e[6]=u*m,e[7]=(i*c-o*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,l){let c=Math.cos(s),o=Math.sin(s);return this.set(i*c,i*o,-i*(c*a+o*l)+a+e,-r*o,r*c,-r*(-o*a+c*l)+l+t,0,0,1),this}scale(e,t){return Bn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gl.makeScale(e,t)),this}rotate(e){return Bn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return Bn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hh.prototype.isMatrix3=!0;var Ue=hh,gl=new Ue,uu=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),du=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kp(){let n={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Ye&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ye&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?cs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ls]:{primaries:e,whitePoint:i,transfer:cs,toXYZ:uu,fromXYZ:du,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:Ye,toXYZ:uu,fromXYZ:du,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}var He=kp();function $i(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function _r(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var rr,Va=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rr===void 0&&(rr=hs("canvas")),rr.width=e.width,rr.height=e.height;let r=rr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*$i(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*$i(t[i]/255)):t[i]=$i(t[i]);return{data:t,width:e.width,height:e.height}}return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hp=0,Sr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(vl(r[a].image)):s.push(vl(r[a]))}else s=vl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Va.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var Wp=0,_l=new w,Ht=class n extends Fi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,l=1023,c=1009,o=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Yn(),this.name="",this.source=new Sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i:Ae(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ba:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ba:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null,Ht.DEFAULT_MAPPING=_c,Ht.DEFAULT_ANISOTROPY=1;var uh=class uh{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,o=c[0],h=c[4],p=c[8],d=c[1],u=c[5],f=c[9],m=c[2],_=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-m)<.01&&Math.abs(f-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+m)<.1&&Math.abs(f+_)<.1&&Math.abs(o+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(o+1)/2,S=(u+1)/2,E=(g+1)/2,M=(h+d)/4,P=(p+m)/4,F=(f+_)/4;return x>S&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=M/i,s=P/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=M/r,s=F/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=P/s,r=F/s),this.set(i,r,s,t),this}let v=Math.sqrt((_-f)*(_-f)+(p-m)*(p-m)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(_-f)/v,this.y=(p-m)/v,this.z=(d-h)/v,this.w=Math.acos((o+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uh.prototype.isVector4=!0;var $e=uh,ka=class extends Fi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new Ht(r),a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Sr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bt=class extends ka{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},us=class extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ha=class extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bo=class bo{constructor(e,t,i,r,s,a,l,c,o,h,p,d,u,f,m,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,l,c,o,h,p,d,u,f,m,_)}set(e,t,i,r,s,a,l,c,o,h,p,d,u,f,m,_){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=l,g[13]=c,g[2]=o,g[6]=h,g[10]=p,g[14]=d,g[3]=u,g[7]=f,g[11]=m,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),a=1/sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),o=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let d=a*h,u=a*p,f=l*h,m=l*p;t[0]=c*h,t[4]=-c*p,t[8]=o,t[1]=u+f*o,t[5]=d-m*o,t[9]=-l*c,t[2]=m-d*o,t[6]=f+u*o,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,u=c*p,f=o*h,m=o*p;t[0]=d+m*l,t[4]=f*l-u,t[8]=a*o,t[1]=a*p,t[5]=a*h,t[9]=-l,t[2]=u*l-f,t[6]=m+d*l,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,u=c*p,f=o*h,m=o*p;t[0]=d-m*l,t[4]=-a*p,t[8]=f+u*l,t[1]=u+f*l,t[5]=a*h,t[9]=m-d*l,t[2]=-a*o,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,u=a*p,f=l*h,m=l*p;t[0]=c*h,t[4]=f*o-u,t[8]=d*o+m,t[1]=c*p,t[5]=m*o+d,t[9]=u*o-f,t[2]=-o,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,u=a*o,f=l*c,m=l*o;t[0]=c*h,t[4]=m-d*p,t[8]=f*p+u,t[1]=p,t[5]=a*h,t[9]=-l*h,t[2]=-o*h,t[6]=u*p+f,t[10]=d-m*p}else if(e.order==="XZY"){let d=a*c,u=a*o,f=l*c,m=l*o;t[0]=c*h,t[4]=-p,t[8]=o*h,t[1]=d*p+m,t[5]=a*h,t[9]=u*p-f,t[2]=f*p-u,t[6]=l*h,t[10]=m*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xp,e,jp)}lookAt(e,t,i){let r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),pn.crossVectors(i,jt),pn.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),pn.crossVectors(i,jt)),pn.normalize(),ca.crossVectors(jt,pn),r[0]=pn.x,r[4]=ca.x,r[8]=jt.x,r[1]=pn.y,r[5]=ca.y,r[9]=jt.y,r[2]=pn.z,r[6]=ca.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],l=i[4],c=i[8],o=i[12],h=i[1],p=i[5],d=i[9],u=i[13],f=i[2],m=i[6],_=i[10],g=i[14],v=i[3],x=i[7],S=i[11],E=i[15],M=r[0],P=r[4],F=r[8],D=r[12],U=r[1],k=r[5],O=r[9],Z=r[13],H=r[2],V=r[6],q=r[10],W=r[14],ie=r[3],de=r[7],Ee=r[11],_e=r[15];return s[0]=a*M+l*U+c*H+o*ie,s[4]=a*P+l*k+c*V+o*de,s[8]=a*F+l*O+c*q+o*Ee,s[12]=a*D+l*Z+c*W+o*_e,s[1]=h*M+p*U+d*H+u*ie,s[5]=h*P+p*k+d*V+u*de,s[9]=h*F+p*O+d*q+u*Ee,s[13]=h*D+p*Z+d*W+u*_e,s[2]=f*M+m*U+_*H+g*ie,s[6]=f*P+m*k+_*V+g*de,s[10]=f*F+m*O+_*q+g*Ee,s[14]=f*D+m*Z+_*W+g*_e,s[3]=v*M+x*U+S*H+E*ie,s[7]=v*P+x*k+S*V+E*de,s[11]=v*F+x*O+S*q+E*Ee,s[15]=v*D+x*Z+S*W+E*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],o=e[13],h=e[2],p=e[6],d=e[10],u=e[14],f=e[3],m=e[7],_=e[11],g=e[15],v=c*u-o*d,x=l*u-o*p,S=l*d-c*p,E=a*u-o*h,M=a*d-c*h,P=a*p-l*h;return t*(m*v-_*x+g*S)-i*(f*v-_*E+g*M)+r*(f*x-m*E+g*P)-s*(f*S-m*M+_*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],o=e[6],h=e[10];return t*(a*h-l*o)-i*(s*h-l*c)+r*(s*o-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],p=e[9],d=e[10],u=e[11],f=e[12],m=e[13],_=e[14],g=e[15],v=t*l-i*a,x=t*c-r*a,S=t*o-s*a,E=i*c-r*l,M=i*o-s*l,P=r*o-s*c,F=h*m-p*f,D=h*_-d*f,U=h*g-u*f,k=p*_-d*m,O=p*g-u*m,Z=d*g-u*_,H=v*Z-x*O+S*k+E*U-M*D+P*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/H;return e[0]=(l*Z-c*O+o*k)*V,e[1]=(r*O-i*Z-s*k)*V,e[2]=(m*P-_*M+g*E)*V,e[3]=(d*M-p*P-u*E)*V,e[4]=(c*U-a*Z-o*D)*V,e[5]=(t*Z-r*U+s*D)*V,e[6]=(_*S-f*P-g*x)*V,e[7]=(h*P-d*S+u*x)*V,e[8]=(a*O-l*U+o*F)*V,e[9]=(i*U-t*O-s*F)*V,e[10]=(f*M-m*S+g*v)*V,e[11]=(p*S-h*M-u*v)*V,e[12]=(l*D-a*k-c*F)*V,e[13]=(t*k-i*D+r*F)*V,e[14]=(m*x-f*E-_*v)*V,e[15]=(h*E-p*x+d*v)*V,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,l=e.y,c=e.z,o=s*a,h=s*l;return this.set(o*a+i,o*l-r*c,o*c+r*l,0,o*l+r*c,h*l+i,h*c-r*a,0,o*c-r*l,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,l=t._z,c=t._w,o=s+s,h=a+a,p=l+l,d=s*o,u=s*h,f=s*p,m=a*h,_=a*p,g=l*p,v=c*o,x=c*h,S=c*p,E=i.x,M=i.y,P=i.z;return r[0]=(1-(m+g))*E,r[1]=(u+S)*E,r[2]=(f-x)*E,r[3]=0,r[4]=(u-S)*M,r[5]=(1-(d+g))*M,r[6]=(_+v)*M,r[7]=0,r[8]=(f+x)*P,r[9]=(_-v)*P,r[10]=(1-(d+m))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=sr.set(r[0],r[1],r[2]).length(),l=sr.set(r[4],r[5],r[6]).length(),c=sr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),xi.copy(this);let o=1/a,h=1/l,p=1/c;return xi.elements[0]*=o,xi.elements[1]*=o,xi.elements[2]*=o,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=p,xi.elements[9]*=p,xi.elements[10]*=p,t.setFromRotationMatrix(xi),i.x=a,i.y=l,i.z=c,this}makePerspective(e,t,i,r,s,a,l=2e3,c=!1){let o=this.elements,h=2*s/(t-e),p=2*s/(i-r),d=(t+e)/(t-e),u=(i+r)/(i-r),f,m;if(c)f=s/(a-s),m=a*s/(a-s);else if(l===Qi)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(l!==xr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);f=-a/(a-s),m=-a*s/(a-s)}return o[0]=h,o[4]=0,o[8]=d,o[12]=0,o[1]=0,o[5]=p,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a,l=2e3,c=!1){let o=this.elements,h=2/(t-e),p=2/(i-r),d=-(t+e)/(t-e),u=-(i+r)/(i-r),f,m;if(c)f=1/(a-s),m=a/(a-s);else if(l===Qi)f=-2/(a-s),m=-(a+s)/(a-s);else{if(l!==xr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);f=-1/(a-s),m=-s/(a-s)}return o[0]=h,o[4]=0,o[8]=0,o[12]=d,o[1]=0,o[5]=p,o[9]=0,o[13]=u,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};bo.prototype.isMatrix4=!0;var Oe=bo,sr=new w,xi=new Oe,Xp=new w(0,0,0),jp=new w(1,1,1),pn=new w,ca=new w,jt=new w,pu=new Oe,mu=new Wt,en=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],o=r[5],h=r[9],p=r[2],d=r[6],u=r[10];switch(t){case"XYZ":this._y=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,o),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,u),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,o),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,u));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,o),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mu.setFromEuler(this),this.setFromQuaternion(mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var ds=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},qp=0,fu=new w,ar=new Wt,ji=new Oe,ha=new w,Kr=new w,Yp=new w,Zp=new Wt,gu=new w(1,0,0),vu=new w(0,1,0),_u=new w(0,0,1),xu={type:"added"},Jp={type:"removed"},or={type:"childadded",child:null},xl={type:"childremoved",child:null},yt=class n extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new w,t=new en,i=new Wt,r=new w(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Ue}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(gu,e)}rotateY(e){return this.rotateOnAxis(vu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gu,e)}translateY(e){return this.translateOnAxis(vu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ha.copy(e):ha.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Kr,ha,this.up):ji.lookAt(ha,Kr,this.up),this.quaternion.setFromRotationMatrix(ji),r&&(ji.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(ji),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xu),or.child=e,this.dispatchEvent(or),or.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jp),xl.child=e,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xu),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,Yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Zp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let o=0,h=c.length;o<h;o++){let p=c[o];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),o=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),u=a(e.animations),f=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),o.length>0&&(i.textures=o),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(l){let c=[];for(let o in l){let h=l[o];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};yt.DEFAULT_UP=new w(0,1,0),yt.DEFAULT_MATRIX_AUTO_UPDATE=!0,yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kp={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,l=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(let m of e.hand.values()){let _=t.getJointPose(m,i),g=this._getHandJoint(o,m);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}let h=o.joints["index-finger-tip"],p=o.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,f=.005;o.inputState.pinching&&d>u+f?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&d<=u-f&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},ua={h:0,s:0,l:0};function yl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Te=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=He.workingColorSpace){if(e=ql(e,1),t=ze(t,0,1),i=ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=yl(a,s,e+1/3),this.g=yl(a,s,e),this.b=yl(a,s,e-1/3)}return He.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function i(s){s!==void 0&&parseFloat(s)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let i=Cd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return He.workingToColorSpace(It.copy(this),e),65536*Math.round(ze(255*It.r,0,255))+256*Math.round(ze(255*It.g,0,255))+Math.round(ze(255*It.b,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(It.copy(this),t);let i=It.r,r=It.g,s=It.b,a=Math.max(i,r,s),l=Math.min(i,r,s),c,o,h=(l+a)/2;if(l===a)c=0,o=0;else{let p=a-l;switch(o=h<=.5?p/(a+l):p/(2-a-l),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4}c/=6}return e.h=c,e.s=o,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Yt){He.workingToColorSpace(It.copy(this),e);let t=It.r,i=It.g,r=It.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(mn),this.setHSL(mn.h+e,mn.s+t,mn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mn),e.getHSL(ua);let i=rs(mn.h,ua.h,t),r=rs(mn.s,ua.s,t),s=rs(mn.l,ua.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},It=new Te;Te.NAMES=Cd;var ps=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var zn=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},yi=new w,qi=new w,Ml=new w,Yi=new w,lr=new w,cr=new w,yu=new w,Sl=new w,bl=new w,Tl=new w,wl=new $e,El=new $e,Al=new $e,Ki=class n{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yi.subVectors(e,t),r.cross(yi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){yi.subVectors(r,t),qi.subVectors(i,t),Ml.subVectors(e,t);let a=yi.dot(yi),l=yi.dot(qi),c=yi.dot(Ml),o=qi.dot(qi),h=qi.dot(Ml),p=a*o-l*l;if(p===0)return s.set(0,0,0),null;let d=1/p,u=(o*c-l*h)*d,f=(a*h-l*c)*d;return s.set(1-u-f,f,u)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yi)!==null&&Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,i,r,s,a,l,c){return this.getBarycoord(e,t,i,r,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Yi.x),c.addScaledVector(a,Yi.y),c.addScaledVector(l,Yi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return wl.setScalar(0),El.setScalar(0),Al.setScalar(0),wl.fromBufferAttribute(e,t),El.fromBufferAttribute(e,i),Al.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(wl,s.x),a.addScaledVector(El,s.y),a.addScaledVector(Al,s.z),a}static isFrontFacing(e,t,i,r){return yi.subVectors(i,t),qi.subVectors(e,t),yi.cross(qi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),.5*yi.cross(qi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,l;lr.subVectors(r,i),cr.subVectors(s,i),Sl.subVectors(e,i);let c=lr.dot(Sl),o=cr.dot(Sl);if(c<=0&&o<=0)return t.copy(i);bl.subVectors(e,r);let h=lr.dot(bl),p=cr.dot(bl);if(h>=0&&p<=h)return t.copy(r);let d=c*p-h*o;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(lr,a);Tl.subVectors(e,s);let u=lr.dot(Tl),f=cr.dot(Tl);if(f>=0&&u<=f)return t.copy(s);let m=u*o-c*f;if(m<=0&&o>=0&&f<=0)return l=o/(o-f),t.copy(i).addScaledVector(cr,l);let _=h*f-u*p;if(_<=0&&p-h>=0&&u-f>=0)return yu.subVectors(s,r),l=(p-h)/(p-h+(u-f)),t.copy(r).addScaledVector(yu,l);let g=1/(_+m+d);return a=m*g,l=d*g,t.copy(i).addScaledVector(lr,a).addScaledVector(cr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ci=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Mi):Mi.fromBufferAttribute(s,a),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),da.copy(i.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),pa.subVectors(this.max,$r),hr.subVectors(e.a,$r),ur.subVectors(e.b,$r),dr.subVectors(e.c,$r),fn.subVectors(ur,hr),gn.subVectors(dr,ur),Dn.subVectors(hr,dr);let t=[0,-fn.z,fn.y,0,-gn.z,gn.y,0,-Dn.z,Dn.y,fn.z,0,-fn.x,gn.z,0,-gn.x,Dn.z,0,-Dn.x,-fn.y,fn.x,0,-gn.y,gn.x,0,-Dn.y,Dn.x,0];return!!Cl(t,hr,ur,dr,pa)&&(t=[1,0,0,0,1,0,0,0,1],!!Cl(t,hr,ur,dr,pa)&&(ma.crossVectors(fn,gn),t=[ma.x,ma.y,ma.z],Cl(t,hr,ur,dr,pa)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Mi).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new w,new w,new w,new w,new w,new w,new w,new w],Mi=new w,da=new ci,hr=new w,ur=new w,dr=new w,fn=new w,gn=new w,Dn=new w,$r=new w,pa=new w,ma=new w,Un=new w;function Cl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Un.fromArray(n,s);let l=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),c=e.dot(Un),o=t.dot(Un),h=i.dot(Un);if(Math.max(-Math.max(c,o,h),Math.min(c,o,h))>l)return!1}return!0}var xg=$p();function $p(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let o=c-127;o<-27?(i[c]=0,i[256|c]=32768,r[c]=24,r[256|c]=24):o<-14?(i[c]=1024>>-o-14,i[256|c]=1024>>-o-14|32768,r[c]=-o-1,r[256|c]=-o-1):o<=15?(i[c]=o+15<<10,i[256|c]=o+15<<10|32768,r[c]=13,r[256|c]=13):o<128?(i[c]=31744,i[256|c]=64512,r[c]=24,r[256|c]=24):(i[c]=31744,i[256|c]=64512,r[c]=13,r[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let o=c<<13,h=0;for(;!(8388608&o);)o<<=1,h-=8388608;o&=-8388609,h+=947912704,s[c]=o|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:l}}var ft=new w,fa=new Q,Qp=0,wt=class extends Fi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jl,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var ms=class extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var fs=class extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var we=class extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}},em=new ci,Qr=new w,Rl=new w,hi=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):em.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let t=Qr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(Qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(Rl)),this.expandByPoint(Qr.copy(e.center).sub(Rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tm=0,oi=new Oe,Pl=new yt,pr=new w,qt=new ci,es=new ci,Tt=new w,Je=class n extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?fs:ms)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,i){return oi.makeTranslation(e,t,i),this.applyMatrix4(oi),this}scale(e,t,i){return oi.makeScale(e,t,i),this.applyMatrix4(oi),this}lookAt(e){return Pl.lookAt(e),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new w,1/0);if(e){let i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let l=t[s];es.setFromBufferAttribute(l),this.morphTargetsRelative?(Tt.addVectors(qt.min,es.min),qt.expandByPoint(Tt),Tt.addVectors(qt.max,es.max),qt.expandByPoint(Tt)):(qt.expandByPoint(es.min),qt.expandByPoint(es.max))}qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){let l=t[s],c=this.morphTargetsRelative;for(let o=0,h=l.count;o<h;o++)Tt.fromBufferAttribute(l,o),c&&(pr.fromBufferAttribute(e,o),Tt.add(pr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");a!==void 0&&a.count===i.count||(a=new wt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let F=0;F<i.count;F++)l[F]=new w,c[F]=new w;let o=new w,h=new w,p=new w,d=new Q,u=new Q,f=new Q,m=new w,_=new w;function g(F,D,U){o.fromBufferAttribute(i,F),h.fromBufferAttribute(i,D),p.fromBufferAttribute(i,U),d.fromBufferAttribute(s,F),u.fromBufferAttribute(s,D),f.fromBufferAttribute(s,U),h.sub(o),p.sub(o),u.sub(d),f.sub(d);let k=1/(u.x*f.y-f.x*u.y);isFinite(k)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(p,-u.y).multiplyScalar(k),_.copy(p).multiplyScalar(u.x).addScaledVector(h,-f.x).multiplyScalar(k),l[F].add(m),l[D].add(m),l[U].add(m),c[F].add(_),c[D].add(_),c[U].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,D=v.length;F<D;++F){let U=v[F],k=U.start;for(let O=k,Z=k+U.count;O<Z;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let x=new w,S=new w,E=new w,M=new w;function P(F){E.fromBufferAttribute(r,F),M.copy(E);let D=l[F];x.copy(D),x.sub(E.multiplyScalar(E.dot(D))).normalize(),S.crossVectors(M,D);let U=S.dot(c[F])<0?-1:1;a.setXYZW(F,x.x,x.y,x.z,U)}for(let F=0,D=v.length;F<D;++F){let U=v[F],k=U.start;for(let O=k,Z=k+U.count;O<Z;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new wt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let r=new w,s=new w,a=new w,l=new w,c=new w,o=new w,h=new w,p=new w;if(e)for(let d=0,u=e.count;d<u;d+=3){let f=e.getX(d+0),m=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,_),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),l.fromBufferAttribute(i,f),c.fromBufferAttribute(i,m),o.fromBufferAttribute(i,_),l.add(h),c.add(h),o.add(h),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(_,o.x,o.y,o.z)}else for(let d=0,u=t.count;d<u;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(l,c){let o=l.array,h=l.itemSize,p=l.normalized,d=new o.constructor(c.length*h),u=0,f=0;for(let m=0,_=c.length;m<_;m++){u=l.isInterleavedBufferAttribute?c[m]*l.data.stride+l.offset:c[m]*h;for(let g=0;g<h;g++)d[f++]=o[u++]}return new wt(d,h,p)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let l in r){let c=e(r[l],i);t.setAttribute(l,c)}let s=this.morphAttributes;for(let l in s){let c=[],o=s[l];for(let h=0,p=o.length;h<p;h++){let d=e(o[h],i);c.push(d)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let o=a[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let o=i[c];e.data.attributes[c]=o.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let o=this.morphAttributes[c],h=[];for(let p=0,d=o.length;p<d;p++){let u=o[p];h.push(u.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let o in r){let h=r[o];this.setAttribute(o,h.clone(t))}let s=e.morphAttributes;for(let o in s){let h=[],p=s[o];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(t));this.morphAttributes[o]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let o=0,h=a.length;o<h;o++){let p=a[o];this.addGroup(p.start,p.count,p.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yg=new w;var im=0,tn=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=On,this.stencilZFail=On,this.stencilZPass=On,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:Ae(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let l in s){let c=s[l];delete c.metadata,a.push(c)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==On&&(i.stencilFail=this.stencilFail),this.stencilZFail!==On&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==On&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Q().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Mg=new w,Sg=new w,bg=new w,Tg=new Q,wg=new Q,Eg=new Oe,Ag=new w,Cg=new w,Rg=new w,Pg=new Q,Ig=new Q,Lg=new Q;var Dg=new w,Ug=new w;var Ji=new w,Il=new w,ga=new w,vn=new w,Ll=new w,va=new w,Dl=new w,Gn=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Il.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(Il);let s=.5*e.distanceTo(t),a=-this.direction.dot(ga),l=vn.dot(this.direction),c=-vn.dot(ga),o=vn.lengthSq(),h=Math.abs(1-a*a),p,d,u,f;if(h>0)if(p=a*c-l,d=a*l-c,f=s*h,p>=0)if(d>=-f)if(d<=f){let m=1/h;p*=m,d*=m,u=p*(p+a*d+2*l)+d*(a*p+d+2*c)+o}else d=s,p=Math.max(0,-(a*d+l)),u=-p*p+d*(d+2*c)+o;else d=-s,p=Math.max(0,-(a*d+l)),u=-p*p+d*(d+2*c)+o;else d<=-f?(p=Math.max(0,-(-a*s+l)),d=p>0?-s:Math.min(Math.max(-s,-c),s),u=-p*p+d*(d+2*c)+o):d<=f?(p=0,d=Math.min(Math.max(-s,-c),s),u=d*(d+2*c)+o):(p=Math.max(0,-(a*s+l)),d=p>0?s:Math.min(Math.max(-s,-c),s),u=-p*p+d*(d+2*c)+o);else d=a>0?-s:s,p=Math.max(0,-(a*d+l)),u=-p*p+d*(d+2*c)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Il).addScaledVector(ga,d),u}intersectSphere(e,t){Ji.subVectors(e.center,this.origin);let i=Ji.dot(this.direction),r=Ji.dot(Ji)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,l,c,o=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return o>=0?(i=(e.min.x-d.x)*o,r=(e.max.x-d.x)*o):(i=(e.max.x-d.x)*o,r=(e.min.x-d.x)*o),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(l=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(l=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),i>c||l>r?null:((l>i||i!=i)&&(i=l),(c<r||r!=r)&&(r=c),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,i,r,s){Ll.subVectors(t,e),va.subVectors(i,e),Dl.crossVectors(Ll,va);let a,l=this.direction.dot(Dl);if(l>0){if(r)return null;a=1}else{if(!(l<0))return null;a=-1,l=-l}vn.subVectors(this.origin,e);let c=a*this.direction.dot(va.crossVectors(vn,va));if(c<0)return null;let o=a*this.direction.dot(Ll.cross(vn));if(o<0||c+o>l)return null;let h=-a*vn.dot(Dl);return h<0?null:this.at(h/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class extends tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mu=new Oe,Nn=new Gn,_a=new hi,Su=new w,xa=new w,ya=new w,Ma=new w,Ul=new w,Sa=new w,bu=new w,ba=new w,tt=class extends yt{constructor(e=new Je,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(s&&l){Sa.set(0,0,0);for(let c=0,o=s.length;c<o;c++){let h=l[c],p=s[c];h!==0&&(Ul.fromBufferAttribute(p,e),a?Sa.addScaledVector(Ul,h):Sa.addScaledVector(Ul.sub(t),h))}t.add(Sa)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),_a.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(_a,Su)===null||Nn.origin.distanceToSquared(Su)>(e.far-e.near)**2))return;Mu.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(Mu),i.boundingBox!==null&&Nn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Nn)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,o=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,u=s.drawRange;if(l!==null)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){let _=d[f],g=a[_.materialIndex];for(let v=Math.max(_.start,u.start),x=Math.min(l.count,Math.min(_.start+_.count,u.start+u.count));v<x;v+=3)r=Ta(this,g,e,i,o,h,p,l.getX(v),l.getX(v+1),l.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}else for(let f=Math.max(0,u.start),m=Math.min(l.count,u.start+u.count);f<m;f+=3)r=Ta(this,a,e,i,o,h,p,l.getX(f),l.getX(f+1),l.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(c!==void 0)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){let _=d[f],g=a[_.materialIndex];for(let v=Math.max(_.start,u.start),x=Math.min(c.count,Math.min(_.start+_.count,u.start+u.count));v<x;v+=3)r=Ta(this,g,e,i,o,h,p,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}else for(let f=Math.max(0,u.start),m=Math.min(c.count,u.start+u.count);f<m;f+=3)r=Ta(this,a,e,i,o,h,p,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function Ta(n,e,t,i,r,s,a,l,c,o){n.getVertexPosition(l,xa),n.getVertexPosition(c,ya),n.getVertexPosition(o,Ma);let h=(function(p,d,u,f,m,_,g,v){let x;if(x=d.side===1?f.intersectTriangle(g,_,m,!0,v):f.intersectTriangle(m,_,g,d.side===0,v),x===null)return null;ba.copy(v),ba.applyMatrix4(p.matrixWorld);let S=u.ray.origin.distanceTo(ba);return S<u.near||S>u.far?null:{distance:S,point:ba.clone(),object:p}})(n,e,t,i,xa,ya,Ma,bu);if(h){let p=new w;Ki.getBarycoord(bu,xa,ya,Ma,p),r&&(h.uv=Ki.getInterpolatedAttribute(r,l,c,o,p,new Q)),s&&(h.uv1=Ki.getInterpolatedAttribute(s,l,c,o,p,new Q)),a&&(h.normal=Ki.getInterpolatedAttribute(a,l,c,o,p,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:l,b:c,c:o,normal:new w,materialIndex:0};Ki.getNormal(xa,ya,Ma,d.normal),h.face=d,h.barycoord=p}return h}var Ng=new $e,Fg=new $e,Og=new $e,Bg=new $e,zg=new Oe,Gg=new w,Vg=new hi,kg=new Oe,Hg=new Gn;var gs=class extends Ht{constructor(e=null,t=1,i=1,r,s,a,l,c,o=1003,h=1003,p,d){super(null,a,l,c,o,h,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wg=new Oe,Xg=new Oe;var vs=class extends wt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new Oe,Tu=new Oe,wa=[],wu=new ci,nm=new Oe,ts=new tt,is=new hi,_s=class extends tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(16*i),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,nm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mr),wu.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(wu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mr),is.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(i),e.ray.intersectsSphere(is)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,mr),Tu.multiplyMatrices(i,mr),ts.matrixWorld=Tu,ts.raycast(e,wa);for(let a=0,l=wa.length;a<l;a++){let c=wa[a];c.instanceId=s,c.object=this,t.push(c)}wa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,16*e),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new gs(new Float32Array(r*this.count),r,this.count,Io,di));let s=this.morphTexture.source.data.data,a=0;for(let o=0;o<i.length;o++)a+=i[o];let l=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=l,s.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Nl=new w,rm=new w,sm=new Ue,Ui=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Nl.subVectors(i,t).cross(rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Nl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||sm.getNormalMatrix(e),r=this.coplanarPoint(Nl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fn=new hi,am=new Q(.5,.5),Ea=new w,nn=class{constructor(e=new Ui,t=new Ui,i=new Ui,r=new Ui,s=new Ui,a=new Ui){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],o=s[3],h=s[4],p=s[5],d=s[6],u=s[7],f=s[8],m=s[9],_=s[10],g=s[11],v=s[12],x=s[13],S=s[14],E=s[15];if(r[0].setComponents(o-a,u-h,g-f,E-v).normalize(),r[1].setComponents(o+a,u+h,g+f,E+v).normalize(),r[2].setComponents(o+l,u+p,g+m,E+x).normalize(),r[3].setComponents(o-l,u-p,g-m,E-x).normalize(),i)r[4].setComponents(c,d,_,S).normalize(),r[5].setComponents(o-c,u-d,g-_,E-S).normalize();else if(r[4].setComponents(o-c,u-d,g-_,E-S).normalize(),t===Qi)r[5].setComponents(o+c,u+d,g+_,E+S).normalize();else{if(t!==xr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(c,d,_,S).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){Fn.center.set(0,0,0);let t=am.distanceTo(e.center);return Fn.radius=.7071067811865476+t,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ea.x=r.normal.x>0?e.max.x:e.min.x,Ea.y=r.normal.y>0?e.max.y:e.min.y,Ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Eu=new Oe,Wa=class n{constructor(){this.coordinateSystem=Qi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];Eu.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new nn),i[r].setFromProjectionMatrix(Eu,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new nn),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Yl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let l=s[this.index];a.push(l),this.index++,l.start=e,l.count=t,l.z=i,l.index=r}reset(){this.list.length=0,this.index=0}},jg=new Oe,qg=new Te(1,1,1),Yg=new nn,Zg=new Wa,Jg=new ci,Kg=new hi,$g=new w,Qg=new w,e0=new w,t0=new Yl,i0=new tt;var n0=new w,r0=new w,s0=new Oe,a0=new Gn,o0=new hi,l0=new w,c0=new w;var h0=new w,u0=new w;var Tr=class extends tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Au=new Oe,Zl=new Gn,Aa=new hi,Ca=new w,xs=class extends yt{constructor(e=new Je,t=new Tr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(r),Aa.radius+=s,e.ray.intersectsSphere(Aa)===!1)return;Au.copy(r).invert(),Zl.copy(e.ray).applyMatrix4(Au);let l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,o=i.index,h=i.attributes.position;if(o!==null)for(let p=Math.max(0,a.start),d=Math.min(o.count,a.start+a.count);p<d;p++){let u=o.getX(p);Ca.fromBufferAttribute(h,u),Cu(Ca,u,c,r,e,t,this)}else for(let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);p<d;p++)Ca.fromBufferAttribute(h,p),Cu(Ca,p,c,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cu(n,e,t,i,r,s,a){let l=Zl.distanceSqToPoint(n);if(l<t){let c=new w;Zl.closestPointToPoint(n,c),c.applyMatrix4(i);let o=r.ray.origin.distanceTo(c);if(o<r.near||o>r.far)return;s.push({distance:o,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ys=class extends Ht{constructor(e=[],t=301,i,r,s,a,l,c,o,h){super(e,t,i,r,s,a,l,c,o,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Si=class extends Ht{constructor(e,t,i=1014,r,s,a,l=1003,c=1003,o,h=1026,p=1){if(h!==An&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:p},r,s,a,l,c,h,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xa=class extends Si{constructor(e,t=1014,i=301,r,s,a=1003,l=1003,c,o=1026){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,l,c,o),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ms=class extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rn=class n extends Je{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],o=[],h=[],p=[],d=0,u=0;function f(m,_,g,v,x,S,E,M,P,F,D){let U=S/P,k=E/F,O=S/2,Z=E/2,H=M/2,V=P+1,q=F+1,W=0,ie=0,de=new w;for(let Ee=0;Ee<q;Ee++){let _e=Ee*k-Z;for(let xe=0;xe<V;xe++){let te=xe*U-O;de[m]=te*v,de[_]=_e*x,de[g]=H,o.push(de.x,de.y,de.z),de[m]=0,de[_]=0,de[g]=M>0?1:-1,h.push(de.x,de.y,de.z),p.push(xe/P),p.push(1-Ee/F),W+=1}}for(let Ee=0;Ee<F;Ee++)for(let _e=0;_e<P;_e++){let xe=d+_e+V*Ee,te=d+_e+V*(Ee+1),ce=d+(_e+1)+V*(Ee+1),oe=d+(_e+1)+V*Ee;c.push(xe,te,oe),c.push(te,ce,oe),ie+=6}l.addGroup(u,ie,D),u+=ie,d+=W}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ja=class n extends Je{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],l=[],c=[],o=[],h=t/2,p=Math.PI/2*e,d=t,u=2*p+d,f=2*i+s,m=r+1,_=new w,g=new w;for(let v=0;v<=f;v++){let x=0,S=0,E=0,M=0;if(v<=i){let D=v/i,U=D*Math.PI/2;S=-h-e*Math.cos(U),E=e*Math.sin(U),M=-e*Math.cos(U),x=D*p}else if(v<=i+s){let D=(v-i)/s;S=D*t-h,E=e,M=0,x=p+D*d}else{let D=(v-i-s)/i,U=D*Math.PI/2;S=h+e*Math.sin(U),E=e*Math.cos(U),M=e*Math.sin(U),x=p+d+D*p}let P=Math.max(0,Math.min(1,x/u)),F=0;v===0?F=.5/r:v===f&&(F=-.5/r);for(let D=0;D<=r;D++){let U=D/r,k=U*Math.PI*2,O=Math.sin(k),Z=Math.cos(k);g.x=-E*Z,g.y=S,g.z=E*O,l.push(g.x,g.y,g.z),_.set(-E*Z,M,E*O),_.normalize(),c.push(_.x,_.y,_.z),o.push(U+F,P)}if(v>0){let D=(v-1)*m;for(let U=0;U<r;U++){let k=D+U,O=D+U+1,Z=v*m+U,H=v*m+U+1;a.push(k,O,Z),a.push(O,H,Z)}}}this.setIndex(a),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},qa=class n extends Je{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],l=[],c=[],o=new w,h=new Q;a.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let p=0,d=3;p<=t;p++,d+=3){let u=i+p/t*r;o.x=e*Math.cos(u),o.y=e*Math.sin(u),a.push(o.x,o.y,o.z),l.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},sn=class n extends Je{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,l=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:c};let o=this;r=Math.floor(r),s=Math.floor(s);let h=[],p=[],d=[],u=[],f=0,m=[],_=i/2,g=0;function v(x){let S=f,E=new Q,M=new w,P=0,F=x===!0?e:t,D=x===!0?1:-1;for(let k=1;k<=r;k++)p.push(0,_*D,0),d.push(0,D,0),u.push(.5,.5),f++;let U=f;for(let k=0;k<=r;k++){let O=k/r*c+l,Z=Math.cos(O),H=Math.sin(O);M.x=F*H,M.y=_*D,M.z=F*Z,p.push(M.x,M.y,M.z),d.push(0,D,0),E.x=.5*Z+.5,E.y=.5*H*D+.5,u.push(E.x,E.y),f++}for(let k=0;k<r;k++){let O=S+k,Z=U+k;x===!0?h.push(Z,Z+1,O):h.push(Z+1,Z,O),P+=3}o.addGroup(g,P,x===!0?1:2),g+=P}(function(){let x=new w,S=new w,E=0,M=(t-e)/i;for(let P=0;P<=s;P++){let F=[],D=P/s,U=D*(t-e)+e;for(let k=0;k<=r;k++){let O=k/r,Z=O*c+l,H=Math.sin(Z),V=Math.cos(Z);S.x=U*H,S.y=-D*i+_,S.z=U*V,p.push(S.x,S.y,S.z),x.set(H,M,V).normalize(),d.push(x.x,x.y,x.z),u.push(O,1-D),F.push(f++)}m.push(F)}for(let P=0;P<r;P++)for(let F=0;F<s;F++){let D=m[F][P],U=m[F+1][P],k=m[F+1][P+1],O=m[F][P+1];(e>0||F!==0)&&(h.push(D,U,O),E+=3),(t>0||F!==s-1)&&(h.push(U,k,O),E+=3)}o.addGroup(g,E,0),g+=E})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ya=class n extends sn{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,l=2*Math.PI){super(0,e,t,i,r,s,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:l}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sn=class n extends Je{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function l(u,f,m,_){let g=_+1,v=[];for(let x=0;x<=g;x++){v[x]=[];let S=u.clone().lerp(m,x/g),E=f.clone().lerp(m,x/g),M=g-x;for(let P=0;P<=M;P++)v[x][P]=P===0&&x===g?S:S.clone().lerp(E,P/M)}for(let x=0;x<g;x++)for(let S=0;S<2*(g-x)-1;S++){let E=Math.floor(S/2);S%2==0?(c(v[x][E+1]),c(v[x+1][E]),c(v[x][E])):(c(v[x][E+1]),c(v[x+1][E+1]),c(v[x+1][E]))}}function c(u){s.push(u.x,u.y,u.z)}function o(u,f){let m=3*u;f.x=e[m+0],f.y=e[m+1],f.z=e[m+2]}function h(u,f,m,_){_<0&&u.x===1&&(a[f]=u.x-1),m.x===0&&m.z===0&&(a[f]=_/2/Math.PI+.5)}function p(u){return Math.atan2(u.z,-u.x)}function d(u){return Math.atan2(-u.y,Math.sqrt(u.x*u.x+u.z*u.z))}(function(u){let f=new w,m=new w,_=new w;for(let g=0;g<t.length;g+=3)o(t[g+0],f),o(t[g+1],m),o(t[g+2],_),l(f,m,_,u)})(r),(function(u){let f=new w;for(let m=0;m<s.length;m+=3)f.x=s[m+0],f.y=s[m+1],f.z=s[m+2],f.normalize().multiplyScalar(u),s[m+0]=f.x,s[m+1]=f.y,s[m+2]=f.z})(i),(function(){let u=new w;for(let f=0;f<s.length;f+=3){u.x=s[f+0],u.y=s[f+1],u.z=s[f+2];let m=p(u)/2/Math.PI+.5,_=d(u)/Math.PI+.5;a.push(m,1-_)}(function(){let f=new w,m=new w,_=new w,g=new w,v=new Q,x=new Q,S=new Q;for(let E=0,M=0;E<s.length;E+=9,M+=6){f.set(s[E+0],s[E+1],s[E+2]),m.set(s[E+3],s[E+4],s[E+5]),_.set(s[E+6],s[E+7],s[E+8]),v.set(a[M+0],a[M+1]),x.set(a[M+2],a[M+3]),S.set(a[M+4],a[M+5]),g.copy(f).add(m).add(_).divideScalar(3);let P=p(g);h(v,M+0,f,P),h(x,M+2,m,P),h(S,M+4,_,P)}})(),(function(){for(let f=0;f<a.length;f+=6){let m=a[f+0],_=a[f+2],g=a[f+4],v=Math.max(m,_,g),x=Math.min(m,_,g);v>.9&&x<.1&&(m<.2&&(a[f+0]+=1),_<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(s.slice(),3)),this.setAttribute("uv",new we(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Za=class n extends Sn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ra=new w,Pa=new w,Fl=new w,Ia=new Ki,Ja=class extends Je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(vr*t),a=e.getIndex(),l=e.getAttribute("position"),c=a?a.count:l.count,o=[0,0,0],h=["a","b","c"],p=new Array(3),d={},u=[];for(let f=0;f<c;f+=3){a?(o[0]=a.getX(f),o[1]=a.getX(f+1),o[2]=a.getX(f+2)):(o[0]=f,o[1]=f+1,o[2]=f+2);let{a:m,b:_,c:g}=Ia;if(m.fromBufferAttribute(l,o[0]),_.fromBufferAttribute(l,o[1]),g.fromBufferAttribute(l,o[2]),Ia.getNormal(Fl),p[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,p[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,p[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,p[0]!==p[1]&&p[1]!==p[2]&&p[2]!==p[0])for(let v=0;v<3;v++){let x=(v+1)%3,S=p[v],E=p[x],M=Ia[h[v]],P=Ia[h[x]],F=`${S}_${E}`,D=`${E}_${S}`;D in d&&d[D]?(Fl.dot(d[D].normal)<=s&&(u.push(M.x,M.y,M.z),u.push(P.x,P.y,P.z)),d[D]=null):F in d||(d[F]={index0:o[v],index1:o[x],normal:Fl.clone()})}}for(let f in d)if(d[f]){let{index0:m,index1:_}=d[f];Ra.fromBufferAttribute(l,m),Pa.fromBufferAttribute(l,_),u.push(Ra.x,Ra.y,Ra.z),u.push(Pa.x,Pa.y,Pa.z)}this.setAttribute("position",new we(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Kt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ae("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let l,c=0,o=s-1;for(;c<=o;)if(r=Math.floor(c+(o-c)/2),l=i[r]-a,l<0)c=r+1;else{if(!(l>0)){o=r;break}o=r-1}if(r=o,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),l=this.getPoint(s),c=t||(a.isVector2?new Q:new w);return c.copy(l).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new w,r=[],s=[],a=[],l=new w,c=new Oe;for(let u=0;u<=e;u++){let f=u/e;r[u]=this.getTangentAt(f,new w)}s[0]=new w,a[0]=new w;let o=Number.MAX_VALUE,h=Math.abs(r[0].x),p=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=o&&(o=h,i.set(1,0,0)),p<=o&&(o=p,i.set(0,1,0)),d<=o&&i.set(0,0,1),l.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],l),a[0].crossVectors(r[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),l.crossVectors(r[u-1],r[u]),l.length()>Number.EPSILON){l.normalize();let f=Math.acos(ze(r[u-1].dot(r[u]),-1,1));s[u].applyMatrix4(c.makeRotationAxis(l,f))}a[u].crossVectors(r[u],s[u])}if(t===!0){let u=Math.acos(ze(s[0].dot(s[e]),-1,1));u/=e,r[0].dot(l.crossVectors(s[0],s[e]))>0&&(u=-u);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(r[f],u*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},wr=class extends Kt{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(e,t=new Q){let i=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let l=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(l),o=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=c-this.aX,u=o-this.aY;c=d*h-u*p+this.aX,o=d*p+u*h+this.aY}return i.set(c,o)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ka=class extends wr{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let n=0,e=0,t=0,i=0;function r(s,a,l,c){n=s,e=l,t=-3*s+3*a-2*l-c,i=2*s-2*a+l+c}return{initCatmullRom:function(s,a,l,c,o){r(a,l,o*(l-s),o*(c-a))},initNonuniformCatmullRom:function(s,a,l,c,o,h,p){let d=(a-s)/o-(l-s)/(o+h)+(l-a)/h,u=(l-a)/h-(c-a)/(h+p)+(c-l)/p;d*=h,u*=h,r(a,l,d,u)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var Ru=new w,Pu=new w,Ol=new rh,Bl=new rh,zl=new rh,Er=class extends Kt{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new w){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,l,c,o=Math.floor(a),h=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:h===0&&o===s-1&&(o=s-2,h=1),this.closed||o>0?l=r[(o-1)%s]:(Pu.subVectors(r[0],r[1]).add(r[0]),l=Pu);let p=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?c=r[(o+2)%s]:(Ru.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Ru),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(p),u),m=Math.pow(p.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(c),u);m<1e-4&&(m=1),f<1e-4&&(f=m),_<1e-4&&(_=m),Ol.initNonuniformCatmullRom(l.x,p.x,d.x,c.x,f,m,_),Bl.initNonuniformCatmullRom(l.y,p.y,d.y,c.y,f,m,_),zl.initNonuniformCatmullRom(l.z,p.z,d.z,c.z,f,m,_)}else this.curveType==="catmullrom"&&(Ol.initCatmullRom(l.x,p.x,d.x,c.x,this.tension),Bl.initCatmullRom(l.y,p.y,d.y,c.y,this.tension),zl.initCatmullRom(l.z,p.z,d.z,c.z,this.tension));return i.set(Ol.calc(h),Bl.calc(h),zl.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new w().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Iu(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),l=n*n;return(2*t-2*i+s+a)*(n*l)+(-3*t+3*i-2*s-a)*l+s*n+t}function ss(n,e,t,i){return(function(r,s){let a=1-r;return a*a*s})(n,e)+(function(r,s){return 2*(1-r)*r*s})(n,t)+(function(r,s){return r*r*s})(n,i)}function as(n,e,t,i,r){return(function(s,a){let l=1-s;return l*l*l*a})(n,e)+(function(s,a){let l=1-s;return 3*l*l*s*a})(n,t)+(function(s,a){return 3*(1-s)*s*s*a})(n,i)+(function(s,a){return s*s*s*a})(n,r)}var Ss=class extends Kt{constructor(e=new Q,t=new Q,i=new Q,r=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Q){let i=t,r=this.v0,s=this.v1,a=this.v2,l=this.v3;return i.set(as(e,r.x,s.x,a.x,l.x),as(e,r.y,s.y,a.y,l.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$a=class extends Kt{constructor(e=new w,t=new w,i=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new w){let i=t,r=this.v0,s=this.v1,a=this.v2,l=this.v3;return i.set(as(e,r.x,s.x,a.x,l.x),as(e,r.y,s.y,a.y,l.y),as(e,r.z,s.z,a.z,l.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bs=class extends Kt{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends Kt{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ts=class extends Kt{constructor(e=new Q,t=new Q,i=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Q){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ss(e,r.x,s.x,a.x),ss(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ws=class extends Kt{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ss(e,r.x,s.x,a.x),ss(e,r.y,s.y,a.y),ss(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Es=class extends Kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),l=s-a,c=r[a===0?a:a-1],o=r[a],h=r[a>r.length-2?r.length-1:a+1],p=r[a>r.length-3?r.length-1:a+2];return i.set(Iu(l,c.x,o.x,h.x,p.x),Iu(l,c.y,o.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Q().fromArray(r))}return this}},eo=Object.freeze({__proto__:null,ArcCurve:Ka,CatmullRomCurve3:Er,CubicBezierCurve:Ss,CubicBezierCurve3:$a,EllipseCurve:wr,LineCurve:bs,LineCurve3:Qa,QuadraticBezierCurve:Ts,QuadraticBezierCurve3:ws,SplineCurve:Es}),to=class extends Kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,l=this.curves[s],c=l.getLength(),o=c===0?0:1-a/c;return l.getPointAt(o,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],l=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(l);for(let o=0;o<c.length;o++){let h=c[o];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new eo[r.type]().fromJSON(r))}return this}},As=class extends to{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new bs(this.currentPoint.clone(),new Q(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Ts(this.currentPoint.clone(),new Q(e,t),new Q(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let l=new Ss(this.currentPoint.clone(),new Q(e,t),new Q(i,r),new Q(s,a));return this.curves.push(l),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Es(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,l,c){let o=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+o,t+h,i,r,s,a,l,c),this}absellipse(e,t,i,r,s,a,l,c){let o=new wr(e,t,i,r,s,a,l,c);if(this.curves.length>0){let p=o.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(o);let h=o.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},an=class extends As{constructor(e){super(e),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new As().fromJSON(r))}return this}};function om(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Lu(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let l,c,o;if(i&&(s=(function(h,p,d,u){let f=[];for(let m=0,_=p.length;m<_;m++){let g=Lu(h,p[m]*u,m<_-1?p[m+1]*u:h.length,u,!1);g===g.next&&(g.steiner=!0),f.push(fm(g))}f.sort(dm);for(let m=0;m<f.length;m++)d=pm(f[m],d);return d})(n,e,s,t)),n.length>80*t){l=n[0],c=n[1];let h=l,p=c;for(let d=t;d<r;d+=t){let u=n[d],f=n[d+1];u<l&&(l=u),f<c&&(c=f),u>h&&(h=u),f>p&&(p=f)}o=Math.max(h-l,p-c),o=o!==0?32767/o:0}return Cs(s,a,t,l,c,o,0),a}function Lu(n,e,t,i,r){let s;if(r===(function(a,l,c,o){let h=0;for(let p=l,d=c-o;p<c;p+=o)h+=(a[d]-a[p])*(a[p+1]+a[d+1]),d=p;return h})(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=Du(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Du(a/i|0,n[a],n[a+1],s);return s&&Ar(s,s.next)&&(Ps(s),s=s.next),s}function Vn(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!Ar(i,i.next)&&ot(i.prev,i,i.next)!==0)i=i.next;else{if(Ps(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Cs(n,e,t,i,r,s,a){if(!n)return;!a&&s&&(function(c,o,h,p){let d=c;do d.z===0&&(d.z=Jl(d.x,d.y,o,h,p)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(u){let f,m=1;do{let _,g=u;u=null;let v=null;for(f=0;g;){f++;let x=g,S=0;for(let M=0;M<m&&(S++,x=x.nextZ,x);M++);let E=m;for(;S>0||E>0&&x;)S!==0&&(E===0||!x||g.z<=x.z)?(_=g,g=g.nextZ,S--):(_=x,x=x.nextZ,E--),v?v.nextZ=_:u=_,_.prevZ=v,v=_;g=x}v.nextZ=null,m*=2}while(f>1)})(d)})(n,i,r,s);let l=n;for(;n.prev!==n.next;){let c=n.prev,o=n.next;if(s?cm(n,i,r,s):lm(n))e.push(c.i,n.i,o.i),Ps(n),n=o.next,l=o.next;else if((n=o)===l){a?a===1?Cs(n=hm(Vn(n),e),e,t,i,r,s,2):a===2&&um(n,e,t,i,r,s):Cs(Vn(n),e,t,i,r,s,1);break}}}function lm(n){let e=n.prev,t=n,i=n.next;if(ot(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,l=e.y,c=t.y,o=i.y,h=Math.min(r,s,a),p=Math.min(l,c,o),d=Math.max(r,s,a),u=Math.max(l,c,o),f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=p&&f.y<=u&&ns(r,l,s,c,a,o,f.x,f.y)&&ot(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function cm(n,e,t,i){let r=n.prev,s=n,a=n.next;if(ot(r,s,a)>=0)return!1;let l=r.x,c=s.x,o=a.x,h=r.y,p=s.y,d=a.y,u=Math.min(l,c,o),f=Math.min(h,p,d),m=Math.max(l,c,o),_=Math.max(h,p,d),g=Jl(u,f,e,t,i),v=Jl(m,_,e,t,i),x=n.prevZ,S=n.nextZ;for(;x&&x.z>=g&&S&&S.z<=v;){if(x.x>=u&&x.x<=m&&x.y>=f&&x.y<=_&&x!==r&&x!==a&&ns(l,h,c,p,o,d,x.x,x.y)&&ot(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=u&&S.x<=m&&S.y>=f&&S.y<=_&&S!==r&&S!==a&&ns(l,h,c,p,o,d,S.x,S.y)&&ot(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=g;){if(x.x>=u&&x.x<=m&&x.y>=f&&x.y<=_&&x!==r&&x!==a&&ns(l,h,c,p,o,d,x.x,x.y)&&ot(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=v;){if(S.x>=u&&S.x<=m&&S.y>=f&&S.y<=_&&S!==r&&S!==a&&ns(l,h,c,p,o,d,S.x,S.y)&&ot(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function hm(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Ar(i,r)&&Pd(i,t,t.next,r)&&Rs(i,r)&&Rs(r,i)&&(e.push(i.i,t.i,r.i),Ps(t),Ps(t.next),t=n=r),t=t.next}while(t!==n);return Vn(t)}function um(n,e,t,i,r,s){let a=n;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&gm(a,l)){let c=Id(a,l);return a=Vn(a,a.next),c=Vn(c,c.next),Cs(a,e,t,i,r,s,0),void Cs(c,e,t,i,r,s,0)}l=l.next}a=a.next}while(a!==n)}function dm(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function pm(n,e){let t=(function(r,s){let a=s,l=r.x,c=r.y,o,h=-1/0;if(Ar(r,a))return a;do{if(Ar(r,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let m=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=l&&m>h&&(h=m,o=a.x<a.next.x?a:a.next,m===l))return o}a=a.next}while(a!==s);if(!o)return null;let p=o,d=o.x,u=o.y,f=1/0;a=o;do{if(l>=a.x&&a.x>=d&&l!==a.x&&Rd(c<u?l:h,c,d,u,c<u?h:l,c,a.x,a.y)){let m=Math.abs(c-a.y)/(l-a.x);Rs(a,r)&&(m<f||m===f&&(a.x>o.x||a.x===o.x&&mm(o,a)))&&(o=a,f=m)}a=a.next}while(a!==p);return o})(n,e);if(!t)return e;let i=Id(t,n);return Vn(i,i.next),Vn(t,t.next)}function mm(n,e){return ot(n.prev,n,e.prev)<0&&ot(e.next,n,n.next)<0}function Jl(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function fm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Rd(n,e,t,i,r,s,a,l){return(r-a)*(e-l)>=(n-a)*(s-l)&&(n-a)*(i-l)>=(t-a)*(e-l)&&(t-a)*(s-l)>=(r-a)*(i-l)}function ns(n,e,t,i,r,s,a,l){return!(n===a&&e===l)&&Rd(n,e,t,i,r,s,a,l)}function gm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&Pd(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1})(n,e)&&(Rs(n,e)&&Rs(e,n)&&(function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,l=(t.y+i.y)/2;do r.y>l!=r.next.y>l&&r.next.y!==r.y&&a<(r.next.x-r.x)*(l-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(n,e)&&(ot(n.prev,n,e.prev)||ot(n,e.prev,e))||Ar(n,e)&&ot(n.prev,n,n.next)>0&&ot(e.prev,e,e.next)>0)}function ot(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ar(n,e){return n.x===e.x&&n.y===e.y}function Pd(n,e,t,i){let r=Da(ot(n,e,t)),s=Da(ot(n,e,i)),a=Da(ot(t,i,n)),l=Da(ot(t,i,e));return r!==s&&a!==l||!(r!==0||!La(n,t,e))||!(s!==0||!La(n,i,e))||!(a!==0||!La(t,n,i))||!(l!==0||!La(t,e,i))}function La(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Da(n){return n>0?1:n<0?-1:0}function Rs(n,e){return ot(n.prev,n,n.next)<0?ot(n,e,n.next)>=0&&ot(n,n.prev,e)>=0:ot(n,e,n.prev)<0||ot(n,n.next,e)<0}function Id(n,e){let t=Kl(n.i,n.x,n.y),i=Kl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Du(n,e,t,i){let r=Kl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ps(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Kl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var $l=class{static triangulate(e,t,i=2){return om(e,t,i)}},Ni=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Uu(e),Nu(i,e);let a=e.length;t.forEach(Uu);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Nu(i,t[c]);let l=$l.triangulate(i,r);for(let c=0;c<l.length;c+=3)s.push(l.slice(c,c+3));return s}};function Uu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Nu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Cr=class n extends Je{constructor(e=new an([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let l=0,c=e.length;l<c;l++)a(e[l]);function a(l){let c=[],o=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:u-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:vm,x,S,E,M,P,F=!1;if(g){x=g.getSpacedPoints(h),F=!0,d=!1;let C=!!g.isCatmullRomCurve3&&g.closed;S=g.computeFrenetFrames(h,C),E=new w,M=new w,P=new w}d||(_=0,u=0,f=0,m=0);let D=l.extractPoints(o),U=D.shape,k=D.holes;if(!Ni.isClockWise(U)){U=U.reverse();for(let C=0,N=k.length;C<N;C++){let y=k[C];Ni.isClockWise(y)&&(k[C]=y.reverse())}}function O(C){let N=10000000000000001e-36,y=C[0];for(let L=1;L<=C.length;L++){let I=L%C.length,A=C[I],G=A.x-y.x,X=A.y-y.y,Y=G*G+X*X,re=Math.max(Math.abs(A.x),Math.abs(A.y),Math.abs(y.x),Math.abs(y.y));Y<=N*re*re?(C.splice(I,1),L--):y=A}}O(U),k.forEach(O);let Z=k.length,H=U;for(let C=0;C<Z;C++){let N=k[C];U=U.concat(N)}function V(C,N,y){return N||Ce("ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(N,y)}let q=U.length;function W(C,N,y){let L,I,A,G=C.x-N.x,X=C.y-N.y,Y=y.x-C.x,re=y.y-C.y,ye=G*G+X*X,Me=G*re-X*Y;if(Math.abs(Me)>Number.EPSILON){let he=Math.sqrt(ye),Pe=Math.sqrt(Y*Y+re*re),ee=N.x-X/he,se=N.y+G/he,ne=((y.x-re/Pe-ee)*re-(y.y+Y/Pe-se)*Y)/(G*re-X*Y);L=ee+G*ne-C.x,I=se+X*ne-C.y;let pe=L*L+I*I;if(pe<=2)return new Q(L,I);A=Math.sqrt(pe/2)}else{let he=!1;G>Number.EPSILON?Y>Number.EPSILON&&(he=!0):G<-Number.EPSILON?Y<-Number.EPSILON&&(he=!0):Math.sign(X)===Math.sign(re)&&(he=!0),he?(L=-X,I=G,A=Math.sqrt(ye)):(L=G,I=X,A=Math.sqrt(ye/2))}return new Q(L/A,I/A)}let ie=[];for(let C=0,N=H.length,y=N-1,L=C+1;C<N;C++,y++,L++)y===N&&(y=0),L===N&&(L=0),ie[C]=W(H[C],H[y],H[L]);let de=[],Ee,_e,xe=ie.concat();for(let C=0,N=Z;C<N;C++){let y=k[C];Ee=[];for(let L=0,I=y.length,A=I-1,G=L+1;L<I;L++,A++,G++)A===I&&(A=0),G===I&&(G=0),Ee[L]=W(y[L],y[A],y[G]);de.push(Ee),xe=xe.concat(Ee)}if(_===0)_e=Ni.triangulateShape(H,k);else{let C=[],N=[];for(let y=0;y<_;y++){let L=y/_,I=u*Math.cos(L*Math.PI/2),A=f*Math.sin(L*Math.PI/2)+m;for(let G=0,X=H.length;G<X;G++){let Y=V(H[G],ie[G],A);me(Y.x,Y.y,-I),L===0&&C.push(Y)}for(let G=0,X=Z;G<X;G++){let Y=k[G];Ee=de[G];let re=[];for(let ye=0,Me=Y.length;ye<Me;ye++){let he=V(Y[ye],Ee[ye],A);me(he.x,he.y,-I),L===0&&re.push(he)}L===0&&N.push(re)}}_e=Ni.triangulateShape(C,N)}let te=_e.length,ce=f+m;for(let C=0;C<q;C++){let N=d?V(U[C],xe[C],ce):U[C];F?(M.copy(S.normals[0]).multiplyScalar(N.x),E.copy(S.binormals[0]).multiplyScalar(N.y),P.copy(x[0]).add(M).add(E),me(P.x,P.y,P.z)):me(N.x,N.y,0)}for(let C=1;C<=h;C++)for(let N=0;N<q;N++){let y=d?V(U[N],xe[N],ce):U[N];F?(M.copy(S.normals[C]).multiplyScalar(y.x),E.copy(S.binormals[C]).multiplyScalar(y.y),P.copy(x[C]).add(M).add(E),me(P.x,P.y,P.z)):me(y.x,y.y,p/h*C)}for(let C=_-1;C>=0;C--){let N=C/_,y=u*Math.cos(N*Math.PI/2),L=f*Math.sin(N*Math.PI/2)+m;for(let I=0,A=H.length;I<A;I++){let G=V(H[I],ie[I],L);me(G.x,G.y,p+y)}for(let I=0,A=k.length;I<A;I++){let G=k[I];Ee=de[I];for(let X=0,Y=G.length;X<Y;X++){let re=V(G[X],Ee[X],L);F?me(re.x,re.y+x[h-1].y,x[h-1].x+y):me(re.x,re.y,p+y)}}}function oe(C,N){let y=C.length;for(;--y>=0;){let L=y,I=y-1;I<0&&(I=C.length-1);for(let A=0,G=h+2*_;A<G;A++){let X=q*A,Y=q*(A+1);$(N+L+X,N+I+X,N+I+Y,N+L+Y)}}}function me(C,N,y){c.push(C),c.push(N),c.push(y)}function Fe(C,N,y){R(C),R(N),R(y);let L=r.length/3,I=v.generateTopUV(i,r,L-3,L-2,L-1);b(I[0]),b(I[1]),b(I[2])}function $(C,N,y,L){R(C),R(N),R(L),R(N),R(y),R(L);let I=r.length/3,A=v.generateSideWallUV(i,r,I-6,I-3,I-2,I-1);b(A[0]),b(A[1]),b(A[3]),b(A[1]),b(A[2]),b(A[3])}function R(C){r.push(c[3*C+0]),r.push(c[3*C+1]),r.push(c[3*C+2])}function b(C){s.push(C.x),s.push(C.y)}(function(){let C=r.length/3;if(d){let N=0,y=q*N;for(let L=0;L<te;L++){let I=_e[L];Fe(I[2]+y,I[1]+y,I[0]+y)}N=h+2*_,y=q*N;for(let L=0;L<te;L++){let I=_e[L];Fe(I[0]+y,I[1]+y,I[2]+y)}}else{for(let N=0;N<te;N++){let y=_e[N];Fe(y[2],y[1],y[0])}for(let N=0;N<te;N++){let y=_e[N];Fe(y[0]+q*h,y[1]+q*h,y[2]+q*h)}}i.addGroup(C,r.length/3-C,0)})(),(function(){let C=r.length/3,N=0;oe(H,N),N+=H.length;for(let y=0,L=k.length;y<L;y++){let I=k[y];oe(I,N),N+=I.length}i.addGroup(C,r.length/3-C,1)})()}this.setAttribute("position",new we(r,3)),this.setAttribute("uv",new we(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let l=t[s];r.shapes.push(l.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let l=t[e.shapes[s]];i.push(l)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new eo[r.type]().fromJSON(r)),new n(i,e.options)}},vm={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],l=e[3*i],c=e[3*i+1],o=e[3*r],h=e[3*r+1];return[new Q(s,a),new Q(l,c),new Q(o,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],l=e[3*t+1],c=e[3*t+2],o=e[3*i],h=e[3*i+1],p=e[3*i+2],d=e[3*r],u=e[3*r+1],f=e[3*r+2],m=e[3*s],_=e[3*s+1],g=e[3*s+2];return Math.abs(l-h)<Math.abs(a-o)?[new Q(a,1-c),new Q(o,1-p),new Q(d,1-f),new Q(m,1-g)]:[new Q(l,1-c),new Q(h,1-p),new Q(u,1-f),new Q(_,1-g)]}},bn=class n extends Sn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},io=class n extends Je{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=ze(r,0,2*Math.PI);let s=[],a=[],l=[],c=[],o=[],h=1/t,p=new w,d=new Q,u=new w,f=new w,m=new w,_=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:_=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,u.x=1*g,u.y=-_,u.z=0*g,m.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(m.x,m.y,m.z);break;default:_=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,u.x=1*g,u.y=-_,u.z=0*g,f.copy(u),u.x+=m.x,u.y+=m.y,u.z+=m.z,u.normalize(),c.push(u.x,u.y,u.z),m.copy(f)}for(let v=0;v<=t;v++){let x=i+v*h*r,S=Math.sin(x),E=Math.cos(x);for(let M=0;M<=e.length-1;M++){p.x=e[M].x*S,p.y=e[M].y,p.z=e[M].x*E,a.push(p.x,p.y,p.z),d.x=v/t,d.y=M/(e.length-1),l.push(d.x,d.y);let P=c[3*M+0]*S,F=c[3*M+1],D=c[3*M+0]*E;o.push(P,F,D)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let S=x+v*e.length,E=S,M=S+e.length,P=S+e.length+1,F=S+1;s.push(E,M,F),s.push(P,F,M)}this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("uv",new we(l,2)),this.setAttribute("normal",new we(o,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Rr=class n extends Sn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},$t=class n extends Je{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,l=Math.floor(i),c=Math.floor(r),o=l+1,h=c+1,p=e/l,d=t/c,u=[],f=[],m=[],_=[];for(let g=0;g<h;g++){let v=g*d-a;for(let x=0;x<o;x++){let S=x*p-s;f.push(S,-v,0),m.push(0,0,1),_.push(x/l),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<l;v++){let x=v+o*g,S=v+o*(g+1),E=v+1+o*(g+1),M=v+1+o*g;u.push(x,S,M),u.push(S,E,M)}this.setIndex(u),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(m,3)),this.setAttribute("uv",new we(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},no=class n extends Je{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let l=[],c=[],o=[],h=[],p=e,d=(t-e)/(r=Math.max(1,r)),u=new w,f=new Q;for(let m=0;m<=r;m++){for(let _=0;_<=i;_++){let g=s+_/i*a;u.x=p*Math.cos(g),u.y=p*Math.sin(g),c.push(u.x,u.y,u.z),o.push(0,0,1),f.x=(u.x/t+1)/2,f.y=(u.y/t+1)/2,h.push(f.x,f.y)}p+=d}for(let m=0;m<r;m++){let _=m*(i+1);for(let g=0;g<i;g++){let v=g+_,x=v,S=v+i+1,E=v+i+2,M=v+1;l.push(x,S,M),l.push(S,E,M)}}this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Pr=class n extends Je{constructor(e=new an([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],l=0,c=0;if(Array.isArray(e)===!1)o(e);else for(let h=0;h<e.length;h++)o(e[h]),this.addGroup(l,c,h),l+=c,c=0;function o(h){let p=r.length/3,d=h.extractPoints(t),u=d.shape,f=d.holes;Ni.isClockWise(u)===!1&&(u=u.reverse());for(let _=0,g=f.length;_<g;_++){let v=f[_];Ni.isClockWise(v)===!0&&(f[_]=v.reverse())}let m=Ni.triangulateShape(u,f);for(let _=0,g=f.length;_<g;_++){let v=f[_];u=u.concat(v)}for(let _=0,g=u.length;_<g;_++){let v=u[_];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let _=0,g=m.length;_<g;_++){let v=m[_],x=v[0]+p,S=v[1]+p,E=v[2]+p;i.push(x,S,E),c+=3}}this.setIndex(i),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(s,3)),this.setAttribute("uv",new we(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},ui=class n extends Je{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+l,Math.PI),o=0,h=[],p=new w,d=new w,u=[],f=[],m=[],_=[];for(let g=0;g<=i;g++){let v=[],x=g/i,S=a+x*l,E=e*Math.cos(S),M=Math.sqrt(e*e-E*E),P=0;g===0&&a===0?P=.5/t:g===i&&c===Math.PI&&(P=-.5/t);for(let F=0;F<=t;F++){let D=F/t,U=r+D*s;p.x=-M*Math.cos(U),p.y=E,p.z=M*Math.sin(U),f.push(p.x,p.y,p.z),d.copy(p).normalize(),m.push(d.x,d.y,d.z),_.push(D+P,1-x),v.push(o++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let x=h[g][v+1],S=h[g][v],E=h[g+1][v],M=h[g+1][v+1];(g!==0||a>0)&&u.push(x,S,M),(g!==i-1||c<Math.PI)&&u.push(S,E,M)}this.setIndex(u),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(m,3)),this.setAttribute("uv",new we(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ro=class n extends Sn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Oi=class n extends Je{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI,a=0,l=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:l},i=Math.floor(i),r=Math.floor(r);let c=[],o=[],h=[],p=[],d=new w,u=new w,f=new w;for(let m=0;m<=i;m++){let _=a+m/i*l;for(let g=0;g<=r;g++){let v=g/r*s;u.x=(e+t*Math.cos(_))*Math.cos(v),u.y=(e+t*Math.cos(_))*Math.sin(v),u.z=t*Math.sin(_),o.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),f.subVectors(u,d).normalize(),h.push(f.x,f.y,f.z),p.push(g/r),p.push(m/i)}}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){let g=(r+1)*m+_-1,v=(r+1)*(m-1)+_-1,x=(r+1)*(m-1)+_,S=(r+1)*m+_;c.push(g,v,S),c.push(v,x,S)}this.setIndex(c),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},so=class n extends Je{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let l=[],c=[],o=[],h=[],p=new w,d=new w,u=new w,f=new w,m=new w,_=new w,g=new w;for(let x=0;x<=i;++x){let S=x/i*s*Math.PI*2;v(S,s,a,e,u),v(S+.01,s,a,e,f),_.subVectors(f,u),g.addVectors(f,u),m.crossVectors(_,g),g.crossVectors(m,_),m.normalize(),g.normalize();for(let E=0;E<=r;++E){let M=E/r*Math.PI*2,P=-t*Math.cos(M),F=t*Math.sin(M);p.x=u.x+(P*g.x+F*m.x),p.y=u.y+(P*g.y+F*m.y),p.z=u.z+(P*g.z+F*m.z),c.push(p.x,p.y,p.z),d.subVectors(p,u).normalize(),o.push(d.x,d.y,d.z),h.push(x/i),h.push(E/r)}}for(let x=1;x<=i;x++)for(let S=1;S<=r;S++){let E=(r+1)*(x-1)+(S-1),M=(r+1)*x+(S-1),P=(r+1)*x+S,F=(r+1)*(x-1)+S;l.push(E,M,F),l.push(M,P,F)}function v(x,S,E,M,P){let F=Math.cos(x),D=Math.sin(x),U=E/S*x,k=Math.cos(U);P.x=M*(2+k)*.5*F,P.y=M*(2+k)*D*.5,P.z=M*Math.sin(U)*.5}this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ir=class n extends Je{constructor(e=new ws(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let l=new w,c=new w,o=new Q,h=new w,p=[],d=[],u=[],f=[];function m(_){h=e.getPointAt(_/t,h);let g=a.normals[_],v=a.binormals[_];for(let x=0;x<=r;x++){let S=x/r*Math.PI*2,E=Math.sin(S),M=-Math.cos(S);c.x=M*g.x+E*v.x,c.y=M*g.y+E*v.y,c.z=M*g.z+E*v.z,c.normalize(),d.push(c.x,c.y,c.z),l.x=h.x+i*c.x,l.y=h.y+i*c.y,l.z=h.z+i*c.z,p.push(l.x,l.y,l.z)}}(function(){for(let _=0;_<t;_++)m(_);m(s===!1?t:0),(function(){for(let _=0;_<=t;_++)for(let g=0;g<=r;g++)o.x=_/t,o.y=g/r,u.push(o.x,o.y)})(),(function(){for(let _=1;_<=t;_++)for(let g=1;g<=r;g++){let v=(r+1)*(_-1)+(g-1),x=(r+1)*_+(g-1),S=(r+1)*_+g,E=(r+1)*(_-1)+g;f.push(v,x,E),f.push(x,S,E)}})()})(),this.setIndex(f),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new eo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ao=class extends Je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new w,s=new w;if(e.index!==null){let a=e.attributes.position,l=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:l.count,materialIndex:0}]);for(let o=0,h=c.length;o<h;++o){let p=c[o],d=p.start;for(let u=d,f=d+p.count;u<f;u+=3)for(let m=0;m<3;m++){let _=l.getX(u+m),g=l.getX(u+(m+1)%3);r.fromBufferAttribute(a,_),s.fromBufferAttribute(a,g),Fu(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let l=0,c=a.count/3;l<c;l++)for(let o=0;o<3;o++){let h=3*l+o,p=3*l+(o+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,p),Fu(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new we(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Fu(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var d0=Object.freeze({__proto__:null,BoxGeometry:rn,CapsuleGeometry:ja,CircleGeometry:qa,ConeGeometry:Ya,CylinderGeometry:sn,DodecahedronGeometry:Za,EdgesGeometry:Ja,ExtrudeGeometry:Cr,IcosahedronGeometry:bn,LatheGeometry:io,OctahedronGeometry:Rr,PlaneGeometry:$t,PolyhedronGeometry:Sn,RingGeometry:no,ShapeGeometry:Pr,SphereGeometry:ui,TetrahedronGeometry:ro,TorusGeometry:Oi,TorusKnotGeometry:so,TubeGeometry:Ir,WireframeGeometry:ao});function Zn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(Ou(r))r.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Ou(r[0])){let s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Ut(n){let e={};for(let t=0;t<n.length;t++){let i=Zn(n[t]);for(let r in i)e[r]=i[r]}return e}function Ou(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var Ld={clone:Zn,merge:Ut},Et=class extends tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zn(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Te().setHex(r.value);break;case"v2":this.uniforms[i].value=new Q().fromArray(r.value);break;case"v3":this.uniforms[i].value=new w().fromArray(r.value);break;case"v4":this.uniforms[i].value=new $e().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Oe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},oo=class extends Et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Tn=class extends tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Is=class extends Tn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var lo=class extends tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},co=class extends tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ua(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}var wn=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let l=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let l=t[1];e<l&&(i=2,s=l);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let l=i+a>>>1;e<t[l]?a=l:i=l+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ho=class extends wn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,l=r[s],c=r[a];if(l===void 0)switch(this.getSettings_().endingStart){case Wl:s=e,l=2*t-i;break;case Xl:s=r.length-2,l=t+r[s]-r[s+1];break;default:s=e,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Wl:a=e,c=2*i-t;break;case Xl:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}let o=.5*(i-t),h=this.valueSize;this._weightPrev=o/(t-l),this._weightNext=o/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(i-t)/(r-t),m=f*f,_=m*f,g=-d*_+2*d*m-d*f,v=(1+d)*_+(-1.5-2*d)*m+(-.5+d)*f+1,x=(-1-u)*_+(1.5+u)*m+.5*f,S=u*_-u*m;for(let E=0;E!==l;++E)s[E]=g*a[h+E]+v*a[o+E]+x*a[c+E]+S*a[p+E];return s}},uo=class extends wn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=(i-t)/(r-t),p=1-h;for(let d=0;d!==l;++d)s[d]=a[o+d]*p+a[c+d]*h;return s}},po=class extends wn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},mo=class extends wn{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this.inTangents,p=this.outTangents;if(!h||!p){let f=(i-t)/(r-t),m=1-f;for(let _=0;_!==l;++_)s[_]=a[o+_]*m+a[c+_]*f;return s}let d=2*l,u=e-1;for(let f=0;f!==l;++f){let m=a[o+f],_=a[c+f],g=u*d+2*f,v=p[g],x=p[g+1],S=e*d+2*f,E=h[S],M=h[S+1],P,F,D,U,k,O=(i-t)/(r-t);for(let Z=0;Z<8;Z++){P=O*O,F=P*O,D=1-O,U=D*D,k=U*D;let H=k*t+3*U*O*v+3*D*P*E+F*r-i;if(Math.abs(H)<1e-10)break;let V=3*U*(v-t)+6*D*O*(E-v)+3*P*(r-E);if(Math.abs(V)<1e-10)break;O-=H/V,O=Math.max(0,Math.min(1,O))}s[f]=k*m+3*U*O*x+3*D*P*M+F*_}return s}},Zt=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ua(t,this.TimeBufferType),this.values=Ua(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ua(e.times,Array),values:Ua(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new mo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case os:t=this.InterpolantFactoryMethodDiscrete;break;case Ga:t=this.InterpolantFactoryMethodLinear;break;case Oa:t=this.InterpolantFactoryMethodSmooth;break;case kl:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Ae("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return os;case this.InterpolantFactoryMethodLinear:return Ga;case this.InterpolantFactoryMethodSmooth:return Oa;case this.InterpolantFactoryMethodBezier:return kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let l=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==s;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){Ce("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){Ce("KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(r!==void 0&&Vp(r))for(let l=0,c=r.length;l!==c;++l){let o=r[l];if(isNaN(o)){Ce("KeyframeTrack: Value is not a valid number.",this,l,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Oa,s=e.length-1,a=1;for(let l=1;l<s;++l){let c=!1,o=e[l];if(o!==e[l+1]&&(l!==1||o!==e[0]))if(r)c=!0;else{let h=l*i,p=h-i,d=h+i;for(let u=0;u!==i;++u){let f=t[h+u];if(f!==t[p+u]||f!==t[d+u]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let h=l*i,p=a*i;for(let d=0;d!==i;++d)t[p+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let l=s*i,c=a*i,o=0;o!==i;++o)t[c+o]=t[l+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Zt.prototype.ValueTypeName="",Zt.prototype.TimeBufferType=Float32Array,Zt.prototype.ValueBufferType=Float32Array,Zt.prototype.DefaultInterpolation=Ga;var xn=class extends Zt{constructor(e,t,i){super(e,t,i)}};xn.prototype.ValueTypeName="bool",xn.prototype.ValueBufferType=Array,xn.prototype.DefaultInterpolation=os,xn.prototype.InterpolantFactoryMethodLinear=void 0,xn.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends Zt{constructor(e,t,i,r){super(e,t,i,r)}};fo.prototype.ValueTypeName="color";var go=class extends Zt{constructor(e,t,i,r){super(e,t,i,r)}};go.prototype.ValueTypeName="number";var vo=class extends wn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(i-t)/(r-t),o=e*l;for(let h=o+l;o!==h;o+=4)Wt.slerpFlat(s,0,a,o-l,a,o,c);return s}},Ls=class extends Zt{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new vo(this.times,this.values,this.getValueSize(),e)}};Ls.prototype.ValueTypeName="quaternion",Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var yn=class extends Zt{constructor(e,t,i){super(e,t,i)}};yn.prototype.ValueTypeName="string",yn.prototype.ValueBufferType=Array,yn.prototype.DefaultInterpolation=os,yn.prototype.InterpolantFactoryMethodLinear=void 0,yn.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends Zt{constructor(e,t,i,r){super(e,t,i,r)}};_o.prototype.ValueTypeName="vector";var xo=class{constructor(e,t,i){let r=this,s,a=!1,l=0,c=0,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){c++,a===!1&&r.onStart!==void 0&&r.onStart(h,l,c),a=!0},this.itemEnd=function(h){l++,r.onProgress!==void 0&&r.onProgress(h,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,p){return o.push(h,p),this},this.removeHandler=function(h){let p=o.indexOf(h);return p!==-1&&o.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=o.length;p<d;p+=2){let u=o[p],f=o[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Dd=new xo,yo=class{constructor(e){this.manager=e!==void 0?e:Dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};yo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ds=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Us=class extends Ds{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Gl=new Oe,Bu=new w,zu=new w,Ql=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=zt,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nn,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bu),zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zu),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===xr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Na=new w,Fa=new Wt,Di=new w,En=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Na,Fa,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,Fa,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Na,Fa,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,Fa,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_n=new w,Gu=new Q,Vu=new Q,Lt=class extends En{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Mr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*vr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Mr*Math.atan(Math.tan(.5*vr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_n.x,_n.y).multiplyScalar(-e/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_n.x,_n.y).multiplyScalar(-e/_n.z)}getViewSize(e,t){return this.getViewBounds(e,Gu,Vu),t.subVectors(Vu,Gu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*vr*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,o=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/o,r*=a.width/c,i*=a.height/o}let l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Lr=class extends En{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=o*this.view.offsetX,a=s+o*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ec=class extends Ql{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dr=class extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new ec}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var p0=new Oe,m0=new Oe,f0=new Oe;var fr=-90,Mo=class extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Lt(fr,1,e,t);r.layers=this.layers,this.add(r);let s=new Lt(fr,1,e,t);s.layers=this.layers,this.add(s);let a=new Lt(fr,1,e,t);a.layers=this.layers,this.add(a);let l=new Lt(fr,1,e,t);l.layers=this.layers,this.add(l);let c=new Lt(fr,1,e,t);c.layers=this.layers,this.add(c);let o=new Lt(fr,1,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,l,c]=t;for(let o of t)this.remove(o);if(e===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==xr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,l,c,o,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;_=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,d,u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},So=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var g0=new w,v0=new Wt,_0=new w,x0=new w,y0=new w;var M0=new w,S0=new Wt,b0=new w,T0=new w;var ah="\\[\\]\\.:\\/",_m=new RegExp("["+ah+"]","g"),Vl="[^"+ah+"]",xm="[^"+ah.replace("\\.","")+"]",ym=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Vl)+/(WCOD+)?/.source.replace("WCOD",xm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vl)+"$"),Mm=["material","materials","bones","map"],it=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_m,"")}static parseTrackName(e){let t=ym.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Mm.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let l=s[a];if(l.name===t||l.uuid===t)return l;let c=i(l.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Ae("PropertyBinding: No target node found for track: "+this.path+".");if(i){let o=t.objectIndex;switch(i){case"materials":if(!e.material)return void Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===o){o=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(o!==void 0){if(e[o]===void 0)return void Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[o]}}let a=e[r];if(a===void 0)return void Ce("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=class{constructor(n,e,t){let i=t||it.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray],it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var w0=new Float32Array(1);var E0=new Oe;var dh=class dh{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};dh.prototype.isMatrix2=!0;var tc=dh,A0=new Q;var C0=new w,R0=new w,P0=new w,I0=new w,L0=new w,D0=new w,U0=new w;var N0=new w;var F0=new w,O0=new Oe,B0=new Oe;var z0=new w,G0=new Te,V0=new Te;var k0=new w,H0=new w,W0=new w;var X0=new w,j0=new En;var q0=new ci;var Y0=new w;function oh(n,e,t,i){let r=(function(s){switch(s){case zt:case xc:return{byteLength:1,components:1};case zr:case yc:case pi:return{byteLength:2,components:1};case Ro:case Po:return{byteLength:2,components:4};case on:case Co:case di:return{byteLength:4,components:1};case Mc:case Sc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)})(i);switch(t){case 1021:return n*e;case Io:case Lo:return n*e/r.components*r.byteLength;case 1030:case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case Ti:case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}})),typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ip(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function bm(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let l=s.array,c=s.usage,o=l.byteLength,h=n.createBuffer(),p;if(n.bindBuffer(a,h),n.bufferData(a,l,c),s.onUploadCallback(),l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)p=s.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else{if(!(l instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);p=n.UNSIGNED_BYTE}return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:o}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,l){let c=a.array,o=a.updateRanges;if(n.bindBuffer(l,s),o.length===0)n.bufferSubData(l,0,c);else{o.sort((p,d)=>p.start-d.start);let h=0;for(let p=1;p<o.length;p++){let d=o[h],u=o[p];u.start<=d.start+d.count+1?d.count=Math.max(d.count,u.start+u.count-d.start):(++h,o[h]=u)}o.length=h+1;for(let p=0,d=o.length;p<d;p++){let u=o[p];n.bufferSubData(l,u.start*c.BYTES_PER_ELEMENT,c,u.start,u.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}var Ge={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},le={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new w},probesMax:{value:new w},probesResolution:{value:new w}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Vi={basic:{uniforms:Ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ut([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ut([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ut([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ut([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ut([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ut([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ut([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ut([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Ut([le.common,le.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Ut([le.lights,le.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Vi.physical={uniforms:Ut([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Vo={r:0,b:0,g:0},Tm=new Oe,np=new Ue;function wm(n,e,t,i,r,s){let a=new Te(0),l,c,o=r===!0?0:1,h=null,p=0,d=null;function u(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){let g=m.backgroundBlurriness>0;_=e.get(_,g)}return _}function f(m,_){m.getRGB(Vo,sh(n)),t.buffers.color.setClear(Vo.r,Vo.g,Vo.b,_,s)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),o=_,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,f(a,o)},render:function(m){let _=!1,g=u(m);g===null?f(a,o):g&&g.isColor&&(f(g,1),_=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(m,_){let g=u(_);g&&(g.isCubeTexture||g.mapping===Os)?(c===void 0&&(c=new tt(new rn(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:Zn(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,x,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(_.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(np),c.material.toneMapped=He.getTransfer(g.colorSpace)!==Ye,h===g&&p===g.version&&d===n.toneMapping||(c.material.needsUpdate=!0,h=g,p=g.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new tt(new $t(2,2),new Et({name:"BackgroundMaterial",uniforms:Zn(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=He.getTransfer(g.colorSpace)!==Ye,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&p===g.version&&d===n.toneMapping||(l.material.needsUpdate=!0,h=g,p=g.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function Em(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=o(null),s=r,a=!1;function l(g){return n.bindVertexArray(g)}function c(g){return n.deleteVertexArray(g)}function o(g){let v=[],x=[],S=[];for(let E=0;E<t;E++)v[E]=0,x[E]=0,S[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:x,attributeDivisors:S,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,x=g.length;v<x;v++)g[v]=0}function p(g){d(g,0)}function d(g,v){let x=s.newAttributes,S=s.enabledAttributes,E=s.attributeDivisors;x[g]=1,S[g]===0&&(n.enableVertexAttribArray(g),S[g]=1),E[g]!==v&&(n.vertexAttribDivisor(g,v),E[g]=v)}function u(){let g=s.newAttributes,v=s.enabledAttributes;for(let x=0,S=v.length;x<S;x++)v[x]!==g[x]&&(n.disableVertexAttribArray(x),v[x]=0)}function f(g,v,x,S,E,M,P){P===!0?n.vertexAttribIPointer(g,v,x,E,M):n.vertexAttribPointer(g,v,x,S,E,M)}function m(){_(),a=!0,s!==r&&(s=r,l(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,v,x,S,E){let M=!1,P=(function(F,D,U,k){let O=k.wireframe===!0,Z=i[D.id];Z===void 0&&(Z={},i[D.id]=Z);let H=F.isInstancedMesh===!0?F.id:0,V=Z[H];V===void 0&&(V={},Z[H]=V);let q=V[U.id];q===void 0&&(q={},V[U.id]=q);let W=q[O];return W===void 0&&(W=o(n.createVertexArray()),q[O]=W),W})(g,S,x,v);s!==P&&(s=P,l(s.object)),M=(function(F,D,U,k){let O=s.attributes,Z=D.attributes,H=0,V=U.getAttributes();for(let q in V)if(V[q].location>=0){let W=O[q],ie=Z[q];if(ie===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor)),W===void 0||W.attribute!==ie||ie&&W.data!==ie.data)return!0;H++}return s.attributesNum!==H||s.index!==k})(g,S,x,E),M&&(function(F,D,U,k){let O={},Z=D.attributes,H=0,V=U.getAttributes();for(let q in V)if(V[q].location>=0){let W=Z[q];W===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(W=F.instanceColor));let ie={};ie.attribute=W,W&&W.data&&(ie.data=W.data),O[q]=ie,H++}s.attributes=O,s.attributesNum=H,s.index=k})(g,S,x,E),E!==null&&e.update(E,n.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,(function(F,D,U,k){h();let O=k.attributes,Z=U.getAttributes(),H=D.defaultAttributeValues;for(let V in Z){let q=Z[V];if(q.location>=0){let W=O[V];if(W===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(W=F.instanceColor)),W!==void 0){let ie=W.normalized,de=W.itemSize,Ee=e.get(W);if(Ee===void 0)continue;let _e=Ee.buffer,xe=Ee.type,te=Ee.bytesPerElement,ce=xe===n.INT||xe===n.UNSIGNED_INT||W.gpuType===Co;if(W.isInterleavedBufferAttribute){let oe=W.data,me=oe.stride,Fe=W.offset;if(oe.isInstancedInterleavedBuffer){for(let $=0;$<q.locationSize;$++)d(q.location+$,oe.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let $=0;$<q.locationSize;$++)p(q.location+$);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let $=0;$<q.locationSize;$++)f(q.location+$,de/q.locationSize,xe,ie,me*te,(Fe+de/q.locationSize*$)*te,ce)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<q.locationSize;oe++)d(q.location+oe,W.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<q.locationSize;oe++)p(q.location+oe);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let oe=0;oe<q.locationSize;oe++)f(q.location+oe,de/q.locationSize,xe,ie,de*te,de/q.locationSize*oe*te,ce)}}else if(H!==void 0){let ie=H[V];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(q.location,ie);break;case 3:n.vertexAttrib3fv(q.location,ie);break;case 4:n.vertexAttrib4fv(q.location,ie);break;default:n.vertexAttrib1fv(q.location,ie)}}}}u()})(g,v,x,S),E!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))},reset:m,resetDefaultState:_,dispose:function(){m();for(let g in i){let v=i[g];for(let x in v){let S=v[x];for(let E in S){let M=S[E];for(let P in M)c(M[P].object),delete M[P];delete S[E]}}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let v=i[g.id];for(let x in v){let S=v[x];for(let E in S){let M=S[E];for(let P in M)c(M[P].object),delete M[P];delete S[E]}}delete i[g.id]},releaseStatesOfObject:function(g){for(let v in i){let x=i[v],S=g.isInstancedMesh===!0?g.id:0,E=x[S];if(E!==void 0){for(let M in E){let P=E[M];for(let F in P)c(P[F].object),delete P[F];delete E[M]}delete x[S],Object.keys(x).length===0&&delete i[v]}}},releaseStatesOfProgram:function(g){for(let v in i){let x=i[v];for(let S in x){let E=x[S];if(E[g.id]===void 0)continue;let M=E[g.id];for(let P in M)c(M[P].object),delete M[P];delete E[g.id]}}},initAttributes:h,enableAttribute:p,disableUnusedAttributes:u}}function Am(n,e,t){let i;this.setMode=function(r){i=r},this.render=function(r,s){n.drawArrays(i,r,s),t.update(s,i,1)},this.renderInstances=function(r,s,a){a!==0&&(n.drawArraysInstanced(i,r,s,a),t.update(s,i,a))},this.renderMultiDraw=function(r,s,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,r,0,s,0,a);let l=0;for(let c=0;c<a;c++)l+=s[c];t.update(l,i,1)}}function Cm(n,e,t,i){let r;function s(h){if(h==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(Ae("WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=t.logarithmicDepthBuffer===!0,o=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");return t.reversedDepthBuffer===!0&&o===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(h){return h===Ti||i.convert(h)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let p=h===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==zt&&i.convert(h)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==di&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:o,maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function Rm(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Ui,l=new Ue,c={value:null,needsUpdate:!1};function o(h,p,d,u){let f=h!==null?h.length:0,m=null;if(f!==0){if(m=c.value,u!==!0||m===null){let _=d+4*f,g=p.matrixWorldInverse;l.getNormalMatrix(g),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,x=d;v!==f;++v,x+=4)a.copy(h[v]).applyMatrix4(g,l),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let d=h.length!==0||p||i!==0||r;return r=p,i=h.length,d},this.beginShadows=function(){s=!0,o(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=o(h,p,0)},this.setState=function(h,p,d){let u=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,_=n.get(h);if(!r||u===null||u.length===0||s&&!m)s?o(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=s?0:i,v=4*g,x=_.clippingState||null;c.value=x,x=o(u,p,v,d);for(let S=0;S!==v;++S)x[S]=t[S];_.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}np.set(-1,0,0,0,1,0,0,0,1);var Ud=[.125,.215,.35,.446,.526,.582],zs=20,Gs=new Lr,Nd=new Te,ph=null,mh=0,fh=0,gh=!1,Pm=new w,Ho=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:l=Pm}=s;ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ph,mh,fh),this._renderer.xr.enabled=gh,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===Hn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:pi,format:Ti,colorSpace:ls,depthBuffer:!1},r=Fd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fd(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let l=[],c=[],o=[],h=a,p=a-4+1+Ud.length;for(let d=0;d<p;d++){let u=Math.pow(2,h);l.push(u);let f=1/u;d>a-4?f=Ud[d-a+4-1]:d===0&&(f=0),c.push(f);let m=1/(u-2),_=-m,g=1+m,v=[_,_,g,_,g,g,_,_,g,g,_,g],x=6,S=6,E=3,M=2,P=1,F=new Float32Array(E*S*x),D=new Float32Array(M*S*x),U=new Float32Array(P*S*x);for(let O=0;O<x;O++){let Z=O%3*2/3-1,H=O>2?0:-1,V=[Z,H,0,Z+2/3,H,0,Z+2/3,H+1,0,Z,H,0,Z+2/3,H+1,0,Z,H+1,0];F.set(V,E*S*O),D.set(v,M*S*O);let q=[O,O,O,O,O,O];U.set(q,P*S*O)}let k=new Je;k.setAttribute("position",new wt(F,E)),k.setAttribute("uv",new wt(D,M)),k.setAttribute("faceIndex",new wt(U,P)),o.push(new tt(k,null)),h>4&&h--}return{lodMeshes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,l,c){let o=new Float32Array(zs),h=new w(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/l,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,l,c){return new Et({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/l,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new tt(new Je,e);this._renderer.compile(t,Gs)}_sceneToCubeUV(e,t,i,r,s){let a=new Lt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],o=this._renderer,h=o.autoClear,p=o.toneMapping;o.getClearColor(Nd),o.toneMapping=bi,o.autoClear=!1,o.state.buffers.depth.getReversed()&&(o.setRenderTarget(r),o.clearDepth(),o.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tt(new rn,new Jt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,f=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,f=!0):(u.color.copy(Nd),f=!0);for(let _=0;_<6;_++){let g=_%3;g===0?(a.up.set(0,l[_],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[_],s.y,s.z)):g===1?(a.up.set(0,0,l[_]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[_],s.z)):(a.up.set(0,l[_],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[_]));let v=this._cubeSize;Vr(r,g*v,_>2?v:0,v,v),o.setRenderTarget(r),f&&o.render(d,a),o.render(e,a)}o.toneMapping=p,o.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Br||e.mapping===Hn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Od());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let l=this._cubeSize;Vr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Gs)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms,o=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(o*o-h*h)*(0+1.25*o),{_lodMax:d}=this,u=this._sizeLods[i],f=3*u*(i>d-4?i-d+4:0),m=4*(this._cubeSize-u);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=d-t,Vr(s,f,m,3*u,2*u),r.setRenderTarget(s),r.render(l,Gs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=d-i,Vr(e,f,m,3*u,2*u),r.setRenderTarget(e),r.render(l,Gs)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,l){let c=this._renderer,o=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=o;let p=o.uniforms,d=this._sizeLods[i]-1,u=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/u,m=isFinite(s)?1+Math.floor(3*f):zs;m>zs&&Ae(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let _=[],g=0;for(let S=0;S<zs;++S){let E=S/f,M=Math.exp(-E*E/2);_.push(M),S===0?g+=M:S<m&&(g+=2*M)}for(let S=0;S<_.length;S++)_[S]=_[S]/g;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=_,p.latitudinal.value=a==="latitudinal",l&&(p.poleAxis.value=l);let{_lodMax:v}=this;p.dTheta.value=u,p.mipInt.value=v-i;let x=this._sizeLods[r];Vr(t,3*x*(r>v-4?r-v+4:0),4*(this._cubeSize-x),3*x,2*x),c.setRenderTarget(t),c.render(h,Gs)}};function Fd(n,e,t){let i=new Bt(n,e,t);return i.texture.mapping=Os,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Od(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Bd(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Wo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xo=class extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ys(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rn(5,5,5),s=new Et({name:"CubemapFromEquirect",uniforms:Zn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:Bi});s.uniforms.tEquirect.value=t;let a=new tt(r,s),l=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Dt),new Mo(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}};function Im(n){let e=new WeakMap,t=new WeakMap,i=null;function r(l,c){return c===wo?l.mapping=Br:c===Eo&&(l.mapping=Hn),l}function s(l){let c=l.target;c.removeEventListener("dispose",s);let o=e.get(c);o!==void 0&&(e.delete(c),o.dispose())}function a(l){let c=l.target;c.removeEventListener("dispose",a);let o=t.get(c);o!==void 0&&(t.delete(c),o.dispose())}return{get:function(l,c=!1){return l==null?null:c?(function(o){if(o&&o.isTexture){let h=o.mapping,p=h===wo||h===Eo,d=h===Br||h===Hn;if(p||d){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return i===null&&(i=new Ho(n)),u=p?i.fromEquirectangular(o,u):i.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let m=o.image;return p&&m&&m.height>0||d&&m&&(function(_){let g=0,v=6;for(let x=0;x<v;x++)_[x]!==void 0&&g++;return g===v})(m)?(i===null&&(i=new Ho(n)),u=p?i.fromEquirectangular(o):i.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o})(l):(function(o){if(o&&o.isTexture){let h=o.mapping;if(h===wo||h===Eo){if(e.has(o))return r(e.get(o).texture,o.mapping);{let p=o.image;if(p&&p.height>0){let d=new Xo(p.height);return d.fromEquirectangularTexture(n,o),e.set(o,d),o.addEventListener("dispose",s),r(d.texture,o.mapping)}return null}}}return o})(l)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function Lm(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Bn("WebGLRenderer: "+i+" extension not supported."),r}}}function Dm(n,e,t,i){let r={},s=new WeakMap;function a(c){let o=c.target;o.index!==null&&e.remove(o.index);for(let p in o.attributes)e.remove(o.attributes[p]);o.removeEventListener("dispose",a),delete r[o.id];let h=s.get(o);h&&(e.remove(h),s.delete(o)),i.releaseStatesOfGeometry(o),o.isInstancedBufferGeometry===!0&&delete o._maxInstanceCount,t.memory.geometries--}function l(c){let o=[],h=c.index,p=c.attributes.position,d=0;if(p===void 0)return;if(h!==null){let m=h.array;d=h.version;for(let _=0,g=m.length;_<g;_+=3){let v=m[_+0],x=m[_+1],S=m[_+2];o.push(v,x,x,S,S,v)}}else{let m=p.array;d=p.version;for(let _=0,g=m.length/3-1;_<g;_+=3){let v=_+0,x=_+1,S=_+2;o.push(v,x,x,S,S,v)}}let u=new(p.count>=65535?fs:ms)(o,1);u.version=d;let f=s.get(c);f&&e.remove(f),s.set(c,u)}return{get:function(c,o){return r[o.id]===!0||(o.addEventListener("dispose",a),r[o.id]=!0,t.memory.geometries++),o},update:function(c){let o=c.attributes;for(let h in o)e.update(o[h],n.ARRAY_BUFFER)},getWireframeAttribute:function(c){let o=s.get(c);if(o){let h=c.index;h!==null&&o.version<h.version&&l(c)}else l(c);return s.get(c)}}}function Um(n,e,t){let i,r,s;this.setMode=function(a){i=a},this.setIndex=function(a){r=a.type,s=a.bytesPerElement},this.render=function(a,l){n.drawElements(i,l,r,a*s),t.update(l,i,1)},this.renderInstances=function(a,l,c){c!==0&&(n.drawElementsInstanced(i,l,r,a*s,c),t.update(l,i,c))},this.renderMultiDraw=function(a,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,a,0,c);let o=0;for(let h=0;h<c;h++)o+=l[h];t.update(o,i,1)}}function Nm(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:Ce("WebGLInfo: Unknown draw mode:",i)}}}}function Fm(n,e,t){let i=new WeakMap,r=new $e;return{update:function(s,a,l){let c=s.morphTargetInfluences,o=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=o!==void 0?o.length:0,p=i.get(a);if(p===void 0||p.count!==h){let F=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",F)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,u=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;d===!0&&(v=1),u===!0&&(v=2),f===!0&&(v=3);let x=a.attributes.position.count*v,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*S*4*h),M=new us(E,x,S,h);M.type=di,M.needsUpdate=!0;let P=4*v;for(let D=0;D<h;D++){let U=m[D],k=_[D],O=g[D],Z=x*S*4*D;for(let H=0;H<U.count;H++){let V=H*P;d===!0&&(r.fromBufferAttribute(U,H),E[Z+V+0]=r.x,E[Z+V+1]=r.y,E[Z+V+2]=r.z,E[Z+V+3]=0),u===!0&&(r.fromBufferAttribute(k,H),E[Z+V+4]=r.x,E[Z+V+5]=r.y,E[Z+V+6]=r.z,E[Z+V+7]=0),f===!0&&(r.fromBufferAttribute(O,H),E[Z+V+8]=r.x,E[Z+V+9]=r.y,E[Z+V+10]=r.z,E[Z+V+11]=O.itemSize===4?r.w:1)}}p={count:h,texture:M,size:new Q(x,S)},i.set(a,p),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<c.length;f++)d+=c[f];let u=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",u),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}}}function Om(n,e,t,i,r){let s=new WeakMap;function a(l){let c=l.target;c.removeEventListener("dispose",a),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:function(l){let c=r.render.frame,o=l.geometry,h=e.get(l,o);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h},dispose:function(){s=new WeakMap}}}var Bm={[dc]:"LINEAR_TONE_MAPPING",[pc]:"REINHARD_TONE_MAPPING",[mc]:"CINEON_TONE_MAPPING",[Fs]:"ACES_FILMIC_TONE_MAPPING",[gc]:"AGX_TONE_MAPPING",[vc]:"NEUTRAL_TONE_MAPPING",[fc]:"CUSTOM_TONE_MAPPING"};function zm(n,e,t,i,r,s){let a=new Bt(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Si(e,t):void 0}),l=new Bt(e,t,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new Je;c.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new we([0,2,0,0,2,0],2));let o=new oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new tt(c,o),p=new Lr(-1,1,1,-1,0,1),d,u=null,f=null,m=!1,_=null,g=[],v=!1;this.setSize=function(x,S){a.setSize(x,S),l.setSize(x,S);for(let E=0;E<g.length;E++){let M=g[E];M.setSize&&M.setSize(x,S)}},this.setEffects=function(x){g=x,v=g.length>0&&g[0].isRenderPass===!0;let S=a.width,E=a.height;for(let M=0;M<g.length;M++){let P=g[M];P.setSize&&P.setSize(S,E)}},this.begin=function(x,S){if(m||x.toneMapping===bi&&g.length===0)return!1;if(_=S,S!==null){let E=S.width,M=S.height;a.width===E&&a.height===M||this.setSize(E,M)}return v===!1&&x.setRenderTarget(a),d=x.toneMapping,x.toneMapping=bi,!0},this.hasRenderPass=function(){return v},this.end=function(x,S){x.toneMapping=d,m=!0;let E=a,M=l;for(let P=0;P<g.length;P++){let F=g[P];if(F.enabled!==!1&&(F.render(x,M,E,S),F.needsSwap!==!1)){let D=E;E=M,M=D}}if(u!==x.outputColorSpace||f!==x.toneMapping){u=x.outputColorSpace,f=x.toneMapping,o.defines={},He.getTransfer(u)===Ye&&(o.defines.SRGB_TRANSFER="");let P=Bm[f];P&&(o.defines[P]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(_),x.render(h,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),l.dispose(),c.dispose(),o.dispose()}}var rp=new Ht,xh=new Si(1,1),sp=new us,ap=new Ha,op=new ys,zd=[],Gd=[],Vd=new Float32Array(16),kd=new Float32Array(9),Hd=new Float32Array(4);function Hr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=zd[r];if(s===void 0&&(s=new Float32Array(r),zd[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(s,l)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qo(n,e){let t=Gd[e];t===void 0&&(t=new Int32Array(e),Gd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Vm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function km(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function Hm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function Wm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Hd.set(i),n.uniformMatrix2fv(this.addr,!1,Hd),St(t,i)}}function Xm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;kd.set(i),n.uniformMatrix3fv(this.addr,!1,kd),St(t,i)}}function jm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Vd.set(i),n.uniformMatrix4fv(this.addr,!1,Vd),St(t,i)}}function qm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ym(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function Zm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function Jm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function Km(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $m(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function Qm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function ef(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function tf(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),this.type===n.SAMPLER_2D_SHADOW?(xh.compareFunction=t.isReversedDepthBuffer()?Go:zo,s=xh):s=rp,t.setTexture2D(e||s,r)}function nf(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ap,r)}function rf(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||op,r)}function sf(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||sp,r)}function af(n,e){n.uniform1fv(this.addr,e)}function of(n,e){let t=Hr(e,this.size,2);n.uniform2fv(this.addr,t)}function lf(n,e){let t=Hr(e,this.size,3);n.uniform3fv(this.addr,t)}function cf(n,e){let t=Hr(e,this.size,4);n.uniform4fv(this.addr,t)}function hf(n,e){let t=Hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function uf(n,e){let t=Hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function df(n,e){let t=Hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pf(n,e){n.uniform1iv(this.addr,e)}function mf(n,e){n.uniform2iv(this.addr,e)}function ff(n,e){n.uniform3iv(this.addr,e)}function gf(n,e){n.uniform4iv(this.addr,e)}function vf(n,e){n.uniform1uiv(this.addr,e)}function _f(n,e){n.uniform2uiv(this.addr,e)}function xf(n,e){n.uniform3uiv(this.addr,e)}function yf(n,e){n.uniform4uiv(this.addr,e)}function Mf(n,e,t){let i=this.cache,r=e.length,s=qo(t,r),a;Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s)),a=this.type===n.SAMPLER_2D_SHADOW?xh:rp;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||a,s[l])}function Sf(n,e,t){let i=this.cache,r=e.length,s=qo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ap,s[a])}function bf(n,e,t){let i=this.cache,r=e.length,s=qo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||op,s[a])}function Tf(n,e,t){let i=this.cache,r=e.length,s=qo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||sp,s[a])}var yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Gm;case 35664:return Vm;case 35665:return km;case 35666:return Hm;case 35674:return Wm;case 35675:return Xm;case 35676:return jm;case 5124:case 35670:return qm;case 35667:case 35671:return Ym;case 35668:case 35672:return Zm;case 35669:case 35673:return Jm;case 5125:return Km;case 36294:return $m;case 36295:return Qm;case 36296:return ef;case 35678:case 36198:case 36298:case 36306:case 35682:return tf;case 35679:case 36299:case 36307:return nf;case 35680:case 36300:case 36308:case 36293:return rf;case 36289:case 36303:case 36311:case 36292:return sf}})(t.type)}},Mh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return af;case 35664:return of;case 35665:return lf;case 35666:return cf;case 35674:return hf;case 35675:return uf;case 35676:return df;case 5124:case 35670:return pf;case 35667:case 35671:return mf;case 35668:case 35672:return ff;case 35669:case 35673:return gf;case 5125:return vf;case 36294:return _f;case 36295:return xf;case 36296:return yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return Sf;case 35680:case 36300:case 36308:case 36293:return bf;case 36289:case 36303:case 36311:case 36292:return Tf}})(t.type)}},Sh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let l=r[s];l.setValue(e,t[l.id],i)}}},vh=/(\w+)(\])?(\[|\.)?/g;function Wd(n,e){n.seq.push(e),n.map[e.id]=e}function wf(n,e,t){let i=n.name,r=i.length;for(vh.lastIndex=0;;){let s=vh.exec(i),a=vh.lastIndex,l=s[1],c=s[2]==="]",o=s[3];if(c&&(l|=0),o===void 0||o==="["&&a+2===r){Wd(t,o===void 0?new yh(l,n,e):new Mh(l,n,e));break}{let h=t.map[l];h===void 0&&(h=new Sh(l),Wd(t,h)),t=h}}}var kr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let l=e.getActiveUniform(t,a);wf(l,e.getUniformLocation(t,l.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let l=t[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Xd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Ef=0,jd=new Ue;function qd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(l,c){let o=l.split(`
`),h=[],p=Math.max(c-6,0),d=Math.min(c+6,o.length);for(let u=p;u<d;u++){let f=u+1;h.push(`${f===c?">":" "} ${f}: ${o[u]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return r}function Af(n,e){let t=(function(i){He._getMatrix(jd,He.workingColorSpace,i);let r=`mat3( ${jd.elements.map(s=>s.toFixed(4))} )`;switch(He.getTransfer(i)){case cs:return[r,"LinearTransferOETF"];case Ye:return[r,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Cf={[dc]:"Linear",[pc]:"Reinhard",[mc]:"Cineon",[Fs]:"ACESFilmic",[gc]:"AgX",[vc]:"Neutral",[fc]:"Custom"};function Rf(n,e){let t=Cf[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ko=new w;function Pf(){return He.getLuminanceCoefficients(ko),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${ko.x.toFixed(4)}, ${ko.y.toFixed(4)}, ${ko.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vs(n){return n!==""}function Yd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var If=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(n){return n.replace(If,Df)}var Lf=new Map;function Df(n,e){let t=Ge[e];if(t===void 0){let i=Lf.get(e);if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");t=Ge[i],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return bh(t)}var Uf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jd(n){return n.replace(Uf,Nf)}function Nf(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ff={[kn]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"},Of={[Br]:"ENVMAP_TYPE_CUBE",[Hn]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE_UV"},Bf={[Hn]:"ENVMAP_MODE_REFRACTION"},zf={[ud]:"ENVMAP_BLENDING_MULTIPLY",[dd]:"ENVMAP_BLENDING_MIX",[pd]:"ENVMAP_BLENDING_ADD"};function Gf(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,l=t.fragmentShader,c=(function(k){return Ff[k.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),o=(function(k){return k.envMap===!1?"ENVMAP_TYPE_CUBE":Of[k.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(k){return k.envMap===!1?"ENVMAP_MODE_REFLECTION":Bf[k.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),p=(function(k){return k.envMap===!1?"ENVMAP_BLENDING_NONE":zf[k.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(k){let O=k.envMapCubeUVHeight;if(O===null)return null;let Z=Math.log2(O)-2,H=1/O;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:H,maxMip:Z}})(t),u=(function(k){return[k.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",k.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)})(t),f=(function(k){let O=[];for(let Z in k){let H=k[Z];H!==!1&&O.push("#define "+Z+" "+H)}return O.join(`
`)})(s),m=r.createProgram(),_,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Vs).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Vs).join(`
`),g.length>0&&(g+=`
`)):(_=[Kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),g=[Kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==bi?Rf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Af("linearToOutputTexel",t.outputColorSpace),Pf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),a=bh(a),a=Yd(a,t),a=Zd(a,t),l=bh(l),l=Yd(l,t),l=Zd(l,t),a=Jd(a),l=Jd(l),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=v+_+a,S=v+g+l,E=Xd(r,r.VERTEX_SHADER,x),M=Xd(r,r.FRAGMENT_SHADER,S);function P(k){if(n.debug.checkShaderErrors){let O=r.getProgramInfoLog(m)||"",Z=r.getShaderInfoLog(E)||"",H=r.getShaderInfoLog(M)||"",V=O.trim(),q=Z.trim(),W=H.trim(),ie=!0,de=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,E,M);else{let Ee=qd(r,E,"vertex"),_e=qd(r,M,"fragment");Ce("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+V+`
`+Ee+`
`+_e)}else V!==""?Ae("WebGLProgram: Program Info Log:",V):q!==""&&W!==""||(de=!1);de&&(k.diagnostics={runnable:ie,programLog:V,vertexShader:{log:q,prefix:_},fragmentShader:{log:W,prefix:g}})}r.deleteShader(E),r.deleteShader(M),F=new kr(r,m),D=(function(O,Z){let H={},V=O.getProgramParameter(Z,O.ACTIVE_ATTRIBUTES);for(let q=0;q<V;q++){let W=O.getActiveAttrib(Z,q),ie=W.name,de=1;W.type===O.FLOAT_MAT2&&(de=2),W.type===O.FLOAT_MAT3&&(de=3),W.type===O.FLOAT_MAT4&&(de=4),H[ie]={type:W.type,location:O.getAttribLocation(Z,ie),locationSize:de}}return H})(r,m)}let F,D;r.attachShader(m,E),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return F===void 0&&P(this),F},this.getAttributes=function(){return D===void 0&&P(this),D};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(m,37297)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ef++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=M,this}var Vf=0,Th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new wh(e),t.set(e,i)),i}},wh=class{constructor(e){this.id=Vf++,this.code=e,this.usedTimes=0}};function kf(n,e,t,i,r,s){let a=new ds,l=new Th,c=new Set,o=[],h=new Map,p=i.logarithmicDepthBuffer,d=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,g,v,x,S){let E=v.fog,M=x.geometry,P=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?v.environment:null,F=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,D=e.get(m.envMap||P,F),U=D&&D.mapping===Os?D.image.height:null,k=u[m.type];m.precision!==null&&(d=i.getMaxPrecision(m.precision),d!==m.precision&&Ae("WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));let O=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,Z=O!==void 0?O.length:0,H,V,q,W,ie=0;if(M.morphAttributes.position!==void 0&&(ie=1),M.morphAttributes.normal!==void 0&&(ie=2),M.morphAttributes.color!==void 0&&(ie=3),k){let fi=Vi[k];H=fi.vertexShader,V=fi.fragmentShader}else{H=m.vertexShader,V=m.fragmentShader;let fi=l.getVertexShaderStage(m),Pn=l.getFragmentShaderStage(m);l.update(m,fi,Pn),q=fi.id,W=Pn.id}let de=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),_e=x.isInstancedMesh===!0,xe=x.isBatchedMesh===!0,te=!!m.map,ce=!!m.matcap,oe=!!D,me=!!m.aoMap,Fe=!!m.lightMap,$=!!m.bumpMap&&m.wireframe===!1,R=!!m.normalMap,b=!!m.displacementMap,C=!!m.emissiveMap,N=!!m.metalnessMap,y=!!m.roughnessMap,L=m.anisotropy>0,I=m.clearcoat>0,A=m.dispersion>0,G=m.iridescence>0,X=m.sheen>0,Y=m.transmission>0,re=L&&!!m.anisotropyMap,ye=I&&!!m.clearcoatMap,Me=I&&!!m.clearcoatNormalMap,he=I&&!!m.clearcoatRoughnessMap,Pe=G&&!!m.iridescenceMap,ee=G&&!!m.iridescenceThicknessMap,se=X&&!!m.sheenColorMap,ne=X&&!!m.sheenRoughnessMap,pe=!!m.specularMap,Qe=!!m.specularColorMap,qe=!!m.specularIntensityMap,ct=Y&&!!m.transmissionMap,Ft=Y&&!!m.thicknessMap,be=!!m.gradientMap,Ze=!!m.alphaMap,Ve=m.alphaTest>0,At=!!m.alphaHash,et=!!m.extensions,_t=bi;m.toneMapped&&(de!==null&&de.isXRRenderTarget!==!0||(_t=n.toneMapping));let lt={shaderID:k,shaderType:m.type,shaderName:m.name,vertexShader:H,fragmentShader:V,defines:m.defines,customVertexShaderID:q,customFragmentShaderID:W,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,batching:xe,batchingColor:xe&&x._colorsTexture!==null,instancing:_e,instancingColor:_e&&x.instanceColor!==null,instancingMorph:_e&&x.morphTexture!==null,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:te,matcap:ce,envMap:oe,envMapMode:oe&&D.mapping,envMapCubeUVHeight:U,aoMap:me,lightMap:Fe,bumpMap:$,normalMap:R,displacementMap:b,emissiveMap:C,normalMapObjectSpace:R&&m.normalMapType===vd,normalMapTangentSpace:R&&m.normalMapType===th,packedNormalMap:R&&m.normalMapType===th&&(si=m.normalMap.format,si===jn||si===Oo||si===Bo),metalnessMap:N,roughnessMap:y,anisotropy:L,anisotropyMap:re,clearcoat:I,clearcoatMap:ye,clearcoatNormalMap:Me,clearcoatRoughnessMap:he,dispersion:A,iridescence:G,iridescenceMap:Pe,iridescenceThicknessMap:ee,sheen:X,sheenColorMap:se,sheenRoughnessMap:ne,specularMap:pe,specularColorMap:Qe,specularIntensityMap:qe,transmission:Y,transmissionMap:ct,thicknessMap:Ft,gradientMap:be,opaque:m.transparent===!1&&m.blending===Ns&&m.alphaToCoverage===!1,alphaMap:Ze,alphaTest:Ve,alphaHash:At,combine:m.combine,mapUv:te&&f(m.map.channel),aoMapUv:me&&f(m.aoMap.channel),lightMapUv:Fe&&f(m.lightMap.channel),bumpMapUv:$&&f(m.bumpMap.channel),normalMapUv:R&&f(m.normalMap.channel),displacementMapUv:b&&f(m.displacementMap.channel),emissiveMapUv:C&&f(m.emissiveMap.channel),metalnessMapUv:N&&f(m.metalnessMap.channel),roughnessMapUv:y&&f(m.roughnessMap.channel),anisotropyMapUv:re&&f(m.anisotropyMap.channel),clearcoatMapUv:ye&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:Me&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&f(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:se&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:ne&&f(m.sheenRoughnessMap.channel),specularMapUv:pe&&f(m.specularMap.channel),specularColorMapUv:Qe&&f(m.specularColorMap.channel),specularIntensityMapUv:qe&&f(m.specularIntensityMap.channel),transmissionMapUv:ct&&f(m.transmissionMap.channel),thicknessMapUv:Ft&&f(m.thicknessMap.channel),alphaMapUv:Ze&&f(m.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(R||L),vertexNormals:!!M.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!M.attributes.uv&&(te||Ze),fog:!!E,useFog:m.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||M.attributes.normal===void 0&&R===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ee,skinning:x.isSkinnedMesh===!0,hasPositionAttribute:M.attributes.position!==void 0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ie,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:S.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&g.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:te&&m.map.isVideoTexture===!0&&He.getTransfer(m.map.colorSpace)===Ye,decodeVideoTextureEmissive:C&&m.emissiveMap.isVideoTexture===!0&&He.getTransfer(m.emissiveMap.colorSpace)===Ye,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===ht,flipSided:m.side===Xt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:et&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&m.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};var si;return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)_.push(g),_.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)})(_,m),(function(g,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),g.push(a.mask)})(_,m),_.push(n.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=u[m.type],g;if(_){let v=Vi[_];g=Ld.clone(v.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,_){let g=h.get(_);return g!==void 0?++g.usedTimes:(g=new Gf(n,_,m,r),o.push(g),h.set(_,g)),g},releaseProgram:function(m){if(--m.usedTimes===0){let _=o.indexOf(m);o[_]=o[o.length-1],o.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:o,dispose:function(){l.dispose()}}}function Hf(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function Wf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $d(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qd(){let n=[],e=0,t=[],i=[],r=[];function s(l){let c=0;return l.isInstancedMesh&&(c+=2),l.isSkinnedMesh&&(c+=1),c}function a(l,c,o,h,p,d){let u=n[e];return u===void 0?(u={id:l.id,object:l,geometry:c,material:o,materialVariant:s(l),groupOrder:h,renderOrder:l.renderOrder,z:p,group:d},n[e]=u):(u.id=l.id,u.object=l,u.geometry=c,u.material=o,u.materialVariant=s(l),u.groupOrder=h,u.renderOrder=l.renderOrder,u.z=p,u.group=d),e++,u}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(l,c,o,h,p,d){let u=a(l,c,o,h,p,d);o.transmission>0?i.push(u):o.transparent===!0?r.push(u):t.push(u)},unshift:function(l,c,o,h,p,d){let u=a(l,c,o,h,p,d);o.transmission>0?i.unshift(u):o.transparent===!0?r.unshift(u):t.unshift(u)},finish:function(){for(let l=e,c=n.length;l<c;l++){let o=n[l];if(o.id===null)break;o.id=null,o.object=null,o.geometry=null,o.material=null,o.group=null}},sort:function(l,c,o){t.length>1&&t.sort(l||Wf),i.length>1&&i.sort(c||$d),r.length>1&&r.sort(c||$d),o&&(t.reverse(),i.reverse(),r.reverse())}}}function Xf(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new Qd,n.set(e,[r])):t>=i.length?(r=new Qd,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function jf(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Te};break;case"SpotLight":t={position:new w,direction:new w,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new w,halfWidth:new w,halfHeight:new w}}return n[e.id]=t,t}}}var qf=0;function Yf(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Zf(n){let e=new jf,t=(function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let o;switch(c.type){case"DirectionalLight":case"SpotLight":o={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":o={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=o,o}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new w);let r=new w,s=new Oe,a=new Oe;return{setup:function(l){let c=0,o=0,h=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let p=0,d=0,u=0,f=0,m=0,_=0,g=0,v=0,x=0,S=0,E=0;l.sort(Yf);for(let P=0,F=l.length;P<F;P++){let D=l[P],U=D.color,k=D.intensity,O=D.distance,Z=null;if(D.shadow&&D.shadow.map&&(Z=D.shadow.map.texture.format===jn?D.shadow.map.texture:D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)c+=U.r*k,o+=U.g*k,h+=U.b*k;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],k);E++}else if(D.isDirectionalLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let V=D.shadow,q=t.get(D);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=D.shadow.matrix,_++}i.directional[p]=H,p++}else if(D.isSpotLight){let H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(U).multiplyScalar(k),H.distance=O,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[u]=H;let V=D.shadow;if(D.map&&(i.spotLightMap[x]=D.map,x++,V.updateMatrices(D),D.castShadow&&S++),i.spotLightMatrix[u]=V.matrix,D.castShadow){let q=t.get(D);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,i.spotShadow[u]=q,i.spotShadowMap[u]=Z,v++}u++}else if(D.isRectAreaLight){let H=e.get(D);H.color.copy(U).multiplyScalar(k),H.halfWidth.set(.5*D.width,0,0),H.halfHeight.set(0,.5*D.height,0),i.rectArea[f]=H,f++}else if(D.isPointLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let V=D.shadow,q=t.get(D);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,i.pointShadow[d]=q,i.pointShadowMap[d]=Z,i.pointShadowMatrix[d]=D.shadow.matrix,g++}i.point[d]=H,d++}else if(D.isHemisphereLight){let H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(k),H.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[m]=H,m++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=o,i.ambient[2]=h;let M=i.hash;M.directionalLength===p&&M.pointLength===d&&M.spotLength===u&&M.rectAreaLength===f&&M.hemiLength===m&&M.numDirectionalShadows===_&&M.numPointShadows===g&&M.numSpotShadows===v&&M.numSpotMaps===x&&M.numLightProbes===E||(i.directional.length=p,i.spot.length=u,i.rectArea.length=f,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=v+x-S,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=E,M.directionalLength=p,M.pointLength=d,M.spotLength=u,M.rectAreaLength=f,M.hemiLength=m,M.numDirectionalShadows=_,M.numPointShadows=g,M.numSpotShadows=v,M.numSpotMaps=x,M.numLightProbes=E,i.version=qf++)},setupView:function(l,c){let o=0,h=0,p=0,d=0,u=0,f=c.matrixWorldInverse;for(let m=0,_=l.length;m<_;m++){let g=l[m];if(g.isDirectionalLight){let v=i.directional[o];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),o++}else if(g.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),p++}else if(g.isRectAreaLight){let v=i.rectArea[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let v=i.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let v=i.hemi[u];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(f),u++}}},state:i}}function ep(n){let e=new Zf(n),t=[],i=[],r=[],s={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){s.camera=a,t.length=0,i.length=0,r.length=0},state:s,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){i.push(a)},pushLightProbeGrid:function(a){r.push(a)}}}function Jf(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),s;return r===void 0?(s=new ep(n),e.set(t,[s])):i>=r.length?(s=new ep(n),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}var Kf=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],$f=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],tp=new Oe,ks=new w,_h=new w;function Qf(n,e,t){let i=new nn,r=new Q,s=new Q,a=new $e,l=new lo,c=new co,o={},h=t.maxTextureSize,p={[Nr]:Xt,[Xt]:Nr,[ht]:ht},d=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let f=new Je;f.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new tt(f,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kn;let g=this.type;function v(M,P){let F=e.update(m);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,u.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Bt(r.x,r.y,{format:jn,type:pi})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(P,null,F,d,m,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(P,null,F,u,m,null)}function x(M,P,F,D){let U=null,k=F.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(k!==void 0)U=k;else if(U=F.isPointLight===!0?c:l,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=U.uuid,Z=P.uuid,H=o[O];H===void 0&&(H={},o[O]=H);let V=H[Z];V===void 0&&(V=U.clone(),H[Z]=V,P.addEventListener("dispose",E)),U=V}return U.visible=P.visible,U.wireframe=P.wireframe,U.side=D===Ur?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:p[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,F.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(n.properties.get(U).light=F),U}function S(M,P,F,D,U){if(M.visible===!1)return;if(M.layers.test(P.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&U===Ur)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld);let O=e.update(M),Z=M.material;if(Array.isArray(Z)){let H=O.groups;for(let V=0,q=H.length;V<q;V++){let W=H[V],ie=Z[W.materialIndex];if(ie&&ie.visible){let de=x(M,ie,D,U);M.onBeforeShadow(n,M,P,F,O,de,W),n.renderBufferDirect(F,null,O,de,M,W),M.onAfterShadow(n,M,P,F,O,de,W)}}}else if(Z.visible){let H=x(M,Z,D,U);M.onBeforeShadow(n,M,P,F,O,H,null),n.renderBufferDirect(F,null,O,H,M,null),M.onAfterShadow(n,M,P,F,O,H,null)}}let k=M.children;for(let O=0,Z=k.length;O<Z;O++)S(k[O],P,F,D,U)}function E(M){M.target.removeEventListener("dispose",E);for(let P in o){let F=o[P],D=M.target.uuid;D in F&&(F[D].dispose(),delete F[D])}}this.render=function(M,P,F){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||M.length===0)return;this.type===Wu&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=kn);let D=n.getRenderTarget(),U=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Bi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Z=g!==this.type;Z&&P.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(V=>V.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,V=M.length;H<V;H++){let q=M[H],W=q.shadow;if(W===void 0){Ae("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let ie=W.getFrameExtents();r.multiply(ie),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ie.x),r.x=s.x*ie.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ie.y),r.y=s.y*ie.y,W.mapSize.y=s.y));let de=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=de,W.map===null||Z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ur){if(q.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Bt(r.x,r.y,{format:jn,type:pi,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Si(r.x,r.y,di),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=An,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=li,W.map.depthTexture.magFilter=li}else q.isPointLight?(W.map=new Xo(r.x),W.map.depthTexture=new Xa(r.x,on)):(W.map=new Bt(r.x,r.y),W.map.depthTexture=new Si(r.x,r.y,on)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=An,this.type===kn?(W.map.depthTexture.compareFunction=de?Go:zo,W.map.depthTexture.minFilter=Dt,W.map.depthTexture.magFilter=Dt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=li,W.map.depthTexture.magFilter=li);W.camera.updateProjectionMatrix()}let Ee=W.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<Ee;_e++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,_e),n.clear();else{_e===0&&(n.setRenderTarget(W.map),n.clear());let xe=W.getViewport(_e);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),O.viewport(a)}if(q.isPointLight){let xe=W.camera,te=W.matrix,ce=q.distance||xe.far;ce!==xe.far&&(xe.far=ce,xe.updateProjectionMatrix()),ks.setFromMatrixPosition(q.matrixWorld),xe.position.copy(ks),_h.copy(xe.position),_h.add(Kf[_e]),xe.up.copy($f[_e]),xe.lookAt(_h),xe.updateMatrixWorld(),te.makeTranslation(-ks.x,-ks.y,-ks.z),tp.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),W._frustum.setFromProjectionMatrix(tp,xe.coordinateSystem,xe.reversedDepth)}else W.updateMatrices(q);i=W.getFrustum(),S(P,F,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Ur&&v(W,F),W.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(D,U,k)}}function eg(n,e){let t=new function(){let y=!1,L=new $e,I=null,A=new $e(0,0,0,0);return{setMask:function(G){I===G||y||(n.colorMask(G,G,G,G),I=G)},setLocked:function(G){y=G},setClear:function(G,X,Y,re,ye){ye===!0&&(G*=re,X*=re,Y*=re),L.set(G,X,Y,re),A.equals(L)===!1&&(n.clearColor(G,X,Y,re),A.copy(L))},reset:function(){y=!1,I=null,A.set(-1,0,0,0)}}},i=new function(){let y=!1,L=!1,I=null,A=null,G=null;return{setReversed:function(X){if(L!==X){let Y=e.get("EXT_clip_control");X?Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.ZERO_TO_ONE_EXT):Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.NEGATIVE_ONE_TO_ONE_EXT),L=X;let re=G;G=null,this.setClear(re)}},getReversed:function(){return L},setTest:function(X){X?oe(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(X){I===X||y||(n.depthMask(X),I=X)},setFunc:function(X){if(L&&(X=Ad[X]),A!==X){switch(X){case sc:n.depthFunc(n.NEVER);break;case ac:n.depthFunc(n.ALWAYS);break;case oc:n.depthFunc(n.LESS);break;case To:n.depthFunc(n.LEQUAL);break;case lc:n.depthFunc(n.EQUAL);break;case cc:n.depthFunc(n.GEQUAL);break;case hc:n.depthFunc(n.GREATER);break;case uc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}A=X}},setLocked:function(X){y=X},setClear:function(X){G!==X&&(G=X,L&&(X=1-X),n.clearDepth(X))},reset:function(){y=!1,I=null,A=null,G=null,L=!1}}},r=new function(){let y=!1,L=null,I=null,A=null,G=null,X=null,Y=null,re=null,ye=null;return{setTest:function(Me){y||(Me?oe(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(Me){L===Me||y||(n.stencilMask(Me),L=Me)},setFunc:function(Me,he,Pe){I===Me&&A===he&&G===Pe||(n.stencilFunc(Me,he,Pe),I=Me,A=he,G=Pe)},setOp:function(Me,he,Pe){X===Me&&Y===he&&re===Pe||(n.stencilOp(Me,he,Pe),X=Me,Y=he,re=Pe)},setLocked:function(Me){y=Me},setClear:function(Me){ye!==Me&&(n.clearStencil(Me),ye=Me)},reset:function(){y=!1,L=null,I=null,A=null,G=null,X=null,Y=null,re=null,ye=null}}},s=new WeakMap,a=new WeakMap,l={},c={},o={},h=new WeakMap,p=[],d=null,u=!1,f=null,m=null,_=null,g=null,v=null,x=null,S=null,E=new Te(0,0,0),M=0,P=!1,F=null,D=null,U=null,k=null,O=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,V=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=V>=2);let W=null,ie={},de=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),_e=new $e().fromArray(de),xe=new $e().fromArray(Ee);function te(y,L,I,A){let G=new Uint8Array(4),X=n.createTexture();n.bindTexture(y,X),n.texParameteri(y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Y=0;Y<I;Y++)y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY?n.texImage3D(L,0,n.RGBA,1,1,A,0,n.RGBA,n.UNSIGNED_BYTE,G):n.texImage2D(L+Y,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,G);return X}let ce={};function oe(y){l[y]!==!0&&(n.enable(y),l[y]=!0)}function me(y){l[y]!==!1&&(n.disable(y),l[y]=!1)}ce[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),r.setClear(0),oe(n.DEPTH_TEST),i.setFunc(To),b(!1),C(ic),oe(n.CULL_FACE),R(Bi);let Fe={[Or]:n.FUNC_ADD,[ju]:n.FUNC_SUBTRACT,[qu]:n.FUNC_REVERSE_SUBTRACT};Fe[Yu]=n.MIN,Fe[Zu]=n.MAX;let $={[Ju]:n.ZERO,[Ku]:n.ONE,[$u]:n.SRC_COLOR,[ed]:n.SRC_ALPHA,[ad]:n.SRC_ALPHA_SATURATE,[rd]:n.DST_COLOR,[id]:n.DST_ALPHA,[Qu]:n.ONE_MINUS_SRC_COLOR,[td]:n.ONE_MINUS_SRC_ALPHA,[sd]:n.ONE_MINUS_DST_COLOR,[nd]:n.ONE_MINUS_DST_ALPHA,[od]:n.CONSTANT_COLOR,[ld]:n.ONE_MINUS_CONSTANT_COLOR,[cd]:n.CONSTANT_ALPHA,[hd]:n.ONE_MINUS_CONSTANT_ALPHA};function R(y,L,I,A,G,X,Y,re,ye,Me){if(y!==Bi){if(u===!1&&(oe(n.BLEND),u=!0),y===Xu)G=G||L,X=X||I,Y=Y||A,L===m&&G===v||(n.blendEquationSeparate(Fe[L],Fe[G]),m=L,v=G),I===_&&A===g&&X===x&&Y===S||(n.blendFuncSeparate($[I],$[A],$[X],$[Y]),_=I,g=A,x=X,S=Y),re.equals(E)!==!1&&ye===M||(n.blendColor(re.r,re.g,re.b,ye),E.copy(re),M=ye),f=y,P=!1;else if(y!==f||Me!==P){if(m===Or&&v===Or||(n.blendEquation(n.FUNC_ADD),m=Or,v=Or),Me)switch(y){case Ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fr:n.blendFunc(n.ONE,n.ONE);break;case nc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ce("WebGLState: Invalid blending: ",y)}else switch(y){case Ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nc:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rc:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",y)}_=null,g=null,x=null,S=null,E.set(0,0,0),M=0,f=y,P=Me}}else u===!0&&(me(n.BLEND),u=!1)}function b(y){F!==y&&(y?n.frontFace(n.CW):n.frontFace(n.CCW),F=y)}function C(y){y!==ku?(oe(n.CULL_FACE),y!==D&&(y===ic?n.cullFace(n.BACK):y===Hu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),D=y}function N(y,L,I){y?(oe(n.POLYGON_OFFSET_FILL),k===L&&O===I||(k=L,O=I,i.getReversed()&&(L=-L),n.polygonOffset(L,I))):me(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:r},enable:oe,disable:me,bindFramebuffer:function(y,L){return o[y]!==L&&(n.bindFramebuffer(y,L),o[y]=L,y===n.DRAW_FRAMEBUFFER&&(o[n.FRAMEBUFFER]=L),y===n.FRAMEBUFFER&&(o[n.DRAW_FRAMEBUFFER]=L),!0)},drawBuffers:function(y,L){let I=p,A=!1;if(y){I=h.get(L),I===void 0&&(I=[],h.set(L,I));let G=y.textures;if(I.length!==G.length||I[0]!==n.COLOR_ATTACHMENT0){for(let X=0,Y=G.length;X<Y;X++)I[X]=n.COLOR_ATTACHMENT0+X;I.length=G.length,A=!0}}else I[0]!==n.BACK&&(I[0]=n.BACK,A=!0);A&&n.drawBuffers(I)},useProgram:function(y){return d!==y&&(n.useProgram(y),d=y,!0)},setBlending:R,setMaterial:function(y,L){y.side===ht?me(n.CULL_FACE):oe(n.CULL_FACE);let I=y.side===Xt;L&&(I=!I),b(I),y.blending===Ns&&y.transparent===!1?R(Bi):R(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),i.setFunc(y.depthFunc),i.setTest(y.depthTest),i.setMask(y.depthWrite),t.setMask(y.colorWrite);let A=y.stencilWrite;r.setTest(A),A&&(r.setMask(y.stencilWriteMask),r.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),r.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),N(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:b,setCullFace:C,setLineWidth:function(y){y!==U&&(H&&n.lineWidth(y),U=y)},setPolygonOffset:N,setScissorTest:function(y){y?oe(n.SCISSOR_TEST):me(n.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=n.TEXTURE0+Z-1),W!==y&&(n.activeTexture(y),W=y)},bindTexture:function(y,L,I){I===void 0&&(I=W===null?n.TEXTURE0+Z-1:W);let A=ie[I];A===void 0&&(A={type:void 0,texture:void 0},ie[I]=A),A.type===y&&A.texture===L||(W!==I&&(n.activeTexture(I),W=I),n.bindTexture(y,L||ce[y]),A.type=y,A.texture=L)},unbindTexture:function(){let y=ie[W];y!==void 0&&y.type!==void 0&&(n.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(y){Ce("WebGLState:",y)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(y){Ce("WebGLState:",y)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(y){Ce("WebGLState:",y)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(y){Ce("WebGLState:",y)}},pixelStorei:function(y,L){c[y]!==L&&(n.pixelStorei(y,L),c[y]=L)},getParameter:function(y){return c[y]!==void 0?c[y]:n.getParameter(y)},updateUBOMapping:function(y,L){let I=a.get(L);I===void 0&&(I=new WeakMap,a.set(L,I));let A=I.get(y);A===void 0&&(A=n.getUniformBlockIndex(L,y.name),I.set(y,A))},uniformBlockBinding:function(y,L){let I=a.get(L).get(y);s.get(L)!==I&&(n.uniformBlockBinding(L,I,y.__bindingPointIndex),s.set(L,I))},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(y){Ce("WebGLState:",y)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(y){Ce("WebGLState:",y)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(y){Ce("WebGLState:",y)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(y){Ce("WebGLState:",y)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(y){Ce("WebGLState:",y)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(y){Ce("WebGLState:",y)}},scissor:function(y){_e.equals(y)===!1&&(n.scissor(y.x,y.y,y.z,y.w),_e.copy(y))},viewport:function(y){xe.equals(y)===!1&&(n.viewport(y.x,y.y,y.z,y.w),xe.copy(y))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),l={},c={},W=null,ie={},o={},h=new WeakMap,p=[],d=null,u=!1,f=null,m=null,_=null,g=null,v=null,x=null,S=null,E=new Te(0,0,0),M=0,P=!1,F=null,D=null,U=null,k=null,O=null,_e.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),r.reset()}}}function tg(n,e,t,i,r,s,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),o=new Q,h=new WeakMap,p=new Set,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return f?new OffscreenCanvas(R,b):hs("canvas")}function _(R,b,C){let N=1,y=$(R);if((y.width>C||y.height>C)&&(N=C/Math.max(y.width,y.height)),N<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let L=Math.floor(N*y.width),I=Math.floor(N*y.height);d===void 0&&(d=m(L,I));let A=b?m(L,I):d;return A.width=L,A.height=I,A.getContext("2d").drawImage(R,0,0,L,I),Ae("WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+L+"x"+I+")."),A}return"data"in R&&Ae("WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),R}return R}function g(R){return R.generateMipmaps}function v(R){n.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,b,C,N,y,L=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let I;N&&(I=e.get("EXT_texture_norm16"),I||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let A=b;if(b===n.RED&&(C===n.FLOAT&&(A=n.R32F),C===n.HALF_FLOAT&&(A=n.R16F),C===n.UNSIGNED_BYTE&&(A=n.R8),C===n.UNSIGNED_SHORT&&I&&(A=I.R16_EXT),C===n.SHORT&&I&&(A=I.R16_SNORM_EXT)),b===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.R8UI),C===n.UNSIGNED_SHORT&&(A=n.R16UI),C===n.UNSIGNED_INT&&(A=n.R32UI),C===n.BYTE&&(A=n.R8I),C===n.SHORT&&(A=n.R16I),C===n.INT&&(A=n.R32I)),b===n.RG&&(C===n.FLOAT&&(A=n.RG32F),C===n.HALF_FLOAT&&(A=n.RG16F),C===n.UNSIGNED_BYTE&&(A=n.RG8),C===n.UNSIGNED_SHORT&&I&&(A=I.RG16_EXT),C===n.SHORT&&I&&(A=I.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.RG8UI),C===n.UNSIGNED_SHORT&&(A=n.RG16UI),C===n.UNSIGNED_INT&&(A=n.RG32UI),C===n.BYTE&&(A=n.RG8I),C===n.SHORT&&(A=n.RG16I),C===n.INT&&(A=n.RG32I)),b===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.RGB8UI),C===n.UNSIGNED_SHORT&&(A=n.RGB16UI),C===n.UNSIGNED_INT&&(A=n.RGB32UI),C===n.BYTE&&(A=n.RGB8I),C===n.SHORT&&(A=n.RGB16I),C===n.INT&&(A=n.RGB32I)),b===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(A=n.RGBA16UI),C===n.UNSIGNED_INT&&(A=n.RGBA32UI),C===n.BYTE&&(A=n.RGBA8I),C===n.SHORT&&(A=n.RGBA16I),C===n.INT&&(A=n.RGBA32I)),b===n.RGB&&(C===n.UNSIGNED_SHORT&&I&&(A=I.RGB16_EXT),C===n.SHORT&&I&&(A=I.RGB16_SNORM_EXT),C===n.UNSIGNED_INT_5_9_9_9_REV&&(A=n.RGB9_E5),C===n.UNSIGNED_INT_10F_11F_11F_REV&&(A=n.R11F_G11F_B10F)),b===n.RGBA){let G=L?cs:He.getTransfer(y);C===n.FLOAT&&(A=n.RGBA32F),C===n.HALF_FLOAT&&(A=n.RGBA16F),C===n.UNSIGNED_BYTE&&(A=G===Ye?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT&&I&&(A=I.RGBA16_EXT),C===n.SHORT&&I&&(A=I.RGBA16_SNORM_EXT),C===n.UNSIGNED_SHORT_4_4_4_4&&(A=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(A=n.RGB5_A1)}return A!==n.R16F&&A!==n.R32F&&A!==n.RG16F&&A!==n.RG32F&&A!==n.RGBA16F&&A!==n.RGBA32F||e.get("EXT_color_buffer_float"),A}function E(R,b){let C;return R?b===null||b===on||b===Gr?C=n.DEPTH24_STENCIL8:b===di?C=n.DEPTH32F_STENCIL8:b===zr&&(C=n.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===on||b===Gr?C=n.DEPTH_COMPONENT24:b===di?C=n.DEPTH_COMPONENT32F:b===zr&&(C=n.DEPTH_COMPONENT16),C}function M(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==li&&R.minFilter!==Dt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function P(R){let b=R.target;b.removeEventListener("dispose",P),(function(C){let N=i.get(C);if(N.__webglInit===void 0)return;let y=C.source,L=u.get(y);if(L){let I=L[N.__cacheKey];I.usedTimes--,I.usedTimes===0&&D(C),Object.keys(L).length===0&&u.delete(y)}i.remove(C)})(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&p.delete(b)}function F(R){let b=R.target;b.removeEventListener("dispose",F),(function(C){let N=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(N.__webglFramebuffer[L]))for(let I=0;I<N.__webglFramebuffer[L].length;I++)n.deleteFramebuffer(N.__webglFramebuffer[L][I]);else n.deleteFramebuffer(N.__webglFramebuffer[L]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[L])}else{if(Array.isArray(N.__webglFramebuffer))for(let L=0;L<N.__webglFramebuffer.length;L++)n.deleteFramebuffer(N.__webglFramebuffer[L]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let L=0;L<N.__webglColorRenderbuffer.length;L++)N.__webglColorRenderbuffer[L]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[L]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let y=C.textures;for(let L=0,I=y.length;L<I;L++){let A=i.get(y[L]);A.__webglTexture&&(n.deleteTexture(A.__webglTexture),a.memory.textures--),i.remove(y[L])}i.remove(C)})(b)}function D(R){let b=i.get(R);n.deleteTexture(b.__webglTexture);let C=R.source;delete u.get(C)[b.__cacheKey],a.memory.textures--}let U=0;function k(R,b){let C=i.get(R);if(R.isVideoTexture&&(function(N){let y=a.render.frame;h.get(N)!==y&&(h.set(N,y),N.update())})(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&C.__version!==R.version){let N=R.image;if(N===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void ie(C,R,b);Ae("WebGLRenderer: Texture marked for update but image is incomplete")}}else R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+b)}let O={[Ba]:n.REPEAT,[Mn]:n.CLAMP_TO_EDGE,[za]:n.MIRRORED_REPEAT},Z={[li]:n.NEAREST,[md]:n.NEAREST_MIPMAP_NEAREST,[Bs]:n.NEAREST_MIPMAP_LINEAR,[Dt]:n.LINEAR,[Ao]:n.LINEAR_MIPMAP_NEAREST,[Wn]:n.LINEAR_MIPMAP_LINEAR},H={[_d]:n.NEVER,[bd]:n.ALWAYS,[xd]:n.LESS,[zo]:n.LEQUAL,[yd]:n.EQUAL,[Go]:n.GEQUAL,[Md]:n.GREATER,[Sd]:n.NOTEQUAL};function V(R,b){if(b.type!==di||e.has("OES_texture_float_linear")!==!1||b.magFilter!==Dt&&b.magFilter!==Ao&&b.magFilter!==Bs&&b.magFilter!==Wn&&b.minFilter!==Dt&&b.minFilter!==Ao&&b.minFilter!==Bs&&b.minFilter!==Wn||Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,O[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,O[b.wrapT]),R!==n.TEXTURE_3D&&R!==n.TEXTURE_2D_ARRAY||n.texParameteri(R,n.TEXTURE_WRAP_R,O[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Z[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Z[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,H[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===li||b.minFilter!==Bs&&b.minFilter!==Wn||b.type===di&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function q(R,b){let C=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P));let N=b.source,y=u.get(N);y===void 0&&(y={},u.set(N,y));let L=(function(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()})(b);if(L!==R.__cacheKey){y[L]===void 0&&(y[L]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,C=!0),y[L].usedTimes++;let I=y[R.__cacheKey];I!==void 0&&(y[R.__cacheKey].usedTimes--,I.usedTimes===0&&D(b)),R.__cacheKey=L,R.__webglTexture=y[L].texture}return C}function W(R,b,C){return Math.floor(Math.floor(R/C)/b)}function ie(R,b,C){let N=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(N=n.TEXTURE_3D);let y=q(R,b),L=b.source;t.bindTexture(N,R.__webglTexture,n.TEXTURE0+C);let I=i.get(L);if(L.version!==I.__version||y===!0){if(t.activeTexture(n.TEXTURE0+C),!(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)){let se=He.getPrimaries(He.workingColorSpace),ne=b.colorSpace===qn?null:He.getPrimaries(b.colorSpace),pe=b.colorSpace===qn||se===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let A=_(b.image,!1,r.maxTextureSize);A=Fe(b,A);let G=s.convert(b.format,b.colorSpace),X=s.convert(b.type),Y,re=S(b.internalFormat,G,X,b.normalized,b.colorSpace,b.isVideoTexture);V(N,b);let ye=b.mipmaps,Me=b.isVideoTexture!==!0,he=I.__version===void 0||y===!0,Pe=L.dataReady,ee=M(b,A);if(b.isDepthTexture)re=E(b.format===Xn,b.type),he&&(Me?t.texStorage2D(n.TEXTURE_2D,1,re,A.width,A.height):t.texImage2D(n.TEXTURE_2D,0,re,A.width,A.height,0,G,X,null));else if(b.isDataTexture)if(ye.length>0){Me&&he&&t.texStorage2D(n.TEXTURE_2D,ee,re,ye[0].width,ye[0].height);for(let se=0,ne=ye.length;se<ne;se++)Y=ye[se],Me?Pe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Y.width,Y.height,G,X,Y.data):t.texImage2D(n.TEXTURE_2D,se,re,Y.width,Y.height,0,G,X,Y.data);b.generateMipmaps=!1}else Me?(he&&t.texStorage2D(n.TEXTURE_2D,ee,re,A.width,A.height),Pe&&(function(se,ne,pe,Qe){let qe=se.updateRanges;if(qe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,pe,Qe,ne.data);else{qe.sort((Ve,At)=>Ve.start-At.start);let ct=0;for(let Ve=1;Ve<qe.length;Ve++){let At=qe[ct],et=qe[Ve],_t=At.start+At.count,lt=W(et.start,ne.width,4),si=W(At.start,ne.width,4);et.start<=_t+1&&lt===si&&W(et.start+et.count-1,ne.width,4)===lt?At.count=Math.max(At.count,et.start+et.count-At.start):(++ct,qe[ct]=et)}qe.length=ct+1;let Ft=t.getParameter(n.UNPACK_ROW_LENGTH),be=t.getParameter(n.UNPACK_SKIP_PIXELS),Ze=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,ne.width);for(let Ve=0,At=qe.length;Ve<At;Ve++){let et=qe[Ve],_t=Math.floor(et.start/4),lt=Math.ceil(et.count/4),si=_t%ne.width,fi=Math.floor(_t/ne.width),Pn=lt;t.pixelStorei(n.UNPACK_SKIP_PIXELS,si),t.pixelStorei(n.UNPACK_SKIP_ROWS,fi),t.texSubImage2D(n.TEXTURE_2D,0,si,fi,Pn,1,pe,Qe,ne.data)}se.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Ft),t.pixelStorei(n.UNPACK_SKIP_PIXELS,be),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ze)}})(b,A,G,X)):t.texImage2D(n.TEXTURE_2D,0,re,A.width,A.height,0,G,X,A.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Me&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,re,ye[0].width,ye[0].height,A.depth);for(let se=0,ne=ye.length;se<ne;se++)if(Y=ye[se],b.format!==Ti)if(G!==null)if(Me){if(Pe)if(b.layerUpdates.size>0){let pe=oh(Y.width,Y.height,b.format,b.type);for(let Qe of b.layerUpdates){let qe=Y.data.subarray(Qe*pe/Y.data.BYTES_PER_ELEMENT,(Qe+1)*pe/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Qe,Y.width,Y.height,1,G,qe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,A.depth,G,Y.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,re,Y.width,Y.height,A.depth,0,Y.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?Pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,A.depth,G,X,Y.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,re,Y.width,Y.height,A.depth,0,G,X,Y.data)}else{Me&&he&&t.texStorage2D(n.TEXTURE_2D,ee,re,ye[0].width,ye[0].height);for(let se=0,ne=ye.length;se<ne;se++)Y=ye[se],b.format!==Ti?G!==null?Me?Pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Y.width,Y.height,G,Y.data):t.compressedTexImage2D(n.TEXTURE_2D,se,re,Y.width,Y.height,0,Y.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?Pe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Y.width,Y.height,G,X,Y.data):t.texImage2D(n.TEXTURE_2D,se,re,Y.width,Y.height,0,G,X,Y.data)}else if(b.isDataArrayTexture)if(Me){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,re,A.width,A.height,A.depth),Pe)if(b.layerUpdates.size>0){let se=oh(A.width,A.height,b.format,b.type);for(let ne of b.layerUpdates){let pe=A.data.subarray(ne*se/A.data.BYTES_PER_ELEMENT,(ne+1)*se/A.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,A.width,A.height,1,G,X,pe)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,A.width,A.height,A.depth,G,X,A.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,re,A.width,A.height,A.depth,0,G,X,A.data);else if(b.isData3DTexture)Me?(he&&t.texStorage3D(n.TEXTURE_3D,ee,re,A.width,A.height,A.depth),Pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,A.width,A.height,A.depth,G,X,A.data)):t.texImage3D(n.TEXTURE_3D,0,re,A.width,A.height,A.depth,0,G,X,A.data);else if(b.isFramebufferTexture){if(he)if(Me)t.texStorage2D(n.TEXTURE_2D,ee,re,A.width,A.height);else{let se=A.width,ne=A.height;for(let pe=0;pe<ee;pe++)t.texImage2D(n.TEXTURE_2D,pe,re,se,ne,0,G,X,null),se>>=1,ne>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let se=n.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),A.parentNode!==se)return se.appendChild(A),p.add(b),se.onpaint=ne=>{let pe=ne.changedElements;for(let Qe of p)pe.includes(Qe.image)&&(Qe.needsUpdate=!0)},void se.requestPaint();if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,A);else{let pe=n.RGBA,Qe=n.RGBA,qe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,pe,Qe,qe,A)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ye.length>0){if(Me&&he){let se=$(ye[0]);t.texStorage2D(n.TEXTURE_2D,ee,re,se.width,se.height)}for(let se=0,ne=ye.length;se<ne;se++)Y=ye[se],Me?Pe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,G,X,Y):t.texImage2D(n.TEXTURE_2D,se,re,G,X,Y);b.generateMipmaps=!1}else if(Me){if(he){let se=$(A);t.texStorage2D(n.TEXTURE_2D,ee,re,se.width,se.height)}Pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,G,X,A)}else t.texImage2D(n.TEXTURE_2D,0,re,G,X,A);g(b)&&v(N),I.__version=L.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function de(R,b,C,N,y,L){let I=s.convert(C.format,C.colorSpace),A=s.convert(C.type),G=S(C.internalFormat,I,A,C.normalized,C.colorSpace),X=i.get(b),Y=i.get(C);if(Y.__renderTarget=b,!X.__hasExternalTextures){let re=Math.max(1,b.width>>L),ye=Math.max(1,b.height>>L);y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY?t.texImage3D(y,L,G,re,ye,b.depth,0,I,A,null):t.texImage2D(y,L,G,re,ye,0,I,A,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),me(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,y,Y.__webglTexture,0,oe(b)):(y===n.TEXTURE_2D||y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,y,Y.__webglTexture,L),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(R,b,C){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){let N=b.depthTexture,y=N&&N.isDepthTexture?N.type:null,L=E(b.stencilBuffer,y),I=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(b),L,b.width,b.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(b),L,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,L,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,R)}else{let N=b.textures;for(let y=0;y<N.length;y++){let L=N[y],I=s.convert(L.format,L.colorSpace),A=s.convert(L.type),G=S(L.internalFormat,I,A,L.normalized,L.colorSpace);me(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(b),G,b.width,b.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(b),G,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,G,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(R,b,C){let N=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!b.depthTexture||!b.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let y=i.get(b.depthTexture);if(y.__renderTarget=b,y.__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),N){if(y.__webglInit===void 0&&(y.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),y.__webglTexture===void 0){y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture),V(n.TEXTURE_CUBE_MAP,b.depthTexture);let X=s.convert(b.depthTexture.format),Y=s.convert(b.depthTexture.type),re;b.depthTexture.format===An?re=n.DEPTH_COMPONENT24:b.depthTexture.format===Xn&&(re=n.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,re,b.width,b.height,0,X,Y,null)}}else k(b.depthTexture,0);let L=y.__webglTexture,I=oe(b),A=N?n.TEXTURE_CUBE_MAP_POSITIVE_X+C:n.TEXTURE_2D,G=b.depthTexture.format===Xn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===An)me(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,A,L,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,G,A,L,0);else{if(b.depthTexture.format!==Xn)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");me(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,A,L,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,G,A,L,0)}}function xe(R){let b=i.get(R),C=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let N=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),N){let y=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,N.removeEventListener("dispose",y)};N.addEventListener("dispose",y),b.__depthDisposeCallback=y}b.__boundDepthTexture=N}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(C)for(let N=0;N<6;N++)_e(b.__webglFramebuffer[N],R,N);else{let N=R.texture.mipmaps;N&&N.length>0?_e(b.__webglFramebuffer[0],R,0):_e(b.__webglFramebuffer,R,0)}else if(C){b.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[N]),b.__webglDepthbuffer[N]===void 0)b.__webglDepthbuffer[N]=n.createRenderbuffer(),Ee(b.__webglDepthbuffer[N],R,!1);else{let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=b.__webglDepthbuffer[N];n.bindRenderbuffer(n.RENDERBUFFER,L),n.framebufferRenderbuffer(n.FRAMEBUFFER,y,n.RENDERBUFFER,L)}}else{let N=R.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Ee(b.__webglDepthbuffer,R,!1);else{let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,L),n.framebufferRenderbuffer(n.FRAMEBUFFER,y,n.RENDERBUFFER,L)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}let te=[],ce=[];function oe(R){return Math.min(r.maxSamples,R.samples)}function me(R){let b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Fe(R,b){let C=R.colorSpace,N=R.format,y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||C!==ls&&C!==qn&&(He.getTransfer(C)===Ye?N===Ti&&y===zt||Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",C)),b}function $(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(o.width=R.naturalWidth||R.width,o.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(o.width=R.displayWidth,o.height=R.displayHeight):(o.width=R.width,o.height=R.height),o}this.allocateTextureUnit=function(){let R=U;return R>=r.maxTextures&&Ae("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),U+=1,R},this.resetTextureUnits=function(){U=0},this.getTextureUnits=function(){return U},this.setTextureUnits=function(R){U=R},this.setTexture2D=k,this.setTexture2DArray=function(R,b){let C=i.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?ie(C,R,b):(R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+b))},this.setTexture3D=function(R,b){let C=i.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?ie(C,R,b):t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+b)},this.setTextureCube=function(R,b){let C=i.get(R);R.isCubeDepthTexture!==!0&&R.version>0&&C.__version!==R.version?(function(N,y,L){if(y.image.length!==6)return;let I=q(N,y),A=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+L);let G=i.get(A);if(A.version!==G.__version||I===!0){t.activeTexture(n.TEXTURE0+L);let X=He.getPrimaries(He.workingColorSpace),Y=y.colorSpace===qn?null:He.getPrimaries(y.colorSpace),re=y.colorSpace===qn||X===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ye=y.isCompressedTexture||y.image[0].isCompressedTexture,Me=y.image[0]&&y.image[0].isDataTexture,he=[];for(let be=0;be<6;be++)he[be]=ye||Me?Me?y.image[be].image:y.image[be]:_(y.image[be],!0,r.maxCubemapSize),he[be]=Fe(y,he[be]);let Pe=he[0],ee=s.convert(y.format,y.colorSpace),se=s.convert(y.type),ne=S(y.internalFormat,ee,se,y.normalized,y.colorSpace),pe=y.isVideoTexture!==!0,Qe=G.__version===void 0||I===!0,qe=A.dataReady,ct,Ft=M(y,Pe);if(V(n.TEXTURE_CUBE_MAP,y),ye){pe&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,ne,Pe.width,Pe.height);for(let be=0;be<6;be++){ct=he[be].mipmaps;for(let Ze=0;Ze<ct.length;Ze++){let Ve=ct[Ze];y.format!==Ti?ee!==null?pe?qe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,0,0,Ve.width,Ve.height,ee,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,ne,Ve.width,Ve.height,0,Ve.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,0,0,Ve.width,Ve.height,ee,se,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,ne,Ve.width,Ve.height,0,ee,se,Ve.data)}}}else{if(ct=y.mipmaps,pe&&Qe){ct.length>0&&Ft++;let be=$(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,ne,be.width,be.height)}for(let be=0;be<6;be++)if(Me){pe?qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,he[be].width,he[be].height,ee,se,he[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ne,he[be].width,he[be].height,0,ee,se,he[be].data);for(let Ze=0;Ze<ct.length;Ze++){let Ve=ct[Ze].image[be].image;pe?qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,0,0,Ve.width,Ve.height,ee,se,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,ne,Ve.width,Ve.height,0,ee,se,Ve.data)}}else{pe?qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ee,se,he[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ne,ee,se,he[be]);for(let Ze=0;Ze<ct.length;Ze++){let Ve=ct[Ze];pe?qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,0,0,ee,se,Ve.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,ne,ee,se,Ve.image[be])}}}g(y)&&v(n.TEXTURE_CUBE_MAP),G.__version=A.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version})(C,R,b):t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+b)},this.rebindTextures=function(R,b,C){let N=i.get(R);b!==void 0&&de(N.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&xe(R)},this.setupRenderTarget=function(R){let b=R.texture,C=i.get(R),N=i.get(b);R.addEventListener("dispose",F);let y=R.textures,L=R.isWebGLCubeRenderTarget===!0,I=y.length>1;if(I||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=b.version,a.memory.textures++),L){C.__webglFramebuffer=[];for(let A=0;A<6;A++)if(b.mipmaps&&b.mipmaps.length>0){C.__webglFramebuffer[A]=[];for(let G=0;G<b.mipmaps.length;G++)C.__webglFramebuffer[A][G]=n.createFramebuffer()}else C.__webglFramebuffer[A]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){C.__webglFramebuffer=[];for(let A=0;A<b.mipmaps.length;A++)C.__webglFramebuffer[A]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(I)for(let A=0,G=y.length;A<G;A++){let X=i.get(y[A]);X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&me(R)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let A=0;A<y.length;A++){let G=y[A];C.__webglColorRenderbuffer[A]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[A]);let X=s.convert(G.format,G.colorSpace),Y=s.convert(G.type),re=S(G.internalFormat,X,Y,G.normalized,G.colorSpace,R.isXRRenderTarget===!0),ye=oe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,re,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+A,n.RENDERBUFFER,C.__webglColorRenderbuffer[A])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(C.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(L){t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),V(n.TEXTURE_CUBE_MAP,b);for(let A=0;A<6;A++)if(b.mipmaps&&b.mipmaps.length>0)for(let G=0;G<b.mipmaps.length;G++)de(C.__webglFramebuffer[A][G],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+A,G);else de(C.__webglFramebuffer[A],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+A,0);g(b)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(I){for(let A=0,G=y.length;A<G;A++){let X=y[A],Y=i.get(X),re=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),V(re,X),de(C.__webglFramebuffer,R,X,n.COLOR_ATTACHMENT0+A,re,0),g(X)&&v(re)}t.unbindTexture()}else{let A=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(A=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(A,N.__webglTexture),V(A,b),b.mipmaps&&b.mipmaps.length>0)for(let G=0;G<b.mipmaps.length;G++)de(C.__webglFramebuffer[G],R,b,n.COLOR_ATTACHMENT0,A,G);else de(C.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,A,0);g(b)&&v(A),t.unbindTexture()}R.depthBuffer&&xe(R)},this.updateRenderTargetMipmap=function(R){let b=R.textures;for(let C=0,N=b.length;C<N;C++){let y=b[C];if(g(y)){let L=x(R),I=i.get(y).__webglTexture;t.bindTexture(L,I),v(L),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(me(R)===!1){let b=R.textures,C=R.width,N=R.height,y=n.COLOR_BUFFER_BIT,L=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,I=i.get(R),A=b.length>1;if(A)for(let X=0;X<b.length;X++)t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,I.__webglMultisampledFramebuffer);let G=R.texture.mipmaps;G&&G.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,I.__webglFramebuffer);for(let X=0;X<b.length;X++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(y|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(y|=n.STENCIL_BUFFER_BIT)),A){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,I.__webglColorRenderbuffer[X]);let Y=i.get(b[X]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Y,0)}n.blitFramebuffer(0,0,C,N,0,0,C,N,y,n.NEAREST),c===!0&&(te.length=0,ce.length=0,te.push(n.COLOR_ATTACHMENT0+X),R.depthBuffer&&R.resolveDepthBuffer===!1&&(te.push(L),ce.push(L),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),A)for(let X=0;X<b.length;X++){t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,I.__webglColorRenderbuffer[X]);let Y=i.get(b[X]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.TEXTURE_2D,Y,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,I.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}},this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ig(n,e){return{convert:function(t,i=qn){let r,s=He.getTransfer(i);if(t===zt)return n.UNSIGNED_BYTE;if(t===Ro)return n.UNSIGNED_SHORT_4_4_4_4;if(t===Po)return n.UNSIGNED_SHORT_5_5_5_1;if(t===Mc)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===Sc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===xc)return n.BYTE;if(t===yc)return n.SHORT;if(t===zr)return n.UNSIGNED_SHORT;if(t===Co)return n.INT;if(t===on)return n.UNSIGNED_INT;if(t===di)return n.FLOAT;if(t===pi)return n.HALF_FLOAT;if(t===fd)return n.ALPHA;if(t===gd)return n.RGB;if(t===Ti)return n.RGBA;if(t===An)return n.DEPTH_COMPONENT;if(t===Xn)return n.DEPTH_STENCIL;if(t===Io)return n.RED;if(t===Lo)return n.RED_INTEGER;if(t===jn)return n.RG;if(t===bc)return n.RG_INTEGER;if(t===Tc)return n.RGBA_INTEGER;if(t===Do||t===Uo||t===No||t===Fo)if(s===Ye){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===wc||t===Ec||t===Ac||t===Cc){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Rc||t===Pc||t===Ic||t===Lc||t===Dc||t===Oo||t===Uc){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Rc||t===Pc)return s===Ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Ic)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===Lc)return r.COMPRESSED_R11_EAC;if(t===Dc)return r.COMPRESSED_SIGNED_R11_EAC;if(t===Oo)return r.COMPRESSED_RG11_EAC;if(t===Uc)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===Nc||t===Fc||t===Oc||t===Bc||t===zc||t===Gc||t===Vc||t===kc||t===Hc||t===Wc||t===Xc||t===jc||t===qc||t===Yc){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Nc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Fc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Oc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Bc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===zc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Gc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Vc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===kc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Hc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Wc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Xc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===jc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===qc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Yc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Zc||t===Jc||t===Kc){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Zc)return s===Ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===$c||t===Qc||t===Bo||t===eh){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===$c)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Gr?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ms(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Et({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new $t(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends Fi{constructor(e,t){super();let i=this,r=null,s=1,a=null,l="local-floor",c=1,o=null,h=null,p=null,d=null,u=null,f=null,m=typeof XRWebGLBinding<"u",_=new Eh,g={},v=t.getContextAttributes(),x=null,S=null,E=[],M=[],P=new Q,F=null,D=new Lt;D.viewport=new $e;let U=new Lt;U.viewport=new $e;let k=[D,U],O=new So,Z=null,H=null;function V(te){let ce=M.indexOf(te.inputSource);if(ce===-1)return;let oe=E[ce];oe!==void 0&&(oe.update(te.inputSource,te.frame,o||a),oe.dispatchEvent({type:te.type,data:te.inputSource}))}function q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",W);for(let te=0;te<E.length;te++){let ce=M[te];ce!==null&&(M[te]=null,E[te].disconnect(ce))}Z=null,H=null,_.reset();for(let te in g)delete g[te];e.setRenderTarget(x),u=null,d=null,p=null,r=null,S=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}function W(te){for(let ce=0;ce<te.removed.length;ce++){let oe=te.removed[ce],me=M.indexOf(oe);me>=0&&(M[me]=null,E[me].disconnect(oe))}for(let ce=0;ce<te.added.length;ce++){let oe=te.added[ce],me=M.indexOf(oe);if(me===-1){for(let $=0;$<E.length;$++){if($>=M.length){M.push(oe),me=$;break}if(M[$]===null){M[$]=oe,me=$;break}}if(me===-1)break}let Fe=E[me];Fe&&Fe.connect(oe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=E[te];return ce===void 0&&(ce=new br,E[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=E[te];return ce===void 0&&(ce=new br,E[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=E[te];return ce===void 0&&(ce=new br,E[te]=ce),ce.getHandSpace()},this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){l=te,i.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(te){o=te},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p===null&&m&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",q),r.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(P),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,oe=null,me=null;v.depth&&(me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=v.stencil?Xn:An,oe=v.stencil?Gr:on);let Fe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(Fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Bt(d.textureWidth,d.textureHeight,{format:Ti,type:zt,depthTexture:new Si(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new Bt(u.framebufferWidth,u.framebufferHeight,{format:Ti,type:zt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await r.requestReferenceSpace(l),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let ie=new w,de=new w;function Ee(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ce=te.near,oe=te.far;_.texture!==null&&(_.depthNear>0&&(ce=_.depthNear),_.depthFar>0&&(oe=_.depthFar)),O.near=U.near=D.near=ce,O.far=U.far=D.far=oe,Z===O.near&&H===O.far||(r.updateRenderState({depthNear:O.near,depthFar:O.far}),Z=O.near,H=O.far),O.layers.mask=6|te.layers.mask,D.layers.mask=-5&O.layers.mask,U.layers.mask=-3&O.layers.mask;let me=te.parent,Fe=O.cameras;Ee(O,me);for(let $=0;$<Fe.length;$++)Ee(Fe[$],me);Fe.length===2?(function($,R,b){ie.setFromMatrixPosition(R.matrixWorld),de.setFromMatrixPosition(b.matrixWorld);let C=ie.distanceTo(de),N=R.projectionMatrix.elements,y=b.projectionMatrix.elements,L=N[14]/(N[10]-1),I=N[14]/(N[10]+1),A=(N[9]+1)/N[5],G=(N[9]-1)/N[5],X=(N[8]-1)/N[0],Y=(y[8]+1)/y[0],re=L*X,ye=L*Y,Me=C/(-X+Y),he=Me*-X;if(R.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(he),$.translateZ(Me),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),N[10]===-1)$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let Pe=L+Me,ee=I+Me,se=re-he,ne=ye+(C-he),pe=A*I/ee*Pe,Qe=G*I/ee*Pe;$.projectionMatrix.makePerspective(se,ne,pe,Qe,Pe,ee),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}})(O,D,U):O.projectionMatrix.copy(D.projectionMatrix),(function($,R,b){b===null?$.matrix.copy(R.matrixWorld):($.matrix.copy(b.matrixWorld),$.matrix.invert(),$.matrix.multiply(R.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=2*Mr*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)})(te,O,me)},this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||u!==null)return c},this.setFoveation=function(te){c=te,d!==null&&(d.fixedFoveation=te),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(O)},this.getCameraTexture=function(te){return g[te]};let _e=null,xe=new ip;xe.setAnimationLoop(function(te,ce){if(h=ce.getViewerPose(o||a),f=ce,h!==null){let oe=h.views;u!==null&&(e.setRenderTargetFramebuffer(S,u.framebuffer),e.setRenderTarget(S));let me=!1;oe.length!==O.cameras.length&&(O.cameras.length=0,me=!0);for(let $=0;$<oe.length;$++){let R=oe[$],b=null;if(u!==null)b=u.getViewport(R);else{let N=p.getViewSubImage(d,R);b=N.viewport,$===0&&(e.setRenderTargetTextures(S,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(S))}let C=k[$];C===void 0&&(C=new Lt,C.layers.enable($),C.viewport=new $e,k[$]=C),C.matrix.fromArray(R.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(R.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(b.x,b.y,b.width,b.height),$===0&&(O.matrix.copy(C.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),me===!0&&O.cameras.push(C)}let Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){p=i.getBinding();let $=p.getDepthInformation(oe[0]);$&&$.isValid&&$.texture&&_.init($,r.renderState)}if(Fe&&Fe.includes("camera-access")&&m){e.state.unbindTexture(),p=i.getBinding();for(let $=0;$<oe.length;$++){let R=oe[$].camera;if(R){let b=g[R];b||(b=new Ms,g[R]=b);let C=p.getCameraImage(R);b.sourceTexture=C}}}}for(let oe=0;oe<E.length;oe++){let me=M[oe],Fe=E[oe];me!==null&&Fe!==void 0&&Fe.update(me,ce,o||a)}_e&&_e(te,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),f=null}),this.setAnimationLoop=function(te){_e=te},this.dispose=function(){}}},ng=new Oe,lp=new Ue;function rg(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Xt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Xt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),l=a.envMap,c=a.envMapRotation;l&&(r.envMap.value=l,r.envMapRotation.value.setFromMatrix4(ng.makeRotationFromEuler(c)).transpose(),l.isCubeTexture&&l.isRenderTargetTexture===!1&&r.envMapRotation.value.premultiply(lp),r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,sh(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,l,c){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?i(r,s):s.isMeshLambertMaterial?(i(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(r,s),(function(o,h){h.gradientMap&&(o.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(i(r,s),(function(o,h){o.specular.value.copy(h.specular),o.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(r,s),(function(o,h){o.metalness.value=h.metalness,h.metalnessMap&&(o.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,o.metalnessMapTransform)),o.roughness.value=h.roughness,h.roughnessMap&&(o.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,o.roughnessMapTransform)),h.envMap&&(o.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(o,h,p){o.ior.value=h.ior,h.sheen>0&&(o.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),o.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(o.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,o.sheenColorMapTransform)),h.sheenRoughnessMap&&(o.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,o.sheenRoughnessMapTransform))),h.clearcoat>0&&(o.clearcoat.value=h.clearcoat,o.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(o.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,o.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(o.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,o.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(o.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,o.clearcoatNormalMapTransform),o.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Xt&&o.clearcoatNormalScale.value.negate())),h.dispersion>0&&(o.dispersion.value=h.dispersion),h.iridescence>0&&(o.iridescence.value=h.iridescence,o.iridescenceIOR.value=h.iridescenceIOR,o.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],o.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(o.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,o.iridescenceMapTransform)),h.iridescenceThicknessMap&&(o.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,o.iridescenceThicknessMapTransform))),h.transmission>0&&(o.transmission.value=h.transmission,o.transmissionSamplerMap.value=p.texture,o.transmissionSamplerSize.value.set(p.width,p.height),h.transmissionMap&&(o.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,o.transmissionMapTransform)),o.thickness.value=h.thickness,h.thicknessMap&&(o.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,o.thicknessMapTransform)),o.attenuationDistance.value=h.attenuationDistance,o.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(o.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(o.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,o.anisotropyMapTransform))),o.specularIntensity.value=h.specularIntensity,o.specularColor.value.copy(h.specularColor),h.specularColorMap&&(o.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,o.specularColorMapTransform)),h.specularIntensityMap&&(o.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,o.specularIntensityMapTransform))})(r,s,c)):s.isMeshMatcapMaterial?(i(r,s),(function(o,h){h.matcap&&(o.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),(function(o,h){let p=e.get(h).light;o.referencePosition.value.setFromMatrixPosition(p.matrixWorld),o.nearDistance.value=p.shadow.camera.near,o.farDistance.value=p.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?((function(o,h){o.diffuse.value.copy(h.color),o.opacity.value=h.opacity,h.map&&(o.map.value=h.map,t(h.map,o.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(o,h){o.dashSize.value=h.dashSize,o.totalSize.value=h.dashSize+h.gapSize,o.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(o,h,p,d){o.diffuse.value.copy(h.color),o.opacity.value=h.opacity,o.size.value=h.size*p,o.scale.value=.5*d,h.map&&(o.map.value=h.map,t(h.map,o.uvTransform)),h.alphaMap&&(o.alphaMap.value=h.alphaMap,t(h.alphaMap,o.alphaMapTransform)),h.alphaTest>0&&(o.alphaTest.value=h.alphaTest)})(r,s,a,l):s.isSpriteMaterial?(function(o,h){o.diffuse.value.copy(h.color),o.opacity.value=h.opacity,o.rotation.value=h.rotation,h.map&&(o.map.value=h.map,t(h.map,o.mapTransform)),h.alphaMap&&(o.alphaMap.value=h.alphaMap,t(h.alphaMap,o.alphaMapTransform)),h.alphaTest>0&&(o.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function sg(n,e,t,i){let r={},s={},a=[],l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(d,u,f,m){if((function(_,g,v,x){let S=_.value,E=g+"_"+v;if(x[E]===void 0)return typeof S=="number"||typeof S=="boolean"?x[E]=S:ArrayBuffer.isView(S)?x[E]=S.slice():x[E]=S.clone(),!0;{let M=x[E];if(typeof S=="number"||typeof S=="boolean"){if(M!==S)return x[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(M.equals(S)===!1)return M.copy(S),!0}}return!1})(d,u,f,m)===!0){let _=d.__offset,g=d.value;if(Array.isArray(g)){let v=0;for(let x=0;x<g.length;x++){let S=g[x],E=h(S);o(S,d.__data,v),typeof S=="number"||typeof S=="boolean"||S.isMatrix3||ArrayBuffer.isView(S)||(v+=E.storage/Float32Array.BYTES_PER_ELEMENT)}}else o(g,d.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,d.__data)}}function o(d,u,f){typeof d=="number"||typeof d=="boolean"?u[0]=d:d.isMatrix3?(u[0]=d.elements[0],u[1]=d.elements[1],u[2]=d.elements[2],u[3]=0,u[4]=d.elements[3],u[5]=d.elements[4],u[6]=d.elements[5],u[7]=0,u[8]=d.elements[6],u[9]=d.elements[7],u[10]=d.elements[8],u[11]=0):ArrayBuffer.isView(d)?u.set(new d.constructor(d.buffer,d.byteOffset,u.length)):d.toArray(u,f)}function h(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(d)?(u.boundary=16,u.storage=d.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",d),u}function p(d){let u=d.target;u.removeEventListener("dispose",p);let f=a.indexOf(u.__bindingPointIndex);a.splice(f,1),n.deleteBuffer(r[u.id]),delete r[u.id],delete s[u.id]}return{bind:function(d,u){let f=u.program;i.uniformBlockBinding(d,f)},update:function(d,u){let f=r[d.id];f===void 0&&((function(g){let v=g.uniforms,x=0,S=16;for(let M=0,P=v.length;M<P;M++){let F=Array.isArray(v[M])?v[M]:[v[M]];for(let D=0,U=F.length;D<U;D++){let k=F[D],O=Array.isArray(k.value)?k.value:[k.value];for(let Z=0,H=O.length;Z<H;Z++){let V=h(O[Z]),q=x%S,W=q%V.boundary,ie=q+W;x+=W,ie!==0&&S-ie<V.storage&&(x+=S-ie),k.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=V.storage}}}let E=x%S;E>0&&(x+=S-E),g.__size=x,g.__cache={}})(d),f=(function(g){let v=(function(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();g.__bindingPointIndex=v;let x=n.createBuffer(),S=g.__size,E=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x})(d),r[d.id]=f,d.addEventListener("dispose",p));let m=u.program;i.updateUBOMapping(d,m);let _=e.render.frame;s[d.id]!==_&&((function(g){let v=r[g.id],x=g.uniforms,S=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,M=x.length;E<M;E++){let P=x[E];if(Array.isArray(P))for(let F=0,D=P.length;F<D;F++)c(P[F],E,F,S);else c(P,E,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)})(d),s[d.id]=_)},dispose:function(){for(let d in r)n.deleteBuffer(r[d]);a=[],r={},s={}}}}lp.set(-1,0,0,0,1,0,0,0,1);var ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null,jo=class{constructor(e={}){let{canvas:t=Td(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:u=zt}=e,f;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let m=u,_=new Set([Tc,bc,Lo]),g=new Set([zt,on,zr,Gr,Ro,Po]),v=new Uint32Array(4),x=new Int32Array(4),S=new w,E=null,M=null,P=[],F=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,k=!1,O=null,Z=null,H=null,V=null;this._outputColorSpace=Yt;let q=0,W=0,ie=null,de=-1,Ee=null,_e=new $e,xe=new $e,te=null,ce=new Te(0),oe=0,me=t.width,Fe=t.height,$=1,R=null,b=null,C=new $e(0,0,me,Fe),N=new $e(0,0,me,Fe),y=!1,L=new nn,I=!1,A=!1,G=new Oe,X=new w,Y=new $e,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function Me(){return ie===null?$:1}let he,Pe,ee,se,ne,pe,Qe,qe,ct,Ft,be,Ze,Ve,At,et,_t,lt,si,fi,Pn,Ri,un,sa,B=i;function Xh(T,z){return t.getContext(T,z)}try{let T={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",qh,!1),t.addEventListener("webglcontextrestored",Yh,!1),t.addEventListener("webglcontextcreationerror",Zh,!1),B===null){let z="webgl2";if(B=Xh(z,T),B===null)throw Xh(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Ce("WebGLRenderer: "+T.message),T}function jh(){he=new Lm(B),he.init(),Ri=new ig(B,he),Pe=new Cm(B,he,e,Ri),ee=new eg(B,he),Pe.reversedDepthBuffer&&d&&ee.buffers.depth.setReversed(!0),Z=B.createFramebuffer(),H=B.createFramebuffer(),V=B.createFramebuffer(),se=new Nm(B),ne=new Hf,pe=new tg(B,he,ee,ne,Pe,Ri,se),Qe=new Im(U),qe=new bm(B),un=new Em(B,qe),ct=new Dm(B,qe,se,un),Ft=new Om(B,ct,qe,un,se),si=new Fm(B,Pe,pe),et=new Rm(ne),be=new kf(U,Qe,he,Pe,un,et),Ze=new rg(U,ne),Ve=new Xf,At=new Jf(he),lt=new wm(U,Qe,ee,Ft,f,c),_t=new Qf(U,Ft,Pe),sa=new sg(B,se,Pe,ee),fi=new Am(B,he,se),Pn=new Um(B,he,se),se.programs=be.programs,U.capabilities=Pe,U.extensions=he,U.properties=ne,U.renderLists=Ve,U.shadowMap=_t,U.state=ee,U.info=se}jh(),m!==zt&&(D=new zm(m,t.width,t.height,l,r,s));let dt=new Ah(U,B);function qh(T){T.preventDefault(),nh("WebGLRenderer: Context Lost."),k=!0}function Yh(){nh("WebGLRenderer: Context Restored."),k=!1;let T=se.autoReset,z=_t.enabled,j=_t.autoUpdate,K=_t.needsUpdate,J=_t.type;jh(),se.autoReset=T,_t.enabled=z,_t.autoUpdate=j,_t.needsUpdate=K,_t.type=J}function Zh(T){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Jh(T){let z=T.target;z.removeEventListener("dispose",Jh),(function(j){(function(K){let J=ne.get(K).programs;J!==void 0&&(J.forEach(function(ae){be.releaseProgram(ae)}),K.isShaderMaterial&&be.releaseShaderCache(K))})(j),ne.remove(j)})(z)}function Kh(T,z,j){T.transparent===!0&&T.side===ht&&T.forceSinglePass===!1?(T.side=Xt,T.needsUpdate=!0,oa(T,z,j),T.side=Nr,T.needsUpdate=!0,oa(T,z,j),T.side=ht):oa(T,z,j)}this.xr=dt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=he.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=he.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(me,Fe,!1))},this.getSize=function(T){return T.set(me,Fe)},this.setSize=function(T,z,j=!0){dt.isPresenting?Ae("WebGLRenderer: Can't change size while VR device is presenting."):(me=T,Fe=z,t.width=Math.floor(T*$),t.height=Math.floor(z*$),j===!0&&(t.style.width=T+"px",t.style.height=z+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,T,z))},this.getDrawingBufferSize=function(T){return T.set(me*$,Fe*$).floor()},this.setDrawingBufferSize=function(T,z,j){me=T,Fe=z,$=j,t.width=Math.floor(T*j),t.height=Math.floor(z*j),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(m!==zt){if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(T||[])}else Ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(T){return T.copy(_e)},this.getViewport=function(T){return T.copy(C)},this.setViewport=function(T,z,j,K){T.isVector4?C.set(T.x,T.y,T.z,T.w):C.set(T,z,j,K),ee.viewport(_e.copy(C).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(N)},this.setScissor=function(T,z,j,K){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,z,j,K),ee.scissor(xe.copy(N).multiplyScalar($).round())},this.getScissorTest=function(){return y},this.setScissorTest=function(T){ee.setScissorTest(y=T)},this.setOpaqueSort=function(T){R=T},this.setTransparentSort=function(T){b=T},this.getClearColor=function(T){return T.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,j=!0){let K=0;if(T){let J=!1;if(ie!==null){let ae=ie.texture.format;J=_.has(ae)}if(J){let ae=ie.texture.type,ue=g.has(ae),ve=lt.getClearColor(),Se=lt.getClearAlpha(),Ie=ve.r,We=ve.g,Xe=ve.b;ue?(v[0]=Ie,v[1]=We,v[2]=Xe,v[3]=Se,B.clearBufferuiv(B.COLOR,0,v)):(x[0]=Ie,x[1]=We,x[2]=Xe,x[3]=Se,B.clearBufferiv(B.COLOR,0,x))}else K|=B.COLOR_BUFFER_BIT}z&&(K|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){t.removeEventListener("webglcontextlost",qh,!1),t.removeEventListener("webglcontextrestored",Yh,!1),t.removeEventListener("webglcontextcreationerror",Zh,!1),lt.dispose(),Ve.dispose(),At.dispose(),ne.dispose(),Qe.dispose(),Ft.dispose(),un.dispose(),sa.dispose(),be.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",$h),dt.removeEventListener("sessionend",Qh),In.stop()},this.renderBufferDirect=function(T,z,j,K,J,ae){z===null&&(z=re);let ue=J.isMesh&&J.matrixWorld.determinantAffine()<0,ve=(function(ke,st,Ct,Le,Ne){st.isScene!==!0&&(st=re),pe.resetTextureUnits();let gi=st.fog,cl=Le.isMeshStandardMaterial||Le.isMeshLambertMaterial||Le.isMeshPhongMaterial?st.environment:null,la=ie===null?U.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:He.workingColorSpace,Jr=Le.isMeshStandardMaterial||Le.isMeshLambertMaterial&&!Le.envMap||Le.isMeshPhongMaterial&&!Le.envMap,Pi=Qe.get(Le.envMap||cl,Jr),er=Le.vertexColors===!0&&!!Ct.attributes.color&&Ct.attributes.color.itemSize===4,Xi=!!Ct.attributes.tangent&&(!!Le.normalMap||Le.anisotropy>0),hl=!!Ct.morphAttributes.position,tr=!!Ct.morphAttributes.normal,Bp=!!Ct.morphAttributes.color,su=bi;Le.toneMapped&&(ie!==null&&ie.isXRRenderTarget!==!0||(su=U.toneMapping));let au=Ct.morphAttributes.position||Ct.morphAttributes.normal||Ct.morphAttributes.color,zp=au!==void 0?au.length:0,De=ne.get(Le),Ln=M.state.lights;if(I===!0&&(A===!0||ke!==Ee)){let mt=ke===Ee&&Le.id===de;et.setState(Le,ke,mt)}let vi=!1;Le.version===De.__version?De.needsLights&&De.lightsStateVersion!==Ln.state.version||De.outputColorSpace!==la||Ne.isBatchedMesh&&De.batching===!1?vi=!0:Ne.isBatchedMesh||De.batching!==!0?Ne.isBatchedMesh&&De.batchingColor===!0&&Ne.colorTexture===null||Ne.isBatchedMesh&&De.batchingColor===!1&&Ne.colorTexture!==null||Ne.isInstancedMesh&&De.instancing===!1?vi=!0:Ne.isInstancedMesh||De.instancing!==!0?Ne.isSkinnedMesh&&De.skinning===!1?vi=!0:Ne.isSkinnedMesh||De.skinning!==!0?Ne.isInstancedMesh&&De.instancingColor===!0&&Ne.instanceColor===null||Ne.isInstancedMesh&&De.instancingColor===!1&&Ne.instanceColor!==null||Ne.isInstancedMesh&&De.instancingMorph===!0&&Ne.morphTexture===null||Ne.isInstancedMesh&&De.instancingMorph===!1&&Ne.morphTexture!==null||De.envMap!==Pi||Le.fog===!0&&De.fog!==gi?vi=!0:De.numClippingPlanes===void 0||De.numClippingPlanes===et.numPlanes&&De.numIntersection===et.numIntersection?(De.vertexAlphas!==er||De.vertexTangents!==Xi||De.morphTargets!==hl||De.morphNormals!==tr||De.morphColors!==Bp||De.toneMapping!==su||De.morphTargetsCount!==zp||!!De.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(vi=!0):vi=!0:vi=!0:vi=!0:vi=!0:(vi=!0,De.__version=Le.version);let dn=De.currentProgram;vi===!0&&(dn=oa(Le,st,Ne),O&&Le.isNodeMaterial&&O.onUpdateProgram(Le,dn,De));let ou=!1,ir=!1,ul=!1,at=dn.getUniforms(),ai=De.uniforms;if(ee.useProgram(dn.program)&&(ou=!0,ir=!0,ul=!0),Le.id!==de&&(de=Le.id,ir=!0),De.needsLights){let mt=(function(Li,pl){if(Li.length===0)return null;if(Li.length===1)return Li[0].texture!==null?Li[0]:null;S.setFromMatrixPosition(pl.matrixWorld);for(let nr=0,Gp=Li.length;nr<Gp;nr++){let ml=Li[nr];if(ml.texture!==null&&ml.boundingBox.containsPoint(S))return ml}return null})(M.state.lightProbeGridArray,Ne);De.lightProbeGrid!==mt&&(De.lightProbeGrid=mt,ir=!0)}if(ou||Ee!==ke){ee.buffers.depth.getReversed()&&ke.reversedDepth!==!0&&(ke._reversedDepth=!0,ke.updateProjectionMatrix()),at.setValue(B,"projectionMatrix",ke.projectionMatrix),at.setValue(B,"viewMatrix",ke.matrixWorldInverse);let mt=at.map.cameraPosition;mt!==void 0&&mt.setValue(B,X.setFromMatrixPosition(ke.matrixWorld)),Pe.logarithmicDepthBuffer&&at.setValue(B,"logDepthBufFC",2/(Math.log(ke.far+1)/Math.LN2)),(Le.isMeshPhongMaterial||Le.isMeshToonMaterial||Le.isMeshLambertMaterial||Le.isMeshBasicMaterial||Le.isMeshStandardMaterial||Le.isShaderMaterial)&&at.setValue(B,"isOrthographic",ke.isOrthographicCamera===!0),Ee!==ke&&(Ee=ke,ir=!0,ul=!0)}if(De.needsLights&&(Ln.state.directionalShadowMap.length>0&&at.setValue(B,"directionalShadowMap",Ln.state.directionalShadowMap,pe),Ln.state.spotShadowMap.length>0&&at.setValue(B,"spotShadowMap",Ln.state.spotShadowMap,pe),Ln.state.pointShadowMap.length>0&&at.setValue(B,"pointShadowMap",Ln.state.pointShadowMap,pe)),Ne.isSkinnedMesh){at.setOptional(B,Ne,"bindMatrix"),at.setOptional(B,Ne,"bindMatrixInverse");let mt=Ne.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),at.setValue(B,"boneTexture",mt.boneTexture,pe))}Ne.isBatchedMesh&&(at.setOptional(B,Ne,"batchingTexture"),at.setValue(B,"batchingTexture",Ne._matricesTexture,pe),at.setOptional(B,Ne,"batchingIdTexture"),at.setValue(B,"batchingIdTexture",Ne._indirectTexture,pe),at.setOptional(B,Ne,"batchingColorTexture"),Ne._colorsTexture!==null&&at.setValue(B,"batchingColorTexture",Ne._colorsTexture,pe));let dl=Ct.morphAttributes;if(dl.position===void 0&&dl.normal===void 0&&dl.color===void 0||si.update(Ne,Ct,dn),(ir||De.receiveShadow!==Ne.receiveShadow)&&(De.receiveShadow=Ne.receiveShadow,at.setValue(B,"receiveShadow",Ne.receiveShadow)),(Le.isMeshStandardMaterial||Le.isMeshLambertMaterial||Le.isMeshPhongMaterial)&&Le.envMap===null&&st.environment!==null&&(ai.envMapIntensity.value=st.environmentIntensity),ai.dfgLUT!==void 0&&(ai.dfgLUT.value=(Gi===null&&(Gi=new gs(ag,16,16,jn,pi),Gi.name="DFG_LUT",Gi.minFilter=Dt,Gi.magFilter=Dt,Gi.wrapS=Mn,Gi.wrapT=Mn,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi)),ir){if(at.setValue(B,"toneMappingExposure",U.toneMappingExposure),De.needsLights&&(_i=ul,(Ii=ai).ambientLightColor.needsUpdate=_i,Ii.lightProbe.needsUpdate=_i,Ii.directionalLights.needsUpdate=_i,Ii.directionalLightShadows.needsUpdate=_i,Ii.pointLights.needsUpdate=_i,Ii.pointLightShadows.needsUpdate=_i,Ii.spotLights.needsUpdate=_i,Ii.spotLightShadows.needsUpdate=_i,Ii.rectAreaLights.needsUpdate=_i,Ii.hemisphereLights.needsUpdate=_i),gi&&Le.fog===!0&&Ze.refreshFogUniforms(ai,gi),Ze.refreshMaterialUniforms(ai,Le,$,Fe,M.state.transmissionRenderTarget[ke.id]),De.needsLights&&De.lightProbeGrid){let mt=De.lightProbeGrid;ai.probesSH.value=mt.texture,ai.probesMin.value.copy(mt.boundingBox.min),ai.probesMax.value.copy(mt.boundingBox.max),ai.probesResolution.value.copy(mt.resolution)}kr.upload(B,nu(De),ai,pe)}var Ii,_i;if(Le.isShaderMaterial&&Le.uniformsNeedUpdate===!0&&(kr.upload(B,nu(De),ai,pe),Le.uniformsNeedUpdate=!1),Le.isSpriteMaterial&&at.setValue(B,"center",Ne.center),at.setValue(B,"modelViewMatrix",Ne.modelViewMatrix),at.setValue(B,"normalMatrix",Ne.normalMatrix),at.setValue(B,"modelMatrix",Ne.matrixWorld),Le.uniformsGroups!==void 0){let mt=Le.uniformsGroups;for(let Li=0,pl=mt.length;Li<pl;Li++){let nr=mt[Li];sa.update(nr,dn),sa.bind(nr,dn)}}return dn})(T,z,j,K,J);ee.setMaterial(K,ue);let Se=j.index,Ie=1;if(K.wireframe===!0){if(Se=ct.getWireframeAttribute(j),Se===void 0)return;Ie=2}let We=j.drawRange,Xe=j.attributes.position,Re=We.start*Ie,je=(We.start+We.count)*Ie;ae!==null&&(Re=Math.max(Re,ae.start*Ie),je=Math.min(je,(ae.start+ae.count)*Ie)),Se!==null?(Re=Math.max(Re,0),je=Math.min(je,Se.count)):Xe!=null&&(Re=Math.max(Re,0),je=Math.min(je,Xe.count));let xt=je-Re;if(xt<0||xt===1/0)return;let pt;un.setup(J,K,ve,j,Se);let rt=fi;if(Se!==null&&(pt=qe.get(Se),rt=Pn,rt.setIndex(pt)),J.isMesh)K.wireframe===!0?(ee.setLineWidth(K.wireframeLinewidth*Me()),rt.setMode(B.LINES)):rt.setMode(B.TRIANGLES);else if(J.isLine){let ke=K.linewidth;ke===void 0&&(ke=1),ee.setLineWidth(ke*Me()),J.isLineSegments?rt.setMode(B.LINES):J.isLineLoop?rt.setMode(B.LINE_LOOP):rt.setMode(B.LINE_STRIP)}else J.isPoints?rt.setMode(B.POINTS):J.isSprite&&rt.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(he.get("WEBGL_multi_draw"))rt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let ke=J._multiDrawStarts,st=J._multiDrawCounts,Ct=J._multiDrawCount,Le=Se?qe.get(Se).bytesPerElement:1,Ne=ne.get(K).currentProgram.getUniforms();for(let gi=0;gi<Ct;gi++)Ne.setValue(B,"_gl_DrawID",gi),rt.render(ke[gi]/Le,st[gi])}else if(J.isInstancedMesh)rt.renderInstances(Re,xt,J.count);else if(j.isInstancedBufferGeometry){let ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,st=Math.min(j.instanceCount,ke);rt.renderInstances(Re,xt,st)}else rt.render(Re,xt)},this.compile=function(T,z,j=null){j===null&&(j=T),M=At.get(j),M.init(z),F.push(M),j.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),T!==j&&T.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),M.setupLights();let K=new Set;return T.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let ae=J.material;if(ae)if(Array.isArray(ae))for(let ue=0;ue<ae.length;ue++){let ve=ae[ue];Kh(ve,j,J),K.add(ve)}else Kh(ae,j,J),K.add(ae)}),M=F.pop(),K},this.compileAsync=function(T,z,j=null){let K=this.compile(T,z,j);return new Promise(J=>{function ae(){K.forEach(function(ue){ne.get(ue).currentProgram.isReady()&&K.delete(ue)}),K.size!==0?setTimeout(ae,10):J(T)}he.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let ol=null;function $h(){In.stop()}function Qh(){In.start()}let In=new ip;function ll(T,z,j,K){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||L.intersectsSprite(T)){K&&Y.setFromMatrixPosition(T.matrixWorld).applyMatrix4(G);let ae=Ft.update(T),ue=T.material;ue.visible&&E.push(T,ae,ue,j,Y.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||L.intersectsObject(T))){let ae=Ft.update(T),ue=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Y.copy(T.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Y.copy(ae.boundingSphere.center)),Y.applyMatrix4(T.matrixWorld).applyMatrix4(G)),Array.isArray(ue)){let ve=ae.groups;for(let Se=0,Ie=ve.length;Se<Ie;Se++){let We=ve[Se],Xe=ue[We.materialIndex];Xe&&Xe.visible&&E.push(T,ae,Xe,j,Y.z,We)}}else ue.visible&&E.push(T,ae,ue,j,Y.z,null)}}let J=T.children;for(let ae=0,ue=J.length;ae<ue;ae++)ll(J[ae],z,j,K)}function eu(T,z,j,K){let{opaque:J,transmissive:ae,transparent:ue}=T;M.setupLightsView(j),I===!0&&et.setGlobalState(U.clippingPlanes,j),K&&ee.viewport(_e.copy(K)),J.length>0&&aa(J,z,j),ae.length>0&&aa(ae,z,j),ue.length>0&&aa(ue,z,j),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function tu(T,z,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[K.id]===void 0){let Xe=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[K.id]=new Bt(1,1,{generateMipmaps:!0,type:Xe?pi:zt,minFilter:Wn,samples:Math.max(4,Pe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}let J=M.state.transmissionRenderTarget[K.id],ae=K.viewport||_e;J.setSize(ae.z*U.transmissionResolutionScale,ae.w*U.transmissionResolutionScale);let ue=U.getRenderTarget(),ve=U.getActiveCubeFace(),Se=U.getActiveMipmapLevel();U.setRenderTarget(J),U.getClearColor(ce),oe=U.getClearAlpha(),oe<1&&U.setClearColor(16777215,.5),U.clear(),ye&&lt.render(j);let Ie=U.toneMapping;U.toneMapping=bi;let We=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),M.setupLightsView(K),I===!0&&et.setGlobalState(U.clippingPlanes,K),aa(T,j,K),pe.updateMultisampleRenderTarget(J),pe.updateRenderTargetMipmap(J),he.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Re=0,je=z.length;Re<je;Re++){let xt=z[Re],{object:pt,geometry:rt,material:ke,group:st}=xt;if(ke.side===ht&&pt.layers.test(K.layers)){let Ct=ke.side;ke.side=Xt,ke.needsUpdate=!0,iu(pt,j,K,rt,ke,st),ke.side=Ct,ke.needsUpdate=!0,Xe=!0}}Xe===!0&&(pe.updateMultisampleRenderTarget(J),pe.updateRenderTargetMipmap(J))}U.setRenderTarget(ue,ve,Se),U.setClearColor(ce,oe),We!==void 0&&(K.viewport=We),U.toneMapping=Ie}function aa(T,z,j){let K=z.isScene===!0?z.overrideMaterial:null;for(let J=0,ae=T.length;J<ae;J++){let ue=T[J],{object:ve,geometry:Se,group:Ie}=ue,We=ue.material;We.allowOverride===!0&&K!==null&&(We=K),ve.layers.test(j.layers)&&iu(ve,z,j,Se,We,Ie)}}function iu(T,z,j,K,J,ae){T.onBeforeRender(U,z,j,K,J,ae),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(U,z,j,K,T,ae),J.transparent===!0&&J.side===ht&&J.forceSinglePass===!1?(J.side=Xt,J.needsUpdate=!0,U.renderBufferDirect(j,z,K,J,T,ae),J.side=Nr,J.needsUpdate=!0,U.renderBufferDirect(j,z,K,J,T,ae),J.side=ht):U.renderBufferDirect(j,z,K,J,T,ae),T.onAfterRender(U,z,j,K,J,ae)}function oa(T,z,j){z.isScene!==!0&&(z=re);let K=ne.get(T),J=M.state.lights,ae=M.state.shadowsArray,ue=J.state.version,ve=be.getParameters(T,J.state,ae,z,j,M.state.lightProbeGridArray),Se=be.getProgramCacheKey(ve),Ie=K.programs;K.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,K.fog=z.fog;let We=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;K.envMap=Qe.get(T.envMap||K.environment,We),K.envMapRotation=K.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Ie===void 0&&(T.addEventListener("dispose",Jh),Ie=new Map,K.programs=Ie);let Xe=Ie.get(Se);if(Xe!==void 0){if(K.currentProgram===Xe&&K.lightsStateVersion===ue)return ru(T,ve),Xe}else ve.uniforms=be.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,j,ve),T.onBeforeCompile(ve,U),Xe=be.acquireProgram(ve,Se),Ie.set(Se,Xe),K.uniforms=ve.uniforms;let Re=K.uniforms;return(T.isShaderMaterial||T.isRawShaderMaterial)&&T.clipping!==!0||(Re.clippingPlanes=et.uniform),ru(T,ve),K.needsLights=(function(je){return je.isMeshLambertMaterial||je.isMeshToonMaterial||je.isMeshPhongMaterial||je.isMeshStandardMaterial||je.isShadowMaterial||je.isShaderMaterial&&je.lights===!0})(T),K.lightsStateVersion=ue,K.needsLights&&(Re.ambientLightColor.value=J.state.ambient,Re.lightProbe.value=J.state.probe,Re.directionalLights.value=J.state.directional,Re.directionalLightShadows.value=J.state.directionalShadow,Re.spotLights.value=J.state.spot,Re.spotLightShadows.value=J.state.spotShadow,Re.rectAreaLights.value=J.state.rectArea,Re.ltc_1.value=J.state.rectAreaLTC1,Re.ltc_2.value=J.state.rectAreaLTC2,Re.pointLights.value=J.state.point,Re.pointLightShadows.value=J.state.pointShadow,Re.hemisphereLights.value=J.state.hemi,Re.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Re.spotLightMatrix.value=J.state.spotLightMatrix,Re.spotLightMap.value=J.state.spotLightMap,Re.pointShadowMatrix.value=J.state.pointShadowMatrix),K.lightProbeGrid=M.state.lightProbeGridArray.length>0,K.currentProgram=Xe,K.uniformsList=null,Xe}function nu(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=kr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function ru(T,z){let j=ne.get(T);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}In.setAnimationLoop(function(T){ol&&ol(T)}),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(T){ol=T,dt.setAnimationLoop(T),T===null?In.stop():In.start()},dt.addEventListener("sessionstart",$h),dt.addEventListener("sessionend",Qh),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0)return void Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(k===!0)return;O!==null&&O.renderStart(T,z);let j=dt.enabled===!0&&dt.isPresenting===!0,K=D!==null&&(ie===null||j)&&D.begin(U,ie);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),dt.enabled!==!0||dt.isPresenting!==!0||D!==null&&D.isCompositing()!==!1||(dt.cameraAutoUpdate===!0&&dt.updateCamera(z),z=dt.getCamera()),T.isScene===!0&&T.onBeforeRender(U,T,z,ie),M=At.get(T,F.length),M.init(z),M.state.textureUnits=pe.getTextureUnits(),F.push(M),G.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),L.setFromProjectionMatrix(G,Qi,z.reversedDepth),A=this.localClippingEnabled,I=et.init(this.clippingPlanes,A),E=Ve.get(T,P.length),E.init(),P.push(E),dt.enabled===!0&&dt.isPresenting===!0){let ae=U.xr.getDepthSensingMesh();ae!==null&&ll(ae,z,-1/0,U.sortObjects)}ll(T,z,0,U.sortObjects),E.finish(),U.sortObjects===!0&&E.sort(R,b,z.reversedDepth),ye=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,ye&&lt.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),I===!0&&et.beginShadows();let J=M.state.shadowsArray;if(_t.render(J,T,z),I===!0&&et.endShadows(),(K&&D.hasRenderPass())===!1){let ae=E.opaque,ue=E.transmissive;if(M.setupLights(),z.isArrayCamera){let ve=z.cameras;if(ue.length>0)for(let Se=0,Ie=ve.length;Se<Ie;Se++)tu(ae,ue,T,ve[Se]);ye&&lt.render(T);for(let Se=0,Ie=ve.length;Se<Ie;Se++){let We=ve[Se];eu(E,T,We,We.viewport)}}else ue.length>0&&tu(ae,ue,T,z),ye&&lt.render(T),eu(E,T,z)}ie!==null&&W===0&&(pe.updateMultisampleRenderTarget(ie),pe.updateRenderTargetMipmap(ie)),K&&D.end(U),T.isScene===!0&&T.onAfterRender(U,T,z),un.resetDefaultState(),de=-1,Ee=null,F.pop(),F.length>0?(M=F[F.length-1],pe.setTextureUnits(M.state.textureUnits),I===!0&&et.setGlobalState(U.clippingPlanes,M.state.camera)):M=null,P.pop(),E=P.length>0?P[P.length-1]:null,O!==null&&O.renderEnd()},this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(T,z,j){let K=ne.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ne.get(T.texture).__webglTexture=z,ne.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let j=ne.get(T);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,j=0){ie=T,q=z,W=j;let K=null,J=!1,ae=!1;if(T){let ue=ne.get(T);if(ue.__useDefaultFramebuffer!==void 0)return ee.bindFramebuffer(B.FRAMEBUFFER,ue.__webglFramebuffer),_e.copy(T.viewport),xe.copy(T.scissor),te=T.scissorTest,ee.viewport(_e),ee.scissor(xe),ee.setScissorTest(te),void(de=-1);if(ue.__webglFramebuffer===void 0)pe.setupRenderTarget(T);else if(ue.__hasExternalTextures)pe.rebindTextures(T,ne.get(T.texture).__webglTexture,ne.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ie=T.depthTexture;if(ue.__boundDepthTexture!==Ie){if(Ie!==null&&ne.has(Ie)&&(T.width!==Ie.image.width||T.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(T)}}let ve=T.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ae=!0);let Se=ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(K=Array.isArray(Se[z])?Se[z][j]:Se[z],J=!0):K=T.samples>0&&pe.useMultisampledRTT(T)===!1?ne.get(T).__webglMultisampledFramebuffer:Array.isArray(Se)?Se[j]:Se,_e.copy(T.viewport),xe.copy(T.scissor),te=T.scissorTest}else _e.copy(C).multiplyScalar($).floor(),xe.copy(N).multiplyScalar($).floor(),te=y;if(j!==0&&(K=Z),ee.bindFramebuffer(B.FRAMEBUFFER,K)&&ee.drawBuffers(T,K),ee.viewport(_e),ee.scissor(xe),ee.setScissorTest(te),J){let ue=ne.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,ue.__webglTexture,j)}else if(ae){let ue=z;for(let ve=0;ve<T.textures.length;ve++){let Se=ne.get(T.textures[ve]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ve,Se.__webglTexture,j,ue)}}else if(T!==null&&j!==0){let ue=ne.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ue.__webglTexture,j)}de=-1},this.readRenderTargetPixels=function(T,z,j,K,J,ae,ue,ve=0){if(!T||!T.isWebGLRenderTarget)return void Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(Se=Se[ue]),Se){ee.bindFramebuffer(B.FRAMEBUFFER,Se);try{let Ie=T.textures[ve],We=Ie.format,Xe=Ie.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ve),!Pe.textureFormatReadable(We))return void Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Xe))return void Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");z>=0&&z<=T.width-K&&j>=0&&j<=T.height-J&&B.readPixels(z,j,K,J,Ri.convert(We),Ri.convert(Xe),ae)}finally{let Ie=ie!==null?ne.get(ie).__webglFramebuffer:null;ee.bindFramebuffer(B.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(T,z,j,K,J,ae,ue,ve=0){if(!T||!T.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(Se=Se[ue]),Se){if(z>=0&&z<=T.width-K&&j>=0&&j<=T.height-J){ee.bindFramebuffer(B.FRAMEBUFFER,Se);let Ie=T.textures[ve],We=Ie.format,Xe=Ie.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ve),!Pe.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Re),B.bufferData(B.PIXEL_PACK_BUFFER,ae.byteLength,B.STREAM_READ),B.readPixels(z,j,K,J,Ri.convert(We),Ri.convert(Xe),0);let je=ie!==null?ne.get(ie).__webglFramebuffer:null;ee.bindFramebuffer(B.FRAMEBUFFER,je);let xt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ed(B,xt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Re),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ae),B.deleteBuffer(Re),B.deleteSync(xt),ae}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,j=0){let K=Math.pow(2,-j),J=Math.floor(T.image.width*K),ae=Math.floor(T.image.height*K),ue=z!==null?z.x:0,ve=z!==null?z.y:0;pe.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,ue,ve,J,ae),ee.unbindTexture()},this.copyTextureToTexture=function(T,z,j=null,K=null,J=0,ae=0){let ue,ve,Se,Ie,We,Xe,Re,je,xt,pt=T.isCompressedTexture?T.mipmaps[ae]:T.image;if(j!==null)ue=j.max.x-j.min.x,ve=j.max.y-j.min.y,Se=j.isBox3?j.max.z-j.min.z:1,Ie=j.min.x,We=j.min.y,Xe=j.isBox3?j.min.z:0;else{let Pi=Math.pow(2,-J);ue=Math.floor(pt.width*Pi),ve=Math.floor(pt.height*Pi),Se=T.isDataArrayTexture?pt.depth:T.isData3DTexture?Math.floor(pt.depth*Pi):1,Ie=0,We=0,Xe=0}K!==null?(Re=K.x,je=K.y,xt=K.z):(Re=0,je=0,xt=0);let rt=Ri.convert(z.format),ke=Ri.convert(z.type),st;z.isData3DTexture?(pe.setTexture3D(z,0),st=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(pe.setTexture2DArray(z,0),st=B.TEXTURE_2D_ARRAY):(pe.setTexture2D(z,0),st=B.TEXTURE_2D),ee.activeTexture(B.TEXTURE0),ee.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),ee.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),ee.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let Ct=ee.getParameter(B.UNPACK_ROW_LENGTH),Le=ee.getParameter(B.UNPACK_IMAGE_HEIGHT),Ne=ee.getParameter(B.UNPACK_SKIP_PIXELS),gi=ee.getParameter(B.UNPACK_SKIP_ROWS),cl=ee.getParameter(B.UNPACK_SKIP_IMAGES);ee.pixelStorei(B.UNPACK_ROW_LENGTH,pt.width),ee.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pt.height),ee.pixelStorei(B.UNPACK_SKIP_PIXELS,Ie),ee.pixelStorei(B.UNPACK_SKIP_ROWS,We),ee.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe);let la=T.isDataArrayTexture||T.isData3DTexture,Jr=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let Pi=ne.get(T),er=ne.get(z),Xi=ne.get(Pi.__renderTarget),hl=ne.get(er.__renderTarget);ee.bindFramebuffer(B.READ_FRAMEBUFFER,Xi.__webglFramebuffer),ee.bindFramebuffer(B.DRAW_FRAMEBUFFER,hl.__webglFramebuffer);for(let tr=0;tr<Se;tr++)la&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ne.get(T).__webglTexture,J,Xe+tr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ne.get(z).__webglTexture,ae,xt+tr)),B.blitFramebuffer(Ie,We,ue,ve,Re,je,ue,ve,B.DEPTH_BUFFER_BIT,B.NEAREST);ee.bindFramebuffer(B.READ_FRAMEBUFFER,null),ee.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||T.isRenderTargetTexture||ne.has(T)){let Pi=ne.get(T),er=ne.get(z);ee.bindFramebuffer(B.READ_FRAMEBUFFER,H),ee.bindFramebuffer(B.DRAW_FRAMEBUFFER,V);for(let Xi=0;Xi<Se;Xi++)la?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pi.__webglTexture,J,Xe+Xi):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pi.__webglTexture,J),Jr?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,er.__webglTexture,ae,xt+Xi):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,er.__webglTexture,ae),J!==0?B.blitFramebuffer(Ie,We,ue,ve,Re,je,ue,ve,B.COLOR_BUFFER_BIT,B.NEAREST):Jr?B.copyTexSubImage3D(st,ae,Re,je,xt+Xi,Ie,We,ue,ve):B.copyTexSubImage2D(st,ae,Re,je,Ie,We,ue,ve);ee.bindFramebuffer(B.READ_FRAMEBUFFER,null),ee.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Jr?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(st,ae,Re,je,xt,ue,ve,Se,rt,ke,pt.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(st,ae,Re,je,xt,ue,ve,Se,rt,pt.data):B.texSubImage3D(st,ae,Re,je,xt,ue,ve,Se,rt,ke,pt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ae,Re,je,ue,ve,rt,ke,pt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ae,Re,je,pt.width,pt.height,rt,pt.data):B.texSubImage2D(B.TEXTURE_2D,ae,Re,je,ue,ve,rt,ke,pt);ee.pixelStorei(B.UNPACK_ROW_LENGTH,Ct),ee.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Le),ee.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),ee.pixelStorei(B.UNPACK_SKIP_ROWS,gi),ee.pixelStorei(B.UNPACK_SKIP_IMAGES,cl),ae===0&&z.generateMipmaps&&B.generateMipmap(st),ee.unbindTexture()},this.initRenderTarget=function(T){ne.get(T).__webglFramebuffer===void 0&&pe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?pe.setTextureCube(T,0):T.isData3DTexture?pe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?pe.setTexture2DArray(T,0):pe.setTexture2D(T,0),ee.unbindTexture()},this.resetState=function(){q=0,W=0,ie=null,ee.reset(),un.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};var ln=(n,e,t)=>Math.max(e,Math.min(t,n)),cp="amaq-audio-v1",og=[523.25,587.33,659.25,783.99,880],Zo=class{constructor({context:e=null,storage:t}={}){this.context=e,this.supported=!!(e||globalThis.AudioContext||globalThis.webkitAudioContext),this.volume=.65,this.muted=!1,this.mode="menu",this.voices=new Set,this.loops=[],this.lastEvent=null,this.lastPan=0,this.eventCount=0,this.events={},this.nextWarning=0,this.nextBubble=0,this.nextUpdate=0,this.lastPickup=-1;try{this.storage=t===void 0?globalThis.localStorage:t;let i=JSON.parse(this.storage?.getItem(cp)||"null");i&&typeof i.volume=="number"&&Number.isFinite(i.volume)&&(this.volume=ln(i.volume,0,1)),typeof i?.muted=="boolean"&&(this.muted=i.muted)}catch{}}get enabled(){return this.supported&&!this.muted&&this.volume>0}save(){try{this.storage?.setItem(cp,JSON.stringify({volume:this.volume,muted:this.muted}))}catch{}}init(){if(this.master||!this.supported)return;let e=globalThis.AudioContext||globalThis.webkitAudioContext,t=this.context||(this.context=new e);this.master=t.createGain(),this.master.gain.value=0,this.limiter=t.createDynamicsCompressor(),this.limiter.threshold.value=-12,this.limiter.knee.value=12,this.limiter.ratio.value=8,this.limiter.attack.value=.003,this.limiter.release.value=.2,this.master.connect(this.limiter).connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*4,t.sampleRate),this.water=t.createBuffer(2,t.sampleRate*4,t.sampleRate);let i=this.noise.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;for(let r=0;r<2;r++){let s=this.water.getChannelData(r),a=0;for(let l=0;l<s.length;l++)a=a*.985+(Math.random()*2-1)*.06,s[l]=a*Math.min(1,l/1800,(s.length-1-l)/1800)}this.bed=this.loop(this.water,380),this.swim=this.loop(this.noise,700)}loop(e,t){let i=this.context,r=i.createBufferSource(),s=i.createBiquadFilter(),a=i.createGain();return r.buffer=e,r.loop=!0,s.type="lowpass",s.frequency.value=t,s.Q.value=.5,a.gain.value=0,r.connect(s).connect(a).connect(this.master),r.start(),this.loops.push(r),{source:r,filter:s,gain:a}}smooth(e,t,i=.08){let r=this.context.currentTime;e.cancelScheduledValues(r),e.setTargetAtTime(t,r,i)}unlock(){if(this.enabled)try{this.init(),this.context.startRendering||this.context.resume().catch(()=>{})}catch{this.supported=!1}}fadeOut(){let e=this.master.gain,t=this.context.currentTime;e.cancelScheduledValues(t),e.setValueAtTime(e.value,t),e.linearRampToValueAtTime(0,t+.045)}mix(){this.master&&(this.enabled&&(this.mode==="playing"||this.mode==="ended")?this.smooth(this.master.gain,this.volume*.8,.025):this.fadeOut())}stopVoices(){for(let e of this.voices)e.source.stop(),e.nodes.forEach(t=>t.disconnect());this.voices.clear()}suspendAfter(e){clearTimeout(this.sleepTimer),!this.context?.startRendering&&(this.sleepTimer=setTimeout(()=>{this.stopVoices(),this.context?.suspend().catch(()=>{})},e))}setMode(e){clearTimeout(this.sleepTimer),this.mode=e,e==="playing"?(this.unlock(),this.nextUpdate=0,this.nextWarning=(this.context?.currentTime||0)+.5,this.nextBubble=(this.context?.currentTime||0)+1.4):(this.bed&&(this.smooth(this.bed.gain.gain,0),this.smooth(this.swim.gain.gain,0)),this.suspendAfter(e==="ended"?2200:160)),this.mix()}quiet(){this.master&&(this.fadeOut(),this.suspendAfter(100))}setVolume(e){Number.isFinite(e)&&(this.volume=ln(e,0,1),this.volume>0&&(this.muted=!1),this.changed())}toggle(){let e=this.enabled;this.muted=e,!e&&this.volume===0&&(this.volume=.65),this.changed()}changed(){this.save(),this.enabled&&this.mode==="playing"?(clearTimeout(this.sleepTimer),this.unlock()):this.enabled||this.quiet(),this.mix()}voice({frequency:e=600,end:t=e,duration:i=.3,gain:r=.13,delay:s=0,pan:a=0,noise:l=!1,type:c="sine"}={}){if(this.voices.size>=28)return;let o=this.context,h=o.currentTime+s,p=l?o.createBufferSource():o.createOscillator(),d=o.createGain(),u=o.createStereoPanner(),f=[p,d,u],m=p;if(l){p.buffer=this.noise;let g=o.createBiquadFilter();g.type="bandpass",g.Q.value=.65,g.frequency.setValueAtTime(e,h),g.frequency.exponentialRampToValueAtTime(Math.max(30,t),h+i),p.connect(g),m=g,f.push(g)}else p.type=c,p.frequency.setValueAtTime(e,h),p.frequency.exponentialRampToValueAtTime(Math.max(30,t),h+i);u.pan.value=ln(a,-1,1),d.gain.setValueAtTime(0,h),d.gain.linearRampToValueAtTime(r,h+.012),d.gain.exponentialRampToValueAtTime(1e-4,h+i),d.gain.linearRampToValueAtTime(0,h+i+.015),m.connect(d).connect(u).connect(this.master);let _={source:p,nodes:f};this.voices.add(_),p.onended=()=>{f.forEach(g=>g.disconnect()),this.voices.delete(_)},p.start(h),p.stop(h+i+.025)}play(e,{combo:t=1,pan:i=0,strength:r=1}={}){if(!this.master||!this.enabled||!["playing","ended"].includes(this.mode))return;let s=this.context.currentTime;if(e==="pearl"&&s-this.lastPickup<.055)return;e==="pearl"&&(this.lastPickup=s);let a=(o,h,p,d=0,u=o)=>this.voice({frequency:o,end:u,duration:h,gain:p,delay:d,pan:i}),l=(o,h,p,d)=>this.voice({noise:!0,frequency:o,end:h,duration:p,gain:d,pan:i}),c=(o,h=.085,p=.12)=>o.forEach((d,u)=>{a(d,.4,p,u*h),a(d*2.01,.19,p*.16,u*h)});if(e==="pearl"){let o=og[ln(Math.floor(t)-1,0,4)];a(o,.25,.15),a(o*2,.12,.027,.025)}else if(e==="gold")c([659.25,880,1318.5]);else if(e==="treasure")c([392,523.25,659.25,1046.5],.11,.14);else if(e==="magnet")l(300,1700,.45,.12),c([440,659.25],.1,.1);else if(e==="gate")l(250,2100,.65,.3),c([392,783.99],.1,.1);else if(e==="frenzy")c([523.25,659.25,783.99,1046.5,1318.5],.09,.13);else if(e==="nearMiss")l(900,300,.2,.13),c([659.25,987.77],.05,.08);else if(e==="discover")c([261.63,392],.18,.065);else if(e==="shield")l(500,2200,.55,.14),c([392,587.33,783.99],.11);else if(e==="dash")l(260,2300,.65,.5),a(160,.35,.1,0,65);else if(e==="hurt")l(900,100,.35,.3),a(115,.32,.2,0,42);else if(e==="block")l(1400,300,.32,.22),c([1174.66,783.99],.075,.1);else if(e==="defeated")l(450,1100,.4,.25),c([392,659.25,987.77],.07);else if(e==="warning"||e==="guardian"){let o=e==="guardian"?.15:.08+ln(r,0,1)*.06;a(110,.19,o,0,80),a(98,.22,o*.8,.26,65)}else if(e==="start")l(1300,260,.65,.16),c([261.63,392,523.25],.12,.09);else if(e==="win")c([523.25,659.25,783.99,1046.5],.18,.15);else if(e==="lose")c([392,329.63,261.63],.19,.11);else if(e==="bubble")a(300+Math.random()*350,.12,.022,0,1e3);else return;this.lastEvent=e,this.lastPan=i,this.eventCount++,this.events[e]=(this.events[e]||0)+1,["hurt","block","defeated","dash","treasure","frenzy","win","lose","start"].includes(e)&&(this.nextWarning=Math.max(this.nextWarning,s+.65)),e!=="bubble"&&e!=="warning"&&(this.nextBubble=Math.max(this.nextBubble,s+1.1))}update({world:e,speed:t=0,boosting:i=!1,threat:r=null}){if(!this.master||!this.enabled||this.mode!=="playing"||this.context.state==="suspended")return;let s=this.context.currentTime;if(s<this.nextUpdate)return;this.nextUpdate=s+.08;let a=e==="abyss"?170:e==="kelp"?270:420;if(this.smooth(this.bed.filter.frequency,a+Math.sin(s*.4)*45,.4),this.smooth(this.bed.gain.gain,.16+Math.sin(s*.65)*.018,.3),this.smooth(this.swim.filter.frequency,420+ln(t,0,1)*800+(i?1100:0)),this.smooth(this.swim.gain.gain,.012+ln(t,0,1)*.08+(i?.12:0)),r&&r.distance<27&&s>=this.nextWarning){let l=1-ln(r.distance/27,0,1);this.play("warning",{pan:ln(r.x/8,-.9,.9),strength:l}),this.nextWarning=s+1.8-l*1.15}s>=this.nextBubble&&(this.play("bubble",{pan:Math.sin(s)*.65}),this.nextBubble=s+2.2+Math.random()*2.8)}snapshot(){return{supported:this.supported,initialized:!!this.master,enabled:this.enabled,volume:this.volume,muted:this.muted,state:this.context?.state||"idle",mode:this.mode,voices:this.voices.size,lastEvent:this.lastEvent,lastPan:this.lastPan,eventCount:this.eventCount,events:{...this.events},swimGain:this.swim?.gain.gain.value||0,masterGain:this.master?.gain.value||0}}};function hp(n,e,{sand:t=!1,skin:i=!1,sway:r=!1,rock:s=!1}={}){return n.customProgramCacheKey=()=>"aquatic-v2-"+[t,i,r,s].join("-"),n.onBeforeCompile=a=>{a.uniforms.uWaterTime=e.time,a.uniforms.uWaterFlow=e.flow;let l=`varying vec3 vWaterWorld; uniform float uWaterTime; uniform float uWaterFlow;
`;a.vertexShader=l+a.vertexShader,a.vertexShader=a.vertexShader.replace("#include <begin_vertex>",`
      #include <begin_vertex>
      ${i?"transformed.z += sin(uWaterTime*9. + position.x*2.8 + modelMatrix[3].z)*pow(clamp((1.2-position.x)/2.6,0.,1.),2.)*.10;":""}
      ${r?"transformed.x += sin(uWaterTime*1.3+position.y*.7+modelMatrix[3].z*.15)*max(0.,position.y)*.025;":""}
    `),a.vertexShader=a.vertexShader.replace("#include <worldpos_vertex>",`
      #include <worldpos_vertex>
      vec4 waterWorld = vec4(transformed,1.);
      #ifdef USE_INSTANCING
        waterWorld = instanceMatrix * waterWorld;
      #endif
      vWaterWorld = (modelMatrix * waterWorld).xyz;
    `),a.fragmentShader=l+a.fragmentShader,t&&(a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`
      #include <color_fragment>
      vec2 bed = vec2(vWaterWorld.x, vWaterWorld.z-uWaterFlow);
      float ripples = sin(bed.y*8. + sin(bed.x*.8)*1.4 + sin(bed.y*.6));
      float grit = fract(sin(dot(floor(bed*75.),vec2(127.1,311.7)))*43758.5453);
      diffuseColor.rgb *= .89 + .065*ripples + grit*.045;
    `)),s&&(a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`
      #include <color_fragment>
      float stratum = sin(vWaterWorld.y*7.+sin(vWaterWorld.x*3.)+sin(vWaterWorld.z*2.));
      float grain = fract(sin(dot(floor(vWaterWorld*22.),vec3(127.1,311.7,74.7)))*43758.5453);
      diffuseColor.rgb *= .86 + stratum*.065 + grain*.09;
    `)),a.fragmentShader=a.fragmentShader.replace("#include <lights_fragment_end>",`
      #include <lights_fragment_end>
      vec2 waterUV = vWaterWorld.xz*.72;
      waterUV.y -= uWaterFlow*.72;
      waterUV += vec2(sin(waterUV.y*.67+uWaterTime*.52),cos(waterUV.x*.81-uWaterTime*.43))*.65;
      float waveA = sin(waterUV.x*2.1+sin(waterUV.y*1.8+uWaterTime*.4));
      float waveB = sin(waterUV.y*2.3+cos(waterUV.x*1.6-uWaterTime*.35));
      float caustic = pow(1.-min(1.,abs(waveA+waveB)*.65),12.);
      float causticDepth = .4 + .6*smoothstep(-2.,14.,vWaterWorld.y);
      reflectedLight.directDiffuse *= 1. + caustic*causticDepth*1.25;
    `)},n}function up(n){let e=new $t(180,220,70,70);e.rotateX(-Math.PI/2);let t=new Et({transparent:!0,depthWrite:!1,side:ht,uniforms:{time:n.time,waterColor:{value:new Te(10480610)}},vertexShader:`uniform float time; varying vec3 vPos; varying float vDepth;
      void main(){vec3 p=position;
        p.y+=sin(p.x*.24+p.z*.19+time*.8)*.22+sin(p.x*.56-p.z*.31-time*.6)*.09;
        vPos=(modelMatrix*vec4(p,1.)).xyz;vec4 mv=modelViewMatrix*vec4(p,1.);vDepth=-mv.z;
        gl_Position=projectionMatrix*mv;}`,fragmentShader:`uniform float time; uniform vec3 waterColor; varying vec3 vPos; varying float vDepth;
      void main(){
        vec3 n=normalize(cross(dFdx(vPos),dFdy(vPos)));
        vec3 eye=normalize(cameraPosition-vPos);
        float fresnel=pow(1.-abs(dot(n,eye)),2.);
        vec2 p=vPos.xz*.75;float w=sin(p.x+sin(p.y+time*.4))*sin(p.y*1.2+cos(p.x-time*.6));
        float shimmer=pow(1.-abs(w),18.);
        float sunGlow=exp(-length(vPos.xz-vec2(-18.,-25.))*.085);
        vec3 c=mix(waterColor*.18,waterColor*.65,fresnel)+shimmer*.055+waterColor*sunGlow*.4;
        gl_FragColor=vec4(c,(.13+fresnel*.3+shimmer*.07)*(1.-smoothstep(38.,105.,vDepth)));
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),i=new tt(e,t);return i.position.set(0,14,-70),i}function dp(n,e){let t=new Et({uniforms:{time:e.time,tint:{value:new Te(12052956)},strength:{value:1}},transparent:!0,depthWrite:!1,side:ht,blending:Fr,vertexShader:"varying vec2 vUv; varying float vDepth; void main(){vUv=uv;vec4 p=modelViewMatrix*vec4(position,1.);vDepth=-p.z;gl_Position=projectionMatrix*p;}",fragmentShader:`varying vec2 vUv; varying float vDepth; uniform float time; uniform vec3 tint; uniform float strength;
      void main(){
        float edge=pow(sin(vUv.x*3.14159),3.);
        float ends=smoothstep(0.,.25,vUv.y)*(1.-smoothstep(.5,1.,vUv.y));
        float motion=.75+.25*sin(vUv.y*12.+time*.7+sin(vUv.x*13.));
        float a=edge*ends*motion*.07*strength*exp(-max(0.,vDepth)*.015);
        gl_FragColor=vec4(tint,a);
      }`}),i=new $t(5,24,1,1),r=[];for(let s=0;s<14;s++){let a=new tt(i,t);a.position.set(-25+s%7*8,5,-6-Math.floor(s/7)*38-s%3*9),a.rotation.z=-.38,a.rotation.y=.15,n.add(a),r.push(a)}return{material:t,update(s){r.forEach((a,l)=>{a.rotation.z=-.38+Math.sin(s*.22+l)*.015})}}}var Jo=class{constructor(e,t,i,r,s,a){this.renderer=e,this.scene=t,this.camera=i,this.size=new Q,this.target=new Bt(1,1,{type:e.extensions.has("EXT_color_buffer_float")?pi:zt,depthTexture:new Si(1,1),samples:Math.min(2,e.capabilities.maxSamples)}),this.uniforms={sceneColor:{value:this.target.texture},sceneDepth:{value:this.target.depthTexture},time:r.time,texel:{value:new Q(1,1)},motion:{value:s?0:1},speed:{value:0},rush:{value:0},hurt:{value:0},near:{value:i.near},far:{value:i.far},waterTint:{value:new Te(1992053)}};let l=new Et({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv; uniform sampler2D sceneColor; uniform sampler2D sceneDepth;
        uniform vec2 texel; uniform float time, motion, speed, rush, hurt, near, far; uniform vec3 waterTint;
        vec3 bright(vec2 uv){vec3 c=texture2D(sceneColor,clamp(uv,vec2(.001),vec2(.999))).rgb;return max(vec3(0.),c-vec3(1.15));}
        void main(){
          vec2 wave=vec2(sin(vUv.y*21.+time*1.2),cos(vUv.x*19.-time*.9));
          float edge=smoothstep(0.,.15,min(min(vUv.x,1.-vUv.x),min(vUv.y,1.-vUv.y)));
          vec2 uv=clamp(vUv+wave*(.00055+speed*.0005)*edge*motion,vec2(.001),vec2(.999));
          vec3 c=texture2D(sceneColor,uv).rgb;
          float raw=texture2D(sceneDepth,uv).r;
          float depth=near*far/(far-raw*(far-near));
          float distanceFade=clamp((depth-10.)/100.,0.,1.);
          c*=exp(-vec3(.36,.065,.018)*distanceFade);
          c=mix(c,waterTint*.65,distanceFade*.055);
          vec2 spread=texel*3.;
          vec3 glow=(bright(uv+vec2(spread.x,0.))+bright(uv-vec2(spread.x,0.))+bright(uv+vec2(0.,spread.y))+bright(uv-vec2(0.,spread.y)))*.25;
          c+=glow*.11;
          float vignette=smoothstep(.3,.8,length((vUv-.5)*vec2(1.,.83)));
          c*=1.-vignette*.18;
          c+=vec3(.16,.07,.005)*rush*vignette;
          c=mix(c,vec3(.55,.07,.025),hurt*vignette*.3);
          gl_FragColor=vec4(c,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.screen=new zn,this.screen.add(new tt(new $t(2,2),l)),this.screenCamera=new En,e.info.autoReset=!1}render(){let e=this.renderer;e.getDrawingBufferSize(this.size),(this.target.width!==this.size.x||this.target.height!==this.size.y)&&(this.target.setSize(this.size.x,this.size.y),this.uniforms.texel.value.set(1/this.size.x,1/this.size.y)),e.info.reset(),e.setRenderTarget(this.target),e.render(this.scene,this.camera),e.setRenderTarget(null),e.render(this.screen,this.screenCamera)}},Ko=class{constructor(e){this.history=[],this.meshes=[-1,1].map(t=>{let i=new Je,r=new Float32Array(144),s=[];for(let o=0;o<23;o++){let h=o*2;s.push(h,h+1,h+2,h+1,h+3,h+2)}i.setAttribute("position",new wt(r,3)),i.setIndex(s);let a=[];for(let o=0;o<24;o++)a.push(0,o/23,1,o/23);i.setAttribute("uv",new we(a,2));let l=new Et({transparent:!0,depthWrite:!1,side:ht,blending:Fr,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float a=sin(vUv.x*3.14159)*pow(1.-vUv.y,2.)*.22;gl_FragColor=vec4(.55,.85,.82,a);}"}),c=new tt(i,l);return c.frustumCulled=!1,e.add(c),{mesh:c,data:r,side:t}}),this.clock=0}reset(){this.history=[],this.meshes.forEach(({mesh:e})=>e.visible=!1)}update(e,t,i,r,s,a){if(this.meshes.forEach(({mesh:l})=>l.visible=s&&!a&&this.history.length>1),!(!s||a)){for(let l of this.history)l.z+=i*.84,l.y+=e*.12;this.clock-=e,this.clock<=0&&(this.history.unshift(t.clone().add(new w(0,0,1))),this.history.length=Math.min(24,this.history.length),this.clock=.035);for(let{mesh:l,data:c,side:o}of this.meshes){for(let h=0;h<24;h++){let p=this.history[Math.min(h,this.history.length-1)];if(!p)continue;let d=p.x+o*(.34+h*.018)+Math.sin(r*4-h*.5)*h*.003,u=.035+h*.003;c.set([d-u,p.y,p.z,d+u,p.y+.014,p.z],h*6)}l.geometry.attributes.position.needsUpdate=!0}}}};var Hs=n=>["shark","guardian","jelly"].includes(n),Ch=["chest","magnet","gate","frenzy","jelly"],Ws=[{at:55,kind:"magnet",title:"\u0645\u063A\u0646\u0627\u0637\u064A\u0633 \u0627\u0644\u0644\u0622\u0644\u0626 \xB7 \u0627\u0642\u062A\u0631\u0628 \u0645\u0646 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0623\u0632\u0631\u0642"},{at:115,kind:"treasure",title:"\u0643\u0646\u0632 \u0628\u064A\u0646 \u0627\u0644\u0634\u0639\u0627\u0628 \xB7 \u0645\u0643\u0627\u0641\u0623\u0629 \u0645\u062E\u0628\u0651\u0623\u0629 \u0641\u064A \u0627\u0644\u0635\u0646\u062F\u0648\u0642"},{at:205,kind:"current",title:"\u0645\u0645\u0631 \u0627\u0644\u062A\u064A\u0627\u0631 \xB7 \u0627\u0639\u0628\u0631 \u0627\u0644\u062D\u0644\u0642\u0627\u062A \u0644\u062A\u0646\u062F\u0641\u0639 \u0648\u062A\u0643\u0633\u0628 \u0646\u0642\u0627\u0637\u0627\u064B"},{at:295,kind:"whale",title:"\u0632\u0627\u0626\u0631 \u0645\u0646 \u0627\u0644\u0623\u0639\u0645\u0627\u0642 \xB7 \u0627\u0646\u0638\u0631 \u0625\u0644\u0649 \u0627\u0644\u062D\u0648\u062A \u0641\u0648\u0642 \u0627\u0644\u0648\u0627\u062F\u064A"},{at:345,kind:"frenzy",title:"\u0644\u0624\u0644\u0624\u0629 \u0627\u0644\u0634\u0645\u0633 \xB7 \u062B\u0645\u0627\u0646\u064A \u062B\u0648\u0627\u0646\u064D \u0645\u0646 \u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A \u0627\u0644\u0645\u0636\u0627\u0639\u0641\u0629"},{at:500,kind:"jellies",title:"\u0631\u0642\u0635\u0629 \u0627\u0644\u0642\u0646\u0627\u062F\u064A\u0644 \xB7 \u0627\u0644\u0641\u062C\u0648\u0627\u062A \u0622\u0645\u0646\u0629\u060C \u0627\u0644\u0644\u0648\u0627\u0645\u0633 \u0644\u064A\u0633\u062A \u0643\u0630\u0644\u0643"},{at:595,kind:"treasure",title:"\u0635\u0646\u062F\u0648\u0642 \u0623\u062E\u064A\u0631 \xB7 \u0642\u062F \u064A\u0639\u064A\u062F \u0644\u0643 \u0642\u0644\u0628\u0627\u064B \u0623\u0648 \u064A\u0645\u0646\u062D\u0643 \u062B\u0631\u0648\u0629"},{at:670,kind:"current",title:"\u062A\u064A\u0627\u0631 \u0627\u0644\u0639\u0648\u062F\u0629 \xB7 \u0627\u062A\u0628\u0639 \u0627\u0644\u0636\u0648\u0621 \u062D\u062A\u0649 \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0631\u062D\u0644\u0629"}],$o=class{constructor(e){this.scene=e;let t=(s,a={})=>new Tn({color:s,roughness:.45,...a});this.materials={wood:t(6240549,{roughness:.85}),metal:t(13540421,{metalness:.65,roughness:.28}),glow:t(15908961,{emissive:14258473,emissiveIntensity:1.8,metalness:.25}),cyan:t(5494478,{emissive:2596282,emissiveIntensity:1.4,metalness:.25}),white:t(14347744),bell:t(12289733,{transparent:!0,opacity:.38,side:ht,depthWrite:!1}),jelly:t(15052241,{emissive:11877279,emissiveIntensity:1.5}),whale:t(2313056,{roughness:.4}),belly:t(9152169,{roughness:.65}),eye:t(465184,{roughness:.12}),halo:new Jt({color:9497303,transparent:!0,opacity:.2,depthWrite:!1})},this.geometries={cube:new rn(1,1,1),ball:new ui(1,20,14),lid:new sn(.6,.6,1.75,18,1,!1,0,Math.PI),magnet:new Oi(.55,.13,8,28,Math.PI*1.5),ring:new Oi(2,.055,8,64),sun:new Rr(.7),bell:new ui(1,22,14,0,Math.PI*2,0,Math.PI/2)};let i=new Er(Array.from({length:7},(s,a)=>new w(Math.sin(a*.8)*.11,-a*.28,Math.cos(a*.7)*.07)));this.geometries.tentacle=new Ir(i,16,.025,5,!1);let r=new an;r.moveTo(0,0),r.bezierCurveTo(-.8,.6,-1.2,2,-2.6,2.6),r.quadraticCurveTo(-1.7,.3,0,0),this.geometries.flipper=new Pr(r,16),this.materials.whale.side=ht,this.whale=this.makeWhale(),e.add(this.whale),this.whale.visible=!1,this.whaleAge=-1}add(e,t,i,r=0,s=0,a=0,l=1,c=l,o=l){let h=new tt(this.geometries[t],this.materials[i]);return h.position.set(r,s,a),h.scale.set(l,c,o),e.add(h),h}create(e){let t=new Rt;if(t.userData.special=!0,e==="chest"){this.add(t,"cube","wood",0,-.15,0,1.8,.85,1.15);let i=this.add(t,"lid","wood",0,.28,0);i.rotation.z=Math.PI/2,i.rotation.x=Math.PI/2;for(let r of[-.65,.65])this.add(t,"cube","metal",r,-.08,0,.12,.95,1.22);this.add(t,"cube","metal",0,-.1,.62,.27,.3,.07),this.add(t,"ball","glow",0,.72,0,.12),t.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)})}else if(e==="magnet"){let i=this.add(t,"magnet","cyan");i.rotation.z=Math.PI*.75;for(let r of[-.39,.39])this.add(t,"cube","white",r,.39,0,.22,.2,.26)}else if(e==="frenzy"){this.add(t,"sun","glow");for(let i=0;i<8;i++){let r=i*Math.PI/4;this.add(t,"ball","glow",Math.cos(r)*1,Math.sin(r)*1,0,.08)}}else if(e==="gate"){this.add(t,"ring","cyan"),this.add(t,"ring","halo",0,0,-.3,1.08);for(let i=0;i<12;i++){let r=i*Math.PI/6;this.add(t,"ball","white",Math.cos(r)*2,Math.sin(r)*2,0,.065)}}else if(e==="jelly"){this.add(t,"bell","bell",0,0,0,1,.68,1),this.add(t,"ball","jelly",0,.12,0,.37,.2,.37);for(let i=0;i<7;i++){let r=i*Math.PI*2/7,s=this.add(t,"tentacle","jelly",Math.cos(r)*.65,0,Math.sin(r)*.65);s.userData.tentacle=i}}return t}animate(e,t,i){if(t==="jelly"){let r=1+Math.sin(i*2.2)*.075;e.scale.set(r,1/r,r),e.children.forEach(s=>{s.userData.tentacle!==void 0&&(s.rotation.z=Math.sin(i*2+s.userData.tentacle)*.12)})}else t==="gate"?e.rotation.z=Math.sin(i*.6)*.06:(e.rotation.y=Math.sin(i*.8)*.28,e.rotation.z=Math.sin(i)*.06)}makeWhale(){let e=new Rt;this.add(e,"ball","whale",0,0,0,5.5,1.15,1.4),this.add(e,"ball","belly",.25,-.55,0,4.6,.62,1.13),this.add(e,"ball","whale",-4.9,0,0,1.8,.36,.42);let t=new Rt;t.position.x=-6,e.add(t);for(let i of[-1,1]){let r=this.add(t,"flipper","whale",0,0,0,.9);r.rotation.x=i*Math.PI/2;let s=this.add(e,"flipper","whale",1,-.45,i*1);s.rotation.x=i*(Math.PI/2+.5),s.scale.set(.9,1,1),this.add(e,"ball","eye",3.7,.15,i*.95,.14)}return e.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0)}),this.add(e,"flipper","whale",-1,1,0,.35,.4,.35),e.userData.tail=t,e}sighting(){this.whaleAge=0,this.whale.visible=!0}reset(){this.whaleAge=-1,this.whale.visible=!1}update(e,t,i){this.whaleAge<0||!i||(this.whaleAge+=e,this.whale.position.set(31-this.whaleAge*5,10.6+Math.sin(t*.7)*.4,-35-this.whaleAge*.35),this.whale.rotation.y=Math.PI,this.whale.rotation.z=Math.sin(t*.5)*.025,this.whale.userData.tail.rotation.x=Math.sin(t*1.8)*.18,this.whaleAge>14&&this.reset())}};var Qo=class{constructor(e,t=!1){this.container=e,this.reduced=t,this.entries=[],this.projected=new w}show(e,t,i=""){if(!e&&!i)return;let r=this.entries.at(-1);if(e>0&&!i&&r?.amount>0&&!r.label&&r.age<.075&&r.position.distanceTo(t)<1.3){r.amount+=e,r.number.textContent="+"+r.amount;return}this.entries.length>=16&&this.entries.shift().element.remove();let s=document.createElement("div");s.className="score-pop "+(e<0?"loss":"gain");let a=document.createElement("b");if(a.dir="ltr",a.textContent=e?(e>0?"+":"")+e:"",s.append(a),i){let l=document.createElement("small");l.textContent=i,s.append(l)}this.container.append(s),this.entries.push({element:s,number:a,amount:e,label:i,position:t.clone(),age:0,offset:(this.entries.length%3-1)*62,lift:this.entries.length%3*42})}update(e,t,i){for(let r=this.entries.length-1;r>=0;r--){let s=this.entries[r];if(i&&(s.age+=e),s.age>1.35){s.element.remove(),this.entries.splice(r,1);continue}this.projected.copy(s.position).project(t);let a=this.projected.z>-1&&this.projected.z<1;s.element.hidden=!a;let l=Math.max(45,Math.min(innerWidth-45,(this.projected.x*.5+.5)*innerWidth+s.offset)),c=this.reduced?0:s.age*43,o=Math.max(105,Math.min(innerHeight-90,(-this.projected.y*.5+.5)*innerHeight-28-c-s.lift)),h=this.reduced?1:1+Math.sin(Math.min(1,s.age/.18)*Math.PI)*.2;s.element.style.transform="translate("+l+"px,"+o+"px) translate(-50%,-50%) scale("+h+")",s.element.style.opacity=Math.min(1,(1.35-s.age)*3)}}clear(){this.entries.forEach(e=>e.element.remove()),this.entries=[]}};var ut=(n,e,t)=>Math.max(e,Math.min(t,n));function Rh(){return{distance:0,score:0,pearls:0,lives:3,combo:0,comboTime:0,shield:0,boost:0,cooldown:0,invulnerable:0,elapsed:0,ended:!1,won:!1,magnet:0,frenzy:0,current:0,charge:0,treasures:0,nearMisses:0}}function pp(n){let e=Number(n.has("ArrowRight")||n.has("KeyD"))-Number(n.has("ArrowLeft")||n.has("KeyA")),t=Number(n.has("ArrowUp")||n.has("KeyW"))-Number(n.has("ArrowDown")||n.has("KeyS")),i=Math.hypot(e,t)||1;return{x:e/i,y:t/i}}function mp(n,e){if(n.ended)return 0;let t=ut(e,0,.05),i=(9+Math.min(n.distance/160,4)+(n.boost>0?13:0)+(n.current>0?5:0))*t;n.distance=Math.min(800,n.distance+i),n.elapsed+=t;for(let r of["boost","cooldown","invulnerable","comboTime","shield","magnet","frenzy","current"])n[r]=Math.max(0,n[r]-t);return n.comboTime||(n.combo=0),n.distance>=800&&(n.ended=!0,n.won=!0),i}function fp(n){return n.ended||n.cooldown>0?!1:(n.boost=.8,n.cooldown=3.6,!0)}function wi(n,e){if(n.ended)return 0;let t=n.score;return n.score=Math.max(0,n.score+Math.round(e)),n.score-t}function gp(n,e){n.frenzy>0||(n.charge+=e,n.charge>=12&&(n.charge=0,n.frenzy=8))}function vp(n,e="pearl"){if(n.ended)return 0;if(e==="shield")return n.shield=9,wi(n,15);if(e==="magnet")return n.magnet=10,wi(n,10);if(e==="gate")return n.current=4,wi(n,15);if(e==="frenzy")return n.frenzy=8,n.charge=0,wi(n,20);if(e!=="pearl"&&e!=="gold")return 0;n.combo=Math.min(5,n.combo+1),n.comboTime=3.5,n.pearls++;let t=wi(n,(e==="gold"?10:5)*n.combo*(n.frenzy>0?2:1));return gp(n,1),t}function _p(n,e=Math.random()){if(n.ended)return{delta:0,reward:null};if(n.treasures++,e<.4)return n.magnet=10,{delta:wi(n,40),reward:"magnet"};if(e<.75){let t=n.lives<3;return n.lives=Math.min(3,n.lives+1),t||(n.shield=9),{delta:wi(n,40),reward:t?"heal":"shield"}}return{delta:wi(n,100),reward:"jackpot"}}function xp(n){return n.ended||n.invulnerable>0||n.boost>0?0:(n.nearMisses++,gp(n,2),wi(n,8))}function yp(n){return n.ended||n.invulnerable>0?"immune":n.boost>0?(wi(n,25),"defeated"):n.shield>0?(n.shield=0,n.invulnerable=1.2,"shield"):(wi(n,-3),n.lives--,n.combo=0,n.invulnerable=2,n.lives<=0&&(n.ended=!0),"hurt")}function Mp(n,e,t,i){let r=ut(n.z,Math.min(i,e.z),Math.max(i,e.z));return(n.x-e.x)**2+(n.y-e.y)**2+(n.z-r)**2<t**2}var ge=n=>document.getElementById(n),Ei=ge("ocean"),Hi=matchMedia("(prefers-reduced-motion: reduce)").matches,jr=matchMedia("(pointer: coarse)").matches,Lh={reef:{name:"\u062D\u062F\u0627\u0626\u0642 \u0627\u0644\u0645\u0631\u062C\u0627\u0646",water:1200490,sky:12051928,sand:13351829,rock:6520434,coral:[14583145,13131616,15053436,6459281],kelp:4750690,fog:.019,light:3.8},kelp:{name:"\u063A\u0627\u0628\u0629 \u0627\u0644\u0645\u062F\u0651",water:2445129,sky:14476467,sand:9606765,rock:5596237,coral:[11766370,9411667,7899989,12430457],kelp:8690510,fog:.023,light:3.1},abyss:{name:"\u0628\u062D\u0631 \u0627\u0644\u0644\u064A\u0644",water:334644,sky:6396110,sand:3426912,rock:3490142,coral:[9070519,6989249,5222043,10844319],kelp:3696781,fog:.023,light:1.8}},Vt="reef",bt="menu",fe=Rh(),gt=0,Ys=0,Dh=0,Ks=0,il=0,Uh=18,Nh=!1,vt=new Zo,Wi,$s,al,Rn,Cn,Qs=0,Pp=0,Zs=0,Wr=new w,Xs=new w,Ip=[],qr=0;try{qr=Math.max(0,Number(localStorage.getItem("amaq-best"))||0)}catch{}ge("best").textContent=qr;var Kn=new Set,kt={x:0,y:0,id:null},mi={x:0,y:0,active:!1},Ke=new w(0,4.4,0),Qt=new w,bp=new w,Nt,nt,ii,ei,ea,Tp,Fh,ki,cn,Oh,ta=[],Bh=[],ni=[],$n=[],Qn=[],Xr=new yt,Lp=new Te,wp=new w,Yr={time:{value:0},flow:{value:0}},Js=new ui(1,18,12),el=new ui(1,8,6),Zr=new bn(1,jr?2:3),lg=new sn(.65,1,1,6),Dp=new bn(.3,2),Wh=new Oi(1,.025,5,40),cg=new bn(.07,1),ra=new $t(.12,1,1,5);ra.translate(0,.5,0);for(let n=0;n<ra.attributes.position.count;n++){let e=ra.attributes.position,t=e.getY(n);e.setX(n,e.getX(n)*(1-t)+Math.sin(t*1.8)*.17),e.setZ(n,t*t*.14)}ra.computeVertexNormals();for(let n=0;n<Zr.attributes.position.count;n++){let e=Zr.attributes.position,t=e.getX(n),i=e.getY(n),r=e.getZ(n),s=1+.075*Math.sin(t*9+i*3)*Math.cos(r*7)+.035*Math.sin(i*15);e.setXYZ(n,t*s,i*s,r*s)}Zr.computeVertexNormals();var zh=new Map,ia=Zr.attributes.position,nl=Zr.attributes.normal,Up=n=>[ia.getX(n),ia.getY(n),ia.getZ(n)].map(e=>e.toFixed(4)).join(",");for(let n=0;n<ia.count;n++){let e=Up(n),t=zh.get(e)||new w;t.add(new w(nl.getX(n),nl.getY(n),nl.getZ(n))),zh.set(e,t)}for(let n=0;n<ia.count;n++){let e=zh.get(Up(n)).clone().normalize();nl.setXYZ(n,e.x,e.y,e.z)}var Be={},Gt=(n,e=.5,t={})=>new Tn({color:n,roughness:e,...t});function Ci(n,e,t,i=0,r=0,s=0,a=1,l=a,c=a){let o=new tt(n,e);return o.position.set(i,r,s),o.scale.set(a,l,c),t.add(o),o}function tl(n,e,t,i=.045){let r=new an,s=n[0],a=n[n.length-1];r.moveTo((s[0]+a[0])/2,(s[1]+a[1])/2),n.forEach(([c,o],h)=>{let p=n[(h+1)%n.length];r.quadraticCurveTo(c,o,(c+p[0])/2,(o+p[1])/2)}),r.closePath();let l=new Cr(r,{depth:i,bevelEnabled:!0,bevelSize:.025,bevelThickness:.02,bevelSegments:1,steps:1});return l.translate(0,0,-i/2),Ci(l,e,t)}function Gh(n=!1,e=!1){let t=new Rt,i=n?Be.shark:Be.hero,r=n?Be.sharkFin:Be.fin,s=new ui(1,e?16:40,e?10:24),a=s.attributes.position;for(let d=0;d<a.count;d++){let u=a.getX(d),f=a.getY(d),m=a.getZ(d),_=.48+.52*((u+1)/2);a.setXYZ(d,u*(n?1.75:1.2),f*(n?.56:.68)*_,m*(n?.48:.4)*_)}s.computeVertexNormals();let l=[];for(let d=0;d<a.count;d++){let u=a.getY(d),f=a.getX(d),m=n?new Te(u<-.1?13751752:6720151):new Te(u<-.13?16047520:u>.25?16761452:15899214);!n&&f<.25&&u>-.1&&m.multiplyScalar(.9+.1*Math.sin(f*24+u*6)),l.push(m.r,m.g,m.b)}s.setAttribute("color",new we(l,3));let c=Ci(s,i,t);c.castShadow=!e||n,c.receiveShadow=!0;let o=null,h=new Rt;h.position.x=n?-1.55:-1.04,t.add(h),tl(n?[[0,0],[-.85,1],[-.65,.05],[-.85,-.7],[-.18,-.24]]:[[0,0],[-.77,.77],[-.65,.08],[-.77,-.77],[-.08,-.14]],r,h);let p=tl(n?[[.55,.28],[-.22,1.18],[-.75,.24]]:[[.65,.35],[.12,.95],[-.67,.33]],r,t);for(let d of e&&!n?[]:[-1,1]){let u=tl([[.2,0],[-.67,.5],[-.48,-.13]],r,t);if(u.position.set(.03,-.15,d*.28),u.rotation.x=d*1.2,u.name="pectoral",Ci(Js,Be.eyeRim,t,n?1.06:.7,.15,d*(n?.31:.27),.17,.19,.065),Ci(Js,Be.eye,t,n?1.085:.72,.16,d*(n?.365:.32),.1,.12,.037),Ci(Js,Be.glint,t,n?1.11:.747,.195,d*(n?.398:.35),.027),!e)for(let f=0;f<3;f++){let m=Ci(new Oi(n?.28:.25,.013,4,18,1.4),n?Be.sharkFin:Be.fin,t,.39-f*.1,-.015,d*.32);m.rotation.z=2.4,m.scale.set(.47,1,.5)}}if(!n&&!e){for(let d=0;d<3;d++)for(let u=0;u<7;u++)for(let f of[-1,1]){let m=-.62+u*.15,_=.14+d*.105;Ci(Js,Be.scale,t,m,_,f*(.245-Math.abs(m)*.1-d*.03),.058,.025,.018)}tl([[-.05,-.22],[-.38,-.74],[-.74,-.22]],r,t)}return t.userData={tail:h,body:c,belly:o,dorsal:p,phase:Math.random()*6.28,small:e},t}function Ph(n,e,t=1){let i=n.userData;if(i.tail){i.tail.rotation.y=Math.sin(e*9*t+i.phase)*.48,i.body.rotation.y=Math.sin(e*9*t+i.phase-1)*.045,i.dorsal.rotation.x=Math.sin(e*4+i.phase)*.08;for(let r of n.children)r.name==="pectoral"&&(r.rotation.z=Math.sin(e*7+i.phase)*.15)}}function Jn(n,e,t,i){if(!t.length)return;let r=new _s(n,e,t.length);return t.forEach((s,a)=>{Xr.position.set(...s.p),Xr.rotation.set(...s.r||[0,0,0]),Xr.scale.set(...s.s),s.q&&Xr.quaternion.copy(s.q),Xr.updateMatrix(),r.setMatrixAt(a,Xr.matrix),s.c!==void 0&&r.setColorAt(a,Lp.set(s.c))}),r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),r.receiveShadow=!0,i.add(r),r}function js(n,e,t,i,r){let s=new w().subVectors(t,e);n.push({p:e.clone().add(t).multiplyScalar(.5).toArray(),s:[i,s.length(),i],q:new Wt().setFromUnitVectors(new w(0,1,0),s.normalize()),c:r})}function hg(n){let e=new Rt;e.position.z=-n*30,nt.add(e);let t=[],i=[],r=[],s=[],a=[],l=[],c=[],o=Lh[Vt];for(let p=0;p<20;p++){let d=p%2?1:-1,u=d*(9+Math.random()*15),f=-Math.random()*30,m=1.5+Math.random()*5;t.push({p:[u,m*.24-1,f],s:[2+Math.random()*3,m,2+Math.random()*3],r:[Math.random(),Math.random()*6,Math.random()*.6],c:Lp.set(o.rock).offsetHSL(0,0,Math.random()*.09-.04).getHex()})}for(let p=0;p<16;p++){let d=(p%2?1:-1)*(7.8+Math.random()*12),u=-Math.random()*30,f=o.coral[p%4],m=.8+Math.random()*2.5;if(Vt==="kelp"||p%4===0){let _=Vt==="kelp"?5+Math.random()*7:m+1;for(let g=0;g<6;g++){let v=g*_/6,x=d+Math.sin(g*.85+p)*.35;js(i,new w(x,v,u),new w(d+Math.sin((g+1)*.85+p)*.35,v+_/6,u),.07,o.kelp);for(let S of[-1,1])a.push({p:[x+S*.45,v+.4,u],s:[.85,.1,.28],r:[.1,Math.sin(g+p),S*.6],c:o.kelp})}}else if(p%3===0){for(let _=0;_<5;_++)s.push({p:[d+Math.sin(_)*.4,.4+_*.3,u+Math.cos(_)*.35],s:[1.3-_*.16,.12,1.2-_*.12],r:[.04*_,0,.09],c:f});js(i,new w(d,0,u),new w(d,m*.5,u),.24,f)}else{let _=new w(d,m,u);js(i,new w(d,0,u),_,.14,f);for(let g=0;g<5;g++){let v=new w(d+Math.sin(g*2.4)*m*.5,m*(.8+Math.random()*.7),u+Math.cos(g*2.4)*m*.4);js(i,new w(d,m*.45,u),v,.095,f);for(let x=0;x<2;x++){let S=v.clone().add(new w((Math.random()-.5)*.55,.25+Math.random()*.35,(Math.random()-.5)*.5));js(i,v,S,.055,f),r.push({p:S.toArray(),s:[.07,.09,.07],c:Vt==="abyss"?12187616:15778976})}}}}for(let p=0;p<140;p++){let d=(Math.random()-.5)*38,u=-Math.random()*30;for(let f=0;f<3;f++)l.push({p:[d+(f-1)*.09,-.66,u+Math.sin(f)*.1],s:[.6+Math.random()*.6,.5+Math.random()*.7,.7],r:[0,Math.random()*Math.PI,(f-1)*.2],c:o.kelp});p%3===0&&c.push({p:[d+.8,-.5,u+.8],s:[.12+Math.random()*.23,.08+Math.random()*.11,.2+Math.random()*.25],r:[0,Math.random()*6,.1],c:o.rock})}Jn(ra,Be.leaf,l,e),Jn(el,Be.rock,c,e),Jn(Zr,Be.rock,t,e).castShadow=!0,Jn(lg,Be.coral,i,e),Jn(el,Be.tip,r,e),Jn(el,Be.coral,s,e);let h=Jn(el,Be.leaf,a,e);return e.userData={vegetation:h},e}function ug(n){n.traverse(e=>{e.isInstancedMesh&&e.dispose()}),nt.remove(n)}function Np(n){if(!Lh[n])return;Vt=n;let e=Lh[Vt];nt.background=new Te(e.water),nt.fog=new ps(e.water,e.fog),ea.color.set(e.sky),ea.groundColor.set(e.rock),ea.intensity=Vt==="abyss"?.85:.78,ei.color.set(Vt==="abyss"?9621486:16772547),ei.intensity=e.light,Be.sand.color.set(e.sand),Be.coral.emissive.set(Vt==="abyss"?2376536:0),Be.tip.emissive.set(Vt==="abyss"?5482406:0),Be.leaf.emissive.set(Vt==="abyss"?1062216:0),Fh.material.uniforms.waterColor.value.set(e.sky),Wi&&Wi.uniforms.waterTint.value.set(e.water),$s&&($s.material.uniforms.tint.value.set(e.sky),$s.material.uniforms.strength.value=Vt==="abyss"?.25:1);for(let t of ta)ug(t);ta=Array.from({length:6},(t,i)=>hg(i)),ge("zone").textContent=e.name,document.documentElement.dataset.world=Vt;for(let t of document.querySelectorAll("[data-world]"))t.tagName==="BUTTON"&&t.setAttribute("aria-pressed",String(t.dataset.world===n))}function dg(){Nt=new jo({canvas:Ei,antialias:!0,powerPreference:"high-performance"}),Nt.setPixelRatio(Math.min(devicePixelRatio,jr?1.35:1.7)),Nt.setSize(innerWidth,innerHeight,!1),Nt.toneMapping=Fs,Nt.toneMappingExposure=1.05,Nt.shadowMap.enabled=!0,Nt.shadowMap.type=kn,nt=new zn,ii=new Lt(53,innerWidth/innerHeight,.1,160),ii.position.set(0,7.3,15),ea=new Us(10544350,5466969,2.1),nt.add(ea),ei=new Dr(16773077,3.4),ei.position.set(-16,26,8),ei.target.position.set(0,0,-20),nt.add(ei,ei.target),ei.castShadow=!0,ei.shadow.mapSize.set(jr?1024:2048,jr?1024:2048),Object.assign(ei.shadow.camera,{left:-25,right:25,top:27,bottom:-27,near:1,far:100}),ei.shadow.bias=-4e-4,ei.shadow.normalBias=.035,ei.shadow.radius=3;let n=new Dr(9426655,.8);n.position.set(7,7,13),nt.add(n),Be.hero=new Is({color:16777215,roughness:.32,metalness:.1,vertexColors:!0,clearcoat:.65,clearcoatRoughness:.24}),Be.fin=Gt(2587520,.35,{side:ht,transparent:!0,opacity:.91}),Be.scale=Gt(16308631,.5),Be.belly=Gt(15327157,.65),Be.shark=Gt(16777215,.48,{metalness:.08,vertexColors:!0}),Be.sharkFin=Gt(3491669,.5,{side:ht}),Be.eyeRim=Gt(14660191,.3),Be.eye=Gt(202012,.13),Be.glint=new Jt({color:16774358}),Be.rock=Gt(16777215,.92),Be.coral=Gt(16777215,.7),Be.tip=Gt(16777215,.6),Be.leaf=Gt(16777215,.8,{side:ht}),Be.sand=Gt(12695954,.96),Be.pearl=Gt(16771253,.22,{emissive:13214303,emissiveIntensity:.65,metalness:.18}),Be.gold=Gt(16761949,.2,{emissive:14256674,emissiveIntensity:.95,metalness:.32}),Be.shield=Gt(7597784,.3,{emissive:4572349,emissiveIntensity:1});for(let i of["hero","shark","rock","coral","leaf","sand","fin"])hp(Be[i],Yr,{sand:i==="sand",skin:i==="hero"||i==="shark",sway:i==="leaf",rock:i==="rock"});let e=new $t(130,220,80,120);e.rotateX(-Math.PI/2);let t=e.attributes.position;for(let i=0;i<t.count;i++){let r=t.getX(i),s=t.getZ(i);t.setY(i,Math.sin(r*.29+s*.11)*.12+Math.sin(s*.45)*.035+Math.max(0,Math.abs(r)-9)*.07)}e.computeVertexNormals(),Tp=Ci(e,Be.sand,nt,0,-.5,-70),Tp.receiveShadow=!0,Fh=up(Yr),nt.add(Fh),$s=dp(nt,Yr),Wi=new Jo(Nt,nt,ii,Yr,Hi,jr),al=new Ko(nt),Rn=new $o(nt),Cn=new Qo(ge("score-feedback"),Hi);for(let i=0;i<3;i++){let r=document.createElement("div");r.className="depth-cue",r.hidden=!0,ge("depth-cues").append(r),Ip.push(r)}cn=new Rt,nt.add(cn),ki=Gh(),cn.add(ki),Oh=Ci(new ui(1.7,22,16),new Jt({color:9763297,transparent:!0,opacity:.1,wireframe:!1,depthWrite:!1}),cn),Oh.visible=!1;for(let i=0;i<22;i++){let r=Gh(!1,!0);r.scale.setScalar(.17+Math.random()*.17),r.position.set((Math.random()-.5)*32,3+Math.random()*8,-15-Math.random()*75),r.rotation.y=Math.random()*6.28,r.userData.base=r.position.clone(),Bh.push(r),nt.add(r)}pg(),Np("reef"),Op(),_g(),ge("start").disabled=!1,ge("start").querySelector("span").textContent="\u0627\u0628\u062F\u0623 \u0627\u0644\u063A\u0648\u0635",document.documentElement.dataset.engine="ready",Nt.setAnimationLoop(vg)}var rl,ti;function pg(){ti=new Float32Array((Hi?90:260)*3);for(let e=0;e<ti.length;e+=3)ti[e]=(Math.random()-.5)*55,ti[e+1]=Math.random()*15,ti[e+2]=15-Math.random()*110;let n=new Je;n.setAttribute("position",new wt(ti,3)),rl=new xs(n,new Tr({color:11856607,size:.048,transparent:!0,opacity:.5,depthWrite:!1})),rl.material.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      float bd=length(gl_PointCoord-vec2(.5));if(bd>.5)discard;diffuseColor.a*=pow(1.-bd*2.,1.3);`)},nt.add(rl)}function ri(n,e,t,i){let r;if(Ch.includes(n))r=Rn.create(n);else if(n==="shark"||n==="guardian")r=Gh(!0,!0),r.rotation.y=-Math.PI/2,r.scale.setScalar(n==="guardian"?1.5:.9);else{r=new Rt,Ci(Dp,Be[n==="pearl"?"pearl":n==="gold"?"gold":"shield"],r,0,0,0,n==="shield"?1.5:1);let s=Ci(Wh,new Jt({color:n==="shield"?7994596:16766608,transparent:!0,opacity:.55}),r,0,0,0,.5);s.rotation.y=.3}return r.position.set(e,t,i),nt.add(r),ni.push({kind:n,mesh:r,baseY:t,phase:Math.random()*6.28,radius:n==="guardian"?2.1:n==="gate"?1.65:n==="jelly"?1.18:n==="shark"?1.15:n==="chest"?1.1:.85,lastZ:i,wakeClock:0,passed:!1}),r}function mg(){let n=Math.floor(fe.distance/18),e=Math.sin(n*1.8)*4.6,t=3.7+Math.sin(n*.8)*2.1;for(let i=0;i<6;i++)ri(i===5?"gold":"pearl",ut(e+Math.sin(i*.55)*1.1,-6,6),ut(t+Math.sin(i*.55)*.6,1.7,9),-49-i*2.5);n>1&&ri("shark",ut(-e+Math.sin(n)*1.2,-6,6),ut(6-t+2,2,8),-61),n>12&&n%2===0&&ri("shark",e*.4,7.7,-72),n%6===4&&ri("shield",e*.3,4.5,-76)}function Fp(n){let e=Math.sin(n.at*.13+Pp)*3.2,t=4.2+Math.cos(n.at*.17)*1.2;if(Ai(n.title),vt.play("discover"),n.kind==="magnet"&&ri("magnet",e,t,-40),n.kind==="treasure"&&ri("chest",e,t,-48),n.kind==="frenzy"&&ri("frenzy",e,t,-45),n.kind==="whale"&&Rn.sighting(),n.kind==="current")for(let i=0;i<3;i++){let r=e+Math.sin(i*.7)*1.2,s=t+i*.22,a=-42-i*11;ri("gate",r,s,a),ri("gold",r,s,a-4)}if(n.kind==="jellies")for(let i=0;i<5;i++)ri("jelly",-5+i*2.5,3.8+i%2*2.6,-48-i%2*8)}function Ep(n){n<=0&&fe.frenzy>0&&(Ai("\u062D\u0645\u0651\u0649 \u0627\u0644\u0644\u0622\u0644\u0626! \u0645\u0643\u0627\u0641\u0622\u062A \u0645\u0636\u0627\u0639\u0641\u0629 \u0644\u0645\u062F\u0629 8 \u062B\u0648\u0627\u0646\u064D"),vt.play("frenzy"))}function fg(){let n=bt==="playing"?ni.filter(e=>(Hs(e.kind)||Ch.includes(e.kind))&&e.mesh.position.z<0&&e.mesh.position.z>-45).sort((e,t)=>t.mesh.position.z-e.mesh.position.z).slice(0,3):[];Ip.forEach((e,t)=>{let i=n[t];if(!i){e.hidden=!0;return}if(Wr.copy(i.mesh.position).add(new w(0,i.kind==="jelly"?1.5:1.2,0)).project(ii),Wr.z>1||Math.abs(Wr.x)>.92||Math.abs(Wr.y)>.76){e.hidden=!0;return}e.hidden=!1,e.className="depth-cue "+(Hs(i.kind)?"danger":"reward");let r={shark:"\u0645\u0641\u062A\u0631\u0633",guardian:"\u0642\u0631\u0634 \u0627\u0644\u0648\u0627\u062F\u064A",jelly:"\u0642\u0646\u062F\u064A\u0644",chest:"\u0643\u0646\u0632",magnet:"\u0645\u063A\u0646\u0627\u0637\u064A\u0633",gate:"\u062A\u064A\u0627\u0631",frenzy:"\u062D\u0645\u0651\u0649 \u0627\u0644\u0644\u0622\u0644\u0626"}[i.kind];e.textContent=r+" \xB7 "+Math.ceil(-i.mesh.position.z)+" \u0645",e.style.transform="translate("+(Wr.x*.5+.5)*innerWidth+"px,"+(-Wr.y*.5+.5)*innerHeight+"px) translate(-50%,-100%)",e.classList.toggle("near",i.mesh.position.z>-10)})}function Vh(){Wi.render()}function na(n){nt.remove(n.mesh),!n.mesh.userData.special&&n.mesh.traverse(e=>{e.isMesh&&([Js,Dp,Wh].includes(e.geometry)||e.geometry.dispose(),e.material.isMeshBasicMaterial&&e.material!==Be.glint&&e.material.dispose())})}function kh(n,e=!1,t=1){if($n.length>52||Hi)return;let i=new tt(Wh,new Jt({color:e?14780537:12381410,transparent:!0,opacity:e?.18:.12,depthWrite:!1}));i.position.copy(n),i.position.z+=e?-1.4:1.3,i.scale.set(t*.45,t*.32,1),e&&(i.rotation.z=Math.random()*3),nt.add(i),$n.push({mesh:i,life:1,max:1,hostile:e,size:t})}function Ap(n,e){for(let t=0;t<(Hi?5:12)&&!(Qn.length>=100);t++){let i=new tt(cg,new Jt({color:e,transparent:!0}));i.position.copy(n),nt.add(i),Qn.push({mesh:i,life:.7,v:new w((Math.random()-.5)*5,(Math.random()-.5)*5,(Math.random()-.5)*5)})}}function Ai(n){ge("toast").textContent=n,ge("toast").classList.add("visible"),Ks=3.2}function sl(){let n=vt.snapshot(),e=n.supported?n.enabled?"\u0643\u062A\u0645 \u0627\u0644\u0635\u0648\u062A":"\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0635\u0648\u062A":"\u0627\u0644\u0635\u0648\u062A \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u062A\u0635\u0641\u062D";ge("sound").setAttribute("aria-pressed",String(n.enabled)),ge("sound").setAttribute("aria-label",e),ge("sound").title=e,ge("sound").disabled=!n.supported,ge("volume").disabled=!n.supported,ge("volume").value=Math.round(n.volume*100),ge("volume").setAttribute("aria-valuetext",n.muted?"\u0645\u0643\u062A\u0648\u0645":Math.round(n.volume*100)+"\u066A")}function gg(){if(bt==="paused"){hn("playing"),Ei.focus();return}vt.stopVoices(),Cn.clear(),al.reset(),Rn.reset(),Qs=0,Pp=Math.random()*6.28,Zs=0,ni.forEach(na),ni=[];for(let n of[...$n,...Qn])nt.remove(n.mesh),n.mesh.material.dispose();$n=[],Qn=[],fe=Rh(),Ke.set(0,4.4,0),Qt.set(0,0,0),Ys=0,Uh=18,Nh=!1,il=0,Kn.clear(),mi.active=!1,kt.x=kt.y=0;for(let n=0;n<8;n++)ri(n===7?"gold":"pearl",Math.sin(n*.5)*1.3,4.4,-8-n*2.5);hn("playing"),Ei.focus(),Ai(jr?"\u0627\u0633\u062D\u0628 \u062F\u0627\u0626\u0631\u0629 \u0627\u0644\u0633\u0628\u0627\u062D\u0629 \xB7 \u0632\u0631 \u0627\u0644\u0627\u0646\u062F\u0641\u0627\u0639 \u064A\u062D\u0645\u064A\u0643 \u0645\u0646 \u0627\u0644\u0645\u0641\u062A\u0631\u0633\u0627\u062A":"\u0627\u0644\u0623\u0633\u0647\u0645 \u0644\u0644\u0633\u0628\u0627\u062D\u0629 \xB7 Space \u0644\u0644\u0627\u0646\u062F\u0641\u0627\u0639 \u0639\u0628\u0631 \u0627\u0644\u0645\u0641\u062A\u0631\u0633\u0627\u062A"),vt.play("start")}function hn(n){if(vt.setMode(n),sl(),n==="ended"&&vt.play(fe.won?"win":"lose"),bt=n,document.documentElement.dataset.mode=n,Kn.clear(),mi.active=!1,kt.x=kt.y=0,ge("toast").classList.remove("visible"),Ks=0,ge("menu").hidden=n==="playing",ge("hud").hidden=n==="menu",ge("worlds").hidden=n!=="menu",ge("home").hidden=n==="menu"||n==="playing",ge("results").hidden=n!=="ended",ge("pause").setAttribute("aria-label",n==="paused"?"\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0631\u062D\u0644\u0629":"\u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A"),n==="playing"&&Ei.focus(),n==="paused")ge("heading").textContent="\u062E\u0630 \u0646\u064E\u0641\u064E\u0633\u0627\u064B.",ge("description").textContent="\u0627\u0644\u0628\u062D\u0631 \u064A\u0646\u062A\u0638\u0631\u0643. \u062A\u0627\u0628\u0639 \u0631\u062D\u0644\u062A\u0643 \u062D\u064A\u0646 \u062A\u0643\u0648\u0646 \u0645\u0633\u062A\u0639\u062F\u0627\u064B.",ge("start").querySelector("span").textContent="\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0631\u062D\u0644\u0629",ge("start").focus();else if(n==="menu")ge("heading").innerHTML="\u0639\u0627\u0644\u0645\u064C \u0622\u062E\u0631<br><em>\u062A\u062D\u062A \u0627\u0644\u0633\u0637\u062D.</em>",ge("description").innerHTML="\u0628\u064A\u0646 \u0627\u0644\u0636\u0648\u0621 \u0648\u0627\u0644\u0645\u0631\u062C\u0627\u0646\u060C \u062A\u0628\u062F\u0623 \u0631\u062D\u0644\u062A\u0643.<br>\u0627\u0633\u0628\u062D \u0645\u0639 \u0627\u0644\u062A\u064A\u0627\u0631\u060C \u0627\u062C\u0645\u0639 \u0627\u0644\u0644\u0622\u0644\u0626\u060C \u0648\u0627\u0643\u062A\u0634\u0641 \u0645\u0627 \u062A\u062E\u0628\u0651\u0626\u0647 \u0627\u0644\u0623\u0639\u0645\u0627\u0642.",ge("start").querySelector("span").textContent="\u0627\u0628\u062F\u0623 \u0627\u0644\u063A\u0648\u0635",ni.forEach(na),ni=[],Cn.clear(),al.reset(),Rn.reset();else if(n==="ended"){qr=Math.max(qr,fe.score);try{localStorage.setItem("amaq-best",String(qr))}catch{}ge("best").textContent=qr,ge("heading").textContent=fe.won?"\u0648\u0635\u0644\u062A \u0625\u0644\u0649 \u0627\u0644\u0646\u0648\u0631.":"\u0627\u0644\u0628\u062D\u0631 \u0644\u0647 \u0623\u0633\u0631\u0627\u0631\u0647.",ge("description").textContent=fe.won?"\u0639\u0628\u0631\u062A \u0627\u0644\u0648\u0627\u062F\u064A \u0628\u0633\u0644\u0627\u0645. \u0648\u062C\u0647\u0629 \u0623\u062E\u0631\u0649 \u062A\u0646\u062A\u0638\u0631 \u0627\u0643\u062A\u0634\u0627\u0641\u0643.":"\u0631\u062D\u0644\u0629 \u0623\u062E\u0631\u0649\u060C \u0648\u0641\u0631\u0635\u0629 \u0644\u062A\u0633\u0628\u062D \u0623\u0628\u0639\u062F. \u0627\u0644\u0627\u0646\u062F\u0641\u0627\u0639 \u064A\u062D\u0645\u064A\u0643 \u0645\u0646 \u0627\u0644\u0645\u0641\u062A\u0631\u0633\u0627\u062A.",ge("results").innerHTML="<span><b>"+fe.score+"</b>\u0646\u0642\u0637\u0629</span><span><b>"+Math.floor(fe.distance)+"</b>\u0645\u062A\u0631</span><span><b>"+fe.pearls+"</b>\u0644\u0624\u0644\u0624\u0629</span>",ge("start").querySelector("span").textContent="\u063A\u064F\u0635 \u0645\u0646 \u062C\u062F\u064A\u062F",ge("start").focus()}}function Cp(){bt==="playing"?hn("paused"):bt==="paused"&&hn("playing")}function Rp(){bt==="playing"&&fp(fe)&&(kh(Ke,!1,1.8),vt.play("dash"))}function Hh(n){let e=bt==="playing",t=e?mp(fe,n):bt==="menu"?n*1.2:0;Ys+=t,(bt==="menu"||e)&&(gt+=n),Yr.time.value=gt,Yr.flow.value=Ys;for(let o=0;o<ta.length;o++){ta[o].position.z=((Ys-o*30+150)%180+180)%180-150;let h=ta[o].userData.vegetation;h&&!Hi&&(h.rotation.z=Math.sin(gt*.7+o)*.018)}for(let o=0;o<Bh.length;o++){let h=Bh[o],p=h.userData.base;h.position.x=p.x+Math.sin(gt*.21+o)*3,h.position.y=p.y+Math.sin(gt*.6+o)*.35,h.position.z=((p.z+Ys*.5+100)%115+115)%115-100,h.rotation.y=Math.PI/2+Math.cos(gt*.21+o)*.4,Ph(h,gt,1.1)}for(let o=0;o<ti.length;o+=3)(bt==="menu"||e)&&(ti[o+1]+=n*.1,ti[o+2]+=t),ti[o+2]>15&&(ti[o+2]=-95),ti[o+1]>15&&(ti[o+1]=0);if(rl.geometry.attributes.position.needsUpdate=!0,e){let o=pp(Kn),h=o.x+kt.x,p=o.y+kt.y;for(!h&&!p&&mi.active&&(h=ut((mi.x-Ke.x)*1.7,-1,1),p=ut((mi.y-Ke.y)*1.7,-1,1)),Qt.x=zi.damp(Qt.x,ut(h,-1,1)*8,7,n),Qt.y=zi.damp(Qt.y,ut(p,-1,1)*7,7,n),Ke.x=ut(Ke.x+Qt.x*n,-6.3,6.3),Ke.y=ut(Ke.y+Qt.y*n,1.6,10),fe.distance>=Uh&&(mg(),Uh+=18);Qs<Ws.length&&fe.distance>=Ws[Qs].at;)Fp(Ws[Qs++]);fe.distance>405&&!Nh&&(ri("guardian",0,4.6,-85),Nh=!0,vt.play("guardian"),Ai("\u0642\u0631\u0634 \u0627\u0644\u0648\u0627\u062F\u064A \u0623\u0645\u0627\u0645\u0643 \xB7 \u062A\u0641\u0627\u062F\u064E\u0647 \u0623\u0648 \u0627\u0646\u062F\u0641\u0639 \u0639\u0628\u0631\u0647")),fe.distance>670&&fe.distance-t<=670&&Ai("\u0636\u0648\u0621 \u0627\u0644\u0645\u062E\u0631\u062C \u0642\u0631\u064A\u0628 \xB7 \u0648\u0627\u0635\u0644 \u0627\u0644\u0633\u0628\u0627\u062D\u0629"),il-=n,il<=0&&(kh(Ke,!1,fe.boost>0?1.7:.8),il=fe.boost>0?.07:.21);for(let u=ni.length-1;u>=0;u--){let f=ni[u],m=f.mesh.position;f.lastZ=m.z;let _=Hs(f.kind);if(m.z+=t+(_&&f.kind!=="jelly"?n*(f.kind==="guardian"?6:4):0),fe.magnet>0&&(f.kind==="pearl"||f.kind==="gold")&&m.z<2&&m.distanceTo(Ke)<9?(f.attracted=!0,m.lerp(Ke,1-Math.exp(-n*7))):(f.attracted&&(f.baseY=m.y,f.attracted=!1),m.y=f.baseY+Math.sin(gt*1.6+f.phase)*.18),f.mesh.userData.special&&Rn.animate(f.mesh,f.kind,gt),_&&f.kind!=="jelly"?(Ph(f.mesh,gt,1.25),f.wakeClock-=n,f.wakeClock<=0&&(kh(m,!0,f.kind==="guardian"?2:1.2),f.wakeClock=.35)):f.mesh.userData.special||(f.mesh.rotation.y+=n*.7,f.mesh.rotation.z=Math.sin(gt+f.phase)*.16),Xs.copy(m),f.kind==="jelly"&&(Xs.y-=.45),Mp(Ke,Xs,f.radius,f.lastZ))if(_){let v=fe.score,x=yp(fe);x!=="immune"&&(Cn.show(fe.score-v,Ke,x==="shield"?"\u062D\u0645\u0627\u064A\u0629":x==="defeated"?"\u0627\u0646\u062F\u0641\u0627\u0639 \u0646\u0627\u062C\u062D":fe.score===v?"\u0623\u064F\u0635\u0628\u062A":""),x==="hurt"&&(Zs=1),Ap(m,x==="hurt"?14849149:11922906),vt.play(x==="shield"?"block":x,{pan:ut((m.x-Ke.x)/8,-1,1)}),x==="shield"&&Ai("\u0627\u0644\u062F\u0631\u0639 \u062D\u0645\u0627\u0643"),x==="defeated"&&Ai(f.kind==="guardian"?"\u062A\u062C\u0627\u0648\u0632\u062A \u0642\u0631\u0634 \u0627\u0644\u0648\u0627\u062F\u064A! +25":"\u0627\u0646\u062F\u0641\u0627\u0639 \u0646\u0627\u062C\u062D +25"),na(f),ni.splice(u,1))}else{let v=fe.frenzy,x,S="";if(f.kind==="chest"){let E=_p(fe);x=E.delta,S={magnet:"\u0643\u0646\u0632 + \u0645\u063A\u0646\u0627\u0637\u064A\u0633",heal:"\u0643\u0646\u0632 + \u0642\u0644\u0628",shield:"\u0643\u0646\u0632 + \u062F\u0631\u0639",jackpot:"\u0627\u0644\u0643\u0646\u0632 \u0627\u0644\u0643\u0628\u064A\u0631!"}[E.reward],Ai(S),vt.play("treasure")}else x=vp(fe,f.kind),S={magnet:"\u0645\u063A\u0646\u0627\u0637\u064A\u0633",gate:"\u062A\u064A\u0627\u0631 \u0633\u0631\u064A\u0639",shield:"\u062F\u0631\u0639",gold:"\u0644\u0624\u0644\u0624\u0629 \u0630\u0647\u0628\u064A\u0629",frenzy:"\u062D\u0645\u0651\u0649 \u0627\u0644\u0644\u0622\u0644\u0626"}[f.kind]||"",vt.play(f.kind,{combo:fe.combo,pan:ut((m.x-Ke.x)/8,-1,1)}),f.kind==="shield"&&Ai("\u062F\u0631\u0639 \u0627\u0644\u0645\u062F\u0651 \xB7 \u062D\u0645\u0627\u064A\u0629 \u0644\u0645\u062F\u0629 9 \u062B\u0648\u0627\u0646\u064D"),f.kind==="magnet"&&Ai("\u0645\u063A\u0646\u0627\u0637\u064A\u0633 \u0646\u0634\u0637 \xB7 \u0627\u0644\u0644\u0622\u0644\u0626 \u0627\u0644\u0642\u0631\u064A\u0628\u0629 \u062A\u0646\u062C\u0630\u0628 \u0625\u0644\u064A\u0643");Cn.show(x,Ke,S),Ap(m,f.kind==="shield"||f.kind==="magnet"?8973779:16110732),Ep(v),na(f),ni.splice(u,1)}else if(m.z>14)na(f),ni.splice(u,1);else if(_&&!f.passed&&f.lastZ<1.5&&m.z>=1.5){f.passed=!0;let v=Math.hypot(Ke.x-Xs.x,Ke.y-Xs.y);if(v>f.radius&&v<f.radius+1.05){let x=fe.frenzy,S=xp(fe);S&&(Cn.show(S,Ke,"\u0645\u0631\u0627\u0648\u063A\u0629 \u0642\u0631\u064A\u0628\u0629"),vt.play("nearMiss"),Ep(x))}}}let d=null;for(let u of ni){if(!Hs(u.kind))continue;let f=u.mesh.position,m=f.x-Ke.x,_=f.y-Ke.y;if(f.z>2||Math.hypot(m,_)>7)continue;let g=Math.hypot(m,_,f.z);(!d||g<d.distance)&&(d={distance:g,x:m})}vt.update({world:Vt,speed:Math.hypot(Qt.x,Qt.y)/9,boosting:fe.boost>0,threat:d}),fe.ended&&hn("ended")}e&&(Zs=Math.max(0,Zs-n*2.4)),Wi.uniforms.hurt.value=Zs,Wi.uniforms.speed.value=fe.boost>0||fe.current>0?1:0,Wi.uniforms.rush.value=zi.damp(Wi.uniforms.rush.value,e&&fe.frenzy>0?1:0,4,n),$s.update(gt),Rn.update(n,gt,e),al.update(n,Ke,t,gt,e,Hi);let i=bt!=="menu",r=innerWidth<700,s=i?Ke:new w(r?0:-4.5,r?7.9:5,0);cn.position.lerp(s,1-Math.exp(-n*5));let a=i?1:r?1.45:2.05;cn.scale.setScalar(zi.damp(cn.scale.x,a,5,n)),ki.rotation.y=zi.damp(ki.rotation.y,i?Math.PI/2-Qt.x*.045:-.42+Math.sin(gt*.24)*.2,5,n),ki.rotation.z=zi.damp(ki.rotation.z,i?Qt.y*.035:Math.sin(gt*.8)*.055,5,n),ki.rotation.x=zi.damp(ki.rotation.x,i?Qt.x*.045:0,5,n),i?e&&!Hi&&(cn.position.y+=Math.sin(gt*2.4)*.015):cn.position.y+=Math.sin(gt*1.2)*.004,Ph(ki,gt,fe.boost>0?1.7:1),Oh.visible=e&&fe.shield>0,ki.visible=!(e&&fe.invulnerable>0&&Math.floor(gt*12)%2===0);for(let o=$n.length-1;o>=0;o--){let h=$n[o];(e||bt==="menu")&&(h.life-=n,h.mesh.position.z+=t*.58,h.mesh.scale.x+=n*.9,h.mesh.scale.y+=n*.55),h.mesh.material.opacity=h.life*(h.hostile?.16:.1),h.life<=0&&(nt.remove(h.mesh),h.mesh.material.dispose(),$n.splice(o,1))}for(let o=Qn.length-1;o>=0;o--){let h=Qn[o];(e||bt==="menu")&&(h.life-=n,h.mesh.position.addScaledVector(h.v,n),h.mesh.position.z+=t*.6),h.mesh.material.opacity=Math.max(0,h.life/.7),h.life<=0&&(nt.remove(h.mesh),h.mesh.material.dispose(),Qn.splice(o,1))}let l=i?Ke.x*.25:0,c=i?6.8+Ke.y*.12:7.4;bp.set(l,c,r?20:14.5),ii.position.lerp(bp,1-Math.exp(-n*(Hi?12:3))),wp.set(i?Ke.x*.22:0,i?Ke.y*.4+2.2:4.4,-13),ii.lookAt(wp),ii.fov=zi.damp(ii.fov,fe.boost>0&&e&&!Hi?60:53,4,n),ii.updateProjectionMatrix(),Cn.update(n,ii,e),fg(),Ks>0&&bt==="playing"&&(Ks-=n,Ks<=0&&ge("toast").classList.remove("visible"))}var Ih=0,qs=0;function vg(n){let e=Math.min((n-Dh)/1e3||.016,.05);Dh=n,Hh(e),Vh(),Ih+=e,Ih>.1&&(Ih=0,ge("score").textContent=fe.score,ge("rush-meter").value=fe.frenzy>0?fe.frenzy/8*12:fe.charge,ge("rush-label").textContent=fe.frenzy>0?"\u062D\u0645\u0651\u0649 \u0627\u0644\u0644\u0622\u0644\u0626 \xD72 \xB7 "+Math.ceil(fe.frenzy)+" \u062B":"\u062D\u0645\u0651\u0649 \u0627\u0644\u0644\u0622\u0644\u0626 \xB7 "+fe.charge+"/"+12,ge("rush-box").classList.toggle("active",fe.frenzy>0),ge("powers").textContent=[fe.magnet>0?"\u0645\u063A\u0646\u0627\u0637\u064A\u0633 "+Math.ceil(fe.magnet)+" \u062B":"",fe.current>0?"\u062A\u064A\u0627\u0631 "+Math.ceil(fe.current)+" \u062B":""].filter(Boolean).join(" \xB7 "),ge("combo").textContent=fe.combo>1?"\xD7"+fe.combo+" \u0633\u0644\u0633\u0644\u0629":"",ge("distance").textContent=Math.floor(fe.distance),ge("progress").value=fe.distance,ge("lives").textContent=Array.from({length:3},(t,i)=>i<fe.lives?"\u25CF":"\u25CB").join(" "),ge("lives").setAttribute("aria-label",fe.lives+" \u0645\u062D\u0627\u0648\u0644\u0627\u062A"),ge("shield").textContent=fe.shield>0?"\u062F\u0631\u0639 \u0627\u0644\u0645\u062F\u0651 "+Math.ceil(fe.shield)+" \u062B":"",ge("energy").value=3.6-fe.cooldown,ge("boost-label").textContent=fe.cooldown>0?"\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0637\u0627\u0642\u0629":"\u0627\u0644\u0627\u0646\u062F\u0641\u0627\u0639 \u062C\u0627\u0647\u0632"),e>.034?qs++:qs=Math.max(0,qs-1),qs>100&&Nt.getPixelRatio()>1&&(Nt.setPixelRatio(1),qs=0)}function Op(){ii.aspect=innerWidth/innerHeight,ii.updateProjectionMatrix(),Nt.setSize(innerWidth,innerHeight,!1)}function _g(){ge("start").onclick=gg,ge("home").onclick=()=>hn("menu"),ge("pause").onclick=Cp,sl(),ge("sound").onclick=()=>{vt.toggle(),sl()},ge("volume").oninput=s=>{vt.setVolume(Number(s.target.value)/100),sl()},ge("volume").addEventListener("focus",()=>{Kn.clear(),mi.active=!1}),ge("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Ai("\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u062A\u0635\u0641\u062D")}},document.querySelectorAll("#worlds button").forEach(s=>s.onclick=()=>Np(s.dataset.world)),addEventListener("resize",Op),addEventListener("keydown",s=>{if(s.code==="Escape"){s.preventDefault(),s.repeat||Cp();return}bt!=="playing"||s.target.closest?.("input,select,textarea")||s.code==="Space"&&s.target.closest?.("button,a")||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyW","KeyA","KeyS","KeyD"].includes(s.code)&&(s.preventDefault(),Kn.add(s.code),mi.active=!1,s.code==="Space"&&!s.repeat&&Rp())}),addEventListener("keyup",s=>Kn.delete(s.code)),addEventListener("blur",()=>{Kn.clear(),bt==="playing"&&hn("paused"),vt.quiet()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(bt==="playing"&&hn("paused"),vt.quiet()),Dh=performance.now()}),addEventListener("pagehide",()=>vt.quiet());let n=s=>{if(bt!=="playing")return;let a=Ei.getBoundingClientRect();mi.x=ut(((s.clientX-a.left)/a.width-.5)*15,-6.3,6.3),mi.y=ut(10-(s.clientY-a.top)/a.height*10,1.6,10),mi.active=!0};Ei.addEventListener("pointerdown",s=>{n(s),Ei.setPointerCapture(s.pointerId)}),Ei.addEventListener("pointermove",s=>{(s.buttons||s.pointerType==="mouse")&&n(s)}),Ei.addEventListener("pointercancel",()=>mi.active=!1);let e=ge("stick"),t=e.querySelector("i"),i=s=>{if(s.pointerId!==kt.id)return;let a=e.getBoundingClientRect();kt.x=ut((s.clientX-a.left-a.width/2)/35,-1,1),kt.y=ut((a.top+a.height/2-s.clientY)/35,-1,1),t.style.transform="translate("+kt.x*24+"px,"+-kt.y*24+"px)"};e.addEventListener("pointerdown",s=>{kt.id=s.pointerId,mi.active=!1,e.setPointerCapture(s.pointerId),i(s)}),e.addEventListener("pointermove",i);let r=()=>{kt.id=null,kt.x=kt.y=0,t.style.transform=""};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("lostpointercapture",r),ge("touch-boost").addEventListener("pointerdown",s=>{s.preventDefault(),Rp()}),Ei.addEventListener("webglcontextlost",s=>{s.preventDefault(),hn("paused"),ge("error").hidden=!1,Nt.setAnimationLoop(null)}),Ei.addEventListener("webglcontextrestored",()=>location.reload()),new URLSearchParams(location.search).has("test")&&(window.__ocean={simulate:s=>{for(let a=0;a<s;a+=.05)Hh(.05);Vh()},snapshot:()=>({mode:bt,world:Vt,audio:vt.snapshot(),feedback:Cn.entries.map(s=>s.element.textContent),encounterIndex:Qs,whale:Rn.whale.visible,renderSize:[Wi.target.width,Wi.target.height],run:{...fe},position:Ke.toArray(),camera:ii.position.toArray(),items:ni.map(s=>({kind:s.kind,p:s.mesh.position.toArray()})),calls:Nt.info.render.calls,triangles:Nt.info.render.triangles,geometries:Nt.info.memory.geometries}),step:s=>{Hh(s),Vh()},place:(s,a)=>{Ke.set(ut(s,-6.3,6.3),ut(a,1.6,10),0),Qt.set(0,0,0)},spawn:(s,a,l,c)=>ri(s,a,l,c),encounter:s=>Fp(Ws.find(a=>a.kind===s)||{kind:s,title:"\u0627\u062E\u062A\u0628\u0627\u0631",at:0})})}try{dg()}catch(n){console.error("Ocean initialization failed",n),ge("error").hidden=!1,ge("start").disabled=!0,document.documentElement.dataset.engine="error"}})();
