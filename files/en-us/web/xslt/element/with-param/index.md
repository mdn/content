---
title: '<xsl:with-param>'
slug: Web/XSLT/Element/with-param
tags:
  - Element
  - Reference
  - XSLT
  - with-param
---
<p>{{ XsltRef() }}</p>

<p>The <code>&lt;xsl:with-param&gt;</code> element sets the value of a parameter to be passed into a template.</p>

<h3 id="Syntax">Syntax</h3>

<pre>&lt;xsl:with-param name=NAME select=EXPRESSION&gt;
	TEMPLATE
&lt;/xsl:with-param&gt;</pre>

<h3 id="Required_Attributes">Required Attributes</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>Gives this parameter a name.</dd>
</dl>

<h3 id="Optional_Attributes">Optional Attributes</h3>

<dl>
 <dt><code>select</code></dt>
 <dd>Defines the value of the parameter through an XPath expression. If the element contains a template, this attribute is ignored.</dd>
</dl>

<h3 id="Type">Type</h3>

<p>Subinstruction, always appears within an <code>&lt;xsl:apply-templates&gt;</code> or an <code>&lt;xsl:call-template&gt;</code> element.</p>

<h3 id="Defined">Defined</h3>

<p>XSLT 11.6</p>

<h3 id="Gecko_support">Gecko support</h3>

<p>Supported.</p>
