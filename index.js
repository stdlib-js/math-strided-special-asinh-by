// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,a=n.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,f){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=f.value,t.__proto__=c):t[r]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,r,f.get),p&&i&&i.call(t,r,f.set),t};function c(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(t,r,n,e,o,i,u,a){var f,c,l,y;if(t<=0)return e;for(f=n<0?(1-t)*n:0,c=o<0?(1-t)*o:0,y=0;y<t;y++)void 0!==(l=u.call(a,r[f],y,f,c,r,e))&&(e[c]=i(l)),f+=n,c+=o;return e}function y(t,r,n,e,o,i,u,a,f,c){var l,y,p,b;if(t<=0)return o;for(l=e,y=u,b=0;b<t;b++)void 0!==(p=f.call(c,r[l],b,l,y,r,o))&&(o[y]=a(p)),l+=n,y+=i;return o}c(l,"ndarray",y);var p=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY;function v(t){return t!=t}var d,A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,m=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",w=A&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,i;if(null==t)return _.call(t);n=t[s],i=s,r=null!=(o=t)&&m.call(o,i);try{t[s]=void 0}catch(r){return _.call(t)}return e=_.call(t),r?t[s]=n:delete t[s],e}:function(t){return _.call(t)},U="function"==typeof Uint32Array,h="function"==typeof Uint32Array?Uint32Array:null,j="function"==typeof Uint32Array?Uint32Array:void 0;d=function(){var t,r,n;if("function"!=typeof h)return!1;try{r=new h(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(U&&n instanceof Uint32Array||"[object Uint32Array]"===w(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?j:function(){throw new Error("not implemented")};var g,N=d,S="function"==typeof Float64Array,E="function"==typeof Float64Array?Float64Array:null,F="function"==typeof Float64Array?Float64Array:void 0;g=function(){var t,r,n;if("function"!=typeof E)return!1;try{r=new E([1,3.14,-3.14,NaN]),n=r,t=(S&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?F:function(){throw new Error("not implemented")};var T,I=g,O="function"==typeof Uint8Array,P="function"==typeof Uint8Array?Uint8Array:null,x="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var t,r,n;if("function"!=typeof P)return!1;try{r=new P(r=[1,3.14,-3.14,256,257]),n=r,t=(O&&n instanceof Uint8Array||"[object Uint8Array]"===w(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?x:function(){throw new Error("not implemented")};var V,G=T,k="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var t,r,n;if("function"!=typeof Y)return!1;try{r=new Y(r=[1,3.14,-3.14,65536,65537]),n=r,t=(k&&n instanceof Uint16Array||"[object Uint16Array]"===w(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?q:function(){throw new Error("not implemented")};var B,C={uint16:V,uint8:G};(B=new C.uint16(1))[0]=4660;var M=52===new C.uint8(B.buffer)[0],z=!0===M?1:0,D=new I(1),H=new N(D.buffer);function J(t){return D[0]=t,H[z]}var K=!0===M?1:0,L=new I(1),Q=new N(L.buffer);function R(t,r){return L[0]=t,Q[K]=r>>>0,L[0]}var W=1023,X=.6931471803691238,Z=1.9082149292705877e-10,$=Math.sqrt,tt=.6931471803691238,rt=1.9082149292705877e-10,nt=1048575;function et(t){var r,n,e,o,i,u,a,f,c,l,y,p;return 0===t?b:v(t)||t<0?NaN:(i=0,(n=J(t))<1048576&&(i-=54,n=J(t*=0x40000000000000)),n>=2146435072?t+t:(i+=(n>>20)-W|0,i+=(f=614244+(n&=nt)&1048576|0)>>20|0,a=(t=R(t,n|1072693248^f))-1,(nt&2+n)<3?0===a?0===i?0:i*tt+i*rt:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*tt-(u-i*rt-a)):(f=n-398458|0,c=440401-n|0,o=(y=(p=(l=a/(2+a))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),u=e+o,(f|=c)>0?(r=.5*a*a,0===i?a-(r-l*(r+u)):i*tt-(r-(l*(r+u)+i*rt)-a)):0===i?a-l*(a-u):i*tt-(l*(a-u)-i*rt-a))))}function ot(t){var r,n,e;return v(t)||function(t){return t===p||t===b}(t)?t:(t<0&&(t=-t,r=!0),e=t<3.725290298461914e-9?t:t>268435456?et(t)+.6931471805599453:t>2?et(2*t+1/($(t*t+1)+t)):function(t){var r,n,e,o,i,u,a,f,c,l;if(t<-1||v(t))return NaN;if(-1===t)return b;if(t===p)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,o=t,n=1)}return 0!==l&&(e<9007199254740992?(i=(l=((n=J(c=1+t))>>20)-W)>0?1-(c-t):t-(c-1),i/=c):(l=((n=J(c=t))>>20)-W,i=0),(n&=1048575)<434334?c=R(c,1072693248|n):(l+=1,c=R(c,1071644672|n),n=1048576-n>>2),o=c-1),r=.5*o*o,0===n?0===o?l*X+(i+=l*Z):l*X-((f=r*(1-.6666666666666666*o))-(l*Z+i)-o):(f=(a=(u=o/(2+o))*u)*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))}(a),0===l?o-(r-u*(r+f)):l*X-(r-(u*(r+f)+(l*Z+i))-o))}(t+(n=t*t)/(1+$(1+n))),r?-e:e)}function it(t,r,n,e,o,i,u){return l(t,r,n,e,o,ot,i,u)}return c(it,"ndarray",(function(t,r,n,e,o,i,u,a,f){return y(t,r,n,e,o,i,u,ot,a,f)})),it},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).asinhBy=r();
//# sourceMappingURL=index.js.map
