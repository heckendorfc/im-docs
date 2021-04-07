(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{471:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(708)),i={title:"Heatmap"},p={unversionedId:"webapp/third-party-tools/heatmap",id:"webapp/third-party-tools/heatmap",isDocsHomePage:!1,title:"Heatmap",description:"InterMine makes use of canvasXpress heatmap to visualize gene expression data.",source:"@site/docs/webapp/third-party-tools/heatmap.md",slug:"/webapp/third-party-tools/heatmap",permalink:"/im-docs/docs/next/webapp/third-party-tools/heatmap",editUrl:"https://github.com/intermine/im-docs/docs/webapp/third-party-tools/heatmap.md",version:"current",sidebar:"someSidebar",previous:{title:"GBrowse",permalink:"/im-docs/docs/next/webapp/third-party-tools/gbrowse"},next:{title:"JBrowse",permalink:"/im-docs/docs/next/webapp/third-party-tools/jbrowse"}},s=[{value:"An example in modMine",id:"an-example-in-modmine",children:[{value:"Expression data source: a data loader example",id:"expression-data-source-a-data-loader-example",children:[]},{value:"Controller",id:"controller",children:[]},{value:"Web page",id:"web-page",children:[]}]}],c={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"InterMine makes use of canvasXpress ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.canvasxpress.org/examples/heatmap-1.html"}),"heatmap")," to visualize gene expression data."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.canvasxpress.org/"}),"CanvasXpress")," is a JavaScript library based on the ",Object(o.b)("inlineCode",{parentName:"p"},"<canvas>")," tag implemented in HTML5. It is written by Isaac Neuhausi."),Object(o.b)("p",null,"Hierarchical and k-Means clustering algorithms and zoom in/out functionality have been implemented within the heatmap."),Object(o.b)("h2",{id:"an-example-in-modmine"},"An example in modMine"),Object(o.b)("p",null,"Note: The last release of modMine is from 2014, the site is now maintained by the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.encodeproject.org/"}),"ENCODE group")," at Stanford University and the legacy software is available on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/modENCODE-DCC/modmine/"}),"GitHub"),"."),Object(o.b)("p",null,"A specific heatmap application can be referred in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://intermine.modencode.org/"}),"modMine"),". It visualizes fly expression data ","(",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://intermine.modencode.org/query/bagDetails.do?scope=global&bagName=example"}),"example"),")"," generated from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.modencode.org/"}),"modENCODE project"),"."),Object(o.b)("p",null,"The raw data is parsed and converted to InterMine objects. In a Struts controller, the expression data will be fetched by running a InterMine path query and parsed to JSON string. The JSON string will be sent to a JSP page by a http request to feed into heatmap."),Object(o.b)("h3",{id:"expression-data-source-a-data-loader-example"},"Expression data source: a data loader example"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/modENCODE-DCC/modmine/blob/dev/bio/sources/modmine/fly-expression-score/main/src/org/intermine/bio/dataconversion/FlyExpressionScoreConverter.java"}),"FlyExpressionScoreConverter")," is a specific data converter for modENCODE fly expression data. The class is located at ",Object(o.b)("inlineCode",{parentName:"p"},"bio/sources/modmine/fly-expression-score"),". Any other similar expression data conversion tasks can take the data source as a reference."),Object(o.b)("p",null,"Expression data type is an extension of InterMine core model. This example can be found ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/modENCODE-DCC/modmine/blob/dev/modmine/dbmodel/resources/modencode-metadata_additions.xml/"}),"here")," and in the code block below."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'# modmine/dbmodel/resources/modencode-metadata_additions.xml\n<class name="GeneExpressionScore" is-interface="true">\n<attribute name="score" type="java.lang.Double" />\n    <reference name="gene" referenced-type="Gene" reverse-reference="expressionScores" />\n    <reference name="cellLine" referenced-type="CellLine" />\n    <reference name="developmentalStage" referenced-type="DevelopmentalStage" />\n    <reference name="submission" referenced-type="Submission" />\n    <reference name="organism" referenced-type="Organism" />\n</class>\n')),Object(o.b)("p",null,'Please note that it is now recommended to add the model extension to a source specific additions.xml under a source directory, rather than to a general "additions" file.'),Object(o.b)("h3",{id:"controller"},"Controller"),Object(o.b)("p",null,"The controller class ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/modENCODE-DCC/modmine/blob/master/modmine/webapp/src/org/modmine/web/HeatMapController.java"}),"HeatMapController")," is a component of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://struts.apache.org/"}),"Struts MVC framework"),". It holds the logic to process user requests."),Object(o.b)("p",null,"In HeatMapController, a query is run to fetch expression scores from database ","(","ref method ",Object(o.b)("inlineCode",{parentName:"p"},"queryExpressionScore"),")",", then the results are parsed to JSON string ","(","ref method ",Object(o.b)("inlineCode",{parentName:"p"},"getJSONString"),")"," and set in the request ","(","ref method ",Object(o.b)("inlineCode",{parentName:"p"},"findExpression"),")","."),Object(o.b)("p",null,"Struts config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'# modmine/webapp/resources/struts-config-model.xml \n<action path="/initHeatMap"\ntype="org.modmine.web.HeatMapController" />\n\n<action path="/heatMap" forward="heatMap.page" />\n\n\n#  modmine/webapp/resources/tiles-defs-model.xml\n<definition name="heatMap.tile" path="/model/heatMap.jsp"\n    controllerUrl="/initHeatMap.do"/>\n\n<definition name="heatMap.page" extends="layout.template">\n    <put name="body" value="heatMap.tile"/>\n    <put name="pageName" value="heatMap"/>\n</definition>\n')),Object(o.b)("h3",{id:"web-page"},"Web page"),Object(o.b)("p",null,"In modMine we have two separate heatmaps, one for cell line and one for developmental stage."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/modENCODE-DCC/modmine/blob/master/modmine/webapp/resources/webapp/model/heatMap.jsp"}),"heatMap.jsp")," displays the heatmaps. canvasXpress object takes the expression JSON string and other parameters to create the heatmaps. jQuery is used to adjust page layout."),Object(o.b)("p",null,"##Alternatives"),Object(o.b)("p",null,"A more up to date way of creating widget like heatmaps takes advantage of the InterMine webservices framework to query and generate JSON strings and embed the heatmap on any web page. Please check some examples of the tecnique  ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://github.com/intermine/intermine-embedding-examples"}),"here")),Object(o.b)("p",null,"An alternative, and more general library is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://d3js.org/"}),"D3.js"),", an example of heatmap can be found ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://observablehq.com/@mbostock/electric-usage-2019"}),"here"),". ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://bar.utoronto.ca/thalemine"}),"ThaleMine")," used to display a couple of such D3 implementations, and the code is still available ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/intermine/CDN/blob/master/js/intermine/expression/1.0.3/expression.js"}),"here"),"."))}l.isMDXComponent=!0},708:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||o;return a?r.a.createElement(u,p(p({ref:t},c),{},{components:a})):r.a.createElement(u,p({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);