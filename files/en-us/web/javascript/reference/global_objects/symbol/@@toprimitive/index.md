---
title: 'Symbol.prototype[@@toPrimitive]'
slug: Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive
tags:
- ECMAScript 2015
- JavaScript
- Method
- Prototype
- Symbol
browser-compat: javascript.builtins.Symbol.@@toPrimitive
---
<div>{{JSRef}}</div>

<p>The <strong><code>[@@toPrimitive]()</code></strong> method converts a Symbol object to
  a primitive value.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Symbol()[Symbol.toPrimitive](<var>hint</var>)
</pre>

<h3 id="Return_value">Return value</h3>

<p>The primitive value of the specified {{jsxref("Symbol")}} object.</p>

<h2 id="Description">Description</h2>

<p>The <code>[@@toPrimitive]()</code> method of {{jsxref("Symbol")}} returns the primitive
  value of a Symbol object as a Symbol data type. The <code><var>hint</var></code>
  argument is not used.</p>

<p>JavaScript calls the <code>[@@toPrimitive]()</code> method to convert an object to a
  primitive value. You rarely need to invoke the <code>[@@toPrimitive]()</code> method
  yourself; JavaScript automatically invokes it when encountering an object where a
  primitive value is expected.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_toPrimitive">Using @@toPrimitive</h3>

<pre class="brush: js">const sym = Symbol("example");
sym === sym[Symbol.toPrimitive](); // true
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Symbol.toPrimitive")}}</li>
</ul>
