---
title: Transforming with XSLT
slug: Web/API/Document_Object_Model/Transforming_with_XSLT
page-type: guide
---

{{DefaultAPISidebar("DOM")}}

One noticeable trend in W3C standards has been the effort to separate content from style. This would allow the same style to be reused for multiple content, as well as simplify maintenance and allow a quick (only modify one file) way to change the look of content.

CSS (Cascade Style Sheets) was one of the first ways proposed by the W3C. CSS is a way to apply style rules to a web document. These style rules define how the document (the content) should be laid out. However, it has several limitations, such as lack of programming structures and ability to create complex layout models. CSS also has limited support for changing the position of an element.

XSL (Extensible Stylesheet Language) Transformations are composed of two parts: XSL elements, which allow the transformation of an XML tree into another markup tree and XPath, a selection language for trees. XSLT takes an XML document (the content) and creates a brand new document based on the rules in the XSL stylesheet. This allows XSLT to add, remove and reorganize elements from the original XML document and thus allows more fine-grain control of the resulting document's structure.

Transformations in XSLT are based on rules that consist of templates. Each template matches (using XPath) a certain fragment of the input XML document and then applies the substitution part on that fragment to create the new resulting document.

## Basic example

This first example demonstrates the basics of setting up an XSLT transformation in a browser.
The example takes an XML document that contains information about an article (title, list of authors and body text) and presents it in a human-readable form.

The XML document (**example.xml**) is shown below.

```xml
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="example.xsl"?>
<Article>
  <Title>My Article</Title>
  <Authors>
    <Author>Mr. Foo</Author>
    <Author>Mr. Bar</Author>
  </Authors>
  <Body>This is my article text.</Body>
</Article>
```

The `?xml-stylesheet` processing instruction in the XML file specifies the XSLT stylesheet to apply in its `href` attribute.

This XSL stylesheet file (**example.xsl**) is shown below:

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="text"/>

  <xsl:template match="/">
    Article - <xsl:value-of select="/Article/Title"/>
    Authors: <xsl:apply-templates select="/Article/Authors/Author"/>
  </xsl:template>

  <xsl:template match="Author">
    - <xsl:value-of select="." />
  </xsl:template>

</xsl:stylesheet>
```

An XSLT stylesheet starts with the `xsl:stylesheet` element, which contains all the _templates_ used to create the final output.
The example above has two templates - one that matches the root node and one that matches `Author` nodes.
The template that matches the root node outputs the article's title and then says to process all templates (via `apply-templates`) that match `Author` nodes which are children of the `Authors` node.

To try out the example:

1. Create a directory in your file system and inside it create the files `example.xml` and `example.xsl` listed above
2. [Start a local server](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server) in the directory containing the files.
   This allows you to browse the files in the directory as though they were hosted on the internet.

   > [!WARNING]
   > Opening the XML file directly from the file system will not work, because loading the stylesheet from the file system is a [cross-origin request](/en-US/docs/Web/HTTP/CORS), and will be disallowed by default.
   > Hosting the XML and stylesheet on the same local server ensures that they have the same origin.

3. Open **example.xml** from the browser.
4. The browser output is then as shown below:

   ```plain
   Browser Output :

       Article - My Article
       Authors:
       - Mr. Foo
       - Mr. Bar
   ```

## Generating HTML

One common application of XSLT in the browser is transforming XML into HTML on the client. This example will transform the input document (example2.xml), which contains information about an article, into an HTML document.

The `<body>` element of the article now contains HTML elements (a `<b>` and `<u>` tag). The XML document contains both HTML elements and XML elements, but only one namespace is needed, namely for the XML elements. Since there is no HTML namespace, and using the XHTML namespace would force the XSL to create an XML document that would not behave like an HTML document, the `xsl:output` in the XSL Stylesheet will make sure the resulting document will be handled as HTML. For the XML elements, our own namespace is needed, `http://devedge.netscape.com/2002/de`, and it is given the prefix myNS `(xmlns:myNS="http://devedge.netscape.com/2002/de")`.

### XML file

```xml
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="example2.xsl"?>
  <myNS:Article xmlns:myNS="http://devedge.netscape.com/2002/de">
    <myNS:Title>My Article</myNS:Title>
    <myNS:Authors>
      <myNS:Author company="Foopy Corp.">Mr. Foo</myNS:Author>
      <myNS:Author>Mr. Bar</myNS:Author>
    </myNS:Authors>
    <myNS:Body>
      The <b>rain</b> in <u>Spain</u> stays mainly in the plains.
    </myNS:Body>
  </myNS:Article>
```

The XSL Stylesheet used will need to have two namespaces - one for the XSLT elements and one for our own XML elements used in the XML document. The output of the XSL Stylesheet is set to `HTML` by using the `xsl:output` element. By setting the output to be HTML and not having a namespace on the resulting elements (colored in blue), those elements will be treated as HTML elements.

### XSL stylesheet with 2 namespaces

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html"/>
  …
</xsl:stylesheet version="1.0">
```

A template matching the root node of the XML document is created and used to create the basic structure of the HTML page.

### Creating the basic HTML document

```xml
…
<xsl:template match="/">
<html>

  <head>

    <title>
      <xsl:value-of select="/myNS:Article/myNS:Title"/>
    </title>

    <style>
      .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
    </style>

  </head>

  <body>
    <p class="myBox">
      <span class="title">
        <xsl:value-of select="/myNS:Article/myNS:Title"/>
      </span> </br>

      Authors:   <br />
        <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
    </p>

    <p class="myBox">
      <xsl:apply-templates select="//myNS:Body"/>
    </p>

  </body>

</html>
</xsl:template>
…
```

Three more `xsl:template`'s are needed to complete the example. The first `xsl:template` is used for the author nodes, while the second one processes the body node. The third template has a general matching rule which will match any node and any attribute. It is needed in order to preserve the HTML elements in the XML document, since it matches all of them and copies them out into the HTML document the transformation creates.

### Final 3 templates

```xml
…
<xsl:template match="myNS:Author">
    --   <xsl:value-of select="." />

  <xsl:if test="@company">
    ::   <b>  <xsl:value-of select="@company" />  </b>
  </xsl:if>

  <br />
</xsl:template>
```

```xml
<xsl:template match="myNS:Body">
  <xsl:copy>
    <xsl:apply-templates select="@*|node()"/>
  </xsl:copy>
</xsl:template>

<xsl:template match="@*|node()">
  <xsl:copy>
    <xsl:apply-templates select="@*|node()"/>
  </xsl:copy>
</xsl:template>
…
```

The final XSLT stylesheet looks as follows:

### Final XSLT stylesheet

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html" />

  <xsl:template match="/">
    <html>

      <head>

        <title>
          <xsl:value-of select="/myNS:Article/myNS:Title"/>
        </title>

        <style>
          .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
        </style>

      </head>

      <body>
        <p class="myBox">
          <span class="title">
            <xsl:value-of select="/myNS:Article/myNS:Title"/>
          </span> <br />

          Authors:   <br />
            <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
          </p>

        <p class="myBox">
          <xsl:apply-templates select="//myNS:Body"/>
        </p>

      </body>

    </html>
  </xsl:template>

  <xsl:template match="myNS:Author">
      --   <xsl:value-of select="." />

    <xsl:if test="@company">
      ::   <b>  <xsl:value-of select="@company" />  </b>
    </xsl:if>

    <br />
  </xsl:template>

  <xsl:template match="myNS:Body">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="@*|node()">
      <xsl:copy>
        <xsl:apply-templates select="@*|node()"/>
      </xsl:copy>
  </xsl:template>
</xsl:stylesheet>
```
