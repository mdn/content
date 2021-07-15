---
title: Math.log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.log1p
---
<div>{{JSRef}}</div>

<p>The <strong><code>Math.log1p()</code></strong> function returns the natural logarithm
	(base {{jsxref("Math.E", "e")}}) of 1 + a number, that is</p>

<p><math display="block">
		<semantics>
			<mrow>
				<mo>∀</mo>
				<mi>x</mi>
				<mo>&gt;</mo>
				<mo>-</mo>
				<mn>1</mn>
				<mo>,</mo>
				<mstyle mathvariant="monospace">
					<mrow>
						<mo lspace="0em" rspace="thinmathspace">Math.log1p</mo>
						<mo stretchy="false">(</mo>
						<mi>x</mi>
						<mo stretchy="false">)</mo>
					</mrow>
				</mstyle>
				<mo>=</mo>
				<mo lspace="0em" rspace="0em">ln</mo>
				<mo stretchy="false">(</mo>
				<mn>1</mn>
				<mo>+</mo>
				<mi>x</mi>
				<mo stretchy="false">)</mo>
			</mrow>
			<annotation encoding="TeX">\forall x &gt; -1,
				\mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation>
		</semantics>
	</math></p>

<div>{{EmbedInteractiveExample("pages/js/math-log1p.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Math.log1p(x)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
	<dt><code>x</code></dt>
	<dd>A number.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The natural logarithm (base {{jsxref("Math.E", "e")}}) of <strong>1</strong> plus the
	given number. If the number is less than <strong>-1</strong>, {{jsxref("NaN")}} is
	returned.</p>

<h2 id="Description">Description</h2>

<p>For very small values of <em>x</em>, adding 1 can reduce or eliminate precision.  The
	double floats used in JS give you about 15 digits of precision.  1 + 1e-15
	= 1.000000000000001, but 1 + 1e-16 = 1.000000000000000 and therefore exactly 1.0 in
	that arithmetic, because digits past 15 are rounded off.  </p>

<p>When you calculate log(1 + x), you should get an answer very close to x, if x is small
	(that's why these are called 'natural' logarithms).  If you calculate Math.log(1 +
	1.1111111111e-15) you should get an answer close to 1.1111111111e-15.  Instead,
	you will end up taking the logarithm of 1.00000000000000111022 (the roundoff is in binary so
	sometimes it gets ugly), so you	get the answer 1.11022...e-15, with only  3
	correct digits.  If, instead, you calculate Math.log1p(1.1111111111e-15) you will get a
		much more accurate answer 1.1111111110999995e-15 with 15 correct digits of
		precision (actually 16 in this case).</p>

<p>If the value of <code>x</code> is less than -1, the return value is always
	{{jsxref("NaN")}}.</p>

<p>Because <code>log1p()</code> is a static method of <code>Math</code>, you always use it
	as <code>Math.log1p()</code>, rather than as a method of a <code>Math</code> object
	you created (<code>Math</code> is not a constructor).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Math.log1p">Using <code>Math.log1p()</code></h3>

<pre class="brush: js">Math.log1p(1);  // 0.6931471805599453
Math.log1p(0);  // 0
Math.log1p(-1); // -Infinity
Math.log1p(-2); // NaN
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li>A polyfill of <code>Math.log1p</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-math"><code>core-js</code></a></li>
	<li>{{jsxref("Math.exp()")}}</li>
	<li>{{jsxref("Math.log()")}}</li>
	<li>{{jsxref("Math.expm1()")}}</li>
	<li>{{jsxref("Math.log10()")}}</li>
	<li>{{jsxref("Math.log2()")}}</li>
	<li>{{jsxref("Math.pow()")}}</li>
</ul>
