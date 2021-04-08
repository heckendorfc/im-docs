(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{476:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(707)),o={title:"Debugging"},c={unversionedId:"database/database-building/debugging",id:"database/database-building/debugging",isDocsHomePage:!1,title:"Debugging",description:"Below are common errors you may encounter when building your InterMine. Please contact us if you continue to have problems!",source:"@site/docs/database/database-building/debugging.md",slug:"/database/database-building/debugging",permalink:"/im-docs/docs/next/database/database-building/debugging",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/database/database-building/debugging.md",version:"current",sidebar:"someSidebar",previous:{title:"Post build updating with SQL triggers",permalink:"/im-docs/docs/next/database/database-building/post-build-updating-with-sql-triggers"},next:{title:"Template Comparison",permalink:"/im-docs/docs/next/database/data-integrity-checks/template-comparison"}},s=[{value:"Given a ProxyReference, but id not in ID Map",id:"given-a-proxyreference-but-id-not-in-id-map",children:[{value:"Error message",id:"error-message",children:[]},{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]}]}],b={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Below are common errors you may encounter when building your InterMine. Please contact us if you continue to have problems!"),Object(i.b)("h2",{id:"given-a-proxyreference-but-id-not-in-id-map"},"Given a ProxyReference, but id not in ID Map"),Object(i.b)("h3",{id:"error-message"},"Error message"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),'java.lang.RuntimeException: Exception while dataloading - to allow multiple errors, set the property "dataLoader.allowMultipleErrors" to true Problem while loading item identifier 6_1083 because Given a ProxyReference, but id not in ID Map. Source object ID: <ProxyReference os: org.intermine.objectstore.translating.ObjectStoreTranslatingImpl@1607c7a, id:  66342, proxied class: interface org.intermine.model.InterMineObject>\n')),Object(i.b)("h3",{id:"problem"},"Problem"),Object(i.b)("p",null,"This error means the code tried to store an object that was referenced by another object but could not find it. This means you've set a reference to an object, but not stored that referenced object in the database."),Object(i.b)("p",null,"Here's an example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// set reference to organism object\ngene.setReference("organism", organism);\n// store gene object\nstore(gene)\n// never store organism object!\n')),Object(i.b)("p",null,"Gene now refers to an object that does not exist in the database. To fix, make sure you are storing all the correct objects in your code."),Object(i.b)("h3",{id:"solution"},"Solution"),Object(i.b)("p",null,"Make sure your code is correct and refers only to objects that are going to be stored in the database."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Unit tests for this data source should be updated to check for these cases."),Object(i.b)("li",{parentName:"ul"},"If you are loading XML created by another script, be sure to validate the data before loading.")),Object(i.b)("p",null,"To find out which object is not being stored, use the ",Object(i.b)("inlineCode",{parentName:"p"},"item identifier")," listed in the error message -- in this case, ",Object(i.b)("inlineCode",{parentName:"p"},"6_1083"),". Look in the ",Object(i.b)("inlineCode",{parentName:"p"},"items")," database to determine the values for this object."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"select * from item where identifier = '6_1083'\n")),Object(i.b)("p",null,"This gives the class and item id:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"implementations | classname | identifier |   id\n-----------------+-----------+------------+---------\n                | Strain    | 6_1083     | 1380031\n")),Object(i.b)("p",null,"We see this object is a Strain. We now know which type of data is not being stored. We can then look in the attribute table to get the identifier. Using the ",Object(i.b)("inlineCode",{parentName:"p"},"id")," we can query the attribute table."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"select * from attribute where itemid = 1380031;\n")),Object(i.b)("p",null,"This gives us any attributes stored for this object, in our example this gives us the primary identifier."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"intermine_value |       name        | itemid\n-----------------+-------------------+---------\nLS2329          | primaryIdentifier | 1380031\n")))}l.isMDXComponent=!0},707:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);