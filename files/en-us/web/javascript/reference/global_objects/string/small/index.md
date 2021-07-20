---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
tags:
- Deprecated
- HTML wrapper methods
- JavaScript
- Method
- Prototype
- Reference
- String
- Polyfill
browser-compat: javascript.builtins.String.small
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p>The <strong><code>small()</code></strong> method creates a {{HTMLElement("small")}}
  HTML element that causes a string to be displayed in a small font.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">small()</pre>

<h3 id="Return_value">Return value</h3>

<p>A string containing a {{HTMLElement("small")}} HTML element.</p>

<h2 id="Description">Description</h2>

<p>The <code>small()</code> method embeds a string in a <code>&lt;small&gt;</code>
  element: "<code>&lt;small&gt;str&lt;/small&gt;</code>".</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_small">Using small()</h3>

<p>The following example uses string methods to change the size of a string:</p>

<pre class="brush: js">var worldString = 'Hello, world';

console.log(worldString.small());     // &lt;small&gt;Hello, world&lt;/small&gt;
console.log(worldString.big());       // &lt;big&gt;Hello, world&lt;/big&gt;
console.log(worldString.fontsize(7)); // &lt;font size="7"&gt;Hello, world&lt;/fontsize&gt;
</pre>

<p>With the {{domxref("HTMLElement/style", "element.style")}} object you can get
  the element's <code>style</code> attribute and manipulate it more generically, for
  example:</p>

<pre class="brush: js">document.getElementById('yourElemId').style.fontSize = '0.7em';
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>String.prototype.small</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
  <li>{{jsxref("String.prototype.fontsize()")}}</li>
  <li>{{jsxref("String.prototype.big()")}}</li>
</ul>
