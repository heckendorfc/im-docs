(window.webpackJsonp=window.webpackJsonp||[]).push([[488],{558:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var r=a(3),n=a(7),i=(a(0),a(708)),s={title:"Hardware"},o={unversionedId:"system-requirements/hardware/index",id:"version-5.0.0/system-requirements/hardware/index",isDocsHomePage:!1,title:"Hardware",description:"The requirements for running InterMine depends on the size of data warehouse you need to create. It is possible to build small InterMine databases on most Linux or Mac OS X systems but for more substantial databases, a powerful dedicated server is required. The recommended minimum hardware requirements for running substantial servers such as FlyMine or InterMines for major model organism databases are given below.",source:"@site/versioned_docs/version-5.0.0/system-requirements/hardware/index.md",slug:"/system-requirements/hardware/index",permalink:"/im-docs/docs/system-requirements/hardware/index",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-5.0.0/system-requirements/hardware/index.md",version:"5.0.0",sidebar:"version-5.0.0/someSidebar",previous:{title:"InterMine Documentation",permalink:"/im-docs/docs/index"},next:{title:"Requirements",permalink:"/im-docs/docs/system-requirements/software/index"}},l=[{value:"Recommendations",id:"recommendations",children:[{value:"Setting up database servers",id:"setting-up-database-servers",children:[]}]},{value:"What we use",id:"what-we-use",children:[{value:"Build",id:"build",children:[]},{value:"Production",id:"production",children:[]},{value:"Web server",id:"web-server",children:[]},{value:"modENCODE - identical machines",id:"modencode---identical-machines",children:[]},{value:"Database sizes/ disk space",id:"database-sizes-disk-space",children:[]}]}],d={toc:l};function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The requirements for running InterMine depends on the size of data warehouse you need to create. It is possible to build small InterMine databases on most Linux or Mac OS X systems but for more substantial databases, a powerful dedicated server is required. The recommended minimum hardware requirements for running substantial servers such as FlyMine or InterMines for major model organism databases are given below."),Object(i.b)("h2",{id:"recommendations"},"Recommendations"),Object(i.b)("h3",{id:"setting-up-database-servers"},"Setting up database servers"),Object(i.b)("p",null,"The hardware used for a data loading has a ",Object(i.b)("strong",{parentName:"p"},"significant")," impact on data loading performance. The main recommendations we have are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Install plenty of RAM, 16GB or more, but watch out for multiple RAM modules slowing down your RAM access speed."),Object(i.b)("li",{parentName:"ul"},"Have at least two real CPUs - hyperthreading doesn't count. Preferably have at least four CPUs."),Object(i.b)("li",{parentName:"ul"},"It is more important to have fast individual CPUs than a lot of CPUs for a build server. InterMine does use multiple threads during data\nloading, but not asymmetrically - there is one thread which takes a lot of the CPU time. On the other hand, for a production server, having a few more CPUs is more important."),Object(i.b)("li",{parentName:"ul"},"Have a decent IO subsystem. We currently use a fibrechannel attached RAID array of 16 15krpm discs for our build servers.")),Object(i.b)("h4",{id:"recommended-minimum-hardware-requirements-for-a-large-intermine-instance"},"Recommended minimum hardware requirements for a large InterMine instance"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"CPU"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"RAM"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Storage"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"8 cores"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"32 GB RAM"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"~2TB usable storage with RAID 10 ","(","4TB raw in RAID 10",")")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"SAS disks are faster than SATA"),Object(i.b)("li",{parentName:"ul"},"Hardware RAID controller with a battery backed cache ","(","gives faster write speeds",")"),Object(i.b)("li",{parentName:"ul"},"It doesn\u2019t matter whether storage is in the same box or a separate disk array. If it is separate, a fibrechannel connection is required.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nIt's essential to have separate development and production machines."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Choosing an operating system")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Any distribution of Linux/Unix should be fine as long as it is capable of running Java and Postgres, although Debian is our preference."),Object(i.b)("li",{parentName:"ul"},"Use something mainstream and reliable like Linux or Berkeley Software Distribution ","(","BSD",")"),Object(i.b)("li",{parentName:"ul"},"Use the system that your friendly sysadmin is most familiar with."),Object(i.b)("li",{parentName:"ul"},"Not favourites: Tru64 & ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/im-docs/docs/system-requirements/hardware/solaris"}),"Solaris"))),Object(i.b)("h2",{id:"what-we-use"},"What we use"),Object(i.b)("p",null,"FlyMine has separate build and production build servers as well as separate build and production build web servers."),Object(i.b)("h3",{id:"build"},"Build"),Object(i.b)("p",null,"This runs the Java data integration code to build the warehouse, reading from source files/databases and loading into an intermediate postgres database then the final postgres database. This is write-intensive and only needs 4 cores, but the faster the disk and the more the RAM, the better."),Object(i.b)("h3",{id:"production"},"Production"),Object(i.b)("p",null,"This runs the production postgres database. More cores and more RAM means better handling of concurrent requests and more of the database in cache. InterMine often sends a lot of queries at a time for a single user i.e. when running templates for a report page."),Object(i.b)("h3",{id:"web-server"},"Web server"),Object(i.b)("p",null,"FlyMine has a separate machine to run Tomcat to serve the webapp. This is the machine that actually runs the live InterMine code. For us, this a 4 core machine with 8GB RAM. Disk space is not important because the cores are more important than the speed, and for better caching more RAM is required."),Object(i.b)("h3",{id:"modencode---identical-machines"},"modENCODE - identical machines"),Object(i.b)("p",null,"For modENCODE, we actually have two identical servers that switch roles with each release. With higher data volumes and more frequent releases, this makes more sense as in this way, we can avoid dumping and reloading. Unlike FlyMine, modMine's database and webapp live on the same server."),Object(i.b)("h3",{id:"database-sizes-disk-space"},"Database sizes/ disk space"),Object(i.b)("p",null,"Disk space on the build and production machines obviously depends on volume of data."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Multiply the database size by at least 3 for a corresponding InterMine instance. This takes into account the various redundant\nways we store data and precomputed tables, all to boost query performance."),Object(i.b)("li",{parentName:"ul"},"As a rough guide, the current FlyBase database with all 12 genomes is 33GB. An InterMine with this and a couple of extra data sources is\n100GB. A full FlyMine release is typically around 500GB."),Object(i.b)("li",{parentName:"ul"},"When running an InterMine build with multiple data sources, database copies are made periodically for backups, so there needs to be extra\nspace available, at least four times the final database size.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nPrecomputed tables are pre-joined tables that can be swapped in dynamically to reduce table joins in actual queries and improve performance. This means a lot of duplicated data is stored."),Object(i.b)("p",null,"Related topics:"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/system-requirements/hardware/solaris"}),"Solaris")))}c.isMDXComponent=!0},708:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),c=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,p=u["".concat(s,".").concat(m)]||u[m]||b[m]||i;return a?n.a.createElement(p,o(o({ref:t},d),{},{components:a})):n.a.createElement(p,o({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);