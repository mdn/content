---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
tags:
- Deprecated
- HTML wrapper methods
- JavaScript
- Method
- Prototype
- String
- Polyfill
browser-compat: javascript.builtins.String.sub
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p>The <strong><code>sub()</code></strong> method creates a {{HTMLElement("sub")}} HTML
  element that causes a string to be displayed as subscript.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">sub()</pre>

<h3 id="Return_value">Return value</h3>

<p>A string containing a {{HTMLElement("sub")}} HTML element.</p>

<h2 id="Description">Description</h2>

<p>The <code>sub()</code> method embeds a string in a <code>&lt;sub&gt;</code> element:
  "<code>&lt;sub&gt;str&lt;/sub&gt;</code>".</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_sub_and_sup_methods">Using sub() and sup() methods</h3>

<p>The following example uses the <code>sub()</code> and
  {{jsxref("String.prototype.sup()", "sup()")}} methods to format a string:</p>

<pre class="brush: js">var superText = 'superscript';
var subText = 'subscript';

console.log('This is what a ' + superText.sup() + ' looks like.');
// "This is what a &lt;sup&gt;superscript&lt;/sup&gt; looks like."

console.log('This is what a ' + subText.sub() + ' looks like.');
// "This is what a &lt;sub&gt;subscript&lt;/sub&gt; looks like."
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>String.prototype.sub</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
  <li>{{jsxref("String.prototype.sup()")}}</li>
</ul>
