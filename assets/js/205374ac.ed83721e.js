"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[6568],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},15121:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={},s="MarkdownPostProcessorContext",d={unversionedId:"api/interfaces/MarkdownPostProcessorContext",id:"api/interfaces/MarkdownPostProcessorContext",isDocsHomePage:!1,title:"MarkdownPostProcessorContext",description:"Properties",source:"@site/docs/api/interfaces/MarkdownPostProcessorContext.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/MarkdownPostProcessorContext",permalink:"/obsidian-plugin-docs/api/interfaces/MarkdownPostProcessorContext",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/interfaces/MarkdownPostProcessorContext.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MarkdownPostProcessor",permalink:"/obsidian-plugin-docs/api/interfaces/MarkdownPostProcessor"},next:{title:"MarkdownPreviewEvents",permalink:"/obsidian-plugin-docs/api/interfaces/MarkdownPreviewEvents"}},l=[{value:"Properties",id:"properties",children:[{value:"docId",id:"docid",children:[]},{value:"sourcePath",id:"sourcepath",children:[]},{value:"frontmatter",id:"frontmatter",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addChild",id:"addchild",children:[]},{value:"getSectionInfo",id:"getsectioninfo",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"markdownpostprocessorcontext"},"MarkdownPostProcessorContext"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"docid"},"docId"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"docId: string\n")),(0,i.kt)("h3",{id:"sourcepath"},"sourcePath"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"sourcePath: string\n")),(0,i.kt)("h3",{id:"frontmatter"},"frontmatter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"frontmatter: any\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"addchild"},"addChild"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"addChild: (child: MarkdownRenderChild) => void\n")),(0,i.kt)("p",null,"Adds a child component that will have its lifecycle managed by the renderer."),(0,i.kt)("p",null,"Use this to add a dependent child to the renderer such that if the containerEl\nof the child is ever removed, the component's unload will be called."),(0,i.kt)("h3",{id:"getsectioninfo"},"getSectionInfo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getSectionInfo: (el: HTMLElement) => MarkdownSectionInformation\n")),(0,i.kt)("p",null,"Gets the section information of this element at this point in time.\nOnly call this function right before you need this information to get the most up-to-date version.\nThis function may also return null in many circumstances; if you use it, you must be prepared to deal with nulls."))}p.isMDXComponent=!0}}]);