(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{294:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(707)),p={title:"Export"},c={unversionedId:"webapp/query-results/export",id:"webapp/query-results/export",isDocsHomePage:!1,title:"Export",description:"Default exporters in bio project",source:"@site/docs/webapp/query-results/export.md",slug:"/webapp/query-results/export",permalink:"/im-docs/docs/next/webapp/query-results/export",editUrl:"https://github.com/intermine/im-docs/edit/master/docs/webapp/query-results/export.md",version:"current"},i=[{value:"Create a custom exporter",id:"create-a-custom-exporter",children:[]},{value:"Customisation",id:"customisation",children:[]}],l={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Default exporters in bio project"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"tab/csv - tab or comma separated"),Object(o.b)("li",{parentName:"ul"},"GFF3"),Object(o.b)("li",{parentName:"ul"},"FASTA"),Object(o.b)("li",{parentName:"ul"},"BED"),Object(o.b)("li",{parentName:"ul"},"Galaxy - exports data in tab or BED format to Galaxy server")),Object(o.b)("p",null,"Appears on these pages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Query results page"),Object(o.b)("li",{parentName:"ul"},"List analysis page"),Object(o.b)("li",{parentName:"ul"},"Genomic Region Search results page")),Object(o.b)("h3",{id:"create-a-custom-exporter"},"Create a custom exporter"),Object(o.b)("p",null,"You can add additional export options to your InterMine by creating a custom exporter."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Write Java classes to handle the data"),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"see ",Object(o.b)("inlineCode",{parentName:"p"},"BEDHttpExporter.java")," and ",Object(o.b)("inlineCode",{parentName:"p"},"BEDExporter.java")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add the class to your webconfig-model.xml file:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<tableExportConfig id="bed" className="org.intermine.bio.web.export.BEDHttpExporter"/>\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update Struts config"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'# struts-config-model.xml\n<action path="/bedExportAction" name="bedExportForm" type="org.intermine.web.struts.TableExportAction" parameter="method"/>\n\n# tiles-defs-model.xml\n<definition name="bedExportOptions.tile" path="/model/bedExportOptions.jsp" controllerUrl="/initSequenceFeatureExportOptions.do" />\n\n# struts-config-model-form.xml\n<form-bean name="bedExportForm" type="org.intermine.bio.web.struts.BEDExportForm"/>\n')))),Object(o.b)("h3",{id:"customisation"},"Customisation"),Object(o.b)("p",null,"By default, SequenceFeature and Protein can be exported in FASTA format"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"fasta.export.classes = SequenceFeature,Protein\n")),Object(o.b)("p",null,"Exporter description"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"exporter.galaxy.description = Export to Galaxy\nexporter.sequence.description=Export in FASTA format\nexporter.gff3.description=Export in GFF3 format\nexporter.bed.description=Export in BED format\n")))}b.isMDXComponent=!0},707:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,d=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);