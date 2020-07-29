(this["webpackJsonptodo-front"]=this["webpackJsonptodo-front"]||[]).push([[0],{29:function(e,t,a){e.exports=a(59)},34:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),s=a.n(o),c=(a(34),a(8)),l=a.n(c),u=a(12),i=a(6),m=a(9),p=a(1),d=a(10),g=a.n(d),f=Object(n.createContext)(null);function h(){var e=Object(n.useContext)(f),t=e.userData,a=e.setUserData,o=Object(p.f)();return r.a.createElement("nav",{className:"auth-options"},t.user?r.a.createElement("button",{onClick:function(){a({token:void 0,user:void 0}),localStorage.setItem("auth-token","")}},"Log out"):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return o.push("/register")}},"Register"),r.a.createElement("button",{onClick:function(){return o.push("/login")}},"Log in")))}function E(){return r.a.createElement("header",{id:"header"},r.a.createElement(m.b,{to:"/"},r.a.createElement("h1",{className:"title"},"Simple Todo's!")),r.a.createElement(h,null))}var b=function(){var e=Object(n.useContext)(f).userData,t=Object(p.f)();return Object(n.useEffect)((function(){console.log("in home.js useEffect"),console.log(e.user),e.user||t.push("/login")})),r.a.createElement("div",{className:"page"},"Home")};function v(e){return r.a.createElement("div",{className:"error-notice"},r.a.createElement("span",null,e.message),r.a.createElement("button",{onClick:e.clearError},"X"))}function j(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],o=t[1],s=Object(n.useState)(),c=Object(i.a)(s,2),m=c[0],d=c[1],h=Object(n.useState)(),E=Object(i.a)(h,2),b=E[0],j=E[1],k=Object(n.useContext)(f).setUserData,O=Object(p.f)(),w=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:a,password:m},e.next=5,g.a.post("/api/users/login",n);case 5:r=e.sent,k({token:r.data.token,user:r.data.user}),localStorage.setItem("auth-token",r.data.token),O.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response.data.msg&&j(e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page"},r.a.createElement("h2",null,"Login"),b&&r.a.createElement(v,{message:b,clearError:function(){return j(void 0)}}),r.a.createElement("form",{className:"form",onSubmit:w},r.a.createElement("label",{htmlFor:"login-email"},"Email"),r.a.createElement("input",{id:"login-email",type:"email",onChange:function(e){return o(e.target.value)}}),r.a.createElement("label",{htmlFor:"login-password"},"Password"),r.a.createElement("input",{id:"login-password",type:"password",onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Log in"})))}function k(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],o=t[1],s=Object(n.useState)(),c=Object(i.a)(s,2),m=c[0],d=c[1],h=Object(n.useState)(),E=Object(i.a)(h,2),b=E[0],j=E[1],k=Object(n.useState)(),O=Object(i.a)(k,2),w=O[0],x=O[1],y=Object(n.useState)(),S=Object(i.a)(y,2),C=S[0],D=S[1],N=Object(n.useContext)(f).setUserData,F=Object(p.f)(),I=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:a,password:m,passwordCheck:b,displayName:w},e.next=5,g.a.post("/api/users/register",n);case 5:return e.next=7,g.a.post("/api/users/login",{email:a,password:m});case 7:r=e.sent,N({token:r.data.token,user:r.data.user}),localStorage.setItem("auth-token",r.data.token),F.push("/"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),e.t0.response.data.msg&&D(e.t0.response.data.msg);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page"},r.a.createElement("h2",null,"Register"),C&&r.a.createElement(v,{message:C,clearError:function(){return D(void 0)}}),r.a.createElement("form",{className:"form",onSubmit:I},r.a.createElement("label",{htmlFor:"register-email"},"Email"),r.a.createElement("input",{id:"register-email",type:"email",onChange:function(e){return o(e.target.value)}}),r.a.createElement("label",{htmlFor:"register-password"},"Password"),r.a.createElement("input",{id:"register-password",type:"password",onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Verify password",onChange:function(e){return j(e.target.value)}}),r.a.createElement("label",{htmlFor:"register-display-name"},"Display name"),r.a.createElement("input",{id:"register-display-name",type:"text",onChange:function(e){return x(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Register"})))}a(58);var O=function(){var e=Object(n.useState)({token:void 0,user:void 0}),t=Object(i.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=localStorage.getItem("auth-token"))){e.next=5;break}return localStorage.setItem("auth-token",""),t="",e.abrupt("return");case 5:return e.next=7,g.a.post("/api/users/tokenIsValid",null,{headers:{"x-auth-token":t}});case 7:if(!e.sent.data){e.next=13;break}return e.next=11,g.a.get("/api/users/",{headers:{"x-auth-token":t}});case 11:a=e.sent,o({token:t,user:a.data});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(f.Provider,{value:{userData:a,setUserData:o}},r.a.createElement(E,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:b}),r.a.createElement(p.a,{path:"/login",component:j}),r.a.createElement(p.a,{path:"/register",component:k}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.76bc0d1a.chunk.js.map