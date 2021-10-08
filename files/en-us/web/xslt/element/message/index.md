---
title: '<xsl:message>'
slug: Web/XSLT/Element/message
tags:
  - Element
  - Reference
  - XSLT
  - message
---
<p>{{ XsltRef() }}</p>

<p>The <code>&lt;xsl:message&gt;</code> element outputs a message (to the JavaScript Console in NS) and optionally terminates execution of the stylesheet. It can be useful for debugging.</p>

<h3 id="Syntax">Syntax</h3>

<pre>&lt;xsl:message terminate="yes" | "no" &gt;
	TEMPLATE
&lt;/xsl:message&gt;</pre>

<h3 id="Required_Attributes">Required Attributes</h3>

<p>None.</p>

<h3 id="Optional_Attributes">Optional Attributes</h3>

<dl>
 <dt><code>terminate</code></dt>
 <dd>Set to "<code>yes</code>", indicates that execution should be terminated. The default value is "<code>no</code>", in which case the message is output and execution continues.</dd>
</dl>

<h3 id="Type">Type</h3>

<p>Instruction, appears within a template.</p>

<h3 id="Defined">Defined</h3>

<p>XSLT, section 13.</p>

<h3 id="Gecko_support">Gecko support</h3>

<p>Supported.</p>
