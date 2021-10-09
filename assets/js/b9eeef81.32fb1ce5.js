"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[5561],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99702:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},s="AbstractTextComponent",c={unversionedId:"api/classes/AbstractTextComponent",id:"api/classes/AbstractTextComponent",isDocsHomePage:!1,title:"AbstractTextComponent",description:"Properties",source:"@site/docs/api/classes/AbstractTextComponent.md",sourceDirName:"api/classes",slug:"/api/classes/AbstractTextComponent",permalink:"/obsidian-plugin-docs/api/classes/AbstractTextComponent",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/AbstractTextComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/obsidian-plugin-docs/api/overview"},next:{title:"App",permalink:"/obsidian-plugin-docs/api/classes/App"}},p=[{value:"Properties",id:"properties",children:[{value:"inputEl",id:"inputel",children:[]}]},{value:"Methods",id:"methods",children:[{value:"setDisabled",id:"setdisabled",children:[]},{value:"getValue",id:"getvalue",children:[]},{value:"setValue",id:"setvalue",children:[]},{value:"setPlaceholder",id:"setplaceholder",children:[]},{value:"onChanged",id:"onchanged",children:[]},{value:"onChange",id:"onchange",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"abstracttextcomponent"},"AbstractTextComponent"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"inputel"},"inputEl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"inputEl: T\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"setdisabled"},"setDisabled"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"setDisabled(disabled: boolean): this;\n")),(0,o.kt)("h3",{id:"getvalue"},"getValue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"getValue(): string;\n")),(0,o.kt)("h3",{id:"setvalue"},"setValue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"setValue(value: string): this;\n")),(0,o.kt)("h3",{id:"setplaceholder"},"setPlaceholder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"setPlaceholder(placeholder: string): this;\n")),(0,o.kt)("h3",{id:"onchanged"},"onChanged"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"onChanged(): void;\n")),(0,o.kt)("h3",{id:"onchange"},"onChange"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"onChange(callback: (value: string) => any): this;\n")))}d.isMDXComponent=!0}}]);