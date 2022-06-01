(function(){"use strict";var e={5493:function(e,t,n){var r=n(9963),a=n(6252);function o(e,t,n,r,o,i){const u=(0,a.up)("router-view"),l=(0,a.Q2)("wechat-title");return(0,a.wy)(((0,a.wg)(),(0,a.j4)(u,null,null,512)),[[l,e.$route.meta["title"]]])}var i=n(9669),u=n.n(i),l={name:"App",methods:{BG:function(){u().get("/v1/api/set/setting?key=backgroundImage").then((e=>{""!==e.data.data["value"]&&(document.body.style='background: url("'+e.data.data["value"]+'");')}))}},mounted(){this.BG()}},c=n(3744);const s=(0,c.Z)(l,[["render",o]]);var d=s,m=n(2119);const f=[{path:"/",name:"Index",meta:{requireAuth:!1,title:"青龙Tools"},component:()=>Promise.all([n.e(493),n.e(268)]).then(n.bind(n,7268))},{path:"/login",name:"login",meta:{requireAuth:!1,title:"管理员登录"},component:()=>Promise.all([n.e(493),n.e(661)]).then(n.bind(n,661))},{path:"/register",name:"register",meta:{requireAuth:!1,title:"管理员注册"},component:()=>Promise.all([n.e(493),n.e(971)]).then(n.bind(n,3971))},{path:"/admin",name:"admin",meta:{requireAuth:!0,title:"后台管理"},component:()=>Promise.all([n.e(493),n.e(475)]).then(n.bind(n,5475))},{path:"/admin/env",name:"adminEnv",meta:{requireAuth:!0,title:"变量管理"},component:()=>Promise.all([n.e(493),n.e(798)]).then(n.bind(n,6798))},{path:"/admin/panel",name:"adminPanel",meta:{requireAuth:!0,title:"面板管理"},component:()=>Promise.all([n.e(493),n.e(116)]).then(n.bind(n,2116))},{path:"/admin/plugin",name:"adminPlugin",meta:{requireAuth:!0,title:"插件管理"},component:()=>Promise.all([n.e(493),n.e(509)]).then(n.bind(n,2509))},{path:"/admin/transfer",name:"adminTransfer",meta:{requireAuth:!0,title:"容器管理"},component:()=>Promise.all([n.e(493),n.e(388)]).then(n.bind(n,2388))},{path:"/admin/message",name:"adminMessage",meta:{requireAuth:!0,title:"推送管理"},component:()=>Promise.all([n.e(493),n.e(812)]).then(n.bind(n,9812))},{path:"/admin/settings",name:"adminSettings",meta:{requireAuth:!0,title:"网站设置"},component:()=>Promise.all([n.e(493),n.e(29)]).then(n.bind(n,2029))},{path:"/admin/about",name:"adminAbout",meta:{requireAuth:!0,title:"关于面板"},component:()=>Promise.all([n.e(493),n.e(371)]).then(n.bind(n,371))}],h=(0,m.p7)({history:(0,m.r5)("/static/"),routes:f});h.beforeEach(((e,t,n)=>{if(e.meta.requireAuth){let e=localStorage.getItem("Bearer");if(null===e||""===e)h.push("login");else{let e={token:localStorage.getItem("Bearer")};u().post("/v1/api/check/token",e).then((e=>{!0===e.data.data?n():(localStorage.clear(),h.push("login"))}))}}else n()}));var p=h,g=n(3907),b=(0,g.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),v=n(8838),y=n.n(v),A=(n(4457),n(1073));u().defaults.timeout=1e4,u().defaults.headers.common.Authorization="Bearer "+localStorage.getItem("Bearer"),u().defaults.baseURL="/",(0,r.ri)(d).use(b).use(p).use(y()).use(A.Z).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],a=e[s][1],o=e[s][2];for(var u=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,o<i&&(i=o));if(u){e.splice(s--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{29:"5b12b5b7",116:"2ab383c0",268:"d098a547",371:"f3513699",388:"97f710e5",475:"0db94ed7",493:"fdb76b15",509:"a0c003da",661:"1172ee2e",798:"43edb643",812:"078773f5",971:"70425d86"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{29:"6d1ce30b",116:"3a78ea78",268:"92c7e08e",371:"3a78ea78",388:"3a78ea78",475:"3a78ea78",509:"3a78ea78",661:"ca064190",798:"3a78ea78",812:"3a78ea78",971:"3ecfdb96"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="qltools:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var u,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+o),u.src=r),e[r]=[a];var m=function(t,n){u.onerror=u.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/static/"}(),function(){var e=function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=u,a.parentNode.removeChild(a),r(l)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return a();e(r,u,a,o)}))},a={143:0};n.f.miniCss=function(e,t){var n={29:1,116:1,268:1,371:1,388:1,475:1,509:1,661:1,798:1,812:1,971:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),u=new Error,l=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],u=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(l)var s=l(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self["webpackChunkqltools"]=self["webpackChunkqltools"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5493)}));r=n.O(r)})();
//# sourceMappingURL=app.65093244.js.map