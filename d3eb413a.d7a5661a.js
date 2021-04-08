(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{608:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(707)),o={title:"Website Admin"},l={unversionedId:"webapp/admin/index",id:"webapp/admin/index",isDocsHomePage:!1,title:"Website Admin",description:"The SuperUser is the administrator of your InterMine webapp. The SuperUser can use tagging to configure the appearance and functionality of the webapp.",source:"@site/docs/webapp/admin/index.md",slug:"/webapp/admin/index",permalink:"/im-docs/docs/next/webapp/admin/index",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/webapp/admin/index.md",version:"current",sidebar:"someSidebar",previous:{title:"Google Analytics",permalink:"/im-docs/docs/next/webapp/monitoring-site-usage/google-analytics"},next:{title:"Userprofile",permalink:"/im-docs/docs/next/webapp/user-accounts/userprofile"}},p=[{value:"Templates queries and lists",id:"templates-queries-and-lists",children:[{value:"Other tags",id:"other-tags",children:[]}]}],c={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The SuperUser is the administrator of your InterMine webapp. The SuperUser can use tagging to configure the appearance and functionality of the webapp."),Object(i.b)("p",null,"The SuperUser account is created when the UserProfile database is built using the properties specified in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../properties/intermine-properties.md"}),"Intermine properties")," file."),Object(i.b)("p",null,"Most of the website administration and customization is now done directly in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://intermine.org/docs/user/admin-account"}),"BlueGenes administrator page"),", but a couple of settings are still defined using the old webapp admin login."),Object(i.b)("h2",{id:"templates-queries-and-lists"},"Templates queries and lists"),Object(i.b)("p",null,"All logged in users can create template queries and lists, but the SuperUser can make them available to all users by tagging them as public via the templates and lists pages in the MyMine section of the webapp.\nThe tag data is stored in the user-profile database."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"tag"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"purpose"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"im:public"}),"im:public")," ","[","1","]"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"make list/template available to all users")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"[","1","]"," Editable by all admins")),Object(i.b)("p",null,"Making a template query is an easy way to get users of your webapp to the data they want very quickly."),Object(i.b)("h3",{id:"other-tags"},"Other tags"),Object(i.b)("p",null,"The SuperUser can change the order of ",Object(i.b)("strong",{parentName:"p"},"classes")," in the class selection dropdown by adding the ",Object(i.b)("inlineCode",{parentName:"p"},"im:preferredBagType")," tag via the model browser."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"tag"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"purpose"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"im:preferredBagType"}),"im:preferredBagType")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"class appears first in the class selection")))),Object(i.b)("p",null,"If a ",Object(i.b)("strong",{parentName:"p"},"template")," is tagged with ",Object(i.b)("inlineCode",{parentName:"p"},"im:converter"),", it is used by the list upload page to convert between types."),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},'E.g., the user pastes in a protein identifier, but chooses "Gene" from the type dropdown menu. A converter template can be used to look up the ',Object(i.b)("inlineCode",{parentName:"li"},"Gene")," corresponding to the given ",Object(i.b)("inlineCode",{parentName:"li"},"Protein"),"."))),Object(i.b)("p",null,"To work as a converter, the template must follow the following pattern:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the top-level class in the query must be the class we wish to convert ",Object(i.b)("em",{parentName:"li"},"from")," ","(","eg. ",Object(i.b)("inlineCode",{parentName:"li"},"Gene"),")"),Object(i.b)("li",{parentName:"ul"},"there must be exactly one editable constraint - the ",Object(i.b)("inlineCode",{parentName:"li"},"id")," field of the top level class ","(","eg. ",Object(i.b)("inlineCode",{parentName:"li"},"Gene.id"),")"),Object(i.b)("li",{parentName:"ul"},"the fields selected for output must be ",Object(i.b)("inlineCode",{parentName:"li"},"Gene.id")," and the id field of the class to convert ",Object(i.b)("em",{parentName:"li"},"to"))),Object(i.b)("p",null,"Normally the ",Object(i.b)("inlineCode",{parentName:"p"},"id")," field isn't shown in the query builder and probably isn't useful in other queries. Only the administrator user can create queries using the ",Object(i.b)("inlineCode",{parentName:"p"},"id")," field. Here is an example converter template:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markup"}),'<template name="Gene_To_Protein_Type_Converter" title="Gene to protein type converter" longDescription="" comment="">\n    <query name="Gene_To_Protein_Type_Converter" model="genomic" view="Gene.id Gene.proteins.id" longDescription="" sortOrder="Gene.id asc">\n        <node path="Gene" type="Gene"></node>\n        <node path="Gene.id" type="Integer">\n            <constraint op="=" value="0" description="Gene.id" identifier="Gene.id" editable="true" code="A"></constraint>\n        </node>\n    </query>\n</template>\n')))}b.isMDXComponent=!0},707:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);