/*
 AngularJS v1.2.4
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Y,N,r){'use strict';function G(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.4/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function pb(b){if(null==b||za(b))return!1;var a=
b.length;return 1===b.nodeType&&a?!0:D(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(A(b))for(d in b)"prototype"!=d&&("length"!=d&&"name"!=d&&b.hasOwnProperty(d))&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(pb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Ob(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Mc(b,a,c){for(var d=Ob(b),
e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Pb(b){return function(a,c){b(c,a)}}function Ya(){for(var b=ja.length,a;b;){b--;a=ja[b].charCodeAt(0);if(57==a)return ja[b]="A",ja.join("");if(90==a)ja[b]="0";else return ja[b]=String.fromCharCode(a+1),ja.join("")}ja.unshift("0");return ja.join("")}function Qb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function x(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Qb(b,a);return b}function S(b){return parseInt(b,
10)}function Rb(b,a){return x(new (x(function(){},{prototype:b})),a)}function v(){}function Aa(b){return b}function ca(b){return function(){return b}}function H(b){return"undefined"==typeof b}function z(b){return"undefined"!=typeof b}function V(b){return null!=b&&"object"==typeof b}function D(b){return"string"==typeof b}function qb(b){return"number"==typeof b}function Ka(b){return"[object Date]"==Za.apply(b)}function L(b){return"[object Array]"==Za.apply(b)}function A(b){return"function"==typeof b}
function $a(b){return"[object RegExp]"==Za.apply(b)}function za(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Nc(b){return!(!b||!(b.nodeName||b.on&&b.find))}function Oc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function ab(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function La(b,a){var c=ab(b,a);0<=c&&b.splice(c,1);return a}function ga(b,a){if(za(b)||b&&b.$evalAsync&&b.$watch)throw Ma("cpws");if(a){if(b===
a)throw Ma("cpi");if(L(b))for(var c=a.length=0;c<b.length;c++)a.push(ga(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=ga(b[d]);Qb(a,c)}}else(a=b)&&(L(b)?a=ga(b,[]):Ka(b)?a=new Date(b.getTime()):$a(b)?a=RegExp(b.source):V(b)&&(a=ga(b,{})));return a}function Pc(b,a){a=a||{};for(var c in b)b.hasOwnProperty(c)&&"$$"!==c.substr(0,2)&&(a[c]=b[c]);return a}function Ba(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&
"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Ba(b[d],a[d]))return!1;return!0}}else{if(Ka(b))return Ka(a)&&b.getTime()==a.getTime();if($a(b)&&$a(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||za(b)||za(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!A(b[d])){if(!Ba(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==r&&!A(a[d]))return!1;return!0}return!1}function Sb(){return N.securityPolicy&&
N.securityPolicy.isActive||N.querySelector&&!(!N.querySelector("[ng-csp]")&&!N.querySelector("[data-ng-csp]"))}function rb(b,a){var c=2<arguments.length?ta.call(arguments,2):[];return!A(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ta.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Qc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=r:za(a)?c="$WINDOW":a&&N===a?c="$DOCUMENT":a&&(a.$evalAsync&&
a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?r:JSON.stringify(b,Qc,a?"  ":null)}function Tb(b){return D(b)?JSON.parse(b):b}function Na(b){b&&0!==b.length?(b=t(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=w(b).clone();try{b.html("")}catch(a){}var c=w("<div>").append(b).html();try{return 3===b[0].nodeType?t(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+t(b)})}catch(d){return t(c)}}function Ub(b){try{return decodeURIComponent(b)}catch(a){}}
function Vb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Ub(c[0]),z(d)&&(b=z(c[1])?Ub(c[1]):!0,a[d]?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Wb(b){var a=[];q(b,function(b,d){L(b)?q(b,function(b){a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))}):a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))});return a.length?a.join("&"):""}function sb(b){return ua(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ua(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Rc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(N.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,g=
(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function Xb(b,a){var c=function(){b=w(b);if(b.injector()){var c=b[0]===N?"document":ha(b);throw Ma("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=Yb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;
if(Y&&!d.test(Y.name))return c();Y.name=Y.name.replace(d,"");bb.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function cb(b,a){a=a||"_";return b.replace(Sc,function(b,d){return(d?a:"")+b.toLowerCase()})}function tb(b,a,c){if(!b)throw Ma("areq",a||"?",c||"required");return b}function Oa(b,a,c){c&&L(b)&&(b=b[b.length-1]);tb(A(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function va(b,a){if("hasOwnProperty"===b)throw Ma("badname",
a);}function ub(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&A(b)?rb(e,b):b}function vb(b){var a=b[0];b=b[b.length-1];if(a===b)return w(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return w(c)}function Tc(b){var a=G("$injector"),c=G("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||G;return b.module||(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&
b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],m=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),
controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:m,run:function(a){d.push(a);return this}};f&&m(f);return n}())}}())}function Pa(b){return b.replace(Uc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Vc,"Moz$1")}function wb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],l=a,k,m,n,p,s,C;if(!d||null!=b)for(;e.length;)for(k=e.shift(),m=0,n=k.length;m<n;m++)for(p=w(k[m]),l?p.triggerHandler("$destroy"):l=!l,s=0,p=(C=p.children()).length;s<
p;s++)e.push(Ca(C[s]));return g.apply(this,arguments)}var g=Ca.fn[b],g=g.$original||g;e.$original=g;Ca.fn[b]=e}function I(b){if(b instanceof I)return b;if(!(this instanceof I)){if(D(b)&&"<"!=b.charAt(0))throw xb("nosel");return new I(b)}if(D(b)){var a=N.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);yb(this,a.childNodes);w(N.createDocumentFragment()).append(this)}else yb(this,b)}function zb(b){return b.cloneNode(!0)}function Qa(b){Zb(b);var a=0;for(b=b.childNodes||
[];a<b.length;a++)Qa(b[a])}function $b(b,a,c,d){if(z(d))throw xb("offargs");var e=ka(b,"events");ka(b,"handle")&&(H(a)?q(e,function(a,c){Ab(b,c,a);delete e[c]}):q(a.split(" "),function(a){H(c)?(Ab(b,a,e[a]),delete e[a]):La(e[a]||[],c)}))}function Zb(b,a){var c=b[db],d=Ra[c];d&&(a?delete Ra[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),$b(b)),delete Ra[c],b[db]=r))}function ka(b,a,c){var d=b[db],d=Ra[d||-1];if(z(c))d||(b[db]=d=++Wc,d=Ra[d]={}),d[a]=c;else return d&&d[a]}function ac(b,
a,c){var d=ka(b,"data"),e=z(c),g=!e&&z(a),f=g&&!V(a);d||f||ka(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];x(d,a)}else return d}function Bb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Cb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",ba((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ba(a)+" "," ")))})}function Db(b,a){if(a&&b.setAttribute){var c=(" "+
(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=ba(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",ba(c))}}function yb(b,a){if(a){a=a.nodeName||!z(a.length)||za(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function bc(b,a){return eb(b,"$"+(a||"ngController")+"Controller")}function eb(b,a,c){b=w(b);9==b[0].nodeType&&(b=b.find("html"));for(a=L(a)?a:[a];b.length;){for(var d=0,e=a.length;d<e;d++)if((c=b.data(a[d]))!==r)return c;b=b.parent()}}
function cc(b,a){var c=fb[a.toLowerCase()];return c&&dc[b.nodeName]&&c}function Xc(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||N);if(H(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};q(a[e||c.type],
function(a){a.call(b,c)});8>=E?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Da(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===r&&(c=b.$$hashKey=Ya()):c=b;return a+":"+c}function Sa(b){q(b,this.put,this)}function ec(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(Yc,""),c=c.match(Zc),
q(c[1].split($c),function(b){b.replace(ad,function(b,c,d){a.push(d)})})),b.$inject=a):L(b)?(c=b.length-1,Oa(b[c],"fn"),a=b.slice(0,c)):Oa(b,"fn",!0);return a}function Yb(b){function a(a){return function(b,c){if(V(b))q(b,Pb(a));else return a(b,c)}}function c(a,b){va(a,"service");if(A(b)||L(b))b=n.instantiate(b);if(!b.$get)throw Ta("pget",a);return m[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,h,g;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(D(a))for(c=Ua(a),b=b.concat(e(c.requires)).concat(c._runBlocks),
d=c._invokeQueue,h=0,g=d.length;h<g;h++){var f=d[h],l=n.get(f[0]);l[f[1]].apply(l,f[2])}else A(a)?b.push(n.invoke(a)):L(a)?b.push(n.invoke(a)):Oa(a,"module")}catch(m){throw L(a)&&(a=a[a.length-1]),m.message&&(m.stack&&-1==m.stack.indexOf(m.message))&&(m=m.message+"\n"+m.stack),Ta("modulerr",a,m.stack||m.message||m);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Ta("cdep",l.join(" <- "));return a[d]}try{return l.unshift(d),a[d]=f,a[d]=b(d)}finally{l.shift()}}
function d(a,b,e){var h=[],g=ec(a),f,k,l;k=0;for(f=g.length;k<f;k++){l=g[k];if("string"!==typeof l)throw Ta("itkn",l);h.push(e&&e.hasOwnProperty(l)?e[l]:c(l))}a.$inject||(a=a[f]);switch(b?-1:h.length){case 0:return a();case 1:return a(h[0]);case 2:return a(h[0],h[1]);case 3:return a(h[0],h[1],h[2]);case 4:return a(h[0],h[1],h[2],h[3]);case 5:return a(h[0],h[1],h[2],h[3],h[4]);case 6:return a(h[0],h[1],h[2],h[3],h[4],h[5]);case 7:return a(h[0],h[1],h[2],h[3],h[4],h[5],h[6]);case 8:return a(h[0],h[1],
h[2],h[3],h[4],h[5],h[6],h[7]);case 9:return a(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8]);case 10:return a(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8],h[9]);default:return a.apply(b,h)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(L(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return V(e)||A(e)?e:c},get:c,annotate:ec,has:function(b){return m.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var f={},h="Provider",l=[],k=new Sa,m={$provide:{provider:a(c),factory:a(d),
service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,ca(b))}),constant:a(function(a,b){va(a,"constant");m[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},n=m.$injector=g(m,function(){throw Ta("unpr",l.join(" <- "));}),p={},s=p.$injector=g(p,function(a){a=n.get(a+h);return s.invoke(a.$get,a)});q(e(b),function(a){s.invoke(a||v)});return s}
function bd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==t(a.nodeName)||(b=a)});return b}function g(){var b=c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function cd(b,a,c,d){function e(a){try{a.apply(null,
ta.call(arguments,1))}finally{if(C--,0===C)for(;B.length;)try{B.pop()()}catch(b){c.error(b)}}}function g(a,b){(function la(){q(K,function(a){a()});u=b(la,a)})()}function f(){y=null;P!=h.url()&&(P=h.url(),q(W,function(a){a(h.url())}))}var h=this,l=a[0],k=b.location,m=b.history,n=b.setTimeout,p=b.clearTimeout,s={};h.isMock=!1;var C=0,B=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){C++};h.notifyWhenNoOutstandingRequests=function(a){q(K,function(a){a()});0===C?a():B.push(a)};
var K=[],u;h.addPollFn=function(a){H(u)&&g(100,n);K.push(a);return a};var P=k.href,Q=a.find("base"),y=null;h.url=function(a,c){k!==b.location&&(k=b.location);if(a){if(P!=a)return P=a,d.history?c?m.replaceState(null,"",a):(m.pushState(null,"",a),Q.attr("href",Q.attr("href"))):(y=a,c?k.replace(a):k.href=a),h}else return y||k.href.replace(/%27/g,"'")};var W=[],R=!1;h.onUrlChange=function(a){if(!R){if(d.history)w(b).on("popstate",f);if(d.hashchange)w(b).on("hashchange",f);else h.addPollFn(f);R=!0}W.push(a);
return a};h.baseHref=function(){var a=Q.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var $={},Z="",aa=h.baseHref();h.cookies=function(a,b){var d,e,h,g;if(a)b===r?l.cookie=escape(a)+"=;path="+aa+";expires=Thu, 01 Jan 1970 00:00:00 GMT":D(b)&&(d=(l.cookie=escape(a)+"="+escape(b)+";path="+aa).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(l.cookie!==Z)for(Z=l.cookie,d=Z.split("; "),$={},h=0;h<d.length;h++)e=
d[h],g=e.indexOf("="),0<g&&(a=unescape(e.substring(0,g)),$[a]===r&&($[a]=unescape(e.substring(g+1))));return $}};h.defer=function(a,b){var c;C++;c=n(function(){delete s[c];e(a)},b||0);s[c]=!0;return c};h.defer.cancel=function(a){return s[a]?(delete s[a],p(a),e(v),!0):!1}}function dd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new cd(b,d,a,c)}]}function ed(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}
function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw G("$cacheFactory")("iid",b);var f=0,h=x({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},n=null,p=null;return a[b]={put:function(a,b){var c=m[a]||(m[a]={key:a});e(c);if(!H(b))return a in l||f++,l[a]=b,f>k&&this.remove(p.key),b},get:function(a){var b=m[a];if(b)return e(b),l[a]},remove:function(a){var b=m[a];b&&(b==n&&(n=b.p),b==p&&(p=b.n),g(b.n,b.p),delete m[a],delete l[a],f--)},removeAll:function(){l={};f=0;m={};n=p=null},destroy:function(){m=
h=l=null;delete a[b]},info:function(){return x({},h,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function fd(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function gc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,g=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function l(a,e){va(a,"directive");D(a)?(tb(e,"directiveFactory"),c.hasOwnProperty(a)||
(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);A(f)?f={compile:ca(f)}:!f.compile&&f.link&&(f.compile=ca(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(l){d(l)}});return e}])),c[a].push(e)):q(a,Pb(l));return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};
this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,m,n,p,s,C,B,K,u,P,Q){function y(a,b,c,d,e){a instanceof w||(a=w(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});var g=R(a,b,a,c,d,
e);return function(b,c,d){tb(b,"scope");var e=c?Ea.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var f=e.length;d<f;d++){var k=e[d];1!=k.nodeType&&9!=k.nodeType||e.eq(d).data("$scope",b)}W(e,"ng-scope");c&&c(e,b);g&&g(b,e,e);return e}}function W(a,b){try{a.addClass(b)}catch(c){}}function R(a,b,c,d,e,g){function f(a,c,d,e){var g,l,m,p,n,s,C,da=[];n=0;for(s=c.length;n<s;n++)da.push(c[n]);C=n=0;for(s=k.length;n<s;C++)l=da[C],c=k[n++],g=k[n++],m=w(l),c?(c.scope?(p=a.$new(),
m.data("$scope",p),W(m,"ng-scope")):p=a,(m=c.transclude)||!e&&b?c(g,p,l,d,$(a,m||b)):c(g,p,l,d,e)):g&&g(a,l.childNodes,r,e)}for(var k=[],l,m,p,n=0;n<a.length;n++)m=new Eb,l=Z(a[n],[],m,0===n?d:r,e),l=(g=l.length?M(l,a[n],m,b,c,null,[],[],g):null)&&g.terminal||!a[n].childNodes||!a[n].childNodes.length?null:R(a[n].childNodes,g?g.transclude:b),k.push(g),k.push(l),p=p||g||l,g=null;return p?f:null}function $(a,b){return function(c,d,e){var g=!1;c||(c=a.$new(),g=c.$$transcluded=!0);d=b(c,d,e);if(g)d.on("$destroy",
rb(c,c.$destroy));return d}}function Z(a,b,c,d,f){var k=c.$attr,l;switch(a.nodeType){case 1:la(b,ma(Fa(a).toLowerCase()),"E",d,f);var m,p,n;l=a.attributes;for(var s=0,C=l&&l.length;s<C;s++){var B=!1,y=!1;m=l[s];if(!E||8<=E||m.specified){p=m.name;n=ma(p);wa.test(n)&&(p=cb(n.substr(6),"-"));var P=n.replace(/(Start|End)$/,"");n===P+"Start"&&(B=p,y=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));n=ma(p.toLowerCase());k[n]=p;c[n]=m=ba(E&&"href"==p?decodeURIComponent(a.getAttribute(p,2)):m.value);
cc(a,n)&&(c[n]=!0);I(a,b,m,n);la(b,n,"A",d,f,B,y)}}a=a.className;if(D(a)&&""!==a)for(;l=g.exec(a);)n=ma(l[2]),la(b,n,"C",d,f)&&(c[n]=ba(l[3])),a=a.substr(l.index+l[0].length);break;case 3:t(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))n=ma(l[1]),la(b,n,"M",d,f)&&(c[n]=ba(l[2]))}catch(K){}}b.sort(v);return b}function aa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=
a.nextSibling}while(0<e)}else d.push(a);return w(d)}function O(a,b,c){return function(d,e,g,f,k){e=aa(e[0],b,c);return a(d,e,g,f,k)}}function M(a,c,d,e,g,f,l,p,n){function B(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=F.require;if(R===F||F.$$isolateScope)a=U(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=O(b,c,d));b.require=F.require;if(R===F||F.$$isolateScope)b=U(b,{isolateScope:!0});p.push(b)}}function P(a,b,c){var d,e="data",g=!1;if(D(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),
g=g||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!g)throw ia("ctreq",a,ea);}else L(a)&&(d=[],q(a,function(a){d.push(P(a,b,c))}));return d}function K(a,e,g,f,n){function B(a,b){var c;2>arguments.length&&(b=a,a=r);Ga&&(c=O);return n(a,b,c)}var y,da,$,u,aa,J,O={},Z;y=c===g?d:Pc(d,new Eb(w(g),d.$attr));da=y.$$element;if(R){var T=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=w(g);J=e.$new(!0);M&&M===R.$$originalDirective?f.data("$isolateScope",J):f.data("$isolateScopeNoTemplate",J);W(f,
"ng-isolate-scope");q(R.scope,function(a,c){var d=a.match(T)||[],g=d[3]||c,f="?"==d[2],d=d[1],l,m,p;J.$$isolateBindings[c]=d+g;switch(d){case "@":y.$observe(g,function(a){J[c]=a});y.$$observers[g].$$scope=e;y[g]&&(J[c]=b(y[g])(e));break;case "=":if(f&&!y[g])break;m=s(y[g]);p=m.assign||function(){l=J[c]=m(e);throw ia("nonassign",y[g],R.name);};l=J[c]=m(e);J.$watch(function(){var a=m(e);a!==J[c]&&(a!==l?J[c]=a:p(e,a=J[c]));return l=a});break;case "&":m=s(y[g]);J[c]=function(a){return m(e,a)};break;
default:throw ia("iscp",R.name,c,a);}})}Z=n&&B;Q&&q(Q,function(a){var b={$scope:a===R||a.$$isolateScope?J:e,$element:da,$attrs:y,$transclude:Z},c;aa=a.controller;"@"==aa&&(aa=y[a.name]);c=C(aa,b);O[a.name]=c;Ga||da.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for($=l.length;f<$;f++)try{u=l[f],u(u.isolateScope?J:e,da,y,u.require&&P(u.require,da,O),Z)}catch(t){m(t,ha(da))}f=e;R&&(R.template||null===R.templateUrl)&&(f=J);a&&a(f,g.childNodes,r,n);for(f=p.length-1;0<=
f;f--)try{u=p[f],u(u.isolateScope?J:e,da,y,u.require&&P(u.require,da,O),Z)}catch(v){m(v,ha(da))}}n=n||{};var $=-Number.MAX_VALUE,u,Q=n.controllerDirectives,R=n.newIsolateScopeDirective,M=n.templateDirective;n=n.nonTlbTranscludeDirective;for(var la=!1,Ga=!1,v=d.$$element=w(c),F,ea,t,x=e,G,I=0,E=a.length;I<E;I++){F=a[I];var wa=F.$$start,gb=F.$$end;wa&&(v=aa(c,wa,gb));t=r;if($>F.priority)break;if(t=F.scope)u=u||F,F.templateUrl||(H("new/isolated scope",R,F,v),V(t)&&(R=F));ea=F.name;!F.templateUrl&&F.controller&&
(t=F.controller,Q=Q||{},H("'"+ea+"' controller",Q[ea],F,v),Q[ea]=F);if(t=F.transclude)la=!0,F.$$tlb||(H("transclusion",n,F,v),n=F),"element"==t?(Ga=!0,$=F.priority,t=aa(c,wa,gb),v=d.$$element=w(N.createComment(" "+ea+": "+d[ea]+" ")),c=v[0],S(g,w(ta.call(t,0)),c),x=y(t,e,$,f&&f.name,{nonTlbTranscludeDirective:n})):(t=w(zb(c)).contents(),v.html(""),x=y(t,e));if(F.template)if(H("template",M,F,v),M=F,t=A(F.template)?F.template(v,d):F.template,t=hc(t),F.replace){f=F;t=w("<div>"+ba(t)+"</div>").contents();
c=t[0];if(1!=t.length||1!==c.nodeType)throw ia("tplrt",ea,"");S(g,v,c);E={$attr:{}};t=Z(c,[],E);var X=a.splice(I+1,a.length-(I+1));R&&T(t);a=a.concat(t).concat(X);fc(d,E);E=a.length}else v.html(t);if(F.templateUrl)H("template",M,F,v),M=F,F.replace&&(f=F),K=z(a.splice(I,a.length-I),v,d,g,x,l,p,{controllerDirectives:Q,newIsolateScopeDirective:R,templateDirective:M,nonTlbTranscludeDirective:n}),E=a.length;else if(F.compile)try{G=F.compile(v,d,x),A(G)?B(null,G,wa,gb):G&&B(G.pre,G.post,wa,gb)}catch(Y){m(Y,
ha(v))}F.terminal&&(K.terminal=!0,$=Math.max($,F.priority))}K.scope=u&&!0===u.scope;K.transclude=la&&x;return K}function T(a){for(var b=0,c=a.length;b<c;b++)a[b]=Rb(a[b],{$$isolateScope:!0})}function la(b,e,g,f,k,p,n){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var s;e=a.get(e+d);for(var C=0,B=e.length;C<B;C++)try{s=e[C],(f===r||f>s.priority)&&-1!=s.restrict.indexOf(g)&&(p&&(s=Rb(s,{$$start:p,$$end:n})),b.push(s),k=s)}catch(y){m(y)}}return k}function fc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;
q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(W(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function z(a,b,c,d,e,g,f,l){var k=[],m,s,C=b[0],B=a.shift(),y=x({},B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),P=A(B.templateUrl)?B.templateUrl(b,
c):B.templateUrl;b.html("");n.get(u.getTrustedResourceUrl(P),{cache:p}).success(function(p){var n,K;p=hc(p);if(B.replace){p=w("<div>"+ba(p)+"</div>").contents();n=p[0];if(1!=p.length||1!==n.nodeType)throw ia("tplrt",B.name,P);p={$attr:{}};S(d,b,n);var W=Z(n,[],p);V(B.scope)&&T(W);a=W.concat(a);fc(c,p)}else n=C,b.html(p);a.unshift(y);m=M(a,n,c,e,b,B,g,f,l);q(d,function(a,c){a==n&&(d[c]=b[0])});for(s=R(b[0].childNodes,e);k.length;){p=k.shift();K=k.shift();var u=k.shift(),Q=k.shift(),W=b[0];K!==C&&(W=
zb(n),S(u,w(K),W));K=m.transclude?$(p,m.transclude):Q;m(s,p,W,d,K)}k=null}).error(function(a,b,c,d){throw ia("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):m(s,b,c,d,e)}}function v(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function H(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,ha(d));}function t(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:ca(function(a,b){var c=b.parent(),e=c.data("$binding")||
[];e.push(d);W(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function G(a,b){if("srcdoc"==b)return u.HTML;var c=Fa(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return u.RESOURCE_URL}function I(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===Fa(a))throw ia("selmulti",ha(a));c.push({priority:100,compile:function(){return{pre:function(c,d,l){d=l.$$observers||(l.$$observers={});if(f.test(e))throw ia("nodomevents");if(g=b(l[e],
!0,G(a,e)))l[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(g,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)})}}}})}}function S(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,l;if(a)for(f=0,l=a.length;f<l;f++)if(a[f]==d){a[f++]=c;l=f+e-1;for(var k=a.length;f<k;f++,l++)l<k?a[f]=a[l]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=N.createDocumentFragment();a.appendChild(d);c[w.expando]=d[w.expando];d=1;for(e=b.length;d<e;d++)g=b[d],
w(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function U(a,b){return x(function(){return a.apply(null,arguments)},a,b)}var Eb=function(a,b){this.$$element=a;this.$attr=b||{}};Eb.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&P.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&P.removeClass(this.$$element,a)},$updateClass:function(a,b){this.$removeClass(ic(b,a));this.$addClass(ic(a,b))},$set:function(a,b,c,d){var e=cc(this.$$element[0],a);e&&(this.$$element.prop(a,
b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=cb(a,"-"));e=Fa(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=Q(b,"src"===a);!1!==c&&(null===b||b===r?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);B.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var ea=b.startSymbol(),Ga=
b.endSymbol(),hc="{{"==ea||"}}"==Ga?Aa:function(a){return a.replace(/\{\{/g,ea).replace(/}}/g,Ga)},wa=/^ngAttr[A-Z]/;return y}]}function ma(b){return Pa(b.replace(gd,""))}function ic(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],h=0;h<e.length;h++)if(f==e[h])continue a;c+=(0<c.length?" ":"")+f}return c}function hd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){va(a,"controller");V(a)?x(b,a):b[a]=d};this.$get=["$injector","$window",function(c,
d){return function(e,g){var f,h,l;D(e)&&(f=e.match(a),h=f[1],l=f[3],e=b.hasOwnProperty(h)?b[h]:ub(g.$scope,h,!0)||ub(d,h,!0),Oa(e,h,!0));f=c.instantiate(e,g);if(l){if(!g||"object"!=typeof g.$scope)throw G("$controller")("noscp",h||e.name,l);g.$scope[l]=f}return f}}]}function id(){this.$get=["$window",function(b){return w(b.document)}]}function jd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function jc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=
b.indexOf(":");c=t(ba(b.substr(0,e)));d=ba(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function kc(b){var a=V(b)?b:r;return function(c){a||(a=jc(b));return c?a[t(c)]||null:a}}function lc(b,a,c){if(A(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function kd(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){D(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Tb(d)));return d}],
transformRequest:[function(a){return V(a)&&"[object File]"!==Za.apply(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:d,put:d,patch:d},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function s(a){function c(a){var b=x({},a,{data:lc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?
b:n.reject(b)}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},g=function(a){function b(a){var c;q(a,function(b,d){A(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=x({},a.headers),g,h,c=x({},c.common,c[t(a.method)]);b(c);b(d);a:for(g in c){a=t(g);for(h in d)if(t(h)===a)continue a;d[g]=c[g]}return d}(a);x(d,a);d.headers=g;d.method=Ha(d.method);(a=Fb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:r)&&(g[d.xsrfHeaderName||e.xsrfHeaderName]=a);var h=
[function(a){g=a.headers;var b=lc(a.data,kc(g),a.transformRequest);H(a.data)&&q(g,function(a,b){"content-type"===t(b)&&delete g[b]});H(a.withCredentials)&&!H(e.withCredentials)&&(a.withCredentials=e.withCredentials);return C(a,b,g).then(c,c)},r],f=n.when(d);for(q(u,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&h.push(a.response,a.responseError)});h.length;){a=h.shift();var k=h.shift(),f=f.then(a,k)}f.success=function(a){f.then(function(b){a(b.data,
b.status,b.headers,d)});return f};f.error=function(a){f.then(null,function(b){a(b.data,b.status,b.headers,d)});return f};return f}function C(b,c,g){function f(a,b,c){q&&(200<=a&&300>a?q.put(r,[a,b,jc(c)]):q.remove(r));l(b,a,c);d.$$phase||d.$apply()}function l(a,c,d){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:kc(d),config:b})}function k(){var a=ab(s.pendingRequests,b);-1!==a&&s.pendingRequests.splice(a,1)}var p=n.defer(),C=p.promise,q,u,r=B(b.url,b.params);s.pendingRequests.push(b);
C.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(q=V(b.cache)?b.cache:V(e.cache)?e.cache:K);if(q)if(u=q.get(r),z(u)){if(u.then)return u.then(k,k),u;L(u)?l(u[1],u[0],ga(u[2])):l(u,200,{})}else q.put(r,C);H(u)&&a(b.method,r,c,f,g,b.timeout,b.withCredentials,b.responseType);return C}function B(a,b){if(!b)return a;var c=[];Mc(b,function(a,b){null===a||H(a)||(L(a)||(a=[a]),q(a,function(a){V(a)&&(a=oa(a));c.push(ua(b)+"="+ua(a))}))});return a+(-1==a.indexOf("?")?"?":"&")+c.join("&")}var K=
c("$http"),u=[];q(g,function(a){u.unshift(D(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=D(a)?p.get(a):p.invoke(a);u.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});s.pendingRequests=[];(function(a){q(arguments,function(a){s[a]=function(b,c){return s(x(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){s[a]=function(b,c,d){return s(x(d||{},{method:a,url:b,data:c}))}})})("post","put");s.defaults=
e;return s}]}function ld(){this.$get=["$browser","$window","$document",function(b,a,c){return md(b,nd,b.defer,a.angular.callbacks,c[0])}]}function md(b,a,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;E&&8>=E?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var f=-1;return function(e,
l,k,m,n,p,s,C){function B(){u=f;r&&r();y&&y.abort()}function K(a,d,e,g){var f=xa(l).protocol;W&&c.cancel(W);r=y=null;d="file"==f&&0===d?e?200:404:d;a(1223==d?204:d,e,g);b.$$completeOutstandingRequest(v)}var u;b.$$incOutstandingRequestCount();l=l||b.url();if("jsonp"==t(e)){var P="_"+(d.counter++).toString(36);d[P]=function(a){d[P].data=a};var r=g(l.replace("JSON_CALLBACK","angular.callbacks."+P),function(){d[P].data?K(m,200,d[P].data):K(m,u||-2);delete d[P]})}else{var y=new a;y.open(e,l,!0);q(n,function(a,
b){z(a)&&y.setRequestHeader(b,a)});y.onreadystatechange=function(){if(4==y.readyState){var a=null,b=null;u!==f&&(a=y.getAllResponseHeaders(),b=y.responseType?y.response:y.responseText);K(m,u||y.status,b,a)}};s&&(y.withCredentials=!0);C&&(y.responseType=C);y.send(k||null)}if(0<p)var W=c(B,p);else p&&p.then&&p.then(B)}}function od(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,
d,e){function g(g,k,m){for(var n,p,s=0,C=[],B=g.length,K=!1,u=[];s<B;)-1!=(n=g.indexOf(b,s))&&-1!=(p=g.indexOf(a,n+f))?(s!=n&&C.push(g.substring(s,n)),C.push(s=c(K=g.substring(n+f,p))),s.exp=K,s=p+h,K=!0):(s!=B&&C.push(g.substring(s)),s=B);(B=C.length)||(C.push(""),B=1);if(m&&1<C.length)throw mc("noconcat",g);if(!k||K)return u.length=B,s=function(a){try{for(var b=0,c=B,f;b<c;b++)"function"==typeof(f=C[b])&&(f=f(a),f=m?e.getTrusted(m,f):e.valueOf(f),null===f||H(f)?f="":"string"!=typeof f&&(f=oa(f))),
u[b]=f;return u.join("")}catch(h){a=mc("interr",g,h.toString()),d(a)}},s.exp=g,s.parts=C,s}var f=b.length,h=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function pd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,f,h,l){var k=a.setInterval,m=a.clearInterval,n=c.defer(),p=n.promise,s=0,C=z(l)&&!l;h=z(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(s++);0<h&&s>=h&&(n.resolve(s),m(p.$$intervalId),delete e[p.$$intervalId]);
C||b.$apply()},f);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function qd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",
gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",
mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function nc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=sb(b[a]);return b.join("/")}function oc(b,a,c){b=xa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=S(b.port)||rd[b.protocol]||null}function pc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=xa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Vb(b.search);a.$$hash=decodeURIComponent(b.hash);
a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function na(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Va(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Gb(b){return b.substr(0,Va(b).lastIndexOf("/")+1)}function qc(b,a){this.$$html5=!0;a=a||"";var c=Gb(b);oc(b,this,b);this.$$parse=function(a){var e=na(c,a);if(!D(e))throw Hb("ipthprfx",a,c);pc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Wb(this.$$search),b=this.$$hash?
"#"+sb(this.$$hash):"";this.$$url=nc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=na(b,d))!==r)return d=e,(e=na(a,e))!==r?c+(na("/",e)||e):b+d;if((e=na(c,d))!==r)return c+e;if(c==d+"/")return c}}function Ib(b,a){var c=Gb(b);oc(b,this,b);this.$$parse=function(d){var e=na(b,d)||na(c,d),e="#"==e.charAt(0)?na(a,e):this.$$html5?e:"";if(!D(e))throw Hb("ihshprfx",d,a);pc(e,this,b);d=this.$$path;var g=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,
""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Wb(this.$$search),e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=nc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Va(b)==Va(a))return a}}function rc(b,a){this.$$html5=!0;Ib.apply(this,arguments);var c=Gb(b);this.$$rewrite=function(d){var e;if(b==Va(d))return d;if(e=na(c,d))return b+a+e;if(c===d+"/")return c}}function hb(b){return function(){return this[b]}}
function sc(b,a){return function(c){if(H(c))return this[b];this[b]=a(c);this.$$compose();return this}}function sd(){var b="",a=!1;this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return z(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,l=d.baseHref(),k=d.url();a?(l=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(l||"/"),e=e.history?qc:rc):(l=Va(k),
e=Ib);h=new e(l,"#"+b);h.$$parse(h.$$rewrite(k));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=w(a.target);"a"!==t(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;var e=b.prop("href"),f=h.$$rewrite(e);e&&(!b.attr("target")&&f&&!a.isDefaultPrevented())&&(a.preventDefault(),f!=d.url()&&(h.$$parse(f),c.$apply(),Y.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$broadcast("$locationChangeStart",
a,h.absUrl()).defaultPrevented?d.url(h.absUrl()):(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);f(b)}),c.$$phase||c.$digest()))});var m=0;c.$watch(function(){var a=d.url(),b=h.$$replace;m&&a==h.absUrl()||(m++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),f(a))}));h.$$replace=!1;return m});return h}]}function td(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof
Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;return e.apply?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function pa(b,
a){if("constructor"===b)throw ya("isecfld",a);return b}function Wa(b,a){if(b){if(b.constructor===b)throw ya("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw ya("isecwindow",a);if(b.children&&(b.nodeName||b.on&&b.find))throw ya("isecdom",a);}return b}function ib(b,a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=pa(a.shift(),d);var h=b[g];h||(h={},b[g]=h);b=h;b.then&&e.unwrapPromises&&(qa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===r&&(b.$$v=
{}),b=b.$$v)}g=pa(a.shift(),d);return b[g]=c}function tc(b,a,c,d,e,g,f){pa(b,g);pa(a,g);pa(c,g);pa(d,g);pa(e,g);return f.unwrapPromises?function(f,l){var k=l&&l.hasOwnProperty(b)?l:f,m;if(null===k||k===r)return k;(k=k[b])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);if(!a||null===k||k===r)return k;(k=k[a])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);if(!c||null===k||k===r)return k;(k=k[c])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,
m.then(function(a){m.$$v=a})),k=k.$$v);if(!d||null===k||k===r)return k;(k=k[d])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);if(!e||null===k||k===r)return k;(k=k[e])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);return k}:function(g,f){var k=f&&f.hasOwnProperty(b)?f:g;if(null===k||k===r)return k;k=k[b];if(!a||null===k||k===r)return k;k=k[a];if(!c||null===k||k===r)return k;k=k[c];if(!d||null===k||k===r)return k;k=k[d];return e&&null!==
k&&k!==r?k=k[e]:k}}function uc(b,a,c){if(Jb.hasOwnProperty(b))return Jb[b];var d=b.split("."),e=d.length,g;if(a.csp)g=6>e?tc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,h;do h=tc(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=r,b=h;while(f<e);return h};else{var f="var l, fn, p;\n";q(d,function(b,d){pa(b,c);f+="if(s === null || s === undefined) return s;\nl=s;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,
"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var f=f+"return s;",h=new Function("s","k","pw",f);h.toString=function(){return f};g=function(a,b){return h(a,b,qa)}}"hasOwnProperty"!==b&&(Jb[b]=g);return g}function ud(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return z(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return z(b)?(a.logPromiseWarnings=
b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;qa=function(b){a.logPromiseWarnings&&!vc.hasOwnProperty(b)&&(vc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Kb(a);e=(new Xa(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return v}}}]}
function vd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return wd(function(a){b.$evalAsync(a)},a)}]}function wd(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var h=[],l,k;return k={resolve:function(a){if(h){var c=h;h=r;l=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],l.then(a[0],a[1],a[2])})}},reject:function(a){k.resolve(f(a))},notify:function(a){if(h){var c=h;h.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},
promise:{then:function(b,f,g){var k=e(),C=function(d){try{k.resolve((A(b)?b:c)(d))}catch(e){k.reject(e),a(e)}},B=function(b){try{k.resolve((A(f)?f:d)(b))}catch(c){k.reject(c),a(c)}},K=function(b){try{k.notify((A(g)?g:c)(b))}catch(d){a(d)}};h?h.push([C,B,K]):l.then(C,B,K);return k.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&
A(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&A(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(c){return{then:function(f,g){var m=e();b(function(){try{m.resolve((A(g)?g:d)(c))}catch(b){m.reject(b),a(b)}});return m.promise}}};return{defer:e,reject:f,when:function(h,l,k,m){var n=e(),p,s=function(b){try{return(A(l)?
l:c)(b)}catch(d){return a(d),f(d)}},C=function(b){try{return(A(k)?k:d)(b)}catch(c){return a(c),f(c)}},B=function(b){try{return(A(m)?m:c)(b)}catch(d){a(d)}};b(function(){g(h).then(function(a){p||(p=!0,n.resolve(g(a).then(s,C,B)))},function(a){p||(p=!0,n.resolve(C(a)))},function(a){p||n.notify(B(a))})});return n.promise},all:function(a){var b=e(),c=0,d=L(a)?[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});
0===c&&b.resolve(d);return b.promise}}}function xd(){var b=10,a=G("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,g,f){function h(){this.$id=Ya();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$isolateBindings=
{}}function l(b){if(n.$$phase)throw a("inprog",n.$$phase);n.$$phase=b}function k(a,b){var c=g(a);Oa(c,b);return c}function m(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=Ya());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=
this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),f=this.$$watchers,g={fn:b,last:m,get:e,exp:a,eq:!!d};c=null;if(!A(b)){var h=k(b||v,"listener");g.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var l=g.fn;g.fn=function(a,b,c){l.call(this,a,b,c);La(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){La(f,g)}},$watchCollection:function(a,b){var c=this,d,e,f=0,h=g(a),k=[],l={},m=0;return this.$watch(function(){e=
h(c);var a,b;if(V(e))if(pb(e))for(d!==k&&(d=k,m=d.length=0,f++),a=e.length,m!==a&&(f++,d.length=m=a),b=0;b<a;b++)d[b]!==e[b]&&(f++,d[b]=e[b]);else{d!==l&&(d=l={},m=0,f++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==e[b]&&(f++,d[b]=e[b]):(m++,d[b]=e[b],f++));if(m>a)for(b in f++,d)d.hasOwnProperty(b)&&!e.hasOwnProperty(b)&&(m--,delete d[b])}else d!==e&&(d=e,f++);return f},function(){b(e,d,c)})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,q=this.$$postDigestQueue,r,t,y=
b,v,w=[],z,Z,aa;l("$digest");c=null;do{t=!1;for(v=this;k.length;){try{aa=k.shift(),aa.scope.$eval(aa.expression)}catch(O){n.$$phase=null,e(O)}c=null}a:do{if(h=v.$$watchers)for(r=h.length;r--;)try{if(d=h[r])if((f=d.get(v))!==(g=d.last)&&!(d.eq?Ba(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))t=!0,c=d,d.last=d.eq?ga(f):f,d.fn(f,g===m?f:g,v),5>y&&(z=4-y,w[z]||(w[z]=[]),Z=A(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,Z+="; newVal: "+oa(f)+"; oldVal: "+oa(g),w[z].push(Z));else if(d===
c){t=!1;break a}}catch(M){n.$$phase=null,e(M)}if(!(h=v.$$childHead||v!==this&&v.$$nextSibling))for(;v!==this&&!(h=v.$$nextSibling);)v=v.$parent}while(v=h);if(t&&!y--)throw n.$$phase=null,a("infdig",b,oa(w));}while(t||k.length);for(n.$$phase=null;q.length;)try{q.shift()()}catch(T){e(T)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==n&&(a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),
this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){n.$$phase||n.$$asyncQueue.length||f.defer(function(){n.$$asyncQueue.length&&n.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},
$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){e(b)}finally{n.$$phase=null;try{n.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[ab(c,b)]=null}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(ta.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;h.currentScope=
f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ta.call(arguments,1)),h,k;do{c=d;f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==
this&&!(d=c.$$nextSibling);)c=c.$parent}while(c=d);return f}};var n=new h;return n}]}function yd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!E||8<=E)if(g=xa(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function zd(b){if("self"===b)return b;if(D(b)){if(-1<
b.indexOf("***"))throw ra("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if($a(b))return RegExp("^"+b.source+"$");throw ra("imatcher");}function wc(b){var a=[];z(b)&&q(b,function(b){a.push(zd(b))});return a}function Ad(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=wc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&
(a=wc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ra("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var g=d(),f={};f[fa.HTML]=d(g);f[fa.CSS]=d(g);f[fa.URL]=d(g);f[fa.JS]=d(g);f[fa.RESOURCE_URL]=d(f[fa.URL]);
return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||b===r||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===r||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var g=xa(d.toString()),m,n,p=!1;m=0;for(n=b.length;m<n;m++)if("self"===b[m]?Fb(g):b[m].exec(g.href)){p=!0;break}if(p)for(m=0,n=a.length;m<
n;m++)if("self"===a[m]?Fb(g):a[m].exec(g.href)){p=!1;break}if(p)return d;throw ra("insecurl",d.toString());}if(c===fa.HTML)return e(d);throw ra("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Bd(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ra("iequirks");var e=ga(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=
d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Aa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var g=e.parseAs,f=e.getTrusted,h=e.trustAs;q(fa,function(a,b){var c=t(b);e[Pa("parse_as_"+c)]=function(b){return g(a,b)};e[Pa("get_trusted_"+c)]=function(b){return f(a,b)};e[Pa("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function Cd(){this.$get=["$window","$document",function(b,
a){var c={},d=S((/android (\d+)/.exec(t((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),g=a[0]||{},f=g.documentMode,h,l=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=g.body&&g.body.style,m=!1,n=!1;if(k){for(var p in k)if(m=l.exec(p)){h=m[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");m=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||m&&n||(m=D(g.body.style.webkitTransition),n=D(g.body.style.webkitAnimation))}return{history:!(!b.history||
!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<f),hasEvent:function(a){if("input"==a&&9==E)return!1;if(H(c[a])){var b=g.createElement("div");c[a]="on"+a in b}return c[a]},csp:Sb(),vendorPrefix:h,transitions:m,animations:n,msie:E,msieDocumentMode:f}}]}function Dd(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,l){var k=c.defer(),m=k.promise,n=z(l)&&!l;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete g[m.$$timeoutId]}n||
b.$apply()},h);m.$$timeoutId=h;g[h]=k;return m}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function xa(b,a){var c=b;E&&(U.setAttribute("href",c),c=U.href);U.setAttribute("href",c);return{href:U.href,protocol:U.protocol?U.protocol.replace(/:$/,""):"",host:U.host,search:U.search?U.search.replace(/^\?/,""):"",hash:U.hash?U.hash.replace(/^#/,""):"",hostname:U.hostname,port:U.port,
pathname:"/"===U.pathname.charAt(0)?U.pathname:"/"+U.pathname}}function Fb(b){b=D(b)?xa(b):b;return b.protocol===xc.protocol&&b.host===xc.host}function Ed(){this.$get=ca(Y)}function yc(b){function a(d,e){if(V(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",zc);a("date",Ac);a("filter",Fd);a("json",Gd);a("limitTo",Hd);a("lowercase",Id);a("number",Bc);a("orderBy",
Cc);a("uppercase",Jd)}function Fd(){return function(b,a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return bb.equals(a,b)}:function(a,b){b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,
b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)"$"==f?function(){if(a[f]){var b=f;e.push(function(c){return g(c,a[b])})}}():function(){if("undefined"!=typeof a[f]){var b=f;e.push(function(c){return g(ub(c,b),a[b])})}}();break;case "function":e.push(a);break;default:return b}for(var d=[],h=
0;h<b.length;h++){var l=b[h];e.check(l)&&d.push(l)}return d}}function zc(b){var a=b.NUMBER_FORMATS;return function(b,d){H(d)&&(d=a.CURRENCY_SYM);return Dc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Bc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Dc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Dc(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=0>b;b=Math.abs(b);var f=b+"",h="",l=[],k=!1;if(-1!==f.indexOf("e")){var m=f.match(/([\d\.]+)e(-?)(\d+)/);
m&&"-"==m[2]&&m[3]>e+1?f="0":(h=f,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{f=(f.split(Ec)[1]||"").length;H(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e);b=Math.round(b*f)/f;b=(""+b).split(Ec);f=b[0];b=b[1]||"";var m=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(m=f.length-n,k=0;k<m;k++)0===(m-k)%p&&0!==k&&(h+=c),h+=f.charAt(k);for(k=m;k<f.length;k++)0===(f.length-k)%n&&0!==k&&(h+=c),h+=f.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}l.push(g?a.negPre:
a.posPre);l.push(h);l.push(g?a.negSuf:a.posSuf);return l.join("")}function Lb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function X(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Lb(e,a,d)}}function jb(b,a){return function(c,d){var e=c["get"+b](),g=Ha(a?"SHORT"+b:b);return d[g][e]}}function Ac(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var g=0,f=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
l=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=S(b[9]+b[10]),f=S(b[9]+b[11]));h.call(a,S(b[1]),S(b[2])-1,S(b[3]));g=S(b[4]||0)-g;f=S(b[5]||0)-f;h=S(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,g,f,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],h,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;D(c)&&(c=Kd.test(c)?S(c):a(c));qb(c)&&(c=new Date(c));if(!Ka(c))return c;for(;e;)(l=Ld.exec(e))?
(f=f.concat(ta.call(l,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){h=Md[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Gd(){return function(b){return oa(b,!0)}}function Hd(){return function(b,a){if(!L(b)&&!D(b))return b;a=S(a);if(D(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Cc(b){return function(a,
c,d){function e(a,b){return Na(b)?function(b,c){return a(c,b)}:a}if(!L(a)||!c)return a;c=L(c)?c:[c];c=Oc(c,function(a){var c=!1,d=a||Aa;if(D(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?("string"==f&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)});for(var g=[],f=0;f<a.length;f++)g.push(a[f]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=
c[d](a,b);if(0!==e)return e}return 0},d))}}function sa(b){A(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function Fc(b,a){function c(a,c){c=c?"-"+cb(c,"-"):"";b.removeClass((a?kb:lb)+c).addClass((a?lb:kb)+c)}var d=this,e=b.parent().controller("form")||mb,g=0,f=d.$error={},h=[];d.$name=a.name||a.ngForm;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Ia);c(!0);d.$addControl=function(a){va(a.$name,"input");h.push(a);a.$name&&(d[a.$name]=a)};d.$removeControl=
function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];q(f,function(b,c){d.$setValidity(c,!0,a)});La(h,a)};d.$setValidity=function(a,b,h){var n=f[a];if(b)n&&(La(n,h),n.length||(g--,g||(c(b),d.$valid=!0,d.$invalid=!1),f[a]=!1,c(!0,a),e.$setValidity(a,!0,d)));else{g||c(b);if(n){if(-1!=ab(n,h))return}else f[a]=n=[],g++,c(!1,a),e.$setValidity(a,!1,d);n.push(h);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Ia).addClass(nb);d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(nb).addClass(Ia);
d.$dirty=!1;d.$pristine=!0;q(h,function(a){a.$setPristine()})}}function ob(b,a,c,d,e,g){var f=!1;a.on("compositionstart",function(){f=!0});a.on("compositionend",function(){f=!1});var h=function(){if(!f){var e=a.val();Na(c.ngTrim||"T")&&(e=ba(e));d.$viewValue!==e&&b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",h);else{var l,k=function(){l||(l=g.defer(function(){h();l=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||k()});if(e.hasEvent("paste"))a.on("paste cut",
k)}a.on("change",h);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var m=c.ngPattern,n=function(a,b){if(d.$isEmpty(b)||a.test(b))return d.$setValidity("pattern",!0),b;d.$setValidity("pattern",!1);return r};m&&((e=m.match(/^\/(.*)\/([gim]*)$/))?(m=RegExp(e[1],e[2]),e=function(a){return n(m,a)}):e=function(c){var d=b.$eval(m);if(!d||!d.test)throw G("ngPattern")("noregexp",m,d,ha(a));return n(d,c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var p=S(c.ngMinlength);
e=function(a){if(!d.$isEmpty(a)&&a.length<p)return d.$setValidity("minlength",!1),r;d.$setValidity("minlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var s=S(c.ngMaxlength);e=function(a){if(!d.$isEmpty(a)&&a.length>s)return d.$setValidity("maxlength",!1),r;d.$setValidity("maxlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}}function Mb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function g(b){if(!0===a||c.$index%2===
a){var d=f(b||"");h?Ba(b,h)||e.$updateClass(d,f(h)):e.$addClass(d)}h=ga(b)}function f(a){if(L(a))return a.join(" ");if(V(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var h;c.$watch(e[b],g,!0);e.$observe("class",function(a){g(c.$eval(e[b]))});"ngClass"!==b&&c.$watch("$index",function(d,g){var h=d&1;if(h!==g&1){var n=f(c.$eval(e[b]));h===a?e.$addClass(n):e.$removeClass(n)}})}}}}var t=function(b){return D(b)?b.toLowerCase():b},Ha=function(b){return D(b)?b.toUpperCase():b},
E,w,Ca,ta=[].slice,Nd=[].push,Za=Object.prototype.toString,Ma=G("ng"),bb=Y.angular||(Y.angular={}),Ua,Fa,ja=["0","0","0"];E=S((/msie (\d+)/.exec(t(navigator.userAgent))||[])[1]);isNaN(E)&&(E=S((/trident\/.*; rv:(\d+)/.exec(t(navigator.userAgent))||[])[1]));v.$inject=[];Aa.$inject=[];var ba=function(){return String.prototype.trim?function(b){return D(b)?b.trim():b}:function(b){return D(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Fa=9>E?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=
b.scopeName?Ha(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Sc=/[A-Z]/g,Od={full:"1.2.4",major:1,minor:2,dot:4,codeName:"wormhole-baster"},Ra=I.cache={},db=I.expando="ng-"+(new Date).getTime(),Wc=1,Gc=Y.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Ab=Y.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},Uc=/([\:\-\_]+(.))/g,
Vc=/^moz([A-Z])/,xb=G("jqLite"),Ea=I.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===N.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),I(Y).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?w(this[b]):w(this[this.length+b])},length:0,push:Nd,sort:[].sort,splice:[].splice},fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){fb[t(b)]=b});var dc=
{};q("input select option textarea button form details".split(" "),function(b){dc[Ha(b)]=!0});q({data:ac,inheritedData:eb,scope:function(b){return w(b).data("$scope")||eb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return w(b).data("$isolateScope")||w(b).data("$isolateScopeNoTemplate")},controller:bc,injector:function(b){return eb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Bb,css:function(b,a,c){a=Pa(a);if(z(c))b.style[a]=c;else{var d;8>=E&&(d=
b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=E&&(d=""===d?r:d);return d}},attr:function(b,a,c){var d=t(a);if(fb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:r;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?r:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(H(d))return e?
b[e]:"";b[e]=d}var a=[];9>E?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(H(a)){if("SELECT"===Fa(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(H(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Qa(d[c]);b.innerHTML=a}},function(b,a){I.prototype[a]=function(a,d){var e,g;if((2==b.length&&b!==Bb&&b!==bc?a:d)===r){if(V(a)){for(e=
0;e<this.length;e++)if(b===ac)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;g=e===r?Math.min(this.length,1):this.length;for(var f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:Zb,dealoc:Qa,on:function a(c,d,e,g){if(z(g))throw xb("onargs");var f=ka(c,"events"),h=ka(c,"handle");f||ka(c,"events",f={});h||ka(c,"handle",h=Xc(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==d||"mouseleave"==
d){var m=N.body.contains||N.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||m(this,c))||h(a,d)})}else Gc(c,d,h),f[d]=[];g=f[d]}g.push(e)})},off:$b,
replaceWith:function(a,c){var d,e=a.parentNode;Qa(a);q(new I(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.childNodes||[]},append:function(a,c){q(new I(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new I(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=
w(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Qa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new I(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:Db,removeClass:Cb,toggleClass:function(a,c,d){H(d)&&(d=!Bb(a,c));(d?Db:Cb)(a,c)},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=
a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:zb,triggerHandler:function(a,c,d){c=(ka(a,"events")||{})[c];d=d||[];var e=[{preventDefault:v,stopPropagation:v}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){I.prototype[c]=function(c,e,g){for(var f,h=0;h<this.length;h++)H(f)?(f=a(this[h],c,e,g),z(f)&&(f=w(f))):yb(f,a(this[h],c,e,g));return z(f)?f:this};I.prototype.bind=I.prototype.on;I.prototype.unbind=I.prototype.off});Sa.prototype=
{put:function(a,c){this[Da(a)]=c},get:function(a){return this[Da(a)]},remove:function(a){var c=this[a=Da(a)];delete this[a];return c}};var Zc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,$c=/,/,ad=/^\s*(_?)(\S+?)\1\s*$/,Yc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ta=G("$injector"),Pd=G("$animate"),Qd=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Pd("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.$get=["$timeout",function(a){return{enter:function(d,
e,g,f){g?g.after(d):(e&&e[0]||(e=g.parent()),e.append(d));f&&a(f,0,!1)},leave:function(d,e){d.remove();e&&a(e,0,!1)},move:function(a,c,g,f){this.enter(a,c,g,f)},addClass:function(d,e,g){e=D(e)?e:L(e)?e.join(" "):"";q(d,function(a){Db(a,e)});g&&a(g,0,!1)},removeClass:function(d,e,g){e=D(e)?e:L(e)?e.join(" "):"";q(d,function(a){Cb(a,e)});g&&a(g,0,!1)},enabled:v}}]}],ia=G("$compile");gc.$inject=["$provide","$$sanitizeUriProvider"];var gd=/^(x[\:\-_]|data[\:\-_])/i,nd=Y.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw G("$httpBackend")("noxhr");
},mc=G("$interpolate"),Rd=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,rd={http:80,https:443,ftp:21},Hb=G("$location");rc.prototype=Ib.prototype=qc.prototype={$$html5:!1,$$replace:!1,absUrl:hb("$$absUrl"),url:function(a,c){if(H(a))return this.$$url;var d=Rd.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:hb("$$protocol"),host:hb("$$host"),port:hb("$$port"),path:sc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,
c){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a))this.$$search=Vb(a);else if(V(a))this.$$search=a;else throw Hb("isrcharg");break;default:H(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:sc("$$hash",Aa),replace:function(){this.$$replace=!0;return this}};var ya=G("$parse"),vc={},qa,Ja={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:v,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return z(d)?
z(e)?d+e:d:z(e)?e:r},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(z(d)?d:0)-(z(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":v,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},
">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Sd={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Kb=function(a){this.options=a};Kb.prototype={constructor:Kb,lex:function(a){this.text=a;
this.index=0;this.ch=r;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&
this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),g=Ja[this.ch],f=Ja[d],h=Ja[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):f?(this.tokens.push({index:this.index,text:d,fn:f}),this.index+=2):g?(this.tokens.push({index:this.index,text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",
this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ya("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=t(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(g=this.index;g<this.text.length;){h=this.text.charAt(g);if("("===h){f=c.substr(e-d+1);c=c.substr(0,
e-d);this.index=g;break}if(this.isWhitespace(h))g++;else break}d={index:d,text:c};if(Ja.hasOwnProperty(c))d.fn=Ja[c],d.json=Ja[c];else{var l=uc(c,this.options,this.text);d.fn=x(function(a,c){return l(a,c)},{assign:function(d,e){return ib(d,c,e,a.text,a.options)}})}this.tokens.push(d);f&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:f,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),
e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Sd[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=f}this.index++}this.throwError("Unterminated quote",c)}};var Xa=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Xa.ZERO=function(){return 0};
Xa.prototype={constructor:Xa,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),
this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ya("syntax",c.text,a,c.index+1,this.text,
this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ya("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},
unaryFn:function(a,c){return x(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return x(function(e,g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return x(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=
0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,h){h=[h];for(var l=0;l<d.length;l++)h.push(d[l](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,
c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+",
"-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Xa.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=uc(d,this.options,this.text);return x(function(c,d,h){return e(h||
a(c,d),d)},{assign:function(e,f,h){return ib(a(e,h),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return x(function(e,g){var f=a(e,g),h=d(e,g),l;if(!f)return r;(f=Wa(f[h],c.text))&&(f.then&&c.options.unwrapPromises)&&(l=f,"$$v"in f||(l.$$v=r,l.then(function(a){l.$$v=a})),f=f.$$v);return f},{assign:function(e,g,f){var h=d(e,f);return Wa(a(e,f),c.text)[h]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var h=[],l=c?c(g,f):g,k=0;k<d.length;k++)h.push(d[k](g,f));k=a(g,f,l)||v;Wa(l,e.text);Wa(k,e.text);h=k.apply?k.apply(l,h):k(h[0],h[1],h[2],h[3],h[4]);return Wa(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return x(function(c,d){for(var f=[],h=0;h<a.length;h++)f.push(a[h](c,d));return f},
{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return x(function(c,d){for(var e={},l=0;l<a.length;l++){var k=a[l];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Jb={},ra=G("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},U=N.createElement("a"),
xc=xa(Y.location.href,!0);yc.$inject=["$provide"];zc.$inject=["$locale"];Bc.$inject=["$locale"];var Ec=".",Md={yyyy:X("FullYear",4),yy:X("FullYear",2,0,!0),y:X("FullYear",1),MMMM:jb("Month"),MMM:jb("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:jb("Day"),EEE:jb("Day",!0),a:function(a,c){return 12>a.getHours()?
c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Lb(Math[0<a?"floor":"ceil"](a/60),2)+Lb(Math.abs(a%60),2))}},Ld=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Kd=/^\-?\d+$/;Ac.$inject=["$locale"];var Id=ca(t),Jd=ca(Ha);Cc.$inject=["$parse"];var Td=ca({restrict:"E",compile:function(a,c){8>=E&&(c.href||c.name||c.$set("href",""),a.append(N.createComment("IE fix")));return function(a,c){c.on("click",function(a){c.attr("href")||a.preventDefault()})}}}),
Nb={};q(fb,function(a,c){if("multiple"!=a){var d=ma("ng-"+c);Nb[d]=function(){return{priority:100,compile:function(){return function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}}});q(["src","srcset","href"],function(a){var c=ma("ng-"+a);Nb[c]=function(){return{priority:99,link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(a,c),E&&e.prop(a,g[a]))})}}}});var mb={$addControl:v,$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v};Fc.$inject=["$element","$attrs","$scope"];var Hc=function(a){return["$timeout",
function(c){return{name:"form",restrict:a?"EAC":"E",controller:Fc,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Gc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Ab(e[0],"submit",h)},0,!1)})}var l=e.parent().controller("form"),k=g.name||g.ngForm;k&&ib(a,k,f,k);if(l)e.on("$destroy",function(){l.$removeControl(f);k&&ib(a,k,r,k);x(f,mb)})}}}}}]},Ud=Hc(),Vd=Hc(!0),Wd=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Xd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,Yd=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Ic={text:ob,number:function(a,c,d,e,g,f){ob(a,c,d,e,g,f);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Yd.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return r});e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);if(!e.$isEmpty(a)&&a<c)return e.$setValidity("min",!1),r;e.$setValidity("min",
!0);return a},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);if(!e.$isEmpty(a)&&a>c)return e.$setValidity("max",!1),r;e.$setValidity("max",!0);return a},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){if(e.$isEmpty(a)||qb(a))return e.$setValidity("number",!0),a;e.$setValidity("number",!1);return r})},url:function(a,c,d,e,g,f){ob(a,c,d,e,g,f);a=function(a){if(e.$isEmpty(a)||Wd.test(a))return e.$setValidity("url",!0),a;e.$setValidity("url",
!1);return r};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){ob(a,c,d,e,g,f);a=function(a){if(e.$isEmpty(a)||Xd.test(a))return e.$setValidity("email",!0),a;e.$setValidity("email",!1);return r};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){H(d.name)&&c.attr("name",Ya());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,
c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;D(g)||(g=!0);D(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:f})},hidden:v,button:v,submit:v,reset:v},Jc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,f){f&&(Ic[t(g.type)]||Ic.text)(d,e,g,f,c,a)}}}],
lb="ng-valid",kb="ng-invalid",Ia="ng-pristine",nb="ng-dirty",Zd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function f(a,c){c=c?"-"+cb(c,"-"):"";e.removeClass((a?kb:lb)+c).addClass((a?lb:kb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var h=g(d.ngModel),l=h.assign;if(!l)throw G("ngModel")("nonassign",d.ngModel,ha(e));
this.$render=v;this.$isEmpty=function(a){return H(a)||""===a||null===a||a!==a};var k=e.inheritedData("$formController")||mb,m=0,n=this.$error={};e.addClass(Ia);f(!0);this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&m--,m||(f(!0),this.$valid=!0,this.$invalid=!1)):(f(!1),this.$invalid=!0,this.$valid=!1,m++),n[a]=!c,f(c,a),k.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(nb).addClass(Ia)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&
(this.$dirty=!0,this.$pristine=!1,e.removeClass(Ia).addClass(nb),k.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,l(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=h(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=c,p.$render())}return c})}],$d=function(){return{require:["ngModel","^?form"],controller:Zd,link:function(a,
c,d,e){var g=e[0],f=e[1]||mb;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},ae=ca({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},
be=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!H(a)){var c=[];a&&q(a.split(g),function(a){a&&c.push(ba(a))});return c}});e.$formatters.push(function(a){return L(a)?a.join(", "):r});e.$isEmpty=function(a){return!a||!a.length}}}},ce=/^(true|false|\d+)$/,de=function(){return{priority:100,compile:function(a,c){return ce.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,
c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},ee=sa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==r?"":a)})}),fe=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],ge=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",g.ngBindHtml);var f=c(g.ngBindHtml);
d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],he=Mb("",!0),ie=Mb("Odd",0),je=Mb("Even",1),ke=sa({compile:function(a,c){c.$set("ngCloak",r);a.removeClass("ng-cloak")}}),le=[function(){return{scope:!0,controller:"@",priority:500}}],Lc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ma("ng-"+a);Lc[c]=["$parse",function(d){return{compile:function(e,
g){var f=d(g[c]);return function(c,d,e){d.on(t(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var me=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,g,f){var h,l;c.$watch(e.ngIf,function(g){Na(g)?l||(l=c.$new(),f(l,function(c){c[c.length++]=N.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(l&&(l.$destroy(),l=null),h&&(a.leave(vb(h.clone)),h=null))})}}}],ne=["$http","$templateCache",
"$anchorScroll","$compile","$animate","$sce",function(a,c,d,e,g,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",compile:function(h,l){var k=l.ngInclude||l.src,m=l.onload||"",n=l.autoscroll;return function(h,l,q,r,t){var u=0,w,Q,y=function(){w&&(w.$destroy(),w=null);Q&&(g.leave(Q),Q=null)};h.$watch(f.parseAsResourceUrl(k),function(f){var k=function(){!z(n)||n&&!h.$eval(n)||d()},q=++u;f?(a.get(f,{cache:c}).success(function(a){if(q===u){var c=h.$new(),d=t(c,v);y();w=c;Q=d;Q.html(a);
g.enter(Q,null,l,k);e(Q.contents())(w);w.$emit("$includeContentLoaded");h.$eval(m)}}).error(function(){q===u&&y()}),h.$emit("$includeContentRequested")):y()})}}}}],oe=sa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),pe=sa({terminal:!0,priority:1E3}),qe=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,f){var h=f.count,l=f.$attr.when&&g.attr(f.$attr.when),k=f.offset||0,m=e.$eval(l)||{},n={},p=c.startSymbol(),s=c.endSymbol(),
r=/^when(Minus)?(.+)$/;q(f,function(a,c){r.test(c)&&(m[t(c.replace("when","").replace("Minus","-"))]=g.attr(f.$attr[c]))});q(m,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+s))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-k));return n[c](e,g,!0)},function(a){g.text(a)})}}}],re=["$parse","$animate",function(a,c){var d=G("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,g,f,h,l){var k=f.ngRepeat,m=k.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
n,p,s,r,v,t,u={$id:Da};if(!m)throw d("iexp",k);f=m[1];h=m[2];(m=m[4])?(n=a(m),p=function(a,c,d){t&&(u[t]=a);u[v]=c;u.$index=d;return n(e,u)}):(s=function(a,c){return Da(c)},r=function(a){return a});m=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!m)throw d("iidexp",f);v=m[3]||m[1];t=m[2];var z={};e.$watchCollection(h,function(a){var f,h,m=g[0],n,u={},H,O,M,T,D,x,G=[];if(pb(a))D=a,n=p||s;else{n=p||r;D=[];for(M in a)a.hasOwnProperty(M)&&"$"!=M.charAt(0)&&D.push(M);D.sort()}H=D.length;
h=G.length=D.length;for(f=0;f<h;f++)if(M=a===D?f:D[f],T=a[M],T=n(M,T,f),va(T,"`track by` id"),z.hasOwnProperty(T))x=z[T],delete z[T],u[T]=x,G[f]=x;else{if(u.hasOwnProperty(T))throw q(G,function(a){a&&a.scope&&(z[a.id]=a)}),d("dupes",k,T);G[f]={id:T};u[T]=!1}for(M in z)z.hasOwnProperty(M)&&(x=z[M],f=vb(x.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),x.scope.$destroy());f=0;for(h=D.length;f<h;f++){M=a===D?f:D[f];T=a[M];x=G[f];G[f-1]&&(m=G[f-1].clone[G[f-1].clone.length-1]);if(x.scope){O=x.scope;
n=m;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);x.clone[0]!=n&&c.move(vb(x.clone),null,w(m));m=x.clone[x.clone.length-1]}else O=e.$new();O[v]=T;t&&(O[t]=M);O.$index=f;O.$first=0===f;O.$last=f===H-1;O.$middle=!(O.$first||O.$last);O.$odd=!(O.$even=0===(f&1));x.scope||l(O,function(a){a[a.length++]=N.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,w(m));m=a;x.scope=O;x.clone=a;u[x.id]=x})}z=u})}}}],se=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Na(c)?"removeClass":
"addClass"](d,"ng-hide")})}}],te=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Na(c)?"addClass":"removeClass"](d,"ng-hide")})}}],ue=sa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),ve=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var f,h,l=[];c.$watch(e.ngSwitch||e.on,function(d){for(var m=0,n=l.length;m<n;m++)l[m].$destroy(),
a.leave(h[m]);h=[];l=[];if(f=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();l.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],we=sa({transclude:"element",priority:800,require:"^ngSwitch",compile:function(a,c){return function(a,e,g,f,h){f.cases["!"+c.ngSwitchWhen]=f.cases["!"+c.ngSwitchWhen]||[];f.cases["!"+c.ngSwitchWhen].push({transclude:h,element:e})}}}),xe=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,
c,d,e,g){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:g,element:c})}}),ye=sa({controller:["$element","$transclude",function(a,c){if(!c)throw G("ngTransclude")("orphan",ha(a));this.$transclude=c}],link:function(a,c,d,e){e.$transclude(function(a){c.html("");c.append(a)})}}),ze=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ae=G("ngOptions"),Be=ca({terminal:!0}),Ce=["$compile","$parse",function(a,
c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,e={$setViewValue:v};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,n;l.databound=d.ngModel;l.init=function(a,c,d){m=a;n=d};l.addOption=function(c){va(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};l.removeOption=
function(a){this.hasOption(a)&&(delete k[a],m.$viewValue==a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Da(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=v})}],link:function(e,f,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(y.parent()&&y.remove(),c.val(a),""===a&&u.prop("selected",!0)):H(a)&&u?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){y.parent()&&y.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new Sa(d.$viewValue);q(c.find("option"),function(c){c.selected=z(a.get(c.value))})};a.$watch(function(){Ba(e,d.$viewValue)||(e=ga(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,
r,t,w;t=g.$modelValue;w=s(e)||[];var B=n?Ob(w):w,H,A,J;A={};r=!1;var E,I;if(v)if(u&&L(t))for(r=new Sa([]),J=0;J<t.length;J++)A[m]=t[J],r.put(u(e,A),t[J]);else r=new Sa(t);for(J=0;H=B.length,J<H;J++){k=J;if(n){k=B[J];if("$"===k.charAt(0))continue;A[n]=k}A[m]=w[k];d=p(e,A)||"";(k=a[d])||(k=a[d]=[],c.push(d));v?d=z(r.remove(u?u(e,A):q(e,A))):(u?(d={},d[m]=t,d=u(e,d)===u(e,A)):d=t===q(e,A),r=r||d);E=l(e,A);E=z(E)?E:"";k.push({id:u?u(e,A):n?B[J]:J,label:E,selected:d})}v||(x||null===t?a[""].unshift({id:"",
label:"",selected:!r}):r||a[""].unshift({id:"?",label:"",selected:!0}));A=0;for(B=c.length;A<B;A++){d=c[A];k=a[d];y.length<=A?(t={element:G.clone().attr("label",d),label:k.label},w=[t],y.push(w),f.append(t.element)):(w=y[A],t=w[0],t.label!=d&&t.element.attr("label",t.label=d));E=null;J=0;for(H=k.length;J<H;J++)r=k[J],(d=w[J+1])?(E=d.element,d.label!==r.label&&E.text(d.label=r.label),d.id!==r.id&&E.val(d.id=r.id),E[0].selected!==r.selected&&E.prop("selected",d.selected=r.selected)):(""===r.id&&x?I=
x:(I=D.clone()).val(r.id).attr("selected",r.selected).text(r.label),w.push({element:I,label:r.label,id:r.id,selected:r.selected}),E?E.after(I):t.element.append(I),E=I);for(J++;w.length>J;)w.pop().element.remove()}for(;y.length>A;)y.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Ae("iexp",t,ha(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),s=c(k[7]),u=k[8]?c(k[8]):null,y=[[{element:f,label:""}]];x&&(a(x)(e),x.removeClass("ng-scope"),x.remove());f.html("");f.on("change",
function(){e.$apply(function(){var a,c=s(e)||[],d={},h,k,l,p,t,w,x;if(v)for(k=[],p=0,w=y.length;p<w;p++)for(a=y[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(u)for(x=0;x<c.length&&(d[m]=c[x],u(e,d)!=h);x++);else d[m]=c[h];k.push(q(e,d))}}else if(h=f.val(),"?"==h)k=r;else if(""===h)k=null;else if(u)for(x=0;x<c.length;x++){if(d[m]=c[x],u(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(l[1]){var p=l[0],
s=l[1],v=h.multiple,t=h.ngOptions,x=!1,u,D=w(N.createElement("option")),G=w(N.createElement("optgroup")),y=D.clone();l=0;for(var A=f.children(),I=A.length;l<I;l++)if(""===A[l].value){u=x=A.eq(l);break}p.init(s,x,y);if(v&&(h.required||h.ngRequired)){var E=function(a){s.$setValidity("required",!h.required||a&&a.length);return a};s.$parsers.push(E);s.$formatters.unshift(E);h.$observe("required",function(){E(s.$viewValue)})}t?n(e,f,s):v?m(e,f,s):k(e,f,s,p)}}}}],De=["$interpolate",function(a){var c={addOption:v,
removeOption:v};return{restrict:"E",priority:100,compile:function(d,e){if(H(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound?d.prop("selected",!1):m=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&m.removeOption(c);m.addOption(a)}):m.addOption(e.value);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Ee=ca({restrict:"E",terminal:!0});(Ca=Y.jQuery)?(w=
Ca,x(Ca.fn,{scope:Ea.scope,isolateScope:Ea.isolateScope,controller:Ea.controller,injector:Ea.injector,inheritedData:Ea.inheritedData}),wb("remove",!0,!0,!1),wb("empty",!1,!1,!1),wb("html",!1,!1,!0)):w=I;bb.element=w;(function(a){x(a,{bootstrap:Xb,copy:ga,extend:x,equals:Ba,element:w,forEach:q,injector:Yb,noop:v,bind:rb,toJson:oa,fromJson:Tb,identity:Aa,isUndefined:H,isDefined:z,isString:D,isFunction:A,isObject:V,isNumber:qb,isElement:Nc,isArray:L,version:Od,isDate:Ka,lowercase:t,uppercase:Ha,callbacks:{counter:0},
$$minErr:G,$$csp:Sb});Ua=Tc(Y);try{Ua("ngLocale")}catch(c){Ua("ngLocale",[]).provider("$locale",qd)}Ua("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:yd});a.provider("$compile",gc).directive({a:Td,input:Jc,textarea:Jc,form:Ud,script:ze,select:Ce,style:Ee,option:De,ngBind:ee,ngBindHtml:ge,ngBindTemplate:fe,ngClass:he,ngClassEven:je,ngClassOdd:ie,ngCloak:ke,ngController:le,ngForm:Vd,ngHide:te,ngIf:me,ngInclude:ne,ngInit:oe,ngNonBindable:pe,ngPluralize:qe,ngRepeat:re,ngShow:se,ngStyle:ue,
ngSwitch:ve,ngSwitchWhen:we,ngSwitchDefault:xe,ngOptions:Be,ngTransclude:ye,ngModel:$d,ngList:be,ngChange:ae,required:Kc,ngRequired:Kc,ngValue:de}).directive(Nb).directive(Lc);a.provider({$anchorScroll:bd,$animate:Qd,$browser:dd,$cacheFactory:ed,$controller:hd,$document:id,$exceptionHandler:jd,$filter:yc,$interpolate:od,$interval:pd,$http:kd,$httpBackend:ld,$location:sd,$log:td,$parse:ud,$rootScope:xd,$q:vd,$sce:Bd,$sceDelegate:Ad,$sniffer:Cd,$templateCache:fd,$timeout:Dd,$window:Ed})}])})(bb);w(N).ready(function(){Rc(N,
Xb)})})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-start{border-spacing:1px 1px;-ms-zoom:1.0001;}.ng-animate-active{border-spacing:0px 0px;-ms-zoom:1;}</style>');
//# sourceMappingURL=angular.min.js.map

(function() {function g(a){throw a;}var j=void 0,k=!0,l=null,o=!1;function aa(a){return function(){return this[a]}}function r(a){return function(){return a}}var s,ba=this;function ca(){}function da(a){a.mb=function(){return a.bd?a.bd:a.bd=new a}}
function ea(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function u(a){return a!==j}function fa(a){var b=ea(a);return"array"==b||"object"==b&&"number"==typeof a.length}function v(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){var b=typeof a;return"object"==b&&a!=l||"function"==b}Math.floor(2147483648*Math.random()).toString(36);function ia(a,b,c){return a.call.apply(a.bind,arguments)}
function ja(a,b,c){a||g(Error());if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return w.apply(l,arguments)}function ka(a,b){function c(){}c.prototype=b.prototype;a.Vd=b.prototype;a.prototype=new c};function la(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}g(Error("Invalid JSON string: "+a))}function ma(){this.dc=j}
function na(a,b,c){switch(typeof b){case "string":oa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==l){c.push("null");break}if("array"==ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],na(a,a.dc?a.dc.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),
oa(f,c),c.push(":"),na(a,a.dc?a.dc.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:g(Error("Unknown type: "+typeof b))}}var pa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},qa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function oa(a,b){b.push('"',a.replace(qa,function(a){if(a in pa)return pa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return pa[a]=e+b.toString(16)}),'"')};function y(a){if("undefined"!==typeof JSON&&u(JSON.stringify))a=JSON.stringify(a);else{var b=[];na(new ma,a,b);a=b.join("")}return a};function ra(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,z(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function A(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);e&&g(Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+"."))}function B(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:sa.assert(o,"errorPrefix_ called with argumentNumber > 4.  Need to update it?")}return a+" failed: "+(d+" argument ")}
function C(a,b,c,d){(!d||u(c))&&"function"!=ea(c)&&g(Error(B(a,b,d)+"must be a valid function."))}function ta(a,b,c){u(c)&&(!ha(c)||c===l)&&g(Error(B(a,b,k)+"must be a valid context object."))};function D(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function ua(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};var sa={},va=/[\[\].#$\/]/,wa=/[\[\].#$]/;function xa(a){return v(a)&&0!==a.length&&!va.test(a)}function ya(a,b,c){(!c||u(b))&&za(B(a,1,c),b)}
function za(a,b,c,d){c||(c=0);d||(d=[]);u(b)||g(Error(a+"contains undefined"+Aa(d)));"function"==ea(b)&&g(Error(a+"contains a function"+Aa(d)+" with contents: "+b.toString()));Ba(b)&&g(Error(a+"contains "+b.toString()+Aa(d)));1E3<c&&g(new TypeError(a+"contains a cyclic object value ("+d.slice(0,100).join(".")+"...)"));v(b)&&(b.length>10485760/3&&10485760<ra(b).length)&&g(Error(a+"contains a string greater than 10485760 utf8 bytes"+Aa(d)+" ('"+b.substring(0,50)+"...')"));if(ha(b))for(var e in b)D(b,
e)&&(".priority"!==e&&(".value"!==e&&".sv"!==e&&!xa(e))&&g(Error(a+"contains an invalid key ("+e+")"+Aa(d)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')),d.push(e),za(a,b[e],c+1,d),d.pop())}function Aa(a){return 0==a.length?"":" in property '"+a.join(".")+"'"}function Ca(a,b){ha(b)||g(Error(B(a,1,o)+" must be an object containing the children to replace."));ya(a,b,o)}
function Da(a,b,c,d){if(!d||u(c))c!==l&&(!ga(c)&&!v(c)&&(!ha(c)||!D(c,".sv")))&&g(Error(B(a,b,d)+"must be a valid firebase priority (a string, number, or null)."))}function Ea(a,b,c){if(!c||u(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:g(Error(B(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".'))}}
function Fa(a,b){u(b)&&!xa(b)&&g(Error(B(a,2,k)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'))}function Ga(a,b){(!v(b)||0===b.length||wa.test(b))&&g(Error(B(a,1,o)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'))}function E(a,b){".info"===F(b)&&g(Error(a+" failed: Can't modify data under /.info/"))};function H(a,b,c,d,e,f,h){this.n=a;this.path=b;this.Ba=c;this.ca=d;this.ua=e;this.za=f;this.Sa=h;u(this.ca)&&(u(this.za)&&u(this.Ba))&&g("Query: Can't combine startAt(), endAt(), and limit().")}H.prototype.Kc=function(){A("Query.ref",0,0,arguments.length);return new J(this.n,this.path)};H.prototype.ref=H.prototype.Kc;
H.prototype.Ya=function(a,b){A("Query.on",2,4,arguments.length);Ea("Query.on",a,o);C("Query.on",2,b,o);var c=Ha("Query.on",arguments[2],arguments[3]);this.n.Nb(this,a,b,c.cancel,c.T);return b};H.prototype.on=H.prototype.Ya;H.prototype.vb=function(a,b,c){A("Query.off",0,3,arguments.length);Ea("Query.off",a,k);C("Query.off",2,b,k);ta("Query.off",3,c);this.n.cc(this,a,b,c)};H.prototype.off=H.prototype.vb;
H.prototype.Id=function(a,b){function c(h){f&&(f=o,e.vb(a,c),b.call(d.T,h))}A("Query.once",2,4,arguments.length);Ea("Query.once",a,o);C("Query.once",2,b,o);var d=Ha("Query.once",arguments[2],arguments[3]),e=this,f=k;this.Ya(a,c,function(b){e.vb(a,c);d.cancel&&d.cancel.call(d.T,b)})};H.prototype.once=H.prototype.Id;
H.prototype.Bd=function(a){A("Query.limit",1,1,arguments.length);(!ga(a)||Math.floor(a)!==a||0>=a)&&g("Query.limit: First argument must be a positive integer.");return new H(this.n,this.path,a,this.ca,this.ua,this.za,this.Sa)};H.prototype.limit=H.prototype.Bd;H.prototype.Rd=function(a,b){A("Query.startAt",0,2,arguments.length);Da("Query.startAt",1,a,k);Fa("Query.startAt",b);u(a)||(b=a=l);return new H(this.n,this.path,this.Ba,a,b,this.za,this.Sa)};H.prototype.startAt=H.prototype.Rd;
H.prototype.wd=function(a,b){A("Query.endAt",0,2,arguments.length);Da("Query.endAt",1,a,k);Fa("Query.endAt",b);return new H(this.n,this.path,this.Ba,this.ca,this.ua,a,b)};H.prototype.endAt=H.prototype.wd;function Ia(a){var b={};u(a.ca)&&(b.sp=a.ca);u(a.ua)&&(b.sn=a.ua);u(a.za)&&(b.ep=a.za);u(a.Sa)&&(b.en=a.Sa);u(a.Ba)&&(b.l=a.Ba);u(a.ca)&&(u(a.ua)&&a.ca===l&&a.ua===l)&&(b.vf="l");return b}H.prototype.La=function(){var a=Ja(Ia(this));return"{}"===a?"default":a};
function Ha(a,b,c){var d={};b&&c?(d.cancel=b,C(a,3,d.cancel,k),d.T=c,ta(a,4,d.T)):b&&("object"===typeof b&&b!==l?d.T=b:"function"===typeof b?d.cancel=b:g(Error(B(a,3,k)+"must either be a cancel callback or a context object.")));return d};function K(a){if(a instanceof K)return a;if(1==arguments.length){this.m=a.split("/");for(var b=0,c=0;c<this.m.length;c++)0<this.m[c].length&&(this.m[b]=this.m[c],b++);this.m.length=b;this.Z=0}else this.m=arguments[0],this.Z=arguments[1]}function F(a){return a.Z>=a.m.length?l:a.m[a.Z]}function Ka(a){var b=a.Z;b<a.m.length&&b++;return new K(a.m,b)}s=K.prototype;s.toString=function(){for(var a="",b=this.Z;b<this.m.length;b++)""!==this.m[b]&&(a+="/"+this.m[b]);return a||"/"};
s.parent=function(){if(this.Z>=this.m.length)return l;for(var a=[],b=this.Z;b<this.m.length-1;b++)a.push(this.m[b]);return new K(a,0)};s.F=function(a){for(var b=[],c=this.Z;c<this.m.length;c++)b.push(this.m[c]);if(a instanceof K)for(c=a.Z;c<a.m.length;c++)b.push(a.m[c]);else{a=a.split("/");for(c=0;c<a.length;c++)0<a[c].length&&b.push(a[c])}return new K(b,0)};s.f=function(){return this.Z>=this.m.length};
function La(a,b){var c=F(a);if(c===l)return b;if(c===F(b))return La(Ka(a),Ka(b));g("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")")}s.contains=function(a){var b=0;if(this.m.length>a.m.length)return o;for(;b<this.m.length;){if(this.m[b]!==a.m[b])return o;++b}return k};function Ma(){this.children={};this.pc=0;this.value=l}function Na(a,b,c){this.Ca=a?a:"";this.Bb=b?b:l;this.z=c?c:new Ma}function L(a,b){for(var c=b instanceof K?b:new K(b),d=a,e;(e=F(c))!==l;)d=new Na(e,d,ua(d.z.children,e)||new Ma),c=Ka(c);return d}s=Na.prototype;s.k=function(){return this.z.value};function M(a,b){z("undefined"!==typeof b);a.z.value=b;Oa(a)}s.nb=function(){return 0<this.z.pc};s.f=function(){return this.k()===l&&!this.nb()};
s.w=function(a){for(var b in this.z.children)a(new Na(b,this,this.z.children[b]))};function Pa(a,b,c,d){c&&!d&&b(a);a.w(function(a){Pa(a,b,k,d)});c&&d&&b(a)}function Qa(a,b,c){for(a=c?a:a.parent();a!==l;){if(b(a))return k;a=a.parent()}return o}s.path=function(){return new K(this.Bb===l?this.Ca:this.Bb.path()+"/"+this.Ca)};s.name=aa("Ca");s.parent=aa("Bb");
function Oa(a){if(a.Bb!==l){var b=a.Bb,c=a.Ca,d=a.f(),e=D(b.z.children,c);d&&e?(delete b.z.children[c],b.z.pc--,Oa(b)):!d&&!e&&(b.z.children[c]=a.z,b.z.pc++,Oa(b))}};function Ra(a,b){this.Pa=a?a:Sa;this.ba=b?b:Ta}function Sa(a,b){return a<b?-1:a>b?1:0}s=Ra.prototype;s.na=function(a,b){return new Ra(this.Pa,this.ba.na(a,b,this.Pa).copy(l,l,o,l,l))};s.remove=function(a){return new Ra(this.Pa,this.ba.remove(a,this.Pa).copy(l,l,o,l,l))};s.get=function(a){for(var b,c=this.ba;!c.f();){b=this.Pa(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return l};
function Ua(a,b){for(var c,d=a.ba,e=l;!d.f();){c=a.Pa(b,d.key);if(0===c){if(d.left.f())return e?e.key:l;for(d=d.left;!d.right.f();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}g(Error("Attempted to find predecessor key for a nonexistent key.  What gives?"))}s.f=function(){return this.ba.f()};s.count=function(){return this.ba.count()};s.tb=function(){return this.ba.tb()};s.Wa=function(){return this.ba.Wa()};s.Aa=function(a){return this.ba.Aa(a)};s.Ma=function(a){return this.ba.Ma(a)};
s.Va=function(a){return new Va(this.ba,a)};function Va(a,b){this.jd=b;for(this.Rb=[];!a.f();)this.Rb.push(a),a=a.left}function Wa(a){if(0===a.Rb.length)return l;var b=a.Rb.pop(),c;c=a.jd?a.jd(b.key,b.value):{key:b.key,value:b.value};for(b=b.right;!b.f();)a.Rb.push(b),b=b.left;return c}function Xa(a,b,c,d,e){this.key=a;this.value=b;this.color=c!=l?c:k;this.left=d!=l?d:Ta;this.right=e!=l?e:Ta}s=Xa.prototype;
s.copy=function(a,b,c,d,e){return new Xa(a!=l?a:this.key,b!=l?b:this.value,c!=l?c:this.color,d!=l?d:this.left,e!=l?e:this.right)};s.count=function(){return this.left.count()+1+this.right.count()};s.f=r(o);s.Aa=function(a){return this.left.Aa(a)||a(this.key,this.value)||this.right.Aa(a)};s.Ma=function(a){return this.right.Ma(a)||a(this.key,this.value)||this.left.Ma(a)};function Ya(a){return a.left.f()?a:Ya(a.left)}s.tb=function(){return Ya(this).key};
s.Wa=function(){return this.right.f()?this.key:this.right.Wa()};s.na=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.copy(l,l,l,e.left.na(a,b,c),l):0===d?e.copy(l,b,l,l,l):e.copy(l,l,l,l,e.right.na(a,b,c));return Za(e)};function bb(a){if(a.left.f())return Ta;!a.left.O()&&!a.left.left.O()&&(a=cb(a));a=a.copy(l,l,l,bb(a.left),l);return Za(a)}
s.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))!c.left.f()&&(!c.left.O()&&!c.left.left.O())&&(c=cb(c)),c=c.copy(l,l,l,c.left.remove(a,b),l);else{c.left.O()&&(c=db(c));!c.right.f()&&(!c.right.O()&&!c.right.left.O())&&(c=eb(c),c.left.left.O()&&(c=db(c),c=eb(c)));if(0===b(a,c.key)){if(c.right.f())return Ta;d=Ya(c.right);c=c.copy(d.key,d.value,l,l,bb(c.right))}c=c.copy(l,l,l,l,c.right.remove(a,b))}return Za(c)};s.O=aa("color");
function Za(a){a.right.O()&&!a.left.O()&&(a=fb(a));a.left.O()&&a.left.left.O()&&(a=db(a));a.left.O()&&a.right.O()&&(a=eb(a));return a}function cb(a){a=eb(a);a.right.left.O()&&(a=a.copy(l,l,l,l,db(a.right)),a=fb(a),a=eb(a));return a}function fb(a){var b;b=a.copy(l,l,k,l,a.right.left);return a.right.copy(l,l,a.color,b,l)}function db(a){var b;b=a.copy(l,l,k,a.left.right,l);return a.left.copy(l,l,a.color,l,b)}
function eb(a){var b,c;b=a.left.copy(l,l,!a.left.color,l,l);c=a.right.copy(l,l,!a.right.color,l,l);return a.copy(l,l,!a.color,b,c)}function gb(){}s=gb.prototype;s.copy=function(){return this};s.na=function(a,b){return new Xa(a,b,j,j,j)};s.remove=function(){return this};s.count=r(0);s.f=r(k);s.Aa=r(o);s.Ma=r(o);s.tb=r(l);s.Wa=r(l);s.O=r(o);var Ta=new gb;var hb=Array.prototype,ib=hb.forEach?function(a,b,c){hb.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},jb=hb.map?function(a,b,c){return hb.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=v(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e};function kb(){};function lb(){this.B=[];this.oc=[];this.rd=[];this.Xb=[];this.Xb[0]=128;for(var a=1;64>a;++a)this.Xb[a]=0;this.reset()}ka(lb,kb);lb.prototype.reset=function(){this.B[0]=1732584193;this.B[1]=4023233417;this.B[2]=2562383102;this.B[3]=271733878;this.B[4]=3285377520;this.Sc=this.ob=0};
function mb(a,b){var c;c||(c=0);for(var d=a.rd,e=c;e<c+64;e+=4)d[e/4]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3];for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}c=a.B[0];for(var h=a.B[1],i=a.B[2],m=a.B[3],n=a.B[4],p,e=0;80>e;e++)40>e?20>e?(f=m^h&(i^m),p=1518500249):(f=h^i^m,p=1859775393):60>e?(f=h&i|m&(h|i),p=2400959708):(f=h^i^m,p=3395469782),f=(c<<5|c>>>27)+f+n+p+d[e]&4294967295,n=m,m=i,i=(h<<30|h>>>2)&4294967295,h=c,c=f;a.B[0]=a.B[0]+c&4294967295;a.B[1]=a.B[1]+h&
4294967295;a.B[2]=a.B[2]+i&4294967295;a.B[3]=a.B[3]+m&4294967295;a.B[4]=a.B[4]+n&4294967295}lb.prototype.update=function(a,b){u(b)||(b=a.length);var c=this.oc,d=this.ob,e=0;if(v(a))for(;e<b;)c[d++]=a.charCodeAt(e++),64==d&&(mb(this,c),d=0);else for(;e<b;)c[d++]=a[e++],64==d&&(mb(this,c),d=0);this.ob=d;this.Sc+=b};function nb(){this.Oa={};this.length=0}nb.prototype.setItem=function(a,b){D(this.Oa,a)||(this.length+=1);this.Oa[a]=b};nb.prototype.getItem=function(a){return D(this.Oa,a)?this.Oa[a]:l};nb.prototype.removeItem=function(a){D(this.Oa,a)&&(this.length-=1,delete this.Oa[a])};var ob=l;try{"undefined"!==typeof sessionStorage&&(sessionStorage.setItem("firebase-sentinel","cache"),sessionStorage.removeItem("firebase-sentinel"),ob=sessionStorage)}catch(pb){}ob=ob||new nb;function qb(a,b,c,d){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.ec=b;this.ub=c;this.ea=d||ob.getItem(a)||this.host}function rb(a,b){b!==a.ea&&(a.ea=b,"s-"===a.ea.substr(0,2)&&ob.setItem(a.host,a.ea))}qb.prototype.toString=function(){return(this.ec?"https://":"http://")+this.host};var sb,tb,ub,vb;function wb(){return ba.navigator?ba.navigator.userAgent:l}vb=ub=tb=sb=o;var xb;if(xb=wb()){var yb=ba.navigator;sb=0==xb.indexOf("Opera");tb=!sb&&-1!=xb.indexOf("MSIE");ub=!sb&&-1!=xb.indexOf("WebKit");vb=!sb&&!ub&&"Gecko"==yb.product}var zb=tb,Ab=vb,Bb=ub;var Cb;if(sb&&ba.opera){var Db=ba.opera.version;"function"==typeof Db&&Db()}else Ab?Cb=/rv\:([^\);]+)(\)|;)/:zb?Cb=/MSIE\s+([^\);]+)(\)|;)/:Bb&&(Cb=/WebKit\/(\S+)/),Cb&&Cb.exec(wb());var Eb=l,Fb=l;
function Gb(a,b){fa(a)||g(Error("encodeByteArray takes an array as a parameter"));if(!Eb){Eb={};Fb={};for(var c=0;65>c;c++)Eb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Fb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)}for(var c=b?Fb:Eb,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,i=h?a[e+1]:0,m=e+2<a.length,n=m?a[e+2]:0,p=f>>2,f=(f&3)<<4|i>>4,i=(i&15)<<2|n>>6,n=n&63;m||(n=64,h||(i=64));d.push(c[p],c[f],c[i],c[n])}return d.join("")}
;var Hb,Ib=1;Hb=function(){return Ib++};function z(a,b){a||g(Error("Firebase INTERNAL ASSERT FAILED:"+b))}function Jb(a){var b=ra(a),a=new lb;a.update(b);var b=[],c=8*a.Sc;56>a.ob?a.update(a.Xb,56-a.ob):a.update(a.Xb,64-(a.ob-56));for(var d=63;56<=d;d--)a.oc[d]=c&255,c/=256;mb(a,a.oc);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c++]=a.B[d]>>e&255;return Gb(b)}
function Kb(){for(var a="",b=0;b<arguments.length;b++)a=fa(arguments[b])?a+Kb.apply(l,arguments[b]):"object"===typeof arguments[b]?a+y(arguments[b]):a+arguments[b],a+=" ";return a}var Lb=l,Mb=k;function Nb(){Mb===k&&(Mb=o,Lb===l&&"true"===ob.getItem("logging_enabled")&&Ob(k));if(Lb){var a=Kb.apply(l,arguments);Lb(a)}}function Pb(a){return function(){Nb(a,arguments)}}
function Qb(){if("undefined"!==typeof console){var a="FIREBASE INTERNAL ERROR: "+Kb.apply(l,arguments);"undefined"!==typeof console.error?console.error(a):console.log(a)}}function Rb(){var a=Kb.apply(l,arguments);g(Error("FIREBASE FATAL ERROR: "+a))}function N(){if("undefined"!==typeof console){var a="FIREBASE WARNING: "+Kb.apply(l,arguments);"undefined"!==typeof console.warn?console.warn(a):console.log(a)}}
function Ba(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}function Sb(a,b){return a!==b?a===l?-1:b===l?1:typeof a!==typeof b?"number"===typeof a?-1:1:a>b?1:-1:0}function Tb(a,b){if(a===b)return 0;var c=Ub(a),d=Ub(b);return c!==l?d!==l?c-d:-1:d!==l?1:a<b?-1:1}function Vb(a,b){if(b&&a in b)return b[a];g(Error("Missing required key ("+a+") in object: "+y(b)))}
function Ja(a){if("object"!==typeof a||a===l)return y(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=y(b[d]),c+=":",c+=Ja(a[b[d]]);return c+"}"}function Wb(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Xb(a,b){if("array"==ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else Yb(a,b)}
function Zb(a){z(!Ba(a));var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;a-=1)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;a-=1)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&(d="0"+d),c+=d;
return c.toLowerCase()}var $b=/^-?\d{1,10}$/;function Ub(a){return $b.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:l}function ac(a){try{a()}catch(b){setTimeout(function(){g(b)})}};function bc(a,b){this.D=a;z(this.D!==l,"LeafNode shouldn't be created with null value.");this.Za="undefined"!==typeof b?b:l}s=bc.prototype;s.N=r(k);s.j=aa("Za");s.Ea=function(a){return new bc(this.D,a)};s.M=function(){return P};s.Q=function(a){return F(a)===l?this:P};s.da=r(l);s.G=function(a,b){return(new Q).G(a,b).Ea(this.Za)};s.xa=function(a,b){var c=F(a);return c===l?b:this.G(c,P.xa(Ka(a),b))};s.f=r(o);s.Sb=r(0);s.V=function(a){return a&&this.j()!==l?{".value":this.k(),".priority":this.j()}:this.k()};
s.hash=function(){var a="";this.j()!==l&&(a+="priority:"+cc(this.j())+":");var b=typeof this.D,a=a+(b+":"),a="number"===b?a+Zb(this.D):a+this.D;return Jb(a)};s.k=aa("D");s.toString=function(){return"string"===typeof this.D?'"'+this.D+'"':this.D};function dc(a,b){return Sb(a.ha,b.ha)||Tb(a.name,b.name)}function ec(a,b){return Tb(a.name,b.name)}function fc(a,b){return Tb(a,b)};function Q(a,b){this.o=a||new Ra(fc);this.Za="undefined"!==typeof b?b:l}s=Q.prototype;s.N=r(o);s.j=aa("Za");s.Ea=function(a){return new Q(this.o,a)};s.G=function(a,b){var c=this.o.remove(a);b&&b.f()&&(b=l);b!==l&&(c=c.na(a,b));return b&&b.j()!==l?new gc(c,l,this.Za):new Q(c,this.Za)};s.xa=function(a,b){var c=F(a);if(c===l)return b;var d=this.M(c).xa(Ka(a),b);return this.G(c,d)};s.f=function(){return this.o.f()};s.Sb=function(){return this.o.count()};var hc=/^\d+$/;s=Q.prototype;
s.V=function(a){if(this.f())return l;var b={},c=0,d=0,e=k;this.w(function(f,h){b[f]=h.V(a);c++;e&&hc.test(f)?d=Math.max(d,Number(f)):e=o});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&this.j()!==l&&(b[".priority"]=this.j());return b};s.hash=function(){var a="";this.j()!==l&&(a+="priority:"+cc(this.j())+":");this.w(function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});return""===a?"":Jb(a)};s.M=function(a){a=this.o.get(a);return a===l?P:a};
s.Q=function(a){var b=F(a);return b===l?this:this.M(b).Q(Ka(a))};s.da=function(a){return Ua(this.o,a)};s.$c=function(){return this.o.tb()};s.ad=function(){return this.o.Wa()};s.w=function(a){return this.o.Aa(a)};s.vc=function(a){return this.o.Ma(a)};s.Va=function(){return this.o.Va()};s.toString=function(){var a="{",b=k;this.w(function(c,d){b?b=o:a+=", ";a+='"'+c+'" : '+d.toString()});return a+="}"};var P=new Q;function gc(a,b,c){Q.call(this,a,c);b===l&&(b=new Ra(dc),a.Aa(function(a,c){b=b.na({name:a,ha:c.j()},c)}));this.ta=b}ka(gc,Q);s=gc.prototype;s.G=function(a,b){var c=this.M(a),d=this.o,e=this.ta;c!==l&&(d=d.remove(a),e=e.remove({name:a,ha:c.j()}));b&&b.f()&&(b=l);b!==l&&(d=d.na(a,b),e=e.na({name:a,ha:b.j()},b));return new gc(d,e,this.j())};s.da=function(a,b){var c=Ua(this.ta,{name:a,ha:b.j()});return c?c.name:l};s.w=function(a){return this.ta.Aa(function(b,c){return a(b.name,c)})};
s.vc=function(a){return this.ta.Ma(function(b,c){return a(b.name,c)})};s.Va=function(){return this.ta.Va(function(a,b){return{key:a.name,value:b}})};s.$c=function(){return this.ta.f()?l:this.ta.tb().name};s.ad=function(){return this.ta.f()?l:this.ta.Wa().name};function R(a,b){if(a===l)return P;var c=l;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);z(c===l||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c);"object"===typeof a&&(".value"in a&&a[".value"]!==l)&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new bc(a,c);if(a instanceof Array){var d=P;Yb(a,function(b,c){if(D(a,c)&&"."!==c.substring(0,1)){var e=R(b);if(e.N()||!e.f())d=d.G(c,e)}});return d.Ea(c)}var e=[],f={},h=o;Xb(a,function(b,
c){if("string"!==typeof c||"."!==c.substring(0,1)){var d=R(a[c]);d.f()||(h=h||d.j()!==l,e.push({name:c,ha:d.j()}),f[c]=d)}});var i=ic(e,f,o);if(h){var m=ic(e,f,k);return new gc(i,m,c)}return new Q(i,c)}var jc=Math.log(2);function kc(a){this.count=parseInt(Math.log(a+1)/jc);this.Xc=this.count-1;this.td=a+1&parseInt(Array(this.count+1).join("1"),2)}
function ic(a,b,c){function d(d,f){var h=n-d,p=n;n-=d;var q=a[h].name,h=new Xa(c?a[h]:q,b[q],f,l,e(h+1,p));i?i.left=h:m=h;i=h}function e(d,f){var h=f-d;if(0==h)return l;if(1==h){var h=a[d].name,i=c?a[d]:h;return new Xa(i,b[h],o,l,l)}var i=parseInt(h/2)+d,m=e(d,i),n=e(i+1,f),h=a[i].name,i=c?a[i]:h;return new Xa(i,b[h],o,m,n)}var f=c?dc:ec;a.sort(f);var h,f=new kc(a.length),i=l,m=l,n=a.length;for(h=0;h<f.count;++h){var p=!(f.td&1<<f.Xc);f.Xc--;var q=Math.pow(2,f.count-(h+1));p?d(q,o):(d(q,o),d(q,k))}h=
m;f=c?dc:fc;return h!==l?new Ra(f,h):new Ra(f)}function cc(a){return"number"===typeof a?"number:"+Zb(a):"string:"+a};function S(a,b){this.z=a;this.bc=b}S.prototype.V=function(){A("Firebase.DataSnapshot.val",0,0,arguments.length);return this.z.V()};S.prototype.val=S.prototype.V;S.prototype.xd=function(){A("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.z.V(k)};S.prototype.exportVal=S.prototype.xd;S.prototype.F=function(a){A("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Ga("Firebase.DataSnapshot.child",a);var b=new K(a),c=this.bc.F(b);return new S(this.z.Q(b),c)};
S.prototype.child=S.prototype.F;S.prototype.zc=function(a){A("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Ga("Firebase.DataSnapshot.hasChild",a);var b=new K(a);return!this.z.Q(b).f()};S.prototype.hasChild=S.prototype.zc;S.prototype.j=function(){A("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.z.j()};S.prototype.getPriority=S.prototype.j;
S.prototype.forEach=function(a){A("Firebase.DataSnapshot.forEach",1,1,arguments.length);C("Firebase.DataSnapshot.forEach",1,a,o);if(this.z.N())return o;var b=this;return this.z.w(function(c,d){return a(new S(d,b.bc.F(c)))})};S.prototype.forEach=S.prototype.forEach;S.prototype.nb=function(){A("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.z.N()?o:!this.z.f()};S.prototype.hasChildren=S.prototype.nb;
S.prototype.name=function(){A("Firebase.DataSnapshot.name",0,0,arguments.length);return this.bc.name()};S.prototype.name=S.prototype.name;S.prototype.Sb=function(){A("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.z.Sb()};S.prototype.numChildren=S.prototype.Sb;S.prototype.Kc=function(){A("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.bc};S.prototype.ref=S.prototype.Kc;function mc(a){z("array"==ea(a)&&0<a.length);this.sd=a;this.sb={}}mc.prototype.xc=function(){};mc.prototype.Uc=function(a){for(var b=this.sb[a]||[],c=0;c<b.length;c++)b[c].W.apply(b[c].T,Array.prototype.slice.call(arguments,1))};mc.prototype.Ya=function(a,b,c){nc(this,a);this.sb[a]=this.sb[a]||[];this.sb[a].push({W:b,T:c});(a=this.xc(a))&&b.apply(c,a)};mc.prototype.vb=function(a,b,c){nc(this,a);for(var a=this.sb[a]||[],d=0;d<a.length;d++)if(a[d].W===b&&(!c||c===a[d].T)){a.splice(d,1);break}};
function nc(a,b){var c=a.sd,d;a:{d=function(a){return a===b};for(var e=c.length,f=v(c)?c.split(""):c,h=0;h<e;h++)if(h in f&&d.call(j,f[h])){d=h;break a}d=-1}z(0>d?l:v(c)?c.charAt(d):c[d],"Unknown event: "+b)};function oc(){mc.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.hb=k;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];if(b!==c.hb){c.hb=b;c.Uc("visible",b)}},o)}}ka(oc,mc);da(oc);oc.prototype.xc=function(a){z("visible"===a);return[this.hb]};function pc(a){this.Gc=a;this.Zb=[];this.Ra=0;this.qc=-1;this.Ja=l};function Yb(a,b){for(var c in a)b.call(j,a[c],c,a)}function qc(a){var b={},c;for(c in a)b[c]=a[c];return b};function rc(){this.jb={}}function sc(a,b,c){u(c)||(c=1);D(a.jb,b)||(a.jb[b]=0);a.jb[b]+=c}rc.prototype.get=function(){return qc(this.jb)};function tc(a){this.ud=a;this.Qb=l}tc.prototype.get=function(){var a=this.ud.get(),b=qc(a);if(this.Qb)for(var c in this.Qb)b[c]-=this.Qb[c];this.Qb=a;return b};function uc(a,b){this.Pc={};this.hc=new tc(a);this.u=b;setTimeout(w(this.gd,this),10+6E4*Math.random())}uc.prototype.gd=function(){var a=this.hc.get(),b={},c=o,d;for(d in a)0<a[d]&&D(this.Pc,d)&&(b[d]=a[d],c=k);c&&(a=this.u,a.P&&(b={c:b},a.e("reportStats",b),a.Da("s",b)));setTimeout(w(this.gd,this),6E5*Math.random())};var vc={},wc={};function xc(a){a=a.toString();vc[a]||(vc[a]=new rc);return vc[a]};var yc=l;"undefined"!==typeof MozWebSocket?yc=MozWebSocket:"undefined"!==typeof WebSocket&&(yc=WebSocket);function T(a,b,c){this.rc=a;this.e=Pb(this.rc);this.frames=this.qb=l;this.Rc=0;this.$=xc(b);this.Qa=(b.ec?"wss://":"ws://")+b.ea+"/.ws?v=5";b.host!==b.ea&&(this.Qa=this.Qa+"&ns="+b.ub);c&&(this.Qa=this.Qa+"&s="+c)}var zc;
T.prototype.open=function(a,b){this.ga=b;this.Fd=a;this.e("websocket connecting to "+this.Qa);this.Y=new yc(this.Qa);this.kb=o;var c=this;this.Y.onopen=function(){c.e("Websocket connected.");c.kb=k};this.Y.onclose=function(){c.e("Websocket connection was disconnected.");c.Y=l;c.Ka()};this.Y.onmessage=function(a){if(c.Y!==l)if(a=a.data,sc(c.$,"bytes_received",a.length),Ac(c),c.frames!==l)Bc(c,a);else{a:{z(c.frames===l,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){c.Rc=
b;c.frames=[];a=l;break a}}c.Rc=1;c.frames=[]}a!==l&&Bc(c,a)}};this.Y.onerror=function(a){c.e("WebSocket error.  Closing connection.");a.data&&c.e(a.data);c.Ka()}};T.prototype.start=function(){};T.isAvailable=function(){var a=o;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=k)}return!a&&yc!==l&&!zc};
function Bc(a,b){a.frames.push(b);if(a.frames.length==a.Rc){var c=a.frames.join("");a.frames=l;c="undefined"!==typeof JSON&&u(JSON.parse)?JSON.parse(c):la(c);a.Fd(c)}}T.prototype.send=function(a){Ac(this);a=y(a);sc(this.$,"bytes_sent",a.length);a=Wb(a,16384);1<a.length&&this.Y.send(String(a.length));for(var b=0;b<a.length;b++)this.Y.send(a[b])};T.prototype.Jb=function(){this.Ia=k;this.qb&&(clearInterval(this.qb),this.qb=l);this.Y&&(this.Y.close(),this.Y=l)};
T.prototype.Ka=function(){this.Ia||(this.e("WebSocket is closing itself"),this.Jb(),this.ga&&(this.ga(this.kb),this.ga=l))};T.prototype.close=function(){this.Ia||(this.e("WebSocket is being closed"),this.Jb())};function Ac(a){clearInterval(a.qb);a.qb=setInterval(function(){a.Y.send("0");Ac(a)},45E3)};function Cc(){this.set={}}s=Cc.prototype;s.add=function(a,b){this.set[a]=b!==l?b:k};s.contains=function(a){return D(this.set,a)};s.get=function(a){return this.contains(a)?this.set[a]:j};s.remove=function(a){delete this.set[a]};s.f=function(){var a;a:{for(a in this.set){a=o;break a}a=k}return a};s.count=function(){var a=0,b;for(b in this.set)a++;return a};function Dc(a,b){for(var c in a.set)D(a.set,c)&&b(c,a.set[c])}s.keys=function(){var a=[],b;for(b in this.set)D(this.set,b)&&a.push(b);return a};var Ec="pLPCommand",Fc="pRTLPCB";function Gc(a,b,c){this.rc=a;this.e=Pb(a);this.Ud=b;this.$=xc(b);this.gc=c;this.kb=o;this.Mb=function(a){b.host!==b.ea&&(a.ns=b.ub);var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f+"="+a[f]);return(b.ec?"https://":"http://")+b.ea+"/.lp?"+c.join("&")}}var Hc,Ic;
Gc.prototype.open=function(a,b){function c(){if(!d.Ia){d.ja=new Jc(function(a,b,c,e,f){sc(d.$,"bytes_received",y(arguments).length);if(d.ja)if(d.Fa&&(clearTimeout(d.Fa),d.Fa=l),d.kb=k,"start"==a)d.id=b,d.fd=c;else if("close"===a)if(b){d.ja.fc=o;var h=d.cd;h.qc=b;h.Ja=function(){d.Ka()};h.qc<h.Ra&&(h.Ja(),h.Ja=l)}else d.Ka();else g(Error("Unrecognized command received: "+a))},function(a,b){sc(d.$,"bytes_received",y(arguments).length);var c=d.cd;for(c.Zb[a]=b;c.Zb[c.Ra];){var e=c.Zb[c.Ra];delete c.Zb[c.Ra];
for(var f=0;f<e.length;++f)if(e[f]){var h=c;ac(function(){h.Gc(e[f])})}if(c.Ra===c.qc){c.Ja&&(clearTimeout(c.Ja),c.Ja(),c.Ja=l);break}c.Ra++}},function(){d.Ka()},d.Mb);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());d.ja.jc&&(a.cb=d.ja.jc);a.v="5";d.gc&&(a.s=d.gc);a=d.Mb(a);d.e("Connecting via long-poll to "+a);Kc(d.ja,a,function(){})}}this.Wc=0;this.R=b;this.cd=new pc(a);this.Ia=o;var d=this;this.Fa=setTimeout(function(){d.e("Timed out trying to connect.");d.Ka();d.Fa=l},3E4);if("complete"===
document.readyState)c();else{var e=o,f=function(){document.body?e||(e=k,c()):setTimeout(f,10)};document.addEventListener?(document.addEventListener("DOMContentLoaded",f,o),window.addEventListener("load",f,o)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&f()},o),window.attachEvent("onload",f,o))}};
Gc.prototype.start=function(){var a=this.ja,b=this.fd;a.Dd=this.id;a.Ed=b;for(a.mc=k;Lc(a););a=this.id;b=this.fd;this.Xa=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;a=this.Mb(c);this.Xa.src=a;this.Xa.style.display="none";document.body.appendChild(this.Xa)};Gc.isAvailable=function(){return!Ic&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Td)&&(Hc||k)};
Gc.prototype.Jb=function(){this.Ia=k;this.ja&&(this.ja.close(),this.ja=l);this.Xa&&(document.body.removeChild(this.Xa),this.Xa=l);this.Fa&&(clearTimeout(this.Fa),this.Fa=l)};Gc.prototype.Ka=function(){this.Ia||(this.e("Longpoll is closing itself"),this.Jb(),this.R&&(this.R(this.kb),this.R=l))};Gc.prototype.close=function(){this.Ia||(this.e("Longpoll is being closed."),this.Jb())};
Gc.prototype.send=function(a){a=y(a);sc(this.$,"bytes_sent",a.length);for(var a=ra(a),a=Gb(a,k),a=Wb(a,1840),b=0;b<a.length;b++){var c=this.ja;c.Db.push({Nd:this.Wc,Sd:a.length,Yc:a[b]});c.mc&&Lc(c);this.Wc++}};
function Jc(a,b,c,d){this.Mb=d;this.ga=c;this.Ic=new Cc;this.Db=[];this.sc=Math.floor(1E8*Math.random());this.fc=k;this.jc=Hb();window[Ec+this.jc]=a;window[Fc+this.jc]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||Nb("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else g("Document body has not initialized. Wait to initialize Firebase until after the document is ready.");
a.contentDocument?a.ya=a.contentDocument:a.contentWindow?a.ya=a.contentWindow.document:a.document&&(a.ya=a.document);this.X=a;a="";this.X.src&&"javascript:"===this.X.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";<\/script>');a="<html><body>"+a+"</body></html>";try{this.X.ya.open(),this.X.ya.write(a),this.X.ya.close()}catch(f){Nb("frame writing exception"),f.stack&&Nb(f.stack),Nb(f)}}
Jc.prototype.close=function(){this.mc=o;if(this.X){this.X.ya.body.innerHTML="";var a=this;setTimeout(function(){a.X!==l&&(document.body.removeChild(a.X),a.X=l)},0)}var b=this.ga;b&&(this.ga=l,b())};
function Lc(a){if(a.mc&&a.fc&&a.Ic.count()<(0<a.Db.length?2:1)){a.sc++;var b={};b.id=a.Dd;b.pw=a.Ed;b.ser=a.sc;for(var b=a.Mb(b),c="",d=0;0<a.Db.length;)if(1870>=a.Db[0].Yc.length+30+c.length){var e=a.Db.shift(),c=c+"&seg"+d+"="+e.Nd+"&ts"+d+"="+e.Sd+"&d"+d+"="+e.Yc;d++}else break;var b=b+c,f=a.sc;a.Ic.add(f);var h=function(){a.Ic.remove(f);Lc(a)},i=setTimeout(h,25E3);Kc(a,b,function(){clearTimeout(i);h()});return k}return o}
function Kc(a,b,c){setTimeout(function(){try{if(a.fc){var d=a.X.ya.createElement("script");d.type="text/javascript";d.async=k;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;if(!a||"loaded"===a||"complete"===a)d.onload=d.onreadystatechange=l,d.parentNode&&d.parentNode.removeChild(d),c()};d.onerror=function(){Nb("Long-poll script failed to load: "+b);a.fc=o;a.close()};a.X.ya.body.appendChild(d)}}catch(e){}},1)};function Mc(){var a=[];T&&T.isAvailable()?a.push(T):Xb(Nc,function(b,c){c&&c.isAvailable()&&a.push(c)});this.ic=a}var Nc=[Gc,{isAvailable:r(o)},T];function Oc(a,b,c,d,e,f){this.id=a;this.e=Pb("c:"+this.id+":");this.Gc=c;this.yb=d;this.R=e;this.Fc=f;this.K=b;this.Yb=[];this.Vc=0;this.Tc=new Mc;this.va=0;this.e("Connection created");Pc(this)}function Pc(a){var b;var c=a.Tc;0<c.ic.length?b=c.ic[0]:g(Error("No transports available"));a.L=new b("c:"+a.id+":"+a.Vc++,a.K);var d=Qc(a,a.L),e=Rc(a,a.L);a.Kb=a.L;a.Ib=a.L;a.A=l;setTimeout(function(){a.L&&a.L.open(d,e)},0)}
function Rc(a,b){return function(c){b===a.L?(a.L=l,!c&&0===a.va?(a.e("Realtime connection failed."),"s-"===a.K.ea.substr(0,2)&&(ob.removeItem(a.K.ub),a.K.ea=a.K.host)):1===a.va&&a.e("Realtime connection lost."),a.close()):b===a.A?(c=a.A,a.A=l,(a.Kb===c||a.Ib===c)&&a.close()):a.e("closing an old connection")}}
function Qc(a,b){return function(c){if(2!=a.va)if(b===a.Ib){var d=Vb("t",c),c=Vb("d",c);if("c"==d){if(d=Vb("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.gc=c.s;rb(a.K,f);if(0==a.va&&(a.L.start(),c=a.L,a.e("Realtime connection established."),a.L=c,a.va=1,a.yb&&(a.yb(d),a.yb=l),"5"!==e&&N("Protocol version mismatch detected"),c=1<a.Tc.ic.length?a.Tc.ic[1]:l))a.A=new c("c:"+a.id+":"+a.Vc++,a.K,a.gc),a.A.open(Qc(a,a.A),Rc(a,a.A))}else if("n"===d){a.e("recvd end transmission on primary");a.Ib=
a.A;for(c=0;c<a.Yb.length;++c)a.Vb(a.Yb[c]);a.Yb=[];Sc(a)}else"s"===d?(a.e("Connection shutdown command received. Shutting down..."),a.Fc&&(a.Fc(c),a.Fc=l),a.R=l,a.close()):"r"===d?(a.e("Reset packet received.  New host: "+c),rb(a.K,c),1===a.va?a.close():(Tc(a),Pc(a))):"e"===d?Qb("Server Error: "+c):Qb("Unknown control packet command: "+d)}else"d"==d&&a.Vb(c)}else b===a.A?(d=Vb("t",c),c=Vb("d",c),"c"==d?"t"in c&&(c=c.t,"a"===c?(a.A.start(),a.e("sending client ack on secondary"),a.A.send({t:"c",d:{t:"a",
d:{}}}),a.e("Ending transmission on primary"),a.L.send({t:"c",d:{t:"n",d:{}}}),a.Kb=a.A,Sc(a)):"r"===c&&(a.e("Got a reset on secondary, closing it"),a.A.close(),(a.Kb===a.A||a.Ib===a.A)&&a.close())):"d"==d?a.Yb.push(c):g(Error("Unknown protocol layer: "+d))):a.e("message on old connection")}}Oc.prototype.ld=function(a){a={t:"d",d:a};1!==this.va&&g("Connection is not connected");this.Kb.send(a)};
function Sc(a){a.Kb===a.A&&a.Ib===a.A&&(a.e("cleaning up and promoting a connection: "+a.A.rc),a.L=a.A,a.A=l)}Oc.prototype.Vb=function(a){this.Gc(a)};Oc.prototype.close=function(){2!==this.va&&(this.e("Closing realtime connection."),this.va=2,Tc(this),this.R&&(this.R(),this.R=l))};function Tc(a){a.e("Shutting down all connections");a.L&&(a.L.close(),a.L=l);a.A&&(a.A.close(),a.A=l)};function Vc(){mc.call(this,["online"]);this.zb=k;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.zb||a.Uc("online",k);a.zb=k},o);window.addEventListener("offline",function(){a.zb&&a.Uc("online",o);a.zb=o},o)}}ka(Vc,mc);da(Vc);Vc.prototype.xc=function(a){z("online"===a);return[this.zb]};function Wc(a,b,c,d,e,f){this.id=Xc++;this.e=Pb("p:"+this.id+":");this.Na=k;this.fa={};this.U=[];this.Ab=0;this.xb=[];this.P=o;this.pa=1E3;this.Wb=b||ca;this.Ub=c||ca;this.wb=d||ca;this.Hc=e||ca;this.yc=f||ca;this.K=a;this.Lc=l;this.Hb={};this.Md=0;this.rb=this.Cc=l;Yc(this,0);oc.mb().Ya("visible",this.Hd,this);-1===a.host.indexOf("fblocal")&&Vc.mb().Ya("online",this.Gd,this)}var Xc=0,Zc=0;s=Wc.prototype;
s.Da=function(a,b,c){var d=++this.Md,a={r:d,a:a,b:b};this.e(y(a));z(this.P,"sendRequest_ call when we're not connected not allowed.");this.ia.ld(a);c&&(this.Hb[d]=c)};function $c(a,b,c,d,e){a.e("Listen on "+b+" for "+c);var f={p:b},d=jb(d,function(a){return Ia(a)});"{}"!==c&&(f.q=d);f.h=a.yc(b);a.Da("l",f,function(d){a.e("listen response",d);d=d.s;"ok"!==d&&ad(a,b,c);e&&e(d)})}s.ib=function(a,b,c){this.Ga={vd:a,Zc:o,W:b,Ob:c};this.e("Authenticating using credential: "+this.Ga);bd(this)};
s.Lb=function(a){delete this.Ga;this.wb(o);this.P&&this.Da("unauth",{},function(b){a(b.s)})};function bd(a){var b=a.Ga;a.P&&b&&a.Da("auth",{cred:b.vd},function(c){var d=c.s,c=c.d||"error";"ok"!==d&&a.Ga===b&&delete a.Ga;a.wb("ok"===d);b.Zc?"ok"!==d&&b.Ob&&b.Ob(d,c):(b.Zc=k,b.W&&b.W(d,c))})}function cd(a,b,c,d){b=b.toString();ad(a,b,c)&&a.P&&(a.e("Unlisten on "+b+" for "+c),b={p:b},d=jb(d,function(a){return Ia(a)}),"{}"!==c&&(b.q=d),a.Da("u",b))}
function dd(a,b,c,d){a.P?ed(a,"o",b,c,d):a.xb.push({Jc:b,action:"o",data:c,C:d})}s.Ec=function(a,b){this.P?ed(this,"oc",a,l,b):this.xb.push({Jc:a,action:"oc",data:l,C:b})};function ed(a,b,c,d,e){c={p:c,d:d};a.e("onDisconnect "+b,c);a.Da(b,c,function(a){e&&setTimeout(function(){e(a.s)},0)})}s.put=function(a,b,c,d){fd(this,"p",a,b,c,d)};function fd(a,b,c,d,e,f){c={p:c,d:d};u(f)&&(c.h=f);a.U.push({action:b,hd:c,C:e});a.Ab++;b=a.U.length-1;a.P&&gd(a,b)}
function gd(a,b){var c=a.U[b].action,d=a.U[b].hd,e=a.U[b].C;a.U[b].Jd=a.P;a.Da(c,d,function(d){a.e(c+" response",d);delete a.U[b];a.Ab--;0===a.Ab&&(a.U=[]);e&&e(d.s)})}
s.Vb=function(a){if("r"in a){this.e("from server: "+y(a));var b=a.r,c=this.Hb[b];c&&(delete this.Hb[b],c(a.b))}else"error"in a&&g("A server-side error has occurred: "+a.error),"a"in a&&(b=a.a,a=a.b,this.e("handleServerMessage",b,a),"d"===b?this.Wb(a.p,a.d):"m"===b?this.Wb(a.p,a.d,k):"c"===b?(b=a.p,a=(a=a.q)?jb(a,function(a){return Ja(a)}).join("$"):"{}",(a=ad(this,b,a))&&a.C&&a.C("permission_denied")):"ac"===b?(b=a.s,a=a.d,c=this.Ga,delete this.Ga,c&&c.Ob&&c.Ob(b,a),this.wb(o)):"sd"===b?this.Lc?this.Lc(a):
"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):Qb("Unrecognized action received from server: "+y(b)+"\nAre you using the latest client?"))};
s.yb=function(a){this.e("connection ready");this.P=k;this.rb=(new Date).getTime();this.Hc({serverTimeOffset:a-(new Date).getTime()});bd(this);for(var b in this.fa)for(var c in this.fa[b])a=this.fa[b][c],$c(this,b,c,a.$a,a.C);for(b=0;b<this.U.length;b++)this.U[b]&&gd(this,b);for(;this.xb.length;)b=this.xb.shift(),ed(this,b.action,b.Jc,b.data,b.C);this.Ub(k)};
function Yc(a,b){z(!a.ia,"Scheduling a connect when we're already connected/ing?");a.Ta&&clearTimeout(a.Ta);a.Ta=setTimeout(function(){a.Ta=l;if(a.Na){a.e("Making a connection attempt");a.Cc=(new Date).getTime();a.rb=l;var b=w(a.Vb,a),d=w(a.yb,a),e=w(a.dd,a),f=a.id+":"+Zc++;a.ia=new Oc(f,a.K,b,d,e,function(b){N(b+" ("+a.K.toString()+")");a.Na=o})}},b)}s.Hd=function(a){a&&(!this.hb&&3E5===this.pa)&&(this.e("Window became visible.  Reducing delay."),this.pa=1E3,this.ia||Yc(this,0));this.hb=a};
s.Gd=function(a){a?(this.e("Browser went online.  Reconnecting."),this.pa=1E3,this.Na=k,this.ia||Yc(this,0)):(this.e("Browser went offline.  Killing connection; don't reconnect."),this.Na=o,this.ia&&this.ia.close())};
s.dd=function(){this.e("data client disconnected");this.P=o;this.ia=l;for(var a=0;a<this.U.length;a++){var b=this.U[a];b&&("h"in b.hd&&b.Jd)&&(b.C&&b.C("disconnect"),delete this.U[a],this.Ab--)}0===this.Ab&&(this.U=[]);if(this.Na)this.hb?this.rb&&(3E4<(new Date).getTime()-this.rb&&(this.pa=1E3),this.rb=l):(this.e("Window isn't visible.  Delaying reconnect."),this.pa=3E5,this.Cc=(new Date).getTime()),a=Math.max(0,this.pa-((new Date).getTime()-this.Cc)),a*=Math.random(),this.e("Trying to reconnect in "+
a+"ms"),Yc(this,a),this.pa=Math.min(3E5,1.3*this.pa);else for(var c in this.Hb)delete this.Hb[c];this.Ub(o)};s.Ha=function(){this.Na=o;this.ia?this.ia.close():(this.Ta&&(clearTimeout(this.Ta),this.Ta=l),this.P&&this.dd())};s.bb=function(){this.Na=k;this.pa=1E3;this.P||Yc(this,0)};function ad(a,b,c){b=(new K(b)).toString();c||(c="{}");var d=a.fa[b][c];delete a.fa[b][c];return d};function hd(){this.o=this.D=l}function id(a,b,c){if(b.f())a.D=c,a.o=l;else if(a.D!==l)a.D=a.D.xa(b,c);else{a.o==l&&(a.o=new Cc);var d=F(b);a.o.contains(d)||a.o.add(d,new hd);a=a.o.get(d);b=Ka(b);id(a,b,c)}}function jd(a,b){if(b.f())return a.D=l,a.o=l,k;if(a.D!==l){if(a.D.N())return o;var c=a.D;a.D=l;c.w(function(b,c){id(a,new K(b),c)});return jd(a,b)}return a.o!==l?(c=F(b),b=Ka(b),a.o.contains(c)&&jd(a.o.get(c),b)&&a.o.remove(c),a.o.f()?(a.o=l,k):o):k}
function kd(a,b,c){a.D!==l?c(b,a.D):a.w(function(a,e){var f=new K(b.toString()+"/"+a);kd(e,f,c)})}hd.prototype.w=function(a){this.o!==l&&Dc(this.o,function(b,c){a(b,c)})};function ld(){this.qa=P}function U(a,b){return a.qa.Q(b)}function V(a,b,c){a.qa=a.qa.xa(b,c)}ld.prototype.toString=function(){return this.qa.toString()};function md(){this.ra=new ld;this.I=new ld;this.la=new ld;this.Cb=new Na}function nd(a,b){for(var c=U(a.ra,b),d=U(a.I,b),e=L(a.Cb,b),f=o,h=e;h!==l;){if(h.k()!==l){f=k;break}h=h.parent()}if(f)return o;c=od(c,d,e);return c!==d?(V(a.I,b,c),k):o}function od(a,b,c){if(c.f())return a;if(c.k()!==l)return b;a=a||P;c.w(function(d){var d=d.name(),e=a.M(d),f=b.M(d),h=L(c,d),e=od(e,f,h);a=a.G(d,e)});return a}
md.prototype.set=function(a,b){var c=this,d=[];ib(b,function(a){var b=a.path,a=a.oa,h=Hb();M(L(c.Cb,b),h);V(c.I,b,a);d.push({path:b,Od:h})});return d};function pd(a,b){ib(b,function(b){var d=b.Od,b=L(a.Cb,b.path),e=b.k();z(e!==l,"pendingPut should not be null.");e===d&&M(b,l)})};function qd(){this.Ua=[]}function rd(a,b){if(0!==b.length)for(var c=0;c<b.length;c++)a.Ua.push(b[c])}qd.prototype.Fb=function(){for(var a=0;a<this.Ua.length;a++)if(this.Ua[a]){var b=this.Ua[a];this.Ua[a]=l;sd(b)}this.Ua=[]};function sd(a){var b=a.W,c=a.md,d=a.Eb;ac(function(){b(c,d)})};function W(a,b,c,d){this.type=a;this.sa=b;this.aa=c;this.Eb=d};function td(a){this.J=a;this.ma=[];this.uc=new qd}function ud(a,b,c,d,e){a.ma.push({type:b,W:c,cancel:d,T:e});var d=[],f=vd(a.i);a.pb&&f.push(new W("value",a.i));for(var h=0;h<f.length;h++)if(f[h].type===b){var i=new J(a.J.n,a.J.path);f[h].aa&&(i=i.F(f[h].aa));d.push({W:e?w(c,e):c,md:new S(f[h].sa,i),Eb:f[h].Eb})}rd(a.uc,d)}td.prototype.$b=function(a,b){b=this.ac(a,b);b!=l&&wd(this,b)};
function wd(a,b){for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e.type,h=new J(a.J.n,a.J.path);b[d].aa&&(h=h.F(b[d].aa));h=new S(b[d].sa,h);"value"===e.type&&!h.nb()?f+="("+h.V()+")":"value"!==e.type&&(f+=" "+h.name());Nb(a.J.n.u.id+": event:"+a.J.path+":"+a.J.La()+":"+f);for(f=0;f<a.ma.length;f++){var i=a.ma[f];b[d].type===i.type&&c.push({W:i.T?w(i.W,i.T):i.W,md:h,Eb:e.Eb})}}rd(a.uc,c)}td.prototype.Fb=function(){this.uc.Fb()};
function vd(a){var b=[];if(!a.N()){var c=l;a.w(function(a,e){b.push(new W("child_added",e,a,c));c=a})}return b}function xd(a){a.pb||(a.pb=k,wd(a,[new W("value",a.i)]))};function zd(a,b){td.call(this,a);this.i=b}ka(zd,td);zd.prototype.ac=function(a,b){this.i=a;this.pb&&b!=l&&b.push(new W("value",this.i));return b};zd.prototype.lb=function(){return{}};function Ad(a,b){this.Pb=a;this.Dc=b}
function Bd(a,b,c,d,e){var f=a.Q(c),h=b.Q(c),d=new Ad(d,e),e=Cd(d,c,f,h),h=!f.f()&&!h.f()&&f.j()!==h.j();if(e||h){f=c;for(c=e;f.parent()!==l;){var i=a.Q(f),e=b.Q(f),m=f.parent();if(!d.Pb||L(d.Pb,m).k()){var n=b.Q(m),p=[],f=f.Z<f.m.length?f.m[f.m.length-1]:l;i.f()?(i=n.da(f,e),p.push(new W("child_added",e,f,i))):e.f()?p.push(new W("child_removed",i,f)):(i=n.da(f,e),h&&p.push(new W("child_moved",e,f,i)),c&&p.push(new W("child_changed",e,f,i)));d.Dc(m,n,p)}h&&(h=o,c=k);f=m}}}
function Cd(a,b,c,d){var e,f=[];c===d?e=o:c.N()&&d.N()?e=c.k()!==d.k():c.N()?(Dd(a,b,P,d,f),e=k):d.N()?(Dd(a,b,c,P,f),e=k):e=Dd(a,b,c,d,f);e?a.Dc(b,d,f):c.j()!==d.j()&&a.Dc(b,d,l);return e}
function Dd(a,b,c,d,e){var f=o,h=!a.Pb||!L(a.Pb,b).f(),i=[],m=[],n=[],p=[],q={},t={},x,O,I,G;x=c.Va();I=Wa(x);O=d.Va();for(G=Wa(O);I!==l||G!==l;){c=I===l?1:G===l?-1:I.key===G.key?0:dc({name:I.key,ha:I.value.j()},{name:G.key,ha:G.value.j()});if(0>c)f=ua(q,I.key),u(f)?(n.push({wc:I,Qc:i[f]}),i[f]=l):(t[I.key]=m.length,m.push(I)),f=k,I=Wa(x);else{if(0<c)f=ua(t,G.key),u(f)?(n.push({wc:m[f],Qc:G}),m[f]=l):(q[G.key]=i.length,i.push(G)),f=k;else{c=b.F(G.key);if(c=Cd(a,c,I.value,G.value))p.push(G),f=k;I.value.j()!==
G.value.j()&&(n.push({wc:I,Qc:G}),f=k);I=Wa(x)}G=Wa(O)}if(!h&&f)return k}for(h=0;h<m.length;h++)if(q=m[h])c=b.F(q.key),Cd(a,c,q.value,P),e.push(new W("child_removed",q.value,q.key));for(h=0;h<i.length;h++)if(q=i[h])c=b.F(q.key),m=d.da(q.key,q.value),Cd(a,c,P,q.value),e.push(new W("child_added",q.value,q.key,m));for(h=0;h<n.length;h++)q=n[h].wc,i=n[h].Qc,c=b.F(i.key),m=d.da(i.key,i.value),e.push(new W("child_moved",i.value,i.key,m)),(c=Cd(a,c,q.value,i.value))&&p.push(i);for(h=0;h<p.length;h++)a=p[h],
m=d.da(a.key,a.value),e.push(new W("child_changed",a.value,a.key,m));return f};function Ed(){this.S=this.wa=l;this.set={}}ka(Ed,Cc);s=Ed.prototype;s.setActive=function(a){this.wa=a};function Fd(a){return a.contains("default")}function Gd(a){return a.wa!=l&&Fd(a)}s.defaultView=function(){return Fd(this)?this.get("default"):l};s.path=aa("S");s.toString=function(){return jb(this.keys(),function(a){return"default"===a?"{}":a}).join("$")};s.$a=function(){var a=[];Dc(this,function(b,c){a.push(c.J)});return a};function Hd(a,b){td.call(this,a);this.i=P;this.ac(b,vd(b))}ka(Hd,td);
Hd.prototype.ac=function(a,b){if(b===l)return b;var c=[],d=this.J;u(d.ca)&&(u(d.ua)&&d.ua!=l?c.push(function(a,b){var c=Sb(b,d.ca);return 0<c||0===c&&0<=Tb(a,d.ua)}):c.push(function(a,b){return 0<=Sb(b,d.ca)}));u(d.za)&&(u(d.Sa)?c.push(function(a,b){var c=Sb(b,d.za);return 0>c||0===c&&0>=Tb(a,d.Sa)}):c.push(function(a,b){return 0>=Sb(b,d.za)}));var e=l,f=l;if(u(this.J.Ba))if(u(this.J.ca)){if(e=Id(a,c,this.J.Ba,o)){var h=a.M(e).j();c.push(function(a,b){var c=Sb(b,h);return 0>c||0===c&&0>=Tb(a,e)})}}else if(f=
Id(a,c,this.J.Ba,k)){var i=a.M(f).j();c.push(function(a,b){var c=Sb(b,i);return 0<c||0===c&&0<=Tb(a,f)})}for(var m=[],n=[],p=[],q=[],t=0;t<b.length;t++){var x=b[t].aa,O=b[t].sa;switch(b[t].type){case "child_added":Jd(c,x,O)&&(this.i=this.i.G(x,O),n.push(b[t]));break;case "child_removed":this.i.M(x).f()||(this.i=this.i.G(x,l),m.push(b[t]));break;case "child_changed":!this.i.M(x).f()&&Jd(c,x,O)&&(this.i=this.i.G(x,O),q.push(b[t]));break;case "child_moved":var I=!this.i.M(x).f(),G=Jd(c,x,O);I?G?(this.i=
this.i.G(x,O),p.push(b[t])):(m.push(new W("child_removed",this.i.M(x),x)),this.i=this.i.G(x,l)):G&&(this.i=this.i.G(x,O),n.push(b[t]))}}var Uc=e||f;if(Uc){var yd=(t=f!==l)?this.i.$c():this.i.ad(),lc=o,$a=o,ab=this;(t?a.vc:a.w).call(a,function(a,b){!$a&&yd===l&&($a=k);if($a&&lc)return k;lc?(m.push(new W("child_removed",ab.i.M(a),a)),ab.i=ab.i.G(a,l)):$a&&(n.push(new W("child_added",b,a)),ab.i=ab.i.G(a,b));yd===a&&($a=k);a===Uc&&(lc=k)})}for(t=0;t<n.length;t++)c=n[t],x=this.i.da(c.aa,c.sa),m.push(new W("child_added",
c.sa,c.aa,x));for(t=0;t<p.length;t++)c=p[t],x=this.i.da(c.aa,c.sa),m.push(new W("child_moved",c.sa,c.aa,x));for(t=0;t<q.length;t++)c=q[t],x=this.i.da(c.aa,c.sa),m.push(new W("child_changed",c.sa,c.aa,x));this.pb&&0<m.length&&m.push(new W("value",this.i));return m};function Id(a,b,c,d){if(a.N())return l;var e=l;(d?a.vc:a.w).call(a,function(a,d){if(Jd(b,a,d)&&(e=a,c--,0===c))return k});return e}function Jd(a,b,c){for(var d=0;d<a.length;d++)if(!a[d](b,c.j()))return o;return k}
Hd.prototype.zc=function(a){return this.i.M(a)!==P};Hd.prototype.lb=function(a,b,c){var d={};this.i.N()||this.i.w(function(a){d[a]=3});var e=this.i,c=U(c,new K("")),f=new Na;M(L(f,this.J.path),k);var b=P.xa(a,b),h=this;Bd(c,b,a,f,function(a,b,c){c!==l&&a.toString()===h.J.path.toString()&&h.ac(b,c)});this.i.N()?Yb(d,function(a,b){d[b]=2}):(this.i.w(function(a){D(d,a)||(d[a]=1)}),Yb(d,function(a,b){h.i.M(b).f()&&(d[b]=2)}));this.i=e;return d};function Kd(a,b){this.u=a;this.g=b;this.Tb=b.qa;this.ka=new Na}
Kd.prototype.Nb=function(a,b,c,d,e){var f=a.path,h=L(this.ka,f),i=h.k();i===l?(i=new Ed,M(h,i)):z(!i.f(),"We shouldn't be storing empty QueryMaps");var m=a.La();if(i.contains(m))a=i.get(m),ud(a,b,c,d,e);else{var n=this.g.qa.Q(f),n=a="default"===a.La()?new zd(a,n):new Hd(a,n);if(Gd(i)||Ld(h))i.add(m,n),i.S||(i.S=n.J.path);else{var p,q;i.f()||(p=i.toString(),q=i.$a());i.add(m,n);i.S||(i.S=n.J.path);i.setActive(Md(this,i));p&&q&&cd(this.u,i.path(),p,q)}Gd(i)&&Pa(h,function(a){if(a=a.k()){a.wa&&a.wa();
a.wa=l}});ud(a,b,c,d,e);(b=(b=Qa(L(this.ka,f),function(a){var b;if(b=a.k())if(b=a.k().defaultView())b=a.k().defaultView().pb;if(b)return k},k))||this.u===l&&!U(this.g,f).f())&&xd(a)}a.Fb()};function Nd(a,b,c,d,e){var f=a.get(b),h;if(h=f){h=o;for(var i=f.ma.length-1;0<=i;i--){var m=f.ma[i];if((!c||m.type===c)&&(!d||m.W===d)&&(!e||m.T===e))if(f.ma.splice(i,1),h=k,c&&d)break}h=h&&!(0<f.ma.length)}(c=h)&&a.remove(b);return c}
Kd.prototype.cc=function(a,b,c,d){var e=L(this.ka,a.path).k();return e===l?l:Od(this,e,a,b,c,d)};
function Od(a,b,c,d,e,f){var h=b.path(),h=L(a.ka,h),c=c?c.La():l,i=[];c&&"default"!==c?Nd(b,c,d,e,f)&&i.push(c):ib(b.keys(),function(a){Nd(b,a,d,e,f)&&i.push(a)});b.f()&&M(h,l);c=Ld(h);if(0<i.length&&!c){for(var m=h,n=h.parent(),c=o;!c&&n;){var p=n.k();if(p){z(!Gd(p));var q=m.name(),t=o;Dc(p,function(a,b){t=b.zc(q)||t});t&&(c=k)}m=n;n=n.parent()}m=l;if(!Gd(b)){n=b.wa;b.wa=l;var x=[],O=function(b){var c=b.k();if(c&&Fd(c))x.push(c.path()),c.wa==l&&c.setActive(Md(a,c));else{if(c){c.wa!=l||c.setActive(Md(a,
c));var d={};Dc(c,function(a,b){b.i.w(function(a){D(d,a)||(d[a]=k,a=c.path().F(a),x.push(a))})})}b.w(O)}};O(h);m=x;n&&n()}return c?l:m}return l}function Pd(a,b,c){Pa(L(a.ka,b),function(a){(a=a.k())&&Dc(a,function(a,b){xd(b)})},c,k)}
function Qd(a,b,c){function d(a){do{if(h[a.toString()])return k;a=a.parent()}while(a!==l);return o}var e=a.Tb,f=a.g.qa;a.Tb=f;for(var h={},i=0;i<c.length;i++)h[c[i].toString()]=k;Bd(e,f,b,a.ka,function(c,e,f){if(b.contains(c)){var h=d(c);h&&Pd(a,c,o);a.$b(c,e,f);h&&Pd(a,c,k)}else a.$b(c,e,f)});d(b)&&Pd(a,b,k);Rd(a,b)}function Rd(a,b){var c=L(a.ka,b);Pa(c,function(a){(a=a.k())&&Dc(a,function(a,b){b.Fb()})},k,k);Qa(c,function(a){(a=a.k())&&Dc(a,function(a,b){b.Fb()})},o)}
Kd.prototype.$b=function(a,b,c){a=L(this.ka,a).k();a!==l&&Dc(a,function(a,e){e.$b(b,c)})};function Ld(a){return Qa(a,function(a){return a.k()&&Gd(a.k())})}
function Md(a,b){if(a.u){var c=a.u,d=b.path(),e=b.toString(),f=b.$a(),h,i=b.keys(),m=Fd(b),n=a.u,p=function(c){if("ok"!==c){var d="Unknown Error";"too_big"===c?d="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==c?d="Client doesn't have permission to access the desired data.":"unavailable"==c&&(d="The service is unavailable");var e=Error(c+": "+d);e.code=c.toUpperCase();N("on() or once() for "+b.path().toString()+" failed: "+e.toString());
b&&(Dc(b,function(a,b){for(var c=0;c<b.ma.length;c++){var d=b.ma[c];d.cancel&&(d.T?w(d.cancel,d.T):d.cancel)(e)}}),Od(a,b))}else h||(m?Pd(a,b.path(),k):ib(i,function(a){(a=b.get(a))&&xd(a)}),Rd(a,b.path()))},q=b.toString(),t=b.path().toString();n.fa[t]=n.fa[t]||{};z(!n.fa[t][q],"listen() called twice for same path/queryId.");n.fa[t][q]={$a:b.$a(),C:p};n.P&&$c(n,t,q,b.$a(),p);return function(){h=k;cd(c,d,e,f)}}return ca}
Kd.prototype.lb=function(a,b,c,d){var e={};Dc(b,function(b,h){var i=h.lb(a,c,d);Yb(i,function(a,b){e[b]=3===a?3:(ua(e,b)||a)===a?a:3})});c.N()||c.w(function(a){D(e,a)||(e[a]=4)});return e};function Sd(a,b,c,d,e){var f=b.path(),b=a.lb(f,b,d,e),h=P,i=[];Yb(b,function(b,n){var p=new K(n);3===b||1===b?h=h.G(n,d.Q(p)):(2===b&&i.push({path:f.F(n),oa:P}),i=i.concat(Td(a,d.Q(p),L(c,p),e)))});return[{path:f,oa:h}].concat(i)}
function Ud(a,b,c,d){var e;a:{var f=L(a.ka,b);e=f.parent();for(var h=[];e!==l;){var i=e.k();if(i!==l){if(Fd(i)){e=[{path:b,oa:c}];break a}i=a.lb(b,i,c,d);f=ua(i,f.name());if(3===f||1===f){e=[{path:b,oa:c}];break a}2===f&&h.push({path:b,oa:P})}f=e;e=e.parent()}e=h}if(1==e.length&&(!e[0].oa.f()||c.f()))return e;h=L(a.ka,b);f=h.k();f!==l?Fd(f)?e.push({path:b,oa:c}):e=e.concat(Sd(a,f,h,c,d)):e=e.concat(Td(a,c,h,d));return e}
function Td(a,b,c,d){var e=c.k();if(e!==l)return Fd(e)?[{path:c.path(),oa:b}]:Sd(a,e,c,b,d);var f=[];c.w(function(c){var e=b.N()?P:b.M(c.name()),c=Td(a,e,c,d);f=f.concat(c)});return f};function Vd(a,b){if(!a||"object"!==typeof a)return a;z(".sv"in a,"Unexpected leaf node or priority contents");return b[a[".sv"]]}function Wd(a,b){var c=Vd(a.j(),b),d;if(a.N()){var e=Vd(a.k(),b);return e!==a.k()||c!==a.j()?new bc(e,c):a}d=a;c!==a.j()&&(d=d.Ea(c));a.w(function(a,c){var e=Wd(c,b);e!==c&&(d=d.G(a,e))});return d};function Xd(a){this.K=a;this.$=xc(a);this.u=new Wc(this.K,w(this.Wb,this),w(this.Ub,this),w(this.wb,this),w(this.Hc,this),w(this.yc,this));var b=w(function(){return new uc(this.$,this.u)},this),a=a.toString();wc[a]||(wc[a]=b());this.nd=wc[a];this.fb=new Na;this.gb=new ld;this.g=new md;this.H=new Kd(this.u,this.g.la);this.Ac=new ld;this.Bc=new Kd(l,this.Ac);Yd(this,"connected",o);Yd(this,"authenticated",o);this.R=new hd;this.tc=0}s=Xd.prototype;
s.toString=function(){return(this.K.ec?"https://":"http://")+this.K.host};s.name=function(){return this.K.ub};function Zd(a){a=U(a.Ac,new K(".info/serverTimeOffset")).V()||0;return(new Date).getTime()+a}function $d(a){a=a={timestamp:Zd(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
s.Wb=function(a,b,c){this.tc++;var d,e,f=[];9<=a.length&&a.lastIndexOf(".priority")===a.length-9?(d=new K(a.substring(0,a.length-9)),e=U(this.g.ra,d).Ea(b),f.push(d)):c?(d=new K(a),e=U(this.g.ra,d),Yb(b,function(a,b){var c=new K(b);e=e.xa(c,R(a));f.push(d.F(b))})):(d=new K(a),e=R(b),f.push(d));a=Ud(this.H,d,e,this.g.I);b=o;for(c=0;c<a.length;++c){var h=a[c],i=this.g,m=h.path;V(i.ra,m,h.oa);b=nd(i,m)||b}b&&(d=ae(this,d));Qd(this.H,d,f)};
s.Ub=function(a){Yd(this,"connected",a);if(a===o){this.e("onDisconnectEvents");var b=this,c=[],d=$d(this),a=kd,e=new hd;kd(this.R,new K(""),function(a,b){id(e,a,Wd(b,d))});a(e,new K(""),function(a,d){var e=Ud(b.H,a,d,b.g.I);c.push.apply(c,b.g.set(a,e));e=be(b,a);ae(b,e);Qd(b.H,e,[a])});pd(this.g,c);this.R=new hd}};s.Hc=function(a){var b=this;Xb(a,function(a,d){Yd(b,d,a)})};s.yc=function(a){a=new K(a);return U(this.g.ra,a).hash()};s.wb=function(a){Yd(this,"authenticated",a)};
function Yd(a,b,c){b=new K("/.info/"+b);V(a.Ac,b,R(c));Qd(a.Bc,b,[b])}s.ib=function(a,b,c){"firebaseio-demo.com"===this.K.domain&&N("FirebaseRef.auth() not supported on demo (*.firebaseio-demo.com) Firebases. Please use on production (*.firebaseio.com) Firebases only.");this.u.ib(a,function(a,c){X(b,a,c)},function(a,b){N("auth() was canceled: "+b);if(c){var f=Error(b);f.code=a.toUpperCase();c(f)}})};s.Lb=function(a){this.u.Lb(function(b){X(a,b)})};
s.eb=function(a,b,c,d){this.e("set",{path:a.toString(),value:b,ha:c});var e=$d(this),b=R(b,c),e=Wd(b,e),e=Ud(this.H,a,e,this.g.I),f=this.g.set(a,e),h=this;this.u.put(a.toString(),b.V(k),function(b){"ok"!==b&&N("set at "+a+" failed: "+b);pd(h.g,f);nd(h.g,a);var c=ae(h,a);Qd(h.H,c,[]);X(d,b)});e=be(this,a);ae(this,e);Qd(this.H,e,[a])};
s.update=function(a,b,c){this.e("update",{path:a.toString(),value:b});var d=U(this.g.la,a),e=k,f=[],h=$d(this),i=[],m;for(m in b){var e=o,n=R(b[m]),n=Wd(n,h),d=d.G(m,n),p=a.F(m);f.push(p);n=Ud(this.H,p,n,this.g.I);i=i.concat(this.g.set(a,n))}if(e)Nb("update() called with empty data.  Don't do anything."),X(c,"ok");else{var q=this;fd(this.u,"m",a.toString(),b,function(b){z("ok"===b||"permission_denied"===b,"merge at "+a+" failed.");"ok"!==b&&N("update at "+a+" failed: "+b);pd(q.g,i);nd(q.g,a);var d=
ae(q,a);Qd(q.H,d,[]);X(c,b)},j);b=be(this,a);ae(this,b);Qd(q.H,b,f)}};s.Mc=function(a,b,c){this.e("setPriority",{path:a.toString(),ha:b});var d=$d(this),d=Vd(b,d),d=U(this.g.I,a).Ea(d),d=Ud(this.H,a,d,this.g.I),e=this.g.set(a,d),f=this;this.u.put(a.toString()+"/.priority",b,function(a){pd(f.g,e);X(c,a)});a=ae(this,a);Qd(f.H,a,[])};s.Ec=function(a,b){var c=this;this.u.Ec(a.toString(),function(d){"ok"===d&&jd(c.R,a);X(b,d)})};
function ce(a,b,c,d){var e=R(c);dd(a.u,b.toString(),e.V(k),function(c){"ok"===c&&id(a.R,b,e);X(d,c)})}function de(a){sc(a.$,"deprecated_on_disconnect");a.nd.Pc.deprecated_on_disconnect=k}s.Nb=function(a,b,c,d,e){".info"===F(a.path)?this.Bc.Nb(a,b,c,d,e):this.H.Nb(a,b,c,d,e)};
s.cc=function(a,b,c,d){if(".info"===F(a.path))this.Bc.cc(a,b,c,d);else{b=this.H.cc(a,b,c,d);if(c=b!==l){for(var c=this.g,d=a.path,e=[],f=0;f<b.length;++f)e[f]=U(c.ra,b[f]);V(c.ra,d,P);for(f=0;f<b.length;++f)V(c.ra,b[f],e[f]);c=nd(c,d)}c&&(z(this.g.la.qa===this.H.Tb,"We should have raised any outstanding events by now.  Else, we'll blow them away."),V(this.g.la,a.path,U(this.g.I,a.path)),this.H.Tb=this.g.la.qa)}};s.Ha=function(){this.u.Ha()};s.bb=function(){this.u.bb()};
s.Nc=function(a){if("undefined"!==typeof console){a?(this.hc||(this.hc=new tc(this.$)),a=this.hc.get()):a=this.$.get();var b=a,c=[],d=0,e;for(e in b)c[d++]=e;var f=function(a,b){return Math.max(b.length,a)};if(c.reduce)e=c.reduce(f,0);else{var h=0;ib(c,function(a){h=f.call(j,h,a)});e=h}for(var i in a){b=a[i];for(c=i.length;c<e+2;c++)i+=" ";console.log(i+b)}}};s.Oc=function(a){sc(this.$,a);this.nd.Pc[a]=k};s.e=function(){Nb("r:"+this.u.id+":",arguments)};
function X(a,b,c){a&&ac(function(){if("ok"==b)a(l,c);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function ee(a,b){var c=b||a.fb;b||fe(a,c);if(c.k()!==l){var d=ge(a,c);z(0<d.length);if(2!==d[0].status&&4!==d[0].status){for(var e=c.path(),f=0;f<d.length;f++)z(1===d[f].status,"tryToSendTransactionQueue_: items in queue should all be run."),d[f].status=2,d[f].kd++;c=U(a.g.I,e).hash();V(a.g.I,e,U(a.g.la,e));for(var h=U(a.gb,e).V(k),i=Hb(),m={},n=0;n<d.length;n++)d[n].nc&&(m[d[n].path.toString()]=d[n].path);var p=[],q;for(q in m)p.push(m[q]);for(f=0;f<p.length;f++)M(L(a.g.Cb,p[f]),i);a.u.put(e.toString(),
h,function(b){a.e("transaction put response",{path:e.toString(),status:b});for(f=0;f<p.length;f++){var c=L(a.g.Cb,p[f]),h=c.k();z(h!==l,"sendTransactionQueue_: pendingPut should not be null.");h===i&&(M(c,l),V(a.g.I,p[f],U(a.g.ra,p[f])))}if("ok"===b){b=[];for(f=0;f<d.length;f++)d[f].status=3,d[f].C&&(c=he(a,d[f].path),b.push(w(d[f].C,l,l,k,c))),d[f].kc();fe(a,L(a.fb,e));ee(a);for(f=0;f<b.length;f++)ac(b[f])}else{if("datastale"===b)for(f=0;f<d.length;f++)d[f].status=4===d[f].status?5:1;else{N("transaction at "+
e+" failed: "+b);for(f=0;f<d.length;f++)d[f].status=5,d[f].lc=b}b=ae(a,e);Qd(a.H,b,[e])}},c)}}else c.nb()&&c.w(function(b){ee(a,b)})}
function ae(a,b){var c=ie(a,b),d=c.path(),e=ge(a,c);V(a.g.la,d,U(a.g.I,d));V(a.gb,d,U(a.g.I,d));if(0!==e.length){for(var f=c=U(a.g.la,d),h=[],i=0;i<e.length;i++){var m=La(d,e[i].path),n=o,p;z(m!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===e[i].status)n=k,p=e[i].lc;else if(1===e[i].status)if(25<=e[i].kd)n=k,p="maxretry";else{var q=e[i].update(c.Q(m).V());u(q)?(za("transaction failed: Data returned ",q),q=R(q),c=c.xa(m,q),e[i].nc&&(f=f.xa(m,q))):(n=k,p="nodata")}n&&(e[i].status=
3,setTimeout(e[i].kc,0),e[i].C&&(n=new J(a,e[i].path),m=new S(c.Q(m),n),"nodata"===p?h.push(w(e[i].C,l,l,o,m)):h.push(w(e[i].C,l,Error(p),o,m))))}p=U(a.g.I,d).j();c=c.Ea(p);f=f.Ea(p);V(a.gb,d,c);V(a.g.la,d,f);fe(a,a.fb);for(i=0;i<h.length;i++)ac(h[i]);ee(a)}return d}function ie(a,b){for(var c,d=a.fb;(c=F(b))!==l&&d.k()===l;)d=L(d,c),b=Ka(b);return d}function ge(a,b){var c=[];je(a,b,c);c.sort(function(a,b){return a.ed-b.ed});return c}
function je(a,b,c){var d=b.k();if(d!==l)for(var e=0;e<d.length;e++)c.push(d[e]);b.w(function(b){je(a,b,c)})}function fe(a,b){var c=b.k();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;M(b,0<c.length?c:l)}b.w(function(b){fe(a,b)})}function be(a,b){var c=ie(a,b).path(),d=L(a.fb,b);Qa(d,function(a){ke(a)});ke(d);Pa(d,function(a){ke(a)});return c}
function ke(a){var b=a.k();if(b!==l){for(var c=[],d=-1,e=0;e<b.length;e++)4!==b[e].status&&(2===b[e].status?(z(d===e-1,"All SENT items should be at beginning of queue."),d=e,b[e].status=4,b[e].lc="set"):(z(1===b[e].status),b[e].kc(),b[e].C&&c.push(w(b[e].C,l,Error("set"),o,l))));-1===d?M(a,l):b.length=d+1;for(e=0;e<c.length;e++)ac(c[e])}}function he(a,b){var c=new J(a,b);return new S(U(a.gb,b),c)};function Y(){this.ab={}}da(Y);Y.prototype.Ha=function(){for(var a in this.ab)this.ab[a].Ha()};Y.prototype.interrupt=Y.prototype.Ha;Y.prototype.bb=function(){for(var a in this.ab)this.ab[a].bb()};Y.prototype.resume=Y.prototype.bb;var Z={Ad:function(a){var b=Q.prototype.hash;Q.prototype.hash=a;var c=bc.prototype.hash;bc.prototype.hash=a;return function(){Q.prototype.hash=b;bc.prototype.hash=c}}};Z.hijackHash=Z.Ad;Z.La=function(a){return a.La()};Z.queryIdentifier=Z.La;Z.Cd=function(a){return a.n.u.fa};Z.listens=Z.Cd;Z.Kd=function(a){return a.n.u.ia};Z.refConnection=Z.Kd;Z.pd=Wc;Z.DataConnection=Z.pd;Wc.prototype.sendRequest=Wc.prototype.Da;Wc.prototype.interrupt=Wc.prototype.Ha;Z.qd=Oc;Z.RealTimeConnection=Z.qd;
Oc.prototype.sendRequest=Oc.prototype.ld;Oc.prototype.close=Oc.prototype.close;Z.od=qb;Z.ConnectionTarget=Z.od;Z.yd=function(){Hc=zc=k};Z.forceLongPolling=Z.yd;Z.zd=function(){Ic=k};Z.forceWebSockets=Z.zd;Z.Qd=function(a,b){a.n.u.Lc=b};Z.setSecurityDebugCallback=Z.Qd;Z.Nc=function(a,b){a.n.Nc(b)};Z.stats=Z.Nc;Z.Oc=function(a,b){a.n.Oc(b)};Z.statsIncrementCounter=Z.Oc;Z.tc=function(a){return a.n.tc};function $(a,b,c){this.Gb=a;this.S=b;this.Ca=c}$.prototype.cancel=function(a){A("Firebase.onDisconnect().cancel",0,1,arguments.length);C("Firebase.onDisconnect().cancel",1,a,k);this.Gb.Ec(this.S,a)};$.prototype.cancel=$.prototype.cancel;$.prototype.remove=function(a){A("Firebase.onDisconnect().remove",0,1,arguments.length);E("Firebase.onDisconnect().remove",this.S);C("Firebase.onDisconnect().remove",1,a,k);ce(this.Gb,this.S,l,a)};$.prototype.remove=$.prototype.remove;
$.prototype.set=function(a,b){A("Firebase.onDisconnect().set",1,2,arguments.length);E("Firebase.onDisconnect().set",this.S);ya("Firebase.onDisconnect().set",a,o);C("Firebase.onDisconnect().set",2,b,k);ce(this.Gb,this.S,a,b)};$.prototype.set=$.prototype.set;
$.prototype.eb=function(a,b,c){A("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);E("Firebase.onDisconnect().setWithPriority",this.S);ya("Firebase.onDisconnect().setWithPriority",a,o);Da("Firebase.onDisconnect().setWithPriority",2,b,o);C("Firebase.onDisconnect().setWithPriority",3,c,k);(".length"===this.Ca||".keys"===this.Ca)&&g("Firebase.onDisconnect().setWithPriority failed: "+this.Ca+" is a read-only object.");var d=this.Gb,e=this.S,f=R(a,b);dd(d.u,e.toString(),f.V(k),function(a){"ok"===
a&&id(d.R,e,f);X(c,a)})};$.prototype.setWithPriority=$.prototype.eb;
$.prototype.update=function(a,b){A("Firebase.onDisconnect().update",1,2,arguments.length);E("Firebase.onDisconnect().update",this.S);Ca("Firebase.onDisconnect().update",a);C("Firebase.onDisconnect().update",2,b,k);var c=this.Gb,d=this.S,e=k,f;for(f in a)e=o;if(e)Nb("onDisconnect().update() called with empty data.  Don't do anything."),X(b,k);else{e=c.u;f=d.toString();var h=function(e){if("ok"===e)for(var f in a){var h=R(a[f]);id(c.R,d.F(f),h)}X(b,e)};e.P?ed(e,"om",f,a,h):e.xb.push({Jc:f,action:"om",
data:a,C:h})}};$.prototype.update=$.prototype.update;var le,me=0,ne=[];le=function(a){var b=a===me;me=a;for(var c=Array(8),d=7;0<=d;d--)c[d]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(a%64),a=Math.floor(a/64);z(0===a);a=c.join("");if(b){for(d=11;0<=d&&63===ne[d];d--)ne[d]=0;ne[d]++}else for(d=0;12>d;d++)ne[d]=Math.floor(64*Math.random());for(d=0;12>d;d++)a+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(ne[d]);z(20===a.length,"NextPushId: Length should be 20.");return a};function J(){var a,b,c;if(arguments[0]instanceof Xd)c=arguments[0],a=arguments[1];else{A("new Firebase",1,2,arguments.length);var d=arguments[0];b=a="";var e=k,f="";if(v(d)){var h=d.indexOf("//");if(0<=h)var i=d.substring(0,h-1),d=d.substring(h+2);h=d.indexOf("/");-1===h&&(h=d.length);a=d.substring(0,h);var d=d.substring(h+1),m=a.split(".");if(3==m.length){h=m[2].indexOf(":");e=0<=h?"https"===i:k;if("firebase"===m[1])Rb(a+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
else{b=m[0];f="";d=("/"+d).split("/");for(i=0;i<d.length;i++)if(0<d[i].length){h=d[i];try{h=decodeURIComponent(h.replace(/\+/g," "))}catch(n){}f+="/"+h}}b=b.toLowerCase()}else b=l}e||"undefined"!==typeof window&&(window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:"))&&N("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");a=new qb(a,e,b);b=new K(f);e=b.toString();if(!(d=!v(a.host)))if(!(d=0===a.host.length))if(!(d=!xa(a.ub)))if(d=
0!==e.length)e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),d=!(v(e)&&0!==e.length&&!wa.test(e));d&&g(Error(B("new Firebase",1,o)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'));arguments[1]?arguments[1]instanceof Y?c=arguments[1]:g(Error("Expected a valid Firebase.Context for second argument to new Firebase()")):c=Y.mb();e=a.toString();d=ua(c.ab,e);d||(d=new Xd(a),c.ab[e]=d);c=d;a=b}H.call(this,c,a)}ka(J,H);var oe=J,pe=["Firebase"],qe=ba;
!(pe[0]in qe)&&qe.execScript&&qe.execScript("var "+pe[0]);for(var re;pe.length&&(re=pe.shift());)!pe.length&&u(oe)?qe[re]=oe:qe=qe[re]?qe[re]:qe[re]={};J.prototype.name=function(){A("Firebase.name",0,0,arguments.length);return this.path.f()?l:this.path.Z<this.path.m.length?this.path.m[this.path.m.length-1]:l};J.prototype.name=J.prototype.name;
J.prototype.F=function(a){A("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof K))if(F(this.path)===l){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Ga("Firebase.child",b)}else Ga("Firebase.child",a);return new J(this.n,this.path.F(a))};J.prototype.child=J.prototype.F;J.prototype.parent=function(){A("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return a===l?l:new J(this.n,a)};J.prototype.parent=J.prototype.parent;
J.prototype.root=function(){A("Firebase.ref",0,0,arguments.length);for(var a=this;a.parent()!==l;)a=a.parent();return a};J.prototype.root=J.prototype.root;J.prototype.toString=function(){A("Firebase.toString",0,0,arguments.length);var a;if(this.parent()===l)a=this.n.toString();else{a=this.parent().toString()+"/";var b=this.name();a+=encodeURIComponent(String(b))}return a};J.prototype.toString=J.prototype.toString;
J.prototype.set=function(a,b){A("Firebase.set",1,2,arguments.length);E("Firebase.set",this.path);ya("Firebase.set",a,o);C("Firebase.set",2,b,k);return this.n.eb(this.path,a,l,b)};J.prototype.set=J.prototype.set;J.prototype.update=function(a,b){A("Firebase.update",1,2,arguments.length);E("Firebase.update",this.path);Ca("Firebase.update",a);C("Firebase.update",2,b,k);return this.n.update(this.path,a,b)};J.prototype.update=J.prototype.update;
J.prototype.eb=function(a,b,c){A("Firebase.setWithPriority",2,3,arguments.length);E("Firebase.setWithPriority",this.path);ya("Firebase.setWithPriority",a,o);Da("Firebase.setWithPriority",2,b,o);C("Firebase.setWithPriority",3,c,k);(".length"===this.name()||".keys"===this.name())&&g("Firebase.setWithPriority failed: "+this.name()+" is a read-only object.");return this.n.eb(this.path,a,b,c)};J.prototype.setWithPriority=J.prototype.eb;
J.prototype.remove=function(a){A("Firebase.remove",0,1,arguments.length);E("Firebase.remove",this.path);C("Firebase.remove",1,a,k);this.set(l,a)};J.prototype.remove=J.prototype.remove;
J.prototype.transaction=function(a,b,c){function d(){}A("Firebase.transaction",1,3,arguments.length);E("Firebase.transaction",this.path);C("Firebase.transaction",1,a,o);C("Firebase.transaction",2,b,k);u(c)&&"boolean"!=typeof c&&g(Error(B("Firebase.transaction",3,k)+"must be a boolean."));(".length"===this.name()||".keys"===this.name())&&g("Firebase.transaction failed: "+this.name()+" is a read-only object.");"undefined"===typeof c&&(c=k);var e=this.n,f=this.path,h=c;e.e("transaction on "+f);var i=
new J(e,f);i.Ya("value",d);var h={path:f,update:a,C:b,status:l,ed:Hb(),nc:h,kd:0,kc:function(){i.vb("value",d)},lc:l},m=h.update(U(e.gb,f).V());if(u(m)){za("transaction failed: Data returned ",m);h.status=1;var n=L(e.fb,f),p=n.k()||[];p.push(h);M(n,p);p="object"===typeof m&&m!==l&&D(m,".priority")?m[".priority"]:U(e.g.I,f).j();n=$d(e);m=R(m,p);m=Wd(m,n);V(e.gb,f,m);h.nc&&(V(e.g.la,f,m),Qd(e.H,f,[f]));ee(e)}else h.kc(),h.C&&(e=he(e,f),h.C(l,o,e))};J.prototype.transaction=J.prototype.transaction;
J.prototype.Mc=function(a,b){A("Firebase.setPriority",1,2,arguments.length);E("Firebase.setPriority",this.path);Da("Firebase.setPriority",1,a,o);C("Firebase.setPriority",2,b,k);this.n.Mc(this.path,a,b)};J.prototype.setPriority=J.prototype.Mc;J.prototype.push=function(a,b){A("Firebase.push",0,2,arguments.length);E("Firebase.push",this.path);ya("Firebase.push",a,k);C("Firebase.push",2,b,k);var c=Zd(this.n),c=le(c),c=this.F(c);"undefined"!==typeof a&&a!==l&&c.set(a,b);return c};J.prototype.push=J.prototype.push;
J.prototype.ga=function(){return new $(this.n,this.path,this.name())};J.prototype.onDisconnect=J.prototype.ga;J.prototype.Ld=function(){N("FirebaseRef.removeOnDisconnect() being deprecated. Please use FirebaseRef.onDisconnect().remove() instead.");this.ga().remove();de(this.n)};J.prototype.removeOnDisconnect=J.prototype.Ld;J.prototype.Pd=function(a){N("FirebaseRef.setOnDisconnect(value) being deprecated. Please use FirebaseRef.onDisconnect().set(value) instead.");this.ga().set(a);de(this.n)};
J.prototype.setOnDisconnect=J.prototype.Pd;J.prototype.ib=function(a,b,c){A("Firebase.auth",1,3,arguments.length);v(a)||g(Error(B("Firebase.auth",1,o)+"must be a valid credential (a string)."));C("Firebase.auth",2,b,k);C("Firebase.auth",3,b,k);this.n.ib(a,b,c)};J.prototype.auth=J.prototype.ib;J.prototype.Lb=function(a){A("Firebase.unauth",0,1,arguments.length);C("Firebase.unauth",1,a,k);this.n.Lb(a)};J.prototype.unauth=J.prototype.Lb;
J.goOffline=function(){A("Firebase.goOffline",0,0,arguments.length);Y.mb().Ha()};J.goOnline=function(){A("Firebase.goOnline",0,0,arguments.length);Y.mb().bb()};function Ob(a,b){z(!b||a===k||a===o,"Can't turn on custom loggers persistently.");a===k?("undefined"!==typeof console&&("function"===typeof console.log?Lb=w(console.log,console):"object"===typeof console.log&&(Lb=function(a){console.log(a)})),b&&ob.setItem("logging_enabled","true")):a?Lb=a:(Lb=l,ob.removeItem("logging_enabled"))}
J.enableLogging=Ob;J.ServerValue={TIMESTAMP:{".sv":"timestamp"}};J.INTERNAL=Z;J.Context=Y;})();

/**
 * @license AngularJS v1.2.4
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/* jshint maxlen: false */

/**
 * @ngdoc overview
 * @name ngAnimate
 * @description
 *
 * # ngAnimate
 *
 * The `ngAnimate` module provides support for JavaScript, CSS3 transition and CSS3 keyframe animation hooks within existing core and custom directives.
 *
 * {@installModule animate}
 *
 * <div doc-module-components="ngAnimate"></div>
 *
 * # Usage
 *
 * To see animations in action, all that is required is to define the appropriate CSS classes
 * or to register a JavaScript animation via the myModule.animation() function. The directives that support animation automatically are:
 * `ngRepeat`, `ngInclude`, `ngIf`, `ngSwitch`, `ngShow`, `ngHide`, `ngView` and `ngClass`. Custom directives can take advantage of animation
 * by using the `$animate` service.
 *
 * Below is a more detailed breakdown of the supported animation events provided by pre-existing ng directives:
 *
 * | Directive                                                 | Supported Animations                               |
 * |---------------------------------------------------------- |----------------------------------------------------|
 * | {@link ng.directive:ngRepeat#usage_animations ngRepeat}         | enter, leave and move                              |
 * | {@link ngRoute.directive:ngView#usage_animations ngView}        | enter and leave                                    |
 * | {@link ng.directive:ngInclude#usage_animations ngInclude}       | enter and leave                                    |
 * | {@link ng.directive:ngSwitch#usage_animations ngSwitch}         | enter and leave                                    |
 * | {@link ng.directive:ngIf#usage_animations ngIf}                 | enter and leave                                    |
 * | {@link ng.directive:ngClass#usage_animations ngClass}           | add and remove                                     |
 * | {@link ng.directive:ngShow#usage_animations ngShow & ngHide}    | add and remove (the ng-hide class value)           |
 *
 * You can find out more information about animations upon visiting each directive page.
 *
 * Below is an example of how to apply animations to a directive that supports animation hooks:
 *
 * <pre>
 * <style type="text/css">
 * .slide.ng-enter, .slide.ng-leave {
 *   -webkit-transition:0.5s linear all;
 *   transition:0.5s linear all;
 * }
 *
 * .slide.ng-enter { }        /&#42; starting animations for enter &#42;/
 * .slide.ng-enter-active { } /&#42; terminal animations for enter &#42;/
 * .slide.ng-leave { }        /&#42; starting animations for leave &#42;/
 * .slide.ng-leave-active { } /&#42; terminal animations for leave &#42;/
 * </style>
 *
 * <!--
 * the animate service will automatically add .ng-enter and .ng-leave to the element
 * to trigger the CSS transition/animations
 * -->
 * <ANY class="slide" ng-include="..."></ANY>
 * </pre>
 *
 * Keep in mind that if an animation is running, any child elements cannot be animated until the parent element's
 * animation has completed.
 *
 * <h2>CSS-defined Animations</h2>
 * The animate service will automatically apply two CSS classes to the animated element and these two CSS classes
 * are designed to contain the start and end CSS styling. Both CSS transitions and keyframe animations are supported
 * and can be used to play along with this naming structure.
 *
 * The following code below demonstrates how to perform animations using **CSS transitions** with Angular:
 *
 * <pre>
 * <style type="text/css">
 * /&#42;
 *  The animate class is apart of the element and the ng-enter class
 *  is attached to the element once the enter animation event is triggered
 * &#42;/
 * .reveal-animation.ng-enter {
 *  -webkit-transition: 1s linear all; /&#42; Safari/Chrome &#42;/
 *  transition: 1s linear all; /&#42; All other modern browsers and IE10+ &#42;/
 *
 *  /&#42; The animation preparation code &#42;/
 *  opacity: 0;
 * }
 *
 * /&#42;
 *  Keep in mind that you want to combine both CSS
 *  classes together to avoid any CSS-specificity
 *  conflicts
 * &#42;/
 * .reveal-animation.ng-enter.ng-enter-active {
 *  /&#42; The animation code itself &#42;/
 *  opacity: 1;
 * }
 * </style>
 *
 * <div class="view-container">
 *   <div ng-view class="reveal-animation"></div>
 * </div>
 * </pre>
 *
 * The following code below demonstrates how to perform animations using **CSS animations** with Angular:
 *
 * <pre>
 * <style type="text/css">
 * .reveal-animation.ng-enter {
 *   -webkit-animation: enter_sequence 1s linear; /&#42; Safari/Chrome &#42;/
 *   animation: enter_sequence 1s linear; /&#42; IE10+ and Future Browsers &#42;/
 * }
 * &#64-webkit-keyframes enter_sequence {
 *   from { opacity:0; }
 *   to { opacity:1; }
 * }
 * &#64keyframes enter_sequence {
 *   from { opacity:0; }
 *   to { opacity:1; }
 * }
 * </style>
 *
 * <div class="view-container">
 *   <div ng-view class="reveal-animation"></div>
 * </div>
 * </pre>
 *
 * Both CSS3 animations and transitions can be used together and the animate service will figure out the correct duration and delay timing.
 *
 * Upon DOM mutation, the event class is added first (something like `ng-enter`), then the browser prepares itself to add
 * the active class (in this case `ng-enter-active`) which then triggers the animation. The animation module will automatically
 * detect the CSS code to determine when the animation ends. Once the animation is over then both CSS classes will be
 * removed from the DOM. If a browser does not support CSS transitions or CSS animations then the animation will start and end
 * immediately resulting in a DOM element that is at its final state. This final state is when the DOM element
 * has no CSS transition/animation classes applied to it.
 *
 * <h3>CSS Staggering Animations</h3>
 * A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a
 * curtain-like effect. The ngAnimate module, as of 1.2.0, supports staggering animations and the stagger effect can be
 * performed by creating a **ng-EVENT-stagger** CSS class and attaching that class to the base CSS class used for
 * the animation. The style property expected within the stagger class can either be a **transition-delay** or an
 * **animation-delay** property (or both if your animation contains both transitions and keyframe animations).
 *
 * <pre>
 * .my-animation.ng-enter {
 *   /&#42; standard transition code &#42;/
 *   -webkit-transition: 1s linear all;
 *   transition: 1s linear all;
 *   opacity:0;
 * }
 * .my-animation.ng-enter-stagger {
 *   /&#42; this will have a 100ms delay between each successive leave animation &#42;/
 *   -webkit-transition-delay: 0.1s;
 *   transition-delay: 0.1s;
 *
 *   /&#42; in case the stagger doesn't work then these two values
 *    must be set to 0 to avoid an accidental CSS inheritance &#42;/
 *   -webkit-transition-duration: 0s;
 *   transition-duration: 0s;
 * }
 * .my-animation.ng-enter.ng-enter-active {
 *   /&#42; standard transition styles &#42;/
 *   opacity:1;
 * }
 * </pre>
 *
 * Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations
 * on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this
 * are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation
 * will also be reset if more than 10ms has passed after the last animation has been fired.
 *
 * The following code will issue the **ng-leave-stagger** event on the element provided:
 *
 * <pre>
 * var kids = parent.children();
 *
 * $animate.leave(kids[0]); //stagger index=0
 * $animate.leave(kids[1]); //stagger index=1
 * $animate.leave(kids[2]); //stagger index=2
 * $animate.leave(kids[3]); //stagger index=3
 * $animate.leave(kids[4]); //stagger index=4
 *
 * $timeout(function() {
 *   //stagger has reset itself
 *   $animate.leave(kids[5]); //stagger index=0
 *   $animate.leave(kids[6]); //stagger index=1
 * }, 100, false);
 * </pre>
 *
 * Stagger animations are currently only supported within CSS-defined animations.
 *
 * <h2>JavaScript-defined Animations</h2>
 * In the event that you do not want to use CSS3 transitions or CSS3 animations or if you wish to offer animations on browsers that do not
 * yet support CSS transitions/animations, then you can make use of JavaScript animations defined inside of your AngularJS module.
 *
 * <pre>
 * //!annotate="YourApp" Your AngularJS Module|Replace this or ngModule with the module that you used to define your application.
 * var ngModule = angular.module('YourApp', ['ngAnimate']);
 * ngModule.animation('.my-crazy-animation', function() {
 *   return {
 *     enter: function(element, done) {
 *       //run the animation here and call done when the animation is complete
 *       return function(cancelled) {
 *         //this (optional) function will be called when the animation
 *         //completes or when the animation is cancelled (the cancelled
 *         //flag will be set to true if cancelled).
 *       };
 *     },
 *     leave: function(element, done) { },
 *     move: function(element, done) { },
 *
 *     //animation that can be triggered before the class is added
 *     beforeAddClass: function(element, className, done) { },
 *
 *     //animation that can be triggered after the class is added
 *     addClass: function(element, className, done) { },
 *
 *     //animation that can be triggered before the class is removed
 *     beforeRemoveClass: function(element, className, done) { },
 *
 *     //animation that can be triggered after the class is removed
 *     removeClass: function(element, className, done) { }
 *   };
 * });
 * </pre>
 *
 * JavaScript-defined animations are created with a CSS-like class selector and a collection of events which are set to run
 * a javascript callback function. When an animation is triggered, $animate will look for a matching animation which fits
 * the element's CSS class attribute value and then run the matching animation event function (if found).
 * In other words, if the CSS classes present on the animated element match any of the JavaScript animations then the callback function will
 * be executed. It should be also noted that only simple, single class selectors are allowed (compound class selectors are not supported).
 *
 * Within a JavaScript animation, an object containing various event callback animation functions is expected to be returned.
 * As explained above, these callbacks are triggered based on the animation event. Therefore if an enter animation is run,
 * and the JavaScript animation is found, then the enter callback will handle that animation (in addition to the CSS keyframe animation
 * or transition code that is defined via a stylesheet).
 *
 */

angular.module('ngAnimate', ['ng'])

  /**
   * @ngdoc object
   * @name ngAnimate.$animateProvider
   * @description
   *
   * The `$animateProvider` allows developers to register JavaScript animation event handlers directly inside of a module.
   * When an animation is triggered, the $animate service will query the $animate service to find any animations that match
   * the provided name value.
   *
   * Requires the {@link ngAnimate `ngAnimate`} module to be installed.
   *
   * Please visit the {@link ngAnimate `ngAnimate`} module overview page learn more about how to use animations in your application.
   *
   */
  .config(['$provide', '$animateProvider', function($provide, $animateProvider) {
    var noop = angular.noop;
    var forEach = angular.forEach;
    var selectors = $animateProvider.$$selectors;

    var ELEMENT_NODE = 1;
    var NG_ANIMATE_STATE = '$$ngAnimateState';
    var NG_ANIMATE_CLASS_NAME = 'ng-animate';
    var rootAnimateState = {running: true};

    function extractElementNode(element) {
      for(var i = 0; i < element.length; i++) {
        var elm = element[i];
        if(elm.nodeType == ELEMENT_NODE) {
          return elm;
        }
      }
    }

    function isMatchingElement(elm1, elm2) {
      return extractElementNode(elm1) == extractElementNode(elm2);
    }

    $provide.decorator('$animate', ['$delegate', '$injector', '$sniffer', '$rootElement', '$timeout', '$rootScope', '$document',
                            function($delegate,   $injector,   $sniffer,   $rootElement,   $timeout,   $rootScope,   $document) {

      $rootElement.data(NG_ANIMATE_STATE, rootAnimateState);

      // disable animations during bootstrap, but once we bootstrapped, wait again
      // for another digest until enabling animations. The reason why we digest twice
      // is because all structural animations (enter, leave and move) all perform a
      // post digest operation before animating. If we only wait for a single digest
      // to pass then the structural animation would render its animation on page load.
      // (which is what we're trying to avoid when the application first boots up.)
      $rootScope.$$postDigest(function() {
        $rootScope.$$postDigest(function() {
          rootAnimateState.running = false;
        });
      });

      function lookup(name) {
        if (name) {
          var matches = [],
              flagMap = {},
              classes = name.substr(1).split('.');

          //the empty string value is the default animation
          //operation which performs CSS transition and keyframe
          //animations sniffing. This is always included for each
          //element animation procedure if the browser supports
          //transitions and/or keyframe animations
          if ($sniffer.transitions || $sniffer.animations) {
            classes.push('');
          }

          for(var i=0; i < classes.length; i++) {
            var klass = classes[i],
                selectorFactoryName = selectors[klass];
            if(selectorFactoryName && !flagMap[klass]) {
              matches.push($injector.get(selectorFactoryName));
              flagMap[klass] = true;
            }
          }
          return matches;
        }
      }

      /**
       * @ngdoc object
       * @name ngAnimate.$animate
       * @function
       *
       * @description
       * The `$animate` service provides animation detection support while performing DOM operations (enter, leave and move) as well as during addClass and removeClass operations.
       * When any of these operations are run, the $animate service
       * will examine any JavaScript-defined animations (which are defined by using the $animateProvider provider object)
       * as well as any CSS-defined animations against the CSS classes present on the element once the DOM operation is run.
       *
       * The `$animate` service is used behind the scenes with pre-existing directives and animation with these directives
       * will work out of the box without any extra configuration.
       *
       * Requires the {@link ngAnimate `ngAnimate`} module to be installed.
       *
       * Please visit the {@link ngAnimate `ngAnimate`} module overview page learn more about how to use animations in your application.
       *
       */
      return {
        /**
         * @ngdoc function
         * @name ngAnimate.$animate#enter
         * @methodOf ngAnimate.$animate
         * @function
         *
         * @description
         * Appends the element to the parentElement element that resides in the document and then runs the enter animation. Once
         * the animation is started, the following CSS classes will be present on the element for the duration of the animation:
         *
         * Below is a breakdown of each step that occurs during enter animation:
         *
         * | Animation Step                                                                               | What the element class attribute looks like |
         * |----------------------------------------------------------------------------------------------|---------------------------------------------|
         * | 1. $animate.enter(...) is called                                                             | class="my-animation"                        |
         * | 2. element is inserted into the parentElement element or beside the afterElement element     | class="my-animation"                        |
         * | 3. $animate runs any JavaScript-defined animations on the element                            | class="my-animation ng-animate"             |
         * | 4. the .ng-enter class is added to the element                                               | class="my-animation ng-animate ng-enter"    |
         * | 5. $animate scans the element styles to get the CSS transition/animation duration and delay  | class="my-animation ng-animate ng-enter"    |
         * | 6. $animate waits for 10ms (this performs a reflow)                                          | class="my-animation ng-animate ng-enter"    |
         * | 7. the .ng-enter-active and .ng-animate-active classes are added (this triggers the CSS transition/animation) | class="my-animation ng-animate ng-animate-active ng-enter ng-enter-active" |
         * | 8. $animate waits for X milliseconds for the animation to complete                           | class="my-animation ng-animate ng-animate-active ng-enter ng-enter-active" |
         * | 9. The animation ends and all generated CSS classes are removed from the element             | class="my-animation"                        |
         * | 10. The doneCallback() callback is fired (if provided)                                       | class="my-animation"                        |
         *
         * @param {jQuery/jqLite element} element the element that will be the focus of the enter animation
         * @param {jQuery/jqLite element} parentElement the parent element of the element that will be the focus of the enter animation
         * @param {jQuery/jqLite element} afterElement the sibling element (which is the previous element) of the element that will be the focus of the enter animation
         * @param {function()=} doneCallback the callback function that will be called once the animation is complete
        */
        enter : function(element, parentElement, afterElement, doneCallback) {
          this.enabled(false, element);
          $delegate.enter(element, parentElement, afterElement);
          $rootScope.$$postDigest(function() {
            performAnimation('enter', 'ng-enter', element, parentElement, afterElement, noop, doneCallback);
          });
        },

        /**
         * @ngdoc function
         * @name ngAnimate.$animate#leave
         * @methodOf ngAnimate.$animate
         * @function
         *
         * @description
         * Runs the leave animation operation and, upon completion, removes the element from the DOM. Once
         * the animation is started, the following CSS classes will be added for the duration of the animation:
         *
         * Below is a breakdown of each step that occurs during leave animation:
         *
         * | Animation Step                                                                               | What the element class attribute looks like |
         * |----------------------------------------------------------------------------------------------|---------------------------------------------|
         * | 1. $animate.leave(...) is called                                                             | class="my-animation"                        |
         * | 2. $animate runs any JavaScript-defined animations on the element                            | class="my-animation ng-animate"             |
         * | 3. the .ng-leave class is added to the element                                               | class="my-animation ng-animate ng-leave"    |
         * | 4. $animate scans the element styles to get the CSS transition/animation duration and delay  | class="my-animation ng-animate ng-leave"    |
         * | 5. $animate waits for 10ms (this performs a reflow)                                          | class="my-animation ng-animate ng-leave"    |
         * | 6. the .ng-leave-active and .ng-animate-active classes is added (this triggers the CSS transition/animation) | class="my-animation ng-animate ng-animate-active ng-leave ng-leave-active" |
         * | 7. $animate waits for X milliseconds for the animation to complete                           | class="my-animation ng-animate ng-animate-active ng-leave ng-leave-active" |
         * | 8. The animation ends and all generated CSS classes are removed from the element             | class="my-animation"                        |
         * | 9. The element is removed from the DOM                                                       | ...                                         |
         * | 10. The doneCallback() callback is fired (if provided)                                       | ...                                         |
         *
         * @param {jQuery/jqLite element} element the element that will be the focus of the leave animation
         * @param {function()=} doneCallback the callback function that will be called once the animation is complete
        */
        leave : function(element, doneCallback) {
          cancelChildAnimations(element);
          this.enabled(false, element);
          $rootScope.$$postDigest(function() {
            performAnimation('leave', 'ng-leave', element, null, null, function() {
              $delegate.leave(element);
            }, doneCallback);
          });
        },

        /**
         * @ngdoc function
         * @name ngAnimate.$animate#move
         * @methodOf ngAnimate.$animate
         * @function
         *
         * @description
         * Fires the move DOM operation. Just before the animation starts, the animate service will either append it into the parentElement container or
         * add the element directly after the afterElement element if present. Then the move animation will be run. Once
         * the animation is started, the following CSS classes will be added for the duration of the animation:
         *
         * Below is a breakdown of each step that occurs during move animation:
         *
         * | Animation Step                                                                               | What the element class attribute looks like |
         * |----------------------------------------------------------------------------------------------|---------------------------------------------|
         * | 1. $animate.move(...) is called                                                              | class="my-animation"                        |
         * | 2. element is moved into the parentElement element or beside the afterElement element        | class="my-animation"                        |
         * | 3. $animate runs any JavaScript-defined animations on the element                            | class="my-animation ng-animate"             |
         * | 4. the .ng-move class is added to the element                                                | class="my-animation ng-animate ng-move"     |
         * | 5. $animate scans the element styles to get the CSS transition/animation duration and delay  | class="my-animation ng-animate ng-move"     |
         * | 6. $animate waits for 10ms (this performs a reflow)                                          | class="my-animation ng-animate ng-move"     |
         * | 7. the .ng-move-active and .ng-animate-active classes is added (this triggers the CSS transition/animation) | class="my-animation ng-animate ng-animate-active ng-move ng-move-active" |
         * | 8. $animate waits for X milliseconds for the animation to complete                           | class="my-animation ng-animate ng-animate-active ng-move ng-move-active" |
         * | 9. The animation ends and all generated CSS classes are removed from the element             | class="my-animation"                        |
         * | 10. The doneCallback() callback is fired (if provided)                                       | class="my-animation"                        |
         *
         * @param {jQuery/jqLite element} element the element that will be the focus of the move animation
         * @param {jQuery/jqLite element} parentElement the parentElement element of the element that will be the focus of the move animation
         * @param {jQuery/jqLite element} afterElement the sibling element (which is the previous element) of the element that will be the focus of the move animation
         * @param {function()=} doneCallback the callback function that will be called once the animation is complete
        */
        move : function(element, parentElement, afterElement, doneCallback) {
          cancelChildAnimations(element);
          this.enabled(false, element);
          $delegate.move(element, parentElement, afterElement);
          $rootScope.$$postDigest(function() {
            performAnimation('move', 'ng-move', element, parentElement, afterElement, noop, doneCallback);
          });
        },

        /**
         * @ngdoc function
         * @name ngAnimate.$animate#addClass
         * @methodOf ngAnimate.$animate
         *
         * @description
         * Triggers a custom animation event based off the className variable and then attaches the className value to the element as a CSS class.
         * Unlike the other animation methods, the animate service will suffix the className value with {@type -add} in order to provide
         * the animate service the setup and active CSS classes in order to trigger the animation (this will be skipped if no CSS transitions
         * or keyframes are defined on the -add or base CSS class).
         *
         * Below is a breakdown of each step that occurs during addClass animation:
         *
         * | Animation Step                                                                                 | What the element class attribute looks like |
         * |------------------------------------------------------------------------------------------------|---------------------------------------------|
         * | 1. $animate.addClass(element, 'super') is called                                               | class="my-animation"                        |
         * | 2. $animate runs any JavaScript-defined animations on the element                              | class="my-animation ng-animate"             |
         * | 3. the .super-add class are added to the element                                               | class="my-animation ng-animate super-add"   |
         * | 4. $animate scans the element styles to get the CSS transition/animation duration and delay    | class="my-animation ng-animate super-add"   |
         * | 5. $animate waits for 10ms (this performs a reflow)                                            | class="my-animation ng-animate super-add"   |
         * | 6. the .super, .super-add-active and .ng-animate-active classes are added (this triggers the CSS transition/animation) | class="my-animation ng-animate ng-animate-active super super-add super-add-active"          |
         * | 7. $animate waits for X milliseconds for the animation to complete                             | class="my-animation super-add super-add-active"  |
         * | 8. The animation ends and all generated CSS classes are removed from the element               | class="my-animation super"                  |
         * | 9. The super class is kept on the element                                                      | class="my-animation super"                  |
         * | 10. The doneCallback() callback is fired (if provided)                                         | class="my-animation super"                  |
         *
         * @param {jQuery/jqLite element} element the element that will be animated
         * @param {string} className the CSS class that will be added to the element and then animated
         * @param {function()=} doneCallback the callback function that will be called once the animation is complete
        */
        addClass : function(element, className, doneCallback) {
          performAnimation('addClass', className, element, null, null, function() {
            $delegate.addClass(element, className);
          }, doneCallback);
        },

        /**
         * @ngdoc function
         * @name ngAnimate.$animate#removeClass
         * @methodOf ngAnimate.$animate
         *
         * @description
         * Triggers a custom animation event based off the className variable and then removes the CSS class provided by the className value
         * from the element. Unlike the other animation methods, the animate service will suffix the className value with {@type -remove} in
         * order to provide the animate service the setup and active CSS classes in order to trigger the animation (this will be skipped if
         * no CSS transitions or keyframes are defined on the -remove or base CSS classes).
         *
         * Below is a breakdown of each step that occurs during removeClass animation:
         *
         * | Animation Step                                                                                | What the element class attribute looks like     |
         * |-----------------------------------------------------------------------------------------------|---------------------------------------------|
         * | 1. $animate.removeClass(element, 'super') is called                                           | class="my-animation super"                  |
         * | 2. $animate runs any JavaScript-defined animations on the element                             | class="my-animation super ng-animate"       |
         * | 3. the .super-remove class are added to the element                                           | class="my-animation super ng-animate super-remove"|
         * | 4. $animate scans the element styles to get the CSS transition/animation duration and delay   | class="my-animation super ng-animate super-remove"   |
         * | 5. $animate waits for 10ms (this performs a reflow)                                           | class="my-animation super ng-animate super-remove"   |
         * | 6. the .super-remove-active and .ng-animate-active classes are added and .super is removed (this triggers the CSS transition/animation) | class="my-animation ng-animate ng-animate-active super-remove super-remove-active"          |
         * | 7. $animate waits for X milliseconds for the animation to complete                            | class="my-animation ng-animate ng-animate-active super-remove super-remove-active"   |
         * | 8. The animation ends and all generated CSS classes are removed from the element              | class="my-animation"                        |
         * | 9. The doneCallback() callback is fired (if provided)                                         | class="my-animation"                        |
         *
         *
         * @param {jQuery/jqLite element} element the element that will be animated
         * @param {string} className the CSS class that will be animated and then removed from the element
         * @param {function()=} doneCallback the callback function that will be called once the animation is complete
        */
        removeClass : function(element, className, doneCallback) {
          performAnimation('removeClass', className, element, null, null, function() {
            $delegate.removeClass(element, className);
          }, doneCallback);
        },

        /**
         * @ngdoc function
         * @name ngAnimate.$animate#enabled
         * @methodOf ngAnimate.$animate
         * @function
         *
         * @param {boolean=} value If provided then set the animation on or off.
         * @param {jQuery/jqLite element=} element If provided then the element will be used to represent the enable/disable operation
         * @return {boolean} Current animation state.
         *
         * @description
         * Globally enables/disables animations.
         *
        */
        enabled : function(value, element) {
          switch(arguments.length) {
            case 2:
              if(value) {
                cleanup(element);
              } else {
                var data = element.data(NG_ANIMATE_STATE) || {};
                data.disabled = true;
                element.data(NG_ANIMATE_STATE, data);
              }
            break;

            case 1:
              rootAnimateState.disabled = !value;
            break;

            default:
              value = !rootAnimateState.disabled;
            break;
          }
          return !!value;
         }
      };

      /*
        all animations call this shared animation triggering function internally.
        The animationEvent variable refers to the JavaScript animation event that will be triggered
        and the className value is the name of the animation that will be applied within the
        CSS code. Element, parentElement and afterElement are provided DOM elements for the animation
        and the onComplete callback will be fired once the animation is fully complete.
      */
      function performAnimation(animationEvent, className, element, parentElement, afterElement, domOperation, doneCallback) {
        var node = extractElementNode(element);
        //transcluded directives may sometimes fire an animation using only comment nodes
        //best to catch this early on to prevent any animation operations from occurring
        if(!node) {
          fireDOMOperation();
          closeAnimation();
          return;
        }

        var currentClassName = node.className;
        var classes = currentClassName + ' ' + className;
        var animationLookup = (' ' + classes).replace(/\s+/g,'.');
        if (!parentElement) {
          parentElement = afterElement ? afterElement.parent() : element.parent();
        }

        var matches = lookup(animationLookup);
        var isClassBased = animationEvent == 'addClass' || animationEvent == 'removeClass';
        var ngAnimateState = element.data(NG_ANIMATE_STATE) || {};

        //skip the animation if animations are disabled, a parent is already being animated,
        //the element is not currently attached to the document body or then completely close
        //the animation if any matching animations are not found at all.
        //NOTE: IE8 + IE9 should close properly (run closeAnimation()) in case a NO animation is not found.
        if (animationsDisabled(element, parentElement) || matches.length === 0) {
          fireDOMOperation();
          closeAnimation();
          return;
        }

        var animations = [];
        //only add animations if the currently running animation is not structural
        //or if there is no animation running at all
        if(!ngAnimateState.running || !(isClassBased && ngAnimateState.structural)) {
          forEach(matches, function(animation) {
            //add the animation to the queue to if it is allowed to be cancelled
            if(!animation.allowCancel || animation.allowCancel(element, animationEvent, className)) {
              var beforeFn, afterFn = animation[animationEvent];

              //Special case for a leave animation since there is no point in performing an
              //animation on a element node that has already been removed from the DOM
              if(animationEvent == 'leave') {
                beforeFn = afterFn;
                afterFn = null; //this must be falsy so that the animation is skipped for leave
              } else {
                beforeFn = animation['before' + animationEvent.charAt(0).toUpperCase() + animationEvent.substr(1)];
              }
              animations.push({
                before : beforeFn,
                after : afterFn
              });
            }
          });
        }

        //this would mean that an animation was not allowed so let the existing
        //animation do it's thing and close this one early
        if(animations.length === 0) {
          fireDOMOperation();
          fireDoneCallbackAsync();
          return;
        }

        //this value will be searched for class-based CSS className lookup. Therefore,
        //we prefix and suffix the current className value with spaces to avoid substring
        //lookups of className tokens
        var futureClassName = ' ' + currentClassName + ' ';
        if(ngAnimateState.running) {
          //if an animation is currently running on the element then lets take the steps
          //to cancel that animation and fire any required callbacks
          $timeout.cancel(ngAnimateState.closeAnimationTimeout);
          cleanup(element);
          cancelAnimations(ngAnimateState.animations);

          //if the class is removed during the reflow then it will revert the styles temporarily
          //back to the base class CSS styling causing a jump-like effect to occur. This check
          //here ensures that the domOperation is only performed after the reflow has commenced
          if(ngAnimateState.beforeComplete) {
            (ngAnimateState.done || noop)(true);
          } else if(isClassBased && !ngAnimateState.structural) {
            //class-based animations will compare element className values after cancelling the
            //previous animation to see if the element properties already contain the final CSS
            //class and if so then the animation will be skipped. Since the domOperation will
            //be performed only after the reflow is complete then our element's className value
            //will be invalid. Therefore the same string manipulation that would occur within the
            //DOM operation will be performed below so that the class comparison is valid...
            futureClassName = ngAnimateState.event == 'removeClass' ?
              futureClassName.replace(ngAnimateState.className, '') :
              futureClassName + ngAnimateState.className + ' ';
          }
        }

        //There is no point in perform a class-based animation if the element already contains
        //(on addClass) or doesn't contain (on removeClass) the className being animated.
        //The reason why this is being called after the previous animations are cancelled
        //is so that the CSS classes present on the element can be properly examined.
        var classNameToken = ' ' + className + ' ';
        if((animationEvent == 'addClass'    && futureClassName.indexOf(classNameToken) >= 0) ||
           (animationEvent == 'removeClass' && futureClassName.indexOf(classNameToken) == -1)) {
          fireDOMOperation();
          fireDoneCallbackAsync();
          return;
        }

        //the ng-animate class does nothing, but it's here to allow for
        //parent animations to find and cancel child animations when needed
        element.addClass(NG_ANIMATE_CLASS_NAME);

        element.data(NG_ANIMATE_STATE, {
          running:true,
          event:animationEvent,
          className:className,
          structural:!isClassBased,
          animations:animations,
          done:onBeforeAnimationsComplete
        });

        //first we run the before animations and when all of those are complete
        //then we perform the DOM operation and run the next set of animations
        invokeRegisteredAnimationFns(animations, 'before', onBeforeAnimationsComplete);

        function onBeforeAnimationsComplete(cancelled) {
          fireDOMOperation();
          if(cancelled === true) {
            closeAnimation();
            return;
          }

          //set the done function to the final done function
          //so that the DOM event won't be executed twice by accident
          //if the after animation is cancelled as well
          var data = element.data(NG_ANIMATE_STATE);
          if(data) {
            data.done = closeAnimation;
            element.data(NG_ANIMATE_STATE, data);
          }
          invokeRegisteredAnimationFns(animations, 'after', closeAnimation);
        }

        function invokeRegisteredAnimationFns(animations, phase, allAnimationFnsComplete) {
          var endFnName = phase + 'End';
          forEach(animations, function(animation, index) {
            var animationPhaseCompleted = function() {
              progress(index, phase);
            };

            //there are no before functions for enter + move since the DOM
            //operations happen before the performAnimation method fires
            if(phase == 'before' && (animationEvent == 'enter' || animationEvent == 'move')) {
              animationPhaseCompleted();
              return;
            }

            if(animation[phase]) {
              animation[endFnName] = isClassBased ?
                animation[phase](element, className, animationPhaseCompleted) :
                animation[phase](element, animationPhaseCompleted);
            } else {
              animationPhaseCompleted();
            }
          });

          function progress(index, phase) {
            var phaseCompletionFlag = phase + 'Complete';
            var currentAnimation = animations[index];
            currentAnimation[phaseCompletionFlag] = true;
            (currentAnimation[endFnName] || noop)();

            for(var i=0;i<animations.length;i++) {
              if(!animations[i][phaseCompletionFlag]) return;
            }

            allAnimationFnsComplete();
          }
        }

        function fireDoneCallbackAsync() {
          doneCallback && $timeout(doneCallback, 0, false);
        }

        //it is less complicated to use a flag than managing and cancelling
        //timeouts containing multiple callbacks.
        function fireDOMOperation() {
          if(!fireDOMOperation.hasBeenRun) {
            fireDOMOperation.hasBeenRun = true;
            domOperation();
          }
        }

        function closeAnimation() {
          if(!closeAnimation.hasBeenRun) {
            closeAnimation.hasBeenRun = true;
            var data = element.data(NG_ANIMATE_STATE);
            if(data) {
              /* only structural animations wait for reflow before removing an
                 animation, but class-based animations don't. An example of this
                 failing would be when a parent HTML tag has a ng-class attribute
                 causing ALL directives below to skip animations during the digest */
              if(isClassBased) {
                cleanup(element);
              } else {
                data.closeAnimationTimeout = $timeout(function() {
                  cleanup(element);
                }, 0, false);
                element.data(NG_ANIMATE_STATE, data);
              }
            }
            fireDoneCallbackAsync();
          }
        }
      }

      function cancelChildAnimations(element) {
        var node = extractElementNode(element);
        forEach(node.querySelectorAll('.' + NG_ANIMATE_CLASS_NAME), function(element) {
          element = angular.element(element);
          var data = element.data(NG_ANIMATE_STATE);
          if(data) {
            cancelAnimations(data.animations);
            cleanup(element);
          }
        });
      }

      function cancelAnimations(animations) {
        var isCancelledFlag = true;
        forEach(animations, function(animation) {
          if(!animations.beforeComplete) {
            (animation.beforeEnd || noop)(isCancelledFlag);
          }
          if(!animations.afterComplete) {
            (animation.afterEnd || noop)(isCancelledFlag);
          }
        });
      }

      function cleanup(element) {
        if(isMatchingElement(element, $rootElement)) {
          if(!rootAnimateState.disabled) {
            rootAnimateState.running = false;
            rootAnimateState.structural = false;
          }
        } else {
          element.removeClass(NG_ANIMATE_CLASS_NAME);
          element.removeData(NG_ANIMATE_STATE);
        }
      }

      function animationsDisabled(element, parentElement) {
        if (rootAnimateState.disabled) return true;

        if(isMatchingElement(element, $rootElement)) {
          return rootAnimateState.disabled || rootAnimateState.running;
        }

        do {
          //the element did not reach the root element which means that it
          //is not apart of the DOM. Therefore there is no reason to do
          //any animations on it
          if(parentElement.length === 0) break;

          var isRoot = isMatchingElement(parentElement, $rootElement);
          var state = isRoot ? rootAnimateState : parentElement.data(NG_ANIMATE_STATE);
          var result = state && (!!state.disabled || !!state.running);
          if(isRoot || result) {
            return result;
          }

          if(isRoot) return true;
        }
        while(parentElement = parentElement.parent());

        return true;
      }
    }]);

    $animateProvider.register('', ['$window', '$sniffer', '$timeout', function($window, $sniffer, $timeout) {
      // Detect proper transitionend/animationend event names.
      var CSS_PREFIX = '', TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT;

      // If unprefixed events are not supported but webkit-prefixed are, use the latter.
      // Otherwise, just use W3C names, browsers not supporting them at all will just ignore them.
      // Note: Chrome implements `window.onwebkitanimationend` and doesn't implement `window.onanimationend`
      // but at the same time dispatches the `animationend` event and not `webkitAnimationEnd`.
      // Register both events in case `window.onanimationend` is not supported because of that,
      // do the same for `transitionend` as Safari is likely to exhibit similar behavior.
      // Also, the only modern browser that uses vendor prefixes for transitions/keyframes is webkit
      // therefore there is no reason to test anymore for other vendor prefixes: http://caniuse.com/#search=transition
      if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
        CSS_PREFIX = '-webkit-';
        TRANSITION_PROP = 'WebkitTransition';
        TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
      } else {
        TRANSITION_PROP = 'transition';
        TRANSITIONEND_EVENT = 'transitionend';
      }

      if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
        CSS_PREFIX = '-webkit-';
        ANIMATION_PROP = 'WebkitAnimation';
        ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
      } else {
        ANIMATION_PROP = 'animation';
        ANIMATIONEND_EVENT = 'animationend';
      }

      var DURATION_KEY = 'Duration';
      var PROPERTY_KEY = 'Property';
      var DELAY_KEY = 'Delay';
      var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
      var NG_ANIMATE_PARENT_KEY = '$$ngAnimateKey';
      var NG_ANIMATE_CSS_DATA_KEY = '$$ngAnimateCSS3Data';
      var NG_ANIMATE_FALLBACK_CLASS_NAME = 'ng-animate-start';
      var NG_ANIMATE_FALLBACK_ACTIVE_CLASS_NAME = 'ng-animate-active';
      var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;

      var lookupCache = {};
      var parentCounter = 0;

      var animationReflowQueue = [], animationTimer, timeOut = false;
      function afterReflow(callback) {
        animationReflowQueue.push(callback);
        $timeout.cancel(animationTimer);
        animationTimer = $timeout(function() {
          forEach(animationReflowQueue, function(fn) {
            fn();
          });
          animationReflowQueue = [];
          animationTimer = null;
          lookupCache = {};
        }, 10, false);
      }

      function getElementAnimationDetails(element, cacheKey) {
        var data = cacheKey ? lookupCache[cacheKey] : null;
        if(!data) {
          var transitionDuration = 0;
          var transitionDelay = 0;
          var animationDuration = 0;
          var animationDelay = 0;
          var transitionDelayStyle;
          var animationDelayStyle;
          var transitionDurationStyle;
          var transitionPropertyStyle;

          //we want all the styles defined before and after
          forEach(element, function(element) {
            if (element.nodeType == ELEMENT_NODE) {
              var elementStyles = $window.getComputedStyle(element) || {};

              transitionDurationStyle = elementStyles[TRANSITION_PROP + DURATION_KEY];

              transitionDuration = Math.max(parseMaxTime(transitionDurationStyle), transitionDuration);

              transitionPropertyStyle = elementStyles[TRANSITION_PROP + PROPERTY_KEY];

              transitionDelayStyle = elementStyles[TRANSITION_PROP + DELAY_KEY];

              transitionDelay  = Math.max(parseMaxTime(transitionDelayStyle), transitionDelay);

              animationDelayStyle = elementStyles[ANIMATION_PROP + DELAY_KEY];

              animationDelay   = Math.max(parseMaxTime(animationDelayStyle), animationDelay);

              var aDuration  = parseMaxTime(elementStyles[ANIMATION_PROP + DURATION_KEY]);

              if(aDuration > 0) {
                aDuration *= parseInt(elementStyles[ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY], 10) || 1;
              }

              animationDuration = Math.max(aDuration, animationDuration);
            }
          });
          data = {
            total : 0,
            transitionPropertyStyle: transitionPropertyStyle,
            transitionDurationStyle: transitionDurationStyle,
            transitionDelayStyle: transitionDelayStyle,
            transitionDelay: transitionDelay,
            transitionDuration: transitionDuration,
            animationDelayStyle: animationDelayStyle,
            animationDelay: animationDelay,
            animationDuration: animationDuration
          };
          if(cacheKey) {
            lookupCache[cacheKey] = data;
          }
        }
        return data;
      }

      function parseMaxTime(str) {
        var maxValue = 0;
        var values = angular.isString(str) ?
          str.split(/\s*,\s*/) :
          [];
        forEach(values, function(value) {
          maxValue = Math.max(parseFloat(value) || 0, maxValue);
        });
        return maxValue;
      }

      function getCacheKey(element) {
        var parentElement = element.parent();
        var parentID = parentElement.data(NG_ANIMATE_PARENT_KEY);
        if(!parentID) {
          parentElement.data(NG_ANIMATE_PARENT_KEY, ++parentCounter);
          parentID = parentCounter;
        }
        return parentID + '-' + extractElementNode(element).className;
      }

      function animateSetup(element, className) {
        var cacheKey = getCacheKey(element);
        var eventCacheKey = cacheKey + ' ' + className;
        var stagger = {};
        var ii = lookupCache[eventCacheKey] ? ++lookupCache[eventCacheKey].total : 0;

        if(ii > 0) {
          var staggerClassName = className + '-stagger';
          var staggerCacheKey = cacheKey + ' ' + staggerClassName;
          var applyClasses = !lookupCache[staggerCacheKey];

          applyClasses && element.addClass(staggerClassName);

          stagger = getElementAnimationDetails(element, staggerCacheKey);

          applyClasses && element.removeClass(staggerClassName);
        }

        element.addClass(className);

        var timings = getElementAnimationDetails(element, eventCacheKey);

        /* there is no point in performing a reflow if the animation
           timeout is empty (this would cause a flicker bug normally
           in the page. There is also no point in performing an animation
           that only has a delay and no duration */
        var maxDuration = Math.max(timings.transitionDuration, timings.animationDuration);
        if(maxDuration === 0) {
          element.removeClass(className);
          return false;
        }

        //temporarily disable the transition so that the enter styles
        //don't animate twice (this is here to avoid a bug in Chrome/FF).
        var activeClassName = '';
        if(timings.transitionDuration > 0) {
          element.addClass(NG_ANIMATE_FALLBACK_CLASS_NAME);
          activeClassName += NG_ANIMATE_FALLBACK_ACTIVE_CLASS_NAME + ' ';
          blockTransitions(element);
        } else {
          blockKeyframeAnimations(element);
        }

        forEach(className.split(' '), function(klass, i) {
          activeClassName += (i > 0 ? ' ' : '') + klass + '-active';
        });

        element.data(NG_ANIMATE_CSS_DATA_KEY, {
          className : className,
          activeClassName : activeClassName,
          maxDuration : maxDuration,
          classes : className + ' ' + activeClassName,
          timings : timings,
          stagger : stagger,
          ii : ii
        });

        return true;
      }

      function blockTransitions(element) {
        extractElementNode(element).style[TRANSITION_PROP + PROPERTY_KEY] = 'none';
      }

      function blockKeyframeAnimations(element) {
        extractElementNode(element).style[ANIMATION_PROP] = 'none 0s';
      }

      function unblockTransitions(element) {
        var prop = TRANSITION_PROP + PROPERTY_KEY;
        var node = extractElementNode(element);
        if(node.style[prop] && node.style[prop].length > 0) {
          node.style[prop] = '';
        }
      }

      function unblockKeyframeAnimations(element) {
        var prop = ANIMATION_PROP;
        var node = extractElementNode(element);
        if(node.style[prop] && node.style[prop].length > 0) {
          node.style[prop] = '';
        }
      }

      function animateRun(element, className, activeAnimationComplete) {
        var data = element.data(NG_ANIMATE_CSS_DATA_KEY);
        var node = extractElementNode(element);
        if(node.className.indexOf(className) == -1 || !data) {
          activeAnimationComplete();
          return;
        }

        var timings = data.timings;
        var stagger = data.stagger;
        var maxDuration = data.maxDuration;
        var activeClassName = data.activeClassName;
        var maxDelayTime = Math.max(timings.transitionDelay, timings.animationDelay) * 1000;
        var startTime = Date.now();
        var css3AnimationEvents = ANIMATIONEND_EVENT + ' ' + TRANSITIONEND_EVENT;
        var ii = data.ii;

        var applyFallbackStyle, style = '', appliedStyles = [];
        if(timings.transitionDuration > 0) {
          var propertyStyle = timings.transitionPropertyStyle;
          if(propertyStyle.indexOf('all') == -1) {
            applyFallbackStyle = true;
            var fallbackProperty = $sniffer.msie ? '-ms-zoom' : 'border-spacing';
            style += CSS_PREFIX + 'transition-property: ' + propertyStyle + ', ' + fallbackProperty + '; ';
            style += CSS_PREFIX + 'transition-duration: ' + timings.transitionDurationStyle + ', ' + timings.transitionDuration + 's; ';
            appliedStyles.push(CSS_PREFIX + 'transition-property');
            appliedStyles.push(CSS_PREFIX + 'transition-duration');
          }
        }

        if(ii > 0) {
          if(stagger.transitionDelay > 0 && stagger.transitionDuration === 0) {
            var delayStyle = timings.transitionDelayStyle;
            if(applyFallbackStyle) {
              delayStyle += ', ' + timings.transitionDelay + 's';
            }

            style += CSS_PREFIX + 'transition-delay: ' +
                     prepareStaggerDelay(delayStyle, stagger.transitionDelay, ii) + '; ';
            appliedStyles.push(CSS_PREFIX + 'transition-delay');
          }

          if(stagger.animationDelay > 0 && stagger.animationDuration === 0) {
            style += CSS_PREFIX + 'animation-delay: ' +
                     prepareStaggerDelay(timings.animationDelayStyle, stagger.animationDelay, ii) + '; ';
            appliedStyles.push(CSS_PREFIX + 'animation-delay');
          }
        }

        if(appliedStyles.length > 0) {
          //the element being animated may sometimes contain comment nodes in
          //the jqLite object, so we're safe to use a single variable to house
          //the styles since there is always only one element being animated
          var oldStyle = node.getAttribute('style') || '';
          node.setAttribute('style', oldStyle + ' ' + style);
        }

        element.on(css3AnimationEvents, onAnimationProgress);
        element.addClass(activeClassName);

        // This will automatically be called by $animate so
        // there is no need to attach this internally to the
        // timeout done method.
        return function onEnd(cancelled) {
          element.off(css3AnimationEvents, onAnimationProgress);
          element.removeClass(activeClassName);
          animateClose(element, className);
          var node = extractElementNode(element);
          for (var i in appliedStyles) {
            node.style.removeProperty(appliedStyles[i]);
          }
        };

        function onAnimationProgress(event) {
          event.stopPropagation();
          var ev = event.originalEvent || event;
          var timeStamp = ev.$manualTimeStamp || ev.timeStamp || Date.now();
          
          /* Firefox (or possibly just Gecko) likes to not round values up
           * when a ms measurement is used for the animation */
          var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));

          /* $manualTimeStamp is a mocked timeStamp value which is set
           * within browserTrigger(). This is only here so that tests can
           * mock animations properly. Real events fallback to event.timeStamp,
           * or, if they don't, then a timeStamp is automatically created for them.
           * We're checking to see if the timeStamp surpasses the expected delay,
           * but we're using elapsedTime instead of the timeStamp on the 2nd
           * pre-condition since animations sometimes close off early */
          if(Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
            activeAnimationComplete();
          }
        }
      }

      function prepareStaggerDelay(delayStyle, staggerDelay, index) {
        var style = '';
        forEach(delayStyle.split(','), function(val, i) {
          style += (i > 0 ? ',' : '') +
                   (index * staggerDelay + parseInt(val, 10)) + 's';
        });
        return style;
      }

      function animateBefore(element, className) {
        if(animateSetup(element, className)) {
          return function(cancelled) {
            cancelled && animateClose(element, className);
          };
        }
      }

      function animateAfter(element, className, afterAnimationComplete) {
        if(element.data(NG_ANIMATE_CSS_DATA_KEY)) {
          return animateRun(element, className, afterAnimationComplete);
        } else {
          animateClose(element, className);
          afterAnimationComplete();
        }
      }

      function animate(element, className, animationComplete) {
        //If the animateSetup function doesn't bother returning a
        //cancellation function then it means that there is no animation
        //to perform at all
        var preReflowCancellation = animateBefore(element, className);
        if(!preReflowCancellation) {
          animationComplete();
          return;
        }

        //There are two cancellation functions: one is before the first
        //reflow animation and the second is during the active state
        //animation. The first function will take care of removing the
        //data from the element which will not make the 2nd animation
        //happen in the first place
        var cancel = preReflowCancellation;
        afterReflow(function() {
          unblockTransitions(element);
          unblockKeyframeAnimations(element);
          //once the reflow is complete then we point cancel to
          //the new cancellation function which will remove all of the
          //animation properties from the active animation
          cancel = animateAfter(element, className, animationComplete);
        });

        return function(cancelled) {
          (cancel || noop)(cancelled);
        };
      }

      function animateClose(element, className) {
        element.removeClass(className);
        element.removeClass(NG_ANIMATE_FALLBACK_CLASS_NAME);
        element.removeData(NG_ANIMATE_CSS_DATA_KEY);
      }

      return {
        allowCancel : function(element, animationEvent, className) {
          //always cancel the current animation if it is a
          //structural animation
          var oldClasses = (element.data(NG_ANIMATE_CSS_DATA_KEY) || {}).classes;
          if(!oldClasses || ['enter','leave','move'].indexOf(animationEvent) >= 0) {
            return true;
          }

          var parentElement = element.parent();
          var clone = angular.element(extractElementNode(element).cloneNode());

          //make the element super hidden and override any CSS style values
          clone.attr('style','position:absolute; top:-9999px; left:-9999px');
          clone.removeAttr('id');
          clone.html('');

          forEach(oldClasses.split(' '), function(klass) {
            clone.removeClass(klass);
          });

          var suffix = animationEvent == 'addClass' ? '-add' : '-remove';
          clone.addClass(suffixClasses(className, suffix));
          parentElement.append(clone);

          var timings = getElementAnimationDetails(clone);
          clone.remove();

          return Math.max(timings.transitionDuration, timings.animationDuration) > 0;
        },

        enter : function(element, animationCompleted) {
          return animate(element, 'ng-enter', animationCompleted);
        },

        leave : function(element, animationCompleted) {
          return animate(element, 'ng-leave', animationCompleted);
        },

        move : function(element, animationCompleted) {
          return animate(element, 'ng-move', animationCompleted);
        },

        beforeAddClass : function(element, className, animationCompleted) {
          var cancellationMethod = animateBefore(element, suffixClasses(className, '-add'));
          if(cancellationMethod) {
            afterReflow(function() {
              unblockTransitions(element);
              unblockKeyframeAnimations(element);
              animationCompleted();
            });
            return cancellationMethod;
          }
          animationCompleted();
        },

        addClass : function(element, className, animationCompleted) {
          return animateAfter(element, suffixClasses(className, '-add'), animationCompleted);
        },

        beforeRemoveClass : function(element, className, animationCompleted) {
          var cancellationMethod = animateBefore(element, suffixClasses(className, '-remove'));
          if(cancellationMethod) {
            afterReflow(function() {
              unblockTransitions(element);
              unblockKeyframeAnimations(element);
              animationCompleted();
            });
            return cancellationMethod;
          }
          animationCompleted();
        },

        removeClass : function(element, className, animationCompleted) {
          return animateAfter(element, suffixClasses(className, '-remove'), animationCompleted);
        }
      };

      function suffixClasses(classes, suffix) {
        var className = '';
        classes = angular.isArray(classes) ? classes : classes.split(/\s+/);
        forEach(classes, function(klass, i) {
          if(klass && klass.length > 0) {
            className += (i > 0 ? ' ' : '') + klass + suffix;
          }
        });
        return className;
      }
    }]);
  }]);


})(window, window.angular);

/*
 AngularJS v1.2.4
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(t,c,A){'use strict';function x(r,m,d,b,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(l,z,k,B,w){function v(){g&&(g.$destroy(),g=null);q&&(h.leave(q),q=null)}function u(){var a=r.current&&r.current.locals,e=a&&a.$template;if(e){var y=l.$new(),s=w(y,c.noop);s.html(e);h.enter(s,null,q||z,function(){!c.isDefined(n)||n&&!l.$eval(n)||m()});v();var e=d(s.contents()),f=r.current;g=f.scope=y;q=s;f.controller&&(a.$scope=g,a=b(f.controller,a),f.controllerAs&&
(g[f.controllerAs]=a),s.data("$ngControllerController",a),s.children().data("$ngControllerController",a));e(g);g.$emit("$viewContentLoaded");g.$eval(p)}else v()}var g,q,n=k.autoscroll,p=k.onload||"";l.$on("$routeChangeSuccess",u);u()}}}t=c.module("ngRoute",["ng"]).provider("$route",function(){function r(b,h){return c.extend(new (c.extend(function(){},{prototype:b})),h)}function m(b,c){var l=c.caseInsensitiveMatch,d={originalPath:b,regexp:b},k=d.keys=[];b=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,
function(b,c,h,d){b="?"===d?d:null;d="*"===d?d:null;k.push({name:h,optional:!!b});c=c||"";return""+(b?"":c)+"(?:"+(b?c:"")+(d&&"(.+?)"||"([^/]+)")+(b||"")+")"+(b||"")}).replace(/([\/$\*])/g,"\\$1");d.regexp=RegExp("^"+b+"$",l?"i":"");return d}var d={};this.when=function(b,h){d[b]=c.extend({reloadOnSearch:!0},h,b&&m(b,h));if(b){var l="/"==b[b.length-1]?b.substr(0,b.length-1):b+"/";d[l]=c.extend({redirectTo:b},m(l,h))}return this};this.otherwise=function(b){this.when(null,b);return this};this.$get=
["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(b,h,l,m,k,t,w,v){function u(){var a=g(),e=p.current;if(a&&e&&a.$$route===e.$$route&&c.equals(a.pathParams,e.pathParams)&&!a.reloadOnSearch&&!n)e.params=a.params,c.copy(e.params,l),b.$broadcast("$routeUpdate",e);else if(a||e)n=!1,b.$broadcast("$routeChangeStart",a,e),(p.current=a)&&a.redirectTo&&(c.isString(a.redirectTo)?h.path(q(a.redirectTo,a.params)).search(a.params).replace():h.url(a.redirectTo(a.pathParams,
h.path(),h.search())).replace()),m.when(a).then(function(){if(a){var b=c.extend({},a.resolve),e,f;c.forEach(b,function(a,e){b[e]=c.isString(a)?k.get(a):k.invoke(a)});c.isDefined(e=a.template)?c.isFunction(e)&&(e=e(a.params)):c.isDefined(f=a.templateUrl)&&(c.isFunction(f)&&(f=f(a.params)),f=v.getTrustedResourceUrl(f),c.isDefined(f)&&(a.loadedTemplateUrl=f,e=t.get(f,{cache:w}).then(function(a){return a.data})));c.isDefined(e)&&(b.$template=e);return m.all(b)}}).then(function(d){a==p.current&&(a&&(a.locals=
d,c.copy(a.params,l)),b.$broadcast("$routeChangeSuccess",a,e))},function(c){a==p.current&&b.$broadcast("$routeChangeError",a,e,c)})}function g(){var a,b;c.forEach(d,function(d,l){var f;if(f=!b){var g=h.path();f=d.keys;var m={};if(d.regexp)if(g=d.regexp.exec(g)){for(var k=1,q=g.length;k<q;++k){var n=f[k-1],p="string"==typeof g[k]?decodeURIComponent(g[k]):g[k];n&&p&&(m[n.name]=p)}f=m}else f=null;else f=null;f=a=f}f&&(b=r(d,{params:c.extend({},h.search(),a),pathParams:a}),b.$$route=d)});return b||d[null]&&
r(d[null],{params:{},pathParams:{}})}function q(a,b){var d=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var g=a.match(/(\w+)(.*)/),h=g[1];d.push(b[h]);d.push(g[2]||"");delete b[h]}});return d.join("")}var n=!1,p={routes:d,reload:function(){n=!0;b.$evalAsync(u)}};b.$on("$locationChangeSuccess",u);return p}]});t.provider("$routeParams",function(){this.$get=function(){return{}}});t.directive("ngView",x);x.$inject=["$route","$anchorScroll","$compile","$controller","$animate"]})(window,
window.angular);
//# sourceMappingURL=angular-route.min.js.map

/**
 * @license AngularJS v1.2.4
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc overview
 * @name ngTouch
 * @description
 *
 * # ngTouch
 *
 * The `ngTouch` module provides touch events and other helpers for touch-enabled devices.
 * The implementation is based on jQuery Mobile touch event handling 
 * ([jquerymobile.com](http://jquerymobile.com/)).
 *
 * {@installModule touch}
 *
 * See {@link ngTouch.$swipe `$swipe`} for usage.
 *
 * <div doc-module-components="ngTouch"></div>
 *
 */

// define ngTouch module
/* global -ngTouch */
var ngTouch = angular.module('ngTouch', []);

/* global ngTouch: false */

    /**
     * @ngdoc object
     * @name ngTouch.$swipe
     *
     * @description
     * The `$swipe` service is a service that abstracts the messier details of hold-and-drag swipe
     * behavior, to make implementing swipe-related directives more convenient.
     *
     * Requires the {@link ngTouch `ngTouch`} module to be installed.
     *
     * `$swipe` is used by the `ngSwipeLeft` and `ngSwipeRight` directives in `ngTouch`, and by
     * `ngCarousel` in a separate component.
     *
     * # Usage
     * The `$swipe` service is an object with a single method: `bind`. `bind` takes an element
     * which is to be watched for swipes, and an object with four handler functions. See the
     * documentation for `bind` below.
     */

ngTouch.factory('$swipe', [function() {
  // The total distance in any direction before we make the call on swipe vs. scroll.
  var MOVE_BUFFER_RADIUS = 10;

  function getCoordinates(event) {
    var touches = event.touches && event.touches.length ? event.touches : [event];
    var e = (event.changedTouches && event.changedTouches[0]) ||
        (event.originalEvent && event.originalEvent.changedTouches &&
            event.originalEvent.changedTouches[0]) ||
        touches[0].originalEvent || touches[0];

    return {
      x: e.clientX,
      y: e.clientY
    };
  }

  return {
    /**
     * @ngdoc method
     * @name ngTouch.$swipe#bind
     * @methodOf ngTouch.$swipe
     *
     * @description
     * The main method of `$swipe`. It takes an element to be watched for swipe motions, and an
     * object containing event handlers.
     *
     * The four events are `start`, `move`, `end`, and `cancel`. `start`, `move`, and `end`
     * receive as a parameter a coordinates object of the form `{ x: 150, y: 310 }`.
     *
     * `start` is called on either `mousedown` or `touchstart`. After this event, `$swipe` is
     * watching for `touchmove` or `mousemove` events. These events are ignored until the total
     * distance moved in either dimension exceeds a small threshold.
     *
     * Once this threshold is exceeded, either the horizontal or vertical delta is greater.
     * - If the horizontal distance is greater, this is a swipe and `move` and `end` events follow.
     * - If the vertical distance is greater, this is a scroll, and we let the browser take over.
     *   A `cancel` event is sent.
     *
     * `move` is called on `mousemove` and `touchmove` after the above logic has determined that
     * a swipe is in progress.
     *
     * `end` is called when a swipe is successfully completed with a `touchend` or `mouseup`.
     *
     * `cancel` is called either on a `touchcancel` from the browser, or when we begin scrolling
     * as described above.
     *
     */
    bind: function(element, eventHandlers) {
      // Absolute total movement, used to control swipe vs. scroll.
      var totalX, totalY;
      // Coordinates of the start position.
      var startCoords;
      // Last event's position.
      var lastPos;
      // Whether a swipe is active.
      var active = false;

      element.on('touchstart mousedown', function(event) {
        startCoords = getCoordinates(event);
        active = true;
        totalX = 0;
        totalY = 0;
        lastPos = startCoords;
        eventHandlers['start'] && eventHandlers['start'](startCoords, event);
      });

      element.on('touchcancel', function(event) {
        active = false;
        eventHandlers['cancel'] && eventHandlers['cancel'](event);
      });

      element.on('touchmove mousemove', function(event) {
        if (!active) return;

        // Android will send a touchcancel if it thinks we're starting to scroll.
        // So when the total distance (+ or - or both) exceeds 10px in either direction,
        // we either:
        // - On totalX > totalY, we send preventDefault() and treat this as a swipe.
        // - On totalY > totalX, we let the browser handle it as a scroll.

        if (!startCoords) return;
        var coords = getCoordinates(event);

        totalX += Math.abs(coords.x - lastPos.x);
        totalY += Math.abs(coords.y - lastPos.y);

        lastPos = coords;

        if (totalX < MOVE_BUFFER_RADIUS && totalY < MOVE_BUFFER_RADIUS) {
          return;
        }

        // One of totalX or totalY has exceeded the buffer, so decide on swipe vs. scroll.
        if (totalY > totalX) {
          // Allow native scrolling to take over.
          active = false;
          eventHandlers['cancel'] && eventHandlers['cancel'](event);
          return;
        } else {
          // Prevent the browser from scrolling.
          event.preventDefault();
          eventHandlers['move'] && eventHandlers['move'](coords, event);
        }
      });

      element.on('touchend mouseup', function(event) {
        if (!active) return;
        active = false;
        eventHandlers['end'] && eventHandlers['end'](getCoordinates(event), event);
      });
    }
  };
}]);

/* global ngTouch: false */

/**
 * @ngdoc directive
 * @name ngTouch.directive:ngClick
 *
 * @description
 * A more powerful replacement for the default ngClick designed to be used on touchscreen
 * devices. Most mobile browsers wait about 300ms after a tap-and-release before sending
 * the click event. This version handles them immediately, and then prevents the
 * following click event from propagating.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * This directive can fall back to using an ordinary click event, and so works on desktop
 * browsers as well as mobile.
 *
 * This directive also sets the CSS class `ng-click-active` while the element is being held
 * down (by a mouse click or touch) so you can restyle the depressed element if you wish.
 *
 * @element ANY
 * @param {expression} ngClick {@link guide/expression Expression} to evaluate
 * upon tap. (Event object is available as `$event`)
 *
 * @example
    <doc:example>
      <doc:source>
        <button ng-click="count = count + 1" ng-init="count=0">
          Increment
        </button>
        count: {{ count }}
      </doc:source>
    </doc:example>
 */

ngTouch.config(['$provide', function($provide) {
  $provide.decorator('ngClickDirective', ['$delegate', function($delegate) {
    // drop the default ngClick directive
    $delegate.shift();
    return $delegate;
  }]);
}]);

ngTouch.directive('ngClick', ['$parse', '$timeout', '$rootElement',
    function($parse, $timeout, $rootElement) {
  var TAP_DURATION = 750; // Shorter than 750ms is a tap, longer is a taphold or drag.
  var MOVE_TOLERANCE = 12; // 12px seems to work in most mobile browsers.
  var PREVENT_DURATION = 2500; // 2.5 seconds maximum from preventGhostClick call to click
  var CLICKBUSTER_THRESHOLD = 25; // 25 pixels in any dimension is the limit for busting clicks.

  var ACTIVE_CLASS_NAME = 'ng-click-active';
  var lastPreventedTime;
  var touchCoordinates;


  // TAP EVENTS AND GHOST CLICKS
  //
  // Why tap events?
  // Mobile browsers detect a tap, then wait a moment (usually ~300ms) to see if you're
  // double-tapping, and then fire a click event.
  //
  // This delay sucks and makes mobile apps feel unresponsive.
  // So we detect touchstart, touchmove, touchcancel and touchend ourselves and determine when
  // the user has tapped on something.
  //
  // What happens when the browser then generates a click event?
  // The browser, of course, also detects the tap and fires a click after a delay. This results in
  // tapping/clicking twice. So we do "clickbusting" to prevent it.
  //
  // How does it work?
  // We attach global touchstart and click handlers, that run during the capture (early) phase.
  // So the sequence for a tap is:
  // - global touchstart: Sets an "allowable region" at the point touched.
  // - element's touchstart: Starts a touch
  // (- touchmove or touchcancel ends the touch, no click follows)
  // - element's touchend: Determines if the tap is valid (didn't move too far away, didn't hold
  //   too long) and fires the user's tap handler. The touchend also calls preventGhostClick().
  // - preventGhostClick() removes the allowable region the global touchstart created.
  // - The browser generates a click event.
  // - The global click handler catches the click, and checks whether it was in an allowable region.
  //     - If preventGhostClick was called, the region will have been removed, the click is busted.
  //     - If the region is still there, the click proceeds normally. Therefore clicks on links and
  //       other elements without ngTap on them work normally.
  //
  // This is an ugly, terrible hack!
  // Yeah, tell me about it. The alternatives are using the slow click events, or making our users
  // deal with the ghost clicks, so I consider this the least of evils. Fortunately Angular
  // encapsulates this ugly logic away from the user.
  //
  // Why not just put click handlers on the element?
  // We do that too, just to be sure. The problem is that the tap event might have caused the DOM
  // to change, so that the click fires in the same position but something else is there now. So
  // the handlers are global and care only about coordinates and not elements.

  // Checks if the coordinates are close enough to be within the region.
  function hit(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) < CLICKBUSTER_THRESHOLD && Math.abs(y1 - y2) < CLICKBUSTER_THRESHOLD;
  }

  // Checks a list of allowable regions against a click location.
  // Returns true if the click should be allowed.
  // Splices out the allowable region from the list after it has been used.
  function checkAllowableRegions(touchCoordinates, x, y) {
    for (var i = 0; i < touchCoordinates.length; i += 2) {
      if (hit(touchCoordinates[i], touchCoordinates[i+1], x, y)) {
        touchCoordinates.splice(i, i + 2);
        return true; // allowable region
      }
    }
    return false; // No allowable region; bust it.
  }

  // Global click handler that prevents the click if it's in a bustable zone and preventGhostClick
  // was called recently.
  function onClick(event) {
    if (Date.now() - lastPreventedTime > PREVENT_DURATION) {
      return; // Too old.
    }

    var touches = event.touches && event.touches.length ? event.touches : [event];
    var x = touches[0].clientX;
    var y = touches[0].clientY;
    // Work around desktop Webkit quirk where clicking a label will fire two clicks (on the label
    // and on the input element). Depending on the exact browser, this second click we don't want
    // to bust has either (0,0) or negative coordinates.
    if (x < 1 && y < 1) {
      return; // offscreen
    }

    // Look for an allowable region containing this click.
    // If we find one, that means it was created by touchstart and not removed by
    // preventGhostClick, so we don't bust it.
    if (checkAllowableRegions(touchCoordinates, x, y)) {
      return;
    }

    // If we didn't find an allowable region, bust the click.
    event.stopPropagation();
    event.preventDefault();

    // Blur focused form elements
    event.target && event.target.blur();
  }


  // Global touchstart handler that creates an allowable region for a click event.
  // This allowable region can be removed by preventGhostClick if we want to bust it.
  function onTouchStart(event) {
    var touches = event.touches && event.touches.length ? event.touches : [event];
    var x = touches[0].clientX;
    var y = touches[0].clientY;
    touchCoordinates.push(x, y);

    $timeout(function() {
      // Remove the allowable region.
      for (var i = 0; i < touchCoordinates.length; i += 2) {
        if (touchCoordinates[i] == x && touchCoordinates[i+1] == y) {
          touchCoordinates.splice(i, i + 2);
          return;
        }
      }
    }, PREVENT_DURATION, false);
  }

  // On the first call, attaches some event handlers. Then whenever it gets called, it creates a
  // zone around the touchstart where clicks will get busted.
  function preventGhostClick(x, y) {
    if (!touchCoordinates) {
      $rootElement[0].addEventListener('click', onClick, true);
      $rootElement[0].addEventListener('touchstart', onTouchStart, true);
      touchCoordinates = [];
    }

    lastPreventedTime = Date.now();

    checkAllowableRegions(touchCoordinates, x, y);
  }

  // Actual linking function.
  return function(scope, element, attr) {
    var clickHandler = $parse(attr.ngClick),
        tapping = false,
        tapElement,  // Used to blur the element after a tap.
        startTime,   // Used to check if the tap was held too long.
        touchStartX,
        touchStartY;

    function resetState() {
      tapping = false;
      element.removeClass(ACTIVE_CLASS_NAME);
    }

    element.on('touchstart', function(event) {
      tapping = true;
      tapElement = event.target ? event.target : event.srcElement; // IE uses srcElement.
      // Hack for Safari, which can target text nodes instead of containers.
      if(tapElement.nodeType == 3) {
        tapElement = tapElement.parentNode;
      }

      element.addClass(ACTIVE_CLASS_NAME);

      startTime = Date.now();

      var touches = event.touches && event.touches.length ? event.touches : [event];
      var e = touches[0].originalEvent || touches[0];
      touchStartX = e.clientX;
      touchStartY = e.clientY;
    });

    element.on('touchmove', function(event) {
      resetState();
    });

    element.on('touchcancel', function(event) {
      resetState();
    });

    element.on('touchend', function(event) {
      var diff = Date.now() - startTime;

      var touches = (event.changedTouches && event.changedTouches.length) ? event.changedTouches :
          ((event.touches && event.touches.length) ? event.touches : [event]);
      var e = touches[0].originalEvent || touches[0];
      var x = e.clientX;
      var y = e.clientY;
      var dist = Math.sqrt( Math.pow(x - touchStartX, 2) + Math.pow(y - touchStartY, 2) );

      if (tapping && diff < TAP_DURATION && dist < MOVE_TOLERANCE) {
        // Call preventGhostClick so the clickbuster will catch the corresponding click.
        preventGhostClick(x, y);

        // Blur the focused element (the button, probably) before firing the callback.
        // This doesn't work perfectly on Android Chrome, but seems to work elsewhere.
        // I couldn't get anything to work reliably on Android Chrome.
        if (tapElement) {
          tapElement.blur();
        }

        if (!angular.isDefined(attr.disabled) || attr.disabled === false) {
          element.triggerHandler('click', [event]);
        }
      }

      resetState();
    });

    // Hack for iOS Safari's benefit. It goes searching for onclick handlers and is liable to click
    // something else nearby.
    element.onclick = function(event) { };

    // Actual click handler.
    // There are three different kinds of clicks, only two of which reach this point.
    // - On desktop browsers without touch events, their clicks will always come here.
    // - On mobile browsers, the simulated "fast" click will call this.
    // - But the browser's follow-up slow click will be "busted" before it reaches this handler.
    // Therefore it's safe to use this directive on both mobile and desktop.
    element.on('click', function(event, touchend) {
      scope.$apply(function() {
        clickHandler(scope, {$event: (touchend || event)});
      });
    });

    element.on('mousedown', function(event) {
      element.addClass(ACTIVE_CLASS_NAME);
    });

    element.on('mousemove mouseup', function(event) {
      element.removeClass(ACTIVE_CLASS_NAME);
    });

  };
}]);

/* global ngTouch: false */

/**
 * @ngdoc directive
 * @name ngTouch.directive:ngSwipeLeft
 *
 * @description
 * Specify custom behavior when an element is swiped to the left on a touchscreen device.
 * A leftward swipe is a quick, right-to-left slide of the finger.
 * Though ngSwipeLeft is designed for touch-based devices, it will work with a mouse click and drag
 * too.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * @element ANY
 * @param {expression} ngSwipeLeft {@link guide/expression Expression} to evaluate
 * upon left swipe. (Event object is available as `$event`)
 *
 * @example
    <doc:example>
      <doc:source>
        <div ng-show="!showActions" ng-swipe-left="showActions = true">
          Some list content, like an email in the inbox
        </div>
        <div ng-show="showActions" ng-swipe-right="showActions = false">
          <button ng-click="reply()">Reply</button>
          <button ng-click="delete()">Delete</button>
        </div>
      </doc:source>
    </doc:example>
 */

/**
 * @ngdoc directive
 * @name ngTouch.directive:ngSwipeRight
 *
 * @description
 * Specify custom behavior when an element is swiped to the right on a touchscreen device.
 * A rightward swipe is a quick, left-to-right slide of the finger.
 * Though ngSwipeRight is designed for touch-based devices, it will work with a mouse click and drag
 * too.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * @element ANY
 * @param {expression} ngSwipeRight {@link guide/expression Expression} to evaluate
 * upon right swipe. (Event object is available as `$event`)
 *
 * @example
    <doc:example>
      <doc:source>
        <div ng-show="!showActions" ng-swipe-left="showActions = true">
          Some list content, like an email in the inbox
        </div>
        <div ng-show="showActions" ng-swipe-right="showActions = false">
          <button ng-click="reply()">Reply</button>
          <button ng-click="delete()">Delete</button>
        </div>
      </doc:source>
    </doc:example>
 */

function makeSwipeDirective(directiveName, direction, eventName) {
  ngTouch.directive(directiveName, ['$parse', '$swipe', function($parse, $swipe) {
    // The maximum vertical delta for a swipe should be less than 75px.
    var MAX_VERTICAL_DISTANCE = 75;
    // Vertical distance should not be more than a fraction of the horizontal distance.
    var MAX_VERTICAL_RATIO = 0.3;
    // At least a 30px lateral motion is necessary for a swipe.
    var MIN_HORIZONTAL_DISTANCE = 30;

    return function(scope, element, attr) {
      var swipeHandler = $parse(attr[directiveName]);

      var startCoords, valid;

      function validSwipe(coords) {
        // Check that it's within the coordinates.
        // Absolute vertical distance must be within tolerances.
        // Horizontal distance, we take the current X - the starting X.
        // This is negative for leftward swipes and positive for rightward swipes.
        // After multiplying by the direction (-1 for left, +1 for right), legal swipes
        // (ie. same direction as the directive wants) will have a positive delta and
        // illegal ones a negative delta.
        // Therefore this delta must be positive, and larger than the minimum.
        if (!startCoords) return false;
        var deltaY = Math.abs(coords.y - startCoords.y);
        var deltaX = (coords.x - startCoords.x) * direction;
        return valid && // Short circuit for already-invalidated swipes.
            deltaY < MAX_VERTICAL_DISTANCE &&
            deltaX > 0 &&
            deltaX > MIN_HORIZONTAL_DISTANCE &&
            deltaY / deltaX < MAX_VERTICAL_RATIO;
      }

      $swipe.bind(element, {
        'start': function(coords, event) {
          startCoords = coords;
          valid = true;
        },
        'cancel': function(event) {
          valid = false;
        },
        'end': function(coords, event) {
          if (validSwipe(coords)) {
            scope.$apply(function() {
              element.triggerHandler(eventName);
              swipeHandler(scope, {$event: event});
            });
          }
        }
      });
    };
  }]);
}

// Left is negative X-coordinate, right is positive.
makeSwipeDirective('ngSwipeLeft', -1, 'swipeleft');
makeSwipeDirective('ngSwipeRight', 1, 'swiperight');



})(window, window.angular);

"use strict";function AngularFire(e,r,t,n){if(this._q=e,this._parse=r,this._timeout=t,this._initial=!0,this._remoteValue=!1,"string"==typeof n)throw new Error("Please provide a Firebase reference instead of a URL, eg: new Firebase(url)");this._fRef=n}angular.module("firebase",[]).value("Firebase",Firebase),angular.module("firebase").factory("angularFire",["$q","$parse","$timeout",function(e,r,t){return function(n,i,a){var o=new AngularFire(e,r,t,n);return o.associate(i,a)}}]),AngularFire.prototype={associate:function(e,r){var t=this,n=this._q.defer(),i=n.promise;return this._fRef.on("value",function(i){var a=i.val(),o=angular.fromJson(angular.toJson(t._parse(r)(e)));if(t._initial){t._initial=!1;var u=!1,s=Object.prototype.toString;if(a&&s.call(o)==s.call(a))if("[object Array]"==s.call(o))u=o.concat(a),angular.equals(u,a)||(t._fRef.ref().set(u),a=u);else if("[object Object]"==s.call(o)){u=o;for(var c in a)u[c]=a[c];t._fRef.ref().update(u),a=u}null===a&&(t._fRef.ref().set(o),a=o)}var l=!1;n&&(l=n,n=!1),t._timeout(function(){t._resolve(e,r,l,a)})}),i},disassociate:function(){var e=this;e._unregister&&e._unregister(),this._fRef.off("value")},_resolve:function(e,r,t,n){var i=this;if(null===n){var a=e[r];if("object"==typeof a){var o=Object.prototype.toString;n=o.call(a)==o.call([])?[]:{}}}this._remoteValue=angular.copy(n),this._parse(r).assign(e,angular.copy(n)),t&&(t.resolve(function(){i.disassociate()}),this._watch(e,r))},_watch:function(e,r){var t=this;t._unregister=e.$watch(r,function(){if(!t._initial){var n=angular.fromJson(angular.toJson(t._parse(r)(e)));if(!angular.equals(n,t._remoteValue)){var i=Object.prototype.toString;"[object Object]"==i.call(n)?t._fRef.set?t._fRef.set(n):t._fRef.ref().update(n):t._fRef.ref().set(n)}}},!0),e.$on("$destroy",function(){t.disassociate()})},_log:function(e){console&&console.log&&console.log(e)}},angular.module("firebase").factory("angularFireCollection",["$timeout",function(e){return function(r,t){function n(e,r){this.$ref=e.ref(),this.$id=e.name(),this.$index=r,angular.extend(this,{$priority:e.getPriority()},e.val())}function i(e){return e?f[e]+1:0}function a(e,r){f[r.$id]=e,h.splice(e,0,r)}function o(e){var r=f[e];h.splice(r,1),f[e]=void 0}function u(e,r){h[e]=r}function s(e,r,t){h.splice(e,1),h.splice(r,0,t),c(e,r)}function c(e,r){var t=h.length;r=r||t,r>t&&(r=t);for(var n=e;r>n;n++){var i=h[n];i.$index=f[i.$id]=n}}if("string"==typeof r)throw new Error("Please provide a Firebase reference instead of a URL, eg: new Firebase(url)");var l=[function(e){return null==e.$priority?0:angular.isNumber(e.$priority)?1:angular.isString(e.$priority)?2:void 0},function(e){return e.$priority?e.$priority:1/0},function(e){return e.$id}],f={},h=[];return t&&"function"==typeof t&&r.once("value",t),r.on("child_added",function(r,t){e(function(){var e=i(t);a(e,new n(r,e)),c(e)})}),r.on("child_removed",function(r){e(function(){var e=r.name(),t=f[e];o(e),c(t)})}),r.on("child_changed",function(r,t){e(function(){var e=f[r.name()],a=i(t),o=new n(r,e);u(e,o),a!==e&&s(e,a,o)})}),r.on("child_moved",function(r,t){e(function(){var e=f[r.name()],n=i(t),a=h[e];s(e,n,a)})}),h.getByName=function(e){return h[f[e]]},h.add=function(e,t){var n;return n=t?r.ref().push(e,t):r.ref().push(e)},h.remove=function(e,r){var t=angular.isString(e)?h[f[e]]:e;r?t.$ref.remove(r):t.$ref.remove()},h.update=function(e,r){var t=angular.isString(e)?h[f[e]]:e,n={};angular.forEach(t,function(e,r){0!==r.indexOf("$")&&(n[r]=e)}),r?t.$ref.set(n,r):t.$ref.set(n)},h.order=l,h}}]),angular.module("firebase").factory("angularFireAuth",["$rootScope","$parse","$timeout","$location","$route","$q",function(e,r,t,n,i,a){function o(e){var r=e.split(".");if(!r instanceof Array||3!==r.length)throw new Error("Invalid JWT");var t=r[1];return window.atob?JSON.parse(decodeURIComponent(escape(window.atob(t)))):e}function u(e,n,i,a){n&&t(function(){r(n).assign(e,i),a()})}function s(e,r,t){e.authRequired&&!t._authenticated&&(t._redirectTo=void 0===e.pathTo?n.path():e.pathTo===r?"/":e.pathTo,n.replace(),n.path(r))}return{initialize:function(r,t){var n=this;if("string"==typeof r)throw new Error("Please provide a Firebase reference instead of a URL, eg: new Firebase(url)");if(t=t||{},this._scope=e,!t.scope)throw new Error("Scope not provided to angularFireAuth!");if(this._scope=t.scope,!t.name)throw new Error("Model name not provided to angularFireAuth!");if(this._name=t.name,this._cb=function(){},t.callback&&"function"==typeof t.callback&&(this._cb=t.callback),this._redirectTo=null,this._authenticated=!1,t.path&&(i.current&&s(i.current,t.path,n),e.$on("$routeChangeStart",function(e,r){s(r,t.path,n)})),this._ref=r,t.simple===!1)return u(this._scope,this._name,null,function(){}),void 0;if(!window.FirebaseSimpleLogin){var a=new Error("FirebaseSimpleLogin undefined, did you include firebase-simple-login.js?");return e.$broadcast("angularFireAuth:error",a),void 0}var o=new FirebaseSimpleLogin(this._ref,function(r,t){n._cb(r,t),r?e.$broadcast("angularFireAuth:error",r):t?n._loggedIn(t):n._loggedOut()});this._authClient=o},login:function(r,t){var n=this._watchForLogin();switch(r){case"github":case"persona":case"twitter":case"facebook":case"password":if(this._authClient)this._authClient.login(r,t);else{var i=new Error("Simple Login not initialized");e.$broadcast("angularFireAuth:error",i)}break;default:var a,u=this;try{a=o(r),this._ref.auth(r,function(r){r?e.$broadcast("angularFireAuth:error",r):u._loggedIn(a)})}catch(s){e.$broadcast("angularFireAuth:error",s)}}return n},createUser:function(r,n,i,a){var o=this;this._authClient.createUser(r,n,function(u,s){try{u?e.$broadcast("angularFireAuth:error",u):a||o.login("password",{email:r,password:n})}catch(c){e.$broadcast("angularFireAuth:error",c)}i&&t(function(){i(u,s)})})},logout:function(){this._authClient?this._authClient.logout():(this._ref.unauth(),this._loggedOut())},_loggedIn:function(r){var t=this;this._authenticated=!0,u(this._scope,this._name,r,function(){e.$broadcast("angularFireAuth:login",r),t._redirectTo&&(n.replace(),n.path(t._redirectTo),t._redirectTo=null)})},_loggedOut:function(){this._authenticated=!1,u(this._scope,this._name,null,function(){e.$broadcast("angularFireAuth:logout")})},_watchForLogin:function(){function r(e,r){t(function(){e?i.reject(e):i.resolve(r)});for(var a=0;a<n.length;a++)n[a]()}var n=[],i=a.defer();return n.push(e.$on("angularFireAuth:login",function(e,t){r(null,t)})),n.push(e.$on("angularFireAuth:error",function(e,t){r(t,null)})),i.promise}}}]);
CDV = ( typeof CDV == 'undefined' ? {} : CDV );
var cordova = window.cordova || window.Cordova;
CDV.FB = {
  init: function(apiKey, fail) {
    // create the fb-root element if it doesn't exist
    if (!document.getElementById('fb-root')) {
      var elem = document.createElement('div');
      elem.id = 'fb-root';
      document.body.appendChild(elem);
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload=function(){console.log("Endpoint saved "+ this.responseText);}
    xmlhttp.open("POST", "https://www.facebook.com/impression.php", true);
    xmlhttp.send('plugin=featured_resources&payload={"resource": "adobe_phonegap", "appid": "'+apiKey+'", "version": "3.0.0" }');

    cordova.exec(function() {
    var authResponse = JSON.parse(localStorage.getItem('cdv_fb_session') || '{"expiresIn":0}');
    if (authResponse && authResponse.expirationTime) {
      var nowTime = (new Date()).getTime();
      if (authResponse.expirationTime > nowTime) {
        // Update expires in information
        updatedExpiresIn = Math.floor((authResponse.expirationTime - nowTime) / 1000);
        authResponse.expiresIn = updatedExpiresIn;

        localStorage.setItem('cdv_fb_session', JSON.stringify(authResponse));
        FB.Auth.setAuthResponse(authResponse, 'connected');
       }
      }
      console.log('Cordova Facebook Connect plugin initialized successfully.');
    }, (fail?fail:null), 'org.apache.cordova.facebook.Connect', 'init', [apiKey]);
  },
  login: function(params, cb, fail) {
    params = params || { scope: '' };
    cordova.exec(function(e) { // login
        if (e.authResponse && e.authResponse.expiresIn) {
          var expirationTime = e.authResponse.expiresIn === 0
          ? 0
          : (new Date()).getTime() + e.authResponse.expiresIn * 1000;
          e.authResponse.expirationTime = expirationTime;
        }
        localStorage.setItem('cdv_fb_session', JSON.stringify(e.authResponse));
        FB.Auth.setAuthResponse(e.authResponse, 'connected');
        if (cb) cb(e);
    }, (fail?fail:null), 'org.apache.cordova.facebook.Connect', 'login', params.scope.split(',') );
  },
  logout: function(cb, fail) {
    cordova.exec(function(e) {
      localStorage.removeItem('cdv_fb_session');
      FB.Auth.setAuthResponse(null, 'notConnected');
      if (cb) cb(e);
    }, (fail?fail:null), 'org.apache.cordova.facebook.Connect', 'logout', []);
  },
  getLoginStatus: function(cb, fail) {
    cordova.exec(function(e) {
      if (cb) cb(e);
    }, (fail?fail:null), 'org.apache.cordova.facebook.Connect', 'getLoginStatus', []);
  },
  dialog: function(params, cb, fail) {
    cordova.exec(function(e) { // login
      if (cb) cb(e);
                  }, (fail?fail:null), 'org.apache.cordova.facebook.Connect', 'showDialog', [params] );
  }
};

(function() {var COMPILED=!0,goog=goog||{};goog.global=this;goog.DEBUG=!0;goog.LOCALE="en";goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!goog.getObjectByName(b);)goog.implicitNamespaces_[b]=!0}goog.exportPath_(a)};goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};
COMPILED||(goog.isProvided_=function(a){return!goog.implicitNamespaces_[a]&&!!goog.getObjectByName(a)},goog.implicitNamespaces_={});goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};
goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};goog.addDependency=function(a,b,c){if(!COMPILED){for(var d,a=a.replace(/\\/g,"/"),e=goog.dependencies_,f=0;d=b[f];f++){e.nameToPath[d]=a;a in e.pathToNames||(e.pathToNames[a]={});e.pathToNames[a][d]=true}for(d=0;b=c[d];d++){a in e.requires||(e.requires[a]={});e.requires[a][b]=true}}};goog.ENABLE_DEBUG_LOADER=!0;
goog.require=function(a){if(!COMPILED&&!goog.isProvided_(a)){if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b){goog.included_[b]=true;goog.writeScripts_();return}}a="goog.require could not find: "+a;goog.global.console&&goog.global.console.error(a);throw Error(a);}};goog.basePath="";goog.nullFunction=function(){};goog.identityFunction=function(a){return a};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};
goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];
!COMPILED&&goog.ENABLE_DEBUG_LOADER&&(goog.included_={},goog.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return typeof a!="undefined"&&"write"in a},goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("script"),b=a.length-1;b>=0;--b){var c=a[b].src,d=c.lastIndexOf("?"),
d=d==-1?c.length:d;if(c.substr(d-7,7)=="base.js"){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a){var b=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;!goog.dependencies_.written[a]&&b(a)&&(goog.dependencies_.written[a]=true)},goog.writeScriptTag_=function(a){if(goog.inHtmlDocument_()){goog.global.document.write('<script type="text/javascript" src="'+a+'"><\/script>');return true}return false},goog.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in
d.visited)){d.visited[e]=true;if(e in d.requires)for(var g in d.requires[e])if(!goog.isProvided_(g))if(g in d.nameToPath)a(d.nameToPath[g]);else throw Error("Undefined nameToPath for "+g);}if(!(e in c)){c[e]=true;b.push(e)}}}var b=[],c={},d=goog.dependencies_,e;for(e in goog.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])goog.importScript_(goog.basePath+b[e]);else throw Error("Undefined script input");},goog.getPathFromDeps_=function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:
null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));
goog.typeOf=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b};goog.isDef=function(a){return a!==void 0};goog.isNull=function(a){return a===null};goog.isDefAndNotNull=function(a){return a!=null};goog.isArray=function(a){return goog.typeOf(a)=="array"};goog.isArrayLike=function(a){var b=goog.typeOf(a);return b=="array"||b=="object"&&typeof a.length=="number"};goog.isDateLike=function(a){return goog.isObject(a)&&typeof a.getFullYear=="function"};
goog.isString=function(a){return typeof a=="string"};goog.isBoolean=function(a){return typeof a=="boolean"};goog.isNumber=function(a){return typeof a=="number"};goog.isFunction=function(a){return goog.typeOf(a)=="function"};goog.isObject=function(a){var b=typeof a;return b=="object"&&a!=null||b=="function"};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};
goog.UID_PROPERTY_="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if(b=="object"||b=="array"){if(a.clone)return a.clone();var b=b=="array"?[]:{},c;for(c in a)b[c]=goog.cloneObject(a[c]);return b}return a};goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};goog.bind=function(a,b,c){goog.bind=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?goog.bindNative_:goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval){if(goog.evalWorksForGlobals_==null){goog.global.eval("var _et_ = 1;");if(typeof goog.global._et_!="undefined"){delete goog.global._et_;goog.evalWorksForGlobals_=true}else goog.evalWorksForGlobals_=false}if(goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=false;c.appendChild(b.createTextNode(a));
b.body.appendChild(c);b.body.removeChild(c)}}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,b){var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){for(var a=a.split("-"),b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=goog.cssNameMapping_?goog.cssNameMappingStyle_=="BY_WHOLE"?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};
goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b){var c=b||{},d;for(d in c)var e=(""+c[d]).replace(/\$/g,"$$$$"),a=a.replace(RegExp("\\{\\$"+d+"\\}","gi"),e);return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};goog.exportProperty=function(a,b,c){a[b]=c};
goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),f=false,g=a.constructor;g;g=g.superClass_&&g.superClass_.constructor)if(g.prototype[b]===d)f=true;else if(f)return g.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};
goog.scope=function(a){a.call(goog.global)};var fb={util:{}};fb.util.validation={};fb.util.validation.validateArgCount=function(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");};
fb.util.validation.errorPrefix_=function(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:fb.core.util.validation.assert(!1,"errorPrefix_ called with argumentNumber > 4.  Need to update it?")}return a+" failed: "+(d+" argument ")};
fb.util.validation.validateNamespace=function(a,b,c,d){if((!d||goog.isDef(c))&&!goog.isString(c))throw Error(fb.util.validation.errorPrefix_(a,b,d)+"must be a valid firebase namespace.");};fb.util.validation.validateCallback=function(a,b,c,d){if((!d||goog.isDef(c))&&!goog.isFunction(c))throw Error(fb.util.validation.errorPrefix_(a,b,d)+"must be a valid function.");};
fb.util.validation.validateString=function(a,b,c,d){if((!d||goog.isDef(c))&&!goog.isString(c))throw Error(fb.util.validation.errorPrefix_(a,b,d)+"must be a valid string.");};fb.util.validation.validateContextObject=function(a,b,c,d){if(!d||goog.isDef(c))if(!goog.isObject(c)||null===c)throw Error(fb.util.validation.errorPrefix_(a,b,d)+"must be a valid context object.");};fb.simplelogin={};fb.simplelogin.persona={};fb.simplelogin.persona.login=function(a){navigator.id.watch({onlogin:function(b){a(b)},onlogout:function(){}});navigator.id.request({oncancel:function(){a(null)}})};fb.constants={};var NODE_CLIENT=!1;goog.json={};goog.json.isValid_=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))};goog.json.parse=function(a){a=String(a);if(goog.json.isValid_(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};
goog.json.unsafeParse=function(a){return eval("("+a+")")};goog.json.serialize=function(a,b){return(new goog.json.Serializer(b)).serialize(a)};goog.json.Serializer=function(a){this.replacer_=a};goog.json.Serializer.prototype.serialize=function(a){var b=[];this.serialize_(a,b);return b.join("")};
goog.json.Serializer.prototype.serialize_=function(a,b){switch(typeof a){case "string":this.serializeString_(a,b);break;case "number":this.serializeNumber_(a,b);break;case "boolean":b.push(a);break;case "undefined":b.push("null");break;case "object":if(null==a){b.push("null");break}if(goog.isArray(a)){this.serializeArray(a,b);break}this.serializeObject_(a,b);break;case "function":break;default:throw Error("Unknown type: "+typeof a);}};
goog.json.Serializer.charToJsonCharCache_={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"};goog.json.Serializer.charsToReplace_=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
goog.json.Serializer.prototype.serializeString_=function(a,b){b.push('"',a.replace(goog.json.Serializer.charsToReplace_,function(a){if(a in goog.json.Serializer.charToJsonCharCache_)return goog.json.Serializer.charToJsonCharCache_[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return goog.json.Serializer.charToJsonCharCache_[a]=e+b.toString(16)}),'"')};goog.json.Serializer.prototype.serializeNumber_=function(a,b){b.push(isFinite(a)&&!isNaN(a)?a:"null")};
goog.json.Serializer.prototype.serializeArray=function(a,b){var c=a.length;b.push("[");for(var d="",e=0;e<c;e++)b.push(d),d=a[e],this.serialize_(this.replacer_?this.replacer_.call(a,String(e),d):d,b),d=",";b.push("]")};
goog.json.Serializer.prototype.serializeObject_=function(a,b){b.push("{");var c="",d;for(d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=a[d];"function"!=typeof e&&(b.push(c),this.serializeString_(d,b),b.push(":"),this.serialize_(this.replacer_?this.replacer_.call(a,d,e):e,b),c=",")}b.push("}")};fb.util.json={};fb.util.json.eval=function(a){return"undefined"!==typeof JSON&&goog.isDef(JSON.parse)?JSON.parse(a):goog.json.parse(a)};fb.util.json.stringify=function(a){return"undefined"!==typeof JSON&&goog.isDef(JSON.stringify)?JSON.stringify(a):goog.json.serialize(a)};fb.simplelogin.validation={};var VALID_EMAIL_REGEX_=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;fb.simplelogin.validation.isValidEmail=function(a){return goog.isString(a)&&VALID_EMAIL_REGEX_.test(a)};fb.simplelogin.validation.isValidPassword=function(a){return goog.isString(a)};
fb.simplelogin.validation.validateUser=function(a,b,c,d){if((!d||goog.isDef(c))&&!fb.simplelogin.validation.isValidEmail(c))throw Error(fb.util.validation.errorPrefix_(a,b,d)+"must be a valid email address.");};fb.simplelogin.validation.validatePassword=function(a,b,c,d){if((!d||goog.isDef(c))&&!fb.simplelogin.validation.isValidPassword(c))throw Error(fb.util.validation.errorPrefix_(a,b,d)+"must be a valid password.");};fb.simplelogin.winchan=function(){function a(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function b(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}function c(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}var d="die",e,f=-1,g=navigator.userAgent;if("Microsoft Internet Explorer"===navigator.appName){var h=/MSIE ([0-9]{1,}[\.0-9]{0,})/;
(g=g.match(h))&&1<g.length&&(f=parseFloat(g[1]))}else-1<g.indexOf("Trident")&&(h=/rv:([0-9]{2,2}[\.0-9]{0,})/,(g=g.match(h))&&1<g.length&&(f=parseFloat(g[1])));e=8<=f;return fb.util.json&&fb.util.json.eval&&fb.util.json.stringify&&window.postMessage?{open:function(f,g){function h(){n&&document.body.removeChild(n);n=void 0;w&&(w=clearInterval(w));b(window,"message",l);b(window,"unload",h);if(v)try{v.close()}catch(a){p.postMessage(d,r)}v=p=void 0}function l(a){if(a.origin===r)try{var b=fb.util.json.eval(a.data);
"ready"===b.a?p.postMessage(x,r):"error"===b.a?(h(),g&&(g(b.d),g=null)):"response"===b.a&&(h(),g&&(g(null,b.d),g=null))}catch(c){}}if(!g)throw"missing required callback argument";var m;f.url||(m="missing required 'url' parameter");f.relay_url||(m="missing required 'relay_url' parameter");m&&setTimeout(function(){g(m)},0);f.window_name||(f.window_name=null);var o;if(!(o=!f.window_features))a:{try{var q=navigator.userAgent;o=-1!=q.indexOf("Fennec/")||-1!=q.indexOf("Firefox/")&&-1!=q.indexOf("Android");
break a}catch(u){}o=!1}o&&(f.window_features=void 0);var n,r=c(f.url);if(r!==c(f.relay_url))return setTimeout(function(){g("invalid arguments: origin of url and relay_url must match")},0);var p;e&&(n=document.createElement("iframe"),n.setAttribute("src",f.relay_url),n.style.display="none",n.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(n),p=n.contentWindow);var v=window.open(f.url,f.window_name,f.window_features);p||(p=v);var w=setInterval(function(){if(v&&v.closed){h();if(g){g("unknown closed window");
g=null}}},500),x=fb.util.json.stringify({a:"request",d:f.params});a(window,"unload",h);a(window,"message",l);return{close:h,focus:function(){if(v)try{v.focus()}catch(a){}}}},onOpen:function(c){function f(a){a=fb.util.json.stringify(a);e?p.doPost(a,m):p.postMessage(a,m)}function g(a){var d;try{d=fb.util.json.eval(a.data)}catch(e){}d&&"request"===d.a&&(b(window,"message",g),m=a.origin,c&&setTimeout(function(){c(m,d.d,function(a){c=void 0;f({a:"response",d:a})})},0))}function h(a){if(a.data===d)try{window.close()}catch(b){}}
var m="*",o;if(e)a:{for(var q=window.location,u=window.opener.frames,q=q.protocol+"//"+q.host,n=u.length-1;0<=n;n--)try{if(0===u[n].location.href.indexOf(q)&&"__winchan_relay_frame"===u[n].name){o=u[n];break a}}catch(r){}o=void 0}else o=window.opener;var p=o;if(!p)throw"can't find relay frame";a(e?p:window,"message",g);a(e?p:window,"message",h);try{f({a:"ready"})}catch(v){a(p,"load",function(){f({a:"ready"})})}var w=function(){try{b(e?p:window,"message",h)}catch(a){}c&&f({a:"error",d:"client closed window"});
c=void 0;try{window.close()}catch(d){}};a(window,"unload",w);return{detach:function(){b(window,"unload",w)}}}}:{open:function(a,b,c,d){setTimeout(function(){d("unsupported browser")},0)},onOpen:function(a){setTimeout(function(){a("unsupported browser")},0)}}}();fb.util.sjcl={};var sjcl={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(a){this.toString=function(){return"CORRUPT: "+this.message};this.message=a},invalid:function(a){this.toString=function(){return"INVALID: "+this.message};this.message=a},bug:function(a){this.toString=function(){return"BUG: "+this.message};this.message=a},notReady:function(a){this.toString=function(){return"NOT READY: "+this.message};this.message=a}}};
"undefined"!=typeof module&&module.exports&&(module.exports=sjcl);
sjcl.cipher.aes=function(a){this.h[0][0][0]||this.w();var b,c,d,e,f=this.h[0][4],g=this.h[1];b=a.length;var h=1;if(b!==4&&b!==6&&b!==8)throw new sjcl.exception.invalid("invalid aes key size");this.a=[d=a.slice(0),e=[]];for(a=b;a<4*b+28;a++){c=d[a-1];if(a%b===0||b===8&&a%b===4){c=f[c>>>24]<<24^f[c>>16&255]<<16^f[c>>8&255]<<8^f[c&255];if(a%b===0){c=c<<8^c>>>24^h<<24;h=h<<1^(h>>7)*283}}d[a]=d[a-b]^c}for(b=0;a;b++,a--){c=d[b&3?a:a-4];e[b]=a<=4||b<4?c:g[0][f[c>>>24]]^g[1][f[c>>16&255]]^g[2][f[c>>8&255]]^
g[3][f[c&255]]}};
sjcl.cipher.aes.prototype={encrypt:function(a){return this.G(a,0)},decrypt:function(a){return this.G(a,1)},h:[[[],[],[],[],[]],[[],[],[],[],[]]],w:function(){var a=this.h[0],b=this.h[1],c=a[4],d=b[4],e,f,g,h=[],i=[],k,j,l,m;for(e=0;e<256;e++)i[(h[e]=e<<1^(e>>7)*283)^e]=e;for(f=g=0;!c[f];f=f^(k||1),g=i[g]||1){l=g^g<<1^g<<2^g<<3^g<<4;l=l>>8^l&255^99;c[f]=l;d[l]=f;j=h[e=h[k=h[f]]];m=j*16843009^e*65537^k*257^f*16843008;j=h[l]*257^l*16843008;for(e=0;e<4;e++){a[e][f]=j=j<<24^j>>>8;b[e][l]=m=m<<24^m>>>8}}for(e=
0;e<5;e++){a[e]=a[e].slice(0);b[e]=b[e].slice(0)}},G:function(a,b){if(a.length!==4)throw new sjcl.exception.invalid("invalid aes block size");var c=this.a[b],d=a[0]^c[0],e=a[b?3:1]^c[1],f=a[2]^c[2],a=a[b?1:3]^c[3],g,h,i,k=c.length/4-2,j,l=4,m=[0,0,0,0];g=this.h[b];var o=g[0],q=g[1],u=g[2],n=g[3],r=g[4];for(j=0;j<k;j++){g=o[d>>>24]^q[e>>16&255]^u[f>>8&255]^n[a&255]^c[l];h=o[e>>>24]^q[f>>16&255]^u[a>>8&255]^n[d&255]^c[l+1];i=o[f>>>24]^q[a>>16&255]^u[d>>8&255]^n[e&255]^c[l+2];a=o[a>>>24]^q[d>>16&255]^
u[e>>8&255]^n[f&255]^c[l+3];l=l+4;d=g;e=h;f=i}for(j=0;j<4;j++){m[b?3&-j:j]=r[d>>>24]<<24^r[e>>16&255]<<16^r[f>>8&255]<<8^r[a&255]^c[l++];g=d;d=e;e=f;f=a;a=g}return m}};
sjcl.bitArray={bitSlice:function(a,b,c){a=sjcl.bitArray.N(a.slice(b/32),32-(b&31)).slice(1);return c===void 0?a:sjcl.bitArray.clamp(a,c-b)},extract:function(a,b,c){var d=Math.floor(-b-c&31);return((b+c-1^b)&-32?a[b/32|0]<<32-d^a[b/32+1|0]>>>d:a[b/32|0]>>>d)&(1<<c)-1},concat:function(a,b){if(a.length===0||b.length===0)return a.concat(b);var c=a[a.length-1],d=sjcl.bitArray.getPartial(c);return d===32?a.concat(b):sjcl.bitArray.N(b,d,c|0,a.slice(0,a.length-1))},bitLength:function(a){var b=a.length;return b===
0?0:(b-1)*32+sjcl.bitArray.getPartial(a[b-1])},clamp:function(a,b){if(a.length*32<b)return a;var a=a.slice(0,Math.ceil(b/32)),c=a.length,b=b&31;c>0&&b&&(a[c-1]=sjcl.bitArray.partial(b,a[c-1]&2147483648>>b-1,1));return a},partial:function(a,b,c){return a===32?b:(c?b|0:b<<32-a)+a*1099511627776},getPartial:function(a){return Math.round(a/1099511627776)||32},equal:function(a,b){if(sjcl.bitArray.bitLength(a)!==sjcl.bitArray.bitLength(b))return false;var c=0,d;for(d=0;d<a.length;d++)c=c|a[d]^b[d];return c===
0},N:function(a,b,c,d){var e;for(d===void 0&&(d=[]);b>=32;b=b-32){d.push(c);c=0}if(b===0)return d.concat(a);for(e=0;e<a.length;e++){d.push(c|a[e]>>>b);c=a[e]<<32-b}e=a.length?a[a.length-1]:0;a=sjcl.bitArray.getPartial(e);d.push(sjcl.bitArray.partial(b+a&31,b+a>32?c:d.pop(),1));return d},O:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]}};
sjcl.codec.utf8String={fromBits:function(a){var b="",c=sjcl.bitArray.bitLength(a),d,e;for(d=0;d<c/8;d++){(d&3)===0&&(e=a[d/4]);b=b+String.fromCharCode(e>>>24);e=e<<8}return decodeURIComponent(escape(b))},toBits:function(a){var a=unescape(encodeURIComponent(a)),b=[],c,d=0;for(c=0;c<a.length;c++){d=d<<8|a.charCodeAt(c);if((c&3)===3){b.push(d);d=0}}c&3&&b.push(sjcl.bitArray.partial(8*(c&3),d));return b}};
sjcl.codec.base64={C:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(a,b,c){var d="",e=0,f=sjcl.codec.base64.C,g=0,h=sjcl.bitArray.bitLength(a);c&&(f=f.substr(0,62)+"-_");for(c=0;d.length*6<h;){d=d+f.charAt((g^a[c]>>>e)>>>26);if(e<6){g=a[c]<<6-e;e=e+26;c++}else{g=g<<6;e=e-6}}for(;d.length&3&&!b;)d=d+"=";return d},toBits:function(a,b){var a=a.replace(/\s|=/g,""),c=[],d=0,e=sjcl.codec.base64.C,f=0,g;b&&(e=e.substr(0,62)+"-_");for(b=0;b<a.length;b++){g=e.indexOf(a.charAt(b));
if(g<0)throw new sjcl.exception.invalid("this isn't base64!");if(d>26){d=d-26;c.push(f^g>>>d);f=g<<32-d}else{d=d+6;f=f^g<<32-d}}d&56&&c.push(sjcl.bitArray.partial(d&56,f,1));return c}};sjcl.codec.base64url={fromBits:function(a){return sjcl.codec.base64.fromBits(a,1,1)},toBits:function(a){return sjcl.codec.base64.toBits(a,1)}};sjcl.hash.sha256=function(a){this.a[0]||this.w();if(a){this.m=a.m.slice(0);this.i=a.i.slice(0);this.e=a.e}else this.reset()};sjcl.hash.sha256.hash=function(a){return(new sjcl.hash.sha256).update(a).finalize()};
sjcl.hash.sha256.prototype={blockSize:512,reset:function(){this.m=this.L.slice(0);this.i=[];this.e=0;return this},update:function(a){typeof a==="string"&&(a=sjcl.codec.utf8String.toBits(a));var b,c=this.i=sjcl.bitArray.concat(this.i,a);b=this.e;a=this.e=b+sjcl.bitArray.bitLength(a);for(b=512+b&-512;b<=a;b=b+512)this.B(c.splice(0,16));return this},finalize:function(){var a,b=this.i,c=this.m,b=sjcl.bitArray.concat(b,[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this.e/
4294967296));for(b.push(this.e|0);b.length;)this.B(b.splice(0,16));this.reset();return c},L:[],a:[],w:function(){function a(a){return(a-Math.floor(a))*4294967296|0}var b=0,c=2,d;a:for(;b<64;c++){for(d=2;d*d<=c;d++)if(c%d===0)continue a;b<8&&(this.L[b]=a(Math.pow(c,0.5)));this.a[b]=a(Math.pow(c,1/3));b++}},B:function(a){for(var b,c,d=a.slice(0),e=this.m,f=this.a,g=e[0],h=e[1],i=e[2],k=e[3],j=e[4],l=e[5],m=e[6],o=e[7],a=0;a<64;a++){if(a<16)b=d[a];else{b=d[a+1&15];c=d[a+14&15];b=d[a&15]=(b>>>7^b>>>18^
b>>>3^b<<25^b<<14)+(c>>>17^c>>>19^c>>>10^c<<15^c<<13)+d[a&15]+d[a+9&15]|0}b=b+o+(j>>>6^j>>>11^j>>>25^j<<26^j<<21^j<<7)+(m^j&(l^m))+f[a];o=m;m=l;l=j;j=k+b|0;k=i;i=h;h=g;g=b+(h&i^k&(h^i))+(h>>>2^h>>>13^h>>>22^h<<30^h<<19^h<<10)|0}e[0]=e[0]+g|0;e[1]=e[1]+h|0;e[2]=e[2]+i|0;e[3]=e[3]+k|0;e[4]=e[4]+j|0;e[5]=e[5]+l|0;e[6]=e[6]+m|0;e[7]=e[7]+o|0}};
sjcl.mode.ccm={name:"ccm",encrypt:function(a,b,c,d,e){var f,g=b.slice(0),h=sjcl.bitArray,i=h.bitLength(c)/8,k=h.bitLength(g)/8,e=e||64,d=d||[];if(i<7)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(f=2;f<4&&k>>>8*f;f++);f<15-i&&(f=15-i);c=h.clamp(c,8*(15-f));b=sjcl.mode.ccm.F(a,b,c,d,e,f);g=sjcl.mode.ccm.H(a,g,c,b,e,f);return h.concat(g.data,g.tag)},decrypt:function(a,b,c,d,e){var e=e||64,d=d||[],f=sjcl.bitArray,g=f.bitLength(c)/8,h=f.bitLength(b),i=f.clamp(b,h-e),k=f.bitSlice(b,
h-e),h=(h-e)/8;if(g<7)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(b=2;b<4&&h>>>8*b;b++);b<15-g&&(b=15-g);c=f.clamp(c,8*(15-b));i=sjcl.mode.ccm.H(a,i,c,k,e,b);a=sjcl.mode.ccm.F(a,i.data,c,d,e,b);if(!f.equal(i.tag,a))throw new sjcl.exception.corrupt("ccm: tag doesn't match");return i.data},F:function(a,b,c,d,e,f){var g=[],h=sjcl.bitArray,i=h.O,e=e/8;if(e%2||e<4||e>16)throw new sjcl.exception.invalid("ccm: invalid tag length");if(d.length>4294967295||b.length>4294967295)throw new sjcl.exception.bug("ccm: can't deal with 4GiB or more data");
f=[h.partial(8,(d.length?64:0)|e-2<<2|f-1)];f=h.concat(f,c);f[3]=f[3]|h.bitLength(b)/8;f=a.encrypt(f);if(d.length){c=h.bitLength(d)/8;c<=65279?g=[h.partial(16,c)]:c<=4294967295&&(g=h.concat([h.partial(16,65534)],[c]));g=h.concat(g,d);for(d=0;d<g.length;d=d+4)f=a.encrypt(i(f,g.slice(d,d+4).concat([0,0,0])))}for(d=0;d<b.length;d=d+4)f=a.encrypt(i(f,b.slice(d,d+4).concat([0,0,0])));return h.clamp(f,e*8)},H:function(a,b,c,d,e,f){var g,h=sjcl.bitArray;g=h.O;var i=b.length,k=h.bitLength(b),c=h.concat([h.partial(8,
f-1)],c).concat([0,0,0]).slice(0,4),d=h.bitSlice(g(d,a.encrypt(c)),0,e);if(!i)return{tag:d,data:[]};for(g=0;g<i;g=g+4){c[3]++;e=a.encrypt(c);b[g]=b[g]^e[0];b[g+1]=b[g+1]^e[1];b[g+2]=b[g+2]^e[2];b[g+3]=b[g+3]^e[3]}return{tag:d,data:h.clamp(b,k)}}};sjcl.misc.hmac=function(a,b){this.K=b=b||sjcl.hash.sha256;var c=[[],[]],d=b.prototype.blockSize/32;this.k=[new b,new b];a.length>d&&(a=b.hash(a));for(b=0;b<d;b++){c[0][b]=a[b]^909522486;c[1][b]=a[b]^1549556828}this.k[0].update(c[0]);this.k[1].update(c[1])};
sjcl.misc.hmac.prototype.encrypt=sjcl.misc.hmac.prototype.mac=function(a){a=(new this.K(this.k[0])).update(a).finalize();return(new this.K(this.k[1])).update(a).finalize()};
sjcl.misc.pbkdf2=function(a,b,c,d,e){c=c||1E3;if(d<0||c<0)throw sjcl.exception.invalid("invalid params to pbkdf2");typeof a==="string"&&(a=sjcl.codec.utf8String.toBits(a));var e=e||sjcl.misc.hmac,a=new e(a),f,g,h,i,k=[],j=sjcl.bitArray;for(i=1;32*k.length<(d||1);i++){e=f=a.encrypt(j.concat(b,[i]));for(g=1;g<c;g++){f=a.encrypt(f);for(h=0;h<f.length;h++)e[h]=e[h]^f[h]}k=k.concat(e)}d&&(k=j.clamp(k,d));return k};
sjcl.random={randomWords:function(a,b){var c=[],b=this.isReady(b),d;if(b===0)throw new sjcl.exception.notReady("generator isn't seeded");b&2&&this.T(!(b&1));for(b=0;b<a;b=b+4){(b+1)%65536===0&&this.J();d=this.u();c.push(d[0],d[1],d[2],d[3])}this.J();return c.slice(0,a)},setDefaultParanoia:function(a){this.s=a},addEntropy:function(a,b,c){var c=c||"user",d,e,f=(new Date).valueOf(),g=this.p[c],h=this.isReady(),i=0;d=this.D[c];d===void 0&&(d=this.D[c]=this.Q++);g===void 0&&(g=this.p[c]=0);this.p[c]=(this.p[c]+
1)%this.b.length;switch(typeof a){case "number":b===void 0&&(b=1);this.b[g].update([d,this.t++,1,b,f,1,a|0]);break;case "object":c=Object.prototype.toString.call(a);if(c==="[object Uint32Array]"){e=[];for(c=0;c<a.length;c++)e.push(a[c]);a=e}else{c!=="[object Array]"&&(i=1);for(c=0;c<a.length&&!i;c++)typeof a[c]!="number"&&(i=1)}if(!i){if(b===void 0)for(c=b=0;c<a.length;c++)for(e=a[c];e>0;){b++;e=e>>>1}this.b[g].update([d,this.t++,2,b,f,a.length].concat(a))}break;case "string":if(b===void 0)b=a.length;
this.b[g].update([d,this.t++,3,b,f,a.length]);this.b[g].update(a);break;default:i=1}if(i)throw new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string");this.j[g]=this.j[g]+b;this.f=this.f+b;if(h===0){this.isReady()!==0&&this.I("seeded",Math.max(this.g,this.f));this.I("progress",this.getProgress())}},isReady:function(a){a=this.A[a!==void 0?a:this.s];return this.g&&this.g>=a?this.j[0]>80&&(new Date).valueOf()>this.M?3:1:this.f>=a?2:0},getProgress:function(a){a=this.A[a?
a:this.s];return this.g>=a?1:this.f>a?1:this.f/a},startCollectors:function(){if(!this.l){if(window.addEventListener){window.addEventListener("load",this.n,false);window.addEventListener("mousemove",this.o,false)}else if(document.attachEvent){document.attachEvent("onload",this.n);document.attachEvent("onmousemove",this.o)}else throw new sjcl.exception.bug("can't attach event");this.l=true}},stopCollectors:function(){if(this.l){if(window.removeEventListener){window.removeEventListener("load",this.n,
false);window.removeEventListener("mousemove",this.o,false)}else if(window.detachEvent){window.detachEvent("onload",this.n);window.detachEvent("onmousemove",this.o)}this.l=false}},addEventListener:function(a,b){this.q[a][this.P++]=b},removeEventListener:function(a,b){var c,a=this.q[a],d=[];for(c in a)a.hasOwnProperty(c)&&a[c]===b&&d.push(c);for(b=0;b<d.length;b++){c=d[b];delete a[c]}},b:[new sjcl.hash.sha256],j:[0],z:0,p:{},t:0,D:{},Q:0,g:0,f:0,M:0,a:[0,0,0,0,0,0,0,0],d:[0,0,0,0],r:void 0,s:6,l:!1,
q:{progress:{},seeded:{}},P:0,A:[0,48,64,96,128,192,256,384,512,768,1024],u:function(){for(var a=0;a<4;a++){this.d[a]=this.d[a]+1|0;if(this.d[a])break}return this.r.encrypt(this.d)},J:function(){this.a=this.u().concat(this.u());this.r=new sjcl.cipher.aes(this.a)},S:function(a){this.a=sjcl.hash.sha256.hash(this.a.concat(a));this.r=new sjcl.cipher.aes(this.a);for(a=0;a<4;a++){this.d[a]=this.d[a]+1|0;if(this.d[a])break}},T:function(a){var b=[],c=0,d;this.M=b[0]=(new Date).valueOf()+3E4;for(d=0;d<16;d++)b.push(Math.random()*
4294967296|0);for(d=0;d<this.b.length;d++){b=b.concat(this.b[d].finalize());c=c+this.j[d];this.j[d]=0;if(!a&&this.z&1<<d)break}if(this.z>=1<<this.b.length){this.b.push(new sjcl.hash.sha256);this.j.push(0)}this.f=this.f-c;if(c>this.g)this.g=c;this.z++;this.S(b)},o:function(a){sjcl.random.addEntropy([a.x||a.clientX||a.offsetX||0,a.y||a.clientY||a.offsetY||0],2,"mouse")},n:function(){sjcl.random.addEntropy((new Date).valueOf(),2,"loadtime")},I:function(a,b){var c,a=sjcl.random.q[a],d=[];for(c in a)a.hasOwnProperty(c)&&
d.push(a[c]);for(c=0;c<d.length;c++)d[c](b)}};try{var s=new Uint32Array(32);crypto.getRandomValues(s);sjcl.random.addEntropy(s,1024,"crypto['getRandomValues']")}catch(t){}
sjcl.json={defaults:{v:1,iter:1E3,ks:128,ts:64,mode:"ccm",adata:"",cipher:"aes"},encrypt:function(a,b,c,d){var c=c||{},d=d||{},e=sjcl.json,f=e.c({iv:sjcl.random.randomWords(4,0)},e.defaults),g;e.c(f,c);c=f.adata;if(typeof f.salt==="string")f.salt=sjcl.codec.base64.toBits(f.salt);if(typeof f.iv==="string")f.iv=sjcl.codec.base64.toBits(f.iv);if(!sjcl.mode[f.mode]||!sjcl.cipher[f.cipher]||typeof a==="string"&&f.iter<=100||f.ts!==64&&f.ts!==96&&f.ts!==128||f.ks!==128&&f.ks!==192&&f.ks!==256||f.iv.length<
2||f.iv.length>4)throw new sjcl.exception.invalid("json encrypt: invalid parameters");if(typeof a==="string"){g=sjcl.misc.cachedPbkdf2(a,f);a=g.key.slice(0,f.ks/32);f.salt=g.salt}typeof b==="string"&&(b=sjcl.codec.utf8String.toBits(b));typeof c==="string"&&(c=sjcl.codec.utf8String.toBits(c));g=new sjcl.cipher[f.cipher](a);e.c(d,f);d.key=a;f.ct=sjcl.mode[f.mode].encrypt(g,b,f.iv,c,f.ts);return e.encode(f)},decrypt:function(a,b,c,d){var c=c||{},d=d||{},e=sjcl.json,b=e.c(e.c(e.c({},e.defaults),e.decode(b)),
c,true),f,c=b.adata;if(typeof b.salt==="string")b.salt=sjcl.codec.base64.toBits(b.salt);if(typeof b.iv==="string")b.iv=sjcl.codec.base64.toBits(b.iv);if(!sjcl.mode[b.mode]||!sjcl.cipher[b.cipher]||typeof a==="string"&&b.iter<=100||b.ts!==64&&b.ts!==96&&b.ts!==128||b.ks!==128&&b.ks!==192&&b.ks!==256||!b.iv||b.iv.length<2||b.iv.length>4)throw new sjcl.exception.invalid("json decrypt: invalid parameters");if(typeof a==="string"){f=sjcl.misc.cachedPbkdf2(a,b);a=f.key.slice(0,b.ks/32);b.salt=f.salt}typeof c===
"string"&&(c=sjcl.codec.utf8String.toBits(c));f=new sjcl.cipher[b.cipher](a);c=sjcl.mode[b.mode].decrypt(f,b.ct,b.iv,c,b.ts);e.c(d,b);d.key=a;return sjcl.codec.utf8String.fromBits(c)},encode:function(a){var b,c="{",d="";for(b in a)if(a.hasOwnProperty(b)){if(!b.match(/^[a-z0-9]+$/i))throw new sjcl.exception.invalid("json encode: invalid property name");c=c+(d+'"'+b+'":');d=",";switch(typeof a[b]){case "number":case "boolean":c=c+a[b];break;case "string":c=c+('"'+escape(a[b])+'"');break;case "object":c=
c+('"'+sjcl.codec.base64.fromBits(a[b],0)+'"');break;default:throw new sjcl.exception.bug("json encode: unsupported type");}}return c+"}"},decode:function(a){a=a.replace(/\s/g,"");if(!a.match(/^\{.*\}$/))throw new sjcl.exception.invalid("json decode: this isn't json!");var a=a.replace(/^\{|\}$/g,"").split(/,/),b={},c,d;for(c=0;c<a.length;c++){if(!(d=a[c].match(/^(?:(["']?)([a-z][a-z0-9]*)\1):(?:(\d+)|"([a-z0-9+\/%*_.@=\-]*)")$/i)))throw new sjcl.exception.invalid("json decode: this isn't json!");
b[d[2]]=d[3]?parseInt(d[3],10):d[2].match(/^(ct|salt|iv)$/)?sjcl.codec.base64.toBits(d[4]):unescape(d[4])}return b},c:function(a,b,c){a===void 0&&(a={});if(b===void 0)return a;for(var d in b)if(b.hasOwnProperty(d)){if(c&&a[d]!==void 0&&a[d]!==b[d])throw new sjcl.exception.invalid("required parameter overridden");a[d]=b[d]}return a},V:function(a,b){var c={},d;for(d in a)a.hasOwnProperty(d)&&a[d]!==b[d]&&(c[d]=a[d]);return c},U:function(a,b){var c={},d;for(d=0;d<b.length;d++)a[b[d]]!==void 0&&(c[b[d]]=
a[b[d]]);return c}};sjcl.encrypt=sjcl.json.encrypt;sjcl.decrypt=sjcl.json.decrypt;sjcl.misc.R={};sjcl.misc.cachedPbkdf2=function(a,b){var c=sjcl.misc.R,d,b=b||{};d=b.iter||1E3;c=c[a]=c[a]||{};d=c[d]=c[d]||{firstSalt:b.salt&&b.salt.length?b.salt.slice(0):sjcl.random.randomWords(2,0)};c=b.salt===void 0?d.firstSalt:b.salt;d[c]=d[c]||sjcl.misc.pbkdf2(a,c,b.iter);return{key:d[c].slice(0),salt:c.slice(0)}};var FirebaseSimpleLogin=function(a,b,c){var d=a.toString(),e=null;fb.util.validation.validateArgCount("new FirebaseSimpleLogin",1,3,arguments.length);fb.util.validation.validateCallback("new FirebaseSimpleLogin",2,b,!1);if("string"===typeof a)throw Error("new FirebaseSimpleLogin(): Oops, it looks like you passed a string instead of a Firebase reference (i.e. new Firebase(<firebaseURL>)).");if(goog.isString(d)){var f=d.indexOf("//");0<=f&&(d=d.substring(f+2));f=d.indexOf(".");0<=f&&(e=d.substring(0,
f))}if(!goog.isString(e))throw Error("new FirebaseSimpleLogin(): First argument must be a valid Firebase reference (i.e. new Firebase(<firebaseURL>)).");"file:"===window.location.protocol&&(!this.isMobilePhoneGap()&&!this.isMobileTriggerIo()&&console&&console.log)&&console.log("FirebaseSimpleLogin(): Due to browser security restrictions, loading applications via `file://*` URLs will prevent popup-based authentication providers from working properly. When testing locally, you'll need to run a barebones webserver on your machine rather than loading your test files via `file://*`. The easiest way to run a barebones server on your local machine is to `cd` to the root directory of your code and run `python -m SimpleHTTPServer`, which will allow you to access your content via `http://127.0.0.1:8000/*`.");
this.mRef=a;this.mNamespace=e;this.mApiHost="https://auth.firebase.com";this.sessionLengthDays=null;this.mLoginStateChange=function(){var d=Array.prototype.slice.apply(arguments),e={anonymous:["uid","firebaseAuthToken","id","provider"],password:"uid email firebaseAuthToken id md5_hash provider".split(" "),facebook:"uid accessToken displayName firebaseAuthToken id provider".split(" "),github:"uid accessToken displayName firebaseAuthToken id provider username".split(" "),persona:"uid email firebaseAuthToken id md5_hash provider".split(" "),
twitter:"uid accessToken accessTokenSecret displayName firebaseAuthToken id provider username".split(" ")};if("function"===typeof window.Proxy&&2===window.Proxy.length&&d[1]&&d[1].provider){var f=d[1].provider;Firebase&&(Firebase.INTERNAL&&Firebase.INTERNAL.statsIncrementCounter)&&(d[1]=new Proxy(d[1],{get:function(b,c){0>e[f].indexOf(c)&&Firebase.INTERNAL.statsIncrementCounter(a,"simple_login_undocumented_attribute_use."+c);return b[c]}}))}setTimeout(function(){b.apply(c,d)},0)};this.resumeSession()};
goog.exportSymbol("FirebaseSimpleLogin",FirebaseSimpleLogin);FirebaseSimpleLogin.onOpen=function(a){fb.simplelogin.winchan.onOpen(a)};goog.exportProperty(FirebaseSimpleLogin,"onOpen",FirebaseSimpleLogin.onOpen);FirebaseSimpleLogin.prototype.hasLocalStorage=function(){try{localStorage.setItem("firebase-sentinel","test");var a=localStorage.getItem("firebase-sentinel");localStorage.removeItem("firebase-sentinel");return"test"===a}catch(b){}return!1};
FirebaseSimpleLogin.prototype.resumeSession=function(){var a={};if(this.hasLocalStorage()){var b=this.readCookie("firebaseSessionKey"),c=localStorage.getItem("firebaseSession");if(b&&c)try{a=fb.util.json.eval(sjcl.decrypt(b,fb.util.json.eval(c)))}catch(d){}}a&&a.token&&a.user?this.attemptAuth(a.token,a.user,!1):this.mLoginStateChange(null,null)};
FirebaseSimpleLogin.prototype.saveSession=function(a,b){if(this.hasLocalStorage()){var c=b.sessionKey,d=sjcl.encrypt(c,fb.util.json.stringify({token:a,user:b}));this.writeCookie("firebaseSessionKey",c,this.sessionLengthDays);localStorage.setItem("firebaseSession",fb.util.json.stringify(d))}};FirebaseSimpleLogin.prototype.clearSession=function(){this.hasLocalStorage()&&(this.writeCookie("firebaseSessionKey","",-1),localStorage.removeItem("firebaseSession"))};
FirebaseSimpleLogin.prototype.writeCookie=function(a,b,c){var d="";c&&(d=new Date,d.setTime(d.getTime()+864E5*c),d="; expires="+d.toGMTString());document.cookie=a+"="+b+d+"; path=/"};FirebaseSimpleLogin.prototype.readCookie=function(a){for(var a=a+"=",b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};
FirebaseSimpleLogin.prototype.attemptAuth=function(a,b,c){var d=this;this.mRef.auth(a,function(e,f){e?(d.clearSession(),d.mLoginStateChange(null,null)):(c&&d.saveSession(a,b),"function"==typeof f&&f(),delete b.sessionKey,b.firebaseAuthToken=a,d.mLoginStateChange(null,b))},function(){d.clearSession();d.mLoginStateChange(null,null)})};
FirebaseSimpleLogin.prototype.login=function(a){fb.util.validation.validateString(d,1,a,!1);var b=this,c={},a=a.toLowerCase(),d="FirebaseSimpleLogin.login("+a+")";if("password"===a){c=arguments[1]||{};if(!fb.simplelogin.validation.isValidEmail(c.email))return this.mLoginStateChange(this.formatError({code:"INVALID_EMAIL",message:"Invalid email specified."}));if(!fb.simplelogin.validation.isValidPassword(c.password))return this.mLoginStateChange(this.formatError({code:"INVALID_PASSWORD",message:"Invalid password specified."}))}else if("facebook"===
a||"github"===a||"persona"===a||"twitter"===a||"anonymous"===a)fb.util.validation.validateArgCount(d,1,2,arguments.length),c=arguments[1]||{};var e=this.mLoginStateChange;this.sessionLengthDays=c.rememberMe?30:null;switch(a){case "password":this.jsonp("/auth/firebase",{email:c.email,password:c.password},function(a,c){a||!c.token?e(b.formatError(a)):b.attemptAuth(c.token,c.user,!0)});break;case "github":c.height=850,c.width=950;case "facebook":case "twitter":d="twitter"===a&&c.user_id&&c.oauth_token&&
c.oauth_token_secret;"facebook"===a&&c.access_token||d?this.jsonp("/auth/"+a+"/token",c,function(a,c){a||!c.token?e(b.formatError(a)):b.attemptAuth(c.token,c.user,!0)}):this.launchAuthWindow(a,c,function(a,c,d){a?b.mLoginStateChange(b.formatError(a),null):b.attemptAuth(c,d,!0)});break;case "persona":if(!navigator.id)throw Error(d+": Unable to find Persona include.js");fb.simplelogin.persona.login(function(a){null===a?e(b.formatError({code:"UNKNOWN_ERROR",message:"User denied authentication request or an error occurred."})):
b.jsonp("/auth/persona/token",{assertion:a},function(a,c){a||!c.token?e(b.formatError(a),null):b.attemptAuth(c.token,c.user,!0)})});break;case "anonymous":b.jsonp("/auth/anonymous",{},function(a,c){a||!c.token?e(b.formatError(a),null):b.attemptAuth(c.token,c.user,!0)});break;default:throw Error("FirebaseSimpleLogin.login() failed: unrecognized authentication provider");}};goog.exportProperty(FirebaseSimpleLogin.prototype,"login",FirebaseSimpleLogin.prototype.login);
FirebaseSimpleLogin.prototype.logout=function(){fb.util.validation.validateArgCount("FirebaseSimpleLogin.logout",0,0,arguments.length);this.clearSession();this.mRef.unauth();this.mLoginStateChange(null,null)};goog.exportProperty(FirebaseSimpleLogin.prototype,"logout",FirebaseSimpleLogin.prototype.logout);
FirebaseSimpleLogin.prototype.parseURL=function(a){var b=document.createElement("a");b.href=a;for(var a=b.protocol.replace(":",""),c=b.hostname,d=b.port,e=b.search,f={},g=b.search.replace(/^\?/,"").split("&"),h=g.length,i=0,k;i<h;i++)g[i]&&(k=g[i].split("="),f[k[0]]=k[1]);return{protocol:a,host:c,port:d,query:e,params:f,hash:b.hash.replace("#",""),path:b.pathname.replace(/^([^\/])/,"/$1")}};
FirebaseSimpleLogin.prototype.isMobilePhoneGap=function(){return(window.cordova||window.PhoneGap||window.phonegap)&&/^file:\/{3}[^\/]/i.test(window.location.href)&&/ios|iphone|ipod|ipad|android/i.test(navigator.userAgent)};FirebaseSimpleLogin.prototype.isMobileTriggerIo=function(){return window.forge&&/^file:\/{3}[^\/]/i.test(window.location.href)&&/ios|iphone|ipod|ipad|android/i.test(navigator.userAgent)};
FirebaseSimpleLogin.prototype.launchAuthWindow=function(a,b,c){var d=this,a=this.mApiHost+"/auth/"+a+"?firebase="+this.mNamespace;b.scope&&(a+="&scope="+b.scope);var e={menubar:0,location:0,resizable:0,scrollbars:1,status:0,dialog:1,width:700,height:375};b.height&&(e.height=b.height,delete b.height);b.width&&(e.width=b.width,delete b.width);if(this.isMobilePhoneGap()){var f=window.open(a+"&internalRedirect=true&transport=internalRedirect","blank","location=no"),g=!1;f.addEventListener("loadstop",
function(a){try{var b=d.parseURL(a.url);if(b.path==="/auth/_blank"){f.close();var e=b.params,a={},h;for(h in e)try{a[h]=fb.util.json.eval(decodeURIComponent(e[h]))}catch(m){}if(!g){g=true;return a&&a.error?c(a.error):a&&a.token&&a.user?c(null,a.token,a.user):c({code:"UNKNOWN_ERROR",message:"An unknown error occurred."})}}}catch(o){f.close();if(!g){g=true;return c({code:"UNKNOWN_ERROR",message:"An unknown error occurred."})}}});f.addEventListener("exit",function(){if(!g){g=true;return c({code:"UNKNOWN_ERROR",
message:"An unknown error occurred."})}});setTimeout(function(){f&&f.close&&f.close()},4E4)}else if(this.isMobileTriggerIo()){if(!window.forge||!window.forge.tabs)return c({code:"TRIGGER_IO_ERROR",message:'"forge.tabs" module required when using Firebase Simple Login and Trigger.io'});forge.tabs.openWithOptions({url:a+"&internalRedirect=true&transport=internalRedirect",pattern:this.mApiHost+"/auth/_blank*"},function(a){var b=null;if(a&&a.url)try{var e=d.parseURL(a.url).params,b={},f;for(f in e)b[f]=
fb.util.json.eval(decodeURIComponent(e[f]))}catch(g){}else if(a&&a.userCancelled)return c({code:"USER_DENIED",message:"User cancelled the authentication request."});return b&&b.token&&b.user?c(null,b.token,b.user):b&&b.error?c(b.error):c({code:"UNKNOWN_ERROR",message:"An unknown error occurred."})},function(){c({code:"UNKNOWN_ERROR",message:"An unknown error occurred."})})}else{var b=[],h;for(h in e)b.push(h+"="+e[h]);fb.simplelogin.winchan.open({url:a+"&transport=winchan",relay_url:this.mApiHost+
"/auth/channel",window_features:b.join(",")},function(a,b){b&&b.token&&b.user?c(null,b.token,b.user):a==="unknown closed window"?c({code:"USER_DENIED",message:"User cancelled the authentication request."}):b.error?c(b.error):c({code:"UNKNOWN_ERROR",message:"An unknown error occurred."})})}};
FirebaseSimpleLogin.prototype.createUser=function(a,b,c){var d=this;fb.util.validation.validateArgCount("FirebaseSimpleLogin.createUser",3,3,arguments.length);fb.util.validation.validateCallback("FirebaseSimpleLogin.createUser",3,c,!1);if(!fb.simplelogin.validation.isValidEmail(a))return c(this.formatError({code:"INVALID_EMAIL",message:"Invalid email specified."}));if(!fb.simplelogin.validation.isValidPassword(b))return c(this.formatError({code:"INVALID_PASSWORD",message:"Invalid password specified. "}));
this.jsonp("/auth/firebase/create",{email:a,password:b},function(a,b){a?c(d.formatError(a),null):c(null,b)})};goog.exportProperty(FirebaseSimpleLogin.prototype,"createUser",FirebaseSimpleLogin.prototype.createUser);
FirebaseSimpleLogin.prototype.changePassword=function(a,b,c,d){var e=this;fb.util.validation.validateArgCount("FirebaseSimpleLogin.changePassword",4,4,arguments.length);fb.util.validation.validateCallback("FirebaseSimpleLogin.changePassword",4,d,!1);if(!fb.simplelogin.validation.isValidEmail(a))return d(this.formatError({code:"INVALID_EMAIL",message:"Invalid email specified."}));if(!fb.simplelogin.validation.isValidPassword(b)||!fb.simplelogin.validation.isValidPassword(c))return d(this.formatError({code:"INVALID_PASSWORD",
message:"Invalid password specified. "}));this.jsonp("/auth/firebase/update",{email:a,oldPassword:b,newPassword:c},function(a){a?d(e.formatError(a),!1):d(null,!0)})};goog.exportProperty(FirebaseSimpleLogin.prototype,"changePassword",FirebaseSimpleLogin.prototype.changePassword);
FirebaseSimpleLogin.prototype.removeUser=function(a,b,c){var d=this;fb.util.validation.validateArgCount("FirebaseSimpleLogin.removeUser",3,3,arguments.length);fb.util.validation.validateCallback("FirebaseSimpleLogin.removeUser",3,c,!1);if(!fb.simplelogin.validation.isValidEmail(a))return c(this.formatError({code:"INVALID_EMAIL",message:"Invalid email specified."}));if(!fb.simplelogin.validation.isValidPassword(b))return c(this.formatError({code:"INVALID_PASSWORD",message:"Invalid password specified. "}));
this.jsonp("/auth/firebase/remove",{email:a,password:b},function(a){a?c(d.formatError(a),!1):c(null,!0)})};goog.exportProperty(FirebaseSimpleLogin.prototype,"removeUser",FirebaseSimpleLogin.prototype.removeUser);FirebaseSimpleLogin._callbacks={};
FirebaseSimpleLogin.prototype.jsonp=function(a,b,c){var d=this,e=this.mApiHost+a,e=e+(/\?/.test(e)?"":"?"),e=e+("&firebase="+this.mNamespace),e=e+"&transport=jsonp",f;for(f in b)e+="&"+encodeURIComponent(f)+"="+encodeURIComponent(b[f]);var g="_firebaseXDR"+(new Date).getTime().toString()+Math.floor(100*Math.random()),e=e+("&callback="+encodeURIComponent("FirebaseSimpleLogin._callbacks."+g));FirebaseSimpleLogin._callbacks[g]=function(a){var b=a.error||null;delete a.error;c(b,a);setTimeout(function(){delete FirebaseSimpleLogin._callbacks[g];
var a=document.getElementById(g);null!==a&&a.parentNode.removeChild(a)})};setTimeout(function(){try{var a=document.createElement("script");a.type="text/javascript";a.id=g;a.async=!0;a.src=e;a.onerror=function(){var a=document.getElementById(g);null!==a&&a.parentNode.removeChild(a);c(d.formatError({code:"SERVER_ERROR",message:"An unknown server error occurred."}))};var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}catch(f){c(d.formatError({code:"SERVER_ERROR",message:"An unknown server error occurred."}))}},
1)};FirebaseSimpleLogin.prototype.formatError=function(a){var b=Error(a.message||"");b.code=a.code||"UNKNOWN_ERROR";return b};
var FirebaseAuthClient=function(a,b,c){Firebase&&(Firebase.INTERNAL&&Firebase.INTERNAL.statsIncrementCounter)&&Firebase.INTERNAL.statsIncrementCounter(a,"simple_login_deprecated_constructor");"undefined"!==typeof console&&("undefined"!==typeof console.warn?console.warn("FirebaseAuthClient class being deprecated. Please use https://cdn.firebase.com/v0/firebase-simple-login.js and reference FirebaseSimpleLogin instead."):console.log("FirebaseAuthClient class being deprecated. Please use https://cdn.firebase.com/v0/firebase-simple-login.js and reference FirebaseSimpleLogin instead."));
return new FirebaseSimpleLogin(a,b,c)};goog.exportSymbol("FirebaseAuthClient",FirebaseAuthClient);FirebaseAuthClient.onOpen=FirebaseSimpleLogin.onOpen;goog.exportProperty(FirebaseAuthClient,"onOpen",FirebaseAuthClient.onOpen);})();

/*
 * Swipe 2.0
 *
 * Brad Birdsall
 * Copyright 2013, MIT License
 *
*/

function Swipe(container, options) {

  "use strict";

  // utilities
  var noop = function() {}; // simple no operation function
  var offloadFn = function(fn) { setTimeout(fn || noop, 0) }; // offload a functions execution

  // check browser capabilities
  var browser = {
    addEventListener: !!window.addEventListener,
    touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
    transitions: (function(temp) {
      var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
      for ( var i in props ) if (temp.style[ props[i] ] !== undefined) return true;
      return false;
    })(document.createElement('swipe'))
  };

  // quit if no root element
  if (!container) return;
  var element = container.children[0];
  var slides, slidePos, width, length;
  options = options || {};
  var index = parseInt(options.startSlide, 10) || 0;
  var speed = options.speed || 300;
  options.continuous = options.continuous !== undefined ? options.continuous : true;

  function setup() {

    // cache slides
    slides = element.children;
    length = slides.length;

    // set continuous to false if only one slide
    if (slides.length < 2) options.continuous = false;

    //special case if two slides
    if (browser.transitions && options.continuous && slides.length < 3) {
      element.appendChild(slides[0].cloneNode(true));
      element.appendChild(element.children[1].cloneNode(true));
      slides = element.children;
    }

    // create an array to store current positions of each slide
    slidePos = new Array(slides.length);

    // determine width of each slide
    width = container.getBoundingClientRect().width || container.offsetWidth;

    element.style.width = (slides.length * width) + 'px';

    // stack elements
    var pos = slides.length;
    while(pos--) {

      var slide = slides[pos];

      slide.style.width = width + 'px';
      slide.setAttribute('data-index', pos);

      if (browser.transitions) {
        slide.style.left = (pos * -width) + 'px';
        move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
      }

    }

    // reposition elements before and after index
    if (options.continuous && browser.transitions) {
      move(circle(index-1), -width, 0);
      move(circle(index+1), width, 0);
    }

    if (!browser.transitions) element.style.left = (index * -width) + 'px';

    container.style.visibility = 'visible';

  }

  function prev() {

    if (options.continuous) slide(index-1);
    else if (index) slide(index-1);

  }

  function next() {

    if (options.continuous) slide(index+1);
    else if (index < slides.length - 1) slide(index+1);

  }

  function circle(index) {

    // a simple positive modulo using slides.length
    return (slides.length + (index % slides.length)) % slides.length;

  }

  function slide(to, slideSpeed) {

    // do nothing if already on requested slide
    if (index == to) return;

    if (browser.transitions) {

      var direction = Math.abs(index-to) / (index-to); // 1: backward, -1: forward

      // get the actual position of the slide
      if (options.continuous) {
        var natural_direction = direction;
        direction = -slidePos[circle(to)] / width;

        // if going forward but to < index, use to = slides.length + to
        // if going backward but to > index, use to = -slides.length + to
        if (direction !== natural_direction) to =  -direction * slides.length + to;

      }

      var diff = Math.abs(index-to) - 1;

      // move all the slides between index and to in the right direction
      while (diff--) move( circle((to > index ? to : index) - diff - 1), width * direction, 0);

      to = circle(to);

      move(index, width * direction, slideSpeed || speed);
      move(to, 0, slideSpeed || speed);

      if (options.continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place

    } else {

      to = circle(to);
      animate(index * -width, to * -width, slideSpeed || speed);
      //no fallback for a circular continuous if the browser does not accept transitions
    }

    index = to;
    offloadFn(options.callback && options.callback(index, slides[index]));
  }

  function move(index, dist, speed) {

    translate(index, dist, speed);
    slidePos[index] = dist;

  }

  function translate(index, dist, speed) {

    var slide = slides[index];
    var style = slide && slide.style;

    if (!style) return;

    style.webkitTransitionDuration =
    style.MozTransitionDuration =
    style.msTransitionDuration =
    style.OTransitionDuration =
    style.transitionDuration = speed + 'ms';

    style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
    style.msTransform =
    style.MozTransform =
    style.OTransform = 'translateX(' + dist + 'px)';

  }

  function animate(from, to, speed) {

    // if not an animation, just reposition
    if (!speed) {

      element.style.left = to + 'px';
      return;

    }

    var start = +new Date;

    var timer = setInterval(function() {

      var timeElap = +new Date - start;

      if (timeElap > speed) {

        element.style.left = to + 'px';

        if (delay) begin();

        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

        clearInterval(timer);
        return;

      }

      element.style.left = (( (to - from) * (Math.floor((timeElap / speed) * 100) / 100) ) + from) + 'px';

    }, 4);

  }

  // setup auto slideshow
  var delay = options.auto || 0;
  var interval;

  function begin() {

    interval = setTimeout(next, delay);

  }

  function stop() {

    delay = 0;
    clearTimeout(interval);

  }


  // setup initial vars
  var start = {};
  var delta = {};
  var isScrolling;

  // setup event capturing
  var events = {

    handleEvent: function(event) {

      switch (event.type) {
        case 'touchstart': this.start(event); break;
        case 'touchmove': this.move(event); break;
        case 'touchend': offloadFn(this.end(event)); break;
        case 'webkitTransitionEnd':
        case 'msTransitionEnd':
        case 'oTransitionEnd':
        case 'otransitionend':
        case 'transitionend': offloadFn(this.transitionEnd(event)); break;
        case 'resize': offloadFn(setup); break;
      }

      if (options.stopPropagation) event.stopPropagation();

    },
    start: function(event) {

      var touches = event.touches[0];

      // measure start values
      start = {

        // get initial touch coords
        x: touches.pageX,
        y: touches.pageY,

        // store time to determine touch duration
        time: +new Date

      };

      // used for testing first move event
      isScrolling = undefined;

      // reset delta and end measurements
      delta = {};

      // attach touchmove and touchend listeners
      element.addEventListener('touchmove', this, false);
      element.addEventListener('touchend', this, false);

    },
    move: function(event) {

      // ensure swiping with one touch and not pinching
      if ( event.touches.length > 1 || event.scale && event.scale !== 1) return

      if (options.disableScroll) event.preventDefault();

      var touches = event.touches[0];

      // measure change in x and y
      delta = {
        x: touches.pageX - start.x,
        y: touches.pageY - start.y
      }

      // determine if scrolling test has run - one time test
      if ( typeof isScrolling == 'undefined') {
        isScrolling = !!( isScrolling || Math.abs(delta.x) < Math.abs(delta.y) );
      }

      // if user is not trying to scroll vertically
      if (!isScrolling) {

        // prevent native scrolling
        event.preventDefault();

        // stop slideshow
        stop();

        // increase resistance if first or last slide
        if (options.continuous) { // we don't add resistance at the end

          translate(circle(index-1), delta.x + slidePos[circle(index-1)], 0);
          translate(index, delta.x + slidePos[index], 0);
          translate(circle(index+1), delta.x + slidePos[circle(index+1)], 0);

        } else {

          delta.x =
            delta.x /
              ( (!index && delta.x > 0               // if first slide and sliding left
                || index == slides.length - 1        // or if last slide and sliding right
                && delta.x < 0                       // and if sliding at all
              ) ?
              ( Math.abs(delta.x) / width + 1 )      // determine resistance level
              : 1 );                                 // no resistance if false

          // translate 1:1
          translate(index-1, delta.x + slidePos[index-1], 0);
          translate(index, delta.x + slidePos[index], 0);
          translate(index+1, delta.x + slidePos[index+1], 0);
        }

      }

    },
    end: function(event) {

      // measure duration
      var duration = +new Date - start.time;

      // determine if slide attempt triggers next/prev slide
      var isValidSlide =
            Number(duration) < 250               // if slide duration is less than 250ms
            && Math.abs(delta.x) > 20            // and if slide amt is greater than 20px
            || Math.abs(delta.x) > width/2;      // or if slide amt is greater than half the width

      // determine if slide attempt is past start and end
      var isPastBounds =
            !index && delta.x > 0                            // if first slide and slide amt is greater than 0
            || index == slides.length - 1 && delta.x < 0;    // or if last slide and slide amt is less than 0

      if (options.continuous) isPastBounds = false;

      // determine direction of swipe (true:right, false:left)
      var direction = delta.x < 0;

      // if not scrolling vertically
      if (!isScrolling) {

        if (isValidSlide && !isPastBounds) {

          if (direction) {

            if (options.continuous) { // we need to get the next in this direction in place

              move(circle(index-1), -width, 0);
              move(circle(index+2), width, 0);

            } else {
              move(index-1, -width, 0);
            }

            move(index, slidePos[index]-width, speed);
            move(circle(index+1), slidePos[circle(index+1)]-width, speed);
            index = circle(index+1);

          } else {
            if (options.continuous) { // we need to get the next in this direction in place

              move(circle(index+1), width, 0);
              move(circle(index-2), -width, 0);

            } else {
              move(index+1, width, 0);
            }

            move(index, slidePos[index]+width, speed);
            move(circle(index-1), slidePos[circle(index-1)]+width, speed);
            index = circle(index-1);

          }

          options.callback && options.callback(index, slides[index]);

        } else {

          if (options.continuous) {

            move(circle(index-1), -width, speed);
            move(index, 0, speed);
            move(circle(index+1), width, speed);

          } else {

            move(index-1, -width, speed);
            move(index, 0, speed);
            move(index+1, width, speed);
          }

        }

      }

      // kill touchmove and touchend event listeners until touchstart called again
      element.removeEventListener('touchmove', events, false)
      element.removeEventListener('touchend', events, false)

    },
    transitionEnd: function(event) {

      if (parseInt(event.target.getAttribute('data-index'), 10) == index) {

        if (delay) begin();

        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

      }

    }

  }

  // trigger setup
  setup();

  // start auto slideshow if applicable
  if (delay) begin();


  // add event listeners
  if (browser.addEventListener) {

    // set touchstart event on element
    if (browser.touch) element.addEventListener('touchstart', events, false);

    if (browser.transitions) {
      element.addEventListener('webkitTransitionEnd', events, false);
      element.addEventListener('msTransitionEnd', events, false);
      element.addEventListener('oTransitionEnd', events, false);
      element.addEventListener('otransitionend', events, false);
      element.addEventListener('transitionend', events, false);
    }

    // set resize event on window
    window.addEventListener('resize', events, false);

  } else {

    window.onresize = function () { setup() }; // to play nice with old IE

  }

  // expose the Swipe API
  return {
    setup: function() {

      setup();

    },
    slide: function(to, speed) {

      // cancel slideshow
      stop();

      slide(to, speed);

    },
    prev: function() {

      // cancel slideshow
      stop();

      prev();

    },
    next: function() {

      // cancel slideshow
      stop();

      next();

    },
    stop: function() {

      // cancel slideshow
      stop();

    },
    getPos: function() {

      // return current index position
      return index;

    },
    getNumSlides: function() {

      // return total number of slides
      return length;
    },
    kill: function() {

      // cancel slideshow
      stop();

      // reset element
      element.style.width = 'auto';
      element.style.left = 0;

      // reset slides
      var pos = slides.length;
      while(pos--) {

        var slide = slides[pos];
        slide.style.width = '100%';
        slide.style.left = 0;

        if (browser.transitions) translate(pos, 0, 0);

      }

      // removed event listeners
      if (browser.addEventListener) {

        // remove current event listeners
        element.removeEventListener('touchstart', events, false);
        element.removeEventListener('webkitTransitionEnd', events, false);
        element.removeEventListener('msTransitionEnd', events, false);
        element.removeEventListener('oTransitionEnd', events, false);
        element.removeEventListener('otransitionend', events, false);
        element.removeEventListener('transitionend', events, false);
        window.removeEventListener('resize', events, false);

      }
      else {

        window.onresize = null;

      }

    }
  }

}


if ( window.jQuery || window.Zepto ) {
  (function($) {
    $.fn.Swipe = function(params) {
      return this.each(function() {
        $(this).data('Swipe', new Swipe($(this)[0], params));
      });
    }
  })( window.jQuery || window.Zepto )
}
