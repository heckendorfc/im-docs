(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{305:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(707)),i={title:"Data files to integrate"},c={unversionedId:"get-started/tutorial/test-data",id:"get-started/tutorial/test-data",isDocsHomePage:!1,title:"Data files to integrate",description:"All data required to build an InterMine is included in biotestmine/data/malaria-data.tar.gz. Copy this file to your local directory and extract from the archive.",source:"@site/docs/get-started/tutorial/test-data.md",slug:"/get-started/tutorial/test-data",permalink:"/im-docs/docs/next/get-started/tutorial/test-data",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/get-started/tutorial/test-data.md",version:"current",sidebar:"someSidebar",previous:{title:"Tutorial - Configure your InterMine webapp!",permalink:"/im-docs/docs/next/get-started/tutorial/webapp"},next:{title:"Quick Start",permalink:"/im-docs/docs/next/get-started/quick-start"}},l=[{value:"Data sources",id:"data-sources",children:[{value:"malaria-genome",id:"malaria-genome",children:[]},{value:"gene_ontology",id:"gene_ontology",children:[]},{value:"go_annotation",id:"go_annotation",children:[]}]}],d={toc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All data required to build an InterMine is included in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/intermine/biotestmine/tree/master/data/malaria-data.tar.gz"}),"biotestmine/data/malaria-data.tar.gz"),". Copy this file to your local directory and extract from the archive."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cp biotestmine/data/malaria-data.tar.gz DATA_DIR\ncd DATA_DIR\ntar -zxvf malaria-data.tar.gz\n")),Object(o.b)("p",null,"Edit the project.xml file so that all occurrences of ''DATA","_","DIR'' point to the your local data directory location."),Object(o.b)("h2",{id:"data-sources"},"Data sources"),Object(o.b)("h3",{id:"malaria-genome"},"malaria-genome"),Object(o.b)("p",null,"The malaria genome as gff3 and fasta, originally downloaded from PlasmoDB"),Object(o.b)("h4",{id:"uniprot"},"uniprot"),Object(o.b)("p",null,"UniProt XML with protein information and sequences from SwissProt and Trembl. Downloaded from uniprot.org and filtered on taxon id 36329."),Object(o.b)("h3",{id:"gene_ontology"},"gene","_","ontology"),Object(o.b)("p",null,"The Gene Ontology structure. Downloaded from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.geneontology.org/"}),"http://www.geneontology.org/")),Object(o.b)("h3",{id:"go_annotation"},"go","_","annotation"),Object(o.b)("p",null,"GO term assignments for ",Object(o.b)("em",{parentName:"p"},"P. falciparum"),". Downloaded from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.geneontology.org/"}),"http://www.geneontology.org/")))}u.isMDXComponent=!0},707:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),u=function(e){var t=n.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,b=s["".concat(i,".").concat(m)]||s[m]||p[m]||o;return r?n.a.createElement(b,c(c({ref:t},d),{},{components:r})):n.a.createElement(b,c({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);