(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var wd=0,Pc=1,Ed=2;var $n=1,Ad=2,qr=3,Bn=0,Ht=1,at=2,qi=0,Js=1,Yr=2,Ic=3,Lc=4,Cd=5;var Zr=100,Rd=101,Pd=102,Id=103,Ld=104,Dd=200,Ud=201,Nd=202,Fd=203,Od=204,Bd=205,zd=206,Gd=207,Vd=208,kd=209,Hd=210,Wd=211,Xd=212,jd=213,qd=214,Dc=0,Uc=1,Nc=2,ko=3,Fc=4,Oc=5,Bc=6,zc=7,Yd=0,Zd=1,Jd=2,Ri=0,Gc=1,Vc=2,kc=3,Ks=4,Hc=5,Wc=6,Xc=7;var jc=300,Jr=301,Qn=302,Ho=303,Wo=304,$s=306,$a=1e3,Ln=1001,Qa=1002,fi=1003,Kd=1004;var Qs=1005;var Gt=1006,Xo=1007;var er=1008;var ci=1009,qc=1010,Yc=1011,Kr=1012,jo=1013,fn=1014,_i=1015,Yi=1016,qo=1017,Yo=1018,$r=1020,Zc=35902,Jc=35899,$d=1021,Qd=1022,Pi=1023,zn=1026,tr=1027,Zo=1028,Jo=1029,ir=1030,Kc=1031;var $c=1033,Ko=33776,$o=33777,Qo=33778,el=33779,Qc=35840,eh=35841,th=35842,ih=35843,nh=36196,rh=37492,sh=37496,ah=37488,oh=37489,tl=37490,lh=37491,ch=37808,hh=37809,uh=37810,dh=37811,ph=37812,mh=37813,fh=37814,gh=37815,vh=37816,_h=37817,xh=37818,yh=37819,Mh=37820,Sh=37821,bh=36492,Th=36494,wh=36495,Eh=36283,Ah=36284,il=36285,Ch=36286;var Ms=2300,eo=2301,Ka=2302,gc=2303,vc=2400,_c=2401,xc=2402;var Rh=3201;var Ph=0,ep=1,nr="",si="srgb",Ss="srgb-linear",bs="linear",Qe="srgb";var Yn=7680;var tp=512,ip=513,np=514,nl=515,rp=516,sp=517,rl=518,ap=519,yc=35044,Ih=35048;var Lh="300 es",hn=2e3,Pr=2001;function wm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ts(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function op(){let n=Ts("canvas");return n.style.display="block",n}var Vu={},Ir=null;function Dh(...n){let e="THREE."+n.shift();Ir?Ir("log",e,...n):console.log(e,...n)}function lp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ee(...n){let e="THREE."+(n=lp(n)).shift();if(Ir)Ir("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ce(...n){let e="THREE."+(n=lp(n)).shift();if(Ir)Ir("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Zn(...n){let e=n.join(" ");e in Vu||(Vu[e]=!0,Ee(...n))}function cp(n,e,t){return new Promise(function(i,r){setTimeout(function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var hp={[Dc]:1,[Nc]:6,[Fc]:7,[ko]:5,[Uc]:0,[Bc]:2,[zc]:4,[Oc]:3},Hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=1234567,Cr=Math.PI/180,Lr=180/Math.PI;function rr(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Bt[255&n]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[255&e]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[63&t|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[255&i]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function ze(n,e,t){return Math.max(e,Math.min(t,n))}function Mc(n,e){return(n%e+e)%e}function _s(n,e,t){return(1-t)*n+t*e}function Ar(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ei={DEG2RAD:Cr,RAD2DEG:Lr,generateUUID:rr,clamp:ze,euclideanModulo:Mc,mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:_s,damp:function(n,e,t,i){return _s(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(Mc(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(ku=n);let e=ku+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*Cr},radToDeg:function(n){return n*Lr},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*f,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*f,o*c);break;case"ZYZ":n.set(l*f,l*p,o*h,o*c);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Zt,denormalize:Ar},Bh=class Bh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bh.prototype.isVector2=!0;var te=Bh,Tt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],p=s[a+1],f=s[a+2],m=s[a+3];if(u!==m||l!==d||c!==p||h!==f){let _=l*d+c*p+h*f+u*m;_<0&&(d=-d,p=-p,f=-f,m=-m,_=-_);let g=1-o;if(_<.9995){let v=Math.acos(_),x=Math.sin(v);g=Math.sin(g*v)/x,l=l*g+d*(o=Math.sin(o*v)/x),c=c*g+p*o,h=h*g+f*o,u=u*g+m*o}else{l=l*g+d*o,c=c*g+p*o,h=h*g+f*o,u=u*g+m*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zh=class zh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kl.copy(this).projectOnVector(e),this.sub(kl)}reflect(e){return this.sub(kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zh.prototype.isVector3=!0;var b=zh,kl=new b,Hu=new Tt,Gh=class Gh{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],f=i[8],m=r[0],_=r[3],g=r[6],v=r[1],x=r[4],S=r[7],E=r[2],M=r[5],P=r[8];return s[0]=a*m+o*v+l*E,s[3]=a*_+o*x+l*M,s[6]=a*g+o*S+l*P,s[1]=c*m+h*v+u*E,s[4]=c*_+h*x+u*M,s[7]=c*g+h*S+u*P,s[2]=d*m+p*v+f*E,s[5]=d*_+p*x+f*M,s[8]=d*g+p*S+f*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+i*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=u*m,e[1]=(r*c-h*i)*m,e[2]=(o*i-r*a)*m,e[3]=d*m,e[4]=(h*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Zn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hl.makeScale(e,t)),this}rotate(e){return Zn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hl.makeRotation(-e)),this}translate(e,t){return Zn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gh.prototype.isMatrix3=!0;var Ne=Gh,Hl=new Ne,Wu=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Em(){let n={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Qe&&(r.r=cn(r.r),r.g=cn(r.g),r.b=cn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?bs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ss]:{primaries:e,whitePoint:i,transfer:bs,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),n}var Xe=Em();function cn(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function Rr(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var fr,to=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fr===void 0&&(fr=Ts("canvas")),fr.width=e.width,fr.height=e.height;let r=fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ts("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*cn(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*cn(t[i]/255)):t[i]=cn(t[i]);return{data:t,width:e.width,height:e.height}}return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Am=0,Dr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wl(r[a].image)):s.push(Wl(r[a]))}else s=Wl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Wl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?to.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}var Cm=0,Xl=new b,Qt=class n extends Hi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=rr(),this.name="",this.source=new Dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xl).x}get height(){return this.source.getSize(Xl).y}get depth(){return this.source.getSize(Xl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i:Ee(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $a:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case $a:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null,Qt.DEFAULT_MAPPING=jc,Qt.DEFAULT_ANISOTROPY=1;var Vh=class Vh{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],m=l[2],_=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(f-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(f+_)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,S=(p+1)/2,E=(g+1)/2,M=(h+d)/4,P=(u+m)/4,F=(f+_)/4;return x>S&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=M/i,s=P/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=M/r,s=F/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=P/s,r=F/s),this.set(i,r,s,t),this}let v=Math.sqrt((_-f)*(_-f)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(_-f)/v,this.y=(u-m)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vh.prototype.isVector4=!0;var it=Vh,io=class extends Hi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new Qt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Dr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends io{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ws=class extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fi,this.minFilter=fi,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var no=class extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fi,this.minFilter=fi,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vo=class Vo{constructor(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,_)}set(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,_){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=m,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/gr.setFromMatrixColumn(e,0).length(),s=1/gr.setFromMatrixColumn(e,1).length(),a=1/gr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d+m*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d-m*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=m-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-m*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rm,e,Pm)}lookAt(e,t,i){let r=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Tn.crossVectors(i,ni),Tn.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Tn.crossVectors(i,ni)),Tn.normalize(),Ma.crossVectors(ni,Tn),r[0]=Tn.x,r[4]=Ma.x,r[8]=ni.x,r[1]=Tn.y,r[5]=Ma.y,r[9]=ni.y,r[2]=Tn.z,r[6]=Ma.z,r[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],f=i[2],m=i[6],_=i[10],g=i[14],v=i[3],x=i[7],S=i[11],E=i[15],M=r[0],P=r[4],F=r[8],L=r[12],U=r[1],k=r[5],O=r[9],Z=r[13],H=r[2],V=r[6],q=r[10],W=r[14],ie=r[3],ge=r[7],Ae=r[11],ye=r[15];return s[0]=a*M+o*U+l*H+c*ie,s[4]=a*P+o*k+l*V+c*ge,s[8]=a*F+o*O+l*q+c*Ae,s[12]=a*L+o*Z+l*W+c*ye,s[1]=h*M+u*U+d*H+p*ie,s[5]=h*P+u*k+d*V+p*ge,s[9]=h*F+u*O+d*q+p*Ae,s[13]=h*L+u*Z+d*W+p*ye,s[2]=f*M+m*U+_*H+g*ie,s[6]=f*P+m*k+_*V+g*ge,s[10]=f*F+m*O+_*q+g*Ae,s[14]=f*L+m*Z+_*W+g*ye,s[3]=v*M+x*U+S*H+E*ie,s[7]=v*P+x*k+S*V+E*ge,s[11]=v*F+x*O+S*q+E*Ae,s[15]=v*L+x*Z+S*W+E*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],f=e[3],m=e[7],_=e[11],g=e[15],v=l*p-c*d,x=o*p-c*u,S=o*d-l*u,E=a*p-c*h,M=a*d-l*h,P=a*u-o*h;return t*(m*v-_*x+g*S)-i*(f*v-_*E+g*M)+r*(f*x-m*E+g*P)-s*(f*S-m*M+_*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],m=e[13],_=e[14],g=e[15],v=t*o-i*a,x=t*l-r*a,S=t*c-s*a,E=i*l-r*o,M=i*c-s*o,P=r*c-s*l,F=h*m-u*f,L=h*_-d*f,U=h*g-p*f,k=u*_-d*m,O=u*g-p*m,Z=d*g-p*_,H=v*Z-x*O+S*k+E*U-M*L+P*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/H;return e[0]=(o*Z-l*O+c*k)*V,e[1]=(r*O-i*Z-s*k)*V,e[2]=(m*P-_*M+g*E)*V,e[3]=(d*M-u*P-p*E)*V,e[4]=(l*U-a*Z-c*L)*V,e[5]=(t*Z-r*U+s*L)*V,e[6]=(_*S-f*P-g*x)*V,e[7]=(h*P-d*S+p*x)*V,e[8]=(a*O-o*U+c*F)*V,e[9]=(i*U-t*O-s*F)*V,e[10]=(f*M-m*S+g*v)*V,e[11]=(u*S-h*M-p*v)*V,e[12]=(o*L-a*k-l*F)*V,e[13]=(t*k-i*L+r*F)*V,e[14]=(m*x-f*E-_*v)*V,e[15]=(h*E-u*x+d*v)*V,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,m=a*h,_=a*u,g=o*u,v=l*c,x=l*h,S=l*u,E=i.x,M=i.y,P=i.z;return r[0]=(1-(m+g))*E,r[1]=(p+S)*E,r[2]=(f-x)*E,r[3]=0,r[4]=(p-S)*M,r[5]=(1-(d+g))*M,r[6]=(_+v)*M,r[7]=0,r[8]=(f+x)*P,r[9]=(_-v)*P,r[10]=(1-(d+m))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=gr.set(r[0],r[1],r[2]).length(),o=gr.set(r[4],r[5],r[6]).length(),l=gr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),bi.copy(this);let c=1/a,h=1/o,u=1/l;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,t.setFromRotationMatrix(bi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),f,m;if(l)f=s/(a-s),m=a*s/(a-s);else if(o===hn)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==Pr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),m=-a*s/(a-s)}return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r),f,m;if(l)f=1/(a-s),m=a/(a-s);else if(o===hn)f=-2/(a-s),m=-(a+s)/(a-s);else{if(o!==Pr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),m=-s/(a-s)}return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Vo.prototype.isMatrix4=!0;var Ue=Vo,gr=new b,bi=new Ue,Rm=new b(0,0,0),Pm=new b(1,1,1),Tn=new b,Ma=new b,ni=new b,ju=new Ue,qu=new Tt,un=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qu.setFromEuler(this),this.setFromQuaternion(qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Im=0,Yu=new b,vr=new Tt,nn=new Ue,Sa=new b,hs=new b,Lm=new b,Dm=new Tt,Zu=new b(1,0,0),Ju=new b(0,1,0),Ku=new b(0,0,1),$u={type:"added"},Um={type:"removed"},_r={type:"childadded",child:null},jl={type:"childremoved",child:null},yt=class n extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new b,t=new un,i=new Tt,r=new b(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ne}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(Zu,e)}rotateY(e){return this.rotateOnAxis(Ju,e)}rotateZ(e){return this.rotateOnAxis(Ku,e)}translateOnAxis(e,t){return Yu.copy(e).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zu,e)}translateY(e){return this.translateOnAxis(Ju,e)}translateZ(e){return this.translateOnAxis(Ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sa.copy(e):Sa.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(hs,Sa,this.up):nn.lookAt(Sa,hs,this.up),this.quaternion.setFromRotationMatrix(nn),r&&(nn.extractRotation(r.matrixWorld),vr.setFromRotationMatrix(nn),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($u),_r.child=e,this.dispatchEvent(_r),_r.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Um),jl.child=e,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($u),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,Lm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Dm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};yt.DEFAULT_UP=new b(0,1,0),yt.DEFAULT_MATRIX_AUTO_UPDATE=!0,yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var It=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nm={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let m of e.hand.values()){let _=t.getJointPose(m,i),g=this._getHandJoint(c,m);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new It;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},ba={h:0,s:0,l:0};function ql(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var ue=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Xe.workingColorSpace){if(e=Mc(e,1),t=ze(t,0,1),i=ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ql(a,s,e+1/3),this.g=ql(a,s,e),this.b=ql(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,t=si){function i(s){s!==void 0&&parseFloat(s)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){let i=up[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cn(e.r),this.g=cn(e.g),this.b=cn(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Xe.workingToColorSpace(zt.copy(this),e),65536*Math.round(ze(255*zt.r,0,255))+256*Math.round(ze(255*zt.g,0,255))+Math.round(ze(255*zt.b,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(zt.copy(this),t);let i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=si){Xe.workingToColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,r=zt.b;return e!==si?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(ba);let i=_s(wn.h,ba.h,t),r=_s(wn.s,ba.s,t),s=_s(wn.l,ba.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new ue;ue.NAMES=up;var As=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ue(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Cs=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ti=new b,rn=new b,Yl=new b,sn=new b,xr=new b,yr=new b,Qu=new b,Zl=new b,Jl=new b,Kl=new b,$l=new it,Ql=new it,ec=new it,ln=class n{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ti.subVectors(e,t),r.cross(Ti);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ti.subVectors(r,t),rn.subVectors(i,t),Yl.subVectors(e,t);let a=Ti.dot(Ti),o=Ti.dot(rn),l=Ti.dot(Yl),c=rn.dot(rn),h=rn.dot(Yl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,sn)!==null&&sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,sn.x),l.addScaledVector(a,sn.y),l.addScaledVector(o,sn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return $l.setScalar(0),Ql.setScalar(0),ec.setScalar(0),$l.fromBufferAttribute(e,t),Ql.fromBufferAttribute(e,i),ec.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($l,s.x),a.addScaledVector(Ql,s.y),a.addScaledVector(ec,s.z),a}static isFrontFacing(e,t,i,r){return Ti.subVectors(i,t),rn.subVectors(e,t),Ti.cross(rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),.5*Ti.cross(rn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;xr.subVectors(r,i),yr.subVectors(s,i),Zl.subVectors(e,i);let l=xr.dot(Zl),c=yr.dot(Zl);if(l<=0&&c<=0)return t.copy(i);Jl.subVectors(e,r);let h=xr.dot(Jl),u=yr.dot(Jl);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(xr,a);Kl.subVectors(e,s);let p=xr.dot(Kl),f=yr.dot(Kl);if(f>=0&&p<=f)return t.copy(s);let m=p*c-l*f;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(yr,o);let _=h*f-p*u;if(_<=0&&u-h>=0&&p-f>=0)return Qu.subVectors(s,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(Qu,o);let g=1/(_+m+d);return a=m*g,o=d*g,t.copy(i).addScaledVector(xr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gi=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wi):wi.fromBufferAttribute(s,a),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ta.copy(i.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),wa.subVectors(this.max,us),Mr.subVectors(e.a,us),Sr.subVectors(e.b,us),br.subVectors(e.c,us),En.subVectors(Sr,Mr),An.subVectors(br,Sr),Wn.subVectors(Mr,br);let t=[0,-En.z,En.y,0,-An.z,An.y,0,-Wn.z,Wn.y,En.z,0,-En.x,An.z,0,-An.x,Wn.z,0,-Wn.x,-En.y,En.x,0,-An.y,An.x,0,-Wn.y,Wn.x,0];return!!tc(t,Mr,Sr,br,wa)&&(t=[1,0,0,0,1,0,0,0,1],!!tc(t,Mr,Sr,br,wa)&&(Ea.crossVectors(En,An),t=[Ea.x,Ea.y,Ea.z],tc(t,Mr,Sr,br,wa)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(wi).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},an=[new b,new b,new b,new b,new b,new b,new b,new b],wi=new b,Ta=new gi,Mr=new b,Sr=new b,br=new b,En=new b,An=new b,Wn=new b,us=new b,wa=new b,Ea=new b,Xn=new b;function tc(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Xn.fromArray(n,s);let o=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),h=i.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var x0=Fm();function Fm(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var xt=new b,Aa=new te,Om=0,Ft=class extends Hi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yc,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ar(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Rs=class extends Ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ps=class extends Ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var fe=class extends Ft{constructor(e,t,i){super(new Float32Array(e),t,i)}},Bm=new gi,ds=new b,ic=new b,vi=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Bm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);let t=ds.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(ic)),this.expandByPoint(ds.copy(e.center).sub(ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zm=0,mi=new Ue,nc=new yt,Tr=new b,ri=new gi,ps=new gi,Pt=new b,ke=class n extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?Ps:Rs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,i){return mi.makeTranslation(e,t,i),this.applyMatrix4(mi),this}scale(e,t,i){return mi.makeScale(e,t,i),this.applyMatrix4(mi),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new b,1/0);if(e){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(ri.min,ps.min),ri.expandByPoint(Pt),Pt.addVectors(ri.max,ps.max),ri.expandByPoint(Pt)):(ri.expandByPoint(ps.min),ri.expandByPoint(ps.max))}ri.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pt.fromBufferAttribute(o,c),l&&(Tr.fromBufferAttribute(e,c),Pt.add(Tr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");a!==void 0&&a.count===i.count||(a=new Ft(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new b,l[F]=new b;let c=new b,h=new b,u=new b,d=new te,p=new te,f=new te,m=new b,_=new b;function g(F,L,U){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,L),u.fromBufferAttribute(i,U),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,L),f.fromBufferAttribute(s,U),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let k=1/(p.x*f.y-f.x*p.y);isFinite(k)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(k),_.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(k),o[F].add(m),o[L].add(m),o[U].add(m),l[F].add(_),l[L].add(_),l[U].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,L=v.length;F<L;++F){let U=v[F],k=U.start;for(let O=k,Z=k+U.count;O<Z;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let x=new b,S=new b,E=new b,M=new b;function P(F){E.fromBufferAttribute(r,F),M.copy(E);let L=o[F];x.copy(L),x.sub(E.multiplyScalar(E.dot(L))).normalize(),S.crossVectors(M,L);let U=S.dot(l[F])<0?-1:1;a.setXYZW(F,x.x,x.y,x.z,U)}for(let F=0,L=v.length;F<L;++F){let U=v[F],k=U.start;for(let O=k,Z=k+U.count;O<Z;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ft(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new b,s=new b,a=new b,o=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),m=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,_),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let m=0,_=l.length;m<_;m++){p=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new Ft(d,h,u)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var y0=new b;var Gm=0,Wi=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:Ee(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new te().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var M0=new b,S0=new b,b0=new b,T0=new te,w0=new te,E0=new Ue,A0=new b,C0=new b,R0=new b,P0=new te,I0=new te,L0=new te;var D0=new b,U0=new b;var on=new b,rc=new b,Ca=new b,Cn=new b,sc=new b,Ra=new b,ac=new b,Jn=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){rc.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(rc);let s=.5*e.distanceTo(t),a=-this.direction.dot(Ca),o=Cn.dot(this.direction),l=-Cn.dot(Ca),c=Cn.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let m=1/h;u*=m,d*=m,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(rc).addScaledVector(Ca,d),p}intersectSphere(e,t){on.subVectors(e.center,this.origin);let i=on.dot(this.direction),r=on.dot(on)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,i,r,s){sc.subVectors(t,e),Ra.subVectors(i,e),ac.crossVectors(sc,Ra);let a,o=this.direction.dot(ac);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Cn.subVectors(this.origin,e);let l=a*this.direction.dot(Ra.crossVectors(Cn,Ra));if(l<0)return null;let c=a*this.direction.dot(sc.cross(Cn));if(c<0||l+c>o)return null;let h=-a*Cn.dot(ac);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xi=class extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ed=new Ue,jn=new Jn,Pa=new vi,td=new b,Ia=new b,La=new b,Da=new b,oc=new b,Ua=new b,id=new b,Na=new b,He=class extends yt{constructor(e=new ke,t=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(oc.fromBufferAttribute(u,e),a?Ua.addScaledVector(oc,h):Ua.addScaledVector(oc.sub(t),h))}t.add(Ua)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),jn.copy(e.ray).recast(e.near),Pa.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Pa,td)===null||jn.origin.distanceToSquared(td)>(e.far-e.near)**2))return;ed.copy(s).invert(),jn.copy(e.ray).applyMatrix4(ed),i.boundingBox!==null&&jn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,jn)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){let _=d[f],g=a[_.materialIndex];for(let v=Math.max(_.start,p.start),x=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));v<x;v+=3)r=Fa(this,g,e,i,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);f<m;f+=3)r=Fa(this,a,e,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){let _=d[f],g=a[_.materialIndex];for(let v=Math.max(_.start,p.start),x=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));v<x;v+=3)r=Fa(this,g,e,i,c,h,u,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);f<m;f+=3)r=Fa(this,a,e,i,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function Fa(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ia),n.getVertexPosition(l,La),n.getVertexPosition(c,Da);let h=(function(u,d,p,f,m,_,g,v){let x;if(x=d.side===1?f.intersectTriangle(g,_,m,!0,v):f.intersectTriangle(m,_,g,d.side===0,v),x===null)return null;Na.copy(v),Na.applyMatrix4(u.matrixWorld);let S=p.ray.origin.distanceTo(Na);return S<p.near||S>p.far?null:{distance:S,point:Na.clone(),object:u}})(n,e,t,i,Ia,La,Da,id);if(h){let u=new b;ln.getBarycoord(id,Ia,La,Da,u),r&&(h.uv=ln.getInterpolatedAttribute(r,o,l,c,u,new te)),s&&(h.uv1=ln.getInterpolatedAttribute(s,o,l,c,u,new te)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,l,c,u,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new b,materialIndex:0};ln.getNormal(Ia,La,Da,d.normal),h.face=d,h.barycoord=u}return h}var N0=new it,F0=new it,O0=new it,B0=new it,z0=new Ue,G0=new b,V0=new vi,k0=new Ue,H0=new Jn;var Is=class extends Qt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},W0=new Ue,X0=new Ue;var Ls=class extends Ft{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new Ue,nd=new Ue,Oa=[],rd=new gi,Vm=new Ue,ms=new He,fs=new vi,Ds=class extends He{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ls(new Float32Array(16*i),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Vm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wr),rd.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(rd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wr),fs.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(i),e.ray.intersectsSphere(fs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,wr),nd.multiplyMatrices(i,wr),ms.matrixWorld=nd,ms.raycast(e,Oa);for(let a=0,o=Oa.length;a<o;a++){let l=Oa[a];l.instanceId=s,l.object=this,t.push(l)}Oa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ls(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,16*e),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Is(new Float32Array(r*this.count),r,this.count,Zo,_i));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},lc=new b,km=new b,Hm=new Ne,Vi=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=lc.subVectors(i,t).cross(km.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(lc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Hm.getNormalMatrix(e),r=this.coplanarPoint(lc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qn=new vi,Wm=new te(.5,.5),Ba=new b,dn=class{constructor(e=new Vi,t=new Vi,i=new Vi,r=new Vi,s=new Vi,a=new Vi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],f=s[8],m=s[9],_=s[10],g=s[11],v=s[12],x=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-a,p-h,g-f,E-v).normalize(),r[1].setComponents(c+a,p+h,g+f,E+v).normalize(),r[2].setComponents(c+o,p+u,g+m,E+x).normalize(),r[3].setComponents(c-o,p-u,g-m,E-x).normalize(),i)r[4].setComponents(l,d,_,S).normalize(),r[5].setComponents(c-l,p-d,g-_,E-S).normalize();else if(r[4].setComponents(c-l,p-d,g-_,E-S).normalize(),t===hn)r[5].setComponents(c+l,p+d,g+_,E+S).normalize();else{if(t!==Pr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(l,d,_,S).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){qn.center.set(0,0,0);let t=Wm.distanceTo(e.center);return qn.radius=.7071067811865476+t,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ba.x=r.normal.x>0?e.max.x:e.min.x,Ba.y=r.normal.y>0?e.max.y:e.min.y,Ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},sd=new Ue,ro=class n{constructor(){this.coordinateSystem=hn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];sd.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new dn),i[r].setFromProjectionMatrix(sd,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new dn),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Sc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}},j0=new Ue,q0=new ue(1,1,1),Y0=new dn,Z0=new ro,J0=new gi,K0=new vi,$0=new b,Q0=new b,ev=new b,tv=new Sc,iv=new He;var Nr=class extends Wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},so=new b,ao=new b,ad=new Ue,gs=new Jn,za=new vi,cc=new b,od=new b,oo=class extends yt{constructor(e=new ke,t=new Nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)so.fromBufferAttribute(t,r-1),ao.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=so.distanceTo(ao);e.setAttribute("lineDistance",new fe(i,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),za.radius+=s,e.ray.intersectsSphere(za)===!1)return;ad.copy(r).invert(),gs.copy(e.ray).applyMatrix4(ad);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=d,m=p-1;f<m;f+=c){let _=h.getX(f),g=h.getX(f+1),v=Ga(this,e,gs,l,_,g,f);v&&t.push(v)}if(this.isLineLoop){let f=h.getX(p-1),m=h.getX(d),_=Ga(this,e,gs,l,f,m,p-1);_&&t.push(_)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,m=p-1;f<m;f+=c){let _=Ga(this,e,gs,l,f,f+1,f);_&&t.push(_)}if(this.isLineLoop){let f=Ga(this,e,gs,l,p-1,d,p-1);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ga(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(so.fromBufferAttribute(o,r),ao.fromBufferAttribute(o,s),t.distanceSqToSegment(so,ao,cc,od)>i)return;cc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(cc);return l<e.near||l>e.far?void 0:{distance:l,point:od.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var ld=new b,cd=new b,Us=class extends oo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ld.fromBufferAttribute(t,r),cd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ld.distanceTo(cd);e.setAttribute("lineDistance",new fe(i,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Fr=class extends Wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hd=new Ue,bc=new Jn,Va=new vi,ka=new b,Dn=class extends yt{constructor(e=new ke,t=new Fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;hd.copy(r).invert(),bc.copy(e.ray).applyMatrix4(hd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);ka.fromBufferAttribute(h,p),ud(ka,p,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)ka.fromBufferAttribute(h,u),ud(ka,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ud(n,e,t,i,r,s,a){let o=bc.distanceSqToPoint(n);if(o<t){let l=new b;bc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ns=class extends Qt{constructor(e=[],t=301,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var pn=class extends Qt{constructor(e,t,i=1014,r,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==zn&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},lo=class extends pn{constructor(e,t=1014,i=301,r,s,a=1003,o=1003,l,c=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fs=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ei=class n extends ke{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(m,_,g,v,x,S,E,M,P,F,L){let U=S/P,k=E/F,O=S/2,Z=E/2,H=M/2,V=P+1,q=F+1,W=0,ie=0,ge=new b;for(let Ae=0;Ae<q;Ae++){let ye=Ae*k-Z;for(let Me=0;Me<V;Me++){let ee=Me*U-O;ge[m]=ee*v,ge[_]=ye*x,ge[g]=H,c.push(ge.x,ge.y,ge.z),ge[m]=0,ge[_]=0,ge[g]=M>0?1:-1,h.push(ge.x,ge.y,ge.z),u.push(Me/P),u.push(1-Ae/F),W+=1}}for(let Ae=0;Ae<F;Ae++)for(let ye=0;ye<P;ye++){let Me=d+ye+V*Ae,ee=d+ye+V*(Ae+1),de=d+(ye+1)+V*(Ae+1),le=d+(ye+1)+V*Ae;l.push(Me,ee,le),l.push(ee,de,le),ie+=6}o.addGroup(p,ie,L),p+=ie,d+=W}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},co=class n extends ke{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*i+s,m=r+1,_=new b,g=new b;for(let v=0;v<=f;v++){let x=0,S=0,E=0,M=0;if(v<=i){let L=v/i,U=L*Math.PI/2;S=-h-e*Math.cos(U),E=e*Math.sin(U),M=-e*Math.cos(U),x=L*u}else if(v<=i+s){let L=(v-i)/s;S=L*t-h,E=e,M=0,x=u+L*d}else{let L=(v-i-s)/i,U=L*Math.PI/2;S=h+e*Math.sin(U),E=e*Math.cos(U),M=e*Math.sin(U),x=u+d+L*u}let P=Math.max(0,Math.min(1,x/p)),F=0;v===0?F=.5/r:v===f&&(F=-.5/r);for(let L=0;L<=r;L++){let U=L/r,k=U*Math.PI*2,O=Math.sin(k),Z=Math.cos(k);g.x=-E*Z,g.y=S,g.z=E*O,o.push(g.x,g.y,g.z),_.set(-E*Z,M,E*O),_.normalize(),l.push(_.x,_.y,_.z),c.push(U+F,P)}if(v>0){let L=(v-1)*m;for(let U=0;U<r;U++){let k=L+U,O=L+U+1,Z=v*m+U,H=v*m+U+1;a.push(k,O,Z),a.push(O,H,Z)}}}this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ho=class n extends ke{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new b,h=new te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(o,3)),this.setAttribute("uv",new fe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ji=class n extends ke{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,m=[],_=i/2,g=0;function v(x){let S=f,E=new te,M=new b,P=0,F=x===!0?e:t,L=x===!0?1:-1;for(let k=1;k<=r;k++)u.push(0,_*L,0),d.push(0,L,0),p.push(.5,.5),f++;let U=f;for(let k=0;k<=r;k++){let O=k/r*l+o,Z=Math.cos(O),H=Math.sin(O);M.x=F*H,M.y=_*L,M.z=F*Z,u.push(M.x,M.y,M.z),d.push(0,L,0),E.x=.5*Z+.5,E.y=.5*H*L+.5,p.push(E.x,E.y),f++}for(let k=0;k<r;k++){let O=S+k,Z=U+k;x===!0?h.push(Z,Z+1,O):h.push(Z+1,Z,O),P+=3}c.addGroup(g,P,x===!0?1:2),g+=P}(function(){let x=new b,S=new b,E=0,M=(t-e)/i;for(let P=0;P<=s;P++){let F=[],L=P/s,U=L*(t-e)+e;for(let k=0;k<=r;k++){let O=k/r,Z=O*l+o,H=Math.sin(Z),V=Math.cos(Z);S.x=U*H,S.y=-L*i+_,S.z=U*V,u.push(S.x,S.y,S.z),x.set(H,M,V).normalize(),d.push(x.x,x.y,x.z),p.push(O,1-L),F.push(f++)}m.push(F)}for(let P=0;P<r;P++)for(let F=0;F<s;F++){let L=m[F][P],U=m[F+1][P],k=m[F+1][P+1],O=m[F][P+1];(e>0||F!==0)&&(h.push(L,U,O),E+=3),(t>0||F!==s-1)&&(h.push(U,k,O),E+=3)}c.addGroup(g,E,0),g+=E})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Or=class n extends ji{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Un=class n extends ke{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(p,f,m,_){let g=_+1,v=[];for(let x=0;x<=g;x++){v[x]=[];let S=p.clone().lerp(m,x/g),E=f.clone().lerp(m,x/g),M=g-x;for(let P=0;P<=M;P++)v[x][P]=P===0&&x===g?S:S.clone().lerp(E,P/M)}for(let x=0;x<g;x++)for(let S=0;S<2*(g-x)-1;S++){let E=Math.floor(S/2);S%2==0?(l(v[x][E+1]),l(v[x+1][E]),l(v[x][E])):(l(v[x][E+1]),l(v[x+1][E+1]),l(v[x+1][E]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,f){let m=3*p;f.x=e[m+0],f.y=e[m+1],f.z=e[m+2]}function h(p,f,m,_){_<0&&p.x===1&&(a[f]=p.x-1),m.x===0&&m.z===0&&(a[f]=_/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new b,m=new b,_=new b;for(let g=0;g<t.length;g+=3)c(t[g+0],f),c(t[g+1],m),c(t[g+2],_),o(f,m,_,p)})(r),(function(p){let f=new b;for(let m=0;m<s.length;m+=3)f.x=s[m+0],f.y=s[m+1],f.z=s[m+2],f.normalize().multiplyScalar(p),s[m+0]=f.x,s[m+1]=f.y,s[m+2]=f.z})(i),(function(){let p=new b;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let m=u(p)/2/Math.PI+.5,_=d(p)/Math.PI+.5;a.push(m,1-_)}(function(){let f=new b,m=new b,_=new b,g=new b,v=new te,x=new te,S=new te;for(let E=0,M=0;E<s.length;E+=9,M+=6){f.set(s[E+0],s[E+1],s[E+2]),m.set(s[E+3],s[E+4],s[E+5]),_.set(s[E+6],s[E+7],s[E+8]),v.set(a[M+0],a[M+1]),x.set(a[M+2],a[M+3]),S.set(a[M+4],a[M+5]),g.copy(f).add(m).add(_).divideScalar(3);let P=u(g);h(v,M+0,f,P),h(x,M+2,m,P),h(S,M+4,_,P)}})(),(function(){for(let f=0;f<a.length;f+=6){let m=a[f+0],_=a[f+2],g=a[f+4],v=Math.max(m,_,g),x=Math.min(m,_,g);v>.9&&x<.1&&(m<.2&&(a[f+0]+=1),_<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(s.slice(),3)),this.setAttribute("uv",new fe(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},uo=class n extends Un{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ha=new b,Wa=new b,hc=new b,Xa=new ln,po=class extends ke{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Cr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:m,b:_,c:g}=Xa;if(m.fromBufferAttribute(o,c[0]),_.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Xa.getNormal(hc),u[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let x=(v+1)%3,S=u[v],E=u[x],M=Xa[h[v]],P=Xa[h[x]],F=`${S}_${E}`,L=`${E}_${S}`;L in d&&d[L]?(hc.dot(d[L].normal)<=s&&(p.push(M.x,M.y,M.z),p.push(P.x,P.y,P.z)),d[L]=null):F in d||(d[F]={index0:c[v],index1:c[x],normal:hc.clone()})}}for(let f in d)if(d[f]){let{index0:m,index1:_}=d[f];Ha.fromBufferAttribute(o,m),Wa.fromBufferAttribute(o,_),p.push(Ha.x,Ha.y,Ha.z),p.push(Wa.x,Wa.y,Wa.z)}this.setAttribute("position",new fe(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ee("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new te:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new b,r=[],s=[],a=[],o=new b,l=new Ue;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new b)}s[0]=new b,a[0]=new b;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(ze(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ze(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Br=class extends li{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new te){let i=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},mo=class extends Br{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Uh(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var dd=new b,pd=new b,uc=new Uh,dc=new Uh,pc=new Uh,Nn=class extends li{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new b){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(pd.subVectors(r[0],r[1]).add(r[0]),o=pd);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(dd.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=dd),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(l),p);m<1e-4&&(m=1),f<1e-4&&(f=m),_<1e-4&&(_=m),uc.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,m,_),dc.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,m,_),pc.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,m,_)}else this.curveType==="catmullrom"&&(uc.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),dc.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),pc.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(uc.calc(h),dc.calc(h),pc.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new b().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function md(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function xs(n,e,t,i){return(function(r,s){let a=1-r;return a*a*s})(n,e)+(function(r,s){return 2*(1-r)*r*s})(n,t)+(function(r,s){return r*r*s})(n,i)}function ys(n,e,t,i,r){return(function(s,a){let o=1-s;return o*o*o*a})(n,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(n,t)+(function(s,a){return 3*(1-s)*s*s*a})(n,i)+(function(s,a){return s*s*s*a})(n,r)}var Os=class extends li{constructor(e=new te,t=new te,i=new te,r=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new te){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ys(e,r.x,s.x,a.x,o.x),ys(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fo=class extends li{constructor(e=new b,t=new b,i=new b,r=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new b){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ys(e,r.x,s.x,a.x,o.x),ys(e,r.y,s.y,a.y,o.y),ys(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bs=class extends li{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends li{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zs=class extends li{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(xs(e,r.x,s.x,a.x),xs(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gs=class extends li{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(xs(e,r.x,s.x,a.x),xs(e,r.y,s.y,a.y),xs(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vs=class extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(md(o,l.x,c.x,h.x,u.x),md(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new te().fromArray(r))}return this}},vo=Object.freeze({__proto__:null,ArcCurve:mo,CatmullRomCurve3:Nn,CubicBezierCurve:Os,CubicBezierCurve3:fo,EllipseCurve:Br,LineCurve:Bs,LineCurve3:go,QuadraticBezierCurve:zs,QuadraticBezierCurve3:Gs,SplineCurve:Vs}),_o=class extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new vo[r.type]().fromJSON(r))}return this}},ks=class extends _o{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Bs(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new zs(this.currentPoint.clone(),new te(e,t),new te(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new Os(this.currentPoint.clone(),new te(e,t),new te(i,r),new te(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Vs(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new Br(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hs=class extends ks{constructor(e){super(e),this.uuid=rr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new ks().fromJSON(r))}return this}};function Xm(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=fd(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=(function(h,u,d,p){let f=[];for(let m=0,_=u.length;m<_;m++){let g=fd(h,u[m]*p,m<_-1?u[m+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),f.push(Qm(g))}f.sort(Jm);for(let m=0;m<f.length;m++)d=Km(f[m],d);return d})(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let d=t;d<r;d+=t){let p=n[d],f=n[d+1];p<o&&(o=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ws(s,a,t,o,l,c,0),a}function fd(n,e,t,i,r){let s;if(r===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=gd(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=gd(a/i|0,n[a],n[a+1],s);return s&&zr(s,s.next)&&(js(s),s=s.next),s}function Kn(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!zr(i,i.next)&&ut(i.prev,i,i.next)!==0)i=i.next;else{if(js(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Ws(n,e,t,i,r,s,a){if(!n)return;!a&&s&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=Tc(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,m=1;do{let _,g=p;p=null;let v=null;for(f=0;g;){f++;let x=g,S=0;for(let M=0;M<m&&(S++,x=x.nextZ,x);M++);let E=m;for(;S>0||E>0&&x;)S!==0&&(E===0||!x||g.z<=x.z)?(_=g,g=g.nextZ,S--):(_=x,x=x.nextZ,E--),v?v.nextZ=_:p=_,_.prevZ=v,v=_;g=x}v.nextZ=null,m*=2}while(f>1)})(d)})(n,i,r,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?qm(n,i,r,s):jm(n))e.push(l.i,n.i,c.i),js(n),n=c.next,o=c.next;else if((n=c)===o){a?a===1?Ws(n=Ym(Kn(n),e),e,t,i,r,s,2):a===2&&Zm(n,e,t,i,r,s):Ws(Kn(n),e,t,i,r,s,1);break}}}function jm(n){let e=n.prev,t=n,i=n.next;if(ut(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),u=Math.min(o,l,c),d=Math.max(r,s,a),p=Math.max(o,l,c),f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&vs(r,o,s,l,a,c,f.x,f.y)&&ut(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function qm(n,e,t,i){let r=n.prev,s=n,a=n.next;if(ut(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,l,c),f=Math.min(h,u,d),m=Math.max(o,l,c),_=Math.max(h,u,d),g=Tc(p,f,e,t,i),v=Tc(m,_,e,t,i),x=n.prevZ,S=n.nextZ;for(;x&&x.z>=g&&S&&S.z<=v;){if(x.x>=p&&x.x<=m&&x.y>=f&&x.y<=_&&x!==r&&x!==a&&vs(o,h,l,u,c,d,x.x,x.y)&&ut(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=m&&S.y>=f&&S.y<=_&&S!==r&&S!==a&&vs(o,h,l,u,c,d,S.x,S.y)&&ut(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=g;){if(x.x>=p&&x.x<=m&&x.y>=f&&x.y<=_&&x!==r&&x!==a&&vs(o,h,l,u,c,d,x.x,x.y)&&ut(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=v;){if(S.x>=p&&S.x<=m&&S.y>=f&&S.y<=_&&S!==r&&S!==a&&vs(o,h,l,u,c,d,S.x,S.y)&&ut(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Ym(n,e){let t=n;do{let i=t.prev,r=t.next.next;!zr(i,r)&&pp(i,t,t.next,r)&&Xs(i,r)&&Xs(r,i)&&(e.push(i.i,t.i,r.i),js(t),js(t.next),t=n=r),t=t.next}while(t!==n);return Kn(t)}function Zm(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ef(a,o)){let l=mp(a,o);return a=Kn(a,a.next),l=Kn(l,l.next),Ws(a,e,t,i,r,s,0),void Ws(l,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function Jm(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Km(n,e){let t=(function(r,s){let a=s,o=r.x,l=r.y,c,h=-1/0;if(zr(r,a))return a;do{if(zr(r,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let m=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>h&&(h=m,c=a.x<a.next.x?a:a.next,m===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,d=c.x,p=c.y,f=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&dp(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let m=Math.abs(l-a.y)/(o-a.x);Xs(a,r)&&(m<f||m===f&&(a.x>c.x||a.x===c.x&&$m(c,a)))&&(c=a,f=m)}a=a.next}while(a!==u);return c})(n,e);if(!t)return e;let i=mp(t,n);return Kn(i,i.next),Kn(t,t.next)}function $m(n,e){return ut(n.prev,n,e.prev)<0&&ut(e.next,n,n.next)<0}function Tc(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Qm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function dp(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function vs(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&dp(n,e,t,i,r,s,a,o)}function ef(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&pp(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1})(n,e)&&(Xs(n,e)&&Xs(e,n)&&(function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(n,e)&&(ut(n.prev,n,e.prev)||ut(n,e.prev,e))||zr(n,e)&&ut(n.prev,n,n.next)>0&&ut(e.prev,e,e.next)>0)}function ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function zr(n,e){return n.x===e.x&&n.y===e.y}function pp(n,e,t,i){let r=qa(ut(n,e,t)),s=qa(ut(n,e,i)),a=qa(ut(t,i,n)),o=qa(ut(t,i,e));return r!==s&&a!==o||!(r!==0||!ja(n,t,e))||!(s!==0||!ja(n,i,e))||!(a!==0||!ja(t,n,i))||!(o!==0||!ja(t,e,i))}function ja(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qa(n){return n>0?1:n<0?-1:0}function Xs(n,e){return ut(n.prev,n,n.next)<0?ut(n,e,n.next)>=0&&ut(n,n.prev,e)>=0:ut(n,e,n.prev)<0||ut(n,n.next,e)<0}function mp(n,e){let t=wc(n.i,n.x,n.y),i=wc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function gd(n,e,t,i){let r=wc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function js(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function wc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Ec=class{static triangulate(e,t,i=2){return Xm(e,t,i)}},ki=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];vd(e),_d(i,e);let a=e.length;t.forEach(vd);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,_d(i,t[l]);let o=Ec.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function vd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function _d(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var xo=class n extends ke{constructor(e=new Hs([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:tf,x,S,E,M,P,F=!1;if(g){x=g.getSpacedPoints(h),F=!0,d=!1;let C=!!g.isCatmullRomCurve3&&g.closed;S=g.computeFrenetFrames(h,C),E=new b,M=new b,P=new b}d||(_=0,p=0,f=0,m=0);let L=o.extractPoints(c),U=L.shape,k=L.holes;if(!ki.isClockWise(U)){U=U.reverse();for(let C=0,N=k.length;C<N;C++){let y=k[C];ki.isClockWise(y)&&(k[C]=y.reverse())}}function O(C){let N=10000000000000001e-36,y=C[0];for(let D=1;D<=C.length;D++){let I=D%C.length,A=C[I],G=A.x-y.x,X=A.y-y.y,Y=G*G+X*X,re=Math.max(Math.abs(A.x),Math.abs(A.y),Math.abs(y.x),Math.abs(y.y));Y<=N*re*re?(C.splice(I,1),D--):y=A}}O(U),k.forEach(O);let Z=k.length,H=U;for(let C=0;C<Z;C++){let N=k[C];U=U.concat(N)}function V(C,N,y){return N||Ce("ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(N,y)}let q=U.length;function W(C,N,y){let D,I,A,G=C.x-N.x,X=C.y-N.y,Y=y.x-C.x,re=y.y-C.y,Se=G*G+X*X,be=G*re-X*Y;if(Math.abs(be)>Number.EPSILON){let pe=Math.sqrt(Se),Pe=Math.sqrt(Y*Y+re*re),Q=N.x-X/pe,ae=N.y+G/pe,ne=((y.x-re/Pe-Q)*re-(y.y+Y/Pe-ae)*Y)/(G*re-X*Y);D=Q+G*ne-C.x,I=ae+X*ne-C.y;let ve=D*D+I*I;if(ve<=2)return new te(D,I);A=Math.sqrt(ve/2)}else{let pe=!1;G>Number.EPSILON?Y>Number.EPSILON&&(pe=!0):G<-Number.EPSILON?Y<-Number.EPSILON&&(pe=!0):Math.sign(X)===Math.sign(re)&&(pe=!0),pe?(D=-X,I=G,A=Math.sqrt(Se)):(D=G,I=X,A=Math.sqrt(Se/2))}return new te(D/A,I/A)}let ie=[];for(let C=0,N=H.length,y=N-1,D=C+1;C<N;C++,y++,D++)y===N&&(y=0),D===N&&(D=0),ie[C]=W(H[C],H[y],H[D]);let ge=[],Ae,ye,Me=ie.concat();for(let C=0,N=Z;C<N;C++){let y=k[C];Ae=[];for(let D=0,I=y.length,A=I-1,G=D+1;D<I;D++,A++,G++)A===I&&(A=0),G===I&&(G=0),Ae[D]=W(y[D],y[A],y[G]);ge.push(Ae),Me=Me.concat(Ae)}if(_===0)ye=ki.triangulateShape(H,k);else{let C=[],N=[];for(let y=0;y<_;y++){let D=y/_,I=p*Math.cos(D*Math.PI/2),A=f*Math.sin(D*Math.PI/2)+m;for(let G=0,X=H.length;G<X;G++){let Y=V(H[G],ie[G],A);_e(Y.x,Y.y,-I),D===0&&C.push(Y)}for(let G=0,X=Z;G<X;G++){let Y=k[G];Ae=ge[G];let re=[];for(let Se=0,be=Y.length;Se<be;Se++){let pe=V(Y[Se],Ae[Se],A);_e(pe.x,pe.y,-I),D===0&&re.push(pe)}D===0&&N.push(re)}}ye=ki.triangulateShape(C,N)}let ee=ye.length,de=f+m;for(let C=0;C<q;C++){let N=d?V(U[C],Me[C],de):U[C];F?(M.copy(S.normals[0]).multiplyScalar(N.x),E.copy(S.binormals[0]).multiplyScalar(N.y),P.copy(x[0]).add(M).add(E),_e(P.x,P.y,P.z)):_e(N.x,N.y,0)}for(let C=1;C<=h;C++)for(let N=0;N<q;N++){let y=d?V(U[N],Me[N],de):U[N];F?(M.copy(S.normals[C]).multiplyScalar(y.x),E.copy(S.binormals[C]).multiplyScalar(y.y),P.copy(x[C]).add(M).add(E),_e(P.x,P.y,P.z)):_e(y.x,y.y,u/h*C)}for(let C=_-1;C>=0;C--){let N=C/_,y=p*Math.cos(N*Math.PI/2),D=f*Math.sin(N*Math.PI/2)+m;for(let I=0,A=H.length;I<A;I++){let G=V(H[I],ie[I],D);_e(G.x,G.y,u+y)}for(let I=0,A=k.length;I<A;I++){let G=k[I];Ae=ge[I];for(let X=0,Y=G.length;X<Y;X++){let re=V(G[X],Ae[X],D);F?_e(re.x,re.y+x[h-1].y,x[h-1].x+y):_e(re.x,re.y,u+y)}}}function le(C,N){let y=C.length;for(;--y>=0;){let D=y,I=y-1;I<0&&(I=C.length-1);for(let A=0,G=h+2*_;A<G;A++){let X=q*A,Y=q*(A+1);$(N+D+X,N+I+X,N+I+Y,N+D+Y)}}}function _e(C,N,y){l.push(C),l.push(N),l.push(y)}function Be(C,N,y){R(C),R(N),R(y);let D=r.length/3,I=v.generateTopUV(i,r,D-3,D-2,D-1);T(I[0]),T(I[1]),T(I[2])}function $(C,N,y,D){R(C),R(N),R(D),R(N),R(y),R(D);let I=r.length/3,A=v.generateSideWallUV(i,r,I-6,I-3,I-2,I-1);T(A[0]),T(A[1]),T(A[3]),T(A[1]),T(A[2]),T(A[3])}function R(C){r.push(l[3*C+0]),r.push(l[3*C+1]),r.push(l[3*C+2])}function T(C){s.push(C.x),s.push(C.y)}(function(){let C=r.length/3;if(d){let N=0,y=q*N;for(let D=0;D<ee;D++){let I=ye[D];Be(I[2]+y,I[1]+y,I[0]+y)}N=h+2*_,y=q*N;for(let D=0;D<ee;D++){let I=ye[D];Be(I[0]+y,I[1]+y,I[2]+y)}}else{for(let N=0;N<ee;N++){let y=ye[N];Be(y[2],y[1],y[0])}for(let N=0;N<ee;N++){let y=ye[N];Be(y[0]+q*h,y[1]+q*h,y[2]+q*h)}}i.addGroup(C,r.length/3-C,0)})(),(function(){let C=r.length/3,N=0;le(H,N),N+=H.length;for(let y=0,D=k.length;y<D;y++){let I=k[y];le(I,N),N+=I.length}i.addGroup(C,r.length/3-C,1)})()}this.setAttribute("position",new fe(r,3)),this.setAttribute("uv",new fe(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new vo[r.type]().fromJSON(r)),new n(i,e.options)}},tf={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new te(s,a),new te(o,l),new te(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],m=e[3*s],_=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new te(a,1-l),new te(c,1-u),new te(d,1-f),new te(m,1-g)]:[new te(o,1-l),new te(h,1-u),new te(p,1-f),new te(_,1-g)]}},Gr=class n extends Un{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},yo=class n extends ke{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=ze(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new b,d=new te,p=new b,f=new b,m=new b,_=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:_=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-_,p.z=0*g,m.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:_=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-_,p.z=0*g,f.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),l.push(p.x,p.y,p.z),m.copy(f)}for(let v=0;v<=t;v++){let x=i+v*h*r,S=Math.sin(x),E=Math.cos(x);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*S,u.y=e[M].y,u.z=e[M].x*E,a.push(u.x,u.y,u.z),d.x=v/t,d.y=M/(e.length-1),o.push(d.x,d.y);let P=l[3*M+0]*S,F=l[3*M+1],L=l[3*M+0]*E;c.push(P,F,L)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let S=x+v*e.length,E=S,M=S+e.length,P=S+e.length+1,F=S+1;s.push(E,M,F),s.push(P,F,M)}this.setIndex(s),this.setAttribute("position",new fe(a,3)),this.setAttribute("uv",new fe(o,2)),this.setAttribute("normal",new fe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Mo=class n extends Un{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ai=class n extends ke{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],m=[],_=[];for(let g=0;g<h;g++){let v=g*d-a;for(let x=0;x<c;x++){let S=x*u-s;f.push(S,-v,0),m.push(0,0,1),_.push(x/o),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let x=v+c*g,S=v+c*(g+1),E=v+1+c*(g+1),M=v+1+c*g;p.push(x,S,M),p.push(S,E,M)}this.setIndex(p),this.setAttribute("position",new fe(f,3)),this.setAttribute("normal",new fe(m,3)),this.setAttribute("uv",new fe(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Vr=class n extends ke{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new b,f=new te;for(let m=0;m<=r;m++){for(let _=0;_<=i;_++){let g=s+_/i*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let m=0;m<r;m++){let _=m*(i+1);for(let g=0;g<i;g++){let v=g+_,x=v,S=v+i+1,E=v+i+2,M=v+1;o.push(x,S,M),o.push(S,E,M)}}this.setIndex(o),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},So=class n extends ke{constructor(e=new Hs([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;ki.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,g=f.length;_<g;_++){let v=f[_];ki.isClockWise(v)===!0&&(f[_]=v.reverse())}let m=ki.triangulateShape(p,f);for(let _=0,g=f.length;_<g;_++){let v=f[_];p=p.concat(v)}for(let _=0,g=p.length;_<g;_++){let v=p[_];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let _=0,g=m.length;_<g;_++){let v=m[_],x=v[0]+u,S=v[1]+u,E=v[2]+u;i.push(x,S,E),l+=3}}this.setIndex(i),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(s,3)),this.setAttribute("uv",new fe(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},Vt=class n extends ke{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new b,d=new b,p=[],f=[],m=[],_=[];for(let g=0;g<=i;g++){let v=[],x=g/i,S=a+x*o,E=e*Math.cos(S),M=Math.sqrt(e*e-E*E),P=0;g===0&&a===0?P=.5/t:g===i&&l===Math.PI&&(P=-.5/t);for(let F=0;F<=t;F++){let L=F/t,U=r+L*s;u.x=-M*Math.cos(U),u.y=E,u.z=M*Math.sin(U),f.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),_.push(L+P,1-x),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let x=h[g][v+1],S=h[g][v],E=h[g+1][v],M=h[g+1][v+1];(g!==0||a>0)&&p.push(x,S,M),(g!==i-1||l<Math.PI)&&p.push(S,E,M)}this.setIndex(p),this.setAttribute("position",new fe(f,3)),this.setAttribute("normal",new fe(m,3)),this.setAttribute("uv",new fe(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},bo=class n extends Un{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ci=class n extends ke{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=new b,p=new b,f=new b;for(let m=0;m<=i;m++){let _=a+m/i*o;for(let g=0;g<=r;g++){let v=g/r*s;p.x=(e+t*Math.cos(_))*Math.cos(v),p.y=(e+t*Math.cos(_))*Math.sin(v),p.z=t*Math.sin(_),c.push(p.x,p.y,p.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),f.subVectors(p,d).normalize(),h.push(f.x,f.y,f.z),u.push(g/r),u.push(m/i)}}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){let g=(r+1)*m+_-1,v=(r+1)*(m-1)+_-1,x=(r+1)*(m-1)+_,S=(r+1)*m+_;l.push(g,v,S),l.push(v,x,S)}this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},To=class n extends ke{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new b,d=new b,p=new b,f=new b,m=new b,_=new b,g=new b;for(let x=0;x<=i;++x){let S=x/i*s*Math.PI*2;v(S,s,a,e,p),v(S+.01,s,a,e,f),_.subVectors(f,p),g.addVectors(f,p),m.crossVectors(_,g),g.crossVectors(m,_),m.normalize(),g.normalize();for(let E=0;E<=r;++E){let M=E/r*Math.PI*2,P=-t*Math.cos(M),F=t*Math.sin(M);u.x=p.x+(P*g.x+F*m.x),u.y=p.y+(P*g.y+F*m.y),u.z=p.z+(P*g.z+F*m.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/i),h.push(E/r)}}for(let x=1;x<=i;x++)for(let S=1;S<=r;S++){let E=(r+1)*(x-1)+(S-1),M=(r+1)*x+(S-1),P=(r+1)*x+S,F=(r+1)*(x-1)+S;o.push(E,M,F),o.push(M,P,F)}function v(x,S,E,M,P){let F=Math.cos(x),L=Math.sin(x),U=E/S*x,k=Math.cos(U);P.x=M*(2+k)*.5*F,P.y=M*(2+k)*L*.5,P.z=M*Math.sin(U)*.5}this.setIndex(o),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Fn=class n extends ke{constructor(e=new Gs(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,l=new b,c=new te,h=new b,u=[],d=[],p=[],f=[];function m(_){h=e.getPointAt(_/t,h);let g=a.normals[_],v=a.binormals[_];for(let x=0;x<=r;x++){let S=x/r*Math.PI*2,E=Math.sin(S),M=-Math.cos(S);l.x=M*g.x+E*v.x,l.y=M*g.y+E*v.y,l.z=M*g.z+E*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let _=0;_<t;_++)m(_);m(s===!1?t:0),(function(){for(let _=0;_<=t;_++)for(let g=0;g<=r;g++)c.x=_/t,c.y=g/r,p.push(c.x,c.y)})(),(function(){for(let _=1;_<=t;_++)for(let g=1;g<=r;g++){let v=(r+1)*(_-1)+(g-1),x=(r+1)*_+(g-1),S=(r+1)*_+g,E=(r+1)*(_-1)+g;f.push(v,x,E),f.push(x,S,E)}})()})(),this.setIndex(f),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new vo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},wo=class extends ke{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new b,s=new b;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let m=0;m<3;m++){let _=o.getX(p+m),g=o.getX(p+(m+1)%3);r.fromBufferAttribute(a,_),s.fromBufferAttribute(a,g),xd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),xd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new fe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function xd(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var nv=Object.freeze({__proto__:null,BoxGeometry:Ei,CapsuleGeometry:co,CircleGeometry:ho,ConeGeometry:Or,CylinderGeometry:ji,DodecahedronGeometry:uo,EdgesGeometry:po,ExtrudeGeometry:xo,IcosahedronGeometry:Gr,LatheGeometry:yo,OctahedronGeometry:Mo,PlaneGeometry:Ai,PolyhedronGeometry:Un,RingGeometry:Vr,ShapeGeometry:So,SphereGeometry:Vt,TetrahedronGeometry:bo,TorusGeometry:Ci,TorusKnotGeometry:To,TubeGeometry:Fn,WireframeGeometry:wo});function sr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(yd(r))r.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(yd(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Wt(n){let e={};for(let t=0;t<n.length;t++){let i=sr(n[t]);for(let r in i)e[r]=i[r]}return e}function yd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Nh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var sl={clone:sr,merge:Wt},wt=class extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new ue().setHex(r.value);break;case"v2":this.uniforms[i].value=new te().fromArray(r.value);break;case"v3":this.uniforms[i].value=new b().fromArray(r.value);break;case"v4":this.uniforms[i].value=new it().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ue().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Eo=class extends wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kt=class extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mn=class extends kt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var kr=class extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ao=class extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ya(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}var On=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Co=class extends On{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case _c:s=e,o=2*t-i;break;case xc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case _c:a=e,l=2*i-t;break;case xc:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-t)/(r-t),m=f*f,_=m*f,g=-d*_+2*d*m-d*f,v=(1+d)*_+(-1.5-2*d)*m+(-.5+d)*f+1,x=(-1-p)*_+(1.5+p)*m+.5*f,S=p*_-p*m;for(let E=0;E!==o;++E)s[E]=g*a[h+E]+v*a[c+E]+x*a[l+E]+S*a[u+E];return s}},Ro=class extends On{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Po=class extends On{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Io=class extends On{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let f=(i-t)/(r-t),m=1-f;for(let _=0;_!==o;++_)s[_]=a[c+_]*m+a[l+_]*f;return s}let d=2*o,p=e-1;for(let f=0;f!==o;++f){let m=a[c+f],_=a[l+f],g=p*d+2*f,v=u[g],x=u[g+1],S=e*d+2*f,E=h[S],M=h[S+1],P,F,L,U,k,O=(i-t)/(r-t);for(let Z=0;Z<8;Z++){P=O*O,F=P*O,L=1-O,U=L*L,k=U*L;let H=k*t+3*U*O*v+3*L*P*E+F*r-i;if(Math.abs(H)<1e-10)break;let V=3*U*(v-t)+6*L*O*(E-v)+3*P*(r-E);if(Math.abs(V)<1e-10)break;O-=H/V,O=Math.max(0,Math.min(1,O))}s[f]=k*m+3*U*O*x+3*L*P*M+F*_}return s}},ai=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ya(t,this.TimeBufferType),this.values=Ya(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ya(e.times,Array),values:Ya(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Io(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case eo:t=this.InterpolantFactoryMethodLinear;break;case Ka:t=this.InterpolantFactoryMethodSmooth;break;case gc:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Ee("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return eo;case this.InterpolantFactoryMethodSmooth:return Ka;case this.InterpolantFactoryMethodBezier:return gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ce("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ce("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&wm(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){Ce("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ka,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ai.prototype.ValueTypeName="",ai.prototype.TimeBufferType=Float32Array,ai.prototype.ValueBufferType=Float32Array,ai.prototype.DefaultInterpolation=eo;var Pn=class extends ai{constructor(e,t,i){super(e,t,i)}};Pn.prototype.ValueTypeName="bool",Pn.prototype.ValueBufferType=Array,Pn.prototype.DefaultInterpolation=Ms,Pn.prototype.InterpolantFactoryMethodLinear=void 0,Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var Lo=class extends ai{constructor(e,t,i,r){super(e,t,i,r)}};Lo.prototype.ValueTypeName="color";var Do=class extends ai{constructor(e,t,i,r){super(e,t,i,r)}};Do.prototype.ValueTypeName="number";var Uo=class extends On{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Tt.slerpFlat(s,0,a,c-o,a,c,l);return s}},qs=class extends ai{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}};qs.prototype.ValueTypeName="quaternion",qs.prototype.InterpolantFactoryMethodSmooth=void 0;var In=class extends ai{constructor(e,t,i){super(e,t,i)}};In.prototype.ValueTypeName="string",In.prototype.ValueBufferType=Array,In.prototype.DefaultInterpolation=Ms,In.prototype.InterpolantFactoryMethodLinear=void 0,In.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends ai{constructor(e,t,i,r){super(e,t,i,r)}};No.prototype.ValueTypeName="vector";var Fo=class{constructor(e,t,i){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fp=new Fo,Oo=class{constructor(e){this.manager=e!==void 0?e:fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ys=class extends Hr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},mc=new Ue,Md=new b,Sd=new b,Bo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dn,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Md.setFromMatrixPosition(e.matrixWorld),t.position.copy(Md),Sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sd),t.updateMatrixWorld(),mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Pr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Za=new b,Ja=new Tt,Gi=new b,Wr=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Za,Ja,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ja,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Za,Ja,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ja,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Rn=new b,bd=new te,Td=new te,Nt=class extends Wr{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Lr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Cr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Lr*Math.atan(Math.tan(.5*Cr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,bd,Td),t.subVectors(Td,bd)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Cr*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ac=class extends Bo{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0}},Zs=class extends Hr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ac}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Xr=class extends Wr{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cc=class extends Bo{constructor(){super(new Xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jr=class extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Cc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var rv=new Ue,sv=new Ue,av=new Ue;var Er=-90,zo=class extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Nt(Er,1,e,t);r.layers=this.layers,this.add(r);let s=new Nt(Er,1,e,t);s.layers=this.layers,this.add(s);let a=new Nt(Er,1,e,t);a.layers=this.layers,this.add(a);let o=new Nt(Er,1,e,t);o.layers=this.layers,this.add(o);let l=new Nt(Er,1,e,t);l.layers=this.layers,this.add(l);let c=new Nt(Er,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===hn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Pr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;_=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Go=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ov=new b,lv=new Tt,cv=new b,hv=new b,uv=new b;var dv=new b,pv=new Tt,mv=new b,fv=new b;var Fh="\\[\\]\\.:\\/",nf=new RegExp("["+Fh+"]","g"),fc="[^"+Fh+"]",rf="[^"+Fh.replace("\\.","")+"]",sf=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",fc)+/(WCOD+)?/.source.replace("WCOD",rf)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc)+"$"),af=["material","materials","bones","map"],st=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nf,"")}static parseTrackName(e){let t=sf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);af.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Ee("PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0)return void Ce("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=class{constructor(n,e,t){let i=t||st.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray],st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gv=new Float32Array(1);var vv=new Ue;var kh=class kh{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};kh.prototype.isMatrix2=!0;var Rc=kh,_v=new te;var xv=new b,yv=new b,Mv=new b,Sv=new b,bv=new b,Tv=new b,wv=new b;var Ev=new b;var Av=new b,Cv=new Ue,Rv=new Ue;var Pv=new b,Iv=new ue,Lv=new ue;var Dv=new b,Uv=new b,Nv=new b;var Fv=new b,Ov=new Wr;var Bv=new gi;var zv=new b;function Oh(n,e,t,i){let r=(function(s){switch(s){case ci:case qc:return{byteLength:1,components:1};case Kr:case Yc:case Yi:return{byteLength:2,components:1};case qo:case Yo:return{byteLength:2,components:4};case fn:case jo:case _i:return{byteLength:4,components:1};case Zc:case Jc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)})(i);switch(t){case 1021:return n*e;case Zo:case Jo:return n*e/r.components*r.byteLength;case 1030:case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case Pi:case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}})),typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bp(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function lf(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(a,h),n.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=n.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(n.bindBuffer(o,s),c.length===0)n.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];n.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}var Ge={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ce={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new b},probesMax:{value:new b},probesResolution:{value:new b}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Ji={basic:{uniforms:Wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Wt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Wt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ue(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Wt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Wt([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Wt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Wt([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Wt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Wt([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Wt([ce.common,ce.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Wt([ce.lights,ce.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Ji.physical={uniforms:Wt([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var al={r:0,b:0,g:0},cf=new Ue,zp=new Ne;function hf(n,e,t,i,r,s){let a=new ue(0),o,l,c=r===!0?0:1,h=null,u=0,d=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){let g=m.backgroundBlurriness>0;_=e.get(_,g)}return _}function f(m,_){m.getRGB(al,Nh(n)),t.buffers.color.setClear(al.r,al.g,al.b,_,s)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),c=_,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,f(a,c)},render:function(m){let _=!1,g=p(m);g===null?f(a,c):g&&g.isColor&&(f(g,1),_=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(m,_){let g=p(_);g&&(g.isCubeTexture||g.mapping===$s)?(l===void 0&&(l=new He(new Ei(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:sr(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,x,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=g,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(cf.makeRotationFromEuler(_.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zp),l.material.toneMapped=Xe.getTransfer(g.colorSpace)!==Qe,h===g&&u===g.version&&d===n.toneMapping||(l.material.needsUpdate=!0,h=g,u=g.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(o===void 0&&(o=new He(new Ai(2,2),new wt({name:"BackgroundMaterial",uniforms:sr(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=g,o.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,o.material.toneMapped=Xe.getTransfer(g.colorSpace)!==Qe,g.matrixAutoUpdate===!0&&g.updateMatrix(),o.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&u===g.version&&d===n.toneMapping||(o.material.needsUpdate=!0,h=g,u=g.version,d=n.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function uf(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=c(null),s=r,a=!1;function o(g){return n.bindVertexArray(g)}function l(g){return n.deleteVertexArray(g)}function c(g){let v=[],x=[],S=[];for(let E=0;E<t;E++)v[E]=0,x[E]=0,S[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:x,attributeDivisors:S,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,x=g.length;v<x;v++)g[v]=0}function u(g){d(g,0)}function d(g,v){let x=s.newAttributes,S=s.enabledAttributes,E=s.attributeDivisors;x[g]=1,S[g]===0&&(n.enableVertexAttribArray(g),S[g]=1),E[g]!==v&&(n.vertexAttribDivisor(g,v),E[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let x=0,S=v.length;x<S;x++)v[x]!==g[x]&&(n.disableVertexAttribArray(x),v[x]=0)}function f(g,v,x,S,E,M,P){P===!0?n.vertexAttribIPointer(g,v,x,E,M):n.vertexAttribPointer(g,v,x,S,E,M)}function m(){_(),a=!0,s!==r&&(s=r,o(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,v,x,S,E){let M=!1,P=(function(F,L,U,k){let O=k.wireframe===!0,Z=i[L.id];Z===void 0&&(Z={},i[L.id]=Z);let H=F.isInstancedMesh===!0?F.id:0,V=Z[H];V===void 0&&(V={},Z[H]=V);let q=V[U.id];q===void 0&&(q={},V[U.id]=q);let W=q[O];return W===void 0&&(W=c(n.createVertexArray()),q[O]=W),W})(g,S,x,v);s!==P&&(s=P,o(s.object)),M=(function(F,L,U,k){let O=s.attributes,Z=L.attributes,H=0,V=U.getAttributes();for(let q in V)if(V[q].location>=0){let W=O[q],ie=Z[q];if(ie===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor)),W===void 0||W.attribute!==ie||ie&&W.data!==ie.data)return!0;H++}return s.attributesNum!==H||s.index!==k})(g,S,x,E),M&&(function(F,L,U,k){let O={},Z=L.attributes,H=0,V=U.getAttributes();for(let q in V)if(V[q].location>=0){let W=Z[q];W===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(W=F.instanceColor));let ie={};ie.attribute=W,W&&W.data&&(ie.data=W.data),O[q]=ie,H++}s.attributes=O,s.attributesNum=H,s.index=k})(g,S,x,E),E!==null&&e.update(E,n.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,(function(F,L,U,k){h();let O=k.attributes,Z=U.getAttributes(),H=L.defaultAttributeValues;for(let V in Z){let q=Z[V];if(q.location>=0){let W=O[V];if(W===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(W=F.instanceColor)),W!==void 0){let ie=W.normalized,ge=W.itemSize,Ae=e.get(W);if(Ae===void 0)continue;let ye=Ae.buffer,Me=Ae.type,ee=Ae.bytesPerElement,de=Me===n.INT||Me===n.UNSIGNED_INT||W.gpuType===jo;if(W.isInterleavedBufferAttribute){let le=W.data,_e=le.stride,Be=W.offset;if(le.isInstancedInterleavedBuffer){for(let $=0;$<q.locationSize;$++)d(q.location+$,le.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let $=0;$<q.locationSize;$++)u(q.location+$);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let $=0;$<q.locationSize;$++)f(q.location+$,ge/q.locationSize,Me,ie,_e*ee,(Be+ge/q.locationSize*$)*ee,de)}else{if(W.isInstancedBufferAttribute){for(let le=0;le<q.locationSize;le++)d(q.location+le,W.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let le=0;le<q.locationSize;le++)u(q.location+le);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let le=0;le<q.locationSize;le++)f(q.location+le,ge/q.locationSize,Me,ie,ge*ee,ge/q.locationSize*le*ee,de)}}else if(H!==void 0){let ie=H[V];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(q.location,ie);break;case 3:n.vertexAttrib3fv(q.location,ie);break;case 4:n.vertexAttrib4fv(q.location,ie);break;default:n.vertexAttrib1fv(q.location,ie)}}}}p()})(g,v,x,S),E!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))},reset:m,resetDefaultState:_,dispose:function(){m();for(let g in i){let v=i[g];for(let x in v){let S=v[x];for(let E in S){let M=S[E];for(let P in M)l(M[P].object),delete M[P];delete S[E]}}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let v=i[g.id];for(let x in v){let S=v[x];for(let E in S){let M=S[E];for(let P in M)l(M[P].object),delete M[P];delete S[E]}}delete i[g.id]},releaseStatesOfObject:function(g){for(let v in i){let x=i[v],S=g.isInstancedMesh===!0?g.id:0,E=x[S];if(E!==void 0){for(let M in E){let P=E[M];for(let F in P)l(P[F].object),delete P[F];delete E[M]}delete x[S],Object.keys(x).length===0&&delete i[v]}}},releaseStatesOfProgram:function(g){for(let v in i){let x=i[v];for(let S in x){let E=x[S];if(E[g.id]===void 0)continue;let M=E[g.id];for(let P in M)l(M[P].object),delete M[P];delete E[g.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function df(n,e,t){let i;this.setMode=function(r){i=r},this.render=function(r,s){n.drawArrays(i,r,s),t.update(s,i,1)},this.renderInstances=function(r,s,a){a!==0&&(n.drawArraysInstanced(i,r,s,a),t.update(s,i,a))},this.renderMultiDraw=function(r,s,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,r,0,s,0,a);let o=0;for(let l=0;l<a;l++)o+=s[l];t.update(o,i,1)}}function pf(n,e,t,i){let r;function s(h){if(h==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(Ee("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");return t.reversedDepthBuffer===!0&&c===!1&&Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(h){return h===Pi||i.convert(h)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let u=h===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==ci&&i.convert(h)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==_i&&!u)},precision:a,logarithmicDepthBuffer:l,reversedDepthBuffer:c,maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function mf(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Vi,o=new Ne,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,m=null;if(f!==0){if(m=l.value,p!==!0||m===null){let _=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,x=d;v!==f;++v,x+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,_=n.get(h);if(!r||p===null||p.length===0||s&&!m)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=s?0:i,v=4*g,x=_.clippingState||null;l.value=x,x=c(p,u,v,d);for(let S=0;S!==v;++S)x[S]=t[S];_.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}zp.set(-1,0,0,0,1,0,0,0,1);var gp=[.125,.215,.35,.446,.526,.582],ea=20,ta=new Xr,vp=new ue,Hh=null,Wh=0,Xh=0,jh=!1,ff=new b,ll=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=ff}=s;Hh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Wh,Xh),this._renderer.xr.enabled=jh,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Yi,format:Pi,colorSpace:Ss,depthBuffer:!1},r=_p(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_p(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+gp.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let f=1/p;d>a-4?f=gp[d-a+4-1]:d===0&&(f=0),l.push(f);let m=1/(p-2),_=-m,g=1+m,v=[_,_,g,_,g,g,_,_,g,g,_,g],x=6,S=6,E=3,M=2,P=1,F=new Float32Array(E*S*x),L=new Float32Array(M*S*x),U=new Float32Array(P*S*x);for(let O=0;O<x;O++){let Z=O%3*2/3-1,H=O>2?0:-1,V=[Z,H,0,Z+2/3,H,0,Z+2/3,H+1,0,Z,H,0,Z+2/3,H+1,0,Z,H+1,0];F.set(V,E*S*O),L.set(v,M*S*O);let q=[O,O,O,O,O,O];U.set(q,P*S*O)}let k=new ke;k.setAttribute("position",new Ft(F,E)),k.setAttribute("uv",new Ft(L,M)),k.setAttribute("faceIndex",new Ft(U,P)),c.push(new He(k,null)),h>4&&h--}return{lodMeshes:c,sizeLods:o,sigmas:l}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(ea),h=new b(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:ea,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:cl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,l){return new wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new He(new ke,e);this._renderer.compile(t,ta)}_sceneToCubeUV(e,t,i,r,s){let a=new Nt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(vp),c.toneMapping=Ri,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new Ei,new Xi({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,f=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,f=!0):(p.color.copy(vp),f=!0);for(let _=0;_<6;_++){let g=_%3;g===0?(a.up.set(0,o[_],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[_],s.y,s.z)):g===1?(a.up.set(0,0,o[_]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[_],s.z)):(a.up.set(0,o[_],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[_]));let v=this._cubeSize;Qr(r,g*v,_>2?v:0,v,v),c.setRenderTarget(r),f&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Jr||e.mapping===Qn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;Qr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,ta)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h)*(0+1.25*c),{_lodMax:d}=this,p=this._sizeLods[i],f=3*p*(i>d-4?i-d+4:0),m=4*(this._cubeSize-p);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=d-t,Qr(s,f,m,3*p,2*p),r.setRenderTarget(s),r.render(o,ta),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=d-i,Qr(e,f,m,3*p,2*p),r.setRenderTarget(e),r.render(o,ta)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,m=isFinite(s)?1+Math.floor(3*f):ea;m>ea&&Ee(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let _=[],g=0;for(let S=0;S<ea;++S){let E=S/f,M=Math.exp(-E*E/2);_.push(M),S===0?g+=M:S<m&&(g+=2*M)}for(let S=0;S<_.length;S++)_[S]=_[S]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=_,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-i;let x=this._sizeLods[r];Qr(t,3*x*(r>v-4?r-v+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,ta)}};function _p(n,e,t){let i=new oi(n,e,t);return i.texture.mapping=$s,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xp(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function yp(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function cl(){return`

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
	`}var hl=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ns(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ei(5,5,5),s=new wt({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:qi});s.uniforms.tEquirect.value=t;let a=new He(r,s),o=t.minFilter;return t.minFilter===er&&(t.minFilter=Gt),new zo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}};function gf(n){let e=new WeakMap,t=new WeakMap,i=null;function r(o,l){return l===Ho?o.mapping=Jr:l===Wo&&(o.mapping=Qn),o}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(c){if(c&&c.isTexture){let h=c.mapping,u=h===Ho||h===Wo,d=h===Jr||h===Qn;if(u||d){let p=t.get(c),f=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new ll(n)),p=u?i.fromEquirectangular(c,p):i.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{let m=c.image;return u&&m&&m.height>0||d&&m&&(function(_){let g=0,v=6;for(let x=0;x<v;x++)_[x]!==void 0&&g++;return g===v})(m)?(i===null&&(i=new ll(n)),p=u?i.fromEquirectangular(c):i.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c})(o):(function(c){if(c&&c.isTexture){let h=c.mapping;if(h===Ho||h===Wo){if(e.has(c))return r(e.get(c).texture,c.mapping);{let u=c.image;if(u&&u.height>0){let d=new hl(u.height);return d.fromEquirectangularTexture(n,c),e.set(c,d),c.addEventListener("dispose",s),r(d.texture,c.mapping)}return null}}}return c})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function vf(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Zn("WebGLRenderer: "+i+" extension not supported."),r}}}function _f(n,e,t,i){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(u===void 0)return;if(h!==null){let m=h.array;d=h.version;for(let _=0,g=m.length;_<g;_+=3){let v=m[_+0],x=m[_+1],S=m[_+2];c.push(v,x,x,S,S,v)}}else{let m=u.array;d=u.version;for(let _=0,g=m.length/3-1;_<g;_+=3){let v=_+0,x=_+1,S=_+2;c.push(v,x,x,S,S,v)}}let p=new(u.count>=65535?Ps:Rs)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],n.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function xf(n,e,t){let i,r,s;this.setMode=function(a){i=a},this.setIndex=function(a){r=a.type,s=a.bytesPerElement},this.render=function(a,o){n.drawElements(i,o,r,a*s),t.update(o,i,1)},this.renderInstances=function(a,o,l){l!==0&&(n.drawElementsInstanced(i,o,r,a*s,l),t.update(o,i,l))},this.renderMultiDraw=function(a,o,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,o,0,r,a,0,l);let c=0;for(let h=0;h<l;h++)c+=o[h];t.update(c,i,1)}}function yf(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:Ce("WebGLInfo: Unknown draw mode:",i)}}}}function Mf(n,e,t){let i=new WeakMap,r=new it;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let F=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let x=a.attributes.position.count*v,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*S*4*h),M=new ws(E,x,S,h);M.type=_i,M.needsUpdate=!0;let P=4*v;for(let L=0;L<h;L++){let U=m[L],k=_[L],O=g[L],Z=x*S*4*L;for(let H=0;H<U.count;H++){let V=H*P;d===!0&&(r.fromBufferAttribute(U,H),E[Z+V+0]=r.x,E[Z+V+1]=r.y,E[Z+V+2]=r.z,E[Z+V+3]=0),p===!0&&(r.fromBufferAttribute(k,H),E[Z+V+4]=r.x,E[Z+V+5]=r.y,E[Z+V+6]=r.z,E[Z+V+7]=0),f===!0&&(r.fromBufferAttribute(O,H),E[Z+V+8]=r.x,E[Z+V+9]=r.y,E[Z+V+10]=r.z,E[Z+V+11]=O.itemSize===4?r.w:1)}}u={count:h,texture:M,size:new te(x,S)},i.set(a,u),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(n,"morphTargetBaseInfluence",p),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function Sf(n,e,t,i,r){let s=new WeakMap;function a(o){let l=o.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(o){let l=r.render.frame,c=o.geometry,h=e.get(o,c);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),s.set(o,l))),o.isSkinnedMesh){let u=o.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h},dispose:function(){s=new WeakMap}}}var bf={[Gc]:"LINEAR_TONE_MAPPING",[Vc]:"REINHARD_TONE_MAPPING",[kc]:"CINEON_TONE_MAPPING",[Ks]:"ACES_FILMIC_TONE_MAPPING",[Wc]:"AGX_TONE_MAPPING",[Xc]:"NEUTRAL_TONE_MAPPING",[Hc]:"CUSTOM_TONE_MAPPING"};function Tf(n,e,t,i,r,s){let a=new oi(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new pn(e,t):void 0}),o=new oi(e,t,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),l=new ke;l.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new fe([0,2,0,0,2,0],2));let c=new Eo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new He(l,c),u=new Xr(-1,1,1,-1,0,1),d,p=null,f=null,m=!1,_=null,g=[],v=!1;this.setSize=function(x,S){a.setSize(x,S),o.setSize(x,S);for(let E=0;E<g.length;E++){let M=g[E];M.setSize&&M.setSize(x,S)}},this.setEffects=function(x){g=x,v=g.length>0&&g[0].isRenderPass===!0;let S=a.width,E=a.height;for(let M=0;M<g.length;M++){let P=g[M];P.setSize&&P.setSize(S,E)}},this.begin=function(x,S){if(m||x.toneMapping===Ri&&g.length===0)return!1;if(_=S,S!==null){let E=S.width,M=S.height;a.width===E&&a.height===M||this.setSize(E,M)}return v===!1&&x.setRenderTarget(a),d=x.toneMapping,x.toneMapping=Ri,!0},this.hasRenderPass=function(){return v},this.end=function(x,S){x.toneMapping=d,m=!0;let E=a,M=o;for(let P=0;P<g.length;P++){let F=g[P];if(F.enabled!==!1&&(F.render(x,M,E,S),F.needsSwap!==!1)){let L=E;E=M,M=L}}if(p!==x.outputColorSpace||f!==x.toneMapping){p=x.outputColorSpace,f=x.toneMapping,c.defines={},Xe.getTransfer(p)===Qe&&(c.defines.SRGB_TRANSFER="");let P=bf[f];P&&(c.defines[P]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(_),x.render(h,u),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Gp=new Qt,Zh=new pn(1,1),Vp=new ws,kp=new no,Hp=new Ns,Mp=[],Sp=[],bp=new Float32Array(16),Tp=new Float32Array(9),wp=new Float32Array(4);function ts(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Mp[r];if(s===void 0&&(s=new Float32Array(r),Mp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function dl(n,e){let t=Sp[e];t===void 0&&(t=new Int32Array(e),Sp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wf(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ef(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function Af(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function Cf(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function Rf(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;wp.set(i),n.uniformMatrix2fv(this.addr,!1,wp),At(t,i)}}function Pf(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;Tp.set(i),n.uniformMatrix3fv(this.addr,!1,Tp),At(t,i)}}function If(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;bp.set(i),n.uniformMatrix4fv(this.addr,!1,bp),At(t,i)}}function Lf(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Df(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function Uf(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function Nf(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function Ff(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Of(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function Bf(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function zf(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function Gf(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),this.type===n.SAMPLER_2D_SHADOW?(Zh.compareFunction=t.isReversedDepthBuffer()?rl:nl,s=Zh):s=Gp,t.setTexture2D(e||s,r)}function Vf(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||kp,r)}function kf(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hp,r)}function Hf(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vp,r)}function Wf(n,e){n.uniform1fv(this.addr,e)}function Xf(n,e){let t=ts(e,this.size,2);n.uniform2fv(this.addr,t)}function jf(n,e){let t=ts(e,this.size,3);n.uniform3fv(this.addr,t)}function qf(n,e){let t=ts(e,this.size,4);n.uniform4fv(this.addr,t)}function Yf(n,e){let t=ts(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zf(n,e){let t=ts(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jf(n,e){let t=ts(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Kf(n,e){n.uniform1iv(this.addr,e)}function $f(n,e){n.uniform2iv(this.addr,e)}function Qf(n,e){n.uniform3iv(this.addr,e)}function eg(n,e){n.uniform4iv(this.addr,e)}function tg(n,e){n.uniform1uiv(this.addr,e)}function ig(n,e){n.uniform2uiv(this.addr,e)}function ng(n,e){n.uniform3uiv(this.addr,e)}function rg(n,e){n.uniform4uiv(this.addr,e)}function sg(n,e,t){let i=this.cache,r=e.length,s=dl(t,r),a;Et(i,s)||(n.uniform1iv(this.addr,s),At(i,s)),a=this.type===n.SAMPLER_2D_SHADOW?Zh:Gp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function ag(n,e,t){let i=this.cache,r=e.length,s=dl(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||kp,s[a])}function og(n,e,t){let i=this.cache,r=e.length,s=dl(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Hp,s[a])}function lg(n,e,t){let i=this.cache,r=e.length,s=dl(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Vp,s[a])}var Jh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return wf;case 35664:return Ef;case 35665:return Af;case 35666:return Cf;case 35674:return Rf;case 35675:return Pf;case 35676:return If;case 5124:case 35670:return Lf;case 35667:case 35671:return Df;case 35668:case 35672:return Uf;case 35669:case 35673:return Nf;case 5125:return Ff;case 36294:return Of;case 36295:return Bf;case 36296:return zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Gf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return kf;case 36289:case 36303:case 36311:case 36292:return Hf}})(t.type)}},Kh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Wf;case 35664:return Xf;case 35665:return jf;case 35666:return qf;case 35674:return Yf;case 35675:return Zf;case 35676:return Jf;case 5124:case 35670:return Kf;case 35667:case 35671:return $f;case 35668:case 35672:return Qf;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ig;case 36295:return ng;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}})(t.type)}},$h=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},qh=/(\w+)(\])?(\[|\.)?/g;function Ep(n,e){n.seq.push(e),n.map[e.id]=e}function cg(n,e,t){let i=n.name,r=i.length;for(qh.lastIndex=0;;){let s=qh.exec(i),a=qh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){Ep(t,c===void 0?new Jh(o,n,e):new Kh(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new $h(o),Ep(t,h)),t=h}}}var es=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);cg(o,e.getUniformLocation(t,o.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Ap(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var hg=0,Cp=new Ne;function Rp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return r}function ug(n,e){let t=(function(i){Xe._getMatrix(Cp,Xe.workingColorSpace,i);let r=`mat3( ${Cp.elements.map(s=>s.toFixed(4))} )`;switch(Xe.getTransfer(i)){case bs:return[r,"LinearTransferOETF"];case Qe:return[r,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var dg={[Gc]:"Linear",[Vc]:"Reinhard",[kc]:"Cineon",[Ks]:"ACESFilmic",[Wc]:"AgX",[Xc]:"Neutral",[Hc]:"Custom"};function pg(n,e){let t=dg[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ol=new b;function mg(){return Xe.getLuminanceCoefficients(ol),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${ol.x.toFixed(4)}, ${ol.y.toFixed(4)}, ${ol.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ia(n){return n!==""}function Pp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ip(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(n){return n.replace(fg,vg)}var gg=new Map;function vg(n,e){let t=Ge[e];if(t===void 0){let i=gg.get(e);if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");t=Ge[i],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Qh(t)}var _g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lp(n){return n.replace(_g,xg)}function xg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var yg={[$n]:"SHADOWMAP_TYPE_PCF",[qr]:"SHADOWMAP_TYPE_VSM"},Mg={[Jr]:"ENVMAP_TYPE_CUBE",[Qn]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE_UV"},Sg={[Qn]:"ENVMAP_MODE_REFRACTION"},bg={[Yd]:"ENVMAP_BLENDING_MULTIPLY",[Zd]:"ENVMAP_BLENDING_MIX",[Jd]:"ENVMAP_BLENDING_ADD"};function Tg(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(k){return yg[k.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),c=(function(k){return k.envMap===!1?"ENVMAP_TYPE_CUBE":Mg[k.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(k){return k.envMap===!1?"ENVMAP_MODE_REFLECTION":Sg[k.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(k){return k.envMap===!1?"ENVMAP_BLENDING_NONE":bg[k.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(k){let O=k.envMapCubeUVHeight;if(O===null)return null;let Z=Math.log2(O)-2,H=1/O;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:H,maxMip:Z}})(t),p=(function(k){return[k.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",k.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)})(t),f=(function(k){let O=[];for(let Z in k){let H=k[Z];H!==!1&&O.push("#define "+Z+" "+H)}return O.join(`
`)})(s),m=r.createProgram(),_,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ia).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ia).join(`
`),g.length>0&&(g+=`
`)):(_=[Dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),g=[Dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Ri?pg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,ug("linearToOutputTexel",t.outputColorSpace),mg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),a=Qh(a),a=Pp(a,t),a=Ip(a,t),o=Qh(o),o=Pp(o,t),o=Ip(o,t),a=Lp(a),o=Lp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=v+_+a,S=v+g+o,E=Ap(r,r.VERTEX_SHADER,x),M=Ap(r,r.FRAGMENT_SHADER,S);function P(k){if(n.debug.checkShaderErrors){let O=r.getProgramInfoLog(m)||"",Z=r.getShaderInfoLog(E)||"",H=r.getShaderInfoLog(M)||"",V=O.trim(),q=Z.trim(),W=H.trim(),ie=!0,ge=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,E,M);else{let Ae=Rp(r,E,"vertex"),ye=Rp(r,M,"fragment");Ce("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+V+`
`+Ae+`
`+ye)}else V!==""?Ee("WebGLProgram: Program Info Log:",V):q!==""&&W!==""||(ge=!1);ge&&(k.diagnostics={runnable:ie,programLog:V,vertexShader:{log:q,prefix:_},fragmentShader:{log:W,prefix:g}})}r.deleteShader(E),r.deleteShader(M),F=new es(r,m),L=(function(O,Z){let H={},V=O.getProgramParameter(Z,O.ACTIVE_ATTRIBUTES);for(let q=0;q<V;q++){let W=O.getActiveAttrib(Z,q),ie=W.name,ge=1;W.type===O.FLOAT_MAT2&&(ge=2),W.type===O.FLOAT_MAT3&&(ge=3),W.type===O.FLOAT_MAT4&&(ge=4),H[ie]={type:W.type,location:O.getAttribLocation(Z,ie),locationSize:ge}}return H})(r,m)}let F,L;r.attachShader(m,E),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return F===void 0&&P(this),F},this.getAttributes=function(){return L===void 0&&P(this),L};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(m,37297)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=M,this}var wg=0,eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new tu(e),t.set(e,i)),i}},tu=class{constructor(e){this.id=wg++,this.code=e,this.usedTimes=0}};function Eg(n,e,t,i,r,s){let a=new Es,o=new eu,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,g,v,x,S){let E=v.fog,M=x.geometry,P=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?v.environment:null,F=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,L=e.get(m.envMap||P,F),U=L&&L.mapping===$s?L.image.height:null,k=p[m.type];m.precision!==null&&(d=i.getMaxPrecision(m.precision),d!==m.precision&&Ee("WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));let O=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,Z=O!==void 0?O.length:0,H,V,q,W,ie=0;if(M.morphAttributes.position!==void 0&&(ie=1),M.morphAttributes.normal!==void 0&&(ie=2),M.morphAttributes.color!==void 0&&(ie=3),k){let xi=Ji[k];H=xi.vertexShader,V=xi.fragmentShader}else{H=m.vertexShader,V=m.fragmentShader;let xi=o.getVertexShaderStage(m),Vn=o.getFragmentShaderStage(m);o.update(m,xi,Vn),q=xi.id,W=Vn.id}let ge=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),ye=x.isInstancedMesh===!0,Me=x.isBatchedMesh===!0,ee=!!m.map,de=!!m.matcap,le=!!L,_e=!!m.aoMap,Be=!!m.lightMap,$=!!m.bumpMap&&m.wireframe===!1,R=!!m.normalMap,T=!!m.displacementMap,C=!!m.emissiveMap,N=!!m.metalnessMap,y=!!m.roughnessMap,D=m.anisotropy>0,I=m.clearcoat>0,A=m.dispersion>0,G=m.iridescence>0,X=m.sheen>0,Y=m.transmission>0,re=D&&!!m.anisotropyMap,Se=I&&!!m.clearcoatMap,be=I&&!!m.clearcoatNormalMap,pe=I&&!!m.clearcoatRoughnessMap,Pe=G&&!!m.iridescenceMap,Q=G&&!!m.iridescenceThicknessMap,ae=X&&!!m.sheenColorMap,ne=X&&!!m.sheenRoughnessMap,ve=!!m.specularMap,nt=!!m.specularColorMap,$e=!!m.specularIntensityMap,mt=Y&&!!m.transmissionMap,Yt=Y&&!!m.thicknessMap,we=!!m.gradientMap,tt=!!m.alphaMap,Ve=m.alphaTest>0,Dt=!!m.alphaHash,rt=!!m.extensions,St=Ri;m.toneMapped&&(ge!==null&&ge.isXRRenderTarget!==!0||(St=n.toneMapping));let dt={shaderID:k,shaderType:m.type,shaderName:m.name,vertexShader:H,fragmentShader:V,defines:m.defines,customVertexShaderID:q,customFragmentShaderID:W,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,batching:Me,batchingColor:Me&&x._colorsTexture!==null,instancing:ye,instancingColor:ye&&x.instanceColor!==null,instancingMorph:ye&&x.morphTexture!==null,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:ee,matcap:de,envMap:le,envMapMode:le&&L.mapping,envMapCubeUVHeight:U,aoMap:_e,lightMap:Be,bumpMap:$,normalMap:R,displacementMap:T,emissiveMap:C,normalMapObjectSpace:R&&m.normalMapType===ep,normalMapTangentSpace:R&&m.normalMapType===Ph,packedNormalMap:R&&m.normalMapType===Ph&&(di=m.normalMap.format,di===ir||di===tl||di===il),metalnessMap:N,roughnessMap:y,anisotropy:D,anisotropyMap:re,clearcoat:I,clearcoatMap:Se,clearcoatNormalMap:be,clearcoatRoughnessMap:pe,dispersion:A,iridescence:G,iridescenceMap:Pe,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:ae,sheenRoughnessMap:ne,specularMap:ve,specularColorMap:nt,specularIntensityMap:$e,transmission:Y,transmissionMap:mt,thicknessMap:Yt,gradientMap:we,opaque:m.transparent===!1&&m.blending===Js&&m.alphaToCoverage===!1,alphaMap:tt,alphaTest:Ve,alphaHash:Dt,combine:m.combine,mapUv:ee&&f(m.map.channel),aoMapUv:_e&&f(m.aoMap.channel),lightMapUv:Be&&f(m.lightMap.channel),bumpMapUv:$&&f(m.bumpMap.channel),normalMapUv:R&&f(m.normalMap.channel),displacementMapUv:T&&f(m.displacementMap.channel),emissiveMapUv:C&&f(m.emissiveMap.channel),metalnessMapUv:N&&f(m.metalnessMap.channel),roughnessMapUv:y&&f(m.roughnessMap.channel),anisotropyMapUv:re&&f(m.anisotropyMap.channel),clearcoatMapUv:Se&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:be&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&f(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:ne&&f(m.sheenRoughnessMap.channel),specularMapUv:ve&&f(m.specularMap.channel),specularColorMapUv:nt&&f(m.specularColorMap.channel),specularIntensityMapUv:$e&&f(m.specularIntensityMap.channel),transmissionMapUv:mt&&f(m.transmissionMap.channel),thicknessMapUv:Yt&&f(m.thicknessMap.channel),alphaMapUv:tt&&f(m.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(R||D),vertexNormals:!!M.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!M.attributes.uv&&(ee||tt),fog:!!E,useFog:m.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||M.attributes.normal===void 0&&R===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ae,skinning:x.isSkinnedMesh===!0,hasPositionAttribute:M.attributes.position!==void 0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ie,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:S.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&g.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,decodeVideoTexture:ee&&m.map.isVideoTexture===!0&&Xe.getTransfer(m.map.colorSpace)===Qe,decodeVideoTextureEmissive:C&&m.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(m.emissiveMap.colorSpace)===Qe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===at,flipSided:m.side===Ht,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:rt&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&m.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};var di;return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)_.push(g),_.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)})(_,m),(function(g,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),g.push(a.mask)})(_,m),_.push(n.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=p[m.type],g;if(_){let v=Ji[_];g=sl.clone(v.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,_){let g=h.get(_);return g!==void 0?++g.usedTimes:(g=new Tg(n,_,m,r),c.push(g),h.set(_,g)),g},releaseProgram:function(m){if(--m.usedTimes===0){let _=c.indexOf(m);c[_]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){o.remove(m)},programs:c,dispose:function(){o.dispose()}}}function Ag(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function Cg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Up(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Np(){let n=[],e=0,t=[],i=[],r=[];function s(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,c,h,u,d){let p=n[e];return p===void 0?(p={id:o.id,object:o,geometry:l,material:c,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:d},n[e]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=c,p.materialVariant=s(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=u,p.group=d),e++,p}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.push(p):c.transparent===!0?r.push(p):t.push(p)},unshift:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.unshift(p):c.transparent===!0?r.unshift(p):t.unshift(p)},finish:function(){for(let o=e,l=n.length;o<l;o++){let c=n[o];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(o,l,c){t.length>1&&t.sort(o||Cg),i.length>1&&i.sort(l||Up),r.length>1&&r.sort(l||Up),c&&(t.reverse(),i.reverse(),r.reverse())}}}function Rg(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new Np,n.set(e,[r])):t>=i.length?(r=new Np,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function Pg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new ue};break;case"SpotLight":t={position:new b,direction:new b,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new b,halfWidth:new b,halfHeight:new b}}return n[e.id]=t,t}}}var Ig=0;function Lg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Dg(n){let e=new Pg,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new b);let r=new b,s=new Ue,a=new Ue;return{setup:function(o){let l=0,c=0,h=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let u=0,d=0,p=0,f=0,m=0,_=0,g=0,v=0,x=0,S=0,E=0;o.sort(Lg);for(let P=0,F=o.length;P<F;P++){let L=o[P],U=L.color,k=L.intensity,O=L.distance,Z=null;if(L.shadow&&L.shadow.map&&(Z=L.shadow.map.texture.format===ir?L.shadow.map.texture:L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)l+=U.r*k,c+=U.g*k,h+=U.b*k;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],k);E++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let V=L.shadow,q=t.get(L);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,i.directionalShadow[u]=q,i.directionalShadowMap[u]=Z,i.directionalShadowMatrix[u]=L.shadow.matrix,_++}i.directional[u]=H,u++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(U).multiplyScalar(k),H.distance=O,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[p]=H;let V=L.shadow;if(L.map&&(i.spotLightMap[x]=L.map,x++,V.updateMatrices(L),L.castShadow&&S++),i.spotLightMatrix[p]=V.matrix,L.castShadow){let q=t.get(L);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,i.spotShadow[p]=q,i.spotShadowMap[p]=Z,v++}p++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(U).multiplyScalar(k),H.halfWidth.set(.5*L.width,0,0),H.halfHeight.set(0,.5*L.height,0),i.rectArea[f]=H,f++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let V=L.shadow,q=t.get(L);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,i.pointShadow[d]=q,i.pointShadowMap[d]=Z,i.pointShadowMatrix[d]=L.shadow.matrix,g++}i.point[d]=H,d++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(k),H.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[m]=H,m++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let M=i.hash;M.directionalLength===u&&M.pointLength===d&&M.spotLength===p&&M.rectAreaLength===f&&M.hemiLength===m&&M.numDirectionalShadows===_&&M.numPointShadows===g&&M.numSpotShadows===v&&M.numSpotMaps===x&&M.numLightProbes===E||(i.directional.length=u,i.spot.length=p,i.rectArea.length=f,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=v+x-S,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=E,M.directionalLength=u,M.pointLength=d,M.spotLength=p,M.rectAreaLength=f,M.hemiLength=m,M.numDirectionalShadows=_,M.numPointShadows=g,M.numSpotShadows=v,M.numSpotMaps=x,M.numLightProbes=E,i.version=Ig++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let m=0,_=o.length;m<_;m++){let g=o[m];if(g.isDirectionalLight){let v=i.directional[c];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),c++}else if(g.isSpotLight){let v=i.spot[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let v=i.rectArea[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let v=i.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let v=i.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(f),p++}}},state:i}}function Fp(n){let e=new Dg(n),t=[],i=[],r=[],s={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){s.camera=a,t.length=0,i.length=0,r.length=0},state:s,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){i.push(a)},pushLightProbeGrid:function(a){r.push(a)}}}function Ug(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),s;return r===void 0?(s=new Fp(n),e.set(t,[s])):i>=r.length?(s=new Fp(n),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}var Ng=[new b(1,0,0),new b(-1,0,0),new b(0,1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1)],Fg=[new b(0,-1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1),new b(0,-1,0),new b(0,-1,0)],Op=new Ue,na=new b,Yh=new b;function Og(n,e,t){let i=new dn,r=new te,s=new te,a=new it,o=new kr,l=new Ao,c={},h=t.maxTextureSize,u={[Bn]:Ht,[Ht]:Bn,[at]:at},d=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new ke;f.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new He(f,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$n;let g=this.type;function v(M,P){let F=e.update(m);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new oi(r.x,r.y,{format:ir,type:Yi})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(P,null,F,d,m,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(P,null,F,p,m,null)}function x(M,P,F,L){let U=null,k=F.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(k!==void 0)U=k;else if(U=F.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=U.uuid,Z=P.uuid,H=c[O];H===void 0&&(H={},c[O]=H);let V=H[Z];V===void 0&&(V=U.clone(),H[Z]=V,P.addEventListener("dispose",E)),U=V}return U.visible=P.visible,U.wireframe=P.wireframe,U.side=L===qr?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:u[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,F.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(n.properties.get(U).light=F),U}function S(M,P,F,L,U){if(M.visible===!1)return;if(M.layers.test(P.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&U===qr)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld);let O=e.update(M),Z=M.material;if(Array.isArray(Z)){let H=O.groups;for(let V=0,q=H.length;V<q;V++){let W=H[V],ie=Z[W.materialIndex];if(ie&&ie.visible){let ge=x(M,ie,L,U);M.onBeforeShadow(n,M,P,F,O,ge,W),n.renderBufferDirect(F,null,O,ge,M,W),M.onAfterShadow(n,M,P,F,O,ge,W)}}}else if(Z.visible){let H=x(M,Z,L,U);M.onBeforeShadow(n,M,P,F,O,H,null),n.renderBufferDirect(F,null,O,H,M,null),M.onAfterShadow(n,M,P,F,O,H,null)}}let k=M.children;for(let O=0,Z=k.length;O<Z;O++)S(k[O],P,F,L,U)}function E(M){M.target.removeEventListener("dispose",E);for(let P in c){let F=c[P],L=M.target.uuid;L in F&&(F[L].dispose(),delete F[L])}}this.render=function(M,P,F){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||M.length===0)return;this.type===Ad&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$n);let L=n.getRenderTarget(),U=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),O=n.state;O.setBlending(qi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Z=g!==this.type;Z&&P.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(V=>V.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,V=M.length;H<V;H++){let q=M[H],W=q.shadow;if(W===void 0){Ee("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let ie=W.getFrameExtents();r.multiply(ie),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ie.x),r.x=s.x*ie.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ie.y),r.y=s.y*ie.y,W.mapSize.y=s.y));let ge=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=ge,W.map===null||Z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===qr){if(q.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new oi(r.x,r.y,{format:ir,type:Yi,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new pn(r.x,r.y,_i),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=zn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=fi,W.map.depthTexture.magFilter=fi}else q.isPointLight?(W.map=new hl(r.x),W.map.depthTexture=new lo(r.x,fn)):(W.map=new oi(r.x,r.y),W.map.depthTexture=new pn(r.x,r.y,fn)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=zn,this.type===$n?(W.map.depthTexture.compareFunction=ge?rl:nl,W.map.depthTexture.minFilter=Gt,W.map.depthTexture.magFilter=Gt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=fi,W.map.depthTexture.magFilter=fi);W.camera.updateProjectionMatrix()}let Ae=W.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<Ae;ye++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ye),n.clear();else{ye===0&&(n.setRenderTarget(W.map),n.clear());let Me=W.getViewport(ye);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),O.viewport(a)}if(q.isPointLight){let Me=W.camera,ee=W.matrix,de=q.distance||Me.far;de!==Me.far&&(Me.far=de,Me.updateProjectionMatrix()),na.setFromMatrixPosition(q.matrixWorld),Me.position.copy(na),Yh.copy(Me.position),Yh.add(Ng[ye]),Me.up.copy(Fg[ye]),Me.lookAt(Yh),Me.updateMatrixWorld(),ee.makeTranslation(-na.x,-na.y,-na.z),Op.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Op,Me.coordinateSystem,Me.reversedDepth)}else W.updateMatrices(q);i=W.getFrustum(),S(P,F,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===qr&&v(W,F),W.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(L,U,k)}}function Bg(n,e){let t=new function(){let y=!1,D=new it,I=null,A=new it(0,0,0,0);return{setMask:function(G){I===G||y||(n.colorMask(G,G,G,G),I=G)},setLocked:function(G){y=G},setClear:function(G,X,Y,re,Se){Se===!0&&(G*=re,X*=re,Y*=re),D.set(G,X,Y,re),A.equals(D)===!1&&(n.clearColor(G,X,Y,re),A.copy(D))},reset:function(){y=!1,I=null,A.set(-1,0,0,0)}}},i=new function(){let y=!1,D=!1,I=null,A=null,G=null;return{setReversed:function(X){if(D!==X){let Y=e.get("EXT_clip_control");X?Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.ZERO_TO_ONE_EXT):Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.NEGATIVE_ONE_TO_ONE_EXT),D=X;let re=G;G=null,this.setClear(re)}},getReversed:function(){return D},setTest:function(X){X?le(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(X){I===X||y||(n.depthMask(X),I=X)},setFunc:function(X){if(D&&(X=hp[X]),A!==X){switch(X){case Dc:n.depthFunc(n.NEVER);break;case Uc:n.depthFunc(n.ALWAYS);break;case Nc:n.depthFunc(n.LESS);break;case ko:n.depthFunc(n.LEQUAL);break;case Fc:n.depthFunc(n.EQUAL);break;case Oc:n.depthFunc(n.GEQUAL);break;case Bc:n.depthFunc(n.GREATER);break;case zc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}A=X}},setLocked:function(X){y=X},setClear:function(X){G!==X&&(G=X,D&&(X=1-X),n.clearDepth(X))},reset:function(){y=!1,I=null,A=null,G=null,D=!1}}},r=new function(){let y=!1,D=null,I=null,A=null,G=null,X=null,Y=null,re=null,Se=null;return{setTest:function(be){y||(be?le(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(be){D===be||y||(n.stencilMask(be),D=be)},setFunc:function(be,pe,Pe){I===be&&A===pe&&G===Pe||(n.stencilFunc(be,pe,Pe),I=be,A=pe,G=Pe)},setOp:function(be,pe,Pe){X===be&&Y===pe&&re===Pe||(n.stencilOp(be,pe,Pe),X=be,Y=pe,re=Pe)},setLocked:function(be){y=be},setClear:function(be){Se!==be&&(n.clearStencil(be),Se=be)},reset:function(){y=!1,D=null,I=null,A=null,G=null,X=null,Y=null,re=null,Se=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c={},h=new WeakMap,u=[],d=null,p=!1,f=null,m=null,_=null,g=null,v=null,x=null,S=null,E=new ue(0,0,0),M=0,P=!1,F=null,L=null,U=null,k=null,O=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,V=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=V>=2);let W=null,ie={},ge=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),ye=new it().fromArray(ge),Me=new it().fromArray(Ae);function ee(y,D,I,A){let G=new Uint8Array(4),X=n.createTexture();n.bindTexture(y,X),n.texParameteri(y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Y=0;Y<I;Y++)y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY?n.texImage3D(D,0,n.RGBA,1,1,A,0,n.RGBA,n.UNSIGNED_BYTE,G):n.texImage2D(D+Y,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,G);return X}let de={};function le(y){o[y]!==!0&&(n.enable(y),o[y]=!0)}function _e(y){o[y]!==!1&&(n.disable(y),o[y]=!1)}de[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),r.setClear(0),le(n.DEPTH_TEST),i.setFunc(ko),T(!1),C(Pc),le(n.CULL_FACE),R(qi);let Be={[Zr]:n.FUNC_ADD,[Rd]:n.FUNC_SUBTRACT,[Pd]:n.FUNC_REVERSE_SUBTRACT};Be[Id]=n.MIN,Be[Ld]=n.MAX;let $={[Dd]:n.ZERO,[Ud]:n.ONE,[Nd]:n.SRC_COLOR,[Od]:n.SRC_ALPHA,[Hd]:n.SRC_ALPHA_SATURATE,[Vd]:n.DST_COLOR,[zd]:n.DST_ALPHA,[Fd]:n.ONE_MINUS_SRC_COLOR,[Bd]:n.ONE_MINUS_SRC_ALPHA,[kd]:n.ONE_MINUS_DST_COLOR,[Gd]:n.ONE_MINUS_DST_ALPHA,[Wd]:n.CONSTANT_COLOR,[Xd]:n.ONE_MINUS_CONSTANT_COLOR,[jd]:n.CONSTANT_ALPHA,[qd]:n.ONE_MINUS_CONSTANT_ALPHA};function R(y,D,I,A,G,X,Y,re,Se,be){if(y!==qi){if(p===!1&&(le(n.BLEND),p=!0),y===Cd)G=G||D,X=X||I,Y=Y||A,D===m&&G===v||(n.blendEquationSeparate(Be[D],Be[G]),m=D,v=G),I===_&&A===g&&X===x&&Y===S||(n.blendFuncSeparate($[I],$[A],$[X],$[Y]),_=I,g=A,x=X,S=Y),re.equals(E)!==!1&&Se===M||(n.blendColor(re.r,re.g,re.b,Se),E.copy(re),M=Se),f=y,P=!1;else if(y!==f||be!==P){if(m===Zr&&v===Zr||(n.blendEquation(n.FUNC_ADD),m=Zr,v=Zr),be)switch(y){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yr:n.blendFunc(n.ONE,n.ONE);break;case Ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ce("WebGLState: Invalid blending: ",y)}else switch(y){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ic:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",y)}_=null,g=null,x=null,S=null,E.set(0,0,0),M=0,f=y,P=be}}else p===!0&&(_e(n.BLEND),p=!1)}function T(y){F!==y&&(y?n.frontFace(n.CW):n.frontFace(n.CCW),F=y)}function C(y){y!==wd?(le(n.CULL_FACE),y!==L&&(y===Pc?n.cullFace(n.BACK):y===Ed?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),L=y}function N(y,D,I){y?(le(n.POLYGON_OFFSET_FILL),k===D&&O===I||(k=D,O=I,i.getReversed()&&(D=-D),n.polygonOffset(D,I))):_e(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:r},enable:le,disable:_e,bindFramebuffer:function(y,D){return c[y]!==D&&(n.bindFramebuffer(y,D),c[y]=D,y===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=D),y===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=D),!0)},drawBuffers:function(y,D){let I=u,A=!1;if(y){I=h.get(D),I===void 0&&(I=[],h.set(D,I));let G=y.textures;if(I.length!==G.length||I[0]!==n.COLOR_ATTACHMENT0){for(let X=0,Y=G.length;X<Y;X++)I[X]=n.COLOR_ATTACHMENT0+X;I.length=G.length,A=!0}}else I[0]!==n.BACK&&(I[0]=n.BACK,A=!0);A&&n.drawBuffers(I)},useProgram:function(y){return d!==y&&(n.useProgram(y),d=y,!0)},setBlending:R,setMaterial:function(y,D){y.side===at?_e(n.CULL_FACE):le(n.CULL_FACE);let I=y.side===Ht;D&&(I=!I),T(I),y.blending===Js&&y.transparent===!1?R(qi):R(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),i.setFunc(y.depthFunc),i.setTest(y.depthTest),i.setMask(y.depthWrite),t.setMask(y.colorWrite);let A=y.stencilWrite;r.setTest(A),A&&(r.setMask(y.stencilWriteMask),r.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),r.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),N(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:T,setCullFace:C,setLineWidth:function(y){y!==U&&(H&&n.lineWidth(y),U=y)},setPolygonOffset:N,setScissorTest:function(y){y?le(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=n.TEXTURE0+Z-1),W!==y&&(n.activeTexture(y),W=y)},bindTexture:function(y,D,I){I===void 0&&(I=W===null?n.TEXTURE0+Z-1:W);let A=ie[I];A===void 0&&(A={type:void 0,texture:void 0},ie[I]=A),A.type===y&&A.texture===D||(W!==I&&(n.activeTexture(I),W=I),n.bindTexture(y,D||de[y]),A.type=y,A.texture=D)},unbindTexture:function(){let y=ie[W];y!==void 0&&y.type!==void 0&&(n.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(y){Ce("WebGLState:",y)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(y){Ce("WebGLState:",y)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(y){Ce("WebGLState:",y)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(y){Ce("WebGLState:",y)}},pixelStorei:function(y,D){l[y]!==D&&(n.pixelStorei(y,D),l[y]=D)},getParameter:function(y){return l[y]!==void 0?l[y]:n.getParameter(y)},updateUBOMapping:function(y,D){let I=a.get(D);I===void 0&&(I=new WeakMap,a.set(D,I));let A=I.get(y);A===void 0&&(A=n.getUniformBlockIndex(D,y.name),I.set(y,A))},uniformBlockBinding:function(y,D){let I=a.get(D).get(y);s.get(D)!==I&&(n.uniformBlockBinding(D,I,y.__bindingPointIndex),s.set(D,I))},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(y){Ce("WebGLState:",y)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(y){Ce("WebGLState:",y)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(y){Ce("WebGLState:",y)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(y){Ce("WebGLState:",y)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(y){Ce("WebGLState:",y)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(y){Ce("WebGLState:",y)}},scissor:function(y){ye.equals(y)===!1&&(n.scissor(y.x,y.y,y.z,y.w),ye.copy(y))},viewport:function(y){Me.equals(y)===!1&&(n.viewport(y.x,y.y,y.z,y.w),Me.copy(y))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),o={},l={},W=null,ie={},c={},h=new WeakMap,u=[],d=null,p=!1,f=null,m=null,_=null,g=null,v=null,x=null,S=null,E=new ue(0,0,0),M=0,P=!1,F=null,L=null,U=null,k=null,O=null,ye.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),r.reset()}}}function zg(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,u=new Set,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,T){return f?new OffscreenCanvas(R,T):Ts("canvas")}function _(R,T,C){let N=1,y=$(R);if((y.width>C||y.height>C)&&(N=C/Math.max(y.width,y.height)),N<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let D=Math.floor(N*y.width),I=Math.floor(N*y.height);d===void 0&&(d=m(D,I));let A=T?m(D,I):d;return A.width=D,A.height=I,A.getContext("2d").drawImage(R,0,0,D,I),Ee("WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+D+"x"+I+")."),A}return"data"in R&&Ee("WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),R}return R}function g(R){return R.generateMipmaps}function v(R){n.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,T,C,N,y,D=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let I;N&&(I=e.get("EXT_texture_norm16"),I||Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let A=T;if(T===n.RED&&(C===n.FLOAT&&(A=n.R32F),C===n.HALF_FLOAT&&(A=n.R16F),C===n.UNSIGNED_BYTE&&(A=n.R8),C===n.UNSIGNED_SHORT&&I&&(A=I.R16_EXT),C===n.SHORT&&I&&(A=I.R16_SNORM_EXT)),T===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.R8UI),C===n.UNSIGNED_SHORT&&(A=n.R16UI),C===n.UNSIGNED_INT&&(A=n.R32UI),C===n.BYTE&&(A=n.R8I),C===n.SHORT&&(A=n.R16I),C===n.INT&&(A=n.R32I)),T===n.RG&&(C===n.FLOAT&&(A=n.RG32F),C===n.HALF_FLOAT&&(A=n.RG16F),C===n.UNSIGNED_BYTE&&(A=n.RG8),C===n.UNSIGNED_SHORT&&I&&(A=I.RG16_EXT),C===n.SHORT&&I&&(A=I.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.RG8UI),C===n.UNSIGNED_SHORT&&(A=n.RG16UI),C===n.UNSIGNED_INT&&(A=n.RG32UI),C===n.BYTE&&(A=n.RG8I),C===n.SHORT&&(A=n.RG16I),C===n.INT&&(A=n.RG32I)),T===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.RGB8UI),C===n.UNSIGNED_SHORT&&(A=n.RGB16UI),C===n.UNSIGNED_INT&&(A=n.RGB32UI),C===n.BYTE&&(A=n.RGB8I),C===n.SHORT&&(A=n.RGB16I),C===n.INT&&(A=n.RGB32I)),T===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(A=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(A=n.RGBA16UI),C===n.UNSIGNED_INT&&(A=n.RGBA32UI),C===n.BYTE&&(A=n.RGBA8I),C===n.SHORT&&(A=n.RGBA16I),C===n.INT&&(A=n.RGBA32I)),T===n.RGB&&(C===n.UNSIGNED_SHORT&&I&&(A=I.RGB16_EXT),C===n.SHORT&&I&&(A=I.RGB16_SNORM_EXT),C===n.UNSIGNED_INT_5_9_9_9_REV&&(A=n.RGB9_E5),C===n.UNSIGNED_INT_10F_11F_11F_REV&&(A=n.R11F_G11F_B10F)),T===n.RGBA){let G=D?bs:Xe.getTransfer(y);C===n.FLOAT&&(A=n.RGBA32F),C===n.HALF_FLOAT&&(A=n.RGBA16F),C===n.UNSIGNED_BYTE&&(A=G===Qe?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT&&I&&(A=I.RGBA16_EXT),C===n.SHORT&&I&&(A=I.RGBA16_SNORM_EXT),C===n.UNSIGNED_SHORT_4_4_4_4&&(A=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(A=n.RGB5_A1)}return A!==n.R16F&&A!==n.R32F&&A!==n.RG16F&&A!==n.RG32F&&A!==n.RGBA16F&&A!==n.RGBA32F||e.get("EXT_color_buffer_float"),A}function E(R,T){let C;return R?T===null||T===fn||T===$r?C=n.DEPTH24_STENCIL8:T===_i?C=n.DEPTH32F_STENCIL8:T===Kr&&(C=n.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===fn||T===$r?C=n.DEPTH_COMPONENT24:T===_i?C=n.DEPTH_COMPONENT32F:T===Kr&&(C=n.DEPTH_COMPONENT16),C}function M(R,T){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==fi&&R.minFilter!==Gt?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function P(R){let T=R.target;T.removeEventListener("dispose",P),(function(C){let N=i.get(C);if(N.__webglInit===void 0)return;let y=C.source,D=p.get(y);if(D){let I=D[N.__cacheKey];I.usedTimes--,I.usedTimes===0&&L(C),Object.keys(D).length===0&&p.delete(y)}i.remove(C)})(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function F(R){let T=R.target;T.removeEventListener("dispose",F),(function(C){let N=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(N.__webglFramebuffer[D]))for(let I=0;I<N.__webglFramebuffer[D].length;I++)n.deleteFramebuffer(N.__webglFramebuffer[D][I]);else n.deleteFramebuffer(N.__webglFramebuffer[D]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[D])}else{if(Array.isArray(N.__webglFramebuffer))for(let D=0;D<N.__webglFramebuffer.length;D++)n.deleteFramebuffer(N.__webglFramebuffer[D]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let D=0;D<N.__webglColorRenderbuffer.length;D++)N.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[D]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let y=C.textures;for(let D=0,I=y.length;D<I;D++){let A=i.get(y[D]);A.__webglTexture&&(n.deleteTexture(A.__webglTexture),a.memory.textures--),i.remove(y[D])}i.remove(C)})(T)}function L(R){let T=i.get(R);n.deleteTexture(T.__webglTexture);let C=R.source;delete p.get(C)[T.__cacheKey],a.memory.textures--}let U=0;function k(R,T){let C=i.get(R);if(R.isVideoTexture&&(function(N){let y=a.render.frame;h.get(N)!==y&&(h.set(N,y),N.update())})(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&C.__version!==R.version){let N=R.image;if(N===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void ie(C,R,T);Ee("WebGLRenderer: Texture marked for update but image is incomplete")}}else R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+T)}let O={[$a]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[Qa]:n.MIRRORED_REPEAT},Z={[fi]:n.NEAREST,[Kd]:n.NEAREST_MIPMAP_NEAREST,[Qs]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[Xo]:n.LINEAR_MIPMAP_NEAREST,[er]:n.LINEAR_MIPMAP_LINEAR},H={[tp]:n.NEVER,[ap]:n.ALWAYS,[ip]:n.LESS,[nl]:n.LEQUAL,[np]:n.EQUAL,[rl]:n.GEQUAL,[rp]:n.GREATER,[sp]:n.NOTEQUAL};function V(R,T){if(T.type!==_i||e.has("OES_texture_float_linear")!==!1||T.magFilter!==Gt&&T.magFilter!==Xo&&T.magFilter!==Qs&&T.magFilter!==er&&T.minFilter!==Gt&&T.minFilter!==Xo&&T.minFilter!==Qs&&T.minFilter!==er||Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,O[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,O[T.wrapT]),R!==n.TEXTURE_3D&&R!==n.TEXTURE_2D_ARRAY||n.texParameteri(R,n.TEXTURE_WRAP_R,O[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Z[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Z[T.minFilter]),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,H[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fi||T.minFilter!==Qs&&T.minFilter!==er||T.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function q(R,T){let C=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",P));let N=T.source,y=p.get(N);y===void 0&&(y={},p.set(N,y));let D=(function(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()})(T);if(D!==R.__cacheKey){y[D]===void 0&&(y[D]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,C=!0),y[D].usedTimes++;let I=y[R.__cacheKey];I!==void 0&&(y[R.__cacheKey].usedTimes--,I.usedTimes===0&&L(T)),R.__cacheKey=D,R.__webglTexture=y[D].texture}return C}function W(R,T,C){return Math.floor(Math.floor(R/C)/T)}function ie(R,T,C){let N=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(N=n.TEXTURE_3D);let y=q(R,T),D=T.source;t.bindTexture(N,R.__webglTexture,n.TEXTURE0+C);let I=i.get(D);if(D.version!==I.__version||y===!0){if(t.activeTexture(n.TEXTURE0+C),!(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)){let ae=Xe.getPrimaries(Xe.workingColorSpace),ne=T.colorSpace===nr?null:Xe.getPrimaries(T.colorSpace),ve=T.colorSpace===nr||ae===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let A=_(T.image,!1,r.maxTextureSize);A=Be(T,A);let G=s.convert(T.format,T.colorSpace),X=s.convert(T.type),Y,re=S(T.internalFormat,G,X,T.normalized,T.colorSpace,T.isVideoTexture);V(N,T);let Se=T.mipmaps,be=T.isVideoTexture!==!0,pe=I.__version===void 0||y===!0,Pe=D.dataReady,Q=M(T,A);if(T.isDepthTexture)re=E(T.format===tr,T.type),pe&&(be?t.texStorage2D(n.TEXTURE_2D,1,re,A.width,A.height):t.texImage2D(n.TEXTURE_2D,0,re,A.width,A.height,0,G,X,null));else if(T.isDataTexture)if(Se.length>0){be&&pe&&t.texStorage2D(n.TEXTURE_2D,Q,re,Se[0].width,Se[0].height);for(let ae=0,ne=Se.length;ae<ne;ae++)Y=Se[ae],be?Pe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Y.width,Y.height,G,X,Y.data):t.texImage2D(n.TEXTURE_2D,ae,re,Y.width,Y.height,0,G,X,Y.data);T.generateMipmaps=!1}else be?(pe&&t.texStorage2D(n.TEXTURE_2D,Q,re,A.width,A.height),Pe&&(function(ae,ne,ve,nt){let $e=ae.updateRanges;if($e.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,ve,nt,ne.data);else{$e.sort((Ve,Dt)=>Ve.start-Dt.start);let mt=0;for(let Ve=1;Ve<$e.length;Ve++){let Dt=$e[mt],rt=$e[Ve],St=Dt.start+Dt.count,dt=W(rt.start,ne.width,4),di=W(Dt.start,ne.width,4);rt.start<=St+1&&dt===di&&W(rt.start+rt.count-1,ne.width,4)===dt?Dt.count=Math.max(Dt.count,rt.start+rt.count-Dt.start):(++mt,$e[mt]=rt)}$e.length=mt+1;let Yt=t.getParameter(n.UNPACK_ROW_LENGTH),we=t.getParameter(n.UNPACK_SKIP_PIXELS),tt=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,ne.width);for(let Ve=0,Dt=$e.length;Ve<Dt;Ve++){let rt=$e[Ve],St=Math.floor(rt.start/4),dt=Math.ceil(rt.count/4),di=St%ne.width,xi=Math.floor(St/ne.width),Vn=dt;t.pixelStorei(n.UNPACK_SKIP_PIXELS,di),t.pixelStorei(n.UNPACK_SKIP_ROWS,xi),t.texSubImage2D(n.TEXTURE_2D,0,di,xi,Vn,1,ve,nt,ne.data)}ae.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Yt),t.pixelStorei(n.UNPACK_SKIP_PIXELS,we),t.pixelStorei(n.UNPACK_SKIP_ROWS,tt)}})(T,A,G,X)):t.texImage2D(n.TEXTURE_2D,0,re,A.width,A.height,0,G,X,A.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){be&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,re,Se[0].width,Se[0].height,A.depth);for(let ae=0,ne=Se.length;ae<ne;ae++)if(Y=Se[ae],T.format!==Pi)if(G!==null)if(be){if(Pe)if(T.layerUpdates.size>0){let ve=Oh(Y.width,Y.height,T.format,T.type);for(let nt of T.layerUpdates){let $e=Y.data.subarray(nt*ve/Y.data.BYTES_PER_ELEMENT,(nt+1)*ve/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,nt,Y.width,Y.height,1,G,$e)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Y.width,Y.height,A.depth,G,Y.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,re,Y.width,Y.height,A.depth,0,Y.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?Pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Y.width,Y.height,A.depth,G,X,Y.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,re,Y.width,Y.height,A.depth,0,G,X,Y.data)}else{be&&pe&&t.texStorage2D(n.TEXTURE_2D,Q,re,Se[0].width,Se[0].height);for(let ae=0,ne=Se.length;ae<ne;ae++)Y=Se[ae],T.format!==Pi?G!==null?be?Pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Y.width,Y.height,G,Y.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,re,Y.width,Y.height,0,Y.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Pe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Y.width,Y.height,G,X,Y.data):t.texImage2D(n.TEXTURE_2D,ae,re,Y.width,Y.height,0,G,X,Y.data)}else if(T.isDataArrayTexture)if(be){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,re,A.width,A.height,A.depth),Pe)if(T.layerUpdates.size>0){let ae=Oh(A.width,A.height,T.format,T.type);for(let ne of T.layerUpdates){let ve=A.data.subarray(ne*ae/A.data.BYTES_PER_ELEMENT,(ne+1)*ae/A.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,A.width,A.height,1,G,X,ve)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,A.width,A.height,A.depth,G,X,A.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,re,A.width,A.height,A.depth,0,G,X,A.data);else if(T.isData3DTexture)be?(pe&&t.texStorage3D(n.TEXTURE_3D,Q,re,A.width,A.height,A.depth),Pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,A.width,A.height,A.depth,G,X,A.data)):t.texImage3D(n.TEXTURE_3D,0,re,A.width,A.height,A.depth,0,G,X,A.data);else if(T.isFramebufferTexture){if(pe)if(be)t.texStorage2D(n.TEXTURE_2D,Q,re,A.width,A.height);else{let ae=A.width,ne=A.height;for(let ve=0;ve<Q;ve++)t.texImage2D(n.TEXTURE_2D,ve,re,ae,ne,0,G,X,null),ae>>=1,ne>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),A.parentNode!==ae)return ae.appendChild(A),u.add(T),ae.onpaint=ne=>{let ve=ne.changedElements;for(let nt of u)ve.includes(nt.image)&&(nt.needsUpdate=!0)},void ae.requestPaint();if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,A);else{let ve=n.RGBA,nt=n.RGBA,$e=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ve,nt,$e,A)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Se.length>0){if(be&&pe){let ae=$(Se[0]);t.texStorage2D(n.TEXTURE_2D,Q,re,ae.width,ae.height)}for(let ae=0,ne=Se.length;ae<ne;ae++)Y=Se[ae],be?Pe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,G,X,Y):t.texImage2D(n.TEXTURE_2D,ae,re,G,X,Y);T.generateMipmaps=!1}else if(be){if(pe){let ae=$(A);t.texStorage2D(n.TEXTURE_2D,Q,re,ae.width,ae.height)}Pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,G,X,A)}else t.texImage2D(n.TEXTURE_2D,0,re,G,X,A);g(T)&&v(N),I.__version=D.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ge(R,T,C,N,y,D){let I=s.convert(C.format,C.colorSpace),A=s.convert(C.type),G=S(C.internalFormat,I,A,C.normalized,C.colorSpace),X=i.get(T),Y=i.get(C);if(Y.__renderTarget=T,!X.__hasExternalTextures){let re=Math.max(1,T.width>>D),Se=Math.max(1,T.height>>D);y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY?t.texImage3D(y,D,G,re,Se,T.depth,0,I,A,null):t.texImage2D(y,D,G,re,Se,0,I,A,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),_e(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,y,Y.__webglTexture,0,le(T)):(y===n.TEXTURE_2D||y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,y,Y.__webglTexture,D),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(R,T,C){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer){let N=T.depthTexture,y=N&&N.isDepthTexture?N.type:null,D=E(T.stencilBuffer,y),I=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le(T),D,T.width,T.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,le(T),D,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,D,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,R)}else{let N=T.textures;for(let y=0;y<N.length;y++){let D=N[y],I=s.convert(D.format,D.colorSpace),A=s.convert(D.type),G=S(D.internalFormat,I,A,D.normalized,D.colorSpace);_e(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le(T),G,T.width,T.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,le(T),G,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,G,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(R,T,C){let N=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!T.depthTexture||!T.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let y=i.get(T.depthTexture);if(y.__renderTarget=T,y.__webglTexture&&T.depthTexture.image.width===T.width&&T.depthTexture.image.height===T.height||(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),N){if(y.__webglInit===void 0&&(y.__webglInit=!0,T.depthTexture.addEventListener("dispose",P)),y.__webglTexture===void 0){y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture),V(n.TEXTURE_CUBE_MAP,T.depthTexture);let X=s.convert(T.depthTexture.format),Y=s.convert(T.depthTexture.type),re;T.depthTexture.format===zn?re=n.DEPTH_COMPONENT24:T.depthTexture.format===tr&&(re=n.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,re,T.width,T.height,0,X,Y,null)}}else k(T.depthTexture,0);let D=y.__webglTexture,I=le(T),A=N?n.TEXTURE_CUBE_MAP_POSITIVE_X+C:n.TEXTURE_2D,G=T.depthTexture.format===tr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===zn)_e(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,A,D,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,G,A,D,0);else{if(T.depthTexture.format!==tr)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");_e(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,A,D,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,G,A,D,0)}}function Me(R){let T=i.get(R),C=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let N=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),N){let y=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,N.removeEventListener("dispose",y)};N.addEventListener("dispose",y),T.__depthDisposeCallback=y}T.__boundDepthTexture=N}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(C)for(let N=0;N<6;N++)ye(T.__webglFramebuffer[N],R,N);else{let N=R.texture.mipmaps;N&&N.length>0?ye(T.__webglFramebuffer[0],R,0):ye(T.__webglFramebuffer,R,0)}else if(C){T.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[N]),T.__webglDepthbuffer[N]===void 0)T.__webglDepthbuffer[N]=n.createRenderbuffer(),Ae(T.__webglDepthbuffer[N],R,!1);else{let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,D=T.__webglDepthbuffer[N];n.bindRenderbuffer(n.RENDERBUFFER,D),n.framebufferRenderbuffer(n.FRAMEBUFFER,y,n.RENDERBUFFER,D)}}else{let N=R.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Ae(T.__webglDepthbuffer,R,!1);else{let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,D=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,D),n.framebufferRenderbuffer(n.FRAMEBUFFER,y,n.RENDERBUFFER,D)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}let ee=[],de=[];function le(R){return Math.min(r.maxSamples,R.samples)}function _e(R){let T=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Be(R,T){let C=R.colorSpace,N=R.format,y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||C!==Ss&&C!==nr&&(Xe.getTransfer(C)===Qe?N===Pi&&y===ci||Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",C)),T}function $(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=function(){let R=U;return R>=r.maxTextures&&Ee("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),U+=1,R},this.resetTextureUnits=function(){U=0},this.getTextureUnits=function(){return U},this.setTextureUnits=function(R){U=R},this.setTexture2D=k,this.setTexture2DArray=function(R,T){let C=i.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?ie(C,R,T):(R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+T))},this.setTexture3D=function(R,T){let C=i.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?ie(C,R,T):t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+T)},this.setTextureCube=function(R,T){let C=i.get(R);R.isCubeDepthTexture!==!0&&R.version>0&&C.__version!==R.version?(function(N,y,D){if(y.image.length!==6)return;let I=q(N,y),A=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+D);let G=i.get(A);if(A.version!==G.__version||I===!0){t.activeTexture(n.TEXTURE0+D);let X=Xe.getPrimaries(Xe.workingColorSpace),Y=y.colorSpace===nr?null:Xe.getPrimaries(y.colorSpace),re=y.colorSpace===nr||X===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Se=y.isCompressedTexture||y.image[0].isCompressedTexture,be=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let we=0;we<6;we++)pe[we]=Se||be?be?y.image[we].image:y.image[we]:_(y.image[we],!0,r.maxCubemapSize),pe[we]=Be(y,pe[we]);let Pe=pe[0],Q=s.convert(y.format,y.colorSpace),ae=s.convert(y.type),ne=S(y.internalFormat,Q,ae,y.normalized,y.colorSpace),ve=y.isVideoTexture!==!0,nt=G.__version===void 0||I===!0,$e=A.dataReady,mt,Yt=M(y,Pe);if(V(n.TEXTURE_CUBE_MAP,y),Se){ve&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Yt,ne,Pe.width,Pe.height);for(let we=0;we<6;we++){mt=pe[we].mipmaps;for(let tt=0;tt<mt.length;tt++){let Ve=mt[tt];y.format!==Pi?Q!==null?ve?$e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt,0,0,Ve.width,Ve.height,Q,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt,ne,Ve.width,Ve.height,0,Ve.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?$e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt,0,0,Ve.width,Ve.height,Q,ae,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt,ne,Ve.width,Ve.height,0,Q,ae,Ve.data)}}}else{if(mt=y.mipmaps,ve&&nt){mt.length>0&&Yt++;let we=$(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Yt,ne,we.width,we.height)}for(let we=0;we<6;we++)if(be){ve?$e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,pe[we].width,pe[we].height,Q,ae,pe[we].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ne,pe[we].width,pe[we].height,0,Q,ae,pe[we].data);for(let tt=0;tt<mt.length;tt++){let Ve=mt[tt].image[we].image;ve?$e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt+1,0,0,Ve.width,Ve.height,Q,ae,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt+1,ne,Ve.width,Ve.height,0,Q,ae,Ve.data)}}else{ve?$e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Q,ae,pe[we]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ne,Q,ae,pe[we]);for(let tt=0;tt<mt.length;tt++){let Ve=mt[tt];ve?$e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt+1,0,0,Q,ae,Ve.image[we]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt+1,ne,Q,ae,Ve.image[we])}}}g(y)&&v(n.TEXTURE_CUBE_MAP),G.__version=A.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version})(C,R,T):t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+T)},this.rebindTextures=function(R,T,C){let N=i.get(R);T!==void 0&&ge(N.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&Me(R)},this.setupRenderTarget=function(R){let T=R.texture,C=i.get(R),N=i.get(T);R.addEventListener("dispose",F);let y=R.textures,D=R.isWebGLCubeRenderTarget===!0,I=y.length>1;if(I||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=T.version,a.memory.textures++),D){C.__webglFramebuffer=[];for(let A=0;A<6;A++)if(T.mipmaps&&T.mipmaps.length>0){C.__webglFramebuffer[A]=[];for(let G=0;G<T.mipmaps.length;G++)C.__webglFramebuffer[A][G]=n.createFramebuffer()}else C.__webglFramebuffer[A]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){C.__webglFramebuffer=[];for(let A=0;A<T.mipmaps.length;A++)C.__webglFramebuffer[A]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(I)for(let A=0,G=y.length;A<G;A++){let X=i.get(y[A]);X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&_e(R)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let A=0;A<y.length;A++){let G=y[A];C.__webglColorRenderbuffer[A]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[A]);let X=s.convert(G.format,G.colorSpace),Y=s.convert(G.type),re=S(G.internalFormat,X,Y,G.normalized,G.colorSpace,R.isXRRenderTarget===!0),Se=le(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,re,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+A,n.RENDERBUFFER,C.__webglColorRenderbuffer[A])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(C.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(D){t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),V(n.TEXTURE_CUBE_MAP,T);for(let A=0;A<6;A++)if(T.mipmaps&&T.mipmaps.length>0)for(let G=0;G<T.mipmaps.length;G++)ge(C.__webglFramebuffer[A][G],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+A,G);else ge(C.__webglFramebuffer[A],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+A,0);g(T)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(I){for(let A=0,G=y.length;A<G;A++){let X=y[A],Y=i.get(X),re=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),V(re,X),ge(C.__webglFramebuffer,R,X,n.COLOR_ATTACHMENT0+A,re,0),g(X)&&v(re)}t.unbindTexture()}else{let A=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(A=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(A,N.__webglTexture),V(A,T),T.mipmaps&&T.mipmaps.length>0)for(let G=0;G<T.mipmaps.length;G++)ge(C.__webglFramebuffer[G],R,T,n.COLOR_ATTACHMENT0,A,G);else ge(C.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,A,0);g(T)&&v(A),t.unbindTexture()}R.depthBuffer&&Me(R)},this.updateRenderTargetMipmap=function(R){let T=R.textures;for(let C=0,N=T.length;C<N;C++){let y=T[C];if(g(y)){let D=x(R),I=i.get(y).__webglTexture;t.bindTexture(D,I),v(D),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(_e(R)===!1){let T=R.textures,C=R.width,N=R.height,y=n.COLOR_BUFFER_BIT,D=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,I=i.get(R),A=T.length>1;if(A)for(let X=0;X<T.length;X++)t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,I.__webglMultisampledFramebuffer);let G=R.texture.mipmaps;G&&G.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,I.__webglFramebuffer);for(let X=0;X<T.length;X++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(y|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(y|=n.STENCIL_BUFFER_BIT)),A){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,I.__webglColorRenderbuffer[X]);let Y=i.get(T[X]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Y,0)}n.blitFramebuffer(0,0,C,N,0,0,C,N,y,n.NEAREST),l===!0&&(ee.length=0,de.length=0,ee.push(n.COLOR_ATTACHMENT0+X),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ee.push(D),de.push(D),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,de)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),A)for(let X=0;X<T.length;X++){t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,I.__webglColorRenderbuffer[X]);let Y=i.get(T[X]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.TEXTURE_2D,Y,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,I.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let T=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}},this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Gg(n,e){return{convert:function(t,i=nr){let r,s=Xe.getTransfer(i);if(t===ci)return n.UNSIGNED_BYTE;if(t===qo)return n.UNSIGNED_SHORT_4_4_4_4;if(t===Yo)return n.UNSIGNED_SHORT_5_5_5_1;if(t===Zc)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===Jc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===qc)return n.BYTE;if(t===Yc)return n.SHORT;if(t===Kr)return n.UNSIGNED_SHORT;if(t===jo)return n.INT;if(t===fn)return n.UNSIGNED_INT;if(t===_i)return n.FLOAT;if(t===Yi)return n.HALF_FLOAT;if(t===$d)return n.ALPHA;if(t===Qd)return n.RGB;if(t===Pi)return n.RGBA;if(t===zn)return n.DEPTH_COMPONENT;if(t===tr)return n.DEPTH_STENCIL;if(t===Zo)return n.RED;if(t===Jo)return n.RED_INTEGER;if(t===ir)return n.RG;if(t===Kc)return n.RG_INTEGER;if(t===$c)return n.RGBA_INTEGER;if(t===Ko||t===$o||t===Qo||t===el)if(s===Qe){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===el)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===el)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Qc||t===eh||t===th||t===ih){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Qc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===eh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===ih)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===nh||t===rh||t===sh||t===ah||t===oh||t===tl||t===lh){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===nh||t===rh)return s===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===sh)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===ah)return r.COMPRESSED_R11_EAC;if(t===oh)return r.COMPRESSED_SIGNED_R11_EAC;if(t===tl)return r.COMPRESSED_RG11_EAC;if(t===lh)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===ch||t===hh||t===uh||t===dh||t===ph||t===mh||t===fh||t===gh||t===vh||t===_h||t===xh||t===yh||t===Mh||t===Sh){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===ch)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===hh)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===uh)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===dh)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===ph)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===mh)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===fh)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===gh)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===vh)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===_h)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===xh)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===yh)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Mh)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Sh)return s===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===bh||t===Th||t===wh){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===bh)return s===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Eh||t===Ah||t===il||t===Ch){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Eh)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Ah)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Ch)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===$r?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Fs(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new wt({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Ai(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nu=class extends Hi{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,m=typeof XRWebGLBinding<"u",_=new iu,g={},v=t.getContextAttributes(),x=null,S=null,E=[],M=[],P=new te,F=null,L=new Nt;L.viewport=new it;let U=new Nt;U.viewport=new it;let k=[L,U],O=new Go,Z=null,H=null;function V(ee){let de=M.indexOf(ee.inputSource);if(de===-1)return;let le=E[de];le!==void 0&&(le.update(ee.inputSource,ee.frame,c||a),le.dispatchEvent({type:ee.type,data:ee.inputSource}))}function q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",W);for(let ee=0;ee<E.length;ee++){let de=M[ee];de!==null&&(M[ee]=null,E[ee].disconnect(de))}Z=null,H=null,_.reset();for(let ee in g)delete g[ee];e.setRenderTarget(x),p=null,d=null,u=null,r=null,S=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}function W(ee){for(let de=0;de<ee.removed.length;de++){let le=ee.removed[de],_e=M.indexOf(le);_e>=0&&(M[_e]=null,E[_e].disconnect(le))}for(let de=0;de<ee.added.length;de++){let le=ee.added[de],_e=M.indexOf(le);if(_e===-1){for(let $=0;$<E.length;$++){if($>=M.length){M.push(le),_e=$;break}if(M[$]===null){M[$]=le,_e=$;break}}if(_e===-1)break}let Be=E[_e];Be&&Be.connect(le)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=E[ee];return de===void 0&&(de=new Ur,E[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=E[ee];return de===void 0&&(de=new Ur,E[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=E[ee];return de===void 0&&(de=new Ur,E[ee]=de),de.getHandSpace()},this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",q),r.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(P),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,le=null,_e=null;v.depth&&(_e=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=v.stencil?tr:zn,le=v.stencil?$r:fn);let Be={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new oi(d.textureWidth,d.textureHeight,{format:Pi,type:ci,depthTexture:new pn(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new oi(p.framebufferWidth,p.framebufferHeight,{format:Pi,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let ie=new b,ge=new b;function Ae(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let de=ee.near,le=ee.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(le=_.depthFar)),O.near=U.near=L.near=de,O.far=U.far=L.far=le,Z===O.near&&H===O.far||(r.updateRenderState({depthNear:O.near,depthFar:O.far}),Z=O.near,H=O.far),O.layers.mask=6|ee.layers.mask,L.layers.mask=-5&O.layers.mask,U.layers.mask=-3&O.layers.mask;let _e=ee.parent,Be=O.cameras;Ae(O,_e);for(let $=0;$<Be.length;$++)Ae(Be[$],_e);Be.length===2?(function($,R,T){ie.setFromMatrixPosition(R.matrixWorld),ge.setFromMatrixPosition(T.matrixWorld);let C=ie.distanceTo(ge),N=R.projectionMatrix.elements,y=T.projectionMatrix.elements,D=N[14]/(N[10]-1),I=N[14]/(N[10]+1),A=(N[9]+1)/N[5],G=(N[9]-1)/N[5],X=(N[8]-1)/N[0],Y=(y[8]+1)/y[0],re=D*X,Se=D*Y,be=C/(-X+Y),pe=be*-X;if(R.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(pe),$.translateZ(be),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),N[10]===-1)$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let Pe=D+be,Q=I+be,ae=re-pe,ne=Se+(C-pe),ve=A*I/Q*Pe,nt=G*I/Q*Pe;$.projectionMatrix.makePerspective(ae,ne,ve,nt,Pe,Q),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}})(O,L,U):O.projectionMatrix.copy(L.projectionMatrix),(function($,R,T){T===null?$.matrix.copy(R.matrixWorld):($.matrix.copy(T.matrixWorld),$.matrix.invert(),$.matrix.multiply(R.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(R.projectionMatrix),$.projectionMatrixInverse.copy(R.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=2*Lr*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)})(ee,O,_e)},this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(O)},this.getCameraTexture=function(ee){return g[ee]};let ye=null,Me=new Bp;Me.setAnimationLoop(function(ee,de){if(h=de.getViewerPose(c||a),f=de,h!==null){let le=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let _e=!1;le.length!==O.cameras.length&&(O.cameras.length=0,_e=!0);for(let $=0;$<le.length;$++){let R=le[$],T=null;if(p!==null)T=p.getViewport(R);else{let N=u.getViewSubImage(d,R);T=N.viewport,$===0&&(e.setRenderTargetTextures(S,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(S))}let C=k[$];C===void 0&&(C=new Nt,C.layers.enable($),C.viewport=new it,k[$]=C),C.matrix.fromArray(R.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(R.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(T.x,T.y,T.width,T.height),$===0&&(O.matrix.copy(C.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),_e===!0&&O.cameras.push(C)}let Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){u=i.getBinding();let $=u.getDepthInformation(le[0]);$&&$.isValid&&$.texture&&_.init($,r.renderState)}if(Be&&Be.includes("camera-access")&&m){e.state.unbindTexture(),u=i.getBinding();for(let $=0;$<le.length;$++){let R=le[$].camera;if(R){let T=g[R];T||(T=new Fs,g[R]=T);let C=u.getCameraImage(R);T.sourceTexture=C}}}}for(let le=0;le<E.length;le++){let _e=M[le],Be=E[le];_e!==null&&Be!==void 0&&Be.update(_e,de,c||a)}ye&&ye(ee,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),f=null}),this.setAnimationLoop=function(ee){ye=ee},this.dispose=function(){}}},Vg=new Ue,Wp=new Ne;function kg(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Ht&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Ht&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,r.envMapRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(l)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&r.envMapRotation.value.premultiply(Wp),r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Nh(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?i(r,s):s.isMeshLambertMaterial?(i(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(i(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ht&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Hg(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,p,f,m){if((function(_,g,v,x){let S=_.value,E=g+"_"+v;if(x[E]===void 0)return typeof S=="number"||typeof S=="boolean"?x[E]=S:ArrayBuffer.isView(S)?x[E]=S.slice():x[E]=S.clone(),!0;{let M=x[E];if(typeof S=="number"||typeof S=="boolean"){if(M!==S)return x[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(M.equals(S)===!1)return M.copy(S),!0}}return!1})(d,p,f,m)===!0){let _=d.__offset,g=d.value;if(Array.isArray(g)){let v=0;for(let x=0;x<g.length;x++){let S=g[x],E=h(S);c(S,d.__data,v),typeof S=="number"||typeof S=="boolean"||S.isMatrix3||ArrayBuffer.isView(S)||(v+=E.storage/Float32Array.BYTES_PER_ELEMENT)}}else c(g,d.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,d.__data)}}function c(d,p,f){typeof d=="number"||typeof d=="boolean"?p[0]=d:d.isMatrix3?(p[0]=d.elements[0],p[1]=d.elements[1],p[2]=d.elements[2],p[3]=0,p[4]=d.elements[3],p[5]=d.elements[4],p[6]=d.elements[5],p[7]=0,p[8]=d.elements[6],p[9]=d.elements[7],p[10]=d.elements[8],p[11]=0):ArrayBuffer.isView(d)?p.set(new d.constructor(d.buffer,d.byteOffset,p.length)):d.toArray(p,f)}function h(d){let p={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(p.boundary=4,p.storage=4):d.isVector2?(p.boundary=8,p.storage=8):d.isVector3||d.isColor?(p.boundary=16,p.storage=12):d.isVector4?(p.boundary=16,p.storage=16):d.isMatrix3?(p.boundary=48,p.storage=48):d.isMatrix4?(p.boundary=64,p.storage=64):d.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(d)?(p.boundary=16,p.storage=d.byteLength):Ee("WebGLRenderer: Unsupported uniform value type.",d),p}function u(d){let p=d.target;p.removeEventListener("dispose",u);let f=a.indexOf(p.__bindingPointIndex);a.splice(f,1),n.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}return{bind:function(d,p){let f=p.program;i.uniformBlockBinding(d,f)},update:function(d,p){let f=r[d.id];f===void 0&&((function(g){let v=g.uniforms,x=0,S=16;for(let M=0,P=v.length;M<P;M++){let F=Array.isArray(v[M])?v[M]:[v[M]];for(let L=0,U=F.length;L<U;L++){let k=F[L],O=Array.isArray(k.value)?k.value:[k.value];for(let Z=0,H=O.length;Z<H;Z++){let V=h(O[Z]),q=x%S,W=q%V.boundary,ie=q+W;x+=W,ie!==0&&S-ie<V.storage&&(x+=S-ie),k.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=V.storage}}}let E=x%S;E>0&&(x+=S-E),g.__size=x,g.__cache={}})(d),f=(function(g){let v=(function(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();g.__bindingPointIndex=v;let x=n.createBuffer(),S=g.__size,E=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x})(d),r[d.id]=f,d.addEventListener("dispose",u));let m=p.program;i.updateUBOMapping(d,m);let _=e.render.frame;s[d.id]!==_&&((function(g){let v=r[g.id],x=g.uniforms,S=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,M=x.length;E<M;E++){let P=x[E];if(Array.isArray(P))for(let F=0,L=P.length;F<L;F++)l(P[F],E,F,S);else l(P,E,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)})(d),s[d.id]=_)},dispose:function(){for(let d in r)n.deleteBuffer(r[d]);a=[],r={},s={}}}}Wp.set(-1,0,0,0,1,0,0,0,1);var Wg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zi=null,ul=class{constructor(e={}){let{canvas:t=op(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=ci}=e,f;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let m=p,_=new Set([$c,Kc,Jo]),g=new Set([ci,fn,Kr,$r,qo,Yo]),v=new Uint32Array(4),x=new Int32Array(4),S=new b,E=null,M=null,P=[],F=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,k=!1,O=null,Z=null,H=null,V=null;this._outputColorSpace=si;let q=0,W=0,ie=null,ge=-1,Ae=null,ye=new it,Me=new it,ee=null,de=new ue(0),le=0,_e=t.width,Be=t.height,$=1,R=null,T=null,C=new it(0,0,_e,Be),N=new it(0,0,_e,Be),y=!1,D=new dn,I=!1,A=!1,G=new Ue,X=new b,Y=new it,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function be(){return ie===null?$:1}let pe,Pe,Q,ae,ne,ve,nt,$e,mt,Yt,we,tt,Ve,Dt,rt,St,dt,di,xi,Vn,Fi,Sn,va,B=i;function Tu(w,z){return t.getContext(w,z)}try{let w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Eu,!1),t.addEventListener("webglcontextrestored",Au,!1),t.addEventListener("webglcontextcreationerror",Cu,!1),B===null){let z="webgl2";if(B=Tu(z,w),B===null)throw Tu(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Ce("WebGLRenderer: "+w.message),w}function wu(){pe=new vf(B),pe.init(),Fi=new Gg(B,pe),Pe=new pf(B,pe,e,Fi),Q=new Bg(B,pe),Pe.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),Z=B.createFramebuffer(),H=B.createFramebuffer(),V=B.createFramebuffer(),ae=new yf(B),ne=new Ag,ve=new zg(B,pe,Q,ne,Pe,Fi,ae),nt=new gf(U),$e=new lf(B),Sn=new uf(B,$e),mt=new _f(B,$e,ae,Sn),Yt=new Sf(B,mt,$e,Sn,ae),di=new Mf(B,Pe,ve),rt=new mf(ne),we=new Eg(U,nt,pe,Pe,Sn,rt),tt=new kg(U,ne),Ve=new Rg,Dt=new Ug(pe),dt=new hf(U,nt,Q,Yt,f,l),St=new Og(U,Yt,Pe),va=new Hg(B,ae,Pe,Q),xi=new df(B,pe,ae),Vn=new xf(B,pe,ae),ae.programs=we.programs,U.capabilities=Pe,U.extensions=pe,U.properties=ne,U.renderLists=Ve,U.shadowMap=St,U.state=Q,U.info=ae}wu(),m!==ci&&(L=new Tf(m,t.width,t.height,o,r,s));let gt=new nu(U,B);function Eu(w){w.preventDefault(),Dh("WebGLRenderer: Context Lost."),k=!0}function Au(){Dh("WebGLRenderer: Context Restored."),k=!1;let w=ae.autoReset,z=St.enabled,j=St.autoUpdate,K=St.needsUpdate,J=St.type;wu(),ae.autoReset=w,St.enabled=z,St.autoUpdate=j,St.needsUpdate=K,St.type=J}function Cu(w){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ru(w){let z=w.target;z.removeEventListener("dispose",Ru),(function(j){(function(K){let J=ne.get(K).programs;J!==void 0&&(J.forEach(function(oe){we.releaseProgram(oe)}),K.isShaderMaterial&&we.releaseShaderCache(K))})(j),ne.remove(j)})(z)}function Pu(w,z,j){w.transparent===!0&&w.side===at&&w.forceSinglePass===!1?(w.side=Ht,w.needsUpdate=!0,xa(w,z,j),w.side=Bn,w.needsUpdate=!0,xa(w,z,j),w.side=at):xa(w,z,j)}this.xr=gt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let w=pe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=pe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(_e,Be,!1))},this.getSize=function(w){return w.set(_e,Be)},this.setSize=function(w,z,j=!0){gt.isPresenting?Ee("WebGLRenderer: Can't change size while VR device is presenting."):(_e=w,Be=z,t.width=Math.floor(w*$),t.height=Math.floor(z*$),j===!0&&(t.style.width=w+"px",t.style.height=z+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,w,z))},this.getDrawingBufferSize=function(w){return w.set(_e*$,Be*$).floor()},this.setDrawingBufferSize=function(w,z,j){_e=w,Be=z,$=j,t.width=Math.floor(w*j),t.height=Math.floor(z*j),this.setViewport(0,0,w,z)},this.setEffects=function(w){if(m!==ci){if(w){for(let z=0;z<w.length;z++)if(w[z].isOutputPass===!0){Ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])}else Ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(w){return w.copy(ye)},this.getViewport=function(w){return w.copy(C)},this.setViewport=function(w,z,j,K){w.isVector4?C.set(w.x,w.y,w.z,w.w):C.set(w,z,j,K),Q.viewport(ye.copy(C).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(N)},this.setScissor=function(w,z,j,K){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,z,j,K),Q.scissor(Me.copy(N).multiplyScalar($).round())},this.getScissorTest=function(){return y},this.setScissorTest=function(w){Q.setScissorTest(y=w)},this.setOpaqueSort=function(w){R=w},this.setTransparentSort=function(w){T=w},this.getClearColor=function(w){return w.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,j=!0){let K=0;if(w){let J=!1;if(ie!==null){let oe=ie.texture.format;J=_.has(oe)}if(J){let oe=ie.texture.type,me=g.has(oe),xe=dt.getClearColor(),Te=dt.getClearAlpha(),Ie=xe.r,qe=xe.g,Ye=xe.b;me?(v[0]=Ie,v[1]=qe,v[2]=Ye,v[3]=Te,B.clearBufferuiv(B.COLOR,0,v)):(x[0]=Ie,x[1]=qe,x[2]=Ye,x[3]=Te,B.clearBufferiv(B.COLOR,0,x))}else K|=B.COLOR_BUFFER_BIT}z&&(K|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Eu,!1),t.removeEventListener("webglcontextrestored",Au,!1),t.removeEventListener("webglcontextcreationerror",Cu,!1),dt.dispose(),Ve.dispose(),Dt.dispose(),ne.dispose(),nt.dispose(),Yt.dispose(),Sn.dispose(),va.dispose(),we.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Iu),gt.removeEventListener("sessionend",Lu),kn.stop()},this.renderBufferDirect=function(w,z,j,K,J,oe){z===null&&(z=re);let me=J.isMesh&&J.matrixWorld.determinantAffine()<0,xe=(function(We,ct,Ut,Le,Oe){ct.isScene!==!0&&(ct=re),ve.resetTextureUnits();let yi=ct.fog,Fl=Le.isMeshStandardMaterial||Le.isMeshLambertMaterial||Le.isMeshPhongMaterial?ct.environment:null,ya=ie===null?U.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Xe.workingColorSpace,cs=Le.isMeshStandardMaterial||Le.isMeshLambertMaterial&&!Le.envMap||Le.isMeshPhongMaterial&&!Le.envMap,Oi=nt.get(Le.envMap||Fl,cs),ur=Le.vertexColors===!0&&!!Ut.attributes.color&&Ut.attributes.color.itemSize===4,tn=!!Ut.attributes.tangent&&(!!Le.normalMap||Le.anisotropy>0),Ol=!!Ut.morphAttributes.position,dr=!!Ut.morphAttributes.normal,Sm=!!Ut.morphAttributes.color,Bu=Ri;Le.toneMapped&&(ie!==null&&ie.isXRRenderTarget!==!0||(Bu=U.toneMapping));let zu=Ut.morphAttributes.position||Ut.morphAttributes.normal||Ut.morphAttributes.color,bm=zu!==void 0?zu.length:0,De=ne.get(Le),Hn=M.state.lights;if(I===!0&&(A===!0||We!==Ae)){let _t=We===Ae&&Le.id===ge;rt.setState(Le,We,_t)}let Mi=!1;Le.version===De.__version?De.needsLights&&De.lightsStateVersion!==Hn.state.version||De.outputColorSpace!==ya||Oe.isBatchedMesh&&De.batching===!1?Mi=!0:Oe.isBatchedMesh||De.batching!==!0?Oe.isBatchedMesh&&De.batchingColor===!0&&Oe.colorTexture===null||Oe.isBatchedMesh&&De.batchingColor===!1&&Oe.colorTexture!==null||Oe.isInstancedMesh&&De.instancing===!1?Mi=!0:Oe.isInstancedMesh||De.instancing!==!0?Oe.isSkinnedMesh&&De.skinning===!1?Mi=!0:Oe.isSkinnedMesh||De.skinning!==!0?Oe.isInstancedMesh&&De.instancingColor===!0&&Oe.instanceColor===null||Oe.isInstancedMesh&&De.instancingColor===!1&&Oe.instanceColor!==null||Oe.isInstancedMesh&&De.instancingMorph===!0&&Oe.morphTexture===null||Oe.isInstancedMesh&&De.instancingMorph===!1&&Oe.morphTexture!==null||De.envMap!==Oi||Le.fog===!0&&De.fog!==yi?Mi=!0:De.numClippingPlanes===void 0||De.numClippingPlanes===rt.numPlanes&&De.numIntersection===rt.numIntersection?(De.vertexAlphas!==ur||De.vertexTangents!==tn||De.morphTargets!==Ol||De.morphNormals!==dr||De.morphColors!==Sm||De.toneMapping!==Bu||De.morphTargetsCount!==bm||!!De.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Mi=!0):Mi=!0:Mi=!0:Mi=!0:Mi=!0:(Mi=!0,De.__version=Le.version);let bn=De.currentProgram;Mi===!0&&(bn=xa(Le,ct,Oe),O&&Le.isNodeMaterial&&O.onUpdateProgram(Le,bn,De));let Gu=!1,pr=!1,Bl=!1,ht=bn.getUniforms(),pi=De.uniforms;if(Q.useProgram(bn.program)&&(Gu=!0,pr=!0,Bl=!0),Le.id!==ge&&(ge=Le.id,pr=!0),De.needsLights){let _t=(function(zi,Gl){if(zi.length===0)return null;if(zi.length===1)return zi[0].texture!==null?zi[0]:null;S.setFromMatrixPosition(Gl.matrixWorld);for(let mr=0,Tm=zi.length;mr<Tm;mr++){let Vl=zi[mr];if(Vl.texture!==null&&Vl.boundingBox.containsPoint(S))return Vl}return null})(M.state.lightProbeGridArray,Oe);De.lightProbeGrid!==_t&&(De.lightProbeGrid=_t,pr=!0)}if(Gu||Ae!==We){Q.buffers.depth.getReversed()&&We.reversedDepth!==!0&&(We._reversedDepth=!0,We.updateProjectionMatrix()),ht.setValue(B,"projectionMatrix",We.projectionMatrix),ht.setValue(B,"viewMatrix",We.matrixWorldInverse);let _t=ht.map.cameraPosition;_t!==void 0&&_t.setValue(B,X.setFromMatrixPosition(We.matrixWorld)),Pe.logarithmicDepthBuffer&&ht.setValue(B,"logDepthBufFC",2/(Math.log(We.far+1)/Math.LN2)),(Le.isMeshPhongMaterial||Le.isMeshToonMaterial||Le.isMeshLambertMaterial||Le.isMeshBasicMaterial||Le.isMeshStandardMaterial||Le.isShaderMaterial)&&ht.setValue(B,"isOrthographic",We.isOrthographicCamera===!0),Ae!==We&&(Ae=We,pr=!0,Bl=!0)}if(De.needsLights&&(Hn.state.directionalShadowMap.length>0&&ht.setValue(B,"directionalShadowMap",Hn.state.directionalShadowMap,ve),Hn.state.spotShadowMap.length>0&&ht.setValue(B,"spotShadowMap",Hn.state.spotShadowMap,ve),Hn.state.pointShadowMap.length>0&&ht.setValue(B,"pointShadowMap",Hn.state.pointShadowMap,ve)),Oe.isSkinnedMesh){ht.setOptional(B,Oe,"bindMatrix"),ht.setOptional(B,Oe,"bindMatrixInverse");let _t=Oe.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),ht.setValue(B,"boneTexture",_t.boneTexture,ve))}Oe.isBatchedMesh&&(ht.setOptional(B,Oe,"batchingTexture"),ht.setValue(B,"batchingTexture",Oe._matricesTexture,ve),ht.setOptional(B,Oe,"batchingIdTexture"),ht.setValue(B,"batchingIdTexture",Oe._indirectTexture,ve),ht.setOptional(B,Oe,"batchingColorTexture"),Oe._colorsTexture!==null&&ht.setValue(B,"batchingColorTexture",Oe._colorsTexture,ve));let zl=Ut.morphAttributes;if(zl.position===void 0&&zl.normal===void 0&&zl.color===void 0||di.update(Oe,Ut,bn),(pr||De.receiveShadow!==Oe.receiveShadow)&&(De.receiveShadow=Oe.receiveShadow,ht.setValue(B,"receiveShadow",Oe.receiveShadow)),(Le.isMeshStandardMaterial||Le.isMeshLambertMaterial||Le.isMeshPhongMaterial)&&Le.envMap===null&&ct.environment!==null&&(pi.envMapIntensity.value=ct.environmentIntensity),pi.dfgLUT!==void 0&&(pi.dfgLUT.value=(Zi===null&&(Zi=new Is(Wg,16,16,ir,Yi),Zi.name="DFG_LUT",Zi.minFilter=Gt,Zi.magFilter=Gt,Zi.wrapS=Ln,Zi.wrapT=Ln,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi)),pr){if(ht.setValue(B,"toneMappingExposure",U.toneMappingExposure),De.needsLights&&(Si=Bl,(Bi=pi).ambientLightColor.needsUpdate=Si,Bi.lightProbe.needsUpdate=Si,Bi.directionalLights.needsUpdate=Si,Bi.directionalLightShadows.needsUpdate=Si,Bi.pointLights.needsUpdate=Si,Bi.pointLightShadows.needsUpdate=Si,Bi.spotLights.needsUpdate=Si,Bi.spotLightShadows.needsUpdate=Si,Bi.rectAreaLights.needsUpdate=Si,Bi.hemisphereLights.needsUpdate=Si),yi&&Le.fog===!0&&tt.refreshFogUniforms(pi,yi),tt.refreshMaterialUniforms(pi,Le,$,Be,M.state.transmissionRenderTarget[We.id]),De.needsLights&&De.lightProbeGrid){let _t=De.lightProbeGrid;pi.probesSH.value=_t.texture,pi.probesMin.value.copy(_t.boundingBox.min),pi.probesMax.value.copy(_t.boundingBox.max),pi.probesResolution.value.copy(_t.resolution)}es.upload(B,Fu(De),pi,ve)}var Bi,Si;if(Le.isShaderMaterial&&Le.uniformsNeedUpdate===!0&&(es.upload(B,Fu(De),pi,ve),Le.uniformsNeedUpdate=!1),Le.isSpriteMaterial&&ht.setValue(B,"center",Oe.center),ht.setValue(B,"modelViewMatrix",Oe.modelViewMatrix),ht.setValue(B,"normalMatrix",Oe.normalMatrix),ht.setValue(B,"modelMatrix",Oe.matrixWorld),Le.uniformsGroups!==void 0){let _t=Le.uniformsGroups;for(let zi=0,Gl=_t.length;zi<Gl;zi++){let mr=_t[zi];va.update(mr,bn),va.bind(mr,bn)}}return bn})(w,z,j,K,J);Q.setMaterial(K,me);let Te=j.index,Ie=1;if(K.wireframe===!0){if(Te=mt.getWireframeAttribute(j),Te===void 0)return;Ie=2}let qe=j.drawRange,Ye=j.attributes.position,Re=qe.start*Ie,Ke=(qe.start+qe.count)*Ie;oe!==null&&(Re=Math.max(Re,oe.start*Ie),Ke=Math.min(Ke,(oe.start+oe.count)*Ie)),Te!==null?(Re=Math.max(Re,0),Ke=Math.min(Ke,Te.count)):Ye!=null&&(Re=Math.max(Re,0),Ke=Math.min(Ke,Ye.count));let bt=Ke-Re;if(bt<0||bt===1/0)return;let vt;Sn.setup(J,K,xe,j,Te);let lt=xi;if(Te!==null&&(vt=$e.get(Te),lt=Vn,lt.setIndex(vt)),J.isMesh)K.wireframe===!0?(Q.setLineWidth(K.wireframeLinewidth*be()),lt.setMode(B.LINES)):lt.setMode(B.TRIANGLES);else if(J.isLine){let We=K.linewidth;We===void 0&&(We=1),Q.setLineWidth(We*be()),J.isLineSegments?lt.setMode(B.LINES):J.isLineLoop?lt.setMode(B.LINE_LOOP):lt.setMode(B.LINE_STRIP)}else J.isPoints?lt.setMode(B.POINTS):J.isSprite&&lt.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))lt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let We=J._multiDrawStarts,ct=J._multiDrawCounts,Ut=J._multiDrawCount,Le=Te?$e.get(Te).bytesPerElement:1,Oe=ne.get(K).currentProgram.getUniforms();for(let yi=0;yi<Ut;yi++)Oe.setValue(B,"_gl_DrawID",yi),lt.render(We[yi]/Le,ct[yi])}else if(J.isInstancedMesh)lt.renderInstances(Re,bt,J.count);else if(j.isInstancedBufferGeometry){let We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ct=Math.min(j.instanceCount,We);lt.renderInstances(Re,bt,ct)}else lt.render(Re,bt)},this.compile=function(w,z,j=null){j===null&&(j=w),M=Dt.get(j),M.init(z),F.push(M),j.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),w!==j&&w.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),M.setupLights();let K=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let oe=J.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){let xe=oe[me];Pu(xe,j,J),K.add(xe)}else Pu(oe,j,J),K.add(oe)}),M=F.pop(),K},this.compileAsync=function(w,z,j=null){let K=this.compile(w,z,j);return new Promise(J=>{function oe(){K.forEach(function(me){ne.get(me).currentProgram.isReady()&&K.delete(me)}),K.size!==0?setTimeout(oe,10):J(w)}pe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ul=null;function Iu(){kn.stop()}function Lu(){kn.start()}let kn=new Bp;function Nl(w,z,j,K){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLightProbeGrid)M.pushLightProbeGrid(w);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||D.intersectsSprite(w)){K&&Y.setFromMatrixPosition(w.matrixWorld).applyMatrix4(G);let oe=Yt.update(w),me=w.material;me.visible&&E.push(w,oe,me,j,Y.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||D.intersectsObject(w))){let oe=Yt.update(w),me=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Y.copy(w.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Y.copy(oe.boundingSphere.center)),Y.applyMatrix4(w.matrixWorld).applyMatrix4(G)),Array.isArray(me)){let xe=oe.groups;for(let Te=0,Ie=xe.length;Te<Ie;Te++){let qe=xe[Te],Ye=me[qe.materialIndex];Ye&&Ye.visible&&E.push(w,oe,Ye,j,Y.z,qe)}}else me.visible&&E.push(w,oe,me,j,Y.z,null)}}let J=w.children;for(let oe=0,me=J.length;oe<me;oe++)Nl(J[oe],z,j,K)}function Du(w,z,j,K){let{opaque:J,transmissive:oe,transparent:me}=w;M.setupLightsView(j),I===!0&&rt.setGlobalState(U.clippingPlanes,j),K&&Q.viewport(ye.copy(K)),J.length>0&&_a(J,z,j),oe.length>0&&_a(oe,z,j),me.length>0&&_a(me,z,j),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Uu(w,z,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[K.id]===void 0){let Ye=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[K.id]=new oi(1,1,{generateMipmaps:!0,type:Ye?Yi:ci,minFilter:er,samples:Math.max(4,Pe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let J=M.state.transmissionRenderTarget[K.id],oe=K.viewport||ye;J.setSize(oe.z*U.transmissionResolutionScale,oe.w*U.transmissionResolutionScale);let me=U.getRenderTarget(),xe=U.getActiveCubeFace(),Te=U.getActiveMipmapLevel();U.setRenderTarget(J),U.getClearColor(de),le=U.getClearAlpha(),le<1&&U.setClearColor(16777215,.5),U.clear(),Se&&dt.render(j);let Ie=U.toneMapping;U.toneMapping=Ri;let qe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),M.setupLightsView(K),I===!0&&rt.setGlobalState(U.clippingPlanes,K),_a(w,j,K),ve.updateMultisampleRenderTarget(J),ve.updateRenderTargetMipmap(J),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Re=0,Ke=z.length;Re<Ke;Re++){let bt=z[Re],{object:vt,geometry:lt,material:We,group:ct}=bt;if(We.side===at&&vt.layers.test(K.layers)){let Ut=We.side;We.side=Ht,We.needsUpdate=!0,Nu(vt,j,K,lt,We,ct),We.side=Ut,We.needsUpdate=!0,Ye=!0}}Ye===!0&&(ve.updateMultisampleRenderTarget(J),ve.updateRenderTargetMipmap(J))}U.setRenderTarget(me,xe,Te),U.setClearColor(de,le),qe!==void 0&&(K.viewport=qe),U.toneMapping=Ie}function _a(w,z,j){let K=z.isScene===!0?z.overrideMaterial:null;for(let J=0,oe=w.length;J<oe;J++){let me=w[J],{object:xe,geometry:Te,group:Ie}=me,qe=me.material;qe.allowOverride===!0&&K!==null&&(qe=K),xe.layers.test(j.layers)&&Nu(xe,z,j,Te,qe,Ie)}}function Nu(w,z,j,K,J,oe){w.onBeforeRender(U,z,j,K,J,oe),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(U,z,j,K,w,oe),J.transparent===!0&&J.side===at&&J.forceSinglePass===!1?(J.side=Ht,J.needsUpdate=!0,U.renderBufferDirect(j,z,K,J,w,oe),J.side=Bn,J.needsUpdate=!0,U.renderBufferDirect(j,z,K,J,w,oe),J.side=at):U.renderBufferDirect(j,z,K,J,w,oe),w.onAfterRender(U,z,j,K,J,oe)}function xa(w,z,j){z.isScene!==!0&&(z=re);let K=ne.get(w),J=M.state.lights,oe=M.state.shadowsArray,me=J.state.version,xe=we.getParameters(w,J.state,oe,z,j,M.state.lightProbeGridArray),Te=we.getProgramCacheKey(xe),Ie=K.programs;K.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,K.fog=z.fog;let qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;K.envMap=nt.get(w.envMap||K.environment,qe),K.envMapRotation=K.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Ie===void 0&&(w.addEventListener("dispose",Ru),Ie=new Map,K.programs=Ie);let Ye=Ie.get(Te);if(Ye!==void 0){if(K.currentProgram===Ye&&K.lightsStateVersion===me)return Ou(w,xe),Ye}else xe.uniforms=we.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,j,xe),w.onBeforeCompile(xe,U),Ye=we.acquireProgram(xe,Te),Ie.set(Te,Ye),K.uniforms=xe.uniforms;let Re=K.uniforms;return(w.isShaderMaterial||w.isRawShaderMaterial)&&w.clipping!==!0||(Re.clippingPlanes=rt.uniform),Ou(w,xe),K.needsLights=(function(Ke){return Ke.isMeshLambertMaterial||Ke.isMeshToonMaterial||Ke.isMeshPhongMaterial||Ke.isMeshStandardMaterial||Ke.isShadowMaterial||Ke.isShaderMaterial&&Ke.lights===!0})(w),K.lightsStateVersion=me,K.needsLights&&(Re.ambientLightColor.value=J.state.ambient,Re.lightProbe.value=J.state.probe,Re.directionalLights.value=J.state.directional,Re.directionalLightShadows.value=J.state.directionalShadow,Re.spotLights.value=J.state.spot,Re.spotLightShadows.value=J.state.spotShadow,Re.rectAreaLights.value=J.state.rectArea,Re.ltc_1.value=J.state.rectAreaLTC1,Re.ltc_2.value=J.state.rectAreaLTC2,Re.pointLights.value=J.state.point,Re.pointLightShadows.value=J.state.pointShadow,Re.hemisphereLights.value=J.state.hemi,Re.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Re.spotLightMatrix.value=J.state.spotLightMatrix,Re.spotLightMap.value=J.state.spotLightMap,Re.pointShadowMatrix.value=J.state.pointShadowMatrix),K.lightProbeGrid=M.state.lightProbeGridArray.length>0,K.currentProgram=Ye,K.uniformsList=null,Ye}function Fu(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=es.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Ou(w,z){let j=ne.get(w);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}kn.setAnimationLoop(function(w){Ul&&Ul(w)}),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(w){Ul=w,gt.setAnimationLoop(w),w===null?kn.stop():kn.start()},gt.addEventListener("sessionstart",Iu),gt.addEventListener("sessionend",Lu),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0)return void Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(k===!0)return;O!==null&&O.renderStart(w,z);let j=gt.enabled===!0&&gt.isPresenting===!0,K=L!==null&&(ie===null||j)&&L.begin(U,ie);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),gt.enabled!==!0||gt.isPresenting!==!0||L!==null&&L.isCompositing()!==!1||(gt.cameraAutoUpdate===!0&&gt.updateCamera(z),z=gt.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,z,ie),M=Dt.get(w,F.length),M.init(z),M.state.textureUnits=ve.getTextureUnits(),F.push(M),G.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),D.setFromProjectionMatrix(G,hn,z.reversedDepth),A=this.localClippingEnabled,I=rt.init(this.clippingPlanes,A),E=Ve.get(w,P.length),E.init(),P.push(E),gt.enabled===!0&&gt.isPresenting===!0){let oe=U.xr.getDepthSensingMesh();oe!==null&&Nl(oe,z,-1/0,U.sortObjects)}Nl(w,z,0,U.sortObjects),E.finish(),U.sortObjects===!0&&E.sort(R,T,z.reversedDepth),Se=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,Se&&dt.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),I===!0&&rt.beginShadows();let J=M.state.shadowsArray;if(St.render(J,w,z),I===!0&&rt.endShadows(),(K&&L.hasRenderPass())===!1){let oe=E.opaque,me=E.transmissive;if(M.setupLights(),z.isArrayCamera){let xe=z.cameras;if(me.length>0)for(let Te=0,Ie=xe.length;Te<Ie;Te++)Uu(oe,me,w,xe[Te]);Se&&dt.render(w);for(let Te=0,Ie=xe.length;Te<Ie;Te++){let qe=xe[Te];Du(E,w,qe,qe.viewport)}}else me.length>0&&Uu(oe,me,w,z),Se&&dt.render(w),Du(E,w,z)}ie!==null&&W===0&&(ve.updateMultisampleRenderTarget(ie),ve.updateRenderTargetMipmap(ie)),K&&L.end(U),w.isScene===!0&&w.onAfterRender(U,w,z),Sn.resetDefaultState(),ge=-1,Ae=null,F.pop(),F.length>0?(M=F[F.length-1],ve.setTextureUnits(M.state.textureUnits),I===!0&&rt.setGlobalState(U.clippingPlanes,M.state.camera)):M=null,P.pop(),E=P.length>0?P[P.length-1]:null,O!==null&&O.renderEnd()},this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(w,z,j){let K=ne.get(w);K.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ne.get(w.texture).__webglTexture=z,ne.get(w.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){let j=ne.get(w);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,j=0){ie=w,q=z,W=j;let K=null,J=!1,oe=!1;if(w){let me=ne.get(w);if(me.__useDefaultFramebuffer!==void 0)return Q.bindFramebuffer(B.FRAMEBUFFER,me.__webglFramebuffer),ye.copy(w.viewport),Me.copy(w.scissor),ee=w.scissorTest,Q.viewport(ye),Q.scissor(Me),Q.setScissorTest(ee),void(ge=-1);if(me.__webglFramebuffer===void 0)ve.setupRenderTarget(w);else if(me.__hasExternalTextures)ve.rebindTextures(w,ne.get(w.texture).__webglTexture,ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ie=w.depthTexture;if(me.__boundDepthTexture!==Ie){if(Ie!==null&&ne.has(Ie)&&(w.width!==Ie.image.width||w.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(w)}}let xe=w.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(oe=!0);let Te=ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(K=Array.isArray(Te[z])?Te[z][j]:Te[z],J=!0):K=w.samples>0&&ve.useMultisampledRTT(w)===!1?ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Te)?Te[j]:Te,ye.copy(w.viewport),Me.copy(w.scissor),ee=w.scissorTest}else ye.copy(C).multiplyScalar($).floor(),Me.copy(N).multiplyScalar($).floor(),ee=y;if(j!==0&&(K=Z),Q.bindFramebuffer(B.FRAMEBUFFER,K)&&Q.drawBuffers(w,K),Q.viewport(ye),Q.scissor(Me),Q.setScissorTest(ee),J){let me=ne.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,me.__webglTexture,j)}else if(oe){let me=z;for(let xe=0;xe<w.textures.length;xe++){let Te=ne.get(w.textures[xe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+xe,Te.__webglTexture,j,me)}}else if(w!==null&&j!==0){let me=ne.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,me.__webglTexture,j)}ge=-1},this.readRenderTargetPixels=function(w,z,j,K,J,oe,me,xe=0){if(!w||!w.isWebGLRenderTarget)return void Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Te=Te[me]),Te){Q.bindFramebuffer(B.FRAMEBUFFER,Te);try{let Ie=w.textures[xe],qe=Ie.format,Ye=Ie.type;if(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+xe),!Pe.textureFormatReadable(qe))return void Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Ye))return void Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");z>=0&&z<=w.width-K&&j>=0&&j<=w.height-J&&B.readPixels(z,j,K,J,Fi.convert(qe),Fi.convert(Ye),oe)}finally{let Ie=ie!==null?ne.get(ie).__webglFramebuffer:null;Q.bindFramebuffer(B.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(w,z,j,K,J,oe,me,xe=0){if(!w||!w.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Te=Te[me]),Te){if(z>=0&&z<=w.width-K&&j>=0&&j<=w.height-J){Q.bindFramebuffer(B.FRAMEBUFFER,Te);let Ie=w.textures[xe],qe=Ie.format,Ye=Ie.type;if(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+xe),!Pe.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Re),B.bufferData(B.PIXEL_PACK_BUFFER,oe.byteLength,B.STREAM_READ),B.readPixels(z,j,K,J,Fi.convert(qe),Fi.convert(Ye),0);let Ke=ie!==null?ne.get(ie).__webglFramebuffer:null;Q.bindFramebuffer(B.FRAMEBUFFER,Ke);let bt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await cp(B,bt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Re),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,oe),B.deleteBuffer(Re),B.deleteSync(bt),oe}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,j=0){let K=Math.pow(2,-j),J=Math.floor(w.image.width*K),oe=Math.floor(w.image.height*K),me=z!==null?z.x:0,xe=z!==null?z.y:0;ve.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,me,xe,J,oe),Q.unbindTexture()},this.copyTextureToTexture=function(w,z,j=null,K=null,J=0,oe=0){let me,xe,Te,Ie,qe,Ye,Re,Ke,bt,vt=w.isCompressedTexture?w.mipmaps[oe]:w.image;if(j!==null)me=j.max.x-j.min.x,xe=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,Ie=j.min.x,qe=j.min.y,Ye=j.isBox3?j.min.z:0;else{let Oi=Math.pow(2,-J);me=Math.floor(vt.width*Oi),xe=Math.floor(vt.height*Oi),Te=w.isDataArrayTexture?vt.depth:w.isData3DTexture?Math.floor(vt.depth*Oi):1,Ie=0,qe=0,Ye=0}K!==null?(Re=K.x,Ke=K.y,bt=K.z):(Re=0,Ke=0,bt=0);let lt=Fi.convert(z.format),We=Fi.convert(z.type),ct;z.isData3DTexture?(ve.setTexture3D(z,0),ct=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ve.setTexture2DArray(z,0),ct=B.TEXTURE_2D_ARRAY):(ve.setTexture2D(z,0),ct=B.TEXTURE_2D),Q.activeTexture(B.TEXTURE0),Q.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),Q.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Q.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let Ut=Q.getParameter(B.UNPACK_ROW_LENGTH),Le=Q.getParameter(B.UNPACK_IMAGE_HEIGHT),Oe=Q.getParameter(B.UNPACK_SKIP_PIXELS),yi=Q.getParameter(B.UNPACK_SKIP_ROWS),Fl=Q.getParameter(B.UNPACK_SKIP_IMAGES);Q.pixelStorei(B.UNPACK_ROW_LENGTH,vt.width),Q.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vt.height),Q.pixelStorei(B.UNPACK_SKIP_PIXELS,Ie),Q.pixelStorei(B.UNPACK_SKIP_ROWS,qe),Q.pixelStorei(B.UNPACK_SKIP_IMAGES,Ye);let ya=w.isDataArrayTexture||w.isData3DTexture,cs=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){let Oi=ne.get(w),ur=ne.get(z),tn=ne.get(Oi.__renderTarget),Ol=ne.get(ur.__renderTarget);Q.bindFramebuffer(B.READ_FRAMEBUFFER,tn.__webglFramebuffer),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ol.__webglFramebuffer);for(let dr=0;dr<Te;dr++)ya&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ne.get(w).__webglTexture,J,Ye+dr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ne.get(z).__webglTexture,oe,bt+dr)),B.blitFramebuffer(Ie,qe,me,xe,Re,Ke,me,xe,B.DEPTH_BUFFER_BIT,B.NEAREST);Q.bindFramebuffer(B.READ_FRAMEBUFFER,null),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||ne.has(w)){let Oi=ne.get(w),ur=ne.get(z);Q.bindFramebuffer(B.READ_FRAMEBUFFER,H),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,V);for(let tn=0;tn<Te;tn++)ya?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oi.__webglTexture,J,Ye+tn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oi.__webglTexture,J),cs?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ur.__webglTexture,oe,bt+tn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ur.__webglTexture,oe),J!==0?B.blitFramebuffer(Ie,qe,me,xe,Re,Ke,me,xe,B.COLOR_BUFFER_BIT,B.NEAREST):cs?B.copyTexSubImage3D(ct,oe,Re,Ke,bt+tn,Ie,qe,me,xe):B.copyTexSubImage2D(ct,oe,Re,Ke,Ie,qe,me,xe);Q.bindFramebuffer(B.READ_FRAMEBUFFER,null),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else cs?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(ct,oe,Re,Ke,bt,me,xe,Te,lt,We,vt.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(ct,oe,Re,Ke,bt,me,xe,Te,lt,vt.data):B.texSubImage3D(ct,oe,Re,Ke,bt,me,xe,Te,lt,We,vt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,oe,Re,Ke,me,xe,lt,We,vt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,oe,Re,Ke,vt.width,vt.height,lt,vt.data):B.texSubImage2D(B.TEXTURE_2D,oe,Re,Ke,me,xe,lt,We,vt);Q.pixelStorei(B.UNPACK_ROW_LENGTH,Ut),Q.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Le),Q.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),Q.pixelStorei(B.UNPACK_SKIP_ROWS,yi),Q.pixelStorei(B.UNPACK_SKIP_IMAGES,Fl),oe===0&&z.generateMipmaps&&B.generateMipmap(ct),Q.unbindTexture()},this.initRenderTarget=function(w){ne.get(w).__webglFramebuffer===void 0&&ve.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ve.setTextureCube(w,0):w.isData3DTexture?ve.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ve.setTexture2DArray(w,0):ve.setTexture2D(w,0),Q.unbindTexture()},this.resetState=function(){q=0,W=0,ie=null,Q.reset(),Sn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};var pt=(n,e)=>-7+Math.sin(n*.045)*2.2+Math.cos(e*.05)*1.8+Math.sin((n+e)*.07)*.8,ru=Math.PI*2,hi=(n,e,t)=>Math.max(e,Math.min(t,n)),sa=(n,e=0)=>Number.isFinite(n)?n:e,pl=n=>hi(sa(n),-1,1),fl=n=>((n+Math.PI)%ru+ru)%ru-Math.PI,Ki=n=>({x:n.x,y:n.y,z:n.z}),Xp=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y,n.z-e.z),ml=(n,e,t,i)=>n+(e-n)*(1-Math.exp(-t*i)),Xg=(n,e,t)=>fl(n+hi(fl(e-n),-t,t)),jp=(n,e)=>({x:Math.sin(n)*Math.cos(e),y:Math.sin(e),z:-Math.cos(n)*Math.cos(e)});function su(){return{position:{x:0,y:10,z:22},previousPosition:{x:0,y:10,z:22},velocity:{x:0,y:0,z:0},yaw:0,pitch:0,boost:0,cooldown:0,airborne:!1,airTime:0,breachReady:!0,speed:0,depth:8,distance:0,elapsed:0,boundaryWarning:!1,feintTime:0,feintCooldown:0}}function au(n){return n.airborne||n.feintCooldown>0||n.feintTime>0?!1:(n.feintTime=.65,n.feintCooldown=12,!0)}function qp(n,e={},t=0){let i=hi(sa(t),0,.05),r=[];if(!i)return r;let s=n.position,a=n.velocity;if(n.previousPosition=Ki(s),n.elapsed+=i,n.cooldown=Math.max(0,n.cooldown-i),n.boost=Math.max(0,n.boost-i),n.feintTime=Math.max(0,n.feintTime-i),n.feintCooldown=Math.max(0,n.feintCooldown-i),e.skill&&au(n),n.yaw=fl(n.yaw+pl(e.turn)*1.75*i+hi(sa(e.lookYaw),-Math.PI,Math.PI)),n.pitch=hi(n.pitch+hi(sa(e.lookPitch),-Math.PI,Math.PI),-1.35,1.35),e.boost&&n.cooldown===0&&!n.airborne&&(n.boost=.72,n.cooldown=4),n.airborne)n.airTime+=i,a.y-=15*i,a.x*=Math.exp(-.18*i),a.z*=Math.exp(-.18*i);else{s.y<18-1.2&&(n.breachReady=!0);let c=pl(e.throttle);n.boost>0&&c===0&&!pl(e.lift)&&(c=1);let h=jp(n.yaw,n.pitch),u={x:h.x*c,y:h.y*c+pl(e.lift)*.8,z:h.z*c},d=Math.max(1,Math.hypot(u.x,u.y,u.z)),p=n.boost>0?21:c<0?7.5:10;for(let _ of["x","y","z"])u[_]=u[_]/d*p;if(n.feintTime>0){let _=.65-n.feintTime,g=_<.16?-9:_<.56?7.5:0;u.x+=Math.cos(n.yaw)*g,u.z+=Math.sin(n.yaw)*g}let f=Math.hypot(s.x,s.z);if(f>132){let _=s.x/f,g=s.z/f,v=hi((f-132)/16,0,1),x=Math.max(0,u.x*_+u.z*g);u.x-=_*(x*v+5*v),u.z-=g*(x*v+5*v)}let m=n.feintTime>0?30:n.boost>0?5.5:3.6;a.x=ml(a.x,u.x,m,i),a.y=ml(a.y,u.y,m,i),a.z=ml(a.z,u.z,m,i)}s.x+=a.x*i,s.y+=a.y*i,s.z+=a.z*i,!n.airborne&&s.y>18?a.y>2.2&&n.breachReady?(n.airborne=!0,n.airTime=0,n.breachReady=!1,n.boost=0,n.feintTime=0,a.y=Math.min(a.y,8.5),s.y=18,r.push({type:"breach",position:Ki(s)})):(s.y=18,a.y=Math.min(0,a.y)):n.airborne&&s.y<=18&&(n.airborne=!1,n.airTime=0,a.y=Math.min(-2,a.y*.58),r.push({type:"splash",position:{x:s.x,y:18,z:s.z}}));let o=pt(s.x,s.z)+.7;s.y<o&&(s.y=o,a.y=Math.max(0,a.y));let l=Math.hypot(s.x,s.z);if(l>140&&!n.boundaryWarning?(n.boundaryWarning=!0,r.push({type:"boundary",position:Ki(s)})):l<136&&(n.boundaryWarning=!1),l>150){let c=s.x/l,h=s.z/l;s.x=c*150,s.z=h*150;let u=Math.max(0,a.x*c+a.z*h);a.x-=c*u,a.z-=h*u}return n.speed=Math.hypot(a.x,a.y,a.z),n.depth=Math.max(0,18-s.y),n.distance+=Xp(s,n.previousPosition),r}function gl(n,e,t,i,r){if(!Number.isFinite(r)||r<0)return!1;let s=n.x-t.x,a=n.y-t.y,o=n.z-t.z,l=e.x-i.x-s,c=e.y-i.y-a,h=e.z-i.z-o,u=l*l+c*c+h*h,d=u>1e-12?hi(-(s*l+a*c+o*h)/u,0,1):0;return(s+l*d)**2+(a+c*d)**2+(o+h*d)**2<=r*r}function ou(n,e){let t=[...String(n)].reduce((i,r)=>i*31+r.charCodeAt(0)>>>0,7);return{id:n,position:Ki(e),previousPosition:Ki(e),home:Ki(e),velocity:{x:0,y:0,z:0},yaw:fl(t%628/100),pitch:0,mode:"patrol",timer:0,elapsed:t%100/10,attackCooldown:0,lunge:0,lungeCooldown:1.8,warning:0}}function Yp(n,e,t,{safe:i=!1}={}){let r=hi(sa(t),0,.05),s=[];if(!r)return s;let a=n,o=a.position,l=e.position;a.previousPosition=Ki(o),a.timer+=r,a.elapsed+=r,a.attackCooldown=Math.max(0,a.attackCooldown-r),a.lunge=Math.max(0,a.lunge-r),a.lungeCooldown=Math.max(0,a.lungeCooldown-r);let c=Xp(o,l),h=i||e.airborne;if((a.mode==="telegraph"||a.mode==="chase")&&(h||c>36||a.mode==="chase"&&a.timer>=10.5)){let x=i?"safe":e.airborne?"surface":c>36?"range":"timeout";s.push({type:"escaped",id:a.id,reason:x,position:Ki(o)}),a.mode="recover",a.timer=0,a.lunge=0,a.warning=0}a.mode==="patrol"&&!h&&c<24?(a.mode="telegraph",a.timer=0,a.warning=1,s.push({type:"alert",id:a.id,position:Ki(o)})):a.mode==="telegraph"&&a.timer>=1.15?(a.mode="chase",a.timer=0,a.warning=0,a.lungeCooldown=1.2):a.mode==="recover"&&a.timer>=6&&(a.mode="patrol",a.timer=0);let u,d,p;a.mode==="telegraph"?(u=l,d=.7,p=.95):a.mode==="chase"?(a.lungeCooldown===0&&c<15&&(a.lunge=.65,a.lungeCooldown=2.8),u=l,d=a.lunge>0?13.5:9.2,p=a.lunge>0?.35:1.05):a.mode==="recover"?(u={x:o.x+(o.x-l.x),y:hi(a.home.y,pt(o.x,o.z)+2,16),z:o.z+(o.z-l.z)},d=5,p=1.2):(u={x:a.home.x+Math.sin(a.elapsed*.22)*8,y:a.home.y+Math.sin(a.elapsed*.33)*2,z:a.home.z+Math.cos(a.elapsed*.22)*8},d=2.6,p=.8),Math.hypot(o.x,o.z)>145&&(u={x:0,y:u.y,z:0});let f=u.x-o.x,m=u.y-o.y,_=u.z-o.z;a.yaw=Xg(a.yaw,Math.atan2(f,-_),p*r),a.pitch=hi(a.pitch+hi(Math.atan2(m,Math.hypot(f,_))-a.pitch,-p*r,p*r),-1.3,1.3);let g=jp(a.yaw,a.pitch);for(let x of["x","y","z"])a.velocity[x]=ml(a.velocity[x],g[x]*d,3.5,r),o[x]+=a.velocity[x]*r;o.y=hi(o.y,pt(o.x,o.z)+1,18-.7);let v=Math.hypot(o.x,o.z);return v>150&&(o.x*=150/v,o.z*=150/v),a.mode==="chase"&&!h&&a.attackCooldown===0&&gl(a.previousPosition,o,e.previousPosition||l,l,1.35)&&(s.push({type:"attack",id:a.id,position:Ki(o)}),a.attackCooldown=3,a.mode="recover",a.timer=0,a.lunge=0),s}var $i=Math.PI*2,vl={reef:{water:746103,deep:409678,sky:7319254,horizon:13231334,sand:13288356,rock:7900797,kelp:5605475,coral:[15569020,14393701,12219290,7518125],fog:.015,sun:3.7},kelp:{water:2318170,deep:1195586,sky:12967633,horizon:15133908,sand:12038282,rock:7634783,kelp:8165457,coral:[12948070,14202226,9214338,8894624],fog:.017,sun:3.25},abyss:{water:1194848,deep:533564,sky:8629461,horizon:13686504,sand:8755366,rock:6255753,kelp:4357510,coral:[11899604,7981258,8889309,13864887],fog:.018,sun:2.7}};function jg(n=27931){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var ft=new yt,qg=new b(0,1,0);function Xt(n,e,t,i,r=!0){if(!t.length)return null;let s=new Ds(n,e,t.length);return t.forEach((a,o)=>{ft.position.set(...a.p),ft.rotation.set(...a.r||[0,0,0]),a.q&&ft.quaternion.copy(a.q),ft.scale.set(...a.s||[1,1,1]),ft.updateMatrix(),s.setMatrixAt(o,ft.matrix),a.c!==void 0&&s.setColorAt(o,new ue(a.c))}),s.castShadow=r,s.receiveShadow=!0,s.computeBoundingSphere(),i.add(s),s}function is(n,e,t,i,r){let s=new b(...e),a=new b(...t),o=a.sub(s);n.push({p:s.addScaledVector(o,.5).toArray(),s:[i,o.length(),i],q:new Tt().setFromUnitVectors(qg,o.clone().normalize()),c:r})}function lu(n,e,t,i,r=32){let s=new Nn(n.map(h=>new b(...h))),a=new Fn(s,r,e,11,!1),o=a.attributes.position,l=a.attributes.normal;for(let h=0;h<o.count;h++){let u=Math.floor(h/12)/r,d=e*(.14*Math.sin(u*19)+.07*Math.cos(u*31));o.setXYZ(h,o.getX(h)+l.getX(h)*d,o.getY(h)+l.getY(h)*d,o.getZ(h)+l.getZ(h)*d)}a.computeVertexNormals();let c=new He(a,t);return c.castShadow=c.receiveShadow=!0,i.add(c),c}function Yg(n){let e=[],t=[],i=[];for(let[s,a]of n){let o=s.index?s.toNonIndexed():s.clone();if(o.applyMatrix4(a),e.push(...o.attributes.position.array),t.push(...o.attributes.normal.array),o.attributes.uv)i.push(...o.attributes.uv.array);else for(let l=0;l<o.attributes.position.count;l++)i.push(0,0);o.dispose()}let r=new ke;return r.setAttribute("position",new fe(e,3)),r.setAttribute("normal",new fe(t,3)),r.setAttribute("uv",new fe(i,2)),r}var _l=class{constructor(e,{coarse:t=!1,reduced:i=!1}={}){this.scene=e,this.coarse=t,this.reduced=i,this.root=new It,this.root.name="living-sea",e.add(this.root),this.uniforms={time:{value:0},water:{value:new ue},above:{value:0}},this.materials=[],this.rays=[],this.schools=[],this.obstacles=[],this.palette=vl.reef,this.biome="reef",this.air=0,this.random=jg(),this.fogColor=new ue,this.sunDirection=new b(-.36,.85,-.39).normalize(),this.makeMaterials(),this.makeLighting(),this.makeTerrain(),this.makeLandmarks(),this.makeReefs(),this.makeVegetation(),this.makeSurface(),this.makeSky(),this.makeAtmosphere(),this.makeSchools(),this.setBiome("reef")}material(e,{roughness:t=.72,sand:i=!1,rock:r=!1,sway:s=!1,wood:a=!1,brain:o=!1,coral:l=!1,...c}={}){let h=new kt({color:e,roughness:t,...c});return h.customProgramCacheKey=()=>`open-sea-5-${i}-${r}-${s}-${a}-${o}-${l}`,h.onBeforeCompile=u=>{u.uniforms.uSeaTime=this.uniforms.time;let d=`varying vec3 vSeaWorld; varying vec2 vSeaUv; uniform float uSeaTime;
`;u.vertexShader=d+u.vertexShader,u.fragmentShader=d+u.fragmentShader,s&&(u.vertexShader=u.vertexShader.replace("#include <begin_vertex>",`
        #include <begin_vertex>
        #ifdef USE_INSTANCING
          vec3 stemWorld=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;
          float swayStrength=pow(clamp((stemWorld.y+9.)*.065,0.,1.8),1.7);
          transformed.x+=sin(uSeaTime*.74+stemWorld.z*.12+stemWorld.y*.22)*swayStrength*.42/max(.12,length(instanceMatrix[0].xyz));
          transformed.z+=cos(uSeaTime*.56+stemWorld.x*.13+stemWorld.y*.19)*swayStrength*.2/max(.12,length(instanceMatrix[2].xyz));
        #endif
      `)),u.vertexShader=u.vertexShader.replace("#include <worldpos_vertex>",`
        #include <worldpos_vertex>
        vec4 seaPoint=vec4(transformed,1.);
        #ifdef USE_INSTANCING
          seaPoint=instanceMatrix*seaPoint;
        #endif
        vSeaWorld=(modelMatrix*seaPoint).xyz; vSeaUv=uv;
      `),u.fragmentShader=u.fragmentShader.replace("#include <color_fragment>",`
        #include <color_fragment>
        ${i?`float ripple=sin(vSeaWorld.z*4.6+sin(vSeaWorld.x*.31)*3.+sin(vSeaWorld.z*.12));
        float grain=fract(sin(dot(floor(vSeaWorld.xz*90.),vec2(12.9898,78.233)))*43758.5453);
        diffuseColor.rgb*=.94+ripple*.045+grain*.05;`:""}
        ${r?`float strata=sin(vSeaWorld.y*5.2+sin(vSeaWorld.x*.6)*2.+sin(vSeaWorld.z*.4));
        float pores=fract(sin(dot(floor(vSeaWorld*29.),vec3(127.1,311.7,74.7)))*43758.5453);
        diffuseColor.rgb*=.86+strata*.05+pores*.14;
        diffuseColor.rgb*=mix(vec3(.77,.86,.9),vec3(1.08,1.03,.88),smoothstep(-7.,5.,vSeaWorld.y));`:""}
        ${a?`float grain=sin(vSeaWorld.z*18.+sin(vSeaWorld.x*4.)*2.);
        diffuseColor.rgb*=.84+.11*grain;`:""}
        ${s?`float vein=pow(max(0.,1.-abs(vSeaUv.x-.5)*7.),8.);
        float folds=sin(vSeaUv.y*42.+sin(vSeaUv.x*16.));
        diffuseColor.rgb*=.91+vein*.16+folds*.035;`:""}
        ${o?`vec3 p=vSeaWorld*7.;float ridges=sin(p.x+sin(p.y*1.3))+cos(p.z+cos(p.y));
        float grooves=pow(1.-min(1.,abs(ridges)*.75),5.);diffuseColor.rgb*=.56+grooves*.59;`:""}
      `),u.fragmentShader=u.fragmentShader.replace("#include <lights_fragment_end>",`
        #include <lights_fragment_end>
        vec2 causticUV=vSeaWorld.xz*.56;
        causticUV+=vec2(sin(causticUV.y*.75+uSeaTime*.46),cos(causticUV.x*.72-uSeaTime*.37))*.8;
        float causticA=sin(causticUV.x*2.+sin(causticUV.y*1.7+uSeaTime*.34));
        float causticB=sin(causticUV.y*2.1+cos(causticUV.x*1.7-uSeaTime*.29));
        float caustic=pow(1.-min(1.,abs(causticA+causticB)*.62),16.);
        float submerged=1.-smoothstep(17.3,18.2,vSeaWorld.y);
        reflectedLight.directDiffuse*=1.+caustic*submerged*(.8+.35*smoothstep(-8.,16.,vSeaWorld.y));
        ${l?"float nearby=1.-smoothstep(12.,48.,length(cameraPosition-vSeaWorld));reflectedLight.indirectDiffuse+=diffuseColor.rgb*nearby*.22;":""}
        diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.81,.98,1.),clamp((10.-vSeaWorld.y)*.018,0.,.4));
      `)},this.materials.push(h),h}makeMaterials(){this.sandMaterial=this.material(13288356,{sand:!0,roughness:.94}),this.rockMaterial=this.material(7900797,{rock:!0,roughness:.88}),this.archMaterial=this.material(10069389,{rock:!0,roughness:.83}),this.coralMaterial=this.material(16777215,{coral:!0,roughness:.56,metalness:.04}),this.plateMaterial=this.material(16777215,{coral:!0,roughness:.68,side:at}),this.brainMaterial=this.material(16777215,{coral:!0,brain:!0,roughness:.62}),this.kelpMaterial=this.material(5605475,{sway:!this.reduced,side:at,roughness:.65}),this.kelpMaterial.emissive.set(2705203),this.kelpMaterial.emissiveIntensity=.32,this.stemMaterial=this.material(6321747,{sway:!this.reduced}),this.woodMaterial=this.material(8086096,{wood:!0,roughness:.93}),this.darkWoodMaterial=this.material(4537908,{wood:!0,roughness:.96}),this.sailMaterial=this.material(11907996,{side:at,roughness:.98}),this.ventMaterial=this.material(3489344,{rock:!0,roughness:.92}),this.ventRimMaterial=this.material(10326616,{emissive:4345905,emissiveIntensity:.35})}makeLighting(){let e=this.sun=new jr(16773076,3.7);e.position.copy(this.sunDirection).multiplyScalar(70),e.castShadow=!0,e.shadow.mapSize.set(this.coarse?1024:2048,this.coarse?1024:2048),e.shadow.camera.left=e.shadow.camera.bottom=-31,e.shadow.camera.right=e.shadow.camera.top=31,e.shadow.camera.near=1,e.shadow.camera.far=160,e.shadow.bias=-25e-5,e.shadow.normalBias=.07,e.shadow.radius=2.5,this.root.add(e,e.target),this.ambient=new Ys(11001322,6060142,1.45),this.root.add(this.ambient),this.fill=new jr(8240605,.5),this.fill.position.set(18,10,40),this.root.add(this.fill),this.scene.fog=new As(746103,.015),this.scene.background=new ue(746103)}makeTerrain(){let e=new Ai(150*2.6,150*2.6,this.coarse?80:96,this.coarse?80:96);e.rotateX(-Math.PI/2);let t=e.attributes.position;for(let u=0;u<t.count;u++)t.setY(u,pt(t.getX(u),t.getZ(u)));e.computeVertexNormals();let i=new He(e,this.sandMaterial);i.receiveShadow=!0,this.root.add(i);let r=this.rockGeometry=new Gr(1,this.coarse?2:3),s=r.attributes.position;for(let u=0;u<s.count;u++){let d=s.getX(u),p=s.getY(u),f=s.getZ(u),m=1+.095*Math.sin(d*5+p*3)*Math.cos(f*7)+.055*Math.cos(p*9+d*3);s.setXYZ(u,d*m,p*m,f*m)}r.computeVertexNormals();let a=new Map,o=r.attributes.normal,l=u=>`${s.getX(u).toFixed(4)},${s.getY(u).toFixed(4)},${s.getZ(u).toFixed(4)}`;for(let u=0;u<s.count;u++){let d=l(u),p=a.get(d)||new b;p.add(new b(o.getX(u),o.getY(u),o.getZ(u))),a.set(d,p)}for(let u=0;u<s.count;u++){let d=a.get(l(u)).normalize();o.setXYZ(u,d.x,d.y,d.z)}let c=[],h=this.random;for(let u=0;u<(this.coarse?112:165);u++){let d=h()*$i,p=15+Math.sqrt(h())*123,f=Math.cos(d)*p,m=Math.sin(d)*p;if(Math.abs(f)<7&&m>-30&&m<40)continue;let _=1.2+h()*4.1;c.push({p:[f,pt(f,m)+_*.28,m],s:[_,_*(.4+h()*.5),_*(.55+h()*.7)],r:[h()*.4,h()*$i,h()*.3]})}for(let u=0;u<24;u++){let d=u/24*$i,p=146+h()*8,f=Math.sin(d)*p,m=Math.cos(d)*p;c.push({p:[f,-5+h()*6,m],s:[10+h()*13,10+h()*20,10+h()*10],r:[0,d,.12]})}this.rocks=Xt(r,this.rockMaterial,c,this.root),c.filter(u=>Math.hypot(u.p[0],u.p[2])<120&&Math.min(...u.s)>2).sort((u,d)=>Math.hypot(u.p[0],u.p[2]-22)-Math.hypot(d.p[0],d.p[2]-22)).slice(0,12).forEach(u=>this.obstacles.push({position:new b(...u.p),radius:Math.min(...u.s)*.84}))}makeLandmarks(){let e=[["cathedral","\u0643\u0627\u062A\u062F\u0631\u0627\u0626\u064A\u0629 \u0627\u0644\u0645\u0631\u062C\u0627\u0646",0,null,-22,"coral"],["wreck","\u062D\u0637\u0627\u0645 \u0627\u0644\u0644\u0624\u0644\u0624\u0629",52,null,-50,"wreck"],["kelp","\u0642\u0648\u0633 \u063A\u0627\u0628\u0629 \u0627\u0644\u0645\u062F\u0651",-48,null,-65,"kelp"],["moonpool","\u0639\u064A\u0646 \u0627\u0644\u0634\u0645\u0633",-70,13,25,"surface"],["vents","\u0627\u0644\u0645\u062F\u0627\u062E\u0646 \u0627\u0644\u0632\u0631\u0642\u0627\u0621",62,null,48,"vent"],["sanctuary","\u062D\u062F\u064A\u0642\u0629 \u0627\u0644\u0628\u062F\u0627\u064A\u0629",0,10,22,"sanctuary"]];this.landmarks=e.map(([c,h,u,d,p,f])=>({id:c,name:h,type:f,radius:7,position:new b(u,d??pt(u,p)+(c==="wreck"||c==="kelp"?4:3),p)}));let t=new It;t.position.set(0,pt(0,-22),-22),this.root.add(t);for(let[c,h,u]of[[-4,1.35,-.13],[2,1.7,.1]]){let d=lu([[-10,0,c],[-9,5,c-1],[-6,11,c],[-1,13.5,c+1],[5,11.5,c],[9,6,c-1],[10,0,c]],h,this.archMaterial,t,40);d.rotation.z=u}let i=[];for(let c of[-1,1])for(let h=0;h<6;h++)i.push({p:[c*(8.5+h*.3),1.3+h%2,-7+h*2.5],s:[2.3,2.5+h*.2,2],r:[0,h*.8,c*.2]});Xt(this.rockGeometry,this.archMaterial,i,t);for(let c of[-9,9])for(let h of[-26,-20])this.obstacles.push({position:new b(c,pt(0,-22)+4,h),radius:2.15});this.makeWreck();let r=new It;r.position.set(-48,pt(-48,-65),-65),r.rotation.y=-.5,this.root.add(r),lu([[-7,0,0],[-8,4,-.5],[-6,9,-.8],[-1,10.5,0],[4,9,0],[7,3,1],[8,0,2]],1.35,this.rockMaterial,r);for(let c of[-7,7])this.obstacles.push({position:new b(c,3,0).applyEuler(r.rotation).add(r.position),radius:1.65});let s=new It;s.position.set(-70,9.5,25),this.root.add(s);let a=new He(new Ci(9.2,1.8,12,56),this.archMaterial);a.rotation.x=Math.PI/2,a.scale.z=1.5,a.receiveShadow=a.castShadow=!0,s.add(a);let o=[];for(let c=0;c<18;c++){let h=c/18*$i;o.push({p:[Math.cos(h)*10,-3,Math.sin(h)*10],s:[2.6,7.5+Math.sin(c*2)*1.5,2.8],r:[.08,h,.13]})}Xt(this.rockGeometry,this.archMaterial,o,s);for(let c=0;c<8;c++){let h=c/8*$i;this.obstacles.push({position:new b(-70+Math.cos(h)*9.8,9.5,25+Math.sin(h)*9.8),radius:2.35})}this.makeVents();let l=[];for(let c of[-1,1])for(let h=0;h<7;h++){let u=c*(8+Math.sin(h)*2),d=9+h*4;l.push({p:[u,pt(u,d)+1.5,d],s:[2.5+Math.sin(h),2.5+h*.2,3.3],r:[0,h,.2*c]})}Xt(this.rockGeometry,this.archMaterial,l,this.root),l.forEach(c=>this.obstacles.push({position:new b(...c.p),radius:Math.min(...c.s)*.83}))}makeWreck(){let e=new It;e.position.set(52,pt(52,-50)+.2,-50),e.rotation.set(.055,-.6,-.13),this.root.add(e);let t=[];for(let o of[-1,1])for(let l=0;l<6;l++){let c=new ke,h=[],u=[],d=[],p=[],f=l===4?-7:-9,m=l===5&&o>0?3:9;for(let g=0;g<=24;g++){let v=f+(m-f)*g/24,x=Math.pow(Math.max(.02,Math.sin((v+9)/18*Math.PI)),.55)*3.5,S=o*x*(.5+l*.11),E=l*.58+.03*v*v;if(h.push(S,E,v,S+o*.08,E+.48,v),u.push(o,.1,0,o,.1,0),d.push(g/24,0,g/24,1),g<24){let M=g*2;p.push(M,M+1,M+2,M+1,M+3,M+2)}}c.setAttribute("position",new fe(h,3)),c.setAttribute("normal",new fe(u,3)),c.setAttribute("uv",new fe(d,2)),c.setIndex(p),c.computeVertexNormals();let _=new He(c,l%2?this.woodMaterial:this.darkWoodMaterial);_.material.side=at,_.castShadow=_.receiveShadow=!0,e.add(_)}for(let o=0;o<8;o++){let l=-7+o*2,c=Math.pow(Math.sin((l+9)/18*Math.PI),.55)*3.5;lu([[-c,3.3,l],[-c*.8,1.2,l],[0,.2,l],[c*.8,1.2,l],[c,3.3,l]],.14,this.darkWoodMaterial,e,14),o<4&&t.push({p:[0,2.9,l],s:[c*1.85,.17,.45],r:[0,.015*o,0]})}Xt(new Ei(1,1,1),this.woodMaterial,t,e);let i=[];is(i,[0,0,0],[.9,14,-.7],.22),is(i,[-4,10,-.45],[4.2,10.3,-.6],.13),is(i,[0,1,-6],[-2,5,-9.4],.19),Xt(new ji(.72,1,1,9),this.darkWoodMaterial,i,e);let r=new ke;r.setAttribute("position",new fe([-3.8,9.9,-.35,.8,10.1,-.4,-3,6.4,.25,-3,6.4,.25,.8,10.1,-.4,-1.4,5.8,.6,-.8,9.95,-.4,3.7,10.12,-.5,2.8,7.6,.1],3)),r.computeVertexNormals();let s=new He(r,this.sailMaterial);s.castShadow=!0,e.add(s);let a=new He(new Ci(.9,.12,6,24,Math.PI),this.ventMaterial);a.position.set(4.7,.8,4),a.rotation.z=Math.PI,e.add(a)}makeVents(){let e=new It;e.position.set(62,pt(62,48),48),this.root.add(e);let t=[],i=[];for(let s=0;s<7;s++){let a=s*2.4,o=Math.sin(a)*(s?4.4:0),l=Math.cos(a)*(s?4.2:0),c=3+s%3*1.5;t.push({p:[o,c/2,l],s:[1.2,c,1.2],r:[0,a,Math.sin(s)*.04]}),i.push({p:[o,c,l],s:[.7,.7,.7],r:[Math.PI/2,0,0]})}Xt(new ji(.48,1,1,12,3,!0),this.ventMaterial,t,e),Xt(new Ci(1,.19,8,18),this.ventRimMaterial,i,e,!1);let r=new Zs(5552326,20,17,2);r.position.set(0,4,0),e.add(r),this.ventCenter=e.position.clone()}makeReefs(){let e=this.random,t=[],i=[],r=[],s=[],a=[[-10,19],[10,25],[-11,3],[11,-10],[-10,-28],[11,-22],[55,-54],[47,-43],[-78,24],[-62,30],[68,46]];for(let o=0;o<(this.coarse?45:65);o++){let l=a[o%a.length],c=l[0]+(e()-.5)*10,h=l[1]+(e()-.5)*11,u=pt(c,h)+.35,d=.8+e()*1.5,p=this.palette.coral[o%4];if(o%5===0&&s.push({p:[c+.8,u+d*.48,h+.8],s:[d*.8,d*.7,d*.95],c:p}),o%3===0){for(let m=0;m<4;m++)r.push({p:[c+Math.sin(m*2)*.7,u+.6+m*.5,h+Math.cos(m*2)*.6],s:[d*(1.5-m*.2),.13,d*(1.2-m*.12)],r:[.08*m,e()*$i,.04*m],c:p});continue}let f=[c,u+d*1.4,h];is(t,[c,u,h],f,d*.15,p);for(let m=0;m<5;m++){let _=m/5*$i+e(),g=[c+Math.sin(_)*d*.9,u+d*(1.7+e()),h+Math.cos(_)*d*.7],v=[c,u+d*(.6+m*.12),h];is(t,v,g,d*.085,p),i.push({p:g,s:[d*.077,d*.13,d*.077],c:new ue(p).lerp(new ue(15982529),.3).getHex()});for(let x of[-1,1]){let S=[g[0]+x*Math.cos(_)*d*.32,g[1]+d*.5,g[2]+x*Math.sin(_)*d*.25];is(t,g,S,d*.044,p),i.push({p:S,s:[d*.052,d*.086,d*.052],c:new ue(p).lerp(new ue(15982529),.4).getHex()})}}}this.coralMeshes=[Xt(new ji(.56,1,1,9),this.coralMaterial,t,this.root),Xt(new Vt(1,8,5),this.coralMaterial,i,this.root,!1),Xt(new Vt(1,20,9),this.plateMaterial,r,this.root),Xt(new Vt(1,18,12),this.brainMaterial,s,this.root)],this.coralEntries=[t,i,r,s]}makeVegetation(){let e=this.random,t=[],i=[],r=[],s=new Ai(1,1,2,7);s.translate(0,.5,0);let a=s.attributes.position;for(let o=0;o<a.count;o++){let l=a.getY(o),c=a.getX(o);a.setXYZ(o,c*Math.pow(Math.max(.025,Math.sin(l*Math.PI)),.65),l,Math.sin(l*Math.PI)*.18+c*c*.2)}s.computeVertexNormals();for(let o=0;o<(this.coarse?56:85);o++){let l=o%3!==0,c=l?-48+(e()-.5)*39:(e()-.5)*170,h=l?-65+(e()-.5)*34:(e()-.5)*150,u=pt(c,h),d=l?8+e()*12:3+e()*7;i.push({p:[c,u+d/2,h],s:[.065,d,.065]});for(let p=1;p<11;p++){let f=d*p/11,m=p*2.39;t.push({p:[c,u+f,h],s:[.3+e()*.4,2.2+e()*1.9,1],r:[Math.sin(m)*.65,m,.55+Math.cos(m)*.25],c:new ue(16777215).multiplyScalar(.72+e()*.28).getHex()})}}for(let o=0;o<(this.coarse?250:450);o++){let l=e()*$i,c=10+e()*100,h=Math.cos(l)*c,u=Math.sin(l)*c;r.push({p:[h,pt(h,u)-.1,u],s:[.18+e()*.27,.65+e()*1.2,.6],r:[.12,e()*$i,.25]})}Xt(new ji(.6,1,1,6),this.stemMaterial,i,this.root,!1),this.kelpLeaves=Xt(s,this.kelpMaterial,t,this.root,!1),Xt(s,this.kelpMaterial,r,this.root,!1)}surfaceHeight(e,t,i){return 18+Math.sin(e*.16+t*.12+i*.72)*.2+Math.sin(e*.31-t*.24-i*.55)*.075}makeSurface(){let e=new wt({side:at,fog:!0,uniforms:{...sl.clone(ce.fog),time:this.uniforms.time,water:this.uniforms.water,sky:{value:new ue(this.palette.sky)},sunDirection:{value:this.sunDirection}},vertexShader:`uniform float time; varying vec3 vWorld;
        #include <fog_pars_vertex>
        void main(){vec3 p=position;p.y+=sin(p.x*.16+p.z*.12+time*.72)*.2+sin(p.x*.31-p.z*.24-time*.55)*.075;
          vWorld=(modelMatrix*vec4(p,1.)).xyz;vec4 mvPosition=viewMatrix*vec4(vWorld,1.);gl_Position=projectionMatrix*mvPosition;
          #include <fog_vertex>
        }`,fragmentShader:`uniform float time;uniform vec3 water,sky,sunDirection;varying vec3 vWorld;
        #include <fog_pars_fragment>
        void main(){
          vec2 p=vWorld.xz;vec3 eye=normalize(cameraPosition-vWorld);
          float distanceToEye=length(cameraPosition-vWorld);
          float detailFade=1.-smoothstep(22.,100.,distanceToEye);
          float a=p.x*.16+p.y*.12+time*.72,b=p.x*.31-p.y*.24-time*.55;
          float fineA=sin(p.x*1.2+p.y*.91+time*.8+sin(p.y*.57-time*.25)*.6);
          float fineB=sin(-p.x*.84+p.y*1.43-time*.65+cos(p.x*.63+time*.2)*.7);
          float fineC=sin(p.x*2.36-p.y*1.58+time*.93+fineA*.32);
          vec3 n=normalize(vec3(-cos(a)*.032-cos(b)*.02325+fineA*.025*detailFade,1.,-cos(a)*.024+cos(b)*.018+fineB*.024*detailFade));
          float above=step(vWorld.y,cameraPosition.y);
          float fresnel=.025+.975*pow(1.-abs(dot(eye,n)),5.);
          vec3 reflection=reflect(-eye,n);float sparkle=pow(max(0.,dot(reflection,sunDirection)),650.);
          float broadSun=pow(max(0.,dot(reflection,sunDirection)),35.);
          vec3 reflectedSky=mix(sky*.55,sky*1.15,clamp(reflection.y*.6+.4,0.,1.));
          vec3 top=mix(water*.62,reflectedSky,fresnel)+vec3(1.,.91,.7)*(sparkle*4.+broadSun*.18);
          // Snell's window is one coherent opening, not a threshold on each tiny wave.
          float window=smoothstep(.61,.79,-eye.y);
          float skyElevation=clamp((-eye.y-.6)*2.5,0.,1.);
          vec3 refractedSky=mix(sky*.85,vec3(.66,.83,.91),skyElevation);
          float sunDot=max(0.,dot(-eye,sunDirection));
          float sunHalo=pow(sunDot,42.);
          float sunDisk=pow(sunDot,1300.);
          vec3 below=mix(water*.8,refractedSky,window*.66);
          below+=vec3(1.,.96,.77)*(sunHalo*.56+sunDisk*2.1)*window;
          float filaments=pow(1.-min(1.,abs(fineA+fineB+fineC*.28)*.67),10.);
          float microRidges=pow(max(0.,fineA*fineB),7.);
          below+=vec3(.43,.66,.65)*(filaments*.105+microRidges*.05)*detailFade;
          below+=vec3(.23,.35,.34)*fresnel*.12;
          float crest=smoothstep(.255,.28,sin(a)*.2+sin(b)*.075);
          top+=crest*.025+vec3(.32,.47,.49)*filaments*.025*detailFade;
          gl_FragColor=vec4(mix(below,top,above),1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`}),t=new Ai(390,390,this.coarse?80:112,this.coarse?80:112);t.rotateX(-Math.PI/2),this.surface=new He(t,e),this.surface.position.y=18,this.surface.frustumCulled=!1,this.root.add(this.surface)}makeSky(){let e=new wt({side:Ht,depthWrite:!1,uniforms:{time:this.uniforms.time,water:this.uniforms.water,air:this.uniforms.above,sky:{value:new ue(this.palette.sky)},horizon:{value:new ue(this.palette.horizon)},sunDirection:{value:this.sunDirection}},vertexShader:"varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vDirection;uniform vec3 sky,horizon,water,sunDirection;uniform float time,air;
        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
        float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
        void main(){vec3 direction=normalize(vDirection);float elevation=max(0.,direction.y);
          vec3 c=mix(horizon,sky,smoothstep(0.,.65,elevation));float sun=max(0.,dot(direction,sunDirection));
          c+=vec3(1.,.86,.59)*(pow(sun,950.)*5.+pow(sun,20.)*.18);
          vec2 cloudUV=direction.xz/max(.15,direction.y)*2.5+vec2(time*.003,0.);
          float cloud=noise(cloudUV)*.6+noise(cloudUV*2.)*.25+noise(cloudUV*4.)*.15;
          float clouds=smoothstep(.59,.77,cloud)*smoothstep(.04,.3,elevation)*.48;
          c=mix(c,vec3(.98,.98,.94),clouds);c=mix(water,c,air);
          gl_FragColor=vec4(c,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new He(new Vt(420,32,16),e),this.sky.renderOrder=-5,this.sky.frustumCulled=!1,this.root.add(this.sky)}makeAtmosphere(){let e=new wt({transparent:!0,depthWrite:!1,side:at,blending:Yr,uniforms:{time:this.uniforms.time,above:this.uniforms.above},vertexShader:"varying vec2 vUv;varying float vDepth;void main(){vUv=uv;vec4 p=modelViewMatrix*vec4(position,1.);vDepth=-p.z;gl_Position=projectionMatrix*p;}",fragmentShader:`varying vec2 vUv;varying float vDepth;uniform float time,above;
        void main(){float edge=pow(max(0.,sin(vUv.x*3.14159)),3.);float ends=smoothstep(0.,.15,vUv.y)*(1.-smoothstep(.65,1.,vUv.y));
          float alpha=edge*ends*(.78+.22*sin(vUv.y*13.+time*.5))*.083*exp(-max(0.,vDepth)*.014)*(1.-above);
          gl_FragColor=vec4(.75,.88,.78,alpha);}`}),t=new Ai(4,27);for(let p=0;p<22;p++){let f=p%6*19-48,m=Math.floor(p/6)*-29+31,_=new He(t,e);_.position.set(f,5,m),_.rotation.z=-.35,this.root.add(_),this.rays.push(_)}let i=this.coarse?420:720,r=[],s=[];for(let p=0;p<i;p++)r.push((this.random()-.5)*240,-5+this.random()*22,(this.random()-.5)*240),s.push(this.random());let a=new ke;a.setAttribute("position",new fe(r,3)),a.setAttribute("seed",new fe(s,1));let o=new wt({transparent:!0,depthWrite:!1,blending:Yr,uniforms:{time:this.uniforms.time,above:this.uniforms.above},vertexShader:"attribute float seed;uniform float time;varying float vFade;void main(){vec3 p=position;p.x+=sin(time*.17+seed*50.)*.7;p.y+=sin(time*.3+seed*70.)*.4;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((130.+seed*100.)/max(2.,-mv.z),1.,5.);vFade=exp(-max(0.,-mv.z)*.025)*(.3+seed*.4);}",fragmentShader:"uniform float above;varying float vFade;void main(){float r=length(gl_PointCoord-.5)*2.;float a=(1.-smoothstep(.2,1.,r))*vFade*(1.-above)*.38;gl_FragColor=vec4(.65,.86,.84,a);}"});this.root.add(new Dn(a,o));let l=[],c=[];for(let p=0;p<64;p++)l.push((this.random()-.5)*10,this.random()*17,(this.random()-.5)*9),c.push(this.random());let h=new ke;h.setAttribute("position",new fe(l,3)),h.setAttribute("seed",new fe(c,1));let u=new wt({transparent:!0,depthWrite:!1,uniforms:{time:this.uniforms.time},vertexShader:"attribute float seed;uniform float time;varying float vFade;void main(){vec3 p=position;p.y=mod(p.y+time*(.55+seed*.4),17.);p.x+=sin(p.y*.6+seed*15.)*.2;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((150.+seed*80.)/max(2.,-mv.z),1.,13.);vFade=(1.-p.y/19.)*exp(-max(0.,-mv.z)*.014);}",fragmentShader:"varying float vFade;void main(){vec2 p=gl_PointCoord-.5;float r=length(p)*2.;float ring=exp(-pow((r-.77)*8.,2.));float shine=exp(-length(p-vec2(-.13,.14))*25.);float a=(ring*.26+shine*.55)*vFade;gl_FragColor=vec4(.56,.81,.86,a);}"}),d=new Dn(h,u);d.position.copy(this.ventCenter).add(new b(0,3,0)),this.root.add(d)}makeSchools(){let e=new Vt(1,10,6),t=new Or(1,1,3);ft.position.set(.1,0,0),ft.rotation.set(0,0,0),ft.scale.set(.48,.13,.1),ft.updateMatrix();let i=ft.matrix.clone();ft.position.set(-.42,0,0),ft.rotation.set(0,0,-Math.PI/2),ft.scale.set(.21,.3,.06),ft.updateMatrix();let r=Yg([[e,i],[t,ft.matrix.clone()]]);e.dispose(),t.dispose();let s=this.material(13098976,{roughness:.28,metalness:.35}),a=this.coarse?42:72,o=[];for(let l=0;l<a;l++)o.push({p:[0,0,0],c:[12438968,8832718,14074257][l%3]});this.schoolMesh=Xt(r,s,o,this.root,!1),this.schoolMesh.frustumCulled=!1,this.schoolMesh.instanceMatrix.setUsage(Ih);for(let l=0;l<a;l++)this.schools.push({group:l%3,angle:this.random()*$i,spread:this.random(),altitude:this.random()})}setBiome(e){this.biome=vl[e]?e:"reef",this.palette=vl[this.biome];let t=this.palette;this.uniforms.water.value.set(t.water),this.sandMaterial.color.set(t.sand),this.rockMaterial.color.set(t.rock),this.archMaterial.color.set(t.rock).lerp(new ue(14276024),.26),this.kelpMaterial.color.set(t.kelp),this.stemMaterial.color.set(t.kelp).multiplyScalar(.7),this.sun.intensity=t.sun,this.surface.material.uniforms.sky.value.set(t.sky),this.sky.material.uniforms.sky.value.set(t.sky),this.sky.material.uniforms.horizon.value.set(t.horizon);for(let i=0;i<this.coralMeshes.length;i++){let r=this.coralMeshes[i];if(r){for(let s=0;s<r.count;s++){let a=new ue(this.coralEntries[i][s].c),o=0,l=1/0;for(let h=0;h<4;h++){let u=new ue(vl.reef.coral[h]),d=Math.abs(a.r-u.r)+Math.abs(a.g-u.g)+Math.abs(a.b-u.b);d<l&&(o=h,l=d)}let c=new ue(t.coral[o]);i===1&&c.lerp(new ue(16049609),.2),r.setColorAt(s,c)}r.instanceColor.needsUpdate=!0}}}update(e,t,i,r){this.uniforms.time.value=t;let s=this.surfaceHeight(r.position.x,r.position.z,t),a=ei.smoothstep(r.position.y,s-.35,s+.3);this.air+=(a-this.air)*(1-Math.exp(-e*9)),this.uniforms.above.value=this.air;let o=ei.clamp((18-r.position.y)/28,0,1);this.fogColor.set(this.palette.water).lerp(new ue(this.palette.deep),o*.5).lerp(new ue(this.palette.horizon),this.air),this.scene.fog.color.copy(this.fogColor),this.scene.fog.density=ei.lerp(this.palette.fog*(1+o*.22),.0017,this.air),this.scene.background.copy(this.fogColor),this.sky.position.copy(r.position),this.sky.visible=this.air>.001,this.sun.target.position.set(i.x,1,i.z),this.sun.position.copy(this.sun.target.position).addScaledVector(this.sunDirection,75),this.sun.target.updateMatrixWorld(),this.ambient.intensity=1.25+(1-o)*.3+this.air*.35,this.ambient.color.set(this.palette.sky),this.ambient.groundColor.set(this.palette.water).multiplyScalar(.55);for(let c=0;c<this.rays.length;c++){let h=this.rays[c];h.rotation.y=Math.atan2(r.position.x-h.position.x,r.position.z-h.position.z),h.rotation.z=-.3+(this.reduced?0:Math.sin(t*.16+c)*.025)}let l=[[5,9,-23],[-47,11,-58],[-13,13,19]];for(let c=0;c<this.schools.length;c++){let h=this.schools[c],u=l[h.group],d=h.angle+t*(.075+h.group*.018),p=5+h.spread*10;ft.position.set(u[0]+Math.cos(d)*p,u[1]+Math.sin(d*2+h.altitude*4)*1.6+(h.altitude-.5)*4,u[2]+Math.sin(d)*p*.7),ft.rotation.set(0,Math.atan2(-Math.cos(d)*.7,-Math.sin(d)),Math.sin(t*2+c)*.05),ft.scale.setScalar(.55+h.spread*.55),ft.updateMatrix(),this.schoolMesh.setMatrixAt(c,ft.matrix)}this.schoolMesh.instanceMatrix.needsUpdate=!0}dispose(){let e=new Set,t=new Set;this.root.traverse(i=>{if(i.geometry&&e.add(i.geometry),i.material)for(let r of Array.isArray(i.material)?i.material:[i.material])t.add(r)});for(let i of e)i.dispose();for(let i of t)i.dispose();this.sun.shadow.map?.dispose(),this.scene.remove(this.root)}};var cu=new Map,Jp=Math.PI*2,Zg=[[-1.02,.009,.021,-.035],[-.88,.1,.14,-.015],[-.6,.224,.375,.012],[-.17,.286,.505,.02],[.29,.243,.43,.005],[.64,.134,.247,0],[.88,.055,.088,0]],Jg=[[-1.85,.007,.012,-.015],[-1.57,.184,.16,.025],[-1.03,.334,.337,.046],[-.27,.386,.414,.05],[.43,.267,.29,.035],[1.03,.105,.135,.025],[1.37,.045,.073,.025]],Di=()=>({position:[],uv:[],finFlex:[],index:[]});function hu(n,e){let t=0;for(;t<n.length-2&&e>n[t+1][0];)t++;let i=n[t],r=n[t+1],s=ei.clamp((e-i[0])/(r[0]-i[0]),0,1),a=n[Math.max(0,t-1)],o=n[Math.min(n.length-1,t+2)];return[1,2,3].map(l=>{let c=(r[l]-a[l])/(r[0]-a[0]),h=(o[l]-i[l])/(o[0]-i[0]);return(2*s*s*s-3*s*s+1)*i[l]+(s*s*s-2*s*s+s)*c*(r[0]-i[0])+(-2*s*s*s+3*s*s)*r[l]+(s*s*s-s*s)*h*(r[0]-i[0])})}function Li(n){let e=new ke;return e.setAttribute("position",new fe(n.position,3)),e.setAttribute("uv",new fe(n.uv,2)),e.setAttribute("finFlex",new fe(n.finFlex,1)),e.setIndex(n.index),e.computeVertexNormals(),e.computeBoundingSphere(),e.boundingSphere.radius+=1.1,e}function Kp(n,e,t=new Ue,i=0){let r=e.clone().applyMatrix4(t),s=n.position.length/3,a=r.attributes.position,o=r.attributes.uv;for(let l=0;l<a.count;l++)n.position.push(a.getX(l),a.getY(l),a.getZ(l)),n.uv.push(o?.getX(l)||0,o?.getY(l)||0),n.finFlex.push(i);if(r.index)for(let l of r.index.array)n.index.push(s+l);else for(let l=0;l<a.count;l++)n.index.push(s+l);r.dispose(),e.dispose()}function Qi(n,e,t,i=20,r=0){let s=new Ue().compose(new b(...e),new Tt,new b(...t));Kp(n,new Vt(1,i,Math.max(8,Math.round(i*.65))),s,r)}function Kg(n,e,t){let i=Di(),r=n[0][0],s=n.at(-1)[0];for(let a=0;a<=e;a++){let o=a/e,l=ei.lerp(r,s,o),[c,h,u]=hu(n,l);for(let d=0;d<=t;d++){let p=d/t,f=p*Jp;if(i.position.push(Math.cos(f)*Math.max(.003,c),u+Math.sin(f)*Math.max(.004,h),l),i.uv.push(p,o),i.finFlex.push(0),a<e&&d<t){let m=a*(t+1)+d;i.index.push(m,m+1,m+t+1,m+1,m+t+2,m+t+1)}}}for(let a of[0,1]){let o=a?s:r,l=hu(n,o)[2],c=i.position.length/3;i.position.push(0,l,o),i.uv.push(.5,a),i.finFlex.push(0);for(let h=0;h<t;h++){let u=(a?e:0)*(t+1)+h;a?i.index.push(c,u,u+1):i.index.push(c,u+1,u)}}return i}function uu(n){return new Nn(n.map(e=>new b(...e)),!1,"centripetal")}function ui(n,e,t,{rays:i=26,spans:r=5,flex:s=0,camber:a=.016,flip:o=!1}={}){let l=uu(e),c=uu(t),h=n.position.length/3;for(let u=0;u<=i;u++){let d=u/i,p=l.getPoint(d),f=c.getPoint(d);for(let m=0;m<=r;m++){let _=m/r,g=p.clone().lerp(f,_);if(g.x+=Math.sin(_*Math.PI)*Math.sin(d*Math.PI)*a,n.position.push(g.x,g.y,g.z),n.uv.push(d,_),n.finFlex.push(s),u<i&&m<r){let v=h+u*(r+1)+m;o?n.index.push(v,v+1,v+r+1,v+1,v+r+2,v+r+1):n.index.push(v,v+r+1,v+1,v+1,v+r+1,v+r+2)}}}}function aa(n,e,t=.006,i=20){Kp(n,new Fn(uu(e),i,t,4,!1))}function $g(n){let e=n==="predator",t=n==="school",i=e?Jg:Zg,r=Kg(i,t?18:42,t?16:42),s=Di(),a=Di(),o=Di(),l=Di(),c=Di(),h=t?9:25,u=t?2:5;if(e){ui(s,[[0,.31,-.61],[0,.45,-.15],[0,.28,.48]],[[0,.36,-.61],[0,1.03,-.18],[0,.28,.48]],{rays:24,spans:4}),ui(s,[[0,.19,.65],[0,.14,.98],[0,.1,1.15]],[[0,.2,.65],[0,.41,.93],[0,.1,1.15]],{rays:12,spans:3}),ui(s,[[0,.09,1.32],[0,.025,1.37],[0,-.05,1.32]],[[0,1.03,2.04],[0,.025,1.64],[0,-.65,1.99]],{rays:28,spans:5});for(let d of[-1,1])ui(s,[[d*.27,-.09,-.77],[d*.32,-.13,-.41],[d*.29,-.17,-.1]],[[d*.28,-.1,-.77],[d*1.17,-.29,.16],[d*.43,-.23,.56]],{rays:20,spans:4,flex:d*.35}),ui(s,[[d*.15,-.18,.48],[d*.16,-.18,.67]],[[d*.49,-.3,.96],[d*.17,-.2,.93]],{rays:10,spans:3,flex:d*.3})}else{ui(s,[[0,.31,-.69],[0,.507,-.13],[0,.31,.53],[0,.09,.87]],[[0,.32,-.69],[0,.79,-.23],[0,.67,.48],[0,.1,.9]],{rays:h,spans:u}),ui(s,[[0,-.43,-.31],[0,-.42,.26],[0,-.12,.81]],[[0,-.45,-.31],[0,-.69,.22],[0,-.14,.86]],{rays:h,spans:u}),ui(s,[[0,.067,.86],[0,0,.895],[0,-.067,.86]],[[0,.56,1.48],[0,.29,1.38],[0,0,1.16],[0,-.29,1.38],[0,-.56,1.48]],{rays:h,spans:u});for(let d of[-1,1])ui(s,[[d*.235,.025,-.45],[d*.235,-.015,-.39],[d*.225,-.06,-.33]],[[d*.25,.04,-.46],[d*.67,-.11,.12],[d*.5,-.25,.31]],{rays:t?6:16,spans:t?2:4,flex:d}),t||ui(s,[[d*.12,-.38,-.31],[d*.12,-.42,-.12]],[[d*.31,-.61,.24],[d*.12,-.54,.39]],{rays:10,spans:3,flex:d*.5})}for(let d of[-1,1]){let p=e?-1.44:-.745,f=e?.074:.095,m=e?.224:.168;if(t||Qi(a,[d*m,f,p],[.025,e?.043:.05,e?.041:.047],16),Qi(o,[d*(m+.02),f,p-.004],[.018,e?.032:.034,e?.03:.032],t?10:16),t||Qi(l,[d*(m+.035),f+.012,p-.016],[.005,.008,.007],10),!t){let _=e?5:1;for(let g=0;g<_;g++){let v=[];for(let x=0;x<9;x++){let S=x/8,E=(e?-.93+g*.072:-.49)+Math.sin(S*Math.PI)*.08,[M,P,F]=hu(i,E),L=ei.lerp(.22,-.2,S);v.push([d*(M*Math.sqrt(Math.max(.05,1-((L-F)/P)**2))+.003),L,E])}aa(c,v,e?.007:.006,12)}}}return t||(e?aa(c,[[-.13,-.12,-1.62],[-.08,-.164,-1.54],[0,-.177,-1.49],[.08,-.164,-1.54],[.13,-.12,-1.62]],.0065,18):aa(c,[[-.043,-.039,-.999],[0,-.054,-1.02],[.043,-.039,-.999]],.005,14)),{body:Li(r),fins:Li(s),eyes:Li(o),...t?{}:{iris:Li(a),highlights:Li(l),detail:Li(c)},length:e?3.99:2.5}}function Qg(){let n=Di(),e=Di(),t=Di();Qi(n,[0,.075,0],[.64,.28,.8],40),Qi(n,[0,-.025,-.65],[.18,.135,.37],20),Qi(n,[0,.025,-.98],[.183,.142,.275],24),Qi(n,[0,-.055,.79],[.055,.04,.25],14);for(let i of[-1,1])ui(e,[[i*.42,-.01,-.52],[i*.48,-.025,-.2]],[[i*.59,-.04,-.65],[i*1.31,-.13,-.18],[i*1.12,-.15,.02],[i*.57,-.06,.1]],{rays:30,spans:6,flex:i,flip:i<0}),ui(e,[[i*.38,-.035,.45],[i*.26,-.035,.67]],[[i*.79,-.065,.68],[i*.58,-.08,.97],[i*.3,-.05,.84]],{rays:16,spans:4,flex:i*.5,flip:i<0}),Qi(t,[i*.161,.061,-1.06],[.014,.03,.032],14);return{body:Li(n),fins:Li(e),eyes:Li(t),length:2.05}}function e0(){let n=Di(),e=Di();Qi(n,[0,0,-.1],[.65,.175,.98],32);for(let t of[-1,1])ui(n,[[t*.39,.008,-.8],[t*.52,0,-.18],[t*.39,-.02,.62]],[[t*.5,-.025,-1.04],[t*1.25,-.03,-.66],[t*2.34,-.045,.35],[t*1.11,-.06,.8],[t*.44,-.015,.72]],{rays:40,spans:9,flex:t,camber:.022,flip:t<0}),aa(n,[[t*.2,-.07,-.8],[t*.23,-.1,-1.09],[t*.3,-.09,-1.27],[t*.38,-.06,-1.17]],.05,20),Qi(e,[t*.4,.05,-.86],[.04,.029,.032],14);return aa(n,[[0,-.015,.66],[0,-.02,1.23],[0,-.035,1.89],[0,-.065,2.63]],.017,36),{body:Li(n),eyes:Li(e),length:3.9}}var t0=`
  uniform float uMarineTime, uMarineSpeed, uMarinePhase;
  attribute float finFlex;
  float marineWave(float z) {
    float rear = smoothstep(-.62,1.65,z);
    return sin(uMarineTime*5.4-z*3.25+uMarinePhase)*rear*rear*(.055+uMarineSpeed*.055);
  }
`;function ar(n,e,t,i=""){let r=t==="manta",s=t==="turtle";return n.customProgramCacheKey=()=>"marine-v1-"+t+"-"+i,n.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=t0+`
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
`+a.fragmentShader;let l;i==="fins"&&t==="predator"?l=`
        vec3 p = vMarinePosition;
        vec3 finColor = mix(uMarineBelly,uMarineSide,smoothstep(-.36,.08,p.y));
        finColor = mix(finColor,uMarineBack,smoothstep(.48,1.0,p.y)*.5);
        diffuseColor.rgb *= finColor;
      `:i==="fins"&&!s&&!r?l=`
        float ray = pow(.5+.5*cos(vMarineUv.x*${t==="predator"?"26.":"40."}*6.283185),15.);
        float border = smoothstep(.87,.99,vMarineUv.y);
        vec3 finColor = mix(uMarineSide*.79,uMarineBelly*.93,border*.78);
        diffuseColor.rgb *= finColor*(.81+ray*.22);
        ${t==="predator"?"":"diffuseColor.a *= .64+.32*ray+.22*border;"}
      `:s?l=`
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
      `:r?l=`
        vec3 p = vMarinePosition;
        float dorsal = smoothstep(-.2,.2,vMarineNormal.y*(gl_FrontFacing?1.:-1.));
        vec3 c = mix(uMarineBelly,uMarineBack,dorsal);
        float shoulder = exp(-pow((abs(p.x)-(.26+max(0.,p.z+.75)*.48))/.10,2.));
        shoulder *= smoothstep(-.94,-.45,p.z)*(1.-smoothstep(.12,.43,p.z));
        c = mix(c,uMarineSide,shoulder*.72*dorsal);
        diffuseColor.rgb *= c;
      `:l=`
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
`+l)},n}function i0(n,e){let t=n==="hero",i=n==="predator",r=t||n==="school",s=t?new mn({color:16777215,roughness:.43,metalness:.12,clearcoat:.38,clearcoatRoughness:.31,iridescence:.2,iridescenceIOR:1.33,iridescenceThicknessRange:[95,220]}):new kt({color:16777215,roughness:i?.48:.54,metalness:.075,side:n==="manta"?at:Bn}),a=new kt({color:16777215,roughness:.45,metalness:.065,side:at,transparent:r,opacity:r?.91:1,depthWrite:!r});a.forceSinglePass=!0;let o=new kt({color:i?9276281:13018213,roughness:.36,metalness:.14}),l=new mn({color:266002,roughness:.09,metalness:.03,clearcoat:1,clearcoatRoughness:.06}),c=new kt({color:15005417,roughness:.1}),h=new kt({color:i?3887444:2647645,roughness:.7});return{body:ar(s,e,n,"body"),fins:ar(a,e,n,"fins"),iris:ar(o,e,n),eyes:ar(l,e,n),highlights:ar(c,e,n),detail:ar(h,e,n)}}function xl(n="hero",e={}){["hero","predator","turtle","manta","school"].includes(n)||(n="school"),cu.has(n)||cu.set(n,n==="turtle"?Qg():n==="manta"?e0():$g(n));let t=cu.get(n),i=new It,r=n==="predator"?[3561830,8427933,14344147]:n==="turtle"?[3426618,7897947,12628609]:n==="manta"?[1585467,7508878,14804950]:n==="school"?[2251624,7847872,14994563]:[807776,3717293,15059332],s={uMarineTime:{value:0},uMarineSpeed:{value:1},uMarinePhase:{value:e.phase??Math.random()*Jp},uMarineBack:{value:new ue(r[0])},uMarineSide:{value:new ue(e.color??r[1])},uMarineBelly:{value:new ue(r[2])}},a=i0(n,s),o=e.shadows??(n==="hero"||n==="predator"),l=o?ar(new kr({depthPacking:Rh}),s,n):null;for(let[u,d]of Object.entries(t)){if(!d?.isBufferGeometry)continue;let p=new He(d,a[u]);p.name=n+"-"+u,p.castShadow=o&&["body","fins"].includes(u),p.receiveShadow=!0,l&&(p.customDepthMaterial=l),i.add(p)}let c=new Set(i.children.map(u=>u.material));for(let u of Object.values(a))c.has(u)||u.dispose();let h=e.scale??(n==="school"?.36:1);return i.scale.setScalar(h),i.name=n,i.userData.marine={kind:n,uniforms:s,materials:[...c],depth:l,lastTime:null,clock:0,disposed:!1},i.userData.length=t.length*h,i}function yl(n,e,t=1){let i=n?.userData.marine;if(!i||i.disposed||!Number.isFinite(e))return;let r=ei.clamp(Number.isFinite(t)?t:1,0,4);i.lastTime===null?i.clock=e:i.clock+=ei.clamp(e-i.lastTime,0,.12)*(.75+Math.min(2.5,r)*.25),i.lastTime=e,i.uniforms.uMarineTime.value=i.clock,i.uniforms.uMarineSpeed.value=ei.lerp(i.uniforms.uMarineSpeed.value,r,.15)}function $p(n){let e=n?.userData.marine;!e||e.disposed||(e.disposed=!0,e.materials.forEach(t=>t.dispose()),e.depth?.dispose(),n.removeFromParent())}var gn=(n,e,t)=>Math.max(e,Math.min(t,n)),Qp="amaq-audio-v1",n0=[523.25,587.33,659.25,783.99,880],Ml=class{constructor({context:e=null,storage:t}={}){this.context=e,this.supported=!!(e||globalThis.AudioContext||globalThis.webkitAudioContext),this.volume=.65,this.muted=!1,this.mode="menu",this.voices=new Set,this.loops=[],this.lastEvent=null,this.lastPan=0,this.eventCount=0,this.events={},this.nextWarning=0,this.nextBubble=0,this.nextUpdate=0,this.lastPickup=-1;try{this.storage=t===void 0?globalThis.localStorage:t;let i=JSON.parse(this.storage?.getItem(Qp)||"null");i&&typeof i.volume=="number"&&Number.isFinite(i.volume)&&(this.volume=gn(i.volume,0,1)),typeof i?.muted=="boolean"&&(this.muted=i.muted)}catch{}}get enabled(){return this.supported&&!this.muted&&this.volume>0}save(){try{this.storage?.setItem(Qp,JSON.stringify({volume:this.volume,muted:this.muted}))}catch{}}init(){if(this.master||!this.supported)return;let e=globalThis.AudioContext||globalThis.webkitAudioContext,t=this.context||(this.context=new e);this.master=t.createGain(),this.master.gain.value=0,this.limiter=t.createDynamicsCompressor(),this.limiter.threshold.value=-12,this.limiter.knee.value=12,this.limiter.ratio.value=8,this.limiter.attack.value=.003,this.limiter.release.value=.2,this.master.connect(this.limiter).connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*4,t.sampleRate),this.water=t.createBuffer(2,t.sampleRate*4,t.sampleRate);let i=this.noise.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;for(let r=0;r<2;r++){let s=this.water.getChannelData(r),a=0;for(let o=0;o<s.length;o++)a=a*.985+(Math.random()*2-1)*.06,s[o]=a*Math.min(1,o/1800,(s.length-1-o)/1800)}this.bed=this.loop(this.water,380),this.swim=this.loop(this.noise,700)}loop(e,t){let i=this.context,r=i.createBufferSource(),s=i.createBiquadFilter(),a=i.createGain();return r.buffer=e,r.loop=!0,s.type="lowpass",s.frequency.value=t,s.Q.value=.5,a.gain.value=0,r.connect(s).connect(a).connect(this.master),r.start(),this.loops.push(r),{source:r,filter:s,gain:a}}smooth(e,t,i=.08){let r=this.context.currentTime;e.cancelScheduledValues(r),e.setTargetAtTime(t,r,i)}unlock(){if(this.enabled)try{this.init(),this.context.startRendering||this.context.resume().catch(()=>{})}catch{this.supported=!1}}fadeOut(){let e=this.master.gain,t=this.context.currentTime;e.cancelScheduledValues(t),e.setValueAtTime(e.value,t),e.linearRampToValueAtTime(0,t+.045)}mix(){this.master&&(this.enabled&&(this.mode==="playing"||this.mode==="ended")?this.smooth(this.master.gain,this.volume*.8,.025):this.fadeOut())}stopVoices(){for(let e of this.voices)e.source.stop(),e.nodes.forEach(t=>t.disconnect());this.voices.clear()}suspendAfter(e){clearTimeout(this.sleepTimer),!this.context?.startRendering&&(this.sleepTimer=setTimeout(()=>{this.stopVoices(),this.context?.suspend().catch(()=>{})},e))}setMode(e){clearTimeout(this.sleepTimer),this.mode=e,e==="playing"?(this.unlock(),this.nextUpdate=0,this.nextWarning=(this.context?.currentTime||0)+.5,this.nextBubble=(this.context?.currentTime||0)+1.4):(this.bed&&(this.smooth(this.bed.gain.gain,0),this.smooth(this.swim.gain.gain,0)),this.suspendAfter(e==="ended"?2200:160)),this.mix()}quiet(){this.master&&(this.fadeOut(),this.suspendAfter(100))}setVolume(e){Number.isFinite(e)&&(this.volume=gn(e,0,1),this.volume>0&&(this.muted=!1),this.changed())}toggle(){let e=this.enabled;this.muted=e,!e&&this.volume===0&&(this.volume=.65),this.changed()}changed(){this.save(),this.enabled&&this.mode==="playing"?(clearTimeout(this.sleepTimer),this.unlock()):this.enabled||this.quiet(),this.mix()}voice({frequency:e=600,end:t=e,duration:i=.3,gain:r=.13,delay:s=0,pan:a=0,noise:o=!1,type:l="sine"}={}){if(this.voices.size>=28)return;let c=this.context,h=c.currentTime+s,u=o?c.createBufferSource():c.createOscillator(),d=c.createGain(),p=c.createStereoPanner(),f=[u,d,p],m=u;if(o){u.buffer=this.noise;let g=c.createBiquadFilter();g.type="bandpass",g.Q.value=.65,g.frequency.setValueAtTime(e,h),g.frequency.exponentialRampToValueAtTime(Math.max(30,t),h+i),u.connect(g),m=g,f.push(g)}else u.type=l,u.frequency.setValueAtTime(e,h),u.frequency.exponentialRampToValueAtTime(Math.max(30,t),h+i);p.pan.value=gn(a,-1,1),d.gain.setValueAtTime(0,h),d.gain.linearRampToValueAtTime(r,h+.012),d.gain.exponentialRampToValueAtTime(1e-4,h+i),d.gain.linearRampToValueAtTime(0,h+i+.015),m.connect(d).connect(p).connect(this.master);let _={source:u,nodes:f};this.voices.add(_),u.onended=()=>{f.forEach(g=>g.disconnect()),this.voices.delete(_)},u.start(h),u.stop(h+i+.025)}play(e,{combo:t=1,pan:i=0,strength:r=1}={}){if(!this.master||!this.enabled||!["playing","ended"].includes(this.mode))return;let s=this.context.currentTime;if(e==="pearl"&&s-this.lastPickup<.055)return;e==="pearl"&&(this.lastPickup=s);let a=(c,h,u,d=0,p=c)=>this.voice({frequency:c,end:p,duration:h,gain:u,delay:d,pan:i}),o=(c,h,u,d)=>this.voice({noise:!0,frequency:c,end:h,duration:u,gain:d,pan:i}),l=(c,h=.085,u=.12)=>c.forEach((d,p)=>{a(d,.4,u,p*h),a(d*2.01,.19,u*.16,p*h)});if(e==="pearl"){let c=n0[gn(Math.floor(t)-1,0,4)];a(c,.25,.15),a(c*2,.12,.027,.025)}else if(e==="breach")o(700,2800,.45,.3),a(420,.3,.035,0,900);else if(e==="splash")o(1800,180,.8,.45),o(340,130,.45,.18);else if(e==="gold")l([659.25,880,1318.5]);else if(e==="treasure")l([392,523.25,659.25,1046.5],.11,.14);else if(e==="magnet")o(300,1700,.45,.12),l([440,659.25],.1,.1);else if(e==="gate")o(250,2100,.65,.3),l([392,783.99],.1,.1);else if(e==="frenzy")l([523.25,659.25,783.99,1046.5,1318.5],.09,.13);else if(e==="nearMiss")o(900,300,.2,.13),l([659.25,987.77],.05,.08);else if(e==="discover")l([261.63,392],.18,.065);else if(e==="shield")o(500,2200,.55,.14),l([392,587.33,783.99],.11);else if(e==="dash")o(260,2300,.65,.5),a(160,.35,.1,0,65);else if(e==="hurt")o(900,100,.35,.3),a(115,.32,.2,0,42);else if(e==="block")o(1400,300,.32,.22),l([1174.66,783.99],.075,.1);else if(e==="defeated")o(450,1100,.4,.25),l([392,659.25,987.77],.07);else if(e==="warning"||e==="guardian"){let c=e==="guardian"?.15:.08+gn(r,0,1)*.06;a(110,.19,c,0,80),a(98,.22,c*.8,.26,65)}else if(e==="start")o(1300,260,.65,.16),l([261.63,392,523.25],.12,.09);else if(e==="win")l([523.25,659.25,783.99,1046.5],.18,.15);else if(e==="lose")l([392,329.63,261.63],.19,.11);else if(e==="bubble")a(300+Math.random()*350,.12,.022,0,1e3);else return;this.lastEvent=e,this.lastPan=i,this.eventCount++,this.events[e]=(this.events[e]||0)+1,["hurt","block","defeated","dash","treasure","frenzy","win","lose","start"].includes(e)&&(this.nextWarning=Math.max(this.nextWarning,s+.65)),e!=="bubble"&&e!=="warning"&&(this.nextBubble=Math.max(this.nextBubble,s+1.1))}update({world:e,speed:t=0,boosting:i=!1,threat:r=null,aboveWater:s=!1}){if(!this.master||!this.enabled||this.mode!=="playing"||this.context.state==="suspended")return;let a=this.context.currentTime;if(a<this.nextUpdate)return;this.nextUpdate=a+.08;let o=s?1400:e==="abyss"?170:e==="kelp"?270:420;if(this.smooth(this.bed.filter.frequency,o+Math.sin(a*.4)*45,.4),this.smooth(this.bed.gain.gain,.16+Math.sin(a*.65)*.018,.3),this.smooth(this.swim.filter.frequency,420+gn(t,0,1)*800+(i?1100:0)),this.smooth(this.swim.gain.gain,.012+gn(t,0,1)*.08+(i?.12:0)),r&&r.distance<27&&a>=this.nextWarning){let l=1-gn(r.distance/27,0,1);this.play("warning",{pan:gn(r.x/8,-.9,.9),strength:l}),this.nextWarning=a+1.8-l*1.15}a>=this.nextBubble&&(this.play("bubble",{pan:Math.sin(a)*.65}),this.nextBubble=a+2.2+Math.random()*2.8)}snapshot(){return{supported:this.supported,initialized:!!this.master,enabled:this.enabled,volume:this.volume,muted:this.muted,state:this.context?.state||"idle",mode:this.mode,voices:this.voices.size,lastEvent:this.lastEvent,lastPan:this.lastPan,eventCount:this.eventCount,events:{...this.events},swimGain:this.swim?.gain.gain.value||0,masterGain:this.master?.gain.value||0}}};var Sl=class{constructor(e,t=!1){this.container=e,this.reduced=t,this.entries=[],this.projected=new b}show(e,t,i=""){if(!e&&!i)return;let r=this.entries.at(-1);if(e>0&&!i&&r?.amount>0&&!r.label&&r.age<.075&&r.position.distanceTo(t)<1.3){r.amount+=e,r.number.textContent="+"+r.amount;return}this.entries.length>=16&&this.entries.shift().element.remove();let s=document.createElement("div");s.className="score-pop "+(e<0?"loss":"gain");let a=document.createElement("b");if(a.dir="ltr",a.textContent=e?(e>0?"+":"")+e:"",s.append(a),i){let o=document.createElement("small");o.textContent=i,s.append(o)}this.container.append(s),this.entries.push({element:s,number:a,amount:e,label:i,position:t.clone(),age:0,offset:(this.entries.length%3-1)*62,lift:this.entries.length%3*42})}update(e,t,i){for(let r=this.entries.length-1;r>=0;r--){let s=this.entries[r];if(i&&(s.age+=e),s.age>1.35){s.element.remove(),this.entries.splice(r,1);continue}this.projected.copy(s.position).project(t);let a=this.projected.z>-1&&this.projected.z<1;s.element.hidden=!a;let o=Math.max(45,Math.min(innerWidth-45,(this.projected.x*.5+.5)*innerWidth+s.offset)),l=this.reduced?0:s.age*43,c=Math.max(105,Math.min(innerHeight-90,(-this.projected.y*.5+.5)*innerHeight-28-l-s.lift)),h=this.reduced?1:1+Math.sin(Math.min(1,s.age/.18)*Math.PI)*.2;s.element.style.transform="translate("+o+"px,"+c+"px) translate(-50%,-50%) scale("+h+")",s.element.style.opacity=Math.min(1,(1.35-s.age)*3)}}clear(){this.entries.forEach(e=>e.element.remove()),this.entries=[]}};var bl=class{constructor(e,t=!1){this.reduced=t,this.particles=[],this.ripples=[],this.clock=0;let i=t?90:280,r=new ke;this.positions=new Float32Array(i*3),this.colors=new Float32Array(i*3),this.count=i,r.setAttribute("position",new Ft(this.positions,3)),r.setAttribute("color",new Ft(this.colors,3));let s=new Fr({size:.095,vertexColors:!0,transparent:!0,opacity:.72,depthWrite:!1});s.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      float r=length(gl_PointCoord-vec2(.5)); if(r>.5)discard; diffuseColor.a*=smoothstep(.5,.26,r);`)},this.points=new Dn(r,s),this.points.frustumCulled=!1,e.add(this.points),this.ringGeo=new Vr(.92,1,64),this.ringGeo.rotateX(-Math.PI/2);for(let a=0;a<12;a++){let o=new He(this.ringGeo,new Xi({color:11924198,transparent:!0,opacity:0,side:at,depthWrite:!1}));e.add(o),this.ripples.push({mesh:o,age:3})}}particle(e,t,i,r=1.4){this.particles.length>=this.count&&this.particles.shift(),this.particles.push({p:e.clone(),v:t.clone(),c:new ue(i),age:0,life:r})}splash(e,t=1){let i=this.reduced?12:40;for(let r=0;r<i;r++){let s=r/i*Math.PI*2,a=1+Math.random()*2;this.particle(e,new b(Math.cos(s)*a,Math.random()*4*t+1,Math.sin(s)*a),14220531,1.3)}for(let r=0;r<3;r++){let s=this.ripples.reduce((a,o)=>a.age>o.age?a:o);s.age=-r*.14,s.mesh.position.copy(e),s.mesh.position.y+=.05}}burst(e,t=16767629){for(let i=0;i<(this.reduced?7:18);i++)this.particle(e,new b((Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3),t,.9)}update(e,t,i,r,s,a){if(this.clock-=e,a&&i.length()>.65&&this.clock<=0&&t.y<s){this.clock=this.reduced?.1:.035;let o=i.clone().normalize().multiplyScalar(-1.1);this.particle(t.clone().add(o).add(new b((Math.random()-.5)*.35,0,(Math.random()-.5)*.35)),o.multiplyScalar(.15).add(new b(0,.55,0)),9101263,1.5)}for(let o=this.particles.length-1;o>=0;o--){let l=this.particles[o];if(l.age+=e,l.age>l.life){this.particles.splice(o,1);continue}l.p.addScaledVector(l.v,e),l.p.y>s?l.v.y-=9*e:l.v.y+=.25*e}for(let o=0;o<this.count;o++){let l=this.particles[o];this.positions.set(l?l.p.toArray():[0,-1e4,0],o*3);let c=l?l.c.clone().multiplyScalar(1-l.age/l.life):new ue(0);this.colors.set([c.r,c.g,c.b],o*3)}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0;for(let o of this.ripples)o.age+=e,o.mesh.visible=o.age>=0&&o.age<2,o.mesh.scale.setScalar(.4+o.age*3.2),o.mesh.material.opacity=Math.max(0,(1-o.age/2)*.36)}clear(){this.particles=[];for(let e of this.ripples)e.age=3}};var vn=(n,e,t)=>Math.max(e,Math.min(t,n));function du(){return{distance:0,score:0,pearls:0,lives:3,combo:0,comboTime:0,shield:0,boost:0,cooldown:0,invulnerable:0,elapsed:0,ended:!1,won:!1,magnet:0,frenzy:0,current:0,charge:0,treasures:0,nearMisses:0}}function Lt(n,e){if(n.ended)return 0;let t=n.score;return n.score=Math.max(0,n.score+Math.round(e)),n.score-t}function r0(n,e){n.frenzy>0||(n.charge+=e,n.charge>=12&&(n.charge=0,n.frenzy=8))}function em(n,e="pearl"){if(n.ended)return 0;if(e==="shield")return n.shield=9,Lt(n,15);if(e==="magnet")return n.magnet=10,Lt(n,10);if(e==="gate")return n.current=4,Lt(n,15);if(e==="frenzy")return n.frenzy=8,n.charge=0,Lt(n,20);if(e!=="pearl"&&e!=="gold")return 0;n.combo=Math.min(5,n.combo+1),n.comboTime=3.5,n.pearls++;let t=Lt(n,(e==="gold"?10:5)*n.combo*(n.frenzy>0?2:1));return r0(n,1),t}function tm(n,e=Math.random()){if(n.ended)return{delta:0,reward:null};if(n.treasures++,e<.4)return n.magnet=10,{delta:Lt(n,40),reward:"magnet"};if(e<.75){let t=n.lives<3;return n.lives=Math.min(3,n.lives+1),t||(n.shield=9),{delta:Lt(n,40),reward:t?"heal":"shield"}}return{delta:Lt(n,100),reward:"jackpot"}}function im(n){return n.ended||n.invulnerable>0?"immune":n.boost>0?(Lt(n,25),"defeated"):n.shield>0?(n.shield=0,n.invulnerable=1.2,"shield"):(Lt(n,-3),n.lives--,n.combo=0,n.invulnerable=2,n.lives<=0&&(n.ended=!0),"hurt")}var Tl=(n,e=1e8)=>Math.max(0,Math.min(e,Number.isFinite(n)?Math.floor(n):0)),nm="amaq-expedition-v1",rm=["\u0631\u0641\u064A\u0642 \u0627\u0644\u0645\u0631\u062C\u0627\u0646","\u0631\u062D\u0651\u0627\u0644 \u0627\u0644\u062A\u064A\u0627\u0631\u0627\u062A","\u0645\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0623\u0639\u0645\u0627\u0642","\u062D\u0627\u0631\u0633 \u0627\u0644\u0645\u062D\u064A\u0637"],or=[{id:"messi",name:"\u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u0645\u064A\u0633\u064A",stat:"escapes",target:3,condition:"\u0627\u0647\u0631\u0628 \u0645\u0646 3 \u0645\u0637\u0627\u0631\u062F\u0627\u062A",ability:"\u0645\u0631\u0627\u0648\u063A\u0629 \u0645\u0632\u062F\u0648\u062C\u0629",detail:"\u0627\u0636\u063A\u0637 X \u0623\u0648 \u0632\u0631 \u0627\u0644\u0645\u0631\u0627\u0648\u063A\u0629: \u062E\u062F\u0639\u0629 \u062C\u0627\u0646\u0628\u064A\u0629 \u0633\u0631\u064A\u0639\u0629 \u0645\u0639 \u062D\u0645\u0627\u064A\u0629 \u0642\u0635\u064A\u0631\u0629. \u062A\u0633\u062A\u0639\u064A\u062F\u0647\u0627 \u0643\u0644 12 \u062B\u0627\u0646\u064A\u0629.",mark:"10"},{id:"dolphin",name:"\u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u0627\u0644\u062F\u0644\u0641\u064A\u0646",stat:"breaches",target:4,condition:"\u0627\u0642\u0641\u0632 \u0641\u0648\u0642 \u0627\u0644\u0633\u0637\u062D 4 \u0645\u0631\u0627\u062A",ability:"\u0627\u0646\u062F\u0641\u0627\u0639 \u0623\u0633\u0631\u0639 \u062A\u0639\u0627\u0641\u064A\u0627\u064B",detail:"\u062A\u0639\u0648\u062F \u0637\u0627\u0642\u0629 \u0627\u0644\u0627\u0646\u062F\u0641\u0627\u0639 \u0623\u0633\u0631\u0639 \u0628\u0646\u0633\u0628\u0629 25\u066A\u060C \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0641\u064A \u0643\u0644 \u0631\u062D\u0644\u0627\u062A\u0643.",mark:"\u2191"},{id:"pearl",name:"\u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u0627\u0644\u0644\u0624\u0644\u0624",stat:"pearls",target:60,condition:"\u0627\u062C\u0645\u0639 60 \u0644\u0624\u0644\u0624\u0629",ability:"\u062C\u0627\u0630\u0628\u064A\u0629 \u0627\u0644\u0644\u0622\u0644\u0626",detail:"\u062A\u0646\u062C\u0630\u0628 \u0627\u0644\u0644\u0622\u0644\u0626 \u0627\u0644\u0642\u0631\u064A\u0628\u0629 \u0625\u0644\u064A\u0643 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0645\u0646 \u0645\u0633\u0627\u0641\u0629 3 \u0623\u0645\u062A\u0627\u0631.",mark:"\u25C8"},{id:"explorer",name:"\u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u0627\u0644\u0631\u062D\u0651\u0627\u0644\u0629",stat:"places",target:6,condition:"\u0633\u062C\u0651\u0644 6 \u0648\u062C\u0647\u0627\u062A \u0641\u064A \u062F\u0641\u062A\u0631 \u0627\u0644\u0628\u062D\u0631",ability:"\u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0646\u0648\u0632",detail:"\u064A\u0643\u0634\u0641 \u0627\u0644\u0633\u0648\u0646\u0627\u0631 \u0645\u0648\u0627\u0642\u0639 \u0635\u0646\u0627\u062F\u064A\u0642 \u0627\u0644\u0643\u0646\u0632 \u0627\u0644\u0642\u0631\u064A\u0628\u0629 \u0639\u0644\u0649 \u0627\u0644\u062E\u0631\u064A\u0637\u0629.",mark:"\u25CE"}],El=(n,e)=>Math.min(e.target,e.stat==="places"?n.places.length:n.stats[e.stat]||0),ti=(n,e)=>{let t=or.find(i=>i.id===e);return!!t&&El(n,t)>=t.target};function sm(n,e,t=1){if(!Object.hasOwn(n.stats,e)||!Number.isFinite(t)||t<=0)return[];t=Math.floor(t);let i=new Set(or.filter(r=>ti(n,r.id)).map(r=>r.id));return n.stats[e]=Tl(n.stats[e]+t),or.filter(r=>!i.has(r.id)&&ti(n,r.id))}var wl=[{id:"pearls",title:"\u062E\u064A\u0637 \u0645\u0646 \u0627\u0644\u0644\u0622\u0644\u0626",detail:"\u0627\u062C\u0645\u0639 12 \u0644\u0624\u0644\u0624\u0629 \u0641\u064A \u0631\u062D\u0644\u062A\u0643",target:12,reward:90},{id:"places",title:"\u0645\u0627 \u0648\u0631\u0627\u0621 \u0627\u0644\u0634\u0639\u0627\u0628",detail:"\u0632\u0631 \u0648\u062C\u0647\u062A\u064A\u0646 \u0645\u062E\u062A\u0644\u0641\u062A\u064A\u0646 \u0641\u064A \u0627\u0644\u062E\u0644\u064A\u062C",target:2,reward:120},{id:"breaches",title:"\u0644\u0645\u0633\u0629 \u0645\u0646 \u0627\u0644\u0633\u0645\u0627\u0621",detail:"\u0627\u0642\u0641\u0632 \u0641\u0648\u0642 \u0627\u0644\u0633\u0637\u062D \u0645\u0631\u062A\u064A\u0646 \u2014 \u0627\u063A\u0635 \u0628\u064A\u0646 \u0627\u0644\u0642\u0641\u0632\u062A\u064A\u0646",target:2,reward:100},{id:"races",title:"\u0627\u0631\u0642\u0635 \u0645\u0639 \u0627\u0644\u062A\u064A\u0627\u0631",detail:"\u0623\u0643\u0645\u0644 \u0633\u0628\u0627\u0642 \u062D\u0644\u0642\u0627\u062A \u0648\u0627\u062D\u062F\u0627\u064B",target:1,reward:150},{id:"treasures",title:"\u0623\u0633\u0631\u0627\u0631 \u0627\u0644\u0628\u062D\u0631",detail:"\u0627\u0641\u062A\u062D \u0635\u0646\u062F\u0648\u0642\u064A \u0643\u0646\u0632",target:2,reward:140},{id:"escapes",title:"\u0623\u0630\u0643\u0649 \u0645\u0646 \u0627\u0644\u0645\u0641\u062A\u0631\u0633",detail:"\u0627\u0641\u0644\u062A \u0645\u0646 \u0645\u0637\u0627\u0631\u062F\u0629 \u0648\u0627\u062D\u062F\u0629",target:1,reward:160}];function am(n){let e;try{e=JSON.parse(n?.getItem(nm)||"null")}catch{}return{xp:Tl(e?.xp),quests:Tl(e?.quests,1e5),stats:Object.fromEntries(["pearls","breaches","escapes","races","treasures"].map(t=>[t,Tl(e?.stats?.[t])])),places:Array.isArray(e?.places)?[...new Set(e.places.filter(t=>typeof t=="string"&&/^(reef|kelp|abyss):[a-z-]{1,30}$/.test(t)))].slice(0,60):[],species:Array.isArray(e?.species)?[...new Set(e.species.filter(t=>["turtle","manta","school"].includes(t)))]:[],raceBest:Number.isFinite(e?.raceBest)&&e.raceBest>0?Math.min(e.raceBest,120):null}}function om(n,e){try{return e?.setItem(nm,JSON.stringify(n)),!0}catch{return!1}}var lm=n=>Math.min(3,Math.floor(n.xp/650));function pu(n){return{questIndex:n.quests%wl.length,completed:0,counters:{pearls:0,places:0,breaches:0,races:0,treasures:0,escapes:0},baseline:0,visited:[],discoveredSpecies:[],nextEvent:28,eventIndex:0,event:null,elapsed:0}}function oa(n){let e=wl[n.questIndex];return{...e,progress:Math.min(e.target,n.counters[e.id]-n.baseline)}}function cm(n,e,t,i=1){if(!Object.hasOwn(n.counters,t)||!Number.isFinite(i)||i<=0)return null;i=Math.floor(i),n.counters[t]+=i;let r=oa(n);return r.progress<r.target?null:(e.quests++,e.xp+=r.reward,n.completed++,n.questIndex=(n.questIndex+1)%wl.length,n.baseline=n.counters[wl[n.questIndex].id],r)}function hm(n,e,t,i){if(n.visited.includes(i))return null;n.visited.push(i);let r=t+":"+i,s=!e.places.includes(r);return s&&(e.places.push(r),e.xp+=60),{first:s,delta:s?60:20}}var he=n=>document.getElementById(n),pa=matchMedia("(pointer:coarse)").matches,ns=matchMedia("(prefers-reduced-motion:reduce)").matches,um=new b(0,0,-1),dm=new b,mu=new Tt,Kt=new b,Ui=new b,fu=new b,ma;try{ma=localStorage}catch{}var Ze=am(ma),et=new Ml,ca=0;try{ca=Number(ma?.getItem("amaq-best"))||0}catch{}var ot="menu",as="reef",se=su(),Fe=du(),Je=pu(Ze),Gn=0,Al=0,xu=0,gu=0,vu=0,Rt,qt,Ot,ii,da,rs,lr,os,yn=[],cr=[],_m=[],je=null,ss="coral-cathedral",ha=0,ua=0,la=0;var Jt=new Set,jt={x:0,y:0,id:null},Ct={id:null,x:0,y:0,yaw:0,pitch:0},Rl=new Map,fa=!1,ga=!1,Pl=!1,pm=new Vt(.22,16,10),s0=new Ci(.43,.018,5,32),a0=new Ci(2,.055,8,64),mm=new Ei(1.15,.8,.7),en={pearl:new mn({color:16772291,roughness:.16,metalness:.25,clearcoat:1,emissive:12297845,emissiveIntensity:.2}),gold:new kt({color:16761950,metalness:.55,roughness:.22,emissive:10968338,emissiveIntensity:.35}),chest:new kt({color:7492930,metalness:.2,roughness:.7}),ring:new kt({color:8905936,emissive:2722697,emissiveIntensity:.65,metalness:.35,roughness:.25}),halo:new Xi({color:16769958,transparent:!0,opacity:.45,depthWrite:!1}),jelly:new mn({color:12422604,emissive:5454194,emissiveIntensity:.45,roughness:.25,transparent:!0,opacity:.62,side:at,depthWrite:!1})},o0=en.ring.clone();function $t(n){return new b(n.x,n.y,n.z)}function Mt(n){he("toast").textContent=n,he("toast").classList.add("visible"),xu=4.5}function ls(){om(Ze,ma);try{Fe.score>ca&&(ca=Fe.score,ma?.setItem("amaq-best",String(ca)))}catch{}he("best").textContent=ca}function Ni(n,e=se.position,t=""){(n||t)&&os.show(n,$t(e),t),n>0&&lr.burst($t(e))}function hr(n,e=1){let t=sm(Ze,n,e),i=cm(Je,Ze,n,e);if(i?.id==="places"&&(Je.questPlaces=[]),i){let r=Lt(Fe,i.reward);Ni(r,se.position,"\u062A\u062D\u062F\u0651\u064D \u0645\u0643\u062A\u0645\u0644"),Mt("\u0627\u0643\u062A\u0645\u0644 \xAB"+i.title+"\xBB \u2014 \u0647\u062F\u0641 \u062C\u062F\u064A\u062F \u064A\u0646\u062A\u0638\u0631\u0643"),et.play("win")}for(let r of t)Mt("\u0641\u062A\u062D\u062A "+r.name+" \u2014 "+r.ability),Ni(0,se.position,r.ability),et.play("frenzy");ls(),Dl()}function Mn(n){ot=n,document.documentElement.dataset.mode=n,Jt.clear(),jt.x=jt.y=0,jt.id=null,Ct.id=null,Ct.yaw=Ct.pitch=0,Rl.clear(),fa=ga=!1,he("stick").querySelector("i").style.transform="",he("menu").hidden=n==="playing",he("hud").hidden=n!=="playing",he("pause").hidden=n==="menu"||n==="ended",he("home").hidden=n==="menu",he("worlds").hidden=n==="paused",he("results").hidden=n!=="ended",he("heading").innerHTML=n==="paused"?"\u0627\u0644\u0628\u062D\u0631 \u064A\u0646\u062A\u0638\u0631\u0643.":n==="ended"?"\u062D\u0643\u0627\u064A\u0629\u064C \u062A\u0633\u062A\u062D\u0642<br><em>\u0631\u062D\u0644\u0629 \u0623\u062E\u0631\u0649.</em>":"\u0644\u0627 \u0637\u0631\u064A\u0642\u064E \u0648\u0627\u062D\u062F\u0627\u064B.<br><em>\u0627\u0644\u0628\u062D\u0631 \u0644\u0643.</em>",he("description").textContent=n==="paused"?"\u0631\u062D\u0644\u062A\u0643 \u0645\u062D\u0641\u0648\u0638\u0629 \u0647\u0646\u0627. \u062A\u0627\u0628\u0639 \u0627\u0644\u0633\u0628\u0627\u062D\u0629 \u0639\u0646\u062F\u0645\u0627 \u062A\u0643\u0648\u0646 \u0645\u0633\u062A\u0639\u062F\u0627\u064B.":n==="ended"?"\u062A\u0628\u0642\u0649 \u0645\u064A\u062F\u0627\u0644\u064A\u0627\u062A\u0643 \u0648\u0627\u0643\u062A\u0634\u0627\u0641\u0627\u062A\u0643 \u0645\u0639\u0643. \u0639\u062F \u0625\u0644\u0649 \u0627\u0644\u0628\u062D\u0631 \u0628\u0642\u062F\u0631\u0627\u062A\u0643 \u0627\u0644\u062C\u062F\u064A\u062F\u0629.":"\u0627\u0633\u0628\u062D \u062D\u064A\u062B \u064A\u0642\u0648\u062F\u0643 \u0641\u0636\u0648\u0644\u0643. \u0645\u0646 \u062D\u062F\u0627\u0626\u0642 \u0627\u0644\u0645\u0631\u062C\u0627\u0646 \u0625\u0644\u0649 \u0636\u0648\u0621 \u0627\u0644\u0633\u0637\u062D \u2014 \u0627\u0643\u062A\u0634\u0641\u060C \u0631\u0627\u0648\u0650\u063A\u060C \u0648\u0627\u0642\u0641\u0632.",he("start").querySelector("span").textContent=n==="paused"?"\u062A\u0627\u0628\u0639 \u0627\u0644\u0631\u062D\u0644\u0629":"\u0627\u0628\u062F\u0623 \u0627\u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641",n==="ended"&&(he("results").innerHTML="<span>\u0627\u0644\u0646\u0642\u0627\u0637<b>"+Fe.score+"</b></span><span>\u0627\u0644\u0627\u0643\u062A\u0634\u0627\u0641\u0627\u062A<b>"+Je.visited.length+"</b></span><span>\u0627\u0644\u0648\u0642\u062A<b>"+Math.floor(Fe.elapsed/60)+" \u062F</b></span>"),et.setMode(n),n==="menu"&&os.clear(),n!=="playing"&&ls(),Dl()}function Su(n,e,t=0,i=0,r=1){dm.set(Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t)),mu.setFromUnitVectors(um,dm),i&&mu.multiply(new Tt().setFromAxisAngle(um,i)),n.quaternion.slerp(mu,1-Math.exp(-r*9))}function xn(n,e,t,i,r={}){let s=new It;if(n==="chest"){let o=new He(mm,en.chest);s.add(o),o.castShadow=!0;let l=new He(mm,en.gold);l.scale.set(1.03,.15,1.04),l.position.y=.38,s.add(l);let c=new He(pm,en.gold);c.position.set(0,.05,.38),c.scale.setScalar(.65),s.add(c)}else if(n==="jelly"){let o=new He(new Vt(.65,16,10,0,Math.PI*2,0,Math.PI*.6),en.jelly);s.add(o);let l=new ke,c=[];for(let h=0;h<8;h++)for(let u=0;u<8;u++){let d=h*Math.PI/4,p=.4;c.push(Math.cos(d)*p+Math.sin(u*.7)*.08,-u*.19,Math.sin(d)*p,Math.cos(d)*p+Math.sin((u+1)*.7)*.08,-(u+1)*.19,Math.sin(d)*p)}l.setAttribute("position",new fe(c,3)),s.add(new Us(l,new Nr({color:12695535,transparent:!0,opacity:.65}))),s.userData.owned=!0}else{let o=new He(pm,n==="pearl"?en.pearl:en.gold);(n==="shield"||n==="magnet")&&(o.material=en.ring),s.add(o);let l=new He(s0,en.halo);s.add(l)}s.position.set(e,t,i),r.testPlacement||Ll(s.position,null,n==="jelly"?1:.7),qt.add(s);let a={kind:n,mesh:s,base:s.position.clone(),active:!0,respawn:0,temporary:r.temporary||!1,phase:Math.random()*6.28};return yn.push(a),a}function xm(n){qt.remove(n.mesh),n.mesh.userData.owned&&n.mesh.traverse(e=>{e.geometry?.dispose(),e.material&&e.material!==en.jelly&&e.material.dispose()})}function l0(){for(let e of yn)xm(e);yn=[];let n=new b(0,10,22);for(let e of ii.landmarks){if(e.type==="sanctuary")continue;let t=e.position.clone();for(let i=1;i<=10;i++){let r=n.clone().lerp(t,i/11);r.x+=Math.sin(i*.7)*2,r.y=Math.max(pt(r.x,r.z)+1.3,r.y+Math.sin(i)*.5),xn(i%5===0?"gold":"pearl",r.x,r.y,r.z)}xn("chest",t.x+2,t.y+1,t.z-2);for(let i=0;i<7;i++){let r=i/7*Math.PI*2;xn("pearl",t.x+Math.cos(r)*5,t.y+1+Math.sin(r)*2,t.z+Math.sin(r)*5)}}for(let e=0;e<5;e++)xn("pearl",0,10,18-e*1.6);cr.forEach(e=>{qt.remove(e.mesh),$p(e.mesh)}),cr=[];for(let[e,t]of[[0,{x:42,y:7,z:-28}],[1,{x:-58,y:6,z:-45}]]){let i=ou(e,t),r=xl("predator");qt.add(r),cr.push({state:i,mesh:r})}je&&(je.meshes.forEach(e=>qt.remove(e)),je=null)}function c0(){for(let n=0;n<(pa?18:28);n++){let e=n<2?"turtle":n<4?"manta":"school",t=xl(e,{scale:e==="school"?.4:1});qt.add(t),_m.push({kind:e,mesh:t,phase:n*2.41,center:new b(Math.sin(n*2.4)*55,5+Math.sin(n)*4,Math.cos(n*2.4)*55-15),radius:e==="manta"?16:e==="turtle"?9:5})}}function Il(){if(ot==="paused"){Mn("playing"),_n.focus();return}se=su(),Fe=du(),Je=pu(Ze),lr.clear(),os.clear(),l0(),ua=0,ha=0,ss=ii.landmarks.find(n=>n.type!=="sanctuary").id,Ot.position.set(0,12.4,30),Mn("playing"),_n.focus(),et.play("start"),Mt(pa?"\u0627\u0644\u062F\u0627\u0626\u0631\u0629 \u0644\u0644\u0633\u0628\u0627\u062D\u0629 \u0648\u0627\u0644\u0627\u0644\u062A\u0641\u0627\u0641 \xB7 \u0635\u0639\u0648\u062F \u0648\u063A\u0648\u0635 \u064A\u0645\u064A\u0646 \u0627\u0644\u0634\u0627\u0634\u0629":"\u0627\u0644\u0623\u0633\u0647\u0645 \u0644\u0644\u0633\u0628\u0627\u062D\u0629 \u0648\u0627\u0644\u0627\u0644\u062A\u0641\u0627\u0641 \xB7 R \u0644\u0644\u0635\u0639\u0648\u062F \u0648F \u0644\u0644\u063A\u0648\u0635 \xB7 \u0627\u0633\u062D\u0628 \u0627\u0644\u0628\u062D\u0631 \u0644\u062A\u063A\u064A\u064A\u0631 \u0646\u0638\u0631\u0643")}function fm(){ot==="playing"?Mn("paused"):ot==="paused"&&Il()}function h0(n){as=n,ii.setBiome(n),document.documentElement.dataset.world=n,document.querySelectorAll("#worlds button").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.world===n))),Dl()}function bu(){if(je){Mt("\u0623\u0643\u0645\u0644 \u0633\u0628\u0627\u0642\u0643 \u0627\u0644\u062D\u0627\u0644\u064A \u0623\u0648\u0644\u0627\u064B");return}let n=$t(se.position),e=se.yaw,t=Math.hypot(n.x,n.z)>90?Math.atan2(-n.x,n.z):e,i=[];for(let s=0;s<7;s++){let a=t+Math.sin(s*.65)*.65,o=7+s*6.5,l=n.x+Math.sin(a)*o,c=n.z-Math.cos(a)*o,h=vn(n.y+Math.sin(s*.9)*3.5,pt(l,c)+2,16.5),u=new b(l,h,c);Ll(u,null,2.2),u.y=vn(u.y,pt(u.x,u.z)+2,16.5),i.push(u)}let r=i.map((s,a)=>{let o=new He(a0,o0);return o.position.copy(s),o.lookAt(i[Math.min(a+1,6)].clone().add(new b(.01,0,0))),qt.add(o),o});je={points:i,meshes:r,index:0,time:55,total:0},Mt("\u0633\u0628\u0627\u0642 \u0627\u0644\u062A\u064A\u0627\u0631: \u0627\u0639\u0628\u0631 7 \u062D\u0644\u0642\u0627\u062A \u0645\u0631\u062A\u0628\u0629 \u062E\u0644\u0627\u0644 55 \u062B\u0627\u0646\u064A\u0629"),et.play("gate")}function gm(n){if(!je)return;let e=je.total;if(je.meshes.forEach(t=>qt.remove(t)),je=null,n){let t=Lt(Fe,220);Ni(t,se.position,"\u0633\u0628\u0627\u0642 \u0645\u0643\u062A\u0645\u0644"),hr("races"),(!Ze.raceBest||e<Ze.raceBest)&&(Ze.raceBest=e),ls(),et.play("win"),Mt("\u0633\u0628\u0627\u0642 \u0645\u0643\u062A\u0645\u0644! "+e.toFixed(1)+" \u062B\u0627\u0646\u064A\u0629 \u2014 +220")}else Mt("\u0641\u0627\u062A \u0648\u0642\u062A \u0627\u0644\u0633\u0628\u0627\u0642. \u062C\u0631\u0651\u0628 \u0645\u062C\u062F\u062F\u0627\u064B \u0645\u0646 \u062F\u0641\u062A\u0631 \u0627\u0644\u0628\u062D\u0631\u061B \u0644\u0627 \u062A\u062E\u0633\u0631 \u0646\u0642\u0627\u0637\u0627\u064B.")}function ym(n){let e=$t(se.position),t=new b(Math.sin(se.yaw),0,-Math.cos(se.yaw));if(n==="current"){bu();return}if(n==="bloom"){Mt("\u0627\u0632\u062F\u0647\u0627\u0631 \u0645\u0636\u064A\u0621 \u2014 \u0644\u0622\u0644\u0626 \u0630\u0647\u0628\u064A\u0629 \u0628\u064A\u0646 \u0642\u0646\u0627\u062F\u064A\u0644 \u0627\u0644\u0628\u062D\u0631!"),et.play("discover");let i=e.clone().addScaledVector(t,18);i.y=vn(i.y,0,13);for(let r=0;r<10;r++){let s=r/10*Math.PI*2;xn(r%3===0?"jelly":"gold",i.x+Math.cos(s)*8,i.y+Math.sin(s*2)*2,i.z+Math.sin(s)*8,{temporary:!0})}Je.event={name:"\u0627\u0632\u062F\u0647\u0627\u0631 \u0627\u0644\u0642\u0646\u0627\u062F\u064A\u0644",remaining:40}}else if(n==="shoal"){Mt("\u0645\u0631\u0651 \u0633\u0631\u0628 \u0627\u0644\u0644\u0624\u0644\u0624! \u0627\u062A\u0628\u0639 \u0627\u0644\u0644\u0645\u0639\u0627\u0646 \u0642\u0628\u0644 \u0623\u0646 \u064A\u062E\u062A\u0641\u064A"),et.play("frenzy");for(let i=0;i<18;i++){let r=e.clone().addScaledVector(t,7+i*1.9);r.x+=Math.sin(i*.55)*4,r.y=vn(r.y+Math.sin(i*.3)*2,0,16),Math.hypot(r.x,r.z)<140&&xn("gold",r.x,r.y,r.z,{temporary:!0})}Je.event={name:"\u0633\u0631\u0628 \u0627\u0644\u0644\u0624\u0644\u0624 \u0627\u0644\u0630\u0647\u0628\u064A",remaining:35}}else{Mt("\u0643\u0634\u0641 \u0627\u0644\u0645\u062F\u0651 \u0639\u0646 \u0643\u0646\u0632 \u0642\u0631\u064A\u0628 \u2014 \u0627\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0644\u0645\u0639\u0627\u0646"),et.play("treasure");let i=e.clone().addScaledVector(t,14);i.y=vn(i.y-3,pt(i.x,i.z)+1,15),xn("chest",i.x,i.y,i.z,{temporary:!0}),xn("magnet",i.x+2,i.y+1,i.z,{temporary:!0}),Je.event={name:"\u0647\u062F\u064A\u0629 \u0627\u0644\u0645\u062F\u0651",remaining:50}}}function u0(n,e){let t=$t(se.position);for(let i of yn){if(!i.active){i.respawn-=n,i.respawn<=0&&!i.temporary&&(i.active=!0,i.mesh.visible=!0,i.mesh.position.copy(i.base));continue}(Fe.magnet>0||ti(Ze,"pearl"))&&["pearl","gold"].includes(i.kind)&&i.mesh.position.distanceTo(t)<(Fe.magnet>0?7:3)?i.mesh.position.lerp(t,1-Math.exp(-n*5)):i.mesh.position.y=i.base.y+Math.sin(Gn*1.8+i.phase)*(i.kind==="jelly"?.5:.15),i.mesh.rotation.y+=n*.4;let r=i.kind==="jelly"?1.2:i.kind==="chest"?1.3:.8;if(!gl(e,se.position,i.mesh.position,i.mesh.position,r))continue;if(i.kind==="jelly"){Mm();continue}i.active=!1,i.mesh.visible=!1,i.respawn=i.kind==="chest"?100:55;let s=Fe.score;if(i.kind==="chest"){let a=tm(Fe);Ni(a.delta,i.mesh.position,a.reward==="jackpot"?"\u0643\u0646\u0632 \u0646\u0627\u062F\u0631":"\u0643\u0646\u0632 \u0627\u0644\u0628\u062D\u0631"),hr("treasures"),et.play("treasure")}else em(Fe,i.kind),Ni(Fe.score-s,i.mesh.position),et.play(i.kind,{combo:Fe.combo}),["pearl","gold"].includes(i.kind)&&hr("pearls")}}function Mm(){if(se.feintTime>0)return;let n=Fe.score,e=im(Fe);e!=="immune"&&(Ni(Fe.score-n,se.position,e==="shield"?"\u062D\u0645\u0627\u064A\u0629":e==="defeated"?"\u0627\u0646\u062F\u0641\u0627\u0639 \u0648\u0627\u0642\u064D":""),et.play(e==="hurt"?"hurt":"block"),e==="hurt"&&(document.documentElement.dataset.hurt="true",setTimeout(()=>delete document.documentElement.dataset.hurt,300),Mt("\u0627\u0642\u062A\u0631\u0628 \u0645\u0646\u0643 \u0627\u0644\u062E\u0637\u0631 \u2014 \u063A\u064A\u0651\u0631 \u0627\u062A\u062C\u0627\u0647\u0643 \u0623\u0648 \u0627\u0646\u062F\u0641\u0639 \u0628\u0639\u064A\u062F\u0627\u064B")),Fe.ended&&Mn("ended"))}function d0(n){let e=$t(se.position).distanceTo(new b(0,10,22))<11;he("safe-label").hidden=!e;let t=null;for(let i of cr){let r=i.state.mode==="chase",s=Yp(i.state,se,n,{safe:e});i.mesh.position.copy($t(i.state.position)),Su(i.mesh,i.state.yaw,i.state.pitch,0,n),yl(i.mesh,Gn,i.state.mode==="chase"?1.8:.7);for(let o of s)if(o.type==="alert"&&(Mt("\u0645\u0641\u062A\u0631\u0633 \u064A\u062A\u0623\u0647\u0651\u0628 \u0644\u0644\u0645\u0637\u0627\u0631\u062F\u0629 \u2014 \u063A\u064A\u0651\u0631 \u0627\u062A\u062C\u0627\u0647\u0643 \u0648\u0627\u0633\u062A\u0639\u062F \u0644\u0644\u0627\u0646\u062F\u0641\u0627\u0639"),et.play("guardian")),o.type==="attack"&&Mm(),o.type==="escaped"&&r){let l=Lt(Fe,35);Ni(l,se.position,"\u0647\u0631\u0628\u062A \u0628\u0646\u062C\u0627\u062D"),hr("escapes"),et.play("nearMiss")}let a=$t(i.state.position).distanceTo($t(se.position));["chase","telegraph"].includes(i.state.mode)&&(!t||a<t.distance)&&(t={distance:a,x:(i.state.position.x-se.position.x)*Math.cos(se.yaw)+(i.state.position.z-se.position.z)*Math.sin(se.yaw),hunter:i})}return he("threat").hidden=!t,t&&(he("threat").textContent=(t.hunter.state.mode==="telegraph"?"\u064A\u0633\u062A\u0639\u062F \u0644\u0644\u0645\u0637\u0627\u0631\u062F\u0629":"\u0645\u0637\u0627\u0631\u062F\u0629")+" \xB7 "+Math.round(t.distance)+" \u0645 \u2014 \u0627\u0644\u062A\u0641\u0651\u060C \u0627\u063A\u0635 \u0623\u0648 \u0627\u0646\u062F\u0641\u0639"),e?(ua+=n,ua>=14&&Fe.lives<3&&(Fe.lives++,ua=0,Mt("\u0627\u0644\u0645\u0644\u0627\u0630 \u0623\u0639\u0627\u062F \u0644\u0643 \u0645\u062D\u0627\u0648\u0644\u0629"),et.play("shield"))):ua=0,t}function vm(n){let e=[];for(let t of ii.landmarks){if(ot!=="playing"||t.type==="sanctuary"||t.position.distanceTo($t(se.position))>t.radius||(e.push(t.id),(Je.insidePlaces||[]).includes(t.id)))continue;let i=ti(Ze,"explorer"),r=hm(Je,Ze,as,t.id);r&&(Ni(Lt(Fe,r.delta),t.position,r.first?"\u0627\u0643\u062A\u0634\u0627\u0641 \u062C\u062F\u064A\u062F":t.name),Mt("\u0648\u0635\u0644\u062A \u0625\u0644\u0649 "+t.name),et.play("discover")),Je.questPlaces||(Je.questPlaces=[]),oa(Je).id!=="places"&&(Je.questPlaces=[]),Je.questPlaces.includes(t.id)||(Je.questPlaces.push(t.id),hr("places")),!i&&ti(Ze,"explorer")&&Mt("\u0641\u062A\u062D\u062A \u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u0627\u0644\u0631\u062D\u0651\u0627\u0644\u0629 \u2014 \u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0646\u0648\u0632 \u0639\u0644\u0649 \u0627\u0644\u0633\u0648\u0646\u0627\u0631")}Je.insidePlaces=e;for(let t of _m){let i=Gn*(t.kind==="school"?.23:.1)+t.phase;t.mesh.position.set(t.center.x+Math.cos(i)*t.radius,t.center.y+Math.sin(i*.7)*1.2,t.center.z+Math.sin(i)*t.radius),Su(t.mesh,-i,Math.cos(i*.7)*.07,Math.sin(i)*.1,n),yl(t.mesh,Gn,t.kind==="school"?1:.6),ot==="playing"&&t.mesh.position.distanceTo($t(se.position))<5&&!Je.discoveredSpecies.includes(t.kind)&&(Je.discoveredSpecies.push(t.kind),Ze.species.includes(t.kind)||(Ze.species.push(t.kind),Ze.xp+=35,Ni(Lt(Fe,35),t.mesh.position,{turtle:"\u0633\u0644\u062D\u0641\u0627\u0629 \u0628\u062D\u0631\u064A\u0629",manta:"\u0634\u064A\u0637\u0627\u0646 \u0627\u0644\u0628\u062D\u0631",school:"\u0633\u0631\u0628 \u0627\u0644\u0634\u0639\u0627\u0628"}[t.kind]),et.play("discover"),ls()))}}function yu(n){if(Gn+=n,xu-=n,xu<=0&&he("toast").classList.remove("visible"),ot==="playing"){let i={...se.position},r={turn:vn((Jt.has("ArrowRight")||Jt.has("KeyD")?1:0)-(Jt.has("ArrowLeft")||Jt.has("KeyA")?1:0)+jt.x,-1,1),throttle:vn((Jt.has("ArrowUp")||Jt.has("KeyW")?1:0)-(Jt.has("ArrowDown")||Jt.has("KeyS")?1:0)-jt.y,-1,1),lift:vn((Jt.has("KeyR")||Jt.has("KeyE")?1:0)-(Jt.has("KeyF")||Jt.has("KeyQ")?1:0)+[...Rl.values()].reduce((l,c)=>l+c,0),-1,1),lookYaw:Ct.yaw,lookPitch:Ct.pitch,boost:fa};Ct.yaw=Ct.pitch=0,ga&&(ti(Ze,"messi")?au(se)&&(Fe.invulnerable=Math.max(Fe.invulnerable,.9),et.play("nearMiss"),lr.burst($t(se.position),9238244),Mt("\u0645\u0631\u0627\u0648\u063A\u0629 \u0645\u064A\u0633\u064A!")):Mt("\u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u0645\u064A\u0633\u064A: \u0627\u0647\u0631\u0628 \u0645\u0646 3 \u0645\u0637\u0627\u0631\u062F\u0627\u062A \u0644\u0641\u062A\u062D \u0627\u0644\u0645\u0631\u0627\u0648\u063A\u0629"));let s=se.boost,a=qp(se,r,n);Ll(se.position,se.velocity,.6),se.boost>s&&(et.play("dash"),ti(Ze,"dolphin")&&(se.cooldown*=.75)),fa=ga=!1;for(let l of a)l.type==="breach"&&(lr.splash(new b(se.position.x,18,se.position.z)),et.play("breach"),hr("breaches"),Ni(Lt(Fe,10),se.position,"\u0644\u0645\u0633\u0629 \u0627\u0644\u0633\u0645\u0627\u0621")),l.type==="splash"&&(lr.splash(new b(se.position.x,18,se.position.z),1.3),et.play("splash"),ha=1),l.type==="boundary"&&Mt("\u062A\u064A\u0627\u0631 \u0642\u0648\u064A \u0639\u0646\u062F \u062D\u0627\u0641\u0629 \u0627\u0644\u062E\u0644\u064A\u062C \u2014 \u0639\u064F\u062F \u0625\u0644\u0649 \u0627\u0644\u0634\u0639\u0627\u0628");Fe.elapsed+=n,Fe.distance=se.distance,Fe.boost=se.boost,Fe.cooldown=se.cooldown;for(let l of["shield","invulnerable","magnet","frenzy","current","comboTime"])Fe[l]=Math.max(0,Fe[l]-n);if(Fe.comboTime||(Fe.combo=0),u0(n,i),ot!=="playing")return;let o=d0(n);if(ot!=="playing")return;if(vm(n),je){je.time-=n,je.total+=n;let l=je.points[je.index];gl(i,se.position,l,l,2)&&(je.meshes[je.index].visible=!1,je.index++,Ni(Lt(Fe,15),se.position),et.play("gate"),je.index===je.points.length&&gm(!0)),je&&je.time<=0&&gm(!1)}if(Je.elapsed+=n,Je.nextEvent-=n,Je.nextEvent<=0&&(ym(["shoal","bloom","treasure","current"][Je.eventIndex++%4]),Je.nextEvent=72),Je.event&&(Je.event.remaining-=n,Je.event.remaining<=0)){for(let l of yn.filter(c=>c.temporary))xm(l);yn=yn.filter(l=>!l.temporary),Je.event=null}et.update({world:as,speed:Math.min(1,se.speed/12),boosting:se.boost>0,threat:o,aboveWater:se.airborne}),vu+=n,vu>5&&(vu=0,ls())}else ot==="menu"&&vm(n);let e=ot!=="menu";Kt.copy(e?$t(se.position):new b(0,11,22)),da.position.copy(Kt);let t=e?Math.atan2(se.velocity.y,Math.max(2,Math.hypot(se.velocity.x,se.velocity.z))):0;Su(da,e?se.yaw:-1.15,t,e?-jt.x*.12:0,n),yl(da,Gn,e?.55+se.speed*.065:.55),rs.position.copy(Kt),rs.visible=e&&(Fe.shield>0||se.feintTime>0),rs.material.opacity=se.feintTime>0?.12:.065,p0(n,e),ii.update(n,Gn,Kt,Ot),lr.update(ot==="paused"?0:n,Kt,$t(se.velocity),Gn,18,ot==="playing"),os.update(n,Ot,ot==="playing"),ha=Math.max(0,ha-n*.45),he("water-drops").style.opacity=ns?"0":String(ha*.75),gu+=n,gu>.1&&(gu=0,m0())}function Ll(n,e,t){for(let i of ii.obstacles||[]){let r=$t(n).sub(i.position),s=i.radius+t,a=r.length();if(!(a>=s)&&(a<.001?r.set(0,1,0):r.divideScalar(a),n.x=i.position.x+r.x*s,n.y=i.position.y+r.y*s,n.z=i.position.z+r.z*s,e)){let o=Math.min(0,e.x*r.x+e.y*r.y+e.z*r.z);e.x-=r.x*o,e.y-=r.y*o,e.z-=r.z*o}}}function p0(n,e){if(!e)Ui.set(7.5,12.8,29),fu.set(-.2,10.8,21.4);else{let t=pa&&innerHeight>innerWidth?9:7.4;Ui.copy(Kt).add(new b(-Math.sin(se.yaw)*t,2.1,Math.cos(se.yaw)*t)),Kt.y<18-.3&&(Ui.y=Math.min(Ui.y,18-.48)),Ui.y=Math.max(pt(Ui.x,Ui.z)+1,Ui.y),fu.copy(Kt).add(new b(Math.sin(se.yaw)*4,Math.sin(se.pitch)*3+.3,-Math.cos(se.yaw)*4))}if(e){let t=Ui.clone().sub(Kt),i=t.length();t.normalize();let r=i;for(let s of ii.obstacles||[]){let a=s.position.clone().sub(Kt),o=a.dot(t),l=s.radius+.35;if(o<=0||o>=i)continue;let c=a.lengthSq()-o*o;c<l*l&&(r=Math.min(r,Math.max(2,o-Math.sqrt(l*l-c)-.25)))}Ui.copy(Kt).addScaledVector(t,r)}Ot.position.lerp(Ui,ns?1:1-Math.exp(-n*(e?7:2))),Ll(Ot.position,null,.3),Ot.lookAt(fu),Ot.fov=ei.lerp(Ot.fov,se.boost>0&&e&&!ns?64:58,1-Math.exp(-n*4)),Ot.updateProjectionMatrix()}function m0(){he("score").textContent=Fe.score,he("combo").textContent=Fe.combo>1?"\u0633\u0644\u0633\u0644\u0629 \xD7"+Fe.combo:"",he("lives").textContent="\u25CF ".repeat(Math.max(0,Fe.lives)),he("lives").setAttribute("aria-label",Fe.lives+" \u0645\u062D\u0627\u0648\u0644\u0627\u062A"),he("shield").textContent=Fe.shield>0?"\u062D\u0645\u0627\u064A\u0629 "+Math.ceil(Fe.shield)+" \u062B":Fe.magnet>0?"\u062C\u0627\u0630\u0628\u064A\u0629 \u0627\u0644\u0644\u0622\u0644\u0626":"",he("depth").textContent=se.airborne?"\u0641\u0648\u0642 \u0627\u0644\u0633\u0637\u062D":Math.max(0,18-se.position.y).toFixed(1)+" \u0645";let n=(se.yaw*180/Math.PI%360+360)%360;he("heading-value").textContent=Math.round(n)+"\xB0",he("energy").max=4,he("energy").value=Math.max(0,4-se.cooldown),he("boost-label").textContent=se.cooldown>0?"\u0627\u0644\u0627\u0646\u062F\u0641\u0627\u0639 "+se.cooldown.toFixed(1)+" \u062B":"\u0627\u0644\u0627\u0646\u062F\u0641\u0627\u0639 \u062C\u0627\u0647\u0632";let e=oa(Je);he("quest-title").textContent=e.title,he("quest-detail").textContent=e.detail,he("quest-count").textContent=e.progress+" / "+e.target,he("quest-progress").max=e.target,he("quest-progress").value=e.progress;let t=je?{name:"\u0627\u0644\u062D\u0644\u0642\u0629 "+(je.index+1)+" / 7",position:je.points[je.index]}:ii.landmarks.find(i=>i.id===ss);if(t){let i=t.position.distanceTo(Kt),r=t.position.y-Kt.y,s=Math.atan2(t.position.x-Kt.x,-(t.position.z-Kt.z));he("destination").textContent=t.name,he("destination-distance").textContent=Math.round(i)+" \u0645"+(Math.abs(r)>3?r>0?" \xB7 \u0623\u0639\u0644\u0649":" \xB7 \u0623\u0639\u0645\u0642":""),he("bearing").style.transform="rotate("+(s-se.yaw)*180/Math.PI+"deg)"}he("event-label").textContent=je?"\u0633\u0628\u0627\u0642 \u0627\u0644\u062A\u064A\u0627\u0631 \xB7 "+Math.ceil(je.time)+" \u062B":Je.event?Je.event.name+" \xB7 "+Math.ceil(Je.event.remaining)+" \u062B":"\u0627\u0633\u062A\u0643\u0634\u0641 \u0628\u062D\u0631\u0651\u064A\u0629 \xB7 \u0627\u0641\u062A\u062D \u062F\u0641\u062A\u0631 \u0627\u0644\u0628\u062D\u0631 \u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0648\u062C\u0647\u062A\u0643",he("skill-label").textContent=ti(Ze,"messi")?se.feintCooldown>0?"\u0645\u0631\u0627\u0648\u063A\u0629 "+Math.ceil(se.feintCooldown)+" \u062B":"\u0645\u0631\u0627\u0648\u063A\u0629 \u0645\u064A\u0633\u064A \xB7 X":"\u0627\u0644\u0645\u0631\u0627\u0648\u063A\u0629 \u0645\u0642\u0641\u0644\u0629 \xB7 3 \u0647\u0631\u0648\u0628\u0627\u062A",he("touch-skill").dataset.locked=String(!ti(Ze,"messi")),he("touch-skill").textContent=ti(Ze,"messi")?se.feintCooldown>0?Math.ceil(se.feintCooldown)+" \u062B":"\u0645\u0631\u0627\u0648\u063A\u0629":"\u0645\u0631\u0627\u0648\u063A\u0629 \u25C7",f0()}function f0(){let n=he("radar"),e=n.getContext("2d"),t=n.width,i=t/2,r=.46;e.clearRect(0,0,t,t),e.save(),e.translate(i,i),e.strokeStyle="#a5dace35",e.lineWidth=1;for(let a of[30,60,83])e.beginPath(),e.arc(0,0,a,0,Math.PI*2),e.stroke();e.beginPath(),e.moveTo(-83,0),e.lineTo(83,0),e.moveTo(0,-83),e.lineTo(0,83),e.stroke();let s=(a,o,l,c=3)=>{let h=(a-se.position.x)*r,u=(o-se.position.z)*r;Math.hypot(h,u)>83||(e.fillStyle=l,e.beginPath(),e.arc(h,u,c,0,Math.PI*2),e.fill())};for(let a of ii.landmarks)s(a.position.x,a.position.z,a.id===ss?"#ffe0a0":"#96c5bb",a.id===ss?4:2.5);if(ti(Ze,"explorer"))for(let a of yn)a.kind==="chest"&&a.active&&s(a.mesh.position.x,a.mesh.position.z,"#f8bb55",3);for(let a of cr)(a.state.mode==="chase"||a.state.mode==="telegraph")&&s(a.state.position.x,a.state.position.z,"#f29b81",4);if(je)for(let a=je.index;a<je.points.length;a++)s(je.points[a].x,je.points[a].z,"#93fce3",3);e.rotate(se.yaw),e.fillStyle="#fff2c7",e.beginPath(),e.moveTo(0,-7),e.lineTo(5,5),e.lineTo(0,2),e.lineTo(-5,5),e.closePath(),e.fill(),e.restore()}function Dl(){he("rank").textContent=rm[lm(Ze)],he("journal-count").textContent=Ze.places.length+" \u0627\u0643\u062A\u0634\u0627\u0641 \xB7 "+or.filter(n=>ti(Ze,n.id)).length+"/"+or.length+" \u0645\u064A\u062F\u0627\u0644\u064A\u0627\u062A",he("medal-list").replaceChildren();for(let n of or){let e=ti(Ze,n.id),t=document.createElement("article");t.className="medal "+(e?"unlocked":"locked"),t.innerHTML='<span class="medal-mark" aria-hidden="true">'+n.mark+"</span><div><h3>"+n.name+"</h3><b>"+n.ability+"</b><p>"+n.detail+"</p><small>"+n.condition+" \xB7 "+El(Ze,n)+"/"+n.target+(e?" \xB7 \u0645\u0641\u062A\u0648\u062D\u0629":"")+'</small><progress max="'+n.target+'" value="'+El(Ze,n)+'" aria-label="\u062A\u0642\u062F\u0645 '+n.name+'"></progress></div>',he("medal-list").append(t)}if(ii){he("destination-list").replaceChildren();for(let n of ii.landmarks){let e=document.createElement("button");e.type="button",e.className="destination-choice",e.dataset.destination=n.id,e.setAttribute("aria-pressed",String(n.id===ss)),e.innerHTML="<b>"+n.name+"</b><small>"+(n.type==="sanctuary"?"\u0645\u0646\u0637\u0642\u0629 \u0622\u0645\u0646\u0629 \u0644\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0627\u062A":Ze.places.includes(as+":"+n.id)?"\u0645\u0633\u062C\u0651\u0644\u0629 \u0641\u064A \u062F\u0641\u062A\u0631\u0643":"\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0643\u062A\u0634\u0627\u0641\u0643")+"</small>",e.onclick=()=>{ss=n.id,Cl(),Mt("\u0648\u062C\u0647\u062A\u0643: "+n.name+" \u2014 \u0627\u062A\u0628\u0639 \u0625\u0628\u0631\u0629 \u0627\u0644\u0628\u0648\u0635\u0644\u0629")},he("destination-list").append(e)}he("atlas-stats").textContent=Ze.places.length+" \u0648\u062C\u0647\u0629 \xB7 "+Ze.species.length+" \u0643\u0627\u0626\u0646\u0627\u062A \xB7 "+Ze.quests+" \u062A\u062D\u062F\u064A\u0627\u062A"+(Ze.raceBest?" \xB7 \u0623\u0633\u0631\u0639 \u0633\u0628\u0627\u0642 "+Ze.raceBest.toFixed(1)+" \u062B":"")}}function _u(){Pl=ot==="playing",Pl&&Mn("paused"),Dl(),he("atlas").showModal()}function Cl(){he("atlas").open&&(he("atlas").close(),Pl&&(Pl=!1,Il()))}function g0(){he("start").onclick=Il,he("home").onclick=()=>Mn("menu"),he("pause").onclick=fm,he("sound").onclick=()=>{et.toggle(),Mu()},he("volume").addEventListener("input",r=>{et.setVolume(Number(r.target.value)/100),Mu()}),he("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Mt("\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0647\u0646\u0627")}},document.querySelectorAll("#worlds button").forEach(r=>r.onclick=()=>h0(r.dataset.world)),he("open-atlas").onclick=_u,he("menu-atlas").onclick=_u,he("close-atlas").onclick=Cl,he("atlas").addEventListener("cancel",r=>{r.preventDefault(),Cl()}),he("start-race").onclick=()=>{Cl(),ot!=="playing"&&Il(),bu()},addEventListener("keydown",r=>{if(!(r.target.closest?.("input,textarea,select")||document.querySelector("dialog[open]"))){if(r.code==="Escape"){r.preventDefault(),r.repeat||fm();return}if(r.code==="KeyM"){r.preventDefault(),r.repeat||_u();return}ot!=="playing"||r.code==="Space"&&r.target.closest?.("button,a")||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD","KeyR","KeyF","KeyE","KeyQ","Space","KeyX"].includes(r.code)&&(r.preventDefault(),Jt.add(r.code),r.code==="Space"&&!r.repeat&&(fa=!0),r.code==="KeyX"&&!r.repeat&&(ga=!0))}}),addEventListener("keyup",r=>Jt.delete(r.code)),_n.addEventListener("pointerdown",r=>{ot==="playing"&&(Ct.id=r.pointerId,Ct.x=r.clientX,Ct.y=r.clientY,_n.setPointerCapture(r.pointerId),_n.focus())}),_n.addEventListener("pointermove",r=>{r.pointerId===Ct.id&&(Ct.yaw+=(r.clientX-Ct.x)*.005,Ct.pitch-=(r.clientY-Ct.y)*.004,Ct.x=r.clientX,Ct.y=r.clientY)});let n=r=>{r.pointerId===Ct.id&&(Ct.id=null)};_n.addEventListener("pointerup",n),_n.addEventListener("pointercancel",n);let e=he("stick"),t=r=>{if(r.pointerId!==jt.id)return;let s=e.getBoundingClientRect(),a=(r.clientX-s.x-s.width/2)/(s.width*.42),o=(r.clientY-s.y-s.height/2)/(s.height*.42),l=Math.max(1,Math.hypot(a,o));jt.x=a/l,jt.y=o/l,e.querySelector("i").style.transform="translate("+jt.x*27+"px,"+jt.y*27+"px)"};e.addEventListener("pointerdown",r=>{r.preventDefault(),ot==="playing"&&(jt.id=r.pointerId,e.setPointerCapture(r.pointerId),t(r))}),e.addEventListener("pointermove",t);let i=r=>{r.pointerId===jt.id&&(jt.id=null,jt.x=jt.y=0,e.querySelector("i").style.transform="")};e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),e.addEventListener("lostpointercapture",i);for(let[r,s]of[["touch-rise",1],["touch-dive",-1]]){let a=he(r);a.addEventListener("pointerdown",o=>{o.preventDefault(),Rl.set(o.pointerId,s),a.setPointerCapture(o.pointerId)});for(let o of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(o,l=>Rl.delete(l.pointerId))}he("touch-boost").addEventListener("pointerdown",r=>{r.preventDefault(),ot==="playing"&&(fa=!0)}),he("touch-skill").addEventListener("pointerdown",r=>{r.preventDefault(),ot==="playing"&&(ga=!0)}),addEventListener("blur",()=>{ot==="playing"&&Mn("paused"),et.quiet()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(ot==="playing"&&Mn("paused"),et.quiet()),Al=0}),addEventListener("pagehide",()=>{ls(),et.quiet()}),addEventListener("resize",v0)}function Mu(){let n=et.snapshot();he("sound").disabled=!n.supported,he("volume").disabled=!n.supported,he("sound").setAttribute("aria-pressed",String(n.enabled)),he("sound").setAttribute("aria-label",n.enabled?"\u0643\u062A\u0645 \u0627\u0644\u0635\u0648\u062A":"\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0635\u0648\u062A"),he("volume").value=Math.round(n.volume*100)}function v0(){let n=innerWidth,e=innerHeight;Ot.aspect=n/e,Ot.updateProjectionMatrix(),Rt.setSize(n,e,!1)}var _n=he("ocean");function _0(){Rt=new ul({canvas:_n,antialias:!0,powerPreference:"high-performance"}),Rt.setPixelRatio(Math.min(devicePixelRatio,pa?1.3:1.75)),Rt.setSize(innerWidth,innerHeight,!1),Rt.toneMapping=Ks,Rt.toneMappingExposure=1.05,Rt.shadowMap.enabled=!0,Rt.shadowMap.type=$n,qt=new Cs,Ot=new Nt(58,innerWidth/innerHeight,.15,650),Ot.position.set(7.5,12.8,29),ii=new _l(qt,{coarse:pa,reduced:ns}),ii.setBiome(as),da=xl("hero"),qt.add(da),lr=new bl(qt,ns),os=new Sl(he("score-feedback"),ns),rs=new He(new Vt(1.35,24,16),new Xi({color:9369049,transparent:!0,opacity:.06,depthWrite:!1})),qt.add(rs),rs.visible=!1,c0(),g0(),Mu(),Mn("menu"),he("start").disabled=!1,document.documentElement.dataset.engine="ready",document.documentElement.dataset.engineVersion="free-ocean",Rt.setAnimationLoop(n=>{let e=Al?Math.min(.05,(n-Al)/1e3):.016;Al=n,yu(e),Rt.render(qt,Ot),e>.034?la++:la=Math.max(0,la-1),la>150&&Rt.getPixelRatio()>1&&(Rt.setPixelRatio(1),la=0)})}try{_0()}catch(n){console.error(n),he("error").hidden=!1}new URLSearchParams(location.search).has("test")&&(window.__ocean={snapshot:()=>({mode:ot,world:as,run:{...Fe},position:[se.position.x,se.position.y,se.position.z],swimmer:JSON.parse(JSON.stringify(se)),audio:et.snapshot(),journal:JSON.parse(JSON.stringify(Ze)),quest:oa(Je),feedback:os.entries.map(n=>n.element.textContent),items:yn.filter(n=>n.active).map(n=>({kind:n.kind,p:n.mesh.position.toArray()})),hunters:cr.map(n=>JSON.parse(JSON.stringify(n.state))),race:je?{index:je.index,time:je.time,points:je.points.map(n=>n.toArray())}:null,landmarks:ii.landmarks.map(n=>({id:n.id,p:n.position.toArray()})),renderSize:[Rt.domElement.width,Rt.domElement.height],camera:Ot.position.toArray(),calls:Rt.info.render.calls,triangles:Rt.info.render.triangles,geometries:Rt.info.memory.geometries}),step:n=>{yu(n),Rt.render(qt,Ot)},simulate:n=>{for(let e=0;e<Math.ceil(n/.05);e++)yu(.05);Rt.render(qt,Ot)},place:(n,e,t=se.position.z)=>{Object.assign(se.position,{x:n,y:e,z:t}),Object.assign(se.velocity,{x:0,y:0,z:0}),se.airborne=!1},aim:(n,e=0)=>{se.yaw=n,se.pitch=e},spawn:(n,e,t,i)=>xn(n,e,t,i,{testPlacement:!0}),encounter:ym,progress:(n,e)=>hr(n,e),startRace:bu,hunter:(n,e)=>{Object.assign(cr[n].state,ou(n,e))},surface:18});})();
