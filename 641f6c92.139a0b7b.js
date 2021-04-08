(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{321:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(707)),o={title:"InterMine Versioning Policy"},c={unversionedId:"intermine/intermine-versions",id:"intermine/intermine-versions",isDocsHomePage:!1,title:"InterMine Versioning Policy",description:"Version Numbering",source:"@site/docs/intermine/intermine-versions.md",slug:"/intermine/intermine-versions",permalink:"/im-docs/docs/next/intermine/intermine-versions",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/intermine/intermine-versions.md",version:"current",sidebar:"someSidebar",previous:{title:"InterMine Development Roadmap",permalink:"/im-docs/docs/next/intermine/roadmap"},next:{title:"Building Javadoc",permalink:"/im-docs/docs/next/intermine/javadoc/index"}},s=[{value:"Version Numbering",id:"version-numbering",children:[]},{value:"Upgrading",id:"upgrading",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"version-numbering"},"Version Numbering"),Object(i.b)("p",null,"InterMine uses ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://semver.org/"}),"semantic versioning"),":"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"})),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"MAJOR"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"incompatible API changes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"MINOR"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"functionality added in a backwards-compatible manner")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PATCH"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"backwards-compatible bug fixes")))),Object(i.b)("p",null,'InterMine releases a new major version containing new features about once a year. Each major version receives bug fixes and, if need be, security fixes. These security fixes are released at least once every three months in what we call a "minor release". For more information on the minor release schedule, you can view the minor release ',Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/next/intermine/roadmap"}),"roadmap"),"."),Object(i.b)("p",null,"If the release team determines that a critical bug or security fix is too important to wait until the regularly scheduled minor release, it may make a release available outside of the minor release schedule."),Object(i.b)("p",null,"We always recommend that all users run the latest available minor release."),Object(i.b)("h2",{id:"upgrading"},"Upgrading"),Object(i.b)("p",null,"Major versions often change the data model or the InterMine API. These changes are often complex, so we do not maintain backward compatibility. A database rebuild is required. We also recommend reading the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/next/intermine/upgrade"}),"upgrading")," section of the major version you are planning to upgrade to."),Object(i.b)("p",null,"Upgrading to a minor release does not normally require a database rebuild; you can stop your webapp, update your InterMine version number, and redeploy your webapp. For some releases, manual changes may be required to complete the upgrade, so always read the release notes before upgrading."),Object(i.b)("p",null,"While upgrading will always contain some level of risk, InterMine minor releases fix only frequently-encountered bugs, security issues and blocking problems to reduce the risk associated with upgrading. For minor releases, the ",Object(i.b)("strong",{parentName:"p"},"community considers not upgrading to be riskier than upgrading"),"."))}b.isMDXComponent=!0},707:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=b(n),p=r,d=m["".concat(o,".").concat(p)]||m[p]||u[p]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);