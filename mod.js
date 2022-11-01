// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,i=n.__lookupGetter__,u=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(i.call(r,t)||u.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,t,f.get),v&&a&&a.call(r,t,f.set),r};function c(r,t,n){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r,t,n,e,o,a,i,u){var f,c,l,y;if(r<=0)return e;for(f=n<0?(1-r)*n:0,c=o<0?(1-r)*o:0,y=0;y<r;y++)void 0!==(l=i.call(u,t[f],y,f,c,t,e))&&(e[c]=a(l)),f+=n,c+=o;return e}function y(r,t,n,e,o,a,i,u,f,c){var l,y,v,p;if(r<=0)return o;for(l=e,y=i,p=0;p<r;p++)void 0!==(v=f.call(c,t[l],p,l,y,t,o))&&(o[y]=u(v)),l+=n,y+=a;return o}c(l,"ndarray",y);var v=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY;function b(r){return r!=r}var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var _=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var w="function"==typeof Symbol?Symbol.toStringTag:"";var m=A&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return _.call(r);n=r[w],a=w,t=null!=(o=r)&&d.call(o,a);try{r[w]=void 0}catch(t){return _.call(r)}return e=_.call(r),t?r[w]=n:delete r[w],e}:function(r){return _.call(r)},s="function"==typeof Uint32Array;var U="function"==typeof Uint32Array?Uint32Array:null;var h,j="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var r,t,n;if("function"!=typeof U)return!1;try{t=new U(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(s&&n instanceof Uint32Array||"[object Uint32Array]"===m(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?j:function(){throw new Error("not implemented")};var g=h,N="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null;var E,F="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,t,n;if("function"!=typeof S)return!1;try{t=new S([1,3.14,-3.14,NaN]),n=t,r=(N&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?F:function(){throw new Error("not implemented")};var I=E,O="function"==typeof Uint8Array;var T="function"==typeof Uint8Array?Uint8Array:null;var P,V="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,t,n;if("function"!=typeof T)return!1;try{t=new T(t=[1,3.14,-3.14,256,257]),n=t,r=(O&&n instanceof Uint8Array||"[object Uint8Array]"===m(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var x=P,G="function"==typeof Uint16Array;var k="function"==typeof Uint16Array?Uint16Array:null;var Y,q="function"==typeof Uint16Array?Uint16Array:void 0;Y=function(){var r,t,n;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,65536,65537]),n=t,r=(G&&n instanceof Uint16Array||"[object Uint16Array]"===m(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?q:function(){throw new Error("not implemented")};var C,M={uint16:Y,uint8:x};(C=new M.uint16(1))[0]=4660;var z=52===new M.uint8(C.buffer)[0],B=!0===z?1:0,D=new I(1),H=new g(D.buffer);function J(r){return D[0]=r,H[B]}var K=!0===z?1:0,L=new I(1),Q=new g(L.buffer);function R(r,t){return L[0]=r,Q[K]=t>>>0,L[0]}var W=.6931471803691238,X=1.9082149292705877e-10;var Z=Math.sqrt;var $=.6931471803691238,rr=1.9082149292705877e-10;function tr(r){var t,n,e,o,a,i,u,f,c,l,y,v;return 0===r?p:b(r)||r<0?NaN:(a=0,(n=J(r))<1048576&&(a-=54,n=J(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(f=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=R(r,n|1072693248^f))-1,(1048575&2+n)<3?0===u?0===a?0:a*$+a*rr:(i=u*u*(.5-.3333333333333333*u),0===a?u-i:a*$-(i-a*rr-u)):(f=n-398458|0,c=440401-n|0,o=(y=(v=(l=u/(2+u))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(f|=c)>0?(t=.5*u*u,0===a?u-(t-l*(t+i)):a*$-(t-(l*(t+i)+a*rr)-u)):0===a?u-l*(u-i):a*$-(l*(u-i)-a*rr-u))))}function nr(r){var t,n,e;return b(r)||function(r){return r===v||r===p}(r)?r:(r<0&&(r=-r,t=!0),e=r<3.725290298461914e-9?r:r>268435456?tr(r)+.6931471805599453:r>2?tr(2*r+1/(Z(r*r+1)+r)):function(r){var t,n,e,o,a,i,u,f,c,l;if(r<-1||b(r))return NaN;if(-1===r)return p;if(r===v)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,n=1)}return 0!==l&&(e<9007199254740992?(a=(l=((n=J(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(l=((n=J(c=r))>>20)-1023,a=0),(n&=1048575)<434334?c=R(c,1072693248|n):(l+=1,c=R(c,1071644672|n),n=1048576-n>>2),o=c-1),t=.5*o*o,0===n?0===o?l*W+(a+=l*X):l*W-((f=t*(1-.6666666666666666*o))-(l*X+a)-o):(f=(u=(i=o/(2+o))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?o-(t-i*(t+f)):l*W-(t-(i*(t+f)+(l*X+a))-o))}(r+(n=r*r)/(1+Z(1+n))),t?-e:e)}function er(r,t,n,e,o,a,i){return l(r,t,n,e,o,nr,a,i)}function or(r,t,n,e,o,a,i,u,f){return y(r,t,n,e,o,a,i,nr,u,f)}c(er,"ndarray",or);export{er as default,or as ndarray};
//# sourceMappingURL=mod.js.map