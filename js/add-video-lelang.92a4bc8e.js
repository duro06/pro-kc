(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"82be":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",[t("div",{directives:[{name:"show",rawName:"v-show",value:0==e.videos.length,expression:"videos.length == 0"}],staticClass:"flex flex-center column",staticStyle:{height:"300px"}},[t("div",[t("q-icon",{attrs:{size:"3em",name:"check",color:"grey"}})],1),t("div",{staticClass:"text-grey"},[e._v("Belum Ada Video")])]),e._l(e.videos,(function(a,i){return t("div",{key:"image"+i,staticClass:"camera-frame"},[t("video",{ref:"video",refInFor:!0,staticClass:"full-width",attrs:{controls:"",src:e.urlPath+a.video}})])})),t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"alert-primary text-grey-8 q-pa-md"},[t("b",[e._v("Foto "+e._s(e.videos.length)+" / 1 . ")]),e._v(" Pilih / Record Video Utama Penawaran Anda . Max upload video 1. dan Durasi Video "),t("b",[e._v("max 15 detik")]),e._v(", disarankan video berukuran tidak lebih dari "),t("b",[e._v("5mb")])])]),t("q-page-sticky",{attrs:{position:"bottom-right",offset:[20,20]}},[t("q-fab",{attrs:{icon:"eva-plus",color:"primary",direction:"up","vertical-actions-align":"right"}},[e.videos.length?t("q-fab-action",{attrs:{"label-position":"left",color:"grey",icon:"fas fa-trash",label:"Hapus Video"},on:{click:e.HapusVideo}}):e._e(),e.videos.length?t("q-fab-action",{attrs:{"label-position":"left",color:"grey",icon:"fas fa-check",label:"Jadikan Default"},on:{click:e.ubahStatus}}):e._e(),e.videos.length?e._e():t("q-fab-action",{attrs:{"label-position":"left",color:"grey",icon:"eva-video",label:"Camera"},on:{click:e.gotoCamera}}),e.videos.length?e._e():t("q-fab-action",{attrs:{"label-position":"left",color:"grey",icon:"perm_media",label:"Gallery"},on:{click:e.getFile}}),t("q-input",{ref:"myFileInput",staticStyle:{display:"none"},attrs:{type:"file",label:"Standard",accept:"video/*"},on:{input:e.captureImageFallback},model:{value:e.myVideo,callback:function(a){e.myVideo=a},expression:"myVideo"}})],1)],1),t("q-footer",{staticClass:"bg-white",attrs:{bordered:""}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col q-pa-md"},[t("q-btn",{staticClass:"full-width",attrs:{"no-caps":"",icon:"eva-arrow-ios-back",color:"white","text-color":"black",label:"Kembali"},on:{click:e.backTo}})],1),t("div",{staticClass:"col q-pa-md"},[t("q-btn",{staticClass:"full-width",attrs:{"no-caps":"","icon-right":"eva-arrow-ios-forward",color:"primary","text-color":"white",label:"Lanjut"},on:{click:e.lanjut}})],1)])])],2)},o=[],s=t("ded3"),l=t.n(s),r=(t("5319"),t("758b")),n=t("2f62"),d={name:"AddVideoLelang",data(){return{videos:[],myVideo:null}},created(){this.getLelangBy(this.$route.params.slug)},computed:{urlPath(){return r["e"]()}},methods:l()(l()({},Object(n["b"])("lelang",["sendVideo"])),{},{lanjut(){this.$router.replace(this.$route.query.redirect||{name:"lelang.draft",params:{slug:this.$route.params.slug}},(()=>{}))},backTo(){this.$router.replace(this.$route.query.redirect||{name:"foto.lelang",params:{slug:this.$route.params.slug}},(()=>{}))},getLelangBy(e){r["c"]().get(`/lelang/by/${e}`).then((e=>{console.log("lelang",e.data.video_lelang),this.videos=e.data.video_lelang,this.$q.loading.hide()}))},gotoCamera(){if(this.videos.length>=1)return this.$q.notify({message:"Maaf, Video Sudah Ada",icon:"eva-info"}),!1;this.$router.replace(this.$route.query.redirect||{name:"video.lelang.camera",params:{slug:this.$route.params.slug}},(()=>{}))},getFile(){if(this.videos.length>=1)return this.$q.notify({message:"Maaf, Video Sudah Ada",icon:"eva-info"}),!1;this.$refs.myFileInput.$el.click()},captureImageFallback(e){this.myVideo=e[0],this.uploadVideo(this.myVideo)},uploadVideo(e){let a=new FormData;a.append("video",e),a.append("lelang_id",this.$route.params.slug),this.$q.loading.show(),this.sendVideo(a).then((()=>{this.$q.notify({message:"Video Uploaded"}),this.getLelangBy(this.$route.params.slug),this.$q.loading.hide()})).catch((()=>{this.$q.loading.hide(),this.$q.notify({message:"Video not Uploaded"})}))},HapusVideo(){if(this.videos.length<1)return this.$q.notify({message:"Belum Ada Video",icon:"eva-info"}),!1;let e=this.videos[0].id;this.$q.loading.show(),r["c"]().delete(`/video_lelang/remove/${e}`).then((()=>{this.getLelangBy(this.$route.params.slug)}))},ubahStatus(){if(this.videos.length<1)return this.$q.notify({message:"Belum Ada Video",icon:"eva-info"}),!1;let e=this.videos[0].id;this.$q.loading.show();let a={params:{id:e,lelang_id:this.$route.params.slug}};r["c"]().get("/video_lelang/update_status",a).then((()=>{this.getLelangBy(this.$route.params.slug)}))}})},c=d,h=t("2877"),u=t("9989"),g=t("0016"),m=t("de5e"),p=t("c294"),v=t("72db"),f=t("27f9"),b=t("7ff0"),y=t("9c40"),$=t("eebe"),q=t.n($),k=Object(h["a"])(c,i,o,!1,null,"abf838ec",null);a["default"]=k.exports;q()(k,"components",{QPage:u["a"],QIcon:g["a"],QPageSticky:m["a"],QFab:p["a"],QFabAction:v["a"],QInput:f["a"],QFooter:b["a"],QBtn:y["a"]})}}]);