---
title: Math.cosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/cosh
tags:
- JavaScript
- Math
- Method
- Reference
- Polyfill
browser-compat: javascript.builtins.Math.cosh
---
<div>{{JSRef}}</div>

<p>The <strong><code>Math.cosh()</code></strong> function returns the hyperbolic cosine of
  a number, that can be expressed using the {{jsxref("Math.E", "constant e", "", 1)}}:</p>

<p><math display="block">
    <semantics>
      <mrow>
        <mstyle mathvariant="monospace">
          <mo lspace="0em" rspace="thinmathspace">Math.cosh(x)</mo>
        </mstyle>
        <mo>=</mo>
        <mfrac>
          <mrow>
            <msup>
              <mi>e</mi>
              <mi>x</mi>
            </msup>
            <mo>+</mo>
            <msup>
              <mi>e</mi>
              <mrow>
                <mo>-</mo>
                <mi>x</mi>
              </mrow>
            </msup>
          </mrow>
          <mn>2</mn>
        </mfrac>
      </mrow>
      <annotation encoding="TeX">\mathtt{\operatorname{Math.cosh(x)}} = \frac{e^x +
        e^{-x}}{2}</annotation>
    </semantics>
  </math></p>

<div>{{EmbedInteractiveExample("pages/js/math-cosh.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Math.cosh(<var>x</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>x</var></code></dt>
  <dd>A number.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The hyperbolic cosine of the given number.</p>

<h2 id="Description">Description</h2>

<p>Because <code>cosh()</code> is a static method of <code>Math</code>, you always use it
  as <code>Math.cosh()</code>, rather than as a method of a <code>Math</code> object you
  created (<code>Math</code> is not a constructor).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Math.cosh">Using Math.cosh()</h3>

<pre class="brush: js">Math.cosh(0);  // 1
Math.cosh(1);  // 1.5430806348152437
Math.cosh(-1); // 1.5430806348152437
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>This can be emulated with the help of the {{jsxref("Math.exp()")}} function:</p>

<pre class="brush: js">Math.cosh = Math.cosh || function(x) {
  return (Math.exp(x) + Math.exp(-x)) / 2;
}
</pre>

<p>or using only one call to the {{jsxref("Math.exp()")}} function:</p>

<pre class="brush: js">Math.cosh = Math.cosh || function(x) {
  var y = Math.exp(x);
  return (y + 1 / y) / 2;
};
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Math.cosh</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-math"><code>core-js</code></a></li>
  <li>{{jsxref("Math.acosh()")}}</li>
  <li>{{jsxref("Math.asinh()")}}</li>
  <li>{{jsxref("Math.atanh()")}}</li>
  <li>{{jsxref("Math.sinh()")}}</li>
  <li>{{jsxref("Math.tanh()")}}</li>
</ul>
