(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"0668":function(a,t,s){},"92d8":function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("q-page",["pending"==a.status?s("div",{staticClass:"flex column flex-center min-height q-pa-lg"},[s("div",[s("q-icon",{attrs:{size:"4em",name:"eva-checkmark-square",color:"grey"}})],1),s("div",{staticClass:"text-grey q-mb-sm"},[a._v("Waiting...")]),s("div",{staticClass:"text-grey-9 q-pa-lg alert-primary"},[a._v("\n        Harap Menunggu validasi Pembayaran dari kami, Jika dalam waktu 1 x 24\n        jam Status kamu tidak berubah, harap menghubungi Customer Kami di\n        09667587577\n      ")]),s("div",{staticClass:"q-mt-xs"})]):"settlement"==a.status?s("div",{staticClass:"flex column flex-center min-height q-pa-lg"},[s("div",[s("q-icon",{attrs:{size:"4em",name:"eva-checkmark-square-2",color:"primary"}})],1),s("div",{staticClass:"text-primary q-mb-sm"},[a._v("Success")]),s("div",{staticClass:"text-grey-9 q-pa-lg alert-secondary"},[a._v("\n        Terimakasih, Kamu telah menjadi Anggota Bidder di Komunitas Kami\n      ")]),s("div",{staticClass:"q-mt-xs"})]):s("div",{staticClass:"halaman-transfer"},[s("q-card",{staticClass:"alert-primary",attrs:{flat:"",square:""}},[s("q-card-section",[s("div",{staticClass:"row items-center no-wrap"},[s("q-icon",{attrs:{left:"",size:"2.5em",name:"eva-info",color:"primary"}}),s("div",{staticClass:"col"},[s("div",{staticClass:"text-h6 text-primary"},[a._v("Informasi")])])],1)]),s("q-card-section",{staticStyle:{"margin-top":"-20px"}},[s("div",{staticClass:"text-primary"},[a._v("\n            Untuk Menjadi "),s("b",[a._v("Bidder")]),a._v(" (Anggota Lelang) Anda Harus Membayar\n            Biaya Keanggotaan Sebesar Rp.100.000,- (Bayar sekali seumur hidup)\n          ")])]),s("q-separator")],1),s("div",{staticClass:"q-pa-md"},[s("div",[a._v("\n          Lakukan Transfer Ke salah satu Rekening Berikut, Kemudian\n          Konfirmasikan Pembayaran pada tombol Konfirmasi di Bawah\n        ")])]),s("div",{staticClass:"q-my-md"},[s("q-list",{attrs:{bordered:"",padding:"",separator:""}},a._l(a.banks,(function(t,e){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e,attrs:{tag:"label"}},[s("q-item-section",{attrs:{avatar:"",top:""}},[s("q-radio",{attrs:{val:t.id,color:"cyan"},model:{value:a.bank,callback:function(t){a.bank=t},expression:"bank"}})],1),s("q-item-section",[s("q-item-label",[s("b",[a._v(a._s(t.name)+" ")]),a._v(" --\n                "+a._s(t.description))]),s("q-item-label",[s("div",{staticClass:"q-mb-xs"},[a._v("\n                  No Rekening:\n                  "),s("span",{staticClass:"text-black"},[s("b",[a._v(a._s(t.acc))])])]),s("div",[a._v("\n                  Atas Nama:\n                  "),s("span",{staticClass:"text-black"},[s("b",[a._v(a._s(t.an))])])])])],1)],1)})),1)],1),s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"row"},[s("div",{staticClass:"q-mr-lg q-mt-md"},[a._v("Tanggal Transfer")]),s("div",{staticClass:"col"},[s("q-input",{attrs:{filled:"",mask:"date",rules:["date"]},scopedSlots:a._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"primary"}},[s("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-date",{model:{value:a.tanggal,callback:function(t){a.tanggal=t},expression:"tanggal"}},[s("div",{staticClass:"row items-center justify-end"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:a.tanggal,callback:function(t){a.tanggal=t},expression:"tanggal"}})],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"q-mr-lg"},[a._v("Nominal Transfer")]),s("div",[s("b",[a._v("Rp. 100.000,-")])])])]),s("div",{staticClass:"q-my-lg"},[s("q-separator",{attrs:{color:"grey-5"}})],1),s("div",{staticClass:"q-ma-lg q-mb-lg"},[s("div",{directives:[{name:"show",rawName:"v-show",value:null==a.status,expression:"status == null"}],staticClass:"q-mt-lg"},[s("q-btn",{staticClass:"full-width",attrs:{label:"Lanjut",type:"submit",color:"dark"},on:{click:a.lanjut}})],1)])],1),s("q-dialog",{attrs:{seamless:"",position:"bottom"},model:{value:a.seamless,callback:function(t){a.seamless=t},expression:"seamless"}},[s("q-card",{staticClass:"full-width"},[s("q-linear-progress",{attrs:{value:1,color:"primary"}}),s("q-card-section",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"q-mx-lg text-center"},[s("q-btn",{staticClass:"glossy",attrs:{round:"",color:"primary",icon:"photo_camera",to:{name:"page_foto",params:{slug:"camera"}}}}),s("div",{staticClass:"text-caption"},[a._v("Camera")])],1),s("div",{staticClass:"text-center"},[s("q-input",{ref:"myFileInput",staticStyle:{display:"none"},attrs:{type:"file",label:"Standard",accept:"image/*"},on:{input:a.captureImageFallback},model:{value:a.myImage,callback:function(t){a.myImage=t},expression:"myImage"}}),s("q-btn",{staticClass:"glossy",attrs:{round:"",color:"secondary",icon:"perm_media"},on:{click:a.getFile}}),s("div",{staticClass:"text-caption"},[a._v("Gallery")])],1),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",icon:"close"}})],1)],1)],1)],1)},i=[],n=s("ded3"),l=s.n(n),r=(s("e6cf"),s("bd4c")),o=s("2f62"),c=s("758b"),m={name:"PageActivasi",data(){return{tanggal:"",bank:1,myImage:null,seamless:!1,popupImage:!1,status:null,transaction:null}},created(){this.getHariIni(),this.getData(),this.getDataActivasi()},computed:l()(l()(l()({},Object(o["d"])("bank",["banks"])),Object(o["d"])("buktitransfer",["bukti"])),{},{urlPath(){return c["e"]()}}),methods:l()(l()({},Object(o["b"])("bank",["getData"])),{},{async konfirmasiPembayaran(){null!=this.bukti&&""!=this.bukti||this.$q.notify({message:"Upload bukti transfer terlebih dahulu !!!",icon:"eva-info-triangle"});const a=new FormData;a.append("bank_id",this.bank),a.append("tanggal",this.tanggal),a.append("jenis","pembayaran_activasi"),a.append("nominal",1e5),this.$q.loading.show();try{const t=await c["c"]().post("/transaction/konfirmasi",a);console.log(t),this.$q.notify({message:"Data Berhasil disimpan",icon:"eva-info-circle"}),this.getDataActivasi(),this.$q.loading.hide()}catch(t){this.$q.notify({message:"Data Berhasil disimpan",icon:"eva-info-triangle"}),this.$q.loading.hide()}},coba(){console.log(this.bank)},getHariIni(){let a=new Date;this.tanggal=r["b"].formatDate(a,"YYYY/MM/DD")},getFile(){this.$refs.myFileInput.$el.click()},captureImageFallback(a){this.myImage=a[0]},async upLoadImage(a){let t=a;const s=new FormData;s.append("image",t),this.$q.loading.show();try{await c["d"]().post("/transaction/upload_image",s);this.$q.notify({message:"Image Berhasil disimpan",icon:"eva-info-alert"}),this.getDataActivasi(),this.$q.loading.hide()}catch(e){this.$q.loading.hide(),console.log(e)}},getDataActivasi(){c["c"]().get("/transaction?jenis=pembayaran_activasi").then((a=>{console.log("transaksi",a),this.$store.commit("buktitransfer/SET_BUKTI",a.data.image),this.status=a.data.status,this.transaction=a.data}))},lanjut(){this.$q.loading.show();const a=new FormData;a.append("tanggal",this.tanggal),a.append("nominal",1e5),a.append("bank_id",this.bank),a.append("jenis","activasi_pembayaran"),c["c"]().post("transaction/pembayaran_activasi",a).then((a=>{this.$q.loading.hide(),this.getDataActivasi()})).catch((()=>{this.$q.loading.hide()}))},redirectPage(){}}),watch:{myImage(){this.upLoadImage(this.myImage)},bukti(){console.log(this.bukti)},status(){this.redirectPage()}}},d=m,p=(s("da38"),s("2877")),g=s("9989"),u=s("0016"),v=s("f09f"),b=s("a370"),h=s("eb85"),q=s("1c1c"),y=s("66e5"),f=s("4074"),k=s("3786"),C=s("0170"),_=s("27f9"),w=s("7cbe"),x=s("52ee"),I=s("9c40"),D=s("068f"),Q=s("24e8"),$=s("6b1d"),j=s("2c91"),P=s("714f"),S=s("7f67"),B=s("eebe"),A=s.n(B),K=Object(p["a"])(d,e,i,!1,null,"cbf10a52",null);t["default"]=K.exports;A()(K,"components",{QPage:g["a"],QIcon:u["a"],QCard:v["a"],QCardSection:b["a"],QSeparator:h["a"],QList:q["a"],QItem:y["a"],QItemSection:f["a"],QRadio:k["a"],QItemLabel:C["a"],QInput:_["a"],QPopupProxy:w["a"],QDate:x["a"],QBtn:I["a"],QImg:D["a"],QDialog:Q["a"],QLinearProgress:$["a"],QSpace:j["a"]}),A()(K,"directives",{Ripple:P["a"],ClosePopup:S["a"]})},da38:function(a,t,s){"use strict";s("0668")}}]);