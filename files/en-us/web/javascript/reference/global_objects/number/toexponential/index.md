---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
tags:
- JavaScript
- Method
- Number
- Prototype
browser-compat: javascript.builtins.Number.toExponential
---
<div>{{JSRef}}</div>

<p>The <strong><code>toExponential()</code></strong> method returns a string representing
  the {{jsxref("Number")}} object in exponential notation.</p>

<div>{{EmbedInteractiveExample("pages/js/number-toexponential.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
toExponential()
toExponential(fractionDigits)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>fractionDigits</var></code> {{optional_inline}}</dt>
  <dd>Optional. An integer specifying the number of digits after the decimal point.
    Defaults to as many digits as necessary to specify the number.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A string representing the given {{jsxref("Number")}} object in exponential notation
  with one digit before the decimal point, rounded to
  <code><var>fractionDigits</var></code> digits after the decimal point.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt>{{jsxref("RangeError")}}</dt>
  <dd>If <code><var>fractionDigits</var></code> is too small or too large. Values between
    <code>0</code> and <code>100</code>, inclusive, will not cause a
    {{jsxref("RangeError")}}.</dd>
  <dt>{{jsxref("TypeError")}}</dt>
  <dd>If this method is invoked on an object that is not a {{jsxref("Number")}}.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>If the <code><var>fractionDigits</var></code> argument is omitted, the number of digits
  after the decimal point defaults to the number of digits necessary to represent the
  value uniquely.</p>

<p>If you use the <code>toExponential()</code> method for a numeric literal and the
  numeric literal has no exponent and no decimal point, leave whitespace(s) before the dot
  that precedes the method call to prevent the dot from being interpreted as a decimal
  point.</p>

<p>If a number has more digits than requested by the
  <code><var>fractionDigits</var></code> parameter, the number is rounded to the nearest
  number represented by <code><var>fractionDigits</var></code> digits. See the discussion
  of rounding in the description of the {{jsxref("Number.prototype.toFixed",
  "toFixed()")}} method, which also applies to <code>toExponential()</code>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_toExponential">Using toExponential</h3>

<pre class="brush: js">var numObj = 77.1234;

console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log(77.1234.toExponential()); // logs 7.71234e+1
console.log(77 .toExponential());     // logs 7.7e+1
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Number.prototype.toFixed()")}}</li>
  <li>{{jsxref("Number.prototype.toPrecision()")}}</li>
  <li>{{jsxref("Number.prototype.toString()")}}</li>
</ul>
