(function(e){function t(t){for(var o,n,r=t[0],s=t[1],c=t[2],d=0,u=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(t);while(u.length)u.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],o=!0,n=1;n<a.length;n++){var r=a[n];0!==i[r]&&(o=!1)}o&&(l.splice(t--,1),e=s(s.s=a[0]))}return e}var o={},n={10:0},i={10:0},l=[];function r(e){return s.p+"js/"+({2:"404 page",3:"Detail page",4:"Test page",5:"Video Player",6:"activasi-pembayaran",7:"add-foto-lelang",8:"add-lelang",9:"add-video-lelang",11:"auth layout",12:"chat",13:"details-transaksi",14:"draft-jadi",15:"edit-profile",16:"halaman-camera-foto",17:"halaman-camera-video",18:"index",19:"index-lelang",20:"index-profile",21:"index-transaksi",22:"login",23:"main layout",24:"notifications",25:"page-activasi",26:"page-deposit",27:"register",28:"social",29:"tambah-deposit",30:"upload video"}[e]||e)+"."+{1:"32ca04ad",2:"1a798c61",3:"054b7dec",4:"ffb4c1b4",5:"9d31dc09",6:"842c3506",7:"8f39cfcf",8:"556561c9",9:"5d9e1f48",11:"debe56cf",12:"8839ae34",13:"7fbfb191",14:"7187a957",15:"39ab9ada",16:"0fbba4c4",17:"659059d9",18:"1119e18b",19:"f11778e2",20:"366abbfc",21:"fd5eaba3",22:"10ae5d18",23:"1a893951",24:"a135f24d",25:"6941aaea",26:"e6422ed1",27:"805f4077",28:"cc76e917",29:"9d818ab2",30:"d277d7b2",31:"1eb61fe5",32:"3c5179fc",33:"85cf78ee",34:"50703d26",35:"6c0b269c",36:"f4d87c96",37:"1a11da05",38:"fa45f44f"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={3:1,4:1,6:1,8:1,12:1,14:1,16:1,17:1,18:1,19:1,22:1,23:1,25:1,30:1,31:1,32:1,33:1,34:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var o="css/"+({2:"404 page",3:"Detail page",4:"Test page",5:"Video Player",6:"activasi-pembayaran",7:"add-foto-lelang",8:"add-lelang",9:"add-video-lelang",11:"auth layout",12:"chat",13:"details-transaksi",14:"draft-jadi",15:"edit-profile",16:"halaman-camera-foto",17:"halaman-camera-video",18:"index",19:"index-lelang",20:"index-profile",21:"index-transaksi",22:"login",23:"main layout",24:"notifications",25:"page-activasi",26:"page-deposit",27:"register",28:"social",29:"tambah-deposit",30:"upload video"}[e]||e)+"."+{1:"31d6cfe0",2:"31d6cfe0",3:"0e433876",4:"9369702f",5:"31d6cfe0",6:"0e433876",7:"31d6cfe0",8:"5a1c0bef",9:"31d6cfe0",11:"31d6cfe0",12:"34939c2d",13:"31d6cfe0",14:"0e433876",15:"31d6cfe0",16:"0e433876",17:"0e433876",18:"eeca9866",19:"7e5a0596",20:"31d6cfe0",21:"31d6cfe0",22:"5d1de289",23:"8f2a1cfd",24:"31d6cfe0",25:"47074dd0",26:"31d6cfe0",27:"31d6cfe0",28:"31d6cfe0",29:"31d6cfe0",30:"0e433876",31:"992903b4",32:"ad232810",33:"5f0f9348",34:"675d1373",35:"31d6cfe0",36:"31d6cfe0",37:"31d6cfe0",38:"31d6cfe0"}[e]+".css",i=s.p+o,l=document.getElementsByTagName("link"),r=0;r<l.length;r++){var c=l[r],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===o||d===i))return t()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){c=u[r],d=c.getAttribute("data-href");if(d===o||d===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||i,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=o,delete n[e],m.parentNode.removeChild(m),a(l)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){n[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var l=new Promise((function(t,a){o=i[e]=[t,a]}));t.push(o[2]=l);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=r(e);var u=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(m);var a=i[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",u.name="ChunkLoadError",u.type=o,u.request=n,a[1](u)}i[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var m=d;l.push([0,0]),a()})({0:function(e,t,a){e.exports=a("2f39")},"02e0":function(e,t,a){"use strict";a.r(t);a("e6cf");var o=a("758b");const n=()=>({banks:[]}),i={setData(e,t){e.banks=t}},l={getData(e){return new Promise(((t,a)=>{o["c"]().get("/bank").then((a=>{e.commit("setData",a.data.data),t(a.data)})).catch((e=>{a(e)}))}))}},r={};t["default"]={namespaced:!0,state:n,mutations:i,actions:l,getters:r}},"03e3":function(e,t){},"1b28":function(e,t,a){"use strict";a.r(t);a("758b");const o=()=>({open:!1}),n={SET_OPEN(e,t){e.open=t}},i={},l={};t["default"]={namespaced:!0,state:o,mutations:n,actions:i,getters:l}},"1d2e":function(e,t,a){"use strict";a.d(t,"b",(function(){return l}));var o=a("260b");a("000b"),a("ea7b"),a("66ce"),a("741f"),a("03e3");const n={apiKey:"AIzaSyDcoAAlfu8Zm8YUov_Og4CKsQ03C7B61bE",authDomain:"lelang-koi-probolinggo.firebaseapp.com",projectId:"lelang-koi-probolinggo",storageBucket:"lelang-koi-probolinggo.appspot.com",messagingSenderId:"369915115614",appId:"1:369915115614:web:f8da1410ddb249f6fc1ccf",measurementId:"G-SPKHJXPRHD"},i=o["a"].initializeApp(n),l=(i.auth(),i.database(),i.messaging());l.usePublicVapidKey("BPjYiGQpZOYuQQcfTYv7HNwXAhBOt5S52qUjE2899IF4B2xbwlx1B3GknGkbnbVGmAKfw2FAUK7wUUVpubT_3Qw");l.requestPermission().then((()=>(console.log("permission granted"),l.getToken()))).then((e=>{console.log(e)})).catch((e=>{console.log("error ",e)}))},"2a74":function(e,t,a){"use strict";a.r(t);a("ddb0"),a("5319");var o=a("bba4"),n=a.n(o);const i=a("d307"),l={};i.keys().forEach((e=>{if("./index.js"===e)return;const t=n()(e.replace(/(\.\/|\.js)/g,""));l[t]=i(e).default})),t["default"]=l},"2f39":function(e,t,a){"use strict";a.r(t);a("e6cf"),a("ddb0"),a("5319"),a("573e"),a("43b9"),a("7d6e"),a("e54f"),a("4439"),a("4605"),a("f580"),a("5b2b"),a("8753"),a("2967"),a("7e67"),a("d770"),a("dd82"),a("922c"),a("d7fb"),a("a533"),a("c32e"),a("a151"),a("8bc7"),a("e80f"),a("5fec"),a("e42f"),a("57fc"),a("d67f"),a("880e"),a("1c10"),a("9482"),a("e797"),a("4848"),a("53d0"),a("63b1"),a("e9fd"),a("195c"),a("64e9"),a("33c5"),a("4f62"),a("0dbc"),a("7c38"),a("0756"),a("4953"),a("81db"),a("2e52"),a("22485"),a("7797"),a("12a1"),a("ce96"),a("70ca"),a("2318"),a("24bd"),a("8f27"),a("3064"),a("c9a2"),a("8767"),a("4a8e"),a("b828"),a("3c1c"),a("21cb"),a("c00e"),a("e4a8"),a("e4d3"),a("f4d9"),a("fffd"),a("f645"),a("639e"),a("34ee"),a("b794"),a("af24"),a("7c9c"),a("7bb2"),a("64f7"),a("c382"),a("053c"),a("c48f"),a("f5d1"),a("3cec"),a("c00ee"),a("d450"),a("ca07"),a("14e3"),a("9393"),a("9227"),a("1dba"),a("674a"),a("de26"),a("6721"),a("9cb5"),a("ed9b"),a("fc83"),a("98e5"),a("605a"),a("ba60"),a("df07"),a("7903"),a("e046"),a("58af"),a("7713"),a("0571"),a("3e27"),a("6837"),a("3fc9"),a("0693"),a("bf41"),a("985d"),a("31cd");var o=a("2b0e"),n=a("1f91"),i=a("42d2"),l=a("b05d"),r=a("2a19"),s=a("18d6"),c=a("436b"),d=a("f508");o["a"].use(l["a"],{config:{},lang:n["a"],iconSet:i["a"],plugins:{Notify:r["a"],LocalStorage:s["a"],Dialog:c["a"],Loading:d["a"]}});var u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"q-app"}},[a("router-view"),a("button",{staticStyle:{visibility:"hidden"},attrs:{id:"notif"},on:{click:e.notif}})],1)},m=[],f=a("ded3"),g=a.n(f),p=a("2f62"),h=a("1d2e");let b="",v="";h["b"].onMessage((e=>{console.log("in App",e),console.log("split",e.notification.body.split(" ")),b=e.notification.body.split(" "),v=e.notification.click_action.split("/");let t=document.getElementById("notif");console.log(t),t.click()}));var k={name:"App",computed:g()({},Object(p["c"])("messaging",["swToken"])),mounted(){this.$q.localStorage.getItem("token")&&this.$store.dispatch("users/getUser").then((e=>{const t=e.id;this.$store.dispatch("messaging/getMessageToken").then((e=>{const a={id:t,token:e};this.$store.dispatch("users/saveFirebaseToken",a)})),this.$store.dispatch("notifications/getNotificationByCurrentId")}))},methods:{notif(){if(console.log("notsplit",b),console.log("click",v),this.$store.dispatch("notifications/getNotificationByCurrentId"),"Bid"==b[0]&&"baru"==b[1]){let e={params:{per_page:10,sortby:"berakhir",sort:"ASC",q:""}};this.$store.dispatch("lelang/getLelangHampirUsai",e)}if("chat"==b[0]&&"baru"==b[1]){let e={params:{lelang_id:parseInt(v[v.length-1])}};this.$store.dispatch("messaging/getAllChat",e)}}}},w=k,P=a("2877"),y=Object(P["a"])(w,u,m,!1,null,null,null),_=y.exports,T=a("2a74");o["a"].use(p["a"]);var j=function(){const e=new p["a"].Store({modules:T["default"],strict:!1});return e},A=a("8c4f");const C=[{path:"/",component:()=>Promise.all([a.e(0),a.e(23)]).then(a.bind(null,"713b")),children:[{path:"",name:"index",component:()=>Promise.all([a.e(0),a.e(18)]).then(a.bind(null,"8b24"))},{path:"/detail/:slug",name:"detail",meta:{title:"Detail Lelang",backto:"index"},component:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"ebc0"))},{path:"/test",name:"test",component:()=>Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"c961"))},{path:"/video-player",name:"video_player",component:()=>Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"369b"))},{path:"/video",name:"video",meta:{title:"Upload Video"},component:()=>Promise.all([a.e(0),a.e(30)]).then(a.bind(null,"df3d"))},{path:"/forum/:slug",name:"forum",meta:{title:"Forum",backto:"detail"},component:()=>Promise.all([a.e(0),a.e(12)]).then(a.bind(null,"ab55"))}]},{path:"/profile",component:()=>Promise.all([a.e(0),a.e(23)]).then(a.bind(null,"713b")),children:[{path:"",name:"profile",component:()=>Promise.all([a.e(0),a.e(20)]).then(a.bind(null,"9603"))},{path:"/profile/edit_profile",name:"edit_profile",meta:{title:"Edit Profile",backto:"profile"},component:()=>Promise.all([a.e(0),a.e(15)]).then(a.bind(null,"8e25"))},{path:"/profile/activasi",name:"activasi",meta:{title:"Activasi",backto:"profile"},component:()=>Promise.all([a.e(0),a.e(25)]).then(a.bind(null,"92d8"))},{path:"/profile/page_foto/:slug",name:"page_foto",meta:{title:"Upload Foto",backto:"activasi"},component:()=>Promise.all([a.e(0),a.e(6)]).then(a.bind(null,"e33f"))},{path:"/profile/deposit",name:"deposit",meta:{title:"Deposit",backto:"profile"},component:()=>Promise.all([a.e(0),a.e(26)]).then(a.bind(null,"3e53"))},{path:"/profile/deposit/tambah",name:"tambah.deposit",meta:{title:"Tambah Deposit",backto:"deposit"},component:()=>Promise.all([a.e(0),a.e(29)]).then(a.bind(null,"c94e"))},{path:"/profile/lelang",name:"lelang",meta:{title:"Lelang",backto:"profile"},component:()=>Promise.all([a.e(0),a.e(19)]).then(a.bind(null,"7a0f"))},{path:"/profile/transaksi",name:"transaksi",meta:{title:"Transaksi",backto:"profile"},component:()=>Promise.all([a.e(0),a.e(21)]).then(a.bind(null,"becb"))},{path:"/profile/transaksi/details/:slug",name:"details.transaksi",meta:{title:"Details",backto:"transaksi"},component:()=>Promise.all([a.e(0),a.e(13)]).then(a.bind(null,"a833"))}]},{path:"/lelang",component:()=>Promise.all([a.e(0),a.e(23)]).then(a.bind(null,"22b0")),children:[{path:"/lelang/add/:slug",name:"add.lelang",meta:{title:"Lelang Baru",backto:"lelang"},component:()=>Promise.all([a.e(0),a.e(8)]).then(a.bind(null,"1dcc"))},{path:"/lelang/add/foto/:slug",name:"foto.lelang",meta:{title:"Tambahkan Foto",backto:"add.lelang"},component:()=>Promise.all([a.e(0),a.e(7)]).then(a.bind(null,"e584"))},{path:"/lelang/add/foto/camera/:slug",name:"foto.lelang.camera",meta:{title:"Camera",backto:"foto.lelang"},component:()=>Promise.all([a.e(0),a.e(16)]).then(a.bind(null,"f8b8"))},{path:"/lelang/add/video/:slug",name:"video.lelang",meta:{title:"Tambahkan Video",backto:"foto.lelang"},component:()=>Promise.all([a.e(0),a.e(9)]).then(a.bind(null,"82be"))},{path:"/lelang/add/video/camera/:slug",name:"video.lelang.camera",meta:{title:"Camera",backto:"video.lelang"},component:()=>Promise.all([a.e(0),a.e(17)]).then(a.bind(null,"d441"))},{path:"/lelang/draft_jadi/:slug",name:"lelang.draft",meta:{backto:"video.lelang",draft:!0},component:()=>Promise.all([a.e(0),a.e(14)]).then(a.bind(null,"bec0"))},{path:"/notifications",name:"notifications",meta:{title:"Notifikasi",draft:!0},component:()=>Promise.all([a.e(0),a.e(24)]).then(a.bind(null,"9e49"))}]},{path:"/auth",component:()=>Promise.all([a.e(0),a.e(11)]).then(a.bind(null,"16c9")),children:[{path:"",name:"login",component:()=>Promise.all([a.e(0),a.e(22)]).then(a.bind(null,"013f"))},{path:"/register",name:"register",component:()=>Promise.all([a.e(0),a.e(27)]).then(a.bind(null,"56b4"))},{path:"/auth/social-callback",name:"social",component:()=>a.e(28).then(a.bind(null,"0271"))}],meta:{visitor:!0}},{path:"*",component:()=>Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"e51e"))}];var D=C;o["a"].use(A["a"]);var U=function(){const e=new A["a"]({scrollBehavior:()=>({x:0,y:0}),routes:D,mode:"history",base:"/"});return e.beforeEach(((e,t,a)=>{const o=s["a"].getItem("token");e.matched.some((e=>e.meta.visitor))&&o?a({path:"/"}):a()})),e.onError((e=>{r["a"].create({caption:"Halaman tidak dapat dimuat, periksa kembali jaringan anda, kemudian refresh halaman",message:"Terjadi kesalahan",color:"red",position:"top-right"})})),e},x=async function(){const e="function"===typeof j?await j({Vue:o["a"]}):j,t="function"===typeof U?await U({Vue:o["a"],store:e}):U;e.$router=t;const a={router:t,store:e,render:e=>e(_),el:"#q-app"};return{app:a,store:e,router:t}},E=a("9483");Object(E["a"])("/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var S=a("758b"),L=a("c2f6");a("2b3d"),a("5cc6"),a("ace4"),a("a9ee");let O="https://archive.org/download/ffmpeg_asm/ffmpeg_asm.js";"localhost"==document.domain&&(O=location.href.replace(location.href.split("/").pop(),"")+"ffmpeg_asm.js");var N=a("d413"),I=({Vue:e})=>{e.use(N["b"])},B=a("a925"),V={failed:"Action failed",success:"Action was successful"},M={"en-us":V};o["a"].use(B["a"]);const $=new B["a"]({locale:"en-us",fallbackLocale:"en-us",messages:M});var F=({app:e})=>{e.i18n=$},R=a("03e3"),q=a.n(R);/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&a.e(0).then(a.t.bind(null,"a0db",7));const K="/";async function G(){const{app:e,store:t,router:a}=await x();let n=!1;const i=e=>{n=!0;const t=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=t},l=window.location.href.replace(window.location.origin,""),r=[S["default"],h["default"],L["default"],void 0,I,F,q.a];for(let c=0;!1===n&&c<r.length;c++)if("function"===typeof r[c])try{await r[c]({app:e,router:a,store:t,Vue:o["a"],ssrContext:null,redirect:i,urlPath:l,publicPath:K})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==n&&new o["a"](e)}G()},"31cd":function(e,t,a){},"465c":function(e,t,a){"use strict";a.r(t);a("e6cf");var o=a("1d2e"),n=a("758b");const i=()=>({cloudMessage:"",cloudMessages:[],token:"",allToken:[],chat:[]}),l={setToken(e,t){e.token=t},setChat(e,t){e.chat=[],e.chat=t},clearChat(e){e.chat=[]}},r={getMessageToken({commit:e}){return new Promise((t=>{o["b"].getToken().then((a=>{a?(console.log("Token ",a),e("setToken",a),t(a)):console.log("No registration token Available")})).catch((e=>{console.log("Error while retrivieng token ",e)}))}))},createChat(e,t){return new Promise(((a,o)=>{n["c"]().post("forum/add_message",t).then((t=>{console.log("set chat",t),e.commit("setChat",t.data.chat),a(t)})).catch((e=>{console.log(e),o(e)}))}))},getAllChat(e,t){return console.log("chat payload ",t),new Promise(((a,o)=>{n["c"]().get("forum/get_by_lelang",t).then((t=>{e.commit("setChat",t.data.chat),console.log("chat ",t)})).catch((e=>{console.log(e)}))}))},clearChat({commit:e}){e("clearChat")}},s={swToken(e){return e.token},chats(e){return e.chat}};t["default"]={namespaced:!0,state:i,mutations:l,actions:r,getters:s}},"5cdf":function(e,t,a){"use strict";a.r(t);a("e6cf");var o=a("758b");const n=()=>({video:{},all_lelang_by_id:[],all_lelang_almost:[],all_data_lelang:[]}),i={setVideo(e,t){e.video=t},setData(e,t){e.all_lelang_by_id=t},setDataAlmost(e,t){e.all_lelang_almost=t},setDataLelang(e,t){e.all_data_lelang=t}},l={getLelangHampirUsai(e,t){return new Promise(((a,n)=>{o["c"]().get("/lelang/get_all_params",t).then((t=>{let o=t.data.data.data.filter((e=>{let t=(new Date).getTime(),a=new Date(e.berakhir).getTime(),o=a-t;return o>0}));console.log("get_lelang_almost",t.data.data),e.commit("setDataAlmost",o),e.commit("setDataLelang",t.data.data.data),a(t.data.data)})).catch((e=>{console.log(e),n(e)}))}))},getLelangPublic(e,t){return new Promise(((a,n)=>{o["c"]().get("/public/get_all_params",t).then((t=>{let o=t.data.data.data.filter((e=>{let t=(new Date).getTime(),a=new Date(e.berakhir).getTime(),o=a-t;return o>0}));console.log("get_lelang_almost",t.data.data),e.commit("setDataAlmost",o),e.commit("setDataLelang",t.data.data.data),a(t.data.data)})).catch((e=>{console.log(e),n(e)}))}))},getLelangByUserId(e){return new Promise(((t,a)=>{o["c"]().get("/lelang/all_by").then((a=>{console.log("get_lelang_by_user",a.data.data),e.commit("setData",a.data.data),t(a.data.data)})).catch((e=>{console.log(e),a(e)}))}))},sendVideo(e,t){return console.log("video ",e.state.video),new Promise(((e,a)=>{o["d"]().post("/lelang/upload_video",t).then((t=>{console.log("upload_video",t),e(t)})).catch((e=>{console.log(e),a(e)}))}))},sendMessage(e,t){return console.log("kirim pesan"),new Promise((()=>{o["c"]().post("/prokc/notif",t).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}))},getClient(e,t){return console.log("get client"),new Promise((()=>{o["c"]().post("/prokc/sw-client",t).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}))}},r={};t["default"]={namespaced:!0,state:n,mutations:i,actions:l,getters:r}},"758b":function(e,t,a){"use strict";a.d(t,"f",(function(){return r})),a.d(t,"e",(function(){return s})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return m}));var o=a("2b0e"),n=a("bc3a"),i=a.n(n),l=a("18d6");function r(){const e="https://server.pro-kc.com/public";return e}function s(){const e="https://pro-kc.com/server/storage/app/public/";return e}function c(){return i.a.create({baseURL:r()+"/api",headers:{Authorization:"Bearer "+u()}})}function d(){return i.a.create({baseURL:r()+"/api",headers:{Authorization:"Bearer "+u(),"Content-Type":"multipart/form-data"}})}function u(){const e=l["a"].getAll().token;return e}function m(){l["a"].clear()}o["a"].prototype.$axios=i.a},"8ce5":function(e,t,a){"use strict";a.r(t);a("e6cf"),a("1d2e");var o=a("18d6"),n=a("758b"),i=a("2a19");const l=()=>({user:{},form:{},token:null===o["a"].getItem("token")?null:o["a"].getItem("token"),server:n["f"](),image:n["e"]()}),r={removeUser(e){e.user={},e.token=null},setUser(e,t){e.user=t},setFrom(e,t){e.form=t},setToken(e,t){e.token=t}},s={saveFirebaseToken(e,t){n["c"]().post("prokc/sw-token",t).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},login(e,t){return new Promise(((a,l)=>{n["c"]().post("/auth/login",t).then((t=>{i["a"].create({message:"Login success",color:"positive"}),console.log("login res",t),o["a"].set("token",t.data.token),e.commit("setToken",t.data.token),a(t)})).catch((e=>{i["a"].create({message:"Login Gagal, Email atau password Anda salah",color:"negative",position:"top"}),console.log("error ",e),l(e)}))}))},register(e,t){return new Promise(((a,l)=>{n["c"]().post("/auth/register",t).then((t=>{i["a"].create({message:"Register success",color:"positive"}),console.log("login res",t.data),o["a"].set("token",t.data.token),e.commit("setToken",t.data.token),a(t)})).catch((e=>{i["a"].create({message:"Login Gagal, Email atau password Anda salah",color:"negative",position:"top"}),console.log("error ",e),l(e)}))}))},googleLogin(e,t){o["a"].set("token",t),e.commit("setToken",t)},getUser(e){return new Promise(((t,a)=>{n["c"]().get("/me").then((a=>{console.log("user ",a.data.data),e.commit("setUser",a.data.data),e.commit("setUser",a.data.data),t(a.data.data)})).catch((e=>{i["a"].create({message:"failed to get user data",color:"negative",position:"top"}),a(e)}))}))},logout(e){return new Promise((t=>{n["c"]().get("/auth/logout").then((a=>{e.commit("removeUser"),n["b"](),i["a"].create({message:"Logged Out",icon:"eva-info-alert"}),t(a)}))}))},removeUser(e){return new Promise((()=>{n["c"]().get("auth/logout").then((t=>{n["b"](),e.commit("removeUser"),console.log("logout ",t)})).catch((e=>{console.log(e)}))}))},updateProfile(e,t){let a={provinsi:t.provinsi.label?t.provinsi.label:t.provinsi,email:t.email,name:t.name,notelp:t.notelp,nowhatsapp:t.nowhatsapp,alamat:t.alamat,kota:t.kota.label?t.kota.label:t.kota};return console.log("data ",a),new Promise(((o,i)=>{n["c"]().put(`/me/update/${t.id}`,a).then((t=>{console.log(t),e.dispatch("getUser"),o(t)})).catch((e=>{i(e)}))}))},uploadImage(e,t){return console.log("id ",t.id,"data ",t.data),new Promise(((a,o)=>{n["d"]().post(`/me/upload_image/${t.id}`,t.data).then((t=>{console.log(t),e.dispatch("getUser"),a(t)})).catch((e=>{console.log(e),o(e)}))}))}},c={user(e){return e.user},loggedIn(e){return null!==e.token},storage(e){return e.image}};t["default"]={namespaced:!0,state:l,mutations:r,actions:s,getters:c}},"9c27":function(e,t,a){"use strict";a.r(t);a("e6cf");var o=a("758b");const n=()=>({notifications:[]}),i={setNotifications(e,t){e.notifications=t}},l={addNotifications(e,t){return new Promise(((e,a)=>{o["c"]().post("notification/post_from_client",t).then((t=>{console.log(t),e(t)})).catch((e=>{console.log(e),a(e)}))}))},getNotifByUserId(e,t){return new Promise(((a,n)=>{o["c"]().get("notification/get_notif_by_id",t).then((t=>{e.commit("setNotifications",t.data.notifications.data),a(t)})).catch((e=>{n(e)}))}))},getNotificationByCurrentId(e){return new Promise(((t,a)=>{o["c"]().get("notification/get_notif_by_current_id").then((a=>{console.log("getNotificationByCurrentId",a),e.commit("setNotifications",a.data.notifications.data),t(a)})).catch((e=>{a(e)}))}))},markAsRead(e,t){return new Promise(((a,n)=>{o["c"]().post("notification/mark_as_read",t).then((t=>{e.commit("setNotifications",t.data.notifications.data),a(t)})).catch((e=>{n(e)}))}))}},r={notifications(e){return e.notifications}};t["default"]={namespaced:!0,state:n,mutations:i,actions:l,getters:r}},c2f6:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));a("5cc6"),a("ace4"),a("e6cf");var o=a("f508"),n=(a("cf57"),a("a403"),a("163c"));o["a"].setDefaults({spinner:n["a"],spinnerSize:"sm",spinnerColor:"white"});let i=function(e){let t=e.file,a=e.maxSize,o=new FileReader,n=new Image,i=document.createElement("canvas"),l=function(e){let t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]),a=e.split(",")[0].split(":")[1].split(";")[0],o=t.length,n=new Uint8Array(o);for(let r=0;r<o;r++)n[r]=t.charCodeAt(r);let i=new Blob([n],{type:a}),l=new File([i],"image.jpg",{type:a});return l},r=function(){let e=n.width,t=n.height;e>t?e>a&&(t*=a/e,e=a):t>a&&(e*=a/t,t=a),i.width=e,i.height=t,i.getContext("2d").drawImage(n,0,0,e,t);let o=i.toDataURL("image/jpeg");return l(o)};return new Promise((function(e,a){t.type.match(/image.*/)?(o.onload=function(t){n.onload=function(){return e(r())},n.src=t.target.result},o.readAsDataURL(t)):a(new Error("Not an image"))}))}},cf80:function(e,t,a){"use strict";a.r(t);a("e6cf"),a("1d2e");var o=a("758b");const n=()=>({video:[]}),i={setVideo(e,t){e.video=t}},l={getVideo(e){return new Promise(((t,a)=>{o["c"]().get("prokc/get-video").then((a=>{console.log(a),e.commit("setVideo",a.data.video),t(a)})).catch((e=>{console.log(e),a(e)}))}))},addVideo(e,t){return console.log("video ",e.state.video),new Promise(((e,a)=>{o["d"]().post("/prokc/convert-video",t).then((t=>{console.log(t),e(t)})).catch((e=>{console.log(e),a(e)}))}))},sendVideo(e,t){return console.log("video ",e.state.video),new Promise(((e,a)=>{o["d"]().post("/prokc/convert-video",t).then((t=>{console.log(t),e(t)})).catch((e=>{console.log(e),a(e)}))}))},convertVideo(e,t){return new Promise(((e,a)=>{o["d"]().post("/prokc/convert-video",t).then((t=>{console.log(t),e(t)})).catch((e=>{console.log(e),a(e)}))}))},convertOnly(e,t){return new Promise(((e,a)=>{o["d"]().post("/prokc/convert-only",t).then((t=>{console.log(t),e(t)})).catch((e=>{console.log(e),a(e)}))}))},sendMessage(e,t){return console.log("kirim pesan"),new Promise((()=>{o["c"]().post("/prokc/notif",t).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}))},getClient(e,t){return console.log("get client"),new Promise((()=>{o["c"]().post("/prokc/sw-client",t).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}))}},r={videos(e){return e.video}};t["default"]={namespaced:!0,state:n,mutations:i,actions:l,getters:r}},d2c6:function(e,t,a){"use strict";a.r(t);a("e6cf");var o=a("758b");const n=()=>({trans:[],transaction:null}),i={SET_TRANS(e,t){e.trans=t},setTransaction(e,t){e.transaction=t}},l={getAllTransWithParams(e,t){return new Promise(((a,n)=>{o["c"]().get("/transaction/get_all_params",t).then((t=>{let o=t.data.data;e.commit("SET_TRANS",o.data),a(o)})).catch((e=>{console.log(e),n(e)}))}))},getWhere(e,t){return new Promise(((a,n)=>{o["c"]().get("/transaction/get_where",t).then((t=>{let o=t.data;console.log("transaction get where",t.data),e.commit("setTransaction",o.data),a(o)})).catch((e=>{console.log(e),n(e)}))}))}},r={};t["default"]={namespaced:!0,state:n,mutations:i,actions:l,getters:r}},d307:function(e,t,a){var o={"./bank.js":"02e0","./buktitransfer.js":"f451","./database.js":"cf80","./index.js":"2a74","./lelang.js":"5cdf","./messaging.js":"465c","./notifications.js":"9c27","./popup.js":"1b28","./transaksi.js":"d2c6","./users.js":"8ce5"};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=i,e.exports=n,n.id="d307"},f451:function(e,t,a){"use strict";a.r(t);a("758b");const o=()=>({bukti:null,posts:{image:null,date:Date.now()}}),n={SET_BUKTI(e,t){e.bukti=t}},i={},l={};t["default"]={namespaced:!0,state:o,mutations:n,actions:i,getters:l}}});