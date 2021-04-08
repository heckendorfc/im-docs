(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{279:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(707)),l={title:"Ensembl Compara"},i={unversionedId:"database/data-sources/library/homologues/compara",id:"database/data-sources/library/homologues/compara",isDocsHomePage:!1,title:"Ensembl Compara",description:"Download data from BioMart",source:"@site/docs/database/data-sources/library/homologues/compara.md",slug:"/database/data-sources/library/homologues/compara",permalink:"/im-docs/docs/next/database/data-sources/library/homologues/compara",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/database/data-sources/library/homologues/compara.md",version:"current",sidebar:"someSidebar",previous:{title:"Panther",permalink:"/im-docs/docs/next/database/data-sources/library/homologues/panther"},next:{title:"BioGRID",permalink:"/im-docs/docs/next/database/data-sources/library/interactions/biogrid"}},c=[{value:"Download data from BioMart",id:"download-data-from-biomart",children:[]},{value:"Add entry to project XML file",id:"add-entry-to-project-xml-file",children:[]},{value:"Run build",id:"run-build",children:[{value:"Data file",id:"data-file",children:[]},{value:"Download script",id:"download-script",children:[]}]}],b={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"download-data-from-biomart"},"Download data from BioMart"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.ensembl.org/biomart/martview/"}),"http://www.ensembl.org/biomart/martview/"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"select database for primary organism, eg. ",Object(o.b)("inlineCode",{parentName:"p"},"Ensembl Genes"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"select dataset for primary organism, eg. ",Object(o.b)("inlineCode",{parentName:"p"},"Drosophila melanogaster")),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"features (BDGP5.25)"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"select FILTERS"),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("ol",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ol"},'click on "FILTERS" on the left panel in BioMart ',"(","this will populate the main panel with filter options",")"),Object(o.b)("li",{parentName:"ol"},"select ",Object(o.b)("inlineCode",{parentName:"li"},"MULTI SPECIES COMPARISONS")),Object(o.b)("li",{parentName:"ol"},"check the checkbox next to ",Object(o.b)("inlineCode",{parentName:"li"},"Homolog filters")),Object(o.b)("li",{parentName:"ol"},"select the organism of interest in the dropdown")),Object(o.b)("blockquote",{parentName:"blockquote"},Object(o.b)("ol",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ol"},"eg. ",Object(o.b)("inlineCode",{parentName:"li"},"Orthologous Caenorhabditis elegans Genes")),Object(o.b)("li",{parentName:"ol"},"make sure that next to the dropdown, ",Object(o.b)("inlineCode",{parentName:"li"},"Only")," is checked"))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"select ATTRIBUTES"),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("ol",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ol"},"check the ",Object(o.b)("inlineCode",{parentName:"li"},"Homologs")," radio button at the top of the center panel"),Object(o.b)("li",{parentName:"ol"},"uncheck the ",Object(o.b)("inlineCode",{parentName:"li"},"Ensembl Transcript ID")," option, ",Object(o.b)("inlineCode",{parentName:"li"},"Ensembl Gene ID")," is now the only output"),Object(o.b)("li",{parentName:"ol"},"click on ",Object(o.b)("inlineCode",{parentName:"li"},"ORTHOLOGS (Max select 6 orthologs):")," to open that section of the form"),Object(o.b)("li",{parentName:"ol"},"select the Gene ID for the organism of interest, eg. Drosophila Ensembl Gene ID")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run query"),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("ol",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ol"},"select the ",Object(o.b)("inlineCode",{parentName:"li"},"[Results]")," button at the top of the page"),Object(o.b)("li",{parentName:"ol"},"create ",Object(o.b)("inlineCode",{parentName:"li"},"TSV")," file, check box next to ",Object(o.b)("inlineCode",{parentName:"li"},"Unique results only")),Object(o.b)("li",{parentName:"ol"},"when prompted, save file as ",Object(o.b)("inlineCode",{parentName:"li"},"TAXONID1_TAXONID2")))))),Object(o.b)("h2",{id:"add-entry-to-project-xml-file"},"Add entry to project XML file"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<source name="ensembl-compara" type="ensembl-compara">\n  <property name="src.data.dir" location="/DATA/ensembl/compara"/>\n  <property name="ensemblcompara.organisms" value="7227"/>\n  <property name="ensemblcompara.homologues" value="6239"/>\n</source>\n')),Object(o.b)("h2",{id:"run-build"},"Run build"),Object(o.b)("h3",{id:"data-file"},"Data file"),Object(o.b)("p",null,"Tab-delimited files should be named ","<","TAXON ID",">","_","<","TAXON ID",">",", eg. 9606","_","10090 for a file with human genes and mouse orthologues."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Gene ID"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Homologue ID"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ENSG00000253023"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ENSMUSG00000088328")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ENSG00000238364"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ENSMUSG00000088728")))),Object(o.b)("h3",{id:"download-script"},"Download script"),Object(o.b)("p",null,"When you have created your query, you can export the Perl script or XML so you can run the query automatically next time, eg:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE Query>\n<Query  virtualSchemaName = "default" formatter = "TSV" header = "0" uniqueRows = "0" count = "" datasetConfigVersion = "0.6" >\n\n  <Dataset name = "hsapiens_gene_ensembl" interface = "default" >\n    <Filter name = "with_dmelanogaster_homolog" excluded = "0"/>\n    <Attribute name = "ensembl_gene_id" />\n    <Attribute name = "drosophila_ensembl_gene" />\n  </Dataset>\n</Query>\n')))}p.isMDXComponent=!0},707:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,u=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return a?r.a.createElement(u,i(i({ref:t},b),{},{components:a})):r.a.createElement(u,i({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var b=2;b<o;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);