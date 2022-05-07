var qd=Object.defineProperty;var Xd=(s,t,e)=>t in s?qd(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var ws=(s,t,e)=>(Xd(s,typeof t!="symbol"?t+"":t,e),e);const Yd=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}};Yd();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const al="137",jd=0,Yl=1,Zd=2,Xh=1,Jd=2,kr=3,Kr=0,ae=1,hr=2,Yh=1,qn=0,qr=1,jl=2,Zl=3,Jl=4,$d=5,Ji=100,Kd=101,Qd=102,$l=103,Kl=104,tf=200,ef=201,nf=202,rf=203,jh=204,Zh=205,sf=206,of=207,af=208,lf=209,cf=210,hf=0,uf=1,df=2,Fa=3,ff=4,pf=5,mf=6,gf=7,bo=0,_f=1,xf=2,Xn=0,yf=1,vf=2,Mf=3,bf=4,wf=5,Jh=300,fs=301,ps=302,Na=303,Ba=304,wo=306,ll=307,Oa=1e3,He=1001,za=1002,le=1003,Ql=1004,tc=1005,Me=1006,Sf=1007,So=1008,Yn=1009,Tf=1010,Ef=1011,Qr=1012,Af=1013,ro=1014,gi=1015,ir=1016,Cf=1017,Rf=1018,rr=1020,Lf=1021,Pf=1022,Ce=1023,Df=1024,If=1025,xi=1026,ur=1027,Ff=1028,Nf=1029,Bf=1030,Of=1031,zf=1033,zo=33776,Uo=33777,ko=33778,Ho=33779,ec=35840,nc=35841,ic=35842,rc=35843,Uf=36196,sc=37492,oc=37496,ac=37808,lc=37809,cc=37810,hc=37811,uc=37812,dc=37813,fc=37814,pc=37815,mc=37816,gc=37817,_c=37818,xc=37819,yc=37820,vc=37821,Mc=36492,kf=2200,Hf=2201,Vf=2202,oo=2300,ao=2301,Vo=2302,Ki=2400,Qi=2401,lo=2402,cl=2500,$h=2501,Gf=0,Qn=3e3,Zt=3001,Wf=3200,qf=3201,yr=0,Xf=1,Go=7680,Yf=519,ts=35044,co=35048,bc="300 es",Ua=1035;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ge=[];for(let s=0;s<256;s++)ge[s]=(s<16?"0":"")+s.toString(16);const Wo=Math.PI/180,ka=180/Math.PI;function mn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[s&255]+ge[s>>8&255]+ge[s>>16&255]+ge[s>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toUpperCase()}function ke(s,t,e){return Math.max(t,Math.min(e,s))}function jf(s,t){return(s%t+t)%t}function qo(s,t,e){return(1-e)*s+e*t}function wc(s){return(s&s-1)===0&&s!==0}function Zf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class ${constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}$.prototype.isVector2=!0;class xe{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],x=i[3],m=i[6],p=i[1],b=i[4],M=i[7],v=i[2],T=i[5],A=i[8];return r[0]=o*g+a*p+c*v,r[3]=o*x+a*b+c*T,r[6]=o*m+a*M+c*A,r[1]=l*g+h*p+u*v,r[4]=l*x+h*b+u*T,r[7]=l*m+h*M+u*A,r[2]=d*g+f*p+_*v,r[5]=d*x+f*b+_*T,r[8]=d*m+f*M+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*l-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*c)*g,t[5]=(i*r-a*e)*g,t[6]=f*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],o=i[3],a=i[6],c=i[1],l=i[4],h=i[7];return i[0]=e*r+n*c,i[3]=e*o+n*l,i[6]=e*a+n*h,i[1]=-n*r+e*c,i[4]=-n*o+e*l,i[7]=-n*a+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}xe.prototype.isMatrix3=!0;function Kh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>65535)return!0;return!1}function es(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Xo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function sr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}class pt{constructor(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this}setRGB(t,e,n){return this.r=t,this.g=e,this.b=n,this}setHSL(t,e,n){if(t=jf(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,r=2*n-i;this.r=Xo(r,i,t+1/3),this.g=Xo(r,i,t),this.b=Xo(r,i,t-1/3)}return this}setStyle(t){function e(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let i;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,e(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,e(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(i[1])/360,c=parseInt(i[2],10)/100,l=parseInt(i[3],10)/100;return e(i[4]),this.setHSL(a,c,l)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this}setColorName(t){const e=Qh[t.toLowerCase()];return e!==void 0?this.setHex(e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}copyLinearToSRGB(t){return this.r=Yo(t.r),this.g=Yo(t.g),this.b=Yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(t){const e=this.r,n=this.g,i=this.b,r=Math.max(e,n,i),o=Math.min(e,n,i);let a,c;const l=(o+r)/2;if(o===r)a=0,c=0;else{const h=r-o;switch(c=l<=.5?h/(r+o):h/(2-r-o),r){case e:a=(n-i)/h+(n<i?6:0);break;case n:a=(i-e)/h+2;break;case i:a=(e-n)/h+4;break}a/=6}return t.h=a,t.s=c,t.l=l,t}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(t,e,n){return this.getHSL(tn),tn.h+=t,tn.s+=e,tn.l+=n,this.setHSL(tn.h,tn.s,tn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(tn),t.getHSL(Ss);const n=qo(tn.h,Ss.h,e),i=qo(tn.s,Ss.s,e),r=qo(tn.l,Ss.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}pt.NAMES=Qh;pt.prototype.isColor=!0;pt.prototype.r=1;pt.prototype.g=1;pt.prototype.b=1;let Li;class Ei{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=es("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=es("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=sr(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(sr(e[n]/255)*255):e[n]=sr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jf=0;class pe extends Ti{constructor(t=pe.DEFAULT_IMAGE,e=pe.DEFAULT_MAPPING,n=He,i=He,r=Me,o=So,a=Ce,c=Yn,l=1,h=Qn){super(),Object.defineProperty(this,"id",{value:Jf++}),this.uuid=mn(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=mn()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(jo(i[o].image)):r.push(jo(i[o]))}else r=jo(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oa:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oa:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&this.version++}}pe.DEFAULT_IMAGE=void 0;pe.DEFAULT_MAPPING=Jh;pe.prototype.isTexture=!0;function jo(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Ei.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Xt{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],g=c[2],x=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+x)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,M=(f+1)/2,v=(m+1)/2,T=(h+d)/4,A=(u+g)/4,P=(_+x)/4;return b>M&&b>v?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=T/n,r=A/n):M>v?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=P/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=A/r,i=P/r),this.set(n,i,r,e),this}let p=Math.sqrt((x-_)*(x-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(p)<.001&&(p=1),this.x=(x-_)/p,this.y=(u-g)/p,this.z=(d-h)/p,this.w=Math.acos((l+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Xt.prototype.isVector4=!0;class Je extends Ti{constructor(t,e,n={}){super(),this.width=t,this.height=e,this.depth=1,this.scissor=new Xt(0,0,t,e),this.scissorTest=!1,this.viewport=new Xt(0,0,t,e),this.texture=new pe(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:t,height:e,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Me,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(t){t.image={width:this.width,height:this.height,depth:this.depth},this.texture=t}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.image=Object.assign({},t.texture.image),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Je.prototype.isWebGLRenderTarget=!0;class $f extends Je{constructor(t,e,n){super(t,e);const i=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=i.clone()}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone();return this}}$f.prototype.isWebGLMultipleRenderTargets=!0;class hl extends Je{constructor(t,e,n={}){super(t,e,n),this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(t){return super.copy.call(this,t),this.samples=t.samples,this.useRenderToTexture=t.useRenderToTexture,this.useRenderbuffer=t.useRenderbuffer,this}}hl.prototype.isWebGLMultisampleRenderTarget=!0;class De{constructor(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}static slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==d||l!==f||h!==_){let x=1-a;const m=c*d+l*f+h*_+u*g,p=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const v=Math.sqrt(b),T=Math.atan2(v,m*p);x=Math.sin(x*T)/v,a=Math.sin(a*T)/v}const M=a*p;if(c=c*x+d*M,l=l*x+f*M,h=h*x+_*M,u=u*x+g*M,x===1-a){const v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*f-l*d,t[e+1]=c*_+h*d+l*u-a*f,t[e+2]=l*_+h*f+a*d-c*u,t[e+3]=h*_-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}De.prototype.isQuaternion=!0;class C{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,h=c*n+a*e-r*i,u=c*i+r*n-o*e,d=-r*e-o*n-a*i;return this.x=l*c+d*-r+h*-a-u*-o,this.y=h*c+d*-o+u*-r-l*-a,this.z=u*c+d*-a+l*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zo.copy(this).projectOnVector(t),this.sub(Zo)}reflect(t){return this.sub(Zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}C.prototype.isVector3=!0;const Zo=new C,Sc=new De;class sn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const h=t[c],u=t[c+1],d=t[c+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const h=t.getX(c),u=t.getY(c),d=t.getZ(c);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)li.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(li)}else n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox),Jo.applyMatrix4(t.matrixWorld),this.union(Jo);const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lr),Ts.subVectors(this.max,Lr),Pi.subVectors(t.a,Lr),Di.subVectors(t.b,Lr),Ii.subVectors(t.c,Lr),Dn.subVectors(Di,Pi),In.subVectors(Ii,Di),ci.subVectors(Pi,Ii);let e=[0,-Dn.z,Dn.y,0,-In.z,In.y,0,-ci.z,ci.y,Dn.z,0,-Dn.x,In.z,0,-In.x,ci.z,0,-ci.x,-Dn.y,Dn.x,0,-In.y,In.x,0,-ci.y,ci.x,0];return!$o(e,Pi,Di,Ii,Ts)||(e=[1,0,0,0,1,0,0,0,1],!$o(e,Pi,Di,Ii,Ts))?!1:(Es.crossVectors(Dn,In),e=[Es.x,Es.y,Es.z],$o(e,Pi,Di,Ii,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return li.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(li).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}sn.prototype.isBox3=!0;const vn=[new C,new C,new C,new C,new C,new C,new C,new C],li=new C,Jo=new sn,Pi=new C,Di=new C,Ii=new C,Dn=new C,In=new C,ci=new C,Lr=new C,Ts=new C,Es=new C,hi=new C;function $o(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){hi.fromArray(s,r);const a=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),c=t.dot(hi),l=e.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Kf=new sn,Tc=new C,As=new C,Ko=new C;class vr{constructor(t=new C,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Kf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Ko.subVectors(t,this.center);const e=Ko.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(Ko.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?As.set(0,0,1).multiplyScalar(t.radius):As.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Tc.copy(t.center).add(As)),this.expandByPoint(Tc.copy(t.center).sub(As)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new C,Qo=new C,Cs=new C,Fn=new C,ta=new C,Rs=new C,ea=new C;class Ai{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.direction).multiplyScalar(e).add(this.origin),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qo.copy(t).add(e).multiplyScalar(.5),Cs.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(Qo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Cs),a=Fn.dot(this.direction),c=-Fn.dot(Cs),l=Fn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*c-a,d=o*a-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Cs).multiplyScalar(d).add(Qo),f}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,i,r){ta.subVectors(e,t),Rs.subVectors(n,t),ea.crossVectors(ta,Rs);let o=this.direction.dot(ea),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,t);const c=a*this.direction.dot(Rs.crossVectors(Fn,Rs));if(c<0)return null;const l=a*this.direction.dot(ta.cross(Fn));if(l<0||c+l>o)return null;const h=-a*Fn.dot(ea);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,r,o,a,c,l,h,u,d,f,_,g,x){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),o=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+_*l,e[5]=d-g*l,e[9]=-a*c,e[2]=g-d*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,_=l*h,g=l*u;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,_=l*h,g=l*u;e[0]=d-g*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=_*l-f,e[8]=d*l+g,e[1]=c*u,e[5]=g*l+d,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qf,t,tp)}lookAt(t,e,n){const i=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Nn.crossVectors(n,Oe),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Nn.crossVectors(n,Oe)),Nn.normalize(),Ls.crossVectors(Oe,Nn),i[0]=Nn.x,i[4]=Ls.x,i[8]=Oe.x,i[1]=Nn.y,i[5]=Ls.y,i[9]=Oe.y,i[2]=Nn.z,i[6]=Ls.z,i[10]=Oe.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],x=n[10],m=n[14],p=n[3],b=n[7],M=n[11],v=n[15],T=i[0],A=i[4],P=i[8],O=i[12],U=i[1],y=i[5],R=i[9],D=i[13],I=i[2],N=i[6],F=i[10],k=i[14],J=i[3],Q=i[7],V=i[11],X=i[15];return r[0]=o*T+a*U+c*I+l*J,r[4]=o*A+a*y+c*N+l*Q,r[8]=o*P+a*R+c*F+l*V,r[12]=o*O+a*D+c*k+l*X,r[1]=h*T+u*U+d*I+f*J,r[5]=h*A+u*y+d*N+f*Q,r[9]=h*P+u*R+d*F+f*V,r[13]=h*O+u*D+d*k+f*X,r[2]=_*T+g*U+x*I+m*J,r[6]=_*A+g*y+x*N+m*Q,r[10]=_*P+g*R+x*F+m*V,r[14]=_*O+g*D+x*k+m*X,r[3]=p*T+b*U+M*I+v*J,r[7]=p*A+b*y+M*N+v*Q,r[11]=p*P+b*R+M*F+v*V,r[15]=p*O+b*D+M*k+v*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],x=t[11],m=t[15];return _*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+g*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+x*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+m*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],x=t[14],m=t[15],p=u*x*l-g*d*l+g*c*f-a*x*f-u*c*m+a*d*m,b=_*d*l-h*x*l-_*c*f+o*x*f+h*c*m-o*d*m,M=h*g*l-_*u*l+_*a*f-o*g*f-h*a*m+o*u*m,v=_*u*c-h*g*c-_*a*d+o*g*d+h*a*x-o*u*x,T=e*p+n*b+i*M+r*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=p*A,t[1]=(g*d*r-u*x*r-g*i*f+n*x*f+u*i*m-n*d*m)*A,t[2]=(a*x*r-g*c*r+g*i*l-n*x*l-a*i*m+n*c*m)*A,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*A,t[4]=b*A,t[5]=(h*x*r-_*d*r+_*i*f-e*x*f-h*i*m+e*d*m)*A,t[6]=(_*c*r-o*x*r-_*i*l+e*x*l+o*i*m-e*c*m)*A,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*A,t[8]=M*A,t[9]=(_*u*r-h*g*r-_*n*f+e*g*f+h*n*m-e*u*m)*A,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*m+e*a*m)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*A,t[12]=v*A,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*x+e*u*x)*A,t[14]=(_*a*i-o*g*i-_*n*c+e*g*c+o*n*x-e*a*x)*A,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,_=r*u,g=o*h,x=o*u,m=a*u,p=c*l,b=c*h,M=c*u,v=n.x,T=n.y,A=n.z;return i[0]=(1-(g+m))*v,i[1]=(f+M)*v,i[2]=(_-b)*v,i[3]=0,i[4]=(f-M)*T,i[5]=(1-(d+m))*T,i[6]=(x+p)*T,i[7]=0,i[8]=(_+b)*A,i[9]=(x-p)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Fi.set(i[0],i[1],i[2]).length();const o=Fi.set(i[4],i[5],i[6]).length(),a=Fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],en.copy(this);const l=1/r,h=1/o,u=1/a;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,e.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*r/(e-t),l=2*r/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(o+r)/(o-r),f=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,c=1/(e-t),l=1/(n-i),h=1/(o-r),u=(e+t)*c,d=(n+i)*l,f=(o+r)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}yt.prototype.isMatrix4=!0;const Fi=new C,en=new yt,Qf=new C(0,0,0),tp=new C(1,1,1),Nn=new C,Ls=new C,Oe=new C,Ec=new yt,Ac=new De;class Mr{constructor(t=0,e=0,n=0,i=Mr.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}toVector3(t){return t?t.set(this._x,this._y,this._z):new C(this._x,this._y,this._z)}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Mr.prototype.isEuler=!0;Mr.DefaultOrder="XYZ";Mr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ul{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ep=0;const Cc=new C,Ni=new De,bn=new yt,Ps=new C,Pr=new C,np=new C,ip=new De,Rc=new C(1,0,0),Lc=new C(0,1,0),Pc=new C(0,0,1),rp={type:"added"},Dc={type:"removed"};class Ht extends Ti{constructor(){super(),Object.defineProperty(this,"id",{value:ep++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DefaultUp.clone();const t=new C,e=new Mr,n=new De,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new xe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ht.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(Rc,t)}rotateY(t){return this.rotateOnAxis(Lc,t)}rotateZ(t){return this.rotateOnAxis(Pc,t)}translateOnAxis(t,e){return Cc.copy(t).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rc,t)}translateY(t){return this.translateOnAxis(Lc,t)}translateZ(t){return this.translateOnAxis(Pc,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Pr,Ps,this.up):bn.lookAt(Ps,Pr,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),Ni.setFromRotationMatrix(bn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(rp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Dc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ht.DefaultUp=new C(0,1,0);Ht.DefaultMatrixAutoUpdate=!0;Ht.prototype.isObject3D=!0;const nn=new C,wn=new C,na=new C,Sn=new C,Bi=new C,Oi=new C,Ic=new C,ia=new C,ra=new C,sa=new C;class se{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),nn.subVectors(t,e),i.cross(nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){nn.subVectors(i,e),wn.subVectors(n,e),na.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(wn),c=nn.dot(na),l=wn.dot(wn),h=wn.dot(na),u=o*l-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,f=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Sn),c.set(0,0),c.addScaledVector(r,Sn.x),c.addScaledVector(o,Sn.y),c.addScaledVector(a,Sn.z),c}static isFrontFacing(t,e,n,i){return nn.subVectors(n,e),wn.subVectors(t,e),nn.cross(wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),nn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return se.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return se.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return se.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return se.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return se.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Bi.subVectors(i,n),Oi.subVectors(r,n),ia.subVectors(t,n);const c=Bi.dot(ia),l=Oi.dot(ia);if(c<=0&&l<=0)return e.copy(n);ra.subVectors(t,i);const h=Bi.dot(ra),u=Oi.dot(ra);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Bi,o);sa.subVectors(t,r);const f=Bi.dot(sa),_=Oi.dot(sa);if(_>=0&&f<=_)return e.copy(r);const g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Oi,a);const x=h*_-f*u;if(x<=0&&u-h>=0&&f-_>=0)return Ic.subVectors(r,i),a=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(Ic,a);const m=1/(x+g+d);return o=g*m,a=d*m,e.copy(n).addScaledVector(Bi,o).addScaledVector(Oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let sp=0;class Ae extends Ti{constructor(){super(),Object.defineProperty(this,"id",{value:sp++}),this.uuid=mn(),this.name="",this.type="Material",this.fog=!0,this.blending=qr,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jh,this.blendDst=Zh,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Yh;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(n.blending=this.blending),this.side!==Kr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}Ae.prototype.isMaterial=!0;class dl extends Ae{constructor(t){super(),this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}dl.prototype.isMeshBasicMaterial=!0;const jt=new C,Ds=new $;class ce{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=ts,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new pt),e[n++]=o.r,e[n++]=o.g,e[n++]=o.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new $),e[n++]=o.x,e[n++]=o.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new C),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Xt),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=o.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyMatrix3(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)jt.x=this.getX(e),jt.y=this.getY(e),jt.z=this.getZ(e),jt.applyMatrix4(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)jt.x=this.getX(e),jt.y=this.getY(e),jt.z=this.getZ(e),jt.applyNormalMatrix(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)jt.x=this.getX(e),jt.y=this.getY(e),jt.z=this.getZ(e),jt.transformDirection(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ts&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}ce.prototype.isBufferAttribute=!0;class tu extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eu extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class op extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}op.prototype.isFloat16BufferAttribute=!0;class fe extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ap=0;const qe=new yt,oa=new Ht,zi=new C,ze=new sn,Dr=new sn,he=new C;class $t extends Ti{constructor(){super(),Object.defineProperty(this,"id",{value:ap++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kh(t)?eu:tu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new xe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(he.addVectors(ze.min,Dr.min),ze.expandByPoint(he),he.addVectors(ze.max,Dr.max),ze.expandByPoint(he)):(ze.expandByPoint(Dr.min),ze.expandByPoint(Dr.max))}ze.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)he.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(he));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)he.fromBufferAttribute(a,l),c&&(zi.fromBufferAttribute(t,l),he.add(zi)),i=Math.max(i,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new ce(new Float32Array(4*a),4));const c=e.tangent.array,l=[],h=[];for(let U=0;U<a;U++)l[U]=new C,h[U]=new C;const u=new C,d=new C,f=new C,_=new $,g=new $,x=new $,m=new C,p=new C;function b(U,y,R){u.fromArray(i,U*3),d.fromArray(i,y*3),f.fromArray(i,R*3),_.fromArray(o,U*2),g.fromArray(o,y*2),x.fromArray(o,R*2),d.sub(u),f.sub(u),g.sub(_),x.sub(_);const D=1/(g.x*x.y-x.x*g.y);!isFinite(D)||(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(D),p.copy(f).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(D),l[U].add(m),l[y].add(m),l[R].add(m),h[U].add(p),h[y].add(p),h[R].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let U=0,y=M.length;U<y;++U){const R=M[U],D=R.start,I=R.count;for(let N=D,F=D+I;N<F;N+=3)b(n[N+0],n[N+1],n[N+2])}const v=new C,T=new C,A=new C,P=new C;function O(U){A.fromArray(r,U*3),P.copy(A);const y=l[U];v.copy(y),v.sub(A.multiplyScalar(A.dot(y))).normalize(),T.crossVectors(P,y);const D=T.dot(h[U])<0?-1:1;c[U*4]=v.x,c[U*4+1]=v.y,c[U*4+2]=v.z,c[U*4+3]=D}for(let U=0,y=M.length;U<y;++U){const R=M[U],D=R.start,I=R.count;for(let N=D,F=D+I;N<F;N+=3)O(n[N+0]),O(n[N+1]),O(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),x=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const o=n[i].array,a=t.attributes[i],c=a.array,l=a.itemSize*e,h=Math.min(c.length,o.length-l);for(let u=0,d=l;u<h;u++,d++)o[d]=c[u]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,_=0;for(let g=0,x=c.length;g<x;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*h;for(let m=0;m<h;m++)d[_++]=l[f++]}return new ce(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $t,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}$t.prototype.isBufferGeometry=!0;const Fc=new yt,Ui=new Ai,aa=new vr,Bn=new C,On=new C,zn=new C,la=new C,ca=new C,ha=new C,Is=new C,Fs=new C,Ns=new C,Bs=new $,Os=new $,zs=new $,ua=new C,Us=new C;class Se extends Ht{constructor(t=new $t,e=new dl){super(),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),t.ray.intersectsSphere(aa)===!1)||(Fc.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Fc),n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,_=n.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=i[m.materialIndex],b=Math.max(m.start,_.start),M=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let v=b,T=M;v<T;v+=3){const A=a.getX(v),P=a.getX(v+1),O=a.getX(v+2);o=ks(this,p,t,Ui,c,l,h,u,d,A,P,O),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,e.push(o))}}else{const g=Math.max(0,_.start),x=Math.min(a.count,_.start+_.count);for(let m=g,p=x;m<p;m+=3){const b=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);o=ks(this,i,t,Ui,c,l,h,u,d,b,M,v),o&&(o.faceIndex=Math.floor(m/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=i[m.materialIndex],b=Math.max(m.start,_.start),M=Math.min(c.count,Math.min(m.start+m.count,_.start+_.count));for(let v=b,T=M;v<T;v+=3){const A=v,P=v+1,O=v+2;o=ks(this,p,t,Ui,c,l,h,u,d,A,P,O),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,e.push(o))}}else{const g=Math.max(0,_.start),x=Math.min(c.count,_.start+_.count);for(let m=g,p=x;m<p;m+=3){const b=m,M=m+1,v=m+2;o=ks(this,i,t,Ui,c,l,h,u,d,b,M,v),o&&(o.faceIndex=Math.floor(m/3),e.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Se.prototype.isMesh=!0;function lp(s,t,e,n,i,r,o,a){let c;if(t.side===ae?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side!==hr,a),c===null)return null;Us.copy(a),Us.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Us);return l<e.near||l>e.far?null:{distance:l,point:Us.clone(),object:s}}function ks(s,t,e,n,i,r,o,a,c,l,h,u){Bn.fromBufferAttribute(i,l),On.fromBufferAttribute(i,h),zn.fromBufferAttribute(i,u);const d=s.morphTargetInfluences;if(r&&d){Is.set(0,0,0),Fs.set(0,0,0),Ns.set(0,0,0);for(let _=0,g=r.length;_<g;_++){const x=d[_],m=r[_];x!==0&&(la.fromBufferAttribute(m,l),ca.fromBufferAttribute(m,h),ha.fromBufferAttribute(m,u),o?(Is.addScaledVector(la,x),Fs.addScaledVector(ca,x),Ns.addScaledVector(ha,x)):(Is.addScaledVector(la.sub(Bn),x),Fs.addScaledVector(ca.sub(On),x),Ns.addScaledVector(ha.sub(zn),x)))}Bn.add(Is),On.add(Fs),zn.add(Ns)}s.isSkinnedMesh&&(s.boneTransform(l,Bn),s.boneTransform(h,On),s.boneTransform(u,zn));const f=lp(s,t,e,n,Bn,On,zn,ua);if(f){a&&(Bs.fromBufferAttribute(a,l),Os.fromBufferAttribute(a,h),zs.fromBufferAttribute(a,u),f.uv=se.getUV(ua,Bn,On,zn,Bs,Os,zs,new $)),c&&(Bs.fromBufferAttribute(c,l),Os.fromBufferAttribute(c,h),zs.fromBufferAttribute(c,u),f.uv2=se.getUV(ua,Bn,On,zn,Bs,Os,zs,new $));const _={a:l,b:h,c:u,normal:new C,materialIndex:0};se.getNormal(Bn,On,zn,_.normal),f.face=_}return f}class br extends $t{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function _(g,x,m,p,b,M,v,T,A,P,O){const U=M/A,y=v/P,R=M/2,D=v/2,I=T/2,N=A+1,F=P+1;let k=0,J=0;const Q=new C;for(let V=0;V<F;V++){const X=V*y-D;for(let it=0;it<N;it++){const at=it*U-R;Q[g]=at*p,Q[x]=X*b,Q[m]=I,l.push(Q.x,Q.y,Q.z),Q[g]=0,Q[x]=0,Q[m]=T>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(it/A),u.push(1-V/P),k+=1}}for(let V=0;V<P;V++)for(let X=0;X<A;X++){const it=d+X+N*V,at=d+X+N*(V+1),ut=d+(X+1)+N*(V+1),G=d+(X+1)+N*V;c.push(it,at,G),c.push(at,ut,G),J+=6}a.addGroup(f,J,O),f+=J,d+=k}}static fromJSON(t){return new br(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function dr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ve(s){const t={};for(let e=0;e<s.length;e++){const n=dr(s[e]);for(const i in n)t[i]=n[i]}return t}const cp={clone:dr,merge:ve};var hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Ae{constructor(t){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=hp,this.fragmentShader=up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dr(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}bi.prototype.isShaderMaterial=!0;class fl extends Ht{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}fl.prototype.isCamera=!0;class Le extends fl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ka*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}Le.prototype.isPerspectiveCamera=!0;const ki=90,Hi=1;class pl extends Ht{constructor(t,e,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Le(ki,Hi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new C(1,0,0)),this.add(i);const r=new Le(ki,Hi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new C(-1,0,0)),this.add(r);const o=new Le(ki,Hi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new C(0,1,0)),this.add(o);const a=new Le(ki,Hi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new C(0,-1,0)),this.add(a);const c=new Le(ki,Hi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new C(0,0,1)),this.add(c);const l=new Le(ki,Hi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new C(0,0,-1)),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,h=t.xr.enabled,u=t.getRenderTarget();t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class To extends pe{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:fs,super(t,e,n,i,r,o,a,c,l,h),this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}To.prototype.isCubeTexture=!0;class nu extends Je{constructor(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n),super(t,t,e),e=e||{},this.texture=new To(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Me}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.format=Ce,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new br(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ae,blending:qn});r.uniforms.tEquirect.value=e;const o=new Se(i,r),a=e.minFilter;return e.minFilter===So&&(e.minFilter=Me),new pl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}nu.prototype.isWebGLCubeRenderTarget=!0;const da=new C,dp=new C,fp=new xe;class An{constructor(t=new C(1,0,0),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=da.subVectors(n,e).cross(dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fp.getNormalMatrix(t),i=this.coplanarPoint(da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}An.prototype.isPlane=!0;const Vi=new vr,Hs=new C;class Eo{constructor(t=new An,e=new An,n=new An,i=new An,r=new An,o=new An){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],f=n[9],_=n[10],g=n[11],x=n[12],m=n[13],p=n[14],b=n[15];return e[0].setComponents(a-i,u-c,g-d,b-x).normalize(),e[1].setComponents(a+i,u+c,g+d,b+x).normalize(),e[2].setComponents(a+r,u+l,g+f,b+m).normalize(),e[3].setComponents(a-r,u-l,g-f,b-m).normalize(),e[4].setComponents(a-o,u-h,g-_,b-p).normalize(),e[5].setComponents(a+o,u+h,g+_,b+p).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSprite(t){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Hs.x=i.normal.x>0?t.max.x:t.min.x,Hs.y=i.normal.y>0?t.max.y:t.min.y,Hs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function iu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function pp(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,u,d),l.onUploadCallback();let _=5126;return u instanceof Float32Array?_=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?l.isFloat16BufferAttribute?e?_=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):_=5123:u instanceof Int16Array?_=5122:u instanceof Uint32Array?_=5125:u instanceof Int32Array?_=5124:u instanceof Int8Array?_=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(_=5121),{buffer:f,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const d=h.array,f=h.updateRange;s.bindBuffer(u,l),f.count===-1?s.bufferSubData(u,0,d):(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class Ao extends $t{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],_=[],g=[],x=[];for(let m=0;m<h;m++){const p=m*d-o;for(let b=0;b<l;b++){const M=b*u-r;_.push(M,-p,0),g.push(0,0,1),x.push(b/a),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let p=0;p<a;p++){const b=p+l*m,M=p+l*(m+1),v=p+1+l*(m+1),T=p+1+l*m;f.push(b,M,T),f.push(M,v,T)}this.setIndex(f),this.setAttribute("position",new fe(_,3)),this.setAttribute("normal",new fe(g,3)),this.setAttribute("uv",new fe(x,2))}static fromJSON(t){return new Ao(t.width,t.height,t.widthSegments,t.heightSegments)}}var mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mp="vec3 transformed = vec3( position );",bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ip=`#define PI 3.141592653589793
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
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Fp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,Np=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$p=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Kp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tm=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,nm=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,am=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
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
}`,cm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,dm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Em=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,eg=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ng=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ig=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,rg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,sg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,og=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ag=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,pg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,gg=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,Eg=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Lg=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Dg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Og=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pt={alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:_p,alphatest_pars_fragment:xp,aomap_fragment:yp,aomap_pars_fragment:vp,begin_vertex:Mp,beginnormal_vertex:bp,bsdfs:wp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:Cp,color_fragment:Rp,color_pars_fragment:Lp,color_pars_vertex:Pp,color_vertex:Dp,common:Ip,cube_uv_reflection_fragment:Fp,defaultnormal_vertex:Np,displacementmap_pars_vertex:Bp,displacementmap_vertex:Op,emissivemap_fragment:zp,emissivemap_pars_fragment:Up,encodings_fragment:kp,encodings_pars_fragment:Hp,envmap_fragment:Vp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Wp,envmap_pars_vertex:qp,envmap_physical_pars_fragment:nm,envmap_vertex:Xp,fog_vertex:Yp,fog_pars_vertex:jp,fog_fragment:Zp,fog_pars_fragment:Jp,gradientmap_pars_fragment:$p,lightmap_fragment:Kp,lightmap_pars_fragment:Qp,lights_lambert_vertex:tm,lights_pars_begin:em,lights_toon_fragment:im,lights_toon_pars_fragment:rm,lights_phong_fragment:sm,lights_phong_pars_fragment:om,lights_physical_fragment:am,lights_physical_pars_fragment:lm,lights_fragment_begin:cm,lights_fragment_maps:hm,lights_fragment_end:um,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:_m,map_particle_fragment:xm,map_particle_pars_fragment:ym,metalnessmap_fragment:vm,metalnessmap_pars_fragment:Mm,morphnormal_vertex:bm,morphtarget_pars_vertex:wm,morphtarget_vertex:Sm,normal_fragment_begin:Tm,normal_fragment_maps:Em,normal_pars_fragment:Am,normal_pars_vertex:Cm,normal_vertex:Rm,normalmap_pars_fragment:Lm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Im,output_fragment:Fm,packing:Nm,premultiplied_alpha_fragment:Bm,project_vertex:Om,dithering_fragment:zm,dithering_pars_fragment:Um,roughnessmap_fragment:km,roughnessmap_pars_fragment:Hm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Gm,shadowmap_vertex:Wm,shadowmask_pars_fragment:qm,skinbase_vertex:Xm,skinning_pars_vertex:Ym,skinning_vertex:jm,skinnormal_vertex:Zm,specularmap_fragment:Jm,specularmap_pars_fragment:$m,tonemapping_fragment:Km,tonemapping_pars_fragment:Qm,transmission_fragment:tg,transmission_pars_fragment:eg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:rg,uv2_pars_fragment:sg,uv2_pars_vertex:og,uv2_vertex:ag,worldpos_vertex:lg,background_vert:cg,background_frag:hg,cube_vert:ug,cube_frag:dg,depth_vert:fg,depth_frag:pg,distanceRGBA_vert:mg,distanceRGBA_frag:gg,equirect_vert:_g,equirect_frag:xg,linedashed_vert:yg,linedashed_frag:vg,meshbasic_vert:Mg,meshbasic_frag:bg,meshlambert_vert:wg,meshlambert_frag:Sg,meshmatcap_vert:Tg,meshmatcap_frag:Eg,meshnormal_vert:Ag,meshnormal_frag:Cg,meshphong_vert:Rg,meshphong_frag:Lg,meshphysical_vert:Pg,meshphysical_frag:Dg,meshtoon_vert:Ig,meshtoon_frag:Fg,points_vert:Ng,points_frag:Bg,shadow_vert:Og,shadow_frag:zg,sprite_vert:Ug,sprite_frag:kg},nt={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xe},uv2Transform:{value:new xe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xe}}},dn={basic:{uniforms:ve([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:ve([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.fog,nt.lights,{emissive:{value:new pt(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:ve([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:ve([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:ve([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new pt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:ve([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:ve([nt.points,nt.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:ve([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:ve([nt.common,nt.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:ve([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:ve([nt.sprite,nt.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},cube:{uniforms:ve([nt.envmap,{opacity:{value:1}}]),vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:ve([nt.common,nt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:ve([nt.lights,nt.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};dn.physical={uniforms:ve([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};function Hg(s,t,e,n,i,r){const o=new pt(0);let a=i===!0?0:1,c,l,h=null,u=0,d=null;function f(g,x){let m=!1,p=x.isScene===!0?x.background:null;p&&p.isTexture&&(p=t.get(p));const b=s.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(p=null),p===null?_(o,a):p&&p.isColor&&(_(p,1),m=!0),(s.autoClear||m)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),p&&(p.isCubeTexture||p.mapping===wo)?(l===void 0&&(l=new Se(new br(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:dr(dn.cube.uniforms),vertexShader:dn.cube.vertexShader,fragmentShader:dn.cube.fragmentShader,side:ae,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(h!==p||u!==p.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=p,u=p.version,d=s.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new Se(new Ao(2,2),new bi({name:"BackgroundMaterial",uniforms:dr(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||u!==p.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=p,u=p.version,d=s.toneMapping),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,x){e.buffers.color.setClear(g.r,g.g,g.b,x,r)}return{getClearColor:function(){return o},setClearColor:function(g,x=1){o.set(g),a=x,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,_(o,a)},render:f}}function Vg(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null);let l=c;function h(D,I,N,F,k){let J=!1;if(o){const Q=_(F,N,I);l!==Q&&(l=Q,d(l.object)),J=x(F,k),J&&m(F,k)}else{const Q=I.wireframe===!0;(l.geometry!==F.id||l.program!==N.id||l.wireframe!==Q)&&(l.geometry=F.id,l.program=N.id,l.wireframe=Q,J=!0)}D.isInstancedMesh===!0&&(J=!0),k!==null&&e.update(k,34963),J&&(A(D,I,N,F),k!==null&&s.bindBuffer(34963,e.get(k).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function f(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,I,N){const F=N.wireframe===!0;let k=a[D.id];k===void 0&&(k={},a[D.id]=k);let J=k[I.id];J===void 0&&(J={},k[I.id]=J);let Q=J[F];return Q===void 0&&(Q=g(u()),J[F]=Q),Q}function g(D){const I=[],N=[],F=[];for(let k=0;k<i;k++)I[k]=0,N[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:F,object:D,attributes:{},index:null}}function x(D,I){const N=l.attributes,F=D.attributes;let k=0;for(const J in F){const Q=N[J],V=F[J];if(Q===void 0||Q.attribute!==V||Q.data!==V.data)return!0;k++}return l.attributesNum!==k||l.index!==I}function m(D,I){const N={},F=D.attributes;let k=0;for(const J in F){const Q=F[J],V={};V.attribute=Q,Q.data&&(V.data=Q.data),N[J]=V,k++}l.attributes=N,l.attributesNum=k,l.index=I}function p(){const D=l.newAttributes;for(let I=0,N=D.length;I<N;I++)D[I]=0}function b(D){M(D,0)}function M(D,I){const N=l.newAttributes,F=l.enabledAttributes,k=l.attributeDivisors;N[D]=1,F[D]===0&&(s.enableVertexAttribArray(D),F[D]=1),k[D]!==I&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,I),k[D]=I)}function v(){const D=l.newAttributes,I=l.enabledAttributes;for(let N=0,F=I.length;N<F;N++)I[N]!==D[N]&&(s.disableVertexAttribArray(N),I[N]=0)}function T(D,I,N,F,k,J){n.isWebGL2===!0&&(N===5124||N===5125)?s.vertexAttribIPointer(D,I,N,k,J):s.vertexAttribPointer(D,I,N,F,k,J)}function A(D,I,N,F){if(n.isWebGL2===!1&&(D.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;p();const k=F.attributes,J=N.getAttributes(),Q=I.defaultAttributeValues;for(const V in J){const X=J[V];if(X.location>=0){let it=k[V];if(it===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),it!==void 0){const at=it.normalized,ut=it.itemSize,G=e.get(it);if(G===void 0)continue;const Ot=G.buffer,mt=G.type,bt=G.bytesPerElement;if(it.isInterleavedBufferAttribute){const ct=it.data,Ct=ct.stride,wt=it.offset;if(ct&&ct.isInstancedInterleavedBuffer){for(let Y=0;Y<X.locationSize;Y++)M(X.location+Y,ct.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Y=0;Y<X.locationSize;Y++)b(X.location+Y);s.bindBuffer(34962,Ot);for(let Y=0;Y<X.locationSize;Y++)T(X.location+Y,ut/X.locationSize,mt,at,Ct*bt,(wt+ut/X.locationSize*Y)*bt)}else{if(it.isInstancedBufferAttribute){for(let ct=0;ct<X.locationSize;ct++)M(X.location+ct,it.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ct=0;ct<X.locationSize;ct++)b(X.location+ct);s.bindBuffer(34962,Ot);for(let ct=0;ct<X.locationSize;ct++)T(X.location+ct,ut/X.locationSize,mt,at,ut*bt,ut/X.locationSize*ct*bt)}}else if(Q!==void 0){const at=Q[V];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(X.location,at);break;case 3:s.vertexAttrib3fv(X.location,at);break;case 4:s.vertexAttrib4fv(X.location,at);break;default:s.vertexAttrib1fv(X.location,at)}}}}v()}function P(){y();for(const D in a){const I=a[D];for(const N in I){const F=I[N];for(const k in F)f(F[k].object),delete F[k];delete I[N]}delete a[D]}}function O(D){if(a[D.id]===void 0)return;const I=a[D.id];for(const N in I){const F=I[N];for(const k in F)f(F[k].object),delete F[k];delete I[N]}delete a[D.id]}function U(D){for(const I in a){const N=a[I];if(N[D.id]===void 0)continue;const F=N[D.id];for(const k in F)f(F[k].object),delete F[k];delete N[D.id]}}function y(){R(),l!==c&&(l=c,d(l.object))}function R(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:y,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:p,enableAttribute:b,disableUnusedAttributes:v}}function Gg(s,t,e,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,h){s.drawArrays(r,l,h),e.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,l,h,u),e.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function Wg(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),f=s.getParameter(3379),_=s.getParameter(34076),g=s.getParameter(34921),x=s.getParameter(36347),m=s.getParameter(36348),p=s.getParameter(36349),b=d>0,M=o||t.has("OES_texture_float"),v=b&&M,T=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:x,maxVaryings:m,maxFragmentUniforms:p,vertexTextures:b,floatFragmentTextures:M,floatVertexTextures:v,maxSamples:T}}function qg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new An,a=new xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const _=u.length!==0||d||n!==0||i;return i=d,e=h(u,f,0),n=u.length,_},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,l()},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,x=u.clipShadows,m=s.get(u);if(!i||_===null||_.length===0||r&&!x)r?h(null):l();else{const p=r?0:n,b=p*4;let M=m.clippingState||null;c.value=M,M=h(_,d,b,f);for(let v=0;v!==b;++v)M[v]=e[v];m.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=p}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let x=null;if(g!==0){if(x=c.value,_!==!0||x===null){const m=f+g*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(x===null||x.length<m)&&(x=new Float32Array(m));for(let b=0,M=f;b!==g;++b,M+=4)o.copy(u[b]).applyMatrix4(p,a),o.normal.toArray(x,M),x[M+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,x}}function Xg(s){let t=new WeakMap;function e(o,a){return a===Na?o.mapping=fs:a===Ba&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Na||a===Ba)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new nu(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Co extends fl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}Co.prototype.isOrthographicCamera=!0;class Ro extends bi{constructor(t){super(t),this.type="RawShaderMaterial"}}Ro.prototype.isRawShaderMaterial=!0;const or=4,jn=8,un=Math.pow(2,jn),ru=[.125,.215,.35,.446,.526,.582],su=jn-or+1+ru.length,Gi=20,fa=new Co,{_lodPlanes:Ir,_sizeLods:Nc,_sigmas:Vs}=Yg(),Bc=new pt;let pa=null;const fi=(1+Math.sqrt(5))/2,Wi=1/fi,Oc=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,fi,Wi),new C(0,fi,-Wi),new C(Wi,0,fi),new C(-Wi,0,fi),new C(fi,Wi,0),new C(-fi,Wi,0)];class zc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._blurMaterial=jg(Gi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){pa=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Hc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=kc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let t=0;t<Ir.length;t++)Ir[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pa),t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){pa=this._renderer.getRenderTarget();const n=e||this._allocateTargets(t);return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(t){const e={magFilter:Me,minFilter:Me,generateMipmaps:!1,type:ir,format:Ce,encoding:Qn,depthBuffer:!1},n=Uc(e);return n.depthBuffer=!t,this._pingPongRenderTarget===null&&(this._pingPongRenderTarget=Uc(e)),n}_compileMaterial(t){const e=new Se(Ir[0],t);this._renderer.compile(e,fa)}_sceneToCubeUV(t,e,n,i){const a=new Le(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bc),h.toneMapping=Xn,h.autoClear=!1;const f=new dl({name:"PMREM.Background",side:ae,depthWrite:!1,depthTest:!1}),_=new Se(new br,f);let g=!1;const x=t.background;x?x.isColor&&(f.color.copy(x),t.background=null,g=!0):(f.color.copy(Bc),g=!0);for(let m=0;m<6;m++){const p=m%3;p===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):p===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m])),Gs(i,p*un,m>2?un:0,un,un),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===fs||t.mapping===ps;i?(this._cubemapShader===null&&(this._cubemapShader=Hc()),this._cubemapShader.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectShader===null&&(this._equirectShader=kc());const r=i?this._cubemapShader:this._equirectShader,o=new Se(Ir[0],r),a=r.uniforms;a.envMap.value=t,i||a.texelSize.value.set(1/t.image.width,1/t.image.height),Gs(e,0,0,3*un,2*un),n.setRenderTarget(e),n.render(o,fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<su;i++){const r=Math.sqrt(Vs[i]*Vs[i]-Vs[i-1]*Vs[i-1]),o=Oc[(i-1)%Oc.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Se(Ir[i],l),d=l.uniforms,f=Nc[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),g=r/_,x=isFinite(r)?1+Math.floor(h*g):Gi;x>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Gi}`);const m=[];let p=0;for(let T=0;T<Gi;++T){const A=T/g,P=Math.exp(-A*A/2);m.push(P),T===0?p+=P:T<x&&(p+=2*P)}for(let T=0;T<m.length;T++)m[T]=m[T]/p;d.envMap.value=t.texture,d.samples.value=x,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a),d.dTheta.value=_,d.mipInt.value=jn-n;const b=Nc[i],M=3*Math.max(0,un-2*b),v=(i===0?0:2*un)+2*b*(i>jn-or?i-jn+or:0);Gs(e,M,v,3*b,2*b),c.setRenderTarget(e),c.render(u,fa)}}function Yg(){const s=[],t=[],e=[];let n=jn;for(let i=0;i<su;i++){const r=Math.pow(2,n);t.push(r);let o=1/r;i>jn-or?o=ru[i-jn+or-1]:i===0&&(o=0),e.push(o);const a=1/(r-1),c=-a/2,l=1+a/2,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,_=2,g=1,x=new Float32Array(f*d*u),m=new Float32Array(_*d*u),p=new Float32Array(g*d*u);for(let M=0;M<u;M++){const v=M%3*2/3-1,T=M>2?0:-1,A=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];x.set(A,f*d*M),m.set(h,_*d*M);const P=[M,M,M,M,M,M];p.set(P,g*d*M)}const b=new $t;b.setAttribute("position",new ce(x,f)),b.setAttribute("uv",new ce(m,_)),b.setAttribute("faceIndex",new ce(p,g)),s.push(b),n>or&&n--}return{_lodPlanes:s,_sizeLods:t,_sigmas:e}}function Uc(s){const t=new Je(3*un,3*un,s);return t.texture.mapping=wo,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function Gs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function jg(s){const t=new Float32Array(s),e=new C(0,1,0);return new Ro({name:"SphericalGaussianBlur",defines:{n:s},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:e}},vertexShader:ml(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function kc(){const s=new $(1,1);return new Ro({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = texture2D ( envMap, uv ).rgb;
				uv.x += texelSize.x;
				vec3 tr = texture2D ( envMap, uv ).rgb;
				uv.y += texelSize.y;
				vec3 br = texture2D ( envMap, uv ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = texture2D ( envMap, uv ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Hc(){return new Ro({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ml(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function Zg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Na||c===Ba,h=c===fs||c===ps;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new zc(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new zc(s));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Jg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $g(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)t.update(d[_],34962);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let x=0,m=g.length;x<m;x++)t.update(g[x],34962)}}function l(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const p=f.array;g=f.version;for(let b=0,M=p.length;b<M;b+=3){const v=p[b+0],T=p[b+1],A=p[b+2];d.push(v,T,T,A,A,v)}}else{const p=_.array;g=_.version;for(let b=0,M=p.length/3-1;b<M;b+=3){const v=b+0,T=b+1,A=b+2;d.push(v,T,T,A,A,v)}}const x=new(Kh(d)?eu:tu)(d,1);x.version=g;const m=r.get(u);m&&t.remove(m),r.set(u,x)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Kg(s,t,e,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,f){s.drawElements(r,f,a,d*c),e.update(f,r,1)}function u(d,f,_){if(_===0)return;let g,x;if(i)g=s,x="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](r,f,a,d*c,_),e.update(f,r,_)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function Qg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}class gl extends pe{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=le,this.minFilter=le,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}gl.prototype.isDataTexture2DArray=!0;function t_(s,t){return s[0]-t[0]}function e_(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Vc(s,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(e)}function n_(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new C,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u,d){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position.length;let x=r.get(h);if(x===void 0||x.count!==g){let D=function(){y.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var _=D;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.normal!==void 0,M=h.morphAttributes.position,v=h.morphAttributes.normal||[],T=h.attributes.position.count,A=b===!0?2:1;let P=T*A,O=1;P>t.maxTextureSize&&(O=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const U=new Float32Array(P*O*4*g),y=new gl(U,P,O,g);y.format=Ce,y.type=gi,y.needsUpdate=!0;const R=A*4;for(let I=0;I<g;I++){const N=M[I],F=v[I],k=P*O*4*I;for(let J=0;J<N.count;J++){o.fromBufferAttribute(N,J),N.normalized===!0&&Vc(o,N);const Q=J*R;U[k+Q+0]=o.x,U[k+Q+1]=o.y,U[k+Q+2]=o.z,U[k+Q+3]=0,b===!0&&(o.fromBufferAttribute(F,J),F.normalized===!0&&Vc(o,F),U[k+Q+4]=o.x,U[k+Q+5]=o.y,U[k+Q+6]=o.z,U[k+Q+7]=0)}}x={count:g,texture:y,size:new $(P,O)},r.set(h,x),h.addEventListener("dispose",D)}let m=0;for(let b=0;b<f.length;b++)m+=f[b];const p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(s,"morphTargetBaseInfluence",p),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const g=f===void 0?0:f.length;let x=n[h.id];if(x===void 0||x.length!==g){x=[];for(let v=0;v<g;v++)x[v]=[v,0];n[h.id]=x}for(let v=0;v<g;v++){const T=x[v];T[0]=v,T[1]=f[v]}x.sort(e_);for(let v=0;v<8;v++)v<g&&x[v][1]?(a[v][0]=x[v][0],a[v][1]=x[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(t_);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let b=0;for(let v=0;v<8;v++){const T=a[v],A=T[0],P=T[1];A!==Number.MAX_SAFE_INTEGER&&P?(m&&h.getAttribute("morphTarget"+v)!==m[A]&&h.setAttribute("morphTarget"+v,m[A]),p&&h.getAttribute("morphNormal"+v)!==p[A]&&h.setAttribute("morphNormal"+v,p[A]),i[v]=P,b+=P):(m&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const M=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function i_(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);return i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class ou extends pe{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=le,this.minFilter=le,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}ou.prototype.isDataTexture3D=!0;const au=new pe,lu=new gl,cu=new ou,hu=new To,Gc=[],Wc=[],qc=new Float32Array(16),Xc=new Float32Array(9),Yc=new Float32Array(4);function wr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Gc[i];if(r===void 0&&(r=new Float32Array(i),Gc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Lo(s,t){let e=Wc[t];e===void 0&&(e=new Int32Array(t),Wc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function r_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function s_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function o_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function a_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function l_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Re(e,n))return;Yc.set(n),s.uniformMatrix2fv(this.addr,!1,Yc),Ee(e,n)}}function c_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Re(e,n))return;Xc.set(n),s.uniformMatrix3fv(this.addr,!1,Xc),Ee(e,n)}}function h_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Re(e,n))return;qc.set(n),s.uniformMatrix4fv(this.addr,!1,qc),Ee(e,n)}}function u_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function d_(s,t){const e=this.cache;Re(e,t)||(s.uniform2iv(this.addr,t),Ee(e,t))}function f_(s,t){const e=this.cache;Re(e,t)||(s.uniform3iv(this.addr,t),Ee(e,t))}function p_(s,t){const e=this.cache;Re(e,t)||(s.uniform4iv(this.addr,t),Ee(e,t))}function m_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function g_(s,t){const e=this.cache;Re(e,t)||(s.uniform2uiv(this.addr,t),Ee(e,t))}function __(s,t){const e=this.cache;Re(e,t)||(s.uniform3uiv(this.addr,t),Ee(e,t))}function x_(s,t){const e=this.cache;Re(e,t)||(s.uniform4uiv(this.addr,t),Ee(e,t))}function y_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.safeSetTexture2D(t||au,i)}function v_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cu,i)}function M_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.safeSetTextureCube(t||hu,i)}function b_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lu,i)}function w_(s){switch(s){case 5126:return r_;case 35664:return s_;case 35665:return o_;case 35666:return a_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return d_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return b_}}function S_(s,t){s.uniform1fv(this.addr,t)}function T_(s,t){const e=wr(t,this.size,2);s.uniform2fv(this.addr,e)}function E_(s,t){const e=wr(t,this.size,3);s.uniform3fv(this.addr,e)}function A_(s,t){const e=wr(t,this.size,4);s.uniform4fv(this.addr,e)}function C_(s,t){const e=wr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function R_(s,t){const e=wr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function L_(s,t){const e=wr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function P_(s,t){s.uniform1iv(this.addr,t)}function D_(s,t){s.uniform2iv(this.addr,t)}function I_(s,t){s.uniform3iv(this.addr,t)}function F_(s,t){s.uniform4iv(this.addr,t)}function N_(s,t){s.uniform1uiv(this.addr,t)}function B_(s,t){s.uniform2uiv(this.addr,t)}function O_(s,t){s.uniform3uiv(this.addr,t)}function z_(s,t){s.uniform4uiv(this.addr,t)}function U_(s,t,e){const n=t.length,i=Lo(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.safeSetTexture2D(t[r]||au,i[r])}function k_(s,t,e){const n=t.length,i=Lo(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture3D(t[r]||cu,i[r])}function H_(s,t,e){const n=t.length,i=Lo(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.safeSetTextureCube(t[r]||hu,i[r])}function V_(s,t,e){const n=t.length,i=Lo(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||lu,i[r])}function G_(s){switch(s){case 5126:return S_;case 35664:return T_;case 35665:return E_;case 35666:return A_;case 35674:return C_;case 35675:return R_;case 35676:return L_;case 5124:case 35670:return P_;case 35667:case 35671:return D_;case 35668:case 35672:return I_;case 35669:case 35673:return F_;case 5125:return N_;case 36294:return B_;case 36295:return O_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return k_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return V_}}function W_(s,t,e){this.id=s,this.addr=e,this.cache=[],this.setValue=w_(t.type)}function uu(s,t,e){this.id=s,this.addr=e,this.cache=[],this.size=t.size,this.setValue=G_(t.type)}uu.prototype.updateCache=function(s){const t=this.cache;s instanceof Float32Array&&t.length!==s.length&&(this.cache=new Float32Array(s.length)),Ee(t,s)};function du(s){this.id=s,this.seq=[],this.map={}}du.prototype.setValue=function(s,t,e){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const o=n[i];o.setValue(s,t[o.id],e)}};const ma=/(\w+)(\])?(\[|\.)?/g;function jc(s,t){s.seq.push(t),s.map[t.id]=t}function q_(s,t,e){const n=s.name,i=n.length;for(ma.lastIndex=0;;){const r=ma.exec(n),o=ma.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){jc(e,l===void 0?new W_(a,s,t):new uu(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new du(a),jc(e,u)),e=u}}}function Zn(s,t){this.seq=[],this.map={};const e=s.getProgramParameter(t,35718);for(let n=0;n<e;++n){const i=s.getActiveUniform(t,n),r=s.getUniformLocation(t,i.name);q_(i,r,this)}}Zn.prototype.setValue=function(s,t,e,n){const i=this.map[t];i!==void 0&&i.setValue(s,e,n)};Zn.prototype.setOptional=function(s,t,e){const n=t[e];n!==void 0&&this.setValue(s,e,n)};Zn.upload=function(s,t,e,n){for(let i=0,r=t.length;i!==r;++i){const o=t[i],a=e[o.id];a.needsUpdate!==!1&&o.setValue(s,a.value,n)}};Zn.seqWithValue=function(s,t){const e=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in t&&e.push(r)}return e};function Zc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let X_=0;function Y_(s){const t=s.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function j_(s){switch(s){case Qn:return["Linear","( value )"];case Zt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Jc(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();return n&&i===""?"":e.toUpperCase()+`

`+i+`

`+Y_(s.getShaderSource(t))}function Z_(s,t){const e=j_(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function J_(s,t){let e;switch(t){case yf:e="Linear";break;case vf:e="Reinhard";break;case Mf:e="OptimizedCineon";break;case bf:e="ACESFilmic";break;case wf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $_(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hr).join(`
`)}function K_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Q_(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Hr(s){return s!==""}function $c(s,t){return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(s){return s.replace(t0,e0)}function e0(s,t){const e=Pt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Ha(e)}const n0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,i0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(s){return s.replace(i0,fu).replace(n0,r0)}function r0(s,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),fu(s,t,e,n)}function fu(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function th(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function s0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Jd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kr&&(t="SHADOWMAP_TYPE_VSM"),t}function o0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fs:case ps:t="ENVMAP_TYPE_CUBE";break;case wo:case ll:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ps:case ll:t="ENVMAP_MODE_REFRACTION";break}return t}function l0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case bo:t="ENVMAP_BLENDING_MULTIPLY";break;case _f:t="ENVMAP_BLENDING_MIX";break;case xf:t="ENVMAP_BLENDING_ADD";break}return t}function c0(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=s0(e),l=o0(e),h=a0(e),u=l0(e),d=e.isWebGL2?"":$_(e),f=K_(r),_=i.createProgram();let g,x,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=[f].filter(Hr).join(`
`),g.length>0&&(g+=`
`),x=[d,f].filter(Hr).join(`
`),x.length>0&&(x+=`
`)):(g=[th(e),"#define SHADER_NAME "+e.shaderName,f,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+e.maxBones,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphTargets&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargets&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),x=[d,th(e),"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?J_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.transparent?"":"#define OPAQUE",Pt.encodings_pars_fragment,Z_("linearToOutputTexel",e.outputEncoding),e.depthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),o=Ha(o),o=$c(o,e),o=Kc(o,e),a=Ha(a),a=$c(a,e),a=Kc(a,e),o=Qc(o),a=Qc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,x=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const p=m+g+o,b=m+x+a,M=Zc(i,35633,p),v=Zc(i,35632,b);if(i.attachShader(_,M),i.attachShader(_,v),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const P=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(M).trim(),U=i.getShaderInfoLog(v).trim();let y=!0,R=!0;if(i.getProgramParameter(_,35714)===!1){y=!1;const D=Jc(i,M,"vertex"),I=Jc(i,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,35715)+`

Program Info Log: `+P+`
`+D+`
`+I)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(O===""||U==="")&&(R=!1);R&&(this.diagnostics={runnable:y,programLog:P,vertexShader:{log:O,prefix:g},fragmentShader:{log:U,prefix:x}})}i.deleteShader(M),i.deleteShader(v);let T;this.getUniforms=function(){return T===void 0&&(T=new Zn(i,_)),T};let A;return this.getAttributes=function(){return A===void 0&&(A=Q_(i,_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=e.shaderName,this.id=X_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=v,this}let h0=0;class u0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const n=new d0;e.set(t,n)}return e.get(t)}}class d0{constructor(){this.id=h0++,this.usedTimes=0}}function f0(s,t,e,n,i,r,o){const a=new ul,c=new u0,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.floatVertexTextures,f=i.maxVertexUniforms,_=i.vertexTextures;let g=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){const D=y.skeleton.bones;if(d)return 1024;{const N=Math.floor((f-20)/4),F=Math.min(N,D.length);return F<D.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+D.length+" bones. This GPU supports "+F+"."),0):F}}function p(y,R,D,I,N){const F=I.fog,k=y.isMeshStandardMaterial?I.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),Q=x[y.type],V=N.isSkinnedMesh?m(N):0;y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let X,it,at,ut;if(Q){const ct=dn[Q];X=ct.vertexShader,it=ct.fragmentShader}else X=y.vertexShader,it=y.fragmentShader,c.update(y),at=c.getVertexShaderID(y),ut=c.getFragmentShaderID(y);const G=s.getRenderTarget(),Ot=y.alphaTest>0,mt=y.clearcoat>0;return{isWebGL2:h,shaderID:Q,shaderName:y.type,vertexShader:X,fragmentShader:it,defines:y.defines,customVertexShaderID:at,customFragmentShaderID:ut,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:N.isInstancedMesh===!0,instancingColor:N.isInstancedMesh===!0&&N.instanceColor!==null,supportsVertexTextures:_,outputEncoding:G===null?s.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Qn,map:!!y.map,matcap:!!y.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUV:!!J&&(J.mapping===wo||J.mapping===ll),lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Xf,tangentSpaceNormalMap:y.normalMapType===yr,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Zt,clearcoat:mt,clearcoatMap:mt&&!!y.clearcoatMap,clearcoatRoughnessMap:mt&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:mt&&!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,transparent:y.transparent,alphaMap:!!y.alphaMap,alphaTest:Ot,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!N.geometry&&!!N.geometry.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.geometry&&!!N.geometry.attributes.color&&N.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!F,useFog:y.fog,fogExp2:F&&F.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0&&V>0,maxBones:V,useVertexTexture:d,morphTargets:!!N.geometry&&!!N.geometry.morphAttributes.position,morphNormals:!!N.geometry&&!!N.geometry.morphAttributes.normal,morphTargetsCount:!!N.geometry&&!!N.geometry.morphAttributes.position?N.geometry.morphAttributes.position.length:0,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:Xn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hr,flipSided:y.side===ae,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function b(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)R.push(D),R.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(M(R,y),v(R,y),R.push(s.outputEncoding)),R.push(y.customProgramCacheKey),R.join()}function M(y,R){y.push(R.precision),y.push(R.outputEncoding),y.push(R.envMapMode),y.push(R.combine),y.push(R.vertexUvs),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.maxBones),y.push(R.morphTargetsCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection)}function v(y,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.map&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.envMapCubeUV&&a.enable(7),R.lightMap&&a.enable(8),R.aoMap&&a.enable(9),R.emissiveMap&&a.enable(10),R.bumpMap&&a.enable(11),R.normalMap&&a.enable(12),R.objectSpaceNormalMap&&a.enable(13),R.tangentSpaceNormalMap&&a.enable(14),R.clearcoat&&a.enable(15),R.clearcoatMap&&a.enable(16),R.clearcoatRoughnessMap&&a.enable(17),R.clearcoatNormalMap&&a.enable(18),R.displacementMap&&a.enable(19),R.specularMap&&a.enable(20),R.roughnessMap&&a.enable(21),R.metalnessMap&&a.enable(22),R.gradientMap&&a.enable(23),R.alphaMap&&a.enable(24),R.alphaTest&&a.enable(25),R.vertexColors&&a.enable(26),R.vertexAlphas&&a.enable(27),R.vertexUvs&&a.enable(28),R.vertexTangents&&a.enable(29),R.uvsVertexOnly&&a.enable(30),R.fog&&a.enable(31),y.push(a.mask),a.disableAll(),R.useFog&&a.enable(0),R.flatShading&&a.enable(1),R.logarithmicDepthBuffer&&a.enable(2),R.skinning&&a.enable(3),R.useVertexTexture&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.premultipliedAlpha&&a.enable(7),R.shadowMapEnabled&&a.enable(8),R.physicallyCorrectLights&&a.enable(9),R.doubleSided&&a.enable(10),R.flipSided&&a.enable(11),R.depthPacking&&a.enable(12),R.dithering&&a.enable(13),R.specularIntensityMap&&a.enable(14),R.specularColorMap&&a.enable(15),R.transmission&&a.enable(16),R.transmissionMap&&a.enable(17),R.thicknessMap&&a.enable(18),R.sheen&&a.enable(19),R.sheenColorMap&&a.enable(20),R.sheenRoughnessMap&&a.enable(21),R.decodeVideoTexture&&a.enable(22),R.transparent&&a.enable(23),y.push(a.mask)}function T(y){const R=x[y.type];let D;if(R){const I=dn[R];D=cp.clone(I.uniforms)}else D=y.uniforms;return D}function A(y,R){let D;for(let I=0,N=l.length;I<N;I++){const F=l[I];if(F.cacheKey===R){D=F,++D.usedTimes;break}}return D===void 0&&(D=new c0(s,R,y,r),l.push(D)),D}function P(y){if(--y.usedTimes===0){const R=l.indexOf(y);l[R]=l[l.length-1],l.pop(),y.destroy()}}function O(y){c.remove(y)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:T,acquireProgram:A,releaseProgram:P,releaseShaderCache:O,programs:l,dispose:U}}function p0(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function m0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function eh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function nh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,_,g,x){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:x},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=x),t++,m}function a(u,d,f,_,g,x){const m=o(u,d,f,_,g,x);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function c(u,d,f,_,g,x){const m=o(u,d,f,_,g,x);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||m0),n.length>1&&n.sort(d||eh),i.length>1&&i.sort(d||eh)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function g0(){let s=new WeakMap;function t(n,i){let r;return s.has(n)===!1?(r=new nh,s.set(n,[r])):i>=s.get(n).length?(r=new nh,s.get(n).push(r)):r=s.get(n)[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function _0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new pt};break;case"SpotLight":e={position:new C,direction:new C,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function x0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let y0=0;function v0(s,t){return(t.castShadow?1:0)-(s.castShadow?1:0)}function M0(s,t){const e=new _0,n=x0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new C);const r=new C,o=new yt,a=new yt;function c(h,u){let d=0,f=0,_=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let g=0,x=0,m=0,p=0,b=0,M=0,v=0,T=0;h.sort(v0);const A=u!==!0?Math.PI:1;for(let O=0,U=h.length;O<U;O++){const y=h[O],R=y.color,D=y.intensity,I=y.distance,N=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)d+=R.r*D*A,f+=R.g*D*A,_+=R.b*D*A;else if(y.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(y.sh.coefficients[F],D);else if(y.isDirectionalLight){const F=e.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity*A),y.castShadow){const k=y.shadow,J=n.get(y);J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=N,i.directionalShadowMatrix[g]=y.shadow.matrix,M++}i.directional[g]=F,g++}else if(y.isSpotLight){const F=e.get(y);if(F.position.setFromMatrixPosition(y.matrixWorld),F.color.copy(R).multiplyScalar(D*A),F.distance=I,F.coneCos=Math.cos(y.angle),F.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),F.decay=y.decay,y.castShadow){const k=y.shadow,J=n.get(y);J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,i.spotShadow[m]=J,i.spotShadowMap[m]=N,i.spotShadowMatrix[m]=y.shadow.matrix,T++}i.spot[m]=F,m++}else if(y.isRectAreaLight){const F=e.get(y);F.color.copy(R).multiplyScalar(D),F.halfWidth.set(y.width*.5,0,0),F.halfHeight.set(0,y.height*.5,0),i.rectArea[p]=F,p++}else if(y.isPointLight){const F=e.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity*A),F.distance=y.distance,F.decay=y.decay,y.castShadow){const k=y.shadow,J=n.get(y);J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,J.shadowCameraNear=k.camera.near,J.shadowCameraFar=k.camera.far,i.pointShadow[x]=J,i.pointShadowMap[x]=N,i.pointShadowMatrix[x]=y.shadow.matrix,v++}i.point[x]=F,x++}else if(y.isHemisphereLight){const F=e.get(y);F.skyColor.copy(y.color).multiplyScalar(D*A),F.groundColor.copy(y.groundColor).multiplyScalar(D*A),i.hemi[b]=F,b++}}p>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=_;const P=i.hash;(P.directionalLength!==g||P.pointLength!==x||P.spotLength!==m||P.rectAreaLength!==p||P.hemiLength!==b||P.numDirectionalShadows!==M||P.numPointShadows!==v||P.numSpotShadows!==T)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=x,i.hemi.length=b,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotShadowMatrix.length=T,P.directionalLength=g,P.pointLength=x,P.spotLength=m,P.rectAreaLength=p,P.hemiLength=b,P.numDirectionalShadows=M,P.numPointShadows=v,P.numSpotShadows=T,i.version=y0++)}function l(h,u){let d=0,f=0,_=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,b=h.length;p<b;p++){const M=h[p];if(M.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(M.isSpotLight){const v=i.spot[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),_++}else if(M.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),v.direction.normalize(),x++}}}return{setup:c,setupView:l,state:i}}function ih(s,t){const e=new M0(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function b0(s,t){let e=new WeakMap;function n(r,o=0){let a;return e.has(r)===!1?(a=new ih(s,t),e.set(r,[a])):o>=e.get(r).length?(a=new ih(s,t),e.get(r).push(a)):a=e.get(r)[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class pu extends Ae{constructor(t){super(),this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}pu.prototype.isMeshDepthMaterial=!0;class mu extends Ae{constructor(t){super(),this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}mu.prototype.isMeshDistanceMaterial=!0;const w0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S0=`uniform sampler2D shadow_pass;
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
}`;function gu(s,t,e){let n=new Eo;const i=new $,r=new $,o=new Xt,a=new pu({depthPacking:qf}),c=new mu,l={},h=e.maxTextureSize,u={0:ae,1:Kr,2:hr},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:w0,fragmentShader:S0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new $t;_.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Se(_,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh,this.render=function(M,v,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;const A=s.getRenderTarget(),P=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),U=s.state;U.setBlending(qn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let y=0,R=M.length;y<R;y++){const D=M[y],I=D.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const N=I.getFrameExtents();if(i.multiply(N),r.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/N.x),i.x=r.x*N.x,I.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/N.y),i.y=r.y*N.y,I.mapSize.y=r.y)),I.map===null&&!I.isPointLightShadow&&this.type===kr){const k={minFilter:Me,magFilter:Me,format:Ce};I.map=new Je(i.x,i.y,k),I.map.texture.name=D.name+".shadowMap",I.mapPass=new Je(i.x,i.y,k),I.camera.updateProjectionMatrix()}if(I.map===null){const k={minFilter:le,magFilter:le,format:Ce};I.map=new Je(i.x,i.y,k),I.map.texture.name=D.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const F=I.getViewportCount();for(let k=0;k<F;k++){const J=I.getViewport(k);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),U.viewport(o),I.updateMatrices(D,k),n=I.getFrustum(),b(v,T,I.camera,D,this.type)}!I.isPointLightShadow&&this.type===kr&&m(I,T),I.needsUpdate=!1}x.needsUpdate=!1,s.setRenderTarget(A,P,O)};function m(M,v){const T=t.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(v,null,T,d,g,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(v,null,T,f,g,null)}function p(M,v,T,A,P,O,U){let y=null;const R=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0?y=R:y=A.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){const D=y.uuid,I=T.uuid;let N=l[D];N===void 0&&(N={},l[D]=N);let F=N[I];F===void 0&&(F=y.clone(),N[I]=F),y=F}return y.visible=T.visible,y.wireframe=T.wireframe,U===kr?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0&&(y.referencePosition.setFromMatrixPosition(A.matrixWorld),y.nearDistance=P,y.farDistance=O),y}function b(M,v,T,A,P){if(M.visible===!1)return;if(M.layers.test(v.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===kr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const y=t.update(M),R=M.material;if(Array.isArray(R)){const D=y.groups;for(let I=0,N=D.length;I<N;I++){const F=D[I],k=R[F.materialIndex];if(k&&k.visible){const J=p(M,y,k,A,T.near,T.far,P);s.renderBufferDirect(T,null,y,J,M,F)}}}else if(R.visible){const D=p(M,y,R,A,T.near,T.far,P);s.renderBufferDirect(T,null,y,D,M,null)}}const U=M.children;for(let y=0,R=U.length;y<R;y++)b(U[y],v,T,A,P)}}function T0(s,t,e){const n=e.isWebGL2;function i(){let L=!1;const dt=new Xt;let lt=null;const Mt=new Xt(0,0,0,0);return{setMask:function(j){lt!==j&&!L&&(s.colorMask(j,j,j,j),lt=j)},setLocked:function(j){L=j},setClear:function(j,xt,Dt,Kt,Be){Be===!0&&(j*=Kt,xt*=Kt,Dt*=Kt),dt.set(j,xt,Dt,Kt),Mt.equals(dt)===!1&&(s.clearColor(j,xt,Dt,Kt),Mt.copy(dt))},reset:function(){L=!1,lt=null,Mt.set(-1,0,0,0)}}}function r(){let L=!1,dt=null,lt=null,Mt=null;return{setTest:function(j){j?G(2929):Ot(2929)},setMask:function(j){dt!==j&&!L&&(s.depthMask(j),dt=j)},setFunc:function(j){if(lt!==j){if(j)switch(j){case hf:s.depthFunc(512);break;case uf:s.depthFunc(519);break;case df:s.depthFunc(513);break;case Fa:s.depthFunc(515);break;case ff:s.depthFunc(514);break;case pf:s.depthFunc(518);break;case mf:s.depthFunc(516);break;case gf:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);lt=j}},setLocked:function(j){L=j},setClear:function(j){Mt!==j&&(s.clearDepth(j),Mt=j)},reset:function(){L=!1,dt=null,lt=null,Mt=null}}}function o(){let L=!1,dt=null,lt=null,Mt=null,j=null,xt=null,Dt=null,Kt=null,Be=null;return{setTest:function(ee){L||(ee?G(2960):Ot(2960))},setMask:function(ee){dt!==ee&&!L&&(s.stencilMask(ee),dt=ee)},setFunc:function(ee,on,xn){(lt!==ee||Mt!==on||j!==xn)&&(s.stencilFunc(ee,on,xn),lt=ee,Mt=on,j=xn)},setOp:function(ee,on,xn){(xt!==ee||Dt!==on||Kt!==xn)&&(s.stencilOp(ee,on,xn),xt=ee,Dt=on,Kt=xn)},setLocked:function(ee){L=ee},setClear:function(ee){Be!==ee&&(s.clearStencil(ee),Be=ee)},reset:function(){L=!1,dt=null,lt=null,Mt=null,j=null,xt=null,Dt=null,Kt=null,Be=null}}}const a=new i,c=new r,l=new o;let h={},u={},d=new WeakMap,f=[],_=null,g=!1,x=null,m=null,p=null,b=null,M=null,v=null,T=null,A=!1,P=null,O=null,U=null,y=null,R=null;const D=s.getParameter(35661);let I=!1,N=0;const F=s.getParameter(7938);F.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(F)[1]),I=N>=1):F.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),I=N>=2);let k=null,J={};const Q=s.getParameter(3088),V=s.getParameter(2978),X=new Xt().fromArray(Q),it=new Xt().fromArray(V);function at(L,dt,lt){const Mt=new Uint8Array(4),j=s.createTexture();s.bindTexture(L,j),s.texParameteri(L,10241,9728),s.texParameteri(L,10240,9728);for(let xt=0;xt<lt;xt++)s.texImage2D(dt+xt,0,6408,1,1,0,6408,5121,Mt);return j}const ut={};ut[3553]=at(3553,3553,1),ut[34067]=at(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),G(2929),c.setFunc(Fa),K(!1),ht(Yl),G(2884),Y(qn);function G(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Ot(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function mt(L,dt){return u[L]!==dt?(s.bindFramebuffer(L,dt),u[L]=dt,n&&(L===36009&&(u[36160]=dt),L===36160&&(u[36009]=dt)),!0):!1}function bt(L,dt){let lt=f,Mt=!1;if(L)if(lt=d.get(dt),lt===void 0&&(lt=[],d.set(dt,lt)),L.isWebGLMultipleRenderTargets){const j=L.texture;if(lt.length!==j.length||lt[0]!==36064){for(let xt=0,Dt=j.length;xt<Dt;xt++)lt[xt]=36064+xt;lt.length=j.length,Mt=!0}}else lt[0]!==36064&&(lt[0]=36064,Mt=!0);else lt[0]!==1029&&(lt[0]=1029,Mt=!0);Mt&&(e.isWebGL2?s.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function ct(L){return _!==L?(s.useProgram(L),_=L,!0):!1}const Ct={[Ji]:32774,[Kd]:32778,[Qd]:32779};if(n)Ct[$l]=32775,Ct[Kl]=32776;else{const L=t.get("EXT_blend_minmax");L!==null&&(Ct[$l]=L.MIN_EXT,Ct[Kl]=L.MAX_EXT)}const wt={[tf]:0,[ef]:1,[nf]:768,[jh]:770,[cf]:776,[af]:774,[sf]:772,[rf]:769,[Zh]:771,[lf]:775,[of]:773};function Y(L,dt,lt,Mt,j,xt,Dt,Kt){if(L===qn){g===!0&&(Ot(3042),g=!1);return}if(g===!1&&(G(3042),g=!0),L!==$d){if(L!==x||Kt!==A){if((m!==Ji||M!==Ji)&&(s.blendEquation(32774),m=Ji,M=Ji),Kt)switch(L){case qr:s.blendFuncSeparate(1,771,1,771);break;case jl:s.blendFunc(1,1);break;case Zl:s.blendFuncSeparate(0,769,0,1);break;case Jl:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case qr:s.blendFuncSeparate(770,771,1,771);break;case jl:s.blendFunc(770,1);break;case Zl:s.blendFuncSeparate(0,769,0,1);break;case Jl:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,b=null,v=null,T=null,x=L,A=Kt}return}j=j||dt,xt=xt||lt,Dt=Dt||Mt,(dt!==m||j!==M)&&(s.blendEquationSeparate(Ct[dt],Ct[j]),m=dt,M=j),(lt!==p||Mt!==b||xt!==v||Dt!==T)&&(s.blendFuncSeparate(wt[lt],wt[Mt],wt[xt],wt[Dt]),p=lt,b=Mt,v=xt,T=Dt),x=L,A=null}function et(L,dt){L.side===hr?Ot(2884):G(2884);let lt=L.side===ae;dt&&(lt=!lt),K(lt),L.blending===qr&&L.transparent===!1?Y(qn):Y(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const Mt=L.stencilWrite;l.setTest(Mt),Mt&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?G(32926):Ot(32926)}function K(L){P!==L&&(L?s.frontFace(2304):s.frontFace(2305),P=L)}function ht(L){L!==jd?(G(2884),L!==O&&(L===Yl?s.cullFace(1029):L===Zd?s.cullFace(1028):s.cullFace(1032))):Ot(2884),O=L}function ot(L){L!==U&&(I&&s.lineWidth(L),U=L)}function vt(L,dt,lt){L?(G(32823),(y!==dt||R!==lt)&&(s.polygonOffset(dt,lt),y=dt,R=lt)):Ot(32823)}function St(L){L?G(3089):Ot(3089)}function Ft(L){L===void 0&&(L=33984+D-1),k!==L&&(s.activeTexture(L),k=L)}function Yt(L,dt){k===null&&Ft();let lt=J[k];lt===void 0&&(lt={type:void 0,texture:void 0},J[k]=lt),(lt.type!==L||lt.texture!==dt)&&(s.bindTexture(L,dt||ut[L]),lt.type=L,lt.texture=dt)}function Gt(){const L=J[k];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function E(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function w(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(L){X.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),X.copy(L))}function rt(L){it.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),it.copy(L))}function Et(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},k=null,J={},u={},d=new WeakMap,f=[],_=null,g=!1,x=null,m=null,p=null,b=null,M=null,v=null,T=null,A=!1,P=null,O=null,U=null,y=null,R=null,X.set(0,0,s.canvas.width,s.canvas.height),it.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:G,disable:Ot,bindFramebuffer:mt,drawBuffers:bt,useProgram:ct,setBlending:Y,setMaterial:et,setFlipSided:K,setCullFace:ht,setLineWidth:ot,setPolygonOffset:vt,setScissorTest:St,activeTexture:Ft,bindTexture:Yt,unbindTexture:Gt,compressedTexImage2D:E,texImage2D:_t,texImage3D:gt,texStorage2D:ft,texStorage3D:W,texSubImage2D:w,texSubImage3D:q,compressedTexSubImage2D:tt,scissor:st,viewport:rt,reset:Et}}function E0(s,t,e,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):void 0,_=new WeakMap;let g,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,w){return x?new OffscreenCanvas(E,w):es("canvas")}function p(E,w,q,tt){let ft=1;if((E.width>tt||E.height>tt)&&(ft=tt/Math.max(E.width,E.height)),ft<1||w===!0)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap){const W=w?Zf:Math.floor,_t=W(ft*E.width),gt=W(ft*E.height);g===void 0&&(g=m(_t,gt));const st=q?m(_t,gt):g;return st.width=_t,st.height=gt,st.getContext("2d").drawImage(E,0,0,_t,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+_t+"x"+gt+")."),st}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function b(E){return wc(E.width)&&wc(E.height)}function M(E){return a?!1:E.wrapS!==He||E.wrapT!==He||E.minFilter!==le&&E.minFilter!==Me}function v(E,w){return E.generateMipmaps&&w&&E.minFilter!==le&&E.minFilter!==Me}function T(E){s.generateMipmap(E)}function A(E,w,q,tt,ft=!1){if(a===!1)return w;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=w;return w===6403&&(q===5126&&(W=33326),q===5131&&(W=33325),q===5121&&(W=33321)),w===33319&&(q===5126&&(W=33328),q===5131&&(W=33327),q===5121&&(W=33323)),w===6408&&(q===5126&&(W=34836),q===5131&&(W=34842),q===5121&&(W=tt===Zt&&ft===!1?35907:32856),q===32819&&(W=32854),q===32820&&(W=32855)),(W===33325||W===33326||W===33327||W===33328||W===34842||W===34836)&&t.get("EXT_color_buffer_float"),W}function P(E,w,q){return v(E,q)===!0||E.isFramebufferTexture&&E.minFilter!==le&&E.minFilter!==Me?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function O(E){return E===le||E===Ql||E===tc?9728:9729}function U(E){const w=E.target;w.removeEventListener("dispose",U),R(w),w.isVideoTexture&&_.delete(w),o.memory.textures--}function y(E){const w=E.target;w.removeEventListener("dispose",y),D(w)}function R(E){const w=n.get(E);w.__webglInit!==void 0&&(s.deleteTexture(w.__webglTexture),n.remove(E))}function D(E){const w=E.texture,q=n.get(E),tt=n.get(w);if(!!E){if(tt.__webglTexture!==void 0&&(s.deleteTexture(tt.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++)s.deleteFramebuffer(q.__webglFramebuffer[ft]),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[ft]);else s.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer&&s.deleteRenderbuffer(q.__webglColorRenderbuffer),q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer);if(E.isWebGLMultipleRenderTargets)for(let ft=0,W=w.length;ft<W;ft++){const _t=n.get(w[ft]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),o.memory.textures--),n.remove(w[ft])}n.remove(w),n.remove(E)}}let I=0;function N(){I=0}function F(){const E=I;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),I+=1,E}function k(E,w){const q=n.get(E);if(E.isVideoTexture&&ot(E),E.version>0&&q.__version!==E.version){const tt=E.image;if(tt===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(q,E,w);return}}e.activeTexture(33984+w),e.bindTexture(3553,q.__webglTexture)}function J(E,w){const q=n.get(E);if(E.version>0&&q.__version!==E.version){G(q,E,w);return}e.activeTexture(33984+w),e.bindTexture(35866,q.__webglTexture)}function Q(E,w){const q=n.get(E);if(E.version>0&&q.__version!==E.version){G(q,E,w);return}e.activeTexture(33984+w),e.bindTexture(32879,q.__webglTexture)}function V(E,w){const q=n.get(E);if(E.version>0&&q.__version!==E.version){Ot(q,E,w);return}e.activeTexture(33984+w),e.bindTexture(34067,q.__webglTexture)}const X={[Oa]:10497,[He]:33071,[za]:33648},it={[le]:9728,[Ql]:9984,[tc]:9986,[Me]:9729,[Sf]:9985,[So]:9987};function at(E,w,q){if(q?(s.texParameteri(E,10242,X[w.wrapS]),s.texParameteri(E,10243,X[w.wrapT]),(E===32879||E===35866)&&s.texParameteri(E,32882,X[w.wrapR]),s.texParameteri(E,10240,it[w.magFilter]),s.texParameteri(E,10241,it[w.minFilter])):(s.texParameteri(E,10242,33071),s.texParameteri(E,10243,33071),(E===32879||E===35866)&&s.texParameteri(E,32882,33071),(w.wrapS!==He||w.wrapT!==He)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,10240,O(w.magFilter)),s.texParameteri(E,10241,O(w.minFilter)),w.minFilter!==le&&w.minFilter!==Me&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(w.type===gi&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===ir&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(E,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function ut(E,w){E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",U),E.__webglTexture=s.createTexture(),o.memory.textures++)}function G(E,w,q){let tt=3553;w.isDataTexture2DArray&&(tt=35866),w.isDataTexture3D&&(tt=32879),ut(E,w),e.activeTexture(33984+q),e.bindTexture(tt,E.__webglTexture),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const ft=M(w)&&b(w.image)===!1;let W=p(w.image,ft,!1,h);W=vt(w,W);const _t=b(W)||a,gt=r.convert(w.format,w.encoding);let st=r.convert(w.type),rt=A(w.internalFormat,gt,st,w.encoding,w.isVideoTexture);at(tt,w,_t);let Et;const L=w.mipmaps,dt=a&&w.isVideoTexture!==!0,lt=E.__version===void 0,Mt=P(w,W,_t);if(w.isDepthTexture)rt=6402,a?w.type===gi?rt=36012:w.type===ro?rt=33190:w.type===rr?rt=35056:rt=33189:w.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===xi&&rt===6402&&w.type!==Qr&&w.type!==ro&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Qr,st=r.convert(w.type)),w.format===ur&&rt===6402&&(rt=34041,w.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=rr,st=r.convert(w.type))),dt&&lt?e.texStorage2D(3553,1,rt,W.width,W.height):e.texImage2D(3553,0,rt,W.width,W.height,0,gt,st,null);else if(w.isDataTexture)if(L.length>0&&_t){dt&&lt&&e.texStorage2D(3553,Mt,rt,L[0].width,L[0].height);for(let j=0,xt=L.length;j<xt;j++)Et=L[j],dt?e.texSubImage2D(3553,0,0,0,Et.width,Et.height,gt,st,Et.data):e.texImage2D(3553,j,rt,Et.width,Et.height,0,gt,st,Et.data);w.generateMipmaps=!1}else dt?(lt&&e.texStorage2D(3553,Mt,rt,W.width,W.height),e.texSubImage2D(3553,0,0,0,W.width,W.height,gt,st,W.data)):e.texImage2D(3553,0,rt,W.width,W.height,0,gt,st,W.data);else if(w.isCompressedTexture){dt&&lt&&e.texStorage2D(3553,Mt,rt,L[0].width,L[0].height);for(let j=0,xt=L.length;j<xt;j++)Et=L[j],w.format!==Ce?gt!==null?dt?e.compressedTexSubImage2D(3553,j,0,0,Et.width,Et.height,gt,Et.data):e.compressedTexImage2D(3553,j,rt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage2D(3553,j,0,0,Et.width,Et.height,gt,st,Et.data):e.texImage2D(3553,j,rt,Et.width,Et.height,0,gt,st,Et.data)}else if(w.isDataTexture2DArray)dt?(lt&&e.texStorage3D(35866,Mt,rt,W.width,W.height,W.depth),e.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,gt,st,W.data)):e.texImage3D(35866,0,rt,W.width,W.height,W.depth,0,gt,st,W.data);else if(w.isDataTexture3D)dt?(lt&&e.texStorage3D(32879,Mt,rt,W.width,W.height,W.depth),e.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,gt,st,W.data)):e.texImage3D(32879,0,rt,W.width,W.height,W.depth,0,gt,st,W.data);else if(w.isFramebufferTexture)dt&&lt?e.texStorage2D(3553,Mt,rt,W.width,W.height):e.texImage2D(3553,0,rt,W.width,W.height,0,gt,st,null);else if(L.length>0&&_t){dt&&lt&&e.texStorage2D(3553,Mt,rt,L[0].width,L[0].height);for(let j=0,xt=L.length;j<xt;j++)Et=L[j],dt?e.texSubImage2D(3553,j,0,0,gt,st,Et):e.texImage2D(3553,j,rt,gt,st,Et);w.generateMipmaps=!1}else dt?(lt&&e.texStorage2D(3553,Mt,rt,W.width,W.height),e.texSubImage2D(3553,0,0,0,gt,st,W)):e.texImage2D(3553,0,rt,gt,st,W);v(w,_t)&&T(tt),E.__version=w.version,w.onUpdate&&w.onUpdate(w)}function Ot(E,w,q){if(w.image.length!==6)return;ut(E,w),e.activeTexture(33984+q),e.bindTexture(34067,E.__webglTexture),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const tt=w&&(w.isCompressedTexture||w.image[0].isCompressedTexture),ft=w.image[0]&&w.image[0].isDataTexture,W=[];for(let j=0;j<6;j++)!tt&&!ft?W[j]=p(w.image[j],!1,!0,l):W[j]=ft?w.image[j].image:w.image[j],W[j]=vt(w,W[j]);const _t=W[0],gt=b(_t)||a,st=r.convert(w.format,w.encoding),rt=r.convert(w.type),Et=A(w.internalFormat,st,rt,w.encoding),L=a&&w.isVideoTexture!==!0,dt=E.__version===void 0;let lt=P(w,_t,gt);at(34067,w,gt);let Mt;if(tt){L&&dt&&e.texStorage2D(34067,lt,Et,_t.width,_t.height);for(let j=0;j<6;j++){Mt=W[j].mipmaps;for(let xt=0;xt<Mt.length;xt++){const Dt=Mt[xt];w.format!==Ce?st!==null?L?e.compressedTexSubImage2D(34069+j,xt,0,0,Dt.width,Dt.height,st,Dt.data):e.compressedTexImage2D(34069+j,xt,Et,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?e.texSubImage2D(34069+j,xt,0,0,Dt.width,Dt.height,st,rt,Dt.data):e.texImage2D(34069+j,xt,Et,Dt.width,Dt.height,0,st,rt,Dt.data)}}}else{Mt=w.mipmaps,L&&dt&&(Mt.length>0&&lt++,e.texStorage2D(34067,lt,Et,W[0].width,W[0].height));for(let j=0;j<6;j++)if(ft){L?e.texSubImage2D(34069+j,0,0,0,W[j].width,W[j].height,st,rt,W[j].data):e.texImage2D(34069+j,0,Et,W[j].width,W[j].height,0,st,rt,W[j].data);for(let xt=0;xt<Mt.length;xt++){const Kt=Mt[xt].image[j].image;L?e.texSubImage2D(34069+j,xt+1,0,0,Kt.width,Kt.height,st,rt,Kt.data):e.texImage2D(34069+j,xt+1,Et,Kt.width,Kt.height,0,st,rt,Kt.data)}}else{L?e.texSubImage2D(34069+j,0,0,0,st,rt,W[j]):e.texImage2D(34069+j,0,Et,st,rt,W[j]);for(let xt=0;xt<Mt.length;xt++){const Dt=Mt[xt];L?e.texSubImage2D(34069+j,xt+1,0,0,st,rt,Dt.image[j]):e.texImage2D(34069+j,xt+1,Et,st,rt,Dt.image[j])}}}v(w,gt)&&T(34067),E.__version=w.version,w.onUpdate&&w.onUpdate(w)}function mt(E,w,q,tt,ft){const W=r.convert(q.format,q.encoding),_t=r.convert(q.type),gt=A(q.internalFormat,W,_t,q.encoding);n.get(w).__hasExternalTextures||(ft===32879||ft===35866?e.texImage3D(ft,0,gt,w.width,w.height,w.depth,0,W,_t,null):e.texImage2D(ft,0,gt,w.width,w.height,0,W,_t,null)),e.bindFramebuffer(36160,E),w.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,tt,ft,n.get(q).__webglTexture,0,ht(w)):s.framebufferTexture2D(36160,tt,ft,n.get(q).__webglTexture,0),e.bindFramebuffer(36160,null)}function bt(E,w,q){if(s.bindRenderbuffer(36161,E),w.depthBuffer&&!w.stencilBuffer){let tt=33189;if(q||w.useRenderToTexture){const ft=w.depthTexture;ft&&ft.isDepthTexture&&(ft.type===gi?tt=36012:ft.type===ro&&(tt=33190));const W=ht(w);w.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,W,tt,w.width,w.height):s.renderbufferStorageMultisample(36161,W,tt,w.width,w.height)}else s.renderbufferStorage(36161,tt,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,E)}else if(w.depthBuffer&&w.stencilBuffer){const tt=ht(w);q&&w.useRenderbuffer?s.renderbufferStorageMultisample(36161,tt,35056,w.width,w.height):w.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,tt,35056,w.width,w.height):s.renderbufferStorage(36161,34041,w.width,w.height),s.framebufferRenderbuffer(36160,33306,36161,E)}else{const tt=w.isWebGLMultipleRenderTargets===!0?w.texture[0]:w.texture,ft=r.convert(tt.format,tt.encoding),W=r.convert(tt.type),_t=A(tt.internalFormat,ft,W,tt.encoding),gt=ht(w);q&&w.useRenderbuffer?s.renderbufferStorageMultisample(36161,gt,_t,w.width,w.height):w.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,gt,_t,w.width,w.height):s.renderbufferStorage(36161,_t,w.width,w.height)}s.bindRenderbuffer(36161,null)}function ct(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);const tt=n.get(w.depthTexture).__webglTexture,ft=ht(w);if(w.depthTexture.format===xi)w.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,ft):s.framebufferTexture2D(36160,36096,3553,tt,0);else if(w.depthTexture.format===ur)w.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,ft):s.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function Ct(E){const w=n.get(E),q=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ct(w.__webglFramebuffer,E)}else if(q){w.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,w.__webglFramebuffer[tt]),w.__webglDepthbuffer[tt]=s.createRenderbuffer(),bt(w.__webglDepthbuffer[tt],E,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),bt(w.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function wt(E,w,q){const tt=n.get(E);w!==void 0&&mt(tt.__webglFramebuffer,E,E.texture,36064,3553),q!==void 0&&Ct(E)}function Y(E){const w=E.texture,q=n.get(E),tt=n.get(w);E.addEventListener("dispose",y),E.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=w.version,o.memory.textures++);const ft=E.isWebGLCubeRenderTarget===!0,W=E.isWebGLMultipleRenderTargets===!0,_t=w.isDataTexture3D||w.isDataTexture2DArray,gt=b(E)||a;if(ft){q.__webglFramebuffer=[];for(let st=0;st<6;st++)q.__webglFramebuffer[st]=s.createFramebuffer()}else if(q.__webglFramebuffer=s.createFramebuffer(),W)if(i.drawBuffers){const st=E.texture;for(let rt=0,Et=st.length;rt<Et;rt++){const L=n.get(st[rt]);L.__webglTexture===void 0&&(L.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(E.useRenderbuffer)if(a){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,q.__webglColorRenderbuffer);const st=r.convert(w.format,w.encoding),rt=r.convert(w.type),Et=A(w.internalFormat,st,rt,w.encoding),L=ht(E);s.renderbufferStorageMultisample(36161,L,Et,E.width,E.height),e.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,q.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),E.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),bt(q.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(ft){e.bindTexture(34067,tt.__webglTexture),at(34067,w,gt);for(let st=0;st<6;st++)mt(q.__webglFramebuffer[st],E,w,36064,34069+st);v(w,gt)&&T(34067),e.unbindTexture()}else if(W){const st=E.texture;for(let rt=0,Et=st.length;rt<Et;rt++){const L=st[rt],dt=n.get(L);e.bindTexture(3553,dt.__webglTexture),at(3553,L,gt),mt(q.__webglFramebuffer,E,L,36064+rt,3553),v(L,gt)&&T(3553)}e.unbindTexture()}else{let st=3553;_t&&(a?st=w.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),e.bindTexture(st,tt.__webglTexture),at(st,w,gt),mt(q.__webglFramebuffer,E,w,36064,st),v(w,gt)&&T(st),e.unbindTexture()}E.depthBuffer&&Ct(E)}function et(E){const w=b(E)||a,q=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0,ft=q.length;tt<ft;tt++){const W=q[tt];if(v(W,w)){const _t=E.isWebGLCubeRenderTarget?34067:3553,gt=n.get(W).__webglTexture;e.bindTexture(_t,gt),T(_t),e.unbindTexture()}}}function K(E){if(E.useRenderbuffer)if(a){const w=E.width,q=E.height;let tt=16384;const ft=[36064],W=E.stencilBuffer?33306:36096;E.depthBuffer&&ft.push(W),E.ignoreDepthForMultisampleCopy||(E.depthBuffer&&(tt|=256),E.stencilBuffer&&(tt|=1024));const _t=n.get(E);e.bindFramebuffer(36008,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,_t.__webglFramebuffer),E.ignoreDepthForMultisampleCopy&&(s.invalidateFramebuffer(36008,[W]),s.invalidateFramebuffer(36009,[W])),s.blitFramebuffer(0,0,w,q,0,0,w,q,tt,9728),s.invalidateFramebuffer(36008,ft),e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,_t.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function ht(E){return a&&(E.useRenderbuffer||E.useRenderToTexture)?Math.min(u,E.samples):0}function ot(E){const w=o.render.frame;_.get(E)!==w&&(_.set(E,w),E.update())}function vt(E,w){const q=E.encoding,tt=E.format,ft=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ua||q!==Qn&&(q===Zt?a===!1?t.has("EXT_sRGB")===!0&&tt===Ce?(E.format=Ua,E.minFilter=Me,E.generateMipmaps=!1):w=Ei.sRGBToLinear(w):(tt!==Ce||ft!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),w}let St=!1,Ft=!1;function Yt(E,w){E&&E.isWebGLRenderTarget&&(St===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),St=!0),E=E.texture),k(E,w)}function Gt(E,w){E&&E.isWebGLCubeRenderTarget&&(Ft===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Ft=!0),E=E.texture),V(E,w)}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=k,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=wt,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=mt,this.safeSetTexture2D=Yt,this.safeSetTextureCube=Gt}function A0(s,t,e){const n=e.isWebGL2;function i(r,o=null){let a;if(r===Yn)return 5121;if(r===Cf)return 32819;if(r===Rf)return 32820;if(r===Tf)return 5120;if(r===Ef)return 5122;if(r===Qr)return 5123;if(r===Af)return 5124;if(r===ro)return 5125;if(r===gi)return 5126;if(r===ir)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Lf)return 6406;if(r===Ce)return 6408;if(r===Df)return 6409;if(r===If)return 6410;if(r===xi)return 6402;if(r===ur)return 34041;if(r===Ff)return 6403;if(r===Pf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ua)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Nf)return 36244;if(r===Bf)return 33319;if(r===Of)return 33320;if(r===zf)return 36249;if(r===zo||r===Uo||r===ko||r===Ho)if(o===Zt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===zo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===zo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ko)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ho)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ec||r===nc||r===ic||r===rc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ec)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ic)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uf)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===sc||r===oc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===sc)return o===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===oc)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ac||r===lc||r===cc||r===hc||r===uc||r===dc||r===fc||r===pc||r===mc||r===gc||r===_c||r===xc||r===yc||r===vc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ac)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lc)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cc)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hc)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uc)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dc)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fc)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pc)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mc)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gc)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_c)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xc)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yc)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vc)return o===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Mc)return o===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===rr)return n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class _u extends Le{constructor(t=[]){super(),this.cameras=t}}_u.prototype.isArrayCamera=!0;class Vr extends Ht{constructor(){super(),this.type="Group"}}Vr.prototype.isGroup=!0;const C0={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(a!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C0))),l&&t.hand){o=!0;for(const g of t.hand.values()){const x=e.getJointPose(g,n);if(l.joints[g.jointName]===void 0){const p=new Vr;p.matrixAutoUpdate=!1,p.visible=!1,l.joints[g.jointName]=p,l.add(p)}const m=l.joints[g.jointName];x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=x.radius),m.visible=x!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}}class Va extends pe{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:xi,h!==xi&&h!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xi&&(n=Qr),n===void 0&&h===ur&&(n=rr),super(null,i,r,o,a,c,h,n,l),this.image={width:t,height:e},this.magFilter=a!==void 0?a:le,this.minFilter=c!==void 0?c:le,this.flipY=!1,this.generateMipmaps=!1}}Va.prototype.isDepthTexture=!0;class R0 extends Ti{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor";const c=t.extensions.has("WEBGL_multisampled_render_to_texture");let l=null,h=null,u=null,d=null,f=!1,_=null;const g=e.getContextAttributes();let x=null,m=null;const p=[],b=new Map,M=new Le;M.layers.enable(1),M.viewport=new Xt;const v=new Le;v.layers.enable(2),v.viewport=new Xt;const T=[M,v],A=new _u;A.layers.enable(1),A.layers.enable(2);let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let X=p[V];return X===void 0&&(X=new ga,p[V]=X),X.getTargetRaySpace()},this.getControllerGrip=function(V){let X=p[V];return X===void 0&&(X=new ga,p[V]=X),X.getGripSpace()},this.getHand=function(V){let X=p[V];return X===void 0&&(X=new ga,p[V]=X),X.getHandSpace()};function U(V){const X=b.get(V.inputSource);X&&X.dispatchEvent({type:V.type,data:V.inputSource})}function y(){b.forEach(function(V,X){V.disconnect(X)}),b.clear(),P=null,O=null,t.setRenderTarget(x),d=null,u=null,h=null,i=null,m=null,Q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(x=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",y),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,X),i.updateRenderState({baseLayer:d}),m=new Je(d.framebufferWidth,d.framebufferHeight,{format:Ce,type:Yn,encoding:t.outputEncoding})}else{f=g.antialias;let X=null,it=null,at=null;g.depth&&(at=g.stencil?35056:33190,X=g.stencil?ur:xi,it=g.stencil?rr:Qr);const ut={colorFormat:t.outputEncoding===Zt?35907:32856,depthFormat:at,scaleFactor:r};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(ut),i.updateRenderState({layers:[u]}),f?m=new hl(u.textureWidth,u.textureHeight,{format:Ce,type:Yn,depthTexture:new Va(u.textureWidth,u.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,ignoreDepth:u.ignoreDepthValues,useRenderToTexture:c,encoding:t.outputEncoding}):m=new Je(u.textureWidth,u.textureHeight,{format:Ce,type:Yn,depthTexture:new Va(u.textureWidth,u.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,ignoreDepth:u.ignoreDepthValues,encoding:t.outputEncoding})}m.isXRRenderTarget=!0,this.setFoveation(1),o=await i.requestReferenceSpace(a),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(V){const X=i.inputSources;for(let it=0;it<p.length;it++)b.set(X[it],p[it]);for(let it=0;it<V.removed.length;it++){const at=V.removed[it],ut=b.get(at);ut&&(ut.dispatchEvent({type:"disconnected",data:at}),b.delete(at))}for(let it=0;it<V.added.length;it++){const at=V.added[it],ut=b.get(at);ut&&ut.dispatchEvent({type:"connected",data:at})}}const D=new C,I=new C;function N(V,X,it){D.setFromMatrixPosition(X.matrixWorld),I.setFromMatrixPosition(it.matrixWorld);const at=D.distanceTo(I),ut=X.projectionMatrix.elements,G=it.projectionMatrix.elements,Ot=ut[14]/(ut[10]-1),mt=ut[14]/(ut[10]+1),bt=(ut[9]+1)/ut[5],ct=(ut[9]-1)/ut[5],Ct=(ut[8]-1)/ut[0],wt=(G[8]+1)/G[0],Y=Ot*Ct,et=Ot*wt,K=at/(-Ct+wt),ht=K*-Ct;X.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ht),V.translateZ(K),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const ot=Ot+K,vt=mt+K,St=Y-ht,Ft=et+(at-ht),Yt=bt*mt/vt*ot,Gt=ct*mt/vt*ot;V.projectionMatrix.makePerspective(St,Ft,Yt,Gt,ot,vt)}function F(V,X){X===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(X.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;A.near=v.near=M.near=V.near,A.far=v.far=M.far=V.far,(P!==A.near||O!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,O=A.far);const X=V.parent,it=A.cameras;F(A,X);for(let ut=0;ut<it.length;ut++)F(it[ut],X);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),V.position.copy(A.position),V.quaternion.copy(A.quaternion),V.scale.copy(A.scale),V.matrix.copy(A.matrix),V.matrixWorld.copy(A.matrixWorld);const at=V.children;for(let ut=0,G=at.length;ut<G;ut++)at[ut].updateMatrixWorld(!0);it.length===2?N(A,M,v):A.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(V){u!==null&&(u.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)};let k=null;function J(V,X){if(l=X.getViewerPose(o),_=X,l!==null){const at=l.views;d!==null&&(t.setRenderTargetFramebuffer(m,d.framebuffer),t.setRenderTarget(m));let ut=!1;at.length!==A.cameras.length&&(A.cameras.length=0,ut=!0);for(let G=0;G<at.length;G++){const Ot=at[G];let mt=null;if(d!==null)mt=d.getViewport(Ot);else{const ct=h.getViewSubImage(u,Ot);mt=ct.viewport,G===0&&(t.setRenderTargetTextures(m,ct.colorTexture,u.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(m))}const bt=T[G];bt.matrix.fromArray(Ot.transform.matrix),bt.projectionMatrix.fromArray(Ot.projectionMatrix),bt.viewport.set(mt.x,mt.y,mt.width,mt.height),G===0&&A.matrix.copy(bt.matrix),ut===!0&&A.cameras.push(bt)}}const it=i.inputSources;for(let at=0;at<p.length;at++){const ut=p[at],G=it[at];ut.update(G,X,o)}k&&k(V,X),_=null}const Q=new iu;Q.setAnimationLoop(J),this.setAnimationLoop=function(V){k=V},this.dispose=function(){}}}function L0(s){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function e(m,p,b,M,v){p.isMeshBasicMaterial?n(m,p):p.isMeshLambertMaterial?(n(m,p),c(m,p)):p.isMeshToonMaterial?(n(m,p),h(m,p)):p.isMeshPhongMaterial?(n(m,p),l(m,p)):p.isMeshStandardMaterial?(n(m,p),p.isMeshPhysicalMaterial?d(m,p,v):u(m,p)):p.isMeshMatcapMaterial?(n(m,p),f(m,p)):p.isMeshDepthMaterial?(n(m,p),_(m,p)):p.isMeshDistanceMaterial?(n(m,p),g(m,p)):p.isMeshNormalMaterial?(n(m,p),x(m,p)):p.isLineBasicMaterial?(i(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?o(m,p,b,M):p.isSpriteMaterial?a(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=s.get(p).envMap;b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uv2Transform.value.copy(v.matrix))}function i(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function c(m,p){p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ae&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ae&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ae&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ae&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ae&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ae&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),s.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){u(m,p),m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ae&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ae&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ae&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function _(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function g(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}function x(m,p){p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ae&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ae&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:e}}function P0(){const s=es("canvas");return s.style.display="block",s}function Vt(s={}){const t=s.canvas!==void 0?s.canvas:P0(),e=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,o=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,c=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",h=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u=null,d=null;const f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Qn,this.physicallyCorrectLights=!1,this.toneMapping=Xn,this.toneMappingExposure=1;const g=this;let x=!1,m=0,p=0,b=null,M=-1,v=null;const T=new Xt,A=new Xt;let P=null,O=t.width,U=t.height,y=1,R=null,D=null;const I=new Xt(0,0,O,U),N=new Xt(0,0,O,U);let F=!1;const k=new Eo;let J=!1,Q=!1,V=null;const X=new yt,it=new C,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ut(){return b===null?y:1}let G=e;function Ot(S,B){for(let H=0;H<S.length;H++){const z=S[H],Z=t.getContext(z,B);if(Z!==null)return Z}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${al}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",L,!1),G===null){const B=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&B.shift(),G=Ot(B,S),G===null)throw Ot(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let mt,bt,ct,Ct,wt,Y,et,K,ht,ot,vt,St,Ft,Yt,Gt,E,w,q,tt,ft,W,_t,gt;function st(){mt=new Jg(G),bt=new Wg(G,mt,s),mt.init(bt),_t=new A0(G,mt,bt),ct=new T0(G,mt,bt),Ct=new Qg(G),wt=new p0,Y=new E0(G,mt,ct,wt,bt,_t,Ct),et=new Xg(g),K=new Zg(g),ht=new pp(G,bt),gt=new Vg(G,mt,ht,bt),ot=new $g(G,ht,Ct,gt),vt=new i_(G,ot,ht,Ct),tt=new n_(G,bt,Y),E=new qg(wt),St=new f0(g,et,K,mt,bt,gt,E),Ft=new L0(wt),Yt=new g0,Gt=new b0(mt,bt),q=new Hg(g,et,ct,vt,n,a),w=new gu(g,vt,bt),ft=new Gg(G,mt,Ct,bt),W=new Kg(G,mt,Ct,bt),Ct.programs=St.programs,g.capabilities=bt,g.extensions=mt,g.properties=wt,g.renderLists=Yt,g.shadowMap=w,g.state=ct,g.info=Ct}st();const rt=new R0(g,G);this.xr=rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const S=mt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=mt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return y},this.setPixelRatio=function(S){S!==void 0&&(y=S,this.setSize(O,U,!1))},this.getSize=function(S){return S.set(O,U)},this.setSize=function(S,B,H){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,U=B,t.width=Math.floor(S*y),t.height=Math.floor(B*y),H!==!1&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(O*y,U*y).floor()},this.setDrawingBufferSize=function(S,B,H){O=S,U=B,y=H,t.width=Math.floor(S*H),t.height=Math.floor(B*H),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(I)},this.setViewport=function(S,B,H,z){S.isVector4?I.set(S.x,S.y,S.z,S.w):I.set(S,B,H,z),ct.viewport(T.copy(I).multiplyScalar(y).floor())},this.getScissor=function(S){return S.copy(N)},this.setScissor=function(S,B,H,z){S.isVector4?N.set(S.x,S.y,S.z,S.w):N.set(S,B,H,z),ct.scissor(A.copy(N).multiplyScalar(y).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(S){ct.setScissorTest(F=S)},this.setOpaqueSort=function(S){R=S},this.setTransparentSort=function(S){D=S},this.getClearColor=function(S){return S.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(S,B,H){let z=0;(S===void 0||S)&&(z|=16384),(B===void 0||B)&&(z|=256),(H===void 0||H)&&(z|=1024),G.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",L,!1),Yt.dispose(),Gt.dispose(),wt.dispose(),et.dispose(),K.dispose(),vt.dispose(),gt.dispose(),St.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Dt),rt.removeEventListener("sessionend",Kt),V&&(V.dispose(),V=null),Be.stop()};function Et(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const S=Ct.autoReset,B=w.enabled,H=w.autoUpdate,z=w.needsUpdate,Z=w.type;st(),Ct.autoReset=S,w.enabled=B,w.autoUpdate=H,w.needsUpdate=z,w.type=Z}function dt(S){const B=S.target;B.removeEventListener("dispose",dt),lt(B)}function lt(S){Mt(S),wt.remove(S)}function Mt(S){const B=wt.get(S).programs;B!==void 0&&(B.forEach(function(H){St.releaseProgram(H)}),S.isShaderMaterial&&St.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,H,z,Z,Tt){B===null&&(B=at);const At=Z.isMesh&&Z.matrixWorld.determinant()<0,Lt=Vd(S,B,H,z,Z);ct.setMaterial(z,At);let Rt=H.index;const Ut=H.attributes.position;if(Rt===null){if(Ut===void 0||Ut.count===0)return}else if(Rt.count===0)return;let Nt=1;z.wireframe===!0&&(Rt=ot.getWireframeAttribute(H),Nt=2),gt.setup(Z,z,Lt,H,Rt);let Bt,ne=ft;Rt!==null&&(Bt=ht.get(Rt),ne=W,ne.setIndex(Bt));const ai=Rt!==null?Rt.count:Ut.count,Ri=H.drawRange.start*Nt,zt=H.drawRange.count*Nt,an=Tt!==null?Tt.start*Nt:0,oe=Tt!==null?Tt.count*Nt:1/0,ln=Math.max(Ri,an),bs=Math.min(ai,Ri+zt,an+oe)-1,cn=Math.max(0,bs-ln+1);if(cn!==0){if(Z.isMesh)z.wireframe===!0?(ct.setLineWidth(z.wireframeLinewidth*ut()),ne.setMode(1)):ne.setMode(4);else if(Z.isLine){let yn=z.linewidth;yn===void 0&&(yn=1),ct.setLineWidth(yn*ut()),Z.isLineSegments?ne.setMode(1):Z.isLineLoop?ne.setMode(2):ne.setMode(3)}else Z.isPoints?ne.setMode(0):Z.isSprite&&ne.setMode(4);if(Z.isInstancedMesh)ne.renderInstances(ln,cn,Z.count);else if(H.isInstancedBufferGeometry){const yn=Math.min(H.instanceCount,H._maxInstanceCount);ne.renderInstances(ln,cn,yn)}else ne.render(ln,cn)}},this.compile=function(S,B){d=Gt.get(S),d.init(),_.push(d),S.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights(g.physicallyCorrectLights),S.traverse(function(H){const z=H.material;if(z)if(Array.isArray(z))for(let Z=0;Z<z.length;Z++){const Tt=z[Z];Oo(Tt,S,H)}else Oo(z,S,H)}),_.pop(),d=null};let j=null;function xt(S){j&&j(S)}function Dt(){Be.stop()}function Kt(){Be.start()}const Be=new iu;Be.setAnimationLoop(xt),typeof window!="undefined"&&Be.setContext(window),this.setAnimationLoop=function(S){j=S,rt.setAnimationLoop(S),S===null?Be.stop():Be.start()},rt.addEventListener("sessionstart",Dt),rt.addEventListener("sessionend",Kt),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(B),B=rt.getCamera()),S.isScene===!0&&S.onBeforeRender(g,S,B,b),d=Gt.get(S,_.length),d.init(),_.push(d),X.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),k.setFromProjectionMatrix(X),Q=this.localClippingEnabled,J=E.init(this.clippingPlanes,Q,B),u=Yt.get(S,f.length),u.init(),f.push(u),ee(S,B,0,g.sortObjects),u.finish(),g.sortObjects===!0&&u.sort(R,D),J===!0&&E.beginShadows();const H=d.state.shadowsArray;if(w.render(H,S,B),J===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(u,S),d.setupLights(g.physicallyCorrectLights),B.isArrayCamera){const z=B.cameras;for(let Z=0,Tt=z.length;Z<Tt;Z++){const At=z[Z];on(u,S,At,At.viewport)}}else on(u,S,B);b!==null&&(Y.updateMultisampleRenderTarget(b),Y.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(g,S,B),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1),gt.resetDefaultState(),M=-1,v=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function ee(S,B,H,z){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||k.intersectsSprite(S)){z&&it.setFromMatrixPosition(S.matrixWorld).applyMatrix4(X);const At=vt.update(S),Lt=S.material;Lt.visible&&u.push(S,At,Lt,H,it.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Ct.render.frame&&(S.skeleton.update(),S.skeleton.frame=Ct.render.frame),!S.frustumCulled||k.intersectsObject(S))){z&&it.setFromMatrixPosition(S.matrixWorld).applyMatrix4(X);const At=vt.update(S),Lt=S.material;if(Array.isArray(Lt)){const Rt=At.groups;for(let Ut=0,Nt=Rt.length;Ut<Nt;Ut++){const Bt=Rt[Ut],ne=Lt[Bt.materialIndex];ne&&ne.visible&&u.push(S,At,ne,H,it.z,Bt)}}else Lt.visible&&u.push(S,At,Lt,H,it.z,null)}}const Tt=S.children;for(let At=0,Lt=Tt.length;At<Lt;At++)ee(Tt[At],B,H,z)}function on(S,B,H,z){const Z=S.opaque,Tt=S.transmissive,At=S.transparent;d.setupLightsView(H),Tt.length>0&&xn(Z,B,H),z&&ct.viewport(T.copy(z)),Z.length>0&&Ms(Z,B,H),Tt.length>0&&Ms(Tt,B,H),At.length>0&&Ms(At,B,H)}function xn(S,B,H){if(V===null){const At=o===!0&&bt.isWebGL2===!0?hl:Je;V=new At(1024,1024,{generateMipmaps:!0,type:_t.convert(ir)!==null?ir:Yn,minFilter:So,magFilter:le,wrapS:He,wrapT:He,useRenderToTexture:mt.has("WEBGL_multisampled_render_to_texture")})}const z=g.getRenderTarget();g.setRenderTarget(V),g.clear();const Z=g.toneMapping;g.toneMapping=Xn,Ms(S,B,H),g.toneMapping=Z,Y.updateMultisampleRenderTarget(V),Y.updateRenderTargetMipmap(V),g.setRenderTarget(z)}function Ms(S,B,H){const z=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,Tt=S.length;Z<Tt;Z++){const At=S[Z],Lt=At.object,Rt=At.geometry,Ut=z===null?At.material:z,Nt=At.group;Lt.layers.test(H.layers)&&Hd(Lt,B,H,Rt,Ut,Nt)}}function Hd(S,B,H,z,Z,Tt){S.onBeforeRender(g,B,H,z,Z,Tt),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(g,B,H,z,S,Tt),Z.transparent===!0&&Z.side===hr?(Z.side=ae,Z.needsUpdate=!0,g.renderBufferDirect(H,B,z,Z,S,Tt),Z.side=Kr,Z.needsUpdate=!0,g.renderBufferDirect(H,B,z,Z,S,Tt),Z.side=hr):g.renderBufferDirect(H,B,z,Z,S,Tt),S.onAfterRender(g,B,H,z,Z,Tt)}function Oo(S,B,H){B.isScene!==!0&&(B=at);const z=wt.get(S),Z=d.state.lights,Tt=d.state.shadowsArray,At=Z.state.version,Lt=St.getParameters(S,Z.state,Tt,B,H),Rt=St.getProgramCacheKey(Lt);let Ut=z.programs;z.environment=S.isMeshStandardMaterial?B.environment:null,z.fog=B.fog,z.envMap=(S.isMeshStandardMaterial?K:et).get(S.envMap||z.environment),Ut===void 0&&(S.addEventListener("dispose",dt),Ut=new Map,z.programs=Ut);let Nt=Ut.get(Rt);if(Nt!==void 0){if(z.currentProgram===Nt&&z.lightsStateVersion===At)return Xl(S,Lt),Nt}else Lt.uniforms=St.getUniforms(S),S.onBuild(H,Lt,g),S.onBeforeCompile(Lt,g),Nt=St.acquireProgram(Lt,Rt),Ut.set(Rt,Nt),z.uniforms=Lt.uniforms;const Bt=z.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Bt.clippingPlanes=E.uniform),Xl(S,Lt),z.needsLights=Wd(S),z.lightsStateVersion=At,z.needsLights&&(Bt.ambientLightColor.value=Z.state.ambient,Bt.lightProbe.value=Z.state.probe,Bt.directionalLights.value=Z.state.directional,Bt.directionalLightShadows.value=Z.state.directionalShadow,Bt.spotLights.value=Z.state.spot,Bt.spotLightShadows.value=Z.state.spotShadow,Bt.rectAreaLights.value=Z.state.rectArea,Bt.ltc_1.value=Z.state.rectAreaLTC1,Bt.ltc_2.value=Z.state.rectAreaLTC2,Bt.pointLights.value=Z.state.point,Bt.pointLightShadows.value=Z.state.pointShadow,Bt.hemisphereLights.value=Z.state.hemi,Bt.directionalShadowMap.value=Z.state.directionalShadowMap,Bt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Bt.spotShadowMap.value=Z.state.spotShadowMap,Bt.spotShadowMatrix.value=Z.state.spotShadowMatrix,Bt.pointShadowMap.value=Z.state.pointShadowMap,Bt.pointShadowMatrix.value=Z.state.pointShadowMatrix);const ne=Nt.getUniforms(),ai=Zn.seqWithValue(ne.seq,Bt);return z.currentProgram=Nt,z.uniformsList=ai,Nt}function Xl(S,B){const H=wt.get(S);H.outputEncoding=B.outputEncoding,H.instancing=B.instancing,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function Vd(S,B,H,z,Z){B.isScene!==!0&&(B=at),Y.resetTextureUnits();const Tt=B.fog,At=z.isMeshStandardMaterial?B.environment:null,Lt=b===null?g.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Qn,Rt=(z.isMeshStandardMaterial?K:et).get(z.envMap||At),Ut=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Nt=!!z.normalMap&&!!H.attributes.tangent,Bt=!!H.morphAttributes.position,ne=!!H.morphAttributes.normal,ai=H.morphAttributes.position?H.morphAttributes.position.length:0,Ri=z.toneMapped?g.toneMapping:Xn,zt=wt.get(z),an=d.state.lights;if(J===!0&&(Q===!0||S!==v)){const Qe=S===v&&z.id===M;E.setState(z,S,Qe)}let oe=!1;z.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==an.state.version||zt.outputEncoding!==Lt||Z.isInstancedMesh&&zt.instancing===!1||!Z.isInstancedMesh&&zt.instancing===!0||Z.isSkinnedMesh&&zt.skinning===!1||!Z.isSkinnedMesh&&zt.skinning===!0||zt.envMap!==Rt||z.fog&&zt.fog!==Tt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==E.numPlanes||zt.numIntersection!==E.numIntersection)||zt.vertexAlphas!==Ut||zt.vertexTangents!==Nt||zt.morphTargets!==Bt||zt.morphNormals!==ne||zt.toneMapping!==Ri||bt.isWebGL2===!0&&zt.morphTargetsCount!==ai)&&(oe=!0):(oe=!0,zt.__version=z.version);let ln=zt.currentProgram;oe===!0&&(ln=Oo(z,B,Z));let bs=!1,cn=!1,yn=!1;const ye=ln.getUniforms(),Rr=zt.uniforms;if(ct.useProgram(ln.program)&&(bs=!0,cn=!0,yn=!0),z.id!==M&&(M=z.id,cn=!0),bs||v!==S){if(ye.setValue(G,"projectionMatrix",S.projectionMatrix),bt.logarithmicDepthBuffer&&ye.setValue(G,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),v!==S&&(v=S,cn=!0,yn=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Qe=ye.map.cameraPosition;Qe!==void 0&&Qe.setValue(G,it.setFromMatrixPosition(S.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ye.setValue(G,"isOrthographic",S.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Z.isSkinnedMesh)&&ye.setValue(G,"viewMatrix",S.matrixWorldInverse)}if(Z.isSkinnedMesh){ye.setOptional(G,Z,"bindMatrix"),ye.setOptional(G,Z,"bindMatrixInverse");const Qe=Z.skeleton;Qe&&(bt.floatVertexTextures?(Qe.boneTexture===null&&Qe.computeBoneTexture(),ye.setValue(G,"boneTexture",Qe.boneTexture,Y),ye.setValue(G,"boneTextureSize",Qe.boneTextureSize)):ye.setOptional(G,Qe,"boneMatrices"))}return!!H&&(H.morphAttributes.position!==void 0||H.morphAttributes.normal!==void 0)&&tt.update(Z,H,z,ln),(cn||zt.receiveShadow!==Z.receiveShadow)&&(zt.receiveShadow=Z.receiveShadow,ye.setValue(G,"receiveShadow",Z.receiveShadow)),cn&&(ye.setValue(G,"toneMappingExposure",g.toneMappingExposure),zt.needsLights&&Gd(Rr,yn),Tt&&z.fog&&Ft.refreshFogUniforms(Rr,Tt),Ft.refreshMaterialUniforms(Rr,z,y,U,V),Zn.upload(G,zt.uniformsList,Rr,Y)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Zn.upload(G,zt.uniformsList,Rr,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ye.setValue(G,"center",Z.center),ye.setValue(G,"modelViewMatrix",Z.modelViewMatrix),ye.setValue(G,"normalMatrix",Z.normalMatrix),ye.setValue(G,"modelMatrix",Z.matrixWorld),ln}function Gd(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Wd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,B,H){wt.get(S.texture).__webglTexture=B,wt.get(S.depthTexture).__webglTexture=H;const z=wt.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=H===void 0,z.__autoAllocateDepthBuffer||S.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),S.useRenderToTexture=!1,S.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(S,B){const H=wt.get(S);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,H=0){b=S,m=B,p=H;let z=!0;if(S){const Rt=wt.get(S);Rt.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(36160,null),z=!1):Rt.__webglFramebuffer===void 0?Y.setupRenderTarget(S):Rt.__hasExternalTextures&&Y.rebindTextures(S,wt.get(S.texture).__webglTexture,wt.get(S.depthTexture).__webglTexture)}let Z=null,Tt=!1,At=!1;if(S){const Rt=S.texture;(Rt.isDataTexture3D||Rt.isDataTexture2DArray)&&(At=!0);const Ut=wt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Z=Ut[B],Tt=!0):S.useRenderbuffer?Z=wt.get(S).__webglMultisampledFramebuffer:Z=Ut,T.copy(S.viewport),A.copy(S.scissor),P=S.scissorTest}else T.copy(I).multiplyScalar(y).floor(),A.copy(N).multiplyScalar(y).floor(),P=F;if(ct.bindFramebuffer(36160,Z)&&bt.drawBuffers&&z&&ct.drawBuffers(S,Z),ct.viewport(T),ct.scissor(A),ct.setScissorTest(P),Tt){const Rt=wt.get(S.texture);G.framebufferTexture2D(36160,36064,34069+B,Rt.__webglTexture,H)}else if(At){const Rt=wt.get(S.texture),Ut=B||0;G.framebufferTextureLayer(36160,36064,Rt.__webglTexture,H||0,Ut)}M=-1},this.readRenderTargetPixels=function(S,B,H,z,Z,Tt,At){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){ct.bindFramebuffer(36160,Lt);try{const Rt=S.texture,Ut=Rt.format,Nt=Rt.type;if(Ut!==Ce&&_t.convert(Ut)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=Nt===ir&&(mt.has("EXT_color_buffer_half_float")||bt.isWebGL2&&mt.has("EXT_color_buffer_float"));if(Nt!==Yn&&_t.convert(Nt)!==G.getParameter(35738)&&!(Nt===gi&&(bt.isWebGL2||mt.has("OES_texture_float")||mt.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G.checkFramebufferStatus(36160)===36053?B>=0&&B<=S.width-z&&H>=0&&H<=S.height-Z&&G.readPixels(B,H,z,Z,_t.convert(Ut),_t.convert(Nt),Tt):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Rt=b!==null?wt.get(b).__webglFramebuffer:null;ct.bindFramebuffer(36160,Rt)}}},this.copyFramebufferToTexture=function(S,B,H=0){if(B.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const z=Math.pow(2,-H),Z=Math.floor(B.image.width*z),Tt=Math.floor(B.image.height*z);Y.setTexture2D(B,0),G.copyTexSubImage2D(3553,H,0,0,S.x,S.y,Z,Tt),ct.unbindTexture()},this.copyTextureToTexture=function(S,B,H,z=0){const Z=B.image.width,Tt=B.image.height,At=_t.convert(H.format),Lt=_t.convert(H.type);Y.setTexture2D(H,0),G.pixelStorei(37440,H.flipY),G.pixelStorei(37441,H.premultiplyAlpha),G.pixelStorei(3317,H.unpackAlignment),B.isDataTexture?G.texSubImage2D(3553,z,S.x,S.y,Z,Tt,At,Lt,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(3553,z,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,At,B.mipmaps[0].data):G.texSubImage2D(3553,z,S.x,S.y,At,Lt,B.image),z===0&&H.generateMipmaps&&G.generateMipmap(3553),ct.unbindTexture()},this.copyTextureToTexture3D=function(S,B,H,z,Z=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Tt=S.max.x-S.min.x+1,At=S.max.y-S.min.y+1,Lt=S.max.z-S.min.z+1,Rt=_t.convert(z.format),Ut=_t.convert(z.type);let Nt;if(z.isDataTexture3D)Y.setTexture3D(z,0),Nt=32879;else if(z.isDataTexture2DArray)Y.setTexture2DArray(z,0),Nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,z.flipY),G.pixelStorei(37441,z.premultiplyAlpha),G.pixelStorei(3317,z.unpackAlignment);const Bt=G.getParameter(3314),ne=G.getParameter(32878),ai=G.getParameter(3316),Ri=G.getParameter(3315),zt=G.getParameter(32877),an=H.isCompressedTexture?H.mipmaps[0]:H.image;G.pixelStorei(3314,an.width),G.pixelStorei(32878,an.height),G.pixelStorei(3316,S.min.x),G.pixelStorei(3315,S.min.y),G.pixelStorei(32877,S.min.z),H.isDataTexture||H.isDataTexture3D?G.texSubImage3D(Nt,Z,B.x,B.y,B.z,Tt,At,Lt,Rt,Ut,an.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Nt,Z,B.x,B.y,B.z,Tt,At,Lt,Rt,an.data)):G.texSubImage3D(Nt,Z,B.x,B.y,B.z,Tt,At,Lt,Rt,Ut,an),G.pixelStorei(3314,Bt),G.pixelStorei(32878,ne),G.pixelStorei(3316,ai),G.pixelStorei(3315,Ri),G.pixelStorei(32877,zt),Z===0&&z.generateMipmaps&&G.generateMipmap(Nt),ct.unbindTexture()},this.initTexture=function(S){Y.setTexture2D(S,0),ct.unbindTexture()},this.resetState=function(){m=0,p=0,b=null,ct.reset(),gt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Vt.prototype.isWebGLRenderer=!0;class D0 extends Vt{}D0.prototype.isWebGL1Renderer=!0;class _l extends Ht{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}_l.prototype.isScene=!0;class ms{constructor(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ts,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}ms.prototype.isInterleavedBuffer=!0;const ie=new C;class ns{constructor(t,e,n,i=!1){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ie.x=this.getX(e),ie.y=this.getY(e),ie.z=this.getZ(e),ie.applyMatrix4(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ie.x=this.getX(e),ie.y=this.getY(e),ie.z=this.getZ(e),ie.applyNormalMatrix(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ie.x=this.getX(e),ie.y=this.getY(e),ie.z=this.getZ(e),ie.transformDirection(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ns(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}ns.prototype.isInterleavedBufferAttribute=!0;class xu extends Ae{constructor(t){super(),this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this}}xu.prototype.isSpriteMaterial=!0;let qi;const Fr=new C,Xi=new C,Yi=new C,ji=new $,Nr=new $,yu=new yt,Ws=new C,Br=new C,qs=new C,rh=new $,_a=new $,sh=new $;class I0 extends Ht{constructor(t){if(super(),this.type="Sprite",qi===void 0){qi=new $t;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ms(e,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new ns(n,3,0,!1)),qi.setAttribute("uv",new ns(n,2,3,!1))}this.geometry=qi,this.material=t!==void 0?t:new xu,this.center=new $(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),yu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-Yi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Xs(Ws.set(-.5,-.5,0),Yi,o,Xi,i,r),Xs(Br.set(.5,-.5,0),Yi,o,Xi,i,r),Xs(qs.set(.5,.5,0),Yi,o,Xi,i,r),rh.set(0,0),_a.set(1,0),sh.set(1,1);let a=t.ray.intersectTriangle(Ws,Br,qs,!1,Fr);if(a===null&&(Xs(Br.set(-.5,.5,0),Yi,o,Xi,i,r),_a.set(0,1),a=t.ray.intersectTriangle(Ws,qs,Br,!1,Fr),a===null))return;const c=t.ray.origin.distanceTo(Fr);c<t.near||c>t.far||e.push({distance:c,point:Fr.clone(),uv:se.getUV(Fr,Ws,Br,qs,rh,_a,sh,new $),face:null,object:this})}copy(t){return super.copy(t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}I0.prototype.isSprite=!0;function Xs(s,t,e,n,i,r){ji.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Nr.x=r*ji.x-i*ji.y,Nr.y=i*ji.x+r*ji.y):Nr.copy(ji),s.copy(t),s.x+=Nr.x,s.y+=Nr.y,s.applyMatrix4(yu)}const oh=new C,ah=new Xt,lh=new Xt,F0=new C,ch=new yt;class vu extends Se{constructor(t,e){super(t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new yt,this.bindMatrixInverse=new yt}copy(t){return super.copy(t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Xt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,i=this.geometry;ah.fromBufferAttribute(i.attributes.skinIndex,t),lh.fromBufferAttribute(i.attributes.skinWeight,t),oh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=lh.getComponent(r);if(o!==0){const a=ah.getComponent(r);ch.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(F0.copy(oh).applyMatrix4(ch),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}vu.prototype.isSkinnedMesh=!0;class N0 extends Ht{constructor(){super(),this.type="Bone"}}N0.prototype.isBone=!0;class B0 extends pe{constructor(t=null,e=1,n=1,i,r,o,a,c,l=le,h=le,u,d){super(null,o,a,c,l,h,i,r,u,d),this.image={data:t,width:e,height:n},this.magFilter=l,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}B0.prototype.isDataTexture=!0;class Ga extends ce{constructor(t,e,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(t,e,n),this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}Ga.prototype.isInstancedBufferAttribute=!0;const hh=new yt,uh=new yt,Ys=[],Or=new Se;class O0 extends Se{constructor(t,e,n){super(t,e),this.instanceMatrix=new Ga(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,hh),uh.multiplyMatrices(n,hh),Or.matrixWorld=uh,Or.raycast(t,Ys);for(let o=0,a=Ys.length;o<a;o++){const c=Ys[o];c.instanceId=r,c.object=this,e.push(c)}Ys.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ga(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}O0.prototype.isInstancedMesh=!0;class gs extends Ae{constructor(t){super(),this.type="LineBasicMaterial",this.color=new pt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this}}gs.prototype.isLineBasicMaterial=!0;const dh=new C,fh=new C,ph=new yt,xa=new Ai,js=new vr;class xl extends Ht{constructor(t=new $t,e=new gs){super(),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)dh.fromBufferAttribute(e,i-1),fh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=dh.distanceTo(fh);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(i),js.radius+=r,t.ray.intersectsSphere(js)===!1)return;ph.copy(i).invert(),xa.copy(t.ray).applyMatrix4(ph);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const _=n.index,x=n.attributes.position;if(_!==null){const m=Math.max(0,o.start),p=Math.min(_.count,o.start+o.count);for(let b=m,M=p-1;b<M;b+=f){const v=_.getX(b),T=_.getX(b+1);if(l.fromBufferAttribute(x,v),h.fromBufferAttribute(x,T),xa.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(d);P<t.near||P>t.far||e.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),p=Math.min(x.count,o.start+o.count);for(let b=m,M=p-1;b<M;b+=f){if(l.fromBufferAttribute(x,b),h.fromBufferAttribute(x,b+1),xa.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}xl.prototype.isLine=!0;const mh=new C,gh=new C;class yl extends xl{constructor(t,e){super(t,e),this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)mh.fromBufferAttribute(e,i),gh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mh.distanceTo(gh);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}yl.prototype.isLineSegments=!0;class z0 extends xl{constructor(t,e){super(t,e),this.type="LineLoop"}}z0.prototype.isLineLoop=!0;class Mu extends Ae{constructor(t){super(),this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this}}Mu.prototype.isPointsMaterial=!0;const _h=new yt,Wa=new Ai,Zs=new vr,Js=new C;class U0 extends Ht{constructor(t=new $t,e=new Mu){super(),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(i),Zs.radius+=r,t.ray.intersectsSphere(Zs)===!1)return;_h.copy(i).invert(),Wa.copy(t.ray).applyMatrix4(_h);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a;if(n.isBufferGeometry){const l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let _=d,g=f;_<g;_++){const x=l.getX(_);Js.fromBufferAttribute(u,x),xh(Js,x,c,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=d,g=f;_<g;_++)Js.fromBufferAttribute(u,_),xh(Js,_,c,i,t,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}U0.prototype.isPoints=!0;function xh(s,t,e,n,i,r,o){const a=Wa.distanceSqToPoint(s);if(a<e){const c=new C;Wa.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class k0 extends pe{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.minFilter=o!==void 0?o:Me,this.magFilter=r!==void 0?r:Me,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}k0.prototype.isVideoTexture=!0;class H0 extends pe{constructor(t,e,n){super({width:t,height:e}),this.format=n,this.magFilter=le,this.minFilter=le,this.generateMipmaps=!1,this.needsUpdate=!0}}H0.prototype.isFramebufferTexture=!0;class V0 extends pe{constructor(t,e,n,i,r,o,a,c,l,h,u,d){super(null,o,a,c,l,h,i,r,u,d),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}V0.prototype.isCompressedTexture=!0;class G0 extends pe{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.needsUpdate=!0}}G0.prototype.isCanvasTexture=!0;new C;new C;new C;new se;class $e{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new $:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],r=[],o=[],a=new C,c=new yt;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ke(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ke(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Po extends $e{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new $,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}Po.prototype.isEllipseCurve=!0;class bu extends Po{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.type="ArcCurve"}}bu.prototype.isArcCurve=!0;function vl(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const $s=new C,ya=new vl,va=new vl,Ma=new vl;class wu extends $e{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:($s.subVectors(i[0],i[1]).add(i[0]),l=$s);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:($s.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=$s),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),x<1e-4&&(x=g),ya.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,g,x),va.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,g,x),Ma.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,g,x)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),va.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ma.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ya.calc(c),va.calc(c),Ma.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}wu.prototype.isCatmullRomCurve3=!0;function yh(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function W0(s,t){const e=1-s;return e*e*t}function q0(s,t){return 2*(1-s)*s*t}function X0(s,t){return s*s*t}function Xr(s,t,e,n){return W0(s,t)+q0(s,e)+X0(s,n)}function Y0(s,t){const e=1-s;return e*e*e*t}function j0(s,t){const e=1-s;return 3*e*e*s*t}function Z0(s,t){return 3*(1-s)*s*s*t}function J0(s,t){return s*s*s*t}function Yr(s,t,e,n,i){return Y0(s,t)+j0(s,e)+Z0(s,n)+J0(s,i)}class Ml extends $e{constructor(t=new $,e=new $,n=new $,i=new $){super(),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new $){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yr(t,i.x,r.x,o.x,a.x),Yr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}Ml.prototype.isCubicBezierCurve=!0;class Su extends $e{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yr(t,i.x,r.x,o.x,a.x),Yr(t,i.y,r.y,o.y,a.y),Yr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}Su.prototype.isCubicBezierCurve3=!0;class Do extends $e{constructor(t=new $,e=new $){super(),this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new $;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Do.prototype.isLineCurve=!0;class $0 extends $e{constructor(t=new C,e=new C){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bl extends $e{constructor(t=new $,e=new $,n=new $){super(),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Xr(t,i.x,r.x,o.x),Xr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}bl.prototype.isQuadraticBezierCurve=!0;class Tu extends $e{constructor(t=new C,e=new C,n=new C){super(),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Xr(t,i.x,r.x,o.x),Xr(t,i.y,r.y,o.y),Xr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Tu.prototype.isQuadraticBezierCurve3=!0;class wl extends $e{constructor(t=[]){super(),this.type="SplineCurve",this.points=t}getPoint(t,e=new $){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(yh(a,c.x,l.x,h.x,u.x),yh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new $().fromArray(i))}return this}}wl.prototype.isSplineCurve=!0;var Eu=Object.freeze({__proto__:null,ArcCurve:bu,CatmullRomCurve3:wu,CubicBezierCurve:Ml,CubicBezierCurve3:Su,EllipseCurve:Po,LineCurve:Do,LineCurve3:$0,QuadraticBezierCurve:bl,QuadraticBezierCurve3:Tu,SplineCurve:wl});class K0 extends $e{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Do(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o&&o.isEllipseCurve?t*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Eu[i.type]().fromJSON(i))}return this}}class qa extends K0{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Do(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new bl(this.currentPoint.clone(),new $(t,e),new $(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Ml(this.currentPoint.clone(),new $(t,e),new $(n,i),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new Po(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _s extends qa{constructor(t){super(t),this.uuid=mn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new qa().fromJSON(i))}return this}}const Q0={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Au(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=rx(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let _=e;_<i;_+=e)u=s[_],d=s[_+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?1/f:0}return is(r,o,e,a,c,f),o}};function Au(s,t,e,n,i){let r,o;if(i===mx(s,t,e,n)>0)for(r=t;r<e;r+=n)o=vh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=vh(r,s[r],s[r+1],o);return o&&Io(o,o.next)&&(ss(o),o=o.next),o}function ti(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Io(e,e.next)||te(e.prev,e,e.next)===0)){if(ss(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function is(s,t,e,n,i,r,o){if(!s)return;!o&&r&&cx(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?ex(s,n,i,r):tx(s)){t.push(c.i/e),t.push(s.i/e),t.push(l.i/e),ss(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=nx(ti(s),t,e),is(s,t,e,n,i,r,2)):o===2&&ix(s,t,e,n,i,r):is(ti(s),t,e,n,i,r,1);break}}}function tx(s){const t=s.prev,e=s,n=s.next;if(te(t,e,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(tr(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&te(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function ex(s,t,e,n){const i=s.prev,r=s,o=s.next;if(te(i,r,o)>=0)return!1;const a=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,c=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,l=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,h=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,u=Xa(a,c,t,e,n),d=Xa(l,h,t,e,n);let f=s.prevZ,_=s.nextZ;for(;f&&f.z>=u&&_&&_.z<=d;){if(f!==s.prev&&f!==s.next&&tr(i.x,i.y,r.x,r.y,o.x,o.y,f.x,f.y)&&te(f.prev,f,f.next)>=0||(f=f.prevZ,_!==s.prev&&_!==s.next&&tr(i.x,i.y,r.x,r.y,o.x,o.y,_.x,_.y)&&te(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;f&&f.z>=u;){if(f!==s.prev&&f!==s.next&&tr(i.x,i.y,r.x,r.y,o.x,o.y,f.x,f.y)&&te(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;_&&_.z<=d;){if(_!==s.prev&&_!==s.next&&tr(i.x,i.y,r.x,r.y,o.x,o.y,_.x,_.y)&&te(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function nx(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Io(i,r)&&Cu(i,n,n.next,r)&&rs(i,r)&&rs(r,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(r.i/e),ss(n),ss(n.next),n=s=r),n=n.next}while(n!==s);return ti(n)}function ix(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dx(o,a)){let c=Ru(o,a);o=ti(o,o.next),c=ti(c,c.next),is(o,t,e,n,i,r),is(c,t,e,n,i,r);return}a=a.next}o=o.next}while(o!==s)}function rx(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Au(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(ux(l));for(i.sort(sx),r=0;r<i.length;r++)ox(i[r],e),e=ti(e,e.next);return e}function sx(s,t){return s.x-t.x}function ox(s,t){if(t=ax(s,t),t){const e=Ru(t,s);ti(t,t.next),ti(e,e.next)}}function ax(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r){if(r=d,d===n){if(i===e.y)return e;if(i===e.next.y)return e.next}o=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!o)return null;if(n===r)return o;const a=o,c=o.x,l=o.y;let h=1/0,u;e=o;do n>=e.x&&e.x>=c&&n!==e.x&&tr(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)&&(u=Math.abs(i-e.y)/(n-e.x),rs(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&lx(o,e)))&&(o=e,h=u)),e=e.next;while(e!==a);return o}function lx(s,t){return te(s.prev,s,t.prev)<0&&te(t.next,s,s.next)<0}function cx(s,t,e,n){let i=s;do i.z===null&&(i.z=Xa(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,hx(i)}function hx(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function Xa(s,t,e,n,i){return s=32767*(s-e)*i,t=32767*(t-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ux(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function tr(s,t,e,n,i,r,o,a){return(i-o)*(t-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(e-o)*(t-a)>=0&&(e-o)*(r-a)-(i-o)*(n-a)>=0}function dx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!fx(s,t)&&(rs(s,t)&&rs(t,s)&&px(s,t)&&(te(s.prev,s,t.prev)||te(s,t.prev,t))||Io(s,t)&&te(s.prev,s,s.next)>0&&te(t.prev,t,t.next)>0)}function te(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Io(s,t){return s.x===t.x&&s.y===t.y}function Cu(s,t,e,n){const i=Qs(te(s,t,e)),r=Qs(te(s,t,n)),o=Qs(te(e,n,s)),a=Qs(te(e,n,t));return!!(i!==r&&o!==a||i===0&&Ks(s,e,t)||r===0&&Ks(s,n,t)||o===0&&Ks(e,s,n)||a===0&&Ks(e,t,n))}function Ks(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Qs(s){return s>0?1:s<0?-1:0}function fx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Cu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function rs(s,t){return te(s.prev,s,s.next)<0?te(s,t,s.next)>=0&&te(s,s.prev,t)>=0:te(s,t,s.prev)<0||te(s,s.next,t)<0}function px(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Ru(s,t){const e=new Ya(s.i,s.x,s.y),n=new Ya(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vh(s,t,e,n){const i=new Ya(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ss(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ya(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mx(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Jn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Jn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Mh(t),bh(n,t);let o=t.length;e.forEach(Mh);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,bh(n,e[c]);const a=Q0.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Mh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function bh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Sr extends $t{constructor(t=new _s([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new fe(i,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1;let u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,p=e.UVGenerator!==void 0?e.UVGenerator:gx;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=e.amount);let b,M=!1,v,T,A,P;m&&(b=m.getSpacedPoints(h),M=!0,d=!1,v=m.computeFrenetFrames(h,!1),T=new C,A=new C,P=new C),d||(x=0,f=0,_=0,g=0);const O=a.extractPoints(l);let U=O.shape;const y=O.holes;if(!Jn.isClockWise(U)){U=U.reverse();for(let Y=0,et=y.length;Y<et;Y++){const K=y[Y];Jn.isClockWise(K)&&(y[Y]=K.reverse())}}const D=Jn.triangulateShape(U,y),I=U;for(let Y=0,et=y.length;Y<et;Y++){const K=y[Y];U=U.concat(K)}function N(Y,et,K){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().multiplyScalar(K).add(Y)}const F=U.length,k=D.length;function J(Y,et,K){let ht,ot,vt;const St=Y.x-et.x,Ft=Y.y-et.y,Yt=K.x-Y.x,Gt=K.y-Y.y,E=St*St+Ft*Ft,w=St*Gt-Ft*Yt;if(Math.abs(w)>Number.EPSILON){const q=Math.sqrt(E),tt=Math.sqrt(Yt*Yt+Gt*Gt),ft=et.x-Ft/q,W=et.y+St/q,_t=K.x-Gt/tt,gt=K.y+Yt/tt,st=((_t-ft)*Gt-(gt-W)*Yt)/(St*Gt-Ft*Yt);ht=ft+St*st-Y.x,ot=W+Ft*st-Y.y;const rt=ht*ht+ot*ot;if(rt<=2)return new $(ht,ot);vt=Math.sqrt(rt/2)}else{let q=!1;St>Number.EPSILON?Yt>Number.EPSILON&&(q=!0):St<-Number.EPSILON?Yt<-Number.EPSILON&&(q=!0):Math.sign(Ft)===Math.sign(Gt)&&(q=!0),q?(ht=-Ft,ot=St,vt=Math.sqrt(E)):(ht=St,ot=Ft,vt=Math.sqrt(E/2))}return new $(ht/vt,ot/vt)}const Q=[];for(let Y=0,et=I.length,K=et-1,ht=Y+1;Y<et;Y++,K++,ht++)K===et&&(K=0),ht===et&&(ht=0),Q[Y]=J(I[Y],I[K],I[ht]);const V=[];let X,it=Q.concat();for(let Y=0,et=y.length;Y<et;Y++){const K=y[Y];X=[];for(let ht=0,ot=K.length,vt=ot-1,St=ht+1;ht<ot;ht++,vt++,St++)vt===ot&&(vt=0),St===ot&&(St=0),X[ht]=J(K[ht],K[vt],K[St]);V.push(X),it=it.concat(X)}for(let Y=0;Y<x;Y++){const et=Y/x,K=f*Math.cos(et*Math.PI/2),ht=_*Math.sin(et*Math.PI/2)+g;for(let ot=0,vt=I.length;ot<vt;ot++){const St=N(I[ot],Q[ot],ht);mt(St.x,St.y,-K)}for(let ot=0,vt=y.length;ot<vt;ot++){const St=y[ot];X=V[ot];for(let Ft=0,Yt=St.length;Ft<Yt;Ft++){const Gt=N(St[Ft],X[Ft],ht);mt(Gt.x,Gt.y,-K)}}}const at=_+g;for(let Y=0;Y<F;Y++){const et=d?N(U[Y],it[Y],at):U[Y];M?(A.copy(v.normals[0]).multiplyScalar(et.x),T.copy(v.binormals[0]).multiplyScalar(et.y),P.copy(b[0]).add(A).add(T),mt(P.x,P.y,P.z)):mt(et.x,et.y,0)}for(let Y=1;Y<=h;Y++)for(let et=0;et<F;et++){const K=d?N(U[et],it[et],at):U[et];M?(A.copy(v.normals[Y]).multiplyScalar(K.x),T.copy(v.binormals[Y]).multiplyScalar(K.y),P.copy(b[Y]).add(A).add(T),mt(P.x,P.y,P.z)):mt(K.x,K.y,u/h*Y)}for(let Y=x-1;Y>=0;Y--){const et=Y/x,K=f*Math.cos(et*Math.PI/2),ht=_*Math.sin(et*Math.PI/2)+g;for(let ot=0,vt=I.length;ot<vt;ot++){const St=N(I[ot],Q[ot],ht);mt(St.x,St.y,u+K)}for(let ot=0,vt=y.length;ot<vt;ot++){const St=y[ot];X=V[ot];for(let Ft=0,Yt=St.length;Ft<Yt;Ft++){const Gt=N(St[Ft],X[Ft],ht);M?mt(Gt.x,Gt.y+b[h-1].y,b[h-1].x+K):mt(Gt.x,Gt.y,u+K)}}}ut(),G();function ut(){const Y=i.length/3;if(d){let et=0,K=F*et;for(let ht=0;ht<k;ht++){const ot=D[ht];bt(ot[2]+K,ot[1]+K,ot[0]+K)}et=h+x*2,K=F*et;for(let ht=0;ht<k;ht++){const ot=D[ht];bt(ot[0]+K,ot[1]+K,ot[2]+K)}}else{for(let et=0;et<k;et++){const K=D[et];bt(K[2],K[1],K[0])}for(let et=0;et<k;et++){const K=D[et];bt(K[0]+F*h,K[1]+F*h,K[2]+F*h)}}n.addGroup(Y,i.length/3-Y,0)}function G(){const Y=i.length/3;let et=0;Ot(I,et),et+=I.length;for(let K=0,ht=y.length;K<ht;K++){const ot=y[K];Ot(ot,et),et+=ot.length}n.addGroup(Y,i.length/3-Y,1)}function Ot(Y,et){let K=Y.length;for(;--K>=0;){const ht=K;let ot=K-1;ot<0&&(ot=Y.length-1);for(let vt=0,St=h+x*2;vt<St;vt++){const Ft=F*vt,Yt=F*(vt+1),Gt=et+ht+Ft,E=et+ot+Ft,w=et+ot+Yt,q=et+ht+Yt;ct(Gt,E,w,q)}}}function mt(Y,et,K){c.push(Y),c.push(et),c.push(K)}function bt(Y,et,K){Ct(Y),Ct(et),Ct(K);const ht=i.length/3,ot=p.generateTopUV(n,i,ht-3,ht-2,ht-1);wt(ot[0]),wt(ot[1]),wt(ot[2])}function ct(Y,et,K,ht){Ct(Y),Ct(et),Ct(ht),Ct(et),Ct(K),Ct(ht);const ot=i.length/3,vt=p.generateSideWallUV(n,i,ot-6,ot-3,ot-2,ot-1);wt(vt[0]),wt(vt[1]),wt(vt[3]),wt(vt[1]),wt(vt[2]),wt(vt[3])}function Ct(Y){i.push(c[Y*3+0]),i.push(c[Y*3+1]),i.push(c[Y*3+2])}function wt(Y){r.push(Y.x),r.push(Y.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _x(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Eu[i.type]().fromJSON(i)),new Sr(n,t.options)}}const gx={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new $(r,o),new $(a,c),new $(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],_=t[i*3+2],g=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new $(o,1-c),new $(l,1-u),new $(d,1-_),new $(g,1-m)]:[new $(a,1-c),new $(h,1-u),new $(f,1-_),new $(x,1-m)]}};function _x(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Sl extends $t{constructor(t=new _s([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new fe(i,3)),this.setAttribute("normal",new fe(r,3)),this.setAttribute("uv",new fe(o,2));function l(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const _=d.holes;Jn.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,m=_.length;x<m;x++){const p=_[x];Jn.isClockWise(p)===!0&&(_[x]=p.reverse())}const g=Jn.triangulateShape(f,_);for(let x=0,m=_.length;x<m;x++){const p=_[x];f=f.concat(p)}for(let x=0,m=f.length;x<m;x++){const p=f[x];i.push(p.x,p.y,0),r.push(0,0,1),o.push(p.x,p.y)}for(let x=0,m=g.length;x<m;x++){const p=g[x],b=p[0]+u,M=p[1]+u,v=p[2]+u;n.push(b,M,v),c+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return xx(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Sl(n,t.curveSegments)}}function xx(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class yx extends Ae{constructor(t){super(),this.type="ShadowMaterial",this.color=new pt(0),this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this}}yx.prototype.isShadowMaterial=!0;class Fo extends Ae{constructor(t){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}Fo.prototype.isMeshStandardMaterial=!0;class vx extends Fo{constructor(t){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}vx.prototype.isMeshPhysicalMaterial=!0;class Mx extends Ae{constructor(t){super(),this.type="MeshPhongMaterial",this.color=new pt(16777215),this.specular=new pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}Mx.prototype.isMeshPhongMaterial=!0;class bx extends Ae{constructor(t){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}bx.prototype.isMeshToonMaterial=!0;class wx extends Ae{constructor(t){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}wx.prototype.isMeshNormalMaterial=!0;class Sx extends Ae{constructor(t){super(),this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}Sx.prototype.isMeshLambertMaterial=!0;class Tx extends Ae{constructor(t){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this}}Tx.prototype.isMeshMatcapMaterial=!0;class Ex extends gs{constructor(t){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}Ex.prototype.isLineDashedMaterial=!0;const Jt={arraySlice:function(s,t,e){return Jt.isTypedArray(s)?new s.constructor(s.subarray(t,e!==void 0?e:s.length)):s.slice(t,e)},convertArray:function(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n},sortedArray:function(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i},flattenJSON:function(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)},subclip:function(s,t,e,n,i=30){const r=s.clone();r.name=t;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){const _=l.times[f]*i;if(!(_<e||_>=n)){u.push(l.times[f]);for(let g=0;g<h;++g)d.push(l.values[f*h+g])}}u.length!==0&&(l.times=Jt.convertArray(u,l.times.constructor),l.values=Jt.convertArray(d,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const _=a.times.length-1;let g;if(r<=a.times[0]){const m=h,p=u-h;g=Jt.arraySlice(a.values,m,p)}else if(r>=a.times[_]){const m=_*u+h,p=m+u-h;g=Jt.arraySlice(a.values,m,p)}else{const m=a.createInterpolant(),p=h,b=u-h;m.evaluate(r),g=Jt.arraySlice(m.resultBuffer,p,b)}c==="quaternion"&&new De().fromArray(g).normalize().conjugate().toArray(g);const x=l.times.length;for(let m=0;m<x;++m){const p=m*f+d;if(c==="quaternion")De.multiplyQuaternionsFlat(l.values,p,g,0,l.values,p);else{const b=f-d*2;for(let M=0;M<b;++M)l.values[p+M]-=g[M]}}}return s.blendMode=$h,s}};class ei{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}ei.prototype.beforeStart_=ei.prototype.copySampleValue_;ei.prototype.afterEnd_=ei.prototype.copySampleValue_;class Ax extends ei{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ki,endingEnd:Ki}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qi:r=t,a=2*e-n;break;case lo:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Qi:o=t,c=2*n-e;break;case lo:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-e)/(i-e),g=_*_,x=g*_,m=-d*x+2*d*g-d*_,p=(1+d)*x+(-1.5-2*d)*g+(-.5+d)*_+1,b=(-1-f)*x+(1.5+f)*g+.5*_,M=f*x-f*g;for(let v=0;v!==a;++v)r[v]=m*o[h+v]+p*o[l+v]+b*o[c+v]+M*o[u+v];return r}}class Lu extends ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class Cx extends ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class _n{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jt.convertArray(e,this.TimeBufferType),this.values=Jt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jt.convertArray(t.times,Array),values:Jt.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Cx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Lu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ax(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case oo:e=this.InterpolantFactoryMethodDiscrete;break;case ao:e=this.InterpolantFactoryMethodLinear;break;case Vo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return Vo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=Jt.arraySlice(n,r,o),this.values=Jt.arraySlice(this.values,r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Jt.isTypedArray(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=Jt.arraySlice(this.times),e=Jt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Vo,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){const g=e[u+_];if(g!==e[d+_]||g!==e[f+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=Jt.arraySlice(t,0,o),this.values=Jt.arraySlice(e,0,o*n)):(this.times=t,this.values=e),this}clone(){const t=Jt.arraySlice(this.times,0),e=Jt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=ao;class Tr extends _n{}Tr.prototype.ValueTypeName="bool";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=oo;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Pu extends _n{}Pu.prototype.ValueTypeName="color";class ho extends _n{}ho.prototype.ValueTypeName="number";class Rx extends ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)De.slerpFlat(r,0,o,l-a,o,l,c);return r}}class xs extends _n{InterpolantFactoryMethodLinear(t){return new Rx(this.times,this.values,this.getValueSize(),t)}}xs.prototype.ValueTypeName="quaternion";xs.prototype.DefaultInterpolation=ao;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Er extends _n{}Er.prototype.ValueTypeName="string";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=oo;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;class uo extends _n{}uo.prototype.ValueTypeName="vector";class wh{constructor(t,e=-1,n,i=cl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Px(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(_n.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Jt.getKeyframeOrder(c);c=Jt.sortedArray(c,1,h),l=Jt.sortedArray(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ho(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,_,g){if(f.length!==0){const x=[],m=[];Jt.flattenJSON(f,x,m,_),x.length!==0&&g.push(new u(d,x,m))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const x=[],m=[];for(let p=0;p!==d[_].morphTargets.length;++p){const b=d[_];x.push(b.time),m.push(b.morphTarget===g?1:0)}i.push(new ho(".morphTargetInfluence["+g+"]",x,m))}c=f.length*(o||1)}else{const f=".bones["+e[u].name+"]";n(uo,f+".position",d,"pos",i),n(xs,f+".quaternion",d,"rot",i),n(uo,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Lx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ho;case"vector":case"vector2":case"vector3":case"vector4":return uo;case"color":return Pu;case"quaternion":return xs;case"bool":case"boolean":return Tr;case"string":return Er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Px(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Lx(s.type);if(s.times===void 0){const e=[],n=[];Jt.flattenJSON(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const fr={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Dx{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const Ix=new Dx;class si{constructor(t){this.manager=t!==void 0?t:Ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Tn={};class Fx extends si{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=fr.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Tn[t]!==void 0){Tn[t].push({onLoad:e,onProgress:n,onError:i});return}Tn[t]=[],Tn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body.getReader===void 0)return l;const h=Tn[t],u=l.body.getReader(),d=l.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const x=new ReadableStream({start(m){p();function p(){u.read().then(({done:b,value:M})=>{if(b)m.close();else{g+=M.byteLength;const v=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let T=0,A=h.length;T<A;T++){const P=h[T];P.onProgress&&P.onProgress(v)}m.enqueue(M),p()}})}}});return new Response(x)}else throw Error(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{fr.add(t,l);const h=Tn[t];delete Tn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Tn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Tn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Du extends si{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=fr.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=es("img");function c(){h(),fr.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Nx extends si{constructor(t){super(t)}load(t,e,n,i){const r=new To,o=new Du(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(t[l],function(h){r.images[l]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let l=0;l<t.length;++l)c(l);return r}}class Bx extends si{constructor(t){super(t)}load(t,e,n,i){const r=new pe,o=new Du(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class gn extends Ht{constructor(t,e=1){super(),this.type="Light",this.color=new pt(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}gn.prototype.isLight=!0;class Ox extends gn{constructor(t,e,n){super(t,n),this.type="HemisphereLight",this.position.copy(Ht.DefaultUp),this.updateMatrix(),this.groundColor=new pt(e)}copy(t){return gn.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}Ox.prototype.isHemisphereLight=!0;const Sh=new yt,Th=new C,Eh=new C;class Tl{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Th.setFromMatrixPosition(t.matrixWorld),e.position.copy(Th),Eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eh),e.updateMatrixWorld(),Sh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Iu extends Tl{constructor(){super(new Le(50,1,.5,500)),this.focus=1}updateMatrices(t){const e=this.camera,n=ka*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}Iu.prototype.isSpotLightShadow=!0;class Fu extends gn{constructor(t,e,n=0,i=Math.PI/3,r=0,o=1){super(t,e),this.type="SpotLight",this.position.copy(Ht.DefaultUp),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.shadow=new Iu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Fu.prototype.isSpotLight=!0;const Ah=new yt,zr=new C,ba=new C;class Nu extends Tl{constructor(){super(new Le(90,1,.5,500)),this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new Xt(2,1,1,1),new Xt(0,1,1,1),new Xt(3,1,1,1),new Xt(1,1,1,1),new Xt(3,0,1,1),new Xt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zr.setFromMatrixPosition(t.matrixWorld),n.position.copy(zr),ba.copy(n.position),ba.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ba),n.updateMatrixWorld(),i.makeTranslation(-zr.x,-zr.y,-zr.z),Ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah)}}Nu.prototype.isPointLightShadow=!0;class zx extends gn{constructor(t,e,n=0,i=1){super(t,e),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}zx.prototype.isPointLight=!0;class Bu extends Tl{constructor(){super(new Co(-5,5,5,-5,.5,500))}}Bu.prototype.isDirectionalLightShadow=!0;class Ux extends gn{constructor(t,e){super(t,e),this.type="DirectionalLight",this.position.copy(Ht.DefaultUp),this.updateMatrix(),this.target=new Ht,this.shadow=new Bu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Ux.prototype.isDirectionalLight=!0;class Ou extends gn{constructor(t,e){super(t,e),this.type="AmbientLight"}}Ou.prototype.isAmbientLight=!0;class kx extends gn{constructor(t,e,n=10,i=10){super(t,e),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}kx.prototype.isRectAreaLight=!0;class zu{constructor(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new C)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}zu.prototype.isSphericalHarmonics3=!0;class El extends gn{constructor(t=new zu,e=1){super(void 0,e),this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}El.prototype.isLightProbe=!0;class Hx{static decodeText(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Vx extends $t{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}Vx.prototype.isInstancedBufferGeometry=!0;class Gx extends si{constructor(t){super(t),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=fr.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){fr.add(t,c),e&&e(c),r.manager.itemEnd(t)}).catch(function(c){i&&i(c),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}}Gx.prototype.isImageBitmapLoader=!0;let to;const Wx={getContext:function(){return to===void 0&&(to=new(window.AudioContext||window.webkitAudioContext)),to},setContext:function(s){to=s}};class qx extends si{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Fx(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{const c=a.slice(0);Wx.getContext().decodeAudioData(c,function(h){e(h)})}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}}class Xx extends El{constructor(t,e,n=1){super(void 0,n);const i=new pt().set(t),r=new pt().set(e),o=new C(i.r,i.g,i.b),a=new C(r.r,r.g,r.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l)}}Xx.prototype.isHemisphereLightProbe=!0;class Yx extends El{constructor(t,e=1){super(void 0,e);const n=new pt().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Yx.prototype.isAmbientLightProbe=!0;class jx extends Ht{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class Zx{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){De.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;De.multiplyQuaternionsFlat(t,o,t,e,t,n),De.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const Al="\\[\\]\\.:\\/",Jx=new RegExp("["+Al+"]","g"),Cl="[^"+Al+"]",$x="[^"+Al.replace("\\.","")+"]",Kx=/((?:WC+[\/:])*)/.source.replace("WC",Cl),Qx=/(WCOD+)?/.source.replace("WCOD",$x),ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cl),ey=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cl),ny=new RegExp("^"+Kx+Qx+ty+ey+"$"),iy=["material","materials","bones"];class ry{constructor(t,e,n){const i=n||kt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class kt{constructor(t,e,n){this.path=e,this.parsedPath=n||kt.parseTrackName(e),this.node=kt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new kt.Composite(t,e,n):new kt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jx,"")}static parseTrackName(t){const e=ny.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);iy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=kt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}kt.Composite=ry;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class sy{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:Ki,endingEnd:Ki};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Hf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;if(c<0||n===0)return;this._startTime=null,e=n*c}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case $h:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case cl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===Vf;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===kf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Qi,i.endingEnd=Qi):(t?i.endingStart=this.zeroSlopeAtStart?Qi:Ki:i.endingStart=lo,e?i.endingEnd=this.zeroSlopeAtEnd?Qi:Ki:i.endingEnd=lo)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}class oy extends Ti{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let _=h[f];if(_!==void 0)++_.referenceCount,o[u]=_;else{if(_=o[u],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,c,f));continue}const g=e&&e._propertyBindings[u].binding.parsedPath;_=new Zx(kt.create(n,f,g),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,c,f),o[u]=_}a[u].resultBuffer=_.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Lu(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?wh.findByName(i,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=cl),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new sy(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?wh.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}oy.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class ay extends ms{constructor(t,e,n=1){super(t,e),this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}ay.prototype.isInstancedInterleavedBuffer=!0;class ly{constructor(t,e,n=0,i=1/0){this.ray=new Ai(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ul,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return ja(t,this,n,e),n.sort(Ch),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)ja(t[i],this,n,e);return n.sort(Ch),n}}function Ch(s,t){return s.distance-t.distance}function ja(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)ja(i[r],t,e,!0)}}const Un=new C,eo=new yt,wa=new yt;class cy extends yl{constructor(t){const e=Uu(t),n=new $t,i=[],r=[],o=new pt(0,0,1),a=new pt(0,1,0);for(let l=0;l<e.length;l++){const h=e[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new fe(i,3)),n.setAttribute("color",new fe(r,3));const c=new gs({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");wa.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(eo.multiplyMatrices(wa,a.matrixWorld),Un.setFromMatrixPosition(eo),i.setXYZ(o,Un.x,Un.y,Un.z),eo.multiplyMatrices(wa,a.parent.matrixWorld),Un.setFromMatrixPosition(eo),i.setXYZ(o+1,Un.x,Un.y,Un.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function Uu(s){const t=[];s&&s.isBone&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,Uu(s.children[e]));return t}class hy extends yl{constructor(t=10,e=10,n=4473924,i=8947848){n=new pt(n),i=new pt(i);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,_=-a;d<=e;d++,_+=o){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);const g=d===r?n:i;g.toArray(l,f),f+=3,g.toArray(l,f),f+=3,g.toArray(l,f),f+=3,g.toArray(l,f),f+=3}const h=new $t;h.setAttribute("position",new fe(c,3)),h.setAttribute("color",new fe(l,3));const u=new gs({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}const uy=new Float32Array(1);new Int32Array(uy.buffer);$e.create=function(s,t){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create($e.prototype),s.prototype.constructor=s,s.prototype.getPoint=t,s};qa.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};hy.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};cy.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};si.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Hx.extractUrlBase(s)};si.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};sn.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};sn.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};sn.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};sn.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};sn.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};vr.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Eo.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};xe.prototype.flattenToArrayOffset=function(s,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,t)};xe.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};xe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};xe.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};xe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};xe.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};yt.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};yt.prototype.flattenToArrayOffset=function(s,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,t)};yt.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new C().setFromMatrixColumn(this,3)};yt.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};yt.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};yt.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};yt.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};yt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};yt.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};yt.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};yt.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};yt.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};yt.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};yt.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};yt.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};yt.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};yt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};yt.prototype.makeFrustum=function(s,t,e,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,t,n,e,i,r)};yt.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};An.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};De.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};De.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Ai.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Ai.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};Ai.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};se.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};se.prototype.barycoordFromPoint=function(s,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,t)};se.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};se.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};se.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};se.barycoordFromPoint=function(s,t,e,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),se.getBarycoord(s,t,e,n,i)};se.normal=function(s,t,e,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),se.getNormal(s,t,e,n)};_s.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};_s.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Sr(this,s)};_s.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Sl(this,s)};$.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};$.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};$.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};C.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};C.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};C.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};C.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};C.prototype.getColumnFromMatrix=function(s,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,s)};C.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};C.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};C.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};C.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Xt.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};Xt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ht.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};Ht.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ht.prototype.translate=function(s,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,s)};Ht.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ht.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Ht.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Se.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Se.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Gf},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});vu.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Le.prototype.setLens=function(s,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(s)};Object.defineProperties(gn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(ce.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===co},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(co)}}});ce.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?co:ts),this};ce.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},ce.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};$t.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};$t.prototype.addAttribute=function(s,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new ce(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(s,t)};$t.prototype.addDrawCall=function(s,t,e){e!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,t)};$t.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};$t.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};$t.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};$t.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties($t.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});ms.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?co:ts),this};ms.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Sr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Sr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Sr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};_l.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Ae.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new pt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===Yh}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(bi.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});Vt.prototype.clearTarget=function(s,t,e,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(t,e,n)};Vt.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};Vt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Vt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Vt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Vt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Vt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Vt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Vt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Vt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Vt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Vt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Vt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Vt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Vt.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};Vt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Vt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Vt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Vt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Vt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Vt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Vt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Vt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Vt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Vt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Vt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?Zt:Qn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(gu.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Je.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});jx.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new qx().load(s,function(n){t.setBuffer(n)}),this};pl.prototype.updateCubeMap=function(s,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,t)};pl.prototype.clear=function(s,t,e,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,t,e,n)};Ei.crossOrigin=void 0;Ei.loadTexture=function(s,t,e,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Bx;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,e,void 0,n);return t&&(r.mapping=t),r};Ei.loadTextureCube=function(s,t,e,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Nx;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,e,void 0,n);return t&&(r.mapping=t),r};Ei.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Ei.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);function En(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ku(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ge={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},pr={duration:.5,overwrite:!1,delay:0},Rl,Ye=1e8,qt=1/Ye,Za=Math.PI*2,dy=Za/4,fy=0,Hu=Math.sqrt,py=Math.cos,my=Math.sin,me=function(t){return typeof t=="string"},de=function(t){return typeof t=="function"},Ln=function(t){return typeof t=="number"},Ll=function(t){return typeof t=="undefined"},Pn=function(t){return typeof t=="object"},Ie=function(t){return t!==!1},Vu=function(){return typeof window!="undefined"},no=function(t){return de(t)||me(t)},Gu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Te=Array.isArray,Ja=/(?:-?\.?\d|\.)+/gi,Wu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,er=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Sa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qu=/[+-]=-?[.\d]+/,Xu=/[^,'"\[\]\s]+/gi,gy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qt,hn,$a,Pl,We={},fo={},Yu,ju=function(t){return(fo=wi(t,We))&&rn},Dl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},po=function(t,e){return!e&&console.warn(t)},Zu=function(t,e){return t&&(We[t]=e)&&fo&&(fo[t]=e)||We},os=function(){return 0},Il={},$n=[],Ka={},Ju,Ue={},Ta={},Rh=30,so=[],Fl="",Nl=function(t){var e=t[0],n,i;if(Pn(e)||de(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=so.length;i--&&!so[i].targetTest(e););n=so[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new xd(t[i],n)))||t.splice(i,1);return t},yi=function(t){return t._gsap||Nl(je(t))[0]._gsap},$u=function(t,e,n){return(n=t[e])&&de(n)?t[e]():Ll(n)&&t.getAttribute&&t.getAttribute(e)||n},Fe=function(t,e){return(t=t.split(",")).forEach(e)||t},re=function(t){return Math.round(t*1e5)/1e5||0},be=function(t){return Math.round(t*1e7)/1e7||0},ar=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},_y=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},mo=function(){var t=$n.length,e=$n.slice(0),n,i;for(Ka={},$n.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ku=function(t,e,n,i){$n.length&&mo(),t.render(e,n,i),$n.length&&mo()},Qu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Xu).length<2?e:me(t)?t.trim():t},td=function(t){return t},Ke=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},xy=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},wi=function(t,e){for(var n in e)t[n]=e[n];return t},Lh=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Pn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},go=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},jr=function(t){var e=t.parent||Qt,n=t.keyframes?xy(Te(t.keyframes)):Ke;if(Ie(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},yy=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ed=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},No=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Cn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},vi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},vy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},My=function s(t){return!t||t._ts&&s(t.parent)},Ph=function(t){return t._repeat?mr(t._tTime,t=t.duration()+t._rDelay)*t:0},mr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},_o=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Bo=function(t){return t._end=be(t._start+(t._tDur/Math.abs(t._ts||t._rts||qt)||0))},Bl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Bo(t),n._dirty||vi(n,t)),t},nd=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=_o(t.rawTime(),e),(!e._dur||ys(0,e.totalDuration(),n)-e._tTime>qt)&&e.render(n,!0)),vi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-qt}},fn=function(t,e,n,i){return e.parent&&Cn(e),e._start=be((Ln(n)?n:n||t!==Qt?Xe(t,n,e):t._time)+e._delay),e._end=be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ed(t,e,"_first","_last",t._sort?"_start":0),Qa(e)||(t._recent=e),i||nd(t,e),t},id=function(t,e){return(We.ScrollTrigger||Dl("scrollTrigger",e))&&We.ScrollTrigger.create(e,t)},rd=function(t,e,n,i){if(zl(t,e),!t._initted)return 1;if(!n&&t._pt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ju!==Ve.frame)return $n.push(t),t._lazy=[e,i],1},by=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Qa=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},wy=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&by(t)&&!(!t._initted&&Qa(t))||(t._ts<0||t._dp._ts<0)&&!Qa(t))?0:1,a=t._rDelay,c=0,l,h,u;if(a&&t._repeat&&(c=ys(0,t._tDur,e),h=mr(c,a),t._yoyo&&h&1&&(o=1-o),h!==mr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||i||t._zTime===qt||!e&&t._zTime){if(!t._initted&&rd(t,e,i,n))return;for(u=t._zTime,t._zTime=e||(n?qt:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!n&&Ze(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&Ze(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Cn(t,1),n||(Ze(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Sy=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},gr=function(t,e,n,i){var r=t._repeat,o=be(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:be(o*(r+1)+t._rDelay*r):o,a>0&&!i?Bl(t,t._tTime=t._tDur*a):t.parent&&Bo(t),n||vi(t.parent,t),t},Dh=function(t){return t instanceof Pe?vi(t):gr(t,t._dur)},Ty={_start:0,endTime:os,totalDuration:os},Xe=function s(t,e,n){var i=t.labels,r=t._recent||Ty,o=t.duration()>=Ye?r.endTime(!1):t._dur,a,c,l;return me(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(Te(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},Zr=function(t,e,n){var i=Ln(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Ie(c.vars.inherit)&&c.parent;o.immediateRender=Ie(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new ue(e[0],o,e[r+1])},oi=function(t,e){return t||t===0?e(t):e},ys=function(t,e,n){return n<t?t:n>e?e:n},we=function(t,e){return!me(t)||!(e=gy.exec(t))?"":e[1]},Ey=function(t,e,n){return oi(n,function(i){return ys(t,e,i)})},tl=[].slice,sd=function(t,e){return t&&Pn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Pn(t[0]))&&!t.nodeType&&t!==hn},Ay=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return me(i)&&!e||sd(i,1)?(r=n).push.apply(r,je(i)):n.push(i)})||n},je=function(t,e,n){return me(t)&&!n&&($a||!_r())?tl.call((e||Pl).querySelectorAll(t),0):Te(t)?Ay(t,n):sd(t)?tl.call(t,0):t?[t]:[]},Cy=function(t){return t=je(t)[0]||po("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return je(e,n.querySelectorAll?n:n===t?po("Invalid scope")||Pl.createElement("div"):t)}},od=function(t){return t.sort(function(){return .5-Math.random()})},ad=function(t){if(de(t))return t;var e=Pn(t)?t:{each:t},n=Mi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,u=i;return me(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,x=o[g],m,p,b,M,v,T,A,P,O;if(!x){if(O=e.grid==="auto"?0:(e.grid||[1,Ye])[1],!O){for(A=-Ye;A<(A=_[O++].getBoundingClientRect().left)&&O<g;);O--}for(x=o[g]=[],m=c?Math.min(O,g)*h-.5:i%O,p=O===Ye?0:c?g*u/O-.5:i/O|0,A=0,P=Ye,T=0;T<g;T++)b=T%O-m,M=p-(T/O|0),x[T]=v=l?Math.abs(l==="y"?M:b):Hu(b*b+M*M),v>A&&(A=v),v<P&&(P=v);i==="random"&&od(x),x.max=A-P,x.min=P,x.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(O>g?g-1:l?l==="y"?g/O:O:Math.max(O,g/O))||0)*(i==="edges"?-1:1),x.b=g<0?r-g:r,x.u=we(e.amount||e.each)||0,n=n&&g<0?md(n):n}return g=(x[d]-x.min)/x.max||0,be(x.b+(n?n(g):g)*x.v)+x.u}},el=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Math.round(parseFloat(n)/t)*t*e;return(i-i%1)/e+(Ln(n)?0:we(n))}},ld=function(t,e){var n=Te(t),i,r;return!n&&Pn(t)&&(i=n=t.radius||Ye,t.values?(t=je(t.values),(r=!Ln(t[0]))&&(i*=i)):t=el(t.increment)),oi(e,n?de(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=Ye,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-a,f=t[u].y-c,d=d*d+f*f):d=Math.abs(t[u]-a),d<l&&(l=d,h=u);return h=!i||l<=i?t[h]:o,r||h===o||Ln(o)?h:h+we(o)}:el(t))},cd=function(t,e,n,i){return oi(Te(t)?!e:n===!0?!!(n=0):!i,function(){return Te(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Ry=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Ly=function(t,e){return function(n){return t(parseFloat(n))+(e||we(n))}},Py=function(t,e,n){return ud(t,e,0,1,n)},hd=function(t,e,n){return oi(n,function(i){return t[~~e(i)]})},Dy=function s(t,e,n){var i=e-t;return Te(t)?hd(t,s(0,t.length),e):oi(n,function(r){return(i+(r-t)%i)%i+t})},Iy=function s(t,e,n){var i=e-t,r=i*2;return Te(t)?hd(t,s(0,t.length-1),e):oi(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},as=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Xu:Ja),n+=t.substr(e,i-e)+cd(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},ud=function(t,e,n,i,r){var o=e-t,a=i-n;return oi(r,function(c){return n+((c-t)/o*a||0)})},Fy=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=me(t),a={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Te(t)&&!Te(e)){for(h=[],u=t.length,d=u-2,l=1;l<u;l++)h.push(s(t[l-1],t[l]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=wi(Te(t)?[]:{},t));if(!h){for(c in e)Ol.call(a,t,c,"get",e[c]);r=function(_){return Hl(_,a)||(o?t.p:t)}}}return oi(n,r)},Ih=function(t,e,n){var i=t.labels,r=Ye,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},Ze=function(t,e,n){var i=t.vars,r=i[e],o,a;if(!!r)return o=i[e+"Params"],a=i.callbackScope||t,n&&$n.length&&mo(),o?r.apply(a,o):r.call(a)},Gr=function(t){return Cn(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&Ze(t,"onInterrupt"),t},nr,Ny=function(t){t=!t.name&&t.default||t;var e=t.name,n=de(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:os,render:Hl,add:Ol,kill:$y,modifier:Jy,rawVars:0},o={targetTest:0,get:0,getSetter:kl,aliases:{},register:0};if(_r(),t!==i){if(Ue[e])return;Ke(i,Ke(go(t,r),o)),wi(i.prototype,wi(r,go(t,o))),Ue[i.prop=e]=i,t.targetTest&&(so.push(i),Il[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Zu(e,i),t.register&&t.register(rn,i,Ne)},Wt=255,Wr={aqua:[0,Wt,Wt],lime:[0,Wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Wt],navy:[0,0,128],white:[Wt,Wt,Wt],olive:[128,128,0],yellow:[Wt,Wt,0],orange:[Wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Wt,0,0],pink:[Wt,192,203],cyan:[0,Wt,Wt],transparent:[Wt,Wt,Wt,0]},Ea=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Wt+.5|0},dd=function(t,e,n){var i=t?Ln(t)?[t>>16,t>>8&Wt,t&Wt]:0:Wr.black,r,o,a,c,l,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Wr[t])i=Wr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Wt,i&Wt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Wt,t&Wt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Ja),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Ea(c+1/3,r,o),i[1]=Ea(c,r,o),i[2]=Ea(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Wu),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ja)||Wr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/Wt,o=i[1]/Wt,a=i[2]/Wt,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?c=l=0:(f=u-d,l=h>.5?f/(2-u-d):f/(u+d),c=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},fd=function(t){var e=[],n=[],i=-1;return t.split(Kn).forEach(function(r){var o=r.match(er)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Fh=function(t,e,n){var i="",r=(t+i).match(Kn),o=e?"hsla(":"rgba(",a=0,c,l,h,u;if(!r)return t;if(r=r.map(function(d){return(d=dd(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=fd(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(Kn,"1").split(er),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=t.split(Kn),u=l.length-1;a<u;a++)i+=l[a]+r[a];return i+l[u]},Kn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Wr)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),By=/hsl[a]?\(/,pd=function(t){var e=t.join(" "),n;if(Kn.lastIndex=0,Kn.test(e))return n=By.test(e),t[1]=Fh(t[1],n),t[0]=Fh(t[0],n,fd(t[1])),!0},ls,Ve=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,h,u,d,f,_=function g(x){var m=s()-i,p=x===!0,b,M,v,T;if(m>t&&(n+=m-e),i+=m,v=i-n,b=v-o,(b>0||p)&&(T=++u.frame,d=v-u.time*1e3,u.time=v=v/1e3,o+=b+(b>=r?4:r-b),M=1),p||(c=l(g)),M)for(f=0;f<a.length;f++)a[f](v,d,T,x)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(x){return d/(1e3/(x||60))},wake:function(){Yu&&(!$a&&Vu()&&(hn=$a=window,Pl=hn.document||{},We.gsap=rn,(hn.gsapVersions||(hn.gsapVersions=[])).push(rn.version),ju(fo||hn.GreenSockGlobals||!hn.gsap&&hn||{}),h=hn.requestAnimationFrame),c&&u.sleep(),l=h||function(x){return setTimeout(x,o-u.time*1e3+1|0)},ls=1,_(2))},sleep:function(){(h?hn.cancelAnimationFrame:clearTimeout)(c),ls=0,l=os},lagSmoothing:function(x,m){t=x||1/qt,e=Math.min(m,t,0)},fps:function(x){r=1e3/(x||240),o=u.time*1e3+r},add:function(x,m,p){var b=m?function(M,v,T,A){x(M,v,T,A),u.remove(b)}:x;return u.remove(x),a[p?"unshift":"push"](b),_r(),b},remove:function(x,m){~(m=a.indexOf(x))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},u}(),_r=function(){return!ls&&Ve.wake()},It={},Oy=/^[\d.\-M][\d.\-,\s]/,zy=/["']/g,Uy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(zy,"").trim():+l,i=c.substr(a+1).trim();return e},ky=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Hy=function(t){var e=(t+"").split("("),n=It[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Uy(e[1])]:ky(t).split(",").map(Qu)):It._CE&&Oy.test(t)?It._CE("",t):n},md=function(t){return function(e){return 1-t(1-e)}},gd=function s(t,e){for(var n=t._first,i;n;)n instanceof Pe?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Mi=function(t,e){return t&&(de(t)?t:It[t]||Hy(t))||e},Ci=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Fe(t,function(a){It[a]=We[a]=r,It[o=a.toLowerCase()]=n;for(var c in r)It[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=It[a+"."+c]=r[c]}),r},_d=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Aa=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Za*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*my((h-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:_d(a);return r=Za/r,c.config=function(l,h){return s(t,l,h)},c},Ca=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:_d(n);return i.config=function(r){return s(t,r)},i};Fe("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Ci(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});It.Linear.easeNone=It.none=It.Linear.easeIn;Ci("Elastic",Aa("in"),Aa("out"),Aa());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Ci("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ci("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Ci("Circ",function(s){return-(Hu(1-s*s)-1)});Ci("Sine",function(s){return s===1?1:-py(s*dy)+1});Ci("Back",Ca("in"),Ca("out"),Ca());It.SteppedEase=It.steps=We.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-qt;return function(a){return((i*ys(0,o,a)|0)+r)*n}}};pr.ease=It["quad.out"];Fe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Fl+=s+","+s+"Params,"});var xd=function(t,e){this.id=fy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:$u,this.set=e?e.getSetter:kl},cs=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,gr(this,+e.duration,1,1),this.data=e.data,ls||Ve.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,gr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(_r(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Bl(this,n),!r._dp||r.parent||nd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===qt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ku(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ph(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ph(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?mr(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-qt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?_o(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-qt?0:this._rts,this.totalTime(ys(-this._delay,this._tDur,i),!0),Bo(this),vy(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_r(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qt&&(this._tTime-=qt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&fn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ie(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_o(i.rawTime(n),this):this._tTime:this._tTime},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Dh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Dh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Xe(this,n),Ie(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ie(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-qt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-qt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-qt)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=de(n)?n:td,a=function(){var l=i.then;i.then=null,de(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Gr(this)},s}();Ke(cs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qt,_prom:0,_ps:!1,_rts:1});var Pe=function(s){ku(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ie(n.sortChildren),Qt&&fn(n.parent||Qt,En(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&id(En(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Zr(0,arguments,this),this},e.from=function(i,r,o){return Zr(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Zr(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,jr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ue(i,r,Xe(this,o),1),this},e.call=function(i,r,o){return fn(this,ue.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new ue(i,o,Xe(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,h){return o.runBackwards=1,jr(o).immediateRender=Ie(o.immediateRender),this.staggerTo(i,r,o,a,c,l,h)},e.staggerFromTo=function(i,r,o,a,c,l,h,u){return a.startAt=o,jr(a).immediateRender=Ie(a.immediateRender),this.staggerTo(i,r,a,c,l,h,u)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:be(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,f,_,g,x,m,p,b,M,v,T,A;if(this!==Qt&&h>c&&i>=0&&(h=c),h!==this._tTime||o||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),d=h,M=this._start,b=this._ts,m=!b,u&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,x=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(x*100+i,r,o);if(d=be(h%x),h===c?(g=this._repeat,d=l):(g=~~(h/x),g&&g===h/x&&(d=l,g--),d>l&&(d=l)),v=mr(this._tTime,x),!a&&this._tTime&&v!==g&&(v=g),T&&g&1&&(d=l-d,A=1),g!==v&&!this._lock){var P=T&&v&1,O=P===(T&&g&1);if(g<v&&(P=!P),a=P?0:l,this._lock=1,this.render(a||(A?0:be(g*x)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&Ze(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,O&&(this._lock=2,a=P?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;gd(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(p=Sy(this,be(a),be(d)),p&&(h-=d-(d=p._start))),this._tTime=h,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&(Ze(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&p!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!m){p=0,_&&(h+=this._zTime=-qt);break}}f=_}else{f=this._last;for(var U=i<0?i:d;f;){if(_=f._prev,(f._act||U<=f._end)&&f._ts&&p!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(U-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(U-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!m){p=0,_&&(h+=this._zTime=U?-qt:qt);break}}f=_}}if(p&&!r&&(this.pause(),p.render(d>=a?0:-qt)._zTime=d>=a?1:-1,this._ts))return this._start=M,Bo(this),this.render(i,r,o);this._onUpdate&&!r&&Ze(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Cn(this,1),!r&&!(i<0&&!a)&&(h||a||!c)&&(Ze(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Ln(r)||(r=Xe(this,r,i)),!(i instanceof cs)){if(Te(i))return i.forEach(function(a){return o.add(a,r)}),this;if(me(i))return this.addLabel(i,r);if(de(i))i=ue.delayedCall(0,i);else return this}return this!==i?fn(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ye);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof ue?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return me(i)?this.removeLabel(i):de(i)?this.killTweensOf(i):(No(this,i),i===this._recent&&(this._recent=this._last),vi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=be(Ve.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Xe(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=ue.delayedCall(0,r||os,o);return a.data="isPause",this._hasPause=1,fn(this,a,Xe(this,i))},e.removePause=function(i){var r=this._first;for(i=Xe(this,i);r;)r._start===i&&r.data==="isPause"&&Cn(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)kn!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=je(i),c=this._first,l=Ln(r),h;c;)c instanceof ue?_y(c._targets,a)&&(l?(!kn||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(h=c.getTweensOf(a,r)).length&&o.push.apply(o,h),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Xe(o,i),c=r,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,f,_=ue.to(o,Ke({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||qt,onStart:function(){if(o.pause(),!f){var x=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==x&&gr(_,x,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,Ke({startAt:{time:Xe(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ih(this,Xe(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ih(this,Xe(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+qt)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return vi(this)},e.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return s.prototype.invalidate.call(this)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vi(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=Ye,l,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,fn(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;gr(o,o===Qt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Qt._ts&&(Ku(Qt,_o(i,Qt)),Ju=Ve.frame),Ve.frame>=Rh){Rh+=Ge.autoSleep||120;var r=Qt._first;if((!r||!r._ts)&&Ge.autoSleep&&Ve._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ve.sleep()}}},t}(cs);Ke(Pe.prototype,{_lock:0,_hasPause:0,_forcing:0});var Vy=function(t,e,n,i,r,o,a){var c=new Ne(this._pt,t,e,0,1,Sd,null,r),l=0,h=0,u,d,f,_,g,x,m,p;for(c.b=n,c.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=as(i)),o&&(p=[n,i],o(p,t,e),n=p[0],i=p[1]),d=n.match(Sa)||[];u=Sa.exec(i);)_=u[0],g=i.substring(l,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(x=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:x,c:_.charAt(1)==="="?ar(x,_)-x:parseFloat(_)-x,m:f&&f<4?Math.round:0},l=Sa.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(qu.test(i)||m)&&(c.e=0),this._pt=c,c},Ol=function(t,e,n,i,r,o,a,c,l){de(i)&&(i=i(r||0,t,o));var h=t[e],u=n!=="get"?n:de(h)?l?t[e.indexOf("set")||!de(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():h,d=de(h)?l?Yy:bd:Ul,f;if(me(i)&&(~i.indexOf("random(")&&(i=as(i)),i.charAt(1)==="="&&(f=ar(u,i)+(we(u)||0),(f||f===0)&&(i=f))),u!==i||nl)return!isNaN(u*i)&&i!==""?(f=new Ne(this._pt,t,e,+u||0,i-(u||0),typeof h=="boolean"?Zy:wd,0,d),l&&(f.fp=l),a&&f.modifier(a,this,t),this._pt=f):(!h&&!(e in t)&&Dl(e,i),Vy.call(this,t,e,u,i,d,c||Ge.stringFilter,l))},Gy=function(t,e,n,i,r){if(de(t)&&(t=Jr(t,r,e,n,i)),!Pn(t)||t.style&&t.nodeType||Te(t)||Gu(t))return me(t)?Jr(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Jr(t[a],r,e,n,i);return o},yd=function(t,e,n,i,r,o){var a,c,l,h;if(Ue[t]&&(a=new Ue[t]).init(r,a.rawVars?e[t]:Gy(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new Ne(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==nr))for(l=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)l[a._props[h]]=c;return a},kn,nl,zl=function s(t,e){var n=t.vars,i=n.ease,r=n.startAt,o=n.immediateRender,a=n.lazy,c=n.onUpdate,l=n.onUpdateParams,h=n.callbackScope,u=n.runBackwards,d=n.yoyoEase,f=n.keyframes,_=n.autoRevert,g=t._dur,x=t._startAt,m=t._targets,p=t.parent,b=p&&p.data==="nested"?p.parent._targets:m,M=t._overwrite==="auto"&&!Rl,v=t.timeline,T,A,P,O,U,y,R,D,I,N,F,k,J;if(v&&(!f||!i)&&(i="none"),t._ease=Mi(i,pr.ease),t._yEase=d?md(Mi(d===!0?i:d,pr.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!v&&!!n.runBackwards,!v||f&&!n.stagger){if(D=m[0]?yi(m[0]).harness:0,k=D&&n[D.prop],T=go(n,Il),x&&(Cn(x.render(-1,!0)),x._lazy=0),r)if(Cn(t._startAt=ue.set(m,Ke({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:Ie(a),startAt:null,delay:0,onUpdate:c,onUpdateParams:l,callbackScope:h,stagger:0},r))),e<0&&!o&&!_&&t._startAt.render(-1,!0),o){if(e>0&&!_&&(t._startAt=0),g&&e<=0){e&&(t._zTime=e);return}}else _===!1&&(t._startAt=0);else if(u&&g){if(x)!_&&(t._startAt=0);else if(e&&(o=!1),P=Ke({overwrite:!1,data:"isFromStart",lazy:o&&Ie(a),immediateRender:o,stagger:0,parent:p},T),k&&(P[D.prop]=k),Cn(t._startAt=ue.set(m,P)),e<0&&t._startAt.render(-1,!0),t._zTime=e,!o)s(t._startAt,qt);else if(!e)return}for(t._pt=t._ptCache=0,a=g&&Ie(a)||a&&!g,A=0;A<m.length;A++){if(U=m[A],R=U._gsap||Nl(m)[A]._gsap,t._ptLookup[A]=N={},Ka[R.id]&&$n.length&&mo(),F=b===m?A:b.indexOf(U),D&&(I=new D).init(U,k||T,t,F,b)!==!1&&(t._pt=O=new Ne(t._pt,U,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(Q){N[Q]=O}),I.priority&&(y=1)),!D||k)for(P in T)Ue[P]&&(I=yd(P,T,t,F,U,b))?I.priority&&(y=1):N[P]=O=Ol.call(t,U,P,"get",T[P],F,b,0,n.stringFilter);t._op&&t._op[A]&&t.kill(U,t._op[A]),M&&t._pt&&(kn=t,Qt.killTweensOf(U,N,t.globalTime(e)),J=!t.parent,kn=0),t._pt&&a&&(Ka[R.id]=1)}y&&Td(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!J,f&&e<=0&&v.render(Ye,!0,!0)},Wy=function(t,e,n,i,r,o,a){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,h,u;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,u=t._targets.length;u--;){if(l=h[u][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e;)l=l._next;if(!l)return nl=1,t.vars[e]="+=0",zl(t,a),nl=0,1;c.push(l)}for(u=c.length;u--;)l=c[u],l.s=(i||i===0)&&!r?i:l.s+(i||0)+o*l.c,l.c=n-l.s,l.e&&(l.e=re(n)+we(l.e)),l.b&&(l.b=l.s+we(l.b))},qy=function(t,e){var n=t[0]?yi(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=wi({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},Xy=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Te(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Jr=function(t,e,n,i,r){return de(t)?t.call(e,n,i,r):me(t)&&~t.indexOf("random(")?as(t):t},vd=Fl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Md={};Fe(vd+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Md[s]=1});var ue=function(s){ku(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:jr(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,f=c.overwrite,_=c.keyframes,g=c.defaults,x=c.scrollTrigger,m=c.yoyoEase,p=i.parent||Qt,b=(Te(n)||Gu(n)?Ln(n[0]):"length"in i)?[n]:je(n),M,v,T,A,P,O,U,y;if(a._targets=b.length?Nl(b):po("GSAP target "+n+" not found. https://greensock.com",!Ge.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||no(l)||no(h)){if(i=a.vars,M=a.timeline=new Pe({data:"nested",defaults:g||{}}),M.kill(),M.parent=M._dp=En(a),M._start=0,d||no(l)||no(h)){if(A=b.length,U=d&&ad(d),Pn(d))for(P in d)~vd.indexOf(P)&&(y||(y={}),y[P]=d[P]);for(v=0;v<A;v++)T=go(i,Md),T.stagger=0,m&&(T.yoyoEase=m),y&&wi(T,y),O=b[v],T.duration=+Jr(l,En(a),v,O,b),T.delay=(+Jr(h,En(a),v,O,b)||0)-a._delay,!d&&A===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),M.to(O,T,U?U(v,O,b):0),M._ease=It.none;M.duration()?l=h=0:a.timeline=0}else if(_){jr(Ke(M.vars.defaults,{ease:"none"})),M._ease=Mi(_.ease||i.ease||"none");var R=0,D,I,N;if(Te(_))_.forEach(function(F){return M.to(b,F,">")});else{T={};for(P in _)P==="ease"||P==="easeEach"||Xy(P,_[P],T,_.easeEach);for(P in T)for(D=T[P].sort(function(F,k){return F.t-k.t}),R=0,v=0;v<D.length;v++)I=D[v],N={ease:I.e,duration:(I.t-(v?D[v-1].t:0))/100*l},N[P]=I.v,M.to(b,N,R),R+=N.duration;M.duration()<l&&M.to({},{duration:l-M.duration()})}}l||a.duration(l=M.duration())}else a.timeline=0;return f===!0&&!Rl&&(kn=En(a),Qt.killTweensOf(b),kn=0),fn(p,En(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!_&&a._start===be(p._time)&&Ie(u)&&My(En(a))&&p.data!=="nested")&&(a._tTime=-qt,a.render(Math.max(0,-h))),x&&id(En(a),x),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,h=i>c-qt&&i>=0?c:i<qt?0:i,u,d,f,_,g,x,m,p,b;if(!l)wy(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=i<0){if(u=h,p=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,r,o);if(u=be(h%_),h===c?(f=this._repeat,u=l):(f=~~(h/_),f&&f===h/_&&(u=l,f--),u>l&&(u=l)),x=this._yoyo&&f&1,x&&(b=this._yEase,u=l-u),g=mr(this._tTime,_),u===a&&!o&&this._initted)return this._tTime=h,this;f!==g&&(p&&this._yEase&&gd(p,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=o=1,this.render(be(_*f),!0).invalidate()._lock=0))}if(!this._initted){if(rd(this,i<0?i:u,o,r))return this._tTime=0,this;if(a!==this._time)return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(b||this._ease)(u/l),this._from&&(this.ratio=m=1-m),u&&!a&&!r&&(Ze(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(m,d.d),d=d._next;p&&p.render(i<0?i:!u&&x?-qt:p._dur*p._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(i<0&&this._startAt&&this._startAt.render(i,!0,o),Ze(this,"onUpdate")),this._repeat&&f!==g&&this.vars.onRepeat&&!r&&this.parent&&Ze(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Cn(this,1),!r&&!(i<0&&!a)&&(h||a)&&(Ze(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),s.prototype.invalidate.call(this)},e.resetTo=function(i,r,o,a){ls||Ve.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||zl(this,c),l=this._ease(c/this._dur),Wy(this,i,r,o,a,l,c)?this.resetTo(i,r,o,a):(Bl(this,0),this.parent||ed(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Gr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,kn&&kn.vars.overwrite!==!0)._first||Gr(this),this.parent&&o!==this.timeline.totalDuration()&&gr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?je(i):a,l=this._ptLookup,h=this._pt,u,d,f,_,g,x,m;if((!r||r==="all")&&yy(a,c))return r==="all"&&(this._pt=0),Gr(this);for(u=this._op=this._op||[],r!=="all"&&(me(r)&&(g={},Fe(r,function(p){return g[p]=1}),r=g),r=qy(a,r)),m=a.length;m--;)if(~c.indexOf(a[m])){d=l[m],r==="all"?(u[m]=r,_=d,f={}):(f=u[m]=u[m]||{},_=r);for(g in _)x=d&&d[g],x&&((!("kill"in x.d)||x.d.kill(g)===!0)&&No(this,x,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Gr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Zr(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Zr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Qt.killTweensOf(i,r,o)},t}(cs);Ke(ue.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fe("staggerTo,staggerFrom,staggerFromTo",function(s){ue[s]=function(){var t=new Pe,e=tl.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Ul=function(t,e,n){return t[e]=n},bd=function(t,e,n){return t[e](n)},Yy=function(t,e,n,i){return t[e](i.fp,n)},jy=function(t,e,n){return t.setAttribute(e,n)},kl=function(t,e){return de(t[e])?bd:Ll(t[e])&&t.setAttribute?jy:Ul},wd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Zy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Sd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Hl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Jy=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},$y=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?No(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Ky=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Td=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Ne=function(){function s(e,n,i,r,o,a,c,l,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||wd,this.d=c||this,this.set=l||Ul,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Ky,this.m=n,this.mt=r,this.tween=i},s}();Fe(Fl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Il[s]=1});We.TweenMax=We.TweenLite=ue;We.TimelineLite=We.TimelineMax=Pe;Qt=new Pe({sortChildren:!1,defaults:pr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ge.stringFilter=pd;var xo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Ny(i)})},timeline:function(t){return new Pe(t)},getTweensOf:function(t,e){return Qt.getTweensOf(t,e)},getProperty:function(t,e,n,i){me(t)&&(t=je(t)[0]);var r=yi(t||{}).get,o=n?td:Qu;return n==="native"&&(n=""),t&&(e?o((Ue[e]&&Ue[e].get||r)(t,e,n,i)):function(a,c,l){return o((Ue[a]&&Ue[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=je(t),t.length>1){var i=t.map(function(h){return rn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=Ue[e],a=yi(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(h){var u=new o;nr._pt=0,u.init(t,n?h+n:h,nr,0,[t]),u.render(1,u),nr._pt&&Hl(1,nr)}:a.set(t,c);return o?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=rn.to(t,wi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,h){return r.resetTo(e,c,l,h)};return o.tween=r,o},isTweening:function(t){return Qt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Mi(t.ease,pr.ease)),Lh(pr,t||{})},config:function(t){return Lh(Ge,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ue[a]&&!We[a]&&po(e+" effect requires "+a+" plugin.")}),Ta[e]=function(a,c,l){return n(je(a),Ke(c||{},r),l)},o&&(Pe.prototype[e]=function(a,c,l){return this.add(Ta[e](a,Pn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){It[t]=Mi(e)},parseEase:function(t,e){return arguments.length?Mi(t,e):It},getById:function(t){return Qt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Pe(t),i,r;for(n.smoothChildTiming=Ie(t.smoothChildTiming),Qt.remove(n),n._dp=0,n._time=n._tTime=Qt._time,i=Qt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof ue&&i.vars.onComplete===i._targets[0]))&&fn(n,i,i._start-i._delay),i=r;return fn(Qt,n,0),n},utils:{wrap:Dy,wrapYoyo:Iy,distribute:ad,random:cd,snap:ld,normalize:Py,getUnit:we,clamp:Ey,splitColor:dd,toArray:je,selector:Cy,mapRange:ud,pipe:Ry,unitize:Ly,interpolate:Fy,shuffle:od},install:ju,effects:Ta,ticker:Ve,updateRoot:Pe.updateRoot,plugins:Ue,globalTimeline:Qt,core:{PropTween:Ne,globals:Zu,Tween:ue,Timeline:Pe,Animation:cs,getCache:yi,_removeLinkedListItem:No,suppressOverwrites:function(t){return Rl=t}}};Fe("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return xo[s]=ue[s]});Ve.add(Pe.updateRoot);nr=xo.to({},{duration:0});var Qy=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},tv=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Qy(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Ra=function(t,e){return{name:t,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(me(r)&&(c={},Fe(r,function(h){return c[h]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}tv(a,r)}}}},rn=xo.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a;for(o in e)a=this.add(t,"setAttribute",(t.getAttribute(o)||0)+"",e[o],i,r,0,0,o),a&&(a.op=o),this._props.push(o)}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n])}},Ra("roundProps",el),Ra("modifiers"),Ra("snap",ld))||xo;ue.version=Pe.version=rn.version="3.10.4";Yu=1;Vu()&&_r();It.Power0;It.Power1;It.Power2;It.Power3;It.Power4;It.Linear;It.Quad;It.Cubic;It.Quart;It.Quint;It.Strong;It.Elastic;It.Back;It.SteppedEase;It.Bounce;It.Sine;It.Expo;It.Circ;/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nh,Hn,lr,Vl,_i,Bh,ev=function(){return typeof window!="undefined"},ni={},pi=180/Math.PI,cr=Math.PI/180,Zi=Math.atan2,Oh=1e8,Ed=/([A-Z])/g,nv=/(left|right|width|margin|padding|x)/i,iv=/[\s,\(]\S/,Vn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ad=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},rv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},sv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ov=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Cd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Rd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},av=function(t,e,n){return t.style[e]=n},lv=function(t,e,n){return t.style.setProperty(e,n)},cv=function(t,e,n){return t._gsap[e]=n},hv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},uv=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},dv=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},_e="transform",ii=_e+"Origin",Ld,il=function(t,e){var n=Hn.createElementNS?Hn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Hn.createElement(t);return n.style?n:Hn.createElement(t)},Rn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ed,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,xr(e)||e,1)||""},zh="O,Moz,ms,Ms,Webkit".split(","),xr=function(t,e,n){var i=e||_i,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(zh[o]+t in r););return o<0?null:(o===3?"ms":o>=0?zh[o]:"")+t},rl=function(){ev()&&window.document&&(Nh=window,Hn=Nh.document,lr=Hn.documentElement,_i=il("div")||{style:{}},il("div"),_e=xr(_e),ii=_e+"Origin",_i.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ld=!!xr("perspective"),Vl=1)},La=function s(t){var e=il("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(lr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),lr.removeChild(e),this.style.cssText=r,o},Uh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Pd=function(t){var e;try{e=t.getBBox()}catch{e=La.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===La||(e=La.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Uh(t,["x","cx","x1"])||0,y:+Uh(t,["y","cy","y1"])||0,width:0,height:0}:e},Dd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Pd(t))},hs=function(t,e){if(e){var n=t.style;e in ni&&e!==ii&&(e=_e),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Ed,"-$1").toLowerCase())):n.removeAttribute(e)}},Gn=function(t,e,n,i,r,o){var a=new Ne(t._pt,e,n,0,1,o?Rd:Cd);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},kh={deg:1,rad:1,turn:1},ri=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=_i.style,c=nv.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,x,m;return i===o||!r||kh[i]||kh[o]?r:(o!=="px"&&!d&&(r=s(t,e,n,"px")),m=t.getCTM&&Dd(t),(f||o==="%")&&(ni[e]||~e.indexOf("adius"))?(_=m?t.getBBox()[c?"width":"height"]:t[h],re(f?r/_*u:r/100*_)):(a[c?"width":"height"]=u+(d?o:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Hn||!g.appendChild)&&(g=Hn.body),x=g._gsap,x&&f&&x.width&&c&&x.time===Ve.time?re(r/x.width*u):((f||o==="%")&&(a.position=Rn(t,"position")),g===t&&(a.position="static"),g.appendChild(_i),_=_i[h],g.removeChild(_i),a.position="absolute",c&&f&&(x=yi(g),x.time=Ve.time,x.width=g[h]),re(d?_*r/u:_&&r?u/_*r:0))))},mi=function(t,e,n,i){var r;return Vl||rl(),e in Vn&&e!=="transform"&&(e=Vn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ni[e]&&e!=="transform"?(r=ds(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:vo(Rn(t,ii))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=yo[e]&&yo[e](t,e,n)||Rn(t,e)||$u(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ri(t,e,r,n)+n:r},fv=function(t,e,n,i){if(!n||n==="none"){var r=xr(e,t,1),o=r&&Rn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Rn(t,"borderTopColor"))}var a=new Ne(this._pt,t.style,e,0,1,Sd),c=0,l=0,h,u,d,f,_,g,x,m,p,b,M,v;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=Rn(t,e)||i,t.style[e]=n),h=[n,i],pd(h),n=h[0],i=h[1],d=n.match(er)||[],v=i.match(er)||[],v.length){for(;u=er.exec(i);)x=u[0],p=i.substring(c,u.index),_?_=(_+1)%5:(p.substr(-5)==="rgba("||p.substr(-5)==="hsla(")&&(_=1),x!==(g=d[l++]||"")&&(f=parseFloat(g)||0,M=g.substr((f+"").length),x.charAt(1)==="="&&(x=ar(f,x)+M),m=parseFloat(x),b=x.substr((m+"").length),c=er.lastIndex-b.length,b||(b=b||Ge.units[e]||M,c===i.length&&(i+=b,a.e+=b)),M!==b&&(f=ri(t,e,g,b)||0),a._pt={_next:a._pt,p:p||l===1?p:",",s:f,c:m-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?Rd:Cd;return qu.test(i)&&(a.e=0),this._pt=a,a},Hh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},pv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Hh[n]||n,e[1]=Hh[i]||i,e.join(" ")},mv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],ni[a]&&(c=1,a=a==="transformOrigin"?ii:_e),hs(n,a);c&&(hs(n,_e),o&&(o.svg&&n.removeAttribute("transform"),ds(n,1),o.uncache=1))}},yo={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Ne(t._pt,e,n,0,0,mv);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},us=[1,0,0,1,0,0],Id={},Fd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Vh=function(t){var e=Rn(t,_e);return Fd(e)?us:e.substr(7).match(Wu).map(re)},Gl=function(t,e){var n=t._gsap||yi(t),i=t.style,r=Vh(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?us:r):(r===us&&!t.offsetParent&&t!==lr&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(l=1,a=t.nextSibling,lr.appendChild(t)),r=Vh(t),c?i.display=c:hs(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):lr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},sl=function(t,e,n,i,r,o){var a=t._gsap,c=r||Gl(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=c[0],_=c[1],g=c[2],x=c[3],m=c[4],p=c[5],b=e.split(" "),M=parseFloat(b[0])||0,v=parseFloat(b[1])||0,T,A,P,O;n?c!==us&&(A=f*x-_*g)&&(P=M*(x/A)+v*(-g/A)+(g*p-x*m)/A,O=M*(-_/A)+v*(f/A)-(f*p-_*m)/A,M=P,v=O):(T=Pd(t),M=T.x+(~b[0].indexOf("%")?M/100*T.width:M),v=T.y+(~(b[1]||b[0]).indexOf("%")?v/100*T.height:v)),i||i!==!1&&a.smooth?(m=M-l,p=v-h,a.xOffset=u+(m*f+p*g)-m,a.yOffset=d+(m*_+p*x)-p):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=v,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[ii]="0px 0px",o&&(Gn(o,a,"xOrigin",l,M),Gn(o,a,"yOrigin",h,v),Gn(o,a,"xOffset",u,a.xOffset),Gn(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+v)},ds=function(t,e){var n=t._gsap||new xd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=Rn(t,ii)||"0",l,h,u,d,f,_,g,x,m,p,b,M,v,T,A,P,O,U,y,R,D,I,N,F,k,J,Q,V,X,it,at,ut;return l=h=u=_=g=x=m=p=b=0,d=f=1,n.svg=!!(t.getCTM&&Dd(t)),T=Gl(t,n.svg),n.svg&&(F=(!n.uncache||c==="0px 0px")&&!e&&t.getAttribute("data-svg-origin"),sl(t,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,T)),M=n.xOrigin||0,v=n.yOrigin||0,T!==us&&(U=T[0],y=T[1],R=T[2],D=T[3],l=I=T[4],h=N=T[5],T.length===6?(d=Math.sqrt(U*U+y*y),f=Math.sqrt(D*D+R*R),_=U||y?Zi(y,U)*pi:0,m=R||D?Zi(R,D)*pi+_:0,m&&(f*=Math.abs(Math.cos(m*cr))),n.svg&&(l-=M-(M*U+v*R),h-=v-(M*y+v*D))):(ut=T[6],it=T[7],Q=T[8],V=T[9],X=T[10],at=T[11],l=T[12],h=T[13],u=T[14],A=Zi(ut,X),g=A*pi,A&&(P=Math.cos(-A),O=Math.sin(-A),F=I*P+Q*O,k=N*P+V*O,J=ut*P+X*O,Q=I*-O+Q*P,V=N*-O+V*P,X=ut*-O+X*P,at=it*-O+at*P,I=F,N=k,ut=J),A=Zi(-R,X),x=A*pi,A&&(P=Math.cos(-A),O=Math.sin(-A),F=U*P-Q*O,k=y*P-V*O,J=R*P-X*O,at=D*O+at*P,U=F,y=k,R=J),A=Zi(y,U),_=A*pi,A&&(P=Math.cos(A),O=Math.sin(A),F=U*P+y*O,k=I*P+N*O,y=y*P-U*O,N=N*P-I*O,U=F,I=k),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,x=180-x),d=re(Math.sqrt(U*U+y*y+R*R)),f=re(Math.sqrt(N*N+ut*ut)),A=Zi(I,N),m=Math.abs(A)>2e-4?A*pi:0,b=at?1/(at<0?-at:at):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Fd(Rn(t,_e)),F&&t.setAttribute("transform",F))),Math.abs(m)>90&&Math.abs(m)<270&&(r?(d*=-1,m+=_<=0?180:-180,_+=_<=0?180:-180):(f*=-1,m+=m<=0?180:-180)),e=e||n.uncache,n.x=l-((n.xPercent=l&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-l)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=re(d),n.scaleY=re(f),n.rotation=re(_)+a,n.rotationX=re(g)+a,n.rotationY=re(x)+a,n.skewX=m+a,n.skewY=p+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ii]=vo(c)),n.xOffset=n.yOffset=0,n.force3D=Ge.force3D,n.renderTransform=n.svg?_v:Ld?Nd:gv,n.uncache=0,n},vo=function(t){return(t=t.split(" "))[0]+" "+t[1]},Pa=function(t,e,n){var i=we(e);return re(parseFloat(e)+parseFloat(ri(t,"x",n+"px",i)))+i},gv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Nd(t,e)},ui="0deg",Ur="0px",di=") ",Nd=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,x=n.transformPerspective,m=n.force3D,p=n.target,b=n.zOrigin,M="",v=m==="auto"&&t&&t!==1||m===!0;if(b&&(u!==ui||h!==ui)){var T=parseFloat(h)*cr,A=Math.sin(T),P=Math.cos(T),O;T=parseFloat(u)*cr,O=Math.cos(T),o=Pa(p,o,A*O*-b),a=Pa(p,a,-Math.sin(T)*-b),c=Pa(p,c,P*O*-b+b)}x!==Ur&&(M+="perspective("+x+di),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(v||o!==Ur||a!==Ur||c!==Ur)&&(M+=c!==Ur||v?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+di),l!==ui&&(M+="rotate("+l+di),h!==ui&&(M+="rotateY("+h+di),u!==ui&&(M+="rotateX("+u+di),(d!==ui||f!==ui)&&(M+="skew("+d+", "+f+di),(_!==1||g!==1)&&(M+="scale("+_+", "+g+di),p.style[_e]=M||"translate(0, 0)"},_v=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,x=n.xOffset,m=n.yOffset,p=n.forceCSS,b=parseFloat(o),M=parseFloat(a),v,T,A,P,O;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=cr,l*=cr,v=Math.cos(c)*u,T=Math.sin(c)*u,A=Math.sin(c-l)*-d,P=Math.cos(c-l)*d,l&&(h*=cr,O=Math.tan(l-h),O=Math.sqrt(1+O*O),A*=O,P*=O,h&&(O=Math.tan(h),O=Math.sqrt(1+O*O),v*=O,T*=O)),v=re(v),T=re(T),A=re(A),P=re(P)):(v=u,P=d,T=A=0),(b&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(b=ri(f,"x",o,"px"),M=ri(f,"y",a,"px")),(_||g||x||m)&&(b=re(b+_-(_*v+g*A)+x),M=re(M+g-(_*T+g*P)+m)),(i||r)&&(O=f.getBBox(),b=re(b+i/100*O.width),M=re(M+r/100*O.height)),O="matrix("+v+","+T+","+A+","+P+","+b+","+M+")",f.setAttribute("transform",O),p&&(f.style[_e]=O)},xv=function(t,e,n,i,r){var o=360,a=me(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?pi:1),l=c-i,h=i+l+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),u==="cw"&&l<0?l=(l+o*Oh)%o-~~(l/o)*o:u==="ccw"&&l>0&&(l=(l-o*Oh)%o-~~(l/o)*o)),t._pt=d=new Ne(t._pt,e,n,i,l,rv),d.e=h,d.u="deg",t._props.push(n),d},Gh=function(t,e){for(var n in e)t[n]=e[n];return t},yv=function(t,e,n){var i=Gh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,u,d,f,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[_e]=e,a=ds(n,1),hs(n,_e),n.setAttribute("transform",l)):(l=getComputedStyle(n)[_e],o[_e]=e,a=ds(n,1),o[_e]=l);for(c in ni)l=i[c],h=a[c],l!==h&&r.indexOf(c)<0&&(f=we(l),_=we(h),u=f!==_?ri(n,c,l,_):parseFloat(l),d=parseFloat(h),t._pt=new Ne(t._pt,a,c,u,d-u,Ad),t._pt.u=_||0,t._props.push(c));Gh(a,i)};Fe("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});yo[t>1?"border"+s:s]=function(a,c,l,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return mi(a,_,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(c,f,u)}});var Bd={name:"css",register:rl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,h,u,d,f,_,g,x,m,p,b,M,v,T,A;Vl||rl();for(g in e)if(g!=="autoRound"&&(h=e[g],!(Ue[g]&&yd(g,e,n,i,t,r)))){if(f=typeof h,_=yo[g],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=as(h)),_)_(this,t,g,h,n)&&(A=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Kn.lastIndex=0,Kn.test(l)||(x=we(l),m=we(h)),m?x!==m&&(l=ri(t,g,l,m)+m):x&&(h+=x),this.add(a,"setProperty",l,h,i,r,0,0,g),o.push(g);else if(f!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,t,r):c[g],me(l)&&~l.indexOf("random(")&&(l=as(l)),we(l+"")||(l+=Ge.units[g]||we(mi(t,g))||""),(l+"").charAt(1)==="="&&(l=mi(t,g))):l=mi(t,g),d=parseFloat(l),p=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),p&&(h=h.substr(2)),u=parseFloat(h),g in Vn&&(g==="autoAlpha"&&(d===1&&mi(t,"visibility")==="hidden"&&u&&(d=0),Gn(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Vn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in ni,b){if(M||(v=t._gsap,v.renderTransform&&!e.parseTransform||ds(t,e.parseTransform),T=e.smoothOrigin!==!1&&v.smooth,M=this._pt=new Ne(this._pt,a,_e,0,1,v.renderTransform,v,0,-1),M.dep=1),g==="scale")this._pt=new Ne(this._pt,v,"scaleY",v.scaleY,(p?ar(v.scaleY,p+u):u)-v.scaleY||0),o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){h=pv(h),v.svg?sl(t,h,0,T,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==v.zOrigin&&Gn(this,v,"zOrigin",v.zOrigin,m),Gn(this,a,g,vo(l),vo(h)));continue}else if(g==="svgOrigin"){sl(t,h,1,T,0,this);continue}else if(g in Id){xv(this,v,g,d,p?ar(d,p+h):h);continue}else if(g==="smoothOrigin"){Gn(this,v,"smooth",v.smooth,h);continue}else if(g==="force3D"){v[g]=h;continue}else if(g==="transform"){yv(this,h,t);continue}}else g in a||(g=xr(g)||g);if(b||(u||u===0)&&(d||d===0)&&!iv.test(h)&&g in a)x=(l+"").substr((d+"").length),u||(u=0),m=we(h)||(g in Ge.units?Ge.units[g]:x),x!==m&&(d=ri(t,g,l,m)),this._pt=new Ne(this._pt,b?v:a,g,d,(p?ar(d,p+u):u)-d,!b&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?ov:Ad),this._pt.u=m||0,x!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=sv);else if(g in a)fv.call(this,t,g,l,p?p+h:h);else if(g in t)this.add(t,g,l||t[g],p?p+h:h,i,r);else{Dl(g,h);continue}o.push(g)}}A&&Td(this)},get:mi,aliases:Vn,getSetter:function(t,e,n){var i=Vn[e];return i&&i.indexOf(",")<0&&(e=i),e in ni&&e!==ii&&(t._gsap.x||mi(t,"x"))?n&&Bh===n?e==="scale"?hv:cv:(Bh=n||{})&&(e==="scale"?uv:dv):t.style&&!Ll(t.style[e])?av:~e.indexOf("-")?lv:kl(t,e)},core:{_removeProperty:hs,_getMatrix:Gl}};rn.utils.checkPrefix=xr;(function(s,t,e,n){var i=Fe(s+","+t+","+e,function(r){ni[r]=1});Fe(t,function(r){Ge.units[r]="deg",Id[r]=1}),Vn[i[13]]=s+","+t,Fe(n,function(r){var o=r.split(":");Vn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ge.units[s]="px"});rn.registerPlugin(Bd);var Od=rn.registerPlugin(Bd)||rn;Od.core.Tween;const Wl=[],Da={x:0,y:0},Ia={x:0,y:0};let ol=[],Ar=new _l,$r=window.innerWidth/window.innerHeight,Wn=20,pn=new Co(-Wn*$r,Wn*$r,Wn,-Wn,1,1e3);pn.position.set(50,50,50);pn.lookAt(Ar.position);const vv=new Ou(16777215,1);Ar.add(vv);const vs=new Fu(15658734,1,100,Math.PI,.5);vs.castShadow=!0;vs.shadow.mapSize.width=2048;vs.shadow.mapSize.height=2048;const ql=2e5,zd=50,Mv=zd*Math.cos(ql),bv=zd*Math.sin(ql),wv=20+5*Math.sin(ql/3);vs.position.set(Mv,wv,bv);Ar.add(vs);const Si=new Vt({antialias:!0,alpha:!0});Si.setSize(window.innerWidth,window.innerHeight);Si.gammaOutput=!0;Si.shadowMap.enabled=!0;document.body.appendChild(Si.domElement);class Sv extends Se{constructor(e,n){super(e,n);ws(this,"isAnimation");ws(this,"isHover");ws(this,"baseColor");this.isAnimation=!1,this.isHover=!1,this.baseColor=this.material.color}animate(){if(this.isAnimation)return;this.isAnimation=!0,this.material.color=new pt(15658496);const e=this.position.y,n=this.rotation.y,i=10;Od.timeline().to(this.position,{y:e+i,ease:"sine.out",duration:.3}).to(this.rotation,{y:n+Math.PI,ease:"sine.in",duration:.2},.08).to(this.position,{y:e,ease:"sine.in",duration:.15,delay:.25,onComplete:()=>{this.material.color=this.baseColor,this.isAnimation=!0}})}hover(){this.isAnimation||this.isHover||(this.isHover=!0,this.material.color=new pt(8947848),setTimeout(()=>{this.isAnimation||(this.material.color=this.baseColor),this.isHover=!1},200))}}const io=15,$i=5;for(let s=-io/2;s<io/2;s++)for(let t=-io/2;t<io/2;t++){const e=new br($i,$i,$i),n=new Fo({color:8912896,roughness:.5}),i=new Sv(e,n);i.receiveShadow=!0,i.castShadow=!0,i.position.set(t*($i*1.5),0,s*($i*1.5)),Ar.add(i),Wl.push(i)}const Cr=new Se(new Ao(150,150,1,1),new Fo({color:15658734,roughness:0}));Cr.position.set(-5,0,0);Cr.rotateX(-.5*Math.PI);Cr.position.y=-$i/2;Cr.receiveShadow=!0;Cr.castShadow=!0;Ar.add(Cr);const Ud=()=>{requestAnimationFrame(Ud),ol.length>0&&ol[0].object.hover(),Si.render(Ar,pn)};Ud();const kd=()=>{const s=window.innerWidth,t=window.innerHeight;Si.setPixelRatio(window.devicePixelRatio),Si.setSize(s,t),$r=s/t,pn.left=-$r*Wn,pn.right=$r*Wn,pn.top=Wn,pn.bottom=-Wn,pn.updateProjectionMatrix()};kd();window.addEventListener("resize",kd);const Mo=new ly;var Wh;(Wh=document.querySelector("canvas"))==null||Wh.addEventListener("mousemove",s=>{Da.x=(s.offsetX-window.innerWidth/2)/window.innerWidth*2,Da.y=(-s.offsetY+window.innerHeight/2)/window.innerHeight*2,Mo.setFromCamera(Da,pn),ol=Mo.intersectObjects(Wl)});var qh;(qh=document.querySelector("canvas"))==null||qh.addEventListener("click",s=>{Ia.x=(s.offsetX-window.innerWidth/2)/window.innerWidth*2,Ia.y=(-s.offsetY+window.innerHeight/2)/window.innerHeight*2,Mo.setFromCamera(Ia,pn);const t=Mo.intersectObjects(Wl);t.length>0&&t[0].object.animate()});
