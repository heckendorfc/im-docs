(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{708:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return p}));var r=t(0),o=t.n(r);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),l=function(e){var a=o.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=l(e.components);return o.a.createElement(b.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},d=o.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,p=u["".concat(i,".").concat(d)]||u[d]||m[d]||n;return t?o.a.createElement(p,c(c({ref:a},b),{},{components:t})):o.a.createElement(p,c({ref:a},b))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=d;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<n;b++)i[b]=t[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return l}));var r=t(3),o=t(7),n=(t(0),t(708)),i={title:"Data Source Library Overview"},c={unversionedId:"database/data-sources/library/index",id:"version-4.0.0/database/data-sources/library/index",isDocsHomePage:!1,title:"Data Source Library Overview",description:"This page lists the current sources available for use in InterMine. All the sources here are found as ready-to-use JARs in the central repository, JCenter.",source:"@site/versioned_docs/version-4.0.0/database/data-sources/library/index.md",slug:"/database/data-sources/library/index",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/index",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-4.0.0/database/data-sources/library/index.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Data Download Scripts",permalink:"/im-docs/docs/4.0.0/database/download-scripts"},next:{title:"GO Annotation",permalink:"/im-docs/docs/4.0.0/database/data-sources/library/go/go-annotation"}},s=[{value:"Core InterMine sources",id:"core-intermine-sources",children:[]},{value:"FlyMine Specific sources",id:"flymine-specific-sources",children:[]},{value:"HumanMine Specific sources",id:"humanmine-specific-sources",children:[]}],b={toc:s};function l(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This page lists the current sources available for use in InterMine. All the sources here are found as ready-to-use JARs in the central repository, ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://jcenter.bintray.com/org/intermine/"}),"JCenter"),"."),Object(n.b)("p",null,"You can also add your own sources to load custom file formats, see ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/database/data-sources/custom/index"}),"Writing your own data source")," for more information. In addition, the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/get-started/tutorial/index"}),"Tutorial")," contains detailed steps on creating sources for a variety of different data formats."),Object(n.b)("p",null,"Most of the configuration done in the config files is optional, if no config entry exists the default behaviour is followed. However, there are exceptions to this rule."),Object(n.b)("h2",{id:"core-intermine-sources"},"Core InterMine sources"),Object(n.b)("p",null,"These are commonly used sources that you may want to use to load data into your own InterMine instance."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Gene Ontology",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/go/go-annotation"}),"GO Annotation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/go/go-obo"}),"GO OBO")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/homologues/index"}),"Homologue Data Sources"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/homologues/treefam"}),"Treefam")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/homologues/homologene"}),"Homologene")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/homologues/orthodb"}),"OrthoDB")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/homologues/panther"}),"Panther")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/homologues/compara"}),"Ensembl Compara")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/homologues/index#identifiers"}),"Identifiers")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/homologues/index#how-to-use-an-id-resolver"}),"How to use an ID resolver")))),Object(n.b)("li",{parentName:"ul"},"Interactions",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/interactions/biogrid"}),"BioGRID")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/interactions/intact"}),"IntAct")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/interactions/intact-complexes"}),"IntAct - complexes")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"interactions/psi-mi-ontology"}),"PSI-MI Ontology")))),Object(n.b)("li",{parentName:"ul"},"Pathway data sources",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/pathways/kegg"}),"KEGG")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/pathways/reactome"}),"Reactome")))),Object(n.b)("li",{parentName:"ul"},"Proteins",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/proteins/uniprot"}),"UniProt")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/proteins/interpro"}),"InterPro")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/proteins/interpro#interpro-to-protein"}),"InterPro to protein")))),Object(n.b)("li",{parentName:"ul"},"Publications",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/publications/pubmed"}),"PubMed")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/publications/publications"}),"Publications")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/ncbi-gene"}),"NCBI - Entrez gene")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/chado"}),"Chado")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/fasta"}),"FASTA")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/gff"}),"GFF3")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/identifiers/index"}),"Identifier Data Sources")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/intermine-items-xml"}),"InterMine Items XML")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/omim"}),"OMIM")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/organism"}),"Organisms")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/so"}),"Sequence Ontology (SO)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/uberon"}),"Uberon")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/data-sources"}),"Data Sources")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/data-sets"}),"Data Sets")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/library/variation/vcf"}),"VCF files"))),Object(n.b)("h2",{id:"flymine-specific-sources"},"FlyMine Specific sources"),Object(n.b)("p",null,"These are sources that load Drosophila specific data sets into FlyMine, we don't expect you will re-use these unless you are creating a Drosophila warehouse. All of these sources are located in ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/flymine-bio-sources"}),"https://github.com/intermine/flymine-bio-sources"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"affy-probes"),Object(n.b)("li",{parentName:"ul"},"arbeitman-items-xml"),Object(n.b)("li",{parentName:"ul"},"bdgp-clone"),Object(n.b)("li",{parentName:"ul"},"bdgp-insitu"),Object(n.b)("li",{parentName:"ul"},"drosdel-gff"),Object(n.b)("li",{parentName:"ul"},"drosophila-homology"),Object(n.b)("li",{parentName:"ul"},"fly-anatomy-ontology"),Object(n.b)("li",{parentName:"ul"},"flyatlas"),Object(n.b)("li",{parentName:"ul"},"flybase-alleles"),Object(n.b)("li",{parentName:"ul"},"flybase-expression"),Object(n.b)("li",{parentName:"ul"},"fly-development-ontology"),Object(n.b)("li",{parentName:"ul"},"fly-fish"),Object(n.b)("li",{parentName:"ul"},"fly-misc-cvterms"),Object(n.b)("li",{parentName:"ul"},"flyreg"),Object(n.b)("li",{parentName:"ul"},"long","_","oligo"),Object(n.b)("li",{parentName:"ul"},"miranda"),Object(n.b)("li",{parentName:"ul"},"redfly"),Object(n.b)("li",{parentName:"ul"},"rnai")),Object(n.b)("p",null,"See ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.flymine.org"}),"FlyMine")," for more information about these datasets. Look at FlyMine's ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/flymine/blob/master/project.xml"}),"project.xml")," for examples of how to use these sources."),Object(n.b)("h2",{id:"humanmine-specific-sources"},"HumanMine Specific sources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"arrayexpress-atlas"),Object(n.b)("li",{parentName:"ul"},"atlas-express"),Object(n.b)("li",{parentName:"ul"},"clinvar"),Object(n.b)("li",{parentName:"ul"},"ensembl-hgnc"),Object(n.b)("li",{parentName:"ul"},"gtex"),Object(n.b)("li",{parentName:"ul"},"hgnc"),Object(n.b)("li",{parentName:"ul"},"hpo"),Object(n.b)("li",{parentName:"ul"},"hpo-annotation"),Object(n.b)("li",{parentName:"ul"},"huge-gwas"),Object(n.b)("li",{parentName:"ul"},"human-gene"),Object(n.b)("li",{parentName:"ul"},"mgi-alleles"),Object(n.b)("li",{parentName:"ul"},"ncbi-summaries"),Object(n.b)("li",{parentName:"ul"},"orphanet"),Object(n.b)("li",{parentName:"ul"},"protein-atlas")),Object(n.b)("p",null,"See ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.humanmine.org"}),"HumanMine")," for more information about these datasets. Look at ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/humanmine/blob/master/project.xml"}),"HumanMine's project.xml")," for examples on how to use these sources."))}l.isMDXComponent=!0}}]);