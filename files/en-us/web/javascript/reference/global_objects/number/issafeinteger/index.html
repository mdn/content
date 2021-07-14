---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Number
  - Polyfill
browser-compat: javascript.builtins.Number.isSafeInteger
---
<div>{{JSRef}}</div>

<p>The <strong><code>Number.isSafeInteger()</code></strong> method determines whether the
  provided value is a number that is a <dfn>safe integer</dfn>.</p>

<div>{{EmbedInteractiveExample("pages/js/number-issafeinteger.html")}}</div>


<p>A safe integer is an integer that</p>

<ul>
  <li>can be exactly represented as an IEEE-754 double precision number, and</li>
  <li>whose IEEE-754 representation cannot be the result of rounding any other integer to
    fit the IEEE-754 representation.</li>
</ul>

<p>For example, <code>2^53 - 1</code> is a safe integer: it can be exactly
  represented, and no other integer rounds to it under any IEEE-754 rounding mode. In
  contrast, <code>2^53</code> is <em>not</em> a safe integer: it can be exactly
  represented in IEEE-754, but the integer <code>2^53 + 1</code> can't be
  directly represented in IEEE-754 but instead rounds to <code>2^53</code> under
  round-to-nearest and round-to-zero rounding. The safe integers consist of all integers
  from <code>-(2^53 - 1)</code> inclusive to <code>2^53 - 1</code>
  inclusive (± <code>9007199254740991</code> or ± 9,007,199,254,740,991).</p>

<p>Handling values larger or smaller than ~9 quadrillion with full precision requires
  using an <a
    href="https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic">arbitrary
    precision arithmetic library</a>. See <a href="http://floating-point-gui.de/">What
    Every Programmer Needs to Know about Floating Point Arithmetic</a> for more
  information on floating point representations of numbers.</p>

<p>For larger integers, consider using the {{jsxref("BigInt")}} type.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Number.isSafeInteger(testValue)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>testValue</code></dt>
  <dd>The value to be tested for being a safe integer.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Boolean")}} indicating whether or not the given value is a number that is a
  safe integer.</p>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">Number.isSafeInteger = Number.isSafeInteger || function (value) {
   return Number.isInteger(value) &amp;&amp; Math.abs(value) &lt;= Number.MAX_SAFE_INTEGER;
};
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_isSafeInteger">Using isSafeInteger</h3>

<pre class="brush: js">Number.isSafeInteger(3);                    // true
Number.isSafeInteger(Math.pow(2, 53));      // false
Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
Number.isSafeInteger(NaN);                  // false
Number.isSafeInteger(Infinity);             // false
Number.isSafeInteger('3');                  // false
Number.isSafeInteger(3.1);                  // false
Number.isSafeInteger(3.0);                  // true
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Number.isSafeInteger</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-number"><code>core-js</code></a></li>
  <li>The {{jsxref("Number")}} object it belongs to.</li>
  <li>{{jsxref("Number.MIN_SAFE_INTEGER")}}</li>
  <li>{{jsxref("Number.MAX_SAFE_INTEGER")}}</li>
  <li>{{jsxref("BigInt")}}</li>
</ul>
