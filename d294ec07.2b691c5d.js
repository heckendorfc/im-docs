(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{601:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),a=(r(0),r(707)),o={title:"Quick Start"},c={unversionedId:"get-started/quick-start",id:"version-4.0.0/get-started/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"This guide will show you how to create a BioTestMine InterMine instance. You will need all the dependencies listed in Software",source:"@site/versioned_docs/version-4.0.0/get-started/quick-start.md",slug:"/get-started/quick-start",permalink:"/im-docs/docs/4.0.0/get-started/quick-start",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/get-started/quick-start.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Data files to integrate",permalink:"/im-docs/docs/4.0.0/get-started/tutorial/test-data"},next:{title:"Create Your Own InterMine!",permalink:"/im-docs/docs/4.0.0/get-started/create-your-mine"}},s=[{value:"1. Get the software",id:"1-get-the-software",children:[]},{value:"2. Add a mine properties file",id:"2-add-a-mine-properties-file",children:[]},{value:"3. Set up your search index (optional)",id:"3-set-up-your-search-index-optional",children:[]},{value:"4. Build + deploy your webapp",id:"4-build--deploy-your-webapp",children:[]},{value:"Next steps",id:"next-steps",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guide will show you how to create a ",Object(a.b)("inlineCode",{parentName:"p"},"BioTestMine")," InterMine instance. You will need all the dependencies listed in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/system-requirements/software/index"}),"Software")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),"\nPlease see ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/get-started/tutorial/index"}),"Tutorial"),", a detailed guide to integrating data with InterMine. "),Object(a.b)("h3",{id:"1-get-the-software"},"1. Get the software"),Object(a.b)("p",null,"Clone the repository"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/ $ git clone https://github.com/intermine/biotestmine.git\n")),Object(a.b)("p",null,"You now have an InterMine! This ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/get-started/tutorial/index"}),"tutorial")," goes into detail about the various files that comprise an InterMine."),Object(a.b)("h3",{id:"2-add-a-mine-properties-file"},"2. Add a mine properties file"),Object(a.b)("p",null,"Your InterMine uses a properties file for database usernames and passwords, let's create that file now."),Object(a.b)("p",null,"Make an intermine directory in your home directory."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"# change to be in your home directory\n~/git $ cd\n# make an intermine directory\n~ $ mkdir .intermine\n")),Object(a.b)("p",null,"Copy the properties file from the git repository to your local InterMine directory."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/.intermine $ cp ~/git/biotestmine/data/biotestmine.properties\n")),Object(a.b)("p",null,"Now update your new properties files with the values correct for your InterMine. Replace PSQL","_","USER and PSQL","_","PWD with your postgres username and password."),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/properties/intermine-properties"}),"Database and Web application")," for details on this file and what each property means."),Object(a.b)("h3",{id:"3-set-up-your-search-index-optional"},"3. Set up your search index ","(","optional",")"),Object(a.b)("p",null,"Solr handles the keyword search in InterMine. See ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/system-requirements/software/solr"}),"Solr")," for details on how to set Solr up for your mine."),Object(a.b)("p",null,"If you skip this step, your mine will work fine but the keyword search will fail."),Object(a.b)("h3",{id:"4-build--deploy-your-webapp"},"4. Build + deploy your webapp"),Object(a.b)("p",null,"Now run the build!"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/biotestmine $ ./setup.sh\n")),Object(a.b)("p",null,"Your build ","(","depending on your server",")"," will take a few minutes to run."),Object(a.b)("h2",{id:"next-steps"},"Next steps"),Object(a.b)("p",null,"Congratulations! You now have an InterMine! Visit it at localhost:8080/biotestmine."),Object(a.b)("p",null,"Next you will want to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://intermine.org/tutorials/"}),"learn how to use the InterMine webapp")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"../webapp/properties/intermine-properties"}),"customise your mine")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/database/data-sources/custom/index"}),"add your own data sources ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/im-docs/docs/4.0.0/support/mailing-list"}),"join the intermine mailing list"))))}p.isMDXComponent=!0},707:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return r?i.a.createElement(m,c(c({ref:t},l),{},{components:r})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);