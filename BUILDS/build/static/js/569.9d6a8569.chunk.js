"use strict";(self.webpackChunkgrub_hike=self.webpackChunkgrub_hike||[]).push([[569],{8569:function(e,n,a){a.r(n),a.d(n,{default:function(){return d}});var t=a(885),s=a(2791),l=a(1687),r=(a(4569),a(3102)),i=a(3504),u=a(6871),o=a(6053),c=a(184);function d(){var e=(0,s.useState)(""),n=(0,t.Z)(e,2),a=n[0],d=n[1],h=(0,s.useState)(""),p=(0,t.Z)(h,2),g=p[0],m=p[1],j=(0,s.useState)(""),x=(0,t.Z)(j,2),f=x[0],v=x[1],N=(0,s.useState)(""),y=(0,t.Z)(N,2),b=y[0],C=y[1],S=(0,s.useState)(""),Z=(0,t.Z)(S,2),w=Z[0],F=Z[1],k=(0,s.useState)(""),U=(0,t.Z)(k,2),O=U[0],D=U[1],P=(0,s.useState)("male"),A=(0,t.Z)(P,2),E=A[0],L=A[1],M=(0,s.useState)("guest"),T=(0,t.Z)(M,2),W=T[0],Y=T[1],_=(0,s.useState)(null),q=(0,t.Z)(_,2),G=q[0],H=q[1],J=(0,s.useState)(!1),V=(0,t.Z)(J,2),z=V[0],B=V[1],I=(0,u.s0)(),K=function(e){e.preventDefault();var n=new Date(w),t={method:"POST",url:W+"/signup",headers:{"Content-Type":"application/json"}},s={email:f,password:b,firstName:a?a[0].toUpperCase()+a.slice(1):"",lastName:g?g[0].toUpperCase()+g.slice(1):"",phoneNum:O,dob:"".concat(n.getDate(),"-").concat(n.getMonth()+1,"-").concat(n.getFullYear()),gender:E};"host"===W&&Object.assign(s,{userName:f.split("@")[0]}),Object.assign(t,{data:JSON.stringify(s)}),function(e){B(!0),l.Z.defaults.timeout=0,(0,l.Z)(e).then((function(e){console.log(e),H(""),I("/login")})).catch((function(e){var n,a,t;console.log(e),H(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(a=n.data)||void 0===a||null===(t=a.error)||void 0===t?void 0:t.message)})).then((function(){B(!1)}))}(t)};return(0,c.jsxs)("div",{className:"signup",children:[(0,c.jsx)("div",{className:"signup-left"}),(0,c.jsxs)("div",{className:"signup-right",children:[(0,c.jsx)(r.Z,{}),(0,c.jsxs)("form",{onSubmit:function(e){return K(e)},children:[(0,c.jsx)("h3",{children:"Sign Up "}),(0,c.jsx)("h5",{children:"Sign Up to Your Account"}),(0,c.jsx)("p",{className:"quotes",children:"We always welcome new user in our website.We are thankfull for you to sign up here"}),(0,c.jsx)("input",{type:"text",className:"field",value:a,placeholder:"First name here",onChange:function(e){return d(e.target.value)}}),(0,c.jsx)("input",{type:"text",className:"field",value:g,placeholder:"Last name here",onChange:function(e){return m(e.target.value)}}),(0,c.jsx)("input",{type:"email",className:"field",value:f,placeholder:"Email here",onChange:function(e){return v(e.target.value)}}),(0,c.jsx)("input",{type:"password",className:"field",value:b,placeholder:"Password here",onChange:function(e){return C(e.target.value)}}),(0,c.jsx)("input",{type:"date",className:"field",value:w,onChange:function(e){return F(e.target.value)}}),(0,c.jsx)("input",{type:"number",className:"field",value:O,placeholder:"Phone number here",onChange:function(e){return D(e.target.value)}}),(0,c.jsx)("p",{className:"dont",children:"Choose your gender"}),(0,c.jsxs)("div",{className:"radios",children:[(0,c.jsxs)("span",{children:[(0,c.jsx)("input",{type:"radio",checked:"male"===E,value:"male",onChange:function(e){return L(e.target.value)},id:"male",name:"gender"}),(0,c.jsx)("label",{htmlFor:"male",children:"Male"})]}),(0,c.jsxs)("span",{children:[(0,c.jsx)("input",{type:"radio",value:"female",onChange:function(e){return L(e.target.value)},id:"female",name:"gender"}),(0,c.jsx)("label",{htmlFor:"female",children:"Female"})]}),(0,c.jsxs)("span",{children:[(0,c.jsx)("input",{type:"radio",value:"other",onChange:function(e){return L(e.target.value)},id:"other",name:"gender"}),(0,c.jsx)("label",{htmlFor:"other",children:"Other"})]})]}),(0,c.jsx)("p",{className:"dont",children:"Choose your user preference"}),(0,c.jsxs)("div",{className:"radios",children:[(0,c.jsxs)("span",{children:[(0,c.jsx)("label",{htmlFor:"guest",children:"Guest"}),(0,c.jsx)("input",{type:"radio",checked:"guest"===W,value:"guest",onChange:function(e){return Y(e.target.value)},id:"guest",name:"typeUser"})]}),(0,c.jsxs)("span",{children:[(0,c.jsx)("label",{htmlFor:"host",children:"Host"}),(0,c.jsx)("input",{type:"radio",value:"host",onChange:function(e){return Y(e.target.value)},id:"host",name:"typeUser"})]})]}),(0,c.jsx)("button",{type:"submit",className:"field btn",children:"Sign Up"}),(0,c.jsxs)("p",{className:"dont",children:["Already have an account?",(0,c.jsx)(i.rU,{to:"/login",children:" Login "})]}),z?(0,c.jsxs)("span",{className:"spanner",children:["Validating. . . \xa0 ",(0,c.jsx)("img",{src:o,className:"loadSpinner ",alt:"load"})]}):(0,c.jsx)("p",{className:"dont red",children:G?(0,c.jsxs)(c.Fragment,{children:["Error::",G]}):(0,c.jsx)(c.Fragment,{})})]})]})]})}}}]);
//# sourceMappingURL=569.9d6a8569.chunk.js.map