"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[641],{3022:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return r},toc:function(){return d},default:function(){return c}});var i=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],s={sidebar_position:2},u="Anatomy of a plugin",r={unversionedId:"plugin-anatomy",id:"plugin-anatomy",isDocsHomePage:!1,title:"Anatomy of a plugin",description:"The Plugin interface defines the lifecycle of a plugin and exposes the operations available to all plugins:",source:"@site/docs/plugin-anatomy.md",sourceDirName:".",slug:"/plugin-anatomy",permalink:"/obsidian-plugin-docs/plugin-anatomy",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/website/docs/plugin-anatomy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/obsidian-plugin-docs/getting-started"},next:{title:"Commands",permalink:"/obsidian-plugin-docs/commands"}},d=[{value:"Plugin lifecycle",id:"plugin-lifecycle",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],p={toc:d};function c(n){var e=n.components,t=(0,a.Z)(n,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"anatomy-of-a-plugin"},"Anatomy of a plugin"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Plugin")," interface defines the lifecycle of a plugin and exposes the operations available to all plugins:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{1,3} title="main.ts"',"{1,3}":!0,title:'"main.ts"'},'import { Plugin } from "obsidian";\n\nexport default class MyPlugin extends Plugin {\n  async onload() {\n    // Configure resources needed by the plugin.\n  }\n  async onunload() {\n    // Release any resources configured by the plugin.\n  }\n}\n')),(0,o.kt)("h2",{id:"plugin-lifecycle"},"Plugin lifecycle"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"onload")," runs whenever Obsidian the user starts using the plugin. This is where you'll configure most of the plugin's capabilities."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"onunload")," runs when the plugin is disabled. Any resources that your plugin is using must be released here to avoid affecting the performance of Obsidian after your plugin has been disabled."),(0,o.kt)("p",null,"To better understand when these methods are called, you can print a message to the console whenever the plugin loads and unloads."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{5,8} title="main.ts"',"{5,8}":!0,title:'"main.ts"'},"import { Plugin } from \"obsidian\";\n\nexport default class MyPlugin extends Plugin {\n  async onload() {\n    console.log('loading plugin')\n  }\n  async onunload() {\n    console.log('unloading plugin')\n  }\n}\n")),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("a",{parentName:"li",href:"/obsidian-plugin-docs/commands"},"commands")," to let your users perform actions from the Command Palette")))}c.isMDXComponent=!0}}]);