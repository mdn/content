---
title: '<xsl:apply-templates>'
slug: Web/XSLT/Element/apply-templates
tags:
  - Element
  - Reference
  - XSLT
  - apply-templates
---
<p>{{ XsltRef() }}</p>

<p>The <code>&lt;xsl:apply-templates&gt;</code> element selects a set of nodes in the input tree and instructs the processor to apply the proper templates to them.</p>

<h3 id="Syntax">Syntax</h3>

<pre>&lt;xsl:apply-templates select=EXPRESSION mode=NAME&gt;
	&lt;xsl:with-param&gt; [optional]
	&lt;xsl:sort&gt; [optional]
&lt;/xsl:apply-templates&gt;</pre>

<h3 id="Required_Attributes">Required Attributes</h3>

<p>None.</p>

<h3 id="Optional_Attributes">Optional Attributes</h3>

<dl>
 <dt><code>select</code></dt>
 <dd>Uses an XPath expression that specifies the nodes to be processed. An asterisk(<code>*</code>) selects the entire node-set. If this attribute is not set, all child nodes of the current node are selected.</dd>
 <dt><code>mode</code></dt>
 <dd>If there are multiple ways of processing defined for the same node, distinguishes among them.</dd>
</dl>

<h3 id="Type">Type</h3>

<p>Instruction, appears within a template.</p>

<h3 id="Defined">Defined</h3>

<p>XSLT section 5.4.</p>

<h3 id="Gecko_support">Gecko support</h3>

<p>Supported.</p>
