(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"2ca2":function(e,t,a){"use strict";a("be93")},5360:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"q-pa-xs"},[a("div",{staticClass:"row"},[e._l(e.columns,(function(t,s){return a("div",{key:"col"+s,staticClass:"col"},e._l(Object.keys(t),(function(s,i){return a("div",{key:"row"+i,staticClass:"p-dewe"},[a("CardAuto",{attrs:{item:t[s],progressDone:e.fetching}})],1)})),0)})),a("div",{directives:[{name:"show",rawName:"v-show",value:0===e.items.length,expression:"items.length === 0"}],staticClass:"flex column text-center"},[a("div",{staticClass:"fixed-center"},[a("q-icon",{attrs:{name:"eva-archive-outline",size:"lg",color:"grey"}}),a("div",{staticClass:"text-grey"},[e._v("Data Kosong")])],1)])],2)])])},i=[],n=a("ded3"),l=a.n(n),r=(a("e6cf"),a("ddb0"),a("2f62")),c={name:"LelangTerbaru",components:{CardAuto:()=>Promise.all([a.e(0),a.e(43)]).then(a.bind(null,"f064"))},data(){return{fetching:!1,cols:2,items:[]}},created(){},mounted(){this.getLelang()},computed:l()(l()(l()({},Object(r["d"])("lelang",["all_data_lelang","all_lelang_almost"])),Object(r["c"])("users",["storage","loggedIn"])),{},{columns:function(){let e=[],t=Math.ceil(Object.keys(this.items).length/this.cols);for(let a=0;a<this.cols;a++)e.push(Object.entries(this.items).slice(a*t,a*t+t).map((e=>e[1])));return e}}),methods:l()(l()({},Object(r["b"])("lelang",["getLelangPublic","getLelangHampirUsai"])),{},{getLelang(){let e;this.fetching=!0,e="all"==this.$route.params.slug?"":this.$route.params.slug,"almost"===e&&this.getAlmost();let t={params:{per_page:12,sortby:"updated_at",sort:"DESC",q:e}};this.getLelangPublic(t).then((()=>{this.fetching=!1,this.items.push(...this.all_data_lelang)})).catch((()=>{this.fetching=!1,this.$q.notify({message:"Terjadi kesalahan jaringan. Tidak menerima data dari server"})}))},getAlmost(){let e={params:{per_page:12,sortby:"berakhir",sort:"ASC",q:""}};this.getLelangHampirUsai(e).then((()=>{this.fetching=!1,this.items.push(...this.all_lelang_almost)})).catch((()=>{this.fetching=!1,this.$q.notify({message:"Terjadi kesalahan jaringan. Tidak menerima data dari server"})}))}}),watch:{columns(e){console.log("column",e)}}},o=c,g=(a("2ca2"),a("2877")),h=a("9989"),m=a("0016"),u=a("eebe"),d=a.n(u),p=Object(g["a"])(o,s,i,!1,null,"a6de4f64",null);t["default"]=p.exports;d()(p,"components",{QPage:h["a"],QIcon:m["a"]})},be93:function(e,t,a){}}]);