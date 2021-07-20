---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
tags:
- JavaScript
- Method
- Number
- Prototype
browser-compat: javascript.builtins.Number.toString
---
<div>{{JSRef}}</div>

<p>The <strong><code>toString()</code></strong> method returns a string representing the
  specified {{jsxref("Number")}} object.</p>

<div>{{EmbedInteractiveExample("pages/js/number-tostring.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
toString()
toString(radix)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>radix</var></code> {{optional_inline}}</dt>
  <dd>An integer in the range <code>2</code> through <code>36</code> specifying the base
    to use for representing numeric values.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A string representing the specified {{jsxref("Number")}} object.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt>{{jsxref("RangeError")}}</dt>
  <dd>If <code>toString()</code> is given a <code><var>radix</var></code> less than
    <code>2</code> or greater than <code>36</code>, a {{jsxref("RangeError")}} is thrown.
  </dd>
</dl>

<h2 id="Description">Description</h2>

<p>The {{jsxref("Number")}} object overrides the <code>toString()</code> method of the
  {{jsxref("Object")}} object. (It does <em>not</em> inherit
  {{jsxref("Object.prototype.toString()")}}). For {{jsxref( "Number")}} objects, the
  <code>toString()</code> method returns a string representation of the object in the
  specified radix.</p>

<p>The <code>toString()</code> method parses its first argument, and attempts to return a
  string representation in the specified <code><var>radix</var></code> (base). For radices
  above <code>10</code>, the letters of the alphabet indicate numerals greater than 9. For
  example, for hexadecimal numbers (base 16), <code>a</code> through <code>f</code> are
  used.</p>

<p>If the <code><var>radix</var></code> is not specified, the preferred radix is assumed
  to be <code>10</code>.</p>

<p>If the <code><var>numObj</var></code> is negative, the sign is preserved. This is the
  case even if the radix is <code>2</code>; the string returned is the positive binary
  representation of the <code><var>numObj</var></code> preceded by a <code>-</code> sign,
  <strong>not</strong> the two's complement of the <code><var>numObj</var></code>.</p>

<p>If the <code><var>numObj</var></code> is not a whole number, the 'dot' sign is used to
  separate the decimal places.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_toString">Using toString</h3>

<pre class="brush: js">let count = 10

console.log(count.toString())    // displays '10'
console.log((17).toString())     // displays '17'
console.log((17.2).toString())   // displays '17.2'

let x = 6

console.log(x.toString(2))       // displays '110'
console.log((254).toString(16))  // displays 'fe'

console.log((-10).toString(2))   // displays '-1010'
console.log((-0xff).toString(2)) // displays '-11111111'
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Number.prototype.toFixed()")}}</li>
  <li>{{jsxref("Number.prototype.toExponential()")}}</li>
  <li>{{jsxref("Number.prototype.toPrecision()")}}</li>
</ul>
