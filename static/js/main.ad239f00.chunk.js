(this["webpackJsonpprocessing-java-editor"]=this["webpackJsonpprocessing-java-editor"]||[]).push([[0],{27:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(7),s=n.n(c),o=(n(27),n(2)),i=function(e){Object(r.useEffect)((function(){var t=document.createElement("script");t.src=e,document.body.appendChild(t)}),[e])};var l=function(e){var t=Object(r.useState)(localStorage.getItem("theme")||e),n=Object(o.a)(t,2),a=n[0],c=n[1],s="dark"===a?"light":"dark";return Object(r.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(s),e.classList.add(a),localStorage.setItem("theme",a)}),[s,a]),[a,c,function(){c((function(e){return"dark"===e?"light":"dark"}))}]},d=n(17),u=n(18),j=n(22),b=n(21),f=n(12),h=n(3),g=Object(r.createContext)({}),m=Object(r.createContext)(),O=n(19),v=n.n(O),x=(n(35),n(36),n(37),n(38),n(39),n(40),n(41),n(42),n(43),n(0)),p=Object(r.forwardRef)((function(e,t){e.children;var n=Object(r.useContext)(g),a=Object(o.a)(n,2),c=a[0],s=a[1],i=Object(r.useContext)(m),l=Object(o.a)(i,1)[0];return Object(r.useEffect)((function(){s((function(e){return"light"===l?Object(h.a)(Object(h.a)({},e),{},{theme:"iplastic"}):Object(h.a)(Object(h.a)({},e),{},{theme:"dracula"})}))}),[l,s]),Object(x.jsxs)("div",{className:"flex flex-col justify-start w-full mb-5 md:m-0 h-85vh md:w-1/2",children:[Object(x.jsx)("p",{className:"text mb-2",children:" Your Sketch "}),Object(x.jsx)(v.a,{width:"100%",height:"100%",name:"editor",ref:t,mode:c.mode,theme:c.theme,fontSize:c.fontSize,keyboardHandler:c.keyboardHandler,defaultValue:c.defaultValue,editorProps:{$blockScrolling:!0},setOptions:{highlightActiveLine:!1,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0}})]})})),y=Object(r.forwardRef)((function(e,t){return Object(x.jsxs)("div",{id:"editorCanvasContainer",className:"w-full md:w-5/12 overflow-x-scroll",children:[Object(x.jsx)("p",{className:"text mb-2",children:" Preview "}),Object(x.jsx)("canvas",{id:"editorCanvas",className:"transition duration-500 dark:bg-gray-900",ref:t})]})}));var k=function(e,t){return{editorRef:e,canvasRef:t,runCode:function(){this.resetInstance();try{var e=this.editorRef.current.editor.getValue(),t=this.canvasRef.current;/size\(\s*\d+\s*,\s*\d+\s*\)/.test(e)||(e="size(500,400);\n\n"+e),this.processingInstance=new window.Processing(t,e),"function"===typeof this.processingInstance.draw&&this.processingInstance.draw()}catch(n){this.displayError(n)}},resetInstance:function(){this.processingInstance&&(this.processingInstance.exit(),this.processingInstance.background("#cfcfcf"),this.processingInstance=null),this.canvasRef.current.width=0,this.canvasRef.current.height=0},displayError:function(e){var t,n,r,a=e.message,c=[[/Can't find variable: (\w+)/,"I'm not sure what '$1' means. Maybe it's a typo?"],[/(Une|E)xpected token '(\)|\()'/,"Looks like your parentheses don't match up. Remember, you need a right parenthesis for every left parenthesis."]];for(t=0;t<c.length;t+=1)if(n=c[t][0],r=c[t][1],n.test(a)){a=a.replace(n,r);break}alert(a)}}};var w=function(e){return Object(x.jsx)("button",{onClick:e.onClick,className:"buttonBase ".concat(e.className),value:e.value,disabled:e.disabled,children:e.children})},C=n(5);var N=function(e){var t=e.children,n=e.isOpen,r=e.toggleModal;return n?Object(c.createPortal)(Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"modalOverlay",onClick:r}),Object(x.jsx)("div",{className:"modal",children:t})]}),document.getElementById("modal")):null};var S=function(){var e=Object(r.useContext)(m),t=Object(o.a)(e,3),n=t[0],a=t[2],c="w-3 h-3 stroke-gray-800 fill-gray-800 group-hover:stroke-gray-200 group-hover:fill-gray-200",s="w-3 h-3 stroke-gray-200 fill-gray-200";return Object(x.jsxs)("div",{className:"flex flex-row justify-between w-24 pb-3",children:[Object(x.jsx)(w,{onClick:function(){"light"!==n&&a()},className:"light"===n?"invertedControlButton group":"standardControlButton group",children:Object(x.jsx)(C.g,{className:"light"===n?s:c})}),Object(x.jsx)(w,{onClick:function(){"dark"!==n&&a()},className:"dark"===n?"invertedControlButton group":"standardControlButton group",children:Object(x.jsx)(C.c,{className:"dark"===n?s:c})})]})};var I=function(){var e,t=Object(r.useContext)(g),n=Object(o.a)(t,2),a=n[0],c=n[1];function s(e){c((function(t){return Object(h.a)(Object(h.a)({},t),{},{fontSize:e})})),localStorage.setItem("fontSize",e)}return Object(x.jsxs)("div",{className:"flex flex-row justify-between items-center w-4/12 pb-3",children:[Object(x.jsx)(w,{className:"standardControlButton group",onClick:function(){s(a.fontSize-2)},disabled:a.fontSize<=8,children:Object(x.jsx)(C.b,{className:"w-3 h-3 stroke-gray-800 fill-gray-800 group-hover:stroke-gray-200 group-hover:fill-gray-200"})}),Object(x.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=parseInt(a.fontSize,10);Number.isNaN(t)&&(t=16),t>36&&(t=36),t<8&&(t=8),s(t)},children:Object(x.jsx)("input",{className:"text-center w-8 h-8 rounded",value:a.fontSize,onChange:function(e){(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&(c((function(t){return Object(h.a)(Object(h.a)({},t),{},{fontSize:e.target.value})})),localStorage.setItem("fontSize",e.target.value))},type:"text",ref:function(t){e=t},onClick:function(){e.select()}})}),Object(x.jsx)(w,{className:"standardControlButton group",onClick:function(){s(a.fontSize+2)},disabled:a.fontSize>=36,children:Object(x.jsx)(C.e,{className:"w-3 h-3 stroke-gray-800 fill-gray-800 group-hover:stroke-gray-200 group-hover:fill-gray-200"})})]})};var B=function(){var e=Object(r.useContext)(g),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(x.jsxs)("select",{className:"text-center rounded",value:n.keyboardHandler,onChange:function(e){a((function(t){return Object(h.a)(Object(h.a)({},t),{},{keyboardHandler:e.target.value})})),localStorage.setItem("keyboardHandler",e.target.value)},children:[Object(x.jsx)("option",{value:"vscode",children:"VSCode (recommended)"}),Object(x.jsx)("option",{value:"sublime",children:"Sublime"}),Object(x.jsx)("option",{value:"vim",children:"Vim"}),Object(x.jsx)("option",{value:"emacs",children:"Emacs"})]})};var z=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];function c(){a((function(e){return!e}))}return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(w,{className:"standardControlButton group",onClick:c,children:Object(x.jsx)(C.a,{className:"w-4 h-4 stroke-gray-800 fill-gray-800 group-hover:stroke-gray-200 group-hover:fill-gray-200"})}),Object(x.jsxs)(N,{isOpen:n,toggleModal:c,children:[Object(x.jsx)("h1",{className:"settingsTitle",children:"Settings"}),Object(x.jsxs)("div",{className:"overflow-y-scroll",children:[Object(x.jsxs)("div",{className:"border-bottom-dashed py-2 mb-2",children:[Object(x.jsx)("h3",{className:"preferencesTitle",children:"Theme"}),Object(x.jsx)(S,{})]}),Object(x.jsxs)("div",{className:"border-bottom-dashed py-2 mb-2",children:[Object(x.jsx)("h3",{className:"preferencesTitle",children:"Text Size"}),Object(x.jsx)(I,{})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{className:"preferencesTitle",children:"Text Editor"}),Object(x.jsx)(B,{})]})]})]})]})};var R=function(e){var t=e.editorControls;return Object(x.jsx)("div",{className:"editorControlBar border-bottom-dashed flex justify-center py-3",children:Object(x.jsxs)("div",{className:"w-11/12 flex justify-between",children:[Object(x.jsxs)("div",{className:"w-24 inline-flex justify-between",children:[Object(x.jsx)(w,{onClick:function(){return t.runCode()},className:"standardControlButton group",children:Object(x.jsx)(C.d,{className:"w-4 h-4 stroke-gray-800 fill-gray-800 group-hover:stroke-gray-200 group-hover:fill-gray-200"})}),Object(x.jsx)(w,{onClick:function(){return t.resetInstance()},className:"invertedControlButton",children:Object(x.jsx)(C.f,{className:"w-4 h-4 stroke-gray-200 fill-gray-200"})})]}),Object(x.jsx)(z,{})]})})},E=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).editorRef=Object(f.createRef)(),r.canvasRef=Object(f.createRef)(),r.editorControls=k(r.editorRef,r.canvasRef),r}return Object(u.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"absolute top-0 left-0 right-0 max-w-full min-h-full transition duration-500 dark:bg-gray-900 ",children:[Object(x.jsx)(R,{editorControls:this.editorControls}),Object(x.jsx)("div",{className:"pt-2 flex flex-row justify-center pb-5",children:Object(x.jsxs)("div",{className:"flex flex-col w-11/12 md:flex-row justify-between items-start",children:[Object(x.jsx)(p,{ref:this.editorRef}),Object(x.jsx)(y,{ref:this.canvasRef})]})})]})}}]),n}(a.a.Component),M=n(20),T=n.n(M);var F=function(e){var t=e.loading,n=Object(r.useContext)(m),a={color:"light"===Object(o.a)(n,1)[0]?"#1E40AF":"#BFDBFE",loading:t,size:20,margin:5};return Object(x.jsx)("div",{className:"flex flex-row justify-center items-center fixed z-10 inset-0 dark:bg-gray-900",children:Object(x.jsx)(T.a,Object(h.a)({},a))})};var P=function(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)({mode:"java",theme:"iplastic",defaultValue:"float angle = PI/4;\nfloat len = 140;\n\nvoid setup() {\n  size(400, 400);\n}\n\nvoid draw() {\n  background(17, 24, 39);\n\n  pushMatrix();\n  translate(width/2, height);\n  stroke(255);\n  drawBranch(len, angle);\n  popMatrix();\n\n  angle += 0.04;\n\n}\n\nvoid drawBranch(float len, float angle) {\n  line(0, 0, 0, -len);\n\n  if (len > 2) {\n    translate(0, -len);\n    pushMatrix();\n    rotate(angle);\n    drawBranch(len * 0.6, angle);\n    popMatrix();\n\n    pushMatrix();\n    rotate(-angle);\n    drawBranch(len * 0.6, angle);\n    popMatrix();\n  }\n}",fontSize:Number(localStorage.getItem("fontSize"))||16,keyboardHandler:localStorage.getItem("keyboardHandler")||"vscode"}),s=l("light");return i("/processing/processing.js"),Object(r.useEffect)((function(){setTimeout((function(){a(!1)}),1e3)}),[]),Object(x.jsx)(g.Provider,{value:c,children:Object(x.jsx)(m.Provider,{value:s,children:Object(x.jsx)("div",{className:"App ",children:n?Object(x.jsx)(F,{loading:n}):Object(x.jsx)(E,{})})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(P,{})}),document.getElementById("root")),H()}},[[52,1,2]]]);
//# sourceMappingURL=main.ad239f00.chunk.js.map