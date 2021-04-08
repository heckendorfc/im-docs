(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{483:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),r=(a(0),a(707)),i={title:"GO Annotation"},c={unversionedId:"database/data-sources/library/go/go-annotation",id:"version-4.0.0/database/data-sources/library/go/go-annotation",isDocsHomePage:!1,title:"GO Annotation",description:"Loads gene association files that link GO terms to genes or proteins.",source:"@site/versioned_docs/version-4.0.0/database/data-sources/library/go/go-annotation.md",slug:"/database/data-sources/library/go/go-annotation",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/go/go-annotation",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/database/data-sources/library/go/go-annotation.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Data Source Library Overview",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/index"},next:{title:"GO OBO",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/go/go-obo"}},l=[{value:"Types of data loaded",id:"types-of-data-loaded",children:[]},{value:"How to download the data",id:"how-to-download-the-data",children:[]},{value:"Configuration file (optional)",id:"configuration-file-optional",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine",children:[]}],d={toc:l};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Loads gene association files that link GO terms to genes or proteins."),Object(r.b)("h2",{id:"types-of-data-loaded"},"Types of data loaded"),Object(r.b)("p",null,"genes, proteins, GO terms, publications, GO evidence"),Object(r.b)("h2",{id:"how-to-download-the-data"},"How to download the data"),Object(r.b)("p",null,"The data is available from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.geneontology.org"}),"http://www.geneontology.org")),Object(r.b)("h2",{id:"configuration-file-optional"},"Configuration file ","(","optional",")"),Object(r.b)("p",null,"There is an optional configuration file that let's you determine which type of object you create, and which identifier field you set. If your annotation file annotates genes and uses the primary identifier, these are the default values and you do not need to update the configuration file."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"definition"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"possible values"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"typeAnnotated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"class of what is being annotated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gene ","(","default",")"," or protein")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"identifier"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"which field to set"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"primaryIdentifier ","(","default",")",", symbol, or primaryAccession")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"readcolumn ","[","1","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"which column to use for identifier"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"identifier ","(","default",")"," or symbol")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"[","1","]"," See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://geneontology.org/docs/go-annotation-file-gaf-format-2.1/"}),"http://geneontology.org/docs/go-annotation-file-gaf-format-2.1/")," for column descriptions")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"# an example entry\n7165.typeAnnotated=protein\n7165.identifier=primaryAccession\n")),Object(r.b)("h2",{id:"how-to-load-the-data-into-your-mine"},"How to load the data into your mine"),Object(r.b)("p",null,"project XML example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<source name="go-annotation" type="go-annotation">\n  <property name="src.data.dir" location="/data/go-annotation"/>\n   <property name="ontologyPrefix" value="GO"/>\n</source>\n')))}b.isMDXComponent=!0},707:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return f}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=o.a.createContext({}),b=function(e){var t=o.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=b(a),u=n,f=s["".concat(i,".").concat(u)]||s[u]||p[u]||r;return a?o.a.createElement(f,c(c({ref:t},d),{},{components:a})):o.a.createElement(f,c({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<r;d++)i[d]=a[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);