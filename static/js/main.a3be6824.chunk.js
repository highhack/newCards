(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={nav:"Header_nav__1urhK",item:"Header_item__2qMHg",active:"Header_active__3l6HR"}},13:function(e,t,n){e.exports={register:"Registration_register__18WMF",errorText:"Registration_errorText__xNFCr"}},41:function(e,t,n){},42:function(e,t,n){},65:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(17),i=n.n(a),s=(n(41),n(42),n(10)),o=n(12),u=n.n(o),d=n(11),l=n(16),j=n.n(l),b=n(23),O=n(3),x=n(19),h=n.n(x),g=h.a.create({baseURL:"http://localhost:7542/2.0/",withCredentials:!0}),p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return g.post("auth/login",{email:e,password:t,rememberMe:n})},f=function(){return g.delete("auth/me",{})},v={email:"nya-admin@nya.nya",password:"1qazxcvBG",isLoggedIn:!1,rememberMe:!1,errorText:null,loadingStatus:"idle"},m=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},T=function(e){return{type:"login/SET-ERROR-TEXT-LOGGED-IN",errorText:e}},S=function(e){return{type:"APP/SET-STATUS",loadingStatus:e}},E=n(4),y=n(36),C=(n(65),n(1)),k=function(e){var t=e.onBlur,n=e.disabled,r=e.onClick,c=e.primary,a=void 0!==c&&c,i=e.size,s=void 0===i?"medium":i,o=e.backgroundColor,u=e.label,d=Object(y.a)(e,["onBlur","disabled","onClick","primary","size","backgroundColor","label"]),l=a?"storybook-button--primary":"storybook-button--secondary";return Object(C.jsx)("button",Object(O.a)(Object(O.a)({disabled:n,onBlur:t,type:"button",onClick:r,className:["storybook-button","storybook-button--".concat(s),l].join(" "),style:{backgroundColor:o}},d),{},{children:u}))},w=c.a.memo((function(){var e=Object(d.b)();return Object(d.c)((function(e){return e.login})).isLoggedIn?Object(C.jsx)("div",{children:Object(C.jsx)(k,{label:"Logout",backgroundColor:"blue",onClick:function(){e(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(S("loading...")),e.prev=1,e.next=4,f();case 4:t(m(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t(T(e.t0.response.data.error));case 10:t(S("idle"));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}())}})}):Object(C.jsx)(E.a,{to:"/Login"})})),P=function(){return Object(C.jsxs)("nav",{className:u.a.nav,children:[Object(C.jsx)("div",{className:u.a.item,children:Object(C.jsx)(s.b,{to:"/Login",activeClassName:u.a.active,children:"Login"})&&Object(C.jsx)(w,{})}),Object(C.jsx)("div",{className:u.a.item,children:Object(C.jsx)(s.b,{to:"/Registration",activeClassName:u.a.active,children:"Registration"})}),Object(C.jsx)("div",{className:u.a.item,children:Object(C.jsx)(s.b,{to:"/Page3",activeClassName:u.a.active,children:"Page3"})}),Object(C.jsx)("div",{className:u.a.item,children:Object(C.jsx)(s.b,{to:"/Page4",activeClassName:u.a.active,children:"Page4"})})]})},N=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{children:"404"}),Object(C.jsx)("div",{children:"Page not found!"}),Object(C.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},L=n(13),R=n.n(L),G=h.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),A=function(e,t){return G.post("auth/register",{email:e,password:t}).then((function(e){return e.data}))},D={mail:"",password:"",checkPassword:"",errorText:null,addedUser:!1,loadingStatus:"idle"},I=function(e){return{type:"SET-ERROR-TEXT",errorText:e}},_=function(e){return{type:"SET-LOADING-STATUS",loadingStatus:e}},U=function(){var e=Object(d.c)((function(e){return e.register})),t=Object(d.b)(),n=e.mail,r=e.password,c=e.checkPassword,a=e.errorText,i=e.addedUser,s=e.loadingStatus,o=function(){t(I(""))};return i?Object(C.jsx)(E.a,{to:"/Page1"}):Object(C.jsxs)("div",{onClick:o,children:[Object(C.jsx)("p",{children:" Please fill in the blank fields and press sign up "}),Object(C.jsxs)("form",{className:R.a.register,children:["loading"===s?Object(C.jsx)("div",{children:"Loading..."}):"",Object(C.jsx)("div",{children:"Email"}),Object(C.jsx)("input",{onChange:function(e){t(function(e){return{type:"SET-MAIL",mail:e}}(e.currentTarget.value))}}),Object(C.jsx)("div",{children:"Password"}),Object(C.jsx)("input",{onChange:function(e){t(function(e){return{type:"SET-PASSWORD",password:e}}(e.currentTarget.value))}}),Object(C.jsx)("div",{children:"Password"}),Object(C.jsx)("input",{onChange:function(e){t(function(e){return{type:"SET-CHECK-PASSWORD",checkPassword:e}}(e.currentTarget.value))}}),Object(C.jsx)("div",{className:R.a.errorText,children:null!==a?Object(C.jsx)("div",{className:R.a.errorText,children:a}):""}),Object(C.jsx)(k,{disabled:"loading"===s,label:"Sign Up",onClick:function(){if(r!==c)return t(I("password is not correct"));t(function(e,t){return function(n){n(_("loading")),A(e,t).then((function(e){void 0!==e.addedUser&&n({type:"SET-ADDED-USER"}),n(_("succeeded"))})).catch((function(e){n(I(e.response.data.error)),n(_("succeeded"))}))}}(n,r))},onBlur:o,backgroundColor:"blue"})]})]})},H=function(){return Object(C.jsx)("div",{children:"Page3"})},M=function(){return Object(C.jsx)("div",{children:"Page4"})},B=n(26),F=function(){var e=Object(d.c)((function(e){return e.login})),t=e.isLoggedIn,n=e.errorText,c=e.rememberMe,a=e.loadingStatus,i=Object(r.useState)("1qazxcvBG"),s=Object(B.a)(i,2),o=s[0],u=s[1],l=Object(r.useState)("nya-admin@nya.nya"),O=Object(B.a)(l,2),x=O[0],h=O[1],g=Object(d.b)();return t?Object(C.jsx)(E.a,{to:"/Page4"}):Object(C.jsxs)("div",{onClick:function(){g(T(""))},children:[Object(C.jsx)("p",{children:" Please fill in the blank fields and press LOGIN "}),Object(C.jsx)("p",{children:"or use common test account credentials:"}),Object(C.jsxs)("p",{children:["Email: ",Object(C.jsx)("b",{children:"nya-admin@nya.nya"})]}),Object(C.jsxs)("p",{children:["Password: ",Object(C.jsx)("b",{children:"1qazxcvBG"})]}),Object(C.jsxs)("form",{className:R.a.register,children:["loading..."===a?Object(C.jsx)("div",{children:a}):"",Object(C.jsxs)("div",{children:["Email",Object(C.jsx)("input",{type:"email",name:"email",value:x,onChange:function(e){h(e.currentTarget.value)}})]}),Object(C.jsxs)("div",{children:["Password",Object(C.jsx)("input",{type:"password",name:"password",value:o,onChange:function(e){u(e.currentTarget.value)}})]}),Object(C.jsx)("input",{type:"checkbox",name:"rememberMe",onChange:function(e){g(function(e){return{type:"login/CHANG-CHECKBOX-LOGGED-IN",rememberMe:e}}(e.currentTarget.checked))}}),Object(C.jsx)("div",{className:R.a.errorText,children:null!==n?Object(C.jsx)("div",{className:n,children:n}):""}),Object(C.jsx)(k,{label:"Login",onClick:function(){g(t?T(n):function(e,t,n){return function(){var r=Object(b.a)(j.a.mark((function r(c){return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(S("loading...")),r.prev=1,r.next=4,p(e,t,n);case 4:c(m(!0)),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(1),c(T(r.t0.response.data.error));case 10:c(S("idle"));case 11:case"end":return r.stop()}}),r,null,[[1,7]])})));return function(e){return r.apply(this,arguments)}}()}(x,o,c))},backgroundColor:"blue",disabled:"loading..."===a})]})]})},X=function(){return Object(C.jsx)("div",{children:Object(C.jsxs)(E.d,{children:[Object(C.jsx)(E.b,{exact:!0,path:"/",render:function(){return Object(C.jsx)("div",{children:" Hello"})}}),Object(C.jsx)(E.b,{exact:!0,path:"/Login",render:function(){return Object(C.jsx)(F,{})}}),Object(C.jsx)(E.b,{exact:!0,path:"/Logout",render:function(){return Object(C.jsx)(F,{})}}),Object(C.jsx)(E.b,{exact:!0,path:"/registration",render:function(){return Object(C.jsx)(U,{})}}),Object(C.jsx)(E.b,{exact:!0,path:"/Page3",render:function(){return Object(C.jsx)(H,{})}}),Object(C.jsx)(E.b,{exact:!0,path:"/Page4",render:function(){return Object(C.jsx)(M,{})}}),Object(C.jsx)(E.b,{path:"*",render:function(){return Object(C.jsx)(N,{})}})]})})},z=function(){return Object(C.jsx)(s.a,{children:Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(P,{}),Object(C.jsx)(X,{})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},W=n(20),q=n(35),J=[],Y=Object(W.b)({first:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TYPE":return Object(O.a)({},e);default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-MAIL":return Object(O.a)(Object(O.a)({},e),{},{mail:t.mail});case"SET-CHECK-PASSWORD":return Object(O.a)(Object(O.a)({},e),{},{checkPassword:t.checkPassword});case"SET-PASSWORD":return Object(O.a)(Object(O.a)({},e),{},{password:t.password});case"SET-ERROR-TEXT":return Object(O.a)(Object(O.a)({},e),{},{errorText:t.errorText});case"SET-ADDED-USER":return Object(O.a)(Object(O.a)({},e),{},{addedUser:!0});case"SET-LOADING-STATUS":return Object(O.a)(Object(O.a)({},e),{},{loadingStatus:t.loadingStatus});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(O.a)(Object(O.a)({},e),{},{isLoggedIn:t.value});case"login/SET-ERROR-TEXT-LOGGED-IN":return Object(O.a)(Object(O.a)({},e),{},{errorText:t.errorText});case"login/CHANG-CHECKBOX-LOGGED-IN":return Object(O.a)(Object(O.a)({},e),{},{rememberMe:t.rememberMe});case"APP/SET-STATUS":return Object(O.a)(Object(O.a)({},e),{},{loadingStatus:t.loadingStatus});default:return e}}}),Q=Object(W.c)(Y,Object(W.a)(q.a));window.store=Q,i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(d.a,{store:Q,children:Object(C.jsx)(z,{})})}),document.getElementById("root")),K()}},[[69,1,2]]]);
//# sourceMappingURL=main.a3be6824.chunk.js.map