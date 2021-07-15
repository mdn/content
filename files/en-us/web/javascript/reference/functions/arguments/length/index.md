---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
tags:
  - Functions
  - JavaScript
  - Property
  - arguments
browser-compat: javascript.functions.arguments.length
---
<div>{{jsSidebar("Functions")}}</div>

<p>The <strong><code>arguments.length</code></strong> property contains the number of arguments passed to the function.</p>

<h2 id="Description">Description</h2>

<p>The arguments.length property provides the number of arguments actually passed to a function. This can be more or less than the defined parameter's count (see {{jsxref("Function.length")}}).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_arguments.length">Using <code>arguments.length</code></h3>

<p>In this example we define a function that can add two or more numbers together.</p>

<pre class="brush: js">function adder(base /*, n2, ... */) {
  base = Number(base);
  for (var i = 1; i &lt; arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
</pre>

<div class="note">
<p><strong>Note:</strong> Note the difference between {{jsxref("Function.length")}} and arguments.length</p>
</div>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Function")}}</li>
 <li>{{jsxref("Function.length")}}</li>
</ul>
