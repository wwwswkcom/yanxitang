(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f88da1d2"],{4922:function(t,e,a){},"686c":function(t,e,a){},"727c":function(t,e,a){"use strict";a("686c")},a56c:function(t,e,a){},b538:function(t,e,a){},d43d:function(t,e,a){"use strict";a("a56c")},e382:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("commonForm",{attrs:{inline:!0,data:t.getInfoData,formConfig:t.formConfig}}),t.total>0?a("JsonExcel",{staticClass:"export-excel-wrapper",attrs:{data:t.downloaddata,fields:t.json_fields,name:"销售退货.xls"}},[a("el-button",{attrs:{type:"primary",size:"small"}},[t._v("导出EXCEL")])],1):t._e(),a("el-table",{staticClass:"forms",attrs:{data:t.tabData,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"往来帐日期",width:"120",label:"往来帐日期"}}),a("el-table-column",{attrs:{prop:"客户名称","min-width":"120",label:"客户名称"}}),a("el-table-column",{attrs:{prop:"商品编码",width:"120",label:"商品编码"}}),a("el-table-column",{attrs:{"min-width":"130",prop:"商品名称",label:"商品名称"}}),a("el-table-column",{attrs:{prop:"商品规格",width:"120",label:"商品规格"}}),a("el-table-column",{attrs:{prop:"商品单位","min-width":"130",label:"商品单位"}}),a("el-table-column",{attrs:{label:"生产企业名称","min-width":"130",prop:"生产企业名称"}}),a("el-table-column",{attrs:{label:"商品批号",width:"120",prop:"商品批号"}}),a("el-table-column",{attrs:{label:"数量",width:"120",prop:"数量"}}),a("el-table-column",{attrs:{label:"业务机构群",prop:"业务机构群"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.getInfoData.offset,limit:t.getInfoData.limit},on:{"update:page":function(e){return t.$set(t.getInfoData,"offset",e)},"update:limit":function(e){return t.$set(t.getInfoData,"limit",e)},pagination:t.gitList}})],1)},i=[],n=(a("ace4"),a("d3b7"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("fb6a"),a("25ca")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-form"},[a("el-form",{ref:"form",staticClass:"className",attrs:{size:"small",labelWidth:t.labelWidth+"px",inline:t.inline,model:t.data}},[a("el-row",{attrs:{gutter:10}},t._l(t.formConfig.formItemList,(function(e,l){return a("el-col",{key:l,attrs:{md:"datetimerange"===e.type||"daterange"==e.type?12:6,lg:"datetimerange"===e.type||"daterange"==e.type?8:4}},[a("el-form-item",{staticClass:"mt",attrs:{rules:e.rules,prop:e.value,label:e.label}},["slot"===e.type?[t._t("form-"+e.value)]:t._e(),"input"===e.type||"number"===e.type||"password"===e.type?a("el-input",{staticClass:"mt",attrs:{clearable:e.clearable,type:e.type,disabled:e.disabled,placeholder:e.placeholder},model:{value:t.data[e.value],callback:function(a){t.$set(t.data,e.value,a)},expression:"data[item.value]"}}):t._e(),"textarea"===e.type?a("el-input",{staticClass:"mt",attrs:{type:e.type,clearable:e.clearable,disabled:e.disabled,placeholder:e.placeholder,autosize:e.autosize},model:{value:t.data[e.value],callback:function(a){t.$set(t.data,e.value,"string"===typeof a?a.trim():a)},expression:"data[item.value]"}}):t._e(),"select"===e.type?a("el-select",{staticClass:"mt",staticStyle:{width:"100%"},attrs:{disabled:e.disabled,clearable:e.clearable,placeholder:e.placeholder},model:{value:t.data[e.value],callback:function(a){t.$set(t.data,e.value,a)},expression:"data[item.value]"}},t._l(e.options,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1):t._e(),"datetimerange"===e.type?a("el-date-picker",{staticClass:"mt",staticStyle:{width:"100%"},attrs:{"picker-options":e.pickerOptions,size:e.size,id:"timees",type:e.type,"value-format":e.dateFormate,"start-placeholder":e.startPlaceholder||"选择开始时间","end-placeholder":e.endPlaceholder||"选择结束时间"},model:{value:t.data[e.value],callback:function(a){t.$set(t.data,e.value,a)},expression:"data[item.value]"}}):t._e(),"daterange"===e.type?a("el-date-picker",{staticClass:"mt",staticStyle:{width:"100%"},attrs:{size:e.size,"picker-options":e.pickerOptions,type:e.type,"value-format":e.dateFormate,"start-placeholder":e.startPlaceholder||"选择开始时间","end-placeholder":e.endPlaceholder||"选择结束时间"},model:{value:t.data[e.value],callback:function(a){t.$set(t.data,e.value,a)},expression:"data[item.value]"}}):t._e(),"date"===e.type?a("el-date-picker",{staticClass:"mt",staticStyle:{width:"100%"},attrs:{size:e.size,"picker-options":e.pickerOptions,type:e.type,"value-format":e.dateFormate,placeholder:e.placeholder||"选择日期"},model:{value:t.data[e.value],callback:function(a){t.$set(t.data,e.value,a)},expression:"data[item.value]"}}):t._e(),"datetime"===e.type?a("el-date-picker",{staticClass:"mt",staticStyle:{width:"100%"},attrs:{size:e.size,"picker-options":e.pickerOptions,type:e.type,"value-format":e.dateFormate,placeholder:e.placeholder||"选择日期"},model:{value:t.data[e.value],callback:function(a){t.$set(t.data,e.value,a)},expression:"data[item.value]"}}):t._e(),"month"===e.type?a("el-date-picker",{staticClass:"mt",staticStyle:{width:"100%"},attrs:{size:e.size,"picker-options":e.pickerOptions,type:e.type,"value-format":e.dateFormate,placeholder:e.placeholder||"选择日期"},model:{value:t.data[e.value],callback:function(a){t.$set(t.data,e.value,a)},expression:"data[item.value]"}}):t._e(),"button"===e.type?a("el-button",{staticClass:"mt",attrs:{type:e.value,size:e.size},on:{click:e.handleClick}},[t._v(t._s(e.name))]):t._e()],2)],1)})),1),a("div",t._l(t.formConfig.operate,(function(e,l){return a("el-form-item",{key:l},[e.authBtn&&"button"===e.type?a("el-button",{staticClass:"mt",attrs:{type:e.value,size:e.size},on:{click:e.handleClick}},[t._v(t._s(e.name))]):t._e(),e.authBtn&&"slot"===e.type?[t._t("form-"+e.value)]:t._e()],2)})),1)],1)],1)},r=[],s=(a("a9e3"),{props:{data:{type:Object,default:function(){}},formConfig:{type:Object,default:function(){}},inline:{type:Boolean,default:!1},labelWidth:{type:Number,default:100}},created:function(){},methods:{search:function(){this.$emit("search",data)},clearInput:function(){this.$emit("clearInput")}}}),c=s,d=(a("727c"),a("f709"),a("2877")),u=Object(d["a"])(c,o,r,!1,null,"a3ca1d6a",null),p=u.exports,m=(a("21a6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)}),f=[];Math.easeInOutQuad=function(t,e,a,l){return t/=l/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var h=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function g(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function b(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function y(t,e,a){var l=b(),i=t-l,n=20,o=0;e="undefined"===typeof e?500:e;var r=function t(){o+=n;var r=Math.easeInOutQuad(o,l,i,e);g(r),o<e?h(t):a&&"function"===typeof a&&a()};r()}var v={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"prev, pager, next"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&y(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&y(0,800)}}},w=v,k=(a("f8c1"),Object(d["a"])(w,m,f,!1,null,"063a2153",null)),D=k.exports,C=a("f2d9"),_={components:{commonForm:p,pagination:D,JsonExcel:C["a"]},data:function(){return{json_fields:{"往来帐日期":"往来帐日期","客户名称":"客户名称","商品编码":"商品编码","商品名称":"商品名称","商品规格":"商品规格","商品单位":"商品单位","生产企业名称":"生产企业名称","商品批号":"商品批号","数量":"数量","业务机构群":"业务机构群"},tabData:[],alldata:[],downloaddata:[],total:0,getInfoData:{limit:10,offset:1,startDelTime:[],startStartTime:"",endStartTime:""},formConfig:{formItemList:[{label:"",value:"startDelTime",clearable:!0,startPlaceholder:"开始日期",endPlaceholder:"结束日期",type:"daterange",dateFormate:"yyyy-MM-dd"}],operate:[{name:"搜索",value:"primary",type:"button",handleClick:this.gitList,authBtn:!0},{name:"清空搜索条件",value:"",type:"button",handleClick:this.clearInput,authBtn:!0}]}}},mounted:function(){this.readWorkbookFromRemoteFile("https://wwwswkcom.github.io/yanxitang-data/销售退货表.xls")},methods:{clearInput:function(){this.getInfoData={limit:10,offset:1,startDelTime:[],startStartTime:"",endStartTime:""}},readWorkbookFromRemoteFile:function(t){var e=this,a=new XMLHttpRequest;a.open("get",t,!0),a.responseType="arraybuffer";a.onload=function(t){if(200===a.status){var l=new Uint8Array(a.response),i=n["a"](l,{type:"array"}),o=i.SheetNames[0];e.alldata=n["b"].sheet_to_json(i.Sheets[o]),console.log(e.alldata),console.log(e.tabData.length)}fileReader.readAsBinaryString(files[0])},a.send()},gitList:function(){if(this.getInfoData.startDelTime&&this.getInfoData.startDelTime.length>0){this.getInfoData.startStartTime=this.getInfoData.startDelTime?this.getInfoData.startDelTime[0]:"",this.getInfoData.endStartTime=this.getInfoData.startDelTime?this.getInfoData.startDelTime[1]:"";for(var t=[],e=0;e<this.alldata.length;e++)this.getInfoData.startStartTime<=this.alldata[e]["往来帐日期"]&&this.alldata[e]["往来帐日期"]<this.getInfoData.endStartTime&&t.push(this.alldata[e]);this.downloaddata=t,this.total=t.length,this.tabData=t.slice((this.getInfoData.offset-1)*this.getInfoData.limit,this.getInfoData.offset*this.getInfoData.limit)}else this.downloaddata=[],this.total=0,this.tabData=[]},formatDate:function(t,e){var a=t-1,l=Math.round(24*(a-Math.floor(a))*60*60),i=new Date(1900,0,a,0,0,l),n=i.getFullYear(),o=i.getMonth()+1,r=i.getDate();return n+e+(o<10?"0"+o:o)+e+(r<10?"0"+r:r)}}},z=_,S=(a("d43d"),Object(d["a"])(z,l,i,!1,null,"0a046616",null));e["default"]=S.exports},f709:function(t,e,a){"use strict";a("4922")},f8c1:function(t,e,a){"use strict";a("b538")}}]);