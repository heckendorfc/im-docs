(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{410:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),i=n(7),r=(n(0),n(707)),o={title:"Features"},s={unversionedId:"introduction/features",id:"version-5.0.0/introduction/features",isDocsHomePage:!1,title:"Features",description:"InterMine is a powerful open source data warehouse system, created specifically for integrating and analysing complex biological data. Benefiting from over a decade of data warehousing experience and input from a wide range of research collaborators, InterMine is still in active development, and is used by a number of major model organism databases among others. InterMine features include:",source:"@site/versioned_docs/version-5.0.0/introduction/features.md",slug:"/introduction/features",permalink:"/im-docs/docs/introduction/features",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-5.0.0/introduction/features.md",version:"5.0.0",sidebar:"version-5.0.0/someSidebar",previous:{title:"InterMine",permalink:"/im-docs/docs/introduction/index"},next:{title:"Architecture",permalink:"/im-docs/docs/introduction/architecture"}},l=[{value:"Sophisticated data integration facilities",id:"sophisticated-data-integration-facilities",children:[]},{value:"Fast, flexible querying",id:"fast-flexible-querying",children:[]},{value:"User-friendly web interface and analysis tools",id:"user-friendly-web-interface-and-analysis-tools",children:[]},{value:"Extensive set of APIs and web tools",id:"extensive-set-of-apis-and-web-tools",children:[]},{value:"Highly developed and extensible system",id:"highly-developed-and-extensible-system",children:[]}],d={toc:l};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"InterMine is a powerful open source data warehouse system, created specifically for integrating and analysing complex biological data. Benefiting from over a decade of data warehousing experience and input from a wide range of research collaborators, InterMine is still in active development, and is used by a number of major model organism databases among others. InterMine features include:"),Object(r.b)("h2",{id:"sophisticated-data-integration-facilities"},"Sophisticated data integration facilities"),Object(r.b)("p",null,"While a core biological model based on the Sequence Ontology is provided, the data model is flexible and extensible - new data types can be added easily by editing an XML file. A range of data parsers is provided to facilitate the data loading, and a number of consistency checks after the database build ensure that the data has been integrated correctly. Sophisticated identifier resolution ensures that all data identifiers are correctly updated to their most current form."),Object(r.b)("h2",{id:"fast-flexible-querying"},"Fast, flexible querying"),Object(r.b)("p",null,"The sophisticated query optimisation means that users can construct and perform a wide range of queries across the data model, while retaining good query speed. The query optimisation method is constructed around the use of precomputed tables, meaning that the data schema does not need to be denormalized in order to speed up query time. The system is also fast enough to deal with large quantities of data - the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.humanmine.org/"}),"HumanMine")," database contains over 50 million objects, and its size with precomputed tables is 200 GB, with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://phytozome.jgi.doe.gov/phytomine"}),"PhytoMine")," being much larger, containing 2 billion objects and almost 1500GB."),Object(r.b)("h2",{id:"user-friendly-web-interface-and-analysis-tools"},"User-friendly web interface and analysis tools"),Object(r.b)("p",null,"The new interface ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://intermine.org/intermine-user-docs/getting-started#homepage"}),"BlueGenes")," provides a more interactive experience for exploring and analysing data.\nIt contains a number of features focused around list analysis ","(","a common need in biology",")",", including graphical data displayers and tools that automatically calculate a set of enrichment statistics. It also includes report pages, interactive results tables, saved template queries, a regions search tool and a query builder. This setup makes it possible to browse and explore data without any programming knowledge. Users can save their data and queries in a private workspace."),Object(r.b)("h2",{id:"extensive-set-of-apis-and-web-tools"},"Extensive set of APIs and web tools"),Object(r.b)("p",null,"InterMine can be accessed programmatically, and we provide ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../web-services/index#api-and-client-libraries"}),"client libraries")," for five commonly used programming languages ","(","Python, Perl, Ruby, Java, JavaScript",")",". This enables bioinformatician users to access InterMine functionalities without using the web application and to query data from a number of different InterMine instances using a single script, or as part of an automated workflow. It also enables the easy embedding of InterMine analysis tools into external websites, as well as the development of external applications that access InterMine data."),Object(r.b)("h2",{id:"highly-developed-and-extensible-system"},"Highly developed and extensible system"),Object(r.b)("p",null,"InterMine has been in development for over 10 years, and during this time, based on user demand, we have introduced a large number of features. These range from faceted filtering options and enabling Boolean logic and set operations, to table sorting and filtering, a range of standardised export options, integration of other tools such as Cytoscape, and enabling embedding of individual analysis tools as part of external websites. The open source, extensible framework means InterMine is also open to other developers to build upon."))}c.isMDXComponent=!0},707:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),c=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,b=u["".concat(o,".").concat(f)]||u[f]||p[f]||r;return n?i.a.createElement(b,s(s({ref:t},d),{},{components:n})):i.a.createElement(b,s({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);