webpackJsonp([1],{"+1qO":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticStyle:{"margin-top":"100px"},attrs:{id:"mine"}},[t._v("\n  我的\n")])},a=[],i={render:n,staticRenderFns:a};e.a=i},0:function(t,e){},"2Bxi":function(t,e,s){t.exports=s.p+"static/img/2.49e1e8e.jpg"},"58c9":function(t,e){},"5Bdi":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"nba"}},[s("div",{staticClass:"top-bar"},[s("div",{staticClass:"page-swipe"},[s("mt-swipe",{attrs:{auto:3600,"show-indicators":!1}},t._l(t.bannerList,function(t,e){return s("mt-swipe-item",{key:e},[s("a",{attrs:{href:t.link}},[s("div",{staticClass:"banner",style:{background:"url("+t.img+")"}})])])}))],1)]),t._v(" "),s("ul",{staticClass:"title-list"},t._l(t.findNbaVal.titleList,function(e,n){return s("li",[s("a",{attrs:{href:e.url}},[s("div",{staticClass:"title-list-content"},[s("div",{staticClass:"title-list-title"},[s("span",{domProps:{textContent:t._s(e.player1)}}),t._v(" "),s("span",[t._v("vs")]),t._v(" "),s("span",{domProps:{textContent:t._s(e.player2)}})]),t._v(" "),s("div",{staticClass:"title-list-score"},[s("div",[s("span",{domProps:{textContent:t._s(e.player1score)}}),t._v(" "),s("span",[t._v("-")]),t._v(" "),s("span",{domProps:{textContent:t._s(e.player2score)}})])]),t._v(" "),s("div",{staticClass:"title-list-status"},[s("p",[s("span",{domProps:{textContent:t._s(e.status)}})])])])])])})),t._v(" "),s("ul",{staticClass:"list-content"},t._l(t.findNbaVal.contentList,function(e,n){return s("li",[s("a",{attrs:{href:e.url}},[s("ul",{staticClass:"list-content-ul"},[s("li",{staticClass:"list-content-li"},[s("div",[s("p",{domProps:{textContent:t._s(e.content)}})]),t._v(" "),s("span",{domProps:{textContent:t._s(e.answer)}})])])])])})),t._v(" "),t._m(0)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-content"},[s("p",[t._v("～～～～亲,到底了哦～～～～")])])}],i={render:n,staticRenderFns:a};e.a=i},"5RXt":function(t,e,s){"use strict";var n=s("MVSX"),a=s("facN");s.n(a);n.default.component(a.Swipe.name,a.Swipe,a.SwipeItem.name,a.SwipeItem),e.a={data:function(){return{bannerList:[{link:"https://m.hupu.com/bbs/20538683.html",img:"static/find-nba-banner-01.png",name:"01"},{link:"https://m.hupu.com/bbs/20534756.html",img:"static/find-nba-banner-02.png",name:"02"}]}},computed:{findNbaVal:function(){return this.$store.state.findNbaVal.data.result}}}},"5e9m":function(t,e,s){t.exports=s.p+"static/img/0.e211b4e.jpg"},"5nzI":function(t,e,s){"use strict";function n(t){s("jO4m")}var a=s("MV/e"),i=s("e2wF"),o=s("46Yf"),l=n,r=o(a.a,i.a,!1,l,"data-v-29daa35a",null);e.a=r.exports},"7klN":function(t,e,s){"use strict";e.a={data:function(){return{}},computed:{newsVal:function(){return this.$store.state.findNews.data.result}}}},"9RSU":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("div",{staticClass:"top-bar"},[s("div",{staticClass:"page-swipe"},[s("mt-swipe",{attrs:{auto:3600,"show-indicators":!1}},t._l(t.bannerList,function(t,e){return s("mt-swipe-item",{key:e},[s("a",{attrs:{href:t.link}},[s("div",{staticClass:"banner",style:{background:"url("+t.img+")"}})])])}))],1)]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"news"},[s("ul",{staticClass:"news-ul"},t._l(t.nbaData,function(e,n){return s("li",{staticClass:"news-time"},[s("div",{staticClass:"news-time-box"},[s("p",{staticClass:"news-time-text"},[s("span",[t._v("2017-")]),t._v(t._s(e.title)+"\n            "),s("span",{domProps:{textContent:t._s(t.status[n])}}),t._v(" "),s("ul",{staticClass:"circle left"},[s("li",{style:{background:t.color[t.colorIndex]}}),t._v(" "),s("li",{style:{background:t.color[t.colorIndex]}}),t._v(" "),s("li",{style:{background:t.color[t.colorIndex]}}),t._v(" "),s("li",{style:{background:t.color[t.colorIndex]}})]),t._v(" "),s("ul",{staticClass:"circle right"},[s("li",{style:{background:t.color[t.colorIndex]}}),t._v(" "),s("li",{style:{background:t.color[t.colorIndex]}}),t._v(" "),s("li",{style:{background:t.color[t.colorIndex]}}),t._v(" "),s("li",{style:{background:t.color[t.colorIndex]}})])])]),t._v(" "),s("ul",t._l(e.tr,function(e,n){return s("li",{staticClass:"news-list"},[s("a",{attrs:{href:e.link1url}},[s("ul",{staticClass:"news-content"},[s("li",[s("span",{domProps:{textContent:t._s(e.player1)}}),t._v(" "),s("img",{attrs:{src:e.player1logo,alt:"logo"}})]),t._v(" "),s("li",[s("p",{domProps:{textContent:t._s(e.score)}}),t._v(" "),s("p",[s("span",{domProps:{textContent:t._s(e.time)}})])]),t._v(" "),s("li",[s("img",{attrs:{src:e.player2logo,alt:"logo"}}),t._v(" "),s("span",{domProps:{textContent:t._s(e.player2)}})])])])])}))])}))]),t._v(" "),t._m(1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("p",[s("span",{staticClass:"title-number"},[t._v("NBA-2K15")]),s("span",{staticClass:"title-text"},[t._v("火爆登场")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-content"},[s("p",[t._v("～～～～亲,到底了哦～～～～")])])}],i={render:n,staticRenderFns:a};e.a=i},"9nGR":function(t,e,s){"use strict";var n=s("MVSX"),a=s("facN");s.n(a);n.default.component(a.Navbar.name,a.Navbar,a.TabItem.name,a.TabItem,a.Swipe.name,a.Swipe,a.SwipeItem.name,a.SwipeItem),n.default.use(a.InfiniteScroll),e.a={name:"HelloWorld",data:function(){return{bannerList:[{link:"http://sports1.sina.cn",img:"static/nba.jpg",name:"NAB"},{link:"http://sports.sina.cn/cba",img:"static/cba.jpg",name:"CBA"},{link:"http://sports.sina.cn/laliga/index.d.html",img:"static/eastja.jpg",name:"西甲"},{link:"http://sports.sina.cn/premierleague/index.d.html",img:"static/englishsuper.jpg",name:"英超"}],color:["#ccc","skyblue","greenyellow","pink"],status:["已结束","直播中","未开赛"],colorIndex:0}},computed:{nbaData:function(){return this.$store.state.nbaData.list},statusList:function(){return this.$store.state.nbaData}},methods:{}}},D8RI:function(t,e,s){"use strict";function n(t){s("58c9")}var a=s("5RXt"),i=s("5Bdi"),o=s("46Yf"),l=n,r=o(a.a,i.a,!1,l,"data-v-313e03f7",null);e.a=r.exports},DICR:function(t,e,s){"use strict";var n=s("MVSX"),a=s("facN");s.n(a);n.default.component(a.Spinner.name,a.Spinner),n.default.component(a.Tabbar.name,a.Tabbar),n.default.component(a.Header.name,a.Header),n.default.component(a.TabItem.name,a.TabItem),e.a={name:"app",data:function(){return{selected:"首页",loadingPage:!1,hideVal:!0}},created:function(){this.$store.dispatch("getDatas"),this.$store.dispatch("findNewsval"),this.$store.dispatch("findNbaVal"),this.$store.dispatch("dataListVal"),this.$store.dispatch("comVal"),this.$router.push({path:"/home"})},computed:{nbaData:function(){return this.$store.state.nbaData},goBackVal:function(){return this.$store.state.goBackVal},pathName:function(){return this.$route.name}},mounted:function(){this.loading()},methods:{goBack:function(){this.$router.go(-1)},loading:function(){var t=this;setTimeout(function(){t.loadingPage=!0,t.hideVal=!1},3500)}},watch:{selected:function(){var t="";"首页"==this.selected?t="/home":"发现"==this.selected?t="/find":"关心"==this.selected?t="/concern":"我的"==this.selected&&(t="/mine"),this.$router.push({path:t})},pathName:function(){"Home"===this.pathName?this.selected="首页":"Find"==this.pathName?this.selected="发现":"Nba"==this.pathName?this.selected="发现":"Datas"==this.pathName?this.selected="发现":"News"==this.pathName?this.selected="发现":"Com"==this.pathName?this.selected="发现":"Concern"==this.pathName?this.selected="关心":"Mine"==this.pathName&&(this.selected="我的")}}}},DwvO:function(t,e){},GRr1:function(t,e,s){"use strict";function n(t){s("SzRl")}var a=s("r4JW"),i=s("LmDL"),o=s("46Yf"),l=n,r=o(a.a,i.a,!1,l,"data-v-0231924b",null);e.a=r.exports},I3vc:function(t,e){},IcnI:function(t,e,s){"use strict";var n=s("MVSX"),a=s("aVGL"),i=s("BMa3"),o=s.n(i),l=s("y0Fx");n.default.use(a.a),n.default.use(l.a);var r=new a.a.Store({state:{nbaData:{},nbaDataList:{},findNews:{},goBackVal:!1,loadingVal:"",findNbaVal:{},dataListVal:{},comVal:{}},mutations:{haveDatas:function(t,e){t.nbaData=e},haveDatasList:function(t,e){t.nbaDataList=e},findNewsVal:function(t,e){t.findNews=e},findNbaVal:function(t,e){t.findNbaVal=e},dataListVal:function(t,e){t.dataListVal=e},comVal:function(t,e){t.comVal=e}},actions:{getDatas:function(t,e){n.default.http({url:"http://op.juhe.cn/onebox/basketball/nba",params:{key:"a8abfa1e921d5f46fac3eff086a30e0a"},method:"jsonp"}).then(function(e){t.commit("haveDatas",e.body.result),t.commit("haveDatasList",e.body.result.list[0].tr)},function(t){console.log(t)})},findNewsval:function(t,e){o.a.get("https://www.nbaNews/find/news/002").then(function(e){t.commit("findNewsVal",e)}).catch(function(t){console.log(t)})},findNbaVal:function(t,e){o.a.get("https://www.nbaNews/find/nba/001").then(function(e){t.commit("findNbaVal",e)}).catch(function(t){console.log(t)})},dataListVal:function(t,e){o.a.get("https://www.nbaNews/find/datas/003").then(function(e){t.commit("dataListVal",e)}).catch(function(t){console.log(t)})},comVal:function(t,e){o.a.get("https://www.nbaNews/find/com/004").then(function(e){t.commit("comVal",e)}).catch(function(t){console.log(t)})}},getters:{}});e.a=r},KYgu:function(t,e){},LmDL:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"nba"}},[t._m(0),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"content-hot"},[t._m(1),t._v(" "),s("ul",{staticClass:"content-hot-text"},t._l(t.comVal.hot,function(e,n){return s("li",[s("a",{attrs:{href:e.url}},[s("p",{domProps:{textContent:t._s(e.title)}})]),t._v(" "),s("span",{domProps:{textContent:t._s(e.tie)}})])}))]),t._v(" "),s("div",{staticClass:"content-nba"},[t._m(2),t._v(" "),s("div",{staticClass:"content-nba-content"},[t._m(3),t._v(" "),s("ul",{staticClass:"content-nba-content-main"},t._l(t.comVal.NBAmain,function(e,n){return s("li",[s("a",{attrs:{href:e.url}},[s("p",{domProps:{textContent:t._s(e.title)}})]),t._v(" "),s("span",{domProps:{textContent:t._s(e.tie)}})])})),t._v(" "),t._m(4),t._v(" "),s("ul",{staticClass:"content-nba-content-team"},t._l(t.comVal.NBAteam,function(e,n){return s("li",[s("a",{attrs:{href:e.url}},[s("p",{domProps:{textContent:t._s(e.title)}})]),t._v(" "),s("span",{domProps:{textContent:t._s(e.tie)}})])}))])])]),t._v(" "),t._m(5)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("p",[t._v("步入社区,享受NBA的天堂")]),t._v(" "),s("ul",{staticClass:"title-left"},[s("li"),t._v(" "),s("li"),t._v(" "),s("li"),t._v(" "),s("li"),t._v(" "),s("li"),t._v(" "),s("li")]),t._v(" "),s("ul",{staticClass:"title-right"},[s("li"),t._v(" "),s("li"),t._v(" "),s("li"),t._v(" "),s("li"),t._v(" "),s("li"),t._v(" "),s("li")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"content-hot-title"},[s("span",[t._v("热门版块")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"content-nba-title"},[s("span",[t._v("NBA论坛")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"content-nba-common"},[s("span",[t._v("主板")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"content-nba-common"},[s("span",[t._v("球队分区")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-content"},[s("p",[t._v("～～～～亲,到底了哦～～～～")])])}],i={render:n,staticRenderFns:a};e.a=i},M93x:function(t,e,s){"use strict";function n(t){s("nAKI")}var a=s("DICR"),i=s("Q6LS"),o=s("46Yf"),l=n,r=o(a.a,i.a,!1,l,"data-v-948dd170",null);e.a=r.exports},"MV/e":function(t,e,s){"use strict";e.a={data:function(){return{}},computed:{dataListVal:function(){return this.$store.state.dataListVal.data.result}}}},"Mn+5":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"concern"}},[s("p",{staticStyle:{"margin-top":"100px"}},[t._v("\n    关心\n  ")])])}],i={render:n,staticRenderFns:a};e.a=i},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("MVSX"),a=s("M93x"),i=s("YaEn"),o=s("/JRm"),l=(s.n(o),s("facN")),r=s.n(l),u=s("UhSw"),c=(s.n(u),s("IcnI"));s("qs/E");n.default.use(r.a),n.default.config.productionTip=!1,new n.default({el:"#app",store:c.a,router:i.a,template:"<App/>",components:{App:a.a}})},Q6LS:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("mt-header",{attrs:{title:t.selected,fixed:""}},[t.goBackVal?n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goBack},slot:"left"},[t._v("返回")]):t._e()],1)],1),t._v(" "),t._m(0),t._v(" "),n("keep-alive",[t.loadingPage?n("router-view"):t._e()],1),t._v(" "),t.hideVal?n("div",{staticClass:"loadPage"},[n("p",[t._v("亲～由于本网页面在国外,加载可能会久点哦～～加载中．．．")]),t._v(" "),n("mt-spinner",{attrs:{type:2,color:"rgb(38, 162, 255)",size:30}})],1):t._e(),t._v(" "),n("mt-tabbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"首页"}},[n("img",{attrs:{slot:"icon",src:s("tGse")},slot:"icon"}),t._v(" "),n("span",[t._v("首页")])]),t._v(" "),n("mt-tab-item",{attrs:{id:"发现"}},[n("img",{attrs:{slot:"icon",src:s("2Bxi")},slot:"icon"}),t._v(" "),n("span",[t._v("发现")])]),t._v(" "),n("mt-tab-item",{attrs:{id:"关心"}},[n("img",{attrs:{slot:"icon",src:s("lQgp")},slot:"icon"}),t._v(" "),n("span",[t._v("关心")])]),t._v(" "),n("mt-tab-item",{attrs:{id:"我的"}},[n("img",{attrs:{slot:"icon",src:s("5e9m")},slot:"icon"}),t._v(" "),n("span",[t._v("我的")])])],1)],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"soso"},[s("a",{attrs:{href:"https://m.baidu.com/?from=1012852s"}},[t._v("搜一搜")])])}],i={render:n,staticRenderFns:a};e.a=i},SzRl:function(t,e){},UhSw:function(t,e){},VcuM:function(t,e,s){"use strict";var n=s("MVSX"),a=s("facN");s.n(a);n.default.component(a.Navbar.name,a.Navbar,a.TabItem.name,a.TabItem),e.a={data:function(){return{nba:!1,news:!1,datas:!1,com:!1,selected:"1"}},watch:{selected:function(){"1"==this.selected?(this.$router.push({path:"/find/nba"}),this.selected="1"):"2"==this.selected?this.$router.push({path:"/find/news"}):"3"==this.selected?this.$router.push({path:"/find/datas"}):"4"==this.selected&&this.$router.push({path:"/find/com"})},pathName:function(){"Nba"==this.pathName?this.selected="1":"News"==this.pathName?this.selected="2":"Datas"==this.pathName?this.selected="3":"Com"==this.pathName&&(this.selected="4")}},computed:{newsVal:function(){return this.$store.state.findNews.data.result},pathName:function(){return this.$route.name}},methods:{}}},YaEn:function(t,e,s){"use strict";var n=s("MVSX"),a=s("zO6J"),i=s("wqTG"),o=s("d4ch"),l=s("hVWE"),r=s("d5WA"),u=s("D8RI"),c=s("GRr1"),m=s("5nzI"),p=s("zcwo");n.default.use(a.a),e.a=new a.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:i.a},{path:"/find",name:"Find",redirect:"/find/nba",component:o.a,children:[{path:"/find/nba",name:"Nba",component:u.a},{path:"/find/news",name:"News",component:p.a},{path:"/find/com",name:"Com",component:c.a},{path:"/find/datas",name:"Datas",component:m.a}]},{path:"/concern",name:"Concern",component:l.a},{path:"/mine",name:"Mine",component:r.a}]})},d4ch:function(t,e,s){"use strict";function n(t){s("I3vc")}var a=s("VcuM"),i=s("nlP4"),o=s("46Yf"),l=n,r=o(a.a,i.a,!1,l,"data-v-2b6d84df",null);e.a=r.exports},d5WA:function(t,e,s){"use strict";var n=s("+1qO"),a=s("46Yf"),i=a(null,n.a,!1,null,null,null);e.a=i.exports},e2wF:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"nba"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("ul",{staticClass:"list-content"},t._l(t.dataListVal.eastList,function(e,n){return s("li",[s("a",{attrs:{href:e.url}},[s("ul",{staticClass:"content-list"},[s("li",{staticClass:"number"},[s("span",{domProps:{textContent:t._s(e.num)}}),t._v(" "),s("span",{domProps:{textContent:t._s(e.name)}})]),t._v(" "),s("li",[s("span",{domProps:{textContent:t._s(e.win)}})]),t._v(" "),s("li",[s("span",{domProps:{textContent:t._s(e.false)}})]),t._v(" "),s("li",[s("span",{domProps:{textContent:t._s(e.value)}})]),t._v(" "),s("li",[s("span",{domProps:{textContent:t._s(e.winner)}})]),t._v(" "),s("li",[s("span",{domProps:{textContent:t._s(e.status)}})])])])])})),t._v(" "),t._m(4),t._v(" "),s("ul",{staticClass:"list-content"},t._l(t.dataListVal.westList,function(e,n){return s("li",[s("a",{attrs:{href:e.url}},[s("ul",{staticClass:"content-list"},[s("li",{staticClass:"number"},[s("span",{domProps:{textContent:t._s(e.num)}}),t._v(" "),s("span",{domProps:{textContent:t._s(e.name)}})]),t._v(" "),s("li",[s("span",{domProps:{textContent:t._s(e.win)}})]),t._v(" "),s("li",[s("span",{domProps:{textContent:t._s(e.false)}})]),t._v(" "),s("li",[s("span",{domProps:{textContent:t._s(e.value)}})]),t._v(" "),s("li",[s("span",{domProps:{textContent:t._s(e.winner)}})]),t._v(" "),s("li",[s("span",{domProps:{textContent:t._s(e.status)}})])])])])})),t._v(" "),t._m(5)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("p",[s("span",[t._v("NBA")]),t._v("经典数据排行榜")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"circle-left"},[s("li"),t._v(" "),s("li"),t._v(" "),s("li"),t._v(" "),s("li")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"circle-right"},[s("li"),t._v(" "),s("li"),t._v(" "),s("li"),t._v(" "),s("li")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"east-title"},[s("li",[t._v("东部排行")]),t._v(" "),s("li",[t._v("胜")]),t._v(" "),s("li",[t._v("负")]),t._v(" "),s("li",[t._v("胜场差")]),t._v(" "),s("li",[t._v("胜率")]),t._v(" "),s("li",[t._v("近况")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"west-title"},[s("li",[t._v("西部排行")]),t._v(" "),s("li",[t._v("胜")]),t._v(" "),s("li",[t._v("负")]),t._v(" "),s("li",[t._v("胜场差")]),t._v(" "),s("li",[t._v("胜率")]),t._v(" "),s("li",[t._v("近况")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-content"},[s("p",[t._v("～～～～亲,到底了哦～～～～")])])}],i={render:n,staticRenderFns:a};e.a=i},hVWE:function(t,e,s){"use strict";var n=s("Mn+5"),a=s("46Yf"),i=a(null,n.a,!1,null,null,null);e.a=i.exports},ixeh:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"nba"}},[s("ul",t._l(t.newsVal.newsList,function(e,n){return s("li",{staticClass:"nba-list"},[s("a",{attrs:{href:e.url}},[s("ul",{staticClass:"nba-content"},[s("li",{style:{background:"url("+e.pic+")",backgroundSize:"cover"}}),t._v(" "),s("li",[s("p",{domProps:{textContent:t._s(e.content)}}),t._v(" "),s("div",[s("span",{domProps:{textContent:t._s(e.author)}}),t._v(" "),s("span",{domProps:{textContent:t._s(e.time)}})])])])])])})),t._v(" "),t._m(0)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-content"},[s("p",[t._v("～～～～亲,到底了哦～～～～")])])}],i={render:n,staticRenderFns:a};e.a=i},jO4m:function(t,e){},lQgp:function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEAAQADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopGZUQu7BVUZJJwAK8+8R+NpJme00lykQ4a4HDN/u+g9+tZ1KkYK7OvCYOrip8tNer6I6vVvEumaPlJ5t8w/5YxfM349h+Nche/EO9kJFnaxQr2Z8u39BXHEliSSSTySe9JXDPEzltofU4bJcNSXvrmfn/AJG3J4v12U5OoOvsqKP5CkTxbrsZyNRkP+8qn+YrForL2k+7O/6nh7W9mvuR1tp8QNUhIFxFBcL342N+Y4/Sul03xxpV8Qk5a0kP/PX7v/fQ/rivLaK0jiKketzkr5Phaq0jyvy/y2Pd0dZEDowZSMgg5Bpa8b0nxBqGjSA20xMWfmhflD+Hb8K9I0LxRZa2oRT5N0B80LHr/unuK7KVeM9NmfN43Ka2G95e9Hv/AJm5QTgZNZ2r63ZaLb+bdSfMfuRryz/Qf1rzXW/Fd/rLNHuMFqekKHqP9o9/5U6laNP1IwWWVsVqtI9/8u53Gq+NNL04tHExu5h/DEflB926flmuRvvHer3RIgMdqnpGuT+Z/piuYoriniJy62Pp8PlGForWPM/P/LYuzaxqVwcy39y/1lbH86jTUb6NspeXCn1ErD+tVqKx5n3PQVKCVlFG9ZeMdasmH+leeg/hnG7P49f1rsdH8cWGoMsN2Psk54BY5Rj9e34/nXmFFawrzj1OHE5Vhq6+Gz7rQ9460V5h4Z8XTaW6Wt4zS2R4BPLRfT1Ht+VemxSpNEssTq8bjKspyCK9CnVVRXR8ljcDUwk+Weqez7jqKKK0OIKKKKACiiigAooooAKKKKACiiqup3i6fplzdtj91GWAPc9h+eKTdlcqMXKSit2cR458QNJOdJtnxGn+vYH7x/u/Qfz+lcRTpJHmleWRizuxZmPcnrW5b2djpFnFeapGZ7mYboLPOAF7O/t6Dv8Ay8uTdSTbPvKNOGCoxpxV35bt/wBfcYsNvPcNtghklb0RSx/Srg0HVyMjS7zH/XBv8K9kgihihVYI0jix8qooA/IVJXSsIurPEnxDO/uw+9niE2nXtuMzWdxGPV4mH8xVaveKo3ejabfg/abKCQn+IoA35jmk8J2ZpT4hV/3kPuZ4rRXoWqfD6CRWk0ydon7RSnKn6HqP1rh7/TrvTLgwXkDRP2z0PuD3rmnSlDc9nC4+hiV+7evbqVacjvFIskbMjqcqynBBptFZnWdCssPiZRHcuItXAAjlJwlxjorejeh71gyxSQSvFKjJIhKsrDBBpnQ1svJ/btr8/OpwJ97vcIB39XA/MfSrvzepzKPsHp8H5f8AA/L02xqKkhgluZlhgjaSRjhVQZJrsdJ+H80oWXU5vJU8+VHgt+J6D9aIU5T+FDxOLo4ZXqyt+ZxVTw2V3cDMNrNKP9iMt/KvXrHw9pOnAfZ7KLcP43G5vzNaddMcI+rPEq8QxTtTh97PE30nUYxl9PulHqYWH9KqMpViGBBHUGvd6zNdsba80i786CN3WByjMoJU4OCD2pywlldMVHiBykozhv2Z41XY+CPELWtyul3L5t5TiIk/cc9vof5/WuOpQSrBgSCOQR2rlhNwldHu4rDQxFJ059fwPd6Kz9Dv/wC09FtLsnLunz/7w4P6g1oV6yd1dH59ODhJwlutAooopkBRRRQAUUUUAFFFFABXM+O5jF4adAf9bKiH/wBC/pXTVyvxAQt4dQj+G4Un8mH9azrfw2duXJPF0790cR4cs4bnUzLcrutrWNriUeoXt+JxVC9vJtQvZbqdsySNuPt7D2Fa2jfJ4c1+YfeEcSfgz81g15ktIpH2tL3q05PpZfgn+v4Hs3h+6F7oFjPnJMQVvqOD+orSrifh5qIe1uNOdvmjbzUH+yeD+Rx+ddtXp0pc0Ez4jH0XRxM4ef4MKKKK0OQKyfEb6dFo00mpwiaFcAJ/EWPTaexrWrzj4gaoZ9Qi05G/dwDe49XP+A/mayrT5INnfluHdfExina2r+RkX+iR/Zm1DSpjdWI++MfvIfZx/WsWrFlfXOn3AntZWjkHHHQj0I7irlxHBqUb3NnEIbhRumtl+6R3ZPb1Xt9Onmu0tUfaRc6Xuzd13/z/AM/vMunRyPDKksbFHQhlYHkEd6bRUHQ1c9T8HPp11p73dtbxxXbMRcYHO7rx6KeuOldLXk/g7VDpuuxIzYhucROO2T90/n/M16xXp4ealA+IzfDSo4l63T1X+XyCiiitzywrM8RXAtfD1/KTj9yyj6t8o/U1p1xPxC1IJawaajfNIfNkH+yOn5n+VZ1ZcsGzswFF1sTCC7/gjz2iiivJP0A9Q8AuX8OFT0SdlH5A/wBa6iua8CwmLwzGxH+tkd/1x/Sulr1qP8NH5/mDTxVS3dhRRRWhxhRRRQAUUUUAFFFFABWR4oszfeHL2JRlwnmL9VOf6Vr0EZGD0pSV00aUqjp1IzXR3PJtC/e6Jr1sOrW6y49kbJ/nWBXXw2I0LxsbKQYtLwNEp9UfgD8DgfhXKXED21zLBIMPG5Rh7g4ry5ppJPpofd4apGdSUo7SSkvut+hb0bUn0nVYLxMkI2HUfxKeo/KvZYZo7iCOaJg8cihlYdwa8LrufA3iARsNIunwrHNux7Huv49q1w1XlfK+p52d4J1Ye2gtY7+n/AO/ooor0D5ERmCKWY4UDJNeIX9019qFxdP1lkZ/pk9K9i1lzHoeoOvVbaQj/vk14rXFi3sj6fh6mrTn6IK6nwXoX9p3zXkrOsFswI2nBZ/TPp6/hXLV6t4IgWHwvbsBzKzu313EfyArHDwUp6no5xiJUMM3Hd6HH+MdAGk34uLdcWlwSQB0Ru4+ncf/AFq5mvYvE1iuoeH7uIjLIhkT2Zef/rfjXjtPEU+SenUnJ8W8Rh7T3jp/kKCVIIOCOQRXtunXP23TLW57yxK5+pHNeI16/wCFCW8L2Bbr5ZH6mrwj95o5OIYJ0oT7O33r/gGzRRRXefKEN3dQ2VpLczttiiUsxrxnVdRl1XUp7yXgyNwv91ew/Kuh8Z+IxqNx9gtHzaxN87DpI3+A/wA9q5KvOxNXmfKtkfY5NgHQp+1mvel+C/4IUqqWYKoJJOAB3pK6HwZph1HXo5GXMNt+9b6/wj8+fwNYRi5SSR6tetGjSlUlskemaXZjT9KtbTvFGFPucc/rmrdFFeulZWPzuUnKTk92FFFFMkKKKKACiiigAooooAKKKKAMXxJon9sWIMRCXkB3wP7+n4/4VwHiq3b7bDqHlmMXibnUjGyVfldfzH616zWJ4o0Yatos0cSD7RGfNjwOSwHT8Rx+Vc9alzJtbnrZZj3RqRhP4fyv/wAGz+/ueRUoJVgykgg5BHak6UV5p9qeoeE/E66tALO7cC9jHBP/AC1Hr9fX866ivCopZIJVlidkkQ5VlOCDXpnhjxbHqqLaXjLHegYB6CX6e/tXfQr83uy3Pk81yp0m61Fe71Xb/gfkdFfQfarC5t/+esTJ+YIrw9lKMVYEMDgg9q93rzHxroT2Gotfwofs1y2SR/A/cfj1/OjFQbSkug8gxMYVJUZfa29UcrXqXgW8S48OpAGHmW7srDvgksD+v6V5bU9pe3VhL5tpcSQuRglGxkVy0ans5XPezDB/W6Ps07O90eyardQ2unXDSuqkxOVUnlsKScV4pW5eTXFvYs99NJLqF4oGJGJaKHOefQscceg96w6qvU52jnyrB/VoS1vf9OwAEnAGSa9s0q1+w6TaWpHzRRKrfXHP615r4O0dtT1pJXXNvbESOexP8I/P9BXqxOBk1vhIWTkeXn+IUpxorpq/0CuF8YeKwok0zT5MsflnlU9PVR/WmeKfGWQ9hpUnH3ZLhT+i/wCP5VwlKvX+zE0yrKXdV669F+rCiiiuI+mCvW/Cmj/2RoyLIuLib95L6j0H4D9c1yPgrw8b67XUblP9FhbKAj/WOP6D+f416XXdhaVvfZ8tnuNUn9Xg9t/8gooorsPnAooooAKKKKACiiigAooooAKKKKACiiigDzLxtoR0/UPt0Cf6NcHLYHCP3H49fzrlK9zubaG8tpLe4jWSKQYZT3ryzxJ4Xn0SYyx7pbJj8sndfZv8e9efiKLi+aOx9dlGZxqxVCq/eW3n/wAE5+lBKsGUkEHII7UlFcp7p3nhvxuMJZ6u/slyf/Zv8fz9a7aaG3vrVopUSaCVeQeQwrw2t7QfFV7orCPPn2meYWPT/dPb+VddLE292ex8/j8mUn7XDaPt/l2NjU/h9cLc7tNnRoWP3ZSQU/EDkfrWLMkGgSbRbyz3o6S3ERSND6qp5Y+549q9M0rWrHWYPMtJQWA+aNuGX6j+tXnRZF2uoZT2IyK2eHhLWBwRzbEU37PEq9umz+f9anhk00lxM8szs8jnLMxySa19H8Majq8ilImhtz1mkGBj29fwr1dLG0jbclrAreojANZWueKLHRVKM3nXWOIUPI/3j2rP6tGPvTZ1/wBtVa37rDU9fvLNpa6f4b0nZvWKCPl5HPLH1Pqa4PxJ4wm1Xfa2e6Gz6E9Gk+voPasfV9bvdauPMupPlH3Il4VPoP61nVnVr3XLDRHXgsqVOXtsQ+ab+5f5sKKKK5j2grf8NeGptcufMkDR2UZ/eSf3v9ke/wDKpfDXhSbWZFuLgNFYg8t0Mnsv+Nen29vDaW6QQRrHEgwqr0ArqoUOb3pbHhZpmqop0qL97v2/4IsEEVtAkEKBIkG1VXoBUlFFegfIttu7CiiigQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU2SNJomjlRXRhhlYZBFOooBOx514j8EyWu+70tWkg6tB1ZPp6j9frXGV7xXM+IPB1rq264tdtveHknHyufcevv/OuOrhr6wPpMvzvltTxP3/5/5nltFWr/AE670y5NvdwtFIOmehHqD3FVa4mraM+mjJSXNF3RLb3E1rOs1vK8UqnIZDgiu40Xx+MLDq6YPaeNev8AvL/h+VcFRVwqSg9DmxWCo4mNqi+fU7HXPHdxdboNMDW8J4Mp++30/u/zrj2YuxZiSxOSSeTSUUpzlN3kXh8LSw8eWkrBRRVmw0+61K5W3tIWlkPp0A9SewqUr6I2lJRXNJ2RWAycDrXb+G/BLTbLzVkKx9UtzwW/3vQe1bnh7whbaRtuLnbcXnXdj5U/3R6+/wDKulrto4a2sz5jMM6cr08Pt3/y/wAxERY0VEUKqjAUDAApaKK7D5wKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAKt/p1pqdsYLyFZUPTPVT6g9q881zwRd2G6ew3XVuOdoH7xR9O/4flXptFZVKUam53YPMK2FfuPTt0PByMHB60V65rPhXTtY3SOnk3J/5bRjBP1Hf+dcHqng7VdOYskJuoR0eEZP4r1FcNTDzh5o+qwmbYfEaN8suz/zOfora03wrq2puNts0MXeSYFR+Hc/hXe6L4P0/SSssg+03I58yQcKfYdqVOhOfoVi80w+HVr3fZf1ocfoXgy81PbPd7rW1POSPncew7fU/rXo2naZaaVbCCzhWNO57sfUnvVuiu+nRjT23PlMZmNbFP33ZdugUUUVqcAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//2Q=="},nAKI:function(t,e){},nlP4:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"find"}},[s("div",{staticClass:"header"},[s("mt-navbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("mt-tab-item",{attrs:{id:"1"}},[s("span",{staticClass:"navbar-size"},[t._v("NBA")])]),t._v(" "),s("mt-tab-item",{attrs:{id:"2"}},[s("span",{staticClass:"navbar-size"},[t._v("新闻")])]),t._v(" "),s("mt-tab-item",{attrs:{id:"3"}},[s("span",{staticClass:"navbar-size"},[t._v("数据")])]),t._v(" "),s("mt-tab-item",{attrs:{id:"4"}},[s("span",{staticClass:"navbar-size"},[t._v("社区")])])],1)],1),t._v(" "),s("div",{staticClass:"router-view"},[s("keep-alive",[s("router-view")],1)],1)])},a=[],i={render:n,staticRenderFns:a};e.a=i},"qs/E":function(t,e,s){"use strict";var n=s("cLQA"),a=s.n(n);a.a.mock("https://www.nbaNews/find/nba/001",{reason:"查询成功",status:"200",result:{title:"NBA体育新闻",titleList:[{status:"已结束",player1:"湖人",player1score:"132",player2:"太阳",player2score:"130",url:"https://m.hupu.com/nba/game/recap_153061.html"},{status:"已结束",player1:"勇士",player1score:"128",player2:"鹈鹕",player2score:"120",url:"https://m.hupu.com/nba/game/recap_153060.html"},{status:"已结束",player1:"国王",player1score:"93",player2:"小牛",player2score:"88",url:"https://m.hupu.com/nba/game/recap_153059.html"}],contentList:[{content:"[赛后]湖人132：130太阳，鲍尔29+11+9，英格拉姆25分，布克25+11+8",answer:"25亮823回复",url:"https://m.hupu.com/bbs/20544221.html"},{content:"[赛后]骑士116-97雄鹿，詹姆斯24+6+8，字母哥34+8+8",answer:"25亮498回复",url:"https://m.hupu.com/bbs/20542881.html"},{content:"英格拉姆25分创个人生涯单场得分新高",answer:"6亮238回复",url:"https://m.hupu.com/bbs/20543877.html"},{content:"杜兰特6次盖帽追平个人生涯单场盖帽纪录",answer:"46回复",url:"https://m.hupu.com/bbs/20543910.html"},{content:"詹姆斯赞阿德托昆博：他很棒，他非常棒，非常棒",answer:"1亮26回复",url:"https://m.hupu.com/bbs/20543541.html"},{content:"鞋掉了！杜兰特一只鞋一回合连帽两次",answer:"2亮35回复",url:"https://m.hupu.com/bbs/20543511.html"},{content:"罗斯谈受伤：我是唯一这样被犯规都不吹恶犯的人",answer:"6亮71回复",url:"https://m.hupu.com/bbs/20543429.html"},{content:"韦德跟罗斯有同感：我已7赛季没得到这样的哨了",answer:"2亮29回复",url:"https://m.hupu.com/bbs/20543667.html"},{content:"贾马尔-克劳福德第四节独得17分",answer:"1亮22回复",url:"https://m.hupu.com/bbs/20543403.html"},{content:"[赛后]勇士128：120鹈鹕，汤普森31分，库里28+7，浓眉35+17，考辛斯35+14 ",answer:"25亮636回复",url:"https://m.hupu.com/bbs/20543971.html"},{content:"[赛后]凯尔特人102-92胜76人，欧文21+6+4，西蒙斯11+11+5",answer:"25亮440回复",url:"https://m.hupu.com/bbs/20542923.html"},{content:"克劳福德：最后那个三分出手我没看到篮筐",answer:"23回复",url:"https://m.hupu.com/bbs/20543739.html"},{content:"保罗：在快船时我的球权太多了，厌倦了一直控球",answer:"77回复",url:"https://m.hupu.com/bbs/20543211.html"},{content:"魔术师：詹姆斯年纪越大，也在变得越好",answer:"2亮23回复",url:"https://m.hupu.com/bbs/20543013.html"},{content:"波波谈怀特：替补席上的一个位置可能会被他磨光",answer:"4亮43回复",url:"https://m.hupu.com/bbs/20542794.html"},{content:"沃尔：我认为自己是联盟历史上盖帽最强的控卫",answer:"23回复",url:"https://m.hupu.com/bbs/20544038.html"},{content:"德帅谈保罗伤势：只是撞了一下，不是撕裂什么的",answer:"2亮21回复",url:"https://m.hupu.com/bbs/20542764.html"},{content:"西南交大新生大学篮球赛单场狂揽97分",answer:"4亮212回复",url:"https://m.hupu.com/bbs/20538496.html"},{content:"苏群：姚明已将上海队大部分股权出售给久事集团",answer:"2亮51回复",url:"https://m.hupu.com/bbs/20538803.html"},{content:"两周5赛变7赛，易建联：战士们注意预防伤病",answer:"3亮23回复",url:"https://m.hupu.com/bbs/20537958.html"}]}}),a.a.mock("https://www.nbaNews/find/news/002",{reason:"查询成功",status:"200",result:{title:"NBA体育新闻",newsList:[{time:"7分钟前",author:"Twitter",content:"盖尔-加朵现场观看湖人对阵快船的比赛",pic:"./static/news2.jpg",url:"https://m.hupu.com/nba/news/2214845.html"},{time:"9分钟前",author:"Instagram",content:"卡隆-巴特勒：现在雷霆的问题只在于他们的阵容深度了",pic:"./static/news3.jpg",url:"https://m.hupu.com/nba/news/2214844.html"},{time:"11分钟前",author:"Instagram",content:"小乔丹成为首位为快船效力达到10个赛季的球员",pic:"./static/news4.jpg",url:"https://m.hupu.com/nba/news/2214843.html"},{time:"13分钟前",author:"Twitter",content:"坎特：和亚当斯对位很怪，他知道我所有脚步",pic:"./static/news5.png",url:"https://m.hupu.com/nba/news/2214842.html"},{time:"17分钟前",author:"Twitter",content:"伊巴卡：新赛季以一场胜利开始的感觉棒极了",pic:"./static/news6.jpg",url:"https://m.hupu.com/nba/news/2214841.html"},{time:"18分钟前",author:"Instagram",content:"快船官方发布贝弗利的赛场照：防守一阵",pic:"./static/news7.jpg",url:"https://m.hupu.com/nba/news/2214840.html"},{time:"19分钟前",author:"Twitter",content:"安东尼：为波尔津吉斯的表现感到高兴",pic:"./static/news8.jpg",url:"https://m.hupu.com/nba/news/2214839.html"},{time:"23分钟前",author:"Twitter",content:"快船官方晒图：格里芬隔人暴扣",pic:"./static/news9.jpg",url:"https://m.hupu.com/nba/news/2214836.html"},{time:"32分钟前",author:"克利夫兰老实人报",content:"泰伦-卢：阿德托昆博是希腊怪物，在进攻上很像勒布朗",pic:"./static/news10.jpg",url:"https://m.hupu.com/nba/news/2214835.html"},{time:"37分钟前",author:"Basketball-Reference",content:"高效！小乔丹半场抢下16个篮板",pic:"./static/news11.jpg",url:"https://m.hupu.com/nba/news/2214832.html"},{time:"44分钟前",author:"WOAI-TV",content:"邦纳为前马刺队友量身选择最合适的三明治",pic:"./static/news12.jpg",url:"https://m.hupu.com/nba/news/2214831.html"},{time:"47分钟前",author:"Instagram",content:"阿夫里内斯庆祝赛季开门红：精彩的团队表现！",pic:"./static/news13.png",url:"https://m.hupu.com/nba/news/2214828.html"},{time:"55分钟前",author:"Sports Day",content:"里克-卡莱尔：诺埃尔做了很多正确的事情",pic:"./static/news14.jpg",url:"https://m.hupu.com/nba/news/2214827.html"},{time:"57分钟前",author:"Sports Day",content:"德罗赞和Nike达成了一份多年续约合同",pic:"./static/news15.png",url:"https://m.hupu.com/nba/news/2214825.html"},{time:"1小时前",author:"Twitter",content:"比斯利：脚踝很疼，但没有结构性损伤",pic:"./static/news16.jpg",url:"https://m.hupu.com/nba/news/2214824.html"},{time:"1小时前",author:"Instagram",content:"CJ-迈尔斯：因一直可以做自己所爱的事而心怀感激",pic:"./static/news17.jpg",url:"https://m.hupu.com/nba/news/2214823.html"},{time:"1小时前",author:"Instagram",content:"内马尔与科比出席活动，科比命中超远三分",pic:"./static/news18.jpg",url:"https://m.hupu.com/nba/news/2214822.html"},{time:"1小时前",author:"沃斯堡明星电讯报",content:"诺埃尔：这里的氛围感觉很特别",pic:"./static/news19.png",url:"https://m.hupu.com/nba/news/2214820.html"},{time:"1小时前",author:"Twitter",content:"乔治：我们不在意数据，很享受合作的过程",pic:"./static/news20.jpg",url:"https://m.hupu.com/nba/news/2214818.html"},{time:"1小时前",author:"Instagram",content:"威斯布鲁克收获三双，媒体发图致意",pic:"./static/news21.jpg",url:"https://m.hupu.com/nba/news/2214817.html"}]}}),a.a.mock("https://www.nbaNews/find/datas/003",{reason:"查询成功",status:"200",result:{title:"NBA体育新闻",eastList:[{num:"1",name:"老鹰",win:"1",false:"0",value:"0.0",winner:"100.0%",status:"1连胜",url:"https://m.hupu.com/nba/teams/hawks/players"},{num:"2",name:"猛龙",win:"1",false:"0",value:"0.0",winner:"100.0%",status:"1连胜",url:"https://m.hupu.com/nba/teams/raptors/players"},{num:"3",name:"活塞",win:"1",false:"0",value:"0.0",winner:"100.0%",status:"1连胜",url:"https://m.hupu.com/nba/teams/pistons/players"},{num:"4",name:"步行者",win:"1",false:"0",value:"0.0",winner:"100.0%",status:"1连胜",url:"https://m.hupu.com/nba/teams/pacers/players"},{num:"5",name:"雄鹿",win:"1",false:"0",value:"0.0",winner:"100.0%",status:"1连胜",url:"https://m.hupu.com/nba/teams/bucks/players"},{num:"6",name:"魔术",win:"1",false:"0",value:"0.0",winner:"100.0%",status:"1连胜",url:"https://m.hupu.com/nba/teams/magic/players"},{num:"7",name:"奇才",win:"1",false:"0",value:"0.0",winner:"100.0%",status:"1连胜",url:"https://m.hupu.com/nba/teams/wizards/players"},{num:"8",name:"骑士",win:"1",false:"0",value:"0.0",winner:"100.0%",status:"1连胜",url:"https://m.hupu.com/nba/teams/cavaliers/players"},{num:"9",name:"76人",win:"0",false:"1",value:"1.0",winner:"0.0%",status:"1连败",url:"https://m.hupu.com/nba/teams/76ers/players"},{num:"10",name:"热火",win:"0",false:"1",value:"1.0",winner:"0.0%",status:"1连败",url:"https://m.hupu.com/nba/teams/heat/players"},{num:"11",name:"蓝网",win:"0",false:"1",value:"1.0",winner:"0.0%",status:"1连败",url:"https://m.hupu.com/nba/teams/nets/players"},{num:"12",name:"黄蜂",win:"0",false:"1",value:"1.0",winner:"0.0%",status:"1连败",url:"https://m.hupu.com/nba/teams/hornets/players"},{num:"13",name:"公牛",win:"0",false:"1",value:"1.0",winner:"0.0%",status:"1连败",url:"https://m.hupu.com/nba/teams/bulls/players"},{num:"14",name:"尼克斯",win:"0",false:"1",value:"1.0",winner:"0.0%",status:"1连败",url:"https://m.hupu.com/nba/teams/knicks/players"},{num:"15",name:"凯尔特人",win:"0",false:"2",value:"1.5",winner:"0.0%",status:"2连败",url:"https://m.hupu.com/nba/teams/celtics/players"}],westList:[{num:"1",name:"火箭",win:"2",false:"0",value:"0.0",winner:"100.0%",status:"2连胜",url:"https://m.hupu.com/nba/teams/rockets/players"},{num:"2",name:"雷霆",win:"1",false:"0",value:"0.5",winner:"100.0%",status:"1连胜",url:"https://m.hupu.com/nba/teams/thunder/players"},{num:"3",name:"开拓者",win:"1",false:"0",value:"0.5",winner:"100.0%",status:"1连胜",url:"https://m.hupu.com/nba/teams/blazers/players"},{num:"4",name:"快船",win:"1",false:"0",value:"0.5",winner:"100.0%",status:"1连胜",url:"https://m.hupu.com/nba/teams/clippers/players"},{num:"5",name:"灰熊",win:"1",false:"0",value:"0.5",winner:"100.0%",status:"1连胜",url:"https://m.hupu.com/nba/teams/grizzlies/players"},{num:"6",name:"爵士",win:"1",false:"0",value:"0.5",winner:"100.0%",status:"1连胜",url:"https://m.hupu.com/nba/teams/jazz/players"},{num:"7",name:"马刺",win:"1",false:"0",value:"0.5",winner:"100.0%",status:"1连胜",url:"https://m.hupu.com/nba/teams/spurs/players"},{num:"8",name:"勇士",win:"0",false:"1",value:"1.5",winner:"0.0%",status:"1连败",url:"https://m.hupu.com/nba/teams/warriors/players"},{num:"9",name:"国王",win:"0",false:"1",value:"1.5",winner:"0.0%",status:"1连败",url:"https://m.hupu.com/nba/teams/kings/players"},{num:"10",name:"小牛",win:"0",false:"1",value:"1.5",winner:"0.0%",status:"1连败",url:"https://m.hupu.com/nba/teams/mavericks/players"},{num:"11",name:"森林狼",win:"0",false:"1",value:"1.5",winner:"0.0%",status:"1连败",url:"https://m.hupu.com/nba/teams/timberwolves/players"},{num:"12",name:"掘金",win:"0",false:"1",value:"1.5",winner:"0.0%",status:"1连败",url:"https://m.hupu.com/nba/teams/nuggets/players"},{num:"13",name:"鹈鹕",win:"0",false:"1",value:"1.5",winner:"0.0%",status:"1连败",url:"https://m.hupu.com/nba/teams/pelicans/players"},{num:"14",name:"湖人",win:"0",false:"1",value:"1.5",winner:"0.0%",status:"1连败",url:"https://m.hupu.com/nba/teams/lakers/players"},{num:"15",name:"太阳",win:"0",false:"1",value:"1.5",winner:"0.0%",status:"1连败",url:"https://m.hupu.com/nba/teams/suns/players"}]}}),a.a.mock("https://www.nbaNews/find/com/004",{reason:"查询成功",status:"200",result:{title:"NBA新闻社区",hot:[{title:"步行街",tie:"34282帖",url:"http://m.yhd.com/?tracker_u=10235947855"},{title:"湿乎乎的话题",tie:"25258帖",url:"https://m.hupu.com/bbs/1048"},{title:"足球话题区",tie:"3138帖",url:"https://m.hupu.com/bbs/1389"},{title:"王者荣耀",tie:"4024帖",url:"https://m.hupu.com/bbs/4657"},{title:"英雄联盟",tie:"9754帖",url:"https://m.hupu.com/bbs/3441"},{title:"影视区",tie:"2618帖",url:"http://m.bilibili.com/index.html"}],NBAmain:[{title:"湿乎乎的话题",tie:"27545帖",url:"https://m.hupu.com/bbs/1048"},{title:"篮球场",tie:"360帖",url:"https://m.hupu.com/bbs/130"},{title:"十万俱乐部",tie:"395帖",url:"https://m.hupu.com/bbs/3480"},{title:"路人王专区",tie:"355帖",url:"https://m.hupu.com/bbs/4680"},{title:"路人王动态",tie:"16帖",url:"https://m.hupu.com/bbs/4817"},{title:"每日范特西",tie:"7帖",url:"https://m.hupu.com/bbs/4686"}],NBAteam:[{title:"火箭专区",tie:"4326帖",url:"https://m.hupu.com/bbs/44"},{title:"骑士专区",tie:"5086帖",url:"https://m.hupu.com/bbs/85"},{title:"勇士专区",tie:"3165帖",url:"https://m.hupu.com/bbs/102"},{title:"湖人专区",tie:"8663帖",url:"https://m.hupu.com/bbs/81"},{title:"马刺专区",tie:"1077帖",url:"https://m.hupu.com/bbs/105"},{title:"凯尔特人区",tie:"2476帖",url:"https://m.hupu.com/bbs/82"},{title:"雷霆专区",tie:"768帖",url:"https://m.hupu.com/bbs/108"},{title:"快船专区",tie:"326帖",url:"https://m.hupu.com/bbs/127"},{title:"尼克斯专区",tie:"54帖",url:"https://m.hupu.com/bbs/92"},{title:"公牛专区",tie:"31帖",url:"https://m.hupu.com/bbs/68"},{title:"森林狼专区",tie:"2236帖",url:"https://m.hupu.com/bbs/76"},{title:"小牛专区",tie:"556帖",url:"https://m.hupu.com/bbs/80"},{title:"篮网专区",tie:"884帖",url:"https://m.hupu.com/bbs/84"},{title:"76人专区",tie:"591帖",url:"https://m.hupu.com/bbs/124"},{title:"步行者专区",tie:"70帖",url:"https://m.hupu.com/bbs/74"},{title:"开拓者专区",tie:"252帖",url:"https://m.hupu.com/bbs/96"},{title:"热火专区",tie:"39帖",url:"https://m.hupu.com/bbs/77"},{title:"奇才专区",tie:"329帖",url:"https://m.hupu.com/bbs/86"},{title:"爵士专区",tie:"441帖",url:"https://m.hupu.com/bbs/70"},{title:"灰熊专区",tie:"45帖",url:"https://m.hupu.com/bbs/128"},{title:"太阳专区",tie:"485帖",url:"https://m.hupu.com/bbs/71"},{title:"国王专区",tie:"256帖",url:"https://m.hupu.com/bbs/79"},{title:"鹈鹕专区",tie:"442帖",url:"https://m.hupu.com/bbs/89"},{title:"雄鹿专区",tie:"397帖",url:"https://m.hupu.com/bbs/110"},{title:"猛龙专区",tie:"15帖",url:"https://m.hupu.com/bbs/90"},{title:"掘金专区",tie:"42帖",url:"https://m.hupu.com/bbs/72"},{title:"老鹰专区",tie:"26帖",url:"https://m.hupu.com/bbs/126"},{title:"活塞专区",tie:"260帖",url:"https://m.hupu.com/bbs/87"},{title:"魔术专区",tie:"136帖",url:"https://m.hupu.com/bbs/88"},{title:"黄蜂专区",tie:"155帖",url:"https://m.hupu.com/bbs/125"}]}})},r4JW:function(t,e,s){"use strict";e.a={data:function(){return{}},computed:{comVal:function(){return this.$store.state.comVal.data.result}}}},tGse:function(t,e,s){t.exports=s.p+"static/img/1.360ddde.jpg"},wqTG:function(t,e,s){"use strict";function n(t){s("DwvO")}var a=s("9nGR"),i=s("9RSU"),o=s("46Yf"),l=n,r=o(a.a,i.a,!1,l,"data-v-bcf9a6c2",null);e.a=r.exports},zcwo:function(t,e,s){"use strict";function n(t){s("KYgu")}var a=s("7klN"),i=s("ixeh"),o=s("46Yf"),l=n,r=o(a.a,i.a,!1,l,"data-v-8329290e",null);e.a=r.exports}},["NHnr"]);
//# sourceMappingURL=app.7fa1c1496931da2a3009.js.map