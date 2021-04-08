(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{384:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(707)),i={title:"Google Analytics"},c={unversionedId:"webapp/monitoring-site-usage/google-analytics",id:"webapp/monitoring-site-usage/google-analytics",isDocsHomePage:!1,title:"Google Analytics",description:"To enable Google Analytics to track usage of your webapp you need to set up your Analytics account and get a '''code''' from Google then, add a property to your .intermine/xxxmine.properties file:",source:"@site/docs/webapp/monitoring-site-usage/google-analytics.md",slug:"/webapp/monitoring-site-usage/google-analytics",permalink:"/im-docs/docs/next/webapp/monitoring-site-usage/google-analytics",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/webapp/monitoring-site-usage/google-analytics.md",version:"current",sidebar:"someSidebar",previous:{title:"JBrowse",permalink:"/im-docs/docs/next/webapp/third-party-tools/jbrowse"},next:{title:"Website Admin",permalink:"/im-docs/docs/next/webapp/admin/index"}},s=[],p={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To enable Google Analytics to track usage of your webapp you need to set up your Analytics account and get a '''code''' from Google then, add a property to your ",Object(a.b)("inlineCode",{parentName:"p"},".intermine/xxxmine.properties")," file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),"google.analytics.id=CODE\n")),Object(a.b)("p",null,"This places the Google JavaScript to track usage views of every page of the webapp."),Object(a.b)("p",null,"To modify the displayed message asking the user if they agree to the usage of cookies, modify:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),"google.analytics.message=I accept cookies from this site\n")),Object(a.b)("p",null,"If no key - message is provided, no message is shown and cookies are accepted by default."))}l.isMDXComponent=!0},707:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||g[m]||a;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);