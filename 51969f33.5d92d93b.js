(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{276:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),o=(a(0),a(707)),i={title:"InterMine Items XML"},c={unversionedId:"database/data-sources/library/intermine-items-xml",id:"database/data-sources/library/intermine-items-xml",isDocsHomePage:!1,title:"InterMine Items XML",description:"Use this source to load InterMine Items XML conforming to the data model directly into the production database.",source:"@site/docs/database/data-sources/library/intermine-items-xml.md",slug:"/database/data-sources/library/intermine-items-xml",permalink:"/im-docs/docs/next/database/data-sources/library/intermine-items-xml",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/database/data-sources/library/intermine-items-xml.md",version:"current",sidebar:"someSidebar",previous:{title:"Identifier Data Sources",permalink:"/im-docs/docs/next/database/data-sources/library/identifiers/index"},next:{title:"OMIM",permalink:"/im-docs/docs/next/database/data-sources/library/omim"}},s=[{value:"Types of data loaded",id:"types-of-data-loaded",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine",children:[]}],d={toc:s};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use this source to load ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/next/database/data-sources/apis/index"}),"InterMine Items XML")," conforming to the data model directly into the production database."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"intermine-items-xml-file")),Object(o.b)("p",null,"Use this source to load ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/next/database/data-sources/apis/index"}),"InterMine Items XML "),"conforming to the data model directly into the production database."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"intermine-items-large-xml-file")),Object(o.b)("p",null,"Use this source to load ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/next/database/data-sources/apis/index"}),"InterMine Items XML")," conforming to the data model into the production database. This uses an intermediate database to allow it to cope with very large files that would otherwise cause memory problems."),Object(o.b)("h2",{id:"types-of-data-loaded"},"Types of data loaded"),Object(o.b)("p",null,"Any"),Object(o.b)("h2",{id:"how-to-load-the-data-into-your-mine"},"How to load the data into your mine"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/next/database/data-sources/custom/index"}),"Writing your own data source")," for details on how to do this."),Object(o.b)("p",null,"project XML example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<source name="arbeitman-items-xml" type="arbeitman-items-xml">\n  <property name="src.data.file" location="/data/arbeitman/arbeitman-tgt-items.xml"/>\n</source>\n')))}l.isMDXComponent=!0},707:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),l=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=l(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(a),b=r,p=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return a?n.a.createElement(p,c(c({ref:t},d),{},{components:a})):n.a.createElement(p,c({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);