"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[3947],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65997:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={sidebar_position:70},l="Custom views",c={unversionedId:"guides/custom-views",id:"guides/custom-views",isDocsHomePage:!1,title:"Custom views",description:"Views determine how Obsidian displays content. The file explorer, graph view, and the Markdown view are all examples of views, but you can also create your own custom views that display content in a way that makes sense for your plugin.",source:"@site/docs/guides/custom-views.md",sourceDirName:"guides",slug:"/guides/custom-views",permalink:"/obsidian-plugin-docs/guides/custom-views",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/guides/custom-views.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"docs",previous:{title:"Events",permalink:"/obsidian-plugin-docs/guides/events"},next:{title:"HTML elements",permalink:"/obsidian-plugin-docs/guides/html-elements"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-views"},"Custom views"),(0,o.kt)("p",null,"Views determine how Obsidian displays content. The file explorer, graph view, and the Markdown view are all examples of views, but you can also create your own custom views that display content in a way that makes sense for your plugin."),(0,o.kt)("p",null,"To create a custom view, create a class that extends the ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/ItemView"},(0,o.kt)("inlineCode",{parentName:"a"},"ItemView"))," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="view.ts"',title:'"view.ts"'},'import { ItemView, WorkspaceLeaf } from "obsidian";\n\nexport const VIEW_TYPE_EXAMPLE = "example-view";\n\nexport class ExampleView extends ItemView {\n  constructor(leaf: WorkspaceLeaf) {\n    super(leaf);\n  }\n\n  getViewType() {\n    return VIEW_TYPE_EXAMPLE;\n  }\n\n  getDisplayText() {\n    return "Example view";\n  }\n\n  async onOpen() {\n    const container = this.containerEl.children[1];\n    container.empty();\n    container.createEl("h4", { text: "Example view" });\n  }\n\n  async onClose() {\n    // Nothing to clean up.\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information on how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"createEl()")," method, refer to ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/html-elements"},"HTML elements"),"."))),(0,o.kt)("p",null,"Each view is uniquely identified by a text string and several operations require that you specify the view you'd like to use. Extracting it to a constant, ",(0,o.kt)("inlineCode",{parentName:"p"},"VIEW_TYPE_EXAMPLE"),", is a good idea\u2014as you will see later in this guide."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getViewType()")," returns a unique identifier for the view."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getDisplayText()")," returns a human-friendly name for the view."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onOpen()")," is called when the view is opened within a new leaf and is responsible for building the content of your view."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onClose()")," is called when the view should close and is responsible for cleaning up any resources used by the view.")),(0,o.kt)("p",null,"Custom views need to be registered when the plugin is enabled, and cleaned up when the plugin is disabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts" {8-11,19-23}',title:'"main.ts"',"{8-11,19-23}":!0},'import { Plugin } from "obsidian";\nimport { ExampleView, VIEW_TYPE_EXAMPLE } from "./view";\n\nexport default class ExamplePlugin extends Plugin {\n  view: ExampleView;\n\n  async onload() {\n    this.registerView(\n      VIEW_TYPE_EXAMPLE,\n      (leaf) => (this.view = new ExampleView(leaf))\n    );\n\n    this.addRibbonIcon("dice", "Activate view", () => {\n      this.activateView();\n    });\n  }\n\n  async onunload() {\n    await this.view.onClose();\n\n    this.app.workspace\n      .getLeavesOfType(VIEW_TYPE_EXAMPLE)\n      .forEach((leaf) => leaf.detach());\n  }\n\n  async activateView() {\n    this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);\n\n    await this.app.workspace.getRightLeaf(false).setViewState({\n      type: VIEW_TYPE_EXAMPLE,\n      active: true,\n    });\n\n    this.app.workspace.revealLeaf(\n      this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE)[0]\n    );\n  }\n}\n')),(0,o.kt)("p",null,"The second argument to ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Plugin_2#registerview"},(0,o.kt)("inlineCode",{parentName:"a"},"registerView()"))," is a callback that returns an instance of the view you want to register."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"(leaf) => (this.view = new ExampleView(leaf))")," lets you return the view instance ",(0,o.kt)("em",{parentName:"p"},"and")," save the instance so that you can reference it later. Neat! \ud83d\udc4c"))),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"onunload()")," method, to make sure that you clean up the view whenever the plugin is disabled:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Allow the view clean up after itself by calling ",(0,o.kt)("inlineCode",{parentName:"li"},"onClose()"),"."),(0,o.kt)("li",{parentName:"ul"},"Detach all leaves that are using the view.")),(0,o.kt)("p",null,"After you've registered a custom view for the plugin, you should to give the user a way to activate it. The ",(0,o.kt)("inlineCode",{parentName:"p"},"activateView()")," is a convenient method that does three things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Detaches all leaves with the custom view."),(0,o.kt)("li",{parentName:"ul"},"Adds the custom view on the right leaf."),(0,o.kt)("li",{parentName:"ul"},"Reveals the leaf that contains the custom view.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"activateView()")," restricts your plugin to at most one leaf at a time. Try commenting out the call to ",(0,o.kt)("inlineCode",{parentName:"p"},"detachLeavesOfType()")," to allow the user to create more than one leaf. One for every call to ",(0,o.kt)("inlineCode",{parentName:"p"},"activateView()"),"."))),(0,o.kt)("p",null,"How you want the user to activate the custom view is up to you. The example uses a ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/ribbon-actions"},"ribbon action"),", but you can also use a ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/commands"},"command"),"."))}d.isMDXComponent=!0}}]);