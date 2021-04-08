(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(707)),o={title:"How to set up your InterMine environment on the Amazon Cloud"},l={unversionedId:"intermine/amazon",id:"version-5.0.0/intermine/amazon",isDocsHomePage:!1,title:"How to set up your InterMine environment on the Amazon Cloud",description:"This is where you should learn how to start your own MalariaMine web application on the Amazon Cloud. You could also use your InterMine Amazon instance to try building MalariaMine yourself or to build your own mine there.",source:"@site/versioned_docs/version-5.0.0/intermine/amazon.md",slug:"/intermine/amazon",permalink:"/im-docs/docs/intermine/amazon",editUrl:"https://github.com/intermine/im-docs/edit/master/versioned_docs/version-5.0.0/intermine/amazon.md",version:"5.0.0",sidebar:"version-5.0.0/someSidebar",previous:{title:"Contribution Guide",permalink:"/im-docs/docs/intermine/get-involved"},next:{title:"Data Model Overview",permalink:"/im-docs/docs/data-model/overview"}},c=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Starting a new Instance",id:"starting-a-new-instance",children:[]},{value:"Starting an existing Instance",id:"starting-an-existing-instance",children:[]},{value:"Working with your Instance",id:"working-with-your-instance",children:[{value:"Starting/stopping the existing MalariaMine web application",id:"startingstopping-the-existing-malariamine-web-application",children:[]},{value:"Redeploying MalariaMine",id:"redeploying-malariamine",children:[]},{value:"(Re)building MalariaMine",id:"rebuilding-malariamine",children:[]}]}],b={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This is where you should learn how to start your own MalariaMine web application on the Amazon Cloud. You could also use your InterMine Amazon instance to try building MalariaMine yourself or to build your own mine there."),Object(r.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(r.b)("p",null,"You need an Amazon account. If you don't have one:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://aws.amazon.com"}),"http://aws.amazon.com"),"."),Object(r.b)("li",{parentName:"ul"},"Click on ",Object(r.b)("inlineCode",{parentName:"li"},"Sign Up"),"."),Object(r.b)("li",{parentName:"ul"},"Follow the instructions on the page.")),Object(r.b)("p",null,"You will need to set up your key pair security mechanism ","(","see step 7 below for an example",")",". Alternatively, you will need your aws-access-key and your aws-secret-key to start your instance ","(","not shown here",")","."),Object(r.b)("h2",{id:"starting-a-new-instance"},"Starting a new Instance"),Object(r.b)("p",null,"InterMine is publicly available on Amazon Cloud as an Image ","(","AMI",")",", with an AMI ID ",Object(r.b)("strong",{parentName:"p"},"ami-b1c7a9d8"),"."),Object(r.b)("p",null,"The image contains a ready deployed MalariaMine. To start a new instance:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Sign in at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://aws.amazon.com"}),"http://aws.amazon.com"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to the EC2 management console by following these steps:"),Object(r.b)("p",{parentName:"li"},"AWS console --",">"," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.aws.amazon.com/console/home"}),"https://console.aws.amazon.com/console/home")," --",">"," EC2 console.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set up a security group ","(","if you don't have one",")"," which allows access"),Object(r.b)("p",{parentName:"li"},"to at least ports:"),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"22 ","(","SSH",")"),Object(r.b)("li",{parentName:"ul"},"80 ","(","HTTP",")"),Object(r.b)("li",{parentName:"ul"},"8080 ","(","TOMCAT",")"))),Object(r.b)("p",{parentName:"li"},"you could also set up a few spare ones ","(","20, 21, 8009",")","."),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Note"),"\nYou can do this also during step 7, but ",Object(r.b)("strong",{parentName:"p"},"you cannot change the security group of an instance after starting it for the first time")," ","(","unless you use a VPC instance, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Introduction.html"}),"User Guide"),")",".  ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to the IMAGES/AMI console.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set the location on the top header ","(","beside your username",")"," to ",Object(r.b)("em",{parentName:"p"},"US")),Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"East ","(","N. Virginia",")"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set the filter to ",Object(r.b)("em",{parentName:"p"},"Public Images")," and search for ",Object(r.b)("strong",{parentName:"p"},"InterMine"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("em",{parentName:"p"},"BasicIntermine")," AMI ","(","AMI ID = ami-b1c7a9d8",")",".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Launch ","(","and configure",")"," instance"),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"you can use all default options for the instance characteristics"),Object(r.b)("p",{parentName:"li"},"and details, but use the security group you created in step 3.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"when prompted, create a new key pair ","(",Object(r.b)("inlineCode",{parentName:"p"},".pem")," file",")",", or use one"),Object(r.b)("p",{parentName:"li"},"that you already own."))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to the Instance console.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select your new instance.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"When public DNS appears ","(","after checks, a couple of minutes",")",", you can"),Object(r.b)("p",{parentName:"li"},"open a terminal with:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ ssh -i your_pem_file ubuntu@the_instance_public_DNS\n")))),Object(r.b)("h2",{id:"starting-an-existing-instance"},"Starting an existing Instance"),Object(r.b)("p",null,"If you are using an existing Instance, you need to:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Sign in at ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://aws.amazon.com"}),"http://aws.amazon.com"),"."),Object(r.b)("li",{parentName:"ol"},"Go to the EC2 console ","(","see step 2 above",")","."),Object(r.b)("li",{parentName:"ol"},"Go to the Instance console."),Object(r.b)("li",{parentName:"ol"},"Select your instance."),Object(r.b)("li",{parentName:"ol"},"Start your instance ","(","Actions --",">"," Start",")",".")),Object(r.b)("h2",{id:"working-with-your-instance"},"Working with your Instance"),Object(r.b)("p",null,"Open a terminal in your Instance"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ ssh -i your_pem_file ubuntu@the_instance_public_DNS\n")),Object(r.b)("p",null,"you will land in ",Object(r.b)("inlineCode",{parentName:"p"},"/home/ubuntu"),"."),Object(r.b)("p",null,"Here, you can find these relevant directories:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git/intermine")," the InterMine code base"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},".intermine")," with the properties file"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"malaria")," sources for building MalariaMine"),Object(r.b)("h3",{id:"startingstopping-the-existing-malariamine-web-application"},"Starting/stopping the existing MalariaMine web application"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"/webapp")," you'll find tomcat6. You can start the webapp using this command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ ./start.sh\n")),Object(r.b)("p",null,"Your BioTestMine web application will then be available on"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://the_instance_public_DNS:8080/malariamine"}),"http://the","_","instance","_","public","_","DNS:8080/malariamine"))),Object(r.b)("p",null,"To stop the web application, use this command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ ./stop.sh\n")),Object(r.b)("h3",{id:"redeploying-malariamine"},"Redeploying MalariaMine"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"/home/ubuntu/git/intermine/malariamine/webapp"),", use this command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ ant -v default remove-webapp release-webapp\n")),Object(r.b)("h3",{id:"rebuilding-malariamine"},"(","Re",")","building MalariaMine"),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://intermine.readthedocs.org/en/latest/get-started/tutorial/"}),"http://intermine.readthedocs.org/en/latest/get-started/tutorial/")),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"/home/ubuntu/git/intermine/malariamine"),", use this command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ ../bio/scripts/project_build -b -v localhost ~/malariamine-dump\n")),Object(r.b)("p",null,"You can also follow all the steps in the build as illustrated in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/im-docs/docs/get-started/tutorial/index"}),"Tutorial"),"."))}p.isMDXComponent=!0},707:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||r;return n?i.a.createElement(d,l(l({ref:t},b),{},{components:n})):i.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);