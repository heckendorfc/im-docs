(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(702)),i={title:"Java"},s={unversionedId:"system-requirements/software/java",id:"system-requirements/software/java",isDocsHomePage:!1,title:"Java",description:"We recommend you use OpenJDK rather than Sun's JDK. There isn't much difference between the two now as far as InterMine is concerned, but going forward it's probably safer.",source:"@site/docs/system-requirements/software/java.md",slug:"/system-requirements/software/java",permalink:"/im-docs/docs/next/system-requirements/software/java",editUrl:"https://github.com/intermine/im-docs/docs/system-requirements/software/java.md",version:"current",sidebar:"someSidebar",previous:{title:"Git",permalink:"/im-docs/docs/next/system-requirements/software/git"},next:{title:"Perl",permalink:"/im-docs/docs/next/system-requirements/software/perl"}},c=[{value:"GRADLE_OPTS",id:"gradle_opts",children:[]}],u={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We recommend you use OpenJDK rather than Sun's JDK. There isn't much difference between the two now as far as InterMine is concerned, but going forward it's probably safer."),Object(o.b)("p",null,"The version of Gradle we are using is compatible with Java 11."),Object(o.b)("h2",{id:"gradle_opts"},"GRADLE","_","OPTS"),Object(o.b)("p",null,"InterMine can be rather memory-intensive, so you will probably need to set memory options for Java. To do this, set the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"GRADLE_OPTS")," to pass in to Java, by placing the following line in your ",Object(o.b)("inlineCode",{parentName:"p"},"~/.bashrc")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'# ~/.bashrc file\n$ export GRADLE_OPTS="-server -Xmx8g -XX:+UseParallelGC -Xms2g -XX:SoftRefLRUPolicyMSPerMB=1 -XX:MaxHeapFreeRatio=99 -Dorg.gradle.daemon=false"\n')),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"source")," to use this value in the current session."),Object(o.b)("p",null,"You should change the ",Object(o.b)("inlineCode",{parentName:"p"},"-Xmx")," and ",Object(o.b)("inlineCode",{parentName:"p"},"-Xms"),"values if you have very little or very much RAM in your computer."),Object(o.b)("p",null,"Building a database requires much more memory than running a webapp only."))}l.isMDXComponent=!0},702:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return r?a.a.createElement(f,s(s({ref:t},u),{},{components:r})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);