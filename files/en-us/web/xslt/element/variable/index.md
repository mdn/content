---
title: '<xsl:variable>'
slug: Web/XSLT/Element/variable
tags:
  - Element
  - Reference
  - XSLT
  - variable
---
<p>{{ XsltRef() }}</p>

<p>The <code>&lt;xsl:variable&gt;</code> element declares a global or local variable in a stylesheet and gives it a value. Because XSLT permits no side-effects, once the value of the variable has been established, it remains the same until the variable goes out of scope</p>

<h3 id="Syntax">Syntax</h3>

<pre>&lt;xsl:variable name=NAME select=EXPRESSION &gt;
	TEMPLATE
&lt;/xsl:variable&gt; </pre>

<h3 id="Required_Attributes">Required Attributes</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>Gives the variable a name.</dd>
</dl>

<h3 id="Optional_Attributes">Optional Attributes</h3>

<dl>
 <dt><code>select</code></dt>
 <dd>Defines the value of the variable through an XPath expression. If the element contains a template, this attribute is ignored.</dd>
</dl>

<h3 id="Type">Type</h3>

<p>Top-level or instruction. If it occurs as a top-level element, the variable is global in scope, and can be accessed throughout the document. If it occurs within a template, the variable is local in scope, accessible only within the template in which it appears.</p>

<h3 id="Defined">Defined</h3>

<p>XSLT, section 11.</p>

<h3 id="Gecko_support">Gecko support</h3>

<p>Supported.</p>
