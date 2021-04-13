(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(545)),b={title:"Gradle - Quick Start"},i={unversionedId:"system-requirements/software/gradle/index",id:"version-5.0.0/system-requirements/software/gradle/index",isDocsHomePage:!1,title:"Gradle - Quick Start",description:"Gradle is InterMine's build tool. In InterMine 2.0, Gradle replaced ant.",source:"@site/versioned_docs/version-5.0.0/system-requirements/software/gradle/index.md",slug:"/system-requirements/software/gradle/index",permalink:"/im-docs/docs/system-requirements/software/gradle/index",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-5.0.0/system-requirements/software/gradle/index.md",version:"5.0.0",sidebar:"version-5.0.0/someSidebar",previous:{title:"Solr",permalink:"/im-docs/docs/system-requirements/software/solr"},next:{title:"Gradle - FAQs",permalink:"/im-docs/docs/system-requirements/software/gradle/faqs"}},c=[{value:"Data sources",id:"data-sources",children:[]},{value:"Database",id:"database",children:[]},{value:"Webapp",id:"webapp",children:[]},{value:"Specify properties file",id:"specify-properties-file",children:[]},{value:"Gradle",id:"gradle",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],o={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://gradle.org"}),"Gradle")," is InterMine's build tool. In InterMine 2.0, Gradle replaced ant."),Object(l.b)("p",null,"Please see ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/intermine/upgrade"}),"Upgrade instructions")," for details on how to migrate your system to use Gradle and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/system-requirements/software/gradle/faqs"}),"Gradle FAQs")," for commonly asked questions about Gradle."),Object(l.b)("p",null,"Below are common commands you will use when building InterMine databases and deploying webapps. See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.gradle.org/current/userguide/command_line_interface.html"}),"docs.gradle.org")," for the full list."),Object(l.b)("h3",{id:"data-sources"},"Data sources"),Object(l.b)("p",null,"Previously, all third party JARs were kept in the InterMine code repository and the build compiled all InterMine dependencies. Now, Gradle, via the Maven plugin, manages and downloads all JARs and only your local project is compiled."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"To use local data sources")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine-bio-sources $ ./gradlew install\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"See the maven plugin docs on the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.gradle.org/current/userguide/maven_plugin.html"}),"install task")," for details.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Example: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/intermine/flymine-bio-sources"}),"https://github.com/intermine/flymine-bio-sources")," - FlyMine-specific data sources.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"When installed locally, the JAR that is produced is available in the"),Object(l.b)("p",{parentName:"li"},"maven repo located in ",Object(l.b)("inlineCode",{parentName:"p"},"~/.m2/repository"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The JARs downloaded as dependencies are available in the Gradle"),Object(l.b)("p",{parentName:"li"},"cache, ",Object(l.b)("inlineCode",{parentName:"p"},"~/.gradle/caches/modules-2/files-2.1/"),"."))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note"),"\nThe build is going to be looking at the resulting JAR created by this command. If you make any changes to your data sources, install again to update the JAR to make those changes visible to the build."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"To use common data sources in the InterMine library")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"No action required. Use project XML file as normal.")),Object(l.b)("p",null,"The migration script you used already set up the dependency to the ",Object(l.b)("inlineCode",{parentName:"p"},"intermine-bio-sources")," project. This project includes ",Object(l.b)("inlineCode",{parentName:"p"},"uniprot")," and other data sources, and are on the classpath. During the build, the code will look for the uniprot jar, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"bio-source-uniprot-2.0.jar")," and find it on the classpath successfully. Maven will download it for you."),Object(l.b)("h3",{id:"database"},"Database"),Object(l.b)("p",null,"Delete and recreate all database tables"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew buildDB\n")),Object(l.b)("p",null,"Delete and recreate all database tables using a specific property file."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew buildDB -Dorg.gradle.project.release=dev\n")),Object(l.b)("p",null,"To run a single source"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew integrate -Psource=uniprot  --stacktrace\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note"),"\nYou can try --info or --debug too"),Object(l.b)("p",null,"To run a single postprocess"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew postprocess -Pprocess=do-sources --stacktrace\n")),Object(l.b)("p",null,"To run a full build"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./project_build -b localhost /tmp/flymine-dump\n")),Object(l.b)("p",null,"We are using the same ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/intermine/intermine-scripts/blob/master/project_build"}),"project build")," script, but we've moved it to the ",Object(l.b)("inlineCode",{parentName:"p"},"intermine-scripts")," repository with our other scripts."),Object(l.b)("h3",{id:"webapp"},"Webapp"),Object(l.b)("p",null,"To deploy your InterMine webapp you can use the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/bmuschko/gradle-cargo-plugin/blob/master/README.md"}),"cargo")," gradle plugin. Run ",Object(l.b)("inlineCode",{parentName:"p"},"./gradlew tasks")," to see all the available tasks."),Object(l.b)("h4",{id:"deploy-a-webapp-to-a-running-tomcat-instance"},"Deploy a webapp to a running Tomcat instance"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew cargoDeployRemote\n~/git/flymine $ ./gradlew cargoRedeployRemote\n~/git/flymine $ ./gradlew cargoUndeployRemote\n")),Object(l.b)("p",null,"Uses the config in the mine properties file, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"flymine.properties"),", to deploy the webapp, see below."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Property name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Determines"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"webapp.hostname"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"localhost"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name of host. If not set, tries to use webapp.deploy.url")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"webapp.path"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"flymine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"location of path of webapp")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"webapp.manager"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TOMCAT","_","USER"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tomcat username, needed to deploy webapp")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"webapp.password"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TOMCAT","_","PWD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tomcat password, needed to deploy webapp")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"webapp.protocol"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"https"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OPTIONAL, defaults to http")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"webapp.port"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"8081"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OPTIONAL, defaults to 8080")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note"),"\nCargo uses hot deployment which over time, fills up the PermGen memory of the JVM process running your container. Continuously deploying an artifact will inevitably lead to a java.lang.OutOfMemoryError"),Object(l.b)("h4",{id:"deploy-a-webapp-with-embedded-tomcat"},"Deploy a webapp with embedded Tomcat"),Object(l.b)("p",null,"Only on your local dev machines."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew cargoRunLocal\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Embedded tomcat, uses port 8080.")),Object(l.b)("h4",{id:"trying-out-bluegenes"},"Trying out BlueGenes"),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},Object(l.b)("strong",{parentName:"p"},"This approach is only recommended for trying out the app.")," See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"../../../webapp/bluegenes/index"}),"BlueGenes")," for deploying to a production environment."))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew blueGenesStart\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The app will run at localhost on port 5000."),Object(l.b)("li",{parentName:"ul"},"Will use ",Object(l.b)("inlineCode",{parentName:"li"},"systemProp.blueGenesVersion")," defined in gradle.properties file."),Object(l.b)("li",{parentName:"ul"},"Uses the following parameters defined in the ",Object(l.b)("inlineCode",{parentName:"li"},"~/.intermine/$MINE.properties")," file.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"purpose"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"parameter"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"base URL for mine's web services"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"webapp.baseurl"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"http://www.flymine.org"}),"http://www.flymine.org"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"path appended to the base URL and unique namespace for mine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"webapp.path"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"flymine")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name of your mine as it will be displayed in BlueGenes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"project.title"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"BioTestMine")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"location of JavaScript tools"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"bluegenes.toolLocation"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"/intermine/tools/")))),Object(l.b)("h3",{id:"specify-properties-file"},"Specify properties file"),Object(l.b)("p",null,"To use a specific properties file, set the file suffix with the ",Object(l.b)("inlineCode",{parentName:"p"},"-Dorg.gradle.project.release")," parameter like so:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/flymine $ ./gradlew builddb -Dorg.gradle.project.release=dev\n")),Object(l.b)("p",null,"That command will build the database set in the ",Object(l.b)("inlineCode",{parentName:"p"},"flymine.properties.dev")," file."),Object(l.b)("h3",{id:"gradle"},"Gradle"),Object(l.b)("p",null,"To see a list of command-line options, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"./gradlew --help\n")),Object(l.b)("p",null,"To see what tasks are available, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"./gradlew tasks\n")),Object(l.b)("p",null,"To get rid of compiled files, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"./gradlew clean\n")),Object(l.b)("p",null,"To update your local packages, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"./gradlew install\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/system-requirements/software/git"}),"Local installation")," for how to install InterMine locally. ","(","You shouldn't do"),Object(l.b)("p",{parentName:"li"},"this normally, instead use the JARs available via Maven",")",".")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Always use ",Object(l.b)("inlineCode",{parentName:"p"},"./gradlew")," instead of ",Object(l.b)("inlineCode",{parentName:"p"},"gradle"),". This is the wrapper that comes with InterMine and ensures that everyone is using the same version."))),Object(l.b)("h4",{id:"daemons"},"Daemons"),Object(l.b)("p",null,"The updated Gradle version comes with ",Object(l.b)("inlineCode",{parentName:"p"},"daemons")," enabled by default. These are helper processes that exist in the background. This can speed up builds for example, but sometimes, under heavy development, can cause problems when InterMine does not properly dereference assets. We are working on fixing this! In the meantime, you should append ",Object(l.b)("inlineCode",{parentName:"p"},"-Dorg.gradle.daemon=false")," to your ",Object(l.b)("inlineCode",{parentName:"p"},"GRADLE_OPTS")," variable."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"See: ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.gradle.org/current/userguide/gradle_daemon.html"}),"Daemon docs"))),Object(l.b)("h3",{id:"further-reading"},"Further Reading"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.gradle.org/current/userguide/command_line_interface.html"}),"Gradle docs")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://intermineorg.wordpress.com/2017/09/13/intermine-2-0-gradle/"}),"InterMine blog post")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.google.com/presentation/d/1mgcC7TSieHa4JdYzxYUVspftKO8rDpFN0X9JaKQXkDM/edit"}),"InterMine presentation"))))}p.isMDXComponent=!0},545:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,u=s["".concat(b,".").concat(m)]||s[m]||d[m]||l;return a?r.a.createElement(u,i(i({ref:t},o),{},{components:a})):r.a.createElement(u,i({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);