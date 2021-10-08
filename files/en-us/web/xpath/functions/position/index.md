---
title: position
slug: Web/XPath/Functions/position
tags:
  - XSLT
  - XSLT_Reference
---
<p>{{ XsltRef() }}</p>

<p><br>
 The <code>position</code> function returns a number equal to the context position from the expression evaluation context.</p>

<h3 id="Syntax">Syntax</h3>

<pre class="eval">position()
</pre>

<h3 id="Returns">Returns</h3>

<p>An integer equal to the context position from the expression evaluation context.</p>

<h3 id="Notes">Notes</h3>

<ul>
 <li>Note that a node's position in a context is not zero-based. The first node has a position of 1.</li>
</ul>

<ul>
 <li>The context is determined by the rest of the path.</li>
</ul>

<pre class="eval">&lt;xsl:template match="//a[position() = 5]"&gt;
 &lt;!-- this template matches the fifth a element
         anywhere in the document. --&gt;
&lt;/xsl:template&gt;
</pre>

<pre class="eval">&lt;xsl:template match="//div[@class='foo']/bar[position() = 1]"&gt;
 &lt;!-- this template matches the first bar element that is
      a child of a div element with a class attribute equal to "foo" --&gt;
&lt;/xsl:template&gt;
</pre>

<h3 id="Defined">Defined</h3>

<p><a href="https://www.w3.org/TR/xpath#function-position">XPath 1.0 4.1</a></p>

<h3 id="Gecko_support">Gecko support</h3>

<p>Supported.</p>
