/*! For license information please see login-page.755d8be8.chunk.js.LICENSE.txt */
(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{101:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===i)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},102:function(e,t,a){e.exports={container:"Container_container__WWYm4",title:"Container_title__SaTnr"}},103:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(34);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(u){r=!0,i=u}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},104:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),i=a(102),o=a.n(i),l=function(e){var t=e.title,a=e.children;return r.a.createElement("div",{className:o.a.container},r.a.createElement("h2",{className:o.a.title},t),a)}},108:function(e,t,a){"use strict";var n=a(3),r=a(9),i=a(101),o=a.n(i),l=a(0),u=a.n(l),c=u.a.createContext({});c.Consumer,c.Provider;function s(e,t){var a=Object(l.useContext)(c);return e||a[t]||t}var f=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)};function p(e){return!e||"#"===e.trim()}var d=u.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"a":a,o=e.disabled,l=e.onKeyDown,c=Object(r.a)(e,["as","disabled","onKeyDown"]),s=function(e){var t=c.href,a=c.onClick;(o||p(t))&&e.preventDefault(),o?e.stopPropagation():a&&a(e)};return p(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),o&&(c.tabIndex=-1,c["aria-disabled"]=!0),u.a.createElement(i,Object(n.a)({ref:t},c,{onClick:s,onKeyDown:f((function(e){" "===e.key&&(e.preventDefault(),s(e))}),l)}))}));d.displayName="SafeAnchor";var v=d,b=u.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,l=e.size,c=e.active,f=e.className,p=e.block,d=e.type,b=e.as,m=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=s(a,"btn"),y=o()(f,h,c&&"active",h+"-"+i,p&&h+"-block",l&&h+"-"+l);if(m.href)return u.a.createElement(v,Object(n.a)({},m,{as:b,ref:t,className:o()(y,m.disabled&&"disabled")}));t&&(m.ref=t),d?m.type=d:b||(m.type="button");var _=b||"button";return u.a.createElement(_,Object(n.a)({},m,{className:y}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=b},118:function(e,t,a){e.exports={input:"LoginPage_input__hNN_c",head__field:"LoginPage_head__field__1hlvK",btn:"LoginPage_btn__1_V7H"}},121:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(103),r=a(0),i=a.n(r),o=a(8),l=a(22),u=a(108),c=a(118),s=a.n(c),f=a(104),p=l.a.login;function d(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(""),d=Object(n.a)(c,2),v=d[0],b=d[1],m=Object(o.b)();return i.a.createElement(f.a,{title:"Authorization page"},i.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),m(p({email:a,password:v}),[m,a,v])}},i.a.createElement("label",{className:s.a.label},i.a.createElement("div",{className:s.a.head__field},"E-mail"),i.a.createElement("input",{className:s.a.input,type:"email",name:"email",value:a,onChange:function(e){l(e.target.value)}})),i.a.createElement("label",null,i.a.createElement("div",{className:s.a.head__field},"Pass"),i.a.createElement("input",{className:s.a.input,type:"password",name:"password",value:v,onChange:function(e){b(e.target.value)}})),i.a.createElement(u.a,{type:"submit"},"Enter")))}}}]);
//# sourceMappingURL=login-page.755d8be8.chunk.js.map