---
title: Transforming XML with XSLT
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
page-type: guide
sidebar: xmlsidebar
---

The separation of content and presentation is a key design feature of [XML](/en-US/docs/Web/XML). The structure of an XML document is designed to reflect and clarify important relationships among the individual aspects of the content itself, unhindered by a need to provide any indication about how this data should eventually be presented. This intelligent structuring is particularly important as more and more data transfers are automated and take place between highly heterogeneous machines linked by a network.

Yet eventually much of the content stored in XML documents will need to be presented to human readers. Because a browser provides a familiar and highly flexible interface, it is an ideal mechanism for delivering such presentation versions of XML content. Built from the ground up utilizing a wide variety of XML technologies, Firefox incorporates within itself all of the mechanisms needed to process both original XML documents and the specialized stylesheets used to style and lay them out for HTML display, reducing server load with client-side processing.

At present, Gecko (the layout engine behind Firefox) supports two forms of XML stylesheets. For basic control of appearance — fonts, colors, position, and so forth — Gecko uses [CSS](/en-US/docs/Web/CSS).

Our focus here is on the second type of stylesheet that Gecko supports: the XSLT stylesheet. XSLT stands for eXtensible Stylesheet Language/Transform and the name is apt. XSLT allows a stylesheet author to transform a primary XML document in two significant ways: manipulating and sorting the content, including a wholesale reordering of it if so desired, and transforming the content into a different format (and in the case of Firefox, the focus is on converting it on the fly into HTML which can then be displayed by the browser).

## What is XSLT?

The eXtensible Stylesheet Language/Transform is a very powerful language, and a complete discussion of it is well beyond the scope of this article, but a brief discussion of some basic concepts will be helpful in understanding the description of Netscape's capabilities that follows.

An XSLT stylesheet is an XML document. Unlike CSS, which has its own specialized syntax, an XSLT stylesheet is an XML document, which must conform to all XML rules, including well-formedness. So the model for transformation is that one XML document is used to transform another XML document.

An XSLT stylesheet is marked as such by the inclusion of a standard XSLT heading. The outermost element in an XSLT stylesheet must be the `<xsl:stylesheet>` element (an acceptable alternate is the `<xsl:transform>` element). This element will include at least one namespace declaration and the mandatory version attribute. Other namespaces and three optional attributes may also be included.

## The XSLT namespace

The mandatory namespace for XSLT is `"http://www.w3.org/1999/XSL/Transform"`. Namespaces are the subject of a fair amount of confusion in XML. Despite the fact that very often namespaces appear to be URIs, they do not, in fact, refer to a resource located at that address. Instead they are a way of specifying a unique identifier for a known set of elements. The string `"http://www.w3.org/1999/XSL/Transform"` is a constant that designates the elements so marked as belonging to the set of tags designated by the W3C in the 1999 XSLT Recommendation. Another string that is occasionally seen in stylesheets, `"http://www.w3.org/TR/WD-xsl"`, indicates compliance with an earlier working draft (hence the WD) of the W3C document. This latter namespace is not compatible with the one that the W3C eventually adopted and is not supported by Netscape.

Because typing `"http://www.w3.org/1999/XSL/Transform"` repeatedly would be tedious and would render the markup difficult to read, there is a standard mechanism for assigning a shorthand name to the namespace in the stylesheet heading. Thus a full example of the opening stylesheet element might look like this.

```xml
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
```

The `xmlns` pseudo-attribute maps the shorthand name `xsl` onto the full namespace for use throughout the document that follows. Thus the stylesheet element above is prefixed with `xsl:`. Although `xsl` is the conventionally used shorthand name (called the prefix), it is not mandatory and it is quite possible to choose a different one. The examples in this article all assume the use of the `xsl` prefix.

## How XSLT processes XML trees

The XSLT transformation engine, called the processor, does not work directly on documents. Before transformation can take place, the primary XML document(s) and the stylesheet document(s) must be run through a parser, which creates an abstract representation of the structure of the document in memory. This representation, called the tree, is what is actually manipulated by the processor. The tree is an abstract datatype, a conceptual model which can be implemented in various ways depending on the parser and the processor. :Netscape's uses a structure similar to the W3C DOM as its tree structure, but others are possible. The only requirements concern the disposition of objects in the tree, their properties, and their relationships.

The tree consists of a hierarchical framework of nodes. It can be made up of seven different types of nodes: the single root node, element nodes, text nodes, attribute nodes, comment nodes, processing instruction nodes, and namespace nodes.

At the top of the tree is the root node. The root node does not correspond to any individual part of the XML document: it represents the document as whole. Below the root node are its children, which can be elements, comments, processing instructions and so on. Some of those children may also have children. And this can continue for several levels. There are certain constraints on which type of nodes can occur where: for example, text nodes can have no children.

The result of the processor's action is also a tree. Netscape uses this tree to render the contents in the browser window.

## XPath and node selection

