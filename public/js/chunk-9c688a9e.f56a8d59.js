(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c688a9e"],{4623:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABP0lEQVQokW3Sv0qcQRSG8Xc3Aa1MiiBYCFaCJggSSGMharsWsRAr8QrS2AaRNOmDuQwhlVYboo1g4T9QCRg0BkkRyAWk+dmcDbu6Aw98vPNwzpmZL8gDBrCJP8VmZT1eM71rJslxkpEk48VoZTM9ZlUYwmdcYrbPFAu4wla5aSZpJTlJ8jfJdJK9PF7tJFNJ/iU5S9IK7vAFz/p0esgw9nDXTPIyyW2SiyRrSRp9Oj5N8i7JeZLTJJNBC0/wqqod4HVXl1mc4ls5DcwF2zjEVIkruMUu2vhVWTCBfWx3qi7hGh8xWCwWg/WOH/ADb5FgAy/qmj/hO+a7Rp3DRe0NlbsRrOMnVmv+NzjC1+KoskY5N1jvVB3DTp1pvKTpolFZu5yxzqjdLNdZ39e5Bur7pvb+u/0e+Xn9Wr+Lrcp6vHst4gjHHC5PYgAAAABJRU5ErkJggg=="},"527d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"procedure_approval_condition"},[i("div",{staticClass:"c_approval_condition_header"},[i("CContentHeader",{attrs:{isShowIcon:!0,content:"条件审批流程"}}),"number"==typeof this.ruleListIndex?i("el-button",{staticClass:"c_set_up_two_header_btn_one",attrs:{type:"primary"},on:{click:t.reviseBtn}},[t._v("修改")]):i("el-button",{staticClass:"c_set_up_two_header_btn_one",attrs:{type:"primary"},on:{click:t.preserveBtn}},[t._v("保存")]),i("el-button",{staticClass:"c_set_up_two_header_btn_two",attrs:{type:"primary"},on:{click:t.returnBtn}},[t._v("取消")])],1),i("div",{staticClass:"c_approval_condition_box"},[i("div",{staticClass:"c_approval_condition_main"},[i("div",{staticClass:"c_approval_condition_form"},[i("div",{staticClass:"c_approval_condition_input_box"},[i("div",{staticClass:"c_title"},[t._v("\n                        流程名称：\n                    ")]),i("div",{staticClass:"c_input c_input_color"},[i("el-input",{attrs:{placeholder:"请输入流程名称"},model:{value:t.processName,callback:function(e){t.processName=e},expression:"processName"}})],1)]),i("div",{staticClass:"c_approval_condition_input_box"},[i("div",{staticClass:"c_title"},[t._v("\n                        同时满足:\n                    ")]),i("div",{staticClass:"c_select"},[i("el-select",{model:{value:t.region,callback:function(e){t.region=e},expression:"region"}},[i("el-option",{attrs:{label:"申请人",value:"申请人"}})],1),t.rules.length>0?i("span",[t._v("为")]):t._e(),t._l(t.rules,function(e){return i("div",{key:e.depid,staticClass:"c_name"},["dep"===e.type?i("img",{attrs:{src:s("4623"),alt:""}}):i("img",{attrs:{src:s("e881"),alt:""}}),t._v("\n                            "+t._s(e.name)+"\n                        ")])}),t.rules.length>0?i("div",{staticClass:"c_btn",on:{click:t.reviseRule}},[t._v("\n                            修改\n                        ")]):i("div",{staticClass:"c_btn ml",on:{click:t.reviseRule}},[t._v("\n                            添加\n                        ")])],2)])]),i("div",{staticClass:"c_approval_condition_add"},[i("div",{staticClass:"c_approval_condition_title"},[t._v("\n                    审批流程\n                ")]),i("div",{staticClass:"c_approval_process_box"},[i("div",{staticClass:"c_title"},[t._v("\n                        审批人：\n                    ")]),i("div",{staticClass:"c_approval_by_list"},[t._l(t.flows,function(e,r){return i("div",{key:r,staticClass:"flex"},[i("div",{staticClass:"c_approval_by_name"},[e.avatar?i("img",{attrs:{src:e.avatar,alt:""}}):i("img",{attrs:{src:s("963c"),alt:""}}),i("p",[t._v(t._s(e.name))])]),t._m(0,!0)])}),i("div",{staticClass:"c_approval_by_add",on:{click:t.reviseFlow}},[i("i",{staticClass:"el-icon-plus"})])],2)]),i("div",{staticClass:"c_approval_process_box"},[i("div",{staticClass:"c_title"},[t._v("\n                        抄送人：\n                    ")]),i("div",{staticClass:"c_approval_by_list"},[t._l(t.copys,function(e,r){return i("div",{key:r,staticClass:"flex"},[i("div",{staticClass:"c_approval_by_name"},[e.avatar?i("img",{attrs:{src:e.avatar,alt:""}}):i("img",{attrs:{src:s("963c"),alt:""}}),i("p",[t._v(t._s(e.name))])]),t._m(1,!0)])}),i("div",{staticClass:"c_approval_by_add",on:{click:t.reviseCopy}},[i("i",{staticClass:"el-icon-plus"})])],2)])])])]),i("div",{staticClass:"c_elastic_frame"},[t.dialogShow?i("MaskLayer",{attrs:{title:t.title,twoTitle:t.twoTitle,isOne:t.isOne,isUser:t.isUser,dialogShow:t.dialogShow,powerList:t.powerList},on:{"update:dialogShow":function(e){t.dialogShow=e},"update:dialog-show":function(e){t.dialogShow=e},submit:t.submitBtn,reset:t.resetBtn}}):t._e()],1)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c_approval_by_icon"},[s("i",{staticClass:"el-icon-more"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c_approval_by_icon"},[s("i",{staticClass:"el-icon-more"})])}],a=(s("96cf"),s("3b8d")),o=s("778c"),n={data:function(){return{region:"申请人",title:"申请人",twoTitle:"已选择的部门或成员",m_id:"",processName:"",isUser:!1,dialogShow:!1,powerList:[],isRule:!1,isFlow:!1,isCopy:!1,isOne:!1,rules:[],flows:[],copys:[],ruleList:[],ruleListIndex:-1,ruleSettingsData:{},isDel:!0}},mounted:function(){if(this.ruleSettingsData=this.$zero.getSessionStorage("ruleSettingsData"),this.ruleListIndex=this.ruleSettingsData.index,console.log("1123"),console.log(this.ruleSettingsData),this.m_id=this.ruleSettingsData.m_id,"number"==typeof this.ruleListIndex){this.ruleList=this.ruleSettingsData.ruleList[this.ruleListIndex],console.log(this.ruleList),this.processName=this.ruleList.title,this.rules=this.ruleList.rule,this.flows=this.ruleList.flow,this.copys=this.ruleList.copy;for(var t=0;t<this.rules.length;t++)this.rules[t].depid=this.rules[t].data;for(var e=0;e<this.flows.length;e++)this.flows[e].depid=this.flows[e].userid;for(var s=0;s<this.copys.length;s++)this.copys[s].depid=this.copys[s].userid}},methods:{reviseRule:function(){this.title="申请人",this.twoTitle="已选择的部门或成员",this.dialogShow=!0,this.isRule=!0,this.isOne=!0,this.isFlow=!1,this.isCopy=!1,this.isUser=!1,this.powerList=JSON.parse(JSON.stringify(this.rules))},reviseFlow:function(){this.title="审批人",this.twoTitle="已选择的审批人",this.dialogShow=!0,this.isRule=!1,this.isFlow=!0,this.isCopy=!1,this.isUser=!0,this.powerList=JSON.parse(JSON.stringify(this.flows))},reviseCopy:function(){this.title="抄送人",this.twoTitle="已选择的抄送人",this.dialogShow=!0,this.isRule=!1,this.isFlow=!1,this.isCopy=!0,this.isUser=!0,this.powerList=JSON.parse(JSON.stringify(this.copys))},submitBtn:function(t){this.dialogShow=!1,console.log("提交按钮接收"+t),console.log(t);var e=t.powerList;this.isRule?this.rules=JSON.parse(JSON.stringify(e)):this.isFlow?this.flows=JSON.parse(JSON.stringify(e)):this.isCopy&&(this.copys=JSON.parse(JSON.stringify(e)))},resetBtn:function(){this.dialogShow=!1},reviseBtn:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,s,i,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.isDel=!1,console.log(111),e=this.dataHandling(),e){t.next=5;break}return t.abrupt("return");case 5:s=this.ruleSettingsData.ruleList,i=this.ruleListIndex,r=0;case 8:if(!(r<s.length)){t.next=15;break}if(s[r].title!=$.trim(this.processName)||r===i){t.next=12;break}return this.$zero.ToastWarning("流程名称重复"),t.abrupt("return");case 12:r++,t.next=8;break;case 15:if(!this.m_id){t.next=26;break}return t.next=18,this.$api.process.updateRuleTemplate({m_id:this.m_id,r_id:this.ruleList._id,title:$.trim(this.processName),rule:e.rule,flow:e.flow,copy:e.copy});case 18:if(a=t.sent,75200!==a.statusCode){t.next=23;break}this.setRuleSettingsData(this.ruleSettingsData.title,i),t.next=24;break;case 23:return t.abrupt("return",this.$zero.ToastWarning(a.msg));case 24:t.next=28;break;case 26:this.ruleSettingsData.ruleListData[i]={title:$.trim(this.processName),rule:e.rule,flow:e.flow,copy:e.copy},this.setRuleSettingsData(i);case 28:return t.abrupt("return");case 31:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),setRuleSettingsData:function(t,e){var s=this;"number"==typeof e?(this.ruleSettingsData.ruleList[e]={title:$.trim(this.processName),rule:this.rules,flow:this.flows,copy:this.copys},this.$zero.ToastSuccess("修改成功"),setTimeout(function(){s.m_id?window.location.href="/procedureEdit/ruleSettings/".concat(t,"/").concat(s.m_id):window.location.href="/procedureSetRuleSettings"},500)):(this.ruleSettingsData.ruleList.push({title:$.trim(this.processName),rule:this.rules,flow:this.flows,copy:this.copys}),this.$zero.ToastSuccess("设置成功"),setTimeout(function(){s.m_id?window.location.href="/procedureEdit/ruleSettings/".concat(t,"/").concat(s.m_id):window.location.href="/procedureSetRuleSettings"},500)),this.$zero.setSessionStorage({ruleSettingsData:this.ruleSettingsData})},preserveBtn:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,s,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.isDel=!1,e=this.dataHandling(),e){t.next=4;break}return t.abrupt("return");case 4:s=this.ruleSettingsData.ruleList,i=0;case 6:if(!(i<s.length)){t.next=12;break}if(s[i].title!=$.trim(this.processName)){t.next=9;break}return t.abrupt("return",this.$zero.ToastWarning("流程已存在或名称重复"));case 9:i++,t.next=6;break;case 12:if(!this.m_id){t.next=25;break}return console.log("进来没"),console.log(this.m_id),t.next=17,this.$api.process.addRuleTemplate({m_id:this.m_id,title:$.trim(this.processName),rule:e.rule,flow:e.flow,copy:e.copy});case 17:if(r=t.sent,75200!==r.statusCode){t.next=22;break}this.setRuleSettingsData(this.ruleSettingsData.title),t.next=23;break;case 22:return t.abrupt("return",this.$zero.ToastWarning(r.msg));case 23:t.next=27;break;case 25:this.ruleSettingsData.ruleListData.push({title:$.trim(this.processName),rule:e.rule,flow:e.flow,copy:e.copy}),this.setRuleSettingsData();case 27:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),returnBtn:function(){this.isDel=!1,this.m_id?window.location.href="/procedureEdit/ruleSettings/".concat(this.ruleSettingsData.title,"/").concat(this.m_id):window.location.href="/procedureSetRuleSettings"},dataHandling:function(){if(""!=$.trim(this.processName))if(0!=this.rules.length){if(0!=this.flows.length){for(var t=[],e=[],s=[],i=0;i<this.rules.length;i++)t[i]={data:this.rules[i].depid,type:this.rules[i].type};for(var r=0;r<this.flows.length;r++)e.push(this.flows[r].depid);for(var a=0;a<this.copys.length;a++)s.push(this.copys[a].depid);return{rule:t,flow:e,copy:s}}this.$zero.ToastWarning("请选择审批人")}else this.$zero.ToastWarning("请选择申请人");else this.$zero.ToastWarning("请输入流程名称")}},beforeDestroy:function(){this.$zero.eventBus.$off("addBookLoadMore"),this.$zero.eventBus.$off("departmentItem"),console.log(this.isDel),this.isDel&&(this.$zero.removeSessionStorage("ruleSettingsData"),this.$zero.removeSessionStorage("ruleTemplate"))},components:{MaskLayer:o["a"]}},l=n,c=(s("6e23"),s("2877")),u=Object(c["a"])(l,i,r,!1,null,null,null);e["default"]=u.exports},"5de9":function(t,e,s){},"6e23":function(t,e,s){"use strict";var i=s("5de9"),r=s.n(i);r.a},"963c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEaUExURUdwTJnD6ZrC6f///5rE7ZnD6pnC6qrV/5nC6pnD6pnC6ff6/bvW8P7+/uvz+vv8/sPb8t3r96DG6p/F6vX5/O30+7jU787h9ODs+KfK7LTS7vn7/fj6/f3+/rXS78DZ8c/i9KnL7KjL7NLk9c7i9c3i9Z3E6dbm9s3h9ZrC6dro973X8Ojx+uTv+vT4/Ozz+/r8/bnV7/L3/PH2/LDP7q7P7q3O7vb5/aDH6/r8/rrV8Ory+sbd8r3Y8cXc8rvX8cvg88rf88ne88je883h9Mvg9Mnf9KDG693q9+Lu+Nnp9+fx+d/s+Nfn997r+K/P7ezz+ufx+qvN7fX6/bXT77rW8PL3/f7//8Lb8sje9KfL7OPu+J7F6pvD6gRBJ1kAAAAKdFJOUwDVvf8rlI8G8/32Mgd9AAAB2UlEQVRYw+3Z146CQBQGYHAsOHaxd9eu23vvvfe+7/8a6+hGYNhNRP/J3vDfCCfhCyHkzMiRpG6cblmhgCiy2yn143F5KSxel6dnOig0Dqa6KDiu7vP0olGvU3JTeNySjEdlScGjikQFxEZt1EZt9O/Uw6kcIblUuI5Dt33kJ75NFFohulQw6B4xZBeBqmtGNKQC0HXCxQ9ASzxaAqARHr0GoEEevQWg0zwaA6CzPBoCoCs86gOgCzw6D0BneDQOQC95NAVAD3h0H4CmeXQC0aUujOYkpPUljOgcpklv6M0gqPPfBDQzsIhao041NAJb+HRPNQFD01bep2HRsoaWYWhHQzsw9KOrvVH62v05Q6F+dotPlD4Ot5YOhfpDDLun9L3X9/0ANNroP8xPSr9eekeN6Jiomsz2zQd29tw/zibVMdBWeLDdu2PnU4NlKtwaFc3EtVfpnBWudGtKZiQ02tY3pyNWOtZX2lHraCFm6KJbrLZj3FQUrKLJgLE1L7HisrEWOLSGmnZlq6x6wlcjVtAifzWpsnLVVC5aQE07PUJqlNbM1aAFNG++nDSbvxTzFlAydP4btf/w2qiN2ugoqJAP3UI+yQsZHggZcwgZyIgZHQkZcgkYx30DT2IN9Z+MBa8AAAAASUVORK5CYII="},e881:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA30lEQVQokY2SrU6DQRREz37gUE1IE1QdpqbiM9X1fZBq0gRBCEHwIH0BBIqUN8BWkL4BpgpZDuY2bC9L0klG7Myd3J9sUUnogXvgLN574AF4P6pSa07VtTqstGFo07o2B3OoDr/VWpfG/AY+8+yh7WshB88boaaXgx/ArBGahfeLtMsgdlmoV8FFaIO6No92CWyBG2Ae2jXwGt6u1XGpvqh946p9eMuDVuID3AEXwC3w50cECvAEfAGPqBP1WS2NTpklaieoK3V8QujAsbrqgBGw+We8FjbAqDu61OnY/QC4tiH+lXgF1AAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-9c688a9e.f56a8d59.js.map