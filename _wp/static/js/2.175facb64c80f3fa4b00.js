webpackJsonp([2],{"3j21":function(e,t,a){"use strict";var o=a("5upx"),l={name:"settingMetaInput",mixins:[],props:{labelText:{type:String,default:"未知属性"},isShowTips:{type:Boolean,default:!1},tipsContent:{type:String,default:"注意：..."},tipsColor:{type:String,default:"#bcc2c8"},value:{type:String,default:""}},data:function(){return{}},components:{baseLine:o.a},created:function(){},mounted:function(){},beforeDestroy:function(){},computed:{_value:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},watch:{value:function(e){}},methods:{}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"setting-meta-input"},[a("baseLine",{attrs:{labelText:e.labelText}},[a("template",{slot:"settingBaseLineSlot"},[a("el-input",{attrs:{size:"mini"},model:{value:e._value,callback:function(t){e._value=t},expression:"_value"}}),e._v(" "),e.isShowTips?[a("p",{staticClass:"input-tips",style:{color:e.tipsColor}},[e._v(e._s(e.tipsContent))])]:e._e()],2)],2)],1)},staticRenderFns:[]};var n=a("U5Ua")(l,r,!1,function(e){a("l5b6")},"data-v-75b6b3c9",null);t.a=n.exports},l5b6:function(e,t){},myez:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("3j21"),l=a("8jtC"),r=a("XUv8"),n=a("4duK"),i={name:"pageMetaSetting",mixins:[],props:{pageName:{type:String,default:"未命名页面"},pageTitle:{type:String,default:"未命名标题"},pageBgColor:{type:String,default:"#FFF"},pageHeaderBgColor:{type:String,default:"#EEE"},pageHeaderColor:{type:Number,default:1},marginValue:{type:Number,default:0}},data:function(){return{PageName:this.pageName,PageTitle:this.pageTitle,PageBgColor:this.pageBgColor,PageBgColorDefault:"#FFF",PageHeaderBgColor:this.pageHeaderBgColor,PageHeaderBgColorDefault:"#FFF",PageHeaderColor:this.pageHeaderColor,MarginValue:this.marginValue,PageHeaderColorList:[{value:1,text:"黑色"},{value:2,text:"白色"}]}},components:{inputNormal:o.a,colorSelect:l.a,radioGroup:r.a,numberSlider:n.a},created:function(){},mounted:function(){},beforeDestroy:function(){},computed:{},watch:{PageName:function(e){this.dispatchNewStore()},PageTitle:function(e){this.dispatchNewStore()},PageBgColor:function(e){this.dispatchNewStore()},PageHeaderBgColor:function(e){this.dispatchNewStore()},PageHeaderColor:function(e){this.dispatchNewStore()},MarginValue:function(e){this.dispatchNewStore()}},methods:{dispatchNewStore:function(){var e={pageName:this.PageName,pageTitle:this.PageTitle,pageBgColor:this.PageBgColor,pageHeaderBgColor:this.PageHeaderBgColor,pageHeaderColor:this.PageHeaderColor,marginValue:this.MarginValue};console.log("页面设置变更...."),this.$store.dispatch("VUEX_SETTING_PAGE",e)},consoleOut:function(){console.group("/***page setting output"),console.log("pageName = "+this.PageName),console.log("pageTitle = "+this.PageTitle),console.log("pageBgColor = "+this.PageBgColor),console.log("pageHeaderBgColor = "+this.PageHeaderBgColor),console.log("pageHeaderColor = "+this.PageHeaderColor),console.log("marginValue = "+this.MarginValue),console.groupEnd("page setting output***/")},getPageBgColor:function(e){}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-setting"},[a("inputNormal",{attrs:{labelText:"页面名称",isShowTips:!0,tipsContent:"注意：页面名称是便于后台查找，页面标题是手机端标题"},model:{value:e.PageName,callback:function(t){e.PageName=t},expression:"PageName"}}),e._v(" "),a("inputNormal",{attrs:{labelText:"页面标题"},model:{value:e.PageTitle,callback:function(t){e.PageTitle=t},expression:"PageTitle"}}),e._v(" "),a("colorSelect",{attrs:{labelText:"页面颜色",defaultColor:e.PageBgColorDefault},on:{change:e.getPageBgColor},model:{value:e.PageBgColor,callback:function(t){e.PageBgColor=t},expression:"PageBgColor"}}),e._v(" "),a("colorSelect",{attrs:{labelText:"顶部背景颜色",defaultColor:e.PageHeaderBgColorDefault},model:{value:e.PageHeaderBgColor,callback:function(t){e.PageHeaderBgColor=t},expression:"PageHeaderBgColor"}}),e._v(" "),a("radioGroup",{attrs:{labelText:"顶部文字颜色",radioArray:e.PageHeaderColorList},model:{value:e.PageHeaderColor,callback:function(t){e.PageHeaderColor=t},expression:"PageHeaderColor"}}),e._v(" "),a("numberSlider",{attrs:{labelText:"页面边距",tipsText:"px",max:20,min:0},model:{value:e.MarginValue,callback:function(t){e.MarginValue=t},expression:"MarginValue"}}),e._v(" "),a("br"),a("br"),e._v(" "),a("el-button",{on:{click:e.consoleOut}},[e._v("输出参数（console）")])],1)},staticRenderFns:[]};var s=a("U5Ua")(i,g,!1,function(e){a("xW3D")},"data-v-a233a77a",null);t.default=s.exports},xW3D:function(e,t){}});
//# sourceMappingURL=2.175facb64c80f3fa4b00.js.map