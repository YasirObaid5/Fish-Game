(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var _u=0,Ll=1,vu=2;var xs=1,oo=2,Mr=3,Sr=0,Vt=1,Ft=2,Pi=0,ys=1,Ms=2,Dl=3,Nl=4,xu=5;var br=100,yu=101,Mu=102,Su=103,bu=104,Tu=200,wu=201,Eu=202,Au=203,Cu=204,Ru=205,Pu=206,Iu=207,Lu=208,Du=209,Nu=210,Uu=211,Fu=212,Ou=213,Bu=214,Ul=0,Fl=1,Ol=2,lo=3,Bl=4,zl=5,Gl=6,Vl=7,zu=0,Gu=1,Vu=2,xi=0,kl=1,Hl=2,Wl=3,Ss=4,Xl=5,jl=6,ql=7;var Yl=300,Tr=301,Ln=302,co=303,ho=304,bs=306,va=1e3,un=1001,xa=1002,ri=1003,ku=1004;var Ts=1005;var Rt=1006,uo=1007;var Dn=1008;var Jt=1009,Zl=1010,Jl=1011,wr=1012,po=1013,Ji=1014,li=1015,Ii=1016,mo=1017,fo=1018,Er=1020,Kl=35902,$l=35899,Hu=1021,Wu=1022,yi=1023,gn=1026,Nn=1027,go=1028,_o=1029,Un=1030,Ql=1031;var ec=1033,vo=33776,xo=33777,yo=33778,Mo=33779,tc=35840,ic=35841,nc=35842,rc=35843,sc=36196,ac=37492,oc=37496,lc=37488,cc=37489,So=37490,hc=37491,uc=37808,dc=37809,pc=37810,mc=37811,fc=37812,gc=37813,_c=37814,vc=37815,xc=37816,yc=37817,Mc=37818,Sc=37819,bc=37820,Tc=37821,wc=36492,Ec=36494,Ac=36495,Cc=36283,Rc=36284,bo=36285,Pc=36286;var Wr=2300,ya=2301,_a=2302,vl=2303,xl=2400,yl=2401,Ml=2402;var Ic=0,Xu=1,Fn="",Xt="srgb",Xr="srgb-linear",jr="linear",Ye="srgb";var wn=7680;var ju=512,qu=513,Yu=514,To=515,Zu=516,Ju=517,wo=518,Ku=519,Sl=35044;var Lc="300 es",Hi=2e3,cr=2001;function rp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $u(){let n=qr("canvas");return n.style.display="block",n}var Oh={},hr=null;function Dc(...n){let e="THREE."+n.shift();hr?hr("log",e,...n):console.log(e,...n)}function Qu(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Te(...n){let e="THREE."+(n=Qu(n)).shift();if(hr)hr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ee(...n){let e="THREE."+(n=Qu(n)).shift();if(hr)hr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function En(...n){let e=n.join(" ");e in Oh||(Oh[e]=!0,Te(...n))}function ed(n,e,t){return new Promise(function(i,r){setTimeout(function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var td={[Ul]:1,[Ol]:6,[Bl]:7,[lo]:5,[Fl]:0,[Gl]:2,[Vl]:4,[zl]:3},Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bh=1234567,or=Math.PI/180,ur=180/Math.PI;function On(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(wt[255&n]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[255&e]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[63&t|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[255&i]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function ze(n,e,t){return Math.max(e,Math.min(t,n))}function bl(n,e){return(n%e+e)%e}function Vr(n,e,t){return(1-t)*n+t*e}function ar(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ki={DEG2RAD:or,RAD2DEG:ur,generateUUID:On,clamp:ze,euclideanModulo:bl,mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:Vr,damp:function(n,e,t,i){return Vr(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(bl(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(Bh=n);let e=Bh+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*or},radToDeg:function(n){return n*ur},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let s=Math.cos,a=Math.sin,l=s(t/2),c=a(t/2),o=s((e+i)/2),h=a((e+i)/2),p=s((e-i)/2),d=a((e-i)/2),u=s((i-e)/2),f=a((i-e)/2);switch(r){case"XYX":n.set(l*h,c*p,c*d,l*o);break;case"YZY":n.set(c*d,l*h,c*p,l*o);break;case"ZXZ":n.set(c*p,c*d,l*h,l*o);break;case"XZX":n.set(l*h,c*f,c*u,l*o);break;case"YXY":n.set(c*u,l*h,c*f,l*o);break;case"ZYZ":n.set(c*f,c*u,l*h,l*o);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Nt,denormalize:ar},Bc=class Bc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bc.prototype.isVector2=!0;var te=Bc,Gt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,l){let c=i[r+0],o=i[r+1],h=i[r+2],p=i[r+3],d=s[a+0],u=s[a+1],f=s[a+2],m=s[a+3];if(p!==m||c!==d||o!==u||h!==f){let v=c*d+o*u+h*f+p*m;v<0&&(d=-d,u=-u,f=-f,m=-m,v=-v);let g=1-l;if(v<.9995){let _=Math.acos(v),y=Math.sin(_);g=Math.sin(g*_)/y,c=c*g+d*(l=Math.sin(l*_)/y),o=o*g+u*l,h=h*g+f*l,p=p*g+m*l}else{c=c*g+d*l,o=o*g+u*l,h=h*g+f*l,p=p*g+m*l;let _=1/Math.sqrt(c*c+o*o+h*h+p*p);c*=_,o*=_,h*=_,p*=_}}e[t]=c,e[t+1]=o,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){let l=i[r],c=i[r+1],o=i[r+2],h=i[r+3],p=s[a],d=s[a+1],u=s[a+2],f=s[a+3];return e[t]=l*f+h*p+c*u-o*d,e[t+1]=c*f+h*d+o*p-l*u,e[t+2]=o*f+h*u+l*d-c*p,e[t+3]=h*f-l*p-c*d-o*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,o=l(i/2),h=l(r/2),p=l(s/2),d=c(i/2),u=c(r/2),f=c(s/2);switch(a){case"XYZ":this._x=d*h*p+o*u*f,this._y=o*u*p-d*h*f,this._z=o*h*f+d*u*p,this._w=o*h*p-d*u*f;break;case"YXZ":this._x=d*h*p+o*u*f,this._y=o*u*p-d*h*f,this._z=o*h*f-d*u*p,this._w=o*h*p+d*u*f;break;case"ZXY":this._x=d*h*p-o*u*f,this._y=o*u*p+d*h*f,this._z=o*h*f+d*u*p,this._w=o*h*p-d*u*f;break;case"ZYX":this._x=d*h*p-o*u*f,this._y=o*u*p+d*h*f,this._z=o*h*f-d*u*p,this._w=o*h*p+d*u*f;break;case"YZX":this._x=d*h*p+o*u*f,this._y=o*u*p+d*h*f,this._z=o*h*f-d*u*p,this._w=o*h*p-d*u*f;break;case"XZY":this._x=d*h*p-o*u*f,this._y=o*u*p-d*h*f,this._z=o*h*f+d*u*p,this._w=o*h*p+d*u*f;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],l=t[5],c=t[9],o=t[2],h=t[6],p=t[10],d=i+l+p;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(s-o)*u,this._z=(a-r)*u}else if(i>l&&i>p){let u=2*Math.sqrt(1+i-l-p);this._w=(h-c)/u,this._x=.25*u,this._y=(r+a)/u,this._z=(s+o)/u}else if(l>p){let u=2*Math.sqrt(1+l-i-p);this._w=(s-o)/u,this._x=(r+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+p-i-l);this._w=(a-r)/u,this._x=(s+o)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,l=t._x,c=t._y,o=t._z,h=t._w;return this._x=i*h+a*l+r*o-s*c,this._y=r*h+a*c+s*l-i*o,this._z=s*h+a*o+i*c-r*l,this._w=a*h-i*l-r*c-s*o,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,a=-a,l=-l);let c=1-t;if(l<.9995){let o=Math.acos(l),h=Math.sin(o);c=Math.sin(c*o)/h,t=Math.sin(t*o)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zc=class zc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,o=2*(a*r-l*i),h=2*(l*t-s*r),p=2*(s*i-a*t);return this.x=t+c*o+a*p-l*h,this.y=i+c*h+l*o-s*p,this.z=r+c*p+s*h-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zc.prototype.isVector3=!0;var E=zc,Xo=new E,zh=new Gt,Gc=class Gc{constructor(e,t,i,r,s,a,l,c,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,l,c,o)}set(e,t,i,r,s,a,l,c,o){let h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],l=i[3],c=i[6],o=i[1],h=i[4],p=i[7],d=i[2],u=i[5],f=i[8],m=r[0],v=r[3],g=r[6],_=r[1],y=r[4],b=r[7],w=r[2],M=r[5],P=r[8];return s[0]=a*m+l*_+c*w,s[3]=a*v+l*y+c*M,s[6]=a*g+l*b+c*P,s[1]=o*m+h*_+p*w,s[4]=o*v+h*y+p*M,s[7]=o*g+h*b+p*P,s[2]=d*m+u*_+f*w,s[5]=d*v+u*y+f*M,s[8]=d*g+u*b+f*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8];return t*a*h-t*l*o-i*s*h+i*l*c+r*s*o-r*a*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],p=h*a-l*o,d=l*c-h*s,u=o*s-a*c,f=t*p+i*d+r*u;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=p*m,e[1]=(r*o-h*i)*m,e[2]=(l*i-r*a)*m,e[3]=d*m,e[4]=(h*t-r*c)*m,e[5]=(r*s-l*t)*m,e[6]=u*m,e[7]=(i*c-o*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,l){let c=Math.cos(s),o=Math.sin(s);return this.set(i*c,i*o,-i*(c*a+o*l)+a+e,-r*o,r*c,-r*(-o*a+c*l)+l+t,0,0,1),this}scale(e,t){return En("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jo.makeScale(e,t)),this}rotate(e){return En("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jo.makeRotation(-e)),this}translate(e,t){return En("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gc.prototype.isMatrix3=!0;var De=Gc,jo=new De,Gh=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sp(){let n={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Ye&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ye&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?jr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return En("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return En("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xr]:{primaries:e,whitePoint:i,transfer:jr,toXYZ:Gh,fromXYZ:Vh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:Ye,toXYZ:Gh,fromXYZ:Vh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}var He=sp();function ki(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function lr(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var Yn,Ma=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yn===void 0&&(Yn=qr("canvas")),Yn.width=e.width,Yn.height=e.height;let r=Yn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Yn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*ki(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*ki(t[i]/255)):t[i]=ki(t[i]);return{data:t,width:e.width,height:e.height}}return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ap=0,dr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(qo(r[a].image)):s.push(qo(r[a]))}else s=qo(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ma.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var op=0,Yo=new E,zt=class n extends Ri{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,l=1023,c=1009,o=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=On(),this.name="",this.source=new dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yo).x}get height(){return this.source.getSize(Yo).y}get depth(){return this.source.getSize(Yo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i:Te(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null,zt.DEFAULT_MAPPING=Yl,zt.DEFAULT_ANISOTROPY=1;var Vc=class Vc{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,o=c[0],h=c[4],p=c[8],d=c[1],u=c[5],f=c[9],m=c[2],v=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-m)<.01&&Math.abs(f-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+m)<.1&&Math.abs(f+v)<.1&&Math.abs(o+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(o+1)/2,b=(u+1)/2,w=(g+1)/2,M=(h+d)/4,P=(p+m)/4,F=(f+v)/4;return y>b&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=M/i,s=P/i):b>w?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=M/r,s=F/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=P/s,r=F/s),this.set(i,r,s,t),this}let _=Math.sqrt((v-f)*(v-f)+(p-m)*(p-m)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(v-f)/_,this.y=(p-m)/_,this.z=(d-h)/_,this.w=Math.acos((o+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vc.prototype.isVector4=!0;var Je=Vc,Sa=class extends Ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new zt(r),a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new dr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Sa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Yr=class extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ri,this.minFilter=ri,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ri,this.minFilter=ri,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ao=class ao{constructor(e,t,i,r,s,a,l,c,o,h,p,d,u,f,m,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,l,c,o,h,p,d,u,f,m,v)}set(e,t,i,r,s,a,l,c,o,h,p,d,u,f,m,v){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=l,g[13]=c,g[2]=o,g[6]=h,g[10]=p,g[14]=d,g[3]=u,g[7]=f,g[11]=m,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ao().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Zn.setFromMatrixColumn(e,0).length(),s=1/Zn.setFromMatrixColumn(e,1).length(),a=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),o=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let d=a*h,u=a*p,f=l*h,m=l*p;t[0]=c*h,t[4]=-c*p,t[8]=o,t[1]=u+f*o,t[5]=d-m*o,t[9]=-l*c,t[2]=m-d*o,t[6]=f+u*o,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,u=c*p,f=o*h,m=o*p;t[0]=d+m*l,t[4]=f*l-u,t[8]=a*o,t[1]=a*p,t[5]=a*h,t[9]=-l,t[2]=u*l-f,t[6]=m+d*l,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,u=c*p,f=o*h,m=o*p;t[0]=d-m*l,t[4]=-a*p,t[8]=f+u*l,t[1]=u+f*l,t[5]=a*h,t[9]=m-d*l,t[2]=-a*o,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,u=a*p,f=l*h,m=l*p;t[0]=c*h,t[4]=f*o-u,t[8]=d*o+m,t[1]=c*p,t[5]=m*o+d,t[9]=u*o-f,t[2]=-o,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,u=a*o,f=l*c,m=l*o;t[0]=c*h,t[4]=m-d*p,t[8]=f*p+u,t[1]=p,t[5]=a*h,t[9]=-l*h,t[2]=-o*h,t[6]=u*p+f,t[10]=d-m*p}else if(e.order==="XZY"){let d=a*c,u=a*o,f=l*c,m=l*o;t[0]=c*h,t[4]=-p,t[8]=o*h,t[1]=d*p+m,t[5]=a*h,t[9]=u*p-f,t[2]=f*p-u,t[6]=l*h,t[10]=m*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lp,e,cp)}lookAt(e,t,i){let r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),nn.crossVectors(i,Ht),nn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),nn.crossVectors(i,Ht)),nn.normalize(),Hs.crossVectors(Ht,nn),r[0]=nn.x,r[4]=Hs.x,r[8]=Ht.x,r[1]=nn.y,r[5]=Hs.y,r[9]=Ht.y,r[2]=nn.z,r[6]=Hs.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],l=i[4],c=i[8],o=i[12],h=i[1],p=i[5],d=i[9],u=i[13],f=i[2],m=i[6],v=i[10],g=i[14],_=i[3],y=i[7],b=i[11],w=i[15],M=r[0],P=r[4],F=r[8],D=r[12],N=r[1],k=r[5],O=r[9],Z=r[13],H=r[2],V=r[6],q=r[10],W=r[14],ie=r[3],de=r[7],be=r[11],ge=r[15];return s[0]=a*M+l*N+c*H+o*ie,s[4]=a*P+l*k+c*V+o*de,s[8]=a*F+l*O+c*q+o*be,s[12]=a*D+l*Z+c*W+o*ge,s[1]=h*M+p*N+d*H+u*ie,s[5]=h*P+p*k+d*V+u*de,s[9]=h*F+p*O+d*q+u*be,s[13]=h*D+p*Z+d*W+u*ge,s[2]=f*M+m*N+v*H+g*ie,s[6]=f*P+m*k+v*V+g*de,s[10]=f*F+m*O+v*q+g*be,s[14]=f*D+m*Z+v*W+g*ge,s[3]=_*M+y*N+b*H+w*ie,s[7]=_*P+y*k+b*V+w*de,s[11]=_*F+y*O+b*q+w*be,s[15]=_*D+y*Z+b*W+w*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],o=e[13],h=e[2],p=e[6],d=e[10],u=e[14],f=e[3],m=e[7],v=e[11],g=e[15],_=c*u-o*d,y=l*u-o*p,b=l*d-c*p,w=a*u-o*h,M=a*d-c*h,P=a*p-l*h;return t*(m*_-v*y+g*b)-i*(f*_-v*w+g*M)+r*(f*y-m*w+g*P)-s*(f*b-m*M+v*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],o=e[6],h=e[10];return t*(a*h-l*o)-i*(s*h-l*c)+r*(s*o-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],p=e[9],d=e[10],u=e[11],f=e[12],m=e[13],v=e[14],g=e[15],_=t*l-i*a,y=t*c-r*a,b=t*o-s*a,w=i*c-r*l,M=i*o-s*l,P=r*o-s*c,F=h*m-p*f,D=h*v-d*f,N=h*g-u*f,k=p*v-d*m,O=p*g-u*m,Z=d*g-u*v,H=_*Z-y*O+b*k+w*N-M*D+P*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/H;return e[0]=(l*Z-c*O+o*k)*V,e[1]=(r*O-i*Z-s*k)*V,e[2]=(m*P-v*M+g*w)*V,e[3]=(d*M-p*P-u*w)*V,e[4]=(c*N-a*Z-o*D)*V,e[5]=(t*Z-r*N+s*D)*V,e[6]=(v*b-f*P-g*y)*V,e[7]=(h*P-d*b+u*y)*V,e[8]=(a*O-l*N+o*F)*V,e[9]=(i*N-t*O-s*F)*V,e[10]=(f*M-m*b+g*_)*V,e[11]=(p*b-h*M-u*_)*V,e[12]=(l*D-a*k-c*F)*V,e[13]=(t*k-i*D+r*F)*V,e[14]=(m*y-f*w-v*_)*V,e[15]=(h*w-p*y+d*_)*V,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,l=e.y,c=e.z,o=s*a,h=s*l;return this.set(o*a+i,o*l-r*c,o*c+r*l,0,o*l+r*c,h*l+i,h*c-r*a,0,o*c-r*l,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,l=t._z,c=t._w,o=s+s,h=a+a,p=l+l,d=s*o,u=s*h,f=s*p,m=a*h,v=a*p,g=l*p,_=c*o,y=c*h,b=c*p,w=i.x,M=i.y,P=i.z;return r[0]=(1-(m+g))*w,r[1]=(u+b)*w,r[2]=(f-y)*w,r[3]=0,r[4]=(u-b)*M,r[5]=(1-(d+g))*M,r[6]=(v+_)*M,r[7]=0,r[8]=(f+y)*P,r[9]=(v-_)*P,r[10]=(1-(d+m))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Zn.set(r[0],r[1],r[2]).length(),l=Zn.set(r[4],r[5],r[6]).length(),c=Zn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),gi.copy(this);let o=1/a,h=1/l,p=1/c;return gi.elements[0]*=o,gi.elements[1]*=o,gi.elements[2]*=o,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=p,gi.elements[9]*=p,gi.elements[10]*=p,t.setFromRotationMatrix(gi),i.x=a,i.y=l,i.z=c,this}makePerspective(e,t,i,r,s,a,l=2e3,c=!1){let o=this.elements,h=2*s/(t-e),p=2*s/(i-r),d=(t+e)/(t-e),u=(i+r)/(i-r),f,m;if(c)f=s/(a-s),m=a*s/(a-s);else if(l===Hi)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(l!==cr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);f=-a/(a-s),m=-a*s/(a-s)}return o[0]=h,o[4]=0,o[8]=d,o[12]=0,o[1]=0,o[5]=p,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a,l=2e3,c=!1){let o=this.elements,h=2/(t-e),p=2/(i-r),d=-(t+e)/(t-e),u=-(i+r)/(i-r),f,m;if(c)f=1/(a-s),m=a/(a-s);else if(l===Hi)f=-2/(a-s),m=-(a+s)/(a-s);else{if(l!==cr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);f=-1/(a-s),m=-s/(a-s)}return o[0]=h,o[4]=0,o[8]=0,o[12]=d,o[1]=0,o[5]=p,o[9]=0,o[13]=u,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ao.prototype.isMatrix4=!0;var Fe=ao,Zn=new E,gi=new Fe,lp=new E(0,0,0),cp=new E(1,1,1),nn=new E,Hs=new E,Ht=new E,kh=new Fe,Hh=new Gt,Wi=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],o=r[5],h=r[9],p=r[2],d=r[6],u=r[10];switch(t){case"XYZ":this._y=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,o),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,u),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,o),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,u));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,o),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},hp=0,Wh=new E,Jn=new Gt,Fi=new Fe,Ws=new E,Nr=new E,up=new E,dp=new Gt,Xh=new E(1,0,0),jh=new E(0,1,0),qh=new E(0,0,1),Yh={type:"added"},pp={type:"removed"},Kn={type:"childadded",child:null},Zo={type:"childremoved",child:null},gt=class n extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new E,t=new Wi,i=new Gt,r=new E(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new De}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Wh.copy(e).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ws.copy(e):Ws.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Nr,Ws,this.up):Fi.lookAt(Ws,Nr,this.up),this.quaternion.setFromRotationMatrix(Fi),r&&(Fi.extractRotation(r.matrixWorld),Jn.setFromRotationMatrix(Fi),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ee("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yh),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pp),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yh),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let o=0,h=c.length;o<h;o++){let p=c[o];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),o=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),u=a(e.animations),f=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),o.length>0&&(i.textures=o),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(l){let c=[];for(let o in l){let h=l[o];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};gt.DEFAULT_UP=new E(0,1,0),gt.DEFAULT_MATRIX_AUTO_UPDATE=!0,gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},mp={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,l=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(let m of e.hand.values()){let v=t.getJointPose(m,i),g=this._getHandJoint(o,m);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}let h=o.joints["index-finger-tip"],p=o.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,f=.005;o.inputState.pinching&&d>u+f?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&d<=u-f&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(mp)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function Jo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=He.workingColorSpace){if(e=bl(e,1),t=ze(t,0,1),i=ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Jo(a,s,e+1/3),this.g=Jo(a,s,e),this.b=Jo(a,s,e-1/3)}return He.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let i=id[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return He.workingToColorSpace(Et.copy(this),e),65536*Math.round(ze(255*Et.r,0,255))+256*Math.round(ze(255*Et.g,0,255))+Math.round(ze(255*Et.b,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(Et.copy(this),t);let i=Et.r,r=Et.g,s=Et.b,a=Math.max(i,r,s),l=Math.min(i,r,s),c,o,h=(l+a)/2;if(l===a)c=0,o=0;else{let p=a-l;switch(o=h<=.5?p/(a+l):p/(2-a-l),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4}c/=6}return e.h=c,e.s=o,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Xt){He.workingToColorSpace(Et.copy(this),e);let t=Et.r,i=Et.g,r=Et.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(rn),this.setHSL(rn.h+e,rn.s+t,rn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(Xs);let i=Vr(rn.h,Xs.h,t),r=Vr(rn.s,Xs.s,t),s=Vr(rn.l,Xs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new Ce;Ce.NAMES=id;var Jr=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Kr=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_i=new E,Oi=new E,Ko=new E,Bi=new E,$n=new E,Qn=new E,Zh=new E,$o=new E,Qo=new E,el=new E,tl=new Je,il=new Je,nl=new Je,Vi=class n{constructor(e=new E,t=new E,i=new E){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_i.subVectors(e,t),r.cross(_i);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_i.subVectors(r,t),Oi.subVectors(i,t),Ko.subVectors(e,t);let a=_i.dot(_i),l=_i.dot(Oi),c=_i.dot(Ko),o=Oi.dot(Oi),h=Oi.dot(Ko),p=a*o-l*l;if(p===0)return s.set(0,0,0),null;let d=1/p,u=(o*c-l*h)*d,f=(a*h-l*c)*d;return s.set(1-u-f,f,u)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bi)!==null&&Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,i,r,s,a,l,c){return this.getBarycoord(e,t,i,r,Bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Bi.x),c.addScaledVector(a,Bi.y),c.addScaledVector(l,Bi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return tl.setScalar(0),il.setScalar(0),nl.setScalar(0),tl.fromBufferAttribute(e,t),il.fromBufferAttribute(e,i),nl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(tl,s.x),a.addScaledVector(il,s.y),a.addScaledVector(nl,s.z),a}static isFrontFacing(e,t,i,r){return _i.subVectors(i,t),Oi.subVectors(e,t),_i.cross(Oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),.5*_i.cross(Oi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,l;$n.subVectors(r,i),Qn.subVectors(s,i),$o.subVectors(e,i);let c=$n.dot($o),o=Qn.dot($o);if(c<=0&&o<=0)return t.copy(i);Qo.subVectors(e,r);let h=$n.dot(Qo),p=Qn.dot(Qo);if(h>=0&&p<=h)return t.copy(r);let d=c*p-h*o;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector($n,a);el.subVectors(e,s);let u=$n.dot(el),f=Qn.dot(el);if(f>=0&&u<=f)return t.copy(s);let m=u*o-c*f;if(m<=0&&o>=0&&f<=0)return l=o/(o-f),t.copy(i).addScaledVector(Qn,l);let v=h*f-u*p;if(v<=0&&p-h>=0&&u-f>=0)return Zh.subVectors(s,r),l=(p-h)/(p-h+(u-f)),t.copy(r).addScaledVector(Zh,l);let g=1/(v+m+d);return a=m*g,l=d*g,t.copy(i).addScaledVector($n,a).addScaledVector(Qn,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},si=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,vi):vi.fromBufferAttribute(s,a),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),js.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),js.copy(i.boundingBox)),js.applyMatrix4(e.matrixWorld),this.union(js)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),qs.subVectors(this.max,Ur),er.subVectors(e.a,Ur),tr.subVectors(e.b,Ur),ir.subVectors(e.c,Ur),sn.subVectors(tr,er),an.subVectors(ir,tr),Mn.subVectors(er,ir);let t=[0,-sn.z,sn.y,0,-an.z,an.y,0,-Mn.z,Mn.y,sn.z,0,-sn.x,an.z,0,-an.x,Mn.z,0,-Mn.x,-sn.y,sn.x,0,-an.y,an.x,0,-Mn.y,Mn.x,0];return!!rl(t,er,tr,ir,qs)&&(t=[1,0,0,0,1,0,0,0,1],!!rl(t,er,tr,ir,qs)&&(Ys.crossVectors(sn,an),t=[Ys.x,Ys.y,Ys.z],rl(t,er,tr,ir,qs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(vi).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zi=[new E,new E,new E,new E,new E,new E,new E,new E],vi=new E,js=new si,er=new E,tr=new E,ir=new E,sn=new E,an=new E,Mn=new E,Ur=new E,qs=new E,Ys=new E,Sn=new E;function rl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Sn.fromArray(n,s);let l=r.x*Math.abs(Sn.x)+r.y*Math.abs(Sn.y)+r.z*Math.abs(Sn.z),c=e.dot(Sn),o=t.dot(Sn),h=i.dot(Sn);if(Math.max(-Math.max(c,o,h),Math.min(c,o,h))>l)return!1}return!0}var Bf=fp();function fp(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let o=c-127;o<-27?(i[c]=0,i[256|c]=32768,r[c]=24,r[256|c]=24):o<-14?(i[c]=1024>>-o-14,i[256|c]=1024>>-o-14|32768,r[c]=-o-1,r[256|c]=-o-1):o<=15?(i[c]=o+15<<10,i[256|c]=o+15<<10|32768,r[c]=13,r[256|c]=13):o<128?(i[c]=31744,i[256|c]=64512,r[c]=24,r[256|c]=24):(i[c]=31744,i[256|c]=64512,r[c]=13,r[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let o=c<<13,h=0;for(;!(8388608&o);)o<<=1,h-=8388608;o&=-8388609,h+=947912704,s[c]=o|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:l}}var pt=new E,Zs=new te,gp=0,Ct=class extends Ri{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sl,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ar(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var $r=class extends Ct{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Qr=class extends Ct{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var we=class extends Ct{constructor(e,t,i){super(new Float32Array(e),t,i)}},_p=new si,Fr=new E,sl=new E,ai=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):_p.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);let t=Fr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(Fr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(sl)),this.expandByPoint(Fr.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vp=0,ni=new Fe,al=new gt,nr=new E,Wt=new si,Or=new si,yt=new E,Ke=class n extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?Qr:$r)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,i){return ni.makeTranslation(e,t,i),this.applyMatrix4(ni),this}scale(e,t,i){return ni.makeScale(e,t,i),this.applyMatrix4(ni),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new E,1/0);if(e){let i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let l=t[s];Or.setFromBufferAttribute(l),this.morphTargetsRelative?(yt.addVectors(Wt.min,Or.min),Wt.expandByPoint(yt),yt.addVectors(Wt.max,Or.max),Wt.expandByPoint(yt)):(Wt.expandByPoint(Or.min),Wt.expandByPoint(Or.max))}Wt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){let l=t[s],c=this.morphTargetsRelative;for(let o=0,h=l.count;o<h;o++)yt.fromBufferAttribute(l,o),c&&(nr.fromBufferAttribute(e,o),yt.add(nr)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");a!==void 0&&a.count===i.count||(a=new Ct(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let F=0;F<i.count;F++)l[F]=new E,c[F]=new E;let o=new E,h=new E,p=new E,d=new te,u=new te,f=new te,m=new E,v=new E;function g(F,D,N){o.fromBufferAttribute(i,F),h.fromBufferAttribute(i,D),p.fromBufferAttribute(i,N),d.fromBufferAttribute(s,F),u.fromBufferAttribute(s,D),f.fromBufferAttribute(s,N),h.sub(o),p.sub(o),u.sub(d),f.sub(d);let k=1/(u.x*f.y-f.x*u.y);isFinite(k)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(p,-u.y).multiplyScalar(k),v.copy(p).multiplyScalar(u.x).addScaledVector(h,-f.x).multiplyScalar(k),l[F].add(m),l[D].add(m),l[N].add(m),c[F].add(v),c[D].add(v),c[N].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let F=0,D=_.length;F<D;++F){let N=_[F],k=N.start;for(let O=k,Z=k+N.count;O<Z;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let y=new E,b=new E,w=new E,M=new E;function P(F){w.fromBufferAttribute(r,F),M.copy(w);let D=l[F];y.copy(D),y.sub(w.multiplyScalar(w.dot(D))).normalize(),b.crossVectors(M,D);let N=b.dot(c[F])<0?-1:1;a.setXYZW(F,y.x,y.y,y.z,N)}for(let F=0,D=_.length;F<D;++F){let N=_[F],k=N.start;for(let O=k,Z=k+N.count;O<Z;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ct(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let r=new E,s=new E,a=new E,l=new E,c=new E,o=new E,h=new E,p=new E;if(e)for(let d=0,u=e.count;d<u;d+=3){let f=e.getX(d+0),m=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,v),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),l.fromBufferAttribute(i,f),c.fromBufferAttribute(i,m),o.fromBufferAttribute(i,v),l.add(h),c.add(h),o.add(h),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(v,o.x,o.y,o.z)}else for(let d=0,u=t.count;d<u;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(l,c){let o=l.array,h=l.itemSize,p=l.normalized,d=new o.constructor(c.length*h),u=0,f=0;for(let m=0,v=c.length;m<v;m++){u=l.isInterleavedBufferAttribute?c[m]*l.data.stride+l.offset:c[m]*h;for(let g=0;g<h;g++)d[f++]=o[u++]}return new Ct(d,h,p)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let l in r){let c=e(r[l],i);t.setAttribute(l,c)}let s=this.morphAttributes;for(let l in s){let c=[],o=s[l];for(let h=0,p=o.length;h<p;h++){let d=e(o[h],i);c.push(d)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let o=a[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let o=i[c];e.data.attributes[c]=o.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let o=this.morphAttributes[c],h=[];for(let p=0,d=o.length;p<d;p++){let u=o[p];h.push(u.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let o in r){let h=r[o];this.setAttribute(o,h.clone(t))}let s=e.morphAttributes;for(let o in s){let h=[],p=s[o];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(t));this.morphAttributes[o]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let o=0,h=a.length;o<h;o++){let p=a[o];this.addGroup(p.start,p.count,p.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var zf=new E;var xp=0,Xi=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=On(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wn,this.stencilZFail=wn,this.stencilZPass=wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:Te(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let l in s){let c=s[l];delete c.metadata,a.push(c)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new te().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Gf=new E,Vf=new E,kf=new E,Hf=new te,Wf=new te,Xf=new Fe,jf=new E,qf=new E,Yf=new E,Zf=new te,Jf=new te,Kf=new te;var $f=new E,Qf=new E;var Gi=new E,ol=new E,Js=new E,on=new E,ll=new E,Ks=new E,cl=new E,An=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ol.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),on.copy(this.origin).sub(ol);let s=.5*e.distanceTo(t),a=-this.direction.dot(Js),l=on.dot(this.direction),c=-on.dot(Js),o=on.lengthSq(),h=Math.abs(1-a*a),p,d,u,f;if(h>0)if(p=a*c-l,d=a*l-c,f=s*h,p>=0)if(d>=-f)if(d<=f){let m=1/h;p*=m,d*=m,u=p*(p+a*d+2*l)+d*(a*p+d+2*c)+o}else d=s,p=Math.max(0,-(a*d+l)),u=-p*p+d*(d+2*c)+o;else d=-s,p=Math.max(0,-(a*d+l)),u=-p*p+d*(d+2*c)+o;else d<=-f?(p=Math.max(0,-(-a*s+l)),d=p>0?-s:Math.min(Math.max(-s,-c),s),u=-p*p+d*(d+2*c)+o):d<=f?(p=0,d=Math.min(Math.max(-s,-c),s),u=d*(d+2*c)+o):(p=Math.max(0,-(a*s+l)),d=p>0?s:Math.min(Math.max(-s,-c),s),u=-p*p+d*(d+2*c)+o);else d=a>0?-s:s,p=Math.max(0,-(a*d+l)),u=-p*p+d*(d+2*c)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ol).addScaledVector(Js,d),u}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);let i=Gi.dot(this.direction),r=Gi.dot(Gi)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,l,c,o=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return o>=0?(i=(e.min.x-d.x)*o,r=(e.max.x-d.x)*o):(i=(e.max.x-d.x)*o,r=(e.min.x-d.x)*o),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(l=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(l=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),i>c||l>r?null:((l>i||i!=i)&&(i=l),(c<r||r!=r)&&(r=c),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,i,r,s){ll.subVectors(t,e),Ks.subVectors(i,e),cl.crossVectors(ll,Ks);let a,l=this.direction.dot(cl);if(l>0){if(r)return null;a=1}else{if(!(l<0))return null;a=-1,l=-l}on.subVectors(this.origin,e);let c=a*this.direction.dot(Ks.crossVectors(on,Ks));if(c<0)return null;let o=a*this.direction.dot(ll.cross(on));if(o<0||c+o>l)return null;let h=-a*on.dot(cl);return h<0?null:this.at(h/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jh=new Fe,bn=new An,$s=new ai,Kh=new E,Qs=new E,ea=new E,ta=new E,hl=new E,ia=new E,$h=new E,na=new E,_t=class extends gt{constructor(e=new Ke,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(s&&l){ia.set(0,0,0);for(let c=0,o=s.length;c<o;c++){let h=l[c],p=s[c];h!==0&&(hl.fromBufferAttribute(p,e),a?ia.addScaledVector(hl,h):ia.addScaledVector(hl.sub(t),h))}t.add(ia)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(s),bn.copy(e.ray).recast(e.near),$s.containsPoint(bn.origin)===!1&&(bn.intersectSphere($s,Kh)===null||bn.origin.distanceToSquared(Kh)>(e.far-e.near)**2))return;Jh.copy(s).invert(),bn.copy(e.ray).applyMatrix4(Jh),i.boundingBox!==null&&bn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,bn)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,o=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,u=s.drawRange;if(l!==null)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){let v=d[f],g=a[v.materialIndex];for(let _=Math.max(v.start,u.start),y=Math.min(l.count,Math.min(v.start+v.count,u.start+u.count));_<y;_+=3)r=ra(this,g,e,i,o,h,p,l.getX(_),l.getX(_+1),l.getX(_+2)),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}else for(let f=Math.max(0,u.start),m=Math.min(l.count,u.start+u.count);f<m;f+=3)r=ra(this,a,e,i,o,h,p,l.getX(f),l.getX(f+1),l.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(c!==void 0)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){let v=d[f],g=a[v.materialIndex];for(let _=Math.max(v.start,u.start),y=Math.min(c.count,Math.min(v.start+v.count,u.start+u.count));_<y;_+=3)r=ra(this,g,e,i,o,h,p,_,_+1,_+2),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}else for(let f=Math.max(0,u.start),m=Math.min(c.count,u.start+u.count);f<m;f+=3)r=ra(this,a,e,i,o,h,p,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function ra(n,e,t,i,r,s,a,l,c,o){n.getVertexPosition(l,Qs),n.getVertexPosition(c,ea),n.getVertexPosition(o,ta);let h=(function(p,d,u,f,m,v,g,_){let y;if(y=d.side===1?f.intersectTriangle(g,v,m,!0,_):f.intersectTriangle(m,v,g,d.side===0,_),y===null)return null;na.copy(_),na.applyMatrix4(p.matrixWorld);let b=u.ray.origin.distanceTo(na);return b<u.near||b>u.far?null:{distance:b,point:na.clone(),object:p}})(n,e,t,i,Qs,ea,ta,$h);if(h){let p=new E;Vi.getBarycoord($h,Qs,ea,ta,p),r&&(h.uv=Vi.getInterpolatedAttribute(r,l,c,o,p,new te)),s&&(h.uv1=Vi.getInterpolatedAttribute(s,l,c,o,p,new te)),a&&(h.normal=Vi.getInterpolatedAttribute(a,l,c,o,p,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:l,b:c,c:o,normal:new E,materialIndex:0};Vi.getNormal(Qs,ea,ta,d.normal),h.face=d,h.barycoord=p}return h}var eg=new Je,tg=new Je,ig=new Je,ng=new Je,rg=new Fe,sg=new E,ag=new ai,og=new Fe,lg=new An;var es=class extends zt{constructor(e=null,t=1,i=1,r,s,a,l,c,o=1003,h=1003,p,d){super(null,a,l,c,o,h,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cg=new Fe,hg=new Fe;var ts=class extends Ct{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rr=new Fe,Qh=new Fe,sa=[],eu=new si,yp=new Fe,Br=new _t,zr=new ai,is=class extends _t{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(16*i),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,yp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),eu.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(eu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),zr.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(i),e.ray.intersectsSphere(zr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,rr),Qh.multiplyMatrices(i,rr),Br.matrixWorld=Qh,Br.raycast(e,sa);for(let a=0,l=sa.length;a<l;a++){let c=sa[a];c.instanceId=s,c.object=this,t.push(c)}sa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,16*e),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new es(new Float32Array(r*this.count),r,this.count,go,li));let s=this.morphTexture.source.data.data,a=0;for(let o=0;o<i.length;o++)a+=i[o];let l=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=l,s.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ul=new E,Mp=new E,Sp=new De,Ai=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ul.subVectors(i,t).cross(Mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(ul),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sp.getNormalMatrix(e),r=this.coplanarPoint(ul).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Tn=new ai,bp=new te(.5,.5),aa=new E,ji=class{constructor(e=new Ai,t=new Ai,i=new Ai,r=new Ai,s=new Ai,a=new Ai){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],o=s[3],h=s[4],p=s[5],d=s[6],u=s[7],f=s[8],m=s[9],v=s[10],g=s[11],_=s[12],y=s[13],b=s[14],w=s[15];if(r[0].setComponents(o-a,u-h,g-f,w-_).normalize(),r[1].setComponents(o+a,u+h,g+f,w+_).normalize(),r[2].setComponents(o+l,u+p,g+m,w+y).normalize(),r[3].setComponents(o-l,u-p,g-m,w-y).normalize(),i)r[4].setComponents(c,d,v,b).normalize(),r[5].setComponents(o-c,u-d,g-v,w-b).normalize();else if(r[4].setComponents(o-c,u-d,g-v,w-b).normalize(),t===Hi)r[5].setComponents(o+c,u+d,g+v,w+b).normalize();else{if(t!==cr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(c,d,v,b).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(e){Tn.center.set(0,0,0);let t=bp.distanceTo(e.center);return Tn.radius=.7071067811865476+t,Tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(aa.x=r.normal.x>0?e.max.x:e.min.x,aa.y=r.normal.y>0?e.max.y:e.min.y,aa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},tu=new Fe,Ta=class n{constructor(){this.coordinateSystem=Hi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];tu.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new ji),i[r].setFromProjectionMatrix(tu,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ji),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Tl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let l=s[this.index];a.push(l),this.index++,l.start=e,l.count=t,l.z=i,l.index=r}reset(){this.list.length=0,this.index=0}},ug=new Fe,dg=new Ce(1,1,1),pg=new ji,mg=new Ta,fg=new si,gg=new ai,_g=new E,vg=new E,xg=new E,yg=new Tl,Mg=new _t;var Sg=new E,bg=new E,Tg=new Fe,wg=new An,Eg=new ai,Ag=new E,Cg=new E;var Rg=new E,Pg=new E;var mr=class extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},iu=new Fe,wl=new An,oa=new ai,la=new E,ns=class extends gt{constructor(e=new Ke,t=new mr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),oa.radius+=s,e.ray.intersectsSphere(oa)===!1)return;iu.copy(r).invert(),wl.copy(e.ray).applyMatrix4(iu);let l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,o=i.index,h=i.attributes.position;if(o!==null)for(let p=Math.max(0,a.start),d=Math.min(o.count,a.start+a.count);p<d;p++){let u=o.getX(p);la.fromBufferAttribute(h,u),nu(la,u,c,r,e,t,this)}else for(let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);p<d;p++)la.fromBufferAttribute(h,p),nu(la,p,c,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nu(n,e,t,i,r,s,a){let l=wl.distanceSqToPoint(n);if(l<t){let c=new E;wl.closestPointToPoint(n,c),c.applyMatrix4(i);let o=r.ray.origin.distanceTo(c);if(o<r.near||o>r.far)return;s.push({distance:o,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var rs=class extends zt{constructor(e=[],t=301,i,r,s,a,l,c,o,h){super(e,t,i,r,s,a,l,c,o,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var qi=class extends zt{constructor(e,t,i=1014,r,s,a,l=1003,c=1003,o,h=1026,p=1){if(h!==gn&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:p},r,s,a,l,c,h,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wa=class extends qi{constructor(e,t=1014,i=301,r,s,a=1003,l=1003,c,o=1026){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,l,c,o),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ss=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Cn=class n extends Ke{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],o=[],h=[],p=[],d=0,u=0;function f(m,v,g,_,y,b,w,M,P,F,D){let N=b/P,k=w/F,O=b/2,Z=w/2,H=M/2,V=P+1,q=F+1,W=0,ie=0,de=new E;for(let be=0;be<q;be++){let ge=be*k-Z;for(let _e=0;_e<V;_e++){let ee=_e*N-O;de[m]=ee*_,de[v]=ge*y,de[g]=H,o.push(de.x,de.y,de.z),de[m]=0,de[v]=0,de[g]=M>0?1:-1,h.push(de.x,de.y,de.z),p.push(_e/P),p.push(1-be/F),W+=1}}for(let be=0;be<F;be++)for(let ge=0;ge<P;ge++){let _e=d+ge+V*be,ee=d+ge+V*(be+1),ce=d+(ge+1)+V*(be+1),oe=d+(ge+1)+V*be;c.push(_e,ee,oe),c.push(ee,ce,oe),ie+=6}l.addGroup(u,ie,D),u+=ie,d+=W}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ea=class n extends Ke{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],l=[],c=[],o=[],h=t/2,p=Math.PI/2*e,d=t,u=2*p+d,f=2*i+s,m=r+1,v=new E,g=new E;for(let _=0;_<=f;_++){let y=0,b=0,w=0,M=0;if(_<=i){let D=_/i,N=D*Math.PI/2;b=-h-e*Math.cos(N),w=e*Math.sin(N),M=-e*Math.cos(N),y=D*p}else if(_<=i+s){let D=(_-i)/s;b=D*t-h,w=e,M=0,y=p+D*d}else{let D=(_-i-s)/i,N=D*Math.PI/2;b=h+e*Math.sin(N),w=e*Math.cos(N),M=e*Math.sin(N),y=p+d+D*p}let P=Math.max(0,Math.min(1,y/u)),F=0;_===0?F=.5/r:_===f&&(F=-.5/r);for(let D=0;D<=r;D++){let N=D/r,k=N*Math.PI*2,O=Math.sin(k),Z=Math.cos(k);g.x=-w*Z,g.y=b,g.z=w*O,l.push(g.x,g.y,g.z),v.set(-w*Z,M,w*O),v.normalize(),c.push(v.x,v.y,v.z),o.push(N+F,P)}if(_>0){let D=(_-1)*m;for(let N=0;N<r;N++){let k=D+N,O=D+N+1,Z=_*m+N,H=_*m+N+1;a.push(k,O,Z),a.push(O,H,Z)}}}this.setIndex(a),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Aa=class n extends Ke{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],l=[],c=[],o=new E,h=new te;a.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let p=0,d=3;p<=t;p++,d+=3){let u=i+p/t*r;o.x=e*Math.cos(u),o.y=e*Math.sin(u),a.push(o.x,o.y,o.z),l.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},dn=class n extends Ke{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,l=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:c};let o=this;r=Math.floor(r),s=Math.floor(s);let h=[],p=[],d=[],u=[],f=0,m=[],v=i/2,g=0;function _(y){let b=f,w=new te,M=new E,P=0,F=y===!0?e:t,D=y===!0?1:-1;for(let k=1;k<=r;k++)p.push(0,v*D,0),d.push(0,D,0),u.push(.5,.5),f++;let N=f;for(let k=0;k<=r;k++){let O=k/r*c+l,Z=Math.cos(O),H=Math.sin(O);M.x=F*H,M.y=v*D,M.z=F*Z,p.push(M.x,M.y,M.z),d.push(0,D,0),w.x=.5*Z+.5,w.y=.5*H*D+.5,u.push(w.x,w.y),f++}for(let k=0;k<r;k++){let O=b+k,Z=N+k;y===!0?h.push(Z,Z+1,O):h.push(Z+1,Z,O),P+=3}o.addGroup(g,P,y===!0?1:2),g+=P}(function(){let y=new E,b=new E,w=0,M=(t-e)/i;for(let P=0;P<=s;P++){let F=[],D=P/s,N=D*(t-e)+e;for(let k=0;k<=r;k++){let O=k/r,Z=O*c+l,H=Math.sin(Z),V=Math.cos(Z);b.x=N*H,b.y=-D*i+v,b.z=N*V,p.push(b.x,b.y,b.z),y.set(H,M,V).normalize(),d.push(y.x,y.y,y.z),u.push(O,1-D),F.push(f++)}m.push(F)}for(let P=0;P<r;P++)for(let F=0;F<s;F++){let D=m[F][P],N=m[F+1][P],k=m[F+1][P+1],O=m[F][P+1];(e>0||F!==0)&&(h.push(D,N,O),w+=3),(t>0||F!==s-1)&&(h.push(N,k,O),w+=3)}o.addGroup(g,w,0),g+=w})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ca=class n extends dn{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,l=2*Math.PI){super(0,e,t,i,r,s,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:l}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pn=class n extends Ke{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function l(u,f,m,v){let g=v+1,_=[];for(let y=0;y<=g;y++){_[y]=[];let b=u.clone().lerp(m,y/g),w=f.clone().lerp(m,y/g),M=g-y;for(let P=0;P<=M;P++)_[y][P]=P===0&&y===g?b:b.clone().lerp(w,P/M)}for(let y=0;y<g;y++)for(let b=0;b<2*(g-y)-1;b++){let w=Math.floor(b/2);b%2==0?(c(_[y][w+1]),c(_[y+1][w]),c(_[y][w])):(c(_[y][w+1]),c(_[y+1][w+1]),c(_[y+1][w]))}}function c(u){s.push(u.x,u.y,u.z)}function o(u,f){let m=3*u;f.x=e[m+0],f.y=e[m+1],f.z=e[m+2]}function h(u,f,m,v){v<0&&u.x===1&&(a[f]=u.x-1),m.x===0&&m.z===0&&(a[f]=v/2/Math.PI+.5)}function p(u){return Math.atan2(u.z,-u.x)}function d(u){return Math.atan2(-u.y,Math.sqrt(u.x*u.x+u.z*u.z))}(function(u){let f=new E,m=new E,v=new E;for(let g=0;g<t.length;g+=3)o(t[g+0],f),o(t[g+1],m),o(t[g+2],v),l(f,m,v,u)})(r),(function(u){let f=new E;for(let m=0;m<s.length;m+=3)f.x=s[m+0],f.y=s[m+1],f.z=s[m+2],f.normalize().multiplyScalar(u),s[m+0]=f.x,s[m+1]=f.y,s[m+2]=f.z})(i),(function(){let u=new E;for(let f=0;f<s.length;f+=3){u.x=s[f+0],u.y=s[f+1],u.z=s[f+2];let m=p(u)/2/Math.PI+.5,v=d(u)/Math.PI+.5;a.push(m,1-v)}(function(){let f=new E,m=new E,v=new E,g=new E,_=new te,y=new te,b=new te;for(let w=0,M=0;w<s.length;w+=9,M+=6){f.set(s[w+0],s[w+1],s[w+2]),m.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),_.set(a[M+0],a[M+1]),y.set(a[M+2],a[M+3]),b.set(a[M+4],a[M+5]),g.copy(f).add(m).add(v).divideScalar(3);let P=p(g);h(_,M+0,f,P),h(y,M+2,m,P),h(b,M+4,v,P)}})(),(function(){for(let f=0;f<a.length;f+=6){let m=a[f+0],v=a[f+2],g=a[f+4],_=Math.max(m,v,g),y=Math.min(m,v,g);_>.9&&y<.1&&(m<.2&&(a[f+0]+=1),v<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(s.slice(),3)),this.setAttribute("uv",new we(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Ra=class n extends pn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ca=new E,ha=new E,dl=new E,ua=new Vi,Pa=class extends Ke{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(or*t),a=e.getIndex(),l=e.getAttribute("position"),c=a?a.count:l.count,o=[0,0,0],h=["a","b","c"],p=new Array(3),d={},u=[];for(let f=0;f<c;f+=3){a?(o[0]=a.getX(f),o[1]=a.getX(f+1),o[2]=a.getX(f+2)):(o[0]=f,o[1]=f+1,o[2]=f+2);let{a:m,b:v,c:g}=ua;if(m.fromBufferAttribute(l,o[0]),v.fromBufferAttribute(l,o[1]),g.fromBufferAttribute(l,o[2]),ua.getNormal(dl),p[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,p[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,p[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,p[0]!==p[1]&&p[1]!==p[2]&&p[2]!==p[0])for(let _=0;_<3;_++){let y=(_+1)%3,b=p[_],w=p[y],M=ua[h[_]],P=ua[h[y]],F=`${b}_${w}`,D=`${w}_${b}`;D in d&&d[D]?(dl.dot(d[D].normal)<=s&&(u.push(M.x,M.y,M.z),u.push(P.x,P.y,P.z)),d[D]=null):F in d||(d[F]={index0:o[_],index1:o[y],normal:dl.clone()})}}for(let f in d)if(d[f]){let{index0:m,index1:v}=d[f];ca.fromBufferAttribute(l,m),ha.fromBufferAttribute(l,v),u.push(ca.x,ca.y,ca.z),u.push(ha.x,ha.y,ha.z)}this.setAttribute("position",new we(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Zt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Te("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let l,c=0,o=s-1;for(;c<=o;)if(r=Math.floor(c+(o-c)/2),l=i[r]-a,l<0)c=r+1;else{if(!(l>0)){o=r;break}o=r-1}if(r=o,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),l=this.getPoint(s),c=t||(a.isVector2?new te:new E);return c.copy(l).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new E,r=[],s=[],a=[],l=new E,c=new Fe;for(let u=0;u<=e;u++){let f=u/e;r[u]=this.getTangentAt(f,new E)}s[0]=new E,a[0]=new E;let o=Number.MAX_VALUE,h=Math.abs(r[0].x),p=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=o&&(o=h,i.set(1,0,0)),p<=o&&(o=p,i.set(0,1,0)),d<=o&&i.set(0,0,1),l.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],l),a[0].crossVectors(r[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),l.crossVectors(r[u-1],r[u]),l.length()>Number.EPSILON){l.normalize();let f=Math.acos(ze(r[u-1].dot(r[u]),-1,1));s[u].applyMatrix4(c.makeRotationAxis(l,f))}a[u].crossVectors(r[u],s[u])}if(t===!0){let u=Math.acos(ze(s[0].dot(s[e]),-1,1));u/=e,r[0].dot(l.crossVectors(s[0],s[e]))>0&&(u=-u);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(r[f],u*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fr=class extends Zt{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(e,t=new te){let i=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let l=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(l),o=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=c-this.aX,u=o-this.aY;c=d*h-u*p+this.aX,o=d*p+u*h+this.aY}return i.set(c,o)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ia=class extends fr{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Nc(){let n=0,e=0,t=0,i=0;function r(s,a,l,c){n=s,e=l,t=-3*s+3*a-2*l-c,i=2*s-2*a+l+c}return{initCatmullRom:function(s,a,l,c,o){r(a,l,o*(l-s),o*(c-a))},initNonuniformCatmullRom:function(s,a,l,c,o,h,p){let d=(a-s)/o-(l-s)/(o+h)+(l-a)/h,u=(l-a)/h-(c-a)/(h+p)+(c-l)/p;d*=h,u*=h,r(a,l,d,u)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var ru=new E,su=new E,pl=new Nc,ml=new Nc,fl=new Nc,La=class extends Zt{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new E){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,l,c,o=Math.floor(a),h=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:h===0&&o===s-1&&(o=s-2,h=1),this.closed||o>0?l=r[(o-1)%s]:(su.subVectors(r[0],r[1]).add(r[0]),l=su);let p=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?c=r[(o+2)%s]:(ru.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=ru),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(p),u),m=Math.pow(p.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(c),u);m<1e-4&&(m=1),f<1e-4&&(f=m),v<1e-4&&(v=m),pl.initNonuniformCatmullRom(l.x,p.x,d.x,c.x,f,m,v),ml.initNonuniformCatmullRom(l.y,p.y,d.y,c.y,f,m,v),fl.initNonuniformCatmullRom(l.z,p.z,d.z,c.z,f,m,v)}else this.curveType==="catmullrom"&&(pl.initCatmullRom(l.x,p.x,d.x,c.x,this.tension),ml.initCatmullRom(l.y,p.y,d.y,c.y,this.tension),fl.initCatmullRom(l.z,p.z,d.z,c.z,this.tension));return i.set(pl.calc(h),ml.calc(h),fl.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new E().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function au(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),l=n*n;return(2*t-2*i+s+a)*(n*l)+(-3*t+3*i-2*s-a)*l+s*n+t}function kr(n,e,t,i){return(function(r,s){let a=1-r;return a*a*s})(n,e)+(function(r,s){return 2*(1-r)*r*s})(n,t)+(function(r,s){return r*r*s})(n,i)}function Hr(n,e,t,i,r){return(function(s,a){let l=1-s;return l*l*l*a})(n,e)+(function(s,a){let l=1-s;return 3*l*l*s*a})(n,t)+(function(s,a){return 3*(1-s)*s*s*a})(n,i)+(function(s,a){return s*s*s*a})(n,r)}var as=class extends Zt{constructor(e=new te,t=new te,i=new te,r=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new te){let i=t,r=this.v0,s=this.v1,a=this.v2,l=this.v3;return i.set(Hr(e,r.x,s.x,a.x,l.x),Hr(e,r.y,s.y,a.y,l.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Da=class extends Zt{constructor(e=new E,t=new E,i=new E,r=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new E){let i=t,r=this.v0,s=this.v1,a=this.v2,l=this.v3;return i.set(Hr(e,r.x,s.x,a.x,l.x),Hr(e,r.y,s.y,a.y,l.y),Hr(e,r.z,s.z,a.z,l.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},os=class extends Zt{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends Zt{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ls=class extends Zt{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(kr(e,r.x,s.x,a.x),kr(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cs=class extends Zt{constructor(e=new E,t=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new E){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(kr(e,r.x,s.x,a.x),kr(e,r.y,s.y,a.y),kr(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hs=class extends Zt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),l=s-a,c=r[a===0?a:a-1],o=r[a],h=r[a>r.length-2?r.length-1:a+1],p=r[a>r.length-3?r.length-1:a+2];return i.set(au(l,c.x,o.x,h.x,p.x),au(l,c.y,o.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new te().fromArray(r))}return this}},Ua=Object.freeze({__proto__:null,ArcCurve:Ia,CatmullRomCurve3:La,CubicBezierCurve:as,CubicBezierCurve3:Da,EllipseCurve:fr,LineCurve:os,LineCurve3:Na,QuadraticBezierCurve:ls,QuadraticBezierCurve3:cs,SplineCurve:hs}),Fa=class extends Zt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ua[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,l=this.curves[s],c=l.getLength(),o=c===0?0:1-a/c;return l.getPointAt(o,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],l=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(l);for(let o=0;o<c.length;o++){let h=c[o];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Ua[r.type]().fromJSON(r))}return this}},us=class extends Fa{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new os(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new ls(this.currentPoint.clone(),new te(e,t),new te(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let l=new as(this.currentPoint.clone(),new te(e,t),new te(i,r),new te(s,a));return this.curves.push(l),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new hs(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,l,c){let o=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+o,t+h,i,r,s,a,l,c),this}absellipse(e,t,i,r,s,a,l,c){let o=new fr(e,t,i,r,s,a,l,c);if(this.curves.length>0){let p=o.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(o);let h=o.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Rn=class extends us{constructor(e){super(e),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new us().fromJSON(r))}return this}};function Tp(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=ou(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let l,c,o;if(i&&(s=(function(h,p,d,u){let f=[];for(let m=0,v=p.length;m<v;m++){let g=ou(h,p[m]*u,m<v-1?p[m+1]*u:h.length,u,!1);g===g.next&&(g.steiner=!0),f.push(Lp(g))}f.sort(Rp);for(let m=0;m<f.length;m++)d=Pp(f[m],d);return d})(n,e,s,t)),n.length>80*t){l=n[0],c=n[1];let h=l,p=c;for(let d=t;d<r;d+=t){let u=n[d],f=n[d+1];u<l&&(l=u),f<c&&(c=f),u>h&&(h=u),f>p&&(p=f)}o=Math.max(h-l,p-c),o=o!==0?32767/o:0}return ds(s,a,t,l,c,o,0),a}function ou(n,e,t,i,r){let s;if(r===(function(a,l,c,o){let h=0;for(let p=l,d=c-o;p<c;p+=o)h+=(a[d]-a[p])*(a[p+1]+a[d+1]),d=p;return h})(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=lu(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=lu(a/i|0,n[a],n[a+1],s);return s&&gr(s,s.next)&&(ms(s),s=s.next),s}function Pn(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!gr(i,i.next)&&st(i.prev,i,i.next)!==0)i=i.next;else{if(ms(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function ds(n,e,t,i,r,s,a){if(!n)return;!a&&s&&(function(c,o,h,p){let d=c;do d.z===0&&(d.z=El(d.x,d.y,o,h,p)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(u){let f,m=1;do{let v,g=u;u=null;let _=null;for(f=0;g;){f++;let y=g,b=0;for(let M=0;M<m&&(b++,y=y.nextZ,y);M++);let w=m;for(;b>0||w>0&&y;)b!==0&&(w===0||!y||g.z<=y.z)?(v=g,g=g.nextZ,b--):(v=y,y=y.nextZ,w--),_?_.nextZ=v:u=v,v.prevZ=_,_=v;g=y}_.nextZ=null,m*=2}while(f>1)})(d)})(n,i,r,s);let l=n;for(;n.prev!==n.next;){let c=n.prev,o=n.next;if(s?Ep(n,i,r,s):wp(n))e.push(c.i,n.i,o.i),ms(n),n=o.next,l=o.next;else if((n=o)===l){a?a===1?ds(n=Ap(Pn(n),e),e,t,i,r,s,2):a===2&&Cp(n,e,t,i,r,s):ds(Pn(n),e,t,i,r,s,1);break}}}function wp(n){let e=n.prev,t=n,i=n.next;if(st(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,l=e.y,c=t.y,o=i.y,h=Math.min(r,s,a),p=Math.min(l,c,o),d=Math.max(r,s,a),u=Math.max(l,c,o),f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=p&&f.y<=u&&Gr(r,l,s,c,a,o,f.x,f.y)&&st(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Ep(n,e,t,i){let r=n.prev,s=n,a=n.next;if(st(r,s,a)>=0)return!1;let l=r.x,c=s.x,o=a.x,h=r.y,p=s.y,d=a.y,u=Math.min(l,c,o),f=Math.min(h,p,d),m=Math.max(l,c,o),v=Math.max(h,p,d),g=El(u,f,e,t,i),_=El(m,v,e,t,i),y=n.prevZ,b=n.nextZ;for(;y&&y.z>=g&&b&&b.z<=_;){if(y.x>=u&&y.x<=m&&y.y>=f&&y.y<=v&&y!==r&&y!==a&&Gr(l,h,c,p,o,d,y.x,y.y)&&st(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=u&&b.x<=m&&b.y>=f&&b.y<=v&&b!==r&&b!==a&&Gr(l,h,c,p,o,d,b.x,b.y)&&st(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=g;){if(y.x>=u&&y.x<=m&&y.y>=f&&y.y<=v&&y!==r&&y!==a&&Gr(l,h,c,p,o,d,y.x,y.y)&&st(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=_;){if(b.x>=u&&b.x<=m&&b.y>=f&&b.y<=v&&b!==r&&b!==a&&Gr(l,h,c,p,o,d,b.x,b.y)&&st(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ap(n,e){let t=n;do{let i=t.prev,r=t.next.next;!gr(i,r)&&rd(i,t,t.next,r)&&ps(i,r)&&ps(r,i)&&(e.push(i.i,t.i,r.i),ms(t),ms(t.next),t=n=r),t=t.next}while(t!==n);return Pn(t)}function Cp(n,e,t,i,r,s){let a=n;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&Dp(a,l)){let c=sd(a,l);return a=Pn(a,a.next),c=Pn(c,c.next),ds(a,e,t,i,r,s,0),void ds(c,e,t,i,r,s,0)}l=l.next}a=a.next}while(a!==n)}function Rp(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Pp(n,e){let t=(function(r,s){let a=s,l=r.x,c=r.y,o,h=-1/0;if(gr(r,a))return a;do{if(gr(r,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let m=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=l&&m>h&&(h=m,o=a.x<a.next.x?a:a.next,m===l))return o}a=a.next}while(a!==s);if(!o)return null;let p=o,d=o.x,u=o.y,f=1/0;a=o;do{if(l>=a.x&&a.x>=d&&l!==a.x&&nd(c<u?l:h,c,d,u,c<u?h:l,c,a.x,a.y)){let m=Math.abs(c-a.y)/(l-a.x);ps(a,r)&&(m<f||m===f&&(a.x>o.x||a.x===o.x&&Ip(o,a)))&&(o=a,f=m)}a=a.next}while(a!==p);return o})(n,e);if(!t)return e;let i=sd(t,n);return Pn(i,i.next),Pn(t,t.next)}function Ip(n,e){return st(n.prev,n,e.prev)<0&&st(e.next,n,n.next)<0}function El(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Lp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function nd(n,e,t,i,r,s,a,l){return(r-a)*(e-l)>=(n-a)*(s-l)&&(n-a)*(i-l)>=(t-a)*(e-l)&&(t-a)*(s-l)>=(r-a)*(i-l)}function Gr(n,e,t,i,r,s,a,l){return!(n===a&&e===l)&&nd(n,e,t,i,r,s,a,l)}function Dp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&rd(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1})(n,e)&&(ps(n,e)&&ps(e,n)&&(function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,l=(t.y+i.y)/2;do r.y>l!=r.next.y>l&&r.next.y!==r.y&&a<(r.next.x-r.x)*(l-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(n,e)&&(st(n.prev,n,e.prev)||st(n,e.prev,e))||gr(n,e)&&st(n.prev,n,n.next)>0&&st(e.prev,e,e.next)>0)}function st(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function gr(n,e){return n.x===e.x&&n.y===e.y}function rd(n,e,t,i){let r=pa(st(n,e,t)),s=pa(st(n,e,i)),a=pa(st(t,i,n)),l=pa(st(t,i,e));return r!==s&&a!==l||!(r!==0||!da(n,t,e))||!(s!==0||!da(n,i,e))||!(a!==0||!da(t,n,i))||!(l!==0||!da(t,e,i))}function da(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function pa(n){return n>0?1:n<0?-1:0}function ps(n,e){return st(n.prev,n,n.next)<0?st(n,e,n.next)>=0&&st(n,n.prev,e)>=0:st(n,e,n.prev)<0||st(n,n.next,e)<0}function sd(n,e){let t=Al(n.i,n.x,n.y),i=Al(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function lu(n,e,t,i){let r=Al(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ms(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Al(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Cl=class{static triangulate(e,t,i=2){return Tp(e,t,i)}},Ci=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];cu(e),hu(i,e);let a=e.length;t.forEach(cu);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,hu(i,t[c]);let l=Cl.triangulate(i,r);for(let c=0;c<l.length;c+=3)s.push(l.slice(c,c+3));return s}};function cu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function hu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var _r=class n extends Ke{constructor(e=new Rn([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let l=0,c=e.length;l<c;l++)a(e[l]);function a(l){let c=[],o=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:u-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Np,y,b,w,M,P,F=!1;if(g){y=g.getSpacedPoints(h),F=!0,d=!1;let C=!!g.isCatmullRomCurve3&&g.closed;b=g.computeFrenetFrames(h,C),w=new E,M=new E,P=new E}d||(v=0,u=0,f=0,m=0);let D=l.extractPoints(o),N=D.shape,k=D.holes;if(!Ci.isClockWise(N)){N=N.reverse();for(let C=0,U=k.length;C<U;C++){let x=k[C];Ci.isClockWise(x)&&(k[C]=x.reverse())}}function O(C){let U=10000000000000001e-36,x=C[0];for(let L=1;L<=C.length;L++){let I=L%C.length,A=C[I],G=A.x-x.x,X=A.y-x.y,Y=G*G+X*X,re=Math.max(Math.abs(A.x),Math.abs(A.y),Math.abs(x.x),Math.abs(x.y));Y<=U*re*re?(C.splice(I,1),L--):x=A}}O(N),k.forEach(O);let Z=k.length,H=N;for(let C=0;C<Z;C++){let U=k[C];N=N.concat(U)}function V(C,U,x){return U||Ee("ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(U,x)}let q=N.length;function W(C,U,x){let L,I,A,G=C.x-U.x,X=C.y-U.y,Y=x.x-C.x,re=x.y-C.y,ve=G*G+X*X,xe=G*re-X*Y;if(Math.abs(xe)>Number.EPSILON){let he=Math.sqrt(ve),Re=Math.sqrt(Y*Y+re*re),Q=U.x-X/he,se=U.y+G/he,ne=((x.x-re/Re-Q)*re-(x.y+Y/Re-se)*Y)/(G*re-X*Y);L=Q+G*ne-C.x,I=se+X*ne-C.y;let pe=L*L+I*I;if(pe<=2)return new te(L,I);A=Math.sqrt(pe/2)}else{let he=!1;G>Number.EPSILON?Y>Number.EPSILON&&(he=!0):G<-Number.EPSILON?Y<-Number.EPSILON&&(he=!0):Math.sign(X)===Math.sign(re)&&(he=!0),he?(L=-X,I=G,A=Math.sqrt(ve)):(L=G,I=X,A=Math.sqrt(ve/2))}return new te(L/A,I/A)}let ie=[];for(let C=0,U=H.length,x=U-1,L=C+1;C<U;C++,x++,L++)x===U&&(x=0),L===U&&(L=0),ie[C]=W(H[C],H[x],H[L]);let de=[],be,ge,_e=ie.concat();for(let C=0,U=Z;C<U;C++){let x=k[C];be=[];for(let L=0,I=x.length,A=I-1,G=L+1;L<I;L++,A++,G++)A===I&&(A=0),G===I&&(G=0),be[L]=W(x[L],x[A],x[G]);de.push(be),_e=_e.concat(be)}if(v===0)ge=Ci.triangulateShape(H,k);else{let C=[],U=[];for(let x=0;x<v;x++){let L=x/v,I=u*Math.cos(L*Math.PI/2),A=f*Math.sin(L*Math.PI/2)+m;for(let G=0,X=H.length;G<X;G++){let Y=V(H[G],ie[G],A);me(Y.x,Y.y,-I),L===0&&C.push(Y)}for(let G=0,X=Z;G<X;G++){let Y=k[G];be=de[G];let re=[];for(let ve=0,xe=Y.length;ve<xe;ve++){let he=V(Y[ve],be[ve],A);me(he.x,he.y,-I),L===0&&re.push(he)}L===0&&U.push(re)}}ge=Ci.triangulateShape(C,U)}let ee=ge.length,ce=f+m;for(let C=0;C<q;C++){let U=d?V(N[C],_e[C],ce):N[C];F?(M.copy(b.normals[0]).multiplyScalar(U.x),w.copy(b.binormals[0]).multiplyScalar(U.y),P.copy(y[0]).add(M).add(w),me(P.x,P.y,P.z)):me(U.x,U.y,0)}for(let C=1;C<=h;C++)for(let U=0;U<q;U++){let x=d?V(N[U],_e[U],ce):N[U];F?(M.copy(b.normals[C]).multiplyScalar(x.x),w.copy(b.binormals[C]).multiplyScalar(x.y),P.copy(y[C]).add(M).add(w),me(P.x,P.y,P.z)):me(x.x,x.y,p/h*C)}for(let C=v-1;C>=0;C--){let U=C/v,x=u*Math.cos(U*Math.PI/2),L=f*Math.sin(U*Math.PI/2)+m;for(let I=0,A=H.length;I<A;I++){let G=V(H[I],ie[I],L);me(G.x,G.y,p+x)}for(let I=0,A=k.length;I<A;I++){let G=k[I];be=de[I];for(let X=0,Y=G.length;X<Y;X++){let re=V(G[X],be[X],L);F?me(re.x,re.y+y[h-1].y,y[h-1].x+x):me(re.x,re.y,p+x)}}}function oe(C,U){let x=C.length;for(;--x>=0;){let L=x,I=x-1;I<0&&(I=C.length-1);for(let A=0,G=h+2*v;A<G;A++){let X=q*A,Y=q*(A+1);$(U+L+X,U+I+X,U+I+Y,U+L+Y)}}}function me(C,U,x){c.push(C),c.push(U),c.push(x)}function Ue(C,U,x){R(C),R(U),R(x);let L=r.length/3,I=_.generateTopUV(i,r,L-3,L-2,L-1);S(I[0]),S(I[1]),S(I[2])}function $(C,U,x,L){R(C),R(U),R(L),R(U),R(x),R(L);let I=r.length/3,A=_.generateSideWallUV(i,r,I-6,I-3,I-2,I-1);S(A[0]),S(A[1]),S(A[3]),S(A[1]),S(A[2]),S(A[3])}function R(C){r.push(c[3*C+0]),r.push(c[3*C+1]),r.push(c[3*C+2])}function S(C){s.push(C.x),s.push(C.y)}(function(){let C=r.length/3;if(d){let U=0,x=q*U;for(let L=0;L<ee;L++){let I=ge[L];Ue(I[2]+x,I[1]+x,I[0]+x)}U=h+2*v,x=q*U;for(let L=0;L<ee;L++){let I=ge[L];Ue(I[0]+x,I[1]+x,I[2]+x)}}else{for(let U=0;U<ee;U++){let x=ge[U];Ue(x[2],x[1],x[0])}for(let U=0;U<ee;U++){let x=ge[U];Ue(x[0]+q*h,x[1]+q*h,x[2]+q*h)}}i.addGroup(C,r.length/3-C,0)})(),(function(){let C=r.length/3,U=0;oe(H,U),U+=H.length;for(let x=0,L=k.length;x<L;x++){let I=k[x];oe(I,U),U+=I.length}i.addGroup(C,r.length/3-C,1)})()}this.setAttribute("position",new we(r,3)),this.setAttribute("uv",new we(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let l=t[s];r.shapes.push(l.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let l=t[e.shapes[s]];i.push(l)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ua[r.type]().fromJSON(r)),new n(i,e.options)}},Np={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],l=e[3*i],c=e[3*i+1],o=e[3*r],h=e[3*r+1];return[new te(s,a),new te(l,c),new te(o,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],l=e[3*t+1],c=e[3*t+2],o=e[3*i],h=e[3*i+1],p=e[3*i+2],d=e[3*r],u=e[3*r+1],f=e[3*r+2],m=e[3*s],v=e[3*s+1],g=e[3*s+2];return Math.abs(l-h)<Math.abs(a-o)?[new te(a,1-c),new te(o,1-p),new te(d,1-f),new te(m,1-g)]:[new te(l,1-c),new te(h,1-p),new te(u,1-f),new te(v,1-g)]}},mn=class n extends pn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Oa=class n extends Ke{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=ze(r,0,2*Math.PI);let s=[],a=[],l=[],c=[],o=[],h=1/t,p=new E,d=new te,u=new E,f=new E,m=new E,v=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:v=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,u.x=1*g,u.y=-v,u.z=0*g,m.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(m.x,m.y,m.z);break;default:v=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,u.x=1*g,u.y=-v,u.z=0*g,f.copy(u),u.x+=m.x,u.y+=m.y,u.z+=m.z,u.normalize(),c.push(u.x,u.y,u.z),m.copy(f)}for(let _=0;_<=t;_++){let y=i+_*h*r,b=Math.sin(y),w=Math.cos(y);for(let M=0;M<=e.length-1;M++){p.x=e[M].x*b,p.y=e[M].y,p.z=e[M].x*w,a.push(p.x,p.y,p.z),d.x=_/t,d.y=M/(e.length-1),l.push(d.x,d.y);let P=c[3*M+0]*b,F=c[3*M+1],D=c[3*M+0]*w;o.push(P,F,D)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let b=y+_*e.length,w=b,M=b+e.length,P=b+e.length+1,F=b+1;s.push(w,M,F),s.push(P,F,M)}this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("uv",new we(l,2)),this.setAttribute("normal",new we(o,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Ba=class n extends pn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Yi=class n extends Ke{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,l=Math.floor(i),c=Math.floor(r),o=l+1,h=c+1,p=e/l,d=t/c,u=[],f=[],m=[],v=[];for(let g=0;g<h;g++){let _=g*d-a;for(let y=0;y<o;y++){let b=y*p-s;f.push(b,-_,0),m.push(0,0,1),v.push(y/l),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<l;_++){let y=_+o*g,b=_+o*(g+1),w=_+1+o*(g+1),M=_+1+o*g;u.push(y,b,M),u.push(b,w,M)}this.setIndex(u),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(m,3)),this.setAttribute("uv",new we(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},za=class n extends Ke{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let l=[],c=[],o=[],h=[],p=e,d=(t-e)/(r=Math.max(1,r)),u=new E,f=new te;for(let m=0;m<=r;m++){for(let v=0;v<=i;v++){let g=s+v/i*a;u.x=p*Math.cos(g),u.y=p*Math.sin(g),c.push(u.x,u.y,u.z),o.push(0,0,1),f.x=(u.x/t+1)/2,f.y=(u.y/t+1)/2,h.push(f.x,f.y)}p+=d}for(let m=0;m<r;m++){let v=m*(i+1);for(let g=0;g<i;g++){let _=g+v,y=_,b=_+i+1,w=_+i+2,M=_+1;l.push(y,b,M),l.push(b,w,M)}}this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ga=class n extends Ke{constructor(e=new Rn([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],l=0,c=0;if(Array.isArray(e)===!1)o(e);else for(let h=0;h<e.length;h++)o(e[h]),this.addGroup(l,c,h),l+=c,c=0;function o(h){let p=r.length/3,d=h.extractPoints(t),u=d.shape,f=d.holes;Ci.isClockWise(u)===!1&&(u=u.reverse());for(let v=0,g=f.length;v<g;v++){let _=f[v];Ci.isClockWise(_)===!0&&(f[v]=_.reverse())}let m=Ci.triangulateShape(u,f);for(let v=0,g=f.length;v<g;v++){let _=f[v];u=u.concat(_)}for(let v=0,g=u.length;v<g;v++){let _=u[v];r.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let v=0,g=m.length;v<g;v++){let _=m[v],y=_[0]+p,b=_[1]+p,w=_[2]+p;i.push(y,b,w),c+=3}}this.setIndex(i),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(s,3)),this.setAttribute("uv",new we(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},Zi=class n extends Ke{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+l,Math.PI),o=0,h=[],p=new E,d=new E,u=[],f=[],m=[],v=[];for(let g=0;g<=i;g++){let _=[],y=g/i,b=a+y*l,w=e*Math.cos(b),M=Math.sqrt(e*e-w*w),P=0;g===0&&a===0?P=.5/t:g===i&&c===Math.PI&&(P=-.5/t);for(let F=0;F<=t;F++){let D=F/t,N=r+D*s;p.x=-M*Math.cos(N),p.y=w,p.z=M*Math.sin(N),f.push(p.x,p.y,p.z),d.copy(p).normalize(),m.push(d.x,d.y,d.z),v.push(D+P,1-y),_.push(o++)}h.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let y=h[g][_+1],b=h[g][_],w=h[g+1][_],M=h[g+1][_+1];(g!==0||a>0)&&u.push(y,b,M),(g!==i-1||c<Math.PI)&&u.push(b,w,M)}this.setIndex(u),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(m,3)),this.setAttribute("uv",new we(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Va=class n extends pn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},In=class n extends Ke{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI,a=0,l=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:l},i=Math.floor(i),r=Math.floor(r);let c=[],o=[],h=[],p=[],d=new E,u=new E,f=new E;for(let m=0;m<=i;m++){let v=a+m/i*l;for(let g=0;g<=r;g++){let _=g/r*s;u.x=(e+t*Math.cos(v))*Math.cos(_),u.y=(e+t*Math.cos(v))*Math.sin(_),u.z=t*Math.sin(v),o.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),f.subVectors(u,d).normalize(),h.push(f.x,f.y,f.z),p.push(g/r),p.push(m/i)}}for(let m=1;m<=i;m++)for(let v=1;v<=r;v++){let g=(r+1)*m+v-1,_=(r+1)*(m-1)+v-1,y=(r+1)*(m-1)+v,b=(r+1)*m+v;c.push(g,_,b),c.push(_,y,b)}this.setIndex(c),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ka=class n extends Ke{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let l=[],c=[],o=[],h=[],p=new E,d=new E,u=new E,f=new E,m=new E,v=new E,g=new E;for(let y=0;y<=i;++y){let b=y/i*s*Math.PI*2;_(b,s,a,e,u),_(b+.01,s,a,e,f),v.subVectors(f,u),g.addVectors(f,u),m.crossVectors(v,g),g.crossVectors(m,v),m.normalize(),g.normalize();for(let w=0;w<=r;++w){let M=w/r*Math.PI*2,P=-t*Math.cos(M),F=t*Math.sin(M);p.x=u.x+(P*g.x+F*m.x),p.y=u.y+(P*g.y+F*m.y),p.z=u.z+(P*g.z+F*m.z),c.push(p.x,p.y,p.z),d.subVectors(p,u).normalize(),o.push(d.x,d.y,d.z),h.push(y/i),h.push(w/r)}}for(let y=1;y<=i;y++)for(let b=1;b<=r;b++){let w=(r+1)*(y-1)+(b-1),M=(r+1)*y+(b-1),P=(r+1)*y+b,F=(r+1)*(y-1)+b;l.push(w,M,F),l.push(M,P,F)}function _(y,b,w,M,P){let F=Math.cos(y),D=Math.sin(y),N=w/b*y,k=Math.cos(N);P.x=M*(2+k)*.5*F,P.y=M*(2+k)*D*.5,P.z=M*Math.sin(N)*.5}this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ha=class n extends Ke{constructor(e=new cs(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let l=new E,c=new E,o=new te,h=new E,p=[],d=[],u=[],f=[];function m(v){h=e.getPointAt(v/t,h);let g=a.normals[v],_=a.binormals[v];for(let y=0;y<=r;y++){let b=y/r*Math.PI*2,w=Math.sin(b),M=-Math.cos(b);c.x=M*g.x+w*_.x,c.y=M*g.y+w*_.y,c.z=M*g.z+w*_.z,c.normalize(),d.push(c.x,c.y,c.z),l.x=h.x+i*c.x,l.y=h.y+i*c.y,l.z=h.z+i*c.z,p.push(l.x,l.y,l.z)}}(function(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),(function(){for(let v=0;v<=t;v++)for(let g=0;g<=r;g++)o.x=v/t,o.y=g/r,u.push(o.x,o.y)})(),(function(){for(let v=1;v<=t;v++)for(let g=1;g<=r;g++){let _=(r+1)*(v-1)+(g-1),y=(r+1)*v+(g-1),b=(r+1)*v+g,w=(r+1)*(v-1)+g;f.push(_,y,w),f.push(y,b,w)}})()})(),this.setIndex(f),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Ua[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Wa=class extends Ke{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new E,s=new E;if(e.index!==null){let a=e.attributes.position,l=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:l.count,materialIndex:0}]);for(let o=0,h=c.length;o<h;++o){let p=c[o],d=p.start;for(let u=d,f=d+p.count;u<f;u+=3)for(let m=0;m<3;m++){let v=l.getX(u+m),g=l.getX(u+(m+1)%3);r.fromBufferAttribute(a,v),s.fromBufferAttribute(a,g),uu(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let l=0,c=a.count/3;l<c;l++)for(let o=0;o<3;o++){let h=3*l+o,p=3*l+(o+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,p),uu(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new we(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function uu(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var Ig=Object.freeze({__proto__:null,BoxGeometry:Cn,CapsuleGeometry:Ea,CircleGeometry:Aa,ConeGeometry:Ca,CylinderGeometry:dn,DodecahedronGeometry:Ra,EdgesGeometry:Pa,ExtrudeGeometry:_r,IcosahedronGeometry:mn,LatheGeometry:Oa,OctahedronGeometry:Ba,PlaneGeometry:Yi,PolyhedronGeometry:pn,RingGeometry:za,ShapeGeometry:Ga,SphereGeometry:Zi,TetrahedronGeometry:Va,TorusGeometry:In,TorusKnotGeometry:ka,TubeGeometry:Ha,WireframeGeometry:Wa});function Bn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(du(r))r.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(du(r[0])){let s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Pt(n){let e={};for(let t=0;t<n.length;t++){let i=Bn(n[t]);for(let r in i)e[r]=i[r]}return e}function du(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Uc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var ad={clone:Bn,merge:Pt},Ut=class extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bn(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ce().setHex(r.value);break;case"v2":this.uniforms[i].value=new te().fromArray(r.value);break;case"v3":this.uniforms[i].value=new E().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Je().fromArray(r.value);break;case"m3":this.uniforms[i].value=new De().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Fe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xa=class extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fs=class extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ja=class extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qa=class extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ma(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}var fn=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let l=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let l=t[1];e<l&&(i=2,s=l);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let l=i+a>>>1;e<t[l]?a=l:i=l+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ya=class extends fn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xl,endingEnd:xl}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,l=r[s],c=r[a];if(l===void 0)switch(this.getSettings_().endingStart){case yl:s=e,l=2*t-i;break;case Ml:s=r.length-2,l=t+r[s]-r[s+1];break;default:s=e,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case yl:a=e,c=2*i-t;break;case Ml:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}let o=.5*(i-t),h=this.valueSize;this._weightPrev=o/(t-l),this._weightNext=o/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(i-t)/(r-t),m=f*f,v=m*f,g=-d*v+2*d*m-d*f,_=(1+d)*v+(-1.5-2*d)*m+(-.5+d)*f+1,y=(-1-u)*v+(1.5+u)*m+.5*f,b=u*v-u*m;for(let w=0;w!==l;++w)s[w]=g*a[h+w]+_*a[o+w]+y*a[c+w]+b*a[p+w];return s}},Za=class extends fn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=(i-t)/(r-t),p=1-h;for(let d=0;d!==l;++d)s[d]=a[o+d]*p+a[c+d]*h;return s}},Ja=class extends fn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ka=class extends fn{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this.inTangents,p=this.outTangents;if(!h||!p){let f=(i-t)/(r-t),m=1-f;for(let v=0;v!==l;++v)s[v]=a[o+v]*m+a[c+v]*f;return s}let d=2*l,u=e-1;for(let f=0;f!==l;++f){let m=a[o+f],v=a[c+f],g=u*d+2*f,_=p[g],y=p[g+1],b=e*d+2*f,w=h[b],M=h[b+1],P,F,D,N,k,O=(i-t)/(r-t);for(let Z=0;Z<8;Z++){P=O*O,F=P*O,D=1-O,N=D*D,k=N*D;let H=k*t+3*N*O*_+3*D*P*w+F*r-i;if(Math.abs(H)<1e-10)break;let V=3*N*(_-t)+6*D*O*(w-_)+3*P*(r-w);if(Math.abs(V)<1e-10)break;O-=H/V,O=Math.max(0,Math.min(1,O))}s[f]=k*m+3*N*O*y+3*D*P*M+F*v}return s}},qt=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ma(t,this.TimeBufferType),this.values=ma(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ma(e.times,Array),values:ma(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ka(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Wr:t=this.InterpolantFactoryMethodDiscrete;break;case ya:t=this.InterpolantFactoryMethodLinear;break;case _a:t=this.InterpolantFactoryMethodSmooth;break;case vl:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Te("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return _a;case this.InterpolantFactoryMethodBezier:return vl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let l=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ee("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Ee("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==s;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){Ee("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){Ee("KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(r!==void 0&&rp(r))for(let l=0,c=r.length;l!==c;++l){let o=r[l];if(isNaN(o)){Ee("KeyframeTrack: Value is not a valid number.",this,l,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===_a,s=e.length-1,a=1;for(let l=1;l<s;++l){let c=!1,o=e[l];if(o!==e[l+1]&&(l!==1||o!==e[0]))if(r)c=!0;else{let h=l*i,p=h-i,d=h+i;for(let u=0;u!==i;++u){let f=t[h+u];if(f!==t[p+u]||f!==t[d+u]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let h=l*i,p=a*i;for(let d=0;d!==i;++d)t[p+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let l=s*i,c=a*i,o=0;o!==i;++o)t[c+o]=t[l+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};qt.prototype.ValueTypeName="",qt.prototype.TimeBufferType=Float32Array,qt.prototype.ValueBufferType=Float32Array,qt.prototype.DefaultInterpolation=ya;var cn=class extends qt{constructor(e,t,i){super(e,t,i)}};cn.prototype.ValueTypeName="bool",cn.prototype.ValueBufferType=Array,cn.prototype.DefaultInterpolation=Wr,cn.prototype.InterpolantFactoryMethodLinear=void 0,cn.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends qt{constructor(e,t,i,r){super(e,t,i,r)}};$a.prototype.ValueTypeName="color";var Qa=class extends qt{constructor(e,t,i,r){super(e,t,i,r)}};Qa.prototype.ValueTypeName="number";var eo=class extends fn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(i-t)/(r-t),o=e*l;for(let h=o+l;o!==h;o+=4)Gt.slerpFlat(s,0,a,o-l,a,o,c);return s}},gs=class extends qt{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}};gs.prototype.ValueTypeName="quaternion",gs.prototype.InterpolantFactoryMethodSmooth=void 0;var hn=class extends qt{constructor(e,t,i){super(e,t,i)}};hn.prototype.ValueTypeName="string",hn.prototype.ValueBufferType=Array,hn.prototype.DefaultInterpolation=Wr,hn.prototype.InterpolantFactoryMethodLinear=void 0,hn.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends qt{constructor(e,t,i,r){super(e,t,i,r)}};to.prototype.ValueTypeName="vector";var io=class{constructor(e,t,i){let r=this,s,a=!1,l=0,c=0,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){c++,a===!1&&r.onStart!==void 0&&r.onStart(h,l,c),a=!0},this.itemEnd=function(h){l++,r.onProgress!==void 0&&r.onProgress(h,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,p){return o.push(h,p),this},this.removeHandler=function(h){let p=o.indexOf(h);return p!==-1&&o.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=o.length;p<d;p+=2){let u=o[p],f=o[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},od=new io,no=class{constructor(e){this.manager=e!==void 0?e:od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};no.DEFAULT_MATERIAL_NAME="__DEFAULT";var _s=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},vs=class extends _s{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},gl=new Fe,pu=new E,mu=new E,Rl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(pu),mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mu),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===cr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fa=new E,ga=new Gt,Ei=new E,vr=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fa,ga,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,ga,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(fa,ga,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,ga,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ln=new E,fu=new te,gu=new te,At=class extends vr{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*ur*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*or*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ur*Math.atan(Math.tan(.5*or*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ln.x,ln.y).multiplyScalar(-e/ln.z),ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ln.x,ln.y).multiplyScalar(-e/ln.z)}getViewSize(e,t){return this.getViewBounds(e,fu,gu),t.subVectors(gu,fu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*or*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,o=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/o,r*=a.width/c,i*=a.height/o}let l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var xr=class extends vr{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=o*this.view.offsetX,a=s+o*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pl=class extends Rl{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Pl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Lg=new Fe,Dg=new Fe,Ng=new Fe;var sr=-90,ro=class extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new At(sr,1,e,t);r.layers=this.layers,this.add(r);let s=new At(sr,1,e,t);s.layers=this.layers,this.add(s);let a=new At(sr,1,e,t);a.layers=this.layers,this.add(a);let l=new At(sr,1,e,t);l.layers=this.layers,this.add(l);let c=new At(sr,1,e,t);c.layers=this.layers,this.add(c);let o=new At(sr,1,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,l,c]=t;for(let o of t)this.remove(o);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==cr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,l,c,o,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;v=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,d,u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},so=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ug=new E,Fg=new Gt,Og=new E,Bg=new E,zg=new E;var Gg=new E,Vg=new Gt,kg=new E,Hg=new E;var Fc="\\[\\]\\.:\\/",Up=new RegExp("["+Fc+"]","g"),_l="[^"+Fc+"]",Fp="[^"+Fc.replace("\\.","")+"]",Op=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",_l)+/(WCOD+)?/.source.replace("WCOD",Fp)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_l)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_l)+"$"),Bp=["material","materials","bones","map"],et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Up,"")}static parseTrackName(e){let t=Op.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Bp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let l=s[a];if(l.name===t||l.uuid===t)return l;let c=i(l.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Te("PropertyBinding: No target node found for track: "+this.path+".");if(i){let o=t.objectIndex;switch(i){case"materials":if(!e.material)return void Ee("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===o){o=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Ee("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Ee("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(o!==void 0){if(e[o]===void 0)return void Ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[o]}}let a=e[r];if(a===void 0)return void Ee("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void Ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=class{constructor(n,e,t){let i=t||et.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray],et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wg=new Float32Array(1);var Xg=new Fe;var kc=class kc{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};kc.prototype.isMatrix2=!0;var Il=kc,jg=new te;var qg=new E,Yg=new E,Zg=new E,Jg=new E,Kg=new E,$g=new E,Qg=new E;var e0=new E;var t0=new E,i0=new Fe,n0=new Fe;var r0=new E,s0=new Ce,a0=new Ce;var o0=new E,l0=new E,c0=new E;var h0=new E,u0=new vr;var d0=new si;var p0=new E;function Oc(n,e,t,i){let r=(function(s){switch(s){case Jt:case Zl:return{byteLength:1,components:1};case wr:case Jl:case Ii:return{byteLength:2,components:1};case mo:case fo:return{byteLength:2,components:4};case Ji:case po:case li:return{byteLength:4,components:1};case Kl:case $l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)})(i);switch(t){case 1021:return n*e;case go:case _o:return n*e/r.components*r.byteLength;case 1030:case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case yi:case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}})),typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Gp(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let l=s.array,c=s.usage,o=l.byteLength,h=n.createBuffer(),p;if(n.bindBuffer(a,h),n.bufferData(a,l,c),s.onUploadCallback(),l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)p=s.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else{if(!(l instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);p=n.UNSIGNED_BYTE}return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:o}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,l){let c=a.array,o=a.updateRanges;if(n.bindBuffer(l,s),o.length===0)n.bufferSubData(l,0,c);else{o.sort((p,d)=>p.start-d.start);let h=0;for(let p=1;p<o.length;p++){let d=o[h],u=o[p];u.start<=d.start+d.count+1?d.count=Math.max(d.count,u.start+u.count-d.start):(++h,o[h]=u)}o.length=h+1;for(let p=0,d=o.length;p<d;p++){let u=o[p];n.bufferSubData(l,u.start*c.BYTES_PER_ELEMENT,c,u.start,u.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}var Oe={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},le={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new E},probesMax:{value:new E},probesResolution:{value:new E}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Di={basic:{uniforms:Pt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Pt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Pt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Pt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Pt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Pt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Pt([le.points,le.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Pt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Pt([le.common,le.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Pt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Pt([le.sprite,le.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Pt([le.common,le.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Pt([le.lights,le.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Di.physical={uniforms:Pt([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var Eo={r:0,b:0,g:0},Vp=new Fe,Id=new De;function kp(n,e,t,i,r,s){let a=new Ce(0),l,c,o=r===!0?0:1,h=null,p=0,d=null;function u(m){let v=m.isScene===!0?m.background:null;if(v&&v.isTexture){let g=m.backgroundBlurriness>0;v=e.get(v,g)}return v}function f(m,v){m.getRGB(Eo,Uc(n)),t.buffers.color.setClear(Eo.r,Eo.g,Eo.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),o=v,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,f(a,o)},render:function(m){let v=!1,g=u(m);g===null?f(a,o):g&&g.isColor&&(f(g,1),v=!0);let _=n.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(m,v){let g=u(v);g&&(g.isCubeTexture||g.mapping===bs)?(c===void 0&&(c=new _t(new Cn(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:Bn(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,y,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(v.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Id),c.material.toneMapped=He.getTransfer(g.colorSpace)!==Ye,h===g&&p===g.version&&d===n.toneMapping||(c.material.needsUpdate=!0,h=g,p=g.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new _t(new Yi(2,2),new Ut({name:"BackgroundMaterial",uniforms:Bn(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=He.getTransfer(g.colorSpace)!==Ye,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&p===g.version&&d===n.toneMapping||(l.material.needsUpdate=!0,h=g,p=g.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function Hp(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=o(null),s=r,a=!1;function l(g){return n.bindVertexArray(g)}function c(g){return n.deleteVertexArray(g)}function o(g){let _=[],y=[],b=[];for(let w=0;w<t;w++)_[w]=0,y[w]=0,b[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:y,attributeDivisors:b,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let _=0,y=g.length;_<y;_++)g[_]=0}function p(g){d(g,0)}function d(g,_){let y=s.newAttributes,b=s.enabledAttributes,w=s.attributeDivisors;y[g]=1,b[g]===0&&(n.enableVertexAttribArray(g),b[g]=1),w[g]!==_&&(n.vertexAttribDivisor(g,_),w[g]=_)}function u(){let g=s.newAttributes,_=s.enabledAttributes;for(let y=0,b=_.length;y<b;y++)_[y]!==g[y]&&(n.disableVertexAttribArray(y),_[y]=0)}function f(g,_,y,b,w,M,P){P===!0?n.vertexAttribIPointer(g,_,y,w,M):n.vertexAttribPointer(g,_,y,b,w,M)}function m(){v(),a=!0,s!==r&&(s=r,l(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,_,y,b,w){let M=!1,P=(function(F,D,N,k){let O=k.wireframe===!0,Z=i[D.id];Z===void 0&&(Z={},i[D.id]=Z);let H=F.isInstancedMesh===!0?F.id:0,V=Z[H];V===void 0&&(V={},Z[H]=V);let q=V[N.id];q===void 0&&(q={},V[N.id]=q);let W=q[O];return W===void 0&&(W=o(n.createVertexArray()),q[O]=W),W})(g,b,y,_);s!==P&&(s=P,l(s.object)),M=(function(F,D,N,k){let O=s.attributes,Z=D.attributes,H=0,V=N.getAttributes();for(let q in V)if(V[q].location>=0){let W=O[q],ie=Z[q];if(ie===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor)),W===void 0||W.attribute!==ie||ie&&W.data!==ie.data)return!0;H++}return s.attributesNum!==H||s.index!==k})(g,b,y,w),M&&(function(F,D,N,k){let O={},Z=D.attributes,H=0,V=N.getAttributes();for(let q in V)if(V[q].location>=0){let W=Z[q];W===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(W=F.instanceColor));let ie={};ie.attribute=W,W&&W.data&&(ie.data=W.data),O[q]=ie,H++}s.attributes=O,s.attributesNum=H,s.index=k})(g,b,y,w),w!==null&&e.update(w,n.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,(function(F,D,N,k){h();let O=k.attributes,Z=N.getAttributes(),H=D.defaultAttributeValues;for(let V in Z){let q=Z[V];if(q.location>=0){let W=O[V];if(W===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(W=F.instanceColor)),W!==void 0){let ie=W.normalized,de=W.itemSize,be=e.get(W);if(be===void 0)continue;let ge=be.buffer,_e=be.type,ee=be.bytesPerElement,ce=_e===n.INT||_e===n.UNSIGNED_INT||W.gpuType===po;if(W.isInterleavedBufferAttribute){let oe=W.data,me=oe.stride,Ue=W.offset;if(oe.isInstancedInterleavedBuffer){for(let $=0;$<q.locationSize;$++)d(q.location+$,oe.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let $=0;$<q.locationSize;$++)p(q.location+$);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let $=0;$<q.locationSize;$++)f(q.location+$,de/q.locationSize,_e,ie,me*ee,(Ue+de/q.locationSize*$)*ee,ce)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<q.locationSize;oe++)d(q.location+oe,W.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<q.locationSize;oe++)p(q.location+oe);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let oe=0;oe<q.locationSize;oe++)f(q.location+oe,de/q.locationSize,_e,ie,de*ee,de/q.locationSize*oe*ee,ce)}}else if(H!==void 0){let ie=H[V];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(q.location,ie);break;case 3:n.vertexAttrib3fv(q.location,ie);break;case 4:n.vertexAttrib4fv(q.location,ie);break;default:n.vertexAttrib1fv(q.location,ie)}}}}u()})(g,_,y,b),w!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))},reset:m,resetDefaultState:v,dispose:function(){m();for(let g in i){let _=i[g];for(let y in _){let b=_[y];for(let w in b){let M=b[w];for(let P in M)c(M[P].object),delete M[P];delete b[w]}}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let _=i[g.id];for(let y in _){let b=_[y];for(let w in b){let M=b[w];for(let P in M)c(M[P].object),delete M[P];delete b[w]}}delete i[g.id]},releaseStatesOfObject:function(g){for(let _ in i){let y=i[_],b=g.isInstancedMesh===!0?g.id:0,w=y[b];if(w!==void 0){for(let M in w){let P=w[M];for(let F in P)c(P[F].object),delete P[F];delete w[M]}delete y[b],Object.keys(y).length===0&&delete i[_]}}},releaseStatesOfProgram:function(g){for(let _ in i){let y=i[_];for(let b in y){let w=y[b];if(w[g.id]===void 0)continue;let M=w[g.id];for(let P in M)c(M[P].object),delete M[P];delete w[g.id]}}},initAttributes:h,enableAttribute:p,disableUnusedAttributes:u}}function Wp(n,e,t){let i;this.setMode=function(r){i=r},this.render=function(r,s){n.drawArrays(i,r,s),t.update(s,i,1)},this.renderInstances=function(r,s,a){a!==0&&(n.drawArraysInstanced(i,r,s,a),t.update(s,i,a))},this.renderMultiDraw=function(r,s,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,r,0,s,0,a);let l=0;for(let c=0;c<a;c++)l+=s[c];t.update(l,i,1)}}function Xp(n,e,t,i){let r;function s(h){if(h==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(Te("WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=t.logarithmicDepthBuffer===!0,o=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");return t.reversedDepthBuffer===!0&&o===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(h){return h===yi||i.convert(h)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let p=h===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==Jt&&i.convert(h)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==li&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:o,maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function jp(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Ai,l=new De,c={value:null,needsUpdate:!1};function o(h,p,d,u){let f=h!==null?h.length:0,m=null;if(f!==0){if(m=c.value,u!==!0||m===null){let v=d+4*f,g=p.matrixWorldInverse;l.getNormalMatrix(g),(m===null||m.length<v)&&(m=new Float32Array(v));for(let _=0,y=d;_!==f;++_,y+=4)a.copy(h[_]).applyMatrix4(g,l),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let d=h.length!==0||p||i!==0||r;return r=p,i=h.length,d},this.beginShadows=function(){s=!0,o(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=o(h,p,0)},this.setState=function(h,p,d){let u=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,v=n.get(h);if(!r||u===null||u.length===0||s&&!m)s?o(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=s?0:i,_=4*g,y=v.clippingState||null;c.value=y,y=o(u,p,_,d);for(let b=0;b!==_;++b)y[b]=t[b];v.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}Id.set(-1,0,0,0,1,0,0,0,1);var ld=[.125,.215,.35,.446,.526,.582],ws=20,Es=new xr,cd=new Ce,Hc=null,Wc=0,Xc=0,jc=!1,qp=new E,Co=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:l=qp}=s;Hc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hc,Wc,Xc),this._renderer.xr.enabled=jc,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Ln?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Ii,format:yi,colorSpace:Xr,depthBuffer:!1},r=hd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let l=[],c=[],o=[],h=a,p=a-4+1+ld.length;for(let d=0;d<p;d++){let u=Math.pow(2,h);l.push(u);let f=1/u;d>a-4?f=ld[d-a+4-1]:d===0&&(f=0),c.push(f);let m=1/(u-2),v=-m,g=1+m,_=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,b=6,w=3,M=2,P=1,F=new Float32Array(w*b*y),D=new Float32Array(M*b*y),N=new Float32Array(P*b*y);for(let O=0;O<y;O++){let Z=O%3*2/3-1,H=O>2?0:-1,V=[Z,H,0,Z+2/3,H,0,Z+2/3,H+1,0,Z,H,0,Z+2/3,H+1,0,Z,H+1,0];F.set(V,w*b*O),D.set(_,M*b*O);let q=[O,O,O,O,O,O];N.set(q,P*b*O)}let k=new Ke;k.setAttribute("position",new Ct(F,w)),k.setAttribute("uv",new Ct(D,M)),k.setAttribute("faceIndex",new Ct(N,P)),o.push(new _t(k,null)),h>4&&h--}return{lodMeshes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,l,c){let o=new Float32Array(ws),h=new E(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/l,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,l,c){return new Ut({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/l,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new _t(new Ke,e);this._renderer.compile(t,Es)}_sceneToCubeUV(e,t,i,r,s){let a=new At(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],o=this._renderer,h=o.autoClear,p=o.toneMapping;o.getClearColor(cd),o.toneMapping=xi,o.autoClear=!1,o.state.buffers.depth.getReversed()&&(o.setRenderTarget(r),o.clearDepth(),o.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new Cn,new oi({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,f=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,f=!0):(u.color.copy(cd),f=!0);for(let v=0;v<6;v++){let g=v%3;g===0?(a.up.set(0,l[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[v],s.y,s.z)):g===1?(a.up.set(0,0,l[v]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[v],s.z)):(a.up.set(0,l[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[v]));let _=this._cubeSize;Ar(r,g*_,v>2?_:0,_,_),o.setRenderTarget(r),f&&o.render(d,a),o.render(e,a)}o.toneMapping=p,o.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Tr||e.mapping===Ln;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let l=this._cubeSize;Ar(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Es)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms,o=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(o*o-h*h)*(0+1.25*o),{_lodMax:d}=this,u=this._sizeLods[i],f=3*u*(i>d-4?i-d+4:0),m=4*(this._cubeSize-u);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=d-t,Ar(s,f,m,3*u,2*u),r.setRenderTarget(s),r.render(l,Es),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=d-i,Ar(e,f,m,3*u,2*u),r.setRenderTarget(e),r.render(l,Es)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,l){let c=this._renderer,o=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ee("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=o;let p=o.uniforms,d=this._sizeLods[i]-1,u=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/u,m=isFinite(s)?1+Math.floor(3*f):ws;m>ws&&Te(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let v=[],g=0;for(let b=0;b<ws;++b){let w=b/f,M=Math.exp(-w*w/2);v.push(M),b===0?g+=M:b<m&&(g+=2*M)}for(let b=0;b<v.length;b++)v[b]=v[b]/g;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=v,p.latitudinal.value=a==="latitudinal",l&&(p.poleAxis.value=l);let{_lodMax:_}=this;p.dTheta.value=u,p.mipInt.value=_-i;let y=this._sizeLods[r];Ar(t,3*y*(r>_-4?r-_+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,Es)}};function hd(n,e,t){let i=new Yt(n,e,t);return i.texture.mapping=bs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ar(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ud(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function dd(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}var Po=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cn(5,5,5),s=new Ut({name:"CubemapFromEquirect",uniforms:Bn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Pi});s.uniforms.tEquirect.value=t;let a=new _t(r,s),l=t.minFilter;return t.minFilter===Dn&&(t.minFilter=Rt),new ro(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}};function Yp(n){let e=new WeakMap,t=new WeakMap,i=null;function r(l,c){return c===co?l.mapping=Tr:c===ho&&(l.mapping=Ln),l}function s(l){let c=l.target;c.removeEventListener("dispose",s);let o=e.get(c);o!==void 0&&(e.delete(c),o.dispose())}function a(l){let c=l.target;c.removeEventListener("dispose",a);let o=t.get(c);o!==void 0&&(t.delete(c),o.dispose())}return{get:function(l,c=!1){return l==null?null:c?(function(o){if(o&&o.isTexture){let h=o.mapping,p=h===co||h===ho,d=h===Tr||h===Ln;if(p||d){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return i===null&&(i=new Co(n)),u=p?i.fromEquirectangular(o,u):i.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let m=o.image;return p&&m&&m.height>0||d&&m&&(function(v){let g=0,_=6;for(let y=0;y<_;y++)v[y]!==void 0&&g++;return g===_})(m)?(i===null&&(i=new Co(n)),u=p?i.fromEquirectangular(o):i.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o})(l):(function(o){if(o&&o.isTexture){let h=o.mapping;if(h===co||h===ho){if(e.has(o))return r(e.get(o).texture,o.mapping);{let p=o.image;if(p&&p.height>0){let d=new Po(p.height);return d.fromEquirectangularTexture(n,o),e.set(o,d),o.addEventListener("dispose",s),r(d.texture,o.mapping)}return null}}}return o})(l)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function Zp(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&En("WebGLRenderer: "+i+" extension not supported."),r}}}function Jp(n,e,t,i){let r={},s=new WeakMap;function a(c){let o=c.target;o.index!==null&&e.remove(o.index);for(let p in o.attributes)e.remove(o.attributes[p]);o.removeEventListener("dispose",a),delete r[o.id];let h=s.get(o);h&&(e.remove(h),s.delete(o)),i.releaseStatesOfGeometry(o),o.isInstancedBufferGeometry===!0&&delete o._maxInstanceCount,t.memory.geometries--}function l(c){let o=[],h=c.index,p=c.attributes.position,d=0;if(p===void 0)return;if(h!==null){let m=h.array;d=h.version;for(let v=0,g=m.length;v<g;v+=3){let _=m[v+0],y=m[v+1],b=m[v+2];o.push(_,y,y,b,b,_)}}else{let m=p.array;d=p.version;for(let v=0,g=m.length/3-1;v<g;v+=3){let _=v+0,y=v+1,b=v+2;o.push(_,y,y,b,b,_)}}let u=new(p.count>=65535?Qr:$r)(o,1);u.version=d;let f=s.get(c);f&&e.remove(f),s.set(c,u)}return{get:function(c,o){return r[o.id]===!0||(o.addEventListener("dispose",a),r[o.id]=!0,t.memory.geometries++),o},update:function(c){let o=c.attributes;for(let h in o)e.update(o[h],n.ARRAY_BUFFER)},getWireframeAttribute:function(c){let o=s.get(c);if(o){let h=c.index;h!==null&&o.version<h.version&&l(c)}else l(c);return s.get(c)}}}function Kp(n,e,t){let i,r,s;this.setMode=function(a){i=a},this.setIndex=function(a){r=a.type,s=a.bytesPerElement},this.render=function(a,l){n.drawElements(i,l,r,a*s),t.update(l,i,1)},this.renderInstances=function(a,l,c){c!==0&&(n.drawElementsInstanced(i,l,r,a*s,c),t.update(l,i,c))},this.renderMultiDraw=function(a,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,a,0,c);let o=0;for(let h=0;h<c;h++)o+=l[h];t.update(o,i,1)}}function $p(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:Ee("WebGLInfo: Unknown draw mode:",i)}}}}function Qp(n,e,t){let i=new WeakMap,r=new Je;return{update:function(s,a,l){let c=s.morphTargetInfluences,o=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=o!==void 0?o.length:0,p=i.get(a);if(p===void 0||p.count!==h){let F=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",F)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,u=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],_=0;d===!0&&(_=1),u===!0&&(_=2),f===!0&&(_=3);let y=a.attributes.position.count*_,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*b*4*h),M=new Yr(w,y,b,h);M.type=li,M.needsUpdate=!0;let P=4*_;for(let D=0;D<h;D++){let N=m[D],k=v[D],O=g[D],Z=y*b*4*D;for(let H=0;H<N.count;H++){let V=H*P;d===!0&&(r.fromBufferAttribute(N,H),w[Z+V+0]=r.x,w[Z+V+1]=r.y,w[Z+V+2]=r.z,w[Z+V+3]=0),u===!0&&(r.fromBufferAttribute(k,H),w[Z+V+4]=r.x,w[Z+V+5]=r.y,w[Z+V+6]=r.z,w[Z+V+7]=0),f===!0&&(r.fromBufferAttribute(O,H),w[Z+V+8]=r.x,w[Z+V+9]=r.y,w[Z+V+10]=r.z,w[Z+V+11]=O.itemSize===4?r.w:1)}}p={count:h,texture:M,size:new te(y,b)},i.set(a,p),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<c.length;f++)d+=c[f];let u=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",u),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}}}function em(n,e,t,i,r){let s=new WeakMap;function a(l){let c=l.target;c.removeEventListener("dispose",a),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:function(l){let c=r.render.frame,o=l.geometry,h=e.get(l,o);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h},dispose:function(){s=new WeakMap}}}var tm={[kl]:"LINEAR_TONE_MAPPING",[Hl]:"REINHARD_TONE_MAPPING",[Wl]:"CINEON_TONE_MAPPING",[Ss]:"ACES_FILMIC_TONE_MAPPING",[jl]:"AGX_TONE_MAPPING",[ql]:"NEUTRAL_TONE_MAPPING",[Xl]:"CUSTOM_TONE_MAPPING"};function im(n,e,t,i,r,s){let a=new Yt(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new qi(e,t):void 0}),l=new Yt(e,t,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),c=new Ke;c.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new we([0,2,0,0,2,0],2));let o=new Xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new _t(c,o),p=new xr(-1,1,1,-1,0,1),d,u=null,f=null,m=!1,v=null,g=[],_=!1;this.setSize=function(y,b){a.setSize(y,b),l.setSize(y,b);for(let w=0;w<g.length;w++){let M=g[w];M.setSize&&M.setSize(y,b)}},this.setEffects=function(y){g=y,_=g.length>0&&g[0].isRenderPass===!0;let b=a.width,w=a.height;for(let M=0;M<g.length;M++){let P=g[M];P.setSize&&P.setSize(b,w)}},this.begin=function(y,b){if(m||y.toneMapping===xi&&g.length===0)return!1;if(v=b,b!==null){let w=b.width,M=b.height;a.width===w&&a.height===M||this.setSize(w,M)}return _===!1&&y.setRenderTarget(a),d=y.toneMapping,y.toneMapping=xi,!0},this.hasRenderPass=function(){return _},this.end=function(y,b){y.toneMapping=d,m=!0;let w=a,M=l;for(let P=0;P<g.length;P++){let F=g[P];if(F.enabled!==!1&&(F.render(y,M,w,b),F.needsSwap!==!1)){let D=w;w=M,M=D}}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,o.defines={},He.getTransfer(u)===Ye&&(o.defines.SRGB_TRANSFER="");let P=tm[f];P&&(o.defines[P]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(v),y.render(h,p),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),l.dispose(),c.dispose(),o.dispose()}}var Ld=new zt,Zc=new qi(1,1),Dd=new Yr,Nd=new ba,Ud=new rs,pd=[],md=[],fd=new Float32Array(16),gd=new Float32Array(9),_d=new Float32Array(4);function Rr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=pd[r];if(s===void 0&&(s=new Float32Array(r),pd[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(s,l)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Lo(n,e){let t=md[e];t===void 0&&(t=new Int32Array(e),md[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function nm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function sm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function am(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function om(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;_d.set(i),n.uniformMatrix2fv(this.addr,!1,_d),xt(t,i)}}function lm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;gd.set(i),n.uniformMatrix3fv(this.addr,!1,gd),xt(t,i)}}function cm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;fd.set(i),n.uniformMatrix4fv(this.addr,!1,fd),xt(t,i)}}function hm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function um(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function dm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function pm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function mm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function gm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function _m(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function vm(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),this.type===n.SAMPLER_2D_SHADOW?(Zc.compareFunction=t.isReversedDepthBuffer()?wo:To,s=Zc):s=Ld,t.setTexture2D(e||s,r)}function xm(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Nd,r)}function ym(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ud,r)}function Mm(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Dd,r)}function Sm(n,e){n.uniform1fv(this.addr,e)}function bm(n,e){let t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function Tm(n,e){let t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function wm(n,e){let t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function Em(n,e){let t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Am(n,e){let t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Cm(n,e){let t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Rm(n,e){n.uniform1iv(this.addr,e)}function Pm(n,e){n.uniform2iv(this.addr,e)}function Im(n,e){n.uniform3iv(this.addr,e)}function Lm(n,e){n.uniform4iv(this.addr,e)}function Dm(n,e){n.uniform1uiv(this.addr,e)}function Nm(n,e){n.uniform2uiv(this.addr,e)}function Um(n,e){n.uniform3uiv(this.addr,e)}function Fm(n,e){n.uniform4uiv(this.addr,e)}function Om(n,e,t){let i=this.cache,r=e.length,s=Lo(t,r),a;vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s)),a=this.type===n.SAMPLER_2D_SHADOW?Zc:Ld;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||a,s[l])}function Bm(n,e,t){let i=this.cache,r=e.length,s=Lo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Nd,s[a])}function zm(n,e,t){let i=this.cache,r=e.length,s=Lo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ud,s[a])}function Gm(n,e,t){let i=this.cache,r=e.length,s=Lo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Dd,s[a])}var Jc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return nm;case 35664:return rm;case 35665:return sm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return fm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Mm}})(t.type)}},Kc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Sm;case 35664:return bm;case 35665:return Tm;case 35666:return wm;case 35674:return Em;case 35675:return Am;case 35676:return Cm;case 5124:case 35670:return Rm;case 35667:case 35671:return Pm;case 35668:case 35672:return Im;case 35669:case 35673:return Lm;case 5125:return Dm;case 36294:return Nm;case 36295:return Um;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Gm}})(t.type)}},$c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let l=r[s];l.setValue(e,t[l.id],i)}}},qc=/(\w+)(\])?(\[|\.)?/g;function vd(n,e){n.seq.push(e),n.map[e.id]=e}function Vm(n,e,t){let i=n.name,r=i.length;for(qc.lastIndex=0;;){let s=qc.exec(i),a=qc.lastIndex,l=s[1],c=s[2]==="]",o=s[3];if(c&&(l|=0),o===void 0||o==="["&&a+2===r){vd(t,o===void 0?new Jc(l,n,e):new Kc(l,n,e));break}{let h=t.map[l];h===void 0&&(h=new $c(l),vd(t,h)),t=h}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let l=e.getActiveUniform(t,a);Vm(l,e.getUniformLocation(t,l.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let l=t[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function xd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var km=0,yd=new De;function Md(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(l,c){let o=l.split(`
`),h=[],p=Math.max(c-6,0),d=Math.min(c+6,o.length);for(let u=p;u<d;u++){let f=u+1;h.push(`${f===c?">":" "} ${f}: ${o[u]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return r}function Hm(n,e){let t=(function(i){He._getMatrix(yd,He.workingColorSpace,i);let r=`mat3( ${yd.elements.map(s=>s.toFixed(4))} )`;switch(He.getTransfer(i)){case jr:return[r,"LinearTransferOETF"];case Ye:return[r,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Wm={[kl]:"Linear",[Hl]:"Reinhard",[Wl]:"Cineon",[Ss]:"ACESFilmic",[jl]:"AgX",[ql]:"Neutral",[Xl]:"Custom"};function Xm(n,e){let t=Wm[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ao=new E;function jm(){return He.getLuminanceCoefficients(Ao),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ao.x.toFixed(4)}, ${Ao.y.toFixed(4)}, ${Ao.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function As(n){return n!==""}function Sd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(n){return n.replace(qm,Zm)}var Ym=new Map;function Zm(n,e){let t=Oe[e];if(t===void 0){let i=Ym.get(e);if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");t=Oe[i],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Qc(t)}var Jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(n){return n.replace(Jm,Km)}function Km(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var $m={[xs]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"},Qm={[Tr]:"ENVMAP_TYPE_CUBE",[Ln]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE_UV"},ef={[Ln]:"ENVMAP_MODE_REFRACTION"},tf={[zu]:"ENVMAP_BLENDING_MULTIPLY",[Gu]:"ENVMAP_BLENDING_MIX",[Vu]:"ENVMAP_BLENDING_ADD"};function nf(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,l=t.fragmentShader,c=(function(k){return $m[k.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),o=(function(k){return k.envMap===!1?"ENVMAP_TYPE_CUBE":Qm[k.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(k){return k.envMap===!1?"ENVMAP_MODE_REFLECTION":ef[k.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),p=(function(k){return k.envMap===!1?"ENVMAP_BLENDING_NONE":tf[k.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(k){let O=k.envMapCubeUVHeight;if(O===null)return null;let Z=Math.log2(O)-2,H=1/O;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:H,maxMip:Z}})(t),u=(function(k){return[k.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",k.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)})(t),f=(function(k){let O=[];for(let Z in k){let H=k[Z];H!==!1&&O.push("#define "+Z+" "+H)}return O.join(`
`)})(s),m=r.createProgram(),v,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(As).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(As).join(`
`),g.length>0&&(g+=`
`)):(v=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),g=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==xi?Xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Hm("linearToOutputTexel",t.outputColorSpace),jm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),a=Qc(a),a=Sd(a,t),a=bd(a,t),l=Qc(l),l=Sd(l,t),l=bd(l,t),a=Td(a),l=Td(l),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=_+v+a,b=_+g+l,w=xd(r,r.VERTEX_SHADER,y),M=xd(r,r.FRAGMENT_SHADER,b);function P(k){if(n.debug.checkShaderErrors){let O=r.getProgramInfoLog(m)||"",Z=r.getShaderInfoLog(w)||"",H=r.getShaderInfoLog(M)||"",V=O.trim(),q=Z.trim(),W=H.trim(),ie=!0,de=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,M);else{let be=Md(r,w,"vertex"),ge=Md(r,M,"fragment");Ee("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+V+`
`+be+`
`+ge)}else V!==""?Te("WebGLProgram: Program Info Log:",V):q!==""&&W!==""||(de=!1);de&&(k.diagnostics={runnable:ie,programLog:V,vertexShader:{log:q,prefix:v},fragmentShader:{log:W,prefix:g}})}r.deleteShader(w),r.deleteShader(M),F=new Cr(r,m),D=(function(O,Z){let H={},V=O.getProgramParameter(Z,O.ACTIVE_ATTRIBUTES);for(let q=0;q<V;q++){let W=O.getActiveAttrib(Z,q),ie=W.name,de=1;W.type===O.FLOAT_MAT2&&(de=2),W.type===O.FLOAT_MAT3&&(de=3),W.type===O.FLOAT_MAT4&&(de=4),H[ie]={type:W.type,location:O.getAttribLocation(Z,ie),locationSize:de}}return H})(r,m)}let F,D;r.attachShader(m,w),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return F===void 0&&P(this),F},this.getAttributes=function(){return D===void 0&&P(this),D};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(m,37297)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=km++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=M,this}var rf=0,eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new th(e),t.set(e,i)),i}},th=class{constructor(e){this.id=rf++,this.code=e,this.usedTimes=0}};function sf(n,e,t,i,r,s){let a=new Zr,l=new eh,c=new Set,o=[],h=new Map,p=i.logarithmicDepthBuffer,d=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,v,g,_,y,b){let w=_.fog,M=y.geometry,P=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?_.environment:null,F=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,D=e.get(m.envMap||P,F),N=D&&D.mapping===bs?D.image.height:null,k=u[m.type];m.precision!==null&&(d=i.getMaxPrecision(m.precision),d!==m.precision&&Te("WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));let O=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,Z=O!==void 0?O.length:0,H,V,q,W,ie=0;if(M.morphAttributes.position!==void 0&&(ie=1),M.morphAttributes.normal!==void 0&&(ie=2),M.morphAttributes.color!==void 0&&(ie=3),k){let di=Di[k];H=di.vertexShader,V=di.fragmentShader}else{H=m.vertexShader,V=m.fragmentShader;let di=l.getVertexShaderStage(m),vn=l.getFragmentShaderStage(m);l.update(m,di,vn),q=di.id,W=vn.id}let de=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),ge=y.isInstancedMesh===!0,_e=y.isBatchedMesh===!0,ee=!!m.map,ce=!!m.matcap,oe=!!D,me=!!m.aoMap,Ue=!!m.lightMap,$=!!m.bumpMap&&m.wireframe===!1,R=!!m.normalMap,S=!!m.displacementMap,C=!!m.emissiveMap,U=!!m.metalnessMap,x=!!m.roughnessMap,L=m.anisotropy>0,I=m.clearcoat>0,A=m.dispersion>0,G=m.iridescence>0,X=m.sheen>0,Y=m.transmission>0,re=L&&!!m.anisotropyMap,ve=I&&!!m.clearcoatMap,xe=I&&!!m.clearcoatNormalMap,he=I&&!!m.clearcoatRoughnessMap,Re=G&&!!m.iridescenceMap,Q=G&&!!m.iridescenceThicknessMap,se=X&&!!m.sheenColorMap,ne=X&&!!m.sheenRoughnessMap,pe=!!m.specularMap,$e=!!m.specularColorMap,qe=!!m.specularIntensityMap,ot=Y&&!!m.transmissionMap,Dt=Y&&!!m.thicknessMap,Se=!!m.gradientMap,Ze=!!m.alphaMap,Be=m.alphaTest>0,bt=!!m.alphaHash,Qe=!!m.extensions,mt=xi;m.toneMapped&&(de!==null&&de.isXRRenderTarget!==!0||(mt=n.toneMapping));let at={shaderID:k,shaderType:m.type,shaderName:m.name,vertexShader:H,fragmentShader:V,defines:m.defines,customVertexShaderID:q,customFragmentShaderID:W,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,batching:_e,batchingColor:_e&&y._colorsTexture!==null,instancing:ge,instancingColor:ge&&y.instanceColor!==null,instancingMorph:ge&&y.morphTexture!==null,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:ee,matcap:ce,envMap:oe,envMapMode:oe&&D.mapping,envMapCubeUVHeight:N,aoMap:me,lightMap:Ue,bumpMap:$,normalMap:R,displacementMap:S,emissiveMap:C,normalMapObjectSpace:R&&m.normalMapType===Xu,normalMapTangentSpace:R&&m.normalMapType===Ic,packedNormalMap:R&&m.normalMapType===Ic&&(ti=m.normalMap.format,ti===Un||ti===So||ti===bo),metalnessMap:U,roughnessMap:x,anisotropy:L,anisotropyMap:re,clearcoat:I,clearcoatMap:ve,clearcoatNormalMap:xe,clearcoatRoughnessMap:he,dispersion:A,iridescence:G,iridescenceMap:Re,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:se,sheenRoughnessMap:ne,specularMap:pe,specularColorMap:$e,specularIntensityMap:qe,transmission:Y,transmissionMap:ot,thicknessMap:Dt,gradientMap:Se,opaque:m.transparent===!1&&m.blending===ys&&m.alphaToCoverage===!1,alphaMap:Ze,alphaTest:Be,alphaHash:bt,combine:m.combine,mapUv:ee&&f(m.map.channel),aoMapUv:me&&f(m.aoMap.channel),lightMapUv:Ue&&f(m.lightMap.channel),bumpMapUv:$&&f(m.bumpMap.channel),normalMapUv:R&&f(m.normalMap.channel),displacementMapUv:S&&f(m.displacementMap.channel),emissiveMapUv:C&&f(m.emissiveMap.channel),metalnessMapUv:U&&f(m.metalnessMap.channel),roughnessMapUv:x&&f(m.roughnessMap.channel),anisotropyMapUv:re&&f(m.anisotropyMap.channel),clearcoatMapUv:ve&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:xe&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&f(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:se&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:ne&&f(m.sheenRoughnessMap.channel),specularMapUv:pe&&f(m.specularMap.channel),specularColorMapUv:$e&&f(m.specularColorMap.channel),specularIntensityMapUv:qe&&f(m.specularIntensityMap.channel),transmissionMapUv:ot&&f(m.transmissionMap.channel),thicknessMapUv:Dt&&f(m.thicknessMap.channel),alphaMapUv:Ze&&f(m.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(R||L),vertexNormals:!!M.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!M.attributes.uv&&(ee||Ze),fog:!!w,useFog:m.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||M.attributes.normal===void 0&&R===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:be,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:M.attributes.position!==void 0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ie,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:b.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&g.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:ee&&m.map.isVideoTexture===!0&&He.getTransfer(m.map.colorSpace)===Ye,decodeVideoTextureEmissive:C&&m.emissiveMap.isVideoTexture===!0&&He.getTransfer(m.emissiveMap.colorSpace)===Ye,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Ft,flipSided:m.side===Vt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Qe&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&m.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};var ti;return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at},getProgramCacheKey:function(m){let v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)v.push(g),v.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapCubeUVHeight),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.morphAttributeCount),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)})(v,m),(function(g,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),g.push(a.mask)})(v,m),v.push(n.outputColorSpace)),v.push(m.customProgramCacheKey),v.join()},getUniforms:function(m){let v=u[m.type],g;if(v){let _=Di[v];g=ad.clone(_.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,v){let g=h.get(v);return g!==void 0?++g.usedTimes:(g=new nf(n,v,m,r),o.push(g),h.set(v,g)),g},releaseProgram:function(m){if(--m.usedTimes===0){let v=o.indexOf(m);o[v]=o[o.length-1],o.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:o,dispose:function(){l.dispose()}}}function af(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function of(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ed(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ad(){let n=[],e=0,t=[],i=[],r=[];function s(l){let c=0;return l.isInstancedMesh&&(c+=2),l.isSkinnedMesh&&(c+=1),c}function a(l,c,o,h,p,d){let u=n[e];return u===void 0?(u={id:l.id,object:l,geometry:c,material:o,materialVariant:s(l),groupOrder:h,renderOrder:l.renderOrder,z:p,group:d},n[e]=u):(u.id=l.id,u.object=l,u.geometry=c,u.material=o,u.materialVariant=s(l),u.groupOrder=h,u.renderOrder=l.renderOrder,u.z=p,u.group=d),e++,u}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(l,c,o,h,p,d){let u=a(l,c,o,h,p,d);o.transmission>0?i.push(u):o.transparent===!0?r.push(u):t.push(u)},unshift:function(l,c,o,h,p,d){let u=a(l,c,o,h,p,d);o.transmission>0?i.unshift(u):o.transparent===!0?r.unshift(u):t.unshift(u)},finish:function(){for(let l=e,c=n.length;l<c;l++){let o=n[l];if(o.id===null)break;o.id=null,o.object=null,o.geometry=null,o.material=null,o.group=null}},sort:function(l,c,o){t.length>1&&t.sort(l||of),i.length>1&&i.sort(c||Ed),r.length>1&&r.sort(c||Ed),o&&(t.reverse(),i.reverse(),r.reverse())}}}function lf(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new Ad,n.set(e,[r])):t>=i.length?(r=new Ad,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function cf(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Ce};break;case"SpotLight":t={position:new E,direction:new E,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new E,halfWidth:new E,halfHeight:new E}}return n[e.id]=t,t}}}var hf=0;function uf(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function df(n){let e=new cf,t=(function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let o;switch(c.type){case"DirectionalLight":case"SpotLight":o={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":o={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=o,o}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new E);let r=new E,s=new Fe,a=new Fe;return{setup:function(l){let c=0,o=0,h=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let p=0,d=0,u=0,f=0,m=0,v=0,g=0,_=0,y=0,b=0,w=0;l.sort(uf);for(let P=0,F=l.length;P<F;P++){let D=l[P],N=D.color,k=D.intensity,O=D.distance,Z=null;if(D.shadow&&D.shadow.map&&(Z=D.shadow.map.texture.format===Un?D.shadow.map.texture:D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)c+=N.r*k,o+=N.g*k,h+=N.b*k;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],k);w++}else if(D.isDirectionalLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let V=D.shadow,q=t.get(D);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=H,p++}else if(D.isSpotLight){let H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(N).multiplyScalar(k),H.distance=O,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[u]=H;let V=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,V.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[u]=V.matrix,D.castShadow){let q=t.get(D);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,i.spotShadow[u]=q,i.spotShadowMap[u]=Z,_++}u++}else if(D.isRectAreaLight){let H=e.get(D);H.color.copy(N).multiplyScalar(k),H.halfWidth.set(.5*D.width,0,0),H.halfHeight.set(0,.5*D.height,0),i.rectArea[f]=H,f++}else if(D.isPointLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let V=D.shadow,q=t.get(D);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,i.pointShadow[d]=q,i.pointShadowMap[d]=Z,i.pointShadowMatrix[d]=D.shadow.matrix,g++}i.point[d]=H,d++}else if(D.isHemisphereLight){let H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(k),H.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[m]=H,m++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=o,i.ambient[2]=h;let M=i.hash;M.directionalLength===p&&M.pointLength===d&&M.spotLength===u&&M.rectAreaLength===f&&M.hemiLength===m&&M.numDirectionalShadows===v&&M.numPointShadows===g&&M.numSpotShadows===_&&M.numSpotMaps===y&&M.numLightProbes===w||(i.directional.length=p,i.spot.length=u,i.rectArea.length=f,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+y-b,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,M.directionalLength=p,M.pointLength=d,M.spotLength=u,M.rectAreaLength=f,M.hemiLength=m,M.numDirectionalShadows=v,M.numPointShadows=g,M.numSpotShadows=_,M.numSpotMaps=y,M.numLightProbes=w,i.version=hf++)},setupView:function(l,c){let o=0,h=0,p=0,d=0,u=0,f=c.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){let g=l[m];if(g.isDirectionalLight){let _=i.directional[o];_.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),o++}else if(g.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),p++}else if(g.isRectAreaLight){let _=i.rectArea[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),_.halfWidth.set(.5*g.width,0,0),_.halfHeight.set(0,.5*g.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let _=i.point[h];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let _=i.hemi[u];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(f),u++}}},state:i}}function Cd(n){let e=new df(n),t=[],i=[],r=[],s={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){s.camera=a,t.length=0,i.length=0,r.length=0},state:s,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){i.push(a)},pushLightProbeGrid:function(a){r.push(a)}}}function pf(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),s;return r===void 0?(s=new Cd(n),e.set(t,[s])):i>=r.length?(s=new Cd(n),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}var mf=[new E(1,0,0),new E(-1,0,0),new E(0,1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1)],ff=[new E(0,-1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1),new E(0,-1,0),new E(0,-1,0)],Rd=new Fe,Cs=new E,Yc=new E;function gf(n,e,t){let i=new ji,r=new te,s=new te,a=new Je,l=new ja,c=new qa,o={},h=t.maxTextureSize,p={[Sr]:Vt,[Vt]:Sr,[Ft]:Ft},d=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:`void main() {
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
}`}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let f=new Ke;f.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new _t(f,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xs;let g=this.type;function _(M,P){let F=e.update(m);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,u.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Yt(r.x,r.y,{format:Un,type:Ii})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(P,null,F,d,m,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(P,null,F,u,m,null)}function y(M,P,F,D){let N=null,k=F.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(k!==void 0)N=k;else if(N=F.isPointLight===!0?c:l,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=N.uuid,Z=P.uuid,H=o[O];H===void 0&&(H={},o[O]=H);let V=H[Z];V===void 0&&(V=N.clone(),H[Z]=V,P.addEventListener("dispose",w)),N=V}return N.visible=P.visible,N.wireframe=P.wireframe,N.side=D===Mr?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:p[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,F.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(n.properties.get(N).light=F),N}function b(M,P,F,D,N){if(M.visible===!1)return;if(M.layers.test(P.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&N===Mr)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld);let O=e.update(M),Z=M.material;if(Array.isArray(Z)){let H=O.groups;for(let V=0,q=H.length;V<q;V++){let W=H[V],ie=Z[W.materialIndex];if(ie&&ie.visible){let de=y(M,ie,D,N);M.onBeforeShadow(n,M,P,F,O,de,W),n.renderBufferDirect(F,null,O,de,M,W),M.onAfterShadow(n,M,P,F,O,de,W)}}}else if(Z.visible){let H=y(M,Z,D,N);M.onBeforeShadow(n,M,P,F,O,H,null),n.renderBufferDirect(F,null,O,H,M,null),M.onAfterShadow(n,M,P,F,O,H,null)}}let k=M.children;for(let O=0,Z=k.length;O<Z;O++)b(k[O],P,F,D,N)}function w(M){M.target.removeEventListener("dispose",w);for(let P in o){let F=o[P],D=M.target.uuid;D in F&&(F[D].dispose(),delete F[D])}}this.render=function(M,P,F){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;this.type===oo&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xs);let D=n.getRenderTarget(),N=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Pi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Z=g!==this.type;Z&&P.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(V=>V.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,V=M.length;H<V;H++){let q=M[H],W=q.shadow;if(W===void 0){Te("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let ie=W.getFrameExtents();r.multiply(ie),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ie.x),r.x=s.x*ie.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ie.y),r.y=s.y*ie.y,W.mapSize.y=s.y));let de=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=de,W.map===null||Z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Mr){if(q.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Yt(r.x,r.y,{format:Un,type:Ii,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new qi(r.x,r.y,li),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=gn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ri,W.map.depthTexture.magFilter=ri}else q.isPointLight?(W.map=new Po(r.x),W.map.depthTexture=new wa(r.x,Ji)):(W.map=new Yt(r.x,r.y),W.map.depthTexture=new qi(r.x,r.y,Ji)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=gn,this.type===xs?(W.map.depthTexture.compareFunction=de?wo:To,W.map.depthTexture.minFilter=Rt,W.map.depthTexture.magFilter=Rt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ri,W.map.depthTexture.magFilter=ri);W.camera.updateProjectionMatrix()}let be=W.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<be;ge++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(W.map),n.clear());let _e=W.getViewport(ge);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),O.viewport(a)}if(q.isPointLight){let _e=W.camera,ee=W.matrix,ce=q.distance||_e.far;ce!==_e.far&&(_e.far=ce,_e.updateProjectionMatrix()),Cs.setFromMatrixPosition(q.matrixWorld),_e.position.copy(Cs),Yc.copy(_e.position),Yc.add(mf[ge]),_e.up.copy(ff[ge]),_e.lookAt(Yc),_e.updateMatrixWorld(),ee.makeTranslation(-Cs.x,-Cs.y,-Cs.z),Rd.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Rd,_e.coordinateSystem,_e.reversedDepth)}else W.updateMatrices(q);i=W.getFrustum(),b(P,F,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Mr&&_(W,F),W.needsUpdate=!1}g=this.type,v.needsUpdate=!1,n.setRenderTarget(D,N,k)}}function _f(n,e){let t=new function(){let x=!1,L=new Je,I=null,A=new Je(0,0,0,0);return{setMask:function(G){I===G||x||(n.colorMask(G,G,G,G),I=G)},setLocked:function(G){x=G},setClear:function(G,X,Y,re,ve){ve===!0&&(G*=re,X*=re,Y*=re),L.set(G,X,Y,re),A.equals(L)===!1&&(n.clearColor(G,X,Y,re),A.copy(L))},reset:function(){x=!1,I=null,A.set(-1,0,0,0)}}},i=new function(){let x=!1,L=!1,I=null,A=null,G=null;return{setReversed:function(X){if(L!==X){let Y=e.get("EXT_clip_control");X?Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.ZERO_TO_ONE_EXT):Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.NEGATIVE_ONE_TO_ONE_EXT),L=X;let re=G;G=null,this.setClear(re)}},getReversed:function(){return L},setTest:function(X){X?oe(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(X){I===X||x||(n.depthMask(X),I=X)},setFunc:function(X){if(L&&(X=td[X]),A!==X){switch(X){case Ul:n.depthFunc(n.NEVER);break;case Fl:n.depthFunc(n.ALWAYS);break;case Ol:n.depthFunc(n.LESS);break;case lo:n.depthFunc(n.LEQUAL);break;case Bl:n.depthFunc(n.EQUAL);break;case zl:n.depthFunc(n.GEQUAL);break;case Gl:n.depthFunc(n.GREATER);break;case Vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}A=X}},setLocked:function(X){x=X},setClear:function(X){G!==X&&(G=X,L&&(X=1-X),n.clearDepth(X))},reset:function(){x=!1,I=null,A=null,G=null,L=!1}}},r=new function(){let x=!1,L=null,I=null,A=null,G=null,X=null,Y=null,re=null,ve=null;return{setTest:function(xe){x||(xe?oe(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(xe){L===xe||x||(n.stencilMask(xe),L=xe)},setFunc:function(xe,he,Re){I===xe&&A===he&&G===Re||(n.stencilFunc(xe,he,Re),I=xe,A=he,G=Re)},setOp:function(xe,he,Re){X===xe&&Y===he&&re===Re||(n.stencilOp(xe,he,Re),X=xe,Y=he,re=Re)},setLocked:function(xe){x=xe},setClear:function(xe){ve!==xe&&(n.clearStencil(xe),ve=xe)},reset:function(){x=!1,L=null,I=null,A=null,G=null,X=null,Y=null,re=null,ve=null}}},s=new WeakMap,a=new WeakMap,l={},c={},o={},h=new WeakMap,p=[],d=null,u=!1,f=null,m=null,v=null,g=null,_=null,y=null,b=null,w=new Ce(0,0,0),M=0,P=!1,F=null,D=null,N=null,k=null,O=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,V=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=V>=2);let W=null,ie={},de=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),ge=new Je().fromArray(de),_e=new Je().fromArray(be);function ee(x,L,I,A){let G=new Uint8Array(4),X=n.createTexture();n.bindTexture(x,X),n.texParameteri(x,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(x,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Y=0;Y<I;Y++)x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY?n.texImage3D(L,0,n.RGBA,1,1,A,0,n.RGBA,n.UNSIGNED_BYTE,G):n.texImage2D(L+Y,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,G);return X}let ce={};function oe(x){l[x]!==!0&&(n.enable(x),l[x]=!0)}function me(x){l[x]!==!1&&(n.disable(x),l[x]=!1)}ce[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),r.setClear(0),oe(n.DEPTH_TEST),i.setFunc(lo),S(!1),C(Ll),oe(n.CULL_FACE),R(Pi);let Ue={[br]:n.FUNC_ADD,[yu]:n.FUNC_SUBTRACT,[Mu]:n.FUNC_REVERSE_SUBTRACT};Ue[Su]=n.MIN,Ue[bu]=n.MAX;let $={[Tu]:n.ZERO,[wu]:n.ONE,[Eu]:n.SRC_COLOR,[Cu]:n.SRC_ALPHA,[Nu]:n.SRC_ALPHA_SATURATE,[Lu]:n.DST_COLOR,[Pu]:n.DST_ALPHA,[Au]:n.ONE_MINUS_SRC_COLOR,[Ru]:n.ONE_MINUS_SRC_ALPHA,[Du]:n.ONE_MINUS_DST_COLOR,[Iu]:n.ONE_MINUS_DST_ALPHA,[Uu]:n.CONSTANT_COLOR,[Fu]:n.ONE_MINUS_CONSTANT_COLOR,[Ou]:n.CONSTANT_ALPHA,[Bu]:n.ONE_MINUS_CONSTANT_ALPHA};function R(x,L,I,A,G,X,Y,re,ve,xe){if(x!==Pi){if(u===!1&&(oe(n.BLEND),u=!0),x===xu)G=G||L,X=X||I,Y=Y||A,L===m&&G===_||(n.blendEquationSeparate(Ue[L],Ue[G]),m=L,_=G),I===v&&A===g&&X===y&&Y===b||(n.blendFuncSeparate($[I],$[A],$[X],$[Y]),v=I,g=A,y=X,b=Y),re.equals(w)!==!1&&ve===M||(n.blendColor(re.r,re.g,re.b,ve),w.copy(re),M=ve),f=x,P=!1;else if(x!==f||xe!==P){if(m===br&&_===br||(n.blendEquation(n.FUNC_ADD),m=br,_=br),xe)switch(x){case ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ms:n.blendFunc(n.ONE,n.ONE);break;case Dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ee("WebGLState: Invalid blending: ",x)}else switch(x){case ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Dl:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nl:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",x)}v=null,g=null,y=null,b=null,w.set(0,0,0),M=0,f=x,P=xe}}else u===!0&&(me(n.BLEND),u=!1)}function S(x){F!==x&&(x?n.frontFace(n.CW):n.frontFace(n.CCW),F=x)}function C(x){x!==_u?(oe(n.CULL_FACE),x!==D&&(x===Ll?n.cullFace(n.BACK):x===vu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),D=x}function U(x,L,I){x?(oe(n.POLYGON_OFFSET_FILL),k===L&&O===I||(k=L,O=I,i.getReversed()&&(L=-L),n.polygonOffset(L,I))):me(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:r},enable:oe,disable:me,bindFramebuffer:function(x,L){return o[x]!==L&&(n.bindFramebuffer(x,L),o[x]=L,x===n.DRAW_FRAMEBUFFER&&(o[n.FRAMEBUFFER]=L),x===n.FRAMEBUFFER&&(o[n.DRAW_FRAMEBUFFER]=L),!0)},drawBuffers:function(x,L){let I=p,A=!1;if(x){I=h.get(L),I===void 0&&(I=[],h.set(L,I));let G=x.textures;if(I.length!==G.length||I[0]!==n.COLOR_ATTACHMENT0){for(let X=0,Y=G.length;X<Y;X++)I[X]=n.COLOR_ATTACHMENT0+X;I.length=G.length,A=!0}}else I[0]!==n.BACK&&(I[0]=n.BACK,A=!0);A&&n.drawBuffers(I)},useProgram:function(x){return d!==x&&(n.useProgram(x),d=x,!0)},setBlending:R,setMaterial:function(x,L){x.side===Ft?me(n.CULL_FACE):oe(n.CULL_FACE);let I=x.side===Vt;L&&(I=!I),S(I),x.blending===ys&&x.transparent===!1?R(Pi):R(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),i.setFunc(x.depthFunc),i.setTest(x.depthTest),i.setMask(x.depthWrite),t.setMask(x.colorWrite);let A=x.stencilWrite;r.setTest(A),A&&(r.setMask(x.stencilWriteMask),r.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),r.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),U(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:C,setLineWidth:function(x){x!==N&&(H&&n.lineWidth(x),N=x)},setPolygonOffset:U,setScissorTest:function(x){x?oe(n.SCISSOR_TEST):me(n.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=n.TEXTURE0+Z-1),W!==x&&(n.activeTexture(x),W=x)},bindTexture:function(x,L,I){I===void 0&&(I=W===null?n.TEXTURE0+Z-1:W);let A=ie[I];A===void 0&&(A={type:void 0,texture:void 0},ie[I]=A),A.type===x&&A.texture===L||(W!==I&&(n.activeTexture(I),W=I),n.bindTexture(x,L||ce[x]),A.type=x,A.texture=L)},unbindTexture:function(){let x=ie[W];x!==void 0&&x.type!==void 0&&(n.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(x){Ee("WebGLState:",x)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(x){Ee("WebGLState:",x)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(x){Ee("WebGLState:",x)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(x){Ee("WebGLState:",x)}},pixelStorei:function(x,L){c[x]!==L&&(n.pixelStorei(x,L),c[x]=L)},getParameter:function(x){return c[x]!==void 0?c[x]:n.getParameter(x)},updateUBOMapping:function(x,L){let I=a.get(L);I===void 0&&(I=new WeakMap,a.set(L,I));let A=I.get(x);A===void 0&&(A=n.getUniformBlockIndex(L,x.name),I.set(x,A))},uniformBlockBinding:function(x,L){let I=a.get(L).get(x);s.get(L)!==I&&(n.uniformBlockBinding(L,I,x.__bindingPointIndex),s.set(L,I))},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(x){Ee("WebGLState:",x)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(x){Ee("WebGLState:",x)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(x){Ee("WebGLState:",x)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(x){Ee("WebGLState:",x)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(x){Ee("WebGLState:",x)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(x){Ee("WebGLState:",x)}},scissor:function(x){ge.equals(x)===!1&&(n.scissor(x.x,x.y,x.z,x.w),ge.copy(x))},viewport:function(x){_e.equals(x)===!1&&(n.viewport(x.x,x.y,x.z,x.w),_e.copy(x))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),l={},c={},W=null,ie={},o={},h=new WeakMap,p=[],d=null,u=!1,f=null,m=null,v=null,g=null,_=null,y=null,b=null,w=new Ce(0,0,0),M=0,P=!1,F=null,D=null,N=null,k=null,O=null,ge.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),r.reset()}}}function vf(n,e,t,i,r,s,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),o=new te,h=new WeakMap,p=new Set,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return f?new OffscreenCanvas(R,S):qr("canvas")}function v(R,S,C){let U=1,x=$(R);if((x.width>C||x.height>C)&&(U=C/Math.max(x.width,x.height)),U<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let L=Math.floor(U*x.width),I=Math.floor(U*x.height);d===void 0&&(d=m(L,I));let A=S?m(L,I):d;return A.width=L,A.height=I,A.getContext("2d").drawImage(R,0,0,L,I),Te("WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+L+"x"+I+")."),A}return"data"in R&&Te("WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),R}return R}function g(R){return R.generateMipmaps}function _(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,S,C,U,x,L=!1){if(R!==null){if(n[R]!==void 0)return n[R];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let I;U&&(I=e.get("EXT_texture_norm16"),I||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let A=S;if(S===n.RED&&(C===n.FLOAT&&(A=n.R32F),C===n.HALF_FLOAT&&(A=n.R16F),C===n.UNSIGNED_BYTE&&(A=n.R8),C===n.UNSIGNED_SHORT&&I&&(A=I.R16_EXT),C===n.SHORT&&I&&(A=I.R16_SNORM_EXT)),S===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.R8UI),C===n.UNSIGNED_SHORT&&(A=n.R16UI),C===n.UNSIGNED_INT&&(A=n.R32UI),C===n.BYTE&&(A=n.R8I),C===n.SHORT&&(A=n.R16I),C===n.INT&&(A=n.R32I)),S===n.RG&&(C===n.FLOAT&&(A=n.RG32F),C===n.HALF_FLOAT&&(A=n.RG16F),C===n.UNSIGNED_BYTE&&(A=n.RG8),C===n.UNSIGNED_SHORT&&I&&(A=I.RG16_EXT),C===n.SHORT&&I&&(A=I.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.RG8UI),C===n.UNSIGNED_SHORT&&(A=n.RG16UI),C===n.UNSIGNED_INT&&(A=n.RG32UI),C===n.BYTE&&(A=n.RG8I),C===n.SHORT&&(A=n.RG16I),C===n.INT&&(A=n.RG32I)),S===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.RGB8UI),C===n.UNSIGNED_SHORT&&(A=n.RGB16UI),C===n.UNSIGNED_INT&&(A=n.RGB32UI),C===n.BYTE&&(A=n.RGB8I),C===n.SHORT&&(A=n.RGB16I),C===n.INT&&(A=n.RGB32I)),S===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(A=n.RGBA16UI),C===n.UNSIGNED_INT&&(A=n.RGBA32UI),C===n.BYTE&&(A=n.RGBA8I),C===n.SHORT&&(A=n.RGBA16I),C===n.INT&&(A=n.RGBA32I)),S===n.RGB&&(C===n.UNSIGNED_SHORT&&I&&(A=I.RGB16_EXT),C===n.SHORT&&I&&(A=I.RGB16_SNORM_EXT),C===n.UNSIGNED_INT_5_9_9_9_REV&&(A=n.RGB9_E5),C===n.UNSIGNED_INT_10F_11F_11F_REV&&(A=n.R11F_G11F_B10F)),S===n.RGBA){let G=L?jr:He.getTransfer(x);C===n.FLOAT&&(A=n.RGBA32F),C===n.HALF_FLOAT&&(A=n.RGBA16F),C===n.UNSIGNED_BYTE&&(A=G===Ye?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT&&I&&(A=I.RGBA16_EXT),C===n.SHORT&&I&&(A=I.RGBA16_SNORM_EXT),C===n.UNSIGNED_SHORT_4_4_4_4&&(A=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(A=n.RGB5_A1)}return A!==n.R16F&&A!==n.R32F&&A!==n.RG16F&&A!==n.RG32F&&A!==n.RGBA16F&&A!==n.RGBA32F||e.get("EXT_color_buffer_float"),A}function w(R,S){let C;return R?S===null||S===Ji||S===Er?C=n.DEPTH24_STENCIL8:S===li?C=n.DEPTH32F_STENCIL8:S===wr&&(C=n.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ji||S===Er?C=n.DEPTH_COMPONENT24:S===li?C=n.DEPTH_COMPONENT32F:S===wr&&(C=n.DEPTH_COMPONENT16),C}function M(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==ri&&R.minFilter!==Rt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function P(R){let S=R.target;S.removeEventListener("dispose",P),(function(C){let U=i.get(C);if(U.__webglInit===void 0)return;let x=C.source,L=u.get(x);if(L){let I=L[U.__cacheKey];I.usedTimes--,I.usedTimes===0&&D(C),Object.keys(L).length===0&&u.delete(x)}i.remove(C)})(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&p.delete(S)}function F(R){let S=R.target;S.removeEventListener("dispose",F),(function(C){let U=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(U.__webglFramebuffer[L]))for(let I=0;I<U.__webglFramebuffer[L].length;I++)n.deleteFramebuffer(U.__webglFramebuffer[L][I]);else n.deleteFramebuffer(U.__webglFramebuffer[L]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[L])}else{if(Array.isArray(U.__webglFramebuffer))for(let L=0;L<U.__webglFramebuffer.length;L++)n.deleteFramebuffer(U.__webglFramebuffer[L]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let L=0;L<U.__webglColorRenderbuffer.length;L++)U.__webglColorRenderbuffer[L]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[L]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}let x=C.textures;for(let L=0,I=x.length;L<I;L++){let A=i.get(x[L]);A.__webglTexture&&(n.deleteTexture(A.__webglTexture),a.memory.textures--),i.remove(x[L])}i.remove(C)})(S)}function D(R){let S=i.get(R);n.deleteTexture(S.__webglTexture);let C=R.source;delete u.get(C)[S.__cacheKey],a.memory.textures--}let N=0;function k(R,S){let C=i.get(R);if(R.isVideoTexture&&(function(U){let x=a.render.frame;h.get(U)!==x&&(h.set(U,x),U.update())})(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&C.__version!==R.version){let U=R.image;if(U===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else{if(U.complete!==!1)return void ie(C,R,S);Te("WebGLRenderer: Texture marked for update but image is incomplete")}}else R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+S)}let O={[va]:n.REPEAT,[un]:n.CLAMP_TO_EDGE,[xa]:n.MIRRORED_REPEAT},Z={[ri]:n.NEAREST,[ku]:n.NEAREST_MIPMAP_NEAREST,[Ts]:n.NEAREST_MIPMAP_LINEAR,[Rt]:n.LINEAR,[uo]:n.LINEAR_MIPMAP_NEAREST,[Dn]:n.LINEAR_MIPMAP_LINEAR},H={[ju]:n.NEVER,[Ku]:n.ALWAYS,[qu]:n.LESS,[To]:n.LEQUAL,[Yu]:n.EQUAL,[wo]:n.GEQUAL,[Zu]:n.GREATER,[Ju]:n.NOTEQUAL};function V(R,S){if(S.type!==li||e.has("OES_texture_float_linear")!==!1||S.magFilter!==Rt&&S.magFilter!==uo&&S.magFilter!==Ts&&S.magFilter!==Dn&&S.minFilter!==Rt&&S.minFilter!==uo&&S.minFilter!==Ts&&S.minFilter!==Dn||Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,O[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,O[S.wrapT]),R!==n.TEXTURE_3D&&R!==n.TEXTURE_2D_ARRAY||n.texParameteri(R,n.TEXTURE_WRAP_R,O[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Z[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Z[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,H[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ri||S.minFilter!==Ts&&S.minFilter!==Dn||S.type===li&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function q(R,S){let C=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",P));let U=S.source,x=u.get(U);x===void 0&&(x={},u.set(U,x));let L=(function(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()})(S);if(L!==R.__cacheKey){x[L]===void 0&&(x[L]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,C=!0),x[L].usedTimes++;let I=x[R.__cacheKey];I!==void 0&&(x[R.__cacheKey].usedTimes--,I.usedTimes===0&&D(S)),R.__cacheKey=L,R.__webglTexture=x[L].texture}return C}function W(R,S,C){return Math.floor(Math.floor(R/C)/S)}function ie(R,S,C){let U=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(U=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(U=n.TEXTURE_3D);let x=q(R,S),L=S.source;t.bindTexture(U,R.__webglTexture,n.TEXTURE0+C);let I=i.get(L);if(L.version!==I.__version||x===!0){if(t.activeTexture(n.TEXTURE0+C),!(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)){let se=He.getPrimaries(He.workingColorSpace),ne=S.colorSpace===Fn?null:He.getPrimaries(S.colorSpace),pe=S.colorSpace===Fn||se===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let A=v(S.image,!1,r.maxTextureSize);A=Ue(S,A);let G=s.convert(S.format,S.colorSpace),X=s.convert(S.type),Y,re=b(S.internalFormat,G,X,S.normalized,S.colorSpace,S.isVideoTexture);V(U,S);let ve=S.mipmaps,xe=S.isVideoTexture!==!0,he=I.__version===void 0||x===!0,Re=L.dataReady,Q=M(S,A);if(S.isDepthTexture)re=w(S.format===Nn,S.type),he&&(xe?t.texStorage2D(n.TEXTURE_2D,1,re,A.width,A.height):t.texImage2D(n.TEXTURE_2D,0,re,A.width,A.height,0,G,X,null));else if(S.isDataTexture)if(ve.length>0){xe&&he&&t.texStorage2D(n.TEXTURE_2D,Q,re,ve[0].width,ve[0].height);for(let se=0,ne=ve.length;se<ne;se++)Y=ve[se],xe?Re&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Y.width,Y.height,G,X,Y.data):t.texImage2D(n.TEXTURE_2D,se,re,Y.width,Y.height,0,G,X,Y.data);S.generateMipmaps=!1}else xe?(he&&t.texStorage2D(n.TEXTURE_2D,Q,re,A.width,A.height),Re&&(function(se,ne,pe,$e){let qe=se.updateRanges;if(qe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,pe,$e,ne.data);else{qe.sort((Be,bt)=>Be.start-bt.start);let ot=0;for(let Be=1;Be<qe.length;Be++){let bt=qe[ot],Qe=qe[Be],mt=bt.start+bt.count,at=W(Qe.start,ne.width,4),ti=W(bt.start,ne.width,4);Qe.start<=mt+1&&at===ti&&W(Qe.start+Qe.count-1,ne.width,4)===at?bt.count=Math.max(bt.count,Qe.start+Qe.count-bt.start):(++ot,qe[ot]=Qe)}qe.length=ot+1;let Dt=t.getParameter(n.UNPACK_ROW_LENGTH),Se=t.getParameter(n.UNPACK_SKIP_PIXELS),Ze=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,ne.width);for(let Be=0,bt=qe.length;Be<bt;Be++){let Qe=qe[Be],mt=Math.floor(Qe.start/4),at=Math.ceil(Qe.count/4),ti=mt%ne.width,di=Math.floor(mt/ne.width),vn=at;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ti),t.pixelStorei(n.UNPACK_SKIP_ROWS,di),t.texSubImage2D(n.TEXTURE_2D,0,ti,di,vn,1,pe,$e,ne.data)}se.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Dt),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ze)}})(S,A,G,X)):t.texImage2D(n.TEXTURE_2D,0,re,A.width,A.height,0,G,X,A.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){xe&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,re,ve[0].width,ve[0].height,A.depth);for(let se=0,ne=ve.length;se<ne;se++)if(Y=ve[se],S.format!==yi)if(G!==null)if(xe){if(Re)if(S.layerUpdates.size>0){let pe=Oc(Y.width,Y.height,S.format,S.type);for(let $e of S.layerUpdates){let qe=Y.data.subarray($e*pe/Y.data.BYTES_PER_ELEMENT,($e+1)*pe/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,$e,Y.width,Y.height,1,G,qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,A.depth,G,Y.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,re,Y.width,Y.height,A.depth,0,Y.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,A.depth,G,X,Y.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,re,Y.width,Y.height,A.depth,0,G,X,Y.data)}else{xe&&he&&t.texStorage2D(n.TEXTURE_2D,Q,re,ve[0].width,ve[0].height);for(let se=0,ne=ve.length;se<ne;se++)Y=ve[se],S.format!==yi?G!==null?xe?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Y.width,Y.height,G,Y.data):t.compressedTexImage2D(n.TEXTURE_2D,se,re,Y.width,Y.height,0,Y.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?Re&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Y.width,Y.height,G,X,Y.data):t.texImage2D(n.TEXTURE_2D,se,re,Y.width,Y.height,0,G,X,Y.data)}else if(S.isDataArrayTexture)if(xe){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,re,A.width,A.height,A.depth),Re)if(S.layerUpdates.size>0){let se=Oc(A.width,A.height,S.format,S.type);for(let ne of S.layerUpdates){let pe=A.data.subarray(ne*se/A.data.BYTES_PER_ELEMENT,(ne+1)*se/A.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,A.width,A.height,1,G,X,pe)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,A.width,A.height,A.depth,G,X,A.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,re,A.width,A.height,A.depth,0,G,X,A.data);else if(S.isData3DTexture)xe?(he&&t.texStorage3D(n.TEXTURE_3D,Q,re,A.width,A.height,A.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,A.width,A.height,A.depth,G,X,A.data)):t.texImage3D(n.TEXTURE_3D,0,re,A.width,A.height,A.depth,0,G,X,A.data);else if(S.isFramebufferTexture){if(he)if(xe)t.texStorage2D(n.TEXTURE_2D,Q,re,A.width,A.height);else{let se=A.width,ne=A.height;for(let pe=0;pe<Q;pe++)t.texImage2D(n.TEXTURE_2D,pe,re,se,ne,0,G,X,null),se>>=1,ne>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let se=n.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),A.parentNode!==se)return se.appendChild(A),p.add(S),se.onpaint=ne=>{let pe=ne.changedElements;for(let $e of p)pe.includes($e.image)&&($e.needsUpdate=!0)},void se.requestPaint();if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,A);else{let pe=n.RGBA,$e=n.RGBA,qe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,pe,$e,qe,A)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ve.length>0){if(xe&&he){let se=$(ve[0]);t.texStorage2D(n.TEXTURE_2D,Q,re,se.width,se.height)}for(let se=0,ne=ve.length;se<ne;se++)Y=ve[se],xe?Re&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,G,X,Y):t.texImage2D(n.TEXTURE_2D,se,re,G,X,Y);S.generateMipmaps=!1}else if(xe){if(he){let se=$(A);t.texStorage2D(n.TEXTURE_2D,Q,re,se.width,se.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,G,X,A)}else t.texImage2D(n.TEXTURE_2D,0,re,G,X,A);g(S)&&_(U),I.__version=L.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function de(R,S,C,U,x,L){let I=s.convert(C.format,C.colorSpace),A=s.convert(C.type),G=b(C.internalFormat,I,A,C.normalized,C.colorSpace),X=i.get(S),Y=i.get(C);if(Y.__renderTarget=S,!X.__hasExternalTextures){let re=Math.max(1,S.width>>L),ve=Math.max(1,S.height>>L);x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY?t.texImage3D(x,L,G,re,ve,S.depth,0,I,A,null):t.texImage2D(x,L,G,re,ve,0,I,A,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),me(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,U,x,Y.__webglTexture,0,oe(S)):(x===n.TEXTURE_2D||x>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,U,x,Y.__webglTexture,L),t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(R,S,C){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){let U=S.depthTexture,x=U&&U.isDepthTexture?U.type:null,L=w(S.stencilBuffer,x),I=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(S),L,S.width,S.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(S),L,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,L,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,R)}else{let U=S.textures;for(let x=0;x<U.length;x++){let L=U[x],I=s.convert(L.format,L.colorSpace),A=s.convert(L.type),G=b(L.internalFormat,I,A,L.normalized,L.colorSpace);me(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(S),G,S.width,S.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(S),G,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,G,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(R,S,C){let U=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let x=i.get(S.depthTexture);if(x.__renderTarget=S,x.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U){if(x.__webglInit===void 0&&(x.__webglInit=!0,S.depthTexture.addEventListener("dispose",P)),x.__webglTexture===void 0){x.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture),V(n.TEXTURE_CUBE_MAP,S.depthTexture);let X=s.convert(S.depthTexture.format),Y=s.convert(S.depthTexture.type),re;S.depthTexture.format===gn?re=n.DEPTH_COMPONENT24:S.depthTexture.format===Nn&&(re=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,re,S.width,S.height,0,X,Y,null)}}else k(S.depthTexture,0);let L=x.__webglTexture,I=oe(S),A=U?n.TEXTURE_CUBE_MAP_POSITIVE_X+C:n.TEXTURE_2D,G=S.depthTexture.format===Nn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===gn)me(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,A,L,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,G,A,L,0);else{if(S.depthTexture.format!==Nn)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");me(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,A,L,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,G,A,L,0)}}function _e(R){let S=i.get(R),C=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let U=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),U){let x=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,U.removeEventListener("dispose",x)};U.addEventListener("dispose",x),S.__depthDisposeCallback=x}S.__boundDepthTexture=U}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(C)for(let U=0;U<6;U++)ge(S.__webglFramebuffer[U],R,U);else{let U=R.texture.mipmaps;U&&U.length>0?ge(S.__webglFramebuffer[0],R,0):ge(S.__webglFramebuffer,R,0)}else if(C){S.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[U]),S.__webglDepthbuffer[U]===void 0)S.__webglDepthbuffer[U]=n.createRenderbuffer(),be(S.__webglDepthbuffer[U],R,!1);else{let x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=S.__webglDepthbuffer[U];n.bindRenderbuffer(n.RENDERBUFFER,L),n.framebufferRenderbuffer(n.FRAMEBUFFER,x,n.RENDERBUFFER,L)}}else{let U=R.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),be(S.__webglDepthbuffer,R,!1);else{let x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,L),n.framebufferRenderbuffer(n.FRAMEBUFFER,x,n.RENDERBUFFER,L)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}let ee=[],ce=[];function oe(R){return Math.min(r.maxSamples,R.samples)}function me(R){let S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ue(R,S){let C=R.colorSpace,U=R.format,x=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||C!==Xr&&C!==Fn&&(He.getTransfer(C)===Ye?U===yi&&x===Jt||Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",C)),S}function $(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(o.width=R.naturalWidth||R.width,o.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(o.width=R.displayWidth,o.height=R.displayHeight):(o.width=R.width,o.height=R.height),o}this.allocateTextureUnit=function(){let R=N;return R>=r.maxTextures&&Te("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R},this.resetTextureUnits=function(){N=0},this.getTextureUnits=function(){return N},this.setTextureUnits=function(R){N=R},this.setTexture2D=k,this.setTexture2DArray=function(R,S){let C=i.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?ie(C,R,S):(R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+S))},this.setTexture3D=function(R,S){let C=i.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?ie(C,R,S):t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+S)},this.setTextureCube=function(R,S){let C=i.get(R);R.isCubeDepthTexture!==!0&&R.version>0&&C.__version!==R.version?(function(U,x,L){if(x.image.length!==6)return;let I=q(U,x),A=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+L);let G=i.get(A);if(A.version!==G.__version||I===!0){t.activeTexture(n.TEXTURE0+L);let X=He.getPrimaries(He.workingColorSpace),Y=x.colorSpace===Fn?null:He.getPrimaries(x.colorSpace),re=x.colorSpace===Fn||X===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ve=x.isCompressedTexture||x.image[0].isCompressedTexture,xe=x.image[0]&&x.image[0].isDataTexture,he=[];for(let Se=0;Se<6;Se++)he[Se]=ve||xe?xe?x.image[Se].image:x.image[Se]:v(x.image[Se],!0,r.maxCubemapSize),he[Se]=Ue(x,he[Se]);let Re=he[0],Q=s.convert(x.format,x.colorSpace),se=s.convert(x.type),ne=b(x.internalFormat,Q,se,x.normalized,x.colorSpace),pe=x.isVideoTexture!==!0,$e=G.__version===void 0||I===!0,qe=A.dataReady,ot,Dt=M(x,Re);if(V(n.TEXTURE_CUBE_MAP,x),ve){pe&&$e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,ne,Re.width,Re.height);for(let Se=0;Se<6;Se++){ot=he[Se].mipmaps;for(let Ze=0;Ze<ot.length;Ze++){let Be=ot[Ze];x.format!==yi?Q!==null?pe?qe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze,0,0,Be.width,Be.height,Q,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze,ne,Be.width,Be.height,0,Be.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze,0,0,Be.width,Be.height,Q,se,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze,ne,Be.width,Be.height,0,Q,se,Be.data)}}}else{if(ot=x.mipmaps,pe&&$e){ot.length>0&&Dt++;let Se=$(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,ne,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(xe){pe?qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,he[Se].width,he[Se].height,Q,se,he[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ne,he[Se].width,he[Se].height,0,Q,se,he[Se].data);for(let Ze=0;Ze<ot.length;Ze++){let Be=ot[Ze].image[Se].image;pe?qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze+1,0,0,Be.width,Be.height,Q,se,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze+1,ne,Be.width,Be.height,0,Q,se,Be.data)}}else{pe?qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Q,se,he[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ne,Q,se,he[Se]);for(let Ze=0;Ze<ot.length;Ze++){let Be=ot[Ze];pe?qe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze+1,0,0,Q,se,Be.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze+1,ne,Q,se,Be.image[Se])}}}g(x)&&_(n.TEXTURE_CUBE_MAP),G.__version=A.version,x.onUpdate&&x.onUpdate(x)}U.__version=x.version})(C,R,S):t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+S)},this.rebindTextures=function(R,S,C){let U=i.get(R);S!==void 0&&de(U.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&_e(R)},this.setupRenderTarget=function(R){let S=R.texture,C=i.get(R),U=i.get(S);R.addEventListener("dispose",F);let x=R.textures,L=R.isWebGLCubeRenderTarget===!0,I=x.length>1;if(I||(U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture()),U.__version=S.version,a.memory.textures++),L){C.__webglFramebuffer=[];for(let A=0;A<6;A++)if(S.mipmaps&&S.mipmaps.length>0){C.__webglFramebuffer[A]=[];for(let G=0;G<S.mipmaps.length;G++)C.__webglFramebuffer[A][G]=n.createFramebuffer()}else C.__webglFramebuffer[A]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){C.__webglFramebuffer=[];for(let A=0;A<S.mipmaps.length;A++)C.__webglFramebuffer[A]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(I)for(let A=0,G=x.length;A<G;A++){let X=i.get(x[A]);X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&me(R)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let A=0;A<x.length;A++){let G=x[A];C.__webglColorRenderbuffer[A]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[A]);let X=s.convert(G.format,G.colorSpace),Y=s.convert(G.type),re=b(G.internalFormat,X,Y,G.normalized,G.colorSpace,R.isXRRenderTarget===!0),ve=oe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,re,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+A,n.RENDERBUFFER,C.__webglColorRenderbuffer[A])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),be(C.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(L){t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture),V(n.TEXTURE_CUBE_MAP,S);for(let A=0;A<6;A++)if(S.mipmaps&&S.mipmaps.length>0)for(let G=0;G<S.mipmaps.length;G++)de(C.__webglFramebuffer[A][G],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+A,G);else de(C.__webglFramebuffer[A],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+A,0);g(S)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(I){for(let A=0,G=x.length;A<G;A++){let X=x[A],Y=i.get(X),re=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),V(re,X),de(C.__webglFramebuffer,R,X,n.COLOR_ATTACHMENT0+A,re,0),g(X)&&_(re)}t.unbindTexture()}else{let A=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(A=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(A,U.__webglTexture),V(A,S),S.mipmaps&&S.mipmaps.length>0)for(let G=0;G<S.mipmaps.length;G++)de(C.__webglFramebuffer[G],R,S,n.COLOR_ATTACHMENT0,A,G);else de(C.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,A,0);g(S)&&_(A),t.unbindTexture()}R.depthBuffer&&_e(R)},this.updateRenderTargetMipmap=function(R){let S=R.textures;for(let C=0,U=S.length;C<U;C++){let x=S[C];if(g(x)){let L=y(R),I=i.get(x).__webglTexture;t.bindTexture(L,I),_(L),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(me(R)===!1){let S=R.textures,C=R.width,U=R.height,x=n.COLOR_BUFFER_BIT,L=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,I=i.get(R),A=S.length>1;if(A)for(let X=0;X<S.length;X++)t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,I.__webglMultisampledFramebuffer);let G=R.texture.mipmaps;G&&G.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,I.__webglFramebuffer);for(let X=0;X<S.length;X++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(x|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(x|=n.STENCIL_BUFFER_BIT)),A){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,I.__webglColorRenderbuffer[X]);let Y=i.get(S[X]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Y,0)}n.blitFramebuffer(0,0,C,U,0,0,C,U,x,n.NEAREST),c===!0&&(ee.length=0,ce.length=0,ee.push(n.COLOR_ATTACHMENT0+X),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ee.push(L),ce.push(L),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),A)for(let X=0;X<S.length;X++){t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,I.__webglColorRenderbuffer[X]);let Y=i.get(S[X]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.TEXTURE_2D,Y,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,I.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=de,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xf(n,e){return{convert:function(t,i=Fn){let r,s=He.getTransfer(i);if(t===Jt)return n.UNSIGNED_BYTE;if(t===mo)return n.UNSIGNED_SHORT_4_4_4_4;if(t===fo)return n.UNSIGNED_SHORT_5_5_5_1;if(t===Kl)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===$l)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===Zl)return n.BYTE;if(t===Jl)return n.SHORT;if(t===wr)return n.UNSIGNED_SHORT;if(t===po)return n.INT;if(t===Ji)return n.UNSIGNED_INT;if(t===li)return n.FLOAT;if(t===Ii)return n.HALF_FLOAT;if(t===Hu)return n.ALPHA;if(t===Wu)return n.RGB;if(t===yi)return n.RGBA;if(t===gn)return n.DEPTH_COMPONENT;if(t===Nn)return n.DEPTH_STENCIL;if(t===go)return n.RED;if(t===_o)return n.RED_INTEGER;if(t===Un)return n.RG;if(t===Ql)return n.RG_INTEGER;if(t===ec)return n.RGBA_INTEGER;if(t===vo||t===xo||t===yo||t===Mo)if(s===Ye){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===tc||t===ic||t===nc||t===rc){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===sc||t===ac||t===oc||t===lc||t===cc||t===So||t===hc){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===sc||t===ac)return s===Ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===oc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===lc)return r.COMPRESSED_R11_EAC;if(t===cc)return r.COMPRESSED_SIGNED_R11_EAC;if(t===So)return r.COMPRESSED_RG11_EAC;if(t===hc)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===uc||t===dc||t===pc||t===mc||t===fc||t===gc||t===_c||t===vc||t===xc||t===yc||t===Mc||t===Sc||t===bc||t===Tc){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===uc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===dc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===pc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===mc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===fc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===gc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===_c)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===vc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===xc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===yc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Mc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Sc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===bc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Tc)return s===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===wc||t===Ec||t===Ac){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===wc)return s===Ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Cc||t===Rc||t===bo||t===Pc){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Cc)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Er?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ss(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ut({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new Yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nh=class extends Ri{constructor(e,t){super();let i=this,r=null,s=1,a=null,l="local-floor",c=1,o=null,h=null,p=null,d=null,u=null,f=null,m=typeof XRWebGLBinding<"u",v=new ih,g={},_=t.getContextAttributes(),y=null,b=null,w=[],M=[],P=new te,F=null,D=new At;D.viewport=new Je;let N=new At;N.viewport=new Je;let k=[D,N],O=new so,Z=null,H=null;function V(ee){let ce=M.indexOf(ee.inputSource);if(ce===-1)return;let oe=w[ce];oe!==void 0&&(oe.update(ee.inputSource,ee.frame,o||a),oe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",W);for(let ee=0;ee<w.length;ee++){let ce=M[ee];ce!==null&&(M[ee]=null,w[ee].disconnect(ce))}Z=null,H=null,v.reset();for(let ee in g)delete g[ee];e.setRenderTarget(y),u=null,d=null,p=null,r=null,b=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}function W(ee){for(let ce=0;ce<ee.removed.length;ce++){let oe=ee.removed[ce],me=M.indexOf(oe);me>=0&&(M[me]=null,w[me].disconnect(oe))}for(let ce=0;ce<ee.added.length;ce++){let oe=ee.added[ce],me=M.indexOf(oe);if(me===-1){for(let $=0;$<w.length;$++){if($>=M.length){M.push(oe),me=$;break}if(M[$]===null){M[$]=oe,me=$;break}}if(me===-1)break}let Ue=w[me];Ue&&Ue.connect(oe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=w[ee];return ce===void 0&&(ce=new pr,w[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=w[ee];return ce===void 0&&(ce=new pr,w[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=w[ee];return ce===void 0&&(ce=new pr,w[ee]=ce),ce.getHandSpace()},this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){l=ee,i.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(ee){o=ee},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p===null&&m&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",q),r.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(P),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,oe=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=_.stencil?Nn:gn,oe=_.stencil?Er:Ji);let Ue={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Yt(d.textureWidth,d.textureHeight,{format:yi,type:Jt,depthTexture:new qi(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new Yt(u.framebufferWidth,u.framebufferHeight,{format:yi,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await r.requestReferenceSpace(l),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let ie=new E,de=new E;function be(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ce=ee.near,oe=ee.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(oe=v.depthFar)),O.near=N.near=D.near=ce,O.far=N.far=D.far=oe,Z===O.near&&H===O.far||(r.updateRenderState({depthNear:O.near,depthFar:O.far}),Z=O.near,H=O.far),O.layers.mask=6|ee.layers.mask,D.layers.mask=-5&O.layers.mask,N.layers.mask=-3&O.layers.mask;let me=ee.parent,Ue=O.cameras;be(O,me);for(let $=0;$<Ue.length;$++)be(Ue[$],me);Ue.length===2?(function($,R,S){ie.setFromMatrixPosition(R.matrixWorld),de.setFromMatrixPosition(S.matrixWorld);let C=ie.distanceTo(de),U=R.projectionMatrix.elements,x=S.projectionMatrix.elements,L=U[14]/(U[10]-1),I=U[14]/(U[10]+1),A=(U[9]+1)/U[5],G=(U[9]-1)/U[5],X=(U[8]-1)/U[0],Y=(x[8]+1)/x[0],re=L*X,ve=L*Y,xe=C/(-X+Y),he=xe*-X;if(R.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(he),$.translateZ(xe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),U[10]===-1)$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let Re=L+xe,Q=I+xe,se=re-he,ne=ve+(C-he),pe=A*I/Q*Re,$e=G*I/Q*Re;$.projectionMatrix.makePerspective(se,ne,pe,$e,Re,Q),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}})(O,D,N):O.projectionMatrix.copy(D.projectionMatrix),(function($,R,S){S===null?$.matrix.copy(R.matrixWorld):($.matrix.copy(S.matrixWorld),$.matrix.invert(),$.matrix.multiply(R.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=2*ur*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)})(ee,O,me)},this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||u!==null)return c},this.setFoveation=function(ee){c=ee,d!==null&&(d.fixedFoveation=ee),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ee)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(O)},this.getCameraTexture=function(ee){return g[ee]};let ge=null,_e=new Pd;_e.setAnimationLoop(function(ee,ce){if(h=ce.getViewerPose(o||a),f=ce,h!==null){let oe=h.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let me=!1;oe.length!==O.cameras.length&&(O.cameras.length=0,me=!0);for(let $=0;$<oe.length;$++){let R=oe[$],S=null;if(u!==null)S=u.getViewport(R);else{let U=p.getViewSubImage(d,R);S=U.viewport,$===0&&(e.setRenderTargetTextures(b,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(b))}let C=k[$];C===void 0&&(C=new At,C.layers.enable($),C.viewport=new Je,k[$]=C),C.matrix.fromArray(R.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(R.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(S.x,S.y,S.width,S.height),$===0&&(O.matrix.copy(C.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),me===!0&&O.cameras.push(C)}let Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){p=i.getBinding();let $=p.getDepthInformation(oe[0]);$&&$.isValid&&$.texture&&v.init($,r.renderState)}if(Ue&&Ue.includes("camera-access")&&m){e.state.unbindTexture(),p=i.getBinding();for(let $=0;$<oe.length;$++){let R=oe[$].camera;if(R){let S=g[R];S||(S=new ss,g[R]=S);let C=p.getCameraImage(R);S.sourceTexture=C}}}}for(let oe=0;oe<w.length;oe++){let me=M[oe],Ue=w[oe];me!==null&&Ue!==void 0&&Ue.update(me,ce,o||a)}ge&&ge(ee,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),f=null}),this.setAnimationLoop=function(ee){ge=ee},this.dispose=function(){}}},yf=new Fe,Fd=new De;function Mf(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Vt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Vt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),l=a.envMap,c=a.envMapRotation;l&&(r.envMap.value=l,r.envMapRotation.value.setFromMatrix4(yf.makeRotationFromEuler(c)).transpose(),l.isCubeTexture&&l.isRenderTargetTexture===!1&&r.envMapRotation.value.premultiply(Fd),r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Uc(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,l,c){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?i(r,s):s.isMeshLambertMaterial?(i(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(r,s),(function(o,h){h.gradientMap&&(o.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(i(r,s),(function(o,h){o.specular.value.copy(h.specular),o.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(r,s),(function(o,h){o.metalness.value=h.metalness,h.metalnessMap&&(o.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,o.metalnessMapTransform)),o.roughness.value=h.roughness,h.roughnessMap&&(o.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,o.roughnessMapTransform)),h.envMap&&(o.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(o,h,p){o.ior.value=h.ior,h.sheen>0&&(o.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),o.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(o.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,o.sheenColorMapTransform)),h.sheenRoughnessMap&&(o.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,o.sheenRoughnessMapTransform))),h.clearcoat>0&&(o.clearcoat.value=h.clearcoat,o.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(o.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,o.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(o.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,o.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(o.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,o.clearcoatNormalMapTransform),o.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Vt&&o.clearcoatNormalScale.value.negate())),h.dispersion>0&&(o.dispersion.value=h.dispersion),h.iridescence>0&&(o.iridescence.value=h.iridescence,o.iridescenceIOR.value=h.iridescenceIOR,o.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],o.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(o.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,o.iridescenceMapTransform)),h.iridescenceThicknessMap&&(o.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,o.iridescenceThicknessMapTransform))),h.transmission>0&&(o.transmission.value=h.transmission,o.transmissionSamplerMap.value=p.texture,o.transmissionSamplerSize.value.set(p.width,p.height),h.transmissionMap&&(o.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,o.transmissionMapTransform)),o.thickness.value=h.thickness,h.thicknessMap&&(o.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,o.thicknessMapTransform)),o.attenuationDistance.value=h.attenuationDistance,o.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(o.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(o.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,o.anisotropyMapTransform))),o.specularIntensity.value=h.specularIntensity,o.specularColor.value.copy(h.specularColor),h.specularColorMap&&(o.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,o.specularColorMapTransform)),h.specularIntensityMap&&(o.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,o.specularIntensityMapTransform))})(r,s,c)):s.isMeshMatcapMaterial?(i(r,s),(function(o,h){h.matcap&&(o.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),(function(o,h){let p=e.get(h).light;o.referencePosition.value.setFromMatrixPosition(p.matrixWorld),o.nearDistance.value=p.shadow.camera.near,o.farDistance.value=p.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?((function(o,h){o.diffuse.value.copy(h.color),o.opacity.value=h.opacity,h.map&&(o.map.value=h.map,t(h.map,o.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(o,h){o.dashSize.value=h.dashSize,o.totalSize.value=h.dashSize+h.gapSize,o.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(o,h,p,d){o.diffuse.value.copy(h.color),o.opacity.value=h.opacity,o.size.value=h.size*p,o.scale.value=.5*d,h.map&&(o.map.value=h.map,t(h.map,o.uvTransform)),h.alphaMap&&(o.alphaMap.value=h.alphaMap,t(h.alphaMap,o.alphaMapTransform)),h.alphaTest>0&&(o.alphaTest.value=h.alphaTest)})(r,s,a,l):s.isSpriteMaterial?(function(o,h){o.diffuse.value.copy(h.color),o.opacity.value=h.opacity,o.rotation.value=h.rotation,h.map&&(o.map.value=h.map,t(h.map,o.mapTransform)),h.alphaMap&&(o.alphaMap.value=h.alphaMap,t(h.alphaMap,o.alphaMapTransform)),h.alphaTest>0&&(o.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Sf(n,e,t,i){let r={},s={},a=[],l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(d,u,f,m){if((function(v,g,_,y){let b=v.value,w=g+"_"+_;if(y[w]===void 0)return typeof b=="number"||typeof b=="boolean"?y[w]=b:ArrayBuffer.isView(b)?y[w]=b.slice():y[w]=b.clone(),!0;{let M=y[w];if(typeof b=="number"||typeof b=="boolean"){if(M!==b)return y[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(M.equals(b)===!1)return M.copy(b),!0}}return!1})(d,u,f,m)===!0){let v=d.__offset,g=d.value;if(Array.isArray(g)){let _=0;for(let y=0;y<g.length;y++){let b=g[y],w=h(b);o(b,d.__data,_),typeof b=="number"||typeof b=="boolean"||b.isMatrix3||ArrayBuffer.isView(b)||(_+=w.storage/Float32Array.BYTES_PER_ELEMENT)}}else o(g,d.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,d.__data)}}function o(d,u,f){typeof d=="number"||typeof d=="boolean"?u[0]=d:d.isMatrix3?(u[0]=d.elements[0],u[1]=d.elements[1],u[2]=d.elements[2],u[3]=0,u[4]=d.elements[3],u[5]=d.elements[4],u[6]=d.elements[5],u[7]=0,u[8]=d.elements[6],u[9]=d.elements[7],u[10]=d.elements[8],u[11]=0):ArrayBuffer.isView(d)?u.set(new d.constructor(d.buffer,d.byteOffset,u.length)):d.toArray(u,f)}function h(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(d)?(u.boundary=16,u.storage=d.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",d),u}function p(d){let u=d.target;u.removeEventListener("dispose",p);let f=a.indexOf(u.__bindingPointIndex);a.splice(f,1),n.deleteBuffer(r[u.id]),delete r[u.id],delete s[u.id]}return{bind:function(d,u){let f=u.program;i.uniformBlockBinding(d,f)},update:function(d,u){let f=r[d.id];f===void 0&&((function(g){let _=g.uniforms,y=0,b=16;for(let M=0,P=_.length;M<P;M++){let F=Array.isArray(_[M])?_[M]:[_[M]];for(let D=0,N=F.length;D<N;D++){let k=F[D],O=Array.isArray(k.value)?k.value:[k.value];for(let Z=0,H=O.length;Z<H;Z++){let V=h(O[Z]),q=y%b,W=q%V.boundary,ie=q+W;y+=W,ie!==0&&b-ie<V.storage&&(y+=b-ie),k.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=V.storage}}}let w=y%b;w>0&&(y+=b-w),g.__size=y,g.__cache={}})(d),f=(function(g){let _=(function(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();g.__bindingPointIndex=_;let y=n.createBuffer(),b=g.__size,w=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,b,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y})(d),r[d.id]=f,d.addEventListener("dispose",p));let m=u.program;i.updateUBOMapping(d,m);let v=e.render.frame;s[d.id]!==v&&((function(g){let _=r[g.id],y=g.uniforms,b=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let w=0,M=y.length;w<M;w++){let P=y[w];if(Array.isArray(P))for(let F=0,D=P.length;F<D;F++)c(P[F],w,F,b);else c(P,w,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)})(d),s[d.id]=v)},dispose:function(){for(let d in r)n.deleteBuffer(r[d]);a=[],r={},s={}}}}Fd.set(-1,0,0,0,1,0,0,0,1);var bf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Li=null,Io=class{constructor(e={}){let{canvas:t=$u(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Jt}=e,f;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let m=u,v=new Set([ec,Ql,_o]),g=new Set([Jt,Ji,wr,Er,mo,fo]),_=new Uint32Array(4),y=new Int32Array(4),b=new E,w=null,M=null,P=[],F=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,k=!1,O=null,Z=null,H=null,V=null;this._outputColorSpace=Xt;let q=0,W=0,ie=null,de=-1,be=null,ge=new Je,_e=new Je,ee=null,ce=new Ce(0),oe=0,me=t.width,Ue=t.height,$=1,R=null,S=null,C=new Je(0,0,me,Ue),U=new Je(0,0,me,Ue),x=!1,L=new ji,I=!1,A=!1,G=new Fe,X=new E,Y=new Je,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function xe(){return ie===null?$:1}let he,Re,Q,se,ne,pe,$e,qe,ot,Dt,Se,Ze,Be,bt,Qe,mt,at,ti,di,vn,Si,en,zs,B=i;function yh(T,z){return t.getContext(T,z)}try{let T={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Sh,!1),t.addEventListener("webglcontextrestored",bh,!1),t.addEventListener("webglcontextcreationerror",Th,!1),B===null){let z="webgl2";if(B=yh(z,T),B===null)throw yh(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Ee("WebGLRenderer: "+T.message),T}function Mh(){he=new Zp(B),he.init(),Si=new xf(B,he),Re=new Xp(B,he,e,Si),Q=new _f(B,he),Re.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),Z=B.createFramebuffer(),H=B.createFramebuffer(),V=B.createFramebuffer(),se=new $p(B),ne=new af,pe=new vf(B,he,Q,ne,Re,Si,se),$e=new Yp(N),qe=new Gp(B),en=new Hp(B,qe),ot=new Jp(B,qe,se,en),Dt=new em(B,ot,qe,en,se),ti=new Qp(B,Re,pe),Qe=new jp(ne),Se=new sf(N,$e,he,Re,en,Qe),Ze=new Mf(N,ne),Be=new lf,bt=new pf(he),at=new kp(N,$e,Q,Dt,f,c),mt=new gf(N,Dt,Re),zs=new Sf(B,se,Re,Q),di=new Wp(B,he,se),vn=new Kp(B,he,se),se.programs=Se.programs,N.capabilities=Re,N.extensions=he,N.properties=ne,N.renderLists=Be,N.shadowMap=mt,N.state=Q,N.info=se}Mh(),m!==Jt&&(D=new im(m,t.width,t.height,l,r,s));let ht=new nh(N,B);function Sh(T){T.preventDefault(),Dc("WebGLRenderer: Context Lost."),k=!0}function bh(){Dc("WebGLRenderer: Context Restored."),k=!1;let T=se.autoReset,z=mt.enabled,j=mt.autoUpdate,K=mt.needsUpdate,J=mt.type;Mh(),se.autoReset=T,mt.enabled=z,mt.autoUpdate=j,mt.needsUpdate=K,mt.type=J}function Th(T){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function wh(T){let z=T.target;z.removeEventListener("dispose",wh),(function(j){(function(K){let J=ne.get(K).programs;J!==void 0&&(J.forEach(function(ae){Se.releaseProgram(ae)}),K.isShaderMaterial&&Se.releaseShaderCache(K))})(j),ne.remove(j)})(z)}function Eh(T,z,j){T.transparent===!0&&T.side===Ft&&T.forceSinglePass===!1?(T.side=Vt,T.needsUpdate=!0,Vs(T,z,j),T.side=Sr,T.needsUpdate=!0,Vs(T,z,j),T.side=Ft):Vs(T,z,j)}this.xr=ht,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=he.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=he.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(me,Ue,!1))},this.getSize=function(T){return T.set(me,Ue)},this.setSize=function(T,z,j=!0){ht.isPresenting?Te("WebGLRenderer: Can't change size while VR device is presenting."):(me=T,Ue=z,t.width=Math.floor(T*$),t.height=Math.floor(z*$),j===!0&&(t.style.width=T+"px",t.style.height=z+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,T,z))},this.getDrawingBufferSize=function(T){return T.set(me*$,Ue*$).floor()},this.setDrawingBufferSize=function(T,z,j){me=T,Ue=z,$=j,t.width=Math.floor(T*j),t.height=Math.floor(z*j),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(m!==Jt){if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(T||[])}else Ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(T){return T.copy(ge)},this.getViewport=function(T){return T.copy(C)},this.setViewport=function(T,z,j,K){T.isVector4?C.set(T.x,T.y,T.z,T.w):C.set(T,z,j,K),Q.viewport(ge.copy(C).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,z,j,K){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,z,j,K),Q.scissor(_e.copy(U).multiplyScalar($).round())},this.getScissorTest=function(){return x},this.setScissorTest=function(T){Q.setScissorTest(x=T)},this.setOpaqueSort=function(T){R=T},this.setTransparentSort=function(T){S=T},this.getClearColor=function(T){return T.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,j=!0){let K=0;if(T){let J=!1;if(ie!==null){let ae=ie.texture.format;J=v.has(ae)}if(J){let ae=ie.texture.type,ue=g.has(ae),fe=at.getClearColor(),ye=at.getClearAlpha(),Pe=fe.r,We=fe.g,Xe=fe.b;ue?(_[0]=Pe,_[1]=We,_[2]=Xe,_[3]=ye,B.clearBufferuiv(B.COLOR,0,_)):(y[0]=Pe,y[1]=We,y[2]=Xe,y[3]=ye,B.clearBufferiv(B.COLOR,0,y))}else K|=B.COLOR_BUFFER_BIT}z&&(K|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Sh,!1),t.removeEventListener("webglcontextrestored",bh,!1),t.removeEventListener("webglcontextcreationerror",Th,!1),at.dispose(),Be.dispose(),bt.dispose(),ne.dispose(),$e.dispose(),Dt.dispose(),en.dispose(),zs.dispose(),Se.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Ah),ht.removeEventListener("sessionend",Ch),xn.stop()},this.renderBufferDirect=function(T,z,j,K,J,ae){z===null&&(z=re);let ue=J.isMesh&&J.matrixWorld.determinantAffine()<0,fe=(function(ke,nt,Tt,Ie,Ne){nt.isScene!==!0&&(nt=re),pe.resetTextureUnits();let pi=nt.fog,zo=Ie.isMeshStandardMaterial||Ie.isMeshLambertMaterial||Ie.isMeshPhongMaterial?nt.environment:null,ks=ie===null?N.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:He.workingColorSpace,Dr=Ie.isMeshStandardMaterial||Ie.isMeshLambertMaterial&&!Ie.envMap||Ie.isMeshPhongMaterial&&!Ie.envMap,bi=$e.get(Ie.envMap||zo,Dr),Wn=Ie.vertexColors===!0&&!!Tt.attributes.color&&Tt.attributes.color.itemSize===4,Ui=!!Tt.attributes.tangent&&(!!Ie.normalMap||Ie.anisotropy>0),Go=!!Tt.morphAttributes.position,Xn=!!Tt.morphAttributes.normal,tp=!!Tt.morphAttributes.color,Nh=xi;Ie.toneMapped&&(ie!==null&&ie.isXRRenderTarget!==!0||(Nh=N.toneMapping));let Uh=Tt.morphAttributes.position||Tt.morphAttributes.normal||Tt.morphAttributes.color,ip=Uh!==void 0?Uh.length:0,Le=ne.get(Ie),yn=M.state.lights;if(I===!0&&(A===!0||ke!==be)){let dt=ke===be&&Ie.id===de;Qe.setState(Ie,ke,dt)}let mi=!1;Ie.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==yn.state.version||Le.outputColorSpace!==ks||Ne.isBatchedMesh&&Le.batching===!1?mi=!0:Ne.isBatchedMesh||Le.batching!==!0?Ne.isBatchedMesh&&Le.batchingColor===!0&&Ne.colorTexture===null||Ne.isBatchedMesh&&Le.batchingColor===!1&&Ne.colorTexture!==null||Ne.isInstancedMesh&&Le.instancing===!1?mi=!0:Ne.isInstancedMesh||Le.instancing!==!0?Ne.isSkinnedMesh&&Le.skinning===!1?mi=!0:Ne.isSkinnedMesh||Le.skinning!==!0?Ne.isInstancedMesh&&Le.instancingColor===!0&&Ne.instanceColor===null||Ne.isInstancedMesh&&Le.instancingColor===!1&&Ne.instanceColor!==null||Ne.isInstancedMesh&&Le.instancingMorph===!0&&Ne.morphTexture===null||Ne.isInstancedMesh&&Le.instancingMorph===!1&&Ne.morphTexture!==null||Le.envMap!==bi||Ie.fog===!0&&Le.fog!==pi?mi=!0:Le.numClippingPlanes===void 0||Le.numClippingPlanes===Qe.numPlanes&&Le.numIntersection===Qe.numIntersection?(Le.vertexAlphas!==Wn||Le.vertexTangents!==Ui||Le.morphTargets!==Go||Le.morphNormals!==Xn||Le.morphColors!==tp||Le.toneMapping!==Nh||Le.morphTargetsCount!==ip||!!Le.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(mi=!0):mi=!0:mi=!0:mi=!0:mi=!0:(mi=!0,Le.__version=Ie.version);let tn=Le.currentProgram;mi===!0&&(tn=Vs(Ie,nt,Ne),O&&Ie.isNodeMaterial&&O.onUpdateProgram(Ie,tn,Le));let Fh=!1,jn=!1,Vo=!1,rt=tn.getUniforms(),ii=Le.uniforms;if(Q.useProgram(tn.program)&&(Fh=!0,jn=!0,Vo=!0),Ie.id!==de&&(de=Ie.id,jn=!0),Le.needsLights){let dt=(function(wi,Ho){if(wi.length===0)return null;if(wi.length===1)return wi[0].texture!==null?wi[0]:null;b.setFromMatrixPosition(Ho.matrixWorld);for(let qn=0,np=wi.length;qn<np;qn++){let Wo=wi[qn];if(Wo.texture!==null&&Wo.boundingBox.containsPoint(b))return Wo}return null})(M.state.lightProbeGridArray,Ne);Le.lightProbeGrid!==dt&&(Le.lightProbeGrid=dt,jn=!0)}if(Fh||be!==ke){Q.buffers.depth.getReversed()&&ke.reversedDepth!==!0&&(ke._reversedDepth=!0,ke.updateProjectionMatrix()),rt.setValue(B,"projectionMatrix",ke.projectionMatrix),rt.setValue(B,"viewMatrix",ke.matrixWorldInverse);let dt=rt.map.cameraPosition;dt!==void 0&&dt.setValue(B,X.setFromMatrixPosition(ke.matrixWorld)),Re.logarithmicDepthBuffer&&rt.setValue(B,"logDepthBufFC",2/(Math.log(ke.far+1)/Math.LN2)),(Ie.isMeshPhongMaterial||Ie.isMeshToonMaterial||Ie.isMeshLambertMaterial||Ie.isMeshBasicMaterial||Ie.isMeshStandardMaterial||Ie.isShaderMaterial)&&rt.setValue(B,"isOrthographic",ke.isOrthographicCamera===!0),be!==ke&&(be=ke,jn=!0,Vo=!0)}if(Le.needsLights&&(yn.state.directionalShadowMap.length>0&&rt.setValue(B,"directionalShadowMap",yn.state.directionalShadowMap,pe),yn.state.spotShadowMap.length>0&&rt.setValue(B,"spotShadowMap",yn.state.spotShadowMap,pe),yn.state.pointShadowMap.length>0&&rt.setValue(B,"pointShadowMap",yn.state.pointShadowMap,pe)),Ne.isSkinnedMesh){rt.setOptional(B,Ne,"bindMatrix"),rt.setOptional(B,Ne,"bindMatrixInverse");let dt=Ne.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),rt.setValue(B,"boneTexture",dt.boneTexture,pe))}Ne.isBatchedMesh&&(rt.setOptional(B,Ne,"batchingTexture"),rt.setValue(B,"batchingTexture",Ne._matricesTexture,pe),rt.setOptional(B,Ne,"batchingIdTexture"),rt.setValue(B,"batchingIdTexture",Ne._indirectTexture,pe),rt.setOptional(B,Ne,"batchingColorTexture"),Ne._colorsTexture!==null&&rt.setValue(B,"batchingColorTexture",Ne._colorsTexture,pe));let ko=Tt.morphAttributes;if(ko.position===void 0&&ko.normal===void 0&&ko.color===void 0||ti.update(Ne,Tt,tn),(jn||Le.receiveShadow!==Ne.receiveShadow)&&(Le.receiveShadow=Ne.receiveShadow,rt.setValue(B,"receiveShadow",Ne.receiveShadow)),(Ie.isMeshStandardMaterial||Ie.isMeshLambertMaterial||Ie.isMeshPhongMaterial)&&Ie.envMap===null&&nt.environment!==null&&(ii.envMapIntensity.value=nt.environmentIntensity),ii.dfgLUT!==void 0&&(ii.dfgLUT.value=(Li===null&&(Li=new es(bf,16,16,Un,Ii),Li.name="DFG_LUT",Li.minFilter=Rt,Li.magFilter=Rt,Li.wrapS=un,Li.wrapT=un,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li)),jn){if(rt.setValue(B,"toneMappingExposure",N.toneMappingExposure),Le.needsLights&&(fi=Vo,(Ti=ii).ambientLightColor.needsUpdate=fi,Ti.lightProbe.needsUpdate=fi,Ti.directionalLights.needsUpdate=fi,Ti.directionalLightShadows.needsUpdate=fi,Ti.pointLights.needsUpdate=fi,Ti.pointLightShadows.needsUpdate=fi,Ti.spotLights.needsUpdate=fi,Ti.spotLightShadows.needsUpdate=fi,Ti.rectAreaLights.needsUpdate=fi,Ti.hemisphereLights.needsUpdate=fi),pi&&Ie.fog===!0&&Ze.refreshFogUniforms(ii,pi),Ze.refreshMaterialUniforms(ii,Ie,$,Ue,M.state.transmissionRenderTarget[ke.id]),Le.needsLights&&Le.lightProbeGrid){let dt=Le.lightProbeGrid;ii.probesSH.value=dt.texture,ii.probesMin.value.copy(dt.boundingBox.min),ii.probesMax.value.copy(dt.boundingBox.max),ii.probesResolution.value.copy(dt.resolution)}Cr.upload(B,Lh(Le),ii,pe)}var Ti,fi;if(Ie.isShaderMaterial&&Ie.uniformsNeedUpdate===!0&&(Cr.upload(B,Lh(Le),ii,pe),Ie.uniformsNeedUpdate=!1),Ie.isSpriteMaterial&&rt.setValue(B,"center",Ne.center),rt.setValue(B,"modelViewMatrix",Ne.modelViewMatrix),rt.setValue(B,"normalMatrix",Ne.normalMatrix),rt.setValue(B,"modelMatrix",Ne.matrixWorld),Ie.uniformsGroups!==void 0){let dt=Ie.uniformsGroups;for(let wi=0,Ho=dt.length;wi<Ho;wi++){let qn=dt[wi];zs.update(qn,tn),zs.bind(qn,tn)}}return tn})(T,z,j,K,J);Q.setMaterial(K,ue);let ye=j.index,Pe=1;if(K.wireframe===!0){if(ye=ot.getWireframeAttribute(j),ye===void 0)return;Pe=2}let We=j.drawRange,Xe=j.attributes.position,Ae=We.start*Pe,je=(We.start+We.count)*Pe;ae!==null&&(Ae=Math.max(Ae,ae.start*Pe),je=Math.min(je,(ae.start+ae.count)*Pe)),ye!==null?(Ae=Math.max(Ae,0),je=Math.min(je,ye.count)):Xe!=null&&(Ae=Math.max(Ae,0),je=Math.min(je,Xe.count));let ft=je-Ae;if(ft<0||ft===1/0)return;let ut;en.setup(J,K,fe,j,ye);let it=di;if(ye!==null&&(ut=qe.get(ye),it=vn,it.setIndex(ut)),J.isMesh)K.wireframe===!0?(Q.setLineWidth(K.wireframeLinewidth*xe()),it.setMode(B.LINES)):it.setMode(B.TRIANGLES);else if(J.isLine){let ke=K.linewidth;ke===void 0&&(ke=1),Q.setLineWidth(ke*xe()),J.isLineSegments?it.setMode(B.LINES):J.isLineLoop?it.setMode(B.LINE_LOOP):it.setMode(B.LINE_STRIP)}else J.isPoints?it.setMode(B.POINTS):J.isSprite&&it.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(he.get("WEBGL_multi_draw"))it.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let ke=J._multiDrawStarts,nt=J._multiDrawCounts,Tt=J._multiDrawCount,Ie=ye?qe.get(ye).bytesPerElement:1,Ne=ne.get(K).currentProgram.getUniforms();for(let pi=0;pi<Tt;pi++)Ne.setValue(B,"_gl_DrawID",pi),it.render(ke[pi]/Ie,nt[pi])}else if(J.isInstancedMesh)it.renderInstances(Ae,ft,J.count);else if(j.isInstancedBufferGeometry){let ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,nt=Math.min(j.instanceCount,ke);it.renderInstances(Ae,ft,nt)}else it.render(Ae,ft)},this.compile=function(T,z,j=null){j===null&&(j=T),M=bt.get(j),M.init(z),F.push(M),j.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),T!==j&&T.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),M.setupLights();let K=new Set;return T.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let ae=J.material;if(ae)if(Array.isArray(ae))for(let ue=0;ue<ae.length;ue++){let fe=ae[ue];Eh(fe,j,J),K.add(fe)}else Eh(ae,j,J),K.add(ae)}),M=F.pop(),K},this.compileAsync=function(T,z,j=null){let K=this.compile(T,z,j);return new Promise(J=>{function ae(){K.forEach(function(ue){ne.get(ue).currentProgram.isReady()&&K.delete(ue)}),K.size!==0?setTimeout(ae,10):J(T)}he.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Oo=null;function Ah(){xn.stop()}function Ch(){xn.start()}let xn=new Pd;function Bo(T,z,j,K){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||L.intersectsSprite(T)){K&&Y.setFromMatrixPosition(T.matrixWorld).applyMatrix4(G);let ae=Dt.update(T),ue=T.material;ue.visible&&w.push(T,ae,ue,j,Y.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||L.intersectsObject(T))){let ae=Dt.update(T),ue=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Y.copy(T.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Y.copy(ae.boundingSphere.center)),Y.applyMatrix4(T.matrixWorld).applyMatrix4(G)),Array.isArray(ue)){let fe=ae.groups;for(let ye=0,Pe=fe.length;ye<Pe;ye++){let We=fe[ye],Xe=ue[We.materialIndex];Xe&&Xe.visible&&w.push(T,ae,Xe,j,Y.z,We)}}else ue.visible&&w.push(T,ae,ue,j,Y.z,null)}}let J=T.children;for(let ae=0,ue=J.length;ae<ue;ae++)Bo(J[ae],z,j,K)}function Rh(T,z,j,K){let{opaque:J,transmissive:ae,transparent:ue}=T;M.setupLightsView(j),I===!0&&Qe.setGlobalState(N.clippingPlanes,j),K&&Q.viewport(ge.copy(K)),J.length>0&&Gs(J,z,j),ae.length>0&&Gs(ae,z,j),ue.length>0&&Gs(ue,z,j),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Ph(T,z,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[K.id]===void 0){let Xe=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[K.id]=new Yt(1,1,{generateMipmaps:!0,type:Xe?Ii:Jt,minFilter:Dn,samples:Math.max(4,Re.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}let J=M.state.transmissionRenderTarget[K.id],ae=K.viewport||ge;J.setSize(ae.z*N.transmissionResolutionScale,ae.w*N.transmissionResolutionScale);let ue=N.getRenderTarget(),fe=N.getActiveCubeFace(),ye=N.getActiveMipmapLevel();N.setRenderTarget(J),N.getClearColor(ce),oe=N.getClearAlpha(),oe<1&&N.setClearColor(16777215,.5),N.clear(),ve&&at.render(j);let Pe=N.toneMapping;N.toneMapping=xi;let We=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),M.setupLightsView(K),I===!0&&Qe.setGlobalState(N.clippingPlanes,K),Gs(T,j,K),pe.updateMultisampleRenderTarget(J),pe.updateRenderTargetMipmap(J),he.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ae=0,je=z.length;Ae<je;Ae++){let ft=z[Ae],{object:ut,geometry:it,material:ke,group:nt}=ft;if(ke.side===Ft&&ut.layers.test(K.layers)){let Tt=ke.side;ke.side=Vt,ke.needsUpdate=!0,Ih(ut,j,K,it,ke,nt),ke.side=Tt,ke.needsUpdate=!0,Xe=!0}}Xe===!0&&(pe.updateMultisampleRenderTarget(J),pe.updateRenderTargetMipmap(J))}N.setRenderTarget(ue,fe,ye),N.setClearColor(ce,oe),We!==void 0&&(K.viewport=We),N.toneMapping=Pe}function Gs(T,z,j){let K=z.isScene===!0?z.overrideMaterial:null;for(let J=0,ae=T.length;J<ae;J++){let ue=T[J],{object:fe,geometry:ye,group:Pe}=ue,We=ue.material;We.allowOverride===!0&&K!==null&&(We=K),fe.layers.test(j.layers)&&Ih(fe,z,j,ye,We,Pe)}}function Ih(T,z,j,K,J,ae){T.onBeforeRender(N,z,j,K,J,ae),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(N,z,j,K,T,ae),J.transparent===!0&&J.side===Ft&&J.forceSinglePass===!1?(J.side=Vt,J.needsUpdate=!0,N.renderBufferDirect(j,z,K,J,T,ae),J.side=Sr,J.needsUpdate=!0,N.renderBufferDirect(j,z,K,J,T,ae),J.side=Ft):N.renderBufferDirect(j,z,K,J,T,ae),T.onAfterRender(N,z,j,K,J,ae)}function Vs(T,z,j){z.isScene!==!0&&(z=re);let K=ne.get(T),J=M.state.lights,ae=M.state.shadowsArray,ue=J.state.version,fe=Se.getParameters(T,J.state,ae,z,j,M.state.lightProbeGridArray),ye=Se.getProgramCacheKey(fe),Pe=K.programs;K.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,K.fog=z.fog;let We=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;K.envMap=$e.get(T.envMap||K.environment,We),K.envMapRotation=K.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",wh),Pe=new Map,K.programs=Pe);let Xe=Pe.get(ye);if(Xe!==void 0){if(K.currentProgram===Xe&&K.lightsStateVersion===ue)return Dh(T,fe),Xe}else fe.uniforms=Se.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,j,fe),T.onBeforeCompile(fe,N),Xe=Se.acquireProgram(fe,ye),Pe.set(ye,Xe),K.uniforms=fe.uniforms;let Ae=K.uniforms;return(T.isShaderMaterial||T.isRawShaderMaterial)&&T.clipping!==!0||(Ae.clippingPlanes=Qe.uniform),Dh(T,fe),K.needsLights=(function(je){return je.isMeshLambertMaterial||je.isMeshToonMaterial||je.isMeshPhongMaterial||je.isMeshStandardMaterial||je.isShadowMaterial||je.isShaderMaterial&&je.lights===!0})(T),K.lightsStateVersion=ue,K.needsLights&&(Ae.ambientLightColor.value=J.state.ambient,Ae.lightProbe.value=J.state.probe,Ae.directionalLights.value=J.state.directional,Ae.directionalLightShadows.value=J.state.directionalShadow,Ae.spotLights.value=J.state.spot,Ae.spotLightShadows.value=J.state.spotShadow,Ae.rectAreaLights.value=J.state.rectArea,Ae.ltc_1.value=J.state.rectAreaLTC1,Ae.ltc_2.value=J.state.rectAreaLTC2,Ae.pointLights.value=J.state.point,Ae.pointLightShadows.value=J.state.pointShadow,Ae.hemisphereLights.value=J.state.hemi,Ae.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ae.spotLightMatrix.value=J.state.spotLightMatrix,Ae.spotLightMap.value=J.state.spotLightMap,Ae.pointShadowMatrix.value=J.state.pointShadowMatrix),K.lightProbeGrid=M.state.lightProbeGridArray.length>0,K.currentProgram=Xe,K.uniformsList=null,Xe}function Lh(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=Cr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Dh(T,z){let j=ne.get(T);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}xn.setAnimationLoop(function(T){Oo&&Oo(T)}),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(T){Oo=T,ht.setAnimationLoop(T),T===null?xn.stop():xn.start()},ht.addEventListener("sessionstart",Ah),ht.addEventListener("sessionend",Ch),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0)return void Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(k===!0)return;O!==null&&O.renderStart(T,z);let j=ht.enabled===!0&&ht.isPresenting===!0,K=D!==null&&(ie===null||j)&&D.begin(N,ie);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ht.enabled!==!0||ht.isPresenting!==!0||D!==null&&D.isCompositing()!==!1||(ht.cameraAutoUpdate===!0&&ht.updateCamera(z),z=ht.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,z,ie),M=bt.get(T,F.length),M.init(z),M.state.textureUnits=pe.getTextureUnits(),F.push(M),G.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),L.setFromProjectionMatrix(G,Hi,z.reversedDepth),A=this.localClippingEnabled,I=Qe.init(this.clippingPlanes,A),w=Be.get(T,P.length),w.init(),P.push(w),ht.enabled===!0&&ht.isPresenting===!0){let ae=N.xr.getDepthSensingMesh();ae!==null&&Bo(ae,z,-1/0,N.sortObjects)}Bo(T,z,0,N.sortObjects),w.finish(),N.sortObjects===!0&&w.sort(R,S,z.reversedDepth),ve=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,ve&&at.addToRenderList(w,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),I===!0&&Qe.beginShadows();let J=M.state.shadowsArray;if(mt.render(J,T,z),I===!0&&Qe.endShadows(),(K&&D.hasRenderPass())===!1){let ae=w.opaque,ue=w.transmissive;if(M.setupLights(),z.isArrayCamera){let fe=z.cameras;if(ue.length>0)for(let ye=0,Pe=fe.length;ye<Pe;ye++)Ph(ae,ue,T,fe[ye]);ve&&at.render(T);for(let ye=0,Pe=fe.length;ye<Pe;ye++){let We=fe[ye];Rh(w,T,We,We.viewport)}}else ue.length>0&&Ph(ae,ue,T,z),ve&&at.render(T),Rh(w,T,z)}ie!==null&&W===0&&(pe.updateMultisampleRenderTarget(ie),pe.updateRenderTargetMipmap(ie)),K&&D.end(N),T.isScene===!0&&T.onAfterRender(N,T,z),en.resetDefaultState(),de=-1,be=null,F.pop(),F.length>0?(M=F[F.length-1],pe.setTextureUnits(M.state.textureUnits),I===!0&&Qe.setGlobalState(N.clippingPlanes,M.state.camera)):M=null,P.pop(),w=P.length>0?P[P.length-1]:null,O!==null&&O.renderEnd()},this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(T,z,j){let K=ne.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ne.get(T.texture).__webglTexture=z,ne.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let j=ne.get(T);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,j=0){ie=T,q=z,W=j;let K=null,J=!1,ae=!1;if(T){let ue=ne.get(T);if(ue.__useDefaultFramebuffer!==void 0)return Q.bindFramebuffer(B.FRAMEBUFFER,ue.__webglFramebuffer),ge.copy(T.viewport),_e.copy(T.scissor),ee=T.scissorTest,Q.viewport(ge),Q.scissor(_e),Q.setScissorTest(ee),void(de=-1);if(ue.__webglFramebuffer===void 0)pe.setupRenderTarget(T);else if(ue.__hasExternalTextures)pe.rebindTextures(T,ne.get(T.texture).__webglTexture,ne.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Pe=T.depthTexture;if(ue.__boundDepthTexture!==Pe){if(Pe!==null&&ne.has(Pe)&&(T.width!==Pe.image.width||T.height!==Pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(T)}}let fe=T.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(ae=!0);let ye=ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(K=Array.isArray(ye[z])?ye[z][j]:ye[z],J=!0):K=T.samples>0&&pe.useMultisampledRTT(T)===!1?ne.get(T).__webglMultisampledFramebuffer:Array.isArray(ye)?ye[j]:ye,ge.copy(T.viewport),_e.copy(T.scissor),ee=T.scissorTest}else ge.copy(C).multiplyScalar($).floor(),_e.copy(U).multiplyScalar($).floor(),ee=x;if(j!==0&&(K=Z),Q.bindFramebuffer(B.FRAMEBUFFER,K)&&Q.drawBuffers(T,K),Q.viewport(ge),Q.scissor(_e),Q.setScissorTest(ee),J){let ue=ne.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,ue.__webglTexture,j)}else if(ae){let ue=z;for(let fe=0;fe<T.textures.length;fe++){let ye=ne.get(T.textures[fe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+fe,ye.__webglTexture,j,ue)}}else if(T!==null&&j!==0){let ue=ne.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ue.__webglTexture,j)}de=-1},this.readRenderTargetPixels=function(T,z,j,K,J,ae,ue,fe=0){if(!T||!T.isWebGLRenderTarget)return void Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(ye=ye[ue]),ye){Q.bindFramebuffer(B.FRAMEBUFFER,ye);try{let Pe=T.textures[fe],We=Pe.format,Xe=Pe.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe),!Re.textureFormatReadable(We))return void Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Xe))return void Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");z>=0&&z<=T.width-K&&j>=0&&j<=T.height-J&&B.readPixels(z,j,K,J,Si.convert(We),Si.convert(Xe),ae)}finally{let Pe=ie!==null?ne.get(ie).__webglFramebuffer:null;Q.bindFramebuffer(B.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,z,j,K,J,ae,ue,fe=0){if(!T||!T.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(ye=ye[ue]),ye){if(z>=0&&z<=T.width-K&&j>=0&&j<=T.height-J){Q.bindFramebuffer(B.FRAMEBUFFER,ye);let Pe=T.textures[fe],We=Pe.format,Xe=Pe.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe),!Re.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ae),B.bufferData(B.PIXEL_PACK_BUFFER,ae.byteLength,B.STREAM_READ),B.readPixels(z,j,K,J,Si.convert(We),Si.convert(Xe),0);let je=ie!==null?ne.get(ie).__webglFramebuffer:null;Q.bindFramebuffer(B.FRAMEBUFFER,je);let ft=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ed(B,ft,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ae),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ae),B.deleteBuffer(Ae),B.deleteSync(ft),ae}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,j=0){let K=Math.pow(2,-j),J=Math.floor(T.image.width*K),ae=Math.floor(T.image.height*K),ue=z!==null?z.x:0,fe=z!==null?z.y:0;pe.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,ue,fe,J,ae),Q.unbindTexture()},this.copyTextureToTexture=function(T,z,j=null,K=null,J=0,ae=0){let ue,fe,ye,Pe,We,Xe,Ae,je,ft,ut=T.isCompressedTexture?T.mipmaps[ae]:T.image;if(j!==null)ue=j.max.x-j.min.x,fe=j.max.y-j.min.y,ye=j.isBox3?j.max.z-j.min.z:1,Pe=j.min.x,We=j.min.y,Xe=j.isBox3?j.min.z:0;else{let bi=Math.pow(2,-J);ue=Math.floor(ut.width*bi),fe=Math.floor(ut.height*bi),ye=T.isDataArrayTexture?ut.depth:T.isData3DTexture?Math.floor(ut.depth*bi):1,Pe=0,We=0,Xe=0}K!==null?(Ae=K.x,je=K.y,ft=K.z):(Ae=0,je=0,ft=0);let it=Si.convert(z.format),ke=Si.convert(z.type),nt;z.isData3DTexture?(pe.setTexture3D(z,0),nt=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(pe.setTexture2DArray(z,0),nt=B.TEXTURE_2D_ARRAY):(pe.setTexture2D(z,0),nt=B.TEXTURE_2D),Q.activeTexture(B.TEXTURE0),Q.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),Q.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Q.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let Tt=Q.getParameter(B.UNPACK_ROW_LENGTH),Ie=Q.getParameter(B.UNPACK_IMAGE_HEIGHT),Ne=Q.getParameter(B.UNPACK_SKIP_PIXELS),pi=Q.getParameter(B.UNPACK_SKIP_ROWS),zo=Q.getParameter(B.UNPACK_SKIP_IMAGES);Q.pixelStorei(B.UNPACK_ROW_LENGTH,ut.width),Q.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ut.height),Q.pixelStorei(B.UNPACK_SKIP_PIXELS,Pe),Q.pixelStorei(B.UNPACK_SKIP_ROWS,We),Q.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe);let ks=T.isDataArrayTexture||T.isData3DTexture,Dr=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let bi=ne.get(T),Wn=ne.get(z),Ui=ne.get(bi.__renderTarget),Go=ne.get(Wn.__renderTarget);Q.bindFramebuffer(B.READ_FRAMEBUFFER,Ui.__webglFramebuffer),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,Go.__webglFramebuffer);for(let Xn=0;Xn<ye;Xn++)ks&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ne.get(T).__webglTexture,J,Xe+Xn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ne.get(z).__webglTexture,ae,ft+Xn)),B.blitFramebuffer(Pe,We,ue,fe,Ae,je,ue,fe,B.DEPTH_BUFFER_BIT,B.NEAREST);Q.bindFramebuffer(B.READ_FRAMEBUFFER,null),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||T.isRenderTargetTexture||ne.has(T)){let bi=ne.get(T),Wn=ne.get(z);Q.bindFramebuffer(B.READ_FRAMEBUFFER,H),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,V);for(let Ui=0;Ui<ye;Ui++)ks?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,bi.__webglTexture,J,Xe+Ui):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,bi.__webglTexture,J),Dr?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Wn.__webglTexture,ae,ft+Ui):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Wn.__webglTexture,ae),J!==0?B.blitFramebuffer(Pe,We,ue,fe,Ae,je,ue,fe,B.COLOR_BUFFER_BIT,B.NEAREST):Dr?B.copyTexSubImage3D(nt,ae,Ae,je,ft+Ui,Pe,We,ue,fe):B.copyTexSubImage2D(nt,ae,Ae,je,Pe,We,ue,fe);Q.bindFramebuffer(B.READ_FRAMEBUFFER,null),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Dr?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(nt,ae,Ae,je,ft,ue,fe,ye,it,ke,ut.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(nt,ae,Ae,je,ft,ue,fe,ye,it,ut.data):B.texSubImage3D(nt,ae,Ae,je,ft,ue,fe,ye,it,ke,ut):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ae,Ae,je,ue,fe,it,ke,ut.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ae,Ae,je,ut.width,ut.height,it,ut.data):B.texSubImage2D(B.TEXTURE_2D,ae,Ae,je,ue,fe,it,ke,ut);Q.pixelStorei(B.UNPACK_ROW_LENGTH,Tt),Q.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ie),Q.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),Q.pixelStorei(B.UNPACK_SKIP_ROWS,pi),Q.pixelStorei(B.UNPACK_SKIP_IMAGES,zo),ae===0&&z.generateMipmaps&&B.generateMipmap(nt),Q.unbindTexture()},this.initRenderTarget=function(T){ne.get(T).__webglFramebuffer===void 0&&pe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?pe.setTextureCube(T,0):T.isData3DTexture?pe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?pe.setTexture2DArray(T,0):pe.setTexture2D(T,0),Q.unbindTexture()},this.resetState=function(){q=0,W=0,ie=null,Q.reset(),en.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};var $i=(n,e,t)=>Math.max(e,Math.min(t,n)),Od="amaq-audio-v1",wf=[523.25,587.33,659.25,783.99,880],Do=class{constructor({context:e=null,storage:t}={}){this.context=e,this.supported=!!(e||globalThis.AudioContext||globalThis.webkitAudioContext),this.volume=.65,this.muted=!1,this.mode="menu",this.voices=new Set,this.loops=[],this.lastEvent=null,this.lastPan=0,this.eventCount=0,this.nextWarning=0,this.nextBubble=0,this.nextUpdate=0,this.lastPickup=-1;try{this.storage=t===void 0?globalThis.localStorage:t;let i=JSON.parse(this.storage?.getItem(Od)||"null");i&&typeof i.volume=="number"&&Number.isFinite(i.volume)&&(this.volume=$i(i.volume,0,1)),typeof i?.muted=="boolean"&&(this.muted=i.muted)}catch{}}get enabled(){return this.supported&&!this.muted&&this.volume>0}save(){try{this.storage?.setItem(Od,JSON.stringify({volume:this.volume,muted:this.muted}))}catch{}}init(){if(this.master||!this.supported)return;let e=globalThis.AudioContext||globalThis.webkitAudioContext,t=this.context||(this.context=new e);this.master=t.createGain(),this.master.gain.value=0,this.limiter=t.createDynamicsCompressor(),this.limiter.threshold.value=-12,this.limiter.knee.value=12,this.limiter.ratio.value=8,this.limiter.attack.value=.003,this.limiter.release.value=.2,this.master.connect(this.limiter).connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*4,t.sampleRate),this.water=t.createBuffer(2,t.sampleRate*4,t.sampleRate);let i=this.noise.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;for(let r=0;r<2;r++){let s=this.water.getChannelData(r),a=0;for(let l=0;l<s.length;l++)a=a*.985+(Math.random()*2-1)*.06,s[l]=a*Math.min(1,l/1800,(s.length-1-l)/1800)}this.bed=this.loop(this.water,380),this.swim=this.loop(this.noise,700)}loop(e,t){let i=this.context,r=i.createBufferSource(),s=i.createBiquadFilter(),a=i.createGain();return r.buffer=e,r.loop=!0,s.type="lowpass",s.frequency.value=t,s.Q.value=.5,a.gain.value=0,r.connect(s).connect(a).connect(this.master),r.start(),this.loops.push(r),{source:r,filter:s,gain:a}}smooth(e,t,i=.08){let r=this.context.currentTime;e.cancelScheduledValues(r),e.setTargetAtTime(t,r,i)}unlock(){if(this.enabled)try{this.init(),this.context.startRendering||this.context.resume().catch(()=>{})}catch{this.supported=!1}}fadeOut(){let e=this.master.gain,t=this.context.currentTime;e.cancelScheduledValues(t),e.setValueAtTime(e.value,t),e.linearRampToValueAtTime(0,t+.045)}mix(){this.master&&(this.enabled&&(this.mode==="playing"||this.mode==="ended")?this.smooth(this.master.gain,this.volume*.8,.025):this.fadeOut())}stopVoices(){for(let e of this.voices)e.source.stop(),e.nodes.forEach(t=>t.disconnect());this.voices.clear()}suspendAfter(e){clearTimeout(this.sleepTimer),!this.context?.startRendering&&(this.sleepTimer=setTimeout(()=>{this.stopVoices(),this.context?.suspend().catch(()=>{})},e))}setMode(e){clearTimeout(this.sleepTimer),this.mode=e,e==="playing"?(this.unlock(),this.nextUpdate=0,this.nextWarning=(this.context?.currentTime||0)+.5,this.nextBubble=(this.context?.currentTime||0)+1.4):(this.bed&&(this.smooth(this.bed.gain.gain,0),this.smooth(this.swim.gain.gain,0)),this.suspendAfter(e==="ended"?2200:160)),this.mix()}quiet(){this.master&&(this.fadeOut(),this.suspendAfter(100))}setVolume(e){Number.isFinite(e)&&(this.volume=$i(e,0,1),this.volume>0&&(this.muted=!1),this.changed())}toggle(){let e=this.enabled;this.muted=e,!e&&this.volume===0&&(this.volume=.65),this.changed()}changed(){this.save(),this.enabled&&this.mode==="playing"?(clearTimeout(this.sleepTimer),this.unlock()):this.enabled||this.quiet(),this.mix()}voice({frequency:e=600,end:t=e,duration:i=.3,gain:r=.13,delay:s=0,pan:a=0,noise:l=!1,type:c="sine"}={}){if(this.voices.size>=28)return;let o=this.context,h=o.currentTime+s,p=l?o.createBufferSource():o.createOscillator(),d=o.createGain(),u=o.createStereoPanner(),f=[p,d,u],m=p;if(l){p.buffer=this.noise;let g=o.createBiquadFilter();g.type="bandpass",g.Q.value=.65,g.frequency.setValueAtTime(e,h),g.frequency.exponentialRampToValueAtTime(Math.max(30,t),h+i),p.connect(g),m=g,f.push(g)}else p.type=c,p.frequency.setValueAtTime(e,h),p.frequency.exponentialRampToValueAtTime(Math.max(30,t),h+i);u.pan.value=$i(a,-1,1),d.gain.setValueAtTime(0,h),d.gain.linearRampToValueAtTime(r,h+.012),d.gain.exponentialRampToValueAtTime(1e-4,h+i),d.gain.linearRampToValueAtTime(0,h+i+.015),m.connect(d).connect(u).connect(this.master);let v={source:p,nodes:f};this.voices.add(v),p.onended=()=>{f.forEach(g=>g.disconnect()),this.voices.delete(v)},p.start(h),p.stop(h+i+.025)}play(e,{combo:t=1,pan:i=0,strength:r=1}={}){if(!this.master||!this.enabled||!["playing","ended"].includes(this.mode))return;let s=this.context.currentTime;if(e==="pearl"&&s-this.lastPickup<.055)return;e==="pearl"&&(this.lastPickup=s);let a=(o,h,p,d=0,u=o)=>this.voice({frequency:o,end:u,duration:h,gain:p,delay:d,pan:i}),l=(o,h,p,d)=>this.voice({noise:!0,frequency:o,end:h,duration:p,gain:d,pan:i}),c=(o,h=.085,p=.12)=>o.forEach((d,u)=>{a(d,.4,p,u*h),a(d*2.01,.19,p*.16,u*h)});if(e==="pearl"){let o=wf[$i(Math.floor(t)-1,0,4)];a(o,.25,.15),a(o*2,.12,.027,.025)}else if(e==="gold")c([659.25,880,1318.5]);else if(e==="shield")l(500,2200,.55,.14),c([392,587.33,783.99],.11);else if(e==="dash")l(260,2300,.65,.5),a(160,.35,.1,0,65);else if(e==="hurt")l(900,100,.35,.3),a(115,.32,.2,0,42);else if(e==="block")l(1400,300,.32,.22),c([1174.66,783.99],.075,.1);else if(e==="defeated")l(450,1100,.4,.25),c([392,659.25,987.77],.07);else if(e==="warning"||e==="guardian"){let o=e==="guardian"?.15:.08+$i(r,0,1)*.06;a(110,.19,o,0,80),a(98,.22,o*.8,.26,65)}else if(e==="start")l(1300,260,.65,.16),c([261.63,392,523.25],.12,.09);else if(e==="win")c([523.25,659.25,783.99,1046.5],.18,.15);else if(e==="lose")c([392,329.63,261.63],.19,.11);else if(e==="bubble")a(300+Math.random()*350,.12,.022,0,1e3);else return;this.lastEvent=e,this.lastPan=i,this.eventCount++}update({world:e,speed:t=0,boosting:i=!1,threat:r=null}){if(!this.master||!this.enabled||this.mode!=="playing"||this.context.state==="suspended")return;let s=this.context.currentTime;if(s<this.nextUpdate)return;this.nextUpdate=s+.08;let a=e==="abyss"?170:e==="kelp"?270:420;if(this.smooth(this.bed.filter.frequency,a+Math.sin(s*.4)*45,.4),this.smooth(this.bed.gain.gain,.16+Math.sin(s*.65)*.018,.3),this.smooth(this.swim.filter.frequency,420+$i(t,0,1)*800+(i?1100:0)),this.smooth(this.swim.gain.gain,.012+$i(t,0,1)*.08+(i?.12:0)),r&&r.distance<27&&s>=this.nextWarning){let l=1-$i(r.distance/27,0,1);this.play("warning",{pan:$i(r.x/8,-.9,.9),strength:l}),this.nextWarning=s+1.8-l*1.15}s>=this.nextBubble&&(this.play("bubble",{pan:Math.sin(s)*.65}),this.nextBubble=s+2.2+Math.random()*2.8)}snapshot(){return{supported:this.supported,initialized:!!this.master,enabled:this.enabled,volume:this.volume,muted:this.muted,state:this.context?.state||"idle",mode:this.mode,voices:this.voices.size,lastEvent:this.lastEvent,lastPan:this.lastPan,eventCount:this.eventCount,swimGain:this.swim?.gain.gain.value||0,masterGain:this.master?.gain.value||0}}};var lt=(n,e,t)=>Math.max(e,Math.min(t,n));function rh(){return{distance:0,score:0,pearls:0,lives:3,combo:0,comboTime:0,shield:0,boost:0,cooldown:0,invulnerable:0,elapsed:0,ended:!1,won:!1}}function Bd(n){let e=Number(n.has("ArrowRight")||n.has("KeyD"))-Number(n.has("ArrowLeft")||n.has("KeyA")),t=Number(n.has("ArrowUp")||n.has("KeyW"))-Number(n.has("ArrowDown")||n.has("KeyS")),i=Math.hypot(e,t)||1;return{x:e/i,y:t/i}}function zd(n,e){if(n.ended)return 0;let t=lt(e,0,.05),i=(9+Math.min(n.distance/160,4)+(n.boost>0?13:0))*t;n.distance=Math.min(800,n.distance+i),n.elapsed+=t;for(let r of["boost","cooldown","invulnerable","comboTime","shield"])n[r]=Math.max(0,n[r]-t);return n.comboTime||(n.combo=0),n.distance>=800&&(n.ended=!0,n.won=!0),i}function Gd(n){return n.ended||n.cooldown>0?!1:(n.boost=.8,n.cooldown=3.6,!0)}function Vd(n,e="pearl"){if(!n.ended){if(e==="shield"){n.shield=9,n.score+=15;return}n.combo=Math.min(5,n.combo+1),n.comboTime=3.5,n.pearls++,n.score+=(e==="gold"?10:2)*n.combo}}function kd(n){return n.ended||n.invulnerable>0?"immune":n.boost>0?(n.score+=25,"defeated"):n.shield>0?(n.shield=0,n.invulnerable=1.2,"shield"):(n.lives--,n.combo=0,n.invulnerable=2,n.lives<=0&&(n.ended=!0),"hurt")}function Hd(n,e,t,i){let r=lt(n.z,Math.min(i,e.z),Math.max(i,e.z));return(n.x-e.x)**2+(n.y-e.y)**2+(n.z-r)**2<t**2}var Me=n=>document.getElementById(n),Mi=Me("ocean"),Lr=matchMedia("(prefers-reduced-motion: reduce)").matches,Wd=matchMedia("(pointer: coarse)").matches,lh={reef:{name:"\u062D\u062F\u0627\u0626\u0642 \u0627\u0644\u0645\u0631\u062C\u0627\u0646",water:1533560,sky:10414561,sand:12695954,rock:6520434,coral:[14583145,13131616,15053436,6459281],kelp:4750690,fog:.022,light:3.4},kelp:{name:"\u063A\u0627\u0628\u0629 \u0627\u0644\u0645\u062F\u0651",water:2445129,sky:14476467,sand:9606765,rock:5596237,coral:[11766370,9411667,7899989,12430457],kelp:8690510,fog:.027,light:2.9},abyss:{name:"\u0628\u062D\u0631 \u0627\u0644\u0644\u064A\u0644",water:334644,sky:6396110,sand:3426912,rock:3490142,coral:[9070519,6989249,5222043,10844319],kelp:3696781,fog:.027,light:1.5}},kt="reef",Mt="menu",Ve=rh(),Ot=0,Ls=0,ch=0,Ns=0,Uo=0,hh=18,uh=!1,Lt=new Do,Ir=0;try{Ir=Math.max(0,Number(localStorage.getItem("amaq-best"))||0)}catch{}Me("best").textContent=Ir;var Gn=new Set,Bt={x:0,y:0,id:null},hi={x:0,y:0,active:!1},ct=new E(0,4.4,0),Kt=new E,Xd=new E,St,tt,ei,ci,Us,jd,dh,Ni,_n,ph,Fs=[],mh=[],ui=[],kn=[],Hn=[],Pr=new gt,Kd=new Ce,qd=new E,Bs={time:{value:0},flow:{value:0}},Ds=new Zi(1,18,12),sh=new Zi(1,8,6),Ef=new mn(1,2),Af=new dn(.65,1,1,6),$d=new mn(.3,2),xh=new In(1,.025,5,40),Cf=new mn(.08,0),Ge={},It=(n,e=.5,t={})=>new fs({color:n,roughness:e,...t});function Qt(n,e,t,i=0,r=0,s=0,a=1,l=a,c=a){let o=new _t(n,e);return o.position.set(i,r,s),o.scale.set(a,l,c),t.add(o),o}function No(n,e,t,i=.045){let r=new Rn,s=n[0],a=n[n.length-1];r.moveTo((s[0]+a[0])/2,(s[1]+a[1])/2),n.forEach(([c,o],h)=>{let p=n[(h+1)%n.length];r.quadraticCurveTo(c,o,(c+p[0])/2,(o+p[1])/2)}),r.closePath();let l=new _r(r,{depth:i,bevelEnabled:!0,bevelSize:.025,bevelThickness:.02,bevelSegments:1,steps:1});return l.translate(0,0,-i/2),Qt(l,e,t)}function fh(n=!1,e=!1){let t=new jt,i=n?Ge.shark:Ge.hero,r=n?Ge.sharkFin:Ge.fin,s=new Zi(1,e?16:40,e?10:24),a=s.attributes.position;for(let d=0;d<a.count;d++){let u=a.getX(d),f=a.getY(d),m=a.getZ(d),v=.48+.52*((u+1)/2);a.setXYZ(d,u*(n?1.75:1.2),f*(n?.56:.68)*v,m*(n?.48:.4)*v)}s.computeVertexNormals();let l=[];for(let d=0;d<a.count;d++){let u=a.getY(d),f=a.getX(d),m=n?new Ce(u<-.1?13751752:6720151):new Ce(u<-.13?16047520:u>.25?16761452:15899214);!n&&f<.25&&u>-.1&&m.multiplyScalar(.9+.1*Math.sin(f*24+u*6)),l.push(m.r,m.g,m.b)}s.setAttribute("color",new we(l,3));let c=Qt(s,i,t);c.castShadow=!e;let o=null,h=new jt;h.position.x=n?-1.55:-1.04,t.add(h),No(n?[[0,0],[-.85,1],[-.65,.05],[-.85,-.7],[-.18,-.24]]:[[0,0],[-.77,.77],[-.65,.08],[-.77,-.77],[-.08,-.14]],r,h);let p=No(n?[[.55,.28],[-.22,1.18],[-.75,.24]]:[[.65,.35],[.12,.95],[-.67,.33]],r,t);for(let d of e&&!n?[]:[-1,1]){let u=No([[.2,0],[-.67,.5],[-.48,-.13]],r,t);if(u.position.set(.03,-.15,d*.28),u.rotation.x=d*1.2,u.name="pectoral",Qt(Ds,Ge.eyeRim,t,n?1.06:.7,.15,d*(n?.31:.27),.17,.19,.065),Qt(Ds,Ge.eye,t,n?1.085:.72,.16,d*(n?.365:.32),.1,.12,.037),Qt(Ds,Ge.glint,t,n?1.11:.747,.195,d*(n?.398:.35),.027),!e)for(let f=0;f<3;f++){let m=Qt(new In(n?.28:.25,.013,4,18,1.4),n?Ge.sharkFin:Ge.fin,t,.39-f*.1,-.015,d*.32);m.rotation.z=2.4,m.scale.set(.47,1,.5)}}if(!n&&!e){for(let d=0;d<3;d++)for(let u=0;u<7;u++)for(let f of[-1,1]){let m=-.62+u*.15,v=.14+d*.105;Qt(Ds,Ge.scale,t,m,v,f*(.245-Math.abs(m)*.1-d*.03),.058,.025,.018)}No([[-.05,-.22],[-.38,-.74],[-.74,-.22]],r,t)}return t.userData={tail:h,body:c,belly:o,dorsal:p,phase:Math.random()*6.28,small:e},t}function ah(n,e,t=1){let i=n.userData;if(i.tail){i.tail.rotation.y=Math.sin(e*9*t+i.phase)*.48,i.body.rotation.y=Math.sin(e*9*t+i.phase-1)*.045,i.dorsal.rotation.x=Math.sin(e*4+i.phase)*.08;for(let r of n.children)r.name==="pectoral"&&(r.rotation.z=Math.sin(e*7+i.phase)*.15)}}function Rf(n){return n.onBeforeCompile=e=>{e.uniforms.uOceanTime=Bs.time,e.uniforms.uOceanFlow=Bs.flow,e.vertexShader=`varying vec3 vOcean;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vOcean = (modelMatrix * vec4(transformed,1.0)).xyz;`),e.fragmentShader=`varying vec3 vOcean; uniform float uOceanTime; uniform float uOceanFlow;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace("#include <dithering_fragment>",`
      float xx=vOcean.x*.85+sin(vOcean.z*.34+uOceanTime*.65);
      float zz=(vOcean.z-uOceanFlow)*.63+cos(vOcean.x*.4+uOceanTime*.52);
      float ca=pow(max(0.,1.-abs(sin(xx*1.6+sin(zz*1.2))+sin(zz*1.7+sin(xx*.8)))*.65),14.);
      gl_FragColor.rgb += vec3(.055,.10,.075)*ca;
      #include <dithering_fragment>`)},n}function Rs(n,e,t,i){if(!t.length)return;let r=new is(n,e,t.length);return t.forEach((s,a)=>{Pr.position.set(...s.p),Pr.rotation.set(...s.r||[0,0,0]),Pr.scale.set(...s.s),s.q&&Pr.quaternion.copy(s.q),Pr.updateMatrix(),r.setMatrixAt(a,Pr.matrix),s.c!==void 0&&r.setColorAt(a,Kd.set(s.c))}),r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),i.add(r),r}function Ps(n,e,t,i,r){let s=new E().subVectors(t,e);n.push({p:e.clone().add(t).multiplyScalar(.5).toArray(),s:[i,s.length(),i],q:new Gt().setFromUnitVectors(new E(0,1,0),s.normalize()),c:r})}function Pf(n){let e=new jt;e.position.z=-n*30,tt.add(e);let t=[],i=[],r=[],s=[],a=[],l=lh[kt];for(let o=0;o<20;o++){let h=o%2?1:-1,p=h*(9+Math.random()*15),d=-Math.random()*30,u=1.5+Math.random()*5;t.push({p:[p,u*.24-1,d],s:[2+Math.random()*3,u,2+Math.random()*3],r:[Math.random(),Math.random()*6,Math.random()*.6],c:Kd.set(l.rock).offsetHSL(0,0,Math.random()*.09-.04).getHex()})}for(let o=0;o<16;o++){let h=(o%2?1:-1)*(7.8+Math.random()*12),p=-Math.random()*30,d=l.coral[o%4],u=.8+Math.random()*2.5;if(kt==="kelp"||o%4===0){let f=kt==="kelp"?5+Math.random()*7:u+1;for(let m=0;m<6;m++){let v=m*f/6,g=h+Math.sin(m*.85+o)*.35;Ps(i,new E(g,v,p),new E(h+Math.sin((m+1)*.85+o)*.35,v+f/6,p),.07,l.kelp);for(let _ of[-1,1])a.push({p:[g+_*.45,v+.4,p],s:[.85,.1,.28],r:[.1,Math.sin(m+o),_*.6],c:l.kelp})}}else if(o%3===0){for(let f=0;f<5;f++)s.push({p:[h+Math.sin(f)*.4,.4+f*.3,p+Math.cos(f)*.35],s:[1.3-f*.16,.12,1.2-f*.12],r:[.04*f,0,.09],c:d});Ps(i,new E(h,0,p),new E(h,u*.5,p),.24,d)}else{let f=new E(h,u,p);Ps(i,new E(h,0,p),f,.14,d);for(let m=0;m<5;m++){let v=new E(h+Math.sin(m*2.4)*u*.5,u*(.8+Math.random()*.7),p+Math.cos(m*2.4)*u*.4);Ps(i,new E(h,u*.45,p),v,.095,d);for(let g=0;g<2;g++){let _=v.clone().add(new E((Math.random()-.5)*.55,.25+Math.random()*.35,(Math.random()-.5)*.5));Ps(i,v,_,.055,d),r.push({p:_.toArray(),s:[.07,.09,.07],c:kt==="abyss"?12187616:15778976})}}}}Rs(Ef,Ge.rock,t,e).castShadow=!0,Rs(Af,Ge.coral,i,e),Rs(sh,Ge.tip,r,e),Rs(sh,Ge.coral,s,e);let c=Rs(sh,Ge.leaf,a,e);return e.userData={vegetation:c},e}function If(n){n.traverse(e=>{e.isInstancedMesh&&e.dispose()}),tt.remove(n)}function Qd(n){if(!lh[n])return;kt=n;let e=lh[kt];tt.background=new Ce(e.water),tt.fog=new Jr(e.water,e.fog),Us.color.set(e.sky),Us.groundColor.set(e.rock),Us.intensity=kt==="abyss"?1.3:1.25,ci.color.set(kt==="abyss"?9621486:16772547),ci.intensity=e.light,Ge.sand.color.set(e.sand),Ge.coral.emissive.set(kt==="abyss"?2376536:0),Ge.tip.emissive.set(kt==="abyss"?5482406:0),Ge.leaf.emissive.set(kt==="abyss"?1062216:0),dh.material.uniforms.waterColor.value.set(e.sky);for(let t of Fs)If(t);Fs=Array.from({length:6},(t,i)=>Pf(i)),Me("zone").textContent=e.name,document.documentElement.dataset.world=kt;for(let t of document.querySelectorAll("[data-world]"))t.tagName==="BUTTON"&&t.setAttribute("aria-pressed",String(t.dataset.world===n))}function Lf(){St=new Io({canvas:Mi,antialias:!0,powerPreference:"high-performance"}),St.setPixelRatio(Math.min(devicePixelRatio,Wd?1.35:1.7)),St.setSize(innerWidth,innerHeight),St.toneMapping=Ss,St.toneMappingExposure=1.13,St.shadowMap.enabled=!Wd,St.shadowMap.type=oo,tt=new Kr,ei=new At(53,innerWidth/innerHeight,.1,160),ei.position.set(0,7.3,15),Us=new vs(10544350,5466969,2.1),tt.add(Us),ci=new yr(16773077,3.4),ci.position.set(-16,26,8),ci.target.position.set(0,0,-20),tt.add(ci,ci.target),ci.castShadow=!0,ci.shadow.mapSize.set(1024,1024),Object.assign(ci.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:95}),ci.shadow.bias=-4e-4,ci.shadow.normalBias=.04;let n=new yr(9426655,.8);n.position.set(7,7,13),tt.add(n),Ge.hero=It(16777215,.48,{metalness:.05,vertexColors:!0,emissive:7354377,emissiveIntensity:.12}),Ge.fin=It(1541770,.42,{side:Ft}),Ge.scale=It(16308631,.5),Ge.belly=It(15327157,.65),Ge.shark=It(16777215,.48,{metalness:.08,vertexColors:!0}),Ge.sharkFin=It(3491669,.5,{side:Ft}),Ge.eyeRim=It(14660191,.3),Ge.eye=It(202012,.13),Ge.glint=new oi({color:16774358}),Ge.rock=It(16777215,.92),Ge.coral=It(16777215,.7),Ge.tip=It(16777215,.6),Ge.leaf=It(16777215,.72),Ge.sand=Rf(It(12695954,.96)),Ge.pearl=It(16771253,.22,{emissive:13214303,emissiveIntensity:.65,metalness:.18}),Ge.gold=It(16761949,.2,{emissive:14256674,emissiveIntensity:.95,metalness:.32}),Ge.shield=It(7597784,.3,{emissive:4572349,emissiveIntensity:1});let e=new Yi(130,220,80,120);e.rotateX(-Math.PI/2);let t=e.attributes.position;for(let r=0;r<t.count;r++){let s=t.getX(r),a=t.getZ(r);t.setY(r,Math.sin(s*.29+a*.11)*.4+Math.sin(a*.45)*.12+Math.max(0,Math.abs(s)-9)*.07)}e.computeVertexNormals(),jd=Qt(e,Ge.sand,tt,0,-.5,-70),jd.receiveShadow=!0,dh=Qt(new Yi(180,200,1,1),new Ut({side:Ft,transparent:!0,depthWrite:!1,uniforms:{time:Bs.time,waterColor:{value:new Ce(10283231)}},vertexShader:"varying vec2 vUv; varying float vDepth; void main(){vUv=uv; vec4 mv=modelViewMatrix*vec4(position,1.);vDepth=-mv.z; gl_Position=projectionMatrix*mv;}",fragmentShader:`varying vec2 vUv; varying float vDepth; uniform float time; uniform vec3 waterColor;
      void main(){vec2 q=vUv*90.;float n=sin(q.x+sin(q.y*.73+time*.4))*sin(q.y+cos(q.x*.7-time*.3));
      float light=pow(1.-abs(n),14.);gl_FragColor=vec4(waterColor,(.07+light*.12)*(1.-smoothstep(25.,105.,vDepth)));}`}),tt,0,14,-65),dh.rotation.x=Math.PI/2;let i=new oi({color:11859935,transparent:!0,opacity:.015,side:Ft,depthWrite:!1,blending:Ms});for(let r=0;r<7;r++){let s=Qt(new dn(.15,2,23,12,1,!0),i,tt,-24+r*8,7,-8-r*13);s.rotation.z=-.35}_n=new jt,tt.add(_n),Ni=fh(),_n.add(Ni),ph=Qt(new Zi(1.7,22,16),new oi({color:9763297,transparent:!0,opacity:.13,wireframe:!0,depthWrite:!1}),_n),ph.visible=!1;for(let r=0;r<22;r++){let s=fh(!1,!0);s.scale.setScalar(.17+Math.random()*.17),s.position.set((Math.random()-.5)*32,3+Math.random()*8,-15-Math.random()*75),s.rotation.y=Math.random()*6.28,s.userData.base=s.position.clone(),mh.push(s),tt.add(s)}Df(),Qd("reef"),ep(),Of(),Me("start").disabled=!1,Me("start").querySelector("span").textContent="\u0627\u0628\u062F\u0623 \u0627\u0644\u063A\u0648\u0635",document.documentElement.dataset.engine="ready",St.setAnimationLoop(Ff)}var gh,$t;function Df(){$t=new Float32Array((Lr?90:260)*3);for(let e=0;e<$t.length;e+=3)$t[e]=(Math.random()-.5)*55,$t[e+1]=Math.random()*15,$t[e+2]=15-Math.random()*110;let n=new Ke;n.setAttribute("position",new Ct($t,3)),gh=new ns(n,new mr({color:11856607,size:.048,transparent:!0,opacity:.5,depthWrite:!1})),tt.add(gh)}function Vn(n,e,t,i){let r;if(n==="shark"||n==="guardian")r=fh(!0,!0),r.rotation.y=-Math.PI/2,r.scale.setScalar(n==="guardian"?1.5:.9);else{r=new jt,Qt($d,Ge[n==="pearl"?"pearl":n==="gold"?"gold":"shield"],r,0,0,0,n==="shield"?1.5:1);let s=Qt(xh,new oi({color:n==="shield"?7994596:16766608,transparent:!0,opacity:.55}),r,0,0,0,.5);s.rotation.y=.3}return r.position.set(e,t,i),tt.add(r),ui.push({kind:n,mesh:r,baseY:t,phase:Math.random()*6.28,radius:n==="guardian"?2.1:n==="shark"?1.15:.85,lastZ:i,wakeClock:0}),r}function Nf(){let n=Math.floor(Ve.distance/18),e=Math.sin(n*1.8)*4.6,t=3.7+Math.sin(n*.8)*2.1;for(let i=0;i<6;i++)Vn(i===5?"gold":"pearl",lt(e+Math.sin(i*.55)*1.1,-6,6),lt(t+Math.sin(i*.55)*.6,1.7,9),-49-i*2.5);n>1&&Vn("shark",lt(-e+Math.sin(n)*1.2,-6,6),lt(6-t+2,2,8),-61),n>12&&n%2===0&&Vn("shark",e*.4,7.7,-72),n%6===4&&Vn("shield",e*.3,4.5,-76)}function Os(n){tt.remove(n.mesh),n.mesh.traverse(e=>{e.isMesh&&([Ds,$d,xh].includes(e.geometry)||e.geometry.dispose(),e.material.isMeshBasicMaterial&&e.material!==Ge.glint&&e.material.dispose())})}function _h(n,e=!1,t=1){if(kn.length>52||Lr)return;let i=new _t(xh,new oi({color:e?14780537:12381410,transparent:!0,opacity:e?.3:.22,depthWrite:!1}));i.position.copy(n),i.position.z+=e?-1.4:1.3,i.scale.set(t*.45,t*.32,1),e&&(i.rotation.z=Math.random()*3),tt.add(i),kn.push({mesh:i,life:1,max:1,hostile:e,size:t})}function Yd(n,e){for(let t=0;t<(Lr?5:12)&&!(Hn.length>=100);t++){let i=new _t(Cf,new oi({color:e,transparent:!0}));i.position.copy(n),tt.add(i),Hn.push({mesh:i,life:.7,v:new E((Math.random()-.5)*5,(Math.random()-.5)*5,(Math.random()-.5)*5)})}}function zn(n){Me("toast").textContent=n,Me("toast").classList.add("visible"),Ns=3.2}function Fo(){let n=Lt.snapshot(),e=n.supported?n.enabled?"\u0643\u062A\u0645 \u0627\u0644\u0635\u0648\u062A":"\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0635\u0648\u062A":"\u0627\u0644\u0635\u0648\u062A \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u062A\u0635\u0641\u062D";Me("sound").setAttribute("aria-pressed",String(n.enabled)),Me("sound").setAttribute("aria-label",e),Me("sound").title=e,Me("sound").disabled=!n.supported,Me("volume").disabled=!n.supported,Me("volume").value=Math.round(n.volume*100),Me("volume").setAttribute("aria-valuetext",n.muted?"\u0645\u0643\u062A\u0648\u0645":Math.round(n.volume*100)+"\u066A")}function Uf(){if(Mt==="paused"){Qi("playing"),Mi.focus();return}Lt.stopVoices(),ui.forEach(Os),ui=[];for(let n of[...kn,...Hn])tt.remove(n.mesh),n.mesh.material.dispose();kn=[],Hn=[],Ve=rh(),ct.set(0,4.4,0),Kt.set(0,0,0),Ls=0,hh=18,uh=!1,Uo=0,Gn.clear(),hi.active=!1,Bt.x=Bt.y=0;for(let n=0;n<8;n++)Vn(n===7?"gold":"pearl",Math.sin(n*.5)*1.3,4.4,-8-n*2.5);Qi("playing"),Mi.focus(),zn("\u0627\u0644\u0623\u0633\u0647\u0645 \u0644\u0644\u0633\u0628\u0627\u062D\u0629 \xB7 Space \u0644\u0644\u0627\u0646\u062F\u0641\u0627\u0639 \u0639\u0628\u0631 \u0627\u0644\u0645\u0641\u062A\u0631\u0633\u0627\u062A"),Lt.play("start")}function Qi(n){if(Lt.setMode(n),Fo(),n==="ended"&&Lt.play(Ve.won?"win":"lose"),Mt=n,document.documentElement.dataset.mode=n,Gn.clear(),hi.active=!1,Bt.x=Bt.y=0,Me("toast").classList.remove("visible"),Ns=0,Me("menu").hidden=n==="playing",Me("hud").hidden=n==="menu",Me("worlds").hidden=n!=="menu",Me("home").hidden=n==="menu"||n==="playing",Me("results").hidden=n!=="ended",Me("pause").setAttribute("aria-label",n==="paused"?"\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0631\u062D\u0644\u0629":"\u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A"),n==="playing"&&Mi.focus(),n==="paused")Me("heading").textContent="\u062E\u0630 \u0646\u064E\u0641\u064E\u0633\u0627\u064B.",Me("description").textContent="\u0627\u0644\u0628\u062D\u0631 \u064A\u0646\u062A\u0638\u0631\u0643. \u062A\u0627\u0628\u0639 \u0631\u062D\u0644\u062A\u0643 \u062D\u064A\u0646 \u062A\u0643\u0648\u0646 \u0645\u0633\u062A\u0639\u062F\u0627\u064B.",Me("start").querySelector("span").textContent="\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0631\u062D\u0644\u0629",Me("start").focus();else if(n==="menu")Me("heading").innerHTML="\u0639\u0627\u0644\u0645\u064C \u0622\u062E\u0631<br><em>\u062A\u062D\u062A \u0627\u0644\u0633\u0637\u062D.</em>",Me("description").innerHTML="\u0628\u064A\u0646 \u0627\u0644\u0636\u0648\u0621 \u0648\u0627\u0644\u0645\u0631\u062C\u0627\u0646\u060C \u062A\u0628\u062F\u0623 \u0631\u062D\u0644\u062A\u0643.<br>\u0627\u0633\u0628\u062D \u0645\u0639 \u0627\u0644\u062A\u064A\u0627\u0631\u060C \u0627\u062C\u0645\u0639 \u0627\u0644\u0644\u0622\u0644\u0626\u060C \u0648\u0627\u0643\u062A\u0634\u0641 \u0645\u0627 \u062A\u062E\u0628\u0651\u0626\u0647 \u0627\u0644\u0623\u0639\u0645\u0627\u0642.",Me("start").querySelector("span").textContent="\u0627\u0628\u062F\u0623 \u0627\u0644\u063A\u0648\u0635",ui.forEach(Os),ui=[];else if(n==="ended"){Ir=Math.max(Ir,Ve.score);try{localStorage.setItem("amaq-best",String(Ir))}catch{}Me("best").textContent=Ir,Me("heading").textContent=Ve.won?"\u0648\u0635\u0644\u062A \u0625\u0644\u0649 \u0627\u0644\u0646\u0648\u0631.":"\u0627\u0644\u0628\u062D\u0631 \u0644\u0647 \u0623\u0633\u0631\u0627\u0631\u0647.",Me("description").textContent=Ve.won?"\u0639\u0628\u0631\u062A \u0627\u0644\u0648\u0627\u062F\u064A \u0628\u0633\u0644\u0627\u0645. \u0648\u062C\u0647\u0629 \u0623\u062E\u0631\u0649 \u062A\u0646\u062A\u0638\u0631 \u0627\u0643\u062A\u0634\u0627\u0641\u0643.":"\u0631\u062D\u0644\u0629 \u0623\u062E\u0631\u0649\u060C \u0648\u0641\u0631\u0635\u0629 \u0644\u062A\u0633\u0628\u062D \u0623\u0628\u0639\u062F. \u0627\u0644\u0627\u0646\u062F\u0641\u0627\u0639 \u064A\u062D\u0645\u064A\u0643 \u0645\u0646 \u0627\u0644\u0645\u0641\u062A\u0631\u0633\u0627\u062A.",Me("results").innerHTML="<span><b>"+Ve.score+"</b>\u0646\u0642\u0637\u0629</span><span><b>"+Math.floor(Ve.distance)+"</b>\u0645\u062A\u0631</span><span><b>"+Ve.pearls+"</b>\u0644\u0624\u0644\u0624\u0629</span>",Me("start").querySelector("span").textContent="\u063A\u064F\u0635 \u0645\u0646 \u062C\u062F\u064A\u062F",Me("start").focus()}}function Zd(){Mt==="playing"?Qi("paused"):Mt==="paused"&&Qi("playing")}function Jd(){Mt==="playing"&&Gd(Ve)&&(_h(ct,!1,1.8),Lt.play("dash"))}function vh(n){let e=Mt==="playing",t=e?zd(Ve,n):Mt==="menu"?n*1.2:0;Ls+=t,(Mt==="menu"||e)&&(Ot+=n),Bs.time.value=Ot,Bs.flow.value=Ls;for(let o=0;o<Fs.length;o++){Fs[o].position.z=((Ls-o*30+150)%180+180)%180-150;let h=Fs[o].userData.vegetation;h&&!Lr&&(h.rotation.z=Math.sin(Ot*.7+o)*.018)}for(let o=0;o<mh.length;o++){let h=mh[o],p=h.userData.base;h.position.x=p.x+Math.sin(Ot*.21+o)*3,h.position.y=p.y+Math.sin(Ot*.6+o)*.35,h.position.z=((p.z+Ls*.5+100)%115+115)%115-100,h.rotation.y=Math.PI/2+Math.cos(Ot*.21+o)*.4,ah(h,Ot,1.1)}for(let o=0;o<$t.length;o+=3)(Mt==="menu"||e)&&($t[o+1]+=n*.1,$t[o+2]+=t),$t[o+2]>15&&($t[o+2]=-95),$t[o+1]>15&&($t[o+1]=0);if(gh.geometry.attributes.position.needsUpdate=!0,e){let o=Bd(Gn),h=o.x+Bt.x,p=o.y+Bt.y;!h&&!p&&hi.active&&(h=lt((hi.x-ct.x)*1.7,-1,1),p=lt((hi.y-ct.y)*1.7,-1,1)),Kt.x=Ki.damp(Kt.x,lt(h,-1,1)*8,7,n),Kt.y=Ki.damp(Kt.y,lt(p,-1,1)*7,7,n),ct.x=lt(ct.x+Kt.x*n,-6.3,6.3),ct.y=lt(ct.y+Kt.y*n,1.6,10),Ve.distance>=hh&&(Nf(),hh+=18),Ve.distance>405&&!uh&&(Vn("guardian",0,4.6,-85),uh=!0,Lt.play("guardian"),zn("\u0642\u0631\u0634 \u0627\u0644\u0648\u0627\u062F\u064A \u0623\u0645\u0627\u0645\u0643 \xB7 \u062A\u0641\u0627\u062F\u064E\u0647 \u0623\u0648 \u0627\u0646\u062F\u0641\u0639 \u0639\u0628\u0631\u0647")),Ve.distance>670&&Ve.distance-t<=670&&zn("\u0636\u0648\u0621 \u0627\u0644\u0645\u062E\u0631\u062C \u0642\u0631\u064A\u0628 \xB7 \u0648\u0627\u0635\u0644 \u0627\u0644\u0633\u0628\u0627\u062D\u0629"),Uo-=n,Uo<=0&&(_h(ct,!1,Ve.boost>0?1.7:.8),Uo=Ve.boost>0?.07:.21);for(let u=ui.length-1;u>=0;u--){let f=ui[u],m=f.mesh.position;f.lastZ=m.z;let v=f.kind==="shark"||f.kind==="guardian";if(m.z+=t+(v?n*(f.kind==="guardian"?6:4):0),m.y=f.baseY+Math.sin(Ot*1.6+f.phase)*.18,v?(ah(f.mesh,Ot,1.25),f.wakeClock-=n,f.wakeClock<=0&&(_h(m,!0,f.kind==="guardian"?2:1.2),f.wakeClock=.35)):(f.mesh.rotation.y+=n*.7,f.mesh.rotation.z=Math.sin(Ot+f.phase)*.16),Hd(ct,m,f.radius,f.lastZ))if(v){let g=kd(Ve);g!=="immune"&&(Yd(m,g==="hurt"?14849149:11922906),Lt.play(g==="shield"?"block":g,{pan:lt((m.x-ct.x)/8,-1,1)}),g==="shield"&&zn("\u0627\u0644\u062F\u0631\u0639 \u062D\u0645\u0627\u0643"),g==="defeated"&&zn(f.kind==="guardian"?"\u062A\u062C\u0627\u0648\u0632\u062A \u0642\u0631\u0634 \u0627\u0644\u0648\u0627\u062F\u064A! +25":"\u0627\u0646\u062F\u0641\u0627\u0639 \u0646\u0627\u062C\u062D +25"),Os(f),ui.splice(u,1))}else Vd(Ve,f.kind),Yd(m,f.kind==="shield"?8973779:16110732),Lt.play(f.kind,{combo:Ve.combo,pan:lt((m.x-ct.x)/8,-1,1)}),f.kind==="shield"&&zn("\u062F\u0631\u0639 \u0627\u0644\u0645\u062F\u0651 \xB7 \u062D\u0645\u0627\u064A\u0629 \u0644\u0645\u062F\u0629 9 \u062B\u0648\u0627\u0646\u064D"),Os(f),ui.splice(u,1);else m.z>14&&(Os(f),ui.splice(u,1))}let d=null;for(let u of ui){if(u.kind!=="shark"&&u.kind!=="guardian")continue;let f=u.mesh.position,m=f.x-ct.x,v=f.y-ct.y;if(f.z>2||Math.hypot(m,v)>7)continue;let g=Math.hypot(m,v,f.z);(!d||g<d.distance)&&(d={distance:g,x:m})}Lt.update({world:kt,speed:Math.hypot(Kt.x,Kt.y)/9,boosting:Ve.boost>0,threat:d}),Ve.ended&&Qi("ended")}let i=Mt!=="menu",r=innerWidth<700,s=i?ct:new E(r?0:-4.5,r?7.9:5,0);_n.position.lerp(s,1-Math.exp(-n*5));let a=i?1:r?1.45:2.05;_n.scale.setScalar(Ki.damp(_n.scale.x,a,5,n)),Ni.rotation.y=Ki.damp(Ni.rotation.y,i?Math.PI/2-Kt.x*.045:-.42+Math.sin(Ot*.24)*.2,5,n),Ni.rotation.z=Ki.damp(Ni.rotation.z,i?Kt.y*.035:Math.sin(Ot*.8)*.055,5,n),Ni.rotation.x=Ki.damp(Ni.rotation.x,i?Kt.x*.045:0,5,n),i||(_n.position.y+=Math.sin(Ot*1.2)*.004),ah(Ni,Ot,Ve.boost>0?1.7:1),ph.visible=e&&Ve.shield>0,Ni.visible=!(e&&Ve.invulnerable>0&&Math.floor(Ot*12)%2===0);for(let o=kn.length-1;o>=0;o--){let h=kn[o];(e||Mt==="menu")&&(h.life-=n,h.mesh.position.z+=t*.58,h.mesh.scale.x+=n*.9,h.mesh.scale.y+=n*.55),h.mesh.material.opacity=h.life*(h.hostile?.27:.2),h.life<=0&&(tt.remove(h.mesh),h.mesh.material.dispose(),kn.splice(o,1))}for(let o=Hn.length-1;o>=0;o--){let h=Hn[o];(e||Mt==="menu")&&(h.life-=n,h.mesh.position.addScaledVector(h.v,n),h.mesh.position.z+=t*.6),h.mesh.material.opacity=Math.max(0,h.life/.7),h.life<=0&&(tt.remove(h.mesh),h.mesh.material.dispose(),Hn.splice(o,1))}let l=i?ct.x*.25:0,c=i?6.8+ct.y*.12:7.4;Xd.set(l,c,r?20:14.5),ei.position.lerp(Xd,1-Math.exp(-n*(Lr?12:3))),qd.set(i?ct.x*.22:0,i?ct.y*.4+2.2:4.4,-13),ei.lookAt(qd),ei.fov=Ki.damp(ei.fov,Ve.boost>0&&e&&!Lr?60:53,4,n),ei.updateProjectionMatrix(),Ns>0&&Mt==="playing"&&(Ns-=n,Ns<=0&&Me("toast").classList.remove("visible"))}var oh=0,Is=0;function Ff(n){let e=Math.min((n-ch)/1e3||.016,.05);ch=n,vh(e),St.render(tt,ei),oh+=e,oh>.1&&(oh=0,Me("score").textContent=Ve.score,Me("combo").textContent=Ve.combo>1?"\xD7"+Ve.combo+" \u0633\u0644\u0633\u0644\u0629":"",Me("distance").textContent=Math.floor(Ve.distance),Me("progress").value=Ve.distance,Me("lives").textContent=Array.from({length:3},(t,i)=>i<Ve.lives?"\u25CF":"\u25CB").join(" "),Me("lives").setAttribute("aria-label",Ve.lives+" \u0645\u062D\u0627\u0648\u0644\u0627\u062A"),Me("shield").textContent=Ve.shield>0?"\u062F\u0631\u0639 \u0627\u0644\u0645\u062F\u0651 "+Math.ceil(Ve.shield)+" \u062B":"",Me("energy").value=3.6-Ve.cooldown,Me("boost-label").textContent=Ve.cooldown>0?"\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0637\u0627\u0642\u0629":"\u0627\u0644\u0627\u0646\u062F\u0641\u0627\u0639 \u062C\u0627\u0647\u0632"),e>.034?Is++:Is=Math.max(0,Is-1),Is>100&&St.getPixelRatio()>1&&(St.setPixelRatio(1),Is=0)}function ep(){ei.aspect=innerWidth/innerHeight,ei.updateProjectionMatrix(),St.setSize(innerWidth,innerHeight,!1)}function Of(){Me("start").onclick=Uf,Me("home").onclick=()=>Qi("menu"),Me("pause").onclick=Zd,Fo(),Me("sound").onclick=()=>{Lt.toggle(),Fo()},Me("volume").oninput=s=>{Lt.setVolume(Number(s.target.value)/100),Fo()},Me("volume").addEventListener("focus",()=>{Gn.clear(),hi.active=!1}),Me("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{zn("\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u062A\u0635\u0641\u062D")}},document.querySelectorAll("#worlds button").forEach(s=>s.onclick=()=>Qd(s.dataset.world)),addEventListener("resize",ep),addEventListener("keydown",s=>{if(s.code==="Escape"){s.preventDefault(),s.repeat||Zd();return}Mt!=="playing"||s.target.closest?.("input,select,textarea")||s.code==="Space"&&s.target.closest?.("button,a")||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyW","KeyA","KeyS","KeyD"].includes(s.code)&&(s.preventDefault(),Gn.add(s.code),hi.active=!1,s.code==="Space"&&!s.repeat&&Jd())}),addEventListener("keyup",s=>Gn.delete(s.code)),addEventListener("blur",()=>{Gn.clear(),Mt==="playing"&&Qi("paused"),Lt.quiet()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(Mt==="playing"&&Qi("paused"),Lt.quiet()),ch=performance.now()}),addEventListener("pagehide",()=>Lt.quiet());let n=s=>{if(Mt!=="playing")return;let a=Mi.getBoundingClientRect();hi.x=lt(((s.clientX-a.left)/a.width-.5)*15,-6.3,6.3),hi.y=lt(10-(s.clientY-a.top)/a.height*10,1.6,10),hi.active=!0};Mi.addEventListener("pointerdown",s=>{n(s),Mi.setPointerCapture(s.pointerId)}),Mi.addEventListener("pointermove",s=>{(s.buttons||s.pointerType==="mouse")&&n(s)}),Mi.addEventListener("pointercancel",()=>hi.active=!1);let e=Me("stick"),t=e.querySelector("i"),i=s=>{if(s.pointerId!==Bt.id)return;let a=e.getBoundingClientRect();Bt.x=lt((s.clientX-a.left-a.width/2)/35,-1,1),Bt.y=lt((a.top+a.height/2-s.clientY)/35,-1,1),t.style.transform="translate("+Bt.x*24+"px,"+-Bt.y*24+"px)"};e.addEventListener("pointerdown",s=>{Bt.id=s.pointerId,hi.active=!1,e.setPointerCapture(s.pointerId),i(s)}),e.addEventListener("pointermove",i);let r=()=>{Bt.id=null,Bt.x=Bt.y=0,t.style.transform=""};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("lostpointercapture",r),Me("touch-boost").addEventListener("pointerdown",s=>{s.preventDefault(),Jd()}),Mi.addEventListener("webglcontextlost",s=>{s.preventDefault(),Qi("paused"),Me("error").hidden=!1,St.setAnimationLoop(null)}),Mi.addEventListener("webglcontextrestored",()=>location.reload()),new URLSearchParams(location.search).has("test")&&(window.__ocean={simulate:s=>{for(let a=0;a<s;a+=.05)vh(.05);St.render(tt,ei)},snapshot:()=>({mode:Mt,world:kt,audio:Lt.snapshot(),run:{...Ve},position:ct.toArray(),camera:ei.position.toArray(),items:ui.map(s=>({kind:s.kind,p:s.mesh.position.toArray()})),calls:St.info.render.calls,triangles:St.info.render.triangles,geometries:St.info.memory.geometries}),step:s=>{vh(s),St.render(tt,ei)},place:(s,a)=>{ct.set(lt(s,-6.3,6.3),lt(a,1.6,10),0),Kt.set(0,0,0)},spawn:(s,a,l,c)=>Vn(s,a,l,c)})}try{Lf()}catch(n){console.error("Ocean initialization failed",n),Me("error").hidden=!1,Me("start").disabled=!0,document.documentElement.dataset.engine="error"}})();
