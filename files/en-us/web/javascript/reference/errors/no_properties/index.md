---
title: 'TypeError: "x" has no properties'
slug: Web/JavaScript/Reference/Errors/No_properties
tags:
- Error
- Errors
- JavaScript
- TypeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "null (or undefined) has no properties" occurs when you
  attempt to access properties of {{jsxref("null")}} and {{jsxref("undefined")}}. They
  don't have any.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: null has no properties (Firefox)
TypeError: undefined has no properties (Firefox)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>Both, {{jsxref("null")}} and {{jsxref("undefined")}}, have no properties you could
  access.</p>

<h2 id="Examples">Examples</h2>

<h3 id="null_and_undefined_have_no_properties">null and undefined have no properties</h3>

<pre class="brush: js example-bad">null.foo;
// TypeError: null has no properties

undefined.bar;
// TypeError: undefined has no properties
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("null")}}</li>
  <li>{{jsxref("undefined")}}</li>
</ul>
