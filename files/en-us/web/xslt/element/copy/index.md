---
title: '<xsl:copy>'
slug: Web/XSLT/Element/copy
tags:
  - Element
  - Reference
  - XSLT
  - copy
---
<p>{{ XsltRef() }}</p>

<p>The <code>&lt;xsl:copy&gt;</code> element transfers a shallow copy (the node and any associated namespace node) of the current node to the output document. It does not copy any children or attributes of the current node.</p>

<h3 id="Syntax">Syntax</h3>

<pre>&lt;xsl:copy use-attribute-sets=LIST-OF-NAMES&gt;
	TEMPLATE
&lt;/xsl:copy&gt;</pre>

<h3 id="Required_Attributes">Required Attributes</h3>

<p>None.</p>

<h3 id="Optional_Attributes">Optional Attributes</h3>

<dl>
 <dt><code>use-attribute-sets</code></dt>
 <dd>Lists attribute sets that should be applied to the output node, if it is an element. Names of the sets should be separated with whitespace characters.</dd>
</dl>

<h3 id="Type">Type</h3>

<p>Instruction, appears within a template.</p>

<h3 id="Defined">Defined</h3>

<p>XSLT, section 7.5.</p>

<h3 id="Gecko_support">Gecko support</h3>

<p>Supported.</p>
