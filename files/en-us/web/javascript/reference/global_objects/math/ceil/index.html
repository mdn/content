---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.ceil
---
<div>{{JSRef}}</div>

<p>The <strong><code>Math.ceil()</code></strong> function always rounds a number up to the
  next largest integer.</p>

<p><strong>Note: </strong><code>Math.ceil({{jsxref("null")}})</code> returns integer 0 and
  does not give a {{jsxref("NaN")}} error.</p>

<div>{{EmbedInteractiveExample("pages/js/math-ceil.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Math.ceil(x)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>x</var></code></dt>
  <dd>A number.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The smallest integer greater than or equal to the given number.</p>

<h2 id="Description">Description</h2>

<p>Because <code>ceil()</code> is a static method of <code>Math</code>, you always use it
  as <code>Math.ceil()</code>, rather than as a method of a <code>Math</code> object you
  created (<code>Math</code> is not a constructor).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Math.ceil">Using Math.ceil()</h3>

<p>The following example shows example usage of <code>Math.ceil()</code>.</p>

<pre class="brush: js">Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7
</pre>

<h3 id="Decimal_adjustment">Decimal adjustment</h3>

<pre class="brush: js">// Closure
(function() {
  /**
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
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

// Round
Math.round10(55.55, -1);   // 55.6
Math.round10(55.549, -1);  // 55.5
Math.round10(55, 1);       // 60
Math.round10(54.9, 1);     // 50
Math.round10(-55.55, -1);  // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1);      // -50
Math.round10(-55.1, 1);    // -60
// Floor
Math.floor10(55.59, -1);   // 55.5
Math.floor10(59, 1);       // 50
Math.floor10(-55.51, -1);  // -55.6
Math.floor10(-51, 1);      // -60
// Ceil
Math.ceil10(55.51, -1);    // 55.6
Math.ceil10(51, 1);        // 60
Math.ceil10(-55.59, -1);   // -55.5
Math.ceil10(-59, 1);       // -50
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Math.abs()")}}</li>
  <li>{{jsxref("Math.floor()")}}</li>
  <li>{{jsxref("Math.round()")}}</li>
  <li>{{jsxref("Math.sign()")}}</li>
  <li>{{jsxref("Math.trunc()")}}</li>
</ul>
