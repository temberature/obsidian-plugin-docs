"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[5447],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(u,".").concat(p)]||d[p]||g[p]||s;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7887:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],a={},u="FuzzySuggestModal",c={unversionedId:"api/classes/FuzzySuggestModal",id:"api/classes/FuzzySuggestModal",isDocsHomePage:!1,title:"FuzzySuggestModal",description:"Methods",source:"@site/docs/api/classes/FuzzySuggestModal.md",sourceDirName:"api/classes",slug:"/api/classes/FuzzySuggestModal",permalink:"/obsidian-plugin-docs/api/classes/FuzzySuggestModal",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/FuzzySuggestModal.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"FileView",permalink:"/obsidian-plugin-docs/api/classes/FileView"},next:{title:"HoverPopover",permalink:"/obsidian-plugin-docs/api/classes/HoverPopover"}},l=[{value:"Methods",id:"methods",children:[{value:"getSuggestions",id:"getsuggestions",children:[]},{value:"renderSuggestion",id:"rendersuggestion",children:[]},{value:"onChooseSuggestion",id:"onchoosesuggestion",children:[]},{value:"getItems",id:"getitems",children:[]},{value:"getItemText",id:"getitemtext",children:[]},{value:"onChooseItem",id:"onchooseitem",children:[]}]}],g={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"fuzzysuggestmodal"},"FuzzySuggestModal"),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"getsuggestions"},"getSuggestions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"getSuggestions(query: string): FuzzyMatch<T>[];\n")),(0,s.kt)("h3",{id:"rendersuggestion"},"renderSuggestion"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"renderSuggestion(item: FuzzyMatch<T>, el: HTMLElement): void;\n")),(0,s.kt)("p",null,"Render the suggestion item into DOM."),(0,s.kt)("h3",{id:"onchoosesuggestion"},"onChooseSuggestion"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"onChooseSuggestion(item: FuzzyMatch<T>, evt: MouseEvent | KeyboardEvent): void;\n")),(0,s.kt)("h3",{id:"getitems"},"getItems"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"abstract getItems(): T[];\n")),(0,s.kt)("h3",{id:"getitemtext"},"getItemText"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"abstract getItemText(item: T): string;\n")),(0,s.kt)("h3",{id:"onchooseitem"},"onChooseItem"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"abstract onChooseItem(item: T, evt: MouseEvent | KeyboardEvent): void;\n")))}d.isMDXComponent=!0}}]);