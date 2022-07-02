// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log10@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-exponent@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs";function l(l,h,j){var p,o,b,c;if(s(l)||s(h)||h<1||e(h))return NaN;if(arguments.length>2){if(s(j)||j<=0||e(j))return NaN;p=j}else p=10;return e(l)||0===l?l:(o=10===p?i(n(l)):2===p?d(n(l)):m(n(l))/m(p),o=r(o-h+1),b=t(p,n(o)),e(b)?l:(c=o<0?a(l*b)/b:a(l/b)*b,e(c)?l:c))}export{l as default};
//# sourceMappingURL=index.mjs.map
