(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{519:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(708)),s={title:"Mac Installation Notes"},c={unversionedId:"system-requirements/software/macs",id:"system-requirements/software/macs",isDocsHomePage:!1,title:"Mac Installation Notes",description:"This is a work in progress. At the moment, just some notes and useful links.",source:"@site/docs/system-requirements/software/macs.md",slug:"/system-requirements/software/macs",permalink:"/im-docs/docs/next/system-requirements/software/macs",editUrl:"https://github.com/intermine/im-docs/docs/system-requirements/software/macs.md",version:"current",sidebar:"someSidebar",previous:{title:"Tomcat",permalink:"/im-docs/docs/next/system-requirements/software/tomcat"},next:{title:"Maven",permalink:"/im-docs/docs/next/system-requirements/software/maven"}},i=[{value:"Installing Tomcat",id:"installing-tomcat",children:[]},{value:"Installing Postgres",id:"installing-postgres",children:[]}],l={toc:i};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is a work in progress. At the moment, just some notes and useful links."),Object(o.b)("h2",{id:"installing-tomcat"},"Installing Tomcat"),Object(o.b)("p",null,"Tomcat is easy to install by downloading the tar.gz file of the latest release and extracting it. You can then get started almost immediately."),Object(o.b)("p",null,"From the Tomcat website, find the latest stable version in the Downloads section, currently 6.0.x. Scroll to 'Binary Distributions', 'Core' and save the ",Object(o.b)("inlineCode",{parentName:"p"},"tar.gz")," file."),Object(o.b)("p",null,"Extract this file with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ tar -zxvf apache-tomcat-6.0.x\n")),Object(o.b)("p",null,"Change into the apache-tomcat-6.0.x, the following directories are of interest:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"bin")," - scripts to startup and shutdown tomcat"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"logs")," - error logs are written here"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"webapps")," - the directory web applications are deployed to"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"conf")," - configuration files")),Object(o.b)("p",null,"Before starting, you need to set up a manager user, so you can deploy web applications. We recommend you allocate more RAM to tomcat - ","[","wiki:Prerequisites","#","Tomcat see here","]"),Object(o.b)("p",null,"Start up tomcat by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ apache-tomcat-6.0.x/bin/startup.sh\n")),Object(o.b)("p",null,"To check tomcat is running, try to access ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8080")," in a web browser. You should see a Tomcat home page. If you don't see the tomcat page, check ",Object(o.b)("inlineCode",{parentName:"p"},"apache-tomcat-6.0.x/catalina.out")," and ",Object(o.b)("inlineCode",{parentName:"p"},"apache-tomcat-6.0.x/localhost-<data>.log")," for error messages and consult the Tomcat docs."),Object(o.b)("h2",{id:"installing-postgres"},"Installing Postgres"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.postgresql.org/download/macosx"}),"http://www.postgresql.org/download/macosx"),". We've had the most success with MacPorts."))}m.isMDXComponent=!0},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=m(n),b=r,d=p["".concat(s,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);