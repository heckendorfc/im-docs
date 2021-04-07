(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(3),o=a(7),n=(a(0),a(708)),c={title:"Reactome"},s={unversionedId:"database/data-sources/library/pathways/reactome",id:"database/data-sources/library/pathways/reactome",isDocsHomePage:!1,title:"Reactome",description:"Types of data loaded",source:"@site/docs/database/data-sources/library/pathways/reactome.md",slug:"/database/data-sources/library/pathways/reactome",permalink:"/im-docs/docs/next/database/data-sources/library/pathways/reactome",editUrl:"https://github.com/intermine/im-docs/docs/database/data-sources/library/pathways/reactome.md",version:"current",sidebar:"someSidebar",previous:{title:"KEGG",permalink:"/im-docs/docs/next/database/data-sources/library/pathways/kegg"},next:{title:"UniProt",permalink:"/im-docs/docs/next/database/data-sources/library/proteins/uniprot"}},i=[{value:"Types of data loaded",id:"types-of-data-loaded",children:[]},{value:"How to download the data",id:"how-to-download-the-data",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine",children:[]}],d={toc:i};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"types-of-data-loaded"},"Types of data loaded"),Object(n.b)("p",null,"proteins, genes, pathways"),Object(n.b)("h2",{id:"how-to-download-the-data"},"How to download the data"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.reactome.org/download/current/UniProt2Reactome_All_Levels.txt"}),"http://www.reactome.org/download/current/UniProt2Reactome","_","All","_","Levels.txt")),Object(n.b)("h2",{id:"how-to-load-the-data-into-your-mine"},"How to load the data into your mine"),Object(n.b)("p",null,"project XML example"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<source name="reactome" type="reactome">\n  <property name="src.data.dir" location="/data/reactome" />\n  <property name="reactome.organisms" value="9606 10090" />\n</source>\n')),Object(n.b)("p",null,"This source contains a task to copy the pathways from the proteins to the related genes. To include this, add this to the ",Object(n.b)("inlineCode",{parentName:"p"},"post-processing")," section of your project XML file:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<post-processing>\n  <post-process name="do-sources" />\n  ...\n</post-processing>\n')),Object(n.b)("p",null,"See ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/next/database/database-building/post-processing/index"}),"Post processing")," for more information on post-processing."))}p.isMDXComponent=!0},708:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=p(a),b=r,m=l["".concat(c,".").concat(b)]||l[b]||u[b]||n;return a?o.a.createElement(m,s(s({ref:t},d),{},{components:a})):o.a.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var d=2;d<n;d++)c[d]=a[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);