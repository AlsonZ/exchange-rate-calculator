(this["webpackJsonpexchange-rate-calculator"]=this["webpackJsonpexchange-rate-calculator"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/exchange.0188afaf.svg"},function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),u=t.n(c),o=(t(12),t(2)),l=t.n(o),s=t(5),i=t(1),f=t(6),v=t.n(f);t(14);var m=function(){var e=Object(n.useState)({}),a=Object(i.a)(e,2),t=a[0],c=a[1],u=Object(n.useRef)(null),o=Object(n.useRef)(null),f=Object(n.useState)(1),m=Object(i.a)(f,2),p=m[0],h=m[1],b=Object(n.useState)(0),g=Object(i.a)(b,2),E=g[0],d=g[1],j=Object(n.useState)(!1),O=Object(i.a)(j,2),x=O[0],w=O[1];Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.exchangeratesapi.io/latest?base=AUD");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,console.log(t),c(t.rates);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){k(p,1),w(!0)}),[t]);var N=function(e){return Object.keys(t).map((function(a,t){return"AUD"===a&&e?r.a.createElement("option",{selected:!0},a):r.a.createElement("option",null,a)}))},k=function(e,a){var n=function(e){for(var a in t)if(e===a)return t[a]};if(1===a){var r=e.target?e.target.value:p;h(r);var c=n(u.current.value);for(var l in t)if(o.current.value===l){var s=r/c*t[l],i=Math.round(100*s)/100;d(i);break}}else if(2===a){var f=e.target?e.target.value:E;d(f);var v=n(u.current.value);for(var m in t)if(o.current.value===m){var b=f/t[m]*v,g=Math.round(100*b)/100;h(g);break}}else if("Rate"===a){var j=n(u.current.value);for(var O in t)if(o.current.value===O){var x=1/j*t[O];return Math.round(100*x)/100}}},y=function(e){k(0,e)};return r.a.createElement("div",{className:"app-container"},r.a.createElement("svg",null,r.a.createElement("use",{xlinkHref:"".concat(v.a,"#icon-exchange")})),r.a.createElement("h1",null,"Exchange Rate Calculator"),r.a.createElement("div",{className:"inner-app-container"},r.a.createElement("span",{className:"currency-container"},r.a.createElement("select",{ref:u,className:"currencies",onChange:function(e){y(1)}},N(!0)),r.a.createElement("input",{className:"values",type:"number",value:p,onChange:function(e){k(e,1)}})),r.a.createElement("span",{className:"middle-container"},r.a.createElement("button",{className:"button",onClick:function(){var e=o.current.value;o.current.value=u.current.value,u.current.value=e,k(0,1)}},"Swap"),r.a.createElement("p",{className:"exchange-rate"},x&&"1 ".concat(u.current.value," = ").concat(k(0,"Rate")," ").concat(o.current.value))),r.a.createElement("span",{className:"currency-container"},r.a.createElement("select",{ref:o,className:"currencies",onChange:function(e){y(1)}},N(!1)),r.a.createElement("input",{className:"values",type:"number",value:E,onChange:function(e){k(e,2)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.d0235e67.chunk.js.map