(this["webpackJsonphtml5-qrcode-react"]=this["webpackJsonphtml5-qrcode-react"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var r=c(2),s=c.n(r),n=c(9),a=c.n(n),o=(c(17),c(11)),l=c(12),d=(c(18),c(0)),i=function(e){return Object(d.jsxs)("div",{className:"App-info-section",children:[Object(d.jsx)("h3",{children:"How to use?"}),Object(d.jsxs)("div",{children:["Check out\xa0",Object(d.jsx)("a",{href:"https://github.com/scanapp-org/html5-qrcode-react",children:"scanapp-org/html5-qrcode-react"}),"\xa0 on Github for reference.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Built using\xa0",Object(d.jsx)("a",{href:"https://github.com/mebjas/html5-qrcode",children:"mebjas/html5-qrcode"}),".",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Free QR code scanner and barcode scanner at ",Object(d.jsx)("a",{href:"https://scanapp.org",children:"scanapp.org"}),"."]})]})},j=c(10),b="html5qr-code-full-region",u=function(e){return Object(r.useEffect)((function(){var t=function(e){var t={};return e.fps&&(t.fps=e.fps),e.qrbox&&(t.qrbox=e.qrbox),e.aspectRatio&&(t.aspectRatio=e.aspectRatio),void 0!==e.disableFlip&&(t.disableFlip=e.disableFlip),t}(e),c=!0===e.verbose;if(!e.qrCodeSuccessCallback)throw"qrCodeSuccessCallback is required callback.";var r=new j.a(b,t,c);return r.render(e.qrCodeSuccessCallback,e.qrCodeErrorCallback),function(){r.clear().catch((function(e){console.error("Failed to clear html5QrcodeScanner. ",e)}))}}),[]),Object(d.jsx)("div",{id:b})};function h(e){for(var t=[],c=0;c<e.length;++c)0!==c?e[c].decodedText!==e[c-1].decodedText&&t.push(e[c]):t.push(e[c]);return t}var x=function(e){var t=h(e.data);return Object(d.jsxs)("table",{className:"Qrcode-result-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"#"}),Object(d.jsx)("td",{children:"Decoded Text"}),Object(d.jsx)("td",{children:"Format"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e,t){return console.log(e),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t}),Object(d.jsx)("td",{children:e.decodedText}),Object(d.jsx)("td",{children:e.result.format.formatName})]},t)}))})]})},O=function(e){var t=h(e.results);return Object(d.jsxs)("div",{className:"Result-container",children:[Object(d.jsxs)("div",{className:"Result-header",children:["Scanned results (",t.length,")"]}),Object(d.jsx)("div",{className:"Result-section",children:Object(d.jsx)(x,{data:t})})]})},p=function(e){var t=Object(r.useState)([]),c=Object(l.a)(t,2),s=c[0],n=c[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("section",{className:"App-section",children:[Object(d.jsx)("div",{className:"App-section-title",children:" Html5-qrcode React demo"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(u,{fps:10,qrbox:250,disableFlip:!1,qrCodeSuccessCallback:function(e,t){console.log("App [result]",t),n((function(e){return[].concat(Object(o.a)(e),[t])}))}}),Object(d.jsx)(O,{results:s}),Object(d.jsx)(i,{})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),r(e),s(e),n(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),f()}},[[39,1,2]]]);
//# sourceMappingURL=main.def7d06d.chunk.js.map