(this["webpackJsonpfield-report"]=this["webpackJsonpfield-report"]||[]).push([[0],{120:function(e,t,a){e.exports=a.p+"static/media/TF-White.c926635b.svg"},127:function(e,t,a){e.exports=a(323)},132:function(e,t,a){},133:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},134:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=(a(132),a(8)),s=a(29),m=a(7),i=(a(133),a(134),a(64)),d=a.n(i),u=a(112),E=a(16),p=a.n(E);var g=function(e){Object(m.f)();var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1],s=function(){var t=Object(u.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("".concat("http://localhost:3000","/reports/setup_report_form"),{headers:{Authorization:"Basic ".concat(l)}}).then((function(e){return e})).catch((function(e){console.log(e)}));case 2:200===t.sent.status&&(console.log("BEFORE REDIRECT"),e.setLogin(!0),localStorage.setItem("token",l)),e.history.push("/dashboard");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-xl-10 col-lg-12 col-md-9"},r.a.createElement("div",{className:"card o-hidden border-0 shadow-lg my-5"},r.a.createElement("div",{className:"card-body p-0"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 d-none d-lg-block bg-login-image"}),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"p-5"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"h4 text-gray-900 mb-4"},"Welcome Back!")),r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-control-user",id:"exampleInputEmail",placeholder:"Enter Email Address..."})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",onChange:function(e){c(btoa("user:".concat(e.target.value)))},className:"form-control form-control-user",placeholder:"Password"})),r.a.createElement("div",{className:"form-group"}),r.a.createElement("button",{onClick:s,className:"btn btn-primary btn-user btn-block"},"Login"),r.a.createElement("hr",null)),r.a.createElement("hr",null)))))))))},h=(a(82),a(83),a(20)),v=a(21),f=a(327),b=a(114),y=a(328),N=a(332),w=a(329);var j,_=function(e){var t=Object(n.useState)(0),l=Object(o.a)(t,2),c=l[0],s=l[1],m=function(){return s(0)},i=function(e){return s(e)},d={scales:{yAxes:[{}],xAxes:[{barThickness:10,maxBarThickness:18,ticks:{min:0,precision:0},barPercentage:.5}]}};return a(250),r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(b.a,null,r.a.createElement("h3",null," Activity: ",e.project_activity.project_activity_name," "),r.a.createElement("br",null),r.a.createElement(f.a,null,e.project_activity.project_activity_graphs.map((function(e){return r.a.createElement(b.a,{md:4,key:e.question_id},r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},e.question_text)),r.a.createElement("div",{className:"card-body",style:{padding:"5px"}},r.a.createElement(v.HorizontalBar,{options:d,data:e.question_reponses_graph})),r.a.createElement("div",{className:"card-footer",style:{padding:"5px"}},r.a.createElement(f.a,null,r.a.createElement(b.a,{md:3},r.a.createElement(y.a,{size:"sm",variant:"info",onClick:function(){return i("graph-"+e.question_id)}},"Enlarge graph")),e.free_text_question&&r.a.createElement(b.a,{md:3},r.a.createElement(y.a,{size:"sm",variant:"primary",onClick:function(){return i(e.question_id)}},"View responses")),e.issue_notes&&0!=e.issue_notes.length&&r.a.createElement(b.a,{md:3},r.a.createElement(y.a,{size:"sm",variant:"primary",onClick:function(){return i("issues-"+e.question_id)}},"View issues (",e.issue_notes_count,")"))))),r.a.createElement("br",null),r.a.createElement("br",null),e.issue_notes&&0!=e.issue_notes.length&&r.a.createElement(N.a,{dialogClassName:"modal-90w",show:"issues-"+e.question_id===c,onHide:m,centered:!0},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null," ",e.issue_notes_count,' issues for "',e.question_text,'"')),r.a.createElement(N.a.Body,null,r.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colspan:"1"},"Issue ID"),r.a.createElement("th",{colspan:"5"},"Resolved"),r.a.createElement("th",{colspan:"3"},"User ID"),r.a.createElement("th",{colspan:"3"},"Note"),r.a.createElement("th",{colspan:"3"},"Date"))),r.a.createElement("tbody",null,e.issue_notes.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{colspan:"1"},e.issue_id),r.a.createElement("td",{colspan:"5"},e.resolved?"Resolved":"Not resolved"),r.a.createElement("td",{colspan:"3"},e.user_id),r.a.createElement("td",{colspan:"3"},e.note),r.a.createElement("td",{colspan:"3"},e.date))})))))),r.a.createElement(N.a,{dialogClassName:"modal-90w",show:"graph-"+e.question_id===c,onHide:m,centered:!0},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,e.question_text)),r.a.createElement(N.a.Body,null,r.a.createElement(v.HorizontalBar,{options:d,data:e.question_reponses_graph}))),e.free_text_question&&r.a.createElement(N.a,{dialogClassName:"modal-90w",show:e.question_id===c,onHide:m,centered:!0},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,e.question_text)),r.a.createElement(N.a.Body,null,r.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colspan:"1"},"User ID"),r.a.createElement("th",{colspan:"5"},"Response"),r.a.createElement("th",{colspan:"3"},"Date"),r.a.createElement("th",{colspan:"3"},"Project"))),r.a.createElement("tbody",null,e.responses.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{colspan:"1"},e.user_id),r.a.createElement("td",{colspan:"5"},e.response),r.a.createElement("td",{colspan:"3"},e.date),r.a.createElement("td",{colspan:"3"},e.project))})))))))}))))))},x=a(42),O=a(333),k=a(119),I=a(330),S=a(331),B=a(18),C=a(334);function D(e){var t=e.requestNextImages,a=e.photo_count,l=e.whichPage,c=void 0===l?"responses":l,s=Object(n.useState)(1),m=Object(o.a)(s,2),i=m[0],d=m[1];return r.a.createElement("div",null,r.a.createElement(C.a,null,function(e,t,a){var n=[];console.log("photo count"),console.log(t);for(var l=Math.ceil(t/10),c=function(t){console.log("INSIDE PAGE ITEMS");var l=10*(t-1);n.push(r.a.createElement(C.a.Item,{key:t,active:t===i,onClick:function(){e(l,10,a),d(t)}},t))},o=1;o<=l;o++)c(o);return n}(t,a,c)))}j="http://localhost:3000";var q=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),m=s[0],i=s[1],d=Object(n.useCallback)((function(e,t){t.photo;var a=t.index;l(a),i(!0)}),[]),u=function(){l(0),i(!1)},E=Object(n.useState)(0),g=Object(o.a)(E,2),C=g[0],q=g[1],A=Object(n.useState)(!1),T=Object(o.a)(A,2),L=T[0],P=T[1],H=Object(n.useCallback)((function(e,t){t.photo;var a=t.index;q(a),P(!0)}),[]),z=function(){q(0),P(!1)},R=Object(n.useState)(0),W=Object(o.a)(R,2),F=W[0],G=W[1],M=Object(n.useState)({}),V=Object(o.a)(M,2),U=V[0],J=V[1],Q=Object(n.useState)([]),Y=Object(o.a)(Q,2),Z=Y[0],$=Y[1],K=Object(n.useState)([]),X=Object(o.a)(K,2),ee=X[0],te=X[1],ae=Object(n.useState)([]),ne=Object(o.a)(ae,2),re=ne[0],le=ne[1],ce=Object(n.useState)([]),oe=Object(o.a)(ce,2),se=oe[0],me=oe[1],ie=Object(n.useState)(!1),de=Object(o.a)(ie,2),ue=de[0],Ee=de[1],pe=Object(n.useState)({project_id:"",programme_id:"",startDate:new Date,endDate:new Date}),ge=Object(o.a)(pe,2),he=ge[0],ve=ge[1];function fe(e){console.log("Set project id"),console.log(e.target.value),ve(Object(h.a)({},he,{project_id:e.target.value}))}function be(e,t,a){console.log("-----requestNextImages-----");var n={project_id:document.getElementById("project-select").value,programme_id:document.getElementById("programme-select").value,startDate:document.getElementById("start-date-select").value,endDate:document.getElementById("end-date-select").value,offset:e,limit:t,whichPage:a};p.a.get("".concat(j,"/reports/photos"),{headers:{Authorization:"Basic ".concat(localStorage.getItem("token"))},params:n}).then((function(e){console.log("WHATS IN MY RES?"),console.log(e),console.log(a),"responses"==a?$(e.data.photos):te(e.data.issue_photos)}))}Object(n.useEffect)((function(){p.a.get("".concat(j,"/reports/setup_report_form"),{headers:{Authorization:"Basic ".concat(localStorage.getItem("token"))}}).then((function(e){le(e.data.programmes.sort((function(e,t){return e.name.localeCompare(t.name)})))})).catch((function(e){console.log(e)})),document.getElementById("start-date-select").value="2020-06-01",document.getElementById("end-date-select").value=(new Date).toISOString().slice(0,10)}),[]);var ye={scales:{xAxes:[{ticks:{beginAtZero:!0,precision:0}}]}};return r.a.createElement("div",null,r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Select Panel ")),r.a.createElement("div",{className:"card-body"},r.a.createElement(O.a,null,r.a.createElement(O.a.Group,null,r.a.createElement(f.a,null,r.a.createElement(b.a,null,r.a.createElement(O.a.Label,null,"Programmes"),r.a.createElement(O.a.Control,{id:"programme-select",as:"select",onChange:function(e){ve(Object(h.a)({},he,{programme_id:e.target.value})),p.a.get("".concat(j,"/reports/get_projects_list/").concat(e.target.value),{headers:{Authorization:"Basic ".concat(localStorage.getItem("token"))}}).then((function(e){me(e.data.projects.sort((function(e,t){return e.name.localeCompare(t.name)})))})).catch((function(e){console.log(e)}))}},re&&re.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement(b.a,null,r.a.createElement(O.a.Label,null,"Projects"),r.a.createElement(O.a.Control,{id:"project-select",as:"select",onChange:fe},r.a.createElement("option",{value:"",onSelect:fe}," ","All"),se&&se.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement(b.a,null,r.a.createElement(O.a.Label,null,"Start date"),r.a.createElement(k.a,{id:"start-date-select",onChange:function(e){ve(Object(h.a)({},he,{startDate:e.target.value}))},type:"date",style:{width:"100%"}})),r.a.createElement(b.a,null,r.a.createElement(O.a.Label,null,"End date"),r.a.createElement(k.a,{id:"end-date-select",onChange:function(e){return ve(Object(h.a)({},he,{endDate:e.target.value}))},type:"date",style:{width:"100%"}})),r.a.createElement(b.a,null,r.a.createElement(y.a,{variant:"primary",onClick:function(){Ee(!0),J({});var e={project_id:document.getElementById("project-select").value,programme_id:document.getElementById("programme-select").value,startDate:document.getElementById("start-date-select").value,endDate:document.getElementById("end-date-select").value};p.a.get("".concat(j,"/reports/99"),{headers:{Authorization:"Basic ".concat(localStorage.getItem("token"))},params:e}).then((function(e){Ee(!1),J(e.data),console.log("WHAT IS IN DATA PHOTOS"),console.log(e.data),$(e.data.photos),te(e.data.issue_photos)})).catch((function(e){console.log(e)}))},style:{"margin-top":"30px"}},"Generate Report"))))))),r.a.createElement(f.a,null,r.a.createElement(b.a,null,r.a.createElement("h3",null,U&&U.activity?"Programme name: ".concat(U.programme_name,", Project name: ").concat(U.project_name):""))),r.a.createElement("br",null),ue&&r.a.createElement(f.a,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,{md:{span:3,offset:5}},r.a.createElement(I.a,{animation:"border",variant:"primary"}),"\xa0")),U&&U.activity&&r.a.createElement("div",null,function(e){if(console.log("data.project_issues"),console.log(e.project_issues),e&&e.project_issues)return r.a.createElement(b.a,{md:4},r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Issues Reported")),r.a.createElement("div",{className:"card-body"},r.a.createElement(v.HorizontalBar,{data:e.project_issues,options:ye})),r.a.createElement("div",{className:"card-footer",style:{padding:"5px"}},r.a.createElement(f.a,null,r.a.createElement(b.a,{md:3},e.project_issues.actual_issues&&r.a.createElement(y.a,{size:"sm",variant:"primary",onClick:function(){return G("1")}},"View issues"))))))}(U),U.activity.sort((function(e,t){return e.activity_order>t.activity_order?1:-1})).map((function(e){return r.a.createElement(_,{key:e.project_activity_name,project_activity:e})})),r.a.createElement(S.a,{fluid:!0},r.a.createElement(f.a,null,function(e,t){if(e&&t)return r.a.createElement(b.a,null,r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Gallery (reponses)")),r.a.createElement("div",{className:"card-body"},r.a.createElement(x.a,{photos:t,onClick:d}),r.a.createElement("hr",null),r.a.createElement(D,{requestNextImages:be,photo_count:e.photos_count}),r.a.createElement(B.b,null,m?r.a.createElement(B.a,{onClose:u},r.a.createElement(B.c,{currentIndex:a,views:t.map((function(e){return Object(h.a)({},e,{srcset:"hello",caption:e.text})}))})):null))))}(U,Z)),r.a.createElement(f.a,null,function(e,t){if(e&&t)return r.a.createElement(b.a,null,r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Gallery (Issues)")),r.a.createElement("div",{className:"card-body"},r.a.createElement(x.a,{photos:t,onClick:H}),r.a.createElement("hr",null),r.a.createElement(D,{requestNextImages:be,photo_count:e.issue_photos_count,whichPage:"issues"}),r.a.createElement(B.b,null,L?r.a.createElement(B.a,{onClose:z},r.a.createElement(B.c,{currentIndex:C,views:t.map((function(e){return Object(h.a)({},e,{srcset:"hello",caption:e.text})}))})):null))))}(U,ee)))),U&&U.project_issues&&r.a.createElement(N.a,{dialogClassName:"modal-90w",show:"1"===F,onHide:function(){return G(0)},centered:!0},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,"Project Issues")),r.a.createElement(N.a.Body,null,r.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colspan:"3"},"Question"),r.a.createElement("th",{colspan:"1"},"Issue ID"),r.a.createElement("th",{colspan:"4"},"Resolved"),r.a.createElement("th",{colspan:"3"},"User ID"),r.a.createElement("th",{colspan:"3"},"Note"),r.a.createElement("th",{colspan:"3"},"Date"))),r.a.createElement("tbody",null,U.project_issues.actual_issues.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{colspan:"3"},e.project_question_text),r.a.createElement("td",{colspan:"1"},e.issue_id),r.a.createElement("td",{colspan:"4"},e.resolved?"Resolved":"Not resolved"),r.a.createElement("td",{colspan:"3"},e.user_id),r.a.createElement("td",{colspan:"3"},e.note),r.a.createElement("td",{colspan:"3"},e.date))})))))))},A=a(120),T=a.n(A);var L=function(e){var t=Object(m.f)();return r.a.createElement("div",{id:"wrapper"},r.a.createElement("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",id:"accordionSidebar"},r.a.createElement("div",{className:"sidebar-brand-icon"},r.a.createElement("img",{src:T.a,alt:"Logo"})),r.a.createElement("div",{className:"sidebar-brand-text mx-3"}),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},r.a.createElement("h5",{style:{paddingLeft:"25px"}},"Report Viewer"),r.a.createElement("small",{style:{paddingLeft:"75px"}},"(Beta)"))),r.a.createElement("hr",{className:"sidebar-divider"}),r.a.createElement("hr",{className:"sidebar-divider d-none d-md-block"}),r.a.createElement("div",{className:"text-center d-none d-md-inline"},r.a.createElement("button",{className:"rounded-circle border-0",id:"sidebarToggle"}))),r.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column"},r.a.createElement("div",{id:"content"},r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"},r.a.createElement("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3"},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement("h3",null,"FieldApp reports"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item dropdown no-arrow d-sm-none"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"searchDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"fas fa-search fa-fw"})),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in","aria-labelledby":"searchDropdown"})),r.a.createElement("div",{className:"topbar-divider d-none d-sm-block"}),r.a.createElement("li",{className:"nav-item dropdown no-arrow"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("button",{onClick:function(a){localStorage.removeItem("token"),e.setLogin(!1),t.push("/")},className:"btn btn-primary btn-user btn-block"},"Logout")),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"#"},r.a.createElement("i",{className:"fas fa-user fa-sm fa-fw mr-2 text-gray-400"}),"Profile"),r.a.createElement("a",{className:"dropdown-item",href:"#"},r.a.createElement("i",{className:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"}),"Settings"),r.a.createElement("a",{className:"dropdown-item",href:"#"},r.a.createElement("i",{className:"fas fa-list fa-sm fa-fw mr-2 text-gray-400"}),"Activity Log"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#logoutModal"},r.a.createElement("i",{className:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),"Logout"))))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(q,null))),r.a.createElement("footer",{className:"sticky-footer bg-white"},r.a.createElement("div",{className:"container my-auto"},r.a.createElement("div",{className:"copyright text-center my-auto"},r.a.createElement("span",null,"Copyright \xa9 TrueFootprint 2021"))))))},P=a(121),H=function(e){var t=e.component,a=e.login,n=Object(P.a)(e,["component","login"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,Object.assign({},n,e)):r.a.createElement(m.a,{to:{pathname:"/"}})}}))};var z=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1];return localStorage.removeItem("token"),r.a.createElement(s.a,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(e){return r.a.createElement(g,Object.assign({},e,{setLogin:l}))}}),r.a.createElement(H,{exact:!0,path:"/dashboard",setLogin:l,login:a,component:L}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){}},[[127,1,2]]]);
//# sourceMappingURL=main.161a02f5.chunk.js.map