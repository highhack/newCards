(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){e.exports={nav:"Header_nav__22THU",item:"Header_item__ssK_c",active:"Header_active__1MFs-"}},13:function(e,t,n){e.exports={register:"Registration_register__1kewo",errorText:"Registration_errorText__2agbz"}},41:function(e,t,n){},42:function(e,t,n){},49:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(16),i=n.n(c),s=(n(41),n(42),n(10)),o=n(11),d=n.n(o),l=n(1),u=function(){return Object(l.jsxs)("nav",{className:d.a.nav,children:[Object(l.jsx)("div",{className:d.a.item,children:Object(l.jsx)(s.b,{to:"/Login",activeClassName:d.a.active,children:"Login"})}),Object(l.jsx)("div",{className:d.a.item,children:Object(l.jsx)(s.b,{to:"/Registration",activeClassName:d.a.active,children:"Registration"})}),Object(l.jsx)("div",{className:d.a.item,children:Object(l.jsx)(s.b,{to:"/Page3",activeClassName:d.a.active,children:"Page3"})}),Object(l.jsx)("div",{className:d.a.item,children:Object(l.jsx)(s.b,{to:"/Page4",activeClassName:d.a.active,children:"Page4"})})]})},j=n(4),b=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"404"}),Object(l.jsx)("div",{children:"Page not found!"}),Object(l.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},O=n(13),x=n.n(O),h=n(3),g=n(36),p=(n(49),function(e){var t=e.onBlur,n=e.disabled,r=e.onClick,a=e.primary,c=void 0!==a&&a,i=e.size,s=void 0===i?"medium":i,o=e.backgroundColor,d=e.label,u=Object(g.a)(e,["onBlur","disabled","onClick","primary","size","backgroundColor","label"]),j=c?"storybook-button--primary":"storybook-button--secondary";return Object(l.jsx)("button",Object(h.a)(Object(h.a)({disabled:n,onBlur:t,type:"button",onClick:r,className:["storybook-button","storybook-button--".concat(s),j].join(" "),style:{backgroundColor:o}},u),{},{children:d}))}),v=n(12),f=n(18),m=n.n(f),T=m.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),S=function(e,t){return T.post("auth/register",{email:e,password:t}).then((function(e){return e.data}))},E={mail:"",password:"",checkPassword:"",errorText:null,addedUser:!1,loadingStatus:"idle"},y=function(e){return{type:"SET-ERROR-TEXT",errorText:e}},C=function(e){return{type:"SET-LOADING-STATUS",loadingStatus:e}},k=function(){var e=Object(v.c)((function(e){return e.register})),t=Object(v.b)(),n=e.mail,r=e.password,a=e.checkPassword,c=e.errorText,i=e.addedUser,s=e.loadingStatus,o=function(){t(y(""))};return i?Object(l.jsx)(j.a,{to:"/login"}):Object(l.jsxs)("div",{onClick:o,children:[Object(l.jsx)("p",{children:" Please fill in the blank fields and press sign up "}),Object(l.jsxs)("form",{className:x.a.register,children:["loading"===s?Object(l.jsx)("div",{children:"Loading..."}):"",Object(l.jsx)("div",{children:"Email"}),Object(l.jsx)("input",{onChange:function(e){t(function(e){return{type:"SET-MAIL",mail:e}}(e.currentTarget.value))}}),Object(l.jsx)("div",{children:"Password"}),Object(l.jsx)("input",{onChange:function(e){t(function(e){return{type:"SET-PASSWORD",password:e}}(e.currentTarget.value))}}),Object(l.jsx)("div",{children:"Password"}),Object(l.jsx)("input",{onChange:function(e){t(function(e){return{type:"SET-CHECK-PASSWORD",checkPassword:e}}(e.currentTarget.value))}}),Object(l.jsx)("div",{className:x.a.errorText,children:null!==c?Object(l.jsx)("div",{className:x.a.errorText,children:c}):""}),Object(l.jsx)(p,{disabled:"loading"===s,label:"Sign Up",onClick:function(){if(r!==a)return t(y("password is not correct"));t(function(e,t){return function(n){n(C("loading")),S(e,t).then((function(e){void 0!==e.addedUser&&n({type:"SET-ADDED-USER"}),n(C("succeeded"))})).catch((function(e){n(y(e.response.data.error)),n(C("succeeded"))}))}}(n,r))},onBlur:o,backgroundColor:"blue"})]})]})},w=function(){return Object(l.jsx)("div",{children:"Page3"})},P=function(){return Object(l.jsx)("div",{children:"Page4"})},N=n(19),R=n(25),L=n.n(R),A=n(34),D=m.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return D.post("auth/login",{email:e,password:t,rememberMe:n})},I={email:"nya-admin@nya.nya",password:"1qazxcvBG",isLoggedIn:!1,rememberMe:!1,errorText:null,loadingStatus:"idle"},_=function(e){return{type:"login/SET-ERROR-TEXT-LOGGED-IN",errorText:e}},U=function(e){return{type:"login/CHANG-CHECKBOX-LOGGED-IN",rememberMe:e}},B=function(e){return{type:"APP/SET-STATUS",loadingStatus:e}},H=function(){var e=Object(v.c)((function(e){return e.login})),t=e.password,n=e.email,a=e.isLoggedIn,c=e.errorText,i=e.rememberMe,s=e.loadingStatus,o=Object(r.useState)(""),d=Object(N.a)(o,2),u=d[0],b=(d[1],Object(r.useState)(t)),O=Object(N.a)(b,2),h=O[0],g=O[1],f=Object(r.useState)(n),m=Object(N.a)(f,2),T=m[0],S=m[1],E=Object(v.b)();return j.a,Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:" Please fill in the blank fields and press LOGIN "}),Object(l.jsx)("p",{children:"or use common test account credentials:"}),Object(l.jsxs)("p",{children:["Email: ",Object(l.jsx)("b",{children:"nya-admin@nya.nya"})]}),Object(l.jsxs)("p",{children:["Password: ",Object(l.jsx)("b",{children:"1qazxcvBG"})]}),Object(l.jsxs)("form",{className:x.a.register,children:["loading..."===s?Object(l.jsx)("div",{children:s}):"",Object(l.jsxs)("div",{children:["Email",Object(l.jsx)("input",{type:"email",name:"email",value:T,onChange:function(e){S(e.currentTarget.value)}})]}),Object(l.jsxs)("div",{children:["Password",Object(l.jsx)("input",{type:"password",name:"password",value:h,onChange:function(e){g(e.currentTarget.value)}})]}),Object(l.jsx)("input",{type:"checkbox",name:"rememberMe",onChange:function(){E(U(i))}}),Object(l.jsx)("div",{className:x.a.errorText,children:null!==c?Object(l.jsx)("div",{className:c,children:c}):""}),Object(l.jsx)(p,{label:"Login",onClick:function(){if(a)return E(_(c));E(function(e,t,n){return function(){var r=Object(A.a)(L.a.mark((function r(a){return L.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(B("loading...")),r.prev=1,r.next=4,G(e,t,n);case 4:r.sent.data.password&&(a({type:"login/SET-IS-LOGGED-IN",value:!0}),a(U(!0))),a(B("idle")),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),a(_(r.t0.response.data.error));case 12:a(B("idle"));case 13:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()}(T,h))},onBlur:function(){E(_(u))},backgroundColor:"blue",disabled:"loading..."===s})]})]})},M=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(j.d,{children:[Object(l.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(l.jsx)("div",{children:" Hello"})}}),Object(l.jsx)(j.b,{exact:!0,path:"/Login",render:function(){return Object(l.jsx)(H,{})}}),Object(l.jsx)(j.b,{exact:!0,path:"/registration",render:function(){return Object(l.jsx)(k,{})}}),Object(l.jsx)(j.b,{exact:!0,path:"/Page3",render:function(){return Object(l.jsx)(w,{})}}),Object(l.jsx)(j.b,{exact:!0,path:"/Page4",render:function(){return Object(l.jsx)(P,{})}}),Object(l.jsx)(j.b,{path:"/404",render:function(){return Object(l.jsx)(b,{})}}),Object(l.jsx)(j.a,{path:"*",to:"/404"})]})})},X=function(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{}),Object(l.jsx)(M,{})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},F=n(20),K=n(35),W=[],q=Object(F.b)({first:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TYPE":return Object(h.a)({},e);default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-MAIL":return Object(h.a)(Object(h.a)({},e),{},{mail:t.mail});case"SET-CHECK-PASSWORD":return Object(h.a)(Object(h.a)({},e),{},{checkPassword:t.checkPassword});case"SET-PASSWORD":return Object(h.a)(Object(h.a)({},e),{},{password:t.password});case"SET-ERROR-TEXT":return Object(h.a)(Object(h.a)({},e),{},{errorText:t.errorText});case"SET-ADDED-USER":return Object(h.a)(Object(h.a)({},e),{},{addedUser:!0});case"SET-LOADING-STATUS":return Object(h.a)(Object(h.a)({},e),{},{loadingStatus:t.loadingStatus});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(h.a)(Object(h.a)({},e),{},{isLoggedIn:t.value});case"login/SET-ERROR-TEXT-LOGGED-IN":return Object(h.a)(Object(h.a)({},e),{},{errorText:t.errorText});case"login/CHANG-CHECKBOX-LOGGED-IN":return Object(h.a)(Object(h.a)({},e),{},{rememberMe:t.rememberMe});case"APP/SET-STATUS":var n=Object(h.a)(Object(h.a)({},e),{},{loadingStatus:t.loadingStatus});return n;default:return e}}}),J=Object(F.c)(q,Object(F.a)(K.a));window.store=J,i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v.a,{store:J,children:Object(l.jsx)(X,{})})}),document.getElementById("root")),z()}},[[69,1,2]]]);
//# sourceMappingURL=main.3013bb55.chunk.js.map