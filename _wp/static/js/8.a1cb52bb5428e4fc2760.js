webpackJsonp([8],{Aa7x:function(t,e){},Fb8H:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"metaBaseImageDisplay",mixins:[],props:{type:{type:Number,default:1},imageList:{type:Array,default:function(){return[{src:"",linkUrl:""},{src:"",linkUrl:""}]}},btnShape:{type:Number,default:1},btnPosition:{type:Number,default:1},btnColor:{type:String,default:"#FFF"},btnMarginLR:{type:Number,default:5},btnMarginBottom:{type:Number,default:5},btnTransparency:{type:Number,default:.8}},data:function(){return{ImageList:this.imageList}},components:{},created:function(){},mounted:function(){},beforeDestroy:function(){},computed:{},watch:{},methods:{},filters:{defaultImageUrl:function(t,e){return t||"/static/images/static_img/img-bg-"+e%2+".jpg"}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meta-base-image-display"},[n("div",{staticClass:"image-container"},t._l(t.ImageList,function(e,a){return n("img",{key:a,staticClass:"image-normal",class:{hide:1===t.type&&a>0},attrs:{"data-href":e.linkUrl,src:t._f("defaultImageUrl")(e.src,a)}})})),t._v(" "),1===t.type?n("div",{staticClass:"images-carousel-btns",class:{"carousel-btn-left":1===t.btnPosition,"carousel-btn-center":2===t.btnPosition,"carousel-btn-right":3===t.btnPosition}},t._l(t.ImageList.length,function(e){return n("span",{key:e,staticClass:"carousel-btn",class:{"carousel-btn-shape-circle":3===t.btnShape,"carousel-btn-shape-rect2":2===t.btnShape,"carousel-btn-shape-rect":1===t.btnShape},style:{"background-color":t.btnColor,"margin-left":t.btnMarginLR+"px","margin-right":t.btnMarginLR+"px","margin-bottom":t.btnMarginBottom+"px",opacity:t.btnTransparency}})})):t._e()])},staticRenderFns:[]};var s=n("U5Ua")(a,i,!1,function(t){n("itsL")},"data-v-c4a2cb30",null).exports,r={name:"metaCarousel",mixins:[n("Q7ex").a],props:{metaId:{type:Number,default:0},metaConfig:{type:Object,default:function(){return{imageList:[{src:"",linkUrl:"#"},{src:"",linkUrl:"#"}],btnShape:1,btnPosition:3,btnColor:"#fff",btnMarginLR:5,btnMarginBottom:5,btnTransparency:.8}}}},data:function(){return{metaInfo:this.metaConfig}},components:{imageDisplay:s},created:function(){},mounted:function(){},beforeDestroy:function(){},computed:{},watch:{},methods:{}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"meta-carousel"},[e("imageDisplay",{attrs:{type:1,imageList:this.metaInfo.imageList,btnPosition:this.metaInfo.btnPosition,btnShape:this.metaInfo.btnShape,btnColor:this.metaInfo.btnColor,btnMarginLR:this.metaInfo.btnMarginLR,btnMarginBottom:this.metaInfo.btnMarginBottom,btnTransparency:this.metaInfo.btnTransparency}})],1)},staticRenderFns:[]};var c=n("U5Ua")(r,o,!1,function(t){n("Aa7x")},"data-v-5caa9bfa",null);e.default=c.exports},Q7ex:function(t,e,n){"use strict";e.a={computed:{meta_setting:function(){return this.$store.state.system.vuex_setting_meta}},watch:{meta_setting:function(t){this.metaId&&t.metaId===this.metaId&&!t.isDefaultConfig&&(this.metaInfo=t)}}}},itsL:function(t,e){}});
//# sourceMappingURL=8.a1cb52bb5428e4fc2760.js.map