(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const go="180",_h=0,Zo=1,vh=2,fc=1,xh=2,Ri=3,qi=0,We=1,ni=2,Di=0,Hn=1,va=2,Jo=3,Qo=4,Mh=5,ln=100,Sh=101,yh=102,bh=103,Eh=104,Th=200,wh=201,Ah=202,Rh=203,xa=204,Ma=205,Ch=206,Ph=207,Ih=208,Dh=209,Lh=210,Uh=211,Nh=212,Fh=213,Oh=214,Sa=0,ya=1,ba=2,Wn=3,Ea=4,Ta=5,wa=6,Aa=7,pc=0,Bh=1,kh=2,Xi=0,mc=1,gc=2,_c=3,_o=4,vc=5,xc=6,Mc=7,Sc=300,Xn=301,qn=302,Ra=303,Ca=304,wr=306,xr=1e3,un=1001,Pa=1002,di=1003,zh=1004,ks=1005,_i=1006,Or=1007,dn=1008,Mi=1009,yc=1010,bc=1011,Ss=1012,vo=1013,pn=1014,Ci=1015,Li=1016,xo=1017,Mo=1018,ys=1020,Ec=35902,Tc=35899,wc=1021,Ac=1022,ui=1023,bs=1026,Es=1027,Rc=1028,So=1029,Cc=1030,yo=1031,bo=1033,fr=33776,pr=33777,mr=33778,gr=33779,Ia=35840,Da=35841,La=35842,Ua=35843,Na=36196,Fa=37492,Oa=37496,Ba=37808,ka=37809,za=37810,Ha=37811,Va=37812,Ga=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,ja=37818,Ka=37819,$a=37820,Za=37821,Ja=36492,Qa=36494,to=36495,eo=36283,io=36284,no=36285,so=36286,Hh=3200,Vh=3201,Pc=0,Gh=1,Wi="",De="srgb",Yn="srgb-linear",Mr="linear",Jt="srgb",Mn=7680,tl=519,Wh=512,Xh=513,qh=514,Ic=515,Yh=516,jh=517,Kh=518,$h=519,ro=35044,el="300 es",vi=2e3,Sr=2001;class Jn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let il=1234567;const xs=Math.PI/180,Ts=180/Math.PI;function Ui(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function qt(n,t,e){return Math.max(t,Math.min(e,n))}function Eo(n,t){return(n%t+t)%t}function Zh(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Jh(n,t,e){return n!==t?(e-n)/(t-n):0}function Ms(n,t,e){return(1-e)*n+e*t}function Qh(n,t,e,i){return Ms(n,t,1-Math.exp(-e*i))}function tu(n,t=1){return t-Math.abs(Eo(n,t*2)-t)}function eu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function iu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function nu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function su(n,t){return n+Math.random()*(t-n)}function ru(n){return n*(.5-Math.random())}function au(n){n!==void 0&&(il=n);let t=il+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ou(n){return n*xs}function lu(n){return n*Ts}function cu(n){return(n&n-1)===0&&n!==0}function hu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function uu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function du(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qt(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Qn={DEG2RAD:xs,RAD2DEG:Ts,generateUUID:Ui,clamp:qt,euclideanModulo:Eo,mapLinear:Zh,inverseLerp:Jh,lerp:Ms,damp:Qh,pingpong:tu,smoothstep:eu,smootherstep:iu,randInt:nu,randFloat:su,randFloatSpread:ru,seededRandom:au,degToRad:ou,radToDeg:lu,isPowerOfTwo:cu,ceilPowerOfTwo:hu,floorPowerOfTwo:uu,setQuaternionFromProperEuler:du,normalize:Qt,denormalize:hi};class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Is{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*x,w=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const R=Math.sqrt(E),A=Math.atan2(R,f*w);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const y=o*w;if(l=l*m+d*y,c=c*m+p*y,h=h*m+g*y,u=u*m+x*y,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Br.copy(this).projectOnVector(t),this.sub(Br)}reflect(t){return this.sub(Br.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new I,nl=new Is;class kt{constructor(t,e,i,s,r,a,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],w=s[1],E=s[4],y=s[7],R=s[2],A=s[5],C=s[8];return r[0]=a*x+o*w+l*R,r[3]=a*m+o*E+l*A,r[6]=a*f+o*y+l*C,r[1]=c*x+h*w+u*R,r[4]=c*m+h*E+u*A,r[7]=c*f+h*y+u*C,r[2]=d*x+p*w+g*R,r[5]=d*m+p*E+g*A,r[8]=d*f+p*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(o*i-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(kr.makeScale(t,e)),this}rotate(t){return this.premultiply(kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new kt;function Dc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fu(){const n=ws("canvas");return n.style.display="block",n}const sl={};function As(n){n in sl||(sl[n]=!0,console.warn(n))}function pu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const rl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),al=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mu(){const n={enabled:!0,workingColorSpace:Yn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return As("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return As("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yn]:{primaries:t,whitePoint:i,transfer:Mr,toXYZ:rl,fromXYZ:al,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:i,transfer:Jt,toXYZ:rl,fromXYZ:al,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),n}const jt=mu();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Sn;class gu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Sn===void 0&&(Sn=ws("canvas")),Sn.width=t.width,Sn.height=t.height;const s=Sn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Sn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ws("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ni(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ni(e[i]/255)*255):e[i]=Ni(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _u=0;class To{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zr(s[a].image)):r.push(zr(s[a]))}else r=zr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function zr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vu=0;const Hr=new I;class Fe extends Jn{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,i=un,s=un,r=_i,a=dn,o=ui,l=Mi,c=Fe.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Ui(),this.name="",this.source=new To(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hr).x}get height(){return this.source.getSize(Hr).y}get depth(){return this.source.getSize(Hr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xr:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xr:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Sc;Fe.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,i=0,s=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(p+1)/2,R=(f+1)/2,A=(h+d)/4,C=(u+x)/4,N=(g+m)/4;return E>y&&E>R?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=C/i):y>R?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=N/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=C/r,s=N/r),this.set(i,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-x)/w,this.z=(d-h)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xu extends Jn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Fe(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:_i,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new To(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends xu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Lc extends Fe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=di,this.minFilter=di,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mu extends Fe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=di,this.minFilter=di,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ai):ai.fromBufferAttribute(r,a),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zs.copy(i.boundingBox)),zs.applyMatrix4(t.matrixWorld),this.union(zs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Hs.subVectors(this.max,ss),yn.subVectors(t.a,ss),bn.subVectors(t.b,ss),En.subVectors(t.c,ss),Oi.subVectors(bn,yn),Bi.subVectors(En,bn),$i.subVectors(yn,En);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-$i.z,$i.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,$i.z,0,-$i.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-$i.y,$i.x,0];return!Vr(e,yn,bn,En,Hs)||(e=[1,0,0,0,1,0,0,0,1],!Vr(e,yn,bn,En,Hs))?!1:(Vs.crossVectors(Oi,Bi),e=[Vs.x,Vs.y,Vs.z],Vr(e,yn,bn,En,Hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const bi=[new I,new I,new I,new I,new I,new I,new I,new I],ai=new I,zs=new ts,yn=new I,bn=new I,En=new I,Oi=new I,Bi=new I,$i=new I,ss=new I,Hs=new I,Vs=new I,Zi=new I;function Vr(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Zi.fromArray(n,r);const o=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),h=i.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Su=new ts,rs=new I,Gr=new I;class Ar{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Su.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);const e=rs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(rs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(Gr)),this.expandByPoint(rs.copy(t.center).sub(Gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ei=new I,Wr=new I,Gs=new I,ki=new I,Xr=new I,Ws=new I,qr=new I;class wo{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Wr.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),ki.copy(this.origin).sub(Wr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Gs),o=ki.dot(this.direction),l=-ki.dot(Gs),c=ki.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wr).addScaledVector(Gs,d),p}intersectSphere(t,e){Ei.subVectors(t.center,this.origin);const i=Ei.dot(this.direction),s=Ei.dot(Ei)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,i,s,r){Xr.subVectors(e,t),Ws.subVectors(i,t),qr.crossVectors(Xr,Ws);let a=this.direction.dot(qr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,t);const l=o*this.direction.dot(Ws.crossVectors(ki,Ws));if(l<0)return null;const c=o*this.direction.dot(Xr.cross(ki));if(c<0||l+c>a)return null;const h=-o*ki.dot(qr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,i,s,r,a,o,l,c,h,u,d,p,g,x,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,d,p,g,x,m)}set(t,e,i,s,r,a,o,l,c,h,u,d,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Tn.setFromMatrixColumn(t,0).length(),r=1/Tn.setFromMatrixColumn(t,1).length(),a=1/Tn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yu,t,bu)}lookAt(t,e,i){const s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),zi.crossVectors(i,Ye),zi.lengthSq()===0&&(Math.abs(i.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),zi.crossVectors(i,Ye)),zi.normalize(),Xs.crossVectors(Ye,zi),s[0]=zi.x,s[4]=Xs.x,s[8]=Ye.x,s[1]=zi.y,s[5]=Xs.y,s[9]=Ye.y,s[2]=zi.z,s[6]=Xs.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],w=i[3],E=i[7],y=i[11],R=i[15],A=s[0],C=s[4],N=s[8],S=s[12],M=s[1],P=s[5],O=s[9],z=s[13],q=s[2],W=s[6],X=s[10],$=s[14],H=s[3],ot=s[7],ut=s[11],wt=s[15];return r[0]=a*A+o*M+l*q+c*H,r[4]=a*C+o*P+l*W+c*ot,r[8]=a*N+o*O+l*X+c*ut,r[12]=a*S+o*z+l*$+c*wt,r[1]=h*A+u*M+d*q+p*H,r[5]=h*C+u*P+d*W+p*ot,r[9]=h*N+u*O+d*X+p*ut,r[13]=h*S+u*z+d*$+p*wt,r[2]=g*A+x*M+m*q+f*H,r[6]=g*C+x*P+m*W+f*ot,r[10]=g*N+x*O+m*X+f*ut,r[14]=g*S+x*z+m*$+f*wt,r[3]=w*A+E*M+y*q+R*H,r[7]=w*C+E*P+y*W+R*ot,r[11]=w*N+E*O+y*X+R*ut,r[15]=w*S+E*z+y*$+R*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*p-i*l*p)+x*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-i*a*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],w=u*m*c-x*d*c+x*l*p-o*m*p-u*l*f+o*d*f,E=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,y=h*x*c-g*u*c+g*o*p-a*x*p-h*o*f+a*u*f,R=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,A=e*w+i*E+s*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=w*C,t[1]=(x*d*r-u*m*r-x*s*p+i*m*p+u*s*f-i*d*f)*C,t[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*f+i*l*f)*C,t[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*p-i*l*p)*C,t[4]=E*C,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*C,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*C,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*C,t[8]=y*C,t[9]=(g*u*r-h*x*r-g*i*p+e*x*p+h*i*f-e*u*f)*C,t[10]=(a*x*r-g*o*r+g*i*c-e*x*c-a*i*f+e*o*f)*C,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*p-e*o*p)*C,t[12]=R*C,t[13]=(h*x*s-g*u*s+g*i*d-e*x*d-h*i*m+e*u*m)*C,t[14]=(g*o*s-a*x*s-g*i*l+e*x*l+a*i*m-e*o*m)*C,t[15]=(a*u*s-h*o*s+h*i*l-e*u*l-a*i*d+e*o*d)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,x=a*h,m=a*u,f=o*u,w=l*c,E=l*h,y=l*u,R=i.x,A=i.y,C=i.z;return s[0]=(1-(x+f))*R,s[1]=(p+y)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(p-y)*A,s[5]=(1-(d+f))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(g+E)*C,s[9]=(m-w)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Tn.set(s[0],s[1],s[2]).length();const a=Tn.set(s[4],s[5],s[6]).length(),o=Tn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],oi.copy(this);const c=1/r,h=1/a,u=1/o;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,e.setFromRotationMatrix(oi),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=vi,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),p=(i+s)/(i-s);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===vi)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Sr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=vi,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),p=-(i+s)/(i-s);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===vi)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Sr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Tn=new I,oi=new oe,yu=new I(0,0,0),bu=new I(1,1,1),zi=new I,Xs=new I,Ye=new I,ol=new oe,ll=new Is;class Si{constructor(t=0,e=0,i=0,s=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ol,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Ao{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Eu=0;const cl=new I,wn=new Is,Ti=new oe,qs=new I,as=new I,Tu=new I,wu=new Is,hl=new I(1,0,0),ul=new I(0,1,0),dl=new I(0,0,1),fl={type:"added"},Au={type:"removed"},An={type:"childadded",child:null},Yr={type:"childremoved",child:null};class we extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new I,e=new Si,i=new Is,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new kt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wn.setFromAxisAngle(t,e),this.quaternion.multiply(wn),this}rotateOnWorldAxis(t,e){return wn.setFromAxisAngle(t,e),this.quaternion.premultiply(wn),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(ul,t)}rotateZ(t){return this.rotateOnAxis(dl,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(ul,t)}translateZ(t){return this.translateOnAxis(dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qs.copy(t):qs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(as,qs,this.up):Ti.lookAt(qs,as,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),wn.setFromRotationMatrix(Ti),this.quaternion.premultiply(wn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fl),An.child=t,this.dispatchEvent(An),An.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Au),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fl),An.child=t,this.dispatchEvent(An),An.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,Tu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,wu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}we.DEFAULT_UP=new I(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new I,wi=new I,jr=new I,Ai=new I,Rn=new I,Cn=new I,pl=new I,Kr=new I,$r=new I,Zr=new I,Jr=new ie,Qr=new ie,ta=new ie;class si{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),li.subVectors(t,e),s.cross(li);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){li.subVectors(s,e),wi.subVectors(i,e),jr.subVectors(t,e);const a=li.dot(li),o=li.dot(wi),l=li.dot(jr),c=wi.dot(wi),h=wi.dot(jr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(o,Ai.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Jr.setScalar(0),Qr.setScalar(0),ta.setScalar(0),Jr.fromBufferAttribute(t,e),Qr.fromBufferAttribute(t,i),ta.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Jr,r.x),a.addScaledVector(Qr,r.y),a.addScaledVector(ta,r.z),a}static isFrontFacing(t,e,i,s){return li.subVectors(i,e),wi.subVectors(t,e),li.cross(wi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),li.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return si.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return si.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Rn.subVectors(s,i),Cn.subVectors(r,i),Kr.subVectors(t,i);const l=Rn.dot(Kr),c=Cn.dot(Kr);if(l<=0&&c<=0)return e.copy(i);$r.subVectors(t,s);const h=Rn.dot($r),u=Cn.dot($r);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Rn,a);Zr.subVectors(t,r);const p=Rn.dot(Zr),g=Cn.dot(Zr);if(g>=0&&p<=g)return e.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Cn,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return pl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(pl,o);const f=1/(m+x+d);return a=x*f,o=d*f,e.copy(i).addScaledVector(Rn,a).addScaledVector(Cn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function ea(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ft{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=Eo(t,1),e=qt(e,0,1),i=qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ea(a,r,t+1/3),this.g=ea(a,r,t),this.b=ea(a,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const i=Uc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return jt.workingToColorSpace(Ne.copy(this),t),Math.round(qt(Ne.r*255,0,255))*65536+Math.round(qt(Ne.g*255,0,255))*256+Math.round(qt(Ne.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Ne.copy(this),e);const i=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=De){jt.workingToColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,s=Ne.b;return t!==De?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Ys);const i=Ms(Hi.h,Ys.h,e),s=Ms(Hi.s,Ys.s,e),r=Ms(Hi.l,Ys.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Ft;Ft.NAMES=Uc;let Ru=0;class _n extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Hn,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=Ma,this.blendEquation=ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Wn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mn,this.stencilZFail=Mn,this.stencilZPass=Mn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hn&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ma&&(i.blendDst=this.blendDst),this.blendEquation!==ln&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class jn extends _n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new I,js=new bt;let Cu=0;class ri{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ro,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)js.fromBufferAttribute(this,e),js.applyMatrix3(t),this.setXY(e,js.x,js.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Qt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),i=Qt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),i=Qt(i,this.array),s=Qt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),i=Qt(i,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ro&&(t.usage=this.usage),t}}class Nc extends ri{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Fc extends ri{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class pe extends ri{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Pu=0;const ei=new oe,ia=new we,Pn=new I,je=new ts,os=new ts,Pe=new I;class Ie extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dc(t)?Fc:Nc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,i){return ei.makeTranslation(t,e,i),this.applyMatrix4(ei),this}scale(t,e,i){return ei.makeScale(t,e,i),this.applyMatrix4(ei),this}lookAt(t){return ia.lookAt(t),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pn).negate(),this.translate(Pn.x,Pn.y,Pn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];os.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(je.min,os.min),je.expandByPoint(Pe),Pe.addVectors(je.max,os.max),je.expandByPoint(Pe)):(je.expandByPoint(os.min),je.expandByPoint(os.max))}je.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(Pn.fromBufferAttribute(t,c),Pe.add(Pn)),s=Math.max(s,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new I,l[N]=new I;const c=new I,h=new I,u=new I,d=new bt,p=new bt,g=new bt,x=new I,m=new I;function f(N,S,M){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[N].add(x),o[S].add(x),o[M].add(x),l[N].add(m),l[S].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let N=0,S=w.length;N<S;++N){const M=w[N],P=M.start,O=M.count;for(let z=P,q=P+O;z<q;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const E=new I,y=new I,R=new I,A=new I;function C(N){R.fromBufferAttribute(s,N),A.copy(R);const S=o[N];E.copy(S),E.sub(R.multiplyScalar(R.dot(S))).normalize(),y.crossVectors(A,S);const P=y.dot(l[N])<0?-1:1;a.setXYZW(N,E.x,E.y,E.z,P)}for(let N=0,S=w.length;N<S;++N){const M=w[N],P=M.start,O=M.count;for(let z=P,q=P+O;z<q;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ri(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new oe,Ji=new wo,Ks=new Ar,gl=new I,$s=new I,Zs=new I,Js=new I,na=new I,Qs=new I,_l=new I,tr=new I;class ee extends we{constructor(t=new Ie,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(na.fromBufferAttribute(u,t),a?Qs.addScaledVector(na,h):Qs.addScaledVector(na.sub(e),h))}e.add(Qs)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(r),Ji.copy(t.ray).recast(t.near),!(Ks.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Ks,gl)===null||Ji.origin.distanceToSquared(gl)>(t.far-t.near)**2))&&(ml.copy(r).invert(),Ji.copy(t.ray).applyMatrix4(ml),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,R=E;y<R;y+=3){const A=o.getX(y),C=o.getX(y+1),N=o.getX(y+2);s=er(this,f,t,i,c,h,u,A,C,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const w=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=er(this,a,t,i,c,h,u,w,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,R=E;y<R;y+=3){const A=y,C=y+1,N=y+2;s=er(this,f,t,i,c,h,u,A,C,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const w=m,E=m+1,y=m+2;s=er(this,a,t,i,c,h,u,w,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Iu(n,t,e,i,s,r,a,o){let l;if(t.side===We?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===qi,o),l===null)return null;tr.copy(o),tr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(tr);return c<e.near||c>e.far?null:{distance:c,point:tr.clone(),object:n}}function er(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,$s),n.getVertexPosition(l,Zs),n.getVertexPosition(c,Js);const h=Iu(n,t,e,i,$s,Zs,Js,_l);if(h){const u=new I;si.getBarycoord(_l,$s,Zs,Js,u),s&&(h.uv=si.getInterpolatedAttribute(s,o,l,c,u,new bt)),r&&(h.uv1=si.getInterpolatedAttribute(r,o,l,c,u,new bt)),a&&(h.normal=si.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};si.getNormal($s,Zs,Js,d.normal),h.face=d,h.barycoord=u}return h}class Yi extends Ie{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function g(x,m,f,w,E,y,R,A,C,N,S){const M=y/C,P=R/N,O=y/2,z=R/2,q=A/2,W=C+1,X=N+1;let $=0,H=0;const ot=new I;for(let ut=0;ut<X;ut++){const wt=ut*P-z;for(let Gt=0;Gt<W;Gt++){const se=Gt*M-O;ot[x]=se*w,ot[m]=wt*E,ot[f]=q,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[f]=A>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Gt/C),u.push(1-ut/N),$+=1}}for(let ut=0;ut<N;ut++)for(let wt=0;wt<C;wt++){const Gt=d+wt+W*ut,se=d+wt+W*(ut+1),ce=d+(wt+1)+W*(ut+1),$t=d+(wt+1)+W*ut;l.push(Gt,se,$t),l.push(se,ce,$t),H+=6}o.addGroup(p,H,S),p+=H,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Kn(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ke(n){const t={};for(let e=0;e<n.length;e++){const i=Kn(n[e]);for(const s in i)t[s]=i[s]}return t}function Du(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Oc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Rs={clone:Kn,merge:ke};var Lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ze extends _n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lu,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kn(t.uniforms),this.uniformsGroups=Du(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Bc extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new I,vl=new bt,xl=new bt;class Ge extends Bc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,vl,xl),e.subVectors(xl,vl)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const In=-90,Dn=1;class Nu extends we{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(In,Dn,t,e);s.layers=this.layers,this.add(s);const r=new Ge(In,Dn,t,e);r.layers=this.layers,this.add(r);const a=new Ge(In,Dn,t,e);a.layers=this.layers,this.add(a);const o=new Ge(In,Dn,t,e);o.layers=this.layers,this.add(o);const l=new Ge(In,Dn,t,e);l.layers=this.layers,this.add(l);const c=new Ge(In,Dn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class kc extends Fe{constructor(t=[],e=Xn,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fu extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new kc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yi(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:Kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:Di});r.uniforms.tEquirect.value=e;const a=new ee(s,r),o=e.minFilter;return e.minFilter===dn&&(e.minFilter=_i),new Nu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class Wt extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ou={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ou)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Wt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Ds{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=e}clone(){return new Ds(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ro extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Bu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ro,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Be=new I;class yr{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Qt(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),i=Qt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),i=Qt(i,this.array),s=Qt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),i=Qt(i,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ri(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zc extends _n{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ln;const ls=new I,Un=new I,Nn=new I,Fn=new bt,cs=new bt,Hc=new oe,ir=new I,hs=new I,nr=new I,Ml=new bt,ra=new bt,Sl=new bt;class ku extends we{constructor(t=new zc){if(super(),this.isSprite=!0,this.type="Sprite",Ln===void 0){Ln=new Ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Bu(e,5);Ln.setIndex([0,1,2,0,2,3]),Ln.setAttribute("position",new yr(i,3,0,!1)),Ln.setAttribute("uv",new yr(i,2,3,!1))}this.geometry=Ln,this.material=t,this.center=new bt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Un.setFromMatrixScale(this.matrixWorld),Hc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Nn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Un.multiplyScalar(-Nn.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;sr(ir.set(-.5,-.5,0),Nn,a,Un,s,r),sr(hs.set(.5,-.5,0),Nn,a,Un,s,r),sr(nr.set(.5,.5,0),Nn,a,Un,s,r),Ml.set(0,0),ra.set(1,0),Sl.set(1,1);let o=t.ray.intersectTriangle(ir,hs,nr,!1,ls);if(o===null&&(sr(hs.set(-.5,.5,0),Nn,a,Un,s,r),ra.set(0,1),o=t.ray.intersectTriangle(ir,nr,hs,!1,ls),o===null))return;const l=t.ray.origin.distanceTo(ls);l<t.near||l>t.far||e.push({distance:l,point:ls.clone(),uv:si.getInterpolation(ls,ir,hs,nr,Ml,ra,Sl,new bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function sr(n,t,e,i,s,r){Fn.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(cs.x=r*Fn.x-s*Fn.y,cs.y=s*Fn.x+r*Fn.y):cs.copy(Fn),n.copy(t),n.x+=cs.x,n.y+=cs.y,n.applyMatrix4(Hc)}const aa=new I,zu=new I,Hu=new kt;class an{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=aa.subVectors(i,e).cross(zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(aa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Hu.getNormalMatrix(t),s=this.coplanarPoint(aa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Ar,Vu=new bt(.5,.5),rr=new I;class Co{constructor(t=new an,e=new an,i=new an,s=new an,r=new an,a=new an){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vi,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],x=r[9],m=r[10],f=r[11],w=r[12],E=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-a,p-h,f-g,R-w).normalize(),s[1].setComponents(c+a,p+h,f+g,R+w).normalize(),s[2].setComponents(c+o,p+u,f+x,R+E).normalize(),s[3].setComponents(c-o,p-u,f-x,R-E).normalize(),i)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,p-d,f-m,R-y).normalize();else if(s[4].setComponents(c-l,p-d,f-m,R-y).normalize(),e===vi)s[5].setComponents(c+l,p+d,f+m,R+y).normalize();else if(e===Sr)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){Qi.center.set(0,0,0);const e=Vu.distanceTo(t.center);return Qi.radius=.7071067811865476+e,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(rr.x=s.normal.x>0?t.max.x:t.min.x,rr.y=s.normal.y>0?t.max.y:t.min.y,rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rr extends _n{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yl=new oe,ao=new wo,ar=new Ar,or=new I;class Po extends we{constructor(t=new Ie,e=new Rr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;yl.copy(s).invert(),ao.copy(t.ray).applyMatrix4(yl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,x=p;g<x;g++){const m=c.getX(g);or.fromBufferAttribute(u,m),bl(or,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,x=p;g<x;g++)or.fromBufferAttribute(u,g),bl(or,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bl(n,t,e,i,s,r,a){const o=ao.distanceSqToPoint(n);if(o<e){const l=new I;ao.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class oo extends Fe{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vc extends Fe{constructor(t,e,i=pn,s,r,a,o=di,l=di,c,h=bs,u=1){if(h!==bs&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new To(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Gc extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ls extends Ie{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const x=[],m=i/2;let f=0;w(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(p,2));function w(){const y=new I,R=new I;let A=0;const C=(e-t)/i;for(let N=0;N<=r;N++){const S=[],M=N/r,P=M*(e-t)+t;for(let O=0;O<=s;O++){const z=O/s,q=z*l+o,W=Math.sin(q),X=Math.cos(q);R.x=P*W,R.y=-M*i+m,R.z=P*X,u.push(R.x,R.y,R.z),y.set(W,C,X).normalize(),d.push(y.x,y.y,y.z),p.push(z,1-M),S.push(g++)}x.push(S)}for(let N=0;N<s;N++)for(let S=0;S<r;S++){const M=x[S][N],P=x[S+1][N],O=x[S+1][N+1],z=x[S][N+1];(t>0||S!==0)&&(h.push(M,P,z),A+=3),(e>0||S!==r-1)&&(h.push(P,O,z),A+=3)}c.addGroup(f,A,0),f+=A}function E(y){const R=g,A=new bt,C=new I;let N=0;const S=y===!0?t:e,M=y===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let O=0;O<=s;O++){const q=O/s*l+o,W=Math.cos(q),X=Math.sin(q);C.x=S*X,C.y=m*M,C.z=S*W,u.push(C.x,C.y,C.z),d.push(0,M,0),A.x=W*.5+.5,A.y=X*.5*M+.5,p.push(A.x,A.y),g++}for(let O=0;O<s;O++){const z=R+O,q=P+O;y===!0?h.push(q,q+1,z):h.push(q+1,q,z),N+=3}c.addGroup(f,N,y===!0?1:2),f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cr extends Ls{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Cr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pi extends Ie{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const w=f*d-a;for(let E=0;E<c;E++){const y=E*u-r;g.push(y,-w,0),x.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const E=w+c*f,y=w+c*(f+1),R=w+1+c*(f+1),A=w+1+c*f;p.push(E,y,A),p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Io extends Ie{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new I,g=new bt;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const f=r+m/i*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){const m=x*(i+1);for(let f=0;f<i;f++){const w=f+m,E=w,y=w+i+1,R=w+i+2,A=w+1;o.push(E,y,A),o.push(y,R,A)}}this.setIndex(o),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Pr extends Ie{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,d=new I,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){const w=[],E=f/i;let y=0;f===0&&a===0?y=.5/e:f===i&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const A=R/e;u.x=-t*Math.cos(s+A*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(s+A*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+y,1-E),w.push(c++)}h.push(w)}for(let f=0;f<i;f++)for(let w=0;w<e;w++){const E=h[f][w+1],y=h[f][w],R=h[f+1][w],A=h[f+1][w+1];(f!==0||a>0)&&p.push(E,y,A),(f!==i-1||l<Math.PI)&&p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Do extends Ie{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const x=g/s*r,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,w=(s+1)*p+g;a.push(x,m,w),a.push(m,f,w)}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Gu extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ms extends _n{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wu extends _n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xu extends _n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const oa={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class qu{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Yu=new qu;class Lo{constructor(t){this.manager=t!==void 0?t:Yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Lo.DEFAULT_MATERIAL_NAME="__DEFAULT";const On=new WeakMap;class ju extends Lo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=oa.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=On.get(a);u===void 0&&(u=[],On.set(a,u)),u.push({onLoad:e,onError:s})}return a}const o=ws("img");function l(){h(),e&&e(this);const u=On.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}On.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),oa.remove(`image:${t}`);const d=On.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(u)}On.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),oa.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class Ku extends Lo{constructor(t){super(t)}load(t,e,i,s){const r=new Fe,a=new ju(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Uo extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class No extends Uo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const la=new oe,El=new I,Tl=new I;class Wc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;El.setFromMatrixPosition(t.matrixWorld),e.position.copy(El),Tl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tl),e.updateMatrixWorld(),la.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(la)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const wl=new oe,us=new I,ca=new I;class $u extends Wc{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),us.setFromMatrixPosition(t.matrixWorld),i.position.copy(us),ca.copy(i.position),ca.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ca),i.updateMatrixWorld(),s.makeTranslation(-us.x,-us.y,-us.z),wl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl,i.coordinateSystem,i.reversedDepth)}}class Cs extends Uo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $u}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Fo extends Bc{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zu extends Wc{constructor(){super(new Fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xc extends Uo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Zu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ju extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class qc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Al=new oe;class Yc{constructor(t,e,i=0,s=1/0){this.ray=new wo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Al.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Al),this}intersectObject(t,e=!0,i=[]){return lo(t,this,i,e),i.sort(Rl),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)lo(t[s],this,i,e);return i.sort(Rl),i}}function Rl(n,t){return n.distance-t.distance}function lo(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)lo(r[a],t,e,!0)}}function Cl(n,t,e,i){const s=Qu(i);switch(e){case wc:return n*t;case Rc:return n*t/s.components*s.byteLength;case So:return n*t/s.components*s.byteLength;case Cc:return n*t*2/s.components*s.byteLength;case yo:return n*t*2/s.components*s.byteLength;case Ac:return n*t*3/s.components*s.byteLength;case ui:return n*t*4/s.components*s.byteLength;case bo:return n*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Da:case Ua:return Math.max(n,16)*Math.max(t,8)/4;case Ia:case La:return Math.max(n,8)*Math.max(t,8)/2;case Na:case Fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case za:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Va:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case qa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case $a:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Za:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ja:case Qa:case to:return Math.ceil(n/4)*Math.ceil(t/4)*16;case eo:case io:return Math.ceil(n/4)*Math.ceil(t/4)*8;case no:case so:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qu(n){switch(n){case Mi:case yc:return{byteLength:1,components:1};case Ss:case bc:case Li:return{byteLength:2,components:1};case xo:case Mo:return{byteLength:2,components:4};case pn:case vo:case Ci:return{byteLength:4,components:1};case Ec:case Tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);function jc(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function td(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,id=`#ifdef USE_ALPHAHASH
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
#endif`,nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,od=`#ifdef USE_AOMAP
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
#endif`,ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cd=`#ifdef USE_BATCHING
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
#endif`,hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pd=`#ifdef USE_IRIDESCENCE
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
#endif`,md=`#ifdef USE_BUMPMAP
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ed=`#define PI 3.141592653589793
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
} // validated`,Td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Id="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vd=`#ifdef USE_GRADIENTMAP
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
}`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qd=`uniform bool receiveShadow;
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
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
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
#endif`,Qd=`struct PhysicalMaterial {
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
}`,tf=`
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
#endif`,ef=`#if defined( RE_IndirectDiffuse )
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
#endif`,nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uf=`#if defined( USE_POINTS_UV )
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
#endif`,df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`#ifdef USE_MORPHTARGETS
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
#endif`,vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ef=`#ifdef USE_NORMALMAP
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
#endif`,Tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,If=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zf=`float getShadowMask() {
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
}`,Hf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vf=`#ifdef USE_SKINNING
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
#endif`,Gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wf=`#ifdef USE_SKINNING
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
#endif`,Xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kf=`#ifdef USE_TRANSMISSION
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
#endif`,$f=`#ifdef USE_TRANSMISSION
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ip=`uniform sampler2D t2D;
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`#include <common>
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
}`,lp=`#if DEPTH_PACKING == 3200
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
}`,cp=`#define DISTANCE
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
}`,hp=`#define DISTANCE
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`uniform float scale;
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,gp=`uniform vec3 diffuse;
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
}`,_p=`#define LAMBERT
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
}`,vp=`#define LAMBERT
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
}`,xp=`#define MATCAP
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
}`,Mp=`#define MATCAP
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
}`,Sp=`#define NORMAL
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
}`,yp=`#define NORMAL
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
}`,bp=`#define PHONG
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
}`,Ep=`#define PHONG
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
}`,Tp=`#define STANDARD
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
}`,wp=`#define STANDARD
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
}`,Ap=`#define TOON
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
}`,Rp=`#define TOON
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
}`,Cp=`uniform float size;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Ip=`#include <common>
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
}`,Dp=`uniform vec3 color;
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
}`,Lp=`uniform float rotation;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:ed,alphahash_pars_fragment:id,alphamap_fragment:nd,alphamap_pars_fragment:sd,alphatest_fragment:rd,alphatest_pars_fragment:ad,aomap_fragment:od,aomap_pars_fragment:ld,batching_pars_vertex:cd,batching_vertex:hd,begin_vertex:ud,beginnormal_vertex:dd,bsdfs:fd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:_d,clipping_planes_pars_vertex:vd,clipping_planes_vertex:xd,color_fragment:Md,color_pars_fragment:Sd,color_pars_vertex:yd,color_vertex:bd,common:Ed,cube_uv_reflection_fragment:Td,defaultnormal_vertex:wd,displacementmap_pars_vertex:Ad,displacementmap_vertex:Rd,emissivemap_fragment:Cd,emissivemap_pars_fragment:Pd,colorspace_fragment:Id,colorspace_pars_fragment:Dd,envmap_fragment:Ld,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Nd,envmap_pars_vertex:Fd,envmap_physical_pars_fragment:Yd,envmap_vertex:Od,fog_vertex:Bd,fog_pars_vertex:kd,fog_fragment:zd,fog_pars_fragment:Hd,gradientmap_pars_fragment:Vd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:qd,lights_toon_fragment:jd,lights_toon_pars_fragment:Kd,lights_phong_fragment:$d,lights_phong_pars_fragment:Zd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Qd,lights_fragment_begin:tf,lights_fragment_maps:ef,lights_fragment_end:nf,logdepthbuf_fragment:sf,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:af,logdepthbuf_vertex:of,map_fragment:lf,map_pars_fragment:cf,map_particle_fragment:hf,map_particle_pars_fragment:uf,metalnessmap_fragment:df,metalnessmap_pars_fragment:ff,morphinstance_vertex:pf,morphcolor_vertex:mf,morphnormal_vertex:gf,morphtarget_pars_vertex:_f,morphtarget_vertex:vf,normal_fragment_begin:xf,normal_fragment_maps:Mf,normal_pars_fragment:Sf,normal_pars_vertex:yf,normal_vertex:bf,normalmap_pars_fragment:Ef,clearcoat_normal_fragment_begin:Tf,clearcoat_normal_fragment_maps:wf,clearcoat_pars_fragment:Af,iridescence_pars_fragment:Rf,opaque_fragment:Cf,packing:Pf,premultiplied_alpha_fragment:If,project_vertex:Df,dithering_fragment:Lf,dithering_pars_fragment:Uf,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Ff,shadowmap_pars_fragment:Of,shadowmap_pars_vertex:Bf,shadowmap_vertex:kf,shadowmask_pars_fragment:zf,skinbase_vertex:Hf,skinning_pars_vertex:Vf,skinning_vertex:Gf,skinnormal_vertex:Wf,specularmap_fragment:Xf,specularmap_pars_fragment:qf,tonemapping_fragment:Yf,tonemapping_pars_fragment:jf,transmission_fragment:Kf,transmission_pars_fragment:$f,uv_pars_fragment:Zf,uv_pars_vertex:Jf,uv_vertex:Qf,worldpos_vertex:tp,background_vert:ep,background_frag:ip,backgroundCube_vert:np,backgroundCube_frag:sp,cube_vert:rp,cube_frag:ap,depth_vert:op,depth_frag:lp,distanceRGBA_vert:cp,distanceRGBA_frag:hp,equirect_vert:up,equirect_frag:dp,linedashed_vert:fp,linedashed_frag:pp,meshbasic_vert:mp,meshbasic_frag:gp,meshlambert_vert:_p,meshlambert_frag:vp,meshmatcap_vert:xp,meshmatcap_frag:Mp,meshnormal_vert:Sp,meshnormal_frag:yp,meshphong_vert:bp,meshphong_frag:Ep,meshphysical_vert:Tp,meshphysical_frag:wp,meshtoon_vert:Ap,meshtoon_frag:Rp,points_vert:Cp,points_frag:Pp,shadow_vert:Ip,shadow_frag:Dp,sprite_vert:Lp,sprite_frag:Up},at={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},gi={basic:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:ke([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:ke([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:ke([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:ke([at.points,at.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:ke([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:ke([at.common,at.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:ke([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:ke([at.sprite,at.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:ke([at.common,at.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:ke([at.lights,at.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};gi.physical={uniforms:ke([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const lr={r:0,b:0,g:0},tn=new Si,Np=new oe;function Fp(n,t,e,i,s,r,a){const o=new Ft(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function x(E){let y=!1;const R=g(E);R===null?f(o,l):R&&R.isColor&&(f(R,1),y=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,y){const R=g(y);R&&(R.isCubeTexture||R.mapping===wr)?(h===void 0&&(h=new ee(new Yi(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:Kn(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),tn.copy(y.backgroundRotation),tn.x*=-1,tn.y*=-1,tn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(tn.y*=-1,tn.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(tn)),h.material.toneMapped=jt.getTransfer(R.colorSpace)!==Jt,(u!==R||d!==R.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ee(new Pi(2,2),new ze({name:"BackgroundMaterial",uniforms:Kn(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=jt.getTransfer(R.colorSpace)!==Jt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,y){E.getRGB(lr,Oc(n)),i.buffers.color.setClear(lr.r,lr.g,lr.b,y,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:x,addToRenderList:m,dispose:w}}function Op(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(M,P,O,z,q){let W=!1;const X=u(z,O,P);r!==X&&(r=X,c(r.object)),W=p(M,z,O,q),W&&g(M,z,O,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(M,P,O,z),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,P,O){const z=O.wireframe===!0;let q=i[M.id];q===void 0&&(q={},i[M.id]=q);let W=q[P.id];W===void 0&&(W={},q[P.id]=W);let X=W[z];return X===void 0&&(X=d(l()),W[z]=X),X}function d(M){const P=[],O=[],z=[];for(let q=0;q<e;q++)P[q]=0,O[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,P,O,z){const q=r.attributes,W=P.attributes;let X=0;const $=O.getAttributes();for(const H in $)if($[H].location>=0){const ut=q[H];let wt=W[H];if(wt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(wt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(wt=M.instanceColor)),ut===void 0||ut.attribute!==wt||wt&&ut.data!==wt.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(M,P,O,z){const q={},W=P.attributes;let X=0;const $=O.getAttributes();for(const H in $)if($[H].location>=0){let ut=W[H];ut===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));const wt={};wt.attribute=ut,ut&&ut.data&&(wt.data=ut.data),q[H]=wt,X++}r.attributes=q,r.attributesNum=X,r.index=z}function x(){const M=r.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const O=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;O[M]=1,z[M]===0&&(n.enableVertexAttribArray(M),z[M]=1),q[M]!==P&&(n.vertexAttribDivisor(M,P),q[M]=P)}function w(){const M=r.newAttributes,P=r.enabledAttributes;for(let O=0,z=P.length;O<z;O++)P[O]!==M[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function E(M,P,O,z,q,W,X){X===!0?n.vertexAttribIPointer(M,P,O,q,W):n.vertexAttribPointer(M,P,O,z,q,W)}function y(M,P,O,z){x();const q=z.attributes,W=O.getAttributes(),X=P.defaultAttributeValues;for(const $ in W){const H=W[$];if(H.location>=0){let ot=q[$];if(ot===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){const ut=ot.normalized,wt=ot.itemSize,Gt=t.get(ot);if(Gt===void 0)continue;const se=Gt.buffer,ce=Gt.type,$t=Gt.bytesPerElement,Y=ce===n.INT||ce===n.UNSIGNED_INT||ot.gpuType===vo;if(ot.isInterleavedBufferAttribute){const Z=ot.data,mt=Z.stride,Lt=ot.offset;if(Z.isInstancedInterleavedBuffer){for(let Tt=0;Tt<H.locationSize;Tt++)f(H.location+Tt,Z.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Tt=0;Tt<H.locationSize;Tt++)m(H.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,se);for(let Tt=0;Tt<H.locationSize;Tt++)E(H.location+Tt,wt/H.locationSize,ce,ut,mt*$t,(Lt+wt/H.locationSize*Tt)*$t,Y)}else{if(ot.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)f(H.location+Z,ot.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z);n.bindBuffer(n.ARRAY_BUFFER,se);for(let Z=0;Z<H.locationSize;Z++)E(H.location+Z,wt/H.locationSize,ce,ut,wt*$t,wt/H.locationSize*Z*$t,Y)}}else if(X!==void 0){const ut=X[$];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv(H.location,ut);break;case 3:n.vertexAttrib3fv(H.location,ut);break;case 4:n.vertexAttrib4fv(H.location,ut);break;default:n.vertexAttrib1fv(H.location,ut)}}}}w()}function R(){N();for(const M in i){const P=i[M];for(const O in P){const z=P[O];for(const q in z)h(z[q].object),delete z[q];delete P[O]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const O in P){const z=P[O];for(const q in z)h(z[q].object),delete z[q];delete P[O]}delete i[M.id]}function C(M){for(const P in i){const O=i[P];if(O[M.id]===void 0)continue;const z=O[M.id];for(const q in z)h(z[q].object),delete z[q];delete O[M.id]}}function N(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function Bp(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==ui&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const N=C===Li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Mi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ci&&!N)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function zp(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new an,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:i,E=w*4;let y=f.clippingState||null;l.value=y,y=h(g,d,E,p);for(let R=0;R!==E;++R)y[R]=e[R];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,y=p;E!==x;++E,y+=4)a.copy(u[E]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Hp(n){let t=new WeakMap;function e(a,o){return o===Ra?a.mapping=Xn:o===Ca&&(a.mapping=qn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ra||o===Ca)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Fu(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const zn=4,Pl=[.125,.215,.35,.446,.526,.582],cn=20,ha=new Fo,Il=new Ft;let ua=null,da=0,fa=0,pa=!1;const on=(1+Math.sqrt(5))/2,Bn=1/on,Dl=[new I(-on,Bn,0),new I(on,Bn,0),new I(-Bn,0,on),new I(Bn,0,on),new I(0,on,-Bn),new I(0,on,Bn),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Vp=new I;class Ll{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=Vp}=r;ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,da,fa),this._renderer.xr.enabled=pa,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xn||t.mapping===qn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Li,format:ui,colorSpace:Yn,depthBuffer:!1},s=Ul(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ul(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gp(r)),this._blurMaterial=Wp(r,t,e)}return s}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,i,s,r){const l=new Ge(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Il),u.toneMapping=Xi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const x=new jn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),m=new ee(new Yi,x);let f=!1;const w=t.background;w?w.isColor&&(x.color.copy(w),t.background=null,f=!0):(x.color.copy(Il),f=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const R=this._cubeSize;cr(s,y*R,E>2?R:0,R,R),u.setRenderTarget(s),f&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=w}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Xn||t.mapping===qn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;cr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,ha)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dl[(s-r-1)%Dl.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ee(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*cn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):cn;m>cn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cn}`);const f=[];let w=0;for(let C=0;C<cn;++C){const N=C/x,S=Math.exp(-N*N/2);f.push(S),C===0?w+=S:C<m&&(w+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const y=this._sizeLods[s],R=3*y*(s>E-zn?s-E+zn:0),A=4*(this._cubeSize-y);cr(e,R,A,3*y,2*y),l.setRenderTarget(e),l.render(u,ha)}}function Gp(n){const t=[],e=[],i=[];let s=n;const r=n-zn+1+Pl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-zn?l=Pl[a-n+zn-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,w=new Float32Array(x*g*p),E=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,N=A>2?0:-1,S=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];w.set(S,x*g*A),E.set(d,m*g*A);const M=[A,A,A,A,A,A];y.set(M,f*g*A)}const R=new Ie;R.setAttribute("position",new ri(w,x)),R.setAttribute("uv",new ri(E,m)),R.setAttribute("faceIndex",new ri(y,f)),t.push(R),s>zn&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ul(n,t,e){const i=new fi(n,t,e);return i.texture.mapping=wr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Wp(n,t,e){const i=new Float32Array(cn),s=new I(0,1,0);return new ze({name:"SphericalGaussianBlur",defines:{n:cn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Nl(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Fl(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Oo(){return`

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
	`}function Xp(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ra||l===Ca,h=l===Xn||l===qn;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ll(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ll(n)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function qp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&As("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Yp(n,t,e,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let E=0,y=w.length;E<y;E+=3){const R=w[E+0],A=w[E+1],C=w[E+2];d.push(R,A,A,C,C,R)}}else if(g!==void 0){const w=g.array;x=g.version;for(let E=0,y=w.length/3-1;E<y;E+=3){const R=E+0,A=E+1,C=E+2;d.push(R,A,A,C,C,R)}}else return;const m=new(Dc(d)?Fc:Nc)(d,1);m.version=x;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function jp(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),e.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*a,g),e.update(p,i,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function u(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*x[w];e.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Kp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function $p(n,t,e){const i=new WeakMap,s=new ie;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let M=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let R=o.attributes.position.count*y,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*A*4*u),N=new Lc(C,R,A,u);N.type=Ci,N.needsUpdate=!0;const S=y*4;for(let P=0;P<u;P++){const O=f[P],z=w[P],q=E[P],W=R*A*4*P;for(let X=0;X<O.count;X++){const $=X*S;g===!0&&(s.fromBufferAttribute(O,X),C[W+$+0]=s.x,C[W+$+1]=s.y,C[W+$+2]=s.z,C[W+$+3]=0),x===!0&&(s.fromBufferAttribute(z,X),C[W+$+4]=s.x,C[W+$+5]=s.y,C[W+$+6]=s.z,C[W+$+7]=0),m===!0&&(s.fromBufferAttribute(q,X),C[W+$+8]=s.x,C[W+$+9]=s.y,C[W+$+10]=s.z,C[W+$+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new bt(R,A)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Zp(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Kc=new Fe,Ol=new Vc(1,1),$c=new Lc,Zc=new Mu,Jc=new kc,Bl=[],kl=[],zl=new Float32Array(16),Hl=new Float32Array(9),Vl=new Float32Array(4);function es(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Bl[s];if(r===void 0&&(r=new Float32Array(s),Bl[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Re(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ir(n,t){let e=kl[t];e===void 0&&(e=new Int32Array(t),kl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Jp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Qp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),Re(e,t)}}function tm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),Re(e,t)}}function em(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),Re(e,t)}}function im(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Vl.set(i),n.uniformMatrix2fv(this.addr,!1,Vl),Re(e,i)}}function nm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Hl.set(i),n.uniformMatrix3fv(this.addr,!1,Hl),Re(e,i)}}function sm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;zl.set(i),n.uniformMatrix4fv(this.addr,!1,zl),Re(e,i)}}function rm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function am(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),Re(e,t)}}function om(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),Re(e,t)}}function lm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),Re(e,t)}}function cm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function hm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),Re(e,t)}}function um(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),Re(e,t)}}function dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),Re(e,t)}}function fm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ol.compareFunction=Ic,r=Ol):r=Kc,e.setTexture2D(t||r,s)}function pm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Zc,s)}function mm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Jc,s)}function gm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$c,s)}function _m(n){switch(n){case 5126:return Jp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return im;case 35675:return nm;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function vm(n,t){n.uniform1fv(this.addr,t)}function xm(n,t){const e=es(t,this.size,2);n.uniform2fv(this.addr,e)}function Mm(n,t){const e=es(t,this.size,3);n.uniform3fv(this.addr,e)}function Sm(n,t){const e=es(t,this.size,4);n.uniform4fv(this.addr,e)}function ym(n,t){const e=es(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function bm(n,t){const e=es(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Em(n,t){const e=es(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Tm(n,t){n.uniform1iv(this.addr,t)}function wm(n,t){n.uniform2iv(this.addr,t)}function Am(n,t){n.uniform3iv(this.addr,t)}function Rm(n,t){n.uniform4iv(this.addr,t)}function Cm(n,t){n.uniform1uiv(this.addr,t)}function Pm(n,t){n.uniform2uiv(this.addr,t)}function Im(n,t){n.uniform3uiv(this.addr,t)}function Dm(n,t){n.uniform4uiv(this.addr,t)}function Lm(n,t,e){const i=this.cache,s=t.length,r=Ir(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Kc,r[a])}function Um(n,t,e){const i=this.cache,s=t.length,r=Ir(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zc,r[a])}function Nm(n,t,e){const i=this.cache,s=t.length,r=Ir(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jc,r[a])}function Fm(n,t,e){const i=this.cache,s=t.length,r=Ir(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$c,r[a])}function Om(n){switch(n){case 5126:return vm;case 35664:return xm;case 35665:return Mm;case 35666:return Sm;case 35674:return ym;case 35675:return bm;case 35676:return Em;case 5124:case 35670:return Tm;case 35667:case 35671:return wm;case 35668:case 35672:return Am;case 35669:case 35673:return Rm;case 5125:return Cm;case 36294:return Pm;case 36295:return Im;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Fm}}class Bm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=_m(e.type)}}class km{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Om(e.type)}}class zm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Gl(n,t){n.seq.push(t),n.map[t.id]=t}function Hm(n,t,e){const i=n.name,s=i.length;for(ma.lastIndex=0;;){const r=ma.exec(i),a=ma.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gl(e,c===void 0?new Bm(o,n,t):new km(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new zm(o),Gl(e,u)),e=u}}}class _r{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Hm(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Wl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Vm=37297;let Gm=0;function Wm(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Xl=new kt;function Xm(n){jt._getMatrix(Xl,jt.workingColorSpace,n);const t=`mat3( ${Xl.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case Mr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ql(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Wm(n.getShaderSource(t),o)}else return r}function qm(n,t){const e=Xm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ym(n,t){let e;switch(t){case mc:e="Linear";break;case gc:e="Reinhard";break;case _c:e="Cineon";break;case _o:e="ACESFilmic";break;case xc:e="AgX";break;case Mc:e="Neutral";break;case vc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hr=new I;function jm(){jt.getLuminanceCoefficients(hr);const n=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Km(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function $m(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zm(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function gs(n){return n!==""}function Yl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(n){return n.replace(Jm,t0)}const Qm=new Map;function t0(n,t){let e=Ht[t];if(e===void 0){const i=Qm.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return co(e)}const e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(n){return n.replace(e0,i0)}function i0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $l(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function n0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function s0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xn:case qn:t="ENVMAP_TYPE_CUBE";break;case wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function r0(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===qn&&(t="ENVMAP_MODE_REFRACTION"),t}function a0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pc:t="ENVMAP_BLENDING_MULTIPLY";break;case Bh:t="ENVMAP_BLENDING_MIX";break;case kh:t="ENVMAP_BLENDING_ADD";break}return t}function o0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function l0(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=n0(e),c=s0(e),h=r0(e),u=a0(e),d=o0(e),p=Km(e),g=$m(r),x=s.createProgram();let m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),f.length>0&&(f+=`
`)):(m=[$l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),f=[$l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Xi?Ym("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,qm("linearToOutputTexel",e.outputColorSpace),jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),a=co(a),a=Yl(a,e),a=jl(a,e),o=co(o),o=Yl(o,e),o=jl(o,e),a=Kl(a),o=Kl(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=w+m+a,y=w+f+o,R=Wl(s,s.VERTEX_SHADER,E),A=Wl(s,s.FRAGMENT_SHADER,y);s.attachShader(x,R),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(P){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(R)||"",q=s.getShaderInfoLog(A)||"",W=O.trim(),X=z.trim(),$=q.trim();let H=!0,ot=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,R,A);else{const ut=ql(s,R,"vertex"),wt=ql(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ut+`
`+wt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||$==="")&&(ot=!1);ot&&(P.diagnostics={runnable:H,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:$,prefix:f}})}s.deleteShader(R),s.deleteShader(A),N=new _r(s,x),S=Zm(s,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Vm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let c0=0;class h0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new u0(t),e.set(t,i)),i}}class u0{constructor(t){this.id=c0++,this.code=t,this.usedTimes=0}}function d0(n,t,e,i,s,r,a){const o=new Ao,l=new h0,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,O,z){const q=O.fog,W=z.geometry,X=S.isMeshStandardMaterial?O.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),H=$&&$.mapping===wr?$.image.height:null,ot=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,wt=ut!==void 0?ut.length:0;let Gt=0;W.morphAttributes.position!==void 0&&(Gt=1),W.morphAttributes.normal!==void 0&&(Gt=2),W.morphAttributes.color!==void 0&&(Gt=3);let se,ce,$t,Y;if(ot){const Zt=gi[ot];se=Zt.vertexShader,ce=Zt.fragmentShader}else se=S.vertexShader,ce=S.fragmentShader,l.update(S),$t=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);const Z=n.getRenderTarget(),mt=n.state.buffers.depth.getReversed(),Lt=z.isInstancedMesh===!0,Tt=z.isBatchedMesh===!0,Yt=!!S.map,Le=!!S.matcap,T=!!$,he=!!S.aoMap,Nt=!!S.lightMap,It=!!S.bumpMap,vt=!!S.normalMap,ue=!!S.displacementMap,xt=!!S.emissiveMap,zt=!!S.metalnessMap,Ce=!!S.roughnessMap,Me=S.anisotropy>0,b=S.clearcoat>0,_=S.dispersion>0,F=S.iridescence>0,G=S.sheen>0,K=S.transmission>0,V=Me&&!!S.anisotropyMap,Et=b&&!!S.clearcoatMap,nt=b&&!!S.clearcoatNormalMap,Mt=b&&!!S.clearcoatRoughnessMap,St=F&&!!S.iridescenceMap,tt=F&&!!S.iridescenceThicknessMap,ht=G&&!!S.sheenColorMap,Pt=G&&!!S.sheenRoughnessMap,yt=!!S.specularMap,lt=!!S.specularColorMap,Ot=!!S.specularIntensityMap,D=K&&!!S.transmissionMap,et=K&&!!S.thicknessMap,st=!!S.gradientMap,ft=!!S.alphaMap,J=S.alphaTest>0,j=!!S.alphaHash,_t=!!S.extensions;let Ut=Xi;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ut=n.toneMapping);const re={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:ce,defines:S.defines,customVertexShaderID:$t,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Tt,batchingColor:Tt&&z._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&z.instanceColor!==null,instancingMorph:Lt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Yn,alphaToCoverage:!!S.alphaToCoverage,map:Yt,matcap:Le,envMap:T,envMapMode:T&&$.mapping,envMapCubeUVHeight:H,aoMap:he,lightMap:Nt,bumpMap:It,normalMap:vt,displacementMap:d&&ue,emissiveMap:xt,normalMapObjectSpace:vt&&S.normalMapType===Gh,normalMapTangentSpace:vt&&S.normalMapType===Pc,metalnessMap:zt,roughnessMap:Ce,anisotropy:Me,anisotropyMap:V,clearcoat:b,clearcoatMap:Et,clearcoatNormalMap:nt,clearcoatRoughnessMap:Mt,dispersion:_,iridescence:F,iridescenceMap:St,iridescenceThicknessMap:tt,sheen:G,sheenColorMap:ht,sheenRoughnessMap:Pt,specularMap:yt,specularColorMap:lt,specularIntensityMap:Ot,transmission:K,transmissionMap:D,thicknessMap:et,gradientMap:st,opaque:S.transparent===!1&&S.blending===Hn&&S.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:j,combine:S.combine,mapUv:Yt&&x(S.map.channel),aoMapUv:he&&x(S.aoMap.channel),lightMapUv:Nt&&x(S.lightMap.channel),bumpMapUv:It&&x(S.bumpMap.channel),normalMapUv:vt&&x(S.normalMap.channel),displacementMapUv:ue&&x(S.displacementMap.channel),emissiveMapUv:xt&&x(S.emissiveMap.channel),metalnessMapUv:zt&&x(S.metalnessMap.channel),roughnessMapUv:Ce&&x(S.roughnessMap.channel),anisotropyMapUv:V&&x(S.anisotropyMap.channel),clearcoatMapUv:Et&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:nt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(S.sheenRoughnessMap.channel),specularMapUv:yt&&x(S.specularMap.channel),specularColorMapUv:lt&&x(S.specularColorMap.channel),specularIntensityMapUv:Ot&&x(S.specularIntensityMap.channel),transmissionMapUv:D&&x(S.transmissionMap.channel),thicknessMapUv:et&&x(S.thicknessMap.channel),alphaMapUv:ft&&x(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(vt||Me),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(Yt||ft),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Gt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Yt&&S.map.isVideoTexture===!0&&jt.getTransfer(S.map.colorSpace)===Jt,decodeVideoTextureEmissive:xt&&S.emissiveMap.isVideoTexture===!0&&jt.getTransfer(S.emissiveMap.colorSpace)===Jt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ni,flipSided:S.side===We,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:_t&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&S.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(w(M,S),E(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const M=g[S.type];let P;if(M){const O=gi[M];P=Rs.clone(O.uniforms)}else P=S.uniforms;return P}function R(S,M){let P;for(let O=0,z=h.length;O<z;O++){const q=h[O];if(q.cacheKey===M){P=q,++P.usedTimes;break}}return P===void 0&&(P=new l0(n,M,S,r),h.push(P)),P}function A(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:N}}function f0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function p0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Zl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Jl(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,d,p,g,x,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function o(u,d,p,g,x,m){const f=a(u,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,x,m){const f=a(u,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||p0),i.length>1&&i.sort(d||Zl),s.length>1&&s.sort(d||Zl)}function h(){for(let u=t,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function m0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Jl,n.set(i,[a])):s>=r.length?(a=new Jl,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function g0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ft};break;case"SpotLight":e={position:new I,direction:new I,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function _0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let v0=0;function x0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function M0(n){const t=new g0,e=_0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const s=new I,r=new oe,a=new oe;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,w=0,E=0,y=0,R=0,A=0,C=0;c.sort(x0);for(let S=0,M=c.length;S<M;S++){const P=c[S],O=P.color,z=P.intensity,q=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*z,u+=O.g*z,d+=O.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],z);C++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=X,p++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(z),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[x]=X;const $=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,$.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[x]=$.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=W,y++}x++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=P.shadow.matrix,E++}i.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[f]=X,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==w||N.numPointShadows!==E||N.numSpotShadows!==y||N.numSpotMaps!==R||N.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=w,N.numPointShadows=E,N.numSpotShadows=y,N.numSpotMaps=R,N.numLightProbes=C,i.version=v0++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const E=c[f];if(E.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(E.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Ql(n){const t=new M0(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function S0(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ql(n),t.set(s,[o])):r>=a.length?(o=new Ql(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
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
}`;function E0(n,t,e){let i=new Co;const s=new bt,r=new bt,a=new ie,o=new Wu({depthPacking:Vh}),l=new Xu,c={},h=e.maxTextureSize,u={[qi]:We,[We]:qi,[ni]:ni},d=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:y0,fragmentShader:b0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ie;g.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let f=this.type;this.render=function(A,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Di),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=f!==Ri&&this.type===Ri,q=f===Ri&&this.type!==Ri;for(let W=0,X=A.length;W<X;W++){const $=A[W],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ot=H.getFrameExtents();if(s.multiply(ot),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,H.mapSize.y=r.y)),H.map===null||z===!0||q===!0){const wt=this.type!==Ri?{minFilter:di,magFilter:di}:{};H.map!==null&&H.map.dispose(),H.map=new fi(s.x,s.y,wt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ut=H.getViewportCount();for(let wt=0;wt<ut;wt++){const Gt=H.getViewport(wt);a.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),O.viewport(a),H.updateMatrices($,wt),i=H.getFrustum(),y(C,N,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===Ri&&w(H,N),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,P)};function w(A,C){const N=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fi(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,N,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,N,p,x,null)}function E(A,C,N,S){let M=null;const P=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=N.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=M.uuid,z=C.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let W=q[z];W===void 0&&(W=M.clone(),q[z]=W,C.addEventListener("dispose",R)),M=W}if(M.visible=C.visible,M.wireframe=C.wireframe,S===Ri?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=n.properties.get(M);O.light=N}return M}function y(A,C,N,S,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Ri)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const z=t.update(A),q=A.material;if(Array.isArray(q)){const W=z.groups;for(let X=0,$=W.length;X<$;X++){const H=W[X],ot=q[H.materialIndex];if(ot&&ot.visible){const ut=E(A,ot,S,M);A.onBeforeShadow(n,A,C,N,z,ut,H),n.renderBufferDirect(N,null,z,ut,A,H),A.onAfterShadow(n,A,C,N,z,ut,H)}}}else if(q.visible){const W=E(A,q,S,M);A.onBeforeShadow(n,A,C,N,z,W,null),n.renderBufferDirect(N,null,z,W,A,null),A.onAfterShadow(n,A,C,N,z,W,null)}}const O=A.children;for(let z=0,q=O.length;z<q;z++)y(O[z],C,N,S,M)}function R(A){A.target.removeEventListener("dispose",R);for(const N in c){const S=c[N],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const T0={[Sa]:ya,[ba]:wa,[Ea]:Aa,[Wn]:Ta,[ya]:Sa,[wa]:ba,[Aa]:Ea,[Ta]:Wn};function w0(n,t){function e(){let D=!1;const et=new ie;let st=null;const ft=new ie(0,0,0,0);return{setMask:function(J){st!==J&&!D&&(n.colorMask(J,J,J,J),st=J)},setLocked:function(J){D=J},setClear:function(J,j,_t,Ut,re){re===!0&&(J*=Ut,j*=Ut,_t*=Ut),et.set(J,j,_t,Ut),ft.equals(et)===!1&&(n.clearColor(J,j,_t,Ut),ft.copy(et))},reset:function(){D=!1,st=null,ft.set(-1,0,0,0)}}}function i(){let D=!1,et=!1,st=null,ft=null,J=null;return{setReversed:function(j){if(et!==j){const _t=t.get("EXT_clip_control");j?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),et=j;const Ut=J;J=null,this.setClear(Ut)}},getReversed:function(){return et},setTest:function(j){j?Z(n.DEPTH_TEST):mt(n.DEPTH_TEST)},setMask:function(j){st!==j&&!D&&(n.depthMask(j),st=j)},setFunc:function(j){if(et&&(j=T0[j]),ft!==j){switch(j){case Sa:n.depthFunc(n.NEVER);break;case ya:n.depthFunc(n.ALWAYS);break;case ba:n.depthFunc(n.LESS);break;case Wn:n.depthFunc(n.LEQUAL);break;case Ea:n.depthFunc(n.EQUAL);break;case Ta:n.depthFunc(n.GEQUAL);break;case wa:n.depthFunc(n.GREATER);break;case Aa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=j}},setLocked:function(j){D=j},setClear:function(j){J!==j&&(et&&(j=1-j),n.clearDepth(j),J=j)},reset:function(){D=!1,st=null,ft=null,J=null,et=!1}}}function s(){let D=!1,et=null,st=null,ft=null,J=null,j=null,_t=null,Ut=null,re=null;return{setTest:function(Zt){D||(Zt?Z(n.STENCIL_TEST):mt(n.STENCIL_TEST))},setMask:function(Zt){et!==Zt&&!D&&(n.stencilMask(Zt),et=Zt)},setFunc:function(Zt,yi,pi){(st!==Zt||ft!==yi||J!==pi)&&(n.stencilFunc(Zt,yi,pi),st=Zt,ft=yi,J=pi)},setOp:function(Zt,yi,pi){(j!==Zt||_t!==yi||Ut!==pi)&&(n.stencilOp(Zt,yi,pi),j=Zt,_t=yi,Ut=pi)},setLocked:function(Zt){D=Zt},setClear:function(Zt){re!==Zt&&(n.clearStencil(Zt),re=Zt)},reset:function(){D=!1,et=null,st=null,ft=null,J=null,j=null,_t=null,Ut=null,re=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,w=null,E=null,y=null,R=null,A=null,C=new Ft(0,0,0),N=0,S=!1,M=null,P=null,O=null,z=null,q=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=$>=2);let ot=null,ut={};const wt=n.getParameter(n.SCISSOR_BOX),Gt=n.getParameter(n.VIEWPORT),se=new ie().fromArray(wt),ce=new ie().fromArray(Gt);function $t(D,et,st,ft){const J=new Uint8Array(4),j=n.createTexture();n.bindTexture(D,j),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<st;_t++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(et,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(et+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return j}const Y={};Y[n.TEXTURE_2D]=$t(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=$t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=$t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=$t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(Wn),It(!1),vt(Zo),Z(n.CULL_FACE),he(Di);function Z(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function mt(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Lt(D,et){return u[D]!==et?(n.bindFramebuffer(D,et),u[D]=et,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=et),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=et),!0):!1}function Tt(D,et){let st=p,ft=!1;if(D){st=d.get(et),st===void 0&&(st=[],d.set(et,st));const J=D.textures;if(st.length!==J.length||st[0]!==n.COLOR_ATTACHMENT0){for(let j=0,_t=J.length;j<_t;j++)st[j]=n.COLOR_ATTACHMENT0+j;st.length=J.length,ft=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,ft=!0);ft&&n.drawBuffers(st)}function Yt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const Le={[ln]:n.FUNC_ADD,[Sh]:n.FUNC_SUBTRACT,[yh]:n.FUNC_REVERSE_SUBTRACT};Le[bh]=n.MIN,Le[Eh]=n.MAX;const T={[Th]:n.ZERO,[wh]:n.ONE,[Ah]:n.SRC_COLOR,[xa]:n.SRC_ALPHA,[Lh]:n.SRC_ALPHA_SATURATE,[Ih]:n.DST_COLOR,[Ch]:n.DST_ALPHA,[Rh]:n.ONE_MINUS_SRC_COLOR,[Ma]:n.ONE_MINUS_SRC_ALPHA,[Dh]:n.ONE_MINUS_DST_COLOR,[Ph]:n.ONE_MINUS_DST_ALPHA,[Uh]:n.CONSTANT_COLOR,[Nh]:n.ONE_MINUS_CONSTANT_COLOR,[Fh]:n.CONSTANT_ALPHA,[Oh]:n.ONE_MINUS_CONSTANT_ALPHA};function he(D,et,st,ft,J,j,_t,Ut,re,Zt){if(D===Di){x===!0&&(mt(n.BLEND),x=!1);return}if(x===!1&&(Z(n.BLEND),x=!0),D!==Mh){if(D!==m||Zt!==S){if((f!==ln||y!==ln)&&(n.blendEquation(n.FUNC_ADD),f=ln,y=ln),Zt)switch(D){case Hn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case va:n.blendFunc(n.ONE,n.ONE);break;case Jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Hn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case va:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,E=null,R=null,A=null,C.set(0,0,0),N=0,m=D,S=Zt}return}J=J||et,j=j||st,_t=_t||ft,(et!==f||J!==y)&&(n.blendEquationSeparate(Le[et],Le[J]),f=et,y=J),(st!==w||ft!==E||j!==R||_t!==A)&&(n.blendFuncSeparate(T[st],T[ft],T[j],T[_t]),w=st,E=ft,R=j,A=_t),(Ut.equals(C)===!1||re!==N)&&(n.blendColor(Ut.r,Ut.g,Ut.b,re),C.copy(Ut),N=re),m=D,S=!1}function Nt(D,et){D.side===ni?mt(n.CULL_FACE):Z(n.CULL_FACE);let st=D.side===We;et&&(st=!st),It(st),D.blending===Hn&&D.transparent===!1?he(Di):he(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ft=D.stencilWrite;o.setTest(ft),ft&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),xt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function It(D){M!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),M=D)}function vt(D){D!==_h?(Z(n.CULL_FACE),D!==P&&(D===Zo?n.cullFace(n.BACK):D===vh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):mt(n.CULL_FACE),P=D}function ue(D){D!==O&&(X&&n.lineWidth(D),O=D)}function xt(D,et,st){D?(Z(n.POLYGON_OFFSET_FILL),(z!==et||q!==st)&&(n.polygonOffset(et,st),z=et,q=st)):mt(n.POLYGON_OFFSET_FILL)}function zt(D){D?Z(n.SCISSOR_TEST):mt(n.SCISSOR_TEST)}function Ce(D){D===void 0&&(D=n.TEXTURE0+W-1),ot!==D&&(n.activeTexture(D),ot=D)}function Me(D,et,st){st===void 0&&(ot===null?st=n.TEXTURE0+W-1:st=ot);let ft=ut[st];ft===void 0&&(ft={type:void 0,texture:void 0},ut[st]=ft),(ft.type!==D||ft.texture!==et)&&(ot!==st&&(n.activeTexture(st),ot=st),n.bindTexture(D,et||Y[D]),ft.type=D,ft.texture=et)}function b(){const D=ut[ot];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(D){se.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),se.copy(D))}function Pt(D){ce.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ce.copy(D))}function yt(D,et){let st=c.get(et);st===void 0&&(st=new WeakMap,c.set(et,st));let ft=st.get(D);ft===void 0&&(ft=n.getUniformBlockIndex(et,D.name),st.set(D,ft))}function lt(D,et){const ft=c.get(et).get(D);l.get(et)!==ft&&(n.uniformBlockBinding(et,ft,D.__bindingPointIndex),l.set(et,ft))}function Ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ot=null,ut={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,w=null,E=null,y=null,R=null,A=null,C=new Ft(0,0,0),N=0,S=!1,M=null,P=null,O=null,z=null,q=null,se.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:mt,bindFramebuffer:Lt,drawBuffers:Tt,useProgram:Yt,setBlending:he,setMaterial:Nt,setFlipSided:It,setCullFace:vt,setLineWidth:ue,setPolygonOffset:xt,setScissorTest:zt,activeTexture:Ce,bindTexture:Me,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:St,texImage3D:tt,updateUBOMapping:yt,uniformBlockBinding:lt,texStorage2D:nt,texStorage3D:Mt,texSubImage2D:G,texSubImage3D:K,compressedTexSubImage2D:V,compressedTexSubImage3D:Et,scissor:ht,viewport:Pt,reset:Ot}}function A0(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):ws("canvas")}function x(b,_,F){let G=1;const K=Me(b);if((K.width>F||K.height>F)&&(G=F/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const V=Math.floor(G*K.width),Et=Math.floor(G*K.height);u===void 0&&(u=g(V,Et));const nt=_?g(V,Et):u;return nt.width=V,nt.height=Et,nt.getContext("2d").drawImage(b,0,0,V,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+Et+")."),nt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,_,F,G,K=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let V=_;if(_===n.RED&&(F===n.FLOAT&&(V=n.R32F),F===n.HALF_FLOAT&&(V=n.R16F),F===n.UNSIGNED_BYTE&&(V=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.R8UI),F===n.UNSIGNED_SHORT&&(V=n.R16UI),F===n.UNSIGNED_INT&&(V=n.R32UI),F===n.BYTE&&(V=n.R8I),F===n.SHORT&&(V=n.R16I),F===n.INT&&(V=n.R32I)),_===n.RG&&(F===n.FLOAT&&(V=n.RG32F),F===n.HALF_FLOAT&&(V=n.RG16F),F===n.UNSIGNED_BYTE&&(V=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RG8UI),F===n.UNSIGNED_SHORT&&(V=n.RG16UI),F===n.UNSIGNED_INT&&(V=n.RG32UI),F===n.BYTE&&(V=n.RG8I),F===n.SHORT&&(V=n.RG16I),F===n.INT&&(V=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RGB8UI),F===n.UNSIGNED_SHORT&&(V=n.RGB16UI),F===n.UNSIGNED_INT&&(V=n.RGB32UI),F===n.BYTE&&(V=n.RGB8I),F===n.SHORT&&(V=n.RGB16I),F===n.INT&&(V=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),F===n.UNSIGNED_INT&&(V=n.RGBA32UI),F===n.BYTE&&(V=n.RGBA8I),F===n.SHORT&&(V=n.RGBA16I),F===n.INT&&(V=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),_===n.RGBA){const Et=K?Mr:jt.getTransfer(G);F===n.FLOAT&&(V=n.RGBA32F),F===n.HALF_FLOAT&&(V=n.RGBA16F),F===n.UNSIGNED_BYTE&&(V=Et===Jt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function y(b,_){let F;return b?_===null||_===pn||_===ys?F=n.DEPTH24_STENCIL8:_===Ci?F=n.DEPTH32F_STENCIL8:_===Ss&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===pn||_===ys?F=n.DEPTH_COMPONENT24:_===Ci?F=n.DEPTH_COMPONENT32F:_===Ss&&(F=n.DEPTH_COMPONENT16),F}function R(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==di&&b.minFilter!==_i?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function A(b){const _=b.target;_.removeEventListener("dispose",A),N(_),_.isVideoTexture&&h.delete(_)}function C(b){const _=b.target;_.removeEventListener("dispose",C),M(_)}function N(b){const _=i.get(b);if(_.__webglInit===void 0)return;const F=b.source,G=d.get(F);if(G){const K=G[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(b),Object.keys(G).length===0&&d.delete(F)}i.remove(b)}function S(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const F=b.source,G=d.get(F);delete G[_.__cacheKey],a.memory.textures--}function M(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let K=0;K<_.__webglFramebuffer[G].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[G][K]);else n.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)n.deleteFramebuffer(_.__webglFramebuffer[G]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=b.textures;for(let G=0,K=F.length;G<K;G++){const V=i.get(F[G]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(F[G])}i.remove(b)}let P=0;function O(){P=0}function z(){const b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function q(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function W(b,_){const F=i.get(b);if(b.isVideoTexture&&zt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const G=b.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,b,_);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function X(b,_){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Y(F,b,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function $(b,_){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Y(F,b,_);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function H(b,_){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Z(F,b,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const ot={[xr]:n.REPEAT,[un]:n.CLAMP_TO_EDGE,[Pa]:n.MIRRORED_REPEAT},ut={[di]:n.NEAREST,[zh]:n.NEAREST_MIPMAP_NEAREST,[ks]:n.NEAREST_MIPMAP_LINEAR,[_i]:n.LINEAR,[Or]:n.LINEAR_MIPMAP_NEAREST,[dn]:n.LINEAR_MIPMAP_LINEAR},wt={[Wh]:n.NEVER,[$h]:n.ALWAYS,[Xh]:n.LESS,[Ic]:n.LEQUAL,[qh]:n.EQUAL,[Kh]:n.GEQUAL,[Yh]:n.GREATER,[jh]:n.NOTEQUAL};function Gt(b,_){if(_.type===Ci&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===_i||_.magFilter===Or||_.magFilter===ks||_.magFilter===dn||_.minFilter===_i||_.minFilter===Or||_.minFilter===ks||_.minFilter===dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ot[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ot[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ot[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ut[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ut[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,wt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===di||_.minFilter!==ks&&_.minFilter!==dn||_.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function se(b,_){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",A));const G=_.source;let K=d.get(G);K===void 0&&(K={},d.set(G,K));const V=q(_);if(V!==b.__cacheKey){K[V]===void 0&&(K[V]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[V].usedTimes++;const Et=K[b.__cacheKey];Et!==void 0&&(K[b.__cacheKey].usedTimes--,Et.usedTimes===0&&S(_)),b.__cacheKey=V,b.__webglTexture=K[V].texture}return F}function ce(b,_,F){return Math.floor(Math.floor(b/F)/_)}function $t(b,_,F,G){const V=b.updateRanges;if(V.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,G,_.data);else{V.sort((tt,ht)=>tt.start-ht.start);let Et=0;for(let tt=1;tt<V.length;tt++){const ht=V[Et],Pt=V[tt],yt=ht.start+ht.count,lt=ce(Pt.start,_.width,4),Ot=ce(ht.start,_.width,4);Pt.start<=yt+1&&lt===Ot&&ce(Pt.start+Pt.count-1,_.width,4)===lt?ht.count=Math.max(ht.count,Pt.start+Pt.count-ht.start):(++Et,V[Et]=Pt)}V.length=Et+1;const nt=n.getParameter(n.UNPACK_ROW_LENGTH),Mt=n.getParameter(n.UNPACK_SKIP_PIXELS),St=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let tt=0,ht=V.length;tt<ht;tt++){const Pt=V[tt],yt=Math.floor(Pt.start/4),lt=Math.ceil(Pt.count/4),Ot=yt%_.width,D=Math.floor(yt/_.width),et=lt,st=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ot),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),e.texSubImage2D(n.TEXTURE_2D,0,Ot,D,et,st,F,G,_.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,nt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Mt),n.pixelStorei(n.UNPACK_SKIP_ROWS,St)}}function Y(b,_,F){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);const K=se(b,_),V=_.source;e.bindTexture(G,b.__webglTexture,n.TEXTURE0+F);const Et=i.get(V);if(V.version!==Et.__version||K===!0){e.activeTexture(n.TEXTURE0+F);const nt=jt.getPrimaries(jt.workingColorSpace),Mt=_.colorSpace===Wi?null:jt.getPrimaries(_.colorSpace),St=_.colorSpace===Wi||nt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let tt=x(_.image,!1,s.maxTextureSize);tt=Ce(_,tt);const ht=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type);let yt=E(_.internalFormat,ht,Pt,_.colorSpace,_.isVideoTexture);Gt(G,_);let lt;const Ot=_.mipmaps,D=_.isVideoTexture!==!0,et=Et.__version===void 0||K===!0,st=V.dataReady,ft=R(_,tt);if(_.isDepthTexture)yt=y(_.format===Es,_.type),et&&(D?e.texStorage2D(n.TEXTURE_2D,1,yt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,yt,tt.width,tt.height,0,ht,Pt,null));else if(_.isDataTexture)if(Ot.length>0){D&&et&&e.texStorage2D(n.TEXTURE_2D,ft,yt,Ot[0].width,Ot[0].height);for(let J=0,j=Ot.length;J<j;J++)lt=Ot[J],D?st&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,lt.width,lt.height,ht,Pt,lt.data):e.texImage2D(n.TEXTURE_2D,J,yt,lt.width,lt.height,0,ht,Pt,lt.data);_.generateMipmaps=!1}else D?(et&&e.texStorage2D(n.TEXTURE_2D,ft,yt,tt.width,tt.height),st&&$t(_,tt,ht,Pt)):e.texImage2D(n.TEXTURE_2D,0,yt,tt.width,tt.height,0,ht,Pt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,yt,Ot[0].width,Ot[0].height,tt.depth);for(let J=0,j=Ot.length;J<j;J++)if(lt=Ot[J],_.format!==ui)if(ht!==null)if(D){if(st)if(_.layerUpdates.size>0){const _t=Cl(lt.width,lt.height,_.format,_.type);for(const Ut of _.layerUpdates){const re=lt.data.subarray(Ut*_t/lt.data.BYTES_PER_ELEMENT,(Ut+1)*_t/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ut,lt.width,lt.height,1,ht,re)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,tt.depth,ht,lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,yt,lt.width,lt.height,tt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?st&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,tt.depth,ht,Pt,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,yt,lt.width,lt.height,tt.depth,0,ht,Pt,lt.data)}else{D&&et&&e.texStorage2D(n.TEXTURE_2D,ft,yt,Ot[0].width,Ot[0].height);for(let J=0,j=Ot.length;J<j;J++)lt=Ot[J],_.format!==ui?ht!==null?D?st&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,lt.width,lt.height,ht,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,J,yt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?st&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,lt.width,lt.height,ht,Pt,lt.data):e.texImage2D(n.TEXTURE_2D,J,yt,lt.width,lt.height,0,ht,Pt,lt.data)}else if(_.isDataArrayTexture)if(D){if(et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,yt,tt.width,tt.height,tt.depth),st)if(_.layerUpdates.size>0){const J=Cl(tt.width,tt.height,_.format,_.type);for(const j of _.layerUpdates){const _t=tt.data.subarray(j*J/tt.data.BYTES_PER_ELEMENT,(j+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,ht,Pt,_t)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ht,Pt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,tt.width,tt.height,tt.depth,0,ht,Pt,tt.data);else if(_.isData3DTexture)D?(et&&e.texStorage3D(n.TEXTURE_3D,ft,yt,tt.width,tt.height,tt.depth),st&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ht,Pt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,yt,tt.width,tt.height,tt.depth,0,ht,Pt,tt.data);else if(_.isFramebufferTexture){if(et)if(D)e.texStorage2D(n.TEXTURE_2D,ft,yt,tt.width,tt.height);else{let J=tt.width,j=tt.height;for(let _t=0;_t<ft;_t++)e.texImage2D(n.TEXTURE_2D,_t,yt,J,j,0,ht,Pt,null),J>>=1,j>>=1}}else if(Ot.length>0){if(D&&et){const J=Me(Ot[0]);e.texStorage2D(n.TEXTURE_2D,ft,yt,J.width,J.height)}for(let J=0,j=Ot.length;J<j;J++)lt=Ot[J],D?st&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ht,Pt,lt):e.texImage2D(n.TEXTURE_2D,J,yt,ht,Pt,lt);_.generateMipmaps=!1}else if(D){if(et){const J=Me(tt);e.texStorage2D(n.TEXTURE_2D,ft,yt,J.width,J.height)}st&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,Pt,tt)}else e.texImage2D(n.TEXTURE_2D,0,yt,ht,Pt,tt);m(_)&&f(G),Et.__version=V.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Z(b,_,F){if(_.image.length!==6)return;const G=se(b,_),K=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const V=i.get(K);if(K.version!==V.__version||G===!0){e.activeTexture(n.TEXTURE0+F);const Et=jt.getPrimaries(jt.workingColorSpace),nt=_.colorSpace===Wi?null:jt.getPrimaries(_.colorSpace),Mt=_.colorSpace===Wi||Et===nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const St=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,ht=[];for(let j=0;j<6;j++)!St&&!tt?ht[j]=x(_.image[j],!0,s.maxCubemapSize):ht[j]=tt?_.image[j].image:_.image[j],ht[j]=Ce(_,ht[j]);const Pt=ht[0],yt=r.convert(_.format,_.colorSpace),lt=r.convert(_.type),Ot=E(_.internalFormat,yt,lt,_.colorSpace),D=_.isVideoTexture!==!0,et=V.__version===void 0||G===!0,st=K.dataReady;let ft=R(_,Pt);Gt(n.TEXTURE_CUBE_MAP,_);let J;if(St){D&&et&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ot,Pt.width,Pt.height);for(let j=0;j<6;j++){J=ht[j].mipmaps;for(let _t=0;_t<J.length;_t++){const Ut=J[_t];_.format!==ui?yt!==null?D?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,Ut.width,Ut.height,yt,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,Ot,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,Ut.width,Ut.height,yt,lt,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,Ot,Ut.width,Ut.height,0,yt,lt,Ut.data)}}}else{if(J=_.mipmaps,D&&et){J.length>0&&ft++;const j=Me(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ot,j.width,j.height)}for(let j=0;j<6;j++)if(tt){D?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ht[j].width,ht[j].height,yt,lt,ht[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ot,ht[j].width,ht[j].height,0,yt,lt,ht[j].data);for(let _t=0;_t<J.length;_t++){const re=J[_t].image[j].image;D?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,re.width,re.height,yt,lt,re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,Ot,re.width,re.height,0,yt,lt,re.data)}}else{D?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,yt,lt,ht[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ot,yt,lt,ht[j]);for(let _t=0;_t<J.length;_t++){const Ut=J[_t];D?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,yt,lt,Ut.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,Ot,yt,lt,Ut.image[j])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),V.__version=K.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function mt(b,_,F,G,K,V){const Et=r.convert(F.format,F.colorSpace),nt=r.convert(F.type),Mt=E(F.internalFormat,Et,nt,F.colorSpace),St=i.get(_),tt=i.get(F);if(tt.__renderTarget=_,!St.__hasExternalTextures){const ht=Math.max(1,_.width>>V),Pt=Math.max(1,_.height>>V);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,V,Mt,ht,Pt,_.depth,0,Et,nt,null):e.texImage2D(K,V,Mt,ht,Pt,0,Et,nt,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),xt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,K,tt.__webglTexture,0,ue(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,K,tt.__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(b,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){const G=_.depthTexture,K=G&&G.isDepthTexture?G.type:null,V=y(_.stencilBuffer,K),Et=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=ue(_);xt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,V,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,V,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,V,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,b)}else{const G=_.textures;for(let K=0;K<G.length;K++){const V=G[K],Et=r.convert(V.format,V.colorSpace),nt=r.convert(V.type),Mt=E(V.internalFormat,Et,nt,V.colorSpace),St=ue(_);F&&xt(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,Mt,_.width,_.height):xt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,Mt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(_.depthTexture);G.__renderTarget=_,(!G.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const K=G.__webglTexture,V=ue(_);if(_.depthTexture.format===bs)xt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(_.depthTexture.format===Es)xt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Yt(b){const _=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const G=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=G}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const G=b.texture.mipmaps;G&&G.length>0?Tt(_.__webglFramebuffer[0],b):Tt(_.__webglFramebuffer,b)}else if(F){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=n.createRenderbuffer(),Lt(_.__webglDepthbuffer[G],b,!1);else{const K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,V)}}else{const G=b.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Lt(_.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,V)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(b,_,F){const G=i.get(b);_!==void 0&&mt(G.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Yt(b)}function T(b){const _=b.texture,F=i.get(b),G=i.get(_);b.addEventListener("dispose",C);const K=b.textures,V=b.isWebGLCubeRenderTarget===!0,Et=K.length>1;if(Et||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,a.memory.textures++),V){F.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[nt]=[];for(let Mt=0;Mt<_.mipmaps.length;Mt++)F.__webglFramebuffer[nt][Mt]=n.createFramebuffer()}else F.__webglFramebuffer[nt]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let nt=0;nt<_.mipmaps.length;nt++)F.__webglFramebuffer[nt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Et)for(let nt=0,Mt=K.length;nt<Mt;nt++){const St=i.get(K[nt]);St.__webglTexture===void 0&&(St.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&xt(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let nt=0;nt<K.length;nt++){const Mt=K[nt];F.__webglColorRenderbuffer[nt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[nt]);const St=r.convert(Mt.format,Mt.colorSpace),tt=r.convert(Mt.type),ht=E(Mt.internalFormat,St,tt,Mt.colorSpace,b.isXRRenderTarget===!0),Pt=ue(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,ht,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,F.__webglColorRenderbuffer[nt])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,_);for(let nt=0;nt<6;nt++)if(_.mipmaps&&_.mipmaps.length>0)for(let Mt=0;Mt<_.mipmaps.length;Mt++)mt(F.__webglFramebuffer[nt][Mt],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt);else mt(F.__webglFramebuffer[nt],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(_)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let nt=0,Mt=K.length;nt<Mt;nt++){const St=K[nt],tt=i.get(St);let ht=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ht=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,tt.__webglTexture),Gt(ht,St),mt(F.__webglFramebuffer,b,St,n.COLOR_ATTACHMENT0+nt,ht,0),m(St)&&f(ht)}e.unbindTexture()}else{let nt=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(nt=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,G.__webglTexture),Gt(nt,_),_.mipmaps&&_.mipmaps.length>0)for(let Mt=0;Mt<_.mipmaps.length;Mt++)mt(F.__webglFramebuffer[Mt],b,_,n.COLOR_ATTACHMENT0,nt,Mt);else mt(F.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,nt,0);m(_)&&f(nt),e.unbindTexture()}b.depthBuffer&&Yt(b)}function he(b){const _=b.textures;for(let F=0,G=_.length;F<G;F++){const K=_[F];if(m(K)){const V=w(b),Et=i.get(K).__webglTexture;e.bindTexture(V,Et),f(V),e.unbindTexture()}}}const Nt=[],It=[];function vt(b){if(b.samples>0){if(xt(b)===!1){const _=b.textures,F=b.width,G=b.height;let K=n.COLOR_BUFFER_BIT;const V=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(b),nt=_.length>1;if(nt)for(let St=0;St<_.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const Mt=b.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let St=0;St<_.length;St++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),nt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[St]);const tt=i.get(_[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,K,n.NEAREST),l===!0&&(Nt.length=0,It.length=0,Nt.push(n.COLOR_ATTACHMENT0+St),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Nt.push(V),It.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,It)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),nt)for(let St=0;St<_.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,Et.__webglColorRenderbuffer[St]);const tt=i.get(_[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ue(b){return Math.min(s.maxSamples,b.samples)}function xt(b){const _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function zt(b){const _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function Ce(b,_){const F=b.colorSpace,G=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Yn&&F!==Wi&&(jt.getTransfer(F)===Jt?(G!==ui||K!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Me(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Le,this.setupRenderTarget=T,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=xt}function R0(n,t){function e(i,s=Wi){let r;const a=jt.getTransfer(s);if(i===Mi)return n.UNSIGNED_BYTE;if(i===xo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ec)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yc)return n.BYTE;if(i===bc)return n.SHORT;if(i===Ss)return n.UNSIGNED_SHORT;if(i===vo)return n.INT;if(i===pn)return n.UNSIGNED_INT;if(i===Ci)return n.FLOAT;if(i===Li)return n.HALF_FLOAT;if(i===wc)return n.ALPHA;if(i===Ac)return n.RGB;if(i===ui)return n.RGBA;if(i===bs)return n.DEPTH_COMPONENT;if(i===Es)return n.DEPTH_STENCIL;if(i===Rc)return n.RED;if(i===So)return n.RED_INTEGER;if(i===Cc)return n.RG;if(i===yo)return n.RG_INTEGER;if(i===bo)return n.RGBA_INTEGER;if(i===fr||i===pr||i===mr||i===gr)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ia||i===Da||i===La||i===Ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===La)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Na||i===Fa||i===Oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Na||i===Fa)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ba||i===ka||i===za||i===Ha||i===Va||i===Ga||i===Wa||i===Xa||i===qa||i===Ya||i===ja||i===Ka||i===$a||i===Za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ba)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ka)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===za)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ha)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Va)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ga)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ya)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ja)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ka)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$a)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Za)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ja||i===Qa||i===to)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ja)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===to)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eo||i===io||i===no||i===so)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===eo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===io)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===so)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const C0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P0=`
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

}`;class I0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Gc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ze({vertexShader:C0,fragmentShader:P0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new Pi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D0 extends Jn{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new I0,f={},w=e.getContextAttributes();let E=null,y=null;const R=[],A=[],C=new bt;let N=null;const S=new Ge;S.viewport=new ie;const M=new Ge;M.viewport=new ie;const P=[S,M],O=new Ju;let z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=R[Y];return Z===void 0&&(Z=new sa,R[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=R[Y];return Z===void 0&&(Z=new sa,R[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=R[Y];return Z===void 0&&(Z=new sa,R[Y]=Z),Z.getHandSpace()};function W(Y){const Z=A.indexOf(Y.inputSource);if(Z===-1)return;const mt=R[Z];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,c||a),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",$);for(let Y=0;Y<R.length;Y++){const Z=A[Y];Z!==null&&(A[Y]=null,R[Y].disconnect(Z))}z=null,q=null,m.reset();for(const Y in f)delete f[Y];t.setRenderTarget(E),p=null,d=null,u=null,s=null,y=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",$),w.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Lt=null,Tt=null;w.depth&&(Tt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=w.stencil?Es:bs,Lt=w.stencil?ys:pn);const Yt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Yt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new fi(d.textureWidth,d.textureHeight,{format:ui,type:Mi,depthTexture:new Vc(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const mt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new fi(p.framebufferWidth,p.framebufferHeight,{format:ui,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Y){for(let Z=0;Z<Y.removed.length;Z++){const mt=Y.removed[Z],Lt=A.indexOf(mt);Lt>=0&&(A[Lt]=null,R[Lt].disconnect(mt))}for(let Z=0;Z<Y.added.length;Z++){const mt=Y.added[Z];let Lt=A.indexOf(mt);if(Lt===-1){for(let Yt=0;Yt<R.length;Yt++)if(Yt>=A.length){A.push(mt),Lt=Yt;break}else if(A[Yt]===null){A[Yt]=mt,Lt=Yt;break}if(Lt===-1)break}const Tt=R[Lt];Tt&&Tt.connect(mt)}}const H=new I,ot=new I;function ut(Y,Z,mt){H.setFromMatrixPosition(Z.matrixWorld),ot.setFromMatrixPosition(mt.matrixWorld);const Lt=H.distanceTo(ot),Tt=Z.projectionMatrix.elements,Yt=mt.projectionMatrix.elements,Le=Tt[14]/(Tt[10]-1),T=Tt[14]/(Tt[10]+1),he=(Tt[9]+1)/Tt[5],Nt=(Tt[9]-1)/Tt[5],It=(Tt[8]-1)/Tt[0],vt=(Yt[8]+1)/Yt[0],ue=Le*It,xt=Le*vt,zt=Lt/(-It+vt),Ce=zt*-It;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ce),Y.translateZ(zt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Me=Le+zt,b=T+zt,_=ue-Ce,F=xt+(Lt-Ce),G=he*T/b*Me,K=Nt*T/b*Me;Y.projectionMatrix.makePerspective(_,F,G,K,Me,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function wt(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Z=Y.near,mt=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),O.near=M.near=S.near=Z,O.far=M.far=S.far=mt,(z!==O.near||q!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,q=O.far),O.layers.mask=Y.layers.mask|6,S.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const Lt=Y.parent,Tt=O.cameras;wt(O,Lt);for(let Yt=0;Yt<Tt.length;Yt++)wt(Tt[Yt],Lt);Tt.length===2?ut(O,S,M):O.projectionMatrix.copy(S.projectionMatrix),Gt(Y,O,Lt)};function Gt(Y,Z,mt){mt===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ts*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return f[Y]};let se=null;function ce(Y,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Lt=!1;mt.length!==O.cameras.length&&(O.cameras.length=0,Lt=!0);for(let T=0;T<mt.length;T++){const he=mt[T];let Nt=null;if(p!==null)Nt=p.getViewport(he);else{const vt=u.getViewSubImage(d,he);Nt=vt.viewport,T===0&&(t.setRenderTargetTextures(y,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(y))}let It=P[T];It===void 0&&(It=new Ge,It.layers.enable(T),It.viewport=new ie,P[T]=It),It.matrix.fromArray(he.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(he.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),T===0&&(O.matrix.copy(It.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Lt===!0&&O.cameras.push(It)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();const T=u.getDepthInformation(mt[0]);T&&T.isValid&&T.texture&&m.init(T,s.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let T=0;T<mt.length;T++){const he=mt[T].camera;if(he){let Nt=f[he];Nt||(Nt=new Gc,f[he]=Nt);const It=u.getCameraImage(he);Nt.sourceTexture=It}}}}for(let mt=0;mt<R.length;mt++){const Lt=A[mt],Tt=R[mt];Lt!==null&&Tt!==void 0&&Tt.update(Lt,Z,c||a)}se&&se(Y,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const $t=new jc;$t.setAnimationLoop(ce),this.setAnimationLoop=function(Y){se=Y},this.dispose=function(){}}}const en=new Si,L0=new oe;function U0(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Oc(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,E,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,w,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===We&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===We&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=t.get(f),E=w.envMap,y=w.envMapRotation;E&&(m.envMap.value=E,en.copy(y),en.x*=-1,en.y*=-1,en.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(en.y*=-1,en.z*=-1),m.envMapRotation.value.setFromMatrix4(L0.makeRotationFromEuler(en)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===We&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function N0(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){const y=E.program;i.uniformBlockBinding(w,y)}function c(w,E){let y=s[w.id];y===void 0&&(g(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",m));const R=E.program;i.updateUBOMapping(w,R);const A=t.render.frame;r[w.id]!==A&&(d(w),r[w.id]=A)}function h(w){const E=u();w.__bindingPointIndex=E;const y=n.createBuffer(),R=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const E=s[w.id],y=w.uniforms,R=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,C=y.length;A<C;A++){const N=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,M=N.length;S<M;S++){const P=N[S];if(p(P,A,S,R)===!0){const O=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let W=0;W<z.length;W++){const X=z[W],$=x(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,O+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,E,y,R){const A=w.value,C=E+"_"+y;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const N=R[C];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return R[C]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(w){const E=w.uniforms;let y=0;const R=16;for(let C=0,N=E.length;C<N;C++){const S=Array.isArray(E[C])?E[C]:[E[C]];for(let M=0,P=S.length;M<P;M++){const O=S[M],z=Array.isArray(O.value)?O.value:[O.value];for(let q=0,W=z.length;q<W;q++){const X=z[q],$=x(X),H=y%R,ot=H%$.boundary,ut=H+ot;y+=ot,ut!==0&&R-ut<$.storage&&(y+=R-ut),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=$.storage}}}const A=y%R;return A>0&&(y+=R-A),w.__size=y,w.__cache={},this}function x(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class F0{constructor(t={}){const{canvas:e=fu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let R=!1;this._outputColorSpace=De;let A=0,C=0,N=null,S=-1,M=null;const P=new ie,O=new ie;let z=null;const q=new Ft(0);let W=0,X=e.width,$=e.height,H=1,ot=null,ut=null;const wt=new ie(0,0,X,$),Gt=new ie(0,0,X,$);let se=!1;const ce=new Co;let $t=!1,Y=!1;const Z=new oe,mt=new I,Lt=new ie,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Le(){return N===null?H:1}let T=i;function he(v,L){return e.getContext(v,L)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${go}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",J,!1),T===null){const L="webgl2";if(T=he(L,v),T===null)throw he(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Nt,It,vt,ue,xt,zt,Ce,Me,b,_,F,G,K,V,Et,nt,Mt,St,tt,ht,Pt,yt,lt,Ot;function D(){Nt=new qp(T),Nt.init(),yt=new R0(T,Nt),It=new kp(T,Nt,t,yt),vt=new w0(T,Nt),It.reversedDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),ue=new Kp(T),xt=new f0,zt=new A0(T,Nt,vt,xt,It,yt,ue),Ce=new Hp(y),Me=new Xp(y),b=new td(T),lt=new Op(T,b),_=new Yp(T,b,ue,lt),F=new Zp(T,_,b,ue),tt=new $p(T,It,zt),nt=new zp(xt),G=new d0(y,Ce,Me,Nt,It,lt,nt),K=new U0(y,xt),V=new m0,Et=new S0(Nt),St=new Fp(y,Ce,Me,vt,F,p,l),Mt=new E0(y,F,It),Ot=new N0(T,ue,It,vt),ht=new Bp(T,Nt,ue),Pt=new jp(T,Nt,ue),ue.programs=G.programs,y.capabilities=It,y.extensions=Nt,y.properties=xt,y.renderLists=V,y.shadowMap=Mt,y.state=vt,y.info=ue}D();const et=new D0(y,T);this.xr=et,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const v=Nt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Nt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(X,$,!1))},this.getSize=function(v){return v.set(X,$)},this.setSize=function(v,L,B=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,$=L,e.width=Math.floor(v*H),e.height=Math.floor(L*H),B===!0&&(e.style.width=v+"px",e.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(X*H,$*H).floor()},this.setDrawingBufferSize=function(v,L,B){X=v,$=L,H=B,e.width=Math.floor(v*B),e.height=Math.floor(L*B),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(wt)},this.setViewport=function(v,L,B,k){v.isVector4?wt.set(v.x,v.y,v.z,v.w):wt.set(v,L,B,k),vt.viewport(P.copy(wt).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Gt)},this.setScissor=function(v,L,B,k){v.isVector4?Gt.set(v.x,v.y,v.z,v.w):Gt.set(v,L,B,k),vt.scissor(O.copy(Gt).multiplyScalar(H).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(v){vt.setScissorTest(se=v)},this.setOpaqueSort=function(v){ot=v},this.setTransparentSort=function(v){ut=v},this.getClearColor=function(v){return v.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,B=!0){let k=0;if(v){let U=!1;if(N!==null){const Q=N.texture.format;U=Q===bo||Q===yo||Q===So}if(U){const Q=N.texture.type,ct=Q===Mi||Q===pn||Q===Ss||Q===ys||Q===xo||Q===Mo,gt=St.getClearColor(),dt=St.getClearAlpha(),Ct=gt.r,Dt=gt.g,At=gt.b;ct?(g[0]=Ct,g[1]=Dt,g[2]=At,g[3]=dt,T.clearBufferuiv(T.COLOR,0,g)):(x[0]=Ct,x[1]=Dt,x[2]=At,x[3]=dt,T.clearBufferiv(T.COLOR,0,x))}else k|=T.COLOR_BUFFER_BIT}L&&(k|=T.DEPTH_BUFFER_BIT),B&&(k|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",J,!1),St.dispose(),V.dispose(),Et.dispose(),xt.dispose(),Ce.dispose(),Me.dispose(),F.dispose(),lt.dispose(),Ot.dispose(),G.dispose(),et.dispose(),et.removeEventListener("sessionstart",pi),et.removeEventListener("sessionend",Xo),ji.stop()};function st(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const v=ue.autoReset,L=Mt.enabled,B=Mt.autoUpdate,k=Mt.needsUpdate,U=Mt.type;D(),ue.autoReset=v,Mt.enabled=L,Mt.autoUpdate=B,Mt.needsUpdate=k,Mt.type=U}function J(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function j(v){const L=v.target;L.removeEventListener("dispose",j),_t(L)}function _t(v){Ut(v),xt.remove(v)}function Ut(v){const L=xt.get(v).programs;L!==void 0&&(L.forEach(function(B){G.releaseProgram(B)}),v.isShaderMaterial&&G.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,B,k,U,Q){L===null&&(L=Tt);const ct=U.isMesh&&U.matrixWorld.determinant()<0,gt=uh(v,L,B,k,U);vt.setMaterial(k,ct);let dt=B.index,Ct=1;if(k.wireframe===!0){if(dt=_.getWireframeAttribute(B),dt===void 0)return;Ct=2}const Dt=B.drawRange,At=B.attributes.position;let Xt=Dt.start*Ct,te=(Dt.start+Dt.count)*Ct;Q!==null&&(Xt=Math.max(Xt,Q.start*Ct),te=Math.min(te,(Q.start+Q.count)*Ct)),dt!==null?(Xt=Math.max(Xt,0),te=Math.min(te,dt.count)):At!=null&&(Xt=Math.max(Xt,0),te=Math.min(te,At.count));const xe=te-Xt;if(xe<0||xe===1/0)return;lt.setup(U,k,gt,B,dt);let le,ne=ht;if(dt!==null&&(le=b.get(dt),ne=Pt,ne.setIndex(le)),U.isMesh)k.wireframe===!0?(vt.setLineWidth(k.wireframeLinewidth*Le()),ne.setMode(T.LINES)):ne.setMode(T.TRIANGLES);else if(U.isLine){let Rt=k.linewidth;Rt===void 0&&(Rt=1),vt.setLineWidth(Rt*Le()),U.isLineSegments?ne.setMode(T.LINES):U.isLineLoop?ne.setMode(T.LINE_LOOP):ne.setMode(T.LINE_STRIP)}else U.isPoints?ne.setMode(T.POINTS):U.isSprite&&ne.setMode(T.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)As("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))ne.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Rt=U._multiDrawStarts,me=U._multiDrawCounts,Kt=U._multiDrawCount,Xe=dt?b.get(dt).bytesPerElement:1,xn=xt.get(k).currentProgram.getUniforms();for(let qe=0;qe<Kt;qe++)xn.setValue(T,"_gl_DrawID",qe),ne.render(Rt[qe]/Xe,me[qe])}else if(U.isInstancedMesh)ne.renderInstances(Xt,xe,U.count);else if(B.isInstancedBufferGeometry){const Rt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,me=Math.min(B.instanceCount,Rt);ne.renderInstances(Xt,xe,me)}else ne.render(Xt,xe)};function re(v,L,B){v.transparent===!0&&v.side===ni&&v.forceSinglePass===!1?(v.side=We,v.needsUpdate=!0,Bs(v,L,B),v.side=qi,v.needsUpdate=!0,Bs(v,L,B),v.side=ni):Bs(v,L,B)}this.compile=function(v,L,B=null){B===null&&(B=v),f=Et.get(B),f.init(L),E.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),v!==B&&v.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const k=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let ct=0;ct<Q.length;ct++){const gt=Q[ct];re(gt,B,U),k.add(gt)}else re(Q,B,U),k.add(Q)}),f=E.pop(),k},this.compileAsync=function(v,L,B=null){const k=this.compile(v,L,B);return new Promise(U=>{function Q(){if(k.forEach(function(ct){xt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){U(v);return}setTimeout(Q,10)}Nt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Zt=null;function yi(v){Zt&&Zt(v)}function pi(){ji.stop()}function Xo(){ji.start()}const ji=new jc;ji.setAnimationLoop(yi),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(v){Zt=v,et.setAnimationLoop(v),v===null?ji.stop():ji.start()},et.addEventListener("sessionstart",pi),et.addEventListener("sessionend",Xo),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(L),L=et.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,L,N),f=Et.get(v,E.length),f.init(L),E.push(f),Z.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),ce.setFromProjectionMatrix(Z,vi,L.reversedDepth),Y=this.localClippingEnabled,$t=nt.init(this.clippingPlanes,Y),m=V.get(v,w.length),m.init(),w.push(m),et.enabled===!0&&et.isPresenting===!0){const Q=y.xr.getDepthSensingMesh();Q!==null&&Nr(Q,L,-1/0,y.sortObjects)}Nr(v,L,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ot,ut),Yt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Yt&&St.addToRenderList(m,v),this.info.render.frame++,$t===!0&&nt.beginShadows();const B=f.state.shadowsArray;Mt.render(B,v,L),$t===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(f.setupLights(),L.isArrayCamera){const Q=L.cameras;if(U.length>0)for(let ct=0,gt=Q.length;ct<gt;ct++){const dt=Q[ct];Yo(k,U,v,dt)}Yt&&St.render(v);for(let ct=0,gt=Q.length;ct<gt;ct++){const dt=Q[ct];qo(m,v,dt,dt.viewport)}}else U.length>0&&Yo(k,U,v,L),Yt&&St.render(v),qo(m,v,L);N!==null&&C===0&&(zt.updateMultisampleRenderTarget(N),zt.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(y,v,L),lt.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],$t===!0&&nt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Nr(v,L,B,k){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ce.intersectsSprite(v)){k&&Lt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Z);const ct=F.update(v),gt=v.material;gt.visible&&m.push(v,ct,gt,B,Lt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ce.intersectsObject(v))){const ct=F.update(v),gt=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Lt.copy(v.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Lt.copy(ct.boundingSphere.center)),Lt.applyMatrix4(v.matrixWorld).applyMatrix4(Z)),Array.isArray(gt)){const dt=ct.groups;for(let Ct=0,Dt=dt.length;Ct<Dt;Ct++){const At=dt[Ct],Xt=gt[At.materialIndex];Xt&&Xt.visible&&m.push(v,ct,Xt,B,Lt.z,At)}}else gt.visible&&m.push(v,ct,gt,B,Lt.z,null)}}const Q=v.children;for(let ct=0,gt=Q.length;ct<gt;ct++)Nr(Q[ct],L,B,k)}function qo(v,L,B,k){const U=v.opaque,Q=v.transmissive,ct=v.transparent;f.setupLightsView(B),$t===!0&&nt.setGlobalState(y.clippingPlanes,B),k&&vt.viewport(P.copy(k)),U.length>0&&Os(U,L,B),Q.length>0&&Os(Q,L,B),ct.length>0&&Os(ct,L,B),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Yo(v,L,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new fi(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?Li:Mi,minFilter:dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const Q=f.state.transmissionRenderTarget[k.id],ct=k.viewport||P;Q.setSize(ct.z*y.transmissionResolutionScale,ct.w*y.transmissionResolutionScale);const gt=y.getRenderTarget(),dt=y.getActiveCubeFace(),Ct=y.getActiveMipmapLevel();y.setRenderTarget(Q),y.getClearColor(q),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Yt&&St.render(B);const Dt=y.toneMapping;y.toneMapping=Xi;const At=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),$t===!0&&nt.setGlobalState(y.clippingPlanes,k),Os(v,B,k),zt.updateMultisampleRenderTarget(Q),zt.updateRenderTargetMipmap(Q),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let te=0,xe=L.length;te<xe;te++){const le=L[te],ne=le.object,Rt=le.geometry,me=le.material,Kt=le.group;if(me.side===ni&&ne.layers.test(k.layers)){const Xe=me.side;me.side=We,me.needsUpdate=!0,jo(ne,B,k,Rt,me,Kt),me.side=Xe,me.needsUpdate=!0,Xt=!0}}Xt===!0&&(zt.updateMultisampleRenderTarget(Q),zt.updateRenderTargetMipmap(Q))}y.setRenderTarget(gt,dt,Ct),y.setClearColor(q,W),At!==void 0&&(k.viewport=At),y.toneMapping=Dt}function Os(v,L,B){const k=L.isScene===!0?L.overrideMaterial:null;for(let U=0,Q=v.length;U<Q;U++){const ct=v[U],gt=ct.object,dt=ct.geometry,Ct=ct.group;let Dt=ct.material;Dt.allowOverride===!0&&k!==null&&(Dt=k),gt.layers.test(B.layers)&&jo(gt,L,B,dt,Dt,Ct)}}function jo(v,L,B,k,U,Q){v.onBeforeRender(y,L,B,k,U,Q),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(y,L,B,k,v,Q),U.transparent===!0&&U.side===ni&&U.forceSinglePass===!1?(U.side=We,U.needsUpdate=!0,y.renderBufferDirect(B,L,k,U,v,Q),U.side=qi,U.needsUpdate=!0,y.renderBufferDirect(B,L,k,U,v,Q),U.side=ni):y.renderBufferDirect(B,L,k,U,v,Q),v.onAfterRender(y,L,B,k,U,Q)}function Bs(v,L,B){L.isScene!==!0&&(L=Tt);const k=xt.get(v),U=f.state.lights,Q=f.state.shadowsArray,ct=U.state.version,gt=G.getParameters(v,U.state,Q,L,B),dt=G.getProgramCacheKey(gt);let Ct=k.programs;k.environment=v.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(v.isMeshStandardMaterial?Me:Ce).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Ct===void 0&&(v.addEventListener("dispose",j),Ct=new Map,k.programs=Ct);let Dt=Ct.get(dt);if(Dt!==void 0){if(k.currentProgram===Dt&&k.lightsStateVersion===ct)return $o(v,gt),Dt}else gt.uniforms=G.getUniforms(v),v.onBeforeCompile(gt,y),Dt=G.acquireProgram(gt,dt),Ct.set(dt,Dt),k.uniforms=gt.uniforms;const At=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(At.clippingPlanes=nt.uniform),$o(v,gt),k.needsLights=fh(v),k.lightsStateVersion=ct,k.needsLights&&(At.ambientLightColor.value=U.state.ambient,At.lightProbe.value=U.state.probe,At.directionalLights.value=U.state.directional,At.directionalLightShadows.value=U.state.directionalShadow,At.spotLights.value=U.state.spot,At.spotLightShadows.value=U.state.spotShadow,At.rectAreaLights.value=U.state.rectArea,At.ltc_1.value=U.state.rectAreaLTC1,At.ltc_2.value=U.state.rectAreaLTC2,At.pointLights.value=U.state.point,At.pointLightShadows.value=U.state.pointShadow,At.hemisphereLights.value=U.state.hemi,At.directionalShadowMap.value=U.state.directionalShadowMap,At.directionalShadowMatrix.value=U.state.directionalShadowMatrix,At.spotShadowMap.value=U.state.spotShadowMap,At.spotLightMatrix.value=U.state.spotLightMatrix,At.spotLightMap.value=U.state.spotLightMap,At.pointShadowMap.value=U.state.pointShadowMap,At.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Dt,k.uniformsList=null,Dt}function Ko(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=_r.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function $o(v,L){const B=xt.get(v);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function uh(v,L,B,k,U){L.isScene!==!0&&(L=Tt),zt.resetTextureUnits();const Q=L.fog,ct=k.isMeshStandardMaterial?L.environment:null,gt=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Yn,dt=(k.isMeshStandardMaterial?Me:Ce).get(k.envMap||ct),Ct=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Dt=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),At=!!B.morphAttributes.position,Xt=!!B.morphAttributes.normal,te=!!B.morphAttributes.color;let xe=Xi;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(xe=y.toneMapping);const le=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=le!==void 0?le.length:0,Rt=xt.get(k),me=f.state.lights;if($t===!0&&(Y===!0||v!==M)){const Oe=v===M&&k.id===S;nt.setState(k,v,Oe)}let Kt=!1;k.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==me.state.version||Rt.outputColorSpace!==gt||U.isBatchedMesh&&Rt.batching===!1||!U.isBatchedMesh&&Rt.batching===!0||U.isBatchedMesh&&Rt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Rt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Rt.instancing===!1||!U.isInstancedMesh&&Rt.instancing===!0||U.isSkinnedMesh&&Rt.skinning===!1||!U.isSkinnedMesh&&Rt.skinning===!0||U.isInstancedMesh&&Rt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Rt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Rt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Rt.instancingMorph===!1&&U.morphTexture!==null||Rt.envMap!==dt||k.fog===!0&&Rt.fog!==Q||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==nt.numPlanes||Rt.numIntersection!==nt.numIntersection)||Rt.vertexAlphas!==Ct||Rt.vertexTangents!==Dt||Rt.morphTargets!==At||Rt.morphNormals!==Xt||Rt.morphColors!==te||Rt.toneMapping!==xe||Rt.morphTargetsCount!==ne)&&(Kt=!0):(Kt=!0,Rt.__version=k.version);let Xe=Rt.currentProgram;Kt===!0&&(Xe=Bs(k,L,U));let xn=!1,qe=!1,ns=!1;const ge=Xe.getUniforms(),Qe=Rt.uniforms;if(vt.useProgram(Xe.program)&&(xn=!0,qe=!0,ns=!0),k.id!==S&&(S=k.id,qe=!0),xn||M!==v){vt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ge.setValue(T,"projectionMatrix",v.projectionMatrix),ge.setValue(T,"viewMatrix",v.matrixWorldInverse);const He=ge.map.cameraPosition;He!==void 0&&He.setValue(T,mt.setFromMatrixPosition(v.matrixWorld)),It.logarithmicDepthBuffer&&ge.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ge.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,qe=!0,ns=!0)}if(U.isSkinnedMesh){ge.setOptional(T,U,"bindMatrix"),ge.setOptional(T,U,"bindMatrixInverse");const Oe=U.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),ge.setValue(T,"boneTexture",Oe.boneTexture,zt))}U.isBatchedMesh&&(ge.setOptional(T,U,"batchingTexture"),ge.setValue(T,"batchingTexture",U._matricesTexture,zt),ge.setOptional(T,U,"batchingIdTexture"),ge.setValue(T,"batchingIdTexture",U._indirectTexture,zt),ge.setOptional(T,U,"batchingColorTexture"),U._colorsTexture!==null&&ge.setValue(T,"batchingColorTexture",U._colorsTexture,zt));const ti=B.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&tt.update(U,B,Xe),(qe||Rt.receiveShadow!==U.receiveShadow)&&(Rt.receiveShadow=U.receiveShadow,ge.setValue(T,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Qe.envMap.value=dt,Qe.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Qe.envMapIntensity.value=L.environmentIntensity),qe&&(ge.setValue(T,"toneMappingExposure",y.toneMappingExposure),Rt.needsLights&&dh(Qe,ns),Q&&k.fog===!0&&K.refreshFogUniforms(Qe,Q),K.refreshMaterialUniforms(Qe,k,H,$,f.state.transmissionRenderTarget[v.id]),_r.upload(T,Ko(Rt),Qe,zt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(_r.upload(T,Ko(Rt),Qe,zt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ge.setValue(T,"center",U.center),ge.setValue(T,"modelViewMatrix",U.modelViewMatrix),ge.setValue(T,"normalMatrix",U.normalMatrix),ge.setValue(T,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Oe=k.uniformsGroups;for(let He=0,Fr=Oe.length;He<Fr;He++){const Ki=Oe[He];Ot.update(Ki,Xe),Ot.bind(Ki,Xe)}}return Xe}function dh(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function fh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,L,B){const k=xt.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),xt.get(v.texture).__webglTexture=L,xt.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:B,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const B=xt.get(v);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};const ph=T.createFramebuffer();this.setRenderTarget=function(v,L=0,B=0){N=v,A=L,C=B;let k=!0,U=null,Q=!1,ct=!1;if(v){const dt=xt.get(v);if(dt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(T.FRAMEBUFFER,null),k=!1;else if(dt.__webglFramebuffer===void 0)zt.setupRenderTarget(v);else if(dt.__hasExternalTextures)zt.rebindTextures(v,xt.get(v.texture).__webglTexture,xt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const At=v.depthTexture;if(dt.__boundDepthTexture!==At){if(At!==null&&xt.has(At)&&(v.width!==At.image.width||v.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(v)}}const Ct=v.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ct=!0);const Dt=xt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Dt[L])?U=Dt[L][B]:U=Dt[L],Q=!0):v.samples>0&&zt.useMultisampledRTT(v)===!1?U=xt.get(v).__webglMultisampledFramebuffer:Array.isArray(Dt)?U=Dt[B]:U=Dt,P.copy(v.viewport),O.copy(v.scissor),z=v.scissorTest}else P.copy(wt).multiplyScalar(H).floor(),O.copy(Gt).multiplyScalar(H).floor(),z=se;if(B!==0&&(U=ph),vt.bindFramebuffer(T.FRAMEBUFFER,U)&&k&&vt.drawBuffers(v,U),vt.viewport(P),vt.scissor(O),vt.setScissorTest(z),Q){const dt=xt.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,B)}else if(ct){const dt=L;for(let Ct=0;Ct<v.textures.length;Ct++){const Dt=xt.get(v.textures[Ct]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ct,Dt.__webglTexture,B,dt)}}else if(v!==null&&B!==0){const dt=xt.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,dt.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(v,L,B,k,U,Q,ct,gt=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=xt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt){vt.bindFramebuffer(T.FRAMEBUFFER,dt);try{const Ct=v.textures[gt],Dt=Ct.format,At=Ct.type;if(!It.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-k&&B>=0&&B<=v.height-U&&(v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+gt),T.readPixels(L,B,k,U,yt.convert(Dt),yt.convert(At),Q))}finally{const Ct=N!==null?xt.get(N).__webglFramebuffer:null;vt.bindFramebuffer(T.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(v,L,B,k,U,Q,ct,gt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=xt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt)if(L>=0&&L<=v.width-k&&B>=0&&B<=v.height-U){vt.bindFramebuffer(T.FRAMEBUFFER,dt);const Ct=v.textures[gt],Dt=Ct.format,At=Ct.type;if(!It.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Xt),T.bufferData(T.PIXEL_PACK_BUFFER,Q.byteLength,T.STREAM_READ),v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+gt),T.readPixels(L,B,k,U,yt.convert(Dt),yt.convert(At),0);const te=N!==null?xt.get(N).__webglFramebuffer:null;vt.bindFramebuffer(T.FRAMEBUFFER,te);const xe=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await pu(T,xe,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Xt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Q),T.deleteBuffer(Xt),T.deleteSync(xe),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,B=0){const k=Math.pow(2,-B),U=Math.floor(v.image.width*k),Q=Math.floor(v.image.height*k),ct=L!==null?L.x:0,gt=L!==null?L.y:0;zt.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,B,0,0,ct,gt,U,Q),vt.unbindTexture()};const mh=T.createFramebuffer(),gh=T.createFramebuffer();this.copyTextureToTexture=function(v,L,B=null,k=null,U=0,Q=null){Q===null&&(U!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let ct,gt,dt,Ct,Dt,At,Xt,te,xe;const le=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(B!==null)ct=B.max.x-B.min.x,gt=B.max.y-B.min.y,dt=B.isBox3?B.max.z-B.min.z:1,Ct=B.min.x,Dt=B.min.y,At=B.isBox3?B.min.z:0;else{const ti=Math.pow(2,-U);ct=Math.floor(le.width*ti),gt=Math.floor(le.height*ti),v.isDataArrayTexture?dt=le.depth:v.isData3DTexture?dt=Math.floor(le.depth*ti):dt=1,Ct=0,Dt=0,At=0}k!==null?(Xt=k.x,te=k.y,xe=k.z):(Xt=0,te=0,xe=0);const ne=yt.convert(L.format),Rt=yt.convert(L.type);let me;L.isData3DTexture?(zt.setTexture3D(L,0),me=T.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(zt.setTexture2DArray(L,0),me=T.TEXTURE_2D_ARRAY):(zt.setTexture2D(L,0),me=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,L.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,L.unpackAlignment);const Kt=T.getParameter(T.UNPACK_ROW_LENGTH),Xe=T.getParameter(T.UNPACK_IMAGE_HEIGHT),xn=T.getParameter(T.UNPACK_SKIP_PIXELS),qe=T.getParameter(T.UNPACK_SKIP_ROWS),ns=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,le.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,le.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ct),T.pixelStorei(T.UNPACK_SKIP_ROWS,Dt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,At);const ge=v.isDataArrayTexture||v.isData3DTexture,Qe=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const ti=xt.get(v),Oe=xt.get(L),He=xt.get(ti.__renderTarget),Fr=xt.get(Oe.__renderTarget);vt.bindFramebuffer(T.READ_FRAMEBUFFER,He.__webglFramebuffer),vt.bindFramebuffer(T.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let Ki=0;Ki<dt;Ki++)ge&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xt.get(v).__webglTexture,U,At+Ki),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xt.get(L).__webglTexture,Q,xe+Ki)),T.blitFramebuffer(Ct,Dt,ct,gt,Xt,te,ct,gt,T.DEPTH_BUFFER_BIT,T.NEAREST);vt.bindFramebuffer(T.READ_FRAMEBUFFER,null),vt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||xt.has(v)){const ti=xt.get(v),Oe=xt.get(L);vt.bindFramebuffer(T.READ_FRAMEBUFFER,mh),vt.bindFramebuffer(T.DRAW_FRAMEBUFFER,gh);for(let He=0;He<dt;He++)ge?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ti.__webglTexture,U,At+He):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ti.__webglTexture,U),Qe?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Oe.__webglTexture,Q,xe+He):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Oe.__webglTexture,Q),U!==0?T.blitFramebuffer(Ct,Dt,ct,gt,Xt,te,ct,gt,T.COLOR_BUFFER_BIT,T.NEAREST):Qe?T.copyTexSubImage3D(me,Q,Xt,te,xe+He,Ct,Dt,ct,gt):T.copyTexSubImage2D(me,Q,Xt,te,Ct,Dt,ct,gt);vt.bindFramebuffer(T.READ_FRAMEBUFFER,null),vt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Qe?v.isDataTexture||v.isData3DTexture?T.texSubImage3D(me,Q,Xt,te,xe,ct,gt,dt,ne,Rt,le.data):L.isCompressedArrayTexture?T.compressedTexSubImage3D(me,Q,Xt,te,xe,ct,gt,dt,ne,le.data):T.texSubImage3D(me,Q,Xt,te,xe,ct,gt,dt,ne,Rt,le):v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Q,Xt,te,ct,gt,ne,Rt,le.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Q,Xt,te,le.width,le.height,ne,le.data):T.texSubImage2D(T.TEXTURE_2D,Q,Xt,te,ct,gt,ne,Rt,le);T.pixelStorei(T.UNPACK_ROW_LENGTH,Kt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Xe),T.pixelStorei(T.UNPACK_SKIP_PIXELS,xn),T.pixelStorei(T.UNPACK_SKIP_ROWS,qe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ns),Q===0&&L.generateMipmaps&&T.generateMipmap(me),vt.unbindTexture()},this.initRenderTarget=function(v){xt.get(v).__webglFramebuffer===void 0&&zt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?zt.setTextureCube(v,0):v.isData3DTexture?zt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?zt.setTexture2DArray(v,0):zt.setTexture2D(v,0),vt.unbindTexture()},this.resetState=function(){A=0,C=0,N=null,vt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const Ii=[{name:"数字的童年",period:"第 I—III 章",concept:"观察价格 · 认识交易规则",color:3230784,whisper:"我以为数字不会欺骗我。后来我知道，数字抵达的时间也会。",motif:"board"},{name:"离开旧方法",period:"第 IV—VI 章",concept:"重新开始 · 从波动到趋势",color:5064754,whisper:"椅子空着。那个老人留下的答案，比任何消息都慢。",motif:"clock"},{name:"风暴的方向",period:"第 VII—IX 章",concept:"试探与加仓 · 1907年恐慌",color:3426645,whisper:"窗外不是海。是所有人都需要、却忽然消失的钱。",motif:"ship"},{name:"棉花的雪",period:"第 X—XII 章",concept:"知与行的裂缝 · 权威与自我",color:5851968,whisper:"棉花很轻。一个相信自己不会犯错的人，却能被它压垮。",motif:"cotton"},{name:"债务的冬天",period:"第 XIII—XV 章",concept:"人情、破产与重建 · 外部风险",color:4080203,whisper:"债务没有声音。它只是跟着我，坐在每一张报价板前。",motif:"safe"},{name:"消息的回声",period:"第 XVI—XVIII 章",concept:"小道消息 · 经验与事实",color:4016698,whisper:"电话每响一次，便有人替我想好了一种未来。",motif:"phone"},{name:"幕后剧场",period:"第 XIX—XXI 章",concept:"历史操纵 · 供需与退出",color:5258051,whisper:"舞台上，价格在上升。舞台下，有人正在寻找接过股票的手。",motif:"press"},{name:"留给公众的信",period:"第 XXII—XXIV 章",concept:"发行、宣传与责任 · 全书回望",color:3427404,whisper:"最后一扇门后没有秘诀。只有你自己的判断。",motif:"paper"}],Us=[{n:1,roman:"I",title:"那本沾着粉笔灰的小册子",object:"观察笔记",kind:"book",quote:"先记录发生了什么，再判断自己是否看懂。",scene:"你翻开桌上的小册子。铅笔在页边留下一行很短的预测；下一行，却是后来真实发生的价格。",story:["故事开始时，拉里还是一个替经纪行抄写报价的少年。客户守着行情机念出价格，他把数字写上大黑板。最初，他并不关心企业的名字和经营。他关心的是数字怎样变化：一段上涨开始之前，价格曾怎样停顿；一次下跌来临之前，买卖的力量怎样变得不一样。长时间重复的工作，渐渐成了观察市场的学校。","他凭记忆比较今天与过去，后来拿出一本小册子，把预测写进去，再用实际报价检查。这里的重点不是假想赚了多少钱，而是他观察得准不准。他不把事后编好的理由当作事前的判断。少年第一次参与实际交易，赚到的钱很少，却第一次把自己对数字的理解换成了真实的结果。","在对赌行里，他的这种短线读盘能力很快见效。所谓对赌行，并不把客户每笔订单送到交易所，而是与客户对赌报价涨跌。持续盈利的客户损害老板的利益；他逐渐受到限制，甚至不再被接待。一间看起来像经纪行的屋子，与真实证券市场之间，隔着完全不同的规则。","原章还写到店家提高保证金、加收不利于他的价差，以及人为摆布报价的手段。成功没有证明这套办法可以放到任何地方。他学会读数字，却还没有学会辨认数字背后的交易制度。第一间房的门，正是这份尚未被察觉的局限。"],principle:"把判断、依据与后续事实分开记录，才有可能发现自己的真实能力。正确几次并不等于有稳定优势；交易对手、费用和执行方式同样会改变结果。"},{n:2,roman:"II",title:"纽约来的行李箱",object:"旧行李箱",kind:"suitcase",quote:"换了交易场所，就得重新理解自己的优势。",scene:"箱子的皮革已经裂开。你抬起盖子，里面没有衣服，只有一张到纽约的车票和一叠越来越薄的钞票。",story:["拉里二十一岁来到纽约时，随身带着两千五百美元。他并不是从未输过的神童：早先已经挣过更多的钱，也已经把它们失去过。他知道自己只在有充分把握时交易往往更有效，却常常因为想一直参与而偏离自己的方法。无论市场有没有合适机会，天天都想挣钱，本身就会制造亏损。","他希望到正规交易所会员的办公室里交易，靠近原始行情，摆脱对赌行施加的限制。但真正的股票买卖，不是按照黑板上的价格结算一次赌注。他看见价格、下达订单、订单送到场内、实际成交，再收到回报，这些环节之间存在时间差。短短一点波动，在对赌行可能足够获利，在真实市场却可能被迟延与执行价格吞掉。","账户吃紧之后，他又回到一些对赌场所筹集本金，甚至用不同身份进入不认识他的店。他的交易再次显示出读盘能力，也再次让老板不愿接待他。某个老板把话说得很直白：普通客户的损失养活这个地方，而一个能长期赢钱的人，并不属于这种生意。","本章的讽刺在于：把他赶出去的店家，间接迫使他学到更多。他不能永远依赖一个只允许别人输钱的游戏。可他也不能把在那个游戏里的成功，直接移植到纽约。这只行李箱装着本金，更装着一套尚未适应新环境的习惯。"],principle:"优势总是依附于具体条件。价格来源、成交延迟、费用、保证金和对手方是否可靠，会改变同一种判断的实际结果。频繁操作并不自动带来机会；想挣钱的愿望也不能代替有利条件。"},{n:3,roman:"III",title:"迟到的报价纸带",object:"行情纸带",kind:"board",quote:"看对方向，也可能输在时间与执行。",scene:"纸带像一条狭长的河流越过桌面。你读到的数字还在昨天的岸上，窗外的人群已经奔向另一边。",story:["拉里回顾自己的错误时，提出了一个超越多空阵营的判断：市场没有必须忠于的牛方或熊方，只有与实际形势相符的一方。可知道这句话，并不等于能够执行。用想象中的钱操作，人很容易觉得自己勇敢而准确；当真实本金、生活费用和自尊都压上去，决定会变得不同。","纽约的繁荣吸引了大批有钱人进场，股票成交量和投机热情都远超过他少年时的经验。他可以看见报价板，听见客户议论，却仍在用过去抓取小幅变动的办法处理一种更大、更复杂的市场。他还会在上涨中猜测顶点，卖空后迅速认错，再转向买入。市场很热闹，他的理解却没有同步长大。","1901年北太平洋相关的挤压与恐慌使这份局限突然显形。行情机严重落后于现场成交，屏幕上看似仍能作为依据的数字，已经无法代表订单实际会成交的位置。他曾积累起相当可观的资金，却在剧烈行情里失去。问题不是故事里没有机会，而是他的行动所依据的时间和真实市场脱节。","此后反复交易与生活支出，又让他重新跌回低点。他逐渐意识到自己还没能准确说出问题所在。不能诊断自己的失败，就很容易把同一种失败叫成运气不好，继续重复。旧工具曾经很好用，但小弹丸并不适合新的猎物。"],principle:"分析、时机、执行与资金承受力是不同环节。对方向的判断不能掩盖执行风险。模拟成功与真实交易之间，还隔着心理压力和具体规则；把问题说清楚，是改变方法的起点。"},{n:4,roman:"IV",title:"退回来的汇票",object:"汇票与账页",kind:"ticket",quote:"重新开始之前，先查清上一次为什么结束。",scene:"抽屉里有一张被折过四次的汇票。折痕没有抹掉数字，只把它切成了一小块、一小块的勇气。",story:["离开纽约之后，拉里并没有放弃重返华尔街。他需要重新筹集本金，也相信有一天，当方法成熟时，只有规模更大的市场才能容纳他的交易。可家乡认识他的对赌行仍不愿接待他，不认识他的店又常常不可靠。他既要寻找可获利的报价，又要确认对手方真的会支付盈利。","他到外地考察所谓经纪业务。有些店用低佣金、直接连线、动人的股票消息包装自己，却保留了对赌式的生意逻辑。拉里逐步摸清它们如何执行订单，先小额试探，避免立即暴露自己。他不是只读一张价格表；他还在观察这个地方怎样挣钱、为什么欢迎某种客户。","当自己的盈利与店家的利益冲突时，名义上的便利很快消失。交易可以被改用不利方式执行，账户也可能遭遇干预。那些主动寄来的电报，声称有内部集团要把某股推高许多点，其目的未必是替客户挣钱，可能只是诱使客户在最容易被吞掉本金的环境里加大下注。","带着再次筹得的钱，他第三次尝试纽约。本章末尾，他逐项区分过去的失败：有的是在自己的方法没有优势时乱做；有的是极端行情与迟到报价造成；另一些还没有完全查明。他没有把“已经吃过苦”当作“已经学会”。损失能教人避免某些事情，但知道不要做什么，只是开始。"],principle:"复盘应当具体到触发、依据、执行和结果，避免把所有损失统称为“心态不好”。制度或执行问题与判断问题不同。重新筹得本金，只是恢复行动条件，不代表原来的问题已经修复。"},{n:5,roman:"V",title:"老人没有离开的椅子",object:"等待的座钟",kind:"clock",quote:"识别大势之后，仍然需要坐得住。",scene:"钟摆慢得令人心烦。你几乎想把它拨快。老人没有留下名字，只留下一个回答，像一张一直没有卖掉的股票。",story:["拉里发现，过度专注于报价的小幅变化，会让一个熟练读盘者失去弹性。价格行为确实能提供信息，但一套机械规则并不能概括全部市场。某只股票如果没有按预期表现，就不该因为既有公式而强行解释它。观察应当告诉人何时没有把握，而不只是告诉人何时觉得自己聪明。","办公室里有一位年长客户帕特里奇，大家给他起了带着调侃意味的绰号。他很少急着交易。别人带着内部消息和犹豫去问他，他总把谈话拉回总体环境：眼下是牛市。年轻的拉里最初以为这是敷衍，因为老人没有告诉别人哪天买、哪天卖。","直到有人劝老人先卖掉，等待回落再买回来，他才显露出真正重视的东西：自己的持仓位置。卖出固然能把纸面收益变成现金，但如果后来没有合适机会买回，便会失去继续参与主要上涨的资格。老人不是保证市场永远上涨，而是在说明，当大势仍支持原判断时，反复抓小差价可能牺牲更大的机会。","拉里逐渐把这份经验理解为对自己的纠正：真正让他赚到大钱的，不单是判断，而是正确以后能够等待。读盘仍然有用，但要服务于对主要行情的理解。故事没有把任何持有都赞美成耐心；它赞美的是有依据、有前提的持有。错误需要处理，正确的位置则不能只因短暂波动就轻易放弃。"],principle:"耐心与僵持的区别，在于前提是否还成立。行情总体仍支持判断时，小幅波动未必要求频繁退出；事实改变时，继续持有也不能借“坐得住”来自我辩护。"},{n:6,roman:"VI",title:"那封好心的电报",object:"联太铁路电报",kind:"letter",quote:"把别人的判断接过来，也把责任交出去了。",scene:"电报的纸已经发黄。落款像一只友善的手。你握住它时，没有察觉自己的另一只手已离开方向盘。",story:["1906年春天，拉里在大西洋城度假。他忽然强烈地想卖空联合太平洋，却说不清这份感觉来自何处。后来旧金山地震发生，相关股票与市场承受压力。书中把这个巧合放进他的回顾，但并没有提供一条可重复、可验证的“预知灾难”办法。一次难以解释的成功，最容易被旁人讲成神秘天赋。","随着灾情与资金需求显现，他加大卖空，获得利润。可同一只股票随后又成为另一课的材料。在萨拉托加，他依据市场表现判断上涨，买进联合太平洋。熟悉他的经纪人却带来非常肯定的劝告，声称内部情况不支持他的操作，出于好意希望他避免损失。","拉里接受了这份劝告，放弃自己的判断，甚至站到了相反方向。随后公司提高股息，价格向上，原先的读盘判断反而得到验证。这个失误不是陌生骗子欺骗了他，而是可信、能干、善意的人，其判断仍可能错误。关系的可靠，不等于信息结论的可靠。","他迅速平掉错误的空头，又转为买入，弥补损失并获得收益。他把这一段当作交易教育的重要转折：不再把一个人的名声放在自己观察到的事实之上，同时也要摆脱只盯个别价格波动的旧方法，开始思考基本条件。独立不是倔强，而是判断必须由自己的证据承担。"],principle:"可信的人也可能犯错。新的意见值得检验，却不应只凭地位或友谊覆盖已有证据。一次直觉恰好正确，不能被推广为预测灾难的能力；本章可学习的部分是纠错和保持独立。"},{n:7,roman:"VII",title:"越放越小的砝码",object:"试探天平",kind:"scale",quote:"让市场先证明你的起点，再考虑增加暴露。",scene:"天平的两侧不是黄金，而是两种声音：一边说“已经涨太多”，另一边说“它仍在往上走”。你放下第一枚砝码。",story:["拉里发现，多数人不要一份关于牛市或熊市的分析，他们想要一个具体代码和买卖指令。因为指令可以省掉研究，也可以在亏损时提供一个可以责怪的人。可他自己的进步，恰恰来自把单只股票的小变化放回整体市场，而不是向别人索取一个无需思考的答案。","他解释，买入上涨中的股票，不是因为喜欢付高价，而是因为价格的实际行为在确认方向。低价并不天然安全，高价也不天然意味着应该卖空。原章用大户德肯等交易故事说明，别人声称内部人在买入，并不能直接构成自己的买入理由；市场是否能吸收一笔真实的卖单，比传来的口头说法更能说明买方力量。","扩大仓位之前，他需要初始交易得到市场响应。他强调，第二笔买入不应只是因为第一笔正在亏损；第一笔先表现出利润，才有理由考虑增加。每一步都观察买卖的反应，等到条件与时机配合，再把规模提高。这和价格下跌后不断摊低成本，是两种不同的逻辑。","也并非每一种价格变化都适合立刻开展主要操作。市场有时还没有明确表现，交易者应当等待或试探，而不是由于自己已经形成理论就一次押满。本章将“看对”拆成更具体的过程：先选环境，再找时机，再由真实市场反应确认，最后才考虑规模。"],principle:"价格相对高低，不等于方向判断；加仓也应依赖新的确认，而不是挽救旧亏损。原书的金字塔式扩大必须连同风险与时机理解，不能简化为“上涨就永远加仓”。"},{n:8,roman:"VIII",title:"还没抵达的风暴",object:"货币紧张的报纸",kind:"paper",quote:"提前看见，不代表可以无限承受提前行动的代价。",scene:"纸上的风暴比窗外来得早。你把报纸展开，风穿过标题。桌上的日历却仍停在一个看起来平静的早晨。",story:["联太事件之后，拉里更警惕那些没有经过自己检验的意见。他不愿因为持有股票而选择看多，也不愿因为卖空而只搜寻坏消息。持仓应当来自对条件的判断，不能反过来改写判断。他逐步把货币、信用与整体经济环境纳入自己的市场观察。","在通向1907年危机的过程中，他看到资金条件日益紧张，认定大跌有其基础。他卖空，市场却还会反弹，价格迟迟不按他的时间表下降。他的分析可能指向一个正确的大方向，但过早扩大仓位使他承受了不必要的损耗。资金和耐力都不是无限的。","几次过早操作之后，他重新筹措有限的本金，继续观察市场。关键不是把宏观预见丢掉，而是把行动起点放到价格已经开始配合的时候。反弹变得无力，卖出越来越能够推动价格下行，市场反馈才逐渐同原来的分析接上。","本章不是一个预言家始终正确的故事。它写一个人如何因为正确得太早而陷入困境，再学会让行情自己证明时机。市场不会因为你的逻辑完整就停止反弹，也不会因为你已经没有钱等待，就提前给出应有的结果。"],principle:"方向与时机不同。一个正确的宏观观点，如果没有合适起点和可承受的资金结构，仍可形成错误交易。等待市场行为配合分析，是把有限资金与不确定时间相协调。"},{n:9,roman:"IX",title:"风暴里停下的船",object:"佛罗里达的帆船",kind:"ship",quote:"在恐慌中，流动性比理论上的价格更急迫。",scene:"船停在一片蓝黑色的水上。有人带来一份报纸。你本来已经离开市场，却在一眼之间听见纽约的钟声。",story:["拉里在佛罗里达海岸度假，暂时没有股票仓位。朋友带来的报纸写着市场强劲反弹。他的看空不是来自眼前一根跌线，而是资金条件仍没有改变：这次上涨在他看来超出了环境所能支持的程度。他上岸到经纪行重新观察，而不是只凭船上的标题下单。","他开始卖空，并根据股票的实际表现选择自己的操作。原章中关于安纳康达等股票的交易，继续说明强弱反应的重要性。公司名字或价格到了某个整数位，并不能单独说明安全；买卖之后市场怎样回应，才决定他是否继续承担更多暴露。","1907年恐慌真正展开后，问题已不限于股价，整个市场缺少维持交易的资金。借钱难，买方消失，证券可能必须在极不利条件下出售。拉里的空头在这一阶段获利，他也从交易回报中感受到市场承接能力的骤然变化。","在全市场接近失控时，他接到希望不要再扩大下跌压力的请求，最后停止进攻并买入回补。书中对这个场面的叙述带有戏剧性：一个以卖空获利的人，也可以在关键时刻成为买方。这里不是一个永远坚持阵营的英雄，而是一个会根据市场状态改变行动的操作者。"],principle:"危机中的价格，还包含现金需求和成交能力。做空与买入并不是身份；情况改变时，应当重新判断下一步。1907年这段事件属于历史叙事，不能当作今天任何市场都会照样发生的剧本。"},{n:10,roman:"X",title:"镜子里的希望与恐惧",object:"两面镜",kind:"mirror",quote:"亏损时盼它回来，盈利时怕它消失，恰好会把行动推向错误。",scene:"镜中没有你的脸，只有两个交替亮起的字：希望，恐惧。你靠近时，它们交换位置。",story:["拉里说，投机者有时明知道自己正在犯错，仍然做下去。事后能够说明发生在什么地方、何时开始、怎样扩大，却说不清为什么当时停不住。错误伤害的不仅是钱包，还有虚荣。人因此愿意躲开某一种痛，却又可能在它的近亲身上重新受伤。","本章把“最小阻力方向”讲得更具体。市场有时长期处于狭窄区间，涨一点又跌回去，跌一点又被买起。他曾经看好棉花，反复用自己的买入推动它，自己停下后价格就退回。这样的操作消耗了大量资金；后来真正的行情到来时，他已付出过早行动的代价。","对于这种横向整理，他强调先观察范围，等待价格真正摆脱限制，而不是急着证明理论。讨论小麦时，他宁愿等它超过某个重要位置之后再参与，也不因为当前看起来便宜就立即买。较高的价格若伴随更明确的市场反馈，可能比低价时毫无方向的下注更有依据。","最后，他把希望与恐惧翻转：不利时，人希望明天会好，因而容忍更大亏损；有利时，人害怕利润消失，过早结束正确的位置。交易要求抵抗这种自然冲动。他也提醒，没有人能永久战胜整个市场。局部成功、某次获利，都不能变成每次参与都必须赢的承诺。"],principle:"等待有意义的反馈，不等于等待任何价格都替你实现愿望。约束亏损与给正确判断留出空间，必须结合事实变化理解。原书的突破位置是历史案例，不是可机械套用的统一数值。"},{n:11,roman:"XI",title:"一顶并不属于他的皇冠",object:"谷物交割账",kind:"book",quote:"一次成功里，能力、条件与偶然性可能同时存在。",scene:"账簿旁边有一块写着“棉花之王”的牌子。你翻到盈亏那一页，发现皇冠的影子遮住了一个空白。",story:["1907年股票上的胜利之后，拉里想驾游艇南下，却被谷物头寸留住。他看空小麦与玉米，小麦下跌让他获利，玉米却遭遇另一位大交易者试图控制供给、挤压空头。一个人在整体判断上可能合理，仍会因特定合约的持仓结构陷入危险。","他不只是空等理论成立，而是观察关联商品的反应，并借其他谷物的交易影响市场情绪，寻求解除玉米困境的机会。原章还用其他操作者的故事说明，同一个消息在不同的整体布局里可以产生不同用途。消息并没有一种脱离仓位、流动性和市场条件的固定答案。","随后他在佛罗里达听说著名棉花投机者珀西·托马斯的失败。拉里长期敬佩这个人物，后来自己参与棉花交易，积累了一笔大额多头。他也面对一个实际问题：头寸很大，平常的市场承接量有限，怎样卖掉而不让自己的卖出毁掉报价上的利润？","一次报纸报道和市场误解意外地创造了强烈买盘，使他的退出比预想顺利得多。旁人却把它解释成他精心安排的操作，媒体给他戴上“棉花之王”的名号。他明确说那份名声包含偶然性，并非全部来自自己掌控。这个名号又成为下一章相识托马斯的桥梁：别人看见的英雄形象，将开始影响他对自己的判断。"],principle:"归因要区分可重复的判断、具体市场结构和无法安排的偶然事件。尤其要区分账面盈利与大头寸实际退出的难度。赢过一次，未必掌握了别人以为你掌握的全部能力。"},{n:12,roman:"XII",title:"一包棉花压垮的房间",object:"托马斯的棉花包",kind:"cotton",quote:"知道原则，与在受压时执行原则，是两件事。",scene:"棉花从麻绳的缝里露出来。你按下去，它几乎没有重量。房间却在你松手后，安静地向下沉。",story:["珀西·托马斯是一位知识丰富、表达极有说服力的棉花专家。他的资料来自广泛的通信网络，他对产量、需求和供给的解释让拉里钦佩。拉里最初并不看多棉花，自己从公开信息和市场表现得到的结论，与托马斯不同。但持续交谈让他渐渐失去对自己证据的信心。","问题不在于所有数字必然虚假，而在于他停止用自己的方式检验结论。托马斯把自己的信息讲成独有且可靠，把别人可获得的信息讲成不可靠。拉里最终通过对方递来的同一页材料观察整个市场，逐渐接受了对方的看多。他失去的首先是判断的独立，而后才是本金。","当棉花不按预期表现时，拉里没有采用自己原来主张的做法。他增加失利的棉花仓位，又卖掉仍然表现良好的小麦，用正确交易的资源支持错误交易。赢的一边被切掉，输的一边被喂大。他不是没听过纪律，而是在信念、权威和亏损压力混合时，无法让纪律约束自己。","重创之后，他又急着通过交易满足具体用钱需求，包括用市场替自己支付某件想买的东西。这样的目标要求市场立刻配合自己的时间表，使观察变成许愿。最后他不仅失去棉花交易后剩余的资金，还继续交易、继续借债。本章把失去自我判断、补救亏损与迫切需求连成了一条清楚的下坠路径。"],principle:"权威资料可以参考，但不能代替自己的检验。不应把卖出有效仓位、扩大无效仓位包装成坚持。个人开支与翻本愿望不是市场机会；急迫的需要会压缩等待条件的能力。"},{n:13,roman:"XIII",title:"不用偿还的钱，不能放下的恩情",object:"人情借据",kind:"letter",quote:"人情义务也可能成为看不见的交易限制。",scene:"信纸上的字句温和得像炉火：不用急着还。你把信靠近灯光，才看见背面印着另一行更细的条款。",story:["棉花后的拉里不仅缺钱，还失去了平静。他习惯大规模交易，回到很小的头寸时觉得每一个正确判断都不再值得。他焦虑、身体不适，担心自己的判断能力已经消失。过去的成功反而成为一个尺度，让他难以接受现在必须从小处重新开始。","经纪人丹·威廉森给了他帮助和二万五千美元的资金，拉里很快恢复了一段成功交易。他想还款，对方却坚持不必急。他感激这种支持，没有坚持清偿，也觉得自己不应取走盈利。金钱上的借款逐渐与难以结清的人情搅在一起。","威廉森随后干预他的交易。他卖空某只铁路股，经纪人未经拉里所希望的方式处理了头寸，又以内部消息为由劝阻。拉里愿意让步，不愿对帮助过自己的人表现得不够体谅。可是他觉得应当做的交易不断被阻止，赚钱的机会与判断自由一起被压缩。","后来拉里把这件事解释为利益冲突：威廉森所顾及的家族遗产持有大量股票，不愿一个有能力的大空头自由行动。应注意这是叙述者的回顾与推断。无论动机怎样，已发生的交易限制是真实的。一个看起来非常善意的关系，把他绑在一个不利于发挥判断的环境里，恢复因此被拖延。"],principle:"借款条件、账户权限与利益关系应当清楚。感谢不应意味着无限让渡独立判断。对于书中人物的动机，要区分明确发生的行为与叙述者后来给出的解释。"},{n:14,roman:"XIV",title:"保险柜留给谁",object:"重建的保险柜",kind:"safe",quote:"保护生活的资金，也是在保护自己免受自己的冲动。",scene:"保险柜门开着。里面没有交易指令，只有两张小小的姓名卡。门外的纸带还在吐数字，这里却没有行情。",story:["离开威廉森之后，拉里又遇到漫长的困难市场。债权人的催促加重精神负担，他既想挣钱，也不能平静观察。第一次世界大战开始后，交易所关闭，使筹集本金和开展交易更困难。债务与缺少可做的市场，像两把锁同时扣在门上。","他最后通过破产程序卸下法律上的负担，精神状态才得以恢复。重新得到有限的交易支持后，他没有立刻全面出击，而是仔细等待自己熟悉的伯利恒钢铁接近认为有意义的关键位置。他原计划等越过100，却在98时根据行情表现先下单，五百股成交在98至99。有限的资源要求他选择一个更确定的起点，先恢复正确观察和行动的配合。","战争造成的供应需求与资金流入推动美国市场繁荣，他在1915、1916年得到恢复机会。但途中仍有意料之外的事件，包括卢西塔尼亚号被击沉造成的市场震荡。回来并不是从此不会亏损，而是他重新能够理解条件、适应市场，并借有利环境累积资金。","1917年初，他偿还了超过一百万美元的旧债，虽然其中有些在法律上已无须偿还。随后他把一部分钱用于年金，并为妻儿设立信托。原章最令人清醒的一点是：他不仅担心市场夺走这笔钱，也担心自己会把任何能够拿到的钱再次用于交易。他要把家庭保障隔离在连自己的欲望也不能轻易触及的地方。"],principle:"恢复需要心理空间、可行条件和选择性行动，而不是被翻本期限驱赶。把生活保障与高风险资金分开，是承认人的自控力有限。书中的具体信托安排属于人物历史经验，不是今天的法律方案。"},{n:15,roman:"XV",title:"被改写的咖啡合约",object:"咖啡交易合同",kind:"paper",quote:"分析的是供需，交易的却还包括规则。",scene:"合同的价格没有改变，边缘却被另一张纸覆盖了。你轻轻揭开，上面是一项刚刚生效的决定。",story:["拉里把投机的风险分成不同性质：正常的不确定性、无法预测的外部事件，以及别人的不公正行为。天气、事故、战争或突发发展不一定是谁的错。知道自己不可能有预知能力，是理解风险的一部分。但他也记得一些自己认为判断正确、行事正当，却因外部介入失去收益的经历。","咖啡交易就是其中之一。他根据战争期间的供给、运输和价格条件建立头寸，认为有充分的获利机会。对手面临难以交付的压力，转而向政府寻求干预，把他描述成将抬高美国人早餐成本的投机者。叙述中，这种争议使原来的商业供需问题成为公众政策问题。","价格限制和清算期限随后改变了原有交易环境，他只能处理合约，原本认为很有把握的收益未能实现。需要区分的是：本章表达了拉里对事件的看法，不意味着监管者的动机与全部事实都只存在这一个视角。对于读者，最稳固的教训是合约、交易制度和干预可能改变结果。","他还讨论“空头袭击”怎样被用于解释下跌。把所有下跌归罪于某个大户，能让持有人继续相信基本情况没有问题，却可能忽略真正的疲弱。对手或宣传者的故事可以安慰人，但行情为何持续缺少支持，仍要独立检查，不能只靠一个方便的替罪羊。"],principle:"市场风险不限于价格，也包括合约、运输、政策和执行条件。把某个交易者当作所有下跌的原因，不等于查清下跌。不要把叙述者对监管的抱怨，当成全部事实或现代法律结论。"},{n:16,roman:"XVI",title:"每个人都想传下去的电话",object:"小道消息电话",kind:"phone",quote:"消息被热心传递时，先问是谁希望你行动。",scene:"电话响了。你举起听筒，里面的人急着告诉你一个秘密。走廊里另外三台电话，正用同样的语气讲同一件事。",story:["为什么人如此渴望小道消息？拉里给出的回答里既有贪欲，也有虚荣。得到消息的人希望轻松获利，传消息的人则享受掌握秘密、影响他人的感觉。很多人不是只想得到可靠消息，而是想得到任何可以催促行动的消息；这一次错了，就等待下一次。","原章围绕婆罗洲锡等股票的消息故事说明，传闻也能变成宣传工具。主动向人提供所谓内部机会的人，不一定想帮对方挣钱；他可能需要更多买盘来支持自己出售。消息领取者又会变成消息传播者，一条建议沿着朋友、经纪行和客户关系不断复制。","这种传播的力量不来自每个人都做过研究，反而可能来自每一站都信任上一站。到了最后，很多人相信的是“别人已经知道”，却无人清楚最初资料的来源、条件和利益关系。话语越肯定，越容易掩盖证据的空缺。","拉里不把传来的每一句话当作指令。他强调经验、自己能够理解的材料与实际价格表现。即使一个提示偶然获利，也没有证明依靠提示的人建立了判断能力。读者需要辨认的，不只是消息真假，还包括消息为何在这个时间、通过这个人、带着这份急迫到达自己。"],principle:"核查来源、利益关系、可验证材料和消息的时效。不要因为传播路径熟悉，就认定源头可靠。可以参考信息，却不能把跟随别人下注当作完整研究。"},{n:17,roman:"XVII",title:"没有神谕的早餐桌",object:"早餐桌上的笔记",kind:"book",quote:"经验可以很快，但仍须追得回它的依据。",scene:"窗台有一个空杯子。朋友记住了黑猫，你记住了前夜谈过的资金与政策。故事越神秘，那些普通的细节越容易被忘掉。",story:["朋友喜欢把拉里的及时买卖讲成直觉传奇，例如黑猫出现之后他便卖掉股票。他自己却给出另一种解释：日常观察留下的材料，可能在没有主动推演时仍被大脑处理。决定看似突然，不代表没有来由；长期经验有时使判断在意识完全说清之前已经形成。","在华盛顿的一次行动中，他接触到税收、政策与市场相关的信息。回头看，突然卖出的决定仍能与前面累积的条件联系起来。他并不主张所有冲动都正确，也不能为每一次感受提供无误证明。他试着说明，旁人把快速识别叫作神秘预感，可能只是忽略了观察过程。","本章进一步写到板块倾向。许多人看到同类股票上涨，就买进“还没涨”的那一只，认为总会轮到它。但拉里宁愿检查为什么这只股票没有跟随。如果应该强却始终弱，那份不同本身就是信息；便宜或落后不是一种天然的补涨保证。","棉花交易的案例同样体现这一点。他观察到原来的强势正在变化，先后卖出，再根据持续没有反弹的表现追加判断，后来获利弥补过早卖空的损失。他没有因为之前在棉花上亏过钱而拒绝新机会，也没有因找回亏损就宣称神谕存在。经验和记忆的作用，是更快认识新的事实。"],principle:"直觉如果来自经验，应当尽量能回到具体观察；无法追溯的冲动不能仅凭感觉合理化。板块内的异常弱势值得检查，不应自动期待补涨。上一笔盈亏不应决定下一笔的事实判断。"},{n:18,roman:"XVIII",title:"同一只股票，另一扇门",object:"热带贸易账页",kind:"board",quote:"整体看法不能替单只股票否认正在发生的事实。",scene:"账页的前半是卖出，后半是买入。它们之间没有誓言，只有一条被反复描深的价格线。",story:["拉里讲热带贸易股票时，开头就把它与此前玉米遭到挤压的经验联系起来。公司内部集团反复利用活跃交易、看多宣传与空头持仓，让市场成为一场复杂的供需博弈。他既在这只股票上做多挣钱，也曾做空，不把它归入永久属于自己哪一方的对象。","在一段操作里，他利用相关股票的交易影响市场对这一组证券的看法，以应对对方对热带贸易价格的支撑。这些细节展示的是早期市场大交易者之间的历史博弈，不能作为现实操纵的行动教程。记忆宫殿把它放在档案里，是为了理解价格背后有哪些参与者与利益。","另一次，总体环境令他偏向看空，但热带贸易偏偏在大量卖出下继续变强。内部买盘没有退缩，实际表现与他想象的下跌不一样。他判断继续卖空已不明智，先回补，后来还转为买入，参与上涨。接受单只股票与总体理论暂时不同，是这一章最重要的变化。","但他随后又犯了一个较隐蔽的错：以为内部人应该像自己一样行动，于是持有过久，让部分纸面利润流失。他纠正对手的故事，却仍不能完全避免替对手写剧本。原章不断提醒，交易对象是眼前事实，不是自己推测别人“理应”怎样做。"],principle:"整体方向是背景，具体表现是新的证据。转换立场并不等于缺少原则；拒绝认错才可能使观点变成身份。不能假定其他人的目标、资金和退出方式都与你一致。"},{n:19,roman:"XIX",title:"锁起来的钱",object:"旧市场的铁柜",kind:"safe",quote:"价格之外，市场结构也决定谁可以等、谁必须走。",scene:"铁柜没有装股票。里面装着一张被盖章的支票。门一关，走廊另一头的交易声就忽然变得急促。",story:["叙述从拉里自己的交易转向更早的华尔街。所谓操纵不止一种：积累一大笔股票时不愿把自己的购买价格抬高，出售大批证券时希望更多公众接盘，以及控制某种股票的可交付供给、迫使空头买回，背后都是对供需与市场结构的利用。","他回顾丹尼尔·德鲁、范德比尔特和早年大交易者的轶事。有些人曾制造挤压，又被别人反过来挤压；名声、胆量和资金不能保证永久占优。早期市场把逼空者的力量视为一种荣耀，虚荣也参与了这些争夺。故事不是只有冷静计算，还有想要证明自己最强的冲动。","原章末尾有一段他人转述的旧事：有人借入资金，却不把它用于正常经营，而是拿着认证支票减少其他人能借到的钱。资金被锁住，依赖借款维持仓位的人便受到压力。这说明价格不只由公司经营决定，也会受到信用与交易资源的影响。","这些故事发生在不同历史环境，部分细节来自记忆和轶闻。它们不构成现代市场的普遍规则，更不是今天可以照搬的办法。留在这一间档案室里的，是一种观看角度：问谁拥有交付资源，谁依赖融资，谁能承受等待，以及报价表上没有写出的约束。"],principle:"认识市场结构，才能理解同一价格变化为何对不同参与者造成不同压力。历史操纵故事需要放回当时制度与资料可靠性中阅读；不能把传奇等同于证实的普遍规律。"},{n:20,roman:"XX",title:"价格背后的印刷机",object:"证券销售印刷机",kind:"press",quote:"把价格抬高，和真正卖得出去，并不是同一件事。",scene:"你转动机器，纸上印出了更高的价格。出口却没有多一双手。纸继续堆积，机器的声音开始空洞。",story:["拉里谈到詹姆斯·基恩等市场操作者，同时承认自己年轻时没有真正认识他们的技术。他从别人的故事与自己的经验，试着分清一个看起来神秘的工作：将证券分散到愿意持有的公众手中。推动价格只是其中一环；如果没有真实需求，报价再高也不能把一大笔股票成功换成现金。","他用“分销”的角度解释，这类操作者必须考虑持有人分布、交易活跃度与公众兴趣。集中在少数人手中的证券，和被许多人持续买卖的证券，具有不同市场状态。价格上升吸引注意，但注意是否转化为持续购买，决定原持有人究竟能卖多少。","他特别讨论上涨与回落的关系。公众常常在高价后见到回落，觉得获得了便宜；因此卖出并不只发生在最高点，也可能发生在从高位向下的过程。这里的历史解释提醒读者：成交量很大和热烈谈论，不必然说明内部人在继续看好，它也可能是证券正转移到新持有人手里。","即便自己承担这种工作，拉里也说仍要服从市场反馈：买入若不再能产生预期效果，就不能仅因为自己是操作者而坚持投入。所有人为推动都会遇到条件的边界。一个希望安排市场的人，仍然无法取消市场对自己安排的否定。"],principle:"报价、账面价值、成交活跃与最终退出是不同概念。高位回落并不天然便宜；需要理解供给正从谁流向谁。这里解释历史分销叙事，不提供现实操纵策略。"},{n:21,roman:"XXI",title:"钢铁与石油的两页账",object:"行业对照账簿",kind:"book",quote:"同样的手法，不能覆盖不同的市场条件。",scene:"左页的钢铁厂亮着灯，右页的石油公司没有声音。你把两页叠在一起，数字对不上，连纸张的重量都不同。",story:["这一章用具体案例替代一般讨论。帝国钢铁的公司情况不错，但股票不够活跃，缺少投机兴趣。拉里接手后，依据当时整体环境、企业状况与供需反馈，使交易逐渐活跃。原章描述他把价格提高约三十点，累计买入量却相对有限；关键不是只看自己投入多少，而是是否吸引了其他参与者的真实需求。","在这段历史分销中，他观察市场怎样承接卖出，而不是只看股价有没有上升。公众购买和交易活动能够形成一定流动性，但这种环境也必须不断检验。价格的成功变化并没有赋予任何操作者永久控制权。","接着，他讲石油产品公司。对方希望他帮助处理一大笔持仓，他最初觉得条件可疑，不愿接下，后来在人情压力下同意。结果与钢铁不同：证券的市场状态与供给条件没有配合，已有负担、相互竞争和不合适的时机，使他难以用过去的成功复制结果。","原章末尾把视角推向繁荣顶端：公众先看见股票从低价不断上升，以为每一个新价都太高；后来它越过更高位置，人又逐渐放弃限制的想法。不敢在高处追买，并不保证已有持有人会及时兑现。希望会模糊视线，大量纸面财富最终仍停留在纸上。"],principle:"案例比较应比较条件，不能只复制表面的动作。公司、供给、公众需求与总体环境不同，会改变同一做法的结果。希望让人接受没有边界的上涨，也让人把退出无限延后。"},{n:22,roman:"XXII",title:"裁缝收到的消息",object:"联合炉具的信",kind:"letter",quote:"一个大户的名字，不是公众收益的担保。",scene:"信不是寄给交易所的，是寄给一个做衣服的人。纸上写着某位名人的名字，好像这就足够解释明天。",story:["朋友吉姆·巴恩斯请拉里帮忙出售联合炉具的一大笔股票。拉里最初有多种顾虑，对方却把这当成私人帮忙，他最后同意尽力。本章再次让人情与市场判断相遇：不愿伤害关系的人，可能会接下本来不愿接受的任务。","联合炉具的发行出现在公众对新证券的胃口已接近饱和时。发起人仍希望复制繁荣中别人赚得的大额利润，却没有充分适应总体市场的变化。此前的高价、合并后的份额安排和他们对股票价值的期待，不能自动创造持续的公众购买。","不同参与者的行动又使操作更复杂。拉里要求资金与明确配合，但资金分期到达，内部人可能在他尝试建立市场时卖出。他最终面对下跌环境，只能按市场能给出的条件处理持仓。委托人对结果不满，认为他应该做到更多，而市场并不会因委托人曾经有过希望就回到原来的价格。","最令他不舒服的细节来自妻子的裁缝。裁缝说自己买了这只股票，因为听说拉里会把它做上去。一个内部的销售任务，被外部传闻翻译成了公众的获利承诺。没有见过委托、资金、供给条件的人，却承受了真实损失。拉里说，这让他更不愿给别人股票消息。"],principle:"名字、名气和参与某次操作，不等于收益保证。发行与宣传中的利益安排值得检查。私人任务传播成公众承诺时，最不了解条件的人可能承担最大误解。"},{n:23,roman:"XXIII",title:"匿名内幕人的报纸",object:"油股宣传报",kind:"paper",quote:"解释如果总保护同一方，就需要重新检查。",scene:"报纸上的引号很清楚，引号里面的人却没有名字。价格下跌时，它说坏人来了；价格上涨时，它说企业从未如此好。",story:["拉里承认，警告无法取消投机。人仍会判断错，突发事件仍会让认真计划失效，贪欲、恐惧和虚荣也不会消失。但这些自然风险之外，市场还有不应被接受的宣传与交易弊病。他看到与自己初入纽约时相比已经存在改善，却并不认为公众从此得到充分保护。","他详细描述一种熟悉的模式：企业好转时，内部人安静地买入，随后市场出现对公司盈利与前景的热烈报道。消息引用“某位重要内部人”“财务委员会成员”等匿名来源，既像具有权威，又无法追问责任。公众得到的不是完整资料，而是一个促使它们购买的有利版本。","等到前景变差，内部人可能先安静卖出，公开话语却不相应变得悲观。价格跌了，就解释成空头的攻击；有人正在退出，却告诉外部持有人不该害怕。文字与行动的方向相反，公众相信文字，就更容易替已经掌握信息的人承担持有的时间。","原章以油股等事件说明，拉里的名字也会被用作下跌的替罪对象。内部集团继续卖出，却宣称要惩罚袭击市场的空头，外部高价买家因此继续等待。真正的问题不是有没有一次卖空，而是这种方便的解释让人忽略持续下跌与供给的事实，越过本来应该重新判断的时刻。"],principle:"匿名权威、单一有利叙事与持续相反的市场表现，是值得查验的组合。区分报道声称、参与者实际行动与能被独立验证的资料。价格本身也不解释一切，但不能被宣传直接擦掉。"},{n:24,roman:"XXIV",title:"留在门口的最后一封信",object:"给公众的信",kind:"letter",quote:"市场没有替你思考的义务。",scene:"最后一封信没有封口。你可以把它读完，也可以把自己的问题放进去。窗外天色稍亮，行情机仍然没有停。",story:["全书最后，拉里回到公众为何希望被告知答案。经纪人可以提供资料与观点，但佣金来自眼前交易，分析却应当考虑未来条件。原章说行情常走在实际状况前面；这里表达的是市场面向预期的特征，不能把书中的月份范围当作永远固定的提前量。今天的盈利很好，不等于未来盈利一定维持。","经纪行的乐观建议还涉及客户关系。如果建议客户卖出，客户看到股价继续涨可能抱怨；劝客户买入，短期热闹又能增加佣金。并不是每位经纪人都故意欺骗，但职业激励和客户想听的话，会影响建议怎样被包装。公众必须理解这份关系，而不是假定每句热情建议都来自相同利益。","原章还讨论内部人馈赠股份、让受益者主动向周围宣传等做法：接受了好处的人会成为股票的销售网络，宣传于是看起来像出自许多独立的朋友。对发行规模、可流通供给和信息透明度的要求，体现出拉里对市场制度责任的关心。市场教育不应该只责怪被骗的人，还应当关注创造误导的结构。","书没有在这里写出人物后半生，也没有承诺掌握这些原则的人永不失败。前面二十三件物品已经证明，经验丰富的人也会在知道原则时违背原则。最后留给读者的不是一个股票代码，而是一种责任：观察、记录、核查自己的依据，承认判断与行动之间的裂缝，并在事实改变时重新思考。"],principle:"把建议放回其来源、激励、时效与证据中评估。经验能够帮助判断，却不能消灭人的弱点。全书的逻辑从观察价格到识别自己，再到认识制度与宣传：每一层都不可由一句秘诀替代。"}],de=(n,t,e,i)=>({n,title:t,stage:e,steps:i.map(([s,r,a,o,l])=>({title:s,mode:r,action:a,text:o,anchor:l}))}),Ns=[de(1,"粉笔、五美元与七张粉色票据","chalk",[["报价板前的少年","trace","拖动粉笔，写下报价","十四岁的拉里替经纪行抄写报价。数字最初只是数字；他开始记住它们上涨和下跌之前的习惯。你写下的不是一句秘诀，是下一次可以检查的观察。","I · quotation-board boy / memorandum book"],["伯灵顿的第一笔交易","dispatch","把五美元送到柜台","同事带来伯灵顿的消息，他先检查自己的小册子。书中这笔小小的实际交易，让预测第一次碰到真实的钱：他得到三美元十二美分的盈利。","I · Burlington / $3.12"],["七张粉色票据","stamp","揭开票据背后的条件","在环球对赌行，他持有七张各五百股的糖业空头票据。店家提高保证金并加收不利价差。读得懂数字的人，仍会被交易制度限制。","I · seven big pink tickets / three-point margin"]]),de(2,"二十一岁，到纽约","station",[["最后的两千五百美元","drag","拉开行李箱","他来到纽约时，带着全部两千五百美元。已经赚过，也已经输过。他要靠近原始行情，以为离来源更近就能摆脱那些店家的手脚。","II · age of 21 / twenty-five hundred dollars"],["订单离开你以后","dispatch","把订单送上电报线","真实经纪行会把订单送去成交，不会只按黑板报价结算赌注。报价、指令、成交和回报之间的间隔，正在改变他的旧优势。","II · New York / execution"],["保险柜对你锁上了","dial","转动柜门的把手","为重筹本金，他又到对赌行交易。老板看穿他不是普通的输钱客户。欢迎的笑脸消失，这门生意并不欢迎一个不断兑现盈利的人。","II · Horace Kent / the safe is locked"]]),de(3,"1901年5月9日：看对，输光","ticker",[["五万美元，没有股票","examine","把钟拨到五月九日","当日清晨，他手上接近五万美元现金，没有股票。他预想恐慌先造成大跌，再产生快速反弹，认为这会是一场两头都能获利的机会。","III · morning of May ninth"],["纸带还在昨天的岸上","hold","按住行情机，让纸带吐出","纸带严重落后。你面前缓慢出现的报价，并不是交易所此刻可以成交的位置。柜台另一端的价格已经走远，纸带仍像平常一样看起来可信。","III · unusual violence / delayed quotations"],["回报终于到达","dispatch","取回实际成交回报","他判断了大方向，却输掉全部现金。镜头把两条时间线摆在一起：你看见的价格、你真正成交的价格。它们之间的空白，吞掉了账户。","III · dead right / lost every cent"]]),de(4,"同一个柜台，两封相反的电报","telegrams",[["一半人收到买入","flip","翻到第一面电报","这些近似对赌行的公司把买入消息发给一批客户，又把同一股票的卖出消息发给另一批。它们的生意不是预测准确，而是让客户行动。","IV · hundreds of telegrams"],["另一半人收到卖出","flip","翻到另一面电报","翻过纸，承诺就反过来。少量真实交易的回报可被拿来证明整家机构“正规”；更多客户并不知道自己的订单如何被处理。","IV · buy and sell the same stock"],["第三次回纽约","drag","收起电报，拉上行李箱","拉里重新筹集本金，也重新区分失败的原因：无优势时乱做、迟延报价、尚未查明的问题。资金重来，不代表方法自动成熟。","IV · third attempt / actual practice"]]),de(5,"帕特里奇不肯卖掉的位置","chair",[["办公室里最慢的人","hold","按住扶手，坐一会儿","客户们带着消息与焦虑围住老人，他却听得很耐心。这里的时间放慢，走廊里的人仍不断经过。老人看到的是牛市，而非每一次跳价。","V · Partridge / bull market"],["不是工作，是位置","examine","移开眼前的小差价","哈伍德建议他卖掉克莱马克斯汽车，回落后再买。老人担心失去持仓位置。对方把position误听成工作，笑话后面其实是一种经历过繁荣与恐慌的判断。","V · Climax Motors / lose my position"],["反弹没有给你买回的机会","scrub","让时间继续往前","年轻拉里常先拿小利润，再等一次从未到来的回落。价格继续走高，他留在场外。这段不是“永远不卖”，而是有依据的位置为何比小差价更难找回。","V · reaction that never came"]]),de(6,"联合太平洋：预感与好心","telegraph",[["地震之后，价格没有立刻跌","scrub","展开随后几天的消息","1906年大西洋城的卖空，后来碰上旧金山地震。但第一天市场并未立刻按灾情下跌。一次神秘预感的成功，不等于可重复预知灾难。","VI · San Francisco earthquake"],["萨拉托加的好心劝告","drag","接过经纪人的电报","另一段联太交易中，他原本依据强势买入，却接受经纪人的坚定劝告，放弃了自己的观察。那只手很友好，实际代价仍由他承担。","VI · Saratoga / Harding"],["提高股息，转回买入","lever","把交易杆从空头转向买入","股息消息与价格向上证明了原判断。他回补空头并买入，弥补失误。镜头随轨道转弯：独立不意味着不听意见，而是意见必须接受事实检查。","VI · dividend / cover / buy"]]),de(7,"德肯用订单检验消息","absorb",[["有人说内部人在买","dispatch","递交第一笔卖单","德肯没有马上相信“哈夫迈耶在买糖业”。他先卖出一万股。市场接得很容易，但还不足以说明承接力量有多大。","VII · Deacon / first ten thousand"],["第二笔，仍然被接住","dispatch","递交第二笔卖单","再卖一万股，股票仍在上升。他观察的不是消息传递者的表情，而是两万股被真实买盘吸收之后的价格反应。","VII · second ten thousand absorbed"],["回补，并持有多头","lever","从试探转向已被验证的方向","他回补空头，又持有一万股多头。这个案例呈现历史操作者的检验过程，并不是要求今天的读者模仿大额试单。","VII · covered / long ten thousand"]]),de(8,"风暴还没到，钱先耗尽","credit",[["资金越来越紧","dial","打开现金抽屉","拉里看到货币与信用条件恶化。抽屉的现金减少，市场却还在反弹。基本环境与行情的时间，不会为了他的观点自动对齐。","VIII · basic conditions / money"],["太早的空头","hold","握住头寸，看反弹经过","看对未来并不意味着可以无限等。每次过早操作，都消耗有限的本金。你握得更久，不能要求市场更快兑现。","VIII · premature selling"],["价格终于开始配合","scrub","等待反弹力量改变","反弹逐渐无力，卖出能够产生更明确的下行。他要让观察到的方向和可执行的起点接上，而不是一再用资金证明自己早就知道。","VIII · rallies grew feebler"]]),de(9,"1907年：借不到钱的华尔街","panic",[["游艇上的报纸","examine","打开朋友带来的报纸","佛罗里达海岸上，他已经没有股票仓位。朋友带来的强劲反弹消息，使他回到岸上重新观察。资金环境没有改善，这不是只凭标题下单。","IX · coast of Florida / newspaper"],["银行门前的恐慌","dial","沿着借款旋钮寻找现金","危机变成全市场对现金的需要。街上有股票，却没有足够承接它们的钱。纸面报价和可成交的收益，在这种时候离得更远。","IX · 1907 / money panic"],["卖空者也能成为买方","lever","停止进攻，转动回补杆","局势接近失控时，他收到不要继续扩大压力的请求，停止卖空并回补。阵营不是身份，新的市场状态决定新的行动。","IX · stop selling / cover"]]),de(10,"希望与恐惧坐反了位置","mirrors",[["推不动的棉花","hold","按住推杆，让价格尝试向上","他多次自己买入推动棉花，停下时价格就退回。镜头只追着他的力气走；周围没有独立买方。急着启动行情，使他付出约二十万美元。","X · cost two hundred thousand"],["小麦越过1.20","scrub","拖动时间，看它越过边界","他宁愿等小麦越过1.20的关键位置，而不是因为1.14便宜就下注。这里展示书中的具体例子，不把一个历史数字写成普遍公式。","X · wheat crosses $1.20"],["两面镜子交换光","scrub","移动光线，照见两种冲动","亏损时希望明天会好，盈利时却害怕利润消失。两面镜子让这些自然冲动显形：知道怎么做，和受压时真能做到，仍隔着一个人。","X · hope and fear"]]),de(11,"玉米退路与意外的皇冠","grain",[["想去钓鱼，玉米不肯放手","examine","把帆船靠近谷物码头","股票获利后，他想南下，却被一千万蒲式耳玉米空头留住。斯特拉顿的供给控制，使退出成为比理论判断更紧迫的问题。","XI · ten million bushels of corn"],["另一种谷物打开退路","dispatch","展开燕麦与玉米的关联图","书中他借燕麦下跌改变交易者对玉米的预期，随后回补。此处仅以历史因果图呈现，不作为现实市场操纵教程。","XI · oats / corn / strategic retreat"],["意外报道造出的棉花之王","flip","把报纸从皇冠下抽出来","后来的七月棉花交易中，意外报道创造了有利退出条件。公众却把它归因于精密布局。成功被戴上皇冠，偶然性藏在皇冠下面。","XI · July cotton / newspapers / unearned reputation"]]),de(12,"托马斯说服了另一双眼睛","cotton",[["一万名通信者的权威","examine","把专家报告移到眼前","托马斯学识丰富、极有说服力。拉里原本不看多棉花，渐渐却只能通过专家递来的同一页材料看市场。失去的首先不是钱，而是自己的判断。","XII · ten thousand correspondents / Thomasized"],["卖掉小麦，留下棉花","transfer","把资源从小麦移向棉花","原文里，小麦盈利，棉花亏损。他为了减轻负担，偏偏卖掉盈利的小麦，又继续买棉花。你把资源移过去，白色包裹开始遮住整间屋子。","XII · wheat profit / cotton loss"],["每天再多买一点","hold","按住购买，让棉花堆高","他继续买棉花，试图不让价格下跌，仓位约达十五万包。最刺痛的地方，是他知道这个做法违背自己长期的原则，却仍做下去。","XII · hundred and fifty thousand bales"]]),de(13,"一笔无法用钱还清的恩情","loan",[["二万五千美元的帮助","stamp","在借据上落下签名","威廉森提供二万五千美元，让他恢复一段成功交易。拉里想归还，对方却说不必急。他留下资金，也留下自己不愿违逆的人情义务。","XIII · Dan Williamson / twenty-five thousand"],["账户里出现另一双手","lever","尝试执行铁路股空头","经纪人干预切萨皮克与大西洋铁路等交易，用内部消息阻止操作。你拉动杆，另一道闸仍关着：关系的善意与交易自由发生冲突。","XIII · Chesapeake & Atlantic"],["背后的遗产","flip","翻开关系背后的账页","拉里后来把阻碍解释为威廉森保护家族遗产股票的安排。这是叙述者的回顾推断；明确发生的是，他的判断无法按自己的方式执行。","XIII · Marquand estate / narrator interpretation"]]),de(14,"六周，一百美元，保险柜","rebuild",[["先放下法律上的债务","stamp","展开债权人的解除文件","债务让他无法平静交易。破产与债权人的释放，使他重新得到精神空间。这不是无代价的逃脱；他仍把日后偿还视为自己的责任。","XIV · bankruptcy / releases"],["六周等到伯利恒钢铁接近一百","scrub","让六周经过，停在100","他原计划等伯利恒钢铁越过100，经过六周等待，最终在98至99先买五百股。当晚约收于114或115，又买五百股；次日到145，他才重新获得可开展较大交易的本金。","XIV · Bethlehem / crossed par / six weeks"],["把妻儿的钱锁在外面","dial","合上保障生活的柜门","1917年初还清旧债后，他安排年金与妻儿信托。门要防的不只是市场，也包括自己会挪用所有可得资金的冲动。","XIV · annuities / wife and child safe from me"]]),de(15,"咖啡合约，被另一张纸覆盖","coffee",[["战争、运输与咖啡","examine","打开港口的交付图","供给与航运支持他对咖啡的判断。但货物在海上，合约在纸上，现实交易还取决于交付与政策。一个方向并不能概括全部约束。","XV · coffee / ships"],["“保护早餐”的申诉","stamp","把政策文件盖在原合同上","对手向政府寻求干预，称他会提高公众的早餐成本。叙述者对此有强烈意见；这幅场景展示争议如何改写交易条件，不替任何一方补造完整事实。","XV · Price Fixing Committee"],["限制价格与清算期限","drag","抽出已不适用的旧合同","最高价格和结清期限改变了原来的交易环境。预想的巨额收益未兑现。愤怒无法使旧合同恢复，接下来只能面对生效的限制。","XV · maximum price / time limit"]]),de(16,"听筒里的秘密，谁在出售","phones",[["消息令人感到重要","hold","拿起听筒，听它说完","人们不只想得到消息，也想传消息：贪欲许诺轻松盈利，虚荣让人享受掌握秘密。话语很热情，来源却未必因此可靠。","XVI · greed / vanity"],["婆罗洲锡的消息链","dispatch","沿电线传递同一份纸","一份说法经过朋友、经纪行和客户，看起来像很多独立意见，可能只来自同一个源头。消息领取者转身成为销售网络。","XVI · Borneo Tin / endless-chain advertising"],["听筒背后的卖方","flip","翻到消息的利益一面","主动提供机会的人，也许需要新的买盘来出售自己持有的证券。镜头转到电话另一端：你听见的秘密，也可能是别人等待你接手的存货。","XVI · tipster-promoter"]]),de(17,"朋友记住黑猫，他记住事实","breakfast",[["早餐桌上的黑猫","examine","把猫的影子移开","朋友把及时卖出讲成黑猫的神谕。拉里认为长期积累的观察可能在意识之外继续工作。突然的决定可以有来由，不代表每次冲动都可靠。","XVII · black cat / Washington"],["钢铁继续，铜股停住","scrub","并排观察钢铁与铜股","原文中，钢铁表现支持继续增加，犹他铜却没有。他没有因为同属繁荣环境，就把“还没涨”自动理解为会补涨。","XVII · Utah Copper / U.S. Steel"],["不是报复棉花","lever","把旧亏损的标签收起来","棉花后来出现新的卖出条件，他重新行动。不因曾亏损而怨恨市场，也不因弥补损失就发明神秘能力。下一次判断仍由新事实承担。","XVII · experience and memory"]]),de(18,"153回补，156买入","reverse",[["钓鱼时传来的价格","examine","把鱼线换成报价线","热带贸易在总体弱市中表现不同。他离开钓鱼处重新观察，不让宏观结论替这只股票拒绝眼前的事实。","XVIII · fishing camp / Tropical Trading"],["承接变强，原剧本失效","lever","将杆拉到153：回补","实际买方支撑持续出现，他在153回补一万股空头。表面的总体看空，与眼前这笔局部交易，已经不能被当作一件事。","XVIII · 153 / covered 10,000"],["156之后，仍会犯错","lever","将杆推到156：买入","在156他转为做多，价格后来超过200。但他持有过久，因为以为内部人应该像他一样行动。改变立场以后，仍会替别人写剧本。","XVIII · 156 / above 200 / paper profits"]]),de(19,"被锁起来的不是股票，是钱","money",[["旧华尔街的挤压","examine","展开旧街区的档案","本章转向早年操作者的轶事。有些人曾挤压别人，又被别人反过来挤压。钱、胆量与名声都不能提供永久控制。","XIX · Drew / Vanderbilt"],["认证支票留在手里","dial","把支票锁进铁柜","转述旧事中，有人借入资金取得认证支票，减少别人能借到的钱。价格之外，依赖借款的人失去继续等待的条件。","XIX · certified check / lock up money"],["街上的人不能等了","scrub","让两个人的时钟分开","镜头追随两种时间：一个有资源等待，一个被融资期限催促。旧市场故事需要放回其时代与转述来源，不能当作今日通用剧本。","XIX · recollection / borrowed money"]]),de(20,"幕布下的证券分销","theatre",[["拉高只是第一幕","hold","拉起幕布，观察价格上升","原章把操纵放在历史证券分销中解释。高报价会吸引注意，却不能凭空造出愿意接手全部证券的人。台上价格与台下需求不是同一件事。","XX · Keene / distributing"],["回落时，公众觉得便宜","transfer","让证书从后台走向观众","基恩等案例里，主要出售发生在上涨之后的回落。公众等待反弹，持仓从原有集团转移到新买家。这里是历史供需说明，不是操作教程。","XX · selling on the way down"],["当推不动时退场","lever","松开幕后推动的手","即使是操作者，也不能取消市场反馈。买入不再产生预期效果时，继续投入只会扩大负担；安排市场的人仍会被市场否定。","XX · stop buying / quit"]]),de(21,"钢铁与石油：两种结局","industry",[["帝国钢铁的安静报价","scrub","沿钢铁厂的灯光走近","企业情况不错，股票却缺少活跃兴趣。拉里描述价格上升约三十点，累计买入约七千股；其他参与者的需求也是过程的一部分。","XXI · Imperial Steel / 30 points / seven thousand"],["石油产品没有照做","flip","把舞台转向石油储罐","石油产品公司的供给和市场状态不同。他原本拒绝，后来受人情影响接下。曾成功的动作，不能把钢铁的条件搬到另一个对象。","XXI · Petroleum Products / Prentiss"],["上涨中的纸面财富","scrub","让繁荣走到公众不愿卖的时刻","希望模糊顶点。起初觉得每个新高都太贵，后来却相信再无边界。公众先在纸上赚到的钱，可能最终仍停在纸上。","XXI · public / on paper"]]),de(22,"裁缝的股票","dressmaker",[["朋友请求的一次帮忙","stamp","展开联合炉具的委托","巴恩斯把处理股票说成人情请求。拉里有顾虑却同意。公众对新发行已接近饱和，委托人的希望无法重新制造繁荣。","XXII · Barnes / Consolidated Stove"],["承诺的资金慢慢到达","scrub","等待分批到来的支票","资金分期到达，参与者有不同利益，股票又遇上走弱的市场。内幕集团不总会按统一剧本行动，报价不替人情负责。","XXII · six millions / installments"],["裁缝一针一线等他拉高","trace","沿布料走一针","妻子的裁缝因“利文斯顿会拉高它”的消息买入。私人任务被转述成公众的收益承诺。镜头离开华尔街，落到一个普通人的工作桌。","XXII · Mrs. Livingston / dressmaker"]]),de(23,"无名的内幕人与有名的替罪羊","newspaper",[["没有名字的权威","flip","揭开报纸的署名栏","匿名内部人称盈利出色，报纸把热烈叙述送到公众眼前。说法像具有权威，却难以追问来源与责任。","XXIII · leading insider / unnamed"],["玻璃后面正在卖","scrub","擦开报道后面的玻璃","前景恶化后，内部人可以安静出售，公开解释却继续乐观。文字让公众留下，行动让另一批人离开。两条方向并不相同。","XXIII · silently sell"],["下跌被说成空头袭击","flip","把解释与实际出售并排","间隔石油的集团把价格推到50，后来继续卖出，却把下跌归罪于利文斯顿。高价买入的公众等别人受惩罚，忽略自己的处境。","XXIII · Intervale Oil / 50 / 12"]]),de(24,"最后一封信，没有买卖指令","letter",[["今天的佣金与明天的企业","examine","将两页账放在不同时间","经纪人收入来自眼前交易，市场却面向未来条件。激励未必意味着故意欺骗，却会改变建议被包装的方式。","XXIV · commissions now / business outlook"],["“好处”造出宣传者","transfer","沿人际关系递出证书","内部人赠出有利股份或机会，受益者再向周围推荐。看起来独立的热心朋友，可能组成同一条证券销售网络。","XXIV · gifts / stock-selling promoters"],["把信留在窗边","trace","沿信纸写下一道线","书没有在此讲完人物后半生，也没有许诺掌握原则后永不失败。窗外行情还在发生，你看到的，是观察、行动、自我与制度不断纠缠的一生。","XXIV · final chapter / public protection"]])];function Qc(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Ie;let c=0;for(let h=0;h<n.length;++h){const u=n[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let d=0;d<n.length;++d){const p=n[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=tc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][d]);const g=tc(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function tc(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new ri(a,e,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){const x=h.getComponent(d,g);o.setComponent(d+u,g,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function br(){return typeof navigator<"u"&&navigator.maxTouchPoints>0||matchMedia("(any-pointer: coarse)").matches}function Ps(n,t,e=br(),i=typeof devicePixelRatio=="number"?devicePixelRatio:1){return Math.min(i,e?1:1.5,Math.sqrt((e?11e5:3e6)/Math.max(1,n*t)))}function th(n,t=new Set){n.updateWorldMatrix(!0,!0);const e=n.matrixWorld.clone().invert(),i=new Map;let s=0;n.traverse(o=>{if(!o.isMesh||Array.isArray(o.material)||o.material.transparent)return;s++;let l=o;for(;l;){if(t.has(l)||l.userData.keepDynamic||l.userData.filmTarget)return;if(l===n)break;l=l.parent}const c=o.material.uuid+"|"+o.castShadow+"|"+o.receiveShadow;i.has(c)||i.set(c,[]),i.get(c).push(o)});let r=0,a=0;for(const o of i.values()){if(o.length<2)continue;const l=o.map(u=>u.geometry.clone().applyMatrix4(new oe().multiplyMatrices(e,u.matrixWorld))),c=Qc(l,!1);if(l.forEach(u=>u.dispose()),!c)continue;const h=new ee(c,o[0].material);h.castShadow=o[0].castShadow,h.receiveShadow=o[0].receiveShadow,n.add(h);for(const u of o)u.removeFromParent(),u.geometry.dispose(),r++;a++}return{before:s,after:s-r+a,removed:r,batches:a}}const ec={1:["我从早上十点抄到下午三点，周六也抄两个小时。我把上涨和下跌之前的样子记住，再记进小册子，日后检查；起初我在意的不是企业名称，而是数字怎样改变。","同事说，五美元就能在对赌行做五股伯灵顿。我没有立刻跟着“稳赚”的消息走，先翻自己的记录。那一笔赚到三美元十二美分，预测才第一次变成真实的钱。","环球店把保证金提高到三点，又逐步把额外价差加到一点半。即使价格向我这边走，成交条件也可能让我仍在赔钱。七张粉色票据合计三千五百股糖业空头；我面对的不只是股价，还有一个不愿长期付钱给我的店家。"],2:["二十岁时我曾积累一万美元，但来到纽约时，只剩两千五百。让我亏钱的往往不是完全看不懂行情，而是明明没有适合自己的机会，仍忍不住继续参与。","对赌行的自动平仓曾把损失限制在交进去的保证金里。真实经纪行不会替我把每笔交易结算在眼前黑板的价格上。我必须重新认识执行，也重新承担退出的责任。","我又找过不认识我的店，想先在那里赚回本金。可只要老板看出我能持续兑现盈利，原来的欢迎就会消失。一扇锁着的柜门，最终也把我推向了必须重新学习的市场。"],4:["低佣金、直接连线和诱人的消息，看上去都很像正规业务。我先小额试探，弄清他们到底如何处理订单，也确认赚到钱以后能不能拿走。","他们把同一股票的买入电报与卖出电报分送给不同客户，再拿一小笔真实成交的回报证明自己“正规”。有人还签字授权他们代管资金；纸上的授权与纸上的盈利，一起遮住了实际交易。","这一次我没有把所有损失叫作倒霉。我逐项想：哪些是我没有优势时乱做，哪些是纸带迟到，哪些问题我还说不清。重新筹钱，只恢复了入场的资格，没有替我完成教育。"],5:["帕特里奇很少夸耀，也不急着索要消息。别人送来提示，他礼貌道谢；提示错了，他也不抱怨。办公室都觉得他有钱，却很少看见他忙着给经纪行贡献佣金。","哈伍德建议他卖出五百股克莱马克斯汽车，先拿七点利润，回落后再买。老人担心失去“位置”；哈伍德误听成失去工作。笑话后面，藏着老人经历过繁荣与恐慌的记忆。","我也曾保守地拿走四点利润，等待一次根本没来的回落，然后看股票再涨十点。该赚两万美元的行情，最后只赚两千。那以后我才更明白：判断正确，还得能留在正确的位置上。"],6:["地震消息来到后，市场只先跌了几个点，随后又回升。我已有五千股空头，却没有因此立即赚钱。灾难的影响，要等更多损失和资金需要显现，才进入价格。","度假的办公室仍像一块招揽业务的广告牌。每个人都有消息，股票、赛马、所谓内部意见混在一起。经理熟悉我，也确实出于好意；我却把他的坚定语气放到了自己的观察之上。","公司提高股息，向上的行情证明原先判断更接近事实。我先承认错误的空头，再恢复买入。好意不会替我支付损失，快速纠错才真正改变了这笔交易。"],7:["告诉德肯消息的人想证明，哈夫迈耶与朋友正在买糖业。德肯没有争辩消息人的诚意，先送出一万股卖单，观察市场能否承接。","第二笔一万股也被吸收，而且市场仍上涨。德肯解释，即使亲耳听到内部人在说买入，他也要看真实股票怎样被接走。是谁买，不如确实有人愿意买来得直接。","试探之后，他回补两万股空头，再持有一万股多头。我从这些反应中学习确认方向。以后扩大自己的仓位，前一笔应该先得到市场支持，而不是因为已经亏损就逼下一笔来救它。"],8:["我快二十七岁，已经交易十二年，却第一次像拿着望远镜去做危机交易：看见风暴云，不等于风暴已经到了可以兑现的距离。","1906年一轮又一轮反弹削弱保证金。拆借利率已经发出警告，报纸上的大金融家却仍说着乐观的话。我开始怀疑自己看见的东西，也付出了太早行动的代价。","我需要的不是更响亮地宣布自己看空，而是等反弹越来越无力。资金有限，远处的正确观点，必须找到眼前能承受的起点。"],9:["报纸把反弹写得很热烈，但我知道资金条件没有相应改善。我离开船，去看真实市场；安纳康达等股票的反应，而不是游艇上的一个标题，决定接下来怎样扩大交易。","交易所主席为缺钱的会员寻求帮助。摩根答应会有钱，后来阿特伯里宣布获授权贷出一千万美元。惊慌的市场要先得到现金，证券才能重新有承接。","我的空头在恐慌中获利，但扩大下跌压力，已与之前观察弱势不同。我接受不要再进攻的请求，停止卖空并买入回补。一个靠卖出赚钱的人，也可以成为此刻需要的买方。"],10:["我买五万包棉花，价格便上涨；我停买，它也停涨，又退回原地。我重复了四五次，付出约二十万美元。等我恼怒地退出，真正的上涨后来才开始。","小麦几个月在一美元一角至一美元二角之间徘徊。有人问，为什么不在一点一四买便宜的？因为我还不知道它真要上涨。越过一点二零，是我等待的反馈，不能被一个便宜的价格替代。","知道自己正在犯错，也可能继续犯。亏损时想让明天来救，盈利时怕今天的利润消失。希望和恐惧都很自然，却常常把行动推到恰好相反的方向。"],11:["我原有一千万蒲式耳小麦空头和同样数量的玉米空头。小麦继续跌，利润很好；斯特拉顿却控制玉米供给，把玉米推高。股票赚钱以后，我仍不能轻松开船离开。","谷物不只剩我和一个报价。关联商品、他人的持仓和供给，都在改变退路。我借燕麦的变化影响玉米市场的预期，才寻求到回补的条件。","后来大家都在卖七月棉花，我却研究空头还剩多少时间回补。大仓位退出本来很难，意外的报道与误解却带来了买盘。外界给我戴上皇冠，我知道那份名声并不全是自己安排出来的。"],12:["托马斯有庞大的通信网络，也极善于说明产量与需求。他把自己的资料说得独有可靠，把我能取得的材料说得不够可靠。我的眼睛慢慢让位给了他。","小麦替我挣钱，棉花却不按预期表现。我想减轻负担，偏偏卖掉小麦，把已经有问题的棉花留下。这不是不知道原则，而是知道以后，仍让另一个信念压过它。","我买到约十五万包，试图自己撑住棉花。我当时身体也不好，这不是借口。后来急着让市场替我支付具体开支、翻回损失，等待条件的能力也跟着消失了。"],13:["威廉森给我二万五千美元。三周里，我赚到十一万二千。我来归还，他却叫我再等等，说账户还太小。我本应坚持清偿，却把感激留下来，和资金绑在了一起。","我想按判断卖出铁路股，却受到干预。被帮助的人不愿显得忘恩负义，每次让步都很温和；但越来越多的机会，已经不能由我自己来决定。","后来我推测，他需要照顾马昆德遗产中的股票，不愿让我成为一个资金越来越大的空头。这是我的事后解释；当时明确发生的，是我被牵制，判断无法自由执行。"],14:["离开以后，我仍想从缺少机会的市场里强求一份本金。靠别人信任继续取得信用，债务最后超过一百万。债权人和停市一同挤压我；先卸下法律负担，才能重新听见自己的判断。","六周里我看伯利恒上涨，原计划等它越过一百。到了九十八，纸带的表现让我提前行动：五百股成交在九十八至九十九。当晚约收在一百一十四或一百一十五，我又买五百股；次日到一百四十五，终于重新有了本金。","后来有战争行情，也有卢西塔尼亚号沉没这样的意外。1917年初我偿还旧债，再安排年金和妻儿信托。这些钱不仅要防市场，还要防一个会把所有可得资金重新拿去交易的我。"],15:["我对咖啡的判断连着战争、供给与船运。卖方出售了咖啡，却找不到足够船只运来；我认为利润近在眼前。纸面合同与货物真正到港，原来就不是同一件事。","这些卖方向委员会提出爱国的申诉，说美国人的早餐会受投机者挤压。我对他们的说法很愤怒，但也承认委员会想遏制牟取暴利。我的看法，并不等于我掌握了各方全部想法。","委员会限制原咖啡最高价格，又定结清旧合同的期限。我只能卖掉合约，原以为确定会来的几百万利润没有实现。正常的不确定性、意外的外部事件与别人的行为，会在不同地方改变结果。"],16:["我每天收到成百上千条提示。人不仅要得到它，也要把它告诉别人。一次提示错了，他们常说下次会好；消息是否足以支持判断，反而不是最急的事。","婆罗洲锡在狂热中发行，集团想直接在公开市场推出。可起初的定价没有给交易者足够吸引力。聪明的融资安排，也要面对真实买盘，并不因有一套消息网络就自动成功。","提示的接受者会继续传提示，宣传于是像一条不断扩大的链。我听见很多熟人的声音，却要追问是不是同一批证券，正在寻找我和我的朋友作为买方。"],17:["我在华盛顿听到的政策与资金材料，可能在不主动推演时继续留在脑子里。朋友记得黑猫，我记得前面的观察。突然的决定，不一定凭空而来，也不能被叫成永远可靠的神谕。","我在约一百一十四买五千股犹他铜，随后停止，因为它没有按预期表现。美国钢铁却支持继续买入：首日两万股，后来累计七万二千股。总体繁荣，没有让两只股票成为同一个对象。","后来棉花给出新的卖出条件，我重新行动。以前的亏损没有让棉花欠我钱；这次获利，也没有证明旧的过早交易其实是正确的。我面对的是下一批事实。"],18:["热带贸易内部集团曾用强势价格和看多宣传应对空头。我也利用过相关的赤道商业股票来改变市场对这组证券的看法；供给与持仓，使它不是一条孤立的价格线。","后来我离开钓鱼营地，反复卖出热带贸易，累计一万股空头。可支持真正来到时，价格不再按卖出下行。我在一百五十三回补，不让总体看空替这一只股票否认新证据。","一百五十六转为买入，后来超过二百。外界却传说我被挤掉数百万。我实际在上涨中做多，只是又持有太久：我以为内部人会像我一样行动。纠正一个剧本后，我仍会替别人写另一个剧本。"],19:["这些是更早华尔街的旧事：有人积累股票不想推高买价，有人出售股票希望公众接手，有人控制供给逼空。名声和胆量之外，还有想证明自己最强的虚荣。","老人回忆，小时候在街上看人追着一个锁住资金的人，喊“夏洛克，钱的价格是多少？”他连一些名字都已忘了，却记得借款被认证支票占住，依赖现金的人受到挤压。","同样的股票，融资条件不同，能等待的时间也不同。一个人可以守着柜子，另一个人却必须借钱活过今天。报价板不会把这两种处境同时写出来。"],20:["基恩的工作不只是把一只股票报得高些。证券最后由一个人持有，还是一千个人持有，关系到往后市场的承接。高价若引不来真实购买，就仍不能把全部证券换成钱。","基恩曾在牛市中处理二十二万股联合铜业。外界看到上涨以后，还会等回落，觉得终于便宜了；集团的出售却常在大涨之后、价格往下时完成。公众的希望与原持有人的退出，可能发生在同一笔成交里。","操作并非一张永远照做的图纸。某天买回，某天净卖，某天让市场独自运行；策略与每天的动作不同。若购买不能再得到应有反应，继续投入就只是在替自己的安排支付代价。"],21:["帝国钢铁最初约三成股份已进入公众手中。企业盈利不错，却缺少热烈交易；好消息没有引来显著涨价，价格也没有明显下跌。经营的真实好转，还没有自动变成投机兴趣。","后来股票上升约三十点，我累计购买约七千股，其他人真实的需求也是结果的一部分。石油产品却没有同样的条件；普伦蒂斯请我接替，我本有疑虑，最后仍受人情影响。","公众最初觉得每次新高都贵，后来又相信上涨没有尽头。纸面财富越来越大，兑现的决定却越来越远。两个公司的不同结果，不能被“我以前做成过”抹平。"],22:["吉姆·巴恩斯把联合炉具委托说成朋友间的帮忙。我担心市场与供给，对方却仍期待繁荣时那样的结果。新证券太多，公众的胃口已经改变。","集团说要拿出六百万现金，却分四五次慢慢送来。后来我收到约四百万，剩余又承诺过几天到。资金、内部人的出售与总体下跌彼此纠缠，名气不能使它们一致服从。","妻子的裁缝说，自己买了联合炉具，因为听说我会把它做上去。我不认识这个购买者的交易，也没有向她保证任何利润；一个内部任务，就这样变成了普通人相信的承诺。"],23:["报纸引用“重要内部人”或“财务委员会成员”，听起来有身份，却没有名字。买家能记住盈利的故事，却很难回头问，谁在这个时刻要求公众继续买。","情况好时，内部人先安静买；情况坏时，又可以先安静卖。公开解释不一定跟着行动改变。市场下跌，被说成有人袭击，好像基本处境因此仍可放心。","间隔石油集团把价格做到五十，随后出售，引来下跌。他们把原因说成我的袭击，还说要对付我，却继续卖；到约十二时，平均卖价仍可能高于成本。高价买的人，只剩等待别人受到惩罚的故事。"],24:["经纪人的佣金来自今天的买卖，股票却在判断未来的经营。现在的盈利很好，还要问未来能否继续。客户爱听肯定的话，但肯定的语气没有替市场省掉时间。","内部人想出售证券，可以给经纪人或朋友好处。受益者乐于告诉身边的人，传播看上去像独立朋友之间的热心建议，实际却帮助同一批股票找到下一双手。","投机者会犯错，意外会发生，人的贪欲与虚荣也不会被一句警告消灭。但这不等于误导就该被接受。我最终关心的不只是个人更谨慎，还包括让公众看清供给、利益与信息的制度。"]},_e=(n,t,e)=>({spaces:n.split("/"),objects:t.split("/"),cues:e.replaceAll(" / "," · ").split("/")}),O0={1:_e("board/counter/counter","chalk/coin/tickets","十四岁 · 抄报价/五美元 → 三美元十二美分/七张票据 · 每张五百股"),2:_e("station/counter/study","suitcase/wire/safe","二十一岁 · 两千五百美元/报价 → 指令 → 成交 → 回报/赢得太多，柜门便关上"),4:_e("wire/wire/station","telegram/telegram/suitcase","一批电报：买入/另一批电报：卖出/本金重来，方法尚未成熟"),5:_e("study/study/board","chair/clock/clock","“这是牛市。”/持仓位置，不是工作/兑现四点，错过随后十点"),6:_e("harbor/wire/rail","newspaper/telegram/lever","灾难到来，价格没有立刻服从/一个可信的人，也会判断错误/事实向上 · 回补，再买入"),7:_e("counter/counter/board","order/order/lever","第一笔：一万股/第二笔：一万股，仍被吸收/回补空头 · 持有一万股多头"),8:_e("study/board/board","drawer/weight/clock","钱越来越紧/方向正确 ≠ 起点合适/等市场开始配合"),9:_e("harbor/street/counter","newspaper/drawer/lever","船上没有仓位/市场有证券，却缺少现金/局势改变 · 停止卖空，回补"),10:_e("cotton/grain/study","lever/gate/mirror","自己停买，价格就退回/1.14 的便宜 / 1.20 的确认/亏损时希望，盈利时恐惧"),11:_e("harbor/grain/press","wheel/grain/newspaper","一千万蒲式耳玉米空头/退路藏在关联商品的反应里/意外买盘 → “棉花之王”"),12:_e("study/grain/cotton","report/transfer/cotton","一万名通信者 / 专家的眼睛/小麦盈利，棉花亏损/约十五万包 · 越买越沉"),13:_e("study/rail/study","contract/lever/contract","二万五千美元的帮助/我拉动指令，另一道闸没有开/恩情与利益，写在同一页上"),14:_e("study/industry/study","contract/clock/safe","债务与停市，两把锁/六周等待 · 98至99开始买入/妻儿的钱，也要防住我自己"),15:_e("harbor/harbor/harbor","coffee/contract/contract","货物在海上，合约在纸上/早餐成本，成了新的理由/最高价格 / 清算期限"),16:_e("wire/wire/wire","phone/phone/phone","贪欲想得到秘密，虚荣想传递秘密/朋友 → 经纪行 → 客户/很多声音，未必有很多源头"),17:_e("study/industry/cotton","cat/weight/lever","朋友看见黑猫，我记得条件/钢铁七万二千股 / 铜股五千股/下一笔交易，不替上一笔报仇"),18:_e("harbor/counter/counter","wheel/lever/lever","离开鱼竿，回到报价线/153 · 回补一万股空头/156 · 转为买入 / 后来超过200"),19:_e("street/study/street","contract/safe/clock","有人制造挤压，也会被反过来挤压/认证支票锁住的是借款资源/同一条街，两种等待能力"),20:_e("theatre/theatre/theatre","curtain/transfer/lever","高报价不等于全部卖得出去/价格回落，公众觉得便宜/推不动时，安排也得停止"),21:_e("industry/industry/theatre","lever/oil/transfer","帝国钢铁 · 三十点 / 约七千股/石油产品，条件没有照搬/纸面财富，还没有变成现金"),22:_e("study/counter/tailor","contract/drawer/needle","朋友请求，却要由市场兑现/承诺六百万，资金分批到达/名人的名字，被缝进普通人的希望"),23:_e("press/press/press","newspaper/glass/newspaper","匿名的权威/乐观的文字 / 安静的卖出/50 → 12 / 谁替下跌负责"),24:_e("study/theatre/harbor","contract/transfer/letter","今天的佣金 / 未来的经营/接受好处的人，成为热心的宣传者/行情继续，这封信没有买卖指令")},B0={1:[[0],[1],[2,3]],2:[[0],[1],[2,3]],4:[[0,1],[2],[3]],5:[[0,1],[2],[3]],6:[[0],[1,2],[3]],7:[[0],[1],[2,3]],8:[[0],[1],[2,3]],9:[[0],[1,2],[3]],10:[[0,1],[2],[3]],11:[[0],[1],[2,3]],12:[[0,1],[2],[3]],13:[[0,1],[2],[3]],14:[[0,1],[2],[3]],15:[[0,1],[2],[3]],16:[[0],[1,2],[3]],17:[[0,1],[2],[3]],18:[[0,1],[2],[3]],19:[[0,1],[2],[3]],20:[[0,1],[2],[3]],21:[[0,1],[2],[3]],22:[[0,1],[2],[3]],23:[[0,1],[2],[3]],24:[[0],[1,2],[3]]};function ds(n){return n.split(new RegExp("(?<=[。！？])")).filter(t=>!/(读者|记忆宫殿|现代法律|今天的法律|现实操纵|行动教程|普遍公式|普遍规则|今日通用剧本|统一数值|法律方案)/.test(t)).join("").replace(/原章|本章|这一章|书中|原文中|原书/g,"这段往事").replace(/叙述者的回顾与推断/g,"我的事后推断").replace(/叙述者/g,"我").replace(/拉里/g,"我").replace(new RegExp("(?<!其|别|对)他(?!们|人)","g"),"我").replace(/故事没有/g,"我没有").replace(/全书最后/g,"回忆走到最后")}function k0(n,t=68){const e=n.match(/[^。！？；]+[。！？；]?/g)||[n],i=[];for(const s of e){if(s.length<=t){i.push(s);continue}let r="";for(const a of s.match(/[^，：]+[，：]?/g)||[s])r.length+a.length>t&&r&&(i.push(r),r=""),r+=a;r&&i.push(r)}return i.filter(Boolean)}function z0(n){const t=Us.find(s=>s.n===n),e=Ns.find(s=>s.n===n),i=O0[n];return{...i,n,title:e.title,chapter:t,episode:e,phases:e.steps.map((s,r)=>({title:s.title,mode:s.mode,action:s.action,space:i.spaces[r],object:i.objects[r],cue:i.cues[r],beats:k0(ds(s.text)+" "+ec[n][r]+" "+B0[n][r].map(a=>ds(t.story[a])).join(" "))})),notes:[...ec[n],...t.story.map(ds),...e.steps.map(s=>ds(s.text)),ds(t.principle)]}}function ho(n,t=!1){const e=[],i=t?39:17,s=t?12:10;for(const r of n){const a=[];if(t){let o="";for(const l of r.split(/\s+/))o.length+l.length+1>i&&o&&(a.push(o),o=""),o+=(o?" ":"")+l;o&&a.push(o)}else for(let o=0;o<r.length;o+=i)a.push(r.slice(o,o+i));for(let o=0;o<a.length;o+=s)e.push(a.slice(o,o+s))}return e}const vr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class is{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const H0=new Fo(-1,1,1,-1,0,1);class V0 extends Ie{constructor(){super(),this.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pe([0,2,0,0,2,0],2))}}const G0=new V0;class Bo{constructor(t){this._mesh=new ee(G0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,H0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class eh extends is{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Rs.clone(t.uniforms),this.material=new ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Bo(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ic extends is{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class W0 extends is{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ih{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new bt);this._width=i.width,this._height=i.height,e=new fi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Li}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new eh(vr),this.copyPass.material.blending=Di,this.clock=new qc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ic!==void 0&&(a instanceof ic?i=!0:a instanceof W0&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class nh extends is{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ft}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const X0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class mn extends is{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new bt(t.x,t.y):new bt(256,256),this.clearColor=new Ft(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new fi(r,a,{type:Li}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new fi(r,a,{type:Li});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new fi(r,a,{type:Li});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=X0;this.highPassUniforms=Rs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ze({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new bt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Rs.clone(vr.uniforms),this.blendMaterial=new ze({uniforms:this.copyUniforms,vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,blending:va,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ft,this._oldClearAlpha=1,this._basic=new jn,this._fsQuad=new Bo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new bt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=mn.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=mn.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new ze({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new bt(.5,.5)},direction:{value:new bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}mn.BlurDirectionX=new bt(1,0);mn.BlurDirectionY=new bt(0,1);const ur={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class sh extends is{constructor(){super(),this.uniforms=Rs.clone(ur.uniforms),this.material=new Gu({name:ur.name,uniforms:this.uniforms,vertexShader:ur.vertexShader,fragmentShader:ur.fragmentShader}),this._fsQuad=new Bo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===Jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===vc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Bt=n=>document.querySelector(n),Ze=Qn.clamp,ae=Qn.lerp,Se=n=>(n=Ze(n,0,1),n*n*(3-2*n)),fs={green:1588017,brass:12489297,paper:14996653},q0={uniforms:{tDiffuse:{value:null},time:{value:0},fade:{value:1}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float time;uniform float fade;varying vec2 vUv;void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;vec2 p=vUv*2.-1.;float vignette=1.-.28*dot(p,p);float noise=fract(sin(dot(vUv+time*.0001,vec2(12.9898,78.233)))*43758.5453)-.5;c*=vignette;c+=noise*.012;c=mix(c,vec3(dot(c,vec3(.299,.587,.114))),.07);gl_FragColor=vec4(c*fade,1.);}"},mi={entrance:38,dispatch:24,falling:32,sellRevelation:18,buyDispatch:18,recovery:26,ending:38},nc={entrance:["纽约。五月九日。昨天收盘后，整个世界都知道，一场金融巨头之间的争夺已经开始。","哈里曼与摩根的阵营，为北太平洋铁路的控制权迎面相撞。双方抢购，把这只股票逼进了轧空。","我却已把手中的一千股北太平洋普通股卖掉：约一百一十出手，赚了三十点。账户上留下近五万美元。","几个月前，我在这间经纪行里输光过一次。如今，这是我积累过的最大一笔钱。没有股票，只有现金。","我早就觉得许多股票涨到了买盘枯竭的地步。这一次，总该轮到下跌了：先卖空，再捡便宜货，反弹时两头获利。"],dispatch:["我送出了一批市价卖单。我要抓住市场的下跌，不想把自己锁在一个指定价格上。","开盘报价让我吃了一惊。跌势比想象中还猛烈；成交量极大，价格波动的幅度前所未见。","经纪人一直在忙。他们有能力，也尽责。问题是，这个办公室、场内经纪人和行情纸带，都被汹涌的交易挤在后面。"],falling:["我眼睛盯着的，仍是行情机印出来的数字。交易所里的价格，却已经先走了一大段。","假如纸带上报的是一百，我据此发出卖单；等订单在场内执行，成交却已经到了八十。","多跌了二十点。若从昨晚收盘算起，跌幅已经达到三十、四十点。回报还在路上，纸带也没有赶上。","我猜中了急跌，却没有卖在自己看见的位置。此刻卖出的这些股票，恰好已是我本来打算买入的便宜货。"],sellRevelation:["一百是我作决定时看到的报价。八十是我的卖单真正成交的位置。两个数字，属于两个不同的时刻。","市场总不至于一路跌穿地面。我立刻改主意：回补空头，再转为买入。反弹还可以把局面救回来。"],buyDispatch:["回补，再买入。我送出新的市价指令，想抓住眼前的低位。","可指令仍要穿过同一条拥堵的路：办公室、交易所、场内经纪人。它不会因为我改变方向，就突然赶上市场。"],recovery:["市场确实反弹了。一切大方向，都像我事先料想的一样。","经纪人为我买了股票。成交价却由场内经纪人接到订单时的市场决定，而不是由我改主意时看到的报价决定。","这一次，买入价平均比我的预计高了十五点。卖单迟到，买单也迟到；我追赶的始终是已经过去的行情。"],ending:["二十点，再加十五点。一天损失三十五点，超过了我能承受的限度。近五万美元本金，全没有了。","我一直把行情纸带当作最好的朋友。过去，我根据它告诉我的数字下注，也确实靠它挣过钱。","这一次，印出来的价格和实际成交的价格相差太远。害我的仍是以前那个问题，只是被这场恐慌放大到了极点。","后来回想，单会读纸带显然不够。我当时却连自己的问题都说不清，更没有看见解决的方法。","我甚至继续进进出出，仍不顾执行的差距。偶尔还能挣钱，又让我迟迟没能理解：我要判断的是市场的大变化，而不只是接下来的几个报价。"]},Y0={entrance:[["五月八日 · 收盘以后","争夺已公开"],["北太平洋 · 控制权之争","哈里曼 ↔ 摩根"],["1,000 股 → 兑现","约 110 出手 / 获利 30 点"],["现金近 $50,000","股票：零"],["急跌 → 便宜货 → 反弹","我以为能抓住两头"]],dispatch:[["判断 → 下单 → 场内执行","三个动作，三个时刻"],["市价指令","成交按抵达市场时的价格"],["成交量巨大","纸带与回报一起落后"]],falling:[["眼前的报价 ≠ 此刻的成交","我在读过去"],["假如纸带：100","我的卖出：80"],["比判断位置又低 20 点","距昨夜收盘已跌 30—40 点"],["我卖出的低位","正是原先计划买入的位置"]],sellRevelation:[["纸带 100 / 成交 80","两个不同的时刻"],["卖空 → 回补 → 买入","我立刻改变方向"]],buyDispatch:[["方向变了","传递订单的路径没有变"],["办公室 → 场内经纪人","低位不会等我的指令"]],recovery:[["急跌以后，确实反弹","方向判断成立"],["预计买价 → 实际买价","平均又高 15 点"],["卖单迟到 / 买单迟到","同一条拥堵的路"]],ending:[["20 + 15 = 35 点","一天的损失"],["近 $50,000 → 全部失去","看对方向，仍被击倒"],["纸带上的价格 / 真正成交的价格","我一直混淆了两个时间"],["读懂纸带，还不够","我当时没有看清原因"],["几个报价 / 市场的大变化","我还要几年才能分清"]]},sc=[["狂热中的市场","那阵子，买进常赚钱，卖空常赔钱。","我觉得上涨总有尽头，但每次看空，","都得赶快认赔退出，免得亏得更多。","北太平洋却仍像要继续上涨。","它与其他股票不同，我没有做空它。"],["五月八日 · 收盘以后","两大阵营争夺北太平洋的控制权。","抢购引发轧空；交易办公室议论纷纷。","我没有做空北太平洋。纸带告诉我，","它与其他股票不同，还可能继续上涨。"],["巨头们的抢购","后来我听说，摩根一方为保住控制权，","曾让基恩买五万股，又增至十五万股。","基恩派埃迪·诺顿进场，买了十万股，","随后又有约五万股的指令。","抢购相继而来，著名的轧空就此发生。"],["我手中的一千股","不顾办公室里众人的劝告，我持有它。","约一百一十时，我兑现三十点利润。","账户积累到近五万美元。","几个月前，我还在这里输光过一次。","这一次，我相信自己已经找回了本领。"],["五月九日 · 开盘以前","许多股票似乎已经涨到买盘枯竭。","我看空了好几天，终于等到了机会。","急跌，会制造便宜货；随后迅速反弹。","先卖空，再买入：两边都能挣钱。","我把一个判断，当成了稳得不能再稳的机会。"],["市价卖单 · 在途","开盘暴跌，成交量巨大，波动空前。","经纪人有能力，也尽责，但订单太多。","行情纸带落后，成交回报也来得很慢。","我看见一百时发出的卖单，成交在八十。","从昨夜收盘算，已经跌了三十、四十点。"],["卖在了想买的位置","成交比我据纸带判断的低了二十点。","我本想卖在跌势前段，却卖在了低位。","那些股票已是我计划买入的便宜货。","市场总有止跌的时候。","我立刻决定：回补空头，并转为买入。"],["回补与买入 · 在途","我改变了方向，传递订单却仍需时间。","场内经纪人按收到指令时的行情买入。","平均比我预想的又高了十五点。","一天损失三十五点，我被彻底击倒。","看对下跌和反弹，依然可以输光本金。"],["纸带上的朋友","过去我根据它的数字下注，靠它挣钱。","那天，它印着过去，市场却已经到了现在。","单会读纸带不够；执行过程也属于交易。","这个问题以前已击败过我。","我当时连问题本身都没能看清。"],["不寻常的那一天","如果意外永不发生，交易就只剩加减。","我却把判断正确，等同于必然能获利。","我没想到，自己猜中的大跌与反弹，","会在订单真正成交时变成两次损失。","市场按预测走，我的账户却走向了相反的结局。"],["我没有立即学会","我还在反复交易，仍忽略执行差距。","试用限价时，市场又常常离我而去。","我想判断市场，而非守住一个指定价。","几年以后才懂得：盯着随后几个报价，","与提前判断市场的大变化，是两件事。"]];class rh{constructor(t,{onExit:e}={}){this.renderer=t,this.onExit=e,this.active=!1,this.paused=!1,this.time=0,this.elapsed=0,this.ray=new Yc,this.pointer=new bt(0,0),this.aim=new bt(0,0),this.targets=[],this.actors=[],this.materials=[],this.textures=[],this.motions=[],this.sounds=!0,this.lightweight=br(),this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.camera=new Ge(54,innerWidth/innerHeight,.06,70),this.cameraPosition=new I,this.cameraLook=new I,this.desiredPosition=new I,this.desiredLook=new I,this.bindControls()}bindControls(){Bt("#filmExit").onclick=()=>this.onExit?.(),Bt("#filmPause").onclick=()=>this.setPaused(!this.paused);for(const[t,e]of[["#bookBack","back"],["#bookForward","forward"],["#bookLanguage","language"],["#bookPutDown","close"]])Bt(t).onclick=()=>this.bookCommand(e);Bt("#filmAudio").onclick=()=>{this.sounds&&this.audio?.state==="running"?(this.sounds=!1,this.setAudioLevel(),this.audioStatus()):(this.sounds=!0,this.initAudio())}}open(){this.lightweight=br(),this.bindControls(),this.active=!0,this.paused=!1,this.time=0,this.elapsed=0,this.pull=0,this.flip=0,this.displayFlip=0,this.aim.set(0,0),this.lookX=0,this.lookY=0,this.drag=null,this.keyHeld=!1,this.held=null,this.hover=null,this.page=0,this.caption="",this.audioTick=0,this.keys=new Set,this.freeYaw=-.14,this.freePitch=-.2,this.freePos=new I(-.15,1.6,2.5),this.build(),this.state="entrance",Bt("#filmHud").dataset&&(Bt("#filmHud").dataset.state="entrance"),this.cameraPosition.set(0,1.65,6.8),this.cameraLook.set(0,1.4,-.7),this.camera.position.copy(this.cameraPosition),this.camera.lookAt(this.cameraLook),Bt("#filmHud").hidden=!1,document.body.classList.add("in-film"),Bt("#filmPause").textContent="暂停",Bt("#filmTitle").textContent="1901年5月9日",Bt("#filmHint").textContent="",Bt("#filmThought").textContent="",Bt("#filmFact").textContent="",Bt("#world").setAttribute("aria-label","1901年5月9日连续三维样片：直接操作桌上的订单、行情机纸带与成交回报"),this.resize(),this.initAudio(),this.audioStatus(),this.manuscriptLanguage="zh",this.manuscriptPages=[];const t=this.manuscriptRequest=(this.manuscriptRequest||0)+1;typeof window<"u"&&!this.work&&fetch("./manuscripts/03.json").then(e=>{if(!e.ok)throw Error();return e.json()}).then(e=>{this.active&&t===this.manuscriptRequest&&(this.manuscriptPages=ho(e.paragraphs,!0),this.state==="book"&&this.manuscriptLanguage==="en"&&this.showBook(0))}).catch(()=>{})}close(){this.manuscriptRequest=(this.manuscriptRequest||0)+1,this.active=!1,this.paused=!1,this.held=null,this.drag=null,Bt("#filmHud").hidden=!0,Bt("#sceneFade").style.opacity="0",document.body.classList.remove("in-film"),document.body.classList.remove("film-walking"),Bt("#bookTools").hidden=!0,Bt("#world").setAttribute("aria-label","可自由探索的三维记忆宫殿"),this.dispose(),this.audio&&this.audio.suspend()}setPaused(t){this.paused=t,this.setAudioLevel(),this.drag=null,this.keyHeld=!1,this.keys?.clear(),Bt("#filmPause").textContent=t?"继续":"暂停",Bt("#filmPause").setAttribute("aria-pressed",String(t)),Bt("#filmHint").textContent=t?"时间停下了。继续，或按 Esc 返回房子。":this.hint()}mat(t,e={}){const i=t+"|"+JSON.stringify({...e,map:e.map?.uuid});if(this.matCache?.has(i))return this.matCache.get(i);const s=new ms({color:t,roughness:.58,...e});return this.materials.push(s),this.matCache?.set(i,s),s}box(t,e,i,s,r,a,o,l){const c=new ee(new Yi(e,i,s),typeof l=="number"?this.mat(l):l);return c.position.set(r,a,o),c.castShadow=!0,c.receiveShadow=!0,t.add(c),c}cylinder(t,e,i,s,r,a,o,l=32){const c=new ee(new Ls(e,e,i,l),typeof o=="number"?this.mat(o):o);return c.position.set(s,r,a),c.castShadow=!0,c.receiveShadow=!0,t.add(c),c}sphere(t,e,i,s,r,a){const o=new ee(new Pr(e,24,16),typeof a=="number"?this.mat(a):a);return o.position.set(i,s,r),o.castShadow=!0,t.add(o),o}canvasTexture(t,e=1024,i=768){const s=document.createElement("canvas");s.width=e,s.height=i,t(s.getContext("2d"),e,i);const r=new oo(s);return r.colorSpace=De,this.textures.push(r),r}print(t,{w:e=1024,h:i=768,dark:s=!1,title:r="HARDING BROTHERS",footer:a="NEW YORK · 1901"}={}){return this.canvasTexture((o,l,c)=>{o.fillStyle=s?"#16342c":"#e5d6b4",o.fillRect(0,0,l,c),o.strokeStyle=s?"#ad925c":"#8f7b53",o.lineWidth=3,o.strokeRect(38,35,l-76,c-70),o.fillStyle=s?"#e7d6ae":"#263b32",o.textAlign="center",o.font="30px Georgia",o.fillText(r,l/2,88),o.fillRect(90,112,l-180,2),o.font="48px Microsoft YaHei,serif",t.forEach((h,u)=>o.fillText(h,l/2,195+u*76,l-150)),o.font="22px Georgia",o.fillText(a,l/2,c-68)},e,i)}placard(t,e,i,s,r,a,o,l=!1){const c=this.print(e,{dark:l,h:Math.round(1024*s/i)}),h=new jn({map:c});this.materials.push(h);const u=new ee(new Pi(i,s),h);return u.position.set(r,a,o),t.add(u),u}card(t,e){const i=new Wt,s=this.box(i,.46,.005,.65,0,0,0,fs.paper),r=new ee(new Pi(.46,.65),new ms({map:this.print(t,{h:1447}),roughness:.95}));r.rotation.x=-Math.PI/2,r.position.y=.004,i.add(r),r.material.emissive.setHex(16777215),r.material.emissiveMap=r.material.map,r.material.emissiveIntensity=.14;const a=new ee(new Pi(.46,.65),new ms({map:this.print(e,{h:1447}),roughness:.95}));return a.rotation.x=Math.PI/2,a.rotation.z=Math.PI,a.position.y=-.004,i.add(a),a.material.emissive.setHex(16777215),a.material.emissiveMap=a.material.map,a.material.emissiveIntensity=.14,this.materials.push(r.material,a.material),i.userData.edge=s,i.userData.front=r,i.userData.back=a,i}target(t,e){return t.traverse(i=>i.userData.filmTarget=e),this.targets.push(t),t.userData.id=e,t}woodTexture(){return this.canvasTexture((t,e,i)=>{t.fillStyle="#523724",t.fillRect(0,0,e,i);for(let s=0;s<850;s++){const r=s*i/850;t.strokeStyle=s%4?"#20140a22":"#e6a56015",t.lineWidth=.5+s%3,t.beginPath(),t.moveTo(0,r);for(let a=0;a<=e;a+=32)t.lineTo(a,r+Math.sin(a*.007+s)*3);t.stroke()}},512,512)}build(){this.scene=new Ro,this.scene.background=new Ft(1057570),this.scene.fog=new Ds(1321768,.026),this.targets=[],this.actors=[],this.materials=[],this.textures=[],this.motions=[],this.matCache=new Map,this.lastTapePrice=null,this.lastWidth=0;const t=this.scene,e=this.mat(12100490,{map:this.woodTexture()}),i=this.mat(fs.brass,{metalness:.72,roughness:.28}),s=this.mat(fs.green),r=this.mat(fs.paper);this.brass=i,this.wood=e,this.scene.add(new No(10995664,3416341,1.05)),this.sun=new Xc(16766624,3.4),this.sun.position.set(-4,7,-12),this.sun.castShadow=!this.lightweight,this.sun.shadow.mapSize.set(512,512),this.sun.shadow.camera.left=-9,this.sun.shadow.camera.right=9,this.sun.shadow.camera.top=9,this.sun.shadow.camera.bottom=-9,this.sun.shadow.normalBias=.03,t.add(this.sun),this.lampLight=new Cs(16757851,6,8,2),this.lampLight.position.set(-.8,1.9,.1),t.add(this.lampLight);const a=new Cs(8300988,30,12,2);a.position.set(3,3,-4),t.add(a);for(let u=-7;u<7;u+=.42)this.box(t,12,.1,.4,0,-.06,u,e);this.box(t,12,1.65,.25,0,.8,-7,s),this.box(t,12,.65,.25,0,4.7,-7,s);for(const u of[-5.8,-1.9,1.9,5.8])this.box(t,.65,3.2,.25,u,3,-7,s);this.box(t,.25,5,14,6,2.45,0,s),this.box(t,.25,5,14,-6,2.45,0,s),this.box(t,12,.2,14,0,5,0,2571317);for(const u of[-5.9,5.9]){this.box(t,.08,1.2,14,u,.6,0,e);for(let d=-6;d<=6;d+=1.4)this.box(t,.09,1.15,.035,u,.62,d,i)}for(let u=-5;u<6;u+=1.5)this.box(t,.08,1.2,.06,u,.6,-6.82,i);this.box(t,11.7,.07,.06,0,1.25,-6.8,i);for(let u=0;u<3;u++){const d=-3.8+u*3.8,p=this.box(t,2.4,2.35,.11,d,3,-6.66,this.mat(9088689,{transparent:!0,opacity:.14,roughness:.05}));p.castShadow=!1;for(const g of[-1.3,0,1.3])this.box(t,.065,2.7,.16,d+g,3,-6.58,e);for(const g of[1.7,3,4.3])this.box(t,2.65,.055,.16,d,g,-6.58,e)}for(let u=0;u<18;u++){const d=(u-8.5)*1.3,p=2.2+u*7%9*.4;this.box(t,1.08,p,.8,d,p/2,-9-u%3,5072483);for(let g=.5;g<p;g+=.55)for(const x of[-.27,.27])this.box(t,.18,.25,.03,d+x,g,-8.55-u%3,12498074)}this.door=new Wt,this.door.position.set(-2.5,0,5.5),t.add(this.door),this.box(this.door,1.5,2.9,.15,.75,1.45,0,e),this.sphere(this.door,.06,1.32,1.35,-.13,i),this.target(this.door,"door"),this.door.rotation.y=-.15,this.nextDoor=new Wt,this.nextDoor.position.set(2.5,0,5.5),t.add(this.nextDoor),this.box(this.nextDoor,1.5,2.9,.15,0,1.45,0,e),this.placard(this.nextDoor,["走向下一段往事"],1.2,.28,0,1.8,-.09).rotation.y=Math.PI,this.target(this.nextDoor,"nextDoor"),this.box(t,8,1.2,.9,0,.6,-3,e),this.box(t,8.25,.12,1.08,0,1.22,-3,e);for(let u=-3.5;u<4;u+=.7)this.box(t,.035,1.1,.035,u,.58,-2.52,i);this.box(t,3,.13,1.4,0,.95,.2,e);for(const u of[-1.28,1.28])for(const d of[-.32,.72])this.box(t,.09,.9,.09,u,.45,d,e);this.box(t,1,.012,1.15,.12,1.022,.22,this.mat(1390381,{roughness:.95})),this.slot=new Wt,this.slot.position.set(.38,1.28,-2.35),t.add(this.slot),this.box(this.slot,1,.1,.65,0,0,0,e),this.box(this.slot,.86,.012,.5,0,.06,0,i),this.placard(this.slot,["订单"],.62,.3,0,.23,-.12),this.target(this.slot,"slot");const o=new Wt;o.position.set(-.8,1.02,.05),t.add(o),this.cylinder(o,.18,.055,0,0,0,i),this.cylinder(o,.03,.68,0,.36,0,i);const l=new ee(new Cr(.3,.25,32,1,!0),this.mat(2643270,{side:ni}));l.rotation.x=Math.PI,l.position.set(0,.71,0),o.add(l),this.sellCard=this.card(["市价卖出","不限定成交价格","先抓住下跌"],["五月九日 · 上午","现金近五万美元","手中没有股票"]),this.sellCard.position.set(.12,1.072,.3),this.sellCard.rotation.y=-.16,t.add(this.sellCard),this.target(this.sellCard,"sell"),this.buyCard=this.card(["回补空头","随后转为买入","市价指令"],["我以为八十附近","已是可以买入的低位","市场不会一直下跌"]),this.buyCard.position.set(.12,1.08,.3),this.buyCard.visible=!1,t.add(this.buyCard),this.target(this.buyCard,"buy"),this.receipt=this.card(["卖出成交回报","实际卖出：八十","市价指令 · 已执行"],["我看见的报价：一百","我的卖出成交：八十","相差二十点","卖在了原本想买的低位"]),this.receipt.position.set(.65,1.07,.55),this.receipt.visible=!1,t.add(this.receipt),this.target(this.receipt,"receipt1"),this.receipt2=this.card(["买入成交回报","成交比预期高","平均十五点"],["卖出低了二十点","买入又高了十五点","一天损失三十五点","近五万美元 · 全部失去"]),this.receipt2.position.set(.4,1.08,.55),this.receipt2.visible=!1,t.add(this.receipt2),this.target(this.receipt2,"receipt2"),this.book=new Wt,this.book.position.set(-.8,1.07,.55),this.book.rotation.y=.12,t.add(this.book),this.box(this.book,.5,.035,.65,0,0,0,s),this.bookPage=this.placard(this.book,["五月九日","拉里 · 利文斯顿"],.46,.62,0,.023,0),this.bookPage.rotation.x=-Math.PI/2,this.target(this.book,"book"),this.buildTicker(r,i),this.buildBoard(),this.buildClock();for(let u=0;u<5;u++)this.actors.push(this.person(u-2,0,-4.2,u));this.actors.push(this.person(-4.3,0,1.6,5)),this.actors.push(this.person(4.5,0,-.2,6)),this.courier=this.person(2.65,0,-2.15,7),this.actors.push(this.courier),this.hand=this.buildHand(),this.camera.add(this.hand),this.scene.add(this.camera);const c=new Ie,h=[];for(let u=0;u<160;u++)h.push(u*37%100/10-5,u*17%100/22,u*29%100/8-6);c.setAttribute("position",new pe(h,3)),this.dust=new Po(c,new Rr({color:16044185,size:.014,transparent:!0,opacity:.22,depthWrite:!1})),t.add(this.dust),this.mergeArchitecture(),this.renderer.isWebGLRenderer&&(this.fpsStart=performance.now(),this.fpsFrames=0,this.savedPixelRatio=this.renderer.getPixelRatio(),this.renderer.setPixelRatio(Ps(innerWidth,innerHeight,this.lightweight)),this.savedShadow=this.renderer.shadowMap.enabled,this.renderer.shadowMap.enabled=!this.lightweight,this.lightweight||(this.composer=new ih(this.renderer),this.composer.addPass(new nh(t,this.camera)),this.bloom=new mn(new bt(innerWidth,innerHeight),.22,.5,.82),this.composer.addPass(this.bloom),this.grade=new eh(q0),this.composer.addPass(this.grade),this.composer.addPass(new sh)),Bt("#filmHud").dataset.quality=this.lightweight?"light":"full")}mergeArchitecture(){const t=new Map;for(const e of this.scene.children){if(!e.isMesh||e===this.tape||this.paperLoops.includes(e))continue;const i=e.material.uuid+e.castShadow;t.has(i)||t.set(i,[]),t.get(i).push(e)}for(const e of t.values()){if(e.length<2)continue;const i=e.map(a=>(a.updateMatrix(),a.geometry.clone().applyMatrix4(a.matrix))),s=Qc(i,!1);if(!s){i.forEach(a=>a.dispose());continue}const r=new ee(s,e[0].material);r.castShadow=e[0].castShadow,r.receiveShadow=!0,this.scene.add(r);for(const a of e)this.scene.remove(a),a.geometry.dispose();i.forEach(a=>a.dispose())}}buildTicker(t,e){const i=new Wt;i.position.set(1.2,1.02,.05),this.scene.add(i),this.machine=i,this.cylinder(i,.28,.08,0,0,0,e),this.cylinder(i,.09,.2,0,.12,0,e),this.cylinder(i,.19,.1,0,.28,0,e);for(const r of[-.12,.12])this.cylinder(i,.025,.35,r,.29,.02,e);this.wheel=this.cylinder(i,.14,.08,0,.42,0,e),this.wheel.rotation.x=Math.PI/2,this.cylinder(i,.012,.25,0,.42,.01,e).rotation.z=Math.PI/2;const s=this.sphere(i,.29,0,.32,0,this.mat(12114640,{transparent:!0,opacity:.12,roughness:.08,metalness:.12}));s.scale.y=1.1,this.tapeCanvas=document.createElement("canvas"),this.tapeCanvas.width=256,this.tapeCanvas.height=2048,this.tapeContext=this.tapeCanvas.getContext("2d"),this.tapeTexture=new oo(this.tapeCanvas),this.tapeTexture.colorSpace=De,this.tapeTexture.wrapT=xr,this.textures.push(this.tapeTexture),this.tapeMaterial=new ms({map:this.tapeTexture,side:ni,roughness:1}),this.materials.push(this.tapeMaterial),this.tapeGeometry=new Pi(.12,1.4,1,65),this.tape=new ee(this.tapeGeometry,this.tapeMaterial),this.tape.position.set(1.18,1.44,.05),this.scene.add(this.tape),this.target(this.tape,"tape"),this.grip=this.sphere(this.scene,.16,1.18,1.28,.6,this.mat(16777215,{transparent:!0,opacity:0,depthWrite:!1})),this.grip.castShadow=!1,this.target(this.grip,"tape"),this.paperLoops=[];for(let r=0;r<8;r++){const a=new ee(new Do(.16+r*.016,.009,8,48,Math.PI*1.8),this.mat(fs.paper));a.position.set(1.02+Math.sin(r)*.15,.12+r*.027,1.1+r*.06),a.rotation.set(.7+r*.21,r*.19,.4),this.scene.add(a),this.paperLoops.push(a)}this.paintTape(100)}paintTape(t){const e=this.tapeContext;e.fillStyle="#e8dcbf",e.fillRect(0,0,256,2048),e.fillStyle="#273b31",e.font="30px Georgia",e.textAlign="center";for(let i=0;i<24;i++)e.fillText("N.Y.  "+String(t-i%3),128,75+i*84),e.fillRect(24,98+i*84,208,1);this.tapeTexture.needsUpdate=!0}buildBoard(){this.board=new Wt,this.board.position.set(-4.95,2.3,-2),this.board.rotation.y=Math.PI/2.9,this.scene.add(this.board),this.box(this.board,2.9,1.7,.13,0,0,0,this.wood),this.boardDisplay=this.placard(this.board,["交易所 · 此刻","市场正在开盘"],2.7,1.5,0,0,.09,!0),this.boardLast=""}setBoard(t){const e=t.join("|");if(this.boardLast===e)return;this.boardLast=e;const i=this.boardDisplay.material.map,s=this.print(t,{dark:!0,h:570,title:"STOCK EXCHANGE",footer:"NEW YORK · MAY 9"});this.boardDisplay.material.map=s,i&&(i.dispose(),this.textures=this.textures.filter(r=>r!==i))}buildClock(){const t=new Wt;t.position.set(3.7,3.85,-6.45),this.scene.add(t),this.cylinder(t,.42,.12,0,0,0,this.brass).rotation.x=Math.PI/2,this.clockFace=this.placard(t,["Ⅻ","Ⅸ      Ⅲ","Ⅵ"],.76,.76,0,0,.085),this.clockLong=this.box(t,.018,.32,.025,0,.13,.11,1976609),this.clockShort=this.box(t,.025,.21,.025,0,.085,.13,1976609)}person(t,e,i,s){const r=new Wt;r.position.set(t,e,i),this.scene.add(r);const a=this.mat(s%2?2503471:3619637),o=this.mat(s%2?11043684:11965815),l=this.mat(14471089);this.box(r,.43,.62,.24,0,1.12,0,a),this.box(r,.13,.36,.25,0,1.22,.018,l),this.box(r,.055,.3,.026,0,1.2,.155,4072990);const c=this.sphere(r,.13,0,1.62,0,o);c.scale.set(.84,1.1,.82),this.sphere(r,.13,0,1.69,-.015,this.mat(2695709)).scale.set(1,.47,1),this.box(r,.065,.07,.07,0,1.61,.11,o);for(const d of[-.045,.045])this.sphere(r,.012,d,1.65,.106,this.mat(3156514));const h=[],u=[];for(const d of[-1,1]){const p=new Wt;p.position.set(d*.25,1.36,0),r.add(p),this.box(p,.12,.3,.13,0,-.14,0,a);const g=new Wt;g.position.y=-.3,p.add(g),this.box(g,.11,.28,.12,0,-.13,0,a),this.sphere(g,.066,0,-.3,0,o),h.push({arm:p,fore:g});const x=new Wt;x.position.set(d*.115,.8,0),r.add(x),this.box(x,.15,.73,.17,0,-.35,0,a),this.box(x,.17,.09,.29,0,-.73,.045,1515291),u.push(x)}return{root:r,arms:h,legs:u,head:c,seed:s,base:new I(t,e,i)}}buildHand(){const t=new Wt,e=this.mat(11965554),i=this.mat(14734520),s=this.mat(2635823);this.box(t,.17,.35,.15,0,-.25,0,s),this.box(t,.18,.07,.15,0,-.045,0,i),this.sphere(t,.105,0,.04,0,e).scale.set(.8,1,.45),this.fingers=[];for(let r=0;r<4;r++){const a=new Wt;a.position.set(-.06+r*.04,.095,-.015),t.add(a),this.cylinder(a,.017,.09,0,.045,0,e,12);const o=this.cylinder(a,.015,.065,0,.105,.018,e,12);o.rotation.x=.5,this.fingers.push(a)}return this.sphere(t,.035,-.095,.03,.035,e).scale.y=1.5,t.position.set(.26,-.5,-.65),t.visible=!1,t}resize(){this.lastWidth===innerWidth&&this.lastHeight===innerHeight||(this.lastWidth=innerWidth,this.lastHeight=innerHeight,this.camera.aspect=innerWidth/innerHeight,this.camera.fov=innerWidth<600?65:54,this.camera.updateProjectionMatrix(),this.renderer.isWebGLRenderer&&this.renderer.setPixelRatio(Ps(innerWidth,innerHeight,this.lightweight)),this.composer&&this.composer.setSize(innerWidth,innerHeight))}hit(t,e){return this.pointer.set(t/innerWidth*2-1,-e/innerHeight*2+1),this.ray.setFromCamera(this.pointer,this.camera),this.ray.intersectObjects(this.targets,!0).find(s=>{let r=s.object;for(;r;){if(!r.visible||["holdingSell","holdingBuy"].includes(this.state)&&r===this.held)return!1;r=r.parent}return!0})?.object.userData.filmTarget||null}actionable(t){return{order:["sell"],holdingSell:["slot"],tape:["tape"],receipt:["receipt1"],inspectSell:["receipt1"],buy:["buy"],holdingBuy:["slot"],receiptBuy:["receipt2"],inspectBuy:["receipt2"],epilogue:["book","door","nextDoor"],book:["book","door","nextDoor"]}[this.state]?.includes(t)}pointerDown(t,e){if(this.paused)return;this.initAudio();const i=this.hit(t,e);if(this.drag={x:t,y:e,lastX:t,lastY:e,id:i,total:0},this.state==="book"&&i==="book"){this.drag.bookGesture=!0;return}if(this.state==="book"&&!i){this.putBook();return}this.actionable(i)&&(i==="sell"?(this.pick(this.sellCard),this.setState("holdingSell")):i==="buy"?(this.pick(this.buyCard),this.setState("holdingBuy")):i==="slot"&&this.held?this.deliver():i==="receipt1"&&this.state==="receipt"?(this.pick(this.receipt),this.flip=0,this.setState("inspectSell")):i==="receipt2"&&this.state==="receiptBuy"?(this.pick(this.receipt2),this.flip=0,this.setState("inspectBuy")):i==="book"?this.state==="epilogue"?(this.pick(this.book),this.setState("book"),this.showBook(0)):this.showBook((this.page+1)%this.bookCount()):i==="nextDoor"?this.onNext?.():i==="door"&&this.onExit?.())}pointerMove(t,e){if(this.aim.set(Ze(t/innerWidth*2-1,-1,1),Ze(e/innerHeight*2-1,-1,1)),this.paused)return;if(this.state==="book"&&this.drag?.bookGesture){this.drag.lastX=t,this.drag.lastY=e;return}if(this.drag){const s=t-this.drag.lastX,r=e-this.drag.lastY;if(this.drag.total+=Math.hypot(s,r),this.drag.lastX=t,this.drag.lastY=e,this.state==="tape"&&this.drag.id==="tape")this.pull=Ze(this.pull+(Math.abs(r)+Math.abs(s)*.45)/(innerHeight*.38),0,1),this.pull>.94&&this.setState("falling");else if(["inspectSell","inspectBuy"].includes(this.state))this.flip=Ze(this.flip+(Math.abs(s)+Math.abs(r)*.5)/(innerWidth*.42),0,1),this.flip>.93&&this.inspected();else if(!this.held){if(this.state==="epilogue"){this.freeYaw-=s*.003,this.freePitch=Ze(this.freePitch-r*.002,-.65,.65);return}this.lookX=Ze(this.lookX-s*.003,-.62,.62),this.lookY=Ze(this.lookY+r*.002,-.22,.22)}}const i=this.hit(t,e);this.hover=this.actionable(i)?i:null,Bt("#world").style.cursor=this.hover?this.drag?"grabbing":"grab":"default"}pointerUp(t,e){if(this.state==="book"&&this.drag?.bookGesture){this.finishBookGesture(t,e);return}if(this.paused){this.drag=null;return}["holdingSell","holdingBuy"].includes(this.state)&&this.hit(t,e)==="slot"&&this.deliver(),this.drag=null}finishBookGesture(t,e){const i=this.drag;if(this.drag=null,this.paused||!i)return;const s=t-i.x,r=e-i.y;Math.abs(s)>45&&Math.abs(s)>Math.abs(r)*1.2?this.bookCommand(s<0?"forward":"back"):Math.hypot(s,r)<18&&this.bookCommand(t<innerWidth/2?"back":"forward")}bookCommand(t){if(this.state!=="book"||this.paused)return;if(this.drag=null,t==="close"){this.putBook();return}if(t==="language"){this.keyDown({code:"KeyL",preventDefault(){}});return}const e=this.work?this.language==="en"?this.originalPages.length:this.notePages.length:this.bookCount();this.showBook(Ze(this.page+(t==="back"?-1:1),0,Math.max(0,e-1)))}syncTouchControls(){if(document.body.classList[this.active&&this.state==="epilogue"?"add":"remove"]("film-walking"),Bt("#bookTools").hidden=this.state!=="book",matchMedia("(any-pointer: coarse)").matches){const t=Bt("#filmHint");this.paused?t.textContent="时间停下了。轻点“继续”恢复。":this.state==="book"?t.textContent="轻点左右页，或左右滑动翻页 · 下方可换册、放回":this.state==="epilogue"?t.textContent="拖动环顾 · 左下角走动 · 触碰账册或门":t.textContent=t.textContent.replace(/ · (鼠标或 E|也可按住 E|拖过去，或按 E|拖动物件，或按住 E|拖动翻转，或按 E|拖放或按 E)/g,"").replace(/，或按 E/g,"")}}keyDown(t){if(this.state==="epilogue"&&["KeyW","KeyA","KeyS","KeyD"].includes(t.code)){t.preventDefault(),this.keys.add(t.code);return}if(t.code==="KeyL"&&this.state==="book"){t.preventDefault(),this.manuscriptLanguage=this.manuscriptLanguage==="en"?"zh":"en",this.showBook(0);return}if(t.code==="Space"&&this.state==="book"){t.preventDefault(),this.putBook();return}if(t.code==="Escape"){this.onExit?.();return}if(t.code==="KeyP"){t.preventDefault(),this.setPaused(!this.paused);return}if(!this.paused){if(t.code==="KeyE"||t.code==="Space"){if(t.preventDefault(),this.keyHeld=!0,t.repeat)return;if(this.initAudio(),["holdingSell","holdingBuy"].includes(this.state))this.deliver();else if(this.state!=="tape"){if(!["inspectSell","inspectBuy"].includes(this.state))if(this.state==="book")this.showBook((this.page+(t.shiftKey?-1:1)+this.bookCount())%this.bookCount());else{const e={order:"sell",receipt:"receipt1",buy:"buy",receiptBuy:"receipt2",epilogue:"book"}[this.state];e&&this.activateById(e)}}}t.code==="KeyR"&&this.state==="epilogue"&&(this.dispose(),this.open())}}activateById(t){t==="sell"&&(this.pick(this.sellCard),this.setState("holdingSell")),t==="buy"&&(this.pick(this.buyCard),this.setState("holdingBuy")),t==="receipt1"&&(this.pick(this.receipt),this.flip=0,this.setState("inspectSell")),t==="receipt2"&&(this.pick(this.receipt2),this.flip=0,this.setState("inspectBuy")),t==="book"&&(this.pick(this.book),this.setState("book"),this.showBook(0))}pick(t){this.flip=0,this.displayFlip=0,this.scene.attach(t),this.held=t,this.heldStart=t.position.clone(),this.pickTime=this.time,this.hand.visible=!0,this.tick(170,.08,.08)}release(){this.held&&(this.held.visible=!1,this.held=null),this.hand.visible=!1}deliver(){this.held&&(this.deliverObject=this.held,this.deliverStart=this.held.position.clone(),this.held=null,this.hand.visible=!1,this.setState(this.state==="holdingSell"?"dispatch":"buyDispatch"),this.tick(105,.12,.1))}inspected(){this.flip=1,this.state==="inspectSell"?this.setState("sellRevelation"):this.state==="inspectBuy"&&this.setState("ending"),this.tick(95,.12,.07)}setState(t){this.state=t,Bt("#filmHud").dataset&&(Bt("#filmHud").dataset.state=t),this.time=0,this.lookX=0,this.lookY=0,["holdingSell","holdingBuy","inspectSell","inspectBuy"].includes(t)||(this.drag=null),Bt("#filmHint").textContent=this.hint(),t==="receipt"&&(this.receipt.visible=!0),t==="buy"&&(this.release(),this.buyCard.visible=!0),t==="receiptBuy"&&(this.receipt2.visible=!0),t==="epilogue"&&(this.release(),this.setBoard(["五月九日","收盘以后"])),this.cameraPath=null}hint(){return{order:"拿起桌上的卖单 · 鼠标或 E",holdingSell:"把手里的订单送到柜台铜盘 · 拖过去，或按 E",tape:"握住行情机伸出的纸带，向自己拉 · 也可按住 E",receipt:"柜台送来回报单。拿起它。",inspectSell:"手里这张纸还有另一面 · 拖动翻转，或按 E",buy:"桌上出现了新的指令。拿起它。",holdingBuy:"把回补与买入指令送到柜台铜盘",receiptBuy:"第二张回报到了。拿起来。",inspectBuy:"翻到另一面，看看这一天留下什么",epilogue:"桌上账册可以翻阅；拖动环顾，WASD 走动。门可以离开。R 重走这一天。",book:"点击账册翻页 · E 往后 / Shift+E 往前 · L 换册 · 空格放回。"}[this.state]||""}putBook(){this.held=null,this.hand.visible=!1,this.book.position.set(-.8,1.07,.55),this.book.rotation.set(0,.12,0),this.book.scale.setScalar(1),this.setState("epilogue")}bookCount(){return this.manuscriptLanguage==="en"?Math.max(1,this.manuscriptPages.length):sc.length}showBook(t){if(this.manuscriptLanguage==="en"){this.page=Qn.clamp(t,0,this.bookCount()-1);const i=this.bookPage.material.map;this.bookPage.material.map=this.canvasTexture((s,r,a)=>{s.fillStyle="#e5d6b4",s.fillRect(0,0,r,a),s.fillStyle="#25382d",s.textAlign="left",s.font="36px Georgia",(this.manuscriptPages[this.page]||["The other notebook is on its way."]).forEach((o,l)=>s.fillText(o,80,150+l*85,r-160)),s.textAlign="center",s.font="24px Georgia",s.fillText(this.page+1+" / "+this.bookCount(),r/2,a-65)},1024,1447),i&&(i.dispose(),this.textures=this.textures.filter(s=>s!==i));return}this.page=t;const e=this.bookPage.material.map;this.bookPage.material.map=this.print(sc[t],{h:1380,title:"PRIVATE NOTES",footer:"LARRY LIVINGSTON · NEW YORK"}),e&&(e.dispose(),this.textures=this.textures.filter(i=>i!==e)),this.tick(220,.055,.035)}audioStatus(){const t=this.sounds&&this.audio?.state==="running";Bt("#filmAudio").textContent=t?"音效 开":this.sounds?"开启音效":"音效 关",Bt("#filmAudio").setAttribute("aria-pressed",String(!!t)),Bt("#filmHud").dataset&&(Bt("#filmHud").dataset.audioState=this.audio?.state||"not-started")}setAudioLevel(){this.master&&this.audio&&this.master.gain.setTargetAtTime(this.sounds&&!this.paused?1:0,this.audio.currentTime,.08)}initAudio(){if(!this.sounds||typeof window>"u"){this.audioStatus();return}try{if(!this.audio){this.audio=new(window.AudioContext||window.webkitAudioContext),this.master=this.audio.createGain(),this.master.gain.value=1,this.master.connect(this.audio.destination),this.audio.onstatechange=()=>this.audioStatus();const t=this.audio.sampleRate*2,e=this.audio.createBuffer(1,t,this.audio.sampleRate),i=e.getChannelData(0);let s=0;for(let a=0;a<t;a++)s=(s+Math.random()*.5-.25)*.98,i[a]=s;this.noise=this.audio.createBufferSource(),this.noise.buffer=e,this.noise.loop=!0;const r=this.audio.createBiquadFilter();r.type="lowpass",r.frequency.value=650,this.ambient=this.audio.createGain(),this.ambient.gain.value=.08,this.noise.connect(r).connect(this.ambient).connect(this.master),this.noise.start()}this.setAudioLevel(),Promise.resolve(this.audio.resume()).then(()=>this.audioStatus()).catch(()=>this.audioStatus()),this.audioStatus()}catch{this.sounds=!1,this.audioStatus(),Bt("#filmAudio").textContent="音效不可用"}}tick(t=210,e=.035,i=.045){if(!this.audio||!this.sounds||this.paused||this.audio.state!=="running")return;const s=this.audio.createOscillator(),r=this.audio.createGain();s.type="triangle",s.frequency.setValueAtTime(t,this.audio.currentTime),s.frequency.exponentialRampToValueAtTime(t*.45,this.audio.currentTime+e),r.gain.setValueAtTime(i,this.audio.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,this.audio.currentTime+e),s.connect(r).connect(this.master),s.start(),s.stop(this.audio.currentTime+e),s.onended=()=>{s.disconnect(),r.disconnect()}}narration(){let t="",e=this.state,i=this.time;if(nc[e]){const s=mi[e],r=nc[e];t=r[Math.min(r.length-1,Math.floor(i/(s/r.length)))]}else t={order:"纸上的计划看起来很清楚：先卖出，再在下跌后买回来。",tape:"我仍然相信纸带。它的数字，曾经让我一次次挣到钱。",receipt:"我的第一批卖单，终于有了回报。",inspectSell:"“一百”还在纸带上。回报却写着“八十”。",sellRevelation:"我卖空的位置，已经是我原本计划买入的低位。",buy:"我立即改变方向：回补，并转为买入。",receiptBuy:"另一张迟到的纸，从柜台递到了桌上。",inspectBuy:"当指令真正成交时，买入又比预想的高了十五点。",epilogue:"我看对了那一天的市场。却还没学会看清自己所处的时间。",book:""}[e]||"";t!==this.caption&&(this.caption=t,Bt("#filmCaption").textContent=t)}updateClues(){const t=Y0[this.state],e=mi[this.state],i=Bt("#filmThought"),s=Bt("#filmFact");if(!t){i.textContent="",s.textContent="";return}const r=e/t.length,a=Math.min(t.length-1,Math.floor(this.time/r)),o=this.time-a*r,l=Se(o/.7)*(1-Se((o-r+.9)/.9));i.textContent=t[a][0],s.textContent=t[a][1],i.style.opacity=String(l),s.style.opacity=String(Se((o-.8)/.7)*(1-Se((o-r+.7)/.7)))}update(t){this.active&&(this.resize(),!this.paused&&t>0&&(this.time+=t,this.elapsed+=t,this.updateState(t),this.updateScene(t),this.narration(),this.updateClues()),this.render())}keyUp(t){this.keys?.delete(t.code),(t.code==="KeyE"||t.code==="Space")&&(this.keyHeld=!1)}updateState(t=1/60){this.keyHeld&&this.state==="tape"&&(this.pull=Math.min(1,this.pull+t*.6),this.pull>.94&&this.setState("falling")),this.keyHeld&&["inspectSell","inspectBuy"].includes(this.state)&&(this.flip=Math.min(1,this.flip+t*.65),this.flip>.94&&this.inspected());const e=this.state,i=this.time,s=mi,r={entrance:"order",dispatch:"tape",falling:"receipt",sellRevelation:"buy",buyDispatch:"recovery",recovery:"receiptBuy",ending:"epilogue"};s[e]&&i>=s[e]&&this.setState(r[e])}cameraPose(){const t=this.state,e=this.time;let i=[0,1.6,3.4],s=[.15,1.1,.1];if(t==="entrance"){const r=Se(e/mi.entrance);i=[ae(0,-.15,r),1.64,ae(6.8,2.4,r)],s=[.12,ae(1.5,1.13,r),.25],this.door.rotation.y=ae(-.15,-1.5,Se(e/2))}if(["order","holdingSell","buy","holdingBuy"].includes(t)&&(i=[-.08,1.62,2.4],s=[.12,1.07,.15]),["dispatch","buyDispatch"].includes(t)){const r=Se(e/7);i=[ae(-.08,.55,r),1.65,ae(2.4,.2,r)],s=[.35,1.45,-3.2]}if(t==="tape"&&(i=[1,1.55,1.8],s=[1.15,1.07,.35]),t==="falling"){const r=Se(e/mi.falling);i=[ae(1,-1.25,r),ae(1.55,1.72,r),ae(1.8,2.2,r)],s=[ae(1.15,-2.4,r),ae(1.07,2.05,r),ae(.35,-2,r)]}if(["receipt","receiptBuy"].includes(t)&&(i=[.12,1.5,1.65],s=[.55,1.07,.55]),["inspectSell","inspectBuy","sellRevelation","book"].includes(t)&&(i=[.12,1.62,2.25],s=[.2,1.36,.3]),t==="recovery"){const r=Se(e/mi.recovery);i=[ae(.55,-.3,r),1.7,ae(.2,2.6,r)],s=[ae(.3,-3.8,r),ae(1.45,2.3,r),-2.4]}if(t==="ending"){const r=Se(e/mi.ending);i=[.12,1.62,ae(2.25,4.7,r)],s=[.18,1.18,.2]}t==="epilogue"&&(i=this.freePos.toArray(),s=[i[0]+Math.sin(this.freeYaw)*Math.cos(this.freePitch)*3,i[1]+Math.sin(this.freePitch)*3,i[2]-Math.cos(this.freeYaw)*Math.cos(this.freePitch)*3]),this.desiredPosition.set(...i),this.desiredLook.set(...s),this.desiredLook.x+=this.lookX*1.8,this.desiredLook.y+=this.lookY}updateScene(t){if(this.state==="epilogue"){const h=(this.keys.has("KeyS")?1:0)-(this.keys.has("KeyW")?1:0),u=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),d=t*1.7/(Math.hypot(u,h)||1),p=Ze(this.freePos.x+(u*Math.cos(this.freeYaw)-h*Math.sin(this.freeYaw))*d,-5.2,5.2),g=Ze(this.freePos.z+(u*Math.sin(this.freeYaw)+h*Math.cos(this.freeYaw))*d,-2.2,5.2);Math.abs(p)<1.65&&this.freePos.z>-.55&&this.freePos.z<1.05||(this.freePos.x=p),Math.abs(this.freePos.x)<1.65&&g>-.55&&g<1.05||(this.freePos.z=g)}const e=this.state,i=this.time,s=["falling","receipt","inspectSell","sellRevelation","buy","holdingBuy","buyDispatch","recovery","receiptBuy","inspectBuy","ending"].includes(e);this.cameraPose();const r=1-Math.exp(-t*3.4);this.cameraPosition.lerp(this.desiredPosition,r),this.cameraLook.lerp(this.desiredLook,r),this.camera.position.copy(this.cameraPosition),this.camera.lookAt(this.cameraLook),this.wheel.rotation.z+=t*(s?11:3.5),this.clockLong.rotation.z=-this.elapsed*.025,this.clockShort.rotation.z=-this.elapsed*.003;const a=this.tapeGeometry.attributes.position;for(let h=0;h<a.count;h++){const u=h%2?.06:-.06,d=Math.floor(h/2)/65,p=1.3+this.pull*.65;a.setXYZ(h,u+Math.sin(d*Math.PI)*.035,-Math.pow(d,3)*1.3+Math.sin(d*Math.PI*2+this.elapsed*1.5)*.018,d*p)}a.needsUpdate=!0,this.tapeGeometry.computeVertexNormals(),this.tapeGeometry.computeBoundingSphere(),this.tape.rotation.x=0,this.tapeMaterial.map.offset.y=this.elapsed*(s?.018:.008)%1,this.paperLoops.forEach((h,u)=>{h.rotation.z+=t*.03;const d=s?Ze(i/15,0,1):0;h.scale.setScalar(1+d*.45)});for(const h of this.actors){const u=s?2.8:1.1,d=this.elapsed*u+h.seed,p=h.seed>=4;h.root.position.x=h.base.x+(p?Math.sin(d*.5)*(s?.75:.35):Math.sin(d*.4)*.035),h.root.position.y=Math.sin(d*2)*(p?.017:.004),h.root.rotation.y=p?Math.sin(d*.5)*.5:Math.sin(d*.2)*.1,h.head.rotation.y=Math.sin(d*.7)*.15;for(let g=0;g<2;g++)h.legs[g].rotation.x=p?Math.sin(d+g*Math.PI)*.28:0,h.arms[g].arm.rotation.x=p?Math.sin(d+g*Math.PI)*.25:-.5+Math.sin(d)*.1,h.arms[g].fore.rotation.x=-.35-Math.sin(d+g)*.25;h.seed===2&&["dispatch","buyDispatch"].includes(e)&&(h.arms[0].arm.rotation.x=-Se(i/3)*1.35,h.arms[0].fore.rotation.x=-.65)}if(["falling","recovery"].includes(e)&&i>mi[e]-6){const h=i-(mi[e]-6),u=Se(h/5.6),d=this.courier;d.root.position.lerpVectors(d.base,new I(.95,0,.38),u),d.root.rotation.y=Math.PI,d.arms[0].arm.rotation.x=-.85,d.arms[0].fore.rotation.x=-.7;const p=e==="falling"?this.receipt:this.receipt2;p.visible=!0,p.position.set(ae(2.5,.65,u),ae(1.28,1.08,Se((h-3.5)/2.2)),ae(-1.85,.55,u)),p.rotation.x=ae(-.9,0,Se((h-3.5)/2.2))}if(["receipt","receiptBuy"].includes(e)){const h=this.courier;h.root.position.lerpVectors(new I(.95,0,.38),h.base,Se(i/4)),h.root.rotation.y=0}if(this.held){Se(this.time/.65);const h=["inspectSell","inspectBuy","sellRevelation","ending","book"].includes(e),u=innerWidth<600?.7:h?1.02:.68,d=.85*Math.tan(this.camera.fov*Math.PI/360)*this.camera.aspect,p=h?0:Math.min(.34,Math.max(.035,d-u*.23-.04)),g=new I(Ze(p+this.aim.x*.06,-Math.max(.01,d-u*.23-.025),Math.max(.01,d-u*.23-.025)),-.08-this.aim.y*.04,-.85);this.camera.localToWorld(g),this.held.position.lerp(g,1-Math.exp(-t*8)),this.held.quaternion.copy(this.camera.quaternion),this.held.rotateX(Math.PI/2),this.displayFlip=ae(this.displayFlip,this.flip,1-Math.exp(-t*12)),this.held.rotateZ(this.displayFlip*Math.PI),this.held.scale.setScalar(u),this.hand.position.set(p+(h?.21:.13)+this.aim.x*.04,-.36-this.aim.y*.025,-.81),this.hand.rotation.z=this.flip*.16,this.fingers.forEach(x=>x.rotation.x=-.45)}if(this.deliverObject&&["dispatch","buyDispatch"].includes(e)){const h=Se(i/1.9);this.deliverObject.position.lerpVectors(this.deliverStart,new I(.38,1.4,-2.35),h),this.deliverObject.rotation.x=-h*.08,this.deliverObject.rotation.z=h*.1,i>2.3&&(this.deliverObject.visible=!1)}const o=e==="falling"?Math.round(ae(100,80,Se(i/20))):["recovery","receiptBuy","inspectBuy","ending","epilogue","book"].includes(e)?Math.round(ae(80,95,e==="recovery"?Se(i/18):1)):100;this.setBoard(["交易所 · 此刻",String(o)]);const l=["recovery","receiptBuy","inspectBuy","ending","epilogue","book"].includes(e)?80:100;this.lastTapePrice!==l&&(this.lastTapePrice=l,this.paintTape(l)),this.sun.intensity=ae(this.sun.intensity,e==="ending"?.65:s?1.8:3.4,t*.5),this.lampLight.intensity=ae(this.lampLight.intensity,s?4:6,t),this.dust.rotation.y=this.elapsed*.003,this.grade&&(this.grade.uniforms.time.value=this.elapsed,this.grade.uniforms.fade.value=e==="entrance"?Se(i/1.8):e==="ending"?1-Se((i-(mi.ending-6))/6)*.36:1),this.audioTick+=t,this.audioTick>(s?.13:.38)&&(this.audioTick=0,this.tick(s?320:230,.035,.05));for(const h of[this.sellCard,this.buyCard,this.receipt,this.receipt2]){const u=this.hover===h.userData.id;h.traverse(d=>{d.material?.emissiveMap&&(d.material.emissiveIntensity=u?.26:.14)})}const c=this.hint();Bt("#filmHint").textContent!==c&&(Bt("#filmHint").textContent=c)}render(){if(this.syncTouchControls(),this.renderer.isWebGLRenderer){this.fpsFrames++;const t=performance.now();t-this.fpsStart>1500&&(Bt("#filmHud").dataset.fps=String(Math.round(this.fpsFrames*1e3/(t-this.fpsStart))),this.fpsStart=t,this.fpsFrames=0)}this.composer?this.composer.render():this.renderer.render(this.scene,this.camera),this.renderer.info&&(Bt("#filmHud").dataset.calls=String(this.renderer.info.render.calls),Bt("#filmHud").dataset.geometries=String(this.renderer.info.memory.geometries),Bt("#filmHud").dataset.textures=String(this.renderer.info.memory.textures))}dispose(){if(this.composer){for(const t of this.composer.passes)t.dispose?.();this.composer.dispose(),this.composer=null}this.sun?.shadow?.dispose?.(),this.scene&&(this.scene.traverse(t=>t.geometry?.dispose()),this.scene=null);for(const t of this.materials)t.dispose();for(const t of this.textures)t.dispose();this.materials=[],this.textures=[],this.targets=[],this.actors=[],this.motions=[],this.renderer.renderLists?.dispose(),this.savedPixelRatio&&this.renderer.setPixelRatio(this.savedPixelRatio),this.renderer.shadowMap&&(this.renderer.shadowMap.enabled=this.savedShadow??!1)}}const Ve=n=>document.querySelector(n),Je=Qn.clamp,Ke=Qn.lerp,$e=n=>(n=Je(n,0,1),n*n*(3-2*n)),rc="./",nn=15062965,sn=5584420,j0=12690018;class K0 extends rh{open(t){this.work=z0(t),this.phase=0,this.language="zh",this.page=0,this.english=[],this.notePages=ho(this.work.notes),this.originalPages=[],this.sourceRequest=(this.sourceRequest||0)+1;const e=this.sourceRequest;super.open(),this.setState("arrival"),Ve("#filmTitle").textContent=this.work.phases[0].title,Ve("#world").setAttribute("aria-label",this.work.title+"：直接触碰物件的连续三维故事"),typeof window<"u"&&fetch(`${rc}manuscripts/${String(t).padStart(2,"0")}.json`).then(i=>{if(!i.ok)throw Error("Manuscript unavailable");return i.json()}).then(i=>{e===this.sourceRequest&&(this.english=i.paragraphs,this.originalPages=ho(this.english,!0),this.state==="book"&&this.language==="en"&&this.showBook(0))}).catch(()=>{e===this.sourceRequest&&(this.manuscriptError=!0)})}build(){this.scene=new Ro,this.scene.background=new Ft(1057057),this.scene.fog=new Ds(1518123,.022),this.targets=[],this.actors=[],this.materials=[],this.textures=[],this.matCache=new Map,this.motions=[],this.lastWidth=0,this.sceneStats=null,this.progress=0,this.dispatching=!1,this.bales=null,this.certificates=null,this.quotePanel=null,this.boardWritten=!1,this.stitch=null,this.displayFlip=0,this.held=null,this.drag=null,this.paperLoops=[],this.environment=new Wt,this.scene.add(this.environment),this.dynamic=new Wt,this.scene.add(this.dynamic),this.wood=this.mat(12363146,{map:this.woodTexture()}),this.brass=this.mat(j0,{metalness:.6,roughness:.3}),this.scene.add(new No(11915734,3155482,1.6)),this.sun=new Xc(16767138,3.1),this.sun.position.set(-5,9,2),this.sun.castShadow=!this.lightweight,this.sun.shadow.mapSize.set(512,512),this.sun.shadow.camera.left=-10,this.sun.shadow.camera.right=10,this.sun.shadow.camera.top=10,this.sun.shadow.camera.bottom=-10,this.sun.shadow.normalBias=.035,this.scene.add(this.sun),this.lampLight=new Cs(16763532,10,14),this.lampLight.position.set(-2,3,1),this.scene.add(this.lampLight),this.makeSpace(this.work.phases[this.phase].space),this.makeObject(this.work.phases[this.phase].object),this.home=this.prop.position.clone(),this.homeRotation=this.prop.rotation.clone(),this.propBase=this.prop.position.clone(),this.target(this.prop,"object");const t=new Wt;t.position.set(-2.7,0,1.2),this.environment.add(t),this.box(t,1.5,.1,1,0,.9,0,this.wood);for(const s of[-.6,.6])this.box(t,.08,.9,.8,s,.4,0,this.wood);this.book=this.card(["私人记述","保存在这里的细节","拉里 · 利文斯顿"],["PRIVATE ACCOUNT"]),this.book.position.set(-2.7,.97,1.2),this.book.scale.setScalar(.9),this.scene.add(this.book),this.bookPage=this.book.userData.front,this.target(this.book,"book"),this.bookmark=new Wt,this.bookmark.position.set(-2.08,1.03,1.2),this.scene.add(this.bookmark),this.placard(this.bookmark,["另一册","English"],.28,.18,0,0,0).rotation.x=-Math.PI/2,this.target(this.bookmark,"language"),this.exit=new Wt,this.exit.position.set(3.5,0,3.2),this.scene.add(this.exit),this.box(this.exit,1.35,2.9,.1,0,1.45,0,this.wood),this.placard(this.exit,["回到房子"],1,.3,0,1.7,.07),this.target(this.exit,"door"),this.nextDoor=new Wt,this.nextDoor.position.set(-3.5,0,3.2),this.scene.add(this.nextDoor),this.box(this.nextDoor,1.35,2.9,.1,0,1.45,0,this.wood),this.placard(this.nextDoor,[this.work.n===24?"回到房子":"走向下一段往事"],1.2,.3,0,1.7,.07),this.target(this.nextDoor,"next"),this.hand=this.buildHand(),this.camera.add(this.hand),this.scene.add(this.camera);const e=new Ie,i=[];for(let s=0;s<160;s++)i.push(s*37%100/10-5,s*17%100/25,s*29%100/8-6);if(e.setAttribute("position",new pe(i,3)),this.dust=new Po(e,new Rr({color:15325617,size:.02,transparent:!0,opacity:.3,depthWrite:!1})),this.materials.push(this.dust.material),this.scene.add(this.dust),this.renderer.isWebGLRenderer){const s=new Wt;s.position.set(-4.8,2.4,-3),s.rotation.y=.45,this.environment.add(s),this.box(s,2.5,1.55,.12,0,0,0,this.wood);const r=new Ku().load(`${rc}art/event-${String(this.work.n).padStart(2,"0")}.jpg`);r.colorSpace=De,this.textures.push(r);const a=new jn({map:r});this.materials.push(a);const o=new ee(new Pi(2.3,1.35),a);o.position.z=.08,s.add(o),this.savedPixelRatio=this.renderer.getPixelRatio(),this.savedShadow=this.renderer.shadowMap.enabled,this.renderer.setPixelRatio(Ps(innerWidth,innerHeight,this.lightweight)),this.renderer.shadowMap.enabled=!this.lightweight,this.lightweight||(this.composer=new ih(this.renderer),this.composer.addPass(new nh(this.scene,this.camera)),this.composer.addPass(new mn(new bt(innerWidth,innerHeight),.2,.3,.8)),this.composer.addPass(new sh)),Ve("#filmHud").dataset.quality=this.lightweight?"light":"full",this.fpsFrames=0,this.fpsStart=performance.now()}this.sceneStats=th(this.environment,new Set([this.quotePanel]))}makeSpace(t){const e=this.environment,i=this.mat(1522484);this.mat(nn);const s=this.mat(2504249,{metalness:.5});if(this.space=t,t==="harbor"){this.box(e,30,.1,30,0,-.25,-6,this.mat(2181977,{metalness:.4,roughness:.18}));for(let r=-1;r<6;r+=.4)this.box(e,5,.12,.37,0,0,r,this.wood);for(let r=0;r<12;r++){const a=this.box(this.dynamic,5,.015,.08,-5+r*.9,-.15,-5-r*.7,8893365);this.motions.push(o=>{a.position.y=-.15+Math.sin(o+r)*.035,a.scale.x=1+Math.sin(o*.7+r)*.2})}for(let r=0;r<5;r++){const a=new Wt;a.position.set(-7+r*3,0,-5-r%2*3),e.add(a),this.box(a,2.1,.35,.75,0,.18,0,sn),this.cylinder(a,.025,2.8,0,1.7,0,this.brass),this.placard(a,[""],1.1,1.6,.58,2,0).material.color.setHex(14208938),a.userData.keepDynamic=!0,this.motions.push(l=>a.rotation.z=Math.sin(l*.65+r)*.018)}this.sun.color.setHex(this.work.n===24?16759935:13034221)}else{for(let r=-7;r<7;r+=.5)this.box(e,12,.1,.47,0,-.08,r,this.wood);if(t!=="street"&&t!=="rail"&&t!=="station"){this.box(e,12,5,.15,0,2.4,-6,i);for(const r of[-6,6])this.box(e,.15,5,13,r,2.4,0,i);for(const r of[-3,0,3]){this.box(e,1.8,2.7,.09,r,2.7,-5.85,7905186);for(let a=0;a<3;a++)this.box(e,.07,2.7,.12,r-.8+a*.8,2.7,-5.72,this.wood);this.box(e,1.9,.07,.12,r,2.7,-5.7,this.wood)}}}if(["board","counter","wire"].includes(t)){this.box(e,8,1.2,.7,0,.6,-3,this.wood),this.box(e,8.2,.1,.9,0,1.25,-3,this.wood),this.quotePanel=this.placard(e,["正在等待报价","判断还没有成为成交"],3.5,1.8,-3,2.9,-5.6,!0);for(let r=0;r<4;r++)this.actors.push(this.person(-2+r*1.4,0,-4.1,r));if(t==="wire")for(let r=0;r<7;r++){const a=this.box(e,.015,.015,8,-3+r,3.4,-.5,this.brass);a.rotation.x=.12}}if(["station","rail"].includes(t)){for(const r of[-3.5,3.5]){this.box(e,.065,.09,30,r,-.01,-6,s);for(let a=-13;a<7;a+=.6)this.box(e,1.3,.1,.17,r,0,a,this.wood)}this.train=new Wt,this.train.position.set(3.5,0,-7),e.add(this.train),this.box(this.train,2.2,2.2,8,0,1.6,0,2375734);for(let r=-3;r<4;r+=1.2){this.box(this.train,2.25,.65,.6,0,2.1,r,9744809);for(const a of[-1,1])this.cylinder(this.train,.38,.15,a,.45,r,s).rotation.z=Math.PI/2}for(const r of[-5,5])this.box(e,.16,4,.16,r,2,-2,this.brass);this.box(e,11,.2,5,0,4,-2,s),this.train.userData.keepDynamic=!0,this.motions.push(r=>{this.train.position.z=-7+(this.state==="perform"?Math.min(10,this.time*.3):["epilogue","transition"].includes(this.state)?10:Math.sin(r*.2)*.1)})}if(t==="study"){for(const a of[-4,4])for(let o=.4;o<4;o+=.75){this.box(e,1.3,.07,3,a,o,-2,this.wood);for(let l=0;l<10;l++)this.box(e,.09,.5,.5,a-.48+l*.105,o+.29,-1.3+l%3*-.5,5004103)}const r=this.person(1.6,0,-2,2);this.actors.push(r)}if(t==="cotton"||t==="grain"){this.bales=[];for(let r=0;r<24;r++){const a=this.box(e,.72,.55,.8,-4+r%4*.85,.3+Math.floor(r/8)*.57,-2-Math.floor(r/4)%2,t==="cotton"?nn:12097357);a.userData.keepDynamic=!0,this.bales.push(a)}for(let r=0;r<3;r++)this.box(e,.2,5,.2,-4+r*4,2.4,-4,this.wood);this.box(e,10,.15,.4,0,4,-4,this.wood)}if(t==="industry"){for(let r=0;r<5;r++)this.cylinder(e,.65,2.8,-4+r*2,1.4,-3,s),this.cylinder(e,.12,5,-4+r*2,2.5,-3,this.brass);for(let r=0;r<20;r++){const a=this.sphere(this.dynamic,.025,-3+r*.23,1,-2,16761205);this.motions.push(o=>{a.position.y=1+(o*.7+r*.13)%2,a.position.x=-3+r*.23+Math.sin(o+r)*.2})}}if(t==="street"){for(const r of[-5,5])for(let a=0;a<5;a++){const o=3+a%3;this.box(e,2,o,1.8,r,o/2,-5+a*2,3887954),this.placard(e,["BANK"],1,.45,r,2.2,-3.98+a*2,!0)}for(let r=0;r<8;r++)this.actors.push(this.person(-3+r*.8,0,-3+r%3,r))}if(t==="theatre"){this.box(e,10,.4,4,0,.2,-2,this.wood);for(const r of[-4.7,4.7])this.box(e,1,4,.3,r,2.3,-4,6565160);this.certificates=[];for(let r=0;r<24;r++){const a=this.box(this.dynamic,.32,.02,.45,-3+r%6,.55+Math.floor(r/6)*.06,-2.2,nn);this.certificates.push(a)}for(let r=0;r<6;r++)this.actors.push(this.person(-3+r*1.2,0,2.5,r))}if(t==="press")for(let r=0;r<3;r++){const a=new Wt;a.position.set(-4+r*4,0,-3),e.add(a),this.box(a,1.5,1.1,1,0,.6,0,s);const o=this.cylinder(a,.22,1.4,0,1.3,0,this.brass);o.rotation.z=Math.PI/2,o.userData.keepDynamic=!0,this.motions.push(l=>o.rotation.x=l*2),this.placard(a,["业绩出色","前景乐观"],1.1,.75,0,1.7,.2)}if(t==="tailor"){this.box(e,2,.12,1,0,.95,-2,this.wood);const r=this.box(e,1.7,.02,.9,0,1.03,-1.9,9327205);r.userData.keepDynamic=!0,this.motions.push(a=>r.rotation.y=Math.sin(a*.3)*.01),this.actors.push(this.person(1.4,0,-2,2))}}makeObject(t){if(this.kind=t,this.prop=new Wt,this.prop.position.set(0,1,0),this.scene.add(this.prop),this.isPaper=["telegram","newspaper","report","contract","letter","order","tickets"].includes(t),this.mechanism=null,this.isPaper){if(this.scene.remove(this.prop),this.prop=this.card([this.work.phases[this.phase].title,...this.work.phases[this.phase].cue.split(" · ")],["记录留下的另一面",...this.work.phases[this.phase].beats.slice(0,1).flatMap(e=>{const i=[];for(let s=0;s<Math.min(e.length,68);s+=17)i.push(e.slice(s,s+17));return i})]),this.prop.position.set(0,1.05,0),this.scene.add(this.prop),t==="tickets")for(let e=0;e<6;e++)this.box(this.environment,.46,.01,.65,.55+e*.12,1+e*.008,.15,13078409)}else if(t==="suitcase"){this.box(this.prop,1.25,.35,.7,0,0,0,sn);const e=new Wt;e.position.set(0,.16,-.35),this.prop.add(e),this.box(e,1.25,.08,.7,0,.02,.35,7292977),this.mechanism=e,this.placard(this.prop,["NEW YORK","$2,500"],.55,.35,0,.19,0).rotation.x=-Math.PI/2}else if(t==="safe"||t==="drawer"){this.box(this.prop,1.2,1.15,.8,0,.05,-.3,2571318);const e=new Wt;e.position.set(-.6,.05,.12),this.prop.add(e),this.box(e,1.15,1.05,.09,.57,0,0,this.brass);const i=this.cylinder(e,.18,.07,.6,0,.08,sn);i.rotation.x=Math.PI/2,this.mechanism=e,this.closingSafe=t==="safe"&&/合上|锁|关/.test(this.work.phases[this.phase].action),this.closingSafe&&(e.rotation.y=-1.6),this.placard(this.prop,[t==="safe"?"不再伸手":"现金"],.7,.3,0,.7,.16)}else if(t==="clock")this.cylinder(this.prop,.55,.18,0,.5,0,this.brass).rotation.x=Math.PI/2,this.placard(this.prop,["Ⅻ","Ⅸ     Ⅲ","Ⅵ"],.9,.9,0,.5,.12),this.mechanism=this.box(this.prop,.035,.4,.04,0,.7,.15,1518632);else if(t==="chair"){this.box(this.prop,.8,.1,.8,0,0,0,this.wood),this.box(this.prop,.8,.9,.1,0,.55,-.35,this.wood);for(const i of[-.3,.3])for(const s of[-.3,.3])this.box(this.prop,.08,.7,.08,i,-.35,s,this.wood);const e=this.person(0,0,-.4,2);this.actors.push(e)}else if(t==="phone"){this.cylinder(this.prop,.3,.1,0,0,0,this.brass),this.cylinder(this.prop,.045,.7,0,.35,0,this.brass);const e=new Wt;e.position.set(.2,.7,0),this.prop.add(e),this.cylinder(e,.06,.3,0,0,0,sn);for(const i of[-.18,.18])this.cylinder(e,.11,.08,0,i,0,sn);this.mechanism=e}else if(t==="wheel"){this.cylinder(this.prop,.48,.06,0,.4,0,this.brass).rotation.x=Math.PI/2;for(let e=0;e<8;e++){const i=this.box(this.prop,.05,.7,.05,0,.4,.04,sn);i.rotation.z=e*Math.PI/4}this.mechanism=this.prop}else if(t==="coin"||t==="weight")for(let e=0;e<(t==="coin"?5:3);e++)this.cylinder(this.prop,.16,.06,0,e*.065,0,this.brass);else if(t==="cotton"||t==="grain"||t==="coffee"){this.box(this.prop,.9,.55,.8,0,.2,0,t==="cotton"?nn:9664072);for(const e of[-.35,.35])this.box(this.prop,.035,.6,.84,e,.2,0,sn);this.placard(this.prop,[t==="cotton"?"棉花":t==="grain"?"玉米 / 燕麦":"COFFEE"],.6,.3,0,.22,.415)}else if(t==="cat"){this.sphere(this.prop,.18,0,.2,0,1186584).scale.set(1,1.6,.6),this.sphere(this.prop,.13,0,.52,0,1186584);for(const e of[-.08,.08]){const i=new ee(new Cr(.055,.16,8),this.mat(1186584));i.position.set(e,.64,0),this.prop.add(i),this.sphere(this.prop,.014,e*.5,.53,.11,15587213)}}else if(t==="oil"){this.cylinder(this.prop,.38,1,0,.35,0,2570040);for(const e of[0,.6])this.cylinder(this.prop,.4,.035,0,e,0,this.brass)}else if(t==="mirror"||t==="glass"){for(const e of[-.65,.65])this.box(this.prop,1.05,1.5,.08,e,.5,-.05,this.wood),this.placard(this.prop,[e<0?"希望":"恐惧"],.95,1.35,e,.5,.02).material.color.setHex(e<0?9088176:12691334);this.mechanism=this.prop}else if(t==="curtain")this.box(this.prop,2.2,2.2,.12,0,.5,0,7748151),this.mechanism=this.prop;else if(t==="needle")this.box(this.prop,.9,.04,.7,0,0,0,9526380),this.mechanism=this.cylinder(this.prop,.014,.4,0,.3,0,this.brass),this.mechanism.rotation.z=.35,this.stitch=this.box(this.prop,.6,.008,.009,0,.026,0,nn),this.stitch.scale.x=.01;else if(t==="wire")this.box(this.prop,1,.1,.6,0,0,0,this.wood),this.mechanism=this.box(this.prop,.08,.08,.55,0,.15,0,this.brass);else if(t==="chalk")this.mechanism=this.cylinder(this.prop,.035,.45,0,0,0,nn),this.mechanism.rotation.z=Math.PI/2;else if(t==="transfer"){for(const e of[-.6,.6])this.box(this.prop,.7,.5,.6,e,.2,0,e<0?12163664:nn);this.mechanism=this.box(this.prop,.4,.04,.3,-.6,.55,0,this.brass)}else this.box(this.prop,.9,.08,.6,0,0,0,this.wood),this.mechanism=this.box(this.prop,.05,.8,.05,0,.4,0,this.brass),this.sphere(this.prop,.1,0,.85,0,2439732);if(["chalk","coin","needle"].includes(t)){const e=new jn({transparent:!0,opacity:0,depthWrite:!1});this.materials.push(e);const i=new ee(new Yi(.85,.24,.4),e);i.position.y=.08,this.prop.add(i)}["chair","mirror","curtain"].includes(t)||this.box(this.environment,1.6,.1,1.1,0,.86,0,this.wood),this.slot=new Wt,this.slot.position.set(0,1.35,-2),this.scene.add(this.slot),this.box(this.slot,1,.08,.65,0,0,0,this.brass),this.placard(this.slot,["送到这里"],.8,.3,0,.15,-.1),this.target(this.slot,"slot"),this.slot.visible=this.work.phases[this.phase].mode==="dispatch"}setState(t){this.state=t,this.time=0,this.lookX=0,this.lookY=0,Ve("#filmHud").dataset&&(Ve("#filmHud").dataset.state=t),Ve("#filmHint").textContent=this.hint(),t==="perform"&&(this.beat=0,this.beatTime=0,this.displayFlip=this.flip,this.tick(170,.06,.1)),t==="epilogue"&&(this.held=null,this.hand.visible=!1,this.prop.position.copy(this.home),this.prop.rotation.copy(this.homeRotation),this.prop.scale.setScalar(1),this.freePos.set(0,1.65,4),this.freeYaw=0,this.freePitch=-.17)}hint(){return this.state==="wait"?this.isPaper?"拿起眼前的纸 · 翻开另一面":"触碰眼前的"+({chalk:"粉笔",chair:"椅子",clock:"钟",phone:"听筒",wheel:"船舵",cat:"黑猫",needle:"针",safe:"柜门",cotton:"棉花包",suitcase:"箱盖"}[this.kind]||"物件"):this.state==="holding"?this.work.phases[this.phase].mode==="dispatch"?"把手里的物件递到铜盘 · 拖放或按 E":"拖动翻纸，读它的另一面 · 也可按住 E":this.state==="working"?this.work.phases[this.phase].action+" · 拖动物件，或按住 E":this.state==="epilogue"?"桌上账册可以翻阅。拖动环顾，WASD 走动。两扇门通向下一段往事与房子；R 重走这段往事。":this.state==="book"?"点右页往后、左页往前 · E 翻页 / Shift+E 回翻 · L 换册 · 空格放回":""}hit(t,e){if(this.state==="holding"&&this.work.phases[this.phase].mode==="dispatch"&&this.held){this.held.visible=!1;const i=super.hit(t,e);return this.held.visible=!0,i}return super.hit(t,e)}pointerDown(t,e){if(this.paused)return;this.initAudio();const i=this.hit(t,e);if(this.state==="arrival"&&i==="object"&&this.setState("wait"),this.drag={x:t,y:e,lastX:t,lastY:e,id:i,total:0},this.state==="book"){if(i==="language"){this.switchBook();return}if(i==="book"){this.drag.bookGesture=!0;return}this.putBook();return}if(i==="next"&&this.state==="epilogue"){this.onNext?.(this.work.n+1);return}if(i==="door"&&this.state==="epilogue"){this.onExit?.();return}if(i==="book"&&this.state==="epilogue"){this.pick(this.book),this.setState("book"),this.showBook(0);return}if(i==="language"&&this.state==="epilogue"){this.pick(this.book),this.setState("book"),this.switchBook();return}if(this.state==="holding"&&i==="slot"){this.beginPerformance();return}this.state!=="wait"||i!=="object"||(this.progress=0,this.isPaper||this.work.phases[this.phase].mode==="dispatch"?(this.pick(this.prop),this.setState("holding")):(this.setState("working"),["examine","stamp"].includes(this.work.phases[this.phase].mode)&&this.beginPerformance()))}pointerMove(t,e){if(this.aim.set(Je(t/innerWidth*2-1,-1,1),Je(e/innerHeight*2-1,-1,1)),this.paused||!this.drag)return;if(this.state==="book"&&this.drag.bookGesture){this.drag.lastX=t,this.drag.lastY=e;return}const i=t-this.drag.lastX,s=e-this.drag.lastY;this.drag.lastX=t,this.drag.lastY=e,this.drag.total+=Math.hypot(i,s),this.state==="holding"&&this.work.phases[this.phase].mode!=="dispatch"?(this.flip=Je(this.flip+(Math.abs(i)+Math.abs(s)*.5)/(innerWidth*.4),0,1),this.flip>.95&&(this.flip=1,this.beginPerformance())):this.state==="working"?(this.progress=Je(this.progress+(Math.abs(i)+Math.abs(s))/(innerHeight*.4),0,1),this.progress>.95&&this.beginPerformance()):this.held||(this.state==="epilogue"?(this.freeYaw-=i*.003,this.freePitch=Je(this.freePitch-s*.002,-.65,.65)):(this.lookX=Je(this.lookX-i*.003,-.7,.7),this.lookY=Je(this.lookY+s*.002,-.3,.3)))}pointerUp(t,e){if(this.paused){this.drag=null;return}if(this.state==="book"&&this.drag?.bookGesture){this.finishBookGesture(t,e);return}this.state==="holding"&&this.work.phases[this.phase].mode==="dispatch"&&this.hit(t,e)==="slot"&&this.beginPerformance(),this.drag=null}beginPerformance(){this.progress=1,this.dispatching=this.work.phases[this.phase].mode==="dispatch",this.dispatchStart=this.prop.position.clone(),this.setState("perform"),this.drag=null}keyDown(t){if(t.code==="Escape"){this.onExit?.();return}if(t.code==="KeyP"){t.preventDefault(),this.setPaused(!this.paused);return}if(!this.paused){if(t.code==="KeyR"){this.close(),this.open(this.work.n);return}if(this.state==="epilogue"&&["KeyW","KeyA","KeyS","KeyD"].includes(t.code)){this.keys.add(t.code),t.preventDefault();return}if(t.code==="KeyL"&&["book","epilogue"].includes(this.state)){t.preventDefault(),this.state==="epilogue"&&(this.pick(this.book),this.setState("book")),this.switchBook();return}if(t.code==="Space"&&this.state==="book"){t.preventDefault(),this.putBook();return}if(["KeyE","Space"].includes(t.code)){if(t.preventDefault(),t.repeat)return;this.initAudio(),this.keyHeld=!0,this.state==="book"?this.showBook(this.page+(t.shiftKey?-1:1)):this.state==="epilogue"?(this.pick(this.book),this.setState("book"),this.showBook(0)):this.state==="wait"?(this.progress=0,this.isPaper||this.work.phases[this.phase].mode==="dispatch"?(this.pick(this.prop),this.setState("holding")):(this.setState("working"),["examine","stamp"].includes(this.work.phases[this.phase].mode)&&this.beginPerformance())):this.state==="holding"&&this.work.phases[this.phase].mode==="dispatch"&&this.beginPerformance()}}}keyUp(t){["KeyE","Space"].includes(t.code)&&(this.keyHeld=!1),this.keys?.delete(t.code)}switchBook(){this.language=this.language==="en"?"zh":"en",this.showBook(0)}showBook(t){const e=this.language==="en"?this.originalPages:this.notePages;this.page=Je(t,0,Math.max(0,e.length-1));const i=e[this.page]||[this.manuscriptError?"另一册暂时没有送到。":"另一册正在送来。","按 L 返回私人记述。"],s=this.bookPage.material.map,r=this.canvasTexture((a,o,l)=>{a.fillStyle="#e5d6b4",a.fillRect(0,0,o,l),a.strokeStyle="#917b56",a.lineWidth=3,a.strokeRect(35,35,o-70,l-70),a.fillStyle="#25382d",a.textAlign="center",a.font="28px Georgia",a.fillText(this.language==="en"?"PRIVATE ACCOUNT":"私人记述",o/2,90),a.textAlign="left",a.font=(this.language==="en"?"36px Georgia":"48px Microsoft YaHei")+",serif",i.forEach((c,h)=>a.fillText(c,82,195+h*(this.language==="en"?82:100),o-164)),a.textAlign="center",a.font="25px Georgia",a.fillText(`${this.page+1} / ${e.length||1}`,o/2,l-60)},1024,1447);this.bookPage.material.map=r,this.bookPage.material.emissiveMap=r,this.bookPage.material.emissiveIntensity=.22,s&&(s.dispose(),this.textures=this.textures.filter(a=>a!==s)),this.flip=0,this.tick(210,.045,.06)}putBook(){this.held=null,this.hand.visible=!1,this.book.position.set(-2.7,.97,1.2),this.book.rotation.set(0,0,0),this.book.scale.setScalar(.9),this.setState("epilogue")}update(t){this.active&&(this.resize(),!this.paused&&t>0&&(this.time+=t,this.elapsed+=t,this.updateState(t),this.updateScene(t),this.narration()),this.render())}updateState(t){if(this.state==="arrival"&&this.time>8&&this.setState("wait"),this.keyHeld&&this.state==="working"&&(this.progress=Je(this.progress+t*.6,0,1),this.progress>=1&&this.beginPerformance()),this.keyHeld&&this.state==="holding"&&!this.dispatching&&this.work.phases[this.phase].mode!=="dispatch"&&(this.flip=Je(this.flip+t*.65,0,1),this.flip>=1&&this.beginPerformance()),this.state==="perform"){this.beatTime+=t;const e=this.work.phases[this.phase].beats[this.beat];this.beatTime>Math.max(5.5,e.length/6.5)&&(this.beatTime=0,this.beat++,this.beat>=this.work.phases[this.phase].beats.length&&(this.held=null,this.hand.visible=!1,this.setState(this.phase<2?"transition":"epilogue")))}this.state==="transition"&&this.time>1.2&&(this.dispose(),this.phase++,this.build(),this.setState("arrival"),Ve("#filmTitle").textContent=this.work.phases[this.phase].title)}narration(){const t=this.work.phases[this.phase];Ve("#filmCaption").textContent=this.state==="perform"?t.beats[Math.min(this.beat,t.beats.length-1)]:this.state==="arrival"||this.state==="wait"?t.title:this.state==="epilogue"?this.work.chapter.quote:"",Ve("#filmHint").textContent=this.hint();const e=this.state==="perform"&&!this.held&&this.beatTime>1;Ve("#filmThought").textContent=e?t.cue:"",Ve("#filmFact").textContent=e&&this.beatTime>2.2?["观察留下了什么","指令改变了什么","结果没有替我省掉下一次判断"][this.phase]:"",Ve("#filmThought").style.opacity=String($e(this.beatTime/1.2)),Ve("#filmFact").style.opacity="1"}updateScene(t){const e=this.state,i=this.time,s=this.progress;for(const c of this.motions)c(this.elapsed);for(const c of this.actors){const h=["street","theatre"].includes(this.space),u=this.elapsed*(e==="perform"?2:1)+c.seed;c.head.rotation.y=Math.sin(u*.4)*.17,c.root.position.x=c.base.x+(h?Math.sin(u*.3)*.5:0);for(let d=0;d<2;d++)c.arms[d].arm.rotation.x=-.4+Math.sin(u+d*Math.PI)*.15,c.arms[d].fore.rotation.x=-.4-Math.sin(u)*.12,c.legs[d].rotation.x=h?Math.sin(u+d*Math.PI)*.25:0}if(this.mechanism){if(this.kind==="suitcase"&&(this.mechanism.rotation.x=Ke(this.mechanism.rotation.x,-s*1.8,1-Math.exp(-t*6))),["safe","drawer"].includes(this.kind)&&(this.mechanism.rotation.y=Ke(this.mechanism.rotation.y,-1.6*(this.closingSafe?1-s:s),1-Math.exp(-t*6))),this.kind==="clock"&&(this.mechanism.rotation.z-=t*(e==="perform"?.7:.04)),["lever","gate","wire"].includes(this.kind)&&(this.mechanism.rotation.z=Ke(.5,-.5,s)),this.kind==="phone"&&(this.mechanism.position.y=Ke(this.mechanism.position.y,.7+s*.3,1-Math.exp(-t*6)),this.mechanism.rotation.z=Ke(this.mechanism.rotation.z,s*.5,1-Math.exp(-t*6))),this.kind==="wheel"&&(this.prop.rotation.z=s*1.5+Math.sin(this.elapsed*.3)*.06),this.kind==="transfer"&&(this.mechanism.position.x=Ke(-.6,.6,$e(s))),this.kind==="curtain"&&(this.prop.position.y=Ke(this.prop.position.y,1+s*2,1-Math.exp(-t*5))),this.kind==="needle"){const c=e==="perform"?$e(i/18):s;this.mechanism.position.x=Ke(-.3,.3,c),this.mechanism.position.y=.2+Math.sin(this.elapsed*8)*.1,this.stitch&&(this.stitch.scale.x=Math.max(.01,c),this.stitch.position.x=-.3+c*.3)}this.kind==="chalk"&&(this.mechanism.position.x=Ke(-.35,.35,s),this.mechanism.position.z=Math.sin(this.elapsed*1.3)*.15)}if(e==="perform"&&this.quotePanel&&!this.boardWritten&&i>3){this.boardWritten=!0;const c=this.quotePanel.material.map,h=this.work.phases[this.phase].cue.split(" · "),u=this.canvasTexture((d,p,g)=>{d.fillStyle="#172d27",d.fillRect(0,0,p,g),d.fillStyle="#e5dab9",d.textAlign="center",d.font="42px Microsoft YaHei",h.forEach((x,m)=>d.fillText(x,p/2,85+m*70,p-70))},768,384);this.quotePanel.material.map=u,c&&(c.dispose(),this.textures=this.textures.filter(d=>d!==c))}if(e==="perform"&&this.kind==="chalk"){const c=$e(i/2);this.prop.position.lerpVectors(this.home,new I(-3+Math.sin(i*2)*.65,2.8+Math.cos(i*1.5)*.2,-5.45),c)}e==="perform"&&this.bales&&this.kind==="cotton"&&this.bales.forEach((c,h)=>c.position.y=.3+Math.floor(h/8)*.57+$e(i/25)*(h%3)*.7),e==="perform"&&this.certificates&&this.certificates.forEach((c,h)=>{const u=$e((i-h*.4)/12);c.position.z=Ke(-2.2,2.1,u),c.rotation.y=u*.4});const r=this.desiredPosition.set(0,1.65,4.5),a=this.desiredLook.set(0,1.25,0);if(e==="arrival"&&(r.z=Ke(6,3.8,$e(i/8))),e==="perform"){const c=Math.max(30,this.work.phases[this.phase].beats.reduce((u,d)=>u+Math.max(5.5,d.length/6.5),0)),h=$e(i/c);r.set(Math.sin(h*Math.PI*1.5)*2.2,1.7+Math.sin(h*Math.PI)*.4,3.5+h*1.2),a.set(Ke(0,-.8,h),1.4,-.5)}if((e==="book"||this.held)&&(r.set(0,1.65,3.8),a.set(0,1.4,0)),e==="epilogue"){const c=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),h=(this.keys.has("KeyS")?1:0)-(this.keys.has("KeyW")?1:0),u=t*1.5/(Math.hypot(c,h)||1);this.freePos.x=Je(this.freePos.x+(c*Math.cos(this.freeYaw)-h*Math.sin(this.freeYaw))*u,-4.8,4.8),this.freePos.z=Je(this.freePos.z+(c*Math.sin(this.freeYaw)+h*Math.cos(this.freeYaw))*u,.7,5.5),r.copy(this.freePos),a.set(r.x+Math.sin(this.freeYaw)*3,r.y+Math.sin(this.freePitch)*3,r.z-Math.cos(this.freeYaw)*3)}a.x+=this.lookX*2,a.y+=this.lookY;const o=1-Math.exp(-t*3);if(this.cameraPosition.lerp(r,o),this.cameraLook.lerp(a,o),this.camera.position.copy(this.cameraPosition),this.camera.lookAt(this.cameraLook),this.held){const c=innerWidth<600?.68:1.04,h=new I(this.aim.x*.035,-.03,-.85);this.camera.localToWorld(h),this.held.position.lerp(h,1-Math.exp(-t*8)),this.held.quaternion.copy(this.camera.quaternion),this.held.rotateX(Math.PI/2),this.displayFlip=Ke(this.displayFlip,this.flip,1-Math.exp(-t*12)),this.held.rotateZ(this.displayFlip*Math.PI),this.held.scale.setScalar(c),this.hand.position.set(.21,-.36,-.82),this.hand.visible=!0,this.dispatching&&e==="perform"?(this.held.position.lerpVectors(this.dispatchStart,new I(0,1.4,-2),$e(i/2)),i>2&&(this.held=null,this.hand.visible=!1)):e==="perform"&&i>12&&(this.held.position.copy(this.home),this.held.rotation.copy(this.homeRotation),this.held.scale.setScalar(1),this.held=null,this.hand.visible=!1)}this.dust.rotation.y=this.elapsed*.01,this.audioTick+=t,this.audioTick>.45&&(this.audioTick=0,this.tick(["harbor","study"].includes(this.space)?130:260,.04,.025));const l=e==="transition"?1-$e(i/1.1):e==="arrival"?$e(i/.8):1;this.sun.intensity=3.1*l,this.lampLight.intensity=10*l,this.scene.background.setScalar(.065*l),Ve("#sceneFade").style.opacity=String(e==="transition"?$e(i/1.1):e==="arrival"?1-$e(i/.8):0)}close(){this.sourceRequest=(this.sourceRequest||0)+1,super.close()}}const ac=n=>document.querySelector(n);class $0{constructor(t,{onClose:e}){this.onClose=e,this.active=!1,this.pilot=new rh(t,{onExit:()=>this.close()}),this.novel=new K0(t,{onExit:()=>this.close()}),this.film=this.pilot,this.pilot.onNext=()=>this.open(4),this.novel.onNext=i=>i>24?this.close():this.open(i)}open(t){if(!(!Number.isInteger(t)||t<1||t>24)){this.film.active&&this.film.close(),this.chapter=t,this.film=t===3?this.pilot:this.novel,this.active=!0,ac("#episode").hidden=!0,document.body.classList.add("in-story");try{this.film.open(t)}catch(e){throw this.close(),e}}}close(){try{this.film.active&&this.film.close()}finally{this.active=!1,ac("#episode").hidden=!0,document.body.classList.remove("in-story"),this.onClose?.()}}update(t){this.active&&this.film.update(t)}}function Z0(n,{blocked:t,down:e,move:i,up:s,cancel:r}){let a=null;const o=l=>{a===null||l&&l.pointerId!==a||(a=null,r())};return n.addEventListener("pointerdown",l=>{if(!(t()||a!==null||l.button>0)){a=l.pointerId;try{n.setPointerCapture(a)}catch{}try{e(l)}catch(c){throw a=null,r(),c}}}),n.addEventListener("pointermove",l=>{t()||a!==null&&a!==l.pointerId||a===null&&l.pointerType!=="mouse"||i(l)}),n.addEventListener("pointerup",l=>{l.pointerId===a&&(a=null,t()?r():s(l))}),n.addEventListener("pointercancel",o),n.addEventListener("lostpointercapture",o),()=>o()}function J0({schedule:n,paint:t,open:e,fail:i,cancel:s}){let r=0,a=!1;return{get pending(){return a},start(o){const l=++r;a=!0,t(o),n(()=>n(()=>{if(l===r){a=!1;try{e(o)}catch(c){i(c,o)}}}))},cancel(){r++,a=!1,s()}}}const pt=n=>document.querySelector(n);let ye,ci,ve,Vt,uo,fo=-2,hn=0,Er=0,Tr=!1,_s=!1,dr=0,rn,xi=null,Gi,ps,kn=!1;const Te=new Set,Dr=[],ko=[],zo=[],ga=new Yc,oc=new qc,Gn=pt("#world");let lc=new bt;const po=[];let $n,Fs=!1,Zn=!1,Lr=1;const vs=br(),Ho=n=>({x:n%2===0?-7:7,z:-Math.floor(n/2)*12}),fn=()=>!!$n?.pending||!!document.querySelector("dialog[open]");function Ur(){Te.clear(),_s=!1,document.pointerLockElement&&document.exitPointerLock()}function vn(n){Ur(),document.querySelectorAll("dialog[open]").forEach(t=>t.close()),pt(n).showModal()}function _a(n){return n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function gn(n){pt("#subtitle").textContent=n,pt("#subtitle").style.opacity="1",clearTimeout(gn.timer),gn.timer=setTimeout(()=>pt("#subtitle").style.opacity="0",8500)}function Q0(){pt("#roomGrid").innerHTML=Ii.map((n,t)=>'<button class="room-card" data-room="'+t+'"><span>0'+(t+1)+" / "+n.period+"</span><h3>"+n.name+"</h3><p>"+n.concept+"</p><small>"+Ns.slice(t*3,t*3+3).map(e=>e.title).join(" · ")+"</small></button>").join(""),pt("#roomGrid").querySelectorAll("button").forEach(n=>n.onclick=()=>eg(Number(n.dataset.room)))}function tg(){pt("#journalList").innerHTML=Ns.map(n=>'<button data-chapter="'+n.n+'"><img loading="lazy" src="./art/event-'+String(n.n).padStart(2,"0")+'.jpg" alt=""><span><b>事件 '+String(n.n).padStart(2,"0")+"</b>"+n.title+" · 连续三维演出<small>"+n.steps.map(t=>t.title).join(" / ")+"</small></span></button>").join(""),pt("#journalList").querySelectorAll("button").forEach(n=>n.onclick=()=>Fi(Number(n.dataset.chapter)))}function eg(n){Vt?.close(),document.querySelectorAll("dialog[open]").forEach(e=>e.close());const t=Ho(n);ye&&(ye.position.set(t.x,1.7,t.z+1.7),hn=0,Er=-.12),fo=-2,ch(),gn(Ii[n].whisper)}function Fi(n){uo=Us.find(t=>t.n===n),uo&&(Ur(),document.querySelectorAll("dialog[open]").forEach(t=>t.close()),Vt&&!Zn?$n.start(n):Go(n))}function ah(){Fs=Zn,Te.clear();try{Vt?.close()}catch(n){console.error(n)}pt("#filmHud").hidden=!0,document.body.classList.remove("in-story","in-film","film-walking"),pt("#bookTools").hidden=!0,pt("#filmAudio").disabled=!1,pt("#filmPause").disabled=!1}function Vo(n,t=Vt?.chapter||uo?.n||1){console.error(n),Lr=t,ah(),Fs=!0,pt("#recoveryMessage").textContent=Zn?"画面暂时中断了。可以先阅读这段记述，或等待画面恢复后重新进入。":"这一段暂时没能展开。可以重新进入，也可以回到房子。",vn("#recovery")}$n=J0({schedule:n=>requestAnimationFrame(n),paint:n=>{Lr=n,pt("#filmHud").hidden=!1,pt("#filmHud").dataset.state="loading",pt("#filmTitle").textContent=Ns.find(t=>t.n===n).title,pt("#filmCaption").textContent="正在走进这段往事…",pt("#filmHint").textContent="",pt("#filmThought").textContent="",pt("#filmFact").textContent="",pt("#filmAudio").disabled=!0,pt("#filmPause").disabled=!0,pt("#filmExit").onclick=()=>$n.cancel(),document.body.classList.add("in-story","in-film")},open:n=>{Fs=!1;try{Vt.open(n)}finally{pt("#filmAudio").disabled=!1,pt("#filmPause").disabled=!1}},fail:Vo,cancel:ah});pt("#recoverScene").onclick=()=>Fi(Lr);pt("#recoverHouse").onclick=()=>{$n.cancel(),pt("#recovery").close()};pt("#recoverRead").onclick=()=>Go(Lr);function Go(n){const t=Us.find(i=>i.n===n),e=Ns.find(i=>i.n===n);pt("#chapterMeta").textContent="原书第 "+t.n+" 章 · 中文原创转述",pt("#chapterTitle").textContent=e.title,pt("#readerBody").innerHTML='<p class="scene-note">原书事件 · 详尽转述</p>'+t.story.map(i=>"<p>"+_a(i)+"</p>").join("")+'<div class="principle"><p class="scene-note">解释与归纳</p><p>'+_a(t.principle)+'</p></div><p class="fine">原文定位：'+e.steps.map(i=>_a(i.anchor)).join("；")+"</p>",vn("#reader"),pt("#reader").scrollTop=0}document.querySelectorAll("[data-close]").forEach(n=>n.onclick=()=>n.closest("dialog").close());document.querySelectorAll("dialog").forEach(n=>{n.addEventListener("close",()=>Te.clear()),n.addEventListener("click",t=>{if(t.target===n){const e=n.getBoundingClientRect();(t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom)&&n.close()}})});pt("#mapBtn").onclick=()=>{Q0(),vn("#atlas")};pt("#journalBtn").onclick=()=>{tg(),vn("#journal")};pt("#helpBtn").onclick=()=>vn("#help");pt("#introMap").onclick=pt("#mapBtn").onclick;pt("#home").onclick=n=>{n.preventDefault(),vn("#intro")};pt("#begin").onclick=()=>{if(new URL(location.href).searchParams.get("sample")==="1901"){Fi(3);return}pt("#intro").close(),gn("走进房间，触碰物件。也可以从事件目录直接进入任何一段故事。")};pt("#sampleBegin").onclick=()=>Fi(3);pt("#bookBegin").onclick=()=>Fi(1);pt("#walkBtn").onclick=async()=>{if(ci)try{await Gn.requestPointerLock()}catch{gn("按住场景拖动，然后用 W A S D 移动。")}};document.addEventListener("pointerlockchange",()=>{Tr=document.pointerLockElement===Gn,pt("#walkBtn").textContent=Tr?"Esc 退出步行模式":"进入步行模式"});pt("#interactBtn").onclick=()=>{xi&&Fi(xi.userData.chapter)};document.addEventListener("keydown",n=>{if(!fn()){if(Vt?.film.active){Vt.film.keyDown(n);return}if(Vt?.active){if(n.code==="Escape"&&Vt.close(),n.target.matches("input,[role=button]"))return;n.code==="ArrowRight"&&Vt.next(),n.code==="ArrowLeft"&&Vt.phase>0&&Vt.showPhase(Vt.phase-1);return}["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(n.code)&&(n.preventDefault(),Te.add(n.code)),n.code.startsWith("Shift")&&Te.add("Shift"),n.code==="KeyM"&&pt("#mapBtn").click(),n.code==="KeyJ"&&pt("#journalBtn").click(),n.code==="KeyE"&&xi&&Fi(xi.userData.chapter)}});document.addEventListener("keyup",n=>{Vt?.film.active&&Vt.film.keyUp(n),Te.delete(n.code),n.code.startsWith("Shift")&&Te.delete("Shift")});window.addEventListener("blur",()=>{Ur(),Vt?.film.active&&Vt.film.setPaused(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&(Ur(),Vt?.film.active&&Vt.film.setPaused(!0))});const Wo=Z0(Gn,{blocked:fn,down:n=>{if(!fn()){if(Vt?.film.active){Vt.film.pointerDown(n.clientX,n.clientY);return}_s=!0,dr=0,rn={x:n.clientX,y:n.clientY}}},move:n=>{if(fn())return;if(Vt?.film.active){Vt.film.pointerMove(n.clientX,n.clientY);return}let t=0,e=0;if(Tr?(t=n.movementX,e=n.movementY):_s&&rn&&(t=n.clientX-rn.x,e=n.clientY-rn.y,rn={x:n.clientX,y:n.clientY},dr+=Math.abs(t)+Math.abs(e)),Vt?.active){Vt.pointer(n.clientX,n.clientY,t,e);return}hn-=t*.003,Er=Qn.clamp(Er-e*.003,-1.15,1.15)},up:n=>{if(!fn()){if(Vt?.film.active){Vt.film.pointerUp(n.clientX,n.clientY);return}if(Vt?.active)dr<8&&Vt.pointer(n.clientX,n.clientY);else if(dr<8){if(Tr)xi&&Fi(xi.userData.chapter);else if(ye){lc.set(n.clientX/window.innerWidth*2-1,-n.clientY/window.innerHeight*2+1);const t=lh(lc);t&&Fi(t.userData.chapter)}}_s=!1,rn=null}},cancel:()=>{_s=!1,rn=null,Vt?.film.active&&(Vt.film.drag=null,Vt.film.keyHeld=!1)}});document.querySelectorAll("[data-move]").forEach(n=>{let t=null,e=null;const i=()=>{t&&t.keyUp({code:n.dataset.move}),Te.delete(n.dataset.move),t=null,e=null};n.addEventListener("pointerdown",s=>{if(e===null){if(s.preventDefault(),e=s.pointerId,Vt?.film.active){if(Vt.film.state!=="epilogue"){e=null;return}t=Vt.film,t.keyDown({code:n.dataset.move,preventDefault(){}})}else Te.add(n.dataset.move);n.setPointerCapture(s.pointerId)}});for(const s of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(s,r=>{r.pointerId===e&&i()});window.addEventListener("blur",i),document.addEventListener("visibilitychange",()=>{document.hidden&&i()})});window.addEventListener("blur",Wo);document.addEventListener("visibilitychange",()=>{document.hidden&&Wo()});pt("#soundBtn").onclick=()=>{kn=!kn;try{Gi||(Gi=new(window.AudioContext||window.webkitAudioContext),ps=Gi.createGain(),ps.gain.value=0,ps.connect(Gi.destination),[55,82.41,110].forEach((n,t)=>{const e=Gi.createOscillator(),i=Gi.createGain();e.type="sine",e.frequency.value=n,i.gain.value=.035/(t+1),e.connect(i).connect(ps),e.start()})),Gi.resume(),ps.gain.setTargetAtTime(kn?1:0,Gi.currentTime,.4),pt("#soundBtn").textContent=`声音 · ${kn?"开":"关"}`,pt("#soundBtn").setAttribute("aria-pressed",String(kn))}catch{kn=!1,gn("此窗口暂时无法播放声音。")}};function fe(n,t={}){return new ms({color:n,roughness:.78,...t})}const it={wood:fe(3745306),darkWood:fe(2169364),brass:fe(11769690,{metalness:.6,roughness:.4}),paper:fe(14997688),iron:fe(3488059,{metalness:.5}),red:fe(7090224),green:fe(3164990),cotton:fe(14011323),black:fe(1054485)};function rt(n,t,e,i,s,r,a,o,l=!1){const c=new ee(new Yi(t,e,i),o);return c.position.set(s,r,a),n.add(c),l&&(c.updateWorldMatrix(!0,!1),Dr.push({box:new ts().setFromObject(c),mesh:c})),c}function Ee(n,t,e,i,s,r,a,o){const l=new ee(new Ls(t,e,i,24),o);return l.position.set(s,r,a),n.add(l),l}function cc(n,t,e,i,s,r){const a=new ee(new Pr(t,16,12),r);return a.position.set(e,i,s),n.add(a),a}function ii(n,t=2.5,e=.65,i=56,s="#e3cca0"){const r=document.createElement("canvas");r.width=1024,r.height=Math.round(1024*e/t);const a=r.getContext("2d");a.fillStyle=s,a.font=`${i}px "Microsoft YaHei",serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,r.width/2,r.height/2,1e3);const o=new oo(r);o.colorSpace=De;const l=new ku(new zc({map:o,transparent:!0,depthWrite:!1}));return l.scale.set(t,e,1),l}function oh(n,t,e,i,s,r=2.5){rt(n,r,.56,.08,e,i,s,it.darkWood);const a=ii(t,r,.45,70);a.position.set(e,i,s+.07),n.add(a)}function hc(n,t,e,i=0){const s=new Wt;s.position.set(t,0,e),s.rotation.y=i,n.add(s),rt(s,2.1,3,.35,0,1.5,0,it.darkWood);for(let r=0;r<4;r++){rt(s,2.1,.08,.65,0,.3+r*.72,.12,it.wood);for(let a=0;a<9;a++){const o=[it.red,it.green,it.wood,it.paper][(r+a)%4],l=rt(s,.14,.38+a%3*.1,.28,-.84+a*.2,.57+r*.72,.22,o);l.rotation.z=a%4===0?.08:0,rt(s,.145,.025,.29,-.84+a*.2,.55+r*.72,.23,it.brass)}}}function mo(n,t,e,i=2){rt(n,i,.12,1.1,t,.92,e,it.wood,!0);for(const s of[-i*.42,i*.42])for(const r of[-.42,.42])rt(n,.09,.87,.09,t+s,.435,e+r,it.darkWood)}function uc(n,t,e){Ee(n,.2,.25,.08,t,1.03,e,it.brass),Ee(n,.025,.025,.42,t,1.28,e,it.brass),Ee(n,.21,.3,.21,t,1.55,e,fe(12953963,{emissive:11568185,emissiveIntensity:.65}))}function ig(n,t,e,i){const s=new Wt;s.position.set(e,1.03,i),t.add(s);const r=n.kind;if(r==="book"||r==="paper"||r==="ticket"||r==="letter"){for(let l=0;l<3;l++){const c=rt(s,.66,.055,.49,l*.045,l*.065,0,r==="book"&&l===0?it.red:it.paper);c.rotation.y=l*.08}for(let l=0;l<4;l++)rt(s,.39,.006,.012,0,.192,-.14+l*.075,it.darkWood)}else if(r==="board"){rt(s,1.65,1.15,.12,0,.62,0,it.darkWood),rt(s,1.48,.98,.02,0,.62,.075,it.green);for(let l=0;l<3;l++){const c=ii(["STEEL  90⅛","SUGAR  112","UP     155"][l],1.3,.21,50,"#eee7cf");c.position.set(0,.93-l*.3,.1),s.add(c)}}else if(r==="clock"){Ee(s,.5,.5,.14,0,.58,0,it.brass).rotation.x=Math.PI/2;const l=Ee(s,.44,.44,.16,0,.58,.02,it.paper);l.rotation.x=Math.PI/2;const c=rt(s,.025,.32,.025,0,.72,.12,it.black);c.rotation.z=-.6,rt(s,.25,.02,.025,.1,.58,.12,it.black),rt(s,1,.08,.35,0,.05,0,it.darkWood)}else if(r==="ship"){rt(s,1.35,.22,.4,0,.16,0,it.wood),rt(s,.7,.22,.35,0,.36,0,it.paper),Ee(s,.025,.025,1.1,0,.77,0,it.brass);const l=rt(s,.55,.63,.02,.25,.85,0,it.paper);l.rotation.y=.15}else if(r==="cotton"){rt(s,.8,.5,.6,0,.25,0,it.cotton);for(let l=0;l<7;l++)cc(s,.13,-.28+l%3*.24,.53+Math.floor(l/3)*.035,-.18+l%2*.34,it.paper);for(const l of[-.25,.25])rt(s,.025,.53,.62,l,.27,0,it.wood)}else if(r==="phone"){Ee(s,.28,.37,.12,0,.08,0,it.black),Ee(s,.055,.065,.65,0,.45,0,it.brass);const l=Ee(s,.17,.07,.3,0,.84,0,it.brass);l.rotation.z=Math.PI/3;const c=Ee(s,.09,.17,.35,.32,.55,0,it.black);c.rotation.z=.3}else if(r==="safe"){rt(s,.9,.9,.7,0,.45,0,it.iron),rt(s,.73,.72,.06,0,.45,.39,it.darkWood);const l=Ee(s,.12,.12,.09,0,.5,.46,it.brass);l.rotation.x=Math.PI/2,rt(s,.035,.25,.07,.22,.46,.48,it.brass)}else if(r==="scale"){rt(s,.8,.08,.35,0,.04,0,it.wood),Ee(s,.03,.03,.9,0,.53,0,it.brass),rt(s,1.1,.045,.04,0,.95,0,it.brass);for(const l of[-.45,.45])rt(s,.012,.4,.012,l,.75,0,it.brass),Ee(s,.23,.12,.08,l,.54,0,it.brass)}else if(r==="press"){rt(s,.85,.14,.65,0,.09,0,it.black);for(const l of[-.34,.34])rt(s,.08,.8,.08,l,.52,0,it.brass);rt(s,.8,.08,.14,0,.92,0,it.iron),Ee(s,.055,.055,.6,0,.7,0,it.brass),rt(s,.62,.12,.42,0,.37,0,it.iron),rt(s,.52,.025,.4,0,.23,0,it.paper)}else if(r==="mirror")rt(s,.95,1.2,.1,0,.62,0,it.brass),rt(s,.82,1.06,.03,0,.62,.07,fe(8559769,{metalness:1,roughness:.18}));else if(r==="suitcase"){rt(s,.95,.58,.34,0,.3,0,it.wood);for(const l of[-.3,.3])rt(s,.045,.59,.36,l,.3,0,it.brass);rt(s,.3,.07,.07,0,.64,0,it.darkWood)}else Ee(s,.35,.42,.13,0,.12,0,it.brass),cc(s,.26,0,.42,0,it.paper);s.userData.chapter=n.n,s.traverse(l=>l.userData.chapter=n.n),ko.push(s);const a=new ee(new Io(.38,.43,40),fe(14203771,{emissive:14203771,emissiveIntensity:1,side:ni,transparent:!0,opacity:.55}));a.rotation.x=-Math.PI/2,a.position.set(e,.992,i),t.add(a);const o=ii(`${n.roman} · ${n.object}`,1.9,.34,48);o.position.set(e,1.95,i),t.add(o),zo.push({group:s,halo:a,label:o,n:n.n,base:s.position.y,activeUntil:0})}function ng(n,t,e){if(n===0){rt(t,3.1,1.8,.13,e*4.8,2.15,1.8,it.green).rotation.y=Math.PI/2;const i=ii("数字，是我的第一种语言。",3.1,.6,56);i.position.set(e*3.1,2.6,1.8),t.add(i)}if(n===1){for(let s=0;s<3;s++){const r=-1.5+s*1.5;rt(t,.85,.12,.85,r,.5,1.8,it.green),rt(t,.85,1.1,.12,r,1.02,2.2,it.darkWood);for(const a of[-.34,.34])for(const o of[-.34,.34])rt(t,.07,.5,.07,r+a,.25,1.8+o,it.wood)}const i=ii("位置，比一时的差价更难找回。",4,.55,58);i.position.set(0,2.35,2.4),t.add(i)}if(n===2){rt(t,4,.025,2.5,0,.07,2,fe(2444888,{metalness:.55,roughness:.3}));for(let s=0;s<10;s++)rt(t,3.5,.025,.025,0,.09,1+s*.22,fe(7575192,{emissive:3429471,emissiveIntensity:.2}));const i=ii("钱消失的那天，所有人都在找岸。",4,.55,55);i.position.set(0,2.5,2.6),t.add(i)}if(n===3){for(let s=0;s<7;s++){const r=e*(2.5+s%2*.9),a=.5+Math.floor(s/2)*.9;rt(t,.75,.7,.65,r,.38,a,it.cotton);for(const o of[-.23,.23])rt(t,.035,.73,.69,r+o,.39,a,it.wood)}const i=ii("我知道，却没有做到。",3.7,.6,65);i.position.set(0,2.5,1.9),t.add(i)}if(n===4){for(let s=0;s<6;s++)rt(t,.07,3,.07,-2+s*.8,1.5,3.6,it.iron);rt(t,4.2,.08,.08,0,2.9,3.6,it.iron);const i=ii("债务使每一刻，都像最后的机会。",4,.55,55);i.position.set(0,2.35,3.5),t.add(i)}if(n===5){for(let s=0;s<7;s++){const r=rt(t,.52,.025,.38,-2.3+s*.72,1.6+Math.sin(s)*.3,2.8,it.paper);r.rotation.z=Math.sin(s)*.15}const i=ii("秘密经过七个人，仍只有一个源头。",4.4,.55,55);i.position.set(0,2.7,2.7),t.add(i)}if(n===6){rt(t,4.5,.24,2.2,0,.12,2.4,it.darkWood);for(const s of[-2.2,2.2])for(let r=0;r<4;r++)Ee(t,.13,.13,2.9,s+r*.15*(s<0?1:-1),1.55,3.1,fe(6499384));const i=ii("幕布升起时，谁正在退场？",4,.55,58);i.position.set(0,2.4,2.8),t.add(i)}if(n===7){mo(t,0,2.7,3.2);for(let s=0;s<5;s++)rt(t,.5,.03,.4,-1.1+s*.55,1.03,2.7,it.paper);const i=ii("最后一个判断，留给你。",4,.6,65);i.position.set(0,2.3,3.2),t.add(i)}}function sg(n){const t=Ho(n),e=new Wt;e.position.set(t.x,0,t.z),ve.add(e);const i=fe(Ii[n].color),s=n%2===0?-1:1;rt(e,10,.2,10,0,-.1,0,it.wood);for(let o=0;o<12;o++)rt(e,.025,.012,10,-5+o*.85,.015,0,it.darkWood);rt(e,10,4,.2,0,2,-5,i,!0),rt(e,10,4,.2,0,2,5,i,!0),rt(e,.2,4,10,s*5,2,0,i,!0);for(const o of[-3.25,3.25])rt(e,.2,4,3.5,-s*5,2,o,i,!0);rt(e,.2,1.2,3,-s*5,3.4,0,i);for(const o of[-4.86,4.86]){rt(e,10,1,.08,0,.5,o,it.darkWood),rt(e,10,.06,.1,0,1.04,o,it.brass);for(let l=0;l<7;l++)rt(e,.04,.78,.12,-4.5+l*1.5,.5,o,it.wood)}for(const o of[-4,0,4])rt(e,10,.14,.2,0,3.95,o,it.darkWood);rt(e,2.5,2,.08,s*4.86,2.45,-1.7,fe(5798005,{emissive:5404785,emissiveIntensity:.4}));for(let o=0;o<4;o++)rt(e,.07,2,.1,s*4.8,2.45,-2.8+o*.73,it.darkWood);rt(e,.12,.08,2.6,s*4.78,2.4,-1.7,it.darkWood),rt(e,6,.015,4.4,0,.025,.5,fe(n%2===0?4600103:2636853)),rt(e,5.7,.017,.05,0,.035,-1.56,it.brass),rt(e,5.7,.017,.05,0,.035,2.56,it.brass),hc(e,s*3.5,4.5),hc(e,s*1.2,4.5),oh(e,Ii[n].name,0,2.95,-4.83,3.7);const r=[[-2.8,-3.7],[0,-3.7],[2.8,-3.7]];Us.filter(o=>Math.floor((o.n-1)/3)===n).forEach((o,l)=>{const[c,h]=r[l];mo(e,c,h,2.15),ig(o,e,c,h),l===1&&uc(e,c+.8,h+.28)}),mo(e,s*3.3,1.8,1.5),uc(e,s*3.3,1.8),rt(e,.7,.1,.7,s*3.3,.5,2.8,it.green),rt(e,.7,.9,.08,s*3.3,.95,3.1,it.darkWood),ng(n,e,s);const a=new Cs(16766106,19,15,2);a.position.set(0,3.3,-1),e.add(a),Ee(e,.4,.65,.24,0,3.25,-1,fe(12755819,{emissive:14990192,emissiveIntensity:.9})),Ee(e,.02,.02,.5,0,3.6,-1,it.brass)}function rg(){ve=new Ro,ve.background=new Ft(1055768),ve.fog=new Ds(1055768,.026),ye=new Ge(67,innerWidth/innerHeight,.05,90),ye.position.set(0,1.7,7),ye.rotation.order="YXZ",ci=new F0({canvas:Gn,antialias:!vs,powerPreference:vs?"low-power":"high-performance"}),ci.setSize(innerWidth,innerHeight),ci.setPixelRatio(Ps(innerWidth,innerHeight,vs)),ci.outputColorSpace=De,ci.toneMapping=_o,ci.toneMappingExposure=1.4,ve.add(new No(12178896,7228460,1.5)),rt(ve,4,.2,56,0,-.1,-18,it.darkWood);for(let i=0;i<29;i++)rt(ve,3.7,.015,.04,0,.01,8-i*2,it.wood);rt(ve,3,.02,54,0,.025,-18,fe(2571059));for(const i of[-1.48,1.48])rt(ve,.025,.023,54,i,.04,-18,it.brass);for(let i=0;i<4;i++){const s=-i*12;for(const a of[-2,2]){rt(ve,.2,4,3,a,2,s+4.5,fe(2242604),!0),rt(ve,.2,4,3,a,2,s-4.5,fe(2242604),!0);for(const o of[-1.65,1.65])rt(ve,.25,3.2,.15,a,1.6,s+o,it.wood);rt(ve,.3,.18,3.5,a,3.1,s,it.brass)}const r=new Cs(14928785,13,13,2);r.position.set(0,3,s),ve.add(r),Ee(ve,.22,.38,.2,0,3.1,s,fe(15782553,{emissive:12952936,emissiveIntensity:1})),Ee(ve,.015,.015,.9,0,3.65,s,it.brass)}for(const i of[9,-45])rt(ve,4,4,.2,0,2,i,fe(2242604),!0);oh(ve,"每一次代价，都留下一个房间。",0,2.9,-44.83,3.6),Ii.forEach((i,s)=>sg(s)),th(ve,new Set([...ko,...Dr.map(i=>i.mesh),...zo.map(i=>i.group)])),ve.traverse(i=>{i.isPointLight&&po.push({light:i,position:i.getWorldPosition(new I)})});const n=new Ie,t=[];for(let i=0;i<180;i++)t.push((Math.random()-.5)*22,Math.random()*3.5,-Math.random()*48+7);n.setAttribute("position",new pe(t,3)),ve.add(new Po(n,new Rr({size:.025,color:14596470,transparent:!0,opacity:.45})));const e=ii("价格变了。人却还是那样。",4.5,.7,65,"#dbc58d");e.position.set(0,2.15,-5),ve.add(e),window.addEventListener("resize",()=>{Wo(),Te.clear(),Vt?.film.keys?.clear(),ci.setPixelRatio(Ps(innerWidth,innerHeight,vs)),ye.aspect=innerWidth/innerHeight,ye.updateProjectionMatrix(),ci.setSize(innerWidth,innerHeight)}),Gn.addEventListener("webglcontextlost",i=>{i.preventDefault(),Zn=!0,Vo(new Error("Graphics context lost"))}),Gn.addEventListener("webglcontextrestored",()=>{Zn=!1,Fs=!1,pt("#recoveryMessage").textContent="画面已恢复，可以重新进入这段往事。"}),hh()}function dc(n,t){return n<-11.65||n>11.65||t>8.65||t<-44.65?!0:Dr.some(e=>n>e.box.min.x-.23&&n<e.box.max.x+.23&&t>e.box.min.z-.23&&t<e.box.max.z+.23&&e.box.max.y>.3&&e.box.min.y<1.8)}function lh(n){ga.setFromCamera(n,ye);const e=ga.intersectObjects(ko,!0).find(s=>s.distance<5.5);if(!e)return null;const i=ga.intersectObjects(Dr.map(s=>s.mesh),!1)[0];return i&&i.distance<e.distance-.05?null:e.object}function ch(){if(!ye)return;const n=ye.position;let t=-1;for(let e=0;e<8;e++){const i=Ho(e);if(Math.abs(n.x-i.x)<4.95&&Math.abs(n.z-i.z)<4.95){t=e;break}}t!==fo&&(fo=t,t<0?(pt("#roomNumber").textContent="序章 / THE LONG HALLWAY",pt("#roomTitle").textContent="所有错误，都还住在这里。",pt("#roomConcept").textContent="走进两侧的房间，靠近发光的物件。"):(pt("#roomNumber").textContent=`0${t+1} / ${Ii[t].period}`,pt("#roomTitle").textContent=Ii[t].name,pt("#roomConcept").textContent=Ii[t].concept,gn(Ii[t].whisper)))}function hh(){if(requestAnimationFrame(hh),Fs||Zn||$n?.pending){oc.getDelta();return}try{const n=Math.min(oc.getDelta(),.05);if(Vt?.active){Vt.update(fn()?0:n);return}if(!fn()){ye.rotation.set(Er,hn,0,"YXZ");let e=0,i=0;(Te.has("KeyW")||Te.has("ArrowUp"))&&(i-=1),(Te.has("KeyS")||Te.has("ArrowDown"))&&(i+=1),(Te.has("KeyA")||Te.has("ArrowLeft"))&&(e-=1),(Te.has("KeyD")||Te.has("ArrowRight"))&&(e+=1);const s=Math.hypot(e,i)||1,r=(Te.has("Shift")?4.5:2.6)*n,a=(e*Math.cos(hn)+i*Math.sin(hn))/s*r,o=(-e*Math.sin(hn)+i*Math.cos(hn))/s*r;if(dc(ye.position.x+a,ye.position.z)||(ye.position.x+=a),dc(ye.position.x,ye.position.z+o)||(ye.position.z+=o),ch(),xi=lh(new bt(0,0)),pt("#interact").hidden=!xi,xi){const l=Us.find(c=>c.n===xi.userData.chapter);pt("#targetName").textContent=l?.object||""}}vs&&(po.sort((e,i)=>e.position.distanceToSquared(ye.position)-i.position.distanceToSquared(ye.position)),po.forEach((e,i)=>e.light.visible=i<2));const t=performance.now();zo.forEach((e,i)=>{e.halo.material.opacity=.3+Math.sin(t*.0015+i)*.18,e.group.rotation.y=e.activeUntil>t?Math.sin(t*.004)*.13:0}),ci.render(ve,ye)}catch(n){Vo(n)}}try{rg(),Vt=new $0(ci,{onClose:()=>Te.clear(),onArchive:Go})}catch(n){console.error(n),pt("#error").hidden=!1,pt("#walkBtn").disabled=!0}vn("#intro");
