(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{607:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),l=(r(0),r(708)),i={title:"Keyword Search"},o={unversionedId:"webapp/keyword-search/index",id:"webapp/keyword-search/index",isDocsHomePage:!1,title:"Keyword Search",description:"InterMine uses Solr for its keyword search index.",source:"@site/docs/webapp/keyword-search/index.md",slug:"/webapp/keyword-search/index",permalink:"/im-docs/docs/next/webapp/keyword-search/index",editUrl:"https://github.com/intermine/im-docs/docs/webapp/keyword-search/index.md",version:"current",sidebar:"someSidebar",previous:{title:"QueryBuilder",permalink:"/im-docs/docs/next/webapp/query-builder/index"},next:{title:"General Layout",permalink:"/im-docs/docs/next/webapp/layout/index"}},c=[{value:"Config file",id:"config-file",children:[]},{value:"Search Results",id:"search-results",children:[]},{value:"Search Index",id:"search-index",children:[]},{value:"Solr",id:"solr",children:[]},{value:"Solr Partial String Match Configuration",id:"solr-partial-string-match-configuration",children:[]}],s={toc:c};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"InterMine uses Solr for its keyword search index."),Object(l.b)("p",null,"By default the index will include the text fields of all objects in the database. Each object in the database becomes a document in the index with text attributes attached. You can configure classes to ignore, such as locations and scores that don't provide text information. You can also add related information to an object, for example, you can configure that the synonyms, pathways and GO terms should be included in the Gene's entry."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"fields in the results")),Object(l.b)("p",null,"determined by WebConfigModel"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"type")),Object(l.b)("p",null,"class of object"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"score")),Object(l.b)("p",null,"determined by the Lucene search, from 0 to 1"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"lists")),Object(l.b)("p",null,"Users can make lists from search results but only if all results are of the same type."),Object(l.b)("p",null,"To inspect the index directly: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8983/solr/"}),"http://localhost:8983/solr/")),Object(l.b)("h2",{id:"config-file"},"Config file"),Object(l.b)("p",null,"The config file is located at ",Object(l.b)("inlineCode",{parentName:"p"},"MINE_NAME/dbmodel/resources/keyword_search.properties")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"index.temp.directory"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"directory for search index")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"index.references.","<","CLASS","_","NAME",">"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"eg. index.references.Gene"),Object(l.b)("li",{parentName:"ul"},"index these objects' references in addition to the normal indexing"),Object(l.b)("li",{parentName:"ul"},"eg. if Gene.pathways is indexed so that when users search for pathways, the associated genes are also returned as search results")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"index.ignore"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"do not index these classes")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"index.ignore.fields"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"do not index these fields"),Object(l.b)("li",{parentName:"ul"},"eg ",Object(l.b)("inlineCode",{parentName:"li"},"index.ignore.fields = SNP.type SNP.alleles"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"facets"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"Will appear as filters on the left panel in the search results"),Object(l.b)("li",{parentName:"ul"},"choose ",Object(l.b)("inlineCode",{parentName:"li"},"single")," for references, ",Object(l.b)("inlineCode",{parentName:"li"},"multi")," for collections"),Object(l.b)("li",{parentName:"ul"},"Note: you must index any references used as facets. ","(","see above at '''index.references'''",")",".")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"index.boost.","<","CLASS","_","NAME",">"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"weight this class heavier than other objects")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"search.debug"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"debug setting off, used only for testing")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"index.optimize"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"Boolean, defaults to false."),Object(l.b)("li",{parentName:"ul"},"If set to ",Object(l.b)("inlineCode",{parentName:"li"},"true"),", reorganises the index so chunks are placed together in storage, which might improve the search time. ","(","Similar to defragmentation of a hard disk",")",". Requires an empty space in the storage as large as the index, and takes additional time."))))),Object(l.b)("h2",{id:"search-results"},"Search Results"),Object(l.b)("p",null,"The fields displayed in the keyword search results are determined by the WebConfigModel file."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"If the fields are ClassKeys:"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"links in blue"),Object(l.b)("li",{parentName:"ul"},"shown at the top")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"If the fields are not ClassKeys:"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"NOT linked, black text"),Object(l.b)("li",{parentName:"ul"},"shown below the links"))))),Object(l.b)("h2",{id:"search-index"},"Search Index"),Object(l.b)("p",null,"You can rebuild the search index by running this command in your mine:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"~/git/flymine $ ./gradlew postprocess -Pprocess=create-search-index\n")),Object(l.b)("p",null,"You would need to re-release your webapp."),Object(l.b)("p",null,"To inspect the index directly: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8983/solr/"}),"http://localhost:8983/solr/")),Object(l.b)("h2",{id:"solr"},"Solr"),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/next/system-requirements/software/solr"}),"Solr")," for details on how to install Solr."),Object(l.b)("h2",{id:"solr-partial-string-match-configuration"},"Solr Partial String Match Configuration"),Object(l.b)("p",null,"In its default configuration, Solr will not match partial search terms. For example a gene named ",Object(l.b)("em",{parentName:"p"},"REVOLUTA"),' will be returned in the search results for search term "REVOLUTA" but not for search term "REV." In order to have Solr return partial string matches, you must edit its configuration on the Solr server. To do this:'),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"ADD the following to /var/solr/data/","[","mine","]","-search/conf/managed-schema. ","(","This example implements it for hits against Gene.primaryIdentifier and Gene.secondaryIdentifier.",")")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markup"}),'<fieldType name="text_ngram" class="solr.TextField" positionIncrementGap="100">\n  <analyzer type="index">\n    <tokenizer class="solr.WhitespaceTokenizerFactory"/>\n    <filter class="solr.NGramFilterFactory" minGramSize="1" maxGramSize="50"/>\n    <filter class="solr.LowerCaseFilterFactory"/>\n  </analyzer>\n  <analyzer type="query">\n    <tokenizer class="solr.WhitespaceTokenizerFactory"/>\n    <filter class="solr.LowerCaseFilterFactory"/>\n  </analyzer>\n</fieldType>\n<field name="gene_primaryidentifier" type="text_ngram" indexed="true" stored="true"/>\n<field name="gene_secondaryidentifier" type="text_ngram" indexed="true" stored="true"/>\n')),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"REMOVE the gene","_","primaryidentifier and gene","_","secondaryidentifier field definitions from the earlier part of the file. They look like this:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markup"}),'<field name="gene_primaryidentifier" type="analyzed_string" multiValued="true" indexed="true" required="false" stored="false"/>\n<field name="gene_secondaryidentifier" type="analyzed_string" multiValued="true" indexed="true" required="false" stored="false"/>\n')),Object(l.b)("p",null,'OR, simply UPDATE the existing records, replacing the parameters with: type="text',"_",'ngram" indexed="true" stored="true".'),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"RESTART Solr to load the new config, e.g. under System V: :")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"$ systemctl restart solr\n")),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"REBUILD the search index using the Solr-related postprocesses:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"./gradlew postprocess -Pprocess=create-search-index\n")),Object(l.b)("p",null,"Your keyword search will now return results on partial matches for the attributes that you configured in Solr ","(","Gene.primaryIdentifier and Gene.secondaryIdentifier in this example",")","."))}b.isMDXComponent=!0},708:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(r),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return r?n.a.createElement(m,o(o({ref:t},s),{},{components:r})):n.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);