webpackJsonp([9],{Q7ex:function(t,e,n){"use strict";e.a={computed:{meta_setting:function(){return this.$store.state.system.vuex_setting_meta}},watch:{meta_setting:function(t){this.metaId&&t.metaId===this.metaId&&!t.isDefaultConfig&&(this.metaInfo=t)}}}},Q88I:function(t,e){},o21A:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"bottomMenu",mixins:[n("Q7ex").a],props:{metaId:{type:Number,default:0},metaConfig:{type:Object,default:function(){return{menuList:[{text:"消息",imgSrc:"",linkUrl:"#"},{text:"联系人",imgSrc:"",linkUrl:"#"},{text:"个人中心",imgSrc:"",linkUrl:"#"},{text:"个人中心",imgSrc:"",linkUrl:"#"}],menuType:1,bgColor:"#fff",activeBgColor:"#eee",lineColor:"#fff",fontColor:"#666",activeFontColor:"#f66"}}}},data:function(){return{activeIndex:0,metaInfo:this.metaConfig}},components:{},created:function(){},mounted:function(){},beforeDestroy:function(){},computed:{},watch:{},methods:{},filters:{defaultFullImageUrl:function(t,e){return t||"/static/images/static_img/bottom-menu/menu-"+e%5+".png"},defaultMiniImageUrl:function(t,e){return t||"/static/images/static_img/bottom-menu/menu-"+e%5+".png"}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meta-bottom-menu"},[n("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},t._l(t.metaInfo.menuList,function(e,a){return n("el-col",{key:a,attrs:{span:24}},[n("div",{staticClass:"grid-content",style:{"border-right-color":t.metaInfo.lineColor,"background-color":t.activeIndex===a?t.metaInfo.activeBgColor:t.metaInfo.bgColor},attrs:{"data-href":e.linkUrl}},[1===t.metaInfo.menuType?[n("a",{staticClass:"icon-top"},[n("img",{staticClass:"image-mini",attrs:{src:t._f("defaultMiniImageUrl")(e.imgSrc,a)}})]),t._v(" "),n("span",{staticClass:"text-mini text-overflow-ellipsis",style:{color:t.activeIndex===a?t.metaInfo.activeFontColor:t.metaInfo.fontColor}},[t._v(t._s(e.text))])]:t._e(),t._v(" "),2===t.metaInfo.menuType?[n("a",{staticClass:"icon-full"},[n("img",{staticClass:"image-full",attrs:{src:t._f("defaultFullImageUrl")(e.imgSrc,a)}})])]:t._e()],2)])}))],1)},staticRenderFns:[]};var o=n("U5Ua")(a,i,!1,function(t){n("Q88I")},"data-v-3f7e2b10",null);e.default=o.exports}});
//# sourceMappingURL=9.0fcafac2161026336fa1.js.map