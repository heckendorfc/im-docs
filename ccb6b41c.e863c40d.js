(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{591:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),i=(n(0),n(708)),s={title:"Report Displayers Examples"},o={unversionedId:"webapp/report-page/report-displayers-examples",id:"webapp/report-page/report-displayers-examples",isDocsHomePage:!1,title:"Report Displayers Examples",description:"Report displayers you can use in your own Mine and some examples created for specific data types in modMine, FlyMine and metabolicMine.",source:"@site/docs/webapp/report-page/report-displayers-examples.md",slug:"/webapp/report-page/report-displayers-examples",permalink:"/im-docs/docs/next/webapp/report-page/report-displayers-examples",editUrl:"https://github.com/intermine/im-docs/docs/webapp/report-page/report-displayers-examples.md",version:"current"},l=[{value:"SequenceFeature summary",id:"sequencefeature-summary",children:[]},{value:"Protein sequence",id:"protein-sequence",children:[]},{value:"GBrowse",id:"gbrowse",children:[]},{value:"Homologues",id:"homologues",children:[]},{value:"Gene structure",id:"gene-structure",children:[]},{value:"Gene Ontology",id:"gene-ontology",children:[]},{value:"UniProt comments",id:"uniprot-comments",children:[]},{value:"Interaction network",id:"interaction-network",children:[]},{value:"Overlapping features",id:"overlapping-features",children:[]},{value:"Complexes - Protein interactions",id:"complexes---protein-interactions",children:[]},{value:"Specific Displayers",id:"specific-displayers",children:[]}],p={toc:l};function c(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Report displayers you can use in your own Mine and some examples created for specific data types in modMine, FlyMine and metabolicMine."),Object(i.b)("p",null,"The following displayers can all be used for data loaded by standard InterMine parsers. To see how to configure them check out FlyMine's ",Object(i.b)("inlineCode",{parentName:"p"},"webconfig-model.xml"),"."),Object(i.b)("h3",{id:"sequencefeature-summary"},"SequenceFeature summary"),Object(i.b)("p",null,"Applicable for any SequenceFeature. It shows length, sequence export, chromosome location, cyto location and SO term ","(","where present",")","."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<reportdisplayer javaClass="org.intermine.bio.web.displayer.SequenceFeatureDisplayer"\n    jspName="model/sequenceFeatureDisplayer.jsp"\n    replacesFields="chromosome,chromosomeLocation,sequence,length,sequenceOntologyTerm,locations,cytoLocation"\n    placement="summary"\n    types="SequenceFeature"/>\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"A Sequence feature displayer in metabolicMine.",src:n(847).default})),Object(i.b)("h3",{id:"protein-sequence"},"Protein sequence"),Object(i.b)("p",null,"Applicable for Protein. It shows length, sequence export."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<reportdisplayer javaClass="org.intermine.bio.web.displayer.ProteinSequenceDisplayer"\n    jspName="model/proteinSequenceDisplayer.jsp"\n    replacesFields="sequence"\n    placement="summary"\n    types="Protein"/>\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"A Protein sequence displayer in FlyMine.",src:n(848).default})),Object(i.b)("h3",{id:"gbrowse"},"GBrowse"),Object(i.b)("p",null,"Shows an inline image from a configured GBrowse instance."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<reportdisplayer javaClass="org.intermine.bio.web.displayer.GBrowseDisplayer"\n    jspName="model/gbrowseDisplayer.jsp"\n    replacesFields=""\n    placement="Genes"\n    types="SequenceFeature"/>\n')),Object(i.b)("p",null,"This also needs two properties to be configured in the ",Object(i.b)("inlineCode",{parentName:"p"},"minename.properties")," file: ",Object(i.b)("inlineCode",{parentName:"p"},"gbrowse.prefix")," and ",Object(i.b)("inlineCode",{parentName:"p"},"gbrowse_image.prefix")," which give the location of a running GBrowse instance."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"gbrowse.prefix=http://www.flymine.org/cgi-bin/gbrowse\ngbrowse_image.prefix=http://www.flymine.org/cgi-bin/gbrowse_img\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"A Genome browser view in FlyMine.",src:n(849).default})),Object(i.b)("h3",{id:"homologues"},"Homologues"),Object(i.b)("p",null,"Shows a table of organism and homologous genes of homologues per organism."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<reportdisplayer javaClass="org.intermine.bio.web.displayer.HomologueDisplayer"\n    jspName="model/homologueDisplayer.jsp"\n    replacesFields="homologues"\n    placement="Homology"\n    parameters="{\'dataSets\': [\'TreeFam data set\', \'KEGG orthologues data set\']}"\n    types="Gene"/>\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"A Homologues displayer in FlyMine.",src:n(850).default})),Object(i.b)("p",null,"Note that FlyMine includes a specific displayer to show the twelve Drosophila species as a phylogenetic tree."),Object(i.b)("h3",{id:"gene-structure"},"Gene structure"),Object(i.b)("p",null,"Displays transcripts, exons, introns, UTRs and CDSs if present in the model and for the particular organism. It can be added to report pages for any of these feature types and will find the parent gene and show all transcripts, highlighting the feature of the actual report page."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<reportdisplayer javaClass="org.intermine.bio.web.displayer.GeneStructureDisplayer"\n    jspName="model/geneStructureDisplayer.jsp"\n    replacesFields="transcripts,exons,CDSs,introns,UTRs,fivePrimeUTR,threePrimeUTR"\n    placement="Genomics"\n    types="Gene,Transcript,Exon,Intron,UTR,CDS"/>\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"A Gene structure displayer in FlyMine.",src:n(851).default})),Object(i.b)("h3",{id:"gene-ontology"},"Gene Ontology"),Object(i.b)("p",null,"Simple display of GO terms and evidence codes for a gene, grouped by branch in the ontology. It groups by the three main ontologies ","(","function, process and component",")",", so you may need to run the GO source."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<reportdisplayer javaClass="org.intermine.bio.web.displayer.GeneOntologyDisplayer"\n    jspName="model/geneOntologyDisplayer.jsp"\n    replacesFields="goAnnotation,ontologyAnnotations"\n    placement="Function"\n    types="Gene"/>\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"A Gene ontology displayer in modMine.",src:n(852).default})),Object(i.b)("h3",{id:"uniprot-comments"},"UniProt comments"),Object(i.b)("p",null,"A clear view of curated comments from UniProt ","(","SwissProt",")"," applied to a protein, or for a gene will show comments from all proteins of the gene."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<reportdisplayer javaClass="org.intermine.bio.web.displayer.UniProtCommentsDisplayer"\n    jspName="model/uniProtCommentsDisplayer.jsp"\n    replacesFields=""\n    placement="summary"\n    types="Gene,Protein"/>\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"A Uniprot curated comments displayer in metabolicMine.",src:n(853).default})),Object(i.b)("h3",{id:"interaction-network"},"Interaction network"),Object(i.b)("p",null,"Uses the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://cytoscapeweb.cytoscape.org/"}),"Cytoscape Web plugin")," to display physical and genetics interactions. The interaction displayer links to report pages, allows creation of a gene list of the whole network and can show tabular interaction data. Read NetworkDisplayer for details."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<reportdisplayer javaClass="org.intermine.bio.web.displayer.CytoscapeNetworkDisplayer"\n    jspName="model/cytoscapeNetworkDisplayer.jsp"\n    replacesFields="interactions"\n    placement="Interactions"\n    types="Gene,Protein"/>\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"An Interactions displayer in FlyMine.",src:n(854).default})),Object(i.b)("h3",{id:"overlapping-features"},"Overlapping features"),Object(i.b)("p",null,"A summary view of features that overlap the chromosome location of the reported feature. If the gene structure displayer is also used, it will exclude any features that are part of the same gene model i.e. it won't report that a gene overlaps it's own exons."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<reportdisplayer javaClass="org.intermine.bio.web.displayer.OverlappingFeaturesDisplayer"\n    jspName="model/overlappingFeaturesDisplayer.jsp"\n    replacesFields="overlappingFeatures"\n    placement="Genomics"\n    types="SequenceFeature"/>\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"An Overlapping features displayer in modMine.",src:n(855).default})),Object(i.b)("h3",{id:"complexes---protein-interactions"},"Complexes - Protein interactions"),Object(i.b)("p",null,"Viewer displaying complex interactions. Data must be loaded from IntAct. Original Source: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://interactionviewer.org/"}),"http://interactionviewer.org/"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<reportdisplayer javaClass="org.intermine.bio.web.displayer.ComplexDisplayer"\n                 jspName="model/complexDisplayer.jsp"\n                 replacesFields=""\n                 placement="summary"\n                 types="Complex"/>\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"A Complex interaction displayer in HumanMine.",src:n(856).default})),Object(i.b)("h3",{id:"specific-displayers"},"Specific Displayers"),Object(i.b)("p",null,"There are some displayers created for specific data sets in FlyMine, metabolicMine or modMine that may not be re-usable in other Mines but could be adapted or provide inspiration."),Object(i.b)("p",null,Object(i.b)("img",{alt:"JBrowse genome browser in metabolicMine.",src:n(857).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"FlyAtlas gene experssion data in FlyMine, this uses the Google Data Vizualization API JavaScript library to render an interactive graph in the browser.",src:n(858).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"A phylogenetic tree of Drosophila species displayed using the [jsPhyloSVG](http://www.jsphylosvg.com/) JavaScript library in FlyMine.",src:n(859).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"Heatmap of fly gene expression in modMine, this makes use of [canvasXpress](http://www.canvasxpress.org/) JavaScript library.",src:n(860).default})))}c.isMDXComponent=!0},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,o(o({ref:t},p),{},{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},847:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/sequence_feature_displayer-f56fec8f5e918ea6672688abe7057be0.png"},848:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},849:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gbrowse_displayer-3111956e8c752844f910a2844617c132.png"},850:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/homologues_displayer-26076d290bbf2ca3fd858505f1c6cf1f.png"},851:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gene_structure_displayer-4b5ef2d03f29bb7470e92ffe85fabf66.png"},852:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/go_displayer-52fc908162f9acc3a1d91c6ccda923ca.png"},853:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/uniprot_comments_displayer-3330cf04fbb73e4fb64d4f4a473cffbd.png"},854:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/interactions_displayer-29a03461035091003730d77911ae4692.png"},855:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/overlapping_features_displayer-795213794f607492db6841ddf2c4029c.png"},856:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/complex-viewer-87dee383467e7216f2444053d94e17fc.png"},857:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/jBrowse_displayer-3015228593576266995816c20ff06bb5.png"},858:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/FlyAtlas_expression_displayer-a7995ec34b8f14b54fbaf89aa51030f3.png"},859:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/drosophila_homology_displayer-d6669402f6aac868d495e95b5c9987ac.png"},860:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/modMine-heatmap-ccd61514d7b592555d4bb575a6cb5851.png"}}]);