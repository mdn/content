---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
tags:
- JavaScript
- Math
- Method
- Reference
browser-compat: javascript.builtins.Math.floor
---
<div>{{JSRef}}</div>

<p>The <strong><code>Math.floor()</code></strong> function returns the largest integer
  less than or equal to a given number.</p>

<div>{{EmbedInteractiveExample("pages/js/math-floor.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Math.floor(<var>x</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>x</var></code></dt>
  <dd>A number.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A number representing the largest integer less than or equal to the specified number.
</p>

<h2 id="Description">Description</h2>

<p>Because <code>floor()</code> is a static method of <code>Math</code>, you always use it
  as <code>Math.floor()</code>, rather than as a method of a <code>Math</code> object you
  created (<code>Math</code> is not a constructor).</p>

<div class="notecard note">
  <p><strong>Note:</strong> <code>Math.floor(null)</code> returns 0, not a
    {{jsxref("NaN")}}.</p>
</div>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Math.floor">Using Math.floor()</h3>

<pre class="brush: js">Math.floor( 45.95); //  45
Math.floor( 45.05); //  45
Math.floor(  4   ); //   4
Math.floor(-45.05); // -46
Math.floor(-45.95); // -46
</pre>

<h3 id="Decimal_adjustment">Decimal adjustment</h3>

<pre class="brush: js">/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' &amp;&amp; exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Decimal round
const round10 = (value, exp) =&gt; decimalAdjust('round', value, exp);
// Decimal floor
const floor10 = (value, exp) =&gt; decimalAdjust('floor', value, exp);
// Decimal ceil
const ceil10 = (value, exp) =&gt; decimalAdjust('ceil', value, exp);

// Round
round10(55.55, -1);   // 55.6
round10(55.549, -1);  // 55.5
round10(55, 1);       // 60
round10(54.9, 1);     // 50
round10(-55.55, -1);  // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1);      // -50
round10(-55.1, 1);    // -60
// Floor
floor10(55.59, -1);   // 55.5
floor10(59, 1);       // 50
floor10(-55.51, -1);  // -55.6
floor10(-51, 1);      // -60
// Ceil
ceil10(55.51, -1);    // 55.6
ceil10(51, 1);        // 60
ceil10(-55.59, -1);   // -55.5
ceil10(-59, 1);       // -50
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Math.abs()")}}</li>
  <li>{{jsxref("Math.ceil()")}}</li>
  <li>{{jsxref("Math.round()")}}</li>
  <li>{{jsxref("Math.sign()")}}</li>
  <li>{{jsxref("Math.trunc()")}}</li>
</ul>
