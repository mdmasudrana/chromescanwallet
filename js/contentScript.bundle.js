!function(e){var r={};function t(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var s in e)t.d(n,s,function(r){return e[r]}.bind(null,s));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=180)}({180:function(e,r,t){"use strict";t.r(r),t.d(r,"hello",(function(){return i}));var n=t(51);function s(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */s=function(){return e};var e={},r=Object.prototype,t=r.hasOwnProperty,n=Object.defineProperty||function(e,r,t){e[r]=t.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",g=o.toStringTag||"@@toStringTag";function m(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{m({},"")}catch(e){m=function(e,r,t){return e[r]=t}}function l(e,r,t,s){var o=r&&r.prototype instanceof u?r:u,a=Object.create(o.prototype),i=new j(s||[]);return n(a,"_invoke",{value:w(e,t,i)}),a}function c(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var A={};function u(){}function f(){}function x(){}var h={};m(h,a,(function(){return this}));var d=Object.getPrototypeOf,p=d&&d(d(L([])));p&&p!==r&&t.call(p,a)&&(h=p);var v=x.prototype=u.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(r){m(e,r,(function(e){return this._invoke(r,e)}))}))}function b(e,r){function s(n,o,a,i){var g=c(e[n],e,o);if("throw"!==g.type){var m=g.arg,l=m.value;return l&&"object"==typeof l&&t.call(l,"__await")?r.resolve(l.__await).then((function(e){s("next",e,a,i)}),(function(e){s("throw",e,a,i)})):r.resolve(l).then((function(e){m.value=e,a(m)}),(function(e){return s("throw",e,a,i)}))}i(g.arg)}var o;n(this,"_invoke",{value:function(e,t){function n(){return new r((function(r,n){s(e,t,r,n)}))}return o=o?o.then(n,n):n()}})}function w(e,r,t){var n="suspendedStart";return function(s,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===s)throw o;return T()}for(t.method=s,t.arg=o;;){var a=t.delegate;if(a){var i=k(a,t);if(i){if(i===A)continue;return i}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===n)throw n="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n="executing";var g=c(e,r,t);if("normal"===g.type){if(n=t.done?"completed":"suspendedYield",g.arg===A)continue;return{value:g.arg,done:t.done}}"throw"===g.type&&(n="completed",t.method="throw",t.arg=g.arg)}}}function k(e,r){var t=r.method,n=e.iterator[t];if(void 0===n)return r.delegate=null,"throw"===t&&e.iterator.return&&(r.method="return",r.arg=void 0,k(e,r),"throw"===r.method)||"return"!==t&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+t+"' method")),A;var s=c(n,e.iterator,r.arg);if("throw"===s.type)return r.method="throw",r.arg=s.arg,r.delegate=null,A;var o=s.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,A):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,A)}function E(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function P(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,s=function r(){for(;++n<e.length;)if(t.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return s.next=s}}return{next:T}}function T(){return{value:void 0,done:!0}}return f.prototype=x,n(v,"constructor",{value:x,configurable:!0}),n(x,"constructor",{value:f,configurable:!0}),f.displayName=m(x,g,"GeneratorFunction"),e.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===f||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,m(e,g,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(b.prototype),m(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(r,t,n,s,o){void 0===o&&(o=Promise);var a=new b(l(r,t,n,s),o);return e.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(v),m(v,g,"Generator"),m(v,a,(function(){return this})),m(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var r=Object(e),t=[];for(var n in r)t.push(n);return t.reverse(),function e(){for(;t.length;){var n=t.pop();if(n in r)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&t.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(t,n){return a.type="throw",a.arg=e,r.next=t,n&&(r.method="next",r.arg=void 0),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=t.call(o,"catchLoc"),g=t.call(o,"finallyLoc");if(i&&g){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!g)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,r){for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n];if(s.tryLoc<=this.prev&&t.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var o=s;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,A):this.complete(a)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),A},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),P(t),A}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var s=n.arg;P(t)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,t){return this.delegate={iterator:L(e),resultName:r,nextLoc:t},"next"===this.method&&(this.arg=void 0),A}},e}function o(e,r,t,n,s,o,a){try{var i=e[o](a),g=i.value}catch(e){return void t(e)}i.done?r(g):Promise.resolve(g).then(n,s)}function a(){var e;return e=s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={},e.prev=1,t={active:!0,currentWindow:!0},e.next=5,n.browser.tabs.query(t);case 5:r=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})),a=function(){var r=this,t=arguments;return new Promise((function(n,s){var a=e.apply(r,t);function i(e){o(a,n,s,i,g,"next",e)}function g(e){o(a,n,s,i,g,"throw",e)}i(void 0)}))},a.apply(this,arguments)}function i(){console.log("helloworld from content script")}window.onload=function(){i(),console.log(function(){return a.apply(this,arguments)}())}},51:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.browser=t(90)},90:function(e,r,t){var n,s,o;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,s=[e],n=function(e){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const r="The message port closed before a response was received.",t="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",n=e=>{const n={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(n).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(e,r=void 0){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const o=e=>e&&"object"==typeof e&&"function"==typeof e.then,a=(r,t)=>(...n)=>{e.runtime.lastError?r.reject(e.runtime.lastError):t.singleCallbackArg||n.length<=1&&!1!==t.singleCallbackArg?r.resolve(n[0]):r.resolve(n)},i=e=>1==e?"argument":"arguments",g=(e,r)=>function(t,...n){if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${i(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${i(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((s,o)=>{if(r.fallbackToNoCallback)try{t[e](...n,a({resolve:s,reject:o},r))}catch(o){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,o),t[e](...n),r.fallbackToNoCallback=!1,r.noCallback=!0,s()}else r.noCallback?(t[e](...n),s()):t[e](...n,a({resolve:s,reject:o},r))}))},m=(e,r,t)=>new Proxy(r,{apply:(r,n,s)=>t.call(n,e,...s)});let l=Function.call.bind(Object.prototype.hasOwnProperty);const c=(e,r={},t={})=>{let n=Object.create(null),s={has:(r,t)=>t in e||t in n,get(s,o,a){if(o in n)return n[o];if(!(o in e))return;let i=e[o];if("function"==typeof i)if("function"==typeof r[o])i=m(e,e[o],r[o]);else if(l(t,o)){let r=g(o,t[o]);i=m(e,e[o],r)}else i=i.bind(e);else if("object"==typeof i&&null!==i&&(l(r,o)||l(t,o)))i=c(i,r[o],t[o]);else{if(!l(t,"*"))return Object.defineProperty(n,o,{configurable:!0,enumerable:!0,get:()=>e[o],set(r){e[o]=r}}),i;i=c(i,r[o],t["*"])}return n[o]=i,i},set:(r,t,s,o)=>(t in n?n[t]=s:e[t]=s,!0),defineProperty:(e,r,t)=>Reflect.defineProperty(n,r,t),deleteProperty:(e,r)=>Reflect.deleteProperty(n,r)},o=Object.create(e);return new Proxy(o,s)},A=e=>({addListener(r,t,...n){r.addListener(e.get(t),...n)},hasListener:(r,t)=>r.hasListener(e.get(t)),removeListener(r,t){r.removeListener(e.get(t))}});let u=!1;const f=new s((e=>"function"!=typeof e?e:function(r,n,s){let a,i,g=!1,m=new Promise((e=>{a=function(r){u||(console.warn(t,(new Error).stack),u=!0),g=!0,e(r)}}));try{i=e(r,n,a)}catch(e){i=Promise.reject(e)}const l=!0!==i&&o(i);if(!0!==i&&!l&&!g)return!1;const c=e=>{e.then((e=>{s(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",s({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)}))};return c(l?i:m),!0})),x=({reject:t,resolve:n},s)=>{e.runtime.lastError?e.runtime.lastError.message===r?n():t(e.runtime.lastError):s&&s.__mozWebExtensionPolyfillReject__?t(new Error(s.message)):n(s)},h=(e,r,t,...n)=>{if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${i(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${i(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((e,r)=>{const s=x.bind(null,{resolve:e,reject:r});n.push(s),t.sendMessage(...n)}))},d={runtime:{onMessage:A(f),onMessageExternal:A(f),sendMessage:h.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:h.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},p={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return n.privacy={network:{"*":p},services:{"*":p},websites:{"*":p}},c(e,d,n)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=n(chrome)}else e.exports=browser},void 0===(o="function"==typeof n?n.apply(r,s):n)||(e.exports=o)}});