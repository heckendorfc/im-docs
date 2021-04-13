(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{170:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(545)),o={title:"Region Search"},c={unversionedId:"webapp/region-search/index",id:"version-4.0.0/webapp/region-search/index",isDocsHomePage:!1,title:"Region Search",description:"Configuration",source:"@site/versioned_docs/version-4.0.0/webapp/region-search/index.md",slug:"/webapp/region-search/index",permalink:"/im-docs/docs/4.0.0/webapp/region-search/index",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/webapp/region-search/index.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"General Layout",permalink:"/im-docs/docs/4.0.0/webapp/layout/index"},next:{title:"Database and Web application",permalink:"/im-docs/docs/4.0.0/webapp/properties/intermine-properties"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"Region Search V2",id:"region-search-v2",children:[]},{value:"Adding the strand specific search option",id:"adding-the-strand-specific-search-option",children:[]}],l={toc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"struts-config-model.xml")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markup"}),'<action path="/initGenomicRegionSearchOptions" type="org.intermine.bio.web.struts.GenomicRegionSearchOptionsController"/>\n<action path="/genomicRegionSearch" forward="genomicRegionSearchOptions.page"/>\n<action path="/genomicRegionSearchResults" forward="genomicRegionSearchResults.page"/>\n<action input="/genomicRegionSearchOptionsBase.jsp" path="/genomicRegionSearchAction" name="genomicRegionSearchForm" scope="request" type="org.intermine.bio.web.struts.GenomicRegionSearchAction" >\n  <forward name="genomicRegionSearchResults" path="/genomicRegionSearchResults.do" redirect="false"/>\n  <forward name="genomicRegionSearchOptions" path="/genomicRegionSearch.do" redirect="true"/>\n</action>\n<action path="/genomicRegionSearchAjax" type="org.intermine.bio.web.struts.GenomicRegionSearchAjaxAction"/>\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"tiles-defs-model.xml")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markup"}),'<definition name="genomicRegionSearchOptions.page" extends="layout.template">\n  <put name="body" value="genomicRegionSearchOptions.tile" />\n  <put name="pageName" value="genomicRegionSearch" />\n</definition>\n<definition name="genomicRegionSearchOptions.tile" path="/model/genomicRegionSearchOptionsBase.jsp"  controllerUrl="/initGenomicRegionSearchOptions.do" />\n<definition name="genomicRegionSearchResults.page" extends="layout.template">\n  <put name="body" value="/model/genomicRegionSearchResultsBase.jsp" />\n  <put name="pageName" value="genomicRegionSearchResults" />\n</definition>\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"struts-config-form-model.xml")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markup"}),'<form-bean name="genomicRegionSearchForm" type="org.intermine.bio.web.struts.GenomicRegionSearchForm">\n  <form-property name="organism" type="java.lang.String"/>\n  <form-property name="featureTypes" type="java.lang.String[]"/>\n  <form-property name="pasteInput" type="java.lang.String"/>\n  <form-property name="fileInput" type="org.apache.struts.upload.FormFile"/>\n  <form-property name="whichInput" type="java.lang.String"/>\n  <form-property name="dataFormat" type="java.lang.String" initial="isNotInterBaseCoordinate"/>\n  <form-property name="extendedRegionSize" type="java.lang.String"/>\n</form-bean>\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"model.properties")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"genomicRegionSearch.title = Overlap features search from a new list of Genomic Regions\ngenomicRegionSearch.isNotMultipart = The request is not a file upload request\ngenomicRegionSearch.spanMisformatted = {0} is in a wrong format\ngenomicRegionSearch.spanFieldSelection = Please select some {0}\ngenomicRegionSearch.noSpanPaste = You need to type/paste in some genomic regions\ngenomicRegionSearch.noSpanFile = You need to type/paste in some genomic regions or select a file to upload\ngenomicRegionSearch.isNotText = {0} is an invalid file type - file must be in plain text format\ngenomicRegionSearch.noSpanFileOrEmpty = The file you specified does not exist or is empty\ngenomicRegionSearch.spanInWrongformat = {0} is in a wrong format\ngenomicRegionSearch.spanInputType = Input type can't be solved\ngenomicRegionSearch.allRegionInvalid = All regions are invalid. Please do a new search.\ngenomicRegionSearch.organismEmpty = Organism is empty, please check the data is loaded.\n\ngenomicRegionSearchOptions.tab = genomicRegionSearch\ngenomicRegionSearchOptions.title = Genomic Regions Search\ngenomicRegionSearchResults.tab = genomicRegionSearch\ngenomicRegionSearchResults.title = Genomic Regions Search Results\n\nmenu.genomicRegionSearch = Regions\nmenu.genomicRegionSearchOptions = Genomic Region Search\nmenu.genomicRegionSearchResults = Genomic Region Search Results\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"web.properties")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"genomicRegionSearch.display = true\ngenomicRegionSearch.service =\ngenomicRegionSearch.optionsJavascript =\ngenomicRegionSearch.resultsJavascript =\ngenomicRegionSearch.optionsCss =\ngenomicRegionSearch.resultsCss =\n## Make sure pre-defined organisms have chromosome location information in the database\ngenomicRegionSearch.defaultOrganisms = D. melanogaster\n## Exclude feature types for all organisms, comma separated\ngenomicRegionSearch.featureTypesExcluded.global = GeneFlankingRegion,YouNameItClass\n## Exclude feature types for specified organism, semi-colon separated\ngenomicRegionSearch.featureTypesExcluded.byOrganism = D. melanogaster:GeneFlankingRegion,YouNameItClass;\ngenomicRegionSearch.defaultSpans = 2L:14615455..14619002\\\\n2R:5866646..5868384\\\\n3R:2578486..2580016\ngenomicRegionSearch.caption = Search for features that overlap a list of genome coordinates you enter or upload, e.g. <b>2L:11334..12296</b>\ngenomicRegionSearch.howTo = <ul>\\\n                              <li>Genome regions in the following formats are accepted:\\\n                                  <ul>\\\n                                      <li><b>chromosome:start..end</b>, e.g. <i>2L:11334..12296</i></li>\\\n                                      <li><b>chromosome:start-end</b>, e.g. <i>2R:5866746-5868284</i> or <i>chrII:14646344-14667746</i></li>\\\n                                      <li><b>tab delimited</b></li>\\\n                                  </ul>\\\n                              <li>Both <b>base coordinate</b> (e.g. BLAST, GFF/GFF3) and <b>interbase coordinate</b> (e.g. UCSC BED, Chado) systems are supported, users need to explicitely select one. By default, the base coordinate is selected.</li>\\\n                              <li>Each genome region needs to take a <b>new line</b>.</li>\\\n                          </ul>\n## Query fields when export results as csv/tsv\ngenomicRegionSearch.query.Gene.views = {0}.primaryIdentifier,{0}.symbol,{0}.chromosomeLocation.locatedOn.primaryIdentifier,{0}.chromosomeLocation.start,{0}.chromosomeLocation.end,{0}.organism.shortName\ngenomicRegionSearch.query.Gene.sortOrder = {0}.chromosomeLocation.start asc\n## 10,000 is the default value, only set if you want a different value\ngenomicRegionSearch.initBatchSize = 10000\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Update defaultOrganisms property as needed")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"to disable genomic region search, set ",Object(r.b)("inlineCode",{parentName:"p"},"genomicRegionSearch.display =")),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"false"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"also add ",Object(r.b)("inlineCode",{parentName:"p"},"genomicRegionSearch")," to ",Object(r.b)("inlineCode",{parentName:"p"},"layout.fixed"),", e.g."))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"layout.fixed = begin,template,templates,bag,customQuery,query,error,api,genomicRegionSearch\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add to '''genomic","_","precompute.properties''', ",Object(r.b)("strong",{parentName:"li"},"note: do not duplicate the query number"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"precompute.query.30 = SELECT a3_.shortName AS a1_, a4_.class AS a2_ FROM org.intermine.model.bio.Organism AS a3_, org.intermine.model.bio.SequenceFeature AS a4_ WHERE a4_.organism CONTAINS a3_\n\nprecompute.query.31 = SELECT a4_.class AS a1_, a5_.name AS a2_, a5_.description AS a3_ FROM org.intermine.model.bio.SequenceFeature AS a4_, org.intermine.model.bio.SOTerm AS a5_ WHERE a4_.sequenceOntologyTerm CONTAINS a5_\n")),Object(r.b)("h2",{id:"region-search-v2"},"Region Search V2"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Search page")),Object(r.b)("p",null,"This page can be kept as it is, but the query can be constructed and sent to the server side by webservice. The Structs elements can be removed."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"GenomicRegionSearchService")),Object(r.b)("p",null,"This class has the methods to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"generate data ","(","JSON",")"," for search page"),Object(r.b)("li",{parentName:"ul"},"parse search form and valid input"),Object(r.b)("li",{parentName:"ul"},"generate search queries ","(","one region with one query",")"),Object(r.b)("li",{parentName:"ul"},"generate results table and download/galaxy links")),Object(r.b)("p",null,"This class can be basically replaced by webservices + html"),Object(r.b)("p",null,"Update IQL query to pathquery"),Object(r.b)("p",null," Currently, region query is constructed by lQL ","(","Intermine Query Language",")"," due to lack of implementation on range constraint in pathquery at the time we developed it. Update IQL to pathqueries and send by webserive, the output will be a list of results tables or a single results table grouped by region."),Object(r.b)("p",null,"See ",Object(r.b)("inlineCode",{parentName:"p"},"GenomicRegionSearchUtil.java#L270-497")),Object(r.b)("p",null,"Query fields:"),Object(r.b)("p",null," In the IQL see ",Object(r.b)("inlineCode",{parentName:"p"},"GenomicRegionSearchUtil.java#L318-323")),Object(r.b)("p",null," In ResultRow see ",Object(r.b)("inlineCode",{parentName:"p"},"GenomicRegionSearchQueryRunner.java#L186-212")),Object(r.b)("p",null," In Results table see ",Object(r.b)("inlineCode",{parentName:"p"},"GenomicRegionSearchService.java#L1106-1112")),Object(r.b)("p",null,"Polling"),Object(r.b)("p",null,"We created a synchronizedMap to hold all the query results and put it in an http request. On the results page, there is a checker ","(","javascript",")"," checking the size of the map, so a progress bar will be updating. The results table will be generated once 10 results return, the pager will be updated dynamically. The whole part will be replaced by InterMine results table."),Object(r.b)("p",null,"See GenomicRegionSearchQueryRunner.java","#","L129-223"),Object(r.b)("p",null,"Results table and download links. Replaced by InterMine results table."),Object(r.b)("h2",{id:"adding-the-strand-specific-search-option"},"Adding the strand specific search option"),Object(r.b)("p",null,"Since InterMine 1.7, there is an additional feature on the Region Search page to restrict searches to a specific strand. The user activates this by ticking a checkbox. For example, Chr1:12345-23456 indicates a region on the + strand; Chr1:23456-12345 indicates a region on the - strand. One situation in which this is useful is when you have a series of BLAST-generated regions on which you'd like to search for upstream gene flanking regions. In this case, there is no point in matching with gene flanking regions on the opposite strand."),Object(r.b)("p",null,"However, adding this feature to the Region Search page requires a new entry in an InterMine installation's ",Object(r.b)("inlineCode",{parentName:"p"},"struts-config-form-model.xml")," file. A new InterMine installation will have this entry but existing updated InterMine installations will not. Therefore, to add this feature for an existing InterMine installation, the steps are to"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add a strandSpecific form property to the installations Region Search form in $MINE/webapp/resources/struts-config-form-model.xml"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markup"}),'<form-bean name="genomicRegionSearchForm" type="org.intermine.bio.web.struts.GenomicRegionSearchForm">\n    ...\n    <form-property name="strandSpecific" type="java.lang.Boolean"/>\n</form-bean>\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Activate this by setting the following property in ",Object(r.b)("inlineCode",{parentName:"p"},"web.properties")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"genomicRegionSearch.enableStrandSpecificSearch = true\n")))),Object(r.b)("p",null,"If this feature is not present or the checkbox is unchecked, then the default behaviour remains, i.e. to search both strands."))}p.isMDXComponent=!0},545:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),b=a,u=m["".concat(o,".").concat(b)]||m[b]||g[b]||r;return t?i.a.createElement(u,c(c({ref:n},l),{},{components:t})):i.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);