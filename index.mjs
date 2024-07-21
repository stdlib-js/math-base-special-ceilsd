// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log10@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.3-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-exponent@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs";function l(l,j,p){var h,o,b;return s(l)||s(j)||j<1||t(j)||s(p)||p<=0||t(p)?NaN:t(l)||0===l?l:(h=10===p?i(n(l)):2===p?r(n(l)):m(n(l))/m(p),h=d(h-j+1),o=e(p,n(h)),t(o)?l:(b=h<0?a(l*o)/o:a(l/o)*o,t(b)?l:b))}export{l as default};
//# sourceMappingURL=index.mjs.map
