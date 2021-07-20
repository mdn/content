---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
tags:
- JavaScript
- Math
- Method
- Number
- Reference
browser-compat: javascript.builtins.Math.round
---
<div>{{JSRef}}</div>

<p>The <strong><code>Math.round()</code></strong> function returns the value of a number
  rounded to the nearest integer.</p>

<div>{{EmbedInteractiveExample("pages/js/math-round.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Math.round(<var>x</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>x</var></code></dt>
  <dd>A number.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The value of the given number rounded to the nearest integer.</p>

<h2 id="Description">Description</h2>

<p>If the fractional portion of the argument is greater than 0.5, the argument is rounded
  to the integer with the next higher absolute value. If it is less than 0.5, the argument
  is rounded to the integer with the lower absolute value.  If the fractional portion is
  exactly 0.5, the argument is rounded to the next integer in the direction of +∞. 
  <strong>Note that this differs from many languages' <code>round()</code> functions,
    which often round this case to the next integer <em>away from zero</em></strong>,
  instead giving a different result in the case of negative numbers with a fractional part
  of exactly 0.5.</p>

<p>Because <code>round()</code> is a static method of <code>Math</code>, you always use it
  as <code>Math.round()</code>, rather than as a method of a <code>Math</code> object you
  created (<code>Math</code> has no constructor).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_round">Using round</h3>

<pre class="brush: js">Math.round( 20.49); //  20
Math.round( 20.5 ); //  21
Math.round( 42   ); //  42
Math.round(-20.5 ); // -20
Math.round(-20.51); // -21</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Number.toPrecision()")}}</li>
  <li>{{jsxref("Number.toFixed()")}}</li>
  <li>{{jsxref("Math.abs()")}}</li>
  <li>{{jsxref("Math.ceil()")}}</li>
  <li>{{jsxref("Math.floor()")}}</li>
  <li>{{jsxref("Math.sign()")}}</li>
  <li>{{jsxref("Math.trunc()")}}</li>
</ul>
