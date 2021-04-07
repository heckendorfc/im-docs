(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{442:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(708)),o={title:"List analysis"},p={unversionedId:"webapp/lists/list-analysis/index",id:"webapp/lists/list-analysis/index",isDocsHomePage:!1,title:"List analysis",description:"fields displayed",source:"@site/docs/webapp/lists/list-analysis/index.md",slug:"/webapp/lists/list-analysis/index",permalink:"/im-docs/docs/next/webapp/lists/list-analysis/index",editUrl:"https://github.com/intermine/im-docs/docs/webapp/lists/list-analysis/index.md",version:"current",sidebar:"someSidebar",previous:{title:"List upgrade",permalink:"/im-docs/docs/next/webapp/lists/list-upgrade"},next:{title:"Template Queries",permalink:"/im-docs/docs/next/webapp/template-queries/index"}},c=[],s={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"fields displayed")),Object(i.b)("p",null,"determined by webconfig-model.xml"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"export")),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/query-results/export"}),"Export")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},'"Convert to a different type"')),Object(i.b)("p",null,"Tag conversion template with ",Object(i.b)("inlineCode",{parentName:"p"},"im:converter"),' tag. A "Conversion" template has to connect two data classes and include the id field, e.g.'),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<template name="Gene_To_Protein_Type_Converter" title="Gene to protein type converter" comment="">\n    <query name="Gene_To_Protein_Type_Converter" model="genomic" view="Gene.id Gene.proteins.id" longDescription="" sortOrder="Gene.id asc">\n            <constraint path="Gene.id" editable="true" description="Gene.id" op="=" value="0"/>\n    </query>\n</template>\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},'"Orthologues"')),Object(i.b)("p",null,"If you have orthologues loaded in your mine, you will see links in this section"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},'"View homologues in other Mines"')),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/properties/web-properties"}),"Features")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"external links")),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/properties/web-properties"}),"Features")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"template queries")),Object(i.b)("p",null,"Tag template with the ",Object(i.b)("inlineCode",{parentName:"p"},"im:report")," tag. See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/next/webapp/admin/index"}),"Website Admin"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"widgets")),Object(i.b)("p",null,"See: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../../embedding/list-widgets/index.md"}),"List Widgets")))}l.isMDXComponent=!0},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,p(p({ref:t},s),{},{components:n})):a.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);