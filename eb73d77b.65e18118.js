(window.webpackJsonp=window.webpackJsonp||[]).push([[579],{650:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(708)),a={title:"Authentication"},s={unversionedId:"web-services/authentication",id:"web-services/authentication",isDocsHomePage:!1,title:"Authentication",description:"Authentication with InterMine Web services is chiefly used to identify a user and access their lists and templates.",source:"@site/docs/web-services/authentication.md",slug:"/web-services/authentication",permalink:"/im-docs/docs/next/web-services/authentication",editUrl:"https://github.com/intermine/im-docs/docs/web-services/authentication.md",version:"current",sidebar:"someSidebar",previous:{title:"InterMine Properties",permalink:"/im-docs/docs/next/web-services/intermine-properties"},next:{title:"Diagnostic",permalink:"/im-docs/docs/next/web-services/diagnostic"}},c=[{value:"Anonymous authentication",id:"anonymous-authentication",children:[]},{value:"Authentication for existing user accounts (permanent tokens)",id:"authentication-for-existing-user-accounts-permanent-tokens",children:[]}],u={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Authentication with InterMine Web services is chiefly used to identify a user and access their lists and templates."),Object(o.b)("p",null,"Tokens come in two flavours: Temporary/anonymous and permanent/associated with an existing account. Each token will uniquely identify an individual for a single specific InterMine instance -cross-mine applications will need 1 token per user per InterMine."),Object(o.b)("p",null,"To authenticate a user, add a token to your HTTP requests, typically as a GET or POST parameter, e.g.:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"# Return all public lists and any private lists associated with this token:\nGET https://www.flymine.org/query/service/lists?token=DFGg5dge5gnmja04Peh6faA3hd\n")),Object(o.b)("p",null,"Not all endpoints require authentication - use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://iodocs.apps.intermine.org/"}),"I/O docs")," to identify which endpoints do require authentication."),Object(o.b)("h3",{id:"anonymous-authentication"},"Anonymous authentication"),Object(o.b)("p",null,"Anonymous 24-hour tokens are available via the ",Object(o.b)("inlineCode",{parentName:"p"},"/session")," method, and are useful for working with short-term disposable lists. If users want to preserve their lists or view existing lists associated with an account, they should be encouraged to use a permanent token ","(","see docs below",")","."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"GET https://www.flymine.org/query/service/user/session\n")),Object(o.b)("p",null,"Should result in a response like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),'{\n  "token": "M1E5vakfN5xdy3I1ncm7",\n  "executionTime": "2017.03.22 11:42::17",\n  "wasSuccessful": true,\n  "error": null,\n  "statusCode": 200\n}\n')),Object(o.b)("h4",{id:"expired-token-gotcha"},"Expired token gotcha:"),Object(o.b)("p",null,"Make sure not to pass any old or invalid tokens as arguments when requesting the new token."),Object(o.b)("p",null,"This request will not return a token, and will return a 401 instead:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"GET http://www.flymine.org/query/service/user/session?token=someOldExpiredToken\n")),Object(o.b)("h4",{id:"io-docs-demo"},"I/O Docs demo:"),Object(o.b)("p",null,"Experiment with anonymous tokens in I/O docs: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://iodocs.apps.intermine.org/flymine/docs#/ws-session/GET/session"}),"http://iodocs.apps.intermine.org/flymine/docs","#","/ws-session/GET/session")),Object(o.b)("h3",{id:"authentication-for-existing-user-accounts-permanent-tokens"},"Authentication for existing user accounts ","(","permanent tokens",")"),Object(o.b)("p",null,'Via the JSP UI, log into "MyMine" ',"(","top left corner tab",")",' and click on "account details". Your token / API key is shown at the bottom. If none exists, you can choose to generate a new API key.'),Object(o.b)("h4",{id:"note-regarding-generating-api-keys"},"Note regarding generating API keys:"),Object(o.b)("p",null,'If you already have a key, don\'t click the "Generate a new API key" button unless you wish to invalidate your old key! Only one key is active at any given time.'))}l.isMDXComponent=!0},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return n?i.a.createElement(m,s(s({ref:t},u),{},{components:n})):i.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);