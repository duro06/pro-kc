(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41,42],{5541:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mboh"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.progressDone,expression:"progressDone"}]},[s("q-skeleton",{attrs:{width:"110px",height:"110px",square:""}}),s("q-card",{staticStyle:{"max-width":"110px"},attrs:{flat:""}},[s("q-card-section",[s("q-skeleton",{staticClass:"text-subtitle1",staticStyle:{"margin-top":"-15px","margin-left":"-10px"},attrs:{type:"text"}}),s("q-skeleton",{staticClass:"text-subtitle1",staticStyle:{"margin-top":"-10px","margin-left":"-10px"},attrs:{width:"50%",type:"text"}}),s("q-skeleton",{staticClass:"text-subtitle1 flex-end",staticStyle:{"margin-top":"-10px","margin-left":"-10px"},attrs:{width:"50%",type:"text"}})],1)],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.progressDone,expression:"!progressDone"}],on:{click:t.detail}},[s("q-img",{staticStyle:{width:"110px"},attrs:{src:t.storage+t.image.media,ratio:1}}),s("q-card",{staticStyle:{"margin-bottom":"0px"},attrs:{flat:"",bordered:""}},[s("q-card-section",{staticStyle:{padding:"5px"}},[s("div",{staticClass:"text-title"},[t._v(t._s(t._f("charLimit")(t.item.judul)))]),s("div",{staticClass:"text-title"},[t._v(t._s(t.item.user.name))]),s("div",{staticClass:"text-right"},[!t.ended&&t.days>0?s("div",{staticClass:"text-teal"},[s("q-icon",{staticClass:"q-mr-xs",staticStyle:{"font-size":"1.3em"},attrs:{name:"eva-clock-outline"}}),s("span",[t._v(t._s(t.days)+" hari "+t._s(t.hours)+" jam")])],1):t._e(),!t.ended&&t.days<=0&&t.hours>1?s("div",{staticClass:"text-blue"},[s("q-icon",{staticClass:"q-mr-xs",staticStyle:{"font-size":"1.3em"},attrs:{name:"eva-clock-outline"}}),s("span",[t._v(t._s(t.hours)+":"+t._s(t.minutes)+":"+t._s(t.seconds))])],1):t._e(),!t.ended&&t.days<=0&&t.hours<=1?s("div",{staticClass:"text-primary"},[s("q-icon",{staticClass:"q-mr-xs",staticStyle:{"font-size":"1.3em"},attrs:{name:"eva-clock-outline"}}),s("span",[t._v(t._s(t.hours)+":"+t._s(t.minutes)+":"+t._s(t.seconds))])],1):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:t.ended,expression:"ended"}],staticClass:"text-primary"},[s("q-icon",{staticClass:"q-mr-xs",staticStyle:{"font-size":"1.3em"},attrs:{name:"eva-clock-outline"}}),s("span",[t._v("berakhir")])],1),s("div",{class:t.ended?"text-primary":"text-teal"},[s("span",{staticClass:"text-bold"},[t._v(t._s(t._f("formatRp")(t.item.harga_pembuka+t.lelang)))])])])])],1)],1)])},i=[],l=s("ded3"),r=s.n(l),n=(s("5319"),s("13d5"),s("758b"),s("2f62")),o={props:{item:{type:Object,default:()=>{}},progressDone:{type:Boolean,default:!1}},data(){return{days:null,hours:null,minutes:null,seconds:null,dueDate:null,ended:!1}},filters:{charLimit(t){return t.length>=16?t.substr(0,14)+"..":t},formatRp(t){return"Rp "+Number(t).toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,"$1.")}},computed:r()(r()(r()(r()({},Object(n["d"])("lelang",["all_lelang_almost"])),Object(n["c"])("users",["storage","loggedIn"])),Object(n["c"])("hits",["hits"])),{},{image(){let t=[];this.item.media_lelang.map(((e,s)=>{t.push({media:this.item.media_lelang[s].image,status:this.item.media_lelang[s].status,video:!1})})),this.item.video_lelang.map(((e,s)=>{t.push({media:this.item.video_lelang[s].video,status:this.item.video_lelang[s].status,video:!0})}));let e=t.filter((t=>1===t.status));return e.length?e[0]:t[0]},lelang(){return this.item.bid.reduce(((t,e)=>t+e.nominal),0)}}),methods:r()(r()({},Object(n["b"])("hits",["storeHits"])),{},{detail(){if(this.loggedIn){let t={lelang_id:this.item.id,hit:this.hits};this.storeHits(t),this.$router.replace(this.$route.query.redirect||{name:"detail",params:{slug:this.item.id}},(()=>{}))}else this.$q.notify({message:"Anda belum Login"})},timerId(){this.dueDate=new Date(this.item.berakhir).getTime(),this.timer=setInterval(this.countdownTimer,1e3)},countdownTimer(){let t=(new Date).getTime(),e=this.dueDate-t;this.days=Math.floor(e/864e5),this.hours=Math.floor(e%864e5/36e5),this.minutes=Math.floor(e%36e5/6e4)<10?"0"+Math.floor(e%36e5/6e4):Math.floor(e%36e5/6e4),this.seconds=Math.floor(e%6e4/1e3)<10?"0"+Math.floor(e%6e4/1e3):Math.floor(e%6e4/1e3),e<0&&(clearInterval(this.timer),this.ended=!0)}}),mounted(){this.timerId()},beforeDestroy(){clearInterval(this.timer)},watch:{}},d=o,c=(s("c09f"),s("2877")),m=s("293e"),h=s("f09f"),u=s("a370"),p=s("068f"),g=s("0016"),f=s("eebe"),v=s.n(f),x=Object(c["a"])(d,a,i,!1,null,"46cc1f4a",null);e["default"]=x.exports;v()(x,"components",{QSkeleton:m["a"],QCard:h["a"],QCardSection:u["a"],QImg:p["a"],QIcon:g["a"]})},c09f:function(t,e,s){"use strict";s("d7ee")},d7ee:function(t,e,s){}}]);