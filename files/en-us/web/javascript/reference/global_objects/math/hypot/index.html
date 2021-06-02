---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
tags:
- JavaScript
- Math
- Method
- Reference
- Polyfill
browser-compat: javascript.builtins.Math.hypot
---
<div>{{JSRef}}</div>

<p>The <strong><code>Math.hypot()</code></strong> function returns the square root of the
  sum of squares of its arguments, that is:</p>

<p><math display="block">
    <semantics>
      <mrow>
        <mstyle mathvariant="monospace">
          <mrow>
            <mo lspace="0em" rspace="thinmathspace">Math.hypot</mo>
            <mo stretchy="false">(</mo>
            <msub>
              <mi>v</mi>
              <mn>1</mn>
            </msub>
            <mo>,</mo>
            <msub>
              <mi>v</mi>
              <mn>2</mn>
            </msub>
            <mo>,</mo>
            <mo>…</mo>
            <mo>,</mo>
            <msub>
              <mi>v</mi>
              <mi>n</mi>
            </msub>
            <mo stretchy="false">)</mo>
          </mrow>
        </mstyle>
        <mo>=</mo>
        <msqrt>
          <mrow>
            <munderover>
              <mo>∑</mo>
              <mrow>
                <mi>i</mi>
                <mo>=</mo>
                <mn>1</mn>
              </mrow>
              <mi>n</mi>
            </munderover>
            <msubsup>
              <mi>v</mi>
              <mi>i</mi>
              <mn>2</mn>
            </msubsup>
          </mrow>
        </msqrt>
        <mo>=</mo>
        <msqrt>
          <mrow>
            <msubsup>
              <mi>v</mi>
              <mn>1</mn>
              <mn>2</mn>
            </msubsup>
            <mo>+</mo>
            <msubsup>
              <mi>v</mi>
              <mn>2</mn>
              <mn>2</mn>
            </msubsup>
            <mo>+</mo>
            <mo>…</mo>
            <mo>+</mo>
            <msubsup>
              <mi>v</mi>
              <mi>n</mi>
              <mn>2</mn>
            </msubsup>
          </mrow>
        </msqrt>
      </mrow>
      <annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v_1, v_2, \dots, v_n)}
        = \sqrt{\sum_{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation>
    </semantics>
  </math></p>

<div>{{EmbedInteractiveExample("pages/js/math-hypot.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
Math.hypot()
Math.hypot(value0)
Math.hypot(value0, value1)
Math.hypot(value0, value1, ... , valueN)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>value1</var>, <var>value2</var>, ...</code></dt>
  <dd>Numbers.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The square root of the sum of squares of the given arguments. If at least one of the
  arguments cannot be converted to a number, {{jsxref("NaN")}} is returned.</p>

<h2 id="Description">Description</h2>

<p>Calculating the hypotenuse of a right triangle, or the magnitude of a complex number,
  uses the formula <code>Math.sqrt(v1*v1 + v2*v2)</code>, where v1 and v2 are the lengths
  of the triangle's legs, or the complex number's real and complex components. The
  corresponding distance in 2 or more dimensions can be calculated by adding more squares
  under the square root: <code>Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)</code>.</p>

<p>This function makes this calculation easier and faster; you call
  <code>Math.hypot(v1, v2)</code> , or <code>Math.hypot(v1, v2, v3, v4, ...)</code>.</p>

<p><code>Math.hypot</code> also avoids overflow/underflow problems if the magnitude of
  your numbers is very large. The largest number you can represent in JS is
  <code>Number.MAX_VALUE</code>, which is around 10^308. If your numbers are
  larger than about 10^154, taking the square of them will result in Infinity.
  For example, <code>Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity</code>. If you use
  <code>hypot()</code> instead, you get better answer:
  <code>Math.hypot(1e200, 1e200) = 1.4142...e+200</code> . This is also true with very
  small numbers. <code>Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0</code>, but
  <code>Math.hypot(1e-200, 1e-200) = 1.4142...e-200</code>.</p>

<p>Because <code>hypot()</code> is a static method of <code>Math</code>, you always use it
  as <code>Math.hypot()</code>, rather than as a method of a <code>Math</code> object you
  created (<code>Math</code> is not a constructor).</p>

<p>If no arguments are given, the result is +0. If any of the arguments is ±Infinity, the
  result is Infinity. If any of the arguments is NaN (unless another argument is
  ±Infinity), the result is NaN. If at least one of the arguments cannot be converted to a
  number, the result is {{jsxref("NaN")}}.</p>

<p>With one argument, <code>Math.hypot()</code> is equivalent to <code>Math.abs()</code>.
</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Math.hypot">Using Math.hypot()</h3>

<pre class="brush: js">Math.hypot(3, 4);          // 5
Math.hypot(3, 4, 5);       // 7.0710678118654755
Math.hypot();              // 0
Math.hypot(NaN);           // NaN
Math.hypot(NaN, Infinity); // Infinity
Math.hypot(3, 4, 'foo');   // NaN, since +'foo' =&gt; NaN
Math.hypot(3, 4, '5');     // 7.0710678118654755, +'5' =&gt; 5
Math.hypot(-3);            // 3, the same as Math.abs(-3)
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>A naive approach that does not handle overflow/underflow issues:</p>

<pre class="brush: js">if (!Math.hypot) Math.hypot = function() {
  var y = 0, i = arguments.length, containsInfinity = false;
  while (i--) {
    var arg = arguments[i];
    if (arg === Infinity || arg === -Infinity)
      containsInfinity = true
    y += arg * arg
  }
  return containsInfinity ? Infinity : Math.sqrt(y)
}
</pre>

<p>A polyfill that avoids underflows and overflows:</p>

<pre class="brush: js">if (!Math.hypot) Math.hypot = function () {
  var max = 0;
  var s = 0;
  var containsInfinity = false;
  for (var i = 0; i &lt; arguments.length; ++i) {
    var arg = Math.abs(Number(arguments[i]));
    if (arg === Infinity)
      containsInfinity = true
    if (arg &gt; max) {
      s *= (max / arg) * (max / arg);
      max = arg;
    }
    s += arg === 0 &amp;&amp; max === 0 ? 0 : (arg / max) * (arg / max);
  }
  return containsInfinity ? Infinity : (max === 1 / 0 ? 1 / 0 : max * Math.sqrt(s));
};
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Math.hypot</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-math"><code>core-js</code></a></li>
  <li>{{jsxref("Math.abs()")}}</li>
  <li>{{jsxref("Math.pow()")}}</li>
  <li>{{jsxref("Math.sqrt()")}}</li>
</ul>
