(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8961:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(1235)}])},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,c=Promise,(null!=c&&"undefined"!==typeof Symbol&&c[Symbol.hasInstance]?c[Symbol.hasInstance](i):i instanceof c)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=s({},r,e));var i,c;var o=r=s({},r,t);if(o.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(o.suspense)return n(o);r.loadableGenerated&&delete(r=s({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,l(n,r);delete r.ssr}return n(r)};i(n(7294));var a=i(n(4302));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var s=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=s},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l=(i=n(7294))&&i.__esModule?i:{default:i},c=n(7161),o=n(6319);var d=[],u=[],m=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,s;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var s=this;this._timeout=setTimeout((function(){s._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),s&&r(t,s),e}();function p(e){return function(e,t){var n=function(){if(!s){var t=new h(e,r);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=l.default.lazy(r.loader));var s=null;if(!m&&!r.suspense){var i=r.webpack?r.webpack():r.modules;i&&u.push((function(e){var t=!0,r=!1,s=void 0;try{for(var a,l=i[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){var c=a.value;if(-1!==e.indexOf(c))return n()}}catch(o){r=!0,s=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw s}}}))}var d=r.suspense?function(e,t){return l.default.createElement(r.lazy,a({},e,{ref:t}))}:function(e,t){n();var a=l.default.useContext(o.LoadableContext),i=c.useSubscription(s);return l.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),l.default.useMemo((function(){return i.loading||i.error?l.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:s.retry}):i.loaded?l.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return d.preload=function(){return!r.suspense&&n()},d.displayName="LoadableComponent",l.default.forwardRef(d)}(f,e)}function x(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return x(e,t)}))}p.preloadAll=function(){return new Promise((function(e,t){x(d).then(e,t)}))},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return m=!0,t()};x(u,e).then(n,n)}))},window.__NEXT_PRELOADREADY=p.preloadReady;var j=p;t.default=j},4339:function(e,t,n){"use strict";var r=n(5893),s=(n(7294),n(1664));t.Z=function(e){var t=e.pageTitle;return(0,r.jsx)("section",{className:"page-title-area breadcrumb-spacing",style:{backgroundImage:"url(assets/img/bg/breadcrumb-bg.jpg)"},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row justify-content-center",children:(0,r.jsx)("div",{className:"col-xxl-9",children:(0,r.jsxs)("div",{className:"page-title-wrapper text-center",children:[(0,r.jsx)("h3",{className:"page-title mb-25",children:t||"Blog"}),(0,r.jsx)("div",{className:"breadcrumb-menu",children:(0,r.jsx)("nav",{"aria-label":"Breadcrumbs",className:"breadcrumb-trail breadcrumbs",children:(0,r.jsxs)("ul",{className:"trail-items",children:[(0,r.jsx)("li",{className:"trail-item trail-begin",children:(0,r.jsx)(s.default,{href:"/",as:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Home"})})})}),(0,r.jsx)("li",{className:"trail-item trail-end",children:(0,r.jsx)("span",{children:t||"Blog"})})]})})})]})})})})})}},6826:function(e,t,n){"use strict";var r=n(5893),s=(n(7294),n(6097)),a=n(7814),i=n(1664);t.Z=function(){return(0,r.jsxs)("footer",{style:{backgroundImage:"url(assets/img/bg/footer-bg.jpg)"},className:"pt-95 position-relative",children:[(0,r.jsx)("div",{className:"common-shape-wrapper wow slideInRight animated","data-wow-delay":"0ms","data-wow-duration":"1500ms",children:(0,r.jsx)("div",{className:"common-shape-inner wow slideInRight animated","data-wow-delay":"0ms","data-wow-duration":"1500ms"})}),(0,r.jsx)("div",{className:"footer-area pb-60",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,r.jsxs)("div",{className:"widget mb-30",children:[(0,r.jsx)("div",{className:"footer-logo mb-25",children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"assets/img/logo/logo-white.png",className:"img-fluid",alt:"footer-logo"})})})}),(0,r.jsx)("p",{className:"mb-20 pr-35",children:"There are many vari of pass of lorem ipsum availab but the majority have suffered in some form by injected humour or words."}),(0,r.jsxs)("div",{className:"footer-social",children:[(0,r.jsx)("a",{href:"#",target:"_blank",children:(0,r.jsx)("i",{children:(0,r.jsx)(a.G,{icon:["fab","twitter"]})})}),(0,r.jsx)("a",{href:"#",target:"_blank",children:(0,r.jsx)("i",{children:(0,r.jsx)(a.G,{icon:["fab","facebook"]})})}),(0,r.jsx)("a",{href:"#",target:"_blank",children:(0,r.jsx)("i",{children:(0,r.jsx)(a.G,{icon:["fab","pinterest-p"]})})}),(0,r.jsx)("a",{href:"#",target:"_blank",children:(0,r.jsx)("i",{children:(0,r.jsx)(a.G,{icon:["fab","instagram"]})})})]})]})}),(0,r.jsx)("div",{className:"col-lg-2 col-sm-6",children:(0,r.jsxs)("div",{className:"widget mb-30",children:[(0,r.jsx)("h4",{className:"widget-title mb-35",children:"Links"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/service",children:(0,r.jsx)("a",{children:"Our Services"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/about",children:(0,r.jsx)("a",{children:"Meet Our Team"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/project",children:(0,r.jsx)("a",{children:"Our Portfolio"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/contact",children:(0,r.jsx)("a",{children:"Contact"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/contact",children:(0,r.jsx)("a",{children:"Help"})})})]})]})}),(0,r.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,r.jsxs)("div",{className:"widget widget-contact mb-30",children:[(0,r.jsx)("h4",{className:"widget-title mb-35",children:"Contact"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{className:"pb-10",children:["86 Road Broklyn Street, 600 ",(0,r.jsx)("br",{}),"New York, USA"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("img",{src:"assets/img/icon/footer-icon-1.png",className:"img-fluid",alt:"icon-img"}),(0,r.jsx)("a",{href:"mailto:needhelp@company.com",children:"needhelp@company.com"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("img",{src:"assets/img/icon/footer-icon-2.png",className:"img-fluid",alt:"icon-img"}),(0,r.jsx)("a",{href:"tel:926668880000",children:"92 666 888 0000"})]})]})]})}),(0,r.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,r.jsxs)("div",{className:"widget mb-30",children:[(0,r.jsx)("h4",{className:"widget-title mb-30",children:"Newsletter"}),(0,r.jsx)("p",{className:"mb-20",children:"Subscribe to Our Newsletter for Daily News and Updates"}),(0,r.jsx)("div",{className:"widget-newsletter",children:(0,r.jsxs)("form",{action:"#",children:[(0,r.jsx)("input",{type:"email",placeholder:"Email Address"}),(0,r.jsx)("button",{type:"submit",children:"Send"})]})})]})})]})})}),(0,r.jsx)(s.Z,{})]})}},1235:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return se}});var r=n(5893),s=n(7294),a=n(8510),i=n(6826),l=n(5152),c=n(4339),o=n(1664),d=n(7814);function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return!t||"object"!==x(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var s=f(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return h(this,n)}}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n,s,a=j(i);function i(){return u(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return(0,r.jsx)("section",{className:"mission-area pt-120 fix",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"col-sm-3 m-auto",children:(0,r.jsx)("img",{src:"assets/img/about/AGCB-LOGO-3.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"col-sm-12 p-35",children:[(0,r.jsx)("br",{}),(0,r.jsx)("h5",{className:"section-subtitle mb-20",children:"get to know us"}),(0,r.jsx)("h1",{className:"section-title mb-35",children:"Al-Ebreiz Global Capital Berhad"})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-xl-6 col-lg-6",children:(0,r.jsx)("div",{className:"kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30","data-aos":"fade-left","data-aos-duration":"1000",children:(0,r.jsxs)("div",{className:"section-title-wrapper mb-25",children:[(0,r.jsx)("h4",{children:"Illustrated By:"}),(0,r.jsx)("p",{children:"Prof. Dato\u2019 Dr. Ahamed Kameel Mydin Meera"}),(0,r.jsx)("h4",{children:"Designed By::"}),(0,r.jsx)("p",{children:"Mohd Norazam Dato\u2019 Muhammad"}),(0,r.jsx)("h3",{children:'Al-Ebreiz  \u0627\u0644\u0627\u0628\u0631\u064a\u0632  "Purest Gold"'}),(0,r.jsx)("p",{children:'Al-Ebreiz - The meaning is so clearly abstract into the meaning of the natural purest gold that was obtained without any chemical process. What is the translation of "Purest Gold" in the Arabic Language? - Ad-dhahab | Al-Khalis | \u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u062e\u0627\u0644\u0635 - Or | Ad-dhahab | Al-Ebreiz | \u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u0627\u0628\u0631\u064a\u0632 - Or simply | Al-Ebreiz | \u0627\u0644\u0627\u0628\u0631\u064a\u0632 The Ebreiz is the natural purest gold that was obtained without any chemical process. In another meaning from chemistry terms, it means pure gold. But in Arabic, a person is like pure gold which means a pure and noble person with strong moral principles, integrity, reliability, honesty, and sincerity with great personal qualities and high standards.'})]})})}),(0,r.jsx)("div",{className:"col-xl-6 col-lg-6",children:(0,r.jsx)("div",{className:"kintro-img mb-30","data-aos":"fade-right","data-aos-duration":"1000",children:(0,r.jsx)("img",{src:"assets/img/about/about-6.png",className:"img-fluid",alt:"about-img"})})})]}),(0,r.jsxs)("div",{className:"col-lg-10 mb-55 ",children:[(0,r.jsx)("div",{className:"d-inline-flex ",children:(0,r.jsx)("h4",{children:" Gold and Silver Color"})}),(0,r.jsx)("p",{children:"The main gold and silver colors depict both AGCB\u2019s \u201cobsession\u201d with gold and silver metals. Gold and silver as precious metals played the role of money and as a measure of value in domestic and international trades in most civilizations for most of human history. Gold ceased to play that role completely only since 1971, after the collapse of the Bretton Woods system when the US dollar was deemed not redeemable anymore for gold by the Federal Reserve. Gold, however, has always been and still is a Shariah money. In the current world of economic and political turbulence, AGCB aspires to return gold and silver back as the global monetary standards, using modern technologies, so as to render and contribute towards just, stable and sustainable monetary and economic systems."}),(0,r.jsx)("h4",{children:"  The Islamic Design"}),(0,r.jsx)("p",{children:"Represents that AGCB\u2019s system is Shariah-compliant and hence should appeal to both Muslims and non-Muslims alike."}),(0,r.jsx)("h4",{children:" Centre Circular Islamic Design "}),(0,r.jsx)("p",{children:"The circular design depicts the links between businesses, individuals, organizations and the government that form an economic ecosystem. AGCB\u2019s non-interest, gold-based payment system connects all the players using gold as the measure of value for economic exchange. In this regard, gold also represents other possible real monies like silver, petroleum, palm oil, etc."}),(0,r.jsx)("h4",{children:"  The Gold Circle"}),(0,r.jsx)("p",{children:"The gold circle represents the gold coin that played the role of money in many civilizations. In Islamic civilization, it was the gold dinar, a name derived from the Roman gold coin, the denarius."}),(0,r.jsx)("h4",{children:" The Inner Square"}),(0,r.jsx)("p",{children:" Represents the Ka\u2019ba that unifies all cultures into oneness in direction."}),(0,r.jsx)("h4",{children:"The Outer Square Vertices"}),(0,r.jsx)("p",{children:" Represent the mission of AGCB in order to achieve its vision."}),(0,r.jsx)("h4",{children:"  Black Background & Centre Brightness"}),(0,r.jsx)("p",{children:" Represent the current age of darkness, AGCB\u2019s initiatives are expected to brighten the lives of all people and thereby by bring peace, happiness and abundant prosperity to humanity."}),(0,r.jsx)("h4",{children:" The Round Symmetrical Structure"}),(0,r.jsx)("p",{children:"Represents Economic Justice that can be expected from AGCB\u2019s system. From engineering perspective, such structure is also stable and sustainable, i.e. the characteristics the economic system would gain from AGCB\u2019s system."}),(0,r.jsxs)("p",{children:[' There is a Hadith of the Prophet SAW which said that: "Allah SWT may test persons with difficulties and compare it with the process of testing the purity of gold." ',(0,r.jsx)("br",{}),"\u0642\u0627\u0644 \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u0647 \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0622\u0644\u0647 \u0648\u0633\u0644\u0645 : \u0625\u0646 \u0627\u0644\u0644\u0647 \u0644\u064a\u062c\u0631\u0628 \u0623\u062d\u062f\u0643\u0645 \u0628\u0627\u0644\u0628\u0644\u0627\u0621 \u0648\u0647\u0648 \u0623\u0639\u0644\u0645 \u0628\u0647 \u0643\u0645\u0627 \u064a\u062c\u0631\u0628 \u0623\u062d\u062f\u0643\u0645 \u0630\u0647\u0628\u0647 \u0628\u0627\u0644\u0646\u0627\u0631 \u060c \u0641\u0645\u0646\u0647\u0645 \u0645\u0646 \u064a\u062e\u0631\u062c \u0643\u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u0625\u0628\u0631\u064a\u0632 \u0641\u0630\u0644\u0643 \u0627\u0644\u0630\u064a \u0646\u062c\u0627\u0647 \u0627\u0644\u0644\u0647 \u062a\u0639\u0627\u0644\u0649 \u0645\u0646 \u0627\u0644\u0633\u064a\u0626\u0627\u062a \u060c \u0648\u0645\u0646\u0647\u0645 \u0645\u0646 \u064a\u062e\u0631\u062c \u0643\u0627\u0644\u0630\u0647\u0628 \u062f\u0648\u0646 \u0630\u0644\u0643 \u0641\u0630\u0644\u0643 \u0627\u0644\u0630\u064a \u064a\u0634\u0643 \u0628\u0639\u0636 \u0627\u0644\u0634\u0643 \u060c \u0648\u0645\u0646\u0647\u0645 \u0645\u0646 \u064a\u062e\u0631\u062c \u0643\u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u0623\u0633\u0648\u062f \u0641\u0630\u0644\u0643 \u0627\u0644\u0630\u064a \u0642\u062f \u0627\u0641\u062a\u062a\u0646 (Sahih Al-Bukhary and Sahih Muslim)"]})]})]})})}}])&&m(t.prototype,n),s&&m(t,s),i}(s.Component);function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var s=v(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return N(this,n)}}var k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(i,e);var t,n,s,a=_(i);function i(){return g(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return(0,r.jsxs)("section",{className:"fact-area pb-85",style:{backgroundImage:"url(assets/img/bg/fact-bg.jpg)"},children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"fun-fact text-center pb-80",children:(0,r.jsx)("span",{children:"Partners & Payment Method"})})}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row gx-0",children:[(0,r.jsx)("div",{className:"col-sm-4",children:(0,r.jsx)("div",{className:"kfact text-center mb-30 wow fadeInUp","data-wow-duration":".3s",children:(0,r.jsx)("div",{className:"kfact-icon",children:(0,r.jsx)("i",{children:(0,r.jsx)("img",{src:"assets/img/icon/GA-Skylight-Banner-1.webp",className:"img-fluid",alt:"fact-icon-img"})})})})}),(0,r.jsx)("div",{className:"col-sm-4",children:(0,r.jsx)("div",{className:"kfact text-center mb-30 wow fadeInUp","data-wow-duration":".6s",children:(0,r.jsx)("div",{className:"kfact-icon",children:(0,r.jsx)("i",{children:(0,r.jsx)("img",{src:"assets/img/icon/logo-2.webp",className:"img-fluid",alt:"fact-icon-img"})})})})}),(0,r.jsx)("div",{className:"col-sm-4",children:(0,r.jsx)("div",{className:"kfact text-center mb-30 wow fadeInUp","data-wow-duration":".9s",children:(0,r.jsx)("div",{className:"kfact-icon",children:(0,r.jsx)("i",{children:(0,r.jsx)("img",{src:"assets/img/icon/awaris-1.webp",className:"img-fluid",alt:"fact-icon-img"})})})})}),(0,r.jsx)("div",{className:"col-sm-4",children:(0,r.jsx)("div",{className:"kfact text-center mb-30 wow fadeInUp","data-wow-duration":".3s",children:(0,r.jsx)("div",{className:"kfact-icon",children:(0,r.jsx)("i",{children:(0,r.jsx)("img",{src:"assets/img/icon/FPX-F-1.webp",className:"img-fluid",alt:"fact-icon-img"})})})})}),(0,r.jsx)("div",{className:"col-sm-4",children:(0,r.jsx)("div",{className:"kfact text-center mb-30 wow fadeInUp","data-wow-duration":".6s",children:(0,r.jsx)("div",{className:"kfact-icon",children:(0,r.jsx)("i",{children:(0,r.jsx)("img",{src:"assets/img/icon/MGA-011.webp",className:"img-fluid",alt:"fact-icon-img"})})})})}),(0,r.jsx)("div",{className:"col-sm-4",children:(0,r.jsx)("div",{className:"kfact text-center mb-30 wow fadeInUp","data-wow-duration":".9s",children:(0,r.jsx)("div",{className:"kfact-icon",children:(0,r.jsx)("i",{children:(0,r.jsx)("img",{src:"assets/img/icon/Uvendtech-Banner-4-1.webp",className:"img-fluid",alt:"fact-icon-img"})})})})})]})}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"fun-fact text-center pb-50",children:(0,r.jsx)("span",{children:"INCUBATOR TENANT"})}),(0,r.jsx)("div",{className:"col-sm-4 m-auto",children:(0,r.jsx)("div",{className:"kfact text-center mb-30 wow fadeInUp","data-wow-duration":".9s",children:(0,r.jsx)("div",{className:"kfact-icon",children:(0,r.jsx)("i",{children:(0,r.jsx)("img",{src:"assets/img/icon/Uvendtech-Banner-4-1.webp",className:"img-fluid",alt:"fact-icon-img"})})})})})]})]})}}])&&y(t.prototype,n),s&&y(t,s),i}(s.Component);function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var s=S(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return R(this,n)}}s.Component;function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return!t||"object"!==U(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=D(e);if(t){var s=D(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return M(this,n)}}var z=(0,l.default)((function(){return Promise.all([n.e(993),n.e(984)]).then(n.bind(n,2724))}),{loadableGenerated:{webpack:function(){return[2724]}},ssr:!1}),L=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(i,e);var t,n,s,a=H(i);function i(){return E(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return(0,r.jsxs)("section",{className:"team-area pt-115 pb-90",children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("h1",{className:"text-center",children:"Board of Directors (BOD)"}),(0,r.jsxs)("div",{className:"col-12",children:[(0,r.jsxs)("div",{className:"col-sm-4 m-auto",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/Dato-Ku3.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"DATO' KU JAAFAR KU SHAARI"})})}),(0,r.jsx)("span",{className:"uppercase",children:"IChairman"})]})]}),(0,r.jsxs)("div",{className:"col-sm-4 m-auto",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/azam-1-1.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"MOHD NORAZAM DATO' MUHAMMAD"})})}),(0,r.jsxs)("span",{className:"uppercase",children:["President ",(0,r.jsx)("br",{}),"Chief Executive Officer"]})]})]})]}),(0,r.jsxs)("div",{className:"col-lg-8 m-auto d-flex",children:[(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/manap.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"DATO' HAJI ABDUL MOIS HASHIM"})})}),(0,r.jsx)("span",{className:"uppercase ",children:"VP of Corporate Strategy Planning"})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/aida-1.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"SUHAIDA ISMAYUDDIN"})})}),(0,r.jsx)("span",{className:"uppercase",children:"VP of Finance"})]})]})]}),(0,r.jsx)("h1",{className:"text-center",children:"Our Management"}),(0,r.jsxs)("div",{className:"col-lg-12 d-inline-flex",children:[(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/hashim.png",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"DATO' HAJI ABDUL MOIS HASHIM"})})}),(0,r.jsx)("span",{className:"uppercase ",children:"CEO's Assistant"})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/azida.png",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"AZIDA ABD GHANI"})})}),(0,r.jsx)("span",{className:"uppercase",children:"CEO Personal Assistant"})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/asri.png",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"DATO' SERI ASRI YUSOFF"})})}),(0,r.jsx)("span",{className:"uppercase",children:"Corporate Strategy Advisor To CEO"})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/cmo.png",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"R.V GANESH PRAKASH"})})}),(0,r.jsx)("span",{className:"uppercase",children:"Chief Marketing Officer"})]})]})]}),(0,r.jsx)("h1",{className:"text-center",children:"Shariah Advisory Panel (SAP)"}),(0,r.jsxs)("div",{className:"col-lg-12 d-inline-flex",children:[(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/ustaz-mohd-fadhli-imgjpg.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"USTAZ MOHD FADHLI MOHD FAUDZI"})})}),(0,r.jsx)("span",{className:"uppercase",children:"Independent Public Trustee"})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/ustaz-azizi-binjpg.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"USTAZ AZIZI CHE SEMAN"})})}),(0,r.jsx)("span",{className:"uppercase",children:"Independent Public Trustee"})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/ustaz-hamdan-bin-img.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"USTAZ HAMDAN ABDULLAH"})})}),(0,r.jsx)("span",{className:"uppercase",children:"Independent Public Trustee"})]})]})]}),(0,r.jsxs)("div",{className:"col-12",children:[(0,r.jsxs)("div",{className:"col-sm-4 m-auto",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/dato-2.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"PROF. ADJUNCT DATO\u2019 AHMAD SARUJI ABDUL AZIZ"})})}),(0,r.jsx)("span",{className:"uppercase",children:"Independent Public Trustee"})]})]}),(0,r.jsx)("div",{className:"section-title-wrapper text-center mb-50",children:(0,r.jsx)("h1",{className:"section-title mb-35",children:"Our Corporate Team"})})]})]})}),(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"team-active2 swiper-container",children:(0,r.jsx)(z,{})})})]})}}])&&B(t.prototype,n),s&&B(t,s),i}(s.Component);function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return!t||"object"!==W(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var W=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function X(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=K(e);if(t){var s=K(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return V(this,n)}}(0,l.default)((function(){return Promise.all([n.e(993),n.e(108)]).then(n.bind(n,735))}),{loadableGenerated:{webpack:function(){return[735]}},ssr:!1});var Y=(0,l.default)((function(){return Promise.all([n.e(993),n.e(838)]).then(n.bind(n,7493))}),{loadableGenerated:{webpack:function(){return[7493]}},ssr:!1}),q=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(i,e);var t,n,s,a=X(i);function i(){return Z(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return(0,r.jsxs)("main",{children:[(0,r.jsx)(c.Z,{pageTitle:"About"}),(0,r.jsx)(b,{}),(0,r.jsx)("div",{className:"mt--30",children:(0,r.jsx)(Y,{})}),(0,r.jsx)(k,{}),(0,r.jsx)(L,{})]})}}])&&F(t.prototype,n),s&&F(t,s),i}(s.Component);function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ee(e,t){return!t||"object"!==ne(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ne=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function re(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=$(e);if(t){var s=$(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return ee(this,n)}}var se=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(o,e);var t,n,l,c=re(o);function o(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),c.call(this,e)}return t=o,l=[{key:"getInitialProps",value:function(e){e.store}}],(n=[{key:"render",value:function(){return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(q,{}),(0,r.jsx)(i.Z,{})]})}}])&&Q(t.prototype,n),l&&Q(t,l),o}(s.Component)},5152:function(e,t,n){e.exports=n(638)}},function(e){e.O(0,[774,591,667,510,888,179],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);