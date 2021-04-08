(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{233:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var r=a(3),o=a(7),n=(a(0),a(707)),i={title:"InterPro"},d={unversionedId:"database/data-sources/library/proteins/interpro",id:"database/data-sources/library/proteins/interpro",isDocsHomePage:!1,title:"InterPro",description:"InterMine has two InterPro data sources. One that loads the protein domains, e.g. name and description and one that loads the relationship between the proteins and domains.",source:"@site/docs/database/data-sources/library/proteins/interpro.md",slug:"/database/data-sources/library/proteins/interpro",permalink:"/im-docs/docs/next/database/data-sources/library/proteins/interpro",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/database/data-sources/library/proteins/interpro.md",version:"current",sidebar:"someSidebar",previous:{title:"UniProt",permalink:"/im-docs/docs/next/database/data-sources/library/proteins/uniprot"},next:{title:"PubMed",permalink:"/im-docs/docs/next/database/data-sources/library/publications/pubmed"}},p=[{value:"Types of data loaded",id:"types-of-data-loaded",children:[]},{value:"How to download the data",id:"how-to-download-the-data",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine",children:[]},{value:"InterPro to protein",id:"interpro-to-protein",children:[{value:"Types of data loaded",id:"types-of-data-loaded-1",children:[]},{value:"How to download the data",id:"how-to-download-the-data-1",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine-1",children:[]}]}],c={toc:p};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"InterMine has two InterPro data sources. One that loads the protein domains, e.g. name and description and one that loads the relationship between the proteins and domains."),Object(n.b)("h3",{id:"types-of-data-loaded"},"Types of data loaded"),Object(n.b)("p",null,"protein domains, e.g. name and description"),Object(n.b)("h3",{id:"how-to-download-the-data"},"How to download the data"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"ftp://ftp.ebi.ac.uk/pub/databases/interpro/interpro.xml.gz"}),"ftp://ftp.ebi.ac.uk/pub/databases/interpro/interpro.xml.gz")),Object(n.b)("h3",{id:"how-to-load-the-data-into-your-mine"},"How to load the data into your mine"),Object(n.b)("p",null,"project XML example"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<source name="interpro" type="interpro">\n  <property name="src.data.dir" location="/data/interpro"/>\n</source>\n')),Object(n.b)("h2",{id:"interpro-to-protein"},"InterPro to protein"),Object(n.b)("p",null,"This source queries for proteins already in the database and loads related protein domains. So this source must be run after UniProt."),Object(n.b)("h3",{id:"types-of-data-loaded-1"},"Types of data loaded"),Object(n.b)("p",null,"protein domains, their relationship to the protein and protein domain region"),Object(n.b)("h3",{id:"how-to-download-the-data-1"},"How to download the data"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"ftp://ftp.ebi.ac.uk/pub/databases/interpro/protein2ipr.dat.gz"}),"ftp://ftp.ebi.ac.uk/pub/databases/interpro/protein2ipr.dat.gz")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"ftp://ftp.ebi.ac.uk/pub/databases/interpro/match_complete.dat.gz"}),"ftp://ftp.ebi.ac.uk/pub/databases/interpro/match","_","complete.dat.gz")),Object(n.b)("h3",{id:"how-to-load-the-data-into-your-mine-1"},"How to load the data into your mine"),Object(n.b)("p",null,"project XML example"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'\x3c!-- has to be after UniProt because only loads protein domains for loaded proteins --\x3e\n<source name="protein2ipr" type="protein2ipr">\n    <property name="src.data.dir" location="/data/interpro"/>\n    <property name="src.data.dir.includes" value="protein2ipr.dat"/>\n    <property name="protein2ipr.organisms" value="9606"/>\n    <property name=\u201dosAlias\u201d value=\u201dos.production\u201d/>\n</source>\n')))}s.isMDXComponent=!0},707:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},l=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=s(a),b=r,m=l["".concat(i,".").concat(b)]||l[b]||u[b]||n;return a?o.a.createElement(m,d(d({ref:t},c),{},{components:a})):o.a.createElement(m,d({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=b;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var c=2;c<n;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);