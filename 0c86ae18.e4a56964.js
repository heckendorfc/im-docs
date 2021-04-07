(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{708:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,f=l["".concat(a,".").concat(b)]||l[b]||d[b]||i;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(708)),a={title:"Open ID"},c={unversionedId:"webapp/user-accounts/open-id",id:"version-4.0.0/webapp/user-accounts/open-id",isDocsHomePage:!1,title:"Open ID",description:"InterMine web-applications allow users to create accounts and sign in to these accounts by authenticating with a selection of Open-ID providers, including Yahoo.",source:"@site/versioned_docs/version-4.0.0/webapp/user-accounts/open-id.md",slug:"/webapp/user-accounts/open-id",permalink:"/im-docs/docs/4.0.0/webapp/user-accounts/open-id",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-4.0.0/webapp/user-accounts/open-id.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Userprofile",permalink:"/im-docs/docs/4.0.0/webapp/user-accounts/userprofile"},next:{title:"Performance",permalink:"/im-docs/docs/4.0.0/webapp/performance/index"}},p=[],s={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"InterMine web-applications allow users to create accounts and sign in to these accounts by authenticating with a selection of Open-ID providers, including Yahoo."),Object(i.b)("p",null,"To sign in with one of these authentication providers: 1. Click on '''login''' ","(","in the upper-right",")",". 2. Click the name of the Open-ID provider you wish to use. 3. Authenticate yourself with your provider. 4. You will be redirected to your mine when finished."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),"\nGoogle has shut down its OpenID-2 service. To continue using Google authentication, you must use OAuth2 authentication! See the section on editing web-properties for more details."),Object(i.b)("p",null,"To set this up for a mine you administer:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The most important thing is to set up a couple of properties correctly in your mine's properties file ","(","located in the ",Object(i.b)("inlineCode",{parentName:"li"},".intermine")," directory",")",", eg:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"webapp.baseurl=http://beta.flymine.org\nwebapp.path=intermine-test\n")),Object(i.b)("p",null,'If you do not wish to allow Open-ID accounts, set the property "openid.allowed=false" in any of the property files that end up in the WEB',"_","PROPERTIES map."))}u.isMDXComponent=!0}}]);