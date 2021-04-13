(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{366:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(545)),o={title:"InterMine JavaScript API Loader"},s={unversionedId:"embedding/api-loader",id:"version-4.0.0/embedding/api-loader",isDocsHomePage:!1,title:"InterMine JavaScript API Loader",description:"Note",source:"@site/versioned_docs/version-4.0.0/embedding/api-loader.md",slug:"/embedding/api-loader",permalink:"/im-docs/docs/4.0.0/embedding/api-loader",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/embedding/api-loader.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"elastic-med",permalink:"/im-docs/docs/4.0.0/embedding/apps-c/elastic-med"},next:{title:"InterMine JavaScript Library",permalink:"/im-docs/docs/4.0.0/embedding/imjs"}},c=[{value:"Purpose",id:"purpose",children:[]},{value:"How to use",id:"how-to-use",children:[]}],l={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nSee also ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/intermine-api-loader"}),"GitHub repo")," for source code."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nIf you are loading JavaScript libraries on a page, you should use a loader ","(","count of 1",")",". Why not use ours?"),Object(i.b)("h3",{id:"purpose"},"Purpose"),Object(i.b)("p",null,"To simplify loading of CSS and JS libraries. The API Loader automatically works out the order the libraries should be loaded based on dependencies between them. It also skips libraries that already exist on a page or that pass a specific check."),Object(i.b)("h3",{id:"how-to-use"},"How to use"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nIf you are passing a string or an array as the first parameter into the library, these are @deprecated but still working for backwards compatibility."),Object(i.b)("p",null,"First you require the API Loader. You can, for example, use the following shorthand notation that always points to the latest version."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<script src="http://cdn.intermine.org/api"><\/script>\n')),Object(i.b)("p",null,"Now, you can use the loader by passing in an object that looks for example like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"intermine.load({\n  'js': {\n    'JSON': {\n      'path': 'http://cdn.intermine.org/js/json3/3.2.2/json3.min.js'\n    },\n    'setImmediate': {\n      'path': 'http://cdn.intermine.org/js/setImmediate/1.0.1/setImmediate.min.js'\n    },\n    'example': {\n      'path': 'http://',\n      'test': function() {\n        return true;\n      }\n    },\n    'async': {\n      'path': 'http://cdn.intermine.org/js/async/0.2.6/async.min.js',\n      'depends': ['setImmediate']\n    },\n    'jQuery': {\n      'path': 'http://cdn.intermine.org/js/jquery/1.8.2/jquery.min.js',\n      'depends': ['JSON']\n    },\n    '_': {\n      'path': 'http://cdn.intermine.org/js/underscore.js/1.3.3/underscore-min.js',\n      'depends': ['JSON']\n    },\n    'Backbone': {\n      'path': 'http://cdn.intermine.org/js/backbone.js/0.9.2/backbone-min.js',\n      'depends': ['jQuery', '_']\n    }\n  }\n}, function(err) {\n  // your libraries have loaded\n});\n")),Object(i.b)("p",null,"The object works like so:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You pass in either a ",Object(i.b)("inlineCode",{parentName:"li"},"js")," or a ",Object(i.b)("inlineCode",{parentName:"li"},"css")," object based on whether you are requesting JavaScript or CSS libraries ","(","or both",")","."),Object(i.b)("li",{parentName:"ol"},"The key inside the object, like ",Object(i.b)("inlineCode",{parentName:"li"},"jQuery")," then refers to your library. If this key is on a ",Object(i.b)("inlineCode",{parentName:"li"},"window")," object ","(","as is the case with jQuery library",")",", we won't load the library since it already exists."),Object(i.b)("li",{parentName:"ol"},"If you do not like the previous check and want something more robust, pass a sync function under the ",Object(i.b)("inlineCode",{parentName:"li"},"test")," key. Return ",Object(i.b)("inlineCode",{parentName:"li"},"true")," if a library should NOT be loaded."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"path")," represents the URL pointing to the library."),Object(i.b)("li",{parentName:"ol"},"Use ",Object(i.b)("inlineCode",{parentName:"li"},"depends")," key, passing an array if a library depends on other libraries in your list. In the example, you can see that ",Object(i.b)("inlineCode",{parentName:"li"},"Backbone")," depends on ",Object(i.b)("inlineCode",{parentName:"li"},"jQuery")," and ",Object(i.b)("inlineCode",{parentName:"li"},"_")," ","(","underscore.js",")",". The appropriate loading order will be worked out from this."),Object(i.b)("li",{parentName:"ol"},"Check the ",Object(i.b)("inlineCode",{parentName:"li"},"err")," variable passed in the callback function ","(","second parameter",")",".")))}p.isMDXComponent=!0},545:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return t?a.a.createElement(m,s(s({ref:n},l),{},{components:t})):a.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);