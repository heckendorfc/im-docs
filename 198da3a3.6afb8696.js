(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(707)),i={title:"OMIM"},c={unversionedId:"database/data-sources/library/omim",id:"database/data-sources/library/omim",isDocsHomePage:!1,title:"OMIM",description:"Types of data loaded",source:"@site/docs/database/data-sources/library/omim.md",slug:"/database/data-sources/library/omim",permalink:"/im-docs/docs/next/database/data-sources/library/omim",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/database/data-sources/library/omim.md",version:"current",sidebar:"someSidebar",previous:{title:"InterMine Items XML",permalink:"/im-docs/docs/next/database/data-sources/library/intermine-items-xml"},next:{title:"Organisms",permalink:"/im-docs/docs/next/database/data-sources/library/organism"}},d=[{value:"Types of data loaded",id:"types-of-data-loaded",children:[]},{value:"How to download the data",id:"how-to-download-the-data",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine",children:[]}],s={toc:d};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"types-of-data-loaded"},"Types of data loaded"),Object(o.b)("p",null,"genes, diseases"),Object(o.b)("h2",{id:"how-to-download-the-data"},"How to download the data"),Object(o.b)("p",null,"Contact OMIM for your API key. Use our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/intermine/intermine-scripts/blob/master/bio/humanmine/get_omim_pubmed.py"}),"script")," to download the data."),Object(o.b)("h2",{id:"how-to-load-the-data-into-your-mine"},"How to load the data into your mine"),Object(o.b)("p",null,"project XML example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markup"}),'<source name="omim" type="omim">\n  <property name="src.data.dir" location="/data/omim"/>\n</source>\n')))}l.isMDXComponent=!0},707:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(r),p=a,b=u["".concat(i,".").concat(p)]||u[p]||m[p]||o;return r?n.a.createElement(b,c(c({ref:t},s),{},{components:r})):n.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);