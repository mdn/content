---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.asinh
---
<div>{{JSRef}}</div>

<p>The <strong><code>Math.asinh()</code></strong> function returns the hyperbolic arcsine
    of a number, that is</p>

<p><math display="block">
        <semantics>
            <mrow>
                <mstyle mathvariant="monospace">
                    <mrow>
                        <mo lspace="0em" rspace="thinmathspace">Math.asinh</mo>
                        <mo stretchy="false">(</mo>
                        <mi>x</mi>
                        <mo stretchy="false">)</mo>
                    </mrow>
                </mstyle>
                <mo>=</mo>
                <mo lspace="0em" rspace="thinmathspace">arsinh</mo>
                <mo stretchy="false">(</mo>
                <mi>x</mi>
                <mo stretchy="false">)</mo>
                <mo>=</mo>
                <mtext> the unique </mtext>
                <mspace width="thickmathspace"></mspace>
                <mi>y</mi>
                <mspace width="thickmathspace"></mspace>
                <mtext>such that</mtext>
                <mspace width="thickmathspace"></mspace>
                <mo lspace="0em" rspace="0em">sinh</mo>
                <mo stretchy="false">(</mo>
                <mi>y</mi>
                <mo stretchy="false">)</mo>
                <mo>=</mo>
                <mi>x</mi>
            </mrow>
            <annotation encoding="TeX">\mathtt{\operatorname{Math.asinh}(x)} =
                \operatorname{arsinh}(x) = \text{ the unique } \; y \; \text{such that} \;
                \sinh(y) = x</annotation>
        </semantics>
    </math></p>

<div>{{EmbedInteractiveExample("pages/js/math-asinh.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Math.asinh(x)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
    <dt><code><var>x</var></code></dt>
    <dd>A number.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The hyperbolic arcsine of the given number.</p>

<h2 id="Description">Description</h2>

<p>Because <code>asinh()</code> is a static method of <code>Math</code>, you always use it
    as <code>Math.asinh()</code>, rather than as a method of a <code>Math</code> object
    you created (<code>Math</code> is not a constructor).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Math.asinh">Using Math.asinh()</h3>

<pre class="brush: js">Math.asinh(1);  // 0.881373587019543
Math.asinh(0);  // 0
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p><code>Math.asinh</code> can be emulated with the following function:</p>

<pre class="brush: js">if (!Math.asinh) Math.asinh = function(x) {
    var absX = Math.abs(x), w
    if (absX &lt; 3.725290298461914e-9) // |x| &lt; 2^-28
        return x
    if (absX &gt; 268435456) // |x| &gt; 2^28
        w = Math.log(absX) + Math.LN2
    else if (absX &gt; 2) // 2^28 &gt;= |x| &gt; 2
        w = Math.log(2 * absX + 1 / (Math.sqrt(x * x + 1) + absX))
    else
        var t = x * x, w = Math.log1p(absX + t / (1 + Math.sqrt(1 + t)))

    return x &gt; 0 ? w : -w
}
</pre>

<p><code>Math.log1p</code> may also have to be polyfilled; see <a
        href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p">Math.log1p</a>
    for details.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
    <li>A polyfill of <code>Math.asinh</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-math"><code>core-js</code></a></li>
    <li>{{jsxref("Math.acosh()")}}</li>
    <li>{{jsxref("Math.atanh()")}}</li>
    <li>{{jsxref("Math.cosh()")}}</li>
    <li>{{jsxref("Math.sinh()")}}</li>
    <li>{{jsxref("Math.tanh()")}}</li>
</ul>
