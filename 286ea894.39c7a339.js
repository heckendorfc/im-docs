(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(708)),s={title:"Class keys"},o={unversionedId:"webapp/properties/class-keys",id:"version-4.0.0/webapp/properties/class-keys",isDocsHomePage:!1,title:"Class keys",description:"Specify keys for the classes in your data model by adding them to the class_keys.properties file. This lets the webapp know how to uniquely identify objects of these classes. Users can then upload lists of such objects.",source:"@site/versioned_docs/version-4.0.0/webapp/properties/class-keys.md",slug:"/webapp/properties/class-keys",permalink:"/im-docs/docs/4.0.0/webapp/properties/class-keys",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-4.0.0/webapp/properties/class-keys.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Data and Widget Configuration",permalink:"/im-docs/docs/4.0.0/webapp/properties/webconfig-model"},next:{title:"Setting Javascript Options",permalink:"/im-docs/docs/4.0.0/webapp/properties/javascript-options"}},p=[],c={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Specify keys for the classes in your data model by adding them to the ",Object(i.b)("inlineCode",{parentName:"p"},"class_keys.properties")," file. This lets the webapp know how to uniquely identify objects of these classes. Users can then ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/lists/list-upload"}),"upload")," lists of such objects."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fields specified in this file will be links in the results table in the webapp."),Object(i.b)("li",{parentName:"ul"},"Only objects with key fields defined can be saved in lists.")),Object(i.b)("p",null,"Keys defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"class_keys.properties")," file are also used to boost the search visibility of their associated classes."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"class_keys.properties"),' file specifies the keys used to generate the permanent navigable URL which is used in the "SHARE" button in the report pages. If not specified, the primaryidentifier key is used.'),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"key"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Pathway","_","URI"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"identifier")))),Object(i.b)("p",null,"Given the above configuration, in FlyMine, the URL of the report page for the pentose phosphate pathway with identifier 00030, will be ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://flymine.org/flymine/pathway:00030"}),"http://flymine.org/flymine/pathway:00030"),". No need to specify the keys for the core model classes ","(","e.g. protein, publication...",")","."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/report-page/permanentURL"}),"Permanent URLs")," for details on permanent URLs."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/flymine/blob/master/dbmodel/resources/class_keys.properties"}),"FlyMine's class keys")," for an example class keys file."))}l.isMDXComponent=!0},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=l(n),f=r,d=b["".concat(s,".").concat(f)]||b[f]||u[f]||i;return n?a.a.createElement(d,o(o({ref:t},c),{},{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);