(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"3ef7":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJfeDMxXzRfY29tbWVudCI+PGc+PGc+PHBhdGggZD0ibTI4IDJoLTI0Yy0xLjY1NCAwLTMgMS4zNDYtMyAzdjE2YzAgMS42NTQgMS4zNDYgMyAzIDNoM3Y1YzAgLjM4NS4yMjEuNzM0LjU2Ni45MDEuMTM5LjA2Ni4yODcuMDk5LjQzNC4wOTkuMjIzIDAgLjQ0NC0uMDc0LjYyNS0uMjE5bDcuMjI2LTUuNzgxaDEyLjE0OWMxLjY1NCAwIDMtMS4zNDYgMy0zdi0xNmMwLTEuNjU0LTEuMzQ2LTMtMy0zeiIgZmlsbD0iI2UzZjJmZCIvPjwvZz48Zz48Zz48cGF0aCBkPSJtOCAzMGMtLjE0NyAwLS4yOTUtLjAzMy0uNDM0LS4wOTktLjM0NS0uMTY3LS41NjYtLjUxNi0uNTY2LS45MDF2LTVoLTNjLTEuNjU0IDAtMy0xLjM0Ni0zLTN2LTE2YzAtMS42NTQgMS4zNDYtMyAzLTNoMjRjMS42NTQgMCAzIDEuMzQ2IDMgM3YxNmMwIDEuNjU0LTEuMzQ2IDMtMyAzaC0xMi4xNDlsLTcuMjI2IDUuNzgxYy0uMTgxLjE0NS0uNDAyLjIxOS0uNjI1LjIxOXptLTQtMjZjLS41NTIgMC0xIC40NDktMSAxdjE2YzAgLjU1MS40NDggMSAxIDFoNGMuNTUzIDAgMSAuNDQ3IDEgMXYzLjkybDUuODc1LTQuNzAxYy4xNzgtLjE0Mi4zOTctLjIxOS42MjUtLjIxOWgxMi41Yy41NTIgMCAxLS40NDkgMS0xdi0xNmMwLS41NTEtLjQ0OC0xLTEtMXoiIGZpbGw9IiM0MmE1ZjUiLz48L2c+PGc+PHBhdGggZD0ibTI0IDEyaC0xNmMtLjU1MyAwLTEtLjQ0OC0xLTFzLjQ0Ny0xIDEtMWgxNmMuNTUzIDAgMSAuNDQ4IDEgMXMtLjQ0NyAxLTEgMXoiIGZpbGw9IiM0MmE1ZjUiLz48L2c+PGc+PHBhdGggZD0ibTE2IDE2aC04Yy0uNTUzIDAtMS0uNDQ4LTEtMXMuNDQ3LTEgMS0xaDhjLjU1MyAwIDEgLjQ0OCAxIDFzLS40NDcgMS0xIDF6IiBmaWxsPSIjNDJhNWY1Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="},"4fc9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",[[r("div",[r("q-table",{class:"ios"===e.is_mobile?"my-sticky-dynamic table-top-ios":"android"===e.is_mobile?"my-sticky-dynamic table-top-android":"my-sticky-dynamic",attrs:{data:e.monthlyList,columns:"admin"===e.userLevel?e.columns_admin:e.columns,"row-key":"report_date",filter:e.filter,"binary-state-sort":"",pagination:e.pagination,"virtual-scroll":"","virtual-scroll-item-size":48,"virtual-scroll-sticky-size-start":48,"rows-per-page-options":[0]},on:{request:e.getMonthlyList,"update:pagination":function(t){e.pagination=t},"virtual-scroll":e.onScroll},scopedSlots:e._u([{key:"top",fn:function(){return[r("div",{staticClass:"col-6 row justify-start"},[r("q-select",{staticClass:"text-white q-mr-xs q-mb-sm q-select-list",staticStyle:{"min-width":"130px"},attrs:{dense:"",options:e.driverNames,"option-value":function(e){return null==e?null:e},"option-label":function(e){return null==e?"- Null -":e.driver_name},"bg-color":"transparent",color:"blue-7",label:"DRIVER","label-color":"white",behavior:"menu"},on:{input:e.onChangeDriver},scopedSlots:e._u([e.selectedDriver?{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer text-white",attrs:{name:"cancel"},on:{click:[function(t){t.stopPropagation(),e.selectedDriver=null},e.onChangeDriver]}})]},proxy:!0}:null],null,!0),model:{value:e.selectedDriver,callback:function(t){e.selectedDriver=t},expression:"selectedDriver"}}),r("q-select",{staticClass:"q-mb-sm q-select-list",staticStyle:{"min-width":"130px"},attrs:{dense:"",options:e.routeNumbers,"option-value":function(e){return null==e?null:e},"option-label":function(e){return null==e?"- Null -":e.route_number},"bg-color":"transparent",color:"blue-7",label:"ROUTE","label-color":"white","text-color":"white",behavior:"menu"},on:{input:e.onChangeRoute},scopedSlots:e._u([e.selectedRoute?{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer text-white",attrs:{name:"cancel"},on:{click:[function(t){t.stopPropagation(),e.selectedRoute=null},e.onChangeRoute]}})]},proxy:!0}:null],null,!0),model:{value:e.selectedRoute,callback:function(t){e.selectedRoute=t},expression:"selectedRoute"}})],1),r("div",{staticClass:"col-6 row justify-end"},[r("q-input",{staticClass:"q-mb-sm",staticStyle:{width:"130px"},attrs:{dense:"","input-class":"text-white",color:"blue-7",label:"Start date","label-color":"white"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"white"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-date",{attrs:{minimal:"",mask:"DD/MM/YY ddd",color:"blue-7","first-day-of-week":"1"},model:{value:e.fromDate,callback:function(t){e.fromDate=t},expression:"fromDate"}},[r("div",{staticClass:"row items-center justify-end q-gutter-sm"},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"OK",color:"blue-7",flat:""},on:{click:e.onFromDateChanged}})],1)])],1)],1)]},proxy:!0}]),model:{value:e.fromDate,callback:function(t){e.fromDate=t},expression:"fromDate"}}),r("q-input",{staticClass:"q-ml-xs q-mb-sm",staticStyle:{width:"130px"},attrs:{dense:"","input-class":"text-white",color:"blue-7",label:"End date","label-color":"white"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"white"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-date",{attrs:{minimal:"",mask:"DD/MM/YY ddd",color:"blue-7","first-day-of-week":"1"},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}},[r("div",{staticClass:"row items-center justify-end q-gutter-sm"},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"OK",color:"blue-7",flat:""},on:{click:e.onEndDateChanged}})],1)])],1)],1)]},proxy:!0}]),model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)]},proxy:!0},{key:"body",fn:function(t){return[t.row.user?r("q-tr",{attrs:{props:t},nativeOn:{click:function(a){1===t.row.is_group?e.goToDailyDetail(t.row):e.goToExtraDetail(t.row)}}},[r("q-td",{key:"index",attrs:{props:t}},[e._v(e._s(t.row.index))]),r("q-td",{key:"report_date",staticClass:"text-uppercase",attrs:{props:t}},[e._v(e._s(e.changeDateFormat(t.row.report_date)))]),r("q-td",{key:"route_number",attrs:{props:t}},[e._v(e._s(t.row.route_number))]),r("q-td",{key:"driver_name",attrs:{props:t}},[e._v(e._s(t.row.driver_name))]),r("q-td",{key:"current_paytype",attrs:{props:t}},[e._v(e._s("fixed"===t.row.current_paytype?"FIXED":"PAY PER STOP"))]),r("q-td",{key:"stops",attrs:{props:t}},[e._v(e._s("fixed"===t.row.current_paytype?"-":t.row.stops))]),r("q-td",{key:"payment",attrs:{props:t}},[e._v(e._s(t.row.payment?"£"+t.row.payment:""))]),r("q-td",{key:"comments",attrs:{props:t}},[t.row.comments?r("q-icon",[r("img",{attrs:{width:"22px",src:a("3ef7")}})]):r("q-icon",[r("img",{staticStyle:{opacity:"0.4"},attrs:{width:"22px",src:a("72a5")}})])],1),r("q-td",{key:"is_group",attrs:{props:t}},[e._v(e._s(1===t.row.is_group?"DAILY":"EXTRA"))]),"admin"===e.userLevel?r("q-td",{key:"depot_location",attrs:{props:t}},[e._v(e._s(t.row.user?t.row.user.depot_location:""))]):e._e(),"admin"===e.userLevel?r("q-td",{key:"user_name",attrs:{props:t}},[e._v(e._s(t.row.user?t.row.user.name:""))]):e._e()],1):e._e()]}},{key:"bottom",fn:function(){return[r("div",{staticClass:"col-12 row justify-between"},[r("div",{staticClass:"q-my-auto"},[r("q-btn",{staticClass:"q-ma-none",staticStyle:{width:"60px",height:"30px"},attrs:{label:"Export","no-caps":"",dense:"",rounded:"",outline:""},on:{click:e.exportTable}})],1),r("div",{staticClass:"row justify-end items-center"},[e._v("\n              STOPS: "+e._s(e.totalStops())+"  \n              PAYMENT: "+e._s(e.totalPayment())+" £\n            ")])])]},proxy:!0}])})],1)]],2)},n=[],i=(a("c5f6"),a("7f7f"),a("a34a")),o=a.n(i),s=(a("96cf"),a("c973")),l=a.n(s),c=(a("28a5"),a("1e53")),u=a("f508"),d=a("bd4c"),p=a("a357");function m(e,t){var a=void 0!==t?t(e):e;return a=void 0===a||null===a?"":String(a),a=a.split('"').join('""'),'"'.concat(a,'"')}var M={name:"MonthlyReportList",components:{},data:function(){return{filter:"",fromDate:"",fromDateAPI:"",endDate:"",endDateAPI:"",showDetail:!1,pagination:{sortBy:"report_date",descending:!0,page:1,rowsPerPage:100,rowsNumber:2e4},columns:[{name:"index",required:!0,label:"NO",align:"left",field:"index"},{name:"report_date",required:!0,label:"DATE",align:"left",field:"report_date"},{name:"route_number",required:!0,label:"ROUTE",align:"left",field:"route_number"},{name:"driver_name",required:!0,label:"DRIVER",align:"left",field:"driver_name"},{name:"current_paytype",required:!0,label:"PAY TYPE",align:"left",field:"current_paytype"},{name:"stops",required:!0,label:"STOPS",align:"left",field:"stops"},{name:"payment",required:!0,label:"PAYMENT",align:"left",field:"payment"},{name:"comments",required:!0,label:"COMMENTS",align:"center",field:"comments"},{name:"is_group",required:!0,label:"TYPE",align:"left",field:"is_group"}],columns_admin:[{name:"index",required:!0,label:"NO",align:"left",field:"index"},{name:"report_date",required:!0,label:"DATE",align:"left",field:"report_date"},{name:"route_number",required:!0,label:"ROUTE",align:"left",field:"route_number"},{name:"driver_name",required:!0,label:"DRIVER",align:"left",field:"driver_name"},{name:"current_paytype",required:!0,label:"PAY TYPE",align:"left",field:"current_paytype"},{name:"stops",required:!0,label:"STOPS",align:"left",field:"stops"},{name:"payment",required:!0,label:"PAYMENT",align:"left",field:"payment"},{name:"comments",required:!0,label:"COMMENTS",align:"center",field:"comments"},{name:"is_group",required:!0,label:"TYPE",align:"left",field:"is_group"},{name:"depot_location",required:!0,label:"DEPOT",align:"left",field:"depot_location"},{name:"user_name",required:!0,label:"USER",align:"left",field:"user_name"}],monthlyList:[],monthlyAll:[],selectedRecord:{id:"",report_date:"",report_title:"",driver_id:"",route_id:""},isNewRecord:!1,dialogTitle:"",routes:[],drivers:[],filteredNames:[],rnc_id:"",is_mobile:"web",isDateFilter:!1,selectedDriver:null,driverNames:[],selectedRoute:null,routeNumbers:[]}},computed:{userLevel:{get:function(){return this.$store.state.auth.userLevel}}},mounted:function(){var e=this;return l()(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.checkPlatform(),e.$store.commit("auth/pageTitle",e.$router.currentRoute.meta.title),t.next=4,e.getDriverAll();case 4:return t.next=6,e.getRouteAll();case 6:e.fromDate=d["b"].formatDate(new Date,"DD/MM/YY ddd"),e.fromDateAPI=d["b"].formatDate(d["b"].startOfDate(new Date,"month"),"YYYY-MM-DD"),e.endDate=d["b"].formatDate(new Date,"DD/MM/YY ddd"),e.endDateAPI=d["b"].formatDate(new Date,"YYYY-MM-DD"),e.getMonthlyList({pagination:e.pagination,filter:void 0});case 11:case"end":return t.stop()}}),t)})))()},methods:{checkPlatform:function(){this.$q.platform.is.mobile?this.$q.platform.is.ios?this.is_mobile="ios":this.is_mobile="android":this.is_mobile="web"},changeDateFormat:function(e){var t=d["b"].formatDate(d["b"].addToDate(d["b"].extractDate(e,"YYYY-MM-DD"),{hours:5}),"DD-MM-YY dddd");return t},onFromDateChanged:function(e){this.fromDateAPI=d["b"].formatDate(d["b"].extractDate(this.fromDate,"DD/MM/YY ddd"),"YYYY-MM-DD"),this.isDateFilter=!0,this.pagination.page=1,this.getMonthlyList({pagination:this.pagination,filter:this.filter})},onEndDateChanged:function(e){this.endDateAPI=d["b"].formatDate(d["b"].extractDate(this.endDate,"DD/MM/YY ddd"),"YYYY-MM-DD"),this.isDateFilter=!0,this.pagination.page=1,this.getMonthlyList({pagination:this.pagination,filter:this.filter})},goToDailyDetail:function(e){var t=this;return l()(o.a.mark((function a(){return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e&&t.$router.push({name:"Edit Daily Schedule",params:{reportNo:e.report_no}});case 1:case"end":return a.stop()}}),a)})))()},goToExtraDetail:function(e){var t=this;return l()(o.a.mark((function a(){return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e&&t.$router.push({name:"Edit Extra Schedule",params:{reportNo:e.report_no}});case 1:case"end":return a.stop()}}),a)})))()},onScroll:function(e){var t=this;return l()(o.a.mark((function a(){var r,n,i,s,l,c,u;return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=e.index,e.from,e.to,e.ref,n=t.pagination,i=n.page,s=n.rowsPerPage,l=n.rowsNumber,c=t.monthlyList.length-1,u=Math.ceil(l/s),!(r>0&&i<u&&r===c)){a.next=8;break}return t.pagination.page++,a.next=8,t.getMonthlyList({pagination:t.pagination,filter:t.filter,isScroll:!0});case 8:case"end":return a.stop()}}),a)})))()},getDriverAll:function(){var e=l()(o.a.mark((function e(){var t;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].getDriverList();case 3:t=e.sent,this.driverNames=t.data.data,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),getRouteAll:function(){var e=l()(o.a.mark((function e(){var t;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].getMonthlyRouteAll();case 3:t=e.sent,this.routeNumbers=t.data.data,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),onChangeDriver:function(){this.getMonthlyList({pagination:this.pagination,isScroll:!1})},onChangeRoute:function(){this.getMonthlyList({pagination:this.pagination,isScroll:!1})},getMonthlyList:function(){var e=l()(o.a.mark((function e(t){var a,r,n,i,s,l,d,p,m,M,f;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.pagination,r=a.page,n=a.rowsPerPage,i=a.rowsNumber,s=a.sortBy,l=a.descending,t.filter,d=t.isScroll,p=0===n?i:n,m=(r-1)*n,M={conditions:{is_date_filter:!0},start:m,numPerPage:p,sortBy:s,descending:l,fromDate:this.fromDateAPI,endDate:this.endDateAPI},this.selectedDriver&&(M.conditions.driver_name=this.selectedDriver.driver_name),this.selectedRoute&&(M.conditions.route_number=this.selectedRoute.route_number),this.isDateFilter||(M.conditions.is_date_filter=!1),u["a"].show(),e.prev=10,e.next=13,c["a"].getMonthlyReports(M);case 13:f=e.sent,u["a"].hide(),f.data.data.forEach((function(e,t){e.index=100*(r-1)+t+1})),this.monthlyList=d?this.monthlyList.concat(f.data.data):f.data.data,this.pagination.rowsNumber=f.data.totalCount,this.pagination.page=r,this.pagination.rowsPerPage=n,this.pagination.sortBy=s,this.pagination.descending=l,e.next=28;break;case 24:e.prev=24,e.t0=e["catch"](10),u["a"].hide(),console.log("errorrrrrrrrrr",e.t0);case 28:case"end":return e.stop()}}),e,this,[[10,24]])})));function t(t){return e.apply(this,arguments)}return t}(),getMonthlyAll:function(){var e=l()(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.filter,a={conditions:{is_date_filter:!0},fromDate:this.fromDateAPI,endDate:this.endDateAPI},this.selectedDriver&&(a.conditions.driver_name=this.selectedDriver.driver_name),this.selectedRoute&&(a.conditions.route_number=this.selectedRoute.route_number),this.isDateFilter){e.next=9;break}a.conditions.is_date_filter=!1,this.$q.notify({color:"negative",position:"top",message:"Please choose the date range for exporting"}),e.next=23;break;case 9:return u["a"].show(),e.prev=10,e.next=13,c["a"].getMonthlyReportsAll(a);case 13:r=e.sent,u["a"].hide(),r.data.data.forEach((function(e,t){e.index=t+1})),this.monthlyAll=r.data.data,e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](10),u["a"].hide(),console.log("errorrrrrrrr",e.t0);case 23:case"end":return e.stop()}}),e,this,[[10,19]])})));function t(t){return e.apply(this,arguments)}return t}(),exportTable:function(){var e=this;return l()(o.a.mark((function t(){var a,r,n;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMonthlyAll({filter:e.filter});case 2:e.monthlyAll.length&&(a="admin"===e.userLevel?e.columns_admin:e.columns,r=[a.map((function(e){return m(e.label)}))].concat(e.monthlyAll.map((function(e){return a.map((function(t){return"is_group"===t.field?m(1===e.is_group?"DAILY":"EXTRA",t.format):"user_name"===t.field?m(e.user.name,t.format):"depot_location"===t.field?m(e.user.depot_location,t.format):"current_paytype"===t.field?m("fixed"===e.current_paytype?"FIXED":"PAY PER STOP",t.format):m(e[t.field],t.format)})).join(",")}))).join("\r\n"),n=Object(p["a"])("table-export.csv",r,"text/csv"),!0!==n&&e.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"}));case 3:case"end":return t.stop()}}),t)})))()},totalStops:function(){return this.monthlyList.reduce((function(e,t){return"per_stop"==t["current_paytype"]?e+Number(t["stops"]):e+0}),0)},totalPayment:function(){var e=0;return e=this.monthlyList.reduce((function(e,t){return e+Number(t["payment"])}),0),e.toFixed(2)}},created:function(){}},f=M,D=a("2877"),g=a("9989"),h=a("eaac"),y=a("ddd8"),x=a("0016"),b=a("27f9"),v=a("7cbe"),w=a("52ee"),L=a("9c40"),N=a("bd08"),_=a("db86"),j=a("7f67"),T=a("eebe"),I=a.n(T),S=Object(D["a"])(f,r,n,!1,null,null,null);t["default"]=S.exports;I()(S,"components",{QPage:g["a"],QTable:h["a"],QSelect:y["a"],QIcon:x["a"],QInput:b["a"],QPopupProxy:v["a"],QDate:w["a"],QBtn:L["a"],QTr:N["a"],QTd:_["a"]}),I()(S,"directives",{ClosePopup:j["a"]})},"72a5":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBpZD0iX3gzMV80X2NvbW1lbnQiPjxnPjxwYXRoIGQ9Im04IDMwYy0uMTQ3IDAtLjI5NS0uMDMzLS40MzQtLjA5OS0uMzQ1LS4xNjctLjU2Ni0uNTE2LS41NjYtLjkwMXYtNWgtM2MtMS42NTQgMC0zLTEuMzQ2LTMtM3YtMTZjMC0xLjY1NCAxLjM0Ni0zIDMtM2gyNGMxLjY1NCAwIDMgMS4zNDYgMyAzdjE2YzAgMS42NTQtMS4zNDYgMy0zIDNoLTEyLjE0OWwtNy4yMjYgNS43ODFjLS4xODEuMTQ1LS40MDIuMjE5LS42MjUuMjE5em0tNC0yNmMtLjU1MiAwLTEgLjQ0OS0xIDF2MTZjMCAuNTUxLjQ0OCAxIDEgMWg0Yy41NTMgMCAxIC40NDcgMSAxdjMuOTJsNS44NzUtNC43MDFjLjE3OC0uMTQyLjM5Ny0uMjE5LjYyNS0uMjE5aDEyLjVjLjU1MiAwIDEtLjQ0OSAxLTF2LTE2YzAtLjU1MS0uNDQ4LTEtMS0xeiIvPjwvZz48Zz48cGF0aCBkPSJtMjQgMTJoLTE2Yy0uNTUzIDAtMS0uNDQ4LTEtMXMuNDQ3LTEgMS0xaDE2Yy41NTMgMCAxIC40NDggMSAxcy0uNDQ3IDEtMSAxeiIvPjwvZz48Zz48cGF0aCBkPSJtMTYgMTZoLThjLS41NTMgMC0xLS40NDgtMS0xcy40NDctMSAxLTFoOGMuNTUzIDAgMSAuNDQ4IDEgMXMtLjQ0NyAxLTEgMXoiLz48L2c+PC9nPjwvc3ZnPg=="}}]);