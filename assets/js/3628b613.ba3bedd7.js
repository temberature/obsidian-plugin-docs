"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[5499],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9674:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={},u="renderMath",s={unversionedId:"api/functions/renderMath",id:"api/functions/renderMath",isDocsHomePage:!1,title:"renderMath",description:"`ts",source:"@site/docs/api/functions/renderMath.md",sourceDirName:"api/functions",slug:"/api/functions/renderMath",permalink:"/obsidian-plugin-docs/api/functions/renderMath",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/functions/renderMath.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"renderMatches",permalink:"/obsidian-plugin-docs/api/functions/renderMatches"},next:{title:"renderResults",permalink:"/obsidian-plugin-docs/api/functions/renderResults"}},l=[],p={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rendermath"},"renderMath"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export function renderMath(source: string, display: boolean): HTMLElement;\n")),(0,i.kt)("p",null,"Render some LaTeX math using the MathJax engine. Returns an HTMLElement.\nRequires calling ",(0,i.kt)("inlineCode",{parentName:"p"},"finishRenderMath")," when rendering is all done to flush the MathJax stylesheet."))}d.isMDXComponent=!0}}]);