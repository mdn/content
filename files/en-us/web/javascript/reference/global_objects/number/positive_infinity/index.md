---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
tags:
  - JavaScript
  - Number
  - Property
  - Reference
browser-compat: javascript.builtins.Number.POSITIVE_INFINITY
---
<div>{{JSRef}}</div>

<p>The <strong><code>Number.POSITIVE_INFINITY</code></strong> property represents the positive Infinity value.</p>

<div>{{EmbedInteractiveExample("pages/js/number-positive-infinity.html")}}</div>


<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="Description">Description</h2>

<p>The value of <code>Number.POSITIVE_INFINITY</code> is the same as the value of the global object's {{jsxref("Infinity")}} property.</p>

<p>This value behaves slightly differently than mathematical infinity:</p>

<ul>
 <li>Any positive value, including <code>POSITIVE_INFINITY</code>, multiplied by <code>POSITIVE_INFINITY</code> is <code>POSITIVE_INFINITY</code>.</li>
 <li>Any negative value, including {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, multiplied by <code>POSITIVE_INFINITY</code> is {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.</li>
 <li>Any positive number divided by <code>POSITIVE_INFINITY</code> is positive Zero.</li>
 <li>Any negative number divided by <code>POSITIVE_INFINITY</code> is negative Zero.</li>
 <li>Zero multiplied by <code>POSITIVE_INFINITY</code> is {{jsxref("NaN")}}.</li>
 <li>{{jsxref("Global_Objects/NaN", "NaN")}} multiplied by <code>POSITIVE_INFINITY</code> is {{jsxref("NaN")}}.</li>
 <li><code>POSITIVE_INFINITY</code>, divided by any negative value except {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, is {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.</li>
 <li><code>POSITIVE_INFINITY</code>, divided by any positive value except <code>POSITIVE_INFINITY</code>, is <code>POSITIVE_INFINITY</code>.</li>
 <li><code>POSITIVE_INFINITY</code>, divided by either {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} or <code>POSITIVE_INFINITY</code>, is {{jsxref("NaN")}}.</li>
</ul>

<p>You might use the <code>Number.POSITIVE_INFINITY</code> property to indicate an error condition that returns a finite number in case of success. Note, however, that {{jsxref("isFinite")}} would be more appropriate in such a case.</p>

<p>Because <code>POSITIVE_INFINITY</code> is a static property of {{jsxref("Number")}}, you always use it as <code>Number.POSITIVE_INFINITY</code>, rather than as a property of a {{jsxref("Number")}} object you created.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_POSITIVE_INFINITY">Using POSITIVE_INFINITY</h3>

<p>In the following example, the variable <code>bigNumber</code> is assigned a value that is larger than the maximum value. When the {{jsxref("Statements/if...else", "if")}} statement executes, <code>bigNumber</code> has the value <code>Infinity</code>, so <code>bigNumber</code> is set to a more manageable value before continuing.</p>

<pre class="brush: js">var bigNumber = Number.MAX_VALUE * 2;

if (bigNumber == Number.POSITIVE_INFINITY) {
  bigNumber = returnFinite();
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Number.NEGATIVE_INFINITY")}}</li>
 <li>{{jsxref("Number.isFinite()")}}</li>
 <li>{{jsxref("Infinity")}}</li>
 <li>{{jsxref("isFinite", "isFinite()")}}</li>
</ul>
