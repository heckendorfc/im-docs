(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{383:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(707)),i={title:"Organisms"},s={unversionedId:"database/data-sources/library/organism",id:"version-4.0.0/database/data-sources/library/organism",isDocsHomePage:!1,title:"Organisms",description:"All other sources refer to organisms only by their NCBI taxonomy id. This source should be included at the end of the build. It will select the taxonIds loaded into the Organism class, fetch details via the Entrez web service and fill in the organism names in the database.",source:"@site/versioned_docs/version-4.0.0/database/data-sources/library/organism.md",slug:"/database/data-sources/library/organism",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/organism",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/database/data-sources/library/organism.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"OMIM",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/omim"},next:{title:"Sequence Ontology (SO)",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/so"}},c=[{value:"Types of data loaded",id:"types-of-data-loaded",children:[]},{value:"How to download the data",id:"how-to-download-the-data",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine",children:[]}],d={toc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All other sources refer to organisms only by their NCBI taxonomy id. This source should be included at the end of the build. It will select the taxonIds loaded into the Organism class, fetch details via the Entrez web service and fill in the organism names in the database."),Object(o.b)("h2",{id:"types-of-data-loaded"},"Types of data loaded"),Object(o.b)("p",null,"update organism entries"),Object(o.b)("h2",{id:"how-to-download-the-data"},"How to download the data"),Object(o.b)("p",null,"N/A - source uses NCBI's web services"),Object(o.b)("h2",{id:"how-to-load-the-data-into-your-mine"},"How to load the data into your mine"),Object(o.b)("p",null,"project XML example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markup"}),'<source name="entrez-organism" type="entrez-organism">\n  <property name="src.data.file" location="build/organisms.xml"/>\n</source>\n')))}l.isMDXComponent=!0},707:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),l=function(e){var t=n.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),p=a,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return r?n.a.createElement(m,s(s({ref:t},d),{},{components:r})):n.a.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);