(this.webpackJsonplsnb=this.webpackJsonplsnb||[]).push([[9],{247:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(470),r={Mon:[{id:Object(n.a)(),author:"Zac",content:[{id:Object(n.a)(),question:"Status",answer:"Coding \ud83d\udcbb"}]}],Tue:[{id:Object(n.a)(),author:"Eric",content:[{id:Object(n.a)(),question:"Status",answer:"Designing \ud83c\udfa8"}]}],Wed:[{id:Object(n.a)(),author:"Tim",content:[{id:Object(n.a)(),question:"Status",answer:"Trouble Maker \ud83d\udca2"}]}],Thu:[],Fri:[]}},255:function(e,t,a){},468:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(311),c=a(312),i=a(252),o=a(222),s=a(223),u=a(466),m=a(460),d=(a(255),function(e){var t=e.content;return r.a.createElement("div",null,function(e){return e.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(l.a,{className:"question"},e.question),r.a.createElement(l.a,{className:"answer"},e.answer))}))}(t))}),f=a(472),p=a(458),b=u.a.Meta,g=function(e){var t=e.task,a=e.handleDelete;return r.a.createElement(u.a,{className:"qa-card",bordered:!1,title:r.a.createElement(b,{avatar:r.a.createElement(p.a,{name:t.author,size:32,round:"20px"}),title:t.author}),extra:r.a.createElement(m.a,{className:"del-btn",style:{fontSize:"8px"},onClick:function(){return a(t.id)}},r.a.createElement(f.a,null))},r.a.createElement(d,{content:t.content}))},E=function(e){var t=e.day,a=e.initialTasks;Object(s.a)(e,["day","initialTasks"]);console.log(a);var l=Object(n.useState)([]),u=Object(o.a)(l,2),m=u[0],d=u[1];Object(n.useEffect)((function(){d(a)}),[]);var f=function(e){var a=JSON.parse(localStorage.getItem("allTasks")),n={};n[t]=a[t].filter((function(t){return t.id!=e})),a=Object(i.a)({},a,{},n),localStorage.setItem("allTasks",JSON.stringify(a)),d(n[t])};return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement("h1",{style:{fontFamily:"Source Sans Pro",fontWeight:"bold"}},t),function(e){return e.map((function(e,t){return console.log(e),r.a.createElement(g,{key:t,task:e,handleDelete:f})}))}(m)))},k=a(247),v=["Mon","Tue","Wed","Thu","Fri"],h=["#FFFFFF","#84DCC6","#A5FFD6","#FFA69E","#FF686B"];t.default=function(){var e=JSON.parse(localStorage.getItem("allTasks"));return Object.values(e).every((function(e){return 0===e.length}))&&(localStorage.setItem("allTasks",JSON.stringify(k.a)),e=k.a),r.a.createElement("div",null,r.a.createElement(l.a,{gutter:"[60, 60]",align:"center",style:{minHeight:"800px",overflow:"auto",margin:"30px 0px 10px 0px"}},v.map((function(t,a){return r.a.createElement(c.a,{classname:"column-col",span:4,style:{backgroundColor:h[a],margin:"0 5px 0 5px",padding:"3px 3px 3px 3px",borderRadius:"20px"}},r.a.createElement(E,{day:t,key:a,initialTasks:e[t]}))}))))}}}]);
//# sourceMappingURL=9.a5bc86ce.chunk.js.map