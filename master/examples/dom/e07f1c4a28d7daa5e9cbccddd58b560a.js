!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="/",t(t.s=1071)}({1071:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(298),r=e.n(o),u=e(34),i=document.getElementById("rect-target");i.innerHTML="\n  Element min-width = "+e.i(u.d)(i).minWidth+" <br/>\n  Element rect = "+r()(e.i(u.a)(i))+" <br/>\n",document.getElementById("report").innerHTML="\n Pixel ratio = "+e.i(u.b)()+" <br/>\n Window height = "+e.i(u.g)()+" <br/>\n"},115:function(n,t,e){e(24),e(19),e(20),e(196),e(199),e(198),e(197),n.exports=e(8).Set},19:function(n,t,e){n.exports=e(2)(566)},196:function(n,t,e){n.exports=e(2)(225)},197:function(n,t,e){n.exports=e(2)(629)},198:function(n,t,e){n.exports=e(2)(630)},199:function(n,t,e){n.exports=e(2)(631)},2:function(n,t){n.exports=vendor_lib},20:function(n,t,e){n.exports=e(2)(645)},200:function(n,t,e){n.exports=e(2)(818)},23:function(n,t,e){n.exports={default:e(44),__esModule:!0}},24:function(n,t,e){n.exports=e(2)(529)},26:function(n,t,e){n.exports={default:e(43),__esModule:!0}},298:function(n,t,e){n.exports={default:e(322),__esModule:!0}},322:function(n,t,e){var o=e(8),r=o.JSON||(o.JSON={stringify:JSON.stringify});n.exports=function(n){return r.stringify.apply(r,arguments)}},34:function(n,t,e){"use strict";function o(n){return n===document||n instanceof Node&&document.documentElement.contains(n.parentNode)}function r(n){if(n instanceof Range||o(n)){var t=n.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}}return g()({},w)}function u(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function i(){return window.innerHeight}function c(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function f(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function l(n){n.preventDefault&&n.preventDefault()}e.d(t,"d",function(){return _}),t.h=o,t.a=r,t.b=u,t.g=i,t.e=c,t.f=f,e.d(t,"l",function(){return y}),e.d(t,"j",function(){return E}),e.d(t,"k",function(){return M}),e.d(t,"c",function(){return O}),t.i=l;var d=e(99),s=e.n(d),a=e(4),p=e.n(a),m=e(5),v=e.n(m),x=e(35),h=(e.n(x),e(23)),g=e.n(h),b=e(200),_=(e.n(b),window.getComputedStyle.bind(window)),w={top:0,right:0,bottom:0,left:0,width:0,height:0},y=function(n){return function(t){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"").split(/\s+/g).forEach(function(e){return t[n](e)})}},E=y("add"),M=y("remove"),O=function(){function n(){p()(this,n),this._all=new s.a}return v()(n,[{key:"add",value:function(n,t,e,o){n.addEventListener(t,e,o);var r=function(){return n.removeEventListener(t,e,o)};return this._all.add(r),r}},{key:"remove",value:function(n){n(),this._all.delete(n)}},{key:"removeAll",value:function(){var n=this;this._all.forEach(function(t){return n.remove(t)})}}]),n}()},35:function(n,t,e){n.exports={default:e(88),__esModule:!0}},4:function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},43:function(n,t,e){e(61);var o=e(8).Object;n.exports=function(n,t,e){return o.defineProperty(n,t,e)}},44:function(n,t,e){e(71),n.exports=e(8).Object.assign},5:function(n,t,e){"use strict";t.__esModule=!0;var o=e(26),r=function(n){return n&&n.__esModule?n:{default:n}}(o);t.default=function(){function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(n,o.key,o)}}return function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}}()},61:function(n,t,e){n.exports=e(2)(516)},71:function(n,t,e){n.exports=e(2)(513)},8:function(n,t,e){n.exports=e(2)(24)},88:function(n,t,e){e(90),n.exports=e(8).Object.entries},90:function(n,t,e){n.exports=e(2)(612)},99:function(n,t,e){n.exports={default:e(115),__esModule:!0}}});