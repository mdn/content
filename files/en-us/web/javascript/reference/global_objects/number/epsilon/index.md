---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - Property
  - Polyfill
browser-compat: javascript.builtins.Number.EPSILON
---
<div>{{JSRef}}</div>

<p>The <strong><code>Number.EPSILON</code></strong> property represents the difference between 1 and the smallest floating point number greater than 1.</p>

<p>You do not have to create a {{jsxref("Number")}} object to access this static property (use <code>Number.EPSILON</code>).</p>

<div>{{EmbedInteractiveExample("pages/js/number-epsilon.html")}}</div>


<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="Description">Description</h2>

<p>The <code>EPSILON</code> property has a value of approximately <code>2.2204460492503130808472633361816E-16</code>, or <code>2^-52</code>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Testing_equality">Testing equality</h3>

<pre class="brush: js">x = 0.2;
y = 0.3;
z = 0.1;
equal = (Math.abs(x - y + z) &lt; Number.EPSILON);
</pre>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">if (Number.EPSILON === undefined) {
    Number.EPSILON = Math.pow(2, -52);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>Number.EPSILON</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-number"><code>core-js</code></a></li>
 <li>The {{jsxref("Number")}} object it belongs to</li>
</ul>
