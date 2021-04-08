(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{354:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var i=a(3),r=a(7),n=(a(0),a(702)),o={title:"Priority Configuration"},s={unversionedId:"database/database-building/priority-config",id:"database/database-building/priority-config",isDocsHomePage:!1,title:"Priority Configuration",description:"This document describes the format of the configuration file used by the InterMine system's integration to resolve conflicts between different data originating from different data sources. This file should be created as MINENAME/dbmodel/resources/MODELNAME_priorities.properties",source:"@site/docs/database/database-building/priority-config.md",slug:"/database/database-building/priority-config",permalink:"/im-docs/docs/next/database/database-building/priority-config",editUrl:"https://github.com/intermine/im-docs/docs/database/database-building/priority-config.md",version:"current",sidebar:"someSidebar",previous:{title:"Primary Keys",permalink:"/im-docs/docs/next/database/database-building/primary-keys"},next:{title:"Post processing",permalink:"/im-docs/docs/next/database/database-building/post-processing/index"}},l=[{value:"File format",id:"file-format",children:[]},{value:"Class Hierarchy",id:"class-hierarchy",children:[]},{value:"Validation",id:"validation",children:[]}],c={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This document describes the format of the configuration file used by the InterMine system's integration to resolve conflicts between different data originating from different data sources. This file should be created as ",Object(n.b)("inlineCode",{parentName:"p"},"MINE_NAME/dbmodel/resources/MODEL_NAME_priorities.properties")),Object(n.b)("p",null,"When two objects from two different data sources have been identified as equivalent by the PrimaryKeys, those two objects must then be merged into a single object. It is possible that the different data sources may give different values for some of the fields of the objects, so the integration system must choose between the two values. This could be implemented as a manual data curation step, but we decided to make it automatic, by allowing data sources to be placed in priority order on a per-field basis. This means that if two data sources have a conflicting value for a field, the data source with the highest priority for that field will supply the value used in the final object."),Object(n.b)("p",null,'If you think that a particular field will never have conflicting values supplied by different data sources, then it need not be mentioned in the priority configuration. However, if there is a priority configured, it must list all the data sources that will provide values for that field. A value of null is ignored as "not a value". A wildcard of "',"*","\" matches all data sources that aren't otherwise listed, which can be useful to reduce the size of the priorities file and the number of times it needs to be updated."),Object(n.b)("h2",{id:"file-format"},"File format"),Object(n.b)("p",null,'The file must be called "MODEL',"_","NAME","_",'priorities.properties" and be in the classpath of the data loader. The configuration file is a Java properties file, so lines beginning with a hash character are comments, and blank lines are allowed. To specify a priority for all the fields of a particular class ',"(","and its subclasses",")",", create a line in the file like this:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text"}),"Classname = datasource1, datasource2\n")),Object(n.b)("p",null,"However, individual fields can be separately specified too. The order of lines in the file does not matter. Create a line like this:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text"}),"Classname.fieldname = datasource2, datasource1\n")),Object(n.b)("p",null,"Alternatively, you can use a wildcard, for instance to say that datasource1 is right all the time:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text"}),"Classname = datasource1, *\n")),Object(n.b)("p",null,"Or to say that all the datasources provide the correct value, except datasource1:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-text"}),"Classname = *, datasource1\n")),Object(n.b)("p",null,"The data sources are listed in order of decreasing priority. Note that all the field values controlled by a wildcard must be identical, so for instance datasource2 and datasource3 must not conflict in any of these examples. Some example files are our testing priorities file and our FlyMine priorities file."),Object(n.b)("h2",{id:"class-hierarchy"},"Class Hierarchy"),Object(n.b)("p",null,"Because this is an object-oriented database, classes of object are arranged in a class hierarchy, that is some classes are sub-classes of other super-classes. Therefore, it is possible to define a priority on Gene.name and on BioEntity.name, which refer to the same attribute. The priority system will only work if the priorities are completely unambiguous. That is, Gene.name and BioEntity.name must be set to the same thing, or an error will be reported. Generally, you should only configure one of those two classes."),Object(n.b)("h2",{id:"validation"},"Validation"),Object(n.b)("p",null,"The configuration will be validated at the beginning of data loading. The validation will check that no configuration is made for classes that do not exist, and for data sources which do not exist ","(","which could easily be a typo",")",", and that no class hierarchy problems exist. Note that there is an extremely small chance that some class hierarchy problems may be spotted after validation with some extremely exotic data, but we do not expect to ever see such data."))}d.isMDXComponent=!0},702:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var i=a(0),r=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),f=i,p=u["".concat(o,".").concat(f)]||u[f]||b[f]||n;return a?r.a.createElement(p,s(s({ref:t},c),{},{components:a})):r.a.createElement(p,s({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);