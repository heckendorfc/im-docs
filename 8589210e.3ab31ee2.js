(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{407:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(708)),i={title:"Data Sets"},s={unversionedId:"database/data-sources/library/data-sets",id:"version-4.0.0/database/data-sources/library/data-sets",isDocsHomePage:!1,title:"Data Sets",description:"Load an XML file with details of your data sets and associated information, e.g. description and URL",source:"@site/versioned_docs/version-4.0.0/database/data-sources/library/data-sets.md",slug:"/database/data-sources/library/data-sets",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/data-sets",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-4.0.0/database/data-sources/library/data-sets.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Data Sources",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/data-sources"},next:{title:"VCF files",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/variation/vcf"}},c=[{value:"Types of data loaded",id:"types-of-data-loaded",children:[]},{value:"How to download the data",id:"how-to-download-the-data",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine",children:[]}],d={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Load an XML file with details of your data sets and associated information, e.g. description and URL"),Object(o.b)("h2",{id:"types-of-data-loaded"},"Types of data loaded"),Object(o.b)("p",null,"Update data source and data set entries"),Object(o.b)("h2",{id:"how-to-download-the-data"},"How to download the data"),Object(o.b)("p",null,"Create your own datasets.xml file with your data in InterMine items XML format and put in your mine's ",Object(o.b)("inlineCode",{parentName:"p"},"dbmodel/resources")," directory so that it's on your classpath."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<?xml version="1.0"?>\n<items>\n<item id="09" class="" implements="DataSource">\n    <attribute name="name" value="NCBI"/>\n    <attribute name="description" value="National Centre for Biotechnology Information"/>\n    <attribute name="url" value="https://www.ncbi.nlm.nih.gov"/>\n</item>\n<item id="10" class="" implements="DataSet">\n    <attribute name="name" value="Homo sapiens genome sequence"/>\n    <attribute name="description" value="Release GRCh38 of the Homo sapiens genome sequence"/>\n    <attribute name="version" value="GRCh38.p12"/>\n    <attribute name="url" value="https://www.ncbi.nlm.nih.gov"/>\n    <reference name="dataSource" ref_id="09"/>\n</item>\n</items>\n')),Object(o.b)("h2",{id:"how-to-load-the-data-into-your-mine"},"How to load the data into your mine"),Object(o.b)("p",null,"project XML example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<source name="flymine-static" type="flymine-static">\n  <property name="src.data.file" location="/data/datasets.xml"/>\n</source>\n')))}l.isMDXComponent=!0},708:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return a?r.a.createElement(b,s(s({ref:t},d),{},{components:a})):r.a.createElement(b,s({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);