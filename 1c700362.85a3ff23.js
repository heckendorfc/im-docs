(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(707)),o={title:"Contribution Guide"},l={unversionedId:"intermine/get-involved",id:"version-4.0.0/intermine/get-involved",isDocsHomePage:!1,title:"Contribution Guide",description:"This document sets out the development processes for those contributing to the InterMine code base. It specifically refers to the main application code-base, but these practices should be employed in an ideal world on all code bases.",source:"@site/versioned_docs/version-4.0.0/intermine/get-involved.md",slug:"/intermine/get-involved",permalink:"/im-docs/docs/4.0.0/intermine/get-involved",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-4.0.0/intermine/get-involved.md",version:"4.0.0",sidebar:"version-4.0.0/someSidebar",previous:{title:"Building Javadoc",permalink:"/im-docs/docs/4.0.0/intermine/javadoc/index"},next:{title:"How to set up your InterMine environment on the Amazon Cloud",permalink:"/im-docs/docs/4.0.0/intermine/amazon"}},c=[{value:"Branches",id:"branches",children:[]},{value:"Setting Up a Development Environment",id:"setting-up-a-development-environment",children:[]},{value:"Developing a Feature",id:"developing-a-feature",children:[]},{value:"The Role of The Release Manager",id:"the-role-of-the-release-manager",children:[]},{value:"Release Process",id:"release-process",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document sets out the development processes for those contributing to the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/intermine"}),"InterMine code base"),". It specifically refers to the main application code-base, but these practices should be employed in an ideal world on all code bases."),Object(i.b)("p",null,"There is no distinction between the processes that developers should follow internally or externally - all code contributions, whether from core team members or outside contributors, should be treated the same."),Object(i.b)("h2",{id:"branches"},"Branches"),Object(i.b)("p",null,"There are branches in the InterMine GitHub repository with special meaning:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"master")),Object(i.b)("p",null,"The current public release. External users should clone this branch and receive a stable, supported and well-documented application that works to all specifications."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dev")),Object(i.b)("p",null,"The working branch. Features are merged onto this branch for integration testing. Not guaranteed to be stable."),Object(i.b)("h2",{id:"setting-up-a-development-environment"},"Setting Up a Development Environment"),Object(i.b)("p",null,"Development does not happen on the master or dev branch. The recommended practice is to fork the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/intermine"}),"intermine repo")," and maintain development branches in your own repository."),Object(i.b)("h2",{id:"developing-a-feature"},"Developing a Feature"),Object(i.b)("p",null,"Code contributions should be discrete units of code. They should do one thing ","(","be that fix a bug or add a feature",")"," and not be code dumps. Ideally they should refer to existing issues in the ",Object(i.b)("inlineCode",{parentName:"p"},"InterMine issue tracker"),". Let's say we want to develop a new feature - discussed in issue ",Object(i.b)("inlineCode",{parentName:"p"},"#12345: We should be better wombles and recycle everything")," - then we would do the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Checkout the current head of ",Object(i.b)("inlineCode",{parentName:"li"},"dev")," from upstream."),Object(i.b)("li",{parentName:"ol"},"Branch ",Object(i.b)("inlineCode",{parentName:"li"},"dev"),", naming the branch something descriptive like ",Object(i.b)("inlineCode",{parentName:"li"},"womblier"),"."),Object(i.b)("li",{parentName:"ol"},"Checkout the new branch."),Object(i.b)("li",{parentName:"ol"},"Commit, commit, commit. Using detailed commit messages."),Object(i.b)("li",{parentName:"ol"},"Push changes to your fork."),Object(i.b)("li",{parentName:"ol"},"When you are satisfied that we have reached a sufficiently wombly state of being, create a new pull request requesting that the head of ",Object(i.b)("inlineCode",{parentName:"li"},"you/womblier")," be merged into ",Object(i.b)("inlineCode",{parentName:"li"},"intermine/dev"),".")),Object(i.b)("p",null,"At any point in the above process, you can merge and switch to work on another branch and then come back. It is probably a good idea to regularly merge the head of ",Object(i.b)("inlineCode",{parentName:"p"},"intermine/dev")," into ",Object(i.b)("inlineCode",{parentName:"p"},"you/womblier"),", especially if development is taking a long time. These merges should probably be ",Object(i.b)("inlineCode",{parentName:"p"},"rebase")," merges."),Object(i.b)("p",null,"Hot fix branches ","(","serious bugs that are critical fixes to the current release",")"," should be branched from ",Object(i.b)("inlineCode",{parentName:"p"},"master")," rather than ",Object(i.b)("inlineCode",{parentName:"p"},"dev"),", and their pull requests should likewise be for ",Object(i.b)("inlineCode",{parentName:"p"},"master"),"."),Object(i.b)("h2",{id:"the-role-of-the-release-manager"},"The Role of The Release Manager"),Object(i.b)("p",null,"The release manager's role is to ensure this all happens. They are the only person permitted to push into ",Object(i.b)("inlineCode",{parentName:"p"},"master")," and ",Object(i.b)("inlineCode",{parentName:"p"},"dev"),". All code contributions for these branches must pass review by the release manager before they can be merged."),Object(i.b)("p",null,"The process for reviewing and merging a pull request is as follows:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Read the commits and review the code for style and standards. Request any changes from the developer before proceeding. The criteria for acceptance is:"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"Passing unit test for new code ","(","if applicable",")"),Object(i.b)("li",{parentName:"ul"},"Passes all tests -- according to Travis"),Object(i.b)("li",{parentName:"ul"},"Documentation ","(","if applicable",")"),Object(i.b)("li",{parentName:"ul"},"Single purpose"),Object(i.b)("li",{parentName:"ul"},"Detailed commit messages"),Object(i.b)("li",{parentName:"ul"},"Well commented code"),Object(i.b)("li",{parentName:"ul"},"Checkstyle")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Fetch and checkout the new feature branch.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Merge the target branch ","(",Object(i.b)("inlineCode",{parentName:"p"},"master")," or ",Object(i.b)("inlineCode",{parentName:"p"},"dev"),")"," into the feature branch. If there are any conflicts, push the pull-request back to the developer for resolution.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Perform necessary automated and manual testing to verify that this branch is valid.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Checkout the current head of ",Object(i.b)("inlineCode",{parentName:"p"},"intermine/dev")," and merge the feature branch into it.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Push ",Object(i.b)("inlineCode",{parentName:"p"},"dev")," to the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/intermine/intermine"}),"intermine repo"),"."))),Object(i.b)("h2",{id:"release-process"},"Release Process"),Object(i.b)("p",null,"Once all pull requests and tickets for a specific milestone are tested and complete, the release manager merges the ",Object(i.b)("inlineCode",{parentName:"p"},"dev")," branch onto the ",Object(i.b)("inlineCode",{parentName:"p"},"master")," branch, tagging the merge with the milestone's label. The release notes are available on the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://github.com/intermine/intermine/releases"}),"Releases")," page, and announcements are posted on twitter and the mailing lists and discussed in detail on the community calls."))}b.isMDXComponent=!0},707:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(u,l(l({ref:t},s),{},{components:n})):a.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);