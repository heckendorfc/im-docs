(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{323:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),l=n(7),i=(n(0),n(702)),a={title:"Link redirects"},o={unversionedId:"webapp/query-results/redirects",id:"webapp/query-results/redirects",isDocsHomePage:!1,title:"Link redirects",description:"You can add a property to WebProperties to have links in results forward the user to a URL instead of the InterMine report page.",source:"@site/docs/webapp/query-results/redirects.md",slug:"/webapp/query-results/redirects",permalink:"/im-docs/docs/next/webapp/query-results/redirects",editUrl:"https://github.com/intermine/im-docs/docs/webapp/query-results/redirects.md",version:"current"},c=[{value:"config",id:"config",children:[]},{value:"examples",id:"examples",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can add a property to WebProperties to have links in results forward the user to a URL instead of the InterMine report page."),Object(i.b)("h3",{id:"config"},"config"),Object(i.b)("p",null,"Add the following to your WebProperties file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"# used to redirect links in webapp\nwebapp.linkRedirect=org.intermine.bio.web.BioLinkRedirectManager\n\n# links to intermine report pages will be replaced with these URLs\nexternallink.[uniqueID].[class].[taxonId].[field].url = [full URL]\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"uniqueId")),Object(i.b)("p",null,"any string, should be different for each entry, internal use only"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"class")),Object(i.b)("p",null,"class of Object to redirect, eg. Gene or Protein"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"taxonId")),Object(i.b)("p",null,"taxon ID or ","*"," if config should apply to all"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"field")),Object(i.b)("p",null,"which identifier field to pass to the URL, eg. if field is primaryIdentifier, the value of primary identifier will be used as the attribute value"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"full URL")),Object(i.b)("p",null,"full http address, eg. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.google.co.uk/#q=monkey"}),"http://www.google.co.uk/","#","q=monkey")),Object(i.b)("p",null,"All columns in the results for the configured class will be links to the external URL."),Object(i.b)("h3",{id:"examples"},"examples"),Object(i.b)("p",null,"In results pages, all dmel genes will link to FlyBase with Gene.primaryIdentifier instead of the Mine report page:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"externallink.flybaseResults.Gene.7227.primaryIdentifier.url=http://www.flybase.org/.bin/fbidq.html?<<attributeValue>>\n")),Object(i.b)("p",null,"One could also use a common URL with a common hostname and different subdirectory names. Intermine then figures out what URL to build with the given subdirectory name and redirects your query to that mine Report page using the Identifier you provide as an external identifier. Common subdirectory names include:"),Object(i.b)("p",null,"MOUSEMINE = intermine.org/mgi"),Object(i.b)("p",null,"YEASTMINE = intermine.org/sgd"),Object(i.b)("p",null,"ZEBRAFISHMINE = intermine.org/zfin"),Object(i.b)("p",null,"WORMMINE = intermine.org/wormbase"),Object(i.b)("p",null,"RATMINE = intermine.org/rgd"),Object(i.b)("p",null,"METABOLICMINE = ","(","Please update",")"),Object(i.b)("p",null,"So an externallink to RATMINE will look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"externallink.flybaseResults.Gene.10116.primaryIdentifier.url=http://www.intermine.org/rgd/portal.do?externalids<<attributeValue>>&class=Gene&origin=Ratmine\n")),Object(i.b)("p",null,"In results pages, all probesets will link to Google instead of the Mine report page:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"externallink.foo.ProbeSet.*.primaryIdentifier.url=http://www.google.com?q=<<attributeValue>>\n")),Object(i.b)("p",null,"Next to the value in the column will be a small icon indicating an external link"))}u.isMDXComponent=!0},702:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),l=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),u=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(a,".").concat(d)]||s[d]||b[d]||i;return n?l.a.createElement(f,o(o({ref:t},p),{},{components:n})):l.a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);