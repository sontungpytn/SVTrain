(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-152f6fe8"],{"198f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("b-row",[n("b-col",[n("div",{staticClass:"title-container"},[n("div",[n("h4",[t._v("SVTrain v1.2")])])]),n("div",{staticClass:"cmd-main-menu"},[n("div",[t._v("Workspace: "),n("strong",[t._v(t._s(t.currentWs))])]),null!==t.running?n("div",{domProps:{innerHTML:t._s(t.running||"idle")}}):n("b",[t._v("no info")]),t.editConfigAI?n("b-button",{staticClass:"mt-2",on:{click:function(e){return t.showModal()}}},[n("v-icon",{attrs:{name:"cogs"}}),n("span",{staticClass:"ml-2"},[t._v("Settings")])],1):t._e(),t._l(t.commands,(function(e){return n("div",{key:e.value,staticClass:"cmd"},[n("b-button",{staticClass:"svtrain-cmd-btn",class:"script_stop_training"===e.value?"btn-stop-command":"btn-command",attrs:{disabled:!!t.isLoading[e.value]||"script_stop_training"===e.value&&!t.running||"script_stop_training"!==e.value&&!!t.running},on:{click:function(n){return t.runCommand(e.value,t.workspace)}}},[e.icon?n("svg-icon",{attrs:{"icon-class":e.icon}}):n("v-icon",{attrs:{name:"script_stop_training"===e.value?"stop":"play"}}),n("span",{staticClass:"ml-2"},[t._v(t._s(e.label))])],1),t.isLoading[e.value]?n("span",[t._v("Running...")]):t._e(),t.logs[e.value]&&t.logs[e.value].lastLine?n("pre",{staticClass:"log-line",staticStyle:{"padding-left":"10px"},domProps:{innerHTML:t._s(t.logs[e.value].lastLine)},on:{click:function(n){return t.openLogsFor(e.value)}}}):t._e(),t._v(" "),n("div",{staticStyle:{clear:"both"}})],1)})),n("pre",{staticClass:"py-4",domProps:{innerHTML:t._s(t.logs.training.lastLine)}})],2),n("t-f-option",{ref:"modal",attrs:{ws:t.workspace}})],1),n("b-col",{staticClass:"has-board",attrs:{cols:"9"}},[n("b-tabs",[n("b-tab",{attrs:{title:"Logfiles",active:""}},[n("pre",{domProps:{innerHTML:t._s(t.trainLog)}})]),t.tenserBoard?n("b-tab",{attrs:{title:"TensorBoard"}},[n("iframe",{attrs:{src:t.tenserBoard}})]):t._e()],1)],1)],1)],1)},i=[],o=(n("99af"),n("ac1f"),n("1276"),n("5530")),s=n("bc3a"),r=n.n(s),l=n("ed08"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:"modal",attrs:{size:"md",title:"AI Settings"},on:{shown:t.onOpen},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[n("b-button",{attrs:{variant:"primary"},on:{click:t.saveFile}},[t._v("Save")])]},proxy:!0}])},[t.canEditConfigAIUI?t._l(t.schemas,(function(e){return n("s-field",{key:e.field+"-"+t.fetchCount,attrs:{schema:e,value:t.data[e.field]},on:{input:function(n){t.data[e.field]=n}}})})):[n("div",{staticStyle:{height:"400px"},attrs:{id:"wsjsoneditor"}})]],2)},p=[],u=(n("4160"),n("b64b"),n("159b"),n("53ca")),d=(n("96cf"),n("1da1")),f=n("2f62"),g=n("7c15"),_=n("dcf5"),b=n.n(_),m=n("2b25"),h=n("77f4"),v={name:"TFOption",components:{"s-field":h["a"]},props:{ws:{default:null,type:String}},data:function(){return{schemas:[{label:"Max Train Steps",field:"max_train_steps",type:m["NUMBER"],options:{}},{label:"Training Classes",field:"classes",type:m["T_ARRAY"],options:{}},{label:"Model directory",field:"model_dir",type:m["TEXT"],options:{}},{label:"Batch Size",field:"batch_size",type:m["NUMBER"],options:{}},{label:"Input width",field:"input_width",type:m["NUMBER"],options:{}},{label:"Input height",field:"input_height",type:m["NUMBER"],options:{}},{label:"Input depth",field:"input_depth",type:m["NUMBER"],options:{}},{label:"Augmentation noise std",field:"augmentation_noise_std",type:m["NUMBER"],options:{}},{label:"Augmentation brightness delta",field:"augmentation_brightness_delta",type:m["NUMBER"],options:{}},{label:"Learning rate",field:"learning_rate",type:m["NUMBER"],options:{}},{label:"Enable linear stretch images",field:"enable_linear_stretch_images",type:m["BOOLEAN"],options:{}},{label:"Enable augmentation noise",field:"enable_augmentation_noise",type:m["BOOLEAN"],options:{}},{label:"Enable augmentation mirror",field:"enable_augmentation_mirror",type:m["BOOLEAN"],options:{}},{label:"Enable augmentation brigthness",field:"enable_augmentation_brigthness",type:m["BOOLEAN"],options:{}},{label:"Rename",field:"rename",type:m["BOOLEAN"],options:{}},{label:"Network architecture",field:"network_architecture",type:m["TEXT"],options:{}},{label:"Good class",field:"good_class",type:m["TEXT"],options:{}},{label:"Log every n steps",field:"log_every_n_steps",type:m["NUMBER"],options:{}},{label:"Workspace path",field:"workspace",type:m["TEXT"],options:{}},{label:"Train script name",field:"script_training",type:m["TEXT"],options:{}},{label:"Test script name",field:"script_test",type:m["TEXT"],options:{}},{label:"Validate script name",field:"script_validate",type:m["TEXT"],options:{}},{label:"Stop train script name",field:"script_stop_train",type:m["TEXT"],options:{}},{label:"Stop test script name",field:"script_stop_test",type:m["TEXT"],options:{}},{label:"Stop validate script name",field:"script_stop_validate",type:m["TEXT"],options:{}},{label:"Export model script name",field:"script_export_model",type:m["TEXT"],options:{}},{label:"Export result script name",field:"script_export_result",type:m["TEXT"],options:{}},{label:"Export images script name",field:"script_export_image",type:m["TEXT"],options:{}},{label:"Create report script name",field:"script_report",type:m["TEXT"],options:{}},{label:"split data script name",field:"script_split_data",type:m["TEXT"],options:{}},{label:"Path to log training file",field:"path_log_training",type:m["TEXT"],options:{}},{label:"Path to log test file",field:"path_log_test",type:m["TEXT"],options:{}},{label:"Path to log validate file",field:"path_log_validate",type:m["TEXT"],options:{}},{label:"Path to exported model file",field:"path_field_export_model",type:m["TEXT"],options:{}},{label:"Path to exported results file",field:"path_field_export_results",type:m["TEXT"],options:{}},{label:"Path to exported images folder",field:"path_field_export_images",type:m["TEXT"],options:{}},{label:"Path to train folder",field:"path_train",type:m["TEXT"],options:{}},{label:"Path to test folder",field:"path_test",type:m["TEXT"],options:{}},{label:"Path to validate folder",field:"path_validate",type:m["TEXT"],options:{}},{label:"The numbers of lines to be displayed",field:"ViewLogLines",type:m["NUMBER"],options:{}},{label:"Default epoch",field:"defaultEpoch",type:m["NUMBER"],options:{}},{label:"Default learning rate",field:"defaultLearningRate",type:m["NUMBER"],options:{}},{label:"Tenser Board Url",field:"LiveViewURL",type:m["TEXT"],options:{}}],data:{},fields:{max_train_steps:0,classes:[],model_dir:"",batch_size:0,input_width:0,input_height:0,input_depth:0,augmentation_noise_std:0,augmentation_brightness_delta:0,learning_rate:0,enable_linear_stretch_images:!1,enable_augmentation_noise:!1,enable_augmentation_mirror:!1,enable_augmentation_brigthness:!1,rename:!1,network_architecture:"",good_class:"",log_every_n_steps:0,workspace:"",script_training:null,script_test:null,script_validate:null,script_stop_training:null,script_stop_test:null,script_stop_validation:null,script_export_model:null,script_export_result:null,script_export_image:null,script_report:null,script_split_data:null,path_log_training:null,path_log_test:null,path_log_validate:null,path_field_export_model:null,path_field_export_results:null,path_field_export_images:null,path_train:null,path_test:null,path_validate:null,defaultEpoch:null,defaultLearningRate:null,LiveViewURL:null},fetchCount:1,editor:null}},methods:{loadFile:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,a,i,o,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.ws.split("/").pop(),e.next=3,r.a.get("".concat(Object(l["a"])()).concat(n,"/TFSettings.json"));case 3:a=e.sent,i=a.data,Object.keys(t.fields).forEach((function(e){t.fields[e]=i[e]||t.fields[e]})),t.fetchCount+=1,t.data="object"===Object(u["a"])(i)?i:{},t.canEditConfigAIUI||(o=document.getElementById("wsjsoneditor"),s={mode:"code"},c=new b.a(o,s),t.editor=c,c.set(t.data));case 9:case"end":return e.stop()}}),e)})))()},saveFile:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return!t.canEditConfigAIUI&&t.editor&&(t.data=t.editor.get()),n=Object(o["a"])({},t.fields,{},t.data),a="".concat(t.ws,"/TFSettings.json"),e.next=5,g["a"].saveFile(a,JSON.stringify(n,null,2));case 5:t.$refs.modal.hide();case 6:case"end":return e.stop()}}),e)})))()},onOpen:function(){this.loadFile()}},computed:Object(o["a"])({},Object(f["b"])(["canEditConfigAIUI"]))},y=v,T=n("0c7c"),w=Object(T["a"])(y,c,p,!1,null,"9d8c5718",null),E=w.exports,k=n("1fd3"),x={name:"Train",components:{TFOption:E},mixins:[k["a"]],data:function(){return{commands:[{value:"script_split_data",label:"Run split data",icon:"split"},{value:"script_training",label:"Run train"},{value:"script_stop_training",label:"Stop running train"}],trainLog:null,tenserBoard:null}},computed:Object(o["a"])({},Object(f["b"])(["editConfigAI"])),methods:{fetch:function(){var t=this;if(g["a"].getLogFor("training").then((function(e){t.trainLog=e})),this.workspace){var e=this.workspace.split("/").pop();r.a.get("".concat(Object(l["a"])()).concat(e,"/TFSettings.json")).then((function(e){var n=e.data;n&&(t.tenserBoard=n.LiveViewURL)}))}},showModal:function(){this.$refs.modal.$refs.modal.show()}},watch:{workspace:function(){this.fetch()}},mounted:function(){this.fetch()}},L=x,R=(n("3ce4"),Object(T["a"])(L,a,i,!1,null,null,null));e["default"]=R.exports},"1fd3":function(t,e,n){"use strict";n("99af"),n("4160"),n("b64b"),n("159b"),n("96cf");var a=n("1da1"),i=n("5530"),o=n("2f62"),s=n("7c15"),r=n("29b2");e["a"]={data:function(){return{isLoading:{statistic:!1,train:!1,test:!1,validate:!1,export:!1,stop:!1,ExportImages:!1},logs:{training:{},test:{},validate:{},export_model:null,export_results:null,export_images:null},running:null,workspace:null,checkInterval:750,commands:[],twoLogLines:null,status:null}},computed:Object(i["a"])({},Object(o["b"])(["currentWs"])),methods:{openLogsFor:function(t){window.open("/logs/".concat(t,"?sessionToken=").concat(localStorage.getItem("sessionToken")))},checkStatus:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].getRunningState();case 2:t.running=e.sent;case 3:case"end":return e.stop()}}),e)})))()},checkWorkspace:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].getWorkspace();case 2:t.workspace=e.sent,console.log("Workspace: ".concat(t.workspace));case 4:case"end":return e.stop()}}),e)})))()},runCommand:function(t,e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.isLoading[t]=!0,a.prev=1,a.next=4,s["a"].runCommand(t,e);case 4:return a.next=6,n.checkStatus();case 6:a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](1),console.log(a.t0);case 11:n.isLoading[t]=!1;case 12:case"end":return a.stop()}}),a,null,[[1,8]])})))()}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.sessionUser=localStorage.getItem("sessionUser"),e.next=3,t.checkStatus();case 3:return e.next=5,t.checkWorkspace();case 5:return e.next=7,s["a"].getLastLogs();case 7:t.logs=e.sent,r["a"].subscibeForFolder("lock.txt",(function(e){"unlink"===e.event&&(t.running=!1),"change"===e.event&&(t.running=e.content),t.isLoading.train=Boolean(t.running),t.isLoading.test=Boolean(t.running),t.isLoading.validate=Boolean(t.running)})),r["a"].subscibeForFolder("workspace.bat",(function(e){"unlink"===e.event&&(t.workspace=!1),"change"===e.event&&(t.workspace=e.content)})),r["a"].subscribe("logfile",(function(e){e.forEach((function(e){e&&t.logs[e.file]&&(t.logs[e.file].lastLine=e.lastLine)}))})),r["a"].subscribe("exportFile",(function(e){Object.keys(e).forEach((function(n){t.logs[n]=e[n]}))})),r["a"].subscribe("lock.txt",(function(e){"unlink"===e.event&&(t.running=!1),"change"===e.event&&(t.running=e.content)})),r["a"].subscribe("workspace.bat",(function(e){"unlink"===e.event&&(t.workspace=!1),"change"===e.event&&(t.workspace=e.content)})),r["a"].subscribe("zipDone",(function(e){t.logs[e.field]=e.path}));case 15:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r["a"].unsubscribeForFolder("lock.txt"),r["a"].unsubscribeForFolder("workspace.bat");case 2:case"end":return t.stop()}}),t)})))()}}},"3ce4":function(t,e,n){"use strict";var a=n("8bd6"),i=n.n(a);i.a},"53ca":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}},"8bd6":function(t,e,n){}}]);
//# sourceMappingURL=chunk-152f6fe8.2042ae3b.js.map