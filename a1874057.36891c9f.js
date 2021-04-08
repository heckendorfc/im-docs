(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{473:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),l=(r(0),r(707)),a={title:"Link redirects"},o={unversionedId:"webapp/query-results/redirects",id:"version-4.0.0/webapp/query-results/redirects",isDocsHomePage:!1,title:"Link redirects",description:"You can add a property to WebProperties to have links in results forward the user to a URL instead of the InterMine report page.",source:"@site/versioned_docs/version-4.0.0/webapp/query-results/redirects.md",slug:"/webapp/query-results/redirects",permalink:"/im-docs/docs/4.0.0/webapp/query-results/redirects",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/webapp/query-results/redirects.md",version:"4.0.0"},c=[{value:"config",id:"config",children:[]},{value:"examples",id:"examples",children:[]}],s={toc:c};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"You can add a property to WebProperties to have links in results forward the user to a URL instead of the InterMine report page."),Object(l.b)("h3",{id:"config"},"config"),Object(l.b)("p",null,"Add the following to your WebProperties file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"# used to redirect links in webapp\nwebapp.linkRedirect=org.intermine.bio.web.BioLinkRedirectManager\n\n# links to intermine report pages will be replaced with these URLs\nexternallink.[uniqueID].[class].[taxonId].[field].url = [full URL]\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"uniqueId")),Object(l.b)("p",null,"any string, should be different for each entry, internal use only"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"class")),Object(l.b)("p",null,"class of Object to redirect, eg. Gene or Protein"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"taxonId")),Object(l.b)("p",null,"taxon ID or ","*"," if config should apply to all"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"field")),Object(l.b)("p",null,"which identifier field to pass to the URL, eg. if field is primaryIdentifier, the value of primary identifier will be used as the attribute value"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"full URL")),Object(l.b)("p",null,"full http address, eg. ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.google.co.uk/#q=monkey"}),"http://www.google.co.uk/","#","q=monkey")),Object(l.b)("p",null,"All columns in the results for the configured class will be links to the external URL."),Object(l.b)("h3",{id:"examples"},"examples"),Object(l.b)("p",null,"In results pages, all dmel genes will link to FlyBase with Gene.primaryIdentifier instead of the Mine report page:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"externallink.flybaseResults.Gene.7227.primaryIdentifier.url=http://www.flybase.org/.bin/fbidq.html?<<attributeValue>>\n")),Object(l.b)("p",null,"One could also use a common URL with a common hostname and different subdirectory names. Intermine then figures out what URL to build with the given subdirectory name and redirects your query to that mine Report page using the Identifier you provide as an external identifier. Common subdirectory names include:"),Object(l.b)("p",null,"MOUSEMINE = intermine.org/mgi"),Object(l.b)("p",null,"YEASTMINE = intermine.org/sgd"),Object(l.b)("p",null,"ZEBRAFISHMINE = intermine.org/zfin"),Object(l.b)("p",null,"WORMMINE = intermine.org/wormbase"),Object(l.b)("p",null,"RATMINE = intermine.org/rgd"),Object(l.b)("p",null,"METABOLICMINE = ","(","Please update",")"),Object(l.b)("p",null,"So an externallink to RATMINE will look like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"externallink.flybaseResults.Gene.10116.primaryIdentifier.url=http://www.intermine.org/rgd/portal.do?externalids<<attributeValue>>&class=Gene&origin=Ratmine\n")),Object(l.b)("p",null,"In results pages, all probesets will link to Google instead of the Mine report page:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"externallink.foo.ProbeSet.*.primaryIdentifier.url=http://www.google.com?q=<<attributeValue>>\n")),Object(l.b)("p",null,"Next to the value in the column will be a small icon indicating an external link"))}p.isMDXComponent=!0},707:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||l;return r?i.a.createElement(f,o(o({ref:t},s),{},{components:r})):i.a.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);