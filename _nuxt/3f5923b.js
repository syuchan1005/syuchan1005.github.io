(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{457:function(t,e,o){"use strict";o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return h})),o.d(e,"c",(function(){return d}));var n=o(459),r=o(0),c=Object(r.i)("v-card__actions"),l=Object(r.i)("v-card__subtitle"),h=Object(r.i)("v-card__text"),d=Object(r.i)("v-card__title");n.a},493:function(t,e,o){var content=o(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("c26afe2a",content,!0,{sourceMap:!1})},508:function(t,e,o){"use strict";o(493)},509:function(t,e,o){var n=o(18)(!1);n.push([t.i,".productions[data-v-412984a4]{padding:10px;height:100%;background-image:paint(material-gb);--background-color:#53e3d1;--colors:#fea78c #ffa3a6 #90c4e9 #f7db70 #eabebf #75cce8 #a5dee5 #80beaf #b3ddd1 #f5b994}.productions.dark[data-v-412984a4]{--background-color:#349085;--colors:#9e6857 #945f60 #537287 #88793e #917676 #4c8496 #698e92 #6da295 #85a49b #bf9073}.cards[data-v-412984a4]{padding:10px;display:grid;grid-template-columns:repeat(auto-fill,300px);grid-column-gap:10px;-moz-column-gap:10px;column-gap:10px;grid-row-gap:10px;row-gap:10px;justify-content:center;align-items:start}",""]),t.exports=n},519:function(t,e,o){"use strict";o.r(e);o(25),o(54),o(150);var n="data:application/javascript;charset=utf8,".concat(encodeURIComponent('registerPaint("material-gb",class{constructor(){this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1}initSeed(){for(this.mt[0]=(this.seed||Date.now())>>>0,this.mti=1;this.mti<this.N;this.mti+=1){const t=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(1812433253*((4294901760&t)>>>16)<<16)+1812433253*(65535&t)+this.mti,this.mt[this.mti]>>>=0}}next(){let t;const i=[0,this.MATRIX_A];if(this.mti>=this.N){let s;for(this.mti===this.N+1&&this.initSeed(5489),s=0;s<this.N-this.M;s+=1)t=this.mt[s]&this.UPPER_MASK|this.mt[s+1]&this.LOWER_MASK,this.mt[s]=this.mt[s+this.M]^t>>>1^i[1&t];for(;s<this.N-1;s+=1)t=this.mt[s]&this.UPPER_MASK|this.mt[s+1]&this.LOWER_MASK,this.mt[s]=this.mt[s+(this.M-this.N)]^t>>>1^i[1&t];t=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^t>>>1^i[1&t],this.mti=0}return t=this.mt[this.mti+=1],t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,1/4294967296*((t^=t>>>18)>>>0)}static get inputProperties(){return["--background-color","--colors","--seed"]}paint(t,i,s){this.context=t,this.drawBG(i,s);const h=s.get("--colors").toString().split(/[ \\n]/).filter(t=>0!==t.length);t.shadowColor="rgba(0, 0, 0, 0.5)",t.shadowBlur=30;const e=parseInt(s.get("--seed").toString(),10);Number.isInteger(e)&&(this.seed=e),this.initSeed();for(let s=0;s<i.width/70;s+=1)t.fillStyle=h[Math.floor(this.next()*h.length)],this.drawDiamond(i.width*(2*this.next()-.5),i.height*(this.next()-.5),i.width*(this.next()+.5),i.height*(this.next()+.5))}drawBG(t,i){this.context.fillStyle=i.get("--background-color").toString(),this.context.rect(0,0,t.width,t.height),this.context.fill()}drawDiamond(t,i,s,h){this.context.save(),this.context.beginPath(),this.context.moveTo(t,i),this.context.lineTo(t-s/2,i+h/2),this.context.lineTo(t,i+h),this.context.lineTo(t+s/2,i+h/2),this.context.closePath(),this.context.fill(),this.context.restore()}});'));CSS&&CSS.paintWorklet&&CSS.paintWorklet.addModule&&CSS.paintWorklet.addModule(n);var r={name:"Productions",data:function(){return{seed:Date.now(),openMore:[]}},computed:{items:function(){return{2021:[{color:"green",title:"BookReader",link:"https://github.com/syuchan1005/BookReader",body:"2019年から改善を続けている自分専用マンガビュワー",more:[["フロントエンド","React (hooks)","MUI"],["バックエンド","Koa.js","GraphQL"],["他","SQLite"]]},{color:"green lighten-1",link:"https://github.com/syuchan1005/syuchan1005.github.io",title:"syuchan1005 Portfolio (Renewed)",body:"このサイト\nほとんどのUIをjsonから構築しているため一部重たいことがあった。Nuxtを用いてSSGを利用し軽量化を実施。",more:[["フロントエンド","Vue.js","Vuetify","Nuxt"]]}],2019:[{color:"grey darken-1",title:"HomeControl",link:"https://github.com/syuchan1005/HomeControl",body:"家の中の赤外線動作系家電(テレビ等)やREST API経由で操作できる家電を\nGoogle HomeやClova, Alexaに追加する"},{color:"cyan darken-1",title:"Reveal in ProjectView",link:"https://github.com/syuchan1005/RevealInProjectView",body:"IntelliJ IDEA用プラグイン\nProjectTreeの複数のViewからProjectViewに移動するオプションを追加する。"},{color:"pink accent-2",title:"LoveSync",link:"https://github.com/syuchan1005/LoveSync",body:"パートナー同士で[Secret]したいときに押すボタンを提供する。",more:[["フロントエンド","Vue.js","Vuetify"],["バックエンド","Koa.js","GraphQL"],["他","SQLite"]]}],2018:[{color:"green lighten-1",link:"https://github.com/syuchan1005/syuchan1005.github.io",title:"syuchan1005 Portfolio",body:"このサイト\nChromeなどのCSS Paint API対応ブラウザで開くと背景がうるさくなる仕様\n(DOMでも再現できるがすごく重たくなる)",more:[["フロントエンド","Vue.js","Vuetify"]]},{color:"green",link:"https://github.com/syuchan1005/SchoolFestival2019",title:"School Festival 2019",body:"2019年 学園祭用Webアプリ\nWebから商品の追加、統計などの閲覧、LINEBotからも操作できる",more:["1500人規模の利用を想定",["フロントエンド","Vue.js","Vuetify"],["バックエンド","Koa.js","GraphQL"],["他","SQLite"]]},{color:"orange lighten-1",link:"https://github.com/syuchan1005/GitPrefix",title:"GitPrefix",body:"IntelliJ IDEA用プラグイン\nVSCのコミット画面などから絵文字やテキストを先頭に挿入できる\n"},{color:"blue",link:"https://github.com/syuchan1005/OSX-KVM",title:"OSX-KVM",body:"DockerでmacOSを動かそうというもの\n内部でqemuを起動していて、VNC, SSHができる"},{color:"purple lighten-1",link:"https://github.com/syuchan1005/KataKataTaaaaaaan",title:"KataKata Taaaaaaan",body:"IntelliJ IDEA用プラグイン\nエディタ内で文字を打つと面白いことが起きる"}],2017:[{color:"yellow darken-4",link:"https://github.com/syuchan1005/NPMScriptRunner",title:"NPMScript Runner",body:"IntelliJ IDEA用プラグイン\nNodejsのpackage.jsonのscriptsの横に実行ボタンを追加する\n現在では公式プラグインに統合されている"},{src:"https://raw.githubusercontent.com/syuchan1005/Blueberry/master/screenshots/Top.png",link:"https://github.com/syuchan1005/Blueberry",color:"blue darken-3",title:"BlueBerry",body:"写真, 動画の管理用Webシステム"}]}}},methods:{textColor:function(t){var e=t.split(" ");return["".concat(e[0],"--text"),"text--".concat(e[1])]},toggleMore:function(t){var i=this.openMore.indexOf(t);-1===i?this.openMore.push(t):this.openMore.splice(i,1)}}},c=(o(508),o(109)),l=o(147),h=o.n(l),d=o(474),m=o(459),v=o(457),y=o(216),_=o(314),f=o(217),S=o(140),x=o(128),k=o(107),M=o(477),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"productions",style:{"--seed":t.seed}},[t._l(Object.keys(t.items).sort((function(a,b){return b-a})),(function(e){return[o("div",{key:e,staticClass:"display-1"},[t._v("\n      "+t._s(e)+"\n    ")]),t._v(" "),o("div",{key:e+"-"+t.items[e].length,staticClass:"cards"},t._l(t.items[e],(function(n){return o("v-card",{key:e+"-"+n.title},[n.src?o("v-img",{attrs:{src:n.src,"aspect-ratio":"1.7778"}}):t._e(),t._v(" "),n.src?o("v-card-title",[o("div",{staticClass:"headline",class:t.textColor(n.color)},[t._v("\n            "+t._s(n.title)+"\n          ")]),t._v(" "),o("v-card-text",{staticStyle:{"padding-top":"16px"}},[t._v("\n            "+t._s(n.body)+"\n          ")])],1):t._e(),t._v(" "),n.src?t._e():o("v-card-title",{class:[n.color]},[o("div",{staticClass:"display-1 white--text font-weight-light"},[t._v("\n            "+t._s(n.title)+"\n          ")])]),t._v(" "),n.src?t._e():o("v-card-text",{staticStyle:{"padding-top":"16px"}},[t._v("\n          "+t._s(n.body)+"\n        ")]),t._v(" "),o("v-card-actions",[n.link?o("v-btn",{staticStyle:{margin:"0"},attrs:{outlined:"",href:n.link,"aria-label":n.title,target:"_blank",rel:"noopener",color:n.color}},[t._v("\n            Repository\n          ")]):t._e(),t._v(" "),o("v-spacer"),t._v(" "),n.more?o("v-btn",{attrs:{text:""},on:{click:function(o){return t.toggleMore(e+"-"+n.title)}}},[t._v("\n            more\n            "),o("v-icon",{style:{transform:t.openMore.includes(e+"-"+n.title)?"rotate(-180deg)":""},attrs:{right:""}},[t._v("\n              "+t._s(t.$vuetify.icons.values.expand)+"\n            ")])],1):t._e()],1),t._v(" "),n.more?o("v-slide-y-transition",[o("v-list",{directives:[{name:"show",rawName:"v-show",value:t.openMore.includes(e+"-"+n.title),expression:"openMore.includes(`${k}-${item.title}`)"}]},[t._l(n.more,(function(e){return[Array.isArray(e)?o("v-list-item",{key:e[0]+" "+e[1]},[o("v-list-item-content",[o("v-list-item-subtitle",[t._v(t._s(e[0]))]),t._v(" "),o("v-list-item-title",[t._v(t._s(e.slice(1).join(", ")))])],1)],1):o("v-list-item",{key:e},[o("v-list-item-content",[t._v("\n                  "+t._s(e)+"\n                ")])],1)]}))],2)],1):t._e()],1)})),1)]}))],2)}),[],!1,null,"412984a4",null);e.default=component.exports;h()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VIcon:y.a,VImg:_.a,VList:f.a,VListItem:S.a,VListItemContent:x.a,VListItemSubtitle:x.b,VListItemTitle:x.c,VSlideYTransition:k.e,VSpacer:M.a})}}]);