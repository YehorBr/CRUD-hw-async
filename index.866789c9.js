!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}};var n={},o=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function v(){}function m(){}function g(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(O([])));L&&L!==r&&n.call(L,a)&&(w=L);var x=g.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:e,done:!0}}return m.prototype=g,u(x,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(k.prototype),u(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),u(x,c,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a="localhost:3000";function i(){return c.apply(this,arguments)}function c(){return(c=t(e)(t(n).mark((function e(){var r,o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://".concat(a,"/students"));case 2:return r=t.sent,t.next=5,r.json();case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function u(t){return s.apply(this,arguments)}function s(){return(s=t(e)(t(n).mark((function e(r){var o,i,c;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json; charset=UTF-8"}},t.next=3,fetch("http://".concat(a,"/students"),o);case 3:return i=t.sent,t.next=6,i.json();case 6:return c=t.sent,t.abrupt("return",c);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=t(e)(t(n).mark((function e(r){var o,i,c;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={method:"DELETE",headers:{"Content-Type":"application/json; charset=UTF-8"}},t.next=3,fetch("http://".concat(a,"/students/").concat(r),o);case 3:return i=t.sent,t.next=6,i.json();case 6:return c=t.sent,t.abrupt("return",c);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function h(t,e){return p.apply(this,arguments)}function p(){return(p=t(e)(t(n).mark((function e(r,o){var i,c,u;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i={method:"PATCH",body:JSON.stringify(o),headers:{"Content-Type":"application/json; charset=UTF-8"}},t.next=3,fetch("http://".concat(a,"/students/").concat(r),i);case 3:return c=t.sent,t.next=6,c.json();case 6:return u=t.sent,t.abrupt("return",u);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var d=document.querySelector(".get-students-btn"),y=document.querySelector(".student-list"),v=document.querySelector(".add-form"),m=(document.querySelector(".delete-button"),document.querySelector(".update-button")),g=document.querySelector(".update-form"),w=document.querySelector(".backdrop"),b=document.querySelector(".modal"),L=document.querySelector(".close-modal-btn");function x(){i().then((function(t){var e=t.map((function(t){return'\n        <li id="'.concat(t.id,"\">\n      <h1>Ім'я:").concat(t.name,"</h1>\n      <p>Вік:").concat(t.age,"</p>\n      <p>Курс:").concat(t.course,"</p>\n      <p>").concat(t.skills,"</p>\n      <p>email:").concat(t.email,"</p>\n      <p>Зараховано:").concat(t.isEnrolled,'</p>\n      <button class="delete-button" type="button">Видалити студента</button>\n      <button class="update-button" type="button">Оновити студента</button>\n    </li>\n        ')}));y.innerHTML=e}))}function E(t){b.classList.add("is-show"),w.classList.add("modal-show"),console.log(document.getElementById(t))}d&&d.addEventListener("click",x),v&&v.addEventListener("submit",(function(t){t.preventDefault();var e=t.currentTarget.elements;u({name:e.name.value,age:e.age.value,course:e.course.value,skills:[e.skills.value],email:e.email.value,isEnrolled:e.isEnrolled.checked}).then((function(t){return console.log("afaffa")})),t.currentTarget.reset()})),y&&y.addEventListener("click",(function(t){studentId=t.target.parentNode.id,t.target.classList.contains("delete-button")?l(studentId).then((function(){return x()})):t.target.classList.contains("update-button")&&E(studentId)})),m&&m.addEventListener("click",E),L&&L.addEventListener("click",(function(){b.classList.remove("is-show"),w.classList.remove("modal-show")})),g&&g.addEventListener("submit",(function(t){t.preventDefault();var e={},r=!0,n=!1,o=void 0;try{for(var a,i=t.target.elements[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var c=a.value;""!==c.value&&(e[c.name]=c.value)}}catch(t){n=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}h(studentId,e).then((function(){x(),b.classList.remove("is-show"),w.classList.remove("modal-show"),g.reset()}))}))}();
//# sourceMappingURL=index.866789c9.js.map
