(this["webpackJsonppicture-select"]=this["webpackJsonppicture-select"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(8),s=c.n(a),o=(c(13),c(2)),u=(c(14),c(4)),l=c(5),j=(c(15),c(16),function(e,t){var c=Object(n.useState)(e),i=Object(o.a)(c,2),a=i[0],s=i[1];return Object(n.useEffect)((function(){s(e)}),[e]),{checked:a,onChange:function(){s(!a),"function"===typeof t&&t(!a)}}}),r=c(0),b=function(e){var t=e.url,c=e.name,i=e.id,a=e.isChecked,s=e.onCheck,l=new URL(t).pathname.split("/"),b=l[l.length-1],f=Object(n.useState)(a),d=Object(o.a)(f,2),A=d[0],h=d[1];return Object(r.jsxs)("div",{className:"item-box",children:[Object(r.jsx)("input",Object(u.a)({type:"checkbox",name:"singleCheck",id:"singleCheck",className:"single-check"},j(a,(function(e){h(e),"function"===typeof s&&s(e,i)})))),Object(r.jsx)("img",{src:t,alt:c,title:c,onClick:function(){h(!A),"function"===typeof s&&s(!A,i)}}),Object(r.jsx)("span",{title:b,children:b})]})},f=function(e){var t=e.pictures,c=e.value,i=e.onChange,a=Object(n.useState)([]),s=Object(o.a)(a,2),f=s[0],d=s[1],A=Object(n.useState)([]),h=Object(o.a)(A,2),O=h[0],p=h[1],m=(null===c||void 0===c?void 0:c.length)||0,g=m===t.length,x=function(e,t){var n,a=c.indexOf(t);if(a<0)n=[].concat(Object(l.a)(c),[t]);else{var s=Object(l.a)(c);s.splice(a,1),n=Object(l.a)(s)}d(n),"function"===typeof i&&i(n)};return Object(n.useEffect)((function(){p(t.map((function(e){return e.id})))}),[t]),Object(n.useEffect)((function(){d(Object(l.a)(c))}),[c]),Object(r.jsxs)("div",{className:"picture-box",children:[Object(r.jsxs)("div",{className:"all-check-box",children:[Object(r.jsx)("input",Object(u.a)({type:"checkbox",name:"allChecked",id:"allChecked",className:"allChecked"},j(g,(function(e){var t=e?O:[];d(t),"function"===typeof i&&i(t)})))),Object(r.jsxs)("span",{children:["\u5df2\u9009\u4e2d",m,"\u4e2a\u6587\u4ef6"]})]}),Object(r.jsx)("div",{className:"items-box",children:null===t||void 0===t?void 0:t.map((function(e){var t=e.id,c=f.includes(t);return Object(r.jsx)(b,Object(u.a)({isChecked:c,onCheck:x},e),t)}))})]})},d=[{id:"1",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"2",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"3",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"}],A=function(){var e=Object(n.useState)(["1"]),t=Object(o.a)(e,2),c=t[0],i=t[1],a=[].concat(d);return console.log(c),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(f,{pictures:a,value:c,onChange:function(e){return i(e)}})})};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.4e660a8e.chunk.js.map