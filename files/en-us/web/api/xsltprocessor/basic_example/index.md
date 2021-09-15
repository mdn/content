---
title: XSLT Basic Example
slug: Web/API/XSLTProcessor/Basic_Example
tags:
  - XSLT
---
## Basic Example

This first example demonstrates the basics of setting up an XSLT transformation in a browser. The example will take an XML document that contains information (title, list of authors and body text) about an article and present it in an human readable form.

Figure 1 shows the source of the basic XSLT example. The XML document (example.xml) contains the information about the article. Using the `?xml-stylesheet?` processing instruction, it links to the XSLT stylesheet (example.xsl) via its href attribute.

An XSLT stylesheet starts with the `xsl:stylesheet` element, which contains all the templates used to create the final output. The example in Figure 1 has two templates - one that matches the root node and one that matches Author nodes. The template that matches the root node outputs the article's title and then says to process all templates (via `apply-templates`) that match Author nodes which are children of the Authors node.

Figure 1 : Simple XSLT Example

XML Document (example.xml) :

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

XSL Stylesheet (example.xsl) :

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

Browser Output :

    Article - My Article
    Authors:
    - Mr. Foo
    - Mr. Bar
