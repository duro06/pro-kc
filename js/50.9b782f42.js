(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{e741:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("q-card",{attrs:{flat:"",square:""}},[e("q-card-section",{staticClass:"bg-primary text-white"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"row q-mr-lg"},[a.isLogin?e("q-btn",{attrs:{round:"",size:"20px",color:"grey"},on:{click:a.getFile}},[null!=a.user.avatar&&void 0!=a.user.avatar?e("q-avatar",{attrs:{size:"78px"}},[e("q-img",{staticStyle:{height:"78px","max-width":"78px"},attrs:{src:a.getAvatar(a.user.avatar)}})],1):e("q-avatar",{attrs:{size:"78px"}},[a._v(a._s(a.initial))])],1):e("q-btn",{attrs:{size:"20px",round:"",color:"grey",label:""}},[e("q-avatar",{attrs:{size:"78px"}})],1)],1),a.isLogin?e("div",{staticClass:"row"},[e("div",{staticClass:"column"},[e("div",{staticClass:"text-h6",staticStyle:{"margin-bottom":"-5px"}},[a._v("\n              "+a._s(a.user.name)+"\n            ")]),e("div",{staticClass:"text-h7"},[a._v(a._s(a.user.email))]),e("div",{staticClass:"text-h7"},[a._v(a._s(a.user.kota))])])]):a._e()])])],1),e("q-input",{ref:"myFileInput",staticStyle:{display:"none"},attrs:{type:"file",label:"Standard",accept:"image/*"},on:{input:a.captureImageFallback},model:{value:a.myImage,callback:function(t){a.myImage=t},expression:"myImage"}})],1)},i=[],r=e("ded3"),l=e.n(r),n=e("2f62"),o=e("758b"),c=e("c2f6"),p={props:{isLogin:{type:Boolean,default:!1},adaFoto:{type:Boolean,default:!1}},data(){return{dialog:!1,gambar:null,myImage:null}},computed:l()(l()(l()({},Object(n["c"])("users",["storage"])),Object(n["d"])("users",["user"])),{},{initial(){return this.user.name?this.user.name.substring(0,1):"G"},urlPath(){return o["e"]()}}),methods:{getAvatar(a){var t=a.split("/"),e=t[0];return"images"===e?this.urlPath+a:a},upload(a){const t=new FormData;t.append("image",a),this.$q.loading.show(),this.$store.dispatch("users/uploadImage",t).then((a=>{this.$q.loading.hide(),console.log("upload",a)})).catch((a=>{this.$q.loading.hide(),console.log(a)}))},fileType(a){return a.filter((a=>"image/png"===a.type||"image/jpg"===a.type||"image/jpeg"===a.type))},onReject(a){this.$q.notify({type:"negative",message:"Hanya menerima file gambar. (.jpg, .jpeg, .png,)",position:"center"})},getFile(){this.$refs.myFileInput.$el.click()},captureImageFallback(a){c["b"]({file:a[0],maxSize:500}).then((a=>{this.myImage=a,this.upload(a)}))}},watch:{}},u=p,g=e("2877"),d=e("f09f"),m=e("a370"),h=e("9c40"),v=e("cb32"),f=e("068f"),y=e("24e8"),b=e("7d53"),x=e("0016"),q=e("4b7e"),w=e("27f9"),I=e("7f67"),C=e("eebe"),_=e.n(C),Q=Object(g["a"])(u,s,i,!1,null,"4420341b",null);t["default"]=Q.exports;_()(Q,"components",{QCard:d["a"],QCardSection:m["a"],QBtn:h["a"],QAvatar:v["a"],QImg:f["a"],QDialog:y["a"],QFile:b["a"],QIcon:x["a"],QCardActions:q["a"],QInput:w["a"]}),_()(Q,"directives",{ClosePopup:I["a"]})}}]);