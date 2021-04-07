(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{479:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(708)),o={title:"Quick Start"},c={unversionedId:"get-started/quick-start",id:"version-5.0.0/get-started/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"This guide will show you how to create a BioTestMine InterMine instance. You will need all the dependencies listed in Software",source:"@site/versioned_docs/version-5.0.0/get-started/quick-start.md",slug:"/get-started/quick-start",permalink:"/im-docs/docs/get-started/quick-start",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-5.0.0/get-started/quick-start.md",version:"5.0.0",sidebar:"version-5.0.0/someSidebar",previous:{title:"Data files to integrate",permalink:"/im-docs/docs/get-started/tutorial/test-data"},next:{title:"Create Your Own InterMine!",permalink:"/im-docs/docs/get-started/create-your-mine"}},s=[{value:"1. Get the software",id:"1-get-the-software",children:[]},{value:"2. Add a mine properties file",id:"2-add-a-mine-properties-file",children:[]},{value:"3. Set up your search index (optional)",id:"3-set-up-your-search-index-optional",children:[]},{value:"4. Build + deploy your webapp",id:"4-build--deploy-your-webapp",children:[]},{value:"Next steps",id:"next-steps",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guide will show you how to create a ",Object(i.b)("inlineCode",{parentName:"p"},"BioTestMine")," InterMine instance. You will need all the dependencies listed in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/system-requirements/software/index"}),"Software")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nPlease see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/get-started/tutorial/index"}),"Tutorial"),", a detailed guide to integrating data with InterMine. "),Object(i.b)("h3",{id:"1-get-the-software"},"1. Get the software"),Object(i.b)("p",null,"Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/ $ git clone https://github.com/intermine/biotestmine.git\n")),Object(i.b)("p",null,"You now have an InterMine! This ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/get-started/tutorial/index"}),"tutorial")," goes into detail about the various files that comprise an InterMine."),Object(i.b)("h3",{id:"2-add-a-mine-properties-file"},"2. Add a mine properties file"),Object(i.b)("p",null,"Your InterMine uses a properties file for database usernames and passwords, let's create that file now."),Object(i.b)("p",null,"Make an intermine directory in your home directory."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"# change to be in your home directory\n~/git $ cd\n# make an intermine directory\n~ $ mkdir .intermine\n")),Object(i.b)("p",null,"Copy the properties file from the git repository to your local InterMine directory."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/.intermine $ cp ~/git/biotestmine/data/biotestmine.properties\n")),Object(i.b)("p",null,"Now update your new properties files with the values correct for your InterMine. Replace PSQL","_","USER and PSQL","_","PWD with your postgres username and password."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../webapp/properties/intermine-properties.md"}),"Database and Web application")," for details on this file and what each property means."),Object(i.b)("h3",{id:"3-set-up-your-search-index-optional"},"3. Set up your search index ","(","optional",")"),Object(i.b)("p",null,"Solr handles the keyword search in InterMine. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/im-docs/docs/system-requirements/software/solr"}),"Solr")," for details on how to set Solr up for your mine."),Object(i.b)("p",null,"If you skip this step, your mine will work fine but the keyword search will fail."),Object(i.b)("h3",{id:"4-build--deploy-your-webapp"},"4. Build + deploy your webapp"),Object(i.b)("p",null,"Now run the build!"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"~/git/biotestmine $ ./setup.sh\n")),Object(i.b)("p",null,"Your build ","(","depending on your server",")"," will take a few minutes to run."),Object(i.b)("h2",{id:"next-steps"},"Next steps"),Object(i.b)("p",null,"Congratulations! You now have an InterMine! Visit it at localhost:8080/biotestmine."),Object(i.b)("p",null,"Next you will want to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://intermine.org/tutorials/"}),"learn how to use the InterMine webapp")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"../webapp/properties/intermine-properties"}),"customise your mine")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/im-docs/docs/database/data-sources/custom/index"}),"add your own data sources ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/im-docs/docs/support/mailing-list"}),"join the intermine mailing list"))))}p.isMDXComponent=!0},708:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);