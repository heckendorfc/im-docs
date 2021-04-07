(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{518:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(708)),o={title:"Web Services Overview"},c={unversionedId:"web-services/index",id:"version-5.0.0/web-services/index",isDocsHomePage:!1,title:"Web Services Overview",description:"InterMine provides programmatic access to its features via web services. This allows users to automate:",source:"@site/versioned_docs/version-5.0.0/web-services/index.md",slug:"/web-services/index",permalink:"/im-docs/docs/web-services/index",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-5.0.0/web-services/index.md",version:"5.0.0",sidebar:"version-5.0.0/someSidebar",previous:{title:"Frictionless Specifications for InterMine",permalink:"/im-docs/docs/webapp/frictionless/index"},next:{title:"InterMine Properties",permalink:"/im-docs/docs/web-services/intermine-properties"}},b=[{value:"Getting Started",id:"getting-started",children:[]},{value:"API and Client Libraries",id:"api-and-client-libraries",children:[]},{value:"Authentication",id:"authentication",children:[]}],s={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"InterMine provides programmatic access to its features via web services. This allows users to automate:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Data retrieval ","(","custom queries, templated queries, keyword searches",")"),Object(i.b)("li",{parentName:"ul"},"List creation/analysis/management"),Object(i.b)("li",{parentName:"ul"},"User profile management"),Object(i.b)("li",{parentName:"ul"},"Data-model introspection")),Object(i.b)("p",null,"For a full listing of web service capabilities on various mines, please see the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://iodocs.apps.intermine.org"}),"HTTP API documentation"),"."),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Install Required Dependencies")),Object(i.b)("p",null,"If you are reading this page, we make the assumption you know how to write and run programs in your language of choice. You will probably want to download and install the appropriate client library ","(","see ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/web-services/index#api-and-client-libraries"}),"API and Client Libraries"),")",", which typically involves the standard package manager for the given platform."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Look at some example code")),Object(i.b)("p",null,"We also assume you are already familiar with the InterMine web interface, as provided by sites such as ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.flymine.org"}),"FlyMine"),". Each result table in the web interface includes a mechanism for generating code using one of the client libraries which generates the same results as those seen in the table ","(","click on the ",Object(i.b)("strong",{parentName:"p"},"code")," button",")",". The generated code is meant to help get you started with the use of the client libraries."),Object(i.b)("p",null,"There is also a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/web-services/tutorial"}),"Tutorial")," for the Python API"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Modify the code so it does what you want")),Object(i.b)("p",null,"Working from the generated stub, you can edit the code to perform your intended task. You will probably want to refer to the API documentation for your target language ","(","see below",")","."),Object(i.b)("h2",{id:"api-and-client-libraries"},"API and Client Libraries"),Object(i.b)("p",null,"InterMine exposes its functionality over an HTTP API ","(","generally following RESTful principles, but there is a bit of RPC there",")",". Client libraries are available in commonly used languages so you can get started quickly. All our code is hosted on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.github.com/intermine"}),"Github"),", and contributions are welcome. All InterMine code is free and open-source, released under the LGPL ","(","see ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/about/index#legal"}),"Legal"),")","."),Object(i.b)("p",null,"For information on the underlying API, and the supported libraries, please visit the following links:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"HTTP API")),Object(i.b)("p",null,"Documentation on services available from mines: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://iodocs.apps.intermine.org"}),"http://iodocs.apps.intermine.org")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Java")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/intermine-ws-java"}),"Download")," ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://intermine.org/intermine-ws-java/javadoc/"}),"API")," ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/intermine-ws-java-docs/"}),"Tutorial")," ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/intermine-ws-java"}),"Source")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Perl Client")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://search.cpan.org/perldoc?Webservice%3A%3AInterMine"}),"Download ","|"," API")," ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://metacpan.org/pod/distribution/Webservice-InterMine/lib/Webservice/InterMine/Cookbook.pod"}),"Tutorial")," ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/intermine-ws-perl"}),"Source")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Python Client")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://pypi.python.org/pypi/intermine"}),"Download")," ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://intermine.org/intermine-ws-python"}),"API")," ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/intermine-ws-python-docs/"}),"Tutorial")," ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/intermine-ws-client.py"}),"Source")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Ruby Client")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.rubygems.org/gems/intermine"}),"Download ","|"," API")," ","|"," Tutorial ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/intermine-ws-ruby"}),"Source")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"JavaScript Client ","(","for Bowser and node.js",")")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://npmjs.org/package/imjs"}),"Download")," ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://alexkalderimis.github.io/imjs/"}),"API")," ","|"," Tutorial ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/imjs"}),"Source")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"R Client")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://bioconductor.org/packages/release/bioc/html/InterMineR.html"}),"Download")," ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://bioconductor.org/packages/release/bioc/html/InterMineR.html"}),"Docs")," ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://bioconductor.org/packages/release/bioc/html/InterMineR.html"}),"Tutorial")," ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://bioconductor.org/packages/release/bioc/html/InterMineR.html"}),"Source")),Object(i.b)("h2",{id:"authentication"},"Authentication"),Object(i.b)("p",null,"Authenticated web services are accessed via tokens: either 24-hour anonymous tokens or permanent user API key tokens. See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/web-services/authentication"}),"Authentication")," for more details."))}p.isMDXComponent=!0},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,d=l["".concat(o,".").concat(m)]||l[m]||u[m]||i;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);