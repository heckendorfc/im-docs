(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{261:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),a=(t(0),t(703)),o={title:"InterMine JARs"},c={unversionedId:"intermine/intermine",id:"intermine/intermine",isDocsHomePage:!1,title:"InterMine JARs",description:"InterMine JARs are published on Maven Central//repo1.maven.org/maven2/org/intermine/",source:"@site/docs/intermine/intermine.md",slug:"/intermine/intermine",permalink:"/im-docs/docs/next/intermine/intermine",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/intermine/intermine.md",version:"current",sidebar:"someSidebar",previous:{title:"InterMine Tests",permalink:"/im-docs/docs/next/get-started/intermine-tests"},next:{title:"Upgrading InterMine",permalink:"/im-docs/docs/next/intermine/upgrade"}},p=[{value:"Maven",id:"maven",children:[]},{value:"Gradle",id:"gradle",children:[]}],l={toc:p};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"InterMine JARs are published on Maven Central: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://repo1.maven.org/maven2/org/intermine/"}),"https://repo1.maven.org/maven2/org/intermine/")),Object(a.b)("p",null,"To put these on your classpath, add the correct dependencies, e.g."),Object(a.b)("h2",{id:"maven"},"Maven"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"<dependency>\n    <groupId>org.intermine</groupId>\n    <artifactId>intermine-api</artifactId>\n    <version>5.0.0</version>\n    <type>pom</type>\n</dependency>\n")),Object(a.b)("h2",{id:"gradle"},"Gradle"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"compile 'org.intermine:intermine-api:5.0.0'\n")))}u.isMDXComponent=!0},703:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,b=m["".concat(o,".").concat(d)]||m[d]||s[d]||a;return t?i.a.createElement(b,c(c({ref:n},l),{},{components:t})):i.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);