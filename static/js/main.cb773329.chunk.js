(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(18),s=n.n(a),i=(n(90),n(91),n(11)),o=n(10),u=n(24),d=n.n(u),l=n(5),j=n(31),b=n.n(j),O=n(42),p=n(6),f=n(40),h=n.n(f),x=h.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),g=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return x.post("auth/login",{email:e,password:t,rememberMe:n})},A=function(){return x.delete("auth/me",{})},m=function(e){return x.get("cards/pack?packName=".concat(e,"&pageCount=10"))},v=function(e,t){return x.get("cards/pack?pageCount=10&user_id=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},k=h.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),C=function(e,t){return k.post("auth/register",{email:e,password:t}).then((function(e){return e.data}))},P=function(e){return k.get("cards/pack?pageCount=10&page=".concat(e,"&user_id=")).then((function(e){return e.data}))},T=function(e){return k.post("cards/pack",{cardsPack:{name:e}}).then((function(e){return e.data}))},w=function(e){return k.delete("cards/pack?id=".concat(e)).then((function(e){return e.data}))},S=function(e,t){return k.put("cards/pack?id=".concat(t),{cardsPack:{name:e,_id:t}}).then((function(e){return e.data}))},_=function(e){return k.get("cards/card?&cardsPack_id=".concat(e,"&pageCount=10")).then((function(e){return e.data}))},y=function(e,t,n){return k.post("cards/card",{card:{question:e,answer:t,cardsPack_id:n}}).then((function(e){return e.data}))},N=function(){return k.post("auth/me").then((function(e){return e.data}))},E=function(e){return k.delete("cards/card?id=".concat(e)).then((function(e){return e.data}))},I=function(e,t,n){return k.put("cards/card",{card:{_id:n,question:e,answer:t}}).then((function(e){return e.data}))},L={errorText:null,addedUser:!1,loadingStatus:"idle"},R=function(e){return{type:"SET-ERROR-TEXT",errorText:e}},D=function(e){return{type:"SET-LOADING-STATUS",loadingStatus:e}},q={error:null,isInitialized:!1,myId:""},M=function(e){return{type:"APP/SET-ERROR",error:e}},G=function(e){return{type:"SET-IS-INITIALIZED",isInitialized:e}},B=function(e){return{type:"SET-MY-ID",myId:e}},U={email:"GABA@gmail.com",password:"qaswq123",isLoggedIn:!1,rememberMe:!1,errorText:null,loadingStatus:"idle"},W=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},Q=n(85),F=(n(113),n(1)),z=function(e){var t=e.id,n=e.onBlur,c=e.disabled,r=e.onClick,a=e.primary,s=void 0!==a&&a,i=e.size,o=void 0===i?"medium":i,u=e.backgroundColor,d=e.label,l=Object(Q.a)(e,["id","onBlur","disabled","onClick","primary","size","backgroundColor","label"]),j=s?"storybook-button--primary":"storybook-button--secondary";return Object(F.jsx)("button",Object(p.a)(Object(p.a)({id:t,disabled:c,onBlur:n,type:"button",onClick:r,className:["storybook-button","storybook-button--".concat(o),j].join(" "),style:{backgroundColor:u}},l),{},{children:d}))},H=n(55),K=n.n(H),Y=function(){return"loading"===Object(l.c)((function(e){return e.register.loadingStatus}))?Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:K.a.background}),Object(F.jsx)("div",{className:K.a.window,children:Object(F.jsx)("img",{alt:"",src:"data:image/gif;base64,R0lGODlhkAGQAcQSAACPAAeoB5rRWW5uboGBgZWVlaioqOLi4sXFxYuLi56envX19bu7u9jY2Ozs7Hh4eM/Pz7Kysv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFGQASACwAAAAAkAGQAQAF/6AkjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAwocSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU/+qXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUu3rt27ePPq3cu3r9+/gAMLHky4sOHDiBMrXsy4sePHkCNLnky5suXLmDNr3sy5s+fPoEODHGAAcgECPEiLIFCA8enUpR+/LrFAwYABBBCIcJDg9oACC0bYxq1aAuvVCoYnCC5C+YPYeGeTOO1AgoEBDSQ0SHBAwoHiCgh0/x77uPEBDLwPiNBcvPbi0VGT+K5bxAMFJl5/Ty+iuHkC0CXQ2n4jwHeXdCIgMED/dyLMxkBvt6GmIIMS+NeacdAV0NqEBUJ3oHwjcNggatcZENxrIlZY3oUAjqChBCkaaBeC6tUnwX3G4TeiehB0uBqLGbbWwAA99ufhjCC66N512Z0WHAMPyEfActZZuFqQq1FZoghMJojebr+tVYBvEUpQW4T1HQChAgnIp+ZtWxoHpIsXvjmAbbF1CeOXEjgQZmcL8ClaCQbkOUB1g5ag4G0JZJfoo5BGmqgAlFZq6aWVihDAppx26imnmn4qaqehjjpqqaZ+imqqpErAqqgmYSrrpau+GkCtr+LKqq6p8mqqr6eWNOuwAmgKwLHIJqssALe6uuyzyDYbALTQSkvt/7PWXqtsttpGGyuxshrbrbfOjnsst+Oi26262rJ7bbMkgRtuuea6S6291Ypbr77p8rvut/Ja6m+7A79b8L0H50tvvwv/K2zAAjdMsMQGU4ywxQpPay6zCWMLMMTFYuyxyMviO7LG+5K8bcclfwwxsLC6amurM9Nc86YwqyrzzZL27PPPQAct9NBEF2300UgnrfTSTDft9NNQRy311FRXbfXVWGet9dZcd+3112CHLfbYZJdt9tlop6322my37fbbcMct99x012333XjnrffefPft99+ABy744IQXbvjhiCeu+OKMN+7445BHLvnklFdu+eWYZ6755px37vnnoIcu+knopJdu+umop6766qy37vrrsMcu++y012777bjnrvvuvPfu++/ABy/88MQXb/zxyCev/PLMN+/889BHL/301Fdv/fXYZ6+9EiEAACH5BAUZABIALIMAzAAmAAkAAAU6YCCOZDlKkqCubLuacIm6dBsAeK7vQDDXwBtviPOlgDUhkWdEJpfDptOlhOakU1bV2vtlX7Gw9ysIAQAh+QQFGQASACyXAMwAJgAJAAAFOmAgjmQ5SpKgrmy7mnCJunQbAHiu70Aw18Abb4jzpYA1IZFnRCaXw6bTpYTmpFNW1dr7ZV+xsPcrCAEAIfkEBRkAEgAsqwDMACYACQAABTpgII5kOUqSoK5su5pwibp0GwB4ru9AMNfAG2+I86WANSGRZ0Qml8Om06WE5qRTVtXa+2VfsbD3KwgBACH5BAUZABIALL8AzAAmAAkAAAU6YCCOZDlKkqCubLuacIm6dBsAeK7vQDDXwBtviPOlgDUhkWdEJpfDptOlhOakU1bV2vtlX7Gw9ysIAQAh+QQFGQASACzTAMwAJgAJAAAFOmAgjmQ5SpKgrmy7mnCJunQbAHiu70Aw18Abb4jzpYA1IZFnRCaXw6bTpYTmpFNW1dr7ZV+xsPcrCAEAIfkEBRkAEgAs5wDMACYACQAABTpgII5kOUqSoK5su5pwibp0GwB4ru9AMNfAG2+I86WANSGRZ0Qml8Om06WE5qRTVtXa+2VfsbD3KwgBADs="})})]}):Object(F.jsx)("div",{})},X=r.a.memo((function(){var e=Object(l.b)();return Object(l.c)((function(e){return e.login})).isLoggedIn?Object(F.jsxs)("div",{children:[Object(F.jsx)(z,{label:"Logout",backgroundColor:"blue",onClick:function(){e(function(){var e=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(D("loading")),e.prev=1,e.next=4,A();case 4:t(W(!1)),t(D("succeeded")),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),t(R(e.t0.response.data.error)),t(G(!1)),t(D("failed"));case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}}),Object(F.jsx)(Y,{})]}):Object(F.jsx)(o.a,{to:"/Login"})})),Z=function(){var e=Object(l.c)((function(e){return e.login.isLoggedIn})),t=Object(l.c)((function(e){return e.app.isInitialized}));return Object(F.jsx)(o.d,{children:Object(F.jsxs)("nav",{className:d.a.nav,children:[Object(F.jsx)("div",{className:d.a.item,children:Object(F.jsx)(X,{})}),t&&e?"":Object(F.jsx)("div",{className:d.a.item,children:Object(F.jsx)(i.c,{to:"/Login",activeClassName:d.a.active,children:"Login"})}),Object(F.jsx)("div",{className:d.a.item,children:Object(F.jsx)(i.c,{to:"/forgot-password",activeClassName:d.a.active,children:"Forgot Password"})}),Object(F.jsx)("div",{className:d.a.item,children:Object(F.jsx)(i.c,{to:"/Profile",activeClassName:d.a.active,children:"Profile"})})]})})},J=function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{children:"404"}),Object(F.jsx)("div",{children:"Page not found!"}),Object(F.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},V=n(8),$=n(71),ee=n.n($),te=n(44),ne=n.n(te),ce=n.p+"static/media/sorryImg.50004020.gif",re=function(e){var t=Object(l.b)();return null!==e.errorText?Object(F.jsxs)("div",{onClick:function(){t(R(null))},children:[Object(F.jsx)("div",{className:ne.a.background}),Object(F.jsxs)("div",{className:ne.a.window,children:[Object(F.jsx)("div",{className:ne.a.img,children:Object(F.jsx)("img",{className:ne.a.img,src:ce})}),Object(F.jsx)("div",{className:ne.a.errorText,children:e.errorText})]})]}):Object(F.jsx)("div",{})},ae=function(){var e=Object(l.c)((function(e){return e.register})),t=Object(l.b)(),n=e.errorText,r=e.addedUser,a=e.loadingStatus,s=Object(c.useState)(""),i=Object(V.a)(s,2),u=i[0],d=i[1],j=Object(c.useState)(""),b=Object(V.a)(j,2),O=b[0],p=b[1],f=Object(c.useState)(""),h=Object(V.a)(f,2),x=h[0],g=h[1];return r?Object(F.jsx)(o.a,{to:"/login"}):Object(F.jsxs)("div",{children:[Object(F.jsx)("p",{children:" Please fill in the blank fields and press sign up "}),Object(F.jsxs)("form",{className:ee.a.register,children:["loading"===a?Object(F.jsx)(Y,{}):"",Object(F.jsx)("div",{children:"Email"}),Object(F.jsx)("input",{onChange:function(e){d(e.currentTarget.value)}}),Object(F.jsx)("div",{children:"Password"}),Object(F.jsx)("input",{onChange:function(e){p(e.currentTarget.value)}}),Object(F.jsx)("div",{children:"Password"}),Object(F.jsx)("input",{onChange:function(e){g(e.currentTarget.value)}}),Object(F.jsx)(re,{errorText:n}),Object(F.jsx)(z,{disabled:"loading"===a,onBlur:function(){t(R(null))},label:"Sign Up",onClick:function(){if(O!==x)return t(R("password is not correct"));t(function(e,t){return function(n){n(D("loading")),C(e,t).then((function(e){void 0!==e.addedUser&&n({type:"SET-ADDED-USER"}),n(D("succeeded"))})).catch((function(e){n(R(e.response.data.error)),n(D("failed"))}))}}(u,O)),d(""),p(""),g("")},backgroundColor:"blue"})]})]})},se=h.a.create(Object(p.a)({baseURL:"https://neko-back.herokuapp.com/2.0/"},{withCredentials:!0})),ie=function(e){return se.post("auth/forgot",{email:e,from:"test-front-admin <ai73a@yandex.by>",message:"<div style=\"background-color: lime; padding: 15px\"> password recovery link: <a href='https://highhack.github.io/Page4/$token$'> link</a></div>"})},oe={status:"idle",error:null,isInitialized:!0,forgotPassword:!1},ue=function(e){return{type:"CARDS/FORGOT-PASSWOR",forgotPassword:e}},de=function(e){return{type:"CARDS/SET-APP-STATUS",status:e}},le=function(e){return{type:"CARDS/SET-APP-ERROR",error:e}},je=r.a.memo((function(){var e=Object(c.useState)(""),t=Object(V.a)(e,2),n=t[0],r=t[1],a=Object(l.c)((function(e){return e.forgotPassword.status})),s=Object(l.c)((function(e){return e.forgotPassword.error})),i=Object(l.b)(),o=Object(c.useCallback)((function(){var e;i((e=n,function(t){t(de("loading")),t(ue(!0)),ie(e).then((function(e){t(de("succeeded")),t(le(null))})).catch((function(e){var n=e.response?e.response.data.error:e.message+", more details in the console";t(le(n)),t(de("failed"))})).finally((function(){t(ue(!1))}))})),r("")}),[n,i]),u=function(){i(le(null))};return Object(F.jsxs)("div",{style:{marginTop:"25px"},onClick:u,children:["Enter your email","loading"===a?Object(F.jsx)(Y,{}):null,Object(F.jsx)("input",{type:"email",value:n,onChange:function(e){e.currentTarget.value&&""!==e.currentTarget.value.trim()&&r(e.currentTarget.value)},style:{display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:"5px",marginTop:"5px"}}),"succeeded"===a?Object(F.jsx)("div",{style:{color:"green"},children:" Please check your inbox"}):null,s&&Object(F.jsx)("div",{style:{color:"red"},children:s}),Object(F.jsx)(z,{size:"medium",label:"Forgot Password",backgroundColor:"blue",onClick:o,onBlur:u})]})})),be={cardPacks:[],newPackTitle:null,id:"",packId:"",cardPacksTotalCount:140,pageCount:10,page:1,portionSize:5,searchStatus:"allPacks"},Oe=function(e){return{type:"SET-PACKS",cardPacks:e}},pe=function(e){return{type:"SET-SEARCH-STATUS",searchStatus:e}},fe=function(e){return{type:"SET_TOTAL_COUNT",cardPacksTotalCount:e}},he=function(e){return function(t){t(D("loading")),P(e).then((function(e){t(fe(e.cardPacksTotalCount)),t(Oe(e.cardPacks)),t(function(e){return{type:"SET_CURRENT_PAGE",page:e}}(e.page)),t(D("succeeded"))}))}},xe=function(e,t){return function(){var n=Object(O.a)(b.a.mark((function n(c){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(pe("myPacks")),c(D("loading")),n.prev=2,n.next=5,v(t,e);case 5:r=n.sent,c(Oe(r.cardPacks)),c(D("succeeded")),c(fe(r.cardPacksTotalCount)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),c(D("failed"));case 14:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e){return n.apply(this,arguments)}}()},ge=function(){var e=Object(l.b)();return Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:d.a.item,children:Object(F.jsx)(i.c,{to:"/packs",onClick:function(){return e(pe("myPacks"))},children:"My Packs"})}),Object(F.jsx)("div",{className:d.a.item,children:Object(F.jsx)(i.c,{to:"/packs",onClick:function(){return e(pe("allPacks"))},activeClassName:d.a.active,children:"All Packs"})}),Object(F.jsx)("div",{})]})},Ae=n(34),me=n.n(Ae),ve=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.login})),n=Object(l.c)((function(e){return e.register.errorText})),r=t.isLoggedIn,a=t.rememberMe,s=Object(c.useState)("qaswq123"),u=Object(V.a)(s,2),d=u[0],j=u[1],p=Object(c.useState)("GABA@gmail.com"),f=Object(V.a)(p,2),h=f[0],x=f[1];return r?Object(F.jsx)(o.a,{to:"/profile"}):Object(F.jsxs)("div",{children:[Object(F.jsx)(Y,{}),Object(F.jsx)(re,{errorText:n}),Object(F.jsx)("p",{className:me.a.expleningText,children:" Please fill in the blank fields and press LOGIN "}),Object(F.jsx)("p",{className:me.a.expleningText,children:"or use common test account credentials"}),Object(F.jsxs)("p",{className:me.a.expleningText,children:["if you are not registered, go to the ",Object(F.jsx)(i.c,{to:"/Registration",activeClassName:me.a.active,children:"registration"})," page"]}),Object(F.jsxs)("form",{className:me.a.register,children:[Object(F.jsxs)("div",{className:me.a.titleWithInput,children:["Email",Object(F.jsx)("input",{type:"email",name:"email",value:h,onChange:function(e){x(e.currentTarget.value)}})]}),Object(F.jsxs)("div",{className:me.a.titleWithInput,children:["Password",Object(F.jsx)("input",{type:"password",name:"password",value:d,onChange:function(e){j(e.currentTarget.value)}})]}),Object(F.jsxs)("div",{className:me.a.titleWithInput,children:[Object(F.jsx)("input",{type:"checkbox",name:"rememberMe",onChange:function(t){e(function(e){return{type:"login/CHANG-CHECKBOX-LOGGED-IN",rememberMe:e}}(t.currentTarget.checked))}}),Object(F.jsx)("span",{children:"Remember me"})]}),Object(F.jsx)(z,{label:"Login",onClick:function(){e(function(e,t,n){return function(){var c=Object(O.a)(b.a.mark((function c(r){return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r(D("loading")),c.prev=1,c.next=4,g(e,t,n);case 4:r(W(!0)),r(G(!0)),r(D("succeeded")),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),r(D("failed"));case 12:case"end":return c.stop()}}),c,null,[[1,9]])})));return function(e){return c.apply(this,arguments)}}()}(h,d,a))},backgroundColor:"blue"})]})]})},ke=n(26),Ce=n.n(ke),Pe=n(32),Te=n.n(Pe),we=function(){var e=Object(l.b)(),t=Object(c.useState)(""),n=Object(V.a)(t,2),r=n[0],a=n[1];return Object(F.jsxs)("div",{className:Te.a.searchPack,children:[Object(F.jsx)("div",{children:Object(F.jsx)("input",{type:"text",name:"search",onChange:function(e){a(e.currentTarget.value)}})}),Object(F.jsx)(z,{label:"Search",onClick:function(){var t;e((t=r,function(){var e=Object(O.a)(b.a.mark((function e(n){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(D("loading")),e.prev=1,e.next=4,m(t);case 4:c=e.sent,n(Oe(c.data.cardPacks)),n(D("succeeded")),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n(R(e.t0.response.data.error)),n(D("failed"));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()))},backgroundColor:"blue"})]})},Se={cards:[],packId:"",cardId:""},_e=function(e,t){return{type:"SET-CARDS",cards:e,packId:t}},ye=n(119),Ne=(n(116),function(){return Object(F.jsx)("div",{className:Te.a.search_table,children:Object(F.jsx)(ye.a,{className:Te.a.slider,range:{draggableTrack:!1},defaultValue:[20,50],style:{width:"50vh",position:"relative"}})})}),Ee=n(48),Ie=n(7),Le=n.n(Ie),Re=function(){for(var e=Object(l.c)((function(e){return e.packs.portionSize})),t=Object(l.c)((function(e){return e.packs.cardPacksTotalCount})),n=Object(l.c)((function(e){return e.packs.page})),r=Object(l.c)((function(e){return e.packs.searchStatus})),a=Object(l.c)((function(e){return e.app.myId})),s=Object(l.b)(),i=Math.ceil(t/10),o=[],u=1;u<=i;u++)o.push(u);var d=Math.ceil(i/e),j=Object(c.useState)(1),b=Object(V.a)(j,2),O=b[0],p=b[1],f=(O-1)*e+1,h=O*e;return Object(F.jsxs)("div",{className:Te.a.paginator,children:[O>1&&Object(F.jsx)("button",{onClick:function(){p(O-1)},children:"PREV"}),o.filter((function(e){return e>=f&&e<=h})).map((function(e){return Object(F.jsx)("span",{className:Le()(Object(Ee.a)({},Te.a.selectedPage,n===e),Te.a.pageNumber),onClick:function(t){!function(e){s("allPacks"===r?he(e):xe(e,a))}(e)},children:e},e)})),d>O&&Object(F.jsx)("button",{onClick:function(){p(O+1)},children:"PREV"})]})},De=r.a.memo((function(){var e=Object(l.c)((function(e){return e.packs.cardPacks})),t=Object(l.c)((function(e){return e.app.isInitialized})),n=Object(l.c)((function(e){return e.login.isLoggedIn})),r=Object(l.c)((function(e){return e.packs.packId})),a=Object(l.c)((function(e){return e.register.errorText})),s=Object(l.c)((function(e){return e.packs.searchStatus})),o=Object(l.c)((function(e){return e.app.myId})),u=Object(c.useState)(""),d=Object(V.a)(u,2),j=d[0],b=d[1],O=Object(c.useState)(!1),p=Object(V.a)(O,2),f=p[0],h=p[1],x=Object(c.useState)(!1),g=Object(V.a)(x,2),A=g[0],m=g[1],v=Object(c.useState)(""),k=Object(V.a)(v,2),C=k[0],y=k[1],N=Object(l.c)((function(e){return e.packs.page})),E=Object(l.b)();Object(c.useEffect)((function(){t&&"allPacks"===s?E(he(N)):t&&"myPacks"===s&&E(xe(1,o))}),[E,t,N,s,o]);var I=function(e){E(function(e){return function(t){t(D("loading")),_(e).then((function(n){t(fe(n.cardsTotalCount)),t(_e(n.cards,e)),t(D("succeeded"))}))}}(e))},L=function(e){var t,n;E((t=e,n=N,function(e){e(D("loading")),w(t).then((function(t){P(n).then((function(t){e(Oe(t.cardPacks)),e(D("succeeded"))}))})).catch((function(t){t.response.data.error&&e(R("You can't delete not your Pack")),e(D("failed"))}))}))};return n?void 0===e?Object(F.jsx)("div",{children:"Not Found Packs"}):Object(F.jsxs)("div",{className:Ce.a.packs,children:[f&&Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:Ce.a.backgroundForWindow,onClick:function(){m(!1)}}),Object(F.jsxs)("div",{className:Ce.a.inputWindow,children:[Object(F.jsx)("input",{onChange:function(e){b(e.currentTarget.value)},placeholder:"Please enter new name",value:j,className:Ce.a.inputTitlePack}),Object(F.jsx)(z,{onClick:function(){var e,t;E((e=j,t=N,function(n){n(D("loading")),T(e).then((function(e){P(t).then((function(e){n(Oe(e.cardPacks)),n(D("succeeded"))}))})).catch((function(e){e.response.data.error&&n(R("error")),n(D("failed"))}))})),b(""),h(!1)},backgroundColor:"blue",size:"large",label:"Save"})]})]}),A&&Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:Ce.a.backgroundForWindow,onClick:function(){m(!1)}}),Object(F.jsxs)("div",{className:Ce.a.inputWindow,children:[Object(F.jsx)("input",{onChange:function(e){y(e.currentTarget.value)},value:C,className:Ce.a.inputChangeTitlePack}),Object(F.jsx)(z,{onClick:function(){E(function(e,t,n){return function(c){c(D("loading")),S(e,t).then((function(e){P(n).then((function(e){c(Oe(e.cardPacks)),c(D("succeeded"))}))})).catch((function(e){e.response.data.error&&c(R("You can't update not your Pack")),c(D("failed"))}))}}(C,r,N)),m(!1)},label:"Update",backgroundColor:"blue",size:"large"})]})]}),Object(F.jsxs)("div",{className:Ce.a.searchComponents,children:[Object(F.jsx)(z,{onClick:function(){h(!0)},backgroundColor:"blue",label:"Add Pack"}),Object(F.jsx)(we,{}),Object(F.jsx)(Ne,{})]}),Object(F.jsxs)("table",{className:Ce.a.table,children:[Object(F.jsx)("thead",{children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{children:"Name"}),Object(F.jsx)("th",{children:"Cards count"}),Object(F.jsx)("th",{children:"Created"})]})}),e.map((function(t){return Object(F.jsx)("tbody",{className:Ce.a.packData,children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:t.name}),Object(F.jsx)("td",{children:t.cardsCount}),Object(F.jsx)("td",{children:t.created}),Object(F.jsx)("td",{children:Object(F.jsx)(z,{onClick:function(){return function(t){m(!0);var n=e.find((function(e){return e._id===t}));void 0!==n&&(y(n.name),E(function(e){return{type:"SET-PACK-ID",packId:e}}(n._id)))}(t._id)},label:"Update"})}),Object(F.jsx)("td",{children:Object(F.jsx)(z,{onClick:function(){return L(t._id)},label:"Delete"})}),Object(F.jsx)("td",{children:Object(F.jsx)(i.c,{to:"/cards",className:Ce.a.linkToCards,onClick:function(){return I(t._id)},children:"Cards"})})]})})}))]}),Object(F.jsx)(Re,{}),Object(F.jsx)(Y,{}),Object(F.jsx)(re,{errorText:a})]}):Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{children:"You are not authorized"}),Object(F.jsx)(i.c,{to:"/login",children:"Login"})]})})),qe=n(27),Me=n.n(qe),Ge=r.a.memo((function(){var e=Object(c.useState)(""),t=Object(V.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(V.a)(a,2),i=s[0],o=s[1],u=Object(c.useState)(!1),d=Object(V.a)(u,2),j=d[0],b=d[1],O=Object(c.useState)(!1),p=Object(V.a)(O,2),f=p[0],h=p[1],x=Object(l.c)((function(e){return e.cards.cards})),g=Object(l.c)((function(e){return e.cards.packId})),A=Object(l.c)((function(e){return e.cards.cardId})),m=Object(l.b)(),v=function(e){r(e.currentTarget.value)},k=function(e){o(e.currentTarget.value)},C=function(e,t){m(function(e,t){return function(n){n(D("loading")),E(e).then((function(e){_(t).then((function(e){n(_e(e.cards,t)),n(D("succeeded"))}))}))}}(e,t))};return Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{children:Object(F.jsx)(Y,{})}),j?Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:Me.a.backgroundForWindow}),Object(F.jsxs)("div",{className:Me.a.inputWindow,children:[Object(F.jsx)("input",{onChange:v,placeholder:"Enter question",value:n,className:Me.a.inputQuestion}),Object(F.jsx)("input",{onChange:k,placeholder:"Enter answer",value:i,className:Me.a.inputAnswer}),Object(F.jsx)(z,{backgroundColor:"blue",onClick:function(){m(function(e,t,n){return function(c){c(D("loading")),y(e,t,n).then((function(e){_(n).then((function(e){c(_e(e.cards,n)),c(D("succeeded"))}))}))}}(n,i,g)),b(!1),r(""),o("")},label:"Save"})]})]}):"",f&&Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:Me.a.backgroundForWindow}),Object(F.jsxs)("div",{className:Me.a.inputWindow,children:[Object(F.jsx)("input",{onChange:v,value:n,className:Me.a.inputChangeTitlePack}),Object(F.jsx)("input",{onChange:k,value:i,className:Me.a.inputChangeTitlePack}),Object(F.jsx)(z,{onClick:function(){m(function(e,t,n,c){return function(r){r(D("loading")),I(e,t,n).then((function(e){_(c).then((function(e){r(_e(e.cards,c)),r(D("succeeded"))}))}))}}(n,i,A,g)),h(!1),r(""),o("")},label:"Update",backgroundColor:"blue",size:"large"})]})]}),Object(F.jsxs)("div",{className:Me.a.searchComponents,children:[Object(F.jsx)(z,{onClick:function(){b(!0)},label:"Add Card",backgroundColor:"blue"}),Object(F.jsx)(we,{})]}),0===x.length?Object(F.jsx)("div",{children:"Not Found Cards"}):Object(F.jsxs)("table",{className:Me.a.table,children:[Object(F.jsx)("thead",{children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{children:"Question"}),Object(F.jsx)("th",{children:"Answer"}),Object(F.jsx)("th",{children:"Grade"}),Object(F.jsx)("th",{children:"Shots"})]})}),x.map((function(e){return Object(F.jsx)("tbody",{className:Me.a.packData,children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:e.question}),Object(F.jsx)("td",{children:e.answer}),Object(F.jsx)("td",{children:e.grade}),Object(F.jsx)("td",{children:e.shots}),Object(F.jsx)("td",{children:Object(F.jsx)(z,{onClick:function(){return function(e){h(!0);var t=x.find((function(t){return t._id===e}));void 0!==t&&(r(t.question),o(t.answer),m(function(e){return{type:"SET-CARD-ID",cardId:e}}(t._id)))}(e._id)},label:"Update"})}),Object(F.jsx)("td",{children:Object(F.jsx)(z,{onClick:function(){return C(e._id,g)},label:"Delete"})})]})})}))]}),Object(F.jsx)(Re,{})]})})),Be=n(59),Ue=n.n(Be),We=function(){var e=Object(l.c)((function(e){return e.cards.cards})),t=Object(c.useState)(0),n=Object(V.a)(t,2),r=n[0],a=n[1];return Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:Ue.a.background}),Object(F.jsxs)("div",{className:Ue.a.window,children:[Object(F.jsx)("div",{children:e[r].question}),Object(F.jsx)("div",{children:e[r].answer}),Object(F.jsxs)("div",{children:[Object(F.jsx)("span",{children:"1"}),Object(F.jsx)("span",{children:"2"}),Object(F.jsx)("span",{children:"3"}),Object(F.jsx)("span",{children:"4"}),Object(F.jsx)("span",{children:"5"})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("span",{onClick:function(){r>=0&&a(r-1)},children:"prev"}),Object(F.jsx)("span",{onClick:function(){r<=e.length&&a(r+1)},children:"next"})]})]})]})},Qe=n(60),Fe=n.n(Qe),ze=n.p+"static/media/wallper2.b1064ff6.jpg",He=function(){return Object(F.jsx)("div",{className:Fe.a.body,style:{backgroundImage:"url(".concat(ze,")")},children:Object(F.jsx)(o.d,{children:Object(F.jsxs)("div",{className:Fe.a.routes,children:[Object(F.jsx)(o.b,{exact:!0,path:"#",render:function(){return Object(F.jsx)(ge,{})}}),Object(F.jsx)(o.b,{exact:!0,path:"/registration",render:function(){return Object(F.jsx)(ae,{})}}),Object(F.jsx)(o.b,{exact:!0,path:"/forgot-password",render:function(){return Object(F.jsx)(je,{})}}),Object(F.jsx)(o.b,{exact:!0,path:"/profile",render:function(){return Object(F.jsx)(ge,{})}}),Object(F.jsx)(o.b,{exact:!0,path:"/login",render:function(){return Object(F.jsx)(ve,{})}}),Object(F.jsx)(o.b,{exact:!0,path:"/packs",render:function(){return Object(F.jsx)(De,{})}}),Object(F.jsx)(o.b,{exact:!0,path:"/cards/",render:function(){return Object(F.jsx)(Ge,{})}}),Object(F.jsx)(o.b,{exact:!0,path:"/learn/",render:function(){return Object(F.jsx)(We,{})}}),Object(F.jsx)(o.b,{path:"/404",render:function(){return Object(F.jsx)(J,{})}})]})})})},Ke=function(){var e=Object(l.b)();return Object(c.useEffect)((function(){e((function(e){e(D("loading")),N().then((function(t){e(B(t._id)),e(G(!0)),e(W(!0)),e(D("succeeded"))})).catch((function(t){e(M(t.response.data.error)),e(G(!1)),e(D("failed")),e(W(!1))}))}))}),[e]),Object(F.jsx)(i.a,{children:Object(F.jsxs)("div",{className:"App",children:[Object(F.jsx)(Z,{}),Object(F.jsx)(He,{})]})})},Ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},Xe=n(52),Ze=n(83),Je=Object(Xe.b)({packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-PACKS":return Object(p.a)(Object(p.a)({},e),{},{cardPacks:t.cardPacks});case"ADD-PACK":return Object(p.a)(Object(p.a)({},e),{},{newPackTitle:t.newPackTitle});case"DELETE-PACK":return e.cardPacks.filter((function(e){return e._id!==t.id}));case"SET-PACK-ID":return Object(p.a)(Object(p.a)({},e),{},{packId:t.packId});case"SET_CURRENT_PAGE":return Object(p.a)(Object(p.a)({},e),{},{page:t.page});case"SET_TOTAL_COUNT":return Object(p.a)(Object(p.a)({},e),{},{cardPacksTotalCount:t.cardPacksTotalCount});case"SET-SEARCH-STATUS":return Object(p.a)(Object(p.a)({},e),{},{searchStatus:t.searchStatus});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-ERROR-TEXT":return Object(p.a)(Object(p.a)({},e),{},{errorText:t.errorText});case"SET-ADDED-USER":return Object(p.a)(Object(p.a)({},e),{},{addedUser:!0});case"SET-LOADING-STATUS":return Object(p.a)(Object(p.a)({},e),{},{loadingStatus:t.loadingStatus});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(p.a)(Object(p.a)({},e),{},{isLoggedIn:t.value});case"login/CHANG-CHECKBOX-LOGGED-IN":return Object(p.a)(Object(p.a)({},e),{},{rememberMe:t.rememberMe});default:return e}},forgotPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CARDS/FORGOT-PASSWOR":return Object(p.a)(Object(p.a)({},e),{},{forgotPassword:t.forgotPassword});case"CARDS/SET-APP-STATUS":return Object(p.a)(Object(p.a)({},e),{},{status:t.status});case"CARDS/SET-APP-ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.error});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-CARDS":return Object(p.a)(Object(p.a)({},e),{},{cards:t.cards,packId:t.packId});case"SET-CARD-ID":return Object(p.a)(Object(p.a)({},e),{},{cardId:t.cardId});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.error});case"SET-IS-INITIALIZED":return Object(p.a)(Object(p.a)({},e),{},{isInitialized:t.isInitialized});case"SET-MY-ID":var n=Object(p.a)(Object(p.a)({},e),{},{myId:t.myId});return n;default:return Object(p.a)({},e)}}}),Ve=Object(Xe.c)(Je,Object(Xe.a)(Ze.a));window.store=Ve,s.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(l.a,{store:Ve,children:Object(F.jsx)(i.b,{children:Object(F.jsx)(Ke,{})})})}),document.getElementById("root")),Ye()},24:function(e,t,n){e.exports={nav:"Header_nav__22THU",item:"Header_item__ssK_c",active:"Header_active__1MFs-"}},26:function(e,t,n){e.exports={packs:"Packs_packs__1ctlP",table:"Packs_table__1ExYm",backgroundForWindow:"Packs_backgroundForWindow__F5P-O",inputWindow:"Packs_inputWindow__1tuSe",searchComponents:"Packs_searchComponents__1J3lq",linkToCards:"Packs_linkToCards__24hgo"}},27:function(e,t,n){e.exports={table:"Cards_table__2svq7",backgroundForWindow:"Cards_backgroundForWindow__3GKVV",searchComponents:"Cards_searchComponents__1bbbR",inputWindow:"Cards_inputWindow__2shvY"}},32:function(e,t,n){e.exports={searchPack:"searchPack_searchPack__3wQsW",search_table:"searchPack_search_table__1APpv",slider:"searchPack_slider__YpQLA",paginator:"searchPack_paginator__2RkJL",pageNumber:"searchPack_pageNumber__7LSgb",selectedPage:"searchPack_selectedPage__3xe9A"}},34:function(e,t,n){e.exports={titleWithInput:"Login_titleWithInput__ICapP",errorText:"Login_errorText__2nUly",expleningText:"Login_expleningText__1Kdzt"}},44:function(e,t,n){e.exports={background:"Error_background__eJ_f2",window:"Error_window__2rw8T",img:"Error_img__1iamy",sorry:"Error_sorry__3MkXi"}},55:function(e,t,n){e.exports={background:"Preloader_background__3-ILB",window:"Preloader_window__INSUd"}},59:function(e,t,n){e.exports={background:"LearnModal_background__3QA1I",window:"LearnModal_window__36R53"}},60:function(e,t,n){e.exports={body:"Routes_body__spb9T",routes:"Routes_routes__1pALM"}},71:function(e,t,n){e.exports={register:"Registration_register__1kewo",errorText:"Registration_errorText__2agbz"}},90:function(e,t,n){},91:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.cb773329.chunk.js.map