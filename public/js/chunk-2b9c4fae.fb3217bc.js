(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b9c4fae"],{"195b":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("CContentHeader",{attrs:{isShowIcon:!0,content:e.title}}),r("div",{staticClass:"c_create_roles_main"},[r("h3",[e._v("名称")]),r("div",{staticClass:"c_create_roles_total"},[r("div",{staticClass:"c_create_roles_input c_input_color"},[r("span",[e._v("角色名称：")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"c_create_roles_input_frame",attrs:{type:"text",placeholder:"请输入名称"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),r("div",{staticClass:"c_create_roles_input c_input_color"},[r("span",[e._v("角色别名：")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.alias,expression:"alias"}],staticClass:"c_create_roles_input_frame",attrs:{type:"text",placeholder:"请输入别名"},domProps:{value:e.alias},on:{input:function(t){t.target.composing||(e.alias=t.target.value)}}})])]),r("div",{staticClass:"c_create_roles_describe_box"},[r("div",{staticClass:"c_create_roles_describe c_input_color"},[r("span",[e._v("角色描述：")]),r("el-input",{attrs:{type:"textarea",autosize:{minRows:3},placeholder:"请输入"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)]),r("h3",[e._v("权限")]),r("div",{staticClass:"c_create_roles_power"},[r("span",[e._v("角色权限：")]),r("el-button",{staticClass:"c_create_roles_power_but",attrs:{type:"info",plain:""},on:{click:e.dialog}},[e._v("选择权限"),r("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1),r("div",{staticClass:"c_create_roles_choice"},[r("span",[e._v("已选权限：")]),r("div",{staticClass:"c_create_roles_power_text"},e._l(e.setPowerList,function(t){return r("div",{key:t.id,staticClass:"c_create_roles_power_name"},[e._v("\n                    "+e._s(t.name)+"\n                ")])}),0)]),r("div",{staticClass:"c_create_roles_foot"},[r("el-button",{staticClass:"c_create_roles_foot_btn",attrs:{type:"primary"},on:{click:e.addRoleBtn}},[e._v("完成")])],1)]),r("div",{staticClass:"c_elastic_frame"},[r("PowerDeploy",{attrs:{title:"选择菜单权限",twoTitle:"角色将拥有以下菜单权限",dialogShow:e.dialogShow,powerList:e.powerList},on:{"update:dialogShow":function(t){e.dialogShow=t},"update:dialog-show":function(t){e.dialogShow=t},submit:e.submitBtn,reset:e.resetBtn}})],1)],1)},i=[],a=(r("a481"),r("96cf"),r("3b8d")),o=r("edd2"),n={data:function(){return{title:"新建角色",userName:"",description:"",roleId:"",alias:"",dialogShow:!1,powerList:[],setPowerList:[],user_id:"user_001",company_id:"cp_001"}},mounted:function(){console.log(this.$route.params.id),this.roleId=this.$route.params.id,this.roleId&&(console.log("我进来没"),this.title="修改角色",this.getOne())},methods:{submitBtn:function(e){this.setPowerList=JSON.parse(JSON.stringify(e)),this.dialogShow=!1},resetBtn:function(){this.dialogShow=!1},dialog:function(){this.dialogShow=!0,0!==this.setPowerList.length&&(this.powerList=JSON.parse(JSON.stringify(this.setPowerList)))},addRole:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,r,s){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.authorized.addRole({userName:t,description:this.description,menus:s,alias:r});case 2:i=e.sent,console.log(i),75200===i.statusCode?(this.$zero.ToastSuccess("新建成功！"),setTimeout(function(){window.location.href="/power"},2e3)):this.$zero.ToastWarning(i.msg);case 5:case"end":return e.stop()}},e,this)}));function t(t,r,s){return e.apply(this,arguments)}return t}(),reviseRole:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,r,s){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.authorized.reviseRole({roleid:this.roleId,name:t,alias:r,description:this.description,menus:s,company_id:this.company_id});case 2:i=e.sent,console.log(i),75200===i.statusCode?(this.$zero.ToastSuccess("修改成功！"),setTimeout(function(){window.location.href="/power"},2e3)):this.$zero.ToastWarning(i.msg);case 5:case"end":return e.stop()}},e,this)}));function t(t,r,s){return e.apply(this,arguments)}return t}(),getOne:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(this.user_id),e.next=3,this.$api.authorized.getOne({company_id:this.company_id,user_id:this.user_id,roleid:this.roleId});case 3:if(t=e.sent,console.log("获取到了。。。"),console.log(t),75200===t.statusCode){e.next=8;break}return e.abrupt("return",this.$zero.ToastWarning("服务异常，请稍后再试"));case 8:for(this.userName=t.role._name,this.alias=t.role.alias,this.description=t.role.description,r=0;r<t.role.menus.length;r++)this.setPowerList[r]={name:t.role.menus[r]._name,id:t.role.menus[r]._id,level:t.role.menus[r].level,serial:t.role.menus[r].serial,parent_id:t.role.menus[r].parent_id};case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),addRoleBtn:function(){for(var e=[],t=0;t<this.setPowerList.length;t++)e.push(this.setPowerList[t].id);var r=/^[a-zA-Z]/,s=this.userName.replace(/^\s*|\s*$/g,""),i=this.alias.replace(/^\s*|\s*$/g,"");""!==s?r.test(i)?"root"!==i.toLowerCase()?0!==e.length?this.roleId?this.reviseRole(s,i,e):this.addRole(s,i,e):this.$zero.ToastWarning("请选择权限"):this.$zero.ToastWarning("不可使用root别名"):this.$zero.ToastWarning("角色别名格式错误，请字母开头"):this.$zero.ToastWarning("角色名称不能为空")}},beforeDestroy:function(){this.$zero.eventBus.$off("addBookLoadMore"),this.$zero.eventBus.$off("departmentItem")},components:{PowerDeploy:o["a"]}},c=n,l=(r("d933"),r("2877")),u=Object(l["a"])(c,s,i,!1,null,"90e06dd8",null);t["default"]=u.exports},a481:function(e,t,r){"use strict";var s=r("cb7c"),i=r("4bf8"),a=r("9def"),o=r("4588"),n=r("0390"),c=r("5f1b"),l=Math.max,u=Math.min,d=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,_=function(e){return void 0===e?e:String(e)};r("214f")("replace",2,function(e,t,r,v){return[function(s,i){var a=e(this),o=void 0==s?void 0:s[t];return void 0!==o?o.call(s,a,i):r.call(String(a),s,i)},function(e,t){var i=v(r,e,this,t);if(i.done)return i.value;var d=s(e),h=String(this),p="function"===typeof t;p||(t=String(t));var m=d.global;if(m){var g=d.unicode;d.lastIndex=0}var w=[];while(1){var b=c(d,h);if(null===b)break;if(w.push(b),!m)break;var $=String(b[0]);""===$&&(d.lastIndex=n(h,a(d.lastIndex),g))}for(var C="",S=0,y=0;y<w.length;y++){b=w[y];for(var x=String(b[0]),z=l(u(o(b.index),h.length),0),k=[],R=1;R<b.length;R++)k.push(_(b[R]));var L=b.groups;if(p){var N=[x].concat(k,z,h);void 0!==L&&N.push(L);var P=String(t.apply(void 0,N))}else P=f(x,h,z,k,L,t);z>=S&&(C+=h.slice(S,z)+P,S=z+x.length)}return C+h.slice(S)}];function f(e,t,s,a,o,n){var c=s+e.length,l=a.length,u=p;return void 0!==o&&(o=i(o),u=h),r.call(n,u,function(r,i){var n;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,s);case"'":return t.slice(c);case"<":n=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return r;if(u>l){var h=d(u/10);return 0===h?r:h<=l?void 0===a[h-1]?i.charAt(1):a[h-1]+i.charAt(1):r}n=a[u-1]}return void 0===n?"":n})}})},d933:function(e,t,r){"use strict";var s=r("e79f"),i=r.n(s);i.a},e79f:function(e,t,r){}}]);
//# sourceMappingURL=chunk-2b9c4fae.fb3217bc.js.map