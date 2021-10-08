---
title: '<xsl:choose>'
slug: Web/XSLT/Element/choose
tags:
  - Element
  - Reference
  - XSLT
  - choose
---
<p>{{ XsltRef() }}</p>

<p>The <code>&lt;xsl:choose&gt;</code> element defines a choice among a number of alternatives. It behaves like a switch statement in procedural languages.</p>

<h3 id="Syntax">Syntax</h3>

<pre>&lt;xsl:choose&gt;
    &lt;xsl:when test="[whatever to test1]"&gt;&lt;/xsl:when&gt;
    &lt;xsl:when test="[whatever to test2]"&gt;&lt;/xsl:when&gt;
    &lt;xsl:otherwise&gt;&lt;/xsl:otherwise&gt; [optional]
&lt;/xsl:choose&gt;</pre>

<h3 id="Required_Attributes">Required Attributes</h3>

<p>None.</p>

<h3 id="Optional_Attributes">Optional Attributes</h3>

<p>None.</p>

<h3 id="Type">Type</h3>

<p>Instruction, appears with a template. It contains one or more <code>&lt;xsl:when&gt;</code> elements, and, optionally, a final <code>&lt;xsl:otherwise&gt;</code> element.</p>

<h3 id="Defined">Defined</h3>

<p>XSLT, section 9.2.</p>

<h3 id="Gecko_support">Gecko support</h3>

<p>Supported.</p>
