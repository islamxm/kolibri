!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s="./#src/js/script.js")}({"./#src/js/script.js":
/*!***************************!*\
  !*** ./#src/js/script.js ***!
  \***************************/
/*! no exports provided */function(t,e,r){"use strict";r.r(e);var n=r(/*! nouislider */"./node_modules/nouislider/dist/nouislider.js"),o=r.n(n),i=r(/*! micromodal */"./node_modules/micromodal/dist/micromodal.es.js");document.addEventListener("DOMContentLoaded",()=>{i.default.init();const t=document.querySelector(".aside"),e=document.querySelector("#tourRange");function r(e,r,n,o){const i=document.querySelectorAll(e);i.forEach(e=>{e.addEventListener("click",s=>{let a=s.currentTarget,l=a.querySelector(n);a.querySelector("."+o)&&e.classList.toggle(r),e.classList.contains(r)&&l&&(l.style.height=l.scrollHeight+"px",i[0].classList.contains("asideNavItem")&&t.classList.remove("asideActive")),!e.classList.contains(r)&&l&&(l.style.height="0px")})})}e&&o.a.create(e,{start:[4500,5e4],connect:!0,range:{min:0,max:5e4},step:100,tooltips:!0,format:{from:function(t){return parseInt(t)},to:function(t){return parseInt(t)}}});const n=document.querySelector(".editPasswordForm");if(n){const t=document.querySelectorAll(".password");n.querySelectorAll(".input");t.forEach(t=>{t.addEventListener("click",e=>{let r=e.currentTarget.querySelector(".input"),n=e.currentTarget.querySelector(".pass").querySelector(".passImg");(e.target.classList.contains("pass")||e.target.classList.contains("passImg"))&&(t.classList.toggle("showPass"),t.classList.contains("showPass")&&(n.setAttribute("src","./img/show.svg"),r.setAttribute("type","password")),t.classList.contains("showPass")||(n.setAttribute("src","./img/hide.svg"),r.setAttribute("type","text")))})})}document.querySelector("#tagsList");const s=document.querySelector("#addTag"),a=s.parentElement;var l;s.addEventListener("keypress",t=>{"Enter"==t.key&&t.preventDefault();if("Enter"==t.key){!function(){const t=document.createElement("div");t.classList.add("tag");const e=s.value;t.innerHTML=e+'\n        <button type="button" class="tag_close">\n            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41425 6.00001L11.7072 1.70701C12.0982 1.31601 12.0982 0.684006 11.7072 0.293006C11.3162 -0.0979941 10.6843 -0.0979941 10.2933 0.293006L6.00025 4.58601L1.70725 0.293006C1.31625 -0.0979941 0.68425 -0.0979941 0.29325 0.293006C-0.09775 0.684006 -0.09775 1.31601 0.29325 1.70701L4.58625 6.00001L0.29325 10.293C-0.09775 10.684 -0.09775 11.316 0.29325 11.707C0.48825 11.902 0.74425 12 1.00025 12C1.25625 12 1.51225 11.902 1.70725 11.707L6.00025 7.41401L10.2933 11.707C10.4883 11.902 10.7442 12 11.0002 12C11.2562 12 11.5122 11.902 11.7072 11.707C12.0982 11.316 12.0982 10.684 11.7072 10.293L7.41425 6.00001Z" fill="#627698"/>\n                </svg>                                                \n        </button>\n    ',""==!s.value&&a.before(t)}();let e=document.querySelectorAll(".tag");e.forEach(t=>{t.addEventListener("click",r=>{console.log(e.length);r.currentTarget.querySelector("tag_close");(r.target&&r.target.classList.contains("tag_close")||"svg"==r.target.tagName||"path"==r.target.tagName)&&t.remove()})}),t.currentTarget.value=""}}),l=".asideBtn",document.querySelector(l).addEventListener("click",()=>{t.classList.toggle("asideActive")}),r(".asideNavItem","asideNavItemDropped",".asideNavItemList","asideNavItemHead"),r(".popupBlockDateDrop","popupBlockDateDropActive",".popupBlockDateList","popupBlockDateHead"),r(".dropdownDefault","dropdownDefaultActive",".dropdownDefaultList","dropdownDefaultHead"),r(".questionsSearchBodyItem","questionsSearchBodyItemActive",".questionsSearchBodyItemList","questionsSearchBodyItemHead"),r(".tourAddItem","tourAddItemActive",".tourItemList","tourItemHead"),r(".setAuditListItem","setAuditListItemActive",".setAuditListItemUl","setAuditListItemHead")})},"./node_modules/micromodal/dist/micromodal.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromodal/dist/micromodal.es.js ***!
  \*******************************************************/
/*! exports provided: default */function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.r(e);var s,a,l,c,u,d=(s=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],a=function(){function t(e){var r=e.targetModal,n=e.triggers,i=void 0===n?[]:n,s=e.onShow,a=void 0===s?function(){}:s,l=e.onClose,c=void 0===l?function(){}:l,u=e.openTrigger,d=void 0===u?"data-micromodal-trigger":u,f=e.closeTrigger,p=void 0===f?"data-micromodal-close":f,h=e.openClass,m=void 0===h?"is-open":h,g=e.disableScroll,v=void 0!==g&&g,b=e.disableFocus,y=void 0!==b&&b,S=e.awaitCloseAnimation,w=void 0!==S&&S,x=e.awaitOpenAnimation,E=void 0!==x&&x,C=e.debugMode,P=void 0!==C&&C;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.modal=document.getElementById(r),this.config={debugMode:P,disableScroll:v,openTrigger:d,closeTrigger:p,openClass:m,onShow:a,onClose:c,awaitCloseAnimation:w,awaitOpenAnimation:E,disableFocus:y},i.length>0&&this.registerTriggers.apply(this,o(i)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var e,r;return e=t,(r=[{key:"registerTriggers",value:function(){for(var t=this,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.filter(Boolean).forEach((function(e){e.addEventListener("click",(function(e){return t.showModal(e)}))}))}},{key:"showModal",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var r=function e(){t.modal.removeEventListener("animationend",e,!1),t.setFocusToFirstNode()};this.modal.addEventListener("animationend",r,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,e)}},{key:"closeModal",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,t),this.config.awaitCloseAnimation){var r=this.config.openClass;this.modal.addEventListener("animationend",(function t(){e.classList.remove(r),e.removeEventListener("animationend",t,!1)}),!1)}else e.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(t){this.modal=document.getElementById(t),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(t){if(this.config.disableScroll){var e=document.querySelector("body");switch(t){case"enable":Object.assign(e.style,{overflow:""});break;case"disable":Object.assign(e.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(t){(t.target.hasAttribute(this.config.closeTrigger)||t.target.parentNode.hasAttribute(this.config.closeTrigger))&&(t.preventDefault(),t.stopPropagation(),this.closeModal(t))}},{key:"onKeydown",value:function(t){27===t.keyCode&&this.closeModal(t),9===t.keyCode&&this.retainFocus(t)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(s);return Array.apply(void 0,o(t))}},{key:"setFocusToFirstNode",value:function(){var t=this;if(!this.config.disableFocus){var e=this.getFocusableNodes();if(0!==e.length){var r=e.filter((function(e){return!e.hasAttribute(t.config.closeTrigger)}));r.length>0&&r[0].focus(),0===r.length&&e[0].focus()}}}},{key:"retainFocus",value:function(t){var e=this.getFocusableNodes();if(0!==e.length)if(e=e.filter((function(t){return null!==t.offsetParent})),this.modal.contains(document.activeElement)){var r=e.indexOf(document.activeElement);t.shiftKey&&0===r&&(e[e.length-1].focus(),t.preventDefault()),!t.shiftKey&&e.length>0&&r===e.length-1&&(e[0].focus(),t.preventDefault())}else e[0].focus()}}])&&n(e.prototype,r),t}(),l=null,c=function(t){if(!document.getElementById(t))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(t,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(t,'"></div>')),!1},u=function(t,e){if(function(t){t.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(t),!e)return!0;for(var r in e)c(r);return!0},{init:function(t){var e=Object.assign({},{openTrigger:"data-micromodal-trigger"},t),r=o(document.querySelectorAll("[".concat(e.openTrigger,"]"))),n=function(t,e){var r=[];return t.forEach((function(t){var n=t.attributes[e].value;void 0===r[n]&&(r[n]=[]),r[n].push(t)})),r}(r,e.openTrigger);if(!0!==e.debugMode||!1!==u(r,n))for(var i in n){var s=n[i];e.targetModal=i,e.triggers=o(s),l=new a(e)}},show:function(t,e){var r=e||{};r.targetModal=t,!0===r.debugMode&&!1===c(t)||(l&&l.removeEventListeners(),(l=new a(r)).showModal())},close:function(t){t?l.closeModalById(t):l.closeModal()}});"undefined"!=typeof window&&(window.MicroModal=d),e.default=d},"./node_modules/nouislider/dist/nouislider.js":
/*!****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.js ***!
  \****************************************************/
/*! no static exports found */function(t,e,r){!function(t){"use strict";function e(t){return"object"==typeof t&&"function"==typeof t.to}function r(t){t.parentElement.removeChild(t)}function n(t){return null!=t}function o(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function s(t,e,r){r>0&&(u(t,e),setTimeout((function(){d(t,e)}),r))}function a(t){return Math.max(Math.min(t,100),0)}function l(t){return Array.isArray(t)?t:[t]}function c(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function u(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function d(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function f(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function p(t,e){return 100/(e-t)}function h(t,e,r){return 100*e/(t[r+1]-t[r])}function m(t,e){for(var r=1;t>=e[r];)r+=1;return r}function g(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=m(r,t),o=t[n-1],i=t[n],s=e[n-1],a=e[n];return s+function(t,e){return h(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}([o,i],r)/p(s,a)}function v(t,e,r,n){if(100===n)return n;var o=m(n,t),i=t[o-1],s=t[o];return r?n-i>(s-i)/2?s:i:e[o-1]?t[o-1]+function(t,e){return Math.round(t/e)*e}(n-t[o-1],e[o-1]):n}var b,y;t.PipsMode=void 0,(y=t.PipsMode||(t.PipsMode={})).Range="range",y.Steps="steps",y.Positions="positions",y.Count="count",y.Values="values",t.PipsType=void 0,(b=t.PipsType||(t.PipsType={}))[b.None=-1]="None",b[b.NoValue=0]="NoValue",b[b.LargeValue=1]="LargeValue",b[b.SmallValue=2]="SmallValue";var S=function(){function t(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=e;var o=[];for(Object.keys(t).forEach((function(e){o.push([l(t[e]),e])})),o.sort((function(t,e){return t[0][0]-e[0][0]})),n=0;n<o.length;n++)this.handleEntryPoint(o[n][1],o[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}return t.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=h(this.xVal,t,r);return e},t.prototype.getAbsoluteDistance=function(t,e,r){var n,o=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[o+1];)o++;else t===this.xPct[this.xPct.length-1]&&(o=this.xPct.length-2);r||t!==this.xPct[o+1]||o++,null===e&&(e=[]);var i=1,s=e[o],a=0,l=0,c=0,u=0;for(n=r?(t-this.xPct[o])/(this.xPct[o+1]-this.xPct[o]):(this.xPct[o+1]-t)/(this.xPct[o+1]-this.xPct[o]);s>0;)a=this.xPct[o+1+u]-this.xPct[o+u],e[o+u]*i+100-100*n>100?(l=a*n,i=(s-100*n)/e[o+u],n=1):(l=e[o+u]*a/100*i,i=0),r?(c-=l,this.xPct.length+u>=1&&u--):(c+=l,this.xPct.length-u>=1&&u++),s=e[o+u]*i;return t+c},t.prototype.toStepping=function(t){return t=g(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return function(t,e,r){if(r>=100)return t.slice(-1)[0];var n=m(r,e),o=t[n-1],i=t[n],s=e[n-1];return function(t,e){return e*(t[1]-t[0])/100+t[0]}([o,i],(r-s)*p(s,e[n]))}(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=v(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,r){var n=m(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},t.prototype.getNearbySteps=function(t){var e=m(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(c);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){var r;if(!i(r="min"===t?0:"max"===t?100:parseFloat(t))||!i(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(r),this.xVal.push(e[0]);var n=Number(e[1]);r?this.xSteps.push(!isNaN(n)&&n):isNaN(n)||(this.xSteps[0]=n),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){if(e)if(this.xVal[t]!==this.xVal[t+1]){this.xSteps[t]=h([this.xVal[t],this.xVal[t+1]],e,0)/p(this.xPct[t],this.xPct[t+1]);var r=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],n=Math.ceil(Number(r.toFixed(3))-1),o=this.xVal[t]+this.xNumSteps[t]*n;this.xHighestCompleteStep[t]=o}else this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]},t}(),w={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},x={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},E=".__tooltips",C=".__aria";function P(t,e){if(!i(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function k(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function A(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function L(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function N(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new S(e,t.snap||!1,t.singleStep)}function M(t,e){if(e=l(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function V(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function D(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function T(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function O(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function U(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function j(t,e){if(!i(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function F(t,e){if(!i(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function I(t,e){var r;if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],o=t.spectrum.xVal[0];if(n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-o)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function q(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function H(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=e.indexOf("tap")>=0,n=e.indexOf("drag")>=0,o=e.indexOf("fixed")>=0,i=e.indexOf("snap")>=0,s=e.indexOf("hover")>=0,a=e.indexOf("unconstrained")>=0,l=e.indexOf("drag-all")>=0;if(o){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");j(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||i,drag:n,dragAll:l,fixed:o,snap:i,hover:s,unconstrained:a}}function B(t,r){if(!1!==r)if(!0===r||e(r)){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(r)}else{if((r=l(r)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");r.forEach((function(t){if("boolean"!=typeof t&&!e(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),t.tooltips=r}}function _(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function z(t,r){if(!e(r))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=r}function R(t,r){if(!function(t){return e(t)&&"function"==typeof t.from}(r))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=r}function K(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function X(t,e){t.documentElement=e}function Y(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function $(t,e){if("object"!=typeof e)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof t.cssPrefix?(t.cssClasses={},Object.keys(e).forEach((function(r){t.cssClasses[r]=t.cssPrefix+e[r]}))):t.cssClasses=e}function W(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:w,format:w},r={step:{r:!1,t:P},keyboardPageMultiplier:{r:!1,t:k},keyboardMultiplier:{r:!1,t:A},keyboardDefaultStep:{r:!1,t:L},start:{r:!0,t:M},connect:{r:!0,t:O},direction:{r:!0,t:q},snap:{r:!1,t:V},animate:{r:!1,t:D},animationDuration:{r:!1,t:T},range:{r:!0,t:N},orientation:{r:!1,t:U},margin:{r:!1,t:j},limit:{r:!1,t:F},padding:{r:!1,t:I},behaviour:{r:!0,t:H},ariaFormat:{r:!1,t:z},format:{r:!1,t:R},tooltips:{r:!1,t:B},keyboardSupport:{r:!0,t:K},documentElement:{r:!1,t:X},cssPrefix:{r:!0,t:Y},cssClasses:{r:!0,t:$},handleAttributes:{r:!1,t:_}},o={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:x,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(r).forEach((function(i){if(n(t[i])||void 0!==o[i])r[i].t(e,n(t[i])?t[i]:o[i]);else if(r[i].r)throw new Error("noUiSlider: '"+i+"' is required.")})),e.pips=t.pips;var i=document.createElement("div"),s=void 0!==i.style.msTransform,a=void 0!==i.style.transform;return e.transformRule=a?"transform":s?"msTransform":"webkitTransform",e.style=[["left","top"],["right","bottom"]][e.dir][e.ort],e}function Z(e,i,c){var p,h,m,g,v,b,y,S=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},w=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),x=e,P=i.spectrum,k=[],A=[],L=[],N=0,M={},V=e.ownerDocument,D=i.documentElement||V.documentElement,T=V.body,O="rtl"===V.dir||1===i.ort?0:100;function U(t,e){var r=V.createElement("div");return e&&u(r,e),t.appendChild(r),r}function j(t,e){var r=U(t,i.cssClasses.origin),n=U(r,i.cssClasses.handle);if(U(n,i.cssClasses.touchArea),n.setAttribute("data-handle",String(e)),i.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",(function(t){return function(t,e){if(q()||H(e))return!1;var r=["Left","Right"],n=["Down","Up"],o=["PageDown","PageUp"],s=["Home","End"];i.dir&&!i.ort?r.reverse():i.ort&&!i.dir&&(n.reverse(),o.reverse());var a,l=t.key.replace("Arrow",""),c=l===o[0],u=l===o[1],d=l===n[0]||l===r[0]||c,f=l===n[1]||l===r[1]||u,p=l===s[0],h=l===s[1];if(!(d||f||p||h))return!0;if(t.preventDefault(),f||d){var m=d?0:1,g=vt(e)[m];if(null===g)return!1;!1===g&&(g=P.getDefaultStep(A[e],d,i.keyboardDefaultStep)),g*=u||c?i.keyboardPageMultiplier:i.keyboardMultiplier,g=Math.max(g,1e-7),g*=d?-1:1,a=k[e]+g}else a=h?i.spectrum.xVal[i.spectrum.xVal.length-1]:i.spectrum.xVal[0];return ft(e,P.toStepping(a),!0,!0),st("slide",e),st("update",e),st("change",e),st("set",e),!1}(t,e)}))),void 0!==i.handleAttributes){var o=i.handleAttributes[e];Object.keys(o).forEach((function(t){n.setAttribute(t,o[t])}))}return n.setAttribute("role","slider"),n.setAttribute("aria-orientation",i.ort?"vertical":"horizontal"),0===e?u(n,i.cssClasses.handleLower):e===i.handles-1&&u(n,i.cssClasses.handleUpper),r}function F(t,e){return!!e&&U(t,i.cssClasses.connect)}function I(t,e){return!(!i.tooltips||!i.tooltips[e])&&U(t.firstChild,i.cssClasses.tooltip)}function q(){return x.hasAttribute("disabled")}function H(t){return h[t].hasAttribute("disabled")}function B(){v&&(it("update"+E),v.forEach((function(t){t&&r(t)})),v=null)}function _(){B(),v=h.map(I),ot("update"+E,(function(t,e,r){if(v&&i.tooltips&&!1!==v[e]){var n=t[e];!0!==i.tooltips[e]&&(n=i.tooltips[e].to(r[e])),v[e].innerHTML=n}}))}function z(t,e){return t.map((function(t){return P.fromStepping(e?P.getStep(t):t)}))}function R(e){var r,n=function(e){if(e.mode===t.PipsMode.Range||e.mode===t.PipsMode.Steps)return P.xVal;if(e.mode===t.PipsMode.Count){if(e.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var r=e.values-1,n=100/r,o=[];r--;)o[r]=r*n;return o.push(100),z(o,e.stepped)}return e.mode===t.PipsMode.Positions?z(e.values,e.stepped):e.mode===t.PipsMode.Values?e.stepped?e.values.map((function(t){return P.fromStepping(P.getStep(P.toStepping(t)))})):e.values:[]}(e),o={},i=P.xVal[0],s=P.xVal[P.xVal.length-1],a=!1,l=!1,c=0;return r=n.slice().sort((function(t,e){return t-e})),(n=r.filter((function(t){return!this[t]&&(this[t]=!0)}),{}))[0]!==i&&(n.unshift(i),a=!0),n[n.length-1]!==s&&(n.push(s),l=!0),n.forEach((function(r,i){var s,u,d,f,p,h,m,g,v,b,y=r,S=n[i+1],w=e.mode===t.PipsMode.Steps;for(w&&(s=P.xNumSteps[i]),s||(s=S-y),void 0===S&&(S=y),s=Math.max(s,1e-7),u=y;u<=S;u=Number((u+s).toFixed(7))){for(g=(p=(f=P.toStepping(u))-c)/(e.density||1),b=p/(v=Math.round(g)),d=1;d<=v;d+=1)o[(h=c+d*b).toFixed(5)]=[P.fromStepping(h),0];m=n.indexOf(u)>-1?t.PipsType.LargeValue:w?t.PipsType.SmallValue:t.PipsType.NoValue,!i&&a&&u!==S&&(m=0),u===S&&l||(o[f.toFixed(5)]=[u,m]),c=f}})),o}function K(e,r,n){var o,s,a=V.createElement("div"),l=((o={})[t.PipsType.None]="",o[t.PipsType.NoValue]=i.cssClasses.valueNormal,o[t.PipsType.LargeValue]=i.cssClasses.valueLarge,o[t.PipsType.SmallValue]=i.cssClasses.valueSub,o),c=((s={})[t.PipsType.None]="",s[t.PipsType.NoValue]=i.cssClasses.markerNormal,s[t.PipsType.LargeValue]=i.cssClasses.markerLarge,s[t.PipsType.SmallValue]=i.cssClasses.markerSub,s),d=[i.cssClasses.valueHorizontal,i.cssClasses.valueVertical],f=[i.cssClasses.markerHorizontal,i.cssClasses.markerVertical];function p(t,e){var r=e===i.cssClasses.value,n=r?l:c;return e+" "+(r?d:f)[i.ort]+" "+n[t]}return u(a,i.cssClasses.pips),u(a,0===i.ort?i.cssClasses.pipsHorizontal:i.cssClasses.pipsVertical),Object.keys(e).forEach((function(o){!function(e,o,s){if((s=r?r(o,s):s)!==t.PipsType.None){var l=U(a,!1);l.className=p(s,i.cssClasses.marker),l.style[i.style]=e+"%",s>t.PipsType.NoValue&&((l=U(a,!1)).className=p(s,i.cssClasses.value),l.setAttribute("data-value",String(o)),l.style[i.style]=e+"%",l.innerHTML=String(n.to(o)))}}(o,e[o][0],e[o][1])})),a}function X(){g&&(r(g),g=null)}function Y(t){X();var e=R(t),r=t.filter,n=t.format||{to:function(t){return String(Math.round(t))}};return g=x.appendChild(K(e,r,n))}function $(){var t=p.getBoundingClientRect(),e="offset"+["Width","Height"][i.ort];return 0===i.ort?t.width||p[e]:t.height||p[e]}function Z(t,e,r,n){var o=function(o){var s,a,l=function(t,e,r){var n=0===t.type.indexOf("touch"),o=0===t.type.indexOf("mouse"),i=0===t.type.indexOf("pointer"),s=0,a=0;if(0===t.type.indexOf("MSPointer")&&(i=!0),"mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(n){var l=function(e){var n=e.target;return n===r||r.contains(n)||t.composed&&t.composedPath().shift()===r};if("touchstart"===t.type){var c=Array.prototype.filter.call(t.touches,l);if(c.length>1)return!1;s=c[0].pageX,a=c[0].pageY}else{var u=Array.prototype.find.call(t.changedTouches,l);if(!u)return!1;s=u.pageX,a=u.pageY}}return e=e||f(V),(o||i)&&(s=t.clientX+e.x,a=t.clientY+e.y),t.pageOffset=e,t.points=[s,a],t.cursor=o||i,t}(o,n.pageOffset,n.target||e);return!!l&&!(q()&&!n.doNotReject)&&(s=x,a=i.cssClasses.tap,!((s.classList?s.classList.contains(a):new RegExp("\\b"+a+"\\b").test(s.className))&&!n.doNotReject)&&!(t===S.start&&void 0!==l.buttons&&l.buttons>1)&&(!n.hover||!l.buttons)&&(w||l.preventDefault(),l.calcPoint=l.points[i.ort],void r(l,n)))},s=[];return t.split(" ").forEach((function(t){e.addEventListener(t,o,!!w&&{passive:!0}),s.push([t,o])})),s}function G(t){var e,r,n,o,s,l,c=100*(t-(e=p,r=i.ort,n=e.getBoundingClientRect(),o=e.ownerDocument,s=o.documentElement,l=f(o),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),r?n.top+l.y-s.clientTop:n.left+l.x-s.clientLeft))/$();return c=a(c),i.dir?100-c:c}function J(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&tt(t,e)}function Q(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return tt(t,e);var r=(i.dir?-1:1)*(t.calcPoint-e.startCalcPoint);ct(r>0,100*r/e.baseSize,e.locations,e.handleNumbers,e.connect)}function tt(t,e){e.handle&&(d(e.handle,i.cssClasses.active),N-=1),e.listeners.forEach((function(t){D.removeEventListener(t[0],t[1])})),0===N&&(d(x,i.cssClasses.drag),dt(),t.cursor&&(T.style.cursor="",T.removeEventListener("selectstart",o))),e.handleNumbers.forEach((function(t){st("change",t),st("set",t),st("end",t)}))}function et(t,e){if(!e.handleNumbers.some(H)){var r;1===e.handleNumbers.length&&(r=h[e.handleNumbers[0]].children[0],N+=1,u(r,i.cssClasses.active)),t.stopPropagation();var n=[],s=Z(S.move,D,Q,{target:t.target,handle:r,connect:e.connect,listeners:n,startCalcPoint:t.calcPoint,baseSize:$(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:A.slice()}),a=Z(S.end,D,tt,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers}),l=Z("mouseout",D,J,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers});n.push.apply(n,s.concat(a,l)),t.cursor&&(T.style.cursor=getComputedStyle(t.target).cursor,h.length>1&&u(x,i.cssClasses.drag),T.addEventListener("selectstart",o,!1)),e.handleNumbers.forEach((function(t){st("start",t)}))}}function rt(t){t.stopPropagation();var e=G(t.calcPoint),r=function(t){var e=100,r=!1;return h.forEach((function(n,o){if(!H(o)){var i=A[o],s=Math.abs(i-t);(s<e||s<=e&&t>i||100===s&&100===e)&&(r=o,e=s)}})),r}(e);!1!==r&&(i.events.snap||s(x,i.cssClasses.tap,i.animationDuration),ft(r,e,!0,!0),dt(),st("slide",r,!0),st("update",r,!0),i.events.snap?et(t,{handleNumbers:[r]}):(st("change",r,!0),st("set",r,!0)))}function nt(t){var e=G(t.calcPoint),r=P.getStep(e),n=P.fromStepping(r);Object.keys(M).forEach((function(t){"hover"===t.split(".")[0]&&M[t].forEach((function(t){t.call(bt,n)}))}))}function ot(t,e){M[t]=M[t]||[],M[t].push(e),"update"===t.split(".")[0]&&h.forEach((function(t,e){st("update",e)}))}function it(t){var e=t&&t.split(".")[0],r=e?t.substring(e.length):t;Object.keys(M).forEach((function(t){var n=t.split(".")[0],o=t.substring(n.length);e&&e!==n||r&&r!==o||function(t){return t===C||t===E}(o)&&r!==o||delete M[t]}))}function st(t,e,r){Object.keys(M).forEach((function(n){var o=n.split(".")[0];t===o&&M[n].forEach((function(t){t.call(bt,k.map(i.format.to),e,k.slice(),r||!1,A.slice(),bt)}))}))}function at(t,e,r,n,o,s){var l;return h.length>1&&!i.events.unconstrained&&(n&&e>0&&(l=P.getAbsoluteDistance(t[e-1],i.margin,!1),r=Math.max(r,l)),o&&e<h.length-1&&(l=P.getAbsoluteDistance(t[e+1],i.margin,!0),r=Math.min(r,l))),h.length>1&&i.limit&&(n&&e>0&&(l=P.getAbsoluteDistance(t[e-1],i.limit,!1),r=Math.min(r,l)),o&&e<h.length-1&&(l=P.getAbsoluteDistance(t[e+1],i.limit,!0),r=Math.max(r,l))),i.padding&&(0===e&&(l=P.getAbsoluteDistance(0,i.padding[0],!1),r=Math.max(r,l)),e===h.length-1&&(l=P.getAbsoluteDistance(100,i.padding[1],!0),r=Math.min(r,l))),!((r=a(r=P.getStep(r)))===t[e]&&!s)&&r}function lt(t,e){var r=i.ort;return(r?e:t)+", "+(r?t:e)}function ct(t,e,r,n,o){var i=r.slice(),s=n[0],a=[!t,t],l=[t,!t];n=n.slice(),t&&n.reverse(),n.length>1?n.forEach((function(t,r){var n=at(i,t,i[t]+e,a[r],l[r],!1);!1===n?e=0:(e=n-i[t],i[t]=n)})):a=l=[!0];var c=!1;n.forEach((function(t,n){c=ft(t,r[t]+e,a[n],l[n])||c})),c&&(n.forEach((function(t){st("update",t),st("slide",t)})),null!=o&&st("drag",s))}function ut(t,e){return i.dir?100-t-e:t}function dt(){L.forEach((function(t){var e=A[t]>50?-1:1,r=3+(h.length+e*t);h[t].style.zIndex=String(r)}))}function ft(t,e,r,n,o){return o||(e=at(A,t,e,r,n,!1)),!1!==e&&(function(t,e){A[t]=e,k[t]=P.fromStepping(e);var r="translate("+lt(ut(e,0)-O+"%","0")+")";h[t].style[i.transformRule]=r,pt(t),pt(t+1)}(t,e),!0)}function pt(t){if(m[t]){var e=0,r=100;0!==t&&(e=A[t-1]),t!==m.length-1&&(r=A[t]);var n=r-e,o="translate("+lt(ut(e,n)+"%","0")+")",s="scale("+lt(n/100,"1")+")";m[t].style[i.transformRule]=o+" "+s}}function ht(t,e){return null===t||!1===t||void 0===t?A[e]:("number"==typeof t&&(t=String(t)),!1!==(t=i.format.from(t))&&(t=P.toStepping(t)),!1===t||isNaN(t)?A[e]:t)}function mt(t,e,r){var n=l(t),o=void 0===A[0];e=void 0===e||e,i.animate&&!o&&s(x,i.cssClasses.tap,i.animationDuration),L.forEach((function(t){ft(t,ht(n[t],t),!0,!1,r)}));var a=1===L.length?0:1;if(o&&P.hasNoSize()&&(r=!0,A[0]=0,L.length>1)){var c=100/(L.length-1);L.forEach((function(t){A[t]=t*c}))}for(;a<L.length;++a)L.forEach((function(t){ft(t,A[t],!0,!0,r)}));dt(),L.forEach((function(t){st("update",t),null!==n[t]&&e&&st("set",t)}))}function gt(t){if(void 0===t&&(t=!1),t)return 1===k.length?k[0]:k.slice(0);var e=k.map(i.format.to);return 1===e.length?e[0]:e}function vt(t){var e=A[t],r=P.getNearbySteps(e),n=k[t],o=r.thisStep.step,s=null;if(i.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==o&&n+o>r.stepAfter.startValue&&(o=r.stepAfter.startValue-n),s=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?o=null:0===e&&(s=null);var a=P.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(a))),null!==s&&!1!==s&&(s=Number(s.toFixed(a))),[s,o]}u(b=x,i.cssClasses.target),0===i.dir?u(b,i.cssClasses.ltr):u(b,i.cssClasses.rtl),0===i.ort?u(b,i.cssClasses.horizontal):u(b,i.cssClasses.vertical),u(b,"rtl"===getComputedStyle(b).direction?i.cssClasses.textDirectionRtl:i.cssClasses.textDirectionLtr),p=U(b,i.cssClasses.base),function(t,e){var r=U(e,i.cssClasses.connects);h=[],(m=[]).push(F(r,t[0]));for(var n=0;n<i.handles;n++)h.push(j(e,n)),L[n]=n,m.push(F(r,t[n+1]))}(i.connect,p),(y=i.events).fixed||h.forEach((function(t,e){Z(S.start,t.children[0],et,{handleNumbers:[e]})})),y.tap&&Z(S.start,p,rt,{}),y.hover&&Z(S.move,p,nt,{hover:!0}),y.drag&&m.forEach((function(t,e){if(!1!==t&&0!==e&&e!==m.length-1){var r=h[e-1],n=h[e],o=[t],s=[r,n],a=[e-1,e];u(t,i.cssClasses.draggable),y.fixed&&(o.push(r.children[0]),o.push(n.children[0])),y.dragAll&&(s=h,a=L),o.forEach((function(e){Z(S.start,e,et,{handles:s,handleNumbers:a,connect:t})}))}})),mt(i.start),i.pips&&Y(i.pips),i.tooltips&&_(),it("update"+C),ot("update"+C,(function(t,e,r,n,o){L.forEach((function(t){var e=h[t],n=at(A,t,0,!0,!0,!0),s=at(A,t,100,!0,!0,!0),a=o[t],l=String(i.ariaFormat.to(r[t]));n=P.fromStepping(n).toFixed(1),s=P.fromStepping(s).toFixed(1),a=P.fromStepping(a).toFixed(1),e.children[0].setAttribute("aria-valuemin",n),e.children[0].setAttribute("aria-valuemax",s),e.children[0].setAttribute("aria-valuenow",a),e.children[0].setAttribute("aria-valuetext",l)}))}));var bt={destroy:function(){for(it(C),it(E),Object.keys(i.cssClasses).forEach((function(t){d(x,i.cssClasses[t])}));x.firstChild;)x.removeChild(x.firstChild);delete x.noUiSlider},steps:function(){return L.map(vt)},on:ot,off:it,get:gt,set:mt,setHandle:function(t,e,r,n){if(!((t=Number(t))>=0&&t<L.length))throw new Error("noUiSlider: invalid handle number, got: "+t);ft(t,ht(e,t),!0,!0,n),st("update",t),r&&st("set",t)},reset:function(t){mt(i.start,t)},__moveHandles:function(t,e,r){ct(t,e,A,r)},options:c,updateOptions:function(t,e){var r=gt(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach((function(e){void 0!==t[e]&&(c[e]=t[e])}));var s=W(c);o.forEach((function(e){void 0!==t[e]&&(i[e]=s[e])})),P=s.spectrum,i.margin=s.margin,i.limit=s.limit,i.padding=s.padding,i.pips?Y(i.pips):X(),i.tooltips?_():B(),A=[],mt(n(t.start)?t.start:r,e)},target:x,removePips:X,removeTooltips:B,getPositions:function(){return A.slice()},getTooltips:function(){return v},getOrigins:function(){return h},pips:Y};return bt}function G(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var r=Z(t,W(e),e);return t.noUiSlider=r,r}var J={__spectrum:S,cssClasses:x,create:G};t.create=G,t.cssClasses=x,t.default=J,Object.defineProperty(t,"__esModule",{value:!0})}(e)}});
//# sourceMappingURL=bundle.js.map