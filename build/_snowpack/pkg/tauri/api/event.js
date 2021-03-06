function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var tauriFa600dd3 = createCommonjsModule(function (module, exports) {
function e(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e));}catch(e){i(e);}}function u(e){try{c(r.throw(e));}catch(e){i(e);}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t);}))).then(a,u);}c((r=r.apply(e,t||[])).next());}))}function t(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a);}catch(e){i=[6,e],r=0;}finally{n=o=0;}if(5&i[0])throw i[1];return {value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function r(e){window.__TAURI_INVOKE_HANDLER__(e);}function o(e,t){void 0===t&&(t=!1);var r=n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n();return Object.defineProperty(window,r,{value:function(n){return t&&Reflect.deleteProperty(window,r),null==e?void 0:e(n)},writable:!1,configurable:!0}),r}function i(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return [4,new Promise((function(e,t){var i=o((function(t){e(t),Reflect.deleteProperty(window,a);}),!0),a=o((function(e){t(e),Reflect.deleteProperty(window,i);}),!0);r(exports._assign({callback:i,error:a},n));}))];case 1:return [2,e.sent()]}}))}))}exports._assign=function(){return exports._assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},exports._assign.apply(this,arguments)};var a=Object.freeze({__proto__:null,invoke:r,transformCallback:o,promisified:i});exports.__awaiter=e,exports.__generator=t,exports.invoke=r,exports.promisified=i,exports.tauri=a,exports.transformCallback=o;
});

var eventD9944bec = createCommonjsModule(function (module, exports) {
function t(t,n,i){void 0===i&&(i=!1),tauriFa600dd3.invoke({cmd:"listen",event:t,handler:tauriFa600dd3.transformCallback(n,i),once:i});}function n(t,n){tauriFa600dd3.invoke({cmd:"emit",event:t,payload:n});}var i=Object.freeze({__proto__:null,listen:t,emit:n});exports.emit=n,exports.event=i,exports.listen=t;
});

var event = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0}),tauriFa600dd3;exports.emit=eventD9944bec.emit,exports.listen=eventD9944bec.listen;
});

var emit = event.emit;
export { emit };
