module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1545581963565, function(require, module, exports) {
module.exports = require('./dist/wefetch.min.js')
}, function(modId) {var map = {"./dist/wefetch.min.js":1545581963566}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1545581963566, function(require, module, exports) {
"use strict";var _extends2=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){if("function"==typeof define&&define.amd)define(e);else{if("undefined"==typeof module||!module.exports)throw new Error("only supported in MiniProgramcan usage");module.exports=e()}}(0,function(){function t(t,e){return function(){for(var t=new Array(arguments.length),e=0,n=t.length;e<n;e++)t[e]=arguments[e]}}function e(){this.handles=[]}function n(t){this.defaults=t}function o(t){this.msg=t}function r(t){"post"===t.method&&(t.header["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8"),"postJson"===t.method&&(t.method="post",t.header["Content-Type"]="application/json;charset=utf-8");var e=t.createRequest;return t.abort,t.baseUrl&&(t.url=t.baseUrl+t.url),e(t).then(function(t){return t},function(t){if(t)return t})}var i=Object.prototype.toString,f=["options","get","head","post","put","delete","trace","connect","postJson"],u={type:function(){for(var t={},e=["String","Object","Number","Array","Undefined","Function","Null","Date"],n=0,o=e.length;n<o;n++)!function(e){t["is"+e]=function(t){return i.call(t)==="[object"+e+"]"}}(e[n]);return t}(),forEach:function(t,e){if(null!==t||void 0!==t)if("object"!==(void 0===t?"undefined":_typeof(t))&&(t=[t]),Array.isArray(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.call(null,t[r],r,t)},merge:function(){function t(t,n){"object"===_typeof(e[n])&&"object"===(void 0===t?"undefined":_typeof(t))?e[n]=u.merge(e[n],t):e[n]=t}for(var e={},n=0,o=arguments.length;n<o;n++)this.forEach(arguments[n],t);return e},extends:function(e,n,o){return this.forEach(n,function(n,r){e[r]=o&&"function"===n?t(n,o):n}),e}},c={createRequest:function(t){return function(e){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return new Promise(function(n,r){t.apply(void 0,[_extends2({},e,{success:n,fail:r})].concat(o))})}}(wx.request),baseUrl:"",header:{}};Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){e.resolve(t()).then(function(){return n})},function(n){e.resolve(t()).then(function(){throw n})})},e.prototype.use=function(t,e){this.handles.push({fulfilled:t,rejectd:e})},e.prototype.eject=function(t){this.handles[t]&&(this.handles[t]=null)},e.prototype.forEach=function(t){u.forEach(this.handles,function(e){e&&t(e)})},n.prototype.before=new e,n.prototype.after=new e,n.prototype.request=function(t){t=u.merge(c,t);var e=[r,void 0],n=Promise.resolve(t);for(this.before.forEach(function(t){e.unshift(t.fulfilled,t.rejectd)}),this.after.forEach(function(t){e.push(t.fulfilled,t.rejectd)});e.length;)n=n.then(e.shift(),e.shift());return n},u.forEach(f,function(t){n.prototype[t]=function(e,n,o){return this.request(u.merge(o||{},{url:e,data:n,config:o,method:t}))}}),o.prototype._CANCEL=!0;return function(e){var o=new n(e),r=t(n.prototype.request,o);return u.extends(r,n.prototype,o),u.extends(r,o),r}(c)});
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1545581963565);
})()
//# sourceMappingURL=index.js.map