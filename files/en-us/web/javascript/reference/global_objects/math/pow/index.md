---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
tags:
- JavaScript
- Math
- Method
- Reference
browser-compat: javascript.builtins.Math.pow
---
<div>{{JSRef}}</div>

<p>The <strong><code>Math.pow()</code></strong> function returns the
  <code><var>base</var></code> to the <code><var>exponent</var></code> power, as in
  <code>base^exponent</code>.</p>

<div>{{EmbedInteractiveExample("pages/js/math-pow.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Math.pow(<var>base</var>, <var>exponent</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>base</var></code></dt>
  <dd>The base number.</dd>
  <dt><code><var>exponent</var></code></dt>
  <dd>The exponent used to raise the <code><var>base</var></code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A number representing the given base taken to the power of the given exponent.</p>

<h2 id="Description">Description</h2>

<p>The <strong><code>Math.pow()</code></strong> function returns the
  <code><var>base</var></code> to the <code><var>exponent</var></code> power, as in
  <code>base^exponent</code>, the <code><var>base</var></code> and the
  <code><var>exponent</var></code> are in decimal numeral system.</p>

<p>Because <code>pow()</code> is a static method of <code>Math</code>, use it
  as <code>Math.pow()</code>, rather than as a method of a <code>Math</code> object you
  created. (<code>Math</code> has no constructor.) If the base is negative and the exponent
  is not an integer, the result is NaN.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Math.pow">Using Math.pow()</h3>

<pre class="brush: js">// simple
Math.pow(7, 2);    // 49
Math.pow(7, 3);    // 343
Math.pow(2, 10);   // 1024
// fractional exponents
Math.pow(4, 0.5);  // 2 (square root of 4)
Math.pow(8, 1/3);  // 2 (cube root of 8)
Math.pow(2, 0.5);  // 1.4142135623730951 (square root of 2)
Math.pow(2, 1/3);  // 1.2599210498948732 (cube root of 2)
// signed exponents
Math.pow(7, -2);   // 0.02040816326530612 (1/49)
Math.pow(8, -1/3); // 0.5
// signed bases
Math.pow(-7, 2);   // 49 (squares are positive)
Math.pow(-7, 3);   // -343 (cubes can be negative)
Math.pow(-7, 0.5); // NaN (negative numbers don't have a real square root)
// due to "even" and "odd" roots laying close to each other,
// and limits in the floating number precision,
// negative bases with fractional exponents always return NaN
Math.pow(-7, 1/3); // NaN
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Math.cbrt()")}}</li>
  <li>{{jsxref("Math.exp()")}}</li>
  <li>{{jsxref("Math.log()")}}</li>
  <li>{{jsxref("Math.sqrt()")}}</li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiation
      operator</a></li>
</ul>
