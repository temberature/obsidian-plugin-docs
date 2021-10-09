"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[6213],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27810:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={sidebar_position:77},l="React",p={unversionedId:"guides/react",id:"guides/react",isDocsHomePage:!1,title:"React",description:"In this guide, you'll configure your plugin to use React. It assumes that you already have a plugin with a custom view that you want to convert to use React.",source:"@site/docs/guides/react.md",sourceDirName:"guides",slug:"/guides/react",permalink:"/obsidian-plugin-docs/guides/react",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/guides/react.md",tags:[],version:"current",sidebarPosition:77,frontMatter:{sidebar_position:77},sidebar:"docs",previous:{title:"HTML elements",permalink:"/obsidian-plugin-docs/guides/html-elements"},next:{title:"Editor",permalink:"/obsidian-plugin-docs/guides/editor"}},s=[{value:"Configure your plugin",id:"configure-your-plugin",children:[]},{value:"Create a React component",id:"create-a-react-component",children:[]},{value:"Mount the React component",id:"mount-the-react-component",children:[]}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react"},"React"),(0,o.kt)("p",null,"In this guide, you'll configure your plugin to use ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),". It assumes that you already have a plugin with a ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/custom-views"},"custom view")," that you want to convert to use React."),(0,o.kt)("h2",{id:"configure-your-plugin"},"Configure your plugin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add React to your plugin dependencies:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react react-dom\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add type definitions for React:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @types/react @types/react-dom\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", enable JSX support on the ",(0,o.kt)("inlineCode",{parentName:"p"},"compilerOptions")," object:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "compilerOptions": {\n    "jsx": "react"\n  }\n}\n')))),(0,o.kt)("h2",{id:"create-a-react-component"},"Create a React component"),(0,o.kt)("p",null,"Create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactView.tsx")," in the plugin root directory, with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ReactView.tsx"',title:'"ReactView.tsx"'},'import * as React from "react";\n\nexport const ReactView = () => {\n  return <h4>Hello, React!</h4>;\n};\n')),(0,o.kt)("h2",{id:"mount-the-react-component"},"Mount the React component"),(0,o.kt)("p",null,"To use the React component, it needs to be mounted on a ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/html-elements"},"HTML element"),". The following example mounts the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactView")," component on the ",(0,o.kt)("inlineCode",{parentName:"p"},"this.containerEl.children[1]")," element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="view.ts" {2-4,22-25,29}',title:'"view.ts"',"{2-4,22-25,29}":!0},'import { ItemView, WorkspaceLeaf } from "obsidian";\nimport * as React from "react";\nimport * as ReactDOM from "react-dom";\nimport { ReactView } from "./ReactView";\n\nconst VIEW_TYPE_EXAMPLE = "example-view";\n\nclass ExampleView extends ItemView {\n  constructor(leaf: WorkspaceLeaf) {\n    super(leaf);\n  }\n\n  getViewType() {\n    return VIEW_TYPE_EXAMPLE;\n  }\n\n  getDisplayText() {\n    return "Example view";\n  }\n\n  async onOpen() {\n    ReactDOM.render(\n      React.createElement(ReactView),\n      this.containerEl.children[1]\n    );\n  }\n\n  async onClose() {\n    ReactDOM.unmountComponentAtNode(this.containerEl.children[1]);\n  }\n}\n')),(0,o.kt)("p",null,"For more information on ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.render()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.unmountComponentAtNode()"),", refer to the documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html"},"ReactDOM"),"."),(0,o.kt)("p",null,"You can mount your React component on any ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement"),", for example ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/status-bar"},"status bar items"),". Just make sure to clean up properly by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.unmountComponentAtNode()")," when you're done."))}m.isMDXComponent=!0}}]);