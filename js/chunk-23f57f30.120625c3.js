(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23f57f30"],{"253d":function(t,e,i){},"4c34":function(t,e,i){},"4c94":function(t,e,i){},"7dba":function(t,e,i){},8226:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"productions",style:{"--seed":t.seed}},[i("v-timeline",{style:{height:"100%"},attrs:{dense:t.timelineDense}},t._l(t.productions,function(e,s){return i("v-timeline-item",{key:s,attrs:{color:e.color,left:t.productionsLeft[s],right:!t.productionsLeft[s],small:e.small,icon:e.dotIcon,"hide-dot":e.hideDot}},[e.subheader?i("div",{style:{float:t.productionsLeft[s]?"right":void 0}},[i("span",{staticClass:"headline font-weight-bold"},[t._v("\n        "+t._s(e.body)+"\n      ")])]):i("v-card",[i("v-card-title",{class:[e.color,"justify-end"],style:{"flex-flow":t.productionsLeft[s]?"row-reverse":"row"}},[i("v-icon",{class:{"mr-3":!t.productionsLeft[s]},attrs:{dark:"",size:"42"}},[t._v(t._s(e.titleIcon))]),i("h2",{staticClass:"display-1 white--text font-weight-light",class:{"mr-3":t.productionsLeft[s]}},[t._v("\n            "+t._s(e.title)+"\n          ")])],1),i("v-container",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(e.body))]),i("v-card-actions",[e.link?i("v-btn",{staticStyle:{margin:"0"},attrs:{outline:"",href:e.link,"aria-label":e.title,target:"_blank",rel:"noopener",color:e.color}},[i("v-icon",{attrs:{left:""}},[t._v("arrow_forward")]),t._v("\n            Repository\n          ")],1):t._e(),i("v-spacer"),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.more,expression:"p.more"}],attrs:{flat:""},on:{click:function(i){t.$set(e,"show",!e.show)}}},[t._v("\n            more\n            "),i("v-icon",[t._v(t._s(e.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),i("v-slide-y-transition",[i("v-list",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"p.show"}]},[t._l(e.more,function(e){return[Array.isArray(e)?i("v-list-tile",{key:e[0]+" "+e[1]},[i("v-list-tile-content",[i("v-list-tile-sub-title",[t._v(t._s(e[0]))]),i("v-list-tile-title",[t._v(t._s(e.slice(1).join(", ")))])],1)],1):i("v-list-tile",{key:e},[i("v-list-tile-content",[t._v("\n                  "+t._s(e)+"\n                ")])],1)]})],2)],1)],1)],1)}))],1)},n=[],a=(i("cadf"),i("551c"),i("097d"),{name:"Productions",data:function(){return{seed:Date.now(),productions:[{subheader:!0,hideDot:!0,body:"2018"},{small:!0,color:"green lighten-1",link:"https://github.com/syuchan1005/syuchan1005.github.io",title:"syuchan1005 Portfolio",body:"このサイト\nChromeなどのCSS Paint API対応ブラウザで開くと背景がうるさくなる仕様\n(DOMでも再現できるがすごく重たくなる)",more:[["フロントエンド","Vue.js","Vuetify"]]},{small:!0,color:"green",link:"https://github.com/syuchan1005/SchoolFestival2019",title:"School Festival 2019",body:"2019年 学園祭用Webアプリ\nWebから商品の追加、統計などの閲覧、LINEBotからも操作できる",more:["1500人規模の利用を想定",["フロントエンド","Vue.js","Vuetify"],["バックエンド","Koa.js","GraphQL"],["他","SQLite"]]},{small:!0,color:"orange lighten-1",link:"https://github.com/syuchan1005/GitPrefix",title:"GitPrefix",body:"IntelliJ IDEA用プラグイン\nVSCのコミット画面などから絵文字やテキストを先頭に挿入できる\n"},{small:!0,color:"blue",link:"https://github.com/syuchan1005/OSX-KVM",title:"OSX-KVM",body:"DockerでmacOSを動かそうというもの\n内部でqemuを起動していて、VNC, SSHができる"},{small:!0,color:"purple lighten-1",link:"https://github.com/syuchan1005/KataKataTaaaaaaan",title:"KataKataTaaaaaaan",body:"IntelliJ IDEA用プラグイン\nエディタ内で文字を打つと面白いことが起きる"},{subheader:!0,hideDot:!0,body:"2017"},{small:!0,color:"yellow darken-4",link:"https://github.com/syuchan1005/NPMScriptRunner",title:"NPMScriptRunner",body:"IntelliJ IDEA用プラグイン\nNodejsのpackage.jsonのscriptsの横に実行ボタンを追加する\n現在では公式プラグインに統合されている"}]}},computed:{timelineDense:function(){return this.$vuetify.breakpoint.width<770},productionsLeft:function(){return this.timelineDense?this.productions.map(function(){return!1}):this.productions.map(function(t,e,i){return void 0===t.left&&(t.left=!(e>0)||!i[e-1].left),t.left})}}}),r=a,o=(i("e0a4"),i("2877")),c=i("6544"),l=i.n(c),h=i("8336"),d=(i("4c94"),i("b64a")),u=i("2b0e"),m=u["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],width:[Number,String]}}),p=i("0d01"),g=i("6a18"),v=i("80d2"),f=i("58df"),b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},y=Object(f["a"])(d["a"],m,p["a"],g["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean,tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return b({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--raised":this.raised,"v-card--tile":this.tile},this.themeClasses)},styles:function(){var t={height:Object(v["a"])(this.height)};return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),this.height&&(t.height=Object(v["a"])(this.height)),this.maxHeight&&(t.maxHeight=Object(v["a"])(this.maxHeight)),this.maxWidth&&(t.maxWidth=Object(v["a"])(this.maxWidth)),this.width&&(t.width=Object(v["a"])(this.width)),t}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,s=e.data;return s.style=this.styles,t(i,this.setBackgroundColor(this.color,s),this.$slots.default)}}),_=(i("253d"),i("4c34"),Object(f["a"])(m).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:{height:Object(v["a"])(this.height),maxHeight:Object(v["a"])(this.maxHeight),maxWidth:Object(v["a"])(this.maxWidth),width:Object(v["a"])(this.width)},on:this.$listeners},[this.__cachedSizer,this.genContent()])}})),S=_,w=i("d9bd"),C=S.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(w["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(w["b"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var n=t.naturalHeight,a=t.naturalWidth;n||a?e.calculatedAspectRatio=a/n:null!=i&&setTimeout(s,i)};s()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=S.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}),O=(C.extend({name:"v-card-media",mounted:function(){Object(w["c"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),u["a"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var i=e.data,s=e.props,n=e.children;return i.staticClass=("v-card__title "+(i.staticClass||"")).trim(),s.primaryTitle&&(i.staticClass+=" v-card__title--primary"),t("div",i,n)}})),j=u["a"].extend(Object(v["d"])("v-card__actions"));u["a"].extend(Object(v["d"])("v-card__text")),i("db6d");function k(t){return{name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var s=i.props,n=i.data,a=i.children;if(n.staticClass=(t+" "+(n.staticClass||"")).trim(),n.attrs){var r=Object.keys(n.attrs).filter(function(t){if("slot"===t)return!1;var e=n.attrs[t];return e||"string"===typeof e});r.length&&(n.staticClass+=" "+r.join(" ")),delete n.attrs}return s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),e(s.tag,n,a)}}}var x=k("container"),$=i("132d"),I=i("8860"),L=i("ba95"),V=i("5d23"),z=i("0789"),B=i("549c"),D=k("flex"),E=k("layout"),P=Object(v["d"])("spacer","div","v-spacer"),R=(B["a"],i("823f"),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}),T=Object(f["a"])(g["a"]).extend({name:"v-timeline",props:{alignTop:Boolean,dense:Boolean},computed:{classes:function(){return R({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),A=i("9d26"),N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},W=Object(f["a"])(d["a"],g["a"]).extend({name:"v-timeline-item",props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(A["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=[];this.hasIcon&&t.push(this.genIcon());var e=this.setBackgroundColor(this.color);return this.$createElement("div",N({staticClass:"v-timeline-item__inner-dot"},e),t)},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},[this.$slots.opposite])}},render:function(t){var e=[this.genBody()];return this.hideDot||e.unshift(this.genDot()),this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:N({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--left":this.left,"v-timeline-item--right":this.right},this.themeClasses)},e)}}),H=Object(o["a"])(r,s,n,!1,null,"4da4ffaa",null);H.options.__file="Productions.vue";e["default"]=H.exports;l()(H,{VBtn:h["a"],VCard:y,VCardActions:j,VCardTitle:O,VContainer:x,VIcon:$["a"],VList:I["a"],VListTile:L["a"],VListTileContent:V["a"],VListTileSubTitle:V["b"],VListTileTitle:V["c"],VSlideYTransition:z["b"],VSpacer:P,VTimeline:T,VTimelineItem:W})},"823f":function(t,e,i){},db6d:function(t,e,i){},e0a4:function(t,e,i){"use strict";var s=i("7dba"),n=i.n(s);n.a}}]);
//# sourceMappingURL=chunk-23f57f30.120625c3.js.map