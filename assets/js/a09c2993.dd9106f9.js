"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[4128],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88495:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],s={slug:"/",sidebar_label:"Introduction",sidebar_position:1},l="Obsidian Plugin Developer Docs",u={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Obsidian Plugin Developer Docs",description:"This site is the unofficial developer docs for Obsidian plugins. It's being maintained by @marcusolsson, with the help of the Obsidian community.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/obsidian-plugin-docs/",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_label:"Introduction",sidebar_position:1},sidebar:"docs",next:{title:"Create your first plugin",permalink:"/obsidian-plugin-docs/getting-started/create-your-first-plugin"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"obsidian-plugin-developer-docs"},"Obsidian Plugin Developer Docs"),(0,o.kt)("p",null,"This site is the ",(0,o.kt)("strong",{parentName:"p"},"unofficial")," developer docs for Obsidian plugins. It's being maintained by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/marcusolsson"},"@marcusolsson"),", with the help of the Obsidian community."),(0,o.kt)("p",null,"If this site has been useful to you, you can buy the maintainer a coffee to support its continued development:"),(0,o.kt)("a",{href:"https://buymeacoffee.com/marcusolsson"},(0,o.kt)("img",{src:"/obsidian-plugin-docs/img/default-violet.webp",width:"200"})),(0,o.kt)("p",null,"If this site doesn't help you, maybe one of these resources might:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Official resources by the Obsidian team:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/obsidianmd/obsidian-sample-plugin"},"Obsidian Sample Plugin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/obsidianmd/obsidian-api"},"Obsidian API"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Unofficial resources by community members:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://forum.obsidian.md/t/plugins-mini-faq/7737"},"Plugins mini FAQ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=XaES2G3PVpg"},"How to create a plugin for Obsidian")," by ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/phibr0"},"@phibr0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=9lA-jaMNS0k"},"Create Your Own Obsidian Plugin")," by ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/channel/UC9w43btR2UUsfR6ZUf3AlqQ"},"Antone Heyward")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://liamca.in/Obsidian/API+FAQ/index"},"Unofficial API FAQ")," by ",(0,o.kt)("a",{parentName:"li",href:"https://liamca.in"},"Liam Cain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/obsidian-tools/obsidian-tools"},"Obsidian Tools"))))}m.isMDXComponent=!0}}]);