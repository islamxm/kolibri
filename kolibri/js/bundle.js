!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./#src/js/script.js")}({"./#src/js/script.js":
/*!***************************!*\
  !*** ./#src/js/script.js ***!
  \***************************/
/*! no static exports found */function(e,t){document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".asideBtn");const e=document.querySelector(".aside");function t(t,r,o,n){const c=document.querySelectorAll(t);c.forEach(t=>{t.addEventListener("click",i=>{let a=i.currentTarget,s=a.querySelector(o);a.querySelector("."+n)&&t.classList.toggle(r),t.classList.contains(r)&&(s.style.height=s.scrollHeight+"px",c[0].classList.contains("asideNavItem")&&e.classList.remove("asideActive")),t.classList.contains(r)||(s.style.height="0px")})})}var r;r=".asideBtn",document.querySelector(r).addEventListener("click",()=>{e.classList.toggle("asideActive")}),t(".asideNavItem","asideNavItemDropped",".asideNavItemList","asideNavItemHead"),t(".popupBlockDateDrop","popupBlockDateDropActive",".popupBlockDateList","popupBlockDateHead"),t(".dropdownDefault","dropdownDefaultActive",".dropdownDefaultList","dropdownDefaultHead")})}});
//# sourceMappingURL=bundle.js.map