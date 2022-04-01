// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log10@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-exponent@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs";var l=s,h=e,j=t,p=i,o=m,b=n,c=r,f=d,v=a;var g=function(s,e,t){var i,m,n,r;if(l(s)||l(e)||e<1||h(e))return NaN;if(arguments.length>2){if(l(t)||t<=0||h(t))return NaN;i=t}else i=10;return h(s)||0===s?s:(m=10===i?p(b(s)):2===i?f(b(s)):o(b(s))/o(i),m=c(m-e+1),n=j(i,b(m)),h(n)?s:(r=m<0?v(s*n)/n:v(s/n)*n,h(r)?s:r))};export{g as default};
//# sourceMappingURL=index.mjs.map
