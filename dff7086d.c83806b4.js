(window.webpackJsonp=window.webpackJsonp||[]).push([[558],{629:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(708)),o={title:"Query performance (precomputed tables)"},l={unversionedId:"database/performance/precomputing",id:"version-4.0.0/database/performance/precomputing",isDocsHomePage:!1,title:"Query performance (precomputed tables)",description:"InterMine can make use of precomputed tables \\(analagous to materialised views\\) for faster execution of queries. These can represent any SQL query \\(or InterMine query\\) and can automatically be substituted into incoming queries by our own cost-based query optimiser. For example, a precompute that joins three tables could be used in a larger query that includes that join thus reducing the total number of tables joined in the query. Template queries can be precomputed completely so that for any value entered in an editable constraint, the query will be executed from a single database table.",source:"@site/versioned_docs/version-4.0.0/database/performance/precomputing.md",slug:"/database/performance/precomputing",permalink:"/im-docs/docs/4.0.0/database/performance/precomputing",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-4.0.0/database/performance/precomputing.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Data loading performance",permalink:"/im-docs/docs/4.0.0/database/performance/data-loading"},next:{title:"Useful ObjectStore properties",permalink:"/im-docs/docs/4.0.0/database/performance/configuration"}},s=[{value:"Template queries",id:"template-queries",children:[{value:"Webapp",id:"webapp",children:[]},{value:"Command line",id:"command-line",children:[]}]},{value:"Manual specification of queries",id:"manual-specification-of-queries",children:[]},{value:"Dropping precomputed tables",id:"dropping-precomputed-tables",children:[]},{value:"Size of precomputed tables",id:"size-of-precomputed-tables",children:[]},{value:"Template Summaries",id:"template-summaries",children:[]},{value:"FAQs",id:"faqs",children:[{value:"How do you know what to put in the precomputes file?",id:"how-do-you-know-what-to-put-in-the-precomputes-file",children:[]},{value:"How do you tell if what you put in there is actually helping?",id:"how-do-you-tell-if-what-you-put-in-there-is-actually-helping",children:[]},{value:"Were all these queries (in the flymine file) created by hand?",id:"were-all-these-queries-in-the-flymine-file-created-by-hand",children:[]},{value:"PostgreSQL is not using my precomputed table when running a query. Help!",id:"postgresql-is-not-using-my-precomputed-table-when-running-a-query-help",children:[]}]},{value:"A Log Entry",id:"a-log-entry",children:[{value:"IQL",id:"iql",children:[]},{value:"Generated SQL",id:"generated-sql",children:[]},{value:"Optimised sql",id:"optimised-sql",children:[]}]}],c={toc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"InterMine can make use of precomputed tables ","(","analagous to materialised views",")"," for faster execution of queries. These can represent any SQL query ","(","or InterMine query",")"," and can automatically be substituted into incoming queries by our own cost-based query optimiser. For example, a precompute that joins three tables could be used in a larger query that includes that join thus reducing the total number of tables joined in the query. Template queries can be precomputed completely so that for any value entered in an editable constraint, the query will be executed from a single database table."),Object(i.b)("h2",{id:"template-queries"},"Template queries"),Object(i.b)("h3",{id:"webapp"},"Webapp"),Object(i.b)("p",null,"As the superuser, when you create a new template or edit an existing one there is a 'precompute' link on the MyMine saved templates list. Clicking this will create a precomputed table for just this query. It can take some time to create the tables and requests aren't put in a queue so it is not a good idea to click many of these links at once. The 'precompute' link will change to 'precomputed' once there is a precomputed table created."),Object(i.b)("h3",{id:"command-line"},"Command line"),Object(i.b)("p",null,"Precomputing template queries makes sure that public templates will always run quickly. You can precompute all templates saved as the superuser in your userprofile database from the command line. This checks each template first to see if it is already precomputed."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"~/git/flymine $ ./gradlew precomputeTemplates\n")),Object(i.b)("h2",{id:"manual-specification-of-queries"},"Manual specification of queries"),Object(i.b)("p",null,"You can specify any IQL query to precompute in the file ",Object(i.b)("inlineCode",{parentName:"p"},"MINE_NAME/dbmodel/resources/genomic_precompute.properties"),". These allow you to design queries you think are likely to be created commonly or be parts of larger queries. It is the place to put queries that will be used in list upload and widgets to ensure they run fast."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"~/git/flymine $ ./gradlew precomputeQueries\n")),Object(i.b)("p",null,"Here is an example query:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"precompute.query.6 = \n SELECT a1_.id AS a3_, a2_.name AS a4_ \n FROM org.intermine.model.bio.Protein AS a1_, org.intermine.model.bio.Organism AS a2_ \n WHERE a1_.organism CONTAINS a2_\n")),Object(i.b)("p",null,"You can also specify the classes involved:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"precompute.constructquery.20 = Protein organism Organism\n")),Object(i.b)("h2",{id:"dropping-precomputed-tables"},"Dropping precomputed tables"),Object(i.b)("p",null,"To drop all precomputed tables in a database:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"~/git/flymine $ ./gradlew dropPrecomputedTables\n")),Object(i.b)("h2",{id:"size-of-precomputed-tables"},"Size of precomputed tables"),Object(i.b)("p",null,"You can see the names and sizes of all precomputed tables by running this SQL query in psql:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT relname,category,pg_size_pretty(pg_relation_size(oid)) \nFROM pg_class, precompute_index \nWHERE relname NOT LIKE 'pg_%' and relname = name \nORDER BY pg_relation_size(oid) DESC;\n")),Object(i.b)("p",null,"Note that this only lists the table sizes, there may be many indexes associated with each table which may also be large. To see the size of all tables and indexes in the database use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT relname,pg_size_pretty(pg_relation_size(oid)) \nFROM pg_class \nWHERE relname NOT LIKE 'pg_%' \nORDER BY pg_relation_size(oid) DESC;\n")),Object(i.b)("h2",{id:"template-summaries"},"Template Summaries"),Object(i.b)("p",null,"After the templates are precomputed, they are \"summarised\". This means any dropdowns for the templates will be updated to only include valid values for that specific templates. Here's how it's done:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All editable constraints are dropped, non-editable constraints are kept"),Object(i.b)("li",{parentName:"ul"},"Valid values ","(","summaries",")"," for dropdowns are recalculated")),Object(i.b)("p",null,"For example, if you have a template with an option to select a chromosome, all chromosomes in the database will be displayed. However if you have a non-editable constraint setting the value of the organism to be human, only the human chromosomes will be displayed after summarisation."),Object(i.b)("h2",{id:"faqs"},"FAQs"),Object(i.b)("h3",{id:"how-do-you-know-what-to-put-in-the-precomputes-file"},"How do you know what to put in the precomputes file?"),Object(i.b)("p",null,"This is what we did for FlyMine:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Common joins to be done, e.g. Gene to protein"),Object(i.b)("li",{parentName:"ol"},"Widgets - see what queries the widgets are running, add those queries"),Object(i.b)("li",{parentName:"ol"},"Problem areas being reported, certain queries being slower than expected, e.g. interaction queries")),Object(i.b)("p",null,"These three things, along with precomputing templates, seem to work best."),Object(i.b)("p",null,"Ideally we would have some sort of query profiling and would be able to tell where precomputing helps."),Object(i.b)("h3",{id:"how-do-you-tell-if-what-you-put-in-there-is-actually-helping"},"How do you tell if what you put in there is actually helping?"),Object(i.b)("p",null,"When the query is logged, it gives the execution time as well:"),Object(i.b)("p",null,">"," bag tables: 0 ms, generate: 1 ms, optimise: 0 ms, ms, estimate: 9 ms, execute: 61 ms, convert results: 7 ms, extra queries: 0 ms, total: 78 ms, rows: 806"),Object(i.b)("p",null,"This lets you compare query speeds. You can tell the query used a precomputed table by checking the logs for the prefix ",Object(i.b)("inlineCode",{parentName:"p"},"precomp_")),Object(i.b)("h3",{id:"were-all-these-queries-in-the-flymine-file-created-by-hand"},"Were all these queries ","(","in the flymine file",")"," created by hand?"),Object(i.b)("p",null,"No. We ran all of our analysis tools on the list analysis page, e.g GO enrichment widget and captured the queries being run via the logs."),Object(i.b)("h3",{id:"postgresql-is-not-using-my-precomputed-table-when-running-a-query-help"},"PostgreSQL is not using my precomputed table when running a query. Help!"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You must restart Tomcat after you have created all of the precomputed tables or else your new tables won't be used")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"PostgreSQL uses EXPLAIN to decide which query is fastest. If using your table isn't going to be faster, it won't use it. PostgreSQL may be wrong, but that's how it decides which table to use. See"),Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.postgresql.org/docs/9.2/static/using-explain.html"}),"http://www.postgresql.org/docs/9.2/static/using-explain.html")," for"),Object(i.b)("p",{parentName:"li"},"details."))),Object(i.b)("h2",{id:"a-log-entry"},"A Log Entry"),Object(i.b)("p",null,"The LOG records three queries:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"the IQL ","(","InterMine Query Language",")"," query"),Object(i.b)("li",{parentName:"ol"},"the generated SQL query"),Object(i.b)("li",{parentName:"ol"},"the optimised query ","<","-- this is where you will see your precomputed tables used")),Object(i.b)("h3",{id:"iql"},"IQL"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"2013-10-30 16:59:24 INFO                              sqllogger     - (VERBOSE) iql: SELECT DISTINCT a7_, a2_, a3_, a8_, a5_, a6_ FROM org.intermine.model.bio.Interaction AS a1_, org.intermine.model.bio.Gene AS a2_, org.intermine.model.bio.InteractionDetail AS a3_, org.intermine.model.bio.InteractionExperiment AS a4_, org.intermine.model.bio.InteractionTerm AS a5_, org.intermine.model.bio.Publication AS a6_, org.intermine.model.bio.Gene AS a7_, org.intermine.model.bio.InteractionTerm AS a8_ WHERE (a1_.gene2 CONTAINS a2_ AND a1_.details CONTAINS a3_ AND a3_.experiment CONTAINS a4_ AND a3_.relationshipType CONTAINS a5_ AND a4_.publication CONTAINS a6_ AND a1_.gene1 CONTAINS a7_ AND a4_.interactionDetectionMethods CONTAINS a8_ AND a7_.id IN ? AND a2_.id IN ?) ORDER BY a7_.symbol, a2_.symbol, a3_.name, a3_.role1, a3_.role2, a3_.type, a8_.name, a5_.name, a6_.pubMedId 1: [1007850] 2: [2848406]\n")),Object(i.b)("h3",{id:"generated-sql"},"Generated SQL"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"generated sql: SELECT DISTINCT a7_.id AS a7_id, a2_.id AS a2_id, a3_.id AS a3_id, a8_.id AS a8_id, a5_.id AS a5_id, a6_.id AS a6_id, a7_.symbol AS orderbyfield1, a2_.symbol AS orderbyfield2, a3_.name AS orderbyfield3, a3_.role1 AS orderbyfield4, a3_.role2 AS orderbyfield5, a3_.type AS orderbyfield6, a8_.name AS orderbyfield7, a5_.name AS orderbyfield8, a6_.pubMedId AS orderbyfield9 FROM Interaction AS a1_, Gene AS a2_, InteractionDetail AS a3_, InteractionExperiment AS a4_, InteractionTerm AS a5_, Publication AS a6_, Gene AS a7_, InteractionTerm AS a8_, InteractionDetectionMethodsInteractionExperiment AS indirect0 WHERE a1_.gene2Id = a2_.id AND a1_.id = a3_.interactionId AND a3_.experimentId = a4_.id AND a3_.relationshipTypeId = a5_.id AND a4_.publicationId = a6_.id AND a1_.gene1Id = a7_.id AND a4_.id = indirect0.InteractionExperiment AND indirect0.InteractionDetectionMethods = a8_.id AND a7_.id IN (1007850) AND a2_.id IN (2848406) ORDER BY a7_.symbol, a2_.symbol, a3_.name, a3_.role1, a3_.role2, a3_.type, a8_.name, a5_.name, a6_.pubMedId, a7_.id, a2_.id, a3_.id, a8_.id, a5_.id, a6_.id LIMIT 5000\n")),Object(i.b)("h3",{id:"optimised-sql"},"Optimised sql"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"optimised sql: SELECT DISTINCT P98.a1_id AS a7_id, P98.a3_id AS a2_id, P96.id AS a3_id, a8_.id AS a8_id, a5_.id AS a5_id, a6_.id AS a6_id, P98.a1_symbol AS orderbyfield1, P98.a3_symbol AS orderbyfield2, P96.name AS orderbyfield3, P96.role1 AS orderbyfield4, P96.role2 AS orderbyfield5, P96.type AS orderbyfield6, a8_.name AS orderbyfield7, a5_.name AS orderbyfield8, a6_.pubMedId AS orderbyfield9 FROM precomp_45503 AS P98, InteractionDetail AS P96, InteractionExperiment AS P97, InteractionTerm AS a5_, Publication AS a6_, InteractionTerm AS a8_, InteractionDetectionMethodsInteractionExperiment AS indirect0 WHERE P98.a2_id = P96.interactionId AND P96.experimentId = P97.id AND P96.relationshipTypeId = a5_.id AND P97.publicationId = a6_.id AND P97.id = indirect0.InteractionExperiment AND indirect0.InteractionDetectionMethods = a8_.id AND P98.a1_id IN (1007850) AND P98.a3_id IN (2848406) ORDER BY P98.a1_symbol, P98.a3_symbol, P96.name, P96.role1, P96.role2, P96.type, a8_.name, a5_.name, a6_.pubMedId, P98.a1_id, P98.a3_id, P96.id, a8_.id, a5_.id, a6_.id LIMIT 5000\n")),Object(i.b)("p",null,"bag tables: 0 ms, generate: 1 ms, optimise: 0 ms, ms, estimate: 14 ms, execute: 11 ms, convert results: 0 ms, extra queries: 27 ms, total: 53 ms, rows: 1"),Object(i.b)("p",null,"Note the ",Object(i.b)("inlineCode",{parentName:"p"},"FROM")," clause now includes ",Object(i.b)("inlineCode",{parentName:"p"},"precomp_45503"),". You can query for this name in the database:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"select * from precompute_index where name ='precomp_45503';\n")),Object(i.b)("p",null,"You can also run IQL queries directly in the console:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"~/git/flymine $ ./gradlew runIQLQuery -Pquery='some IQL'\n")))}d.isMDXComponent=!0},708:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),b=n,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return a?r.a.createElement(m,l(l({ref:t},c),{},{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);