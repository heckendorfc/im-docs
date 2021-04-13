(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{545:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?o.a.createElement(h,l(l({ref:t},c),{},{components:n})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),i=(n(0),n(545)),s={title:"Tool API Specification"},l={unversionedId:"webapp/tool-api/specification",id:"version-5.0.0/webapp/tool-api/specification",isDocsHomePage:!1,title:"Tool API Specification",description:"Tool structure",source:"@site/versioned_docs/version-5.0.0/webapp/tool-api/specification.md",slug:"/webapp/tool-api/specification",permalink:"/im-docs/docs/webapp/tool-api/specification",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-5.0.0/webapp/tool-api/specification.md",version:"5.0.0",sidebar:"version-5.0.0/someSidebar",previous:{title:"Tool API Tutorial",permalink:"/im-docs/docs/webapp/tool-api/tutorial"},next:{title:"Google Analytics",permalink:"/im-docs/docs/webapp/monitoring-site-usage/google-analytics"}},r=[{value:"Tool structure",id:"tool-structure",children:[{value:"dist",id:"dist",children:[]},{value:"src",id:"src",children:[]},{value:"index.js",id:"indexjs",children:[]},{value:"style.less",id:"styleless",children:[]},{value:"config.json",id:"configjson",children:[]},{value:"preview.png",id:"previewpng",children:[]}]},{value:"Other notes",id:"other-notes",children:[]},{value:"Changelog",id:"changelog",children:[{value:"Tool API version 1.0",id:"tool-api-version-10",children:[]},{value:"Tool API version 2.0",id:"tool-api-version-20",children:[]}]}],c={toc:r};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tool-structure"},"Tool structure"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),".\n+-- mytool/\n|   +-- dist/\n|      +-- style.css (optional)\n|      +-- bundle.js (required)\n|   +-- src/\n|      +-- style.less (optional, could be some other preprocessor)\n|      +-- index.js (optional, but recommended)\n|   +-- config.json (required)\n|   +-- package.json (required)\n|   +-- demo.html (optional)\n|   +-- preview.png (optional)\n")),Object(i.b)("p",null,"You may also have additional files and folders, if needed. They won't interfere."),Object(i.b)("h3",{id:"dist"},"dist"),Object(i.b)("p",null,"Put all of your production-ready files in here. Ideally, this should be no more than two things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"bundle.js")," contains your entire application with all dependencies bundled in, excluding ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/intermine/imjs"}),"imjs")," which is available on the window."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style.css")," is optional. Use if any additional styles are required.")),Object(i.b)("p",null,"Filenames can be changed as long as the correct files are specified in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#configjson"}),"config.json"),"."),Object(i.b)("h3",{id:"src"},"src"),Object(i.b)("p",null,"How do you build the static files above? Probably with the ",Object(i.b)("em",{parentName:"p"},"src")," directory. This is the folder you'll be doing most of your work in."),Object(i.b)("h3",{id:"indexjs"},"index.js"),Object(i.b)("p",null,"This is the preferred entry point to build ",Object(i.b)("em",{parentName:"p"},"dist/bundle.js"),". You may import external libraries using ",Object(i.b)("em",{parentName:"p"},"package.json")," dependencies if needed. Make sure to export a main method with the following signature:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export function main (el, service, imEntity, state, config, navigate) {\n  // code to initialise your app here\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"el")," - The ID of a DOM element where the tool will render."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"service")," - An object representing an InterMine service, like the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "root": "https://www.humanmine.org/humanmine",\n  "token": "bananacakes"\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"imEntity")),Object(i.b)("p",null,"An object representing the data passed to the app, e.g.:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Gene": {\n    "class": "Gene",\n    "format": "id",\n    "value": 456\n  }\n}\n')),Object(i.b)("p",null,"If your tool ",Object(i.b)("em",{parentName:"p"},"accepts")," ",Object(i.b)("inlineCode",{parentName:"p"},"ids")," and takes multiple ",Object(i.b)("em",{parentName:"p"},"classes"),", (see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tools/tool-api.md#configjson"}),"config.json"),") it might receive more than one class if they are present on the list or query results page."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Gene": {\n    "class": "Gene",\n    "format": "ids",\n    "value": [1, 2]\n  },\n  "Protein": {\n    "class": "Protein",\n    "format": "ids",\n    "value": [3, 4]\n  }\n}\n')),Object(i.b)("p",null,"Subclasses (descendant of a class in the data model hierarchy) might also be passed to your tool if it's descendant of one of your tool's ",Object(i.b)("em",{parentName:"p"},"classes"),". When this happens, the key will still be its superclass which you specified in ",Object(i.b)("em",{parentName:"p"},"classes"),", while the subclass name can be accessed under ",Object(i.b)("inlineCode",{parentName:"p"},"class"),". If you want your tool to work with subclasses, you'll need to make sure that any queries you build based on ",Object(i.b)("em",{parentName:"p"},"imEntity")," sets the ",Object(i.b)("inlineCode",{parentName:"p"},"from")," key to this class (",Object(i.b)("inlineCode",{parentName:"p"},"imEntity.Gene.class")," in this example)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Gene": {\n    "class": "ORF",\n    "format": "id",\n    "value": 5\n  }\n}\n')),Object(i.b)("p",null,"It is up to you which class you want to use in your tool, and you can even use multiple."),Object(i.b)("p",null,"Currently, it is not possible to receive multiple classes on the report page with ",Object(i.b)("em",{parentName:"p"},"accepts")," ",Object(i.b)("inlineCode",{parentName:"p"},"id"),". However, the Tool API allows for this, should it be an option in the future."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"state")," - ",Object(i.b)("strong",{parentName:"p"},"NOT IMPLEMENTED")," - The intent is to allow tools to have local state which persists across changes to a result table (e.g., on the query results page), which causes tools to be reinitialised with the new data. Please ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../about/contact-us"}),"contact us")," if you have a use case for this."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"config")," - The config object as defined in ",Object(i.b)("em",{parentName:"p"},"config.json"),", in case the tool wishes to use data from it."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"navigate")),Object(i.b)("p",null,"A function you can call to make BlueGenes navigate to a specific page."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// Navigate to a report page.\nnavigate("report", {type: "Gene", id: 1018204});\n// Run a query and open the page showing the results.\nnavigate("query", myQueryObj);\n// Show the results page for an existing list.\nnavigate("list", "PL_GenomicsEngland_GenePanel:Radial_dysplasia");\n')),Object(i.b)("p",null,"You can optionally specify a third argument with the namespace of a mine (e.g., ",Object(i.b)("inlineCode",{parentName:"p"},'"humanmine"'),")."),Object(i.b)("h3",{id:"styleless"},"style.less"),Object(i.b)("p",null,"This is the preferred entry point to build ",Object(i.b)("em",{parentName:"p"},"dist/styles.css"),".  If your tool has a stylesheet already, make sure to import the styles and wrap them in a parent class corresponding to your tool's name, to ensure the styles are sandboxed. See the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"tutorial#goodness-thats-ugly-lets-make-it-look-a-little-nicer"}),"tutorial")," for an example of this."),Object(i.b)("h3",{id:"configjson"},"config.json"),Object(i.b)("p",null,"This file provides data describing how BlueGenes should use your tool."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "accepts": ["id", "ids"],\n  "classes": ["Gene", "Protein", "*"],\n  "depends": ["AtlasExpression", "ProteinAtlasExpression"],\n  "files": {\n    "css": "dist/style.css",\n    "js": "dist/bundle.js"\n  },\n  "threshold": 100,\n  "toolName": {\n    "human": "Protein Features",\n    "cljs": "proteinFeatures"\n  },\n  "version": 2\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"accepts")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"id: a single database ID, for a tool to be shown on an object's report page"),Object(i.b)("li",{parentName:"ul"},"ids: multiple database IDs, for a tool to be shown on list analysis/query results")),Object(i.b)("p",null,"Specifying ",Object(i.b)("inlineCode",{parentName:"p"},"id")," means that the tool will be shown on the report page and passed the ID of the InterMine object (e.g., a protein might be represented by the ID 4815162342). For ",Object(i.b)("inlineCode",{parentName:"p"},"ids"),", the tool will be shown for list and query results and passed multiple IDs consisting of all the InterMine objects present. If you specify both, the tool will be shown in both circumstances and you'll need to ensure it can handle both single and multiple IDs."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"classes")," - use ",Object(i.b)("inlineCode",{parentName:"p"},"*")," if you want the tool to display for all objects. Otherwise, the tool will display for a specified class of objects (e.g., a gene displayer). Note that a subclass of a class you specify here may be passed via ",Object(i.b)("em",{parentName:"p"},"imEntity")," (see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#indexjs"}),"section on imEntity")," for more details)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"depends")," lets you specify any class names in the InterMine server's model that your tool depends on. This is useful if you're querying for a non-standard path that is only present in a specific InterMine instance. Any instances which don't have the class name in their model will not attempt to run your tool, and will instead, list it as unsupported."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"files")," - one file each for CSS and JS. This should be the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#dist"}),"files")," built from ",Object(i.b)("em",{parentName:"p"},"src")," bundling all your dependencies. CSS is optional if the tool has no additional styling."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"threshold")," is the greatest count of objects your tool will automatically load for. This will be matched against the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#indexjs"}),"imEntity")," with the highest amount of ",Object(i.b)("inlineCode",{parentName:"p"},"value")," elements. If your tool becomes very resource intensive or its visualisation becomes very crowded, when the amount of objects reach a certain threshold, you should set this to an appropriate number. The tool will still be present, although it will stay collapsed with a message explaining to the user that there are too many results and they can click to load the tool. If this property isn't set, BlueGenes will default to 1000 (this means you can set a higher threshold if you wish to override it)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"toolName"),' is an object with a human-readable name, as well as an internal name. The human name would be what you want to see as a header for this tool (e.g. ProtVista might be called "Protein Features"). The internal ',Object(i.b)("inlineCode",{parentName:"p"},"cljs")," name needs to be unique among tools and identical to the global JS variable which your tool's bundle initialises."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"version")," is a whole number indicating which major version of the Tool API your tool adheres to. When creating a tool, you should always specify the latest version presented here. If your tool's version does not match the Tool API version of the BlueGenes using your tool, a warning will be shown and your tool will be disabled from displaying. In this case, you will have to update your tool to support the Tool API version of the BlueGenes using your tool, update the version key in your ",Object(i.b)("em",{parentName:"p"},"config.json")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"overview#making-new-tools-available-to-others"}),"publish")," a new version of your tool. See the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#changelog"}),"Changelog")," for details on each version."),Object(i.b)("h3",{id:"previewpng"},"preview.png"),Object(i.b)("p",null,"Optional preview image for the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://intermine.org/intermine-user-docs/docs/admin-account#the-tools-store"}),"Tool Store page"),". When admins are selecting tools, this is the way to impress them!"),Object(i.b)("h2",{id:"other-notes"},"Other notes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/imjs"}),"imjs")," will be available on the window automatically."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://reactjs.org/"}),"React.js")," (vars React and ReactDOM) will also be available on the window, due to being used by BlueGenes.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Credits:")," Thanks to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/vivekkrish/2e5e4128efbbf2014c194aae6b83d245"}),"Vivek"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/joshkh/76091f1182d425934c1c5dbe2644d23a"}),"Josh")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yochannah/"}),"Yo")," for early work on the Tool API proposal."),Object(i.b)("h2",{id:"changelog"},"Changelog"),Object(i.b)("p",null,"We aim to keep all changes to the Tool API as backwards compatible as possible, but in some cases, breaking changes are necessary. The Tool API major version number will increment on breaking changes and additional details on the rationale and upgrading process will be included."),Object(i.b)("p",null,"Guidelines which should be followed for Tool API changes:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"All maintainers of the tools in ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/topics/bluegenes-tool"}),"https://github.com/topics/bluegenes-tool")," need to be contacted."),Object(i.b)("li",{parentName:"ol"},"A breaking change should be avoided unless deemed absolutely necessary, as agreed between developers and maintainers."),Object(i.b)("li",{parentName:"ol"},"Developers will assist with upgrading existing tools, even so far as to creating PRs."),Object(i.b)("li",{parentName:"ol"},"If the tool maintainer doesn't provide a way to test the updated tool, this becomes their responsibility."),Object(i.b)("li",{parentName:"ol"},"When releasing a breaking version, send an email to the dev-intermine mailing list with a warning that things may break if they update BlueGenes to this version.")),Object(i.b)("h3",{id:"tool-api-version-10"},"Tool API version 1.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Initial release.")),Object(i.b)("h3",{id:"tool-api-version-20"},"Tool API version 2.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Changes ",Object(i.b)("inlineCode",{parentName:"p"},"imEntity")," from an object to a nested object with keys corresponding to each object's class."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},'{"class": "Gene", "format": "id", "value": 1}')," ",Object(i.b)("strong",{parentName:"p"},"--\x3e")," ",Object(i.b)("inlineCode",{parentName:"p"},'{"Gene": {"class": "Gene", "format": "id", "value": 1}}')),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Rationale:")," It's possible for a list or query results page to have multiple classes, depending on the columns present. This meant a tool needed to be able to receive multiple imEntity's, which the previous Tool API didn't allow."),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Upgrading:")," You will need to grab the value you wish to work on out from the nested object in ",Object(i.b)("inlineCode",{parentName:"p"},"imEntity"),'. As an example, for a tool that works on the "Gene" class, you would change ',Object(i.b)("inlineCode",{parentName:"p"},"imEntity.value")," to ",Object(i.b)("inlineCode",{parentName:"p"},"imEntity.Gene.value"),". If your tool takes multiple classes, you can decide whether to always default to one if available, or present a different behaviour when multiple classes are present.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Adds a ",Object(i.b)("inlineCode",{parentName:"p"},"version")," key to ",Object(i.b)("em",{parentName:"p"},"config.json"),"."),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Rationale:")," To accomodate the first breaking change in the Tool API, we have added versioning of the tools. If your tool's version does not match the Tool API version of the BlueGenes using it, a warning will be displayed and your tool won't be shown on the respective pages. To make your tool work again, you will have to update it to support the changes to the Tool API, as well as update the ",Object(i.b)("inlineCode",{parentName:"p"},"version")," key in ",Object(i.b)("em",{parentName:"p"},"config.json"),". Note that a missing ",Object(i.b)("inlineCode",{parentName:"p"},"version")," key will be interpreted as version 1."),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Upgrading:")," Make sure your tool adheres to Tool API version 2 as described here, then add ",Object(i.b)("inlineCode",{parentName:"p"},'"version": 2')," to your ",Object(i.b)("em",{parentName:"p"},"config.json"),"."))))}b.isMDXComponent=!0}}]);