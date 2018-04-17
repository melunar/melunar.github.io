webpackJsonp([1],{"/hK2":function(t,e,n){var i=n("TF39"),a=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},"2/Gb":function(t,e,n){"use strict";var i=n("405r"),a={name:"metaBaseImageUpload",mixins:[],props:{dataList:{type:Array,default:function(){return[{imgSrc:"",linkPageId:"",text:"1"},{imgSrc:"",linkPageId:"",text:"2"}]}},maxLength:{type:Number,default:10},isText:{type:Boolean,default:!1}},data:function(){return{listBySort:this.dataList}},components:{draggable:n.n(i).a},created:function(){},mounted:function(){},beforeDestroy:function(){},computed:{},watch:{},methods:{addOne:function(){this.listBySort.splice(this.listBySort.length,0,{imgSrc:"",linkPageId:"",text:""}),this.$emit("change",this.listBySort)},deleteOne:function(t,e){this.$alert("确定要删除该项？","提示",{confirmButtonText:"删除",callback:function(){this.listBySort.splice(e,1),this.$emit("change",this.listBySort)}.bind(this)})},handleRemove:function(t,e){console.log("....handleRemove"),console.log(t,e)},handlePreview:function(t){console.log("....handlePreview"),console.log(t)},handleExceed:function(t,e){console.log("....handleExceed"),this.$message.warning("当前限制选择 1 个文件，本次选择了 "+t.length+" 个文件，共选择了 "+(t.length+e.length)+" 个文件")},handleSuccess:function(t,e){var n=e.name;message.success("上传"+n+"成功！"),void 0!==this.curIndex?(this.listBySort[this.curIndex].imgSrc=e.url,this.$emit("change",this.listBySort),console.log("....handleSuccess")):message.error("error, code = 0")},handleError:function(){message.error("上传失败！"),console.log("....handleError")},beforeRemove:function(t,e){return console.log("....beforeRemove"),this.$confirm("确定移除 "+t.name+"？")},draggableSort:function(){setTimeout(function(){this.$emit("change",this.listBySort)}.bind(this))},rememberIndex:function(t){this.curIndex=t,console.log("当前操作NO."+t)}},filters:{}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meta-base-image-upload"},[t.listBySort.length>0?n("div",{staticClass:"phone-sort-meat"},[n("draggable",{on:{sort:t.draggableSort},model:{value:t.listBySort,callback:function(e){t.listBySort=e},expression:"listBySort"}},t._l(t.listBySort,function(e,i){return n("div",{key:i,staticClass:"upload-content"},[n("div",{staticClass:"image-box"},[e.imgSrc?n("img",{staticClass:"image-self",attrs:{src:e.imgSrc}}):t._e(),t._v(" "),e.imgSrc?n("img",{staticClass:"image-self"}):t._e()]),t._v(" "),n("div",{staticClass:"upload-form"},[n("el-input",{attrs:{size:"small",disabled:"",placeholder:"图片地址"},model:{value:e.imgSrc,callback:function(n){t.$set(e,"imgSrc",n)},expression:"item.imgSrc"}},[n("template",{slot:"append"},[n("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":t.handlePreview,"on-remove":t.handleRemove,"before-remove":t.beforeRemove,"on-success":t.handleSuccess,"on-error":t.handleError,multiple:!1,"show-file-list":!1,"on-exceed":t.handleExceed,"file-list":e.imgSrc?[{name:e.imgSrc,url:e.imgSrc}]:[]}},[n("el-button",{staticStyle:{position:"relative",top:"4px"},attrs:{size:"small",type:"primary"},on:{click:function(e){t.rememberIndex(i)}}},[t._v("选择图片")]),t._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"})],1)],1)],2),t._v(" "),n("span",{staticClass:"split-space"}),t._v(" "),n("el-input",{attrs:{size:"small",disabled:"",placeholder:"链接地址"},model:{value:e.linkPageId,callback:function(n){t.$set(e,"linkPageId",n)},expression:"item.linkPageId"}},[n("template",{slot:"append"},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("链接地址")])],1)],2),t._v(" "),t.isText?[n("span",{staticClass:"split-space"}),t._v(" "),n("el-input",{attrs:{size:"small",placeholder:"添加文本"},model:{value:e.text,callback:function(n){t.$set(e,"text",n)},expression:"item.text"}},[n("template",{slot:"append"},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("文字")])],1)],2)]:t._e()],2),t._v(" "),n("span",{staticClass:"del-btn",on:{click:function(n){t.deleteOne(e,i)}}},[t._v("×")])])}))],1):t._e(),t._v(" "),n("div",{staticClass:"add-btn-container"},[n("el-button",{staticStyle:{width:"100%"},attrs:{disabled:t.listBySort.length>=t.maxLength,size:"medium",icon:"el-icon-plus"},on:{click:t.addOne}},[t._v("添加一个（拖拽排序）"+t._s(t.listBySort.length>=t.maxLength?"已达上限":""))])],1)])},staticRenderFns:[]};var s=n("Z0/y")(a,o,!1,function(t){n("GdU6")},"data-v-48443c9d",null);e.a=s.exports},"3cXf":function(t,e,n){t.exports={default:n("/hK2"),__esModule:!0}},"3j21":function(t,e,n){"use strict";var i=n("5upx"),a={name:"settingMetaInput",mixins:[],props:{labelText:{type:String,default:"未知属性"},isShowTips:{type:Boolean,default:!1},tipsContent:{type:String,default:"注意：..."},tipsColor:{type:String,default:"#bcc2c8"},value:{type:String,default:""}},data:function(){return{}},components:{baseLine:i.a},created:function(){},mounted:function(){},beforeDestroy:function(){},computed:{_value:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},watch:{value:function(t){}},methods:{}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setting-meta-input"},[n("baseLine",{attrs:{labelText:t.labelText}},[n("template",{slot:"settingBaseLineSlot"},[n("el-input",{attrs:{size:"mini"},model:{value:t._value,callback:function(e){t._value=e},expression:"_value"}}),t._v(" "),t.isShowTips?[n("p",{staticClass:"input-tips",style:{color:t.tipsColor}},[t._v(t._s(t.tipsContent))])]:t._e()],2)],2)],1)},staticRenderFns:[]};var s=n("Z0/y")(a,o,!1,function(t){n("DLFw")},"data-v-75b6b3c9",null);e.a=s.exports},Ay7r:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("3cXf"),a=n.n(i),o=n("3j21"),s=n("8jtC"),l=n("XUv8"),r=n("4duK"),c=n("2/Gb"),u={name:"metaCarouselSetting",mixins:[],props:{metaId:{type:Number,default:0},metaInfo:{type:Object,default:function(){return{btnShape:3,btnPosition:2,btnColor:"#fff",btnMarginLR:5,btnMarginBottom:5,btnTransparency:.8,imageList:[{imgSrc:"",linkPageId:""},{imgSrc:"",linkPageId:""}]}}}},data:function(){return{metaType:"002",metaText:"轮播图",btnShape:this.metaInfo.btnShape,btnPosition:this.metaInfo.btnPosition,btnColor:this.metaInfo.btnColor,btnMarginLR:this.metaInfo.btnMarginLR,btnMarginBottom:this.metaInfo.btnMarginBottom,btnTransparency:this.metaInfo.btnTransparency,imageList:this.metaInfo.imageList,btnShapeList:[{value:1,text:"长方形"},{value:2,text:"正方形"},{value:3,text:"圆形"}],btnPositionList:[{value:1,text:"居左"},{value:2,text:"居中"},{value:3,text:"居右"}]}},components:{inputNormal:o.a,colorSelect:s.a,radioGroup:l.a,numberSlider:r.a,imageUploads:c.a},created:function(){},mounted:function(){},beforeDestroy:function(){},computed:{anyFormValChange:function(){return a()({btnShape:this.btnShape,btnPosition:this.btnPosition,btnColor:this.btnColor,btnMarginLR:this.btnMarginLR,btnMarginBottom:this.btnMarginBottom,btnTransparency:this.btnTransparency,imageList:this.imageList})}},watch:{metaId:function(){},anyFormValChange:function(){this.dispatchNewStore()}},methods:{getNewImages:function(t){this.imageList=t},dispatchNewStore:function(){var t={metaId:this.metaId,metaType:this.metaType,btnShape:this.btnShape,btnPosition:this.btnPosition,btnColor:this.btnColor,btnMarginLR:this.btnMarginLR,btnMarginBottom:this.btnMarginBottom,btnTransparency:this.btnTransparency,imageList:this.imageList};console.log("组件设置变更...."),this.$store.dispatch("VUEX_SETTING_META",t)},consoleOut:function(){console.group("/***page setting output"),console.log("_btnShape = "+this.btnShape),console.log("_btnPosition = "+this.btnPosition),console.log("_btnColor = "+this.btnColor),console.log("_btnMarginLR = "+this.btnMarginLR),console.log("_btnMarginBottom = "+this.btnMarginBottom),console.log("_btnTransparency = "+this.btnTransparency),console.groupEnd("page setting output***/")}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meta-carousel-setting"},[n("radioGroup",{attrs:{labelText:"按钮形状",radioArray:t.btnShapeList},model:{value:t.btnShape,callback:function(e){t.btnShape=e},expression:"btnShape"}}),t._v(" "),n("radioGroup",{attrs:{labelText:"按钮位置",radioArray:t.btnPositionList},model:{value:t.btnPosition,callback:function(e){t.btnPosition=e},expression:"btnPosition"}}),t._v(" "),n("colorSelect",{attrs:{labelText:"按钮颜色",defaultColor:"#fff"},model:{value:t.btnColor,callback:function(e){t.btnColor=e},expression:"btnColor"}}),t._v(" "),n("numberSlider",{attrs:{labelText:"按钮左右边距",tipsText:"px",max:50,min:5},model:{value:t.btnMarginLR,callback:function(e){t.btnMarginLR=e},expression:"btnMarginLR"}}),t._v(" "),n("numberSlider",{attrs:{labelText:"按钮底部边距",tipsText:"px",max:50,min:5},model:{value:t.btnMarginBottom,callback:function(e){t.btnMarginBottom=e},expression:"btnMarginBottom"}}),t._v(" "),n("numberSlider",{attrs:{labelText:"按钮透明度",tipsText:"最大是1",step:.1,max:1,min:.1},model:{value:t.btnTransparency,callback:function(e){t.btnTransparency=e},expression:"btnTransparency"}}),t._v(" "),n("imageUploads",{attrs:{maxLength:10,dataList:t.imageList,isText:!0},on:{change:t.getNewImages}}),t._v(" "),n("br"),n("br"),t._v(" "),n("el-button",{on:{click:t.consoleOut}},[t._v("输出参数（console）")])],1)},staticRenderFns:[]};var p=n("Z0/y")(u,m,!1,function(t){n("uNLO")},"data-v-7b1ffa3c",null);e.default=p.exports},DLFw:function(t,e){},GdU6:function(t,e){},uNLO:function(t,e){}});
//# sourceMappingURL=1.7fc2f760a4282ab9d268.js.map