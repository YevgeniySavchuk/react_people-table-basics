(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(11),r=n.n(c),s=n(5),a=n(2),j=(n(17),n(10),n(0)),i=function(){return Object(j.jsx)("h1",{className:"title has-text-centered",children:"People table"})},b=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i,{}),Object(j.jsx)("nav",{className:"has-text-centered my-5",children:Object(j.jsxs)("div",{children:[Object(j.jsx)(s.b,{className:"button is-primary mx-6",to:"/home",children:"Home page"}),Object(j.jsx)(s.b,{className:"button is-primary mx-6",to:"people",children:"People Page"})]})}),Object(j.jsx)(a.a,{})]})},h=function(){return Object(j.jsx)("h1",{className:"has-text-centered",children:"Page not found"})},l=n(1),o=n(9),d=n(4),x=n(12),u=n(8),O=n.n(u),m=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_people-table/api","/people.json"));case 2:if(t=e.sent,e.prev=3,!t.ok){e.next=8;break}return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:throw new Error("error");case 11:throw e.prev=11,e.t0=e.catch(3),new Error("error");case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(l.useEffect)((function(){m().then((function(e){var t=e.map((function(t,n){return Object(o.a)(Object(o.a)({},t),{},{id:n,father:e.find((function(e){return t.fatherName===e.name}))||null,mother:e.find((function(e){return t.motherName===e.name}))||null})}));c(t)}))}),[]),Object(j.jsx)(j.Fragment,{children:n.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{children:e.sex}),Object(j.jsx)("td",{children:e.born}),Object(j.jsx)("td",{children:e.died}),Object(j.jsx)("td",{children:e.fatherName?e.fatherName:"not found"}),Object(j.jsx)("td",{children:e.motherName?e.motherName:"not found"})]},e.id)}))})},f=function(){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Father"}),Object(j.jsx)("th",{children:"Mother"})]})},N=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"subtitle has-text-centered",children:"People page"}),Object(j.jsxs)("table",{className:"table is-bordered table is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsx)(f,{})}),Object(j.jsx)("tbody",{children:Object(j.jsx)(p,{})}),Object(j.jsx)("tfoot",{children:Object(j.jsx)(f,{})})]})]})},g=function(){return Object(j.jsx)("h2",{className:"subtitle has-text-centered",children:"Home page"})};r.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(a.d,{children:Object(j.jsxs)(a.b,{path:"/",element:Object(j.jsx)(b,{}),children:[Object(j.jsx)(a.b,{path:"home",element:Object(j.jsx)(g,{})}),Object(j.jsx)(a.b,{path:"people",element:Object(j.jsx)(N,{})}),Object(j.jsx)(a.b,{path:"*",element:Object(j.jsx)(h,{})})]})})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.63cfd8d9.chunk.js.map