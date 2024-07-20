---
title: XSLT Basic Example
slug: Web/API/XSLTProcessor/Basic_Example
page-type: guide
---

{{APIRef("XSLT")}}

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
2. [Start a local server](/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server) in the directory containing the files.
   This allows you to browse the files in the directory as though they were hosted on the internet.

   > **Warning:** Opening the XML file directly from the file system will not work, because loading the stylesheet from the file system is a [cross-origin request](/en-US/docs/Web/HTTP/CORS), and will be disallowed by default.
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
