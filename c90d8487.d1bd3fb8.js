(window.webpackJsonp=window.webpackJsonp||[]).push([[507],{578:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(708)),s={title:"InterMine Items XML Overview"},o={unversionedId:"database/data-sources/apis/index",id:"version-5.0.0/database/data-sources/apis/index",isDocsHomePage:!1,title:"InterMine Items XML Overview",description:"InterMine items XML is a generic format that encodes data the matches InterMine class definitions.",source:"@site/versioned_docs/version-5.0.0/database/data-sources/apis/index.md",slug:"/database/data-sources/apis/index",permalink:"/im-docs/docs/database/data-sources/apis/index",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-5.0.0/database/data-sources/apis/index.md",version:"5.0.0",sidebar:"version-5.0.0/someSidebar",previous:{title:"Writing your own data source",permalink:"/im-docs/docs/database/data-sources/custom/index"},next:{title:"Java Items API",permalink:"/im-docs/docs/database/data-sources/apis/java-items-api"}},c=[{value:"Datatypes",id:"datatypes",children:[]},{value:"APIs",id:"apis",children:[]}],l={toc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"InterMine items XML is a generic format that encodes data the matches InterMine class definitions."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<items>\n   <item id="0_1" class="NewFeature" implements="">\n      <attribute name="identifier" value="feature2"/>\n      <attribute name="confidence" value="0.8"/>\n      <reference name="protein" ref_id="0_3"/> \n  </item>\n  <item id="0_2" class="NewFeature" implements="">\n      <attribute name="identifier" value="feature2"/>\n      <attribute name="confidence" value="0.37"/>\n      <reference name="protein" ref_id="0_3"/> \n  </item>\n  <item id="0_3" class="Protein" implements="">\n      <attribute name="primaryAccession" value="Q8I5D2" />\n      <attribute name="extraData" value="proteinInfo"/>\n      <collection name="features">\n          <reference ref_id="0_1" />\n          <reference ref_id="0_2" />\n      </collection>\n  </item>\n</items>\n')),Object(i.b)("p",null,"Here, the root element is always ","<","items",">","."),Object(i.b)("p",null,"Within ","<","items",">"," each object has id within a separate ","<","item",">"," element."),Object(i.b)("p",null,"Each ","<","item",">"," has an id with the format ","<","NAMESPACE","_","SUBID",">",". For simple cases, the namespace can always be '0'. These IDs are used to signify connections between items within the item XML file - once the data is loaded into InterMine its own serial IDs are used instead and these Item XML ids disappear."),Object(i.b)("p",null,"The child elements of an ","<","item",">"," are either"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"<","attribute",">"," - this has the name of the attribute ","(","matching the defined class name",")"," and a value"),Object(i.b)("li",{parentName:"ul"},"<","reference",">"," - where the property is a reference to some other item by its Items XML id."),Object(i.b)("li",{parentName:"ul"},"<","collection",">"," - this is a collection of ","<","reference",">","s")),Object(i.b)("p",null,"Example scripts used to generate InterMine Items XML can be found at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/intermine/intermine-scripts/blob/master/examples/intermine_items_example.pl"}),"intermine","_","items","_","example.pl"),"."),Object(i.b)("h2",{id:"datatypes"},"Datatypes"),Object(i.b)("p",null,"The data formats required for attributes in InterMine Items XML for the most part are fairly obvious and match internal Java types ","(","e.g. strings are UTF-8, doubles are 64-bit IEEE 754 floating point",")","."),Object(i.b)("p",null,"One exception is the format required for Dates. InterMine allows this to be expressed in 3 different ways."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"As the number of seconds since the Unix epoch."),Object(i.b)("li",{parentName:"ol"},"In the string format 'yyyy-MM-dd HH:mm:ss', assuming UTC."),Object(i.b)("li",{parentName:"ol"},"In the string format 'yyyy-MM-dd', assuming UTC.")),Object(i.b)("p",null,"If parsing fails for all these formats then InterMine will throw a RuntimeException."),Object(i.b)("h2",{id:"apis"},"APIs"),Object(i.b)("p",null,"InterMine Items XML can either be generated directly in your favourite programming language, or there are a number of language-specific APIs that can generate it, and handle issues like Item XML allocation and referencing automatically."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/im-docs/docs/database/data-sources/apis/java-items-api"}),"Java Items API")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/im-docs/docs/database/data-sources/apis/perl-items-api"}),"Perl Items API")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/im-docs/docs/database/data-sources/apis/python-items-api"}),"Python Items API"))))}m.isMDXComponent=!0},708:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,b=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return a?r.a.createElement(b,o(o({ref:t},l),{},{components:a})):r.a.createElement(b,o({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);