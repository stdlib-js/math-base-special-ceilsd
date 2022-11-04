// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(r){return r===n||r===t}var o=Math.floor;function u(r){return o(r)===r}function i(r){return u(r/2)}function f(r){return i(r>0?r-1:r+1)}var a=Math.sqrt;function c(r){return Math.abs(r)}var l,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,v=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"";l=y&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return p.call(r);t=r[b],u=b,n=null!=(o=r)&&v.call(o,u);try{r[b]=void 0}catch(n){return p.call(r)}return e=p.call(r),n?r[b]=t:delete r[b],e}:function(r){return p.call(r)};var s,d=l,w="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===d(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,h=s,U="function"==typeof Float64Array,N="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;m=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N([1,3.14,-3.14,NaN]),t=n,r=(U&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j,I=m,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;j=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,256,257]),t=n,r=(O&&t instanceof Uint8Array||"[object Uint8Array]"===d(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=j,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===d(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var x,L={uint16:F,uint8:T};(x=new L.uint16(1))[0]=4660;var M,V,W=52===new L.uint8(x.buffer)[0];!0===W?(M=1,V=0):(M=0,V=1);var k={HIGH:M,LOW:V},Y=new I(1),q=new h(Y.buffer),C=k.HIGH,z=k.LOW;function B(r,n){return Y[0]=n,r[0]=q[C],r[1]=q[z],r}function D(r,n){return 1===arguments.length?B([0,0],r):B(r,n)}var J=!0===W?0:1,K=new I(1),Q=new h(K.buffer);function R(r,n){return K[0]=r,Q[J]=n>>>0,K[0]}function X(r){return 0|r}var Z,$,rr=!0===W?1:0,nr=new I(1),tr=new h(nr.buffer);function er(r){return nr[0]=r,tr[rr]}!0===W?(Z=1,$=0):(Z=0,$=1);var or={HIGH:Z,LOW:$},ur=new I(1),ir=new h(ur.buffer),fr=or.HIGH,ar=or.LOW;function cr(r,n){return ir[fr]=r,ir[ar]=n,ur[0]}var lr=[0,0];function yr(r,n){var t,e;return D(lr,r),t=lr[0],t&=2147483647,e=er(n),cr(t|=e&=2147483648,lr[1])}var pr=!0===W?1:0,vr=new I(1),br=new h(vr.buffer);function sr(r,n){return vr[0]=r,br[pr]=n>>>0,vr[0]}var dr,wr=1023,Ar=1048576,_r=[1,1.5],mr=[0,.5849624872207642],hr=[0,1.350039202129749e-8],Ur="function"==typeof Object.defineProperty?Object.defineProperty:null,Nr=Object.defineProperty,gr=Object.prototype,jr=gr.toString,Ir=gr.__defineGetter__,Or=gr.__defineSetter__,Sr=gr.__lookupGetter__,Er=gr.__lookupSetter__;function Fr(n,t,o,u){return r(n)||e(n)?(t[u]=n,t[u+o]=0,t):0!==n&&c(n)<22250738585072014e-324?(t[u]=4503599627370496*n,t[u+o]=-52,t):(t[u]=n,t[u+o]=0,t)}function Tr(r){var n=er(r);return(n=(2146435072&n)>>>20)-wr|0}dr=function(){try{return Ur({},"x",{}),!0}catch(r){return!1}}()?Nr:function(r,n,t){var e,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===jr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===jr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(Sr.call(r,n)||Er.call(r,n)?(e=r.__proto__,r.__proto__=gr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,i="set"in t,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&Ir&&Ir.call(r,n,t.get),i&&Or&&Or.call(r,n,t.set),r},dr((function(r){return Fr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:Fr});var Hr=[0,0],Gr=[0,0],Pr=2147483647,xr=1048575,Lr=1048576;function Mr(o,u,i){var f,a,c,l,y,p,v,b,s,d,w,A,_,m;return s=((b=o&Pr|0)>>20)-wr|0,v=0,b>1071644672&&(a=sr(0,((v=o+(Lr>>s+1)>>>0)&~(xr>>(s=((v&Pr)>>20)-wr|0)))>>>0),v=(v&xr|Lr)>>20-s>>>0,o<0&&(v=-v),u-=a),o=X(o=er(p=1-((p=(c=.6931471824645996*(a=R(a=i+u,0)))+(l=.6931471805599453*(i-(a-u))+-1.904654299957768e-9*a))*(f=p-(a=p*p)*(0===(d=a)?.16666666666666602:.16666666666666602+d*(d*(6613756321437934e-20+d*(4.1381367970572385e-8*d-16533902205465252e-22))-.0027777777777015593)))/(f-2)-((y=l-(p-c))+p*y)-p))),(o+=v<<20>>>0)>>20<=0?(w=p,p=0===(A=v)||0===w||r(w)||e(w)?w:(Fr(w,Hr,1,0),A+=Hr[1],(A+=Tr(w=Hr[0]))<-1074?yr(0,w):A>1023?w<0?t:n:(A<=-1023?(A+=52,m=2220446049250313e-31):m=1,D(Gr,w),_=Gr[0],_&=2148532223,m*cr(_|=A+wr<<20,Gr[1])))):p=sr(p,o),p}var Vr=2147483647,Wr=1083179008,kr=1e300,Yr=1e-300,qr=[0,0],Cr=[0,0];function zr(o,i){var l,y,p,v,b,s,d,w,A,_,m,h,U,N;if(r(o)||r(i))return NaN;if(D(qr,i),b=qr[0],0===qr[1]){if(0===i)return 1;if(1===i)return o;if(-1===i)return 1/o;if(.5===i)return a(o);if(-.5===i)return 1/a(o);if(2===i)return o*o;if(3===i)return o*o*o;if(4===i)return(o*=o)*o;if(e(i))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:c(r)<1==(t===n)?0:n}(o,i)}if(D(qr,o),v=qr[0],0===qr[1]){if(0===v)return function(r,e){return e===t?n:e===n?0:e>0?f(e)?r:0:f(e)?yr(n,r):n}(o,i);if(1===o)return 1;if(-1===o&&f(i))return-1;if(e(o))return o===t?zr(-0,-i):i<0?0:n}if(o<0&&!1===u(i))return(o-o)/(o-o);if(p=c(o),l=v&Vr|0,y=b&Vr|0,d=b>>>31|0,s=(s=v>>>31|0)&&f(i)?-1:1,y>1105199104){if(y>1139802112)return function(r,n){return(2147483647&er(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(o,i);if(l<1072693247)return 1===d?s*kr*kr:s*Yr*Yr;if(l>1072693248)return 0===d?s*kr*kr:s*Yr*Yr;m=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=R(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Cr,p)}else m=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,s,d,w,A,_,m,h,U,N;return m=0,t<Ar&&(m-=53,t=er(n*=9007199254740992)),m+=(t>>20)-wr|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=Ar),i=R(o=(A=(n=sr(n,t))-(c=_r[U]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=sr(0,e+=U<<18),w=(u=o*o)*u*(0===(N=u)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=R(a=3+(u=i*i)+(w+=(f=_*(A-i*a-i*(n-(a-c))))*(i+o)),0),s=(v=-7.028461650952758e-9*(y=R(y=(A=i*a)+(_=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(_-(y-A))+hr[U])-((b=R(b=(p=.9617967009544373*y)+v+(l=mr[U])+(d=m),0))-d-l-p),r[0]=b,r[1]=s,r}(Cr,p,l);if(_=(i-(w=R(i,0)))*m[0]+i*m[1],A=w*m[0],D(qr,h=_+A),U=X(qr[0]),N=X(qr[1]),U>=Wr){if(0!=(U-Wr|N))return s*kr*kr;if(_+8008566259537294e-32>h-A)return s*kr*kr}else if((U&Vr)>=1083231232){if(0!=(U-3230714880|N))return s*Yr*Yr;if(_<=h-A)return s*Yr*Yr}return s*(h=Mr(U,A,_))}var Br=1048575,Dr=.4342944818781689;function Jr(n){var e,o,u,i,f,a,c;return r(n)||n<0?NaN:0===n?t:(f=0,(o=er(n))<1048576&&(f-=54,o=er(n*=0x40000000000000)),o>=2146435072?n+n:(f+=(o>>20)-wr|0,a=f+=(i=614244+(o&=1048575)&1048576|0)>>20|0,u=function(r){var n,t,e,o,u,i,f,a,c,l,y;return o=er(r),u=r-1,(Br&2+o)<3?0===u?0:u*u*(.3333333333333333*u-.5):(l=(o&=Br)-398458|0,y=440401-o|0,t=(c=(f=(i=u/(2+u))*i)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+t,(l|=y)>0?i*((n=.5*u*u)+a)-n:i*(a-u))}(n=sr(n,o|1072693248^i)),c=3694239077158931e-28*a+25082946711645275e-27*((n-=1)+u),(c+=(n-(e=R(n,0))+u)*Dr+e*Dr)+.30102999566361177*a))}var Kr=.6931471803691238,Qr=1.9082149292705877e-10,Rr=1048575;function Xr(n){var e,o,u,i,f,a,c,l,y,p,v,b;return 0===n?t:r(n)||n<0?NaN:(f=0,(o=er(n))<1048576&&(f-=54,o=er(n*=0x40000000000000)),o>=2146435072?n+n:(f+=(o>>20)-wr|0,f+=(l=614244+(o&=Rr)&1048576|0)>>20|0,c=(n=sr(n,o|1072693248^l))-1,(Rr&2+o)<3?0===c?0===f?0:f*Kr+f*Qr:(a=c*c*(.5-.3333333333333333*c),0===f?c-a:f*Kr-(a-f*Qr-c)):(l=o-398458|0,y=440401-o|0,i=(v=(b=(p=c/(2+c))*p)*b)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),u=b*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),a=u+i,(l|=y)>0?(e=.5*c*c,0===f?c-(e-p*(e+a)):f*Kr-(e-(p*(e+a)+f*Qr)-c)):0===f?c-p*(c-a):f*Kr-(p*(c-a)-f*Qr-c))))}var Zr=Math.ceil;return function(n,t,u){var i,f,a,l;if(r(n)||r(t)||t<1||e(t))return NaN;if(arguments.length>2){if(r(u)||u<=0||e(u))return NaN;i=u}else i=10;return e(n)||0===n?n:(f=10===i?Jr(c(n)):2===i?Tr(c(n)):Xr(c(n))/Xr(i),e(a=zr(i,c(f=o(f-t+1))))||e(l=f<0?Zr(n*a)/a:Zr(n/a)*a)?n:l)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).ceilsd=n();
//# sourceMappingURL=browser.js.map
