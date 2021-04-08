(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{452:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(707)),i={title:"Apps/C Usage"},c={unversionedId:"embedding/apps-c/usage",id:"version-4.0.0/embedding/apps-c/usage",isDocsHomePage:!1,title:"Apps/C Usage",description:"This document describes how to build JavaScript components using the Apps/C Grunt builder. It compiles CoffeeScript, JavaScript and Eco into CommonJS/1.1 Modules providing AMD/CommonJS/window external interface.",source:"@site/versioned_docs/version-4.0.0/embedding/apps-c/usage.md",slug:"/embedding/apps-c/usage",permalink:"/im-docs/docs/4.0.0/embedding/apps-c/usage",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/embedding/apps-c/usage.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Apps/C Grunt Build",permalink:"/im-docs/docs/4.0.0/embedding/apps-c/index"},next:{title:"publication-search",permalink:"/im-docs/docs/4.0.0/embedding/apps-c/publication-search"}},p=[{value:"Config",id:"config",children:[{value:"Eco Templates",id:"eco-templates",children:[]}]},{value:"CommonJS/1.1 Modules",id:"commonjs11-modules",children:[]}],s={toc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document describes how to build JavaScript components using the Apps/C ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://gruntjs.com/"}),"Grunt")," builder. It compiles CoffeeScript, JavaScript and Eco into CommonJS/1.1 Modules providing AMD/CommonJS/window external interface."),Object(a.b)("p",null,"Example ",Object(a.b)("inlineCode",{parentName:"p"},"Gruntfile"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-coffeescript"}),"module.exports = (grunt) ->\n    grunt.initConfig\n        pkg: grunt.file.readJSON(\"package.json\")\n\n        apps_c:\n            commonjs:\n                src: [ 'src/**/*.{coffee,js,eco}' ]\n                dest: 'build/app.js'\n                options:\n                    main: 'src/index.js'\n                    name: 'MyApp'\n\n    grunt.loadNpmTasks('grunt-apps-c')\n\n    grunt.registerTask('default', [ 'apps_c' ])\n")),Object(a.b)("p",null,"You can now include the ",Object(a.b)("inlineCode",{parentName:"p"},"build/app.js")," file and, depending on your surrounding environment, you will be able to load it using RequireJS/AMD, CommonJS or straight from ",Object(a.b)("inlineCode",{parentName:"p"},"window")," under the ",Object(a.b)("inlineCode",{parentName:"p"},"MyApp")," key."),Object(a.b)("h2",{id:"config"},"Config"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"options.main"),' property specifies which file will be considered the "main" one for your package. Somehow, the external world needs to know what to get when they call ',Object(a.b)("inlineCode",{parentName:"p"},"require(package_name)"),". If you do not specify this property the following actions are taken:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"We try make use of the property ",Object(a.b)("inlineCode",{parentName:"p"},"main")," as specified in your app's"),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"package.json")," file. Failing that, we...")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Try to find the ",Object(a.b)("inlineCode",{parentName:"p"},"index.[js|coffee]")," file that is closest to the root of your sources."))),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"options.name")," overrides the name of the package in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),". It specified the name of the exported package as in: ",Object(a.b)("inlineCode",{parentName:"p"},"require(name)"),". One can pass in an array of names, as alternatives, as well."),Object(a.b)("h3",{id:"eco-templates"},"Eco Templates"),Object(a.b)("p",null,"Are precompiled so when you require them, you need to only pass a ",Object(a.b)("inlineCode",{parentName:"p"},"context")," to them to get a string back."),Object(a.b)("h2",{id:"commonjs11-modules"},"CommonJS/1.1 Modules"),Object(a.b)("p",null,"The following template wraps your modules:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// filename\nrequire.register('package/path.js', function(exports, require, module) {\n  // ...\n});\n")))}l.isMDXComponent=!0},707:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return t?o.a.createElement(b,c(c({ref:n},s),{},{components:t})):o.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);