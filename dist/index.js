"use strict";var p=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=p(function(I,o){
var f=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-assert-is-infinite/dist'),N=require('@stdlib/math-base-special-pow/dist'),g=require('@stdlib/math-base-special-log10/dist'),l=require('@stdlib/math-base-special-ln/dist'),v=require('@stdlib/math-base-special-abs/dist'),m=require('@stdlib/math-base-special-floor/dist'),d=require('@stdlib/number-float64-base-exponent/dist'),q=require('@stdlib/math-base-special-ceil/dist');function h(r,e,t){var a,i,u,n;if(f(r)||f(e)||e<1||s(e))return NaN;if(arguments.length>2){if(f(t)||t<=0||s(t))return NaN;a=t}else a=10;return s(r)||r===0||(a===10?i=g(v(r)):a===2?i=d(v(r)):i=l(v(r))/l(a),i=m(i-e+1),u=N(a,v(i)),s(u))||(i<0?n=q(r*u)/u:n=q(r/u)*u,s(n))?r:n}o.exports=h
});var w=c();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
