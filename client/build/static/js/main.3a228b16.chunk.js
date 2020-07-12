(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/clipboard.f2039292.svg"},35:function(e,t,a){e.exports=a.p+"static/media/user.85cddc58.svg"},39:function(e,t,a){e.exports=a(69)},44:function(e,t,a){},46:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),c=a.n(s),o=a(14),l=(a(44),a(2)),m=a.n(l),i=a(6),u=a(1),d=a(5),p=a(71),b=a(70),h=(a(46),a(7)),f=a.n(h);var v=function(e){return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-left"},r.a.createElement(o.b,{to:"/",className:"nav-logo"},r.a.createElement("span",{className:"nav-logo"},r.a.createElement("span",{id:"word-1"},"T"),r.a.createElement("span",{id:"word-2"},"L"),r.a.createElement("span",{id:"word-3"},"V")))),r.a.createElement("div",{className:"nav-right"},e.loggedIn?[{link:"/log",content:"Log"},{link:"/compare",content:"Compare"},{link:"/logout",content:"Log out"}].map((function(e,t){return r.a.createElement(o.b,{key:t,to:e.link,className:"nav-link"},e.content)})):[{link:"/register",content:"Register"},{link:"/login",content:"Log in"}].map((function(e,t){return r.a.createElement(o.b,{key:t,to:e.link,className:"nav-link"},e.content)}))))};var E=function(){return r.a.createElement("div",{className:"load-screen"},r.a.createElement("div",{className:"lds-dual-ring"}))};var g=function(e){return r.a.createElement("div",{className:"top-banner"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content))},O=a(9),j=a(3);var N=function(e){var t=Object(n.useState)({date:e.date,session:e.session,times:e.times,comments:e.comments}),a=Object(u.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)({date:!1,session:!1,times:!1}),l=Object(u.a)(o,2),d=l[0],p=l[1],b=Object(n.useState)(!1),h=Object(u.a)(b,2),v=h[0],E=h[1],g={border:"2px solid red"};function N(e){var t=e.target,a=t.name,n=t.value;c((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(O.a)({},a,n))}))}function y(e){var t=e.target.name;p((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(O.a)({},t,!1))}))}function w(){return(w=Object(i.a)(m.a.mark((function t(a){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=!0,Object.keys(s).forEach((function(e){""===s[e].trim()&&"comments"!==e&&(p((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(O.a)({},e,!0))})),n=!1)})),!1!==n){t.next=5;break}return t.abrupt("return");case 5:return E(!0),t.next=8,f()({url:"/api/editSession",method:"patch",data:Object(j.a)(Object(j.a)({},s),{},{id:e.id})});case 8:!0===(r=t.sent).data.success?(e.handleEdit(),e.callReRender()):alert(r.data.message);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement("form",{onSubmit:function(e){return w.apply(this,arguments)},className:"session-form",action:"/editSession",method:"post"},r.a.createElement("input",{onChange:N,onFocus:y,type:"date",name:"date",value:s.date,style:d.date?g:{}}),r.a.createElement("textarea",{onChange:N,onFocus:y,name:"session",placeholder:"Session",value:s.session,style:d.session?g:{}}),r.a.createElement("textarea",{onChange:N,onFocus:y,name:"times",placeholder:"Times",value:s.times,style:d.times?g:{}}),r.a.createElement("textarea",{onChange:N,name:"comments",placeholder:"Comments",value:s.comments}),r.a.createElement("div",{className:"submit-cancel-buttons"},v?r.a.createElement("div",{className:"lds-dual-ring"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e.handleEdit,type:"button",className:"cancel"},"Cancel"),r.a.createElement("button",{className:"submit",type:"submit"},"Confirm"))))};var y=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)(!1),l=Object(u.a)(o,2),d=l[0],p=l[1];function b(){return(b=Object(i.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.next=3,f()({url:"/api/deleteSession",method:"delete",data:{id:e.id}});case 3:!0===(a=t.sent).data.success?(e.callReRender(),e.handleDelete()):(p(!1),c(a.data.message));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement("div",{className:"confirmation-window"},r.a.createElement("div",{className:"confirmation-box"},r.a.createElement("h3",null,"Are you sure you want to delete this session?"),r.a.createElement("p",null,s),d?r.a.createElement("div",{className:"lds-dual-ring"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"submit",onClick:function(){return b.apply(this,arguments)}},"Delete"),r.a.createElement("button",{onClick:e.handleDelete,className:"cancel"},"Cancel"))))};var w=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)(!1),l=Object(u.a)(o,2),m=l[0],i=l[1];function d(){c((function(e){return!e}))}function p(){i((function(e){return!e}))}return r.a.createElement("div",{id:e.id,className:"session-info"},s?r.a.createElement(N,{id:e.id,date:e.date,session:e.session,times:e.times,comments:e.comments,callReRender:e.callReRender,handleEdit:d}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"session-item"},e.date),r.a.createElement("div",{className:"session-item"},e.session),r.a.createElement("div",{className:"session-item"},e.times),r.a.createElement("div",{className:"session-item"},e.comments),r.a.createElement("div",{className:"edit-delete-buttons"},r.a.createElement("button",{onClick:d,className:"edit"},"Edit"),r.a.createElement("button",{onClick:p,className:"delete"},"Delete"))),m&&r.a.createElement(y,{handleDelete:p,callReRender:e.callReRender,id:e.id}))};var S=function(e){var t=e.sessions.filter((function(t){return new Date(t.date).getMonth()===e.month&&new Date(t.date).getFullYear()===e.year})),a=["January","February","March","April","May","June","July","August","September","October","Novemeber","December"][e.month]+" "+e.year;return r.a.createElement("div",{className:"month"},r.a.createElement("h3",{className:"month-title"},a),r.a.createElement("div",{className:"table-headers"},r.a.createElement("div",{className:"header"},"Date"),r.a.createElement("div",{className:"header"},"Session"),r.a.createElement("div",{className:"header"},"Times"),r.a.createElement("div",{className:"header"},"Comments"),r.a.createElement("div",{className:"header"})),t.map((function(t,a){return r.a.createElement(w,{key:a,id:t._id,date:t.date.slice(0,10),session:t.session,times:t.times,comments:t.comments,callReRender:e.callReRender})})))};var x=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),l=Object(u.a)(c,2),d=l[0],p=l[1],b=Object(n.useState)(""),h=Object(u.a)(b,2),v=h[0],O=h[1],j=Object(n.useState)(!0),N=Object(u.a)(j,2),y=N[0],w=N[1],x=Object(n.useState)(!1),k=Object(u.a)(x,2),C=k[0],F=k[1];function R(){F(!C)}return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/home");case 3:!0===(t=e.sent).data.success?(s(t.data.sessions),p(t.data.months),w(!1)):O(t.data.message),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[C]),r.a.createElement("div",{className:"page"},r.a.createElement(g,{title:"Your Sessions",content:"Track, view, edit and delete sessions"}),r.a.createElement("div",{className:"error-msg"},v),r.a.createElement("div",{className:"sessions"},y?r.a.createElement(E,null):r.a.createElement(r.a.Fragment,null,0!==d.length?d.map((function(e,t){return r.a.createElement(S,{key:t,month:e.month,year:e.year,sessions:a,callReRender:R})})):r.a.createElement("div",{className:"no-sessions"},r.a.createElement("p",null,"You haven't logged any sessions yet!"),r.a.createElement(o.b,{to:"/log",className:"log-button"},"Log your first session!")))))};var k=function(){var e=Object(n.useState)({fName:"",lName:"",username:"",email:"",password:"",passwordConfirmation:""}),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),l=o[0],p=o[1],b=Object(n.useState)(!1),h=Object(u.a)(b,2),v=h[0],E=h[1],g=Object(d.g)();function N(e){var t=e.target,a=t.name,n=t.value;s((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(O.a)({},a,n))}))}function y(){return(y=Object(i.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),E(!0),e.prev=2,e.next=5,f()({url:"/api/register",method:"POST",data:Object(j.a)({},a)});case 5:!0===(n=e.sent).data.success?g.push("/login"):(E(!1),p(n.data.message)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return r.a.createElement("form",{onSubmit:function(e){return y.apply(this,arguments)},action:"/register",method:"post"},r.a.createElement("input",{onChange:N,value:a.fName,type:"text",name:"fName",placeholder:"first name"}),r.a.createElement("input",{onChange:N,value:a.lName,type:"text",name:"lName",placeholder:"last name"}),r.a.createElement("input",{onChange:N,value:a.username,type:"text",name:"username",placeholder:"username"}),r.a.createElement("input",{onChange:N,value:a.email,type:"email",name:"email",placeholder:"email"}),r.a.createElement("input",{onChange:N,value:a.password,type:"password",name:"password",placeholder:"password"}),r.a.createElement("input",{onChange:N,value:a.passwordConfirmation,type:"password",name:"passwordConfirmation",placeholder:"password again"}),r.a.createElement("div",{className:"error-msg"},l),r.a.createElement("button",{className:"login-button",type:"submit"},v?r.a.createElement("div",{className:"lds-dual-ring"}):"Register"))},C=a(34),F=a.n(C);var R=function(){return r.a.createElement("div",{className:"login-container page"},r.a.createElement("div",{className:"login-box"},r.a.createElement("img",{className:"user-img",src:F.a,alt:""}),r.a.createElement(k,null)))};var D=function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(u.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)(""),l=Object(u.a)(o,2),d=l[0],p=l[1],b=Object(n.useState)(!1),h=Object(u.a)(b,2),v=h[0],E=h[1];function g(e){var t=e.target,a=t.name,n=t.value;c((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(O.a)({},a,n))}))}function N(){return(N=Object(i.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),E(!0),t.prev=2,t.next=5,f()({url:"/api/login",method:"POST",headers:{},data:Object(j.a)({},s)});case 5:if(!0!==(n=t.sent).data.success){t.next=11;break}return t.next=9,e.authenticate();case 9:t.next=13;break;case 11:E(!1),p(n.data.error);case 13:t.next=19;break;case 15:t.prev=15,t.t0=t.catch(2),alert(t.t0),E(!1);case 19:case"end":return t.stop()}}),t,null,[[2,15]])})))).apply(this,arguments)}return r.a.createElement("form",{onSubmit:function(e){return N.apply(this,arguments)},action:"/login",method:"post"},r.a.createElement("input",{onChange:g,value:s.username,type:"text",name:"username",placeholder:"username"}),r.a.createElement("input",{onChange:g,value:s.password,type:"password",name:"password",placeholder:"password"}),r.a.createElement("div",{className:"error-msg"},d),r.a.createElement("button",{className:"login-button",type:"submit"},v?r.a.createElement("div",{className:"lds-dual-ring"}):"Log In"))},I=a(35),M=a.n(I);var A=function(e){return r.a.createElement("div",{className:"login-container page"},r.a.createElement("div",{className:"login-box"},r.a.createElement("img",{className:"user-img",src:M.a,alt:""}),r.a.createElement(D,{authenticate:e.authenticate}),r.a.createElement("a",{href:"/register"},r.a.createElement("button",{className:"register-button"},"Register"))))};var J=function(e){return Object(n.useEffect)((function(){function t(){return(t=Object(i.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("/api/logout");case 3:if(!0!==t.sent.data.success){t.next=7;break}return t.next=7,e.authenticate();case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()})),r.a.createElement(E,null)},T=a(36);var L=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),s=a[0],c=a[1],o="date"+e.rowNumber,l="session"+e.rowNumber,m="times"+e.rowNumber,i="comments"+e.rowNumber,d={border:"2px solid red"};return Object(n.useEffect)((function(){c(!0)}),[]),r.a.createElement(b.a,{in:s,timeout:500,classNames:"slide-down"},r.a.createElement("div",{id:e.rowNumber,className:"session-form"},r.a.createElement("input",{onChange:e.handleChange,onFocus:e.removeMissing,value:e.formInputs[o],type:"date",name:"date"+e.rowNumber,style:-1!==e.missingFormInputs.indexOf("date"+e.rowNumber.toString())?d:{}}),r.a.createElement("textarea",{onChange:e.handleChange,onFocus:e.removeMissing,value:e.formInputs[l],name:"session"+e.rowNumber,placeholder:"Session",style:-1!==e.missingFormInputs.indexOf("session"+e.rowNumber.toString())?d:{}}),r.a.createElement("textarea",{onChange:e.handleChange,onFocus:e.removeMissing,value:e.formInputs[m],name:"times"+e.rowNumber,placeholder:"Times",style:-1!==e.missingFormInputs.indexOf("times"+e.rowNumber.toString())?d:{}}),r.a.createElement("textarea",{onChange:e.handleChange,value:e.formInputs[i],name:"comments"+e.rowNumber,placeholder:"Comments (Optional)"})))};var P=function(){var e=Object(n.useState)(1),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)({date0:"",session0:"",times0:"",comments0:""}),o=Object(u.a)(c,2),l=o[0],p=o[1],b=Object(n.useState)([]),h=Object(u.a)(b,2),v=h[0],E=h[1],g=Object(n.useState)(!1),N=Object(u.a)(g,2),y=N[0],w=N[1],S=["date","session","times","comments"],x=Object(d.g)();function k(e){var t=e.target,a=t.name,n=t.value;p((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(O.a)({},a,n))}))}function C(e){var t=e.target.name;E((function(e){return e.splice(e.indexOf(t),1),Object(T.a)(e)}))}function F(){return(F=Object(i.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f()({url:"/api/log",method:"POST",data:Object(j.a)({},l)});case 3:(t=e.sent).data.success?setTimeout((function(){x.push("/")}),500):alert(t.data.message),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),w(!0);var t=[];Array(a).fill(0).forEach((function(e,a){S.forEach((function(e){""===l[e+a.toString()].trim()&&"comments"!==e&&t.push(e+a.toString())}))})),E([].concat(t)),0===t.length?function(){F.apply(this,arguments)}():w(!1)},action:"/log",method:"post"},Array(a).fill(0).map((function(e,t){return r.a.createElement(L,{key:t,rowNumber:t,handleChange:k,formInputs:l,missingFormInputs:v,removeMissing:C})})),r.a.createElement("div",{className:"add-remove-buttons"},r.a.createElement("button",{onClick:function(){s((function(e){return e+1})),p((function(e){var t={};return S.map((function(e){return e+a.toString()})).forEach((function(e){t[e]=""})),Object(j.a)(Object(j.a)({},e),t)}))},className:"add",id:"add",type:"button"},"Add another session"),r.a.createElement("button",{onClick:function(){a>1&&(s((function(e){return e-1})),p((function(e){return S.forEach((function(t){delete e[t+(a-1).toString()]})),Object(j.a)({},e)})))},className:"remove",id:"remove",type:"button"},"Remove last session")),r.a.createElement("div",{className:"error-msg"}),r.a.createElement("button",{className:"log-button",type:"submit"},y?r.a.createElement("div",{className:"lds-dual-ring"}):"Log"))};var Y=function(){return r.a.createElement("div",{className:"page"},r.a.createElement(g,{title:"Log",content:"Add one or mulitple sessions to your training log"}),r.a.createElement("div",{className:"log-container"},r.a.createElement(P,null)))};var G=function(e){var t=Object(n.useState)({month1:"",month2:""}),a=Object(u.a)(t,2),s=a[0],c=a[1],o=["January","February","March","April","May","June","July","August","September","October","Novemeber","December"];function l(e){var t=e.target,a=t.name,n=t.value;c((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(O.a)({},a,n))}))}function d(){return(d=Object(i.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),""!==s.month1&&""!==s.month2){t.next=3;break}return t.abrupt("return",e.handleError("Please select 2 months to compare"));case 3:return e.handleError(""),e.toggleSessionsGotten(),t.next=7,f()({url:"/api/compare",method:"post",data:s});case 7:!0===(n=t.sent).data.success?e.setSessions(s.month1,n.data.month1Sessions,s.month2,n.data.month2Sessions):e.handleError(n.data.message),e.toggleSessionsGotten();case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement("div",{className:"compare-form-container"},r.a.createElement("form",{onSubmit:function(e){return d.apply(this,arguments)},action:"/compare",method:"get"},r.a.createElement("select",{onChange:l,value:s.month1,name:"month1"},r.a.createElement("option",{value:"",disabled:"disabled"},"Choose Month"),e.months.map((function(e,t){var a="0"+(e.month+1).toString().slice(-2)+" "+e.year;return r.a.createElement("option",{key:t,value:a},o[e.month]+" "+e.year)}))),r.a.createElement("select",{onChange:l,value:s.month2,name:"month2"},r.a.createElement("option",{value:"",disabled:"disabled"},"Choose Month"),e.months.map((function(e,t){var a="0"+(e.month+1).toString().slice(-2)+" "+e.year;return r.a.createElement("option",{key:t,value:a},o[e.month]+" "+e.year)}))),r.a.createElement("button",{className:"compare-button",type:"submit"},"Compare")),r.a.createElement("div",{className:"error-msg"},e.errorMsg))};var B=function(e){return r.a.createElement("div",{id:e.id,className:"session-info"},r.a.createElement("div",{className:"session-item"},e.date),r.a.createElement("div",{className:"session-item"},e.session),r.a.createElement("div",{className:"session-item"},e.times),r.a.createElement("div",{className:"session-item"},e.comments))};var W=function(e){var t=e.sessions.filter((function(t){return new Date(t.date).getMonth()===e.month&&new Date(t.date).getFullYear()===e.year})),a=["January","February","March","April","May","June","July","August","September","October","Novemeber","December"][e.month]+" "+e.year;return r.a.createElement("div",{className:"month compare-month"},r.a.createElement("h3",{className:"month-title"},e.month?a:"Month "+e.number),r.a.createElement("div",{className:"table-headers"},r.a.createElement("div",{className:"header"},"Date"),r.a.createElement("div",{className:"header"},"Session"),r.a.createElement("div",{className:"header"},"Times"),r.a.createElement("div",{className:"header"},"Comments")),t.map((function(e,t){return r.a.createElement(B,{key:t,id:e._id,date:e.date.slice(0,10),session:e.session,times:e.times,comments:e.comments})})))};var _=function(){var e=Object(n.useState)({month:"",sessions:[]}),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)({month:"",sessions:[]}),o=Object(u.a)(c,2),l=o[0],d=o[1],p=Object(n.useState)([]),b=Object(u.a)(p,2),h=b[0],v=b[1],O=Object(n.useState)(""),j=Object(u.a)(O,2),N=j[0],y=j[1],w=Object(n.useState)(!1),S=Object(u.a)(w,2),x=S[0],k=S[1],C=Object(n.useState)(!0),F=Object(u.a)(C,2),R=F[0],D=F[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/compare");case 2:!0===(t=e.sent).data.success?(v(t.data.months),y("")):y(t.data.message),k(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"page"},r.a.createElement(g,{title:"Compare",content:"Select 2 months to track your progress"}),r.a.createElement("div",{className:"compare-container"},x?r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{months:h,errorMsg:N,setSessions:function(e,t,a,n){s({month:e,sessions:t}),d({month:a,sessions:n})},toggleSessionsGotten:function(){D((function(e){return!e}))},handleError:function(e){y(e)}}),r.a.createElement("div",{className:"sessions compare-sessions"},R?r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{number:1,month:parseInt(a.month.slice(0,2))-1,year:parseInt(a.month.slice(-4)),sessions:a.sessions}),r.a.createElement(W,{number:2,month:parseInt(l.month.slice(0,2))-1,year:parseInt(l.month.slice(-4)),sessions:l.sessions})):r.a.createElement("div",{className:"lds-dual-ring"}))):r.a.createElement(E,null)))};var V=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),o=Object(u.a)(c,2),l=o[0],h=o[1],E=Object(d.h)();function g(){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/isloggedin");case 2:t=e.sent,s(t.data.loggedIn),h(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){g()}),[]),r.a.createElement("div",null,l&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{loggedIn:a}),r.a.createElement(p.a,{component:null},r.a.createElement(b.a,{key:E.key,in:!0,timeout:800,classNames:"fade"},r.a.createElement(d.d,{location:E},r.a.createElement(d.b,{exact:!0,path:"/"},a?r.a.createElement(x,null):r.a.createElement(d.a,{to:"/login"})),r.a.createElement(d.b,{path:"/login"},a?r.a.createElement(d.a,{to:"/"}):r.a.createElement(A,{authenticate:g})),r.a.createElement(d.b,{path:"/register"},a?r.a.createElement(d.a,{to:"/"}):r.a.createElement(R,null)),r.a.createElement(d.b,{path:"/logout"},a?r.a.createElement(J,{authenticate:g}):r.a.createElement(d.a,{to:"login"})),r.a.createElement(d.b,{exact:!0,path:"/log"},a?r.a.createElement(Y,null):r.a.createElement(d.a,{to:"/login"})),r.a.createElement(d.b,{path:"/compare"},a?r.a.createElement(_,null):r.a.createElement(d.a,{to:"/login"})),r.a.createElement(d.a,{to:"/"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.3a228b16.chunk.js.map