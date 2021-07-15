---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
tags:
- ECMAScript 2015
- JavaScript
- Math
- Method
- Reference
- Polyfill
browser-compat: javascript.builtins.Math.trunc
---
<div>{{JSRef}}</div>

<p>The <strong><code>Math.trunc()</code></strong> function returns the integer part of a
  number by removing any fractional digits.</p>

<div>{{EmbedInteractiveExample("pages/js/math-trunc.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Math.trunc(<var>x</var>)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>x</var></code></dt>
  <dd>A number.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The integer part of the given number.</p>

<h2 id="Description">Description</h2>

<p>Unlike the other three <code>Math</code> methods: {{jsxref("Math.floor()")}},
  {{jsxref("Math.ceil()")}} and {{jsxref("Math.round()")}}, the way
  <code>Math.trunc()</code> works is very simple. It <em>truncates</em> (cuts off) the dot
  and the digits to the right of it, no matter whether the argument is a positive or
  negative number.</p>

<p>The argument passed to this method will be converted to number type implicitly.</p>

<p>Because <code>trunc()</code> is a static method of <code>Math</code>, you always use it
  as <code>Math.trunc()</code>, rather than as a method of a <code>Math</code> object you
  created (<code>Math</code> is not a constructor).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Math.trunc">Using Math.trunc()</h3>

<pre class="brush: js">Math.trunc(13.37);    // 13
Math.trunc(42.84);    // 42
Math.trunc(0.123);    //  0
Math.trunc(-0.123);   // -0
Math.trunc('-1.123'); // -1
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Math.trunc</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-math"><code>core-js</code></a></li>
  <li><a href="https://github.com/behnammodi/polyfill/blob/master/math.polyfill.js">A
    polyfill</a></li>
  <li>{{jsxref("Math.abs()")}}</li>
  <li>{{jsxref("Math.ceil()")}}</li>
  <li>{{jsxref("Math.floor()")}}</li>
  <li>{{jsxref("Math.round()")}}</li>
  <li>{{jsxref("Math.sign()")}}</li>
</ul>
