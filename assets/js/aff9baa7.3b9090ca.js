"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[347],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57905:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},c="BaseComponent",l={unversionedId:"api/classes/BaseComponent",id:"api/classes/BaseComponent",isDocsHomePage:!1,title:"BaseComponent",description:"Properties",source:"@site/docs/api/classes/BaseComponent.md",sourceDirName:"api/classes",slug:"/api/classes/BaseComponent",permalink:"/obsidian-plugin-docs/api/classes/BaseComponent",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/BaseComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"App",permalink:"/obsidian-plugin-docs/api/classes/App"},next:{title:"ButtonComponent",permalink:"/obsidian-plugin-docs/api/classes/ButtonComponent"}},p=[{value:"Properties",id:"properties",children:[{value:"disabled",id:"disabled",children:[]}]},{value:"Methods",id:"methods",children:[{value:"then",id:"then",children:[]},{value:"setDisabled",id:"setdisabled",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basecomponent"},"BaseComponent"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"disabled"},"disabled"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"disabled: boolean\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"then"},"then"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"then(cb: (component: this) => any): this;\n")),(0,a.kt)("p",null,"Facilitates chaining"),(0,a.kt)("h3",{id:"setdisabled"},"setDisabled"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"setDisabled(disabled: boolean): this;\n")))}d.isMDXComponent=!0}}]);