(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-172bece0"],{3023:function(e,t,i){"use strict";var s=i("715e"),a=i.n(s);a.a},4623:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABP0lEQVQokW3Sv0qcQRSG8Xc3Aa1MiiBYCFaCJggSSGMharsWsRAr8QrS2AaRNOmDuQwhlVYboo1g4T9QCRg0BkkRyAWk+dmcDbu6Aw98vPNwzpmZL8gDBrCJP8VmZT1eM71rJslxkpEk48VoZTM9ZlUYwmdcYrbPFAu4wla5aSZpJTlJ8jfJdJK9PF7tJFNJ/iU5S9IK7vAFz/p0esgw9nDXTPIyyW2SiyRrSRp9Oj5N8i7JeZLTJJNBC0/wqqod4HVXl1mc4ls5DcwF2zjEVIkruMUu2vhVWTCBfWx3qi7hGh8xWCwWg/WOH/ADb5FgAy/qmj/hO+a7Rp3DRe0NlbsRrOMnVmv+NzjC1+KoskY5N1jvVB3DTp1pvKTpolFZu5yxzqjdLNdZ39e5Bur7pvb+u/0e+Xn9Wr+Lrcp6vHst4gjHHC5PYgAAAABJRU5ErkJggg=="},6202:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"procedure_set_rule"},[s("div",{staticClass:"c_rule_header"},[s("CContentHeader",{attrs:{isShowIcon:!0,content:"流程控制"}}),s("el-button",{staticClass:"c_rule_header_btn_one",on:{click:e.back}},[e._v("上一步")]),s("el-button",{staticClass:"c_rule_header_btn_two",attrs:{type:"primary"},on:{click:e.preserveBtn}},[e._v("保存")])],1),s("div",{staticClass:"c_sule_settings"},[s("div",{staticClass:"c_approval_box"},[s("div",{staticClass:"c_approval_content"},[s("div",{staticClass:"c_visible_range"},[s("div",{staticClass:"c_visible_range_title"},[e._v("\n                        可见范围\n                    ")]),s("div",{staticClass:"c_visible_range_range"},[e._l(e.visibleRangeList,function(t){return s("div",{key:t.depid,staticClass:"c_visible_range_range_branch"},["dep"===t.type?s("img",{attrs:{src:i("4623"),alt:""}}):s("img",{attrs:{src:i("e881"),alt:""}}),s("span",[e._v(e._s(t.name))])])}),e.visibleRangeList.length>0?s("div",{staticClass:"c_visible_range_range_btn",on:{click:e.reviseScope}},[e._v("\n                            修改\n                        ")]):s("div",{staticClass:"c_condition_btn",on:{click:e.reviseScope}},[e._v("添加")])],2)]),s("div",{staticClass:"c_approval_process"},[s("div",{staticClass:"c_approval_process_title"},[e._v("\n                        审批流程\n                    ")]),s("div",{staticClass:"c_approval_process_box"},[s("div",{staticClass:"c_title"},[e._v("\n                            审批人：\n                        ")]),s("div",{staticClass:"c_approval_by_list"},[e._l(e.approverPeopleList,function(t,a){return s("div",{key:a,staticClass:"flex"},[s("div",{staticClass:"c_approval_by_name"},[t.avatar?s("img",{attrs:{src:t.avatar,alt:""}}):s("img",{attrs:{src:i("963c"),alt:""}}),s("p",[e._v(e._s(t.name))])]),e._m(0,!0)])}),s("div",{staticClass:"c_approval_by_add",on:{click:e.addApproverPeople}},[s("i",{staticClass:"el-icon-plus"})])],2)]),s("div",{staticClass:"c_approval_process_box"},[s("div",{staticClass:"c_title"},[e._v("\n                            抄送人：\n                        ")]),s("div",{staticClass:"c_approval_by_list"},[e._l(e.copierPeopleList,function(t,a){return s("div",{key:a,staticClass:"flex"},[s("div",{staticClass:"c_approval_by_name"},[t.avatar?s("img",{attrs:{src:t.avatar,alt:""}}):s("img",{attrs:{src:i("963c"),alt:""}}),s("p",[e._v(e._s(t.name))])]),e._m(1,!0)])}),s("div",{staticClass:"c_approval_by_add",on:{click:e.addCopierPeople}},[s("i",{staticClass:"el-icon-plus"})])],2)]),s("div",{staticClass:"c_condition_box"},[s("div",{staticClass:"c_title"},[e._v("\n                            条件审批流程：\n                        ")]),s("div",{staticClass:"c_condition"},[s("div",{staticClass:"c_condition_btn",on:{click:e.addBtn}},[e._v("添加")]),s("p",[e._v("不同的条件，使用不同的审批流程")])])]),e._l(e.ruleList,function(t,a){return s("div",{key:a,staticClass:"c_condition_add_box"},[s("div",{staticClass:"c_condition_add_header"},[s("div",{staticClass:"c_condition_add_title"},[e._v("\n                                "+e._s(t.title)+"\n                            ")]),s("div",{staticClass:"c_condition_add_edit",on:{click:function(t){return e.editBtn(a)}}},[s("i",{staticClass:"el-icon-edit"}),e._v("\n                                编辑\n                            ")]),s("div",{staticClass:"c_condition_add_delete",on:{click:function(i){return e.deleteBtn(t._id,a)}}},[s("i",{staticClass:"el-icon-delete"})])]),s("div",{staticClass:"c_approval_process_box"},[s("div",{staticClass:"c_title no_pt"},[e._v("\n                                同时满足\n                            ")]),s("div",{staticClass:"c_approval_by_list"},[s("span",[e._v("申请人：")]),e._l(t.rule,function(t){return s("span",{key:t.data,staticClass:"span-font"},[e._v(" "+e._s(t.name))])})],2)]),s("div",{staticClass:"c_approval_process_box"},[s("div",{staticClass:"c_title"},[e._v("\n                                审批人\n                            ")]),e._l(t.flow,function(a,o){return s("div",{key:o,staticClass:"c_approval_by_list"},[s("div",{staticClass:"c_approval_by_name"},[a.avatar?s("img",{attrs:{src:a.avatar,alt:""}}):s("img",{attrs:{src:i("963c"),alt:""}}),s("p",[e._v(e._s(a.name))])]),o!==t.flow.length-1?s("div",{staticClass:"c_approval_by_icon"},[s("i",{staticClass:"el-icon-more"})]):e._e()])})],2),s("div",{staticClass:"c_approval_process_box"},[s("div",{staticClass:"c_title no_pt"},[e._v("\n                                抄送人\n                            ")]),s("div",{staticClass:"c_approval_by_list f12"},e._l(t.copy,function(t,i){return s("span",{key:i},[e._v(e._s(t.name))])}),0)])])}),s("div",{staticClass:"c_revoke_box"},[s("div",{staticClass:"c_title"},[e._v("\n                            撤销权限：\n                        ")]),s("div",{staticClass:"c_condition"},[s("div",{staticClass:"c_condition_radio"},[s("el-checkbox",{model:{value:e.revokePower,callback:function(t){e.revokePower=t},expression:"revokePower"}},[e._v("通过后允许撤销")])],1),s("p",[e._v("审批通过后，经审批人同意，可撤销。")])])]),s("div",{staticClass:"c_revoke_box no_flex"},[s("div",{staticClass:"c_title"},[e._v("\n                            抄送通知：\n                        ")]),s("div",[s("div",{staticClass:"c_condition_radio"},[s("el-radio",{attrs:{label:"1"},model:{value:e.copierNotice,callback:function(t){e.copierNotice=t},expression:"copierNotice"}},[e._v("提交申请时抄送")])],1),s("div",{staticClass:"c_condition_radio"},[s("el-radio",{attrs:{label:"2"},model:{value:e.copierNotice,callback:function(t){e.copierNotice=t},expression:"copierNotice"}},[e._v("审批通过后抄送")])],1),s("div",{staticClass:"c_condition_radio"},[s("el-radio",{attrs:{label:"3"},model:{value:e.copierNotice,callback:function(t){e.copierNotice=t},expression:"copierNotice"}},[e._v("提交申请时和审批通过后度抄送")])],1)])])],2)])])]),s("div",{staticClass:"c_elastic_frame"},[e.dialogShow?s("MaskLayer",{attrs:{title:e.title,twoTitle:e.twoTitle,isOne:e.isOne,isUser:e.isUser,dialogShow:e.dialogShow,powerList:e.powerList},on:{"update:dialogShow":function(t){e.dialogShow=t},"update:dialog-show":function(t){e.dialogShow=t},submit:e.submitBtn,reset:e.resetBtn}}):e._e()],1)])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"c_approval_by_icon"},[i("i",{staticClass:"el-icon-more"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"c_approval_by_icon"},[i("i",{staticClass:"el-icon-more"})])}],o=(i("7f7f"),i("96cf"),i("3b8d")),r=i("778c"),n={data:function(){return{isShow:!0,revokePower:!1,copierNotice:"1",title:"",twoTitle:"",dialogShow:!1,powerList:[],m_id:"",isRule:!1,isFlow:!1,isCopy:!1,isOne:!1,isUser:!1,visibleRangeList:[],approverPeopleList:[],copierPeopleList:[],ruleList:[],ruleListData:[],userid:"zxp17",isDel:!0}},mounted:function(){console.log("我在吗"),this.scrollBar();var e=this.$zero.getSessionStorage("ruleSettingsData");e&&(this.visibleRangeList=e.visibleRangeList,this.approverPeopleList=e.approverPeopleList,this.copierPeopleList=e.copierPeopleList,this.revokePower=e.revokePower,this.copierNotice=e.copierNotice,this.ruleList=e.ruleList,this.ruleListData=e.ruleListData)},methods:{reviseScope:function(){this.title="可见范围",this.twoTitle="以下部门或员工可见",this.dialogShow=!0,this.isRule=!0,this.isOne=!0,this.isUser=!1,this.isFlow=!1,this.isCopy=!1,console.log(111),this.powerList=JSON.parse(JSON.stringify(this.visibleRangeList))},addApproverPeople:function(){this.title="审批人",this.twoTitle="以下为审批人",this.dialogShow=!0,this.isRule=!1,this.isUser=!0,this.isFlow=!0,this.isCopy=!1,console.log(111),this.powerList=JSON.parse(JSON.stringify(this.approverPeopleList))},addCopierPeople:function(){this.title="抄送人",this.twoTitle="以下为抄送人",this.dialogShow=!0,this.isRule=!1,this.isUser=!0,this.isFlow=!1,this.isCopy=!0,console.log(111),this.powerList=JSON.parse(JSON.stringify(this.copierPeopleList))},submitBtn:function(e){this.dialogShow=!1,console.log(e);var t=e.powerList;this.isRule?this.visibleRangeList=JSON.parse(JSON.stringify(t)):this.isFlow?this.approverPeopleList=JSON.parse(JSON.stringify(t)):this.isCopy&&(this.copierPeopleList=JSON.parse(JSON.stringify(t))),this.scrollBar()},resetBtn:function(){this.dialogShow=!1},back:function(){this.isDel=!1,window.location.href="/procedureSetTemplate",this.setSessionStorageData()},setSessionStorageData:function(e){var t={visibleRangeList:this.visibleRangeList,approverPeopleList:this.approverPeopleList,copierPeopleList:this.copierPeopleList,revokePower:this.revokePower,copierNotice:this.copierNotice,ruleList:this.ruleList,ruleListData:this.ruleListData};"number"==typeof e?t.index=e:"number"==typeof t.index&&delete t.index,this.$zero.setSessionStorage({ruleSettingsData:t})},preserveBtn:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("保存了"),!(this.visibleRangeList.length<1)){e.next=5;break}return e.abrupt("return",this.$zero.ToastWarning("请选择可见范围"));case 5:if(!(this.approverPeopleList.length<1)){e.next=7;break}return e.abrupt("return",this.$zero.ToastWarning("请选择审批人"));case 7:this.addTemplate();case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),addTemplate:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$zero.getSessionStorage("ruleTemplate"),console.log(t),e.next=4,this.$api.process.addTemplate({name:t.name,company_id:t.company_id,list:t.list,userid:t.userid,icon:t.icon});case 4:if(i=e.sent,console.log(i),72506!==i.statusCode){e.next=10;break}return e.abrupt("return",this.$zero.ToastWarning("模板名称重复，请返回上一步修改模板名称"));case 10:if(75200===i.statusCode){e.next=12;break}return e.abrupt("return",this.$zero.ToastWarning(i.msg));case 12:s=i._id,this.addRuleTemplate(s),this.setTemplate(s);case 15:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),setTemplate:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var i,s,a,o,r,n,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(i=[],s="",a="",o=0;o<this.visibleRangeList.length;o++)i[o]={type:this.visibleRangeList[o].type,data:this.visibleRangeList[o].depid,name:this.visibleRangeList[o].name};for(r=0;r<this.approverPeopleList.length;r++)r===this.approverPeopleList.length-1?a+=this.approverPeopleList[r].depid:a+=this.approverPeopleList[r].depid+",";for(n=0;n<this.copierPeopleList.length;n++)n===this.copierPeopleList.length-1?s+=this.copierPeopleList[n].depid:s+=this.copierPeopleList[n].depid+",";return console.log(i),console.log(s),console.log(a),e.next=11,this.$api.process.setTemplate({m_id:t,visibleRange:i,copierPeople:s,approverPeople:a,revokePower:this.revokePower,copierNotice:this.copierNotice});case 11:if(l=e.sent,console.log(l),75200!==l.statusCode){e.next=21;break}this.isDel=!0,this.$zero.ToastSuccess("设置成功"),this.$zero.removeSessionStorage("ruleSettingsData"),this.$zero.removeSessionStorage("ruleTemplate"),setTimeout(function(){window.location.href="/procedure"},500),e.next=22;break;case 21:return e.abrupt("return",this.$zero.ToastWarning(l.msg));case 22:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),addRuleTemplate:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var i,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(console.log(this.ruleListData),i=this,s=function(e){(function(){i.$api.process.addRuleTemplate({m_id:t,title:i.ruleListData[e].title,rule:i.ruleListData[e].rule,flow:i.ruleListData[e].flow,copy:i.ruleListData[e].copy}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})})()},a=0;a<this.ruleListData.length;a++)s(a);case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),addBtn:function(){this.isDel=!1,this.setSessionStorageData(),window.location.href="/procedureApprovalCondition"},editBtn:function(e){this.isDel=!1,this.setSessionStorageData(e),window.location.href="/procedureApprovalCondition"},deleteBtn:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,i){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t,i),this.ruleList.splice(i,1),this.ruleListData.splice(i,1),e.abrupt("return");case 6:if(s=e.sent,console.log(s),75200!==s.statusCode){e.next=15;break}return this.$zero.ToastSuccess("删除成功"),this.ruleList.splice(i,1),this.scrollBar(),e.abrupt("return");case 15:return e.abrupt("return",this.$zero.ToastWarning(s.msg));case 16:case"end":return e.stop()}},e,this)}));function t(t,i){return e.apply(this,arguments)}return t}(),getRuleTemplate:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.process.getRuleTemplate({m_id:this.m_id,userid:this.userid});case 2:if(t=e.sent,console.log(t),75200!==t.statusCode){e.next=8;break}this.ruleList=t.result.ruleList,e.next=9;break;case 8:return e.abrupt("return",this.$zero.ToastWarning(t.msg));case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),scrollBar:function(){$(".c_approval_box").getNiceScroll().remove(),$(".c_approval_box").niceScroll(".c_approval_content",{cursorcolor:"#2f78ef",cursorwidth:"5px",autohidemode:!1,background:"#e6e6e6",preventmultitouchscrolling:!0,bouncescroll:!1})}},updated:function(){console.log("更新了")},beforeDestroy:function(){this.$zero.eventBus.$off("addBookLoadMore"),this.$zero.eventBus.$off("departmentItem"),console.log(this.isDel),this.isDel&&(this.$zero.removeSessionStorage("ruleSettingsData"),this.$zero.removeSessionStorage("ruleTemplate"))},components:{MaskLayer:r["a"]}},l=n,c=(i("3023"),i("2877")),p=Object(c["a"])(l,s,a,!1,null,null,null);t["default"]=p.exports},"715e":function(e,t,i){},"963c":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEaUExURUdwTJnD6ZrC6f///5rE7ZnD6pnC6qrV/5nC6pnD6pnC6ff6/bvW8P7+/uvz+vv8/sPb8t3r96DG6p/F6vX5/O30+7jU787h9ODs+KfK7LTS7vn7/fj6/f3+/rXS78DZ8c/i9KnL7KjL7NLk9c7i9c3i9Z3E6dbm9s3h9ZrC6dro973X8Ojx+uTv+vT4/Ozz+/r8/bnV7/L3/PH2/LDP7q7P7q3O7vb5/aDH6/r8/rrV8Ory+sbd8r3Y8cXc8rvX8cvg88rf88ne88je883h9Mvg9Mnf9KDG693q9+Lu+Nnp9+fx+d/s+Nfn997r+K/P7ezz+ufx+qvN7fX6/bXT77rW8PL3/f7//8Lb8sje9KfL7OPu+J7F6pvD6gRBJ1kAAAAKdFJOUwDVvf8rlI8G8/32Mgd9AAAB2UlEQVRYw+3Z146CQBQGYHAsOHaxd9eu23vvvfe+7/8a6+hGYNhNRP/J3vDfCCfhCyHkzMiRpG6cblmhgCiy2yn143F5KSxel6dnOig0Dqa6KDiu7vP0olGvU3JTeNySjEdlScGjikQFxEZt1EZt9O/Uw6kcIblUuI5Dt33kJ75NFFohulQw6B4xZBeBqmtGNKQC0HXCxQ9ASzxaAqARHr0GoEEevQWg0zwaA6CzPBoCoCs86gOgCzw6D0BneDQOQC95NAVAD3h0H4CmeXQC0aUujOYkpPUljOgcpklv6M0gqPPfBDQzsIhao041NAJb+HRPNQFD01bep2HRsoaWYWhHQzsw9KOrvVH62v05Q6F+dotPlD4Ot5YOhfpDDLun9L3X9/0ANNroP8xPSr9eekeN6Jiomsz2zQd29tw/zibVMdBWeLDdu2PnU4NlKtwaFc3EtVfpnBWudGtKZiQ02tY3pyNWOtZX2lHraCFm6KJbrLZj3FQUrKLJgLE1L7HisrEWOLSGmnZlq6x6wlcjVtAifzWpsnLVVC5aQE07PUJqlNbM1aAFNG++nDSbvxTzFlAydP4btf/w2qiN2ugoqJAP3UI+yQsZHggZcwgZyIgZHQkZcgkYx30DT2IN9Z+MBa8AAAAASUVORK5CYII="},e881:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA30lEQVQokY2SrU6DQRREz37gUE1IE1QdpqbiM9X1fZBq0gRBCEHwIH0BBIqUN8BWkL4BpgpZDuY2bC9L0klG7Myd3J9sUUnogXvgLN574AF4P6pSa07VtTqstGFo07o2B3OoDr/VWpfG/AY+8+yh7WshB88boaaXgx/ArBGahfeLtMsgdlmoV8FFaIO6No92CWyBG2Ae2jXwGt6u1XGpvqh946p9eMuDVuID3AEXwC3w50cECvAEfAGPqBP1WS2NTpklaieoK3V8QujAsbrqgBGw+We8FjbAqDu61OnY/QC4tiH+lXgF1AAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-172bece0.45b2e653.js.map