(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"369b":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{attrs:{padding:""}},[o("q-btn",{staticClass:"glossy q-ma-sm",attrs:{rounded:"",color:"green",label:"Next"},on:{click:t.nextVideo}}),o("div",{staticClass:"camera-frame full-width"},[o("h5",[t._v("Ini Q video")]),o("q-video",{attrs:{ratio:1,src:t.storage+t.video,allowfullscreen:""}})],1),o("div",{staticClass:"camera-frame"},[o("h5",[t._v("Ini Video tag biasa")]),o("video",{ref:"video",staticClass:"full-width",attrs:{controls:"",src:t.storage+t.video}})])],1)},i=[],a=o("ded3"),n=o.n(a),c=o("2f62"),d={data(){return{video:"",vLength:0,count:0}},computed:n()(n()({},Object(c["c"])("database",["videos"])),Object(c["c"])("users",["storage"])),methods:n()(n()({},Object(c["b"])("database",["getVideo"])),{},{nextVideo(){this.count<this.vLength-1?(this.count=this.count+1,console.log("count ",this.count),this.video=this.videos[this.count].path):(this.count=0,console.log("count ",this.count),this.video=this.videos[this.count].path)}}),mounted(){this.getVideo().then((t=>{t&&(this.vLength=t.data.video.length,this.video=this.videos[0].path,console.log("video length ",this.vLength))}))}},h=d,l=o("2877"),r=o("9989"),u=o("9c40"),v=o("6ac01"),g=o("eebe"),b=o.n(g),p=Object(l["a"])(h,s,i,!1,null,null,null);e["default"]=p.exports;b()(p,"components",{QPage:r["a"],QBtn:u["a"],QVideo:v["a"]})}}]);