---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
tags:
  - JavaScript
  - Math
  - Property
  - Reference
browser-compat: javascript.builtins.Math.E
---
<div>{{JSRef}}</div>

<p>The <strong><code>Math.E</code></strong> property represents Euler's number, the base of natural logarithms, e, which is approximately 2.718.</p>

<p><math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.E</mi></mstyle><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.E}} = e \approx 2.718</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-e.html")}}</div>


<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="Description">Description</h2>

<p>Because <code>E</code> is a static property of <code>Math</code>, you always use it as <code>Math.E</code>, rather than as a property of a <code>Math</code> object you created (<code>Math</code> is not a constructor).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Math.E">Using Math.E</h3>

<p>The following function returns e:</p>

<pre class="brush: js">function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Math.exp()")}}</li>
 <li>{{jsxref("Math.log()")}}</li>
 <li>{{jsxref("Math.log1p()")}}</li>
</ul>
