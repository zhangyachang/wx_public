(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-498ee4c1"],{"1c82":function(e,t,i){},4358:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"c_sule_settings"},[s("div",{staticClass:"c_sule_settings_btn"},[s("el-button",{staticClass:"preserve-btn",attrs:{type:"primary"},on:{click:e.preserveBtn}},[e._v("保存")])],1),s("div",{staticClass:"c_approval_box"},[s("div",{staticClass:"c_approval_content"},[s("div",{staticClass:"c_visible_range"},[s("div",{staticClass:"c_visible_range_title"},[e._v("\n                    可见范围\n                ")]),s("div",{staticClass:"c_visible_range_range"},[e._l(e.visibleRangeList,function(t){return s("div",{key:t.depid,staticClass:"c_visible_range_range_branch"},["dep"===t.type?s("img",{attrs:{src:i("4623"),alt:""}}):s("img",{attrs:{src:i("e881"),alt:""}}),s("span",[e._v(e._s(t.name))])])}),s("div",{staticClass:"c_visible_range_range_btn",on:{click:e.reviseScope}},[e._v("\n                        修改\n                    ")])],2)]),s("div",{staticClass:"c_approval_process"},[s("div",{staticClass:"c_approval_process_title"},[e._v("\n                    审批流程\n                ")]),s("div",{staticClass:"c_approval_process_box"},[s("div",{staticClass:"c_title"},[e._v("\n                        审批人：\n                    ")]),s("div",{staticClass:"c_approval_by_list"},[e._l(e.approverPeopleList,function(t,a){return s("div",{key:a,staticClass:"flex"},[s("div",{staticClass:"c_approval_by_name"},[t.avatar?s("img",{attrs:{src:t.avatar,alt:""}}):s("img",{attrs:{src:i("963c"),alt:""}}),s("p",[e._v(e._s(t.name))])]),e._m(0,!0)])}),s("div",{staticClass:"c_approval_by_add",on:{click:e.addApproverPeople}},[s("i",{staticClass:"el-icon-plus"})])],2)]),s("div",{staticClass:"c_approval_process_box"},[s("div",{staticClass:"c_title"},[e._v("\n                        抄送人：\n                    ")]),s("div",{staticClass:"c_approval_by_list"},[e._l(e.copierPeopleList,function(t,a){return s("div",{key:a,staticClass:"flex"},[s("div",{staticClass:"c_approval_by_name"},[t.avatar?s("img",{attrs:{src:t.avatar,alt:""}}):s("img",{attrs:{src:i("963c"),alt:""}}),s("p",[e._v(e._s(t.name))])]),e._m(1,!0)])}),s("div",{staticClass:"c_approval_by_add",on:{click:e.addCopierPeople}},[s("i",{staticClass:"el-icon-plus"})])],2)]),s("div",{staticClass:"c_condition_box"},[s("div",{staticClass:"c_title"},[e._v("\n                        条件审批流程：\n                    ")]),s("div",{staticClass:"c_condition"},[s("div",{staticClass:"c_condition_btn",on:{click:e.addBtn}},[e._v("添加")]),s("p",[e._v("不同的条件，使用不同的审批流程")])])]),e._l(e.ruleList,function(t,a){return s("div",{key:a,staticClass:"c_condition_add_box"},[s("div",{staticClass:"c_condition_add_header"},[s("div",{staticClass:"c_condition_add_title"},[e._v("\n                            "+e._s(t.title)+"\n                        ")]),s("div",{staticClass:"c_condition_add_edit",on:{click:function(t){return e.editBtn(a)}}},[s("i",{staticClass:"el-icon-edit"}),e._v("\n                            编辑\n                        ")]),s("div",{staticClass:"c_condition_add_delete",on:{click:function(i){return e.deleteBtn(t._id,a)}}},[s("i",{staticClass:"el-icon-delete"})])]),s("div",{staticClass:"c_approval_process_box"},[s("div",{staticClass:"c_title no_pt"},[e._v("\n                            同时满足\n                        ")]),s("div",{staticClass:"c_approval_by_list"},[s("span",[e._v("申请人：")]),t.rule.length>3?s("div",[e._l(t.rule.slice(0,2),function(t,i){return s("span",{key:i,staticClass:"span-font"},[e._v(e._s(t.name))])}),s("span",[e._v("等")])],2):s("div",e._l(t.rule,function(t,i){return s("span",{key:i,staticClass:"span-font"},[e._v(e._s(t.name))])}),0)])]),s("div",{staticClass:"c_approval_process_box"},[s("div",{staticClass:"c_title"},[e._v("\n                            审批人\n                        ")]),e._l(t.flow,function(a,o){return s("div",{key:o,staticClass:"c_approval_by_list"},[s("div",{staticClass:"c_approval_by_name"},[a.avatar?s("img",{attrs:{src:a.avatar,alt:""}}):s("img",{attrs:{src:i("963c"),alt:""}}),s("p",[e._v(e._s(a.name))])]),o!==t.flow.length-1?s("div",{staticClass:"c_approval_by_icon"},[s("i",{staticClass:"el-icon-more"})]):e._e()])})],2),s("div",{staticClass:"c_approval_process_box"},[s("div",{staticClass:"c_title no_pt"},[e._v("\n                            抄送人\n                        ")]),s("div",{staticClass:"c_approval_by_list f12"},e._l(t.copy,function(t,i){return s("span",{key:i},[e._v(e._s(t.name))])}),0)])])}),s("div",{staticClass:"c_revoke_box"},[s("div",{staticClass:"c_title"},[e._v("\n                        撤销权限：\n                    ")]),s("div",{staticClass:"c_condition"},[s("div",{staticClass:"c_condition_radio"},[s("el-checkbox",{model:{value:e.revokePower,callback:function(t){e.revokePower=t},expression:"revokePower"}},[e._v("通过后允许撤销")])],1),s("p",[e._v("审批通过后，经审批人同意，可撤销。")])])]),s("div",{staticClass:"c_revoke_box no_flex"},[s("div",{staticClass:"c_title"},[e._v("\n                        抄送通知：\n                    ")]),s("div",[s("el-radio-group",{model:{value:e.copierNotice,callback:function(t){e.copierNotice=t},expression:"copierNotice"}},[s("div",{staticClass:"c_condition_radio"},[s("el-radio",{attrs:{label:1}},[e._v("提交申请时抄送")])],1),s("div",{staticClass:"c_condition_radio"},[s("el-radio",{attrs:{label:2}},[e._v("审批通过后抄送")])],1),s("div",{staticClass:"c_condition_radio"},[s("el-radio",{attrs:{label:3}},[e._v("提交申请时和审批通过后度抄送")])],1)])],1)])],2)])]),s("div",{staticClass:"c_elastic_frame"},[e.dialogShow?s("MaskLayer",{attrs:{title:e.title,twoTitle:e.twoTitle,isOne:e.isOne,isUser:e.isUser,dialogShow:e.dialogShow,powerList:e.powerList},on:{"update:dialogShow":function(t){e.dialogShow=t},"update:dialog-show":function(t){e.dialogShow=t},submit:e.submitBtn,reset:e.resetBtn}}):e._e()],1)])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"c_approval_by_icon"},[i("i",{staticClass:"el-icon-more"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"c_approval_by_icon"},[i("i",{staticClass:"el-icon-more"})])}],o=(i("7f7f"),i("96cf"),i("3b8d")),n=i("778c"),r=(i("5118"),{data:function(){return{isShow:!0,revokePower:!1,copierNotice:"1",title:"",twoTitle:"",dialogShow:!1,powerList:[],m_id:"",isRule:!1,isFlow:!1,isCopy:!1,isOne:!1,isUser:!1,visibleRangeList:[],approverPeopleList:[],copierPeopleList:[],ruleList:[],ruleListData:[],userid:"zxp17",isDel:!0,isNiceScroll:!1}},mounted:function(){console.log("我在吗"),this.m_id=this.$route.params.id,this.findSetTemplate(),this.getRuleTemplate()},methods:{reviseScope:function(){this.title="可见范围",this.twoTitle="以下部门或员工可见",this.dialogShow=!0,this.isRule=!0,this.isOne=!0,this.isUser=!1,this.isFlow=!1,this.isCopy=!1,console.log("可见范围"),this.powerList=JSON.parse(JSON.stringify(this.visibleRangeList))},addApproverPeople:function(){this.title="审批人",this.twoTitle="以下为审批人",this.dialogShow=!0,this.isRule=!1,this.isUser=!0,this.isFlow=!0,this.isCopy=!1,console.log("审批人"),console.log(this.approverPeopleList),this.powerList=JSON.parse(JSON.stringify(this.approverPeopleList)),console.log(this.powerList)},addCopierPeople:function(){this.title="抄送人",this.twoTitle="以下为抄送人",this.dialogShow=!0,this.isRule=!1,this.isUser=!0,this.isFlow=!1,this.isCopy=!0,console.log("抄送人"),this.powerList=JSON.parse(JSON.stringify(this.copierPeopleList))},submitBtn:function(e){this.dialogShow=!1,console.log(e);var t=e.powerList;this.isRule?this.visibleRangeList=JSON.parse(JSON.stringify(t)):this.isFlow?this.approverPeopleList=JSON.parse(JSON.stringify(t)):this.isCopy&&(this.copierPeopleList=JSON.parse(JSON.stringify(t))),this.scrollBar()},resetBtn:function(){this.dialogShow=!1},preserveBtn:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:console.log("保存了"),this.updateSetTemplate();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),updateSetTemplate:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,i,s,a,o,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(t=[],i=[],s=[],a=0;a<this.visibleRangeList.length;a++)t[a]={type:this.visibleRangeList[a].type,data:this.visibleRangeList[a].depid,name:this.visibleRangeList[a].name};for(o=0;o<this.approverPeopleList.length;o++)s.push(this.approverPeopleList[o].depid);for(n=0;n<this.copierPeopleList.length;n++)i.push(this.copierPeopleList[n].depid);return console.log(t),console.log(i),console.log(s),e.next=11,this.$api.process.updateSetTemplate({m_id:this.m_id,visibleRange:t,copierPeople:i,approverPeople:s,revokePower:this.revokePower,copierNotice:this.copierNotice});case 11:if(r=e.sent,console.log(r),75200!==r.statusCode){e.next=18;break}this.$zero.ToastSuccess("修改成功"),this.isDel=!0,e.next=19;break;case 18:return e.abrupt("return",this.$zero.ToastWarning(r.msg));case 19:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),addBtn:function(){this.isDel=!1,this.setSessionStorageData(),this.$router.push({path:"/procedureApprovalCondition"})},editBtn:function(e){this.isDel=!1,this.setSessionStorageData(e),this.$router.push({path:"/procedureApprovalCondition"})},deleteBtn:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,i){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.process.delRuleTemplate({m_id:this.m_id,r_id:t});case 2:if(s=e.sent,console.log(s),75200!==s.statusCode){e.next=11;break}return this.$zero.ToastSuccess("删除成功"),this.ruleList.splice(i,1),this.scrollBar(),e.abrupt("return");case 11:return e.abrupt("return",this.$zero.ToastWarning(s.msg));case 12:case"end":return e.stop()}},e,this)}));function t(t,i){return e.apply(this,arguments)}return t}(),findSetTemplate:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,i,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.process.findSetTemplate({m_id:this.m_id});case 2:if(t=e.sent,console.log(t),75200===t.statusCode){e.next=6;break}return e.abrupt("return",this.$zero.ToastWarning(t.msg));case 6:for(this.revokePower=t.result.revokePower,this.copierNotice=t.result.copierNotice,this.visibleRangeList=t.result.visibleRange,this.approverPeopleList=t.result.approverPeople,this.copierPeopleList=t.result.copierPeople,console.log(this.visibleRangeList),this.scrollBar(),i=0;i<this.visibleRangeList.length;i++)this.visibleRangeList[i].depid=this.visibleRangeList[i].data;for(s=0;s<this.approverPeopleList.length;s++)this.approverPeopleList[s].depid=this.approverPeopleList[s].userid;for(a=0;a<this.copierPeopleList.length;a++)this.copierPeopleList[a].depid=this.copierPeopleList[a].userid;case 16:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getRuleTemplate:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.process.getRuleTemplate({m_id:this.m_id,userid:this.userid});case 2:if(t=e.sent,console.log("获取流程规则设置"),console.log(t),75200!==t.statusCode){e.next=10;break}this.ruleList=t.result.ruleList,this.scrollBar(),e.next=15;break;case 10:if(72510!==t.statusCode){e.next=14;break}console.log(111),e.next=15;break;case 14:return e.abrupt("return",this.$zero.ToastWarning(t.msg));case 15:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),setSessionStorageData:function(e){var t={visibleRangeList:this.visibleRangeList,approverPeopleList:this.approverPeopleList,copierPeopleList:this.copierPeopleList,revokePower:this.revokePower,copierNotice:this.copierNotice,ruleList:this.ruleList,ruleListData:this.ruleListData,m_id:this.m_id,title:this.$route.params.name};"number"==typeof e?t.index=e:"number"==typeof t.index&&delete t.index,this.$zero.setSessionStorage({ruleSettingsData:t})},scrollBar:function(){$(".c_approval_box").getNiceScroll().remove(),$(".c_approval_box").niceScroll(".c_approval_content",{cursorcolor:"#2f78ef",cursorwidth:"5px",autohidemode:!1,background:"#e6e6e6",preventmultitouchscrolling:!0,bouncescroll:!1})}},updated:function(){console.log("更新了")},beforeDestroy:function(){this.$zero.eventBus.$off("addBookLoadMore"),this.$zero.eventBus.$off("departmentItem"),this.isDel&&this.$zero.removeSessionStorage("ruleSettingsData")},components:{MaskLayer:n["a"]}}),l=r,c=(i("8c56"),i("2877")),p=Object(c["a"])(l,s,a,!1,null,null,null);t["default"]=p.exports},4623:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABP0lEQVQokW3Sv0qcQRSG8Xc3Aa1MiiBYCFaCJggSSGMharsWsRAr8QrS2AaRNOmDuQwhlVYboo1g4T9QCRg0BkkRyAWk+dmcDbu6Aw98vPNwzpmZL8gDBrCJP8VmZT1eM71rJslxkpEk48VoZTM9ZlUYwmdcYrbPFAu4wla5aSZpJTlJ8jfJdJK9PF7tJFNJ/iU5S9IK7vAFz/p0esgw9nDXTPIyyW2SiyRrSRp9Oj5N8i7JeZLTJJNBC0/wqqod4HVXl1mc4ls5DcwF2zjEVIkruMUu2vhVWTCBfWx3qi7hGh8xWCwWg/WOH/ADb5FgAy/qmj/hO+a7Rp3DRe0NlbsRrOMnVmv+NzjC1+KoskY5N1jvVB3DTp1pvKTpolFZu5yxzqjdLNdZ39e5Bur7pvb+u/0e+Xn9Wr+Lrcp6vHst4gjHHC5PYgAAAABJRU5ErkJggg=="},5118:function(e,t,i){(function(e){var s="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,a=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(a.call(setTimeout,s,arguments),clearTimeout)},t.setInterval=function(){return new o(a.call(setInterval,s,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(s,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},i("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,i("c8ba"))},6017:function(e,t,i){(function(e,t){(function(e,i){"use strict";if(!e.setImmediate){var s,a=1,o={},n=!1,r=e.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(e);l=l&&l.setTimeout?l:e,"[object process]"==={}.toString.call(e.process)?v():h()?_():e.MessageChannel?f():r&&"onreadystatechange"in r.createElement("script")?g():m(),l.setImmediate=c,l.clearImmediate=p}function c(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),i=0;i<t.length;i++)t[i]=arguments[i+1];var n={callback:e,args:t};return o[a]=n,s(a),a++}function p(e){delete o[e]}function u(e){var t=e.callback,s=e.args;switch(s.length){case 0:t();break;case 1:t(s[0]);break;case 2:t(s[0],s[1]);break;case 3:t(s[0],s[1],s[2]);break;default:t.apply(i,s);break}}function d(e){if(n)setTimeout(d,0,e);else{var t=o[e];if(t){n=!0;try{u(t)}finally{p(e),n=!1}}}}function v(){s=function(e){t.nextTick(function(){d(e)})}}function h(){if(e.postMessage&&!e.importScripts){var t=!0,i=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=i,t}}function _(){var t="setImmediate$"+Math.random()+"$",i=function(i){i.source===e&&"string"===typeof i.data&&0===i.data.indexOf(t)&&d(+i.data.slice(t.length))};e.addEventListener?e.addEventListener("message",i,!1):e.attachEvent("onmessage",i),s=function(i){e.postMessage(t+i,"*")}}function f(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;d(t)},s=function(t){e.port2.postMessage(t)}}function g(){var e=r.documentElement;s=function(t){var i=r.createElement("script");i.onreadystatechange=function(){d(t),i.onreadystatechange=null,e.removeChild(i),i=null},e.appendChild(i)}}function m(){s=function(e){setTimeout(d,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,i("c8ba"),i("f28c"))},"8c56":function(e,t,i){"use strict";var s=i("1c82"),a=i.n(s);a.a},"963c":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEaUExURUdwTJnD6ZrC6f///5rE7ZnD6pnC6qrV/5nC6pnD6pnC6ff6/bvW8P7+/uvz+vv8/sPb8t3r96DG6p/F6vX5/O30+7jU787h9ODs+KfK7LTS7vn7/fj6/f3+/rXS78DZ8c/i9KnL7KjL7NLk9c7i9c3i9Z3E6dbm9s3h9ZrC6dro973X8Ojx+uTv+vT4/Ozz+/r8/bnV7/L3/PH2/LDP7q7P7q3O7vb5/aDH6/r8/rrV8Ory+sbd8r3Y8cXc8rvX8cvg88rf88ne88je883h9Mvg9Mnf9KDG693q9+Lu+Nnp9+fx+d/s+Nfn997r+K/P7ezz+ufx+qvN7fX6/bXT77rW8PL3/f7//8Lb8sje9KfL7OPu+J7F6pvD6gRBJ1kAAAAKdFJOUwDVvf8rlI8G8/32Mgd9AAAB2UlEQVRYw+3Z146CQBQGYHAsOHaxd9eu23vvvfe+7/8a6+hGYNhNRP/J3vDfCCfhCyHkzMiRpG6cblmhgCiy2yn143F5KSxel6dnOig0Dqa6KDiu7vP0olGvU3JTeNySjEdlScGjikQFxEZt1EZt9O/Uw6kcIblUuI5Dt33kJ75NFFohulQw6B4xZBeBqmtGNKQC0HXCxQ9ASzxaAqARHr0GoEEevQWg0zwaA6CzPBoCoCs86gOgCzw6D0BneDQOQC95NAVAD3h0H4CmeXQC0aUujOYkpPUljOgcpklv6M0gqPPfBDQzsIhao041NAJb+HRPNQFD01bep2HRsoaWYWhHQzsw9KOrvVH62v05Q6F+dotPlD4Ot5YOhfpDDLun9L3X9/0ANNroP8xPSr9eekeN6Jiomsz2zQd29tw/zibVMdBWeLDdu2PnU4NlKtwaFc3EtVfpnBWudGtKZiQ02tY3pyNWOtZX2lHraCFm6KJbrLZj3FQUrKLJgLE1L7HisrEWOLSGmnZlq6x6wlcjVtAifzWpsnLVVC5aQE07PUJqlNbM1aAFNG++nDSbvxTzFlAydP4btf/w2qiN2ugoqJAP3UI+yQsZHggZcwgZyIgZHQkZcgkYx30DT2IN9Z+MBa8AAAAASUVORK5CYII="},e881:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA30lEQVQokY2SrU6DQRREz37gUE1IE1QdpqbiM9X1fZBq0gRBCEHwIH0BBIqUN8BWkL4BpgpZDuY2bC9L0klG7Myd3J9sUUnogXvgLN574AF4P6pSa07VtTqstGFo07o2B3OoDr/VWpfG/AY+8+yh7WshB88boaaXgx/ArBGahfeLtMsgdlmoV8FFaIO6No92CWyBG2Ae2jXwGt6u1XGpvqh946p9eMuDVuID3AEXwC3w50cECvAEfAGPqBP1WS2NTpklaieoK3V8QujAsbrqgBGw+We8FjbAqDu61OnY/QC4tiH+lXgF1AAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-498ee4c1.106fe6f3.js.map