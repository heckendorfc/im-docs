(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{696:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(708)),i={title:"Building Javadoc"},c={unversionedId:"intermine/javadoc/index",id:"intermine/javadoc/index",isDocsHomePage:!1,title:"Building Javadoc",description:"Package-specific Javadoc",source:"@site/docs/intermine/javadoc/index.md",slug:"/intermine/javadoc/index",permalink:"/im-docs/docs/next/intermine/javadoc/index",editUrl:"https://github.com/intermine/im-docs/docs/intermine/javadoc/index.md",version:"current",sidebar:"someSidebar",previous:{title:"InterMine Versioning Policy",permalink:"/im-docs/docs/next/intermine/intermine-versions"},next:{title:"Contribution Guide",permalink:"/im-docs/docs/next/intermine/get-involved"}},s=[{value:"Package-specific Javadoc",id:"package-specific-javadoc",children:[{value:"Dependency note",id:"dependency-note",children:[]},{value:"Building",id:"building",children:[]}]},{value:"Intermine Javadoc",id:"intermine-javadoc",children:[]},{value:"Using Travis to auto-deploy Javadoc to GitHub Pages",id:"using-travis-to-auto-deploy-javadoc-to-github-pages",children:[{value:"Prerequisites",id:"prerequisites",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"package-specific-javadoc"},"Package-specific Javadoc"),Object(o.b)("h3",{id:"dependency-note"},"Dependency note"),Object(o.b)("p",null,"Note that package-specific Javadoc generation only works if you have successfully built the package first. If you haven't built it before, you're likely to get error messages about missing files."),Object(o.b)("h3",{id:"building"},"Building"),Object(o.b)("p",null,"To generate Javadoc at a package-specific level, change directory to the webapp directory of a given mine, and run ",Object(o.b)("inlineCode",{parentName:"p"},"ant javadoc"),". Assuming you're at the root of your intermine directory:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"~/git/flymine $ ./gradlew javadoc\n")),Object(o.b)("p",null,"Upon successful build, you'll be able to find the Javadoc under the ",Object(o.b)("inlineCode",{parentName:"p"},"build/javadoc")," folder. For the FlyMine example above, it'd be at ",Object(o.b)("inlineCode",{parentName:"p"},"flymine/webapp/build/javadoc"),"."),Object(o.b)("h2",{id:"intermine-javadoc"},"Intermine Javadoc"),Object(o.b)("p",null,"If you just want to browse the docs, you can see the most recent version at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://intermine.org/intermine/"}),"http://intermine.org/intermine/"),"."),Object(o.b)("h2",{id:"using-travis-to-auto-deploy-javadoc-to-github-pages"},"Using Travis to auto-deploy Javadoc to GitHub Pages"),Object(o.b)("p",null,"If you have your InterMine repo set up to automatically run tests using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://travis-ci.org"}),"Travis"),", you can deploy the documentation automatically whenever new code is checked into your ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch, using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pages.github.com/"}),"Github Pages")," as a host."),Object(o.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"In order to deploy, there must be an encrypted ",Object(o.b)("inlineCode",{parentName:"p"},"$GH_TOKEN")," set in ",Object(o.b)("inlineCode",{parentName:"p"},".travis.yml")," to authenticate with Github. This is safe because of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.travis-ci.com/user/environment-variables#defining-encrypted-variables-in-travisyml"}),"the way Travis treats encrypted variables"),". This token needs to be generated by someone with access to the repo."),Object(o.b)("h4",{id:"generating-a-token"},"Generating a token"),Object(o.b)("p",null,"Go to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/settings/tokens/new"}),"Personal access tokens")," section of Github, and create a now token with ",Object(o.b)("inlineCode",{parentName:"p"},"repo")," permissions only. If it's a public repo, then ",Object(o.b)("inlineCode",{parentName:"p"},"public_repo")," permissions will suffice. Name it something memorable, and copy it down somewhere safe when you are shown it, as you're only shown it the once."),Object(o.b)("h4",{id:"encrypting-the-token"},"Encrypting the token"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Important: to ensure you don't inadvertently leak your token, granting someone else write-access to your repo, you must encrypt this token! Do ","*","not","*"," paste it into .travis.yml without encrypting it first!")," To encrypt you Github token, you need to install Travis CLI locally if you haven't already, then run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ travis encrypt GH_TOKEN=put-your-very-secret-github-token-here\n")),Object(o.b)("p",null,"This will output the encrypted variable into your console, looking something like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"secure: long string of nonsense here\n")),Object(o.b)("p",null,"Copy the entire output to your ",Object(o.b)("inlineCode",{parentName:"p"},".travis.yml")," under the env global section. You should end up with a section like this. It's ok to have more than one secure environment variable."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"env:\n  global:\n  - secure: that same long string of nonsense\n")),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.travis-ci.com/user/encryption-keys/"}),"Travis's documentation on encrypting environment variables")," for more information."),Object(o.b)("p",null,"Assuming the repo is already set up to be tested in Travis, this should be all you need to set up automatic deployments"),Object(o.b)("h4",{id:"configuring-travis-to-auto-deploy-javadoc-from-branches-other-than-master"},"Configuring Travis to auto-deploy Javadoc from branches other than master"),Object(o.b)("p",null,"If you wish to deploy javadoc from a different branch, perhaps a development / test branch, find this line in your ",Object(o.b)("inlineCode",{parentName:"p"},".travis.yml")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'after_success:\n  - test $TRAVIS_BRANCH == "master" && bash config/travis/deploydocs.sh\n')),Object(o.b)("p",null,'Simply change the value of "master" to the branch you wish to use.'))}u.isMDXComponent=!0},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);