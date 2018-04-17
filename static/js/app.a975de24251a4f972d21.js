webpackJsonp([7],{"0ka3":function(t,e){},"4tPP":function(t,e){},"6drt":function(t,e){},FyQk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={templatePagesList:{comment:"根据模板获取所有页面",url:"/static/mock/pages_in_template.json",method:"get",isRequestBody:!1},pageInfo:{comment:"根据页面获取页面信息，包括页面配置和组件及信息",url:"/static/mock/page_info.json",method:"get",isRequestBody:!1}}},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("MVMM"),s=a("9rMa"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=a("Z0/y")({name:"App",computed:{},watch:{}},i,!1,function(t){a("ui8E")},null,null).exports,r=a("zO6J"),c={name:"pageHeader",data:function(){return{metaTypeMap:{},metaTypeList:GC.metaTypeList,metaList:GC.metaList,curMetaList:[],curMetaPanelStyle:{}}},created:function(){this._initMetaTypeMap()},mounted:function(){},beforeDestroy:function(){},methods:{_initMetaTypeMap:function(){this.metaTypeMap={};var t=null;for(var e in this.metaTypeList)t=this.metaTypeList[e],this.metaTypeMap[t.id]||(this.metaTypeMap[t.id]=t.name);window.GC.metaTypeMap=this.metaTypeMap},showSubMeta:function(t,e,a){for(var n in this.curMetaList=[],this.metaList)this.metaList[n].type===e&&this.curMetaList.push(this.metaList[n]);this.curMetaPanelStyle={left:40+80*a+"px"}},addMetaInPage:function(t){var e={metaId:(new Date).getTime(),metaType:t.id};this.$store.dispatch("VUEX_ADD_META_INFO",e)},hideSubMeta:function(){console.log("hideSubMeta"),this.curMetaList=[]},backTo:function(){message.ingo("去哪儿....")},pageSet:function(){this.$store.dispatch("VUEX_SETTING_IS_PAGE",!0)}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("div",{staticClass:"navbar-left fl"},[a("span",{staticClass:"normal-btn",on:{click:t.backTo}},[a("i",{staticClass:"fa fa-angle-left btn-pre-icon",staticStyle:{"font-size":"20px"}}),t._v(" "),a("span",{staticClass:"btn-text"},[t._v("返回")])])]),t._v(" "),a("div",{staticClass:"navbar-main"},[a("span",{staticClass:"normal-btn up-down-btn",on:{click:t.pageSet}},[a("i",{staticClass:"fa fa-wrench btn-pre-icon"}),t._v(" "),a("span",{staticClass:"btn-text"},[t._v("页面设置")])]),t._v(" "),t._l(t.metaTypeList,function(e,n){return a("span",{key:n,staticClass:"normal-btn up-down-btn",on:{mouseover:function(a){t.showSubMeta(a,e.id,n)}}},[a("i",{staticClass:"btn-pre-icon",class:[e.fontawesomeIcon]}),t._v(" "),a("span",{staticClass:"btn-text"},[t._v(t._s(e.name))])])}),t._v(" "),t.curMetaList.length?a("div",{staticClass:"panel-lists box-shadow",style:t.curMetaPanelStyle,on:{mouseleave:t.hideSubMeta}},[a("ul",{staticClass:"show-panel"},t._l(t.curMetaList,function(e,n){return a("li",{key:n,staticClass:"panel-meta",on:{click:function(a){t.addMetaInPage(e)}}},[a("i",{class:[e.fontawesomeIcon]}),t._v(" "),a("span",[t._v(t._s(e.name))])])}))]):t._e()],2),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"navbar-right fr"},[a("span",{staticClass:"normal-btn"},[a("i",{staticClass:"fa fa-cog fa-fw btn-pre-icon"}),t._v(" "),a("span",{staticClass:"btn-text"},[t._v("模板设置")])]),t._v(" "),a("span",{staticClass:"normal-btn"},[a("i",{staticClass:"fa fa-copy fa-fw btn-pre-icon"}),t._v(" "),a("span",{staticClass:"btn-text"},[t._v("另存为模板")])]),t._v(" "),a("span",{staticClass:"normal-btn"},[a("i",{staticClass:"fa fa-save fa-fw btn-pre-icon"}),t._v(" "),a("span",{staticClass:"btn-text"},[t._v("保存页面")])])])}]};var l=a("Z0/y")(c,m,!1,function(t){a("QDC/")},"data-v-71741ce8",null).exports,u={name:"pageList",mixins:[],data:function(){return{pageListArr:[]}},components:{},created:function(){this.getPageList()},mounted:function(){},beforeDestroy:function(){},computed:{},watch:{},methods:{getPageList:function(){SERVICE("templatePagesList",null,function(t){this.pageListArr=t.data,t.data&&t.data.forEach&&t.data.length&&this.getPageInfo(0)}.bind(this))},getPageInfo:function(t,e){var a={id:e?t:this.pageListArr[t].id};SERVICE("pageInfo",a,function(t){this.setCurPageStore(t.data)}.bind(this))},addNewPage:function(){var t={id:(new Date).getTime(),title:"未命名页面",isHomePage:!1};this.pageListArr.push(t)},setHomePage:function(t,e){for(var a=this.pageListArr.length,n=0;n<a;n++)this.pageListArr[n].id===t.id?this.pageListArr[n].isHomePage=!0:this.pageListArr[n].isHomePage=!1},editPage:function(t){var e=t.id;this.getPageInfo(e,!0)},deletePage:function(t){for(var e=this.pageListArr.length,a=0;a<e;a++)if(this.pageListArr[a].id===t.id){this.pageListArr.splice(a,1);break}},setCurPageStore:function(t){t.config?(this.$store.dispatch("VUEX_SETTING_PAGE",t.config),this.$store.dispatch("VUEX_SETTING_IS_PAGE",!0),t.metas?this.$store.dispatch("VUEX_PAGE_METAS",t.metas):message.error("获取页面组件！")):message.error("获取页面配置失败！")}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-manager"},[a("div",{staticClass:"page-list-header"},[a("div",{staticClass:"plh-title"},[t._v("页面\n        "),a("i",{staticClass:"plh-add fa fa-plus",attrs:{title:"新建页面"},on:{click:t.addNewPage}})])]),t._v(" "),a("div",{staticClass:"page-list-content"},[a("el-table",{staticStyle:{width:"100%",height:"25"},attrs:{data:t.pageListArr}},[a("el-table-column",{attrs:{prop:"title",label:"名称",width:"170"}}),t._v(" "),a("el-table-column",{attrs:{prop:"isHomePage",label:"首页",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[!0===e.row.isHomePage?a("span",{staticClass:"btn-set-home is-home",on:{click:function(a){t.setHomePage(e.row,!1)}}},[t._v("是")]):a("span",{staticClass:"btn-set-home not-home",on:{click:function(a){t.setHomePage(e.row,!0)}}},[t._v("否")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"btn-operate edit fa fa-edit",attrs:{title:"编辑"},on:{click:function(a){t.editPage(e.row)}}}),t._v(" "),a("span",{staticClass:"btn-operate delete fa fa-trash",attrs:{title:"删除"},on:{click:function(a){t.deletePage(e.row)}}})]}}])})],1)],1)])},staticRenderFns:[]};var g=a("Z0/y")(u,p,!1,function(t){a("XqRM")},"data-v-69f61930",null).exports,f={name:"componnetsOptions",mixins:[],data:function(){return{metaSettingComponentId:"",metaNameText:"",metaId:0,useDefaultConfig:!1}},components:{pageSetting:function(t){Promise.all([a.e(0),a.e(2)]).then(function(){var e=[a("myez")];t.apply(null,e)}.bind(this)).catch(a.oe)},carouselSetting:function(t){Promise.all([a.e(0),a.e(1)]).then(function(){var e=[a("Ay7r")];t.apply(null,e)}.bind(this)).catch(a.oe)},bottomMenuSetting:function(t){Promise.all([a.e(0),a.e(3)]).then(function(){var e=[a("hAyG")];t.apply(null,e)}.bind(this)).catch(a.oe)},richTextSetting:function(t){Promise.all([a.e(0),a.e(5)]).then(function(){var e=[a("gUeS")];t.apply(null,e)}.bind(this)).catch(a.oe)}},created:function(){},mounted:function(){},beforeDestroy:function(){},computed:{isPage:function(){return this.$store.state.system.vuex_setting_is_page&&console.log("切换到页面配置"),this.$store.state.system.vuex_setting_is_page},setting_page:function(){return this.$store.dispatch("VUEX_SETTING_IS_PAGE",!0),this.$store.state.system.vuex_setting_page},setting_meta:function(){return this.$store.state.system.vuex_setting_meta}},watch:{setting_meta:function(t){if(console.log("右侧组件设置更新"),this.useDefaultConfig=!!t.isDefaultConfig,t){this.$store.dispatch("VUEX_SETTING_IS_PAGE",!1);var e=t.metaId;this.metaId!==e?this.refreshMeta(function(){this.metaId=t.metaId,this.metaSettingComponentId=this.setMetaName(t.metaType)}.bind(this)):(this.metaId=t.metaId,this.metaSettingComponentId=this.setMetaName(t.metaType))}else this.metaSettingComponentId=this.setMetaName("0000000")}},methods:{refreshMeta:function(t){this.metaSettingComponentId="",this.$nextTick(function(){t&&t()}.bind(this))},setMetaName:function(t){return GC.metaListMap[t]?(this.metaNameText=GC.metaListMap[t].name,console.log("配置组件 = "+this.metaNameText),GC.metaListMap[t].meta+"Setting"):""}},filters:{}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"componnets-detail-settings"},[a("div",{staticClass:"page-title"},[t._v(t._s(t.isPage?"页面配置":t.metaNameText+"配置"))]),t._v(" "),a("div",{staticClass:"page-content"},[t.isPage?a("div",{staticClass:"page-setting-content"},[a("pageSetting",{attrs:{pageName:t.setting_page&&t.setting_page.pageName,pageTitle:t.setting_page&&t.setting_page.pageTitle,pageBgColor:t.setting_page&&t.setting_page.pageBgColor,pageHeaderBgColor:t.setting_page&&t.setting_page.pageHeaderBgColor,pageHeaderColor:t.setting_page&&t.setting_page.pageHeaderColor}})],1):t._e(),t._v(" "),t.isPage?t._e():a("div",{staticClass:"meta-setting-content"},[t.useDefaultConfig?t._e():a(t.metaSettingComponentId,{tag:"component",attrs:{metaId:t.setting_meta?t.setting_meta.metaId:0,metaInfo:t.setting_meta}}),t._v(" "),t.useDefaultConfig?a(t.metaSettingComponentId,{tag:"component",attrs:{metaId:t.setting_meta?t.setting_meta.metaId:0}}):t._e()],1)])])},staticRenderFns:[]};var _=a("Z0/y")(f,d,!1,function(t){a("4tPP")},"data-v-2a9675b5",null).exports,h=a("405r"),v={name:"appModel",mixins:[],props:{metas:{type:Array,default:function(){return[{name:"carousel",id:(new Date).getTime()},{name:"bottomMenu",id:(new Date).getTime()+1e3},{metaId:3434345,sort:1,id:"002",text:"轮播图",name:"carousel",config:{btnShape:3,btnPosition:2,btnColor:"#fff",btnMarginLR:5,btnMarginBottom:5,btnTransparency:.8}},{name:"number4"},{name:"number5"}]}},pageTitle:{type:String,default:"未命名标题"},pageBgColor:{type:String,default:"#FFF"},pageHeaderBgColor:{type:String,default:"#FFF"},pageHeaderColor:{type:Number,default:1},marginValue:{type:Number,default:0}},data:function(){return{pageHeaderColorMap:{1:"#000",2:"#fff"},metasBySort:this.metas||[]}},components:{sortableMeta:function(t){a.e(4).then(function(){var e=[a("UWW2")];t.apply(null,e)}.bind(this)).catch(a.oe)},draggable:a.n(h).a},created:function(){},mounted:function(){},beforeDestroy:function(){},computed:{componentId:function(){return this.metas.length?"sortableMeta":""},vuex_add_meta_info:function(){return this.$store.state.system.vuex_add_meta_info}},watch:{metas:{handler:function(t){console.log("页面组件刷新"),this.metasBySort=t||[]},deep:!0},vuex_add_meta_info:function(t){if(t){var e={metaId:t.metaId,sort:this.metasBySort.lenth,type:t.metaType,config:null};this.metasBySort.splice(this.metasBySort.length,0,e)}}},methods:{deleteMeta:function(t){var e=t.metaId,a=t.metaType,n=GC.metaListMap[a].name;this.metasBySort.map(function(t,a){e===t.metaId&&this.$alert("确定要删除该"+n+"组件？","提示",{confirmButtonText:"删除",callback:function(){this.metasBySort.splice(a,1),this.reSortMetas(),this.$store.state.system.vuex_setting_meta&&this.$store.state.system.vuex_setting_meta.metaId===e&&!this.$store.state.system.vuex_setting_is_page&&(console.log("删除....切换到页面配置"),this.$store.dispatch("VUEX_SETTING_IS_PAGE",!0))}.bind(this)})}.bind(this))},draggableSort:function(t){console.log("----- 拖拽重排"),this.reSortMetas()},reSortMetas:function(){this.metasBySort.map(function(t,e){this.metasBySort[e].sort=e}.bind(this))}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-model"},[a("div",{staticClass:"phone-container"},[a("div",{staticClass:"phone-model"},[a("div",{staticClass:"phone-body"},[a("div",{staticClass:"phone-header",style:{"background-color":t.pageHeaderBgColor,color:t.pageHeaderColorMap[t.pageHeaderColor]}},[t._v(t._s(t.pageTitle))]),t._v(" "),a("div",{staticClass:"phone-content",style:{"background-color":t.pageBgColor,padding:t.marginValue+"px"}},[0===t.metasBySort.length?a("div",{staticClass:"phone-empty"},[t._v("\n                        您尚未添加任何元素\n                    ")]):t._e(),t._v(" "),t.metasBySort.length>0?a("div",{staticClass:"phone-sort-meat"},[a("draggable",{on:{sort:t.draggableSort},model:{value:t.metasBySort,callback:function(e){t.metasBySort=e},expression:"metasBySort"}},t._l(t.metasBySort,function(e,n){return a(t.componentId,{key:n,tag:"component",attrs:{metaId:e.metaId,metaType:e.type,metaConfig:e.config},on:{delMeta:t.deleteMeta}})}))],1):t._e()])])])])])},staticRenderFns:[]};var C={name:"mainPage",data:function(){return{}},components:{navHeader:l,pageList:g,cpSettings:_,page:a("Z0/y")(v,y,!1,function(t){a("6drt")},"data-v-224b2186",null).exports},computed:{pageConfig:function(){return this.$store.state.system.vuex_setting_page?this.$store.state.system.vuex_setting_page:{}},pageMetas:function(){return this.$store.state.system.vuex_page_metas?this.$store.state.system.vuex_page_metas:[]}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-page-container"},[a("navHeader"),t._v(" "),a("div",{staticClass:"page-container clearfix"},[a("pageList"),t._v(" "),a("cpSettings"),t._v(" "),a("page",{attrs:{metas:t.pageMetas,pageName:t.pageConfig.pageName,pageTitle:t.pageConfig.pageTitle,pageBgColor:t.pageConfig.pageBgColor,pageHeaderBgColor:t.pageConfig.pageHeaderBgColor,pageHeaderColor:t.pageConfig.pageHeaderColor,marginValue:t.pageConfig.marginValue}})],1)],1)},staticRenderFns:[]};var I=a("Z0/y")(C,b,!1,function(t){a("q3uj")},"data-v-4a0f8d95",null).exports;n.default.use(r.a);var S=new r.a({routes:[{path:"/",name:"index",component:I}]}),w=a("dVeB"),E=a.n(w),T=(a("0ka3"),{system:{state:{vuex_setting_is_page:!1,vuex_add_meta_info:null,vuex_page_metas:null,vuex_setting_meta:null,vuex_setting_page:null},actions:{VUEX_SETTING_PAGE:function(t,e){t.commit("VUEX_SETTING_PAGE",e)},VUEX_ADD_META_INFO:function(t,e){t.commit("VUEX_ADD_META_INFO",e)},VUEX_PAGE_METAS:function(t,e){t.commit("VUEX_PAGE_METAS",e)},VUEX_SETTING_META:function(t,e){t.commit("VUEX_SETTING_META",e)},VUEX_SETTING_IS_PAGE:function(t,e){t.commit("VUEX_SETTING_IS_PAGE",e)}},mutations:{VUEX_SETTING_PAGE:function(t,e){t.vuex_setting_page=e},VUEX_ADD_META_INFO:function(t,e){t.vuex_add_meta_info=e},VUEX_PAGE_METAS:function(t,e){t.vuex_page_metas=e},VUEX_SETTING_META:function(t,e){t.vuex_setting_meta=e},VUEX_SETTING_IS_PAGE:function(t,e){t.vuex_setting_is_page=e}}}}),M=a("aozt"),P=a.n(M),x=a("FyQk").default;window.SERVICE=function(t,e,a,n){var s=x[t],i=s.method||"get",o=(s.isRequestBody,s.url);o?("get"===i&&P.a.get(o,{params:e}).then(function(t){a(t.data)}).catch(n),"post"===i&&P.a.post(o,{params:e}).then(function(t){a(t.data)}).catch(n)):console.warn("not config url!!!")},n.default.config.productionTip=!1,n.default.use(E.a),n.default.use(s.a);var L=new s.a.Store({state:{},mutations:{},actions:{},modules:T});a("bzuE"),window.vueInstance=new n.default({el:"#app",router:S,store:L,components:{App:o},template:"<App/>"})},"QDC/":function(t,e){},XqRM:function(t,e){},bzuE:function(t,e){window.GC={},GC.metaTypeList=[{id:"01",name:"基础",fontawesomeIcon:"fa fa-cube"},{id:"02",name:"内容",fontawesomeIcon:"fa fa-cubes"},{id:"03",name:"图片",fontawesomeIcon:"fa fa-image"}],GC.metaList=[{id:"001",meta:"richText",name:"富文本",type:"01",fontawesomeIcon:"fa fa-cubes"},{id:"002",meta:"carousel",name:"轮播图",type:"01",fontawesomeIcon:"fa fa-cubes"},{id:"003",meta:"bottomMenu",name:"自定义菜单",type:"01",fontawesomeIcon:"fa fa-cubes"},{id:"0031",name:"自定义菜单1",type:"01",fontawesomeIcon:"fa fa-cubes"},{id:"0032",name:"自定义菜单2",type:"01",fontawesomeIcon:"fa fa-cubes"},{id:"0033",name:"自定义菜单3",type:"02",fontawesomeIcon:"fa fa-cubes"},{id:"0034",name:"自定义菜单4",type:"02",fontawesomeIcon:"fa fa-cubes"},{id:"0034",name:"自定义菜单4",type:"02",fontawesomeIcon:"fa fa-cubes"},{id:"0034",name:"自定义菜单4",type:"03",fontawesomeIcon:"fa fa-cubes"},{id:"0034",name:"自定义菜单4",type:"03",fontawesomeIcon:"fa fa-cubes"},{id:"0034",name:"自定义菜单4",type:"03",fontawesomeIcon:"fa fa-cubes"},{id:"0034",name:"自定义菜单4",type:"03",fontawesomeIcon:"fa fa-cubes"},{id:"0034",name:"自定义菜单4",type:"03",fontawesomeIcon:"fa fa-cubes"},{id:"0034",name:"自定义菜单4",type:"03",fontawesomeIcon:"fa fa-cubes"},{id:"0034",name:"自定义菜单4",type:"03",fontawesomeIcon:"fa fa-cubes"},{id:"0034",name:"自定义菜单4",type:"03",fontawesomeIcon:"fa fa-cubes"},{id:"0034",name:"自定义菜单4",type:"03",fontawesomeIcon:"fa fa-cubes"}],GC.metaListMap={};for(var a=0;a<GC.metaList.length;a++)GC.metaListMap[GC.metaList[a].id]=GC.metaList[a];window.messageWithConsoleLog=!1,window.message={warn:function(t){window.messageWithConsoleLog&&console.log(t),window.vueInstance.$message.warning(t)},info:function(t){window.messageWithConsoleLog&&console.log(t),window.vueInstance.$message(t)},success:function(t){window.messageWithConsoleLog&&console.log(t),window.vueInstance.$message.success(t)},error:function(t){window.messageWithConsoleLog&&console.log(t),window.vueInstance.$message.error(t)}}},q3uj:function(t,e){},ui8E:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a975de24251a4f972d21.js.map