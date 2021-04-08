(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(707)),p={title:"Permanent URLs"},i={unversionedId:"webapp/report-page/permanentURL",id:"version-4.0.0/webapp/report-page/permanentURL",isDocsHomePage:!1,title:"Permanent URLs",description:"InterMine generates stable and unique URLs to identify the report pages for biological entities.",source:"@site/versioned_docs/version-4.0.0/webapp/report-page/permanentURL.md",slug:"/webapp/report-page/permanentURL",permalink:"/im-docs/docs/4.0.0/webapp/report-page/permanentURL",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/webapp/report-page/permanentURL.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Webapp Tables CSS & HTML",permalink:"/im-docs/docs/4.0.0/webapp/report-page/webapp-tables"},next:{title:"Lists page",permalink:"/im-docs/docs/4.0.0/webapp/lists/lists-page"}},s=[],c={toc:s};function l(e){var t=e.components,p=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,p,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"InterMine generates stable and unique URLs to identify the report pages for biological entities."),Object(o.b)("p",null,"They are based on class names combined with local IDs provided by the data resource providers and therefore they are persistent."),Object(o.b)("p",null,"In FlyMine, for example, the URL of the report page for the gene zen, with primary identifier P19107, will be ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://flymine.org/gene:FBgn0004053"}),"http://flymine.org/gene:FBgn0004053"),"."),Object(o.b)("p",null,"These URLs are used to share the report page with other users."),Object(o.b)("p",null,Object(o.b)("img",{src:r(772).default})),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/class-keys"}),"class","_","keys.properties")," file specifies the keys used to generate the permanent URLs. If not specified, the primaryidentifier key is used."),Object(o.b)("p",null,"The format is:"),Object(o.b)("p",null,"#"," class","_","keys.properties "),Object(o.b)("p",null,"<","CLASSNAME",">","_","URI","<","FIELDNAME",">"),Object(o.b)("p",null,"The classes and field names are case sensitive."),Object(o.b)("p",null,"For example:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"key"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pathway","_","URI"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"identifier")))),Object(o.b)("p",null,"No need to specify the keys for the classes defined in the core model ","(","e.g. protein, organism, publication...",")","."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/class-keys"}),"Class keys")," for details about this file."))}l.isMDXComponent=!0},707:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,f=b["".concat(p,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(f,i(i({ref:t},c),{},{components:r})):a.a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},772:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/share-ad15b074d81c65c262f3506b4b8765fa.png"}}]);