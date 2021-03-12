(this["webpackJsonptask-timer"]=this["webpackJsonptask-timer"]||[]).push([[0],{89:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(9),c=a.n(r),s=a(127),o=a(128),u=a(16),d=a(51),j="ADD_TASK_TIMER",l="DELETE_TASK_TIMER",m="SET_TIMERS",b="PAUSE_TIMER",O="RESUME_TIMER",p=a(118),g=a(129),f=a(123),x=a(63),v=a.n(x),T=a(30),h=a.n(T),y=a(6),E=Object(p.a)((function(t){return{root:{marginTop:t.spacing(2),padding:t.spacing(3),display:"flex",justifyContent:"space-between"},textField:{flexGrow:2,marginRight:t.spacing(1)}}}));var I=function(){var t=Object(n.useState)(""),e=Object(d.a)(t,2),a=e[0],i=e[1],r=Object(u.b)(),c=E(),s=function(){var t=a||"Task#[".concat(h()().format("HH:mm:ss"),"]");return i(""),r(function(t,e,a){return{type:j,payload:{id:t,title:e,startingTime:a,pausingTime:0,isPaused:!1}}}(Math.random().toString(36).substr(2,9),t,Date.now()))};return Object(y.jsxs)("div",{className:c.root,children:[Object(y.jsx)(g.a,{variant:"outlined",className:c.textField,type:"text",onChange:function(t){return i(t.target.value)},value:a,label:"Task title",onKeyPress:function(t){"Enter"===t.key&&s()}}),Object(y.jsx)(f.a,{onClick:s,variant:"contained",color:"primary",children:Object(y.jsx)(v.a,{})})]})},S=a(50),k=a(122),P=a(124),w=a(66),A=a.n(w),N=a(64),R=a.n(N),M=a(65),C=a.n(M),D=function(t){var e=h.a.duration(t).hours(),a=h.a.duration(t).minutes(),n=h.a.duration(t).seconds();return a=a<10?"0"+a:a,n=n<10?"0"+n:n,"".concat(e=e<10?"0"+e:e,":").concat(a,":").concat(n)};var _=function(t){var e=Object(n.useState)(0),a=Object(d.a)(e,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){var e;return t.isPaused?(clearInterval(e),r(t.pausingTime-t.startingTime)):e=setInterval((function(){r(Date.now()-t.startingTime)}),100),function(){clearInterval(e)}}),[t.isPaused]),Object(y.jsx)("span",{children:D(i)})},J=a(3),K=Object(p.a)((function(t){return{root:{margin:t.spacing(1),padding:t.spacing(2),display:"flex",justifyContent:"space-between",alignItems:"center",transition:".2s ease-in"},paused:{color:t.palette.action.disabled,backgroundColor:t.palette.action.disabledBackground,transition:".2s ease-out"}}}));var B=function(t){var e=K(),a=Object(u.b)(),n=function(){return t.isPaused?a((e=t.timerId,n=Date.now(),{type:O,payload:{id:e,time:n}})):a(function(t,e){return{type:b,payload:{id:t,time:e}}}(t.timerId,Date.now()));var e,n};return Object(y.jsxs)(k.a,{className:Object(J.a)(e.root,Object(S.a)({},e.paused,t.isPaused)),children:[t.title,Object(y.jsxs)("div",{children:[Object(y.jsx)(_,{startingTime:t.startingTime,isPaused:t.isPaused,pausingTime:t.pausingTime}),Object(y.jsx)(P.a,{onClick:function(){return n()},children:t.isPaused?Object(y.jsx)(R.a,{color:"primary"}):Object(y.jsx)(C.a,{color:"primary"})}),Object(y.jsx)(P.a,{onClick:t.onRemove,children:Object(y.jsx)(A.a,{color:"error"})})]})]})},F=a(125),H=Object(p.a)((function(t){return{root:{margin:t.spacing(1),padding:t.spacing(1)},text:{padding:t.spacing(2),textAlign:"center"}}}));var U=function(){var t=Object(u.c)((function(t){return t.timers})),e=Object(u.b)(),a=H();return t.length?Object(y.jsx)("div",{className:a.root,children:t.map((function(t){return Object(y.jsx)(B,{onRemove:function(){return e((a=t.id,{type:l,payload:{id:a}}));var a},isPaused:t.isPaused,startingTime:t.startingTime,pausingTime:t.pausingTime,timerId:t.id,title:t.title},t.id)}))}):Object(y.jsx)(F.a,{className:a.text,variant:"body1",color:"textSecondary",children:"Add new task"})},W=Object(p.a)((function(t){return{root:{maxWidth:"560px",textAlign:"center",margin:"auto",marginTop:t.spacing(2)},logo:{color:t.palette.primary.main,fontWeight:"bold"}}}));var G=function(t){var e=t.children,a=Object(u.c)((function(t){return t.timers})),i=Object(u.b)(),r=W();return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("timers"));t&&t.length&&i({type:m,payload:{timersArray:t}})}),[]),Object(n.useEffect)((function(){localStorage.setItem("timers",JSON.stringify(a))}),[a]),Object(y.jsxs)("div",{className:r.root,children:[Object(y.jsx)(F.a,{variant:"h2",className:r.logo,children:"Tasks Timer \u23f1"}),Object(y.jsx)(k.a,{children:e})]})},L=a(44),q=a(68),z=a(14),Q={timers:[]};var V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0,a=e.payload,n=e.type;switch(n){case j:return Object(z.a)(Object(z.a)({},t),{},{timers:[a].concat(Object(q.a)(t.timers))});case l:return Object(z.a)(Object(z.a)({},t),{},{timers:t.timers.filter((function(t){return t.id!==a.id}))});case O:return console.log(t),Object(z.a)(Object(z.a)({},t),{},{timers:t.timers.map((function(t){return t.id===a.id?Object(z.a)(Object(z.a)({},t),{},{isPaused:!1,pausingTime:t.pausingTime,startingTime:t.startingTime+(a.time-t.pausingTime)}):t}))});case b:return console.log(t),Object(z.a)(Object(z.a)({},t),{},{timers:t.timers.map((function(t){return t.id===a.id?Object(z.a)(Object(z.a)({},t),{},{isPaused:!0,pausingTime:a.time}):t}))});case m:return Object(z.a)(Object(z.a)({},t),{},{timers:a.timersArray});default:return t}},X=Object(L.b)(V),Y=a(67),Z=a(52),$=a(126),tt=Object(Y.a)({palette:{primary:{main:Z.a[500]},secondary:{main:$.a[500]}}});var et=function(){return Object(y.jsx)(u.a,{store:X,children:Object(y.jsxs)(s.a,{theme:tt,children:[Object(y.jsx)(o.a,{}),Object(y.jsxs)(G,{children:[Object(y.jsx)(I,{}),Object(y.jsx)(U,{})]})]})})};a(88);c.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(et,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.ab63698c.chunk.js.map