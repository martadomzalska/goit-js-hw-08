!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,b=Math.max,m=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,o,u,a,l,f,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,l=setTimeout(h,t),d?y(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=u}function h(){var e=p();if(O(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return s?m(n,u-(e-c)):n}(e))}function w(e){return l=void 0,v&&r?y(e):(r=o=void 0,a)}function T(){var e=p(),n=O(e);if(r=arguments,o=this,f=e,n){if(void 0===l)return j(f);if(s)return l=setTimeout(h,t),y(f)}return void 0===l&&(l=setTimeout(h,t)),a}return t=S(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?b(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=o=l=void 0},T.flush=function(){return void 0===l?a:w(p())},T}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||l.test(t)?f(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),O=j.querySelector("input[name]"),h=j.querySelector("textarea"),w="feedback-form-state",T=j.querySelector("button");""!==h.value&&""!==O.value||T.setAttribute("disabled","true"),j.addEventListener("input",e(t)((function(){var e={email:O.value,message:h.value};""===h.value||""===O.value?T.setAttribute("disabled","true"):T.removeAttribute("disabled"),localStorage.setItem(w,JSON.stringify(e))}),500));var x=localStorage.getItem(w);if(null!==x){var N=JSON.parse(x);O.value=N.email,h.value=N.message,""!==h.value&&""!==O.value&&T.removeAttribute("disabled")}j.addEventListener("submit",(function(e){console.log(localStorage.getItem(w)),e.preventDefault(),j.reset(),localStorage.removeItem(w),T.setAttribute("disabled","true")}))}();
//# sourceMappingURL=03-feedback.c31a859e.js.map