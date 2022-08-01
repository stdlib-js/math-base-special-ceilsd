// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";function n(n){return n!=n}var r=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(n){return n===r||n===t}var u=Math.floor;function i(n){return u(n)===n}function f(n){return i(n/2)}function o(n){return f(n>0?n-1:n+1)}var a=Math.sqrt;function c(n){return Math.abs(n)}var y,l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,p=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"",b=l&&"symbol"==typeof Symbol.toStringTag?function(n){var r,t,e,u,i;if(null==n)return v.call(n);t=n[A],i=A,r=null!=(u=n)&&p.call(u,i);try{n[A]=void 0}catch(r){return v.call(n)}return e=v.call(n),r?n[A]=t:delete n[A],e}:function(n){return v.call(n)},w="function"==typeof Uint32Array,d="function"==typeof Uint32Array?Uint32Array:null,s="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var n,r,t;if("function"!=typeof d)return!1;try{r=new d(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(w&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?s:function(){throw new Error("not implemented")};var U,h=y,m="function"==typeof Float64Array,N="function"==typeof Float64Array?Float64Array:null,I="function"==typeof Float64Array?Float64Array:void 0;U=function(){var n,r,t;if("function"!=typeof N)return!1;try{r=new N([1,3.14,-3.14,NaN]),t=r,n=(m&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?I:function(){throw new Error("not implemented")};var g,F=U,S="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,O="function"==typeof Uint8Array?Uint8Array:void 0;g=function(){var n,r,t;if("function"!=typeof H)return!1;try{r=new H(r=[1,3.14,-3.14,256,257]),t=r,n=(S&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?O:function(){throw new Error("not implemented")};var T,j=g,E="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,x="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var n,r,t;if("function"!=typeof G)return!1;try{r=new G(r=[1,3.14,-3.14,65536,65537]),t=r,n=(E&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?x:function(){throw new Error("not implemented")};var L,M={uint16:T,uint8:j};(L=new M.uint16(1))[0]=4660;var W,P,V=52===new M.uint8(L.buffer)[0];!0===V?(W=1,P=0):(W=0,P=1);var Y={HIGH:W,LOW:P},_=new F(1),q=new h(_.buffer),k=Y.HIGH,z=Y.LOW;function B(n,r){return _[0]=r,n[0]=q[k],n[1]=q[z],n}function C(n,r){return 1===arguments.length?B([0,0],n):B(n,r)}var D=!0===V?0:1,J=new F(1),K=new h(J.buffer);function Q(n,r){return J[0]=n,K[D]=r>>>0,J[0]}function R(n){return 0|n}var X,Z,$=!0===V?1:0,nn=new F(1),rn=new h(nn.buffer);function tn(n){return nn[0]=n,rn[$]}!0===V?(X=1,Z=0):(X=0,Z=1);var en={HIGH:X,LOW:Z},un=new F(1),fn=new h(un.buffer),on=en.HIGH,an=en.LOW;function cn(n,r){return fn[on]=n,fn[an]=r,un[0]}var yn=[0,0];function ln(n,r){var t,e;return C(yn,n),t=yn[0],t&=2147483647,e=tn(r),cn(t|=e&=2147483648,yn[1])}var vn=!0===V?1:0,pn=new F(1),An=new h(pn.buffer);function bn(n,r){return pn[0]=n,An[vn]=r>>>0,pn[0]}var wn=1023,dn=1048576,sn=[1,1.5],Un=[0,.5849624872207642],hn=[0,1.350039202129749e-8];function mn(r,t){return n(t)||e(t)?(r[0]=t,r[1]=0,r):0!==t&&c(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}function Nn(n){var r=tn(n);return(r=(2146435072&r)>>>20)-wn|0}var In=[0,0],gn=[0,0];function Fn(u,i){var f,o;return 0===i||0===u||n(u)||e(u)?u:(function(n,r){1===arguments.length?mn([0,0],n):mn(n,r)}(In,u),i+=In[1],(i+=Nn(u=In[0]))<-1074?ln(0,u):i>1023?u<0?t:r:(i<=-1023?(i+=52,o=2220446049250313e-31):o=1,C(gn,u),f=gn[0],f&=2148532223,o*cn(f|=i+wn<<20,gn[1])))}var Sn=2147483647,Hn=1048575,On=1048576,Tn=2147483647,jn=1083179008,En=1e300,Gn=1e-300,xn=[0,0],Ln=[0,0];function Mn(u,f){var y,l,v,p,A,b,w,d,s,U,h,m,N,I;if(n(u)||n(f))return NaN;if(C(xn,f),A=xn[0],0===xn[1]){if(0===f)return 1;if(1===f)return u;if(-1===f)return 1/u;if(.5===f)return a(u);if(-.5===f)return 1/a(u);if(2===f)return u*u;if(3===f)return u*u*u;if(4===f)return(u*=u)*u;if(e(f))return function(n,t){return-1===n?(n-n)/(n-n):1===n?1:c(n)<1==(t===r)?0:r}(u,f)}if(C(xn,u),p=xn[0],0===xn[1]){if(0===p)return function(n,e){return e===t?r:e===r?0:e>0?o(e)?n:0:o(e)?ln(r,n):r}(u,f);if(1===u)return 1;if(-1===u&&o(f))return-1;if(e(u))return u===t?Mn(-0,-f):f<0?0:r}if(u<0&&!1===i(f))return(u-u)/(u-u);if(v=c(u),y=p&Tn|0,l=A&Tn|0,w=A>>>31|0,b=(b=p>>>31|0)&&o(f)?-1:1,l>1105199104){if(l>1139802112)return function(n,r){return(2147483647&tn(n))<=1072693247?r<0?1/0:0:r>0?1/0:0}(u,f);if(y<1072693247)return 1===w?b*En*En:b*Gn*Gn;if(y>1072693248)return 0===w?b*En*En:b*Gn*Gn;h=function(n,r){var t,e,u,i,f,o;return t=(f=1.9259629911266175e-8*(u=r-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=Q(e=(i=1.4426950216293335*u)+f,0))-i),n[0]=e,n[1]=t,n}(Ln,v)}else h=function(n,r,t){var e,u,i,f,o,a,c,y,l,v,p,A,b,w,d,s,U,h,m,N,I;return h=0,t<dn&&(h-=53,t=tn(r*=9007199254740992)),h+=(t>>20)-wn|0,t=1072693248|(m=1048575&t|0),m<=235662?N=0:m<767610?N=1:(N=0,h+=1,t-=dn),f=Q(u=(s=(r=bn(r,t))-(c=sn[N]))*(U=1/(r+c)),0),e=524288+(t>>1|536870912),a=bn(0,e+=N<<18),d=(i=u*u)*i*(0===(I=i)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),a=Q(a=3+(i=f*f)+(d+=(o=U*(s-f*a-f*(r-(a-c))))*(f+u)),0),b=(p=-7.028461650952758e-9*(l=Q(l=(s=f*a)+(U=o*a+(d-(a-3-i))*u),0))+.9617966939259756*(U-(l-s))+hn[N])-((A=Q(A=(v=.9617967009544373*l)+p+(y=Un[N])+(w=h),0))-w-y-v),n[0]=A,n[1]=b,n}(Ln,v,y);if(U=(f-(d=Q(f,0)))*h[0]+f*h[1],s=d*h[0],C(xn,m=U+s),N=R(xn[0]),I=R(xn[1]),N>=jn){if(0!=(N-jn|I))return b*En*En;if(U+8008566259537294e-32>m-s)return b*En*En}else if((N&Tn)>=1083231232){if(0!=(N-3230714880|I))return b*Gn*Gn;if(U<=m-s)return b*Gn*Gn}return m=function(n,r,t){var e,u,i,f,o,a,c,y,l,v;return l=((y=n&Sn|0)>>20)-wn|0,c=0,y>1071644672&&(u=bn(0,((c=n+(On>>l+1)>>>0)&~(Hn>>(l=((c&Sn)>>20)-wn|0)))>>>0),c=(c&Hn|On)>>20-l>>>0,n<0&&(c=-c),r-=u),n=R(n=tn(a=1-((a=(i=.6931471824645996*(u=Q(u=t+r,0)))+(f=.6931471805599453*(t-(u-r))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=f-(a-i))+a*o)-a))),(n+=c<<20>>>0)>>20<=0?Fn(a,c):bn(a,n)}(N,s,U),b*m}var Wn=1048575,Pn=.4342944818781689;function Vn(r){var e,u,i,f,o,a,c;return n(r)||r<0?NaN:0===r?t:(o=0,(u=tn(r))<1048576&&(o-=54,u=tn(r*=0x40000000000000)),u>=2146435072?r+r:(o+=(u>>20)-wn|0,a=o+=(f=614244+(u&=1048575)&1048576|0)>>20|0,i=function(n){var r,t,e,u,i,f,o,a,c,y,l;return u=tn(n),i=n-1,(Wn&2+u)<3?0===i?0:i*i*(.3333333333333333*i-.5):(y=(u&=Wn)-398458|0,l=440401-u|0,t=(c=(o=(f=i/(2+i))*f)*o)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(c),e=o*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(c),a=e+t,(y|=l)>0?f*((r=.5*i*i)+a)-r:f*(a-i))}(r=bn(r,u|1072693248^f)),c=3694239077158931e-28*a+25082946711645275e-27*((r-=1)+i),(c+=(r-(e=Q(r,0))+i)*Pn+e*Pn)+.30102999566361177*a))}var Yn=.6931471803691238,_n=1.9082149292705877e-10,qn=1048575;function kn(r){var e,u,i,f,o,a,c,y,l,v,p,A;return 0===r?t:n(r)||r<0?NaN:(o=0,(u=tn(r))<1048576&&(o-=54,u=tn(r*=0x40000000000000)),u>=2146435072?r+r:(o+=(u>>20)-wn|0,o+=(y=614244+(u&=qn)&1048576|0)>>20|0,c=(r=bn(r,u|1072693248^y))-1,(qn&2+u)<3?0===c?0===o?0:o*Yn+o*_n:(a=c*c*(.5-.3333333333333333*c),0===o?c-a:o*Yn-(a-o*_n-c)):(y=u-398458|0,l=440401-u|0,f=(p=(A=(v=c/(2+c))*v)*A)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),i=A*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),a=i+f,(y|=l)>0?(e=.5*c*c,0===o?c-(e-v*(e+a)):o*Yn-(e-(v*(e+a)+o*_n)-c)):0===o?c-v*(c-a):o*Yn-(v*(c-a)-o*_n-c))))}var zn=Math.ceil;return function(r,t,i){var f,o,a,y;if(n(r)||n(t)||t<1||e(t))return NaN;if(arguments.length>2){if(n(i)||i<=0||e(i))return NaN;f=i}else f=10;return e(r)||0===r?r:(o=10===f?Vn(c(r)):2===f?Nn(c(r)):kn(c(r))/kn(f),e(a=Mn(f,c(o=u(o-t+1))))||e(y=o<0?zn(r*a)/a:zn(r/a)*a)?r:y)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).ceilsd=r();
//# sourceMappingURL=browser.js.map
