(window.webpackJsonp=window.webpackJsonp||[]).push([[633],{704:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(707)),o={title:"Java Items API"},s={unversionedId:"database/data-sources/apis/java-items-api",id:"version-5.0.0/database/data-sources/apis/java-items-api",isDocsHomePage:!1,title:"Java Items API",description:"'Items' are a data format for the InterMine system, each Item represents a Java data object that will be stored. They are a convenient way to deal with data that is portable to other languages and has a simple XML format.",source:"@site/versioned_docs/version-5.0.0/database/data-sources/apis/java-items-api.md",slug:"/database/data-sources/apis/java-items-api",permalink:"/im-docs/docs/database/data-sources/apis/java-items-api",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-5.0.0/database/data-sources/apis/java-items-api.md",version:"5.0.0",sidebar:"version-5.0.0/someSidebar",previous:{title:"InterMine Items XML Overview",permalink:"/im-docs/docs/database/data-sources/apis/index"},next:{title:"Perl Items API",permalink:"/im-docs/docs/database/data-sources/apis/perl-items-api"}},c=[{value:"Usage in a Converter",id:"usage-in-a-converter",children:[]},{value:"Item methods",id:"item-methods",children:[]},{value:"Creating Items with an ItemFactory",id:"creating-items-with-an-itemfactory",children:[]},{value:"Reading/Writing XML",id:"readingwriting-xml",children:[]}],l={toc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"'Items' are a data format for the InterMine system, each Item represents a Java data object that will be stored. They are a convenient way to deal with data that is portable to other languages and has a simple XML format."),Object(i.b)("p",null,"This API is currently available only within a ",Object(i.b)("inlineCode",{parentName:"p"},"DataConverter")," running internally within an InterMine source ","(","i.e. it can't yet be used entirely separate from InterMine",")"),Object(i.b)("h2",{id:"usage-in-a-converter"},"Usage in a Converter"),Object(i.b)("p",null,"Items are most commonly used in a converter which provides some convenience methods."),Object(i.b)("p",null,"Items are usually manipulated in a converter as part of a source InterMine source. All converters subclass ",Object(i.b)("inlineCode",{parentName:"p"},"DataConverter")," or one of its subclasses. This provides some convenience methods."),Object(i.b)("p",null,"Create an item - this uses an ",Object(i.b)("inlineCode",{parentName:"p"},"ItemFactory")," ","(","see below",")"," which validates the class name and all fields against the data model:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Item gene = createItem("Gene");\n')),Object(i.b)("p",null,"Store an item ","(","or collection of items",")"," to the target items database:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"store(gene);\nstore(items);\n")),Object(i.b)("p",null,"For a simple example of a converter see the ",Object(i.b)("inlineCode",{parentName:"p"},"wormbase-identifiers")," converter."),Object(i.b)("h2",{id:"item-methods"},"Item methods"),Object(i.b)("p",null,"Item has methods to set values of attributes, references to other objects and collections of other objects."),Object(i.b)("p",null,"To set an attribute ","(","a field of an Item that is a Java type, e.g. String, Integer",")"," use ",Object(i.b)("inlineCode",{parentName:"p"},"setAttribute"),")",". Note that all attribute types are treated as a String, they will be parsed to the appropriate type later."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'gene.setAttribute("symbol", "zen");\norganism.setAttribute("taxonId", "7227");\n')),Object(i.b)("p",null,"All items have an identifier generated for them automatically, these are used to reference other Items. You can set a reference with to an Item identifier or by using the item itself."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'String orgIdentifier = organism.getIdentifier();\ngene.setReference("organism", orgIdentifier);\n')),Object(i.b)("p",null,"Or:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'gene.setReference("organism", organism);\n')),Object(i.b)("p",null,"Set collections of other Items:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"List<Item> publications = new ArrayList<Item>();\npublications.add(pub1);\npublications.add(pub2);\ngene.setCollection(publications);\n")),Object(i.b)("p",null,"Or add one at a time:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'gene.addToCollection("publications", pub1);\ngene.addToCollection("publications", pub2.getIdentifier());\n')),Object(i.b)("p",null,"Attribute, Reference and ReferenceList ","(","collections",")"," can all be created independently and added to Items, this is sometimes useful in parsers to avoid holding too many Items in memory."),Object(i.b)("h2",{id:"creating-items-with-an-itemfactory"},"Creating Items with an ItemFactory"),Object(i.b)("p",null,"When not used in a Converter you should create Items using an ItemFactory ","(","the Converter does this for you",")",", this validates the class name and all attribute/reference names against the data model. This requires that you get a Model instance ","(","if there isn't already one",")","."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Model model = Model.getInstance("genomic");\nItemFactory factory = new ItemFactory(model);\n')),Object(i.b)("p",null,"Create an item with the class name."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Item gene = itemFactory.makeItemForClass("Gene");\nItem organism = itemFactory.makeItemForClass("Organism");\n')),Object(i.b)("h2",{id:"readingwriting-xml"},"Reading/Writing XML"),Object(i.b)("p",null,"To write a collection of Items to XML use ",Object(i.b)("inlineCode",{parentName:"p"},"FullRenderer"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"FileWriter fw = new FileWriter(new File(fileName));\nfw.write(FullRenderer.render(items));\nfw.close();\n")),Object(i.b)("p",null,"To read an XML file into a List of items use ",Object(i.b)("inlineCode",{parentName:"p"},"FullParser"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"List items = FullRenderer.parse(new FileInputStream(file));\n")))}m.isMDXComponent=!0},707:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=m(a),p=n,u=b["".concat(o,".").concat(p)]||b[p]||d[p]||i;return a?r.a.createElement(u,s(s({ref:t},l),{},{components:a})):r.a.createElement(u,s({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);