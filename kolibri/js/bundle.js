!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="./#src/js/script.js")}({"./#src/js/script.js":
/*!***************************!*\
  !*** ./#src/js/script.js ***!
  \***************************/
/*! no static exports found */function(e,t){document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".asideBtn"),t=document.querySelector(".aside");document.querySelectorAll(".asideNavItemList");function o(e,o,r,n){const c=document.querySelectorAll(e);c.forEach(e=>{e.addEventListener("click",i=>{let s=i.currentTarget,a=s.querySelector(r);s.querySelector("."+n)&&e.classList.toggle(o),e.classList.contains(o)&&(a.style.height=a.scrollHeight+"px",c[0].classList.contains("asideNavItem")&&t.classList.remove("asideActive")),e.classList.contains(o)||(a.style.height="0px")})})}e.addEventListener("click",()=>{t.classList.toggle("asideActive")}),o(".asideNavItem","asideNavItemDropped",".asideNavItemList","asideNavItemHead"),o(".popupBlockDateDrop","popupBlockDateDropActive",".popupBlockDateList","popupBlockDateHead"),o(".dropdownDefault","dropdownDefaultActive",".dropdownDefaultList","dropdownDefaultHead")})}});
//# sourceMappingURL=bundle.js.map