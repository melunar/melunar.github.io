webpackJsonp([5],{"H+DK":function(t,e){},gUeS:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"VueUEditor",props:{ueditorPath:{type:String,default:"/static/ueditor1_4_3_3/"},ueditorConfig:{type:Object,default:function(){return{}}}},data:function(){return{randomId:"editor_"+1e17*Math.random(),instance:null,scriptTagStatus:0}},created:function(){void 0!==window.UE?(this.scriptTagStatus=2,this.initEditor()):this.insertScriptTag()},beforeDestroy:function(){null!==this.instance&&this.instance.destroy&&this.instance.destroy()},methods:{insertScriptTag:function(){var t=this,e=document.getElementById("editorScriptTag"),i=document.getElementById("configScriptTag");if(null===e){(i=document.createElement("script")).type="text/javascript",i.src=this.ueditorPath+"ueditor.config.js",i.id="configScriptTag",(e=document.createElement("script")).type="text/javascript",e.src=this.ueditorPath+"ueditor.all.js",e.id="editorScriptTag";var n=document.getElementsByTagName("head")[0];n.appendChild(i),n.appendChild(e)}i.loaded?this.scriptTagStatus++:i.addEventListener("load",function(){t.scriptTagStatus++,i.loaded=!0,t.initEditor()}),e.loaded?this.scriptTagStatus++:e.addEventListener("load",function(){t.scriptTagStatus++,e.loaded=!0,t.initEditor()}),this.initEditor()},initEditor:function(){var t=this;2===this.scriptTagStatus&&null===this.instance&&this.$nextTick(function(){t.instance=window.UE.getEditor(t.randomId,t.ueditorConfig),t.instance.addListener("ready",function(){t.$emit("ready",t.instance)})})}}},a={render:function(){var t=this.$createElement;return(this._self._c||t)("script",{attrs:{id:this.randomId,name:"content",type:"text/plain"}})},staticRenderFns:[]},o=i("U5Ua")(n,a,!1,null,null,null).exports,r=i("8jtC"),d=i("4duK"),s={name:"metaRichTextSetting",mixins:[],props:{metaId:{type:Number,default:0},metaInfo:{type:Object,default:function(){return{bgColor:"#fff",paddingValue:3,richTextContent:"<p>请输入内容...</p>"}}}},data:function(){return{actionUrl:GC.uploadImgUrl,metaType:"001",metaText:"富文本",bgColor:this.metaInfo.bgColor,paddingValue:this.metaInfo.paddingValue,richTextContent:this.metaInfo.richTextContent}},components:{vueUEditor:o,colorSelect:r.a,numberSlider:d.a},created:function(){},mounted:function(){},beforeDestroy:function(){},computed:{},watch:{bgColor:function(){this.dispatchNewStore()},paddingValue:function(){this.dispatchNewStore()},richTextContent:function(){this.dispatchNewStore()}},methods:{dispatchNewStore:function(){var t={metaId:this.metaId,metaType:this.metaType,bgColor:this.bgColor,paddingValue:this.paddingValue,richTextContent:this.richTextContent};console.log("组件设置变更...."),this.$store.dispatch("VUEX_IS_TO_SAVE",!0),this.$store.dispatch("VUEX_SETTING_META",t)},initEditor:function(t){t.setContent(this.richTextContent),t.addListener("contentChange",function(){this.richTextContent=t.getContent()}.bind(this))}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"meta-rich-text-setting"},[i("colorSelect",{attrs:{labelText:"背景颜色",defaultColor:"#fff"},model:{value:t.bgColor,callback:function(e){t.bgColor=e},expression:"bgColor"}}),t._v(" "),i("numberSlider",{attrs:{labelText:"页面边距",tipsText:"px",max:50,min:0},model:{value:t.paddingValue,callback:function(e){t.paddingValue=e},expression:"paddingValue"}}),t._v(" "),i("vueUEditor",{attrs:{ueditorConfig:{serverUrl:t.actionUrl},ueditorPath:"/static/ueditor1_4_3_3/"},on:{ready:t.initEditor}})],1)},staticRenderFns:[]};var u=i("U5Ua")(s,c,!1,function(t){i("H+DK")},"data-v-0d762057",null);e.default=u.exports}});
//# sourceMappingURL=5.d2c3b2a9b0fb027c0667.js.map