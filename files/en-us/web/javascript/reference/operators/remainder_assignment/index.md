---
title: Remainder assignment (%=)
slug: Web/JavaScript/Reference/Operators/Remainder_assignment
tags:
- Assignment operator
- JavaScript
- Language feature
- Operator
- Reference
browser-compat: javascript.operators.remainder_assignment
---
<div>{{jsSidebar("Operators")}}</div>

<p>The remainder assignment operator (<code>%=</code>) divides a variable by the value of
  the right operand and assigns the remainder to the variable.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-remainder-assignment.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">x %= y // x = x % y</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_remainder_assignment">Using remainder assignment</h3>

<pre class="brush: js">// Assuming the following variable
//  bar = 5

bar %= 2     // 1
bar %= 'foo' // NaN
bar %= 0     // NaN</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a
      href="/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment">Assignment
      operators in the JS guide</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Remainder">Remainder
      operator</a></li>
</ul>
