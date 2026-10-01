(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Ba="180",xc=0,fo=1,Mc=2,yl=1,Sc=2,Mn=3,Fn=0,ke=1,on=2,Un=0,Ci=1,po=2,mo=3,go=4,Ec=5,Kn=100,yc=101,Tc=102,bc=103,Ac=104,wc=200,Rc=201,Cc=202,Pc=203,Gs=204,Ws=205,Ic=206,Dc=207,Lc=208,Uc=209,Nc=210,Fc=211,Oc=212,Bc=213,zc=214,Xs=0,qs=1,Ys=2,Ii=3,js=4,Ks=5,$s=6,Zs=7,Tl=0,kc=1,Vc=2,Nn=0,Hc=1,Gc=2,Wc=3,bl=4,Xc=5,qc=6,Yc=7,Al=300,Di=301,Li=302,Js=303,Qs=304,Jr=306,ta=1e3,Jn=1001,ea=1002,en=1003,jc=1004,pr=1005,ln=1006,ls=1007,Qn=1008,un=1009,wl=1010,Rl=1011,tr=1012,za=1013,ti=1014,Sn=1015,lr=1016,ka=1017,Va=1018,er=1020,Cl=35902,Pl=35899,Il=1021,Dl=1022,tn=1023,nr=1026,ir=1027,Ll=1028,Ha=1029,Ul=1030,Ga=1031,Wa=1033,kr=33776,Vr=33777,Hr=33778,Gr=33779,na=35840,ia=35841,ra=35842,sa=35843,aa=36196,oa=37492,la=37496,ca=37808,ha=37809,ua=37810,da=37811,fa=37812,pa=37813,ma=37814,ga=37815,_a=37816,va=37817,xa=37818,Ma=37819,Sa=37820,Ea=37821,ya=36492,Ta=36494,ba=36495,Aa=36283,wa=36284,Ra=36285,Ca=36286,Kc=3200,$c=3201,Nl=0,Zc=1,Ln="",Ie="srgb",Ui="srgb-linear",Xr="linear",Jt="srgb",oi=7680,_o=519,Jc=512,Qc=513,th=514,Fl=515,eh=516,nh=517,ih=518,rh=519,Pa=35044,vo="300 es",cn=2e3,qr=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xo=1234567;const Ji=Math.PI/180,rr=180/Math.PI;function yn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function Xa(i,t){return(i%t+t)%t}function sh(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function ah(i,t,e){return i!==t?(e-i)/(t-i):0}function Qi(i,t,e){return(1-e)*i+e*t}function oh(i,t,e,n){return Qi(i,t,1-Math.exp(-e*n))}function lh(i,t=1){return t-Math.abs(Xa(i,t*2)-t)}function ch(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function hh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function uh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function dh(i,t){return i+Math.random()*(t-i)}function fh(i){return i*(.5-Math.random())}function ph(i){i!==void 0&&(xo=i);let t=xo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mh(i){return i*Ji}function gh(i){return i*rr}function _h(i){return(i&i-1)===0&&i!==0}function vh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mh(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),f=s((t-n)/2),h=a((t-n)/2),p=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ia={DEG2RAD:Ji,RAD2DEG:rr,generateUUID:yn,clamp:Gt,euclideanModulo:Xa,mapLinear:sh,inverseLerp:ah,lerp:Qi,damp:oh,pingpong:lh,smoothstep:ch,smootherstep:hh,randInt:uh,randFloat:dh,randFloatSpread:fh,seededRandom:ph,degToRad:mh,radToDeg:gh,isPowerOfTwo:_h,ceilPowerOfTwo:vh,floorPowerOfTwo:xh,setQuaternionFromProperEuler:Mh,normalize:$t,denormalize:Qe};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==h||c!==p||u!==g){let m=1-o;const d=l*h+c*p+u*g+f*x,A=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const R=Math.sqrt(T),w=Math.atan2(R,d*A);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const E=o*A;if(l=l*m+h*E,c=c*m+p*E,u=u*m+g*E,f=f*m+x*E,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*f+l*p-c*h,t[e+1]=l*g+u*h+c*f-o*p,t[e+2]=c*g+u*p+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),h=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return cs.copy(this).projectOnVector(t),this.sub(cs)}reflect(t){return this.sub(cs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cs=new L,Mo=new cr;class Ft{constructor(t,e,n,r,s,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],x=r[0],m=r[3],d=r[6],A=r[1],T=r[4],E=r[7],R=r[2],w=r[5],C=r[8];return s[0]=a*x+o*A+l*R,s[3]=a*m+o*T+l*w,s[6]=a*d+o*E+l*C,s[1]=c*x+u*A+f*R,s[4]=c*m+u*T+f*w,s[7]=c*d+u*E+f*C,s[2]=h*x+p*A+g*R,s[5]=h*m+p*T+g*w,s[8]=h*d+p*E+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,g=e*f+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(r*c-u*n)*x,t[2]=(o*n-r*a)*x,t[3]=h*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(hs.makeScale(t,e)),this}rotate(t){return this.premultiply(hs.makeRotation(-t)),this}translate(t,e){return this.premultiply(hs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hs=new Ft;function Ol(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sh(){const i=sr("canvas");return i.style.display="block",i}const So={};function ar(i){i in So||(So[i]=!0,console.warn(i))}function Eh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Eo=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yo=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yh(){const i={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Jt&&(r.r=Tn(r.r),r.g=Tn(r.g),r.b=Tn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ln?Xr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ar("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ar("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ui]:{primaries:t,whitePoint:n,transfer:Xr,toXYZ:Eo,fromXYZ:yo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:Eo,fromXYZ:yo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}const qt=yh();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let li;class Th{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{li===void 0&&(li=sr("canvas")),li.width=t.width,li.height=t.height;const r=li.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=li}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Tn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tn(e[n]/255)*255):e[n]=Tn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bh=0;class qa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=yn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(us(r[a].image)):s.push(us(r[a]))}else s=us(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Th.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ah=0;const ds=new L;class Le extends Oi{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=Jn,r=Jn,s=ln,a=Qn,o=tn,l=un,c=Le.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=yn(),this.name="",this.source=new qa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ds).x}get height(){return this.source.getSize(ds).y}get depth(){return this.source.getSize(ds).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ta:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ta:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Al;Le.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,r=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,E=(p+1)/2,R=(d+1)/2,w=(u+h)/4,C=(f+x)/4,N=(g+m)/4;return T>E&&T>R?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=w/n,s=C/n):E>R?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=w/r,s=N/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=C/s,r=N/s),this.set(n,r,s,e),this}let A=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-x)/A,this.z=(h-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wh extends Oi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Le(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new qa(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends wh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bl extends Le{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rh extends Le{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(s,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(t.matrixWorld),this.union(mr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),gr.subVectors(this.max,Hi),ci.subVectors(t.a,Hi),hi.subVectors(t.b,Hi),ui.subVectors(t.c,Hi),bn.subVectors(hi,ci),An.subVectors(ui,hi),kn.subVectors(ci,ui);let e=[0,-bn.z,bn.y,0,-An.z,An.y,0,-kn.z,kn.y,bn.z,0,-bn.x,An.z,0,-An.x,kn.z,0,-kn.x,-bn.y,bn.x,0,-An.y,An.x,0,-kn.y,kn.x,0];return!fs(e,ci,hi,ui,gr)||(e=[1,0,0,0,1,0,0,0,1],!fs(e,ci,hi,ui,gr))?!1:(_r.crossVectors(bn,An),e=[_r.x,_r.y,_r.z],fs(e,ci,hi,ui,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pn=[new L,new L,new L,new L,new L,new L,new L,new L],$e=new L,mr=new Bi,ci=new L,hi=new L,ui=new L,bn=new L,An=new L,kn=new L,Hi=new L,gr=new L,_r=new L,Vn=new L;function fs(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Vn.fromArray(i,s);const o=r.x*Math.abs(Vn.x)+r.y*Math.abs(Vn.y)+r.z*Math.abs(Vn.z),l=t.dot(Vn),c=e.dot(Vn),u=n.dot(Vn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ch=new Bi,Gi=new L,ps=new L;class Qr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ch.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gi.subVectors(t,this.center);const e=Gi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Gi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ps.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gi.copy(t.center).add(ps)),this.expandByPoint(Gi.copy(t.center).sub(ps))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const mn=new L,ms=new L,vr=new L,wn=new L,gs=new L,xr=new L,_s=new L;class Ya{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ms.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(ms);const s=t.distanceTo(e)*.5,a=-this.direction.dot(vr),o=wn.dot(this.direction),l=-wn.dot(vr),c=wn.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ms).addScaledVector(vr,h),p}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,r,s){gs.subVectors(e,t),xr.subVectors(n,t),_s.crossVectors(gs,xr);let a=this.direction.dot(_s),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,t);const l=o*this.direction.dot(xr.crossVectors(wn,xr));if(l<0)return null;const c=o*this.direction.dot(gs.cross(wn));if(c<0||l+c>a)return null;const u=-o*wn.dot(_s);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,r,s,a,o,l,c,u,f,h,p,g,x,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,f,h,p,g,x,m)}set(t,e,n,r,s,a,o,l,c,u,f,h,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/di.setFromMatrixColumn(t,0).length(),s=1/di.setFromMatrixColumn(t,1).length(),a=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,p=a*f,g=o*u,x=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=h-x*c,e[9]=-o*l,e[2]=x-h*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,p=l*f,g=c*u,x=c*f;e[0]=h+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=x+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,p=l*f,g=c*u,x=c*f;e[0]=h-x*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=x-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,p=a*f,g=o*u,x=o*f;e[0]=l*u,e[4]=g*c-p,e[8]=h*c+x,e[1]=l*f,e[5]=x*c+h,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=x-h*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+g,e[10]=h-x*f}else if(t.order==="XZY"){const h=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+x,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ph,t,Ih)}lookAt(t,e,n){const r=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Rn.crossVectors(n,Ge),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Rn.crossVectors(n,Ge)),Rn.normalize(),Mr.crossVectors(Ge,Rn),r[0]=Rn.x,r[4]=Mr.x,r[8]=Ge.x,r[1]=Rn.y,r[5]=Mr.y,r[9]=Ge.y,r[2]=Rn.z,r[6]=Mr.z,r[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],A=n[3],T=n[7],E=n[11],R=n[15],w=r[0],C=r[4],N=r[8],S=r[12],M=r[1],P=r[5],O=r[9],k=r[13],q=r[2],W=r[6],X=r[10],$=r[14],V=r[3],ot=r[7],ut=r[11],Tt=r[15];return s[0]=a*w+o*M+l*q+c*V,s[4]=a*C+o*P+l*W+c*ot,s[8]=a*N+o*O+l*X+c*ut,s[12]=a*S+o*k+l*$+c*Tt,s[1]=u*w+f*M+h*q+p*V,s[5]=u*C+f*P+h*W+p*ot,s[9]=u*N+f*O+h*X+p*ut,s[13]=u*S+f*k+h*$+p*Tt,s[2]=g*w+x*M+m*q+d*V,s[6]=g*C+x*P+m*W+d*ot,s[10]=g*N+x*O+m*X+d*ut,s[14]=g*S+x*k+m*$+d*Tt,s[3]=A*w+T*M+E*q+R*V,s[7]=A*C+T*P+E*W+R*ot,s[11]=A*N+T*O+E*X+R*ut,s[15]=A*S+T*k+E*$+R*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+s*l*f-r*c*f-s*o*h+n*c*h+r*o*p-n*l*p)+x*(+e*l*p-e*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+e*c*f-e*o*p-s*a*f+n*a*p+s*o*u-n*c*u)+d*(-r*o*u-e*l*f+e*o*h+r*a*f-n*a*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],A=f*m*c-x*h*c+x*l*p-o*m*p-f*l*d+o*h*d,T=g*h*c-u*m*c-g*l*p+a*m*p+u*l*d-a*h*d,E=u*x*c-g*f*c+g*o*p-a*x*p-u*o*d+a*f*d,R=g*f*l-u*x*l-g*o*h+a*x*h+u*o*m-a*f*m,w=e*A+n*T+r*E+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=A*C,t[1]=(x*h*s-f*m*s-x*r*p+n*m*p+f*r*d-n*h*d)*C,t[2]=(o*m*s-x*l*s+x*r*c-n*m*c-o*r*d+n*l*d)*C,t[3]=(f*l*s-o*h*s-f*r*c+n*h*c+o*r*p-n*l*p)*C,t[4]=T*C,t[5]=(u*m*s-g*h*s+g*r*p-e*m*p-u*r*d+e*h*d)*C,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*d-e*l*d)*C,t[7]=(a*h*s-u*l*s+u*r*c-e*h*c-a*r*p+e*l*p)*C,t[8]=E*C,t[9]=(g*f*s-u*x*s-g*n*p+e*x*p+u*n*d-e*f*d)*C,t[10]=(a*x*s-g*o*s+g*n*c-e*x*c-a*n*d+e*o*d)*C,t[11]=(u*o*s-a*f*s-u*n*c+e*f*c+a*n*p-e*o*p)*C,t[12]=R*C,t[13]=(u*x*r-g*f*r+g*n*h-e*x*h-u*n*m+e*f*m)*C,t[14]=(g*o*r-a*x*r-g*n*l+e*x*l+a*n*m-e*o*m)*C,t[15]=(a*f*r-u*o*r+u*n*l-e*f*l-a*n*h+e*o*h)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,g=s*f,x=a*u,m=a*f,d=o*f,A=l*c,T=l*u,E=l*f,R=n.x,w=n.y,C=n.z;return r[0]=(1-(x+d))*R,r[1]=(p+E)*R,r[2]=(g-T)*R,r[3]=0,r[4]=(p-E)*w,r[5]=(1-(h+d))*w,r[6]=(m+A)*w,r[7]=0,r[8]=(g+T)*C,r[9]=(m-A)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=di.set(r[0],r[1],r[2]).length();const a=di.set(r[4],r[5],r[6]).length(),o=di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ze.copy(this);const c=1/s,u=1/a,f=1/o;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=u,Ze.elements[5]*=u,Ze.elements[6]*=u,Ze.elements[8]*=f,Ze.elements[9]*=f,Ze.elements[10]*=f,e.setFromRotationMatrix(Ze),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=cn,l=!1){const c=this.elements,u=2*s/(e-t),f=2*s/(n-r),h=(e+t)/(e-t),p=(n+r)/(n-r);let g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===cn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===qr)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=cn,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-r),h=-(e+t)/(e-t),p=-(n+r)/(n-r);let g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===cn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===qr)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const di=new L,Ze=new re,Ph=new L(0,0,0),Ih=new L(1,1,1),Rn=new L,Mr=new L,Ge=new L,To=new re,bo=new cr;class dn{constructor(t=0,e=0,n=0,r=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return To.makeRotationFromQuaternion(t),this.setFromRotationMatrix(To,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bo.setFromEuler(this),this.setFromQuaternion(bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class ja{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dh=0;const Ao=new L,fi=new cr,gn=new re,Sr=new L,Wi=new L,Lh=new L,Uh=new cr,wo=new L(1,0,0),Ro=new L(0,1,0),Co=new L(0,0,1),Po={type:"added"},Nh={type:"removed"},pi={type:"childadded",child:null},vs={type:"childremoved",child:null};class we extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new L,e=new dn,n=new cr,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new re},normalMatrix:{value:new Ft}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(wo,t)}rotateY(t){return this.rotateOnAxis(Ro,t)}rotateZ(t){return this.rotateOnAxis(Co,t)}translateOnAxis(t,e){return Ao.copy(t).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wo,t)}translateY(t){return this.translateOnAxis(Ro,t)}translateZ(t){return this.translateOnAxis(Co,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Wi,Sr,this.up):gn.lookAt(Sr,Wi,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),fi.setFromRotationMatrix(gn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Po),pi.child=t,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nh),vs.child=t,this.dispatchEvent(vs),vs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Po),pi.child=t,this.dispatchEvent(pi),pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,t,Lh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Uh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}we.DEFAULT_UP=new L(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new L,_n=new L,xs=new L,vn=new L,mi=new L,gi=new L,Io=new L,Ms=new L,Ss=new L,Es=new L,ys=new Qt,Ts=new Qt,bs=new Qt;class Ke{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Je.subVectors(t,e),r.cross(Je);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Je.subVectors(r,e),_n.subVectors(n,e),xs.subVectors(t,e);const a=Je.dot(Je),o=Je.dot(_n),l=Je.dot(xs),c=_n.dot(_n),u=_n.dot(xs),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return ys.setScalar(0),Ts.setScalar(0),bs.setScalar(0),ys.fromBufferAttribute(t,e),Ts.fromBufferAttribute(t,n),bs.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ys,s.x),a.addScaledVector(Ts,s.y),a.addScaledVector(bs,s.z),a}static isFrontFacing(t,e,n,r){return Je.subVectors(n,e),_n.subVectors(t,e),Je.cross(_n).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Je.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;mi.subVectors(r,n),gi.subVectors(s,n),Ms.subVectors(t,n);const l=mi.dot(Ms),c=gi.dot(Ms);if(l<=0&&c<=0)return e.copy(n);Ss.subVectors(t,r);const u=mi.dot(Ss),f=gi.dot(Ss);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(mi,a);Es.subVectors(t,s);const p=mi.dot(Es),g=gi.dot(Es);if(g>=0&&p<=g)return e.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(gi,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Io.subVectors(s,r),o=(f-u)/(f-u+(p-g)),e.copy(r).addScaledVector(Io,o);const d=1/(m+x+h);return a=x*d,o=h*d,e.copy(n).addScaledVector(mi,a).addScaledVector(gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function As(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=qt.workingColorSpace){if(t=Xa(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=As(a,s,t+1/3),this.g=As(a,s,t),this.b=As(a,s,t-1/3)}return qt.colorSpaceToWorking(this,r),this}setStyle(t,e=Ie){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=zl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return qt.workingToColorSpace(Pe.copy(this),t),Math.round(Gt(Pe.r*255,0,255))*65536+Math.round(Gt(Pe.g*255,0,255))*256+Math.round(Gt(Pe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Pe.copy(this),e);const n=Pe.r,r=Pe.g,s=Pe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Ie){qt.workingToColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,r=Pe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(Er);const n=Qi(Cn.h,Er.h,e),r=Qi(Cn.s,Er.s,e),s=Qi(Cn.l,Er.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Vt;Vt.NAMES=zl;let Fh=0;class ri extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=Ci,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gs,this.blendDst=Ws,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ws&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ka extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new L,yr=new Dt;let Oh=0;class nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pa,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qe(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qe(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qe(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pa&&(t.usage=this.usage),t}}class kl extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vl extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bh=0;const Ye=new re,ws=new we,_i=new L,We=new Bi,Xi=new Bi,Te=new L;class Oe extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ol(t)?Vl:kl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return ws.lookAt(t),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];We.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(We.min,Xi.min),We.expandByPoint(Te),Te.addVectors(We.max,Xi.max),We.expandByPoint(Te)):(We.expandByPoint(Xi.min),We.expandByPoint(Xi.max))}We.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Te.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Te));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Te.fromBufferAttribute(o,c),l&&(_i.fromBufferAttribute(t,c),Te.add(_i)),r=Math.max(r,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new L,l[N]=new L;const c=new L,u=new L,f=new L,h=new Dt,p=new Dt,g=new Dt,x=new L,m=new L;function d(N,S,M){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[N].add(x),o[S].add(x),o[M].add(x),l[N].add(m),l[S].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let N=0,S=A.length;N<S;++N){const M=A[N],P=M.start,O=M.count;for(let k=P,q=P+O;k<q;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const T=new L,E=new L,R=new L,w=new L;function C(N){R.fromBufferAttribute(r,N),w.copy(R);const S=o[N];T.copy(S),T.sub(R.multiplyScalar(R.dot(S))).normalize(),E.crossVectors(w,S);const P=E.dot(l[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,P)}for(let N=0,S=A.length;N<S;++N){const M=A[N],P=M.start,O=M.count;for(let k=P,q=P+O;k<q;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,u=new L,f=new L;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new nn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Do=new re,Hn=new Ya,Tr=new Qr,Lo=new L,br=new L,Ar=new L,wr=new L,Rs=new L,Rr=new L,Uo=new L,Cr=new L;class Ae extends we{constructor(t=new Oe,e=new Ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Rr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Rs.fromBufferAttribute(f,t),a?Rr.addScaledVector(Rs,u):Rr.addScaledVector(Rs.sub(e),u))}e.add(Rr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Hn.copy(t.ray).recast(t.near),!(Tr.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(Tr,Lo)===null||Hn.origin.distanceToSquared(Lo)>(t.far-t.near)**2))&&(Do.copy(s).invert(),Hn.copy(t.ray).applyMatrix4(Do),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,R=T;E<R;E+=3){const w=o.getX(E),C=o.getX(E+1),N=o.getX(E+2);r=Pr(this,d,t,n,c,u,f,w,C,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const A=o.getX(m),T=o.getX(m+1),E=o.getX(m+2);r=Pr(this,a,t,n,c,u,f,A,T,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,R=T;E<R;E+=3){const w=E,C=E+1,N=E+2;r=Pr(this,d,t,n,c,u,f,w,C,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const A=m,T=m+1,E=m+2;r=Pr(this,a,t,n,c,u,f,A,T,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function zh(i,t,e,n,r,s,a,o){let l;if(t.side===ke?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Fn,o),l===null)return null;Cr.copy(o),Cr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Cr);return c<e.near||c>e.far?null:{distance:c,point:Cr.clone(),object:i}}function Pr(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,br),i.getVertexPosition(l,Ar),i.getVertexPosition(c,wr);const u=zh(i,t,e,n,br,Ar,wr,Uo);if(u){const f=new L;Ke.getBarycoord(Uo,br,Ar,wr,f),r&&(u.uv=Ke.getInterpolatedAttribute(r,o,l,c,f,new Dt)),s&&(u.uv1=Ke.getInterpolatedAttribute(s,o,l,c,f,new Dt)),a&&(u.normal=Ke.getInterpolatedAttribute(a,o,l,c,f,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new L,materialIndex:0};Ke.getNormal(br,Ar,wr,h.normal),u.face=h,u.barycoord=f}return u}class si extends Oe{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2));function g(x,m,d,A,T,E,R,w,C,N,S){const M=E/C,P=R/N,O=E/2,k=R/2,q=w/2,W=C+1,X=N+1;let $=0,V=0;const ot=new L;for(let ut=0;ut<X;ut++){const Tt=ut*P-k;for(let kt=0;kt<W;kt++){const ee=kt*M-O;ot[x]=ee*A,ot[m]=Tt*T,ot[d]=q,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[d]=w>0?1:-1,u.push(ot.x,ot.y,ot.z),f.push(kt/C),f.push(1-ut/N),$+=1}}for(let ut=0;ut<N;ut++)for(let Tt=0;Tt<C;Tt++){const kt=h+Tt+W*ut,ee=h+Tt+W*(ut+1),se=h+(Tt+1)+W*(ut+1),jt=h+(Tt+1)+W*ut;l.push(kt,ee,jt),l.push(ee,se,jt),V+=6}o.addGroup(p,V,S),p+=V,h+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ni(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=Ni(i[e]);for(const r in n)t[r]=n[r]}return t}function kh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Vh={clone:Ni,merge:Fe};var Hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hh,this.fragmentShader=Gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gl extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new L,No=new Dt,Fo=new Dt;class ze extends Gl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ji*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(Ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,No,Fo),e.subVectors(Fo,No)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ji*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vi=-90,xi=1;class Wh extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ze(vi,xi,t,e);r.layers=this.layers,this.add(r);const s=new ze(vi,xi,t,e);s.layers=this.layers,this.add(s);const a=new ze(vi,xi,t,e);a.layers=this.layers,this.add(a);const o=new ze(vi,xi,t,e);o.layers=this.layers,this.add(o);const l=new ze(vi,xi,t,e);l.layers=this.layers,this.add(l);const c=new ze(vi,xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wl extends Le{constructor(t=[],e=Di,n,r,s,a,o,l,c,u){super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xh extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Wl(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new si(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Un});s.uniforms.tEquirect.value=e;const a=new Ae(r,s),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=ln),new Wh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class xe extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qh={type:"move"};class Cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class $a{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new $a(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xl extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Yh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pa,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new L;class Yr{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qe(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qe(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qe(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qe(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Yr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Za extends ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Mi;const qi=new L,Si=new L,Ei=new L,yi=new Dt,Yi=new Dt,ql=new re,Ir=new L,ji=new L,Dr=new L,Oo=new Dt,Ps=new Dt,Bo=new Dt;class Yl extends we{constructor(t=new Za){if(super(),this.isSprite=!0,this.type="Sprite",Mi===void 0){Mi=new Oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yh(e,5);Mi.setIndex([0,1,2,0,2,3]),Mi.setAttribute("position",new Yr(n,3,0,!1)),Mi.setAttribute("uv",new Yr(n,2,3,!1))}this.geometry=Mi,this.material=t,this.center=new Dt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Si.setFromMatrixScale(this.matrixWorld),ql.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ei.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Si.multiplyScalar(-Ei.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Lr(Ir.set(-.5,-.5,0),Ei,a,Si,r,s),Lr(ji.set(.5,-.5,0),Ei,a,Si,r,s),Lr(Dr.set(.5,.5,0),Ei,a,Si,r,s),Oo.set(0,0),Ps.set(1,0),Bo.set(1,1);let o=t.ray.intersectTriangle(Ir,ji,Dr,!1,qi);if(o===null&&(Lr(ji.set(-.5,.5,0),Ei,a,Si,r,s),Ps.set(0,1),o=t.ray.intersectTriangle(Ir,Dr,ji,!1,qi),o===null))return;const l=t.ray.origin.distanceTo(qi);l<t.near||l>t.far||e.push({distance:l,point:qi.clone(),uv:Ke.getInterpolation(qi,Ir,ji,Dr,Oo,Ps,Bo,new Dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Lr(i,t,e,n,r,s){yi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Yi.x=s*yi.x-r*yi.y,Yi.y=r*yi.x+s*yi.y):Yi.copy(yi),i.copy(t),i.x+=Yi.x,i.y+=Yi.y,i.applyMatrix4(ql)}const Is=new L,jh=new L,Kh=new Ft;class Yn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Is.subVectors(n,e).cross(jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Is),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kh.getNormalMatrix(t),r=this.coplanarPoint(Is).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new Qr,$h=new Dt(.5,.5),Ur=new L;class Ja{constructor(t=new Yn,e=new Yn,n=new Yn,r=new Yn,s=new Yn,a=new Yn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],g=s[8],x=s[9],m=s[10],d=s[11],A=s[12],T=s[13],E=s[14],R=s[15];if(r[0].setComponents(c-a,p-u,d-g,R-A).normalize(),r[1].setComponents(c+a,p+u,d+g,R+A).normalize(),r[2].setComponents(c+o,p+f,d+x,R+T).normalize(),r[3].setComponents(c-o,p-f,d-x,R-T).normalize(),n)r[4].setComponents(l,h,m,E).normalize(),r[5].setComponents(c-l,p-h,d-m,R-E).normalize();else if(r[4].setComponents(c-l,p-h,d-m,R-E).normalize(),e===cn)r[5].setComponents(c+l,p+h,d+m,R+E).normalize();else if(e===qr)r[5].setComponents(l,h,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){Gn.center.set(0,0,0);const e=$h.distanceTo(t.center);return Gn.radius=.7071067811865476+e,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ur.x=r.normal.x>0?t.max.x:t.min.x,Ur.y=r.normal.y>0?t.max.y:t.min.y,Ur.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qa extends ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zo=new re,Da=new Ya,Nr=new Qr,Fr=new L;class jl extends we{constructor(t=new Oe,e=new Qa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Nr.radius+=s,t.ray.intersectsSphere(Nr)===!1)return;zo.copy(r).invert(),Da.copy(t.ray).applyMatrix4(zo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=h,x=p;g<x;g++){const m=c.getX(g);Fr.fromBufferAttribute(f,m),ko(Fr,m,l,r,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=h,x=p;g<x;g++)Fr.fromBufferAttribute(f,g),ko(Fr,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ko(i,t,e,n,r,s,a){const o=Da.distanceSqToPoint(i);if(o<e){const l=new L;Da.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Kl extends Le{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $l extends Le{constructor(t,e,n=ti,r,s,a,o=en,l=en,c,u=nr,f=1){if(u!==nr&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Zl extends Le{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ts extends Oe{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let g=0;const x=[],m=n/2;let d=0;A(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new me(f,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(p,2));function A(){const E=new L,R=new L;let w=0;const C=(e-t)/n;for(let N=0;N<=s;N++){const S=[],M=N/s,P=M*(e-t)+t;for(let O=0;O<=r;O++){const k=O/r,q=k*l+o,W=Math.sin(q),X=Math.cos(q);R.x=P*W,R.y=-M*n+m,R.z=P*X,f.push(R.x,R.y,R.z),E.set(W,C,X).normalize(),h.push(E.x,E.y,E.z),p.push(k,1-M),S.push(g++)}x.push(S)}for(let N=0;N<r;N++)for(let S=0;S<s;S++){const M=x[S][N],P=x[S+1][N],O=x[S+1][N+1],k=x[S][N+1];(t>0||S!==0)&&(u.push(M,P,k),w+=3),(e>0||S!==s-1)&&(u.push(P,O,k),w+=3)}c.addGroup(d,w,0),d+=w}function T(E){const R=g,w=new Dt,C=new L;let N=0;const S=E===!0?t:e,M=E===!0?1:-1;for(let O=1;O<=r;O++)f.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let O=0;O<=r;O++){const q=O/r*l+o,W=Math.cos(q),X=Math.sin(q);C.x=S*X,C.y=m*M,C.z=S*W,f.push(C.x,C.y,C.z),h.push(0,M,0),w.x=W*.5+.5,w.y=X*.5*M+.5,p.push(w.x,w.y),g++}for(let O=0;O<r;O++){const k=R+O,q=P+O;E===!0?u.push(q,q+1,k):u.push(q+1,q,k),N+=3}c.addGroup(d,N,E===!0?1:2),d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hr extends Oe{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=t/o,h=e/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const A=d*h-a;for(let T=0;T<c;T++){const E=T*f-s;g.push(E,-A,0),x.push(0,0,1),m.push(T/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){const T=A+c*d,E=A+c*(d+1),R=A+1+c*(d+1),w=A+1+c*d;p.push(T,E,w),p.push(E,R,w)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.width,t.height,t.widthSegments,t.heightSegments)}}class to extends Oe{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let f=t;const h=(e-t)/r,p=new L,g=new Dt;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){const d=s+m/n*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<r;x++){const m=x*(n+1);for(let d=0;d<n;d++){const A=d+m,T=A,E=A+n+1,R=A+n+2,w=A+1;o.push(T,E,w),o.push(E,R,w)}}this.setIndex(o),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class es extends Oe{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new L,h=new L,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){const A=[],T=d/n;let E=0;d===0&&a===0?E=.5/e:d===n&&l===Math.PI&&(E=-.5/e);for(let R=0;R<=e;R++){const w=R/e;f.x=-t*Math.cos(r+w*s)*Math.sin(a+T*o),f.y=t*Math.cos(a+T*o),f.z=t*Math.sin(r+w*s)*Math.sin(a+T*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(w+E,1-T),A.push(c++)}u.push(A)}for(let d=0;d<n;d++)for(let A=0;A<e;A++){const T=u[d][A+1],E=u[d][A],R=u[d+1][A],w=u[d+1][A+1];(d!==0||a>0)&&p.push(T,E,w),(d!==n-1||l<Math.PI)&&p.push(E,R,w)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class eo extends Oe{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new L,f=new L,h=new L;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,A=(r+1)*p+g;a.push(x,m,A),a.push(m,d,A)}this.setIndex(a),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class La extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zh extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jh extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ds={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Qh{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const tu=new Qh;class no{constructor(t){this.manager=t!==void 0?t:tu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}no.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ti=new WeakMap;class eu extends no{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Ds.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let f=Ti.get(a);f===void 0&&(f=[],Ti.set(a,f)),f.push({onLoad:e,onError:r})}return a}const o=sr("img");function l(){u(),e&&e(this);const f=Ti.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}Ti.delete(this),s.manager.itemEnd(t)}function c(f){u(),r&&r(f),Ds.remove(`image:${t}`);const h=Ti.get(this)||[];for(let p=0;p<h.length;p++){const g=h[p];g.onError&&g.onError(f)}Ti.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ds.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class nu extends no{constructor(t){super(t)}load(t,e,n,r){const s=new Le,a=new eu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Jl extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ql extends Jl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ls=new re,Vo=new L,Ho=new L;class iu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vo),Ho.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ho),e.updateMatrixWorld(),Ls.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ls,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ls)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Go=new re,Ki=new L,Us=new L;class ru extends iu{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ki.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ki),Us.copy(n.position),Us.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Us),n.updateMatrixWorld(),r.makeTranslation(-Ki.x,-Ki.y,-Ki.z),Go.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go,n.coordinateSystem,n.reversedDepth)}}class jr extends Jl{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ru}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class su extends Gl{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class au extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ou{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Wo=new re;class tc{constructor(t,e,n=0,r=1/0){this.ray=new Ya(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wo),this}intersectObject(t,e=!0,n=[]){return Ua(t,this,n,e),n.sort(Xo),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Ua(t[r],this,n,e);return n.sort(Xo),n}}function Xo(i,t){return i.distance-t.distance}function Ua(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Ua(s[a],t,e,!0)}}function qo(i,t,e,n){const r=lu(n);switch(e){case Il:return i*t;case Ll:return i*t/r.components*r.byteLength;case Ha:return i*t/r.components*r.byteLength;case Ul:return i*t*2/r.components*r.byteLength;case Ga:return i*t*2/r.components*r.byteLength;case Dl:return i*t*3/r.components*r.byteLength;case tn:return i*t*4/r.components*r.byteLength;case Wa:return i*t*4/r.components*r.byteLength;case kr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:case sa:return Math.max(i,16)*Math.max(t,8)/4;case na:case ra:return Math.max(i,8)*Math.max(t,8)/2;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ya:case Ta:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Aa:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ra:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lu(i){switch(i){case un:case wl:return{byteLength:1,components:1};case tr:case Rl:case lr:return{byteLength:2,components:1};case ka:case Va:return{byteLength:2,components:4};case ti:case za:case Sn:return{byteLength:4,components:1};case Cl:case Pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);function ec(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function cu(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var hu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uu=`#ifdef USE_ALPHAHASH
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
#endif`,du=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gu=`#ifdef USE_AOMAP
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
#endif`,_u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vu=`#ifdef USE_BATCHING
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
#endif`,xu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yu=`#ifdef USE_IRIDESCENCE
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
#endif`,Tu=`#ifdef USE_BUMPMAP
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
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lu=`#define PI 3.141592653589793
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
} // validated`,Uu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nu=`vec3 transformedNormal = objectNormal;
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
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hu=`#ifdef USE_ENVMAP
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
#endif`,Gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wu=`#ifdef USE_ENVMAP
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
#endif`,Xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qu=`#ifdef USE_ENVMAP
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
#endif`,Yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ju=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$u=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zu=`#ifdef USE_GRADIENTMAP
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
}`,Ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ed=`uniform bool receiveShadow;
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
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,od=`PhysicalMaterial material;
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
#endif`,ld=`struct PhysicalMaterial {
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
}`,cd=`
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
#endif`,hd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xd=`#if defined( USE_POINTS_UV )
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
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Td=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dd=`#ifdef USE_NORMALMAP
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
#endif`,Ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jd=`float getShadowMask() {
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
}`,Kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$d=`#ifdef USE_SKINNING
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
#endif`,Zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jd=`#ifdef USE_SKINNING
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
#endif`,Qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rf=`#ifdef USE_TRANSMISSION
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
#endif`,sf=`#ifdef USE_TRANSMISSION
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
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uf=`uniform sampler2D t2D;
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
}`,df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`#include <common>
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
}`,_f=`#if DEPTH_PACKING == 3200
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
}`,vf=`#define DISTANCE
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
}`,xf=`#define DISTANCE
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
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`uniform float scale;
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
}`,yf=`uniform vec3 diffuse;
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
}`,Tf=`#include <common>
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
}`,bf=`uniform vec3 diffuse;
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
}`,Af=`#define LAMBERT
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
}`,wf=`#define LAMBERT
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
}`,Rf=`#define MATCAP
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
}`,Cf=`#define MATCAP
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
}`,Pf=`#define NORMAL
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
}`,If=`#define NORMAL
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
}`,Df=`#define PHONG
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
}`,Lf=`#define PHONG
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
}`,Uf=`#define STANDARD
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
}`,Nf=`#define STANDARD
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
}`,Ff=`#define TOON
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
}`,Of=`#define TOON
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
}`,Bf=`uniform float size;
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
}`,zf=`uniform vec3 diffuse;
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
}`,kf=`#include <common>
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
}`,Vf=`uniform vec3 color;
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
}`,Hf=`uniform float rotation;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:hu,alphahash_pars_fragment:uu,alphamap_fragment:du,alphamap_pars_fragment:fu,alphatest_fragment:pu,alphatest_pars_fragment:mu,aomap_fragment:gu,aomap_pars_fragment:_u,batching_pars_vertex:vu,batching_vertex:xu,begin_vertex:Mu,beginnormal_vertex:Su,bsdfs:Eu,iridescence_fragment:yu,bumpmap_pars_fragment:Tu,clipping_planes_fragment:bu,clipping_planes_pars_fragment:Au,clipping_planes_pars_vertex:wu,clipping_planes_vertex:Ru,color_fragment:Cu,color_pars_fragment:Pu,color_pars_vertex:Iu,color_vertex:Du,common:Lu,cube_uv_reflection_fragment:Uu,defaultnormal_vertex:Nu,displacementmap_pars_vertex:Fu,displacementmap_vertex:Ou,emissivemap_fragment:Bu,emissivemap_pars_fragment:zu,colorspace_fragment:ku,colorspace_pars_fragment:Vu,envmap_fragment:Hu,envmap_common_pars_fragment:Gu,envmap_pars_fragment:Wu,envmap_pars_vertex:Xu,envmap_physical_pars_fragment:nd,envmap_vertex:qu,fog_vertex:Yu,fog_pars_vertex:ju,fog_fragment:Ku,fog_pars_fragment:$u,gradientmap_pars_fragment:Zu,lightmap_pars_fragment:Ju,lights_lambert_fragment:Qu,lights_lambert_pars_fragment:td,lights_pars_begin:ed,lights_toon_fragment:id,lights_toon_pars_fragment:rd,lights_phong_fragment:sd,lights_phong_pars_fragment:ad,lights_physical_fragment:od,lights_physical_pars_fragment:ld,lights_fragment_begin:cd,lights_fragment_maps:hd,lights_fragment_end:ud,logdepthbuf_fragment:dd,logdepthbuf_pars_fragment:fd,logdepthbuf_pars_vertex:pd,logdepthbuf_vertex:md,map_fragment:gd,map_pars_fragment:_d,map_particle_fragment:vd,map_particle_pars_fragment:xd,metalnessmap_fragment:Md,metalnessmap_pars_fragment:Sd,morphinstance_vertex:Ed,morphcolor_vertex:yd,morphnormal_vertex:Td,morphtarget_pars_vertex:bd,morphtarget_vertex:Ad,normal_fragment_begin:wd,normal_fragment_maps:Rd,normal_pars_fragment:Cd,normal_pars_vertex:Pd,normal_vertex:Id,normalmap_pars_fragment:Dd,clearcoat_normal_fragment_begin:Ld,clearcoat_normal_fragment_maps:Ud,clearcoat_pars_fragment:Nd,iridescence_pars_fragment:Fd,opaque_fragment:Od,packing:Bd,premultiplied_alpha_fragment:zd,project_vertex:kd,dithering_fragment:Vd,dithering_pars_fragment:Hd,roughnessmap_fragment:Gd,roughnessmap_pars_fragment:Wd,shadowmap_pars_fragment:Xd,shadowmap_pars_vertex:qd,shadowmap_vertex:Yd,shadowmask_pars_fragment:jd,skinbase_vertex:Kd,skinning_pars_vertex:$d,skinning_vertex:Zd,skinnormal_vertex:Jd,specularmap_fragment:Qd,specularmap_pars_fragment:tf,tonemapping_fragment:ef,tonemapping_pars_fragment:nf,transmission_fragment:rf,transmission_pars_fragment:sf,uv_pars_fragment:af,uv_pars_vertex:of,uv_vertex:lf,worldpos_vertex:cf,background_vert:hf,background_frag:uf,backgroundCube_vert:df,backgroundCube_frag:ff,cube_vert:pf,cube_frag:mf,depth_vert:gf,depth_frag:_f,distanceRGBA_vert:vf,distanceRGBA_frag:xf,equirect_vert:Mf,equirect_frag:Sf,linedashed_vert:Ef,linedashed_frag:yf,meshbasic_vert:Tf,meshbasic_frag:bf,meshlambert_vert:Af,meshlambert_frag:wf,meshmatcap_vert:Rf,meshmatcap_frag:Cf,meshnormal_vert:Pf,meshnormal_frag:If,meshphong_vert:Df,meshphong_frag:Lf,meshphysical_vert:Uf,meshphysical_frag:Nf,meshtoon_vert:Ff,meshtoon_frag:Of,points_vert:Bf,points_frag:zf,shadow_vert:kf,shadow_frag:Vf,sprite_vert:Hf,sprite_frag:Gf},at={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},an={basic:{uniforms:Fe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Fe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Fe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Fe([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Fe([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Fe([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Fe([at.points,at.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Fe([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Fe([at.common,at.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Fe([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Fe([at.sprite,at.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Fe([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Fe([at.lights,at.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};an.physical={uniforms:Fe([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Or={r:0,b:0,g:0},Wn=new dn,Wf=new re;function Xf(i,t,e,n,r,s,a){const o=new Vt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function x(T){let E=!1;const R=g(T);R===null?d(o,l):R&&R.isColor&&(d(R,1),E=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,E){const R=g(E);R&&(R.isCubeTexture||R.mapping===Jr)?(u===void 0&&(u=new Ae(new si(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Ni(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Wn.copy(E.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Wf.makeRotationFromEuler(Wn)),u.material.toneMapped=qt.getTransfer(R.colorSpace)!==Jt,(f!==R||h!==R.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=R,h=R.version,p=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Ae(new hr(2,2),new On({name:"BackgroundMaterial",uniforms:Ni(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=qt.getTransfer(R.colorSpace)!==Jt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=R,h=R.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,E){T.getRGB(Or,Hl(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,E,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(o,l)},render:x,addToRenderList:m,dispose:A}}function qf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(M,P,O,k,q){let W=!1;const X=f(k,O,P);s!==X&&(s=X,c(s.object)),W=p(M,k,O,q),W&&g(M,k,O,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,E(M,P,O,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,P,O){const k=O.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let W=q[P.id];W===void 0&&(W={},q[P.id]=W);let X=W[k];return X===void 0&&(X=h(l()),W[k]=X),X}function h(M){const P=[],O=[],k=[];for(let q=0;q<e;q++)P[q]=0,O[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,P,O,k){const q=s.attributes,W=P.attributes;let X=0;const $=O.getAttributes();for(const V in $)if($[V].location>=0){const ut=q[V];let Tt=W[V];if(Tt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Tt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Tt=M.instanceColor)),ut===void 0||ut.attribute!==Tt||Tt&&ut.data!==Tt.data)return!0;X++}return s.attributesNum!==X||s.index!==k}function g(M,P,O,k){const q={},W=P.attributes;let X=0;const $=O.getAttributes();for(const V in $)if($[V].location>=0){let ut=W[V];ut===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));const Tt={};Tt.attribute=ut,ut&&ut.data&&(Tt.data=ut.data),q[V]=Tt,X++}s.attributes=q,s.attributesNum=X,s.index=k}function x(){const M=s.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){d(M,0)}function d(M,P){const O=s.newAttributes,k=s.enabledAttributes,q=s.attributeDivisors;O[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),q[M]!==P&&(i.vertexAttribDivisor(M,P),q[M]=P)}function A(){const M=s.newAttributes,P=s.enabledAttributes;for(let O=0,k=P.length;O<k;O++)P[O]!==M[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function T(M,P,O,k,q,W,X){X===!0?i.vertexAttribIPointer(M,P,O,q,W):i.vertexAttribPointer(M,P,O,k,q,W)}function E(M,P,O,k){x();const q=k.attributes,W=O.getAttributes(),X=P.defaultAttributeValues;for(const $ in W){const V=W[$];if(V.location>=0){let ot=q[$];if(ot===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){const ut=ot.normalized,Tt=ot.itemSize,kt=t.get(ot);if(kt===void 0)continue;const ee=kt.buffer,se=kt.type,jt=kt.bytesPerElement,Y=se===i.INT||se===i.UNSIGNED_INT||ot.gpuType===za;if(ot.isInterleavedBufferAttribute){const Z=ot.data,pt=Z.stride,It=ot.offset;if(Z.isInstancedInterleavedBuffer){for(let yt=0;yt<V.locationSize;yt++)d(V.location+yt,Z.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let yt=0;yt<V.locationSize;yt++)m(V.location+yt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let yt=0;yt<V.locationSize;yt++)T(V.location+yt,Tt/V.locationSize,se,ut,pt*jt,(It+Tt/V.locationSize*yt)*jt,Y)}else{if(ot.isInstancedBufferAttribute){for(let Z=0;Z<V.locationSize;Z++)d(V.location+Z,ot.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Z=0;Z<V.locationSize;Z++)m(V.location+Z);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Z=0;Z<V.locationSize;Z++)T(V.location+Z,Tt/V.locationSize,se,ut,Tt*jt,Tt/V.locationSize*Z*jt,Y)}}else if(X!==void 0){const ut=X[$];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(V.location,ut);break;case 3:i.vertexAttrib3fv(V.location,ut);break;case 4:i.vertexAttrib4fv(V.location,ut);break;default:i.vertexAttrib1fv(V.location,ut)}}}}A()}function R(){N();for(const M in n){const P=n[M];for(const O in P){const k=P[O];for(const q in k)u(k[q].object),delete k[q];delete P[O]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const O in P){const k=P[O];for(const q in k)u(k[q].object),delete k[q];delete P[O]}delete n[M.id]}function C(M){for(const P in n){const O=n[P];if(O[M.id]===void 0)continue;const k=O[M.id];for(const q in k)u(k[q].object),delete k[q];delete O[M.id]}}function N(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function Yf(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,n,1)}function l(c,u,f,h){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*h[x];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jf(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==tn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const N=C===lr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==un&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Sn&&!N)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:R,maxSamples:w}}function Kf(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Yn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:n,T=A*4;let E=d.clippingState||null;l.value=E,E=u(g,h,T,p);for(let R=0;R!==T;++R)E[R]=e[R];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,E=p;T!==x;++T,E+=4)a.copy(f[T]).applyMatrix4(A,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function $f(i){let t=new WeakMap;function e(a,o){return o===Js?a.mapping=Di:o===Qs&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Js||o===Qs)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xh(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const wi=4,Yo=[.125,.215,.35,.446,.526,.582],$n=20,Ns=new su,jo=new Vt;let Fs=null,Os=0,Bs=0,zs=!1;const jn=(1+Math.sqrt(5))/2,bi=1/jn,Ko=[new L(-jn,bi,0),new L(jn,bi,0),new L(-bi,0,jn),new L(bi,0,jn),new L(0,jn,-bi),new L(0,jn,bi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Zf=new L;class $o{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=Zf}=s;Fs=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),Bs=this._renderer.getActiveMipmapLevel(),zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fs,Os,Bs),this._renderer.xr.enabled=zs,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fs=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),Bs=this._renderer.getActiveMipmapLevel(),zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:lr,format:tn,colorSpace:Ui,depthBuffer:!1},r=Zo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(s)),this._blurMaterial=Qf(s,t,e)}return r}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,Ns)}_sceneToCubeUV(t,e,n,r,s){const l=new ze(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(jo),f.toneMapping=Nn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const x=new Ka({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),m=new Ae(new si,x);let d=!1;const A=t.background;A?A.isColor&&(x.color.copy(A),t.background=null,d=!0):(x.color.copy(jo),d=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const R=this._cubeSize;Br(r,E*R,T>2?R:0,R,R),f.setRenderTarget(r),d&&f.render(m,l),f.render(t,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=h,t.background=A}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Di||t.mapping===Li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Br(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ns)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ko[(r-s-1)%Ko.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ae(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$n-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):$n;m>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const d=[];let A=0;for(let C=0;C<$n;++C){const N=C/x,S=Math.exp(-N*N/2);d.push(S),C===0?A+=S:C<m&&(A+=2*S)}for(let C=0;C<d.length;C++)d[C]=d[C]/A;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-n;const E=this._sizeLods[r],R=3*E*(r>T-wi?r-T+wi:0),w=4*(this._cubeSize-E);Br(e,R,w,3*E,2*E),l.setRenderTarget(e),l.render(f,Ns)}}function Jf(i){const t=[],e=[],n=[];let r=i;const s=i-wi+1+Yo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-wi?l=Yo[a-i+wi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,m=2,d=1,A=new Float32Array(x*g*p),T=new Float32Array(m*g*p),E=new Float32Array(d*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,N=w>2?0:-1,S=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];A.set(S,x*g*w),T.set(h,m*g*w);const M=[w,w,w,w,w,w];E.set(M,d*g*w)}const R=new Oe;R.setAttribute("position",new nn(A,x)),R.setAttribute("uv",new nn(T,m)),R.setAttribute("faceIndex",new nn(E,d)),t.push(R),r>wi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zo(i,t,e){const n=new ei(i,t,e);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Qf(i,t,e){const n=new Float32Array($n),r=new L(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:io(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Jo(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Qo(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function io(){return`

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
	`}function tp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Js||l===Qs,u=l===Di||l===Li;if(c||u){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new $o(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new $o(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ep(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function np(i,t,e,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)t.update(h[p],i.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let T=0,E=A.length;T<E;T+=3){const R=A[T+0],w=A[T+1],C=A[T+2];h.push(R,w,w,C,C,R)}}else if(g!==void 0){const A=g.array;x=g.version;for(let T=0,E=A.length/3-1;T<E;T+=3){const R=T+0,w=T+1,C=T+2;h.push(R,w,w,C,C,R)}}else return;const m=new(Ol(h)?Vl:kl)(h,1);m.version=x;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ip(i,t,e){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){i.drawElements(n,p,s,h*a),e.update(p,n,1)}function c(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,h*a,g),e.update(p,n,g))}function u(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function f(h,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,x,0,g);let d=0;for(let A=0;A<g;A++)d+=p[A]*x[A];e.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function rp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function sp(i,t,e){const n=new WeakMap,r=new Qt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let M=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let R=o.attributes.position.count*E,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*w*4*f),N=new Bl(C,R,w,f);N.type=Sn,N.needsUpdate=!0;const S=E*4;for(let P=0;P<f;P++){const O=d[P],k=A[P],q=T[P],W=R*w*4*P;for(let X=0;X<O.count;X++){const $=X*S;g===!0&&(r.fromBufferAttribute(O,X),C[W+$+0]=r.x,C[W+$+1]=r.y,C[W+$+2]=r.z,C[W+$+3]=0),x===!0&&(r.fromBufferAttribute(k,X),C[W+$+4]=r.x,C[W+$+5]=r.y,C[W+$+6]=r.z,C[W+$+7]=0),m===!0&&(r.fromBufferAttribute(q,X),C[W+$+8]=r.x,C[W+$+9]=r.y,C[W+$+10]=r.z,C[W+$+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new Dt(R,w)},n.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function ap(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const nc=new Le,tl=new $l(1,1),ic=new Bl,rc=new Rh,sc=new Wl,el=[],nl=[],il=new Float32Array(16),rl=new Float32Array(9),sl=new Float32Array(4);function zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=el[r];if(s===void 0&&(s=new Float32Array(r),el[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ns(i,t){let e=nl[t];e===void 0&&(e=new Int32Array(t),nl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function op(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function up(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;sl.set(n),i.uniformMatrix2fv(this.addr,!1,sl),Ee(e,n)}}function dp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;rl.set(n),i.uniformMatrix3fv(this.addr,!1,rl),Ee(e,n)}}function fp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;il.set(n),i.uniformMatrix4fv(this.addr,!1,il),Ee(e,n)}}function pp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Ep(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(tl.compareFunction=Fl,s=tl):s=nc,e.setTexture2D(t||s,r)}function yp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||rc,r)}function Tp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||sc,r)}function bp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ic,r)}function Ap(i){switch(i){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return vp;case 36294:return xp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return bp}}function wp(i,t){i.uniform1fv(this.addr,t)}function Rp(i,t){const e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Cp(i,t){const e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Pp(i,t){const e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Ip(i,t){const e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dp(i,t){const e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lp(i,t){const e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Up(i,t){i.uniform1iv(this.addr,t)}function Np(i,t){i.uniform2iv(this.addr,t)}function Fp(i,t){i.uniform3iv(this.addr,t)}function Op(i,t){i.uniform4iv(this.addr,t)}function Bp(i,t){i.uniform1uiv(this.addr,t)}function zp(i,t){i.uniform2uiv(this.addr,t)}function kp(i,t){i.uniform3uiv(this.addr,t)}function Vp(i,t){i.uniform4uiv(this.addr,t)}function Hp(i,t,e){const n=this.cache,r=t.length,s=ns(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||nc,s[a])}function Gp(i,t,e){const n=this.cache,r=t.length,s=ns(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||rc,s[a])}function Wp(i,t,e){const n=this.cache,r=t.length,s=ns(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||sc,s[a])}function Xp(i,t,e){const n=this.cache,r=t.length,s=ns(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ic,s[a])}function qp(i){switch(i){case 5126:return wp;case 35664:return Rp;case 35665:return Cp;case 35666:return Pp;case 35674:return Ip;case 35675:return Dp;case 35676:return Lp;case 5124:case 35670:return Up;case 35667:case 35671:return Np;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return Bp;case 36294:return zp;case 36295:return kp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}class Yp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ap(e.type)}}class jp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qp(e.type)}}class Kp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const ks=/(\w+)(\])?(\[|\.)?/g;function al(i,t){i.seq.push(t),i.map[t.id]=t}function $p(i,t,e){const n=i.name,r=n.length;for(ks.lastIndex=0;;){const s=ks.exec(n),a=ks.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){al(e,c===void 0?new Yp(o,i,t):new jp(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Kp(o),al(e,f)),e=f}}}class Wr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);$p(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function ol(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Zp=37297;let Jp=0;function Qp(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ll=new Ft;function tm(i){qt._getMatrix(ll,qt.workingColorSpace,i);const t=`mat3( ${ll.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Xr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Qp(i.getShaderSource(t),o)}else return s}function em(i,t){const e=tm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function nm(i,t){let e;switch(t){case Hc:e="Linear";break;case Gc:e="Reinhard";break;case Wc:e="Cineon";break;case bl:e="ACESFilmic";break;case qc:e="AgX";break;case Yc:e="Neutral";break;case Xc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zr=new L;function im(){qt.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function sm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function am(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Zi(i){return i!==""}function hl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ul(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const om=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(i){return i.replace(om,cm)}const lm=new Map;function cm(i,t){let e=Bt[t];if(e===void 0){const n=lm.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Na(e)}const hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(i){return i.replace(hm,um)}function um(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function dm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function fm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Di:case Li:t="ENVMAP_TYPE_CUBE";break;case Jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Li&&(t="ENVMAP_MODE_REFRACTION"),t}function mm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tl:t="ENVMAP_BLENDING_MULTIPLY";break;case kc:t="ENVMAP_BLENDING_MIX";break;case Vc:t="ENVMAP_BLENDING_ADD";break}return t}function gm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _m(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=dm(e),c=fm(e),u=pm(e),f=mm(e),h=gm(e),p=rm(e),g=sm(s),x=r.createProgram();let m,d,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zi).join(`
`),d.length>0&&(d+=`
`)):(m=[fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),d=[fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?nm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,em("linearToOutputTexel",e.outputColorSpace),im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zi).join(`
`)),a=Na(a),a=hl(a,e),a=ul(a,e),o=Na(o),o=hl(o,e),o=ul(o,e),a=dl(a),o=dl(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=A+m+a,E=A+d+o,R=ol(r,r.VERTEX_SHADER,T),w=ol(r,r.FRAGMENT_SHADER,E);r.attachShader(x,R),r.attachShader(x,w),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(P){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(x)||"",k=r.getShaderInfoLog(R)||"",q=r.getShaderInfoLog(w)||"",W=O.trim(),X=k.trim(),$=q.trim();let V=!0,ot=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,R,w);else{const ut=cl(r,R,"vertex"),Tt=cl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ut+`
`+Tt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||$==="")&&(ot=!1);ot&&(P.diagnostics={runnable:V,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:$,prefix:d}})}r.deleteShader(R),r.deleteShader(w),N=new Wr(r,x),S=am(r,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Zp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=w,this}let vm=0;class xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mm(t),e.set(t,n)),n}}class Mm{constructor(t){this.id=vm++,this.code=t,this.usedTimes=0}}function Sm(i,t,e,n,r,s,a){const o=new ja,l=new xm,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,O,k){const q=O.fog,W=k.geometry,X=S.isMeshStandardMaterial?O.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),V=$&&$.mapping===Jr?$.image.height:null,ot=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tt=ut!==void 0?ut.length:0;let kt=0;W.morphAttributes.position!==void 0&&(kt=1),W.morphAttributes.normal!==void 0&&(kt=2),W.morphAttributes.color!==void 0&&(kt=3);let ee,se,jt,Y;if(ot){const Kt=an[ot];ee=Kt.vertexShader,se=Kt.fragmentShader}else ee=S.vertexShader,se=S.fragmentShader,l.update(S),jt=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);const Z=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),It=k.isInstancedMesh===!0,yt=k.isBatchedMesh===!0,Wt=!!S.map,Re=!!S.matcap,b=!!$,ae=!!S.aoMap,Ut=!!S.lightMap,Ct=!!S.bumpMap,_t=!!S.normalMap,oe=!!S.displacementMap,vt=!!S.emissiveMap,Ot=!!S.metalnessMap,ye=!!S.roughnessMap,fe=S.anisotropy>0,y=S.clearcoat>0,_=S.dispersion>0,F=S.iridescence>0,G=S.sheen>0,K=S.transmission>0,H=fe&&!!S.anisotropyMap,Et=y&&!!S.clearcoatMap,it=y&&!!S.clearcoatNormalMap,xt=y&&!!S.clearcoatRoughnessMap,Mt=F&&!!S.iridescenceMap,tt=F&&!!S.iridescenceThicknessMap,ht=G&&!!S.sheenColorMap,Rt=G&&!!S.sheenRoughnessMap,St=!!S.specularMap,lt=!!S.specularColorMap,Nt=!!S.specularIntensityMap,I=K&&!!S.transmissionMap,et=K&&!!S.thicknessMap,rt=!!S.gradientMap,ft=!!S.alphaMap,J=S.alphaTest>0,j=!!S.alphaHash,gt=!!S.extensions;let Lt=Nn;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Lt=i.toneMapping);const ne={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:se,defines:S.defines,customVertexShaderID:jt,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:yt,batchingColor:yt&&k._colorsTexture!==null,instancing:It,instancingColor:It&&k.instanceColor!==null,instancingMorph:It&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ui,alphaToCoverage:!!S.alphaToCoverage,map:Wt,matcap:Re,envMap:b,envMapMode:b&&$.mapping,envMapCubeUVHeight:V,aoMap:ae,lightMap:Ut,bumpMap:Ct,normalMap:_t,displacementMap:h&&oe,emissiveMap:vt,normalMapObjectSpace:_t&&S.normalMapType===Zc,normalMapTangentSpace:_t&&S.normalMapType===Nl,metalnessMap:Ot,roughnessMap:ye,anisotropy:fe,anisotropyMap:H,clearcoat:y,clearcoatMap:Et,clearcoatNormalMap:it,clearcoatRoughnessMap:xt,dispersion:_,iridescence:F,iridescenceMap:Mt,iridescenceThicknessMap:tt,sheen:G,sheenColorMap:ht,sheenRoughnessMap:Rt,specularMap:St,specularColorMap:lt,specularIntensityMap:Nt,transmission:K,transmissionMap:I,thicknessMap:et,gradientMap:rt,opaque:S.transparent===!1&&S.blending===Ci&&S.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:j,combine:S.combine,mapUv:Wt&&x(S.map.channel),aoMapUv:ae&&x(S.aoMap.channel),lightMapUv:Ut&&x(S.lightMap.channel),bumpMapUv:Ct&&x(S.bumpMap.channel),normalMapUv:_t&&x(S.normalMap.channel),displacementMapUv:oe&&x(S.displacementMap.channel),emissiveMapUv:vt&&x(S.emissiveMap.channel),metalnessMapUv:Ot&&x(S.metalnessMap.channel),roughnessMapUv:ye&&x(S.roughnessMap.channel),anisotropyMapUv:H&&x(S.anisotropyMap.channel),clearcoatMapUv:Et&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:it&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&x(S.sheenRoughnessMap.channel),specularMapUv:St&&x(S.specularMap.channel),specularColorMapUv:lt&&x(S.specularColorMap.channel),specularIntensityMapUv:Nt&&x(S.specularIntensityMap.channel),transmissionMapUv:I&&x(S.transmissionMap.channel),thicknessMapUv:et&&x(S.thicknessMap.channel),alphaMapUv:ft&&x(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(_t||fe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Wt||ft),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pt,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:kt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Wt&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===Jt,decodeVideoTextureEmissive:vt&&S.emissiveMap.isVideoTexture===!0&&qt.getTransfer(S.emissiveMap.colorSpace)===Jt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===on,flipSided:S.side===ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:gt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&S.extensions.multiDraw===!0||yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(A(M,S),T(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function A(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=g[S.type];let P;if(M){const O=an[M];P=Vh.clone(O.uniforms)}else P=S.uniforms;return P}function R(S,M){let P;for(let O=0,k=u.length;O<k;O++){const q=u[O];if(q.cacheKey===M){P=q,++P.usedTimes;break}}return P===void 0&&(P=new _m(i,M,S,s),u.push(P)),P}function w(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:N}}function Em(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function ym(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ml(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,h,p,g,x,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),t++,d}function o(f,h,p,g,x,m){const d=a(f,h,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(f,h,p,g,x,m){const d=a(f,h,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function c(f,h){e.length>1&&e.sort(f||ym),n.length>1&&n.sort(h||pl),r.length>1&&r.sort(h||pl)}function u(){for(let f=t,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Tm(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new ml,i.set(n,[a])):r>=s.length?(a=new ml,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function bm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Vt};break;case"SpotLight":e={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Am(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let wm=0;function Rm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cm(i){const t=new bm,e=Am(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const r=new L,s=new re,a=new re;function o(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,A=0,T=0,E=0,R=0,w=0,C=0;c.sort(Rm);for(let S=0,M=c.length;S<M;S++){const P=c[S],O=P.color,k=P.intensity,q=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*k,f+=O.g*k,h+=O.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],k);C++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,V=e.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=P.shadow.matrix,A++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(k),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[x]=X;const $=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,$.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[x]=$.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=W,E++}x++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(O).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const $=P.shadow,V=e.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[d]=X,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const N=n.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==E||N.numSpotMaps!==R||N.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=E,N.numSpotMaps=R,N.numLightProbes=C,n.version=wm++)}function l(c,u){let f=0,h=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const T=c[d];if(T.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(T.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function gl(i){const t=new Cm(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Pm(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new gl(i),t.set(r,[o])):s>=a.length?(o=new gl(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dm=`uniform sampler2D shadow_pass;
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
}`;function Lm(i,t,e){let n=new Ja;const r=new Dt,s=new Dt,a=new Qt,o=new Zh({depthPacking:$c}),l=new Jh,c={},u=e.maxTextureSize,f={[Fn]:ke,[ke]:Fn,[on]:on},h=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Im,fragmentShader:Dm}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ae(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let d=this.type;this.render=function(w,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Un),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=d!==Mn&&this.type===Mn,q=d===Mn&&this.type!==Mn;for(let W=0,X=w.length;W<X;W++){const $=w[W],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ot=V.getFrameExtents();if(r.multiply(ot),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ot.x),r.x=s.x*ot.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ot.y),r.y=s.y*ot.y,V.mapSize.y=s.y)),V.map===null||k===!0||q===!0){const Tt=this.type!==Mn?{minFilter:en,magFilter:en}:{};V.map!==null&&V.map.dispose(),V.map=new ei(r.x,r.y,Tt),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ut=V.getViewportCount();for(let Tt=0;Tt<ut;Tt++){const kt=V.getViewport(Tt);a.set(s.x*kt.x,s.y*kt.y,s.x*kt.z,s.y*kt.w),O.viewport(a),V.updateMatrices($,Tt),n=V.getFrustum(),E(C,N,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Mn&&A(V,N),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,P)};function A(w,C){const N=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ei(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,N,h,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,N,p,x,null)}function T(w,C,N,S){let M=null;const P=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=N.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=M.uuid,k=C.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let W=q[k];W===void 0&&(W=M.clone(),q[k]=W,C.addEventListener("dispose",R)),M=W}if(M.visible=C.visible,M.wireframe=C.wireframe,S===Mn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=N}return M}function E(w,C,N,S,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Mn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const k=t.update(w),q=w.material;if(Array.isArray(q)){const W=k.groups;for(let X=0,$=W.length;X<$;X++){const V=W[X],ot=q[V.materialIndex];if(ot&&ot.visible){const ut=T(w,ot,S,M);w.onBeforeShadow(i,w,C,N,k,ut,V),i.renderBufferDirect(N,null,k,ut,w,V),w.onAfterShadow(i,w,C,N,k,ut,V)}}}else if(q.visible){const W=T(w,q,S,M);w.onBeforeShadow(i,w,C,N,k,W,null),i.renderBufferDirect(N,null,k,W,w,null),w.onAfterShadow(i,w,C,N,k,W,null)}}const O=w.children;for(let k=0,q=O.length;k<q;k++)E(O[k],C,N,S,M)}function R(w){w.target.removeEventListener("dispose",R);for(const N in c){const S=c[N],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Um={[Xs]:qs,[Ys]:$s,[js]:Zs,[Ii]:Ks,[qs]:Xs,[$s]:Ys,[Zs]:js,[Ks]:Ii};function Nm(i,t){function e(){let I=!1;const et=new Qt;let rt=null;const ft=new Qt(0,0,0,0);return{setMask:function(J){rt!==J&&!I&&(i.colorMask(J,J,J,J),rt=J)},setLocked:function(J){I=J},setClear:function(J,j,gt,Lt,ne){ne===!0&&(J*=Lt,j*=Lt,gt*=Lt),et.set(J,j,gt,Lt),ft.equals(et)===!1&&(i.clearColor(J,j,gt,Lt),ft.copy(et))},reset:function(){I=!1,rt=null,ft.set(-1,0,0,0)}}}function n(){let I=!1,et=!1,rt=null,ft=null,J=null;return{setReversed:function(j){if(et!==j){const gt=t.get("EXT_clip_control");j?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),et=j;const Lt=J;J=null,this.setClear(Lt)}},getReversed:function(){return et},setTest:function(j){j?Z(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(j){rt!==j&&!I&&(i.depthMask(j),rt=j)},setFunc:function(j){if(et&&(j=Um[j]),ft!==j){switch(j){case Xs:i.depthFunc(i.NEVER);break;case qs:i.depthFunc(i.ALWAYS);break;case Ys:i.depthFunc(i.LESS);break;case Ii:i.depthFunc(i.LEQUAL);break;case js:i.depthFunc(i.EQUAL);break;case Ks:i.depthFunc(i.GEQUAL);break;case $s:i.depthFunc(i.GREATER);break;case Zs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=j}},setLocked:function(j){I=j},setClear:function(j){J!==j&&(et&&(j=1-j),i.clearDepth(j),J=j)},reset:function(){I=!1,rt=null,ft=null,J=null,et=!1}}}function r(){let I=!1,et=null,rt=null,ft=null,J=null,j=null,gt=null,Lt=null,ne=null;return{setTest:function(Kt){I||(Kt?Z(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(Kt){et!==Kt&&!I&&(i.stencilMask(Kt),et=Kt)},setFunc:function(Kt,fn,rn){(rt!==Kt||ft!==fn||J!==rn)&&(i.stencilFunc(Kt,fn,rn),rt=Kt,ft=fn,J=rn)},setOp:function(Kt,fn,rn){(j!==Kt||gt!==fn||Lt!==rn)&&(i.stencilOp(Kt,fn,rn),j=Kt,gt=fn,Lt=rn)},setLocked:function(Kt){I=Kt},setClear:function(Kt){ne!==Kt&&(i.clearStencil(Kt),ne=Kt)},reset:function(){I=!1,et=null,rt=null,ft=null,J=null,j=null,gt=null,Lt=null,ne=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],g=null,x=!1,m=null,d=null,A=null,T=null,E=null,R=null,w=null,C=new Vt(0,0,0),N=0,S=!1,M=null,P=null,O=null,k=null,q=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=$>=2);let ot=null,ut={};const Tt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),ee=new Qt().fromArray(Tt),se=new Qt().fromArray(kt);function jt(I,et,rt,ft){const J=new Uint8Array(4),j=i.createTexture();i.bindTexture(I,j),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<rt;gt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(et+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return j}const Y={};Y[i.TEXTURE_2D]=jt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Ii),Ct(!1),_t(fo),Z(i.CULL_FACE),ae(Un);function Z(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function pt(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function It(I,et){return f[I]!==et?(i.bindFramebuffer(I,et),f[I]=et,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=et),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=et),!0):!1}function yt(I,et){let rt=p,ft=!1;if(I){rt=h.get(et),rt===void 0&&(rt=[],h.set(et,rt));const J=I.textures;if(rt.length!==J.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let j=0,gt=J.length;j<gt;j++)rt[j]=i.COLOR_ATTACHMENT0+j;rt.length=J.length,ft=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,ft=!0);ft&&i.drawBuffers(rt)}function Wt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Re={[Kn]:i.FUNC_ADD,[yc]:i.FUNC_SUBTRACT,[Tc]:i.FUNC_REVERSE_SUBTRACT};Re[bc]=i.MIN,Re[Ac]=i.MAX;const b={[wc]:i.ZERO,[Rc]:i.ONE,[Cc]:i.SRC_COLOR,[Gs]:i.SRC_ALPHA,[Nc]:i.SRC_ALPHA_SATURATE,[Lc]:i.DST_COLOR,[Ic]:i.DST_ALPHA,[Pc]:i.ONE_MINUS_SRC_COLOR,[Ws]:i.ONE_MINUS_SRC_ALPHA,[Uc]:i.ONE_MINUS_DST_COLOR,[Dc]:i.ONE_MINUS_DST_ALPHA,[Fc]:i.CONSTANT_COLOR,[Oc]:i.ONE_MINUS_CONSTANT_COLOR,[Bc]:i.CONSTANT_ALPHA,[zc]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(I,et,rt,ft,J,j,gt,Lt,ne,Kt){if(I===Un){x===!0&&(pt(i.BLEND),x=!1);return}if(x===!1&&(Z(i.BLEND),x=!0),I!==Ec){if(I!==m||Kt!==S){if((d!==Kn||E!==Kn)&&(i.blendEquation(i.FUNC_ADD),d=Kn,E=Kn),Kt)switch(I){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFunc(i.ONE,i.ONE);break;case mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case go:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case go:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,T=null,R=null,w=null,C.set(0,0,0),N=0,m=I,S=Kt}return}J=J||et,j=j||rt,gt=gt||ft,(et!==d||J!==E)&&(i.blendEquationSeparate(Re[et],Re[J]),d=et,E=J),(rt!==A||ft!==T||j!==R||gt!==w)&&(i.blendFuncSeparate(b[rt],b[ft],b[j],b[gt]),A=rt,T=ft,R=j,w=gt),(Lt.equals(C)===!1||ne!==N)&&(i.blendColor(Lt.r,Lt.g,Lt.b,ne),C.copy(Lt),N=ne),m=I,S=!1}function Ut(I,et){I.side===on?pt(i.CULL_FACE):Z(i.CULL_FACE);let rt=I.side===ke;et&&(rt=!rt),Ct(rt),I.blending===Ci&&I.transparent===!1?ae(Un):ae(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ft=I.stencilWrite;o.setTest(ft),ft&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function _t(I){I!==xc?(Z(i.CULL_FACE),I!==P&&(I===fo?i.cullFace(i.BACK):I===Mc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),P=I}function oe(I){I!==O&&(X&&i.lineWidth(I),O=I)}function vt(I,et,rt){I?(Z(i.POLYGON_OFFSET_FILL),(k!==et||q!==rt)&&(i.polygonOffset(et,rt),k=et,q=rt)):pt(i.POLYGON_OFFSET_FILL)}function Ot(I){I?Z(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function ye(I){I===void 0&&(I=i.TEXTURE0+W-1),ot!==I&&(i.activeTexture(I),ot=I)}function fe(I,et,rt){rt===void 0&&(ot===null?rt=i.TEXTURE0+W-1:rt=ot);let ft=ut[rt];ft===void 0&&(ft={type:void 0,texture:void 0},ut[rt]=ft),(ft.type!==I||ft.texture!==et)&&(ot!==rt&&(i.activeTexture(rt),ot=rt),i.bindTexture(I,et||Y[I]),ft.type=I,ft.texture=et)}function y(){const I=ut[ot];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(I){ee.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ee.copy(I))}function Rt(I){se.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),se.copy(I))}function St(I,et){let rt=c.get(et);rt===void 0&&(rt=new WeakMap,c.set(et,rt));let ft=rt.get(I);ft===void 0&&(ft=i.getUniformBlockIndex(et,I.name),rt.set(I,ft))}function lt(I,et){const ft=c.get(et).get(I);l.get(et)!==ft&&(i.uniformBlockBinding(et,ft,I.__bindingPointIndex),l.set(et,ft))}function Nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ot=null,ut={},f={},h=new WeakMap,p=[],g=null,x=!1,m=null,d=null,A=null,T=null,E=null,R=null,w=null,C=new Vt(0,0,0),N=0,S=!1,M=null,P=null,O=null,k=null,q=null,ee.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:pt,bindFramebuffer:It,drawBuffers:yt,useProgram:Wt,setBlending:ae,setMaterial:Ut,setFlipSided:Ct,setCullFace:_t,setLineWidth:oe,setPolygonOffset:vt,setScissorTest:Ot,activeTexture:ye,bindTexture:fe,unbindTexture:y,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Mt,texImage3D:tt,updateUBOMapping:St,uniformBlockBinding:lt,texStorage2D:it,texStorage3D:xt,texSubImage2D:G,texSubImage3D:K,compressedTexSubImage2D:H,compressedTexSubImage3D:Et,scissor:ht,viewport:Rt,reset:Nt}}function Fm(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return p?new OffscreenCanvas(y,_):sr("canvas")}function x(y,_,F){let G=1;const K=fe(y);if((K.width>F||K.height>F)&&(G=F/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const H=Math.floor(G*K.width),Et=Math.floor(G*K.height);f===void 0&&(f=g(H,Et));const it=_?g(H,Et):f;return it.width=H,it.height=Et,it.getContext("2d").drawImage(y,0,0,H,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+H+"x"+Et+")."),it}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){i.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,_,F,G,K=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let H=_;if(_===i.RED&&(F===i.FLOAT&&(H=i.R32F),F===i.HALF_FLOAT&&(H=i.R16F),F===i.UNSIGNED_BYTE&&(H=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.R8UI),F===i.UNSIGNED_SHORT&&(H=i.R16UI),F===i.UNSIGNED_INT&&(H=i.R32UI),F===i.BYTE&&(H=i.R8I),F===i.SHORT&&(H=i.R16I),F===i.INT&&(H=i.R32I)),_===i.RG&&(F===i.FLOAT&&(H=i.RG32F),F===i.HALF_FLOAT&&(H=i.RG16F),F===i.UNSIGNED_BYTE&&(H=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.RG8UI),F===i.UNSIGNED_SHORT&&(H=i.RG16UI),F===i.UNSIGNED_INT&&(H=i.RG32UI),F===i.BYTE&&(H=i.RG8I),F===i.SHORT&&(H=i.RG16I),F===i.INT&&(H=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.RGB8UI),F===i.UNSIGNED_SHORT&&(H=i.RGB16UI),F===i.UNSIGNED_INT&&(H=i.RGB32UI),F===i.BYTE&&(H=i.RGB8I),F===i.SHORT&&(H=i.RGB16I),F===i.INT&&(H=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),F===i.UNSIGNED_INT&&(H=i.RGBA32UI),F===i.BYTE&&(H=i.RGBA8I),F===i.SHORT&&(H=i.RGBA16I),F===i.INT&&(H=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(H=i.R11F_G11F_B10F)),_===i.RGBA){const Et=K?Xr:qt.getTransfer(G);F===i.FLOAT&&(H=i.RGBA32F),F===i.HALF_FLOAT&&(H=i.RGBA16F),F===i.UNSIGNED_BYTE&&(H=Et===Jt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function E(y,_){let F;return y?_===null||_===ti||_===er?F=i.DEPTH24_STENCIL8:_===Sn?F=i.DEPTH32F_STENCIL8:_===tr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ti||_===er?F=i.DEPTH_COMPONENT24:_===Sn?F=i.DEPTH_COMPONENT32F:_===tr&&(F=i.DEPTH_COMPONENT16),F}function R(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==en&&y.minFilter!==ln?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function w(y){const _=y.target;_.removeEventListener("dispose",w),N(_),_.isVideoTexture&&u.delete(_)}function C(y){const _=y.target;_.removeEventListener("dispose",C),M(_)}function N(y){const _=n.get(y);if(_.__webglInit===void 0)return;const F=y.source,G=h.get(F);if(G){const K=G[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(y),Object.keys(G).length===0&&h.delete(F)}n.remove(y)}function S(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const F=y.source,G=h.get(F);delete G[_.__cacheKey],a.memory.textures--}function M(y){const _=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let K=0;K<_.__webglFramebuffer[G].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[G][K]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=y.textures;for(let G=0,K=F.length;G<K;G++){const H=n.get(F[G]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(F[G])}n.remove(y)}let P=0;function O(){P=0}function k(){const y=P;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),P+=1,y}function q(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function W(y,_){const F=n.get(y);if(y.isVideoTexture&&Ot(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const G=y.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,y,_);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function X(y,_){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){Y(F,y,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function $(y,_){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){Y(F,y,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function V(y,_){const F=n.get(y);if(y.version>0&&F.__version!==y.version){Z(F,y,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const ot={[ta]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},ut={[en]:i.NEAREST,[jc]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[ls]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Tt={[Jc]:i.NEVER,[rh]:i.ALWAYS,[Qc]:i.LESS,[Fl]:i.LEQUAL,[th]:i.EQUAL,[ih]:i.GEQUAL,[eh]:i.GREATER,[nh]:i.NOTEQUAL};function kt(y,_){if(_.type===Sn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ln||_.magFilter===ls||_.magFilter===pr||_.magFilter===Qn||_.minFilter===ln||_.minFilter===ls||_.minFilter===pr||_.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,ot[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,ot[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,ot[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,ut[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,ut[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Tt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===en||_.minFilter!==pr&&_.minFilter!==Qn||_.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ee(y,_){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",w));const G=_.source;let K=h.get(G);K===void 0&&(K={},h.set(G,K));const H=q(_);if(H!==y.__cacheKey){K[H]===void 0&&(K[H]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[H].usedTimes++;const Et=K[y.__cacheKey];Et!==void 0&&(K[y.__cacheKey].usedTimes--,Et.usedTimes===0&&S(_)),y.__cacheKey=H,y.__webglTexture=K[H].texture}return F}function se(y,_,F){return Math.floor(Math.floor(y/F)/_)}function jt(y,_,F,G){const H=y.updateRanges;if(H.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,G,_.data);else{H.sort((tt,ht)=>tt.start-ht.start);let Et=0;for(let tt=1;tt<H.length;tt++){const ht=H[Et],Rt=H[tt],St=ht.start+ht.count,lt=se(Rt.start,_.width,4),Nt=se(ht.start,_.width,4);Rt.start<=St+1&&lt===Nt&&se(Rt.start+Rt.count-1,_.width,4)===lt?ht.count=Math.max(ht.count,Rt.start+Rt.count-ht.start):(++Et,H[Et]=Rt)}H.length=Et+1;const it=i.getParameter(i.UNPACK_ROW_LENGTH),xt=i.getParameter(i.UNPACK_SKIP_PIXELS),Mt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let tt=0,ht=H.length;tt<ht;tt++){const Rt=H[tt],St=Math.floor(Rt.start/4),lt=Math.ceil(Rt.count/4),Nt=St%_.width,I=Math.floor(St/_.width),et=lt,rt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Nt,I,et,rt,F,G,_.data)}y.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,it),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function Y(y,_,F){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);const K=ee(y,_),H=_.source;e.bindTexture(G,y.__webglTexture,i.TEXTURE0+F);const Et=n.get(H);if(H.version!==Et.__version||K===!0){e.activeTexture(i.TEXTURE0+F);const it=qt.getPrimaries(qt.workingColorSpace),xt=_.colorSpace===Ln?null:qt.getPrimaries(_.colorSpace),Mt=_.colorSpace===Ln||it===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let tt=x(_.image,!1,r.maxTextureSize);tt=ye(_,tt);const ht=s.convert(_.format,_.colorSpace),Rt=s.convert(_.type);let St=T(_.internalFormat,ht,Rt,_.colorSpace,_.isVideoTexture);kt(G,_);let lt;const Nt=_.mipmaps,I=_.isVideoTexture!==!0,et=Et.__version===void 0||K===!0,rt=H.dataReady,ft=R(_,tt);if(_.isDepthTexture)St=E(_.format===ir,_.type),et&&(I?e.texStorage2D(i.TEXTURE_2D,1,St,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,St,tt.width,tt.height,0,ht,Rt,null));else if(_.isDataTexture)if(Nt.length>0){I&&et&&e.texStorage2D(i.TEXTURE_2D,ft,St,Nt[0].width,Nt[0].height);for(let J=0,j=Nt.length;J<j;J++)lt=Nt[J],I?rt&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,lt.width,lt.height,ht,Rt,lt.data):e.texImage2D(i.TEXTURE_2D,J,St,lt.width,lt.height,0,ht,Rt,lt.data);_.generateMipmaps=!1}else I?(et&&e.texStorage2D(i.TEXTURE_2D,ft,St,tt.width,tt.height),rt&&jt(_,tt,ht,Rt)):e.texImage2D(i.TEXTURE_2D,0,St,tt.width,tt.height,0,ht,Rt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,St,Nt[0].width,Nt[0].height,tt.depth);for(let J=0,j=Nt.length;J<j;J++)if(lt=Nt[J],_.format!==tn)if(ht!==null)if(I){if(rt)if(_.layerUpdates.size>0){const gt=qo(lt.width,lt.height,_.format,_.type);for(const Lt of _.layerUpdates){const ne=lt.data.subarray(Lt*gt/lt.data.BYTES_PER_ELEMENT,(Lt+1)*gt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Lt,lt.width,lt.height,1,ht,ne)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,tt.depth,ht,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,St,lt.width,lt.height,tt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,tt.depth,ht,Rt,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,St,lt.width,lt.height,tt.depth,0,ht,Rt,lt.data)}else{I&&et&&e.texStorage2D(i.TEXTURE_2D,ft,St,Nt[0].width,Nt[0].height);for(let J=0,j=Nt.length;J<j;J++)lt=Nt[J],_.format!==tn?ht!==null?I?rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,lt.width,lt.height,ht,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,St,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?rt&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,lt.width,lt.height,ht,Rt,lt.data):e.texImage2D(i.TEXTURE_2D,J,St,lt.width,lt.height,0,ht,Rt,lt.data)}else if(_.isDataArrayTexture)if(I){if(et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,St,tt.width,tt.height,tt.depth),rt)if(_.layerUpdates.size>0){const J=qo(tt.width,tt.height,_.format,_.type);for(const j of _.layerUpdates){const gt=tt.data.subarray(j*J/tt.data.BYTES_PER_ELEMENT,(j+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,ht,Rt,gt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ht,Rt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,tt.width,tt.height,tt.depth,0,ht,Rt,tt.data);else if(_.isData3DTexture)I?(et&&e.texStorage3D(i.TEXTURE_3D,ft,St,tt.width,tt.height,tt.depth),rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ht,Rt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,St,tt.width,tt.height,tt.depth,0,ht,Rt,tt.data);else if(_.isFramebufferTexture){if(et)if(I)e.texStorage2D(i.TEXTURE_2D,ft,St,tt.width,tt.height);else{let J=tt.width,j=tt.height;for(let gt=0;gt<ft;gt++)e.texImage2D(i.TEXTURE_2D,gt,St,J,j,0,ht,Rt,null),J>>=1,j>>=1}}else if(Nt.length>0){if(I&&et){const J=fe(Nt[0]);e.texStorage2D(i.TEXTURE_2D,ft,St,J.width,J.height)}for(let J=0,j=Nt.length;J<j;J++)lt=Nt[J],I?rt&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ht,Rt,lt):e.texImage2D(i.TEXTURE_2D,J,St,ht,Rt,lt);_.generateMipmaps=!1}else if(I){if(et){const J=fe(tt);e.texStorage2D(i.TEXTURE_2D,ft,St,J.width,J.height)}rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Rt,tt)}else e.texImage2D(i.TEXTURE_2D,0,St,ht,Rt,tt);m(_)&&d(G),Et.__version=H.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Z(y,_,F){if(_.image.length!==6)return;const G=ee(y,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+F);const H=n.get(K);if(K.version!==H.__version||G===!0){e.activeTexture(i.TEXTURE0+F);const Et=qt.getPrimaries(qt.workingColorSpace),it=_.colorSpace===Ln?null:qt.getPrimaries(_.colorSpace),xt=_.colorSpace===Ln||Et===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Mt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,ht=[];for(let j=0;j<6;j++)!Mt&&!tt?ht[j]=x(_.image[j],!0,r.maxCubemapSize):ht[j]=tt?_.image[j].image:_.image[j],ht[j]=ye(_,ht[j]);const Rt=ht[0],St=s.convert(_.format,_.colorSpace),lt=s.convert(_.type),Nt=T(_.internalFormat,St,lt,_.colorSpace),I=_.isVideoTexture!==!0,et=H.__version===void 0||G===!0,rt=K.dataReady;let ft=R(_,Rt);kt(i.TEXTURE_CUBE_MAP,_);let J;if(Mt){I&&et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Nt,Rt.width,Rt.height);for(let j=0;j<6;j++){J=ht[j].mipmaps;for(let gt=0;gt<J.length;gt++){const Lt=J[gt];_.format!==tn?St!==null?I?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,Lt.width,Lt.height,St,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,Nt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,Lt.width,Lt.height,St,lt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,Nt,Lt.width,Lt.height,0,St,lt,Lt.data)}}}else{if(J=_.mipmaps,I&&et){J.length>0&&ft++;const j=fe(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Nt,j.width,j.height)}for(let j=0;j<6;j++)if(tt){I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ht[j].width,ht[j].height,St,lt,ht[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Nt,ht[j].width,ht[j].height,0,St,lt,ht[j].data);for(let gt=0;gt<J.length;gt++){const ne=J[gt].image[j].image;I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,ne.width,ne.height,St,lt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,Nt,ne.width,ne.height,0,St,lt,ne.data)}}else{I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,St,lt,ht[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Nt,St,lt,ht[j]);for(let gt=0;gt<J.length;gt++){const Lt=J[gt];I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,St,lt,Lt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,Nt,St,lt,Lt.image[j])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),H.__version=K.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function pt(y,_,F,G,K,H){const Et=s.convert(F.format,F.colorSpace),it=s.convert(F.type),xt=T(F.internalFormat,Et,it,F.colorSpace),Mt=n.get(_),tt=n.get(F);if(tt.__renderTarget=_,!Mt.__hasExternalTextures){const ht=Math.max(1,_.width>>H),Rt=Math.max(1,_.height>>H);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,H,xt,ht,Rt,_.depth,0,Et,it,null):e.texImage2D(K,H,xt,ht,Rt,0,Et,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,K,tt.__webglTexture,0,oe(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,K,tt.__webglTexture,H),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(y,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const G=_.depthTexture,K=G&&G.isDepthTexture?G.type:null,H=E(_.stencilBuffer,K),Et=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=oe(_);vt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,H,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,H,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,H,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,y)}else{const G=_.textures;for(let K=0;K<G.length;K++){const H=G[K],Et=s.convert(H.format,H.colorSpace),it=s.convert(H.type),xt=T(H.internalFormat,Et,it,H.colorSpace),Mt=oe(_);F&&vt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,xt,_.width,_.height):vt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,xt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,xt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(_.depthTexture);G.__renderTarget=_,(!G.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const K=G.__webglTexture,H=oe(_);if(_.depthTexture.format===nr)vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(_.depthTexture.format===ir)vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Wt(y){const _=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const G=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=G}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const G=y.texture.mipmaps;G&&G.length>0?yt(_.__webglFramebuffer[0],y):yt(_.__webglFramebuffer,y)}else if(F){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),It(_.__webglDepthbuffer[G],y,!1);else{const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,H)}}else{const G=y.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),It(_.__webglDepthbuffer,y,!1);else{const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,H)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(y,_,F){const G=n.get(y);_!==void 0&&pt(G.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Wt(y)}function b(y){const _=y.texture,F=n.get(y),G=n.get(_);y.addEventListener("dispose",C);const K=y.textures,H=y.isWebGLCubeRenderTarget===!0,Et=K.length>1;if(Et||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,a.memory.textures++),H){F.__webglFramebuffer=[];for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[it]=[];for(let xt=0;xt<_.mipmaps.length;xt++)F.__webglFramebuffer[it][xt]=i.createFramebuffer()}else F.__webglFramebuffer[it]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let it=0;it<_.mipmaps.length;it++)F.__webglFramebuffer[it]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Et)for(let it=0,xt=K.length;it<xt;it++){const Mt=n.get(K[it]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&vt(y)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let it=0;it<K.length;it++){const xt=K[it];F.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[it]);const Mt=s.convert(xt.format,xt.colorSpace),tt=s.convert(xt.type),ht=T(xt.internalFormat,Mt,tt,xt.colorSpace,y.isXRRenderTarget===!0),Rt=oe(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,ht,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,F.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),It(F.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),kt(i.TEXTURE_CUBE_MAP,_);for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0)for(let xt=0;xt<_.mipmaps.length;xt++)pt(F.__webglFramebuffer[it][xt],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt);else pt(F.__webglFramebuffer[it],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(_)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let it=0,xt=K.length;it<xt;it++){const Mt=K[it],tt=n.get(Mt);let ht=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ht=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,tt.__webglTexture),kt(ht,Mt),pt(F.__webglFramebuffer,y,Mt,i.COLOR_ATTACHMENT0+it,ht,0),m(Mt)&&d(ht)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(it=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,G.__webglTexture),kt(it,_),_.mipmaps&&_.mipmaps.length>0)for(let xt=0;xt<_.mipmaps.length;xt++)pt(F.__webglFramebuffer[xt],y,_,i.COLOR_ATTACHMENT0,it,xt);else pt(F.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,it,0);m(_)&&d(it),e.unbindTexture()}y.depthBuffer&&Wt(y)}function ae(y){const _=y.textures;for(let F=0,G=_.length;F<G;F++){const K=_[F];if(m(K)){const H=A(y),Et=n.get(K).__webglTexture;e.bindTexture(H,Et),d(H),e.unbindTexture()}}}const Ut=[],Ct=[];function _t(y){if(y.samples>0){if(vt(y)===!1){const _=y.textures,F=y.width,G=y.height;let K=i.COLOR_BUFFER_BIT;const H=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(y),it=_.length>1;if(it)for(let Mt=0;Mt<_.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const xt=y.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Mt=0;Mt<_.length;Mt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Mt]);const tt=n.get(_[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,F,G,0,0,F,G,K,i.NEAREST),l===!0&&(Ut.length=0,Ct.length=0,Ut.push(i.COLOR_ATTACHMENT0+Mt),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Ut.push(H),Ct.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let Mt=0;Mt<_.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Mt]);const tt=n.get(_[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function oe(y){return Math.min(r.maxSamples,y.samples)}function vt(y){const _=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ot(y){const _=a.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function ye(y,_){const F=y.colorSpace,G=y.format,K=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==Ui&&F!==Ln&&(qt.getTransfer(F)===Jt?(G!==tn||K!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function fe(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Re,this.setupRenderTarget=b,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=vt}function Om(i,t){function e(n,r=Ln){let s;const a=qt.getTransfer(r);if(n===un)return i.UNSIGNED_BYTE;if(n===ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wl)return i.BYTE;if(n===Rl)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===lr)return i.HALF_FLOAT;if(n===Il)return i.ALPHA;if(n===Dl)return i.RGB;if(n===tn)return i.RGBA;if(n===nr)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===Ul)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===Wa)return i.RGBA_INTEGER;if(n===kr||n===Vr||n===Hr||n===Gr)if(a===Jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===kr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===kr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===na||n===ia||n===ra||n===sa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===na)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ia)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===oa||n===la)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===aa||n===oa)return a===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===la)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===Sa||n===Ea)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ca)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ua)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pa)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ma)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===va)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xa)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ya||n===Ta||n===ba)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ya)return a===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ba)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Aa||n===wa||n===Ra||n===Ca)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Aa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
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

}`;class km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Zl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new On({vertexShader:Bm,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vm extends Oi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new km,d={},A=e.getContextAttributes();let T=null,E=null;const R=[],w=[],C=new Dt;let N=null;const S=new ze;S.viewport=new Qt;const M=new ze;M.viewport=new Qt;const P=[S,M],O=new au;let k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=R[Y];return Z===void 0&&(Z=new Cs,R[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=R[Y];return Z===void 0&&(Z=new Cs,R[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=R[Y];return Z===void 0&&(Z=new Cs,R[Y]=Z),Z.getHandSpace()};function W(Y){const Z=w.indexOf(Y.inputSource);if(Z===-1)return;const pt=R[Z];pt!==void 0&&(pt.update(Y.inputSource,Y.frame,c||a),pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",$);for(let Y=0;Y<R.length;Y++){const Z=w[Y];Z!==null&&(w[Y]=null,R[Y].disconnect(Z))}k=null,q=null,m.reset();for(const Y in d)delete d[Y];t.setRenderTarget(T),p=null,h=null,f=null,r=null,E=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",X),r.addEventListener("inputsourceschange",$),A.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,It=null,yt=null;A.depth&&(yt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=A.stencil?ir:nr,It=A.stencil?er:ti);const Wt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Wt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),E=new ei(h.textureWidth,h.textureHeight,{format:tn,type:un,depthTexture:new $l(h.textureWidth,h.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const pt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,pt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ei(p.framebufferWidth,p.framebufferHeight,{format:tn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),jt.setContext(r),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Y){for(let Z=0;Z<Y.removed.length;Z++){const pt=Y.removed[Z],It=w.indexOf(pt);It>=0&&(w[It]=null,R[It].disconnect(pt))}for(let Z=0;Z<Y.added.length;Z++){const pt=Y.added[Z];let It=w.indexOf(pt);if(It===-1){for(let Wt=0;Wt<R.length;Wt++)if(Wt>=w.length){w.push(pt),It=Wt;break}else if(w[Wt]===null){w[Wt]=pt,It=Wt;break}if(It===-1)break}const yt=R[It];yt&&yt.connect(pt)}}const V=new L,ot=new L;function ut(Y,Z,pt){V.setFromMatrixPosition(Z.matrixWorld),ot.setFromMatrixPosition(pt.matrixWorld);const It=V.distanceTo(ot),yt=Z.projectionMatrix.elements,Wt=pt.projectionMatrix.elements,Re=yt[14]/(yt[10]-1),b=yt[14]/(yt[10]+1),ae=(yt[9]+1)/yt[5],Ut=(yt[9]-1)/yt[5],Ct=(yt[8]-1)/yt[0],_t=(Wt[8]+1)/Wt[0],oe=Re*Ct,vt=Re*_t,Ot=It/(-Ct+_t),ye=Ot*-Ct;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ye),Y.translateZ(Ot),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),yt[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const fe=Re+Ot,y=b+Ot,_=oe-ye,F=vt+(It-ye),G=ae*b/y*fe,K=Ut*b/y*fe;Y.projectionMatrix.makePerspective(_,F,G,K,fe,y),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Tt(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Z=Y.near,pt=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),O.near=M.near=S.near=Z,O.far=M.far=S.far=pt,(k!==O.near||q!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,q=O.far),O.layers.mask=Y.layers.mask|6,S.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const It=Y.parent,yt=O.cameras;Tt(O,It);for(let Wt=0;Wt<yt.length;Wt++)Tt(yt[Wt],It);yt.length===2?ut(O,S,M):O.projectionMatrix.copy(S.projectionMatrix),kt(Y,O,It)};function kt(Y,Z,pt){pt===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=rr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return d[Y]};let ee=null;function se(Y,Z){if(u=Z.getViewerPose(c||a),g=Z,u!==null){const pt=u.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let It=!1;pt.length!==O.cameras.length&&(O.cameras.length=0,It=!0);for(let b=0;b<pt.length;b++){const ae=pt[b];let Ut=null;if(p!==null)Ut=p.getViewport(ae);else{const _t=f.getViewSubImage(h,ae);Ut=_t.viewport,b===0&&(t.setRenderTargetTextures(E,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(E))}let Ct=P[b];Ct===void 0&&(Ct=new ze,Ct.layers.enable(b),Ct.viewport=new Qt,P[b]=Ct),Ct.matrix.fromArray(ae.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(ae.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),b===0&&(O.matrix.copy(Ct.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),It===!0&&O.cameras.push(Ct)}const yt=r.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const b=f.getDepthInformation(pt[0]);b&&b.isValid&&b.texture&&m.init(b,r.renderState)}if(yt&&yt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let b=0;b<pt.length;b++){const ae=pt[b].camera;if(ae){let Ut=d[ae];Ut||(Ut=new Zl,d[ae]=Ut);const Ct=f.getCameraImage(ae);Ut.sourceTexture=Ct}}}}for(let pt=0;pt<R.length;pt++){const It=w[pt],yt=R[pt];It!==null&&yt!==void 0&&yt.update(It,Z,c||a)}ee&&ee(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const jt=new ec;jt.setAnimationLoop(se),this.setAnimationLoop=function(Y){ee=Y},this.dispose=function(){}}}const Xn=new dn,Hm=new re;function Gm(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Hl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,T,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ke&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ke&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=t.get(d),T=A.envMap,E=A.envMapRotation;T&&(m.envMap.value=T,Xn.copy(E),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),m.envMapRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(Xn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ke&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const A=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Wm(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const E=T.program;n.uniformBlockBinding(A,E)}function c(A,T){let E=r[A.id];E===void 0&&(g(A),E=u(A),r[A.id]=E,A.addEventListener("dispose",m));const R=T.program;n.updateUBOMapping(A,R);const w=t.render.frame;s[A.id]!==w&&(h(A),s[A.id]=w)}function u(A){const T=f();A.__bindingPointIndex=T;const E=i.createBuffer(),R=A.__size,w=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const T=r[A.id],E=A.uniforms,R=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,C=E.length;w<C;w++){const N=Array.isArray(E[w])?E[w]:[E[w]];for(let S=0,M=N.length;S<M;S++){const P=N[S];if(p(P,w,S,R)===!0){const O=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let W=0;W<k.length;W++){const X=k[W],$=x(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,O+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,T,E,R){const w=A.value,C=T+"_"+E;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{const N=R[C];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return R[C]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function g(A){const T=A.uniforms;let E=0;const R=16;for(let C=0,N=T.length;C<N;C++){const S=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,P=S.length;M<P;M++){const O=S[M],k=Array.isArray(O.value)?O.value:[O.value];for(let q=0,W=k.length;q<W;q++){const X=k[q],$=x(X),V=E%R,ot=V%$.boundary,ut=V+ot;E+=ot,ut!==0&&R-ut<$.storage&&(E+=R-ut),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=$.storage}}}const w=E%R;return w>0&&(E+=R-w),A.__size=E,A.__cache={},this}function x(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const A in r)i.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Xm{constructor(t={}){const{canvas:e=Sh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const A=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let R=!1;this._outputColorSpace=Ie;let w=0,C=0,N=null,S=-1,M=null;const P=new Qt,O=new Qt;let k=null;const q=new Vt(0);let W=0,X=e.width,$=e.height,V=1,ot=null,ut=null;const Tt=new Qt(0,0,X,$),kt=new Qt(0,0,X,$);let ee=!1;const se=new Ja;let jt=!1,Y=!1;const Z=new re,pt=new L,It=new Qt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Re(){return N===null?V:1}let b=n;function ae(v,D){return e.getContext(v,D)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ba}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",J,!1),b===null){const D="webgl2";if(b=ae(D,v),b===null)throw ae(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ut,Ct,_t,oe,vt,Ot,ye,fe,y,_,F,G,K,H,Et,it,xt,Mt,tt,ht,Rt,St,lt,Nt;function I(){Ut=new ep(b),Ut.init(),St=new Om(b,Ut),Ct=new jf(b,Ut,t,St),_t=new Nm(b,Ut),Ct.reversedDepthBuffer&&h&&_t.buffers.depth.setReversed(!0),oe=new rp(b),vt=new Em,Ot=new Fm(b,Ut,_t,vt,Ct,St,oe),ye=new $f(E),fe=new tp(E),y=new cu(b),lt=new qf(b,y),_=new np(b,y,oe,lt),F=new ap(b,_,y,oe),tt=new sp(b,Ct,Ot),it=new Kf(vt),G=new Sm(E,ye,fe,Ut,Ct,lt,it),K=new Gm(E,vt),H=new Tm,Et=new Pm(Ut),Mt=new Xf(E,ye,fe,_t,F,p,l),xt=new Lm(E,F,Ct),Nt=new Wm(b,oe,Ct,_t),ht=new Yf(b,Ut,oe),Rt=new ip(b,Ut,oe),oe.programs=G.programs,E.capabilities=Ct,E.extensions=Ut,E.properties=vt,E.renderLists=H,E.shadowMap=xt,E.state=_t,E.info=oe}I();const et=new Vm(E,b);this.xr=et,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const v=Ut.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ut.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(X,$,!1))},this.getSize=function(v){return v.set(X,$)},this.setSize=function(v,D,B=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,$=D,e.width=Math.floor(v*V),e.height=Math.floor(D*V),B===!0&&(e.style.width=v+"px",e.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(X*V,$*V).floor()},this.setDrawingBufferSize=function(v,D,B){X=v,$=D,V=B,e.width=Math.floor(v*B),e.height=Math.floor(D*B),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(Tt)},this.setViewport=function(v,D,B,z){v.isVector4?Tt.set(v.x,v.y,v.z,v.w):Tt.set(v,D,B,z),_t.viewport(P.copy(Tt).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(kt)},this.setScissor=function(v,D,B,z){v.isVector4?kt.set(v.x,v.y,v.z,v.w):kt.set(v,D,B,z),_t.scissor(O.copy(kt).multiplyScalar(V).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(v){_t.setScissorTest(ee=v)},this.setOpaqueSort=function(v){ot=v},this.setTransparentSort=function(v){ut=v},this.getClearColor=function(v){return v.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,B=!0){let z=0;if(v){let U=!1;if(N!==null){const Q=N.texture.format;U=Q===Wa||Q===Ga||Q===Ha}if(U){const Q=N.texture.type,ct=Q===un||Q===ti||Q===tr||Q===er||Q===ka||Q===Va,mt=Mt.getClearColor(),dt=Mt.getClearAlpha(),wt=mt.r,Pt=mt.g,bt=mt.b;ct?(g[0]=wt,g[1]=Pt,g[2]=bt,g[3]=dt,b.clearBufferuiv(b.COLOR,0,g)):(x[0]=wt,x[1]=Pt,x[2]=bt,x[3]=dt,b.clearBufferiv(b.COLOR,0,x))}else z|=b.COLOR_BUFFER_BIT}D&&(z|=b.DEPTH_BUFFER_BIT),B&&(z|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",J,!1),Mt.dispose(),H.dispose(),Et.dispose(),vt.dispose(),ye.dispose(),fe.dispose(),F.dispose(),lt.dispose(),Nt.dispose(),G.dispose(),et.dispose(),et.removeEventListener("sessionstart",rn),et.removeEventListener("sessionend",ao),Bn.stop()};function rt(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const v=oe.autoReset,D=xt.enabled,B=xt.autoUpdate,z=xt.needsUpdate,U=xt.type;I(),oe.autoReset=v,xt.enabled=D,xt.autoUpdate=B,xt.needsUpdate=z,xt.type=U}function J(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function j(v){const D=v.target;D.removeEventListener("dispose",j),gt(D)}function gt(v){Lt(v),vt.remove(v)}function Lt(v){const D=vt.get(v).programs;D!==void 0&&(D.forEach(function(B){G.releaseProgram(B)}),v.isShaderMaterial&&G.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,B,z,U,Q){D===null&&(D=yt);const ct=U.isMesh&&U.matrixWorld.determinant()<0,mt=fc(v,D,B,z,U);_t.setMaterial(z,ct);let dt=B.index,wt=1;if(z.wireframe===!0){if(dt=_.getWireframeAttribute(B),dt===void 0)return;wt=2}const Pt=B.drawRange,bt=B.attributes.position;let Ht=Pt.start*wt,Zt=(Pt.start+Pt.count)*wt;Q!==null&&(Ht=Math.max(Ht,Q.start*wt),Zt=Math.min(Zt,(Q.start+Q.count)*wt)),dt!==null?(Ht=Math.max(Ht,0),Zt=Math.min(Zt,dt.count)):bt!=null&&(Ht=Math.max(Ht,0),Zt=Math.min(Zt,bt.count));const de=Zt-Ht;if(de<0||de===1/0)return;lt.setup(U,z,mt,B,dt);let ie,te=ht;if(dt!==null&&(ie=y.get(dt),te=Rt,te.setIndex(ie)),U.isMesh)z.wireframe===!0?(_t.setLineWidth(z.wireframeLinewidth*Re()),te.setMode(b.LINES)):te.setMode(b.TRIANGLES);else if(U.isLine){let At=z.linewidth;At===void 0&&(At=1),_t.setLineWidth(At*Re()),U.isLineSegments?te.setMode(b.LINES):U.isLineLoop?te.setMode(b.LINE_LOOP):te.setMode(b.LINE_STRIP)}else U.isPoints?te.setMode(b.POINTS):U.isSprite&&te.setMode(b.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))te.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const At=U._multiDrawStarts,he=U._multiDrawCounts,Xt=U._multiDrawCount,Ve=dt?y.get(dt).bytesPerElement:1,ai=vt.get(z).currentProgram.getUniforms();for(let He=0;He<Xt;He++)ai.setValue(b,"_gl_DrawID",He),te.render(At[He]/Ve,he[He])}else if(U.isInstancedMesh)te.renderInstances(Ht,de,U.count);else if(B.isInstancedBufferGeometry){const At=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,he=Math.min(B.instanceCount,At);te.renderInstances(Ht,de,he)}else te.render(Ht,de)};function ne(v,D,B){v.transparent===!0&&v.side===on&&v.forceSinglePass===!1?(v.side=ke,v.needsUpdate=!0,fr(v,D,B),v.side=Fn,v.needsUpdate=!0,fr(v,D,B),v.side=on):fr(v,D,B)}this.compile=function(v,D,B=null){B===null&&(B=v),d=Et.get(B),d.init(D),T.push(d),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),v!==B&&v.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const z=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let ct=0;ct<Q.length;ct++){const mt=Q[ct];ne(mt,B,U),z.add(mt)}else ne(Q,B,U),z.add(Q)}),d=T.pop(),z},this.compileAsync=function(v,D,B=null){const z=this.compile(v,D,B);return new Promise(U=>{function Q(){if(z.forEach(function(ct){vt.get(ct).currentProgram.isReady()&&z.delete(ct)}),z.size===0){U(v);return}setTimeout(Q,10)}Ut.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Kt=null;function fn(v){Kt&&Kt(v)}function rn(){Bn.stop()}function ao(){Bn.start()}const Bn=new ec;Bn.setAnimationLoop(fn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(v){Kt=v,et.setAnimationLoop(v),v===null?Bn.stop():Bn.start()},et.addEventListener("sessionstart",rn),et.addEventListener("sessionend",ao),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(D),D=et.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,D,N),d=Et.get(v,T.length),d.init(D),T.push(d),Z.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),se.setFromProjectionMatrix(Z,cn,D.reversedDepth),Y=this.localClippingEnabled,jt=it.init(this.clippingPlanes,Y),m=H.get(v,A.length),m.init(),A.push(m),et.enabled===!0&&et.isPresenting===!0){const Q=E.xr.getDepthSensingMesh();Q!==null&&as(Q,D,-1/0,E.sortObjects)}as(v,D,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ot,ut),Wt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Wt&&Mt.addToRenderList(m,v),this.info.render.frame++,jt===!0&&it.beginShadows();const B=d.state.shadowsArray;xt.render(B,v,D),jt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(d.setupLights(),D.isArrayCamera){const Q=D.cameras;if(U.length>0)for(let ct=0,mt=Q.length;ct<mt;ct++){const dt=Q[ct];lo(z,U,v,dt)}Wt&&Mt.render(v);for(let ct=0,mt=Q.length;ct<mt;ct++){const dt=Q[ct];oo(m,v,dt,dt.viewport)}}else U.length>0&&lo(z,U,v,D),Wt&&Mt.render(v),oo(m,v,D);N!==null&&C===0&&(Ot.updateMultisampleRenderTarget(N),Ot.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(E,v,D),lt.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(d=T[T.length-1],jt===!0&&it.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function as(v,D,B,z){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||se.intersectsSprite(v)){z&&It.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Z);const ct=F.update(v),mt=v.material;mt.visible&&m.push(v,ct,mt,B,It.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||se.intersectsObject(v))){const ct=F.update(v),mt=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),It.copy(v.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),It.copy(ct.boundingSphere.center)),It.applyMatrix4(v.matrixWorld).applyMatrix4(Z)),Array.isArray(mt)){const dt=ct.groups;for(let wt=0,Pt=dt.length;wt<Pt;wt++){const bt=dt[wt],Ht=mt[bt.materialIndex];Ht&&Ht.visible&&m.push(v,ct,Ht,B,It.z,bt)}}else mt.visible&&m.push(v,ct,mt,B,It.z,null)}}const Q=v.children;for(let ct=0,mt=Q.length;ct<mt;ct++)as(Q[ct],D,B,z)}function oo(v,D,B,z){const U=v.opaque,Q=v.transmissive,ct=v.transparent;d.setupLightsView(B),jt===!0&&it.setGlobalState(E.clippingPlanes,B),z&&_t.viewport(P.copy(z)),U.length>0&&dr(U,D,B),Q.length>0&&dr(Q,D,B),ct.length>0&&dr(ct,D,B),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function lo(v,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new ei(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?lr:un,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const Q=d.state.transmissionRenderTarget[z.id],ct=z.viewport||P;Q.setSize(ct.z*E.transmissionResolutionScale,ct.w*E.transmissionResolutionScale);const mt=E.getRenderTarget(),dt=E.getActiveCubeFace(),wt=E.getActiveMipmapLevel();E.setRenderTarget(Q),E.getClearColor(q),W=E.getClearAlpha(),W<1&&E.setClearColor(16777215,.5),E.clear(),Wt&&Mt.render(B);const Pt=E.toneMapping;E.toneMapping=Nn;const bt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),jt===!0&&it.setGlobalState(E.clippingPlanes,z),dr(v,B,z),Ot.updateMultisampleRenderTarget(Q),Ot.updateRenderTargetMipmap(Q),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Zt=0,de=D.length;Zt<de;Zt++){const ie=D[Zt],te=ie.object,At=ie.geometry,he=ie.material,Xt=ie.group;if(he.side===on&&te.layers.test(z.layers)){const Ve=he.side;he.side=ke,he.needsUpdate=!0,co(te,B,z,At,he,Xt),he.side=Ve,he.needsUpdate=!0,Ht=!0}}Ht===!0&&(Ot.updateMultisampleRenderTarget(Q),Ot.updateRenderTargetMipmap(Q))}E.setRenderTarget(mt,dt,wt),E.setClearColor(q,W),bt!==void 0&&(z.viewport=bt),E.toneMapping=Pt}function dr(v,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,Q=v.length;U<Q;U++){const ct=v[U],mt=ct.object,dt=ct.geometry,wt=ct.group;let Pt=ct.material;Pt.allowOverride===!0&&z!==null&&(Pt=z),mt.layers.test(B.layers)&&co(mt,D,B,dt,Pt,wt)}}function co(v,D,B,z,U,Q){v.onBeforeRender(E,D,B,z,U,Q),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(E,D,B,z,v,Q),U.transparent===!0&&U.side===on&&U.forceSinglePass===!1?(U.side=ke,U.needsUpdate=!0,E.renderBufferDirect(B,D,z,U,v,Q),U.side=Fn,U.needsUpdate=!0,E.renderBufferDirect(B,D,z,U,v,Q),U.side=on):E.renderBufferDirect(B,D,z,U,v,Q),v.onAfterRender(E,D,B,z,U,Q)}function fr(v,D,B){D.isScene!==!0&&(D=yt);const z=vt.get(v),U=d.state.lights,Q=d.state.shadowsArray,ct=U.state.version,mt=G.getParameters(v,U.state,Q,D,B),dt=G.getProgramCacheKey(mt);let wt=z.programs;z.environment=v.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(v.isMeshStandardMaterial?fe:ye).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,wt===void 0&&(v.addEventListener("dispose",j),wt=new Map,z.programs=wt);let Pt=wt.get(dt);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===ct)return uo(v,mt),Pt}else mt.uniforms=G.getUniforms(v),v.onBeforeCompile(mt,E),Pt=G.acquireProgram(mt,dt),wt.set(dt,Pt),z.uniforms=mt.uniforms;const bt=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(bt.clippingPlanes=it.uniform),uo(v,mt),z.needsLights=mc(v),z.lightsStateVersion=ct,z.needsLights&&(bt.ambientLightColor.value=U.state.ambient,bt.lightProbe.value=U.state.probe,bt.directionalLights.value=U.state.directional,bt.directionalLightShadows.value=U.state.directionalShadow,bt.spotLights.value=U.state.spot,bt.spotLightShadows.value=U.state.spotShadow,bt.rectAreaLights.value=U.state.rectArea,bt.ltc_1.value=U.state.rectAreaLTC1,bt.ltc_2.value=U.state.rectAreaLTC2,bt.pointLights.value=U.state.point,bt.pointLightShadows.value=U.state.pointShadow,bt.hemisphereLights.value=U.state.hemi,bt.directionalShadowMap.value=U.state.directionalShadowMap,bt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,bt.spotShadowMap.value=U.state.spotShadowMap,bt.spotLightMatrix.value=U.state.spotLightMatrix,bt.spotLightMap.value=U.state.spotLightMap,bt.pointShadowMap.value=U.state.pointShadowMap,bt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Pt,z.uniformsList=null,Pt}function ho(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=Wr.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function uo(v,D){const B=vt.get(v);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function fc(v,D,B,z,U){D.isScene!==!0&&(D=yt),Ot.resetTextureUnits();const Q=D.fog,ct=z.isMeshStandardMaterial?D.environment:null,mt=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ui,dt=(z.isMeshStandardMaterial?fe:ye).get(z.envMap||ct),wt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),bt=!!B.morphAttributes.position,Ht=!!B.morphAttributes.normal,Zt=!!B.morphAttributes.color;let de=Nn;z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(de=E.toneMapping);const ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,te=ie!==void 0?ie.length:0,At=vt.get(z),he=d.state.lights;if(jt===!0&&(Y===!0||v!==M)){const Ue=v===M&&z.id===S;it.setState(z,v,Ue)}let Xt=!1;z.version===At.__version?(At.needsLights&&At.lightsStateVersion!==he.state.version||At.outputColorSpace!==mt||U.isBatchedMesh&&At.batching===!1||!U.isBatchedMesh&&At.batching===!0||U.isBatchedMesh&&At.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&At.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&At.instancing===!1||!U.isInstancedMesh&&At.instancing===!0||U.isSkinnedMesh&&At.skinning===!1||!U.isSkinnedMesh&&At.skinning===!0||U.isInstancedMesh&&At.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&At.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&At.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&At.instancingMorph===!1&&U.morphTexture!==null||At.envMap!==dt||z.fog===!0&&At.fog!==Q||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==it.numPlanes||At.numIntersection!==it.numIntersection)||At.vertexAlphas!==wt||At.vertexTangents!==Pt||At.morphTargets!==bt||At.morphNormals!==Ht||At.morphColors!==Zt||At.toneMapping!==de||At.morphTargetsCount!==te)&&(Xt=!0):(Xt=!0,At.__version=z.version);let Ve=At.currentProgram;Xt===!0&&(Ve=fr(z,D,U));let ai=!1,He=!1,Vi=!1;const ue=Ve.getUniforms(),Xe=At.uniforms;if(_t.useProgram(Ve.program)&&(ai=!0,He=!0,Vi=!0),z.id!==S&&(S=z.id,He=!0),ai||M!==v){_t.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ue.setValue(b,"projectionMatrix",v.projectionMatrix),ue.setValue(b,"viewMatrix",v.matrixWorldInverse);const Be=ue.map.cameraPosition;Be!==void 0&&Be.setValue(b,pt.setFromMatrixPosition(v.matrixWorld)),Ct.logarithmicDepthBuffer&&ue.setValue(b,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ue.setValue(b,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,He=!0,Vi=!0)}if(U.isSkinnedMesh){ue.setOptional(b,U,"bindMatrix"),ue.setOptional(b,U,"bindMatrixInverse");const Ue=U.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ue.setValue(b,"boneTexture",Ue.boneTexture,Ot))}U.isBatchedMesh&&(ue.setOptional(b,U,"batchingTexture"),ue.setValue(b,"batchingTexture",U._matricesTexture,Ot),ue.setOptional(b,U,"batchingIdTexture"),ue.setValue(b,"batchingIdTexture",U._indirectTexture,Ot),ue.setOptional(b,U,"batchingColorTexture"),U._colorsTexture!==null&&ue.setValue(b,"batchingColorTexture",U._colorsTexture,Ot));const qe=B.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&tt.update(U,B,Ve),(He||At.receiveShadow!==U.receiveShadow)&&(At.receiveShadow=U.receiveShadow,ue.setValue(b,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Xe.envMap.value=dt,Xe.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Xe.envMapIntensity.value=D.environmentIntensity),He&&(ue.setValue(b,"toneMappingExposure",E.toneMappingExposure),At.needsLights&&pc(Xe,Vi),Q&&z.fog===!0&&K.refreshFogUniforms(Xe,Q),K.refreshMaterialUniforms(Xe,z,V,$,d.state.transmissionRenderTarget[v.id]),Wr.upload(b,ho(At),Xe,Ot)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Wr.upload(b,ho(At),Xe,Ot),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ue.setValue(b,"center",U.center),ue.setValue(b,"modelViewMatrix",U.modelViewMatrix),ue.setValue(b,"normalMatrix",U.normalMatrix),ue.setValue(b,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ue=z.uniformsGroups;for(let Be=0,os=Ue.length;Be<os;Be++){const zn=Ue[Be];Nt.update(zn,Ve),Nt.bind(zn,Ve)}}return Ve}function pc(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function mc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,D,B){const z=vt.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),vt.get(v.texture).__webglTexture=D,vt.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const B=vt.get(v);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};const gc=b.createFramebuffer();this.setRenderTarget=function(v,D=0,B=0){N=v,w=D,C=B;let z=!0,U=null,Q=!1,ct=!1;if(v){const dt=vt.get(v);if(dt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(b.FRAMEBUFFER,null),z=!1;else if(dt.__webglFramebuffer===void 0)Ot.setupRenderTarget(v);else if(dt.__hasExternalTextures)Ot.rebindTextures(v,vt.get(v.texture).__webglTexture,vt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const bt=v.depthTexture;if(dt.__boundDepthTexture!==bt){if(bt!==null&&vt.has(bt)&&(v.width!==bt.image.width||v.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(v)}}const wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ct=!0);const Pt=vt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?U=Pt[D][B]:U=Pt[D],Q=!0):v.samples>0&&Ot.useMultisampledRTT(v)===!1?U=vt.get(v).__webglMultisampledFramebuffer:Array.isArray(Pt)?U=Pt[B]:U=Pt,P.copy(v.viewport),O.copy(v.scissor),k=v.scissorTest}else P.copy(Tt).multiplyScalar(V).floor(),O.copy(kt).multiplyScalar(V).floor(),k=ee;if(B!==0&&(U=gc),_t.bindFramebuffer(b.FRAMEBUFFER,U)&&z&&_t.drawBuffers(v,U),_t.viewport(P),_t.scissor(O),_t.setScissorTest(k),Q){const dt=vt.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt.__webglTexture,B)}else if(ct){const dt=D;for(let wt=0;wt<v.textures.length;wt++){const Pt=vt.get(v.textures[wt]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+wt,Pt.__webglTexture,B,dt)}}else if(v!==null&&B!==0){const dt=vt.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,dt.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(v,D,B,z,U,Q,ct,mt=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=vt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt){_t.bindFramebuffer(b.FRAMEBUFFER,dt);try{const wt=v.textures[mt],Pt=wt.format,bt=wt.type;if(!Ct.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-z&&B>=0&&B<=v.height-U&&(v.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+mt),b.readPixels(D,B,z,U,St.convert(Pt),St.convert(bt),Q))}finally{const wt=N!==null?vt.get(N).__webglFramebuffer:null;_t.bindFramebuffer(b.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(v,D,B,z,U,Q,ct,mt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=vt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt)if(D>=0&&D<=v.width-z&&B>=0&&B<=v.height-U){_t.bindFramebuffer(b.FRAMEBUFFER,dt);const wt=v.textures[mt],Pt=wt.format,bt=wt.type;if(!Ct.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ht),b.bufferData(b.PIXEL_PACK_BUFFER,Q.byteLength,b.STREAM_READ),v.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+mt),b.readPixels(D,B,z,U,St.convert(Pt),St.convert(bt),0);const Zt=N!==null?vt.get(N).__webglFramebuffer:null;_t.bindFramebuffer(b.FRAMEBUFFER,Zt);const de=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Eh(b,de,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ht),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Q),b.deleteBuffer(Ht),b.deleteSync(de),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,B=0){const z=Math.pow(2,-B),U=Math.floor(v.image.width*z),Q=Math.floor(v.image.height*z),ct=D!==null?D.x:0,mt=D!==null?D.y:0;Ot.setTexture2D(v,0),b.copyTexSubImage2D(b.TEXTURE_2D,B,0,0,ct,mt,U,Q),_t.unbindTexture()};const _c=b.createFramebuffer(),vc=b.createFramebuffer();this.copyTextureToTexture=function(v,D,B=null,z=null,U=0,Q=null){Q===null&&(U!==0?(ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let ct,mt,dt,wt,Pt,bt,Ht,Zt,de;const ie=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(B!==null)ct=B.max.x-B.min.x,mt=B.max.y-B.min.y,dt=B.isBox3?B.max.z-B.min.z:1,wt=B.min.x,Pt=B.min.y,bt=B.isBox3?B.min.z:0;else{const qe=Math.pow(2,-U);ct=Math.floor(ie.width*qe),mt=Math.floor(ie.height*qe),v.isDataArrayTexture?dt=ie.depth:v.isData3DTexture?dt=Math.floor(ie.depth*qe):dt=1,wt=0,Pt=0,bt=0}z!==null?(Ht=z.x,Zt=z.y,de=z.z):(Ht=0,Zt=0,de=0);const te=St.convert(D.format),At=St.convert(D.type);let he;D.isData3DTexture?(Ot.setTexture3D(D,0),he=b.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ot.setTexture2DArray(D,0),he=b.TEXTURE_2D_ARRAY):(Ot.setTexture2D(D,0),he=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,D.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,D.unpackAlignment);const Xt=b.getParameter(b.UNPACK_ROW_LENGTH),Ve=b.getParameter(b.UNPACK_IMAGE_HEIGHT),ai=b.getParameter(b.UNPACK_SKIP_PIXELS),He=b.getParameter(b.UNPACK_SKIP_ROWS),Vi=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ie.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ie.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,wt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Pt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,bt);const ue=v.isDataArrayTexture||v.isData3DTexture,Xe=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const qe=vt.get(v),Ue=vt.get(D),Be=vt.get(qe.__renderTarget),os=vt.get(Ue.__renderTarget);_t.bindFramebuffer(b.READ_FRAMEBUFFER,Be.__webglFramebuffer),_t.bindFramebuffer(b.DRAW_FRAMEBUFFER,os.__webglFramebuffer);for(let zn=0;zn<dt;zn++)ue&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,vt.get(v).__webglTexture,U,bt+zn),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,vt.get(D).__webglTexture,Q,de+zn)),b.blitFramebuffer(wt,Pt,ct,mt,Ht,Zt,ct,mt,b.DEPTH_BUFFER_BIT,b.NEAREST);_t.bindFramebuffer(b.READ_FRAMEBUFFER,null),_t.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||vt.has(v)){const qe=vt.get(v),Ue=vt.get(D);_t.bindFramebuffer(b.READ_FRAMEBUFFER,_c),_t.bindFramebuffer(b.DRAW_FRAMEBUFFER,vc);for(let Be=0;Be<dt;Be++)ue?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,qe.__webglTexture,U,bt+Be):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,qe.__webglTexture,U),Xe?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ue.__webglTexture,Q,de+Be):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ue.__webglTexture,Q),U!==0?b.blitFramebuffer(wt,Pt,ct,mt,Ht,Zt,ct,mt,b.COLOR_BUFFER_BIT,b.NEAREST):Xe?b.copyTexSubImage3D(he,Q,Ht,Zt,de+Be,wt,Pt,ct,mt):b.copyTexSubImage2D(he,Q,Ht,Zt,wt,Pt,ct,mt);_t.bindFramebuffer(b.READ_FRAMEBUFFER,null),_t.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Xe?v.isDataTexture||v.isData3DTexture?b.texSubImage3D(he,Q,Ht,Zt,de,ct,mt,dt,te,At,ie.data):D.isCompressedArrayTexture?b.compressedTexSubImage3D(he,Q,Ht,Zt,de,ct,mt,dt,te,ie.data):b.texSubImage3D(he,Q,Ht,Zt,de,ct,mt,dt,te,At,ie):v.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Q,Ht,Zt,ct,mt,te,At,ie.data):v.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Q,Ht,Zt,ie.width,ie.height,te,ie.data):b.texSubImage2D(b.TEXTURE_2D,Q,Ht,Zt,ct,mt,te,At,ie);b.pixelStorei(b.UNPACK_ROW_LENGTH,Xt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ve),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ai),b.pixelStorei(b.UNPACK_SKIP_ROWS,He),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Vi),Q===0&&D.generateMipmaps&&b.generateMipmap(he),_t.unbindTexture()},this.initRenderTarget=function(v){vt.get(v).__webglFramebuffer===void 0&&Ot.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ot.setTextureCube(v,0):v.isData3DTexture?Ot.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ot.setTexture2DArray(v,0):Ot.setTexture2D(v,0),_t.unbindTexture()},this.resetState=function(){w=0,C=0,N=null,_t.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const En=[{name:"数字的童年",period:"第 I—III 章",concept:"观察价格 · 认识交易规则",color:3230784,whisper:"我以为数字不会欺骗我。后来我知道，数字抵达的时间也会。",motif:"board"},{name:"离开旧方法",period:"第 IV—VI 章",concept:"重新开始 · 从波动到趋势",color:5064754,whisper:"椅子空着。那个老人留下的答案，比任何消息都慢。",motif:"clock"},{name:"风暴的方向",period:"第 VII—IX 章",concept:"试探与加仓 · 1907年恐慌",color:3426645,whisper:"窗外不是海。是所有人都需要、却忽然消失的钱。",motif:"ship"},{name:"棉花的雪",period:"第 X—XII 章",concept:"知与行的裂缝 · 权威与自我",color:5851968,whisper:"棉花很轻。一个相信自己不会犯错的人，却能被它压垮。",motif:"cotton"},{name:"债务的冬天",period:"第 XIII—XV 章",concept:"人情、破产与重建 · 外部风险",color:4080203,whisper:"债务没有声音。它只是跟着我，坐在每一张报价板前。",motif:"safe"},{name:"消息的回声",period:"第 XVI—XVIII 章",concept:"小道消息 · 经验与事实",color:4016698,whisper:"电话每响一次，便有人替我想好了一种未来。",motif:"phone"},{name:"幕后剧场",period:"第 XIX—XXI 章",concept:"历史操纵 · 供需与退出",color:5258051,whisper:"舞台上，价格在上升。舞台下，有人正在寻找接过股票的手。",motif:"press"},{name:"留给公众的信",period:"第 XXII—XXIV 章",concept:"发行、宣传与责任 · 全书回望",color:3427404,whisper:"最后一扇门后没有秘诀。只有你自己的判断。",motif:"paper"}],ur=[{n:1,roman:"I",title:"那本沾着粉笔灰的小册子",object:"观察笔记",kind:"book",quote:"先记录发生了什么，再判断自己是否看懂。",scene:"你翻开桌上的小册子。铅笔在页边留下一行很短的预测；下一行，却是后来真实发生的价格。",story:["故事开始时，拉里还是一个替经纪行抄写报价的少年。客户守着行情机念出价格，他把数字写上大黑板。最初，他并不关心企业的名字和经营。他关心的是数字怎样变化：一段上涨开始之前，价格曾怎样停顿；一次下跌来临之前，买卖的力量怎样变得不一样。长时间重复的工作，渐渐成了观察市场的学校。","他凭记忆比较今天与过去，后来拿出一本小册子，把预测写进去，再用实际报价检查。这里的重点不是假想赚了多少钱，而是他观察得准不准。他不把事后编好的理由当作事前的判断。少年第一次参与实际交易，赚到的钱很少，却第一次把自己对数字的理解换成了真实的结果。","在对赌行里，他的这种短线读盘能力很快见效。所谓对赌行，并不把客户每笔订单送到交易所，而是与客户对赌报价涨跌。持续盈利的客户损害老板的利益；他逐渐受到限制，甚至不再被接待。一间看起来像经纪行的屋子，与真实证券市场之间，隔着完全不同的规则。","原章还写到店家提高保证金、加收不利于他的价差，以及人为摆布报价的手段。成功没有证明这套办法可以放到任何地方。他学会读数字，却还没有学会辨认数字背后的交易制度。第一间房的门，正是这份尚未被察觉的局限。"],principle:"把判断、依据与后续事实分开记录，才有可能发现自己的真实能力。正确几次并不等于有稳定优势；交易对手、费用和执行方式同样会改变结果。"},{n:2,roman:"II",title:"纽约来的行李箱",object:"旧行李箱",kind:"suitcase",quote:"换了交易场所，就得重新理解自己的优势。",scene:"箱子的皮革已经裂开。你抬起盖子，里面没有衣服，只有一张到纽约的车票和一叠越来越薄的钞票。",story:["拉里二十一岁来到纽约时，随身带着两千五百美元。他并不是从未输过的神童：早先已经挣过更多的钱，也已经把它们失去过。他知道自己只在有充分把握时交易往往更有效，却常常因为想一直参与而偏离自己的方法。无论市场有没有合适机会，天天都想挣钱，本身就会制造亏损。","他希望到正规交易所会员的办公室里交易，靠近原始行情，摆脱对赌行施加的限制。但真正的股票买卖，不是按照黑板上的价格结算一次赌注。他看见价格、下达订单、订单送到场内、实际成交，再收到回报，这些环节之间存在时间差。短短一点波动，在对赌行可能足够获利，在真实市场却可能被迟延与执行价格吞掉。","账户吃紧之后，他又回到一些对赌场所筹集本金，甚至用不同身份进入不认识他的店。他的交易再次显示出读盘能力，也再次让老板不愿接待他。某个老板把话说得很直白：普通客户的损失养活这个地方，而一个能长期赢钱的人，并不属于这种生意。","本章的讽刺在于：把他赶出去的店家，间接迫使他学到更多。他不能永远依赖一个只允许别人输钱的游戏。可他也不能把在那个游戏里的成功，直接移植到纽约。这只行李箱装着本金，更装着一套尚未适应新环境的习惯。"],principle:"优势总是依附于具体条件。价格来源、成交延迟、费用、保证金和对手方是否可靠，会改变同一种判断的实际结果。频繁操作并不自动带来机会；想挣钱的愿望也不能代替有利条件。"},{n:3,roman:"III",title:"迟到的报价纸带",object:"行情纸带",kind:"board",quote:"看对方向，也可能输在时间与执行。",scene:"纸带像一条狭长的河流越过桌面。你读到的数字还在昨天的岸上，窗外的人群已经奔向另一边。",story:["拉里回顾自己的错误时，提出了一个超越多空阵营的判断：市场没有必须忠于的牛方或熊方，只有与实际形势相符的一方。可知道这句话，并不等于能够执行。用想象中的钱操作，人很容易觉得自己勇敢而准确；当真实本金、生活费用和自尊都压上去，决定会变得不同。","纽约的繁荣吸引了大批有钱人进场，股票成交量和投机热情都远超过他少年时的经验。他可以看见报价板，听见客户议论，却仍在用过去抓取小幅变动的办法处理一种更大、更复杂的市场。他还会在上涨中猜测顶点，卖空后迅速认错，再转向买入。市场很热闹，他的理解却没有同步长大。","1901年北太平洋相关的挤压与恐慌使这份局限突然显形。行情机严重落后于现场成交，屏幕上看似仍能作为依据的数字，已经无法代表订单实际会成交的位置。他曾积累起相当可观的资金，却在剧烈行情里失去。问题不是故事里没有机会，而是他的行动所依据的时间和真实市场脱节。","此后反复交易与生活支出，又让他重新跌回低点。他逐渐意识到自己还没能准确说出问题所在。不能诊断自己的失败，就很容易把同一种失败叫成运气不好，继续重复。旧工具曾经很好用，但小弹丸并不适合新的猎物。"],principle:"分析、时机、执行与资金承受力是不同环节。对方向的判断不能掩盖执行风险。模拟成功与真实交易之间，还隔着心理压力和具体规则；把问题说清楚，是改变方法的起点。"},{n:4,roman:"IV",title:"退回来的汇票",object:"汇票与账页",kind:"ticket",quote:"重新开始之前，先查清上一次为什么结束。",scene:"抽屉里有一张被折过四次的汇票。折痕没有抹掉数字，只把它切成了一小块、一小块的勇气。",story:["离开纽约之后，拉里并没有放弃重返华尔街。他需要重新筹集本金，也相信有一天，当方法成熟时，只有规模更大的市场才能容纳他的交易。可家乡认识他的对赌行仍不愿接待他，不认识他的店又常常不可靠。他既要寻找可获利的报价，又要确认对手方真的会支付盈利。","他到外地考察所谓经纪业务。有些店用低佣金、直接连线、动人的股票消息包装自己，却保留了对赌式的生意逻辑。拉里逐步摸清它们如何执行订单，先小额试探，避免立即暴露自己。他不是只读一张价格表；他还在观察这个地方怎样挣钱、为什么欢迎某种客户。","当自己的盈利与店家的利益冲突时，名义上的便利很快消失。交易可以被改用不利方式执行，账户也可能遭遇干预。那些主动寄来的电报，声称有内部集团要把某股推高许多点，其目的未必是替客户挣钱，可能只是诱使客户在最容易被吞掉本金的环境里加大下注。","带着再次筹得的钱，他第三次尝试纽约。本章末尾，他逐项区分过去的失败：有的是在自己的方法没有优势时乱做；有的是极端行情与迟到报价造成；另一些还没有完全查明。他没有把“已经吃过苦”当作“已经学会”。损失能教人避免某些事情，但知道不要做什么，只是开始。"],principle:"复盘应当具体到触发、依据、执行和结果，避免把所有损失统称为“心态不好”。制度或执行问题与判断问题不同。重新筹得本金，只是恢复行动条件，不代表原来的问题已经修复。"},{n:5,roman:"V",title:"老人没有离开的椅子",object:"等待的座钟",kind:"clock",quote:"识别大势之后，仍然需要坐得住。",scene:"钟摆慢得令人心烦。你几乎想把它拨快。老人没有留下名字，只留下一个回答，像一张一直没有卖掉的股票。",story:["拉里发现，过度专注于报价的小幅变化，会让一个熟练读盘者失去弹性。价格行为确实能提供信息，但一套机械规则并不能概括全部市场。某只股票如果没有按预期表现，就不该因为既有公式而强行解释它。观察应当告诉人何时没有把握，而不只是告诉人何时觉得自己聪明。","办公室里有一位年长客户帕特里奇，大家给他起了带着调侃意味的绰号。他很少急着交易。别人带着内部消息和犹豫去问他，他总把谈话拉回总体环境：眼下是牛市。年轻的拉里最初以为这是敷衍，因为老人没有告诉别人哪天买、哪天卖。","直到有人劝老人先卖掉，等待回落再买回来，他才显露出真正重视的东西：自己的持仓位置。卖出固然能把纸面收益变成现金，但如果后来没有合适机会买回，便会失去继续参与主要上涨的资格。老人不是保证市场永远上涨，而是在说明，当大势仍支持原判断时，反复抓小差价可能牺牲更大的机会。","拉里逐渐把这份经验理解为对自己的纠正：真正让他赚到大钱的，不单是判断，而是正确以后能够等待。读盘仍然有用，但要服务于对主要行情的理解。故事没有把任何持有都赞美成耐心；它赞美的是有依据、有前提的持有。错误需要处理，正确的位置则不能只因短暂波动就轻易放弃。"],principle:"耐心与僵持的区别，在于前提是否还成立。行情总体仍支持判断时，小幅波动未必要求频繁退出；事实改变时，继续持有也不能借“坐得住”来自我辩护。"},{n:6,roman:"VI",title:"那封好心的电报",object:"联太铁路电报",kind:"letter",quote:"把别人的判断接过来，也把责任交出去了。",scene:"电报的纸已经发黄。落款像一只友善的手。你握住它时，没有察觉自己的另一只手已离开方向盘。",story:["1906年春天，拉里在大西洋城度假。他忽然强烈地想卖空联合太平洋，却说不清这份感觉来自何处。后来旧金山地震发生，相关股票与市场承受压力。书中把这个巧合放进他的回顾，但并没有提供一条可重复、可验证的“预知灾难”办法。一次难以解释的成功，最容易被旁人讲成神秘天赋。","随着灾情与资金需求显现，他加大卖空，获得利润。可同一只股票随后又成为另一课的材料。在萨拉托加，他依据市场表现判断上涨，买进联合太平洋。熟悉他的经纪人却带来非常肯定的劝告，声称内部情况不支持他的操作，出于好意希望他避免损失。","拉里接受了这份劝告，放弃自己的判断，甚至站到了相反方向。随后公司提高股息，价格向上，原先的读盘判断反而得到验证。这个失误不是陌生骗子欺骗了他，而是可信、能干、善意的人，其判断仍可能错误。关系的可靠，不等于信息结论的可靠。","他迅速平掉错误的空头，又转为买入，弥补损失并获得收益。他把这一段当作交易教育的重要转折：不再把一个人的名声放在自己观察到的事实之上，同时也要摆脱只盯个别价格波动的旧方法，开始思考基本条件。独立不是倔强，而是判断必须由自己的证据承担。"],principle:"可信的人也可能犯错。新的意见值得检验，却不应只凭地位或友谊覆盖已有证据。一次直觉恰好正确，不能被推广为预测灾难的能力；本章可学习的部分是纠错和保持独立。"},{n:7,roman:"VII",title:"越放越小的砝码",object:"试探天平",kind:"scale",quote:"让市场先证明你的起点，再考虑增加暴露。",scene:"天平的两侧不是黄金，而是两种声音：一边说“已经涨太多”，另一边说“它仍在往上走”。你放下第一枚砝码。",story:["拉里发现，多数人不要一份关于牛市或熊市的分析，他们想要一个具体代码和买卖指令。因为指令可以省掉研究，也可以在亏损时提供一个可以责怪的人。可他自己的进步，恰恰来自把单只股票的小变化放回整体市场，而不是向别人索取一个无需思考的答案。","他解释，买入上涨中的股票，不是因为喜欢付高价，而是因为价格的实际行为在确认方向。低价并不天然安全，高价也不天然意味着应该卖空。原章用大户德肯等交易故事说明，别人声称内部人在买入，并不能直接构成自己的买入理由；市场是否能吸收一笔真实的卖单，比传来的口头说法更能说明买方力量。","扩大仓位之前，他需要初始交易得到市场响应。他强调，第二笔买入不应只是因为第一笔正在亏损；第一笔先表现出利润，才有理由考虑增加。每一步都观察买卖的反应，等到条件与时机配合，再把规模提高。这和价格下跌后不断摊低成本，是两种不同的逻辑。","也并非每一种价格变化都适合立刻开展主要操作。市场有时还没有明确表现，交易者应当等待或试探，而不是由于自己已经形成理论就一次押满。本章将“看对”拆成更具体的过程：先选环境，再找时机，再由真实市场反应确认，最后才考虑规模。"],principle:"价格相对高低，不等于方向判断；加仓也应依赖新的确认，而不是挽救旧亏损。原书的金字塔式扩大必须连同风险与时机理解，不能简化为“上涨就永远加仓”。"},{n:8,roman:"VIII",title:"还没抵达的风暴",object:"货币紧张的报纸",kind:"paper",quote:"提前看见，不代表可以无限承受提前行动的代价。",scene:"纸上的风暴比窗外来得早。你把报纸展开，风穿过标题。桌上的日历却仍停在一个看起来平静的早晨。",story:["联太事件之后，拉里更警惕那些没有经过自己检验的意见。他不愿因为持有股票而选择看多，也不愿因为卖空而只搜寻坏消息。持仓应当来自对条件的判断，不能反过来改写判断。他逐步把货币、信用与整体经济环境纳入自己的市场观察。","在通向1907年危机的过程中，他看到资金条件日益紧张，认定大跌有其基础。他卖空，市场却还会反弹，价格迟迟不按他的时间表下降。他的分析可能指向一个正确的大方向，但过早扩大仓位使他承受了不必要的损耗。资金和耐力都不是无限的。","几次过早操作之后，他重新筹措有限的本金，继续观察市场。关键不是把宏观预见丢掉，而是把行动起点放到价格已经开始配合的时候。反弹变得无力，卖出越来越能够推动价格下行，市场反馈才逐渐同原来的分析接上。","本章不是一个预言家始终正确的故事。它写一个人如何因为正确得太早而陷入困境，再学会让行情自己证明时机。市场不会因为你的逻辑完整就停止反弹，也不会因为你已经没有钱等待，就提前给出应有的结果。"],principle:"方向与时机不同。一个正确的宏观观点，如果没有合适起点和可承受的资金结构，仍可形成错误交易。等待市场行为配合分析，是把有限资金与不确定时间相协调。"},{n:9,roman:"IX",title:"风暴里停下的船",object:"佛罗里达的帆船",kind:"ship",quote:"在恐慌中，流动性比理论上的价格更急迫。",scene:"船停在一片蓝黑色的水上。有人带来一份报纸。你本来已经离开市场，却在一眼之间听见纽约的钟声。",story:["拉里在佛罗里达海岸度假，暂时没有股票仓位。朋友带来的报纸写着市场强劲反弹。他的看空不是来自眼前一根跌线，而是资金条件仍没有改变：这次上涨在他看来超出了环境所能支持的程度。他上岸到经纪行重新观察，而不是只凭船上的标题下单。","他开始卖空，并根据股票的实际表现选择自己的操作。原章中关于安纳康达等股票的交易，继续说明强弱反应的重要性。公司名字或价格到了某个整数位，并不能单独说明安全；买卖之后市场怎样回应，才决定他是否继续承担更多暴露。","1907年恐慌真正展开后，问题已不限于股价，整个市场缺少维持交易的资金。借钱难，买方消失，证券可能必须在极不利条件下出售。拉里的空头在这一阶段获利，他也从交易回报中感受到市场承接能力的骤然变化。","在全市场接近失控时，他接到希望不要再扩大下跌压力的请求，最后停止进攻并买入回补。书中对这个场面的叙述带有戏剧性：一个以卖空获利的人，也可以在关键时刻成为买方。这里不是一个永远坚持阵营的英雄，而是一个会根据市场状态改变行动的操作者。"],principle:"危机中的价格，还包含现金需求和成交能力。做空与买入并不是身份；情况改变时，应当重新判断下一步。1907年这段事件属于历史叙事，不能当作今天任何市场都会照样发生的剧本。"},{n:10,roman:"X",title:"镜子里的希望与恐惧",object:"两面镜",kind:"mirror",quote:"亏损时盼它回来，盈利时怕它消失，恰好会把行动推向错误。",scene:"镜中没有你的脸，只有两个交替亮起的字：希望，恐惧。你靠近时，它们交换位置。",story:["拉里说，投机者有时明知道自己正在犯错，仍然做下去。事后能够说明发生在什么地方、何时开始、怎样扩大，却说不清为什么当时停不住。错误伤害的不仅是钱包，还有虚荣。人因此愿意躲开某一种痛，却又可能在它的近亲身上重新受伤。","本章把“最小阻力方向”讲得更具体。市场有时长期处于狭窄区间，涨一点又跌回去，跌一点又被买起。他曾经看好棉花，反复用自己的买入推动它，自己停下后价格就退回。这样的操作消耗了大量资金；后来真正的行情到来时，他已付出过早行动的代价。","对于这种横向整理，他强调先观察范围，等待价格真正摆脱限制，而不是急着证明理论。讨论小麦时，他宁愿等它超过某个重要位置之后再参与，也不因为当前看起来便宜就立即买。较高的价格若伴随更明确的市场反馈，可能比低价时毫无方向的下注更有依据。","最后，他把希望与恐惧翻转：不利时，人希望明天会好，因而容忍更大亏损；有利时，人害怕利润消失，过早结束正确的位置。交易要求抵抗这种自然冲动。他也提醒，没有人能永久战胜整个市场。局部成功、某次获利，都不能变成每次参与都必须赢的承诺。"],principle:"等待有意义的反馈，不等于等待任何价格都替你实现愿望。约束亏损与给正确判断留出空间，必须结合事实变化理解。原书的突破位置是历史案例，不是可机械套用的统一数值。"},{n:11,roman:"XI",title:"一顶并不属于他的皇冠",object:"谷物交割账",kind:"book",quote:"一次成功里，能力、条件与偶然性可能同时存在。",scene:"账簿旁边有一块写着“棉花之王”的牌子。你翻到盈亏那一页，发现皇冠的影子遮住了一个空白。",story:["1907年股票上的胜利之后，拉里想驾游艇南下，却被谷物头寸留住。他看空小麦与玉米，小麦下跌让他获利，玉米却遭遇另一位大交易者试图控制供给、挤压空头。一个人在整体判断上可能合理，仍会因特定合约的持仓结构陷入危险。","他不只是空等理论成立，而是观察关联商品的反应，并借其他谷物的交易影响市场情绪，寻求解除玉米困境的机会。原章还用其他操作者的故事说明，同一个消息在不同的整体布局里可以产生不同用途。消息并没有一种脱离仓位、流动性和市场条件的固定答案。","随后他在佛罗里达听说著名棉花投机者珀西·托马斯的失败。拉里长期敬佩这个人物，后来自己参与棉花交易，积累了一笔大额多头。他也面对一个实际问题：头寸很大，平常的市场承接量有限，怎样卖掉而不让自己的卖出毁掉报价上的利润？","一次报纸报道和市场误解意外地创造了强烈买盘，使他的退出比预想顺利得多。旁人却把它解释成他精心安排的操作，媒体给他戴上“棉花之王”的名号。他明确说那份名声包含偶然性，并非全部来自自己掌控。这个名号又成为下一章相识托马斯的桥梁：别人看见的英雄形象，将开始影响他对自己的判断。"],principle:"归因要区分可重复的判断、具体市场结构和无法安排的偶然事件。尤其要区分账面盈利与大头寸实际退出的难度。赢过一次，未必掌握了别人以为你掌握的全部能力。"},{n:12,roman:"XII",title:"一包棉花压垮的房间",object:"托马斯的棉花包",kind:"cotton",quote:"知道原则，与在受压时执行原则，是两件事。",scene:"棉花从麻绳的缝里露出来。你按下去，它几乎没有重量。房间却在你松手后，安静地向下沉。",story:["珀西·托马斯是一位知识丰富、表达极有说服力的棉花专家。他的资料来自广泛的通信网络，他对产量、需求和供给的解释让拉里钦佩。拉里最初并不看多棉花，自己从公开信息和市场表现得到的结论，与托马斯不同。但持续交谈让他渐渐失去对自己证据的信心。","问题不在于所有数字必然虚假，而在于他停止用自己的方式检验结论。托马斯把自己的信息讲成独有且可靠，把别人可获得的信息讲成不可靠。拉里最终通过对方递来的同一页材料观察整个市场，逐渐接受了对方的看多。他失去的首先是判断的独立，而后才是本金。","当棉花不按预期表现时，拉里没有采用自己原来主张的做法。他增加失利的棉花仓位，又卖掉仍然表现良好的小麦，用正确交易的资源支持错误交易。赢的一边被切掉，输的一边被喂大。他不是没听过纪律，而是在信念、权威和亏损压力混合时，无法让纪律约束自己。","重创之后，他又急着通过交易满足具体用钱需求，包括用市场替自己支付某件想买的东西。这样的目标要求市场立刻配合自己的时间表，使观察变成许愿。最后他不仅失去棉花交易后剩余的资金，还继续交易、继续借债。本章把失去自我判断、补救亏损与迫切需求连成了一条清楚的下坠路径。"],principle:"权威资料可以参考，但不能代替自己的检验。不应把卖出有效仓位、扩大无效仓位包装成坚持。个人开支与翻本愿望不是市场机会；急迫的需要会压缩等待条件的能力。"},{n:13,roman:"XIII",title:"不用偿还的钱，不能放下的恩情",object:"人情借据",kind:"letter",quote:"人情义务也可能成为看不见的交易限制。",scene:"信纸上的字句温和得像炉火：不用急着还。你把信靠近灯光，才看见背面印着另一行更细的条款。",story:["棉花后的拉里不仅缺钱，还失去了平静。他习惯大规模交易，回到很小的头寸时觉得每一个正确判断都不再值得。他焦虑、身体不适，担心自己的判断能力已经消失。过去的成功反而成为一个尺度，让他难以接受现在必须从小处重新开始。","经纪人丹·威廉森给了他帮助和二万五千美元的资金，拉里很快恢复了一段成功交易。他想还款，对方却坚持不必急。他感激这种支持，没有坚持清偿，也觉得自己不应取走盈利。金钱上的借款逐渐与难以结清的人情搅在一起。","威廉森随后干预他的交易。他卖空某只铁路股，经纪人未经拉里所希望的方式处理了头寸，又以内部消息为由劝阻。拉里愿意让步，不愿对帮助过自己的人表现得不够体谅。可是他觉得应当做的交易不断被阻止，赚钱的机会与判断自由一起被压缩。","后来拉里把这件事解释为利益冲突：威廉森所顾及的家族遗产持有大量股票，不愿一个有能力的大空头自由行动。应注意这是叙述者的回顾与推断。无论动机怎样，已发生的交易限制是真实的。一个看起来非常善意的关系，把他绑在一个不利于发挥判断的环境里，恢复因此被拖延。"],principle:"借款条件、账户权限与利益关系应当清楚。感谢不应意味着无限让渡独立判断。对于书中人物的动机，要区分明确发生的行为与叙述者后来给出的解释。"},{n:14,roman:"XIV",title:"保险柜留给谁",object:"重建的保险柜",kind:"safe",quote:"保护生活的资金，也是在保护自己免受自己的冲动。",scene:"保险柜门开着。里面没有交易指令，只有两张小小的姓名卡。门外的纸带还在吐数字，这里却没有行情。",story:["离开威廉森之后，拉里又遇到漫长的困难市场。债权人的催促加重精神负担，他既想挣钱，也不能平静观察。第一次世界大战开始后，交易所关闭，使筹集本金和开展交易更困难。债务与缺少可做的市场，像两把锁同时扣在门上。","他最后通过破产程序卸下法律上的负担，精神状态才得以恢复。重新得到有限的交易支持后，他没有立刻全面出击，而是仔细等待自己熟悉的伯利恒钢铁达到认为有意义的关键位置。有限的资源要求他选择一个更确定的起点，先恢复正确观察和行动的配合。","战争造成的供应需求与资金流入推动美国市场繁荣，他在1915、1916年得到恢复机会。但途中仍有意料之外的事件，包括卢西塔尼亚号被击沉造成的市场震荡。回来并不是从此不会亏损，而是他重新能够理解条件、适应市场，并借有利环境累积资金。","1917年初，他偿还了超过一百万美元的旧债，虽然其中有些在法律上已无须偿还。随后他把一部分钱用于年金，并为妻儿设立信托。原章最令人清醒的一点是：他不仅担心市场夺走这笔钱，也担心自己会把任何能够拿到的钱再次用于交易。他要把家庭保障隔离在连自己的欲望也不能轻易触及的地方。"],principle:"恢复需要心理空间、可行条件和选择性行动，而不是被翻本期限驱赶。把生活保障与高风险资金分开，是承认人的自控力有限。书中的具体信托安排属于人物历史经验，不是今天的法律方案。"},{n:15,roman:"XV",title:"被改写的咖啡合约",object:"咖啡交易合同",kind:"paper",quote:"分析的是供需，交易的却还包括规则。",scene:"合同的价格没有改变，边缘却被另一张纸覆盖了。你轻轻揭开，上面是一项刚刚生效的决定。",story:["拉里把投机的风险分成不同性质：正常的不确定性、无法预测的外部事件，以及别人的不公正行为。天气、事故、战争或突发发展不一定是谁的错。知道自己不可能有预知能力，是理解风险的一部分。但他也记得一些自己认为判断正确、行事正当，却因外部介入失去收益的经历。","咖啡交易就是其中之一。他根据战争期间的供给、运输和价格条件建立头寸，认为有充分的获利机会。对手面临难以交付的压力，转而向政府寻求干预，把他描述成将抬高美国人早餐成本的投机者。叙述中，这种争议使原来的商业供需问题成为公众政策问题。","价格限制和清算期限随后改变了原有交易环境，他只能处理合约，原本认为很有把握的收益未能实现。需要区分的是：本章表达了拉里对事件的看法，不意味着监管者的动机与全部事实都只存在这一个视角。对于读者，最稳固的教训是合约、交易制度和干预可能改变结果。","他还讨论“空头袭击”怎样被用于解释下跌。把所有下跌归罪于某个大户，能让持有人继续相信基本情况没有问题，却可能忽略真正的疲弱。对手或宣传者的故事可以安慰人，但行情为何持续缺少支持，仍要独立检查，不能只靠一个方便的替罪羊。"],principle:"市场风险不限于价格，也包括合约、运输、政策和执行条件。把某个交易者当作所有下跌的原因，不等于查清下跌。不要把叙述者对监管的抱怨，当成全部事实或现代法律结论。"},{n:16,roman:"XVI",title:"每个人都想传下去的电话",object:"小道消息电话",kind:"phone",quote:"消息被热心传递时，先问是谁希望你行动。",scene:"电话响了。你举起听筒，里面的人急着告诉你一个秘密。走廊里另外三台电话，正用同样的语气讲同一件事。",story:["为什么人如此渴望小道消息？拉里给出的回答里既有贪欲，也有虚荣。得到消息的人希望轻松获利，传消息的人则享受掌握秘密、影响他人的感觉。很多人不是只想得到可靠消息，而是想得到任何可以催促行动的消息；这一次错了，就等待下一次。","原章围绕婆罗洲锡等股票的消息故事说明，传闻也能变成宣传工具。主动向人提供所谓内部机会的人，不一定想帮对方挣钱；他可能需要更多买盘来支持自己出售。消息领取者又会变成消息传播者，一条建议沿着朋友、经纪行和客户关系不断复制。","这种传播的力量不来自每个人都做过研究，反而可能来自每一站都信任上一站。到了最后，很多人相信的是“别人已经知道”，却无人清楚最初资料的来源、条件和利益关系。话语越肯定，越容易掩盖证据的空缺。","拉里不把传来的每一句话当作指令。他强调经验、自己能够理解的材料与实际价格表现。即使一个提示偶然获利，也没有证明依靠提示的人建立了判断能力。读者需要辨认的，不只是消息真假，还包括消息为何在这个时间、通过这个人、带着这份急迫到达自己。"],principle:"核查来源、利益关系、可验证材料和消息的时效。不要因为传播路径熟悉，就认定源头可靠。可以参考信息，却不能把跟随别人下注当作完整研究。"},{n:17,roman:"XVII",title:"没有神谕的早餐桌",object:"早餐桌上的笔记",kind:"book",quote:"经验可以很快，但仍须追得回它的依据。",scene:"窗台有一个空杯子。朋友记住了黑猫，你记住了前夜谈过的资金与政策。故事越神秘，那些普通的细节越容易被忘掉。",story:["朋友喜欢把拉里的及时买卖讲成直觉传奇，例如黑猫出现之后他便卖掉股票。他自己却给出另一种解释：日常观察留下的材料，可能在没有主动推演时仍被大脑处理。决定看似突然，不代表没有来由；长期经验有时使判断在意识完全说清之前已经形成。","在华盛顿的一次行动中，他接触到税收、政策与市场相关的信息。回头看，突然卖出的决定仍能与前面累积的条件联系起来。他并不主张所有冲动都正确，也不能为每一次感受提供无误证明。他试着说明，旁人把快速识别叫作神秘预感，可能只是忽略了观察过程。","本章进一步写到板块倾向。许多人看到同类股票上涨，就买进“还没涨”的那一只，认为总会轮到它。但拉里宁愿检查为什么这只股票没有跟随。如果应该强却始终弱，那份不同本身就是信息；便宜或落后不是一种天然的补涨保证。","棉花交易的案例同样体现这一点。他观察到原来的强势正在变化，先后卖出，再根据持续没有反弹的表现追加判断，后来获利弥补过早卖空的损失。他没有因为之前在棉花上亏过钱而拒绝新机会，也没有因找回亏损就宣称神谕存在。经验和记忆的作用，是更快认识新的事实。"],principle:"直觉如果来自经验，应当尽量能回到具体观察；无法追溯的冲动不能仅凭感觉合理化。板块内的异常弱势值得检查，不应自动期待补涨。上一笔盈亏不应决定下一笔的事实判断。"},{n:18,roman:"XVIII",title:"同一只股票，另一扇门",object:"热带贸易账页",kind:"board",quote:"整体看法不能替单只股票否认正在发生的事实。",scene:"账页的前半是卖出，后半是买入。它们之间没有誓言，只有一条被反复描深的价格线。",story:["拉里讲热带贸易股票时，开头就把它与此前玉米遭到挤压的经验联系起来。公司内部集团反复利用活跃交易、看多宣传与空头持仓，让市场成为一场复杂的供需博弈。他既在这只股票上做多挣钱，也曾做空，不把它归入永久属于自己哪一方的对象。","在一段操作里，他利用相关股票的交易影响市场对这一组证券的看法，以应对对方对热带贸易价格的支撑。这些细节展示的是早期市场大交易者之间的历史博弈，不能作为现实操纵的行动教程。记忆宫殿把它放在档案里，是为了理解价格背后有哪些参与者与利益。","另一次，总体环境令他偏向看空，但热带贸易偏偏在大量卖出下继续变强。内部买盘没有退缩，实际表现与他想象的下跌不一样。他判断继续卖空已不明智，先回补，后来还转为买入，参与上涨。接受单只股票与总体理论暂时不同，是这一章最重要的变化。","但他随后又犯了一个较隐蔽的错：以为内部人应该像自己一样行动，于是持有过久，让部分纸面利润流失。他纠正对手的故事，却仍不能完全避免替对手写剧本。原章不断提醒，交易对象是眼前事实，不是自己推测别人“理应”怎样做。"],principle:"整体方向是背景，具体表现是新的证据。转换立场并不等于缺少原则；拒绝认错才可能使观点变成身份。不能假定其他人的目标、资金和退出方式都与你一致。"},{n:19,roman:"XIX",title:"锁起来的钱",object:"旧市场的铁柜",kind:"safe",quote:"价格之外，市场结构也决定谁可以等、谁必须走。",scene:"铁柜没有装股票。里面装着一张被盖章的支票。门一关，走廊另一头的交易声就忽然变得急促。",story:["叙述从拉里自己的交易转向更早的华尔街。所谓操纵不止一种：积累一大笔股票时不愿把自己的购买价格抬高，出售大批证券时希望更多公众接盘，以及控制某种股票的可交付供给、迫使空头买回，背后都是对供需与市场结构的利用。","他回顾丹尼尔·德鲁、范德比尔特和早年大交易者的轶事。有些人曾制造挤压，又被别人反过来挤压；名声、胆量和资金不能保证永久占优。早期市场把逼空者的力量视为一种荣耀，虚荣也参与了这些争夺。故事不是只有冷静计算，还有想要证明自己最强的冲动。","原章末尾有一段他人转述的旧事：有人借入资金，却不把它用于正常经营，而是拿着认证支票减少其他人能借到的钱。资金被锁住，依赖借款维持仓位的人便受到压力。这说明价格不只由公司经营决定，也会受到信用与交易资源的影响。","这些故事发生在不同历史环境，部分细节来自记忆和轶闻。它们不构成现代市场的普遍规则，更不是今天可以照搬的办法。留在这一间档案室里的，是一种观看角度：问谁拥有交付资源，谁依赖融资，谁能承受等待，以及报价表上没有写出的约束。"],principle:"认识市场结构，才能理解同一价格变化为何对不同参与者造成不同压力。历史操纵故事需要放回当时制度与资料可靠性中阅读；不能把传奇等同于证实的普遍规律。"},{n:20,roman:"XX",title:"价格背后的印刷机",object:"证券销售印刷机",kind:"press",quote:"把价格抬高，和真正卖得出去，并不是同一件事。",scene:"你转动机器，纸上印出了更高的价格。出口却没有多一双手。纸继续堆积，机器的声音开始空洞。",story:["拉里谈到詹姆斯·基恩等市场操作者，同时承认自己年轻时没有真正认识他们的技术。他从别人的故事与自己的经验，试着分清一个看起来神秘的工作：将证券分散到愿意持有的公众手中。推动价格只是其中一环；如果没有真实需求，报价再高也不能把一大笔股票成功换成现金。","他用“分销”的角度解释，这类操作者必须考虑持有人分布、交易活跃度与公众兴趣。集中在少数人手中的证券，和被许多人持续买卖的证券，具有不同市场状态。价格上升吸引注意，但注意是否转化为持续购买，决定原持有人究竟能卖多少。","他特别讨论上涨与回落的关系。公众常常在高价后见到回落，觉得获得了便宜；因此卖出并不只发生在最高点，也可能发生在从高位向下的过程。这里的历史解释提醒读者：成交量很大和热烈谈论，不必然说明内部人在继续看好，它也可能是证券正转移到新持有人手里。","即便自己承担这种工作，拉里也说仍要服从市场反馈：买入若不再能产生预期效果，就不能仅因为自己是操作者而坚持投入。所有人为推动都会遇到条件的边界。一个希望安排市场的人，仍然无法取消市场对自己安排的否定。"],principle:"报价、账面价值、成交活跃与最终退出是不同概念。高位回落并不天然便宜；需要理解供给正从谁流向谁。这里解释历史分销叙事，不提供现实操纵策略。"},{n:21,roman:"XXI",title:"钢铁与石油的两页账",object:"行业对照账簿",kind:"book",quote:"同样的手法，不能覆盖不同的市场条件。",scene:"左页的钢铁厂亮着灯，右页的石油公司没有声音。你把两页叠在一起，数字对不上，连纸张的重量都不同。",story:["这一章用具体案例替代一般讨论。帝国钢铁的公司情况不错，但股票不够活跃，缺少投机兴趣。拉里接手后，依据当时整体环境、企业状况与供需反馈，使交易逐渐活跃。原章描述他把价格提高约三十点，累计买入量却相对有限；关键不是只看自己投入多少，而是是否吸引了其他参与者的真实需求。","在这段历史分销中，他观察市场怎样承接卖出，而不是只看股价有没有上升。公众购买和交易活动能够形成一定流动性，但这种环境也必须不断检验。价格的成功变化并没有赋予任何操作者永久控制权。","接着，他讲石油产品公司。对方希望他帮助处理一大笔持仓，他最初觉得条件可疑，不愿接下，后来在人情压力下同意。结果与钢铁不同：证券的市场状态与供给条件没有配合，已有负担、相互竞争和不合适的时机，使他难以用过去的成功复制结果。","原章末尾把视角推向繁荣顶端：公众先看见股票从低价不断上升，以为每一个新价都太高；后来它越过更高位置，人又逐渐放弃限制的想法。不敢在高处追买，并不保证已有持有人会及时兑现。希望会模糊视线，大量纸面财富最终仍停留在纸上。"],principle:"案例比较应比较条件，不能只复制表面的动作。公司、供给、公众需求与总体环境不同，会改变同一做法的结果。希望让人接受没有边界的上涨，也让人把退出无限延后。"},{n:22,roman:"XXII",title:"裁缝收到的消息",object:"联合炉具的信",kind:"letter",quote:"一个大户的名字，不是公众收益的担保。",scene:"信不是寄给交易所的，是寄给一个做衣服的人。纸上写着某位名人的名字，好像这就足够解释明天。",story:["朋友吉姆·巴恩斯请拉里帮忙出售联合炉具的一大笔股票。拉里最初有多种顾虑，对方却把这当成私人帮忙，他最后同意尽力。本章再次让人情与市场判断相遇：不愿伤害关系的人，可能会接下本来不愿接受的任务。","联合炉具的发行出现在公众对新证券的胃口已接近饱和时。发起人仍希望复制繁荣中别人赚得的大额利润，却没有充分适应总体市场的变化。此前的高价、合并后的份额安排和他们对股票价值的期待，不能自动创造持续的公众购买。","不同参与者的行动又使操作更复杂。拉里要求资金与明确配合，但资金分期到达，内部人可能在他尝试建立市场时卖出。他最终面对下跌环境，只能按市场能给出的条件处理持仓。委托人对结果不满，认为他应该做到更多，而市场并不会因委托人曾经有过希望就回到原来的价格。","最令他不舒服的细节来自妻子的裁缝。裁缝说自己买了这只股票，因为听说拉里会把它做上去。一个内部的销售任务，被外部传闻翻译成了公众的获利承诺。没有见过委托、资金、供给条件的人，却承受了真实损失。拉里说，这让他更不愿给别人股票消息。"],principle:"名字、名气和参与某次操作，不等于收益保证。发行与宣传中的利益安排值得检查。私人任务传播成公众承诺时，最不了解条件的人可能承担最大误解。"},{n:23,roman:"XXIII",title:"匿名内幕人的报纸",object:"油股宣传报",kind:"paper",quote:"解释如果总保护同一方，就需要重新检查。",scene:"报纸上的引号很清楚，引号里面的人却没有名字。价格下跌时，它说坏人来了；价格上涨时，它说企业从未如此好。",story:["拉里承认，警告无法取消投机。人仍会判断错，突发事件仍会让认真计划失效，贪欲、恐惧和虚荣也不会消失。但这些自然风险之外，市场还有不应被接受的宣传与交易弊病。他看到与自己初入纽约时相比已经存在改善，却并不认为公众从此得到充分保护。","他详细描述一种熟悉的模式：企业好转时，内部人安静地买入，随后市场出现对公司盈利与前景的热烈报道。消息引用“某位重要内部人”“财务委员会成员”等匿名来源，既像具有权威，又无法追问责任。公众得到的不是完整资料，而是一个促使它们购买的有利版本。","等到前景变差，内部人可能先安静卖出，公开话语却不相应变得悲观。价格跌了，就解释成空头的攻击；有人正在退出，却告诉外部持有人不该害怕。文字与行动的方向相反，公众相信文字，就更容易替已经掌握信息的人承担持有的时间。","原章以油股等事件说明，拉里的名字也会被用作下跌的替罪对象。内部集团继续卖出，却宣称要惩罚袭击市场的空头，外部高价买家因此继续等待。真正的问题不是有没有一次卖空，而是这种方便的解释让人忽略持续下跌与供给的事实，越过本来应该重新判断的时刻。"],principle:"匿名权威、单一有利叙事与持续相反的市场表现，是值得查验的组合。区分报道声称、参与者实际行动与能被独立验证的资料。价格本身也不解释一切，但不能被宣传直接擦掉。"},{n:24,roman:"XXIV",title:"留在门口的最后一封信",object:"给公众的信",kind:"letter",quote:"市场没有替你思考的义务。",scene:"最后一封信没有封口。你可以把它读完，也可以把自己的问题放进去。窗外天色稍亮，行情机仍然没有停。",story:["全书最后，拉里回到公众为何希望被告知答案。经纪人可以提供资料与观点，但佣金来自眼前交易，分析却应当考虑未来条件。原章说行情常走在实际状况前面；这里表达的是市场面向预期的特征，不能把书中的月份范围当作永远固定的提前量。今天的盈利很好，不等于未来盈利一定维持。","经纪行的乐观建议还涉及客户关系。如果建议客户卖出，客户看到股价继续涨可能抱怨；劝客户买入，短期热闹又能增加佣金。并不是每位经纪人都故意欺骗，但职业激励和客户想听的话，会影响建议怎样被包装。公众必须理解这份关系，而不是假定每句热情建议都来自相同利益。","原章还讨论内部人馈赠股份、让受益者主动向周围宣传等做法：接受了好处的人会成为股票的销售网络，宣传于是看起来像出自许多独立的朋友。对发行规模、可流通供给和信息透明度的要求，体现出拉里对市场制度责任的关心。市场教育不应该只责怪被骗的人，还应当关注创造误导的结构。","书没有在这里写出人物后半生，也没有承诺掌握这些原则的人永不失败。前面二十三件物品已经证明，经验丰富的人也会在知道原则时违背原则。最后留给读者的不是一个股票代码，而是一种责任：观察、记录、核查自己的依据，承认判断与行动之间的裂缝，并在事实改变时重新思考。"],principle:"把建议放回其来源、激励、时效与证据中评估。经验能够帮助判断，却不能消灭人的弱点。全书的逻辑从观察价格到识别自己，再到认识制度与宣传：每一层都不可由一句秘诀替代。"}],le=(i,t,e,n)=>({n:i,title:t,stage:e,steps:n.map(([r,s,a,o,l])=>({title:r,mode:s,action:a,text:o,anchor:l}))}),is=[le(1,"粉笔、五美元与七张粉色票据","chalk",[["报价板前的少年","trace","拖动粉笔，写下报价","十四岁的拉里替经纪行抄写报价。数字最初只是数字；他开始记住它们上涨和下跌之前的习惯。你写下的不是一句秘诀，是下一次可以检查的观察。","I · quotation-board boy / memorandum book"],["伯灵顿的第一笔交易","dispatch","把五美元送到柜台","同事带来伯灵顿的消息，他先检查自己的小册子。书中这笔小小的实际交易，让预测第一次碰到真实的钱：他得到三美元十二美分的盈利。","I · Burlington / $3.12"],["七张粉色票据","stamp","揭开票据背后的条件","在环球对赌行，他持有七张各五百股的糖业空头票据。店家提高保证金并加收不利价差。读得懂数字的人，仍会被交易制度限制。","I · seven big pink tickets / three-point margin"]]),le(2,"二十一岁，到纽约","station",[["最后的两千五百美元","drag","拉开行李箱","他来到纽约时，带着全部两千五百美元。已经赚过，也已经输过。他要靠近原始行情，以为离来源更近就能摆脱那些店家的手脚。","II · age of 21 / twenty-five hundred dollars"],["订单离开你以后","dispatch","把订单送上电报线","真实经纪行会把订单送去成交，不会只按黑板报价结算赌注。报价、指令、成交和回报之间的间隔，正在改变他的旧优势。","II · New York / execution"],["保险柜对你锁上了","dial","转动柜门的把手","为重筹本金，他又到对赌行交易。老板看穿他不是普通的输钱客户。欢迎的笑脸消失，这门生意并不欢迎一个不断兑现盈利的人。","II · Horace Kent / the safe is locked"]]),le(3,"1901年5月9日：看对，输光","ticker",[["五万美元，没有股票","examine","把钟拨到五月九日","当日清晨，他手上接近五万美元现金，没有股票。他预想恐慌先造成大跌，再产生快速反弹，认为这会是一场两头都能获利的机会。","III · morning of May ninth"],["纸带还在昨天的岸上","hold","按住行情机，让纸带吐出","纸带严重落后。你面前缓慢出现的报价，并不是交易所此刻可以成交的位置。柜台另一端的价格已经走远，纸带仍像平常一样看起来可信。","III · unusual violence / delayed quotations"],["回报终于到达","dispatch","取回实际成交回报","他判断了大方向，却输掉全部现金。镜头把两条时间线摆在一起：你看见的价格、你真正成交的价格。它们之间的空白，吞掉了账户。","III · dead right / lost every cent"]]),le(4,"同一个柜台，两封相反的电报","telegrams",[["一半人收到买入","flip","翻到第一面电报","这些近似对赌行的公司把买入消息发给一批客户，又把同一股票的卖出消息发给另一批。它们的生意不是预测准确，而是让客户行动。","IV · hundreds of telegrams"],["另一半人收到卖出","flip","翻到另一面电报","翻过纸，承诺就反过来。少量真实交易的回报可被拿来证明整家机构“正规”；更多客户并不知道自己的订单如何被处理。","IV · buy and sell the same stock"],["第三次回纽约","drag","收起电报，拉上行李箱","拉里重新筹集本金，也重新区分失败的原因：无优势时乱做、迟延报价、尚未查明的问题。资金重来，不代表方法自动成熟。","IV · third attempt / actual practice"]]),le(5,"帕特里奇不肯卖掉的位置","chair",[["办公室里最慢的人","hold","按住扶手，坐一会儿","客户们带着消息与焦虑围住老人，他却听得很耐心。这里的时间放慢，走廊里的人仍不断经过。老人看到的是牛市，而非每一次跳价。","V · Partridge / bull market"],["不是工作，是位置","examine","移开眼前的小差价","哈伍德建议他卖掉克莱马克斯汽车，回落后再买。老人担心失去持仓位置。对方把position误听成工作，笑话后面其实是一种经历过繁荣与恐慌的判断。","V · Climax Motors / lose my position"],["反弹没有给你买回的机会","scrub","让时间继续往前","年轻拉里常先拿小利润，再等一次从未到来的回落。价格继续走高，他留在场外。这段不是“永远不卖”，而是有依据的位置为何比小差价更难找回。","V · reaction that never came"]]),le(6,"联合太平洋：预感与好心","telegraph",[["地震之后，价格没有立刻跌","scrub","展开随后几天的消息","1906年大西洋城的卖空，后来碰上旧金山地震。但第一天市场并未立刻按灾情下跌。一次神秘预感的成功，不等于可重复预知灾难。","VI · San Francisco earthquake"],["萨拉托加的好心劝告","drag","接过经纪人的电报","另一段联太交易中，他原本依据强势买入，却接受经纪人的坚定劝告，放弃了自己的观察。那只手很友好，实际代价仍由他承担。","VI · Saratoga / Harding"],["提高股息，转回买入","lever","把交易杆从空头转向买入","股息消息与价格向上证明了原判断。他回补空头并买入，弥补失误。镜头随轨道转弯：独立不意味着不听意见，而是意见必须接受事实检查。","VI · dividend / cover / buy"]]),le(7,"德肯用订单检验消息","absorb",[["有人说内部人在买","dispatch","递交第一笔卖单","德肯没有马上相信“哈夫迈耶在买糖业”。他先卖出一万股。市场接得很容易，但还不足以说明承接力量有多大。","VII · Deacon / first ten thousand"],["第二笔，仍然被接住","dispatch","递交第二笔卖单","再卖一万股，股票仍在上升。他观察的不是消息传递者的表情，而是两万股被真实买盘吸收之后的价格反应。","VII · second ten thousand absorbed"],["回补，并持有多头","lever","从试探转向已被验证的方向","他回补空头，又持有一万股多头。这个案例呈现历史操作者的检验过程，并不是要求今天的读者模仿大额试单。","VII · covered / long ten thousand"]]),le(8,"风暴还没到，钱先耗尽","credit",[["资金越来越紧","dial","打开现金抽屉","拉里看到货币与信用条件恶化。抽屉的现金减少，市场却还在反弹。基本环境与行情的时间，不会为了他的观点自动对齐。","VIII · basic conditions / money"],["太早的空头","hold","握住头寸，看反弹经过","看对未来并不意味着可以无限等。每次过早操作，都消耗有限的本金。你握得更久，不能要求市场更快兑现。","VIII · premature selling"],["价格终于开始配合","scrub","等待反弹力量改变","反弹逐渐无力，卖出能够产生更明确的下行。他要让观察到的方向和可执行的起点接上，而不是一再用资金证明自己早就知道。","VIII · rallies grew feebler"]]),le(9,"1907年：借不到钱的华尔街","panic",[["游艇上的报纸","examine","打开朋友带来的报纸","佛罗里达海岸上，他已经没有股票仓位。朋友带来的强劲反弹消息，使他回到岸上重新观察。资金环境没有改善，这不是只凭标题下单。","IX · coast of Florida / newspaper"],["银行门前的恐慌","dial","沿着借款旋钮寻找现金","危机变成全市场对现金的需要。街上有股票，却没有足够承接它们的钱。纸面报价和可成交的收益，在这种时候离得更远。","IX · 1907 / money panic"],["卖空者也能成为买方","lever","停止进攻，转动回补杆","局势接近失控时，他收到不要继续扩大压力的请求，停止卖空并回补。阵营不是身份，新的市场状态决定新的行动。","IX · stop selling / cover"]]),le(10,"希望与恐惧坐反了位置","mirrors",[["推不动的棉花","hold","按住推杆，让价格尝试向上","他多次自己买入推动棉花，停下时价格就退回。镜头只追着他的力气走；周围没有独立买方。急着启动行情，使他付出约二十万美元。","X · cost two hundred thousand"],["小麦越过1.20","scrub","拖动时间，看它越过边界","他宁愿等小麦越过1.20的关键位置，而不是因为1.14便宜就下注。这里展示书中的具体例子，不把一个历史数字写成普遍公式。","X · wheat crosses $1.20"],["两面镜子交换光","scrub","移动光线，照见两种冲动","亏损时希望明天会好，盈利时却害怕利润消失。两面镜子让这些自然冲动显形：知道怎么做，和受压时真能做到，仍隔着一个人。","X · hope and fear"]]),le(11,"玉米退路与意外的皇冠","grain",[["想去钓鱼，玉米不肯放手","examine","把帆船靠近谷物码头","股票获利后，他想南下，却被一千万蒲式耳玉米空头留住。斯特拉顿的供给控制，使退出成为比理论判断更紧迫的问题。","XI · ten million bushels of corn"],["另一种谷物打开退路","dispatch","展开燕麦与玉米的关联图","书中他借燕麦下跌改变交易者对玉米的预期，随后回补。此处仅以历史因果图呈现，不作为现实市场操纵教程。","XI · oats / corn / strategic retreat"],["意外报道造出的棉花之王","flip","把报纸从皇冠下抽出来","后来的七月棉花交易中，意外报道创造了有利退出条件。公众却把它归因于精密布局。成功被戴上皇冠，偶然性藏在皇冠下面。","XI · July cotton / newspapers / unearned reputation"]]),le(12,"托马斯说服了另一双眼睛","cotton",[["一万名通信者的权威","examine","把专家报告移到眼前","托马斯学识丰富、极有说服力。拉里原本不看多棉花，渐渐却只能通过专家递来的同一页材料看市场。失去的首先不是钱，而是自己的判断。","XII · ten thousand correspondents / Thomasized"],["卖掉小麦，留下棉花","transfer","把资源从小麦移向棉花","原文里，小麦盈利，棉花亏损。他为了减轻负担，偏偏卖掉盈利的小麦，又继续买棉花。你把资源移过去，白色包裹开始遮住整间屋子。","XII · wheat profit / cotton loss"],["每天再多买一点","hold","按住购买，让棉花堆高","他继续买棉花，试图不让价格下跌，仓位约达十五万包。最刺痛的地方，是他知道这个做法违背自己长期的原则，却仍做下去。","XII · hundred and fifty thousand bales"]]),le(13,"一笔无法用钱还清的恩情","loan",[["二万五千美元的帮助","stamp","在借据上落下签名","威廉森提供二万五千美元，让他恢复一段成功交易。拉里想归还，对方却说不必急。他留下资金，也留下自己不愿违逆的人情义务。","XIII · Dan Williamson / twenty-five thousand"],["账户里出现另一双手","lever","尝试执行铁路股空头","经纪人干预切萨皮克与大西洋铁路等交易，用内部消息阻止操作。你拉动杆，另一道闸仍关着：关系的善意与交易自由发生冲突。","XIII · Chesapeake & Atlantic"],["背后的遗产","flip","翻开关系背后的账页","拉里后来把阻碍解释为威廉森保护家族遗产股票的安排。这是叙述者的回顾推断；明确发生的是，他的判断无法按自己的方式执行。","XIII · Marquand estate / narrator interpretation"]]),le(14,"六周，一百美元，保险柜","rebuild",[["先放下法律上的债务","stamp","展开债权人的解除文件","债务让他无法平静交易。破产与债权人的释放，使他重新得到精神空间。这不是无代价的逃脱；他仍把日后偿还视为自己的责任。","XIV · bankruptcy / releases"],["六周看伯利恒钢铁上涨","scrub","让六周经过，停在100","他等伯利恒钢铁首次越过100，压住急着恢复规模的冲动。书中的整数位经验是他的历史判断，不能当作今天必然有效的价格规律。","XIV · Bethlehem / crossed par / six weeks"],["把妻儿的钱锁在外面","dial","合上保障生活的柜门","1917年初还清旧债后，他安排年金与妻儿信托。门要防的不只是市场，也包括自己会挪用所有可得资金的冲动。","XIV · annuities / wife and child safe from me"]]),le(15,"咖啡合约，被另一张纸覆盖","coffee",[["战争、运输与咖啡","examine","打开港口的交付图","供给与航运支持他对咖啡的判断。但货物在海上，合约在纸上，现实交易还取决于交付与政策。一个方向并不能概括全部约束。","XV · coffee / ships"],["“保护早餐”的申诉","stamp","把政策文件盖在原合同上","对手向政府寻求干预，称他会提高公众的早餐成本。叙述者对此有强烈意见；这幅场景展示争议如何改写交易条件，不替任何一方补造完整事实。","XV · Price Fixing Committee"],["限制价格与清算期限","drag","抽出已不适用的旧合同","最高价格和结清期限改变了原来的交易环境。预想的巨额收益未兑现。愤怒无法使旧合同恢复，接下来只能面对生效的限制。","XV · maximum price / time limit"]]),le(16,"听筒里的秘密，谁在出售","phones",[["消息令人感到重要","hold","拿起听筒，听它说完","人们不只想得到消息，也想传消息：贪欲许诺轻松盈利，虚荣让人享受掌握秘密。话语很热情，来源却未必因此可靠。","XVI · greed / vanity"],["婆罗洲锡的消息链","dispatch","沿电线传递同一份纸","一份说法经过朋友、经纪行和客户，看起来像很多独立意见，可能只来自同一个源头。消息领取者转身成为销售网络。","XVI · Borneo Tin / endless-chain advertising"],["听筒背后的卖方","flip","翻到消息的利益一面","主动提供机会的人，也许需要新的买盘来出售自己持有的证券。镜头转到电话另一端：你听见的秘密，也可能是别人等待你接手的存货。","XVI · tipster-promoter"]]),le(17,"朋友记住黑猫，他记住事实","breakfast",[["早餐桌上的黑猫","examine","把猫的影子移开","朋友把及时卖出讲成黑猫的神谕。拉里认为长期积累的观察可能在意识之外继续工作。突然的决定可以有来由，不代表每次冲动都可靠。","XVII · black cat / Washington"],["钢铁继续，铜股停住","scrub","并排观察钢铁与铜股","原文中，钢铁表现支持继续增加，犹他铜却没有。他没有因为同属繁荣环境，就把“还没涨”自动理解为会补涨。","XVII · Utah Copper / U.S. Steel"],["不是报复棉花","lever","把旧亏损的标签收起来","棉花后来出现新的卖出条件，他重新行动。不因曾亏损而怨恨市场，也不因弥补损失就发明神秘能力。下一次判断仍由新事实承担。","XVII · experience and memory"]]),le(18,"153回补，156买入","reverse",[["钓鱼时传来的价格","examine","把鱼线换成报价线","热带贸易在总体弱市中表现不同。他离开钓鱼处重新观察，不让宏观结论替这只股票拒绝眼前的事实。","XVIII · fishing camp / Tropical Trading"],["承接变强，原剧本失效","lever","将杆拉到153：回补","实际买方支撑持续出现，他在153回补一万股空头。表面的总体看空，与眼前这笔局部交易，已经不能被当作一件事。","XVIII · 153 / covered 10,000"],["156之后，仍会犯错","lever","将杆推到156：买入","在156他转为做多，价格后来超过200。但他持有过久，因为以为内部人应该像他一样行动。改变立场以后，仍会替别人写剧本。","XVIII · 156 / above 200 / paper profits"]]),le(19,"被锁起来的不是股票，是钱","money",[["旧华尔街的挤压","examine","展开旧街区的档案","本章转向早年操作者的轶事。有些人曾挤压别人，又被别人反过来挤压。钱、胆量与名声都不能提供永久控制。","XIX · Drew / Vanderbilt"],["认证支票留在手里","dial","把支票锁进铁柜","转述旧事中，有人借入资金取得认证支票，减少别人能借到的钱。价格之外，依赖借款的人失去继续等待的条件。","XIX · certified check / lock up money"],["街上的人不能等了","scrub","让两个人的时钟分开","镜头追随两种时间：一个有资源等待，一个被融资期限催促。旧市场故事需要放回其时代与转述来源，不能当作今日通用剧本。","XIX · recollection / borrowed money"]]),le(20,"幕布下的证券分销","theatre",[["拉高只是第一幕","hold","拉起幕布，观察价格上升","原章把操纵放在历史证券分销中解释。高报价会吸引注意，却不能凭空造出愿意接手全部证券的人。台上价格与台下需求不是同一件事。","XX · Keene / distributing"],["回落时，公众觉得便宜","transfer","让证书从后台走向观众","基恩等案例里，主要出售发生在上涨之后的回落。公众等待反弹，持仓从原有集团转移到新买家。这里是历史供需说明，不是操作教程。","XX · selling on the way down"],["当推不动时退场","lever","松开幕后推动的手","即使是操作者，也不能取消市场反馈。买入不再产生预期效果时，继续投入只会扩大负担；安排市场的人仍会被市场否定。","XX · stop buying / quit"]]),le(21,"钢铁与石油：两种结局","industry",[["帝国钢铁的安静报价","scrub","沿钢铁厂的灯光走近","企业情况不错，股票却缺少活跃兴趣。拉里描述价格上升约三十点，累计买入约七千股；其他参与者的需求也是过程的一部分。","XXI · Imperial Steel / 30 points / seven thousand"],["石油产品没有照做","flip","把舞台转向石油储罐","石油产品公司的供给和市场状态不同。他原本拒绝，后来受人情影响接下。曾成功的动作，不能把钢铁的条件搬到另一个对象。","XXI · Petroleum Products / Prentiss"],["上涨中的纸面财富","scrub","让繁荣走到公众不愿卖的时刻","希望模糊顶点。起初觉得每个新高都太贵，后来却相信再无边界。公众先在纸上赚到的钱，可能最终仍停在纸上。","XXI · public / on paper"]]),le(22,"裁缝的股票","dressmaker",[["朋友请求的一次帮忙","stamp","展开联合炉具的委托","巴恩斯把处理股票说成人情请求。拉里有顾虑却同意。公众对新发行已接近饱和，委托人的希望无法重新制造繁荣。","XXII · Barnes / Consolidated Stove"],["承诺的资金慢慢到达","scrub","等待分批到来的支票","资金分期到达，参与者有不同利益，股票又遇上走弱的市场。内幕集团不总会按统一剧本行动，报价不替人情负责。","XXII · six millions / installments"],["裁缝一针一线等他拉高","trace","沿布料走一针","妻子的裁缝因“利文斯顿会拉高它”的消息买入。私人任务被转述成公众的收益承诺。镜头离开华尔街，落到一个普通人的工作桌。","XXII · Mrs. Livingston / dressmaker"]]),le(23,"无名的内幕人与有名的替罪羊","newspaper",[["没有名字的权威","flip","揭开报纸的署名栏","匿名内部人称盈利出色，报纸把热烈叙述送到公众眼前。说法像具有权威，却难以追问来源与责任。","XXIII · leading insider / unnamed"],["玻璃后面正在卖","scrub","擦开报道后面的玻璃","前景恶化后，内部人可以安静出售，公开解释却继续乐观。文字让公众留下，行动让另一批人离开。两条方向并不相同。","XXIII · silently sell"],["下跌被说成空头袭击","flip","把解释与实际出售并排","间隔石油的集团把价格推到50，后来继续卖出，却把下跌归罪于利文斯顿。高价买入的公众等别人受惩罚，忽略自己的处境。","XXIII · Intervale Oil / 50 / 12"]]),le(24,"最后一封信，没有买卖指令","letter",[["今天的佣金与明天的企业","examine","将两页账放在不同时间","经纪人收入来自眼前交易，市场却面向未来条件。激励未必意味着故意欺骗，却会改变建议被包装的方式。","XXIV · commissions now / business outlook"],["“好处”造出宣传者","transfer","沿人际关系递出证书","内部人赠出有利股份或机会，受益者再向周围推荐。看起来独立的热心朋友，可能组成同一条证券销售网络。","XXIV · gifts / stock-selling promoters"],["把信留在窗边","trace","沿信纸写下一道线","书没有在此讲完人物后半生，也没有许诺掌握原则后永不失败。窗外行情还在发生，你看到的，是观察、行动、自我与制度不断纠缠的一生。","XXIV · final chapter / public protection"]])],Yt=i=>document.querySelector(i),qm="./",qn=15128503,_e=12425308,xn=1517855,In=5058076;class Ym{constructor(t,{onClose:e,onArchive:n}){this.renderer=t,this.onClose=e,this.onArchive=n,this.active=!1,this.cache=new Map,this.loader=new nu,this.camera=new ze(52,innerWidth/innerHeight,.1,120),this.ray=new tc,this.clock=0,this.value=0,this.phase=0,this.orbit=0,this.playing=!1,this.auto=!1,this.held=!1,this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,Yt("#episodeClose").onclick=()=>this.close(),Yt("#episodeNext").onclick=()=>this.next(),Yt("#episodePrev").onclick=()=>{this.phase>0&&this.showPhase(this.phase-1)},Yt("#episodeArchive").onclick=()=>this.onArchive(this.ep.n),Yt("#episodePlay").onclick=()=>{this.playing=!this.playing,this.auto=!1,this.playTime=0,Yt("#episodePlay").textContent=this.playing?"暂停镜头":"播放镜头"}}open(t){this.ep=is.find(e=>e.n===t),this.ep&&(this.active=!0,this.playing=!1,this.orbit=0,Yt("#episode").hidden=!1,document.body.classList.add("in-story"),this.showPhase(0),this.preload(t))}close(){this.active=!1,this.playing=!1,this.auto=!1,this.held=!1,Yt("#episode").hidden=!0,document.body.classList.remove("in-story"),this.disposeScene(),this.onClose()}preload(t){const e=`${qm}art/event-${String(t).padStart(2,"0")}.jpg`;if(!this.cache.has(t)){const n=this.loader.load(e,()=>{},void 0,()=>{this.active&&this.ep.n===t&&(Yt("#artNote").textContent="画面载入失败，仍可操作实时场景与阅读事件。")});for(n.colorSpace=Ie,this.cache.set(t,n);this.cache.size>4;){const r=this.cache.keys().next().value;this.cache.get(r).dispose(),this.cache.delete(r)}}}showPhase(t){this.phase=t,this.clock=0,this.value=0,this.auto=!1,this.held=!1,this.playTime=0,this.step=this.ep.steps[t],this.disposeScene(),this.buildScene(),Yt("#episodeMeta").textContent=`原书 ${ur.find(e=>e.n===this.ep.n).roman} · 事件 ${String(this.ep.n).padStart(2,"0")}`,Yt("#episodeTitle").textContent=this.ep.title,Yt("#momentTitle").textContent=this.step.title,Yt("#episodeNarration").textContent=this.step.text,Yt("#sourceAnchor").textContent=this.step.anchor,Yt("#episodePrev").disabled=t===0,Yt("#episodeNext").textContent=t===2?"回到长廊":"下一幕",Yt("#episodePlay").textContent=this.playing?"暂停镜头":"播放镜头",Yt("#artNote").textContent="原创文学画面 · 动作与镜头为实时演出",Yt("#stepTabs").innerHTML=this.ep.steps.map((e,n)=>`<button class="${n===t?"current":""}" data-phase="${n}" aria-current="${n===t?"step":"false"}"><span>0${n+1}</span>${e.title}</button>`).join(""),Yt("#stepTabs").querySelectorAll("button").forEach(e=>e.onclick=()=>{this.playing=!1,this.showPhase(Number(e.dataset.phase))}),this.buildControls(),this.setValue(0)}next(){this.phase<2?this.showPhase(this.phase+1):this.close()}buildControls(){const t=this.step;let e="";["scrub","drag","dial","lever","transfer"].includes(t.mode)?e=`<label class="gesture-label" for="gestureRange">${t.action}</label><input id="gestureRange" type="range" min="0" max="100" value="0"><div class="range-ends"><span>${t.mode==="transfer"?this.ep.n===12?"盈利的小麦":"原处":"开始"}</span><span>${t.mode==="transfer"?this.ep.n===12?"亏损的棉花":"另一端":"展开"}</span></div>`:t.mode==="trace"?e=`<span class="gesture-label">${t.action}</span><div id="traceSurface" role="button" tabindex="0" aria-label="${t.action}；也可按空格"><span>在这里划动 · 或按空格</span><svg viewBox="0 0 300 65" aria-hidden="true"><path id="traceInk" d="M15 48 L280 18" fill="none" stroke="#d8ba78" stroke-width="3" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/></svg></div>`:e=`<button id="gestureButton" class="gesture-button">${t.action}</button><p class="gesture-help">${t.mode==="hold"?"按住持续操作；点击可自动演出。":t.mode==="flip"?"翻开另一面，看被遮住的行动。":t.mode==="stamp"?"落下签章，观察它怎样改变场景。":"点击触发这一刻；也可以点击场景中的物件。"}</p>`,Yt("#episodeAction").innerHTML=e+'<div class="action-progress" aria-hidden="true"><i id="actionFill"></i></div><p id="actionCaption">你可以操作物件，也可以直接看下一幕。</p>';const n=Yt("#gestureRange");n&&(n.oninput=()=>this.setValue(Number(n.value)/100));const r=Yt("#gestureButton");if(r){r.onpointerdown=()=>{t.mode==="hold"&&(this.held=!0)};for(const a of["pointerup","pointercancel","pointerleave"])r.addEventListener(a,()=>this.held=!1);r.onclick=()=>{t.mode==="hold"?this.auto=!0:t.mode==="flip"?this.setValue(this.value<.5?1:0):this.auto=!0},r.onkeydown=a=>{a.code==="Space"&&(a.preventDefault(),this.auto=!0)}}const s=Yt("#traceSurface");if(s){let a;s.onpointerdown=o=>{a=o.clientX,s.setPointerCapture(o.pointerId)},s.onpointermove=o=>{a!==void 0&&(this.setValue(this.value+Math.abs(o.clientX-a)/200),a=o.clientX)};for(const o of["pointerup","pointercancel"])s.addEventListener(o,()=>a=void 0);s.onclick=()=>this.auto=!0,s.onkeydown=o=>{(o.code==="Space"||o.code==="Enter")&&(o.preventDefault(),this.auto=!0)}}}setValue(t){this.value=Ia.clamp(t,0,1),Yt("#actionFill").style.width=`${this.value*100}%`,Yt("#traceInk")&&(Yt("#traceInk").style.strokeDashoffset=String(100-this.value*100)),Yt("#gestureRange")&&(Yt("#gestureRange").value=String(Math.round(this.value*100))),Yt("#actionCaption").textContent=this.value>.95?"这一刻已经展开。可以继续、重放，或查看原书转述。":this.value>.05?"让物件继续动作，观察场景的变化。":"你可以操作物件，也可以直接看下一幕。"}pointer(t,e,n=0,r=0){if(n||r){this.orbit=Ia.clamp(this.orbit-n*.003,-.7,.7);return}this.ray.setFromCamera(new Dt(t/innerWidth*2-1,-e/innerHeight*2+1),this.camera),this.ray.intersectObjects(this.objects.children,!0).length&&(this.auto=!0)}material(t,e={}){return new La({color:t,roughness:.65,...e})}box(t,e,n,r,s,a,o,l){const c=new Ae(new si(e,n,r),typeof l=="number"?this.material(l):l);return c.position.set(s,a,o),t.add(c),c}cyl(t,e,n,r,s,a,o){const l=new Ae(new ts(e,e,n,24),this.material(o));return l.position.set(r,s,a),t.add(l),l}ball(t,e,n,r,s,a){const o=new Ae(new es(e,18,12),this.material(a));return o.position.set(n,r,s),t.add(o),o}label(t,e,n,r,s,a=3,o=.5,l="#f2dfb8"){const c=document.createElement("canvas");c.width=1024,c.height=Math.round(1024*o/a);const u=c.getContext("2d");u.font="54px Microsoft YaHei,serif",u.textAlign="center",u.textBaseline="middle",u.fillStyle=l,u.fillText(e,512,c.height/2,990);const f=new Kl(c);f.colorSpace=Ie;const h=new Yl(new Za({map:f,transparent:!0,depthWrite:!1}));return h.scale.set(a,o,1),h.position.set(n,r,s),t.add(h),h}buildScene(){this.scene=new Xl,this.scene.background=new Vt(726032),this.objects=new xe,this.scene.add(this.objects),this.motion=[],this.scene.add(new Ql(15062196,1719857,2));const t=new jr(16767396,85,24,2);t.position.set(-3,6,4),this.scene.add(t);const e=new jr(6924726,50,20,2);e.position.set(4,3,-2),this.scene.add(e),this.preload(this.ep.n);const n=this.cache.get(this.ep.n),r=new Ae(new hr(24,13.5),new Ka({map:n,color:11052442}));r.position.set(0,4,-8),this.scene.add(r),this.art=r;const s=this.objects,a=this.phase,o=["station","panic","money","theatre"].includes(this.ep.stage)?2504238:In;if(this.box(s,12,.16,7,0,-.1,0,o),["station","panic","theatre","chair"].includes(this.ep.stage)){if(this.ep.stage==="station")for(const h of[-2,2]){this.box(s,.075,.035,6,h,0,0,_e);for(let p=0;p<8;p++)this.box(s,4.4,.025,.1,0,-.015,p*.6-2,In)}else if(this.ep.stage==="panic")for(let h=0;h<4;h++)this.box(s,7,.14,1.3,0,h*.15,-1-h*.7,5661016);else if(this.ep.stage==="theatre")for(let h=0;h<3;h++)for(let p=0;p<6;p++)this.box(s,.65,.7,.65,(p-2.5)*1.05,.4+h*.2,2+h*.75,5385777)}else{this.box(s,8,.12,2.7,0,.85,.1,In);for(const h of[-3.2,3.2])this.box(s,.15,.85,2.4,h,.4,.1,xn)}const l=this.ep.stage;this.primary=new xe,s.add(this.primary);const c=this.primary;if(["chalk","ticker","absorb","credit","industry","reverse","rebuild"].includes(l)){this.box(c,5.5,2.7,.2,0,2.5,-.7,In),this.box(c,5.2,2.4,.05,0,2.5,-.55,xn),this.label(c,["chalk","ticker"].includes(l)?l==="ticker"?"纸带报价  /  实际成交":"BURLINGTON  ·  STEEL  ·  SUGAR":l==="rebuild"?"BETHLEHEM   90 … 100":l==="industry"?"IMPERIAL STEEL  /  PETROLEUM":"报价仍然在变",0,3.2,-.4,4.9,.5),this.columns=[];for(let h=0;h<14;h++){const p=.15+h%5*.22,g=this.box(c,.2,p,.1,-2.1+h*.32,1.4+p/2,-.36,h%2?_e:7121563);this.columns.push(g)}this.marker=this.label(c,l==="ticker"?"回报尚未到达":l==="chalk"?"尚未写下观察":"等待市场回答",0,2.6,-.35,4.8,.55),this.motion.push(h=>{this.columns.forEach((p,g)=>{p.scale.y=1+h*(g+1)*.1+(l==="ticker"?Math.sin(this.clock*3+g)*h*.5:0)}),this.marker.material.opacity=.35+h*.65}),l==="chalk"&&this.motion.push(h=>{this.columns.forEach((p,g)=>p.visible=g/14<h)})}if(["station","telegrams","telegraph","coffee","loan","newspaper","letter"].includes(l)){this.pages=[];for(let p=0;p<9;p++){const g=this.box(c,1.25,.025,.8,(p%3-1)*1.6,1.05+Math.floor(p/3)*.065,0,qn);g.rotation.y=(p-4)*.04,this.pages.push(g)}const h=l==="coffee"?"咖啡合约 / 新的限制":l==="loan"?"借款 / 人情 / 账户权限":l==="telegrams"?"买入建议 / 卖出建议":l==="newspaper"?"匿名解释 / 真实出售":l==="letter"?"今天的佣金 / 明天的企业":"报价 / 建议 / 成交";if(this.label(c,h,0,2.4,0,5,.6),this.motion.push(p=>{this.pages.forEach((g,x)=>{g.rotation.y=(x-4)*.04+p*(x%2?Math.PI:0),g.position.y=1.05+Math.floor(x/3)*.065+p*Math.sin(x)*.4,g.position.x=(x%3-1)*1.6+p*(x-4)*.08})}),["coffee","loan","telegrams"].includes(l)&&(this.stamp=this.cyl(c,.24,.5,0,2.7,.15,_e),this.motion.push(p=>{this.stamp.position.y=2.7-Math.sin(p*Math.PI/2)*1.4})),l==="letter"){this.lines=[];for(let p=0;p<7;p++)this.lines.push(this.box(c,1.05,.006,.015,0,1.215,-.3+p*.085,xn));this.motion.push(p=>this.lines.forEach((g,x)=>g.visible=x/7<p))}}if(["cotton","grain","coffee"].includes(l)){this.bales=new xe,c.add(this.bales),this.wheat=new xe,c.add(this.wheat);for(let h=0;h<18;h++){const p=(h%6-2.5)*.7,g=1.2+Math.floor(h/6)*.65;this.box(this.bales,.64,.6,.6,p,g,-.2,l==="coffee"?6240293:qn);for(const x of[-.18,.18])this.box(this.bales,.025,.63,.64,p+x,g,-.2,In)}for(let h=0;h<5;h++)this.ball(this.wheat,.32,-2+h*.42,1.2,.6,_e);this.motion.push(h=>{this.bales.scale.setScalar(.35+h*.8),this.bales.position.z=h*(l==="cotton"&&a>0?1.5:0),this.wheat.position.x=-h*4,this.wheat.scale.setScalar(1-h*.75)}),this.label(c,l==="cotton"?["专家的资料","小麦在盈利 / 棉花在亏损","棉花约十五万包"][a]:l==="grain"?"玉米 / 燕麦 / 退出":"供给 / 运输 / 合约",0,3.4,0,5,.55)}if(l==="chair"){this.box(c,1.6,.2,1.4,0,1.2,.2,3036993),this.box(c,1.6,1.8,.2,0,2.1,-.4,3036993);for(const h of[-.8,.8])this.box(c,.12,1.1,1.5,h,1.3,.2,In),this.box(c,.1,.9,.1,h,.5,.75,In);this.label(c,a===1?"不是工作。是位置。":"这是牛市。",0,3.5,-.2,4,.6),this.motion.push(h=>{c.rotation.y=h*.2})}if(["panic","money","rebuild","credit","loan"].includes(l)){this.safe=new xe,this.safe.position.set(2.3,1,.8),c.add(this.safe),this.box(this.safe,1.4,1.5,1.1,0,.7,0,xn),this.safeDoor=new xe,this.safeDoor.position.set(-.7,.7,.61),this.safe.add(this.safeDoor),this.box(this.safeDoor,1.38,1.45,.08,.69,0,0,4411724);const h=this.cyl(this.safeDoor,.13,.1,.8,0,.1,_e);h.rotation.x=Math.PI/2,this.motion.push(p=>{this.safeDoor.rotation.y=-p*1.8}),this.cash=[];for(let p=0;p<7;p++)this.cash.push(this.box(c,.65,.055,.32,-2,1.1+p*.075,.8,qn));if(this.motion.push(p=>this.cash.forEach((g,x)=>g.visible=x/7>p||l==="rebuild")),l==="loan"){this.bars=new xe,c.add(this.bars);for(let p=0;p<9;p++)this.box(this.bars,.065,4,.06,-3+p*.75,2,-.7,2765878);this.motion.push(p=>{this.bars.position.z=a===0?-3+p:1+p})}}if(["mirrors","breakfast"].includes(l)){for(const h of[-2,2]){this.box(c,1.7,2.8,.14,h,2.4,-.2,_e);const p=this.box(c,1.5,2.6,.16,h,2.4,-.1,new La({color:7967886,metalness:1,roughness:.18}));this.motion.push(g=>{p.material.emissive.setHex(h<0?9589043:3699299),p.material.emissiveIntensity=h<0?g:1-g})}if(this.label(c,l==="mirrors"?"希望 / 恐惧":"朋友的黑猫 / 我的观察",0,3.9,0,5,.55),l==="breakfast"){const h=new xe;h.position.set(-.3,1.3,.6),c.add(h),this.ball(h,.22,0,0,0,1054482),this.ball(h,.15,.2,.2,0,1054482),this.box(h,.04,.2,.07,.15,.4,0,1054482),this.motion.push(p=>{h.position.x=-.3-p*3})}}if(["phones","absorb","theatre"].includes(l)){this.tokens=[];for(let h=0;h<18;h++){const p=this.box(c,.48,.018,.32,-3+h%6*1.1,1.2+Math.floor(h/6)*.25,-.25+h%3*.3,qn);this.tokens.push(p)}if(this.motion.push(h=>this.tokens.forEach((p,g)=>{p.position.x=-3+g%6*1.1+Math.sin(h*Math.PI)*(l==="absorb"?g*.08:2),p.position.z=-.25+g%3*.3+h*Math.floor(g/6),p.rotation.y=h*Math.PI*.5})),l==="phones"){for(const h of[-2,0,2])this.cyl(c,.28,.12,h,1.05,.6,xn),this.cyl(c,.045,.9,h,1.5,.6,_e),this.cyl(c,.18,.3,h,2.05,.6,_e).rotation.z=Math.PI/3;this.label(c,"同一个源头，经过不同的嘴。",0,3.3,0,5,.55)}if(l==="theatre"){this.curtains=[];for(const h of[-3.6,3.6])for(let p=0;p<4;p++)this.curtains.push(this.cyl(c,.22,4.3,h+p*.22*(h<0?1:-1),2.2,-.8,6630453));this.motion.push(h=>this.curtains.forEach((p,g)=>p.position.x=(g<4?-3.6:3.6)+g%4*.22*(g<4?1:-1)+(g<4?-1:1)*h*1.4)),this.label(c,"台上的报价 / 台下的接手者",0,3.7,0,5,.55)}}if(l==="dressmaker"&&(this.box(c,1.35,.15,.65,0,1.3,0,xn),this.box(c,.22,.85,.24,-.45,1.7,0,xn),this.box(c,1,.18,.24,0,2.1,0,xn),this.cyl(c,.035,.45,.48,1.87,0,_e),this.wheel=this.cyl(c,.37,.1,-.72,1.88,0,_e),this.wheel.rotation.z=Math.PI/2,this.box(c,2,.035,1.5,1,1.1,.2,6713955),this.thread=this.box(c,1.7,.005,.025,1,1.13,.2,_e),this.motion.push(h=>{this.wheel.rotation.x=h*Math.PI*4,this.thread.scale.x=Math.max(.01,h)}),this.label(c,"她买下的，是一个名字的许诺。",0,3.4,0,5,.55)),l==="station"){this.suitcase=new xe,this.suitcase.position.set(0,1.3,.7),c.add(this.suitcase),this.box(this.suitcase,1.8,1.1,.5,0,0,0,In);for(const h of[-.5,.5])this.box(this.suitcase,.07,1.14,.52,h,0,0,_e);this.motion.push(h=>{this.suitcase.position.z=.7-h*1.4,this.suitcase.rotation.y=h*.4}),this.label(c,"二十一岁 / 两千五百美元",0,3.2,0,5,.55)}if(l==="ticker"){this.strips=[];for(let h=0;h<22;h++){const p=this.box(c,1.7,.015,.3,Math.sin(h*.5)*1.4,1.1+Math.floor(h/7)*.17,.7+h*.045,qn);p.rotation.y=h*.3,this.strips.push(p)}this.motion.push(h=>this.strips.forEach((p,g)=>{p.position.z=.7+g*.045+Math.sin(this.clock*(g%2?.4:2)+g)*h*.35}))}l==="reverse"&&(this.lever=new xe,this.lever.position.set(0,1.1,1),c.add(this.lever),this.box(this.lever,.07,1.2,.07,0,.6,0,_e),this.ball(this.lever,.17,0,1.2,0,xn),this.motion.push(h=>{this.lever.rotation.z=(h-.5)*1.4}),this.label(c,a===1?"153：回补一万股":a===2?"156：转为买入":"总体弱市 / 局部强势",0,2.3,.2,5,.55)),this.buildMoment();const u=new Oe,f=[];for(let h=0;h<100;h++)f.push((Math.random()-.5)*12,Math.random()*6,(Math.random()-.5)*8);u.setAttribute("position",new me(f,3)),this.scene.add(new jl(u,new Qa({size:.018,color:_e,transparent:!0,opacity:.45})))}buildMoment(){const t=this.ep.n,e=this.phase,n=this.objects,r=new xe;n.add(r);const s=(l,c,u,f=1.1)=>this.box(r,f,.018,.8,l,c,u,qn),a=(l,c=0,u=3,f=.6,h=4)=>this.label(r,l,c,u,f,h,.4),o=l=>this.motion.push(l);if(t===1){if(e===0){const l=this.box(r,.09,.09,.65,-2,2.7,.55,qn);o(c=>l.position.x=-2+c*4)}if(e===1){const l=this.cyl(r,.25,.05,0,1.3,1.3,_e);o(c=>{l.position.x=-2+c*4,l.rotation.z=c*Math.PI}),a("五美元 → 三美元十二美分",0,3.6)}if(e===2){for(let l=0;l<7;l++){const c=this.box(r,.52,.018,.7,(l-3)*.7,1.25,1.4,15116202);o(u=>c.position.y=1.25+u*.3)}a("七张 · 每张五百股",0,3.6)}}if(t===2&&e===1){const l=s(-2,2,.8);o(c=>l.position.x=-2+c*4),a("指令送出 ≠ 已经成交",0,3.8)}if(t===3){for(const[l,c]of["纸带报价","实际成交"].entries()){this.box(r,5,.025,.025,0,2.8-l*.55,.7,_e),a(c,-3.4,2.8-l*.55,.7,1.6);const u=this.ball(r,.11,-2.5,2.8-l*.55,.7,l?13268576:9680539);o(f=>{u.position.x=-2.5+f*(l?5:2)})}if(e===2){const l=s(0,3.2,1.3);o(c=>{l.position.y=3.2-c*2,l.rotation.y=c*.3})}}if(t===4)for(const l of[-1,1]){const c=s(0,2.1,1.2);c.material.color.setHex(l<0?9484704:13474705),a(l<0?"买入电报":"卖出电报",l*2,3,.9,2),o(u=>{c.position.x=l*u*2,c.rotation.y=l*u*.5})}if(t===5&&e===2){const l=s(0,2.6,.9);o(c=>{l.position.x=c*4.5,l.position.y=2.6+c*.3}),a("一旦离开，买回的机会不一定出现",0,3.9,0,5)}if(t===6){const l=s(-2,2,.6);o(c=>{l.position.x=-2+c*4,l.rotation.y=c*Math.PI}),a(["地震已发生 / 反应仍滞后","友人的判断盖过了自己的观察","新事实改变方向"][e],0,4,.6,5)}if(t===7){const l=s(-2.5,2.6,1.3);o(c=>{l.position.x=-2.5+c*5,l.scale.setScalar(1-c*.7)}),a(["卖出一万股","再卖一万股","回补两万 / 留下一万股多头"][e],0,4,.6,5)}if(t===8){const l=this.ball(r,.15,0,3,1,_e);o(c=>l.position.x=Math.sin(c*Math.PI*2)*2),a(["信用先变紧","正确方向，也会付出等待的成本","一轮比一轮弱的反弹"][e],0,4,.6,5)}if(t===9){const l=s(0,3,.5,2);o(c=>{l.rotation.x=c*1.2,l.position.y=3-c*1.5}),a(["船上：几行字，改变整个航程","街上：现金成为生存的条件","回补：卖空者也交出买单"][e],0,4,0,5)}if(t===10&&a(["损失二十万美元，仍推不动","1.14 → 等待 → 1.20","亏损时恐惧 / 获利时希望"][e],0,4,.6,5),t===11){const l=new xe;r.add(l);for(let c=0;c<8;c++)this.ball(l,.12,-2+c*.2,1.5,.9,11768675);o(c=>{l.position.x=c*3}),a(["一千万蒲式耳的玉米仓位","燕麦订单改变了对手的认知","皇冠来自消息误读"][e],0,4,.6,5)}if(t===12&&e===0){const l=s(2,2,.8,1.6);o(c=>{l.position.x=2-c*2,l.position.y=2+c*.45,l.rotation.x=c*.8}),a("同一份报告，渐渐遮住全部市场",0,4,.6,5)}if(t===13){for(let l=0;l<8;l++){const c=new Ae(new eo(.12,.025,8,16),this.material(_e));c.position.set(-1.3+l*.35,2.5,.8),r.add(c),o(u=>{c.rotation.y=l%2*Math.PI/2,c.position.y=2.5-u*.7*Math.sin(l/7*Math.PI)})}a(["二万五千美元 / 钱可以还，人情怎么办","订单上，多出另一双手","叙述者事后解释这份帮助"][e],0,4,.6,5)}if(t===14&&e===1){for(let l=0;l<6;l++){const c=s(-2+l*.8,2.6,.7,.5);o(u=>c.rotation.x=Math.min(1,Math.max(0,u*6-l))*Math.PI)}a("六周，等到价格越过一百",0,4,.6,5)}if(t===15){const l=this.box(r,2,.03,1.2,0,2.6,1,13938845);o(c=>l.position.y=2.6-c*1.1),a(["供给判断 / 战争运输","申诉进入另一套制度","规则的纸，覆盖交易的纸"][e],0,4,.6,5)}if(t===16)for(let l=0;l<5;l++){const c=this.box(r,.025,.025,1,-2+l,2.6,.8,_e);c.rotation.z=Math.PI/2,o(u=>c.scale.z=Math.min(1,Math.max(0,u*5-l)))}if(t===17&&e===1){for(const[l,c]of[7839629,9333066].entries()){const u=this.box(r,.5,1,.5,-1.5+l*3,1.5,1.3,c);o(f=>u.scale.y=l?1:1+f*1.4)}a("钢铁继续 / 铜股停住",0,4,.6,5)}if(t===19){const l=s(-1,2.7,1.2,2);o(c=>{l.position.x=-1+c*3,l.rotation.y=c*1.3}),a(["融资的时钟开始转动","认证支票没有流回银行","缺钱的人，不能等到明天"][e],0,4,.6,5)}if(t===21){for(let l=0;l<3;l++){const c=this.cyl(r,.23,2,-2.5+l*.5,1.8,-.6,6188649);o(u=>{c.scale.y=e===0?1+u*.7:1-u*.15})}for(let l=0;l<3;l++){const c=this.cyl(r,.35,.7,1.5+l*.7,1.3,.6,4472369);o(u=>{c.position.x=1.5+l*.7+(e===1?u*.3:u)})}a(["钢铁：安静吸收供给","石油：另一种需求，另一种结果","报价财富 / 实际退出"][e],0,4,.6,5)}if(t===22&&e===2){const l=s(1,1.3,1.2,1.5);o(c=>{l.rotation.y=c*.6,l.position.x=1-c*1.8})}if(t===23){const l=s(0,2.6,1.5,2.5);o(c=>{l.rotation.x=c*Math.PI/2,l.position.y=2.6-c*.6}),a(["名字不见了 / 信心被留下","翻开宣传，才看见出售","50 → 12 / 谁来承担解释"][e],0,4,.6,5)}if(t===24){const l=this.box(r,.025,.025,.8,-.8,1.4,1.2,_e);l.rotation.y=.6,o(c=>l.position.x=-.8+c*1.6),a(["佣金今天到账 / 公司明天还要营业","拿到的股票，改变了消息的讲法","没有下一条买卖指令"][e],0,4,.6,5)}}update(t){if(!this.active)return;this.clock+=t,(this.auto||this.held)&&this.setValue(this.value+t*(this.reduced?100:.55)),this.value>=1&&(this.auto=!1),this.playing&&!document.querySelector("dialog[open]")&&(this.playTime+=t,this.setValue(Math.min(1,this.playTime/7)),this.playTime>13&&(this.phase<2?this.showPhase(this.phase+1):(this.playing=!1,Yt("#episodePlay").textContent="播放镜头")));const e=this.value;for(const s of this.motion)s(e);this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix();const n=this.reduced?0:Math.sin(this.clock*.13)*.2,r=Math.sin(this.orbit+n)*5;this.camera.position.set(r,2.7+this.phase*.15,(8.5-e*.7)*Math.max(1,.85/this.camera.aspect)),this.camera.lookAt(0,1.85,0),this.ep.stage==="ticker"&&this.phase===2&&!this.reduced&&(this.camera.position.x+=Math.sin(this.clock*22)*e*.035),this.art.material.color.setScalar(.62+e*.12),this.renderer.render(this.scene,this.camera)}disposeScene(){if(!this.scene)return;const t=new Set(this.cache.values());this.scene.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){const n=Array.isArray(e.material)?e.material:[e.material];for(const r of n)r.map&&!t.has(r.map)&&r.map.dispose(),r.dispose()}}),this.scene=null}}const zt=i=>document.querySelector(i);let Me,sn,pe,De,_l,Fa=-2,Zn=0,Kr=0,$r=!1,rs=!1,Zr=0,Ri,hn=null,Dn,$i,Ai=!1;const be=new Set,ro=[],ac=[],oc=[],Vs=new tc,jm=new ou,ni=zt("#world");let vl=new Dt;const so=i=>({x:i%2===0?-7:7,z:-Math.floor(i/2)*12}),Fi=()=>!!document.querySelector("dialog[open]");function ss(){be.clear(),rs=!1,document.pointerLockElement&&document.exitPointerLock()}function ki(i){ss(),document.querySelectorAll("dialog[open]").forEach(t=>t.close()),zt(i).showModal()}function Hs(i){return i.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function ii(i){zt("#subtitle").textContent=i,zt("#subtitle").style.opacity="1",clearTimeout(ii.timer),ii.timer=setTimeout(()=>zt("#subtitle").style.opacity="0",8500)}function Km(){zt("#roomGrid").innerHTML=En.map((i,t)=>'<button class="room-card" data-room="'+t+'"><span>0'+(t+1)+" / "+i.period+"</span><h3>"+i.name+"</h3><p>"+i.concept+"</p><small>"+is.slice(t*3,t*3+3).map(e=>e.title).join(" · ")+"</small></button>").join(""),zt("#roomGrid").querySelectorAll("button").forEach(i=>i.onclick=()=>Zm(Number(i.dataset.room)))}function $m(){zt("#journalList").innerHTML=is.map(i=>'<button data-chapter="'+i.n+'"><img loading="lazy" src="./art/event-'+String(i.n).padStart(2,"0")+'.jpg" alt=""><span><b>事件 '+String(i.n).padStart(2,"0")+"</b>"+i.title+"<small>"+i.steps.map(t=>t.title).join(" / ")+"</small></span></button>").join(""),zt("#journalList").querySelectorAll("button").forEach(i=>i.onclick=()=>or(Number(i.dataset.chapter)))}function Zm(i){De?.close(),document.querySelectorAll("dialog[open]").forEach(e=>e.close());const t=so(i);Me&&(Me.position.set(t.x,1.7,t.z+1.7),Zn=0,Kr=-.12),Fa=-2,uc(),ii(En[i].whisper)}function or(i){_l=ur.find(t=>t.n===i),_l&&(ss(),document.querySelectorAll("dialog[open]").forEach(t=>t.close()),De?De.open(i):lc(i))}function lc(i){const t=ur.find(n=>n.n===i),e=is.find(n=>n.n===i);zt("#chapterMeta").textContent="原书第 "+t.n+" 章 · 中文原创转述",zt("#chapterTitle").textContent=e.title,zt("#readerBody").innerHTML='<p class="scene-note">原书事件 · 详尽转述</p>'+t.story.map(n=>"<p>"+Hs(n)+"</p>").join("")+'<div class="principle"><p class="scene-note">解释与归纳</p><p>'+Hs(t.principle)+'</p></div><p class="fine">原文定位：'+e.steps.map(n=>Hs(n.anchor)).join("；")+"</p>",ki("#reader"),zt("#reader").scrollTop=0}document.querySelectorAll("[data-close]").forEach(i=>i.onclick=()=>i.closest("dialog").close());document.querySelectorAll("dialog").forEach(i=>{i.addEventListener("close",()=>be.clear()),i.addEventListener("click",t=>{if(t.target===i){const e=i.getBoundingClientRect();(t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom)&&i.close()}})});zt("#mapBtn").onclick=()=>{Km(),ki("#atlas")};zt("#journalBtn").onclick=()=>{$m(),ki("#journal")};zt("#helpBtn").onclick=()=>ki("#help");zt("#introMap").onclick=zt("#mapBtn").onclick;zt("#home").onclick=i=>{i.preventDefault(),ki("#intro")};zt("#begin").onclick=()=>{zt("#intro").close(),ii("走进房间，触碰物件。也可以从事件目录直接进入任何一段故事。")};zt("#walkBtn").onclick=async()=>{if(sn)try{await ni.requestPointerLock()}catch{ii("按住场景拖动，然后用 W A S D 移动。")}};document.addEventListener("pointerlockchange",()=>{$r=document.pointerLockElement===ni,zt("#walkBtn").textContent=$r?"Esc 退出步行模式":"进入步行模式"});zt("#interactBtn").onclick=()=>{hn&&or(hn.userData.chapter)};document.addEventListener("keydown",i=>{if(!Fi()){if(De?.active){if(i.code==="Escape"&&De.close(),i.target.matches("input,[role=button]"))return;i.code==="ArrowRight"&&De.next(),i.code==="ArrowLeft"&&De.phase>0&&De.showPhase(De.phase-1);return}["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&(i.preventDefault(),be.add(i.code)),i.code.startsWith("Shift")&&be.add("Shift"),i.code==="KeyM"&&zt("#mapBtn").click(),i.code==="KeyJ"&&zt("#journalBtn").click(),i.code==="KeyE"&&hn&&or(hn.userData.chapter)}});document.addEventListener("keyup",i=>{be.delete(i.code),i.code.startsWith("Shift")&&be.delete("Shift")});window.addEventListener("blur",ss);document.addEventListener("visibilitychange",()=>{document.hidden&&ss()});ni.addEventListener("pointerdown",i=>{Fi()||(rs=!0,Zr=0,Ri={x:i.clientX,y:i.clientY},ni.setPointerCapture(i.pointerId))});ni.addEventListener("pointermove",i=>{if(Fi())return;let t=0,e=0;if($r?(t=i.movementX,e=i.movementY):rs&&Ri&&(t=i.clientX-Ri.x,e=i.clientY-Ri.y,Ri={x:i.clientX,y:i.clientY},Zr+=Math.abs(t)+Math.abs(e)),De?.active){De.pointer(i.clientX,i.clientY,t,e);return}Zn-=t*.003,Kr=Ia.clamp(Kr-e*.003,-1.15,1.15)});ni.addEventListener("pointerup",i=>{if(!Fi()){if(De?.active)Zr<8&&De.pointer(i.clientX,i.clientY);else if(Zr<8){if($r)hn&&or(hn.userData.chapter);else if(Me){vl.set(i.clientX/window.innerWidth*2-1,-i.clientY/window.innerHeight*2+1);const t=hc(vl);t&&or(t.userData.chapter)}}rs=!1,Ri=null}});document.querySelectorAll("[data-move]").forEach(i=>{i.addEventListener("pointerdown",t=>{t.preventDefault(),be.add(i.dataset.move),i.setPointerCapture(t.pointerId)});for(const t of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(t,()=>be.delete(i.dataset.move))});zt("#soundBtn").onclick=()=>{Ai=!Ai;try{Dn||(Dn=new(window.AudioContext||window.webkitAudioContext),$i=Dn.createGain(),$i.gain.value=0,$i.connect(Dn.destination),[55,82.41,110].forEach((i,t)=>{const e=Dn.createOscillator(),n=Dn.createGain();e.type="sine",e.frequency.value=i,n.gain.value=.035/(t+1),e.connect(n).connect($i),e.start()})),Dn.resume(),$i.gain.setTargetAtTime(Ai?1:0,Dn.currentTime,.4),zt("#soundBtn").textContent=`声音 · ${Ai?"开":"关"}`,zt("#soundBtn").setAttribute("aria-pressed",String(Ai))}catch{Ai=!1,ii("此窗口暂时无法播放声音。")}};function ce(i,t={}){return new La({color:i,roughness:.78,...t})}const nt={wood:ce(3745306),darkWood:ce(2169364),brass:ce(11769690,{metalness:.6,roughness:.4}),paper:ce(14997688),iron:ce(3488059,{metalness:.5}),red:ce(7090224),green:ce(3164990),cotton:ce(14011323),black:ce(1054485)};function st(i,t,e,n,r,s,a,o,l=!1){const c=new Ae(new si(t,e,n),o);return c.position.set(r,s,a),i.add(c),l&&(c.updateWorldMatrix(!0,!1),ro.push({box:new Bi().setFromObject(c),mesh:c})),c}function ve(i,t,e,n,r,s,a,o){const l=new Ae(new ts(t,e,n,24),o);return l.position.set(r,s,a),i.add(l),l}function xl(i,t,e,n,r,s){const a=new Ae(new es(t,16,12),s);return a.position.set(e,n,r),i.add(a),a}function je(i,t=2.5,e=.65,n=56,r="#e3cca0"){const s=document.createElement("canvas");s.width=1024,s.height=Math.round(1024*e/t);const a=s.getContext("2d");a.fillStyle=r,a.font=`${n}px "Microsoft YaHei",serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(i,s.width/2,s.height/2,1e3);const o=new Kl(s);o.colorSpace=Ie;const l=new Yl(new Za({map:o,transparent:!0,depthWrite:!1}));return l.scale.set(t,e,1),l}function cc(i,t,e,n,r,s=2.5){st(i,s,.56,.08,e,n,r,nt.darkWood);const a=je(t,s,.45,70);a.position.set(e,n,r+.07),i.add(a)}function Ml(i,t,e,n=0){const r=new xe;r.position.set(t,0,e),r.rotation.y=n,i.add(r),st(r,2.1,3,.35,0,1.5,0,nt.darkWood);for(let s=0;s<4;s++){st(r,2.1,.08,.65,0,.3+s*.72,.12,nt.wood);for(let a=0;a<9;a++){const o=[nt.red,nt.green,nt.wood,nt.paper][(s+a)%4],l=st(r,.14,.38+a%3*.1,.28,-.84+a*.2,.57+s*.72,.22,o);l.rotation.z=a%4===0?.08:0,st(r,.145,.025,.29,-.84+a*.2,.55+s*.72,.23,nt.brass)}}}function Oa(i,t,e,n=2){st(i,n,.12,1.1,t,.92,e,nt.wood,!0);for(const r of[-n*.42,n*.42])for(const s of[-.42,.42])st(i,.09,.87,.09,t+r,.435,e+s,nt.darkWood)}function Sl(i,t,e){ve(i,.2,.25,.08,t,1.03,e,nt.brass),ve(i,.025,.025,.42,t,1.28,e,nt.brass),ve(i,.21,.3,.21,t,1.55,e,ce(12953963,{emissive:11568185,emissiveIntensity:.65}))}function Jm(i,t,e,n){const r=new xe;r.position.set(e,1.03,n),t.add(r);const s=i.kind;if(s==="book"||s==="paper"||s==="ticket"||s==="letter"){for(let l=0;l<3;l++){const c=st(r,.66,.055,.49,l*.045,l*.065,0,s==="book"&&l===0?nt.red:nt.paper);c.rotation.y=l*.08}for(let l=0;l<4;l++)st(r,.39,.006,.012,0,.192,-.14+l*.075,nt.darkWood)}else if(s==="board"){st(r,1.65,1.15,.12,0,.62,0,nt.darkWood),st(r,1.48,.98,.02,0,.62,.075,nt.green);for(let l=0;l<3;l++){const c=je(["STEEL  90⅛","SUGAR  112","UP     155"][l],1.3,.21,50,"#eee7cf");c.position.set(0,.93-l*.3,.1),r.add(c)}}else if(s==="clock"){ve(r,.5,.5,.14,0,.58,0,nt.brass).rotation.x=Math.PI/2;const l=ve(r,.44,.44,.16,0,.58,.02,nt.paper);l.rotation.x=Math.PI/2;const c=st(r,.025,.32,.025,0,.72,.12,nt.black);c.rotation.z=-.6,st(r,.25,.02,.025,.1,.58,.12,nt.black),st(r,1,.08,.35,0,.05,0,nt.darkWood)}else if(s==="ship"){st(r,1.35,.22,.4,0,.16,0,nt.wood),st(r,.7,.22,.35,0,.36,0,nt.paper),ve(r,.025,.025,1.1,0,.77,0,nt.brass);const l=st(r,.55,.63,.02,.25,.85,0,nt.paper);l.rotation.y=.15}else if(s==="cotton"){st(r,.8,.5,.6,0,.25,0,nt.cotton);for(let l=0;l<7;l++)xl(r,.13,-.28+l%3*.24,.53+Math.floor(l/3)*.035,-.18+l%2*.34,nt.paper);for(const l of[-.25,.25])st(r,.025,.53,.62,l,.27,0,nt.wood)}else if(s==="phone"){ve(r,.28,.37,.12,0,.08,0,nt.black),ve(r,.055,.065,.65,0,.45,0,nt.brass);const l=ve(r,.17,.07,.3,0,.84,0,nt.brass);l.rotation.z=Math.PI/3;const c=ve(r,.09,.17,.35,.32,.55,0,nt.black);c.rotation.z=.3}else if(s==="safe"){st(r,.9,.9,.7,0,.45,0,nt.iron),st(r,.73,.72,.06,0,.45,.39,nt.darkWood);const l=ve(r,.12,.12,.09,0,.5,.46,nt.brass);l.rotation.x=Math.PI/2,st(r,.035,.25,.07,.22,.46,.48,nt.brass)}else if(s==="scale"){st(r,.8,.08,.35,0,.04,0,nt.wood),ve(r,.03,.03,.9,0,.53,0,nt.brass),st(r,1.1,.045,.04,0,.95,0,nt.brass);for(const l of[-.45,.45])st(r,.012,.4,.012,l,.75,0,nt.brass),ve(r,.23,.12,.08,l,.54,0,nt.brass)}else if(s==="press"){st(r,.85,.14,.65,0,.09,0,nt.black);for(const l of[-.34,.34])st(r,.08,.8,.08,l,.52,0,nt.brass);st(r,.8,.08,.14,0,.92,0,nt.iron),ve(r,.055,.055,.6,0,.7,0,nt.brass),st(r,.62,.12,.42,0,.37,0,nt.iron),st(r,.52,.025,.4,0,.23,0,nt.paper)}else if(s==="mirror")st(r,.95,1.2,.1,0,.62,0,nt.brass),st(r,.82,1.06,.03,0,.62,.07,ce(8559769,{metalness:1,roughness:.18}));else if(s==="suitcase"){st(r,.95,.58,.34,0,.3,0,nt.wood);for(const l of[-.3,.3])st(r,.045,.59,.36,l,.3,0,nt.brass);st(r,.3,.07,.07,0,.64,0,nt.darkWood)}else ve(r,.35,.42,.13,0,.12,0,nt.brass),xl(r,.26,0,.42,0,nt.paper);r.userData.chapter=i.n,r.traverse(l=>l.userData.chapter=i.n),ac.push(r);const a=new Ae(new to(.38,.43,40),ce(14203771,{emissive:14203771,emissiveIntensity:1,side:on,transparent:!0,opacity:.55}));a.rotation.x=-Math.PI/2,a.position.set(e,.992,n),t.add(a);const o=je(`${i.roman} · ${i.object}`,1.9,.34,48);o.position.set(e,1.95,n),t.add(o),oc.push({group:r,halo:a,label:o,n:i.n,base:r.position.y,activeUntil:0})}function Qm(i,t,e){if(i===0){st(t,3.1,1.8,.13,e*4.8,2.15,1.8,nt.green).rotation.y=Math.PI/2;const n=je("数字，是我的第一种语言。",3.1,.6,56);n.position.set(e*3.1,2.6,1.8),t.add(n)}if(i===1){for(let r=0;r<3;r++){const s=-1.5+r*1.5;st(t,.85,.12,.85,s,.5,1.8,nt.green),st(t,.85,1.1,.12,s,1.02,2.2,nt.darkWood);for(const a of[-.34,.34])for(const o of[-.34,.34])st(t,.07,.5,.07,s+a,.25,1.8+o,nt.wood)}const n=je("位置，比一时的差价更难找回。",4,.55,58);n.position.set(0,2.35,2.4),t.add(n)}if(i===2){st(t,4,.025,2.5,0,.07,2,ce(2444888,{metalness:.55,roughness:.3}));for(let r=0;r<10;r++)st(t,3.5,.025,.025,0,.09,1+r*.22,ce(7575192,{emissive:3429471,emissiveIntensity:.2}));const n=je("钱消失的那天，所有人都在找岸。",4,.55,55);n.position.set(0,2.5,2.6),t.add(n)}if(i===3){for(let r=0;r<7;r++){const s=e*(2.5+r%2*.9),a=.5+Math.floor(r/2)*.9;st(t,.75,.7,.65,s,.38,a,nt.cotton);for(const o of[-.23,.23])st(t,.035,.73,.69,s+o,.39,a,nt.wood)}const n=je("我知道，却没有做到。",3.7,.6,65);n.position.set(0,2.5,1.9),t.add(n)}if(i===4){for(let r=0;r<6;r++)st(t,.07,3,.07,-2+r*.8,1.5,3.6,nt.iron);st(t,4.2,.08,.08,0,2.9,3.6,nt.iron);const n=je("债务使每一刻，都像最后的机会。",4,.55,55);n.position.set(0,2.35,3.5),t.add(n)}if(i===5){for(let r=0;r<7;r++){const s=st(t,.52,.025,.38,-2.3+r*.72,1.6+Math.sin(r)*.3,2.8,nt.paper);s.rotation.z=Math.sin(r)*.15}const n=je("秘密经过七个人，仍只有一个源头。",4.4,.55,55);n.position.set(0,2.7,2.7),t.add(n)}if(i===6){st(t,4.5,.24,2.2,0,.12,2.4,nt.darkWood);for(const r of[-2.2,2.2])for(let s=0;s<4;s++)ve(t,.13,.13,2.9,r+s*.15*(r<0?1:-1),1.55,3.1,ce(6499384));const n=je("幕布升起时，谁正在退场？",4,.55,58);n.position.set(0,2.4,2.8),t.add(n)}if(i===7){Oa(t,0,2.7,3.2);for(let r=0;r<5;r++)st(t,.5,.03,.4,-1.1+r*.55,1.03,2.7,nt.paper);const n=je("最后一个判断，留给你。",4,.6,65);n.position.set(0,2.3,3.2),t.add(n)}}function t0(i){const t=so(i),e=new xe;e.position.set(t.x,0,t.z),pe.add(e);const n=ce(En[i].color),r=i%2===0?-1:1;st(e,10,.2,10,0,-.1,0,nt.wood);for(let o=0;o<12;o++)st(e,.025,.012,10,-5+o*.85,.015,0,nt.darkWood);st(e,10,4,.2,0,2,-5,n,!0),st(e,10,4,.2,0,2,5,n,!0),st(e,.2,4,10,r*5,2,0,n,!0);for(const o of[-3.25,3.25])st(e,.2,4,3.5,-r*5,2,o,n,!0);st(e,.2,1.2,3,-r*5,3.4,0,n);for(const o of[-4.86,4.86]){st(e,10,1,.08,0,.5,o,nt.darkWood),st(e,10,.06,.1,0,1.04,o,nt.brass);for(let l=0;l<7;l++)st(e,.04,.78,.12,-4.5+l*1.5,.5,o,nt.wood)}for(const o of[-4,0,4])st(e,10,.14,.2,0,3.95,o,nt.darkWood);st(e,2.5,2,.08,r*4.86,2.45,-1.7,ce(5798005,{emissive:5404785,emissiveIntensity:.4}));for(let o=0;o<4;o++)st(e,.07,2,.1,r*4.8,2.45,-2.8+o*.73,nt.darkWood);st(e,.12,.08,2.6,r*4.78,2.4,-1.7,nt.darkWood),st(e,6,.015,4.4,0,.025,.5,ce(i%2===0?4600103:2636853)),st(e,5.7,.017,.05,0,.035,-1.56,nt.brass),st(e,5.7,.017,.05,0,.035,2.56,nt.brass),Ml(e,r*3.5,4.5),Ml(e,r*1.2,4.5),cc(e,En[i].name,0,2.95,-4.83,3.7);const s=[[-2.8,-3.7],[0,-3.7],[2.8,-3.7]];ur.filter(o=>Math.floor((o.n-1)/3)===i).forEach((o,l)=>{const[c,u]=s[l];Oa(e,c,u,2.15),Jm(o,e,c,u),l===1&&Sl(e,c+.8,u+.28)}),Oa(e,r*3.3,1.8,1.5),Sl(e,r*3.3,1.8),st(e,.7,.1,.7,r*3.3,.5,2.8,nt.green),st(e,.7,.9,.08,r*3.3,.95,3.1,nt.darkWood),Qm(i,e,r);const a=new jr(16766106,19,15,2);a.position.set(0,3.3,-1),e.add(a),ve(e,.4,.65,.24,0,3.25,-1,ce(12755819,{emissive:14990192,emissiveIntensity:.9})),ve(e,.02,.02,.5,0,3.6,-1,nt.brass)}function e0(){pe=new Xl,pe.background=new Vt(1055768),pe.fog=new $a(1055768,.026),Me=new ze(67,innerWidth/innerHeight,.05,90),Me.position.set(0,1.7,7),Me.rotation.order="YXZ",sn=new Xm({canvas:ni,antialias:!0,powerPreference:"high-performance"}),sn.setSize(innerWidth,innerHeight),sn.setPixelRatio(Math.min(devicePixelRatio,1.7)),sn.outputColorSpace=Ie,sn.toneMapping=bl,sn.toneMappingExposure=1.4,pe.add(new Ql(12178896,7228460,1.5)),st(pe,4,.2,56,0,-.1,-18,nt.darkWood);for(let n=0;n<29;n++)st(pe,3.7,.015,.04,0,.01,8-n*2,nt.wood);st(pe,3,.02,54,0,.025,-18,ce(2571059));for(const n of[-1.48,1.48])st(pe,.025,.023,54,n,.04,-18,nt.brass);for(let n=0;n<4;n++){const r=-n*12;for(const a of[-2,2]){st(pe,.2,4,3,a,2,r+4.5,ce(2242604),!0),st(pe,.2,4,3,a,2,r-4.5,ce(2242604),!0);for(const o of[-1.65,1.65])st(pe,.25,3.2,.15,a,1.6,r+o,nt.wood);st(pe,.3,.18,3.5,a,3.1,r,nt.brass)}const s=new jr(14928785,13,13,2);s.position.set(0,3,r),pe.add(s),ve(pe,.22,.38,.2,0,3.1,r,ce(15782553,{emissive:12952936,emissiveIntensity:1})),ve(pe,.015,.015,.9,0,3.65,r,nt.brass)}for(const n of[9,-45])st(pe,4,4,.2,0,2,n,ce(2242604),!0);cc(pe,"每一次代价，都留下一个房间。",0,2.9,-44.83,3.6),En.forEach((n,r)=>t0(r));const i=new Oe,t=[];for(let n=0;n<180;n++)t.push((Math.random()-.5)*22,Math.random()*3.5,-Math.random()*48+7);i.setAttribute("position",new me(t,3)),pe.add(new jl(i,new Qa({size:.025,color:14596470,transparent:!0,opacity:.45})));const e=je("价格变了。人却还是那样。",4.5,.7,65,"#dbc58d");e.position.set(0,2.15,-5),pe.add(e),window.addEventListener("resize",()=>{Me.aspect=innerWidth/innerHeight,Me.updateProjectionMatrix(),sn.setSize(innerWidth,innerHeight)}),dc()}function El(i,t){return i<-11.65||i>11.65||t>8.65||t<-44.65?!0:ro.some(e=>i>e.box.min.x-.23&&i<e.box.max.x+.23&&t>e.box.min.z-.23&&t<e.box.max.z+.23&&e.box.max.y>.3&&e.box.min.y<1.8)}function hc(i){Vs.setFromCamera(i,Me);const e=Vs.intersectObjects(ac,!0).find(r=>r.distance<5.5);if(!e)return null;const n=Vs.intersectObjects(ro.map(r=>r.mesh),!1)[0];return n&&n.distance<e.distance-.05?null:e.object}function uc(){if(!Me)return;const i=Me.position;let t=-1;for(let e=0;e<8;e++){const n=so(e);if(Math.abs(i.x-n.x)<4.95&&Math.abs(i.z-n.z)<4.95){t=e;break}}t!==Fa&&(Fa=t,t<0?(zt("#roomNumber").textContent="序章 / THE LONG HALLWAY",zt("#roomTitle").textContent="所有错误，都还住在这里。",zt("#roomConcept").textContent="走进两侧的房间，靠近发光的物件。"):(zt("#roomNumber").textContent=`0${t+1} / ${En[t].period}`,zt("#roomTitle").textContent=En[t].name,zt("#roomConcept").textContent=En[t].concept,ii(En[t].whisper)))}function dc(){requestAnimationFrame(dc);const i=Math.min(jm.getDelta(),.05);if(De?.active){De.update(Fi()?0:i);return}if(!Fi()){Me.rotation.set(Kr,Zn,0,"YXZ");let e=0,n=0;(be.has("KeyW")||be.has("ArrowUp"))&&(n-=1),(be.has("KeyS")||be.has("ArrowDown"))&&(n+=1),(be.has("KeyA")||be.has("ArrowLeft"))&&(e-=1),(be.has("KeyD")||be.has("ArrowRight"))&&(e+=1);const r=Math.hypot(e,n)||1,s=(be.has("Shift")?4.5:2.6)*i,a=(e*Math.cos(Zn)+n*Math.sin(Zn))/r*s,o=(-e*Math.sin(Zn)+n*Math.cos(Zn))/r*s;if(El(Me.position.x+a,Me.position.z)||(Me.position.x+=a),El(Me.position.x,Me.position.z+o)||(Me.position.z+=o),uc(),hn=hc(new Dt(0,0)),zt("#interact").hidden=!hn,hn){const l=ur.find(c=>c.n===hn.userData.chapter);zt("#targetName").textContent=l?.object||""}}const t=performance.now();oc.forEach((e,n)=>{e.halo.material.opacity=.3+Math.sin(t*.0015+n)*.18,e.group.rotation.y=e.activeUntil>t?Math.sin(t*.004)*.13:0}),sn.render(pe,Me)}try{e0(),De=new Ym(sn,{onClose:()=>be.clear(),onArchive:lc})}catch(i){console.error(i),zt("#error").hidden=!1,zt("#walkBtn").disabled=!0}ki("#intro");
