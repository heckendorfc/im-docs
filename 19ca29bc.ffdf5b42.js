(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),o=n(7),r=(n(0),n(708)),a={title:"Search Engines"},s={unversionedId:"webapp/monitoring-site-usage/search-engines",id:"version-4.0.0/webapp/monitoring-site-usage/search-engines",isDocsHomePage:!1,title:"Search Engines",description:"This document discusses the relationship between your InterMine-based website and search engines.",source:"@site/versioned_docs/version-4.0.0/webapp/monitoring-site-usage/search-engines.md",slug:"/webapp/monitoring-site-usage/search-engines",permalink:"/im-docs/docs/4.0.0/webapp/monitoring-site-usage/search-engines",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-4.0.0/webapp/monitoring-site-usage/search-engines.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"InterMine User Tracking",permalink:"/im-docs/docs/4.0.0/webapp/monitoring-site-usage/trackers"},next:{title:"Website Admin",permalink:"/im-docs/docs/4.0.0/webapp/admin/index"}},c=[{value:"Search Engine Optimisation",id:"search-engine-optimisation",children:[]},{value:"&#39;&#39;&#39;robots.txt&#39;&#39;&#39;",id:"robotstxt",children:[]},{value:"NOFOLLOW",id:"nofollow",children:[]},{value:"Sitemaps",id:"sitemaps",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This document discusses the relationship between your InterMine-based website and search engines."),Object(r.b)("p",null,"If you launch your website, eventually your site will be found and indexed by Google or other search engines."),Object(r.b)("p",null,'Being listed on the search engines is beneficial as it will drive traffic to your site. However being listed can result in unintended consequences, like exposing "hidden" parts of your site. InterMine provides an easy way to control which parts of the website are indexed by the search engines.'),Object(r.b)("h2",{id:"search-engine-optimisation"},"Search Engine Optimisation"),Object(r.b)("p",null,"To use each of the search engines' webmaster tools, you need to include a ",Object(r.b)("inlineCode",{parentName:"p"},"CODE")," in a meta tag on your website. You can do this by updating your properties file like so, replacing ",Object(r.b)("inlineCode",{parentName:"p"},"CODE")," with the value that Google/Microsoft/Yahoo provides:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text"}),"# MINE.properties\n\n# http://www.google.com/analytics\ngoogle.analytics.id=CODE\n\n# http://www.google.com/webmasters\nsearchengines.google=CODE\n\n# http://www.bing.com/webmaster\nsearchengines.msn=CODE\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),"\nSee also ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/monitoring-site-usage/google-analytics"}),"Google Analytics")),Object(r.b)("h2",{id:"robotstxt"},"'''robots.txt'''"),Object(r.b)("p",null,"The easiest way to control what the search engines index is to use a file called robots.txt. Robots use this file to determine which parts of the site they can visit. This file should be located in the root of your site, ie. ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"http://www.flymine.org/robots.txt"}),"www.flymine.org/robots.txt")),Object(r.b)("p",null,"You can also specify which search engines can index your site, e.g. Google or Yahoo. Here is an example file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text"}),"Sitemap: sitemap_index.xml\n\nUser-agent: *\nDisallow: /\n\nUser-agent: Googlebot\nDisallow:\nDisallow: /release-8.2/\nDisallow: /release-8.1/\n\nUser-agent: Slurp\nDisallow:\nDisallow: /release-8.2/\nDisallow: /release-8.1/\n\nUser-agent: msnbot\nDisallow:\nDisallow: /release-8.2/\nDisallow: /release-8.1/\n")),Object(r.b)("p",null,"This file bans all search engine robots except for Google, Yahoo, and MSN. In addition, this file forbids the robots to index files in the release-8.1 and release-8.2 directories."),Object(r.b)("p",null,"Read more about this document on the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"http://www.robotstxt.org"}),"http://www.robotstxt.org")," website."),Object(r.b)("h2",{id:"nofollow"},"NOFOLLOW"),Object(r.b)("p",null,"You can restrict access to directories via the robots.txt file, but you can also configure your site to allow or forbid access to specific web pages."),Object(r.b)("p",null,"To prevent the search engine robots from following links on that page, set the noFollow attribute in the InterMineWebApp.properties file like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text"}),"# MYMINE\nmymine.title = MyMine\nmymine.description = Your list of saved lists and queries\nmymine.tab = mymine\nmymine.noFollow = true\n")),Object(r.b)("h2",{id:"sitemaps"},"Sitemaps"),Object(r.b)("p",null,"Search engines often have difficulty indexing dynamic websites. The easiest solution for this is provide a sitemap that indicates which pages should be indexed."))}p.isMDXComponent=!0},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=i,g=b["".concat(a,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(g,s(s({ref:t},l),{},{components:n})):o.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);