(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var ip=0,th=1,np=2;var pr=1,rp=2,hs=3,ln=0,Zt=1,ht=2,cn=0,ua=1,da=2,ih=3,nh=4,sp=5;var us=100,ap=101,op=102,lp=103,cp=104,hp=200,up=201,dp=202,pp=203,mp=204,fp=205,gp=206,vp=207,xp=208,_p=209,yp=210,Mp=211,Sp=212,bp=213,Tp=214,rh=0,sh=1,ah=2,rl=3,oh=4,lh=5,ch=6,hh=7,wp=0,Ep=1,Ap=2,Bi=0,uh=1,dh=2,ph=3,pa=4,mh=5,fh=6,gh=7;var vh=300,ds=301,mr=302,sl=303,al=304,ma=306,Yr=1e3,Wn=1001,go=1002,yi=1003,Cp=1004;var fa=1005;var Lt=1006,ol=1007;var fr=1008;var ii=1009,xh=1010,_h=1011,ps=1012,ll=1013,zi=1014,bi=1015,Ti=1016,cl=1017,hl=1018,ms=1020,yh=35902,Mh=35899,Rp=1021,Pp=1022,ki=1023,hn=1026,gr=1027,ul=1028,dl=1029,vr=1030,Sh=1031;var bh=1033,pl=33776,ml=33777,fl=33778,gl=33779,Th=35840,wh=35841,Eh=35842,Ah=35843,Ch=36196,Rh=37492,Ph=37496,Ih=37488,Lh=37489,vl=37490,Dh=37491,Uh=37808,Nh=37809,Fh=37810,Oh=37811,Bh=37812,zh=37813,kh=37814,Gh=37815,Vh=37816,Hh=37817,Wh=37818,Xh=37819,jh=37820,qh=37821,Yh=36492,Zh=36494,Jh=36495,Kh=36283,$h=36284,xl=36285,Qh=36286;var zs=2300,vo=2301,mo=2302,kc=2303,Gc=2400,Vc=2401,Hc=2402;var ga=3201;var eu=0,Ip=1,xr="",ei="srgb",lr="srgb-linear",ks="linear",nt="srgb";var ar=7680;var Lp=512,Dp=513,Up=514,_l=515,Np=516,Fp=517,yl=518,Op=519,Wc=35044,va=35048;var tu="300 es",Sn=2e3,Zr=2001;function Mf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bp(){let n=Jr("canvas");return n.style.display="block",n}var vd={},Kr=null;function iu(...n){let e="THREE."+n.shift();Kr?Kr("log",e,...n):console.log(e,...n)}function zp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ae(...n){let e="THREE."+(n=zp(n)).shift();if(Kr)Kr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Re(...n){let e="THREE."+(n=zp(n)).shift();if(Kr)Kr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function or(...n){let e=n.join(" ");e in vd||(vd[e]=!0,Ae(...n))}function kp(n,e,t){return new Promise(function(i,r){setTimeout(function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var Gp={[rh]:1,[ah]:6,[oh]:7,[rl]:5,[sh]:0,[ch]:2,[hh]:4,[lh]:3},rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xd=1234567,jr=Math.PI/180,cr=180/Math.PI;function _r(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(jt[255&n]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[255&e]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[63&t|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[255&i]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function Xc(n,e){return(n%e+e)%e}function Fs(n,e,t){return(1-t)*n+t*e}function Xr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var yt={DEG2RAD:jr,RAD2DEG:cr,generateUUID:_r,clamp:Ge,euclideanModulo:Xc,mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:Fs,damp:function(n,e,t,i){return Fs(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(Xc(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(xd=n);let e=xd+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*jr},radToDeg:function(n){return n*cr},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(r){case"XYX":n.set(o*h,c*d,c*u,o*l);break;case"YZY":n.set(c*u,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*u,o*h,o*l);break;case"XZX":n.set(o*h,c*f,c*p,o*l);break;case"YXY":n.set(c*p,o*h,c*f,o*l);break;case"ZYZ":n.set(c*f,c*p,o*h,o*l);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Qt,denormalize:Xr},ou=class ou{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ou.prototype.isVector2=!0;var Q=ou,Dt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3],u=s[a+0],p=s[a+1],f=s[a+2],m=s[a+3];if(d!==m||c!==u||l!==p||h!==f){let x=c*u+l*p+h*f+d*m;x<0&&(u=-u,p=-p,f=-f,m=-m,x=-x);let g=1-o;if(x<.9995){let v=Math.acos(x),_=Math.sin(v);g=Math.sin(g*v)/_,c=c*g+u*(o=Math.sin(o*v)/_),l=l*g+p*o,h=h*g+f*o,d=d*g+m*o}else{c=c*g+u*o,l=l*g+p*o,h=h*g+f*o,d=d*g+m*o;let v=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=v,l*=v,h*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[a],u=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*d+c*p-l*u,e[t+1]=c*f+h*u+l*d-o*p,e[t+2]=l*f+h*p+o*u-c*d,e[t+3]=h*f-o*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),d=o(s/2),u=c(i/2),p=c(r/2),f=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d+u*p*f;break;case"YZX":this._x=u*h*d+l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d-u*p*f;break;case"XZY":this._x=u*h*d-l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d+u*p*f;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lu=class lu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_d.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lu.prototype.isVector3=!0;var b=lu,dc=new b,_d=new Dt,cu=class cu{constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],p=i[5],f=i[8],m=r[0],x=r[3],g=r[6],v=r[1],_=r[4],y=r[7],T=r[2],M=r[5],P=r[8];return s[0]=a*m+o*v+c*T,s[3]=a*x+o*_+c*M,s[6]=a*g+o*y+c*P,s[1]=l*m+h*v+d*T,s[4]=l*x+h*_+d*M,s[7]=l*g+h*y+d*P,s[2]=u*m+p*v+f*T,s[5]=u*x+p*_+f*M,s[8]=u*g+p*y+f*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*s,p=l*s-a*c,f=t*d+i*u+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=d*m,e[1]=(r*l-h*i)*m,e[2]=(o*i-r*a)*m,e[3]=u*m,e[4]=(h*t-r*c)*m,e[5]=(r*s-o*t)*m,e[6]=p*m,e[7]=(i*c-l*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pc.makeScale(e,t)),this}rotate(e){return or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pc.makeRotation(-e)),this}translate(e,t){return or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cu.prototype.isMatrix3=!0;var Fe=cu,pc=new Fe,yd=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Md=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sf(){let n={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===nt&&(r.r=Mn(r.r),r.g=Mn(r.g),r.b=Mn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=qr(r.r),r.g=qr(r.g),r.b=qr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?ks:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return or("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return or("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[lr]:{primaries:e,whitePoint:i,transfer:ks,toXYZ:yd,fromXYZ:Md,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:yd,fromXYZ:Md,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),n}var qe=Sf();function Mn(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function qr(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var Lr,xo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Lr===void 0&&(Lr=Jr("canvas")),Lr.width=e.width,Lr.height=e.height;let r=Lr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Lr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Mn(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Mn(t[i]/255)):t[i]=Mn(t[i]);return{data:t,width:e.width,height:e.height}}return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bf=0,$r=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=_r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(mc(r[a].image)):s.push(mc(r[a]))}else s=mc(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function mc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var Tf=0,fc=new b,ti=class n extends rn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=_r(),this.name="",this.source=new $r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fc).x}get height(){return this.source.getSize(fc).y}get depth(){return this.source.getSize(fc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i:Ae(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yr:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Yr:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null,ti.DEFAULT_MAPPING=vh,ti.DEFAULT_ANISOTROPY=1;var hu=class hu{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],f=c[9],m=c[2],x=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-m)<.01&&Math.abs(f-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+m)<.1&&Math.abs(f+x)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,y=(p+1)/2,T=(g+1)/2,M=(h+u)/4,P=(d+m)/4,N=(f+x)/4;return _>y&&_>T?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=M/i,s=P/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=M/r,s=N/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=P/s,r=N/s),this.set(i,r,s,t),this}let v=Math.sqrt((x-f)*(x-f)+(d-m)*(d-m)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(x-f)/v,this.y=(d-m)/v,this.z=(u-h)/v,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hu.prototype.isVector4=!0;var at=hu,_o=class extends rn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new ti(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new $r(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends _o{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Gs=class extends ti{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yi,this.minFilter=yi,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yo=class extends ti{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yi,this.minFilter=yi,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nl=class nl{constructor(e,t,i,r,s,a,o,c,l,h,d,u,p,f,m,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,d,u,p,f,m,x)}set(e,t,i,r,s,a,o,c,l,h,d,u,p,f,m,x){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=p,g[7]=f,g[11]=m,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),a=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,f=o*h,m=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+f*l,t[5]=u-m*l,t[9]=-o*c,t[2]=m-u*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,p=c*d,f=l*h,m=l*d;t[0]=u+m*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=m+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,p=c*d,f=l*h,m=l*d;t[0]=u-m*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=m-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,p=a*d,f=o*h,m=o*d;t[0]=c*h,t[4]=f*l-p,t[8]=u*l+m,t[1]=c*d,t[5]=m*l+u,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,p=a*l,f=o*c,m=o*l;t[0]=c*h,t[4]=m-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+f,t[10]=u-m*d}else if(e.order==="XZY"){let u=a*c,p=a*l,f=o*c,m=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+m,t[5]=a*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=m*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wf,e,Ef)}lookAt(e,t,i){let r=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Fn.crossVectors(i,ai),Fn.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Fn.crossVectors(i,ai)),Fn.normalize(),Oa.crossVectors(ai,Fn),r[0]=Fn.x,r[4]=Oa.x,r[8]=ai.x,r[1]=Fn.y,r[5]=Oa.y,r[9]=ai.y,r[2]=Fn.z,r[6]=Oa.z,r[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],p=i[13],f=i[2],m=i[6],x=i[10],g=i[14],v=i[3],_=i[7],y=i[11],T=i[15],M=r[0],P=r[4],N=r[8],I=r[12],L=r[1],B=r[5],F=r[9],j=r[13],H=r[2],V=r[6],Y=r[10],W=r[14],ne=r[3],ge=r[7],Ce=r[11],ye=r[15];return s[0]=a*M+o*L+c*H+l*ne,s[4]=a*P+o*B+c*V+l*ge,s[8]=a*N+o*F+c*Y+l*Ce,s[12]=a*I+o*j+c*W+l*ye,s[1]=h*M+d*L+u*H+p*ne,s[5]=h*P+d*B+u*V+p*ge,s[9]=h*N+d*F+u*Y+p*Ce,s[13]=h*I+d*j+u*W+p*ye,s[2]=f*M+m*L+x*H+g*ne,s[6]=f*P+m*B+x*V+g*ge,s[10]=f*N+m*F+x*Y+g*Ce,s[14]=f*I+m*j+x*W+g*ye,s[3]=v*M+_*L+y*H+T*ne,s[7]=v*P+_*B+y*V+T*ge,s[11]=v*N+_*F+y*Y+T*Ce,s[15]=v*I+_*j+y*W+T*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14],f=e[3],m=e[7],x=e[11],g=e[15],v=c*p-l*u,_=o*p-l*d,y=o*u-c*d,T=a*p-l*h,M=a*u-c*h,P=a*d-o*h;return t*(m*v-x*_+g*y)-i*(f*v-x*T+g*M)+r*(f*_-m*T+g*P)-s*(f*y-m*M+x*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(s*h-o*c)+r*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],m=e[13],x=e[14],g=e[15],v=t*o-i*a,_=t*c-r*a,y=t*l-s*a,T=i*c-r*o,M=i*l-s*o,P=r*l-s*c,N=h*m-d*f,I=h*x-u*f,L=h*g-p*f,B=d*x-u*m,F=d*g-p*m,j=u*g-p*x,H=v*j-_*F+y*B+T*L-M*I+P*N;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/H;return e[0]=(o*j-c*F+l*B)*V,e[1]=(r*F-i*j-s*B)*V,e[2]=(m*P-x*M+g*T)*V,e[3]=(u*M-d*P-p*T)*V,e[4]=(c*L-a*j-l*I)*V,e[5]=(t*j-r*L+s*I)*V,e[6]=(x*y-f*P-g*_)*V,e[7]=(h*P-u*y+p*_)*V,e[8]=(a*F-o*L+l*N)*V,e[9]=(i*L-t*F-s*N)*V,e[10]=(f*M-m*y+g*v)*V,e[11]=(d*y-h*M-p*v)*V,e[12]=(o*I-a*B-c*N)*V,e[13]=(t*B-i*I+r*N)*V,e[14]=(m*_-f*T-x*v)*V,e[15]=(h*T-d*_+u*v)*V,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,u=s*l,p=s*h,f=s*d,m=a*h,x=a*d,g=o*d,v=c*l,_=c*h,y=c*d,T=i.x,M=i.y,P=i.z;return r[0]=(1-(m+g))*T,r[1]=(p+y)*T,r[2]=(f-_)*T,r[3]=0,r[4]=(p-y)*M,r[5]=(1-(u+g))*M,r[6]=(x+v)*M,r[7]=0,r[8]=(f+_)*P,r[9]=(x-v)*P,r[10]=(1-(u+m))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Dr.set(r[0],r[1],r[2]).length(),o=Dr.set(r[4],r[5],r[6]).length(),c=Dr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ii.copy(this);let l=1/a,h=1/o,d=1/c;return Ii.elements[0]*=l,Ii.elements[1]*=l,Ii.elements[2]*=l,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=d,Ii.elements[9]*=d,Ii.elements[10]*=d,t.setFromRotationMatrix(Ii),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),d=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r),f,m;if(c)f=s/(a-s),m=a*s/(a-s);else if(o===Sn)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==Zr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),m=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),d=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r),f,m;if(c)f=1/(a-s),m=a/(a-s);else if(o===Sn)f=-2/(a-s),m=-(a+s)/(a-s);else{if(o!==Zr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),m=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};nl.prototype.isMatrix4=!0;var we=nl,Dr=new b,Ii=new we,wf=new b(0,0,0),Ef=new b(1,1,1),Fn=new b,Oa=new b,ai=new b,Sd=new we,bd=new Dt,bn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bd.setFromEuler(this),this.setFromQuaternion(bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Vs=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Af=0,Td=new b,Ur=new Dt,gn=new we,Ba=new b,Cs=new b,Cf=new b,Rf=new Dt,wd=new b(1,0,0),Ed=new b(0,1,0),Ad=new b(0,0,1),Cd={type:"added"},Pf={type:"removed"},Nr={type:"childadded",child:null},gc={type:"childremoved",child:null},ct=class n extends rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new b,t=new bn,i=new Dt,r=new b(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new Fe}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(wd,e)}rotateY(e){return this.rotateOnAxis(Ed,e)}rotateZ(e){return this.rotateOnAxis(Ad,e)}translateOnAxis(e,t){return Td.copy(e).applyQuaternion(this.quaternion),this.position.add(Td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wd,e)}translateY(e){return this.translateOnAxis(Ed,e)}translateZ(e){return this.translateOnAxis(Ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ba.copy(e):Ba.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Cs,Ba,this.up):gn.lookAt(Ba,Cs,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(gn),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cd),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pf),gc.child=e,this.dispatchEvent(gc),gc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cd),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};ct.DEFAULT_UP=new b(0,1,0),ct.DEFAULT_MATRIX_AUTO_UPDATE=!0,ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var et=class extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},If={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let m of e.hand.values()){let x=t.getJointPose(m,i),g=this._getHandJoint(l,m);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;l.inputState.pinching&&u>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(If)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},za={h:0,s:0,l:0};function vc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var ie=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=Xc(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=vc(a,s,e+1/3),this.g=vc(a,s,e),this.b=vc(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,t=ei){function i(s){s!==void 0&&parseFloat(s)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){let i=Vp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return qe.workingToColorSpace(qt.copy(this),e),65536*Math.round(Ge(255*qt.r,0,255))+256*Math.round(Ge(255*qt.g,0,255))+Math.round(Ge(255*qt.b,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(qt.copy(this),t);let i=qt.r,r=qt.g,s=qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=ei){qe.workingToColorSpace(qt.copy(this),e);let t=qt.r,i=qt.g,r=qt.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(za);let i=Fs(On.h,za.h,t),r=Fs(On.s,za.s,t),s=Fs(On.l,za.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new ie;ie.NAMES=Vp;var Hs=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ie(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Tn=class extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Li=new b,vn=new b,xc=new b,xn=new b,Fr=new b,Or=new b,Rd=new b,_c=new b,yc=new b,Mc=new b,Sc=new at,bc=new at,Tc=new at,li=class n{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Li.subVectors(e,t),r.cross(Li);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Li.subVectors(r,t),vn.subVectors(i,t),xc.subVectors(e,t);let a=Li.dot(Li),o=Li.dot(vn),c=Li.dot(xc),l=vn.dot(vn),h=vn.dot(xc),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(l*c-o*h)*u,f=(a*h-o*c)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xn)!==null&&xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,xn.x),c.addScaledVector(a,xn.y),c.addScaledVector(o,xn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Sc.setScalar(0),bc.setScalar(0),Tc.setScalar(0),Sc.fromBufferAttribute(e,t),bc.fromBufferAttribute(e,i),Tc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Sc,s.x),a.addScaledVector(bc,s.y),a.addScaledVector(Tc,s.z),a}static isFrontFacing(e,t,i,r){return Li.subVectors(i,t),vn.subVectors(e,t),Li.cross(vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),.5*Li.cross(vn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Fr.subVectors(r,i),Or.subVectors(s,i),_c.subVectors(e,i);let c=Fr.dot(_c),l=Or.dot(_c);if(c<=0&&l<=0)return t.copy(i);yc.subVectors(e,r);let h=Fr.dot(yc),d=Or.dot(yc);if(h>=0&&d<=h)return t.copy(r);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Fr,a);Mc.subVectors(e,s);let p=Fr.dot(Mc),f=Or.dot(Mc);if(f>=0&&p<=f)return t.copy(s);let m=p*l-c*f;if(m<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(Or,o);let x=h*f-p*d;if(x<=0&&d-h>=0&&p-f>=0)return Rd.subVectors(s,r),o=(d-h)/(d-h+(p-f)),t.copy(r).addScaledVector(Rd,o);let g=1/(x+m+u);return a=m*g,o=u*g,t.copy(i).addScaledVector(Fr,a).addScaledVector(Or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ni=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Di):Di.fromBufferAttribute(s,a),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),Ga.subVectors(this.max,Rs),Br.subVectors(e.a,Rs),zr.subVectors(e.b,Rs),kr.subVectors(e.c,Rs),Bn.subVectors(zr,Br),zn.subVectors(kr,zr),ir.subVectors(Br,kr);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ir.z,ir.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ir.z,0,-ir.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ir.y,ir.x,0];return!!wc(t,Br,zr,kr,Ga)&&(t=[1,0,0,0,1,0,0,0,1],!!wc(t,Br,zr,kr,Ga)&&(Va.crossVectors(Bn,zn),t=[Va.x,Va.y,Va.z],wc(t,Br,zr,kr,Ga)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Di).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_n=[new b,new b,new b,new b,new b,new b,new b,new b],Di=new b,ka=new ni,Br=new b,zr=new b,kr=new b,Bn=new b,zn=new b,ir=new b,Rs=new b,Ga=new b,Va=new b,nr=new b;function wc(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){nr.fromArray(n,s);let o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),c=e.dot(nr),l=t.dot(nr),h=i.dot(nr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ev=Lf();function Lf(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[256|c]=32768,r[c]=24,r[256|c]=24):l<-14?(i[c]=1024>>-l-14,i[256|c]=1024>>-l-14|32768,r[c]=-l-1,r[256|c]=-l-1):l<=15?(i[c]=l+15<<10,i[256|c]=l+15<<10|32768,r[c]=13,r[256|c]=13):l<128?(i[c]=31744,i[256|c]=64512,r[c]=24,r[256|c]=24):(i[c]=31744,i[256|c]=64512,r[c]=13,r[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var wt=new b,Ha=new Q,Df=0,It=class extends rn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Df++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wc,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ws=class extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xs=class extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ce=class extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}},Uf=new ni,Ps=new b,Ec=new b,Mi=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Uf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);let t=Ps.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(Ps,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(Ec)),this.expandByPoint(Ps.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Nf=0,xi=new we,Ac=new ct,Gr=new b,oi=new ni,Is=new ni,Bt=new b,Pe=class n extends rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?Xs:Ws)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,i){return xi.makeTranslation(e,t,i),this.applyMatrix4(xi),this}scale(e,t,i){return xi.makeScale(e,t,i),this.applyMatrix4(xi),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];oi.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new b,1/0);if(e){let i=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(oi.min,Is.min),oi.expandByPoint(Bt),Bt.addVectors(oi.max,Is.max),oi.expandByPoint(Bt)):(oi.expandByPoint(Is.min),oi.expandByPoint(Is.max))}oi.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Bt.fromBufferAttribute(o,l),c&&(Gr.fromBufferAttribute(e,l),Bt.add(Gr)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");a!==void 0&&a.count===i.count||(a=new It(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let N=0;N<i.count;N++)o[N]=new b,c[N]=new b;let l=new b,h=new b,d=new b,u=new Q,p=new Q,f=new Q,m=new b,x=new b;function g(N,I,L){l.fromBufferAttribute(i,N),h.fromBufferAttribute(i,I),d.fromBufferAttribute(i,L),u.fromBufferAttribute(s,N),p.fromBufferAttribute(s,I),f.fromBufferAttribute(s,L),h.sub(l),d.sub(l),p.sub(u),f.sub(u);let B=1/(p.x*f.y-f.x*p.y);isFinite(B)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(d,-p.y).multiplyScalar(B),x.copy(d).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(B),o[N].add(m),o[I].add(m),o[L].add(m),c[N].add(x),c[I].add(x),c[L].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,I=v.length;N<I;++N){let L=v[N],B=L.start;for(let F=B,j=B+L.count;F<j;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let _=new b,y=new b,T=new b,M=new b;function P(N){T.fromBufferAttribute(r,N),M.copy(T);let I=o[N];_.copy(I),_.sub(T.multiplyScalar(T.dot(I))).normalize(),y.crossVectors(M,I);let L=y.dot(c[N])<0?-1:1;a.setXYZW(N,_.x,_.y,_.z,L)}for(let N=0,I=v.length;N<I;++N){let L=v[N],B=L.start;for(let F=B,j=B+L.count;F<j;F+=3)P(e.getX(F+0)),P(e.getX(F+1)),P(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new It(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let r=new b,s=new b,a=new b,o=new b,c=new b,l=new b,h=new b,d=new b;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),m=e.getX(u+1),x=e.getX(u+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,x),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,f),c.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),o.add(h),c.add(h),l.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),p=0,f=0;for(let m=0,x=c.length;m<x;m++){p=o.isInterleavedBufferAttribute?c[m]*o.data.stride+o.offset:c[m]*h;for(let g=0;g<h;g++)u[f++]=l[p++]}return new It(u,h,d)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=e(r[o],i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let u=e(l[h],i);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Av=new b;var Ff=0,sn=class extends rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:Ae(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Q().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Cv=new b,Rv=new b,Pv=new b,Iv=new Q,Lv=new Q,Dv=new we,Uv=new b,Nv=new b,Fv=new b,Ov=new Q,Bv=new Q,zv=new Q;var kv=new b,Gv=new b;var yn=new b,Cc=new b,Wa=new b,kn=new b,Rc=new b,Xa=new b,Pc=new b,wn=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Cc.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(Cc);let s=.5*e.distanceTo(t),a=-this.direction.dot(Wa),o=kn.dot(this.direction),c=-kn.dot(Wa),l=kn.lengthSq(),h=Math.abs(1-a*a),d,u,p,f;if(h>0)if(d=a*c-o,u=a*o-c,f=s*h,d>=0)if(u>=-f)if(u<=f){let m=1/h;d*=m,u*=m,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-f?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=f?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Cc).addScaledVector(Wa,u),p}intersectSphere(e,t){yn.subVectors(e.center,this.origin);let i=yn.dot(this.direction),r=yn.dot(yn)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||o>r?null:((o>i||i!=i)&&(i=o),(c<r||r!=r)&&(r=c),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,i,r,s){Rc.subVectors(t,e),Xa.subVectors(i,e),Pc.crossVectors(Rc,Xa);let a,o=this.direction.dot(Pc);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}kn.subVectors(this.origin,e);let c=a*this.direction.dot(Xa.crossVectors(kn,Xa));if(c<0)return null;let l=a*this.direction.dot(Rc.cross(kn));if(l<0||c+l>o)return null;let h=-a*kn.dot(Pc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pd=new we,rr=new wn,ja=new Mi,Id=new b,qa=new b,Ya=new b,Za=new b,Ic=new b,Ja=new b,Ld=new b,Ka=new b,Oe=class extends ct{constructor(e=new Pe,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Ja.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(Ic.fromBufferAttribute(d,e),a?Ja.addScaledVector(Ic,h):Ja.addScaledVector(Ic.sub(t),h))}t.add(Ja)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(s),rr.copy(e.ray).recast(e.near),ja.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ja,Id)===null||rr.origin.distanceToSquared(Id)>(e.far-e.near)**2))return;Pd.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Pd),i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,rr)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,m=u.length;f<m;f++){let x=u[f],g=a[x.materialIndex];for(let v=Math.max(x.start,p.start),_=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));v<_;v+=3)r=$a(this,g,e,i,l,h,d,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=x.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);f<m;f+=3)r=$a(this,a,e,i,l,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(c!==void 0)if(Array.isArray(a))for(let f=0,m=u.length;f<m;f++){let x=u[f],g=a[x.materialIndex];for(let v=Math.max(x.start,p.start),_=Math.min(c.count,Math.min(x.start+x.count,p.start+p.count));v<_;v+=3)r=$a(this,g,e,i,l,h,d,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=x.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),m=Math.min(c.count,p.start+p.count);f<m;f+=3)r=$a(this,a,e,i,l,h,d,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function $a(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,qa),n.getVertexPosition(c,Ya),n.getVertexPosition(l,Za);let h=(function(d,u,p,f,m,x,g,v){let _;if(_=u.side===1?f.intersectTriangle(g,x,m,!0,v):f.intersectTriangle(m,x,g,u.side===0,v),_===null)return null;Ka.copy(v),Ka.applyMatrix4(d.matrixWorld);let y=p.ray.origin.distanceTo(Ka);return y<p.near||y>p.far?null:{distance:y,point:Ka.clone(),object:d}})(n,e,t,i,qa,Ya,Za,Ld);if(h){let d=new b;li.getBarycoord(Ld,qa,Ya,Za,d),r&&(h.uv=li.getInterpolatedAttribute(r,o,c,l,d,new Q)),s&&(h.uv1=li.getInterpolatedAttribute(s,o,c,l,d,new Q)),a&&(h.normal=li.getInterpolatedAttribute(a,o,c,l,d,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new b,materialIndex:0};li.getNormal(qa,Ya,Za,u.normal),h.face=u,h.barycoord=d}return h}var Vv=new at,Hv=new at,Wv=new at,Xv=new at,jv=new we,qv=new b,Yv=new Mi,Zv=new we,Jv=new wn;var hr=class extends ti{constructor(e=null,t=1,i=1,r,s,a,o,c,l=1003,h=1003,d,u){super(null,a,o,c,l,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kv=new we,$v=new we;var js=class extends It{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vr=new we,Dd=new we,Qa=[],Ud=new ni,Of=new we,Ls=new Oe,Ds=new Mi,Ui=class extends Oe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new js(new Float32Array(16*i),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Of)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vr),Ud.copy(e.boundingBox).applyMatrix4(Vr),this.boundingBox.union(Ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vr),Ds.copy(e.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(Ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(i),e.ray.intersectsSphere(Ds)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Vr),Dd.multiplyMatrices(i,Vr),Ls.matrixWorld=Dd,Ls.raycast(e,Qa);for(let a=0,o=Qa.length;a<o;a++){let c=Qa[a];c.instanceId=s,c.object=this,t.push(c)}Qa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new js(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,16*e),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new hr(new Float32Array(r*this.count),r,this.count,ul,bi));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Lc=new b,Bf=new b,zf=new Fe,nn=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Lc.subVectors(i,t).cross(Bf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Lc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||zf.getNormalMatrix(e),r=this.coplanarPoint(Lc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},sr=new Mi,kf=new Q(.5,.5),eo=new b,En=class{constructor(e=new nn,t=new nn,i=new nn,r=new nn,s=new nn,a=new nn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],p=s[7],f=s[8],m=s[9],x=s[10],g=s[11],v=s[12],_=s[13],y=s[14],T=s[15];if(r[0].setComponents(l-a,p-h,g-f,T-v).normalize(),r[1].setComponents(l+a,p+h,g+f,T+v).normalize(),r[2].setComponents(l+o,p+d,g+m,T+_).normalize(),r[3].setComponents(l-o,p-d,g-m,T-_).normalize(),i)r[4].setComponents(c,u,x,y).normalize(),r[5].setComponents(l-c,p-u,g-x,T-y).normalize();else if(r[4].setComponents(l-c,p-u,g-x,T-y).normalize(),t===Sn)r[5].setComponents(l+c,p+u,g+x,T+y).normalize();else{if(t!==Zr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(c,u,x,y).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){sr.center.set(0,0,0);let t=kf.distanceTo(e.center);return sr.radius=.7071067811865476+t,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(eo.x=r.normal.x>0?e.max.x:e.min.x,eo.y=r.normal.y>0?e.max.y:e.min.y,eo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Nd=new we,Mo=class n{constructor(){this.coordinateSystem=Sn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];Nd.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new En),i[r].setFromProjectionMatrix(Nd,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new En),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var jc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}},Qv=new we,ex=new ie(1,1,1),tx=new En,ix=new Mo,nx=new ni,rx=new Mi,sx=new b,ax=new b,ox=new b,lx=new jc,cx=new Oe;var es=class extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},So=new b,bo=new b,Fd=new we,Us=new wn,to=new Mi,Dc=new b,Od=new b,To=class extends ct{constructor(e=new Pe,t=new es){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)So.fromBufferAttribute(t,r-1),bo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=So.distanceTo(bo);e.setAttribute("lineDistance",new ce(i,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(r),to.radius+=s,e.ray.intersectsSphere(to)===!1)return;Fd.copy(r).invert(),Us.copy(e.ray).applyMatrix4(Fd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=u,m=p-1;f<m;f+=l){let x=h.getX(f),g=h.getX(f+1),v=io(this,e,Us,c,x,g,f);v&&t.push(v)}if(this.isLineLoop){let f=h.getX(p-1),m=h.getX(u),x=io(this,e,Us,c,f,m,p-1);x&&t.push(x)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let f=u,m=p-1;f<m;f+=l){let x=io(this,e,Us,c,f,f+1,f);x&&t.push(x)}if(this.isLineLoop){let f=io(this,e,Us,c,p-1,u,p-1);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function io(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(So.fromBufferAttribute(o,r),bo.fromBufferAttribute(o,s),t.distanceSqToSegment(So,bo,Dc,Od)>i)return;Dc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Dc);return c<e.near||c>e.far?void 0:{distance:c,point:Od.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Bd=new b,zd=new b,qs=class extends To{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Bd.fromBufferAttribute(t,r),zd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Bd.distanceTo(zd);e.setAttribute("lineDistance",new ce(i,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ts=class extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kd=new we,qc=new wn,no=new Mi,ro=new b,Xn=class extends ct{constructor(e=new Pe,t=new ts){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(r),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;kd.copy(r).invert(),qc.copy(e.ray).applyMatrix4(kd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null)for(let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);d<u;d++){let p=l.getX(d);ro.fromBufferAttribute(h,p),Gd(ro,p,c,r,e,t,this)}else for(let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);d<u;d++)ro.fromBufferAttribute(h,d),Gd(ro,d,c,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Gd(n,e,t,i,r,s,a){let o=qc.distanceSqToPoint(n);if(o<t){let c=new b;qc.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ys=class extends ti{constructor(e=[],t=301,i,r,s,a,o,c,l,h){super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Ni=class extends ti{constructor(e,t,i=1014,r,s,a,o=1003,c=1003,l,h=1026,d=1){if(h!==hn&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:d},r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wo=class extends Ni{constructor(e,t=1014,i=301,r,s,a=1003,o=1003,c,l=1026){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zs=class extends ti{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fi=class n extends Pe{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,p=0;function f(m,x,g,v,_,y,T,M,P,N,I){let L=y/P,B=T/N,F=y/2,j=T/2,H=M/2,V=P+1,Y=N+1,W=0,ne=0,ge=new b;for(let Ce=0;Ce<Y;Ce++){let ye=Ce*B-j;for(let Me=0;Me<V;Me++){let te=Me*L-F;ge[m]=te*v,ge[x]=ye*_,ge[g]=H,l.push(ge.x,ge.y,ge.z),ge[m]=0,ge[x]=0,ge[g]=M>0?1:-1,h.push(ge.x,ge.y,ge.z),d.push(Me/P),d.push(1-Ce/N),W+=1}}for(let Ce=0;Ce<N;Ce++)for(let ye=0;ye<P;ye++){let Me=u+ye+V*Ce,te=u+ye+V*(Ce+1),pe=u+(ye+1)+V*(Ce+1),ue=u+(ye+1)+V*Ce;c.push(Me,te,ue),c.push(te,pe,ue),ne+=6}o.addGroup(p,ne,I),p+=ne,u+=W}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Eo=class n extends Pe{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,u=t,p=2*d+u,f=2*i+s,m=r+1,x=new b,g=new b;for(let v=0;v<=f;v++){let _=0,y=0,T=0,M=0;if(v<=i){let I=v/i,L=I*Math.PI/2;y=-h-e*Math.cos(L),T=e*Math.sin(L),M=-e*Math.cos(L),_=I*d}else if(v<=i+s){let I=(v-i)/s;y=I*t-h,T=e,M=0,_=d+I*u}else{let I=(v-i-s)/i,L=I*Math.PI/2;y=h+e*Math.sin(L),T=e*Math.cos(L),M=e*Math.sin(L),_=d+u+I*d}let P=Math.max(0,Math.min(1,_/p)),N=0;v===0?N=.5/r:v===f&&(N=-.5/r);for(let I=0;I<=r;I++){let L=I/r,B=L*Math.PI*2,F=Math.sin(B),j=Math.cos(B);g.x=-T*j,g.y=y,g.z=T*F,o.push(g.x,g.y,g.z),x.set(-T*j,M,T*F),x.normalize(),c.push(x.x,x.y,x.z),l.push(L+N,P)}if(v>0){let I=(v-1)*m;for(let L=0;L<r;L++){let B=I+L,F=I+L+1,j=v*m+L,H=v*m+L+1;a.push(B,F,j),a.push(F,H,j)}}}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ao=class n extends Pe{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new b,h=new Q;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Oi=class n extends Pe{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],u=[],p=[],f=0,m=[],x=i/2,g=0;function v(_){let y=f,T=new Q,M=new b,P=0,N=_===!0?e:t,I=_===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,x*I,0),u.push(0,I,0),p.push(.5,.5),f++;let L=f;for(let B=0;B<=r;B++){let F=B/r*c+o,j=Math.cos(F),H=Math.sin(F);M.x=N*H,M.y=x*I,M.z=N*j,d.push(M.x,M.y,M.z),u.push(0,I,0),T.x=.5*j+.5,T.y=.5*H*I+.5,p.push(T.x,T.y),f++}for(let B=0;B<r;B++){let F=y+B,j=L+B;_===!0?h.push(j,j+1,F):h.push(j+1,j,F),P+=3}l.addGroup(g,P,_===!0?1:2),g+=P}(function(){let _=new b,y=new b,T=0,M=(t-e)/i;for(let P=0;P<=s;P++){let N=[],I=P/s,L=I*(t-e)+e;for(let B=0;B<=r;B++){let F=B/r,j=F*c+o,H=Math.sin(j),V=Math.cos(j);y.x=L*H,y.y=-I*i+x,y.z=L*V,d.push(y.x,y.y,y.z),_.set(H,M,V).normalize(),u.push(_.x,_.y,_.z),p.push(F,1-I),N.push(f++)}m.push(N)}for(let P=0;P<r;P++)for(let N=0;N<s;N++){let I=m[N][P],L=m[N+1][P],B=m[N+1][P+1],F=m[N][P+1];(e>0||N!==0)&&(h.push(I,L,F),T+=3),(t>0||N!==s-1)&&(h.push(L,B,F),T+=3)}l.addGroup(g,T,0),g+=T})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Co=class n extends Oi{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jn=class n extends Pe{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(p,f,m,x){let g=x+1,v=[];for(let _=0;_<=g;_++){v[_]=[];let y=p.clone().lerp(m,_/g),T=f.clone().lerp(m,_/g),M=g-_;for(let P=0;P<=M;P++)v[_][P]=P===0&&_===g?y:y.clone().lerp(T,P/M)}for(let _=0;_<g;_++)for(let y=0;y<2*(g-_)-1;y++){let T=Math.floor(y/2);y%2==0?(c(v[_][T+1]),c(v[_+1][T]),c(v[_][T])):(c(v[_][T+1]),c(v[_+1][T+1]),c(v[_+1][T]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,f){let m=3*p;f.x=e[m+0],f.y=e[m+1],f.z=e[m+2]}function h(p,f,m,x){x<0&&p.x===1&&(a[f]=p.x-1),m.x===0&&m.z===0&&(a[f]=x/2/Math.PI+.5)}function d(p){return Math.atan2(p.z,-p.x)}function u(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new b,m=new b,x=new b;for(let g=0;g<t.length;g+=3)l(t[g+0],f),l(t[g+1],m),l(t[g+2],x),o(f,m,x,p)})(r),(function(p){let f=new b;for(let m=0;m<s.length;m+=3)f.x=s[m+0],f.y=s[m+1],f.z=s[m+2],f.normalize().multiplyScalar(p),s[m+0]=f.x,s[m+1]=f.y,s[m+2]=f.z})(i),(function(){let p=new b;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let m=d(p)/2/Math.PI+.5,x=u(p)/Math.PI+.5;a.push(m,1-x)}(function(){let f=new b,m=new b,x=new b,g=new b,v=new Q,_=new Q,y=new Q;for(let T=0,M=0;T<s.length;T+=9,M+=6){f.set(s[T+0],s[T+1],s[T+2]),m.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),v.set(a[M+0],a[M+1]),_.set(a[M+2],a[M+3]),y.set(a[M+4],a[M+5]),g.copy(f).add(m).add(x).divideScalar(3);let P=d(g);h(v,M+0,f,P),h(_,M+2,m,P),h(y,M+4,x,P)}})(),(function(){for(let f=0;f<a.length;f+=6){let m=a[f+0],x=a[f+2],g=a[f+4],v=Math.max(m,x,g),_=Math.min(m,x,g);v>.9&&_<.1&&(m<.2&&(a[f+0]+=1),x<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(s.slice(),3)),this.setAttribute("uv",new ce(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Ro=class n extends jn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},so=new b,ao=new b,Uc=new b,oo=new li,Po=class extends Pe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(jr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:m,b:x,c:g}=oo;if(m.fromBufferAttribute(o,l[0]),x.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),oo.getNormal(Uc),d[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let v=0;v<3;v++){let _=(v+1)%3,y=d[v],T=d[_],M=oo[h[v]],P=oo[h[_]],N=`${y}_${T}`,I=`${T}_${y}`;I in u&&u[I]?(Uc.dot(u[I].normal)<=s&&(p.push(M.x,M.y,M.z),p.push(P.x,P.y,P.z)),u[I]=null):N in u||(u[N]={index0:l[v],index1:l[_],normal:Uc.clone()})}}for(let f in u)if(u[f]){let{index0:m,index1:x}=u[f];so.fromBufferAttribute(o,m),ao.fromBufferAttribute(o,x),p.push(so.x,so.y,so.z),p.push(ao.x,ao.y,ao.z)}this.setAttribute("position",new ce(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ae("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,c=0,l=s-1;for(;c<=l;)if(r=Math.floor(c+(l-c)/2),o=i[r]-a,o<0)c=r+1;else{if(!(o>0)){l=r;break}l=r-1}if(r=l,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new Q:new b);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new b,r=[],s=[],a=[],o=new b,c=new we;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new b)}s[0]=new b,a[0]=new b;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Ge(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ge(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},is=class extends hi{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Q){let i=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Io=class extends is{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nu(){let n=0,e=0,t=0,i=0;function r(s,a,o,c){n=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let u=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,p*=h,r(a,o,u,p)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var Vd=new b,Hd=new b,Nc=new nu,Fc=new nu,Oc=new nu,qn=class extends hi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new b){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=r[(l-1)%s]:(Hd.subVectors(r[0],r[1]).add(r[0]),o=Hd);let d=r[l%s],u=r[(l+1)%s];if(this.closed||l+2<s?c=r[(l+2)%s]:(Vd.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Vd),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(c),p);m<1e-4&&(m=1),f<1e-4&&(f=m),x<1e-4&&(x=m),Nc.initNonuniformCatmullRom(o.x,d.x,u.x,c.x,f,m,x),Fc.initNonuniformCatmullRom(o.y,d.y,u.y,c.y,f,m,x),Oc.initNonuniformCatmullRom(o.z,d.z,u.z,c.z,f,m,x)}else this.curveType==="catmullrom"&&(Nc.initCatmullRom(o.x,d.x,u.x,c.x,this.tension),Fc.initCatmullRom(o.y,d.y,u.y,c.y,this.tension),Oc.initCatmullRom(o.z,d.z,u.z,c.z,this.tension));return i.set(Nc.calc(h),Fc.calc(h),Oc.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new b().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wd(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function Os(n,e,t,i){return(function(r,s){let a=1-r;return a*a*s})(n,e)+(function(r,s){return 2*(1-r)*r*s})(n,t)+(function(r,s){return r*r*s})(n,i)}function Bs(n,e,t,i,r){return(function(s,a){let o=1-s;return o*o*o*a})(n,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(n,t)+(function(s,a){return 3*(1-s)*s*s*a})(n,i)+(function(s,a){return s*s*s*a})(n,r)}var Js=class extends hi{constructor(e=new Q,t=new Q,i=new Q,r=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Q){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Bs(e,r.x,s.x,a.x,o.x),Bs(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lo=class extends hi{constructor(e=new b,t=new b,i=new b,r=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new b){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Bs(e,r.x,s.x,a.x,o.x),Bs(e,r.y,s.y,a.y,o.y),Bs(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ks=class extends hi{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends hi{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$s=class extends hi{constructor(e=new Q,t=new Q,i=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Q){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Os(e,r.x,s.x,a.x),Os(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qs=class extends hi{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Os(e,r.x,s.x,a.x),Os(e,r.y,s.y,a.y),Os(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return i.set(Wd(o,c.x,l.x,h.x,d.x),Wd(o,c.y,l.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Q().fromArray(r))}return this}},Uo=Object.freeze({__proto__:null,ArcCurve:Io,CatmullRomCurve3:qn,CubicBezierCurve:Js,CubicBezierCurve3:Lo,EllipseCurve:is,LineCurve:Ks,LineCurve3:Do,QuadraticBezierCurve:$s,QuadraticBezierCurve3:Qs,SplineCurve:ea}),No=class extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Uo[r.type]().fromJSON(r))}return this}},ta=class extends No{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ks(this.currentPoint.clone(),new Q(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new $s(this.currentPoint.clone(),new Q(e,t),new Q(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new Js(this.currentPoint.clone(),new Q(e,t),new Q(i,r),new Q(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ea(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,s,a,o,c),this}absellipse(e,t,i,r,s,a,o,c){let l=new is(e,t,i,r,s,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ia=class extends ta{constructor(e){super(e),this.uuid=_r(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new ta().fromJSON(r))}return this}};function Gf(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Xd(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=(function(h,d,u,p){let f=[];for(let m=0,x=d.length;m<x;m++){let g=Xd(h,d[m]*p,m<x-1?d[m+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),f.push(Zf(g))}f.sort(jf);for(let m=0;m<f.length;m++)u=qf(f[m],u);return u})(n,e,s,t)),n.length>80*t){o=n[0],c=n[1];let h=o,d=c;for(let u=t;u<r;u+=t){let p=n[u],f=n[u+1];p<o&&(o=p),f<c&&(c=f),p>h&&(h=p),f>d&&(d=f)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return na(s,a,t,o,c,l,0),a}function Xd(n,e,t,i,r){let s;if(r===(function(a,o,c,l){let h=0;for(let d=o,u=c-l;d<c;d+=l)h+=(a[u]-a[d])*(a[d+1]+a[u+1]),u=d;return h})(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=jd(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=jd(a/i|0,n[a],n[a+1],s);return s&&ns(s,s.next)&&(sa(s),s=s.next),s}function ur(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!ns(i,i.next)&&ft(i.prev,i,i.next)!==0)i=i.next;else{if(sa(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function na(n,e,t,i,r,s,a){if(!n)return;!a&&s&&(function(c,l,h,d){let u=c;do u.z===0&&(u.z=Yc(u.x,u.y,l,h,d)),u.prevZ=u.prev,u.nextZ=u.next,u=u.next;while(u!==c);u.prevZ.nextZ=null,u.prevZ=null,(function(p){let f,m=1;do{let x,g=p;p=null;let v=null;for(f=0;g;){f++;let _=g,y=0;for(let M=0;M<m&&(y++,_=_.nextZ,_);M++);let T=m;for(;y>0||T>0&&_;)y!==0&&(T===0||!_||g.z<=_.z)?(x=g,g=g.nextZ,y--):(x=_,_=_.nextZ,T--),v?v.nextZ=x:p=x,x.prevZ=v,v=x;g=_}v.nextZ=null,m*=2}while(f>1)})(u)})(n,i,r,s);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(s?Hf(n,i,r,s):Vf(n))e.push(c.i,n.i,l.i),sa(n),n=l.next,o=l.next;else if((n=l)===o){a?a===1?na(n=Wf(ur(n),e),e,t,i,r,s,2):a===2&&Xf(n,e,t,i,r,s):na(ur(n),e,t,i,r,s,1);break}}}function Vf(n){let e=n.prev,t=n,i=n.next;if(ft(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(r,s,a),d=Math.min(o,c,l),u=Math.max(r,s,a),p=Math.max(o,c,l),f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&Ns(r,o,s,c,a,l,f.x,f.y)&&ft(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Hf(n,e,t,i){let r=n.prev,s=n,a=n.next;if(ft(r,s,a)>=0)return!1;let o=r.x,c=s.x,l=a.x,h=r.y,d=s.y,u=a.y,p=Math.min(o,c,l),f=Math.min(h,d,u),m=Math.max(o,c,l),x=Math.max(h,d,u),g=Yc(p,f,e,t,i),v=Yc(m,x,e,t,i),_=n.prevZ,y=n.nextZ;for(;_&&_.z>=g&&y&&y.z<=v;){if(_.x>=p&&_.x<=m&&_.y>=f&&_.y<=x&&_!==r&&_!==a&&Ns(o,h,c,d,l,u,_.x,_.y)&&ft(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=m&&y.y>=f&&y.y<=x&&y!==r&&y!==a&&Ns(o,h,c,d,l,u,y.x,y.y)&&ft(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=g;){if(_.x>=p&&_.x<=m&&_.y>=f&&_.y<=x&&_!==r&&_!==a&&Ns(o,h,c,d,l,u,_.x,_.y)&&ft(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=m&&y.y>=f&&y.y<=x&&y!==r&&y!==a&&Ns(o,h,c,d,l,u,y.x,y.y)&&ft(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Wf(n,e){let t=n;do{let i=t.prev,r=t.next.next;!ns(i,r)&&Wp(i,t,t.next,r)&&ra(i,r)&&ra(r,i)&&(e.push(i.i,t.i,r.i),sa(t),sa(t.next),t=n=r),t=t.next}while(t!==n);return ur(t)}function Xf(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jf(a,o)){let c=Xp(a,o);return a=ur(a,a.next),c=ur(c,c.next),na(a,e,t,i,r,s,0),void na(c,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function jf(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function qf(n,e){let t=(function(r,s){let a=s,o=r.x,c=r.y,l,h=-1/0;if(ns(r,a))return a;do{if(ns(r,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let m=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>h&&(h=m,l=a.x<a.next.x?a:a.next,m===o))return l}a=a.next}while(a!==s);if(!l)return null;let d=l,u=l.x,p=l.y,f=1/0;a=l;do{if(o>=a.x&&a.x>=u&&o!==a.x&&Hp(c<p?o:h,c,u,p,c<p?h:o,c,a.x,a.y)){let m=Math.abs(c-a.y)/(o-a.x);ra(a,r)&&(m<f||m===f&&(a.x>l.x||a.x===l.x&&Yf(l,a)))&&(l=a,f=m)}a=a.next}while(a!==d);return l})(n,e);if(!t)return e;let i=Xp(t,n);return ur(i,i.next),ur(t,t.next)}function Yf(n,e){return ft(n.prev,n,e.prev)<0&&ft(e.next,n,n.next)<0}function Yc(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Zf(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Hp(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Ns(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&Hp(n,e,t,i,r,s,a,o)}function Jf(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&Wp(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1})(n,e)&&(ra(n,e)&&ra(e,n)&&(function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(n,e)&&(ft(n.prev,n,e.prev)||ft(n,e.prev,e))||ns(n,e)&&ft(n.prev,n,n.next)>0&&ft(e.prev,e,e.next)>0)}function ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ns(n,e){return n.x===e.x&&n.y===e.y}function Wp(n,e,t,i){let r=co(ft(n,e,t)),s=co(ft(n,e,i)),a=co(ft(t,i,n)),o=co(ft(t,i,e));return r!==s&&a!==o||!(r!==0||!lo(n,t,e))||!(s!==0||!lo(n,i,e))||!(a!==0||!lo(t,n,i))||!(o!==0||!lo(t,e,i))}function lo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function co(n){return n>0?1:n<0?-1:0}function ra(n,e){return ft(n.prev,n,n.next)<0?ft(n,e,n.next)>=0&&ft(n,n.prev,e)>=0:ft(n,e,n.prev)<0||ft(n,n.next,e)<0}function Xp(n,e){let t=Zc(n.i,n.x,n.y),i=Zc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function jd(n,e,t,i){let r=Zc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function sa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Zc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Jc=class{static triangulate(e,t,i=2){return Gf(e,t,i)}},_i=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];qd(e),Yd(i,e);let a=e.length;t.forEach(qd);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Yd(i,t[c]);let o=Jc.triangulate(i,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function qd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Yd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Fo=class n extends Pe{constructor(e=new ia([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Kf,_,y,T,M,P,N=!1;if(g){_=g.getSpacedPoints(h),N=!0,u=!1;let C=!!g.isCatmullRomCurve3&&g.closed;y=g.computeFrenetFrames(h,C),T=new b,M=new b,P=new b}u||(x=0,p=0,f=0,m=0);let I=o.extractPoints(l),L=I.shape,B=I.holes;if(!_i.isClockWise(L)){L=L.reverse();for(let C=0,O=B.length;C<O;C++){let S=B[C];_i.isClockWise(S)&&(B[C]=S.reverse())}}function F(C){let O=10000000000000001e-36,S=C[0];for(let U=1;U<=C.length;U++){let D=U%C.length,A=C[D],G=A.x-S.x,X=A.y-S.y,Z=G*G+X*X,ae=Math.max(Math.abs(A.x),Math.abs(A.y),Math.abs(S.x),Math.abs(S.y));Z<=O*ae*ae?(C.splice(D,1),U--):S=A}}F(L),B.forEach(F);let j=B.length,H=L;for(let C=0;C<j;C++){let O=B[C];L=L.concat(O)}function V(C,O,S){return O||Re("ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(O,S)}let Y=L.length;function W(C,O,S){let U,D,A,G=C.x-O.x,X=C.y-O.y,Z=S.x-C.x,ae=S.y-C.y,Se=G*G+X*X,be=G*ae-X*Z;if(Math.abs(be)>Number.EPSILON){let me=Math.sqrt(Se),Le=Math.sqrt(Z*Z+ae*ae),ee=O.x-X/me,le=O.y+G/me,se=((S.x-ae/Le-ee)*ae-(S.y+Z/Le-le)*Z)/(G*ae-X*Z);U=ee+G*se-C.x,D=le+X*se-C.y;let ve=U*U+D*D;if(ve<=2)return new Q(U,D);A=Math.sqrt(ve/2)}else{let me=!1;G>Number.EPSILON?Z>Number.EPSILON&&(me=!0):G<-Number.EPSILON?Z<-Number.EPSILON&&(me=!0):Math.sign(X)===Math.sign(ae)&&(me=!0),me?(U=-X,D=G,A=Math.sqrt(Se)):(U=G,D=X,A=Math.sqrt(Se/2))}return new Q(U/A,D/A)}let ne=[];for(let C=0,O=H.length,S=O-1,U=C+1;C<O;C++,S++,U++)S===O&&(S=0),U===O&&(U=0),ne[C]=W(H[C],H[S],H[U]);let ge=[],Ce,ye,Me=ne.concat();for(let C=0,O=j;C<O;C++){let S=B[C];Ce=[];for(let U=0,D=S.length,A=D-1,G=U+1;U<D;U++,A++,G++)A===D&&(A=0),G===D&&(G=0),Ce[U]=W(S[U],S[A],S[G]);ge.push(Ce),Me=Me.concat(Ce)}if(x===0)ye=_i.triangulateShape(H,B);else{let C=[],O=[];for(let S=0;S<x;S++){let U=S/x,D=p*Math.cos(U*Math.PI/2),A=f*Math.sin(U*Math.PI/2)+m;for(let G=0,X=H.length;G<X;G++){let Z=V(H[G],ne[G],A);xe(Z.x,Z.y,-D),U===0&&C.push(Z)}for(let G=0,X=j;G<X;G++){let Z=B[G];Ce=ge[G];let ae=[];for(let Se=0,be=Z.length;Se<be;Se++){let me=V(Z[Se],Ce[Se],A);xe(me.x,me.y,-D),U===0&&ae.push(me)}U===0&&O.push(ae)}}ye=_i.triangulateShape(C,O)}let te=ye.length,pe=f+m;for(let C=0;C<Y;C++){let O=u?V(L[C],Me[C],pe):L[C];N?(M.copy(y.normals[0]).multiplyScalar(O.x),T.copy(y.binormals[0]).multiplyScalar(O.y),P.copy(_[0]).add(M).add(T),xe(P.x,P.y,P.z)):xe(O.x,O.y,0)}for(let C=1;C<=h;C++)for(let O=0;O<Y;O++){let S=u?V(L[O],Me[O],pe):L[O];N?(M.copy(y.normals[C]).multiplyScalar(S.x),T.copy(y.binormals[C]).multiplyScalar(S.y),P.copy(_[C]).add(M).add(T),xe(P.x,P.y,P.z)):xe(S.x,S.y,d/h*C)}for(let C=x-1;C>=0;C--){let O=C/x,S=p*Math.cos(O*Math.PI/2),U=f*Math.sin(O*Math.PI/2)+m;for(let D=0,A=H.length;D<A;D++){let G=V(H[D],ne[D],U);xe(G.x,G.y,d+S)}for(let D=0,A=B.length;D<A;D++){let G=B[D];Ce=ge[D];for(let X=0,Z=G.length;X<Z;X++){let ae=V(G[X],Ce[X],U);N?xe(ae.x,ae.y+_[h-1].y,_[h-1].x+S):xe(ae.x,ae.y,d+S)}}}function ue(C,O){let S=C.length;for(;--S>=0;){let U=S,D=S-1;D<0&&(D=C.length-1);for(let A=0,G=h+2*x;A<G;A++){let X=Y*A,Z=Y*(A+1);$(O+U+X,O+D+X,O+D+Z,O+U+Z)}}}function xe(C,O,S){c.push(C),c.push(O),c.push(S)}function ke(C,O,S){R(C),R(O),R(S);let U=r.length/3,D=v.generateTopUV(i,r,U-3,U-2,U-1);w(D[0]),w(D[1]),w(D[2])}function $(C,O,S,U){R(C),R(O),R(U),R(O),R(S),R(U);let D=r.length/3,A=v.generateSideWallUV(i,r,D-6,D-3,D-2,D-1);w(A[0]),w(A[1]),w(A[3]),w(A[1]),w(A[2]),w(A[3])}function R(C){r.push(c[3*C+0]),r.push(c[3*C+1]),r.push(c[3*C+2])}function w(C){s.push(C.x),s.push(C.y)}(function(){let C=r.length/3;if(u){let O=0,S=Y*O;for(let U=0;U<te;U++){let D=ye[U];ke(D[2]+S,D[1]+S,D[0]+S)}O=h+2*x,S=Y*O;for(let U=0;U<te;U++){let D=ye[U];ke(D[0]+S,D[1]+S,D[2]+S)}}else{for(let O=0;O<te;O++){let S=ye[O];ke(S[2],S[1],S[0])}for(let O=0;O<te;O++){let S=ye[O];ke(S[0]+Y*h,S[1]+Y*h,S[2]+Y*h)}}i.addGroup(C,r.length/3-C,0)})(),(function(){let C=r.length/3,O=0;ue(H,O),O+=H.length;for(let S=0,U=B.length;S<U;S++){let D=B[S];ue(D,O),O+=D.length}i.addGroup(C,r.length/3-C,1)})()}this.setAttribute("position",new ce(r,3)),this.setAttribute("uv",new ce(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Uo[r.type]().fromJSON(r)),new n(i,e.options)}},Kf={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],c=e[3*i+1],l=e[3*r],h=e[3*r+1];return[new Q(s,a),new Q(o,c),new Q(l,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*i],h=e[3*i+1],d=e[3*i+2],u=e[3*r],p=e[3*r+1],f=e[3*r+2],m=e[3*s],x=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new Q(a,1-c),new Q(l,1-d),new Q(u,1-f),new Q(m,1-g)]:[new Q(o,1-c),new Q(h,1-d),new Q(p,1-f),new Q(x,1-g)]}},rs=class n extends jn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Oo=class n extends Pe{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ge(r,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new b,u=new Q,p=new b,f=new b,m=new b,x=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:x=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-x,p.z=0*g,m.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(m.x,m.y,m.z);break;default:x=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-x,p.z=0*g,f.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),c.push(p.x,p.y,p.z),m.copy(f)}for(let v=0;v<=t;v++){let _=i+v*h*r,y=Math.sin(_),T=Math.cos(_);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*y,d.y=e[M].y,d.z=e[M].x*T,a.push(d.x,d.y,d.z),u.x=v/t,u.y=M/(e.length-1),o.push(u.x,u.y);let P=c[3*M+0]*y,N=c[3*M+1],I=c[3*M+0]*T;l.push(P,N,I)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,T=y,M=y+e.length,P=y+e.length+1,N=y+1;s.push(T,M,N),s.push(P,N,M)}this.setIndex(s),this.setAttribute("position",new ce(a,3)),this.setAttribute("uv",new ce(o,2)),this.setAttribute("normal",new ce(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Bo=class n extends jn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},on=class n extends Pe{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,d=e/o,u=t/c,p=[],f=[],m=[],x=[];for(let g=0;g<h;g++){let v=g*u-a;for(let _=0;_<l;_++){let y=_*d-s;f.push(y,-v,0),m.push(0,0,1),x.push(_/o),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let _=v+l*g,y=v+l*(g+1),T=v+1+l*(g+1),M=v+1+l*g;p.push(_,y,M),p.push(y,T,M)}this.setIndex(p),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(m,3)),this.setAttribute("uv",new ce(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ss=class n extends Pe{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],c=[],l=[],h=[],d=e,u=(t-e)/(r=Math.max(1,r)),p=new b,f=new Q;for(let m=0;m<=r;m++){for(let x=0;x<=i;x++){let g=s+x/i*a;p.x=d*Math.cos(g),p.y=d*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let m=0;m<r;m++){let x=m*(i+1);for(let g=0;g<i;g++){let v=g+x,_=v,y=v+i+1,T=v+i+2,M=v+1;o.push(_,y,M),o.push(y,T,M)}}this.setIndex(o),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},zo=class n extends Pe{constructor(e=new ia([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let d=r.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;_i.isClockWise(p)===!1&&(p=p.reverse());for(let x=0,g=f.length;x<g;x++){let v=f[x];_i.isClockWise(v)===!0&&(f[x]=v.reverse())}let m=_i.triangulateShape(p,f);for(let x=0,g=f.length;x<g;x++){let v=f[x];p=p.concat(v)}for(let x=0,g=p.length;x<g;x++){let v=p[x];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let x=0,g=m.length;x<g;x++){let v=m[x],_=v[0]+d,y=v[1]+d,T=v[2]+d;i.push(_,y,T),c+=3}}this.setIndex(i),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(s,3)),this.setAttribute("uv",new ce(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},Ut=class n extends Pe{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new b,u=new b,p=[],f=[],m=[],x=[];for(let g=0;g<=i;g++){let v=[],_=g/i,y=a+_*o,T=e*Math.cos(y),M=Math.sqrt(e*e-T*T),P=0;g===0&&a===0?P=.5/t:g===i&&c===Math.PI&&(P=-.5/t);for(let N=0;N<=t;N++){let I=N/t,L=r+I*s;d.x=-M*Math.cos(L),d.y=T,d.z=M*Math.sin(L),f.push(d.x,d.y,d.z),u.copy(d).normalize(),m.push(u.x,u.y,u.z),x.push(I+P,1-_),v.push(l++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let _=h[g][v+1],y=h[g][v],T=h[g+1][v],M=h[g+1][v+1];(g!==0||a>0)&&p.push(_,y,M),(g!==i-1||c<Math.PI)&&p.push(y,T,M)}this.setIndex(p),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(m,3)),this.setAttribute("uv",new ce(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ko=class n extends jn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Si=class n extends Pe{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let c=[],l=[],h=[],d=[],u=new b,p=new b,f=new b;for(let m=0;m<=i;m++){let x=a+m/i*o;for(let g=0;g<=r;g++){let v=g/r*s;p.x=(e+t*Math.cos(x))*Math.cos(v),p.y=(e+t*Math.cos(x))*Math.sin(v),p.z=t*Math.sin(x),l.push(p.x,p.y,p.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(p,u).normalize(),h.push(f.x,f.y,f.z),d.push(g/r),d.push(m/i)}}for(let m=1;m<=i;m++)for(let x=1;x<=r;x++){let g=(r+1)*m+x-1,v=(r+1)*(m-1)+x-1,_=(r+1)*(m-1)+x,y=(r+1)*m+x;c.push(g,v,y),c.push(v,_,y)}this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Go=class n extends Pe{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],c=[],l=[],h=[],d=new b,u=new b,p=new b,f=new b,m=new b,x=new b,g=new b;for(let _=0;_<=i;++_){let y=_/i*s*Math.PI*2;v(y,s,a,e,p),v(y+.01,s,a,e,f),x.subVectors(f,p),g.addVectors(f,p),m.crossVectors(x,g),g.crossVectors(m,x),m.normalize(),g.normalize();for(let T=0;T<=r;++T){let M=T/r*Math.PI*2,P=-t*Math.cos(M),N=t*Math.sin(M);d.x=p.x+(P*g.x+N*m.x),d.y=p.y+(P*g.y+N*m.y),d.z=p.z+(P*g.z+N*m.z),c.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),l.push(u.x,u.y,u.z),h.push(_/i),h.push(T/r)}}for(let _=1;_<=i;_++)for(let y=1;y<=r;y++){let T=(r+1)*(_-1)+(y-1),M=(r+1)*_+(y-1),P=(r+1)*_+y,N=(r+1)*(_-1)+y;o.push(T,M,N),o.push(M,P,N)}function v(_,y,T,M,P){let N=Math.cos(_),I=Math.sin(_),L=T/y*_,B=Math.cos(L);P.x=M*(2+B)*.5*N,P.y=M*(2+B)*I*.5,P.z=M*Math.sin(L)*.5}this.setIndex(o),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Yn=class n extends Pe{constructor(e=new Qs(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,c=new b,l=new Q,h=new b,d=[],u=[],p=[],f=[];function m(x){h=e.getPointAt(x/t,h);let g=a.normals[x],v=a.binormals[x];for(let _=0;_<=r;_++){let y=_/r*Math.PI*2,T=Math.sin(y),M=-Math.cos(y);c.x=M*g.x+T*v.x,c.y=M*g.y+T*v.y,c.z=M*g.z+T*v.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,d.push(o.x,o.y,o.z)}}(function(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),(function(){for(let x=0;x<=t;x++)for(let g=0;g<=r;g++)l.x=x/t,l.y=g/r,p.push(l.x,l.y)})(),(function(){for(let x=1;x<=t;x++)for(let g=1;g<=r;g++){let v=(r+1)*(x-1)+(g-1),_=(r+1)*x+(g-1),y=(r+1)*x+g,T=(r+1)*(x-1)+g;f.push(v,_,T),f.push(_,y,T)}})()})(),this.setIndex(f),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Vo=class extends Pe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new b,s=new b;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let d=c[l],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let m=0;m<3;m++){let x=o.getX(p+m),g=o.getX(p+(m+1)%3);r.fromBufferAttribute(a,x),s.fromBufferAttribute(a,g),Zd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,d=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),Zd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ce(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Zd(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var hx=Object.freeze({__proto__:null,BoxGeometry:Fi,CapsuleGeometry:Eo,CircleGeometry:Ao,ConeGeometry:Co,CylinderGeometry:Oi,DodecahedronGeometry:Ro,EdgesGeometry:Po,ExtrudeGeometry:Fo,IcosahedronGeometry:rs,LatheGeometry:Oo,OctahedronGeometry:Bo,PlaneGeometry:on,PolyhedronGeometry:jn,RingGeometry:ss,ShapeGeometry:zo,SphereGeometry:Ut,TetrahedronGeometry:ko,TorusGeometry:Si,TorusKnotGeometry:Go,TubeGeometry:Yn,WireframeGeometry:Vo});function yr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(Jd(r))r.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Jd(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Jt(n){let e={};for(let t=0;t<n.length;t++){let i=yr(n[t]);for(let r in i)e[r]=i[r]}return e}function Jd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ru(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var Ml={clone:yr,merge:Jt},vt=class extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new ie().setHex(r.value);break;case"v2":this.uniforms[i].value=new Q().fromArray(r.value);break;case"v3":this.uniforms[i].value=new b().fromArray(r.value);break;case"v4":this.uniforms[i].value=new at().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new we().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ho=class extends vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xt=class extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},An=class extends xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Zn=class extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wo=class extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ho(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}var Jn=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xo=class extends Jn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gc,endingEnd:Gc}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vc:s=e,o=2*t-i;break;case Hc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Vc:a=e,c=2*i-t;break;case Hc:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}let l=.5*(i-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(i-t)/(r-t),m=f*f,x=m*f,g=-u*x+2*u*m-u*f,v=(1+u)*x+(-1.5-2*u)*m+(-.5+u)*f+1,_=(-1-p)*x+(1.5+p)*m+.5*f,y=p*x-p*m;for(let T=0;T!==o;++T)s[T]=g*a[h+T]+v*a[l+T]+_*a[c+T]+y*a[d+T];return s}},jo=class extends Jn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(r-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*d+a[c+u]*h;return s}},qo=class extends Jn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Yo=class extends Jn{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let f=(i-t)/(r-t),m=1-f;for(let x=0;x!==o;++x)s[x]=a[l+x]*m+a[c+x]*f;return s}let u=2*o,p=e-1;for(let f=0;f!==o;++f){let m=a[l+f],x=a[c+f],g=p*u+2*f,v=d[g],_=d[g+1],y=e*u+2*f,T=h[y],M=h[y+1],P,N,I,L,B,F=(i-t)/(r-t);for(let j=0;j<8;j++){P=F*F,N=P*F,I=1-F,L=I*I,B=L*I;let H=B*t+3*L*F*v+3*I*P*T+N*r-i;if(Math.abs(H)<1e-10)break;let V=3*L*(v-t)+6*I*F*(T-v)+3*P*(r-T);if(Math.abs(V)<1e-10)break;F-=H/V,F=Math.max(0,Math.min(1,F))}s[f]=B*m+3*L*F*_+3*I*P*M+N*x}return s}},ci=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ho(t,this.TimeBufferType),this.values=ho(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ho(e.times,Array),values:ho(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Yo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case zs:t=this.InterpolantFactoryMethodDiscrete;break;case vo:t=this.InterpolantFactoryMethodLinear;break;case mo:t=this.InterpolantFactoryMethodSmooth;break;case kc:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Ae("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zs;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return mo;case this.InterpolantFactoryMethodBezier:return kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Re("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Re("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Re("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Re("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Mf(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){Re("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===mo,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ci.prototype.ValueTypeName="",ci.prototype.TimeBufferType=Float32Array,ci.prototype.ValueBufferType=Float32Array,ci.prototype.DefaultInterpolation=vo;var Vn=class extends ci{constructor(e,t,i){super(e,t,i)}};Vn.prototype.ValueTypeName="bool",Vn.prototype.ValueBufferType=Array,Vn.prototype.DefaultInterpolation=zs,Vn.prototype.InterpolantFactoryMethodLinear=void 0,Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends ci{constructor(e,t,i,r){super(e,t,i,r)}};Zo.prototype.ValueTypeName="color";var Jo=class extends ci{constructor(e,t,i,r){super(e,t,i,r)}};Jo.prototype.ValueTypeName="number";var Ko=class extends Jn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)Dt.slerpFlat(s,0,a,l-o,a,l,c);return s}},aa=class extends ci{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Ko(this.times,this.values,this.getValueSize(),e)}};aa.prototype.ValueTypeName="quaternion",aa.prototype.InterpolantFactoryMethodSmooth=void 0;var Hn=class extends ci{constructor(e,t,i){super(e,t,i)}};Hn.prototype.ValueTypeName="string",Hn.prototype.ValueBufferType=Array,Hn.prototype.DefaultInterpolation=zs,Hn.prototype.InterpolantFactoryMethodLinear=void 0,Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends ci{constructor(e,t,i,r){super(e,t,i,r)}};$o.prototype.ValueTypeName="vector";var fo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Kd(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Kd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Kd(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Qo=class{constructor(e,t,i){let r=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){c++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,c),o===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],f=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jp=new Qo,as=class{constructor(e){this.manager=e!==void 0?e:jp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};as.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=new WeakMap,el=class extends as{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=fo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Hr.get(a);d===void 0&&(d=[],Hr.set(a,d)),d.push({onLoad:t,onError:r})}return a}let o=Jr("img");function c(){h(),t&&t(this);let d=Hr.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onLoad&&p.onLoad(this)}Hr.delete(this),s.manager.itemEnd(e)}function l(d){h(),r&&r(d),fo.remove(`image:${e}`);let u=Hr.get(this)||[];for(let p=0;p<u.length;p++){let f=u[p];f.onError&&f.onError(d)}Hr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),fo.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var oa=class extends as{constructor(e){super(e)}load(e,t,i,r){let s=new ti,a=new el(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},dr=class extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},la=class extends dr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bc=new we,$d=new b,Qd=new b,ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new En,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;$d.setFromMatrixPosition(e.matrixWorld),t.position.copy($d),Qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qd),t.updateMatrixWorld(),Bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Zr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uo=new b,po=new Dt,tn=new b,Kn=class extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uo,po,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uo,po,tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(uo,po,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uo,po,tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gn=new b,ep=new Q,tp=new Q,zt=class extends Kn{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*cr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*jr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*cr*Math.atan(Math.tan(.5*jr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,ep,tp),t.subVectors(tp,ep)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*jr*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Kc=class extends ca{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=2*cr*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;i===t.fov&&r===t.aspect&&s===t.far||(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ha=class extends dr{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Kc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},$c=class extends ca{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}},os=class extends dr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $c}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ls=class extends Kn{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qc=class extends ca{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Qc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ux=new we,dx=new we,px=new we;var Wr=-90,tl=class extends ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new zt(Wr,1,e,t);r.layers=this.layers,this.add(r);let s=new zt(Wr,1,e,t);s.layers=this.layers,this.add(s);let a=new zt(Wr,1,e,t);a.layers=this.layers,this.add(a);let o=new zt(Wr,1,e,t);o.layers=this.layers,this.add(o);let c=new zt(Wr,1,e,t);c.layers=this.layers,this.add(c);let l=new zt(Wr,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Sn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Zr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;x=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},il=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var mx=new b,fx=new Dt,gx=new b,vx=new b,xx=new b;var _x=new b,yx=new Dt,Mx=new b,Sx=new b;var su="\\[\\]\\.:\\/",$f=new RegExp("["+su+"]","g"),zc="[^"+su+"]",Qf="[^"+su.replace("\\.","")+"]",eg=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",zc)+/(WCOD+)?/.source.replace("WCOD",Qf)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc)+"$"),tg=["material","materials","bones","map"],ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($f,"")}static parseTrackName(e){let t=eg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);tg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Ae("PropertyBinding: No target node found for track: "+this.path+".");if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material)return void Re("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Re("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Re("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(l!==void 0){if(e[l]===void 0)return void Re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[r];if(a===void 0)return void Re("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=class{constructor(n,e,t){let i=t||ut.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray],ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bx=new Float32Array(1);var Tx=new we;var uu=class uu{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};uu.prototype.isMatrix2=!0;var eh=uu,wx=new Q;var Ex=new b,Ax=new b,Cx=new b,Rx=new b,Px=new b,Ix=new b,Lx=new b;var Dx=new b;var Ux=new b,Nx=new we,Fx=new we;var Ox=new b,Bx=new ie,zx=new ie;var kx=new b,Gx=new b,Vx=new b;var Hx=new b,Wx=new Kn;var Xx=new ni;var jx=new b;function au(n,e,t,i){let r=(function(s){switch(s){case ii:case xh:return{byteLength:1,components:1};case ps:case _h:case Ti:return{byteLength:2,components:1};case cl:case hl:return{byteLength:2,components:4};case zi:case ll:case bi:return{byteLength:4,components:1};case yh:case Mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)})(i);switch(t){case 1021:return n*e;case ul:case dl:return n*e/r.components*r.byteLength;case 1030:case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case ki:case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}})),typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fm(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ng(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=n.createBuffer(),d;if(n.bindBuffer(a,h),n.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=n.HALF_FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=n.SHORT;else if(o instanceof Uint32Array)d=n.UNSIGNED_INT;else if(o instanceof Int32Array)d=n.INT;else if(o instanceof Int8Array)d=n.BYTE;else if(o instanceof Uint8Array)d=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=n.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(n.bindBuffer(o,s),l.length===0)n.bufferSubData(o,0,c);else{l.sort((d,u)=>d.start-u.start);let h=0;for(let d=1;d<l.length;d++){let u=l[h],p=l[d];p.start<=u.start+u.count+1?u.count=Math.max(u.count,p.start+p.count-u.start):(++h,l[h]=p)}l.length=h+1;for(let d=0,u=l.length;d<u;d++){let p=l[d];n.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}var Ve={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},de={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new b},probesMax:{value:new b},probesResolution:{value:new b}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},dn={basic:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ie(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Jt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Jt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ie(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Jt([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Jt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Jt([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Jt([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Jt([de.common,de.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Jt([de.lights,de.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};dn.physical={uniforms:Jt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Sl={r:0,b:0,g:0},rg=new we,gm=new Fe;function sg(n,e,t,i,r,s){let a=new ie(0),o,c,l=r===!0?0:1,h=null,d=0,u=null;function p(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){let g=m.backgroundBlurriness>0;x=e.get(x,g)}return x}function f(m,x){m.getRGB(Sl,ru(n)),t.buffers.color.setClear(Sl.r,Sl.g,Sl.b,x,s)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,f(a,l)},render:function(m){let x=!1,g=p(m);g===null?f(a,l):g&&g.isColor&&(f(g,1),x=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(m,x){let g=p(x);g&&(g.isCubeTexture||g.mapping===ma)?(c===void 0&&(c=new Oe(new Fi(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:yr(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,_,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(x.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gm),c.material.toneMapped=qe.getTransfer(g.colorSpace)!==nt,h===g&&d===g.version&&u===n.toneMapping||(c.material.needsUpdate=!0,h=g,d=g.version,u=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(o===void 0&&(o=new Oe(new on(2,2),new vt({name:"BackgroundMaterial",uniforms:yr(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=g,o.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,o.material.toneMapped=qe.getTransfer(g.colorSpace)!==nt,g.matrixAutoUpdate===!0&&g.updateMatrix(),o.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&d===g.version&&u===n.toneMapping||(o.material.needsUpdate=!0,h=g,d=g.version,u=n.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function ag(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=l(null),s=r,a=!1;function o(g){return n.bindVertexArray(g)}function c(g){return n.deleteVertexArray(g)}function l(g){let v=[],_=[],y=[];for(let T=0;T<t;T++)v[T]=0,_[T]=0,y[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:_,attributeDivisors:y,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,_=g.length;v<_;v++)g[v]=0}function d(g){u(g,0)}function u(g,v){let _=s.newAttributes,y=s.enabledAttributes,T=s.attributeDivisors;_[g]=1,y[g]===0&&(n.enableVertexAttribArray(g),y[g]=1),T[g]!==v&&(n.vertexAttribDivisor(g,v),T[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let _=0,y=v.length;_<y;_++)v[_]!==g[_]&&(n.disableVertexAttribArray(_),v[_]=0)}function f(g,v,_,y,T,M,P){P===!0?n.vertexAttribIPointer(g,v,_,T,M):n.vertexAttribPointer(g,v,_,y,T,M)}function m(){x(),a=!0,s!==r&&(s=r,o(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,v,_,y,T){let M=!1,P=(function(N,I,L,B){let F=B.wireframe===!0,j=i[I.id];j===void 0&&(j={},i[I.id]=j);let H=N.isInstancedMesh===!0?N.id:0,V=j[H];V===void 0&&(V={},j[H]=V);let Y=V[L.id];Y===void 0&&(Y={},V[L.id]=Y);let W=Y[F];return W===void 0&&(W=l(n.createVertexArray()),Y[F]=W),W})(g,y,_,v);s!==P&&(s=P,o(s.object)),M=(function(N,I,L,B){let F=s.attributes,j=I.attributes,H=0,V=L.getAttributes();for(let Y in V)if(V[Y].location>=0){let W=F[Y],ne=j[Y];if(ne===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor)),W===void 0||W.attribute!==ne||ne&&W.data!==ne.data)return!0;H++}return s.attributesNum!==H||s.index!==B})(g,y,_,T),M&&(function(N,I,L,B){let F={},j=I.attributes,H=0,V=L.getAttributes();for(let Y in V)if(V[Y].location>=0){let W=j[Y];W===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(W=N.instanceColor));let ne={};ne.attribute=W,W&&W.data&&(ne.data=W.data),F[Y]=ne,H++}s.attributes=F,s.attributesNum=H,s.index=B})(g,y,_,T),T!==null&&e.update(T,n.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,(function(N,I,L,B){h();let F=B.attributes,j=L.getAttributes(),H=I.defaultAttributeValues;for(let V in j){let Y=j[V];if(Y.location>=0){let W=F[V];if(W===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(W=N.instanceColor)),W!==void 0){let ne=W.normalized,ge=W.itemSize,Ce=e.get(W);if(Ce===void 0)continue;let ye=Ce.buffer,Me=Ce.type,te=Ce.bytesPerElement,pe=Me===n.INT||Me===n.UNSIGNED_INT||W.gpuType===ll;if(W.isInterleavedBufferAttribute){let ue=W.data,xe=ue.stride,ke=W.offset;if(ue.isInstancedInterleavedBuffer){for(let $=0;$<Y.locationSize;$++)u(Y.location+$,ue.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let $=0;$<Y.locationSize;$++)d(Y.location+$);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let $=0;$<Y.locationSize;$++)f(Y.location+$,ge/Y.locationSize,Me,ne,xe*te,(ke+ge/Y.locationSize*$)*te,pe)}else{if(W.isInstancedBufferAttribute){for(let ue=0;ue<Y.locationSize;ue++)u(Y.location+ue,W.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ue=0;ue<Y.locationSize;ue++)d(Y.location+ue);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let ue=0;ue<Y.locationSize;ue++)f(Y.location+ue,ge/Y.locationSize,Me,ne,ge*te,ge/Y.locationSize*ue*te,pe)}}else if(H!==void 0){let ne=H[V];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(Y.location,ne);break;case 3:n.vertexAttrib3fv(Y.location,ne);break;case 4:n.vertexAttrib4fv(Y.location,ne);break;default:n.vertexAttrib1fv(Y.location,ne)}}}}p()})(g,v,_,y),T!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(T).buffer))},reset:m,resetDefaultState:x,dispose:function(){m();for(let g in i){let v=i[g];for(let _ in v){let y=v[_];for(let T in y){let M=y[T];for(let P in M)c(M[P].object),delete M[P];delete y[T]}}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let v=i[g.id];for(let _ in v){let y=v[_];for(let T in y){let M=y[T];for(let P in M)c(M[P].object),delete M[P];delete y[T]}}delete i[g.id]},releaseStatesOfObject:function(g){for(let v in i){let _=i[v],y=g.isInstancedMesh===!0?g.id:0,T=_[y];if(T!==void 0){for(let M in T){let P=T[M];for(let N in P)c(P[N].object),delete P[N];delete T[M]}delete _[y],Object.keys(_).length===0&&delete i[v]}}},releaseStatesOfProgram:function(g){for(let v in i){let _=i[v];for(let y in _){let T=_[y];if(T[g.id]===void 0)continue;let M=T[g.id];for(let P in M)c(M[P].object),delete M[P];delete T[g.id]}}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:p}}function og(n,e,t){let i;this.setMode=function(r){i=r},this.render=function(r,s){n.drawArrays(i,r,s),t.update(s,i,1)},this.renderInstances=function(r,s,a){a!==0&&(n.drawArraysInstanced(i,r,s,a),t.update(s,i,a))},this.renderMultiDraw=function(r,s,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,r,0,s,0,a);let o=0;for(let c=0;c<a;c++)o+=s[c];t.update(o,i,1)}}function lg(n,e,t,i){let r;function s(h){if(h==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(Ae("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");return t.reversedDepthBuffer===!0&&l===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(h){return h===ki||i.convert(h)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let d=h===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==ii&&i.convert(h)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==bi&&!d)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function cg(n){let e=this,t=null,i=0,r=!1,s=!1,a=new nn,o=new Fe,c={value:null,needsUpdate:!1};function l(h,d,u,p){let f=h!==null?h.length:0,m=null;if(f!==0){if(m=c.value,p!==!0||m===null){let x=u+4*f,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<x)&&(m=new Float32Array(x));for(let v=0,_=u;v!==f;++v,_+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||i!==0||r;return r=d,i=h.length,u},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=l(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,x=n.get(h);if(!r||p===null||p.length===0||s&&!m)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=s?0:i,v=4*g,_=x.clippingState||null;c.value=_,_=l(p,d,v,u);for(let y=0;y!==v;++y)_[y]=t[y];x.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}gm.set(-1,0,0,0,1,0,0,0,1);var qp=[.125,.215,.35,.446,.526,.582],xa=20,_a=new ls,Yp=new ie,du=null,pu=0,mu=0,fu=!1,hg=new b,vs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=hg}=s;du=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(du,pu,mu),this._renderer.xr.enabled=fu,e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),du=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Ti,format:ki,colorSpace:lr,depthBuffer:!1},r=Zp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zp(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,d=a-4+1+qp.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);o.push(p);let f=1/p;u>a-4?f=qp[u-a+4-1]:u===0&&(f=0),c.push(f);let m=1/(p-2),x=-m,g=1+m,v=[x,x,g,x,g,g,x,x,g,g,x,g],_=6,y=6,T=3,M=2,P=1,N=new Float32Array(T*y*_),I=new Float32Array(M*y*_),L=new Float32Array(P*y*_);for(let F=0;F<_;F++){let j=F%3*2/3-1,H=F>2?0:-1,V=[j,H,0,j+2/3,H,0,j+2/3,H+1,0,j,H,0,j+2/3,H+1,0,j,H+1,0];N.set(V,T*y*F),I.set(v,M*y*F);let Y=[F,F,F,F,F,F];L.set(Y,P*y*F)}let B=new Pe;B.setAttribute("position",new It(N,T)),B.setAttribute("uv",new It(I,M)),B.setAttribute("faceIndex",new It(L,P)),l.push(new Oe(B,null)),h>4&&h--}return{lodMeshes:l,sizeLods:o,sigmas:c}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(xa),h=new b(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:xa,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,c){return new vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new Oe(new Pe,e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,i,r,s){let a=new zt(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,d=l.toneMapping;l.getClearColor(Yp),l.toneMapping=Bi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new Fi,new an({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));let u=this._backgroundBox,p=u.material,f=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,f=!0):(p.color.copy(Yp),f=!0);for(let x=0;x<6;x++){let g=x%3;g===0?(a.up.set(0,o[x],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[x],s.y,s.z)):g===1?(a.up.set(0,0,o[x]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[x],s.z)):(a.up.set(0,o[x],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[x]));let v=this._cubeSize;fs(r,g*v,x>2?v:0,v,v),l.setRenderTarget(r),f&&l.render(u,a),l.render(e,a)}l.toneMapping=d,l.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ds||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;fs(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,_a)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h)*(0+1.25*l),{_lodMax:u}=this,p=this._sizeLods[i],f=3*p*(i>u-4?i-u+4:0),m=4*(this._cubeSize-p);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=u-t,fs(s,f,m,3*p,2*p),r.setRenderTarget(s),r.render(o,_a),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=u-i,fs(e,f,m,3*p,2*p),r.setRenderTarget(e),r.render(o,_a)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=l;let d=l.uniforms,u=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,f=s/p,m=isFinite(s)?1+Math.floor(3*f):xa;m>xa&&Ae(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let x=[],g=0;for(let y=0;y<xa;++y){let T=y/f,M=Math.exp(-T*T/2);x.push(M),y===0?g+=M:y<m&&(g+=2*M)}for(let y=0;y<x.length;y++)x[y]=x[y]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=x,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-i;let _=this._sizeLods[r];fs(t,3*_*(r>v-4?r-v+4:0),4*(this._cubeSize-_),3*_,2*_),c.setRenderTarget(t),c.render(h,_a)}};function Zp(n,e,t){let i=new Yt(n,e,t);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Jp(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Kp(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}var wl=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ys(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fi(5,5,5),s=new vt({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:cn});s.uniforms.tEquirect.value=t;let a=new Oe(r,s),o=t.minFilter;return t.minFilter===fr&&(t.minFilter=Lt),new tl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}};function ug(n){let e=new WeakMap,t=new WeakMap,i=null;function r(o,c){return c===sl?o.mapping=ds:c===al&&(o.mapping=mr),o}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(o){let c=o.target;c.removeEventListener("dispose",a);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}return{get:function(o,c=!1){return o==null?null:c?(function(l){if(l&&l.isTexture){let h=l.mapping,d=h===sl||h===al,u=h===ds||h===mr;if(d||u){let p=t.get(l),f=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return i===null&&(i=new vs(n)),p=d?i.fromEquirectangular(l,p):i.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,t.set(l,p),p.texture;if(p!==void 0)return p.texture;{let m=l.image;return d&&m&&m.height>0||u&&m&&(function(x){let g=0,v=6;for(let _=0;_<v;_++)x[_]!==void 0&&g++;return g===v})(m)?(i===null&&(i=new vs(n)),p=d?i.fromEquirectangular(l):i.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,t.set(l,p),l.addEventListener("dispose",a),p.texture):null}}}return l})(o):(function(l){if(l&&l.isTexture){let h=l.mapping;if(h===sl||h===al){if(e.has(l))return r(e.get(l).texture,l.mapping);{let d=l.image;if(d&&d.height>0){let u=new wl(d.height);return u.fromEquirectangularTexture(n,l),e.set(l,u),l.addEventListener("dispose",s),r(u.texture,l.mapping)}return null}}}return l})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function dg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&or("WebGLRenderer: "+i+" extension not supported."),r}}}function pg(n,e,t,i){let r={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let d in l.attributes)e.remove(l.attributes[d]);l.removeEventListener("dispose",a),delete r[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),i.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,d=c.attributes.position,u=0;if(d===void 0)return;if(h!==null){let m=h.array;u=h.version;for(let x=0,g=m.length;x<g;x+=3){let v=m[x+0],_=m[x+1],y=m[x+2];l.push(v,_,_,y,y,v)}}else{let m=d.array;u=d.version;for(let x=0,g=m.length/3-1;x<g;x+=3){let v=x+0,_=x+1,y=x+2;l.push(v,_,_,y,y,v)}}let p=new(d.count>=65535?Xs:Ws)(l,1);p.version=u;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return r[l.id]===!0||(l.addEventListener("dispose",a),r[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],n.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function mg(n,e,t){let i,r,s;this.setMode=function(a){i=a},this.setIndex=function(a){r=a.type,s=a.bytesPerElement},this.render=function(a,o){n.drawElements(i,o,r,a*s),t.update(o,i,1)},this.renderInstances=function(a,o,c){c!==0&&(n.drawElementsInstanced(i,o,r,a*s,c),t.update(o,i,c))},this.renderMultiDraw=function(a,o,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,o,0,r,a,0,c);let l=0;for(let h=0;h<c;h++)l+=o[h];t.update(l,i,1)}}function fg(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:Re("WebGLInfo: Unknown draw mode:",i)}}}}function gg(n,e,t){let i=new WeakMap,r=new at;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,d=i.get(a);if(d===void 0||d.count!==h){let N=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;u===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let _=a.attributes.position.count*v,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*y*4*h),M=new Gs(T,_,y,h);M.type=bi,M.needsUpdate=!0;let P=4*v;for(let I=0;I<h;I++){let L=m[I],B=x[I],F=g[I],j=_*y*4*I;for(let H=0;H<L.count;H++){let V=H*P;u===!0&&(r.fromBufferAttribute(L,H),T[j+V+0]=r.x,T[j+V+1]=r.y,T[j+V+2]=r.z,T[j+V+3]=0),p===!0&&(r.fromBufferAttribute(B,H),T[j+V+4]=r.x,T[j+V+5]=r.y,T[j+V+6]=r.z,T[j+V+7]=0),f===!0&&(r.fromBufferAttribute(F,H),T[j+V+8]=r.x,T[j+V+9]=r.y,T[j+V+10]=r.z,T[j+V+11]=F.itemSize===4?r.w:1)}}d={count:h,texture:M,size:new Q(_,y)},i.set(a,d),a.addEventListener("dispose",N)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let u=0;for(let f=0;f<c.length;f++)u+=c[f];let p=a.morphTargetsRelative?1:1-u;o.getUniforms().setValue(n,"morphTargetBaseInfluence",p),o.getUniforms().setValue(n,"morphTargetInfluences",c)}o.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}}}function vg(n,e,t,i,r){let s=new WeakMap;function a(o){let c=o.target;c.removeEventListener("dispose",a),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:function(o){let c=r.render.frame,l=o.geometry,h=e.get(o,l);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==c&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),s.set(o,c))),o.isSkinnedMesh){let d=o.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h},dispose:function(){s=new WeakMap}}}var xg={[uh]:"LINEAR_TONE_MAPPING",[dh]:"REINHARD_TONE_MAPPING",[ph]:"CINEON_TONE_MAPPING",[pa]:"ACES_FILMIC_TONE_MAPPING",[fh]:"AGX_TONE_MAPPING",[gh]:"NEUTRAL_TONE_MAPPING",[mh]:"CUSTOM_TONE_MAPPING"};function _g(n,e,t,i,r,s){let a=new Yt(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Ni(e,t):void 0}),o=new Yt(e,t,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),c=new Pe;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));let l=new Ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Oe(c,l),d=new ls(-1,1,1,-1,0,1),u,p=null,f=null,m=!1,x=null,g=[],v=!1;this.setSize=function(_,y){a.setSize(_,y),o.setSize(_,y);for(let T=0;T<g.length;T++){let M=g[T];M.setSize&&M.setSize(_,y)}},this.setEffects=function(_){g=_,v=g.length>0&&g[0].isRenderPass===!0;let y=a.width,T=a.height;for(let M=0;M<g.length;M++){let P=g[M];P.setSize&&P.setSize(y,T)}},this.begin=function(_,y){if(m||_.toneMapping===Bi&&g.length===0)return!1;if(x=y,y!==null){let T=y.width,M=y.height;a.width===T&&a.height===M||this.setSize(T,M)}return v===!1&&_.setRenderTarget(a),u=_.toneMapping,_.toneMapping=Bi,!0},this.hasRenderPass=function(){return v},this.end=function(_,y){_.toneMapping=u,m=!0;let T=a,M=o;for(let P=0;P<g.length;P++){let N=g[P];if(N.enabled!==!1&&(N.render(_,M,T,y),N.needsSwap!==!1)){let I=T;T=M,M=I}}if(p!==_.outputColorSpace||f!==_.toneMapping){p=_.outputColorSpace,f=_.toneMapping,l.defines={},qe.getTransfer(p)===nt&&(l.defines.SRGB_TRANSFER="");let P=xg[f];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(x),_.render(h,d),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var vm=new ti,xu=new Ni(1,1),xm=new Gs,_m=new yo,ym=new Ys,$p=[],Qp=[],em=new Float32Array(16),tm=new Float32Array(9),im=new Float32Array(4);function xs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=$p[r];if(s===void 0&&(s=new Float32Array(r),$p[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Al(n,e){let t=Qp[e];t===void 0&&(t=new Int32Array(e),Qp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function Sg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function bg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function Tg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;im.set(i),n.uniformMatrix2fv(this.addr,!1,im),Ft(t,i)}}function wg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;tm.set(i),n.uniformMatrix3fv(this.addr,!1,tm),Ft(t,i)}}function Eg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;em.set(i),n.uniformMatrix4fv(this.addr,!1,em),Ft(t,i)}}function Ag(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function Rg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function Pg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function Ig(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function Dg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function Ug(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function Ng(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),this.type===n.SAMPLER_2D_SHADOW?(xu.compareFunction=t.isReversedDepthBuffer()?yl:_l,s=xu):s=vm,t.setTexture2D(e||s,r)}function Fg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_m,r)}function Og(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ym,r)}function Bg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xm,r)}function zg(n,e){n.uniform1fv(this.addr,e)}function kg(n,e){let t=xs(e,this.size,2);n.uniform2fv(this.addr,t)}function Gg(n,e){let t=xs(e,this.size,3);n.uniform3fv(this.addr,t)}function Vg(n,e){let t=xs(e,this.size,4);n.uniform4fv(this.addr,t)}function Hg(n,e){let t=xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Wg(n,e){let t=xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Xg(n,e){let t=xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jg(n,e){n.uniform1iv(this.addr,e)}function qg(n,e){n.uniform2iv(this.addr,e)}function Yg(n,e){n.uniform3iv(this.addr,e)}function Zg(n,e){n.uniform4iv(this.addr,e)}function Jg(n,e){n.uniform1uiv(this.addr,e)}function Kg(n,e){n.uniform2uiv(this.addr,e)}function $g(n,e){n.uniform3uiv(this.addr,e)}function Qg(n,e){n.uniform4uiv(this.addr,e)}function e0(n,e,t){let i=this.cache,r=e.length,s=Al(t,r),a;Nt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s)),a=this.type===n.SAMPLER_2D_SHADOW?xu:vm;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function t0(n,e,t){let i=this.cache,r=e.length,s=Al(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||_m,s[a])}function i0(n,e,t){let i=this.cache,r=e.length,s=Al(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ym,s[a])}function n0(n,e,t){let i=this.cache,r=e.length,s=Al(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||xm,s[a])}var _u=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return yg;case 35664:return Mg;case 35665:return Sg;case 35666:return bg;case 35674:return Tg;case 35675:return wg;case 35676:return Eg;case 5124:case 35670:return Ag;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Pg;case 5125:return Ig;case 36294:return Lg;case 36295:return Dg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}})(t.type)}},yu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return zg;case 35664:return kg;case 35665:return Gg;case 35666:return Vg;case 35674:return Hg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return jg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return Kg;case 36295:return $g;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return n0}})(t.type)}},Mu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},gu=/(\w+)(\])?(\[|\.)?/g;function nm(n,e){n.seq.push(e),n.map[e.id]=e}function r0(n,e,t){let i=n.name,r=i.length;for(gu.lastIndex=0;;){let s=gu.exec(i),a=gu.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===r){nm(t,l===void 0?new _u(o,n,e):new yu(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new Mu(o),nm(t,h)),t=h}}}var gs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);r0(o,e.getUniformLocation(t,o.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function rm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var s0=0,sm=new Fe;function am(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,c){let l=o.split(`
`),h=[],d=Math.max(c-6,0),u=Math.min(c+6,l.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return r}function a0(n,e){let t=(function(i){qe._getMatrix(sm,qe.workingColorSpace,i);let r=`mat3( ${sm.elements.map(s=>s.toFixed(4))} )`;switch(qe.getTransfer(i)){case ks:return[r,"LinearTransferOETF"];case nt:return[r,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var o0={[uh]:"Linear",[dh]:"Reinhard",[ph]:"Cineon",[pa]:"ACESFilmic",[fh]:"AgX",[gh]:"Neutral",[mh]:"Custom"};function l0(n,e){let t=o0[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var bl=new b;function c0(){return qe.getLuminanceCoefficients(bl),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${bl.x.toFixed(4)}, ${bl.y.toFixed(4)}, ${bl.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ya(n){return n!==""}function om(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var h0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(n){return n.replace(h0,d0)}var u0=new Map;function d0(n,e){let t=Ve[e];if(t===void 0){let i=u0.get(e);if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");t=Ve[i],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Su(t)}var p0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(n){return n.replace(p0,m0)}function m0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var f0={[pr]:"SHADOWMAP_TYPE_PCF",[hs]:"SHADOWMAP_TYPE_VSM"},g0={[ds]:"ENVMAP_TYPE_CUBE",[mr]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"},v0={[mr]:"ENVMAP_MODE_REFRACTION"},x0={[wp]:"ENVMAP_BLENDING_MULTIPLY",[Ep]:"ENVMAP_BLENDING_MIX",[Ap]:"ENVMAP_BLENDING_ADD"};function _0(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(B){return f0[B.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),l=(function(B){return B.envMap===!1?"ENVMAP_TYPE_CUBE":g0[B.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(B){return B.envMap===!1?"ENVMAP_MODE_REFLECTION":v0[B.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),d=(function(B){return B.envMap===!1?"ENVMAP_BLENDING_NONE":x0[B.combine]||"ENVMAP_BLENDING_NONE"})(t),u=(function(B){let F=B.envMapCubeUVHeight;if(F===null)return null;let j=Math.log2(F)-2,H=1/F;return{texelWidth:1/(3*Math.max(Math.pow(2,j),112)),texelHeight:H,maxMip:j}})(t),p=(function(B){return[B.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",B.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)})(t),f=(function(B){let F=[];for(let j in B){let H=B[j];H!==!1&&F.push("#define "+j+" "+H)}return F.join(`
`)})(s),m=r.createProgram(),x,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ya).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ya).join(`
`),g.length>0&&(g+=`
`)):(x=[hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),g=[hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Bi?l0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,a0("linearToOutputTexel",t.outputColorSpace),c0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=Su(a),a=om(a,t),a=lm(a,t),o=Su(o),o=om(o,t),o=lm(o,t),a=cm(a),o=cm(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=v+x+a,y=v+g+o,T=rm(r,r.VERTEX_SHADER,_),M=rm(r,r.FRAGMENT_SHADER,y);function P(B){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(m)||"",j=r.getShaderInfoLog(T)||"",H=r.getShaderInfoLog(M)||"",V=F.trim(),Y=j.trim(),W=H.trim(),ne=!0,ge=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,M);else{let Ce=am(r,T,"vertex"),ye=am(r,M,"fragment");Re("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+V+`
`+Ce+`
`+ye)}else V!==""?Ae("WebGLProgram: Program Info Log:",V):Y!==""&&W!==""||(ge=!1);ge&&(B.diagnostics={runnable:ne,programLog:V,vertexShader:{log:Y,prefix:x},fragmentShader:{log:W,prefix:g}})}r.deleteShader(T),r.deleteShader(M),N=new gs(r,m),I=(function(F,j){let H={},V=F.getProgramParameter(j,F.ACTIVE_ATTRIBUTES);for(let Y=0;Y<V;Y++){let W=F.getActiveAttrib(j,Y),ne=W.name,ge=1;W.type===F.FLOAT_MAT2&&(ge=2),W.type===F.FLOAT_MAT3&&(ge=3),W.type===F.FLOAT_MAT4&&(ge=4),H[ne]={type:W.type,location:F.getAttribLocation(j,ne),locationSize:ge}}return H})(r,m)}let N,I;r.attachShader(m,T),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return N===void 0&&P(this),N},this.getAttributes=function(){return I===void 0&&P(this),I};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(m,37297)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=M,this}var y0=0,bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Tu(e),t.set(e,i)),i}},Tu=class{constructor(e){this.id=y0++,this.code=e,this.usedTimes=0}};function M0(n,e,t,i,r,s){let a=new Vs,o=new bu,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,x,g,v,_,y){let T=v.fog,M=_.geometry,P=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?v.environment:null,N=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,I=e.get(m.envMap||P,N),L=I&&I.mapping===ma?I.image.height:null,B=p[m.type];m.precision!==null&&(u=i.getMaxPrecision(m.precision),u!==m.precision&&Ae("WebGLProgram.getParameters:",m.precision,"not supported, using",u,"instead."));let F=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,j=F!==void 0?F.length:0,H,V,Y,W,ne=0;if(M.morphAttributes.position!==void 0&&(ne=1),M.morphAttributes.normal!==void 0&&(ne=2),M.morphAttributes.color!==void 0&&(ne=3),B){let Ai=dn[B];H=Ai.vertexShader,V=Ai.fragmentShader}else{H=m.vertexShader,V=m.fragmentShader;let Ai=o.getVertexShaderStage(m),Qn=o.getFragmentShaderStage(m);o.update(m,Ai,Qn),Y=Ai.id,W=Qn.id}let ge=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),ye=_.isInstancedMesh===!0,Me=_.isBatchedMesh===!0,te=!!m.map,pe=!!m.matcap,ue=!!I,xe=!!m.aoMap,ke=!!m.lightMap,$=!!m.bumpMap&&m.wireframe===!1,R=!!m.normalMap,w=!!m.displacementMap,C=!!m.emissiveMap,O=!!m.metalnessMap,S=!!m.roughnessMap,U=m.anisotropy>0,D=m.clearcoat>0,A=m.dispersion>0,G=m.iridescence>0,X=m.sheen>0,Z=m.transmission>0,ae=U&&!!m.anisotropyMap,Se=D&&!!m.clearcoatMap,be=D&&!!m.clearcoatNormalMap,me=D&&!!m.clearcoatRoughnessMap,Le=G&&!!m.iridescenceMap,ee=G&&!!m.iridescenceThicknessMap,le=X&&!!m.sheenColorMap,se=X&&!!m.sheenRoughnessMap,ve=!!m.specularMap,ot=!!m.specularColorMap,it=!!m.specularIntensityMap,_t=Z&&!!m.transmissionMap,$t=Z&&!!m.thicknessMap,Ee=!!m.gradientMap,st=!!m.alphaMap,He=m.alphaTest>0,Vt=!!m.alphaHash,lt=!!m.extensions,Rt=Bi;m.toneMapped&&(ge!==null&&ge.isXRRenderTarget!==!0||(Rt=n.toneMapping));let gt={shaderID:B,shaderType:m.type,shaderName:m.name,vertexShader:H,fragmentShader:V,defines:m.defines,customVertexShaderID:Y,customFragmentShaderID:W,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:u,batching:Me,batchingColor:Me&&_._colorsTexture!==null,instancing:ye,instancingColor:ye&&_.instanceColor!==null,instancingMorph:ye&&_.morphTexture!==null,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:te,matcap:pe,envMap:ue,envMapMode:ue&&I.mapping,envMapCubeUVHeight:L,aoMap:xe,lightMap:ke,bumpMap:$,normalMap:R,displacementMap:w,emissiveMap:C,normalMapObjectSpace:R&&m.normalMapType===Ip,normalMapTangentSpace:R&&m.normalMapType===eu,packedNormalMap:R&&m.normalMapType===eu&&(gi=m.normalMap.format,gi===vr||gi===vl||gi===xl),metalnessMap:O,roughnessMap:S,anisotropy:U,anisotropyMap:ae,clearcoat:D,clearcoatMap:Se,clearcoatNormalMap:be,clearcoatRoughnessMap:me,dispersion:A,iridescence:G,iridescenceMap:Le,iridescenceThicknessMap:ee,sheen:X,sheenColorMap:le,sheenRoughnessMap:se,specularMap:ve,specularColorMap:ot,specularIntensityMap:it,transmission:Z,transmissionMap:_t,thicknessMap:$t,gradientMap:Ee,opaque:m.transparent===!1&&m.blending===ua&&m.alphaToCoverage===!1,alphaMap:st,alphaTest:He,alphaHash:Vt,combine:m.combine,mapUv:te&&f(m.map.channel),aoMapUv:xe&&f(m.aoMap.channel),lightMapUv:ke&&f(m.lightMap.channel),bumpMapUv:$&&f(m.bumpMap.channel),normalMapUv:R&&f(m.normalMap.channel),displacementMapUv:w&&f(m.displacementMap.channel),emissiveMapUv:C&&f(m.emissiveMap.channel),metalnessMapUv:O&&f(m.metalnessMap.channel),roughnessMapUv:S&&f(m.roughnessMap.channel),anisotropyMapUv:ae&&f(m.anisotropyMap.channel),clearcoatMapUv:Se&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:be&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&f(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:le&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:se&&f(m.sheenRoughnessMap.channel),specularMapUv:ve&&f(m.specularMap.channel),specularColorMapUv:ot&&f(m.specularColorMap.channel),specularIntensityMapUv:it&&f(m.specularIntensityMap.channel),transmissionMapUv:_t&&f(m.transmissionMap.channel),thicknessMapUv:$t&&f(m.thicknessMap.channel),alphaMapUv:st&&f(m.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(R||U),vertexNormals:!!M.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!M.attributes.uv&&(te||st),fog:!!T,useFog:m.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||M.attributes.normal===void 0&&R===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ce,skinning:_.isSkinnedMesh===!0,hasPositionAttribute:M.attributes.position!==void 0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&g.length>0,shadowMapType:n.shadowMap.type,toneMapping:Rt,decodeVideoTexture:te&&m.map.isVideoTexture===!0&&qe.getTransfer(m.map.colorSpace)===nt,decodeVideoTextureEmissive:C&&m.emissiveMap.isVideoTexture===!0&&qe.getTransfer(m.emissiveMap.colorSpace)===nt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===ht,flipSided:m.side===Zt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:lt&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&m.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};var gi;return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt},getProgramCacheKey:function(m){let x=[];if(m.shaderID?x.push(m.shaderID):(x.push(m.customVertexShaderID),x.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)x.push(g),x.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)})(x,m),(function(g,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),g.push(a.mask)})(x,m),x.push(n.outputColorSpace)),x.push(m.customProgramCacheKey),x.join()},getUniforms:function(m){let x=p[m.type],g;if(x){let v=dn[x];g=Ml.clone(v.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,x){let g=h.get(x);return g!==void 0?++g.usedTimes:(g=new _0(n,x,m,r),l.push(g),h.set(x,g)),g},releaseProgram:function(m){if(--m.usedTimes===0){let x=l.indexOf(m);l[x]=l[l.length-1],l.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){o.remove(m)},programs:l,dispose:function(){o.dispose()}}}function S0(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function b0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function um(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dm(){let n=[],e=0,t=[],i=[],r=[];function s(o){let c=0;return o.isInstancedMesh&&(c+=2),o.isSkinnedMesh&&(c+=1),c}function a(o,c,l,h,d,u){let p=n[e];return p===void 0?(p={id:o.id,object:o,geometry:c,material:l,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:d,group:u},n[e]=p):(p.id=o.id,p.object=o,p.geometry=c,p.material=l,p.materialVariant=s(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=d,p.group=u),e++,p}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(o,c,l,h,d,u){let p=a(o,c,l,h,d,u);l.transmission>0?i.push(p):l.transparent===!0?r.push(p):t.push(p)},unshift:function(o,c,l,h,d,u){let p=a(o,c,l,h,d,u);l.transmission>0?i.unshift(p):l.transparent===!0?r.unshift(p):t.unshift(p)},finish:function(){for(let o=e,c=n.length;o<c;o++){let l=n[o];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(o,c,l){t.length>1&&t.sort(o||b0),i.length>1&&i.sort(c||um),r.length>1&&r.sort(c||um),l&&(t.reverse(),i.reverse(),r.reverse())}}}function T0(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new dm,n.set(e,[r])):t>=i.length?(r=new dm,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function w0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new ie};break;case"SpotLight":t={position:new b,direction:new b,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":t={color:new ie,position:new b,halfWidth:new b,halfHeight:new b}}return n[e.id]=t,t}}}var E0=0;function A0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function C0(n){let e=new w0,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new b);let r=new b,s=new we,a=new we;return{setup:function(o){let c=0,l=0,h=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let d=0,u=0,p=0,f=0,m=0,x=0,g=0,v=0,_=0,y=0,T=0;o.sort(A0);for(let P=0,N=o.length;P<N;P++){let I=o[P],L=I.color,B=I.intensity,F=I.distance,j=null;if(I.shadow&&I.shadow.map&&(j=I.shadow.map.texture.format===vr?I.shadow.map.texture:I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)c+=L.r*B,l+=L.g*B,h+=L.b*B;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],B);T++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let V=I.shadow,Y=t.get(I);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=I.shadow.matrix,x++}i.directional[d]=H,d++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(L).multiplyScalar(B),H.distance=F,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[p]=H;let V=I.shadow;if(I.map&&(i.spotLightMap[_]=I.map,_++,V.updateMatrices(I),I.castShadow&&y++),i.spotLightMatrix[p]=V.matrix,I.castShadow){let Y=t.get(I);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,i.spotShadow[p]=Y,i.spotShadowMap[p]=j,v++}p++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(L).multiplyScalar(B),H.halfWidth.set(.5*I.width,0,0),H.halfHeight.set(0,.5*I.height,0),i.rectArea[f]=H,f++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let V=I.shadow,Y=t.get(I);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,i.pointShadow[u]=Y,i.pointShadowMap[u]=j,i.pointShadowMatrix[u]=I.shadow.matrix,g++}i.point[u]=H,u++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(B),H.groundColor.copy(I.groundColor).multiplyScalar(B),i.hemi[m]=H,m++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=l,i.ambient[2]=h;let M=i.hash;M.directionalLength===d&&M.pointLength===u&&M.spotLength===p&&M.rectAreaLength===f&&M.hemiLength===m&&M.numDirectionalShadows===x&&M.numPointShadows===g&&M.numSpotShadows===v&&M.numSpotMaps===_&&M.numLightProbes===T||(i.directional.length=d,i.spot.length=p,i.rectArea.length=f,i.point.length=u,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=v+_-y,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=T,M.directionalLength=d,M.pointLength=u,M.spotLength=p,M.rectAreaLength=f,M.hemiLength=m,M.numDirectionalShadows=x,M.numPointShadows=g,M.numSpotShadows=v,M.numSpotMaps=_,M.numLightProbes=T,i.version=E0++)},setupView:function(o,c){let l=0,h=0,d=0,u=0,p=0,f=c.matrixWorldInverse;for(let m=0,x=o.length;m<x;m++){let g=o[m];if(g.isDirectionalLight){let v=i.directional[l];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),l++}else if(g.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),d++}else if(g.isRectAreaLight){let v=i.rectArea[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),u++}else if(g.isPointLight){let v=i.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let v=i.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(f),p++}}},state:i}}function pm(n){let e=new C0(n),t=[],i=[],r=[],s={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){s.camera=a,t.length=0,i.length=0,r.length=0},state:s,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){i.push(a)},pushLightProbeGrid:function(a){r.push(a)}}}function R0(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),s;return r===void 0?(s=new pm(n),e.set(t,[s])):i>=r.length?(s=new pm(n),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}var P0=[new b(1,0,0),new b(-1,0,0),new b(0,1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1)],I0=[new b(0,-1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1),new b(0,-1,0),new b(0,-1,0)],mm=new we,Ma=new b,vu=new b;function L0(n,e,t){let i=new En,r=new Q,s=new Q,a=new at,o=new Zn,c=new Wo,l={},h=t.maxTextureSize,d={[ln]:Zt,[Zt]:ln,[ht]:ht},u=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new Pe;f.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Oe(f,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pr;let g=this.type;function v(M,P){let N=e.update(m);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Yt(r.x,r.y,{format:vr,type:Ti})),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(P,null,N,u,m,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(P,null,N,p,m,null)}function _(M,P,N,I){let L=null,B=N.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(B!==void 0)L=B;else if(L=N.isPointLight===!0?c:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=L.uuid,j=P.uuid,H=l[F];H===void 0&&(H={},l[F]=H);let V=H[j];V===void 0&&(V=L.clone(),H[j]=V,P.addEventListener("dispose",T)),L=V}return L.visible=P.visible,L.wireframe=P.wireframe,L.side=I===hs?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:d[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,N.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(n.properties.get(L).light=N),L}function y(M,P,N,I,L){if(M.visible===!1)return;if(M.layers.test(P.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&L===hs)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld);let F=e.update(M),j=M.material;if(Array.isArray(j)){let H=F.groups;for(let V=0,Y=H.length;V<Y;V++){let W=H[V],ne=j[W.materialIndex];if(ne&&ne.visible){let ge=_(M,ne,I,L);M.onBeforeShadow(n,M,P,N,F,ge,W),n.renderBufferDirect(N,null,F,ge,M,W),M.onAfterShadow(n,M,P,N,F,ge,W)}}}else if(j.visible){let H=_(M,j,I,L);M.onBeforeShadow(n,M,P,N,F,H,null),n.renderBufferDirect(N,null,F,H,M,null),M.onAfterShadow(n,M,P,N,F,H,null)}}let B=M.children;for(let F=0,j=B.length;F<j;F++)y(B[F],P,N,I,L)}function T(M){M.target.removeEventListener("dispose",T);for(let P in l){let N=l[P],I=M.target.uuid;I in N&&(N[I].dispose(),delete N[I])}}this.render=function(M,P,N){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;this.type===rp&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=pr);let I=n.getRenderTarget(),L=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),F=n.state;F.setBlending(cn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let j=g!==this.type;j&&P.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(V=>V.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,V=M.length;H<V;H++){let Y=M[H],W=Y.shadow;if(W===void 0){Ae("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let ne=W.getFrameExtents();r.multiply(ne),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ne.x),r.x=s.x*ne.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ne.y),r.y=s.y*ne.y,W.mapSize.y=s.y));let ge=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=ge,W.map===null||j===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===hs){if(Y.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Yt(r.x,r.y,{format:vr,type:Ti,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new Ni(r.x,r.y,bi),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=hn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=yi,W.map.depthTexture.magFilter=yi}else Y.isPointLight?(W.map=new wl(r.x),W.map.depthTexture=new wo(r.x,zi)):(W.map=new Yt(r.x,r.y),W.map.depthTexture=new Ni(r.x,r.y,zi)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=hn,this.type===pr?(W.map.depthTexture.compareFunction=ge?yl:_l,W.map.depthTexture.minFilter=Lt,W.map.depthTexture.magFilter=Lt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=yi,W.map.depthTexture.magFilter=yi);W.camera.updateProjectionMatrix()}let Ce=W.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<Ce;ye++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ye),n.clear();else{ye===0&&(n.setRenderTarget(W.map),n.clear());let Me=W.getViewport(ye);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),F.viewport(a)}if(Y.isPointLight){let Me=W.camera,te=W.matrix,pe=Y.distance||Me.far;pe!==Me.far&&(Me.far=pe,Me.updateProjectionMatrix()),Ma.setFromMatrixPosition(Y.matrixWorld),Me.position.copy(Ma),vu.copy(Me.position),vu.add(P0[ye]),Me.up.copy(I0[ye]),Me.lookAt(vu),Me.updateMatrixWorld(),te.makeTranslation(-Ma.x,-Ma.y,-Ma.z),mm.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),W._frustum.setFromProjectionMatrix(mm,Me.coordinateSystem,Me.reversedDepth)}else W.updateMatrices(Y);i=W.getFrustum(),y(P,N,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===hs&&v(W,N),W.needsUpdate=!1}g=this.type,x.needsUpdate=!1,n.setRenderTarget(I,L,B)}}function D0(n,e){let t=new function(){let S=!1,U=new at,D=null,A=new at(0,0,0,0);return{setMask:function(G){D===G||S||(n.colorMask(G,G,G,G),D=G)},setLocked:function(G){S=G},setClear:function(G,X,Z,ae,Se){Se===!0&&(G*=ae,X*=ae,Z*=ae),U.set(G,X,Z,ae),A.equals(U)===!1&&(n.clearColor(G,X,Z,ae),A.copy(U))},reset:function(){S=!1,D=null,A.set(-1,0,0,0)}}},i=new function(){let S=!1,U=!1,D=null,A=null,G=null;return{setReversed:function(X){if(U!==X){let Z=e.get("EXT_clip_control");X?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT),U=X;let ae=G;G=null,this.setClear(ae)}},getReversed:function(){return U},setTest:function(X){X?ue(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(X){D===X||S||(n.depthMask(X),D=X)},setFunc:function(X){if(U&&(X=Gp[X]),A!==X){switch(X){case rh:n.depthFunc(n.NEVER);break;case sh:n.depthFunc(n.ALWAYS);break;case ah:n.depthFunc(n.LESS);break;case rl:n.depthFunc(n.LEQUAL);break;case oh:n.depthFunc(n.EQUAL);break;case lh:n.depthFunc(n.GEQUAL);break;case ch:n.depthFunc(n.GREATER);break;case hh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}A=X}},setLocked:function(X){S=X},setClear:function(X){G!==X&&(G=X,U&&(X=1-X),n.clearDepth(X))},reset:function(){S=!1,D=null,A=null,G=null,U=!1}}},r=new function(){let S=!1,U=null,D=null,A=null,G=null,X=null,Z=null,ae=null,Se=null;return{setTest:function(be){S||(be?ue(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(be){U===be||S||(n.stencilMask(be),U=be)},setFunc:function(be,me,Le){D===be&&A===me&&G===Le||(n.stencilFunc(be,me,Le),D=be,A=me,G=Le)},setOp:function(be,me,Le){X===be&&Z===me&&ae===Le||(n.stencilOp(be,me,Le),X=be,Z=me,ae=Le)},setLocked:function(be){S=be},setClear:function(be){Se!==be&&(n.clearStencil(be),Se=be)},reset:function(){S=!1,U=null,D=null,A=null,G=null,X=null,Z=null,ae=null,Se=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l={},h=new WeakMap,d=[],u=null,p=!1,f=null,m=null,x=null,g=null,v=null,_=null,y=null,T=new ie(0,0,0),M=0,P=!1,N=null,I=null,L=null,B=null,F=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,V=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=V>=2);let W=null,ne={},ge=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),ye=new at().fromArray(ge),Me=new at().fromArray(Ce);function te(S,U,D,A){let G=new Uint8Array(4),X=n.createTexture();n.bindTexture(S,X),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Z=0;Z<D;Z++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(U,0,n.RGBA,1,1,A,0,n.RGBA,n.UNSIGNED_BYTE,G):n.texImage2D(U+Z,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,G);return X}let pe={};function ue(S){o[S]!==!0&&(n.enable(S),o[S]=!0)}function xe(S){o[S]!==!1&&(n.disable(S),o[S]=!1)}pe[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),r.setClear(0),ue(n.DEPTH_TEST),i.setFunc(rl),w(!1),C(th),ue(n.CULL_FACE),R(cn);let ke={[us]:n.FUNC_ADD,[ap]:n.FUNC_SUBTRACT,[op]:n.FUNC_REVERSE_SUBTRACT};ke[lp]=n.MIN,ke[cp]=n.MAX;let $={[hp]:n.ZERO,[up]:n.ONE,[dp]:n.SRC_COLOR,[mp]:n.SRC_ALPHA,[yp]:n.SRC_ALPHA_SATURATE,[xp]:n.DST_COLOR,[gp]:n.DST_ALPHA,[pp]:n.ONE_MINUS_SRC_COLOR,[fp]:n.ONE_MINUS_SRC_ALPHA,[_p]:n.ONE_MINUS_DST_COLOR,[vp]:n.ONE_MINUS_DST_ALPHA,[Mp]:n.CONSTANT_COLOR,[Sp]:n.ONE_MINUS_CONSTANT_COLOR,[bp]:n.CONSTANT_ALPHA,[Tp]:n.ONE_MINUS_CONSTANT_ALPHA};function R(S,U,D,A,G,X,Z,ae,Se,be){if(S!==cn){if(p===!1&&(ue(n.BLEND),p=!0),S===sp)G=G||U,X=X||D,Z=Z||A,U===m&&G===v||(n.blendEquationSeparate(ke[U],ke[G]),m=U,v=G),D===x&&A===g&&X===_&&Z===y||(n.blendFuncSeparate($[D],$[A],$[X],$[Z]),x=D,g=A,_=X,y=Z),ae.equals(T)!==!1&&Se===M||(n.blendColor(ae.r,ae.g,ae.b,Se),T.copy(ae),M=Se),f=S,P=!1;else if(S!==f||be!==P){if(m===us&&v===us||(n.blendEquation(n.FUNC_ADD),m=us,v=us),be)switch(S){case ua:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case da:n.blendFunc(n.ONE,n.ONE);break;case ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Re("WebGLState: Invalid blending: ",S)}else switch(S){case ua:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case da:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ih:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",S)}x=null,g=null,_=null,y=null,T.set(0,0,0),M=0,f=S,P=be}}else p===!0&&(xe(n.BLEND),p=!1)}function w(S){N!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),N=S)}function C(S){S!==ip?(ue(n.CULL_FACE),S!==I&&(S===th?n.cullFace(n.BACK):S===np?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),I=S}function O(S,U,D){S?(ue(n.POLYGON_OFFSET_FILL),B===U&&F===D||(B=U,F=D,i.getReversed()&&(U=-U),n.polygonOffset(U,D))):xe(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:r},enable:ue,disable:xe,bindFramebuffer:function(S,U){return l[S]!==U&&(n.bindFramebuffer(S,U),l[S]=U,S===n.DRAW_FRAMEBUFFER&&(l[n.FRAMEBUFFER]=U),S===n.FRAMEBUFFER&&(l[n.DRAW_FRAMEBUFFER]=U),!0)},drawBuffers:function(S,U){let D=d,A=!1;if(S){D=h.get(U),D===void 0&&(D=[],h.set(U,D));let G=S.textures;if(D.length!==G.length||D[0]!==n.COLOR_ATTACHMENT0){for(let X=0,Z=G.length;X<Z;X++)D[X]=n.COLOR_ATTACHMENT0+X;D.length=G.length,A=!0}}else D[0]!==n.BACK&&(D[0]=n.BACK,A=!0);A&&n.drawBuffers(D)},useProgram:function(S){return u!==S&&(n.useProgram(S),u=S,!0)},setBlending:R,setMaterial:function(S,U){S.side===ht?xe(n.CULL_FACE):ue(n.CULL_FACE);let D=S.side===Zt;U&&(D=!D),w(D),S.blending===ua&&S.transparent===!1?R(cn):R(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),i.setFunc(S.depthFunc),i.setTest(S.depthTest),i.setMask(S.depthWrite),t.setMask(S.colorWrite);let A=S.stencilWrite;r.setTest(A),A&&(r.setMask(S.stencilWriteMask),r.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),r.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),O(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:w,setCullFace:C,setLineWidth:function(S){S!==L&&(H&&n.lineWidth(S),L=S)},setPolygonOffset:O,setScissorTest:function(S){S?ue(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=n.TEXTURE0+j-1),W!==S&&(n.activeTexture(S),W=S)},bindTexture:function(S,U,D){D===void 0&&(D=W===null?n.TEXTURE0+j-1:W);let A=ne[D];A===void 0&&(A={type:void 0,texture:void 0},ne[D]=A),A.type===S&&A.texture===U||(W!==D&&(n.activeTexture(D),W=D),n.bindTexture(S,U||pe[S]),A.type=S,A.texture=U)},unbindTexture:function(){let S=ne[W];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(S){Re("WebGLState:",S)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(S){Re("WebGLState:",S)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(S){Re("WebGLState:",S)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(S){Re("WebGLState:",S)}},pixelStorei:function(S,U){c[S]!==U&&(n.pixelStorei(S,U),c[S]=U)},getParameter:function(S){return c[S]!==void 0?c[S]:n.getParameter(S)},updateUBOMapping:function(S,U){let D=a.get(U);D===void 0&&(D=new WeakMap,a.set(U,D));let A=D.get(S);A===void 0&&(A=n.getUniformBlockIndex(U,S.name),D.set(S,A))},uniformBlockBinding:function(S,U){let D=a.get(U).get(S);s.get(U)!==D&&(n.uniformBlockBinding(U,D,S.__bindingPointIndex),s.set(U,D))},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(S){Re("WebGLState:",S)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(S){Re("WebGLState:",S)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(S){Re("WebGLState:",S)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(S){Re("WebGLState:",S)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(S){Re("WebGLState:",S)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(S){Re("WebGLState:",S)}},scissor:function(S){ye.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),ye.copy(S))},viewport:function(S){Me.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),Me.copy(S))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),o={},c={},W=null,ne={},l={},h=new WeakMap,d=[],u=null,p=!1,f=null,m=null,x=null,g=null,v=null,_=null,y=null,T=new ie(0,0,0),M=0,P=!1,N=null,I=null,L=null,B=null,F=null,ye.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),r.reset()}}}function U0(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new Q,h=new WeakMap,d=new Set,u,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,w){return f?new OffscreenCanvas(R,w):Jr("canvas")}function x(R,w,C){let O=1,S=$(R);if((S.width>C||S.height>C)&&(O=C/Math.max(S.width,S.height)),O<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let U=Math.floor(O*S.width),D=Math.floor(O*S.height);u===void 0&&(u=m(U,D));let A=w?m(U,D):u;return A.width=U,A.height=D,A.getContext("2d").drawImage(R,0,0,U,D),Ae("WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+U+"x"+D+")."),A}return"data"in R&&Ae("WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),R}return R}function g(R){return R.generateMipmaps}function v(R){n.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,w,C,O,S,U=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let D;O&&(D=e.get("EXT_texture_norm16"),D||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let A=w;if(w===n.RED&&(C===n.FLOAT&&(A=n.R32F),C===n.HALF_FLOAT&&(A=n.R16F),C===n.UNSIGNED_BYTE&&(A=n.R8),C===n.UNSIGNED_SHORT&&D&&(A=D.R16_EXT),C===n.SHORT&&D&&(A=D.R16_SNORM_EXT)),w===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.R8UI),C===n.UNSIGNED_SHORT&&(A=n.R16UI),C===n.UNSIGNED_INT&&(A=n.R32UI),C===n.BYTE&&(A=n.R8I),C===n.SHORT&&(A=n.R16I),C===n.INT&&(A=n.R32I)),w===n.RG&&(C===n.FLOAT&&(A=n.RG32F),C===n.HALF_FLOAT&&(A=n.RG16F),C===n.UNSIGNED_BYTE&&(A=n.RG8),C===n.UNSIGNED_SHORT&&D&&(A=D.RG16_EXT),C===n.SHORT&&D&&(A=D.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.RG8UI),C===n.UNSIGNED_SHORT&&(A=n.RG16UI),C===n.UNSIGNED_INT&&(A=n.RG32UI),C===n.BYTE&&(A=n.RG8I),C===n.SHORT&&(A=n.RG16I),C===n.INT&&(A=n.RG32I)),w===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.RGB8UI),C===n.UNSIGNED_SHORT&&(A=n.RGB16UI),C===n.UNSIGNED_INT&&(A=n.RGB32UI),C===n.BYTE&&(A=n.RGB8I),C===n.SHORT&&(A=n.RGB16I),C===n.INT&&(A=n.RGB32I)),w===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(A=n.RGBA16UI),C===n.UNSIGNED_INT&&(A=n.RGBA32UI),C===n.BYTE&&(A=n.RGBA8I),C===n.SHORT&&(A=n.RGBA16I),C===n.INT&&(A=n.RGBA32I)),w===n.RGB&&(C===n.UNSIGNED_SHORT&&D&&(A=D.RGB16_EXT),C===n.SHORT&&D&&(A=D.RGB16_SNORM_EXT),C===n.UNSIGNED_INT_5_9_9_9_REV&&(A=n.RGB9_E5),C===n.UNSIGNED_INT_10F_11F_11F_REV&&(A=n.R11F_G11F_B10F)),w===n.RGBA){let G=U?ks:qe.getTransfer(S);C===n.FLOAT&&(A=n.RGBA32F),C===n.HALF_FLOAT&&(A=n.RGBA16F),C===n.UNSIGNED_BYTE&&(A=G===nt?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT&&D&&(A=D.RGBA16_EXT),C===n.SHORT&&D&&(A=D.RGBA16_SNORM_EXT),C===n.UNSIGNED_SHORT_4_4_4_4&&(A=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(A=n.RGB5_A1)}return A!==n.R16F&&A!==n.R32F&&A!==n.RG16F&&A!==n.RG32F&&A!==n.RGBA16F&&A!==n.RGBA32F||e.get("EXT_color_buffer_float"),A}function T(R,w){let C;return R?w===null||w===zi||w===ms?C=n.DEPTH24_STENCIL8:w===bi?C=n.DEPTH32F_STENCIL8:w===ps&&(C=n.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===zi||w===ms?C=n.DEPTH_COMPONENT24:w===bi?C=n.DEPTH_COMPONENT32F:w===ps&&(C=n.DEPTH_COMPONENT16),C}function M(R,w){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==yi&&R.minFilter!==Lt?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function P(R){let w=R.target;w.removeEventListener("dispose",P),(function(C){let O=i.get(C);if(O.__webglInit===void 0)return;let S=C.source,U=p.get(S);if(U){let D=U[O.__cacheKey];D.usedTimes--,D.usedTimes===0&&I(C),Object.keys(U).length===0&&p.delete(S)}i.remove(C)})(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&d.delete(w)}function N(R){let w=R.target;w.removeEventListener("dispose",N),(function(C){let O=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(O.__webglFramebuffer[U]))for(let D=0;D<O.__webglFramebuffer[U].length;D++)n.deleteFramebuffer(O.__webglFramebuffer[U][D]);else n.deleteFramebuffer(O.__webglFramebuffer[U]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[U])}else{if(Array.isArray(O.__webglFramebuffer))for(let U=0;U<O.__webglFramebuffer.length;U++)n.deleteFramebuffer(O.__webglFramebuffer[U]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let U=0;U<O.__webglColorRenderbuffer.length;U++)O.__webglColorRenderbuffer[U]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[U]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}let S=C.textures;for(let U=0,D=S.length;U<D;U++){let A=i.get(S[U]);A.__webglTexture&&(n.deleteTexture(A.__webglTexture),a.memory.textures--),i.remove(S[U])}i.remove(C)})(w)}function I(R){let w=i.get(R);n.deleteTexture(w.__webglTexture);let C=R.source;delete p.get(C)[w.__cacheKey],a.memory.textures--}let L=0;function B(R,w){let C=i.get(R);if(R.isVideoTexture&&(function(O){let S=a.render.frame;h.get(O)!==S&&(h.set(O,S),O.update())})(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&C.__version!==R.version){let O=R.image;if(O===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else{if(O.complete!==!1)return void ne(C,R,w);Ae("WebGLRenderer: Texture marked for update but image is incomplete")}}else R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+w)}let F={[Yr]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[go]:n.MIRRORED_REPEAT},j={[yi]:n.NEAREST,[Cp]:n.NEAREST_MIPMAP_NEAREST,[fa]:n.NEAREST_MIPMAP_LINEAR,[Lt]:n.LINEAR,[ol]:n.LINEAR_MIPMAP_NEAREST,[fr]:n.LINEAR_MIPMAP_LINEAR},H={[Lp]:n.NEVER,[Op]:n.ALWAYS,[Dp]:n.LESS,[_l]:n.LEQUAL,[Up]:n.EQUAL,[yl]:n.GEQUAL,[Np]:n.GREATER,[Fp]:n.NOTEQUAL};function V(R,w){if(w.type!==bi||e.has("OES_texture_float_linear")!==!1||w.magFilter!==Lt&&w.magFilter!==ol&&w.magFilter!==fa&&w.magFilter!==fr&&w.minFilter!==Lt&&w.minFilter!==ol&&w.minFilter!==fa&&w.minFilter!==fr||Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,F[w.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,F[w.wrapT]),R!==n.TEXTURE_3D&&R!==n.TEXTURE_2D_ARRAY||n.texParameteri(R,n.TEXTURE_WRAP_R,F[w.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,j[w.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,j[w.minFilter]),w.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,H[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===yi||w.minFilter!==fa&&w.minFilter!==fr||w.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Y(R,w){let C=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",P));let O=w.source,S=p.get(O);S===void 0&&(S={},p.set(O,S));let U=(function(D){let A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()})(w);if(U!==R.__cacheKey){S[U]===void 0&&(S[U]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,C=!0),S[U].usedTimes++;let D=S[R.__cacheKey];D!==void 0&&(S[R.__cacheKey].usedTimes--,D.usedTimes===0&&I(w)),R.__cacheKey=U,R.__webglTexture=S[U].texture}return C}function W(R,w,C){return Math.floor(Math.floor(R/C)/w)}function ne(R,w,C){let O=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(O=n.TEXTURE_3D);let S=Y(R,w),U=w.source;t.bindTexture(O,R.__webglTexture,n.TEXTURE0+C);let D=i.get(U);if(U.version!==D.__version||S===!0){if(t.activeTexture(n.TEXTURE0+C),!(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)){let le=qe.getPrimaries(qe.workingColorSpace),se=w.colorSpace===xr?null:qe.getPrimaries(w.colorSpace),ve=w.colorSpace===xr||le===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let A=x(w.image,!1,r.maxTextureSize);A=ke(w,A);let G=s.convert(w.format,w.colorSpace),X=s.convert(w.type),Z,ae=y(w.internalFormat,G,X,w.normalized,w.colorSpace,w.isVideoTexture);V(O,w);let Se=w.mipmaps,be=w.isVideoTexture!==!0,me=D.__version===void 0||S===!0,Le=U.dataReady,ee=M(w,A);if(w.isDepthTexture)ae=T(w.format===gr,w.type),me&&(be?t.texStorage2D(n.TEXTURE_2D,1,ae,A.width,A.height):t.texImage2D(n.TEXTURE_2D,0,ae,A.width,A.height,0,G,X,null));else if(w.isDataTexture)if(Se.length>0){be&&me&&t.texStorage2D(n.TEXTURE_2D,ee,ae,Se[0].width,Se[0].height);for(let le=0,se=Se.length;le<se;le++)Z=Se[le],be?Le&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Z.width,Z.height,G,X,Z.data):t.texImage2D(n.TEXTURE_2D,le,ae,Z.width,Z.height,0,G,X,Z.data);w.generateMipmaps=!1}else be?(me&&t.texStorage2D(n.TEXTURE_2D,ee,ae,A.width,A.height),Le&&(function(le,se,ve,ot){let it=le.updateRanges;if(it.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,ve,ot,se.data);else{it.sort((He,Vt)=>He.start-Vt.start);let _t=0;for(let He=1;He<it.length;He++){let Vt=it[_t],lt=it[He],Rt=Vt.start+Vt.count,gt=W(lt.start,se.width,4),gi=W(Vt.start,se.width,4);lt.start<=Rt+1&&gt===gi&&W(lt.start+lt.count-1,se.width,4)===gt?Vt.count=Math.max(Vt.count,lt.start+lt.count-Vt.start):(++_t,it[_t]=lt)}it.length=_t+1;let $t=t.getParameter(n.UNPACK_ROW_LENGTH),Ee=t.getParameter(n.UNPACK_SKIP_PIXELS),st=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,se.width);for(let He=0,Vt=it.length;He<Vt;He++){let lt=it[He],Rt=Math.floor(lt.start/4),gt=Math.ceil(lt.count/4),gi=Rt%se.width,Ai=Math.floor(Rt/se.width),Qn=gt;t.pixelStorei(n.UNPACK_SKIP_PIXELS,gi),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ai),t.texSubImage2D(n.TEXTURE_2D,0,gi,Ai,Qn,1,ve,ot,se.data)}le.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$t),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,st)}})(w,A,G,X)):t.texImage2D(n.TEXTURE_2D,0,ae,A.width,A.height,0,G,X,A.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){be&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,ae,Se[0].width,Se[0].height,A.depth);for(let le=0,se=Se.length;le<se;le++)if(Z=Se[le],w.format!==ki)if(G!==null)if(be){if(Le)if(w.layerUpdates.size>0){let ve=au(Z.width,Z.height,w.format,w.type);for(let ot of w.layerUpdates){let it=Z.data.subarray(ot*ve/Z.data.BYTES_PER_ELEMENT,(ot+1)*ve/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ot,Z.width,Z.height,1,G,it)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,A.depth,G,Z.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,ae,Z.width,Z.height,A.depth,0,Z.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,A.depth,G,X,Z.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,ae,Z.width,Z.height,A.depth,0,G,X,Z.data)}else{be&&me&&t.texStorage2D(n.TEXTURE_2D,ee,ae,Se[0].width,Se[0].height);for(let le=0,se=Se.length;le<se;le++)Z=Se[le],w.format!==ki?G!==null?be?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Z.width,Z.height,G,Z.data):t.compressedTexImage2D(n.TEXTURE_2D,le,ae,Z.width,Z.height,0,Z.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Le&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Z.width,Z.height,G,X,Z.data):t.texImage2D(n.TEXTURE_2D,le,ae,Z.width,Z.height,0,G,X,Z.data)}else if(w.isDataArrayTexture)if(be){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,ae,A.width,A.height,A.depth),Le)if(w.layerUpdates.size>0){let le=au(A.width,A.height,w.format,w.type);for(let se of w.layerUpdates){let ve=A.data.subarray(se*le/A.data.BYTES_PER_ELEMENT,(se+1)*le/A.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,A.width,A.height,1,G,X,ve)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,A.width,A.height,A.depth,G,X,A.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ae,A.width,A.height,A.depth,0,G,X,A.data);else if(w.isData3DTexture)be?(me&&t.texStorage3D(n.TEXTURE_3D,ee,ae,A.width,A.height,A.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,A.width,A.height,A.depth,G,X,A.data)):t.texImage3D(n.TEXTURE_3D,0,ae,A.width,A.height,A.depth,0,G,X,A.data);else if(w.isFramebufferTexture){if(me)if(be)t.texStorage2D(n.TEXTURE_2D,ee,ae,A.width,A.height);else{let le=A.width,se=A.height;for(let ve=0;ve<ee;ve++)t.texImage2D(n.TEXTURE_2D,ve,ae,le,se,0,G,X,null),le>>=1,se>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),A.parentNode!==le)return le.appendChild(A),d.add(w),le.onpaint=se=>{let ve=se.changedElements;for(let ot of d)ve.includes(ot.image)&&(ot.needsUpdate=!0)},void le.requestPaint();if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,A);else{let ve=n.RGBA,ot=n.RGBA,it=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ve,ot,it,A)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Se.length>0){if(be&&me){let le=$(Se[0]);t.texStorage2D(n.TEXTURE_2D,ee,ae,le.width,le.height)}for(let le=0,se=Se.length;le<se;le++)Z=Se[le],be?Le&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,G,X,Z):t.texImage2D(n.TEXTURE_2D,le,ae,G,X,Z);w.generateMipmaps=!1}else if(be){if(me){let le=$(A);t.texStorage2D(n.TEXTURE_2D,ee,ae,le.width,le.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,G,X,A)}else t.texImage2D(n.TEXTURE_2D,0,ae,G,X,A);g(w)&&v(O),D.__version=U.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ge(R,w,C,O,S,U){let D=s.convert(C.format,C.colorSpace),A=s.convert(C.type),G=y(C.internalFormat,D,A,C.normalized,C.colorSpace),X=i.get(w),Z=i.get(C);if(Z.__renderTarget=w,!X.__hasExternalTextures){let ae=Math.max(1,w.width>>U),Se=Math.max(1,w.height>>U);S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?t.texImage3D(S,U,G,ae,Se,w.depth,0,D,A,null):t.texImage2D(S,U,G,ae,Se,0,D,A,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),xe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,S,Z.__webglTexture,0,ue(w)):(S===n.TEXTURE_2D||S>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&S<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,S,Z.__webglTexture,U),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(R,w,C){if(n.bindRenderbuffer(n.RENDERBUFFER,R),w.depthBuffer){let O=w.depthTexture,S=O&&O.isDepthTexture?O.type:null,U=T(w.stencilBuffer,S),D=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(w),U,w.width,w.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(w),U,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,U,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,D,n.RENDERBUFFER,R)}else{let O=w.textures;for(let S=0;S<O.length;S++){let U=O[S],D=s.convert(U.format,U.colorSpace),A=s.convert(U.type),G=y(U.internalFormat,D,A,U.normalized,U.colorSpace);xe(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(w),G,w.width,w.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(w),G,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,G,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(R,w,C){let O=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!w.depthTexture||!w.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let S=i.get(w.depthTexture);if(S.__renderTarget=w,S.__webglTexture&&w.depthTexture.image.width===w.width&&w.depthTexture.image.height===w.height||(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O){if(S.__webglInit===void 0&&(S.__webglInit=!0,w.depthTexture.addEventListener("dispose",P)),S.__webglTexture===void 0){S.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture),V(n.TEXTURE_CUBE_MAP,w.depthTexture);let X=s.convert(w.depthTexture.format),Z=s.convert(w.depthTexture.type),ae;w.depthTexture.format===hn?ae=n.DEPTH_COMPONENT24:w.depthTexture.format===gr&&(ae=n.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ae,w.width,w.height,0,X,Z,null)}}else B(w.depthTexture,0);let U=S.__webglTexture,D=ue(w),A=O?n.TEXTURE_CUBE_MAP_POSITIVE_X+C:n.TEXTURE_2D,G=w.depthTexture.format===gr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===hn)xe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,A,U,0,D):n.framebufferTexture2D(n.FRAMEBUFFER,G,A,U,0);else{if(w.depthTexture.format!==gr)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");xe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,A,U,0,D):n.framebufferTexture2D(n.FRAMEBUFFER,G,A,U,0)}}function Me(R){let w=i.get(R),C=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let O=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),O){let S=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,O.removeEventListener("dispose",S)};O.addEventListener("dispose",S),w.__depthDisposeCallback=S}w.__boundDepthTexture=O}if(R.depthTexture&&!w.__autoAllocateDepthBuffer)if(C)for(let O=0;O<6;O++)ye(w.__webglFramebuffer[O],R,O);else{let O=R.texture.mipmaps;O&&O.length>0?ye(w.__webglFramebuffer[0],R,0):ye(w.__webglFramebuffer,R,0)}else if(C){w.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[O]),w.__webglDepthbuffer[O]===void 0)w.__webglDepthbuffer[O]=n.createRenderbuffer(),Ce(w.__webglDepthbuffer[O],R,!1);else{let S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=w.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,S,n.RENDERBUFFER,U)}}else{let O=R.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ce(w.__webglDepthbuffer,R,!1);else{let S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,S,n.RENDERBUFFER,U)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}let te=[],pe=[];function ue(R){return Math.min(r.maxSamples,R.samples)}function xe(R){let w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ke(R,w){let C=R.colorSpace,O=R.format,S=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||C!==lr&&C!==xr&&(qe.getTransfer(C)===nt?O===ki&&S===ii||Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",C)),w}function $(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=function(){let R=L;return R>=r.maxTextures&&Ae("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R},this.resetTextureUnits=function(){L=0},this.getTextureUnits=function(){return L},this.setTextureUnits=function(R){L=R},this.setTexture2D=B,this.setTexture2DArray=function(R,w){let C=i.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?ne(C,R,w):(R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+w))},this.setTexture3D=function(R,w){let C=i.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?ne(C,R,w):t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+w)},this.setTextureCube=function(R,w){let C=i.get(R);R.isCubeDepthTexture!==!0&&R.version>0&&C.__version!==R.version?(function(O,S,U){if(S.image.length!==6)return;let D=Y(O,S),A=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+U);let G=i.get(A);if(A.version!==G.__version||D===!0){t.activeTexture(n.TEXTURE0+U);let X=qe.getPrimaries(qe.workingColorSpace),Z=S.colorSpace===xr?null:qe.getPrimaries(S.colorSpace),ae=S.colorSpace===xr||X===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Se=S.isCompressedTexture||S.image[0].isCompressedTexture,be=S.image[0]&&S.image[0].isDataTexture,me=[];for(let Ee=0;Ee<6;Ee++)me[Ee]=Se||be?be?S.image[Ee].image:S.image[Ee]:x(S.image[Ee],!0,r.maxCubemapSize),me[Ee]=ke(S,me[Ee]);let Le=me[0],ee=s.convert(S.format,S.colorSpace),le=s.convert(S.type),se=y(S.internalFormat,ee,le,S.normalized,S.colorSpace),ve=S.isVideoTexture!==!0,ot=G.__version===void 0||D===!0,it=A.dataReady,_t,$t=M(S,Le);if(V(n.TEXTURE_CUBE_MAP,S),Se){ve&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,$t,se,Le.width,Le.height);for(let Ee=0;Ee<6;Ee++){_t=me[Ee].mipmaps;for(let st=0;st<_t.length;st++){let He=_t[st];S.format!==ki?ee!==null?ve?it&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,st,0,0,He.width,He.height,ee,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,st,se,He.width,He.height,0,He.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,st,0,0,He.width,He.height,ee,le,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,st,se,He.width,He.height,0,ee,le,He.data)}}}else{if(_t=S.mipmaps,ve&&ot){_t.length>0&&$t++;let Ee=$(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,$t,se,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(be){ve?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,me[Ee].width,me[Ee].height,ee,le,me[Ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,se,me[Ee].width,me[Ee].height,0,ee,le,me[Ee].data);for(let st=0;st<_t.length;st++){let He=_t[st].image[Ee].image;ve?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,st+1,0,0,He.width,He.height,ee,le,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,st+1,se,He.width,He.height,0,ee,le,He.data)}}else{ve?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ee,le,me[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,se,ee,le,me[Ee]);for(let st=0;st<_t.length;st++){let He=_t[st];ve?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,st+1,0,0,ee,le,He.image[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,st+1,se,ee,le,He.image[Ee])}}}g(S)&&v(n.TEXTURE_CUBE_MAP),G.__version=A.version,S.onUpdate&&S.onUpdate(S)}O.__version=S.version})(C,R,w):t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+w)},this.rebindTextures=function(R,w,C){let O=i.get(R);w!==void 0&&ge(O.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&Me(R)},this.setupRenderTarget=function(R){let w=R.texture,C=i.get(R),O=i.get(w);R.addEventListener("dispose",N);let S=R.textures,U=R.isWebGLCubeRenderTarget===!0,D=S.length>1;if(D||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=w.version,a.memory.textures++),U){C.__webglFramebuffer=[];for(let A=0;A<6;A++)if(w.mipmaps&&w.mipmaps.length>0){C.__webglFramebuffer[A]=[];for(let G=0;G<w.mipmaps.length;G++)C.__webglFramebuffer[A][G]=n.createFramebuffer()}else C.__webglFramebuffer[A]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){C.__webglFramebuffer=[];for(let A=0;A<w.mipmaps.length;A++)C.__webglFramebuffer[A]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(D)for(let A=0,G=S.length;A<G;A++){let X=i.get(S[A]);X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&xe(R)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let A=0;A<S.length;A++){let G=S[A];C.__webglColorRenderbuffer[A]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[A]);let X=s.convert(G.format,G.colorSpace),Z=s.convert(G.type),ae=y(G.internalFormat,X,Z,G.normalized,G.colorSpace,R.isXRRenderTarget===!0),Se=ue(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ae,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+A,n.RENDERBUFFER,C.__webglColorRenderbuffer[A])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(C.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(U){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),V(n.TEXTURE_CUBE_MAP,w);for(let A=0;A<6;A++)if(w.mipmaps&&w.mipmaps.length>0)for(let G=0;G<w.mipmaps.length;G++)ge(C.__webglFramebuffer[A][G],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+A,G);else ge(C.__webglFramebuffer[A],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+A,0);g(w)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(D){for(let A=0,G=S.length;A<G;A++){let X=S[A],Z=i.get(X),ae=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),V(ae,X),ge(C.__webglFramebuffer,R,X,n.COLOR_ATTACHMENT0+A,ae,0),g(X)&&v(ae)}t.unbindTexture()}else{let A=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(A=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(A,O.__webglTexture),V(A,w),w.mipmaps&&w.mipmaps.length>0)for(let G=0;G<w.mipmaps.length;G++)ge(C.__webglFramebuffer[G],R,w,n.COLOR_ATTACHMENT0,A,G);else ge(C.__webglFramebuffer,R,w,n.COLOR_ATTACHMENT0,A,0);g(w)&&v(A),t.unbindTexture()}R.depthBuffer&&Me(R)},this.updateRenderTargetMipmap=function(R){let w=R.textures;for(let C=0,O=w.length;C<O;C++){let S=w[C];if(g(S)){let U=_(R),D=i.get(S).__webglTexture;t.bindTexture(U,D),v(U),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(xe(R)===!1){let w=R.textures,C=R.width,O=R.height,S=n.COLOR_BUFFER_BIT,U=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,D=i.get(R),A=w.length>1;if(A)for(let X=0;X<w.length;X++)t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer);let G=R.texture.mipmaps;G&&G.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,D.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let X=0;X<w.length;X++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(S|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(S|=n.STENCIL_BUFFER_BIT)),A){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,D.__webglColorRenderbuffer[X]);let Z=i.get(w[X]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,C,O,0,0,C,O,S,n.NEAREST),c===!0&&(te.length=0,pe.length=0,te.push(n.COLOR_ATTACHMENT0+X),R.depthBuffer&&R.resolveDepthBuffer===!1&&(te.push(U),pe.push(U),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,pe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),A)for(let X=0;X<w.length;X++){t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,D.__webglColorRenderbuffer[X]);let Z=i.get(w[X]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.TEXTURE_2D,Z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let w=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}},this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function N0(n,e){return{convert:function(t,i=xr){let r,s=qe.getTransfer(i);if(t===ii)return n.UNSIGNED_BYTE;if(t===cl)return n.UNSIGNED_SHORT_4_4_4_4;if(t===hl)return n.UNSIGNED_SHORT_5_5_5_1;if(t===yh)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===Mh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===xh)return n.BYTE;if(t===_h)return n.SHORT;if(t===ps)return n.UNSIGNED_SHORT;if(t===ll)return n.INT;if(t===zi)return n.UNSIGNED_INT;if(t===bi)return n.FLOAT;if(t===Ti)return n.HALF_FLOAT;if(t===Rp)return n.ALPHA;if(t===Pp)return n.RGB;if(t===ki)return n.RGBA;if(t===hn)return n.DEPTH_COMPONENT;if(t===gr)return n.DEPTH_STENCIL;if(t===ul)return n.RED;if(t===dl)return n.RED_INTEGER;if(t===vr)return n.RG;if(t===Sh)return n.RG_INTEGER;if(t===bh)return n.RGBA_INTEGER;if(t===pl||t===ml||t===fl||t===gl)if(s===nt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===pl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===pl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===ml)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===fl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===gl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Th||t===wh||t===Eh||t===Ah){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Th)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===wh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Eh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Ah)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Ch||t===Rh||t===Ph||t===Ih||t===Lh||t===vl||t===Dh){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Ch||t===Rh)return s===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Ph)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===Ih)return r.COMPRESSED_R11_EAC;if(t===Lh)return r.COMPRESSED_SIGNED_R11_EAC;if(t===vl)return r.COMPRESSED_RG11_EAC;if(t===Dh)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===Uh||t===Nh||t===Fh||t===Oh||t===Bh||t===zh||t===kh||t===Gh||t===Vh||t===Hh||t===Wh||t===Xh||t===jh||t===qh){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Uh)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Nh)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Fh)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Oh)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Bh)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===zh)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===kh)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Gh)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Vh)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Hh)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Wh)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Xh)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===jh)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===qh)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Yh||t===Zh||t===Jh){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Yh)return s===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Zh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Jh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Kh||t===$h||t===xl||t===Qh){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Kh)return r.COMPRESSED_RED_RGTC1_EXT;if(t===$h)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Qh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===ms?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var wu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Zs(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vt({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new on(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eu=class extends rn{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,f=null,m=typeof XRWebGLBinding<"u",x=new wu,g={},v=t.getContextAttributes(),_=null,y=null,T=[],M=[],P=new Q,N=null,I=new zt;I.viewport=new at;let L=new zt;L.viewport=new at;let B=[I,L],F=new il,j=null,H=null;function V(te){let pe=M.indexOf(te.inputSource);if(pe===-1)return;let ue=T[pe];ue!==void 0&&(ue.update(te.inputSource,te.frame,l||a),ue.dispatchEvent({type:te.type,data:te.inputSource}))}function Y(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",W);for(let te=0;te<T.length;te++){let pe=M[te];pe!==null&&(M[te]=null,T[te].disconnect(pe))}j=null,H=null,x.reset();for(let te in g)delete g[te];e.setRenderTarget(_),p=null,u=null,d=null,r=null,y=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}function W(te){for(let pe=0;pe<te.removed.length;pe++){let ue=te.removed[pe],xe=M.indexOf(ue);xe>=0&&(M[xe]=null,T[xe].disconnect(ue))}for(let pe=0;pe<te.added.length;pe++){let ue=te.added[pe],xe=M.indexOf(ue);if(xe===-1){for(let $=0;$<T.length;$++){if($>=M.length){M.push(ue),xe=$;break}if(M[$]===null){M[$]=ue,xe=$;break}}if(xe===-1)break}let ke=T[xe];ke&&ke.connect(ue)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let pe=T[te];return pe===void 0&&(pe=new Qr,T[te]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(te){let pe=T[te];return pe===void 0&&(pe=new Qr,T[te]=pe),pe.getGripSpace()},this.getHand=function(te){let pe=T[te];return pe===void 0&&(pe=new Qr,T[te]=pe),pe.getHandSpace()},this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&m&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ue=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=v.stencil?gr:hn,ue=v.stencil?ms:zi);let ke={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(ke),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Yt(u.textureWidth,u.textureHeight,{format:ki,type:ii,depthTexture:new Ni(u.textureWidth,u.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let pe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Yt(p.framebufferWidth,p.framebufferHeight,{format:ki,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};let ne=new b,ge=new b;function Ce(te,pe){pe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(pe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let pe=te.near,ue=te.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),F.near=L.near=I.near=pe,F.far=L.far=I.far=ue,j===F.near&&H===F.far||(r.updateRenderState({depthNear:F.near,depthFar:F.far}),j=F.near,H=F.far),F.layers.mask=6|te.layers.mask,I.layers.mask=-5&F.layers.mask,L.layers.mask=-3&F.layers.mask;let xe=te.parent,ke=F.cameras;Ce(F,xe);for(let $=0;$<ke.length;$++)Ce(ke[$],xe);ke.length===2?(function($,R,w){ne.setFromMatrixPosition(R.matrixWorld),ge.setFromMatrixPosition(w.matrixWorld);let C=ne.distanceTo(ge),O=R.projectionMatrix.elements,S=w.projectionMatrix.elements,U=O[14]/(O[10]-1),D=O[14]/(O[10]+1),A=(O[9]+1)/O[5],G=(O[9]-1)/O[5],X=(O[8]-1)/O[0],Z=(S[8]+1)/S[0],ae=U*X,Se=U*Z,be=C/(-X+Z),me=be*-X;if(R.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(me),$.translateZ(be),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),O[10]===-1)$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let Le=U+be,ee=D+be,le=ae-me,se=Se+(C-me),ve=A*D/ee*Le,ot=G*D/ee*Le;$.projectionMatrix.makePerspective(le,se,ve,ot,Le,ee),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}})(F,I,L):F.projectionMatrix.copy(I.projectionMatrix),(function($,R,w){w===null?$.matrix.copy(R.matrixWorld):($.matrix.copy(w.matrixWorld),$.matrix.invert(),$.matrix.multiply(R.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=2*cr*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)})(te,F,xe)},this.getCamera=function(){return F},this.getFoveation=function(){if(u!==null||p!==null)return c},this.setFoveation=function(te){c=te,u!==null&&(u.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function(te){return g[te]};let ye=null,Me=new fm;Me.setAnimationLoop(function(te,pe){if(h=pe.getViewerPose(l||a),f=pe,h!==null){let ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let xe=!1;ue.length!==F.cameras.length&&(F.cameras.length=0,xe=!0);for(let $=0;$<ue.length;$++){let R=ue[$],w=null;if(p!==null)w=p.getViewport(R);else{let O=d.getViewSubImage(u,R);w=O.viewport,$===0&&(e.setRenderTargetTextures(y,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(y))}let C=B[$];C===void 0&&(C=new zt,C.layers.enable($),C.viewport=new at,B[$]=C),C.matrix.fromArray(R.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(R.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(w.x,w.y,w.width,w.height),$===0&&(F.matrix.copy(C.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),xe===!0&&F.cameras.push(C)}let ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){d=i.getBinding();let $=d.getDepthInformation(ue[0]);$&&$.isValid&&$.texture&&x.init($,r.renderState)}if(ke&&ke.includes("camera-access")&&m){e.state.unbindTexture(),d=i.getBinding();for(let $=0;$<ue.length;$++){let R=ue[$].camera;if(R){let w=g[R];w||(w=new Zs,g[R]=w);let C=d.getCameraImage(R);w.sourceTexture=C}}}}for(let ue=0;ue<T.length;ue++){let xe=M[ue],ke=T[ue];xe!==null&&ke!==void 0&&ke.update(xe,pe,l||a)}ye&&ye(te,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),f=null}),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}},F0=new we,Mm=new Fe;function O0(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Zt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Zt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(r.envMap.value=o,r.envMapRotation.value.setFromMatrix4(F0.makeRotationFromEuler(c)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&r.envMapRotation.value.premultiply(Mm),r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,ru(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,c){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?i(r,s):s.isMeshLambertMaterial?(i(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(r,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(i(r,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(r,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(l,h,d){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Zt&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(r,s,c)):s.isMeshMatcapMaterial?(i(r,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),(function(l,h){let d=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(l,h,d,u){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*d,l.scale.value=.5*u,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function B0(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,p,f,m){if((function(x,g,v,_){let y=x.value,T=g+"_"+v;if(_[T]===void 0)return typeof y=="number"||typeof y=="boolean"?_[T]=y:ArrayBuffer.isView(y)?_[T]=y.slice():_[T]=y.clone(),!0;{let M=_[T];if(typeof y=="number"||typeof y=="boolean"){if(M!==y)return _[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(M.equals(y)===!1)return M.copy(y),!0}}return!1})(u,p,f,m)===!0){let x=u.__offset,g=u.value;if(Array.isArray(g)){let v=0;for(let _=0;_<g.length;_++){let y=g[_],T=h(y);l(y,u.__data,v),typeof y=="number"||typeof y=="boolean"||y.isMatrix3||ArrayBuffer.isView(y)||(v+=T.storage/Float32Array.BYTES_PER_ELEMENT)}}else l(g,u.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,u.__data)}}function l(u,p,f){typeof u=="number"||typeof u=="boolean"?p[0]=u:u.isMatrix3?(p[0]=u.elements[0],p[1]=u.elements[1],p[2]=u.elements[2],p[3]=0,p[4]=u.elements[3],p[5]=u.elements[4],p[6]=u.elements[5],p[7]=0,p[8]=u.elements[6],p[9]=u.elements[7],p[10]=u.elements[8],p[11]=0):ArrayBuffer.isView(u)?p.set(new u.constructor(u.buffer,u.byteOffset,p.length)):u.toArray(p,f)}function h(u){let p={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(p.boundary=4,p.storage=4):u.isVector2?(p.boundary=8,p.storage=8):u.isVector3||u.isColor?(p.boundary=16,p.storage=12):u.isVector4?(p.boundary=16,p.storage=16):u.isMatrix3?(p.boundary=48,p.storage=48):u.isMatrix4?(p.boundary=64,p.storage=64):u.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(u)?(p.boundary=16,p.storage=u.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",u),p}function d(u){let p=u.target;p.removeEventListener("dispose",d);let f=a.indexOf(p.__bindingPointIndex);a.splice(f,1),n.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}return{bind:function(u,p){let f=p.program;i.uniformBlockBinding(u,f)},update:function(u,p){let f=r[u.id];f===void 0&&((function(g){let v=g.uniforms,_=0,y=16;for(let M=0,P=v.length;M<P;M++){let N=Array.isArray(v[M])?v[M]:[v[M]];for(let I=0,L=N.length;I<L;I++){let B=N[I],F=Array.isArray(B.value)?B.value:[B.value];for(let j=0,H=F.length;j<H;j++){let V=h(F[j]),Y=_%y,W=Y%V.boundary,ne=Y+W;_+=W,ne!==0&&y-ne<V.storage&&(_+=y-ne),B.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=V.storage}}}let T=_%y;T>0&&(_+=y-T),g.__size=_,g.__cache={}})(u),f=(function(g){let v=(function(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();g.__bindingPointIndex=v;let _=n.createBuffer(),y=g.__size,T=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,y,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_})(u),r[u.id]=f,u.addEventListener("dispose",d));let m=p.program;i.updateUBOMapping(u,m);let x=e.render.frame;s[u.id]!==x&&((function(g){let v=r[g.id],_=g.uniforms,y=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,M=_.length;T<M;T++){let P=_[T];if(Array.isArray(P))for(let N=0,I=P.length;N<I;N++)c(P[N],T,N,y);else c(P,T,0,y)}n.bindBuffer(n.UNIFORM_BUFFER,null)})(u),s[u.id]=x)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);a=[],r={},s={}}}}Mm.set(-1,0,0,0,1,0,0,0,1);var z0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),un=null,El=class{constructor(e={}){let{canvas:t=Bp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ii}=e,f;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let m=p,x=new Set([bh,Sh,dl]),g=new Set([ii,zi,ps,ms,cl,hl]),v=new Uint32Array(4),_=new Int32Array(4),y=new b,T=null,M=null,P=[],N=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,B=!1,F=null,j=null,H=null,V=null;this._outputColorSpace=ei;let Y=0,W=0,ne=null,ge=-1,Ce=null,ye=new at,Me=new at,te=null,pe=new ie(0),ue=0,xe=t.width,ke=t.height,$=1,R=null,w=null,C=new at(0,0,xe,ke),O=new at(0,0,xe,ke),S=!1,U=new En,D=!1,A=!1,G=new we,X=new b,Z=new at,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function be(){return ne===null?$:1}let me,Le,ee,le,se,ve,ot,it,_t,$t,Ee,st,He,Vt,lt,Rt,gt,gi,Ai,Qn,Ki,Un,Da,z=i;function ed(E,k){return t.getContext(E,k)}try{let E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",id,!1),t.addEventListener("webglcontextrestored",nd,!1),t.addEventListener("webglcontextcreationerror",rd,!1),z===null){let k="webgl2";if(z=ed(k,E),z===null)throw ed(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Re("WebGLRenderer: "+E.message),E}function td(){me=new dg(z),me.init(),Ki=new N0(z,me),Le=new lg(z,me,e,Ki),ee=new D0(z,me),Le.reversedDepthBuffer&&u&&ee.buffers.depth.setReversed(!0),j=z.createFramebuffer(),H=z.createFramebuffer(),V=z.createFramebuffer(),le=new fg(z),se=new S0,ve=new U0(z,me,ee,se,Le,Ki,le),ot=new ug(L),it=new ng(z),Un=new ag(z,it),_t=new pg(z,it,le,Un),$t=new vg(z,_t,it,Un,le),gi=new gg(z,Le,ve),lt=new cg(se),Ee=new M0(L,ot,me,Le,Un,lt),st=new O0(L,se),He=new T0,Vt=new R0(me),gt=new sg(L,ot,ee,$t,f,c),Rt=new L0(L,$t,Le),Da=new B0(z,le,Le,ee),Ai=new og(z,me,le),Qn=new mg(z,me,le),le.programs=Ee.programs,L.capabilities=Le,L.extensions=me,L.properties=se,L.renderLists=He,L.shadowMap=Rt,L.state=ee,L.info=le}td(),m!==ii&&(I=new _g(m,t.width,t.height,o,r,s));let St=new Eu(L,z);function id(E){E.preventDefault(),iu("WebGLRenderer: Context Lost."),B=!0}function nd(){iu("WebGLRenderer: Context Restored."),B=!1;let E=le.autoReset,k=Rt.enabled,q=Rt.autoUpdate,K=Rt.needsUpdate,J=Rt.type;td(),le.autoReset=E,Rt.enabled=k,Rt.autoUpdate=q,Rt.needsUpdate=K,Rt.type=J}function rd(E){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function sd(E){let k=E.target;k.removeEventListener("dispose",sd),(function(q){(function(K){let J=se.get(K).programs;J!==void 0&&(J.forEach(function(he){Ee.releaseProgram(he)}),K.isShaderMaterial&&Ee.releaseShaderCache(K))})(q),se.remove(q)})(k)}function ad(E,k,q){E.transparent===!0&&E.side===ht&&E.forceSinglePass===!1?(E.side=Zt,E.needsUpdate=!0,Na(E,k,q),E.side=ln,E.needsUpdate=!0,Na(E,k,q),E.side=ht):Na(E,k,q)}this.xr=St,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=me.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=me.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(xe,ke,!1))},this.getSize=function(E){return E.set(xe,ke)},this.setSize=function(E,k,q=!0){St.isPresenting?Ae("WebGLRenderer: Can't change size while VR device is presenting."):(xe=E,ke=k,t.width=Math.floor(E*$),t.height=Math.floor(k*$),q===!0&&(t.style.width=E+"px",t.style.height=k+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,E,k))},this.getDrawingBufferSize=function(E){return E.set(xe*$,ke*$).floor()},this.setDrawingBufferSize=function(E,k,q){xe=E,ke=k,$=q,t.width=Math.floor(E*q),t.height=Math.floor(k*q),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(m!==ii){if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(E||[])}else Re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(E){return E.copy(ye)},this.getViewport=function(E){return E.copy(C)},this.setViewport=function(E,k,q,K){E.isVector4?C.set(E.x,E.y,E.z,E.w):C.set(E,k,q,K),ee.viewport(ye.copy(C).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(O)},this.setScissor=function(E,k,q,K){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,k,q,K),ee.scissor(Me.copy(O).multiplyScalar($).round())},this.getScissorTest=function(){return S},this.setScissorTest=function(E){ee.setScissorTest(S=E)},this.setOpaqueSort=function(E){R=E},this.setTransparentSort=function(E){w=E},this.getClearColor=function(E){return E.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor(...arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,q=!0){let K=0;if(E){let J=!1;if(ne!==null){let he=ne.texture.format;J=x.has(he)}if(J){let he=ne.texture.type,fe=g.has(he),_e=gt.getClearColor(),Te=gt.getClearAlpha(),De=_e.r,Ze=_e.g,Je=_e.b;fe?(v[0]=De,v[1]=Ze,v[2]=Je,v[3]=Te,z.clearBufferuiv(z.COLOR,0,v)):(_[0]=De,_[1]=Ze,_[2]=Je,_[3]=Te,z.clearBufferiv(z.COLOR,0,_))}else K|=z.COLOR_BUFFER_BIT}k&&(K|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){t.removeEventListener("webglcontextlost",id,!1),t.removeEventListener("webglcontextrestored",nd,!1),t.removeEventListener("webglcontextcreationerror",rd,!1),gt.dispose(),He.dispose(),Vt.dispose(),se.dispose(),ot.dispose(),$t.dispose(),Un.dispose(),Da.dispose(),Ee.dispose(),St.dispose(),St.removeEventListener("sessionstart",od),St.removeEventListener("sessionend",ld),er.stop()},this.renderBufferDirect=function(E,k,q,K,J,he){k===null&&(k=ae);let fe=J.isMesh&&J.matrixWorld.determinantAffine()<0,_e=(function(je,pt,Ht,Ue,ze){pt.isScene!==!0&&(pt=ae),ve.resetTextureUnits();let Ci=pt.fog,ac=Ue.isMeshStandardMaterial||Ue.isMeshLambertMaterial||Ue.isMeshPhongMaterial?pt.environment:null,Fa=ne===null?L.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:qe.workingColorSpace,As=Ue.isMeshStandardMaterial||Ue.isMeshLambertMaterial&&!Ue.envMap||Ue.isMeshPhongMaterial&&!Ue.envMap,$i=ot.get(Ue.envMap||ac,As),Cr=Ue.vertexColors===!0&&!!Ht.attributes.color&&Ht.attributes.color.itemSize===4,fn=!!Ht.attributes.tangent&&(!!Ue.normalMap||Ue.anisotropy>0),oc=!!Ht.morphAttributes.position,Rr=!!Ht.morphAttributes.normal,xf=!!Ht.morphAttributes.color,md=Bi;Ue.toneMapped&&(ne!==null&&ne.isXRRenderTarget!==!0||(md=L.toneMapping));let fd=Ht.morphAttributes.position||Ht.morphAttributes.normal||Ht.morphAttributes.color,_f=fd!==void 0?fd.length:0,Ne=se.get(Ue),tr=M.state.lights;if(D===!0&&(A===!0||je!==Ce)){let Tt=je===Ce&&Ue.id===ge;lt.setState(Ue,je,Tt)}let Ri=!1;Ue.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==tr.state.version||Ne.outputColorSpace!==Fa||ze.isBatchedMesh&&Ne.batching===!1?Ri=!0:ze.isBatchedMesh||Ne.batching!==!0?ze.isBatchedMesh&&Ne.batchingColor===!0&&ze.colorTexture===null||ze.isBatchedMesh&&Ne.batchingColor===!1&&ze.colorTexture!==null||ze.isInstancedMesh&&Ne.instancing===!1?Ri=!0:ze.isInstancedMesh||Ne.instancing!==!0?ze.isSkinnedMesh&&Ne.skinning===!1?Ri=!0:ze.isSkinnedMesh||Ne.skinning!==!0?ze.isInstancedMesh&&Ne.instancingColor===!0&&ze.instanceColor===null||ze.isInstancedMesh&&Ne.instancingColor===!1&&ze.instanceColor!==null||ze.isInstancedMesh&&Ne.instancingMorph===!0&&ze.morphTexture===null||ze.isInstancedMesh&&Ne.instancingMorph===!1&&ze.morphTexture!==null||Ne.envMap!==$i||Ue.fog===!0&&Ne.fog!==Ci?Ri=!0:Ne.numClippingPlanes===void 0||Ne.numClippingPlanes===lt.numPlanes&&Ne.numIntersection===lt.numIntersection?(Ne.vertexAlphas!==Cr||Ne.vertexTangents!==fn||Ne.morphTargets!==oc||Ne.morphNormals!==Rr||Ne.morphColors!==xf||Ne.toneMapping!==md||Ne.morphTargetsCount!==_f||!!Ne.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Ri=!0):Ri=!0:Ri=!0:Ri=!0:Ri=!0:(Ri=!0,Ne.__version=Ue.version);let Nn=Ne.currentProgram;Ri===!0&&(Nn=Na(Ue,pt,ze),F&&Ue.isNodeMaterial&&F.onUpdateProgram(Ue,Nn,Ne));let gd=!1,Pr=!1,lc=!1,mt=Nn.getUniforms(),vi=Ne.uniforms;if(ee.useProgram(Nn.program)&&(gd=!0,Pr=!0,lc=!0),Ue.id!==ge&&(ge=Ue.id,Pr=!0),Ne.needsLights){let Tt=(function(en,hc){if(en.length===0)return null;if(en.length===1)return en[0].texture!==null?en[0]:null;y.setFromMatrixPosition(hc.matrixWorld);for(let Ir=0,yf=en.length;Ir<yf;Ir++){let uc=en[Ir];if(uc.texture!==null&&uc.boundingBox.containsPoint(y))return uc}return null})(M.state.lightProbeGridArray,ze);Ne.lightProbeGrid!==Tt&&(Ne.lightProbeGrid=Tt,Pr=!0)}if(gd||Ce!==je){ee.buffers.depth.getReversed()&&je.reversedDepth!==!0&&(je._reversedDepth=!0,je.updateProjectionMatrix()),mt.setValue(z,"projectionMatrix",je.projectionMatrix),mt.setValue(z,"viewMatrix",je.matrixWorldInverse);let Tt=mt.map.cameraPosition;Tt!==void 0&&Tt.setValue(z,X.setFromMatrixPosition(je.matrixWorld)),Le.logarithmicDepthBuffer&&mt.setValue(z,"logDepthBufFC",2/(Math.log(je.far+1)/Math.LN2)),(Ue.isMeshPhongMaterial||Ue.isMeshToonMaterial||Ue.isMeshLambertMaterial||Ue.isMeshBasicMaterial||Ue.isMeshStandardMaterial||Ue.isShaderMaterial)&&mt.setValue(z,"isOrthographic",je.isOrthographicCamera===!0),Ce!==je&&(Ce=je,Pr=!0,lc=!0)}if(Ne.needsLights&&(tr.state.directionalShadowMap.length>0&&mt.setValue(z,"directionalShadowMap",tr.state.directionalShadowMap,ve),tr.state.spotShadowMap.length>0&&mt.setValue(z,"spotShadowMap",tr.state.spotShadowMap,ve),tr.state.pointShadowMap.length>0&&mt.setValue(z,"pointShadowMap",tr.state.pointShadowMap,ve)),ze.isSkinnedMesh){mt.setOptional(z,ze,"bindMatrix"),mt.setOptional(z,ze,"bindMatrixInverse");let Tt=ze.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),mt.setValue(z,"boneTexture",Tt.boneTexture,ve))}ze.isBatchedMesh&&(mt.setOptional(z,ze,"batchingTexture"),mt.setValue(z,"batchingTexture",ze._matricesTexture,ve),mt.setOptional(z,ze,"batchingIdTexture"),mt.setValue(z,"batchingIdTexture",ze._indirectTexture,ve),mt.setOptional(z,ze,"batchingColorTexture"),ze._colorsTexture!==null&&mt.setValue(z,"batchingColorTexture",ze._colorsTexture,ve));let cc=Ht.morphAttributes;if(cc.position===void 0&&cc.normal===void 0&&cc.color===void 0||gi.update(ze,Ht,Nn),(Pr||Ne.receiveShadow!==ze.receiveShadow)&&(Ne.receiveShadow=ze.receiveShadow,mt.setValue(z,"receiveShadow",ze.receiveShadow)),(Ue.isMeshStandardMaterial||Ue.isMeshLambertMaterial||Ue.isMeshPhongMaterial)&&Ue.envMap===null&&pt.environment!==null&&(vi.envMapIntensity.value=pt.environmentIntensity),vi.dfgLUT!==void 0&&(vi.dfgLUT.value=(un===null&&(un=new hr(z0,16,16,vr,Ti),un.name="DFG_LUT",un.minFilter=Lt,un.magFilter=Lt,un.wrapS=Wn,un.wrapT=Wn,un.generateMipmaps=!1,un.needsUpdate=!0),un)),Pr){if(mt.setValue(z,"toneMappingExposure",L.toneMappingExposure),Ne.needsLights&&(Pi=lc,(Qi=vi).ambientLightColor.needsUpdate=Pi,Qi.lightProbe.needsUpdate=Pi,Qi.directionalLights.needsUpdate=Pi,Qi.directionalLightShadows.needsUpdate=Pi,Qi.pointLights.needsUpdate=Pi,Qi.pointLightShadows.needsUpdate=Pi,Qi.spotLights.needsUpdate=Pi,Qi.spotLightShadows.needsUpdate=Pi,Qi.rectAreaLights.needsUpdate=Pi,Qi.hemisphereLights.needsUpdate=Pi),Ci&&Ue.fog===!0&&st.refreshFogUniforms(vi,Ci),st.refreshMaterialUniforms(vi,Ue,$,ke,M.state.transmissionRenderTarget[je.id]),Ne.needsLights&&Ne.lightProbeGrid){let Tt=Ne.lightProbeGrid;vi.probesSH.value=Tt.texture,vi.probesMin.value.copy(Tt.boundingBox.min),vi.probesMax.value.copy(Tt.boundingBox.max),vi.probesResolution.value.copy(Tt.resolution)}gs.upload(z,dd(Ne),vi,ve)}var Qi,Pi;if(Ue.isShaderMaterial&&Ue.uniformsNeedUpdate===!0&&(gs.upload(z,dd(Ne),vi,ve),Ue.uniformsNeedUpdate=!1),Ue.isSpriteMaterial&&mt.setValue(z,"center",ze.center),mt.setValue(z,"modelViewMatrix",ze.modelViewMatrix),mt.setValue(z,"normalMatrix",ze.normalMatrix),mt.setValue(z,"modelMatrix",ze.matrixWorld),Ue.uniformsGroups!==void 0){let Tt=Ue.uniformsGroups;for(let en=0,hc=Tt.length;en<hc;en++){let Ir=Tt[en];Da.update(Ir,Nn),Da.bind(Ir,Nn)}}return Nn})(E,k,q,K,J);ee.setMaterial(K,fe);let Te=q.index,De=1;if(K.wireframe===!0){if(Te=_t.getWireframeAttribute(q),Te===void 0)return;De=2}let Ze=q.drawRange,Je=q.attributes.position,Ie=Ze.start*De,Qe=(Ze.start+Ze.count)*De;he!==null&&(Ie=Math.max(Ie,he.start*De),Qe=Math.min(Qe,(he.start+he.count)*De)),Te!==null?(Ie=Math.max(Ie,0),Qe=Math.min(Qe,Te.count)):Je!=null&&(Ie=Math.max(Ie,0),Qe=Math.min(Qe,Je.count));let Pt=Qe-Ie;if(Pt<0||Pt===1/0)return;let bt;Un.setup(J,K,_e,q,Te);let dt=Ai;if(Te!==null&&(bt=it.get(Te),dt=Qn,dt.setIndex(bt)),J.isMesh)K.wireframe===!0?(ee.setLineWidth(K.wireframeLinewidth*be()),dt.setMode(z.LINES)):dt.setMode(z.TRIANGLES);else if(J.isLine){let je=K.linewidth;je===void 0&&(je=1),ee.setLineWidth(je*be()),J.isLineSegments?dt.setMode(z.LINES):J.isLineLoop?dt.setMode(z.LINE_LOOP):dt.setMode(z.LINE_STRIP)}else J.isPoints?dt.setMode(z.POINTS):J.isSprite&&dt.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(me.get("WEBGL_multi_draw"))dt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let je=J._multiDrawStarts,pt=J._multiDrawCounts,Ht=J._multiDrawCount,Ue=Te?it.get(Te).bytesPerElement:1,ze=se.get(K).currentProgram.getUniforms();for(let Ci=0;Ci<Ht;Ci++)ze.setValue(z,"_gl_DrawID",Ci),dt.render(je[Ci]/Ue,pt[Ci])}else if(J.isInstancedMesh)dt.renderInstances(Ie,Pt,J.count);else if(q.isInstancedBufferGeometry){let je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,pt=Math.min(q.instanceCount,je);dt.renderInstances(Ie,Pt,pt)}else dt.render(Ie,Pt)},this.compile=function(E,k,q=null){q===null&&(q=E),M=Vt.get(q),M.init(k),N.push(M),q.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),E!==q&&E.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),M.setupLights();let K=new Set;return E.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let he=J.material;if(he)if(Array.isArray(he))for(let fe=0;fe<he.length;fe++){let _e=he[fe];ad(_e,q,J),K.add(_e)}else ad(he,q,J),K.add(he)}),M=N.pop(),K},this.compileAsync=function(E,k,q=null){let K=this.compile(E,k,q);return new Promise(J=>{function he(){K.forEach(function(fe){se.get(fe).currentProgram.isReady()&&K.delete(fe)}),K.size!==0?setTimeout(he,10):J(E)}me.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let rc=null;function od(){er.stop()}function ld(){er.start()}let er=new fm;function sc(E,k,q,K){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||U.intersectsSprite(E)){K&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(G);let he=$t.update(E),fe=E.material;fe.visible&&T.push(E,he,fe,q,Z.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||U.intersectsObject(E))){let he=$t.update(E),fe=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Z.copy(E.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Z.copy(he.boundingSphere.center)),Z.applyMatrix4(E.matrixWorld).applyMatrix4(G)),Array.isArray(fe)){let _e=he.groups;for(let Te=0,De=_e.length;Te<De;Te++){let Ze=_e[Te],Je=fe[Ze.materialIndex];Je&&Je.visible&&T.push(E,he,Je,q,Z.z,Ze)}}else fe.visible&&T.push(E,he,fe,q,Z.z,null)}}let J=E.children;for(let he=0,fe=J.length;he<fe;he++)sc(J[he],k,q,K)}function cd(E,k,q,K){let{opaque:J,transmissive:he,transparent:fe}=E;M.setupLightsView(q),D===!0&&lt.setGlobalState(L.clippingPlanes,q),K&&ee.viewport(ye.copy(K)),J.length>0&&Ua(J,k,q),he.length>0&&Ua(he,k,q),fe.length>0&&Ua(fe,k,q),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function hd(E,k,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[K.id]===void 0){let Je=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[K.id]=new Yt(1,1,{generateMipmaps:!0,type:Je?Ti:ii,minFilter:fr,samples:Math.max(4,Le.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let J=M.state.transmissionRenderTarget[K.id],he=K.viewport||ye;J.setSize(he.z*L.transmissionResolutionScale,he.w*L.transmissionResolutionScale);let fe=L.getRenderTarget(),_e=L.getActiveCubeFace(),Te=L.getActiveMipmapLevel();L.setRenderTarget(J),L.getClearColor(pe),ue=L.getClearAlpha(),ue<1&&L.setClearColor(16777215,.5),L.clear(),Se&&gt.render(q);let De=L.toneMapping;L.toneMapping=Bi;let Ze=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),M.setupLightsView(K),D===!0&&lt.setGlobalState(L.clippingPlanes,K),Ua(E,q,K),ve.updateMultisampleRenderTarget(J),ve.updateRenderTargetMipmap(J),me.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ie=0,Qe=k.length;Ie<Qe;Ie++){let Pt=k[Ie],{object:bt,geometry:dt,material:je,group:pt}=Pt;if(je.side===ht&&bt.layers.test(K.layers)){let Ht=je.side;je.side=Zt,je.needsUpdate=!0,ud(bt,q,K,dt,je,pt),je.side=Ht,je.needsUpdate=!0,Je=!0}}Je===!0&&(ve.updateMultisampleRenderTarget(J),ve.updateRenderTargetMipmap(J))}L.setRenderTarget(fe,_e,Te),L.setClearColor(pe,ue),Ze!==void 0&&(K.viewport=Ze),L.toneMapping=De}function Ua(E,k,q){let K=k.isScene===!0?k.overrideMaterial:null;for(let J=0,he=E.length;J<he;J++){let fe=E[J],{object:_e,geometry:Te,group:De}=fe,Ze=fe.material;Ze.allowOverride===!0&&K!==null&&(Ze=K),_e.layers.test(q.layers)&&ud(_e,k,q,Te,Ze,De)}}function ud(E,k,q,K,J,he){E.onBeforeRender(L,k,q,K,J,he),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(L,k,q,K,E,he),J.transparent===!0&&J.side===ht&&J.forceSinglePass===!1?(J.side=Zt,J.needsUpdate=!0,L.renderBufferDirect(q,k,K,J,E,he),J.side=ln,J.needsUpdate=!0,L.renderBufferDirect(q,k,K,J,E,he),J.side=ht):L.renderBufferDirect(q,k,K,J,E,he),E.onAfterRender(L,k,q,K,J,he)}function Na(E,k,q){k.isScene!==!0&&(k=ae);let K=se.get(E),J=M.state.lights,he=M.state.shadowsArray,fe=J.state.version,_e=Ee.getParameters(E,J.state,he,k,q,M.state.lightProbeGridArray),Te=Ee.getProgramCacheKey(_e),De=K.programs;K.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,K.fog=k.fog;let Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;K.envMap=ot.get(E.envMap||K.environment,Ze),K.envMapRotation=K.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",sd),De=new Map,K.programs=De);let Je=De.get(Te);if(Je!==void 0){if(K.currentProgram===Je&&K.lightsStateVersion===fe)return pd(E,_e),Je}else _e.uniforms=Ee.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,q,_e),E.onBeforeCompile(_e,L),Je=Ee.acquireProgram(_e,Te),De.set(Te,Je),K.uniforms=_e.uniforms;let Ie=K.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Ie.clippingPlanes=lt.uniform),pd(E,_e),K.needsLights=(function(Qe){return Qe.isMeshLambertMaterial||Qe.isMeshToonMaterial||Qe.isMeshPhongMaterial||Qe.isMeshStandardMaterial||Qe.isShadowMaterial||Qe.isShaderMaterial&&Qe.lights===!0})(E),K.lightsStateVersion=fe,K.needsLights&&(Ie.ambientLightColor.value=J.state.ambient,Ie.lightProbe.value=J.state.probe,Ie.directionalLights.value=J.state.directional,Ie.directionalLightShadows.value=J.state.directionalShadow,Ie.spotLights.value=J.state.spot,Ie.spotLightShadows.value=J.state.spotShadow,Ie.rectAreaLights.value=J.state.rectArea,Ie.ltc_1.value=J.state.rectAreaLTC1,Ie.ltc_2.value=J.state.rectAreaLTC2,Ie.pointLights.value=J.state.point,Ie.pointLightShadows.value=J.state.pointShadow,Ie.hemisphereLights.value=J.state.hemi,Ie.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ie.spotLightMatrix.value=J.state.spotLightMatrix,Ie.spotLightMap.value=J.state.spotLightMap,Ie.pointShadowMatrix.value=J.state.pointShadowMatrix),K.lightProbeGrid=M.state.lightProbeGridArray.length>0,K.currentProgram=Je,K.uniformsList=null,Je}function dd(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=gs.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function pd(E,k){let q=se.get(E);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}er.setAnimationLoop(function(E){rc&&rc(E)}),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(E){rc=E,St.setAnimationLoop(E),E===null?er.stop():er.start()},St.addEventListener("sessionstart",od),St.addEventListener("sessionend",ld),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0)return void Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(B===!0)return;F!==null&&F.renderStart(E,k);let q=St.enabled===!0&&St.isPresenting===!0,K=I!==null&&(ne===null||q)&&I.begin(L,ne);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),St.enabled!==!0||St.isPresenting!==!0||I!==null&&I.isCompositing()!==!1||(St.cameraAutoUpdate===!0&&St.updateCamera(k),k=St.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,k,ne),M=Vt.get(E,N.length),M.init(k),M.state.textureUnits=ve.getTextureUnits(),N.push(M),G.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),U.setFromProjectionMatrix(G,Sn,k.reversedDepth),A=this.localClippingEnabled,D=lt.init(this.clippingPlanes,A),T=He.get(E,P.length),T.init(),P.push(T),St.enabled===!0&&St.isPresenting===!0){let he=L.xr.getDepthSensingMesh();he!==null&&sc(he,k,-1/0,L.sortObjects)}sc(E,k,0,L.sortObjects),T.finish(),L.sortObjects===!0&&T.sort(R,w,k.reversedDepth),Se=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,Se&&gt.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),D===!0&&lt.beginShadows();let J=M.state.shadowsArray;if(Rt.render(J,E,k),D===!0&&lt.endShadows(),(K&&I.hasRenderPass())===!1){let he=T.opaque,fe=T.transmissive;if(M.setupLights(),k.isArrayCamera){let _e=k.cameras;if(fe.length>0)for(let Te=0,De=_e.length;Te<De;Te++)hd(he,fe,E,_e[Te]);Se&&gt.render(E);for(let Te=0,De=_e.length;Te<De;Te++){let Ze=_e[Te];cd(T,E,Ze,Ze.viewport)}}else fe.length>0&&hd(he,fe,E,k),Se&&gt.render(E),cd(T,E,k)}ne!==null&&W===0&&(ve.updateMultisampleRenderTarget(ne),ve.updateRenderTargetMipmap(ne)),K&&I.end(L),E.isScene===!0&&E.onAfterRender(L,E,k),Un.resetDefaultState(),ge=-1,Ce=null,N.pop(),N.length>0?(M=N[N.length-1],ve.setTextureUnits(M.state.textureUnits),D===!0&&lt.setGlobalState(L.clippingPlanes,M.state.camera)):M=null,P.pop(),T=P.length>0?P[P.length-1]:null,F!==null&&F.renderEnd()},this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(E,k,q){let K=se.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),se.get(E.texture).__webglTexture=k,se.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let q=se.get(E);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,q=0){ne=E,Y=k,W=q;let K=null,J=!1,he=!1;if(E){let fe=se.get(E);if(fe.__useDefaultFramebuffer!==void 0)return ee.bindFramebuffer(z.FRAMEBUFFER,fe.__webglFramebuffer),ye.copy(E.viewport),Me.copy(E.scissor),te=E.scissorTest,ee.viewport(ye),ee.scissor(Me),ee.setScissorTest(te),void(ge=-1);if(fe.__webglFramebuffer===void 0)ve.setupRenderTarget(E);else if(fe.__hasExternalTextures)ve.rebindTextures(E,se.get(E.texture).__webglTexture,se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let De=E.depthTexture;if(fe.__boundDepthTexture!==De){if(De!==null&&se.has(De)&&(E.width!==De.image.width||E.height!==De.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(E)}}let _e=E.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(he=!0);let Te=se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(K=Array.isArray(Te[k])?Te[k][q]:Te[k],J=!0):K=E.samples>0&&ve.useMultisampledRTT(E)===!1?se.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?Te[q]:Te,ye.copy(E.viewport),Me.copy(E.scissor),te=E.scissorTest}else ye.copy(C).multiplyScalar($).floor(),Me.copy(O).multiplyScalar($).floor(),te=S;if(q!==0&&(K=j),ee.bindFramebuffer(z.FRAMEBUFFER,K)&&ee.drawBuffers(E,K),ee.viewport(ye),ee.scissor(Me),ee.setScissorTest(te),J){let fe=se.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,fe.__webglTexture,q)}else if(he){let fe=k;for(let _e=0;_e<E.textures.length;_e++){let Te=se.get(E.textures[_e]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+_e,Te.__webglTexture,q,fe)}}else if(E!==null&&q!==0){let fe=se.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fe.__webglTexture,q)}ge=-1},this.readRenderTargetPixels=function(E,k,q,K,J,he,fe,_e=0){if(!E||!E.isWebGLRenderTarget)return void Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(Te=Te[fe]),Te){ee.bindFramebuffer(z.FRAMEBUFFER,Te);try{let De=E.textures[_e],Ze=De.format,Je=De.type;if(E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+_e),!Le.textureFormatReadable(Ze))return void Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Je))return void Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");k>=0&&k<=E.width-K&&q>=0&&q<=E.height-J&&z.readPixels(k,q,K,J,Ki.convert(Ze),Ki.convert(Je),he)}finally{let De=ne!==null?se.get(ne).__webglFramebuffer:null;ee.bindFramebuffer(z.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,k,q,K,J,he,fe,_e=0){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(Te=Te[fe]),Te){if(k>=0&&k<=E.width-K&&q>=0&&q<=E.height-J){ee.bindFramebuffer(z.FRAMEBUFFER,Te);let De=E.textures[_e],Ze=De.format,Je=De.type;if(E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+_e),!Le.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ie),z.bufferData(z.PIXEL_PACK_BUFFER,he.byteLength,z.STREAM_READ),z.readPixels(k,q,K,J,Ki.convert(Ze),Ki.convert(Je),0);let Qe=ne!==null?se.get(ne).__webglFramebuffer:null;ee.bindFramebuffer(z.FRAMEBUFFER,Qe);let Pt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await kp(z,Pt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ie),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,he),z.deleteBuffer(Ie),z.deleteSync(Pt),he}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,q=0){let K=Math.pow(2,-q),J=Math.floor(E.image.width*K),he=Math.floor(E.image.height*K),fe=k!==null?k.x:0,_e=k!==null?k.y:0;ve.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,fe,_e,J,he),ee.unbindTexture()},this.copyTextureToTexture=function(E,k,q=null,K=null,J=0,he=0){let fe,_e,Te,De,Ze,Je,Ie,Qe,Pt,bt=E.isCompressedTexture?E.mipmaps[he]:E.image;if(q!==null)fe=q.max.x-q.min.x,_e=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,Ze=q.min.y,Je=q.isBox3?q.min.z:0;else{let $i=Math.pow(2,-J);fe=Math.floor(bt.width*$i),_e=Math.floor(bt.height*$i),Te=E.isDataArrayTexture?bt.depth:E.isData3DTexture?Math.floor(bt.depth*$i):1,De=0,Ze=0,Je=0}K!==null?(Ie=K.x,Qe=K.y,Pt=K.z):(Ie=0,Qe=0,Pt=0);let dt=Ki.convert(k.format),je=Ki.convert(k.type),pt;k.isData3DTexture?(ve.setTexture3D(k,0),pt=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ve.setTexture2DArray(k,0),pt=z.TEXTURE_2D_ARRAY):(ve.setTexture2D(k,0),pt=z.TEXTURE_2D),ee.activeTexture(z.TEXTURE0),ee.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),ee.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),ee.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let Ht=ee.getParameter(z.UNPACK_ROW_LENGTH),Ue=ee.getParameter(z.UNPACK_IMAGE_HEIGHT),ze=ee.getParameter(z.UNPACK_SKIP_PIXELS),Ci=ee.getParameter(z.UNPACK_SKIP_ROWS),ac=ee.getParameter(z.UNPACK_SKIP_IMAGES);ee.pixelStorei(z.UNPACK_ROW_LENGTH,bt.width),ee.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bt.height),ee.pixelStorei(z.UNPACK_SKIP_PIXELS,De),ee.pixelStorei(z.UNPACK_SKIP_ROWS,Ze),ee.pixelStorei(z.UNPACK_SKIP_IMAGES,Je);let Fa=E.isDataArrayTexture||E.isData3DTexture,As=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let $i=se.get(E),Cr=se.get(k),fn=se.get($i.__renderTarget),oc=se.get(Cr.__renderTarget);ee.bindFramebuffer(z.READ_FRAMEBUFFER,fn.__webglFramebuffer),ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,oc.__webglFramebuffer);for(let Rr=0;Rr<Te;Rr++)Fa&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,se.get(E).__webglTexture,J,Je+Rr),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,se.get(k).__webglTexture,he,Pt+Rr)),z.blitFramebuffer(De,Ze,fe,_e,Ie,Qe,fe,_e,z.DEPTH_BUFFER_BIT,z.NEAREST);ee.bindFramebuffer(z.READ_FRAMEBUFFER,null),ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||E.isRenderTargetTexture||se.has(E)){let $i=se.get(E),Cr=se.get(k);ee.bindFramebuffer(z.READ_FRAMEBUFFER,H),ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,V);for(let fn=0;fn<Te;fn++)Fa?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$i.__webglTexture,J,Je+fn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,$i.__webglTexture,J),As?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Cr.__webglTexture,he,Pt+fn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Cr.__webglTexture,he),J!==0?z.blitFramebuffer(De,Ze,fe,_e,Ie,Qe,fe,_e,z.COLOR_BUFFER_BIT,z.NEAREST):As?z.copyTexSubImage3D(pt,he,Ie,Qe,Pt+fn,De,Ze,fe,_e):z.copyTexSubImage2D(pt,he,Ie,Qe,De,Ze,fe,_e);ee.bindFramebuffer(z.READ_FRAMEBUFFER,null),ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else As?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(pt,he,Ie,Qe,Pt,fe,_e,Te,dt,je,bt.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(pt,he,Ie,Qe,Pt,fe,_e,Te,dt,bt.data):z.texSubImage3D(pt,he,Ie,Qe,Pt,fe,_e,Te,dt,je,bt):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,he,Ie,Qe,fe,_e,dt,je,bt.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,he,Ie,Qe,bt.width,bt.height,dt,bt.data):z.texSubImage2D(z.TEXTURE_2D,he,Ie,Qe,fe,_e,dt,je,bt);ee.pixelStorei(z.UNPACK_ROW_LENGTH,Ht),ee.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ue),ee.pixelStorei(z.UNPACK_SKIP_PIXELS,ze),ee.pixelStorei(z.UNPACK_SKIP_ROWS,Ci),ee.pixelStorei(z.UNPACK_SKIP_IMAGES,ac),he===0&&k.generateMipmaps&&z.generateMipmap(pt),ee.unbindTexture()},this.initRenderTarget=function(E){se.get(E).__webglFramebuffer===void 0&&ve.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ve.setTextureCube(E,0):E.isData3DTexture?ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ve.setTexture2DArray(E,0):ve.setTexture2D(E,0),ee.unbindTexture()},this.resetState=function(){Y=0,W=0,ne=null,ee.reset(),Un.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};function Sm(){let n=[],e=[],t=[],i=[],r=new ie(11721177),s=new ie(4491930),a=new ie(1456968),o=new ie(13950413),c=new ie(12363625),l=new ie(2377817),h=(y,T,M,P,N=M+.5,I=T*2+.5)=>{let L=n.length/3;return n.push(y,T,M),e.push(P.r,P.g,P.b),t.push(N,I),L},d=[[-.5,.01,.014,-.006],[-.475,.032,.043,-.004],[-.4,.058,.095,.008],[-.29,.08,.143,.013],[-.13,.089,.165,.01],[.035,.079,.148,.004],[.2,.06,.106,-.003],[.34,.036,.061,-.006],[.445,.021,.032,-.002],[.5,.012,.025,0]],u=14;for(let y=0;y<d.length;y++){let[T,M,P,N]=d[y];for(let I=0;I<=u;I++){let L=I/u*Math.PI*2,B=Math.sin(L),F=Math.cos(L)*M,j=B*P+N,H=r.clone().lerp(s,yt.smoothstep(B,-.05,.72));H.lerp(a,yt.smoothstep(B,.62,.98)*.9),H.lerp(o,yt.smoothstep(-B,.15,.85)*.72);let V=Math.exp(-Math.pow((B-.23)/.15,2));H.lerp(l,V*.78);let Y=Math.exp(-Math.pow((B+.13)/.12,2));H.lerp(c,Y*.32),y===2&&H.multiplyScalar(.75),y===0&&H.lerp(l,.75),h(F,j,T,H,(T+.5)/1.2,I/u)}}for(let y=0;y<d.length-1;y++)for(let T=0;T<u;T++){let M=y*(u+1)+T,P=M+u+1;i.push(M,M+1,P,P,M+1,P+1)}let p=h(0,-.006,-.504,l),f=h(0,0,.502,s);for(let y=0;y<u;y++){i.push(p,y+1,y);let T=(d.length-1)*(u+1)+y;i.push(f,T,T+1)}function m(y,T="yz",M=.0035){let P=y.map(B=>new Q(B[T==="yz"?2:0],B[1])),N=_i.triangulateShape(P,[]),I=n.length/3;for(let B of[-1,1])for(let F=0;F<y.length;F++){let j=y[F],H=s.clone().lerp(c,F?.7:.12);(F===1||F===y.length-1)&&H.lerp(l,.42),h(j[0]+(T==="yz"?B*M:0),j[1],j[2]+(T==="xy"?B*M:0),H)}let L=y.length;for(let[B,F,j]of N)i.push(I+B,I+F,I+j),i.push(I+L+j,I+L+F,I+L+B);for(let B=0;B<L;B++){let F=(B+1)%L;i.push(I+B,I+L+B,I+F,I+F,I+L+B,I+L+F)}}m([[0,0,.435],[0,.078,.51],[0,.245,.715],[0,.184,.733],[0,.065,.635],[0,0,.558],[0,-.065,.635],[0,-.184,.733],[0,-.245,.715],[0,-.078,.51]]),m([[0,.128,-.28],[0,.276,-.105],[0,.238,-.065],[0,.147,.23],[0,.058,.33],[0,.081,.2]]),m([[0,-.116,-.06],[0,-.218,.1],[0,-.182,.15],[0,-.063,.32]]);for(let y of[-1,1])m([[y*.069,-.022,-.28],[y*.237,-.094,-.064],[y*.185,-.116,.01],[y*.056,-.037,-.1]],"xy",.0025),m([[y*.036,-.113,-.11],[y*.073,-.203,.068],[y*.032,-.105,.12]],"xy",.002);function x(y,T,M,P=0){let N=new Ut(T,8,5);N.scale(.28,1,1),N.translate(y+Math.sign(y)*P,.04,-.389);let I=n.length/3,L=N.attributes.position,B=N.attributes.uv;for(let F=0;F<L.count;F++)h(L.getX(F),L.getY(F),L.getZ(F),M,B.getX(F),B.getY(F));for(let F of N.index.array)i.push(I+F);N.dispose()}for(let y of[-1,1])x(y*.054,.031,new ie(13023613)),x(y*.054,.021,new ie(399137),.008),x(y*.054,.006,new ie(14216942),.014);let g=new Pe;g.name="reef-fusilier-anatomy",g.setAttribute("position",new ce(n,3)),g.setAttribute("color",new ce(e,3)),g.setAttribute("uv",new ce(t,2)),g.setIndex(i),g.computeVertexNormals();let v=g.attributes.normal,_=new b;for(let y=0;y<d.length;y++){let T=y*(u+1),M=T+u;_.set(v.getX(T)+v.getX(M),v.getY(T)+v.getY(M),v.getZ(T)+v.getZ(M)).normalize(),v.setXYZ(T,_.x,_.y,_.z),v.setXYZ(M,_.x,_.y,_.z)}return g.computeBoundingBox(),g.computeBoundingSphere(),g.userData.forward="-Z",g.userData.triangles=i.length/3,g}function bm(n){return Math.atan2(Math.sin(n),-.7*Math.cos(n))}function Tm(n={value:0}){let e=new xt({name:"silver-fusilier-scales",color:16777215,vertexColors:!0,roughness:.38,metalness:.24});return e.customProgramCacheKey=()=>"reef-school-tail-flex-v1",e.onBeforeCompile=t=>{t.uniforms.schoolTime=n,t.vertexShader=`uniform float schoolTime;
`+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`
      #include <begin_vertex>
      float schoolPhase = 0.;
      #ifdef USE_INSTANCING
        schoolPhase = dot(instanceMatrix[3].xz, vec2(.37, .19));
      #endif
      float tailWeight = smoothstep(-.24, .70, position.z);
      transformed.x += sin(schoolTime * 7.5 - position.z * 5.5 + schoolPhase)
                       * tailWeight * tailWeight * .068;
    `)},e}var wm=[{x:-15,z:12,rx:7,rz:18,h:13,seed:1.8},{x:16,z:-5,rx:8,rz:20,h:16,seed:4.2},{x:-19,z:-42,rx:9,rz:20,h:23,seed:2.9},{x:22,z:-60,rx:10,rz:22,h:24,seed:7.6},{x:-37,z:-81,rx:13,rz:23,h:29,seed:11.3}];function Em(n,e,t){let i=(e-n.x)/n.rx,r=(t-n.z)/n.rz,s=Math.atan2(r,i),a=1+.09*Math.sin(s*3+n.seed)+.055*Math.cos(s*7-n.seed),o=Math.sqrt(i*i+r*r)/a;if(o>=1)return 0;let c=Math.pow(Math.max(0,1-o*o),.6),l=Math.sin(c*23+n.seed+Math.sin(s*2)*.8)*.65+Math.sin(e*.95+t*.56+n.seed)*.38+Math.sin(e*2.3-t*1.45)*.12;return Math.max(0,n.h*c+l*Math.min(1,c*6))}function Am({floor:n,material:e,coarse:t=!1}){let i=new et;i.name="sculpted-reef-ravine";let r=(s,a)=>n(s,a)+Math.max(0,...wm.map(o=>Em(o,s,a)));for(let s of wm){let a=t?26:38,o=t?64:88,c=[],l=[],h=[];for(let f=0;f<=a;f++){let m=1e-4+.9999*f/a;for(let x=0;x<=o;x++){let g=x/o*Math.PI*2,v=1+.09*Math.sin(g*3+s.seed)+.055*Math.cos(g*7-s.seed),_=s.x+Math.cos(g)*s.rx*m*v,y=s.z+Math.sin(g)*s.rz*m*v;if(c.push(_,n(_,y)+Em(s,_,y)-.15,y),l.push(_*.12,y*.12),f<a&&x<o){let T=f*(o+1)+x;h.push(T,T+1,T+o+1,T+1,T+o+2,T+o+1)}}}let d=c.length/3;c.push(s.x,n(s.x,s.z)-4,s.z),l.push(.5,.5);for(let f=0;f<o;f++){let m=a*(o+1)+f;h.push(d,m,m+1)}let u=new Pe;u.setAttribute("position",new ce(c,3)),u.setAttribute("uv",new ce(l,2)),u.setIndex(h),u.computeVertexNormals();let p=new Oe(u,e);p.name="reef-ravine-rock",p.castShadow=p.receiveShadow=!0,i.add(p)}return{group:i,floorAt:r}}function Au(n,e){let t=[],i=[],r=[],s=[];for(let o=0;o<=n;o++)for(let c=0;c<=e;c++){let l=o/n,h=c/e*Math.PI*2,d=(.073*(1-l)+.018+.035*Math.exp(-(((l-.88)/.12)**2)))*(1+.08*Math.sin(l*14));if(t.push(Math.sin(l*2.1)*.16+Math.cos(h)*d,l,Math.cos(l*2.7)*.06+Math.sin(h)*d),i.push(Math.cos(h),.06,Math.sin(h)),r.push(c/e,l),o<n&&c<e){let u=o*(e+1)+c;s.push(u,u+e+1,u+1,u+1,u+e+1,u+e+2)}}let a=new Pe;return a.setAttribute("position",new ce(t,3)),a.setAttribute("normal",new ce(i,3)),a.setAttribute("uv",new ce(r,2)),a.setIndex(s),a.computeVertexNormals(),a.computeBoundingSphere(),a}function Cm(n,e=!1){let t=e?new Zn({depthPacking:ga}):new xt({color:16777215,vertexColors:!1,roughness:.48,metalness:.03});return t.customProgramCacheKey=()=>e?"reef-garden-depth-1":"reef-garden-tissue-1",t.onBeforeCompile=i=>{i.uniforms.gardenTime=n,i.vertexShader=`uniform float gardenTime;varying float gardenTip;
`+i.vertexShader,i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      gardenTip=position.y;
      vec3 anchor=(modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.)).xyz;
      float wave=gardenTime*1.25+anchor.x*.41+anchor.z*.27;
      transformed.x+=sin(wave+position.y*2.4)*position.y*position.y*.16;
      transformed.z+=cos(wave*.83+position.y)*position.y*position.y*.10;`),e||(i.fragmentShader=`varying float gardenTip;
`+i.fragmentShader,i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        float tip=smoothstep(.73,1.,gardenTip);
        diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*.45+vec3(.64,.74,.57),tip*.72);`),i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        float softRim=pow(1.-abs(dot(normal,normalize(vViewPosition))),3.);
        reflectedLight.indirectDiffuse+=diffuseColor.rgb*(.10+softRim*.25);`))},t}function Rm({floor:n,time:e,coarse:t=!1}){let i=new et;i.name="living-polyp-gardens";let r=75621,s=()=>(r=1664525*r+1013904223>>>0,r/4294967296),a=[],o=[10505080,5482392,13800524,9139103,7052645],c=t?44:78,l=t?12:19,h=new ct;for(let p=0;p<c;p++){let f=p%2?1:-1,m=f*(9+s()*13),x=23-s()*106,g=.34+s()*.58,v=n(m,x),_=.34+s()*.45;if(v>15.6)continue;let y=new ie(o[p%o.length]);for(let T=0;T<l;T++){let M=T*2.39996,P=g*Math.sqrt((T+.5)/l),N=m+Math.cos(M)*P,I=x+Math.sin(M)*P,L=n(N,I);if(Math.abs(L-v)>1.1||L>15.7)continue;h.position.set(N,L+.015,I),h.rotation.set(Math.cos(M)*.19,M,Math.sin(M)*.19);let B=Math.min(_*(.65+s()*.55),16.5-L);h.scale.set(.8+s()*.4,B,.8+s()*.4),h.updateMatrix(),a.push({matrix:h.matrix.clone(),color:y.clone().multiplyScalar(.85+s()*.3)})}}let d=[Au(9,5),Au(5,4),Au(3,3)];d[0].userData.distanceLevels=d;let u=new Ui(d[0],Cm(e),a.length);return u.name="soft-coral-understory",u.customDepthMaterial=Cm(e,!0),a.forEach((p,f)=>{u.setMatrixAt(f,p.matrix),u.setColorAt(f,p.color)}),u.castShadow=!1,u.receiveShadow=!0,u.computeBoundingSphere(),i.add(u),i.userData.colonies=c,i.userData.polyps=a.length,i}var k0={5120:[Int8Array,1,"getInt8"],5121:[Uint8Array,1,"getUint8"],5122:[Int16Array,2,"getInt16"],5123:[Uint16Array,2,"getUint16"],5125:[Uint32Array,4,"getUint32"],5126:[Float32Array,4,"getFloat32"]},G0={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16},V0=["coral_antler","coral_fan","coral_table","sponge_cluster"];function Pm(n){let e=new DataView(n);if(n.byteLength<20||e.getUint32(0,!0)!==1179937895||e.getUint32(4,!0)!==2||e.getUint32(8,!0)!==n.byteLength)throw new Error("The original reef model has an invalid GLB header.");let t,i;for(let h=12;h+8<=n.byteLength;){let d=e.getUint32(h,!0),u=e.getUint32(h+4,!0),p=h+8,f=p+d;if(f>n.byteLength)throw new Error("Truncated original reef model.");u===1313821514&&(t=JSON.parse(new TextDecoder().decode(new Uint8Array(n,p,d)))),u===5130562&&(i=new DataView(n,p,d)),h=f}if(!t||!i||t.asset?.version!=="2.0"||t.buffers?.length!==1||t.buffers[0].uri||t.extensionsRequired?.length)throw new Error("Unsupported reef kit encoding.");let r=h=>{let d=t.accessors[h],u=t.bufferViews[d?.bufferView],p=k0[d?.componentType],f=G0[d?.type];if(!d||d.sparse||!u||u.buffer!==0||!p||!f)throw new Error("Unsupported reef vertex attribute.");let[m,x,g]=p,v=u.byteStride||x*f,_=(u.byteOffset||0)+(d.byteOffset||0),y=_+Math.max(0,d.count-1)*v+x*f;if(v<x*f||y>i.byteLength||y>(u.byteOffset||0)+u.byteLength)throw new Error("Reef vertex data exceeds its declared buffer.");let T=new m(d.count*f);for(let M=0;M<d.count;M++)for(let P=0;P<f;P++)T[M*f+P]=i[g](_+M*v+P*x,!0);return new It(T,f,!!d.normalized)},s=(t.materials||[{}]).map(h=>{let d=h.pbrMetallicRoughness||{},u=d.baseColorFactor||[1,1,1,1];if(d.baseColorTexture||d.metallicRoughnessTexture||h.normalTexture)throw new Error("Reef kit must use original vertex pigment, not external textures.");return new xt({name:h.name||"Original reef mineral pigment",color:new ie().setRGB(u[0],u[1],u[2],lr),vertexColors:!0,roughness:d.roughnessFactor??.72,metalness:d.metallicFactor??0,side:h.doubleSided?ht:ln})}),a=(t.meshes||[]).map(h=>{let d=new et;d.name=h.name||"";for(let u of h.primitives){if((u.mode??4)!==4||u.targets||u.attributes.JOINTS_0!==void 0)throw new Error("Unsupported reef primitive.");let p=new Pe;for(let[f,m]of[["POSITION","position"],["NORMAL","normal"],["COLOR_0","color"]])u.attributes[f]!==void 0&&p.setAttribute(m,r(u.attributes[f]));if(!p.attributes.position||!p.attributes.color)throw new Error("Missing sculpted reef geometry or pigment.");u.indices!==void 0&&p.setIndex(r(u.indices)),p.attributes.normal||p.computeVertexNormals(),p.computeBoundingBox(),p.computeBoundingSphere(),d.add(new Oe(p,s[u.material??0]))}return d}),o=(t.nodes||[]).map(h=>{if(h.skin!==void 0)throw new Error("Skinned reef assets are not supported.");let d=h.mesh===void 0?new et:a[h.mesh].clone();return d.name=h.name||d.name,h.matrix?d.applyMatrix4(new we().fromArray(h.matrix)):(h.translation&&d.position.fromArray(h.translation),h.rotation&&d.quaternion.fromArray(h.rotation),h.scale&&d.scale.fromArray(h.scale)),d});t.nodes.forEach((h,d)=>(h.children||[]).forEach(u=>o[d].add(o[u])));let c=new et;for(let h of t.scenes[t.scene??0].nodes)c.add(o[h]);c.updateMatrixWorld(!0);let l=new Map;for(let h of V0){let d=c.getObjectByName(h),u=[];if(!d)throw new Error(`Missing original reef sculpture: ${h}`);if(d.traverse(m=>{m.isMesh&&u.push(m)}),u.length!==1)throw new Error(`Reef sculpture ${h} must have one batched mesh.`);let p=u[0],f=p.geometry.clone().applyMatrix4(p.matrixWorld);f.computeBoundingBox(),f.translate(0,-f.boundingBox.min.y,0),f.computeBoundingBox(),f.computeBoundingSphere(),l.set(h,{geometry:f,material:p.material,triangles:(f.index?.count||f.attributes.position.count)/3,dimensions:f.boundingBox.getSize(new b).toArray()})}return l}function H0(n,e){let t=n.getAttribute("color"),i=n.getAttribute("position"),r=yt.clamp,s=yt.lerp;for(let a=0;a<t.count;a++){let o=t.getX(a),c=t.getY(a),l=t.getZ(a);if(e==="coral_antler"){let h=Math.pow(r((o-.27)/.59,0,1),2.2)*.78,d=.42+.36*Math.sin(i.getX(a)*.92+i.getZ(a)*.73),u=[.38,.045,.23],p=[.045,.34,.29],f=[.84,.77,.57],m=u.map((x,g)=>s(x,p[g],d));t.setXYZ(a,s(m[0],f[0],h),s(m[1],f[1],h),s(m[2],f[2],h))}else if(e==="coral_fan"){let h=r((o-.48)/.45,0,1),d=.15+.28*Math.sin(i.getX(a)*1.23+i.getY(a)*.81);t.setXYZ(a,s(.57,.94,h)*(1-d*.24),s(.055,.235,h),s(.035,.105,h)+Math.max(0,d)*.16)}else e==="sponge_cluster"&&t.setXYZ(a,Math.min(.96,o*1.24),c*.85,l*.67)}t.needsUpdate=!0}function W0(n,e,t){let i=n.clone();return i.name="Living "+e.replaceAll("_"," "),i.roughness=e==="sponge_cluster"?.85:.73,i.customProgramCacheKey=()=>"amaq-living-reef-2",i.onBeforeCompile=r=>{r.uniforms.uReefTime=t,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vReefLocal;
      varying vec3 vReefWorld;`),r.vertexShader=r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vReefLocal = position;`),r.vertexShader=r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
      vec4 reefWorld = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        reefWorld = instanceMatrix * reefWorld;
      #endif
      vReefWorld = (modelMatrix * reefWorld).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vReefLocal;
      varying vec3 vReefWorld;
      uniform float uReefTime;
      float reefHash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
      float reefPores(vec3 p) {
        vec3 cell = floor(p), centre = fract(p) - .5;
        centre -= (vec3(reefHash(cell), reefHash(cell + 7.13), reefHash(cell + 19.7)) - .5) * .40;
        float pore = 1.0 - smoothstep(.10, .32, length(centre));
        return pore * step(.20, reefHash(cell + 3.71));
      }
    `),r.fragmentShader=r.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      vec3 porePosition = vReefLocal * 34.0;
      float poreVisibility = 1.0 - smoothstep(.18, .66, max(length(dFdx(porePosition)), length(dFdy(porePosition))));
      float pores = reefPores(porePosition) * poreVisibility;
      float bumpHeight = -pores * .009;
      vec3 sigmaX = dFdx(-vViewPosition), sigmaY = dFdy(-vViewPosition);
      vec3 reefR1 = cross(sigmaY, normal), reefR2 = cross(normal, sigmaX);
      float reefDet = dot(sigmaX, reefR1);
      normal = normalize(abs(reefDet) * normal - sign(reefDet) * (dFdx(bumpHeight) * reefR1 + dFdy(bumpHeight) * reefR2));
      diffuseColor.rgb *= 1.0 - pores * .24;
      vec3 reefUp = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
      float topLight = max(0.0, dot(normal, reefUp));
      vec2 waveUv = vReefWorld.xz * .52;
      float wave = sin(waveUv.x + sin(waveUv.y * 1.4 + uReefTime * .20)) + sin(waveUv.y * 1.13 - uReefTime * .16);
      float movingLight = pow(max(0.0, 1.0 - abs(wave) * 1.6), 6.0);
      diffuseColor.rgb *= 1.0 + topLight * movingLight * .11;
    `)},i}var X0={coral_antler:[[-13,14,.82,.7,.05],[14,-8,.76,-.4,.05],[-17,3,.58,1.8,.05],[20,-24,.68,2.4,.05],[-22,-27,.62,-.2,.05],[-11,-8,.48,1.3,.05]],coral_fan:[[-11,4,.91,.15,.1],[14,3,.82,-.35,.1],[-17,-16,.76,.38,.1],[19,-21,.66,-.5,.1],[-14,13,.58,.4,.1],[12,-6,.55,-.7,.1]],coral_table:[[-11,-9,1.12,.4,.1],[15,-4,1.05,-.7,.1],[-13,10,.84,1.8,.1],[11,6,.7,.5,.1],[-17,-28,.87,-.3,.1]],sponge_cluster:[[9,10,1.16,-.4,.1],[-19,-3,.94,1.1,.1],[21,-21,1.06,2.3,.1]]};async function Im({floor:n,coarse:e=!1,ceiling:t=17,time:i={value:0},url:r="assets/models/reef-kit.glb"}={}){if(typeof n!="function")throw new TypeError("Reef art requires the ocean-floor height function.");let s=await fetch(r);if(!s.ok)throw new Error(`Original reef model could not load (${s.status}).`);let a=await s.arrayBuffer(),o=Pm(a),c=await Promise.all(["mid","far"].map(async f=>{let m=await fetch(r.replace(/\.glb$/,"-"+f+".glb"));if(!m.ok)throw new Error("Missing reef distance model: "+f);return Pm(await m.arrayBuffer())})),l=new et;l.name="authored-reef";let h=new ct,d=0,u=0,p=[];for(let[f,m]of o){let x=X0[f],g=e?x.slice(0,f==="sponge_cluster"?2:3):x,v=[m.geometry,...c.map(y=>y.get(f).geometry)];v.forEach(y=>H0(y,f)),m.geometry.userData.distanceLevels=v;let _=new Ui(m.geometry,W0(m.material,f,i),g.length);_.name=`authored-${f}`,_.castShadow=!0,_.receiveShadow=!0,_.userData.permeable=!0;for(let y=0;y<g.length;y++){let[T,M,P,N,I]=g[y],L=Math.min(n(T,M)+I,t-.02),B=Math.min(P,Math.max(.01,(t-L)/m.dimensions[1]));h.position.set(T,L,M),h.rotation.set(0,N,0),h.scale.setScalar(B),h.updateMatrix(),_.setMatrixAt(y,h.matrix),_.setColorAt(y,new ie().setRGB(1+.04*Math.sin(y*1.7),1-.035*Math.cos(y*2),1-.055*Math.sin(y+1)))}_.instanceMatrix.needsUpdate=!0,_.instanceColor.needsUpdate=!0,_.computeBoundingBox(),_.computeBoundingSphere(),l.add(_),d+=g.length,u+=m.triangles*g.length,p.push({name:f,triangles:m.triangles,dimensions:m.dimensions,instances:g.length})}return l.userData.assetStats={source:"Original Blender reef sculpture",fileBytes:a.byteLength,instances:d,instanceTriangles:u,drawCalls:l.children.length,assets:p},l}function Lm({size:n=1260,coarse:e=!1,time:t={value:0},water:i={value:new ie(1205621)},sky:r=8435931,sunDirection:s=new b(-.36,.85,-.39).normalize(),surfaceY:a=18,illumination:o=1}={}){let c=new vt({name:"Snell-window-ocean",side:ht,transparent:!1,depthWrite:!0,fog:!1,uniforms:{time:t,water:i,sky:{value:new ie(r)},sunDirection:{value:s},eye:{value:new b},illumination:{value:o}},vertexShader:`
      uniform float time;
      varying vec3 vOceanWorld;
      void main() {
        // The dense centre follows the viewer, but waves sample absolute world
        // coordinates, so their phase never slides when the camera moves.
        vec3 p = (modelMatrix * vec4(position, 1.)).xyz;
        p.xz += cameraPosition.xz;
        // Keep the gameplay's sea-crossing height exactly in agreement.
        p.y += sin(p.x * .16 + p.z * .12 + time * .72) * .2
             + sin(p.x * .31 - p.z * .24 - time * .55) * .075;
        vOceanWorld = p;
        gl_Position = projectionMatrix * viewMatrix * vec4(vOceanWorld, 1.);
      }
    `,fragmentShader:`
      uniform float time;
      uniform vec3 water, sky, sunDirection;
      uniform float illumination;
      varying vec3 vOceanWorld;

      float oceanHash(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * .1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }

      // Value noise and its analytic derivatives. No ridges, cellular edges,
      // rings or repeated bright line patterns are used in this material.
      vec3 oceanNoiseGradient(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        vec2 u = f * f * (3. - 2. * f);
        vec2 du = 6. * f * (1. - f);
        float a = oceanHash(i), b = oceanHash(i + vec2(1., 0.));
        float c = oceanHash(i + vec2(0., 1.)), d = oceanHash(i + vec2(1.));
        float k = a - b - c + d;
        return vec3(a + (b - a) * u.x + (c - a) * u.y + k * u.x * u.y,
          du.x * (b - a + k * u.y), du.y * (c - a + k * u.x));
      }

      float oceanClouds(vec2 p) {
        mat2 rotate = mat2(.8, -.6, .6, .8);
        float n = oceanNoiseGradient(p).x * .58;
        p = rotate * p * 2.07 + 13.2;
        n += oceanNoiseGradient(p).x * .28;
        return n + oceanNoiseGradient(rotate * p * 2.11 + 7.3).x * .14;
      }

      vec3 oceanSky(vec3 direction, bool includeSun) {
        float elevation = max(direction.y, 0.);
        vec3 horizon = vec3(.65, .78, .79);
        vec3 zenith = mix(sky, vec3(.13, .32, .55), .35);
        vec3 color = mix(horizon, zenith, smoothstep(0., .88, elevation));
        vec2 cloudUV = direction.xz / max(.17, direction.y) * 2.3;
        cloudUV += vec2(time * .004, time * .0012);
        float clouds = smoothstep(.53, .76, oceanClouds(cloudUV));
        clouds *= smoothstep(.025, .27, elevation) * .58;
        color = mix(color, vec3(.91, .94, .93), clouds);
        if (includeSun) {
          float sunDot = max(0., dot(direction, sunDirection));
          float antialias = max(fwidth(sunDot), .000016);
          float disk = smoothstep(.99989 - antialias, .999975 + antialias, sunDot);
          color += vec3(1., .90, .69) * (disk * 6. + pow(sunDot, 58.) * .22);
        }
        return color * illumination;
      }

      void main() {
        vec2 p = vOceanWorld.xz;
        vec3 toEye = normalize(cameraPosition - vOceanWorld);
        float distanceToEye = length(cameraPosition - vOceanWorld);
        float a = p.x * .16 + p.y * .12 + time * .72;
        float b = p.x * .31 - p.y * .24 - time * .55;
        vec2 slope = vec2(cos(a) * .032 + cos(b) * .02325,
                          cos(a) * .024 - cos(b) * .018);
        mat2 turn = mat2(.8, -.6, .6, .8);
        vec3 broad = oceanNoiseGradient(p * .28 + vec2(time * .075, -time * .041));
        vec3 middle = oceanNoiseGradient(turn * p * .71 + vec2(-time * .10, time * .034));
        vec3 fine = oceanNoiseGradient(p * 1.67 + vec2(time * .16, time * .055));
        float detail = 1. - smoothstep(25., 190., distanceToEye);
        slope += broad.yz * .092 + transpose(turn) * middle.yz * .041 * detail;
        slope += fine.yz * .017 * detail * detail;
        vec3 normal = normalize(vec3(-slope.x, 1., -slope.y));
        vec3 color;

        if (cameraPosition.y < vOceanWorld.y) {
          vec3 incident = -toEye;
          float cosWater = clamp(dot(incident, normal), 0., 1.);
          const float eta = 1.333;
          float discriminant = 1. - eta * eta * (1. - cosWater * cosWater);
          float cosAir = sqrt(max(0., discriminant));
          vec3 refracted = normalize((incident - normal * cosWater) * eta
                                    + normal * max(.0001, cosAir));

          // Exact dielectric Fresnel, smoothly antialiased at the critical angle.
          float rs = (eta * cosWater - cosAir) / max(.0001, eta * cosWater + cosAir);
          float rp = (cosWater - eta * cosAir) / max(.0001, cosWater + eta * cosAir);
          float fresnel = clamp((rs * rs + rp * rp) * .5, 0., 1.);
          float windowEdge = max(fwidth(discriminant) * 1.25, .015);
          float transmission = smoothstep(-windowEdge, windowEdge, discriminant) * (1. - fresnel);

          // Beyond Snell's window the sea, not luminous sky lines, is reflected.
          vec3 reflected = reflect(incident, normal);
          float down = clamp(-reflected.y, 0., 1.);
          float patches = oceanNoiseGradient(p * .022 + reflected.xz * 3.).x;
          vec3 reflection = mix(water * .38, water * .76 + vec3(.012, .025, .022), down);
          reflection *= .78 + .28 * patches;
          vec3 transmitted = oceanSky(refracted, true);
          // This surface is lit through water; distance absorption belongs to the
          // shared depth compositor, which can also attenuate the real scene.
          color = mix(reflection, transmitted * .82, transmission);
        } else {
          vec3 reflected = reflect(-toEye, normal);
          reflected.y = abs(reflected.y);
          float viewCos = clamp(dot(toEye, normal), 0., 1.);
          float fresnel = .0204 + .9796 * pow(1. - viewCos, 5.);
          vec3 reflection = oceanSky(normalize(reflected), false);
          vec3 body = mix(water * .35, vec3(.006, .071, .102), .62);
          float cloudShade = .83 + .17 * oceanNoiseGradient(p * .019 + time * .009).x;
          color = mix(body * cloudShade, reflection, fresnel);

          // Sun glitter is restricted to its reflected path. Derivative-based
          // broadening prevents tiny high-frequency highlights from crawling.
          vec3 halfVector = normalize(toEye + sunDirection);
          float nh = max(dot(normal, halfVector), 0.);
          float roughness = .085 + min(.055, length(fwidth(normal)) * 1.7);
          float alpha2 = pow(roughness, 4.);
          float denominator = nh * nh * (alpha2 - 1.) + 1.;
          float distribution = alpha2 / max(.000002, 3.14159265 * denominator * denominator);
          float sunlight = min(7., distribution * .018) * max(0., dot(normal, sunDirection));
          color += vec3(1., .88, .61) * sunlight * illumination;
        }
        gl_FragColor = vec4(max(color, vec3(0.)), 1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),l=e?112:160,h=new on(2,2,l,l);h.rotateX(-Math.PI/2);let d=h.attributes.position;for(let p=0;p<d.count;p++){let f=d.getX(p),m=d.getZ(p);d.setXYZ(p,Math.sign(f)*f*f*n*.5,0,Math.sign(m)*m*m*n*.5)}h.computeBoundingSphere();let u=new Oe(h,c);return u.name="dielectric-ocean-surface",u.position.y=a,u.frustumCulled=!1,u.userData.oceanBoundary=!0,{mesh:u,material:c,update(p,f){t.value=p,f&&c.uniforms.eye.value.copy(f.position)}}}var j0=32,Cl=new we,Rl=new ie,Cu=new WeakMap;function Dm(n,e){n.computeBoundingBox();let t=n.boundingBox,i=t.getSize(new b),r=Math.max(i.x,i.y,i.z)/e;if(!r)return n;let s=Object.entries(n.attributes),a=n.attributes.position,o=new Map,c=[],l=[];for(let f=0;f<a.count;f++){let m=[Math.round((a.getX(f)-t.min.x)/r),Math.round((a.getY(f)-t.min.y)/r),Math.round((a.getZ(f)-t.min.z)/r)].join(":"),x=o.get(m);x===void 0&&(x=l.length,o.set(m,x),l.push({count:0,values:s.map(([,v])=>new Array(v.itemSize).fill(0))})),c[f]=x;let g=l[x];g.count++,s.forEach(([,v],_)=>{for(let y=0;y<v.itemSize;y++)g.values[_][y]+=v.getComponent(f,y)})}let h=[],d=new Set,u=n.index?.count||a.count;for(let f=0;f<u;f+=3){let m=c[n.index?n.index.getX(f):f],x=c[n.index?n.index.getX(f+1):f+1],g=c[n.index?n.index.getX(f+2):f+2];if(m===x||m===g||x===g)continue;let v=[m,x,g].sort((_,y)=>_-y).join(":");d.has(v)||(d.add(v),h.push(m,x,g))}if(h.length<18)return n;let p=new Pe;return s.forEach(([f,m],x)=>p.setAttribute(f,new ce(l.flatMap(g=>g.values[x].map(v=>v/g.count)),m.itemSize))),p.setIndex(h),p.computeVertexNormals(),p.computeBoundingSphere(),p}function q0(n){if(n.boundingSphere||n.computeBoundingSphere(),n.userData.distanceLevels)return n.userData.distanceLevels;if(Cu.has(n))return Cu.get(n);let e=(n.index?.count||n.attributes.position.count)/3;n.computeBoundingBox();let t=n.boundingBox.getSize(new b),i=e<600||Math.min(t.x,t.y,t.z)/Math.max(t.x,t.y,t.z)<.045?[n,n,n]:[n,Dm(n,14),Dm(n,7)];return Cu.set(n,i),i}function Um(n){n.updateMatrix(),n.updateMatrixWorld(!0),n.matrixAutoUpdate=!1}var Pl=class{constructor(e,{coarse:t=!1,terrain:i=[]}={}){this.root=e,this.coarse=t,this.entries=i,this.batches=[],this.owned=[],this.lastLevels=new Map,e.updateMatrixWorld(!0);let r=[];e.traverse(s=>{s.isMesh&&!s.userData.sectorManaged&&!s.material?.isShaderMaterial&&!Array.isArray(s.material)&&s.visible&&s.instanceMatrix?.usage!==va&&r.push(s)});for(let s of r){let a=q0(s.geometry);if(s.isInstancedMesh){let o=new Map;for(let c=0;c<s.count;c++){s.getMatrixAt(c,Cl),Cl.premultiply(s.matrixWorld);let l=s.name.startsWith("authored-")?8:j0,h=new b().setFromMatrixPosition(Cl),d=Math.floor(h.x/l)+":"+Math.floor(h.z/l);o.has(d)||o.set(d,[]),o.get(d).push({index:c,matrix:Cl.clone()})}for(let c of o.values()){let l=new et;l.name="sector-"+s.name,l.userData.sectorManaged=!0;let h=a.map(u=>{let p=new Ui(u,s.material,c.length);return p.name=s.name+"-distance",p.userData.sectorManaged=!0,c.forEach((f,m)=>{p.setMatrixAt(m,f.matrix),s.instanceColor&&(s.getColorAt(f.index,Rl),p.setColorAt(m,Rl))}),p.customDepthMaterial=s.customDepthMaterial,p.receiveShadow=s.receiveShadow,p.computeBoundingSphere(),Um(p),l.add(p),p});e.add(l);let d=h[0].boundingSphere.clone();this.entries.push({group:l,meshes:h,sphere:d,casts:s.castShadow,lod:0}),this.batches.push({source:s,instances:c,meshes:h})}s.visible=!1}else{let o=s.geometry.boundingSphere.clone().applyMatrix4(s.matrixWorld);this.entries.push({group:s,meshes:[s],levels:a,sphere:o,casts:s.castShadow,lod:0})}for(let o of a)o!==s.geometry&&!this.owned.includes(o)&&this.owned.push(o)}this.stats={regions:this.entries.length,active:0,high:0,medium:0,low:0,shadowCasters:0,submittedTriangles:0}}syncColors(){for(let e of this.batches)if(e.source.instanceColor)for(let t of e.meshes)e.instances.forEach((i,r)=>{e.source.getColorAt(i.index,Rl),t.setColorAt(r,Rl)}),t.instanceColor.needsUpdate=!0}update(e,t,i){let r=e.position.y>18,s=r?250:this.coarse?112:155,a=this.coarse?13:19,o=this.coarse?40:55,c=this.stats;c.active=c.high=c.medium=c.low=c.shadowCasters=c.submittedTriangles=0;for(let l of this.entries){let h=Math.max(0,l.sphere.center.distanceTo(t)-l.sphere.radius),d=h<s+(l.group.visible?6:0);if(l.group.visible=d,!d)continue;let u=h<a?0:h<o?1:2;u>l.lod&&h<(u===1?a:o)+3&&(u=l.lod),u<l.lod&&h>(l.lod===1?a:o)-3&&(u=l.lod),l.lod=u,c.active++,c[["high","medium","low"][u]]++;let p=l.casts&&h<(this.coarse?22:32);l.levels?(l.group.geometry=l.levels[u],l.group.castShadow=p):l.meshes.forEach((m,x)=>{m.visible=x===u,m.castShadow=p&&x===u}),p&&c.shadowCasters++;let f=l.levels?l.group:l.meshes[u];c.submittedTriangles+=(f.geometry.index?.count||f.geometry.attributes.position.count)/3*(f.count||1)}}dispose(){for(let e of this.owned)e.dispose()}};function Y0(n,e,t,i,r,s){let a=[],o=[],c=[],l=[],h=s*4,d=(f,m)=>{let x=r(f,m),g=.1,v=new b(-(r(f+g,m)-r(f-g,m))/(2*g),1,-(r(f,m+g)-r(f,m-g))/(2*g)).normalize();a.push(f,x,m),o.push(v.x,v.y,v.z),c.push(f/t,m/t)};for(let f=0;f<i;f++){let m=t*.5*(1-f/i);for(let x=0;x<4;x++)for(let g=0;g<s;g++){let v=g/s*2-1,[_,y]=x===0?[v,-1]:x===1?[1,v]:x===2?[-v,1]:[-1,-v];d(n+_*m,e+y*m)}}d(n,e);let u=a.length/3-1;for(let f=0;f<i;f++)for(let m=0;m<h;m++){let x=f*h+m,g=f*h+(m+1)%h;if(f===i-1)l.push(x,u,g);else{let v=x+h,_=g+h;l.push(x,v,g,g,v,_)}}let p=new Pe;return p.setAttribute("position",new ce(a,3)),p.setAttribute("normal",new ce(o,3)),p.setAttribute("uv",new ce(c,2)),p.setIndex(l),p.computeBoundingSphere(),p}function Nm(n,e,t,{coarse:i=!1,radius:r=420}={}){let s=[],o=Math.ceil(r*1.3/40);for(let c=-o;c<o;c++)for(let l=-o;l<o;l++){let h=(c+.5)*40,d=(l+.5)*40,u=new et;u.name="seabed-sector",n.add(u);let p=[i?4:6,2,1].map(f=>{let m=Y0(h,d,40,f,t,i?8:12),x=new Oe(m,e);return x.receiveShadow=!0,x.userData.sectorManaged=!0,u.add(x),Um(x),x});s.push({group:u,meshes:p,sphere:p[0].geometry.boundingSphere.clone(),casts:!1,lod:0})}return s}var wi=20,Ru=.002,Pu=new li,Fm=new b,Gi=new b,Sa=new b,Il=new b,Iu=new we,Om=new we,Ll=new b,Dl=new b,Ul=new b,Bm=(n,e,t)=>`${n},${e},${t}`,Nl=class{constructor(e,t){this.records=[],this.cells=new Map,this.triangles=0,e.updateMatrixWorld(!0),e.traverse(i=>{if(!i.isMesh||!t.has(i.material))return;let r=i.isInstancedMesh?i.count:1;for(let s=0;s<r;s++)Iu.copy(i.matrixWorld),i.isInstancedMesh&&(i.getMatrixAt(s,Om),Iu.multiply(Om)),this.add(i.geometry,Iu,i.name||i.material.name||"solid",s)})}add(e,t,i,r){let s=e.attributes.position,a=e.index,o=a?a.count:s.count,c=new Float32Array(o*3),l=new ni;for(let u=0;u<o;u++)Sa.fromBufferAttribute(s,a?a.getX(u):u).applyMatrix4(t),c.set([Sa.x,Sa.y,Sa.z],u*3),l.expandByPoint(Sa);let h={vertices:c,box:l,name:i,index:r},d=this.records.length;this.records.push(h),this.triangles+=o/3;for(let u=Math.floor(l.min.x/wi);u<=Math.floor(l.max.x/wi);u++)for(let p=Math.floor(l.min.y/wi);p<=Math.floor(l.max.y/wi);p++)for(let f=Math.floor(l.min.z/wi);f<=Math.floor(l.max.z/wi);f++){let m=Bm(u,p,f),x=this.cells.get(m)||[];x.push(d),this.cells.set(m,x)}}candidates(e,t){let i=new Set;for(let r=Math.floor((e.x-t)/wi);r<=Math.floor((e.x+t)/wi);r++)for(let s=Math.floor((e.y-t)/wi);s<=Math.floor((e.y+t)/wi);s++)for(let a=Math.floor((e.z-t)/wi);a<=Math.floor((e.z+t)/wi);a++)for(let o of this.cells.get(Bm(r,s,a))||[])i.add(o);return[...i].map(r=>this.records[r]).filter(r=>r.box.distanceToPoint(e)<t)}isInside(e){let t=new wn(e,new b(1,.137,.071).normalize()),i=new b;for(let r of this.candidates(e,.001)){if(!r.box.containsPoint(e))continue;let s=[],a=r.vertices;for(let o=0;o<a.length;o+=9)if(Ll.fromArray(a,o),Dl.fromArray(a,o+3),Ul.fromArray(a,o+6),t.intersectTriangle(Ll,Dl,Ul,!1,i)){let c=i.distanceTo(e);c>Ru&&!s.some(l=>Math.abs(l-c)<1e-4)&&s.push(c)}if(s.length%2)return!0}return!1}place(e,t,i,r,s){let a=new b(e.x,e.y,e.z),o=new b;for(let c of[0,3,6,10,16,24])for(let l=0;l<(c?8:1);l++){let h=l*Math.PI/4;if(o.copy(a),o.x+=Math.sin(h)*c,o.z+=Math.cos(h)*c,o.y=Math.max(i(o.x,o.z)+t,Math.min(r,a.y)),!(o.y>r||Math.hypot(o.x,o.z)>s)&&!this.contacts(o,t)&&!this.isInside(o))return e.copy(o),!0}return!1}contacts(e,t,i=!1,r=null){let s=0;for(let a of this.candidates(e,t)){let o=a.vertices;for(let c=0;c<o.length;c+=9){Ll.fromArray(o,c),Dl.fromArray(o,c+3),Ul.fromArray(o,c+6),Pu.set(Ll,Dl,Ul),Pu.closestPointToPoint(e,Fm),Gi.copy(e).sub(Fm);let l=Gi.length();if(!(l>=t-Ru)&&(s++,!!i&&(l<1e-8?Pu.getNormal(Gi):Gi.divideScalar(l),e.addScaledVector(Gi,t-l+Ru),r))){let h=Math.min(0,r.x*Gi.x+r.y*Gi.y+r.z*Gi.z);r.x-=Gi.x*h,r.y-=Gi.y*h,r.z-=Gi.z*h}}}return s}resolve(e,t,i=1.55,r=null,s=null){let a=new b(e.x,e.y,e.z),o=r?new b(r.x,r.y,r.z):a.clone();Il.copy(a).sub(o);let c=Math.max(1,Math.ceil(Il.length()/Math.min(.4,i*.35)));Il.divideScalar(c);let l=0,h=o.clone(),d=this.contacts(o,i)===0;for(let u=0;u<c;u++){o.add(Il);for(let p=0;p<4;p++){s&&(o.y=Math.max(o.y,s(o.x,o.z)+i));let f=this.contacts(o,i,!0,t);if(l+=f,!f)break}this.contacts(o,i)>0&&d?(o.copy(h),t&&(t.x=t.y=t.z=0)):this.contacts(o,i)===0&&(h.copy(o),d=!0)}return e.x=o.x,e.y=o.y,e.z=o.z,l}cameraEnd(e,t,i=.32){let r=new b().subVectors(t,e),s=r.length();r.normalize();let a=new b;for(let o=1.7;o<s;o+=.25)if(a.copy(e).addScaledVector(r,o),this.contacts(a,i))return e.clone().addScaledVector(r,Math.max(1.5,o-.4));return t}};var We=(n,e)=>{let t=-7+Math.sin(n*.045)*2.2+Math.cos(e*.05)*1.8+Math.sin((n+e)*.07)*.8,i=Math.max(0,Math.min(1,(Math.hypot(n,e)-125)/135)),r=i*i*(3-2*i),s=30*Math.exp(-((n-100)**2/2800+(e-245)**2/9e3));return t-r*(38+10*Math.sin(n*.025)*Math.cos(e*.018)+s)},Lu=Math.PI*2,di=(n,e,t)=>Math.max(e,Math.min(t,n)),ba=(n,e=0)=>Number.isFinite(n)?n:e,Fl=n=>di(ba(n),-1,1),Bl=n=>((n+Math.PI)%Lu+Lu)%Lu-Math.PI,pn=n=>({x:n.x,y:n.y,z:n.z}),zm=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y,n.z-e.z),Ol=(n,e,t,i)=>n+(e-n)*(1-Math.exp(-t*i)),Z0=(n,e,t)=>Bl(n+di(Bl(e-n),-t,t)),km=(n,e)=>({x:Math.sin(n)*Math.cos(e),y:Math.sin(e),z:-Math.cos(n)*Math.cos(e)});function Du(){return{position:{x:0,y:10,z:22},previousPosition:{x:0,y:10,z:22},velocity:{x:0,y:0,z:0},yaw:0,pitch:0,boost:0,cooldown:0,airborne:!1,airTime:0,breachReady:!0,speed:0,depth:8,distance:0,elapsed:0,boundaryWarning:!1,feintTime:0,feintCooldown:0}}function Uu(n){return n.airborne||n.feintCooldown>0||n.feintTime>0?!1:(n.feintTime=.65,n.feintCooldown=12,!0)}function Gm(n,e={},t=0){let i=di(ba(t),0,.05),r=[];if(!i)return r;let s=n.position,a=n.velocity;if(n.previousPosition=pn(s),n.elapsed+=i,n.cooldown=Math.max(0,n.cooldown-i),n.boost=Math.max(0,n.boost-i),n.feintTime=Math.max(0,n.feintTime-i),n.feintCooldown=Math.max(0,n.feintCooldown-i),e.skill&&Uu(n),n.yaw=Bl(n.yaw+Fl(e.turn)*1.75*i+di(ba(e.lookYaw),-Math.PI,Math.PI)),n.pitch=di(n.pitch+di(ba(e.lookPitch),-Math.PI,Math.PI),-1.35,1.35),e.boost&&n.cooldown===0&&!n.airborne&&(n.boost=.72,n.cooldown=4),n.airborne)n.airTime+=i,a.y-=15*i,a.x*=Math.exp(-.18*i),a.z*=Math.exp(-.18*i);else{s.y<18-1.2&&(n.breachReady=!0);let l=Fl(e.throttle);n.boost>0&&l===0&&!Fl(e.lift)&&(l=1);let h=km(n.yaw,0),d={x:h.x*l,y:h.y*l+Fl(e.lift)*.8,z:h.z*l},u=Math.max(1,Math.hypot(d.x,d.y,d.z)),p=n.boost>0?21:l<0?7.5:10;for(let x of["x","y","z"])d[x]=d[x]/u*p;if(n.feintTime>0){let x=.65-n.feintTime,g=x<.16?-9:x<.56?7.5:0;d.x+=Math.cos(n.yaw)*g,d.z+=Math.sin(n.yaw)*g}let f=Math.hypot(s.x,s.z);if(f>402){let x=s.x/f,g=s.z/f,v=di((f-402)/16,0,1),_=Math.max(0,d.x*x+d.z*g);d.x-=x*(_*v+5*v),d.z-=g*(_*v+5*v)}let m=n.feintTime>0?30:n.boost>0?5.5:3.6;a.x=Ol(a.x,d.x,m,i),a.y=Ol(a.y,d.y,m,i),a.z=Ol(a.z,d.z,m,i)}s.x+=a.x*i,s.y+=a.y*i,s.z+=a.z*i,!n.airborne&&s.y>18?a.y>2.2&&n.breachReady?(n.airborne=!0,n.airTime=0,n.breachReady=!1,n.boost=0,n.feintTime=0,a.y=Math.min(a.y,8.5),s.y=18,r.push({type:"breach",position:pn(s)})):(s.y=18,a.y=Math.min(0,a.y)):n.airborne&&s.y<=18&&(n.airborne=!1,n.airTime=0,a.y=Math.min(-2,a.y*.58),r.push({type:"splash",position:{x:s.x,y:18,z:s.z}}));let o=We(s.x,s.z)+1.7;s.y<o&&(s.y=o,a.y=Math.max(0,a.y));let c=Math.hypot(s.x,s.z);if(c>410&&!n.boundaryWarning?(n.boundaryWarning=!0,r.push({type:"boundary",position:pn(s)})):c<406&&(n.boundaryWarning=!1),c>420){let l=s.x/c,h=s.z/c;s.x=l*420,s.z=h*420;let d=Math.max(0,a.x*l+a.z*h);a.x-=l*d,a.z-=h*d}return n.speed=Math.hypot(a.x,a.y,a.z),n.depth=Math.max(0,18-s.y),n.distance+=zm(s,n.previousPosition),r}function zl(n,e,t,i,r){if(!Number.isFinite(r)||r<0)return!1;let s=n.x-t.x,a=n.y-t.y,o=n.z-t.z,c=e.x-i.x-s,l=e.y-i.y-a,h=e.z-i.z-o,d=c*c+l*l+h*h,u=d>1e-12?di(-(s*c+a*l+o*h)/d,0,1):0;return(s+c*u)**2+(a+l*u)**2+(o+h*u)**2<=r*r}function Nu(n,e){let t=[...String(n)].reduce((i,r)=>i*31+r.charCodeAt(0)>>>0,7);return{id:n,position:pn(e),previousPosition:pn(e),home:pn(e),velocity:{x:0,y:0,z:0},yaw:Bl(t%628/100),pitch:0,mode:"patrol",timer:0,elapsed:t%100/10,attackCooldown:0,lunge:0,lungeCooldown:1.8,warning:0}}function Vm(n,e,t,{safe:i=!1}={}){let r=di(ba(t),0,.05),s=[];if(!r)return s;let a=n,o=a.position,c=e.position;a.previousPosition=pn(o),a.timer+=r,a.elapsed+=r,a.attackCooldown=Math.max(0,a.attackCooldown-r),a.lunge=Math.max(0,a.lunge-r),a.lungeCooldown=Math.max(0,a.lungeCooldown-r);let l=zm(o,c),h=i||e.airborne;if((a.mode==="telegraph"||a.mode==="chase")&&(h||l>36||a.mode==="chase"&&a.timer>=10.5)){let _=i?"safe":e.airborne?"surface":l>36?"range":"timeout";s.push({type:"escaped",id:a.id,reason:_,position:pn(o)}),a.mode="recover",a.timer=0,a.lunge=0,a.warning=0}a.mode==="patrol"&&!h&&l<24?(a.mode="telegraph",a.timer=0,a.warning=1,s.push({type:"alert",id:a.id,position:pn(o)})):a.mode==="telegraph"&&a.timer>=1.15?(a.mode="chase",a.timer=0,a.warning=0,a.lungeCooldown=1.2):a.mode==="recover"&&a.timer>=6&&(a.mode="patrol",a.timer=0);let d,u,p;a.mode==="telegraph"?(d=c,u=.7,p=.95):a.mode==="chase"?(a.lungeCooldown===0&&l<15&&(a.lunge=.65,a.lungeCooldown=2.8),d=c,u=a.lunge>0?13.5:9.2,p=a.lunge>0?.35:1.05):a.mode==="recover"?(d={x:o.x+(o.x-c.x),y:di(a.home.y,We(o.x,o.z)+2,16),z:o.z+(o.z-c.z)},u=5,p=1.2):(d={x:a.home.x+Math.sin(a.elapsed*.22)*8,y:a.home.y+Math.sin(a.elapsed*.33)*2,z:a.home.z+Math.cos(a.elapsed*.22)*8},u=2.6,p=.8),Math.hypot(o.x,o.z)>415&&(d={x:0,y:d.y,z:0});let f=d.x-o.x,m=d.y-o.y,x=d.z-o.z;a.yaw=Z0(a.yaw,Math.atan2(f,-x),p*r),a.pitch=di(a.pitch+di(Math.atan2(m,Math.hypot(f,x))-a.pitch,-p*r,p*r),-1.3,1.3);let g=km(a.yaw,a.pitch);for(let _ of["x","y","z"])a.velocity[_]=Ol(a.velocity[_],g[_]*u,3.5,r),o[_]+=a.velocity[_]*r;o.y=di(o.y,We(o.x,o.z)+1,18-.7);let v=Math.hypot(o.x,o.z);return v>420&&(o.x*=420/v,o.z*=420/v),a.mode==="chase"&&!h&&a.attackCooldown===0&&zl(a.previousPosition,o,e.previousPosition||c,c,1.35)&&(s.push({type:"attack",id:a.id,position:pn(o)}),a.attackCooldown=3,a.mode="recover",a.timer=0,a.lunge=0),s}var Ei=Math.PI*2,kl={reef:{light:1,water:746103,deep:409678,sky:7319254,horizon:13231334,sand:13288356,rock:7900797,kelp:5605475,coral:[15569020,14393701,12219290,7518125],fog:.015,sun:3.7},kelp:{light:.78,water:2318170,deep:1195586,sky:12967633,horizon:15133908,sand:12038282,rock:7634783,kelp:8165457,coral:[12948070,14202226,9214338,8894624],fog:.017,sun:3.25},abyss:{light:.14,water:1194848,deep:533564,sky:8629461,horizon:13686504,sand:8755366,rock:6255753,kelp:4357510,coral:[11899604,7981258,8889309,13864887],fog:.018,sun:.72}};function J0(n=27931){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var Vi=new ct,K0=new b(0,1,0);function Mt(n,e,t,i,r=!0){if(!t.length)return null;let s=new Ui(n,e,t.length);return t.forEach((a,o)=>{Vi.position.set(...a.p),Vi.rotation.set(...a.r||[0,0,0]),a.q&&Vi.quaternion.copy(a.q),Vi.scale.set(...a.s||[1,1,1]),Vi.updateMatrix(),s.setMatrixAt(o,Vi.matrix),a.c!==void 0&&s.setColorAt(o,new ie(a.c))}),s.castShadow=r,s.receiveShadow=!0,s.computeBoundingSphere(),i.add(s),s}function _s(n,e,t,i,r){let s=new b(...e),a=new b(...t),o=a.sub(s);n.push({p:s.addScaledVector(o,.5).toArray(),s:[i,o.length(),i],q:new Dt().setFromUnitVectors(K0,o.clone().normalize()),c:r})}function Gl(n,e,t,i,r=32){let s=new qn(n.map(h=>new b(...h))),a=new Yn(s,r,e,11,!1),o=a.attributes.position,c=a.attributes.normal;for(let h=0;h<o.count;h++){let d=Math.floor(h/12)/r,u=e*(.14*Math.sin(d*19)+.07*Math.cos(d*31));o.setXYZ(h,o.getX(h)+c.getX(h)*u,o.getY(h)+c.getY(h)*u,o.getZ(h)+c.getZ(h)*u)}a.computeVertexNormals();let l=new Oe(a,t);return l.castShadow=l.receiveShadow=!0,i.add(l),l}var Vl=class{constructor(e,{coarse:t=!1,reduced:i=!1}={}){this.scene=e,this.coarse=t,this.reduced=i,this.root=new et,this.root.name="living-sea",e.add(this.root),this.uniforms={time:{value:0},water:{value:new ie},above:{value:0}},this.materials=[],this.rays=[],this.schools=[],this.obstacles=[],this.palette=kl.reef,this.biome="reef",this.air=0,this.random=J0(),this.fogColor=new ie,this.sunDirection=new b(-.36,.85,-.39).normalize(),this.makeMaterials(),this.makeLighting(),this.makeTerrain(),this.makeLandmarks(),this.makeOuterWorld(),this.makeReefs(),this.makeVegetation();let r=Am({floor:We,material:this.rockMaterial,coarse:this.coarse});this.root.add(r.group),this.reefFloor=r.floorAt,this.garden=Rm({floor:this.reefFloor,time:this.uniforms.time,coarse:this.coarse}),this.root.add(this.garden),this.ready=Promise.all([this.ready,Im({floor:this.reefFloor,coarse:this.coarse,time:this.uniforms.time}).then(s=>{this.reefArt=s,this.root.add(s)})]),this.makeSurface(),this.makeSky(),this.makeAtmosphere(),this.makeSchools(),this.setBiome("reef"),this.collision=new Nl(this.root,new Set([this.rockMaterial,this.archMaterial,this.woodMaterial,this.darkWoodMaterial,this.ventMaterial,this.ventRimMaterial])),this.solidMeshes=[],this.root.traverse(s=>{s.isMesh&&[this.rockMaterial,this.archMaterial,this.woodMaterial,this.darkWoodMaterial,this.ventMaterial,this.ventRimMaterial].includes(s.material)&&this.solidMeshes.push(s)}),this.ready=this.ready.then(()=>{this.sectors=new Pl(this.root,{coarse:this.coarse,terrain:this.terrainSectors}),this.sectors.syncColors()})}material(e,{roughness:t=.72,sand:i=!1,rock:r=!1,sway:s=!1,wood:a=!1,brain:o=!1,coral:c=!1,...l}={}){let h=new xt({color:e,roughness:t,...l});return h.customProgramCacheKey=()=>`open-sea-6-${i}-${r}-${s}-${a}-${o}-${c}`,h.onBeforeCompile=d=>{d.uniforms.uSeaTime=this.uniforms.time,i&&(d.uniforms.uSandColor=this.sandTextures.color,d.uniforms.uSandNormal=this.sandTextures.normal,d.uniforms.uSandARM=this.sandTextures.arm),r&&(d.uniforms.uRockColor=this.rockTextures.color,d.uniforms.uRockNormal=this.rockTextures.normal,d.uniforms.uRockARM=this.rockTextures.arm);let u=`varying vec3 vSeaWorld; varying vec2 vSeaUv; uniform float uSeaTime;
`;d.vertexShader=u+d.vertexShader,d.fragmentShader=u+`
        float seaHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
        float seaNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
          return mix(mix(mix(seaHash(i),seaHash(i+vec3(1,0,0)),f.x),mix(seaHash(i+vec3(0,1,0)),seaHash(i+vec3(1,1,0)),f.x),f.y),
          mix(mix(seaHash(i+vec3(0,0,1)),seaHash(i+vec3(1,0,1)),f.x),mix(seaHash(i+vec3(0,1,1)),seaHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
        `+d.fragmentShader,i&&(d.fragmentShader=`uniform sampler2D uSandColor,uSandNormal,uSandARM;
`+d.fragmentShader),r&&(d.fragmentShader=`
        uniform sampler2D uRockColor,uRockNormal,uRockARM;
        vec3 rockWeights(vec3 n){vec3 w=pow(abs(n),vec3(4.));return w/max(.0001,w.x+w.y+w.z);}
        vec3 rockSample(sampler2D tex,vec3 p,vec3 w){p*=.17;return texture2D(tex,p.yz).rgb*w.x+texture2D(tex,p.xz).rgb*w.y+texture2D(tex,p.xy).rgb*w.z;}
      `+d.fragmentShader),r&&(d.fragmentShader=d.fragmentShader.replace("#include <normal_fragment_maps>",`
        #include <normal_fragment_maps>
        vec3 wn=inverseTransformDirection(normal,viewMatrix),weights=rockWeights(wn),tp=vSeaWorld*.17;
        vec3 nx=texture2D(uRockNormal,tp.yz).xyz*2.-1.,ny=texture2D(uRockNormal,tp.xz).xyz*2.-1.,nz=texture2D(uRockNormal,tp.xy).xyz*2.-1.;
        vec3 detail=vec3((nx.z-1.)*sign(wn.x),nx.y,nx.x)*weights.x+vec3(ny.x,(ny.z-1.)*sign(wn.y),ny.y)*weights.y+vec3(nz.x,nz.y,(nz.z-1.)*sign(wn.z))*weights.z;
        normal=normalize((viewMatrix*vec4(normalize(wn+detail*.4),0.)).xyz);
      `).replace("#include <roughnessmap_fragment>",`
        #include <roughnessmap_fragment>
        roughnessFactor=clamp(rockSample(uRockARM,vSeaWorld,rockWeights(inverseTransformDirection(normalize(vNormal),viewMatrix))).g,.55,.98);
      `)),i&&(d.fragmentShader=d.fragmentShader.replace("#include <normal_fragment_maps>",`
        #include <normal_fragment_maps>
        vec3 sandDetail=texture2D(uSandNormal,vSeaWorld.xz*.11).xyz*2.-1.;
        vec3 sandWorld=inverseTransformDirection(normal,viewMatrix);
        sandWorld=normalize(sandWorld+vec3(sandDetail.x,0.,-sandDetail.y)*.58);
        normal=normalize((viewMatrix*vec4(sandWorld,0.)).xyz);
      `).replace("#include <roughnessmap_fragment>",`
        #include <roughnessmap_fragment>
        roughnessFactor=clamp(texture2D(uSandARM,vSeaWorld.xz*.11).g,.7,1.);
      `)),(i||o)&&(d.fragmentShader=d.fragmentShader.replace("#include <normal_fragment_begin>",`
        #include <normal_fragment_begin>
        float surfaceRelief=${r?"seaNoise(vSeaWorld*2.8)*.19+seaNoise(vSeaWorld*16.)*.021":o?"sin(vSeaWorld.x*9.+sin(vSeaWorld.y*8.))*cos(vSeaWorld.z*9.)*.08":"sin(vSeaWorld.z*4.6+sin(vSeaWorld.x*.31)*3.)*.025"};
        vec3 dp1=dFdx(-vViewPosition),dp2=dFdy(-vViewPosition);
        vec3 r1=cross(dp2,normal),r2=cross(normal,dp1);
        float determinant=dot(dp1,r1);
        normal=normalize(abs(determinant)*normal-sign(determinant)*(dFdx(surfaceRelief)*r1+dFdy(surfaceRelief)*r2));
      `)),s&&(d.vertexShader=d.vertexShader.replace("#include <begin_vertex>",`
        #include <begin_vertex>
        #ifdef USE_INSTANCING
          vec3 stemWorld=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;
          float swayStrength=pow(clamp((stemWorld.y+9.)*.065,0.,1.8),1.7);
          transformed.x+=sin(uSeaTime*.74+stemWorld.z*.12+stemWorld.y*.22)*swayStrength*.42/max(.12,length(instanceMatrix[0].xyz));
          transformed.z+=cos(uSeaTime*.56+stemWorld.x*.13+stemWorld.y*.19)*swayStrength*.2/max(.12,length(instanceMatrix[2].xyz));
        #endif
      `)),d.vertexShader=d.vertexShader.replace("#include <worldpos_vertex>",`
        #include <worldpos_vertex>
        vec4 seaPoint=vec4(transformed,1.);
        #ifdef USE_INSTANCING
          seaPoint=instanceMatrix*seaPoint;
        #endif
        vSeaWorld=(modelMatrix*seaPoint).xyz; vSeaUv=uv;
      `),d.fragmentShader=d.fragmentShader.replace("#include <color_fragment>",`
        #include <color_fragment>
        ${i?`float ripple=sin(vSeaWorld.z*4.6+sin(vSeaWorld.x*.31)*3.+sin(vSeaWorld.z*.12));
        float grain=fract(sin(dot(floor(vSeaWorld.xz*90.),vec2(12.9898,78.233)))*43758.5453);
        diffuseColor.rgb*=texture2D(uSandColor,vSeaWorld.xz*.11).rgb*(1.38+ripple*.05+grain*.04);`:""}
        ${r?`vec3 rockN=inverseTransformDirection(normalize(vNormal),viewMatrix);
        vec3 rockW=rockWeights(rockN),albedo=rockSample(uRockColor,vSeaWorld,rockW);
        diffuseColor.rgb*=albedo*1.65;
        float weather=seaNoise(vSeaWorld*.4);
        diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.68,.82,.59),smoothstep(.58,.85,weather)*.32);`:""}
        ${a?`float grain=sin(vSeaWorld.z*18.+sin(vSeaWorld.x*4.)*2.);
        diffuseColor.rgb*=.84+.11*grain;`:""}
        ${s?`float vein=pow(max(0.,1.-abs(vSeaUv.x-.5)*7.),8.);
        float folds=sin(vSeaUv.y*42.+sin(vSeaUv.x*16.));
        diffuseColor.rgb*=.91+vein*.16+folds*.035;`:""}
        ${o?`vec3 p=vSeaWorld*7.;float ridges=sin(p.x+sin(p.y*1.3))+cos(p.z+cos(p.y));
        float grooves=pow(1.-min(1.,abs(ridges)*.75),5.);diffuseColor.rgb*=.56+grooves*.59;`:""}
      `),d.fragmentShader=d.fragmentShader.replace("#include <lights_fragment_end>",`
        #include <lights_fragment_end>
        vec2 causticUV=vSeaWorld.xz*.56;
        causticUV+=vec2(sin(causticUV.y*.75+uSeaTime*.46),cos(causticUV.x*.72-uSeaTime*.37))*.8;
        float causticA=sin(causticUV.x*2.+sin(causticUV.y*1.7+uSeaTime*.34));
        float causticB=sin(causticUV.y*2.1+cos(causticUV.x*1.7-uSeaTime*.29));
        float caustic=pow(1.-min(1.,abs(causticA+causticB)*.62),16.);
        float submerged=1.-smoothstep(17.3,18.2,vSeaWorld.y);
        reflectedLight.directDiffuse*=1.+caustic*submerged*exp(-max(0.,18.-vSeaWorld.y)*.035)*.78;
        ${r?"reflectedLight.indirectDiffuse*=mix(.65,1.,rockSample(uRockARM,vSeaWorld,rockWeights(inverseTransformDirection(normalize(vNormal),viewMatrix))).r);":""}
        ${c?"float nearby=1.-smoothstep(12.,48.,length(cameraPosition-vSeaWorld));reflectedLight.indirectDiffuse+=diffuseColor.rgb*nearby*.22;":""}
        diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.81,.98,1.),clamp((10.-vSeaWorld.y)*.018,0.,.4));
      `)},this.materials.push(h),h}makeMaterials(){let e=new hr(new Uint8Array([128,128,255,255]),1,1);e.needsUpdate=!0,this.rockTextures={color:{value:e},normal:{value:e},arm:{value:e}},this.sandTextures={color:{value:e},normal:{value:e},arm:{value:e}};let t=new oa;this.ready=Promise.all(["rock","sand"].flatMap(i=>[["color","color"],["normal","normal"],["arm","arm"]].map(async([r,s])=>{let a=await t.loadAsync("assets/materials/"+i+"-"+s+".jpg");a.wrapS=a.wrapT=Yr,a.anisotropy=this.coarse?4:8,r==="color"&&(a.colorSpace=ei),this[i+"Textures"][r].value=a}))).then(()=>e.dispose()),this.sandMaterial=this.material(13288356,{sand:!0,roughness:.94}),this.rockMaterial=this.material(7900797,{rock:!0,roughness:.88}),this.archMaterial=this.material(10069389,{rock:!0,roughness:.83}),this.coralMaterial=this.material(16777215,{coral:!0,roughness:.56,metalness:.04}),this.plateMaterial=this.material(16777215,{coral:!0,roughness:.68,side:ht}),this.brainMaterial=this.material(16777215,{coral:!0,brain:!0,roughness:.62}),this.kelpMaterial=this.material(5605475,{sway:!this.reduced,side:ht,roughness:.65}),this.kelpMaterial.emissive.set(2705203),this.kelpMaterial.emissiveIntensity=.32,this.stemMaterial=this.material(6321747,{sway:!this.reduced}),this.woodMaterial=this.material(8086096,{wood:!0,roughness:.93}),this.darkWoodMaterial=this.material(4537908,{wood:!0,roughness:.96}),this.sailMaterial=this.material(11907996,{side:ht,roughness:.98}),this.ventMaterial=this.material(3489344,{rock:!0,roughness:.92}),this.ventRimMaterial=this.material(10326616,{emissive:4345905,emissiveIntensity:.35})}prepareEnvironment(e){let t=new Tn,i=this.sky.clone();i.position.set(0,0,0),i.visible=!0,i.material=this.sky.material.clone(),i.material.uniforms=Ml.clone(this.sky.material.uniforms),i.material.uniforms.air.value=1,t.add(i);let r=new vs(e);this.environment=r.fromScene(t,.05,.1,2e3),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.38,i.material.dispose(),r.dispose()}makeLighting(){let e=this.sun=new cs(16773076,3.7);e.position.copy(this.sunDirection).multiplyScalar(70),e.castShadow=!0,e.shadow.mapSize.set(this.coarse?1024:2048,this.coarse?1024:2048),e.shadow.camera.left=e.shadow.camera.bottom=-31,e.shadow.camera.right=e.shadow.camera.top=31,e.shadow.camera.near=1,e.shadow.camera.far=160,e.shadow.bias=-65e-5,e.shadow.normalBias=.09,e.shadow.radius=5,this.root.add(e,e.target),this.ambient=new la(11001322,6060142,1.45),this.root.add(this.ambient),this.fill=new cs(8240605,.5),this.fill.position.set(18,10,40),this.root.add(this.fill),this.scene.fog=new Hs(746103,.015),this.scene.background=new ie(746103)}makeTerrain(){this.terrainSectors=Nm(this.root,this.sandMaterial,We,{coarse:this.coarse,radius:420});let e=this.rockGeometry=new rs(1,this.coarse?3:5),t=e.attributes.position;for(let c=0;c<t.count;c++){let l=t.getX(c),h=t.getY(c),d=t.getZ(c),u=1+.13*Math.sin(l*5+h*3)*Math.cos(d*7)+.075*Math.cos(h*9+l*3)+.023*Math.sin(l*27+h*19+d*23);t.setXYZ(c,l*u,h*u,d*u)}e.computeVertexNormals();let i=new Map,r=e.attributes.normal,s=c=>`${t.getX(c).toFixed(4)},${t.getY(c).toFixed(4)},${t.getZ(c).toFixed(4)}`;for(let c=0;c<t.count;c++){let l=s(c),h=i.get(l)||new b;h.add(new b(r.getX(c),r.getY(c),r.getZ(c))),i.set(l,h)}for(let c=0;c<t.count;c++){let l=i.get(s(c)).normalize();r.setXYZ(c,l.x,l.y,l.z)}let a=[],o=this.random;for(let c=0;c<(this.coarse?112:165);c++){let l=o()*Ei,h=15+Math.sqrt(o())*123,d=Math.cos(l)*h,u=Math.sin(l)*h;if(Math.abs(d)<7&&u>-30&&u<40)continue;let p=1.2+o()*4.1;a.push({p:[d,We(d,u)+p*.28,u],s:[p,p*(.4+o()*.5),p*(.55+o()*.7)],r:[o()*.4,o()*Ei,o()*.3]})}for(let c=0;c<(this.coarse?95:155);c++){let l=o()*Ei,h=170+Math.sqrt(o())*220,d=Math.sin(l)*h,u=Math.cos(l)*h,p=3+o()*10;[[210,-165],[-205,-165],[100,245]].some(([f,m])=>Math.hypot(d-f,u-m)<42)||a.push({p:[d,We(d,u)+p*.42,u],s:[p,p*(.8+o()*1.4),p*(.65+o()*.8)],r:[o()*.2,l,o()*.2]})}for(let c=0;c<24;c++){let l=c/24*Ei,h=412+o()*8,d=Math.sin(l)*h,u=Math.cos(l)*h;a.push({p:[d,We(d,u)+10+o()*6,u],s:[10+o()*13,10+o()*20,10+o()*10],r:[0,l,.12]})}this.rocks=Mt(e,this.rockMaterial,a,this.root),this.rocks.name="lagoon-rocks",a.filter(c=>Math.hypot(c.p[0],c.p[2])<120&&Math.min(...c.s)>2).sort((c,l)=>Math.hypot(c.p[0],c.p[2]-22)-Math.hypot(l.p[0],l.p[2]-22)).slice(0,12).forEach(c=>this.obstacles.push({position:new b(...c.p),radius:Math.min(...c.s)*.84}))}makeLandmarks(){let e=[["cathedral","\u0643\u0627\u062A\u062F\u0631\u0627\u0626\u064A\u0629 \u0627\u0644\u0645\u0631\u062C\u0627\u0646",0,null,-22,"coral"],["wreck","\u062D\u0637\u0627\u0645 \u0627\u0644\u0644\u0624\u0644\u0624\u0629",52,null,-50,"wreck"],["kelp","\u0642\u0648\u0633 \u063A\u0627\u0628\u0629 \u0627\u0644\u0645\u062F\u0651",-48,null,-65,"kelp"],["moonpool","\u0639\u064A\u0646 \u0627\u0644\u0634\u0645\u0633",-70,13,25,"surface"],["vents","\u0627\u0644\u0645\u062F\u0627\u062E\u0646 \u0627\u0644\u0632\u0631\u0642\u0627\u0621",62,null,48,"vent"],["sanctuary","\u062D\u062F\u064A\u0642\u0629 \u0627\u0644\u0628\u062F\u0627\u064A\u0629",0,10,22,"sanctuary"],["titan","\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0639\u0645\u0627\u0644\u0642\u0629",210,We(210,-165)+18,-165,"coral"],["lantern","\u063A\u0627\u0628\u0629 \u0627\u0644\u0641\u0648\u0627\u0646\u064A\u0633",-205,We(-205,-165)+12,-165,"kelp"],["rift","\u0634\u0642 \u0627\u0644\u064A\u0627\u0642\u0648\u062A",100,We(100,245)+10,245,"vent"]];this.landmarks=e.map(([l,h,d,u,p,f])=>({id:l,name:h,type:f,radius:7,position:new b(d,u??We(d,p)+(l==="wreck"||l==="kelp"?4:3),p)}));let t=new et;t.position.set(0,We(0,-22),-22),this.root.add(t);for(let[l,h,d]of[[-4,1.35,-.13],[2,1.7,.1]]){let u=Gl([[-10,0,l],[-9,5,l-1],[-6,11,l],[-1,13.5,l+1],[5,11.5,l],[9,6,l-1],[10,0,l]],h,this.archMaterial,t,40);u.rotation.z=d}let i=[];for(let l of[-1,1])for(let h=0;h<6;h++)i.push({p:[l*(8.5+h*.3),1.3+h%2,-7+h*2.5],s:[2.3,2.5+h*.2,2],r:[0,h*.8,l*.2]});Mt(this.rockGeometry,this.archMaterial,i,t);for(let l of[-9,9])for(let h of[-26,-20])this.obstacles.push({position:new b(l,We(0,-22)+4,h),radius:2.15});this.makeWreck();let r=new et;r.position.set(-48,We(-48,-65),-65),r.rotation.y=-.5,this.root.add(r),Gl([[-7,0,0],[-8,4,-.5],[-6,9,-.8],[-1,10.5,0],[4,9,0],[7,3,1],[8,0,2]],1.35,this.rockMaterial,r);for(let l of[-7,7])this.obstacles.push({position:new b(l,3,0).applyEuler(r.rotation).add(r.position),radius:1.65});let s=new et;s.position.set(-70,9.5,25),this.root.add(s);let a=new Oe(new Si(9.2,1.8,12,56),this.archMaterial);a.rotation.x=Math.PI/2,a.scale.z=1.5,a.receiveShadow=a.castShadow=!0,s.add(a);let o=[];for(let l=0;l<18;l++){let h=l/18*Ei;o.push({p:[Math.cos(h)*10,-3,Math.sin(h)*10],s:[2.6,7.5+Math.sin(l*2)*1.5,2.8],r:[.08,h,.13]})}Mt(this.rockGeometry,this.archMaterial,o,s);for(let l=0;l<8;l++){let h=l/8*Ei;this.obstacles.push({position:new b(-70+Math.cos(h)*9.8,9.5,25+Math.sin(h)*9.8),radius:2.35})}this.makeVents();let c=[];for(let l of[-1,1])for(let h=0;h<7;h++){let d=l*(8+Math.sin(h)*2),u=9+h*4;c.push({p:[d,We(d,u)+1.5,u],s:[2.5+Math.sin(h),2.5+h*.2,3.3],r:[0,h,.2*l]})}Mt(this.rockGeometry,this.archMaterial,c,this.root),c.forEach(l=>this.obstacles.push({position:new b(...l.p),radius:Math.min(...l.s)*.83}))}makeOuterWorld(){let e=new et;e.position.set(210,We(210,-165),-165),this.root.add(e);for(let[l,h]of[[0,3.1],[-16,2.3],[16,1.9]])Gl([[-23,0,l],[-22,13,l-2],[-14,28,l],[0,34,l+2],[15,27,l],[23,11,l-2],[24,0,l]],h,this.archMaterial,e,64);let t=this.random,i=[],r=[],s=[],a=[],o=this.material(5619367,{emissive:2260881,emissiveIntensity:1.1,roughness:.3,metalness:.16});for(let l=0;l<28;l++){let h=l*2.399,d=9+Math.sqrt(l/28)*37,u=-205+Math.sin(h)*d,p=-165+Math.cos(h)*d,f=We(u,p),m=9+t()*18;i.push({p:[u,f+m*.5,p],s:[.5+t()*.35,m,.5],r:[.03,h,.08]});for(let x=0;x<4;x++){let g=m*(.52+x*.13),v=2.2-x*.35+t();r.push({p:[u,f+g,p],s:[v,.35,v*.8],r:[.09,h,.08],c:[7524288,8231372,13150852][l%3]}),s.push({p:[u,f+g+.08,p],s:[v*.87,.2,v*.7],r:[Math.PI/2+.09,h,.08]})}}Mt(new Oi(.3,1,1,12),this.archMaterial,i,this.root),Mt(new Ut(1,28,12),this.plateMaterial,r,this.root,!1),Mt(new Si(1,.045,5,40),o,s,this.root,!1);let c=[];for(let l=0;l<22;l++){let h=l%2?1:-1,d=196+Math.floor(l/2)*10,u=100+h*(19+Math.sin(l)*5);c.push({p:[u,We(u,d)+12,d],s:[8+t()*4,15+t()*10,8],r:[.08,l*.7,h*.12]});for(let p=0;p<4;p++)a.push({p:[u-h*6,We(u,d)+3+p*3,d],s:[2.1,.14,2.7],r:[.1,t()*Ei,h*.16],c:10712740})}Mt(this.rockGeometry,this.rockMaterial,c,this.root),Mt(new Ut(1,24,10),this.plateMaterial,a,this.root);for(let[l,h,d]of[[-205,-165,4762036],[100,245,5860554],[210,-165,6987432]]){let u=new os(d,65,42,1.5);u.position.set(l,We(l,h)+14,h),this.root.add(u)}this.diveLamp=new ha(10676463,0,42,.64,.65,1.3),this.root.add(this.diveLamp,this.diveLamp.target)}makeWreck(){let e=new et;e.position.set(52,We(52,-50)+.2,-50),e.rotation.set(.055,-.6,-.13),this.root.add(e);let t=[];for(let o of[-1,1])for(let c=0;c<6;c++){let l=new Pe,h=[],d=[],u=[],p=[],f=c===4?-7:-9,m=c===5&&o>0?3:9;for(let g=0;g<=24;g++){let v=f+(m-f)*g/24,_=Math.pow(Math.max(.02,Math.sin((v+9)/18*Math.PI)),.55)*3.5,y=o*_*(.5+c*.11),T=c*.58+.03*v*v;if(h.push(y,T,v,y+o*.08,T+.48,v),d.push(o,.1,0,o,.1,0),u.push(g/24,0,g/24,1),g<24){let M=g*2;p.push(M,M+1,M+2,M+1,M+3,M+2)}}l.setAttribute("position",new ce(h,3)),l.setAttribute("normal",new ce(d,3)),l.setAttribute("uv",new ce(u,2)),l.setIndex(p),l.computeVertexNormals();let x=new Oe(l,c%2?this.woodMaterial:this.darkWoodMaterial);x.material.side=ht,x.castShadow=x.receiveShadow=!0,e.add(x)}for(let o=0;o<8;o++){let c=-7+o*2,l=Math.pow(Math.sin((c+9)/18*Math.PI),.55)*3.5;Gl([[-l,3.3,c],[-l*.8,1.2,c],[0,.2,c],[l*.8,1.2,c],[l,3.3,c]],.14,this.darkWoodMaterial,e,14),o<4&&t.push({p:[0,2.9,c],s:[l*1.85,.17,.45],r:[0,.015*o,0]})}Mt(new Fi(1,1,1),this.woodMaterial,t,e);let i=[];_s(i,[0,0,0],[.9,14,-.7],.22),_s(i,[-4,10,-.45],[4.2,10.3,-.6],.13),_s(i,[0,1,-6],[-2,5,-9.4],.19),Mt(new Oi(.72,1,1,9),this.darkWoodMaterial,i,e);let r=new Pe;r.setAttribute("position",new ce([-3.8,9.9,-.35,.8,10.1,-.4,-3,6.4,.25,-3,6.4,.25,.8,10.1,-.4,-1.4,5.8,.6,-.8,9.95,-.4,3.7,10.12,-.5,2.8,7.6,.1],3)),r.computeVertexNormals();let s=new Oe(r,this.sailMaterial);s.castShadow=!0,e.add(s);let a=new Oe(new Si(.9,.12,6,24,Math.PI),this.ventMaterial);a.position.set(4.7,.8,4),a.rotation.z=Math.PI,e.add(a)}makeVents(){let e=new et;e.position.set(62,We(62,48),48),this.root.add(e);let t=[],i=[];for(let s=0;s<7;s++){let a=s*2.4,o=Math.sin(a)*(s?4.4:0),c=Math.cos(a)*(s?4.2:0),l=3+s%3*1.5;t.push({p:[o,l/2,c],s:[1.2,l,1.2],r:[0,a,Math.sin(s)*.04]}),i.push({p:[o,l,c],s:[.7,.7,.7],r:[Math.PI/2,0,0]})}Mt(new Oi(.48,1,1,12,3,!0),this.ventMaterial,t,e),Mt(new Si(1,.19,8,18),this.ventRimMaterial,i,e,!1);let r=new os(5552326,20,17,2);r.position.set(0,4,0),e.add(r),this.ventCenter=e.position.clone()}makeReefs(){let e=this.random,t=[],i=[],r=[],s=[],a=[[207,-150],[224,-169],[-214,-179],[-191,-153],[85,222],[110,264],[55,-54],[47,-43],[-78,24],[-62,30],[68,46]];for(let o=0;o<(this.coarse?72:110);o++){let c=a[o%a.length],l=c[0]+(e()-.5)*10,h=c[1]+(e()-.5)*11,d=We(l,h)+.35,u=.8+e()*1.5,p=this.palette.coral[o%4];if(o%5===0&&s.push({p:[l+.8,d+u*.48,h+.8],s:[u*.8,u*.7,u*.95],c:p}),o%3===0){for(let m=0;m<4;m++)r.push({p:[l+Math.sin(m*2)*.7,d+.6+m*.5,h+Math.cos(m*2)*.6],s:[u*(1.5-m*.2),.13,u*(1.2-m*.12)],r:[.08*m,e()*Ei,.04*m],c:p});continue}let f=[l,d+u*1.4,h];_s(t,[l,d,h],f,u*.15,p);for(let m=0;m<5;m++){let x=m/5*Ei+e(),g=[l+Math.sin(x)*u*.9,d+u*(1.7+e()),h+Math.cos(x)*u*.7],v=[l,d+u*(.6+m*.12),h];_s(t,v,g,u*.085,p),i.push({p:g,s:[u*.077,u*.13,u*.077],c:new ie(p).lerp(new ie(15982529),.3).getHex()});for(let _ of[-1,1]){let y=[g[0]+_*Math.cos(x)*u*.32,g[1]+u*.5,g[2]+_*Math.sin(x)*u*.25];_s(t,g,y,u*.044,p),i.push({p:y,s:[u*.052,u*.086,u*.052],c:new ie(p).lerp(new ie(15982529),.4).getHex()})}}}this.coralMeshes=[Mt(new Oi(.56,1,1,9),this.coralMaterial,t,this.root),Mt(new Ut(1,8,5),this.coralMaterial,i,this.root,!1),Mt(new Ut(1,20,9),this.plateMaterial,r,this.root),Mt(new Ut(1,18,12),this.brainMaterial,s,this.root)],this.coralEntries=[t,i,r,s]}makeVegetation(){let e=this.random,t=[],i=[],r=[],s=new on(1,1,2,7);s.translate(0,.5,0);let a=s.attributes.position;for(let o=0;o<a.count;o++){let c=a.getY(o),l=a.getX(o);a.setXYZ(o,l*Math.pow(Math.max(.025,Math.sin(c*Math.PI)),.65),c,Math.sin(c*Math.PI)*.18+l*l*.2)}s.computeVertexNormals();for(let o=0;o<(this.coarse?56:85);o++){let c=o%3!==0,l=c?-48+(e()-.5)*39:(e()-.5)*170,h=c?-65+(e()-.5)*34:(e()-.5)*150,d=We(l,h),u=c?8+e()*12:3+e()*7;i.push({p:[l,d+u/2,h],s:[.065,u,.065]});for(let p=1;p<11;p++){let f=u*p/11,m=p*2.39;t.push({p:[l,d+f,h],s:[.3+e()*.4,2.2+e()*1.9,1],r:[Math.sin(m)*.65,m,.55+Math.cos(m)*.25],c:new ie(16777215).multiplyScalar(.72+e()*.28).getHex()})}}for(let o=0;o<(this.coarse?250:450);o++){let c=e()*Ei,l=10+e()*100,h=Math.cos(c)*l,d=Math.sin(c)*l;r.push({p:[h,We(h,d)-.1,d],s:[.18+e()*.27,.65+e()*1.2,.6],r:[.12,e()*Ei,.25]})}Mt(new Oi(.6,1,1,6),this.stemMaterial,i,this.root,!1),this.kelpLeaves=Mt(s,this.kelpMaterial,t,this.root,!1),Mt(s,this.kelpMaterial,r,this.root,!1)}surfaceHeight(e,t,i){return 18+Math.sin(e*.16+t*.12+i*.72)*.2+Math.sin(e*.31-t*.24-i*.55)*.075}makeSurface(){let e=Lm({size:420*3,coarse:this.coarse,time:this.uniforms.time,water:this.uniforms.water,sky:this.palette.sky,sunDirection:this.sunDirection,surfaceY:18});this.surface=e.mesh,this.root.add(this.surface)}makeSky(){let e=new vt({side:Zt,depthWrite:!1,uniforms:{time:this.uniforms.time,water:this.uniforms.water,air:this.uniforms.above,illumination:{value:1},sky:{value:new ie(this.palette.sky)},horizon:{value:new ie(this.palette.horizon)},sunDirection:{value:this.sunDirection}},vertexShader:"varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vDirection;uniform vec3 sky,horizon,water,sunDirection;uniform float time,air,illumination;
        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
        float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
        void main(){vec3 direction=normalize(vDirection);float elevation=max(0.,direction.y);
          vec3 c=mix(horizon,sky,smoothstep(0.,.65,elevation));float sun=max(0.,dot(direction,sunDirection));
          c+=vec3(1.,.86,.59)*(pow(sun,950.)*5.+pow(sun,20.)*.18);
          vec2 cloudUV=direction.xz/max(.15,direction.y)*2.5+vec2(time*.003,0.);
          float cloud=noise(cloudUV)*.6+noise(cloudUV*2.)*.25+noise(cloudUV*4.)*.15;
          float clouds=smoothstep(.59,.77,cloud)*smoothstep(.04,.3,elevation)*.48;
          c=mix(c,vec3(.98,.98,.94),clouds);c=mix(water,c*illumination,air);
          gl_FragColor=vec4(c,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new Oe(new Ut(1500,40,20),e),this.sky.renderOrder=-5,this.sky.frustumCulled=!1,this.root.add(this.sky)}makeAtmosphere(){let e=this.coarse?520:850,t=[],i=[];for(let d=0;d<e;d++)t.push((this.random()-.5)*240,-5+this.random()*22,(this.random()-.5)*240),i.push(this.random());let r=new Pe;r.setAttribute("position",new ce(t,3)),r.setAttribute("seed",new ce(i,1));let s=new vt({transparent:!0,depthWrite:!1,blending:da,uniforms:{time:this.uniforms.time,above:this.uniforms.above},vertexShader:"attribute float seed;uniform float time;varying float vFade;void main(){vec3 p=mod(position+vec3(sin(time*.17+seed*50.)*.7,time*.065,0.)-cameraPosition+vec3(36.,25.,36.),vec3(72.,50.,72.))-vec3(36.,25.,36.)+cameraPosition;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((130.+seed*100.)/max(2.,-mv.z),1.,5.);vFade=exp(-max(0.,-mv.z)*.060)*(.24+seed*.30)*(1.-smoothstep(17.,18.,p.y));}",fragmentShader:"uniform float above;varying float vFade;void main(){float r=length(gl_PointCoord-.5)*2.;float a=(1.-smoothstep(.2,1.,r))*vFade*(1.-above)*.38;gl_FragColor=vec4(.65,.86,.84,a);}"});this.root.add(new Xn(r,s));let a=[],o=[];for(let d=0;d<64;d++)a.push((this.random()-.5)*10,this.random()*17,(this.random()-.5)*9),o.push(this.random());let c=new Pe;c.setAttribute("position",new ce(a,3)),c.setAttribute("seed",new ce(o,1));let l=new vt({transparent:!0,depthWrite:!1,uniforms:{time:this.uniforms.time},vertexShader:"attribute float seed;uniform float time;varying float vFade;void main(){vec3 p=position;p.y=mod(p.y+time*(.55+seed*.4),17.);p.x+=sin(p.y*.6+seed*15.)*.2;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((150.+seed*80.)/max(2.,-mv.z),1.,13.);vFade=(1.-p.y/19.)*exp(-max(0.,-mv.z)*.014);}",fragmentShader:"varying float vFade;void main(){vec2 p=gl_PointCoord-.5;float r=length(p)*2.;float ring=exp(-pow((r-.77)*8.,2.));float shine=exp(-length(p-vec2(-.13,.14))*25.);float a=(ring*.26+shine*.55)*vFade;gl_FragColor=vec4(.56,.81,.86,a);}"}),h=new Xn(c,l);h.position.copy(this.ventCenter).add(new b(0,3,0)),this.root.add(h)}makeSchools(){let e=Sm(),t=Tm(this.uniforms.time),i=this.coarse?42:72,r=[];for(let s=0;s<i;s++)r.push({p:[0,0,0],c:[16777215,15069421,16182745][s%3]});this.schoolMesh=Mt(e,t,r,this.root,!1),this.schoolMesh.frustumCulled=!1,this.schoolMesh.instanceMatrix.setUsage(va);for(let s=0;s<i;s++)this.schools.push({group:s%3,angle:this.random()*Ei,spread:this.random(),altitude:this.random()})}setBiome(e){this.biome=kl[e]?e:"reef",this.palette=kl[this.biome];let t=this.palette;this.uniforms.water.value.set(t.water),this.sandMaterial.color.set(t.sand),this.rockMaterial.color.set(t.rock).lerp(new ie(16777215),.72),this.archMaterial.color.set(t.rock).lerp(new ie(14276024),.26),this.kelpMaterial.color.set(t.kelp),this.stemMaterial.color.set(t.kelp).multiplyScalar(.7),this.sun.intensity=t.sun,this.surface.material.uniforms.illumination.value=t.light,this.sky.material.uniforms.illumination.value=t.light,this.surface.material.uniforms.sky.value.set(t.sky),this.sky.material.uniforms.sky.value.set(t.sky),this.sky.material.uniforms.horizon.value.set(t.horizon);for(let i=0;i<this.coralMeshes.length;i++){let r=this.coralMeshes[i];if(r){for(let s=0;s<r.count;s++){let a=new ie(this.coralEntries[i][s].c),o=0,c=1/0;for(let h=0;h<4;h++){let d=new ie(kl.reef.coral[h]),u=Math.abs(a.r-d.r)+Math.abs(a.g-d.g)+Math.abs(a.b-d.b);u<c&&(o=h,c=u)}let l=new ie(t.coral[o]);i===1&&l.lerp(new ie(16049609),.2),r.setColorAt(s,l)}r.instanceColor.needsUpdate=!0}}this.sectors?.syncColors()}update(e,t,i,r){this.uniforms.time.value=t;let s=this.surfaceHeight(r.position.x,r.position.z,t),a=yt.smoothstep(r.position.y,s-.35,s+.3);this.air+=(a-this.air)*(1-Math.exp(-e*9)),this.uniforms.above.value=this.air;let o=yt.clamp((18-r.position.y)/28,0,1);this.fogColor.set(this.palette.water).lerp(new ie(this.palette.deep),o*.5).lerp(new ie(this.palette.horizon),this.air),this.scene.fog.color.copy(this.fogColor),this.scene.fog.density=this.air*.0017,this.scene.background.copy(this.fogColor),this.sky.position.copy(r.position),this.sky.visible=this.air>.001,this.sun.target.position.set(i.x,i.y-4,i.z),this.sun.position.copy(this.sun.target.position).addScaledVector(this.sunDirection,75),this.sun.target.updateMatrixWorld(),this.ambient.intensity=(.38+(1-o)*.45+this.air*.55)*this.palette.light;let c=yt.smoothstep(18-r.position.y,28,75);this.sun.intensity=this.palette.sun*(1-c*.7),this.scene.environmentIntensity=.38*this.palette.light*(1-c*.72),this.fill.intensity=.5*this.palette.light,this.diveLamp.intensity=c*95,this.diveLamp.position.copy(i).add(new b(0,.5,0));let l=r.getWorldDirection(new b);this.diveLamp.target.position.copy(i).addScaledVector(l,12),this.diveLamp.target.updateMatrixWorld(),this.ambient.color.set(this.palette.sky),this.ambient.groundColor.set(this.palette.water).multiplyScalar(.55);for(let d=0;d<this.rays.length;d++){let u=this.rays[d];u.rotation.y=Math.atan2(r.position.x-u.position.x,r.position.z-u.position.z),u.rotation.z=-.3+(this.reduced?0:Math.sin(t*.16+d)*.025)}let h=[[5,9,-23],[-47,11,-58],[-13,13,19]];for(let d=0;d<this.schools.length;d++){let u=this.schools[d],p=h[u.group],f=u.angle+t*(.075+u.group*.018),m=5+u.spread*10;Vi.position.set(p[0]+Math.cos(f)*m,p[1]+Math.sin(f*2+u.altitude*4)*1.6+(u.altitude-.5)*4,p[2]+Math.sin(f)*m*.7),Vi.rotation.set(0,bm(f),Math.sin(t*2+d)*.05),Vi.scale.setScalar(.55+u.spread*.55),Vi.updateMatrix(),this.schoolMesh.setMatrixAt(d,Vi.matrix)}this.schoolMesh.instanceMatrix.needsUpdate=!0,this.sectors?.update(r,i)}dispose(){this.sectors?.dispose();let e=new Set,t=new Set;this.root.traverse(i=>{if(i.geometry&&e.add(i.geometry),i.material)for(let r of Array.isArray(i.material)?i.material:[i.material])t.add(r)});for(let i of[...Object.values(this.rockTextures),...Object.values(this.sandTextures)])i.value.dispose();for(let i of e)i.dispose();for(let i of t)i.dispose();this.environment?.dispose(),this.sun.shadow.map?.dispose(),this.scene.remove(this.root)}};var Hm=`varying vec2 vUv;
void main(){vUv=position.xy*.5+.5;gl_Position=vec4(position.xy,0.,1.);}`,Wm=`
uniform sampler2D sceneDepth;
uniform mat4 inverseProjection, cameraWorld;
uniform vec2 resolution;
vec3 viewPoint(vec2 uv){float d=texture2D(sceneDepth,uv).x;vec4 p=inverseProjection*vec4(uv*2.-1.,d*2.-1.,1.);return p.xyz/p.w;}
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
`,$0=`${Wm}
varying vec2 vUv;
uniform sampler2D sunlightDepth;
uniform mat4 sunlightMatrix;
uniform float shaftStrength;
#include <packing>
float lightShafts(){
  if(shaftStrength<.001)return 0.;
  vec3 point=viewPoint(vUv),ray=normalize((cameraWorld*vec4(normalize(point),0.)).xyz);
  vec3 origin=cameraWorld[3].xyz;
  float segment=min(length(point),36.),sum=0.;
  float jitter=.5;
  for(int i=0;i<12;i++){
    vec3 world=origin+ray*segment*(float(i)+jitter)/12.;
    float submerged=1.-smoothstep(17.5,18.4,world.y);
    vec4 projected=sunlightMatrix*vec4(world,1.);vec3 q=projected.xyz/projected.w;
    float lit=1.;
    if(q.x>0.&&q.x<1.&&q.y>0.&&q.y<1.&&q.z>0.&&q.z<1.){
      float blocker=unpackRGBAToDepth(texture2D(sunlightDepth,q.xy));
      lit=1.-smoothstep(blocker+.0004,blocker+.002,q.z);
    }
    sum+=lit*submerged*exp(-max(0.,18.-world.y)*.035);
  }
  return sum/12.*(1.-exp(-segment*.045))*shaftStrength;
}
void main(){
  float shafts=lightShafts();
  float depth=texture2D(sceneDepth,vUv).x;
  if(depth>.99998){gl_FragColor=vec4(1.,shafts,0.,1.);return;}
  vec3 p=viewPoint(vUv);vec2 px=1./resolution;
  vec3 l=viewPoint(vUv-vec2(px.x,0.)),r=viewPoint(vUv+vec2(px.x,0.));
  vec3 b=viewPoint(vUv-vec2(0.,px.y)),t=viewPoint(vUv+vec2(0.,px.y));
  vec3 dx=abs(r.z-p.z)<abs(l.z-p.z)?r-p:p-l;
  vec3 dy=abs(t.z-p.z)<abs(b.z-p.z)?t-p:p-b;
  vec3 n=normalize(cross(dx,dy));if(n.z<0.)n=-n;
  float radius=clamp(1.8/max(1.,-p.z),.002,.10),sum=0.;
  float angle=hash(floor(vUv*resolution*.5))*6.283185;
  for(int i=0;i<10;i++){
    float fi=float(i),a=fi*2.39996+angle;
    vec2 offset=vec2(cos(a)*resolution.y/resolution.x,sin(a))*radius*sqrt((fi+.5)/10.);
    vec2 qUv=clamp(vUv+offset,px,1.-px);
    if(texture2D(sceneDepth,qUv).x>.99998)continue;
    vec3 delta=viewPoint(qUv)-p;float dist=length(delta);
    float horizon=max(0.,dot(n,delta/max(.001,dist))-.12);
    sum+=horizon*(1.-smoothstep(.1,2.8,dist));
  }
  float ao=clamp(1.-sum*.34,.38,1.);
  gl_FragColor=vec4(ao,shafts,0.,1.);
}`,Q0=`${Wm}
uniform sampler2D sceneColor, sceneAO;
uniform vec3 eye, sunDirection, waterColor;
uniform float seaLevel, time, exposure, waterLighting, visibilityDistance;
varying vec2 vUv;
void main(){
  float rawDepth=texture2D(sceneDepth,vUv).x;
  bool background=rawDepth>.99998;
  vec3 view=viewPoint(vUv);
  vec3 ray=normalize((cameraWorld*vec4(normalize(view),0.)).xyz);
  float hitDistance=length(view);
  float underwater=1.-smoothstep(seaLevel-.12,seaLevel+.18,eye.y);

  // Solve the segment inside water BEFORE applying the optical distance cap.
  // A far-plane sample is not a point thousands of metres under the seabed.
  float entry=0.,exitDistance=hitDistance;
  if(eye.y<seaLevel){
    if(ray.y>.00001)exitDistance=min(hitDistance,(seaLevel-eye.y)/ray.y);
  }else{
    if(ray.y<-.00001)entry=min(hitDistance,(seaLevel-eye.y)/ray.y);
    else entry=hitDistance;
  }
  float waterDistance=clamp(exitDistance-entry,0.,320.);
  // In-scattering is dominated by the first optical length of water. Using a
  // far-plane midpoint here produced the previous black stripe at the horizon.
  float sampleDistance=entry+min(waterDistance,70.)*.5;
  float meanDepth=clamp(seaLevel-(eye.y+ray.y*sampleDistance),0.,100.);
  float density=1.+meanDepth*.004;
  // Clear tropical water retains readable pigment at 10\u201330 m, progressively
  // losing warm wavelengths and contrast beyond the near reef.
  vec3 extinction=vec3(.025,.0125,.0105)*density;
  vec3 transmission=exp(-extinction*waterDistance);
  transmission*=1.-smoothstep(visibilityDistance*.72,visibilityDistance,waterDistance);
  vec3 color=texture2D(sceneColor,vUv).rgb;
  vec2 px=1./resolution;

  // Edge-aware upsampling prevents a half-resolution contact shadow from
  // staining the sky or bleeding across the outline of a nearer creature.
  float ao=1.;
  if(!background){
    float weight=.45;
    ao=texture2D(sceneAO,vUv).r*weight;
    for(int i=0;i<4;i++){
      float angle=float(i)*1.5707963+.785398;
      vec2 sampleUV=clamp(vUv+vec2(cos(angle),sin(angle))*px*1.5,px,1.-px);
      float neighborDepth=texture2D(sceneDepth,sampleUV).x;
      float proximity=exp(-abs(viewPoint(sampleUV).z-view.z)/max(.18,-view.z*.008));
      float w=.1375*proximity*(1.-step(.99998,neighborDepth));
      ao+=texture2D(sceneAO,sampleUV).r*w;weight+=w;
    }
    ao/=weight;
  }
  color*=mix(1.,ao,.78);

  // Only real HDR highlights bloom. This is not a uniform veil over the reef.
  vec3 glow=vec3(0.);
  for(int i=0;i<4;i++){
    float angle=float(i)*1.5707963;
    vec2 offset=vec2(cos(angle),sin(angle))*px*4.;
    glow+=max(vec3(0.),texture2D(sceneColor,clamp(vUv+offset,px,1.-px)).rgb-2.);
  }
  color+=glow*.022;

  float depthLight=.28+.72*exp(-meanDepth*.025);
  vec3 scatter=mix(vec3(.008,.082,.126),waterColor*.48,.12)*depthLight*waterLighting;
  // A soft directional phase lobe is integrated in front of opaque geometry.
  // There are no screen-facing ray cards or noisy bands painted on the water.
  vec3 waterSun=normalize(vec3(sunDirection.x/1.333,
    sqrt(max(.01,1.-(1.-sunDirection.y*sunDirection.y)/(1.333*1.333))),
    sunDirection.z/1.333));
  float sunFacing=pow(max(0.,dot(ray,waterSun)),14.);
  scatter+=vec3(.023,.066,.069)*sunFacing*exp(-max(0.,seaLevel-eye.y)*.045)*waterLighting;
  color=color*transmission+scatter*(1.-transmission);
  float shafts=texture2D(sceneAO,vUv).g;


  // At an empty underwater horizon, distant water converges to the exact same
  // optical medium as far terrain. No background-specific depth darkening.
  float horizonMix=background?underwater*(1.-exp(-waterDistance*.025)):0.;
  color=mix(color,scatter,horizonMix*.65);
  vec2 shaftPx=2./resolution;
  shafts=(shafts*2.+texture2D(sceneAO,vUv+vec2(shaftPx.x,0.)).g+texture2D(sceneAO,vUv-vec2(shaftPx.x,0.)).g+texture2D(sceneAO,vUv+vec2(0.,shaftPx.y)).g+texture2D(sceneAO,vUv-vec2(0.,shaftPx.y)).g)/6.;
  color+=vec3(.055,.10,.09)*shafts*underwater;

  float vignette=dot(vUv-.5,vUv-.5);
  color*=1.-vignette*.12;
  gl_FragColor=vec4(max(vec3(0.),color),1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Hl=class{constructor(e,{coarse:t=!1}={}){this.renderer=e,this.coarse=t,this.quality="high",this.width=0,this.height=0,this.adaptiveScale=1,this.frameSamples=[],this.goodWindows=0,this.warmup=45,this.shadowBase=null,this.target=new Yt(1,1,{type:Ti,minFilter:Lt,magFilter:Lt}),this.target.depthTexture=new Ni(1,1,zi),this.target.depthTexture.format=hn,this.target.samples=Math.min(e.capabilities.maxSamples||0,t?0:2),this.target.resolveDepthBuffer=!0,this.target.resolveStencilBuffer=!1,this.aoTarget=new Yt(1,1,{depthBuffer:!1,type:ii});let i={sceneDepth:{value:this.target.depthTexture},inverseProjection:{value:new we},cameraWorld:{value:new we},resolution:{value:new Q(1,1)},sunlightDepth:{value:null},sunlightMatrix:{value:new we},shaftStrength:{value:0}};this.aoMaterial=new vt({vertexShader:Hm,fragmentShader:$0,uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.material=new vt({vertexShader:Hm,fragmentShader:Q0,depthTest:!1,depthWrite:!1,uniforms:{...i,sceneColor:{value:this.target.texture},sceneAO:{value:this.aoTarget.texture},eye:{value:new b},sunDirection:{value:new b},waterColor:{value:new ie},seaLevel:{value:18},waterLighting:{value:1},visibilityDistance:{value:t?105:150},time:{value:0},exposure:{value:1}}});let r=new Pe;r.setAttribute("position",new ce([-1,-1,0,3,-1,0,-1,3,0],3)),this.quad=new Oe(r,this.material),this.quad.frustumCulled=!1,this.screen=new Tn,this.screen.add(this.quad),this.camera=new Kn,this.stats={calls:0,triangles:0}}setQuality(e){this.adaptiveScale=1,this.frameSamples=[],this.warmup=45,this.goodWindows=0,this.shadowBase=null,this.quality=e;let t=e==="high"?Math.min(this.renderer.capabilities.maxSamples||0,this.coarse?2:4):0;this.target.samples!==t&&(this.target.samples=t,this.target.dispose()),this.width=0}observeFrame(e){if(!Number.isFinite(e)||e<=0||e>300){this.frameSamples=[];return}if(this.warmup>0){this.warmup--;return}if(this.frameSamples.push(e),this.frameSamples.length<60)return;let t=this.frameSamples.sort((s,a)=>s-a),i=t[30];this.frameSamples=[];let r=this.coarse?34:22;i>r*1.25?(this.adaptiveScale=Math.max(this.coarse?.65:.6,this.adaptiveScale-.1),this.goodWindows=0):i<r*.85?++this.goodWindows>=4&&(this.adaptiveScale=Math.min(1,this.adaptiveScale+.05),this.goodWindows=0):this.goodWindows=0}resize(){let e=this.renderer.getDrawingBufferSize(new Q),t=(this.quality==="high"?1:.85)*this.adaptiveScale,i=Math.max(1,Math.round(e.x*t)),r=Math.max(1,Math.round(e.y*t));i===this.width&&r===this.height||(this.width=i,this.height=r,this.target.setSize(i,r),this.aoTarget.setSize(Math.max(1,i>>1),Math.max(1,r>>1)),this.material.uniforms.resolution.value.set(i,r))}render(e,t,i,r){let s=this.adaptiveScale<.86,a=this.quality==="high"&&!s?Math.min(this.renderer.capabilities.maxSamples||0,this.coarse?0:2):0;this.target.samples!==a&&(this.target.samples=a,this.target.dispose()),this.shadowBase??(this.shadowBase=i.sun.shadow.mapSize.x);let o=s?Math.max(512,Math.round(this.shadowBase*.5)):this.shadowBase;i.sun.shadow.mapSize.x!==o&&(i.sun.shadow.mapSize.set(o,o),i.sun.shadow.map?.dispose(),i.sun.shadow.map=null),this.resize(),t.updateMatrixWorld();let c=this.material.uniforms;c.inverseProjection.value.copy(t.projectionMatrixInverse),c.cameraWorld.value.copy(t.matrixWorld),c.eye.value.copy(t.position),c.sunDirection.value.copy(i.sunDirection),c.waterColor.value.copy(i.uniforms.water.value),c.time.value=r,c.waterLighting.value=i.palette.light,c.shaftStrength.value=t.position.y<17.8?i.palette.light:0;let l=this.renderer,h=l.info.autoReset;l.info.autoReset=!1,l.info.reset(),l.setRenderTarget(this.target),l.render(e,t),c.sunlightDepth.value=i.sun.shadow.map?.texture,c.sunlightMatrix.value.copy(i.sun.shadow.matrix),this.stats.calls=l.info.render.calls,this.stats.triangles=l.info.render.triangles,this.quad.material=this.aoMaterial,l.setRenderTarget(this.aoTarget),l.render(this.screen,this.camera),this.quad.material=this.material,l.setRenderTarget(null),l.render(this.screen,this.camera),l.info.autoReset=h}dispose(){this.target.dispose(),this.aoTarget.dispose(),this.aoMaterial.dispose(),this.material.dispose(),this.quad.geometry.dispose()}};var Fu=new Map,Xm=Math.PI*2,ev=[[-1.02,.009,.021,-.035],[-.88,.1,.14,-.015],[-.6,.224,.375,.012],[-.17,.286,.505,.02],[.29,.243,.43,.005],[.64,.134,.247,0],[.88,.055,.088,0]],tv=[[-1.85,.007,.012,-.015],[-1.57,.184,.16,.025],[-1.03,.334,.337,.046],[-.27,.386,.414,.05],[.43,.267,.29,.035],[1.03,.105,.135,.025],[1.37,.045,.073,.025]],Xi=()=>({position:[],uv:[],finFlex:[],index:[]});function Ou(n,e){let t=0;for(;t<n.length-2&&e>n[t+1][0];)t++;let i=n[t],r=n[t+1],s=yt.clamp((e-i[0])/(r[0]-i[0]),0,1),a=n[Math.max(0,t-1)],o=n[Math.min(n.length-1,t+2)];return[1,2,3].map(c=>{let l=(r[c]-a[c])/(r[0]-a[0]),h=(o[c]-i[c])/(o[0]-i[0]);return(2*s*s*s-3*s*s+1)*i[c]+(s*s*s-2*s*s+s)*l*(r[0]-i[0])+(-2*s*s*s+3*s*s)*r[c]+(s*s*s-s*s)*h*(r[0]-i[0])})}function Wi(n){let e=new Pe;return e.setAttribute("position",new ce(n.position,3)),e.setAttribute("uv",new ce(n.uv,2)),e.setAttribute("finFlex",new ce(n.finFlex,1)),e.setIndex(n.index),e.computeVertexNormals(),e.computeBoundingSphere(),e.boundingSphere.radius+=1.1,e}function jm(n,e,t=new we,i=0){let r=e.clone().applyMatrix4(t),s=n.position.length/3,a=r.attributes.position,o=r.attributes.uv;for(let c=0;c<a.count;c++)n.position.push(a.getX(c),a.getY(c),a.getZ(c)),n.uv.push(o?.getX(c)||0,o?.getY(c)||0),n.finFlex.push(i);if(r.index)for(let c of r.index.array)n.index.push(s+c);else for(let c=0;c<a.count;c++)n.index.push(s+c);r.dispose(),e.dispose()}function mn(n,e,t,i=20,r=0){let s=new we().compose(new b(...e),new Dt,new b(...t));jm(n,new Ut(1,i,Math.max(8,Math.round(i*.65))),s,r)}function iv(n,e,t){let i=Xi(),r=n[0][0],s=n.at(-1)[0];for(let a=0;a<=e;a++){let o=a/e,c=yt.lerp(r,s,o),[l,h,d]=Ou(n,c);for(let u=0;u<=t;u++){let p=u/t,f=p*Xm;if(i.position.push(Math.cos(f)*Math.max(.003,l),d+Math.sin(f)*Math.max(.004,h),c),i.uv.push(p,o),i.finFlex.push(0),a<e&&u<t){let m=a*(t+1)+u;i.index.push(m,m+1,m+t+1,m+1,m+t+2,m+t+1)}}}for(let a of[0,1]){let o=a?s:r,c=Ou(n,o)[2],l=i.position.length/3;i.position.push(0,c,o),i.uv.push(.5,a),i.finFlex.push(0);for(let h=0;h<t;h++){let d=(a?e:0)*(t+1)+h;a?i.index.push(l,d,d+1):i.index.push(l,d+1,d)}}return i}function Bu(n){return new qn(n.map(e=>new b(...e)),!1,"centripetal")}function mi(n,e,t,{rays:i=26,spans:r=5,flex:s=0,camber:a=.016,flip:o=!1}={}){let c=Bu(e),l=Bu(t),h=n.position.length/3;for(let d=0;d<=i;d++){let u=d/i,p=c.getPoint(u),f=l.getPoint(u);for(let m=0;m<=r;m++){let x=m/r,g=p.clone().lerp(f,x);if(g.x+=Math.sin(x*Math.PI)*Math.sin(u*Math.PI)*a,n.position.push(g.x,g.y,g.z),n.uv.push(u,x),n.finFlex.push(s),d<i&&m<r){let v=h+d*(r+1)+m;o?n.index.push(v,v+1,v+r+1,v+1,v+r+2,v+r+1):n.index.push(v,v+r+1,v+1,v+1,v+r+1,v+r+2)}}}}function Ta(n,e,t=.006,i=20){jm(n,new Yn(Bu(e),i,t,4,!1))}function nv(n){let e=n==="predator",t=n==="school",i=e?tv:ev,r=iv(i,t?18:42,t?16:42),s=Xi(),a=Xi(),o=Xi(),c=Xi(),l=Xi(),h=t?9:25,d=t?2:5;if(e){mi(s,[[0,.31,-.61],[0,.45,-.15],[0,.28,.48]],[[0,.36,-.61],[0,1.03,-.18],[0,.28,.48]],{rays:24,spans:4}),mi(s,[[0,.19,.65],[0,.14,.98],[0,.1,1.15]],[[0,.2,.65],[0,.41,.93],[0,.1,1.15]],{rays:12,spans:3}),mi(s,[[0,.09,1.32],[0,.025,1.37],[0,-.05,1.32]],[[0,1.03,2.04],[0,.025,1.64],[0,-.65,1.99]],{rays:28,spans:5});for(let u of[-1,1])mi(s,[[u*.27,-.09,-.77],[u*.32,-.13,-.41],[u*.29,-.17,-.1]],[[u*.28,-.1,-.77],[u*1.17,-.29,.16],[u*.43,-.23,.56]],{rays:20,spans:4,flex:u*.35}),mi(s,[[u*.15,-.18,.48],[u*.16,-.18,.67]],[[u*.49,-.3,.96],[u*.17,-.2,.93]],{rays:10,spans:3,flex:u*.3})}else{mi(s,[[0,.31,-.69],[0,.507,-.13],[0,.31,.53],[0,.09,.87]],[[0,.32,-.69],[0,.79,-.23],[0,.67,.48],[0,.1,.9]],{rays:h,spans:d}),mi(s,[[0,-.43,-.31],[0,-.42,.26],[0,-.12,.81]],[[0,-.45,-.31],[0,-.69,.22],[0,-.14,.86]],{rays:h,spans:d}),mi(s,[[0,.067,.86],[0,0,.895],[0,-.067,.86]],[[0,.56,1.48],[0,.29,1.38],[0,0,1.16],[0,-.29,1.38],[0,-.56,1.48]],{rays:h,spans:d});for(let u of[-1,1])mi(s,[[u*.235,.025,-.45],[u*.235,-.015,-.39],[u*.225,-.06,-.33]],[[u*.25,.04,-.46],[u*.67,-.11,.12],[u*.5,-.25,.31]],{rays:t?6:16,spans:t?2:4,flex:u}),t||mi(s,[[u*.12,-.38,-.31],[u*.12,-.42,-.12]],[[u*.31,-.61,.24],[u*.12,-.54,.39]],{rays:10,spans:3,flex:u*.5})}for(let u of[-1,1]){let p=e?-1.44:-.745,f=e?.074:.095,m=e?.224:.168;if(t||mn(a,[u*m,f,p],[.025,e?.043:.05,e?.041:.047],16),mn(o,[u*(m+.02),f,p-.004],[.018,e?.032:.034,e?.03:.032],t?10:16),t||mn(c,[u*(m+.035),f+.012,p-.016],[.005,.008,.007],10),!t){let x=e?5:1;for(let g=0;g<x;g++){let v=[];for(let _=0;_<9;_++){let y=_/8,T=(e?-.93+g*.072:-.49)+Math.sin(y*Math.PI)*.08,[M,P,N]=Ou(i,T),I=yt.lerp(.22,-.2,y);v.push([u*(M*Math.sqrt(Math.max(.05,1-((I-N)/P)**2))+.003),I,T])}Ta(l,v,e?.007:.006,12)}}}return t||(e?Ta(l,[[-.13,-.12,-1.62],[-.08,-.164,-1.54],[0,-.177,-1.49],[.08,-.164,-1.54],[.13,-.12,-1.62]],.0065,18):Ta(l,[[-.043,-.039,-.999],[0,-.054,-1.02],[.043,-.039,-.999]],.005,14)),{body:Wi(r),fins:Wi(s),eyes:Wi(o),...t?{}:{iris:Wi(a),highlights:Wi(c),detail:Wi(l)},length:e?3.99:2.5}}function rv(){let n=Xi(),e=Xi(),t=Xi();mn(n,[0,.075,0],[.64,.28,.8],40),mn(n,[0,-.025,-.65],[.18,.135,.37],20),mn(n,[0,.025,-.98],[.183,.142,.275],24),mn(n,[0,-.055,.79],[.055,.04,.25],14);for(let i of[-1,1])mi(e,[[i*.42,-.01,-.52],[i*.48,-.025,-.2]],[[i*.59,-.04,-.65],[i*1.31,-.13,-.18],[i*1.12,-.15,.02],[i*.57,-.06,.1]],{rays:30,spans:6,flex:i,flip:i<0}),mi(e,[[i*.38,-.035,.45],[i*.26,-.035,.67]],[[i*.79,-.065,.68],[i*.58,-.08,.97],[i*.3,-.05,.84]],{rays:16,spans:4,flex:i*.5,flip:i<0}),mn(t,[i*.161,.061,-1.06],[.014,.03,.032],14);return{body:Wi(n),fins:Wi(e),eyes:Wi(t),length:2.05}}function sv(){let n=Xi(),e=Xi();mn(n,[0,0,-.1],[.65,.175,.98],32);for(let t of[-1,1])mi(n,[[t*.39,.008,-.8],[t*.52,0,-.18],[t*.39,-.02,.62]],[[t*.5,-.025,-1.04],[t*1.25,-.03,-.66],[t*2.34,-.045,.35],[t*1.11,-.06,.8],[t*.44,-.015,.72]],{rays:40,spans:9,flex:t,camber:.022,flip:t<0}),Ta(n,[[t*.2,-.07,-.8],[t*.23,-.1,-1.09],[t*.3,-.09,-1.27],[t*.38,-.06,-1.17]],.05,20),mn(e,[t*.4,.05,-.86],[.04,.029,.032],14);return Ta(n,[[0,-.015,.66],[0,-.02,1.23],[0,-.035,1.89],[0,-.065,2.63]],.017,36),{body:Wi(n),eyes:Wi(e),length:3.9}}var av=`
  uniform float uMarineTime, uMarineSpeed, uMarinePhase;
  attribute float finFlex;
  float marineWave(float z) {
    float rear = smoothstep(-.62,1.65,z);
    return sin(uMarineTime*5.4-z*3.25+uMarinePhase)*rear*rear*(.055+uMarineSpeed*.055);
  }
`;function Mr(n,e,t,i=""){let r=t==="manta",s=t==="turtle";return n.customProgramCacheKey=()=>"marine-v1-"+t+"-"+i,n.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=av+`
varying vec3 vMarinePosition,vMarineNormal; varying vec2 vMarineUv;
`+a.vertexShader,a.vertexShader=a.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
 vMarineNormal = objectNormal;`);let o=r?"transformed.y += sin(uMarineTime*1.75-abs(position.x)*.62+uMarinePhase)*pow(abs(position.x),1.35)*.22; transformed.x += marineWave(position.z)*smoothstep(.9,2.6,position.z);":s?"transformed.y += sin(uMarineTime*2.0+uMarinePhase)*abs(finFlex)*pow(abs(position.x),1.2)*.18;":"transformed.x += marineWave(position.z); transformed.y += sin(uMarineTime*4.7+uMarinePhase+position.z)*abs(finFlex)*max(0.,abs(position.x)-.20)*.30;";if(a.vertexShader=a.vertexShader.replace("#include <begin_vertex>",`
      #include <begin_vertex>
      vMarinePosition = position; vMarineUv = uv;
      ${o}
    `),!r&&!s&&(a.vertexShader=a.vertexShader.replace("#include <beginnormal_vertex>",`
      #include <beginnormal_vertex>
      objectNormal.z -= objectNormal.x*(marineWave(position.z+.008)-marineWave(position.z-.008))/.016;
    `)),!i)return;a.fragmentShader=`varying vec3 vMarinePosition,vMarineNormal; varying vec2 vMarineUv; uniform vec3 uMarineBack,uMarineSide,uMarineBelly;
`+a.fragmentShader;let c;i==="fins"&&t==="predator"?c=`
        vec3 p = vMarinePosition;
        vec3 finColor = mix(uMarineBelly,uMarineSide,smoothstep(-.36,.08,p.y));
        finColor = mix(finColor,uMarineBack,smoothstep(.48,1.0,p.y)*.5);
        diffuseColor.rgb *= finColor;
      `:i==="fins"&&!s&&!r?c=`
        float ray = pow(.5+.5*cos(vMarineUv.x*${t==="predator"?"26.":"40."}*6.283185),15.);
        float border = smoothstep(.87,.99,vMarineUv.y);
        vec3 finColor = mix(uMarineSide*.79,uMarineBelly*.93,border*.78);
        diffuseColor.rgb *= finColor*(.81+ray*.22);
        ${t==="predator"?"":"diffuseColor.a *= .64+.32*ray+.22*border;"}
      `:s?c=`
        vec3 p = vMarinePosition;
        vec3 c = mix(uMarineBelly,uMarineSide,smoothstep(-.09,.035,p.y));
        float shell = (1.-smoothstep(.71,.88,abs(p.z)))*smoothstep(.0,.10,p.y);
        vec2 q = p.xz*vec2(4.6,3.9); q.x += mod(floor(q.y),2.)*.5;
        vec2 cell = abs(fract(q)-.5);
        float rim = smoothstep(.34,.47,max(cell.x*.88+cell.y*.5,cell.y));
        float mottling = .5+.5*sin(p.x*57.+sin(p.z*34.))*sin(p.z*61.);
        vec3 scute = mix(uMarineBack,uMarineSide,.24+mottling*.16);
        scute = mix(scute,uMarineBelly*.46,rim*.28);
        c = mix(c,scute,shell);
        ${i==="fins"?"c = mix(uMarineBelly,uMarineSide,smoothstep(-.2,.2,vMarineNormal.y*(gl_FrontFacing?1.:-1.)))*(.9+mottling*.1);":""}
        diffuseColor.rgb *= c*(.94+mottling*.07);
      `:r?c=`
        vec3 p = vMarinePosition;
        float dorsal = smoothstep(-.2,.2,vMarineNormal.y*(gl_FrontFacing?1.:-1.));
        vec3 c = mix(uMarineBelly,uMarineBack,dorsal);
        float shoulder = exp(-pow((abs(p.x)-(.26+max(0.,p.z+.75)*.48))/.10,2.));
        shoulder *= smoothstep(-.94,-.45,p.z)*(1.-smoothstep(.12,.43,p.z));
        c = mix(c,uMarineSide,shoulder*.72*dorsal);
        diffuseColor.rgb *= c;
      `:c=`
        vec3 p = vMarinePosition;
        vec3 c = mix(uMarineBelly,uMarineSide,smoothstep(-.30,.02,p.y));
        c = mix(c,uMarineBack,smoothstep(.14,.41,p.y));
        ${t==="predator"?`
          float grain = fract(sin(dot(floor(p.xz*270.+p.y*11.),vec2(127.1,311.7)))*43758.5453);
          c *= .96+grain*.055;
        `:`
          vec2 grid = vec2(vMarineUv.y*37.,vMarineUv.x*29.);
          grid.x += mod(floor(grid.y),2.)*.5;
          vec2 cell = fract(grid)-.5;
          float arc = 1.-smoothstep(.016,.055,abs(length(vec2(cell.x*.93,cell.y+.21))-.43));
          float scales = smoothstep(-.77,-.45,p.z)*(1.-smoothstep(.69,.91,p.z));
          c *= 1.-arc*scales*.075;
          float stripe = exp(-pow((p.y-(.105+.035*sin(p.z*3.6)))/.024,2.));
          stripe *= smoothstep(-.70,-.39,p.z)*(1.-smoothstep(.68,.88,p.z));
          c = mix(c,uMarineBelly*1.07,stripe*.78);
          c += uMarineSide*arc*scales*.035;
        `}
        diffuseColor.rgb *= c;
      `,a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
`+c)},n}function ov(n,e){let t=n==="hero",i=n==="predator",r=t||n==="school",s=t?new An({color:16777215,roughness:.43,metalness:.12,clearcoat:.38,clearcoatRoughness:.31,iridescence:.2,iridescenceIOR:1.33,iridescenceThicknessRange:[95,220]}):new xt({color:16777215,roughness:i?.48:.54,metalness:.075,side:n==="manta"?ht:ln}),a=new xt({color:16777215,roughness:.45,metalness:.065,side:ht,transparent:r,opacity:r?.91:1,depthWrite:!r});a.forceSinglePass=!0;let o=new xt({color:i?9276281:13018213,roughness:.36,metalness:.14}),c=new An({color:266002,roughness:.09,metalness:.03,clearcoat:1,clearcoatRoughness:.06}),l=new xt({color:15005417,roughness:.1}),h=new xt({color:i?3887444:2647645,roughness:.7});return{body:Mr(s,e,n,"body"),fins:Mr(a,e,n,"fins"),iris:Mr(o,e,n),eyes:Mr(c,e,n),highlights:Mr(l,e,n),detail:Mr(h,e,n)}}function wa(n="hero",e={}){["hero","predator","turtle","manta","school"].includes(n)||(n="school"),Fu.has(n)||Fu.set(n,n==="turtle"?rv():n==="manta"?sv():nv(n));let t=Fu.get(n),i=new et,r=n==="predator"?[3561830,8427933,14344147]:n==="turtle"?[3426618,7897947,12628609]:n==="manta"?[1585467,7508878,14804950]:n==="school"?[2251624,7847872,14994563]:[807776,3717293,15059332],s={uMarineTime:{value:0},uMarineSpeed:{value:1},uMarinePhase:{value:e.phase??Math.random()*Xm},uMarineBack:{value:new ie(r[0])},uMarineSide:{value:new ie(e.color??r[1])},uMarineBelly:{value:new ie(r[2])}},a=ov(n,s),o=e.shadows??(n==="hero"||n==="predator"),c=o?Mr(new Zn({depthPacking:ga}),s,n):null;for(let[d,u]of Object.entries(t)){if(!u?.isBufferGeometry)continue;let p=new Oe(u,a[d]);p.name=n+"-"+d,p.castShadow=o&&["body","fins"].includes(d),p.receiveShadow=!0,c&&(p.customDepthMaterial=c),i.add(p)}let l=new Set(i.children.map(d=>d.material));for(let d of Object.values(a))l.has(d)||d.dispose();let h=e.scale??(n==="school"?.36:1);return i.scale.setScalar(h),i.name=n,i.userData.marine={kind:n,uniforms:s,materials:[...l],depth:c,lastTime:null,clock:0,disposed:!1},i.userData.length=t.length*h,i}function Wl(n,e,t=1){let i=n?.userData.marine;if(!i||i.disposed||!Number.isFinite(e))return;let r=yt.clamp(Number.isFinite(t)?t:1,0,4);i.lastTime===null?i.clock=e:i.clock+=yt.clamp(e-i.lastTime,0,.12)*(.75+Math.min(2.5,r)*.25),i.lastTime=e,i.uniforms.uMarineTime.value=i.clock,i.uniforms.uMarineSpeed.value=yt.lerp(i.uniforms.uMarineSpeed.value,r,.15)}function qm(n){let e=n?.userData.marine;!e||e.disposed||(e.disposed=!0,e.materials.forEach(t=>t.dispose()),e.depth?.dispose(),n.removeFromParent())}var Cn=(n,e,t)=>Math.max(e,Math.min(t,n)),Ym="amaq-audio-v1",lv=[523.25,587.33,659.25,783.99,880],Xl=class{constructor({context:e=null,storage:t}={}){this.context=e,this.supported=!!(e||globalThis.AudioContext||globalThis.webkitAudioContext),this.volume=.65,this.muted=!1,this.mode="menu",this.voices=new Set,this.loops=[],this.lastEvent=null,this.lastPan=0,this.eventCount=0,this.events={},this.nextWarning=0,this.nextBubble=0,this.nextUpdate=0,this.lastPickup=-1;try{this.storage=t===void 0?globalThis.localStorage:t;let i=JSON.parse(this.storage?.getItem(Ym)||"null");i&&typeof i.volume=="number"&&Number.isFinite(i.volume)&&(this.volume=Cn(i.volume,0,1)),typeof i?.muted=="boolean"&&(this.muted=i.muted)}catch{}}get enabled(){return this.supported&&!this.muted&&this.volume>0}save(){try{this.storage?.setItem(Ym,JSON.stringify({volume:this.volume,muted:this.muted}))}catch{}}init(){if(this.master||!this.supported)return;let e=globalThis.AudioContext||globalThis.webkitAudioContext,t=this.context||(this.context=new e);this.master=t.createGain(),this.master.gain.value=0,this.limiter=t.createDynamicsCompressor(),this.limiter.threshold.value=-12,this.limiter.knee.value=12,this.limiter.ratio.value=8,this.limiter.attack.value=.003,this.limiter.release.value=.2,this.master.connect(this.limiter).connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*4,t.sampleRate),this.water=t.createBuffer(2,t.sampleRate*4,t.sampleRate);let i=this.noise.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;for(let r=0;r<2;r++){let s=this.water.getChannelData(r),a=0;for(let o=0;o<s.length;o++)a=a*.985+(Math.random()*2-1)*.06,s[o]=a*Math.min(1,o/1800,(s.length-1-o)/1800)}this.bed=this.loop(this.water,380),this.swim=this.loop(this.noise,700)}loop(e,t){let i=this.context,r=i.createBufferSource(),s=i.createBiquadFilter(),a=i.createGain();return r.buffer=e,r.loop=!0,s.type="lowpass",s.frequency.value=t,s.Q.value=.5,a.gain.value=0,r.connect(s).connect(a).connect(this.master),r.start(),this.loops.push(r),{source:r,filter:s,gain:a}}smooth(e,t,i=.08){let r=this.context.currentTime;e.cancelScheduledValues(r),e.setTargetAtTime(t,r,i)}unlock(){if(this.enabled)try{this.init(),this.context.startRendering||this.context.resume().catch(()=>{})}catch{this.supported=!1}}fadeOut(){let e=this.master.gain,t=this.context.currentTime;e.cancelScheduledValues(t),e.setValueAtTime(e.value,t),e.linearRampToValueAtTime(0,t+.045)}mix(){this.master&&(this.enabled&&(this.mode==="playing"||this.mode==="ended")?this.smooth(this.master.gain,this.volume*.8,.025):this.fadeOut())}stopVoices(){for(let e of this.voices)e.source.stop(),e.nodes.forEach(t=>t.disconnect());this.voices.clear()}suspendAfter(e){clearTimeout(this.sleepTimer),!this.context?.startRendering&&(this.sleepTimer=setTimeout(()=>{this.stopVoices(),this.context?.suspend().catch(()=>{})},e))}setMode(e){clearTimeout(this.sleepTimer),this.mode=e,e==="playing"?(this.unlock(),this.nextUpdate=0,this.nextWarning=(this.context?.currentTime||0)+.5,this.nextBubble=(this.context?.currentTime||0)+1.4):(this.bed&&(this.smooth(this.bed.gain.gain,0),this.smooth(this.swim.gain.gain,0)),this.suspendAfter(e==="ended"?2200:160)),this.mix()}quiet(){this.master&&(this.fadeOut(),this.suspendAfter(100))}setVolume(e){Number.isFinite(e)&&(this.volume=Cn(e,0,1),this.volume>0&&(this.muted=!1),this.changed())}toggle(){let e=this.enabled;this.muted=e,!e&&this.volume===0&&(this.volume=.65),this.changed()}changed(){this.save(),this.enabled&&this.mode==="playing"?(clearTimeout(this.sleepTimer),this.unlock()):this.enabled||this.quiet(),this.mix()}voice({frequency:e=600,end:t=e,duration:i=.3,gain:r=.13,delay:s=0,pan:a=0,noise:o=!1,type:c="sine"}={}){if(this.voices.size>=28)return;let l=this.context,h=l.currentTime+s,d=o?l.createBufferSource():l.createOscillator(),u=l.createGain(),p=l.createStereoPanner(),f=[d,u,p],m=d;if(o){d.buffer=this.noise;let g=l.createBiquadFilter();g.type="bandpass",g.Q.value=.65,g.frequency.setValueAtTime(e,h),g.frequency.exponentialRampToValueAtTime(Math.max(30,t),h+i),d.connect(g),m=g,f.push(g)}else d.type=c,d.frequency.setValueAtTime(e,h),d.frequency.exponentialRampToValueAtTime(Math.max(30,t),h+i);p.pan.value=Cn(a,-1,1),u.gain.setValueAtTime(0,h),u.gain.linearRampToValueAtTime(r,h+.012),u.gain.exponentialRampToValueAtTime(1e-4,h+i),u.gain.linearRampToValueAtTime(0,h+i+.015),m.connect(u).connect(p).connect(this.master);let x={source:d,nodes:f};this.voices.add(x),d.onended=()=>{f.forEach(g=>g.disconnect()),this.voices.delete(x)},d.start(h),d.stop(h+i+.025)}play(e,{combo:t=1,pan:i=0,strength:r=1}={}){if(!this.master||!this.enabled||!["playing","ended"].includes(this.mode))return;let s=this.context.currentTime;if(e==="pearl"&&s-this.lastPickup<.055)return;e==="pearl"&&(this.lastPickup=s);let a=(l,h,d,u=0,p=l)=>this.voice({frequency:l,end:p,duration:h,gain:d,delay:u,pan:i}),o=(l,h,d,u)=>this.voice({noise:!0,frequency:l,end:h,duration:d,gain:u,pan:i}),c=(l,h=.085,d=.12)=>l.forEach((u,p)=>{a(u,.4,d,p*h),a(u*2.01,.19,d*.16,p*h)});if(e==="pearl"){let l=lv[Cn(Math.floor(t)-1,0,4)];a(l,.25,.15),a(l*2,.12,.027,.025)}else if(e==="breach")o(700,2800,.45,.3),a(420,.3,.035,0,900);else if(e==="splash")o(1800,180,.8,.45),o(340,130,.45,.18);else if(e==="gold")c([659.25,880,1318.5]);else if(e==="treasure")c([392,523.25,659.25,1046.5],.11,.14);else if(e==="magnet")o(300,1700,.45,.12),c([440,659.25],.1,.1);else if(e==="gate")o(250,2100,.65,.3),c([392,783.99],.1,.1);else if(e==="frenzy")c([523.25,659.25,783.99,1046.5,1318.5],.09,.13);else if(e==="nearMiss")o(900,300,.2,.13),c([659.25,987.77],.05,.08);else if(e==="discover")c([261.63,392],.18,.065);else if(e==="shield")o(500,2200,.55,.14),c([392,587.33,783.99],.11);else if(e==="dash")o(260,2300,.65,.5),a(160,.35,.1,0,65);else if(e==="hurt")o(900,100,.35,.3),a(115,.32,.2,0,42);else if(e==="block")o(1400,300,.32,.22),c([1174.66,783.99],.075,.1);else if(e==="defeated")o(450,1100,.4,.25),c([392,659.25,987.77],.07);else if(e==="warning"||e==="guardian"){let l=e==="guardian"?.15:.08+Cn(r,0,1)*.06;a(110,.19,l,0,80),a(98,.22,l*.8,.26,65)}else if(e==="start")o(1300,260,.65,.16),c([261.63,392,523.25],.12,.09);else if(e==="win")c([523.25,659.25,783.99,1046.5],.18,.15);else if(e==="lose")c([392,329.63,261.63],.19,.11);else if(e==="bubble")a(300+Math.random()*350,.12,.022,0,1e3);else return;this.lastEvent=e,this.lastPan=i,this.eventCount++,this.events[e]=(this.events[e]||0)+1,["hurt","block","defeated","dash","treasure","frenzy","win","lose","start"].includes(e)&&(this.nextWarning=Math.max(this.nextWarning,s+.65)),e!=="bubble"&&e!=="warning"&&(this.nextBubble=Math.max(this.nextBubble,s+1.1))}update({world:e,speed:t=0,boosting:i=!1,threat:r=null,aboveWater:s=!1}){if(!this.master||!this.enabled||this.mode!=="playing"||this.context.state==="suspended")return;let a=this.context.currentTime;if(a<this.nextUpdate)return;this.nextUpdate=a+.08;let o=s?1400:e==="abyss"?170:e==="kelp"?270:420;if(this.smooth(this.bed.filter.frequency,o+Math.sin(a*.4)*45,.4),this.smooth(this.bed.gain.gain,.16+Math.sin(a*.65)*.018,.3),this.smooth(this.swim.filter.frequency,420+Cn(t,0,1)*800+(i?1100:0)),this.smooth(this.swim.gain.gain,.012+Cn(t,0,1)*.08+(i?.12:0)),r&&r.distance<27&&a>=this.nextWarning){let c=1-Cn(r.distance/27,0,1);this.play("warning",{pan:Cn(r.x/8,-.9,.9),strength:c}),this.nextWarning=a+1.8-c*1.15}a>=this.nextBubble&&(this.play("bubble",{pan:Math.sin(a)*.65}),this.nextBubble=a+2.2+Math.random()*2.8)}snapshot(){return{supported:this.supported,initialized:!!this.master,enabled:this.enabled,volume:this.volume,muted:this.muted,state:this.context?.state||"idle",mode:this.mode,voices:this.voices.size,lastEvent:this.lastEvent,lastPan:this.lastPan,eventCount:this.eventCount,events:{...this.events},swimGain:this.swim?.gain.gain.value||0,masterGain:this.master?.gain.value||0}}};var jl=class{constructor(e,t=!1){this.container=e,this.reduced=t,this.entries=[],this.projected=new b}show(e,t,i=""){if(!e&&!i)return;let r=this.entries.at(-1);if(e>0&&!i&&r?.amount>0&&!r.label&&r.age<.075&&r.position.distanceTo(t)<1.3){r.amount+=e,r.number.textContent="+"+r.amount;return}this.entries.length>=16&&this.entries.shift().element.remove();let s=document.createElement("div");s.className="score-pop "+(e<0?"loss":"gain");let a=document.createElement("b");if(a.dir="ltr",a.textContent=e?(e>0?"+":"")+e:"",s.append(a),i){let o=document.createElement("small");o.textContent=i,s.append(o)}this.container.append(s),this.entries.push({element:s,number:a,amount:e,label:i,position:t.clone(),age:0,offset:(this.entries.length%3-1)*62,lift:this.entries.length%3*42})}update(e,t,i){for(let r=this.entries.length-1;r>=0;r--){let s=this.entries[r];if(i&&(s.age+=e),s.age>1.35){s.element.remove(),this.entries.splice(r,1);continue}this.projected.copy(s.position).project(t);let a=this.projected.z>-1&&this.projected.z<1;s.element.hidden=!a;let o=Math.max(45,Math.min(innerWidth-45,(this.projected.x*.5+.5)*innerWidth+s.offset)),c=this.reduced?0:s.age*43,l=Math.max(105,Math.min(innerHeight-90,(-this.projected.y*.5+.5)*innerHeight-28-c-s.lift)),h=this.reduced?1:1+Math.sin(Math.min(1,s.age/.18)*Math.PI)*.2;s.element.style.transform="translate("+o+"px,"+l+"px) translate(-50%,-50%) scale("+h+")",s.element.style.opacity=Math.min(1,(1.35-s.age)*3)}}clear(){this.entries.forEach(e=>e.element.remove()),this.entries=[]}};var ql=class{constructor(e,t=!1){this.reduced=t,this.particles=[],this.ripples=[],this.clock=0;let i=t?90:280,r=new Pe;this.positions=new Float32Array(i*3),this.colors=new Float32Array(i*3),this.count=i,r.setAttribute("position",new It(this.positions,3)),r.setAttribute("color",new It(this.colors,3));let s=new ts({size:.095,vertexColors:!0,transparent:!0,opacity:.72,depthWrite:!1});s.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      float r=length(gl_PointCoord-vec2(.5)); if(r>.5)discard; diffuseColor.a*=smoothstep(.5,.26,r);`)},this.points=new Xn(r,s),this.points.frustumCulled=!1,e.add(this.points),this.ringGeo=new ss(.92,1,64),this.ringGeo.rotateX(-Math.PI/2);for(let a=0;a<12;a++){let o=new Oe(this.ringGeo,new an({color:11924198,transparent:!0,opacity:0,side:ht,depthWrite:!1}));e.add(o),this.ripples.push({mesh:o,age:3})}}particle(e,t,i,r=1.4){this.particles.length>=this.count&&this.particles.shift(),this.particles.push({p:e.clone(),v:t.clone(),c:new ie(i),age:0,life:r})}splash(e,t=1){let i=this.reduced?12:40;for(let r=0;r<i;r++){let s=r/i*Math.PI*2,a=1+Math.random()*2;this.particle(e,new b(Math.cos(s)*a,Math.random()*4*t+1,Math.sin(s)*a),14220531,1.3)}for(let r=0;r<3;r++){let s=this.ripples.reduce((a,o)=>a.age>o.age?a:o);s.age=-r*.14,s.mesh.position.copy(e),s.mesh.position.y+=.05}}burst(e,t=16767629){for(let i=0;i<(this.reduced?7:18);i++)this.particle(e,new b((Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3),t,.9)}update(e,t,i,r,s,a){if(this.clock-=e,a&&i.length()>.65&&this.clock<=0&&t.y<s){this.clock=this.reduced?.1:.035;let o=i.clone().normalize().multiplyScalar(-1.1);this.particle(t.clone().add(o).add(new b((Math.random()-.5)*.35,0,(Math.random()-.5)*.35)),o.multiplyScalar(.15).add(new b(0,.55,0)),9101263,1.5)}for(let o=this.particles.length-1;o>=0;o--){let c=this.particles[o];if(c.age+=e,c.age>c.life){this.particles.splice(o,1);continue}c.p.addScaledVector(c.v,e),c.p.y>s?c.v.y-=9*e:c.v.y+=.25*e}for(let o=0;o<this.count;o++){let c=this.particles[o];this.positions.set(c?c.p.toArray():[0,-1e4,0],o*3);let l=c?c.c.clone().multiplyScalar(1-c.age/c.life):new ie(0);this.colors.set([l.r,l.g,l.b],o*3)}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0;for(let o of this.ripples)o.age+=e,o.mesh.visible=o.age>=0&&o.age<2,o.mesh.scale.setScalar(.4+o.age*3.2),o.mesh.material.opacity=Math.max(0,(1-o.age/2)*.36)}clear(){this.particles=[];for(let e of this.ripples)e.age=3}};var Rn=(n,e,t)=>Math.max(e,Math.min(t,n));function zu(){return{distance:0,score:0,pearls:0,lives:3,combo:0,comboTime:0,shield:0,boost:0,cooldown:0,invulnerable:0,elapsed:0,ended:!1,won:!1,magnet:0,frenzy:0,current:0,charge:0,treasures:0,nearMisses:0}}function kt(n,e){if(n.ended)return 0;let t=n.score;return n.score=Math.max(0,n.score+Math.round(e)),n.score-t}function cv(n,e){n.frenzy>0||(n.charge+=e,n.charge>=12&&(n.charge=0,n.frenzy=8))}function Zm(n,e="pearl"){if(n.ended)return 0;if(e==="shield")return n.shield=9,kt(n,15);if(e==="magnet")return n.magnet=10,kt(n,10);if(e==="gate")return n.current=4,kt(n,15);if(e==="frenzy")return n.frenzy=8,n.charge=0,kt(n,20);if(e!=="pearl"&&e!=="gold")return 0;n.combo=Math.min(5,n.combo+1),n.comboTime=3.5,n.pearls++;let t=kt(n,(e==="gold"?10:5)*n.combo*(n.frenzy>0?2:1));return cv(n,1),t}function Jm(n,e=Math.random()){if(n.ended)return{delta:0,reward:null};if(n.treasures++,e<.4)return n.magnet=10,{delta:kt(n,40),reward:"magnet"};if(e<.75){let t=n.lives<3;return n.lives=Math.min(3,n.lives+1),t||(n.shield=9),{delta:kt(n,40),reward:t?"heal":"shield"}}return{delta:kt(n,100),reward:"jackpot"}}function Km(n){return n.ended||n.invulnerable>0?"immune":n.boost>0?(kt(n,25),"defeated"):n.shield>0?(n.shield=0,n.invulnerable=1.2,"shield"):(kt(n,-3),n.lives--,n.combo=0,n.invulnerable=2,n.lives<=0&&(n.ended=!0),"hurt")}var Yl=(n,e=1e8)=>Math.max(0,Math.min(e,Number.isFinite(n)?Math.floor(n):0)),$m="amaq-expedition-v1",Qm=["\u0631\u0641\u064A\u0642 \u0627\u0644\u0645\u0631\u062C\u0627\u0646","\u0631\u062D\u0651\u0627\u0644 \u0627\u0644\u062A\u064A\u0627\u0631\u0627\u062A","\u0645\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0623\u0639\u0645\u0627\u0642","\u062D\u0627\u0631\u0633 \u0627\u0644\u0645\u062D\u064A\u0637"],Sr=[{id:"messi",name:"\u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u0645\u064A\u0633\u064A",stat:"escapes",target:3,condition:"\u0627\u0647\u0631\u0628 \u0645\u0646 3 \u0645\u0637\u0627\u0631\u062F\u0627\u062A",ability:"\u0645\u0631\u0627\u0648\u063A\u0629 \u0645\u0632\u062F\u0648\u062C\u0629",detail:"\u0627\u0636\u063A\u0637 X \u0623\u0648 \u0632\u0631 \u0627\u0644\u0645\u0631\u0627\u0648\u063A\u0629: \u062E\u062F\u0639\u0629 \u062C\u0627\u0646\u0628\u064A\u0629 \u0633\u0631\u064A\u0639\u0629 \u0645\u0639 \u062D\u0645\u0627\u064A\u0629 \u0642\u0635\u064A\u0631\u0629. \u062A\u0633\u062A\u0639\u064A\u062F\u0647\u0627 \u0643\u0644 12 \u062B\u0627\u0646\u064A\u0629.",mark:"10"},{id:"dolphin",name:"\u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u0627\u0644\u062F\u0644\u0641\u064A\u0646",stat:"breaches",target:4,condition:"\u0627\u0642\u0641\u0632 \u0641\u0648\u0642 \u0627\u0644\u0633\u0637\u062D 4 \u0645\u0631\u0627\u062A",ability:"\u0627\u0646\u062F\u0641\u0627\u0639 \u0623\u0633\u0631\u0639 \u062A\u0639\u0627\u0641\u064A\u0627\u064B",detail:"\u062A\u0639\u0648\u062F \u0637\u0627\u0642\u0629 \u0627\u0644\u0627\u0646\u062F\u0641\u0627\u0639 \u0623\u0633\u0631\u0639 \u0628\u0646\u0633\u0628\u0629 25\u066A\u060C \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0641\u064A \u0643\u0644 \u0631\u062D\u0644\u0627\u062A\u0643.",mark:"\u2191"},{id:"pearl",name:"\u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u0627\u0644\u0644\u0624\u0644\u0624",stat:"pearls",target:60,condition:"\u0627\u062C\u0645\u0639 60 \u0644\u0624\u0644\u0624\u0629",ability:"\u062C\u0627\u0630\u0628\u064A\u0629 \u0627\u0644\u0644\u0622\u0644\u0626",detail:"\u062A\u0646\u062C\u0630\u0628 \u0627\u0644\u0644\u0622\u0644\u0626 \u0627\u0644\u0642\u0631\u064A\u0628\u0629 \u0625\u0644\u064A\u0643 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0645\u0646 \u0645\u0633\u0627\u0641\u0629 3 \u0623\u0645\u062A\u0627\u0631.",mark:"\u25C8"},{id:"explorer",name:"\u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u0627\u0644\u0631\u062D\u0651\u0627\u0644\u0629",stat:"places",target:6,condition:"\u0633\u062C\u0651\u0644 6 \u0648\u062C\u0647\u0627\u062A \u0641\u064A \u062F\u0641\u062A\u0631 \u0627\u0644\u0628\u062D\u0631",ability:"\u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0646\u0648\u0632",detail:"\u064A\u0643\u0634\u0641 \u0627\u0644\u0633\u0648\u0646\u0627\u0631 \u0645\u0648\u0627\u0642\u0639 \u0635\u0646\u0627\u062F\u064A\u0642 \u0627\u0644\u0643\u0646\u0632 \u0627\u0644\u0642\u0631\u064A\u0628\u0629 \u0639\u0644\u0649 \u0627\u0644\u062E\u0631\u064A\u0637\u0629.",mark:"\u25CE"}],Jl=(n,e)=>Math.min(e.target,e.stat==="places"?n.places.length:n.stats[e.stat]||0),ri=(n,e)=>{let t=Sr.find(i=>i.id===e);return!!t&&Jl(n,t)>=t.target};function ef(n,e,t=1){if(!Object.hasOwn(n.stats,e)||!Number.isFinite(t)||t<=0)return[];t=Math.floor(t);let i=new Set(Sr.filter(r=>ri(n,r.id)).map(r=>r.id));return n.stats[e]=Yl(n.stats[e]+t),Sr.filter(r=>!i.has(r.id)&&ri(n,r.id))}var Zl=[{id:"pearls",title:"\u062E\u064A\u0637 \u0645\u0646 \u0627\u0644\u0644\u0622\u0644\u0626",detail:"\u0627\u062C\u0645\u0639 12 \u0644\u0624\u0644\u0624\u0629 \u0641\u064A \u0631\u062D\u0644\u062A\u0643",target:12,reward:90},{id:"places",title:"\u0645\u0627 \u0648\u0631\u0627\u0621 \u0627\u0644\u0634\u0639\u0627\u0628",detail:"\u0632\u0631 \u0648\u062C\u0647\u062A\u064A\u0646 \u0645\u062E\u062A\u0644\u0641\u062A\u064A\u0646 \u0641\u064A \u0627\u0644\u062E\u0644\u064A\u062C",target:2,reward:120},{id:"breaches",title:"\u0644\u0645\u0633\u0629 \u0645\u0646 \u0627\u0644\u0633\u0645\u0627\u0621",detail:"\u0627\u0642\u0641\u0632 \u0641\u0648\u0642 \u0627\u0644\u0633\u0637\u062D \u0645\u0631\u062A\u064A\u0646 \u2014 \u0627\u063A\u0635 \u0628\u064A\u0646 \u0627\u0644\u0642\u0641\u0632\u062A\u064A\u0646",target:2,reward:100},{id:"races",title:"\u0627\u0631\u0642\u0635 \u0645\u0639 \u0627\u0644\u062A\u064A\u0627\u0631",detail:"\u0623\u0643\u0645\u0644 \u0633\u0628\u0627\u0642 \u062D\u0644\u0642\u0627\u062A \u0648\u0627\u062D\u062F\u0627\u064B",target:1,reward:150},{id:"treasures",title:"\u0623\u0633\u0631\u0627\u0631 \u0627\u0644\u0628\u062D\u0631",detail:"\u0627\u0641\u062A\u062D \u0635\u0646\u062F\u0648\u0642\u064A \u0643\u0646\u0632",target:2,reward:140},{id:"escapes",title:"\u0623\u0630\u0643\u0649 \u0645\u0646 \u0627\u0644\u0645\u0641\u062A\u0631\u0633",detail:"\u0627\u0641\u0644\u062A \u0645\u0646 \u0645\u0637\u0627\u0631\u062F\u0629 \u0648\u0627\u062D\u062F\u0629",target:1,reward:160}];function tf(n){let e;try{e=JSON.parse(n?.getItem($m)||"null")}catch{}return{xp:Yl(e?.xp),quests:Yl(e?.quests,1e5),stats:Object.fromEntries(["pearls","breaches","escapes","races","treasures"].map(t=>[t,Yl(e?.stats?.[t])])),places:Array.isArray(e?.places)?[...new Set(e.places.filter(t=>typeof t=="string"&&/^(reef|kelp|abyss):[a-z-]{1,30}$/.test(t)))].slice(0,60):[],species:Array.isArray(e?.species)?[...new Set(e.species.filter(t=>["turtle","manta","school"].includes(t)))]:[],raceBest:Number.isFinite(e?.raceBest)&&e.raceBest>0?Math.min(e.raceBest,120):null}}function nf(n,e){try{return e?.setItem($m,JSON.stringify(n)),!0}catch{return!1}}var rf=n=>Math.min(3,Math.floor(n.xp/650));function ku(n){return{questIndex:n.quests%Zl.length,completed:0,counters:{pearls:0,places:0,breaches:0,races:0,treasures:0,escapes:0},baseline:0,visited:[],discoveredSpecies:[],nextEvent:28,eventIndex:0,event:null,elapsed:0}}function Ea(n){let e=Zl[n.questIndex];return{...e,progress:Math.min(e.target,n.counters[e.id]-n.baseline)}}function sf(n,e,t,i=1){if(!Object.hasOwn(n.counters,t)||!Number.isFinite(i)||i<=0)return null;i=Math.floor(i),n.counters[t]+=i;let r=Ea(n);return r.progress<r.target?null:(e.quests++,e.xp+=r.reward,n.completed++,n.questIndex=(n.questIndex+1)%Zl.length,n.baseline=n.counters[Zl[n.questIndex].id],r)}function af(n,e,t,i){if(n.visited.includes(i))return null;n.visited.push(i);let r=t+":"+i,s=!e.places.includes(r);return s&&(e.places.push(r),e.xp+=60),{first:s,delta:s?60:20}}var oe=n=>document.getElementById(n),si=matchMedia("(pointer:coarse)").matches,ys=matchMedia("(prefers-reduced-motion:reduce)").matches,of=new b(0,0,-1),lf=new b,Gu=new Dt,fi=new b,ji=new b,Vu=new b,Er;try{Er=localStorage}catch{}var Ke=tf(Er),rt=new Xl,$n=si?"balanced":"high";try{let n=Er?.getItem("amaq-graphics-v1");["balanced","high"].includes(n)&&($n=n)}catch{}function ff(){if(Gt.setPixelRatio(Math.min(devicePixelRatio,$n==="high"?si?2:2.5:si?1.2:1.5)),oe("graphics-quality").value=$n,Xe){let n=$n==="high"?si?1024:2048:si?768:1536;Xe.sun.shadow.mapSize.set(n,n),Xe.sun.shadow.map?.dispose(),Xe.sun.shadow.map=null}Tr?.setQuality($n),hv=0;try{Er?.setItem("amaq-graphics-v1",$n)}catch{}}var Aa=0;try{Aa=Number(Er?.getItem("amaq-best"))||0}catch{}var tt="menu",Ts="reef",re=Du(),Be=zu(),$e=ku(Ke),Zi=0,Kl=0,ju=0,Hu=0,Wu=0,$l=null,Gt,Tr,Wt,At,Xe,Pa,Ms,br,ws,Ln=[],wr=[],qu=[],Ye=null,bs="coral-cathedral",Ca=0,Ra=0,hv=0;var Ot=new Set,Kt={x:0,y:0,id:null},Et={id:null,x:0,y:0,yaw:0,pitch:0},Pn=new Map,Ia=!1,La=!1,tc=!1,Ss=!1;function Ju(n){Ss=n&&tt==="playing",oe("cruise-toggle").setAttribute("aria-pressed",String(Ss)),oe("cruise-toggle").querySelector("span").textContent=Ss?"\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0633\u0628\u0627\u062D\u0629":"\u0633\u0628\u0627\u062D\u0629 \u0645\u0633\u062A\u0645\u0631\u0629"}function cf(){tt==="playing"&&(Ju(!Ss),Yi.focus())}var hf=new Ut(.22,16,10),uv=new Si(.43,.018,5,32),dv=new Si(2,.055,8,64),uf=new Fi(1.15,.8,.7),qi={pearl:new An({color:16772291,roughness:.16,metalness:.25,clearcoat:1,emissive:12297845,emissiveIntensity:.2}),gold:new xt({color:16761950,metalness:.55,roughness:.22,emissive:10968338,emissiveIntensity:.35}),chest:new xt({color:7492930,metalness:.2,roughness:.7}),ring:new xt({color:8905936,emissive:2722697,emissiveIntensity:.65,metalness:.35,roughness:.25}),halo:new an({color:16769958,transparent:!0,opacity:.45,depthWrite:!1}),jelly:new An({color:12422604,emissive:5454194,emissiveIntensity:.45,roughness:.25,transparent:!0,opacity:.62,side:ht,depthWrite:!1})},pv=qi.ring.clone();function Xt(n){return new b(n.x,n.y,n.z)}function Ct(n){oe("toast").textContent=n,oe("toast").classList.add("visible"),ju=4.5}function Es(){nf(Ke,Er);try{Be.score>Aa&&(Aa=Be.score,Er?.setItem("amaq-best",String(Aa)))}catch{}oe("best").textContent=Aa}function Ji(n,e=re.position,t=""){(n||t)&&ws.show(n,Xt(e),t),n>0&&br.burst(Xt(e))}function Ar(n,e=1){let t=ef(Ke,n,e),i=sf($e,Ke,n,e);if(i?.id==="places"&&($e.questPlaces=[]),i){let r=kt(Be,i.reward);Ji(r,re.position,"\u062A\u062D\u062F\u0651\u064D \u0645\u0643\u062A\u0645\u0644"),Ct("\u0627\u0643\u062A\u0645\u0644 \xAB"+i.title+"\xBB \u2014 \u0647\u062F\u0641 \u062C\u062F\u064A\u062F \u064A\u0646\u062A\u0638\u0631\u0643"),rt.play("win")}for(let r of t)Ct("\u0641\u062A\u062D\u062A "+r.name+" \u2014 "+r.ability),Ji(0,re.position,r.ability),rt.play("frenzy");Es(),nc()}function Dn(n){tt=n,Ju(!1),document.documentElement.dataset.mode=n,Ot.clear(),Kt.x=Kt.y=0,Kt.id=null,Et.id=null,Et.yaw=Et.pitch=0,Pn.clear();for(let e of["touch-rise","touch-dive"])oe(e).dataset.active="false";Ia=La=!1,oe("stick").querySelector("i").style.transform="",oe("menu").hidden=n==="playing",oe("hud").hidden=n!=="playing",oe("pause").hidden=n==="menu"||n==="ended",oe("home").hidden=n==="menu",oe("worlds").hidden=n==="paused",oe("results").hidden=n!=="ended",oe("heading").innerHTML=n==="paused"?"\u0627\u0644\u0628\u062D\u0631 \u064A\u0646\u062A\u0638\u0631\u0643.":n==="ended"?"\u062D\u0643\u0627\u064A\u0629\u064C \u062A\u0633\u062A\u062D\u0642<br><em>\u0631\u062D\u0644\u0629 \u0623\u062E\u0631\u0649.</em>":"\u0644\u0627 \u0637\u0631\u064A\u0642\u064E \u0648\u0627\u062D\u062F\u0627\u064B.<br><em>\u0627\u0644\u0628\u062D\u0631 \u0644\u0643.</em>",oe("description").textContent=n==="paused"?"\u0631\u062D\u0644\u062A\u0643 \u0645\u062D\u0641\u0648\u0638\u0629 \u0647\u0646\u0627. \u062A\u0627\u0628\u0639 \u0627\u0644\u0633\u0628\u0627\u062D\u0629 \u0639\u0646\u062F\u0645\u0627 \u062A\u0643\u0648\u0646 \u0645\u0633\u062A\u0639\u062F\u0627\u064B.":n==="ended"?"\u062A\u0628\u0642\u0649 \u0645\u064A\u062F\u0627\u0644\u064A\u0627\u062A\u0643 \u0648\u0627\u0643\u062A\u0634\u0627\u0641\u0627\u062A\u0643 \u0645\u0639\u0643. \u0639\u062F \u0625\u0644\u0649 \u0627\u0644\u0628\u062D\u0631 \u0628\u0642\u062F\u0631\u0627\u062A\u0643 \u0627\u0644\u062C\u062F\u064A\u062F\u0629.":"\u0627\u0633\u0628\u062D \u062D\u064A\u062B \u064A\u0642\u0648\u062F\u0643 \u0641\u0636\u0648\u0644\u0643. \u0645\u0646 \u062D\u062F\u0627\u0626\u0642 \u0627\u0644\u0645\u0631\u062C\u0627\u0646 \u0625\u0644\u0649 \u0636\u0648\u0621 \u0627\u0644\u0633\u0637\u062D \u2014 \u0627\u0643\u062A\u0634\u0641\u060C \u0631\u0627\u0648\u0650\u063A\u060C \u0648\u0627\u0642\u0641\u0632.",oe("start").querySelector("span").textContent=n==="paused"?"\u062A\u0627\u0628\u0639 \u0627\u0644\u0631\u062D\u0644\u0629":"\u0627\u0628\u062F\u0623 \u0627\u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641",n==="ended"&&(oe("results").innerHTML="<span>\u0627\u0644\u0646\u0642\u0627\u0637<b>"+Be.score+"</b></span><span>\u0627\u0644\u0627\u0643\u062A\u0634\u0627\u0641\u0627\u062A<b>"+$e.visited.length+"</b></span><span>\u0627\u0644\u0648\u0642\u062A<b>"+Math.floor(Be.elapsed/60)+" \u062F</b></span>"),rt.setMode(n),n==="menu"&&ws.clear(),n!=="playing"&&Es(),nc()}function Ku(n,e,t=0,i=0,r=1){lf.set(Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t)),Gu.setFromUnitVectors(of,lf),i&&Gu.multiply(new Dt().setFromAxisAngle(of,i)),n.quaternion.slerp(Gu,1-Math.exp(-r*9))}function In(n,e,t,i,r={}){let s=new et;if(n==="chest"){let o=new Oe(uf,qi.chest);s.add(o),o.castShadow=!0;let c=new Oe(uf,qi.gold);c.scale.set(1.03,.15,1.04),c.position.y=.38,s.add(c);let l=new Oe(hf,qi.gold);l.position.set(0,.05,.38),l.scale.setScalar(.65),s.add(l)}else if(n==="jelly"){let o=new Oe(new Ut(.65,16,10,0,Math.PI*2,0,Math.PI*.6),qi.jelly);s.add(o);let c=new Pe,l=[];for(let h=0;h<8;h++)for(let d=0;d<8;d++){let u=h*Math.PI/4,p=.4;l.push(Math.cos(u)*p+Math.sin(d*.7)*.08,-d*.19,Math.sin(u)*p,Math.cos(u)*p+Math.sin((d+1)*.7)*.08,-(d+1)*.19,Math.sin(u)*p)}c.setAttribute("position",new ce(l,3)),s.add(new qs(c,new es({color:12695535,transparent:!0,opacity:.65}))),s.userData.owned=!0}else{let o=new Oe(hf,n==="pearl"?qi.pearl:qi.gold);(n==="shield"||n==="magnet")&&(o.material=qi.ring),s.add(o);let c=new Oe(uv,qi.halo);s.add(c)}if(s.position.set(e,t,i),!r.testPlacement&&!Xe.collision.place(s.position,1.7+.4,We,17,416))return $u({mesh:s}),null;Wt.add(s);let a={kind:n,mesh:s,base:s.position.clone(),active:!0,respawn:0,temporary:r.temporary||!1,phase:Math.random()*6.28};return Ln.push(a),a}function $u(n){Wt.remove(n.mesh),n.mesh.userData.owned&&n.mesh.traverse(e=>{e.geometry?.dispose(),e.material&&e.material!==qi.jelly&&e.material.dispose()})}function mv(){for(let e of Ln)$u(e);Ln=[];let n=new b(0,10,22);for(let e of Xe.landmarks){if(e.type==="sanctuary")continue;let t=e.position.clone();for(let i=1;i<=10;i++){let r=n.clone().lerp(t,i/11);r.x+=Math.sin(i*.7)*2,r.y=Math.max(We(r.x,r.z)+1.3,r.y+Math.sin(i)*.5),In(i%5===0?"gold":"pearl",r.x,r.y,r.z)}In("chest",t.x+2,t.y+1,t.z-2);for(let i=0;i<7;i++){let r=i/7*Math.PI*2;In("pearl",t.x+Math.cos(r)*5,t.y+1+Math.sin(r)*2,t.z+Math.sin(r)*5)}}for(let e=0;e<5;e++)In("pearl",0,10,18-e*1.6);wr.forEach(e=>{Wt.remove(e.mesh),qm(e.mesh)}),wr=[];for(let[e,t]of[[0,{x:42,y:7,z:-28}],[1,{x:-58,y:6,z:-45}]]){let i=Nu(e,t),r=wa("predator");Wt.add(r),wr.push({state:i,mesh:r})}Ye&&(Ye.meshes.forEach(e=>Wt.remove(e)),Ye=null)}function fv(){for(let n=0;n<(si?18:28);n++){let e=n<2?"turtle":n<4?"manta":"school",t=wa(e,{scale:e==="school"?.4:1});Wt.add(t),qu.push({kind:e,mesh:t,phase:n*2.41,center:new b(Math.sin(n*2.4)*55,5+Math.sin(n)*4,Math.cos(n*2.4)*55-15),radius:e==="manta"?16:e==="turtle"?9:5})}for(let n of["titan","lantern","rift"]){let e=Xe.landmarks.find(t=>t.id===n);for(let t=0;t<(si?4:6);t++){let i=t===0?"manta":"school",r=wa(i,{scale:i==="school"?.55:1.3,shadows:!1});Wt.add(r),qu.push({kind:i,mesh:r,phase:t*1.8,center:e.position.clone().add(new b(0,4,-8)),radius:i==="manta"?12:7})}}}function ic(){if(tt==="paused"){Dn("playing"),Yi.focus();return}re=Du(),Be=zu(),$e=ku(Ke),br.clear(),ws.clear(),mv(),Ra=0,Ca=0,bs=Xe.landmarks.find(n=>n.type!=="sanctuary").id,At.position.set(0,12.4,30),Dn("playing"),Yi.focus(),rt.play("start"),Ct(si?"\u0627\u0644\u062F\u0627\u0626\u0631\u0629 \u0644\u0644\u0633\u0628\u0627\u062D\u0629 \u0648\u0627\u0644\u0627\u0644\u062A\u0641\u0627\u0641 \xB7 \u0635\u0639\u0648\u062F \u0648\u063A\u0648\u0635 \u064A\u0645\u064A\u0646 \u0627\u0644\u0634\u0627\u0634\u0629":"\u0627\u0644\u0623\u0633\u0647\u0645 \u0644\u0644\u0633\u0628\u0627\u062D\u0629 \u0648\u0627\u0644\u0627\u0644\u062A\u0641\u0627\u0641 \xB7 R \u0644\u0644\u0635\u0639\u0648\u062F \u0648F \u0644\u0644\u063A\u0648\u0635 \xB7 \u0627\u0633\u062D\u0628 \u0627\u0644\u0628\u062D\u0631 \u0644\u062A\u063A\u064A\u064A\u0631 \u0646\u0638\u0631\u0643")}function df(){tt==="playing"?Dn("paused"):tt==="paused"&&ic()}function gv(n){Ts=n,Xe.setBiome(n),document.documentElement.dataset.world=n,document.querySelectorAll("#worlds button").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.world===n))),nc()}function Qu(){if(Ye){Ct("\u0623\u0643\u0645\u0644 \u0633\u0628\u0627\u0642\u0643 \u0627\u0644\u062D\u0627\u0644\u064A \u0623\u0648\u0644\u0627\u064B");return}let n=Xt(re.position),e=re.yaw,t=Math.hypot(n.x,n.z)>355?Math.atan2(-n.x,n.z):e,i=[];for(let s=0;s<7;s++){let a=t+Math.sin(s*.65)*.65,o=7+s*6.5,c=n.x+Math.sin(a)*o,l=n.z-Math.cos(a)*o,h=Rn(n.y+Math.sin(s*.9)*3.5,We(c,l)+2,16.5),d=new b(c,h,l);Xe.collision.place(d,2.2,We,16.5,416),i.push(d)}let r=i.map((s,a)=>{let o=new Oe(dv,pv);return o.position.copy(s),o.lookAt(i[Math.min(a+1,6)].clone().add(new b(.01,0,0))),Wt.add(o),o});Ye={points:i,meshes:r,index:0,time:55,total:0},Ct("\u0633\u0628\u0627\u0642 \u0627\u0644\u062A\u064A\u0627\u0631: \u0627\u0639\u0628\u0631 7 \u062D\u0644\u0642\u0627\u062A \u0645\u0631\u062A\u0628\u0629 \u062E\u0644\u0627\u0644 55 \u062B\u0627\u0646\u064A\u0629"),rt.play("gate")}function pf(n){if(!Ye)return;let e=Ye.total;if(Ye.meshes.forEach(t=>Wt.remove(t)),Ye=null,n){let t=kt(Be,220);Ji(t,re.position,"\u0633\u0628\u0627\u0642 \u0645\u0643\u062A\u0645\u0644"),Ar("races"),(!Ke.raceBest||e<Ke.raceBest)&&(Ke.raceBest=e),Es(),rt.play("win"),Ct("\u0633\u0628\u0627\u0642 \u0645\u0643\u062A\u0645\u0644! "+e.toFixed(1)+" \u062B\u0627\u0646\u064A\u0629 \u2014 +220")}else Ct("\u0641\u0627\u062A \u0648\u0642\u062A \u0627\u0644\u0633\u0628\u0627\u0642. \u062C\u0631\u0651\u0628 \u0645\u062C\u062F\u062F\u0627\u064B \u0645\u0646 \u062F\u0641\u062A\u0631 \u0627\u0644\u0628\u062D\u0631\u061B \u0644\u0627 \u062A\u062E\u0633\u0631 \u0646\u0642\u0627\u0637\u0627\u064B.")}function gf(n){let e=Xt(re.position),t=new b(Math.sin(re.yaw),0,-Math.cos(re.yaw));if(n==="current"){Qu();return}if(n==="bloom"){Ct("\u0627\u0632\u062F\u0647\u0627\u0631 \u0645\u0636\u064A\u0621 \u2014 \u0644\u0622\u0644\u0626 \u0630\u0647\u0628\u064A\u0629 \u0628\u064A\u0646 \u0642\u0646\u0627\u062F\u064A\u0644 \u0627\u0644\u0628\u062D\u0631!"),rt.play("discover");let i=e.clone().addScaledVector(t,18);i.y=Rn(i.y,We(i.x,i.z)+3,13);for(let r=0;r<10;r++){let s=r/10*Math.PI*2;In(r%3===0?"jelly":"gold",i.x+Math.cos(s)*8,i.y+Math.sin(s*2)*2,i.z+Math.sin(s)*8,{temporary:!0})}$e.event={name:"\u0627\u0632\u062F\u0647\u0627\u0631 \u0627\u0644\u0642\u0646\u0627\u062F\u064A\u0644",remaining:40}}else if(n==="shoal"){Ct("\u0645\u0631\u0651 \u0633\u0631\u0628 \u0627\u0644\u0644\u0624\u0644\u0624! \u0627\u062A\u0628\u0639 \u0627\u0644\u0644\u0645\u0639\u0627\u0646 \u0642\u0628\u0644 \u0623\u0646 \u064A\u062E\u062A\u0641\u064A"),rt.play("frenzy");for(let i=0;i<18;i++){let r=e.clone().addScaledVector(t,7+i*1.9);r.x+=Math.sin(i*.55)*4,r.y=Rn(r.y+Math.sin(i*.3)*2,We(r.x,r.z)+2,16),Math.hypot(r.x,r.z)<414&&In("gold",r.x,r.y,r.z,{temporary:!0})}$e.event={name:"\u0633\u0631\u0628 \u0627\u0644\u0644\u0624\u0644\u0624 \u0627\u0644\u0630\u0647\u0628\u064A",remaining:35}}else{Ct("\u0643\u0634\u0641 \u0627\u0644\u0645\u062F\u0651 \u0639\u0646 \u0643\u0646\u0632 \u0642\u0631\u064A\u0628 \u2014 \u0627\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0644\u0645\u0639\u0627\u0646"),rt.play("treasure");let i=e.clone().addScaledVector(t,14);i.y=Rn(i.y-3,We(i.x,i.z)+1,15),In("chest",i.x,i.y,i.z,{temporary:!0}),In("magnet",i.x+2,i.y+1,i.z,{temporary:!0}),$e.event={name:"\u0647\u062F\u064A\u0629 \u0627\u0644\u0645\u062F\u0651",remaining:50}}}function vv(n,e){let t=Xt(re.position);for(let i of Ln){if(!i.active){i.respawn-=n,i.respawn<=0&&!i.temporary&&(i.active=!0,i.mesh.visible=!0,i.mesh.position.copy(i.base));continue}(Be.magnet>0||ri(Ke,"pearl"))&&["pearl","gold"].includes(i.kind)&&i.mesh.position.distanceTo(t)<(Be.magnet>0?7:3)?i.mesh.position.lerp(t,1-Math.exp(-n*5)):i.mesh.position.y=i.base.y+Math.sin(Zi*1.8+i.phase)*(i.kind==="jelly"?.5:.15);let r=i.mesh.position.distanceTo(t);i.mesh.visible=r<(si?60:85);for(let o of i.mesh.children)o.material===qi.halo&&(o.visible=r<24);i.mesh.visible&&(i.mesh.rotation.y+=n*.4);let s=i.kind==="jelly"?1.2:i.kind==="chest"?1.3:.8;if(!zl(e,re.position,i.mesh.position,i.mesh.position,s))continue;if(i.kind==="jelly"){vf();continue}i.active=!1,i.mesh.visible=!1,i.respawn=i.kind==="chest"?100:55;let a=Be.score;if(i.kind==="chest"){let o=Jm(Be);Ji(o.delta,i.mesh.position,o.reward==="jackpot"?"\u0643\u0646\u0632 \u0646\u0627\u062F\u0631":"\u0643\u0646\u0632 \u0627\u0644\u0628\u062D\u0631"),Ar("treasures"),rt.play("treasure")}else Zm(Be,i.kind),Ji(Be.score-a,i.mesh.position),rt.play(i.kind,{combo:Be.combo}),["pearl","gold"].includes(i.kind)&&Ar("pearls")}}function vf(){if(re.feintTime>0)return;let n=Be.score,e=Km(Be);e!=="immune"&&(Ji(Be.score-n,re.position,e==="shield"?"\u062D\u0645\u0627\u064A\u0629":e==="defeated"?"\u0627\u0646\u062F\u0641\u0627\u0639 \u0648\u0627\u0642\u064D":""),rt.play(e==="hurt"?"hurt":"block"),e==="hurt"&&(document.documentElement.dataset.hurt="true",setTimeout(()=>delete document.documentElement.dataset.hurt,300),Ct("\u0627\u0642\u062A\u0631\u0628 \u0645\u0646\u0643 \u0627\u0644\u062E\u0637\u0631 \u2014 \u063A\u064A\u0651\u0631 \u0627\u062A\u062C\u0627\u0647\u0643 \u0623\u0648 \u0627\u0646\u062F\u0641\u0639 \u0628\u0639\u064A\u062F\u0627\u064B")),Be.ended&&Dn("ended"))}function xv(n){let e=Xt(re.position).distanceTo(new b(0,10,22))<11;oe("safe-label").hidden=!e;let t=null;for(let i of wr){let r=i.state.mode==="chase",s=Vm(i.state,re,n,{safe:e});i.mesh.position.copy(Xt(i.state.position)),Ku(i.mesh,i.state.yaw,i.state.pitch,0,n),Wl(i.mesh,Zi,i.state.mode==="chase"?1.8:.7);for(let o of s)if(o.type==="alert"&&(Ct("\u0645\u0641\u062A\u0631\u0633 \u064A\u062A\u0623\u0647\u0651\u0628 \u0644\u0644\u0645\u0637\u0627\u0631\u062F\u0629 \u2014 \u063A\u064A\u0651\u0631 \u0627\u062A\u062C\u0627\u0647\u0643 \u0648\u0627\u0633\u062A\u0639\u062F \u0644\u0644\u0627\u0646\u062F\u0641\u0627\u0639"),rt.play("guardian")),o.type==="attack"&&vf(),o.type==="escaped"&&r){let c=kt(Be,35);Ji(c,re.position,"\u0647\u0631\u0628\u062A \u0628\u0646\u062C\u0627\u062D"),Ar("escapes"),rt.play("nearMiss")}let a=Xt(i.state.position).distanceTo(Xt(re.position));["chase","telegraph"].includes(i.state.mode)&&(!t||a<t.distance)&&(t={distance:a,x:(i.state.position.x-re.position.x)*Math.cos(re.yaw)+(i.state.position.z-re.position.z)*Math.sin(re.yaw),hunter:i})}return oe("threat").hidden=!t,t&&(oe("threat").textContent=(t.hunter.state.mode==="telegraph"?"\u064A\u0633\u062A\u0639\u062F \u0644\u0644\u0645\u0637\u0627\u0631\u062F\u0629":"\u0645\u0637\u0627\u0631\u062F\u0629")+" \xB7 "+Math.round(t.distance)+" \u0645 \u2014 \u0627\u0644\u062A\u0641\u0651\u060C \u0627\u063A\u0635 \u0623\u0648 \u0627\u0646\u062F\u0641\u0639"),e?(Ra+=n,Ra>=14&&Be.lives<3&&(Be.lives++,Ra=0,Ct("\u0627\u0644\u0645\u0644\u0627\u0630 \u0623\u0639\u0627\u062F \u0644\u0643 \u0645\u062D\u0627\u0648\u0644\u0629"),rt.play("shield"))):Ra=0,t}function mf(n){let e=[];for(let t of Xe.landmarks){if(tt!=="playing"||t.type==="sanctuary"||t.position.distanceTo(Xt(re.position))>t.radius||(e.push(t.id),($e.insidePlaces||[]).includes(t.id)))continue;let i=ri(Ke,"explorer"),r=af($e,Ke,Ts,t.id);r&&(Ji(kt(Be,r.delta),t.position,r.first?"\u0627\u0643\u062A\u0634\u0627\u0641 \u062C\u062F\u064A\u062F":t.name),Ct("\u0648\u0635\u0644\u062A \u0625\u0644\u0649 "+t.name),rt.play("discover")),$e.questPlaces||($e.questPlaces=[]),Ea($e).id!=="places"&&($e.questPlaces=[]),$e.questPlaces.includes(t.id)||($e.questPlaces.push(t.id),Ar("places")),!i&&ri(Ke,"explorer")&&Ct("\u0641\u062A\u062D\u062A \u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u0627\u0644\u0631\u062D\u0651\u0627\u0644\u0629 \u2014 \u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0646\u0648\u0632 \u0639\u0644\u0649 \u0627\u0644\u0633\u0648\u0646\u0627\u0631")}$e.insidePlaces=e;for(let t of qu){let i=Zi*(t.kind==="school"?.23:.1)+t.phase;t.mesh.position.set(t.center.x+Math.cos(i)*t.radius,t.center.y+Math.sin(i*.7)*1.2,t.center.z+Math.sin(i)*t.radius),t.mesh.visible=t.mesh.position.distanceTo(Xt(re.position))<(si?55:85),t.mesh.visible&&(Ku(t.mesh,-i,Math.cos(i*.7)*.07,Math.sin(i)*.1,n),Wl(t.mesh,Zi,t.kind==="school"?1:.6)),tt==="playing"&&t.mesh.position.distanceTo(Xt(re.position))<5&&!$e.discoveredSpecies.includes(t.kind)&&($e.discoveredSpecies.push(t.kind),Ke.species.includes(t.kind)||(Ke.species.push(t.kind),Ke.xp+=35,Ji(kt(Be,35),t.mesh.position,{turtle:"\u0633\u0644\u062D\u0641\u0627\u0629 \u0628\u062D\u0631\u064A\u0629",manta:"\u0634\u064A\u0637\u0627\u0646 \u0627\u0644\u0628\u062D\u0631",school:"\u0633\u0631\u0628 \u0627\u0644\u0634\u0639\u0627\u0628"}[t.kind]),rt.play("discover"),Es()))}}function Yu(n){if(Zi+=n,ju-=n,ju<=0&&oe("toast").classList.remove("visible"),tt==="playing"){let i={...re.position},r=Rn((Ot.has("ArrowUp")||Ot.has("KeyW")?1:0)-(Ot.has("ArrowDown")||Ot.has("KeyS")?1:0)-Kt.y,-1,1);r<-.12&&Ju(!1);let s={turn:Rn((Ot.has("ArrowRight")||Ot.has("KeyD")?1:0)-(Ot.has("ArrowLeft")||Ot.has("KeyA")?1:0)+Kt.x,-1,1),throttle:Ss?1:r,lift:Rn((Ot.has("KeyR")||Ot.has("KeyE")?1:0)-(Ot.has("KeyF")||Ot.has("KeyQ")?1:0)+[...Pn.values()].reduce((l,h)=>l+h,0),-1,1),lookYaw:Et.yaw,lookPitch:Et.pitch,boost:Ia};Et.yaw=Et.pitch=0,La&&(ri(Ke,"messi")?Uu(re)&&(Be.invulnerable=Math.max(Be.invulnerable,.9),rt.play("nearMiss"),br.burst(Xt(re.position),9238244),Ct("\u0645\u0631\u0627\u0648\u063A\u0629 \u0645\u064A\u0633\u064A!")):Ct("\u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u0645\u064A\u0633\u064A: \u0627\u0647\u0631\u0628 \u0645\u0646 3 \u0645\u0637\u0627\u0631\u062F\u0627\u062A \u0644\u0641\u062A\u062D \u0627\u0644\u0645\u0631\u0627\u0648\u063A\u0629"));let a=re.boost,o=Gm(re,s,n);Xe.collision.resolve(re.position,re.velocity,1.7,i,We),Math.hypot(re.position.x,re.position.z)>420&&(Object.assign(re.position,i),re.velocity.x=re.velocity.y=re.velocity.z=0),re.boost>a&&(rt.play("dash"),ri(Ke,"dolphin")&&(re.cooldown*=.75)),Ia=La=!1;for(let l of o)l.type==="breach"&&(br.splash(new b(re.position.x,18,re.position.z)),rt.play("breach"),Ar("breaches"),Ji(kt(Be,10),re.position,"\u0644\u0645\u0633\u0629 \u0627\u0644\u0633\u0645\u0627\u0621")),l.type==="splash"&&(br.splash(new b(re.position.x,18,re.position.z),1.3),rt.play("splash"),Ca=1),l.type==="boundary"&&Ct("\u062A\u064A\u0627\u0631 \u0642\u0648\u064A \u0639\u0646\u062F \u062D\u0627\u0641\u0629 \u0627\u0644\u062E\u0644\u064A\u062C \u2014 \u0639\u064F\u062F \u0625\u0644\u0649 \u0627\u0644\u0634\u0639\u0627\u0628");Be.elapsed+=n,Be.distance=re.distance,Be.boost=re.boost,Be.cooldown=re.cooldown;for(let l of["shield","invulnerable","magnet","frenzy","current","comboTime"])Be[l]=Math.max(0,Be[l]-n);if(Be.comboTime||(Be.combo=0),vv(n,i),tt!=="playing")return;let c=xv(n);if(tt!=="playing")return;if(mf(n),Ye){Ye.time-=n,Ye.total+=n;let l=Ye.points[Ye.index];zl(i,re.position,l,l,2)&&(Ye.meshes[Ye.index].visible=!1,Ye.index++,Ji(kt(Be,15),re.position),rt.play("gate"),Ye.index===Ye.points.length&&pf(!0)),Ye&&Ye.time<=0&&pf(!1)}if($e.elapsed+=n,$e.nextEvent-=n,$e.nextEvent<=0&&(gf(["shoal","bloom","treasure","current"][$e.eventIndex++%4]),$e.nextEvent=72),$e.event&&($e.event.remaining-=n,$e.event.remaining<=0)){for(let l of Ln.filter(h=>h.temporary))$u(l);Ln=Ln.filter(l=>!l.temporary),$e.event=null}rt.update({world:Ts,speed:Math.min(1,re.speed/12),boosting:re.boost>0,threat:c,aboveWater:re.airborne}),Wu+=n,Wu>5&&(Wu=0,Es())}else tt==="menu"&&mf(n);let e=tt!=="menu";fi.copy(e?Xt(re.position):new b(0,11,22)),Pa.position.copy(fi);let t=e?Math.atan2(re.velocity.y,Math.max(2,Math.hypot(re.velocity.x,re.velocity.z))):0;Ku(Pa,e?re.yaw:-1.15,t,e?-Kt.x*.12:0,n),Wl(Pa,Zi,e?.55+re.speed*.065:.55),Ms.position.copy(fi),Ms.visible=e&&(Be.shield>0||re.feintTime>0),Ms.material.opacity=re.feintTime>0?.12:.065,yv(n,e),Xe.update(n,Zi,fi,At),br.update(tt==="paused"?0:n,fi,Xt(re.velocity),Zi,18,tt==="playing"),ws.update(n,At,tt==="playing"),Ca=Math.max(0,Ca-n*.45),oe("water-drops").style.opacity=ys?"0":String(Ca*.75),Hu+=n,Hu>.1&&(Hu=0,Mv())}function _v(n,e,t){return Xe.collision?.resolve(n,e,t)}function yv(n,e){if($l){At.position.fromArray($l.position),At.lookAt(new b().fromArray($l.target)),At.updateMatrixWorld();return}if(!e)ji.set(7.5,12.8,29),Vu.set(-.2,10.8,21.4);else{let t=si&&innerHeight>innerWidth?9:7.4,i=Rn(re.pitch-.24,-1.4,1.3),r=t*Math.cos(i);ji.copy(fi).add(new b(-Math.sin(re.yaw)*r,1.1-Math.sin(i)*t,Math.cos(re.yaw)*r)),fi.y<18-.3&&(ji.y=Math.min(ji.y,18-.48)),ji.y=Math.max(We(ji.x,ji.z)+1,ji.y),Vu.copy(fi).add(new b(Math.sin(re.yaw)*4*Math.cos(i),Math.sin(i)*4+.2,-Math.cos(re.yaw)*4*Math.cos(i)))}e&&ji.copy(Xe.collision.cameraEnd(fi,ji)),At.position.lerp(ji,ys?1:1-Math.exp(-n*(e?7:2))),_v(At.position,null,.3),At.lookAt(Vu),At.fov=yt.lerp(At.fov,re.boost>0&&e&&!ys?64:58,1-Math.exp(-n*4)),At.updateProjectionMatrix()}function Mv(){oe("score").textContent=Be.score,oe("combo").textContent=Be.combo>1?"\u0633\u0644\u0633\u0644\u0629 \xD7"+Be.combo:"",oe("lives").textContent="\u25CF ".repeat(Math.max(0,Be.lives)),oe("lives").setAttribute("aria-label",Be.lives+" \u0645\u062D\u0627\u0648\u0644\u0627\u062A"),oe("shield").textContent=Be.shield>0?"\u062D\u0645\u0627\u064A\u0629 "+Math.ceil(Be.shield)+" \u062B":Be.magnet>0?"\u062C\u0627\u0630\u0628\u064A\u0629 \u0627\u0644\u0644\u0622\u0644\u0626":"",oe("depth").textContent=re.airborne?"\u0641\u0648\u0642 \u0627\u0644\u0633\u0637\u062D":Math.max(0,18-re.position.y).toFixed(1)+" \u0645",oe("depth-panel-value").textContent=oe("depth").textContent,oe("touch-rise").dataset.active=String(tt==="playing"&&(Ot.has("KeyR")||Ot.has("KeyE")||[...Pn.values()].includes(1))),oe("touch-dive").dataset.active=String(tt==="playing"&&(Ot.has("KeyF")||Ot.has("KeyQ")||[...Pn.values()].includes(-1)));let n=(re.yaw*180/Math.PI%360+360)%360;oe("heading-value").textContent=Math.round(n)+"\xB0",oe("energy").max=4,oe("energy").value=Math.max(0,4-re.cooldown),oe("boost-label").textContent=re.cooldown>0?"\u0627\u0644\u0627\u0646\u062F\u0641\u0627\u0639 "+re.cooldown.toFixed(1)+" \u062B":"\u0627\u0644\u0627\u0646\u062F\u0641\u0627\u0639 \u062C\u0627\u0647\u0632";let e=Ea($e);oe("quest-title").textContent=e.title,oe("quest-detail").textContent=e.detail,oe("quest-count").textContent=e.progress+" / "+e.target,oe("quest-progress").max=e.target,oe("quest-progress").value=e.progress;let t=Ye?{name:"\u0627\u0644\u062D\u0644\u0642\u0629 "+(Ye.index+1)+" / 7",position:Ye.points[Ye.index]}:Xe.landmarks.find(i=>i.id===bs);if(t){let i=t.position.distanceTo(fi),r=t.position.y-fi.y,s=Math.atan2(t.position.x-fi.x,-(t.position.z-fi.z));oe("destination").textContent=t.name,oe("destination-distance").textContent=Math.round(i)+" \u0645"+(Math.abs(r)>3?r>0?" \xB7 \u0623\u0639\u0644\u0649":" \xB7 \u0623\u0639\u0645\u0642":""),oe("bearing").style.transform="rotate("+(s-re.yaw)*180/Math.PI+"deg)"}oe("event-label").textContent=Ye?"\u0633\u0628\u0627\u0642 \u0627\u0644\u062A\u064A\u0627\u0631 \xB7 "+Math.ceil(Ye.time)+" \u062B":$e.event?$e.event.name+" \xB7 "+Math.ceil($e.event.remaining)+" \u062B":"\u0627\u0633\u062A\u0643\u0634\u0641 \u0628\u062D\u0631\u0651\u064A\u0629 \xB7 \u0627\u0641\u062A\u062D \u062F\u0641\u062A\u0631 \u0627\u0644\u0628\u062D\u0631 \u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0648\u062C\u0647\u062A\u0643",oe("skill-label").textContent=ri(Ke,"messi")?re.feintCooldown>0?"\u0645\u0631\u0627\u0648\u063A\u0629 "+Math.ceil(re.feintCooldown)+" \u062B":"\u0645\u0631\u0627\u0648\u063A\u0629 \u0645\u064A\u0633\u064A \xB7 X":"\u0627\u0644\u0645\u0631\u0627\u0648\u063A\u0629 \u0645\u0642\u0641\u0644\u0629 \xB7 3 \u0647\u0631\u0648\u0628\u0627\u062A",oe("touch-skill").dataset.locked=String(!ri(Ke,"messi")),oe("touch-skill").textContent=ri(Ke,"messi")?re.feintCooldown>0?Math.ceil(re.feintCooldown)+" \u062B":"\u0645\u0631\u0627\u0648\u063A\u0629":"\u0645\u0631\u0627\u0648\u063A\u0629 \u25C7",Sv()}function Sv(){let n=oe("radar"),e=n.getContext("2d"),t=n.width,i=t/2,r=83/420;e.clearRect(0,0,t,t),e.save(),e.translate(i,i),e.strokeStyle="#a5dace35",e.lineWidth=1;for(let a of[30,60,83])e.beginPath(),e.arc(0,0,a,0,Math.PI*2),e.stroke();e.beginPath(),e.moveTo(-83,0),e.lineTo(83,0),e.moveTo(0,-83),e.lineTo(0,83),e.stroke();let s=(a,o,c,l=3)=>{let h=(a-re.position.x)*r,d=(o-re.position.z)*r;Math.hypot(h,d)>83||(e.fillStyle=c,e.beginPath(),e.arc(h,d,l,0,Math.PI*2),e.fill())};for(let a of Xe.landmarks)s(a.position.x,a.position.z,a.id===bs?"#ffe0a0":"#96c5bb",a.id===bs?4:2.5);if(ri(Ke,"explorer"))for(let a of Ln)a.kind==="chest"&&a.active&&s(a.mesh.position.x,a.mesh.position.z,"#f8bb55",3);for(let a of wr)(a.state.mode==="chase"||a.state.mode==="telegraph")&&s(a.state.position.x,a.state.position.z,"#f29b81",4);if(Ye)for(let a=Ye.index;a<Ye.points.length;a++)s(Ye.points[a].x,Ye.points[a].z,"#93fce3",3);e.rotate(re.yaw),e.fillStyle="#fff2c7",e.beginPath(),e.moveTo(0,-7),e.lineTo(5,5),e.lineTo(0,2),e.lineTo(-5,5),e.closePath(),e.fill(),e.restore()}function nc(){oe("rank").textContent=Qm[rf(Ke)],oe("journal-count").textContent=Ke.places.length+" \u0627\u0643\u062A\u0634\u0627\u0641 \xB7 "+Sr.filter(n=>ri(Ke,n.id)).length+"/"+Sr.length+" \u0645\u064A\u062F\u0627\u0644\u064A\u0627\u062A",oe("medal-list").replaceChildren();for(let n of Sr){let e=ri(Ke,n.id),t=document.createElement("article");t.className="medal "+(e?"unlocked":"locked"),t.innerHTML='<span class="medal-mark" aria-hidden="true">'+n.mark+"</span><div><h3>"+n.name+"</h3><b>"+n.ability+"</b><p>"+n.detail+"</p><small>"+n.condition+" \xB7 "+Jl(Ke,n)+"/"+n.target+(e?" \xB7 \u0645\u0641\u062A\u0648\u062D\u0629":"")+'</small><progress max="'+n.target+'" value="'+Jl(Ke,n)+'" aria-label="\u062A\u0642\u062F\u0645 '+n.name+'"></progress></div>',oe("medal-list").append(t)}if(Xe){oe("destination-list").replaceChildren();for(let n of Xe.landmarks){let e=document.createElement("button");e.type="button",e.className="destination-choice",e.dataset.destination=n.id,e.setAttribute("aria-pressed",String(n.id===bs)),e.innerHTML="<b>"+n.name+"</b><small>"+(n.type==="sanctuary"?"\u0645\u0646\u0637\u0642\u0629 \u0622\u0645\u0646\u0629 \u0644\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0627\u062A":Ke.places.includes(Ts+":"+n.id)?"\u0645\u0633\u062C\u0651\u0644\u0629 \u0641\u064A \u062F\u0641\u062A\u0631\u0643":"\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0643\u062A\u0634\u0627\u0641\u0643")+"</small>",e.onclick=()=>{bs=n.id,Ql(),Ct("\u0648\u062C\u0647\u062A\u0643: "+n.name+" \u2014 \u0627\u062A\u0628\u0639 \u0625\u0628\u0631\u0629 \u0627\u0644\u0628\u0648\u0635\u0644\u0629")},oe("destination-list").append(e)}oe("atlas-stats").textContent=Ke.places.length+" \u0648\u062C\u0647\u0629 \xB7 "+Ke.species.length+" \u0643\u0627\u0626\u0646\u0627\u062A \xB7 "+Ke.quests+" \u062A\u062D\u062F\u064A\u0627\u062A"+(Ke.raceBest?" \xB7 \u0623\u0633\u0631\u0639 \u0633\u0628\u0627\u0642 "+Ke.raceBest.toFixed(1)+" \u062B":"")}}function Xu(){tc=tt==="playing",tc&&Dn("paused"),nc(),oe("atlas").showModal()}function Ql(){oe("atlas").open&&(oe("atlas").close(),tc&&(tc=!1,ic()))}function bv(){oe("graphics-quality").onchange=r=>{$n=r.target.value,ff()},oe("cruise-toggle").onclick=cf,oe("start").onclick=ic,oe("home").onclick=()=>Dn("menu"),oe("pause").onclick=df,oe("sound").onclick=()=>{rt.toggle(),Zu()},oe("volume").addEventListener("input",r=>{rt.setVolume(Number(r.target.value)/100),Zu()}),oe("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Ct("\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0647\u0646\u0627")}},document.querySelectorAll("#worlds button").forEach(r=>r.onclick=()=>gv(r.dataset.world)),oe("open-atlas").onclick=Xu,oe("menu-atlas").onclick=Xu,oe("close-atlas").onclick=Ql,oe("atlas").addEventListener("cancel",r=>{r.preventDefault(),Ql()}),oe("start-race").onclick=()=>{Ql(),tt!=="playing"&&ic(),Qu()},addEventListener("keydown",r=>{if(!(r.target.closest?.("input,textarea,select")||document.querySelector("dialog[open]"))){if(r.code==="Escape"){r.preventDefault(),r.repeat||df();return}if(r.code==="KeyM"){r.preventDefault(),r.repeat||Xu();return}if(!(tt!=="playing"||r.code==="Space"&&r.target.closest?.("button,a"))){if(r.code==="KeyC"){r.preventDefault(),r.repeat||cf();return}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD","KeyR","KeyF","KeyE","KeyQ","Space","KeyX"].includes(r.code)&&(r.preventDefault(),Ot.add(r.code),r.code==="Space"&&!r.repeat&&(Ia=!0),r.code==="KeyX"&&!r.repeat&&(La=!0))}}}),addEventListener("keyup",r=>Ot.delete(r.code)),Yi.addEventListener("pointerdown",r=>{tt!=="playing"||Et.id!==null||(Et.id=r.pointerId,Et.x=r.clientX,Et.y=r.clientY,Yi.setPointerCapture(r.pointerId),Yi.focus())}),Yi.addEventListener("pointermove",r=>{r.pointerId===Et.id&&(Et.yaw+=(r.clientX-Et.x)*.005,Et.pitch-=(r.clientY-Et.y)*.004,Et.x=r.clientX,Et.y=r.clientY)});let n=r=>{r.pointerId===Et.id&&(Et.id=null)};Yi.addEventListener("pointerup",n),Yi.addEventListener("pointercancel",n),Yi.addEventListener("lostpointercapture",n);let e=oe("stick"),t=r=>{if(r.pointerId!==Kt.id)return;let s=e.getBoundingClientRect(),a=(r.clientX-s.x-s.width/2)/(s.width*.42),o=(r.clientY-s.y-s.height/2)/(s.height*.42),c=Math.max(1,Math.hypot(a,o));Kt.x=a/c,Kt.y=o/c,e.querySelector("i").style.transform="translate("+Kt.x*27+"px,"+Kt.y*27+"px)"};e.addEventListener("pointerdown",r=>{r.preventDefault(),tt==="playing"&&(Kt.id=r.pointerId,e.setPointerCapture(r.pointerId),t(r))}),e.addEventListener("pointermove",t);let i=r=>{r.pointerId===Kt.id&&(Kt.id=null,Kt.x=Kt.y=0,e.querySelector("i").style.transform="")};e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),e.addEventListener("lostpointercapture",i);for(let[r,s]of[["touch-rise",1],["touch-dive",-1]]){let a=oe(r);a.addEventListener("pointerdown",c=>{c.preventDefault(),tt==="playing"&&(Pn.set(c.pointerId,s),a.dataset.active="true",a.setPointerCapture(c.pointerId))});for(let c of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(c,l=>Pn.delete(l.pointerId));let o="keyboard:"+r;a.addEventListener("keydown",c=>{tt==="playing"&&["Space","Enter"].includes(c.code)&&(c.preventDefault(),Pn.set(o,s))}),a.addEventListener("keyup",c=>{["Space","Enter"].includes(c.code)&&(c.preventDefault(),Pn.delete(o))}),a.addEventListener("blur",()=>Pn.delete(o))}oe("touch-boost").addEventListener("pointerdown",r=>{r.preventDefault(),tt==="playing"&&(Ia=!0)}),oe("touch-skill").addEventListener("pointerdown",r=>{r.preventDefault(),tt==="playing"&&(La=!0)}),addEventListener("blur",()=>{tt==="playing"&&Dn("paused"),rt.quiet()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(tt==="playing"&&Dn("paused"),rt.quiet()),Kl=0}),addEventListener("pagehide",()=>{Es(),rt.quiet()}),addEventListener("resize",Tv)}function Zu(){let n=rt.snapshot();oe("sound").disabled=!n.supported,oe("volume").disabled=!n.supported,oe("sound").setAttribute("aria-pressed",String(n.enabled)),oe("sound").setAttribute("aria-label",n.enabled?"\u0643\u062A\u0645 \u0627\u0644\u0635\u0648\u062A":"\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0635\u0648\u062A"),oe("volume").value=Math.round(n.volume*100)}function Tv(){let n=innerWidth,e=innerHeight;At.aspect=n/e,At.updateProjectionMatrix(),Gt.setSize(n,e,!1)}var Yi=oe("ocean");async function wv(){Gt=new El({canvas:Yi,antialias:!1,powerPreference:"high-performance"}),Gt.setPixelRatio(Math.min(devicePixelRatio,si?1.3:1.75)),Gt.setSize(innerWidth,innerHeight,!1),Gt.toneMapping=pa,Gt.toneMappingExposure=1.05,Gt.shadowMap.enabled=!0,Gt.shadowMap.type=pr,Wt=new Tn,At=new zt(58,innerWidth/innerHeight,.15,1800),At.position.set(7.5,12.8,29),Xe=new Vl(Wt,{coarse:si,reduced:ys}),Xe.setBiome(Ts),Pa=wa("hero"),Wt.add(Pa),br=new ql(Wt,ys),ws=new jl(oe("score-feedback"),ys),Ms=new Oe(new Ut(1.35,24,16),new an({color:9369049,transparent:!0,opacity:.06,depthWrite:!1})),Wt.add(Ms),Ms.visible=!1,await Xe.ready,Tr=new Hl(Gt,{coarse:si}),Xe.prepareEnvironment(Gt),fv(),bv(),ff(),Zu(),Dn("menu"),oe("start").disabled=!1,document.documentElement.dataset.engine="ready",document.documentElement.dataset.engineVersion="free-ocean",Gt.setAnimationLoop(n=>{let e=Kl?n-Kl:16,t=Math.min(.05,e/1e3);Kl=n,Yu(t),Tr.render(Wt,At,Xe,Zi),tt==="playing"&&!document.hidden&&Tr.observeFrame(e)})}wv().catch(n=>{console.error(n),oe("error").hidden=!1});new URLSearchParams(location.search).has("test")&&(window.__ocean={snapshot:()=>({mode:tt,cruising:Ss,quality:$n,streaming:Xe.sectors?.stats,adaptiveScale:Tr.adaptiveScale,garden:Xe.garden?.userData,renderPipeline:"depth-optics-v1",reefArt:Xe.reefArt?.userData?.assetStats??null,pixelRatio:Gt.getPixelRatio(),worldRadius:420,collisionRecords:Xe.collision.records.length,collisionTriangles:Xe.collision.triangles,penetrating:Xe.collision.contacts(Xt(re.position),1.7-.04),world:Ts,run:{...Be},position:[re.position.x,re.position.y,re.position.z],swimmer:JSON.parse(JSON.stringify(re)),audio:rt.snapshot(),journal:JSON.parse(JSON.stringify(Ke)),quest:Ea($e),feedback:ws.entries.map(n=>n.element.textContent),items:Ln.filter(n=>n.active).map(n=>({kind:n.kind,p:n.mesh.position.toArray()})),hunters:wr.map(n=>JSON.parse(JSON.stringify(n.state))),race:Ye?{index:Ye.index,time:Ye.time,points:Ye.points.map(n=>n.toArray())}:null,landmarks:Xe.landmarks.map(n=>({id:n.id,p:n.position.toArray()})),renderSize:[Gt.domElement.width,Gt.domElement.height],camera:At.position.toArray(),calls:Gt.info.render.calls,triangles:Gt.info.render.triangles,geometries:Gt.info.memory.geometries}),step:n=>{Yu(n),Tr.render(Wt,At,Xe,Zi)},simulate:n=>{for(let e=0;e<Math.ceil(n/.05);e++)Yu(.05);Tr.render(Wt,At,Xe,Zi)},place:(n,e,t=re.position.z)=>{Object.assign(re.position,{x:n,y:e,z:t}),Object.assign(re.velocity,{x:0,y:0,z:0}),re.airborne=!1},aim:(n,e=0)=>{re.yaw=n,re.pitch=e},spawn:(n,e,t,i)=>In(n,e,t,i,{testPlacement:!0}),encounter:gf,progress:(n,e)=>Ar(n,e),startRace:Qu,collisionProbe:(n,e,t=1.7)=>{let i={...e},r=Xe.collision.resolve(i,null,t,n);return{p:i,hits:r,penetrating:Xe.collision.contacts(Xt(i),t-.04)}},cameraPose:(n,e)=>{$l=n?{position:n,target:e}:null},solidSamples:(n="lagoon-rocks")=>Xe.collision.records.filter(e=>e.name===n).flatMap(e=>(n==="lagoon-rocks"?[0]:[.19,.31,.47,.63,.79]).map(t=>{let i=e.vertices,r=Math.floor((i.length/9-1)*t)*9,s=new b().fromArray(i,r),a=new b().fromArray(i,r+3),o=new b().fromArray(i,r+6),c=new li(s,a,o).getNormal(new b);return{p:s.clone().add(a).add(o).divideScalar(3).toArray(),n:c.toArray()}})),solids:()=>Xe.collision.records.map(n=>({name:n.name,index:n.index,min:n.box.min.toArray(),max:n.box.max.toArray()})),hunter:(n,e)=>{Object.assign(wr[n].state,Nu(n,e))},surface:18});})();
