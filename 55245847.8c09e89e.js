(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{283:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(708)),a={title:"Customising the default queries in your io-docs application"},c={unversionedId:"web-services/iodocs",id:"web-services/iodocs",isDocsHomePage:!1,title:"Customising the default queries in your io-docs application",description:"You can have default queries defined for your iodocs application, documenting the Web Services available in InterMine, see http://iodocs.apps.intermine.org",source:"@site/docs/web-services/iodocs.md",slug:"/web-services/iodocs",permalink:"/im-docs/docs/next/web-services/iodocs",editUrl:"https://github.com/intermine/im-docs/docs/web-services/iodocs.md",version:"current",sidebar:"someSidebar",previous:{title:"Diagnostic",permalink:"/im-docs/docs/next/web-services/diagnostic"},next:{title:"InterMine Video Tutorial Collection",permalink:"/im-docs/docs/next/help/index"}},s=[],p={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can have default queries defined for your ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/intermine/iodocs"}),"iodocs application"),", documenting the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/web-services/index"}),"Web Services")," available in InterMine, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://iodocs.apps.intermine.org"}),"http://iodocs.apps.intermine.org")),Object(i.b)("p",null,"To set your mine default query for the ",Object(i.b)("em",{parentName:"p"},"'query/results'")," service of your mine, add it to your web.properties configuration file, e.g."),Object(i.b)("p",null,"add to ",Object(i.b)("inlineCode",{parentName:"p"},"webapp/src/main/webapp/WEB-INF/web.properties")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'services.defaults.query = <query model="genomic" view="Gene.secondaryIdentifier Gene.symbol Gene.primaryIdentifier Gene.organism.name" sortOrder="Gene.secondaryIdentifier ASC" ><constraint path="Gene.organism.name" op="=" value="Drosophila melanogaster" code="A" /></query>\n')))}u.isMDXComponent=!0},708:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,m=l["".concat(a,".").concat(b)]||l[b]||d[b]||i;return r?o.a.createElement(m,c(c({ref:t},p),{},{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);