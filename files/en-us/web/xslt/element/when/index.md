---
title: '<xsl:when>'
slug: Web/XSLT/Element/when
tags:
  - Element
  - Reference
  - XSLT
  - when
---
<p>{{ XsltRef() }}</p>

<p>The <code>&lt;xsl:when&gt;</code> element always appears within an <code>&lt;xsl:choose&gt;</code> element, acting like a case statement.</p>

<h3 id="Syntax">Syntax</h3>

<pre>&lt;xsl:when test=EXPRESSION&gt;
	TEMPLATE
&lt;/xsl:when&gt;</pre>

<h3 id="Required_Attributes">Required Attributes</h3>

<dl>
 <dt><code>test</code></dt>
 <dd>Specifies a boolean expression to be evaluated. If true, the contents of the element are processed; if false, they are ignored.</dd>
</dl>

<h3 id="Optional_Attributes">Optional Attributes</h3>

<p>None.</p>

<h3 id="Type">Type</h3>

<p>Subinstruction, always appears within an <code>&lt;xsl:choose&gt;</code> element.</p>

<h3 id="Defined">Defined</h3>

<p>XSLT, section 9.2.</p>

<h3 id="Gecko_support">Gecko support</h3>

<p>Supported.</p>
