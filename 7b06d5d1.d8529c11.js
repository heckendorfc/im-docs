(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{381:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(708)),c={title:"Data loading performance"},i={unversionedId:"database/performance/data-loading",id:"version-4.0.0/database/performance/data-loading",isDocsHomePage:!1,title:"Data loading performance",description:"The speed at which InterMine is able to load data into the databases depends on a number of factors including complexity of objects loaded, hardware specifications and so on. Below are some steps you can take to speed up your build.",source:"@site/versioned_docs/version-4.0.0/database/performance/data-loading.md",slug:"/database/performance/data-loading",permalink:"/im-docs/docs/4.0.0/database/performance/data-loading",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-4.0.0/database/performance/data-loading.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Acceptance Tests",permalink:"/im-docs/docs/4.0.0/database/data-integrity-checks/acceptance-tests"},next:{title:"Query performance (precomputed tables)",permalink:"/im-docs/docs/4.0.0/database/performance/precomputing"}},s=[{value:"Java options",id:"java-options",children:[]},{value:"PostgreSQL",id:"postgresql",children:[]},{value:"Hardware",id:"hardware",children:[]},{value:"Storing Items in order",id:"storing-items-in-order",children:[]},{value:"Switching off the DataTracker",id:"switching-off-the-datatracker",children:[]},{value:"Non-InterMineObjects",id:"non-intermineobjects",children:[]},{value:"Proxies",id:"proxies",children:[]},{value:"Results",id:"results",children:[]},{value:"Performance test",id:"performance-test",children:[]}],l={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The speed at which InterMine is able to load data into the databases depends on a number of factors including complexity of objects loaded, hardware specifications and so on. Below are some steps you can take to speed up your build."),Object(o.b)("h2",{id:"java-options"},"Java options"),Object(o.b)("p",null,"Loading data can be memory intensive so there are some Java options that should be tuned to improve performance. See a note about ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/system-requirements/software/java"}),"Java")),Object(o.b)("h2",{id:"postgresql"},"PostgreSQL"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use a recent, correctly configured version of PostgreSQL."),Object(o.b)("li",{parentName:"ul"},"InterMine can actually build a database for production faster than Postgres can undump from a backup file. This is because we generate precomputed tables and indexes in parallel using several CPUs simultaneously. Therefore, it makes sense to complete the last few steps of the build ","(","namely precomputed tables and indexes",")"," on your production servers directly, instead of completing them on the build server and transferring the data across to the production servers.")),Object(o.b)("p",null,"Recommended settings for PostgreSQL are in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/system-requirements/software/postgres/postgres"}),"Installing postgreSQL")),Object(o.b)("h2",{id:"hardware"},"Hardware"),Object(o.b)("p",null,"See a note about ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/system-requirements/hardware/index"}),"Hardware")),Object(o.b)("h2",{id:"storing-items-in-order"},"Storing Items in order"),Object(o.b)("p",null,"When loading objects into the production ObjectStore the order of loading can have a big impact on performance. It is important to store objects before any other objects that reference them. For example, if we have a Gene with a Publication in its evidence collection and a Synonym referencing the Gene, the objects should be stored in the order: Publication, Gene, Synonym. ","(","If e.g. the Gene is stored after the Synonym, a placeholder object is stored in the Gene's place which is later replaced by the real Gene. This takes time",")","."),Object(o.b)("p",null,"Objects are loaded in the order that Items are stored by converter code or the order they appear in an Items XML file. When Items are stored into the items database ","(","during the build or using ",Object(o.b)("inlineCode",{parentName:"p"},"ant -Dsource=sourcename -Daction=retrieve"),")"," you can check if there are improvements possible with this SQL query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT classnamea, name, classnameb, count(*)\nFROM (SELECT distinct itema.classname AS classnamea, name, itemb.classname AS classnameb, itemb.identifier\n      FROM item AS itemA, reference, item AS itemB\n      WHERE itema.id = itemid AND refid = itemb.identifier\n            AND itema.id < itemb.id) AS a\nGROUP BY classnamea, name, classnameb;\n")),Object(o.b)("p",null,"If there are no results, then no improvement can be made. The example below shows that there were 27836 Gene Items stored after the Synonyms that reference them. ",Object(o.b)("inlineCode",{parentName:"p"},"subject")," is the name of the reference in Synonym. Changing the store order would improve performance."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"classnamea |  name   | classnameb | count \n------------+---------+------------+-------\nSynonym    | subject | Gene       | 27836\n")),Object(o.b)("h2",{id:"switching-off-the-datatracker"},"Switching off the DataTracker"),Object(o.b)("p",null,'In order to allow data conflicts to be managed, the system needs to keep track of where each piece of data came from. This is because conflicting values will be resolved by a priority system where one data source is regarded as more reliable than another for a particular field value. However, storing this data takes significant time while running the DataLoader, and can now be switched off on a per-class basis for the whole DataLoading run. This is useful if you know that there will never be any data conflicts for a particular class and the data will not be merged, e.g. Sequence or Location objects. The configuration is found in the properties file for the project, and a configuration line for "datatrackerMissingClasses" is added to the IntegrationWriter entry, like this:'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"integration.production.class=org.intermine.dataloader.IntegrationWriterDataTrackingImpl\nintegration.production.osw=osw.production\nintegration.production.datatrackerMaxSize=100000\nintegration.production.datatrackerCommitSize=10000\nintegration.production.datatrackerMissingClasses=OneAttribute\n")),Object(o.b)("p",null,"The parameter is a comma-separated list of class names for which no tracking data should be stored. All objects which are instances of these classes will be omitted, including subclasses."),Object(o.b)("h2",{id:"non-intermineobjects"},"Non-InterMineObjects"),Object(o.b)("p",null,'For the ultimate performance gain, objects can be stored in the database which are not instances of InterMineObject. Such objects are stored in "flat mode" in an SQL table. Because they do not have an ID, they cannot be referenced by other objects, fetched by ID, or deleted by ID, and they cannot have a collection, or be in a many-to-many collection. They are not stored in the main InterMineObject table, and are not stored in the DataTracker, and are never merged with other objects by the DataLoader. No class hierarchy may exist in these classes, and no dynamic objects may make use of these classes. The objects take much less space in the database than instances of InterMineObject. The objects can however contain attributes and references to other objects, and can be in one-to-many collections of other objects. The full Query interface will work correctly with these simple objects. Simple objects are configured in the Model by declaring the superclass of a class to be "java.lang.Object" in the model description, like this:'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<class name="SimpleObject" is-interface="false" extends="java.lang.Object">\n    <attribute name="name" type="java.lang.String"/>\n    <reference name="employee" referenced-type="Employee" reverse-reference="simpleObjects"/>\n</class>\n')),Object(o.b)("p",null,"We recommend you set ",Object(o.b)("inlineCode",{parentName:"p"},"is-interface"),' to "false" for these objects. There is no need to specify these classes in the "dataTrackerMissingClasses" property as above, because these classes are never tracked.'),Object(o.b)("h2",{id:"proxies"},"Proxies"),Object(o.b)("p",null,"In object/relational mapping systems when an object is read from the database we need to know which objects it is related to in order to follow references and collections. However, if the entire object was fetched each time and then it's referenced objects were fetched, etc. one request could materialise millions of objects. e.g. if Gene references Organism and has a collection of Proteins we would fetch a Gene, it's Organism and Proteins then recursively fetch all references for the new objects."),Object(o.b)("p",null,"Instead we use proxies. ",Object(o.b)("inlineCode",{parentName:"p"},"org.intermine.objectstore.proxy.ProxyReference")," appears to be a standard ",Object(o.b)("inlineCode",{parentName:"p"},"InterMineObject")," but in fact just contains an object id, when any method is called on the proxy the object is materialized automatically. e.g. Calling ",Object(o.b)("inlineCode",{parentName:"p"},"gene.getOrganism()")," returns a ",Object(o.b)("inlineCode",{parentName:"p"},"ProxyReference")," but calling ",Object(o.b)("inlineCode",{parentName:"p"},"gene.getOrganism().getName()")," de-referneces the proxy and returns the name."),Object(o.b)("p",null,"org.intermine.objectstore.proxy.ProxyCollection does the same for collections but wraps an objectstore query required to populate the collection, the collection is materialised in batches as it is iterated over by wrapping a SingletonResults object."),Object(o.b)("h2",{id:"results"},"Results"),Object(o.b)("p",null,"Here are the results of trying some of the above so you can see how effective the various strategies are:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"."),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Load time"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"objs / min"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"DB size"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"tracker size"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Original"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"4.51 min"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1,525,015"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"9.6 GB"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"3.7 GB")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No tracker"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"3.94 min"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1,748,446"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"5.56 GB"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1 GB")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Consequence as SimpleObject"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"3.37 min"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"2,044,448"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"4.6 GB"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1.4 GB")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Both of above"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"3.20 min"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"2,153,291"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"4.1 GB"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1 GB")))),Object(o.b)("h2",{id:"performance-test"},"Performance test"),Object(o.b)("p",null,"In objectstore/test run 'ant test-performance' ","(","requires unittest database, currently on beta branch",")"),Object(o.b)("p",null,"Build server with SATA drives:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"test-performance:\n[run-performance-test] Starting performance test...\n[Finalizer] INFO com.zaxxer.hikari.pool.HikariPool - HikariCP pool db.unittest is being shutdown.\n[run-performance-test] Stored 10000 employee objects, took: 19870ms\n[run-performance-test] Stored 10000 employee objects, took: 15231ms\n[run-performance-test] Stored 10000 employee objects, took: 15811ms\n[run-performance-test] Total store time: 50912ms. Average time per thousand: 1697.067ms.\n[run-performance-test] \n[run-performance-test] Reading all employee objects with empty object cache\n[run-performance-test] Read  10000 employee objects, took: 720ms.\n[run-performance-test] Read  20000 employee objects, took: 272ms.\n[run-performance-test] Read  30000 employee objects, took: 230ms.\n[run-performance-test] totalTime: 1244 rowCount: 30000\n[run-performance-test] Finished reading 30000 employee objects, took: 1244ms. Average time per thousand: 41.467ms.\n")),Object(o.b)("p",null,"Workstation with SSDs:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"[run-performance-test] Starting performance test...\n[run-performance-test] Stored 10000 employee objects, took: 8303ms\n[run-performance-test] Stored 10000 employee objects, took: 7334ms\n[run-performance-test] Stored 10000 employee objects, took: 7727ms\n[run-performance-test] Total store time: 23364ms. Average time per thousand: 778.800ms.\n[run-performance-test]\n[run-performance-test] Reading all employee objects with empty object cache\n[run-performance-test] Read  10000 employee objects, took: 444ms.\n[run-performance-test] Read  20000 employee objects, took: 126ms.\n[run-performance-test] Read  30000 employee objects, took: 101ms.\n[run-performance-test] totalTime: 681 rowCount: 30000\n[run-performance-test] Finished reading 30000 employee objects, took: 681ms. Average time per thousand: 22.700ms.\n")),Object(o.b)("p",null,"You should expect similar."))}b.isMDXComponent=!0},708:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,u=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return a?r.a.createElement(u,i(i({ref:t},l),{},{components:a})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);