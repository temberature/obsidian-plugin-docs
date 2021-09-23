"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[997],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),l=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),u=o,h=p["".concat(m,".").concat(u)]||p[u]||s[u]||r;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5862:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],c={sidebar_position:40},m="Commands",l={unversionedId:"commands",id:"commands",isDocsHomePage:!1,title:"Commands",description:"Commands are actions that the user can perform from the Command Palette or by using a hot key.",source:"@site/docs/commands.md",sourceDirName:".",slug:"/commands",permalink:"/obsidian-plugin-docs/commands",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/commands.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Ribbon actions",permalink:"/obsidian-plugin-docs/ribbon"},next:{title:"Status bar",permalink:"/obsidian-plugin-docs/status-bar"}},d=[{value:"Conditional commands",id:"conditional-commands",children:[]},{value:"Editor commands",id:"editor-commands",children:[]},{value:"Hot keys",id:"hot-keys",children:[]}],s={toc:d};function p(e){var n=e.components,c=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,c,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"commands"},"Commands"),(0,r.kt)("p",null,"Commands are actions that the user can perform from the ",(0,r.kt)("a",{parentName:"p",href:"https://help.obsidian.md/Plugins/Command+palette"},"Command Palette")," or by using a hot key."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Command",src:t(1449).Z})),(0,r.kt)("p",null,"To register a new command for your plugin, call the ",(0,r.kt)("inlineCode",{parentName:"p"},"addCommand()")," method inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"onload()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts" {5-11}',title:'"main.ts"',"{5-11}":!0},'import { Plugin } from "obsidian";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    this.addCommand({\n      id: "print-greeting-to-console",\n      name: "Print greeting to console",\n      callback: () => {\n        console.log("Hey, you!");\n      },\n    });\n  }\n}\n')),(0,r.kt)("h2",{id:"conditional-commands"},"Conditional commands"),(0,r.kt)("p",null,"If your command is only able to run under certain conditions, then consider using ",(0,r.kt)("inlineCode",{parentName:"p"},"checkCallback")," instead."),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkCallback"),", Obsidian first performs a ",(0,r.kt)("em",{parentName:"p"},"check")," to see whether the command can run. To determine whether the callback should perform a check or an action, a ",(0,r.kt)("inlineCode",{parentName:"p"},"checking")," argument is passed to the callback."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"checking")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", perform a check."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"checking")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", perform an action.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4,6-8,11,15}","{4,6-8,11,15}":!0},"this.addCommand({\n  id: 'example-command',\n  name: 'Example command',\n  checkCallback: (checking: boolean) => {\n    if (isCommandPossible()) {\n      if (!checking) {\n        // Perform the command.\n      }\n\n      // Check passed.\n      return true;\n    }\n\n    // Check failed. Hide the command.\n    return false;\n  },\n});\n")),(0,r.kt)("h2",{id:"editor-commands"},"Editor commands"),(0,r.kt)("p",null,"If your command needs access to the editor, you can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"editorCallback"),", which provides the currently active editor and its view as arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"this.addCommand({\n  id: 'example-command',\n  name: 'Example command',\n  editorCallback: (editor: Editor, view: MarkdownView) => {\n    const sel = editor.getSelection()\n\n    console.log(`You have selected: ${sel}`);\n  },\n}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Editor commands only appear in the Command Palette when there's an active editor available."))),(0,r.kt)("p",null,"If the editor callback can only run given under certain conditions, consider using the ",(0,r.kt)("inlineCode",{parentName:"p"},"editorCheckCallback")," instead. For more information, refer to ",(0,r.kt)("a",{parentName:"p",href:"#conditional-commands"},"conditional commands"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"this.addCommand({\n  id: 'example-command',\n  name: 'Example command',\n  editorCheckCallback: (checking: boolean, editor: Editor, view: MarkdownView) => {\n    if (isCommandPossible()) {\n      if (!checking) {\n        // Perform the command.\n      }\n\n      // Check passed.\n      return true;\n    }\n\n    // Check failed. Hide the command.\n    return false;\n  },\n});\n")),(0,r.kt)("h2",{id:"hot-keys"},"Hot keys"),(0,r.kt)("p",null,"The user can run commands using a keyboard shortcut, or ",(0,r.kt)("em",{parentName:"p"},"hot key"),". While they can configure this themselves, you can also provide a default hot key."),(0,r.kt)("p",null,"In this example, the user can run the command by pressing and holding Ctrl and Shift together, and then pressing the letter ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," on their keyboard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"this.addCommand({\n  id: 'example-command',\n  name: 'Example command',\n  hotkeys: [{ modifiers: [\"Ctrl\", \"Shift\"], key: \"a\" }],\n  callback: () => {\n    console.log('Hey, you!');\n  },\n});\n")))}p.isMDXComponent=!0},1449:function(e,n,t){n.Z=t.p+"assets/images/command-1b673de629772795516d64bc5d1cfbf4.png"}}]);