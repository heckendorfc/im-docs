(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{328:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(706)),i={title:"Gradle - Quick Start"},o={unversionedId:"system-requirements/software/gradle/index",id:"system-requirements/software/gradle/index",isDocsHomePage:!1,title:"Gradle - Quick Start",description:"Gradle is InterMine's build tool. In InterMine 2.0, Gradle replaced ant.",source:"@site/docs/system-requirements/software/gradle/index.md",slug:"/system-requirements/software/gradle/index",permalink:"/im-docs/docs/next/system-requirements/software/gradle/index",editUrl:"https://github.com/intermine/im-docs/docs/system-requirements/software/gradle/index.md",version:"current",sidebar:"someSidebar",previous:{title:"Solr",permalink:"/im-docs/docs/next/system-requirements/software/solr"},next:{title:"Gradle - FAQs",permalink:"/im-docs/docs/next/system-requirements/software/gradle/faqs"}},b=[{value:"Data sources",id:"data-sources",children:[]},{value:"Database",id:"database",children:[]},{value:"Webapp",id:"webapp",children:[]},{value:"Specify properties file",id:"specify-properties-file",children:[]},{value:"Gradle",id:"gradle",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],c={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://gradle.org"}),"Gradle")," is InterMine's build tool. In InterMine 2.0, Gradle replaced ant."),Object(l.b)("p",null,"Please see ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/intermine/upgrade"}),"Upgrade instructions")," for details on how to migrate your system to use Gradle and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/system-requirements/software/gradle/faqs"}),"Gradle FAQs")," for commonly asked questions about Gradle."),Object(l.b)("p",null,"Below are common commands you will use when building InterMine databases and deploying webapps. See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.gradle.org/current/userguide/command_line_interface.html"}),"docs.gradle.org")," for the full list."),Object(l.b)("h3",{id:"data-sources"},"Data sources"),Object(l.b)("p",null,"Previously, all third party JARs were kept in the InterMine code repository and the build compiled all InterMine dependencies. Now, Gradle, via the Maven plugin, manages and downloads all JARs and only your local project is compiled."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"To use local data sources")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine-bio-sources $ ./gradlew install\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"See the maven plugin docs on the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.gradle.org/current/userguide/maven_plugin.html"}),"install task")," for details.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Example: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/intermine/flymine-bio-sources"}),"https://github.com/intermine/flymine-bio-sources")," - FlyMine-specific data sources.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"When installed locally, the JAR that is produced is available in the"),Object(l.b)("p",{parentName:"li"},"maven repo located in ",Object(l.b)("inlineCode",{parentName:"p"},"~/.m2/repository"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The JARs downloaded as dependencies are available in the Gradle"),Object(l.b)("p",{parentName:"li"},"cache, ",Object(l.b)("inlineCode",{parentName:"p"},"~/.gradle/caches/modules-2/files-2.1/"),"."))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note"),"\nThe build is going to be looking at the resulting JAR created by this command. If you make any changes to your data sources, install again to update the JAR to make those changes visible to the build."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"To use common data sources in the InterMine library")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"No action required. Use project XML file as normal.")),Object(l.b)("p",null,"The migration script you used already set up the dependency to the ",Object(l.b)("inlineCode",{parentName:"p"},"intermine-bio-sources")," project. This project includes ",Object(l.b)("inlineCode",{parentName:"p"},"uniprot")," and other data sources, and are on the classpath. During the build, the code will look for the uniprot jar, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"bio-source-uniprot-2.0.jar")," and find it on the classpath successfully. Maven will download it for you."),Object(l.b)("h3",{id:"database"},"Database"),Object(l.b)("p",null,"Delete and recreate all database tables"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew buildDB\n")),Object(l.b)("p",null,"Delete and recreate all database tables using a specific property file."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew buildDB -Dorg.gradle.project.release=dev\n")),Object(l.b)("p",null,"To run a single source"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew integrate -Psource=uniprot  --stacktrace\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note"),"\nYou can try --info or --debug too"),Object(l.b)("p",null,"To run a single postprocess"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew postprocess -Pprocess=do-sources --stacktrace\n")),Object(l.b)("p",null,"To run a full build"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./project_build -b localhost /tmp/flymine-dump\n")),Object(l.b)("p",null,"We are using the same ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/intermine/intermine-scripts/blob/master/project_build"}),"project build")," script, but we've moved it to the ",Object(l.b)("inlineCode",{parentName:"p"},"intermine-scripts")," repository with our other scripts."),Object(l.b)("h3",{id:"webapp"},"Webapp"),Object(l.b)("p",null,"There are several ways to deploy your InterMine webapp. You can use ",Object(l.b)("inlineCode",{parentName:"p"},"cargo")," to deploy your webapp to a running Tomcat instance, or ",Object(l.b)("inlineCode",{parentName:"p"},"gretty")," to use an embedded Tomcat instance. Run ",Object(l.b)("inlineCode",{parentName:"p"},"./gradlew tasks")," to see all the available tasks."),Object(l.b)("p",null,"We use ",Object(l.b)("inlineCode",{parentName:"p"},"cargo")," for our production instances and ",Object(l.b)("inlineCode",{parentName:"p"},"gretty")," on our local dev machines."),Object(l.b)("h4",{id:"deploy-a-webapp-cargo"},"Deploy a webapp ","(","cargo",")"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew cargoDeployRemote\n~/git/flymine $ ./gradlew cargoRedeployRemote\n~/git/flymine $ ./gradlew cargoUndeployRemote\n")),Object(l.b)("p",null,"Uses the config in the mine properties file, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"flymine.properties"),", to deploy the webapp, see below."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Property name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Determines"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"webapp.hostname"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"localhost"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name of host. If not set, tries to use webapp.deploy.url")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"webapp.path"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"flymine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"location of path of webapp")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"webapp.manager"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TOMCAT","_","USER"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tomcat username, needed to deploy webapp")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"webapp.password"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TOMCAT","_","PWD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tomcat password, needed to deploy webapp")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"webapp.protocol"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"https"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OPTIONAL, defaults to http")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"webapp.port"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"8081"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OPTIONAL, defaults to 8080")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note"),"\nCargo uses hot deployment which over time, fills up the PermGen memory of the JVM process running your container. Continuously deploying an artifact will inevitably lead to a java.lang.OutOfMemoryError"),Object(l.b)("h4",{id:"deploy-a-webapp-gretty"},"Deploy a webapp ","(","gretty",")"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew tomcatStartWar\n~/git/flymine $ ./gradlew tomcatStop\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Embedded tomcat, uses port 8080."),Object(l.b)("li",{parentName:"ul"},"Logs are in $HOME/logs, for more details: ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://akhikhl.github.io/gretty-doc/Logging.html"}),"http://akhikhl.github.io/gretty-doc/Logging.html"))),Object(l.b)("h4",{id:"deploy-blue-genes"},"Deploy blue genes"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew blueGenesStart\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Gets the ",Object(l.b)("inlineCode",{parentName:"li"},"mine name"),", ",Object(l.b)("inlineCode",{parentName:"li"},"URL")," and tools location from the $mine.properties file."),Object(l.b)("li",{parentName:"ul"},"Uses the webservices from the webapp specified in the $mine.properties file. For the time being, you have to have an InterMine webapp running to launch a bluegenes instance."),Object(l.b)("li",{parentName:"ul"},"The app will be deployed at the specified ",Object(l.b)("inlineCode",{parentName:"li"},"URL"),", port 5000."),Object(l.b)("li",{parentName:"ul"},"It is suggested to launch the app in the background ","(","append ",Object(l.b)("inlineCode",{parentName:"li"},"&")," to the command",")","."),Object(l.b)("li",{parentName:"ul"},"Please see ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/im-docs/docs/next/webapp/blue-genes/index"}),"Blue genes")," for details on how to configure your bluegenes instance.")),Object(l.b)("h3",{id:"specify-properties-file"},"Specify properties file"),Object(l.b)("p",null,"To use a specific properties file, set the file suffix with the ",Object(l.b)("inlineCode",{parentName:"p"},"-Dorg.gradle.project.release")," parameter like so:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew builddb -Dorg.gradle.project.release=dev\n")),Object(l.b)("p",null,"That command will build the database set in the ",Object(l.b)("inlineCode",{parentName:"p"},"flymine.properties.dev")," file."),Object(l.b)("h3",{id:"gradle"},"Gradle"),Object(l.b)("p",null,"To see a list of command-line options, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"./gradlew --help\n")),Object(l.b)("p",null,"To see what tasks are available, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"./gradlew tasks\n")),Object(l.b)("p",null,"To get rid of compiled files, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"./gradlew clean\n")),Object(l.b)("p",null,"To update your local packages, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"./gradlew install\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/next/system-requirements/software/git"}),"Local installation")," for how to install InterMine locally. ","(","You shouldn't do"),Object(l.b)("p",{parentName:"li"},"this normally, instead use the JARs available via Maven",")",".")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Always use ",Object(l.b)("inlineCode",{parentName:"p"},"./gradlew")," instead of ",Object(l.b)("inlineCode",{parentName:"p"},"gradle"),". This is the wrapper that comes with InterMine and ensures that everyone is using the same version."))),Object(l.b)("h4",{id:"daemons"},"Daemons"),Object(l.b)("p",null,"The updated Gradle version comes with ",Object(l.b)("inlineCode",{parentName:"p"},"daemons")," enabled by default. These are helper processes that exist in the background. This can speed up builds for example, but sometimes, under heavy development, can cause problems when InterMine does not properly dereference assets. We are working on fixing this! In the meantime, you should append ",Object(l.b)("inlineCode",{parentName:"p"},"-Dorg.gradle.daemon=false")," to your ",Object(l.b)("inlineCode",{parentName:"p"},"GRADLE_OPTS")," variable."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"See: ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.gradle.org/current/userguide/gradle_daemon.html"}),"Daemon docs"))),Object(l.b)("h3",{id:"further-reading"},"Further Reading"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.gradle.org/current/userguide/command_line_interface.html"}),"Gradle docs")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://intermineorg.wordpress.com/2017/09/13/intermine-2-0-gradle/"}),"InterMine blog post")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.google.com/presentation/d/1mgcC7TSieHa4JdYzxYUVspftKO8rDpFN0X9JaKQXkDM/edit"}),"InterMine presentation"))))}p.isMDXComponent=!0},706:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||l;return a?r.a.createElement(m,o(o({ref:t},c),{},{components:a})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);