(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{371:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(708)),i={title:"How Do I Get a Summary of a Gene?"},c={unversionedId:"web-services/how-tos/get-gene-summary",id:"version-5.0.0/web-services/how-tos/get-gene-summary",isDocsHomePage:!1,title:"How Do I Get a Summary of a Gene?",description:"You need to make a request to the query/results resource:",source:"@site/versioned_docs/version-5.0.0/web-services/how-tos/get-gene-summary.md",slug:"/web-services/how-tos/get-gene-summary",permalink:"/im-docs/docs/web-services/how-tos/get-gene-summary",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-5.0.0/web-services/how-tos/get-gene-summary.md",version:"5.0.0"},s=[],u={toc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You need to make a request to the ",Object(a.b)("inlineCode",{parentName:"p"},"query/results")," resource:"),Object(a.b)("p",null,"You can make either a GET or a POST request - it may be better to make POST requests if your query gets large. The query format must be provided as an XML document in the InterMine ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.flymine.org/query/service/schema/query.xsd"}),"PathQuery XML format"),", and to write meaningful queries you will need to know a bit about the data model. For these reasons, we recommend you consider using the client libraries below. But if you do want to make the request using a tool such as ",Object(a.b)("inlineCode",{parentName:"p"},"curl"),", it would look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'QUERY=\'<query model="genomic" \n   view="Gene.symbol Gene.name Gene.primaryIdentifier Gene.length Gene.chromosome.primaryIdentifier\n         Gene.chromosomeLocation.start Gene.chromosomeLocation.end">\n      <constraint path="Gene.symbol" op="=" value="eve"/>\n      </query>\'\ncurl --data-urlencode query="$QUERY" http://www.flymine.org/query/service/query/results\n')),Object(a.b)("p",null,"This can be done much more concisely using the other tools, such as the Perl client libraries. Notice that, here, the library uses introspection of the data model to provide the appropriate fields."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-perl"}),"use 5.12.0;\nuse Webservice::InterMine 1.0301;\n\nmy $flymine = get_service('www.flymine.org/query');\nmy $eve = $flymine->select('Gene.*')->where(symbol => 'eve')->first;\n\nsay $eve->{name};\nsay $eve;\n")),Object(a.b)("p",null,"Similar facilities are available in the Python client:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from intermine.webservice import Service\n\nflymine = Service('www.flymine.org/query')\neve = flymine.model.Gene.where(symbol = 'eve').first()\n\nprint(eve.name)\nprint(eve)\n")),Object(a.b)("p",null,"And in Ruby:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"require 'intermine/service'\n\nflymine = Service.new('www.flymine.org/query')\neve = flymine.query('Gene').select('*').where( :symbol => 'eve' ).first\n\nputs eve.name\nputs eve\n")),Object(a.b)("p",null,"And in JavaScript:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"var intermine = require('imjs');\n\nvar flymine = new intermine.Service({root: 'www.flymine.org/query'});\nvar search = flymine.find('Gene', 'eve');\n\n// Only expecting a single match, but the method\n// yields a list of matches.\nsearch.done(function(matches) {\n  matches.forEach(function(gene) {\n    console.log(gene.name);\n    console.log(gene);\n  });\n});\n")))}l.isMDXComponent=!0},708:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return y}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),b=r,y=m["".concat(i,".").concat(b)]||m[b]||p[b]||a;return t?o.a.createElement(y,c(c({ref:n},u),{},{components:t})):o.a.createElement(y,c({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);