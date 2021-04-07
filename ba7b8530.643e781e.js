(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{542:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(708)),c={title:"Frictionless Specifications for InterMine"},o={unversionedId:"webapp/frictionless/index",id:"webapp/frictionless/index",isDocsHomePage:!1,title:"Frictionless Specifications for InterMine",description:"Contents",source:"@site/docs/webapp/frictionless/index.md",slug:"/webapp/frictionless/index",permalink:"/im-docs/docs/next/webapp/frictionless/index",editUrl:"https://github.com/intermine/im-docs/docs/webapp/frictionless/index.md",version:"current",sidebar:"someSidebar",previous:{title:"Performance",permalink:"/im-docs/docs/next/webapp/performance/index"},next:{title:"Web Services Overview",permalink:"/im-docs/docs/next/web-services/index"}},l=[{value:"Contents",id:"contents",children:[]},{value:"1. Introduction",id:"1-introduction",children:[{value:"What are Frictionless Specifications?",id:"what-are-frictionless-specifications",children:[]},{value:"What&#39;s a data package?",id:"whats-a-data-package",children:[]},{value:"Data Package for InterMine",id:"data-package-for-intermine",children:[]},{value:"Frictionless Specifications used in InterMine Data Package",id:"frictionless-specifications-used-in-intermine-data-package",children:[]}]},{value:"2. InterMine&#39;s Data Package",id:"2-intermines-data-package",children:[{value:"How to export?",id:"how-to-export",children:[]},{value:"Description of InterMine&#39;s Data Package Fields",id:"description-of-intermines-data-package-fields",children:[]}]},{value:"3. Sample data package",id:"3-sample-data-package",children:[]}],b={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"contents"},"Contents"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#1-introduction"}),"Introduction")),Object(i.b)("p",{parentName:"li"},"a. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#what-are-frictionless-specifications"}),"What are Frictionless Specifications?")),Object(i.b)("p",{parentName:"li"},"b. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#whats-a-data-package"}),"What's a data package?")),Object(i.b)("p",{parentName:"li"},"c. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#data-package-for-intermine"}),"Data Package for InterMine")),Object(i.b)("p",{parentName:"li"},"d. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#frictionless-specifications-used-in-intermine-data-package"}),"Frictionless Specifications used in InterMine Data Package"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#2-intermines-data-package"}),"InterMine's Data Package")),Object(i.b)("p",{parentName:"li"},"a. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#how-to-export"}),"How to export?")),Object(i.b)("p",{parentName:"li"},"b. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#description-of-intermines-data-package-fields"}),"Description of InterMine's Data Package Fields"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#3-sample-data-package"}),"Sample data package")))),Object(i.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(i.b)("h3",{id:"what-are-frictionless-specifications"},"What are Frictionless Specifications?"),Object(i.b)("p",null,"At the core of Frictionless is a set of patterns for describing data including Data Package (for datasets), Data Resource (for files) and Table Schema (for tables).\nFor more info about the project as a whole, please visit ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://frictionlessdata.io/"}),"frictionlessdata.io"),"."),Object(i.b)("h3",{id:"whats-a-data-package"},"What's a data package?"),Object(i.b)("p",null,"A Data Package is a simple container format used to describe and package a collection of data (a dataset)."),Object(i.b)("h3",{id:"data-package-for-intermine"},"Data Package for InterMine"),Object(i.b)("p",null,"InterMine allows users to query a diverse data sources through its webapps. InterMine's new data package will help users to understand the query results in a simplified manner. It will describe the primary keys, data types of attributes/columns, descriptions and ontology links of attributes among other things. For a sample InterMine Data Package, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#3-sample-data-package"}),"click here"),". "),Object(i.b)("h3",{id:"frictionless-specifications-used-in-intermine-data-package"},"Frictionless Specifications used in InterMine Data Package"),Object(i.b)("p",null,"InterMine uses ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://specs.frictionlessdata.io/tabular-data-package/"}),"Tabular Data Package")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://specs.frictionlessdata.io/tabular-data-resource/"}),"Tabular Data Resource")," since InterMine's biological data is tabular-style."),Object(i.b)("h2",{id:"2-intermines-data-package"},"2. InterMine's Data Package"),Object(i.b)("h3",{id:"how-to-export"},"How to export?"),Object(i.b)("p",null,"While exporting query results, there'll be a new option for Frictionless Data Package. You can use it to export the datapackage along with the results."),Object(i.b)("p",null,"Please note that if you want to export the data package, it will be exported in a zip file along with the query results."),Object(i.b)("h3",{id:"description-of-intermines-data-package-fields"},"Description of InterMine's Data Package Fields"),Object(i.b)("p",null,"Some of the fields in the data package are standard fields followed by frictionless specifications. These are highlighted with the keywork FIXED in the third column otherwise examples are specified."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value/Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"profile ","[outer level]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies that the specification used is tabular data package"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tabular-data-package ","[FIXED]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name ","[outer level]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes the name and version of the mine"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"flymine@v51")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"profile ","[inner level]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies that the resource used is tabular data resource"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tabular-data-resource ","[FIXED]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name ","[inner level]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the name of the resource, depends on the mineName"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"flymine-query-data-resource")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"path"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"exports the top 10 rows of results of query"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"example ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"#3-sample-data-package"}),"below")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"format"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"format of the query results file"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"csv/tsv/json/xml")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"schema"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes fields of query results and primary/candidate keys"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"example ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"#3-sample-data-package"}),"below")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fields"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"an array of objects describing all the fields in query results"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"example ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"#3-sample-data-package"}),"below")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name ","[in fields]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name of the field/column header"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"firstAuthor")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type ","[in fields]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type of the field/column header"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String/Integer/etc.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"class path ","[in fields]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"class path of attribute/field"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Protein > Organism . Name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"class ontology link ","[in fields]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ontology link for the class of attribute"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"http://semanticscience.org/resource/SIO_010043"}),"http://semanticscience.org/resource/SIO_010043"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"attribute ontology link ","[in fields]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ontology link for the attribute"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"http://edamontology.org/data_2909"}),"http://edamontology.org/data_2909"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"primaryKey"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"an array of candidate keys"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[primaryIdentifier, primaryAccession]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sources"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"an array of objects each describing a data source"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"example ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"#3-sample-data-package"}),"below")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"title ","[in sources]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name/title of data source"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GenomeNet")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"url ","[in sources]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"url of the data source"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"http://www.genome.jp/en/"}),"http://www.genome.jp/en/"))))),Object(i.b)("h2",{id:"3-sample-data-package"},"3. Sample data package"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "profile" : "tabular-data-package",\n  "name" : "biotestmine@v31",\n  "resources" : [ {\n    "profile" : "tabular-data-resource",\n    "name" : "intermine-query-data-resource",\n    "path" : "http://localhost:8080/biotestmine/service/query/results?query=%3Cquery+name%3D%22%22+model%3D%22genomic%22+view%3D%22Protein.primaryIdentifier+Protein.primaryAccession+Protein.organism.name+Protein.publications.firstAuthor+Protein.publications.title+Protein.publications.year+Protein.publications.journal+Protein.publications.volume+Protein.publications.pages+Protein.publications.pubMedId%22+longDescription%3D%22%22+sortOrder%3D%22Protein.primaryIdentifier+asc%22%3E%3Cconstraint+path%3D%22Protein.organism.name%22+op%3D%22%3D%22+value%3D%22Plasmodium+falciparum+3D7%22%2F%3E%3C%2Fquery%3E&format=tab",\n    "format" : "tsv",\n    "schema" : {\n      "fields" : [ {\n        "name" : "primaryIdentifier",\n        "type" : "String",\n        "class path" : "Protein > DB identifier",\n        "class ontology link" : "http://semanticscience.org/resource/SIO_010043",\n        "attribute ontology link" : "http://semanticscience.org/resource/SIO_000675"\n      }, {\n        "name" : "primaryAccession",\n        "type" : "String",\n        "class path" : "Protein > Primary Accession",\n        "class ontology link" : "http://semanticscience.org/resource/SIO_010043",\n        "attribute ontology link" : "http://edamontology.org/data_2907"\n      }, {\n        "name" : "name",\n        "type" : "String",\n        "class path" : "Protein > Organism . Name",\n        "class ontology link" : "http://semanticscience.org/resource/SIO_010000",\n        "attribute ontology link" : "http://edamontology.org/data_2909"\n      }, {\n        "name" : "firstAuthor",\n        "type" : "String",\n        "class path" : "Protein > Publications > First Author",\n        "class ontology link" : "http://semanticscience.org/resource/SIO_000087",\n        "attribute ontology link" : "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C42781"\n      }, {\n        "name" : "title",\n        "type" : "String",\n        "class path" : "Protein > Publications > Title",\n        "class ontology link" : "http://semanticscience.org/resource/SIO_000087",\n        "attribute ontology link" : "http://semanticscience.org/resource/SIO_000185"\n      }, {\n        "name" : "year",\n        "type" : "Integer",\n        "class path" : "Protein > Publications > Year",\n        "class ontology link" : "http://semanticscience.org/resource/SIO_000087",\n        "attribute ontology link" : null\n      }, {\n        "name" : "journal",\n        "type" : "String",\n        "class path" : "Protein > Publications > Journal",\n        "class ontology link" : "http://semanticscience.org/resource/SIO_000087",\n        "attribute ontology link" : "http://semanticscience.org/resource/SIO_000160"\n      }, {\n        "name" : "volume",\n        "type" : "String",\n        "class path" : "Protein > Publications > Volume",\n        "class ontology link" : "http://semanticscience.org/resource/SIO_000087",\n        "attribute ontology link" : null\n      }, {\n        "name" : "pages",\n        "type" : "String",\n        "class path" : "Protein > Publications > Pages",\n        "class ontology link" : "http://semanticscience.org/resource/SIO_000087",\n        "attribute ontology link" : null\n      }, {\n        "name" : "pubMedId",\n        "type" : "String",\n        "class path" : "Protein > Publications > PubMed ID",\n        "class ontology link" : "http://semanticscience.org/resource/SIO_000087",\n        "attribute ontology link" : "http://edamontology.org/data_1187"\n      } ],\n      "primaryKey" : [ "primaryIdentifier", "secondaryIdentifier", "primaryAccession" ]\n    }\n  } ],\n  "sources" : [ {\n    "title" : "GenomeNet",\n    "url" : "http://www.genome.jp/en/"\n  } ]\n}\n')))}s.isMDXComponent=!0},708:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);