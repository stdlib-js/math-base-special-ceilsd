"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=c(function(I,l){
var n=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-assert-is-infinite/dist'),p=require('@stdlib/math-base-special-pow/dist'),N=require('@stdlib/math-base-special-log10/dist'),f=require('@stdlib/math-base-special-ln/dist'),v=require('@stdlib/math-base-special-abs/dist'),d=require('@stdlib/math-base-special-floor/dist'),g=require('@stdlib/number-float64-base-exponent/dist'),q=require('@stdlib/math-base-special-ceil/dist');function m(r,e,i){var u,a,t;return n(r)||n(e)||e<1||s(e)||n(i)||i<=0||s(i)?NaN:s(r)||r===0||(i===10?u=N(v(r)):i===2?u=g(v(r)):u=f(v(r))/f(i),u=d(u-e+1),a=p(i,v(u)),s(a))||(u<0?t=q(r*a)/a:t=q(r/a)*a,s(t))?r:t}l.exports=m
});var w=o();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
