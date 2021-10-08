---
title: boolean
slug: Web/XPath/Functions/boolean
tags:
  - XSLT
  - XSLT_Reference
---
<div>{{XsltRef()}}</div>

<p>The <code>boolean</code> function evaluates an expression and returns true or false.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">boolean( <var>expression</var> )</pre>

<h2 id="Arguments">Arguments</h2>

<dl>
  <dt><code><var>expression</var></code></dt>
  <dd>The expression to be evaluated. The expression can refer to numbers and node-sets as well as booleans.</dd>
</dl>

<h2 id="Returns">Returns</h2>

<p>Boolean <code>true</code> or <code>false</code> after evaluating <code><var>expression</var></code>.</p>

<h2 id="Notes">Notes</h2>
<ul>
  <li>A number evaluates to false if it is positive or negative zero or <code>NaN</code>. Otherwise, it evaluates true.</li>
  <li>A node-set evaluates to true if it is non-empty.</li>
  <li>A string evaluates to false if it an empty string. Otherwise, it evaluates to true.</li>
  <li>An object of a type other than the four basic types is converted to a boolean in a way that is dependent on that type.</li>
</ul>

<h2 id="Defined">Defined</h2>
<p><a href="https://www.w3.org/TR/xpath#function-boolean">XPath 1.0 4.3</a></p>

<h2 id="Gecko_support">Gecko support</h2>
<p>Supported.</p>
