(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"56b4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex column text-center bg-grey-1"},[a("div",{staticClass:"q-pa-md text-center"},[a("div",{staticClass:"text-weight-bold q-ma-sm",staticStyle:{"font-size":"2em"}},[t._v("\n      Register\n    ")])]),a("div",{staticClass:"q-px-md"},[a("q-card",{staticClass:"q-pa-lg"},[a("data-input",{ref:"nama",attrs:{icon:"eva-person-outline",label:"Nama","lazy-rules":"",text:t.registerData.name},on:{"update:text":function(e){return t.$set(t.registerData,"name",e)}}}),a("email-input",{ref:"mail",attrs:{icon:"eva-email-outline",label:"e-mail",email:t.registerData.email},on:{"update:email":function(e){return t.$set(t.registerData,"email",e)}}}),a("password-input",{ref:"pass",attrs:{icon:"eva-lock-outline",label:"password",password:t.registerData.password},on:{"update:password":function(e){return t.$set(t.registerData,"password",e)}}}),a("password-input",{ref:"passC",attrs:{icon:"eva-lock-outline",label:"confirm password",password:t.registerData.passwordConfirm,sama:t.registerData.password},on:{"update:password":function(e){return t.$set(t.registerData,"passwordConfirm",e)},"update:sama":function(e){return t.$set(t.registerData,"password",e)}}}),a("div",{staticClass:"text-center q-my-lg"},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary",loading:t.loading,disable:t.disable},on:{click:t.registerControl}},[t._v("register")])],1)],1),a("div",{staticClass:"text-center q-mt-lg",on:{click:t.toLogin}},[a("q-item-label",{staticClass:"q-mt-sm text-body text-weight-bold text-primary",attrs:{lines:"1"}},[a("span",{staticClass:"cursor-pointer"},[a("q-icon",{attrs:{name:"fas fa-angle-left"}}),t._v(" Back to Login")],1)])],1)],1)])},r=[],i=a("ded3"),n=a.n(i),o=(a("e6cf"),a("ddb0"),a("5319"),a("2f62")),l={name:"register",components:{"data-input":()=>a.e(48).then(a.bind(null,"d95a")),"email-input":()=>a.e(2).then(a.bind(null,"f1b7")),"password-input":()=>a.e(49).then(a.bind(null,"24ca"))},data(){return{registerData:{email:"",password:"",passwordConfirm:"",name:""},loading:!1,disable:!1}},methods:n()(n()({},Object(o["b"])("users",["register"])),{},{registerControl(){this.$refs.nama.$refs.text.validate(),this.$refs.mail.$refs.email.validate(),console.log("nama",this.$refs.nama.$refs.text.hasError),console.log("email",this.$refs.mail.$refs.email.hasError),this.$q.loading.show(),this.disable=!0,this.register(this.registerData).then((()=>{this.disable=!1,this.$q.loading.hide(),this.$router.replace(this.$route.query.redirect||{path:"/"},(()=>{})),this.$store.dispatch("users/getUser")})).catch((()=>{this.disable=!1,this.$q.loading.hide()}))},sameAsPass(t){console.log("confirm ",t)},toLogin(){this.$router.replace(this.$route.query.redirect||{name:"login"},(()=>{}))}})},d=l,c=a("2877"),m=a("9989"),p=a("f09f"),u=a("9c40"),g=a("0170"),f=a("0016"),h=a("eebe"),b=a.n(h),w=Object(c["a"])(d,s,r,!1,null,null,null);e["default"]=w.exports;b()(w,"components",{QPage:m["a"],QCard:p["a"],QBtn:u["a"],QItemLabel:g["a"],QIcon:f["a"]})}}]);