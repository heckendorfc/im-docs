(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{211:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),o=(a(0),a(702)),i={title:"Writing your own data source"},s={unversionedId:"database/data-sources/custom/index",id:"version-5.0.0/database/data-sources/custom/index",isDocsHomePage:!1,title:"Writing your own data source",description:"The aim of this tutorial is to create a new data source to parse your data file and load the data into your InterMine database.",source:"@site/versioned_docs/version-5.0.0/database/data-sources/custom/index.md",slug:"/database/data-sources/custom/index",permalink:"/im-docs/docs/database/data-sources/custom/index",editUrl:"https://github.com/intermine/im-docs/versioned_docs/version-5.0.0/database/data-sources/custom/index.md",version:"5.0.0",sidebar:"version-5.0.0/someSidebar",previous:{title:"VCF files",permalink:"/im-docs/docs/database/data-sources/library/variation/vcf"},next:{title:"InterMine Items XML Overview",permalink:"/im-docs/docs/database/data-sources/apis/index"}},c=[{value:"1. Create bio-sources directory",id:"1-create-bio-sources-directory",children:[]},{value:"2. Run make_source script",id:"2-run-make_source-script",children:[]},{value:"3. Add your source to your project XML file",id:"3-add-your-source-to-your-project-xml-file",children:[{value:"Versions",id:"versions",children:[]}]},{value:"3. Write your parser",id:"3-write-your-parser",children:[{value:"custom-file",id:"custom-file",children:[]},{value:"intermine-items-xml-file",id:"intermine-items-xml-file",children:[]},{value:"intermine-items-large-xml-file",id:"intermine-items-large-xml-file",children:[]},{value:"db",id:"db",children:[]},{value:"GFF3",id:"gff3",children:[]},{value:"FASTA",id:"fasta",children:[]},{value:"OBO",id:"obo",children:[]}]},{value:"4. Update the Additions file",id:"4-update-the-additions-file",children:[{value:"Global Additions File",id:"global-additions-file",children:[]}]},{value:"5. Update Keys file",id:"5-update-keys-file",children:[]},{value:"6. Build your JAR and put on the classpath",id:"6-build-your-jar-and-put-on-the-classpath",children:[]},{value:"7. Run a build and load your data!",id:"7-run-a-build-and-load-your-data",children:[]}],l={toc:c};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The aim of this tutorial is to create a new data source to parse your data file and load the data into your InterMine database."),Object(o.b)("p",null,"There are three parts to creating a new source:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a directory for your data sources, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"flymine-bio-sources")),Object(o.b)("li",{parentName:"ol"},"Write a data parser"),Object(o.b)("li",{parentName:"ol"},"Configure the mine to use this new source")),Object(o.b)("p",null,"To get started, create a directory to put all of your data sources in. You only need to that once. Then follow the instructions below and run the script to create your data source. If necessary, use the APIs provided to write code to parse your data file. Finally, add your new data source to your project XML file."),Object(o.b)("h2",{id:"1-create-bio-sources-directory"},"1. Create bio-sources directory"),Object(o.b)("p",null,"You only need to do this once, but you need a directory to hold all of your mine's data sources."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Place next to your mine, e.g. ~/git/flymine and ~/git/flymine-bio-sources"),Object(o.b)("li",{parentName:"ul"},"Keep in source control. Please. We use Git.")),Object(o.b)("h2",{id:"2-run-make_source-script"},"2. Run make","_","source script"),Object(o.b)("p",null,"Checkout the intermine scripts repository that contains the make","_","source script."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# check out the repository that has the scripts we need\n~/git $ git clone https://github.com/intermine/intermine-scripts.git\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"make_source")," script creates the basic skeleton for a source. It should be run in your mine's data sources directory, like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# run the script in the directory you created for your mine data sources\n~/git/flymine-bio-sources $ ~/git/intermine-scripts/make_source $SOURCE_NAME $SOURCE_TYPE\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"SOURCE","_","NAME")),Object(o.b)("p",null,"The name of your source, e.g. uniprot-fasta or biogrid. The script expects a lowercase word without any special characters ","(","except dashes, dashes are fine",")","."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"SOURCE","_","TYPE")),Object(o.b)("p",null,"The type of your source. It can be one of six options, see below."),Object(o.b)("p",null,"Which source type do I need? It depends! If you want to use Java and have a custom data file, use ",Object(o.b)("inlineCode",{parentName:"p"},"custom-file"),". If you want to use the Perl API, then select ",Object(o.b)("inlineCode",{parentName:"p"},"intermine-items-xml-file"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"When to use?"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"db"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"To load data directly from another ",Object(o.b)("strong",{parentName:"td"},"database"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"gff"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"for GFF files")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"fasta"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"for FASTA files")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"obo"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"for Ontology files")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"custom-file"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"If you have a data file and want to parse using ",Object(o.b)("strong",{parentName:"td"},"Java"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"intermine-items-xml-file"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"If you have a data file and want to parse using a ",Object(o.b)("strong",{parentName:"td"},"language other than Java"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"intermine-items-large-xml-file"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Same as above but the file is very very large")))),Object(o.b)("p",null,"The script also creates a gradle project if one does not exist."),Object(o.b)("h2",{id:"3-add-your-source-to-your-project-xml-file"},"3. Add your source to your project XML file"),Object(o.b)("p",null,"Add your new source to the project XML file so it will be run during your build. Below are example project XML snippets for each source type. Note that different parser types have different expected parameters."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/database/database-building/project-xml"}),"Project XML")," for further reading about the project XML file."),Object(o.b)("h3",{id:"versions"},"Versions"),Object(o.b)("p",null,'The "version" provided for each source has to match the version of your data parser, e.g. you would want to set ',Object(o.b)("inlineCode",{parentName:"p"},"version=1.2.3")," for your source ",Object(o.b)("inlineCode",{parentName:"p"},"bio-source-mysource-1.2.3.jar"),". If you do not provide a version in the project XML file, the default InterMine version will be used."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/database/data-sources/custom/dataparser-versions"}),"Data Source Versions")," for details."),Object(o.b)("h2",{id:"3-write-your-parser"},"3. Write your parser"),Object(o.b)("p",null,"For most types of data, you'll have to write some code to store your data into InterMine."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),"\nRun ",Object(o.b)("inlineCode",{parentName:"p"},"make_source")," with no arguments to get a full list of source types."),Object(o.b)("h3",{id:"custom-file"},"custom-file"),Object(o.b)("p",null,"This a source that reads from a file in a custom format. A custom Java FileConverter will be needed. The ",Object(o.b)("inlineCode",{parentName:"p"},"make_source")," script will create a skeleton ",Object(o.b)("inlineCode",{parentName:"p"},"FileConverter")," in ",Object(o.b)("inlineCode",{parentName:"p"},"<source-name>/src/main/java/org/intermine/bio/dataconversion"),". Edit this code to process the particular file you need to load, using the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/database/data-sources/apis/java-items-api"}),"Java Items API")," to create and store items to the database."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"project.xml")," configuration is as below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'\x3c!-- add to your mine\'s project XML file --\x3e\n<source name="my-new-source-name" type="my-new-source-name" version="1.2.3">\n  <property name="src.data.dir" location="/some/data/directory"/>\n  \x3c!-- optionally specify includes or excludes --\x3e\n  <property name="src.data.dir.includes" value="*.xml"/>\n</source>\n')),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/database/data-sources/custom/dataparser-versions"}),"Data Source Versions")," for details on how to version your data parser."),Object(o.b)("h4",{id:"additional-properties-in-project-xml"},"Additional Properties in Project XML"),Object(o.b)("p",null,"Any properties you define in a source entry in your mine's project.xml will be available in that source's converter or post-processing class, provided that there is a setter with an appropriate name."),Object(o.b)("p",null,"This applies to any class that inherits from:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"org.intermine.dataconversion.DataConverter"),Object(o.b)("li",{parentName:"ul"},"org.intermine.dataconversion.DBConverter"),Object(o.b)("li",{parentName:"ul"},"org.intermine.dataconversion.DirectoryConverter"),Object(o.b)("li",{parentName:"ul"},"org.intermine.dataconversion.FileConverter"),Object(o.b)("li",{parentName:"ul"},"org.intermine.postprocess.PostProcessor")),Object(o.b)("p",null,"For instance, if you have this entry:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'\x3c!-- in project XML --\x3e\n<source name="my-new-source-name" type="my-new-source-name" version="2.3.4">\n  <property name="bar.info" value="baz"/>\n  <property name="bazMoreInfo" value="hello-world"/>\n</source>\n')),Object(o.b)("p",null,"Then those values will be available ","(","provided you create the setters correctly",")",":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// In a class that extends org.intermine.postprocess.PostProcessor, for example\npublic void setBarInfo(String info) {\n  // given the example project XML values above, "info" has the value of "baz"\n  this.info = info;\n}\npublic void setBazMoreInfo(String moreInfo) {\n  // given the example project XML values above, "moreInfo" has the value of "hello-world"\n  this.moreInfo = moreInfo;\n}\n')),Object(o.b)("h3",{id:"intermine-items-xml-file"},"intermine-items-xml-file"),Object(o.b)("p",null,"This type of source can read a file in InterMine Items XML format and store the data in a mine. The ",Object(o.b)("inlineCode",{parentName:"p"},"project.xml")," configuration is as below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'# add your source to your project XML file\n<source name="my-new-source-name" type="my-new-source-name" version="1.2.3">\n  <property name="src.data.file" location="/some/directory/objects_in_intermine_format.xml"/>\n</source>\n')),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/database/data-sources/apis/index"}),"this page")," for more information on the Items XML format and links to APIs that can generate it. This source type doesn't generate any stub Java code."),Object(o.b)("h3",{id:"intermine-items-large-xml-file"},"intermine-items-large-xml-file"),Object(o.b)("p",null,"This source works as above but writes the XML to an intermediate items database to avoid reading the whole file into memory at once. This is the best choice for large XML files where large is several hundred megabytes ","(","although this depends on the amount of RAM specified in your ",Object(o.b)("inlineCode",{parentName:"p"},"GRADLE_OPTS")," environment variable",")","."),Object(o.b)("h3",{id:"db"},"db"),Object(o.b)("p",null,"This source reads directly from a relational database. It will generate a skeleton ",Object(o.b)("inlineCode",{parentName:"p"},"DBConverter")," in ",Object(o.b)("inlineCode",{parentName:"p"},"<source-name>/src/main/java/org/intermine/bio/dataconversion"),". You will use the Java API to store data to the InterMine database."),Object(o.b)("p",null,"To connect to the original database you need to add properties in xxxmine.properties with the prefix ",Object(o.b)("inlineCode",{parentName:"p"},"db.sourcename"),"."),Object(o.b)("p",null,"This is tested for PostgreSQL and MySQL."),Object(o.b)("p",null,"Common properties ","(","to be added to your mine properties file",")",":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),"db.sourcename.datasource.dataSourceName=db.sourcename\ndb.sourcename.datasource.maxConnections=10\ndb.sourcename.datasource.serverName=SERVER_NAME\ndb.sourcename.datasource.databaseName=DB_NAME\ndb.sourcename.datasource.user=USER_NAME\ndb.sourcename.datasource.password=USER_PASSWORD\n")),Object(o.b)("p",null,"Add these for PostgreSQL:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),"db.sourcename.datasource.class=com.zaxxer.hikari.HikariDataSource\ndb.sourcename.datasource.dataSourceClassName=org.postgresql.ds.PGSimpleDataSource\ndb.sourcename.driver=org.postgresql.Driver\ndb.sourcename.platform=PostgreSQL\n")),Object(o.b)("p",null,"Add these for MySQL:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),"db.sourcename.datasource.class=com.mysql.jdbc.jdbc2.optional.MysqlConnectionPoolDataSource\ndb.sourcename.driver=com.mysql.jdbc.Driver\ndb.sourcename.platform=MySQL\n")),Object(o.b)("p",null,"The db value has to match the ",Object(o.b)("inlineCode",{parentName:"p"},"source.db.name")," in your project XML entry, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'# project XML\n<source name="chado-db-flybase-dmel" type="chado-db" version="1.2.3">\n  <property name="source.db.name" value="flybase"/>\n  ...\n</source>\n')),Object(o.b)("p",null,"Example entry in flymine.properties:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"# flymine.properties\ndb.flybase.datasource.class=com.zaxxer.hikari.HikariDataSource\ndb.flybase.datasource.dataSourceClassName=org.postgresql.ds.PGSimpleDataSource\ndb.flybase.datasource.dataSourceName=db.flybase\ndb.flybase.datasource.serverName=localhost\ndb.flybase.datasource.databaseName=FB2011_01\ndb.flybase.datasource.user=USERNAME\ndb.flybase.datasource.password=SECRET\ndb.flybase.datasource.maxConnections=10\ndb.flybase.driver=org.postgresql.Driver\ndb.flybase.platform=PostgreSQL\n")),Object(o.b)("h3",{id:"gff3"},"GFF3"),Object(o.b)("p",null,"Create a gff source to load genome annotation in GFF3 format. This creates an empty ",Object(o.b)("inlineCode",{parentName:"p"},"GFF3RecordHandler")," in ",Object(o.b)("inlineCode",{parentName:"p"},"<source-name>/src/main/java/org/intermine/bio/dataconversion"),". The source will work without any changes but you can edit the ",Object(o.b)("inlineCode",{parentName:"p"},"GFF3RecordHandler")," to read specific attributes from the last column of the GFF3 file. See the InterMine tutorial and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/database/data-sources/library/gff"}),"GFF3")," for more information on integrating GFF3."),Object(o.b)("h3",{id:"fasta"},"FASTA"),Object(o.b)("p",null,"Create a fasta source to load sequence data in FASTA format. This creates an empty ",Object(o.b)("inlineCode",{parentName:"p"},"*FastaConverter.java")," file in ",Object(o.b)("inlineCode",{parentName:"p"},"<source-name>/src/main/java/org/intermine/bio/dataconversion"),". The source will work without any changes but you can edit the ",Object(o.b)("inlineCode",{parentName:"p"},"*FastaConverter.java")," to read specific attributes from the fasta file. See the InterMine tutorial and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/database/data-sources/library/fasta"}),"FASTA")," for more information on integrating FASTA."),Object(o.b)("h3",{id:"obo"},"OBO"),Object(o.b)("p",null,"Create a obo source to load ontology in OBO format."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'# an example OBO entry\n<source name="go" type="go">\n  <property name="src.data.file" location="/data/go/go.obo" version="1.2.3"/>\n</source>\n')),Object(o.b)("p",null,"You don't need to write any code to parse the OBO file, the ontology terms are created automatically."),Object(o.b)("h2",{id:"4-update-the-additions-file"},"4. Update the Additions file"),Object(o.b)("p",null,"Update the file in the ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/resources")," directory called ",Object(o.b)("inlineCode",{parentName:"p"},"new-source_additions.xml"),". This file details any extensions needed by the data model to store data from this source, everything else is automatically generated from the model description so this is all we need to do to add to the model. The file is in the same format as a complete Model description."),Object(o.b)("p",null,"To add to an existing class the contents should be similar to the example code below. The class name is a class already in the model, the attribute name is the name of the new field to be added and the type describes the type of data to be stored. In the example, the ",Object(o.b)("inlineCode",{parentName:"p"},"Protein")," class will be extended to include a new attribute called ",Object(o.b)("inlineCode",{parentName:"p"},"extraData")," which will hold data as a string."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<?xml version="1.0"?>\n<classes>\n  <class name="Protein>" is-interface="true">\n    <attribute name="extraData" type="java.lang.String"/>   \n  </class>\n</classes>\n')),Object(o.b)("p",null,"To create a new class, the ",Object(o.b)("inlineCode",{parentName:"p"},"new-source_additions.xml")," file should include contents similar to the example below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<?xml version="1.0"?>\n<classes>\n  <class name="NewFeature" extends="SequenceFeature" is-interface="true">\n    <attribute name="identifier" type="java.lang.String"/>  \n    <attribute name="confidence" type="java.lang.Double"/>\n  </class>\n</classes>\n')),Object(o.b)("p",null,"The extends clause is optional and is used to inherit ","(","include all the attributes of",")"," an existing class, in this case we extend ",Object(o.b)("inlineCode",{parentName:"p"},"SequenceFeature"),", an InterMine class that represents any genome feature. ",Object(o.b)("inlineCode",{parentName:"p"},"is-interface")," should always be set to true. The attribute lines as before define the names and types of data to be stored. A new class will be created with the name ",Object(o.b)("inlineCode",{parentName:"p"},"NewFeature")," that extends ",Object(o.b)("inlineCode",{parentName:"p"},"SequenceFeature"),"."),Object(o.b)("p",null,"To cross reference this with another class, similar XML should be used as the example below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<class name="NewFeature" extends="SequenceFeature" is-interface="true">\n  <reference name="protein" referenced-type="Protein" reverse-reference="features"/>\n</class>\n')),Object(o.b)("p",null,"In the example above, we create a link from NewFeature to the Protein class via the reference named protein. To complete the link, a reverse reference may be added to Protein to point back at the NewFeature, this is optional - the reference could be one-way. Here we define a collection called features, this means that for every NewFeature that references a Protein, that protein will include it in its features collection. Note that as this is a collection a Protein can link to multiple NewFeatures but NewFeature.protein is a reference so each can only link to one Protein."),Object(o.b)("p",null,"The reverse entry needs to be added to Protein ","(","still in the same file",")",":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<class name="Protein" is-interface="true">\n  <collection name="features"  referenced-type="NewFeature" reverse-reference="protein"/>\n</class>\n')),Object(o.b)("p",null,"The final additions XML should look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markup"}),'<?xml version="1.0"?>\n<classes>\n  <class name="Protein>" is-interface="true">\n    <attribute name="extraData" type="java.lang.String"/> \n    <collection name="features"  referenced-type="NewFeature" reverse-reference="protein"/>  \n  </class>\n  <class name="NewFeature" extends="SequenceFeature" is-interface="true">\n    <attribute name="identifier" type="java.lang.String"/>  \n    <attribute name="confidence" type="java.lang.Double"/>\n    <reference name="protein" referenced-type="Protein" reverse-reference="features"/>\n  </class>\n</classes>\n')),Object(o.b)("p",null,"If all the data you wish to load is already modelled in InterMine, then you don't need an additions file. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/data-model/model"}),"Model Description")," for details."),Object(o.b)("h3",{id:"global-additions-file"},"Global Additions File"),Object(o.b)("p",null,'If you don\'t want to create an additions file for each of your mine\'s data sources, you can also create a "global" additions file. See the "Global Additions File" section of ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/database/database-building/model-merging"}),"Model Merging")," for details on how to set this parameter."),Object(o.b)("h2",{id:"5-update-keys-file"},"5. Update Keys file"),Object(o.b)("p",null,"Within the ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/resources")," directory is a file called ",Object(o.b)("inlineCode",{parentName:"p"},"new-source_keys.properties"),". Here we can define primary keys that will be used to integrate data from this source with any exiting objects in the database. We want to integrate genes by their ",Object(o.b)("inlineCode",{parentName:"p"},"primaryIdentifier")," attribute so we define that this source should use the key:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"# new-source_keys.properties\nGene.key_primaryidentifier=primaryIdentifier\n")),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/im-docs/docs/database/database-building/model-merging"}),"Model Merging")),Object(o.b)("h2",{id:"6-build-your-jar-and-put-on-the-classpath"},"6. Build your JAR and put on the classpath"),Object(o.b)("p",null,"Now your code is ready, compile it, build a JAR and put on the classpath with this command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"./gradlew install\n")),Object(o.b)("p",null,'See the "Version" section above for how to properly version your JAR.'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),"\nThis JAR is now on your classpath. If you make changes, you will want to run this command again."),Object(o.b)("h2",{id:"7-run-a-build-and-load-your-data"},"7. Run a build and load your data!"),Object(o.b)("p",null,"Once you've updated the config files, and written your parser ","(","if necessary",")",", create the database as usual. The source should now be included when building the mine."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"./gradlew builddb\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),"\nRun the ",Object(o.b)("inlineCode",{parentName:"p"},"clean")," task before ",Object(o.b)("inlineCode",{parentName:"p"},"builddb")," when changing the model. ",Object(o.b)("inlineCode",{parentName:"p"},"clean")," removes the ",Object(o.b)("inlineCode",{parentName:"p"},"build")," directory which is the location of the data model. If you don't, you won't see your new data model changes!"),Object(o.b)("p",null,"It's also recommended that you write a unit test for your source. It saves time!"))}b.isMDXComponent=!0},702:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(a),p=r,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return a?n.a.createElement(m,s(s({ref:t},l),{},{components:a})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);