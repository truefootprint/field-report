(this["webpackJsonpfield-report"]=this["webpackJsonpfield-report"]||[]).push([[0],{113:function(e,a,t){e.exports=t.p+"static/media/TF-White.c926635b.svg"},121:function(e,a,t){e.exports=t(316)},126:function(e,a,t){},127:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},128:function(e,a,t){},316:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),l=t.n(c),o=(t(126),t(27)),s=t(7),m=(t(127),t(128),t(13)),i=t(17),d=t.n(i);var u=function(e){var a=Object(s.f)(),t=Object(n.useState)(""),c=Object(m.a)(t,2),l=c[0],o=c[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-xl-10 col-lg-12 col-md-9"},r.a.createElement("div",{className:"card o-hidden border-0 shadow-lg my-5"},r.a.createElement("div",{className:"card-body p-0"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 d-none d-lg-block bg-login-image"}),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"p-5"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"h4 text-gray-900 mb-4"},"Welcome Back!")),r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-control-user",id:"exampleInputEmail",placeholder:"Enter Email Address..."})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",onChange:function(e){o(btoa("user:".concat(e.target.value)))},className:"form-control form-control-user",placeholder:"Password"})),r.a.createElement("div",{className:"form-group"}),r.a.createElement("button",{onClick:function(e){console.log("WE ARE HERE"),console.log(l),d.a.get("".concat("https://field-backend.truefootprint.com","/reports/setup_report_form"),{headers:{Authorization:"Basic ".concat(l)}}).then((function(e){console.warn("AFTER TOKEN"),console.warn(e),console.log(200===e.status),console.log(l),200===e.status&&(console.log("BEFORE REDIRACT"),localStorage.setItem("token",l))})).catch((function(e){console.log(e)})),localStorage.getItem("token")&&a.push("/dashboard")},className:"btn btn-primary btn-user btn-block"},"Login"),r.a.createElement("hr",null)),r.a.createElement("hr",null)))))))))},p=(t(76),t(77),t(18)),E=t(39),g=t(319),f=t(108);var b,h=function(e){var a={scales:{yAxes:[{}],xAxes:[{barThickness:10,maxBarThickness:18,ticks:{min:0,precision:0},barPercentage:.5}]}};return t(243),r.a.createElement(g.a,null,r.a.createElement(f.a,null,r.a.createElement("h3",null," Activity: ",e.project_activity.project_activity_name," "),r.a.createElement("br",null),r.a.createElement(g.a,null,e.project_activity.project_activity_graphs.map((function(e){return r.a.createElement(f.a,{md:4,key:e.question_id},r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},e.question_text)),r.a.createElement("div",{className:"card-body",style:{padding:"5px"}},r.a.createElement(E.HorizontalBar,{options:a,data:e.question_reponses_graph}),r.a.createElement("hr",null))),r.a.createElement("br",null),r.a.createElement("br",null))})))))},v=t(62),N=t(321),y=t(112),w=t(322),j=t(320),x=t(19);b="https://field-backend.truefootprint.com";var k=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(m.a)(l,2),s=o[0],i=o[1],u=Object(n.useCallback)((function(e,a){a.photo;var t=a.index;c(t),i(!0)}),[]),k=function(){c(0),i(!1)},O=Object(n.useState)(0),_=Object(m.a)(O,2),S=_[0],I=_[1],C=Object(n.useState)(!1),B=Object(m.a)(C,2),A=B[0],D=B[1],L=Object(n.useCallback)((function(e,a){a.photo;var t=a.index;I(t),D(!0)}),[]),R=function(){I(0),D(!1)},T=Object(n.useState)({}),P=Object(m.a)(T,2),z=P[0],F=P[1],W=Object(n.useState)([]),G=Object(m.a)(W,2),q=G[0],H=G[1],J=Object(n.useState)([]),M=Object(m.a)(J,2),K=M[0],V=M[1],Z=Object(n.useState)({project_id:"",programme_id:"",startDate:new Date,endDate:new Date}),$=Object(m.a)(Z,2),Q=$[0],U=$[1];function X(e){console.log("Set project id"),console.log(e.target.value),U(Object(p.a)({},Q,{project_id:e.target.value}))}Object(n.useEffect)((function(){d.a.get("".concat(b,"/reports/setup_report_form"),{headers:{Authorization:"Basic ".concat(localStorage.getItem("token"))}}).then((function(e){H(e.data.programmes.sort((function(e,a){return e.name.localeCompare(a.name)})))})).catch((function(e){console.log(e)})),document.getElementById("start-date-select").value="2020-06-01",document.getElementById("end-date-select").value=(new Date).toISOString().slice(0,10)}),[]);var Y={scales:{xAxes:[{ticks:{beginAtZero:!0,precision:0}}]}};return r.a.createElement("div",null,r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Select Panel"," ")),r.a.createElement("div",{className:"card-body"},r.a.createElement(N.a,null,r.a.createElement(N.a.Group,null,r.a.createElement(g.a,null,r.a.createElement(f.a,null,r.a.createElement(N.a.Label,null,"Programmes"),r.a.createElement(N.a.Control,{id:"programme-select",as:"select",onChange:function(e){U(Object(p.a)({},Q,{programme_id:e.target.value})),d.a.get("".concat(b,"/reports/get_projects_list/").concat(e.target.value),{headers:{Authorization:"Basic ".concat(localStorage.getItem("token"))}}).then((function(e){V(e.data.projects.sort((function(e,a){return e.name.localeCompare(a.name)})))})).catch((function(e){console.log(e)}))}},q&&q.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement(f.a,null,r.a.createElement(N.a.Label,null,"Projects"),r.a.createElement(N.a.Control,{id:"project-select",as:"select",onChange:X},r.a.createElement("option",{value:"",onSelect:X}," ","All"),K&&K.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement(f.a,null,r.a.createElement(N.a.Label,null,"Start date"),r.a.createElement(y.a,{id:"start-date-select",onChange:function(e){U(Object(p.a)({},Q,{startDate:e.target.value}))},type:"date",style:{width:"100%"}})),r.a.createElement(f.a,null,r.a.createElement(N.a.Label,null,"End date"),r.a.createElement(y.a,{id:"end-date-select",onChange:function(e){return U(Object(p.a)({},Q,{endDate:e.target.value}))},type:"date",style:{width:"100%"}})),r.a.createElement(f.a,null,r.a.createElement(w.a,{variant:"primary",onClick:function(){F({});var e={project_id:document.getElementById("project-select").value,programme_id:document.getElementById("programme-select").value,startDate:document.getElementById("start-date-select").value,endDate:document.getElementById("end-date-select").value};d.a.get("".concat(b,"/reports/99"),{headers:{Authorization:"Basic ".concat(localStorage.getItem("token"))},params:e}).then((function(e){F(e.data)})).catch((function(e){console.log(e)}))},style:{"margin-top":"30px"}},"Generate Report"))))))),r.a.createElement(g.a,null,r.a.createElement(f.a,null,r.a.createElement("h3",null,z&&z.activity?"Programme name: ".concat(z.programme_name,", Project name: ").concat(z.project_name):""))),r.a.createElement("br",null),function(e){if(e&&e.project_issues)return r.a.createElement(f.a,{md:4},r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Issues Reported")),r.a.createElement("div",{className:"card-body"},r.a.createElement(E.HorizontalBar,{data:e.project_issues,options:Y}))))}(z),z.activity&&z.activity.map((function(e){return r.a.createElement(h,{key:e.project_activity_name,project_activity:e})})),r.a.createElement(j.a,{fluid:!0},r.a.createElement(g.a,null,function(e){if(e&&e.photos)return r.a.createElement(f.a,null,r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Gallery (reponses)")),r.a.createElement("div",{className:"card-body"},r.a.createElement(v.a,{photos:e.photos,onClick:u}),r.a.createElement(x.b,null,s?r.a.createElement(x.a,{onClose:k},r.a.createElement(x.c,{currentIndex:t,views:e.photos.map((function(e){return Object(p.a)({},e,{srcset:"hello",caption:e.text})}))})):null))))}(z)),r.a.createElement(g.a,null,function(e){if(e&&e.issue_photos)return r.a.createElement(f.a,null,r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Gallery (Issues)")),r.a.createElement("div",{className:"card-body"},r.a.createElement(v.a,{photos:e.issue_photos,onClick:L}),r.a.createElement(x.b,null,A?r.a.createElement(x.a,{onClose:R},r.a.createElement(x.c,{currentIndex:S,views:e.issue_photos.map((function(e){return Object(p.a)({},e,{srcset:"hello",caption:e.text})}))})):null))))}(z))))},O=t(113),_=t.n(O);var S=function(e){var a=Object(s.f)();return r.a.createElement("div",{id:"wrapper"},r.a.createElement("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",id:"accordionSidebar"},r.a.createElement("div",{className:"sidebar-brand-icon"},r.a.createElement("img",{src:_.a,alt:"Logo"})),r.a.createElement("div",{className:"sidebar-brand-text mx-3"}),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},r.a.createElement("h5",{style:{paddingLeft:"25px"}},"Report Viewer"),r.a.createElement("small",{style:{paddingLeft:"75px"}},"(Beta)"))),r.a.createElement("hr",{className:"sidebar-divider"})),r.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column"},r.a.createElement("div",{id:"content"},r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"},r.a.createElement("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3"},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement("h3",null,"FieldApp reports"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item dropdown no-arrow d-sm-none"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"searchDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"fas fa-search fa-fw"})),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in","aria-labelledby":"searchDropdown"})),r.a.createElement("div",{className:"topbar-divider d-none d-sm-block"}),r.a.createElement("li",{className:"nav-item dropdown no-arrow"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("button",{onClick:function(e){localStorage.removeItem("token"),a.push("/field-report")},className:"btn btn-primary btn-user btn-block"},"Logout")),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"#"},r.a.createElement("i",{className:"fas fa-user fa-sm fa-fw mr-2 text-gray-400"}),"Profile"),r.a.createElement("a",{className:"dropdown-item",href:"#"},r.a.createElement("i",{className:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"}),"Settings"),r.a.createElement("a",{className:"dropdown-item",href:"#"},r.a.createElement("i",{className:"fas fa-list fa-sm fa-fw mr-2 text-gray-400"}),"Activity Log"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#logoutModal"},r.a.createElement("i",{className:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),"Logout"))))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(k,null))),r.a.createElement("footer",{className:"sticky-footer bg-white"},r.a.createElement("div",{className:"container my-auto"},r.a.createElement("div",{className:"copyright text-center my-auto"},r.a.createElement("span",null,"Copyright \xa9 TrueFootprint 2020"))))))},I=t(114),C=function(e){var a=e.component,t=e.token,n=Object(I.a)(e,["component","token"]);return r.a.createElement(s.b,Object.assign({},n,{render:function(e){return t?r.a.createElement(a,Object.assign({},n,e)):r.a.createElement(s.a,{to:{pathname:"/"}})}}))};var B=function(){return r.a.createElement(o.a,null,r.a.createElement(s.b,{path:"/",exact:!0,component:u}),r.a.createElement(s.b,{path:"/#",exact:!0,component:u}),r.a.createElement(s.b,{path:"/field-report",exact:!0,component:u}),r.a.createElement(C,{exact:!0,path:"/dashboard",token:localStorage.getItem("token"),component:S}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,a,t){}},[[121,1,2]]]);
//# sourceMappingURL=main.a3de7544.chunk.js.map