---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.tan
---
<div>{{JSRef}}</div>

<p>The <strong><code>Math.tan()</code></strong> function returns the tangent of a number.
</p>

<div>{{EmbedInteractiveExample("pages/js/math-tan.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Math.tan(x)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>x</var></code></dt>
  <dd>A number representing an angle in radians.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The tangent of the given number.</p>

<h2 id="Description">Description</h2>

<p>The <code>Math.tan()</code> method returns a numeric value that represents the tangent
  of the angle.</p>

<p>Because <code>tan()</code> is a static method of <code>Math</code>, you always use it
  as <code>Math.tan()</code>, rather than as a method of a <code>Math</code> object you
  created (<code>Math</code> is not a constructor).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Math.tan">Using Math.tan()</h3>

<pre class="brush: js">Math.tan(1); // 1.5574077246549023
</pre>

<p>Because the <code>Math.tan()</code> function accepts radians, but it is often easier to
  work with degrees, the following function accepts a value in degrees, converts it to
  radians and returns the tangent.</p>

<pre class="brush: js">function getTanDeg(deg) {
  var rad = deg * Math.PI/180;
  return Math.tan(rad);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Math.acos()")}}</li>
  <li>{{jsxref("Math.asin()")}}</li>
  <li>{{jsxref("Math.atan()")}}</li>
  <li>{{jsxref("Math.atan2()")}}</li>
  <li>{{jsxref("Math.cos()")}}</li>
  <li>{{jsxref("Math.sin()")}}</li>
</ul>
