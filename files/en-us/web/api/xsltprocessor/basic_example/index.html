---
title: XSLT Basic Example
slug: Web/API/XSLTProcessor/Basic_Example
tags:
  - XSLT
---
<h2 id="Basic_Example">Basic Example</h2>

<p>This first example demonstrates the basics of setting up an XSLT transformation in a browser. The example will take an XML document that contains information (title, list of authors and body text) about an article and present it in an human readable form.</p>
<p>Figure 1 shows the source of the basic XSLT example. The XML document (example.xml) contains the information about the article. Using the <code>?xml-stylesheet?</code> processing instruction, it links to the XSLT stylesheet (example.xsl) via its href attribute.</p>
<p>An XSLT stylesheet starts with the <code>xsl:stylesheet</code> element, which contains all the templates used to create the final output. The example in Figure 1 has two templates - one that matches the root node and one that matches Author nodes. The template that matches the root node outputs the article's title and then says to process all templates (via <code>apply-templates</code>) that match Author nodes which are children of the Authors node.</p>

<p>Figure 1 : Simple XSLT Example</p>
<p>XML Document (example.xml) :</p>

<pre class="brush:xml">&lt;?xml version="1.0"?&gt;
&lt;?xml-stylesheet type="text/xsl" href="example.xsl"?&gt;
&lt;Article&gt;
  &lt;Title&gt;My Article&lt;/Title&gt;
  &lt;Authors&gt;
    &lt;Author&gt;Mr. Foo&lt;/Author&gt;
    &lt;Author&gt;Mr. Bar&lt;/Author&gt;
  &lt;/Authors&gt;
  &lt;Body&gt;This is my article text.&lt;/Body&gt;
&lt;/Article&gt;</pre>

<p>XSL Stylesheet (example.xsl) :</p>

<pre class="brush:xml">&lt;?xml version="1.0"?&gt;
&lt;xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"&gt;

  &lt;xsl:output method="text"/&gt;

  &lt;xsl:template match="/"&gt;
    Article - &lt;xsl:value-of select="/Article/Title"/&gt;
    Authors: &lt;xsl:apply-templates select="/Article/Authors/Author"/&gt;
  &lt;/xsl:template&gt;

  &lt;xsl:template match="Author"&gt;
    - &lt;xsl:value-of select="." /&gt;
  &lt;/xsl:template&gt;

&lt;/xsl:stylesheet&gt;</pre>

<p>Browser Output :</p>

<pre>Article - My Article
Authors:
- Mr. Foo
- Mr. Bar</pre>
