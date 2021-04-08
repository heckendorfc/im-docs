(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{343:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(707)),o={title:"Acceptance Tests"},s={unversionedId:"database/data-integrity-checks/acceptance-tests",id:"version-5.0.0/database/data-integrity-checks/acceptance-tests",isDocsHomePage:!1,title:"Acceptance Tests",description:"How to run the tests",source:"@site/versioned_docs/version-5.0.0/database/data-integrity-checks/acceptance-tests.md",slug:"/database/data-integrity-checks/acceptance-tests",permalink:"/im-docs/docs/database/data-integrity-checks/acceptance-tests",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-5.0.0/database/data-integrity-checks/acceptance-tests.md",version:"5.0.0",sidebar:"version-5.0.0/someSidebar",previous:{title:"Template Comparison",permalink:"/im-docs/docs/database/data-integrity-checks/template-comparison"},next:{title:"Data loading performance",permalink:"/im-docs/docs/database/performance/data-loading"}},i=[{value:"How to run the tests",id:"how-to-run-the-tests",children:[]},{value:"Types of tests",id:"types-of-tests",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"how-to-run-the-tests"},"How to run the tests"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Add a file to ",Object(c.b)("inlineCode",{parentName:"p"},"MINE_NAME/dbmodel/resources"),", eg."),Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"flymine_acceptance_test.conf"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Run acceptance tests here:"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"~/git/flymine $ ./gradlew runAcceptanceTests\n")),Object(c.b)("p",null,"The results will be in ",Object(c.b)("inlineCode",{parentName:"p"},"MINE_NAME/dbmodel/build/acceptance_test.html")),Object(c.b)("h2",{id:"types-of-tests"},"Types of tests"),Object(c.b)("p",null,"You can assert that a query returns true:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"assert {\n    sql: select count(*) >= 400000 from goannotation\n}\n")),Object(c.b)("p",null,"Or doesn't have any results:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"no-results {\n    sql: select * from datasource where url is null or name is null or description is null\n    note: all fields of data source should be filled in\n}\n")),Object(c.b)("p",null,"Or has at least some results:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"some-results {\n    sql: select * from organism where name = 'Anopheles gambiae'\n    note: We should have an Anopheles gambiae  object but not an Anopheles gambiae PEST one\n}\n")))}p.isMDXComponent=!0},707:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);