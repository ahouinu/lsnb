(this.webpackJsonplsnb=this.webpackJsonplsnb||[]).push([[8],{247:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(470),r={Mon:[{id:Object(n.a)(),author:"Zac",content:[{id:Object(n.a)(),question:"Status",answer:"Coding \ud83d\udcbb"}]}],Tue:[{id:Object(n.a)(),author:"Eric",content:[{id:Object(n.a)(),question:"Status",answer:"Designing \ud83c\udfa8"}]}],Wed:[{id:Object(n.a)(),author:"Tim",content:[{id:Object(n.a)(),question:"Status",answer:"Trouble Maker \ud83d\udca2"}]}],Thu:[],Fri:[]}},366:function(e,a,t){},469:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(252),s=t(187),c=t(222),u=t(465),i=t(467),o=t(464),m=t(466),b=t(460),d=t(470),w=t(247),h=["What did you do since last time?","What will you do today?","Anything blocking your progress?"],E=t(13),O=(t(366),u.a.Option),p=i.a.TextArea,f=["Mon","Tue","Wed","Thu","Fri"].map((function(e,a){return r.a.createElement(O,{value:e,key:e},e)})),j=function(){var e=o.a.useForm(),a=Object(c.a)(e,1)[0],t=Object(E.f)();return r.a.createElement(m.a,{className:"form-card"},r.a.createElement("h1",null,"Personal Daily Report"),r.a.createElement(o.a,{labelCol:{span:4},labelAlign:"left",form:a,onFinish:function(e){a.resetFields();var n=JSON.parse(localStorage.getItem("allTasks"))||w.a,r={};r[e.day]=[].concat(Object(s.a)(n[e.day]),[{id:Object(d.a)(),author:e.author,content:[{id:Object(d.a)(),question:h[0],answer:e.answer1},{id:Object(d.a)(),question:h[1],answer:e.answer2},{id:Object(d.a)(),question:h[2],answer:e.answer3}]}]),n=Object(l.a)({},n,{},r),localStorage.setItem("allTasks",JSON.stringify(n)),t.push("/")},initialValues:{author:"",answer1:"",answer2:"",answer3:""}},r.a.createElement(o.a.Item,{label:"Reporter",name:"author",rules:[{required:!0}]},r.a.createElement(i.a,null)),r.a.createElement(o.a.Item,{name:"day",label:"Date",rules:[{required:!0}]},r.a.createElement(u.a,null,f)),r.a.createElement("h3",null,h[0]),r.a.createElement(o.a.Item,{label:"Answer",name:"answer1"},r.a.createElement(p,{rows:4})),r.a.createElement("h3",null,h[1]),r.a.createElement(o.a.Item,{label:"Answer",name:"answer2"},r.a.createElement(p,{rows:4})),r.a.createElement("h3",null,h[2]),r.a.createElement(o.a.Item,{label:"Answer",name:"answer3"},r.a.createElement(p,{rows:4})),r.a.createElement(o.a.Item,null,r.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Submit"))))};a.default=function(){return r.a.createElement("div",null,r.a.createElement(j,null))}}}]);
//# sourceMappingURL=8.fb7a6d69.chunk.js.map