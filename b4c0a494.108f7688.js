(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{530:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var r=a(3),n=a(7),o=(a(0),a(707)),p={title:"Report Displayers"},i={unversionedId:"webapp/report-page/report-displayers",id:"version-4.0.0/webapp/report-page/report-displayers",isDocsHomePage:!1,title:"Report Displayers",description:"Note",source:"@site/versioned_docs/version-4.0.0/webapp/report-page/report-displayers.md",slug:"/webapp/report-page/report-displayers",permalink:"/im-docs/docs/4.0.0/webapp/report-page/report-displayers",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/webapp/report-page/report-displayers.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Report Page Overview",permalink:"/im-docs/docs/4.0.0/webapp/report-page/report-page"},next:{title:"Report Displayers Examples",permalink:"/im-docs/docs/4.0.0/webapp/report-page/report-displayers-examples"}},l=[{value:"Configuring displayers",id:"configuring-displayers",children:[]},{value:"Useful displayers",id:"useful-displayers",children:[]},{value:"Creating a new Displayer",id:"creating-a-new-displayer",children:[]}],s={toc:l};function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/report-page/report-displayers-examples"}),"Report Displayers Examples")),Object(o.b)("p",null,"Report displayers allow custom display of particular data types on report pages ","(","only",")",", typically to replace default tables with more appropriate presentation of data. "),Object(o.b)("p",null,"Widgets:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Use a simple framework to add a JSP for display and optionally Java code to run queries, hold caches, etc."),Object(o.b)("li",{parentName:"ol"},"Are assigned to the ",Object(o.b)("strong",{parentName:"li"},"summary")," section at the top of the page or a particular ",Object(o.b)("strong",{parentName:"li"},"data category")),Object(o.b)("li",{parentName:"ol"},"Can ",Object(o.b)("strong",{parentName:"li"},"replace fields")," from the report page to override default display of attributes or collections"),Object(o.b)("li",{parentName:"ol"},"Are configured in the ",Object(o.b)("inlineCode",{parentName:"li"},"webconfig-model.xml")," file in your Mine")),Object(o.b)("p",null,"This page describes how to configure your Mine to include widgets for common data types and how to create your own custom widget."),Object(o.b)("h3",{id:"configuring-displayers"},"Configuring displayers"),Object(o.b)("p",null,"Configuration is placed in a ",Object(o.b)("inlineCode",{parentName:"p"},"<reportdisplayers>")," section of ",Object(o.b)("inlineCode",{parentName:"p"},"webconfig-model.xml"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<reportdisplayers>\n    <reportdisplayer javaClass="org.intermine.bio.web.displayer.GeneOntologyDisplayer"\n        jspName="model/geneOntologyDisplayer.jsp"\n        replacesFields="goAnnotation,ontologyAnnotations"\n        placement="Function"\n        types="Gene"/>\n</reportdisplayers>\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"javaClass"))),Object(o.b)("p",null,"an optional Java class to run before display, typically, this performs database queries or creates data structures used by the JSP. The class should extend ",Object(o.b)("inlineCode",{parentName:"p"},"ReportDisplayer")," and implement a ",Object(o.b)("inlineCode",{parentName:"p"},"display()")," method."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"jspName"))),Object(o.b)("p",null,"the JSP file used to display output"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"replacesFields"))),Object(o.b)("p",null,"a comma separated list of fields that should not appear on the report page when the displayer is used"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"showImmediately"))),Object(o.b)("p",null,"set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," to display the displayer immediately as the page loads, without waiting ","(",Object(o.b)("inlineCode",{parentName:"p"},"false")," by default",")"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"placement"))),Object(o.b)("p",null,"the section on the report page the displayer should appear in, can be 'summary' or a valid data category name."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"types"))),Object(o.b)("p",null,"a comma separated list of class names for this displayer can be used"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"parameters"))),Object(o.b)("p",null,"this is a JSON string used to pass arbitrary parameters to particular displayers, you can make use of this for detailed configuration of any displayers you write. For example, the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/intermine/blob/dev/bio/webapp/src/main/java/org/intermine/bio/web/displayer/HomologueDisplayer.java"}),"HomologueDisplayer.java")," is passed a list of data sets to displayer homologues from: ",Object(o.b)("inlineCode",{parentName:"p"},"parameters=\"{'dataSets': ['TreeFam data set', 'KEGG orthologues data set']}\""),"."),Object(o.b)("h3",{id:"useful-displayers"},"Useful displayers"),Object(o.b)("p",null,"There are several displayers for common data types that may be useful in many Mines. To enable these, just copy the configuration from FlyMine's ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/flymine/blob/master/webapp/src/main/webapp/WEB-INF/webconfig-model.xml"}),"webconfig-model.xml"),"."),Object(o.b)("p",null,"For examples of the common displayers and configuration details please see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/4.0.0/webapp/report-page/report-displayers-examples"}),"Report Displayers Examples"),"."),Object(o.b)("h3",{id:"creating-a-new-displayer"},"Creating a new Displayer"),Object(o.b)("p",null,"If you've loaded some new data into your Mine or have some great ideas about presenting data from the common data loaders, you can create a new displayer. Here are brief instructions, take a look at the many examples for more details."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a Java class ","[","1","]"," in your mine, e.g. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/flymine/tree/master/webapp/src/main/java/flymine/web/displayer"}),"/displayers")," that inherits from ",Object(o.b)("inlineCode",{parentName:"p"},"org.intermine.web.displayer.ReportDisplayer"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Implement"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"public void display(HttpServletRequest request, ReportObject reportObject)")),Object(o.b)("p",{parentName:"li"},"to perform any queries or processing required and put results on the"),Object(o.b)("p",{parentName:"li"},"request.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a JSP file in ",Object(o.b)("inlineCode",{parentName:"p"},"webapp/src/main/webapp/model")," to display the results.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add configuration to"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"webapp/src/main/webapp/WEB-INF/webconfig-model.xml")," to set up the ",Object(o.b)("inlineCode",{parentName:"p"},"javaClass")," and ",Object(o.b)("inlineCode",{parentName:"p"},"jspName")," created above and set the ",Object(o.b)("inlineCode",{parentName:"p"},"types")," for which the displayer should appear and the ",Object(o.b)("em",{parentName:"p"},"summary")," or a data category ","(","aspect",")"," as the ",Object(o.b)("inlineCode",{parentName:"p"},"placement")," for the displayer. Optionally set any fields in the report page that should be hidden when this displayer is used."))),Object(o.b)("h4",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("p",null,"As we use AJAX to load the displayers to speed up the initial load of a Report page, JavaScript calls to when a document is ready are executed immediately the page has finished loading already. Specifically when using GoogleCharts API, one needs to amend the initial loading code with a callback like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'google.load("visualization", "1", {"packages": ["corechart"], "callback": drawFlyAtlasChart});\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"[","1","]"," ReportDisplayer makes available a variable called ",Object(o.b)("inlineCode",{parentName:"p"},"im")," which is the ",Object(o.b)("inlineCode",{parentName:"p"},"InterMineAPI")," which provides access to config and query execution classes.")))}c.isMDXComponent=!0},707:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),c=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=c(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=c(a),m=r,u=b["".concat(p,".").concat(m)]||b[m]||d[m]||o;return a?n.a.createElement(u,i(i({ref:t},s),{},{components:a})):n.a.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);