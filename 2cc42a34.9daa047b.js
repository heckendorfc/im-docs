(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{181:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(707)),i={title:"BioGRID"},c={unversionedId:"database/data-sources/library/interactions/biogrid",id:"version-4.0.0/database/data-sources/library/interactions/biogrid",isDocsHomePage:!1,title:"BioGRID",description:"Loads interactions data from BioGRID",source:"@site/versioned_docs/version-4.0.0/database/data-sources/library/interactions/biogrid.md",slug:"/database/data-sources/library/interactions/biogrid",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/interactions/biogrid",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/database/data-sources/library/interactions/biogrid.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Ensembl Compara",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/homologues/compara"},next:{title:"IntAct",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/interactions/intact"}},s=[{value:"Types of data loaded",id:"types-of-data-loaded",children:[]},{value:"How to download the data",id:"how-to-download-the-data",children:[]},{value:"How to load the data into your mine",id:"how-to-load-the-data-into-your-mine",children:[{value:"Project XML example",id:"project-xml-example",children:[]},{value:"biogrid_config.properties",id:"biogrid_configproperties",children:[]}]}],d={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Loads interactions data from BioGRID"),Object(o.b)("h2",{id:"types-of-data-loaded"},"Types of data loaded"),Object(o.b)("p",null,"genes, proteins, interactions"),Object(o.b)("h2",{id:"how-to-download-the-data"},"How to download the data"),Object(o.b)("p",null,"From the download section of the BioGRID website: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://thebiogrid.org"}),"http://thebiogrid.org")),Object(o.b)("p",null,"Download the file named: ",Object(o.b)("inlineCode",{parentName:"p"},"BIOGRID-ORGANISM-[version].psi25.zip"),"."),Object(o.b)("h2",{id:"how-to-load-the-data-into-your-mine"},"How to load the data into your mine"),Object(o.b)("h3",{id:"project-xml-example"},"Project XML example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<source name="biogrid" type="biogrid">\n  <property name="src.data.dir" location="/DATA/biogrid"/>\n  <property name="src.data.dir.includes" value="*psi25.xml"/>\n  <property name="biogrid.organisms" value="7227 6239 4932"/>\n</source>\n')),Object(o.b)("h3",{id:"biogrid_configproperties"},"biogrid","_","config.properties"),Object(o.b)("p",null,"Determines which gene identifiers are set. organisms - If none are configured, all interactions are stored."),Object(o.b)("p",null,"This is what the gene looks like in biogrid"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<names>\n    <shortLabel>CG1111</shortLabel>\n</names>\n<xref>\n   <primaryRef db="FLYBASE" id="FBgn001" />\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"shortLabel")),Object(o.b)("p",null,"To set your gene.identifier to be the shortLabel in the biogrid XML, use this config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"<TAXON_ID>.<GENE_IDENTIFIER_FIELD>=shortLabel\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"xref")),Object(o.b)("p",null,"To set your gene.identifier field to be a value from an xref entry, use this syntax:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"<TAXON_ID>.xref.<GENE_IDENTIFIER_FIELD> = <XREF_DB_VALUE>\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),'\nxref "db" value is not case sensitive, case seems to vary from file to file.'))}l.isMDXComponent=!0},707:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),b=l(r),u=n,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return r?a.a.createElement(m,c(c({ref:t},d),{},{components:r})):a.a.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);