(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-541850d0","chunk-0f7b84f0","chunk-54cfadf6"],{"314a":function(t,n,o){"use strict";o("7936")},"3a2d":function(t,n,o){"use strict";o.d(n,"j",(function(){return r})),o.d(n,"h",(function(){return l})),o.d(n,"i",(function(){return s})),o.d(n,"m",(function(){return u})),o.d(n,"k",(function(){return p})),o.d(n,"l",(function(){return d})),o.d(n,"a",(function(){return m})),o.d(n,"n",(function(){return f})),o.d(n,"e",(function(){return h})),o.d(n,"g",(function(){return g})),o.d(n,"d",(function(){return y})),o.d(n,"f",(function(){return v})),o.d(n,"b",(function(){return b})),o.d(n,"c",(function(){return C}));o("99af");var e=o("751a"),a=o("4328"),c=o.n(a),i="/api/user-service";function r(t,n){return e["a"].post("".concat(i,"/account/login_c?email=").concat(t,"&type=2&typeCode=").concat(n))}function l(t,n){return e["a"].post("".concat(i,"/account/login_c?email=").concat(t,"&type=1&typeCode=").concat(n))}function s(t){return e["a"].post("".concat(i,"/auth/send?target=").concat(t,"&type=EMAIL_LOGIN"))}function u(t){return e["a"].post("".concat(i,"/auth/send?target=").concat(t,"&type=EMAIL_SIGNUP"))}function p(t,n){return e["a"].post("".concat(i,"/auth/check?type=EMAIL_SIGNUP&target=").concat(t,"&authCode=").concat(n))}function d(t){return e["a"].post("".concat(i,"/account/signup_c"),c.a.stringify(t))}function m(){return e["a"].get("".concat(i,"/account/info"))}function f(t){return e["a"].post("".concat(i,"/account/update_info"),c.a.stringify(t))}function h(t){return e["a"].post("".concat(i,"/auth/send?target=").concat(t,"&type=EMAIL_VALID"))}function g(t){return e["a"].post("".concat(i,"/auth/send?target=").concat(t,"&type=PHONE_VALID"))}function y(t,n){return e["a"].post("".concat(i,"/account/update_email?authCode=").concat(t,"&email=").concat(n))}function v(t,n){return e["a"].post("".concat(i,"/account/update_phone?authCode=").concat(t,"&email=").concat(n))}function b(){return e["a"].get("".concat(i,"/company/info"))}function C(t){return e["a"].post("".concat(i,"/company/update_info"),c.a.stringify(t))}},"645b":function(t,n,o){"use strict";o("9462")},7936:function(t,n,o){},"857a":function(t,n,o){var e=o("1d80"),a=/"/g;t.exports=function(t,n,o,c){var i=String(e(t)),r="<"+n;return""!==o&&(r+=" "+o+'="'+String(c).replace(a,"&quot;")+'"'),r+">"+i+"</"+n+">"}},9462:function(t,n,o){},"94c5":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"left"},[e("el-upload",{staticClass:"upload-logo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture"}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传logo")])],1)],1),e("div",{staticClass:"center"},[e("el-button",{staticClass:"create-event",attrs:{type:"success"},on:{click:t.createEvent}},[t._v("创建新活动")]),e("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:t.input3,callback:function(n){t.input3=n},expression:"input3"}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),e("div",{staticClass:"right"},[e("div",{staticClass:"sign-out"},[e("img",{staticStyle:{width:"20px"},attrs:{src:o("e011"),alt:""}}),e("span",{on:{click:t.loginOut}},[t._v("退出")])])])])},a=[],c={data:function(){return{input3:""}},methods:{createEvent:function(){this.$router.push("/event")},loginOut:function(){this.$router.push("/")}}},i=c,r=(o("eabf"),o("2877")),l=Object(r["a"])(i,e,a,!1,null,"936bb112",null);n["a"]=l.exports},9911:function(t,n,o){"use strict";var e=o("23e7"),a=o("857a"),c=o("af03");e({target:"String",proto:!0,forced:c("link")},{link:function(t){return a(this,"a","href",t)}})},af03:function(t,n,o){var e=o("d039");t.exports=function(t){return e((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},b566:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("fragment",{staticClass:"sidebar-item"},[t._l(t.menu,(function(n){return[n.children?t._e():o("el-menu-item",{key:n.path,attrs:{index:n.path}},[o("i",{class:n.icon}),o("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(n.title))])]),n.children?o("el-submenu",{key:n.path,attrs:{index:n.path}},[o("template",{slot:"title"},[o("i",{class:n.icon}),o("span",[t._v(" "+t._s(n.title))])]),o("sidebar-item",{attrs:{menu:n.children,parent:t.parent?t.parent+"/"+n.path:n.path}})],2):t._e()]}))],2)},a=[],c={name:"SidebarItem",props:["menu","parent"],data:function(){return{}}},i=c,r=o("2877"),l=Object(r["a"])(i,e,a,!1,null,null,null);n["a"]=l.exports},ce66:function(t,n,o){},dfaa:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"container"},[o("el-aside",{attrs:{width:"190px"}},[o("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.path,router:""}},[o("NavMenu",{attrs:{menu:t.navs}})],1)],1)],1)},a=[],c=(o("d3b7"),o("3ca3"),o("ddb0"),o("b566")),i=function(){return Promise.all([o.e("chunk-318279c8"),o.e("chunk-54cfadf6")]).then(o.bind(null,"fe80"))},r=function(){return Promise.all([o.e("chunk-318279c8"),o.e("chunk-61739357")]).then(o.bind(null,"c484"))},l=function(){return Promise.all([o.e("chunk-318279c8"),o.e("chunk-757030bb")]).then(o.bind(null,"0e5c"))},s={props:["webId"],name:"XtAside",components:{NavMenu:c["a"]},data:function(){return{path:"",navs:[{id:1,path:"/compony",comm:i,title:"公司设置",icon:"el-icon-office-building"},{id:2,path:"/account",comm:r,title:"账户管理",icon:"el-icon-bank-card",children:[{id:11,title:"注册信息",icon:"",path:"/account/info",comm:r}]},{id:3,path:"/event-list",comm:l,title:"活动列表",icon:"el-icon-wind-power"}]}},methods:{onRouteChanged:function(){this.path=this.$route.path}},created:function(){this.onRouteChanged()},watch:{$route:"onRouteChanged"}},u=s,p=(o("645b"),o("2877")),d=Object(p["a"])(u,e,a,!1,null,"6fd4389e",null);n["a"]=d.exports},e011:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAsCAYAAAAXb/p7AAAC3ElEQVRYR+1ZPWgUQRR+b3YvOWKEKEggTQz+Flr40wYlIgQkkirY2szcnoU5DLGwcAl2QjiN2dtZNaWlAQsrRRttJCksFAkRf2IRkeQCcneE7DzZECVeotm5uVyuuOtu7/u++fjezJt3LAIACCGGiOgGALRF37fjg4iLAHBLSjmqo4+pVGq/UuojAKAOsUIsJRKJrvHx8c9x+eg4zpkwDF/GJZjiLMs6msvlPsTViRI8q5R6EZdgiLsbBMFVHY3NDM4xxrp1ROJgk8lkPpvN5uNg12M2GETET1LKLl2h7cI3DJom20iwkaBpAqb8xh7cLMFMJrO3WCx29vT0vB0YGAj/l3LNE3Qcp1sp9ZSIWgFgmjF20ff9b/8yWXODnPNJAOhfZ+iLbdu9nue938xkzQ0KIe4R0ZUyMwu2bfd5nve63GTNDUb7r1AoPCOiE38NBYhFxtilXC73ZMeHheHh4d1LS0uTRHSuLLHowKSCIHjw+3lFCXLOEy0tLbtMelypVGpSSk0AwIUNZUW8KaUciZ5rG+ScR8TrANBkYnArLiKOSimvaRlMp9MHV1ZWZrYSr9bviHi4rg3atn1Iy2CUTA1LnJVSZrQNrpk0PiRhGCaWl5cfElFfVQ9JNfZXOp1uDcPwMRGdL28zjDHH9/37Rm3GxOTg4GBboVB4DgAn67JRCyFuE9FQmblFROzzff/Vjl91QogJIrr8p4SIXwGgV0r5ri6GBc75cQCISrwPAKaam5v7x8bG5upm3IqMuK6bnJ+f72xvb59xXVfV1cCqe8Aq6oO6i5jgGwZN0qto3DJdUJffKLFuYlveJACQZ4zdMRUu5yulFgDgURAEP3S0kXMeXdpTOiQD7GxHR8cx13VLcTVQCHGaiN7EJVQBdyoIgum4Ohj9Bczn87Nrd2NcXkU4RPxuWdYBz/N+xhVYfXnjOM4RpVSKiPbEJVaAW7AsS+q8I1ntgxUsVFPKL7IbAwfraSJ0AAAAAElFTkSuQmCC"},eabf:function(t,n,o){"use strict";o("ce66")},fb6a:function(t,n,o){"use strict";var e=o("23e7"),a=o("861d"),c=o("e8b5"),i=o("23cb"),r=o("50c4"),l=o("fc6a"),s=o("8418"),u=o("b622"),p=o("1dde"),d=p("slice"),m=u("species"),f=[].slice,h=Math.max;e({target:"Array",proto:!0,forced:!d},{slice:function(t,n){var o,e,u,p=l(this),d=r(p.length),g=i(t,d),y=i(void 0===n?d:n,d);if(c(p)&&(o=p.constructor,"function"!=typeof o||o!==Array&&!c(o.prototype)?a(o)&&(o=o[m],null===o&&(o=void 0)):o=void 0,o===Array||void 0===o))return f.call(p,g,y);for(e=new(void 0===o?Array:o)(h(y-g,0)),u=0;g<y;g++,u++)g in p&&s(e,u,p[g]);return e.length=u,e}})},fe80:function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"container"},[o("el-container",[o("el-header",{staticClass:"account-header"},[o("Head")],1),o("el-container",{staticClass:"aside"},[o("Aside"),o("el-container",[o("el-main",[o("div",{staticClass:"main-container"},[o("h1",{staticClass:"tit"},[t._v("公司信息设置")]),o("div",{staticClass:"compony-setup"},[o("div",{staticClass:"left"},[o("div",{staticClass:"logo"},[t.defaultLogo?o("i",{staticClass:"el-icon-office-building default-logo"}):t._e(),o("img",{attrs:{src:t.componyForm.logoUrl,alt:""}})]),o("p",{staticClass:"name"},[t._v(t._s(t.componyForm.componyName))]),o("el-upload",{ref:"upload",attrs:{name:"eskFile",action:t.upload.url,"on-success":t.handleFileSuccess,"on-error":t.handleFileFail,"file-list":t.filePostList,"on-change":t.updateImg,drag:""}},[o("p",{staticClass:"name"},[t._v("上传公司 logo")])])],1),o("div",{staticClass:"right"},[o("el-form",{ref:"componyForm",attrs:{model:t.componyForm,rules:t.rules,"hide-required-asterisk":!0}},[o("el-form-item",{attrs:{label:"公司名称",prop:"componyName"}},[o("el-input",{attrs:{placeholder:"请输入公司名称",value:t.componyForm.componyName},model:{value:t.componyForm.componyName,callback:function(n){t.$set(t.componyForm,"componyName",n)},expression:"componyForm.componyName"}})],1),o("el-form-item",{attrs:{label:"一句话简要介绍",prop:"introduce"}},[o("el-input",{attrs:{placeholder:"一句话简要介绍",value:t.componyForm.introduce},model:{value:t.componyForm.introduce,callback:function(n){t.$set(t.componyForm,"introduce",n)},expression:"componyForm.introduce"}})],1),o("el-form-item",{attrs:{label:"公司域名",prop:"link"}},[o("el-input",{attrs:{placeholder:"填写公司专属域名（支持数字和英文字母的组合，3到20个字符）",value:t.componyForm.link},model:{value:t.componyForm.link,callback:function(n){t.$set(t.componyForm,"link",n)},expression:"componyForm.link"}},[o("template",{slot:"prepend"},[t._v("https://")]),o("template",{slot:"append"},[t._v(".eventsky.cn")])],2)],1),o("div",{staticClass:"compony-code"},[o("p",{staticClass:"tit"},[t._v("公司二维码")]),o("img",{attrs:{src:t.componyForm.codeUrl,alt:""}}),o("el-button",{staticClass:"save",attrs:{type:"primary"},on:{click:function(n){return t.submitComponyInfo("componyForm")}}},[t._v("确认")])],1)],1)],1)])])]),o("el-footer")],1)],1)],1)],1)},a=[],c=(o("9911"),o("fb6a"),o("94c5")),i=o("dfaa"),r=o("3a2d"),l={components:{Head:c["a"],Aside:i["a"]},data:function(){return{filePostList:[],componyForm:{componyName:"",introduce:"",link:"",codeUrl:"",logoUrl:""},rules:{componyName:[{required:!0,message:"请输入公司名称",trigger:"blur"}],introduce:[{required:!1,message:"一句话简要介绍",trigger:"change"}],link:[{required:!0,message:"填写公司专属域名（支持数字和英文字母的组合，3到20个字符）",trigger:"change"}]},upload:{url:"/file-service/upload"},defaultLogo:!0}},created:function(){this.getComponyInfo()},methods:{componyChangeInfo:function(){var t={barcodeUrl:this.componyForm.codeUrl,companyIntro:this.componyForm.introduce,companyName:this.componyForm.componyName,domain:this.componyForm.link,logoUrl:this.componyForm.logoUrl};return t},submitComponyInfo:function(t){var n=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;Object(r["c"])(n.componyChangeInfo()).then((function(t){console.log(t)}))}))},getComponyInfo:function(){var t=this;Object(r["b"])().then((function(n){console.log(n),1==n.data.rspCode&&(t.componyForm.componyName=n.data.data.companyName,t.componyForm.introduce=n.data.data.companyIntro,t.componyForm.link=n.data.data.domain,t.componyForm.codeUrl=n.data.data.barcodeUrl,t.componyForm.logoUrl=n.data.data.logoUrl)}))},handleRemove:function(t){console.log(t)},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleDownload:function(t){console.log(t)},handleFileSuccess:function(t,n,o){console.log(t),console.log(n),console.log(o),this.componyForm.logoUrl=t.filePath,this.defaultLogo=!1},handleFileFail:function(t,n,o){console.log(t),console.log(n),console.log(o),alert("上传失败")},updateImg:function(t,n){this.filePostList=n.slice(-1)}}},s=l,u=(o("314a"),o("2877")),p=Object(u["a"])(s,e,a,!1,null,"5689e916",null);n["default"]=p.exports}}]);
//# sourceMappingURL=chunk-541850d0.18ef40b6.js.map