In essence, an XSLT stylesheet is a set of rules, called templates, which declare that any node that matches this specific pattern should be manipulated in this specific way and end up in this specific position in the result tree. The particulars of how this is to be accomplished are left up to the processor. Because the order of execution of the stylesheet cannot be guaranteed, XSLT does not support any functionality that produces side-effects. In this it is like Lisp or Scheme.

Transformations depend on the processor's being able to pinpoint individual nodes on the tree. To facilitate this, the W3C decided to use a separate language, XPath, which also has uses outside the XSLT context. As its name implies, XPath defines a "path" the processor must take through the tree to arrive at the desired node. This path consists of XPath-specific expressions to be evaluated, expressions which may include a number of conditions to be matched, a way of associating nodes, and/or an indication of directionality within the tree. A fuller description of the parts of XPath most commonly used in XSLT follows in the reference section.

Potential conflicts in template matching are resolved by using a set of cascading precedence rules. In general, a more specific template rule takes precedence over a less specific one and, other things being equal, a template rule that appears later in the document takes precedence over one that appears earlier.

Stylesheets can be attached to an XML document via a processing instruction. To indicate which XSLT stylesheet should be used to process a particular XML document, include a processing instruction in the XML document itself. For example, if the stylesheet is called inventory.xsl and resides in the same directory as the XML document, the processing instruction in the XML document would look like this:

```xml
<?xml-stylesheet type="text/xml" href="inventory.xsl"?>
```

This must be placed in the prolog section of the XML document.

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
   > Opening the XML file directly from the file system will not work, because loading the stylesheet from the file system is a [cross-origin request](/en-US/docs/Web/HTTP/Guides/CORS), and will be disallowed by default.
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

## XSLT/XPath reference

- [Elements](/en-US/docs/Web/XML/XSLT/Reference/Element)
- [Axes](/en-US/docs/Web/XML/XPath/Reference/Axes)
- [Functions](/en-US/docs/Web/XML/XPath/Reference/Functions)

## For further reading

### Books

- **XSLT: Programmer's Reference, Second Edition**
  - **Author**: Michael H. Kay
  - **Length**: 992 pages
  - **Publisher**: Wrox; 2 edition (May 3, 2001)
  - **ISBN**: 0764543814
    - Michael Kay is a member of the W3C XSL Working Group and the developer of his own open-source XSLT processor, Saxon. He is also the author of the only book on this subject to have reached a second edition. This is a very big book, well laid out, and exhaustive, if sometimes exhausting, in detail, covering every possible base in the XSLT story.

<https://www.amazon.com/XSLT-Programmers-Reference-Programmer/dp/0764543814>

- **XSLT**
  - **Author**: Doug Tidwell
  - **Length**: 473 pages
  - **Publisher**: O'Reilly Media; 1 edition (August 15, 2001)
  - **ISBN**: 0596000537
    - Doug Tidwell is a senior developer at IBM and a prominent evangelist for XML technologies generally. He is the author of several articles and tutorials on various aspects of XML at IBM's extensive XML developer site. This book is somewhat less comprehensive than Michael Kay's, but it covers the basics well, and offers some intriguing examples.

<https://www.amazon.com/Xslt-Doug-Tidwell/dp/0596000537>

- **Learning XML, Second Edition**
  - **Author**: Erik T. Ray
  - **Length**: 432 pages
  - **Publisher**: O'Reilly Media; 2 edition (September 22, 2003)
  - **ISBN**: 0596004206
    - As the title indicates, this is an overview of XML generally. Chapter 6 is devoted specifically to XSLT.

<https://www.amazon.com/gp/product/0596004206>

### Specifications

- **The main XSL page**: <https://www.w3.org/Style/XSL/>
- **XSLT specifications overview**: <https://www.w3.org/TR/xslt/>
- **Archive of public style (CSS and XSLT) discussions**: [https://lists.w3.org/Archives/Public/www-style/](https://lists.w3.org/Archives/Public/www-style/)
- **XPath specifications overview**: <https://www.w3.org/TR/xpath/>

### Articles

- [XSL Transformations](https://www.ibiblio.org/xml/books/bible3/chapters/ch15.html) by Elliotte Rusty Harold
- [What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/index.html) by G. Ken Holman

### Tutorials/Examples

- [Jeni's XSLT Pages](https://www.jenitennison.com/xslt/)
- [XMLPitstop.com](https://web.archive.org/web/20211209064736/https://www.xmlpitstop.com/default_datatype_SSC.html)
- [XPath Tutorial](https://zvon.org/xxl/XPathTutorial/General/examples.html) by Miloslav Nic, Jiri Jirat
- [XSL Tutorial](https://nwalsh.com/docs/tutorials/xsl/) by Paul Grosso, Norman Walsh
- [XSLT Tutorial](https://zvon.org/xxl/XSLTutorial/Books/Book1/index.html) by Miloslav Nic
