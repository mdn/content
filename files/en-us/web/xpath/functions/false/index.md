---
title: 'false'
slug: Web/XPath/Functions/false
tags:
  - XSLT
  - XSLT_Reference
---
<p>{{ XsltRef() }}</p>

<p><br>
 The <code>false</code> function returns boolean false.</p>

<h3 id="Syntax">Syntax</h3>

<pre class="eval">false()
</pre>

<h3 id="Returns">Returns</h3>

<p>Boolean <code>false</code>.</p>

<h3 id="Notes">Notes</h3>

<p>This function is useful part of a comparison:</p>

<pre class="eval">&lt;xsl:if test="boolean((1 &amp;gt; 2) = false())"&gt;
 The expression evaluates as true
&lt;/xsl:if&gt;
</pre>

<h3 id="Defined">Defined</h3>

<p><a href="https://www.w3.org/TR/xpath#function-false">XPath 1.0 4.3</a></p>

<h3 id="Gecko_support">Gecko support</h3>

<p>Supported.</p>
