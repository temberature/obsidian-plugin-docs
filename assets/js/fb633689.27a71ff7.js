(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[4717],{57174:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),s=t(93456),r=["components"],l={},p="Workspace",c={unversionedId:"concepts/workspace",id:"concepts/workspace",isDocsHomePage:!1,title:"Workspace",description:"Obsidian lets you configure what content is visible to you at any given time. Hide the file explorer when you don't need it, display multiple documents side by side, or show an outline of your document while you're working on it. The configuration of visible content within your application window is known as the workspace.",source:"@site/docs/concepts/workspace.md",sourceDirName:"concepts",slug:"/concepts/workspace",permalink:"/obsidian-plugin-docs/concepts/workspace",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/concepts/workspace.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Vault",permalink:"/obsidian-plugin-docs/concepts/vault"},next:{title:"Ribbon actions",permalink:"/obsidian-plugin-docs/guides/ribbon-actions"}},d=[{value:"Access the workspace from your plugin",id:"access-the-workspace-from-your-plugin",children:[]},{value:"Create and detach leaves",id:"create-and-detach-leaves",children:[]},{value:"Leaf groups",id:"leaf-groups",children:[]}],u={toc:d};function h(e){var a=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"workspace"},"Workspace"),(0,i.kt)("p",null,"Obsidian lets you configure what content is visible to you at any given time. Hide the file explorer when you don't need it, display multiple documents side by side, or show an outline of your document while you're working on it. The configuration of visible content within your application window is known as the ",(0,i.kt)("em",{parentName:"p"},"workspace"),"."),(0,i.kt)("p",null,"The workspace is implemented as a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tree_(data_structure)"},"tree data structure")," that consists of ",(0,i.kt)("em",{parentName:"p"},"group nodes")," and ",(0,i.kt)("em",{parentName:"p"},"leaf nodes"),". The main difference is that group nodes can contain any number of child nodes, including other group nodes, while leaf nodes can't contain any nodes at all."),(0,i.kt)("p",null,"There are two types of group nodes, ",(0,i.kt)("em",{parentName:"p"},"splits")," and ",(0,i.kt)("em",{parentName:"p"},"tabs"),", which determine how the children are presented to the user:"),(0,i.kt)(s.Mermaid,{chart:"flowchart TD\n    split{Split}\n    split --\x3e A((Leaf))\n    split --\x3e B((Leaf))\n    split --\x3e C((Leaf))\n\n    tabs{Tabs}\n    tabs --\x3e X((Leaf))\n    tabs --\x3e Y((Leaf))\n    tabs --\x3e Z((Leaf))",mdxType:"Mermaid"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A split node lays out its child nodes one after another along a vertical or horizontal direction."),(0,i.kt)("li",{parentName:"ul"},"A tabs node only displays one child node at a time and hides the others.")),(0,i.kt)("p",null,"The workspace has three special split nodes under it: ",(0,i.kt)("em",{parentName:"p"},"left"),", ",(0,i.kt)("em",{parentName:"p"},"right"),", and ",(0,i.kt)("em",{parentName:"p"},"root"),". The following diagram shows a example of what a more complex workspace could look like:"),(0,i.kt)(s.Mermaid,{chart:"flowchart TD\n    Workspace --\x3e Left{Left split}\n    Workspace --\x3e Root{Root split}\n    Workspace --\x3e Right{Right split}\n\n    Left --\x3e leftTabs{Tabs}\n    leftTabs --\x3e A((Leaf))\n    leftTabs --\x3e B((Leaf))\n\n    Root --\x3e C{Split}\n    Root --\x3e D((Leaf))\n\n    C --\x3e E((Leaf))\n    C --\x3e F((Leaf))\n\n    Right --\x3e rightTabs{Tabs}\n\n    rightTabs --\x3e I((Leaf))\n    rightTabs --\x3e J((Leaf))\n    rightTabs --\x3e K((Leaf))",mdxType:"Mermaid"}),(0,i.kt)("p",null,"A leaf is a window that can display content in different ways. The type of leaf determines how content is displayed, and correspond to a specific ",(0,i.kt)("em",{parentName:"p"},"view"),". For example, a leaf of type ",(0,i.kt)("inlineCode",{parentName:"p"},"graph")," displays the ",(0,i.kt)("a",{parentName:"p",href:"https://help.obsidian.md/Plugins/Graph+view"},"graph view"),"."),(0,i.kt)("h2",{id:"access-the-workspace-from-your-plugin"},"Access the workspace from your plugin"),(0,i.kt)("p",null,"You can access the workspace through the ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/App"},"App")," object. The following example prints the type of every leaf in the workspace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts" {6-8}',title:'"main.ts"',"{6-8}":!0},'import { Plugin } from "obsidian";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    this.addRibbonIcon("dice", "Print leaf types", () => {\n      this.app.workspace.iterateAllLeaves((leaf) => {\n        console.log(leaf.getViewState().type);\n      });\n    });\n  }\n}\n')),(0,i.kt)("h2",{id:"create-and-detach-leaves"},"Create and detach leaves"),(0,i.kt)("p",null,"There are several methods for creating leaves, which are fairly similar. To see all of them, refer to ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Workspace"},(0,i.kt)("inlineCode",{parentName:"a"},"Workspace")),", but here are a few to get you started:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you want to create a new leaf in the root split, use ",(0,i.kt)("a",{parentName:"li",href:"/obsidian-plugin-docs/api/classes/Workspace#getleaf"},(0,i.kt)("inlineCode",{parentName:"a"},"workspace.getLeaf(true)")),"."),(0,i.kt)("li",{parentName:"ul"},"If you want to create a new leaf in any of the side bars, use ",(0,i.kt)("a",{parentName:"li",href:"/obsidian-plugin-docs/api/classes/Workspace#getleftleaf"},(0,i.kt)("inlineCode",{parentName:"a"},"workspace.getLeftLeaf()"))," and ",(0,i.kt)("a",{parentName:"li",href:"/obsidian-plugin-docs/api/classes/Workspace#getrightleaf"},(0,i.kt)("inlineCode",{parentName:"a"},"workspace.getRightLeaf()")),". Both let you decide whether to create the leaf in a new split inside the side bar.")),(0,i.kt)("p",null,"You can also explicitly create the leaf in the split of your choice, using ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Workspace#createleafinparent"},(0,i.kt)("inlineCode",{parentName:"a"},"createLeafInParent(leftSplit, index)")),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," is the position you want to insert the leaf on. For example, set ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," to 0 to prepend the leaf in the split."),(0,i.kt)("p",null,"To remove a leaf from the workspace, call ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/WorkspaceLeaf#detach"},(0,i.kt)("inlineCode",{parentName:"a"},"detach()"))," on the leaf you want to remove."),(0,i.kt)("h2",{id:"leaf-groups"},"Leaf groups"),(0,i.kt)("p",null,"You can create ",(0,i.kt)("a",{parentName:"p",href:"https://help.obsidian.md/User+interface/Workspace/Panes/Linked+pane"},"linked panes")," by assigning multiple leaves to the same group, using ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/WorkspaceLeaf#setgroup"},(0,i.kt)("inlineCode",{parentName:"a"},"setGroup()")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'leaves.forEach((leaf) => leaf.setGroup("group1");\n')))}h.isMDXComponent=!0},11748:function(e,a,t){var n={"./locale":89234,"./locale.js":89234};function o(e){var a=i(e);return t(a)}function i(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=11748}}]);