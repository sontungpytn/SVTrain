(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f2f11d8"],{"1fd3":function(e,n,t){"use strict";t("99af"),t("4160"),t("159b"),t("96cf");var a=t("1da1"),r=t("5530"),s=t("2f62"),o=t("7c15"),c=t("29b2");n["a"]={data:function(){return{isLoading:{statistic:!1,train:!1,test:!1,validate:!1,export:!1,stop:!1,ExportImages:!1},logs:{},running:null,workspace:null,checkInterval:750,commands:[]}},computed:Object(r["a"])({},Object(s["b"])(["currentWs"])),methods:{openLogsFor:function(e){window.open("/logs/".concat(e,"?sessionToken=").concat(localStorage.getItem("sessionToken")))},checkStatus:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,o["a"].getRunningState();case 2:t=n.sent,e.running=t,console.log("Running status:",t);case 5:case"end":return n.stop()}}),n)})))()},checkWorkspace:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,o["a"].getWorkspace();case 2:t=n.sent,e.workspace=t,console.log("Workspace: ".concat(e.workspace));case 5:case"end":return n.stop()}}),n)})))()},runCommand:function(e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.isLoading[e]=!0,t.prev=1,t.next=4,o["a"].runCommand(e);case 4:return t.next=6,n.checkStatus();case 6:t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0),console.error("An error occurred!");case 12:n.isLoading[e]=!1,console.log("Command ".concat(e," executed"));case 14:case"end":return t.stop()}}),t,null,[[1,8]])})))()}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.sessionUser=localStorage.getItem("sessionUser"),e.checkStatus(),e.checkWorkspace(),n.next=5,o["a"].getLastLogs();case 5:e.logs=n.sent,c["a"].subscibeForFolder("running.lock",(function(n){console.log("running.lock: ",n),"unlink"===n.event&&(e.running=!1),"change"===n.event&&(e.running=n.content)})),c["a"].subscibeForFolder("workspace.bat",(function(n){console.log("workspace.bat: ",n),"unlink"===n.event&&(e.workspace=!1),"change"===n.event&&(e.workspace=n.content)})),c["a"].subscribe("logfile",(function(n){n.forEach((function(n){e.logs[n.file].lastLine=n.lastLine}))}));case 9:case"end":return n.stop()}}),n)})))()},beforeDestroy:function(){return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c["a"].unsubscribeForFolder("running.lock"),c["a"].unsubscribeForFolder("workspace.bat");case 2:case"end":return e.stop()}}),e)})))()}}},"31fa":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container-fluid"},[e._m(0),t("div",{staticClass:"cmd-main-menu"},[t("div",[e._v("Workspace: "),t("strong",[e._v(e._s(e.currentWs))])]),t("div",[e._v(" Running status: "),t("strong",[null!==e.running?[e._v(" "+e._s(e.running?e.running+"%":"idle")+" ")]:[e._v(" no info ")]],2)]),e._l(e.commands,(function(n){return t("div",{key:n.value,staticClass:"cmd"},[t("b-button",{staticClass:"svtrain-cmd-btn",class:"stop"===n.value?"btn-stop-command":"btn-command",attrs:{disabled:!!e.isLoading[n.value]||"stop"===n.value&&!e.running||"stop"!==n.value&&!!e.running},on:{click:function(t){return e.runCommand(n.value)}}},[t("v-icon",{attrs:{name:"stop"===n.value?"stop":"play"}}),e._v(" "+e._s(n.label)+" ")],1),e.isLoading[n.value]?t("span",[e._v("Running...")]):e._e(),e.logs[n.value]&&e.logs[n.value].lastLine?t("pre",{staticClass:"log-line",staticStyle:{"padding-left":"10px"},domProps:{innerHTML:e._s(e.logs[n.value].lastLine)},on:{click:function(t){return e.openLogsFor(n.value)}}}):e._e(),e._v(" "),t("div",{staticStyle:{clear:"both"}})],1)}))],2)])},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"title-container"},[t("div",[t("h4",[e._v("SVTrain v0.10")])])])}],s=t("1fd3"),o={name:"Validate",mixins:[s["a"]],data:function(){return{commands:[{value:"validate",label:"Run validate batch"},{value:"export",label:"Run export"},{value:"ExportImages",label:"Export images"},{value:"stop",label:"Stop running validate"}]}}},c=o,i=t("2877"),u=Object(i["a"])(c,a,r,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-6f2f11d8.4f6b2679.js.map