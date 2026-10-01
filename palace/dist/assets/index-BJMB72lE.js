(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const to="180",Wc=0,Uo=1,Xc=2,ql=1,qc=2,wn=3,Xn=0,We=1,tn=2,Pn=0,Oi=1,oa=2,No=3,Fo=4,Yc=5,si=100,jc=101,Kc=102,$c=103,Zc=104,Jc=200,Qc=201,th=202,eh=203,la=204,ca=205,nh=206,ih=207,sh=208,rh=209,ah=210,oh=211,lh=212,ch=213,hh=214,ha=0,ua=1,da=2,zi=3,fa=4,pa=5,ma=6,ga=7,Yl=0,uh=1,dh=2,Gn=0,jl=1,Kl=2,$l=3,eo=4,Zl=5,Jl=6,Ql=7,tc=300,ki=301,Hi=302,_a=303,va=304,mr=306,or=1e3,oi=1001,xa=1002,cn=1003,fh=1004,Rs=1005,pn=1006,wr=1007,li=1008,_n=1009,ec=1010,nc=1011,fs=1012,no=1013,hi=1014,An=1015,In=1016,io=1017,so=1018,ps=1020,ic=35902,sc=35899,rc=1021,ac=1022,ln=1023,ms=1026,gs=1027,oc=1028,ro=1029,lc=1030,ao=1031,oo=1033,er=33776,nr=33777,ir=33778,sr=33779,Ma=35840,Sa=35841,ya=35842,Ea=35843,ba=36196,Ta=37492,wa=37496,Aa=37808,Ra=37809,Ca=37810,Pa=37811,Ia=37812,Da=37813,La=37814,Ua=37815,Na=37816,Fa=37817,Oa=37818,Ba=37819,za=37820,ka=37821,Ha=36492,Va=36494,Ga=36495,Wa=36283,Xa=36284,qa=36285,Ya=36286,ph=3200,mh=3201,cc=0,gh=1,Vn="",Ie="srgb",Vi="srgb-linear",lr="linear",Jt="srgb",mi=7680,Oo=519,_h=512,vh=513,xh=514,hc=515,Mh=516,Sh=517,yh=518,Eh=519,ja=35044,Bo="300 es",mn=2e3,cr=2001;class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zo=1234567;const us=Math.PI/180,_s=180/Math.PI;function Dn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function lo(i,t){return(i%t+t)%t}function bh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Th(i,t,e){return i!==t?(e-i)/(t-i):0}function ds(i,t,e){return(1-e)*i+e*t}function wh(i,t,e,n){return ds(i,t,1-Math.exp(-e*n))}function Ah(i,t=1){return t-Math.abs(lo(i,t*2)-t)}function Rh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ch(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ph(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ih(i,t){return i+Math.random()*(t-i)}function Dh(i){return i*(.5-Math.random())}function Lh(i){i!==void 0&&(zo=i);let t=zo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Uh(i){return i*us}function Nh(i){return i*_s}function Fh(i){return(i&i-1)===0&&i!==0}function Oh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vs={DEG2RAD:us,RAD2DEG:_s,generateUUID:Dn,clamp:Gt,euclideanModulo:lo,mapLinear:bh,inverseLerp:Th,lerp:ds,damp:wh,pingpong:Ah,smoothstep:Rh,smootherstep:Ch,randInt:Ph,randFloat:Ih,randFloatSpread:Dh,seededRandom:Lh,degToRad:Uh,radToDeg:Nh,isPowerOfTwo:Fh,ceilPowerOfTwo:Oh,floorPowerOfTwo:Bh,setQuaternionFromProperEuler:zh,normalize:Qt,denormalize:on};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ys{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const h=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==h||c!==f||u!==g){let m=1-o;const p=l*h+c*f+u*g+d*v,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const R=Math.sqrt(b),A=Math.atan2(R,p*w);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const y=o*w;if(l=l*m+h*y,c=c*m+f*y,u=u*m+g*y,d=d*m+v*y,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-o*f,t[e+2]=c*g+u*f+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ko.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ko.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ar.copy(this).projectOnVector(t),this.sub(Ar)}reflect(t){return this.sub(Ar.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ar=new D,ko=new ys;class Ot{constructor(t,e,n,s,r,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],w=s[1],b=s[4],y=s[7],R=s[2],A=s[5],C=s[8];return r[0]=a*v+o*w+l*R,r[3]=a*m+o*b+l*A,r[6]=a*p+o*y+l*C,r[1]=c*v+u*w+d*R,r[4]=c*m+u*b+d*A,r[7]=c*p+u*y+d*C,r[2]=h*v+f*w+g*R,r[5]=h*m+f*b+g*A,r[8]=h*p+f*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=h*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Rr.makeScale(t,e)),this}rotate(t){return this.premultiply(Rr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rr=new Ot;function uc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kh(){const i=xs("canvas");return i.style.display="block",i}const Ho={};function Ms(i){i in Ho||(Ho[i]=!0,console.warn(i))}function Hh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Vo=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Go=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vh(){const i={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vi]:{primaries:t,whitePoint:n,transfer:lr,toXYZ:Vo,fromXYZ:Go,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:Vo,fromXYZ:Go,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}const qt=Vh();function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gi;class Gh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gi===void 0&&(gi=xs("canvas")),gi.width=t.width,gi.height=t.height;const s=gi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=gi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wh=0;class co{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Cr(s[a].image)):r.push(Cr(s[a]))}else r=Cr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Cr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xh=0;const Pr=new D;class Oe extends Yi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=oi,s=oi,r=pn,a=li,o=ln,l=_n,c=Oe.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Dn(),this.name="",this.source=new co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pr).x}get height(){return this.source.getSize(Pr).y}get depth(){return this.source.getSize(Pr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case or:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case or:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=tc;Oe.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,y=(f+1)/2,R=(p+1)/2,A=(u+h)/4,C=(d+v)/4,N=(g+m)/4;return b>y&&b>R?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=C/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=N/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=N/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-v)/w,this.z=(h-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qh extends Yi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Oe(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new co(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends qh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dc extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yh extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ts),Ps.subVectors(this.max,ts),_i.subVectors(t.a,ts),vi.subVectors(t.b,ts),xi.subVectors(t.c,ts),Un.subVectors(vi,_i),Nn.subVectors(xi,vi),Kn.subVectors(_i,xi);let e=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-Kn.z,Kn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,Kn.z,0,-Kn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-Kn.y,Kn.x,0];return!Ir(e,_i,vi,xi,Ps)||(e=[1,0,0,0,1,0,0,0,1],!Ir(e,_i,vi,xi,Ps))?!1:(Is.crossVectors(Un,Nn),e=[Is.x,Is.y,Is.z],Ir(e,_i,vi,xi,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Mn=[new D,new D,new D,new D,new D,new D,new D,new D],sn=new D,Cs=new ji,_i=new D,vi=new D,xi=new D,Un=new D,Nn=new D,Kn=new D,ts=new D,Ps=new D,Is=new D,$n=new D;function Ir(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$n.fromArray(i,r);const o=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),u=n.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const jh=new ji,es=new D,Dr=new D;class gr{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;es.subVectors(t,this.center);const e=es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(es.copy(t.center).add(Dr)),this.expandByPoint(es.copy(t.center).sub(Dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Sn=new D,Lr=new D,Ds=new D,Fn=new D,Ur=new D,Ls=new D,Nr=new D;class ho{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Lr.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(Lr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ds),o=Fn.dot(this.direction),l=-Fn.dot(Ds),c=Fn.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Lr).addScaledVector(Ds,h),f}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){Ur.subVectors(e,t),Ls.subVectors(n,t),Nr.crossVectors(Ur,Ls);let a=this.direction.dot(Nr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,t);const l=o*this.direction.dot(Ls.crossVectors(Fn,Ls));if(l<0)return null;const c=o*this.direction.dot(Ur.cross(Fn));if(c<0||l+c>a)return null;const u=-o*Fn.dot(Nr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,a,o,l,c,u,d,h,f,g,v,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,f,g,v,m)}set(t,e,n,s,r,a,o,l,c,u,d,h,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,f=a*d,g=o*u,v=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-v*c,e[9]=-o*l,e[2]=v-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,g=c*u,v=c*d;e[0]=h+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=v+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,g=c*u,v=c*d;e[0]=h-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,f=a*d,g=o*u,v=o*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+v,e[1]=l*d,e[5]=v*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-v*d}else if(t.order==="XZY"){const h=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+v,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kh,t,$h)}lookAt(t,e,n){const s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),On.crossVectors(n,Ye),On.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),On.crossVectors(n,Ye)),On.normalize(),Us.crossVectors(Ye,On),s[0]=On.x,s[4]=Us.x,s[8]=Ye.x,s[1]=On.y,s[5]=Us.y,s[9]=Ye.y,s[2]=On.z,s[6]=Us.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],w=n[3],b=n[7],y=n[11],R=n[15],A=s[0],C=s[4],N=s[8],S=s[12],M=s[1],P=s[5],O=s[9],k=s[13],q=s[2],W=s[6],X=s[10],$=s[14],H=s[3],ot=s[7],ut=s[11],Tt=s[15];return r[0]=a*A+o*M+l*q+c*H,r[4]=a*C+o*P+l*W+c*ot,r[8]=a*N+o*O+l*X+c*ut,r[12]=a*S+o*k+l*$+c*Tt,r[1]=u*A+d*M+h*q+f*H,r[5]=u*C+d*P+h*W+f*ot,r[9]=u*N+d*O+h*X+f*ut,r[13]=u*S+d*k+h*$+f*Tt,r[2]=g*A+v*M+m*q+p*H,r[6]=g*C+v*P+m*W+p*ot,r[10]=g*N+v*O+m*X+p*ut,r[14]=g*S+v*k+m*$+p*Tt,r[3]=w*A+b*M+y*q+R*H,r[7]=w*C+b*P+y*W+R*ot,r[11]=w*N+b*O+y*X+R*ut,r[15]=w*S+b*k+y*$+R*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*d-s*c*d-r*o*h+n*c*h+s*o*f-n*l*f)+v*(+e*l*f-e*c*h+r*a*h-s*a*f+s*c*u-r*l*u)+m*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-e*l*d+e*o*h+s*a*d-n*a*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],w=d*m*c-v*h*c+v*l*f-o*m*f-d*l*p+o*h*p,b=g*h*c-u*m*c-g*l*f+a*m*f+u*l*p-a*h*p,y=u*v*c-g*d*c+g*o*f-a*v*f-u*o*p+a*d*p,R=g*d*l-u*v*l-g*o*h+a*v*h+u*o*m-a*d*m,A=e*w+n*b+s*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=w*C,t[1]=(v*h*r-d*m*r-v*s*f+n*m*f+d*s*p-n*h*p)*C,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*C,t[3]=(d*l*r-o*h*r-d*s*c+n*h*c+o*s*f-n*l*f)*C,t[4]=b*C,t[5]=(u*m*r-g*h*r+g*s*f-e*m*f-u*s*p+e*h*p)*C,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*C,t[7]=(a*h*r-u*l*r+u*s*c-e*h*c-a*s*f+e*l*f)*C,t[8]=y*C,t[9]=(g*d*r-u*v*r-g*n*f+e*v*f+u*n*p-e*d*p)*C,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*C,t[11]=(u*o*r-a*d*r-u*n*c+e*d*c+a*n*f-e*o*f)*C,t[12]=R*C,t[13]=(u*v*s-g*d*s+g*n*h-e*v*h-u*n*m+e*d*m)*C,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*C,t[15]=(a*d*s-u*o*s+u*n*l-e*d*l-a*n*h+e*o*h)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,v=a*u,m=a*d,p=o*d,w=l*c,b=l*u,y=l*d,R=n.x,A=n.y,C=n.z;return s[0]=(1-(v+p))*R,s[1]=(f+y)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(h+p))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(g+b)*C,s[9]=(m-w)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const a=Mi.set(s[4],s[5],s[6]).length(),o=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);const c=1/r,u=1/a,d=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,e.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=mn,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===mn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===cr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mn,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===mn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===cr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new D,rn=new le,Kh=new D(0,0,0),$h=new D(1,1,1),On=new D,Us=new D,Ye=new D,Wo=new le,Xo=new ys;class vn{constructor(t=0,e=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class uo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zh=0;const qo=new D,Si=new ys,yn=new le,Ns=new D,ns=new D,Jh=new D,Qh=new ys,Yo=new D(1,0,0),jo=new D(0,1,0),Ko=new D(0,0,1),$o={type:"added"},tu={type:"removed"},yi={type:"childadded",child:null},Fr={type:"childremoved",child:null};class Te extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new D,e=new vn,n=new ys,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Ot}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(Yo,t)}rotateY(t){return this.rotateOnAxis(jo,t)}rotateZ(t){return this.rotateOnAxis(Ko,t)}translateOnAxis(t,e){return qo.copy(t).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yo,t)}translateY(t){return this.translateOnAxis(jo,t)}translateZ(t){return this.translateOnAxis(Ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ns.copy(t):Ns.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(ns,Ns,this.up):yn.lookAt(Ns,ns,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(yn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($o),yi.child=t,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tu),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($o),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,t,Jh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,Qh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new D(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new D,En=new D,Or=new D,bn=new D,Ei=new D,bi=new D,Zo=new D,Br=new D,zr=new D,kr=new D,Hr=new ne,Vr=new ne,Gr=new ne;class en{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),En.subVectors(n,e),Or.subVectors(t,e);const a=an.dot(an),o=an.dot(En),l=an.dot(Or),c=En.dot(En),u=En.dot(Or),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Hr.setScalar(0),Vr.setScalar(0),Gr.setScalar(0),Hr.fromBufferAttribute(t,e),Vr.fromBufferAttribute(t,n),Gr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Hr,r.x),a.addScaledVector(Vr,r.y),a.addScaledVector(Gr,r.z),a}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),En.subVectors(t,e),an.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),En.subVectors(this.a,this.b),an.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ei.subVectors(s,n),bi.subVectors(r,n),Br.subVectors(t,n);const l=Ei.dot(Br),c=bi.dot(Br);if(l<=0&&c<=0)return e.copy(n);zr.subVectors(t,s);const u=Ei.dot(zr),d=bi.dot(zr);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ei,a);kr.subVectors(t,r);const f=Ei.dot(kr),g=bi.dot(kr);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(bi,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Zo.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Zo,o);const p=1/(m+v+h);return a=v*p,o=h*p,e.copy(n).addScaledVector(Ei,a).addScaledVector(bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Wr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=lo(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Wr(a,r,t+1/3),this.g=Wr(a,r,t),this.b=Wr(a,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=fc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return qt.workingToColorSpace(Fe.copy(this),t),Math.round(Gt(Fe.r*255,0,255))*65536+Math.round(Gt(Fe.g*255,0,255))*256+Math.round(Gt(Fe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ie){qt.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Fs);const n=ds(Bn.h,Fs.h,e),s=ds(Bn.s,Fs.s,e),r=ds(Bn.l,Fs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Nt;Nt.NAMES=fc;let eu=0;class fi extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Oi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Es extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new D,Os=new yt;let nu=0;class nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ja,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=on(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=on(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=on(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=on(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ja&&(t.usage=this.usage),t}}class pc extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mc extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let iu=0;const Ze=new le,Xr=new Te,Ti=new D,je=new ji,is=new ji,Ce=new D;class De extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uc(t)?mc:pc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return Xr.lookAt(t),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];is.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(je.min,is.min),je.expandByPoint(Ce),Ce.addVectors(je.max,is.max),je.expandByPoint(Ce)):(je.expandByPoint(is.min),je.expandByPoint(is.max))}je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ce.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(t,c),Ce.add(Ti)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new D,l[N]=new D;const c=new D,u=new D,d=new D,h=new yt,f=new yt,g=new yt,v=new D,m=new D;function p(N,S,M){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),h.fromBufferAttribute(r,N),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[N].add(v),o[S].add(v),o[M].add(v),l[N].add(m),l[S].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let N=0,S=w.length;N<S;++N){const M=w[N],P=M.start,O=M.count;for(let k=P,q=P+O;k<q;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const b=new D,y=new D,R=new D,A=new D;function C(N){R.fromBufferAttribute(s,N),A.copy(R);const S=o[N];b.copy(S),b.sub(R.multiplyScalar(R.dot(S))).normalize(),y.crossVectors(A,S);const P=y.dot(l[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,P)}for(let N=0,S=w.length;N<S;++N){const M=w[N],P=M.start,O=M.count;for(let k=P,q=P+O;k<q;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,d=new D;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new nn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jo=new le,Zn=new ho,Bs=new gr,Qo=new D,zs=new D,ks=new D,Hs=new D,qr=new D,Vs=new D,tl=new D,Gs=new D;class te extends Te{constructor(t=new De,e=new Es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(qr.fromBufferAttribute(d,t),a?Vs.addScaledVector(qr,u):Vs.addScaledVector(qr.sub(e),u))}e.add(Vs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(r),Zn.copy(t.ray).recast(t.near),!(Bs.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Bs,Qo)===null||Zn.origin.distanceToSquared(Qo)>(t.far-t.near)**2))&&(Jo.copy(r).invert(),Zn.copy(t.ray).applyMatrix4(Jo),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,R=b;y<R;y+=3){const A=o.getX(y),C=o.getX(y+1),N=o.getX(y+2);s=Ws(this,p,t,n,c,u,d,A,C,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);s=Ws(this,a,t,n,c,u,d,w,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,R=b;y<R;y+=3){const A=y,C=y+1,N=y+2;s=Ws(this,p,t,n,c,u,d,A,C,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=m,b=m+1,y=m+2;s=Ws(this,a,t,n,c,u,d,w,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function su(i,t,e,n,s,r,a,o){let l;if(t.side===We?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xn,o),l===null)return null;Gs.copy(o),Gs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Gs);return c<e.near||c>e.far?null:{distance:c,point:Gs.clone(),object:i}}function Ws(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,zs),i.getVertexPosition(l,ks),i.getVertexPosition(c,Hs);const u=su(i,t,e,n,zs,ks,Hs,tl);if(u){const d=new D;en.getBarycoord(tl,zs,ks,Hs,d),s&&(u.uv=en.getInterpolatedAttribute(s,o,l,c,d,new yt)),r&&(u.uv1=en.getInterpolatedAttribute(r,o,l,c,d,new yt)),a&&(u.normal=en.getInterpolatedAttribute(a,o,l,c,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new D,materialIndex:0};en.getNormal(zs,ks,Hs,h.normal),u.face=h,u.barycoord=d}return u}class qn extends De{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(d,2));function g(v,m,p,w,b,y,R,A,C,N,S){const M=y/C,P=R/N,O=y/2,k=R/2,q=A/2,W=C+1,X=N+1;let $=0,H=0;const ot=new D;for(let ut=0;ut<X;ut++){const Tt=ut*P-k;for(let Ht=0;Ht<W;Ht++){const se=Ht*M-O;ot[v]=se*w,ot[m]=Tt*b,ot[p]=q,c.push(ot.x,ot.y,ot.z),ot[v]=0,ot[m]=0,ot[p]=A>0?1:-1,u.push(ot.x,ot.y,ot.z),d.push(Ht/C),d.push(1-ut/N),$+=1}}for(let ut=0;ut<N;ut++)for(let Tt=0;Tt<C;Tt++){const Ht=h+Tt+W*ut,se=h+Tt+W*(ut+1),ce=h+(Tt+1)+W*(ut+1),Kt=h+(Tt+1)+W*ut;l.push(Ht,se,Kt),l.push(se,ce,Kt),H+=6}o.addGroup(f,H,S),f+=H,h+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=Gi(i[e]);for(const s in n)t[s]=n[s]}return t}function ru(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Ss={clone:Gi,merge:ke};var au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=au,this.fragmentShader=ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=ru(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _c extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new D,el=new yt,nl=new yt;class He extends _c{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,el,nl),e.subVectors(nl,el)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,Ai=1;class lu extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(wi,Ai,t,e);s.layers=this.layers,this.add(s);const r=new He(wi,Ai,t,e);r.layers=this.layers,this.add(r);const a=new He(wi,Ai,t,e);a.layers=this.layers,this.add(a);const o=new He(wi,Ai,t,e);o.layers=this.layers,this.add(o);const l=new He(wi,Ai,t,e);l.layers=this.layers,this.add(l);const c=new He(wi,Ai,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vc extends Oe{constructor(t=[],e=ki,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cu extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qn(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Pn});r.uniforms.tEquirect.value=e;const a=new te(s,r),o=e.minFilter;return e.minFilter===li&&(e.minFilter=pn),new lu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Xt extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hu={type:"move"};class Yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class _r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(t),this.density=e}clone(){return new _r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fo extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class uu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ja,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new D;class hr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=on(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=on(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=on(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=on(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new hr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class po extends fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ri;const ss=new D,Ci=new D,Pi=new D,Ii=new yt,rs=new yt,xc=new le,Xs=new D,as=new D,qs=new D,il=new yt,jr=new yt,sl=new yt;class Mc extends Te{constructor(t=new po){if(super(),this.isSprite=!0,this.type="Sprite",Ri===void 0){Ri=new De;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uu(e,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new hr(n,3,0,!1)),Ri.setAttribute("uv",new hr(n,2,3,!1))}this.geometry=Ri,this.material=t,this.center=new yt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ci.setFromMatrixScale(this.matrixWorld),xc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ci.multiplyScalar(-Pi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ys(Xs.set(-.5,-.5,0),Pi,a,Ci,s,r),Ys(as.set(.5,-.5,0),Pi,a,Ci,s,r),Ys(qs.set(.5,.5,0),Pi,a,Ci,s,r),il.set(0,0),jr.set(1,0),sl.set(1,1);let o=t.ray.intersectTriangle(Xs,as,qs,!1,ss);if(o===null&&(Ys(as.set(-.5,.5,0),Pi,a,Ci,s,r),jr.set(0,1),o=t.ray.intersectTriangle(Xs,qs,as,!1,ss),o===null))return;const l=t.ray.origin.distanceTo(ss);l<t.near||l>t.far||e.push({distance:l,point:ss.clone(),uv:en.getInterpolation(ss,Xs,as,qs,il,jr,sl,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ys(i,t,e,n,s,r){Ii.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(rs.x=r*Ii.x-s*Ii.y,rs.y=s*Ii.x+r*Ii.y):rs.copy(Ii),i.copy(t),i.x+=rs.x,i.y+=rs.y,i.applyMatrix4(xc)}const Kr=new D,du=new D,fu=new Ot;class ni{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Kr.subVectors(n,e).cross(du.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fu.getNormalMatrix(t),s=this.coplanarPoint(Kr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new gr,pu=new yt(.5,.5),js=new D;class mo{constructor(t=new ni,e=new ni,n=new ni,s=new ni,r=new ni,a=new ni){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],w=r[12],b=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-a,f-u,p-g,R-w).normalize(),s[1].setComponents(c+a,f+u,p+g,R+w).normalize(),s[2].setComponents(c+o,f+d,p+v,R+b).normalize(),s[3].setComponents(c-o,f-d,p-v,R-b).normalize(),n)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,p-m,R-y).normalize();else if(s[4].setComponents(c-l,f-h,p-m,R-y).normalize(),e===mn)s[5].setComponents(c+l,f+h,p+m,R+y).normalize();else if(e===cr)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){Jn.center.set(0,0,0);const e=pu.distanceTo(t.center);return Jn.radius=.7071067811865476+e,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(js.x=s.normal.x>0?t.max.x:t.min.x,js.y=s.normal.y>0?t.max.y:t.min.y,js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vr extends fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rl=new le,Ka=new ho,Ks=new gr,$s=new D;class go extends Te{constructor(t=new De,e=new vr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,t.ray.intersectsSphere(Ks)===!1)return;rl.copy(s).invert(),Ka.copy(t.ray).applyMatrix4(rl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,v=f;g<v;g++){const m=c.getX(g);$s.fromBufferAttribute(d,m),al($s,m,l,s,t,e,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,v=f;g<v;g++)$s.fromBufferAttribute(d,g),al($s,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function al(i,t,e,n,s,r,a){const o=Ka.distanceSqToPoint(i);if(o<e){const l=new D;Ka.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ur extends Oe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sc extends Oe{constructor(t,e,n=hi,s,r,a,o=cn,l=cn,c,u=ms,d=1){if(u!==ms&&u!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new co(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class yc extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ki extends De{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const v=[],m=n/2;let p=0;w(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(f,2));function w(){const y=new D,R=new D;let A=0;const C=(e-t)/n;for(let N=0;N<=r;N++){const S=[],M=N/r,P=M*(e-t)+t;for(let O=0;O<=s;O++){const k=O/s,q=k*l+o,W=Math.sin(q),X=Math.cos(q);R.x=P*W,R.y=-M*n+m,R.z=P*X,d.push(R.x,R.y,R.z),y.set(W,C,X).normalize(),h.push(y.x,y.y,y.z),f.push(k,1-M),S.push(g++)}v.push(S)}for(let N=0;N<s;N++)for(let S=0;S<r;S++){const M=v[S][N],P=v[S+1][N],O=v[S+1][N+1],k=v[S][N+1];(t>0||S!==0)&&(u.push(M,P,k),A+=3),(e>0||S!==r-1)&&(u.push(P,O,k),A+=3)}c.addGroup(p,A,0),p+=A}function b(y){const R=g,A=new yt,C=new D;let N=0;const S=y===!0?t:e,M=y===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*M,0),h.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=s;O++){const q=O/s*l+o,W=Math.cos(q),X=Math.sin(q);C.x=S*X,C.y=m*M,C.z=S*W,d.push(C.x,C.y,C.z),h.push(0,M,0),A.x=W*.5+.5,A.y=X*.5*M+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){const k=R+O,q=P+O;y===!0?u.push(q,q+1,k):u.push(q+1,q,k),N+=3}c.addGroup(p,N,y===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _o extends Ki{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new _o(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rn extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const w=p*h-a;for(let b=0;b<c;b++){const y=b*d-r;g.push(y,-w,0),v.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const b=w+c*p,y=w+c*(p+1),R=w+1+c*(p+1),A=w+1+c*p;f.push(b,y,A),f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.width,t.height,t.widthSegments,t.heightSegments)}}class vo extends De{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=t;const h=(e-t)/s,f=new D,g=new yt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const w=p+m,b=w,y=w+n+1,R=w+n+2,A=w+1;o.push(b,y,A),o.push(y,R,A)}}this.setIndex(o),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class bs extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new D,h=new D,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const w=[],b=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const A=R/e;d.x=-t*Math.cos(s+A*r)*Math.sin(a+b*o),d.y=t*Math.cos(a+b*o),d.z=t*Math.sin(s+A*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(A+y,1-b),w.push(c++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const b=u[p][w+1],y=u[p][w],R=u[p+1][w],A=u[p+1][w+1];(p!==0||a>0)&&f.push(b,y,A),(p!==n-1||l<Math.PI)&&f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xr extends De{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new D,d=new D,h=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;a.push(v,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class mu extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ci extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gu extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _u extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $r={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vu{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const xu=new vu;class xo{constructor(t){this.manager=t!==void 0?t:xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}xo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Di=new WeakMap;class Mu extends xo{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=$r.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Di.get(a);d===void 0&&(d=[],Di.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=xs("img");function l(){u(),e&&e(this);const d=Di.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Di.delete(this),r.manager.itemEnd(t)}function c(d){u(),s&&s(d),$r.remove(`image:${t}`);const h=Di.get(this)||[];for(let f=0;f<h.length;f++){const g=h[f];g.onError&&g.onError(d)}Di.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$r.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class Su extends xo{constructor(t){super(t)}load(t,e,n,s){const r=new Oe,a=new Mu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Mo extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class So extends Mo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Zr=new le,ol=new D,ll=new D;class Ec{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(ol),ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ll),e.updateMatrixWorld(),Zr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const cl=new le,os=new D,Jr=new D;class yu extends Ec{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),os.setFromMatrixPosition(t.matrixWorld),n.position.copy(os),Jr.copy(n.position),Jr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Jr),n.updateMatrixWorld(),s.makeTranslation(-os.x,-os.y,-os.z),cl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl,n.coordinateSystem,n.reversedDepth)}}class Wi extends Mo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class yo extends _c{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Eu extends Ec{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bu extends Mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Eu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tu extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class bc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const hl=new le;class Eo{constructor(t,e,n=0,s=1/0){this.ray=new ho(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hl),this}intersectObject(t,e=!0,n=[]){return $a(t,this,n,e),n.sort(ul),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)$a(t[s],this,n,e);return n.sort(ul),n}}function ul(i,t){return i.distance-t.distance}function $a(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)$a(r[a],t,e,!0)}}function dl(i,t,e,n){const s=wu(n);switch(e){case rc:return i*t;case oc:return i*t/s.components*s.byteLength;case ro:return i*t/s.components*s.byteLength;case lc:return i*t*2/s.components*s.byteLength;case ao:return i*t*2/s.components*s.byteLength;case ac:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case oo:return i*t*4/s.components*s.byteLength;case er:case nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:case Ea:return Math.max(i,16)*Math.max(t,8)/4;case Ma:case ya:return Math.max(i,8)*Math.max(t,8)/2;case ba:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ha:case Va:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wu(i){switch(i){case _n:case ec:return{byteLength:1,components:1};case fs:case nc:case In:return{byteLength:2,components:1};case io:case so:return{byteLength:2,components:4};case hi:case no:case An:return{byteLength:4,components:1};case ic:case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:to}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=to);function Tc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Au(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cu=`#ifdef USE_ALPHAHASH
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
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uu=`#ifdef USE_AOMAP
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
#endif`,Nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu=`#ifdef USE_BATCHING
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
#endif`,Ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ku=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hu=`#ifdef USE_IRIDESCENCE
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
#endif`,Vu=`#ifdef USE_BUMPMAP
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zu=`#define PI 3.141592653589793
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
} // validated`,Ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qu=`vec3 transformedNormal = objectNormal;
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
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ad=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,md=`#ifdef USE_GRADIENTMAP
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
}`,gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xd=`uniform bool receiveShadow;
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
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Td=`PhysicalMaterial material;
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
#endif`,wd=`struct PhysicalMaterial {
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
}`,Ad=`
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
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Od=`#if defined( USE_POINTS_UV )
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
#endif`,Bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
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
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$d=`#ifdef USE_NORMALMAP
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
#endif`,Zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,df=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ff=`float getShadowMask() {
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
}`,pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mf=`#ifdef USE_SKINNING
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
#endif`,gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_f=`#ifdef USE_SKINNING
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
#endif`,vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#ifdef USE_TRANSMISSION
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cf=`uniform sampler2D t2D;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`#include <common>
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
}`,Nf=`#if DEPTH_PACKING == 3200
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
}`,Ff=`#define DISTANCE
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
}`,Of=`#define DISTANCE
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
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`uniform float scale;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Vf=`#include <common>
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Wf=`#define LAMBERT
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
}`,Xf=`#define LAMBERT
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
}`,qf=`#define MATCAP
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
}`,Yf=`#define MATCAP
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
}`,jf=`#define NORMAL
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
}`,Kf=`#define NORMAL
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
}`,$f=`#define PHONG
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
}`,Zf=`#define PHONG
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
}`,Jf=`#define STANDARD
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
}`,Qf=`#define STANDARD
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
}`,tp=`#define TOON
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
}`,ep=`#define TOON
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
}`,np=`uniform float size;
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
}`,ip=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,rp=`uniform vec3 color;
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
}`,ap=`uniform float rotation;
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
}`,op=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Ru,alphahash_pars_fragment:Cu,alphamap_fragment:Pu,alphamap_pars_fragment:Iu,alphatest_fragment:Du,alphatest_pars_fragment:Lu,aomap_fragment:Uu,aomap_pars_fragment:Nu,batching_pars_vertex:Fu,batching_vertex:Ou,begin_vertex:Bu,beginnormal_vertex:zu,bsdfs:ku,iridescence_fragment:Hu,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:Xu,clipping_planes_vertex:qu,color_fragment:Yu,color_pars_fragment:ju,color_pars_vertex:Ku,color_vertex:$u,common:Zu,cube_uv_reflection_fragment:Ju,defaultnormal_vertex:Qu,displacementmap_pars_vertex:td,displacementmap_vertex:ed,emissivemap_fragment:nd,emissivemap_pars_fragment:id,colorspace_fragment:sd,colorspace_pars_fragment:rd,envmap_fragment:ad,envmap_common_pars_fragment:od,envmap_pars_fragment:ld,envmap_pars_vertex:cd,envmap_physical_pars_fragment:Md,envmap_vertex:hd,fog_vertex:ud,fog_pars_vertex:dd,fog_fragment:fd,fog_pars_fragment:pd,gradientmap_pars_fragment:md,lightmap_pars_fragment:gd,lights_lambert_fragment:_d,lights_lambert_pars_fragment:vd,lights_pars_begin:xd,lights_toon_fragment:Sd,lights_toon_pars_fragment:yd,lights_phong_fragment:Ed,lights_phong_pars_fragment:bd,lights_physical_fragment:Td,lights_physical_pars_fragment:wd,lights_fragment_begin:Ad,lights_fragment_maps:Rd,lights_fragment_end:Cd,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Id,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Ld,map_fragment:Ud,map_pars_fragment:Nd,map_particle_fragment:Fd,map_particle_pars_fragment:Od,metalnessmap_fragment:Bd,metalnessmap_pars_fragment:zd,morphinstance_vertex:kd,morphcolor_vertex:Hd,morphnormal_vertex:Vd,morphtarget_pars_vertex:Gd,morphtarget_vertex:Wd,normal_fragment_begin:Xd,normal_fragment_maps:qd,normal_pars_fragment:Yd,normal_pars_vertex:jd,normal_vertex:Kd,normalmap_pars_fragment:$d,clearcoat_normal_fragment_begin:Zd,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:Qd,iridescence_pars_fragment:tf,opaque_fragment:ef,packing:nf,premultiplied_alpha_fragment:sf,project_vertex:rf,dithering_fragment:af,dithering_pars_fragment:of,roughnessmap_fragment:lf,roughnessmap_pars_fragment:cf,shadowmap_pars_fragment:hf,shadowmap_pars_vertex:uf,shadowmap_vertex:df,shadowmask_pars_fragment:ff,skinbase_vertex:pf,skinning_pars_vertex:mf,skinning_vertex:gf,skinnormal_vertex:_f,specularmap_fragment:vf,specularmap_pars_fragment:xf,tonemapping_fragment:Mf,tonemapping_pars_fragment:Sf,transmission_fragment:yf,transmission_pars_fragment:Ef,uv_pars_fragment:bf,uv_pars_vertex:Tf,uv_vertex:wf,worldpos_vertex:Af,background_vert:Rf,background_frag:Cf,backgroundCube_vert:Pf,backgroundCube_frag:If,cube_vert:Df,cube_frag:Lf,depth_vert:Uf,depth_frag:Nf,distanceRGBA_vert:Ff,distanceRGBA_frag:Of,equirect_vert:Bf,equirect_frag:zf,linedashed_vert:kf,linedashed_frag:Hf,meshbasic_vert:Vf,meshbasic_frag:Gf,meshlambert_vert:Wf,meshlambert_frag:Xf,meshmatcap_vert:qf,meshmatcap_frag:Yf,meshnormal_vert:jf,meshnormal_frag:Kf,meshphong_vert:$f,meshphong_frag:Zf,meshphysical_vert:Jf,meshphysical_frag:Qf,meshtoon_vert:tp,meshtoon_frag:ep,points_vert:np,points_frag:ip,shadow_vert:sp,shadow_frag:rp,sprite_vert:ap,sprite_frag:op},at={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},fn={basic:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Nt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ke([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ke([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Nt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ke([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ke([at.points,at.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ke([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ke([at.common,at.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ke([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ke([at.sprite,at.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:ke([at.common,at.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:ke([at.lights,at.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};fn.physical={uniforms:ke([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Zs={r:0,b:0,g:0},Qn=new vn,lp=new le;function cp(i,t,e,n,s,r,a){const o=new Nt(0);let l=r===!0?0:1,c,u,d=null,h=0,f=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function v(b){let y=!1;const R=g(b);R===null?p(o,l):R&&R.isColor&&(p(R,1),y=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,y){const R=g(y);R&&(R.isCubeTexture||R.mapping===mr)?(u===void 0&&(u=new te(new qn(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Gi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qn.copy(y.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lp.makeRotationFromEuler(Qn)),u.material.toneMapped=qt.getTransfer(R.colorSpace)!==Jt,(d!==R||h!==R.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=R,h=R.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new te(new Rn(2,2),new Ve({name:"BackgroundMaterial",uniforms:Gi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=qt.getTransfer(R.colorSpace)!==Jt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||h!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=R,h=R.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(Zs,gc(i)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,y,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:v,addToRenderList:m,dispose:w}}function hp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(M,P,O,k,q){let W=!1;const X=d(k,O,P);r!==X&&(r=X,c(r.object)),W=f(M,k,O,q),W&&g(M,k,O,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(M,P,O,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,P,O){const k=O.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let W=q[P.id];W===void 0&&(W={},q[P.id]=W);let X=W[k];return X===void 0&&(X=h(l()),W[k]=X),X}function h(M){const P=[],O=[],k=[];for(let q=0;q<e;q++)P[q]=0,O[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,P,O,k){const q=r.attributes,W=P.attributes;let X=0;const $=O.getAttributes();for(const H in $)if($[H].location>=0){const ut=q[H];let Tt=W[H];if(Tt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Tt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Tt=M.instanceColor)),ut===void 0||ut.attribute!==Tt||Tt&&ut.data!==Tt.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(M,P,O,k){const q={},W=P.attributes;let X=0;const $=O.getAttributes();for(const H in $)if($[H].location>=0){let ut=W[H];ut===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));const Tt={};Tt.attribute=ut,ut&&ut.data&&(Tt.data=ut.data),q[H]=Tt,X++}r.attributes=q,r.attributesNum=X,r.index=k}function v(){const M=r.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const O=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;O[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),q[M]!==P&&(i.vertexAttribDivisor(M,P),q[M]=P)}function w(){const M=r.newAttributes,P=r.enabledAttributes;for(let O=0,k=P.length;O<k;O++)P[O]!==M[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function b(M,P,O,k,q,W,X){X===!0?i.vertexAttribIPointer(M,P,O,q,W):i.vertexAttribPointer(M,P,O,k,q,W)}function y(M,P,O,k){v();const q=k.attributes,W=O.getAttributes(),X=P.defaultAttributeValues;for(const $ in W){const H=W[$];if(H.location>=0){let ot=q[$];if(ot===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){const ut=ot.normalized,Tt=ot.itemSize,Ht=t.get(ot);if(Ht===void 0)continue;const se=Ht.buffer,ce=Ht.type,Kt=Ht.bytesPerElement,Y=ce===i.INT||ce===i.UNSIGNED_INT||ot.gpuType===no;if(ot.isInterleavedBufferAttribute){const Z=ot.data,pt=Z.stride,Dt=ot.offset;if(Z.isInstancedInterleavedBuffer){for(let bt=0;bt<H.locationSize;bt++)p(H.location+bt,Z.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let bt=0;bt<H.locationSize;bt++)m(H.location+bt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let bt=0;bt<H.locationSize;bt++)b(H.location+bt,Tt/H.locationSize,ce,ut,pt*Kt,(Dt+Tt/H.locationSize*bt)*Kt,Y)}else{if(ot.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)p(H.location+Z,ot.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z);i.bindBuffer(i.ARRAY_BUFFER,se);for(let Z=0;Z<H.locationSize;Z++)b(H.location+Z,Tt/H.locationSize,ce,ut,Tt*Kt,Tt/H.locationSize*Z*Kt,Y)}}else if(X!==void 0){const ut=X[$];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(H.location,ut);break;case 3:i.vertexAttrib3fv(H.location,ut);break;case 4:i.vertexAttrib4fv(H.location,ut);break;default:i.vertexAttrib1fv(H.location,ut)}}}}w()}function R(){N();for(const M in n){const P=n[M];for(const O in P){const k=P[O];for(const q in k)u(k[q].object),delete k[q];delete P[O]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const O in P){const k=P[O];for(const q in k)u(k[q].object),delete k[q];delete P[O]}delete n[M.id]}function C(M){for(const P in n){const O=n[P];if(O[M.id]===void 0)continue;const k=O[M.id];for(const q in k)u(k[q].object),delete k[q];delete O[M.id]}}function N(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function up(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==ln&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const N=C===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==_n&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==An&&!N)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function fp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ni,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const w=r?0:n,b=w*4;let y=p.clippingState||null;l.value=y,y=u(g,h,b,f);for(let R=0;R!==b;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=f;b!==v;++b,y+=4)a.copy(d[b]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function pp(i){let t=new WeakMap;function e(a,o){return o===_a?a.mapping=ki:o===va&&(a.mapping=Hi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===_a||o===va)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new cu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ni=4,fl=[.125,.215,.35,.446,.526,.582],ri=20,Qr=new yo,pl=new Nt;let ta=null,ea=0,na=0,ia=!1;const ii=(1+Math.sqrt(5))/2,Li=1/ii,ml=[new D(-ii,Li,0),new D(ii,Li,0),new D(-Li,0,ii),new D(Li,0,ii),new D(0,ii,-Li),new D(0,ii,Li),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],mp=new D;class gl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=mp}=r;ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,na),this._renderer.xr.enabled=ia,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:In,format:ln,colorSpace:Vi,depthBuffer:!1},s=_l(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gp(r)),this._blurMaterial=_p(r,t,e)}return s}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,n,s,r){const l=new He(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(pl),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new Es({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),m=new te(new qn,v);let p=!1;const w=t.background;w?w.isColor&&(v.color.copy(w),t.background=null,p=!0):(v.color.copy(pl),p=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const R=this._cubeSize;Js(s,y*R,b>2?R:0,R,R),d.setRenderTarget(s),p&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ki||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ml[(s-r-1)%ml.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new te(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ri-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ri;m>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const p=[];let w=0;for(let C=0;C<ri;++C){const N=C/v,S=Math.exp(-N*N/2);p.push(S),C===0?w+=S:C<m&&(w+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const y=this._sizeLods[s],R=3*y*(s>b-Ni?s-b+Ni:0),A=4*(this._cubeSize-y);Js(e,R,A,3*y,2*y),l.setRenderTarget(e),l.render(d,Qr)}}function gp(i){const t=[],e=[],n=[];let s=i;const r=i-Ni+1+fl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ni?l=fl[a-i+Ni-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*f),b=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,N=A>2?0:-1,S=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];w.set(S,v*g*A),b.set(h,m*g*A);const M=[A,A,A,A,A,A];y.set(M,p*g*A)}const R=new De;R.setAttribute("position",new nn(w,v)),R.setAttribute("uv",new nn(b,m)),R.setAttribute("faceIndex",new nn(y,p)),t.push(R),s>Ni&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _l(i,t,e){const n=new hn(i,t,e);return n.texture.mapping=mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _p(i,t,e){const n=new Float32Array(ri),s=new D(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function vl(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function xl(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function bo(){return`

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
	`}function vp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===_a||l===va,u=l===ki||l===Hi;if(c||u){let d=t.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new gl(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new gl(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function xp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mp(i,t,e,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let b=0,y=w.length;b<y;b+=3){const R=w[b+0],A=w[b+1],C=w[b+2];h.push(R,A,A,C,C,R)}}else if(g!==void 0){const w=g.array;v=g.version;for(let b=0,y=w.length/3-1;b<y;b+=3){const R=b+0,A=b+1,C=b+2;h.push(R,A,A,C,C,R)}}else return;const m=new(uc(h)?mc:pc)(h,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Sp(i,t,e){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*a),e.update(f,n,1)}function c(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*a,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(h,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*v[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function yp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ep(i,t,e){const n=new WeakMap,s=new ne;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let M=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let R=o.attributes.position.count*y,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*A*4*d),N=new dc(C,R,A,d);N.type=An,N.needsUpdate=!0;const S=y*4;for(let P=0;P<d;P++){const O=p[P],k=w[P],q=b[P],W=R*A*4*P;for(let X=0;X<O.count;X++){const $=X*S;g===!0&&(s.fromBufferAttribute(O,X),C[W+$+0]=s.x,C[W+$+1]=s.y,C[W+$+2]=s.z,C[W+$+3]=0),v===!0&&(s.fromBufferAttribute(k,X),C[W+$+4]=s.x,C[W+$+5]=s.y,C[W+$+6]=s.z,C[W+$+7]=0),m===!0&&(s.fromBufferAttribute(q,X),C[W+$+8]=s.x,C[W+$+9]=s.y,C[W+$+10]=s.z,C[W+$+11]=q.itemSize===4?s.w:1)}}h={count:d,texture:N,size:new yt(R,A)},n.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function bp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const wc=new Oe,Ml=new Sc(1,1),Ac=new dc,Rc=new Yh,Cc=new vc,Sl=[],yl=[],El=new Float32Array(16),bl=new Float32Array(9),Tl=new Float32Array(4);function $i(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Sl[s];if(r===void 0&&(r=new Float32Array(s),Sl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Mr(i,t){let e=yl[t];e===void 0&&(e=new Int32Array(t),yl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Cp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;Tl.set(n),i.uniformMatrix2fv(this.addr,!1,Tl),Ae(e,n)}}function Pp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;bl.set(n),i.uniformMatrix3fv(this.addr,!1,bl),Ae(e,n)}}function Ip(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;El.set(n),i.uniformMatrix4fv(this.addr,!1,El),Ae(e,n)}}function Dp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Fp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function kp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ml.compareFunction=hc,r=Ml):r=wc,e.setTexture2D(t||r,s)}function Hp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rc,s)}function Vp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Cc,s)}function Gp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ac,s)}function Wp(i){switch(i){case 5126:return Tp;case 35664:return wp;case 35665:return Ap;case 35666:return Rp;case 35674:return Cp;case 35675:return Pp;case 35676:return Ip;case 5124:case 35670:return Dp;case 35667:case 35671:return Lp;case 35668:case 35672:return Up;case 35669:case 35673:return Np;case 5125:return Fp;case 36294:return Op;case 36295:return Bp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Gp}}function Xp(i,t){i.uniform1fv(this.addr,t)}function qp(i,t){const e=$i(t,this.size,2);i.uniform2fv(this.addr,e)}function Yp(i,t){const e=$i(t,this.size,3);i.uniform3fv(this.addr,e)}function jp(i,t){const e=$i(t,this.size,4);i.uniform4fv(this.addr,e)}function Kp(i,t){const e=$i(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $p(i,t){const e=$i(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Zp(i,t){const e=$i(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jp(i,t){i.uniform1iv(this.addr,t)}function Qp(i,t){i.uniform2iv(this.addr,t)}function tm(i,t){i.uniform3iv(this.addr,t)}function em(i,t){i.uniform4iv(this.addr,t)}function nm(i,t){i.uniform1uiv(this.addr,t)}function im(i,t){i.uniform2uiv(this.addr,t)}function sm(i,t){i.uniform3uiv(this.addr,t)}function rm(i,t){i.uniform4uiv(this.addr,t)}function am(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||wc,r[a])}function om(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rc,r[a])}function lm(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Cc,r[a])}function cm(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ac,r[a])}function hm(i){switch(i){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return jp;case 35674:return Kp;case 35675:return $p;case 35676:return Zp;case 5124:case 35670:return Jp;case 35667:case 35671:return Qp;case 35668:case 35672:return tm;case 35669:case 35673:return em;case 5125:return nm;case 36294:return im;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}class um{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wp(e.type)}}class dm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hm(e.type)}}class fm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function wl(i,t){i.seq.push(t),i.map[t.id]=t}function pm(i,t,e){const n=i.name,s=n.length;for(sa.lastIndex=0;;){const r=sa.exec(n),a=sa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){wl(e,c===void 0?new um(o,i,t):new dm(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new fm(o),wl(e,d)),e=d}}}class rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);pm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Al(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const mm=37297;let gm=0;function _m(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Rl=new Ot;function vm(i){qt._getMatrix(Rl,qt.workingColorSpace,i);const t=`mat3( ${Rl.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case lr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+_m(i.getShaderSource(t),o)}else return r}function xm(i,t){const e=vm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Mm(i,t){let e;switch(t){case jl:e="Linear";break;case Kl:e="Reinhard";break;case $l:e="Cineon";break;case eo:e="ACESFilmic";break;case Jl:e="AgX";break;case Ql:e="Neutral";break;case Zl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qs=new D;function Sm(){qt.getLuminanceCoefficients(Qs);const i=Qs.x.toFixed(4),t=Qs.y.toFixed(4),e=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function Em(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function hs(i){return i!==""}function Pl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Il(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(i){return i.replace(Tm,Am)}const wm=new Map;function Am(i,t){let e=zt[t];if(e===void 0){const n=wm.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Za(e)}const Rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dl(i){return i.replace(Rm,Cm)}function Cm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ll(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Pm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Im(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case Hi:t="ENVMAP_TYPE_CUBE";break;case mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Hi&&(t="ENVMAP_MODE_REFRACTION"),t}function Lm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yl:t="ENVMAP_BLENDING_MULTIPLY";break;case uh:t="ENVMAP_BLENDING_MIX";break;case dh:t="ENVMAP_BLENDING_ADD";break}return t}function Um(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Nm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Pm(e),c=Im(e),u=Dm(e),d=Lm(e),h=Um(e),f=ym(e),g=Em(r),v=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hs).join(`
`),p.length>0&&(p+=`
`)):(m=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),p=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?Mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,xm("linearToOutputTexel",e.outputColorSpace),Sm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),a=Za(a),a=Pl(a,e),a=Il(a,e),o=Za(o),o=Pl(o,e),o=Il(o,e),a=Dl(a),o=Dl(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+m+a,y=w+p+o,R=Al(s,s.VERTEX_SHADER,b),A=Al(s,s.FRAGMENT_SHADER,y);s.attachShader(v,R),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(P){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(R)||"",q=s.getShaderInfoLog(A)||"",W=O.trim(),X=k.trim(),$=q.trim();let H=!0,ot=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,A);else{const ut=Cl(s,R,"vertex"),Tt=Cl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ut+`
`+Tt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||$==="")&&(ot=!1);ot&&(P.diagnostics={runnable:H,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(R),s.deleteShader(A),N=new rr(s,v),S=bm(s,v)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,mm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let Fm=0;class Om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bm(t),e.set(t,n)),n}}class Bm{constructor(t){this.id=Fm++,this.code=t,this.usedTimes=0}}function zm(i,t,e,n,s,r,a){const o=new uo,l=new Om,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,O,k){const q=O.fog,W=k.geometry,X=S.isMeshStandardMaterial?O.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),H=$&&$.mapping===mr?$.image.height:null,ot=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tt=ut!==void 0?ut.length:0;let Ht=0;W.morphAttributes.position!==void 0&&(Ht=1),W.morphAttributes.normal!==void 0&&(Ht=2),W.morphAttributes.color!==void 0&&(Ht=3);let se,ce,Kt,Y;if(ot){const $t=fn[ot];se=$t.vertexShader,ce=$t.fragmentShader}else se=S.vertexShader,ce=S.fragmentShader,l.update(S),Kt=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);const Z=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Dt=k.isInstancedMesh===!0,bt=k.isBatchedMesh===!0,Wt=!!S.map,Ue=!!S.matcap,T=!!$,he=!!S.aoMap,Ut=!!S.lightMap,Pt=!!S.bumpMap,_t=!!S.normalMap,ue=!!S.displacementMap,vt=!!S.emissiveMap,Bt=!!S.metalnessMap,Re=!!S.roughnessMap,xe=S.anisotropy>0,E=S.clearcoat>0,_=S.dispersion>0,F=S.iridescence>0,G=S.sheen>0,K=S.transmission>0,V=xe&&!!S.anisotropyMap,Et=E&&!!S.clearcoatMap,it=E&&!!S.clearcoatNormalMap,xt=E&&!!S.clearcoatRoughnessMap,Mt=F&&!!S.iridescenceMap,tt=F&&!!S.iridescenceThicknessMap,ht=G&&!!S.sheenColorMap,Ct=G&&!!S.sheenRoughnessMap,St=!!S.specularMap,lt=!!S.specularColorMap,Ft=!!S.specularIntensityMap,I=K&&!!S.transmissionMap,et=K&&!!S.thicknessMap,st=!!S.gradientMap,ft=!!S.alphaMap,J=S.alphaTest>0,j=!!S.alphaHash,gt=!!S.extensions;let Lt=Gn;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Lt=i.toneMapping);const re={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:ce,defines:S.defines,customVertexShaderID:Kt,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:bt,batchingColor:bt&&k._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&k.instanceColor!==null,instancingMorph:Dt&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Vi,alphaToCoverage:!!S.alphaToCoverage,map:Wt,matcap:Ue,envMap:T,envMapMode:T&&$.mapping,envMapCubeUVHeight:H,aoMap:he,lightMap:Ut,bumpMap:Pt,normalMap:_t,displacementMap:h&&ue,emissiveMap:vt,normalMapObjectSpace:_t&&S.normalMapType===gh,normalMapTangentSpace:_t&&S.normalMapType===cc,metalnessMap:Bt,roughnessMap:Re,anisotropy:xe,anisotropyMap:V,clearcoat:E,clearcoatMap:Et,clearcoatNormalMap:it,clearcoatRoughnessMap:xt,dispersion:_,iridescence:F,iridescenceMap:Mt,iridescenceThicknessMap:tt,sheen:G,sheenColorMap:ht,sheenRoughnessMap:Ct,specularMap:St,specularColorMap:lt,specularIntensityMap:Ft,transmission:K,transmissionMap:I,thicknessMap:et,gradientMap:st,opaque:S.transparent===!1&&S.blending===Oi&&S.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:j,combine:S.combine,mapUv:Wt&&v(S.map.channel),aoMapUv:he&&v(S.aoMap.channel),lightMapUv:Ut&&v(S.lightMap.channel),bumpMapUv:Pt&&v(S.bumpMap.channel),normalMapUv:_t&&v(S.normalMap.channel),displacementMapUv:ue&&v(S.displacementMap.channel),emissiveMapUv:vt&&v(S.emissiveMap.channel),metalnessMapUv:Bt&&v(S.metalnessMap.channel),roughnessMapUv:Re&&v(S.roughnessMap.channel),anisotropyMapUv:V&&v(S.anisotropyMap.channel),clearcoatMapUv:Et&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&v(S.sheenRoughnessMap.channel),specularMapUv:St&&v(S.specularMap.channel),specularColorMapUv:lt&&v(S.specularColorMap.channel),specularIntensityMapUv:Ft&&v(S.specularIntensityMap.channel),transmissionMapUv:I&&v(S.transmissionMap.channel),thicknessMapUv:et&&v(S.thicknessMap.channel),alphaMapUv:ft&&v(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(_t||xe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Wt||ft),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ht,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Wt&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===Jt,decodeVideoTextureEmissive:vt&&S.emissiveMap.isVideoTexture===!0&&qt.getTransfer(S.emissiveMap.colorSpace)===Jt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===We,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:gt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&S.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(w(M,S),b(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const M=g[S.type];let P;if(M){const O=fn[M];P=Ss.clone(O.uniforms)}else P=S.uniforms;return P}function R(S,M){let P;for(let O=0,k=u.length;O<k;O++){const q=u[O];if(q.cacheKey===M){P=q,++P.usedTimes;break}}return P===void 0&&(P=new Nm(i,M,S,r),u.push(P)),P}function A(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:N}}function km(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ul(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,h,f,g,v,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function o(d,h,f,g,v,m){const p=a(d,h,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,h,f,g,v,m){const p=a(d,h,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,h){e.length>1&&e.sort(d||Hm),n.length>1&&n.sort(h||Ul),s.length>1&&s.sort(h||Ul)}function u(){for(let d=t,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Vm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Nl,i.set(n,[a])):s>=r.length?(a=new Nl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Nt};break;case"SpotLight":e={position:new D,direction:new D,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Wm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Xm=0;function qm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ym(i){const t=new Gm,e=Wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new le,a=new le;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,w=0,b=0,y=0,R=0,A=0,C=0;c.sort(qm);for(let S=0,M=c.length;S<M;S++){const P=c[S],O=P.color,k=P.intensity,q=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*k,d+=O.g*k,h+=O.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],k);C++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=P.shadow.matrix,w++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(k),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[v]=X;const $=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,$.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[v]=$.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=W,y++}v++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(O).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==w||N.numPointShadows!==b||N.numSpotShadows!==y||N.numSpotMaps!==R||N.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,N.directionalLength=f,N.pointLength=g,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=w,N.numPointShadows=b,N.numSpotShadows=y,N.numSpotMaps=R,N.numLightProbes=C,n.version=Xm++)}function l(c,u){let d=0,h=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const b=c[p];if(b.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(b.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Fl(i){const t=new Ym(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function jm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Fl(i),t.set(s,[o])):r>=a.length?(o=new Fl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$m=`uniform sampler2D shadow_pass;
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
}`;function Zm(i,t,e){let n=new mo;const s=new yt,r=new yt,a=new ne,o=new gu({depthPacking:mh}),l=new _u,c={},u=e.maxTextureSize,d={[Xn]:We,[We]:Xn,[tn]:tn},h=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Km,fragmentShader:$m}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new te(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let p=this.type;this.render=function(A,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Pn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=p!==wn&&this.type===wn,q=p===wn&&this.type!==wn;for(let W=0,X=A.length;W<X;W++){const $=A[W],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ot=H.getFrameExtents();if(s.multiply(ot),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,H.mapSize.y=r.y)),H.map===null||k===!0||q===!0){const Tt=this.type!==wn?{minFilter:cn,magFilter:cn}:{};H.map!==null&&H.map.dispose(),H.map=new hn(s.x,s.y,Tt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ut=H.getViewportCount();for(let Tt=0;Tt<ut;Tt++){const Ht=H.getViewport(Tt);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),O.viewport(a),H.updateMatrices($,Tt),n=H.getFrustum(),y(C,N,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===wn&&w(H,N),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,P)};function w(A,C){const N=t.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hn(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,N,h,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,N,f,v,null)}function b(A,C,N,S){let M=null;const P=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=N.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=M.uuid,k=C.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let W=q[k];W===void 0&&(W=M.clone(),q[k]=W,C.addEventListener("dispose",R)),M=W}if(M.visible=C.visible,M.wireframe=C.wireframe,S===wn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=N}return M}function y(A,C,N,S,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===wn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const k=t.update(A),q=A.material;if(Array.isArray(q)){const W=k.groups;for(let X=0,$=W.length;X<$;X++){const H=W[X],ot=q[H.materialIndex];if(ot&&ot.visible){const ut=b(A,ot,S,M);A.onBeforeShadow(i,A,C,N,k,ut,H),i.renderBufferDirect(N,null,k,ut,A,H),A.onAfterShadow(i,A,C,N,k,ut,H)}}}else if(q.visible){const W=b(A,q,S,M);A.onBeforeShadow(i,A,C,N,k,W,null),i.renderBufferDirect(N,null,k,W,A,null),A.onAfterShadow(i,A,C,N,k,W,null)}}const O=A.children;for(let k=0,q=O.length;k<q;k++)y(O[k],C,N,S,M)}function R(A){A.target.removeEventListener("dispose",R);for(const N in c){const S=c[N],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Jm={[ha]:ua,[da]:ma,[fa]:ga,[zi]:pa,[ua]:ha,[ma]:da,[ga]:fa,[pa]:zi};function Qm(i,t){function e(){let I=!1;const et=new ne;let st=null;const ft=new ne(0,0,0,0);return{setMask:function(J){st!==J&&!I&&(i.colorMask(J,J,J,J),st=J)},setLocked:function(J){I=J},setClear:function(J,j,gt,Lt,re){re===!0&&(J*=Lt,j*=Lt,gt*=Lt),et.set(J,j,gt,Lt),ft.equals(et)===!1&&(i.clearColor(J,j,gt,Lt),ft.copy(et))},reset:function(){I=!1,st=null,ft.set(-1,0,0,0)}}}function n(){let I=!1,et=!1,st=null,ft=null,J=null;return{setReversed:function(j){if(et!==j){const gt=t.get("EXT_clip_control");j?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),et=j;const Lt=J;J=null,this.setClear(Lt)}},getReversed:function(){return et},setTest:function(j){j?Z(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(j){st!==j&&!I&&(i.depthMask(j),st=j)},setFunc:function(j){if(et&&(j=Jm[j]),ft!==j){switch(j){case ha:i.depthFunc(i.NEVER);break;case ua:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case pa:i.depthFunc(i.GEQUAL);break;case ma:i.depthFunc(i.GREATER);break;case ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=j}},setLocked:function(j){I=j},setClear:function(j){J!==j&&(et&&(j=1-j),i.clearDepth(j),J=j)},reset:function(){I=!1,st=null,ft=null,J=null,et=!1}}}function s(){let I=!1,et=null,st=null,ft=null,J=null,j=null,gt=null,Lt=null,re=null;return{setTest:function($t){I||($t?Z(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function($t){et!==$t&&!I&&(i.stencilMask($t),et=$t)},setFunc:function($t,xn,un){(st!==$t||ft!==xn||J!==un)&&(i.stencilFunc($t,xn,un),st=$t,ft=xn,J=un)},setOp:function($t,xn,un){(j!==$t||gt!==xn||Lt!==un)&&(i.stencilOp($t,xn,un),j=$t,gt=xn,Lt=un)},setLocked:function($t){I=$t},setClear:function($t){re!==$t&&(i.clearStencil($t),re=$t)},reset:function(){I=!1,et=null,st=null,ft=null,J=null,j=null,gt=null,Lt=null,re=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,b=null,y=null,R=null,A=null,C=new Nt(0,0,0),N=0,S=!1,M=null,P=null,O=null,k=null,q=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=$>=2);let ot=null,ut={};const Tt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),se=new ne().fromArray(Tt),ce=new ne().fromArray(Ht);function Kt(I,et,st,ft){const J=new Uint8Array(4),j=i.createTexture();i.bindTexture(I,j),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<st;gt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(et+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return j}const Y={};Y[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(zi),Pt(!1),_t(Uo),Z(i.CULL_FACE),he(Pn);function Z(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function pt(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Dt(I,et){return d[I]!==et?(i.bindFramebuffer(I,et),d[I]=et,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=et),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=et),!0):!1}function bt(I,et){let st=f,ft=!1;if(I){st=h.get(et),st===void 0&&(st=[],h.set(et,st));const J=I.textures;if(st.length!==J.length||st[0]!==i.COLOR_ATTACHMENT0){for(let j=0,gt=J.length;j<gt;j++)st[j]=i.COLOR_ATTACHMENT0+j;st.length=J.length,ft=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,ft=!0);ft&&i.drawBuffers(st)}function Wt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Ue={[si]:i.FUNC_ADD,[jc]:i.FUNC_SUBTRACT,[Kc]:i.FUNC_REVERSE_SUBTRACT};Ue[$c]=i.MIN,Ue[Zc]=i.MAX;const T={[Jc]:i.ZERO,[Qc]:i.ONE,[th]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[ah]:i.SRC_ALPHA_SATURATE,[sh]:i.DST_COLOR,[nh]:i.DST_ALPHA,[eh]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[rh]:i.ONE_MINUS_DST_COLOR,[ih]:i.ONE_MINUS_DST_ALPHA,[oh]:i.CONSTANT_COLOR,[lh]:i.ONE_MINUS_CONSTANT_COLOR,[ch]:i.CONSTANT_ALPHA,[hh]:i.ONE_MINUS_CONSTANT_ALPHA};function he(I,et,st,ft,J,j,gt,Lt,re,$t){if(I===Pn){v===!0&&(pt(i.BLEND),v=!1);return}if(v===!1&&(Z(i.BLEND),v=!0),I!==Yc){if(I!==m||$t!==S){if((p!==si||y!==si)&&(i.blendEquation(i.FUNC_ADD),p=si,y=si),$t)switch(I){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFunc(i.ONE,i.ONE);break;case No:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case No:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,b=null,R=null,A=null,C.set(0,0,0),N=0,m=I,S=$t}return}J=J||et,j=j||st,gt=gt||ft,(et!==p||J!==y)&&(i.blendEquationSeparate(Ue[et],Ue[J]),p=et,y=J),(st!==w||ft!==b||j!==R||gt!==A)&&(i.blendFuncSeparate(T[st],T[ft],T[j],T[gt]),w=st,b=ft,R=j,A=gt),(Lt.equals(C)===!1||re!==N)&&(i.blendColor(Lt.r,Lt.g,Lt.b,re),C.copy(Lt),N=re),m=I,S=!1}function Ut(I,et){I.side===tn?pt(i.CULL_FACE):Z(i.CULL_FACE);let st=I.side===We;et&&(st=!st),Pt(st),I.blending===Oi&&I.transparent===!1?he(Pn):he(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ft=I.stencilWrite;o.setTest(ft),ft&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function _t(I){I!==Wc?(Z(i.CULL_FACE),I!==P&&(I===Uo?i.cullFace(i.BACK):I===Xc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),P=I}function ue(I){I!==O&&(X&&i.lineWidth(I),O=I)}function vt(I,et,st){I?(Z(i.POLYGON_OFFSET_FILL),(k!==et||q!==st)&&(i.polygonOffset(et,st),k=et,q=st)):pt(i.POLYGON_OFFSET_FILL)}function Bt(I){I?Z(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function Re(I){I===void 0&&(I=i.TEXTURE0+W-1),ot!==I&&(i.activeTexture(I),ot=I)}function xe(I,et,st){st===void 0&&(ot===null?st=i.TEXTURE0+W-1:st=ot);let ft=ut[st];ft===void 0&&(ft={type:void 0,texture:void 0},ut[st]=ft),(ft.type!==I||ft.texture!==et)&&(ot!==st&&(i.activeTexture(st),ot=st),i.bindTexture(I,et||Y[I]),ft.type=I,ft.texture=et)}function E(){const I=ut[ot];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(I){se.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),se.copy(I))}function Ct(I){ce.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ce.copy(I))}function St(I,et){let st=c.get(et);st===void 0&&(st=new WeakMap,c.set(et,st));let ft=st.get(I);ft===void 0&&(ft=i.getUniformBlockIndex(et,I.name),st.set(I,ft))}function lt(I,et){const ft=c.get(et).get(I);l.get(et)!==ft&&(i.uniformBlockBinding(et,ft,I.__bindingPointIndex),l.set(et,ft))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ot=null,ut={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,b=null,y=null,R=null,A=null,C=new Nt(0,0,0),N=0,S=!1,M=null,P=null,O=null,k=null,q=null,se.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:pt,bindFramebuffer:Dt,drawBuffers:bt,useProgram:Wt,setBlending:he,setMaterial:Ut,setFlipSided:Pt,setCullFace:_t,setLineWidth:ue,setPolygonOffset:vt,setScissorTest:Bt,activeTexture:Re,bindTexture:xe,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Mt,texImage3D:tt,updateUBOMapping:St,uniformBlockBinding:lt,texStorage2D:it,texStorage3D:xt,texSubImage2D:G,texSubImage3D:K,compressedTexSubImage2D:V,compressedTexSubImage3D:Et,scissor:ht,viewport:Ct,reset:Ft}}function t0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return f?new OffscreenCanvas(E,_):xs("canvas")}function v(E,_,F){let G=1;const K=xe(E);if((K.width>F||K.height>F)&&(G=F/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const V=Math.floor(G*K.width),Et=Math.floor(G*K.height);d===void 0&&(d=g(V,Et));const it=_?g(V,Et):d;return it.width=V,it.height=Et,it.getContext("2d").drawImage(E,0,0,V,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+Et+")."),it}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,_,F,G,K=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let V=_;if(_===i.RED&&(F===i.FLOAT&&(V=i.R32F),F===i.HALF_FLOAT&&(V=i.R16F),F===i.UNSIGNED_BYTE&&(V=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.R8UI),F===i.UNSIGNED_SHORT&&(V=i.R16UI),F===i.UNSIGNED_INT&&(V=i.R32UI),F===i.BYTE&&(V=i.R8I),F===i.SHORT&&(V=i.R16I),F===i.INT&&(V=i.R32I)),_===i.RG&&(F===i.FLOAT&&(V=i.RG32F),F===i.HALF_FLOAT&&(V=i.RG16F),F===i.UNSIGNED_BYTE&&(V=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RG8UI),F===i.UNSIGNED_SHORT&&(V=i.RG16UI),F===i.UNSIGNED_INT&&(V=i.RG32UI),F===i.BYTE&&(V=i.RG8I),F===i.SHORT&&(V=i.RG16I),F===i.INT&&(V=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RGB8UI),F===i.UNSIGNED_SHORT&&(V=i.RGB16UI),F===i.UNSIGNED_INT&&(V=i.RGB32UI),F===i.BYTE&&(V=i.RGB8I),F===i.SHORT&&(V=i.RGB16I),F===i.INT&&(V=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),F===i.UNSIGNED_INT&&(V=i.RGBA32UI),F===i.BYTE&&(V=i.RGBA8I),F===i.SHORT&&(V=i.RGBA16I),F===i.INT&&(V=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),_===i.RGBA){const Et=K?lr:qt.getTransfer(G);F===i.FLOAT&&(V=i.RGBA32F),F===i.HALF_FLOAT&&(V=i.RGBA16F),F===i.UNSIGNED_BYTE&&(V=Et===Jt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function y(E,_){let F;return E?_===null||_===hi||_===ps?F=i.DEPTH24_STENCIL8:_===An?F=i.DEPTH32F_STENCIL8:_===fs&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===hi||_===ps?F=i.DEPTH_COMPONENT24:_===An?F=i.DEPTH_COMPONENT32F:_===fs&&(F=i.DEPTH_COMPONENT16),F}function R(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==cn&&E.minFilter!==pn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){const _=E.target;_.removeEventListener("dispose",A),N(_),_.isVideoTexture&&u.delete(_)}function C(E){const _=E.target;_.removeEventListener("dispose",C),M(_)}function N(E){const _=n.get(E);if(_.__webglInit===void 0)return;const F=E.source,G=h.get(F);if(G){const K=G[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(E),Object.keys(G).length===0&&h.delete(F)}n.remove(E)}function S(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const F=E.source,G=h.get(F);delete G[_.__cacheKey],a.memory.textures--}function M(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let K=0;K<_.__webglFramebuffer[G].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[G][K]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=E.textures;for(let G=0,K=F.length;G<K;G++){const V=n.get(F[G]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(F[G])}n.remove(E)}let P=0;function O(){P=0}function k(){const E=P;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),P+=1,E}function q(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function W(E,_){const F=n.get(E);if(E.isVideoTexture&&Bt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,E,_);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function X(E,_){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){Y(F,E,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function $(E,_){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){Y(F,E,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function H(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Z(F,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const ot={[or]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[xa]:i.MIRRORED_REPEAT},ut={[cn]:i.NEAREST,[fh]:i.NEAREST_MIPMAP_NEAREST,[Rs]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[wr]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},Tt={[_h]:i.NEVER,[Eh]:i.ALWAYS,[vh]:i.LESS,[hc]:i.LEQUAL,[xh]:i.EQUAL,[yh]:i.GEQUAL,[Mh]:i.GREATER,[Sh]:i.NOTEQUAL};function Ht(E,_){if(_.type===An&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===pn||_.magFilter===wr||_.magFilter===Rs||_.magFilter===li||_.minFilter===pn||_.minFilter===wr||_.minFilter===Rs||_.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ot[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ot[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ot[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ut[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ut[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Tt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===cn||_.minFilter!==Rs&&_.minFilter!==li||_.type===An&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function se(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));const G=_.source;let K=h.get(G);K===void 0&&(K={},h.set(G,K));const V=q(_);if(V!==E.__cacheKey){K[V]===void 0&&(K[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[V].usedTimes++;const Et=K[E.__cacheKey];Et!==void 0&&(K[E.__cacheKey].usedTimes--,Et.usedTimes===0&&S(_)),E.__cacheKey=V,E.__webglTexture=K[V].texture}return F}function ce(E,_,F){return Math.floor(Math.floor(E/F)/_)}function Kt(E,_,F,G){const V=E.updateRanges;if(V.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,G,_.data);else{V.sort((tt,ht)=>tt.start-ht.start);let Et=0;for(let tt=1;tt<V.length;tt++){const ht=V[Et],Ct=V[tt],St=ht.start+ht.count,lt=ce(Ct.start,_.width,4),Ft=ce(ht.start,_.width,4);Ct.start<=St+1&&lt===Ft&&ce(Ct.start+Ct.count-1,_.width,4)===lt?ht.count=Math.max(ht.count,Ct.start+Ct.count-ht.start):(++Et,V[Et]=Ct)}V.length=Et+1;const it=i.getParameter(i.UNPACK_ROW_LENGTH),xt=i.getParameter(i.UNPACK_SKIP_PIXELS),Mt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let tt=0,ht=V.length;tt<ht;tt++){const Ct=V[tt],St=Math.floor(Ct.start/4),lt=Math.ceil(Ct.count/4),Ft=St%_.width,I=Math.floor(St/_.width),et=lt,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Ft,I,et,st,F,G,_.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,it),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function Y(E,_,F){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);const K=se(E,_),V=_.source;e.bindTexture(G,E.__webglTexture,i.TEXTURE0+F);const Et=n.get(V);if(V.version!==Et.__version||K===!0){e.activeTexture(i.TEXTURE0+F);const it=qt.getPrimaries(qt.workingColorSpace),xt=_.colorSpace===Vn?null:qt.getPrimaries(_.colorSpace),Mt=_.colorSpace===Vn||it===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let tt=v(_.image,!1,s.maxTextureSize);tt=Re(_,tt);const ht=r.convert(_.format,_.colorSpace),Ct=r.convert(_.type);let St=b(_.internalFormat,ht,Ct,_.colorSpace,_.isVideoTexture);Ht(G,_);let lt;const Ft=_.mipmaps,I=_.isVideoTexture!==!0,et=Et.__version===void 0||K===!0,st=V.dataReady,ft=R(_,tt);if(_.isDepthTexture)St=y(_.format===gs,_.type),et&&(I?e.texStorage2D(i.TEXTURE_2D,1,St,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,St,tt.width,tt.height,0,ht,Ct,null));else if(_.isDataTexture)if(Ft.length>0){I&&et&&e.texStorage2D(i.TEXTURE_2D,ft,St,Ft[0].width,Ft[0].height);for(let J=0,j=Ft.length;J<j;J++)lt=Ft[J],I?st&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,lt.width,lt.height,ht,Ct,lt.data):e.texImage2D(i.TEXTURE_2D,J,St,lt.width,lt.height,0,ht,Ct,lt.data);_.generateMipmaps=!1}else I?(et&&e.texStorage2D(i.TEXTURE_2D,ft,St,tt.width,tt.height),st&&Kt(_,tt,ht,Ct)):e.texImage2D(i.TEXTURE_2D,0,St,tt.width,tt.height,0,ht,Ct,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,St,Ft[0].width,Ft[0].height,tt.depth);for(let J=0,j=Ft.length;J<j;J++)if(lt=Ft[J],_.format!==ln)if(ht!==null)if(I){if(st)if(_.layerUpdates.size>0){const gt=dl(lt.width,lt.height,_.format,_.type);for(const Lt of _.layerUpdates){const re=lt.data.subarray(Lt*gt/lt.data.BYTES_PER_ELEMENT,(Lt+1)*gt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Lt,lt.width,lt.height,1,ht,re)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,tt.depth,ht,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,St,lt.width,lt.height,tt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,tt.depth,ht,Ct,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,St,lt.width,lt.height,tt.depth,0,ht,Ct,lt.data)}else{I&&et&&e.texStorage2D(i.TEXTURE_2D,ft,St,Ft[0].width,Ft[0].height);for(let J=0,j=Ft.length;J<j;J++)lt=Ft[J],_.format!==ln?ht!==null?I?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,lt.width,lt.height,ht,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,St,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?st&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,lt.width,lt.height,ht,Ct,lt.data):e.texImage2D(i.TEXTURE_2D,J,St,lt.width,lt.height,0,ht,Ct,lt.data)}else if(_.isDataArrayTexture)if(I){if(et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,St,tt.width,tt.height,tt.depth),st)if(_.layerUpdates.size>0){const J=dl(tt.width,tt.height,_.format,_.type);for(const j of _.layerUpdates){const gt=tt.data.subarray(j*J/tt.data.BYTES_PER_ELEMENT,(j+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,ht,Ct,gt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ht,Ct,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,tt.width,tt.height,tt.depth,0,ht,Ct,tt.data);else if(_.isData3DTexture)I?(et&&e.texStorage3D(i.TEXTURE_3D,ft,St,tt.width,tt.height,tt.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ht,Ct,tt.data)):e.texImage3D(i.TEXTURE_3D,0,St,tt.width,tt.height,tt.depth,0,ht,Ct,tt.data);else if(_.isFramebufferTexture){if(et)if(I)e.texStorage2D(i.TEXTURE_2D,ft,St,tt.width,tt.height);else{let J=tt.width,j=tt.height;for(let gt=0;gt<ft;gt++)e.texImage2D(i.TEXTURE_2D,gt,St,J,j,0,ht,Ct,null),J>>=1,j>>=1}}else if(Ft.length>0){if(I&&et){const J=xe(Ft[0]);e.texStorage2D(i.TEXTURE_2D,ft,St,J.width,J.height)}for(let J=0,j=Ft.length;J<j;J++)lt=Ft[J],I?st&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ht,Ct,lt):e.texImage2D(i.TEXTURE_2D,J,St,ht,Ct,lt);_.generateMipmaps=!1}else if(I){if(et){const J=xe(tt);e.texStorage2D(i.TEXTURE_2D,ft,St,J.width,J.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Ct,tt)}else e.texImage2D(i.TEXTURE_2D,0,St,ht,Ct,tt);m(_)&&p(G),Et.__version=V.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Z(E,_,F){if(_.image.length!==6)return;const G=se(E,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const V=n.get(K);if(K.version!==V.__version||G===!0){e.activeTexture(i.TEXTURE0+F);const Et=qt.getPrimaries(qt.workingColorSpace),it=_.colorSpace===Vn?null:qt.getPrimaries(_.colorSpace),xt=_.colorSpace===Vn||Et===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Mt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,ht=[];for(let j=0;j<6;j++)!Mt&&!tt?ht[j]=v(_.image[j],!0,s.maxCubemapSize):ht[j]=tt?_.image[j].image:_.image[j],ht[j]=Re(_,ht[j]);const Ct=ht[0],St=r.convert(_.format,_.colorSpace),lt=r.convert(_.type),Ft=b(_.internalFormat,St,lt,_.colorSpace),I=_.isVideoTexture!==!0,et=V.__version===void 0||G===!0,st=K.dataReady;let ft=R(_,Ct);Ht(i.TEXTURE_CUBE_MAP,_);let J;if(Mt){I&&et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Ft,Ct.width,Ct.height);for(let j=0;j<6;j++){J=ht[j].mipmaps;for(let gt=0;gt<J.length;gt++){const Lt=J[gt];_.format!==ln?St!==null?I?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,Lt.width,Lt.height,St,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,Ft,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,Lt.width,Lt.height,St,lt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,Ft,Lt.width,Lt.height,0,St,lt,Lt.data)}}}else{if(J=_.mipmaps,I&&et){J.length>0&&ft++;const j=xe(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Ft,j.width,j.height)}for(let j=0;j<6;j++)if(tt){I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ht[j].width,ht[j].height,St,lt,ht[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ft,ht[j].width,ht[j].height,0,St,lt,ht[j].data);for(let gt=0;gt<J.length;gt++){const re=J[gt].image[j].image;I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,re.width,re.height,St,lt,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,Ft,re.width,re.height,0,St,lt,re.data)}}else{I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,St,lt,ht[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ft,St,lt,ht[j]);for(let gt=0;gt<J.length;gt++){const Lt=J[gt];I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,St,lt,Lt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,Ft,St,lt,Lt.image[j])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),V.__version=K.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function pt(E,_,F,G,K,V){const Et=r.convert(F.format,F.colorSpace),it=r.convert(F.type),xt=b(F.internalFormat,Et,it,F.colorSpace),Mt=n.get(_),tt=n.get(F);if(tt.__renderTarget=_,!Mt.__hasExternalTextures){const ht=Math.max(1,_.width>>V),Ct=Math.max(1,_.height>>V);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,V,xt,ht,Ct,_.depth,0,Et,it,null):e.texImage2D(K,V,xt,ht,Ct,0,Et,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,K,tt.__webglTexture,0,ue(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,K,tt.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(E,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const G=_.depthTexture,K=G&&G.isDepthTexture?G.type:null,V=y(_.stencilBuffer,K),Et=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=ue(_);vt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,V,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,V,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,V,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,E)}else{const G=_.textures;for(let K=0;K<G.length;K++){const V=G[K],Et=r.convert(V.format,V.colorSpace),it=r.convert(V.type),xt=b(V.internalFormat,Et,it,V.colorSpace),Mt=ue(_);F&&vt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,xt,_.width,_.height):vt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,xt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,xt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(_.depthTexture);G.__renderTarget=_,(!G.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const K=G.__webglTexture,V=ue(_);if(_.depthTexture.format===ms)vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(_.depthTexture.format===gs)vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Wt(E){const _=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=G}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const G=E.texture.mipmaps;G&&G.length>0?bt(_.__webglFramebuffer[0],E):bt(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),Dt(_.__webglDepthbuffer[G],E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}}else{const G=E.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Dt(_.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(E,_,F){const G=n.get(E);_!==void 0&&pt(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Wt(E)}function T(E){const _=E.texture,F=n.get(E),G=n.get(_);E.addEventListener("dispose",C);const K=E.textures,V=E.isWebGLCubeRenderTarget===!0,Et=K.length>1;if(Et||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,a.memory.textures++),V){F.__webglFramebuffer=[];for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[it]=[];for(let xt=0;xt<_.mipmaps.length;xt++)F.__webglFramebuffer[it][xt]=i.createFramebuffer()}else F.__webglFramebuffer[it]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let it=0;it<_.mipmaps.length;it++)F.__webglFramebuffer[it]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Et)for(let it=0,xt=K.length;it<xt;it++){const Mt=n.get(K[it]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&vt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let it=0;it<K.length;it++){const xt=K[it];F.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[it]);const Mt=r.convert(xt.format,xt.colorSpace),tt=r.convert(xt.type),ht=b(xt.internalFormat,Mt,tt,xt.colorSpace,E.isXRRenderTarget===!0),Ct=ue(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,ht,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,F.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,_);for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0)for(let xt=0;xt<_.mipmaps.length;xt++)pt(F.__webglFramebuffer[it][xt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt);else pt(F.__webglFramebuffer[it],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let it=0,xt=K.length;it<xt;it++){const Mt=K[it],tt=n.get(Mt);let ht=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ht=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,tt.__webglTexture),Ht(ht,Mt),pt(F.__webglFramebuffer,E,Mt,i.COLOR_ATTACHMENT0+it,ht,0),m(Mt)&&p(ht)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(it=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,G.__webglTexture),Ht(it,_),_.mipmaps&&_.mipmaps.length>0)for(let xt=0;xt<_.mipmaps.length;xt++)pt(F.__webglFramebuffer[xt],E,_,i.COLOR_ATTACHMENT0,it,xt);else pt(F.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,it,0);m(_)&&p(it),e.unbindTexture()}E.depthBuffer&&Wt(E)}function he(E){const _=E.textures;for(let F=0,G=_.length;F<G;F++){const K=_[F];if(m(K)){const V=w(E),Et=n.get(K).__webglTexture;e.bindTexture(V,Et),p(V),e.unbindTexture()}}}const Ut=[],Pt=[];function _t(E){if(E.samples>0){if(vt(E)===!1){const _=E.textures,F=E.width,G=E.height;let K=i.COLOR_BUFFER_BIT;const V=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(E),it=_.length>1;if(it)for(let Mt=0;Mt<_.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const xt=E.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Mt=0;Mt<_.length;Mt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Mt]);const tt=n.get(_[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,F,G,0,0,F,G,K,i.NEAREST),l===!0&&(Ut.length=0,Pt.length=0,Ut.push(i.COLOR_ATTACHMENT0+Mt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ut.push(V),Pt.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let Mt=0;Mt<_.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Mt]);const tt=n.get(_[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ue(E){return Math.min(s.maxSamples,E.samples)}function vt(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Bt(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function Re(E,_){const F=E.colorSpace,G=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Vi&&F!==Vn&&(qt.getTransfer(F)===Jt?(G!==ln||K!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function xe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Ue,this.setupRenderTarget=T,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=vt}function e0(i,t){function e(n,s=Vn){let r;const a=qt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===io)return i.UNSIGNED_SHORT_4_4_4_4;if(n===so)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ec)return i.BYTE;if(n===nc)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===no)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===rc)return i.ALPHA;if(n===ac)return i.RGB;if(n===ln)return i.RGBA;if(n===ms)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===oc)return i.RED;if(n===ro)return i.RED_INTEGER;if(n===lc)return i.RG;if(n===ao)return i.RG_INTEGER;if(n===oo)return i.RGBA_INTEGER;if(n===er||n===nr||n===ir||n===sr)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Sa||n===ya||n===Ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Ta||n===wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ba||n===Ta)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===Da||n===La||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===Va||n===Ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ha)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const n0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i0=`
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

}`;class s0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new yc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:n0,fragmentShader:i0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r0 extends Yi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new s0,p={},w=e.getContextAttributes();let b=null,y=null;const R=[],A=[],C=new yt;let N=null;const S=new He;S.viewport=new ne;const M=new He;M.viewport=new ne;const P=[S,M],O=new Tu;let k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=R[Y];return Z===void 0&&(Z=new Yr,R[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=R[Y];return Z===void 0&&(Z=new Yr,R[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=R[Y];return Z===void 0&&(Z=new Yr,R[Y]=Z),Z.getHandSpace()};function W(Y){const Z=A.indexOf(Y.inputSource);if(Z===-1)return;const pt=R[Z];pt!==void 0&&(pt.update(Y.inputSource,Y.frame,c||a),pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",$);for(let Y=0;Y<R.length;Y++){const Z=A[Y];Z!==null&&(A[Y]=null,R[Y].disconnect(Z))}k=null,q=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(b),f=null,h=null,d=null,s=null,y=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",$),w.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Dt=null,bt=null;w.depth&&(bt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=w.stencil?gs:ms,Dt=w.stencil?ps:hi);const Wt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Wt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new hn(h.textureWidth,h.textureHeight,{format:ln,type:_n,depthTexture:new Sc(h.textureWidth,h.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const pt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new hn(f.framebufferWidth,f.framebufferHeight,{format:ln,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Y){for(let Z=0;Z<Y.removed.length;Z++){const pt=Y.removed[Z],Dt=A.indexOf(pt);Dt>=0&&(A[Dt]=null,R[Dt].disconnect(pt))}for(let Z=0;Z<Y.added.length;Z++){const pt=Y.added[Z];let Dt=A.indexOf(pt);if(Dt===-1){for(let Wt=0;Wt<R.length;Wt++)if(Wt>=A.length){A.push(pt),Dt=Wt;break}else if(A[Wt]===null){A[Wt]=pt,Dt=Wt;break}if(Dt===-1)break}const bt=R[Dt];bt&&bt.connect(pt)}}const H=new D,ot=new D;function ut(Y,Z,pt){H.setFromMatrixPosition(Z.matrixWorld),ot.setFromMatrixPosition(pt.matrixWorld);const Dt=H.distanceTo(ot),bt=Z.projectionMatrix.elements,Wt=pt.projectionMatrix.elements,Ue=bt[14]/(bt[10]-1),T=bt[14]/(bt[10]+1),he=(bt[9]+1)/bt[5],Ut=(bt[9]-1)/bt[5],Pt=(bt[8]-1)/bt[0],_t=(Wt[8]+1)/Wt[0],ue=Ue*Pt,vt=Ue*_t,Bt=Dt/(-Pt+_t),Re=Bt*-Pt;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Re),Y.translateZ(Bt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const xe=Ue+Bt,E=T+Bt,_=ue-Re,F=vt+(Dt-Re),G=he*T/E*xe,K=Ut*T/E*xe;Y.projectionMatrix.makePerspective(_,F,G,K,xe,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Tt(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Z=Y.near,pt=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),O.near=M.near=S.near=Z,O.far=M.far=S.far=pt,(k!==O.near||q!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,q=O.far),O.layers.mask=Y.layers.mask|6,S.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const Dt=Y.parent,bt=O.cameras;Tt(O,Dt);for(let Wt=0;Wt<bt.length;Wt++)Tt(bt[Wt],Dt);bt.length===2?ut(O,S,M):O.projectionMatrix.copy(S.projectionMatrix),Ht(Y,O,Dt)};function Ht(Y,Z,pt){pt===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=_s*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return p[Y]};let se=null;function ce(Y,Z){if(u=Z.getViewerPose(c||a),g=Z,u!==null){const pt=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Dt=!1;pt.length!==O.cameras.length&&(O.cameras.length=0,Dt=!0);for(let T=0;T<pt.length;T++){const he=pt[T];let Ut=null;if(f!==null)Ut=f.getViewport(he);else{const _t=d.getViewSubImage(h,he);Ut=_t.viewport,T===0&&(t.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(y))}let Pt=P[T];Pt===void 0&&(Pt=new He,Pt.layers.enable(T),Pt.viewport=new ne,P[T]=Pt),Pt.matrix.fromArray(he.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(he.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),T===0&&(O.matrix.copy(Pt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Dt===!0&&O.cameras.push(Pt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const T=d.getDepthInformation(pt[0]);T&&T.isValid&&T.texture&&m.init(T,s.renderState)}if(bt&&bt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let T=0;T<pt.length;T++){const he=pt[T].camera;if(he){let Ut=p[he];Ut||(Ut=new yc,p[he]=Ut);const Pt=d.getCameraImage(he);Ut.sourceTexture=Pt}}}}for(let pt=0;pt<R.length;pt++){const Dt=A[pt],bt=R[pt];Dt!==null&&bt!==void 0&&bt.update(Dt,Z,c||a)}se&&se(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Kt=new Tc;Kt.setAnimationLoop(ce),this.setAnimationLoop=function(Y){se=Y},this.dispose=function(){}}}const ti=new vn,a0=new le;function o0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),b=w.envMap,y=w.envMapRotation;b&&(m.envMap.value=b,ti.copy(y),ti.x*=-1,ti.y*=-1,ti.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),m.envMapRotation.value.setFromMatrix4(a0.makeRotationFromEuler(ti)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const y=b.program;n.uniformBlockBinding(w,y)}function c(w,b){let y=s[w.id];y===void 0&&(g(w),y=u(w),s[w.id]=y,w.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(w,R);const A=t.render.frame;r[w.id]!==A&&(h(w),r[w.id]=A)}function u(w){const b=d();w.__bindingPointIndex=b;const y=i.createBuffer(),R=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const b=s[w.id],y=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,C=y.length;A<C;A++){const N=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,M=N.length;S<M;S++){const P=N[S];if(f(P,A,S,R)===!0){const O=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let W=0;W<k.length;W++){const X=k[W],$=v(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,O+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,b,y,R){const A=w.value,C=b+"_"+y;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const N=R[C];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return R[C]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(w){const b=w.uniforms;let y=0;const R=16;for(let C=0,N=b.length;C<N;C++){const S=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,P=S.length;M<P;M++){const O=S[M],k=Array.isArray(O.value)?O.value:[O.value];for(let q=0,W=k.length;q<W;q++){const X=k[q],$=v(X),H=y%R,ot=H%$.boundary,ut=H+ot;y+=ot,ut!==0&&R-ut<$.storage&&(y+=R-ut),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=$.storage}}}const A=y%R;return A>0&&(y+=R-A),w.__size=y,w.__cache={},this}function v(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class c0{constructor(t={}){const{canvas:e=kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const w=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let R=!1;this._outputColorSpace=Ie;let A=0,C=0,N=null,S=-1,M=null;const P=new ne,O=new ne;let k=null;const q=new Nt(0);let W=0,X=e.width,$=e.height,H=1,ot=null,ut=null;const Tt=new ne(0,0,X,$),Ht=new ne(0,0,X,$);let se=!1;const ce=new mo;let Kt=!1,Y=!1;const Z=new le,pt=new D,Dt=new ne,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Ue(){return N===null?H:1}let T=n;function he(x,L){return e.getContext(x,L)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${to}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",J,!1),T===null){const L="webgl2";if(T=he(L,x),T===null)throw he(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ut,Pt,_t,ue,vt,Bt,Re,xe,E,_,F,G,K,V,Et,it,xt,Mt,tt,ht,Ct,St,lt,Ft;function I(){Ut=new xp(T),Ut.init(),St=new e0(T,Ut),Pt=new dp(T,Ut,t,St),_t=new Qm(T,Ut),Pt.reversedDepthBuffer&&h&&_t.buffers.depth.setReversed(!0),ue=new yp(T),vt=new km,Bt=new t0(T,Ut,_t,vt,Pt,St,ue),Re=new pp(y),xe=new vp(y),E=new Au(T),lt=new hp(T,E),_=new Mp(T,E,ue,lt),F=new bp(T,_,E,ue),tt=new Ep(T,Pt,Bt),it=new fp(vt),G=new zm(y,Re,xe,Ut,Pt,lt,it),K=new o0(y,vt),V=new Vm,Et=new jm(Ut),Mt=new cp(y,Re,xe,_t,F,f,l),xt=new Zm(y,F,Pt),Ft=new l0(T,ue,Pt,_t),ht=new up(T,Ut,ue),Ct=new Sp(T,Ut,ue),ue.programs=G.programs,y.capabilities=Pt,y.extensions=Ut,y.properties=vt,y.renderLists=V,y.shadowMap=xt,y.state=_t,y.info=ue}I();const et=new r0(y,T);this.xr=et,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const x=Ut.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ut.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(X,$,!1))},this.getSize=function(x){return x.set(X,$)},this.setSize=function(x,L,B=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,$=L,e.width=Math.floor(x*H),e.height=Math.floor(L*H),B===!0&&(e.style.width=x+"px",e.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(X*H,$*H).floor()},this.setDrawingBufferSize=function(x,L,B){X=x,$=L,H=B,e.width=Math.floor(x*B),e.height=Math.floor(L*B),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(Tt)},this.setViewport=function(x,L,B,z){x.isVector4?Tt.set(x.x,x.y,x.z,x.w):Tt.set(x,L,B,z),_t.viewport(P.copy(Tt).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(Ht)},this.setScissor=function(x,L,B,z){x.isVector4?Ht.set(x.x,x.y,x.z,x.w):Ht.set(x,L,B,z),_t.scissor(O.copy(Ht).multiplyScalar(H).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(x){_t.setScissorTest(se=x)},this.setOpaqueSort=function(x){ot=x},this.setTransparentSort=function(x){ut=x},this.getClearColor=function(x){return x.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,B=!0){let z=0;if(x){let U=!1;if(N!==null){const Q=N.texture.format;U=Q===oo||Q===ao||Q===ro}if(U){const Q=N.texture.type,ct=Q===_n||Q===hi||Q===fs||Q===ps||Q===io||Q===so,mt=Mt.getClearColor(),dt=Mt.getClearAlpha(),Rt=mt.r,It=mt.g,wt=mt.b;ct?(g[0]=Rt,g[1]=It,g[2]=wt,g[3]=dt,T.clearBufferuiv(T.COLOR,0,g)):(v[0]=Rt,v[1]=It,v[2]=wt,v[3]=dt,T.clearBufferiv(T.COLOR,0,v))}else z|=T.COLOR_BUFFER_BIT}L&&(z|=T.DEPTH_BUFFER_BIT),B&&(z|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",J,!1),Mt.dispose(),V.dispose(),Et.dispose(),vt.dispose(),Re.dispose(),xe.dispose(),F.dispose(),lt.dispose(),Ft.dispose(),G.dispose(),et.dispose(),et.removeEventListener("sessionstart",un),et.removeEventListener("sessionend",Ro),Yn.stop()};function st(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const x=ue.autoReset,L=xt.enabled,B=xt.autoUpdate,z=xt.needsUpdate,U=xt.type;I(),ue.autoReset=x,xt.enabled=L,xt.autoUpdate=B,xt.needsUpdate=z,xt.type=U}function J(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function j(x){const L=x.target;L.removeEventListener("dispose",j),gt(L)}function gt(x){Lt(x),vt.remove(x)}function Lt(x){const L=vt.get(x).programs;L!==void 0&&(L.forEach(function(B){G.releaseProgram(B)}),x.isShaderMaterial&&G.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,B,z,U,Q){L===null&&(L=bt);const ct=U.isMesh&&U.matrixWorld.determinant()<0,mt=Bc(x,L,B,z,U);_t.setMaterial(z,ct);let dt=B.index,Rt=1;if(z.wireframe===!0){if(dt=_.getWireframeAttribute(B),dt===void 0)return;Rt=2}const It=B.drawRange,wt=B.attributes.position;let Vt=It.start*Rt,ee=(It.start+It.count)*Rt;Q!==null&&(Vt=Math.max(Vt,Q.start*Rt),ee=Math.min(ee,(Q.start+Q.count)*Rt)),dt!==null?(Vt=Math.max(Vt,0),ee=Math.min(ee,dt.count)):wt!=null&&(Vt=Math.max(Vt,0),ee=Math.min(ee,wt.count));const ve=ee-Vt;if(ve<0||ve===1/0)return;lt.setup(U,z,mt,B,dt);let ae,ie=ht;if(dt!==null&&(ae=E.get(dt),ie=Ct,ie.setIndex(ae)),U.isMesh)z.wireframe===!0?(_t.setLineWidth(z.wireframeLinewidth*Ue()),ie.setMode(T.LINES)):ie.setMode(T.TRIANGLES);else if(U.isLine){let At=z.linewidth;At===void 0&&(At=1),_t.setLineWidth(At*Ue()),U.isLineSegments?ie.setMode(T.LINES):U.isLineLoop?ie.setMode(T.LINE_LOOP):ie.setMode(T.LINE_STRIP)}else U.isPoints?ie.setMode(T.POINTS):U.isSprite&&ie.setMode(T.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))ie.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const At=U._multiDrawStarts,ge=U._multiDrawCounts,Yt=U._multiDrawCount,Xe=dt?E.get(dt).bytesPerElement:1,pi=vt.get(z).currentProgram.getUniforms();for(let qe=0;qe<Yt;qe++)pi.setValue(T,"_gl_DrawID",qe),ie.render(At[qe]/Xe,ge[qe])}else if(U.isInstancedMesh)ie.renderInstances(Vt,ve,U.count);else if(B.isInstancedBufferGeometry){const At=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ge=Math.min(B.instanceCount,At);ie.renderInstances(Vt,ve,ge)}else ie.render(Vt,ve)};function re(x,L,B){x.transparent===!0&&x.side===tn&&x.forceSinglePass===!1?(x.side=We,x.needsUpdate=!0,As(x,L,B),x.side=Xn,x.needsUpdate=!0,As(x,L,B),x.side=tn):As(x,L,B)}this.compile=function(x,L,B=null){B===null&&(B=x),p=Et.get(B),p.init(L),b.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),x!==B&&x.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let ct=0;ct<Q.length;ct++){const mt=Q[ct];re(mt,B,U),z.add(mt)}else re(Q,B,U),z.add(Q)}),p=b.pop(),z},this.compileAsync=function(x,L,B=null){const z=this.compile(x,L,B);return new Promise(U=>{function Q(){if(z.forEach(function(ct){vt.get(ct).currentProgram.isReady()&&z.delete(ct)}),z.size===0){U(x);return}setTimeout(Q,10)}Ut.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let $t=null;function xn(x){$t&&$t(x)}function un(){Yn.stop()}function Ro(){Yn.start()}const Yn=new Tc;Yn.setAnimationLoop(xn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(x){$t=x,et.setAnimationLoop(x),x===null?Yn.stop():Yn.start()},et.addEventListener("sessionstart",un),et.addEventListener("sessionend",Ro),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(L),L=et.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,L,N),p=Et.get(x,b.length),p.init(L),b.push(p),Z.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),ce.setFromProjectionMatrix(Z,mn,L.reversedDepth),Y=this.localClippingEnabled,Kt=it.init(this.clippingPlanes,Y),m=V.get(x,w.length),m.init(),w.push(m),et.enabled===!0&&et.isPresenting===!0){const Q=y.xr.getDepthSensingMesh();Q!==null&&br(Q,L,-1/0,y.sortObjects)}br(x,L,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ot,ut),Wt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Wt&&Mt.addToRenderList(m,x),this.info.render.frame++,Kt===!0&&it.beginShadows();const B=p.state.shadowsArray;xt.render(B,x,L),Kt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(p.setupLights(),L.isArrayCamera){const Q=L.cameras;if(U.length>0)for(let ct=0,mt=Q.length;ct<mt;ct++){const dt=Q[ct];Po(z,U,x,dt)}Wt&&Mt.render(x);for(let ct=0,mt=Q.length;ct<mt;ct++){const dt=Q[ct];Co(m,x,dt,dt.viewport)}}else U.length>0&&Po(z,U,x,L),Wt&&Mt.render(x),Co(m,x,L);N!==null&&C===0&&(Bt.updateMultisampleRenderTarget(N),Bt.updateRenderTargetMipmap(N)),x.isScene===!0&&x.onAfterRender(y,x,L),lt.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],Kt===!0&&it.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function br(x,L,B,z){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ce.intersectsSprite(x)){z&&Dt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Z);const ct=F.update(x),mt=x.material;mt.visible&&m.push(x,ct,mt,B,Dt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ce.intersectsObject(x))){const ct=F.update(x),mt=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Dt.copy(x.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Dt.copy(ct.boundingSphere.center)),Dt.applyMatrix4(x.matrixWorld).applyMatrix4(Z)),Array.isArray(mt)){const dt=ct.groups;for(let Rt=0,It=dt.length;Rt<It;Rt++){const wt=dt[Rt],Vt=mt[wt.materialIndex];Vt&&Vt.visible&&m.push(x,ct,Vt,B,Dt.z,wt)}}else mt.visible&&m.push(x,ct,mt,B,Dt.z,null)}}const Q=x.children;for(let ct=0,mt=Q.length;ct<mt;ct++)br(Q[ct],L,B,z)}function Co(x,L,B,z){const U=x.opaque,Q=x.transmissive,ct=x.transparent;p.setupLightsView(B),Kt===!0&&it.setGlobalState(y.clippingPlanes,B),z&&_t.viewport(P.copy(z)),U.length>0&&ws(U,L,B),Q.length>0&&ws(Q,L,B),ct.length>0&&ws(ct,L,B),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Po(x,L,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new hn(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?In:_n,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const Q=p.state.transmissionRenderTarget[z.id],ct=z.viewport||P;Q.setSize(ct.z*y.transmissionResolutionScale,ct.w*y.transmissionResolutionScale);const mt=y.getRenderTarget(),dt=y.getActiveCubeFace(),Rt=y.getActiveMipmapLevel();y.setRenderTarget(Q),y.getClearColor(q),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Wt&&Mt.render(B);const It=y.toneMapping;y.toneMapping=Gn;const wt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),Kt===!0&&it.setGlobalState(y.clippingPlanes,z),ws(x,B,z),Bt.updateMultisampleRenderTarget(Q),Bt.updateRenderTargetMipmap(Q),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let ee=0,ve=L.length;ee<ve;ee++){const ae=L[ee],ie=ae.object,At=ae.geometry,ge=ae.material,Yt=ae.group;if(ge.side===tn&&ie.layers.test(z.layers)){const Xe=ge.side;ge.side=We,ge.needsUpdate=!0,Io(ie,B,z,At,ge,Yt),ge.side=Xe,ge.needsUpdate=!0,Vt=!0}}Vt===!0&&(Bt.updateMultisampleRenderTarget(Q),Bt.updateRenderTargetMipmap(Q))}y.setRenderTarget(mt,dt,Rt),y.setClearColor(q,W),wt!==void 0&&(z.viewport=wt),y.toneMapping=It}function ws(x,L,B){const z=L.isScene===!0?L.overrideMaterial:null;for(let U=0,Q=x.length;U<Q;U++){const ct=x[U],mt=ct.object,dt=ct.geometry,Rt=ct.group;let It=ct.material;It.allowOverride===!0&&z!==null&&(It=z),mt.layers.test(B.layers)&&Io(mt,L,B,dt,It,Rt)}}function Io(x,L,B,z,U,Q){x.onBeforeRender(y,L,B,z,U,Q),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(y,L,B,z,x,Q),U.transparent===!0&&U.side===tn&&U.forceSinglePass===!1?(U.side=We,U.needsUpdate=!0,y.renderBufferDirect(B,L,z,U,x,Q),U.side=Xn,U.needsUpdate=!0,y.renderBufferDirect(B,L,z,U,x,Q),U.side=tn):y.renderBufferDirect(B,L,z,U,x,Q),x.onAfterRender(y,L,B,z,U,Q)}function As(x,L,B){L.isScene!==!0&&(L=bt);const z=vt.get(x),U=p.state.lights,Q=p.state.shadowsArray,ct=U.state.version,mt=G.getParameters(x,U.state,Q,L,B),dt=G.getProgramCacheKey(mt);let Rt=z.programs;z.environment=x.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(x.isMeshStandardMaterial?xe:Re).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Rt===void 0&&(x.addEventListener("dispose",j),Rt=new Map,z.programs=Rt);let It=Rt.get(dt);if(It!==void 0){if(z.currentProgram===It&&z.lightsStateVersion===ct)return Lo(x,mt),It}else mt.uniforms=G.getUniforms(x),x.onBeforeCompile(mt,y),It=G.acquireProgram(mt,dt),Rt.set(dt,It),z.uniforms=mt.uniforms;const wt=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(wt.clippingPlanes=it.uniform),Lo(x,mt),z.needsLights=kc(x),z.lightsStateVersion=ct,z.needsLights&&(wt.ambientLightColor.value=U.state.ambient,wt.lightProbe.value=U.state.probe,wt.directionalLights.value=U.state.directional,wt.directionalLightShadows.value=U.state.directionalShadow,wt.spotLights.value=U.state.spot,wt.spotLightShadows.value=U.state.spotShadow,wt.rectAreaLights.value=U.state.rectArea,wt.ltc_1.value=U.state.rectAreaLTC1,wt.ltc_2.value=U.state.rectAreaLTC2,wt.pointLights.value=U.state.point,wt.pointLightShadows.value=U.state.pointShadow,wt.hemisphereLights.value=U.state.hemi,wt.directionalShadowMap.value=U.state.directionalShadowMap,wt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,wt.spotShadowMap.value=U.state.spotShadowMap,wt.spotLightMatrix.value=U.state.spotLightMatrix,wt.spotLightMap.value=U.state.spotLightMap,wt.pointShadowMap.value=U.state.pointShadowMap,wt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=It,z.uniformsList=null,It}function Do(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=rr.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Lo(x,L){const B=vt.get(x);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function Bc(x,L,B,z,U){L.isScene!==!0&&(L=bt),Bt.resetTextureUnits();const Q=L.fog,ct=z.isMeshStandardMaterial?L.environment:null,mt=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Vi,dt=(z.isMeshStandardMaterial?xe:Re).get(z.envMap||ct),Rt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,It=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),wt=!!B.morphAttributes.position,Vt=!!B.morphAttributes.normal,ee=!!B.morphAttributes.color;let ve=Gn;z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ve=y.toneMapping);const ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ie=ae!==void 0?ae.length:0,At=vt.get(z),ge=p.state.lights;if(Kt===!0&&(Y===!0||x!==M)){const Be=x===M&&z.id===S;it.setState(z,x,Be)}let Yt=!1;z.version===At.__version?(At.needsLights&&At.lightsStateVersion!==ge.state.version||At.outputColorSpace!==mt||U.isBatchedMesh&&At.batching===!1||!U.isBatchedMesh&&At.batching===!0||U.isBatchedMesh&&At.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&At.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&At.instancing===!1||!U.isInstancedMesh&&At.instancing===!0||U.isSkinnedMesh&&At.skinning===!1||!U.isSkinnedMesh&&At.skinning===!0||U.isInstancedMesh&&At.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&At.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&At.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&At.instancingMorph===!1&&U.morphTexture!==null||At.envMap!==dt||z.fog===!0&&At.fog!==Q||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==it.numPlanes||At.numIntersection!==it.numIntersection)||At.vertexAlphas!==Rt||At.vertexTangents!==It||At.morphTargets!==wt||At.morphNormals!==Vt||At.morphColors!==ee||At.toneMapping!==ve||At.morphTargetsCount!==ie)&&(Yt=!0):(Yt=!0,At.__version=z.version);let Xe=At.currentProgram;Yt===!0&&(Xe=As(z,L,U));let pi=!1,qe=!1,Qi=!1;const _e=Xe.getUniforms(),Ke=At.uniforms;if(_t.useProgram(Xe.program)&&(pi=!0,qe=!0,Qi=!0),z.id!==S&&(S=z.id,qe=!0),pi||M!==x){_t.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),_e.setValue(T,"projectionMatrix",x.projectionMatrix),_e.setValue(T,"viewMatrix",x.matrixWorldInverse);const Ge=_e.map.cameraPosition;Ge!==void 0&&Ge.setValue(T,pt.setFromMatrixPosition(x.matrixWorld)),Pt.logarithmicDepthBuffer&&_e.setValue(T,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_e.setValue(T,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,qe=!0,Qi=!0)}if(U.isSkinnedMesh){_e.setOptional(T,U,"bindMatrix"),_e.setOptional(T,U,"bindMatrixInverse");const Be=U.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),_e.setValue(T,"boneTexture",Be.boneTexture,Bt))}U.isBatchedMesh&&(_e.setOptional(T,U,"batchingTexture"),_e.setValue(T,"batchingTexture",U._matricesTexture,Bt),_e.setOptional(T,U,"batchingIdTexture"),_e.setValue(T,"batchingIdTexture",U._indirectTexture,Bt),_e.setOptional(T,U,"batchingColorTexture"),U._colorsTexture!==null&&_e.setValue(T,"batchingColorTexture",U._colorsTexture,Bt));const $e=B.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&tt.update(U,B,Xe),(qe||At.receiveShadow!==U.receiveShadow)&&(At.receiveShadow=U.receiveShadow,_e.setValue(T,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ke.envMap.value=dt,Ke.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(Ke.envMapIntensity.value=L.environmentIntensity),qe&&(_e.setValue(T,"toneMappingExposure",y.toneMappingExposure),At.needsLights&&zc(Ke,Qi),Q&&z.fog===!0&&K.refreshFogUniforms(Ke,Q),K.refreshMaterialUniforms(Ke,z,H,$,p.state.transmissionRenderTarget[x.id]),rr.upload(T,Do(At),Ke,Bt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(rr.upload(T,Do(At),Ke,Bt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_e.setValue(T,"center",U.center),_e.setValue(T,"modelViewMatrix",U.modelViewMatrix),_e.setValue(T,"normalMatrix",U.normalMatrix),_e.setValue(T,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Be=z.uniformsGroups;for(let Ge=0,Tr=Be.length;Ge<Tr;Ge++){const jn=Be[Ge];Ft.update(jn,Xe),Ft.bind(jn,Xe)}}return Xe}function zc(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function kc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(x,L,B){const z=vt.get(x);z.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),vt.get(x.texture).__webglTexture=L,vt.get(x.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){const B=vt.get(x);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};const Hc=T.createFramebuffer();this.setRenderTarget=function(x,L=0,B=0){N=x,A=L,C=B;let z=!0,U=null,Q=!1,ct=!1;if(x){const dt=vt.get(x);if(dt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(T.FRAMEBUFFER,null),z=!1;else if(dt.__webglFramebuffer===void 0)Bt.setupRenderTarget(x);else if(dt.__hasExternalTextures)Bt.rebindTextures(x,vt.get(x.texture).__webglTexture,vt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const wt=x.depthTexture;if(dt.__boundDepthTexture!==wt){if(wt!==null&&vt.has(wt)&&(x.width!==wt.image.width||x.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(x)}}const Rt=x.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ct=!0);const It=vt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(It[L])?U=It[L][B]:U=It[L],Q=!0):x.samples>0&&Bt.useMultisampledRTT(x)===!1?U=vt.get(x).__webglMultisampledFramebuffer:Array.isArray(It)?U=It[B]:U=It,P.copy(x.viewport),O.copy(x.scissor),k=x.scissorTest}else P.copy(Tt).multiplyScalar(H).floor(),O.copy(Ht).multiplyScalar(H).floor(),k=se;if(B!==0&&(U=Hc),_t.bindFramebuffer(T.FRAMEBUFFER,U)&&z&&_t.drawBuffers(x,U),_t.viewport(P),_t.scissor(O),_t.setScissorTest(k),Q){const dt=vt.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,B)}else if(ct){const dt=L;for(let Rt=0;Rt<x.textures.length;Rt++){const It=vt.get(x.textures[Rt]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Rt,It.__webglTexture,B,dt)}}else if(x!==null&&B!==0){const dt=vt.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,dt.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(x,L,B,z,U,Q,ct,mt=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=vt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt){_t.bindFramebuffer(T.FRAMEBUFFER,dt);try{const Rt=x.textures[mt],It=Rt.format,wt=Rt.type;if(!Pt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-z&&B>=0&&B<=x.height-U&&(x.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+mt),T.readPixels(L,B,z,U,St.convert(It),St.convert(wt),Q))}finally{const Rt=N!==null?vt.get(N).__webglFramebuffer:null;_t.bindFramebuffer(T.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(x,L,B,z,U,Q,ct,mt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=vt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt)if(L>=0&&L<=x.width-z&&B>=0&&B<=x.height-U){_t.bindFramebuffer(T.FRAMEBUFFER,dt);const Rt=x.textures[mt],It=Rt.format,wt=Rt.type;if(!Pt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Vt),T.bufferData(T.PIXEL_PACK_BUFFER,Q.byteLength,T.STREAM_READ),x.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+mt),T.readPixels(L,B,z,U,St.convert(It),St.convert(wt),0);const ee=N!==null?vt.get(N).__webglFramebuffer:null;_t.bindFramebuffer(T.FRAMEBUFFER,ee);const ve=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Hh(T,ve,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Vt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Q),T.deleteBuffer(Vt),T.deleteSync(ve),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,B=0){const z=Math.pow(2,-B),U=Math.floor(x.image.width*z),Q=Math.floor(x.image.height*z),ct=L!==null?L.x:0,mt=L!==null?L.y:0;Bt.setTexture2D(x,0),T.copyTexSubImage2D(T.TEXTURE_2D,B,0,0,ct,mt,U,Q),_t.unbindTexture()};const Vc=T.createFramebuffer(),Gc=T.createFramebuffer();this.copyTextureToTexture=function(x,L,B=null,z=null,U=0,Q=null){Q===null&&(U!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let ct,mt,dt,Rt,It,wt,Vt,ee,ve;const ae=x.isCompressedTexture?x.mipmaps[Q]:x.image;if(B!==null)ct=B.max.x-B.min.x,mt=B.max.y-B.min.y,dt=B.isBox3?B.max.z-B.min.z:1,Rt=B.min.x,It=B.min.y,wt=B.isBox3?B.min.z:0;else{const $e=Math.pow(2,-U);ct=Math.floor(ae.width*$e),mt=Math.floor(ae.height*$e),x.isDataArrayTexture?dt=ae.depth:x.isData3DTexture?dt=Math.floor(ae.depth*$e):dt=1,Rt=0,It=0,wt=0}z!==null?(Vt=z.x,ee=z.y,ve=z.z):(Vt=0,ee=0,ve=0);const ie=St.convert(L.format),At=St.convert(L.type);let ge;L.isData3DTexture?(Bt.setTexture3D(L,0),ge=T.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Bt.setTexture2DArray(L,0),ge=T.TEXTURE_2D_ARRAY):(Bt.setTexture2D(L,0),ge=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,L.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,L.unpackAlignment);const Yt=T.getParameter(T.UNPACK_ROW_LENGTH),Xe=T.getParameter(T.UNPACK_IMAGE_HEIGHT),pi=T.getParameter(T.UNPACK_SKIP_PIXELS),qe=T.getParameter(T.UNPACK_SKIP_ROWS),Qi=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ae.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ae.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Rt),T.pixelStorei(T.UNPACK_SKIP_ROWS,It),T.pixelStorei(T.UNPACK_SKIP_IMAGES,wt);const _e=x.isDataArrayTexture||x.isData3DTexture,Ke=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){const $e=vt.get(x),Be=vt.get(L),Ge=vt.get($e.__renderTarget),Tr=vt.get(Be.__renderTarget);_t.bindFramebuffer(T.READ_FRAMEBUFFER,Ge.__webglFramebuffer),_t.bindFramebuffer(T.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let jn=0;jn<dt;jn++)_e&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,vt.get(x).__webglTexture,U,wt+jn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,vt.get(L).__webglTexture,Q,ve+jn)),T.blitFramebuffer(Rt,It,ct,mt,Vt,ee,ct,mt,T.DEPTH_BUFFER_BIT,T.NEAREST);_t.bindFramebuffer(T.READ_FRAMEBUFFER,null),_t.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(U!==0||x.isRenderTargetTexture||vt.has(x)){const $e=vt.get(x),Be=vt.get(L);_t.bindFramebuffer(T.READ_FRAMEBUFFER,Vc),_t.bindFramebuffer(T.DRAW_FRAMEBUFFER,Gc);for(let Ge=0;Ge<dt;Ge++)_e?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,$e.__webglTexture,U,wt+Ge):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,$e.__webglTexture,U),Ke?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Be.__webglTexture,Q,ve+Ge):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Be.__webglTexture,Q),U!==0?T.blitFramebuffer(Rt,It,ct,mt,Vt,ee,ct,mt,T.COLOR_BUFFER_BIT,T.NEAREST):Ke?T.copyTexSubImage3D(ge,Q,Vt,ee,ve+Ge,Rt,It,ct,mt):T.copyTexSubImage2D(ge,Q,Vt,ee,Rt,It,ct,mt);_t.bindFramebuffer(T.READ_FRAMEBUFFER,null),_t.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Ke?x.isDataTexture||x.isData3DTexture?T.texSubImage3D(ge,Q,Vt,ee,ve,ct,mt,dt,ie,At,ae.data):L.isCompressedArrayTexture?T.compressedTexSubImage3D(ge,Q,Vt,ee,ve,ct,mt,dt,ie,ae.data):T.texSubImage3D(ge,Q,Vt,ee,ve,ct,mt,dt,ie,At,ae):x.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Q,Vt,ee,ct,mt,ie,At,ae.data):x.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Q,Vt,ee,ae.width,ae.height,ie,ae.data):T.texSubImage2D(T.TEXTURE_2D,Q,Vt,ee,ct,mt,ie,At,ae);T.pixelStorei(T.UNPACK_ROW_LENGTH,Yt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Xe),T.pixelStorei(T.UNPACK_SKIP_PIXELS,pi),T.pixelStorei(T.UNPACK_SKIP_ROWS,qe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Qi),Q===0&&L.generateMipmaps&&T.generateMipmap(ge),_t.unbindTexture()},this.initRenderTarget=function(x){vt.get(x).__webglFramebuffer===void 0&&Bt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Bt.setTextureCube(x,0):x.isData3DTexture?Bt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Bt.setTexture2DArray(x,0):Bt.setTexture2D(x,0),_t.unbindTexture()},this.resetState=function(){A=0,C=0,N=null,_t.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const Cn=[{name:"数字的童年",period:"第 I—III 章",concept:"观察价格 · 认识交易规则",color:3230784,whisper:"我以为数字不会欺骗我。后来我知道，数字抵达的时间也会。",motif:"board"},{name:"离开旧方法",period:"第 IV—VI 章",concept:"重新开始 · 从波动到趋势",color:5064754,whisper:"椅子空着。那个老人留下的答案，比任何消息都慢。",motif:"clock"},{name:"风暴的方向",period:"第 VII—IX 章",concept:"试探与加仓 · 1907年恐慌",color:3426645,whisper:"窗外不是海。是所有人都需要、却忽然消失的钱。",motif:"ship"},{name:"棉花的雪",period:"第 X—XII 章",concept:"知与行的裂缝 · 权威与自我",color:5851968,whisper:"棉花很轻。一个相信自己不会犯错的人，却能被它压垮。",motif:"cotton"},{name:"债务的冬天",period:"第 XIII—XV 章",concept:"人情、破产与重建 · 外部风险",color:4080203,whisper:"债务没有声音。它只是跟着我，坐在每一张报价板前。",motif:"safe"},{name:"消息的回声",period:"第 XVI—XVIII 章",concept:"小道消息 · 经验与事实",color:4016698,whisper:"电话每响一次，便有人替我想好了一种未来。",motif:"phone"},{name:"幕后剧场",period:"第 XIX—XXI 章",concept:"历史操纵 · 供需与退出",color:5258051,whisper:"舞台上，价格在上升。舞台下，有人正在寻找接过股票的手。",motif:"press"},{name:"留给公众的信",period:"第 XXII—XXIV 章",concept:"发行、宣传与责任 · 全书回望",color:3427404,whisper:"最后一扇门后没有秘诀。只有你自己的判断。",motif:"paper"}],Ts=[{n:1,roman:"I",title:"那本沾着粉笔灰的小册子",object:"观察笔记",kind:"book",quote:"先记录发生了什么，再判断自己是否看懂。",scene:"你翻开桌上的小册子。铅笔在页边留下一行很短的预测；下一行，却是后来真实发生的价格。",story:["故事开始时，拉里还是一个替经纪行抄写报价的少年。客户守着行情机念出价格，他把数字写上大黑板。最初，他并不关心企业的名字和经营。他关心的是数字怎样变化：一段上涨开始之前，价格曾怎样停顿；一次下跌来临之前，买卖的力量怎样变得不一样。长时间重复的工作，渐渐成了观察市场的学校。","他凭记忆比较今天与过去，后来拿出一本小册子，把预测写进去，再用实际报价检查。这里的重点不是假想赚了多少钱，而是他观察得准不准。他不把事后编好的理由当作事前的判断。少年第一次参与实际交易，赚到的钱很少，却第一次把自己对数字的理解换成了真实的结果。","在对赌行里，他的这种短线读盘能力很快见效。所谓对赌行，并不把客户每笔订单送到交易所，而是与客户对赌报价涨跌。持续盈利的客户损害老板的利益；他逐渐受到限制，甚至不再被接待。一间看起来像经纪行的屋子，与真实证券市场之间，隔着完全不同的规则。","原章还写到店家提高保证金、加收不利于他的价差，以及人为摆布报价的手段。成功没有证明这套办法可以放到任何地方。他学会读数字，却还没有学会辨认数字背后的交易制度。第一间房的门，正是这份尚未被察觉的局限。"],principle:"把判断、依据与后续事实分开记录，才有可能发现自己的真实能力。正确几次并不等于有稳定优势；交易对手、费用和执行方式同样会改变结果。"},{n:2,roman:"II",title:"纽约来的行李箱",object:"旧行李箱",kind:"suitcase",quote:"换了交易场所，就得重新理解自己的优势。",scene:"箱子的皮革已经裂开。你抬起盖子，里面没有衣服，只有一张到纽约的车票和一叠越来越薄的钞票。",story:["拉里二十一岁来到纽约时，随身带着两千五百美元。他并不是从未输过的神童：早先已经挣过更多的钱，也已经把它们失去过。他知道自己只在有充分把握时交易往往更有效，却常常因为想一直参与而偏离自己的方法。无论市场有没有合适机会，天天都想挣钱，本身就会制造亏损。","他希望到正规交易所会员的办公室里交易，靠近原始行情，摆脱对赌行施加的限制。但真正的股票买卖，不是按照黑板上的价格结算一次赌注。他看见价格、下达订单、订单送到场内、实际成交，再收到回报，这些环节之间存在时间差。短短一点波动，在对赌行可能足够获利，在真实市场却可能被迟延与执行价格吞掉。","账户吃紧之后，他又回到一些对赌场所筹集本金，甚至用不同身份进入不认识他的店。他的交易再次显示出读盘能力，也再次让老板不愿接待他。某个老板把话说得很直白：普通客户的损失养活这个地方，而一个能长期赢钱的人，并不属于这种生意。","本章的讽刺在于：把他赶出去的店家，间接迫使他学到更多。他不能永远依赖一个只允许别人输钱的游戏。可他也不能把在那个游戏里的成功，直接移植到纽约。这只行李箱装着本金，更装着一套尚未适应新环境的习惯。"],principle:"优势总是依附于具体条件。价格来源、成交延迟、费用、保证金和对手方是否可靠，会改变同一种判断的实际结果。频繁操作并不自动带来机会；想挣钱的愿望也不能代替有利条件。"},{n:3,roman:"III",title:"迟到的报价纸带",object:"行情纸带",kind:"board",quote:"看对方向，也可能输在时间与执行。",scene:"纸带像一条狭长的河流越过桌面。你读到的数字还在昨天的岸上，窗外的人群已经奔向另一边。",story:["拉里回顾自己的错误时，提出了一个超越多空阵营的判断：市场没有必须忠于的牛方或熊方，只有与实际形势相符的一方。可知道这句话，并不等于能够执行。用想象中的钱操作，人很容易觉得自己勇敢而准确；当真实本金、生活费用和自尊都压上去，决定会变得不同。","纽约的繁荣吸引了大批有钱人进场，股票成交量和投机热情都远超过他少年时的经验。他可以看见报价板，听见客户议论，却仍在用过去抓取小幅变动的办法处理一种更大、更复杂的市场。他还会在上涨中猜测顶点，卖空后迅速认错，再转向买入。市场很热闹，他的理解却没有同步长大。","1901年北太平洋相关的挤压与恐慌使这份局限突然显形。行情机严重落后于现场成交，屏幕上看似仍能作为依据的数字，已经无法代表订单实际会成交的位置。他曾积累起相当可观的资金，却在剧烈行情里失去。问题不是故事里没有机会，而是他的行动所依据的时间和真实市场脱节。","此后反复交易与生活支出，又让他重新跌回低点。他逐渐意识到自己还没能准确说出问题所在。不能诊断自己的失败，就很容易把同一种失败叫成运气不好，继续重复。旧工具曾经很好用，但小弹丸并不适合新的猎物。"],principle:"分析、时机、执行与资金承受力是不同环节。对方向的判断不能掩盖执行风险。模拟成功与真实交易之间，还隔着心理压力和具体规则；把问题说清楚，是改变方法的起点。"},{n:4,roman:"IV",title:"退回来的汇票",object:"汇票与账页",kind:"ticket",quote:"重新开始之前，先查清上一次为什么结束。",scene:"抽屉里有一张被折过四次的汇票。折痕没有抹掉数字，只把它切成了一小块、一小块的勇气。",story:["离开纽约之后，拉里并没有放弃重返华尔街。他需要重新筹集本金，也相信有一天，当方法成熟时，只有规模更大的市场才能容纳他的交易。可家乡认识他的对赌行仍不愿接待他，不认识他的店又常常不可靠。他既要寻找可获利的报价，又要确认对手方真的会支付盈利。","他到外地考察所谓经纪业务。有些店用低佣金、直接连线、动人的股票消息包装自己，却保留了对赌式的生意逻辑。拉里逐步摸清它们如何执行订单，先小额试探，避免立即暴露自己。他不是只读一张价格表；他还在观察这个地方怎样挣钱、为什么欢迎某种客户。","当自己的盈利与店家的利益冲突时，名义上的便利很快消失。交易可以被改用不利方式执行，账户也可能遭遇干预。那些主动寄来的电报，声称有内部集团要把某股推高许多点，其目的未必是替客户挣钱，可能只是诱使客户在最容易被吞掉本金的环境里加大下注。","带着再次筹得的钱，他第三次尝试纽约。本章末尾，他逐项区分过去的失败：有的是在自己的方法没有优势时乱做；有的是极端行情与迟到报价造成；另一些还没有完全查明。他没有把“已经吃过苦”当作“已经学会”。损失能教人避免某些事情，但知道不要做什么，只是开始。"],principle:"复盘应当具体到触发、依据、执行和结果，避免把所有损失统称为“心态不好”。制度或执行问题与判断问题不同。重新筹得本金，只是恢复行动条件，不代表原来的问题已经修复。"},{n:5,roman:"V",title:"老人没有离开的椅子",object:"等待的座钟",kind:"clock",quote:"识别大势之后，仍然需要坐得住。",scene:"钟摆慢得令人心烦。你几乎想把它拨快。老人没有留下名字，只留下一个回答，像一张一直没有卖掉的股票。",story:["拉里发现，过度专注于报价的小幅变化，会让一个熟练读盘者失去弹性。价格行为确实能提供信息，但一套机械规则并不能概括全部市场。某只股票如果没有按预期表现，就不该因为既有公式而强行解释它。观察应当告诉人何时没有把握，而不只是告诉人何时觉得自己聪明。","办公室里有一位年长客户帕特里奇，大家给他起了带着调侃意味的绰号。他很少急着交易。别人带着内部消息和犹豫去问他，他总把谈话拉回总体环境：眼下是牛市。年轻的拉里最初以为这是敷衍，因为老人没有告诉别人哪天买、哪天卖。","直到有人劝老人先卖掉，等待回落再买回来，他才显露出真正重视的东西：自己的持仓位置。卖出固然能把纸面收益变成现金，但如果后来没有合适机会买回，便会失去继续参与主要上涨的资格。老人不是保证市场永远上涨，而是在说明，当大势仍支持原判断时，反复抓小差价可能牺牲更大的机会。","拉里逐渐把这份经验理解为对自己的纠正：真正让他赚到大钱的，不单是判断，而是正确以后能够等待。读盘仍然有用，但要服务于对主要行情的理解。故事没有把任何持有都赞美成耐心；它赞美的是有依据、有前提的持有。错误需要处理，正确的位置则不能只因短暂波动就轻易放弃。"],principle:"耐心与僵持的区别，在于前提是否还成立。行情总体仍支持判断时，小幅波动未必要求频繁退出；事实改变时，继续持有也不能借“坐得住”来自我辩护。"},{n:6,roman:"VI",title:"那封好心的电报",object:"联太铁路电报",kind:"letter",quote:"把别人的判断接过来，也把责任交出去了。",scene:"电报的纸已经发黄。落款像一只友善的手。你握住它时，没有察觉自己的另一只手已离开方向盘。",story:["1906年春天，拉里在大西洋城度假。他忽然强烈地想卖空联合太平洋，却说不清这份感觉来自何处。后来旧金山地震发生，相关股票与市场承受压力。书中把这个巧合放进他的回顾，但并没有提供一条可重复、可验证的“预知灾难”办法。一次难以解释的成功，最容易被旁人讲成神秘天赋。","随着灾情与资金需求显现，他加大卖空，获得利润。可同一只股票随后又成为另一课的材料。在萨拉托加，他依据市场表现判断上涨，买进联合太平洋。熟悉他的经纪人却带来非常肯定的劝告，声称内部情况不支持他的操作，出于好意希望他避免损失。","拉里接受了这份劝告，放弃自己的判断，甚至站到了相反方向。随后公司提高股息，价格向上，原先的读盘判断反而得到验证。这个失误不是陌生骗子欺骗了他，而是可信、能干、善意的人，其判断仍可能错误。关系的可靠，不等于信息结论的可靠。","他迅速平掉错误的空头，又转为买入，弥补损失并获得收益。他把这一段当作交易教育的重要转折：不再把一个人的名声放在自己观察到的事实之上，同时也要摆脱只盯个别价格波动的旧方法，开始思考基本条件。独立不是倔强，而是判断必须由自己的证据承担。"],principle:"可信的人也可能犯错。新的意见值得检验，却不应只凭地位或友谊覆盖已有证据。一次直觉恰好正确，不能被推广为预测灾难的能力；本章可学习的部分是纠错和保持独立。"},{n:7,roman:"VII",title:"越放越小的砝码",object:"试探天平",kind:"scale",quote:"让市场先证明你的起点，再考虑增加暴露。",scene:"天平的两侧不是黄金，而是两种声音：一边说“已经涨太多”，另一边说“它仍在往上走”。你放下第一枚砝码。",story:["拉里发现，多数人不要一份关于牛市或熊市的分析，他们想要一个具体代码和买卖指令。因为指令可以省掉研究，也可以在亏损时提供一个可以责怪的人。可他自己的进步，恰恰来自把单只股票的小变化放回整体市场，而不是向别人索取一个无需思考的答案。","他解释，买入上涨中的股票，不是因为喜欢付高价，而是因为价格的实际行为在确认方向。低价并不天然安全，高价也不天然意味着应该卖空。原章用大户德肯等交易故事说明，别人声称内部人在买入，并不能直接构成自己的买入理由；市场是否能吸收一笔真实的卖单，比传来的口头说法更能说明买方力量。","扩大仓位之前，他需要初始交易得到市场响应。他强调，第二笔买入不应只是因为第一笔正在亏损；第一笔先表现出利润，才有理由考虑增加。每一步都观察买卖的反应，等到条件与时机配合，再把规模提高。这和价格下跌后不断摊低成本，是两种不同的逻辑。","也并非每一种价格变化都适合立刻开展主要操作。市场有时还没有明确表现，交易者应当等待或试探，而不是由于自己已经形成理论就一次押满。本章将“看对”拆成更具体的过程：先选环境，再找时机，再由真实市场反应确认，最后才考虑规模。"],principle:"价格相对高低，不等于方向判断；加仓也应依赖新的确认，而不是挽救旧亏损。原书的金字塔式扩大必须连同风险与时机理解，不能简化为“上涨就永远加仓”。"},{n:8,roman:"VIII",title:"还没抵达的风暴",object:"货币紧张的报纸",kind:"paper",quote:"提前看见，不代表可以无限承受提前行动的代价。",scene:"纸上的风暴比窗外来得早。你把报纸展开，风穿过标题。桌上的日历却仍停在一个看起来平静的早晨。",story:["联太事件之后，拉里更警惕那些没有经过自己检验的意见。他不愿因为持有股票而选择看多，也不愿因为卖空而只搜寻坏消息。持仓应当来自对条件的判断，不能反过来改写判断。他逐步把货币、信用与整体经济环境纳入自己的市场观察。","在通向1907年危机的过程中，他看到资金条件日益紧张，认定大跌有其基础。他卖空，市场却还会反弹，价格迟迟不按他的时间表下降。他的分析可能指向一个正确的大方向，但过早扩大仓位使他承受了不必要的损耗。资金和耐力都不是无限的。","几次过早操作之后，他重新筹措有限的本金，继续观察市场。关键不是把宏观预见丢掉，而是把行动起点放到价格已经开始配合的时候。反弹变得无力，卖出越来越能够推动价格下行，市场反馈才逐渐同原来的分析接上。","本章不是一个预言家始终正确的故事。它写一个人如何因为正确得太早而陷入困境，再学会让行情自己证明时机。市场不会因为你的逻辑完整就停止反弹，也不会因为你已经没有钱等待，就提前给出应有的结果。"],principle:"方向与时机不同。一个正确的宏观观点，如果没有合适起点和可承受的资金结构，仍可形成错误交易。等待市场行为配合分析，是把有限资金与不确定时间相协调。"},{n:9,roman:"IX",title:"风暴里停下的船",object:"佛罗里达的帆船",kind:"ship",quote:"在恐慌中，流动性比理论上的价格更急迫。",scene:"船停在一片蓝黑色的水上。有人带来一份报纸。你本来已经离开市场，却在一眼之间听见纽约的钟声。",story:["拉里在佛罗里达海岸度假，暂时没有股票仓位。朋友带来的报纸写着市场强劲反弹。他的看空不是来自眼前一根跌线，而是资金条件仍没有改变：这次上涨在他看来超出了环境所能支持的程度。他上岸到经纪行重新观察，而不是只凭船上的标题下单。","他开始卖空，并根据股票的实际表现选择自己的操作。原章中关于安纳康达等股票的交易，继续说明强弱反应的重要性。公司名字或价格到了某个整数位，并不能单独说明安全；买卖之后市场怎样回应，才决定他是否继续承担更多暴露。","1907年恐慌真正展开后，问题已不限于股价，整个市场缺少维持交易的资金。借钱难，买方消失，证券可能必须在极不利条件下出售。拉里的空头在这一阶段获利，他也从交易回报中感受到市场承接能力的骤然变化。","在全市场接近失控时，他接到希望不要再扩大下跌压力的请求，最后停止进攻并买入回补。书中对这个场面的叙述带有戏剧性：一个以卖空获利的人，也可以在关键时刻成为买方。这里不是一个永远坚持阵营的英雄，而是一个会根据市场状态改变行动的操作者。"],principle:"危机中的价格，还包含现金需求和成交能力。做空与买入并不是身份；情况改变时，应当重新判断下一步。1907年这段事件属于历史叙事，不能当作今天任何市场都会照样发生的剧本。"},{n:10,roman:"X",title:"镜子里的希望与恐惧",object:"两面镜",kind:"mirror",quote:"亏损时盼它回来，盈利时怕它消失，恰好会把行动推向错误。",scene:"镜中没有你的脸，只有两个交替亮起的字：希望，恐惧。你靠近时，它们交换位置。",story:["拉里说，投机者有时明知道自己正在犯错，仍然做下去。事后能够说明发生在什么地方、何时开始、怎样扩大，却说不清为什么当时停不住。错误伤害的不仅是钱包，还有虚荣。人因此愿意躲开某一种痛，却又可能在它的近亲身上重新受伤。","本章把“最小阻力方向”讲得更具体。市场有时长期处于狭窄区间，涨一点又跌回去，跌一点又被买起。他曾经看好棉花，反复用自己的买入推动它，自己停下后价格就退回。这样的操作消耗了大量资金；后来真正的行情到来时，他已付出过早行动的代价。","对于这种横向整理，他强调先观察范围，等待价格真正摆脱限制，而不是急着证明理论。讨论小麦时，他宁愿等它超过某个重要位置之后再参与，也不因为当前看起来便宜就立即买。较高的价格若伴随更明确的市场反馈，可能比低价时毫无方向的下注更有依据。","最后，他把希望与恐惧翻转：不利时，人希望明天会好，因而容忍更大亏损；有利时，人害怕利润消失，过早结束正确的位置。交易要求抵抗这种自然冲动。他也提醒，没有人能永久战胜整个市场。局部成功、某次获利，都不能变成每次参与都必须赢的承诺。"],principle:"等待有意义的反馈，不等于等待任何价格都替你实现愿望。约束亏损与给正确判断留出空间，必须结合事实变化理解。原书的突破位置是历史案例，不是可机械套用的统一数值。"},{n:11,roman:"XI",title:"一顶并不属于他的皇冠",object:"谷物交割账",kind:"book",quote:"一次成功里，能力、条件与偶然性可能同时存在。",scene:"账簿旁边有一块写着“棉花之王”的牌子。你翻到盈亏那一页，发现皇冠的影子遮住了一个空白。",story:["1907年股票上的胜利之后，拉里想驾游艇南下，却被谷物头寸留住。他看空小麦与玉米，小麦下跌让他获利，玉米却遭遇另一位大交易者试图控制供给、挤压空头。一个人在整体判断上可能合理，仍会因特定合约的持仓结构陷入危险。","他不只是空等理论成立，而是观察关联商品的反应，并借其他谷物的交易影响市场情绪，寻求解除玉米困境的机会。原章还用其他操作者的故事说明，同一个消息在不同的整体布局里可以产生不同用途。消息并没有一种脱离仓位、流动性和市场条件的固定答案。","随后他在佛罗里达听说著名棉花投机者珀西·托马斯的失败。拉里长期敬佩这个人物，后来自己参与棉花交易，积累了一笔大额多头。他也面对一个实际问题：头寸很大，平常的市场承接量有限，怎样卖掉而不让自己的卖出毁掉报价上的利润？","一次报纸报道和市场误解意外地创造了强烈买盘，使他的退出比预想顺利得多。旁人却把它解释成他精心安排的操作，媒体给他戴上“棉花之王”的名号。他明确说那份名声包含偶然性，并非全部来自自己掌控。这个名号又成为下一章相识托马斯的桥梁：别人看见的英雄形象，将开始影响他对自己的判断。"],principle:"归因要区分可重复的判断、具体市场结构和无法安排的偶然事件。尤其要区分账面盈利与大头寸实际退出的难度。赢过一次，未必掌握了别人以为你掌握的全部能力。"},{n:12,roman:"XII",title:"一包棉花压垮的房间",object:"托马斯的棉花包",kind:"cotton",quote:"知道原则，与在受压时执行原则，是两件事。",scene:"棉花从麻绳的缝里露出来。你按下去，它几乎没有重量。房间却在你松手后，安静地向下沉。",story:["珀西·托马斯是一位知识丰富、表达极有说服力的棉花专家。他的资料来自广泛的通信网络，他对产量、需求和供给的解释让拉里钦佩。拉里最初并不看多棉花，自己从公开信息和市场表现得到的结论，与托马斯不同。但持续交谈让他渐渐失去对自己证据的信心。","问题不在于所有数字必然虚假，而在于他停止用自己的方式检验结论。托马斯把自己的信息讲成独有且可靠，把别人可获得的信息讲成不可靠。拉里最终通过对方递来的同一页材料观察整个市场，逐渐接受了对方的看多。他失去的首先是判断的独立，而后才是本金。","当棉花不按预期表现时，拉里没有采用自己原来主张的做法。他增加失利的棉花仓位，又卖掉仍然表现良好的小麦，用正确交易的资源支持错误交易。赢的一边被切掉，输的一边被喂大。他不是没听过纪律，而是在信念、权威和亏损压力混合时，无法让纪律约束自己。","重创之后，他又急着通过交易满足具体用钱需求，包括用市场替自己支付某件想买的东西。这样的目标要求市场立刻配合自己的时间表，使观察变成许愿。最后他不仅失去棉花交易后剩余的资金，还继续交易、继续借债。本章把失去自我判断、补救亏损与迫切需求连成了一条清楚的下坠路径。"],principle:"权威资料可以参考，但不能代替自己的检验。不应把卖出有效仓位、扩大无效仓位包装成坚持。个人开支与翻本愿望不是市场机会；急迫的需要会压缩等待条件的能力。"},{n:13,roman:"XIII",title:"不用偿还的钱，不能放下的恩情",object:"人情借据",kind:"letter",quote:"人情义务也可能成为看不见的交易限制。",scene:"信纸上的字句温和得像炉火：不用急着还。你把信靠近灯光，才看见背面印着另一行更细的条款。",story:["棉花后的拉里不仅缺钱，还失去了平静。他习惯大规模交易，回到很小的头寸时觉得每一个正确判断都不再值得。他焦虑、身体不适，担心自己的判断能力已经消失。过去的成功反而成为一个尺度，让他难以接受现在必须从小处重新开始。","经纪人丹·威廉森给了他帮助和二万五千美元的资金，拉里很快恢复了一段成功交易。他想还款，对方却坚持不必急。他感激这种支持，没有坚持清偿，也觉得自己不应取走盈利。金钱上的借款逐渐与难以结清的人情搅在一起。","威廉森随后干预他的交易。他卖空某只铁路股，经纪人未经拉里所希望的方式处理了头寸，又以内部消息为由劝阻。拉里愿意让步，不愿对帮助过自己的人表现得不够体谅。可是他觉得应当做的交易不断被阻止，赚钱的机会与判断自由一起被压缩。","后来拉里把这件事解释为利益冲突：威廉森所顾及的家族遗产持有大量股票，不愿一个有能力的大空头自由行动。应注意这是叙述者的回顾与推断。无论动机怎样，已发生的交易限制是真实的。一个看起来非常善意的关系，把他绑在一个不利于发挥判断的环境里，恢复因此被拖延。"],principle:"借款条件、账户权限与利益关系应当清楚。感谢不应意味着无限让渡独立判断。对于书中人物的动机，要区分明确发生的行为与叙述者后来给出的解释。"},{n:14,roman:"XIV",title:"保险柜留给谁",object:"重建的保险柜",kind:"safe",quote:"保护生活的资金，也是在保护自己免受自己的冲动。",scene:"保险柜门开着。里面没有交易指令，只有两张小小的姓名卡。门外的纸带还在吐数字，这里却没有行情。",story:["离开威廉森之后，拉里又遇到漫长的困难市场。债权人的催促加重精神负担，他既想挣钱，也不能平静观察。第一次世界大战开始后，交易所关闭，使筹集本金和开展交易更困难。债务与缺少可做的市场，像两把锁同时扣在门上。","他最后通过破产程序卸下法律上的负担，精神状态才得以恢复。重新得到有限的交易支持后，他没有立刻全面出击，而是仔细等待自己熟悉的伯利恒钢铁达到认为有意义的关键位置。有限的资源要求他选择一个更确定的起点，先恢复正确观察和行动的配合。","战争造成的供应需求与资金流入推动美国市场繁荣，他在1915、1916年得到恢复机会。但途中仍有意料之外的事件，包括卢西塔尼亚号被击沉造成的市场震荡。回来并不是从此不会亏损，而是他重新能够理解条件、适应市场，并借有利环境累积资金。","1917年初，他偿还了超过一百万美元的旧债，虽然其中有些在法律上已无须偿还。随后他把一部分钱用于年金，并为妻儿设立信托。原章最令人清醒的一点是：他不仅担心市场夺走这笔钱，也担心自己会把任何能够拿到的钱再次用于交易。他要把家庭保障隔离在连自己的欲望也不能轻易触及的地方。"],principle:"恢复需要心理空间、可行条件和选择性行动，而不是被翻本期限驱赶。把生活保障与高风险资金分开，是承认人的自控力有限。书中的具体信托安排属于人物历史经验，不是今天的法律方案。"},{n:15,roman:"XV",title:"被改写的咖啡合约",object:"咖啡交易合同",kind:"paper",quote:"分析的是供需，交易的却还包括规则。",scene:"合同的价格没有改变，边缘却被另一张纸覆盖了。你轻轻揭开，上面是一项刚刚生效的决定。",story:["拉里把投机的风险分成不同性质：正常的不确定性、无法预测的外部事件，以及别人的不公正行为。天气、事故、战争或突发发展不一定是谁的错。知道自己不可能有预知能力，是理解风险的一部分。但他也记得一些自己认为判断正确、行事正当，却因外部介入失去收益的经历。","咖啡交易就是其中之一。他根据战争期间的供给、运输和价格条件建立头寸，认为有充分的获利机会。对手面临难以交付的压力，转而向政府寻求干预，把他描述成将抬高美国人早餐成本的投机者。叙述中，这种争议使原来的商业供需问题成为公众政策问题。","价格限制和清算期限随后改变了原有交易环境，他只能处理合约，原本认为很有把握的收益未能实现。需要区分的是：本章表达了拉里对事件的看法，不意味着监管者的动机与全部事实都只存在这一个视角。对于读者，最稳固的教训是合约、交易制度和干预可能改变结果。","他还讨论“空头袭击”怎样被用于解释下跌。把所有下跌归罪于某个大户，能让持有人继续相信基本情况没有问题，却可能忽略真正的疲弱。对手或宣传者的故事可以安慰人，但行情为何持续缺少支持，仍要独立检查，不能只靠一个方便的替罪羊。"],principle:"市场风险不限于价格，也包括合约、运输、政策和执行条件。把某个交易者当作所有下跌的原因，不等于查清下跌。不要把叙述者对监管的抱怨，当成全部事实或现代法律结论。"},{n:16,roman:"XVI",title:"每个人都想传下去的电话",object:"小道消息电话",kind:"phone",quote:"消息被热心传递时，先问是谁希望你行动。",scene:"电话响了。你举起听筒，里面的人急着告诉你一个秘密。走廊里另外三台电话，正用同样的语气讲同一件事。",story:["为什么人如此渴望小道消息？拉里给出的回答里既有贪欲，也有虚荣。得到消息的人希望轻松获利，传消息的人则享受掌握秘密、影响他人的感觉。很多人不是只想得到可靠消息，而是想得到任何可以催促行动的消息；这一次错了，就等待下一次。","原章围绕婆罗洲锡等股票的消息故事说明，传闻也能变成宣传工具。主动向人提供所谓内部机会的人，不一定想帮对方挣钱；他可能需要更多买盘来支持自己出售。消息领取者又会变成消息传播者，一条建议沿着朋友、经纪行和客户关系不断复制。","这种传播的力量不来自每个人都做过研究，反而可能来自每一站都信任上一站。到了最后，很多人相信的是“别人已经知道”，却无人清楚最初资料的来源、条件和利益关系。话语越肯定，越容易掩盖证据的空缺。","拉里不把传来的每一句话当作指令。他强调经验、自己能够理解的材料与实际价格表现。即使一个提示偶然获利，也没有证明依靠提示的人建立了判断能力。读者需要辨认的，不只是消息真假，还包括消息为何在这个时间、通过这个人、带着这份急迫到达自己。"],principle:"核查来源、利益关系、可验证材料和消息的时效。不要因为传播路径熟悉，就认定源头可靠。可以参考信息，却不能把跟随别人下注当作完整研究。"},{n:17,roman:"XVII",title:"没有神谕的早餐桌",object:"早餐桌上的笔记",kind:"book",quote:"经验可以很快，但仍须追得回它的依据。",scene:"窗台有一个空杯子。朋友记住了黑猫，你记住了前夜谈过的资金与政策。故事越神秘，那些普通的细节越容易被忘掉。",story:["朋友喜欢把拉里的及时买卖讲成直觉传奇，例如黑猫出现之后他便卖掉股票。他自己却给出另一种解释：日常观察留下的材料，可能在没有主动推演时仍被大脑处理。决定看似突然，不代表没有来由；长期经验有时使判断在意识完全说清之前已经形成。","在华盛顿的一次行动中，他接触到税收、政策与市场相关的信息。回头看，突然卖出的决定仍能与前面累积的条件联系起来。他并不主张所有冲动都正确，也不能为每一次感受提供无误证明。他试着说明，旁人把快速识别叫作神秘预感，可能只是忽略了观察过程。","本章进一步写到板块倾向。许多人看到同类股票上涨，就买进“还没涨”的那一只，认为总会轮到它。但拉里宁愿检查为什么这只股票没有跟随。如果应该强却始终弱，那份不同本身就是信息；便宜或落后不是一种天然的补涨保证。","棉花交易的案例同样体现这一点。他观察到原来的强势正在变化，先后卖出，再根据持续没有反弹的表现追加判断，后来获利弥补过早卖空的损失。他没有因为之前在棉花上亏过钱而拒绝新机会，也没有因找回亏损就宣称神谕存在。经验和记忆的作用，是更快认识新的事实。"],principle:"直觉如果来自经验，应当尽量能回到具体观察；无法追溯的冲动不能仅凭感觉合理化。板块内的异常弱势值得检查，不应自动期待补涨。上一笔盈亏不应决定下一笔的事实判断。"},{n:18,roman:"XVIII",title:"同一只股票，另一扇门",object:"热带贸易账页",kind:"board",quote:"整体看法不能替单只股票否认正在发生的事实。",scene:"账页的前半是卖出，后半是买入。它们之间没有誓言，只有一条被反复描深的价格线。",story:["拉里讲热带贸易股票时，开头就把它与此前玉米遭到挤压的经验联系起来。公司内部集团反复利用活跃交易、看多宣传与空头持仓，让市场成为一场复杂的供需博弈。他既在这只股票上做多挣钱，也曾做空，不把它归入永久属于自己哪一方的对象。","在一段操作里，他利用相关股票的交易影响市场对这一组证券的看法，以应对对方对热带贸易价格的支撑。这些细节展示的是早期市场大交易者之间的历史博弈，不能作为现实操纵的行动教程。记忆宫殿把它放在档案里，是为了理解价格背后有哪些参与者与利益。","另一次，总体环境令他偏向看空，但热带贸易偏偏在大量卖出下继续变强。内部买盘没有退缩，实际表现与他想象的下跌不一样。他判断继续卖空已不明智，先回补，后来还转为买入，参与上涨。接受单只股票与总体理论暂时不同，是这一章最重要的变化。","但他随后又犯了一个较隐蔽的错：以为内部人应该像自己一样行动，于是持有过久，让部分纸面利润流失。他纠正对手的故事，却仍不能完全避免替对手写剧本。原章不断提醒，交易对象是眼前事实，不是自己推测别人“理应”怎样做。"],principle:"整体方向是背景，具体表现是新的证据。转换立场并不等于缺少原则；拒绝认错才可能使观点变成身份。不能假定其他人的目标、资金和退出方式都与你一致。"},{n:19,roman:"XIX",title:"锁起来的钱",object:"旧市场的铁柜",kind:"safe",quote:"价格之外，市场结构也决定谁可以等、谁必须走。",scene:"铁柜没有装股票。里面装着一张被盖章的支票。门一关，走廊另一头的交易声就忽然变得急促。",story:["叙述从拉里自己的交易转向更早的华尔街。所谓操纵不止一种：积累一大笔股票时不愿把自己的购买价格抬高，出售大批证券时希望更多公众接盘，以及控制某种股票的可交付供给、迫使空头买回，背后都是对供需与市场结构的利用。","他回顾丹尼尔·德鲁、范德比尔特和早年大交易者的轶事。有些人曾制造挤压，又被别人反过来挤压；名声、胆量和资金不能保证永久占优。早期市场把逼空者的力量视为一种荣耀，虚荣也参与了这些争夺。故事不是只有冷静计算，还有想要证明自己最强的冲动。","原章末尾有一段他人转述的旧事：有人借入资金，却不把它用于正常经营，而是拿着认证支票减少其他人能借到的钱。资金被锁住，依赖借款维持仓位的人便受到压力。这说明价格不只由公司经营决定，也会受到信用与交易资源的影响。","这些故事发生在不同历史环境，部分细节来自记忆和轶闻。它们不构成现代市场的普遍规则，更不是今天可以照搬的办法。留在这一间档案室里的，是一种观看角度：问谁拥有交付资源，谁依赖融资，谁能承受等待，以及报价表上没有写出的约束。"],principle:"认识市场结构，才能理解同一价格变化为何对不同参与者造成不同压力。历史操纵故事需要放回当时制度与资料可靠性中阅读；不能把传奇等同于证实的普遍规律。"},{n:20,roman:"XX",title:"价格背后的印刷机",object:"证券销售印刷机",kind:"press",quote:"把价格抬高，和真正卖得出去，并不是同一件事。",scene:"你转动机器，纸上印出了更高的价格。出口却没有多一双手。纸继续堆积，机器的声音开始空洞。",story:["拉里谈到詹姆斯·基恩等市场操作者，同时承认自己年轻时没有真正认识他们的技术。他从别人的故事与自己的经验，试着分清一个看起来神秘的工作：将证券分散到愿意持有的公众手中。推动价格只是其中一环；如果没有真实需求，报价再高也不能把一大笔股票成功换成现金。","他用“分销”的角度解释，这类操作者必须考虑持有人分布、交易活跃度与公众兴趣。集中在少数人手中的证券，和被许多人持续买卖的证券，具有不同市场状态。价格上升吸引注意，但注意是否转化为持续购买，决定原持有人究竟能卖多少。","他特别讨论上涨与回落的关系。公众常常在高价后见到回落，觉得获得了便宜；因此卖出并不只发生在最高点，也可能发生在从高位向下的过程。这里的历史解释提醒读者：成交量很大和热烈谈论，不必然说明内部人在继续看好，它也可能是证券正转移到新持有人手里。","即便自己承担这种工作，拉里也说仍要服从市场反馈：买入若不再能产生预期效果，就不能仅因为自己是操作者而坚持投入。所有人为推动都会遇到条件的边界。一个希望安排市场的人，仍然无法取消市场对自己安排的否定。"],principle:"报价、账面价值、成交活跃与最终退出是不同概念。高位回落并不天然便宜；需要理解供给正从谁流向谁。这里解释历史分销叙事，不提供现实操纵策略。"},{n:21,roman:"XXI",title:"钢铁与石油的两页账",object:"行业对照账簿",kind:"book",quote:"同样的手法，不能覆盖不同的市场条件。",scene:"左页的钢铁厂亮着灯，右页的石油公司没有声音。你把两页叠在一起，数字对不上，连纸张的重量都不同。",story:["这一章用具体案例替代一般讨论。帝国钢铁的公司情况不错，但股票不够活跃，缺少投机兴趣。拉里接手后，依据当时整体环境、企业状况与供需反馈，使交易逐渐活跃。原章描述他把价格提高约三十点，累计买入量却相对有限；关键不是只看自己投入多少，而是是否吸引了其他参与者的真实需求。","在这段历史分销中，他观察市场怎样承接卖出，而不是只看股价有没有上升。公众购买和交易活动能够形成一定流动性，但这种环境也必须不断检验。价格的成功变化并没有赋予任何操作者永久控制权。","接着，他讲石油产品公司。对方希望他帮助处理一大笔持仓，他最初觉得条件可疑，不愿接下，后来在人情压力下同意。结果与钢铁不同：证券的市场状态与供给条件没有配合，已有负担、相互竞争和不合适的时机，使他难以用过去的成功复制结果。","原章末尾把视角推向繁荣顶端：公众先看见股票从低价不断上升，以为每一个新价都太高；后来它越过更高位置，人又逐渐放弃限制的想法。不敢在高处追买，并不保证已有持有人会及时兑现。希望会模糊视线，大量纸面财富最终仍停留在纸上。"],principle:"案例比较应比较条件，不能只复制表面的动作。公司、供给、公众需求与总体环境不同，会改变同一做法的结果。希望让人接受没有边界的上涨，也让人把退出无限延后。"},{n:22,roman:"XXII",title:"裁缝收到的消息",object:"联合炉具的信",kind:"letter",quote:"一个大户的名字，不是公众收益的担保。",scene:"信不是寄给交易所的，是寄给一个做衣服的人。纸上写着某位名人的名字，好像这就足够解释明天。",story:["朋友吉姆·巴恩斯请拉里帮忙出售联合炉具的一大笔股票。拉里最初有多种顾虑，对方却把这当成私人帮忙，他最后同意尽力。本章再次让人情与市场判断相遇：不愿伤害关系的人，可能会接下本来不愿接受的任务。","联合炉具的发行出现在公众对新证券的胃口已接近饱和时。发起人仍希望复制繁荣中别人赚得的大额利润，却没有充分适应总体市场的变化。此前的高价、合并后的份额安排和他们对股票价值的期待，不能自动创造持续的公众购买。","不同参与者的行动又使操作更复杂。拉里要求资金与明确配合，但资金分期到达，内部人可能在他尝试建立市场时卖出。他最终面对下跌环境，只能按市场能给出的条件处理持仓。委托人对结果不满，认为他应该做到更多，而市场并不会因委托人曾经有过希望就回到原来的价格。","最令他不舒服的细节来自妻子的裁缝。裁缝说自己买了这只股票，因为听说拉里会把它做上去。一个内部的销售任务，被外部传闻翻译成了公众的获利承诺。没有见过委托、资金、供给条件的人，却承受了真实损失。拉里说，这让他更不愿给别人股票消息。"],principle:"名字、名气和参与某次操作，不等于收益保证。发行与宣传中的利益安排值得检查。私人任务传播成公众承诺时，最不了解条件的人可能承担最大误解。"},{n:23,roman:"XXIII",title:"匿名内幕人的报纸",object:"油股宣传报",kind:"paper",quote:"解释如果总保护同一方，就需要重新检查。",scene:"报纸上的引号很清楚，引号里面的人却没有名字。价格下跌时，它说坏人来了；价格上涨时，它说企业从未如此好。",story:["拉里承认，警告无法取消投机。人仍会判断错，突发事件仍会让认真计划失效，贪欲、恐惧和虚荣也不会消失。但这些自然风险之外，市场还有不应被接受的宣传与交易弊病。他看到与自己初入纽约时相比已经存在改善，却并不认为公众从此得到充分保护。","他详细描述一种熟悉的模式：企业好转时，内部人安静地买入，随后市场出现对公司盈利与前景的热烈报道。消息引用“某位重要内部人”“财务委员会成员”等匿名来源，既像具有权威，又无法追问责任。公众得到的不是完整资料，而是一个促使它们购买的有利版本。","等到前景变差，内部人可能先安静卖出，公开话语却不相应变得悲观。价格跌了，就解释成空头的攻击；有人正在退出，却告诉外部持有人不该害怕。文字与行动的方向相反，公众相信文字，就更容易替已经掌握信息的人承担持有的时间。","原章以油股等事件说明，拉里的名字也会被用作下跌的替罪对象。内部集团继续卖出，却宣称要惩罚袭击市场的空头，外部高价买家因此继续等待。真正的问题不是有没有一次卖空，而是这种方便的解释让人忽略持续下跌与供给的事实，越过本来应该重新判断的时刻。"],principle:"匿名权威、单一有利叙事与持续相反的市场表现，是值得查验的组合。区分报道声称、参与者实际行动与能被独立验证的资料。价格本身也不解释一切，但不能被宣传直接擦掉。"},{n:24,roman:"XXIV",title:"留在门口的最后一封信",object:"给公众的信",kind:"letter",quote:"市场没有替你思考的义务。",scene:"最后一封信没有封口。你可以把它读完，也可以把自己的问题放进去。窗外天色稍亮，行情机仍然没有停。",story:["全书最后，拉里回到公众为何希望被告知答案。经纪人可以提供资料与观点，但佣金来自眼前交易，分析却应当考虑未来条件。原章说行情常走在实际状况前面；这里表达的是市场面向预期的特征，不能把书中的月份范围当作永远固定的提前量。今天的盈利很好，不等于未来盈利一定维持。","经纪行的乐观建议还涉及客户关系。如果建议客户卖出，客户看到股价继续涨可能抱怨；劝客户买入，短期热闹又能增加佣金。并不是每位经纪人都故意欺骗，但职业激励和客户想听的话，会影响建议怎样被包装。公众必须理解这份关系，而不是假定每句热情建议都来自相同利益。","原章还讨论内部人馈赠股份、让受益者主动向周围宣传等做法：接受了好处的人会成为股票的销售网络，宣传于是看起来像出自许多独立的朋友。对发行规模、可流通供给和信息透明度的要求，体现出拉里对市场制度责任的关心。市场教育不应该只责怪被骗的人，还应当关注创造误导的结构。","书没有在这里写出人物后半生，也没有承诺掌握这些原则的人永不失败。前面二十三件物品已经证明，经验丰富的人也会在知道原则时违背原则。最后留给读者的不是一个股票代码，而是一种责任：观察、记录、核查自己的依据，承认判断与行动之间的裂缝，并在事实改变时重新思考。"],principle:"把建议放回其来源、激励、时效与证据中评估。经验能够帮助判断，却不能消灭人的弱点。全书的逻辑从观察价格到识别自己，再到认识制度与宣传：每一层都不可由一句秘诀替代。"}],de=(i,t,e,n)=>({n:i,title:t,stage:e,steps:n.map(([s,r,a,o,l])=>({title:s,mode:r,action:a,text:o,anchor:l}))}),Sr=[de(1,"粉笔、五美元与七张粉色票据","chalk",[["报价板前的少年","trace","拖动粉笔，写下报价","十四岁的拉里替经纪行抄写报价。数字最初只是数字；他开始记住它们上涨和下跌之前的习惯。你写下的不是一句秘诀，是下一次可以检查的观察。","I · quotation-board boy / memorandum book"],["伯灵顿的第一笔交易","dispatch","把五美元送到柜台","同事带来伯灵顿的消息，他先检查自己的小册子。书中这笔小小的实际交易，让预测第一次碰到真实的钱：他得到三美元十二美分的盈利。","I · Burlington / $3.12"],["七张粉色票据","stamp","揭开票据背后的条件","在环球对赌行，他持有七张各五百股的糖业空头票据。店家提高保证金并加收不利价差。读得懂数字的人，仍会被交易制度限制。","I · seven big pink tickets / three-point margin"]]),de(2,"二十一岁，到纽约","station",[["最后的两千五百美元","drag","拉开行李箱","他来到纽约时，带着全部两千五百美元。已经赚过，也已经输过。他要靠近原始行情，以为离来源更近就能摆脱那些店家的手脚。","II · age of 21 / twenty-five hundred dollars"],["订单离开你以后","dispatch","把订单送上电报线","真实经纪行会把订单送去成交，不会只按黑板报价结算赌注。报价、指令、成交和回报之间的间隔，正在改变他的旧优势。","II · New York / execution"],["保险柜对你锁上了","dial","转动柜门的把手","为重筹本金，他又到对赌行交易。老板看穿他不是普通的输钱客户。欢迎的笑脸消失，这门生意并不欢迎一个不断兑现盈利的人。","II · Horace Kent / the safe is locked"]]),de(3,"1901年5月9日：看对，输光","ticker",[["五万美元，没有股票","examine","把钟拨到五月九日","当日清晨，他手上接近五万美元现金，没有股票。他预想恐慌先造成大跌，再产生快速反弹，认为这会是一场两头都能获利的机会。","III · morning of May ninth"],["纸带还在昨天的岸上","hold","按住行情机，让纸带吐出","纸带严重落后。你面前缓慢出现的报价，并不是交易所此刻可以成交的位置。柜台另一端的价格已经走远，纸带仍像平常一样看起来可信。","III · unusual violence / delayed quotations"],["回报终于到达","dispatch","取回实际成交回报","他判断了大方向，却输掉全部现金。镜头把两条时间线摆在一起：你看见的价格、你真正成交的价格。它们之间的空白，吞掉了账户。","III · dead right / lost every cent"]]),de(4,"同一个柜台，两封相反的电报","telegrams",[["一半人收到买入","flip","翻到第一面电报","这些近似对赌行的公司把买入消息发给一批客户，又把同一股票的卖出消息发给另一批。它们的生意不是预测准确，而是让客户行动。","IV · hundreds of telegrams"],["另一半人收到卖出","flip","翻到另一面电报","翻过纸，承诺就反过来。少量真实交易的回报可被拿来证明整家机构“正规”；更多客户并不知道自己的订单如何被处理。","IV · buy and sell the same stock"],["第三次回纽约","drag","收起电报，拉上行李箱","拉里重新筹集本金，也重新区分失败的原因：无优势时乱做、迟延报价、尚未查明的问题。资金重来，不代表方法自动成熟。","IV · third attempt / actual practice"]]),de(5,"帕特里奇不肯卖掉的位置","chair",[["办公室里最慢的人","hold","按住扶手，坐一会儿","客户们带着消息与焦虑围住老人，他却听得很耐心。这里的时间放慢，走廊里的人仍不断经过。老人看到的是牛市，而非每一次跳价。","V · Partridge / bull market"],["不是工作，是位置","examine","移开眼前的小差价","哈伍德建议他卖掉克莱马克斯汽车，回落后再买。老人担心失去持仓位置。对方把position误听成工作，笑话后面其实是一种经历过繁荣与恐慌的判断。","V · Climax Motors / lose my position"],["反弹没有给你买回的机会","scrub","让时间继续往前","年轻拉里常先拿小利润，再等一次从未到来的回落。价格继续走高，他留在场外。这段不是“永远不卖”，而是有依据的位置为何比小差价更难找回。","V · reaction that never came"]]),de(6,"联合太平洋：预感与好心","telegraph",[["地震之后，价格没有立刻跌","scrub","展开随后几天的消息","1906年大西洋城的卖空，后来碰上旧金山地震。但第一天市场并未立刻按灾情下跌。一次神秘预感的成功，不等于可重复预知灾难。","VI · San Francisco earthquake"],["萨拉托加的好心劝告","drag","接过经纪人的电报","另一段联太交易中，他原本依据强势买入，却接受经纪人的坚定劝告，放弃了自己的观察。那只手很友好，实际代价仍由他承担。","VI · Saratoga / Harding"],["提高股息，转回买入","lever","把交易杆从空头转向买入","股息消息与价格向上证明了原判断。他回补空头并买入，弥补失误。镜头随轨道转弯：独立不意味着不听意见，而是意见必须接受事实检查。","VI · dividend / cover / buy"]]),de(7,"德肯用订单检验消息","absorb",[["有人说内部人在买","dispatch","递交第一笔卖单","德肯没有马上相信“哈夫迈耶在买糖业”。他先卖出一万股。市场接得很容易，但还不足以说明承接力量有多大。","VII · Deacon / first ten thousand"],["第二笔，仍然被接住","dispatch","递交第二笔卖单","再卖一万股，股票仍在上升。他观察的不是消息传递者的表情，而是两万股被真实买盘吸收之后的价格反应。","VII · second ten thousand absorbed"],["回补，并持有多头","lever","从试探转向已被验证的方向","他回补空头，又持有一万股多头。这个案例呈现历史操作者的检验过程，并不是要求今天的读者模仿大额试单。","VII · covered / long ten thousand"]]),de(8,"风暴还没到，钱先耗尽","credit",[["资金越来越紧","dial","打开现金抽屉","拉里看到货币与信用条件恶化。抽屉的现金减少，市场却还在反弹。基本环境与行情的时间，不会为了他的观点自动对齐。","VIII · basic conditions / money"],["太早的空头","hold","握住头寸，看反弹经过","看对未来并不意味着可以无限等。每次过早操作，都消耗有限的本金。你握得更久，不能要求市场更快兑现。","VIII · premature selling"],["价格终于开始配合","scrub","等待反弹力量改变","反弹逐渐无力，卖出能够产生更明确的下行。他要让观察到的方向和可执行的起点接上，而不是一再用资金证明自己早就知道。","VIII · rallies grew feebler"]]),de(9,"1907年：借不到钱的华尔街","panic",[["游艇上的报纸","examine","打开朋友带来的报纸","佛罗里达海岸上，他已经没有股票仓位。朋友带来的强劲反弹消息，使他回到岸上重新观察。资金环境没有改善，这不是只凭标题下单。","IX · coast of Florida / newspaper"],["银行门前的恐慌","dial","沿着借款旋钮寻找现金","危机变成全市场对现金的需要。街上有股票，却没有足够承接它们的钱。纸面报价和可成交的收益，在这种时候离得更远。","IX · 1907 / money panic"],["卖空者也能成为买方","lever","停止进攻，转动回补杆","局势接近失控时，他收到不要继续扩大压力的请求，停止卖空并回补。阵营不是身份，新的市场状态决定新的行动。","IX · stop selling / cover"]]),de(10,"希望与恐惧坐反了位置","mirrors",[["推不动的棉花","hold","按住推杆，让价格尝试向上","他多次自己买入推动棉花，停下时价格就退回。镜头只追着他的力气走；周围没有独立买方。急着启动行情，使他付出约二十万美元。","X · cost two hundred thousand"],["小麦越过1.20","scrub","拖动时间，看它越过边界","他宁愿等小麦越过1.20的关键位置，而不是因为1.14便宜就下注。这里展示书中的具体例子，不把一个历史数字写成普遍公式。","X · wheat crosses $1.20"],["两面镜子交换光","scrub","移动光线，照见两种冲动","亏损时希望明天会好，盈利时却害怕利润消失。两面镜子让这些自然冲动显形：知道怎么做，和受压时真能做到，仍隔着一个人。","X · hope and fear"]]),de(11,"玉米退路与意外的皇冠","grain",[["想去钓鱼，玉米不肯放手","examine","把帆船靠近谷物码头","股票获利后，他想南下，却被一千万蒲式耳玉米空头留住。斯特拉顿的供给控制，使退出成为比理论判断更紧迫的问题。","XI · ten million bushels of corn"],["另一种谷物打开退路","dispatch","展开燕麦与玉米的关联图","书中他借燕麦下跌改变交易者对玉米的预期，随后回补。此处仅以历史因果图呈现，不作为现实市场操纵教程。","XI · oats / corn / strategic retreat"],["意外报道造出的棉花之王","flip","把报纸从皇冠下抽出来","后来的七月棉花交易中，意外报道创造了有利退出条件。公众却把它归因于精密布局。成功被戴上皇冠，偶然性藏在皇冠下面。","XI · July cotton / newspapers / unearned reputation"]]),de(12,"托马斯说服了另一双眼睛","cotton",[["一万名通信者的权威","examine","把专家报告移到眼前","托马斯学识丰富、极有说服力。拉里原本不看多棉花，渐渐却只能通过专家递来的同一页材料看市场。失去的首先不是钱，而是自己的判断。","XII · ten thousand correspondents / Thomasized"],["卖掉小麦，留下棉花","transfer","把资源从小麦移向棉花","原文里，小麦盈利，棉花亏损。他为了减轻负担，偏偏卖掉盈利的小麦，又继续买棉花。你把资源移过去，白色包裹开始遮住整间屋子。","XII · wheat profit / cotton loss"],["每天再多买一点","hold","按住购买，让棉花堆高","他继续买棉花，试图不让价格下跌，仓位约达十五万包。最刺痛的地方，是他知道这个做法违背自己长期的原则，却仍做下去。","XII · hundred and fifty thousand bales"]]),de(13,"一笔无法用钱还清的恩情","loan",[["二万五千美元的帮助","stamp","在借据上落下签名","威廉森提供二万五千美元，让他恢复一段成功交易。拉里想归还，对方却说不必急。他留下资金，也留下自己不愿违逆的人情义务。","XIII · Dan Williamson / twenty-five thousand"],["账户里出现另一双手","lever","尝试执行铁路股空头","经纪人干预切萨皮克与大西洋铁路等交易，用内部消息阻止操作。你拉动杆，另一道闸仍关着：关系的善意与交易自由发生冲突。","XIII · Chesapeake & Atlantic"],["背后的遗产","flip","翻开关系背后的账页","拉里后来把阻碍解释为威廉森保护家族遗产股票的安排。这是叙述者的回顾推断；明确发生的是，他的判断无法按自己的方式执行。","XIII · Marquand estate / narrator interpretation"]]),de(14,"六周，一百美元，保险柜","rebuild",[["先放下法律上的债务","stamp","展开债权人的解除文件","债务让他无法平静交易。破产与债权人的释放，使他重新得到精神空间。这不是无代价的逃脱；他仍把日后偿还视为自己的责任。","XIV · bankruptcy / releases"],["六周看伯利恒钢铁上涨","scrub","让六周经过，停在100","他等伯利恒钢铁首次越过100，压住急着恢复规模的冲动。书中的整数位经验是他的历史判断，不能当作今天必然有效的价格规律。","XIV · Bethlehem / crossed par / six weeks"],["把妻儿的钱锁在外面","dial","合上保障生活的柜门","1917年初还清旧债后，他安排年金与妻儿信托。门要防的不只是市场，也包括自己会挪用所有可得资金的冲动。","XIV · annuities / wife and child safe from me"]]),de(15,"咖啡合约，被另一张纸覆盖","coffee",[["战争、运输与咖啡","examine","打开港口的交付图","供给与航运支持他对咖啡的判断。但货物在海上，合约在纸上，现实交易还取决于交付与政策。一个方向并不能概括全部约束。","XV · coffee / ships"],["“保护早餐”的申诉","stamp","把政策文件盖在原合同上","对手向政府寻求干预，称他会提高公众的早餐成本。叙述者对此有强烈意见；这幅场景展示争议如何改写交易条件，不替任何一方补造完整事实。","XV · Price Fixing Committee"],["限制价格与清算期限","drag","抽出已不适用的旧合同","最高价格和结清期限改变了原来的交易环境。预想的巨额收益未兑现。愤怒无法使旧合同恢复，接下来只能面对生效的限制。","XV · maximum price / time limit"]]),de(16,"听筒里的秘密，谁在出售","phones",[["消息令人感到重要","hold","拿起听筒，听它说完","人们不只想得到消息，也想传消息：贪欲许诺轻松盈利，虚荣让人享受掌握秘密。话语很热情，来源却未必因此可靠。","XVI · greed / vanity"],["婆罗洲锡的消息链","dispatch","沿电线传递同一份纸","一份说法经过朋友、经纪行和客户，看起来像很多独立意见，可能只来自同一个源头。消息领取者转身成为销售网络。","XVI · Borneo Tin / endless-chain advertising"],["听筒背后的卖方","flip","翻到消息的利益一面","主动提供机会的人，也许需要新的买盘来出售自己持有的证券。镜头转到电话另一端：你听见的秘密，也可能是别人等待你接手的存货。","XVI · tipster-promoter"]]),de(17,"朋友记住黑猫，他记住事实","breakfast",[["早餐桌上的黑猫","examine","把猫的影子移开","朋友把及时卖出讲成黑猫的神谕。拉里认为长期积累的观察可能在意识之外继续工作。突然的决定可以有来由，不代表每次冲动都可靠。","XVII · black cat / Washington"],["钢铁继续，铜股停住","scrub","并排观察钢铁与铜股","原文中，钢铁表现支持继续增加，犹他铜却没有。他没有因为同属繁荣环境，就把“还没涨”自动理解为会补涨。","XVII · Utah Copper / U.S. Steel"],["不是报复棉花","lever","把旧亏损的标签收起来","棉花后来出现新的卖出条件，他重新行动。不因曾亏损而怨恨市场，也不因弥补损失就发明神秘能力。下一次判断仍由新事实承担。","XVII · experience and memory"]]),de(18,"153回补，156买入","reverse",[["钓鱼时传来的价格","examine","把鱼线换成报价线","热带贸易在总体弱市中表现不同。他离开钓鱼处重新观察，不让宏观结论替这只股票拒绝眼前的事实。","XVIII · fishing camp / Tropical Trading"],["承接变强，原剧本失效","lever","将杆拉到153：回补","实际买方支撑持续出现，他在153回补一万股空头。表面的总体看空，与眼前这笔局部交易，已经不能被当作一件事。","XVIII · 153 / covered 10,000"],["156之后，仍会犯错","lever","将杆推到156：买入","在156他转为做多，价格后来超过200。但他持有过久，因为以为内部人应该像他一样行动。改变立场以后，仍会替别人写剧本。","XVIII · 156 / above 200 / paper profits"]]),de(19,"被锁起来的不是股票，是钱","money",[["旧华尔街的挤压","examine","展开旧街区的档案","本章转向早年操作者的轶事。有些人曾挤压别人，又被别人反过来挤压。钱、胆量与名声都不能提供永久控制。","XIX · Drew / Vanderbilt"],["认证支票留在手里","dial","把支票锁进铁柜","转述旧事中，有人借入资金取得认证支票，减少别人能借到的钱。价格之外，依赖借款的人失去继续等待的条件。","XIX · certified check / lock up money"],["街上的人不能等了","scrub","让两个人的时钟分开","镜头追随两种时间：一个有资源等待，一个被融资期限催促。旧市场故事需要放回其时代与转述来源，不能当作今日通用剧本。","XIX · recollection / borrowed money"]]),de(20,"幕布下的证券分销","theatre",[["拉高只是第一幕","hold","拉起幕布，观察价格上升","原章把操纵放在历史证券分销中解释。高报价会吸引注意，却不能凭空造出愿意接手全部证券的人。台上价格与台下需求不是同一件事。","XX · Keene / distributing"],["回落时，公众觉得便宜","transfer","让证书从后台走向观众","基恩等案例里，主要出售发生在上涨之后的回落。公众等待反弹，持仓从原有集团转移到新买家。这里是历史供需说明，不是操作教程。","XX · selling on the way down"],["当推不动时退场","lever","松开幕后推动的手","即使是操作者，也不能取消市场反馈。买入不再产生预期效果时，继续投入只会扩大负担；安排市场的人仍会被市场否定。","XX · stop buying / quit"]]),de(21,"钢铁与石油：两种结局","industry",[["帝国钢铁的安静报价","scrub","沿钢铁厂的灯光走近","企业情况不错，股票却缺少活跃兴趣。拉里描述价格上升约三十点，累计买入约七千股；其他参与者的需求也是过程的一部分。","XXI · Imperial Steel / 30 points / seven thousand"],["石油产品没有照做","flip","把舞台转向石油储罐","石油产品公司的供给和市场状态不同。他原本拒绝，后来受人情影响接下。曾成功的动作，不能把钢铁的条件搬到另一个对象。","XXI · Petroleum Products / Prentiss"],["上涨中的纸面财富","scrub","让繁荣走到公众不愿卖的时刻","希望模糊顶点。起初觉得每个新高都太贵，后来却相信再无边界。公众先在纸上赚到的钱，可能最终仍停在纸上。","XXI · public / on paper"]]),de(22,"裁缝的股票","dressmaker",[["朋友请求的一次帮忙","stamp","展开联合炉具的委托","巴恩斯把处理股票说成人情请求。拉里有顾虑却同意。公众对新发行已接近饱和，委托人的希望无法重新制造繁荣。","XXII · Barnes / Consolidated Stove"],["承诺的资金慢慢到达","scrub","等待分批到来的支票","资金分期到达，参与者有不同利益，股票又遇上走弱的市场。内幕集团不总会按统一剧本行动，报价不替人情负责。","XXII · six millions / installments"],["裁缝一针一线等他拉高","trace","沿布料走一针","妻子的裁缝因“利文斯顿会拉高它”的消息买入。私人任务被转述成公众的收益承诺。镜头离开华尔街，落到一个普通人的工作桌。","XXII · Mrs. Livingston / dressmaker"]]),de(23,"无名的内幕人与有名的替罪羊","newspaper",[["没有名字的权威","flip","揭开报纸的署名栏","匿名内部人称盈利出色，报纸把热烈叙述送到公众眼前。说法像具有权威，却难以追问来源与责任。","XXIII · leading insider / unnamed"],["玻璃后面正在卖","scrub","擦开报道后面的玻璃","前景恶化后，内部人可以安静出售，公开解释却继续乐观。文字让公众留下，行动让另一批人离开。两条方向并不相同。","XXIII · silently sell"],["下跌被说成空头袭击","flip","把解释与实际出售并排","间隔石油的集团把价格推到50，后来继续卖出，却把下跌归罪于利文斯顿。高价买入的公众等别人受惩罚，忽略自己的处境。","XXIII · Intervale Oil / 50 / 12"]]),de(24,"最后一封信，没有买卖指令","letter",[["今天的佣金与明天的企业","examine","将两页账放在不同时间","经纪人收入来自眼前交易，市场却面向未来条件。激励未必意味着故意欺骗，却会改变建议被包装的方式。","XXIV · commissions now / business outlook"],["“好处”造出宣传者","transfer","沿人际关系递出证书","内部人赠出有利股份或机会，受益者再向周围推荐。看起来独立的热心朋友，可能组成同一条证券销售网络。","XXIV · gifts / stock-selling promoters"],["把信留在窗边","trace","沿信纸写下一道线","书没有在此讲完人物后半生，也没有许诺掌握原则后永不失败。窗外行情还在发生，你看到的，是观察、行动、自我与制度不断纠缠的一生。","XXIV · final chapter / public protection"]])],ar={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Zi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const h0=new yo(-1,1,1,-1,0,1);class u0 extends De{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}}const d0=new u0;class To{constructor(t){this._mesh=new te(d0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,h0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Pc extends Zi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ss.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new To(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ol extends Zi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class f0 extends Zi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class p0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new yt);this._width=n.width,this._height=n.height,e=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pc(ar),this.copyPass.material.blending=Pn,this.clock=new bc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ol!==void 0&&(a instanceof Ol?n=!0:a instanceof f0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class m0 extends Zi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Nt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const g0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Nt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xi extends Zi{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new yt(t.x,t.y):new yt(256,256),this.clearColor=new Nt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,a,{type:In}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new hn(r,a,{type:In});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const h=new hn(r,a,{type:In});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}const o=g0;this.highPassUniforms=Ss.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ve({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new yt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ss.clone(ar.uniforms),this.blendMaterial=new Ve({uniforms:this.copyUniforms,vertexShader:ar.vertexShader,fragmentShader:ar.fragmentShader,blending:oa,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Nt,this._oldClearAlpha=1,this._basic=new Es,this._fsQuad=new To(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new yt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new yt(.5,.5)},direction:{value:new yt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Xi.BlurDirectionX=new yt(1,0);Xi.BlurDirectionY=new yt(0,1);function _0(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new De;let c=0;for(let u=0;u<i.length;++u){const d=i[u];let h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const d=[];for(let h=0;h<i.length;++h){const f=i[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(const u in r){const d=Bl(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let v=0;v<a[u].length;++v)f.push(a[u][v][h]);const g=Bl(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Bl(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new nn(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const d=l/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){const v=u.getComponent(h,g);o.setComponent(h+d,g,v)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}const tr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class v0 extends Zi{constructor(){super(),this.uniforms=Ss.clone(tr.uniforms),this.material=new mu({name:tr.name,uniforms:this.uniforms,vertexShader:tr.vertexShader,fragmentShader:tr.fragmentShader}),this._fsQuad=new To(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===Jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$l?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===eo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Zl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const fe=i=>document.querySelector(i),Je=vs.clamp,oe=vs.lerp,Le=i=>(i=Je(i,0,1),i*i*(3-2*i)),ls={green:1588017,brass:12489297,paper:14996653},x0={uniforms:{tDiffuse:{value:null},time:{value:0},fade:{value:1}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float time;uniform float fade;varying vec2 vUv;void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;vec2 p=vUv*2.-1.;float vignette=1.-.28*dot(p,p);float noise=fract(sin(dot(vUv+time*.0001,vec2(12.9898,78.233)))*43758.5453)-.5;c*=vignette;c+=noise*.012;c=mix(c,vec3(dot(c,vec3(.299,.587,.114))),.07);gl_FragColor=vec4(c*fade,1.);}"},zl={entrance:["纽约 · 1901年5月9日","那天早晨，我有近五万美元现金，手里没有股票。","我以为，先抓住下跌，再抓住反弹，两边都能挣钱。"],dispatch:["我把一批市价卖单送进了市场。","柜台另一端，他们正在处理比平时多得多的订单。"],falling:["行情纸带还在缓慢地吐出数字。","真正的成交，已经在另一个时间里。","报价一百。等我的订单成交时，价格已到八十。"],buyDispatch:["我在原本想买入的位置，卖出了股票。","我决定回补空头，并转为买入。"],recovery:["我的指令追着市场走，纸带仍落在后面。","等买单送到场内，成交又比我预想的高了平均十五点。"],ending:["市场的下跌和反弹，都发生了。","方向看对了。我仍然失去了所有本金。","我曾把纸带当作最可靠的朋友。那天，它说的是已经过去的事。"]};class M0{constructor(t,{onExit:e}={}){this.renderer=t,this.onExit=e,this.active=!1,this.paused=!1,this.time=0,this.elapsed=0,this.ray=new Eo,this.pointer=new yt(0,0),this.aim=new yt(0,0),this.targets=[],this.actors=[],this.materials=[],this.textures=[],this.motions=[],this.sounds=!0,this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.camera=new He(54,innerWidth/innerHeight,.06,70),this.cameraPosition=new D,this.cameraLook=new D,this.desiredPosition=new D,this.desiredLook=new D,fe("#filmExit").onclick=()=>this.onExit?.(),fe("#filmPause").onclick=()=>this.setPaused(!this.paused),fe("#filmAudio").onclick=()=>{this.sounds=!this.sounds,fe("#filmAudio").textContent=this.sounds?"声音 开":"声音 关",this.audio&&(this.audio.resume(),this.ambient.gain.setTargetAtTime(this.sounds?.035:0,this.audio.currentTime,.2))}}open(){this.active=!0,this.paused=!1,this.time=0,this.elapsed=0,this.pull=0,this.flip=0,this.aim.set(0,0),this.lookX=0,this.lookY=0,this.drag=null,this.keyHeld=!1,this.held=null,this.hover=null,this.page=0,this.caption="",this.audioTick=0,this.keys=new Set,this.freeYaw=-.14,this.freePitch=-.2,this.freePos=new D(-.15,1.6,2.5),this.build(),this.state="entrance",fe("#filmHud").dataset&&(fe("#filmHud").dataset.state="entrance"),this.cameraPosition.set(0,1.65,6.8),this.cameraLook.set(0,1.4,-.7),this.camera.position.copy(this.cameraPosition),this.camera.lookAt(this.cameraLook),fe("#filmHud").hidden=!1,document.body.classList.add("in-film"),fe("#filmPause").textContent="暂停",fe("#filmTitle").textContent="1901年5月9日",fe("#filmHint").textContent="",fe("#world").setAttribute("aria-label","1901年5月9日连续三维样片：直接操作桌上的订单、行情机纸带与成交回报"),this.resize()}close(){this.active=!1,this.paused=!1,this.held=null,this.drag=null,fe("#filmHud").hidden=!0,document.body.classList.remove("in-film"),fe("#world").setAttribute("aria-label","可自由探索的三维记忆宫殿"),this.dispose(),this.audio&&this.audio.suspend()}setPaused(t){this.paused=t,this.drag=null,this.keyHeld=!1,this.keys?.clear(),fe("#filmPause").textContent=t?"继续":"暂停",fe("#filmPause").setAttribute("aria-pressed",String(t)),fe("#filmHint").textContent=t?"时间停下了。继续，或按 Esc 返回房子。":this.hint()}mat(t,e={}){const n=t+"|"+JSON.stringify({...e,map:e.map?.uuid});if(this.matCache?.has(n))return this.matCache.get(n);const s=new ci({color:t,roughness:.58,...e});return this.materials.push(s),this.matCache?.set(n,s),s}box(t,e,n,s,r,a,o,l){const c=new te(new qn(e,n,s),typeof l=="number"?this.mat(l):l);return c.position.set(r,a,o),c.castShadow=!0,c.receiveShadow=!0,t.add(c),c}cylinder(t,e,n,s,r,a,o,l=32){const c=new te(new Ki(e,e,n,l),typeof o=="number"?this.mat(o):o);return c.position.set(s,r,a),c.castShadow=!0,c.receiveShadow=!0,t.add(c),c}sphere(t,e,n,s,r,a){const o=new te(new bs(e,24,16),typeof a=="number"?this.mat(a):a);return o.position.set(n,s,r),o.castShadow=!0,t.add(o),o}canvasTexture(t,e=1024,n=768){const s=document.createElement("canvas");s.width=e,s.height=n,t(s.getContext("2d"),e,n);const r=new ur(s);return r.colorSpace=Ie,this.textures.push(r),r}print(t,{w:e=1024,h:n=768,dark:s=!1,title:r="HARDING BROTHERS",footer:a="NEW YORK · 1901"}={}){return this.canvasTexture((o,l,c)=>{o.fillStyle=s?"#16342c":"#e5d6b4",o.fillRect(0,0,l,c),o.strokeStyle=s?"#ad925c":"#8f7b53",o.lineWidth=3,o.strokeRect(38,35,l-76,c-70),o.fillStyle=s?"#e7d6ae":"#263b32",o.textAlign="center",o.font="30px Georgia",o.fillText(r,l/2,88),o.fillRect(90,112,l-180,2),o.font="48px Microsoft YaHei,serif",t.forEach((u,d)=>o.fillText(u,l/2,195+d*76,l-150)),o.font="22px Georgia",o.fillText(a,l/2,c-68)},e,n)}placard(t,e,n,s,r,a,o,l=!1){const c=this.print(e,{dark:l,h:Math.round(1024*s/n)}),u=new Es({map:c});this.materials.push(u);const d=new te(new Rn(n,s),u);return d.position.set(r,a,o),t.add(d),d}card(t,e){const n=new Xt,s=this.box(n,.46,.005,.65,0,0,0,ls.paper),r=new te(new Rn(.46,.65),new ci({map:this.print(t),roughness:.95}));r.rotation.x=-Math.PI/2,r.position.y=.004,n.add(r),r.material.emissive.setHex(16777215),r.material.emissiveMap=r.material.map,r.material.emissiveIntensity=.14;const a=new te(new Rn(.46,.65),new ci({map:this.print(e),roughness:.95}));return a.rotation.x=Math.PI/2,a.position.y=-.004,n.add(a),a.material.emissive.setHex(16777215),a.material.emissiveMap=a.material.map,a.material.emissiveIntensity=.14,this.materials.push(r.material,a.material),n.userData.edge=s,n}target(t,e){return t.traverse(n=>n.userData.filmTarget=e),this.targets.push(t),t.userData.id=e,t}woodTexture(){return this.canvasTexture((t,e,n)=>{t.fillStyle="#523724",t.fillRect(0,0,e,n);for(let s=0;s<850;s++){const r=s*n/850;t.strokeStyle=s%4?"#20140a22":"#e6a56015",t.lineWidth=.5+s%3,t.beginPath(),t.moveTo(0,r);for(let a=0;a<=e;a+=32)t.lineTo(a,r+Math.sin(a*.007+s)*3);t.stroke()}},512,512)}build(){this.scene=new fo,this.scene.background=new Nt(1057570),this.scene.fog=new _r(1321768,.026),this.targets=[],this.actors=[],this.materials=[],this.textures=[],this.motions=[],this.matCache=new Map,this.lastTapePrice=null,this.lastWidth=0;const t=this.scene,e=this.mat(12100490,{map:this.woodTexture()}),n=this.mat(ls.brass,{metalness:.72,roughness:.28}),s=this.mat(ls.green),r=this.mat(ls.paper);this.brass=n,this.wood=e,this.scene.add(new So(10995664,3416341,1.05)),this.sun=new bu(16766624,3.4),this.sun.position.set(-4,7,-12),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.camera.left=-9,this.sun.shadow.camera.right=9,this.sun.shadow.camera.top=9,this.sun.shadow.camera.bottom=-9,this.sun.shadow.normalBias=.03,t.add(this.sun),this.lampLight=new Wi(16757851,6,8,2),this.lampLight.position.set(-.8,1.9,.1),t.add(this.lampLight);const a=new Wi(8300988,30,12,2);a.position.set(3,3,-4),t.add(a);for(let d=-7;d<7;d+=.42)this.box(t,12,.1,.4,0,-.06,d,e);this.box(t,12,1.65,.25,0,.8,-7,s),this.box(t,12,.65,.25,0,4.7,-7,s);for(const d of[-5.8,-1.9,1.9,5.8])this.box(t,.65,3.2,.25,d,3,-7,s);this.box(t,.25,5,14,6,2.45,0,s),this.box(t,.25,5,14,-6,2.45,0,s),this.box(t,12,.2,14,0,5,0,2571317);for(const d of[-5.9,5.9]){this.box(t,.08,1.2,14,d,.6,0,e);for(let h=-6;h<=6;h+=1.4)this.box(t,.09,1.15,.035,d,.62,h,n)}for(let d=-5;d<6;d+=1.5)this.box(t,.08,1.2,.06,d,.6,-6.82,n);this.box(t,11.7,.07,.06,0,1.25,-6.8,n);for(let d=0;d<3;d++){const h=-3.8+d*3.8,f=this.box(t,2.4,2.35,.11,h,3,-6.66,this.mat(9088689,{transparent:!0,opacity:.14,roughness:.05}));f.castShadow=!1;for(const g of[-1.3,0,1.3])this.box(t,.065,2.7,.16,h+g,3,-6.58,e);for(const g of[1.7,3,4.3])this.box(t,2.65,.055,.16,h,g,-6.58,e)}for(let d=0;d<18;d++){const h=(d-8.5)*1.3,f=2.2+d*7%9*.4;this.box(t,1.08,f,.8,h,f/2,-9-d%3,5072483);for(let g=.5;g<f;g+=.55)for(const v of[-.27,.27])this.box(t,.18,.25,.03,h+v,g,-8.55-d%3,12498074)}this.door=new Xt,this.door.position.set(-2.5,0,5.5),t.add(this.door),this.box(this.door,1.5,2.9,.15,.75,1.45,0,e),this.sphere(this.door,.06,1.32,1.35,-.13,n),this.target(this.door,"door"),this.door.rotation.y=-.15,this.box(t,8,1.2,.9,0,.6,-3,e),this.box(t,8.25,.12,1.08,0,1.22,-3,e);for(let d=-3.5;d<4;d+=.7)this.box(t,.035,1.1,.035,d,.58,-2.52,n);this.box(t,3,.13,1.4,0,.95,.2,e);for(const d of[-1.28,1.28])for(const h of[-.32,.72])this.box(t,.09,.9,.09,d,.45,h,e);this.box(t,1,.012,1.15,.12,1.022,.22,this.mat(1390381,{roughness:.95})),this.slot=new Xt,this.slot.position.set(.38,1.28,-2.35),t.add(this.slot),this.box(this.slot,1,.1,.65,0,0,0,e),this.box(this.slot,.86,.012,.5,0,.06,0,n),this.placard(this.slot,["订单"],.62,.3,0,.23,-.12),this.target(this.slot,"slot");const o=new Xt;o.position.set(-.8,1.02,.05),t.add(o),this.cylinder(o,.18,.055,0,0,0,n),this.cylinder(o,.03,.68,0,.36,0,n);const l=new te(new _o(.3,.25,32,1,!0),this.mat(2643270,{side:tn}));l.rotation.x=Math.PI,l.position.set(0,.71,0),o.add(l),this.sellCard=this.card(["市价卖出","不限定成交价格","先抓住下跌"],["五月九日 · 上午","现金近五万美元","手中没有股票"]),this.sellCard.position.set(.12,1.072,.3),this.sellCard.rotation.y=-.16,t.add(this.sellCard),this.target(this.sellCard,"sell"),this.buyCard=this.card(["回补空头","随后转为买入","市价指令"],["我以为八十附近","已是可以买入的低位","市场不会一直下跌"]),this.buyCard.position.set(.12,1.08,.3),this.buyCard.visible=!1,t.add(this.buyCard),this.target(this.buyCard,"buy"),this.receipt=this.card(["卖出成交回报","实际成交：八十","原书解释性价格示例"],["纸带显示：一百","实际卖出：八十","晚了二十点"]),this.receipt.position.set(.65,1.07,.55),this.receipt.visible=!1,t.add(this.receipt),this.target(this.receipt,"receipt1"),this.receipt2=this.card(["买入成交回报","成交比预期高","平均十五点"],["两次指令追赶行情","原书叙述：一天损失三十五点","本金全部失去"]),this.receipt2.position.set(.4,1.08,.55),this.receipt2.visible=!1,t.add(this.receipt2),this.target(this.receipt2,"receipt2"),this.book=new Xt,this.book.position.set(-.8,1.07,.55),this.book.rotation.y=.12,t.add(this.book),this.box(this.book,.5,.035,.65,0,0,0,s),this.bookPage=this.placard(this.book,["五月九日","拉里 · 利文斯顿"],.46,.62,0,.023,0),this.bookPage.rotation.x=-Math.PI/2,this.target(this.book,"book"),this.buildTicker(r,n),this.buildBoard(),this.buildClock();for(let d=0;d<5;d++)this.actors.push(this.person(d-2,0,-4.2,d));this.actors.push(this.person(-4.3,0,1.6,5)),this.actors.push(this.person(4.5,0,-.2,6)),this.courier=this.person(2.65,0,-2.15,7),this.actors.push(this.courier),this.hand=this.buildHand(),this.camera.add(this.hand),this.scene.add(this.camera);const c=new De,u=[];for(let d=0;d<160;d++)u.push(d*37%100/10-5,d*17%100/22,d*29%100/8-6);c.setAttribute("position",new me(u,3)),this.dust=new go(c,new vr({color:16044185,size:.014,transparent:!0,opacity:.22,depthWrite:!1})),t.add(this.dust),this.mergeArchitecture(),this.renderer.isWebGLRenderer&&(this.fpsStart=performance.now(),this.fpsFrames=0,this.savedPixelRatio=this.renderer.getPixelRatio(),this.renderer.setPixelRatio(Math.min(this.savedPixelRatio,innerWidth<650?1.25:1.5)),this.savedShadow=this.renderer.shadowMap.enabled,this.renderer.shadowMap.enabled=!0,this.composer=new p0(this.renderer),this.composer.addPass(new m0(t,this.camera)),this.bloom=new Xi(new yt(innerWidth,innerHeight),.22,.5,.82),this.composer.addPass(this.bloom),this.grade=new Pc(x0),this.composer.addPass(this.grade),this.composer.addPass(new v0))}mergeArchitecture(){const t=new Map;for(const e of this.scene.children){if(!e.isMesh||e===this.tape||this.paperLoops.includes(e))continue;const n=e.material.uuid+e.castShadow;t.has(n)||t.set(n,[]),t.get(n).push(e)}for(const e of t.values()){if(e.length<2)continue;const n=e.map(a=>(a.updateMatrix(),a.geometry.clone().applyMatrix4(a.matrix))),s=_0(n,!1);if(!s){n.forEach(a=>a.dispose());continue}const r=new te(s,e[0].material);r.castShadow=e[0].castShadow,r.receiveShadow=!0,this.scene.add(r);for(const a of e)this.scene.remove(a),a.geometry.dispose();n.forEach(a=>a.dispose())}}buildTicker(t,e){const n=new Xt;n.position.set(1.2,1.02,.05),this.scene.add(n),this.machine=n,this.cylinder(n,.28,.08,0,0,0,e),this.cylinder(n,.09,.2,0,.12,0,e),this.cylinder(n,.19,.1,0,.28,0,e);for(const r of[-.12,.12])this.cylinder(n,.025,.35,r,.29,.02,e);this.wheel=this.cylinder(n,.14,.08,0,.42,0,e),this.wheel.rotation.x=Math.PI/2,this.cylinder(n,.012,.25,0,.42,.01,e).rotation.z=Math.PI/2;const s=this.sphere(n,.29,0,.32,0,this.mat(12114640,{transparent:!0,opacity:.12,roughness:.08,metalness:.12}));s.scale.y=1.1,this.tapeCanvas=document.createElement("canvas"),this.tapeCanvas.width=256,this.tapeCanvas.height=2048,this.tapeContext=this.tapeCanvas.getContext("2d"),this.tapeTexture=new ur(this.tapeCanvas),this.tapeTexture.colorSpace=Ie,this.tapeTexture.wrapT=or,this.textures.push(this.tapeTexture),this.tapeMaterial=new ci({map:this.tapeTexture,side:tn,roughness:1}),this.materials.push(this.tapeMaterial),this.tapeGeometry=new Rn(.12,1.4,1,65),this.tape=new te(this.tapeGeometry,this.tapeMaterial),this.tape.position.set(1.18,1.44,.05),this.scene.add(this.tape),this.target(this.tape,"tape"),this.grip=this.sphere(this.scene,.16,1.18,1.28,.6,this.mat(16777215,{transparent:!0,opacity:0,depthWrite:!1})),this.grip.castShadow=!1,this.target(this.grip,"tape"),this.paperLoops=[];for(let r=0;r<8;r++){const a=new te(new xr(.16+r*.016,.009,8,48,Math.PI*1.8),this.mat(ls.paper));a.position.set(1.02+Math.sin(r)*.15,.12+r*.027,1.1+r*.06),a.rotation.set(.7+r*.21,r*.19,.4),this.scene.add(a),this.paperLoops.push(a)}this.paintTape(100)}paintTape(t){const e=this.tapeContext;e.fillStyle="#e8dcbf",e.fillRect(0,0,256,2048),e.fillStyle="#273b31",e.font="30px Georgia",e.textAlign="center";for(let n=0;n<24;n++)e.fillText("N.Y.  "+String(t-n%3),128,75+n*84),e.fillRect(24,98+n*84,208,1);this.tapeTexture.needsUpdate=!0}buildBoard(){this.board=new Xt,this.board.position.set(-4.95,2.3,-2),this.board.rotation.y=Math.PI/2.9,this.scene.add(this.board),this.box(this.board,2.9,1.7,.13,0,0,0,this.wood),this.boardDisplay=this.placard(this.board,["交易所 · 此刻","市场正在开盘"],2.7,1.5,0,0,.09,!0),this.boardLast=""}setBoard(t){const e=t.join("|");if(this.boardLast===e)return;this.boardLast=e;const n=this.boardDisplay.material.map,s=this.print(t,{dark:!0,h:570,title:"STOCK EXCHANGE",footer:"价格为原书解释性示例"});this.boardDisplay.material.map=s,n&&(n.dispose(),this.textures=this.textures.filter(r=>r!==n))}buildClock(){const t=new Xt;t.position.set(3.7,3.85,-6.45),this.scene.add(t),this.cylinder(t,.42,.12,0,0,0,this.brass).rotation.x=Math.PI/2,this.clockFace=this.placard(t,["Ⅻ","Ⅸ      Ⅲ","Ⅵ"],.76,.76,0,0,.085),this.clockLong=this.box(t,.018,.32,.025,0,.13,.11,1976609),this.clockShort=this.box(t,.025,.21,.025,0,.085,.13,1976609)}person(t,e,n,s){const r=new Xt;r.position.set(t,e,n),this.scene.add(r);const a=this.mat(s%2?2503471:3619637),o=this.mat(s%2?11043684:11965815),l=this.mat(14471089);this.box(r,.43,.62,.24,0,1.12,0,a),this.box(r,.13,.36,.25,0,1.22,.018,l),this.box(r,.055,.3,.026,0,1.2,.155,4072990);const c=this.sphere(r,.13,0,1.62,0,o);c.scale.set(.84,1.1,.82),this.sphere(r,.13,0,1.69,-.015,this.mat(2695709)).scale.set(1,.47,1),this.box(r,.065,.07,.07,0,1.61,.11,o);for(const h of[-.045,.045])this.sphere(r,.012,h,1.65,.106,this.mat(3156514));const u=[],d=[];for(const h of[-1,1]){const f=new Xt;f.position.set(h*.25,1.36,0),r.add(f),this.box(f,.12,.3,.13,0,-.14,0,a);const g=new Xt;g.position.y=-.3,f.add(g),this.box(g,.11,.28,.12,0,-.13,0,a),this.sphere(g,.066,0,-.3,0,o),u.push({arm:f,fore:g});const v=new Xt;v.position.set(h*.115,.8,0),r.add(v),this.box(v,.15,.73,.17,0,-.35,0,a),this.box(v,.17,.09,.29,0,-.73,.045,1515291),d.push(v)}return{root:r,arms:u,legs:d,head:c,seed:s,base:new D(t,e,n)}}buildHand(){const t=new Xt,e=this.mat(11965554),n=this.mat(14734520),s=this.mat(2635823);this.box(t,.17,.35,.15,0,-.25,0,s),this.box(t,.18,.07,.15,0,-.045,0,n),this.sphere(t,.105,0,.04,0,e).scale.set(.8,1,.45),this.fingers=[];for(let r=0;r<4;r++){const a=new Xt;a.position.set(-.06+r*.04,.095,-.015),t.add(a),this.cylinder(a,.017,.09,0,.045,0,e,12);const o=this.cylinder(a,.015,.065,0,.105,.018,e,12);o.rotation.x=.5,this.fingers.push(a)}return this.sphere(t,.035,-.095,.03,.035,e).scale.y=1.5,t.position.set(.26,-.5,-.65),t.visible=!1,t}resize(){this.lastWidth===innerWidth&&this.lastHeight===innerHeight||(this.lastWidth=innerWidth,this.lastHeight=innerHeight,this.camera.aspect=innerWidth/innerHeight,this.camera.fov=innerWidth<600?65:54,this.camera.updateProjectionMatrix(),this.composer&&this.composer.setSize(innerWidth,innerHeight))}hit(t,e){return this.pointer.set(t/innerWidth*2-1,-e/innerHeight*2+1),this.ray.setFromCamera(this.pointer,this.camera),this.ray.intersectObjects(this.targets,!0).find(s=>{let r=s.object;for(;r;){if(!r.visible||["holdingSell","holdingBuy"].includes(this.state)&&r===this.held)return!1;r=r.parent}return!0})?.object.userData.filmTarget||null}actionable(t){return{order:["sell"],holdingSell:["slot"],tape:["tape"],receipt:["receipt1"],inspectSell:["receipt1"],buy:["buy"],holdingBuy:["slot"],receiptBuy:["receipt2"],inspectBuy:["receipt2"],epilogue:["book","door"],book:["book","door"]}[this.state]?.includes(t)}pointerDown(t,e){if(this.paused)return;this.initAudio();const n=this.hit(t,e);if(this.drag={x:t,y:e,lastX:t,lastY:e,id:n,total:0},this.state==="book"&&!n){this.putBook();return}this.actionable(n)&&(n==="sell"?(this.pick(this.sellCard),this.setState("holdingSell")):n==="buy"?(this.pick(this.buyCard),this.setState("holdingBuy")):n==="slot"&&this.held?this.deliver():n==="receipt1"&&this.state==="receipt"?(this.pick(this.receipt),this.flip=0,this.setState("inspectSell")):n==="receipt2"&&this.state==="receiptBuy"?(this.pick(this.receipt2),this.flip=0,this.setState("inspectBuy")):n==="book"?this.state==="epilogue"?(this.pick(this.book),this.setState("book"),this.showBook(0)):this.showBook((this.page+1)%4):n==="door"&&this.onExit?.())}pointerMove(t,e){if(this.aim.set(Je(t/innerWidth*2-1,-1,1),Je(e/innerHeight*2-1,-1,1)),this.paused)return;if(this.drag){const s=t-this.drag.lastX,r=e-this.drag.lastY;if(this.drag.total+=Math.hypot(s,r),this.drag.lastX=t,this.drag.lastY=e,this.state==="tape"&&this.drag.id==="tape")this.pull=Je(this.pull+(Math.abs(r)+Math.abs(s)*.45)/(innerHeight*.38),0,1),this.pull>.94&&this.setState("falling");else if(["inspectSell","inspectBuy"].includes(this.state))this.flip=Je(this.flip+(Math.abs(s)+Math.abs(r)*.5)/(innerWidth*.42),0,1),this.flip>.93&&this.inspected();else if(!this.held){if(this.state==="epilogue"){this.freeYaw-=s*.003,this.freePitch=Je(this.freePitch-r*.002,-.65,.65);return}this.lookX=Je(this.lookX-s*.003,-.62,.62),this.lookY=Je(this.lookY+r*.002,-.22,.22)}}const n=this.hit(t,e);this.hover=this.actionable(n)?n:null,fe("#world").style.cursor=this.hover?this.drag?"grabbing":"grab":"default"}pointerUp(t,e){if(this.paused){this.drag=null;return}["holdingSell","holdingBuy"].includes(this.state)&&this.hit(t,e)==="slot"&&this.deliver(),this.drag=null}keyDown(t){if(this.state==="epilogue"&&["KeyW","KeyA","KeyS","KeyD"].includes(t.code)){t.preventDefault(),this.keys.add(t.code);return}if(t.code==="Space"&&this.state==="book"){t.preventDefault(),this.putBook();return}if(t.code==="Escape"){this.onExit?.();return}if(t.code==="KeyP"){t.preventDefault(),this.setPaused(!this.paused);return}if(!this.paused){if(t.code==="KeyE"||t.code==="Space"){if(t.preventDefault(),this.keyHeld=!0,t.repeat)return;if(this.initAudio(),["holdingSell","holdingBuy"].includes(this.state))this.deliver();else if(this.state!=="tape"){if(!["inspectSell","inspectBuy"].includes(this.state))if(this.state==="book")this.showBook((this.page+1)%4);else{const e={order:"sell",receipt:"receipt1",buy:"buy",receiptBuy:"receipt2",epilogue:"book"}[this.state];e&&this.activateById(e)}}}t.code==="KeyR"&&this.state==="epilogue"&&(this.dispose(),this.open())}}activateById(t){t==="sell"&&(this.pick(this.sellCard),this.setState("holdingSell")),t==="buy"&&(this.pick(this.buyCard),this.setState("holdingBuy")),t==="receipt1"&&(this.pick(this.receipt),this.flip=0,this.setState("inspectSell")),t==="receipt2"&&(this.pick(this.receipt2),this.flip=0,this.setState("inspectBuy")),t==="book"&&(this.pick(this.book),this.setState("book"),this.showBook(0))}pick(t){this.flip=0,this.scene.attach(t),this.held=t,this.heldStart=t.position.clone(),this.pickTime=this.time,this.hand.visible=!0,this.tick(170,.08,.08)}release(){this.held&&(this.held.visible=!1,this.held=null),this.hand.visible=!1}deliver(){this.held&&(this.deliverObject=this.held,this.deliverStart=this.held.position.clone(),this.held=null,this.hand.visible=!1,this.setState(this.state==="holdingSell"?"dispatch":"buyDispatch"),this.tick(105,.12,.1))}inspected(){this.state==="inspectSell"?this.setState("sellRevelation"):this.state==="inspectBuy"&&this.setState("ending"),this.tick(95,.12,.07)}setState(t){this.state=t,fe("#filmHud").dataset&&(fe("#filmHud").dataset.state=t),this.time=0,this.lookX=0,this.lookY=0,["holdingSell","holdingBuy","inspectSell","inspectBuy"].includes(t)||(this.drag=null),fe("#filmHint").textContent=this.hint(),t==="receipt"&&(this.receipt.visible=!0),t==="buy"&&(this.release(),this.buyCard.visible=!0),t==="receiptBuy"&&(this.receipt2.visible=!0),t==="epilogue"&&(this.release(),this.setBoard(["五月九日","收盘以后"])),this.cameraPath=null}hint(){return{order:"拿起桌上的卖单 · 鼠标或 E",holdingSell:"把手里的订单送到柜台铜盘 · 拖过去，或按 E",tape:"握住行情机伸出的纸带，向自己拉 · 也可按住 E",receipt:"柜台送来回报单。拿起它。",inspectSell:"手里这张纸还有另一面 · 拖动翻转，或按 E",buy:"桌上出现了新的指令。拿起它。",holdingBuy:"把回补与买入指令送到柜台铜盘",receiptBuy:"第二张回报到了。拿起来。",inspectBuy:"翻到另一面，看看这一天留下什么",epilogue:"桌上账册可以翻阅；拖动环顾，WASD 走动。门可以离开。R 重走这一天。",book:"点击账册翻页 · 或按 E。点桌面或空格放回。"}[this.state]||""}putBook(){this.held=null,this.hand.visible=!1,this.book.position.set(-.8,1.07,.55),this.book.rotation.set(0,.12,0),this.book.scale.setScalar(1),this.setState("epilogue")}showBook(t){this.page=t;const e=[["原书第三章 · 转述","清晨，近五万美元现金。","他先按市价卖出股票。","纸带严重落后于交易所。"],["一百与八十","原书用这两个数解释偏差。","不是某只股票的逐笔复原。","卖出已发生在计划买入的低位。"],["回补，再转为买入","新指令成交又比预想高十五点。","原书叙述一天损失三十五点。","判断方向不能消除执行偏差。"],["小说化叙述者：拉里","依据 Edwin Lefèvre，1923","第三章 / morning of May ninth","场景、动作与旁白为原创改编。"]],n=this.bookPage.material.map;this.bookPage.material.map=this.print(e[t],{title:"REMINISCENCES · III"}),n&&(n.dispose(),this.textures=this.textures.filter(s=>s!==n)),this.tick(220,.055,.035)}initAudio(){if(this.audio){this.sounds&&this.audio.resume();return}if(!(!this.sounds||typeof window>"u"))try{this.audio=new(window.AudioContext||window.webkitAudioContext);const t=this.audio.sampleRate*2,e=this.audio.createBuffer(1,t,this.audio.sampleRate),n=e.getChannelData(0);let s=0;for(let a=0;a<t;a++)s=(s+Math.random()*.08-.04)*.98,n[a]=s;this.noise=this.audio.createBufferSource(),this.noise.buffer=e,this.noise.loop=!0;const r=this.audio.createBiquadFilter();r.type="lowpass",r.frequency.value=400,this.ambient=this.audio.createGain(),this.ambient.gain.value=.035,this.noise.connect(r).connect(this.ambient).connect(this.audio.destination),this.noise.start(),this.audio.resume()}catch{}}tick(t=210,e=.025,n=.015){if(!this.audio||!this.sounds||this.paused)return;const s=this.audio.createOscillator(),r=this.audio.createGain();s.type="triangle",s.frequency.setValueAtTime(t,this.audio.currentTime),s.frequency.exponentialRampToValueAtTime(t*.45,this.audio.currentTime+e),r.gain.setValueAtTime(n,this.audio.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,this.audio.currentTime+e),s.connect(r).connect(this.audio.destination),s.start(),s.stop(this.audio.currentTime+e)}narration(){let t="",e=this.state,n=this.time;if(zl[e]){const s={entrance:8,dispatch:9,falling:15,buyDispatch:9,recovery:15,ending:15}[e],r=zl[e];t=r[Math.min(r.length-1,Math.floor(n/(s/r.length)))]}else t={order:"纸上的计划看起来很清楚：先卖出，再在下跌后买回来。",tape:"我仍然相信纸带。它的数字，曾经让我一次次挣到钱。",receipt:"我的第一批卖单，终于有了回报。",inspectSell:"“一百”还在纸带上。回报却写着“八十”。",sellRevelation:"我卖空的位置，已经是我原本计划买入的低位。",buy:"我立即改变方向：回补，并转为买入。",receiptBuy:"另一张迟到的纸，从柜台递到了桌上。",inspectBuy:"当指令真正成交时，买入又比预想的高了十五点。",epilogue:"我看对了那一天的市场。却还没学会看清自己所处的时间。",book:""}[e]||"";t!==this.caption&&(this.caption=t,fe("#filmCaption").textContent=t)}update(t){this.active&&(this.resize(),!this.paused&&t>0&&(this.time+=t,this.elapsed+=t,this.updateState(t),this.updateScene(t),this.narration()),this.render())}keyUp(t){this.keys?.delete(t.code),(t.code==="KeyE"||t.code==="Space")&&(this.keyHeld=!1)}updateState(t=1/60){this.keyHeld&&this.state==="tape"&&(this.pull=Math.min(1,this.pull+t*.6),this.pull>.94&&this.setState("falling")),this.keyHeld&&["inspectSell","inspectBuy"].includes(this.state)&&(this.flip=Math.min(1,this.flip+t*.65),this.flip>.94&&this.inspected());const e=this.state,n=this.time,s={entrance:8,dispatch:9,falling:15,sellRevelation:6,buyDispatch:9,recovery:15,ending:15},r={entrance:"order",dispatch:"tape",falling:"receipt",sellRevelation:"buy",buyDispatch:"recovery",recovery:"receiptBuy",ending:"epilogue"};s[e]&&n>=s[e]&&this.setState(r[e])}cameraPose(){const t=this.state,e=this.time;let n=[0,1.6,3.4],s=[.15,1.1,.1];if(t==="entrance"){const r=Le(e/8);n=[oe(0,-.15,r),1.64,oe(6.8,2.4,r)],s=[.12,oe(1.5,1.13,r),.25],this.door.rotation.y=oe(-.15,-1.5,Le(e/2))}if(["order","holdingSell","buy","holdingBuy"].includes(t)&&(n=[-.08,1.62,2.4],s=[.12,1.07,.15]),["dispatch","buyDispatch"].includes(t)){const r=Le(e/7);n=[oe(-.08,.55,r),1.65,oe(2.4,.2,r)],s=[.35,1.45,-3.2]}if(t==="tape"&&(n=[1,1.55,1.8],s=[1.15,1.07,.35]),t==="falling"){const r=Le(e/15);n=[oe(1,-1.25,r),oe(1.55,1.72,r),oe(1.8,2.2,r)],s=[oe(1.15,-2.4,r),oe(1.07,2.05,r),oe(.35,-2,r)]}if(["receipt","receiptBuy"].includes(t)&&(n=[.12,1.5,1.65],s=[.55,1.07,.55]),["inspectSell","inspectBuy","sellRevelation","book"].includes(t)&&(n=[.12,1.62,2.25],s=[.2,1.36,.3]),t==="recovery"){const r=Le(e/15);n=[oe(.55,-.3,r),1.7,oe(.2,2.6,r)],s=[oe(.3,-3.8,r),oe(1.45,2.3,r),-2.4]}if(t==="ending"){const r=Le(e/15);n=[.12,1.62,oe(2.25,4.7,r)],s=[.18,1.18,.2]}t==="epilogue"&&(n=this.freePos.toArray(),s=[n[0]+Math.sin(this.freeYaw)*Math.cos(this.freePitch)*3,n[1]+Math.sin(this.freePitch)*3,n[2]-Math.cos(this.freeYaw)*Math.cos(this.freePitch)*3]),this.desiredPosition.set(...n),this.desiredLook.set(...s),this.desiredLook.x+=this.lookX*1.8,this.desiredLook.y+=this.lookY}updateScene(t){if(this.state==="epilogue"){const u=(this.keys.has("KeyS")?1:0)-(this.keys.has("KeyW")?1:0),d=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),h=t*1.7/(Math.hypot(d,u)||1),f=Je(this.freePos.x+(d*Math.cos(this.freeYaw)-u*Math.sin(this.freeYaw))*h,-5.2,5.2),g=Je(this.freePos.z+(d*Math.sin(this.freeYaw)+u*Math.cos(this.freeYaw))*h,-2.2,5.2);Math.abs(f)<1.65&&this.freePos.z>-.55&&this.freePos.z<1.05||(this.freePos.x=f),Math.abs(this.freePos.x)<1.65&&g>-.55&&g<1.05||(this.freePos.z=g)}const e=this.state,n=this.time,s=["falling","receipt","inspectSell","sellRevelation","buy","holdingBuy","buyDispatch","recovery","receiptBuy","inspectBuy","ending"].includes(e);this.cameraPose();const r=1-Math.exp(-t*3.4);this.cameraPosition.lerp(this.desiredPosition,r),this.cameraLook.lerp(this.desiredLook,r),this.camera.position.copy(this.cameraPosition),this.camera.lookAt(this.cameraLook),this.wheel.rotation.z+=t*(s?11:3.5),this.clockLong.rotation.z=-this.elapsed*.025,this.clockShort.rotation.z=-this.elapsed*.003;const a=this.tapeGeometry.attributes.position;for(let u=0;u<a.count;u++){const d=u%2?.06:-.06,h=Math.floor(u/2)/65,f=1.3+this.pull*.65;a.setXYZ(u,d+Math.sin(h*Math.PI)*.035,-Math.pow(h,3)*1.3+Math.sin(h*Math.PI*2+this.elapsed*1.5)*.018,h*f)}a.needsUpdate=!0,this.tapeGeometry.computeVertexNormals(),this.tapeGeometry.computeBoundingSphere(),this.tape.rotation.x=0,this.tapeMaterial.map.offset.y=this.elapsed*(s?.018:.008)%1,this.paperLoops.forEach((u,d)=>{u.rotation.z+=t*.03;const h=s?Je(n/15,0,1):0;u.scale.setScalar(1+h*.45)});for(const u of this.actors){const d=s?2.8:1.1,h=this.elapsed*d+u.seed,f=u.seed>=4;u.root.position.x=u.base.x+(f?Math.sin(h*.5)*(s?.75:.35):Math.sin(h*.4)*.035),u.root.position.y=Math.sin(h*2)*(f?.017:.004),u.root.rotation.y=f?Math.sin(h*.5)*.5:Math.sin(h*.2)*.1,u.head.rotation.y=Math.sin(h*.7)*.15;for(let g=0;g<2;g++)u.legs[g].rotation.x=f?Math.sin(h+g*Math.PI)*.28:0,u.arms[g].arm.rotation.x=f?Math.sin(h+g*Math.PI)*.25:-.5+Math.sin(h)*.1,u.arms[g].fore.rotation.x=-.35-Math.sin(h+g)*.25;u.seed===2&&["dispatch","buyDispatch"].includes(e)&&(u.arms[0].arm.rotation.x=-Le(n/3)*1.35,u.arms[0].fore.rotation.x=-.65)}if(["falling","recovery"].includes(e)&&n>9){const u=Le((n-9)/5.6),d=this.courier;d.root.position.lerpVectors(d.base,new D(.95,0,.38),u),d.root.rotation.y=Math.PI,d.arms[0].arm.rotation.x=-.85,d.arms[0].fore.rotation.x=-.7;const h=e==="falling"?this.receipt:this.receipt2;h.visible=!0,h.position.set(oe(2.5,.65,u),oe(1.28,1.08,Le((n-12.5)/2.2)),oe(-1.85,.55,u)),h.rotation.x=oe(-.9,0,Le((n-12.5)/2.2))}if(["receipt","receiptBuy"].includes(e)){const u=this.courier;u.root.position.lerpVectors(new D(.95,0,.38),u.base,Le(n/4)),u.root.rotation.y=0}if(this.held){Le(this.time/.65);const u=["inspectSell","inspectBuy","sellRevelation","ending","book"].includes(e),d=innerWidth<600?.7:u?1.02:.68,h=.85*Math.tan(this.camera.fov*Math.PI/360)*this.camera.aspect,f=u?0:Math.min(.34,Math.max(.035,h-d*.23-.04)),g=new D(Je(f+this.aim.x*.06,-Math.max(.01,h-d*.23-.025),Math.max(.01,h-d*.23-.025)),-.08-this.aim.y*.04,-.85);this.camera.localToWorld(g),this.held.position.lerp(g,1-Math.exp(-t*8)),this.held.quaternion.copy(this.camera.quaternion),this.held.rotateX(Math.PI/2),this.held.rotateZ(this.flip*Math.PI),this.held.scale.setScalar(d),this.hand.position.set(f+(u?.21:.13)+this.aim.x*.04,-.36-this.aim.y*.025,-.81),this.hand.rotation.z=this.flip*.16,this.fingers.forEach(v=>v.rotation.x=-.45)}if(this.deliverObject&&["dispatch","buyDispatch"].includes(e)){const u=Le(n/1.9);this.deliverObject.position.lerpVectors(this.deliverStart,new D(.38,1.4,-2.35),u),this.deliverObject.rotation.x=-u*.08,this.deliverObject.rotation.z=u*.1,n>2.3&&(this.deliverObject.visible=!1)}const o=e==="falling"?Math.round(oe(100,80,Le(n/8))):["recovery","receiptBuy","inspectBuy","ending","epilogue","book"].includes(e)?Math.round(oe(80,95,e==="recovery"?Le(n/9):1)):100;this.setBoard(["交易所 · 此刻",String(o)]);const l=["recovery","receiptBuy","inspectBuy","ending","epilogue","book"].includes(e)?80:100;this.lastTapePrice!==l&&(this.lastTapePrice=l,this.paintTape(l)),this.sun.intensity=oe(this.sun.intensity,e==="ending"?.65:s?1.8:3.4,t*.5),this.lampLight.intensity=oe(this.lampLight.intensity,s?4:6,t),this.dust.rotation.y=this.elapsed*.003,this.grade&&(this.grade.uniforms.time.value=this.elapsed,this.grade.uniforms.fade.value=e==="entrance"?Le(n/1.8):e==="ending"?1-Le((n-9)/6)*.36:1),this.audioTick+=t,this.audioTick>(s?.13:.38)&&(this.audioTick=0,this.tick(s?320:230,.025,.012));for(const u of[this.sellCard,this.buyCard,this.receipt,this.receipt2]){const d=this.hover===u.userData.id;u.traverse(h=>{h.material?.emissiveMap&&(h.material.emissiveIntensity=d?.26:.14)})}const c=this.hint();fe("#filmHint").textContent!==c&&(fe("#filmHint").textContent=c)}render(){if(this.renderer.isWebGLRenderer){this.fpsFrames++;const t=performance.now();t-this.fpsStart>1500&&(fe("#filmHud").dataset.fps=String(Math.round(this.fpsFrames*1e3/(t-this.fpsStart))),this.fpsStart=t,this.fpsFrames=0)}this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}dispose(){if(this.composer){for(const t of this.composer.passes)t.dispose?.();this.composer.dispose(),this.composer=null}this.sun?.shadow.dispose(),this.scene&&(this.scene.traverse(t=>t.geometry?.dispose()),this.scene=null);for(const t of this.materials)t.dispose();for(const t of this.textures)t.dispose();this.materials=[],this.textures=[],this.savedPixelRatio&&this.renderer.setPixelRatio(this.savedPixelRatio),this.renderer.shadowMap&&(this.renderer.shadowMap.enabled=this.savedShadow??!1)}}const jt=i=>document.querySelector(i),S0="./",ei=15128503,ye=12425308,Tn=1517855,kn=5058076;class y0{constructor(t,{onClose:e,onArchive:n}){this.renderer=t,this.film=new M0(t,{onExit:()=>this.close()}),this.onClose=e,this.onArchive=n,this.active=!1,this.cache=new Map,this.loader=new Su,this.camera=new He(52,innerWidth/innerHeight,.1,120),this.ray=new Eo,this.clock=0,this.value=0,this.phase=0,this.orbit=0,this.playing=!1,this.auto=!1,this.held=!1,this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,jt("#episodeClose").onclick=()=>this.close(),jt("#episodeNext").onclick=()=>this.next(),jt("#episodePrev").onclick=()=>{this.phase>0&&this.showPhase(this.phase-1)},jt("#episodeArchive").onclick=()=>this.onArchive(this.ep.n),jt("#episodePlay").onclick=()=>{this.playing=!this.playing,this.auto=!1,this.playTime=0,jt("#episodePlay").textContent=this.playing?"暂停镜头":"播放镜头"}}open(t){if(this.ep=Sr.find(e=>e.n===t),!!this.ep){if(this.active=!0,this.playing=!1,this.orbit=0,t===3){jt("#episode").hidden=!0,document.body.classList.add("in-story"),this.disposeScene(),this.film.open();return}jt("#episode").hidden=!1,document.body.classList.add("in-story"),this.showPhase(0),this.preload(t)}}close(){this.film.active&&this.film.close(),this.active=!1,this.playing=!1,this.auto=!1,this.held=!1,jt("#episode").hidden=!0,document.body.classList.remove("in-story"),this.disposeScene(),this.onClose()}preload(t){const e=`${S0}art/event-${String(t).padStart(2,"0")}.jpg`;if(!this.cache.has(t)){const n=this.loader.load(e,()=>{},void 0,()=>{this.active&&this.ep.n===t&&(jt("#artNote").textContent="画面载入失败，仍可操作实时场景与阅读事件。")});for(n.colorSpace=Ie,this.cache.set(t,n);this.cache.size>4;){const s=this.cache.keys().next().value;this.cache.get(s).dispose(),this.cache.delete(s)}}}showPhase(t){this.phase=t,this.clock=0,this.value=0,this.auto=!1,this.held=!1,this.playTime=0,this.step=this.ep.steps[t],this.disposeScene(),this.buildScene(),jt("#episodeMeta").textContent=`原书 ${Ts.find(e=>e.n===this.ep.n).roman} · 事件 ${String(this.ep.n).padStart(2,"0")}`,jt("#episodeTitle").textContent=this.ep.title,jt("#momentTitle").textContent=this.step.title,jt("#episodeNarration").textContent=this.step.text,jt("#sourceAnchor").textContent=this.step.anchor,jt("#episodePrev").disabled=t===0,jt("#episodeNext").textContent=t===2?"回到长廊":"下一幕",jt("#episodePlay").textContent=this.playing?"暂停镜头":"播放镜头",jt("#artNote").textContent="原创文学画面 · 动作与镜头为实时演出",jt("#stepTabs").innerHTML=this.ep.steps.map((e,n)=>`<button class="${n===t?"current":""}" data-phase="${n}" aria-current="${n===t?"step":"false"}"><span>0${n+1}</span>${e.title}</button>`).join(""),jt("#stepTabs").querySelectorAll("button").forEach(e=>e.onclick=()=>{this.playing=!1,this.showPhase(Number(e.dataset.phase))}),this.buildControls(),this.setValue(0)}next(){this.phase<2?this.showPhase(this.phase+1):this.close()}buildControls(){const t=this.step;let e="";["scrub","drag","dial","lever","transfer"].includes(t.mode)?e=`<label class="gesture-label" for="gestureRange">${t.action}</label><input id="gestureRange" type="range" min="0" max="100" value="0"><div class="range-ends"><span>${t.mode==="transfer"?this.ep.n===12?"盈利的小麦":"原处":"开始"}</span><span>${t.mode==="transfer"?this.ep.n===12?"亏损的棉花":"另一端":"展开"}</span></div>`:t.mode==="trace"?e=`<span class="gesture-label">${t.action}</span><div id="traceSurface" role="button" tabindex="0" aria-label="${t.action}；也可按空格"><span>在这里划动 · 或按空格</span><svg viewBox="0 0 300 65" aria-hidden="true"><path id="traceInk" d="M15 48 L280 18" fill="none" stroke="#d8ba78" stroke-width="3" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/></svg></div>`:e=`<button id="gestureButton" class="gesture-button">${t.action}</button><p class="gesture-help">${t.mode==="hold"?"按住持续操作；点击可自动演出。":t.mode==="flip"?"翻开另一面，看被遮住的行动。":t.mode==="stamp"?"落下签章，观察它怎样改变场景。":"点击触发这一刻；也可以点击场景中的物件。"}</p>`,jt("#episodeAction").innerHTML=e+'<div class="action-progress" aria-hidden="true"><i id="actionFill"></i></div><p id="actionCaption">你可以操作物件，也可以直接看下一幕。</p>';const n=jt("#gestureRange");n&&(n.oninput=()=>this.setValue(Number(n.value)/100));const s=jt("#gestureButton");if(s){s.onpointerdown=()=>{t.mode==="hold"&&(this.held=!0)};for(const a of["pointerup","pointercancel","pointerleave"])s.addEventListener(a,()=>this.held=!1);s.onclick=()=>{t.mode==="hold"?this.auto=!0:t.mode==="flip"?this.setValue(this.value<.5?1:0):this.auto=!0},s.onkeydown=a=>{a.code==="Space"&&(a.preventDefault(),this.auto=!0)}}const r=jt("#traceSurface");if(r){let a;r.onpointerdown=o=>{a=o.clientX,r.setPointerCapture(o.pointerId)},r.onpointermove=o=>{a!==void 0&&(this.setValue(this.value+Math.abs(o.clientX-a)/200),a=o.clientX)};for(const o of["pointerup","pointercancel"])r.addEventListener(o,()=>a=void 0);r.onclick=()=>this.auto=!0,r.onkeydown=o=>{(o.code==="Space"||o.code==="Enter")&&(o.preventDefault(),this.auto=!0)}}}setValue(t){this.value=vs.clamp(t,0,1),jt("#actionFill").style.width=`${this.value*100}%`,jt("#traceInk")&&(jt("#traceInk").style.strokeDashoffset=String(100-this.value*100)),jt("#gestureRange")&&(jt("#gestureRange").value=String(Math.round(this.value*100))),jt("#actionCaption").textContent=this.value>.95?"这一刻已经展开。可以继续、重放，或查看原书转述。":this.value>.05?"让物件继续动作，观察场景的变化。":"你可以操作物件，也可以直接看下一幕。"}pointer(t,e,n=0,s=0){if(n||s){this.orbit=vs.clamp(this.orbit-n*.003,-.7,.7);return}this.ray.setFromCamera(new yt(t/innerWidth*2-1,-e/innerHeight*2+1),this.camera),this.ray.intersectObjects(this.objects.children,!0).length&&(this.auto=!0)}material(t,e={}){return new ci({color:t,roughness:.65,...e})}box(t,e,n,s,r,a,o,l){const c=new te(new qn(e,n,s),typeof l=="number"?this.material(l):l);return c.position.set(r,a,o),t.add(c),c}cyl(t,e,n,s,r,a,o){const l=new te(new Ki(e,e,n,24),this.material(o));return l.position.set(s,r,a),t.add(l),l}ball(t,e,n,s,r,a){const o=new te(new bs(e,18,12),this.material(a));return o.position.set(n,s,r),t.add(o),o}label(t,e,n,s,r,a=3,o=.5,l="#f2dfb8"){const c=document.createElement("canvas");c.width=1024,c.height=Math.round(1024*o/a);const u=c.getContext("2d");u.font="54px Microsoft YaHei,serif",u.textAlign="center",u.textBaseline="middle",u.fillStyle=l,u.fillText(e,512,c.height/2,990);const d=new ur(c);d.colorSpace=Ie;const h=new Mc(new po({map:d,transparent:!0,depthWrite:!1}));return h.scale.set(a,o,1),h.position.set(n,s,r),t.add(h),h}buildScene(){this.scene=new fo,this.scene.background=new Nt(726032),this.objects=new Xt,this.scene.add(this.objects),this.motion=[],this.scene.add(new So(15062196,1719857,2));const t=new Wi(16767396,85,24,2);t.position.set(-3,6,4),this.scene.add(t);const e=new Wi(6924726,50,20,2);e.position.set(4,3,-2),this.scene.add(e),this.preload(this.ep.n);const n=this.cache.get(this.ep.n),s=new te(new Rn(24,13.5),new Es({map:n,color:11052442}));s.position.set(0,4,-8),this.scene.add(s),this.art=s;const r=this.objects,a=this.phase,o=["station","panic","money","theatre"].includes(this.ep.stage)?2504238:kn;if(this.box(r,12,.16,7,0,-.1,0,o),["station","panic","theatre","chair"].includes(this.ep.stage)){if(this.ep.stage==="station")for(const h of[-2,2]){this.box(r,.075,.035,6,h,0,0,ye);for(let f=0;f<8;f++)this.box(r,4.4,.025,.1,0,-.015,f*.6-2,kn)}else if(this.ep.stage==="panic")for(let h=0;h<4;h++)this.box(r,7,.14,1.3,0,h*.15,-1-h*.7,5661016);else if(this.ep.stage==="theatre")for(let h=0;h<3;h++)for(let f=0;f<6;f++)this.box(r,.65,.7,.65,(f-2.5)*1.05,.4+h*.2,2+h*.75,5385777)}else{this.box(r,8,.12,2.7,0,.85,.1,kn);for(const h of[-3.2,3.2])this.box(r,.15,.85,2.4,h,.4,.1,Tn)}const l=this.ep.stage;this.primary=new Xt,r.add(this.primary);const c=this.primary;if(["chalk","ticker","absorb","credit","industry","reverse","rebuild"].includes(l)){this.box(c,5.5,2.7,.2,0,2.5,-.7,kn),this.box(c,5.2,2.4,.05,0,2.5,-.55,Tn),this.label(c,["chalk","ticker"].includes(l)?l==="ticker"?"纸带报价  /  实际成交":"BURLINGTON  ·  STEEL  ·  SUGAR":l==="rebuild"?"BETHLEHEM   90 … 100":l==="industry"?"IMPERIAL STEEL  /  PETROLEUM":"报价仍然在变",0,3.2,-.4,4.9,.5),this.columns=[];for(let h=0;h<14;h++){const f=.15+h%5*.22,g=this.box(c,.2,f,.1,-2.1+h*.32,1.4+f/2,-.36,h%2?ye:7121563);this.columns.push(g)}this.marker=this.label(c,l==="ticker"?"回报尚未到达":l==="chalk"?"尚未写下观察":"等待市场回答",0,2.6,-.35,4.8,.55),this.motion.push(h=>{this.columns.forEach((f,g)=>{f.scale.y=1+h*(g+1)*.1+(l==="ticker"?Math.sin(this.clock*3+g)*h*.5:0)}),this.marker.material.opacity=.35+h*.65}),l==="chalk"&&this.motion.push(h=>{this.columns.forEach((f,g)=>f.visible=g/14<h)})}if(["station","telegrams","telegraph","coffee","loan","newspaper","letter"].includes(l)){this.pages=[];for(let f=0;f<9;f++){const g=this.box(c,1.25,.025,.8,(f%3-1)*1.6,1.05+Math.floor(f/3)*.065,0,ei);g.rotation.y=(f-4)*.04,this.pages.push(g)}const h=l==="coffee"?"咖啡合约 / 新的限制":l==="loan"?"借款 / 人情 / 账户权限":l==="telegrams"?"买入建议 / 卖出建议":l==="newspaper"?"匿名解释 / 真实出售":l==="letter"?"今天的佣金 / 明天的企业":"报价 / 建议 / 成交";if(this.label(c,h,0,2.4,0,5,.6),this.motion.push(f=>{this.pages.forEach((g,v)=>{g.rotation.y=(v-4)*.04+f*(v%2?Math.PI:0),g.position.y=1.05+Math.floor(v/3)*.065+f*Math.sin(v)*.4,g.position.x=(v%3-1)*1.6+f*(v-4)*.08})}),["coffee","loan","telegrams"].includes(l)&&(this.stamp=this.cyl(c,.24,.5,0,2.7,.15,ye),this.motion.push(f=>{this.stamp.position.y=2.7-Math.sin(f*Math.PI/2)*1.4})),l==="letter"){this.lines=[];for(let f=0;f<7;f++)this.lines.push(this.box(c,1.05,.006,.015,0,1.215,-.3+f*.085,Tn));this.motion.push(f=>this.lines.forEach((g,v)=>g.visible=v/7<f))}}if(["cotton","grain","coffee"].includes(l)){this.bales=new Xt,c.add(this.bales),this.wheat=new Xt,c.add(this.wheat);for(let h=0;h<18;h++){const f=(h%6-2.5)*.7,g=1.2+Math.floor(h/6)*.65;this.box(this.bales,.64,.6,.6,f,g,-.2,l==="coffee"?6240293:ei);for(const v of[-.18,.18])this.box(this.bales,.025,.63,.64,f+v,g,-.2,kn)}for(let h=0;h<5;h++)this.ball(this.wheat,.32,-2+h*.42,1.2,.6,ye);this.motion.push(h=>{this.bales.scale.setScalar(.35+h*.8),this.bales.position.z=h*(l==="cotton"&&a>0?1.5:0),this.wheat.position.x=-h*4,this.wheat.scale.setScalar(1-h*.75)}),this.label(c,l==="cotton"?["专家的资料","小麦在盈利 / 棉花在亏损","棉花约十五万包"][a]:l==="grain"?"玉米 / 燕麦 / 退出":"供给 / 运输 / 合约",0,3.4,0,5,.55)}if(l==="chair"){this.box(c,1.6,.2,1.4,0,1.2,.2,3036993),this.box(c,1.6,1.8,.2,0,2.1,-.4,3036993);for(const h of[-.8,.8])this.box(c,.12,1.1,1.5,h,1.3,.2,kn),this.box(c,.1,.9,.1,h,.5,.75,kn);this.label(c,a===1?"不是工作。是位置。":"这是牛市。",0,3.5,-.2,4,.6),this.motion.push(h=>{c.rotation.y=h*.2})}if(["panic","money","rebuild","credit","loan"].includes(l)){this.safe=new Xt,this.safe.position.set(2.3,1,.8),c.add(this.safe),this.box(this.safe,1.4,1.5,1.1,0,.7,0,Tn),this.safeDoor=new Xt,this.safeDoor.position.set(-.7,.7,.61),this.safe.add(this.safeDoor),this.box(this.safeDoor,1.38,1.45,.08,.69,0,0,4411724);const h=this.cyl(this.safeDoor,.13,.1,.8,0,.1,ye);h.rotation.x=Math.PI/2,this.motion.push(f=>{this.safeDoor.rotation.y=-f*1.8}),this.cash=[];for(let f=0;f<7;f++)this.cash.push(this.box(c,.65,.055,.32,-2,1.1+f*.075,.8,ei));if(this.motion.push(f=>this.cash.forEach((g,v)=>g.visible=v/7>f||l==="rebuild")),l==="loan"){this.bars=new Xt,c.add(this.bars);for(let f=0;f<9;f++)this.box(this.bars,.065,4,.06,-3+f*.75,2,-.7,2765878);this.motion.push(f=>{this.bars.position.z=a===0?-3+f:1+f})}}if(["mirrors","breakfast"].includes(l)){for(const h of[-2,2]){this.box(c,1.7,2.8,.14,h,2.4,-.2,ye);const f=this.box(c,1.5,2.6,.16,h,2.4,-.1,new ci({color:7967886,metalness:1,roughness:.18}));this.motion.push(g=>{f.material.emissive.setHex(h<0?9589043:3699299),f.material.emissiveIntensity=h<0?g:1-g})}if(this.label(c,l==="mirrors"?"希望 / 恐惧":"朋友的黑猫 / 我的观察",0,3.9,0,5,.55),l==="breakfast"){const h=new Xt;h.position.set(-.3,1.3,.6),c.add(h),this.ball(h,.22,0,0,0,1054482),this.ball(h,.15,.2,.2,0,1054482),this.box(h,.04,.2,.07,.15,.4,0,1054482),this.motion.push(f=>{h.position.x=-.3-f*3})}}if(["phones","absorb","theatre"].includes(l)){this.tokens=[];for(let h=0;h<18;h++){const f=this.box(c,.48,.018,.32,-3+h%6*1.1,1.2+Math.floor(h/6)*.25,-.25+h%3*.3,ei);this.tokens.push(f)}if(this.motion.push(h=>this.tokens.forEach((f,g)=>{f.position.x=-3+g%6*1.1+Math.sin(h*Math.PI)*(l==="absorb"?g*.08:2),f.position.z=-.25+g%3*.3+h*Math.floor(g/6),f.rotation.y=h*Math.PI*.5})),l==="phones"){for(const h of[-2,0,2])this.cyl(c,.28,.12,h,1.05,.6,Tn),this.cyl(c,.045,.9,h,1.5,.6,ye),this.cyl(c,.18,.3,h,2.05,.6,ye).rotation.z=Math.PI/3;this.label(c,"同一个源头，经过不同的嘴。",0,3.3,0,5,.55)}if(l==="theatre"){this.curtains=[];for(const h of[-3.6,3.6])for(let f=0;f<4;f++)this.curtains.push(this.cyl(c,.22,4.3,h+f*.22*(h<0?1:-1),2.2,-.8,6630453));this.motion.push(h=>this.curtains.forEach((f,g)=>f.position.x=(g<4?-3.6:3.6)+g%4*.22*(g<4?1:-1)+(g<4?-1:1)*h*1.4)),this.label(c,"台上的报价 / 台下的接手者",0,3.7,0,5,.55)}}if(l==="dressmaker"&&(this.box(c,1.35,.15,.65,0,1.3,0,Tn),this.box(c,.22,.85,.24,-.45,1.7,0,Tn),this.box(c,1,.18,.24,0,2.1,0,Tn),this.cyl(c,.035,.45,.48,1.87,0,ye),this.wheel=this.cyl(c,.37,.1,-.72,1.88,0,ye),this.wheel.rotation.z=Math.PI/2,this.box(c,2,.035,1.5,1,1.1,.2,6713955),this.thread=this.box(c,1.7,.005,.025,1,1.13,.2,ye),this.motion.push(h=>{this.wheel.rotation.x=h*Math.PI*4,this.thread.scale.x=Math.max(.01,h)}),this.label(c,"她买下的，是一个名字的许诺。",0,3.4,0,5,.55)),l==="station"){this.suitcase=new Xt,this.suitcase.position.set(0,1.3,.7),c.add(this.suitcase),this.box(this.suitcase,1.8,1.1,.5,0,0,0,kn);for(const h of[-.5,.5])this.box(this.suitcase,.07,1.14,.52,h,0,0,ye);this.motion.push(h=>{this.suitcase.position.z=.7-h*1.4,this.suitcase.rotation.y=h*.4}),this.label(c,"二十一岁 / 两千五百美元",0,3.2,0,5,.55)}if(l==="ticker"){this.strips=[];for(let h=0;h<22;h++){const f=this.box(c,1.7,.015,.3,Math.sin(h*.5)*1.4,1.1+Math.floor(h/7)*.17,.7+h*.045,ei);f.rotation.y=h*.3,this.strips.push(f)}this.motion.push(h=>this.strips.forEach((f,g)=>{f.position.z=.7+g*.045+Math.sin(this.clock*(g%2?.4:2)+g)*h*.35}))}l==="reverse"&&(this.lever=new Xt,this.lever.position.set(0,1.1,1),c.add(this.lever),this.box(this.lever,.07,1.2,.07,0,.6,0,ye),this.ball(this.lever,.17,0,1.2,0,Tn),this.motion.push(h=>{this.lever.rotation.z=(h-.5)*1.4}),this.label(c,a===1?"153：回补一万股":a===2?"156：转为买入":"总体弱市 / 局部强势",0,2.3,.2,5,.55)),this.buildMoment();const u=new De,d=[];for(let h=0;h<100;h++)d.push((Math.random()-.5)*12,Math.random()*6,(Math.random()-.5)*8);u.setAttribute("position",new me(d,3)),this.scene.add(new go(u,new vr({size:.018,color:ye,transparent:!0,opacity:.45})))}buildMoment(){const t=this.ep.n,e=this.phase,n=this.objects,s=new Xt;n.add(s);const r=(l,c,u,d=1.1)=>this.box(s,d,.018,.8,l,c,u,ei),a=(l,c=0,u=3,d=.6,h=4)=>this.label(s,l,c,u,d,h,.4),o=l=>this.motion.push(l);if(t===1){if(e===0){const l=this.box(s,.09,.09,.65,-2,2.7,.55,ei);o(c=>l.position.x=-2+c*4)}if(e===1){const l=this.cyl(s,.25,.05,0,1.3,1.3,ye);o(c=>{l.position.x=-2+c*4,l.rotation.z=c*Math.PI}),a("五美元 → 三美元十二美分",0,3.6)}if(e===2){for(let l=0;l<7;l++){const c=this.box(s,.52,.018,.7,(l-3)*.7,1.25,1.4,15116202);o(u=>c.position.y=1.25+u*.3)}a("七张 · 每张五百股",0,3.6)}}if(t===2&&e===1){const l=r(-2,2,.8);o(c=>l.position.x=-2+c*4),a("指令送出 ≠ 已经成交",0,3.8)}if(t===3){for(const[l,c]of["纸带报价","实际成交"].entries()){this.box(s,5,.025,.025,0,2.8-l*.55,.7,ye),a(c,-3.4,2.8-l*.55,.7,1.6);const u=this.ball(s,.11,-2.5,2.8-l*.55,.7,l?13268576:9680539);o(d=>{u.position.x=-2.5+d*(l?5:2)})}if(e===2){const l=r(0,3.2,1.3);o(c=>{l.position.y=3.2-c*2,l.rotation.y=c*.3})}}if(t===4)for(const l of[-1,1]){const c=r(0,2.1,1.2);c.material.color.setHex(l<0?9484704:13474705),a(l<0?"买入电报":"卖出电报",l*2,3,.9,2),o(u=>{c.position.x=l*u*2,c.rotation.y=l*u*.5})}if(t===5&&e===2){const l=r(0,2.6,.9);o(c=>{l.position.x=c*4.5,l.position.y=2.6+c*.3}),a("一旦离开，买回的机会不一定出现",0,3.9,0,5)}if(t===6){const l=r(-2,2,.6);o(c=>{l.position.x=-2+c*4,l.rotation.y=c*Math.PI}),a(["地震已发生 / 反应仍滞后","友人的判断盖过了自己的观察","新事实改变方向"][e],0,4,.6,5)}if(t===7){const l=r(-2.5,2.6,1.3);o(c=>{l.position.x=-2.5+c*5,l.scale.setScalar(1-c*.7)}),a(["卖出一万股","再卖一万股","回补两万 / 留下一万股多头"][e],0,4,.6,5)}if(t===8){const l=this.ball(s,.15,0,3,1,ye);o(c=>l.position.x=Math.sin(c*Math.PI*2)*2),a(["信用先变紧","正确方向，也会付出等待的成本","一轮比一轮弱的反弹"][e],0,4,.6,5)}if(t===9){const l=r(0,3,.5,2);o(c=>{l.rotation.x=c*1.2,l.position.y=3-c*1.5}),a(["船上：几行字，改变整个航程","街上：现金成为生存的条件","回补：卖空者也交出买单"][e],0,4,0,5)}if(t===10&&a(["损失二十万美元，仍推不动","1.14 → 等待 → 1.20","亏损时恐惧 / 获利时希望"][e],0,4,.6,5),t===11){const l=new Xt;s.add(l);for(let c=0;c<8;c++)this.ball(l,.12,-2+c*.2,1.5,.9,11768675);o(c=>{l.position.x=c*3}),a(["一千万蒲式耳的玉米仓位","燕麦订单改变了对手的认知","皇冠来自消息误读"][e],0,4,.6,5)}if(t===12&&e===0){const l=r(2,2,.8,1.6);o(c=>{l.position.x=2-c*2,l.position.y=2+c*.45,l.rotation.x=c*.8}),a("同一份报告，渐渐遮住全部市场",0,4,.6,5)}if(t===13){for(let l=0;l<8;l++){const c=new te(new xr(.12,.025,8,16),this.material(ye));c.position.set(-1.3+l*.35,2.5,.8),s.add(c),o(u=>{c.rotation.y=l%2*Math.PI/2,c.position.y=2.5-u*.7*Math.sin(l/7*Math.PI)})}a(["二万五千美元 / 钱可以还，人情怎么办","订单上，多出另一双手","叙述者事后解释这份帮助"][e],0,4,.6,5)}if(t===14&&e===1){for(let l=0;l<6;l++){const c=r(-2+l*.8,2.6,.7,.5);o(u=>c.rotation.x=Math.min(1,Math.max(0,u*6-l))*Math.PI)}a("六周，等到价格越过一百",0,4,.6,5)}if(t===15){const l=this.box(s,2,.03,1.2,0,2.6,1,13938845);o(c=>l.position.y=2.6-c*1.1),a(["供给判断 / 战争运输","申诉进入另一套制度","规则的纸，覆盖交易的纸"][e],0,4,.6,5)}if(t===16)for(let l=0;l<5;l++){const c=this.box(s,.025,.025,1,-2+l,2.6,.8,ye);c.rotation.z=Math.PI/2,o(u=>c.scale.z=Math.min(1,Math.max(0,u*5-l)))}if(t===17&&e===1){for(const[l,c]of[7839629,9333066].entries()){const u=this.box(s,.5,1,.5,-1.5+l*3,1.5,1.3,c);o(d=>u.scale.y=l?1:1+d*1.4)}a("钢铁继续 / 铜股停住",0,4,.6,5)}if(t===19){const l=r(-1,2.7,1.2,2);o(c=>{l.position.x=-1+c*3,l.rotation.y=c*1.3}),a(["融资的时钟开始转动","认证支票没有流回银行","缺钱的人，不能等到明天"][e],0,4,.6,5)}if(t===21){for(let l=0;l<3;l++){const c=this.cyl(s,.23,2,-2.5+l*.5,1.8,-.6,6188649);o(u=>{c.scale.y=e===0?1+u*.7:1-u*.15})}for(let l=0;l<3;l++){const c=this.cyl(s,.35,.7,1.5+l*.7,1.3,.6,4472369);o(u=>{c.position.x=1.5+l*.7+(e===1?u*.3:u)})}a(["钢铁：安静吸收供给","石油：另一种需求，另一种结果","报价财富 / 实际退出"][e],0,4,.6,5)}if(t===22&&e===2){const l=r(1,1.3,1.2,1.5);o(c=>{l.rotation.y=c*.6,l.position.x=1-c*1.8})}if(t===23){const l=r(0,2.6,1.5,2.5);o(c=>{l.rotation.x=c*Math.PI/2,l.position.y=2.6-c*.6}),a(["名字不见了 / 信心被留下","翻开宣传，才看见出售","50 → 12 / 谁来承担解释"][e],0,4,.6,5)}if(t===24){const l=this.box(s,.025,.025,.8,-.8,1.4,1.2,ye);l.rotation.y=.6,o(c=>l.position.x=-.8+c*1.6),a(["佣金今天到账 / 公司明天还要营业","拿到的股票，改变了消息的讲法","没有下一条买卖指令"][e],0,4,.6,5)}}update(t){if(!this.active)return;if(this.film.active){this.film.update(t);return}this.clock+=t,(this.auto||this.held)&&this.setValue(this.value+t*(this.reduced?100:.55)),this.value>=1&&(this.auto=!1),this.playing&&!document.querySelector("dialog[open]")&&(this.playTime+=t,this.setValue(Math.min(1,this.playTime/7)),this.playTime>13&&(this.phase<2?this.showPhase(this.phase+1):(this.playing=!1,jt("#episodePlay").textContent="播放镜头")));const e=this.value;for(const r of this.motion)r(e);this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix();const n=this.reduced?0:Math.sin(this.clock*.13)*.2,s=Math.sin(this.orbit+n)*5;this.camera.position.set(s,2.7+this.phase*.15,(8.5-e*.7)*Math.max(1,.85/this.camera.aspect)),this.camera.lookAt(0,1.85,0),this.ep.stage==="ticker"&&this.phase===2&&!this.reduced&&(this.camera.position.x+=Math.sin(this.clock*22)*e*.035),this.art.material.color.setScalar(.62+e*.12),this.renderer.render(this.scene,this.camera)}disposeScene(){if(!this.scene)return;const t=new Set(this.cache.values());this.scene.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){const n=Array.isArray(e.material)?e.material:[e.material];for(const s of n)s.map&&!t.has(s.map)&&s.map.dispose(),s.dispose()}}),this.scene=null}}const kt=i=>document.querySelector(i);let be,dn,Me,Zt,kl,Ja=-2,ai=0,dr=0,fr=!1,yr=!1,pr=0,Fi,gn=null,Hn,cs,Ui=!1;const Pe=new Set,wo=[],Ic=[],Dc=[],ra=new Eo,E0=new bc,Wn=kt("#world");let Hl=new yt;const Ao=i=>({x:i%2===0?-7:7,z:-Math.floor(i/2)*12}),qi=()=>!!document.querySelector("dialog[open]");function Er(){Pe.clear(),yr=!1,document.pointerLockElement&&document.exitPointerLock()}function Ji(i){Er(),document.querySelectorAll("dialog[open]").forEach(t=>t.close()),kt(i).showModal()}function aa(i){return i.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function ui(i){kt("#subtitle").textContent=i,kt("#subtitle").style.opacity="1",clearTimeout(ui.timer),ui.timer=setTimeout(()=>kt("#subtitle").style.opacity="0",8500)}function b0(){kt("#roomGrid").innerHTML=Cn.map((i,t)=>'<button class="room-card" data-room="'+t+'"><span>0'+(t+1)+" / "+i.period+"</span><h3>"+i.name+"</h3><p>"+i.concept+"</p><small>"+Sr.slice(t*3,t*3+3).map(e=>e.title).join(" · ")+"</small></button>").join(""),kt("#roomGrid").querySelectorAll("button").forEach(i=>i.onclick=()=>w0(Number(i.dataset.room)))}function T0(){kt("#journalList").innerHTML=Sr.map(i=>'<button data-chapter="'+i.n+'"><img loading="lazy" src="./art/event-'+String(i.n).padStart(2,"0")+'.jpg" alt=""><span><b>事件 '+String(i.n).padStart(2,"0")+"</b>"+i.title+(i.n===3?" · 连续三维样片":"")+"<small>"+i.steps.map(t=>t.title).join(" / ")+"</small></span></button>").join(""),kt("#journalList").querySelectorAll("button").forEach(i=>i.onclick=()=>di(Number(i.dataset.chapter)))}function w0(i){Zt?.close(),document.querySelectorAll("dialog[open]").forEach(e=>e.close());const t=Ao(i);be&&(be.position.set(t.x,1.7,t.z+1.7),ai=0,dr=-.12),Ja=-2,Fc(),ui(Cn[i].whisper)}function di(i){kl=Ts.find(t=>t.n===i),kl&&(Er(),document.querySelectorAll("dialog[open]").forEach(t=>t.close()),Zt?Zt.open(i):Lc(i))}function Lc(i){const t=Ts.find(n=>n.n===i),e=Sr.find(n=>n.n===i);kt("#chapterMeta").textContent="原书第 "+t.n+" 章 · 中文原创转述",kt("#chapterTitle").textContent=e.title,kt("#readerBody").innerHTML='<p class="scene-note">原书事件 · 详尽转述</p>'+t.story.map(n=>"<p>"+aa(n)+"</p>").join("")+'<div class="principle"><p class="scene-note">解释与归纳</p><p>'+aa(t.principle)+'</p></div><p class="fine">原文定位：'+e.steps.map(n=>aa(n.anchor)).join("；")+"</p>",Ji("#reader"),kt("#reader").scrollTop=0}document.querySelectorAll("[data-close]").forEach(i=>i.onclick=()=>i.closest("dialog").close());document.querySelectorAll("dialog").forEach(i=>{i.addEventListener("close",()=>Pe.clear()),i.addEventListener("click",t=>{if(t.target===i){const e=i.getBoundingClientRect();(t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom)&&i.close()}})});kt("#mapBtn").onclick=()=>{b0(),Ji("#atlas")};kt("#journalBtn").onclick=()=>{T0(),Ji("#journal")};kt("#helpBtn").onclick=()=>Ji("#help");kt("#introMap").onclick=kt("#mapBtn").onclick;kt("#home").onclick=i=>{i.preventDefault(),Ji("#intro")};kt("#begin").onclick=()=>{if(new URL(location.href).searchParams.get("sample")==="1901"){di(3);return}kt("#intro").close(),ui("走进房间，触碰物件。也可以从事件目录直接进入任何一段故事。")};kt("#sampleBegin").onclick=()=>di(3);kt("#walkBtn").onclick=async()=>{if(dn)try{await Wn.requestPointerLock()}catch{ui("按住场景拖动，然后用 W A S D 移动。")}};document.addEventListener("pointerlockchange",()=>{fr=document.pointerLockElement===Wn,kt("#walkBtn").textContent=fr?"Esc 退出步行模式":"进入步行模式"});kt("#interactBtn").onclick=()=>{gn&&di(gn.userData.chapter)};document.addEventListener("keydown",i=>{if(!qi()){if(Zt?.film.active){Zt.film.keyDown(i);return}if(Zt?.active){if(i.code==="Escape"&&Zt.close(),i.target.matches("input,[role=button]"))return;i.code==="ArrowRight"&&Zt.next(),i.code==="ArrowLeft"&&Zt.phase>0&&Zt.showPhase(Zt.phase-1);return}["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&(i.preventDefault(),Pe.add(i.code)),i.code.startsWith("Shift")&&Pe.add("Shift"),i.code==="KeyM"&&kt("#mapBtn").click(),i.code==="KeyJ"&&kt("#journalBtn").click(),i.code==="KeyE"&&gn&&di(gn.userData.chapter)}});document.addEventListener("keyup",i=>{Zt?.film.active&&Zt.film.keyUp(i),Pe.delete(i.code),i.code.startsWith("Shift")&&Pe.delete("Shift")});window.addEventListener("blur",()=>{Er(),Zt?.film.active&&Zt.film.setPaused(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&(Er(),Zt?.film.active&&Zt.film.setPaused(!0))});Wn.addEventListener("pointerdown",i=>{if(!qi()){if(Zt?.film.active){Wn.setPointerCapture(i.pointerId),Zt.film.pointerDown(i.clientX,i.clientY);return}yr=!0,pr=0,Fi={x:i.clientX,y:i.clientY},Wn.setPointerCapture(i.pointerId)}});Wn.addEventListener("pointermove",i=>{if(qi())return;if(Zt?.film.active){Zt.film.pointerMove(i.clientX,i.clientY);return}let t=0,e=0;if(fr?(t=i.movementX,e=i.movementY):yr&&Fi&&(t=i.clientX-Fi.x,e=i.clientY-Fi.y,Fi={x:i.clientX,y:i.clientY},pr+=Math.abs(t)+Math.abs(e)),Zt?.active){Zt.pointer(i.clientX,i.clientY,t,e);return}ai-=t*.003,dr=vs.clamp(dr-e*.003,-1.15,1.15)});Wn.addEventListener("pointerup",i=>{if(!qi()){if(Zt?.film.active){Zt.film.pointerUp(i.clientX,i.clientY);return}if(Zt?.active)pr<8&&Zt.pointer(i.clientX,i.clientY);else if(pr<8){if(fr)gn&&di(gn.userData.chapter);else if(be){Hl.set(i.clientX/window.innerWidth*2-1,-i.clientY/window.innerHeight*2+1);const t=Nc(Hl);t&&di(t.userData.chapter)}}yr=!1,Fi=null}});document.querySelectorAll("[data-move]").forEach(i=>{i.addEventListener("pointerdown",t=>{t.preventDefault(),Pe.add(i.dataset.move),i.setPointerCapture(t.pointerId)});for(const t of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(t,()=>Pe.delete(i.dataset.move))});kt("#soundBtn").onclick=()=>{Ui=!Ui;try{Hn||(Hn=new(window.AudioContext||window.webkitAudioContext),cs=Hn.createGain(),cs.gain.value=0,cs.connect(Hn.destination),[55,82.41,110].forEach((i,t)=>{const e=Hn.createOscillator(),n=Hn.createGain();e.type="sine",e.frequency.value=i,n.gain.value=.035/(t+1),e.connect(n).connect(cs),e.start()})),Hn.resume(),cs.gain.setTargetAtTime(Ui?1:0,Hn.currentTime,.4),kt("#soundBtn").textContent=`声音 · ${Ui?"开":"关"}`,kt("#soundBtn").setAttribute("aria-pressed",String(Ui))}catch{Ui=!1,ui("此窗口暂时无法播放声音。")}};function pe(i,t={}){return new ci({color:i,roughness:.78,...t})}const nt={wood:pe(3745306),darkWood:pe(2169364),brass:pe(11769690,{metalness:.6,roughness:.4}),paper:pe(14997688),iron:pe(3488059,{metalness:.5}),red:pe(7090224),green:pe(3164990),cotton:pe(14011323),black:pe(1054485)};function rt(i,t,e,n,s,r,a,o,l=!1){const c=new te(new qn(t,e,n),o);return c.position.set(s,r,a),i.add(c),l&&(c.updateWorldMatrix(!0,!1),wo.push({box:new ji().setFromObject(c),mesh:c})),c}function Ee(i,t,e,n,s,r,a,o){const l=new te(new Ki(t,e,n,24),o);return l.position.set(s,r,a),i.add(l),l}function Vl(i,t,e,n,s,r){const a=new te(new bs(t,16,12),r);return a.position.set(e,n,s),i.add(a),a}function Qe(i,t=2.5,e=.65,n=56,s="#e3cca0"){const r=document.createElement("canvas");r.width=1024,r.height=Math.round(1024*e/t);const a=r.getContext("2d");a.fillStyle=s,a.font=`${n}px "Microsoft YaHei",serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(i,r.width/2,r.height/2,1e3);const o=new ur(r);o.colorSpace=Ie;const l=new Mc(new po({map:o,transparent:!0,depthWrite:!1}));return l.scale.set(t,e,1),l}function Uc(i,t,e,n,s,r=2.5){rt(i,r,.56,.08,e,n,s,nt.darkWood);const a=Qe(t,r,.45,70);a.position.set(e,n,s+.07),i.add(a)}function Gl(i,t,e,n=0){const s=new Xt;s.position.set(t,0,e),s.rotation.y=n,i.add(s),rt(s,2.1,3,.35,0,1.5,0,nt.darkWood);for(let r=0;r<4;r++){rt(s,2.1,.08,.65,0,.3+r*.72,.12,nt.wood);for(let a=0;a<9;a++){const o=[nt.red,nt.green,nt.wood,nt.paper][(r+a)%4],l=rt(s,.14,.38+a%3*.1,.28,-.84+a*.2,.57+r*.72,.22,o);l.rotation.z=a%4===0?.08:0,rt(s,.145,.025,.29,-.84+a*.2,.55+r*.72,.23,nt.brass)}}}function Qa(i,t,e,n=2){rt(i,n,.12,1.1,t,.92,e,nt.wood,!0);for(const s of[-n*.42,n*.42])for(const r of[-.42,.42])rt(i,.09,.87,.09,t+s,.435,e+r,nt.darkWood)}function Wl(i,t,e){Ee(i,.2,.25,.08,t,1.03,e,nt.brass),Ee(i,.025,.025,.42,t,1.28,e,nt.brass),Ee(i,.21,.3,.21,t,1.55,e,pe(12953963,{emissive:11568185,emissiveIntensity:.65}))}function A0(i,t,e,n){const s=new Xt;s.position.set(e,1.03,n),t.add(s);const r=i.kind;if(r==="book"||r==="paper"||r==="ticket"||r==="letter"){for(let l=0;l<3;l++){const c=rt(s,.66,.055,.49,l*.045,l*.065,0,r==="book"&&l===0?nt.red:nt.paper);c.rotation.y=l*.08}for(let l=0;l<4;l++)rt(s,.39,.006,.012,0,.192,-.14+l*.075,nt.darkWood)}else if(r==="board"){rt(s,1.65,1.15,.12,0,.62,0,nt.darkWood),rt(s,1.48,.98,.02,0,.62,.075,nt.green);for(let l=0;l<3;l++){const c=Qe(["STEEL  90⅛","SUGAR  112","UP     155"][l],1.3,.21,50,"#eee7cf");c.position.set(0,.93-l*.3,.1),s.add(c)}}else if(r==="clock"){Ee(s,.5,.5,.14,0,.58,0,nt.brass).rotation.x=Math.PI/2;const l=Ee(s,.44,.44,.16,0,.58,.02,nt.paper);l.rotation.x=Math.PI/2;const c=rt(s,.025,.32,.025,0,.72,.12,nt.black);c.rotation.z=-.6,rt(s,.25,.02,.025,.1,.58,.12,nt.black),rt(s,1,.08,.35,0,.05,0,nt.darkWood)}else if(r==="ship"){rt(s,1.35,.22,.4,0,.16,0,nt.wood),rt(s,.7,.22,.35,0,.36,0,nt.paper),Ee(s,.025,.025,1.1,0,.77,0,nt.brass);const l=rt(s,.55,.63,.02,.25,.85,0,nt.paper);l.rotation.y=.15}else if(r==="cotton"){rt(s,.8,.5,.6,0,.25,0,nt.cotton);for(let l=0;l<7;l++)Vl(s,.13,-.28+l%3*.24,.53+Math.floor(l/3)*.035,-.18+l%2*.34,nt.paper);for(const l of[-.25,.25])rt(s,.025,.53,.62,l,.27,0,nt.wood)}else if(r==="phone"){Ee(s,.28,.37,.12,0,.08,0,nt.black),Ee(s,.055,.065,.65,0,.45,0,nt.brass);const l=Ee(s,.17,.07,.3,0,.84,0,nt.brass);l.rotation.z=Math.PI/3;const c=Ee(s,.09,.17,.35,.32,.55,0,nt.black);c.rotation.z=.3}else if(r==="safe"){rt(s,.9,.9,.7,0,.45,0,nt.iron),rt(s,.73,.72,.06,0,.45,.39,nt.darkWood);const l=Ee(s,.12,.12,.09,0,.5,.46,nt.brass);l.rotation.x=Math.PI/2,rt(s,.035,.25,.07,.22,.46,.48,nt.brass)}else if(r==="scale"){rt(s,.8,.08,.35,0,.04,0,nt.wood),Ee(s,.03,.03,.9,0,.53,0,nt.brass),rt(s,1.1,.045,.04,0,.95,0,nt.brass);for(const l of[-.45,.45])rt(s,.012,.4,.012,l,.75,0,nt.brass),Ee(s,.23,.12,.08,l,.54,0,nt.brass)}else if(r==="press"){rt(s,.85,.14,.65,0,.09,0,nt.black);for(const l of[-.34,.34])rt(s,.08,.8,.08,l,.52,0,nt.brass);rt(s,.8,.08,.14,0,.92,0,nt.iron),Ee(s,.055,.055,.6,0,.7,0,nt.brass),rt(s,.62,.12,.42,0,.37,0,nt.iron),rt(s,.52,.025,.4,0,.23,0,nt.paper)}else if(r==="mirror")rt(s,.95,1.2,.1,0,.62,0,nt.brass),rt(s,.82,1.06,.03,0,.62,.07,pe(8559769,{metalness:1,roughness:.18}));else if(r==="suitcase"){rt(s,.95,.58,.34,0,.3,0,nt.wood);for(const l of[-.3,.3])rt(s,.045,.59,.36,l,.3,0,nt.brass);rt(s,.3,.07,.07,0,.64,0,nt.darkWood)}else Ee(s,.35,.42,.13,0,.12,0,nt.brass),Vl(s,.26,0,.42,0,nt.paper);s.userData.chapter=i.n,s.traverse(l=>l.userData.chapter=i.n),Ic.push(s);const a=new te(new vo(.38,.43,40),pe(14203771,{emissive:14203771,emissiveIntensity:1,side:tn,transparent:!0,opacity:.55}));a.rotation.x=-Math.PI/2,a.position.set(e,.992,n),t.add(a);const o=Qe(`${i.roman} · ${i.object}`,1.9,.34,48);o.position.set(e,1.95,n),t.add(o),Dc.push({group:s,halo:a,label:o,n:i.n,base:s.position.y,activeUntil:0})}function R0(i,t,e){if(i===0){rt(t,3.1,1.8,.13,e*4.8,2.15,1.8,nt.green).rotation.y=Math.PI/2;const n=Qe("数字，是我的第一种语言。",3.1,.6,56);n.position.set(e*3.1,2.6,1.8),t.add(n)}if(i===1){for(let s=0;s<3;s++){const r=-1.5+s*1.5;rt(t,.85,.12,.85,r,.5,1.8,nt.green),rt(t,.85,1.1,.12,r,1.02,2.2,nt.darkWood);for(const a of[-.34,.34])for(const o of[-.34,.34])rt(t,.07,.5,.07,r+a,.25,1.8+o,nt.wood)}const n=Qe("位置，比一时的差价更难找回。",4,.55,58);n.position.set(0,2.35,2.4),t.add(n)}if(i===2){rt(t,4,.025,2.5,0,.07,2,pe(2444888,{metalness:.55,roughness:.3}));for(let s=0;s<10;s++)rt(t,3.5,.025,.025,0,.09,1+s*.22,pe(7575192,{emissive:3429471,emissiveIntensity:.2}));const n=Qe("钱消失的那天，所有人都在找岸。",4,.55,55);n.position.set(0,2.5,2.6),t.add(n)}if(i===3){for(let s=0;s<7;s++){const r=e*(2.5+s%2*.9),a=.5+Math.floor(s/2)*.9;rt(t,.75,.7,.65,r,.38,a,nt.cotton);for(const o of[-.23,.23])rt(t,.035,.73,.69,r+o,.39,a,nt.wood)}const n=Qe("我知道，却没有做到。",3.7,.6,65);n.position.set(0,2.5,1.9),t.add(n)}if(i===4){for(let s=0;s<6;s++)rt(t,.07,3,.07,-2+s*.8,1.5,3.6,nt.iron);rt(t,4.2,.08,.08,0,2.9,3.6,nt.iron);const n=Qe("债务使每一刻，都像最后的机会。",4,.55,55);n.position.set(0,2.35,3.5),t.add(n)}if(i===5){for(let s=0;s<7;s++){const r=rt(t,.52,.025,.38,-2.3+s*.72,1.6+Math.sin(s)*.3,2.8,nt.paper);r.rotation.z=Math.sin(s)*.15}const n=Qe("秘密经过七个人，仍只有一个源头。",4.4,.55,55);n.position.set(0,2.7,2.7),t.add(n)}if(i===6){rt(t,4.5,.24,2.2,0,.12,2.4,nt.darkWood);for(const s of[-2.2,2.2])for(let r=0;r<4;r++)Ee(t,.13,.13,2.9,s+r*.15*(s<0?1:-1),1.55,3.1,pe(6499384));const n=Qe("幕布升起时，谁正在退场？",4,.55,58);n.position.set(0,2.4,2.8),t.add(n)}if(i===7){Qa(t,0,2.7,3.2);for(let s=0;s<5;s++)rt(t,.5,.03,.4,-1.1+s*.55,1.03,2.7,nt.paper);const n=Qe("最后一个判断，留给你。",4,.6,65);n.position.set(0,2.3,3.2),t.add(n)}}function C0(i){const t=Ao(i),e=new Xt;e.position.set(t.x,0,t.z),Me.add(e);const n=pe(Cn[i].color),s=i%2===0?-1:1;rt(e,10,.2,10,0,-.1,0,nt.wood);for(let o=0;o<12;o++)rt(e,.025,.012,10,-5+o*.85,.015,0,nt.darkWood);rt(e,10,4,.2,0,2,-5,n,!0),rt(e,10,4,.2,0,2,5,n,!0),rt(e,.2,4,10,s*5,2,0,n,!0);for(const o of[-3.25,3.25])rt(e,.2,4,3.5,-s*5,2,o,n,!0);rt(e,.2,1.2,3,-s*5,3.4,0,n);for(const o of[-4.86,4.86]){rt(e,10,1,.08,0,.5,o,nt.darkWood),rt(e,10,.06,.1,0,1.04,o,nt.brass);for(let l=0;l<7;l++)rt(e,.04,.78,.12,-4.5+l*1.5,.5,o,nt.wood)}for(const o of[-4,0,4])rt(e,10,.14,.2,0,3.95,o,nt.darkWood);rt(e,2.5,2,.08,s*4.86,2.45,-1.7,pe(5798005,{emissive:5404785,emissiveIntensity:.4}));for(let o=0;o<4;o++)rt(e,.07,2,.1,s*4.8,2.45,-2.8+o*.73,nt.darkWood);rt(e,.12,.08,2.6,s*4.78,2.4,-1.7,nt.darkWood),rt(e,6,.015,4.4,0,.025,.5,pe(i%2===0?4600103:2636853)),rt(e,5.7,.017,.05,0,.035,-1.56,nt.brass),rt(e,5.7,.017,.05,0,.035,2.56,nt.brass),Gl(e,s*3.5,4.5),Gl(e,s*1.2,4.5),Uc(e,Cn[i].name,0,2.95,-4.83,3.7);const r=[[-2.8,-3.7],[0,-3.7],[2.8,-3.7]];Ts.filter(o=>Math.floor((o.n-1)/3)===i).forEach((o,l)=>{const[c,u]=r[l];Qa(e,c,u,2.15),A0(o,e,c,u),l===1&&Wl(e,c+.8,u+.28)}),Qa(e,s*3.3,1.8,1.5),Wl(e,s*3.3,1.8),rt(e,.7,.1,.7,s*3.3,.5,2.8,nt.green),rt(e,.7,.9,.08,s*3.3,.95,3.1,nt.darkWood),R0(i,e,s);const a=new Wi(16766106,19,15,2);a.position.set(0,3.3,-1),e.add(a),Ee(e,.4,.65,.24,0,3.25,-1,pe(12755819,{emissive:14990192,emissiveIntensity:.9})),Ee(e,.02,.02,.5,0,3.6,-1,nt.brass)}function P0(){Me=new fo,Me.background=new Nt(1055768),Me.fog=new _r(1055768,.026),be=new He(67,innerWidth/innerHeight,.05,90),be.position.set(0,1.7,7),be.rotation.order="YXZ",dn=new c0({canvas:Wn,antialias:!0,powerPreference:"high-performance"}),dn.setSize(innerWidth,innerHeight),dn.setPixelRatio(Math.min(devicePixelRatio,1.7)),dn.outputColorSpace=Ie,dn.toneMapping=eo,dn.toneMappingExposure=1.4,Me.add(new So(12178896,7228460,1.5)),rt(Me,4,.2,56,0,-.1,-18,nt.darkWood);for(let n=0;n<29;n++)rt(Me,3.7,.015,.04,0,.01,8-n*2,nt.wood);rt(Me,3,.02,54,0,.025,-18,pe(2571059));for(const n of[-1.48,1.48])rt(Me,.025,.023,54,n,.04,-18,nt.brass);for(let n=0;n<4;n++){const s=-n*12;for(const a of[-2,2]){rt(Me,.2,4,3,a,2,s+4.5,pe(2242604),!0),rt(Me,.2,4,3,a,2,s-4.5,pe(2242604),!0);for(const o of[-1.65,1.65])rt(Me,.25,3.2,.15,a,1.6,s+o,nt.wood);rt(Me,.3,.18,3.5,a,3.1,s,nt.brass)}const r=new Wi(14928785,13,13,2);r.position.set(0,3,s),Me.add(r),Ee(Me,.22,.38,.2,0,3.1,s,pe(15782553,{emissive:12952936,emissiveIntensity:1})),Ee(Me,.015,.015,.9,0,3.65,s,nt.brass)}for(const n of[9,-45])rt(Me,4,4,.2,0,2,n,pe(2242604),!0);Uc(Me,"每一次代价，都留下一个房间。",0,2.9,-44.83,3.6),Cn.forEach((n,s)=>C0(s));const i=new De,t=[];for(let n=0;n<180;n++)t.push((Math.random()-.5)*22,Math.random()*3.5,-Math.random()*48+7);i.setAttribute("position",new me(t,3)),Me.add(new go(i,new vr({size:.025,color:14596470,transparent:!0,opacity:.45})));const e=Qe("价格变了。人却还是那样。",4.5,.7,65,"#dbc58d");e.position.set(0,2.15,-5),Me.add(e),window.addEventListener("resize",()=>{be.aspect=innerWidth/innerHeight,be.updateProjectionMatrix(),dn.setSize(innerWidth,innerHeight)}),Oc()}function Xl(i,t){return i<-11.65||i>11.65||t>8.65||t<-44.65?!0:wo.some(e=>i>e.box.min.x-.23&&i<e.box.max.x+.23&&t>e.box.min.z-.23&&t<e.box.max.z+.23&&e.box.max.y>.3&&e.box.min.y<1.8)}function Nc(i){ra.setFromCamera(i,be);const e=ra.intersectObjects(Ic,!0).find(s=>s.distance<5.5);if(!e)return null;const n=ra.intersectObjects(wo.map(s=>s.mesh),!1)[0];return n&&n.distance<e.distance-.05?null:e.object}function Fc(){if(!be)return;const i=be.position;let t=-1;for(let e=0;e<8;e++){const n=Ao(e);if(Math.abs(i.x-n.x)<4.95&&Math.abs(i.z-n.z)<4.95){t=e;break}}t!==Ja&&(Ja=t,t<0?(kt("#roomNumber").textContent="序章 / THE LONG HALLWAY",kt("#roomTitle").textContent="所有错误，都还住在这里。",kt("#roomConcept").textContent="走进两侧的房间，靠近发光的物件。"):(kt("#roomNumber").textContent=`0${t+1} / ${Cn[t].period}`,kt("#roomTitle").textContent=Cn[t].name,kt("#roomConcept").textContent=Cn[t].concept,ui(Cn[t].whisper)))}function Oc(){requestAnimationFrame(Oc);const i=Math.min(E0.getDelta(),.05);if(Zt?.active){Zt.update(qi()?0:i);return}if(!qi()){be.rotation.set(dr,ai,0,"YXZ");let e=0,n=0;(Pe.has("KeyW")||Pe.has("ArrowUp"))&&(n-=1),(Pe.has("KeyS")||Pe.has("ArrowDown"))&&(n+=1),(Pe.has("KeyA")||Pe.has("ArrowLeft"))&&(e-=1),(Pe.has("KeyD")||Pe.has("ArrowRight"))&&(e+=1);const s=Math.hypot(e,n)||1,r=(Pe.has("Shift")?4.5:2.6)*i,a=(e*Math.cos(ai)+n*Math.sin(ai))/s*r,o=(-e*Math.sin(ai)+n*Math.cos(ai))/s*r;if(Xl(be.position.x+a,be.position.z)||(be.position.x+=a),Xl(be.position.x,be.position.z+o)||(be.position.z+=o),Fc(),gn=Nc(new yt(0,0)),kt("#interact").hidden=!gn,gn){const l=Ts.find(c=>c.n===gn.userData.chapter);kt("#targetName").textContent=l?.object||""}}const t=performance.now();Dc.forEach((e,n)=>{e.halo.material.opacity=.3+Math.sin(t*.0015+n)*.18,e.group.rotation.y=e.activeUntil>t?Math.sin(t*.004)*.13:0}),dn.render(Me,be)}try{P0(),Zt=new y0(dn,{onClose:()=>Pe.clear(),onArchive:Lc})}catch(i){console.error(i),kt("#error").hidden=!1,kt("#walkBtn").disabled=!0}Ji("#intro");
