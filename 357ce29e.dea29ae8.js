(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{210:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(707)),s={title:"Troubleshooting tips"},i={unversionedId:"support/troubleshooting-tips",id:"version-4.0.0/support/troubleshooting-tips",isDocsHomePage:!1,title:"Troubleshooting tips",description:"This page describes what to do if you encounter problems when installing or maintaining InterMine. Please feel free to Contact us with any questions you may have.",source:"@site/versioned_docs/version-4.0.0/support/troubleshooting-tips.md",slug:"/support/troubleshooting-tips",permalink:"/im-docs/docs/4.0.0/support/troubleshooting-tips",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/support/troubleshooting-tips.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Mailing list",permalink:"/im-docs/docs/4.0.0/support/mailing-list"},next:{title:"InterMine",permalink:"/im-docs/docs/4.0.0/about/index"}},l=[{value:"Error messages",id:"error-messages",children:[]},{value:"Logs",id:"logs",children:[{value:"Data warehouse",id:"data-warehouse",children:[]},{value:"Webapp",id:"webapp",children:[]},{value:"IQL in logs",id:"iql-in-logs",children:[]},{value:"Show all properties",id:"show-all-properties",children:[]},{value:"Common Errors",id:"common-errors",children:[]},{value:"Client side errors",id:"client-side-errors",children:[]}]}],c={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page describes what to do if you encounter problems when installing or maintaining InterMine. Please feel free to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/about/contact-us"}),"Contact us")," with any questions you may have."),Object(o.b)("h2",{id:"error-messages"},"Error messages"),Object(o.b)("p",null,"If you encounter a problem when running a task, try adding the verbose flag:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# add --stacktrace flag to get the complete error message\n$ ./gradlew builddb --stacktrace\n")),Object(o.b)("h2",{id:"logs"},"Logs"),Object(o.b)("h3",{id:"data-warehouse"},"Data warehouse"),Object(o.b)("p",null,"When integrating data, the errors are usually in intermine.log in your mine's directory."),Object(o.b)("h3",{id:"webapp"},"Webapp"),Object(o.b)("p",null,"When you see an error on the webapp or get a blank page and nothing appears in the webapp log from log4j, it is likely you will be able to find more information on what went wrong in the tomcat logs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"tomcat/logs/catalina.out"),Object(o.b)("li",{parentName:"ul"},"tomcat/logs/localhost.$DATE.logs")),Object(o.b)("p",null,"It will likely be the log that was modified last."),Object(o.b)("p",null,"A good way of looking at the output to these logs in real time is to use the command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ tail -f tomcat/logs/$LOGNAME\n")),Object(o.b)("p",null,"If you reload the webapp, you will see the error output directly on the screen."),Object(o.b)("h3",{id:"iql-in-logs"},"IQL in logs"),Object(o.b)("p",null,"If you are having problems with a specific query, you can run it directly in the console. The query is listed in the log files in IQL ","(","InterMine Query Language",")",". To run the query directly, go to ",Object(o.b)("inlineCode",{parentName:"p"},"$MINE/dmodel")," and execute this command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ ./gradlew runIQLQuery -Pquery='some IQL'\n")),Object(o.b)("h3",{id:"show-all-properties"},"Show all properties"),Object(o.b)("p",null,"Note that you can do this in a running web-app to check that it works by visiting the ",Object(o.b)("inlineCode",{parentName:"p"},"HOST/PATH/showProperties.do")," URL when logged in as superuser."),Object(o.b)("h3",{id:"common-errors"},"Common Errors"),Object(o.b)("p",null,"Listed here are some common errors encountered in InterMine and some suggested fixes."),Object(o.b)("h4",{id:"unsupportedclassversionerror"},"UnsupportedClassVersionError"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"java.lang.UnsupportedClassVersionError: org/intermine/task/FileName (Unsupported major.minor version 49.0)\n")),Object(o.b)("p",null,"This means that your version of Java is too old. You need at least Java 8 to run InterMine."),Object(o.b)("h4",{id:"cant-open-datasource"},"can't open datasource"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"java.lang.RuntimeException: can't open datasource for {platform=PostgreSQL, datasource.dataSourceName=db.flatmodeunittest, ...\n")),Object(o.b)("p",null,"Errors of this type mean there was a problem accessing a database, in this example, ",Object(o.b)("inlineCode",{parentName:"p"},"db.flatmodeunittest"),". Either the database specified in the ",Object(o.b)("inlineCode",{parentName:"p"},"mine.properties")," file doesn't exist or the server/user/password details in the properties are incorrect."),Object(o.b)("h4",{id:"fatal-sorry-too-many-clients-already"},"FATAL: sorry, too many clients already"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"org.postgresql.util.PSQLException: Backend start-up failed: FATAL: sorry, too many clients already - for database: db.bio-fulldata-test\n")),Object(o.b)("p",null,"This occurs when the number of connections to a database exceeds the maximum configured in the postgres configuration. You need to increase the value of ",Object(o.b)("inlineCode",{parentName:"p"},"max_connections")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"postgresql.conf")," file and restart postgres. Try 100 connections:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"max_connections = 100\n")),Object(o.b)("p",null,"If you still experience this problem, restart Postgres."),Object(o.b)("h4",{id:"outofmemoryerror-java-heap-space"},"OutOfMemoryError: Java heap space"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"java.lang.OutOfMemoryError: Java heap space\n")),Object(o.b)("p",null,"This means that a Java process hasn't been allocated enough memory to function correctly. You can increase the amount of memory by changing the ",Object(o.b)("inlineCode",{parentName:"p"},"-Xmx")," property in your ",Object(o.b)("inlineCode",{parentName:"p"},"GRADLE_OPTS")," environment variable. We recommend ",Object(o.b)("inlineCode",{parentName:"p"},"8G")," as a minimum, more is often needed during data loading. Your ",Object(o.b)("inlineCode",{parentName:"p"},"GRADLE_OPTS")," variable should include the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ echo $GRADLE_OPTS\n$ -Xmx8G -Dorg.gradle.daemon=false\n")),Object(o.b)("h4",{id:"cant-find-class-name-classname"},"Can't find class name ",Object(o.b)("inlineCode",{parentName:"h4"},"ClassName")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Exception caught: java.lang.IllegalArgumentException: Unknown class name Protein in package org.intermine.model.bio\n")),Object(o.b)("p",null,"In this example a class named ",Object(o.b)("inlineCode",{parentName:"p"},"Protein")," could not be found in the data model. This will usually arise when running a parser and attempting to create an ",Object(o.b)("inlineCode",{parentName:"p"},"Item")," for a class that does not exist. Check your ",Object(o.b)("inlineCode",{parentName:"p"},"SOURCE-NAME_additions.xml")," files to see if the class is listed. Only the additions files for sources lists on ",Object(o.b)("inlineCode",{parentName:"p"},"project.xml")," when ",Object(o.b)("inlineCode",{parentName:"p"},"./gradlew builddb")," was run will be included in the data model."),Object(o.b)("h4",{id:"cant-find-keys"},"Can't find keys"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Caused by: java.lang.IllegalArgumentException: Unable to find keys for source protfeatures_source in file protfeatures_source_keys.properties\n")),Object(o.b)("p",null,"It is expecting to find some keys to integrate data from that source. Do you have a keys file in the ",Object(o.b)("inlineCode",{parentName:"p"},"protfeatures/src/main/resources"),"?"),Object(o.b)("h4",{id:"classpath-issues"},"Classpath issues"),Object(o.b)("p",null,"Classpath issues can generate various errors, for example, a conflict caused by ",Object(o.b)("inlineCode",{parentName:"p"},"wstx-asl-3.2.4.jar")," when the XMLOutputFactory created its StreamWriter in PathQueryBinding:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"XMLStreamWriter writer = factory.createXMLStreamWriter(sw);\n")),Object(o.b)("h4",{id:"failed-to-parse-the-expression"},"Failed to parse the expression"),Object(o.b)("p",null,"Tomcat 7 is less permissive than Tomcat 6, so you might have seen this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Caused by: org.apache.jasper.JasperException: /queryBuilderConstraint.jsp (line: 90, column: 14) "${dec.boolean}" contains invalid expression(s): javax.el.ELException: Failed to parse the expression [${dec.boolean}]\n')),Object(o.b)("p",null,"Add this to your Tomcat startup.sh script:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'JAVA_OPTS="$JAVA_OPTS -Dorg.apache.el.parser.SKIP_IDENTIFIER_CHECK=true"\nexport JAVA_OPTS\n')),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/system-requirements/software/tomcat"}),"Tomcat")," for more details."),Object(o.b)("h4",{id:"session-error"},"Session Error"),Object(o.b)("p",null,"If you get a session error when you first start up your webapp, update your Tomcat configuration to handle different URLs. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/system-requirements/software/tomcat"}),"Tomcat"),"."),Object(o.b)("h3",{id:"client-side-errors"},"Client side errors"),Object(o.b)("p",null,"Assuming you are using Google Chrome as your browser, press ",Object(o.b)("inlineCode",{parentName:"p"},"Ctrl+Shift+I"),' to open a Debugger. In there, click on the "Console" tab. If errors are present you should see them in red. If you want to inspect what kind of data are being sent/fetched, click on the Network Tab.'),Object(o.b)("p",null,"If you are using the List Widgets library ",Object(o.b)("inlineCode",{parentName:"p"},"(>= 1.2.4)"),', then you can launch a "debug mode" on them. Simply wait for your page to load. Then append ',Object(o.b)("inlineCode",{parentName:"p"},"#debug")," to the end of the page URL. You should see buttons on individual widgets allowing you to see a debug trace of events happening."),Object(o.b)("h4",{id:"keyword-search-fails"},"Keyword Search fails"),Object(o.b)("p",null,"There is no extra configuration required to get the search working. The search uses a Lucene index not the postgres database. The Lucene index is created at build-time, and it is the last source build as part of the tutorial."),Object(o.b)("p",null,"The search should be very quick, but depending on the machine it's on, the initial search can be quite slow. On the first search, the index is unpacked from the database and loaded into memory which can take up to a minute."),Object(o.b)("p",null,"If the search is just failing instantly, check your log files ","(","$TOMCAT/logs",")",". When the index is unpacked from the database, it writes to disk. There may be permissions or space issues."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/system-requirements/software/gradle/faqs"}),"Gradle - FAQs")," for more error messages."))}p.isMDXComponent=!0},707:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(m,i(i({ref:t},c),{},{components:a})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);