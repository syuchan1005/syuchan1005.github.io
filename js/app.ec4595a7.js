(function(e){function t(t){for(var n,a,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var s=o[a];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},a={app:0},r={app:0},i=[];function s(e){return l.p+"js/"+({history:"history",home:"home",production:"production"}[e]||e)+"."+{history:"ce41fa9c",home:"e03dd98a",production:"f4d401f7"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o={history:1,home:1,production:1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=new Promise((function(t,o){for(var n="css/"+({history:"history",home:"home",production:"production"}[e]||e)+"."+{history:"14f2866a",home:"c97a673f",production:"88174a50"}[e]+".css",r=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===n||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],p.parentNode.removeChild(p),o(i)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(p);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,o[1](d)}r[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=u;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("15f5");var n=o("2b0e"),a=o("a925"),r=o("0284"),i=o.n(r),s=o("f309");n["a"].use(s["a"]);var l=new s["a"]({icons:{iconfont:"fa",values:{send:"fas fa-paper-plane",home:"fas fa-home",list:"fas fa-list",timeline:"fas fa-chart-line",settings:"fas fa-cog",invert_colors:"fas fa-tint",language:"fas fa-globe"}}}),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-app-bar",{staticClass:"app-header",class:{smAndDown:e.$vuetify.breakpoint.smAndDown},attrs:{app:"",color:"green lighten-1",fixed:"",dark:""}},[o("v-toolbar-title",{staticClass:"headline text-uppercase"},[e._v(" syuchan1005"),o("span",{staticStyle:{"text-transform":"none"}},[e._v("'s")]),e._v(" Portfolio ")]),o("v-spacer"),o("v-menu",{attrs:{bottom:"",left:"","close-on-content-click":!1,"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[o("v-btn",e._g({attrs:{icon:"","aria-label":"settings"}},n),[o("v-icon",[e._v(e._s(e.$vuetify.icons.values.settings))])],1)]}}])},[o("v-card",[o("v-list",[o("v-list-item",[o("v-select",{attrs:{items:e.colors,label:"color","prepend-icon":e.$vuetify.icons.values.invert_colors},model:{value:e.colorType,callback:function(t){e.colorType=t},expression:"colorType"}})],1),o("v-list-item",[o("v-select",{attrs:{"hide-details":"",items:e.languages,"item-text":"name","item-value":"locale",label:"language","prepend-icon":e.$vuetify.icons.values.language},model:{value:e.$i18n.locale,callback:function(t){e.$set(e.$i18n,"locale",t)},expression:"$i18n.locale"}})],1)],1)],1)],1)],1),o("v-content",{staticClass:"app-content",class:{smAndDown:e.$vuetify.breakpoint.smAndDown}},[o("keep-alive",[o("router-view")],1)],1),o("v-bottom-navigation",{staticClass:"app-footer",attrs:{app:"",grow:"",fixed:""},model:{value:e.bottomNav,callback:function(t){e.bottomNav=t},expression:"bottomNav"}},e._l(e.navItems,(function(t){return o("v-btn",{key:t.path,staticClass:"app-footer-button",attrs:{color:t.color,value:t.path,text:""}},[o("span",[e._v(e._s(t.text))]),o("v-icon",[e._v(e._s(t.icon))])],1)})),1),o("v-snackbar",{attrs:{bottom:"",timeout:0,color:"error"},model:{value:e.showReloadAlert,callback:function(t){e.showReloadAlert=t},expression:"showReloadAlert"}},[o("div",[e._v(e._s(e.$t("app.reloadAlert")))]),o("v-btn",{attrs:{outlined:""},on:{click:function(t){return e.locationReload(!0)}}},[e._v(" "+e._s(e.$t("app.reload"))+" ")])],1)],1)},u=[],d=(o("d81d"),o("d3b7"),o("ddb0"),o("4160"),o("45fc"),o("4fad"),o("07ac"),o("159b"),o("e587")),p=o("2f62");n["a"].use(p["a"]);var f=["auto","light","dark"];window.matchMedia||f.shift();var h=f,m=function(e){document.body.style.backgroundColor=e?"#303030":"#FAFAFA"},v={dark:"(prefers-color-scheme: dark)",light:"(prefers-color-scheme: light)"},b=function(e){e&&e.matches&&Object.entries(v).some((function(t){var o=Object(d["a"])(t,2),n=o[0],a=o[1];return e.media===a&&(w.state.darkMode="dark"===n,m(w.state.darkMode),!0)}))},g=[],y=function(){g.forEach((function(e){return e.removeListener(b)})),g=[],"auto"===w.state.colorType?window.matchMedia&&Object.values(v).forEach((function(e){var t=window.matchMedia(e);t.addListener(b),g.push(t),b(t)})):w.state.darkMode="dark"===w.state.colorType,m(w.state.darkMode)},w=new p["a"].Store({state:{darkMode:!1,colorType:"auto"},mutations:{colorType:function(e,t){e.colorType!==t&&(e.colorType=t,y())}}}),k=w,A={name:"App",data:function(){return{navItems:[{path:"/productions",text:"Productions",icon:this.$vuetify.icons.values.list,color:"orange"},{path:"/home",text:"Home",icon:this.$vuetify.icons.values.home,color:"blue"},{path:"/histories",text:"History",icon:this.$vuetify.icons.values.timeline,color:"green"}],showReloadAlert:!1}},computed:{bottomNav:{get:function(){return this.$route.path},set:function(e){this.$router.push(e)}},darkMode:function(){return this.$store.state.darkMode},colorType:{get:function(){return this.$store.state.colorType},set:function(e){this.$store.commit("colorType",e)}},colors:function(){return h},languages:function(){var e=this;return this.$i18n.availableLocales.map((function(t){return{locale:t,name:e.$t("name",t)}}))}},watch:{darkMode:function(e){this.$vuetify.theme.dark=e}},mounted:function(){var e=this;y(),window.isUpdateAvailable&&window.isUpdateAvailable.then((function(t){e.showReloadAlert=t}))},methods:{locationReload:function(e){return window.location.reload(e)}}},_=A,T=(o("5c0b"),o("2877")),j=o("6544"),x=o.n(j),S=o("7496"),$=o("40dc"),C=o("b81c"),M=o("8336"),O=o("b0af"),E=o("a75b"),P=o("132d"),L=o("8860"),V=o("da13"),B=o("e449"),N=o("b974"),I=o("2db4"),R=o("2fa4"),D=o("2a7f"),U=Object(T["a"])(_,c,u,!1,null,null,null),F=U.exports;x()(U,{VApp:S["a"],VAppBar:$["a"],VBottomNavigation:C["a"],VBtn:M["a"],VCard:O["a"],VContent:E["a"],VIcon:P["a"],VList:L["a"],VListItem:V["a"],VMenu:B["a"],VSelect:N["a"],VSnackbar:I["a"],VSpacer:R["a"],VToolbarTitle:D["a"]});var H=o("8c4f"),W=function(){return o.e("home").then(o.bind(null,"bb51"))},z=function(){return o.e("production").then(o.bind(null,"8226"))},J=function(){return o.e("history").then(o.bind(null,"fd28"))},q=new H["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:W},{path:"/productions",name:"productions",component:z},{path:"/histories",name:"histories",component:J}],scrollBehavior:function(e,t,o){return o||{x:0,y:0}}});n["a"].use(H["a"]);o("a4d3"),o("e01a");var G=o("9483"),K=Symbol("isUpdateAvailable");window.isUpdateAvailable=new Promise((function(e){window[K]=function(){e(null!=navigator.serviceWorker.controller)}})),Object(G["a"])("".concat("/","service-worker.js"),{updatefound:function(e){window[K](e)}});var Q={ja:{name:"日本語",app:{reloadAlert:"新しいアップデートがあります!\nリロードして更新して下さい.",reload:"リロード"},home:{birthday:"1999/10/05 生まれ",info:"2020卒 (予定)",description:"やりたいことをやっている高専生\n就活中 (内定もらったけどまだ募集中)"},detailsList:{links:{hatenaBlog:"はてなブログ",amazon:"Amazon",wishlist:"ほしいものリスト"},license:{fe:"基本情報技術者",driver:"普通運転免許 (AT限定)"}},contact:{email:"メールアドレス (返信が必要な場合のみ)",name:"名前 (返信が必要な場合のみ)",title:"タイトル",message:"内容",success:"送信しました。",failure:"送信に失敗しました。"},histories:{type:{intern:"インターン",casual_job:"短期アルバイト"},jobType:"形態",period:"期間",languages:"言語",frameworks:"フレームワーク",other:"その他",content:"内容"}},en:{name:"English",app:{reloadAlert:"Coming new Update!\nPlease reload.",reload:"Reload"},home:{birthday:"Birthday: 1999/10/05",info:"Graduation: 2020 (probably)",description:"student at a college of technology.\nI'm job hunting now."},detailsList:{links:{hatenaBlog:"Hatena Blog",amazon:"Amazon (jp)",wishlist:"Wishlist"},license:{fe:"Fundamental Information Technology Engineer Examination",driver:"Drivers License (AT, Japan)"}},contact:{email:"E-Mail (when need reply)",name:"Name (when need reply)",title:"Title",message:"Message",success:"Message sent successfully",failure:"Message sent failure"},histories:{type:{intern:"Intern",casual_job:"Casual job"},jobType:"Type",period:"Period",languages:"Languages",frameworks:"Frameworks",other:"Other",content:"Contents"}}};CSS&&CSS.paintWorklet&&CSS.paintWorklet.addModule&&CSS.paintWorklet.addModule("js/backgroundPainter.js"),n["a"].config.devtools=!1,n["a"].config.performance=!1,n["a"].config.productionTip=!1,n["a"].use(a["a"]),n["a"].use(i.a,{id:"UA-82930525-4",router:q,debug:{sendHitTask:!0}}),new n["a"]({i18n:new a["a"]({locale:"ja",fallbackLocale:"en",messages:Q}),router:q,store:k,vuetify:l,render:function(e){return e(F)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var n=o("91cd"),a=o.n(n);a.a},"91cd":function(e,t,o){}});