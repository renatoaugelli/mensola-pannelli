(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Ss="180",Rr={ROTATE:0,DOLLY:1,PAN:2},Er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ed=0,ql=1,Td=2,nf=1,rf=2,kn=3,Cn=0,Fe=1,_n=2,ui=0,Cr=1,Yl=2,$l=3,Zl=4,bd=5,Di=100,Ad=101,wd=102,Rd=103,Cd=104,Pd=200,Dd=201,Ld=202,Id=203,dc=204,pc=205,Ud=206,Nd=207,Fd=208,Od=209,Bd=210,zd=211,Vd=212,Hd=213,kd=214,gc=0,mc=1,_c=2,Lr=3,vc=4,xc=5,yc=6,Sc=7,sf=0,Gd=1,Wd=2,hi=0,Xd=1,qd=2,Yd=3,$d=4,Zd=5,Kd=6,Jd=7,of=300,Ir=301,Ur=302,Mc=303,Ec=304,Xo=306,Tc=1e3,Ii=1001,bc=1002,xn=1003,jd=1004,As=1005,An=1006,ra=1007,Ui=1008,Pn=1009,af=1010,cf=1011,hs=1012,dl=1013,Oi=1014,Xn=1015,Ms=1016,pl=1017,gl=1018,fs=1020,lf=35902,uf=35899,hf=1021,ff=1022,vn=1023,ds=1026,ps=1027,df=1028,ml=1029,pf=1030,_l=1031,vl=1033,Ao=33776,wo=33777,Ro=33778,Co=33779,Ac=35840,wc=35841,Rc=35842,Cc=35843,Pc=36196,Dc=37492,Lc=37496,Ic=37808,Uc=37809,Nc=37810,Fc=37811,Oc=37812,Bc=37813,zc=37814,Vc=37815,Hc=37816,kc=37817,Gc=37818,Wc=37819,Xc=37820,qc=37821,Yc=36492,$c=36494,Zc=36495,Kc=36283,Jc=36284,jc=36285,Qc=36286,Qd=3200,tp=3201,gf=0,ep=1,ai="",sn="srgb",Nr="srgb-linear",No="linear",ne="srgb",qi=7680,Kl=519,np=512,ip=513,rp=514,mf=515,sp=516,op=517,ap=518,cp=519,Jl=35044,jl="300 es",wn=2e3,Fo=2001;class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const rs=Math.PI/180,gs=180/Math.PI;function Gi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function kt(i,t,e){return Math.max(t,Math.min(e,i))}function xl(i,t){return(i%t+t)%t}function lp(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function up(i,t,e){return i!==t?(e-i)/(t-i):0}function ss(i,t,e){return(1-e)*i+e*t}function hp(i,t,e,n){return ss(i,t,1-Math.exp(-e*n))}function fp(i,t=1){return t-Math.abs(xl(i,t*2)-t)}function dp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function pp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function mp(i,t){return i+Math.random()*(t-i)}function _p(i){return i*(.5-Math.random())}function vp(i){i!==void 0&&(Ql=i);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xp(i){return i*rs}function yp(i){return i*gs}function Sp(i){return(i&i-1)===0&&i!==0}function Mp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ep(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tp(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),h=s((t+n)/2),f=o((t+n)/2),p=s((t-n)/2),g=o((t-n)/2),m=s((n-t)/2),y=o((n-t)/2);switch(r){case"XYX":i.set(a*f,l*p,l*g,a*h);break;case"YZY":i.set(l*g,a*f,l*p,a*h);break;case"ZXZ":i.set(l*p,l*g,a*f,a*h);break;case"XZX":i.set(a*f,l*y,l*m,a*h);break;case"YXY":i.set(l*m,a*f,l*y,a*h);break;case"ZYZ":i.set(l*y,l*m,a*f,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _f={DEG2RAD:rs,RAD2DEG:gs,generateUUID:Gi,clamp:kt,euclideanModulo:xl,mapLinear:lp,inverseLerp:up,lerp:ss,damp:hp,pingpong:fp,smoothstep:dp,smootherstep:pp,randInt:gp,randFloat:mp,randFloatSpread:_p,seededRandom:vp,degToRad:xp,radToDeg:yp,isPowerOfTwo:Sp,ceilPowerOfTwo:Mp,floorPowerOfTwo:Ep,setQuaternionFromProperEuler:Tp,normalize:Ue,denormalize:yr};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],h=n[r+1],f=n[r+2],p=n[r+3];const g=s[o+0],m=s[o+1],y=s[o+2],E=s[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=f,t[e+3]=p;return}if(a===1){t[e+0]=g,t[e+1]=m,t[e+2]=y,t[e+3]=E;return}if(p!==E||l!==g||h!==m||f!==y){let v=1-a;const _=l*g+h*m+f*y+p*E,b=_>=0?1:-1,d=1-_*_;if(d>Number.EPSILON){const M=Math.sqrt(d),u=Math.atan2(M,_*b);v=Math.sin(v*u)/M,a=Math.sin(a*u)/M}const c=a*b;if(l=l*v+g*c,h=h*v+m*c,f=f*v+y*c,p=p*v+E*c,v===1-a){const M=1/Math.sqrt(l*l+h*h+f*f+p*p);l*=M,h*=M,f*=M,p*=M}}t[e]=l,t[e+1]=h,t[e+2]=f,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],h=n[r+2],f=n[r+3],p=s[o],g=s[o+1],m=s[o+2],y=s[o+3];return t[e]=a*y+f*p+l*m-h*g,t[e+1]=l*y+f*g+h*p-a*m,t[e+2]=h*y+f*m+a*g-l*p,t[e+3]=f*y-a*p-l*g-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),f=a(r/2),p=a(s/2),g=l(n/2),m=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=g*f*p+h*m*y,this._y=h*m*p-g*f*y,this._z=h*f*y+g*m*p,this._w=h*f*p-g*m*y;break;case"YXZ":this._x=g*f*p+h*m*y,this._y=h*m*p-g*f*y,this._z=h*f*y-g*m*p,this._w=h*f*p+g*m*y;break;case"ZXY":this._x=g*f*p-h*m*y,this._y=h*m*p+g*f*y,this._z=h*f*y+g*m*p,this._w=h*f*p-g*m*y;break;case"ZYX":this._x=g*f*p-h*m*y,this._y=h*m*p+g*f*y,this._z=h*f*y-g*m*p,this._w=h*f*p+g*m*y;break;case"YZX":this._x=g*f*p+h*m*y,this._y=h*m*p+g*f*y,this._z=h*f*y-g*m*p,this._w=h*f*p-g*m*y;break;case"XZY":this._x=g*f*p-h*m*y,this._y=h*m*p-g*f*y,this._z=h*f*y+g*m*p,this._w=h*f*p+g*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],h=e[2],f=e[6],p=e[10],g=n+a+p;if(g>0){const m=.5/Math.sqrt(g+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-h)*m,this._z=(o-r)*m}else if(n>a&&n>p){const m=2*Math.sqrt(1+n-a-p);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+h)/m}else if(a>p){const m=2*Math.sqrt(1+a-n-p);this._w=(s-h)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+p-n-a);this._w=(o-r)/m,this._x=(s+h)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,h=e._z,f=e._w;return this._x=n*f+o*a+r*h-s*l,this._y=r*f+o*l+s*a-n*h,this._z=s*f+o*h+n*l-r*a,this._w=o*f-n*a-r*l-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const h=Math.sqrt(l),f=Math.atan2(h,a),p=Math.sin((1-e)*f)/h,g=Math.sin(e*f)/h;return this._w=o*p+this._w*g,this._x=n*p+this._x*g,this._y=r*p+this._y*g,this._z=s*p+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*r-a*n),f=2*(a*e-s*r),p=2*(s*n-o*e);return this.x=e+l*h+o*p-a*f,this.y=n+l*f+a*h-s*p,this.z=r+l*p+s*f-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new I,tu=new Bi;class Xt{constructor(t,e,n,r,s,o,a,l,h){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,h)}set(t,e,n,r,s,o,a,l,h){const f=this.elements;return f[0]=t,f[1]=r,f[2]=a,f[3]=e,f[4]=s,f[5]=l,f[6]=n,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],f=n[4],p=n[7],g=n[2],m=n[5],y=n[8],E=r[0],v=r[3],_=r[6],b=r[1],d=r[4],c=r[7],M=r[2],u=r[5],C=r[8];return s[0]=o*E+a*b+l*M,s[3]=o*v+a*d+l*u,s[6]=o*_+a*c+l*C,s[1]=h*E+f*b+p*M,s[4]=h*v+f*d+p*u,s[7]=h*_+f*c+p*C,s[2]=g*E+m*b+y*M,s[5]=g*v+m*d+y*u,s[8]=g*_+m*c+y*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8];return e*o*f-e*a*h-n*s*f+n*a*l+r*s*h-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8],p=f*o-a*h,g=a*l-f*s,m=h*s-o*l,y=e*p+n*g+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/y;return t[0]=p*E,t[1]=(r*h-f*n)*E,t[2]=(a*n-r*o)*E,t[3]=g*E,t[4]=(f*e-r*l)*E,t[5]=(r*s-a*e)*E,t[6]=m*E,t[7]=(n*l-h*e)*E,t[8]=(o*e-n*s)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-r*h,r*l,-r*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(oa.makeScale(t,e)),this}rotate(t){return this.premultiply(oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Xt;function vf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bp(){const i=Oo("canvas");return i.style.display="block",i}const eu={};function ms(i){i in eu||(eu[i]=!0,console.warn(i))}function Ap(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const nu=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wp(){const i={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ne&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(r.r=Pr(r.r),r.g=Pr(r.g),r.b=Pr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?No:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Nr]:{primaries:t,whitePoint:n,transfer:No,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}const jt=wp();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class Rp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yi===void 0&&(Yi=Oo("canvas")),Yi.width=t.width,Yi.height=t.height;const r=Yi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cp=0;class yl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(aa(r[o].image)):s.push(aa(r[o]))}else s=aa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pp=0;const ca=new I;class Ge extends ki{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=Ii,r=Ii,s=An,o=Ui,a=vn,l=Pn,h=Ge.DEFAULT_ANISOTROPY,f=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Gi(),this.name="",this.source=new yl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==of)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tc:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case bc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tc:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case bc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=of;Ge.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,r=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,h=l[0],f=l[4],p=l[8],g=l[1],m=l[5],y=l[9],E=l[2],v=l[6],_=l[10];if(Math.abs(f-g)<.01&&Math.abs(p-E)<.01&&Math.abs(y-v)<.01){if(Math.abs(f+g)<.1&&Math.abs(p+E)<.1&&Math.abs(y+v)<.1&&Math.abs(h+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const d=(h+1)/2,c=(m+1)/2,M=(_+1)/2,u=(f+g)/4,C=(p+E)/4,A=(y+v)/4;return d>c&&d>M?d<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(d),r=u/n,s=C/n):c>M?c<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(c),n=u/r,s=A/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=C/s,r=A/s),this.set(n,r,s,e),this}let b=Math.sqrt((v-y)*(v-y)+(p-E)*(p-E)+(g-f)*(g-f));return Math.abs(b)<.001&&(b=1),this.x=(v-y)/b,this.y=(p-E)/b,this.z=(g-f)/b,this.w=Math.acos((h+m+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dp extends ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Ge(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new yl(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Dp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xf extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lp extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oe{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,un):un.fromBufferAttribute(s,o),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(t.matrixWorld),this.union(ws)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kr),Rs.subVectors(this.max,kr),$i.subVectors(t.a,kr),Zi.subVectors(t.b,kr),Ki.subVectors(t.c,kr),Kn.subVectors(Zi,$i),Jn.subVectors(Ki,Zi),_i.subVectors($i,Ki);let e=[0,-Kn.z,Kn.y,0,-Jn.z,Jn.y,0,-_i.z,_i.y,Kn.z,0,-Kn.x,Jn.z,0,-Jn.x,_i.z,0,-_i.x,-Kn.y,Kn.x,0,-Jn.y,Jn.x,0,-_i.y,_i.x,0];return!la(e,$i,Zi,Ki,Rs)||(e=[1,0,0,0,1,0,0,0,1],!la(e,$i,Zi,Ki,Rs))?!1:(Cs.crossVectors(Kn,Jn),e=[Cs.x,Cs.y,Cs.z],la(e,$i,Zi,Ki,Rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Nn=[new I,new I,new I,new I,new I,new I,new I,new I],un=new I,ws=new Oe,$i=new I,Zi=new I,Ki=new I,Kn=new I,Jn=new I,_i=new I,kr=new I,Rs=new I,Cs=new I,vi=new I;function la(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){vi.fromArray(i,s);const a=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),l=t.dot(vi),h=e.dot(vi),f=n.dot(vi);if(Math.max(-Math.max(l,h,f),Math.min(l,h,f))>a)return!1}return!0}const Ip=new Oe,Gr=new I,ua=new I;class qo{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ip.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);const e=Gr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Gr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add(ua)),this.expandByPoint(Gr.copy(t.center).sub(ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Fn=new I,ha=new I,Ps=new I,jn=new I,fa=new I,Ds=new I,da=new I;class Br{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ha.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(ha);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ps),a=jn.dot(this.direction),l=-jn.dot(Ps),h=jn.lengthSq(),f=Math.abs(1-o*o);let p,g,m,y;if(f>0)if(p=o*l-a,g=o*a-l,y=s*f,p>=0)if(g>=-y)if(g<=y){const E=1/f;p*=E,g*=E,m=p*(p+o*g+2*a)+g*(o*p+g+2*l)+h}else g=s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*l)+h;else g=-s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*l)+h;else g<=-y?(p=Math.max(0,-(-o*s+a)),g=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+g*(g+2*l)+h):g<=y?(p=0,g=Math.min(Math.max(-s,-l),s),m=g*(g+2*l)+h):(p=Math.max(0,-(o*s+a)),g=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+g*(g+2*l)+h);else g=o>0?-s:s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ha).addScaledVector(Ps,g),m}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),r=Fn.dot(Fn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,g=this.origin;return h>=0?(n=(t.min.x-g.x)*h,r=(t.max.x-g.x)*h):(n=(t.max.x-g.x)*h,r=(t.min.x-g.x)*h),f>=0?(s=(t.min.y-g.y)*f,o=(t.max.y-g.y)*f):(s=(t.max.y-g.y)*f,o=(t.min.y-g.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(t.min.z-g.z)*p,l=(t.max.z-g.z)*p):(a=(t.max.z-g.z)*p,l=(t.min.z-g.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,r,s){fa.subVectors(e,t),Ds.subVectors(n,t),da.crossVectors(fa,Ds);let o=this.direction.dot(da),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);const l=a*this.direction.dot(Ds.crossVectors(jn,Ds));if(l<0)return null;const h=a*this.direction.dot(fa.cross(jn));if(h<0||l+h>o)return null;const f=-a*jn.dot(da);return f<0?null:this.at(f/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,r,s,o,a,l,h,f,p,g,m,y,E,v){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,h,f,p,g,m,y,E,v)}set(t,e,n,r,s,o,a,l,h,f,p,g,m,y,E,v){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=h,_[6]=f,_[10]=p,_[14]=g,_[3]=m,_[7]=y,_[11]=E,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ji.setFromMatrixColumn(t,0).length(),s=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),h=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const g=o*f,m=o*p,y=a*f,E=a*p;e[0]=l*f,e[4]=-l*p,e[8]=h,e[1]=m+y*h,e[5]=g-E*h,e[9]=-a*l,e[2]=E-g*h,e[6]=y+m*h,e[10]=o*l}else if(t.order==="YXZ"){const g=l*f,m=l*p,y=h*f,E=h*p;e[0]=g+E*a,e[4]=y*a-m,e[8]=o*h,e[1]=o*p,e[5]=o*f,e[9]=-a,e[2]=m*a-y,e[6]=E+g*a,e[10]=o*l}else if(t.order==="ZXY"){const g=l*f,m=l*p,y=h*f,E=h*p;e[0]=g-E*a,e[4]=-o*p,e[8]=y+m*a,e[1]=m+y*a,e[5]=o*f,e[9]=E-g*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const g=o*f,m=o*p,y=a*f,E=a*p;e[0]=l*f,e[4]=y*h-m,e[8]=g*h+E,e[1]=l*p,e[5]=E*h+g,e[9]=m*h-y,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const g=o*l,m=o*h,y=a*l,E=a*h;e[0]=l*f,e[4]=E-g*p,e[8]=y*p+m,e[1]=p,e[5]=o*f,e[9]=-a*f,e[2]=-h*f,e[6]=m*p+y,e[10]=g-E*p}else if(t.order==="XZY"){const g=o*l,m=o*h,y=a*l,E=a*h;e[0]=l*f,e[4]=-p,e[8]=h*f,e[1]=g*p+E,e[5]=o*f,e[9]=m*p-y,e[2]=y*p-m,e[6]=a*f,e[10]=E*p+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Up,t,Np)}lookAt(t,e,n){const r=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Qn.crossVectors(n,$e),Qn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Qn.crossVectors(n,$e)),Qn.normalize(),Ls.crossVectors($e,Qn),r[0]=Qn.x,r[4]=Ls.x,r[8]=$e.x,r[1]=Qn.y,r[5]=Ls.y,r[9]=$e.y,r[2]=Qn.z,r[6]=Ls.z,r[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],f=n[1],p=n[5],g=n[9],m=n[13],y=n[2],E=n[6],v=n[10],_=n[14],b=n[3],d=n[7],c=n[11],M=n[15],u=r[0],C=r[4],A=r[8],S=r[12],x=r[1],T=r[5],w=r[9],R=r[13],N=r[2],F=r[6],O=r[10],z=r[14],B=r[3],q=r[7],ot=r[11],it=r[15];return s[0]=o*u+a*x+l*N+h*B,s[4]=o*C+a*T+l*F+h*q,s[8]=o*A+a*w+l*O+h*ot,s[12]=o*S+a*R+l*z+h*it,s[1]=f*u+p*x+g*N+m*B,s[5]=f*C+p*T+g*F+m*q,s[9]=f*A+p*w+g*O+m*ot,s[13]=f*S+p*R+g*z+m*it,s[2]=y*u+E*x+v*N+_*B,s[6]=y*C+E*T+v*F+_*q,s[10]=y*A+E*w+v*O+_*ot,s[14]=y*S+E*R+v*z+_*it,s[3]=b*u+d*x+c*N+M*B,s[7]=b*C+d*T+c*F+M*q,s[11]=b*A+d*w+c*O+M*ot,s[15]=b*S+d*R+c*z+M*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],h=t[13],f=t[2],p=t[6],g=t[10],m=t[14],y=t[3],E=t[7],v=t[11],_=t[15];return y*(+s*l*p-r*h*p-s*a*g+n*h*g+r*a*m-n*l*m)+E*(+e*l*m-e*h*g+s*o*g-r*o*m+r*h*f-s*l*f)+v*(+e*h*p-e*a*m-s*o*p+n*o*m+s*a*f-n*h*f)+_*(-r*a*f-e*l*p+e*a*g+r*o*p-n*o*g+n*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8],p=t[9],g=t[10],m=t[11],y=t[12],E=t[13],v=t[14],_=t[15],b=p*v*h-E*g*h+E*l*m-a*v*m-p*l*_+a*g*_,d=y*g*h-f*v*h-y*l*m+o*v*m+f*l*_-o*g*_,c=f*E*h-y*p*h+y*a*m-o*E*m-f*a*_+o*p*_,M=y*p*l-f*E*l-y*a*g+o*E*g+f*a*v-o*p*v,u=e*b+n*d+r*c+s*M;if(u===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/u;return t[0]=b*C,t[1]=(E*g*s-p*v*s-E*r*m+n*v*m+p*r*_-n*g*_)*C,t[2]=(a*v*s-E*l*s+E*r*h-n*v*h-a*r*_+n*l*_)*C,t[3]=(p*l*s-a*g*s-p*r*h+n*g*h+a*r*m-n*l*m)*C,t[4]=d*C,t[5]=(f*v*s-y*g*s+y*r*m-e*v*m-f*r*_+e*g*_)*C,t[6]=(y*l*s-o*v*s-y*r*h+e*v*h+o*r*_-e*l*_)*C,t[7]=(o*g*s-f*l*s+f*r*h-e*g*h-o*r*m+e*l*m)*C,t[8]=c*C,t[9]=(y*p*s-f*E*s-y*n*m+e*E*m+f*n*_-e*p*_)*C,t[10]=(o*E*s-y*a*s+y*n*h-e*E*h-o*n*_+e*a*_)*C,t[11]=(f*a*s-o*p*s-f*n*h+e*p*h+o*n*m-e*a*m)*C,t[12]=M*C,t[13]=(f*E*r-y*p*r+y*n*g-e*E*g-f*n*v+e*p*v)*C,t[14]=(y*a*r-o*E*r-y*n*l+e*E*l+o*n*v-e*a*v)*C,t[15]=(o*p*r-f*a*r+f*n*l-e*p*l-o*n*g+e*a*g)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,h=s*o,f=s*a;return this.set(h*o+n,h*a-r*l,h*l+r*a,0,h*a+r*l,f*a+n,f*l-r*o,0,h*l-r*a,f*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,h=s+s,f=o+o,p=a+a,g=s*h,m=s*f,y=s*p,E=o*f,v=o*p,_=a*p,b=l*h,d=l*f,c=l*p,M=n.x,u=n.y,C=n.z;return r[0]=(1-(E+_))*M,r[1]=(m+c)*M,r[2]=(y-d)*M,r[3]=0,r[4]=(m-c)*u,r[5]=(1-(g+_))*u,r[6]=(v+b)*u,r[7]=0,r[8]=(y+d)*C,r[9]=(v-b)*C,r[10]=(1-(g+E))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const o=Ji.set(r[4],r[5],r[6]).length(),a=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],hn.copy(this);const h=1/s,f=1/o,p=1/a;return hn.elements[0]*=h,hn.elements[1]*=h,hn.elements[2]*=h,hn.elements[4]*=f,hn.elements[5]*=f,hn.elements[6]*=f,hn.elements[8]*=p,hn.elements[9]*=p,hn.elements[10]*=p,e.setFromRotationMatrix(hn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=wn,l=!1){const h=this.elements,f=2*s/(e-t),p=2*s/(n-r),g=(e+t)/(e-t),m=(n+r)/(n-r);let y,E;if(l)y=s/(o-s),E=o*s/(o-s);else if(a===wn)y=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Fo)y=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=f,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=p,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=wn,l=!1){const h=this.elements,f=2/(e-t),p=2/(n-r),g=-(e+t)/(e-t),m=-(n+r)/(n-r);let y,E;if(l)y=1/(o-s),E=o/(o-s);else if(a===wn)y=-2/(o-s),E=-(o+s)/(o-s);else if(a===Fo)y=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=f,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=p,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=y,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new I,hn=new Kt,Up=new I(0,0,0),Np=new I(1,1,1),Qn=new I,Ls=new I,$e=new I,ru=new Kt,su=new Bi;class Dn{constructor(t=0,e=0,n=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],h=r[5],f=r[9],p=r[2],g=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return su.setFromEuler(this),this.setFromQuaternion(su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class yf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fp=0;const ou=new I,ji=new Bi,On=new Kt,Is=new I,Wr=new I,Op=new I,Bp=new Bi,au=new I(1,0,0),cu=new I(0,1,0),lu=new I(0,0,1),uu={type:"added"},zp={type:"removed"},Qi={type:"childadded",child:null},pa={type:"childremoved",child:null};class we extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new I,e=new Dn,n=new Bi,r=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Xt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(au,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(lu,t)}translateOnAxis(t,e){return ou.copy(t).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(au,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Is.copy(t):Is.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Wr,Is,this.up):On.lookAt(Is,Wr,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(On),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zp),pa.child=t,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,t,Op),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,f=l.length;h<f;h++){const p=l[h];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),f=o(t.images),p=o(t.shapes),g=o(t.skeletons),m=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(a){const l=[];for(const h in a){const f=a[h];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}we.DEFAULT_UP=new I(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new I,Bn=new I,ga=new I,zn=new I,tr=new I,er=new I,hu=new I,ma=new I,_a=new I,va=new I,xa=new se,ya=new se,Sa=new se;class ce{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),fn.subVectors(t,e),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){fn.subVectors(r,e),Bn.subVectors(n,e),ga.subVectors(t,e);const o=fn.dot(fn),a=fn.dot(Bn),l=fn.dot(ga),h=Bn.dot(Bn),f=Bn.dot(ga),p=o*h-a*a;if(p===0)return s.set(0,0,0),null;const g=1/p,m=(h*l-a*f)*g,y=(o*f-a*l)*g;return s.set(1-m-y,y,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return xa.setScalar(0),ya.setScalar(0),Sa.setScalar(0),xa.fromBufferAttribute(t,e),ya.fromBufferAttribute(t,n),Sa.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(xa,s.x),o.addScaledVector(ya,s.y),o.addScaledVector(Sa,s.z),o}static isFrontFacing(t,e,n,r){return fn.subVectors(n,e),Bn.subVectors(t,e),fn.cross(Bn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),fn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ce.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ce.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return ce.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return ce.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ce.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;tr.subVectors(r,n),er.subVectors(s,n),ma.subVectors(t,n);const l=tr.dot(ma),h=er.dot(ma);if(l<=0&&h<=0)return e.copy(n);_a.subVectors(t,r);const f=tr.dot(_a),p=er.dot(_a);if(f>=0&&p<=f)return e.copy(r);const g=l*p-f*h;if(g<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(tr,o);va.subVectors(t,s);const m=tr.dot(va),y=er.dot(va);if(y>=0&&m<=y)return e.copy(s);const E=m*h-l*y;if(E<=0&&h>=0&&y<=0)return a=h/(h-y),e.copy(n).addScaledVector(er,a);const v=f*y-m*p;if(v<=0&&p-f>=0&&m-y>=0)return hu.subVectors(s,r),a=(p-f)/(p-f+(m-y)),e.copy(r).addScaledVector(hu,a);const _=1/(v+E+g);return o=E*_,a=g*_,e.copy(n).addScaledVector(tr,o).addScaledVector(er,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Us={h:0,s:0,l:0};function Ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=jt.workingColorSpace){if(t=xl(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ma(o,s,t+1/3),this.g=Ma(o,s,t),this.b=Ma(o,s,t-1/3)}return jt.colorSpaceToWorking(this,r),this}setStyle(t,e=sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const n=Sf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return jt.workingToColorSpace(Pe.copy(this),t),Math.round(kt(Pe.r*255,0,255))*65536+Math.round(kt(Pe.g*255,0,255))*256+Math.round(kt(Pe.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Pe.copy(this),e);const n=Pe.r,r=Pe.g,s=Pe.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,h;const f=(a+o)/2;if(a===o)l=0,h=0;else{const p=o-a;switch(h=f<=.5?p/(o+a):p/(2-o-a),o){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return t.h=l,t.s=h,t.l=f,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=sn){jt.workingToColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,r=Pe.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Us);const n=ss(ti.h,Us.h,e),r=ss(ti.s,Us.s,e),s=ss(ti.l,Us.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new $t;$t.NAMES=Sf;let Vp=0;class Wi extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Cr,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=pc,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==pc&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Sl extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new I,Ns=new ut;let Hp=0;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jl,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),r=Ue(r,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jl&&(t.usage=this.usage),t}}class Mf extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ef extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Le extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kp=0;const nn=new Kt,Ea=new we,nr=new I,Ze=new Oe,Xr=new Oe,be=new I;class yn extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vf(t)?Ef:Mf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Ea.lookAt(t),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ze.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(Ze.min,Xr.min),Ze.expandByPoint(be),be.addVectors(Ze.max,Xr.max),Ze.expandByPoint(be)):(Ze.expandByPoint(Xr.min),Ze.expandByPoint(Xr.max))}Ze.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)be.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(be));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let h=0,f=a.count;h<f;h++)be.fromBufferAttribute(a,h),l&&(nr.fromBufferAttribute(t,h),be.add(nr)),r=Math.max(r,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new I,l[A]=new I;const h=new I,f=new I,p=new I,g=new ut,m=new ut,y=new ut,E=new I,v=new I;function _(A,S,x){h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,S),p.fromBufferAttribute(n,x),g.fromBufferAttribute(s,A),m.fromBufferAttribute(s,S),y.fromBufferAttribute(s,x),f.sub(h),p.sub(h),m.sub(g),y.sub(g);const T=1/(m.x*y.y-y.x*m.y);isFinite(T)&&(E.copy(f).multiplyScalar(y.y).addScaledVector(p,-m.y).multiplyScalar(T),v.copy(p).multiplyScalar(m.x).addScaledVector(f,-y.x).multiplyScalar(T),a[A].add(E),a[S].add(E),a[x].add(E),l[A].add(v),l[S].add(v),l[x].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,S=b.length;A<S;++A){const x=b[A],T=x.start,w=x.count;for(let R=T,N=T+w;R<N;R+=3)_(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const d=new I,c=new I,M=new I,u=new I;function C(A){M.fromBufferAttribute(r,A),u.copy(M);const S=a[A];d.copy(S),d.sub(M.multiplyScalar(M.dot(S))).normalize(),c.crossVectors(u,S);const T=c.dot(l[A])<0?-1:1;o.setXYZW(A,d.x,d.y,d.z,T)}for(let A=0,S=b.length;A<S;++A){const x=b[A],T=x.start,w=x.count;for(let R=T,N=T+w;R<N;R+=3)C(t.getX(R+0)),C(t.getX(R+1)),C(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,m=n.count;g<m;g++)n.setXYZ(g,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,h=new I,f=new I,p=new I;if(t)for(let g=0,m=t.count;g<m;g+=3){const y=t.getX(g+0),E=t.getX(g+1),v=t.getX(g+2);r.fromBufferAttribute(e,y),s.fromBufferAttribute(e,E),o.fromBufferAttribute(e,v),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,v),a.add(f),l.add(f),h.add(f),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(v,h.x,h.y,h.z)}else for(let g=0,m=e.count;g<m;g+=3)r.fromBufferAttribute(e,g+0),s.fromBufferAttribute(e,g+1),o.fromBufferAttribute(e,g+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),n.setXYZ(g+0,f.x,f.y,f.z),n.setXYZ(g+1,f.x,f.y,f.z),n.setXYZ(g+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){const h=a.array,f=a.itemSize,p=a.normalized,g=new h.constructor(l.length*f);let m=0,y=0;for(let E=0,v=l.length;E<v;E++){a.isInterleavedBufferAttribute?m=l[E]*a.data.stride+a.offset:m=l[E]*f;for(let _=0;_<f;_++)g[y++]=h[m++]}return new We(g,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new yn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],h=t(l,n);e.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const l=[],h=s[a];for(let f=0,p=h.length;f<p;f++){const g=h[f],m=t(g,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],f=[];for(let p=0,g=h.length;p<g;p++){const m=h[p];f.push(m.toJSON(t.data))}f.length>0&&(r[l]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const h in r){const f=r[h];this.setAttribute(h,f.clone(e))}const s=t.morphAttributes;for(const h in s){const f=[],p=s[h];for(let g=0,m=p.length;g<m;g++)f.push(p[g].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,f=o.length;h<f;h++){const p=o[h];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fu=new Kt,xi=new Br,Fs=new qo,du=new I,Os=new I,Bs=new I,zs=new I,Ta=new I,Vs=new I,pu=new I,Hs=new I;class Je extends we{constructor(t=new yn,e=new Sl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Vs.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const f=a[l],p=s[l];f!==0&&(Ta.fromBufferAttribute(p,t),o?Vs.addScaledVector(Ta,f):Vs.addScaledVector(Ta.sub(e),f))}e.add(Vs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),xi.copy(t.ray).recast(t.near),!(Fs.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Fs,du)===null||xi.origin.distanceToSquared(du)>(t.far-t.near)**2))&&(fu.copy(s).invert(),xi.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,g=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,E=g.length;y<E;y++){const v=g[y],_=o[v.materialIndex],b=Math.max(v.start,m.start),d=Math.min(a.count,Math.min(v.start+v.count,m.start+m.count));for(let c=b,M=d;c<M;c+=3){const u=a.getX(c),C=a.getX(c+1),A=a.getX(c+2);r=ks(this,_,t,n,h,f,p,u,C,A),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const y=Math.max(0,m.start),E=Math.min(a.count,m.start+m.count);for(let v=y,_=E;v<_;v+=3){const b=a.getX(v),d=a.getX(v+1),c=a.getX(v+2);r=ks(this,o,t,n,h,f,p,b,d,c),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,E=g.length;y<E;y++){const v=g[y],_=o[v.materialIndex],b=Math.max(v.start,m.start),d=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let c=b,M=d;c<M;c+=3){const u=c,C=c+1,A=c+2;r=ks(this,_,t,n,h,f,p,u,C,A),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const y=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let v=y,_=E;v<_;v+=3){const b=v,d=v+1,c=v+2;r=ks(this,o,t,n,h,f,p,b,d,c),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}}function Gp(i,t,e,n,r,s,o,a){let l;if(t.side===Fe?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Cn,a),l===null)return null;Hs.copy(a),Hs.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Hs);return h<e.near||h>e.far?null:{distance:h,point:Hs.clone(),object:i}}function ks(i,t,e,n,r,s,o,a,l,h){i.getVertexPosition(a,Os),i.getVertexPosition(l,Bs),i.getVertexPosition(h,zs);const f=Gp(i,t,e,n,Os,Bs,zs,pu);if(f){const p=new I;ce.getBarycoord(pu,Os,Bs,zs,p),r&&(f.uv=ce.getInterpolatedAttribute(r,a,l,h,p,new ut)),s&&(f.uv1=ce.getInterpolatedAttribute(s,a,l,h,p,new ut)),o&&(f.normal=ce.getInterpolatedAttribute(o,a,l,h,p,new I),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const g={a,b:l,c:h,normal:new I,materialIndex:0};ce.getNormal(Os,Bs,zs,g.normal),f.face=g,f.barycoord=p}return f}class zr extends yn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],h=[],f=[],p=[];let g=0,m=0;y("z","y","x",-1,-1,n,e,t,o,s,0),y("z","y","x",1,-1,n,e,-t,o,s,1),y("x","z","y",1,1,t,n,e,r,o,2),y("x","z","y",1,-1,t,n,-e,r,o,3),y("x","y","z",1,-1,t,e,n,r,s,4),y("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Le(h,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(p,2));function y(E,v,_,b,d,c,M,u,C,A,S){const x=c/C,T=M/A,w=c/2,R=M/2,N=u/2,F=C+1,O=A+1;let z=0,B=0;const q=new I;for(let ot=0;ot<O;ot++){const it=ot*T-R;for(let ht=0;ht<F;ht++){const St=ht*x-w;q[E]=St*b,q[v]=it*d,q[_]=N,h.push(q.x,q.y,q.z),q[E]=0,q[v]=0,q[_]=u>0?1:-1,f.push(q.x,q.y,q.z),p.push(ht/C),p.push(1-ot/A),z+=1}}for(let ot=0;ot<A;ot++)for(let it=0;it<C;it++){const ht=g+it+F*ot,St=g+it+F*(ot+1),Mt=g+(it+1)+F*(ot+1),xt=g+(it+1)+F*ot;l.push(ht,St,xt),l.push(St,Mt,xt),B+=6}a.addGroup(m,B,S),m+=B,g+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ne(i){const t={};for(let e=0;e<i.length;e++){const n=Fr(i[e]);for(const r in n)t[r]=n[r]}return t}function Wp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Xp={clone:Fr,merge:Ne};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=Wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bf extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new I,gu=new ut,mu=new ut;class on extends bf{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,gu,mu),e.subVectors(mu,gu)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/h,r*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ir=-90,rr=1;class $p extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(ir,rr,t,e);r.layers=this.layers,this.add(r);const s=new on(ir,rr,t,e);s.layers=this.layers,this.add(s);const o=new on(ir,rr,t,e);o.layers=this.layers,this.add(o);const a=new on(ir,rr,t,e);a.layers=this.layers,this.add(a);const l=new on(ir,rr,t,e);l.layers=this.layers,this.add(l);const h=new on(ir,rr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const h of e)this.remove(h);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,h,f]=this.children,p=t.getRenderTarget(),g=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,h),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,r),t.render(e,f),t.setRenderTarget(p,g,m),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Af extends Ge{constructor(t=[],e=Ir,n,r,s,o,a,l,h,f){super(t,e,n,r,s,o,a,l,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zp extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Af(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zr(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:ui});s.uniforms.tEquirect.value=e;const o=new Je(r,s),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=An),new $p(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class Gs extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kp={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const E of t.hand.values()){const v=e.getJointPose(E,n),_=this._getHandJoint(h,E);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],g=f.position.distanceTo(p.position),m=.02,y=.005;h.inputState.pinching&&g>m+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=m-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Jp extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Aa=new I,jp=new I,Qp=new Xt;class an{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Aa.subVectors(n,e).cross(jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Aa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qp.getNormalMatrix(t),r=this.coplanarPoint(Aa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new qo,tg=new ut(.5,.5),Ws=new I;class Ml{constructor(t=new an,e=new an,n=new an,r=new an,s=new an,o=new an){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],h=s[3],f=s[4],p=s[5],g=s[6],m=s[7],y=s[8],E=s[9],v=s[10],_=s[11],b=s[12],d=s[13],c=s[14],M=s[15];if(r[0].setComponents(h-o,m-f,_-y,M-b).normalize(),r[1].setComponents(h+o,m+f,_+y,M+b).normalize(),r[2].setComponents(h+a,m+p,_+E,M+d).normalize(),r[3].setComponents(h-a,m-p,_-E,M-d).normalize(),n)r[4].setComponents(l,g,v,c).normalize(),r[5].setComponents(h-l,m-g,_-v,M-c).normalize();else if(r[4].setComponents(h-l,m-g,_-v,M-c).normalize(),e===wn)r[5].setComponents(h+l,m+g,_+v,M+c).normalize();else if(e===Fo)r[5].setComponents(l,g,v,c).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){yi.center.set(0,0,0);const e=tg.distanceTo(t.center);return yi.radius=.7071067811865476+e,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ws.x=r.normal.x>0?t.max.x:t.min.x,Ws.y=r.normal.y>0?t.max.y:t.min.y,Ws.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wf extends Wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Bo=new I,zo=new I,_u=new Kt,qr=new Br,Xs=new qo,wa=new I,vu=new I;class eg extends we{constructor(t=new yn,e=new wf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Bo.fromBufferAttribute(e,r-1),zo.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Bo.distanceTo(zo);t.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),Xs.radius+=s,t.ray.intersectsSphere(Xs)===!1)return;_u.copy(r).invert(),qr.copy(t.ray).applyMatrix4(_u);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,f=n.index,g=n.attributes.position;if(f!==null){const m=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let E=m,v=y-1;E<v;E+=h){const _=f.getX(E),b=f.getX(E+1),d=qs(this,t,qr,l,_,b,E);d&&e.push(d)}if(this.isLineLoop){const E=f.getX(y-1),v=f.getX(m),_=qs(this,t,qr,l,E,v,y-1);_&&e.push(_)}}else{const m=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let E=m,v=y-1;E<v;E+=h){const _=qs(this,t,qr,l,E,E+1,E);_&&e.push(_)}if(this.isLineLoop){const E=qs(this,t,qr,l,y-1,m,y-1);E&&e.push(E)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qs(i,t,e,n,r,s,o){const a=i.geometry.attributes.position;if(Bo.fromBufferAttribute(a,r),zo.fromBufferAttribute(a,s),e.distanceSqToSegment(Bo,zo,wa,vu)>n)return;wa.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(wa);if(!(h<t.near||h>t.far))return{distance:h,point:vu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const xu=new I,yu=new I;class ng extends eg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)xu.fromBufferAttribute(e,r),yu.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+xu.distanceTo(yu);t.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rf extends Ge{constructor(t,e,n=Oi,r,s,o,a=xn,l=xn,h,f=ds,p=1){if(f!==ds&&f!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:p};super(g,r,s,o,a,l,f,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Cf extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class El extends yn{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],h=new I,f=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,g=3;p<=e;p++,g+=3){const m=n+p/e*r;h.x=t*Math.cos(m),h.y=t*Math.sin(m),o.push(h.x,h.y,h.z),a.push(0,0,1),f.x=(o[g]/t+1)/2,f.y=(o[g+1]/t+1)/2,l.push(f.x,f.y)}for(let p=1;p<=e;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(a,3)),this.setAttribute("uv",new Le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,h;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),h=n[r]-o,h<0)a=r+1;else if(h>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const f=n[r],g=n[r+1]-f,m=(o-f)/g;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new ut:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,r=[],s=[],o=[],a=new I,l=new Kt;for(let m=0;m<=t;m++){const y=m/t;r[m]=this.getTangentAt(y,new I)}s[0]=new I,o[0]=new I;let h=Number.MAX_VALUE;const f=Math.abs(r[0].x),p=Math.abs(r[0].y),g=Math.abs(r[0].z);f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),g<=h&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(kt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,y))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(kt(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let y=1;y<=t;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],m*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Tl extends In{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),g=l-this.aX,m=h-this.aY;l=g*f-m*p+this.aX,h=g*p+m*f+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ig extends Tl{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function bl(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,h){r(o,a,h*(a-s),h*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,h,f,p){let g=(o-s)/h-(a-s)/(h+f)+(a-o)/f,m=(a-o)/f-(l-o)/(f+p)+(l-a)/p;g*=f,m*=f,r(o,a,g,m)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Ys=new I,Ra=new bl,Ca=new bl,Pa=new bl;class rg extends In{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new I){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let h,f;this.closed||a>0?h=r[(a-1)%s]:(Ys.subVectors(r[0],r[1]).add(r[0]),h=Ys);const p=r[a%s],g=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Ys.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Ys),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(p),m),E=Math.pow(p.distanceToSquared(g),m),v=Math.pow(g.distanceToSquared(f),m);E<1e-4&&(E=1),y<1e-4&&(y=E),v<1e-4&&(v=E),Ra.initNonuniformCatmullRom(h.x,p.x,g.x,f.x,y,E,v),Ca.initNonuniformCatmullRom(h.y,p.y,g.y,f.y,y,E,v),Pa.initNonuniformCatmullRom(h.z,p.z,g.z,f.z,y,E,v)}else this.curveType==="catmullrom"&&(Ra.initCatmullRom(h.x,p.x,g.x,f.x,this.tension),Ca.initCatmullRom(h.y,p.y,g.y,f.y,this.tension),Pa.initCatmullRom(h.z,p.z,g.z,f.z,this.tension));return n.set(Ra.calc(l),Ca.calc(l),Pa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new I().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Su(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function sg(i,t){const e=1-i;return e*e*t}function og(i,t){return 2*(1-i)*i*t}function ag(i,t){return i*i*t}function os(i,t,e,n){return sg(i,t)+og(i,e)+ag(i,n)}function cg(i,t){const e=1-i;return e*e*e*t}function lg(i,t){const e=1-i;return 3*e*e*i*t}function ug(i,t){return 3*(1-i)*i*i*t}function hg(i,t){return i*i*i*t}function as(i,t,e,n,r){return cg(i,t)+lg(i,e)+ug(i,n)+hg(i,r)}class Pf extends In{constructor(t=new ut,e=new ut,n=new ut,r=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ut){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(as(t,r.x,s.x,o.x,a.x),as(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fg extends In{constructor(t=new I,e=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new I){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(as(t,r.x,s.x,o.x,a.x),as(t,r.y,s.y,o.y,a.y),as(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Df extends In{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dg extends In{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lf extends In{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(os(t,r.x,s.x,o.x),os(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pg extends In{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(os(t,r.x,s.x,o.x),os(t,r.y,s.y,o.y),os(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class If extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],h=r[o],f=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return n.set(Su(a,l.x,h.x,f.x,p.x),Su(a,l.y,h.y,f.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ut().fromArray(r))}return this}}var tl=Object.freeze({__proto__:null,ArcCurve:ig,CatmullRomCurve3:rg,CubicBezierCurve:Pf,CubicBezierCurve3:fg,EllipseCurve:Tl,LineCurve:Df,LineCurve3:dg,QuadraticBezierCurve:Lf,QuadraticBezierCurve3:pg,SplineCurve:If});class gg extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const f=l[h];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new tl[r.type]().fromJSON(r))}return this}}class cs extends gg{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Df(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Lf(this.currentPoint.clone(),new ut(t,e),new ut(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Pf(this.currentPoint.clone(),new ut(t,e),new ut(n,r),new ut(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new If(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+h,e+f,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const h=new Tl(t,e,n,r,s,o,a,l);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ri extends cs{constructor(t){super(t),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new cs().fromJSON(r))}return this}}function mg(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Uf(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,h;if(n&&(s=Sg(i,t,s,e)),i.length>80*e){a=1/0,l=1/0;let f=-1/0,p=-1/0;for(let g=e;g<r;g+=e){const m=i[g],y=i[g+1];m<a&&(a=m),y<l&&(l=y),m>f&&(f=m),y>p&&(p=y)}h=Math.max(f-a,p-l),h=h!==0?32767/h:0}return _s(s,o,e,a,l,h,0),o}function Uf(i,t,e,n,r){let s;if(r===Lg(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Mu(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Mu(o/n|0,i[o],i[o+1],s);return s&&Or(s,s.next)&&(xs(s),s=s.next),s}function Vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Or(e,e.next)||fe(e.prev,e,e.next)===0)){if(xs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _s(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Ag(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,h=i.next;if(s?vg(i,n,r,s):_g(i)){t.push(l.i,i.i,h.i),xs(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=xg(Vi(i),t),_s(i,t,e,n,r,s,2)):o===2&&yg(i,t,e,n,r,s):_s(Vi(i),t,e,n,r,s,1);break}}}function _g(i){const t=i.prev,e=i,n=i.next;if(fe(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,h=n.y,f=Math.min(r,s,o),p=Math.min(a,l,h),g=Math.max(r,s,o),m=Math.max(a,l,h);let y=n.next;for(;y!==t;){if(y.x>=f&&y.x<=g&&y.y>=p&&y.y<=m&&ns(r,a,s,l,o,h,y.x,y.y)&&fe(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function vg(i,t,e,n){const r=i.prev,s=i,o=i.next;if(fe(r,s,o)>=0)return!1;const a=r.x,l=s.x,h=o.x,f=r.y,p=s.y,g=o.y,m=Math.min(a,l,h),y=Math.min(f,p,g),E=Math.max(a,l,h),v=Math.max(f,p,g),_=el(m,y,t,e,n),b=el(E,v,t,e,n);let d=i.prevZ,c=i.nextZ;for(;d&&d.z>=_&&c&&c.z<=b;){if(d.x>=m&&d.x<=E&&d.y>=y&&d.y<=v&&d!==r&&d!==o&&ns(a,f,l,p,h,g,d.x,d.y)&&fe(d.prev,d,d.next)>=0||(d=d.prevZ,c.x>=m&&c.x<=E&&c.y>=y&&c.y<=v&&c!==r&&c!==o&&ns(a,f,l,p,h,g,c.x,c.y)&&fe(c.prev,c,c.next)>=0))return!1;c=c.nextZ}for(;d&&d.z>=_;){if(d.x>=m&&d.x<=E&&d.y>=y&&d.y<=v&&d!==r&&d!==o&&ns(a,f,l,p,h,g,d.x,d.y)&&fe(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;c&&c.z<=b;){if(c.x>=m&&c.x<=E&&c.y>=y&&c.y<=v&&c!==r&&c!==o&&ns(a,f,l,p,h,g,c.x,c.y)&&fe(c.prev,c,c.next)>=0)return!1;c=c.nextZ}return!0}function xg(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Or(n,r)&&Ff(n,e,e.next,r)&&vs(n,r)&&vs(r,n)&&(t.push(n.i,e.i,r.i),xs(e),xs(e.next),e=i=r),e=e.next}while(e!==i);return Vi(e)}function yg(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cg(o,a)){let l=Of(o,a);o=Vi(o,o.next),l=Vi(l,l.next),_s(o,t,e,n,r,s,0),_s(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Sg(i,t,e,n){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,h=Uf(i,a,l,n,!1);h===h.next&&(h.steiner=!0),r.push(Rg(h))}r.sort(Mg);for(let s=0;s<r.length;s++)e=Eg(r[s],e);return e}function Mg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Eg(i,t){const e=Tg(i,t);if(!e)return t;const n=Of(e,i);return Vi(n,n.next),Vi(e,e.next)}function Tg(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;if(Or(i,e))return e;do{if(Or(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const p=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>s&&(s=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,h=o.y;let f=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Nf(r<h?n:s,r,l,h,r<h?s:n,r,e.x,e.y)){const p=Math.abs(r-e.y)/(n-e.x);vs(e,i)&&(p<f||p===f&&(e.x>o.x||e.x===o.x&&bg(o,e)))&&(o=e,f=p)}e=e.next}while(e!==a);return o}function bg(i,t){return fe(i.prev,i,t.prev)<0&&fe(t.next,i,i.next)<0}function Ag(i,t,e,n){let r=i;do r.z===0&&(r.z=el(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,wg(r)}function wg(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function el(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Rg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Nf(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function ns(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Nf(i,t,e,n,r,s,o,a)}function Cg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Pg(i,t)&&(vs(i,t)&&vs(t,i)&&Dg(i,t)&&(fe(i.prev,i,t.prev)||fe(i,t.prev,t))||Or(i,t)&&fe(i.prev,i,i.next)>0&&fe(t.prev,t,t.next)>0)}function fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Or(i,t){return i.x===t.x&&i.y===t.y}function Ff(i,t,e,n){const r=Zs(fe(i,t,e)),s=Zs(fe(i,t,n)),o=Zs(fe(e,n,i)),a=Zs(fe(e,n,t));return!!(r!==s&&o!==a||r===0&&$s(i,e,t)||s===0&&$s(i,n,t)||o===0&&$s(e,i,n)||a===0&&$s(e,t,n))}function $s(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zs(i){return i>0?1:i<0?-1:0}function Pg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ff(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function vs(i,t){return fe(i.prev,i,i.next)<0?fe(i,t,i.next)>=0&&fe(i,i.prev,t)>=0:fe(i,t,i.prev)<0||fe(i,i.next,t)<0}function Dg(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Of(i,t){const e=nl(i.i,i.x,i.y),n=nl(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Mu(i,t,e,n){const r=nl(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function xs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lg(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Ig{static triangulate(t,e,n=2){return mg(t,e,n)}}class Tr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Tr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Eu(t),Tu(n,t);let o=t.length;e.forEach(Eu);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Tu(n,e[l]);const a=Ig.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Eu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Al extends yn{constructor(t=new ri([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const h=t[a];o(h)}this.setAttribute("position",new Le(r,3)),this.setAttribute("uv",new Le(s,2)),this.computeVertexNormals();function o(a){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1;let g=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,y=e.bevelSize!==void 0?e.bevelSize:m-.1,E=e.bevelOffset!==void 0?e.bevelOffset:0,v=e.bevelSegments!==void 0?e.bevelSegments:3;const _=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Ug;let d,c=!1,M,u,C,A;_&&(d=_.getSpacedPoints(f),c=!0,g=!1,M=_.computeFrenetFrames(f,!1),u=new I,C=new I,A=new I),g||(v=0,m=0,y=0,E=0);const S=a.extractPoints(h);let x=S.shape;const T=S.holes;if(!Tr.isClockWise(x)){x=x.reverse();for(let tt=0,K=T.length;tt<K;tt++){const $=T[tt];Tr.isClockWise($)&&(T[tt]=$.reverse())}}function R(tt){const $=10000000000000001e-36;let Y=tt[0];for(let gt=1;gt<=tt.length;gt++){const nt=gt%tt.length,rt=tt[nt],Ct=rt.x-Y.x,Rt=rt.y-Y.y,L=Ct*Ct+Rt*Rt,P=Math.max(Math.abs(rt.x),Math.abs(rt.y),Math.abs(Y.x),Math.abs(Y.y)),H=$*P*P;if(L<=H){tt.splice(nt,1),gt--;continue}Y=rt}}R(x),T.forEach(R);const N=T.length,F=x;for(let tt=0;tt<N;tt++){const K=T[tt];x=x.concat(K)}function O(tt,K,$){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(K,$)}const z=x.length;function B(tt,K,$){let Y,gt,nt;const rt=tt.x-K.x,Ct=tt.y-K.y,Rt=$.x-tt.x,L=$.y-tt.y,P=rt*rt+Ct*Ct,H=rt*L-Ct*Rt;if(Math.abs(H)>Number.EPSILON){const W=Math.sqrt(P),et=Math.sqrt(Rt*Rt+L*L),X=K.x-Ct/W,vt=K.y+rt/W,_t=$.x-L/et,It=$.y+Rt/et,Dt=((_t-X)*L-(It-vt)*Rt)/(rt*L-Ct*Rt);Y=X+rt*Dt-tt.x,gt=vt+Ct*Dt-tt.y;const ft=Y*Y+gt*gt;if(ft<=2)return new ut(Y,gt);nt=Math.sqrt(ft/2)}else{let W=!1;rt>Number.EPSILON?Rt>Number.EPSILON&&(W=!0):rt<-Number.EPSILON?Rt<-Number.EPSILON&&(W=!0):Math.sign(Ct)===Math.sign(L)&&(W=!0),W?(Y=-Ct,gt=rt,nt=Math.sqrt(P)):(Y=rt,gt=Ct,nt=Math.sqrt(P/2))}return new ut(Y/nt,gt/nt)}const q=[];for(let tt=0,K=F.length,$=K-1,Y=tt+1;tt<K;tt++,$++,Y++)$===K&&($=0),Y===K&&(Y=0),q[tt]=B(F[tt],F[$],F[Y]);const ot=[];let it,ht=q.concat();for(let tt=0,K=N;tt<K;tt++){const $=T[tt];it=[];for(let Y=0,gt=$.length,nt=gt-1,rt=Y+1;Y<gt;Y++,nt++,rt++)nt===gt&&(nt=0),rt===gt&&(rt=0),it[Y]=B($[Y],$[nt],$[rt]);ot.push(it),ht=ht.concat(it)}let St;if(v===0)St=Tr.triangulateShape(F,T);else{const tt=[],K=[];for(let $=0;$<v;$++){const Y=$/v,gt=m*Math.cos(Y*Math.PI/2),nt=y*Math.sin(Y*Math.PI/2)+E;for(let rt=0,Ct=F.length;rt<Ct;rt++){const Rt=O(F[rt],q[rt],nt);ct(Rt.x,Rt.y,-gt),Y===0&&tt.push(Rt)}for(let rt=0,Ct=N;rt<Ct;rt++){const Rt=T[rt];it=ot[rt];const L=[];for(let P=0,H=Rt.length;P<H;P++){const W=O(Rt[P],it[P],nt);ct(W.x,W.y,-gt),Y===0&&L.push(W)}Y===0&&K.push(L)}}St=Tr.triangulateShape(tt,K)}const Mt=St.length,xt=y+E;for(let tt=0;tt<z;tt++){const K=g?O(x[tt],ht[tt],xt):x[tt];c?(C.copy(M.normals[0]).multiplyScalar(K.x),u.copy(M.binormals[0]).multiplyScalar(K.y),A.copy(d[0]).add(C).add(u),ct(A.x,A.y,A.z)):ct(K.x,K.y,0)}for(let tt=1;tt<=f;tt++)for(let K=0;K<z;K++){const $=g?O(x[K],ht[K],xt):x[K];c?(C.copy(M.normals[tt]).multiplyScalar($.x),u.copy(M.binormals[tt]).multiplyScalar($.y),A.copy(d[tt]).add(C).add(u),ct(A.x,A.y,A.z)):ct($.x,$.y,p/f*tt)}for(let tt=v-1;tt>=0;tt--){const K=tt/v,$=m*Math.cos(K*Math.PI/2),Y=y*Math.sin(K*Math.PI/2)+E;for(let gt=0,nt=F.length;gt<nt;gt++){const rt=O(F[gt],q[gt],Y);ct(rt.x,rt.y,p+$)}for(let gt=0,nt=T.length;gt<nt;gt++){const rt=T[gt];it=ot[gt];for(let Ct=0,Rt=rt.length;Ct<Rt;Ct++){const L=O(rt[Ct],it[Ct],Y);c?ct(L.x,L.y+d[f-1].y,d[f-1].x+$):ct(L.x,L.y,p+$)}}}Z(),Q();function Z(){const tt=r.length/3;if(g){let K=0,$=z*K;for(let Y=0;Y<Mt;Y++){const gt=St[Y];lt(gt[2]+$,gt[1]+$,gt[0]+$)}K=f+v*2,$=z*K;for(let Y=0;Y<Mt;Y++){const gt=St[Y];lt(gt[0]+$,gt[1]+$,gt[2]+$)}}else{for(let K=0;K<Mt;K++){const $=St[K];lt($[2],$[1],$[0])}for(let K=0;K<Mt;K++){const $=St[K];lt($[0]+z*f,$[1]+z*f,$[2]+z*f)}}n.addGroup(tt,r.length/3-tt,0)}function Q(){const tt=r.length/3;let K=0;at(F,K),K+=F.length;for(let $=0,Y=T.length;$<Y;$++){const gt=T[$];at(gt,K),K+=gt.length}n.addGroup(tt,r.length/3-tt,1)}function at(tt,K){let $=tt.length;for(;--$>=0;){const Y=$;let gt=$-1;gt<0&&(gt=tt.length-1);for(let nt=0,rt=f+v*2;nt<rt;nt++){const Ct=z*nt,Rt=z*(nt+1),L=K+Y+Ct,P=K+gt+Ct,H=K+gt+Rt,W=K+Y+Rt;wt(L,P,H,W)}}}function ct(tt,K,$){l.push(tt),l.push(K),l.push($)}function lt(tt,K,$){Gt(tt),Gt(K),Gt($);const Y=r.length/3,gt=b.generateTopUV(n,r,Y-3,Y-2,Y-1);U(gt[0]),U(gt[1]),U(gt[2])}function wt(tt,K,$,Y){Gt(tt),Gt(K),Gt(Y),Gt(K),Gt($),Gt(Y);const gt=r.length/3,nt=b.generateSideWallUV(n,r,gt-6,gt-3,gt-2,gt-1);U(nt[0]),U(nt[1]),U(nt[3]),U(nt[1]),U(nt[2]),U(nt[3])}function Gt(tt){r.push(l[tt*3+0]),r.push(l[tt*3+1]),r.push(l[tt*3+2])}function U(tt){s.push(tt.x),s.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ng(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new tl[r.type]().fromJSON(r)),new Al(n,t.options)}}const Ug={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[r*3],f=t[r*3+1];return[new ut(s,o),new ut(a,l),new ut(h,f)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],f=t[n*3+1],p=t[n*3+2],g=t[r*3],m=t[r*3+1],y=t[r*3+2],E=t[s*3],v=t[s*3+1],_=t[s*3+2];return Math.abs(a-f)<Math.abs(o-h)?[new ut(o,1-l),new ut(h,1-p),new ut(g,1-y),new ut(E,1-_)]:[new ut(a,1-l),new ut(f,1-p),new ut(m,1-y),new ut(v,1-_)]}};function Ng(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Yo extends yn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),h=a+1,f=l+1,p=t/a,g=e/l,m=[],y=[],E=[],v=[];for(let _=0;_<f;_++){const b=_*g-o;for(let d=0;d<h;d++){const c=d*p-s;y.push(c,-b,0),E.push(0,0,1),v.push(d/a),v.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const d=b+h*_,c=b+h*(_+1),M=b+1+h*(_+1),u=b+1+h*_;m.push(d,c,u),m.push(c,M,u)}this.setIndex(m),this.setAttribute("position",new Le(y,3)),this.setAttribute("normal",new Le(E,3)),this.setAttribute("uv",new Le(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fg extends Wi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new $t(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Bf extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Og extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bg extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zf extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class zg extends zf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Da=new Kt,bu=new I,Au=new I;class Vg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ml,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(bu),Au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Au),e.updateMatrixWorld(),Da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vf extends bf{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Hg extends Vg{constructor(){super(new Vf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hf extends zf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Hg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class kg extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class wu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ru=new I,Ks=new I,sr=new I,or=new I,La=new I,Gg=new I,Wg=new I;class Re{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ru.subVectors(t,this.start),Ks.subVectors(this.end,this.start);const n=Ks.dot(Ks);let s=Ks.dot(Ru)/n;return e&&(s=kt(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=Gg,n=Wg){const r=10000000000000001e-32;let s,o;const a=this.start,l=t.start,h=this.end,f=t.end;sr.subVectors(h,a),or.subVectors(f,l),La.subVectors(a,l);const p=sr.dot(sr),g=or.dot(or),m=or.dot(La);if(p<=r&&g<=r)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(p<=r)s=0,o=m/g,o=kt(o,0,1);else{const y=sr.dot(La);if(g<=r)o=0,s=kt(-y/p,0,1);else{const E=sr.dot(or),v=p*g-E*E;v!==0?s=kt((E*m-y*g)/v,0,1):s=0,o=(E*s+m)/g,o<0?(o=0,s=kt(-y/p,0,1)):o>1&&(o=1,s=kt((E-y)/p,0,1))}}return e.copy(a).add(sr.multiplyScalar(s)),n.copy(l).add(or.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Xg extends ng{constructor(t=10,e=10,n=4473924,r=8947848){n=new $t(n),r=new $t(r);const s=e/2,o=t/e,a=t/2,l=[],h=[];for(let g=0,m=0,y=-a;g<=e;g++,y+=o){l.push(-a,0,y,a,0,y),l.push(y,0,-a,y,0,a);const E=g===s?n:r;E.toArray(h,m),m+=3,E.toArray(h,m),m+=3,E.toArray(h,m),m+=3,E.toArray(h,m),m+=3}const f=new yn;f.setAttribute("position",new Le(l,3)),f.setAttribute("color",new Le(h,3));const p=new wf({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class qg extends ki{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Cu(i,t,e,n){const r=Yg(n);switch(e){case hf:return i*t;case df:return i*t/r.components*r.byteLength;case ml:return i*t/r.components*r.byteLength;case pf:return i*t*2/r.components*r.byteLength;case _l:return i*t*2/r.components*r.byteLength;case ff:return i*t*3/r.components*r.byteLength;case vn:return i*t*4/r.components*r.byteLength;case vl:return i*t*4/r.components*r.byteLength;case Ao:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wc:case Cc:return Math.max(i,16)*Math.max(t,8)/4;case Ac:case Rc:return Math.max(i,8)*Math.max(t,8)/2;case Pc:case Dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case kc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yc:case $c:case Zc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kc:case Jc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case jc:case Qc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yg(i){switch(i){case Pn:case af:return{byteLength:1,components:1};case hs:case cf:case Ms:return{byteLength:2,components:1};case pl:case gl:return{byteLength:2,components:4};case Oi:case dl:case Xn:return{byteLength:4,components:1};case lf:case uf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ss}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ss);function kf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function $g(i){const t=new WeakMap;function e(a,l){const h=a.array,f=a.usage,p=h.byteLength,g=i.createBuffer();i.bindBuffer(l,g),i.bufferData(l,h,f),a.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,h){const f=l.array,p=l.updateRanges;if(i.bindBuffer(h,a),p.length===0)i.bufferSubData(h,0,f);else{p.sort((m,y)=>m.start-y.start);let g=0;for(let m=1;m<p.length;m++){const y=p[g],E=p[m];E.start<=y.start+y.count+1?y.count=Math.max(y.count,E.start+E.count-y.start):(++g,p[g]=E)}p.length=g+1;for(let m=0,y=p.length;m<y;m++){const E=p[m];i.bufferSubData(h,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:r,remove:s,update:o}}var Zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kg=`#ifdef USE_ALPHAHASH
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
#endif`,Jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
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
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cm=`#ifdef USE_IRIDESCENCE
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
#endif`,lm=`#ifdef USE_BUMPMAP
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
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
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Hm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Ym=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$m=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r_=`#if defined( USE_POINTS_UV )
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
#endif`,s_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u_=`#ifdef USE_MORPHTARGETS
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
#endif`,h_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,__=`#ifdef USE_NORMALMAP
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
#endif`,v_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,T_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,I_=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,U_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N_=`#ifdef USE_SKINNING
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
#endif`,F_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O_=`#ifdef USE_SKINNING
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
#endif`,B_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k_=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,G_=`#ifdef USE_TRANSMISSION
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z_=`uniform sampler2D t2D;
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`#include <common>
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
}`,ev=`#if DEPTH_PACKING == 3200
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
}`,nv=`#define DISTANCE
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
}`,iv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`uniform float scale;
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
}`,av=`uniform vec3 diffuse;
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
}`,cv=`#include <common>
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
}`,lv=`uniform vec3 diffuse;
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
}`,uv=`#define LAMBERT
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
}`,hv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,fv=`#define MATCAP
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
}`,dv=`#define MATCAP
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
}`,pv=`#define NORMAL
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
}`,gv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mv=`#define PHONG
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
}`,_v=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,vv=`#define STANDARD
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
}`,xv=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,yv=`#define TOON
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
}`,Sv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Mv=`uniform float size;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Tv=`#include <common>
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
}`,bv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Av=`uniform float rotation;
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
}`,wv=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Zg,alphahash_pars_fragment:Kg,alphamap_fragment:Jg,alphamap_pars_fragment:jg,alphatest_fragment:Qg,alphatest_pars_fragment:tm,aomap_fragment:em,aomap_pars_fragment:nm,batching_pars_vertex:im,batching_vertex:rm,begin_vertex:sm,beginnormal_vertex:om,bsdfs:am,iridescence_fragment:cm,bumpmap_pars_fragment:lm,clipping_planes_fragment:um,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:fm,clipping_planes_vertex:dm,color_fragment:pm,color_pars_fragment:gm,color_pars_vertex:mm,color_vertex:_m,common:vm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:ym,displacementmap_pars_vertex:Sm,displacementmap_vertex:Mm,emissivemap_fragment:Em,emissivemap_pars_fragment:Tm,colorspace_fragment:bm,colorspace_pars_fragment:Am,envmap_fragment:wm,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Cm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Hm,envmap_vertex:Dm,fog_vertex:Lm,fog_pars_vertex:Im,fog_fragment:Um,fog_pars_fragment:Nm,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:Om,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:zm,lights_pars_begin:Vm,lights_toon_fragment:km,lights_toon_pars_fragment:Gm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:qm,lights_physical_pars_fragment:Ym,lights_fragment_begin:$m,lights_fragment_maps:Zm,lights_fragment_end:Km,logdepthbuf_fragment:Jm,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:t_,map_fragment:e_,map_pars_fragment:n_,map_particle_fragment:i_,map_particle_pars_fragment:r_,metalnessmap_fragment:s_,metalnessmap_pars_fragment:o_,morphinstance_vertex:a_,morphcolor_vertex:c_,morphnormal_vertex:l_,morphtarget_pars_vertex:u_,morphtarget_vertex:h_,normal_fragment_begin:f_,normal_fragment_maps:d_,normal_pars_fragment:p_,normal_pars_vertex:g_,normal_vertex:m_,normalmap_pars_fragment:__,clearcoat_normal_fragment_begin:v_,clearcoat_normal_fragment_maps:x_,clearcoat_pars_fragment:y_,iridescence_pars_fragment:S_,opaque_fragment:M_,packing:E_,premultiplied_alpha_fragment:T_,project_vertex:b_,dithering_fragment:A_,dithering_pars_fragment:w_,roughnessmap_fragment:R_,roughnessmap_pars_fragment:C_,shadowmap_pars_fragment:P_,shadowmap_pars_vertex:D_,shadowmap_vertex:L_,shadowmask_pars_fragment:I_,skinbase_vertex:U_,skinning_pars_vertex:N_,skinning_vertex:F_,skinnormal_vertex:O_,specularmap_fragment:B_,specularmap_pars_fragment:z_,tonemapping_fragment:V_,tonemapping_pars_fragment:H_,transmission_fragment:k_,transmission_pars_fragment:G_,uv_pars_fragment:W_,uv_pars_vertex:X_,uv_vertex:q_,worldpos_vertex:Y_,background_vert:$_,background_frag:Z_,backgroundCube_vert:K_,backgroundCube_frag:J_,cube_vert:j_,cube_frag:Q_,depth_vert:tv,depth_frag:ev,distanceRGBA_vert:nv,distanceRGBA_frag:iv,equirect_vert:rv,equirect_frag:sv,linedashed_vert:ov,linedashed_frag:av,meshbasic_vert:cv,meshbasic_frag:lv,meshlambert_vert:uv,meshlambert_frag:hv,meshmatcap_vert:fv,meshmatcap_frag:dv,meshnormal_vert:pv,meshnormal_frag:gv,meshphong_vert:mv,meshphong_frag:_v,meshphysical_vert:vv,meshphysical_frag:xv,meshtoon_vert:yv,meshtoon_frag:Sv,points_vert:Mv,points_frag:Ev,shadow_vert:Tv,shadow_frag:bv,sprite_vert:Av,sprite_frag:wv},Et={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Tn={basic:{uniforms:Ne([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ne([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new $t(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ne([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ne([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ne([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new $t(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ne([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ne([Et.points,Et.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ne([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ne([Et.common,Et.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ne([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ne([Et.sprite,Et.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ne([Et.common,Et.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ne([Et.lights,Et.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Tn.physical={uniforms:Ne([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Js={r:0,b:0,g:0},Si=new Dn,Rv=new Kt;function Cv(i,t,e,n,r,s,o){const a=new $t(0);let l=s===!0?0:1,h,f,p=null,g=0,m=null;function y(d){let c=d.isScene===!0?d.background:null;return c&&c.isTexture&&(c=(d.backgroundBlurriness>0?e:t).get(c)),c}function E(d){let c=!1;const M=y(d);M===null?_(a,l):M&&M.isColor&&(_(M,1),c=!0);const u=i.xr.getEnvironmentBlendMode();u==="additive"?n.buffers.color.setClear(0,0,0,1,o):u==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||c)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(d,c){const M=y(c);M&&(M.isCubeTexture||M.mapping===Xo)?(f===void 0&&(f=new Je(new zr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Fr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(u,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Si.copy(c.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(Si)),f.material.toneMapped=jt.getTransfer(M.colorSpace)!==ne,(p!==M||g!==M.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,p=M,g=M.version,m=i.toneMapping),f.layers.enableAll(),d.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new Je(new Yo(2,2),new di({name:"BackgroundMaterial",uniforms:Fr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,h.material.toneMapped=jt.getTransfer(M.colorSpace)!==ne,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||g!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,p=M,g=M.version,m=i.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null))}function _(d,c){d.getRGB(Js,Tf(i)),n.buffers.color.setClear(Js.r,Js.g,Js.b,c,o)}function b(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(d,c=1){a.set(d),l=c,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,_(a,l)},render:E,addToRenderList:v,dispose:b}}function Pv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,o=!1;function a(x,T,w,R,N){let F=!1;const O=p(R,w,T);s!==O&&(s=O,h(s.object)),F=m(x,R,w,N),F&&y(x,R,w,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,c(x,T,w,R),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function h(x){return i.bindVertexArray(x)}function f(x){return i.deleteVertexArray(x)}function p(x,T,w){const R=w.wireframe===!0;let N=n[x.id];N===void 0&&(N={},n[x.id]=N);let F=N[T.id];F===void 0&&(F={},N[T.id]=F);let O=F[R];return O===void 0&&(O=g(l()),F[R]=O),O}function g(x){const T=[],w=[],R=[];for(let N=0;N<e;N++)T[N]=0,w[N]=0,R[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:w,attributeDivisors:R,object:x,attributes:{},index:null}}function m(x,T,w,R){const N=s.attributes,F=T.attributes;let O=0;const z=w.getAttributes();for(const B in z)if(z[B].location>=0){const ot=N[B];let it=F[B];if(it===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),ot===void 0||ot.attribute!==it||it&&ot.data!==it.data)return!0;O++}return s.attributesNum!==O||s.index!==R}function y(x,T,w,R){const N={},F=T.attributes;let O=0;const z=w.getAttributes();for(const B in z)if(z[B].location>=0){let ot=F[B];ot===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(ot=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(ot=x.instanceColor));const it={};it.attribute=ot,ot&&ot.data&&(it.data=ot.data),N[B]=it,O++}s.attributes=N,s.attributesNum=O,s.index=R}function E(){const x=s.newAttributes;for(let T=0,w=x.length;T<w;T++)x[T]=0}function v(x){_(x,0)}function _(x,T){const w=s.newAttributes,R=s.enabledAttributes,N=s.attributeDivisors;w[x]=1,R[x]===0&&(i.enableVertexAttribArray(x),R[x]=1),N[x]!==T&&(i.vertexAttribDivisor(x,T),N[x]=T)}function b(){const x=s.newAttributes,T=s.enabledAttributes;for(let w=0,R=T.length;w<R;w++)T[w]!==x[w]&&(i.disableVertexAttribArray(w),T[w]=0)}function d(x,T,w,R,N,F,O){O===!0?i.vertexAttribIPointer(x,T,w,N,F):i.vertexAttribPointer(x,T,w,R,N,F)}function c(x,T,w,R){E();const N=R.attributes,F=w.getAttributes(),O=T.defaultAttributeValues;for(const z in F){const B=F[z];if(B.location>=0){let q=N[z];if(q===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(q=x.instanceColor)),q!==void 0){const ot=q.normalized,it=q.itemSize,ht=t.get(q);if(ht===void 0)continue;const St=ht.buffer,Mt=ht.type,xt=ht.bytesPerElement,Z=Mt===i.INT||Mt===i.UNSIGNED_INT||q.gpuType===dl;if(q.isInterleavedBufferAttribute){const Q=q.data,at=Q.stride,ct=q.offset;if(Q.isInstancedInterleavedBuffer){for(let lt=0;lt<B.locationSize;lt++)_(B.location+lt,Q.meshPerAttribute);x.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let lt=0;lt<B.locationSize;lt++)v(B.location+lt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let lt=0;lt<B.locationSize;lt++)d(B.location+lt,it/B.locationSize,Mt,ot,at*xt,(ct+it/B.locationSize*lt)*xt,Z)}else{if(q.isInstancedBufferAttribute){for(let Q=0;Q<B.locationSize;Q++)_(B.location+Q,q.meshPerAttribute);x.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Q=0;Q<B.locationSize;Q++)v(B.location+Q);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Q=0;Q<B.locationSize;Q++)d(B.location+Q,it/B.locationSize,Mt,ot,it*xt,it/B.locationSize*Q*xt,Z)}}else if(O!==void 0){const ot=O[z];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(B.location,ot);break;case 3:i.vertexAttrib3fv(B.location,ot);break;case 4:i.vertexAttrib4fv(B.location,ot);break;default:i.vertexAttrib1fv(B.location,ot)}}}}b()}function M(){A();for(const x in n){const T=n[x];for(const w in T){const R=T[w];for(const N in R)f(R[N].object),delete R[N];delete T[w]}delete n[x]}}function u(x){if(n[x.id]===void 0)return;const T=n[x.id];for(const w in T){const R=T[w];for(const N in R)f(R[N].object),delete R[N];delete T[w]}delete n[x.id]}function C(x){for(const T in n){const w=n[T];if(w[x.id]===void 0)continue;const R=w[x.id];for(const N in R)f(R[N].object),delete R[N];delete w[x.id]}}function A(){S(),o=!0,s!==r&&(s=r,h(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:u,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:v,disableUnusedAttributes:b}}function Dv(i,t,e){let n;function r(h){n=h}function s(h,f){i.drawArrays(n,h,f),e.update(f,n,1)}function o(h,f,p){p!==0&&(i.drawArraysInstanced(n,h,f,p),e.update(f,n,p))}function a(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y];e.update(m,n,1)}function l(h,f,p,g){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<h.length;y++)o(h[y],f[y],g[y]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,f,0,g,0,p);let y=0;for(let E=0;E<p;E++)y+=f[E]*g[E];e.update(y,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Lv(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==vn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const A=C===Ms&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xn&&!A)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const f=l(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),c=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=y>0,u=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:b,maxVaryings:d,maxFragmentUniforms:c,vertexTextures:M,maxSamples:u}}function Iv(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new an,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const m=p.length!==0||g||n!==0||r;return r=g,n=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,g){e=f(p,g,0)},this.setState=function(p,g,m){const y=p.clippingPlanes,E=p.clipIntersection,v=p.clipShadows,_=i.get(p);if(!r||y===null||y.length===0||s&&!v)s?f(null):h();else{const b=s?0:n,d=b*4;let c=_.clippingState||null;l.value=c,c=f(y,g,d,m);for(let M=0;M!==d;++M)c[M]=e[M];_.clippingState=c,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(p,g,m,y){const E=p!==null?p.length:0;let v=null;if(E!==0){if(v=l.value,y!==!0||v===null){const _=m+E*4,b=g.matrixWorldInverse;a.getNormalMatrix(b),(v===null||v.length<_)&&(v=new Float32Array(_));for(let d=0,c=m;d!==E;++d,c+=4)o.copy(p[d]).applyMatrix4(b,a),o.normal.toArray(v,c),v[c+3]=o.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,v}}function Uv(i){let t=new WeakMap;function e(o,a){return a===Mc?o.mapping=Ir:a===Ec&&(o.mapping=Ur),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mc||a===Ec)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Zp(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",r),e(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const br=4,Pu=[.125,.215,.35,.446,.526,.582],Li=20,Ia=new Vf,Du=new $t;let Ua=null,Na=0,Fa=0,Oa=!1;const Pi=(1+Math.sqrt(5))/2,ar=1/Pi,Lu=[new I(-Pi,ar,0),new I(Pi,ar,0),new I(-ar,0,Pi),new I(ar,0,Pi),new I(0,Pi,-ar),new I(0,Pi,ar),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Nv=new I;class Iu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=Nv}=s;Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Na,Fa),this._renderer.xr.enabled=Oa,t.scissorTest=!1,js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ir||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ms,format:vn,colorSpace:Nr,depthBuffer:!1},r=Uu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fv(s)),this._blurMaterial=Ov(s,t,e)}return r}_compileMaterial(t){const e=new Je(this._lodPlanes[0],t);this._renderer.compile(e,Ia)}_sceneToCubeUV(t,e,n,r,s){const l=new on(90,1,e,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,m=p.toneMapping;p.getClearColor(Du),p.toneMapping=hi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));const E=new Sl({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),v=new Je(new zr,E);let _=!1;const b=t.background;b?b.isColor&&(E.color.copy(b),t.background=null,_=!0):(E.color.copy(Du),_=!0);for(let d=0;d<6;d++){const c=d%3;c===0?(l.up.set(0,h[d],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[d],s.y,s.z)):c===1?(l.up.set(0,0,h[d]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[d],s.z)):(l.up.set(0,h[d],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[d]));const M=this._cubeSize;js(r,c*M,d>2?M:0,M,M),p.setRenderTarget(r),_&&p.render(v,l),p.render(t,l)}v.geometry.dispose(),v.material.dispose(),p.toneMapping=m,p.autoClear=g,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ir||t.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ia)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Lu[(r-s-1)%Lu.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Je(this._lodPlanes[r],h),g=h.uniforms,m=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Li-1),E=s/y,v=isFinite(s)?1+Math.floor(f*E):Li;v>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Li}`);const _=[];let b=0;for(let C=0;C<Li;++C){const A=C/E,S=Math.exp(-A*A/2);_.push(S),C===0?b+=S:C<v&&(b+=2*S)}for(let C=0;C<_.length;C++)_[C]=_[C]/b;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=_,g.latitudinal.value=o==="latitudinal",a&&(g.poleAxis.value=a);const{_lodMax:d}=this;g.dTheta.value=y,g.mipInt.value=d-n;const c=this._sizeLods[r],M=3*c*(r>d-br?r-d+br:0),u=4*(this._cubeSize-c);js(e,M,u,3*c,2*c),l.setRenderTarget(e),l.render(p,Ia)}}function Fv(i){const t=[],e=[],n=[];let r=i;const s=i-br+1+Pu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-br?l=Pu[o-i+br-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),f=-h,p=1+h,g=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,y=6,E=3,v=2,_=1,b=new Float32Array(E*y*m),d=new Float32Array(v*y*m),c=new Float32Array(_*y*m);for(let u=0;u<m;u++){const C=u%3*2/3-1,A=u>2?0:-1,S=[C,A,0,C+2/3,A,0,C+2/3,A+1,0,C,A,0,C+2/3,A+1,0,C,A+1,0];b.set(S,E*y*u),d.set(g,v*y*u);const x=[u,u,u,u,u,u];c.set(x,_*y*u)}const M=new yn;M.setAttribute("position",new We(b,E)),M.setAttribute("uv",new We(d,v)),M.setAttribute("faceIndex",new We(c,_)),t.push(M),r>br&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uu(i,t,e){const n=new zi(i,t,e);return n.texture.mapping=Xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Ov(i,t,e){const n=new Float32Array(Li),r=new I(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Nu(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Fu(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}function Bv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===Mc||l===Ec,f=l===Ir||l===Ur;if(h||f){let p=t.get(a);const g=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==g)return e===null&&(e=new Iu(i)),p=h?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{const m=a.image;return h&&m&&m.height>0||f&&m&&r(m)?(e===null&&(e=new Iu(i)),p=h?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const h=6;for(let f=0;f<h;f++)a[f]!==void 0&&l++;return l===h}function s(a){const l=a.target;l.removeEventListener("dispose",s);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function zv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Vv(i,t,e,n){const r={},s=new WeakMap;function o(p){const g=p.target;g.index!==null&&t.remove(g.index);for(const y in g.attributes)t.remove(g.attributes[y]);g.removeEventListener("dispose",o),delete r[g.id];const m=s.get(g);m&&(t.remove(m),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function a(p,g){return r[g.id]===!0||(g.addEventListener("dispose",o),r[g.id]=!0,e.memory.geometries++),g}function l(p){const g=p.attributes;for(const m in g)t.update(g[m],i.ARRAY_BUFFER)}function h(p){const g=[],m=p.index,y=p.attributes.position;let E=0;if(m!==null){const b=m.array;E=m.version;for(let d=0,c=b.length;d<c;d+=3){const M=b[d+0],u=b[d+1],C=b[d+2];g.push(M,u,u,C,C,M)}}else if(y!==void 0){const b=y.array;E=y.version;for(let d=0,c=b.length/3-1;d<c;d+=3){const M=d+0,u=d+1,C=d+2;g.push(M,u,u,C,C,M)}}else return;const v=new(vf(g)?Ef:Mf)(g,1);v.version=E;const _=s.get(p);_&&t.remove(_),s.set(p,v)}function f(p){const g=s.get(p);if(g){const m=p.index;m!==null&&g.version<m.version&&h(p)}else h(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:f}}function Hv(i,t,e){let n;function r(g){n=g}let s,o;function a(g){s=g.type,o=g.bytesPerElement}function l(g,m){i.drawElements(n,m,s,g*o),e.update(m,n,1)}function h(g,m,y){y!==0&&(i.drawElementsInstanced(n,m,s,g*o,y),e.update(m,n,y))}function f(g,m,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,g,0,y);let v=0;for(let _=0;_<y;_++)v+=m[_];e.update(v,n,1)}function p(g,m,y,E){if(y===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<g.length;_++)h(g[_]/o,m[_],E[_]);else{v.multiDrawElementsInstancedWEBGL(n,m,0,s,g,0,E,0,y);let _=0;for(let b=0;b<y;b++)_+=m[b]*E[b];e.update(_,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function kv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Gv(i,t,e){const n=new WeakMap,r=new se;function s(o,a,l){const h=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=f!==void 0?f.length:0;let g=n.get(a);if(g===void 0||g.count!==p){let x=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var m=x;g!==void 0&&g.texture.dispose();const y=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],d=a.morphAttributes.color||[];let c=0;y===!0&&(c=1),E===!0&&(c=2),v===!0&&(c=3);let M=a.attributes.position.count*c,u=1;M>t.maxTextureSize&&(u=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const C=new Float32Array(M*u*4*p),A=new xf(C,M,u,p);A.type=Xn,A.needsUpdate=!0;const S=c*4;for(let T=0;T<p;T++){const w=_[T],R=b[T],N=d[T],F=M*u*4*T;for(let O=0;O<w.count;O++){const z=O*S;y===!0&&(r.fromBufferAttribute(w,O),C[F+z+0]=r.x,C[F+z+1]=r.y,C[F+z+2]=r.z,C[F+z+3]=0),E===!0&&(r.fromBufferAttribute(R,O),C[F+z+4]=r.x,C[F+z+5]=r.y,C[F+z+6]=r.z,C[F+z+7]=0),v===!0&&(r.fromBufferAttribute(N,O),C[F+z+8]=r.x,C[F+z+9]=r.y,C[F+z+10]=r.z,C[F+z+11]=N.itemSize===4?r.w:1)}}g={count:p,texture:A,size:new ut(M,u)},n.set(a,g),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let y=0;for(let v=0;v<h.length;v++)y+=h[v];const E=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(i,"morphTargetBaseInfluence",E),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function Wv(i,t,e,n){let r=new WeakMap;function s(l){const h=n.render.frame,f=l.geometry,p=t.get(l,f);if(r.get(p)!==h&&(t.update(p),r.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const g=l.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return p}function o(){r=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:o}}const Gf=new Ge,Ou=new Rf(1,1),Wf=new xf,Xf=new Lp,qf=new Af,Bu=[],zu=[],Vu=new Float32Array(16),Hu=new Float32Array(9),ku=new Float32Array(4);function Vr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Bu[r];if(s===void 0&&(s=new Float32Array(r),Bu[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $o(i,t){let e=zu[t];e===void 0&&(e=new Int32Array(t),zu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function Yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function $v(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Zv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;ku.set(n),i.uniformMatrix2fv(this.addr,!1,ku),Te(e,n)}}function Kv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Hu.set(n),i.uniformMatrix3fv(this.addr,!1,Hu),Te(e,n)}}function Jv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Vu.set(n),i.uniformMatrix4fv(this.addr,!1,Vu),Te(e,n)}}function jv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function n0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function o0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ou.compareFunction=mf,s=Ou):s=Gf,e.setTexture2D(t||s,r)}function a0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Xf,r)}function c0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||qf,r)}function l0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Wf,r)}function u0(i){switch(i){case 5126:return Xv;case 35664:return qv;case 35665:return Yv;case 35666:return $v;case 35674:return Zv;case 35675:return Kv;case 35676:return Jv;case 5124:case 35670:return jv;case 35667:case 35671:return Qv;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return r0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return l0}}function h0(i,t){i.uniform1fv(this.addr,t)}function f0(i,t){const e=Vr(t,this.size,2);i.uniform2fv(this.addr,e)}function d0(i,t){const e=Vr(t,this.size,3);i.uniform3fv(this.addr,e)}function p0(i,t){const e=Vr(t,this.size,4);i.uniform4fv(this.addr,e)}function g0(i,t){const e=Vr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function m0(i,t){const e=Vr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _0(i,t){const e=Vr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function v0(i,t){i.uniform1iv(this.addr,t)}function x0(i,t){i.uniform2iv(this.addr,t)}function y0(i,t){i.uniform3iv(this.addr,t)}function S0(i,t){i.uniform4iv(this.addr,t)}function M0(i,t){i.uniform1uiv(this.addr,t)}function E0(i,t){i.uniform2uiv(this.addr,t)}function T0(i,t){i.uniform3uiv(this.addr,t)}function b0(i,t){i.uniform4uiv(this.addr,t)}function A0(i,t,e){const n=this.cache,r=t.length,s=$o(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Gf,s[o])}function w0(i,t,e){const n=this.cache,r=t.length,s=$o(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Xf,s[o])}function R0(i,t,e){const n=this.cache,r=t.length,s=$o(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||qf,s[o])}function C0(i,t,e){const n=this.cache,r=t.length,s=$o(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Wf,s[o])}function P0(i){switch(i){case 5126:return h0;case 35664:return f0;case 35665:return d0;case 35666:return p0;case 35674:return g0;case 35675:return m0;case 35676:return _0;case 5124:case 35670:return v0;case 35667:case 35671:return x0;case 35668:case 35672:return y0;case 35669:case 35673:return S0;case 5125:return M0;case 36294:return E0;case 36295:return T0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}class D0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=u0(e.type)}}class L0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P0(e.type)}}class I0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function Gu(i,t){i.seq.push(t),i.map[t.id]=t}function U0(i,t,e){const n=i.name,r=n.length;for(Ba.lastIndex=0;;){const s=Ba.exec(n),o=Ba.lastIndex;let a=s[1];const l=s[2]==="]",h=s[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===r){Gu(e,h===void 0?new D0(a,i,t):new L0(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new I0(a),Gu(e,p)),e=p}}}class Po{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);U0(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Wu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const N0=37297;let F0=0;function O0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Xu=new Xt;function B0(i){jt._getMatrix(Xu,jt.workingColorSpace,i);const t=`mat3( ${Xu.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case No:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+O0(i.getShaderSource(t),a)}else return s}function z0(i,t){const e=B0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function V0(i,t){let e;switch(t){case Xd:e="Linear";break;case qd:e="Reinhard";break;case Yd:e="Cineon";break;case $d:e="ACESFilmic";break;case Kd:e="AgX";break;case Jd:e="Neutral";break;case Zd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qs=new I;function H0(){jt.getLuminanceCoefficients(Qs);const i=Qs.x.toFixed(4),t=Qs.y.toFixed(4),e=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function G0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function is(i){return i!==""}function Yu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $u(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(i){return i.replace(X0,Y0)}const q0=new Map;function Y0(i,t){let e=Yt[t];if(e===void 0){const n=q0.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return il(e)}const $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(i){return i.replace($0,Z0)}function Z0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ku(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function K0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function J0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ir:case Ur:t="ENVMAP_TYPE_CUBE";break;case Xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function j0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ur&&(t="ENVMAP_MODE_REFRACTION"),t}function Q0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sf:t="ENVMAP_BLENDING_MULTIPLY";break;case Gd:t="ENVMAP_BLENDING_MIX";break;case Wd:t="ENVMAP_BLENDING_ADD";break}return t}function tx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ex(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=K0(e),h=J0(e),f=j0(e),p=Q0(e),g=tx(e),m=k0(e),y=G0(s),E=r.createProgram();let v,_,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(is).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(is).join(`
`),_.length>0&&(_+=`
`)):(v=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),_=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==hi?V0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,z0("linearToOutputTexel",e.outputColorSpace),H0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(is).join(`
`)),o=il(o),o=Yu(o,e),o=$u(o,e),a=il(a),a=Yu(a,e),a=$u(a,e),o=Zu(o),a=Zu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const d=b+v+o,c=b+_+a,M=Wu(r,r.VERTEX_SHADER,d),u=Wu(r,r.FRAGMENT_SHADER,c);r.attachShader(E,M),r.attachShader(E,u),e.index0AttributeName!==void 0?r.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function C(T){if(i.debug.checkShaderErrors){const w=r.getProgramInfoLog(E)||"",R=r.getShaderInfoLog(M)||"",N=r.getShaderInfoLog(u)||"",F=w.trim(),O=R.trim(),z=N.trim();let B=!0,q=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,M,u);else{const ot=qu(r,M,"vertex"),it=qu(r,u,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+ot+`
`+it)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||z==="")&&(q=!1);q&&(T.diagnostics={runnable:B,programLog:F,vertexShader:{log:O,prefix:v},fragmentShader:{log:z,prefix:_}})}r.deleteShader(M),r.deleteShader(u),A=new Po(r,E),S=W0(r,E)}let A;this.getUniforms=function(){return A===void 0&&C(this),A};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(E,N0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F0++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=M,this.fragmentShader=u,this}let nx=0;class ix{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new rx(t),e.set(t,n)),n}}class rx{constructor(t){this.id=nx++,this.code=t,this.usedTimes=0}}function sx(i,t,e,n,r,s,o){const a=new yf,l=new ix,h=new Set,f=[],p=r.logarithmicDepthBuffer,g=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return h.add(S),S===0?"uv":`uv${S}`}function v(S,x,T,w,R){const N=w.fog,F=R.geometry,O=S.isMeshStandardMaterial?w.environment:null,z=(S.isMeshStandardMaterial?e:t).get(S.envMap||O),B=z&&z.mapping===Xo?z.image.height:null,q=y[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ot=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=ot!==void 0?ot.length:0;let ht=0;F.morphAttributes.position!==void 0&&(ht=1),F.morphAttributes.normal!==void 0&&(ht=2),F.morphAttributes.color!==void 0&&(ht=3);let St,Mt,xt,Z;if(q){const Qt=Tn[q];St=Qt.vertexShader,Mt=Qt.fragmentShader}else St=S.vertexShader,Mt=S.fragmentShader,l.update(S),xt=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);const Q=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),ct=R.isInstancedMesh===!0,lt=R.isBatchedMesh===!0,wt=!!S.map,Gt=!!S.matcap,U=!!z,tt=!!S.aoMap,K=!!S.lightMap,$=!!S.bumpMap,Y=!!S.normalMap,gt=!!S.displacementMap,nt=!!S.emissiveMap,rt=!!S.metalnessMap,Ct=!!S.roughnessMap,Rt=S.anisotropy>0,L=S.clearcoat>0,P=S.dispersion>0,H=S.iridescence>0,W=S.sheen>0,et=S.transmission>0,X=Rt&&!!S.anisotropyMap,vt=L&&!!S.clearcoatMap,_t=L&&!!S.clearcoatNormalMap,It=L&&!!S.clearcoatRoughnessMap,Dt=H&&!!S.iridescenceMap,ft=H&&!!S.iridescenceThicknessMap,At=W&&!!S.sheenColorMap,Vt=W&&!!S.sheenRoughnessMap,Ft=!!S.specularMap,Tt=!!S.specularColorMap,qt=!!S.specularIntensityMap,V=et&&!!S.transmissionMap,mt=et&&!!S.thicknessMap,yt=!!S.gradientMap,Lt=!!S.alphaMap,dt=S.alphaTest>0,st=!!S.alphaHash,Nt=!!S.extensions;let Wt=hi;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const oe={shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:St,fragmentShader:Mt,defines:S.defines,customVertexShaderID:xt,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:lt,batchingColor:lt&&R._colorsTexture!==null,instancing:ct,instancingColor:ct&&R.instanceColor!==null,instancingMorph:ct&&R.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Nr,alphaToCoverage:!!S.alphaToCoverage,map:wt,matcap:Gt,envMap:U,envMapMode:U&&z.mapping,envMapCubeUVHeight:B,aoMap:tt,lightMap:K,bumpMap:$,normalMap:Y,displacementMap:g&&gt,emissiveMap:nt,normalMapObjectSpace:Y&&S.normalMapType===ep,normalMapTangentSpace:Y&&S.normalMapType===gf,metalnessMap:rt,roughnessMap:Ct,anisotropy:Rt,anisotropyMap:X,clearcoat:L,clearcoatMap:vt,clearcoatNormalMap:_t,clearcoatRoughnessMap:It,dispersion:P,iridescence:H,iridescenceMap:Dt,iridescenceThicknessMap:ft,sheen:W,sheenColorMap:At,sheenRoughnessMap:Vt,specularMap:Ft,specularColorMap:Tt,specularIntensityMap:qt,transmission:et,transmissionMap:V,thicknessMap:mt,gradientMap:yt,opaque:S.transparent===!1&&S.blending===Cr&&S.alphaToCoverage===!1,alphaMap:Lt,alphaTest:dt,alphaHash:st,combine:S.combine,mapUv:wt&&E(S.map.channel),aoMapUv:tt&&E(S.aoMap.channel),lightMapUv:K&&E(S.lightMap.channel),bumpMapUv:$&&E(S.bumpMap.channel),normalMapUv:Y&&E(S.normalMap.channel),displacementMapUv:gt&&E(S.displacementMap.channel),emissiveMapUv:nt&&E(S.emissiveMap.channel),metalnessMapUv:rt&&E(S.metalnessMap.channel),roughnessMapUv:Ct&&E(S.roughnessMap.channel),anisotropyMapUv:X&&E(S.anisotropyMap.channel),clearcoatMapUv:vt&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:_t&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:At&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&E(S.sheenRoughnessMap.channel),specularMapUv:Ft&&E(S.specularMap.channel),specularColorMapUv:Tt&&E(S.specularColorMap.channel),specularIntensityMapUv:qt&&E(S.specularIntensityMap.channel),transmissionMapUv:V&&E(S.transmissionMap.channel),thicknessMapUv:mt&&E(S.thicknessMap.channel),alphaMapUv:Lt&&E(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Y||Rt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!F.attributes.uv&&(wt||Lt),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:at,skinning:R.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:ht,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:wt&&S.map.isVideoTexture===!0&&jt.getTransfer(S.map.colorSpace)===ne,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&jt.getTransfer(S.emissiveMap.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_n,flipSided:S.side===Fe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Nt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&S.extensions.multiDraw===!0||lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return oe.vertexUv1s=h.has(1),oe.vertexUv2s=h.has(2),oe.vertexUv3s=h.has(3),h.clear(),oe}function _(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)x.push(T),x.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(b(x,S),d(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function b(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function d(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function c(S){const x=y[S.type];let T;if(x){const w=Tn[x];T=Xp.clone(w.uniforms)}else T=S.uniforms;return T}function M(S,x){let T;for(let w=0,R=f.length;w<R;w++){const N=f[w];if(N.cacheKey===x){T=N,++T.usedTimes;break}}return T===void 0&&(T=new ex(i,x,S,s),f.push(T)),T}function u(S){if(--S.usedTimes===0){const x=f.indexOf(S);f[x]=f[f.length-1],f.pop(),S.destroy()}}function C(S){l.remove(S)}function A(){l.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:c,acquireProgram:M,releaseProgram:u,releaseShaderCache:C,programs:f,dispose:A}}function ox(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function ax(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ju(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ju(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(p,g,m,y,E,v){let _=i[t];return _===void 0?(_={id:p.id,object:p,geometry:g,material:m,groupOrder:y,renderOrder:p.renderOrder,z:E,group:v},i[t]=_):(_.id=p.id,_.object=p,_.geometry=g,_.material=m,_.groupOrder=y,_.renderOrder=p.renderOrder,_.z=E,_.group=v),t++,_}function a(p,g,m,y,E,v){const _=o(p,g,m,y,E,v);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):e.push(_)}function l(p,g,m,y,E,v){const _=o(p,g,m,y,E,v);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function h(p,g){e.length>1&&e.sort(p||ax),n.length>1&&n.sort(g||Ju),r.length>1&&r.sort(g||Ju)}function f(){for(let p=t,g=i.length;p<g;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:f,sort:h}}function cx(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new ju,i.set(n,[o])):r>=s.length?(o=new ju,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function lx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new $t};break;case"SpotLight":e={position:new I,direction:new I,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function ux(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let hx=0;function fx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dx(i){const t=new lx,e=ux(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);const r=new I,s=new Kt,o=new Kt;function a(h){let f=0,p=0,g=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,y=0,E=0,v=0,_=0,b=0,d=0,c=0,M=0,u=0,C=0;h.sort(fx);for(let S=0,x=h.length;S<x;S++){const T=h[S],w=T.color,R=T.intensity,N=T.distance,F=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)f+=w.r*R,p+=w.g*R,g+=w.b*R;else if(T.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(T.sh.coefficients[O],R);C++}else if(T.isDirectionalLight){const O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const z=T.shadow,B=e.get(T);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=F,n.directionalShadowMatrix[m]=T.shadow.matrix,b++}n.directional[m]=O,m++}else if(T.isSpotLight){const O=t.get(T);O.position.setFromMatrixPosition(T.matrixWorld),O.color.copy(w).multiplyScalar(R),O.distance=N,O.coneCos=Math.cos(T.angle),O.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),O.decay=T.decay,n.spot[E]=O;const z=T.shadow;if(T.map&&(n.spotLightMap[M]=T.map,M++,z.updateMatrices(T),T.castShadow&&u++),n.spotLightMatrix[E]=z.matrix,T.castShadow){const B=e.get(T);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,n.spotShadow[E]=B,n.spotShadowMap[E]=F,c++}E++}else if(T.isRectAreaLight){const O=t.get(T);O.color.copy(w).multiplyScalar(R),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),n.rectArea[v]=O,v++}else if(T.isPointLight){const O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),O.distance=T.distance,O.decay=T.decay,T.castShadow){const z=T.shadow,B=e.get(T);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,B.shadowCameraNear=z.camera.near,B.shadowCameraFar=z.camera.far,n.pointShadow[y]=B,n.pointShadowMap[y]=F,n.pointShadowMatrix[y]=T.shadow.matrix,d++}n.point[y]=O,y++}else if(T.isHemisphereLight){const O=t.get(T);O.skyColor.copy(T.color).multiplyScalar(R),O.groundColor.copy(T.groundColor).multiplyScalar(R),n.hemi[_]=O,_++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=g;const A=n.hash;(A.directionalLength!==m||A.pointLength!==y||A.spotLength!==E||A.rectAreaLength!==v||A.hemiLength!==_||A.numDirectionalShadows!==b||A.numPointShadows!==d||A.numSpotShadows!==c||A.numSpotMaps!==M||A.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=E,n.rectArea.length=v,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=d,n.pointShadowMap.length=d,n.spotShadow.length=c,n.spotShadowMap.length=c,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=d,n.spotLightMatrix.length=c+M-u,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=u,n.numLightProbes=C,A.directionalLength=m,A.pointLength=y,A.spotLength=E,A.rectAreaLength=v,A.hemiLength=_,A.numDirectionalShadows=b,A.numPointShadows=d,A.numSpotShadows=c,A.numSpotMaps=M,A.numLightProbes=C,n.version=hx++)}function l(h,f){let p=0,g=0,m=0,y=0,E=0;const v=f.matrixWorldInverse;for(let _=0,b=h.length;_<b;_++){const d=h[_];if(d.isDirectionalLight){const c=n.directional[p];c.direction.setFromMatrixPosition(d.matrixWorld),r.setFromMatrixPosition(d.target.matrixWorld),c.direction.sub(r),c.direction.transformDirection(v),p++}else if(d.isSpotLight){const c=n.spot[m];c.position.setFromMatrixPosition(d.matrixWorld),c.position.applyMatrix4(v),c.direction.setFromMatrixPosition(d.matrixWorld),r.setFromMatrixPosition(d.target.matrixWorld),c.direction.sub(r),c.direction.transformDirection(v),m++}else if(d.isRectAreaLight){const c=n.rectArea[y];c.position.setFromMatrixPosition(d.matrixWorld),c.position.applyMatrix4(v),o.identity(),s.copy(d.matrixWorld),s.premultiply(v),o.extractRotation(s),c.halfWidth.set(d.width*.5,0,0),c.halfHeight.set(0,d.height*.5,0),c.halfWidth.applyMatrix4(o),c.halfHeight.applyMatrix4(o),y++}else if(d.isPointLight){const c=n.point[g];c.position.setFromMatrixPosition(d.matrixWorld),c.position.applyMatrix4(v),g++}else if(d.isHemisphereLight){const c=n.hemi[E];c.direction.setFromMatrixPosition(d.matrixWorld),c.direction.transformDirection(v),E++}}}return{setup:a,setupView:l,state:n}}function Qu(i){const t=new dx(i),e=[],n=[];function r(f){h.camera=f,e.length=0,n.length=0}function s(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function px(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Qu(i),t.set(r,[a])):s>=o.length?(a=new Qu(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _x(i,t,e){let n=new Ml;const r=new ut,s=new ut,o=new se,a=new Og({depthPacking:tp}),l=new Bg,h={},f=e.maxTextureSize,p={[Cn]:Fe,[Fe]:Cn,[_n]:_n},g=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:gx,fragmentShader:mx}),m=g.clone();m.defines.HORIZONTAL_PASS=1;const y=new yn;y.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Je(y,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nf;let _=this.type;this.render=function(u,C,A){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||u.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),w=i.state;w.setBlending(ui),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const R=_!==kn&&this.type===kn,N=_===kn&&this.type!==kn;for(let F=0,O=u.length;F<O;F++){const z=u[F],B=z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const q=B.getFrameExtents();if(r.multiply(q),s.copy(B.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/q.x),r.x=s.x*q.x,B.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/q.y),r.y=s.y*q.y,B.mapSize.y=s.y)),B.map===null||R===!0||N===!0){const it=this.type!==kn?{minFilter:xn,magFilter:xn}:{};B.map!==null&&B.map.dispose(),B.map=new zi(r.x,r.y,it),B.map.texture.name=z.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const ot=B.getViewportCount();for(let it=0;it<ot;it++){const ht=B.getViewport(it);o.set(s.x*ht.x,s.y*ht.y,s.x*ht.z,s.y*ht.w),w.viewport(o),B.updateMatrices(z,it),n=B.getFrustum(),c(C,A,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===kn&&b(B,A),B.needsUpdate=!1}_=this.type,v.needsUpdate=!1,i.setRenderTarget(S,x,T)};function b(u,C){const A=t.update(E);g.defines.VSM_SAMPLES!==u.blurSamples&&(g.defines.VSM_SAMPLES=u.blurSamples,m.defines.VSM_SAMPLES=u.blurSamples,g.needsUpdate=!0,m.needsUpdate=!0),u.mapPass===null&&(u.mapPass=new zi(r.x,r.y)),g.uniforms.shadow_pass.value=u.map.texture,g.uniforms.resolution.value=u.mapSize,g.uniforms.radius.value=u.radius,i.setRenderTarget(u.mapPass),i.clear(),i.renderBufferDirect(C,null,A,g,E,null),m.uniforms.shadow_pass.value=u.mapPass.texture,m.uniforms.resolution.value=u.mapSize,m.uniforms.radius.value=u.radius,i.setRenderTarget(u.map),i.clear(),i.renderBufferDirect(C,null,A,m,E,null)}function d(u,C,A,S){let x=null;const T=A.isPointLight===!0?u.customDistanceMaterial:u.customDepthMaterial;if(T!==void 0)x=T;else if(x=A.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const w=x.uuid,R=C.uuid;let N=h[w];N===void 0&&(N={},h[w]=N);let F=N[R];F===void 0&&(F=x.clone(),N[R]=F,C.addEventListener("dispose",M)),x=F}if(x.visible=C.visible,x.wireframe=C.wireframe,S===kn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:p[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const w=i.properties.get(x);w.light=A}return x}function c(u,C,A,S,x){if(u.visible===!1)return;if(u.layers.test(C.layers)&&(u.isMesh||u.isLine||u.isPoints)&&(u.castShadow||u.receiveShadow&&x===kn)&&(!u.frustumCulled||n.intersectsObject(u))){u.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,u.matrixWorld);const R=t.update(u),N=u.material;if(Array.isArray(N)){const F=R.groups;for(let O=0,z=F.length;O<z;O++){const B=F[O],q=N[B.materialIndex];if(q&&q.visible){const ot=d(u,q,S,x);u.onBeforeShadow(i,u,C,A,R,ot,B),i.renderBufferDirect(A,null,R,ot,u,B),u.onAfterShadow(i,u,C,A,R,ot,B)}}}else if(N.visible){const F=d(u,N,S,x);u.onBeforeShadow(i,u,C,A,R,F,null),i.renderBufferDirect(A,null,R,F,u,null),u.onAfterShadow(i,u,C,A,R,F,null)}}const w=u.children;for(let R=0,N=w.length;R<N;R++)c(w[R],C,A,S,x)}function M(u){u.target.removeEventListener("dispose",M);for(const A in h){const S=h[A],x=u.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const vx={[gc]:mc,[_c]:yc,[vc]:Sc,[Lr]:xc,[mc]:gc,[yc]:_c,[Sc]:vc,[xc]:Lr};function xx(i,t){function e(){let V=!1;const mt=new se;let yt=null;const Lt=new se(0,0,0,0);return{setMask:function(dt){yt!==dt&&!V&&(i.colorMask(dt,dt,dt,dt),yt=dt)},setLocked:function(dt){V=dt},setClear:function(dt,st,Nt,Wt,oe){oe===!0&&(dt*=Wt,st*=Wt,Nt*=Wt),mt.set(dt,st,Nt,Wt),Lt.equals(mt)===!1&&(i.clearColor(dt,st,Nt,Wt),Lt.copy(mt))},reset:function(){V=!1,yt=null,Lt.set(-1,0,0,0)}}}function n(){let V=!1,mt=!1,yt=null,Lt=null,dt=null;return{setReversed:function(st){if(mt!==st){const Nt=t.get("EXT_clip_control");st?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),mt=st;const Wt=dt;dt=null,this.setClear(Wt)}},getReversed:function(){return mt},setTest:function(st){st?Q(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(st){yt!==st&&!V&&(i.depthMask(st),yt=st)},setFunc:function(st){if(mt&&(st=vx[st]),Lt!==st){switch(st){case gc:i.depthFunc(i.NEVER);break;case mc:i.depthFunc(i.ALWAYS);break;case _c:i.depthFunc(i.LESS);break;case Lr:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case xc:i.depthFunc(i.GEQUAL);break;case yc:i.depthFunc(i.GREATER);break;case Sc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=st}},setLocked:function(st){V=st},setClear:function(st){dt!==st&&(mt&&(st=1-st),i.clearDepth(st),dt=st)},reset:function(){V=!1,yt=null,Lt=null,dt=null,mt=!1}}}function r(){let V=!1,mt=null,yt=null,Lt=null,dt=null,st=null,Nt=null,Wt=null,oe=null;return{setTest:function(Qt){V||(Qt?Q(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(Qt){mt!==Qt&&!V&&(i.stencilMask(Qt),mt=Qt)},setFunc:function(Qt,Un,Sn){(yt!==Qt||Lt!==Un||dt!==Sn)&&(i.stencilFunc(Qt,Un,Sn),yt=Qt,Lt=Un,dt=Sn)},setOp:function(Qt,Un,Sn){(st!==Qt||Nt!==Un||Wt!==Sn)&&(i.stencilOp(Qt,Un,Sn),st=Qt,Nt=Un,Wt=Sn)},setLocked:function(Qt){V=Qt},setClear:function(Qt){oe!==Qt&&(i.clearStencil(Qt),oe=Qt)},reset:function(){V=!1,mt=null,yt=null,Lt=null,dt=null,st=null,Nt=null,Wt=null,oe=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,m=[],y=null,E=!1,v=null,_=null,b=null,d=null,c=null,M=null,u=null,C=new $t(0,0,0),A=0,S=!1,x=null,T=null,w=null,R=null,N=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,z=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=z>=1):B.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=z>=2);let q=null,ot={};const it=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),St=new se().fromArray(it),Mt=new se().fromArray(ht);function xt(V,mt,yt,Lt){const dt=new Uint8Array(4),st=i.createTexture();i.bindTexture(V,st),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<yt;Nt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(mt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return st}const Z={};Z[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(Lr),$(!1),Y(ql),Q(i.CULL_FACE),tt(ui);function Q(V){f[V]!==!0&&(i.enable(V),f[V]=!0)}function at(V){f[V]!==!1&&(i.disable(V),f[V]=!1)}function ct(V,mt){return p[V]!==mt?(i.bindFramebuffer(V,mt),p[V]=mt,V===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=mt),V===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function lt(V,mt){let yt=m,Lt=!1;if(V){yt=g.get(mt),yt===void 0&&(yt=[],g.set(mt,yt));const dt=V.textures;if(yt.length!==dt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Nt=dt.length;st<Nt;st++)yt[st]=i.COLOR_ATTACHMENT0+st;yt.length=dt.length,Lt=!0}}else yt[0]!==i.BACK&&(yt[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(yt)}function wt(V){return y!==V?(i.useProgram(V),y=V,!0):!1}const Gt={[Di]:i.FUNC_ADD,[Ad]:i.FUNC_SUBTRACT,[wd]:i.FUNC_REVERSE_SUBTRACT};Gt[Rd]=i.MIN,Gt[Cd]=i.MAX;const U={[Pd]:i.ZERO,[Dd]:i.ONE,[Ld]:i.SRC_COLOR,[dc]:i.SRC_ALPHA,[Bd]:i.SRC_ALPHA_SATURATE,[Fd]:i.DST_COLOR,[Ud]:i.DST_ALPHA,[Id]:i.ONE_MINUS_SRC_COLOR,[pc]:i.ONE_MINUS_SRC_ALPHA,[Od]:i.ONE_MINUS_DST_COLOR,[Nd]:i.ONE_MINUS_DST_ALPHA,[zd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[Hd]:i.CONSTANT_ALPHA,[kd]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(V,mt,yt,Lt,dt,st,Nt,Wt,oe,Qt){if(V===ui){E===!0&&(at(i.BLEND),E=!1);return}if(E===!1&&(Q(i.BLEND),E=!0),V!==bd){if(V!==v||Qt!==S){if((_!==Di||c!==Di)&&(i.blendEquation(i.FUNC_ADD),_=Di,c=Di),Qt)switch(V){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yl:i.blendFunc(i.ONE,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $l:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,d=null,M=null,u=null,C.set(0,0,0),A=0,v=V,S=Qt}return}dt=dt||mt,st=st||yt,Nt=Nt||Lt,(mt!==_||dt!==c)&&(i.blendEquationSeparate(Gt[mt],Gt[dt]),_=mt,c=dt),(yt!==b||Lt!==d||st!==M||Nt!==u)&&(i.blendFuncSeparate(U[yt],U[Lt],U[st],U[Nt]),b=yt,d=Lt,M=st,u=Nt),(Wt.equals(C)===!1||oe!==A)&&(i.blendColor(Wt.r,Wt.g,Wt.b,oe),C.copy(Wt),A=oe),v=V,S=!1}function K(V,mt){V.side===_n?at(i.CULL_FACE):Q(i.CULL_FACE);let yt=V.side===Fe;mt&&(yt=!yt),$(yt),V.blending===Cr&&V.transparent===!1?tt(ui):tt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const Lt=V.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),nt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(V){x!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),x=V)}function Y(V){V!==Ed?(Q(i.CULL_FACE),V!==T&&(V===ql?i.cullFace(i.BACK):V===Td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),T=V}function gt(V){V!==w&&(O&&i.lineWidth(V),w=V)}function nt(V,mt,yt){V?(Q(i.POLYGON_OFFSET_FILL),(R!==mt||N!==yt)&&(i.polygonOffset(mt,yt),R=mt,N=yt)):at(i.POLYGON_OFFSET_FILL)}function rt(V){V?Q(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function Ct(V){V===void 0&&(V=i.TEXTURE0+F-1),q!==V&&(i.activeTexture(V),q=V)}function Rt(V,mt,yt){yt===void 0&&(q===null?yt=i.TEXTURE0+F-1:yt=q);let Lt=ot[yt];Lt===void 0&&(Lt={type:void 0,texture:void 0},ot[yt]=Lt),(Lt.type!==V||Lt.texture!==mt)&&(q!==yt&&(i.activeTexture(yt),q=yt),i.bindTexture(V,mt||Z[V]),Lt.type=V,Lt.texture=mt)}function L(){const V=ot[q];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function P(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function W(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(V){St.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),St.copy(V))}function Vt(V){Mt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Mt.copy(V))}function Ft(V,mt){let yt=h.get(mt);yt===void 0&&(yt=new WeakMap,h.set(mt,yt));let Lt=yt.get(V);Lt===void 0&&(Lt=i.getUniformBlockIndex(mt,V.name),yt.set(V,Lt))}function Tt(V,mt){const Lt=h.get(mt).get(V);l.get(mt)!==Lt&&(i.uniformBlockBinding(mt,Lt,V.__bindingPointIndex),l.set(mt,Lt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},q=null,ot={},p={},g=new WeakMap,m=[],y=null,E=!1,v=null,_=null,b=null,d=null,c=null,M=null,u=null,C=new $t(0,0,0),A=0,S=!1,x=null,T=null,w=null,R=null,N=null,St.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:at,bindFramebuffer:ct,drawBuffers:lt,useProgram:wt,setBlending:tt,setMaterial:K,setFlipSided:$,setCullFace:Y,setLineWidth:gt,setPolygonOffset:nt,setScissorTest:rt,activeTexture:Ct,bindTexture:Rt,unbindTexture:L,compressedTexImage2D:P,compressedTexImage3D:H,texImage2D:Dt,texImage3D:ft,updateUBOMapping:Ft,uniformBlockBinding:Tt,texStorage2D:_t,texStorage3D:It,texSubImage2D:W,texSubImage3D:et,compressedTexSubImage2D:X,compressedTexSubImage3D:vt,scissor:At,viewport:Vt,reset:qt}}function yx(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ut,f=new WeakMap;let p;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,P){return m?new OffscreenCanvas(L,P):Oo("canvas")}function E(L,P,H){let W=1;const et=Rt(L);if((et.width>H||et.height>H)&&(W=H/Math.max(et.width,et.height)),W<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const X=Math.floor(W*et.width),vt=Math.floor(W*et.height);p===void 0&&(p=y(X,vt));const _t=P?y(X,vt):p;return _t.width=X,_t.height=vt,_t.getContext("2d").drawImage(L,0,0,X,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+X+"x"+vt+")."),_t}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),L;return L}function v(L){return L.generateMipmaps}function _(L){i.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function d(L,P,H,W,et=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let X=P;if(P===i.RED&&(H===i.FLOAT&&(X=i.R32F),H===i.HALF_FLOAT&&(X=i.R16F),H===i.UNSIGNED_BYTE&&(X=i.R8)),P===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(X=i.R8UI),H===i.UNSIGNED_SHORT&&(X=i.R16UI),H===i.UNSIGNED_INT&&(X=i.R32UI),H===i.BYTE&&(X=i.R8I),H===i.SHORT&&(X=i.R16I),H===i.INT&&(X=i.R32I)),P===i.RG&&(H===i.FLOAT&&(X=i.RG32F),H===i.HALF_FLOAT&&(X=i.RG16F),H===i.UNSIGNED_BYTE&&(X=i.RG8)),P===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(X=i.RG8UI),H===i.UNSIGNED_SHORT&&(X=i.RG16UI),H===i.UNSIGNED_INT&&(X=i.RG32UI),H===i.BYTE&&(X=i.RG8I),H===i.SHORT&&(X=i.RG16I),H===i.INT&&(X=i.RG32I)),P===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(X=i.RGB8UI),H===i.UNSIGNED_SHORT&&(X=i.RGB16UI),H===i.UNSIGNED_INT&&(X=i.RGB32UI),H===i.BYTE&&(X=i.RGB8I),H===i.SHORT&&(X=i.RGB16I),H===i.INT&&(X=i.RGB32I)),P===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),H===i.UNSIGNED_INT&&(X=i.RGBA32UI),H===i.BYTE&&(X=i.RGBA8I),H===i.SHORT&&(X=i.RGBA16I),H===i.INT&&(X=i.RGBA32I)),P===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),P===i.RGBA){const vt=et?No:jt.getTransfer(W);H===i.FLOAT&&(X=i.RGBA32F),H===i.HALF_FLOAT&&(X=i.RGBA16F),H===i.UNSIGNED_BYTE&&(X=vt===ne?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function c(L,P){let H;return L?P===null||P===Oi||P===fs?H=i.DEPTH24_STENCIL8:P===Xn?H=i.DEPTH32F_STENCIL8:P===hs&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Oi||P===fs?H=i.DEPTH_COMPONENT24:P===Xn?H=i.DEPTH_COMPONENT32F:P===hs&&(H=i.DEPTH_COMPONENT16),H}function M(L,P){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==xn&&L.minFilter!==An?Math.log2(Math.max(P.width,P.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?P.mipmaps.length:1}function u(L){const P=L.target;P.removeEventListener("dispose",u),A(P),P.isVideoTexture&&f.delete(P)}function C(L){const P=L.target;P.removeEventListener("dispose",C),x(P)}function A(L){const P=n.get(L);if(P.__webglInit===void 0)return;const H=L.source,W=g.get(H);if(W){const et=W[P.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(L),Object.keys(W).length===0&&g.delete(H)}n.remove(L)}function S(L){const P=n.get(L);i.deleteTexture(P.__webglTexture);const H=L.source,W=g.get(H);delete W[P.__cacheKey],o.memory.textures--}function x(L){const P=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(P.__webglFramebuffer[W]))for(let et=0;et<P.__webglFramebuffer[W].length;et++)i.deleteFramebuffer(P.__webglFramebuffer[W][et]);else i.deleteFramebuffer(P.__webglFramebuffer[W]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[W])}else{if(Array.isArray(P.__webglFramebuffer))for(let W=0;W<P.__webglFramebuffer.length;W++)i.deleteFramebuffer(P.__webglFramebuffer[W]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let W=0;W<P.__webglColorRenderbuffer.length;W++)P.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[W]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const H=L.textures;for(let W=0,et=H.length;W<et;W++){const X=n.get(H[W]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(H[W])}n.remove(L)}let T=0;function w(){T=0}function R(){const L=T;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),T+=1,L}function N(L){const P=[];return P.push(L.wrapS),P.push(L.wrapT),P.push(L.wrapR||0),P.push(L.magFilter),P.push(L.minFilter),P.push(L.anisotropy),P.push(L.internalFormat),P.push(L.format),P.push(L.type),P.push(L.generateMipmaps),P.push(L.premultiplyAlpha),P.push(L.flipY),P.push(L.unpackAlignment),P.push(L.colorSpace),P.join()}function F(L,P){const H=n.get(L);if(L.isVideoTexture&&rt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&H.__version!==L.version){const W=L.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,L,P);return}}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+P)}function O(L,P){const H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){Z(H,L,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+P)}function z(L,P){const H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){Z(H,L,P);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+P)}function B(L,P){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Q(H,L,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+P)}const q={[Tc]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[bc]:i.MIRRORED_REPEAT},ot={[xn]:i.NEAREST,[jd]:i.NEAREST_MIPMAP_NEAREST,[As]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[ra]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},it={[np]:i.NEVER,[cp]:i.ALWAYS,[ip]:i.LESS,[mf]:i.LEQUAL,[rp]:i.EQUAL,[ap]:i.GEQUAL,[sp]:i.GREATER,[op]:i.NOTEQUAL};function ht(L,P){if(P.type===Xn&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===An||P.magFilter===ra||P.magFilter===As||P.magFilter===Ui||P.minFilter===An||P.minFilter===ra||P.minFilter===As||P.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,q[P.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,q[P.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,q[P.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ot[P.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ot[P.minFilter]),P.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,it[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===xn||P.minFilter!==As&&P.minFilter!==Ui||P.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function St(L,P){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,P.addEventListener("dispose",u));const W=P.source;let et=g.get(W);et===void 0&&(et={},g.set(W,et));const X=N(P);if(X!==L.__cacheKey){et[X]===void 0&&(et[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),et[X].usedTimes++;const vt=et[L.__cacheKey];vt!==void 0&&(et[L.__cacheKey].usedTimes--,vt.usedTimes===0&&S(P)),L.__cacheKey=X,L.__webglTexture=et[X].texture}return H}function Mt(L,P,H){return Math.floor(Math.floor(L/H)/P)}function xt(L,P,H,W){const X=L.updateRanges;if(X.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,H,W,P.data);else{X.sort((ft,At)=>ft.start-At.start);let vt=0;for(let ft=1;ft<X.length;ft++){const At=X[vt],Vt=X[ft],Ft=At.start+At.count,Tt=Mt(Vt.start,P.width,4),qt=Mt(At.start,P.width,4);Vt.start<=Ft+1&&Tt===qt&&Mt(Vt.start+Vt.count-1,P.width,4)===Tt?At.count=Math.max(At.count,Vt.start+Vt.count-At.start):(++vt,X[vt]=Vt)}X.length=vt+1;const _t=i.getParameter(i.UNPACK_ROW_LENGTH),It=i.getParameter(i.UNPACK_SKIP_PIXELS),Dt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let ft=0,At=X.length;ft<At;ft++){const Vt=X[ft],Ft=Math.floor(Vt.start/4),Tt=Math.ceil(Vt.count/4),qt=Ft%P.width,V=Math.floor(Ft/P.width),mt=Tt,yt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,qt,V,mt,yt,H,W,P.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_t),i.pixelStorei(i.UNPACK_SKIP_PIXELS,It),i.pixelStorei(i.UNPACK_SKIP_ROWS,Dt)}}function Z(L,P,H){let W=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(W=i.TEXTURE_3D);const et=St(L,P),X=P.source;e.bindTexture(W,L.__webglTexture,i.TEXTURE0+H);const vt=n.get(X);if(X.version!==vt.__version||et===!0){e.activeTexture(i.TEXTURE0+H);const _t=jt.getPrimaries(jt.workingColorSpace),It=P.colorSpace===ai?null:jt.getPrimaries(P.colorSpace),Dt=P.colorSpace===ai||_t===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ft=E(P.image,!1,r.maxTextureSize);ft=Ct(P,ft);const At=s.convert(P.format,P.colorSpace),Vt=s.convert(P.type);let Ft=d(P.internalFormat,At,Vt,P.colorSpace,P.isVideoTexture);ht(W,P);let Tt;const qt=P.mipmaps,V=P.isVideoTexture!==!0,mt=vt.__version===void 0||et===!0,yt=X.dataReady,Lt=M(P,ft);if(P.isDepthTexture)Ft=c(P.format===ps,P.type),mt&&(V?e.texStorage2D(i.TEXTURE_2D,1,Ft,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ft.width,ft.height,0,At,Vt,null));else if(P.isDataTexture)if(qt.length>0){V&&mt&&e.texStorage2D(i.TEXTURE_2D,Lt,Ft,qt[0].width,qt[0].height);for(let dt=0,st=qt.length;dt<st;dt++)Tt=qt[dt],V?yt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Tt.width,Tt.height,At,Vt,Tt.data):e.texImage2D(i.TEXTURE_2D,dt,Ft,Tt.width,Tt.height,0,At,Vt,Tt.data);P.generateMipmaps=!1}else V?(mt&&e.texStorage2D(i.TEXTURE_2D,Lt,Ft,ft.width,ft.height),yt&&xt(P,ft,At,Vt)):e.texImage2D(i.TEXTURE_2D,0,Ft,ft.width,ft.height,0,At,Vt,ft.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){V&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Ft,qt[0].width,qt[0].height,ft.depth);for(let dt=0,st=qt.length;dt<st;dt++)if(Tt=qt[dt],P.format!==vn)if(At!==null)if(V){if(yt)if(P.layerUpdates.size>0){const Nt=Cu(Tt.width,Tt.height,P.format,P.type);for(const Wt of P.layerUpdates){const oe=Tt.data.subarray(Wt*Nt/Tt.data.BYTES_PER_ELEMENT,(Wt+1)*Nt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,Wt,Tt.width,Tt.height,1,At,oe)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Tt.width,Tt.height,ft.depth,At,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Ft,Tt.width,Tt.height,ft.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?yt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Tt.width,Tt.height,ft.depth,At,Vt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Ft,Tt.width,Tt.height,ft.depth,0,At,Vt,Tt.data)}else{V&&mt&&e.texStorage2D(i.TEXTURE_2D,Lt,Ft,qt[0].width,qt[0].height);for(let dt=0,st=qt.length;dt<st;dt++)Tt=qt[dt],P.format!==vn?At!==null?V?yt&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Tt.width,Tt.height,At,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Ft,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?yt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Tt.width,Tt.height,At,Vt,Tt.data):e.texImage2D(i.TEXTURE_2D,dt,Ft,Tt.width,Tt.height,0,At,Vt,Tt.data)}else if(P.isDataArrayTexture)if(V){if(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Ft,ft.width,ft.height,ft.depth),yt)if(P.layerUpdates.size>0){const dt=Cu(ft.width,ft.height,P.format,P.type);for(const st of P.layerUpdates){const Nt=ft.data.subarray(st*dt/ft.data.BYTES_PER_ELEMENT,(st+1)*dt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ft.width,ft.height,1,At,Vt,Nt)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,At,Vt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ft.width,ft.height,ft.depth,0,At,Vt,ft.data);else if(P.isData3DTexture)V?(mt&&e.texStorage3D(i.TEXTURE_3D,Lt,Ft,ft.width,ft.height,ft.depth),yt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,At,Vt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ft.width,ft.height,ft.depth,0,At,Vt,ft.data);else if(P.isFramebufferTexture){if(mt)if(V)e.texStorage2D(i.TEXTURE_2D,Lt,Ft,ft.width,ft.height);else{let dt=ft.width,st=ft.height;for(let Nt=0;Nt<Lt;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,Ft,dt,st,0,At,Vt,null),dt>>=1,st>>=1}}else if(qt.length>0){if(V&&mt){const dt=Rt(qt[0]);e.texStorage2D(i.TEXTURE_2D,Lt,Ft,dt.width,dt.height)}for(let dt=0,st=qt.length;dt<st;dt++)Tt=qt[dt],V?yt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,At,Vt,Tt):e.texImage2D(i.TEXTURE_2D,dt,Ft,At,Vt,Tt);P.generateMipmaps=!1}else if(V){if(mt){const dt=Rt(ft);e.texStorage2D(i.TEXTURE_2D,Lt,Ft,dt.width,dt.height)}yt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Vt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Ft,At,Vt,ft);v(P)&&_(W),vt.__version=X.version,P.onUpdate&&P.onUpdate(P)}L.__version=P.version}function Q(L,P,H){if(P.image.length!==6)return;const W=St(L,P),et=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+H);const X=n.get(et);if(et.version!==X.__version||W===!0){e.activeTexture(i.TEXTURE0+H);const vt=jt.getPrimaries(jt.workingColorSpace),_t=P.colorSpace===ai?null:jt.getPrimaries(P.colorSpace),It=P.colorSpace===ai||vt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Dt=P.isCompressedTexture||P.image[0].isCompressedTexture,ft=P.image[0]&&P.image[0].isDataTexture,At=[];for(let st=0;st<6;st++)!Dt&&!ft?At[st]=E(P.image[st],!0,r.maxCubemapSize):At[st]=ft?P.image[st].image:P.image[st],At[st]=Ct(P,At[st]);const Vt=At[0],Ft=s.convert(P.format,P.colorSpace),Tt=s.convert(P.type),qt=d(P.internalFormat,Ft,Tt,P.colorSpace),V=P.isVideoTexture!==!0,mt=X.__version===void 0||W===!0,yt=et.dataReady;let Lt=M(P,Vt);ht(i.TEXTURE_CUBE_MAP,P);let dt;if(Dt){V&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,qt,Vt.width,Vt.height);for(let st=0;st<6;st++){dt=At[st].mipmaps;for(let Nt=0;Nt<dt.length;Nt++){const Wt=dt[Nt];P.format!==vn?Ft!==null?V?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,0,0,Wt.width,Wt.height,Ft,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,qt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,0,0,Wt.width,Wt.height,Ft,Tt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,qt,Wt.width,Wt.height,0,Ft,Tt,Wt.data)}}}else{if(dt=P.mipmaps,V&&mt){dt.length>0&&Lt++;const st=Rt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,qt,st.width,st.height)}for(let st=0;st<6;st++)if(ft){V?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,At[st].width,At[st].height,Ft,Tt,At[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,qt,At[st].width,At[st].height,0,Ft,Tt,At[st].data);for(let Nt=0;Nt<dt.length;Nt++){const oe=dt[Nt].image[st].image;V?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,0,0,oe.width,oe.height,Ft,Tt,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,qt,oe.width,oe.height,0,Ft,Tt,oe.data)}}else{V?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ft,Tt,At[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,qt,Ft,Tt,At[st]);for(let Nt=0;Nt<dt.length;Nt++){const Wt=dt[Nt];V?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,0,0,Ft,Tt,Wt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,qt,Ft,Tt,Wt.image[st])}}}v(P)&&_(i.TEXTURE_CUBE_MAP),X.__version=et.version,P.onUpdate&&P.onUpdate(P)}L.__version=P.version}function at(L,P,H,W,et,X){const vt=s.convert(H.format,H.colorSpace),_t=s.convert(H.type),It=d(H.internalFormat,vt,_t,H.colorSpace),Dt=n.get(P),ft=n.get(H);if(ft.__renderTarget=P,!Dt.__hasExternalTextures){const At=Math.max(1,P.width>>X),Vt=Math.max(1,P.height>>X);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,X,It,At,Vt,P.depth,0,vt,_t,null):e.texImage2D(et,X,It,At,Vt,0,vt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),nt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,et,ft.__webglTexture,0,gt(P)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,et,ft.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(L,P,H){if(i.bindRenderbuffer(i.RENDERBUFFER,L),P.depthBuffer){const W=P.depthTexture,et=W&&W.isDepthTexture?W.type:null,X=c(P.stencilBuffer,et),vt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=gt(P);nt(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,X,P.width,P.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,X,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,X,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,L)}else{const W=P.textures;for(let et=0;et<W.length;et++){const X=W[et],vt=s.convert(X.format,X.colorSpace),_t=s.convert(X.type),It=d(X.internalFormat,vt,_t,X.colorSpace),Dt=gt(P);H&&nt(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,It,P.width,P.height):nt(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,It,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,It,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(L,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(P.depthTexture);W.__renderTarget=P,(!W.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),F(P.depthTexture,0);const et=W.__webglTexture,X=gt(P);if(P.depthTexture.format===ds)nt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(P.depthTexture.format===ps)nt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function wt(L){const P=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==L.depthTexture){const W=L.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),W){const et=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,W.removeEventListener("dispose",et)};W.addEventListener("dispose",et),P.__depthDisposeCallback=et}P.__boundDepthTexture=W}if(L.depthTexture&&!P.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const W=L.texture.mipmaps;W&&W.length>0?lt(P.__webglFramebuffer[0],L):lt(P.__webglFramebuffer,L)}else if(H){P.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[W]),P.__webglDepthbuffer[W]===void 0)P.__webglDepthbuffer[W]=i.createRenderbuffer(),ct(P.__webglDepthbuffer[W],L,!1);else{const et=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=P.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,X)}}else{const W=L.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),ct(P.__webglDepthbuffer,L,!1);else{const et=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(L,P,H){const W=n.get(L);P!==void 0&&at(W.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&wt(L)}function U(L){const P=L.texture,H=n.get(L),W=n.get(P);L.addEventListener("dispose",C);const et=L.textures,X=L.isWebGLCubeRenderTarget===!0,vt=et.length>1;if(vt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=P.version,o.memory.textures++),X){H.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(P.mipmaps&&P.mipmaps.length>0){H.__webglFramebuffer[_t]=[];for(let It=0;It<P.mipmaps.length;It++)H.__webglFramebuffer[_t][It]=i.createFramebuffer()}else H.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){H.__webglFramebuffer=[];for(let _t=0;_t<P.mipmaps.length;_t++)H.__webglFramebuffer[_t]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(vt)for(let _t=0,It=et.length;_t<It;_t++){const Dt=n.get(et[_t]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&nt(L)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _t=0;_t<et.length;_t++){const It=et[_t];H.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[_t]);const Dt=s.convert(It.format,It.colorSpace),ft=s.convert(It.type),At=d(It.internalFormat,Dt,ft,It.colorSpace,L.isXRRenderTarget===!0),Vt=gt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,At,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,H.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(H.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ht(i.TEXTURE_CUBE_MAP,P);for(let _t=0;_t<6;_t++)if(P.mipmaps&&P.mipmaps.length>0)for(let It=0;It<P.mipmaps.length;It++)at(H.__webglFramebuffer[_t][It],L,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It);else at(H.__webglFramebuffer[_t],L,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);v(P)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let _t=0,It=et.length;_t<It;_t++){const Dt=et[_t],ft=n.get(Dt);let At=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,ft.__webglTexture),ht(At,Dt),at(H.__webglFramebuffer,L,Dt,i.COLOR_ATTACHMENT0+_t,At,0),v(Dt)&&_(At)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_t=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,W.__webglTexture),ht(_t,P),P.mipmaps&&P.mipmaps.length>0)for(let It=0;It<P.mipmaps.length;It++)at(H.__webglFramebuffer[It],L,P,i.COLOR_ATTACHMENT0,_t,It);else at(H.__webglFramebuffer,L,P,i.COLOR_ATTACHMENT0,_t,0);v(P)&&_(_t),e.unbindTexture()}L.depthBuffer&&wt(L)}function tt(L){const P=L.textures;for(let H=0,W=P.length;H<W;H++){const et=P[H];if(v(et)){const X=b(L),vt=n.get(et).__webglTexture;e.bindTexture(X,vt),_(X),e.unbindTexture()}}}const K=[],$=[];function Y(L){if(L.samples>0){if(nt(L)===!1){const P=L.textures,H=L.width,W=L.height;let et=i.COLOR_BUFFER_BIT;const X=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(L),_t=P.length>1;if(_t)for(let Dt=0;Dt<P.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);const It=L.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Dt=0;Dt<P.length;Dt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Dt]);const ft=n.get(P[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,H,W,0,0,H,W,et,i.NEAREST),l===!0&&(K.length=0,$.length=0,K.push(i.COLOR_ATTACHMENT0+Dt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(K.push(X),$.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Dt=0;Dt<P.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Dt]);const ft=n.get(P[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const P=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function gt(L){return Math.min(r.maxSamples,L.samples)}function nt(L){const P=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function rt(L){const P=o.render.frame;f.get(L)!==P&&(f.set(L,P),L.update())}function Ct(L,P){const H=L.colorSpace,W=L.format,et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==Nr&&H!==ai&&(jt.getTransfer(H)===ne?(W!==vn||et!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),P}function Rt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=R,this.resetTextureUnits=w,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=z,this.setTextureCube=B,this.rebindTextures=Gt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=nt}function Sx(i,t){function e(n,r=ai){let s;const o=jt.getTransfer(r);if(n===Pn)return i.UNSIGNED_BYTE;if(n===pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===af)return i.BYTE;if(n===cf)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Ms)return i.HALF_FLOAT;if(n===hf)return i.ALPHA;if(n===ff)return i.RGB;if(n===vn)return i.RGBA;if(n===ds)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===df)return i.RED;if(n===ml)return i.RED_INTEGER;if(n===pf)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===vl)return i.RGBA_INTEGER;if(n===Ao||n===wo||n===Ro||n===Co)if(o===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ac||n===wc||n===Rc||n===Cc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pc||n===Dc||n===Lc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pc||n===Dc)return o===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Lc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ic||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===zc||n===Vc||n===Hc||n===kc||n===Gc||n===Wc||n===Xc||n===qc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ic)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yc||n===$c||n===Zc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Yc)return o===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$c)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===Jc||n===jc||n===Qc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Kc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ex=`
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

}`;class Tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Cf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new di({vertexShader:Mx,fragmentShader:Ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Je(new Yo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bx extends ki{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,h=null,f=null,p=null,g=null,m=null,y=null;const E=typeof XRWebGLBinding<"u",v=new Tx,_={},b=e.getContextAttributes();let d=null,c=null;const M=[],u=[],C=new ut;let A=null;const S=new on;S.viewport=new se;const x=new on;x.viewport=new se;const T=[S,x],w=new kg;let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=M[Z];return Q===void 0&&(Q=new ba,M[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=M[Z];return Q===void 0&&(Q=new ba,M[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=M[Z];return Q===void 0&&(Q=new ba,M[Z]=Q),Q.getHandSpace()};function F(Z){const Q=u.indexOf(Z.inputSource);if(Q===-1)return;const at=M[Q];at!==void 0&&(at.update(Z.inputSource,Z.frame,h||o),at.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",z);for(let Z=0;Z<M.length;Z++){const Q=u[Z];Q!==null&&(u[Z]=null,M[Z].disconnect(Q))}R=null,N=null,v.reset();for(const Z in _)delete _[Z];t.setRenderTarget(d),m=null,g=null,p=null,r=null,c=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return g!==null?g:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",O),r.addEventListener("inputsourceschange",z),b.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,ct=null,lt=null;b.depth&&(lt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=b.stencil?ps:ds,ct=b.stencil?fs:Oi);const wt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};p=this.getBinding(),g=p.createProjectionLayer(wt),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),c=new zi(g.textureWidth,g.textureHeight,{format:vn,type:Pn,depthTexture:new Rf(g.textureWidth,g.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const at={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,at),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),c=new zi(m.framebufferWidth,m.framebufferHeight,{format:vn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}c.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await r.requestReferenceSpace(a),xt.setContext(r),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(Z){for(let Q=0;Q<Z.removed.length;Q++){const at=Z.removed[Q],ct=u.indexOf(at);ct>=0&&(u[ct]=null,M[ct].disconnect(at))}for(let Q=0;Q<Z.added.length;Q++){const at=Z.added[Q];let ct=u.indexOf(at);if(ct===-1){for(let wt=0;wt<M.length;wt++)if(wt>=u.length){u.push(at),ct=wt;break}else if(u[wt]===null){u[wt]=at,ct=wt;break}if(ct===-1)break}const lt=M[ct];lt&&lt.connect(at)}}const B=new I,q=new I;function ot(Z,Q,at){B.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(at.matrixWorld);const ct=B.distanceTo(q),lt=Q.projectionMatrix.elements,wt=at.projectionMatrix.elements,Gt=lt[14]/(lt[10]-1),U=lt[14]/(lt[10]+1),tt=(lt[9]+1)/lt[5],K=(lt[9]-1)/lt[5],$=(lt[8]-1)/lt[0],Y=(wt[8]+1)/wt[0],gt=Gt*$,nt=Gt*Y,rt=ct/(-$+Y),Ct=rt*-$;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ct),Z.translateZ(rt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),lt[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Rt=Gt+rt,L=U+rt,P=gt-Ct,H=nt+(ct-Ct),W=tt*U/L*Rt,et=K*U/L*Rt;Z.projectionMatrix.makePerspective(P,H,W,et,Rt,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function it(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let Q=Z.near,at=Z.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(at=v.depthFar)),w.near=x.near=S.near=Q,w.far=x.far=S.far=at,(R!==w.near||N!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,N=w.far),w.layers.mask=Z.layers.mask|6,S.layers.mask=w.layers.mask&3,x.layers.mask=w.layers.mask&5;const ct=Z.parent,lt=w.cameras;it(w,ct);for(let wt=0;wt<lt.length;wt++)it(lt[wt],ct);lt.length===2?ot(w,S,x):w.projectionMatrix.copy(S.projectionMatrix),ht(Z,w,ct)};function ht(Z,Q,at){at===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(at.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=gs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(g===null&&m===null))return l},this.setFoveation=function(Z){l=Z,g!==null&&(g.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)},this.getCameraTexture=function(Z){return _[Z]};let St=null;function Mt(Z,Q){if(f=Q.getViewerPose(h||o),y=Q,f!==null){const at=f.views;m!==null&&(t.setRenderTargetFramebuffer(c,m.framebuffer),t.setRenderTarget(c));let ct=!1;at.length!==w.cameras.length&&(w.cameras.length=0,ct=!0);for(let U=0;U<at.length;U++){const tt=at[U];let K=null;if(m!==null)K=m.getViewport(tt);else{const Y=p.getViewSubImage(g,tt);K=Y.viewport,U===0&&(t.setRenderTargetTextures(c,Y.colorTexture,Y.depthStencilTexture),t.setRenderTarget(c))}let $=T[U];$===void 0&&($=new on,$.layers.enable(U),$.viewport=new se,T[U]=$),$.matrix.fromArray(tt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(tt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(K.x,K.y,K.width,K.height),U===0&&(w.matrix.copy($.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ct===!0&&w.cameras.push($)}const lt=r.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=n.getBinding();const U=p.getDepthInformation(at[0]);U&&U.isValid&&U.texture&&v.init(U,r.renderState)}if(lt&&lt.includes("camera-access")&&E){t.state.unbindTexture(),p=n.getBinding();for(let U=0;U<at.length;U++){const tt=at[U].camera;if(tt){let K=_[tt];K||(K=new Cf,_[tt]=K);const $=p.getCameraImage(tt);K.sourceTexture=$}}}}for(let at=0;at<M.length;at++){const ct=u[at],lt=M[at];ct!==null&&lt!==void 0&&lt.update(ct,Q,h||o)}St&&St(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),y=null}const xt=new kf;xt.setAnimationLoop(Mt),this.setAnimationLoop=function(Z){St=Z},this.dispose=function(){}}}const Mi=new Dn,Ax=new Kt;function wx(i,t){function e(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function n(v,_){_.color.getRGB(v.fogColor.value,Tf(i)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function r(v,_,b,d,c){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(v,_):_.isMeshToonMaterial?(s(v,_),p(v,_)):_.isMeshPhongMaterial?(s(v,_),f(v,_)):_.isMeshStandardMaterial?(s(v,_),g(v,_),_.isMeshPhysicalMaterial&&m(v,_,c)):_.isMeshMatcapMaterial?(s(v,_),y(v,_)):_.isMeshDepthMaterial?s(v,_):_.isMeshDistanceMaterial?(s(v,_),E(v,_)):_.isMeshNormalMaterial?s(v,_):_.isLineBasicMaterial?(o(v,_),_.isLineDashedMaterial&&a(v,_)):_.isPointsMaterial?l(v,_,b,d):_.isSpriteMaterial?h(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,e(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Fe&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,e(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Fe&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,e(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,e(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const b=t.get(_),d=b.envMap,c=b.envMapRotation;d&&(v.envMap.value=d,Mi.copy(c),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,d.isCubeTexture&&d.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),v.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(Mi)),v.flipEnvMap.value=d.isCubeTexture&&d.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,v.aoMapTransform))}function o(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform))}function a(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function l(v,_,b,d){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*b,v.scale.value=d*.5,_.map&&(v.map.value=_.map,e(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function h(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function f(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function p(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function m(v,_,b){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fe&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,_){_.matcap&&(v.matcap.value=_.matcap)}function E(v,_){const b=t.get(_).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Rx(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,d){const c=d.program;n.uniformBlockBinding(b,c)}function h(b,d){let c=r[b.id];c===void 0&&(y(b),c=f(b),r[b.id]=c,b.addEventListener("dispose",v));const M=d.program;n.updateUBOMapping(b,M);const u=t.render.frame;s[b.id]!==u&&(g(b),s[b.id]=u)}function f(b){const d=p();b.__bindingPointIndex=d;const c=i.createBuffer(),M=b.__size,u=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,c),i.bufferData(i.UNIFORM_BUFFER,M,u),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,d,c),c}function p(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const d=r[b.id],c=b.uniforms,M=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,d);for(let u=0,C=c.length;u<C;u++){const A=Array.isArray(c[u])?c[u]:[c[u]];for(let S=0,x=A.length;S<x;S++){const T=A[S];if(m(T,u,S,M)===!0){const w=T.__offset,R=Array.isArray(T.value)?T.value:[T.value];let N=0;for(let F=0;F<R.length;F++){const O=R[F],z=E(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,w+N,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):(O.toArray(T.__data,N),N+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,w,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,d,c,M){const u=b.value,C=d+"_"+c;if(M[C]===void 0)return typeof u=="number"||typeof u=="boolean"?M[C]=u:M[C]=u.clone(),!0;{const A=M[C];if(typeof u=="number"||typeof u=="boolean"){if(A!==u)return M[C]=u,!0}else if(A.equals(u)===!1)return A.copy(u),!0}return!1}function y(b){const d=b.uniforms;let c=0;const M=16;for(let C=0,A=d.length;C<A;C++){const S=Array.isArray(d[C])?d[C]:[d[C]];for(let x=0,T=S.length;x<T;x++){const w=S[x],R=Array.isArray(w.value)?w.value:[w.value];for(let N=0,F=R.length;N<F;N++){const O=R[N],z=E(O),B=c%M,q=B%z.boundary,ot=B+q;c+=q,ot!==0&&M-ot<z.storage&&(c+=M-ot),w.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=c,c+=z.storage}}}const u=c%M;return u>0&&(c+=M-u),b.__size=c,b.__cache={},this}function E(b){const d={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(d.boundary=4,d.storage=4):b.isVector2?(d.boundary=8,d.storage=8):b.isVector3||b.isColor?(d.boundary=16,d.storage=12):b.isVector4?(d.boundary=16,d.storage=16):b.isMatrix3?(d.boundary=48,d.storage=48):b.isMatrix4?(d.boundary=64,d.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),d}function v(b){const d=b.target;d.removeEventListener("dispose",v);const c=o.indexOf(d.__bindingPointIndex);o.splice(c,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}function _(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:h,dispose:_}}class Cx{constructor(t={}){const{canvas:e=bp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const y=new Uint32Array(4),E=new Int32Array(4);let v=null,_=null;const b=[],d=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const c=this;let M=!1;this._outputColorSpace=sn;let u=0,C=0,A=null,S=-1,x=null;const T=new se,w=new se;let R=null;const N=new $t(0);let F=0,O=e.width,z=e.height,B=1,q=null,ot=null;const it=new se(0,0,O,z),ht=new se(0,0,O,z);let St=!1;const Mt=new Ml;let xt=!1,Z=!1;const Q=new Kt,at=new I,ct=new se,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Gt(){return A===null?B:1}let U=n;function tt(D,k){return e.getContext(D,k)}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ss}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),U===null){const k="webgl2";if(U=tt(k,D),U===null)throw tt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let K,$,Y,gt,nt,rt,Ct,Rt,L,P,H,W,et,X,vt,_t,It,Dt,ft,At,Vt,Ft,Tt,qt;function V(){K=new zv(U),K.init(),Ft=new Sx(U,K),$=new Lv(U,K,t,Ft),Y=new xx(U,K),$.reversedDepthBuffer&&g&&Y.buffers.depth.setReversed(!0),gt=new kv(U),nt=new ox,rt=new yx(U,K,Y,nt,$,Ft,gt),Ct=new Uv(c),Rt=new Bv(c),L=new $g(U),Tt=new Pv(U,L),P=new Vv(U,L,gt,Tt),H=new Wv(U,P,L,gt),ft=new Gv(U,$,rt),_t=new Iv(nt),W=new sx(c,Ct,Rt,K,$,Tt,_t),et=new wx(c,nt),X=new cx,vt=new px(K),Dt=new Cv(c,Ct,Rt,Y,H,m,l),It=new _x(c,H,$),qt=new Rx(U,gt,$,Y),At=new Dv(U,K,gt),Vt=new Hv(U,K,gt),gt.programs=W.programs,c.capabilities=$,c.extensions=K,c.properties=nt,c.renderLists=X,c.shadowMap=It,c.state=Y,c.info=gt}V();const mt=new bx(c,U);this.xr=mt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const D=K.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=K.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(D){D!==void 0&&(B=D,this.setSize(O,z,!1))},this.getSize=function(D){return D.set(O,z)},this.setSize=function(D,k,J=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=D,z=k,e.width=Math.floor(D*B),e.height=Math.floor(k*B),J===!0&&(e.style.width=D+"px",e.style.height=k+"px"),this.setViewport(0,0,D,k)},this.getDrawingBufferSize=function(D){return D.set(O*B,z*B).floor()},this.setDrawingBufferSize=function(D,k,J){O=D,z=k,B=J,e.width=Math.floor(D*J),e.height=Math.floor(k*J),this.setViewport(0,0,D,k)},this.getCurrentViewport=function(D){return D.copy(T)},this.getViewport=function(D){return D.copy(it)},this.setViewport=function(D,k,J,j){D.isVector4?it.set(D.x,D.y,D.z,D.w):it.set(D,k,J,j),Y.viewport(T.copy(it).multiplyScalar(B).round())},this.getScissor=function(D){return D.copy(ht)},this.setScissor=function(D,k,J,j){D.isVector4?ht.set(D.x,D.y,D.z,D.w):ht.set(D,k,J,j),Y.scissor(w.copy(ht).multiplyScalar(B).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(D){Y.setScissorTest(St=D)},this.setOpaqueSort=function(D){q=D},this.setTransparentSort=function(D){ot=D},this.getClearColor=function(D){return D.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(D=!0,k=!0,J=!0){let j=0;if(D){let G=!1;if(A!==null){const pt=A.texture.format;G=pt===vl||pt===_l||pt===ml}if(G){const pt=A.texture.type,bt=pt===Pn||pt===Oi||pt===hs||pt===fs||pt===pl||pt===gl,Ut=Dt.getClearColor(),Pt=Dt.getClearAlpha(),zt=Ut.r,Ht=Ut.g,Ot=Ut.b;bt?(y[0]=zt,y[1]=Ht,y[2]=Ot,y[3]=Pt,U.clearBufferuiv(U.COLOR,0,y)):(E[0]=zt,E[1]=Ht,E[2]=Ot,E[3]=Pt,U.clearBufferiv(U.COLOR,0,E))}else j|=U.COLOR_BUFFER_BIT}k&&(j|=U.DEPTH_BUFFER_BIT),J&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Dt.dispose(),X.dispose(),vt.dispose(),nt.dispose(),Ct.dispose(),Rt.dispose(),H.dispose(),Tt.dispose(),qt.dispose(),W.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Sn),mt.removeEventListener("sessionend",Vl),gi.stop()};function yt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const D=gt.autoReset,k=It.enabled,J=It.autoUpdate,j=It.needsUpdate,G=It.type;V(),gt.autoReset=D,It.enabled=k,It.autoUpdate=J,It.needsUpdate=j,It.type=G}function dt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function st(D){const k=D.target;k.removeEventListener("dispose",st),Nt(k)}function Nt(D){Wt(D),nt.remove(D)}function Wt(D){const k=nt.get(D).programs;k!==void 0&&(k.forEach(function(J){W.releaseProgram(J)}),D.isShaderMaterial&&W.releaseShaderCache(D))}this.renderBufferDirect=function(D,k,J,j,G,pt){k===null&&(k=lt);const bt=G.isMesh&&G.matrixWorld.determinant()<0,Ut=_d(D,k,J,j,G);Y.setMaterial(j,bt);let Pt=J.index,zt=1;if(j.wireframe===!0){if(Pt=P.getWireframeAttribute(J),Pt===void 0)return;zt=2}const Ht=J.drawRange,Ot=J.attributes.position;let Zt=Ht.start*zt,ee=(Ht.start+Ht.count)*zt;pt!==null&&(Zt=Math.max(Zt,pt.start*zt),ee=Math.min(ee,(pt.start+pt.count)*zt)),Pt!==null?(Zt=Math.max(Zt,0),ee=Math.min(ee,Pt.count)):Ot!=null&&(Zt=Math.max(Zt,0),ee=Math.min(ee,Ot.count));const de=ee-Zt;if(de<0||de===1/0)return;Tt.setup(G,j,Ut,J,Pt);let ae,re=At;if(Pt!==null&&(ae=L.get(Pt),re=Vt,re.setIndex(ae)),G.isMesh)j.wireframe===!0?(Y.setLineWidth(j.wireframeLinewidth*Gt()),re.setMode(U.LINES)):re.setMode(U.TRIANGLES);else if(G.isLine){let Bt=j.linewidth;Bt===void 0&&(Bt=1),Y.setLineWidth(Bt*Gt()),G.isLineSegments?re.setMode(U.LINES):G.isLineLoop?re.setMode(U.LINE_LOOP):re.setMode(U.LINE_STRIP)}else G.isPoints?re.setMode(U.POINTS):G.isSprite&&re.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))re.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Bt=G._multiDrawStarts,ue=G._multiDrawCounts,Jt=G._multiDrawCount,qe=Pt?L.get(Pt).bytesPerElement:1,Xi=nt.get(j).currentProgram.getUniforms();for(let Ye=0;Ye<Jt;Ye++)Xi.setValue(U,"_gl_DrawID",Ye),re.render(Bt[Ye]/qe,ue[Ye])}else if(G.isInstancedMesh)re.renderInstances(Zt,de,G.count);else if(J.isInstancedBufferGeometry){const Bt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ue=Math.min(J.instanceCount,Bt);re.renderInstances(Zt,de,ue)}else re.render(Zt,de)};function oe(D,k,J){D.transparent===!0&&D.side===_n&&D.forceSinglePass===!1?(D.side=Fe,D.needsUpdate=!0,bs(D,k,J),D.side=Cn,D.needsUpdate=!0,bs(D,k,J),D.side=_n):bs(D,k,J)}this.compile=function(D,k,J=null){J===null&&(J=D),_=vt.get(J),_.init(k),d.push(_),J.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),D!==J&&D.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights();const j=new Set;return D.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pt=G.material;if(pt)if(Array.isArray(pt))for(let bt=0;bt<pt.length;bt++){const Ut=pt[bt];oe(Ut,J,G),j.add(Ut)}else oe(pt,J,G),j.add(pt)}),_=d.pop(),j},this.compileAsync=function(D,k,J=null){const j=this.compile(D,k,J);return new Promise(G=>{function pt(){if(j.forEach(function(bt){nt.get(bt).currentProgram.isReady()&&j.delete(bt)}),j.size===0){G(D);return}setTimeout(pt,10)}K.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Qt=null;function Un(D){Qt&&Qt(D)}function Sn(){gi.stop()}function Vl(){gi.start()}const gi=new kf;gi.setAnimationLoop(Un),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(D){Qt=D,mt.setAnimationLoop(D),D===null?gi.stop():gi.start()},mt.addEventListener("sessionstart",Sn),mt.addEventListener("sessionend",Vl),this.render=function(D,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(k),k=mt.getCamera()),D.isScene===!0&&D.onBeforeRender(c,D,k,A),_=vt.get(D,d.length),_.init(k),d.push(_),Q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Mt.setFromProjectionMatrix(Q,wn,k.reversedDepth),Z=this.localClippingEnabled,xt=_t.init(this.clippingPlanes,Z),v=X.get(D,b.length),v.init(),b.push(v),mt.enabled===!0&&mt.isPresenting===!0){const pt=c.xr.getDepthSensingMesh();pt!==null&&na(pt,k,-1/0,c.sortObjects)}na(D,k,0,c.sortObjects),v.finish(),c.sortObjects===!0&&v.sort(q,ot),wt=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,wt&&Dt.addToRenderList(v,D),this.info.render.frame++,xt===!0&&_t.beginShadows();const J=_.state.shadowsArray;It.render(J,D,k),xt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=v.opaque,G=v.transmissive;if(_.setupLights(),k.isArrayCamera){const pt=k.cameras;if(G.length>0)for(let bt=0,Ut=pt.length;bt<Ut;bt++){const Pt=pt[bt];kl(j,G,D,Pt)}wt&&Dt.render(D);for(let bt=0,Ut=pt.length;bt<Ut;bt++){const Pt=pt[bt];Hl(v,D,Pt,Pt.viewport)}}else G.length>0&&kl(j,G,D,k),wt&&Dt.render(D),Hl(v,D,k);A!==null&&C===0&&(rt.updateMultisampleRenderTarget(A),rt.updateRenderTargetMipmap(A)),D.isScene===!0&&D.onAfterRender(c,D,k),Tt.resetDefaultState(),S=-1,x=null,d.pop(),d.length>0?(_=d[d.length-1],xt===!0&&_t.setGlobalState(c.clippingPlanes,_.state.camera)):_=null,b.pop(),b.length>0?v=b[b.length-1]:v=null};function na(D,k,J,j){if(D.visible===!1)return;if(D.layers.test(k.layers)){if(D.isGroup)J=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(k);else if(D.isLight)_.pushLight(D),D.castShadow&&_.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Mt.intersectsSprite(D)){j&&ct.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Q);const bt=H.update(D),Ut=D.material;Ut.visible&&v.push(D,bt,Ut,J,ct.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Mt.intersectsObject(D))){const bt=H.update(D),Ut=D.material;if(j&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ct.copy(D.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),ct.copy(bt.boundingSphere.center)),ct.applyMatrix4(D.matrixWorld).applyMatrix4(Q)),Array.isArray(Ut)){const Pt=bt.groups;for(let zt=0,Ht=Pt.length;zt<Ht;zt++){const Ot=Pt[zt],Zt=Ut[Ot.materialIndex];Zt&&Zt.visible&&v.push(D,bt,Zt,J,ct.z,Ot)}}else Ut.visible&&v.push(D,bt,Ut,J,ct.z,null)}}const pt=D.children;for(let bt=0,Ut=pt.length;bt<Ut;bt++)na(pt[bt],k,J,j)}function Hl(D,k,J,j){const G=D.opaque,pt=D.transmissive,bt=D.transparent;_.setupLightsView(J),xt===!0&&_t.setGlobalState(c.clippingPlanes,J),j&&Y.viewport(T.copy(j)),G.length>0&&Ts(G,k,J),pt.length>0&&Ts(pt,k,J),bt.length>0&&Ts(bt,k,J),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function kl(D,k,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[j.id]===void 0&&(_.state.transmissionRenderTarget[j.id]=new zi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Ms:Pn,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const pt=_.state.transmissionRenderTarget[j.id],bt=j.viewport||T;pt.setSize(bt.z*c.transmissionResolutionScale,bt.w*c.transmissionResolutionScale);const Ut=c.getRenderTarget(),Pt=c.getActiveCubeFace(),zt=c.getActiveMipmapLevel();c.setRenderTarget(pt),c.getClearColor(N),F=c.getClearAlpha(),F<1&&c.setClearColor(16777215,.5),c.clear(),wt&&Dt.render(J);const Ht=c.toneMapping;c.toneMapping=hi;const Ot=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),_.setupLightsView(j),xt===!0&&_t.setGlobalState(c.clippingPlanes,j),Ts(D,J,j),rt.updateMultisampleRenderTarget(pt),rt.updateRenderTargetMipmap(pt),K.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let ee=0,de=k.length;ee<de;ee++){const ae=k[ee],re=ae.object,Bt=ae.geometry,ue=ae.material,Jt=ae.group;if(ue.side===_n&&re.layers.test(j.layers)){const qe=ue.side;ue.side=Fe,ue.needsUpdate=!0,Gl(re,J,j,Bt,ue,Jt),ue.side=qe,ue.needsUpdate=!0,Zt=!0}}Zt===!0&&(rt.updateMultisampleRenderTarget(pt),rt.updateRenderTargetMipmap(pt))}c.setRenderTarget(Ut,Pt,zt),c.setClearColor(N,F),Ot!==void 0&&(j.viewport=Ot),c.toneMapping=Ht}function Ts(D,k,J){const j=k.isScene===!0?k.overrideMaterial:null;for(let G=0,pt=D.length;G<pt;G++){const bt=D[G],Ut=bt.object,Pt=bt.geometry,zt=bt.group;let Ht=bt.material;Ht.allowOverride===!0&&j!==null&&(Ht=j),Ut.layers.test(J.layers)&&Gl(Ut,k,J,Pt,Ht,zt)}}function Gl(D,k,J,j,G,pt){D.onBeforeRender(c,k,J,j,G,pt),D.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),G.onBeforeRender(c,k,J,j,D,pt),G.transparent===!0&&G.side===_n&&G.forceSinglePass===!1?(G.side=Fe,G.needsUpdate=!0,c.renderBufferDirect(J,k,j,G,D,pt),G.side=Cn,G.needsUpdate=!0,c.renderBufferDirect(J,k,j,G,D,pt),G.side=_n):c.renderBufferDirect(J,k,j,G,D,pt),D.onAfterRender(c,k,J,j,G,pt)}function bs(D,k,J){k.isScene!==!0&&(k=lt);const j=nt.get(D),G=_.state.lights,pt=_.state.shadowsArray,bt=G.state.version,Ut=W.getParameters(D,G.state,pt,k,J),Pt=W.getProgramCacheKey(Ut);let zt=j.programs;j.environment=D.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(D.isMeshStandardMaterial?Rt:Ct).get(D.envMap||j.environment),j.envMapRotation=j.environment!==null&&D.envMap===null?k.environmentRotation:D.envMapRotation,zt===void 0&&(D.addEventListener("dispose",st),zt=new Map,j.programs=zt);let Ht=zt.get(Pt);if(Ht!==void 0){if(j.currentProgram===Ht&&j.lightsStateVersion===bt)return Xl(D,Ut),Ht}else Ut.uniforms=W.getUniforms(D),D.onBeforeCompile(Ut,c),Ht=W.acquireProgram(Ut,Pt),zt.set(Pt,Ht),j.uniforms=Ut.uniforms;const Ot=j.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ot.clippingPlanes=_t.uniform),Xl(D,Ut),j.needsLights=xd(D),j.lightsStateVersion=bt,j.needsLights&&(Ot.ambientLightColor.value=G.state.ambient,Ot.lightProbe.value=G.state.probe,Ot.directionalLights.value=G.state.directional,Ot.directionalLightShadows.value=G.state.directionalShadow,Ot.spotLights.value=G.state.spot,Ot.spotLightShadows.value=G.state.spotShadow,Ot.rectAreaLights.value=G.state.rectArea,Ot.ltc_1.value=G.state.rectAreaLTC1,Ot.ltc_2.value=G.state.rectAreaLTC2,Ot.pointLights.value=G.state.point,Ot.pointLightShadows.value=G.state.pointShadow,Ot.hemisphereLights.value=G.state.hemi,Ot.directionalShadowMap.value=G.state.directionalShadowMap,Ot.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ot.spotShadowMap.value=G.state.spotShadowMap,Ot.spotLightMatrix.value=G.state.spotLightMatrix,Ot.spotLightMap.value=G.state.spotLightMap,Ot.pointShadowMap.value=G.state.pointShadowMap,Ot.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=Ht,j.uniformsList=null,Ht}function Wl(D){if(D.uniformsList===null){const k=D.currentProgram.getUniforms();D.uniformsList=Po.seqWithValue(k.seq,D.uniforms)}return D.uniformsList}function Xl(D,k){const J=nt.get(D);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function _d(D,k,J,j,G){k.isScene!==!0&&(k=lt),rt.resetTextureUnits();const pt=k.fog,bt=j.isMeshStandardMaterial?k.environment:null,Ut=A===null?c.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Nr,Pt=(j.isMeshStandardMaterial?Rt:Ct).get(j.envMap||bt),zt=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ht=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ot=!!J.morphAttributes.position,Zt=!!J.morphAttributes.normal,ee=!!J.morphAttributes.color;let de=hi;j.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(de=c.toneMapping);const ae=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,re=ae!==void 0?ae.length:0,Bt=nt.get(j),ue=_.state.lights;if(xt===!0&&(Z===!0||D!==x)){const Ie=D===x&&j.id===S;_t.setState(j,D,Ie)}let Jt=!1;j.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ue.state.version||Bt.outputColorSpace!==Ut||G.isBatchedMesh&&Bt.batching===!1||!G.isBatchedMesh&&Bt.batching===!0||G.isBatchedMesh&&Bt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Bt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Bt.instancing===!1||!G.isInstancedMesh&&Bt.instancing===!0||G.isSkinnedMesh&&Bt.skinning===!1||!G.isSkinnedMesh&&Bt.skinning===!0||G.isInstancedMesh&&Bt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Bt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Bt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Bt.instancingMorph===!1&&G.morphTexture!==null||Bt.envMap!==Pt||j.fog===!0&&Bt.fog!==pt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==_t.numPlanes||Bt.numIntersection!==_t.numIntersection)||Bt.vertexAlphas!==zt||Bt.vertexTangents!==Ht||Bt.morphTargets!==Ot||Bt.morphNormals!==Zt||Bt.morphColors!==ee||Bt.toneMapping!==de||Bt.morphTargetsCount!==re)&&(Jt=!0):(Jt=!0,Bt.__version=j.version);let qe=Bt.currentProgram;Jt===!0&&(qe=bs(j,k,G));let Xi=!1,Ye=!1,Hr=!1;const he=qe.getUniforms(),tn=Bt.uniforms;if(Y.useProgram(qe.program)&&(Xi=!0,Ye=!0,Hr=!0),j.id!==S&&(S=j.id,Ye=!0),Xi||x!==D){Y.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),he.setValue(U,"projectionMatrix",D.projectionMatrix),he.setValue(U,"viewMatrix",D.matrixWorldInverse);const ze=he.map.cameraPosition;ze!==void 0&&ze.setValue(U,at.setFromMatrixPosition(D.matrixWorld)),$.logarithmicDepthBuffer&&he.setValue(U,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&he.setValue(U,"isOrthographic",D.isOrthographicCamera===!0),x!==D&&(x=D,Ye=!0,Hr=!0)}if(G.isSkinnedMesh){he.setOptional(U,G,"bindMatrix"),he.setOptional(U,G,"bindMatrixInverse");const Ie=G.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),he.setValue(U,"boneTexture",Ie.boneTexture,rt))}G.isBatchedMesh&&(he.setOptional(U,G,"batchingTexture"),he.setValue(U,"batchingTexture",G._matricesTexture,rt),he.setOptional(U,G,"batchingIdTexture"),he.setValue(U,"batchingIdTexture",G._indirectTexture,rt),he.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&he.setValue(U,"batchingColorTexture",G._colorsTexture,rt));const en=J.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&ft.update(G,J,qe),(Ye||Bt.receiveShadow!==G.receiveShadow)&&(Bt.receiveShadow=G.receiveShadow,he.setValue(U,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(tn.envMap.value=Pt,tn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(tn.envMapIntensity.value=k.environmentIntensity),Ye&&(he.setValue(U,"toneMappingExposure",c.toneMappingExposure),Bt.needsLights&&vd(tn,Hr),pt&&j.fog===!0&&et.refreshFogUniforms(tn,pt),et.refreshMaterialUniforms(tn,j,B,z,_.state.transmissionRenderTarget[D.id]),Po.upload(U,Wl(Bt),tn,rt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Po.upload(U,Wl(Bt),tn,rt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&he.setValue(U,"center",G.center),he.setValue(U,"modelViewMatrix",G.modelViewMatrix),he.setValue(U,"normalMatrix",G.normalMatrix),he.setValue(U,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ie=j.uniformsGroups;for(let ze=0,ia=Ie.length;ze<ia;ze++){const mi=Ie[ze];qt.update(mi,qe),qt.bind(mi,qe)}}return qe}function vd(D,k){D.ambientLightColor.needsUpdate=k,D.lightProbe.needsUpdate=k,D.directionalLights.needsUpdate=k,D.directionalLightShadows.needsUpdate=k,D.pointLights.needsUpdate=k,D.pointLightShadows.needsUpdate=k,D.spotLights.needsUpdate=k,D.spotLightShadows.needsUpdate=k,D.rectAreaLights.needsUpdate=k,D.hemisphereLights.needsUpdate=k}function xd(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(D,k,J){const j=nt.get(D);j.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),nt.get(D.texture).__webglTexture=k,nt.get(D.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:J,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,k){const J=nt.get(D);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0};const yd=U.createFramebuffer();this.setRenderTarget=function(D,k=0,J=0){A=D,u=k,C=J;let j=!0,G=null,pt=!1,bt=!1;if(D){const Pt=nt.get(D);if(Pt.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(Pt.__webglFramebuffer===void 0)rt.setupRenderTarget(D);else if(Pt.__hasExternalTextures)rt.rebindTextures(D,nt.get(D.texture).__webglTexture,nt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ot=D.depthTexture;if(Pt.__boundDepthTexture!==Ot){if(Ot!==null&&nt.has(Ot)&&(D.width!==Ot.image.width||D.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(D)}}const zt=D.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(bt=!0);const Ht=nt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ht[k])?G=Ht[k][J]:G=Ht[k],pt=!0):D.samples>0&&rt.useMultisampledRTT(D)===!1?G=nt.get(D).__webglMultisampledFramebuffer:Array.isArray(Ht)?G=Ht[J]:G=Ht,T.copy(D.viewport),w.copy(D.scissor),R=D.scissorTest}else T.copy(it).multiplyScalar(B).floor(),w.copy(ht).multiplyScalar(B).floor(),R=St;if(J!==0&&(G=yd),Y.bindFramebuffer(U.FRAMEBUFFER,G)&&j&&Y.drawBuffers(D,G),Y.viewport(T),Y.scissor(w),Y.setScissorTest(R),pt){const Pt=nt.get(D.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pt.__webglTexture,J)}else if(bt){const Pt=k;for(let zt=0;zt<D.textures.length;zt++){const Ht=nt.get(D.textures[zt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+zt,Ht.__webglTexture,J,Pt)}}else if(D!==null&&J!==0){const Pt=nt.get(D.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,J)}S=-1},this.readRenderTargetPixels=function(D,k,J,j,G,pt,bt,Ut=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=nt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt){Y.bindFramebuffer(U.FRAMEBUFFER,Pt);try{const zt=D.textures[Ut],Ht=zt.format,Ot=zt.type;if(!$.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=D.width-j&&J>=0&&J<=D.height-G&&(D.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ut),U.readPixels(k,J,j,G,Ft.convert(Ht),Ft.convert(Ot),pt))}finally{const zt=A!==null?nt.get(A).__webglFramebuffer:null;Y.bindFramebuffer(U.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(D,k,J,j,G,pt,bt,Ut=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=nt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt)if(k>=0&&k<=D.width-j&&J>=0&&J<=D.height-G){Y.bindFramebuffer(U.FRAMEBUFFER,Pt);const zt=D.textures[Ut],Ht=zt.format,Ot=zt.type;if(!$.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Zt),U.bufferData(U.PIXEL_PACK_BUFFER,pt.byteLength,U.STREAM_READ),D.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ut),U.readPixels(k,J,j,G,Ft.convert(Ht),Ft.convert(Ot),0);const ee=A!==null?nt.get(A).__webglFramebuffer:null;Y.bindFramebuffer(U.FRAMEBUFFER,ee);const de=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ap(U,de,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Zt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pt),U.deleteBuffer(Zt),U.deleteSync(de),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,k=null,J=0){const j=Math.pow(2,-J),G=Math.floor(D.image.width*j),pt=Math.floor(D.image.height*j),bt=k!==null?k.x:0,Ut=k!==null?k.y:0;rt.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,bt,Ut,G,pt),Y.unbindTexture()};const Sd=U.createFramebuffer(),Md=U.createFramebuffer();this.copyTextureToTexture=function(D,k,J=null,j=null,G=0,pt=null){pt===null&&(G!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=G,G=0):pt=0);let bt,Ut,Pt,zt,Ht,Ot,Zt,ee,de;const ae=D.isCompressedTexture?D.mipmaps[pt]:D.image;if(J!==null)bt=J.max.x-J.min.x,Ut=J.max.y-J.min.y,Pt=J.isBox3?J.max.z-J.min.z:1,zt=J.min.x,Ht=J.min.y,Ot=J.isBox3?J.min.z:0;else{const en=Math.pow(2,-G);bt=Math.floor(ae.width*en),Ut=Math.floor(ae.height*en),D.isDataArrayTexture?Pt=ae.depth:D.isData3DTexture?Pt=Math.floor(ae.depth*en):Pt=1,zt=0,Ht=0,Ot=0}j!==null?(Zt=j.x,ee=j.y,de=j.z):(Zt=0,ee=0,de=0);const re=Ft.convert(k.format),Bt=Ft.convert(k.type);let ue;k.isData3DTexture?(rt.setTexture3D(k,0),ue=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(rt.setTexture2DArray(k,0),ue=U.TEXTURE_2D_ARRAY):(rt.setTexture2D(k,0),ue=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const Jt=U.getParameter(U.UNPACK_ROW_LENGTH),qe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Xi=U.getParameter(U.UNPACK_SKIP_PIXELS),Ye=U.getParameter(U.UNPACK_SKIP_ROWS),Hr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ae.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,zt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ht),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ot);const he=D.isDataArrayTexture||D.isData3DTexture,tn=k.isDataArrayTexture||k.isData3DTexture;if(D.isDepthTexture){const en=nt.get(D),Ie=nt.get(k),ze=nt.get(en.__renderTarget),ia=nt.get(Ie.__renderTarget);Y.bindFramebuffer(U.READ_FRAMEBUFFER,ze.__webglFramebuffer),Y.bindFramebuffer(U.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let mi=0;mi<Pt;mi++)he&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,nt.get(D).__webglTexture,G,Ot+mi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,nt.get(k).__webglTexture,pt,de+mi)),U.blitFramebuffer(zt,Ht,bt,Ut,Zt,ee,bt,Ut,U.DEPTH_BUFFER_BIT,U.NEAREST);Y.bindFramebuffer(U.READ_FRAMEBUFFER,null),Y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||D.isRenderTargetTexture||nt.has(D)){const en=nt.get(D),Ie=nt.get(k);Y.bindFramebuffer(U.READ_FRAMEBUFFER,Sd),Y.bindFramebuffer(U.DRAW_FRAMEBUFFER,Md);for(let ze=0;ze<Pt;ze++)he?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,en.__webglTexture,G,Ot+ze):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,en.__webglTexture,G),tn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.__webglTexture,pt,de+ze):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ie.__webglTexture,pt),G!==0?U.blitFramebuffer(zt,Ht,bt,Ut,Zt,ee,bt,Ut,U.COLOR_BUFFER_BIT,U.NEAREST):tn?U.copyTexSubImage3D(ue,pt,Zt,ee,de+ze,zt,Ht,bt,Ut):U.copyTexSubImage2D(ue,pt,Zt,ee,zt,Ht,bt,Ut);Y.bindFramebuffer(U.READ_FRAMEBUFFER,null),Y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else tn?D.isDataTexture||D.isData3DTexture?U.texSubImage3D(ue,pt,Zt,ee,de,bt,Ut,Pt,re,Bt,ae.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(ue,pt,Zt,ee,de,bt,Ut,Pt,re,ae.data):U.texSubImage3D(ue,pt,Zt,ee,de,bt,Ut,Pt,re,Bt,ae):D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pt,Zt,ee,bt,Ut,re,Bt,ae.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pt,Zt,ee,ae.width,ae.height,re,ae.data):U.texSubImage2D(U.TEXTURE_2D,pt,Zt,ee,bt,Ut,re,Bt,ae);U.pixelStorei(U.UNPACK_ROW_LENGTH,Jt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,qe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ye),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Hr),pt===0&&k.generateMipmaps&&U.generateMipmap(ue),Y.unbindTexture()},this.initRenderTarget=function(D){nt.get(D).__webglFramebuffer===void 0&&rt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?rt.setTextureCube(D,0):D.isData3DTexture?rt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?rt.setTexture2DArray(D,0):rt.setTexture2D(D,0),Y.unbindTexture()},this.resetState=function(){u=0,C=0,A=null,Y.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const th={type:"change"},Rl={type:"start"},Yf={type:"end"},to=new Br,eh=new an,Px=Math.cos(70*_f.DEG2RAD),ye=new I,Ve=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},za=1e-6;class Dx extends qg{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rr.ROTATE,MIDDLE:Rr.DOLLY,RIGHT:Rr.PAN},this.touches={ONE:Er.ROTATE,TWO:Er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Bi,this._lastTargetPosition=new I,this._quat=new Bi().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wu,this._sphericalDelta=new wu,this._scale=1,this._panOffset=new I,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new I,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ix.bind(this),this._onPointerDown=Lx.bind(this),this._onPointerUp=Ux.bind(this),this._onContextMenu=Hx.bind(this),this._onMouseWheel=Ox.bind(this),this._onKeyDown=Bx.bind(this),this._onTouchStart=zx.bind(this),this._onTouchMove=Vx.bind(this),this._onMouseDown=Nx.bind(this),this._onMouseMove=Fx.bind(this),this._interceptControlDown=kx.bind(this),this._interceptControlUp=Gx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(th),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ve:n>Math.PI&&(n-=Ve),r<-Math.PI?r+=Ve:r>Math.PI&&(r-=Ve),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ye.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const h=new I(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(to.origin.copy(this.object.position),to.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(to.direction))<Px?this.object.lookAt(this.target):(eh.setFromNormalAndCoplanarPoint(this.object.up,this.target),to.intersectPlane(eh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>za||8*(1-this._lastQuaternion.dot(this.object.quaternion))>za||this._lastTargetPosition.distanceToSquared(this.target)>za?(this.dispatchEvent(th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ye.copy(r).sub(this.target);let s=ye.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Lx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Ix(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ux(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yf),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Nx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Rr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case Rr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case Rr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Rl)}function Fx(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ox(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(Rl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Yf))}function Bx(i){this.enabled!==!1&&this._handleKeyDown(i)}function zx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Er.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case Er.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case Er.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case Er.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Rl)}function Vx(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function Hx(i){this.enabled!==!1&&i.preventDefault()}function kx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Wx{parse(t,e={}){e=Object.assign({binary:!1},e);const n=e.binary,r=[];let s=0;t.traverse(function(_){if(_.isMesh){const b=_.geometry,d=b.index,c=b.getAttribute("position");s+=d!==null?d.count/3:c.count/3,r.push({object3d:_,geometry:b})}});let o,a=80;if(n===!0){const _=s*2+s*3*4*4+80+4,b=new ArrayBuffer(_);o=new DataView(b),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const l=new I,h=new I,f=new I,p=new I,g=new I,m=new I;for(let _=0,b=r.length;_<b;_++){const d=r[_].object3d,c=r[_].geometry,M=c.index,u=c.getAttribute("position");if(M!==null)for(let C=0;C<M.count;C+=3){const A=M.getX(C+0),S=M.getX(C+1),x=M.getX(C+2);y(A,S,x,u,d)}else for(let C=0;C<u.count;C+=3){const A=C+0,S=C+1,x=C+2;y(A,S,x,u,d)}}return n===!1&&(o+=`endsolid exported
`),o;function y(_,b,d,c,M){l.fromBufferAttribute(c,_),h.fromBufferAttribute(c,b),f.fromBufferAttribute(c,d),M.isSkinnedMesh===!0&&(M.applyBoneTransform(_,l),M.applyBoneTransform(b,h),M.applyBoneTransform(d,f)),l.applyMatrix4(M.matrixWorld),h.applyMatrix4(M.matrixWorld),f.applyMatrix4(M.matrixWorld),E(l,h,f),v(l),v(h),v(f),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function E(_,b,d){p.subVectors(d,b),g.subVectors(_,b),p.cross(g).normalize(),m.copy(p).normalize(),n===!0?(o.setFloat32(a,m.x,!0),a+=4,o.setFloat32(a,m.y,!0),a+=4,o.setFloat32(a,m.z,!0),a+=4):(o+="	facet normal "+m.x+" "+m.y+" "+m.z+`
`,o+=`		outer loop
`)}function v(_){n===!0?(o.setFloat32(a,_.x,!0),a+=4,o.setFloat32(a,_.y,!0),a+=4,o.setFloat32(a,_.z,!0),a+=4):o+="			vertex "+_.x+" "+_.y+" "+_.z+`
`}}}const $f=0,Xx=1,qx=2,nh=2,Va=1.25,ih=1,je=32,ve=je/4,Zf=65535,Do=Math.pow(2,-24),Cl=Symbol("SKIP_GENERATION"),Kf={strategy:$f,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Cl]:!1};function pe(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function rl(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function rh(i,t,e){for(let n=0;n<3;n++){const r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Ha(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function me(i,t){return t[i+15]===Zf}function Ae(i,t){return t[i+6]}function De(i,t){return t[i+14]}function Se(i){return i+ve}function Me(i,t){const e=t[i+6];return i+e*ve}function Pl(i,t){return t[i+7]}function ka(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,h=-1/0,f=-1/0,p=1/0,g=1/0,m=1/0,y=-1/0,E=-1/0,v=-1/0;const _=i.offset||0;for(let b=(t-_)*6,d=(t+e-_)*6;b<d;b+=6){const c=i[b+0],M=i[b+1],u=c-M,C=c+M;u<s&&(s=u),C>l&&(l=C),c<p&&(p=c),c>y&&(y=c);const A=i[b+2],S=i[b+3],x=A-S,T=A+S;x<o&&(o=x),T>h&&(h=T),A<g&&(g=A),A>E&&(E=A);const w=i[b+4],R=i[b+5],N=w-R,F=w+R;N<a&&(a=N),F>f&&(f=F),w<m&&(m=w),w>v&&(v=w)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=h,n[5]=f,r[0]=p,r[1]=g,r[2]=m,r[3]=y,r[4]=E,r[5]=v}const En=8,Dl=8,Ga=new Int32Array(En),Mn=new Float32Array(En*6),cr=new Float32Array(En*6),dn=new Float32Array(6),eo=new Float32Array(6),ni=new Int32Array(Dl),sh=new Float32Array(Dl*6);function Yx(i,t,e,n){for(let r=0;r<3;r++){const s=t[i+2*r],o=t[i+2*r+1],a=s-o,l=s+o;a<e[n+r]&&(e[n+r]=a),l>e[n+r+3]&&(e[n+r+3]=l)}}function oh(i,t){const e=i[t+3]-i[t],n=i[t+4]-i[t+1],r=i[t+5]-i[t+2];return 2*(e*n+n*r+r*e)}function $x(i,t,e,n,r,s){let o=-1,a=0;if(s===$f)o=rl(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===Xx)o=rl(i),o!==-1&&(a=Zx(e,n,r,o));else if(s===qx){const l=Ha(i);let h=Va*r;const f=e.offset||0,p=(n-f)*6,g=(n+r-f)*6;for(let m=0;m<3;m++){const y=t[m],_=(t[m+3]-y)/En;if(r<Dl){for(let b=0;b<r;b++){const d=p+b*6,c=e[d+2*m];let M=b;for(;M>0&&e[ni[M-1]+2*m]>c;)ni[M]=ni[M-1],M--;ni[M]=d}for(let b=0;b<3;b++)dn[b]=1/0,dn[b+3]=-1/0,eo[b]=1/0,eo[b+3]=-1/0;for(let b=r-1;b>=0;b--)rh(ni[b],e,eo),sh.set(eo,b*6);for(let b=0;b<r-1;b++){rh(ni[b],e,dn);const d=e[ni[b+1]+2*m];if(e[ni[b]+2*m]===d)continue;const c=b+1,M=r-c,u=Ha(dn)/l,C=oh(sh,c*6)/l,A=ih+Va*(u*c+C*M);A<h&&(o=m,h=A,a=d)}}else{for(let c=0;c<En;c++){Ga[c]=0;for(let M=0;M<3;M++)Mn[c*6+M]=1/0,Mn[c*6+M+3]=-1/0}for(let c=p;c<g;c+=6){let C=~~((e[c+2*m]-y)/_);C>=En&&(C=En-1),Ga[C]++,Yx(c,e,Mn,C*6)}const b=(En-1)*6;for(let c=0;c<6;c++)cr[b+c]=Mn[b+c];for(let c=En-2;c>=0;c--){const M=c*6,u=M+6;for(let C=0;C<3;C++)cr[M+C]=Math.min(Mn[M+C],cr[u+C]),cr[M+C+3]=Math.max(Mn[M+C+3],cr[u+C+3])}let d=0;for(let c=0;c<En-1;c++){const M=c*6,u=Ga[c];if(u!==0)for(let T=0;T<3;T++)d===0?(dn[T]=Mn[M+T],dn[T+3]=Mn[M+T+3]):(dn[T]=Math.min(dn[T],Mn[M+T]),dn[T+3]=Math.max(dn[T+3],Mn[M+T+3]));d+=u;let C=0,A=0;d!==0&&(C=Ha(dn)/l);const S=r-d;S!==0&&(A=oh(cr,M+6)/l);const x=ih+Va*(C*d+A*S);x<h&&(o=m,h=x,a=y+_+c*_)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function Zx(i,t,e,n){let r=0;const s=i.offset;for(let o=t,a=t+e;o<a;o++)r+=i[(o-s)*6+n*2];return r/e}function Kx(i,t,e,n,r,s){let o=n,a=n+r-1;const l=s.pos,h=s.axis*2,f=e.offset||0;for(;;){for(;o<=a&&e[(o-f)*6+h]<l;)o++;for(;o<=a&&e[(a-f)*6+h]>=l;)a--;if(o<a){for(let p=0;p<t;p++){let g=i[o*t+p];i[o*t+p]=i[a*t+p],i[a*t+p]=g}for(let p=0;p<6;p++){const g=o-f,m=a-f,y=e[g*6+p];e[g*6+p]=e[m*6+p],e[m*6+p]=y}o++,a--}else return o}}const Jx=Math.pow(2,32),lr=new Float32Array(6),no=new Float32Array(6);function jx(i,t,e,n,r,s){const{maxDepth:o,verbose:a,targetLeafSize:l,_strictLeafSize:h=1/0,strategy:f,onProgress:p,useSharedArrayBuffer:g=!1}=r,m=i.primitiveBuffer,y=i.primitiveBufferStride,E=g?SharedArrayBuffer:ArrayBuffer,v=new E(je*Math.max(1,2*Math.ceil(n)-1)),_=new Float32Array(v),b=new Uint32Array(v),d=new Uint16Array(v);let c=0,M=!1;return ka(t,e,n,lr,no),A(e,n,0),v.slice(0,c*je);function u(S){p&&p((S-s.offset)/s.count)}function C(S,x,T){const w=S*2;b[S+6]=x,d[w+14]=T,d[w+15]=Zf,u(x+T)}function A(S,x,T){const w=c++,R=w*ve;_.set(lr,R),!M&&T>=o&&(M=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));const N=x>h;if(x<=l&&!N||T>=o){C(R,S,x);return}const F=$x(lr,no,t,S,x,f);let O=F.axis===-1?-1:Kx(m,y,t,S,x,F);if(F.axis===-1||O===S||O===S+x){if(!N){C(R,S,x);return}F.axis=Math.max(0,rl(lr)),O=S+Math.max(1,Math.floor(x/2))}b[R+7]=F.axis;const z=O-S;ka(t,S,z,lr,no),A(S,z,T+1);const B=c-w;if(B>Jx)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");b[R+6]=B;const q=x-z;ka(t,O,q,lr,no),A(O,q,T+1)}}function Qx(i,t){const e=i.getRootRanges(t.range),n=e[0],r=e[e.length-1],s={offset:n.offset,count:r.offset+r.count-n.offset},o=new Float32Array(6*s.count);o.offset=s.offset,i.computePrimitiveBounds(s.offset,s.count,o),i._roots=e.map(a=>jx(i,o,a.offset,a.count,t,s))}class Ll{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class ty{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const te=new ty;let li,Ar;const ur=[],io=new Ll(()=>new Oe);function ey(i,t,e,n,r,s){li=io.getPrimitive(),Ar=io.getPrimitive(),ur.push(li,Ar),te.setBuffer(i._roots[t]);const o=sl(0,i.geometry,e,n,r,s);te.clearBuffer(),io.releasePrimitive(li),io.releasePrimitive(Ar),ur.pop(),ur.pop();const a=ur.length;return a>0&&(Ar=ur[a-1],li=ur[a-2]),o}function sl(i,t,e,n,r=null,s=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:h}=te;let f=i*2;if(me(f,l)){const y=Ae(i,h),E=De(f,l);return pe(i,a,li),n(y,E,!1,o,s+i/ve,li)}else{let w=function(N){const{uint16Array:F,uint32Array:O}=te;let z=N*2;for(;!me(z,F);)N=Se(N),z=N*2;return Ae(N,O)},R=function(N){const{uint16Array:F,uint32Array:O}=te;let z=N*2;for(;!me(z,F);)N=Me(N,O),z=N*2;return Ae(N,O)+De(z,F)};var g=w,m=R;const y=Se(i),E=Me(i,h);let v=y,_=E,b,d,c,M;if(r&&(c=li,M=Ar,pe(v,a,c),pe(_,a,M),b=r(c),d=r(M),d<b)){v=E,_=y;const N=b;b=d,d=N,c=M}c||(c=li,pe(v,a,c));const u=me(v*2,l),C=e(c,u,b,o+1,s+v/ve);let A;if(C===nh){const N=w(v),O=R(v)-N;A=n(N,O,!0,o+1,s+v/ve,c)}else A=C&&sl(v,t,e,n,r,s,o+1);if(A)return!0;M=Ar,pe(_,a,M);const S=me(_*2,l),x=e(M,S,d,o+1,s+_/ve);let T;if(x===nh){const N=w(_),O=R(_)-N;T=n(N,O,!0,o+1,s+_/ve,M)}else T=x&&sl(_,t,e,n,r,s,o+1);return!!T}}const ls=new te.constructor,Vo=new te.constructor,si=new Ll(()=>new Oe),hr=new Oe,fr=new Oe,Wa=new Oe,Xa=new Oe;let qa=!1;function ny(i,t,e,n){if(qa)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");qa=!0;const r=i._roots,s=t._roots;let o,a=0,l=0;const h=new Kt().copy(e).invert();for(let f=0,p=r.length;f<p;f++){ls.setBuffer(r[f]),l=0;const g=si.getPrimitive();pe(0,ls.float32Array,g),g.applyMatrix4(h);for(let m=0,y=s.length;m<y&&(Vo.setBuffer(s[m]),o=mn(0,0,e,h,n,a,l,0,0,g),Vo.clearBuffer(),l+=s[m].byteLength/je,!o);m++);if(si.releasePrimitive(g),ls.clearBuffer(),a+=r[f].byteLength/je,o)break}return qa=!1,o}function mn(i,t,e,n,r,s=0,o=0,a=0,l=0,h=null,f=!1){let p,g;f?(p=Vo,g=ls):(p=ls,g=Vo);const m=p.float32Array,y=p.uint32Array,E=p.uint16Array,v=g.float32Array,_=g.uint32Array,b=g.uint16Array,d=i*2,c=t*2,M=me(d,E),u=me(c,b);let C=!1;if(u&&M)f?C=r(Ae(t,_),De(t*2,b),Ae(i,y),De(i*2,E),l,o+t/ve,a,s+i/ve):C=r(Ae(i,y),De(i*2,E),Ae(t,_),De(t*2,b),a,s+i/ve,l,o+t/ve);else if(u){const A=si.getPrimitive();pe(t,v,A),A.applyMatrix4(e);const S=Se(i),x=Me(i,y);pe(S,m,hr),pe(x,m,fr);const T=A.intersectsBox(hr),w=A.intersectsBox(fr);C=T&&mn(t,S,n,e,r,o,s,l,a+1,A,!f)||w&&mn(t,x,n,e,r,o,s,l,a+1,A,!f),si.releasePrimitive(A)}else{const A=Se(t),S=Me(t,_);pe(A,v,Wa),pe(S,v,Xa);const x=h.intersectsBox(Wa),T=h.intersectsBox(Xa);if(x&&T)C=mn(i,A,e,n,r,s,o,a,l+1,h,f)||mn(i,S,e,n,r,s,o,a,l+1,h,f);else if(x)if(M)C=mn(i,A,e,n,r,s,o,a,l+1,h,f);else{const w=si.getPrimitive();w.copy(Wa).applyMatrix4(e);const R=Se(i),N=Me(i,y);pe(R,m,hr),pe(N,m,fr);const F=w.intersectsBox(hr),O=w.intersectsBox(fr);C=F&&mn(A,R,n,e,r,o,s,l,a+1,w,!f)||O&&mn(A,N,n,e,r,o,s,l,a+1,w,!f),si.releasePrimitive(w)}else if(T)if(M)C=mn(i,S,e,n,r,s,o,a,l+1,h,f);else{const w=si.getPrimitive();w.copy(Xa).applyMatrix4(e);const R=Se(i),N=Me(i,y);pe(R,m,hr),pe(N,m,fr);const F=w.intersectsBox(hr),O=w.intersectsBox(fr);C=F&&mn(S,R,n,e,r,o,s,l,a+1,w,!f)||O&&mn(S,N,n,e,r,o,s,l,a+1,w,!f),si.releasePrimitive(w)}}return C}const Ya=new class{constructor(){let i=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=i=s._roots[o],this.uint16Array=e=new Uint16Array(i),this.uint32Array=t=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let o=s*2;for(;!me(o,e);)s=Se(s),o=s*2;return Ae(s,t)},this.getRangeEnd=s=>{let o=s*2;for(;!me(o,e);)s=Me(s,t),o=s*2;return Ae(s,t)+De(o,e)};const r=(s,o,a)=>{const l=o*2,h=me(l,e);if(!s(a,h,o)&&!h){const p=Se(o),g=Me(o,t);r(s,p,a+1),r(s,g,a+1)}};this.traverseBuffer=s=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{r(s,0,0)}finally{n=!1}},this.traverse=s=>{this.traverseBuffer((o,a,l)=>{if(a){const h=l*2,f=t[l+6],p=e[h+14];return s(o,a,new Float32Array(i,l*4,6),f,p)}else{const h=Pl(l,t);return s(o,a,new Float32Array(i,l*4,6),h)}})}}},ah=new Oe,dr=new Float32Array(6);class iy{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Kf,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),Qx(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,h=-1/0,f=-1/0;for(let p=t,g=t+e;p<g;p++){this.writePrimitiveBounds(p,dr,0);const[m,y,E,v,_,b]=dr;m<s&&(s=m),v>l&&(l=v),y<o&&(o=y),_>h&&(h=_),E<a&&(a=E),b>f&&(f=b)}return n[r+0]=s,n[r+1]=o,n[r+2]=a,n[r+3]=l,n[r+4]=h,n[r+5]=f,n}computePrimitiveBounds(t,e,n){const r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,dr,0);const[a,l,h,f,p,g]=dr,m=(a+f)/2,y=(l+p)/2,E=(h+g)/2,v=(f-a)/2,_=(p-l)/2,b=(g-h)/2,d=(s-r)*6;n[d+0]=m,n[d+1]=v+(Math.abs(m)+v)*Do,n[d+2]=y,n[d+3]=_+(Math.abs(y)+_)*Do,n[d+4]=E,n[d+5]=b+(Math.abs(E)+b)*Do}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{const n=this._roots;for(let r=0;r<n.length;r++){const s=n[r],o=new Uint32Array(s),a=new Uint16Array(s),l=s.byteLength/je;for(let h=0;h<l;h++){const f=ve*h,p=2*f;me(p,a)&&(o[f+6]+=t)}}}}traverse(t,e=0){Ya.setBVH(this,e),Ya.traverse(t),Ya.reset()}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),l=r.byteLength/je;for(let h=l-1;h>=0;h--){const f=h*ve,p=f*2;if(me(p,o)){const m=Ae(f,s),y=De(p,o);this.writePrimitiveRangeBounds(m,y,dr,0),a.set(dr,f)}else{const m=Se(f),y=Me(f,s);for(let E=0;E<3;E++){const v=a[m+E],_=a[m+E+3],b=a[y+E],d=a[y+E+3];a[f+E]=v<b?v:b,a[f+E+3]=_>d?_:d}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{pe(0,new Float32Array(n),ah),t.union(ah)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){const p=r;r=(g,m,y,E,v)=>p(g,m,y,E,v)?!0:a(g,m,this,s,y,E,o)}else r||(s?r=(p,g,m,y)=>a(p,g,this,s,m,y,o):r=(p,g,m)=>m);let l=!1,h=0;const f=this._roots;for(let p=0,g=f.length;p<g;p++){const m=f[p];if(l=ey(this,p,n,r,e,h),l)break;h+=m.byteLength/je}return l}bvhcast(t,e,n){let{intersectsRanges:r}=n;return ny(this,t,e,r)}}function ry(){return typeof SharedArrayBuffer<"u"}function Il(i){return i.index?i.index.count:i.attributes.position.count}function Zo(i){return Il(i)/3}function sy(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function oy(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=sy(e,n);i.setIndex(new We(r,1));for(let s=0;s<e;s++)r[s]=s}}function ay(i,t,e){const n=Il(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),l=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function cy(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function ch(i,t,e){const n=ay(i,t,e),r=cy(i,e);if(!r.length)return[n];const s=[],o=n.offset,a=n.offset+n.count,l=Il(i)/e,h=[];for(const g of r){const{offset:m,count:y}=g,E=m,v=isFinite(y)?y:l-m,_=m+v;E<a&&_>o&&(h.push({pos:Math.max(o,E),isStart:!0}),h.push({pos:Math.min(a,_),isStart:!1}))}h.sort((g,m)=>g.pos!==m.pos?g.pos-m.pos:g.type==="end"?-1:1);let f=0,p=null;for(const g of h){const m=g.pos;f!==0&&m!==p&&s.push({offset:p,count:m-p}),f+=g.isStart?1:-1,p=m}return s}function ly(i,t){const e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((h,f)=>h+f.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=n?new Uint32Array(o):new Uint16Array(o);let l=0;for(let h=0;h<i.length;h++){const{offset:f,count:p}=i[h];for(let g=0;g<p;g++)a[l+g]=f+g;l+=p}return a}class uy extends iy{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!ry())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Kf,...e},e[Cl]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const r=ch(e,t.range,n),s=ly(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else oy(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Oe))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:ch(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class $n{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){const l=t[s][e];n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const a=e[s],l=t.dot(a);n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}$n.prototype.setFromBox=(function(){const i=new I;return function(e,n){const r=n.min,s=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)for(let f=0;f<=1;f++){i.x=r.x*l+s.x*(1-l),i.y=r.y*h+s.y*(1-h),i.z=r.z*f+s.z*(1-f);const p=e.dot(i);o=Math.min(p,o),a=Math.max(p,a)}this.min=o,this.max=a}})();const hy=(function(){const i=new I,t=new I,e=new I;return function(r,s,o){const a=r.start,l=i,h=s.start,f=t;e.subVectors(a,h),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);const p=e.dot(f),g=f.dot(l),m=f.dot(f),y=e.dot(l),v=l.dot(l)*m-g*g;let _,b;v!==0?_=(p*g-y*m)/v:_=0,b=(p+_*g)/m,o.x=_,o.y=b}})(),Ul=(function(){const i=new ut,t=new I,e=new I;return function(r,s,o,a){hy(r,s,i);let l=i.x,h=i.y;if(l>=0&&l<=1&&h>=0&&h<=1){r.at(l,o),s.at(h,a);return}else if(l>=0&&l<=1){h<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(h>=0&&h<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let f;l<0?f=r.start:f=r.end;let p;h<0?p=s.start:p=s.end;const g=t,m=e;if(r.closestPointToPoint(p,!0,t),s.closestPointToPoint(f,!0,e),g.distanceToSquared(p)<=m.distanceToSquared(f)){o.copy(g),a.copy(p);return}else{o.copy(f),a.copy(m);return}}}})(),fy=(function(){const i=new I,t=new I,e=new an,n=new Re;return function(s,o){const{radius:a,center:l}=s,{a:h,b:f,c:p}=o;if(n.start=h,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=h,n.end=p,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=f,n.end=p,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;const E=o.getPlane(e);if(Math.abs(E.distanceToPoint(l))<=a){const _=E.projectPoint(l,t);if(o.containsPoint(_))return!0}return!1}})(),dy=["x","y","z"],Wn=1e-15,lh=Wn*Wn;function rn(i){return Math.abs(i)<Wn}class Xe extends ce{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new $n),this.points=[this.a,this.b,this.c],this.plane=new an,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Re,this.needsUpdate=!0}intersectsSphere(t){return fy(t,this)}update(){const t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,r);const h=s[1],f=o[1];h.subVectors(t,e),f.setFromPoints(h,r);const p=s[2],g=o[2];p.subVectors(e,n),g.setFromPoints(p,r);const m=s[3],y=o[3];m.subVectors(n,t),y.setFromPoints(m,r);const E=h.length(),v=p.length(),_=m.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,E<Wn?v<Wn||_<Wn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):v<Wn?_<Wn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):_<Wn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Xe.prototype.closestPointToSegment=(function(){const i=new I,t=new I,e=new Re;return function(r,s=null,o=null){this.needsUpdate&&this.update();const{start:a,end:l}=r,h=this.points;let f,p=1/0;const g=this.plane.distanceToPoint(a),m=this.plane.distanceToPoint(l);if(g*m<0&&this.plane.intersectLine(r,i)!==null&&this.containsPoint(i))return s&&s.copy(i),o&&o.copy(i),0;for(let y=0;y<3;y++){const E=(y+1)%3;e.start.copy(h[y]),e.end.copy(h[E]),Ul(e,r,i,t),f=i.distanceToSquared(t),f<p&&(p=f,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),f=a.distanceToSquared(i),f<p&&(p=f,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),f=l.distanceToSquared(i),f<p&&(p=f,s&&s.copy(i),o&&o.copy(l)),Math.sqrt(p)}})();Xe.prototype.intersectsTriangle=(function(){const i=new Xe,t=new $n,e=new $n,n=new I,r=new I,s=new I,o=new I,a=new Re,l=new Re,h=new I,f=new ut,p=new ut;function g(d,c,M,u){const C=n;!d.isDegenerateIntoPoint&&!d.isDegenerateIntoSegment?C.copy(d.plane.normal):C.copy(c.plane.normal);const A=d.satBounds,S=d.satAxes;for(let w=1;w<4;w++){const R=A[w],N=S[w];if(t.setFromPoints(N,c.points),R.isSeparated(t)||(o.copy(C).cross(N),t.setFromPoints(o,d.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}const x=c.satBounds,T=c.satAxes;for(let w=1;w<4;w++){const R=x[w],N=T[w];if(t.setFromPoints(N,d.points),R.isSeparated(t)||(o.crossVectors(C,N),t.setFromPoints(o,d.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}return M&&(u||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),M.start.set(0,0,0),M.end.set(0,0,0)),!0}function m(d,c,M,u,C,A,S,x,T,w,R){let N=S/(S-x);w.x=u+(C-u)*N,R.start.subVectors(c,d).multiplyScalar(N).add(d),N=S/(S-T),w.y=u+(A-u)*N,R.end.subVectors(M,d).multiplyScalar(N).add(d)}function y(d,c,M,u,C,A,S,x,T,w,R){if(C>0)m(d.c,d.a,d.b,u,c,M,T,S,x,w,R);else if(A>0)m(d.b,d.a,d.c,M,c,u,x,S,T,w,R);else if(x*T>0||S!=0)m(d.a,d.b,d.c,c,M,u,S,x,T,w,R);else if(x!=0)m(d.b,d.a,d.c,M,c,u,x,S,T,w,R);else if(T!=0)m(d.c,d.a,d.b,u,c,M,T,S,x,w,R);else return!0;return!1}function E(d,c,M,u){const C=c.degenerateSegment,A=d.plane.distanceToPoint(C.start),S=d.plane.distanceToPoint(C.end);return rn(A)?rn(S)?g(d,c,M,u):(M&&(M.start.copy(C.start),M.end.copy(C.start)),d.containsPoint(C.start)):rn(S)?(M&&(M.start.copy(C.end),M.end.copy(C.end)),d.containsPoint(C.end)):d.plane.intersectLine(C,n)!=null?(M&&(M.start.copy(n),M.end.copy(n)),d.containsPoint(n)):!1}function v(d,c,M){const u=c.a;return rn(d.plane.distanceToPoint(u))&&d.containsPoint(u)?(M&&(M.start.copy(u),M.end.copy(u)),!0):!1}function _(d,c,M){const u=d.degenerateSegment,C=c.a;return u.closestPointToPoint(C,!0,n),C.distanceToSquared(n)<lh?(M&&(M.start.copy(C),M.end.copy(C)),!0):!1}function b(d,c,M,u){if(d.isDegenerateIntoSegment)if(c.isDegenerateIntoSegment){const C=d.degenerateSegment,A=c.degenerateSegment,S=r,x=s;C.delta(S),A.delta(x);const T=n.subVectors(A.start,C.start),w=S.x*x.y-S.y*x.x;if(rn(w))return!1;const R=(T.x*x.y-T.y*x.x)/w,N=-(S.x*T.y-S.y*T.x)/w;if(R<0||R>1||N<0||N>1)return!1;const F=C.start.z+S.z*R,O=A.start.z+x.z*N;return rn(F-O)?(M&&(M.start.copy(C.start).addScaledVector(S,R),M.end.copy(C.start).addScaledVector(S,R)),!0):!1}else return c.isDegenerateIntoPoint?_(d,c,M):E(c,d,M,u);else{if(d.isDegenerateIntoPoint)return c.isDegenerateIntoPoint?c.a.distanceToSquared(d.a)<lh?(M&&(M.start.copy(d.a),M.end.copy(d.a)),!0):!1:c.isDegenerateIntoSegment?_(c,d,M):v(c,d,M);if(c.isDegenerateIntoPoint)return v(d,c,M);if(c.isDegenerateIntoSegment)return E(d,c,M,u)}}return function(c,M=null,u=!1){this.needsUpdate&&this.update(),c.isExtendedTriangle?c.needsUpdate&&c.update():(i.copy(c),i.update(),c=i);const C=b(this,c,M,u);if(C!==void 0)return C;const A=this.plane,S=c.plane;let x=S.distanceToPoint(this.a),T=S.distanceToPoint(this.b),w=S.distanceToPoint(this.c);rn(x)&&(x=0),rn(T)&&(T=0),rn(w)&&(w=0);const R=x*T,N=x*w;if(R>0&&N>0)return!1;let F=A.distanceToPoint(c.a),O=A.distanceToPoint(c.b),z=A.distanceToPoint(c.c);rn(F)&&(F=0),rn(O)&&(O=0),rn(z)&&(z=0);const B=F*O,q=F*z;if(B>0&&q>0)return!1;r.copy(A.normal),s.copy(S.normal);const ot=r.cross(s);let it=0,ht=Math.abs(ot.x);const St=Math.abs(ot.y);St>ht&&(ht=St,it=1),Math.abs(ot.z)>ht&&(it=2);const xt=dy[it],Z=this.a[xt],Q=this.b[xt],at=this.c[xt],ct=c.a[xt],lt=c.b[xt],wt=c.c[xt];if(y(this,Z,Q,at,R,N,x,T,w,f,a))return g(this,c,M,u);if(y(c,ct,lt,wt,B,q,F,O,z,p,l))return g(this,c,M,u);if(f.y<f.x){const Gt=f.y;f.y=f.x,f.x=Gt,h.copy(a.start),a.start.copy(a.end),a.end.copy(h)}if(p.y<p.x){const Gt=p.y;p.y=p.x,p.x=Gt,h.copy(l.start),l.start.copy(l.end),l.end.copy(h)}return f.y<p.x||p.y<f.x?!1:(M&&(p.x>f.x?M.start.copy(l.start):M.start.copy(a.start),p.y<f.y?M.end.copy(l.end):M.end.copy(a.end)),!0)}})();Xe.prototype.distanceToPoint=(function(){const i=new I;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Xe.prototype.distanceToTriangle=(function(){const i=new I,t=new I,e=["a","b","c"],n=new Re,r=new Re;return function(o,a=null,l=null){const h=a||l?n:null;if(this.intersectsTriangle(o,h,!0))return(a||l)&&(a&&h.getCenter(a),l&&h.getCenter(l)),0;let f=1/0;for(let p=0;p<3;p++){let g;const m=e[p],y=o[m];this.closestPointToPoint(y,i),g=y.distanceToSquared(i),g<f&&(f=g,a&&a.copy(i),l&&l.copy(y));const E=this[m];o.closestPointToPoint(E,i),g=E.distanceToSquared(i),g<f&&(f=g,a&&a.copy(E),l&&l.copy(i))}for(let p=0;p<3;p++){const g=e[p],m=e[(p+1)%3];n.set(this[g],this[m]);for(let y=0;y<3;y++){const E=e[y],v=e[(y+1)%3];r.set(o[E],o[v]),Ul(n,r,i,t);const _=i.distanceToSquared(t);_<f&&(f=_,a&&a.copy(i),l&&l.copy(t))}}return Math.sqrt(f)}})();class Be{constructor(t,e,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new Kt,this.invMatrix=new Kt,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new $n),this.alignedSatBounds=new Array(3).fill().map(()=>new $n),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Be.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,r=this.points;for(let h=0;h<=1;h++)for(let f=0;f<=1;f++)for(let p=0;p<=1;p++){const g=1*h|2*f|4*p,m=r[g];m.x=h?n.x:e.x,m.y=f?n.y:e.y,m.z=p?n.z:e.z,m.applyMatrix4(t)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let h=0;h<3;h++){const f=o[h],p=s[h],g=1<<h,m=r[g];f.subVectors(a,m),p.setFromPoints(f,r)}const l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Be.prototype.intersectsBox=(function(){const i=new $n;return function(e){this.needsUpdate&&this.update();const n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const h=o[l],f=s[l];if(i.setFromBox(h,e),f.isSeparated(i))return!1}return!0}})();Be.prototype.intersectsTriangle=(function(){const i=new Xe,t=new Array(3),e=new $n,n=new $n,r=new I;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let g=0;g<3;g++){const m=a[g],y=l[g];if(e.setFromPoints(y,t),m.isSeparated(e))return!1}const h=o.satBounds,f=o.satAxes,p=this.points;for(let g=0;g<3;g++){const m=h[g],y=f[g];if(e.setFromPoints(y,p),m.isSeparated(e))return!1}for(let g=0;g<3;g++){const m=l[g];for(let y=0;y<4;y++){const E=f[y];if(r.crossVectors(m,E),e.setFromPoints(r,t),n.setFromPoints(r,p),e.isSeparated(n))return!1}}return!0}})();Be.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Be.prototype.distanceToPoint=(function(){const i=new I;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Be.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Re),e=new Array(12).fill().map(()=>new Re),n=new I,r=new I;return function(o,a=0,l=null,h=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||h)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),l&&l.copy(n),h&&h.copy(r)),0;const f=a*a,p=o.min,g=o.max,m=this.points;let y=1/0;for(let v=0;v<8;v++){const _=m[v];r.copy(_).clamp(p,g);const b=_.distanceToSquared(r);if(b<y&&(y=b,l&&l.copy(_),h&&h.copy(r),b<f))return Math.sqrt(b)}let E=0;for(let v=0;v<3;v++)for(let _=0;_<=1;_++)for(let b=0;b<=1;b++){const d=(v+1)%3,c=(v+2)%3,M=_<<d|b<<c,u=1<<v|_<<d|b<<c,C=m[M],A=m[u];t[E].set(C,A);const x=i[v],T=i[d],w=i[c],R=e[E],N=R.start,F=R.end;N[x]=p[x],N[T]=_?p[T]:g[T],N[w]=b?p[w]:g[w],F[x]=g[x],F[T]=_?p[T]:g[T],F[w]=b?p[w]:g[w],E++}for(let v=0;v<=1;v++)for(let _=0;_<=1;_++)for(let b=0;b<=1;b++){r.x=v?g.x:p.x,r.y=_?g.y:p.y,r.z=b?g.z:p.z,this.closestPointToPoint(r,n);const d=r.distanceToSquared(n);if(d<y&&(y=d,l&&l.copy(n),h&&h.copy(r),d<f))return Math.sqrt(d)}for(let v=0;v<12;v++){const _=t[v];for(let b=0;b<12;b++){const d=e[b];Ul(_,d,n,r);const c=n.distanceToSquared(r);if(c<y&&(y=c,l&&l.copy(n),h&&h.copy(r),c<f))return Math.sqrt(c)}}return Math.sqrt(y)}})();class py extends Ll{constructor(){super(()=>new Xe)}}const cn=new py,Yr=new I,$a=new I;function gy(i,t,e={},n=0,r=1/0){const s=n*n,o=r*r;let a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:f=>(Yr.copy(t).clamp(f.min,f.max),Yr.distanceToSquared(t)),intersectsBounds:(f,p,g)=>g<a&&g<o,intersectsTriangle:(f,p)=>{f.closestPointToPoint(t,Yr);const g=t.distanceToSquared(Yr);return g<a&&($a.copy(Yr),a=g,l=p),g<s}}),a===1/0)return null;const h=Math.sqrt(a);return e.point?e.point.copy($a):e.point=$a.clone(),e.distance=h,e.faceIndex=l,e}const ro=parseInt(Ss)>=169,my=parseInt(Ss)<=161,Ei=new I,Ti=new I,bi=new I,so=new ut,oo=new ut,ao=new ut,uh=new I,hh=new I,fh=new I,$r=new I;function _y(i,t,e,n,r,s,o,a){let l;if(s===Fe?l=i.intersectTriangle(n,e,t,!0,r):l=i.intersectTriangle(t,e,n,s!==_n,r),l===null)return null;const h=i.origin.distanceTo(r);return h<o||h>a?null:{distance:h,point:r.clone()}}function dh(i,t,e,n,r,s,o,a,l,h,f){Ei.fromBufferAttribute(t,s),Ti.fromBufferAttribute(t,o),bi.fromBufferAttribute(t,a);const p=_y(i,Ei,Ti,bi,$r,l,h,f);if(p){if(n){so.fromBufferAttribute(n,s),oo.fromBufferAttribute(n,o),ao.fromBufferAttribute(n,a),p.uv=new ut;const m=ce.getInterpolation($r,Ei,Ti,bi,so,oo,ao,p.uv);ro||(p.uv=m)}if(r){so.fromBufferAttribute(r,s),oo.fromBufferAttribute(r,o),ao.fromBufferAttribute(r,a),p.uv1=new ut;const m=ce.getInterpolation($r,Ei,Ti,bi,so,oo,ao,p.uv1);ro||(p.uv1=m),my&&(p.uv2=p.uv1)}if(e){uh.fromBufferAttribute(e,s),hh.fromBufferAttribute(e,o),fh.fromBufferAttribute(e,a),p.normal=new I;const m=ce.getInterpolation($r,Ei,Ti,bi,uh,hh,fh,p.normal);p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1),ro||(p.normal=m)}const g={a:s,b:o,c:a,normal:new I,materialIndex:0};if(ce.getNormal(Ei,Ti,bi,g.normal),p.face=g,p.faceIndex=s,ro){const m=new I;ce.getBarycoord($r,Ei,Ti,bi,m),p.barycoord=m}}return p}function ph(i){return i&&i.isMaterial?i.side:i}function Ko(i,t,e,n,r,s,o){const a=n*3;let l=a+0,h=a+1,f=a+2;const{index:p,groups:g}=i;i.index&&(l=p.getX(l),h=p.getX(h),f=p.getX(f));const{position:m,normal:y,uv:E,uv1:v}=i.attributes;if(Array.isArray(t)){const _=n*3;for(let b=0,d=g.length;b<d;b++){const{start:c,count:M,materialIndex:u}=g[b];if(_>=c&&_<c+M){const C=ph(t[u]),A=dh(e,m,y,E,v,l,h,f,C,s,o);if(A)if(A.faceIndex=n,A.face.materialIndex=u,r)r.push(A);else return A}}}else{const _=ph(t),b=dh(e,m,y,E,v,l,h,f,_,s,o);if(b)if(b.faceIndex=n,b.face.materialIndex=0,r)r.push(b);else return b}return null}function xe(i,t,e,n){const r=i.a,s=i.b,o=i.c;let a=t,l=t+1,h=t+2;e&&(a=e.getX(a),l=e.getX(l),h=e.getX(h)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(h),o.y=n.getY(h),o.z=n.getZ(h)}function vy(i,t,e,n,r,s,o,a){const{geometry:l,_indirectBuffer:h}=i;for(let f=n,p=n+r;f<p;f++)Ko(l,t,e,f,s,o,a)}function xy(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:l}=i;let h=1/0,f=null;for(let p=n,g=n+r;p<g;p++){let m;m=Ko(a,t,e,p,null,s,o),m&&m.distance<h&&(f=m,h=m.distance)}return f}function yy(i,t,e,n,r,s,o){const{geometry:a}=e,{index:l}=a,h=a.attributes.position;for(let f=i,p=t+i;f<p;f++){let g;if(g=f,xe(o,g*3,l,h),o.needsUpdate=!0,n(o,g,r,s))return!0}return!1}function Sy(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,l,h=0;const f=i._roots;for(let g=0,m=f.length;g<m;g++)s=f[g],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),p(0,h),h+=s.byteLength;function p(g,m,y=!1){const E=g*2;if(me(E,a)){const v=Ae(g,o),_=De(E,a);let b=1/0,d=1/0,c=1/0,M=-1/0,u=-1/0,C=-1/0;for(let A=3*v,S=3*(v+_);A<S;A++){let x=n[A];const T=r.getX(x),w=r.getY(x),R=r.getZ(x);T<b&&(b=T),T>M&&(M=T),w<d&&(d=w),w>u&&(u=w),R<c&&(c=R),R>C&&(C=R)}return l[g+0]!==b||l[g+1]!==d||l[g+2]!==c||l[g+3]!==M||l[g+4]!==u||l[g+5]!==C?(l[g+0]=b,l[g+1]=d,l[g+2]=c,l[g+3]=M,l[g+4]=u,l[g+5]=C,!0):!1}else{const v=Se(g),_=Me(g,o);let b=y,d=!1,c=!1;if(t){if(!b){const x=v/ve+m/je,T=_/ve+m/je;d=t.has(x),c=t.has(T),b=!d&&!c}}else d=!0,c=!0;const M=b||d,u=b||c;let C=!1;M&&(C=p(v,m,b));let A=!1;u&&(A=p(_,m,b));const S=C||A;if(S)for(let x=0;x<3;x++){const T=v+x,w=_+x,R=l[T],N=l[T+3],F=l[w],O=l[w+3];l[g+x]=R<F?R:F,l[g+x+3]=N>O?N:O}return S}}}function ln(i,t,e,n,r){let s,o,a,l,h,f;const p=1/e.direction.x,g=1/e.direction.y,m=1/e.direction.z,y=e.origin.x,E=e.origin.y,v=e.origin.z;let _=t[i],b=t[i+3],d=t[i+1],c=t[i+3+1],M=t[i+2],u=t[i+3+2];return p>=0?(s=(_-y)*p,o=(b-y)*p):(s=(b-y)*p,o=(_-y)*p),g>=0?(a=(d-E)*g,l=(c-E)*g):(a=(c-E)*g,l=(d-E)*g),s>l||a>o||((a>s||isNaN(s))&&(s=a),(l<o||isNaN(o))&&(o=l),m>=0?(h=(M-v)*m,f=(u-v)*m):(h=(u-v)*m,f=(M-v)*m),s>f||h>o)?!1:((h>s||s!==s)&&(s=h),(f<o||o!==o)&&(o=f),s<=r&&o>=n)}function My(i,t,e,n,r,s,o,a){const{geometry:l,_indirectBuffer:h}=i;for(let f=n,p=n+r;f<p;f++){let g=h?h[f]:f;Ko(l,t,e,g,s,o,a)}}function Ey(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:l}=i;let h=1/0,f=null;for(let p=n,g=n+r;p<g;p++){let m;m=Ko(a,t,e,l?l[p]:p,null,s,o),m&&m.distance<h&&(f=m,h=m.distance)}return f}function Ty(i,t,e,n,r,s,o){const{geometry:a}=e,{index:l}=a,h=a.attributes.position;for(let f=i,p=t+i;f<p;f++){let g;if(g=e.resolveTriangleIndex(f),xe(o,g*3,l,h),o.needsUpdate=!0,n(o,g,r,s))return!0}return!1}function by(i,t,e,n,r,s,o){te.setBuffer(i._roots[t]),ln(0,te.float32Array,n,s,o)&&ol(0,i,e,n,r,s,o),te.clearBuffer()}function ol(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:l,uint32Array:h}=te,f=i*2;if(me(f,l)){const g=Ae(i,h),m=De(f,l);vy(t,e,n,g,m,r,s,o)}else{const g=Se(i);ln(g,a,n,s,o)&&ol(g,t,e,n,r,s,o);const m=Me(i,h);ln(m,a,n,s,o)&&ol(m,t,e,n,r,s,o)}}const Ay=["x","y","z"];function wy(i,t,e,n,r,s){te.setBuffer(i._roots[t]);let o=null;return ln(0,te.float32Array,n,r,s)&&(o=al(0,i,e,n,r,s)),te.clearBuffer(),o}function al(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:l}=te;let h=i*2;if(me(h,a)){const p=Ae(i,l),g=De(h,a);return xy(t,e,n,p,g,r,s)}else{const p=Pl(i,l),g=Ay[p],y=n.direction[g]>=0;let E,v;y?(E=Se(i),v=Me(i,l)):(E=Me(i,l),v=Se(i));const b=ln(E,o,n,r,s)?al(E,t,e,n,r,s):null;if(b){const M=b.point[g];if(y?M<=o[v+p]:M>=o[v+p+3])return b}const c=ln(v,o,n,r,s)?al(v,t,e,n,r,s):null;return b&&c?b.distance<=c.distance?b:c:b||c||null}}const co=new Oe,pr=new Xe,gr=new Xe,Zr=new Kt,gh=new Be,lo=new Be;function Ry(i,t,e,n){te.setBuffer(i._roots[t]);const r=cl(0,i,e,n);return te.clearBuffer(),r}function cl(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=te;let l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),gh.set(e.boundingBox.min,e.boundingBox.max,n),r=gh),me(l,o)){const f=t.geometry,p=f.index,g=f.attributes.position,m=e.index,y=e.attributes.position,E=Ae(i,a),v=De(l,o);if(Zr.copy(n).invert(),e.boundsTree)return pe(i,s,lo),lo.matrix.copy(Zr),lo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:b=>lo.intersectsBox(b),intersectsTriangle:b=>{b.a.applyMatrix4(n),b.b.applyMatrix4(n),b.c.applyMatrix4(n),b.needsUpdate=!0;for(let d=E*3,c=(v+E)*3;d<c;d+=3)if(xe(gr,d,p,g),gr.needsUpdate=!0,b.intersectsTriangle(gr))return!0;return!1}});{const _=Zo(e);for(let b=E*3,d=(v+E)*3;b<d;b+=3){xe(pr,b,p,g),pr.a.applyMatrix4(Zr),pr.b.applyMatrix4(Zr),pr.c.applyMatrix4(Zr),pr.needsUpdate=!0;for(let c=0,M=_*3;c<M;c+=3)if(xe(gr,c,m,y),gr.needsUpdate=!0,pr.intersectsTriangle(gr))return!0}}}else{const f=Se(i),p=Me(i,a);return pe(f,s,co),!!(r.intersectsBox(co)&&cl(f,t,e,n,r)||(pe(p,s,co),r.intersectsBox(co)&&cl(p,t,e,n,r)))}}const uo=new Kt,Za=new Be,Kr=new Be,Cy=new I,Py=new I,Dy=new I,Ly=new I;function Iy(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Za.set(t.boundingBox.min,t.boundingBox.max,e),Za.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,h=a.index,f=t.attributes.position,p=t.index,g=cn.getPrimitive(),m=cn.getPrimitive();let y=Cy,E=Py,v=null,_=null;r&&(v=Dy,_=Ly);let b=1/0,d=null,c=null;return uo.copy(e).invert(),Kr.matrix.copy(uo),i.shapecast({boundsTraverseOrder:M=>Za.distanceToBox(M),intersectsBounds:(M,u,C)=>C<b&&C<o?(u&&(Kr.min.copy(M.min),Kr.max.copy(M.max),Kr.needsUpdate=!0),!0):!1,intersectsRange:(M,u)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:A=>Kr.distanceToBox(A),intersectsBounds:(A,S,x)=>x<b&&x<o,intersectsRange:(A,S)=>{for(let x=A,T=A+S;x<T;x++){xe(m,3*x,p,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let w=M,R=M+u;w<R;w++){xe(g,3*w,h,l),g.needsUpdate=!0;const N=g.distanceToTriangle(m,y,v);if(N<b&&(E.copy(y),_&&_.copy(v),b=N,d=w,c=x),N<s)return!0}}}});{const C=Zo(t);for(let A=0,S=C;A<S;A++){xe(m,3*A,p,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let x=M,T=M+u;x<T;x++){xe(g,3*x,h,l),g.needsUpdate=!0;const w=g.distanceToTriangle(m,y,v);if(w<b&&(E.copy(y),_&&_.copy(v),b=w,d=x,c=A),w<s)return!0}}}}}),cn.releasePrimitive(g),cn.releasePrimitive(m),b===1/0?null:(n.point?n.point.copy(E):n.point=E.clone(),n.distance=b,n.faceIndex=d,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(uo),E.applyMatrix4(uo),r.distance=E.sub(r.point).length(),r.faceIndex=c),n)}function Uy(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,l,h=0;const f=i._roots;for(let g=0,m=f.length;g<m;g++)s=f[g],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),p(0,h),h+=s.byteLength;function p(g,m,y=!1){const E=g*2;if(me(E,a)){const v=Ae(g,o),_=De(E,a);let b=1/0,d=1/0,c=1/0,M=-1/0,u=-1/0,C=-1/0;for(let A=v,S=v+_;A<S;A++){const x=3*i.resolveTriangleIndex(A);for(let T=0;T<3;T++){let w=x+T;w=n?n[w]:w;const R=r.getX(w),N=r.getY(w),F=r.getZ(w);R<b&&(b=R),R>M&&(M=R),N<d&&(d=N),N>u&&(u=N),F<c&&(c=F),F>C&&(C=F)}}return l[g+0]!==b||l[g+1]!==d||l[g+2]!==c||l[g+3]!==M||l[g+4]!==u||l[g+5]!==C?(l[g+0]=b,l[g+1]=d,l[g+2]=c,l[g+3]=M,l[g+4]=u,l[g+5]=C,!0):!1}else{const v=Se(g),_=Me(g,o);let b=y,d=!1,c=!1;if(t){if(!b){const x=v/ve+m/je,T=_/ve+m/je;d=t.has(x),c=t.has(T),b=!d&&!c}}else d=!0,c=!0;const M=b||d,u=b||c;let C=!1;M&&(C=p(v,m,b));let A=!1;u&&(A=p(_,m,b));const S=C||A;if(S)for(let x=0;x<3;x++){const T=v+x,w=_+x,R=l[T],N=l[T+3],F=l[w],O=l[w+3];l[g+x]=R<F?R:F,l[g+x+3]=N>O?N:O}return S}}}function Ny(i,t,e,n,r,s,o){te.setBuffer(i._roots[t]),ln(0,te.float32Array,n,s,o)&&ll(0,i,e,n,r,s,o),te.clearBuffer()}function ll(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:l,uint32Array:h}=te,f=i*2;if(me(f,l)){const g=Ae(i,h),m=De(f,l);My(t,e,n,g,m,r,s,o)}else{const g=Se(i);ln(g,a,n,s,o)&&ll(g,t,e,n,r,s,o);const m=Me(i,h);ln(m,a,n,s,o)&&ll(m,t,e,n,r,s,o)}}const Fy=["x","y","z"];function Oy(i,t,e,n,r,s){te.setBuffer(i._roots[t]);let o=null;return ln(0,te.float32Array,n,r,s)&&(o=ul(0,i,e,n,r,s)),te.clearBuffer(),o}function ul(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:l}=te;let h=i*2;if(me(h,a)){const p=Ae(i,l),g=De(h,a);return Ey(t,e,n,p,g,r,s)}else{const p=Pl(i,l),g=Fy[p],y=n.direction[g]>=0;let E,v;y?(E=Se(i),v=Me(i,l)):(E=Me(i,l),v=Se(i));const b=ln(E,o,n,r,s)?ul(E,t,e,n,r,s):null;if(b){const M=b.point[g];if(y?M<=o[v+p]:M>=o[v+p+3])return b}const c=ln(v,o,n,r,s)?ul(v,t,e,n,r,s):null;return b&&c?b.distance<=c.distance?b:c:b||c||null}}const ho=new Oe,mr=new Xe,_r=new Xe,Jr=new Kt,mh=new Be,fo=new Be;function By(i,t,e,n){te.setBuffer(i._roots[t]);const r=hl(0,i,e,n);return te.clearBuffer(),r}function hl(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=te;let l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),mh.set(e.boundingBox.min,e.boundingBox.max,n),r=mh),me(l,o)){const f=t.geometry,p=f.index,g=f.attributes.position,m=e.index,y=e.attributes.position,E=Ae(i,a),v=De(l,o);if(Jr.copy(n).invert(),e.boundsTree)return pe(i,s,fo),fo.matrix.copy(Jr),fo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:b=>fo.intersectsBox(b),intersectsTriangle:b=>{b.a.applyMatrix4(n),b.b.applyMatrix4(n),b.c.applyMatrix4(n),b.needsUpdate=!0;for(let d=E,c=v+E;d<c;d++)if(xe(_r,3*t.resolveTriangleIndex(d),p,g),_r.needsUpdate=!0,b.intersectsTriangle(_r))return!0;return!1}});{const _=Zo(e);for(let b=E,d=v+E;b<d;b++){const c=t.resolveTriangleIndex(b);xe(mr,3*c,p,g),mr.a.applyMatrix4(Jr),mr.b.applyMatrix4(Jr),mr.c.applyMatrix4(Jr),mr.needsUpdate=!0;for(let M=0,u=_*3;M<u;M+=3)if(xe(_r,M,m,y),_r.needsUpdate=!0,mr.intersectsTriangle(_r))return!0}}}else{const f=Se(i),p=Me(i,a);return pe(f,s,ho),!!(r.intersectsBox(ho)&&hl(f,t,e,n,r)||(pe(p,s,ho),r.intersectsBox(ho)&&hl(p,t,e,n,r)))}}const po=new Kt,Ka=new Be,jr=new Be,zy=new I,Vy=new I,Hy=new I,ky=new I;function Gy(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ka.set(t.boundingBox.min,t.boundingBox.max,e),Ka.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,h=a.index,f=t.attributes.position,p=t.index,g=cn.getPrimitive(),m=cn.getPrimitive();let y=zy,E=Vy,v=null,_=null;r&&(v=Hy,_=ky);let b=1/0,d=null,c=null;return po.copy(e).invert(),jr.matrix.copy(po),i.shapecast({boundsTraverseOrder:M=>Ka.distanceToBox(M),intersectsBounds:(M,u,C)=>C<b&&C<o?(u&&(jr.min.copy(M.min),jr.max.copy(M.max),jr.needsUpdate=!0),!0):!1,intersectsRange:(M,u)=>{if(t.boundsTree){const C=t.boundsTree;return C.shapecast({boundsTraverseOrder:A=>jr.distanceToBox(A),intersectsBounds:(A,S,x)=>x<b&&x<o,intersectsRange:(A,S)=>{for(let x=A,T=A+S;x<T;x++){const w=C.resolveTriangleIndex(x);xe(m,3*w,p,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let R=M,N=M+u;R<N;R++){const F=i.resolveTriangleIndex(R);xe(g,3*F,h,l),g.needsUpdate=!0;const O=g.distanceToTriangle(m,y,v);if(O<b&&(E.copy(y),_&&_.copy(v),b=O,d=R,c=x),O<s)return!0}}}})}else{const C=Zo(t);for(let A=0,S=C;A<S;A++){xe(m,3*A,p,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let x=M,T=M+u;x<T;x++){const w=i.resolveTriangleIndex(x);xe(g,3*w,h,l),g.needsUpdate=!0;const R=g.distanceToTriangle(m,y,v);if(R<b&&(E.copy(y),_&&_.copy(v),b=R,d=x,c=A),R<s)return!0}}}}}),cn.releasePrimitive(g),cn.releasePrimitive(m),b===1/0?null:(n.point?n.point.copy(E):n.point=E.clone(),n.distance=b,n.faceIndex=d,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(po),E.applyMatrix4(po),r.distance=E.sub(r.point).length(),r.faceIndex=c),n)}function _h(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const go=new Be,mo=new Br,vh=new I,xh=new Kt,yh=new I,Ja=["getX","getY","getZ"];class Ho extends uy{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(s));const a=new Ho(e,{...n,[Cl]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const h=e.getIndex();if(h===null){const f=new We(t.index,1,!1);e.setIndex(f)}else h.array!==r&&(h.array.set(r),h.needsUpdate=!0)}return a;function l(h){for(let f=0;f<h.length;f++){const p=h[f],g=new Uint32Array(p),m=new Uint16Array(p);for(let y=0,E=p.byteLength/je;y<E;y++){const v=ve*y,_=2*v;me(_,m)||(g[v+6]=g[v+6]/ve-y)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,h=(s?s[t]:t)*3;let f=h+0,p=h+1,g=h+2;a&&(f=a[f],p=a[p],g=a[g]);for(let m=0;m<3;m++){const y=o[Ja[m]](f),E=o[Ja[m]](p),v=o[Ja[m]](g);let _=y;E<_&&(_=E),v<_&&(_=v);let b=y;E>b&&(b=E),v>b&&(b=v),e[n+m]=_,e[n+m+3]=b}return e}computePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,l=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const h=o.array,f=o.offset||0;let p=3;o.isInterleavedBufferAttribute&&(p=o.data.stride);const g=["getX","getY","getZ"],m=n.offset;for(let y=t,E=t+e;y<E;y++){const _=(s?s[y]:y)*3,b=(y-m)*6;let d=_+0,c=_+1,M=_+2;a&&(d=a[d],c=a[c],M=a[M]),l||(d=d*p+f,c=c*p+f,M=M*p+f);for(let u=0;u<3;u++){let C,A,S;l?(C=o[g[u]](d),A=o[g[u]](c),S=o[g[u]](M)):(C=h[d+u],A=h[c+u],S=h[M+u]);let x=C;A<x&&(x=A),S<x&&(x=S);let T=C;A>T&&(T=A),S>T&&(T=S);const w=(T-x)/2,R=u*2;n[b+R+0]=x+w,n[b+R+1]=w+(Math.abs(x)+w)*Do}}return n}raycastObject3D(t,e,n=[]){const{material:r}=t;if(r===void 0)return;xh.copy(t.matrixWorld).invert(),mo.copy(e.ray).applyMatrix4(xh),yh.setFromMatrixScale(t.matrixWorld),vh.copy(mo.direction).multiply(yh);const s=vh.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let l=this.raycastFirst(mo,r,o,a);l=_h(l,t,e),l&&n.push(l)}else{const l=this.raycast(mo,r,o,a);for(let h=0,f=l.length;h<f;h++){const p=_h(l[h],t,e);p&&n.push(p)}}return n}refit(t=null){return(this.indirect?Uy:Sy)(this,t)}raycast(t,e=Cn,n=0,r=1/0){const s=this._roots,o=[],a=this.indirect?Ny:by;for(let l=0,h=s.length;l<h;l++)a(this,l,e,t,o,n,r);return o}raycastFirst(t,e=Cn,n=0,r=1/0){const s=this._roots;let o=null;const a=this.indirect?Oy:wy;for(let l=0,h=s.length;l<h;l++){const f=a(this,l,e,t,n,r);f!=null&&(o==null||f.distance<o.distance)&&(o=f)}return o}intersectsGeometry(t,e){let n=!1;const r=this._roots,s=this.indirect?By:Ry;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){const e=cn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?Ty:yy});return cn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const o=cn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,h=this.indirect?y=>{const E=this.resolveTriangleIndex(y);xe(o,E*3,a,l)}:y=>{xe(o,y*3,a,l)},f=cn.getPrimitive(),p=t.geometry.index,g=t.geometry.attributes.position,m=t.indirect?y=>{const E=t.resolveTriangleIndex(y);xe(f,E*3,p,g)}:y=>{xe(f,y*3,p,g)};if(s){if(!(t instanceof Ho))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const y=(E,v,_,b,d,c,M,u)=>{for(let C=_,A=_+b;C<A;C++){m(C),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let S=E,x=E+v;S<x;S++)if(h(S),o.needsUpdate=!0,s(o,f,S,C,d,c,M,u))return!0}return!1};if(r){const E=r;r=function(v,_,b,d,c,M,u,C){return E(v,_,b,d,c,M,u,C)?!0:y(v,_,b,d,c,M,u,C)}}else r=y}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return go.set(t.min,t.max,e),go.needsUpdate=!0,this.shapecast({intersectsBounds:n=>go.intersectsBox(n),intersectsTriangle:n=>go.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?Gy:Iy)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return gy(this,t,e,n,r)}}const Jf=1e-6,Wy=Jf*.5,jf=Math.pow(10,-Math.log10(Jf)),Xy=Wy*jf;function Rn(i){return~~(i*jf+Xy)}function qy(i){return`${Rn(i.x)},${Rn(i.y)}`}function Sh(i){return`${Rn(i.x)},${Rn(i.y)},${Rn(i.z)}`}function Yy(i){return`${Rn(i.x)},${Rn(i.y)},${Rn(i.z)},${Rn(i.w)}`}function $y(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function Qf(){return typeof SharedArrayBuffer<"u"}function Zy(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function Ky(i){return i.index?i.index.count:i.attributes.position.count}function Nl(i){return Ky(i)/3}const Jy=1e-8,jy=new I;function Qy(i){return~~(i/3)}function tS(i){return i%3}function Mh(i,t){return i.start-t.start}function Eh(i,t){return jy.subVectors(t,i.origin).dot(i.direction)}function eS(i,t,e,n=Jy){i.sort(Mh),t.sort(Mh);for(let a=0;a<i.length;a++){const l=i[a];for(let h=0;h<t.length;h++){const f=t[h];if(!(f.start>l.end)){if(l.end<f.start||f.end<l.start)continue;if(l.start<=f.start&&l.end>=f.end)s(f.end,l.end)||i.splice(a+1,0,{start:f.end,end:l.end,index:l.index}),l.end=f.start,f.start=0,f.end=0;else if(l.start>=f.start&&l.end<=f.end)s(l.end,f.end)||t.splice(h+1,0,{start:l.end,end:f.end,index:f.index}),f.end=l.start,l.start=0,l.end=0;else if(l.start<=f.start&&l.end<=f.end){const p=l.end;l.end=f.start,f.start=p}else if(l.start>=f.start&&l.end>=f.end){const p=f.end;f.end=l.start,l.start=p}else throw new Error}if(e.has(l.index)||e.set(l.index,[]),e.has(f.index)||e.set(f.index,[]),e.get(l.index).push(f.index),e.get(f.index).push(l.index),o(f)&&(t.splice(h,1),h--),o(l)){i.splice(a,1),a--;break}}}r(i),r(t);function r(a){for(let l=0;l<a.length;l++)o(a[l])&&(a.splice(l,1),l--)}function s(a,l){return Math.abs(l-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}const Th=1e-5,bh=1e-4;class nS{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let l=0,h=e.length;l<h;l++){const f=e[l];if(o(f,t)&&o(f,n))continue;const p=a(f,t),g=a(f,n),m=Math.min(p,g);m<r&&(r=m,s=f)}return s;function o(l,h){const f=l.origin.distanceTo(h.origin)>Th;return l.direction.angleTo(h.direction)>bh||f}function a(l,h){const f=l.origin.distanceTo(h.origin),p=l.direction.angleTo(h.direction);return f/Th+p/bh}}}const ja=new I,Qa=new I,_o=new Br;function iS(i,t,e){const n=i.attributes,r=i.index,s=n.position,o=new Map,a=new Map,l=Array.from(t),h=new nS;for(let f=0,p=l.length;f<p;f++){const g=l[f],m=Qy(g),y=tS(g);let E=3*m+y,v=3*m+(y+1)%3;r&&(E=r.getX(E),v=r.getX(v)),ja.fromBufferAttribute(s,E),Qa.fromBufferAttribute(s,v),$y(ja,Qa,_o);let _,b=h.findClosestRay(_o);b===null&&(b=_o.clone(),h.addRay(b)),a.has(b)||a.set(b,{forward:[],reverse:[],ray:b}),_=a.get(b);let d=Eh(b,ja),c=Eh(b,Qa);d>c&&([d,c]=[c,d]),_o.direction.dot(b.direction)<0?_.reverse.push({start:d,end:c,index:g}):_.forward.push({start:d,end:c,index:g})}return a.forEach(({forward:f,reverse:p},g)=>{eS(f,p,o,e),f.length===0&&p.length===0&&a.delete(g)}),{disjointConnectivityMap:o,fragmentMap:a}}const rS=new ut,tc=new I,sS=new se,ec=["","",""];class oS{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?d:b,a=new Map,{attributes:l}=t,h=e?Object.keys(l):null,f=t.index,p=l.position;let g=Nl(t);const m=g;let y=0;n&&(y=t.drawRange.start,t.drawRange.count!==1/0&&(g=~~(t.drawRange.count/3)));let E=this.data;(!E||E.length<3*m)&&(E=new Int32Array(3*m)),E.fill(-1);let v=0,_=new Set;for(let c=y,M=g*3+y;c<M;c+=3){const u=c;for(let C=0;C<3;C++){let A=u+C;f&&(A=f.getX(A)),ec[C]=o(A)}for(let C=0;C<3;C++){const A=(C+1)%3,S=ec[C],x=ec[A],T=`${x}_${S}`;if(a.has(T)){const w=u+C,R=a.get(T);E[w]=R,E[R]=w,a.delete(T),v+=2,_.delete(R)}else{const w=`${S}_${x}`,R=u+C;a.set(w,R),_.add(R)}}}if(r){const{fragmentMap:c,disjointConnectivityMap:M}=iS(t,_,s);_.clear(),c.forEach(({forward:u,reverse:C})=>{u.forEach(({index:A})=>_.add(A)),C.forEach(({index:A})=>_.add(A))}),this.unmatchedDisjointEdges=c,this.disjointConnections=M,v=g*3-_.size}this.matchedEdges=v,this.unmatchedEdges=_.size,this.data=E;function b(c){return tc.fromBufferAttribute(p,c),Sh(tc)}function d(c){let M="";for(let u=0,C=h.length;u<C;u++){const A=l[h[u]];let S;switch(A.itemSize){case 1:S=Rn(A.getX(c));break;case 2:S=qy(rS.fromBufferAttribute(A,c));break;case 3:S=Sh(tc.fromBufferAttribute(A,c));break;case 4:S=Yy(sS.fromBufferAttribute(A,c));break}M!==""&&(M+="|"),M+=S}return M}}}class ko extends Je{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Kt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=Qf(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,l=`${t.uuid}_${o}_${a}`;if(this._hash===l)return;if(this._hash=l,n)for(const g in e){const m=e[g];if(m.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");m.array=Zy(m.array)}t.boundsTree=new Ho(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new oS),t.halfEdges.updateFrom(t);const h=Nl(t);(!t.groupIndices||t.groupIndices.length!==h)&&(t.groupIndices=new Uint16Array(h));const f=t.groupIndices,p=t.groups;for(let g=0,m=p.length;g<m;g++){const{start:y,count:E}=p[g];for(let v=y/3,_=(y+E)/3;v<_;v++)f[v]=g}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}var aS=Object.getOwnPropertyNames,Qe=(i,t)=>function(){return t||(0,i[aS(i)[0]])((t={exports:{}}).exports,t),t.exports},Jo=Qe({"node_modules/binary-search-bounds/search-bounds.js"(i,t){function e(l,h,f,p,g){for(var m=g+1;p<=g;){var y=p+g>>>1,E=l[y],v=f!==void 0?f(E,h):E-h;v>=0?(m=y,g=y-1):p=y+1}return m}function n(l,h,f,p,g){for(var m=g+1;p<=g;){var y=p+g>>>1,E=l[y],v=f!==void 0?f(E,h):E-h;v>0?(m=y,g=y-1):p=y+1}return m}function r(l,h,f,p,g){for(var m=p-1;p<=g;){var y=p+g>>>1,E=l[y],v=f!==void 0?f(E,h):E-h;v<0?(m=y,p=y+1):g=y-1}return m}function s(l,h,f,p,g){for(var m=p-1;p<=g;){var y=p+g>>>1,E=l[y],v=f!==void 0?f(E,h):E-h;v<=0?(m=y,p=y+1):g=y-1}return m}function o(l,h,f,p,g){for(;p<=g;){var m=p+g>>>1,y=l[m],E=f!==void 0?f(y,h):y-h;if(E===0)return m;E<=0?p=m+1:g=m-1}return-1}function a(l,h,f,p,g,m){return typeof f=="function"?m(l,h,f,p===void 0?0:p|0,g===void 0?l.length-1:g|0):m(l,h,void 0,f===void 0?0:f|0,p===void 0?l.length-1:p|0)}t.exports={ge:function(l,h,f,p,g){return a(l,h,f,p,g,e)},gt:function(l,h,f,p,g){return a(l,h,f,p,g,n)},lt:function(l,h,f,p,g){return a(l,h,f,p,g,r)},le:function(l,h,f,p,g){return a(l,h,f,p,g,s)},eq:function(l,h,f,p,g){return a(l,h,f,p,g,o)}}}}),Fl=Qe({"node_modules/two-product/two-product.js"(i,t){t.exports=n;var e=+(Math.pow(2,27)+1);function n(r,s,o){var a=r*s,l=e*r,h=l-r,f=l-h,p=r-f,g=e*s,m=g-s,y=g-m,E=s-y,v=a-f*y,_=v-p*y,b=_-f*E,d=p*E-b;return o?(o[0]=d,o[1]=a,o):[d,a]}}}),td=Qe({"node_modules/robust-sum/robust-sum.js"(i,t){t.exports=n;function e(r,s){var o=r+s,a=o-r,l=o-a,h=s-a,f=r-l,p=f+h;return p?[p,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var l=o+a,h=new Array(l),f=0,p=0,g=0,m=Math.abs,y=r[p],E=m(y),v=s[g],_=m(v),b,d;E<_?(d=y,p+=1,p<o&&(y=r[p],E=m(y))):(d=v,g+=1,g<a&&(v=s[g],_=m(v))),p<o&&E<_||g>=a?(b=y,p+=1,p<o&&(y=r[p],E=m(y))):(b=v,g+=1,g<a&&(v=s[g],_=m(v)));for(var c=b+d,M=c-b,u=d-M,C=u,A=c,S,x,T,w,R;p<o&&g<a;)E<_?(b=y,p+=1,p<o&&(y=r[p],E=m(y))):(b=v,g+=1,g<a&&(v=s[g],_=m(v))),d=C,c=b+d,M=c-b,u=d-M,u&&(h[f++]=u),S=A+c,x=S-A,T=S-x,w=c-x,R=A-T,C=R+w,A=S;for(;p<o;)b=y,d=C,c=b+d,M=c-b,u=d-M,u&&(h[f++]=u),S=A+c,x=S-A,T=S-x,w=c-x,R=A-T,C=R+w,A=S,p+=1,p<o&&(y=r[p]);for(;g<a;)b=v,d=C,c=b+d,M=c-b,u=d-M,u&&(h[f++]=u),S=A+c,x=S-A,T=S-x,w=c-x,R=A-T,C=R+w,A=S,g+=1,g<a&&(v=s[g]);return C&&(h[f++]=C),A&&(h[f++]=A),f||(h[f++]=0),h.length=f,h}}}),cS=Qe({"node_modules/two-sum/two-sum.js"(i,t){t.exports=e;function e(n,r,s){var o=n+r,a=o-n,l=o-a,h=r-a,f=n-l;return s?(s[0]=f+h,s[1]=o,s):[f+h,o]}}}),ed=Qe({"node_modules/robust-scale/robust-scale.js"(i,t){var e=Fl(),n=cS();t.exports=r;function r(s,o){var a=s.length;if(a===1){var l=e(s[0],o);return l[0]?l:[l[1]]}var h=new Array(2*a),f=[.1,.1],p=[.1,.1],g=0;e(s[0],o,f),f[0]&&(h[g++]=f[0]);for(var m=1;m<a;++m){e(s[m],o,p);var y=f[1];n(y,p[0],f),f[0]&&(h[g++]=f[0]);var E=p[1],v=f[1],_=E+v,b=_-E,d=v-b;f[1]=_,d&&(h[g++]=d)}return f[1]&&(h[g++]=f[1]),g===0&&(h[g++]=0),h.length=g,h}}}),nd=Qe({"node_modules/robust-subtract/robust-diff.js"(i,t){t.exports=n;function e(r,s){var o=r+s,a=o-r,l=o-a,h=s-a,f=r-l,p=f+h;return p?[p,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var l=o+a,h=new Array(l),f=0,p=0,g=0,m=Math.abs,y=r[p],E=m(y),v=-s[g],_=m(v),b,d;E<_?(d=y,p+=1,p<o&&(y=r[p],E=m(y))):(d=v,g+=1,g<a&&(v=-s[g],_=m(v))),p<o&&E<_||g>=a?(b=y,p+=1,p<o&&(y=r[p],E=m(y))):(b=v,g+=1,g<a&&(v=-s[g],_=m(v)));for(var c=b+d,M=c-b,u=d-M,C=u,A=c,S,x,T,w,R;p<o&&g<a;)E<_?(b=y,p+=1,p<o&&(y=r[p],E=m(y))):(b=v,g+=1,g<a&&(v=-s[g],_=m(v))),d=C,c=b+d,M=c-b,u=d-M,u&&(h[f++]=u),S=A+c,x=S-A,T=S-x,w=c-x,R=A-T,C=R+w,A=S;for(;p<o;)b=y,d=C,c=b+d,M=c-b,u=d-M,u&&(h[f++]=u),S=A+c,x=S-A,T=S-x,w=c-x,R=A-T,C=R+w,A=S,p+=1,p<o&&(y=r[p]);for(;g<a;)b=v,d=C,c=b+d,M=c-b,u=d-M,u&&(h[f++]=u),S=A+c,x=S-A,T=S-x,w=c-x,R=A-T,C=R+w,A=S,g+=1,g<a&&(v=-s[g]);return C&&(h[f++]=C),A&&(h[f++]=A),f||(h[f++]=0),h.length=f,h}}}),lS=Qe({"node_modules/robust-orientation/orientation.js"(i,t){var e=Fl(),n=td(),r=ed(),s=nd(),o=5,a=11102230246251565e-32,l=(3+16*a)*a,h=(7+56*a)*a;function f(c,M,u,C){return function(S,x,T){var w=c(c(M(x[1],T[0]),M(-T[1],x[0])),c(M(S[1],x[0]),M(-x[1],S[0]))),R=c(M(S[1],T[0]),M(-T[1],S[0])),N=C(w,R);return N[N.length-1]}}function p(c,M,u,C){return function(S,x,T,w){var R=c(c(u(c(M(T[1],w[0]),M(-w[1],T[0])),x[2]),c(u(c(M(x[1],w[0]),M(-w[1],x[0])),-T[2]),u(c(M(x[1],T[0]),M(-T[1],x[0])),w[2]))),c(u(c(M(x[1],w[0]),M(-w[1],x[0])),S[2]),c(u(c(M(S[1],w[0]),M(-w[1],S[0])),-x[2]),u(c(M(S[1],x[0]),M(-x[1],S[0])),w[2])))),N=c(c(u(c(M(T[1],w[0]),M(-w[1],T[0])),S[2]),c(u(c(M(S[1],w[0]),M(-w[1],S[0])),-T[2]),u(c(M(S[1],T[0]),M(-T[1],S[0])),w[2]))),c(u(c(M(x[1],T[0]),M(-T[1],x[0])),S[2]),c(u(c(M(S[1],T[0]),M(-T[1],S[0])),-x[2]),u(c(M(S[1],x[0]),M(-x[1],S[0])),T[2])))),F=C(R,N);return F[F.length-1]}}function g(c,M,u,C){return function(S,x,T,w,R){var N=c(c(c(u(c(u(c(M(w[1],R[0]),M(-R[1],w[0])),T[2]),c(u(c(M(T[1],R[0]),M(-R[1],T[0])),-w[2]),u(c(M(T[1],w[0]),M(-w[1],T[0])),R[2]))),x[3]),c(u(c(u(c(M(w[1],R[0]),M(-R[1],w[0])),x[2]),c(u(c(M(x[1],R[0]),M(-R[1],x[0])),-w[2]),u(c(M(x[1],w[0]),M(-w[1],x[0])),R[2]))),-T[3]),u(c(u(c(M(T[1],R[0]),M(-R[1],T[0])),x[2]),c(u(c(M(x[1],R[0]),M(-R[1],x[0])),-T[2]),u(c(M(x[1],T[0]),M(-T[1],x[0])),R[2]))),w[3]))),c(u(c(u(c(M(T[1],w[0]),M(-w[1],T[0])),x[2]),c(u(c(M(x[1],w[0]),M(-w[1],x[0])),-T[2]),u(c(M(x[1],T[0]),M(-T[1],x[0])),w[2]))),-R[3]),c(u(c(u(c(M(w[1],R[0]),M(-R[1],w[0])),x[2]),c(u(c(M(x[1],R[0]),M(-R[1],x[0])),-w[2]),u(c(M(x[1],w[0]),M(-w[1],x[0])),R[2]))),S[3]),u(c(u(c(M(w[1],R[0]),M(-R[1],w[0])),S[2]),c(u(c(M(S[1],R[0]),M(-R[1],S[0])),-w[2]),u(c(M(S[1],w[0]),M(-w[1],S[0])),R[2]))),-x[3])))),c(c(u(c(u(c(M(x[1],R[0]),M(-R[1],x[0])),S[2]),c(u(c(M(S[1],R[0]),M(-R[1],S[0])),-x[2]),u(c(M(S[1],x[0]),M(-x[1],S[0])),R[2]))),w[3]),c(u(c(u(c(M(x[1],w[0]),M(-w[1],x[0])),S[2]),c(u(c(M(S[1],w[0]),M(-w[1],S[0])),-x[2]),u(c(M(S[1],x[0]),M(-x[1],S[0])),w[2]))),-R[3]),u(c(u(c(M(T[1],w[0]),M(-w[1],T[0])),x[2]),c(u(c(M(x[1],w[0]),M(-w[1],x[0])),-T[2]),u(c(M(x[1],T[0]),M(-T[1],x[0])),w[2]))),S[3]))),c(u(c(u(c(M(T[1],w[0]),M(-w[1],T[0])),S[2]),c(u(c(M(S[1],w[0]),M(-w[1],S[0])),-T[2]),u(c(M(S[1],T[0]),M(-T[1],S[0])),w[2]))),-x[3]),c(u(c(u(c(M(x[1],w[0]),M(-w[1],x[0])),S[2]),c(u(c(M(S[1],w[0]),M(-w[1],S[0])),-x[2]),u(c(M(S[1],x[0]),M(-x[1],S[0])),w[2]))),T[3]),u(c(u(c(M(x[1],T[0]),M(-T[1],x[0])),S[2]),c(u(c(M(S[1],T[0]),M(-T[1],S[0])),-x[2]),u(c(M(S[1],x[0]),M(-x[1],S[0])),T[2]))),-w[3]))))),F=c(c(c(u(c(u(c(M(w[1],R[0]),M(-R[1],w[0])),T[2]),c(u(c(M(T[1],R[0]),M(-R[1],T[0])),-w[2]),u(c(M(T[1],w[0]),M(-w[1],T[0])),R[2]))),S[3]),u(c(u(c(M(w[1],R[0]),M(-R[1],w[0])),S[2]),c(u(c(M(S[1],R[0]),M(-R[1],S[0])),-w[2]),u(c(M(S[1],w[0]),M(-w[1],S[0])),R[2]))),-T[3])),c(u(c(u(c(M(T[1],R[0]),M(-R[1],T[0])),S[2]),c(u(c(M(S[1],R[0]),M(-R[1],S[0])),-T[2]),u(c(M(S[1],T[0]),M(-T[1],S[0])),R[2]))),w[3]),u(c(u(c(M(T[1],w[0]),M(-w[1],T[0])),S[2]),c(u(c(M(S[1],w[0]),M(-w[1],S[0])),-T[2]),u(c(M(S[1],T[0]),M(-T[1],S[0])),w[2]))),-R[3]))),c(c(u(c(u(c(M(T[1],R[0]),M(-R[1],T[0])),x[2]),c(u(c(M(x[1],R[0]),M(-R[1],x[0])),-T[2]),u(c(M(x[1],T[0]),M(-T[1],x[0])),R[2]))),S[3]),u(c(u(c(M(T[1],R[0]),M(-R[1],T[0])),S[2]),c(u(c(M(S[1],R[0]),M(-R[1],S[0])),-T[2]),u(c(M(S[1],T[0]),M(-T[1],S[0])),R[2]))),-x[3])),c(u(c(u(c(M(x[1],R[0]),M(-R[1],x[0])),S[2]),c(u(c(M(S[1],R[0]),M(-R[1],S[0])),-x[2]),u(c(M(S[1],x[0]),M(-x[1],S[0])),R[2]))),T[3]),u(c(u(c(M(x[1],T[0]),M(-T[1],x[0])),S[2]),c(u(c(M(S[1],T[0]),M(-T[1],S[0])),-x[2]),u(c(M(S[1],x[0]),M(-x[1],S[0])),T[2]))),-R[3])))),O=C(N,F);return O[O.length-1]}}function m(c){var M=c===3?f:c===4?p:g;return M(n,e,r,s)}var y=m(3),E=m(4),v=[function(){return 0},function(){return 0},function(M,u){return u[0]-M[0]},function(M,u,C){var A=(M[1]-C[1])*(u[0]-C[0]),S=(M[0]-C[0])*(u[1]-C[1]),x=A-S,T;if(A>0){if(S<=0)return x;T=A+S}else if(A<0){if(S>=0)return x;T=-(A+S)}else return x;var w=l*T;return x>=w||x<=-w?x:y(M,u,C)},function(M,u,C,A){var S=M[0]-A[0],x=u[0]-A[0],T=C[0]-A[0],w=M[1]-A[1],R=u[1]-A[1],N=C[1]-A[1],F=M[2]-A[2],O=u[2]-A[2],z=C[2]-A[2],B=x*N,q=T*R,ot=T*w,it=S*N,ht=S*R,St=x*w,Mt=F*(B-q)+O*(ot-it)+z*(ht-St),xt=(Math.abs(B)+Math.abs(q))*Math.abs(F)+(Math.abs(ot)+Math.abs(it))*Math.abs(O)+(Math.abs(ht)+Math.abs(St))*Math.abs(z),Z=h*xt;return Mt>Z||-Mt>Z?Mt:E(M,u,C,A)}];function _(c){var M=v[c.length];return M||(M=v[c.length]=m(c.length)),M.apply(void 0,c)}function b(c,M,u,C,A,S,x){return function(w,R,N,F,O){switch(arguments.length){case 0:case 1:return 0;case 2:return C(w,R);case 3:return A(w,R,N);case 4:return S(w,R,N,F);case 5:return x(w,R,N,F,O)}for(var z=new Array(arguments.length),B=0;B<arguments.length;++B)z[B]=arguments[B];return c(z)}}function d(){for(;v.length<=o;)v.push(m(v.length));t.exports=b.apply(void 0,[_].concat(v));for(var c=0;c<=o;++c)t.exports[c]=v[c]}d()}}),uS=Qe({"node_modules/cdt2d/lib/monotone.js"(i,t){var e=Jo(),n=lS()[3],r=0,s=1,o=2;t.exports=E;function a(v,_,b,d,c){this.a=v,this.b=_,this.idx=b,this.lowerIds=d,this.upperIds=c}function l(v,_,b,d){this.a=v,this.b=_,this.type=b,this.idx=d}function h(v,_){var b=v.a[0]-_.a[0]||v.a[1]-_.a[1]||v.type-_.type;return b||v.type!==r&&(b=n(v.a,v.b,_.b),b)?b:v.idx-_.idx}function f(v,_){return n(v.a,v.b,_)}function p(v,_,b,d,c){for(var M=e.lt(_,d,f),u=e.gt(_,d,f),C=M;C<u;++C){for(var A=_[C],S=A.lowerIds,T=S.length;T>1&&n(b[S[T-2]],b[S[T-1]],d)>0;)v.push([S[T-1],S[T-2],c]),T-=1;S.length=T,S.push(c);for(var x=A.upperIds,T=x.length;T>1&&n(b[x[T-2]],b[x[T-1]],d)<0;)v.push([x[T-2],x[T-1],c]),T-=1;x.length=T,x.push(c)}}function g(v,_){var b;return v.a[0]<_.a[0]?b=n(v.a,v.b,_.a):b=n(_.b,_.a,v.a),b||(_.b[0]<v.b[0]?b=n(v.a,v.b,_.b):b=n(_.b,_.a,v.b),b||v.idx-_.idx)}function m(v,_,b){var d=e.le(v,b,g),c=v[d],M=c.upperIds,u=M[M.length-1];c.upperIds=[u],v.splice(d+1,0,new a(b.a,b.b,b.idx,[u],M))}function y(v,_,b){var d=b.a;b.a=b.b,b.b=d;var c=e.eq(v,b,g),M=v[c],u=v[c-1];u.upperIds=M.upperIds,v.splice(c,1)}function E(v,_){for(var b=v.length,d=_.length,c=[],M=0;M<b;++M)c.push(new l(v[M],null,r,M));for(var M=0;M<d;++M){var u=_[M],C=v[u[0]],A=v[u[1]];C[0]<A[0]?c.push(new l(C,A,o,M),new l(A,C,s,M)):C[0]>A[0]&&c.push(new l(A,C,o,M),new l(C,A,s,M))}c.sort(h);for(var S=c[0].a[0]-(1+Math.abs(c[0].a[0]))*Math.pow(2,-52),x=[new a([S,1],[S,0],-1,[],[])],T=[],M=0,w=c.length;M<w;++M){var R=c[M],N=R.type;N===r?p(T,x,v,R.a,R.idx):N===o?m(x,v,R):y(x,v,R)}return T}}}),hS=Qe({"node_modules/cdt2d/lib/triangulation.js"(i,t){var e=Jo();t.exports=o;function n(a,l){this.stars=a,this.edges=l}var r=n.prototype;function s(a,l,h){for(var f=1,p=a.length;f<p;f+=2)if(a[f-1]===l&&a[f]===h){a[f-1]=a[p-2],a[f]=a[p-1],a.length=p-2;return}}r.isConstraint=(function(){var a=[0,0];function l(h,f){return h[0]-f[0]||h[1]-f[1]}return function(h,f){return a[0]=Math.min(h,f),a[1]=Math.max(h,f),e.eq(this.edges,a,l)>=0}})(),r.removeTriangle=function(a,l,h){var f=this.stars;s(f[a],l,h),s(f[l],h,a),s(f[h],a,l)},r.addTriangle=function(a,l,h){var f=this.stars;f[a].push(l,h),f[l].push(h,a),f[h].push(a,l)},r.opposite=function(a,l){for(var h=this.stars[l],f=1,p=h.length;f<p;f+=2)if(h[f]===a)return h[f-1];return-1},r.flip=function(a,l){var h=this.opposite(a,l),f=this.opposite(l,a);this.removeTriangle(a,l,h),this.removeTriangle(l,a,f),this.addTriangle(a,f,h),this.addTriangle(l,h,f)},r.edges=function(){for(var a=this.stars,l=[],h=0,f=a.length;h<f;++h)for(var p=a[h],g=0,m=p.length;g<m;g+=2)l.push([p[g],p[g+1]]);return l},r.cells=function(){for(var a=this.stars,l=[],h=0,f=a.length;h<f;++h)for(var p=a[h],g=0,m=p.length;g<m;g+=2){var y=p[g],E=p[g+1];h<Math.min(y,E)&&l.push([h,y,E])}return l};function o(a,l){for(var h=new Array(a),f=0;f<a;++f)h[f]=[];return new n(h,l)}}}),fS=Qe({"node_modules/robust-in-sphere/in-sphere.js"(i,t){var e=Fl(),n=td(),r=nd(),s=ed(),o=6;function a(d){var c=d===3?p:d===4?g:d===5?m:y;return c(n,r,e,s)}function l(){return 0}function h(){return 0}function f(){return 0}function p(d,c,M,u){function C(A,S,x){var T=M(A[0],A[0]),w=u(T,S[0]),R=u(T,x[0]),N=M(S[0],S[0]),F=u(N,A[0]),O=u(N,x[0]),z=M(x[0],x[0]),B=u(z,A[0]),q=u(z,S[0]),ot=d(c(q,O),c(F,w)),it=c(B,R),ht=c(ot,it);return ht[ht.length-1]}return C}function g(d,c,M,u){function C(A,S,x,T){var w=d(M(A[0],A[0]),M(A[1],A[1])),R=u(w,S[0]),N=u(w,x[0]),F=u(w,T[0]),O=d(M(S[0],S[0]),M(S[1],S[1])),z=u(O,A[0]),B=u(O,x[0]),q=u(O,T[0]),ot=d(M(x[0],x[0]),M(x[1],x[1])),it=u(ot,A[0]),ht=u(ot,S[0]),St=u(ot,T[0]),Mt=d(M(T[0],T[0]),M(T[1],T[1])),xt=u(Mt,A[0]),Z=u(Mt,S[0]),Q=u(Mt,x[0]),at=d(d(u(c(Q,St),S[1]),d(u(c(Z,q),-x[1]),u(c(ht,B),T[1]))),d(u(c(Z,q),A[1]),d(u(c(xt,F),-S[1]),u(c(z,R),T[1])))),ct=d(d(u(c(Q,St),A[1]),d(u(c(xt,F),-x[1]),u(c(it,N),T[1]))),d(u(c(ht,B),A[1]),d(u(c(it,N),-S[1]),u(c(z,R),x[1])))),lt=c(at,ct);return lt[lt.length-1]}return C}function m(d,c,M,u){function C(A,S,x,T,w){var R=d(M(A[0],A[0]),d(M(A[1],A[1]),M(A[2],A[2]))),N=u(R,S[0]),F=u(R,x[0]),O=u(R,T[0]),z=u(R,w[0]),B=d(M(S[0],S[0]),d(M(S[1],S[1]),M(S[2],S[2]))),q=u(B,A[0]),ot=u(B,x[0]),it=u(B,T[0]),ht=u(B,w[0]),St=d(M(x[0],x[0]),d(M(x[1],x[1]),M(x[2],x[2]))),Mt=u(St,A[0]),xt=u(St,S[0]),Z=u(St,T[0]),Q=u(St,w[0]),at=d(M(T[0],T[0]),d(M(T[1],T[1]),M(T[2],T[2]))),ct=u(at,A[0]),lt=u(at,S[0]),wt=u(at,x[0]),Gt=u(at,w[0]),U=d(M(w[0],w[0]),d(M(w[1],w[1]),M(w[2],w[2]))),tt=u(U,A[0]),K=u(U,S[0]),$=u(U,x[0]),Y=u(U,T[0]),gt=d(d(d(u(d(u(c(Y,Gt),x[1]),d(u(c($,Q),-T[1]),u(c(wt,Z),w[1]))),S[2]),d(u(d(u(c(Y,Gt),S[1]),d(u(c(K,ht),-T[1]),u(c(lt,it),w[1]))),-x[2]),u(d(u(c($,Q),S[1]),d(u(c(K,ht),-x[1]),u(c(xt,ot),w[1]))),T[2]))),d(u(d(u(c(wt,Z),S[1]),d(u(c(lt,it),-x[1]),u(c(xt,ot),T[1]))),-w[2]),d(u(d(u(c(Y,Gt),S[1]),d(u(c(K,ht),-T[1]),u(c(lt,it),w[1]))),A[2]),u(d(u(c(Y,Gt),A[1]),d(u(c(tt,z),-T[1]),u(c(ct,O),w[1]))),-S[2])))),d(d(u(d(u(c(K,ht),A[1]),d(u(c(tt,z),-S[1]),u(c(q,N),w[1]))),T[2]),d(u(d(u(c(lt,it),A[1]),d(u(c(ct,O),-S[1]),u(c(q,N),T[1]))),-w[2]),u(d(u(c(wt,Z),S[1]),d(u(c(lt,it),-x[1]),u(c(xt,ot),T[1]))),A[2]))),d(u(d(u(c(wt,Z),A[1]),d(u(c(ct,O),-x[1]),u(c(Mt,F),T[1]))),-S[2]),d(u(d(u(c(lt,it),A[1]),d(u(c(ct,O),-S[1]),u(c(q,N),T[1]))),x[2]),u(d(u(c(xt,ot),A[1]),d(u(c(Mt,F),-S[1]),u(c(q,N),x[1]))),-T[2]))))),nt=d(d(d(u(d(u(c(Y,Gt),x[1]),d(u(c($,Q),-T[1]),u(c(wt,Z),w[1]))),A[2]),u(d(u(c(Y,Gt),A[1]),d(u(c(tt,z),-T[1]),u(c(ct,O),w[1]))),-x[2])),d(u(d(u(c($,Q),A[1]),d(u(c(tt,z),-x[1]),u(c(Mt,F),w[1]))),T[2]),u(d(u(c(wt,Z),A[1]),d(u(c(ct,O),-x[1]),u(c(Mt,F),T[1]))),-w[2]))),d(d(u(d(u(c($,Q),S[1]),d(u(c(K,ht),-x[1]),u(c(xt,ot),w[1]))),A[2]),u(d(u(c($,Q),A[1]),d(u(c(tt,z),-x[1]),u(c(Mt,F),w[1]))),-S[2])),d(u(d(u(c(K,ht),A[1]),d(u(c(tt,z),-S[1]),u(c(q,N),w[1]))),x[2]),u(d(u(c(xt,ot),A[1]),d(u(c(Mt,F),-S[1]),u(c(q,N),x[1]))),-w[2])))),rt=c(gt,nt);return rt[rt.length-1]}return C}function y(d,c,M,u){function C(A,S,x,T,w,R){var N=d(d(M(A[0],A[0]),M(A[1],A[1])),d(M(A[2],A[2]),M(A[3],A[3]))),F=u(N,S[0]),O=u(N,x[0]),z=u(N,T[0]),B=u(N,w[0]),q=u(N,R[0]),ot=d(d(M(S[0],S[0]),M(S[1],S[1])),d(M(S[2],S[2]),M(S[3],S[3]))),it=u(ot,A[0]),ht=u(ot,x[0]),St=u(ot,T[0]),Mt=u(ot,w[0]),xt=u(ot,R[0]),Z=d(d(M(x[0],x[0]),M(x[1],x[1])),d(M(x[2],x[2]),M(x[3],x[3]))),Q=u(Z,A[0]),at=u(Z,S[0]),ct=u(Z,T[0]),lt=u(Z,w[0]),wt=u(Z,R[0]),Gt=d(d(M(T[0],T[0]),M(T[1],T[1])),d(M(T[2],T[2]),M(T[3],T[3]))),U=u(Gt,A[0]),tt=u(Gt,S[0]),K=u(Gt,x[0]),$=u(Gt,w[0]),Y=u(Gt,R[0]),gt=d(d(M(w[0],w[0]),M(w[1],w[1])),d(M(w[2],w[2]),M(w[3],w[3]))),nt=u(gt,A[0]),rt=u(gt,S[0]),Ct=u(gt,x[0]),Rt=u(gt,T[0]),L=u(gt,R[0]),P=d(d(M(R[0],R[0]),M(R[1],R[1])),d(M(R[2],R[2]),M(R[3],R[3]))),H=u(P,A[0]),W=u(P,S[0]),et=u(P,x[0]),X=u(P,T[0]),vt=u(P,w[0]),_t=d(d(d(u(d(d(u(d(u(c(vt,L),T[1]),d(u(c(X,Y),-w[1]),u(c(Rt,$),R[1]))),x[2]),u(d(u(c(vt,L),x[1]),d(u(c(et,wt),-w[1]),u(c(Ct,lt),R[1]))),-T[2])),d(u(d(u(c(X,Y),x[1]),d(u(c(et,wt),-T[1]),u(c(K,ct),R[1]))),w[2]),u(d(u(c(Rt,$),x[1]),d(u(c(Ct,lt),-T[1]),u(c(K,ct),w[1]))),-R[2]))),S[3]),d(u(d(d(u(d(u(c(vt,L),T[1]),d(u(c(X,Y),-w[1]),u(c(Rt,$),R[1]))),S[2]),u(d(u(c(vt,L),S[1]),d(u(c(W,xt),-w[1]),u(c(rt,Mt),R[1]))),-T[2])),d(u(d(u(c(X,Y),S[1]),d(u(c(W,xt),-T[1]),u(c(tt,St),R[1]))),w[2]),u(d(u(c(Rt,$),S[1]),d(u(c(rt,Mt),-T[1]),u(c(tt,St),w[1]))),-R[2]))),-x[3]),u(d(d(u(d(u(c(vt,L),x[1]),d(u(c(et,wt),-w[1]),u(c(Ct,lt),R[1]))),S[2]),u(d(u(c(vt,L),S[1]),d(u(c(W,xt),-w[1]),u(c(rt,Mt),R[1]))),-x[2])),d(u(d(u(c(et,wt),S[1]),d(u(c(W,xt),-x[1]),u(c(at,ht),R[1]))),w[2]),u(d(u(c(Ct,lt),S[1]),d(u(c(rt,Mt),-x[1]),u(c(at,ht),w[1]))),-R[2]))),T[3]))),d(d(u(d(d(u(d(u(c(X,Y),x[1]),d(u(c(et,wt),-T[1]),u(c(K,ct),R[1]))),S[2]),u(d(u(c(X,Y),S[1]),d(u(c(W,xt),-T[1]),u(c(tt,St),R[1]))),-x[2])),d(u(d(u(c(et,wt),S[1]),d(u(c(W,xt),-x[1]),u(c(at,ht),R[1]))),T[2]),u(d(u(c(K,ct),S[1]),d(u(c(tt,St),-x[1]),u(c(at,ht),T[1]))),-R[2]))),-w[3]),u(d(d(u(d(u(c(Rt,$),x[1]),d(u(c(Ct,lt),-T[1]),u(c(K,ct),w[1]))),S[2]),u(d(u(c(Rt,$),S[1]),d(u(c(rt,Mt),-T[1]),u(c(tt,St),w[1]))),-x[2])),d(u(d(u(c(Ct,lt),S[1]),d(u(c(rt,Mt),-x[1]),u(c(at,ht),w[1]))),T[2]),u(d(u(c(K,ct),S[1]),d(u(c(tt,St),-x[1]),u(c(at,ht),T[1]))),-w[2]))),R[3])),d(u(d(d(u(d(u(c(vt,L),T[1]),d(u(c(X,Y),-w[1]),u(c(Rt,$),R[1]))),S[2]),u(d(u(c(vt,L),S[1]),d(u(c(W,xt),-w[1]),u(c(rt,Mt),R[1]))),-T[2])),d(u(d(u(c(X,Y),S[1]),d(u(c(W,xt),-T[1]),u(c(tt,St),R[1]))),w[2]),u(d(u(c(Rt,$),S[1]),d(u(c(rt,Mt),-T[1]),u(c(tt,St),w[1]))),-R[2]))),A[3]),u(d(d(u(d(u(c(vt,L),T[1]),d(u(c(X,Y),-w[1]),u(c(Rt,$),R[1]))),A[2]),u(d(u(c(vt,L),A[1]),d(u(c(H,q),-w[1]),u(c(nt,B),R[1]))),-T[2])),d(u(d(u(c(X,Y),A[1]),d(u(c(H,q),-T[1]),u(c(U,z),R[1]))),w[2]),u(d(u(c(Rt,$),A[1]),d(u(c(nt,B),-T[1]),u(c(U,z),w[1]))),-R[2]))),-S[3])))),d(d(d(u(d(d(u(d(u(c(vt,L),S[1]),d(u(c(W,xt),-w[1]),u(c(rt,Mt),R[1]))),A[2]),u(d(u(c(vt,L),A[1]),d(u(c(H,q),-w[1]),u(c(nt,B),R[1]))),-S[2])),d(u(d(u(c(W,xt),A[1]),d(u(c(H,q),-S[1]),u(c(it,F),R[1]))),w[2]),u(d(u(c(rt,Mt),A[1]),d(u(c(nt,B),-S[1]),u(c(it,F),w[1]))),-R[2]))),T[3]),u(d(d(u(d(u(c(X,Y),S[1]),d(u(c(W,xt),-T[1]),u(c(tt,St),R[1]))),A[2]),u(d(u(c(X,Y),A[1]),d(u(c(H,q),-T[1]),u(c(U,z),R[1]))),-S[2])),d(u(d(u(c(W,xt),A[1]),d(u(c(H,q),-S[1]),u(c(it,F),R[1]))),T[2]),u(d(u(c(tt,St),A[1]),d(u(c(U,z),-S[1]),u(c(it,F),T[1]))),-R[2]))),-w[3])),d(u(d(d(u(d(u(c(Rt,$),S[1]),d(u(c(rt,Mt),-T[1]),u(c(tt,St),w[1]))),A[2]),u(d(u(c(Rt,$),A[1]),d(u(c(nt,B),-T[1]),u(c(U,z),w[1]))),-S[2])),d(u(d(u(c(rt,Mt),A[1]),d(u(c(nt,B),-S[1]),u(c(it,F),w[1]))),T[2]),u(d(u(c(tt,St),A[1]),d(u(c(U,z),-S[1]),u(c(it,F),T[1]))),-w[2]))),R[3]),u(d(d(u(d(u(c(X,Y),x[1]),d(u(c(et,wt),-T[1]),u(c(K,ct),R[1]))),S[2]),u(d(u(c(X,Y),S[1]),d(u(c(W,xt),-T[1]),u(c(tt,St),R[1]))),-x[2])),d(u(d(u(c(et,wt),S[1]),d(u(c(W,xt),-x[1]),u(c(at,ht),R[1]))),T[2]),u(d(u(c(K,ct),S[1]),d(u(c(tt,St),-x[1]),u(c(at,ht),T[1]))),-R[2]))),A[3]))),d(d(u(d(d(u(d(u(c(X,Y),x[1]),d(u(c(et,wt),-T[1]),u(c(K,ct),R[1]))),A[2]),u(d(u(c(X,Y),A[1]),d(u(c(H,q),-T[1]),u(c(U,z),R[1]))),-x[2])),d(u(d(u(c(et,wt),A[1]),d(u(c(H,q),-x[1]),u(c(Q,O),R[1]))),T[2]),u(d(u(c(K,ct),A[1]),d(u(c(U,z),-x[1]),u(c(Q,O),T[1]))),-R[2]))),-S[3]),u(d(d(u(d(u(c(X,Y),S[1]),d(u(c(W,xt),-T[1]),u(c(tt,St),R[1]))),A[2]),u(d(u(c(X,Y),A[1]),d(u(c(H,q),-T[1]),u(c(U,z),R[1]))),-S[2])),d(u(d(u(c(W,xt),A[1]),d(u(c(H,q),-S[1]),u(c(it,F),R[1]))),T[2]),u(d(u(c(tt,St),A[1]),d(u(c(U,z),-S[1]),u(c(it,F),T[1]))),-R[2]))),x[3])),d(u(d(d(u(d(u(c(et,wt),S[1]),d(u(c(W,xt),-x[1]),u(c(at,ht),R[1]))),A[2]),u(d(u(c(et,wt),A[1]),d(u(c(H,q),-x[1]),u(c(Q,O),R[1]))),-S[2])),d(u(d(u(c(W,xt),A[1]),d(u(c(H,q),-S[1]),u(c(it,F),R[1]))),x[2]),u(d(u(c(at,ht),A[1]),d(u(c(Q,O),-S[1]),u(c(it,F),x[1]))),-R[2]))),-T[3]),u(d(d(u(d(u(c(K,ct),S[1]),d(u(c(tt,St),-x[1]),u(c(at,ht),T[1]))),A[2]),u(d(u(c(K,ct),A[1]),d(u(c(U,z),-x[1]),u(c(Q,O),T[1]))),-S[2])),d(u(d(u(c(tt,St),A[1]),d(u(c(U,z),-S[1]),u(c(it,F),T[1]))),x[2]),u(d(u(c(at,ht),A[1]),d(u(c(Q,O),-S[1]),u(c(it,F),x[1]))),-T[2]))),R[3]))))),It=d(d(d(u(d(d(u(d(u(c(vt,L),T[1]),d(u(c(X,Y),-w[1]),u(c(Rt,$),R[1]))),x[2]),u(d(u(c(vt,L),x[1]),d(u(c(et,wt),-w[1]),u(c(Ct,lt),R[1]))),-T[2])),d(u(d(u(c(X,Y),x[1]),d(u(c(et,wt),-T[1]),u(c(K,ct),R[1]))),w[2]),u(d(u(c(Rt,$),x[1]),d(u(c(Ct,lt),-T[1]),u(c(K,ct),w[1]))),-R[2]))),A[3]),d(u(d(d(u(d(u(c(vt,L),T[1]),d(u(c(X,Y),-w[1]),u(c(Rt,$),R[1]))),A[2]),u(d(u(c(vt,L),A[1]),d(u(c(H,q),-w[1]),u(c(nt,B),R[1]))),-T[2])),d(u(d(u(c(X,Y),A[1]),d(u(c(H,q),-T[1]),u(c(U,z),R[1]))),w[2]),u(d(u(c(Rt,$),A[1]),d(u(c(nt,B),-T[1]),u(c(U,z),w[1]))),-R[2]))),-x[3]),u(d(d(u(d(u(c(vt,L),x[1]),d(u(c(et,wt),-w[1]),u(c(Ct,lt),R[1]))),A[2]),u(d(u(c(vt,L),A[1]),d(u(c(H,q),-w[1]),u(c(nt,B),R[1]))),-x[2])),d(u(d(u(c(et,wt),A[1]),d(u(c(H,q),-x[1]),u(c(Q,O),R[1]))),w[2]),u(d(u(c(Ct,lt),A[1]),d(u(c(nt,B),-x[1]),u(c(Q,O),w[1]))),-R[2]))),T[3]))),d(d(u(d(d(u(d(u(c(X,Y),x[1]),d(u(c(et,wt),-T[1]),u(c(K,ct),R[1]))),A[2]),u(d(u(c(X,Y),A[1]),d(u(c(H,q),-T[1]),u(c(U,z),R[1]))),-x[2])),d(u(d(u(c(et,wt),A[1]),d(u(c(H,q),-x[1]),u(c(Q,O),R[1]))),T[2]),u(d(u(c(K,ct),A[1]),d(u(c(U,z),-x[1]),u(c(Q,O),T[1]))),-R[2]))),-w[3]),u(d(d(u(d(u(c(Rt,$),x[1]),d(u(c(Ct,lt),-T[1]),u(c(K,ct),w[1]))),A[2]),u(d(u(c(Rt,$),A[1]),d(u(c(nt,B),-T[1]),u(c(U,z),w[1]))),-x[2])),d(u(d(u(c(Ct,lt),A[1]),d(u(c(nt,B),-x[1]),u(c(Q,O),w[1]))),T[2]),u(d(u(c(K,ct),A[1]),d(u(c(U,z),-x[1]),u(c(Q,O),T[1]))),-w[2]))),R[3])),d(u(d(d(u(d(u(c(vt,L),x[1]),d(u(c(et,wt),-w[1]),u(c(Ct,lt),R[1]))),S[2]),u(d(u(c(vt,L),S[1]),d(u(c(W,xt),-w[1]),u(c(rt,Mt),R[1]))),-x[2])),d(u(d(u(c(et,wt),S[1]),d(u(c(W,xt),-x[1]),u(c(at,ht),R[1]))),w[2]),u(d(u(c(Ct,lt),S[1]),d(u(c(rt,Mt),-x[1]),u(c(at,ht),w[1]))),-R[2]))),A[3]),u(d(d(u(d(u(c(vt,L),x[1]),d(u(c(et,wt),-w[1]),u(c(Ct,lt),R[1]))),A[2]),u(d(u(c(vt,L),A[1]),d(u(c(H,q),-w[1]),u(c(nt,B),R[1]))),-x[2])),d(u(d(u(c(et,wt),A[1]),d(u(c(H,q),-x[1]),u(c(Q,O),R[1]))),w[2]),u(d(u(c(Ct,lt),A[1]),d(u(c(nt,B),-x[1]),u(c(Q,O),w[1]))),-R[2]))),-S[3])))),d(d(d(u(d(d(u(d(u(c(vt,L),S[1]),d(u(c(W,xt),-w[1]),u(c(rt,Mt),R[1]))),A[2]),u(d(u(c(vt,L),A[1]),d(u(c(H,q),-w[1]),u(c(nt,B),R[1]))),-S[2])),d(u(d(u(c(W,xt),A[1]),d(u(c(H,q),-S[1]),u(c(it,F),R[1]))),w[2]),u(d(u(c(rt,Mt),A[1]),d(u(c(nt,B),-S[1]),u(c(it,F),w[1]))),-R[2]))),x[3]),u(d(d(u(d(u(c(et,wt),S[1]),d(u(c(W,xt),-x[1]),u(c(at,ht),R[1]))),A[2]),u(d(u(c(et,wt),A[1]),d(u(c(H,q),-x[1]),u(c(Q,O),R[1]))),-S[2])),d(u(d(u(c(W,xt),A[1]),d(u(c(H,q),-S[1]),u(c(it,F),R[1]))),x[2]),u(d(u(c(at,ht),A[1]),d(u(c(Q,O),-S[1]),u(c(it,F),x[1]))),-R[2]))),-w[3])),d(u(d(d(u(d(u(c(Ct,lt),S[1]),d(u(c(rt,Mt),-x[1]),u(c(at,ht),w[1]))),A[2]),u(d(u(c(Ct,lt),A[1]),d(u(c(nt,B),-x[1]),u(c(Q,O),w[1]))),-S[2])),d(u(d(u(c(rt,Mt),A[1]),d(u(c(nt,B),-S[1]),u(c(it,F),w[1]))),x[2]),u(d(u(c(at,ht),A[1]),d(u(c(Q,O),-S[1]),u(c(it,F),x[1]))),-w[2]))),R[3]),u(d(d(u(d(u(c(Rt,$),x[1]),d(u(c(Ct,lt),-T[1]),u(c(K,ct),w[1]))),S[2]),u(d(u(c(Rt,$),S[1]),d(u(c(rt,Mt),-T[1]),u(c(tt,St),w[1]))),-x[2])),d(u(d(u(c(Ct,lt),S[1]),d(u(c(rt,Mt),-x[1]),u(c(at,ht),w[1]))),T[2]),u(d(u(c(K,ct),S[1]),d(u(c(tt,St),-x[1]),u(c(at,ht),T[1]))),-w[2]))),A[3]))),d(d(u(d(d(u(d(u(c(Rt,$),x[1]),d(u(c(Ct,lt),-T[1]),u(c(K,ct),w[1]))),A[2]),u(d(u(c(Rt,$),A[1]),d(u(c(nt,B),-T[1]),u(c(U,z),w[1]))),-x[2])),d(u(d(u(c(Ct,lt),A[1]),d(u(c(nt,B),-x[1]),u(c(Q,O),w[1]))),T[2]),u(d(u(c(K,ct),A[1]),d(u(c(U,z),-x[1]),u(c(Q,O),T[1]))),-w[2]))),-S[3]),u(d(d(u(d(u(c(Rt,$),S[1]),d(u(c(rt,Mt),-T[1]),u(c(tt,St),w[1]))),A[2]),u(d(u(c(Rt,$),A[1]),d(u(c(nt,B),-T[1]),u(c(U,z),w[1]))),-S[2])),d(u(d(u(c(rt,Mt),A[1]),d(u(c(nt,B),-S[1]),u(c(it,F),w[1]))),T[2]),u(d(u(c(tt,St),A[1]),d(u(c(U,z),-S[1]),u(c(it,F),T[1]))),-w[2]))),x[3])),d(u(d(d(u(d(u(c(Ct,lt),S[1]),d(u(c(rt,Mt),-x[1]),u(c(at,ht),w[1]))),A[2]),u(d(u(c(Ct,lt),A[1]),d(u(c(nt,B),-x[1]),u(c(Q,O),w[1]))),-S[2])),d(u(d(u(c(rt,Mt),A[1]),d(u(c(nt,B),-S[1]),u(c(it,F),w[1]))),x[2]),u(d(u(c(at,ht),A[1]),d(u(c(Q,O),-S[1]),u(c(it,F),x[1]))),-w[2]))),-T[3]),u(d(d(u(d(u(c(K,ct),S[1]),d(u(c(tt,St),-x[1]),u(c(at,ht),T[1]))),A[2]),u(d(u(c(K,ct),A[1]),d(u(c(U,z),-x[1]),u(c(Q,O),T[1]))),-S[2])),d(u(d(u(c(tt,St),A[1]),d(u(c(U,z),-S[1]),u(c(it,F),T[1]))),x[2]),u(d(u(c(at,ht),A[1]),d(u(c(Q,O),-S[1]),u(c(it,F),x[1]))),-T[2]))),w[3]))))),Dt=c(_t,It);return Dt[Dt.length-1]}return C}var E=[l,h,f];function v(d){var c=E[d.length];return c||(c=E[d.length]=a(d.length)),c.apply(void 0,d)}function _(d,c,M,u,C,A,S,x){function T(w,R,N,F,O,z){switch(arguments.length){case 0:case 1:return 0;case 2:return u(w,R);case 3:return C(w,R,N);case 4:return A(w,R,N,F);case 5:return S(w,R,N,F,O);case 6:return x(w,R,N,F,O,z)}for(var B=new Array(arguments.length),q=0;q<arguments.length;++q)B[q]=arguments[q];return d(B)}return T}function b(){for(;E.length<=o;)E.push(a(E.length));t.exports=_.apply(void 0,[v].concat(E));for(var d=0;d<=o;++d)t.exports[d]=E[d]}b()}}),dS=Qe({"node_modules/cdt2d/lib/delaunay.js"(i,t){var e=fS()[4];Jo(),t.exports=r;function n(s,o,a,l,h,f){var p=o.opposite(l,h);if(!(p<0)){if(h<l){var g=l;l=h,h=g,g=f,f=p,p=g}o.isConstraint(l,h)||e(s[l],s[h],s[f],s[p])<0&&a.push(l,h)}}function r(s,o){for(var a=[],l=s.length,h=o.stars,f=0;f<l;++f)for(var p=h[f],g=1;g<p.length;g+=2){var m=p[g];if(!(m<f)&&!o.isConstraint(f,m)){for(var y=p[g-1],E=-1,v=1;v<p.length;v+=2)if(p[v-1]===m){E=p[v];break}E<0||e(s[f],s[m],s[y],s[E])<0&&a.push(f,m)}}for(;a.length>0;){for(var m=a.pop(),f=a.pop(),y=-1,E=-1,p=h[f],_=1;_<p.length;_+=2){var b=p[_-1],d=p[_];b===m?E=d:d===m&&(y=b)}y<0||E<0||e(s[f],s[m],s[y],s[E])>=0||(o.flip(f,m),n(s,o,a,y,f,E),n(s,o,a,f,E,y),n(s,o,a,E,m,y),n(s,o,a,m,y,E))}}}}),pS=Qe({"node_modules/cdt2d/lib/filter.js"(i,t){var e=Jo();t.exports=l;function n(h,f,p,g,m,y,E){this.cells=h,this.neighbor=f,this.flags=g,this.constraint=p,this.active=m,this.next=y,this.boundary=E}var r=n.prototype;function s(h,f){return h[0]-f[0]||h[1]-f[1]||h[2]-f[2]}r.locate=(function(){var h=[0,0,0];return function(f,p,g){var m=f,y=p,E=g;return p<g?p<f&&(m=p,y=g,E=f):g<f&&(m=g,y=f,E=p),m<0?-1:(h[0]=m,h[1]=y,h[2]=E,e.eq(this.cells,h,s))}})();function o(h,f){for(var p=h.cells(),g=p.length,m=0;m<g;++m){var y=p[m],E=y[0],v=y[1],_=y[2];v<_?v<E&&(y[0]=v,y[1]=_,y[2]=E):_<E&&(y[0]=_,y[1]=E,y[2]=v)}p.sort(s);for(var b=new Array(g),m=0;m<b.length;++m)b[m]=0;var d=[],c=[],M=new Array(3*g),u=new Array(3*g),C=null;f&&(C=[]);for(var A=new n(p,M,u,b,d,c,C),m=0;m<g;++m)for(var y=p[m],S=0;S<3;++S){var E=y[S],v=y[(S+1)%3],x=M[3*m+S]=A.locate(v,E,h.opposite(v,E)),T=u[3*m+S]=h.isConstraint(E,v);x<0&&(T?c.push(m):(d.push(m),b[m]=1),f&&C.push([v,E,-1]))}return A}function a(h,f,p){for(var g=0,m=0;m<h.length;++m)f[m]===p&&(h[g++]=h[m]);return h.length=g,h}function l(h,f,p){var g=o(h,p);if(f===0)return p?g.cells.concat(g.boundary):g.cells;for(var m=1,y=g.active,E=g.next,v=g.flags,_=g.cells,b=g.constraint,d=g.neighbor;y.length>0||E.length>0;){for(;y.length>0;){var c=y.pop();if(v[c]!==-m){v[c]=m,_[c];for(var M=0;M<3;++M){var u=d[3*c+M];u>=0&&v[u]===0&&(b[3*c+M]?E.push(u):(y.push(u),v[u]=m))}}}var C=E;E=y,y=C,E.length=0,m=-m}var A=a(_,v,f);return p?A.concat(g.boundary):A}}}),gS=Qe({"node_modules/cdt2d/cdt2d.js"(i,t){var e=uS(),n=hS(),r=dS(),s=pS();t.exports=f;function o(p){return[Math.min(p[0],p[1]),Math.max(p[0],p[1])]}function a(p,g){return p[0]-g[0]||p[1]-g[1]}function l(p){return p.map(o).sort(a)}function h(p,g,m){return g in p?p[g]:m}function f(p,g,m){Array.isArray(g)?(m=m||{},g=g||[]):(m=g||{},g=[]);var y=!!h(m,"delaunay",!0),E=!!h(m,"interior",!0),v=!!h(m,"exterior",!0),_=!!h(m,"infinity",!1);if(!E&&!v||p.length===0)return[];var b=e(p,g);if(y||E!==v||_){for(var d=n(p.length,l(g)),c=0;c<b.length;++c){var M=b[c];d.addTriangle(M[0],M[1],M[2])}return y&&r(p,d),v?E?_?s(d,0,_):d.cells():s(d,1,_):s(d,-1)}else return b}}});const mS=gS();class Hi{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}const Ah=1e-16,_S=1e-16,Ni=new I,wh=new I,Rh=new Hi(()=>({param:0,index:0})),vS=new Hi(()=>new I);function xS(i,t,e,n){Rh.clear(),t.length=0,e.length=0;for(let h=0,f=i.length;h<f;h++){const p=i[h];l(p.start),l(p.end)}for(let h=0,f=i.length;h<f;h++){const p=i[h];for(let g=h+1;g<f;g++){const m=i[g];p.distanceSqToLine3(m,Ni,wh)<Ah*n&&l(wh)}}const r=[];for(let h=0,f=i.length;h<f;h++){r.length=0;const p=i[h];for(let g=0,m=t.length;g<m;g++){const y=t[g],E=p.closestPointToPointParameter(y,!0);if(p.at(E,Ni),y.distanceToSquared(Ni)<Ah*n){const v=Rh.getInstance();v.param=E,v.index=g,r.push(v)}}r.sort(a);for(let g=0,m=r.length-1;g<m;g++){const y=r[g].index,E=r[g+1].index;y!==E&&e.push([y,E])}}const s=new Set;let o=0;for(let h=0,f=e.length;h<f;h++){const p=e[h],g=Math.min(p[0],p[1]),m=Math.max(p[0],p[1]),y=g+","+m;s.has(y)||(s.add(y),e[o++]=p)}e.length=o;function a(h,f){return h.param-f.param}function l(h){for(let f=0;f<t.length;f++){const p=t[f];if(h===p||h.distanceToSquared(p)<_S*n)return f}return t.push(vS.getInstance().copy(h)),t.length-1}}class Ch{constructor(){this.trianglePool=new Hi(()=>new Xe),this.linePool=new Hi(()=>new Re),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new I,this.projOrigin=new I,this.projU=new I,this.projV=new I,this.baseTri=new Xe,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,r=null){this.reset();const{normal:s,baseTri:o,projU:a,projV:l,projOrigin:h,constrainedEdges:f,linePool:p,baseIndices:g}=this;t.getNormal(s),o.copy(t),o.update(),g[0]=e,g[1]=n,g[2]=r,f.length=0;const m=p.getInstance();m.start.copy(o.a),m.end.copy(o.b);const y=p.getInstance();y.start.copy(o.b),y.end.copy(o.c);const E=p.getInstance();E.start.copy(o.c),E.end.copy(o.a),f.push(m,y,E),h.copy(o.a),a.subVectors(o.b,o.a).normalize(),l.crossVectors(s,a).normalize()}addConstraintEdge(t){const{constrainedEdges:e,linePool:n}=this,r=n.getInstance().copy(t);e.push(r)}_to2D(t,e){const{projOrigin:n,projU:r,projV:s}=this;return Ni.subVectors(t,n),e.set(Ni.dot(r),Ni.dot(s),0)}_from2D(t,e,n){const{projOrigin:r,projU:s,projV:o}=this;return n.copy(r).addScaledVector(s,t).addScaledVector(o,e),n}triangulate(){const{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:l}=this;t.length=0,e.clear();const h=[];for(let _=0,b=a.length;_<b;_++){const d=a[_],c=s.getInstance();this._to2D(d.start,c.start),this._to2D(d.end,c.end),h.push(c)}let f=0;for(let _=0;_<3;_++){const b=this._to2D(o.points[_],Ni);f=Math.max(f,Math.abs(b.x),Math.abs(b.y))}const p=[],g=[];xS(h,p,g,f);const m=[];for(let _=0,b=p.length;_<b;_++){const d=p[_];m.push([d.x,d.y])}const y=mS(m,g,{exterior:!1}),E=new Map;for(let _=0,b=g.length;_<b;_++){const d=g[_];E.set(`${d[0]}_${d[1]}`,-1),E.set(`${d[1]}_${d[0]}`,-1)}const v=`${l[0]}_${l[1]}_${l[2]}_`;for(let _=0,b=y.length;_<b;_++){const d=y[_],[c,M,u]=d,C=e.getInstance();this._from2D(m[c][0],m[c][1],C.a),this._from2D(m[M][0],m[M][1],C.b),this._from2D(m[u][0],m[u][1],C.c),t.push(C);const A=[];n.push(A);const S=[];r.push(S);for(let x=0;x<3;x++){const T=d[x];S.push(T<3?l[T]:v+T);const w=d[(x+1)%3],R=`${T}_${w}`;if(E.has(R)){const N=E.get(R);N!==-1&&(A.push(N),n[N].push(_))}else{const N=`${w}_${T}`;E.set(N,_)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}}const yS=1e-14,nc=new I,Ph=new I,Dh=new I;function ci(i,t=yS){nc.subVectors(i.b,i.a),Ph.subVectors(i.c,i.a),Dh.subVectors(i.b,i.c);const e=nc.angleTo(Ph),n=nc.angleTo(Dh),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const ic=1e-10,Qr=1e-10,Vn=new Re,ge=new Re,Hn=new I,Lh=new I,Ih=new I,vo=new an,rc=new Xe;class Uh{constructor(){this.trianglePool=new Hi(()=>new ce),this.triangles=[],this.normal=new I}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){const a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(Hn).dot(r))>ic)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const l=n.getInstance();l.copy(a),e.push(l)}else{t.getNormal(r);const s=n.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){const{triangles:n}=this;if(e){for(let s=0,o=n.length;s<o;s++){const a=n[s];a.coplanarCount=0}const r=[t.a,t.b,t.c];for(let s=0;s<3;s++){const o=(s+1)%3,a=r[s],l=r[o];t.getNormal(Lh).normalize(),Hn.subVectors(l,a).normalize(),Ih.crossVectors(Lh,Hn),vo.setFromNormalAndCoplanarPoint(Ih,a),this.splitByPlane(vo,t)}}else t.getPlane(vo),this.splitByPlane(vo,t)}splitByPlane(t,e){const{triangles:n,trianglePool:r}=this;rc.copy(e),rc.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){const a=n[s];if(!rc.intersectsTriangle(a,Vn,!0))continue;const{a:l,b:h,c:f}=a;let p=0,g=-1,m=!1,y=[],E=[];const v=[l,h,f];for(let _=0;_<3;_++){const b=(_+1)%3;Vn.start.copy(v[_]),Vn.end.copy(v[b]);const d=t.distanceToPoint(Vn.start),c=t.distanceToPoint(Vn.end);if(Math.abs(d)<Qr&&Math.abs(c)<Qr){m=!0;break}if(d>0?y.push(_):E.push(_),Math.abs(d)<Qr)continue;let M=!!t.intersectLine(Vn,Hn);!M&&Math.abs(c)<Qr&&(Hn.copy(Vn.end),M=!0),M&&!(Hn.distanceTo(Vn.start)<ic)&&(Hn.distanceTo(Vn.end)<ic&&(g=_),p===0?ge.start.copy(Hn):ge.end.copy(Hn),p++)}if(!m&&p===2&&ge.distance()>Qr)if(g!==-1){g=(g+1)%3;let _=0;_===g&&(_=(_+1)%3);let b=_+1;b===g&&(b=(b+1)%3);const d=r.getInstance();d.a.copy(v[b]),d.b.copy(ge.end),d.c.copy(ge.start),ci(d)||n.push(d),a.a.copy(v[_]),a.b.copy(ge.start),a.c.copy(ge.end),ci(a)&&(n.splice(s,1),s--,o--)}else{const _=y.length>=2?E[0]:y[0];if(_===0){let u=ge.start;ge.start=ge.end,ge.end=u}const b=(_+1)%3,d=(_+2)%3,c=r.getInstance(),M=r.getInstance();v[b].distanceToSquared(ge.start)<v[d].distanceToSquared(ge.end)?(c.a.copy(v[b]),c.b.copy(ge.start),c.c.copy(ge.end),M.a.copy(v[b]),M.b.copy(v[d]),M.c.copy(ge.start)):(c.a.copy(v[d]),c.b.copy(ge.start),c.c.copy(ge.end),M.a.copy(v[b]),M.b.copy(v[d]),M.c.copy(ge.end)),a.a.copy(v[_]),a.b.copy(ge.end),a.c.copy(ge.start),ci(c)||n.push(c),ci(M)||n.push(M),ci(a)&&(n.splice(s,1),s--,o--)}else p===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}}class Nh{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){const{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),n&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){const{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}}const id=0,SS=1,MS=2,ES=3,TS=4,rd=5,sd=6,sc=1e-10,bS=1e-15,AS=1e-10,wS=1e-10,Fh=new Re,vr=new Re,Oh=new I,Bh=new I,zh=new I,oc=new an,wr=new I,Go=new I;function RS(i,t){i.getNormal(wr),t.getNormal(Go);const e=wr.dot(Go);if(Math.abs(1-Math.abs(e))>=AS)return!1;const n=wr.dot(i.a),r=wr.dot(t.a);return Math.abs(n-r)<wS}function Vh(i,t,e,n){let r=0,s=1;i.delta(Oh);const o=[t.a,t.b,t.c];for(let a=0;a<3;a++){const l=o[a],h=o[(a+1)%3];Bh.subVectors(h,l),zh.crossVectors(e,Bh),oc.setFromNormalAndCoplanarPoint(zh,l);const f=oc.distanceToPoint(i.start),p=oc.normal.dot(Oh);if(Math.abs(p)<bS){if(f<-sc)return null;continue}const g=-f/p;if(p>0?r=Math.max(r,g):s=Math.min(s,g),r>s+sc)return null}return s-r<sc?null:(i.at(r,n.start),i.at(s,n.end),n)}function Hh(i,t,e){let n=0;i.getNormal(wr),t.getNormal(Go);const r=[t.a,t.b,t.c];for(let o=0;o<3;o++){vr.start.copy(r[o]),vr.end.copy(r[(o+1)%3]);const a=Vh(vr,i,wr,Fh);a!==null&&(n>=e.length&&e.push(new Re),e[n].copy(a),n++)}const s=[i.a,i.b,i.c];for(let o=0;o<3;o++){vr.start.copy(s[o]),vr.end.copy(s[(o+1)%3]);const a=Vh(vr,t,Go,Fh);a!==null&&(n>=e.length&&e.push(new Re),e[n].copy(a),n++)}return n}const xr=new Br,kh=new Kt,xo=new Re,ac=[],yo=new Hi(()=>new Re),Sr=-1,Mr=1,Lo=-2,Io=2,us=0,Ai=1,Ol=2;let Uo=null;function Gh(i){Uo=i}function od(i,t,e=null){i.getMidpoint(xr.origin),i.getNormal(xr.direction),e&&(xr.origin.applyMatrix4(e),xr.direction.transformDirection(e));const n=t.raycastFirst(xr,_n);return!!(n&&xr.direction.dot(n.face.normal)>0)?Sr:Mr}function CS(i,t){const e=new Nh,n=new Nh;return yo.clear(),kh.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,kh,{intersectsTriangles(r,s,o,a){if(!ci(r)&&!ci(s)){const h=(RS(r,s)?Hh(r,s,ac):0)>2;if(h||r.intersectsTriangle(s,xo,!0)){const p=i.geometry.boundsTree.resolveTriangleIndex(o),g=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(p,g,h),n.add(g,p,h),h){const m=Hh(r,s,ac);for(let y=0;y<m;y++){const E=yo.getInstance().copy(ac[y]);e.addIntersectionEdge(p,E),n.addIntersectionEdge(g,E)}}else{const m=yo.getInstance().copy(xo),y=yo.getInstance().copy(xo);e.addIntersectionEdge(p,m),n.addIntersectionEdge(g,y)}Uo&&(Uo.addEdge(xo),Uo.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function ad(i,t,e=!1){switch(i){case id:if(t===Mr||t===Io&&!e)return Ai;break;case SS:if(e){if(t===Sr)return us}else if(t===Mr||t===Lo)return Ai;break;case MS:if(e){if(t===Mr||t===Lo)return Ai}else if(t===Sr)return us;break;case TS:if(t===Sr)return us;if(t===Mr)return Ai;break;case ES:if(t===Sr||t===Io&&!e)return Ai;break;case rd:if(!e&&(t===Mr||t===Lo))return Ai;break;case sd:if(!e&&(t===Sr||t===Io))return Ai;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return Ol}class PS{constructor(t){this.triangle=new ce().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new ce().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class Wh{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){const{data:s}=this;s[t]||(s[t]=new PS(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,r=new Set,s=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&s.push(n[a].intersects[e]);else{const l=n[a].intersects;for(const h in l)r.has(h)||(r.add(h),s.push(l[h]))}};if(t!==null)o(t);else for(const a in n)o(a);return s}reset(){this.data={}}}class DS{constructor(){this.enabled=!1,this.triangleIntersectsA=new Wh,this.triangleIntersectsB=new Wh,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){const{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Gh(this))}complete(){this.enabled&&Gh(null)}}const Ke=new Kt,wi=new Kt,ke=new Kt,oi=new Xt,pn=new ce,Ri=new ce,gn=new ce,ii=new ce,Fi=[],bn=[],So=new Set,Xh=new I,qh=new I,Yh=new Hi(()=>new ce),$h=new I,Mo=[];function LS(i,t,e,n,r,s={}){const{useGroups:o=!0}=s,{aIntersections:a,bIntersections:l}=CS(i,t),h=[];let f=null,p;return p=o?0:-1,Kh(i,t,a,e,!1,r,p),Zh(i,t,a,e,!1,n,r,p),e.findIndex(m=>m!==sd&&m!==rd)!==-1&&(r.forEach(m=>m.clearIndexMap()),p=o?i.geometry.groups.length||1:-1,Kh(t,i,l,e,!0,r,p),Zh(t,i,l,e,!0,n,r,p)),r.forEach(m=>m.clearIndexMap()),Fi.length=0,{groups:h,materials:f}}function Zh(i,t,e,n,r,s,o,a=0){Ke.copy(t.matrixWorld).invert().multiply(i.matrixWorld),wi.copy(Ke).invert(),r?ke.copy(Ke):ke.identity();const l=ke.determinant()<0;oi.getNormalMatrix(ke).multiplyScalar(l?-1:1);const h=i.geometry.groupIndices,f=i.geometry.index,p=i.geometry.attributes.position,g=t.geometry.boundsTree,m=t.geometry.index,y=t.geometry.attributes.position,E=e.ids;for(let v=0,_=E.length;v<_;v++){const b=E[v],d=a===-1?0:h[b]+a,c=3*b;let M=c+0,u=c+1,C=c+2;f&&(M=f.getX(M),u=f.getX(u),C=f.getX(C)),pn.a.fromBufferAttribute(p,M),pn.b.fromBufferAttribute(p,u),pn.c.fromBufferAttribute(p,C),r&&(pn.a.applyMatrix4(Ke),pn.b.applyMatrix4(Ke),pn.c.applyMatrix4(Ke)),s.reset(),s.initialize(pn,M,u,C),Mo.length=0,Yh.clear(),pn.getNormal(qh);const A=e.coplanarSet.get(b);if(A)for(const w of A){const R=3*w;let N=R+0,F=R+1,O=R+2;m&&(N=m.getX(N),F=m.getX(F),O=m.getX(O));const z=Yh.getInstance();z.a.fromBufferAttribute(y,N),z.b.fromBufferAttribute(y,F),z.c.fromBufferAttribute(y,O),r||(z.a.applyMatrix4(wi),z.b.applyMatrix4(wi),z.c.applyMatrix4(wi)),Mo.push(z)}if(s.addConstraintEdge){const w=e.getIntersectionEdges(b);if(w)for(const R of w)s.addConstraintEdge(R);s.triangulate()}else{const R=e.intersectionSet.get(b);for(let N=0,F=R.length;N<F;N++){const O=R[N],z=A&&A.has(O),B=3*O;let q=B+0,ot=B+1,it=B+2;m&&(q=m.getX(q),ot=m.getX(ot),it=m.getX(it)),Ri.a.fromBufferAttribute(y,q),Ri.b.fromBufferAttribute(y,ot),Ri.c.fromBufferAttribute(y,it),r||(Ri.a.applyMatrix4(wi),Ri.b.applyMatrix4(wi),Ri.c.applyMatrix4(wi)),s.splitByTriangle(Ri,z)}}const{triangles:S,triangleIndices:x=[],triangleConnectivity:T=[]}=s;for(let w=0,R=o.length;w<R;w++)o[w].initInterpolatedAttributeData(i.geometry,ke,oi,M,u,C);So.clear();for(let w=0,R=S.length;w<R;w++){if(So.has(w))continue;const N=S[w],F=r?null:Ke;let O=null;N.getMidpoint(Xh);for(let z=0,B=Mo.length;z<B;z++){const q=Mo[z];if(q.containsPoint(Xh)){q.getNormal($h),O=qh.dot($h)>0?Io:Lo;break}}O===null&&(O=od(N,g,F)),Fi.length=0,bn.length=0;for(let z=0,B=n.length;z<B;z++){const q=ad(n[z],O,r);q!==Ol&&(Fi.push(q),bn.push(o[z]))}if(bn.length!==0){const z=[w];for(;z.length>0;){const B=z.pop();if(So.has(B))continue;So.add(B);const q=x[B];let ot=null,it=null,ht=null;q&&(ot=q[0],it=q[1],ht=q[2]);const St=S[B];pn.getBarycoord(St.a,ii.a),pn.getBarycoord(St.b,ii.b),pn.getBarycoord(St.c,ii.c);for(let Mt=0,xt=bn.length;Mt<xt;Mt++){const Z=bn[Mt],at=Fi[Mt]===us,ct=l!==at;Z.appendInterpolatedAttributeData(d,ii.a,ot,ct),ct?(Z.appendInterpolatedAttributeData(d,ii.c,ht,ct),Z.appendInterpolatedAttributeData(d,ii.b,it,ct)):(Z.appendInterpolatedAttributeData(d,ii.b,it,ct),Z.appendInterpolatedAttributeData(d,ii.c,ht,ct))}}}}}return E.length}function Kh(i,t,e,n,r,s,o=0){Ke.copy(t.matrixWorld).invert().multiply(i.matrixWorld),r?ke.copy(Ke):ke.identity();const a=ke.determinant()<0;oi.getNormalMatrix(ke).multiplyScalar(a?-1:1);const l=t.geometry.boundsTree,h=i.geometry.groupIndices,f=i.geometry.index,g=i.geometry.attributes.position,m=[],y=i.geometry.halfEdges,E=new Set(e.ids),v=Nl(i.geometry);for(let _=0;_<v&&E.size!==v;_++){if(E.has(_))continue;E.add(_),m.push(_);const b=3*_;let d=b+0,c=b+1,M=b+2;f&&(d=f.getX(d),c=f.getX(c),M=f.getX(M)),gn.a.fromBufferAttribute(g,d),gn.b.fromBufferAttribute(g,c),gn.c.fromBufferAttribute(g,M),r&&(gn.a.applyMatrix4(Ke),gn.b.applyMatrix4(Ke),gn.c.applyMatrix4(Ke));const u=od(gn,l,r?null:Ke);Fi.length=0,bn.length=0;for(let C=0,A=n.length;C<A;C++){const S=ad(n[C],u,r);S!==Ol&&(Fi.push(S),bn.push(s[C]))}for(;m.length>0;){const C=m.pop();for(let A=0;A<3;A++){const S=y.getSiblingTriangleIndex(C,A);S!==-1&&!E.has(S)&&(m.push(S),E.add(S))}if(bn.length!==0){const A=3*C;let S=A+0,x=A+1,T=A+2;f&&(S=f.getX(S),x=f.getX(x),T=f.getX(T));const w=o===-1?0:h[C]+o;if(gn.a.fromBufferAttribute(g,S),gn.b.fromBufferAttribute(g,x),gn.c.fromBufferAttribute(g,T),!ci(gn))for(let R=0,N=bn.length;R<N;R++){const F=bn[R],B=Fi[R]===us!==a;F.appendIndexFromGeometry(i.geometry,ke,oi,w,S,B),B?(F.appendIndexFromGeometry(i.geometry,ke,oi,w,T,B),F.appendIndexFromGeometry(i.geometry,ke,oi,w,x,B)):(F.appendIndexFromGeometry(i.geometry,ke,oi,w,x,B),F.appendIndexFromGeometry(i.geometry,ke,oi,w,T,B))}}}}}function IS(i){return i=~~i,i+4-i%4}class US{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=Qf()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(IS(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}}const He=new I,cc=new I,lc=new I,uc=new I,Eo=new se,NS=new se,FS=new se,OS=new se;function BS(i,t,e,n,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(i,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function Jh(i,t,e){switch(t){case 1:e.push(i.x);break;case 2:e.push(i.x,i.y);break;case 3:e.push(i.x,i.y,i.z);break;case 4:e.push(i.x,i.y,i.z,i.w);break}}class hc extends US{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}}class zS{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();const{attributeData:n}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){const a=e[s],l=r[a],h=l.array.constructor;n[a]||(n[a]=new hc(h)),n[a].setType(h),n[a].itemSize=l.itemSize,n[a].normalized=l.normalized}for(const s in n.attributes)e.includes(s)||n.delete(s)}initInterpolatedAttributeData(t,e,n,r,s,o){const{attributeData:a,interpolatedFields:l}=this,{attributes:h}=t;for(const f in a){const p=h[f];if(!p)throw new Error(`CSG Operations: Attribute ${f} not available on geometry.`);let g,m,y;if(f==="position"?(g=cc.fromBufferAttribute(p,r).applyMatrix4(e),m=lc.fromBufferAttribute(p,s).applyMatrix4(e),y=uc.fromBufferAttribute(p,o).applyMatrix4(e)):f==="normal"?(g=cc.fromBufferAttribute(p,r).applyNormalMatrix(n),m=lc.fromBufferAttribute(p,s).applyNormalMatrix(n),y=uc.fromBufferAttribute(p,o).applyNormalMatrix(n)):f==="tangent"?(g=cc.fromBufferAttribute(p,r).transformDirection(e),m=lc.fromBufferAttribute(p,s).transformDirection(e),y=uc.fromBufferAttribute(p,o).transformDirection(e)):(g=NS.fromBufferAttribute(p,r),m=FS.fromBufferAttribute(p,s),y=OS.fromBufferAttribute(p,o)),!l[f])l[f]=[g.clone(),m.clone(),y.clone()];else{const E=l[f];E[0].copy(g),E[1].copy(m),E[2].copy(y)}}}appendInterpolatedAttributeData(t,e,n=null,r=!1){const{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:l,invertedIndexMap:h}=this;for(;s.length<=t;)s.push(new hc(Uint32Array));const f=r?h:l,p=s[t];if(n!==null&&f.has(n))p.push(f.get(n));else{f.set(n,o.position.count),p.push(o.position.count);for(const g in a){const m=o[g],y=g==="normal"||g==="tangent",E=r&&y,v=m.itemSize,[_,b,d]=a[g];BS(_,b,d,e,Eo,y,E),Jh(Eo,v,m)}}}appendIndexFromGeometry(t,e,n,r,s,o=!1){const{groupIndices:a,attributeData:l,forwardIndexMap:h,invertedIndexMap:f}=this;for(;a.length<=r;)a.push(new hc(Uint32Array));const p=o?f:h,g=a[r];if(s!==null&&p.has(s))g.push(p.get(s));else{p.set(s,l.position.count),g.push(l.position.count);const{attributes:m}=t;for(const y in l){const E=l[y],v=m[y];if(!v)throw new Error(`CSG Operations: Attribute ${y} not available on geometry.`);const _=v.itemSize;y==="position"?(He.fromBufferAttribute(v,s).applyMatrix4(e),E.push(He.x,He.y,He.z)):y==="normal"?(He.fromBufferAttribute(v,s).applyNormalMatrix(n),o&&He.multiplyScalar(-1),E.push(He.x,He.y,He.z)):y==="tangent"?(He.fromBufferAttribute(v,s).transformDirection(e),o&&He.multiplyScalar(-1),E.push(He.x,He.y,He.z)):(Eo.fromBufferAttribute(v,s),Jh(Eo,_,E))}}}buildGeometry(t,e){let n=!1;const{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(const f in s){const p=s[f],{type:g,itemSize:m,normalized:y,length:E,count:v}=p,_=p.array.buffer;let b=o[f];(!b||b.count<v||b.array.type!==g)&&(b=new We(new g(E),m,y),t.setAttribute(f,b),n=!0),b.array.set(new g(_,0,E),0),b.needsUpdate=!0}const l=r.reduce((f,p)=>p.count+f,0);(!t.index||a.count<l||a.array.type!==Uint32Array)&&(t.setIndex(new We(new Uint32Array(l),1)),n=!0),t.clearGroups();let h=0;for(let f=0,p=Math.min(e.length,r.length);f<p;f++){const{index:g,materialIndex:m}=e[f],{count:y}=r[g],E=r[g].array.buffer;y!==0&&(t.index.array.set(new Uint32Array(E,0,y),h),t.addGroup(h,y,m),h+=y)}t.setDrawRange(0,h),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){const{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(const n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}}function VS(i,t){for(const e in i.attributes)t.includes(e)||(i.deleteAttribute(e),i.dispose());return i}function HS(i,t){const e=[];for(let n=0,r=i.length;n<r;n++){const s=i[n],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function kS(i,t){const e=[],n=new Map;for(let r=0,s=i.length;r<s;r++){const o=i[r];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function GS(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function jh(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class WS{get useCDTClipping(){return this.triangleSplitter instanceof Ch}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new Ch:new Uh)}constructor(){this.triangleSplitter=new Uh,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new DS}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,r=new ko){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,geometryBuilders:a,attributes:l,useGroups:h,consolidateGroups:f,removeUnusedMaterials:p,debug:g}=this;for(;a.length<r.length;)a.push(new zS);r.forEach((d,c)=>{a[c].initFromGeometry(t.geometry,l),VS(d.geometry,l)}),g.init(),LS(t,e,n,o,a,{useGroups:h}),g.complete();const m=this.getGroupRanges(t.geometry),y=jh(m,t.material),E=this.getGroupRanges(e.geometry),v=jh(E,e.material);E.forEach(d=>d.materialIndex+=y.length);const _=[...y,...v];let b=[...m,...E].map((d,c)=>({...d,index:c}));return h?h&&f&&(b=HS(b,_),b.sort((d,c)=>d.materialIndex-c.materialIndex)):b=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((d,c)=>{const M=d.geometry;a[c].buildGeometry(M,b),t.matrixWorld.decompose(d.position,d.quaternion,d.scale),d.updateMatrix(),d.matrixWorld.copy(t.matrixWorld),h?(d.material=_,f&&GS(M.groups),p&&(d.material=kS(M.groups,_))):d.material=_[0]}),s?r:r[0]}evaluateHierarchy(t,e=new ko){t.updateMatrixWorld(!0);const n=(s,o)=>{const a=s.children;for(let l=0,h=a.length;l<h;l++){const f=a[l];f.isOperationGroup?n(f,o):o(f)}},r=s=>{const o=s.children;let a=!1;for(let h=0,f=o.length;h<f;h++){const p=o[h];a=r(p)||a}const l=s.isDirty();if(l&&s.markUpdated(),a&&!s.isOperationGroup){let h;return n(s,f=>{h?h=this.evaluate(h,f,f.operation):h=this.evaluate(s,f,f.operation)}),s._cachedGeometry=h.geometry,s._cachedMaterials=h.material,!0}else return a||l};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}const XS=[["mensola","Mensola"],["vaschetta","Vaschetta"],["piattino","Piattino"],["portavaso","Portavaso"],["solo_innesto","Innesto prova"]],jo=[{s:"insert",k:"spessore_innesto",label:"Spessore innesto",hint:"Fessura − 0,5~1 mm",def:12.5,min:6,max:20,step:.1},{s:"insert",k:"profondita_doga",label:"Profondità doga",hint:"Lunghezza del collo nella fessura",def:12,min:5,max:30,step:.5},{s:"insert",k:"larghezza_collo",label:"Larghezza collo",def:16,min:8,max:40,step:.5},{s:"insert",k:"larghezza_testa",label:"Larghezza testa a T",def:40,min:20,max:80,step:.5},{s:"insert",k:"spessore_testa",label:"Spessore testa a T",def:3,min:2,max:10,step:.25},{s:"insert",k:"raccordo_collo",label:"Raccordo collo",def:6,min:0,max:15,step:.5},{s:"insert",k:"larghezza_svasatura",label:"Larghezza svasatura",def:40,min:16,max:80,step:1},{s:"body",k:"larghezza_mensola",label:"Larghezza",def:100,min:40,max:200,step:1,t:["mensola","vaschetta"]},{s:"body",k:"profondita_mensola",label:"Profondità",def:90,min:30,max:200,step:1,t:["mensola","vaschetta"]},{s:"body",k:"spessore_mensola",label:"Spessore piano",def:8,min:3,max:20,step:.5,t:["mensola","vaschetta","piattino","portavaso"]},{s:"body",k:"raggio_spigoli",label:"Raggio spigoli",def:8,min:0,max:25,step:.5,t:["mensola","vaschetta"]},{s:"body",k:"altezza_bordo",label:"Altezza bordino",def:5,min:0,max:20,step:.5,t:["mensola","piattino"]},{s:"body",k:"altezza_parete",label:"Altezza pareti",def:25,min:5,max:60,step:1,t:["vaschetta"]},{s:"body",k:"spessore_bordo",label:"Spessore bordino/pareti",def:4,min:2,max:10,step:.5,t:["mensola","vaschetta","piattino"]},{s:"body",k:"diametro_piattino",label:"Diametro piattino",def:90,min:40,max:200,step:1,t:["piattino"]},{s:"body",k:"diametro_vaso",label:"Diametro interno anello (vaso)",def:105,min:40,max:220,step:1,t:["portavaso"]},{s:"body",k:"banda_anello",label:"Larghezza fascia anello",def:5,min:3,max:12,step:.5,t:["portavaso"]}],Qo={tipo:"mensola",bordo_sopra:!0};jo.forEach(i=>Qo[i.k]=i.def);let le=JSON.parse(JSON.stringify(Qo));const fl=document.getElementById("view"),Yn=new Cx({antialias:!0});Yn.setPixelRatio(Math.min(devicePixelRatio,2));Yn.shadowMap.enabled=!0;Yn.shadowMap.type=rf;fl.appendChild(Yn.domElement);const Ln=new Jp;Ln.background=new $t(15986662);const fi=new on(45,1,.5,4e3);fi.position.set(150,140,190);const Dr=new Dx(fi,Yn.domElement);Dr.enableDamping=!0;Dr.target.set(0,5,20);Ln.add(new zg(16777215,14208956,1));const Zn=new Hf(16774368,2.4);Zn.position.set(120,220,140);Zn.castShadow=!0;Zn.shadow.mapSize.set(2048,2048);Zn.shadow.camera.left=Zn.shadow.camera.bottom=-220;Zn.shadow.camera.right=Zn.shadow.camera.top=220;Zn.shadow.bias=-5e-4;Ln.add(Zn);const cd=new Hf(14674175,.7);cd.position.set(-140,90,-120);Ln.add(cd);const ld=new Je(new El(900,72).rotateX(-Math.PI/2),new Fg({opacity:.14}));ld.receiveShadow=!0;Ln.add(ld);const ud=new Xg(600,60,13617074,14867659);ud.position.y=.05;Ln.add(ud);const hd=new Je(new zr(600,.4,.4),new Sl({color:11748650}));hd.position.y=.25;Ln.add(hd);const qS=new Bf({color:13213790,roughness:.55,metalness:0});new Bf({color:11043658,roughness:.6});let Gn=null;function YS(i){const t=new ri;t.moveTo(i[0][0],i[0][1]);for(let e=1;e<i.length;e++)t.lineTo(i[e][0],i[e][1]);return t.closePath(),t}function To(i,t,e,n,r=0,s=0){const o=new i;return n=Math.max(0,Math.min(n,t/2-.01,e/2-.01)),n<=0?(o.moveTo(r,s),o.lineTo(r+t,s),o.lineTo(r+t,s+e),o.lineTo(r,s+e),o.closePath(),o):(o.moveTo(r+n,s),o.lineTo(r+t-n,s),o.absarc(r+t-n,s+n,n,-Math.PI/2,0,!1),o.lineTo(r+t,s+e-n),o.absarc(r+t-n,s+e-n,n,0,Math.PI/2,!1),o.lineTo(r+n,s+e),o.absarc(r+n,s+e-n,n,Math.PI/2,Math.PI,!1),o.lineTo(r,s+n),o.absarc(r+n,s+n,n,Math.PI,Math.PI*1.5,!1),o)}function ts(i,t,e,n,r=!1){const s=new i;return s.absarc(t,e,n,0,Math.PI*2,r),s}function Ci(i,t){const e=new Al(i,{depth:t,bevelEnabled:!1,curveSegments:72});return e.rotateX(Math.PI/2),e.translate(0,t,0),e}const bo=.5,es=.02;function $S(i){const t=[],e=YS([[-i.larghezza_testa/2,-(i.profondita_doga+i.spessore_testa)],[i.larghezza_testa/2,-(i.profondita_doga+i.spessore_testa)],[i.larghezza_testa/2,-i.profondita_doga],[i.larghezza_collo/2,-i.profondita_doga],[i.larghezza_collo/2,-i.raccordo_collo],[i.larghezza_svasatura/2,4],[-i.larghezza_svasatura/2,4],[-i.larghezza_collo/2,-i.raccordo_collo],[-i.larghezza_collo/2,-i.profondita_doga],[-i.larghezza_testa/2,-i.profondita_doga]]),n=Ci(e,i.spessore_innesto);t.push(n);const r=le.tipo==="vaschetta"?i.altezza_parete:i.altezza_bordo;if(le.tipo==="mensola"||le.tipo==="vaschetta"){const s=To(ri,i.larghezza_mensola,i.profondita_mensola,i.raggio_spigoli,-i.larghezza_mensola/2,0);if(t.push(Ci(s,i.spessore_mensola)),r>0){const o=i.spessore_bordo,a=i.larghezza_mensola+2*es,l=i.profondita_mensola+2*es,h=To(ri,a,l,i.raggio_spigoli+es,-a/2,-es);h.holes.push(To(cs,i.larghezza_mensola-2*o,i.profondita_mensola-2*o,Math.max(0,i.raggio_spigoli-o),-i.larghezza_mensola/2+o,o));const f=Ci(h,r+bo);f.translate(0,le.bordo_sopra?i.spessore_mensola-bo:-r,0),t.push(f)}}else if(le.tipo==="piattino"){const s=i.diametro_piattino/2,o=s-4;if(t.push(Ci(ts(ri,0,o,s),i.spessore_mensola)),r>0){const a=ts(ri,0,o,s+es);a.holes.push(ts(cs,0,o,s-i.spessore_bordo,!0));const l=Ci(a,r+bo);l.translate(0,le.bordo_sopra?i.spessore_mensola-bo:-r,0),t.push(l)}}else if(le.tipo==="portavaso"){const s=i.diametro_vaso/2+i.banda_anello,o=s-4,a=ts(ri,0,o,s);a.holes.push(ts(cs,0,o,i.diametro_vaso/2,!0)),t.push(Ci(a,i.spessore_mensola))}else le.tipo==="solo_innesto"&&t.push(Ci(To(ri,i.larghezza_svasatura,20,4,-i.larghezza_svasatura/2,0),i.spessore_innesto));return t}const ZS=new WS;function KS(){const i=$S(le);let t=new ko(i[0]);for(let r=1;r<i.length;r++)t=ZS.evaluate(t,new ko(i[r]),id);const e=t.geometry;e.computeBoundingBox();const n=e.boundingBox.min.y;return n<-.001&&e.translate(0,-n,0),e.computeVertexNormals(),e.computeBoundingBox(),e.computeBoundingSphere(),e}function JS(i){const t=i.attributes.position.array;let e=0;for(let n=0;n<t.length;n+=9){const r=t[n],s=t[n+1],o=t[n+2],a=t[n+3],l=t[n+4],h=t[n+5],f=t[n+6],p=t[n+7],g=t[n+8];e+=(r*(l*g-h*p)-s*(a*g-h*f)+o*(a*p-l*f))/6}return Math.abs(e)}let Qh=null;function Es(i=!1){const t=KS();Gn&&(Gn.geometry.dispose(),Ln.remove(Gn)),Gn=new Je(t,qS),Gn.castShadow=Gn.receiveShadow=!0,Ln.add(Gn),i&&jS(),QS(t)}function tf(){clearTimeout(Qh),Qh=setTimeout(()=>Es(!1),120)}function jS(){const i=Gn.geometry.boundingSphere,t=i.center,e=i.radius,n=new I().subVectors(fi.position,Dr.target).normalize(),r=e/Math.tan(_f.degToRad(fi.fov/2))*1.35;Dr.target.copy(t),fi.position.copy(t).addScaledVector(n,r),Dr.update()}function QS(i){const t=i.boundingBox,e=new I;t.getSize(e);const n=JS(i)/1e3,r=n*1.24;document.getElementById("dims").innerHTML=`<span>ingombro <b>${e.x.toFixed(0)} × ${e.z.toFixed(0)} × ${e.y.toFixed(1)} mm</b></span><span>volume <b>${n.toFixed(0)} cm³</b></span><span>≈ <b>${r.toFixed(0)} g</b> pieno</span>`}const fc=document.getElementById("toast");let ef=null;function pi(i){fc.textContent=i,fc.classList.add("show"),clearTimeout(ef),ef=setTimeout(()=>fc.classList.remove("show"),2200)}const fd=document.getElementById("types");XS.forEach(([i,t])=>{const e=document.createElement("button");e.textContent=t,e.dataset.type=i,e.addEventListener("click",()=>{le.tipo=i,ta(),Es(!0)}),fd.appendChild(e)});const Wo={};function tM(){jo.forEach(i=>{const t=document.createElement("div");t.className="param";const e=document.createElement("div");e.className="row";const n=document.createElement("label");n.textContent=i.label;const r=document.createElement("span");r.className="val",e.append(n,r);const s=document.createElement("input");if(s.type="range",s.min=i.min,s.max=i.max,s.step=i.step,s.setAttribute("aria-label",i.label),s.addEventListener("input",()=>{le[i.k]=parseFloat(s.value),r.textContent=dd(le[i.k]),tf()}),t.append(e,s),i.hint){const o=document.createElement("small");o.textContent=i.hint,t.appendChild(o)}document.getElementById(i.s==="insert"?"params-insert":"params-body").appendChild(t),Wo[i.k]={wrap:t,inp:s,val:r,p:i}}),document.getElementById("bordo_sopra").addEventListener("change",i=>{le.bordo_sopra=i.target.checked,tf()})}function dd(i){return(Math.round(i*100)/100).toString()}function ta(){fd.querySelectorAll("button").forEach(i=>i.classList.toggle("on",i.dataset.type===le.tipo)),jo.forEach(i=>{const t=!i.t||i.t.includes(le.tipo);Wo[i.k].wrap.classList.toggle("hide",!t)}),document.getElementById("wrap-bordo").style.display=["mensola","vaschetta","piattino"].includes(le.tipo)?"":"none",document.getElementById("sec-body").style.display=le.tipo==="solo_innesto"?"none":""}function Bl(){jo.forEach(i=>{Wo[i.k].inp.value=le[i.k],Wo[i.k].val.textContent=dd(le[i.k])}),document.getElementById("bordo_sopra").checked=le.bordo_sopra}const pd="pannelli-presets-v1";function ys(){try{return JSON.parse(localStorage.getItem(pd))||{}}catch{return{}}}function zl(i){localStorage.setItem(pd,JSON.stringify(i))}function ea(){const i=ys(),t=document.getElementById("plist");t.innerHTML="";const e=Object.keys(i);if(!e.length){t.innerHTML='<span class="pempty">Nessun preset salvato</span>';return}e.forEach(n=>{const r=document.createElement("div");r.className="pitem";const s=document.createElement("span");s.className="nm",s.textContent=`${n} (${i[n].tipo})`,s.title="Clicca per applicare",s.addEventListener("click",()=>{le={...JSON.parse(JSON.stringify(Qo)),...i[n]},Bl(),ta(),Es(!0),pi(`Preset «${n}» applicato`)});const o=document.createElement("button");o.textContent="✕",o.title="Elimina preset",o.addEventListener("click",()=>{const a=ys();delete a[n],zl(a),ea()}),r.append(s,o),t.appendChild(r)})}document.getElementById("psave").addEventListener("click",()=>{const i=document.getElementById("pname"),t=i.value.trim();if(!t){pi("Scrivi un nome per il preset");return}const e=ys();e[t]=JSON.parse(JSON.stringify(le)),zl(e),ea(),i.value="",pi(`Preset «${t}» salvato`)});document.getElementById("pexport").addEventListener("click",()=>{const i=ys();if(!Object.keys(i).length){pi("Nessun preset da esportare");return}gd(new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),"preset-pannelli.json")});document.getElementById("pimport").addEventListener("click",()=>document.getElementById("pfile").click());document.getElementById("pfile").addEventListener("change",i=>{const t=i.target.files[0];if(!t)return;const e=new FileReader;e.onload=()=>{try{const n=JSON.parse(e.result),r={...ys(),...n};zl(r),ea(),pi(`Importati ${Object.keys(n).length} preset`)}catch{pi("File non valido")}},e.readAsText(t),i.target.value=""});function gd(i,t){const e=document.createElement("a");e.href=URL.createObjectURL(i),e.download=t,e.click(),setTimeout(()=>URL.revokeObjectURL(e.href),4e3)}document.getElementById("export").addEventListener("click",()=>{const i=new Wx().parse(Gn,{binary:!0}),t=le,e=t.tipo==="piattino"?`D${t.diametro_piattino}`:t.tipo==="portavaso"?`vaso${t.diametro_vaso}`:t.tipo==="solo_innesto"?`fessura${t.spessore_innesto}`:`${t.larghezza_mensola}x${t.profondita_mensola}`;gd(new Blob([i],{type:"application/octet-stream"}),`${t.tipo}_${e}.stl`),pi("STL scaricato — aprilo in BambuStudio")});document.getElementById("reset").addEventListener("click",()=>{le=JSON.parse(JSON.stringify(Qo)),Bl(),ta(),Es(!0),pi("Valori di default ripristinati")});function md(){const i=fl.clientWidth,t=fl.clientHeight;Yn.setSize(i,t),fi.aspect=i/t,fi.updateProjectionMatrix()}addEventListener("resize",md);const eM=document.getElementById("hud");Yn.setAnimationLoop(()=>{Dr.update(),Yn.render(Ln,fi),eM.textContent=`tris ${Yn.info.render.triangles}`});tM();Bl();ta();ea();md();Es(!0);window.__SCENE_READY__=!0;
