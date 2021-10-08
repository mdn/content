---
title: '<xsl:namespace-alias>'
slug: Web/XSLT/Element/namespace-alias
tags:
  - Element
  - Reference
  - XSLT
  - namespace-alias
---
<p>{{ XsltRef() }}</p>

<p>The <code>&lt;xsl:namespace-alias&gt;</code> element is a rarely used device that maps a namespace in the stylesheet to a different namespace in the output tree. The most common use for this element is in generating a stylesheet from another stylesheet. To prevent a normally <code>xsl:</code>-prefixed literal result element (which should be copied as-is to the result tree) from being misunderstood by the processor, it is assigned a temporary namespace which is appropriately re-converted back to the XSLT namespace in the output tree.</p>

<h3 id="Syntax">Syntax</h3>

<pre>&lt;xsl:namespace-alias stylesheet-prefix=NAME result-prefix=NAME /&gt;</pre>

<h3 id="Required_Attributes">Required Attributes</h3>

<dl>
 <dt><code>stylesheet-prefix</code></dt>
 <dd>Specifies the temporary namespace.</dd>
 <dt><code>result-prefix</code></dt>
 <dd>Specifies the desired namespace for the output tree.</dd>
</dl>

<h3 id="Optional_Attributes">Optional Attributes</h3>

<p>None.</p>

<h3 id="Type">Type</h3>

<p>Top-level, must be the child of <code>&lt;xsl:stylesheet&gt;</code> or <code>&lt;xsl:transform&gt;</code>.</p>

<h3 id="Defined">Defined</h3>

<p>XSLT, section 7.1.1</p>

<h3 id="Gecko_support">Gecko support</h3>

<p>Not supported at this time.</p>
