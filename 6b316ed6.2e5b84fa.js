(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{336:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),s=(a(0),a(706)),i={title:"InterMine Tests"},o={unversionedId:"get-started/intermine-tests",id:"version-4.0.0/get-started/intermine-tests",isDocsHomePage:!1,title:"InterMine Tests",description:"Continuous Integration",source:"@site/versioned_docs/version-4.0.0/get-started/intermine-tests.md",slug:"/get-started/intermine-tests",permalink:"/im-docs/docs/4.0.0/get-started/intermine-tests",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-4.0.0/get-started/intermine-tests.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Testmine",permalink:"/im-docs/docs/4.0.0/get-started/testmine"},next:{title:"InterMine JARs",permalink:"/im-docs/docs/4.0.0/intermine/intermine"}},l=[{value:"Continuous Integration",id:"continuous-integration",children:[]},{value:"Setting up a Local Test Environment",id:"setting-up-a-local-test-environment",children:[]},{value:"Running the core tests",id:"running-the-core-tests",children:[{value:"Create databases",id:"create-databases",children:[]},{value:"Update properties file",id:"update-properties-file",children:[]},{value:"Run the tests",id:"run-the-tests",children:[]},{value:"View results",id:"view-results",children:[]}]},{value:"Running the bio tests",id:"running-the-bio-tests",children:[{value:"Create databases",id:"create-databases-1",children:[]},{value:"Update properties file",id:"update-properties-file-1",children:[]},{value:"Build the databases",id:"build-the-databases",children:[]},{value:"Run the tests",id:"run-the-tests-1",children:[]},{value:"Run a single test",id:"run-a-single-test",children:[]}]}],u={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"continuous-integration"},"Continuous Integration"),Object(s.b)("p",null,"We run all our tests on every commit using the Continuous Integration service ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://travis-ci.org/intermine/intermine"}),"Travis"),". You can do the same for your fork:"),Object(s.b)("blockquote",null,Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},"Log in to Travis-CI with your GitHub account."),Object(s.b)("li",{parentName:"ul"},"Enable your fork of intermine for Travis builds."))),Object(s.b)("p",null,"All the tests will be run on every change you make, and you will be notified of errors by email."),Object(s.b)("h2",{id:"setting-up-a-local-test-environment"},"Setting up a Local Test Environment"),Object(s.b)("p",null,"After getting the source code for InterMine and ensuring you have all of the required prerequisites, the next step is to try the tests to confirm that everything runs well in your environment."),Object(s.b)("p",null,"We also recommend looking at the files that run our continuous integration tests for examples of how this can be automated:"),Object(s.b)("blockquote",null,Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"config/travis/init.sh")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"config/travis/run.sh")))),Object(s.b)("h2",{id:"running-the-core-tests"},"Running the core tests"),Object(s.b)("h3",{id:"create-databases"},"Create databases"),Object(s.b)("p",null,"Create blank databases required by the tests named: ",Object(s.b)("inlineCode",{parentName:"p"},"unittest"),", ",Object(s.b)("inlineCode",{parentName:"p"},"truncunittest"),", ",Object(s.b)("inlineCode",{parentName:"p"},"fulldatatest"),", ",Object(s.b)("inlineCode",{parentName:"p"},"flatmodetest"),", ",Object(s.b)("inlineCode",{parentName:"p"},"notxmltest"),". See PostgresBasics and introduction to some Postgres commands."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ for db in unittest truncunittest fulldatatest flatmodetest notxmltest; do createdb $db; done\n")),Object(s.b)("h3",{id:"update-properties-file"},"Update properties file"),Object(s.b)("p",null,"You need to set up a properties file to provide database details to the test code. In your home directory create a file called ",Object(s.b)("inlineCode",{parentName:"p"},"intermine-test.properties")," and update the server name, database names, and database username and password. You can use different database names as long as the actual database name used to create the database and the ",Object(s.b)("inlineCode",{parentName:"p"},"db.xxx.datasource.databaseName")," value match."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"# super user\nsuperuser.account=test\n\n# common properties\n\nos.query.max-time=10000000\nos.query.max-limit=100000\nos.query.max-offset=10000000\nos.queue-len=100\n\n# testing properties\n\ndb.notxmlunittest.datasource.serverName=localhost\ndb.notxmlunittest.datasource.databaseName=notxmltest\ndb.notxmlunittest.datasource.user=USERNAME\ndb.notxmlunittest.datasource.password=SECRET_PASSWORD\n\ndb.truncunittest.datasource.serverName=localhost\ndb.truncunittest.datasource.databaseName=truncunittest\ndb.truncunittest.datasource.user=USERNAME\ndb.truncunittest.datasource.password=SECRET_PASSWORD\n\ndb.flatmodeunittest.datasource.serverName=localhost\ndb.flatmodeunittest.datasource.databaseName=flatmodetest\ndb.flatmodeunittest.datasource.user=USERNAME\ndb.flatmodeunittest.datasource.password=SECRET_PASSWORD\n\ndb.fulldatatest.datasource.serverName=localhost\ndb.fulldatatest.datasource.databaseName=fulldatatest\ndb.fulldatatest.datasource.user=USERNAME\ndb.fulldatatest.datasource.password=SECRET_PASSWORD\n\ndb.userprofile-test.datasource.serverName=localhost\ndb.userprofile-test.datasource.databaseName=userprofile-test\ndb.userprofile-test.datasource.user=USERNAME\ndb.userprofile-test.datasource.password=SECRET_PASSWORD\n\ndb.unittest.datasource.serverName=localhost\ndb.unittest.datasource.databaseName=unittest\ndb.unittest.datasource.user=USERNAME\ndb.unittest.datasource.password=SECRET_PASSWORD\n")),Object(s.b)("h3",{id:"run-the-tests"},"Run the tests"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# in intermine\n$ ./gradlew test\n")),Object(s.b)("h3",{id:"view-results"},"View results"),Object(s.b)("p",null,"The HTML test report will be created in the build directory, eg. ",Object(s.b)("inlineCode",{parentName:"p"},"intermine/objectstore/test/build/test/results/index.html")),Object(s.b)("p",null,"Pull requests are not accepted without passing tests, and we have Travis set up to run tests on every commit. We keep the tests at a 100% pass rate at all times."),Object(s.b)("h2",{id:"running-the-bio-tests"},"Running the bio tests"),Object(s.b)("p",null,"InterMine includes a ",Object(s.b)("inlineCode",{parentName:"p"},"bio")," project which contains specific code for biological data and parsers for many data formats. To run tests on this code you need to set up another properties file and create some more databases."),Object(s.b)("h3",{id:"create-databases-1"},"Create databases"),Object(s.b)("p",null,"Create blank databases called ",Object(s.b)("inlineCode",{parentName:"p"},"bio-test")," and ",Object(s.b)("inlineCode",{parentName:"p"},"bio-fulldata-test"),"(","as above you can use different names as long as they match the ",Object(s.b)("inlineCode",{parentName:"p"},"db.xxx.datasource.databaseName")," values. For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ createdb bio-test\n$ createdb bio-fulldata-test\n")),Object(s.b)("h3",{id:"update-properties-file-1"},"Update properties file"),Object(s.b)("p",null,"Set up a properties file to provide database details to the test code. In ",Object(s.b)("inlineCode",{parentName:"p"},".intermine")," create a file called ",Object(s.b)("inlineCode",{parentName:"p"},"intermine-bio-test.properties")," and configure the server name, database names, and database username and password."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"os.default=os.production-client\n\n# common properties\n\nos.query.max-time=10000000\nos.query.max-limit=100000\nos.query.max-offset=10000000\nos.queue-len=100\n\n# testing properties\n\ndb.bio-fulldata-test.datasource.serverName=localhost\ndb.bio-fulldata-test.datasource.databaseName=bio-fulldata-test\ndb.bio-fulldata-test.datasource.user=USERNAME\ndb.bio-fulldata-test.datasource.password=SECRET_PASSWORD\n\ndb.bio-test.datasource.serverName=localhost\ndb.bio-test.datasource.databaseName=bio-test\ndb.bio-test.datasource.user=USERNAME\ndb.bio-test.datasource.password=SECRET_PASSWORD\n")),Object(s.b)("h3",{id:"build-the-databases"},"Build the databases"),Object(s.b)("p",null,"Build database tables automatically generated from the bio model by running the following in ",Object(s.b)("inlineCode",{parentName:"p"},"bio"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ ./gradlew builddb\n")),Object(s.b)("h3",{id:"run-the-tests-1"},"Run the tests"),Object(s.b)("p",null,"Execute the tests, in ",Object(s.b)("inlineCode",{parentName:"p"},"bio")," run:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ ./gradlew test\n")),Object(s.b)("h3",{id:"run-a-single-test"},"Run a single test"),Object(s.b)("p",null,"You can also run a test for an individual source by using this syntax:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# in bio\n$ ./gradlew bio-model:test\n")),Object(s.b)("p",null,"The test results will be located at ",Object(s.b)("inlineCode",{parentName:"p"},"bio/model/test/build/test/results/index.html"),". You can also run these as JUnit tests directly from Eclipse or Intellij."))}d.isMDXComponent=!0},706:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),d=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),p=n,m=c["".concat(i,".").concat(p)]||c[p]||b[p]||s;return a?r.a.createElement(m,o(o({ref:t},u),{},{components:a})):r.a.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);