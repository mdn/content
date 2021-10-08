---
title: '<xsl:sort>'
slug: Web/XSLT/Element/sort
tags:
  - Element
  - Reference
  - XSLT
  - sort
---
<p>{{ XsltRef() }}</p>

<p>The<code> &lt;xsl:sort&gt;</code> element defines a sort key for nodes selected by <code>&lt;xsl:apply-templates&gt;</code> or <code>&lt;xsl:for-each&gt;</code> and determines the order in which they are processed.</p>

<h3 id="Syntax">Syntax</h3>

<pre>&lt;xsl:sort
	select=EXPRESSION
	order="ascending" | "descending"
	case-order="upper-first" | "lower-first"
	lang=XML:LANG-CODE
	data-type="text" | "number" /&gt; </pre>

<h3 id="Required_Attributes">Required Attributes</h3>

<p>None.</p>

<h3 id="Optional_Attributes">Optional Attributes</h3>

<dl>
 <dt><code>select</code></dt>
 <dd>Uses an XPath expression to specify the nodes to be sorted.</dd>
 <dt><code>order</code></dt>
 <dd>Specifies whether the nodes should be processed in "<code>ascending</code>" or "<code>descending</code>" order. The default is "<code>ascending</code>".</dd>
 <dt><code>case-order</code></dt>
 <dd>Indicates whether upper- or lowercase letters are to be ordered first. The allowable values are "<code>upper-first</code>" and "<code>lower-first</code>".</dd>
 <dt><code>lang</code></dt>
 <dd>Specifies which language is to be used by the sort.</dd>
 <dt><code>data-type</code></dt>
 <dd>Defines whether items are to be ordered alphabetically or numerically. The allowable values are "<code>text</code>" and "<code>number</code>" with "<code>text</code>" being the default.</dd>
</dl>

<h3 id="Type">Type</h3>

<p>Subinstruction, always appears as a child of &lt;xsl:for-each&gt;, where it must appear before the template proper or of &lt;xsl:apply-templates&gt;.</p>

<h3 id="Defined">Defined</h3>

<p>XSLT, section10.</p>

<h3 id="Gecko_support">Gecko support</h3>

<p>Supported.</p>
