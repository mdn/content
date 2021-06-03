---
title: Math.fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
tags:
- ES6
- JavaScript
- Math
- Method
- Reference
- fround
- Polyfill
browser-compat: javascript.builtins.Math.fround
---
<div>{{JSRef}}</div>

<p class="seoSummary">The <strong><code>Math.fround()</code></strong> function returns the
  nearest {{interwiki("wikipedia", "Single-precision floating-point format", "32-bit
  single precision")}} float representation of a {{jsxref("Number")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/math-fround.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Math.fround(doubleFloat)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>doubleFloat</var></code></dt>
  <dd>A {{jsxref("Number")}}. If the parameter is of a different type, it will get
    converted to a number or to {{jsxref("NaN")}} if it cannot be converted.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The nearest {{interwiki("wikipedia", "Single-precision floating-point format", "32-bit
  single precision")}} float representation of the given number.</p>

<h2 id="Description">Description</h2>

<p>JavaScript uses 64-bit double floating-point numbers internally, which offer a very
  high precision. However, sometimes you may be working with 32-bit floating-point
  numbers, for example if you are reading values from a {{jsxref("Float32Array")}}. This
  can create confusion: Checking a 64-bit float and a 32-bit float for equality may fail
  even though the numbers are seemingly identical.</p>

<p>To solve this, <code>Math.fround()</code> can be used to cast the 64-bit float to a
  32-bit float. Internally, JavaScript continues to treat the number as a 64-bit float, it
  just performs a "round to even" on the 23rd bit of the mantissa, and sets all following
  mantissa bits to <code>0</code>. If the number is outside the range of a 32-bit float,
  {{jsxref("Infinity")}} or <code>-Infinity</code> is returned.</p>

<p>Because <code>fround()</code> is a static method of <code>Math</code>, you always use
  it as <code>Math.fround()</code>, rather than as a method of a <code>Math</code> object
  you created (<code>Math</code> is not a constructor).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Math.fround">Using Math.fround()</h3>

<p>The number 1.5 can be precisely represented in the binary numeral system, and is
  identical in 32-bit and 64-bit:</p>

<pre class="brush: js">Math.fround(1.5); // 1.5
Math.fround(1.5) === 1.5; // true
</pre>

<p>However, the number 1.337 cannot be precisely represented in the binary numeral system,
  so it differs in 32-bit and 64-bit:</p>

<pre class="brush: js">Math.fround(1.337); // 1.3370000123977661
Math.fround(1.337) === 1.337; // false
</pre>

<p><math>
    <semantics>
      <msup>
        <mn>2</mn>
        <mn>150</mn>
      </msup>
      <annotation encoding="TeX">2^150</annotation>
    </semantics>
  </math> is too big for a 32-bit float, so <code>Infinity</code> is returned:</p>

<pre class="brush: js">2 ** 150; // 1.42724769270596e+45
Math.fround(2 ** 150); // Infinity
</pre>

<p>If the parameter cannot be converted to a number, or it is {{interwiki("wikipedia",
  "NaN", "not-a-number")}} (<code>NaN</code>), <code>Math.fround()</code> will return
  <code>NaN</code>:</p>

<pre class="brush: js">Math.fround('abc'); // NaN
Math.fround(NaN); // NaN
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>This can be emulated with the following function, if {{jsxref("Float32Array")}} are
  supported:</p>

<pre class="brush: js">Math.fround = Math.fround || (function (array) {
  return function(x) {
    return array[0] = x, array[0];
  };
})(new Float32Array(1));
</pre>

<p>Supporting older browsers is slower, but also possible:</p>

<pre class="brush: js">if (!Math.fround) Math.fround = function(arg) {
  arg = Number(arg);
  // Return early for ±0 and NaN.
  if (!arg) return arg;
  var sign = arg &lt; 0 ? -1 : 1;
  if (sign &lt; 0) arg = -arg;
  // Compute the exponent (8 bits, signed).
  var exp = Math.floor(Math.log(arg) / Math.LN2);
  var powexp = Math.pow(2, Math.max(-126, Math.min(exp, 127)));
  // Handle subnormals: leading digit is zero if exponent bits are all zero.
  var leading = exp &lt; -127 ? 0 : 1;
  // Compute 23 bits of mantissa, inverted to round toward zero.
  var mantissa = Math.round((leading - arg / powexp) * 0x800000);
  if (mantissa &lt;= -0x800000) return sign * Infinity;
  return sign * powexp * (leading - mantissa / 0x800000);
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Math.fround</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-math"><code>core-js</code></a></li>
  <li>{{jsxref("Math.round()")}}</li>
</ul>
