"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[9473],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31075:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={},s="EditorTransaction",l={unversionedId:"api/interfaces/EditorTransaction",id:"api/interfaces/EditorTransaction",isDocsHomePage:!1,title:"EditorTransaction",description:"Properties",source:"@site/docs/api/interfaces/EditorTransaction.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/EditorTransaction",permalink:"/obsidian-plugin-docs/api/interfaces/EditorTransaction",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/interfaces/EditorTransaction.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"EditorSuggestTriggerInfo",permalink:"/obsidian-plugin-docs/api/interfaces/EditorSuggestTriggerInfo"},next:{title:"EmbedCache",permalink:"/obsidian-plugin-docs/api/interfaces/EmbedCache"}},p=[{value:"Properties",id:"properties",children:[{value:"replaceSelection",id:"replaceselection",children:[]},{value:"changes",id:"changes",children:[]},{value:"selections",id:"selections",children:[]},{value:"selection",id:"selection",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"editortransaction"},"EditorTransaction"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"replaceselection"},"replaceSelection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"replaceSelection: string\n")),(0,o.kt)("h3",{id:"changes"},"changes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"changes: EditorChange[]\n")),(0,o.kt)("h3",{id:"selections"},"selections"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"selections: EditorRangeOrCaret[]\n")),(0,o.kt)("p",null,"Multiple selections, overrides ",(0,o.kt)("inlineCode",{parentName:"p"},"selection"),"."),(0,o.kt)("h3",{id:"selection"},"selection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"selection: EditorRangeOrCaret\n")))}d.isMDXComponent=!0}}]);