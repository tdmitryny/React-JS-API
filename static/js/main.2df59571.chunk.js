(this.webpackJsonpcountry=this.webpackJsonpcountry||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(5),a=n.n(r),o=(n(11),n(12),n(3)),i=n.n(o),l=n(6),u=n(4),j=n(0);function h(e){var t=e.items;return e.isLoading?Object(j.jsx)("h1",{children:"Loading..."}):Object(j.jsx)("section",{className:"country__container",children:t.map((function(e,t){return Object(j.jsxs)("div",{className:"country__box",children:[Object(j.jsx)("img",{className:"country__flag",src:e[0].flag,alt:"country flag"}),Object(j.jsxs)("div",{className:"country__data",children:[Object(j.jsx)("div",{className:"country__title",children:Object(j.jsx)("h3",{className:"country__name",children:e[0].name})}),Object(j.jsx)("h4",{className:"country__region",children:e[0].region}),Object(j.jsxs)("p",{className:"country__row",children:[Object(j.jsx)("span",{children:"\ud83d\udc6b"}),(+e[0].population/1e6).toFixed(2)," people"]}),Object(j.jsxs)("p",{className:"country__row",children:[Object(j.jsx)("span",{children:"\ud83d\udde3"}),e[0].languages[0].name]}),Object(j.jsxs)("p",{className:"country__row",children:[Object(j.jsx)("span",{children:"\ud83d\udcb0"}),e[0].currencies[0].name]})]})]},t)}))})}function m(){return Object(j.jsx)("div",{className:"toggle",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{className:"slider round",id:"checkbox",type:"checkbox"}),Object(j.jsx)("label",{className:"switch",for:"checkbox",children:Object(j.jsx)("div",{className:"ball"})})]})})}var d=function(e){return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{style:{fontSize:"12rem",color:"#000"},children:e.name}),e.children,Object(j.jsx)(m,{})]})};var b=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!0),a=Object(u.a)(r,2),o=(a[0],a[1]),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Something went wrong";return fetch(e).then((function(e){if(!e.ok)throw new Error("Country not found ".concat(t,", ").concat(e.status));return e.json()}))};return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(t,n,c,r,a,l,u,j){var h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([m("https://restcountries.com/v2/name/".concat(t)),m("https://restcountries.com/v2/name/".concat(n)),m("https://restcountries.com/v2/name/".concat(c)),m("https://restcountries.com/v2/name/".concat(r)),m("https://restcountries.com/v2/name/".concat(a)),m("https://restcountries.com/v2/name/".concat(l)),m("https://restcountries.com/v2/name/".concat(u)),m("https://restcountries.com/v2/name/".concat(j))]);case 3:h=e.sent,s(h),o(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(t,n,c,s,r,a,o,i){e.apply(this,arguments)}("canada","france","germany","italy","usa","japan","united kingdom","russia")}),[]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(d,{name:"G7",children:Object(j.jsx)("p",{style:{fontSize:"1.5rem",color:"#000"},children:"The Group of Seven is an inter-governmental political forum"})}),Object(j.jsx)(h,{setisLoading:o,items:n})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.2df59571.chunk.js.map