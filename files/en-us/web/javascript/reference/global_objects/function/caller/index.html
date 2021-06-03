---
title: Function.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
tags:
  - Deprecated
  - Function
  - JavaScript
  - Property
browser-compat: javascript.builtins.Function.caller
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p>The <strong><code><var>function</var>.caller</code></strong> property returns the function that invoked the specified function. It returns <code>null</code> for strict, async function and generator function callers.</p>

<h2 id="Description">Description</h2>

<p>If the function <code>f</code> was invoked by the top level code, the value of <code>f.caller</code> is {{jsxref("null")}}, otherwise it's the function that called <code>f</code>. It's also <code>null</code> for strict, async function and generator function callers.</p>

<p>This property replaces the obsolete {{jsxref("Functions/arguments/caller", "arguments.caller")}} property of the {{jsxref("Functions/arguments", "arguments")}} object.</p>

<p>The special property <code>__caller__</code>, which returned the activation object of the caller thus allowing to reconstruct the stack, was removed for security reasons.</p>

<h3 id="Notes">Notes</h3>

<p>Note that in case of recursion, you can't reconstruct the call stack using this property. Consider:</p>

<pre class="brush: js">function f(n) { g(n - 1); }
function g(n) { if (n &gt; 0) { f(n); } else { stop(); } }
f(2);
</pre>

<p>At the moment <code>stop()</code> is called the call stack will be:</p>

<pre class="brush: js">f(2) -&gt; g(1) -&gt; f(1) -&gt; g(0) -&gt; stop()
</pre>

<p>The following is true:</p>

<pre class="brush: js">stop.caller === g &amp;&amp; f.caller === g &amp;&amp; g.caller === f
</pre>

<p>so if you tried to get the stack trace in the <code>stop()</code> function like this:</p>

<pre class="brush: js">var f = stop;
var stack = 'Stack trace:';
while (f) {
  stack += '\n' + f.name;
  f = f.caller;
}
</pre>

<p>the loop would never stop.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Checking_the_value_of_a_functions_caller_property">Checking the value of a function's <code>caller</code> property</h3>

<p>The following code checks the value a function's <code>caller</code> property.</p>

<pre class="brush: js">function myFunc() {
  if (myFunc.caller == null) {
    return 'The function was called from the top!';
  } else {
    return 'This function\'s caller was ' + myFunc.caller;
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

<p><span class="pl-s">Not part of any standard.</span></p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Function.name", "Function.name")}}</li>
 <li>{{jsxref("Functions/arguments", "arguments")}}</li>
</ul>
