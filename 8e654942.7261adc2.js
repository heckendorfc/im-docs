(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{430:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(708)),a={title:"Intellij"},l={unversionedId:"system-requirements/software/intellij",id:"version-4.0.0/system-requirements/software/intellij",isDocsHomePage:!1,title:"Intellij",description:"It's recommended that if you are working with InterMine's Java code, you use an IDE. Our favourite IDE at InterMine towers is Intellij.",source:"@site/versioned_docs/version-4.0.0/system-requirements/software/intellij.md",slug:"/system-requirements/software/intellij",permalink:"/im-docs/docs/4.0.0/system-requirements/software/intellij",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-4.0.0/system-requirements/software/intellij.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Maven",permalink:"/im-docs/docs/4.0.0/system-requirements/software/maven"},next:{title:"Solr",permalink:"/im-docs/docs/4.0.0/system-requirements/software/solr"}},c=[{value:"Errors",id:"errors",children:[]},{value:"Running Unit Tests",id:"running-unit-tests",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It's recommended that if you are working with InterMine's Java code, you use an IDE. Our favourite IDE at InterMine towers is Intellij."),Object(o.b)("p",null,"Intellij has a Gradle plugin, so, it automatically handles Gradle projects correctly. Here are detailed instructions on how to use Intellij:"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.jetbrains.com/help/idea/gradle.html"}),"https://www.jetbrains.com/help/idea/gradle.html")),Object(o.b)("p",null,"Depending on your Intellij version, you should:"),Object(o.b)("blockquote",null,Object(o.b)("ol",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ol"},"Select New ",">"),Object(o.b)("li",{parentName:"ol"},"Select Project from existing source ",">"),Object(o.b)("li",{parentName:"ol"},"Then select the ",Object(o.b)("inlineCode",{parentName:"li"},"build.gradle")," file from your ",Object(o.b)("inlineCode",{parentName:"li"},"bio/sources")," directory."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Warning"),"\nDon't select the ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle"),"files from your sources. Instead, select the ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle")," file from the ",Object(o.b)("inlineCode",{parentName:"p"},"bio/sources")," directory. The dependencies are listed in the main project's ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle")," file. If you load each subproject by itself, Intellij won't load the dependencies correctly."),Object(o.b)("p",null,"You should import two projects for your mine:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"flymine ","(","webapp and dbmodel",")"),Object(o.b)("li",{parentName:"ul"},"flymine-bio-sources")),Object(o.b)("p",null,"If you are working with the core InterMine code for whatever reason, we have several projects to import:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"plugin"),Object(o.b)("li",{parentName:"ul"},"intermine"),Object(o.b)("li",{parentName:"ul"},"bio"),Object(o.b)("li",{parentName:"ul"},"bio-sources"),Object(o.b)("li",{parentName:"ul"},"bio-postprocess")),Object(o.b)("h2",{id:"errors"},"Errors"),Object(o.b)("p",null,'You\'ll get errors at first as the dependencies are not in place. Build each project, and the dependencies will be downloaded and put on your classpath. We recommend you check the option "Build project automatically", located under Compiler Settings.'),Object(o.b)("h2",{id:"running-unit-tests"},"Running Unit Tests"),Object(o.b)("p",null,'To run a unit test, right click on the "test" task and execute. "Test" is under "Verification".'),Object(o.b)("p",null,"Here is a detailed explanation:"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.jetbrains.com/help/idea/gradle.html#gradle_context_menu"}),"https://www.jetbrains.com/help/idea/gradle.html","#","gradle","_","context","_","menu")))}u.isMDXComponent=!0},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);