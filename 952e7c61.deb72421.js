(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{440:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(703)),o={title:"Git"},s={unversionedId:"system-requirements/software/git",id:"system-requirements/software/git",isDocsHomePage:!1,title:"Git",description:"Git is our source control software. Download and install git on your local machine.",source:"@site/docs/system-requirements/software/git.md",slug:"/system-requirements/software/git",permalink:"/im-docs/docs/next/system-requirements/software/git",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/system-requirements/software/git.md",version:"current",sidebar:"someSidebar",previous:{title:"Requirements",permalink:"/im-docs/docs/next/system-requirements/software/index"},next:{title:"Java",permalink:"/im-docs/docs/next/system-requirements/software/java"}},c=[{value:"Getting started",id:"getting-started",children:[]},{value:"Local Installation (for advanced users)",id:"local-installation-for-advanced-users",children:[{value:"Why will Maven use my JARs instead of the published JARs?",id:"why-will-maven-use-my-jars-instead-of-the-published-jars",children:[]},{value:"Set your InterMine version",id:"set-your-intermine-version",children:[]}]}],l={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://git-scm.com"}),"Git")," is our source control software. Download and install git on your local machine."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"InterMine is available via Maven Central as executable JARs. We do not recommend downloading the InterMine source code.\nInterMine source code is available via ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/intermine"}),"GitHub"),"."))),Object(i.b)("h2",{id:"getting-started"},"Getting started"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/next/get-started/quick-start"}),"Quick Start")," or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/next/get-started/create-your-mine"}),"Create Your Own InterMine")," for instructions on how to create a new InterMine."),Object(i.b)("h2",{id:"local-installation-for-advanced-users"},"Local Installation ","(","for advanced users",")"),Object(i.b)("p",null,"You should use the JARs available via ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://repo1.maven.org/maven2/org/intermine"}),"Maven Central"),". However, if you want to make custom changes to InterMine, you can install locally."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Get InterMine code."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"~/git $ git clone https://github.com/intermine/intermine.git\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Checkout the InterMine version you need."),Object(i.b)("p",{parentName:"li"},"Get the list of valid tags."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"# change into the correct directory\n~/git $ cd intermine\n# get a list of tags\n~/git/intermine $ git tag -l\n")),Object(i.b)("p",{parentName:"li"},"Checkout the correct tag for the InterMine version you want to use."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"# get the correct version of the InterMine software\n~/git/intermine $ git checkout tags/<tag_name> -b <branch_name>\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Copy in your changes to the InterMine code.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Rebuild JARs locally."))),Object(i.b)("p",null,"Run the Maven task ",Object(i.b)("inlineCode",{parentName:"p"},"install")," to compile and create the JARs you need to run an InterMine instance."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"~/git/intermine $ (cd plugin && ./gradlew clean && ./gradlew install) && (cd intermine && ./gradlew clean && ./gradlew install) && (cd bio && ./gradlew clean && ./gradlew install) && (cd bio/sources && ./gradlew clean && ./gradlew install)  && (cd bio/postprocess/ && ./gradlew clean && ./gradlew install)\n")),Object(i.b)("p",null,"This places the JARs in ",Object(i.b)("inlineCode",{parentName:"p"},"~/.m2/repository"),". You can now build a database and deploy a webapp, and your custom local JARs will be used."),Object(i.b)("h3",{id:"why-will-maven-use-my-jars-instead-of-the-published-jars"},"Why will Maven use my JARs instead of the published JARs?"),Object(i.b)("p",null,"The Gradle build files are configured so that Maven looks in your local Maven ","(",Object(i.b)("inlineCode",{parentName:"p"},"~/.m2/respository"),")"," directory first, before looking in Maven Central. If Maven finds the correct version locally, those are the JARs it will use. But make sure you have the correct version!"),Object(i.b)("h3",{id:"set-your-intermine-version"},"Set your InterMine version"),Object(i.b)("p",null,"The InterMine version you use is determined by the system variables set in your mine's ",Object(i.b)("inlineCode",{parentName:"p"},"gradle.properties")," file."),Object(i.b)("p",null,"Make sure you have your ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/next/intermine/intermine-versions"}),"InterMine Versioning Policy")," set correctly. If you want to use local JARs, it's best to specify the exact version, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.3"),", of your local JARs. Do this in your mine's ",Object(i.b)("inlineCode",{parentName:"p"},"gradle.properties")," file."),Object(i.b)("p",null,"If you use ",Object(i.b)("inlineCode",{parentName:"p"},"4.0.+"),", there's a possibility a newer version of InterMine is published. The plus sign instructs Maven to get the latest version of InterMine in ",Object(i.b)("em",{parentName:"p"},"any")," repository. In which case, Maven would use the newer JARs in Maven Central instead of your local JARs."))}b.isMDXComponent=!0},703:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);