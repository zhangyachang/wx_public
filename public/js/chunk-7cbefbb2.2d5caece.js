(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cbefbb2"],{"0207":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("CContentHeader",{attrs:{isShowIcon:!0,content:"修改角色"}}),i("div",{staticClass:"c_create_roles_main"},[i("h3",[e._v("名称")]),i("div",{staticClass:"c_create_roles_total"},[i("div",{staticClass:"c_create_roles_input c_input_color"},[i("span",[e._v("角色名称：")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"c_create_roles_input_frame",attrs:{type:"text",placeholder:"请输入名称"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),i("div",{staticClass:"c_create_roles_input c_input_color"},[i("span",[e._v("角色别名：")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.alias,expression:"alias"}],staticClass:"c_create_roles_input_frame",attrs:{type:"text",placeholder:"请输入别名"},domProps:{value:e.alias},on:{input:function(t){t.target.composing||(e.alias=t.target.value)}}})])]),i("div",{staticClass:"c_create_roles_describe_box"},[i("div",{staticClass:"c_create_roles_describe c_input_color"},[i("span",[e._v("角色描述：")]),i("el-input",{attrs:{type:"textarea",autosize:{minRows:3},placeholder:"请输入"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)]),i("h3",[e._v("权限")]),i("div",{staticClass:"c_create_roles_power"},[i("span",[e._v("角色权限：")]),i("el-button",{staticClass:"c_create_roles_power_but",attrs:{type:"info",plain:""},on:{click:e.dialog}},[e._v("选择权限"),i("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1),i("div",{staticClass:"c_create_roles_choice"},[i("span",[e._v("已选权限：")]),i("div",{staticClass:"c_create_roles_power_text"},e._l(e.setPowerList,function(t){return i("div",{key:t.id,staticClass:"c_create_roles_power_name"},[e._v("\n                    "+e._s(t.name)+"\n                ")])}),0)]),i("div",{staticClass:"c_create_roles_foot"},[i("el-button",{staticClass:"c_create_roles_foot_btn",attrs:{type:"primary"},on:{click:e.addRoleBtn}},[e._v("完成")])],1)]),i("div",{staticClass:"c_elastic_frame"},[i("PowerDeploy",{attrs:{title:"选择菜单权限",twoTitle:"角色将拥有以下菜单权限",dialogShow:e.dialogShow,powerList:e.powerList},on:{"update:dialogShow":function(t){e.dialogShow=t},"update:dialog-show":function(t){e.dialogShow=t},submit:e.submitBtn,reset:e.resetBtn}})],1)],1)},s=[],o=(i("96cf"),i("3b8d")),a=i("edd2"),r=i("5118"),c={data:function(){return{userName:"",description:"",alias:"",dialogShow:!1,powerList:[],setPowerList:[],roleid:"",company_id:"cp_001",user_id:"user_001"}},mounted:function(){console.log(this.$route.params.id),this.roleid=this.$route.params.id,this.getOne()},methods:{submitBtn:function(e){this.setPowerList=JSON.parse(JSON.stringify(e)),console.log(this.setPowerList),this.dialogShow=!1},resetBtn:function(){this.dialogShow=!1},dialog:function(){this.dialogShow=!0,0!==this.setPowerList.length&&(this.powerList=JSON.parse(JSON.stringify(this.setPowerList)))},getOne:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(this.user_id),e.next=3,this.$api.authorized.getOne({company_id:this.company_id,user_id:this.user_id,roleid:this.roleid});case 3:if(t=e.sent,console.log("获取到了。。。"),console.log(t),75200===t.statusCode){e.next=8;break}return e.abrupt("return",this.$zero.ToastWarning("服务异常，请稍后再试"));case 8:for(this.userName=t.role._name,this.alias=t.role.alias,this.description=t.role.description,i=0;i<t.role.menus.length;i++)this.setPowerList[i]={name:t.role.menus[i]._name,id:t.role.menus[i]._id,level:t.role.menus[i].level,serial:t.role.menus[i].serial,parent_id:t.role.menus[i].parent_id};case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),addRoleBtn:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,i,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(t=[],i=0;i<this.setPowerList.length;i++)t.push(this.setPowerList[i].id);return e.next=4,this.$api.authorized.addMenu({menus:t,role_id:this.roleid});case 4:if(n=e.sent,console.log(n),75200!==n.statusCode){e.next=11;break}this.$zero.ToastSuccess("修改成功！"),Object(r["setTimeout"])(function(){window.location.href="/power"},2e3),e.next=12;break;case 11:return e.abrupt("return",this.$zero.ToastWarning("服务异常，请稍后再试"));case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},beforeDestroy:function(){this.$zero.eventBus.$off("addBookLoadMore"),this.$zero.eventBus.$off("departmentItem")},components:{PowerDeploy:a["a"]}},l=c,u=(i("60c7"),i("2877")),d=Object(u["a"])(l,n,s,!1,null,"54208877",null);t["default"]=d.exports},"05e2":function(e,t,i){},5118:function(e,t,i){(function(e){var n="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,s=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(s.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new o(s.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},i("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,i("c8ba"))},6017:function(e,t,i){(function(e,t){(function(e,i){"use strict";if(!e.setImmediate){var n,s=1,o={},a=!1,r=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?f():m()?_():e.MessageChannel?h():r&&"onreadystatechange"in r.createElement("script")?v():g(),c.setImmediate=l,c.clearImmediate=u}function l(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),i=0;i<t.length;i++)t[i]=arguments[i+1];var a={callback:e,args:t};return o[s]=a,n(s),s++}function u(e){delete o[e]}function d(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(i,n);break}}function p(e){if(a)setTimeout(p,0,e);else{var t=o[e];if(t){a=!0;try{d(t)}finally{u(e),a=!1}}}}function f(){n=function(e){t.nextTick(function(){p(e)})}}function m(){if(e.postMessage&&!e.importScripts){var t=!0,i=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=i,t}}function _(){var t="setImmediate$"+Math.random()+"$",i=function(i){i.source===e&&"string"===typeof i.data&&0===i.data.indexOf(t)&&p(+i.data.slice(t.length))};e.addEventListener?e.addEventListener("message",i,!1):e.attachEvent("onmessage",i),n=function(i){e.postMessage(t+i,"*")}}function h(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;p(t)},n=function(t){e.port2.postMessage(t)}}function v(){var e=r.documentElement;n=function(t){var i=r.createElement("script");i.onreadystatechange=function(){p(t),i.onreadystatechange=null,e.removeChild(i),i=null},e.appendChild(i)}}function g(){n=function(e){setTimeout(p,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,i("c8ba"),i("f28c"))},"60c7":function(e,t,i){"use strict";var n=i("05e2"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-7cbefbb2.2d5caece.js.map