"use strict";(self.webpackChunkgrub_hike=self.webpackChunkgrub_hike||[]).push([[253],{9253:function(e,s,i){i.r(s),i.d(s,{default:function(){return j}});var l=i(885),n=i(2791),a=i(9434),c=i(4673),t=i(936),d=(0,t.Z)(n.createElement("path",{d:"M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"}),"Restaurant"),r=(0,t.Z)(n.createElement(n.Fragment,null,n.createElement("path",{d:"M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"}),n.createElement("path",{d:"M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"})),"MenuBook"),o=i(5405),h=i(5449),u=i(2279),v=i(2950),m=i(3504),x=i(184);function j(){var e=(0,c.Z)("userDetails"),s=(0,l.Z)(e,1)[0],i=(0,a.v9)((function(e){return e})).kitchen,t=(0,n.useState)(""),j=(0,l.Z)(t,2),g=j[0],f=j[1],N=(0,n.useState)(""),k=(0,l.Z)(N,2),p=k[0],Z=k[1],b=(0,n.useState)(""),S=(0,l.Z)(b,2),V=S[0],z=S[1],H=(0,n.useState)(""),w=(0,l.Z)(H,2),M=w[0],y=w[1],D=(0,n.useState)(""),I=(0,l.Z)(D,2),C=I[0],E=I[1],L=(0,n.useState)(""),K=(0,l.Z)(L,2),R=K[0],T=K[1],U=(0,n.useState)(""),A=(0,l.Z)(U,2),B=A[0],F=A[1],O=(0,n.useState)(""),Y=(0,l.Z)(O,2),_=Y[0],W=Y[1],q=(0,n.useState)(""),G=(0,l.Z)(q,2),J=G[0],P=G[1],Q=(0,n.useState)(""),X=(0,l.Z)(Q,2),$=X[0],ee=X[1],se=(0,n.useState)(""),ie=(0,l.Z)(se,2),le=ie[0],ne=ie[1],ae=function(e,i){var l,n,a={method:"get",headers:{Authorization:"Bearer ".concat(null===s||void 0===s||null===(l=s.userDetails)||void 0===l?void 0:l.token)}};fetch("http://".concat("3.109.234.98",":8000/kitchen/pic/").concat(null===s||void 0===s||null===(n=s.userDetails)||void 0===n?void 0:n.id,"/").concat(e),a).then((function(e){return e.blob()})).then((function(e){var s=(window.URL||window.webkitURL).createObjectURL(e);0===i&&f(s),1===i&&Z(s),2===i&&z(s)}))};return(0,n.useEffect)((function(){var e,s,l,n,a,c,t,d=null===i||void 0===i||null===(e=i.kitchenData)||void 0===e||null===(s=e.newData)||void 0===s?void 0:s[0];y(null===d||void 0===d?void 0:d.kitchenName),E(null===d||void 0===d?void 0:d.desc),W(null===d||void 0===d||null===(l=d.socialHandles)||void 0===l?void 0:l.facebook),P(null===d||void 0===d||null===(n=d.socialHandles)||void 0===n?void 0:n.insta),ee(null===d||void 0===d||null===(a=d.socialHandles)||void 0===a?void 0:a.twitter),ne(null===d||void 0===d?void 0:d.type),T(null===d||void 0===d||null===(c=d.mealTime)||void 0===c?void 0:c.lunch),F(null===d||void 0===d||null===(t=d.mealTime)||void 0===t?void 0:t.dinner);for(var r=null===d||void 0===d?void 0:d.picsInfo,o=0;o<(null===r||void 0===r?void 0:r.length);o++){var h;ae(null===r||void 0===r||null===(h=r[o])||void 0===h?void 0:h.fileKey,o)}}),[i]),(0,x.jsxs)("div",{className:"viewKitchen",children:[(0,x.jsxs)("h2",{children:["Your Kitchen is ",(0,x.jsx)("span",{className:"highLight",children:"Successfully"}),",Created"]}),(0,x.jsx)("p",{style:{fontWeight:"lighter"},children:"Your kitchen is successfully created"}),(0,x.jsxs)("div",{className:"imagesCorner",children:[(0,x.jsx)("div",{className:"topImg",style:{backgroundImage:"url(".concat(V||"",")")},children:(0,x.jsxs)("div",{className:"detailskit",children:[(0,x.jsxs)("h1",{className:"about",children:[(0,x.jsx)(d,{})," About Our Beautiful Kitchen... "]}),(0,x.jsx)("p",{className:"aboutDesc",children:C}),(0,x.jsxs)(m.rU,{to:"/addMenus",children:["Create Your Menus ",(0,x.jsx)(r,{})]})]})}),(0,x.jsxs)("div",{className:"btmImgs",children:[(0,x.jsx)("div",{className:"leftImg",style:{backgroundImage:"url(".concat(g||"",")")}}),(0,x.jsx)("div",{className:"rightImg",style:{backgroundImage:"url(".concat(p||"",")")}})]})]}),(0,x.jsxs)("div",{className:"extraDetails",children:[(0,x.jsxs)("div",{className:"detailsSocials",children:[(0,x.jsx)("h2",{className:"kit-name",children:M}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)("a",{href:_,children:(0,x.jsx)(o.Z,{})})}),(0,x.jsx)("li",{children:(0,x.jsx)("a",{href:J,children:(0,x.jsx)(h.Z,{})})}),(0,x.jsx)("li",{children:(0,x.jsx)("a",{href:$,children:(0,x.jsx)(u.Z,{})})}),(0,x.jsx)("li",{children:(0,x.jsx)("a",{href:"",children:(0,x.jsx)(v.Z,{})})})]})]}),(0,x.jsxs)("div",{className:"tims",children:[(0,x.jsxs)("div",{className:"d1",children:[(0,x.jsx)("span",{className:"dx",children:" Available Food Type"}),(0,x.jsx)("p",{children:"Veg"===le?"Vegetarian":"Non-Vegetarian"})]}),(0,x.jsxs)("div",{className:"d2",children:[(0,x.jsx)("span",{className:"dx",children:"Timming Of Food"}),(0,x.jsxs)("p",{className:"dm",children:[(0,x.jsx)("strong",{className:"highlight",children:"Lunch_ -"})," \xa0\xa0",R]}),(0,x.jsxs)("p",{className:"dm",children:[(0,x.jsx)("strong",{className:"highlight",children:"Dinner -"})," \xa0\xa0",B]})]})]})]})]})}},2950:function(e,s,i){var l=i(2791),n=i(936);s.Z=(0,n.Z)(l.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link")}}]);
//# sourceMappingURL=253.e8c48577.chunk.js.map