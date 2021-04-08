(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(3),i=n(7),r=(n(0),n(702)),p={title:"Help"},l={unversionedId:"webapp/help/index",id:"version-4.0.0/webapp/help/index",isDocsHomePage:!1,title:"Help",description:"This page lists how you can update the help sections of your InterMine.",source:"@site/versioned_docs/version-4.0.0/webapp/help/index.md",slug:"/webapp/help/index",permalink:"/im-docs/docs/4.0.0/webapp/help/index",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-4.0.0/webapp/help/index.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Web pages markup",permalink:"/im-docs/docs/4.0.0/webapp/markup/index"},next:{title:"Linking in to your mine",permalink:"/im-docs/docs/4.0.0/webapp/linking-in/index"}},o=[{value:"Top Links",id:"top-links",children:[]},{value:"Take a tour link",id:"take-a-tour-link",children:[]},{value:"Contextual help, the <code>?</code> on each page",id:"contextual-help-the--on-each-page",children:[{value:"Set the URL in your properties file",id:"set-the-url-in-your-properties-file",children:[]},{value:"Set the context",id:"set-the-context",children:[]}]},{value:"Data definitions",id:"data-definitions",children:[]}],s={toc:o};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This page lists how you can update the help sections of your InterMine."),Object(r.b)("h2",{id:"top-links"},"Top Links"),Object(r.b)("p",null,"To add help links to the top of your website, add an entry to ",Object(r.b)("inlineCode",{parentName:"p"},"web.properties")," listing the links:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"header.links=link1, link2\n")),Object(r.b)("p",null,"Then specify the URLs:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"header.links.link1=http://www.mysite.com/link1\nheader.links.link2=http://www.mysite.com/link2\n")),Object(r.b)("p",null,"For example, see FlyMine's web.properties file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"header.links=help,FAQ,about,cite,software\nheader.links.FAQ=http://trac.flymine.org/wiki/FlyMineFAQ\nheader.links.about=http://blog.flymine.org/?page_id=35\nheader.links.cite=http://blog.flymine.org/?page_id=37\nheader.links.help=http://blog.flymine.org/?page_id=45\nheader.links.software=http://blog.flymine.org/?page_id=39\n")),Object(r.b)("h2",{id:"take-a-tour-link"},"Take a tour link"),Object(r.b)("p",null,"The tour link is set in ",Object(r.b)("inlineCode",{parentName:"p"},"headMenu.jsp")," as:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"<project.helpLocation>/tour/start\n")),Object(r.b)("p",null,"Set ",Object(r.b)("inlineCode",{parentName:"p"},"project.helpLocation")," property in your mine.properties file. If you don't have help pages set up, link to FlyMine's pages:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"project.helpLocation=http://www.flymine.org/help\n")),Object(r.b)("h2",{id:"contextual-help-the--on-each-page"},"Contextual help, the ",Object(r.b)("inlineCode",{parentName:"h2"},"?")," on each page"),Object(r.b)("h3",{id:"set-the-url-in-your-properties-file"},"Set the URL in your properties file"),Object(r.b)("p",null,"On each page is a ? that links to help pages. Specify the main URL that this question mark should link to by setting the ",Object(r.b)("inlineCode",{parentName:"p"},"project.helpLocation")," property in your mine.properties file."),Object(r.b)("p",null,"If you don't have help pages set up, link to FlyMine's pages:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"project.helpLocation=http://www.flymine.org/help\n")),Object(r.b)("h3",{id:"set-the-context"},"Set the context"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If the user is on a webpage defined in the properties file, then when they click the help link they will be forwarded to the help section for the page they were viewing.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If the page they are on is not specified in the properties file, they will be forwarded to the first page of the help document.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The context is determined by parsing the URL and taking the name of the current webpage, minus the ",Object(r.b)("inlineCode",{parentName:"p"},".do"),". For example, go to FlyMine and click on the 'templates' tab, this is the URL:"),Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.flymine.org/query/templates.do"}),"http://www.flymine.org/query/templates.do"),'. The parsed name of that webpage is "templates".')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Below are the mappings from parsed webpage name to anchor names on"),Object(r.b)("p",{parentName:"li"},"the help page."))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"help.page.<parsed webpage name> = <anchor in help.html file>\n\nhelp.page.begin=begin\nhelp.page.templates=templates\nhelp.page.bag=lists\nhelp.page.bag.upload=lists:upload\nhelp.page.bag.view=lists:view\nhelp.page.customQuery=customQuery\nhelp.page.mymine.lists=mymine:lists\nhelp.page.mymine.history=mymine:queryHistory\nhelp.page.mymine.saved=mymine:savedQueries\nhelp.page.mymine.templates=mymine:savedTemplates\nhelp.page.mymine.password=mymine:changePassword\nhelp.page.dataCategories=data\nhelp.page.objectDetails=reportPage\nhelp.page.template=template\nhelp.page.results=results\nhelp.page.bagDetails=listAnalysis\nhelp.page.bagUploadConfirm=buildList\nhelp.page.query=query\nhelp.page.importQueries=importQueries\nhelp.page.importTemplates=importTemplates\nhelp.page.tree=tree\nhelp.page.aspect=dataCategory\n")),Object(r.b)("p",null,"Your mine's web.properties file is merged with this web.properties file, so the entries you add to web.properties will overwrite the values listed above."),Object(r.b)("h2",{id:"data-definitions"},"Data definitions"),Object(r.b)("p",null,"Update these in the classDescriptions.properties file."))}c.isMDXComponent=!0},702:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),c=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=c(n),u=a,d=b["".concat(p,".").concat(u)]||b[u]||h[u]||r;return n?i.a.createElement(d,l(l({ref:t},s),{},{components:n})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<r;s++)p[s]=n[s];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);