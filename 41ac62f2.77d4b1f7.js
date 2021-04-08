(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(707)),b={title:"Guide to Customising BlueGenes"},l={unversionedId:"webapp/blue-genes/index",id:"version-4.0.0/webapp/blue-genes/index",isDocsHomePage:!1,title:"Guide to Customising BlueGenes",description:"Content",source:"@site/versioned_docs/version-4.0.0/webapp/blue-genes/index.md",slug:"/webapp/blue-genes/index",permalink:"/im-docs/docs/4.0.0/webapp/blue-genes/index",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/webapp/blue-genes/index.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Useful ObjectStore properties",permalink:"/im-docs/docs/4.0.0/database/performance/configuration"},next:{title:"Home page",permalink:"/im-docs/docs/4.0.0/webapp/homepage/index"}},o=[{value:"Content",id:"content",children:[]},{value:"Environment",id:"environment",children:[]},{value:"will be displayed in BlueGenes",id:"will-be-displayed-in-bluegenes",children:[]}],c={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"content"},"Content"),Object(i.b)("p",null,"Certain features of the BlueGenes app are controlled by parameters set in the ",Object(i.b)("inlineCode",{parentName:"p"},"web.properties")," file. These properties are also used in the current webapp user interface."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"purpose"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"parameters"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"default examples for the ID resolver"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"bag.example.identifiers"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"bag.example.identifiers.protein=Q8T3M3,FBpp0081318,FTZ_DROME")," and ",Object(i.b)("inlineCode",{parentName:"td"},"bag.example.identifiers=CG9151, FBgn0000099")," ","(","one per type",")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"default separators"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"list.upload.delimiters"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"\\n\\t,"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"default regionsearch"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"genomicRegionSearch.","*"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"H. sapiens")," ","(","note: please do not use long format, e.g. ",Object(i.b)("inlineCode",{parentName:"td"},"Homo sapiens"),")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"default query builder query"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"services.defaults.query"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},'"{ \\"from\\": \\"Gene\\", \\"select\\": [ \\"secondaryIdentifier\\", \\"symbol\\", \\"primaryIdentifier\\", \\"organism.name\\" ], \\"orderBy\\": [ { \\"path\\": \\"secondaryIdentifier\\", \\"direction\\": \\"ASC\\" } ], \\"where\\": [ { \\"path\\": \\"organism.name\\", \\"op\\": \\"=\\", \\"value\\": \\"Drosophila melanogaster\\", \\"code\\": \\"A\\" } ] }"'))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"default keyword search"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"quickSearch.identifiers"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"e.g. PPARG, Insulin, rs876498"))))),Object(i.b)("p",null,"Please see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/web-properties"}),"Features")," for details on these parameters."),Object(i.b)("h2",{id:"environment"},"Environment"),Object(i.b)("p",null,"BlueGenes uses the following parameters defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"~/.intermine/$MINE.properties")," file."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"purpose"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"parameters"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"location of JavaScript tools"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"bluegenes.toolLocation"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"/intermine/tools/node","_","modules/")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"base URL for requests to the InterMine instance"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"webapp.baseurl"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"http://www.flymine.org"}),"http://www.flymine.org"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"path appended to the base URL"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"webapp.path"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"flymine")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"name of your InterMine instance as it will be displayed in BlueGenes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"project.title"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"BioTestMine")))),Object(i.b)("h2",{id:"will-be-displayed-in-bluegenes"},"will be displayed in BlueGenes"),Object(i.b)("p",null,"Please see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/intermine-properties"}),"Database and Web application")," for details on this property file."))}p.isMDXComponent=!0},707:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,O=d["".concat(b,".").concat(m)]||d[m]||s[m]||i;return n?r.a.createElement(O,l(l({ref:t},c),{},{components:n})):r.a.createElement(O,l({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var c=2;c<i;c++)b[c]=n[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);