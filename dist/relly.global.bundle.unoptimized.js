(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var relly=require("./relly");window.relly=relly;

},{"./relly":2}],2:[function(require,module,exports){
"use strict";function applyRelativeFontSize(e,t){var r=e.clientHeight;e.style.fontSize=r*t+"px"}function reltext(e){var t=void 0===e?{}:e,r=t.elements,n=void 0===r?document.querySelectorAll(".relly-reltext"):r,i=t.fraction,o=void 0===i?.05:i;n=Array.from(n);for(var l=[],a=function(e){var t=function(t){return applyRelativeFontSize(e,o)};l.push(t),window.addEventListener("resize",t),applyRelativeFontSize(e,o)},v=0,u=n;v<u.length;v++){a(u[v])}return function(){for(var e=0,t=l;e<t.length;e++){var r=t[e];window.removeEventListener("resize",r)}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.reltext=reltext;

},{}]},{},[1]);
