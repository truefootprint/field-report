(this["webpackJsonpfield-report"]=this["webpackJsonpfield-report"]||[]).push([[0],{118:function(e,a,t){e.exports=t.p+"static/media/TF-White.c926635b.svg"},126:function(e,a,t){e.exports=t(322)},131:function(e,a,t){},132:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},133:function(e,a,t){},322:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),o=(t(131),t(10)),s=t(28),m=t(7),i=(t(132),t(133),t(62)),d=t.n(i),u=t(110),p=t(18),E=t.n(p);var g=function(e){Object(m.f)();var a=Object(n.useState)(""),t=Object(o.a)(a,2),c=t[0],l=t[1],s=function(){var a=Object(u.a)(d.a.mark((function a(){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.a.get("".concat("https://field-backend.truefootprint.com","/reports/setup_report_form"),{headers:{Authorization:"Basic ".concat(c)}}).then((function(e){return e})).catch((function(e){console.log(e)}));case 2:200===a.sent.status&&(console.log("BEFORE REDIRECT"),e.setLogin(!0),localStorage.setItem("token",c)),e.history.push("/dashboard");case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-xl-10 col-lg-12 col-md-9"},r.a.createElement("div",{className:"card o-hidden border-0 shadow-lg my-5"},r.a.createElement("div",{className:"card-body p-0"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 d-none d-lg-block bg-login-image"}),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"p-5"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"h4 text-gray-900 mb-4"},"Welcome Back!")),r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-control-user",id:"exampleInputEmail",placeholder:"Enter Email Address..."})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",onChange:function(e){l(btoa("user:".concat(e.target.value)))},className:"form-control form-control-user",placeholder:"Password"})),r.a.createElement("div",{className:"form-group"}),r.a.createElement("button",{onClick:s,className:"btn btn-primary btn-user btn-block"},"Login"),r.a.createElement("hr",null)),r.a.createElement("hr",null)))))))))},f=(t(80),t(81),t(19)),h=t(29),b=t(326),v=t(112),y=t(331),N=t(329),w=t(327);var j,x=function(e){var a=Object(n.useState)(0),c=Object(o.a)(a,2),l=c[0],s=c[1],m=function(){return s(0)},i=function(e){return s(e)},d={scales:{yAxes:[{}],xAxes:[{barThickness:10,maxBarThickness:18,ticks:{min:0,precision:0},barPercentage:.5}]}};return t(249),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(v.a,null,r.a.createElement("h3",null," Activity: ",e.project_activity.project_activity_name," "),r.a.createElement("br",null),r.a.createElement(b.a,null,e.project_activity.project_activity_graphs.map((function(e){return r.a.createElement(v.a,{md:4,key:e.question_id},r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},e.question_text)),r.a.createElement("div",{className:"card-body",style:{padding:"5px"}},r.a.createElement(h.HorizontalBar,{options:d,data:e.question_reponses_graph})),r.a.createElement("div",{className:"card-footer",style:{padding:"5px"}},r.a.createElement(b.a,null,r.a.createElement(v.a,{md:3},r.a.createElement(y.a,{size:"sm",variant:"info",onClick:function(){return i("graph-"+e.question_id)}},"Enlarge graph")),r.a.createElement(v.a,{md:3},e.free_text_question&&r.a.createElement(y.a,{size:"sm",variant:"primary",onClick:function(){return i(e.question_id)}},"View responses"))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N.a,{dialogClassName:"modal-90w",show:"graph-"+e.question_id===l,onHide:m,centered:!0},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,e.question_text)),r.a.createElement(N.a.Body,null,r.a.createElement(h.HorizontalBar,{options:d,data:e.question_reponses_graph}))),e.free_text_question&&r.a.createElement(N.a,{dialogClassName:"modal-90w",show:e.question_id===l,onHide:m,centered:!0},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,e.question_text)),r.a.createElement(N.a.Body,null,r.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colspan:"1"},"User ID"),r.a.createElement("th",{colspan:"5"},"Response"),r.a.createElement("th",{colspan:"3"},"Date"),r.a.createElement("th",{colspan:"3"},"Project"))),r.a.createElement("tbody",null,e.responses.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{colspan:"1"},e.user_id),r.a.createElement("td",{colspan:"5"},e.response),r.a.createElement("td",{colspan:"3"},e.date),r.a.createElement("td",{colspan:"3"},e.project))})))))))}))))))},_=t(66),k=t(330),O=t(117),S=t(328),C=t(20);j="https://field-backend.truefootprint.com";var B=function(){var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),m=s[0],i=s[1],d=Object(n.useCallback)((function(e,a){a.photo;var t=a.index;c(t),i(!0)}),[]),u=function(){c(0),i(!1)},p=Object(n.useState)(0),g=Object(o.a)(p,2),N=g[0],w=g[1],B=Object(n.useState)(!1),I=Object(o.a)(B,2),D=I[0],L=I[1],A=Object(n.useCallback)((function(e,a){a.photo;var t=a.index;w(t),L(!0)}),[]),q=function(){w(0),L(!1)},z=Object(n.useState)({}),P=Object(o.a)(z,2),T=P[0],H=P[1],R=Object(n.useState)([]),F=Object(o.a)(R,2),G=F[0],W=F[1],J=Object(n.useState)([]),M=Object(o.a)(J,2),V=M[0],U=M[1],Z=Object(n.useState)({project_id:"",programme_id:"",startDate:new Date,endDate:new Date}),$=Object(o.a)(Z,2),K=$[0],Q=$[1];function X(e){console.log("Set project id"),console.log(e.target.value),Q(Object(f.a)({},K,{project_id:e.target.value}))}Object(n.useEffect)((function(){E.a.get("".concat(j,"/reports/setup_report_form"),{headers:{Authorization:"Basic ".concat(localStorage.getItem("token"))}}).then((function(e){W(e.data.programmes.sort((function(e,a){return e.name.localeCompare(a.name)})))})).catch((function(e){console.log(e)})),document.getElementById("start-date-select").value="2020-06-01",document.getElementById("end-date-select").value=(new Date).toISOString().slice(0,10)}),[]);var Y={scales:{xAxes:[{ticks:{beginAtZero:!0,precision:0}}]}};return r.a.createElement("div",null,r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Select Panel"," ")),r.a.createElement("div",{className:"card-body"},r.a.createElement(k.a,null,r.a.createElement(k.a.Group,null,r.a.createElement(b.a,null,r.a.createElement(v.a,null,r.a.createElement(k.a.Label,null,"Programmes"),r.a.createElement(k.a.Control,{id:"programme-select",as:"select",onChange:function(e){Q(Object(f.a)({},K,{programme_id:e.target.value})),E.a.get("".concat(j,"/reports/get_projects_list/").concat(e.target.value),{headers:{Authorization:"Basic ".concat(localStorage.getItem("token"))}}).then((function(e){U(e.data.projects.sort((function(e,a){return e.name.localeCompare(a.name)})))})).catch((function(e){console.log(e)}))}},G&&G.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement(v.a,null,r.a.createElement(k.a.Label,null,"Projects"),r.a.createElement(k.a.Control,{id:"project-select",as:"select",onChange:X},r.a.createElement("option",{value:"",onSelect:X}," ","All"),V&&V.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement(v.a,null,r.a.createElement(k.a.Label,null,"Start date"),r.a.createElement(O.a,{id:"start-date-select",onChange:function(e){Q(Object(f.a)({},K,{startDate:e.target.value}))},type:"date",style:{width:"100%"}})),r.a.createElement(v.a,null,r.a.createElement(k.a.Label,null,"End date"),r.a.createElement(O.a,{id:"end-date-select",onChange:function(e){return Q(Object(f.a)({},K,{endDate:e.target.value}))},type:"date",style:{width:"100%"}})),r.a.createElement(v.a,null,r.a.createElement(y.a,{variant:"primary",onClick:function(){H({});var e={project_id:document.getElementById("project-select").value,programme_id:document.getElementById("programme-select").value,startDate:document.getElementById("start-date-select").value,endDate:document.getElementById("end-date-select").value};E.a.get("".concat(j,"/reports/99"),{headers:{Authorization:"Basic ".concat(localStorage.getItem("token"))},params:e}).then((function(e){H(e.data)})).catch((function(e){console.log(e)}))},style:{"margin-top":"30px"}},"Generate Report"))))))),r.a.createElement(b.a,null,r.a.createElement(v.a,null,r.a.createElement("h3",null,T&&T.activity?"Programme name: ".concat(T.programme_name,", Project name: ").concat(T.project_name):""))),r.a.createElement("br",null),function(e){if(e&&e.project_issues)return r.a.createElement(v.a,{md:4},r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Issues Reported")),r.a.createElement("div",{className:"card-body"},r.a.createElement(h.HorizontalBar,{data:e.project_issues,options:Y}))))}(T),T.activity&&T.activity.map((function(e){return r.a.createElement(x,{key:e.project_activity_name,project_activity:e})})),r.a.createElement(S.a,{fluid:!0},r.a.createElement(b.a,null,function(e){if(e&&e.photos)return r.a.createElement(v.a,null,r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Gallery (reponses)")),r.a.createElement("div",{className:"card-body"},r.a.createElement(_.a,{photos:e.photos,onClick:d}),r.a.createElement(C.b,null,m?r.a.createElement(C.a,{onClose:u},r.a.createElement(C.c,{currentIndex:t,views:e.photos.map((function(e){return Object(f.a)({},e,{srcset:"hello",caption:e.text})}))})):null))))}(T)),r.a.createElement(b.a,null,function(e){if(e&&e.issue_photos)return r.a.createElement(v.a,null,r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Gallery (Issues)")),r.a.createElement("div",{className:"card-body"},r.a.createElement(_.a,{photos:e.issue_photos,onClick:A}),r.a.createElement(C.b,null,D?r.a.createElement(C.a,{onClose:q},r.a.createElement(C.c,{currentIndex:N,views:e.issue_photos.map((function(e){return Object(f.a)({},e,{srcset:"hello",caption:e.text})}))})):null))))}(T))))},I=t(118),D=t.n(I);var L=function(e){var a=Object(m.f)();return r.a.createElement("div",{id:"wrapper"},r.a.createElement("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",id:"accordionSidebar"},r.a.createElement("div",{className:"sidebar-brand-icon"},r.a.createElement("img",{src:D.a,alt:"Logo"})),r.a.createElement("div",{className:"sidebar-brand-text mx-3"}),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},r.a.createElement("h5",{style:{paddingLeft:"25px"}},"Report Viewer"),r.a.createElement("small",{style:{paddingLeft:"75px"}},"(Beta)"))),r.a.createElement("hr",{className:"sidebar-divider"})),r.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column"},r.a.createElement("div",{id:"content"},r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"},r.a.createElement("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3"},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement("h3",null,"FieldApp reports"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item dropdown no-arrow d-sm-none"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"searchDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"fas fa-search fa-fw"})),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in","aria-labelledby":"searchDropdown"})),r.a.createElement("div",{className:"topbar-divider d-none d-sm-block"}),r.a.createElement("li",{className:"nav-item dropdown no-arrow"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("button",{onClick:function(t){localStorage.removeItem("token"),e.setLogin(!1),a.push("/")},className:"btn btn-primary btn-user btn-block"},"Logout")),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"#"},r.a.createElement("i",{className:"fas fa-user fa-sm fa-fw mr-2 text-gray-400"}),"Profile"),r.a.createElement("a",{className:"dropdown-item",href:"#"},r.a.createElement("i",{className:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"}),"Settings"),r.a.createElement("a",{className:"dropdown-item",href:"#"},r.a.createElement("i",{className:"fas fa-list fa-sm fa-fw mr-2 text-gray-400"}),"Activity Log"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#logoutModal"},r.a.createElement("i",{className:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),"Logout"))))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(B,null))),r.a.createElement("footer",{className:"sticky-footer bg-white"},r.a.createElement("div",{className:"container my-auto"},r.a.createElement("div",{className:"copyright text-center my-auto"},r.a.createElement("span",null,"Copyright \xa9 TrueFootprint 2020"))))))},A=t(119),q=function(e){var a=e.component,t=e.login,n=Object(A.a)(e,["component","login"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(e){return t?r.a.createElement(a,Object.assign({},n,e)):r.a.createElement(m.a,{to:{pathname:"/"}})}}))};var z=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1];return localStorage.removeItem("token"),r.a.createElement(s.a,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(e){return r.a.createElement(g,Object.assign({},e,{setLogin:c}))}}),r.a.createElement(q,{exact:!0,path:"/dashboard",setLogin:c,login:t,component:L}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,a,t){}},[[126,1,2]]]);
//# sourceMappingURL=main.d0090939.chunk.js.map