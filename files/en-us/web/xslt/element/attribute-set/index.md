---
title: '<xsl:attribute-set>'
slug: Web/XSLT/Element/attribute-set
tags:
  - Element
  - Reference
  - XSLT
  - attribute-set
---
<p>{{ XsltRef() }}</p>

<p>The <code>&lt;xsl:attribute-set&gt;</code> element creates a named set of attributes, which can then be applied as whole to the output document, in a manner similar to named styles in CSS.</p>

<h3 id="Syntax">Syntax</h3>

<pre>&lt;xsl:attribute-set name=NAME use-attribute-sets=LIST-OF-NAMES&gt;
	&lt;xsl:attribute&gt;
&lt;/xsl:attribute-set&gt;</pre>

<h3 id="Required_Attributes">Required Attributes</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>Specifies the name of the attribute set. The name must be a valid QName.</dd>
</dl>

<h3 id="Optional_Attributes">Optional Attributes</h3>

<dl>
 <dt><code>use-attribute-sets</code></dt>
 <dd>Builds an attribute set from other attribute sets. The names of the contributing sets must be separated with whitespace characters and must not directly or indirectly embed themselves.</dd>
</dl>

<h3 id="Type">Type</h3>

<p>Top-level, must be the child of <code>&lt;xsl:stylesheet&gt;</code> or <code>&lt;xsl:transform&gt;</code>.</p>

<h3 id="Defined">Defined</h3>

<p>XSLT, section 7.1.4.</p>

<h3 id="Gecko_support">Gecko support</h3>

<p>Supported.</p>
