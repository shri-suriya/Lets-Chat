(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n,s=c(0),a=c.n(s),r=c(35),o=c.n(r),i=(c(44),c(45),c(26)),l=c(2),j=c(19),d=(c(46),c(1)),u=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(j.a)(a,2),o=r[0],l=r[1];return Object(d.jsxs)("div",{className:"container w-25 mt-5",children:[Object(d.jsx)("h1",{className:"login-h1",children:"Login"}),Object(d.jsxs)("form",{method:"post",children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{onChange:function(e){return n(e.target.value)},type:"text",placeholder:"Username",required:!0,className:"form-control form-input"})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"text",placeholder:"Room",required:!0,className:"form-control form-input"})}),Object(d.jsx)(i.b,{onClick:function(e){return c&&o?null:e.preventDefault()},to:"/chat?name=".concat(c,"&room=").concat(o),children:Object(d.jsx)("input",{type:"submit",className:"form-submit",value:"Log In"})})]})]})},m=c(39),b=c(38),h=(c(56),function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(""),o=Object(j.a)(r,2),i=o[0],l=o[1],u=Object(s.useState)([]),h=Object(j.a)(u,2),O=h[0],p=h[1],x=Object(s.useState)(""),f=Object(j.a)(x,2),v=f[0],g=f[1],N=Object(s.useState)([]),y=Object(j.a)(N,2),w=y[0],_=y[1],S="http://localhost:8000";Object(s.useEffect)((function(){var e=window.location.search,t=new URLSearchParams(e),c=t.get("name"),s=t.get("room");return a(c),l(s),(n=Object(b.a)(S)).emit("join",{user:c,room:s},(function(e){})),function(){n.disconnect(),n.off()}}),[S,window.location.search]),Object(s.useEffect)((function(){n.on("message",(function(e){_((function(t){return[].concat(Object(m.a)(t),[e])})),setTimeout((function(){var e=document.getElementById("chat_body");e.scrollTop=e.scrollHeight-e.clientWidth}),10)})),n.on("roomMembers",(function(e){p(e)}))}),[]);return Object(d.jsx)("div",{className:"container mt-4 ",children:Object(d.jsxs)("div",{className:"row chat-window",id:"chat_window_1",children:[Object(d.jsxs)("div",{className:"col-xs-4 col-md-4",children:[Object(d.jsx)("div",{className:"panel-heading top-bar",children:Object(d.jsx)("h5",{children:"ACTIVE USERS"})}),Object(d.jsx)("ul",{children:O.map((function(e,t){return Object(d.jsx)("li",{children:e.user},t)}))})]}),Object(d.jsx)("div",{className:"col-xs-8 col-md-8",children:Object(d.jsxs)("div",{className:"panel panel-default",children:[Object(d.jsx)("div",{className:"panel-heading top-bar",children:Object(d.jsx)("div",{className:"col-md-12 col-xs-8",children:Object(d.jsxs)("h3",{className:"panel-title",children:[Object(d.jsx)("span",{className:"glyphicon glyphicon-comment"}),i]})})}),Object(d.jsx)("div",{className:"panel-body msg_container_base",id:"chat_body",children:w.map((function(e,t){return e.user===(null===c||void 0===c?void 0:c.toLowerCase())?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"row msg_container base_receive",children:Object(d.jsx)("div",{className:"col-xs-10 col-md-10",children:Object(d.jsxs)("div",{className:"messages msg_receive",children:[Object(d.jsx)("p",{children:e.text}),Object(d.jsx)("time",{children:e.user})]})})},t)}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"row msg_container base_sent",children:Object(d.jsx)("div",{className:"col-xs-10 col-md-10",children:Object(d.jsxs)("div",{className:"messages msg_sent",children:[Object(d.jsx)("p",{children:e.text}),Object(d.jsx)("time",{children:e.user})]})})},t)})}))}),Object(d.jsx)("div",{className:"panel-footer",children:Object(d.jsx)("div",{className:"input-group",children:Object(d.jsx)("input",{id:"btn-input",type:"text",value:v,onKeyPress:function(e){return"Enter"===e.key?(e.preventDefault(),n.emit("sendMessage",v,(function(){return g("")})),void setTimeout((function(){var e=document.getElementById("chat_body");e.scrollTop=e.scrollHeight}),100)):null},onChange:function(e){return g(e.target.value)},className:"form-control input-sm chat_input",placeholder:"Write your message here..."})})})]})})]})})});var O=function(){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(l.a,{path:"/",exact:!0,component:u}),Object(d.jsx)(l.a,{path:"/chat",component:h})]})};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.257160e9.chunk.js.map