---
title: Math.LOG2E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
tags:
  - JavaScript
  - Math
  - Property
  - Reference
browser-compat: javascript.builtins.Math.LOG2E
---
<div>{{JSRef}}</div>

<p>The <strong><code>Math.LOG2E</code></strong> property represents the base 2 logarithm of e, approximately 1.442:</p>

<p><math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG2E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>1.442</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG2E}} = \log_2(e) \approx 1.442</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-log2e.html","shorter")}}</div>


<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="Description">Description</h2>

<p>Because <code>LOG2E</code> is a static property of <code>Math</code>, you always use it as <code>Math.LOG2E</code>, rather than as a property of a <code>Math</code> object you created (<code>Math</code> is not a constructor).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Math.LOG2E">Using Math.LOG2E</h3>

<p>The following function returns the base 2 logarithm of e:</p>

<pre class="brush: js">function getLog2e() {
  return Math.LOG2E;
}

getLog2e(); // 1.4426950408889634
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Math.exp()")}}</li>
 <li>{{jsxref("Math.log()")}}</li>
 <li>{{jsxref("Math.log2()")}}</li>
</ul>
