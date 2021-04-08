(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{707:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return r?i.a.createElement(m,s(s({ref:t},p),{},{components:r})):i.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},71:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(3),i=r(7),a=(r(0),r(707)),o={title:"List upload"},s={unversionedId:"webapp/lists/list-upload",id:"version-4.0.0/webapp/lists/list-upload",isDocsHomePage:!1,title:"List upload",description:"InterMine has a sophisticated list import system for genes. This page aims to describe how it works.",source:"@site/versioned_docs/version-4.0.0/webapp/lists/list-upload.md",slug:"/webapp/lists/list-upload",permalink:"/im-docs/docs/4.0.0/webapp/lists/list-upload",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/webapp/lists/list-upload.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Lists page",permalink:"/im-docs/docs/4.0.0/webapp/lists/lists-page"},next:{title:"List upgrade",permalink:"/im-docs/docs/4.0.0/webapp/lists/list-upgrade"}},l=[{value:"Queries",id:"queries",children:[{value:"Default Query",id:"default-query",children:[]},{value:"&quot;Bag Queries&quot;",id:"bag-queries",children:[]},{value:"Converters",id:"converters",children:[]}]},{value:"Configuration",id:"configuration",children:[]}],p={toc:l};function c(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"InterMine has a sophisticated list import system for genes. This page aims to describe how it works."),Object(a.b)("p",null,'Users can paste identifiers into the list upload form; e.g. for data types "gene" it can be an identifier, symbol or name. Which key is used is determined by the class',"_","keys file. The list upload form runs a series of queries to try to match the identifier to an object in the database."),Object(a.b)("p",null,"This is also how the LOOKUP constraint works."),Object(a.b)("p",null,"The list upload form runs the three queries listed below until it finds a match for the user's identifiers. It's now possible to run all three queries every time regardless of if a match was returned. You may want to configure your mine to do this if your database contains lots of identifiers that are assigned to different objects, this option would allow your users to see more options - not just the first."),Object(a.b)("h2",{id:"queries"},"Queries"),Object(a.b)("h3",{id:"default-query"},"Default Query"),Object(a.b)("p",null,"First, we query for the value in key fields. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"select * from gene \nwhere name = 'adh' OR \n      symbol = 'adh' or \n    primaryIdentifier = 'adh' or \n    secondaryIdentifier = 'adh';\n")),Object(a.b)("p",null,"If this query returned results, that object is added to our list and we are done."),Object(a.b)("p",null,"If this query didn't return any results, we move on to the next step."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),'\nYou can set a parameter in bag-queries.xml, matchOnFirst="false", to always run all queries.'),Object(a.b)("h3",{id:"bag-queries"},'"Bag Queries"'),Object(a.b)("p",null,"Next we run queries listed in ",Object(a.b)("inlineCode",{parentName:"p"},"bag-queries.xml")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"looks for cross references"),Object(a.b)("li",{parentName:"ol"},"looks for synonyms")),Object(a.b)("p",null,"Matches returned from this query are not added to the list ","(","if ",Object(a.b)("inlineCode",{parentName:"p"},"matchesAreIssues=true"),")",', they are displayed under the "synonyms matched" heading. Users can optionally add them to their list.'),Object(a.b)("p",null,"If this query didn't return any results, we move on to the next step."),Object(a.b)("h3",{id:"converters"},"Converters"),Object(a.b)("p",null,"Next we run appropriate converter templates, which are templates tagged with ",Object(a.b)("inlineCode",{parentName:"p"},"im:converter"),". Here is an example converter template:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<template name="Gene_To_Protein_Type_Converter" title="Gene to protein type converter" comment="">\n    <query name="Gene_To_Protein_Type_Converter" model="genomic" view="Gene.id Gene.proteins.id" longDescription="" sortOrder="Gene.id asc">\n        <constraint path="Gene.id" editable="true" description="Gene.id" op="=" value="0"/>\n    </query>\n</template>\n')),Object(a.b)("p",null,'Matches returned from this query are not added to the list, they are displayed under the "converted type" heading. Users can optionally add them to their list.'),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"types ","(","classes",")")),Object(a.b)("p",null,"Add a class to ",Object(a.b)("inlineCode",{parentName:"p"},"dbmodel/resources/class_keys.properties")," file to get it to show up on the list upload form. To ",Object(a.b)("em",{parentName:"p"},"bold")," a class, tag it with ",Object(a.b)("inlineCode",{parentName:"p"},"im:preferredBagType"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"organisms")),Object(a.b)("p",null,"All organisms in your database will be displayed here. You can set the default in WebProperties."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"example list")),Object(a.b)("p",null,'The example list is set in "bag.example.identifiers" property in WebProperties.'),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"valid delimiters")),Object(a.b)("p",null,'The default valid delimiters are comma, space, tab or new line. You can change this value by setting the "list.upload.delimiters" property in WebProperties.'),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"matchOnFirst")),Object(a.b)("p",null,"Set this value in the bag-queries.xml file. Default value is TRUE. If false, all queries will always be run."))}c.isMDXComponent=!0}}]);