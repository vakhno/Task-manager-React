(this.webpackJsonptaskmanagerreact=this.webpackJsonptaskmanagerreact||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/background.77a10ed4.jpg"},,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),l=(a(13),a(14),a(7)),s=a(2),m=Object(n.createContext)(),u=function(e){var t=e.children,a=JSON.parse(localStorage.getItem("tasks"))||[],r=Object(n.useState)(a),i=Object(s.a)(r,2),u=i[0],o=i[1],d=Object(n.useState)(null),f=Object(s.a)(d,2),v=f[0],E=f[1];Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(u))}),[u]);return c.a.createElement(m.Provider,{value:{tasks:u,addTask:function(e){var t=function(){var e=u.map((function(e){return+e.id})),t=e.length?e.reduce((function(e,t){return Math.min(e,t)})):0,a=e.length?e.reduce((function(e,t){return Math.max(e,t)})):0;if(!e.length)return 1;if(1!==t)return t-1;for(var n=2;n<a;n++)if(!e.includes(n))return n;return a+1}();o([].concat(Object(l.a)(u),[{title:e,id:t}]))},removeTask:function(e){o(u.filter((function(t){return t.id!==e})))},clearList:function(){o([])},findIdem:function(e){var t=u.find((function(t){return t.id===e}));E(t)},editTask:function(e,t){var a=u.map((function(a){return a.id===t?{title:e,id:t}:a}));o(a),E(null)},editItem:v}},t)},o=(a(15),function(e){var t=e.task,a=Object(n.useContext)(m),r=a.removeTask,i=a.findIdem;return c.a.createElement("li",{className:"list-item"},c.a.createElement("div",{className:"list-item__text"},t.title),c.a.createElement("div",{className:"list-item__operations"},c.a.createElement("button",{className:"list-item__button",onClick:function(){return r(t.id)}},c.a.createElement("svg",{height:"24",viewBox:"0 0 512 512",width:"24",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("g",null,c.a.createElement("path",{d:"m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z"}),c.a.createElement("path",{d:"m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z"})))),c.a.createElement("button",{className:"list-item__button",onClick:function(){return i(t.id)}},c.a.createElement("svg",{height:"24",viewBox:"0 0 325 325.37515",width:"24",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"m114.6875 284.675781-73.800781-73.800781 178.5-178.5 73.800781 73.800781zm-80.699219-60.800781 67.699219 67.699219-101.5 33.800781zm281.898438-140.300781-12.800781 12.800781-73.898438-73.898438 12.800781-12.800781c12.894531-12.902343 33.804688-12.902343 46.699219 0l27.199219 27.199219c12.800781 12.9375 12.800781 33.765625 0 46.699219zm0 0"})))))}),d=(a(16),function(){var e=Object(n.useContext)(m).tasks;return c.a.createElement("div",{className:"list"},e.length?c.a.createElement("ul",{className:"list__items"},e.map((function(e){return c.a.createElement(o,{task:e,key:e.id})}))):c.a.createElement("div",{className:"list__empty-list"},"No tasks"))}),f=(a(17),function(){var e=Object(n.useContext)(m),t=e.addTask,a=e.clearList,r=e.editItem,i=e.editTask,l=Object(n.useState)(""),u=Object(s.a)(l,2),o=u[0],d=u[1];return Object(n.useEffect)((function(){d(r?r.title:"")}),[r]),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r?i(o,r.id):(t(o),d(""))},className:"new-item-form"},c.a.createElement("input",{type:"text",className:"new-item-form__input",placeholder:"Add task",onChange:function(e){d(e.target.value)},value:o,required:!0}),c.a.createElement("div",{className:"new-item-form__operations"},c.a.createElement("button",{type:"submit",className:"new-item-form__button"},r?"Edit task":"Add Task"),c.a.createElement("button",{className:"new-item-form__button",onClick:a},"Clear All")))});a(18);var v=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"header__title"},"Task Manager"))},E=a(6),h=a.n(E);var p=function(){return c.a.createElement("div",{className:"container",style:{backgroundImage:"url(".concat(h.a,")")}},c.a.createElement("div",{className:"wrapper"},c.a.createElement(v,null),c.a.createElement("div",{className:"content"},c.a.createElement(u,null,c.a.createElement(f,null),c.a.createElement(d,null)))))};i.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.84dc3983.chunk.js.map