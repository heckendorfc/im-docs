(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{352:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(708)),i={title:"Publications"},l={unversionedId:"database/data-sources/library/publications/publications",id:"version-4.0.0/database/data-sources/library/publications/publications",isDocsHomePage:!1,title:"Publications",description:"All publications are referred to by PubMed id by other sources. This source should be included at the end of the build. It will query all PubMed ids from the database \\(where the title, year, or first author columns are NULL\\), fetch details from the Entrez web service and fill in Publication objects.",source:"@site/versioned_docs/version-4.0.0/database/data-sources/library/publications/publications.md",slug:"/database/data-sources/library/publications/publications",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/publications/publications",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-4.0.0/database/data-sources/library/publications/publications.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"PubMed",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/publications/pubmed"},next:{title:"NCBI - Entrez gene",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/ncbi-gene"}},c=[{value:"Types of data loaded",id:"types-of-data-loaded",children:[]},{value:"How to download the data",id:"how-to-download-the-data",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine",children:[]}],d={toc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All publications are referred to by PubMed id by other sources. This source should be included at the end of the build. It will query all PubMed ids from the database ","(","where the ",Object(o.b)("inlineCode",{parentName:"p"},"title"),", ",Object(o.b)("inlineCode",{parentName:"p"},"year"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"first author")," columns are NULL",")",", fetch details from the Entrez web service and fill in Publication objects."),Object(o.b)("h2",{id:"types-of-data-loaded"},"Types of data loaded"),Object(o.b)("p",null,"None, the publication records already in the database are updated."),Object(o.b)("h2",{id:"how-to-download-the-data"},"How to download the data"),Object(o.b)("p",null,"Data is fetched from the NCBI web site for publication records already in the InterMine database."),Object(o.b)("h2",{id:"how-to-load-the-data-into-your-mine"},"How to load the data into your mine"),Object(o.b)("p",null,"project XML example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<source name="update-publications" type="update-publications" dump="true">\n  <property name="src.data.file" location="publications.xml"/>\n  \x3c!-- <property name="loadFullRecord" value="true"/> --\x3e\n</source>\n')),Object(o.b)("p",null,"properties:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'loadFullRecord - load MeSH terms and abstract, value "true"/"false"')))}u.isMDXComponent=!0},708:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),u=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(a),p=r,f=s["".concat(i,".").concat(p)]||s[p]||b[p]||o;return a?n.a.createElement(f,l(l({ref:t},d),{},{components:a})):n.a.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);