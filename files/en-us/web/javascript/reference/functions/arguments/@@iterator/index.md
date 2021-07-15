---
title: 'arguments[@@iterator]()'
slug: Web/JavaScript/Reference/Functions/arguments/@@iterator
tags:
- Functions
- JavaScript
- Property
- arguments
browser-compat: javascript.functions.arguments.@@iterator
---
<div>{{jsSidebar("Functions")}}</div>

<p>The initial value of the <strong><code>@@iterator</code></strong> property is the same
  function object as the initial value of the {{jsxref("Array.prototype.values")}}
  property.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>arguments</var>[Symbol.iterator]()</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Iteration_using_for...of_loop">Iteration using for...of loop</h3>

<pre class="brush: js">function f() {
  // your browser must support for..of loop
  // and let-scoped variables in for loops
  for (let letter of arguments) {
    console.log(letter);
  }
}
f('w', 'y', 'k', 'o', 'p');
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Array.prototype.values()")}}</li>
</ul>
