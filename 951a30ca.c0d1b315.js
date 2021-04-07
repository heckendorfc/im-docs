(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{443:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),r=(n(0),n(708)),o={title:"Perl"},i={unversionedId:"system-requirements/software/perl",id:"system-requirements/software/perl",isDocsHomePage:!1,title:"Perl",description:"Many of the build processes are carried out by Perl programs. You will need Perl installed on your system to build or maintain an InterMine installation. Linux and MacOS systems will have a suitable Perl already installed. Perl is available for Windows, but is not actively supported by InterMine.",source:"@site/docs/system-requirements/software/perl.md",slug:"/system-requirements/software/perl",permalink:"/im-docs/docs/next/system-requirements/software/perl",editUrl:"https://github.com/intermine/im-docs/docs/system-requirements/software/perl.md",version:"current",sidebar:"someSidebar",previous:{title:"Java",permalink:"/im-docs/docs/next/system-requirements/software/java"},next:{title:"Installing PostgreSQL",permalink:"/im-docs/docs/next/system-requirements/software/postgres/postgres"}},s=[{value:"CPAN",id:"cpan",children:[]},{value:"DEB Packages",id:"deb-packages",children:[]},{value:"Manually installing InterMine modules",id:"manually-installing-intermine-modules",children:[]},{value:"List of Perl Modules to Install",id:"list-of-perl-modules-to-install",children:[]},{value:"How to install all the Perl Modules to Run the Data Downloader Script",id:"how-to-install-all-the-perl-modules-to-run-the-data-downloader-script",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Many of the build processes are carried out by Perl programs. You will need Perl installed on your system to build or maintain an InterMine installation. Linux and MacOS systems will have a suitable Perl already installed. Perl is available for Windows, but is not actively supported by InterMine."),Object(r.b)("p",null,"To set up your Perl environment, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://perlbrew.pl/"}),"perlbrew")," is a good guide, and make use of the modern toolchain, like ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://metacpan.org/pod/cpanm/"}),"cpan"),"."),Object(r.b)("p",null,"At various times, you will be requested to install various Perl modules. Here, you can find instructions for how to do this using the native CPAN tool which comes with every Perl distribution on Linux and OSX, using Debian/Ubuntu package managers, as well as manual installs:"),Object(r.b)("h2",{id:"cpan"},"CPAN"),Object(r.b)("p",null,"CPAN stands for the Comprehensive Perl Archive Network and it is the software repository for Perl modules ","(","you can compare it to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://pypi.python.org/pypi/"}),"python's pypi"),", Yum/Apt repositories in Linux, or Apple's App Store",")",". If you have Perl installed, you have CPAN. To check, type ",Object(r.b)("inlineCode",{parentName:"p"},"cpan")," in a terminal."),Object(r.b)("p",null,"To install modules with CPAN you may first need to set up the installer, in a terminal run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cpan\n")),Object(r.b)("p",null,"This will take you to a CPAN shell, which will allow you to configure your properties. To review your current configuration, type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ o conf\n")),Object(r.b)("p",null,"When you first run CPAN should run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ o conf init\n")),Object(r.b)("p",null,"This will guide you through the set-up procedure. You can run this later to change the settings which are set automatically."),Object(r.b)("p",null,"To change a setting manually, type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ o conf [SETTING NAME] "NEW VALUE"\n')),Object(r.b)("p",null,"For example, to make installed modules uninstall previous versions and use sudo to elevate permissions ","(","very good ideas",")",", type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ o conf mbuild_install_arg "--uninst 1"\n$ o conf mbuild_install_build_command "sudo ./Build"\n$ o conf make_install_make_command "sudo make"\n')),Object(r.b)("p",null,"If you change options, remember to save your changes with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ o conf commit\n")),Object(r.b)("p",null,"To install modules, type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cpan Module::Name Another::Module::Name\n")),Object(r.b)("p",null,'To force the install for any reason, use the "-f" flag, so type:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cpan -f Module::Name\n")),Object(r.b)("p",null,"If you have not set the sudo option in the CPAN configuration, Add sudo before the CPAN command, like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo cpan -f Module::Name\n")),Object(r.b)("h2",{id:"deb-packages"},"DEB Packages"),Object(r.b)("p",null,"Many Perl libraries are packaged for different Linux distributions. Debian/Ubuntu has a great number of these, and in many cases this is a good alternative to the CPAN install."),Object(r.b)("p",null,"The procedure to install is the same as for any other package:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo apt-get install libxml-writer-perl # installs XML::Writer\n")),Object(r.b)("p",null,'There is a predictable name to package mapping: "::" becomes "-", there will be a "lib" on the front, and a "-perl" on the end, so:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'"',Object(r.b)("inlineCode",{parentName:"li"},"XML::DOM"),'" becomes "',Object(r.b)("inlineCode",{parentName:"li"},"libxml-dom-perl"),'"'),Object(r.b)("li",{parentName:"ul"},'"',Object(r.b)("inlineCode",{parentName:"li"},"Moose"),'" becomes "',Object(r.b)("inlineCode",{parentName:"li"},"libmoose-perl"),'"'),Object(r.b)("li",{parentName:"ul"},"and so on")),Object(r.b)("p",null,"These are the modules you need to build a database:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo apt-get install libxml-writer-perl libxml-sax-base-perl libxml-perl libxml-filter-saxt-perl libtext-glob-perl\n")),Object(r.b)("p",null,"To search for a package, you can type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ apt-cache search package-name\n")),Object(r.b)("h2",{id:"manually-installing-intermine-modules"},"Manually installing InterMine modules"),Object(r.b)("p",null,"The InterMine Perl modules are available on CPAN, and you are encouraged to download them from there. However, you can install them manually too. First you will need to check-out the source code. ","(","It is recommended you update your version of Module::Build to at least version 0.36, as this will allow you to automate the dependency installation.",")"),Object(r.b)("p",null,"From your check out ","(","or unzipped tar file",")",' go to the directory "',Object(r.b)("inlineCode",{parentName:"p"},"intermine/perl/"),'"'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cd git/intermine/perl\n")),Object(r.b)("p",null,'Here, there are three "distributions" of modules you may want to install:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"InterMine-Model"),Object(r.b)("li",{parentName:"ul"},"InterMine-Item ","(","depends on InterMine::Model",")"),Object(r.b)("li",{parentName:"ul"},"Webservice-InterMine ","(","depends on InterMine::Model",")")),Object(r.b)("p",null,"The installation procedure for these is the same:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cd [DISTRIBUTION-DIRECTORY]\n$ perl Build.PL            # Checks your system\n$ sudo ./Build installdeps # If you have Module::Build >= 0.36\n$ ./Build test             # tests the modules: optional but HIGHLY recommended\n$ sudo ./Build install     # Installs the modules\n")),Object(r.b)("p",null,"If you do not have Module::Build 0.36 or above, you can install the dependencies using the above methods ","(","CPAN and Packages",")","."),Object(r.b)("h2",{id:"list-of-perl-modules-to-install"},"List of Perl Modules to Install"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For the InterMine modules:")),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"List::MoreUtils")," ","(","utility functions for handling lists",")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LWP")," ","(","Handling network communication",")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Module::Find")," ","(","Automatically locating modules by name",")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Moose")," ","(","Object system",")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MooseX::Role::WithOverloading")," ","(","Allows roles to overload operators",")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MooseX::Types")," ","(","Type constraint system",")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Text::CSV_XS")," ","(","Processing .csv and .tsv files",")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"URI")," ","(","Handling URLs",")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"XML::Parser::PerlSAX")," ","(","Parsing XML",")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"XML::DOM")," ","(","XML processing and output",")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Text::Glob")," ","(","used by the ",Object(r.b)("inlineCode",{parentName:"li"},"project_build")," script",")"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For the download scripts:")),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"Log::Handler"),Object(r.b)("li",{parentName:"ul"},"DateTime"),Object(r.b)("li",{parentName:"ul"},"Module::Find"),Object(r.b)("li",{parentName:"ul"},"Web::Scraper"),Object(r.b)("li",{parentName:"ul"},"Ouch"),Object(r.b)("li",{parentName:"ul"},"Number::Format"),Object(r.b)("li",{parentName:"ul"},"PerlIO::gzip"),Object(r.b)("li",{parentName:"ul"},"Perl6::Junction"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For generating InterMine Items XML:")),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"Getopt::Std"),Object(r.b)("li",{parentName:"ul"},"Log::Handler;"),Object(r.b)("li",{parentName:"ul"},"Digest::MD5"))),Object(r.b)("h2",{id:"how-to-install-all-the-perl-modules-to-run-the-data-downloader-script"},"How to install all the Perl Modules to Run the Data Downloader Script"),Object(r.b)("p",null,"In order to download all the Perl scripts required by the Data Downloader script, use the following cpan installation command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cpan install DateTime Module::Find Web::Scraper Ouch Number::Format PerlIO::gzip Perl6::Junction List::MoreUtils LWP Module::Find Moose MooseX::Role::WithOverloading MooseX::Types Text::CSV_XS URI XML::Parser::PerlSAX XML::DOM Text::Glob MooseX::FollowPBP MooseX::ABC MooseX::FileAttribute\n")))}b.isMDXComponent=!0},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),b=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||r;return n?l.a.createElement(m,i(i({ref:t},c),{},{components:n})):l.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);