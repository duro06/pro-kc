(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"316f":function(e,t,a){"use strict";a("7d01")},"7d01":function(e,t,a){},"8b24":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",[a("q-separator",{staticStyle:{height:"5px"}}),a("div",[a("q-list",{attrs:{id:"lelang-almost"}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:{name:"lelang_terbaru",params:{slug:"almost"}}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"eva-clock",color:"orange"}})],1),a("q-item-section",{staticClass:"text-bold text-h7"},[e._v("Lelang Akan Berakhir")]),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"eva-corner-up-right-outline"}})],1)],1)],1),a("ImageSlide",{attrs:{data:e.all_lelang_almost,progressDone:e.fetching}})],1),a("q-separator",{staticStyle:{height:"5px"}}),a("div",[a("q-list",{attrs:{id:"new-lelang"}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:{name:"lelang_terbaru",params:{slug:"all"}}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"eva-sun",color:"blue"}})],1),a("q-item-section",{staticClass:"text-bold text-h7"},[e._v("Lelang Terbaru")]),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"eva-corner-up-right-outline"}})],1)],1)],1),a("ImageSlide",{attrs:{data:e.all_data_lelang,progressDone:e.fetching}})],1),a("q-separator",{staticStyle:{height:"5px"}})],1)])},s=[],n=a("ded3"),l=a.n(n),r=(a("e6cf"),a("ddb0"),a("2f62")),c=a("b166"),m=a("590d"),d={name:"PageIndex",components:{CardList:()=>Promise.all([a.e(0),a.e(44)]).then(a.bind(null,"f5a8")),ImageSlide:()=>Promise.all([a.e(0),a.e(46)]).then(a.bind(null,"2306"))},data(){return{time:null,hari:null,datetime:null,datetime2:null,fetching:!1,slide:1}},created(){},mounted(){this.getDataAlmost(),this.getLelang()},beforeDestroy(){clearInterval(this.timer)},computed:l()(l()({},Object(r["d"])("lelang",["all_lelang_almost","all_data_lelang"])),Object(r["c"])("users",["loggedIn"])),methods:l()(l()({},Object(r["b"])("lelang",["getLelangHampirUsai","getLelangPublic","getLelangNew"])),{},{timerId(){this.timer=setInterval(this.updateTime,6e4)},updateTime(){var e=new Date;this.hari=Object(c["a"])(new Date(e),"MM-dd-yyyy"),this.time=Object(c["a"])(new Date(e),"KK:mm:ss"),this.datetime=Object(c["a"])(new Date(e),"yyyy-MM-dd HH:mm:ss");var t=Object(m["a"])(new Date(this.datetime),-5);this.datetime2=Object(c["a"])(new Date(t),"yyyy-MM-dd HH:mm:ss"),this.sendDate()},getLelang(){this.fetching=!0;let e=this.$route.params.slug;"all"===e&&(e="");let t={params:{per_page:12,sortby:"updated_at",sort:"DESC",q:e}};this.getLelangPublic(t).then((()=>{this.fetching=!1})).catch((()=>{this.fetching=!1,this.$q.notify({message:"Terjadi kesalahan jaringan. Tidak menerima data dari server"})}))},getDataAlmost(){this.fetching=!0;let e={params:{per_page:10,sortby:"berakhir",sort:"ASC",q:""}};this.getLelangHampirUsai(e).then((()=>{this.fetching=!1})).catch((()=>{this.fetching=!1,this.$q.notify({message:"Terjadi kesalahan jaringan. Tidak menerima data dari server"})}))},sendDate(){let e={params:{date1:this.datetime,date2:this.datetime2}};this.getLelangHampirUsai(e)}})},o=d,g=(a("316f"),a("2877")),h=a("9989"),p=a("eb85"),u=a("1c1c"),b=a("66e5"),f=a("4074"),v=a("0016"),q=a("714f"),y=a("eebe"),_=a.n(y),w=Object(g["a"])(o,i,s,!1,null,"d70e32e8",null);t["default"]=w.exports;_()(w,"components",{QPage:h["a"],QSeparator:p["a"],QList:u["a"],QItem:b["a"],QItemSection:f["a"],QIcon:v["a"]}),_()(w,"directives",{Ripple:q["a"]})}}]);