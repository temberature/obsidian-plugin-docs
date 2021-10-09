"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[704],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78080:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},c="Menu",l={unversionedId:"api/classes/Menu",id:"api/classes/Menu",isDocsHomePage:!1,title:"Menu",description:"Methods",source:"@site/docs/api/classes/Menu.md",sourceDirName:"api/classes",slug:"/api/classes/Menu",permalink:"/obsidian-plugin-docs/api/classes/Menu",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/Menu.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MarkdownView",permalink:"/obsidian-plugin-docs/api/classes/MarkdownView"},next:{title:"MenuItem",permalink:"/obsidian-plugin-docs/api/classes/MenuItem"}},u=[{value:"Methods",id:"methods",children:[{value:"setNoIcon",id:"setnoicon",children:[]},{value:"addItem",id:"additem",children:[]},{value:"addSeparator",id:"addseparator",children:[]},{value:"showAtMouseEvent",id:"showatmouseevent",children:[]},{value:"showAtPosition",id:"showatposition",children:[]},{value:"hide",id:"hide",children:[]},{value:"onHide",id:"onhide",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"menu"},"Menu"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"setnoicon"},"setNoIcon"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"setNoIcon(): this;\n")),(0,a.kt)("h3",{id:"additem"},"addItem"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"addItem(cb: (item: MenuItem) => any): this;\n")),(0,a.kt)("h3",{id:"addseparator"},"addSeparator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"addSeparator(): this;\n")),(0,a.kt)("h3",{id:"showatmouseevent"},"showAtMouseEvent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"showAtMouseEvent(evt: MouseEvent): this;\n")),(0,a.kt)("h3",{id:"showatposition"},"showAtPosition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"showAtPosition(position: Point): this;\n")),(0,a.kt)("h3",{id:"hide"},"hide"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"hide(): this;\n")),(0,a.kt)("h3",{id:"onhide"},"onHide"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"onHide(callback: () => any): void;\n")))}p.isMDXComponent=!0}}]);