(window.webpackJsonp=window.webpackJsonp||[]).push([[504],{575:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),i=(n(0),n(707)),a={title:"List enrichment widgets statistics"},c={unversionedId:"webapp/lists/list-widgets/enrichment-widgets",id:"webapp/lists/list-widgets/enrichment-widgets",isDocsHomePage:!1,title:"List enrichment widgets statistics",description:"Enrichment widgets are located on the list analysis page. There are a number of different types of enrichment widgets, but all list a term, a count and an associated p-value. The term can be something like a publication name or a GO term. The count is the number of times that term appears for objects in your list. The p-value is the probability that result occurs by chance, thus a lower p-value indicates greater enrichment.",source:"@site/docs/webapp/lists/list-widgets/enrichment-widgets.md",slug:"/webapp/lists/list-widgets/enrichment-widgets",permalink:"/im-docs/docs/next/webapp/lists/list-widgets/enrichment-widgets",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/webapp/lists/list-widgets/enrichment-widgets.md",version:"current",sidebar:"someSidebar",previous:{title:"Embedding widgets on a HTML page",permalink:"/im-docs/docs/next/webapp/lists/list-widgets/embedding"},next:{title:"Template Queries",permalink:"/im-docs/docs/next/webapp/template-queries/index"}},s=[{value:"Method",id:"method",children:[]},{value:"Multiple Test Correction",id:"multiple-test-correction",children:[{value:"None",id:"none",children:[]},{value:"Bonferroni",id:"bonferroni",children:[]},{value:"Holm-Bonferroni",id:"holm-bonferroni",children:[]},{value:"Benjamini Hochberg",id:"benjamini-hochberg",children:[]},{value:"Gene length correction",id:"gene-length-correction",children:[]},{value:"Reference population",id:"reference-population",children:[]}]},{value:"References",id:"references",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Enrichment widgets are located on the list analysis page. There are a number of different types of enrichment widgets, but all list a term, a count and an associated p-value. The term can be something like a publication name or a GO term. The count is the number of times that term appears for objects in your list. The p-value is the probability that result occurs by chance, thus a lower p-value indicates greater enrichment."),Object(i.b)("h2",{id:"method"},"Method"),Object(i.b)("p",null,"The p-value is calculated using the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Hypergeometric_distribution"}),"Hypergeometric distribution"),". Four numbers are used to calculate each p-value:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"(M choose k) (N-M choose n-k)\nP =   -----------------------------\n         N choose n\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"n")),Object(i.b)("p",null,"the number of objects in your list"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"N")),Object(i.b)("p",null,"the number of objects in the reference population"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"k")),Object(i.b)("p",null,"the number of objects annotated with this item in your list"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"M")),Object(i.b)("p",null,"the number of objects annotated with item in the reference population"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://commons.apache.org/proper/commons-math/javadocs/api-2.2/org/apache/commons/math/distribution/HypergeometricDistributionImpl.html"}),"Apache library - Hypergeometric Distribution")),Object(i.b)("h2",{id:"multiple-test-correction"},"Multiple Test Correction"),Object(i.b)("p",null,"When multiple tests ","(","statistical inferences",")"," are run in parallel, the probability of false positive ","(","Type I",")"," errors increases. To address this issue, many multiple test corrections have been developed to take into account the number of tests being carried out and to correct the p-values accordingly. Enrichment widgets have three different multiple test corrections: Bonferroni, Holm-Bonferroni, and Benjamini Hochberg."),Object(i.b)("p",null,'In enrichment widgets the number of "tests run" is the number of terms associated with objects in the "reference list". Please Note, in earlier versions of InterMine ',"(","0.95 and below",")",' the number of "tests run" was the number of terms associated with objects in the "query list". This change has made the multiple test correction more rigorous, and will reduce the occurrence of spuriously low p-values.'),Object(i.b)("p",null,"Each enrichment widget has four test correction options, which are:"),Object(i.b)("h3",{id:"none"},"None"),Object(i.b)("p",null,"No test correction performed, these are the raw results. These p-values will be lower ","(","more significant",")"," than if test correction was applied."),Object(i.b)("h3",{id:"bonferroni"},"Bonferroni"),Object(i.b)("p",null,"Bonferroni is the simplest and most conservative method of multiple test correction. The number of tests run ","(","the number of terms associated with objects in the reference list",")"," is multiplied by the uncorrected p-value of each term to give the corrected p-value."),Object(i.b)("h3",{id:"holm-bonferroni"},"Holm-Bonferroni"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"Adjusted p-value = p-value x (number of tests - rank)\n")),Object(i.b)("h3",{id:"benjamini-hochberg"},"Benjamini Hochberg"),Object(i.b)("p",null,"This correction is the less stringent than the Bonferroni, and therefore tolerates more false positives."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"Adjusted p-value = p-value x (number of tests/rank)\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The p-values of each gene are ranked from the smallest to largest."),Object(i.b)("li",{parentName:"ol"},"The p-value is multiplied by the total number of tests divided by its rank.")),Object(i.b)("h3",{id:"gene-length-correction"},"Gene length correction"),Object(i.b)("p",null,"The probability of a given set of genes being hit in a ChIP experiment is amongst other things proportional to their length -- very long genes are much more likely to be randomly hit than very short genes are. This is an issue for some widgets -- for example, if a given GO term ","(","such as gene expression regulation",")"," is associated with very long genes in general, these will be much more likely to be hit in a ChIP experiment than the ones belonging to a GO term with very short genes on average. The p-values should be scaled accordingly to take this into account. There are a number of different implementations of corrections, we have chosen the simplest one. The algorithm was developed by Taher and Ovcharenko ","(","2009",")"," for correcting GO enrichment. Corrected probability of observing a given GO term is equal to the original GO probability times the correction coefficient CCGO defined for each GO term."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"Adjusted P = P x CCGO\n")),Object(i.b)("p",null,"where the correction coefficient CCGO is calculated as:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"LGO/LWH\nCCGO = ----------------\nNGO/NWG\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"LGO")),Object(i.b)("p",null,"Average length of genes associated with a GO term"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"LWG")),Object(i.b)("p",null,"Average length of the genes in the whole genome"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NGO")),Object(i.b)("p",null,"Number of genes in the genome associated with this GO term"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NWG")),Object(i.b)("p",null,"Total number of genes in the whole genome."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nThe relevant ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/intermine/blob/dev/intermine/webapp/src/main/java/org/intermine/web/logic/widget/ErrorCorrection.java"}),"InterMine source"),"."),Object(i.b)("h3",{id:"reference-population"},"Reference population"),Object(i.b)("p",null,"The reference population is by default the collection of ",Object(i.b)("strong",{parentName:"p"},"all the genes with annotation")," for the given organism. This can be changed to any available list of genes."),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("p",null,"|"," ",Object(i.b)("strong",{parentName:"p"},"GOstat: Find statistically overrepresented Gene Ontologies within a group of genes")," ","|"," Beissbarth T, Speed TP. ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://bioinformatics.oxfordjournals.org/cgi/content/abstract/20/9/1464"}),"Bioinformatics"),". 6.2004; 20","(","9",")",": 1464-1465. ","|"," PubMed id: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.ncbi.nlm.nih.gov/pubmed/14962934"}),"14962934")),Object(i.b)("p",null,"|"," ",Object(i.b)("strong",{parentName:"p"},"GO::TermFinder--open source software for accessing Gene Ontology information and finding significantly enriched Gene Ontology terms associated with a list of genes")," ","|"," Boyle EI, Weng S, Gollub J, Jin H, Botstein D, Cherry JM, Sherlock G. ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://bioinformatics.oxfordjournals.org/cgi/content/abstract/bth456v1"}),"Bioinformatics"),". 2004 Dec 12;20","(","18",")",":3710-5. Epub 2004 Aug 5. ","|"," PubMed id: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.ncbi.nlm.nih.gov/pubmed/15297299?dopt=Abstract%2015297299"}),"15297299")),Object(i.b)("p",null,"|"," ",Object(i.b)("strong",{parentName:"p"},"Controlling the false discovery rate: a practical and powerful approach to multiple testing")," ","|"," Benjamini, Yoav; Hochberg, Yosef ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.jstor.org/stable/2346101"}),"Journal of the Royal Statistical Society"),". 1995, Series B ","(","Methodological",")"," 57 ","(","1",")",": 289--300."),Object(i.b)("p",null,"|"," ",Object(i.b)("strong",{parentName:"p"},"Augmentation Procedures for Control of the Generalized Family-Wise Error Rate and Tail Probabilities for the Proportion of False Positives")," ","|"," van der Laan, Mark J.; Dudoit, Sandrine; and Pollard, Katherine S. ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.bepress.com/sagmb/vol3/iss1/art15"}),"Statistical Applications in Genetics and Molecular Biology"),": Vol. 3 : Iss. 1, Article 15, 2004."),Object(i.b)("p",null,"|"," ",Object(i.b)("strong",{parentName:"p"},"What's wrong with Bonferroni adjustments")," ","|"," Perneger, TV. ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.bmj.com/content/316/7139/1236"}),"BMJ Publishing Group"),". 1998;316:1236."),Object(i.b)("p",null,"|"," ",Object(i.b)("strong",{parentName:"p"},"Variable locus length in the human genome leads to ascertainment bias in functional inference for non-coding elements")," ","|"," Taher, L. and Ovcharenko, I. ","(","2009",")",", ",Object(i.b)("inlineCode",{parentName:"p"},"Bioinformatics <"),"[",Object(i.b)("inlineCode",{parentName:"p"},"http://bioinformatics.oxfordjournals.org/content/25/5/578>"),"]","(",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://bioinformatics.oxfordjournals.org/content/25/5/578%5C"}),"http://bioinformatics.oxfordjournals.org/content/25/5/578\\"),") Vol. : Iss. 5: 578--584."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nYou can read more about ",Object(i.b)("strong",{parentName:"p"},"Hypergeometric Distribution")," at ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.quantitativeskills.com/sisa/distributions/hypghlp.htm"}),"Simple Interactive Statistical Analysis")," or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://mathworld.wolfram.com/HypergeometricDistribution.html"}),"Wolfram MathWorld"),". ",Object(i.b)("strong",{parentName:"p"},"Bonferroni Correction")," is discussed in this ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://mathworld.wolfram.com/BonferroniCorrection.html"}),"Wolfram MathWorld")," article."))}b.isMDXComponent=!0},707:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,m=p["".concat(a,".").concat(u)]||p[u]||h[u]||i;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);