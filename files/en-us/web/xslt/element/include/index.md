---
title: '<xsl:include>'
slug: Web/XSLT/Element/include
tags:
  - Element
  - Reference
  - XSLT
  - include
---
<p>{{ XsltRef() }}</p>

<p>The <code>&lt;xsl:include&gt;</code> element merges the contents of one stylesheet with another. Unlike the case of <code>&lt;xsl:import&gt;</code>, the contents of an included stylesheet have exactly the same precedence as the contents of the including stylesheet.</p>

<h3 id="Syntax">Syntax</h3>

<pre>&lt;xsl:include href=URI /&gt;</pre>

<h3 id="Required_Attributes">Required Attributes</h3>

<dl>
 <dt><code>href</code></dt>
 <dd>Specifies the URI of the stylesheet to include.</dd>
</dl>

<h3 id="Optional_Attributes">Optional Attributes</h3>

<p>None.</p>

<h3 id="Type">Type</h3>

<p>Top-level, may appear in any order as a child of <code>&lt;xsl:stylesheet&gt;</code> or <code>&lt;xsl:transform&gt;</code>.</p>

<h3 id="Defined">Defined</h3>

<p>XSLT, section 2.6.1.</p>

<h3 id="Gecko_support">Gecko support</h3>

<p>Supported.</p>
