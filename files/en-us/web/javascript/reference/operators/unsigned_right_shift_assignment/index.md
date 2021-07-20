---
title: Unsigned right shift assignment (>>>=)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
tags:
- Assignment operator
- JavaScript
- Language feature
- Operator
- Reference
browser-compat: javascript.operators.unsigned_right_shift_assignment
---
<div>{{jsSidebar("Operators")}}</div>

<p>The unsigned right shift assignment operator (<em><code>&gt;&gt;&gt;=</code></em>)
  moves the specified amount of bits to the right and assigns the result to the variable.
</p>

<div>
  {{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift-assignment.html")}}
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">x &gt;&gt;&gt;= y // x = x &gt;&gt;&gt; y</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_unsigned_right_shift_assignment">Using unsigned right shift assignment</h3>

<pre class="brush: js">let a = 5; //   (00000000000000000000000000000101)
a &gt;&gt;&gt;= 2;  // 1 (00000000000000000000000000000001)

let b = -5; // (-00000000000000000000000000000101)
b &gt;&gt;&gt;= 2;   // 1073741822 (00111111111111111111111111111110)</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a
      href="/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment">Assignment
      operators in the JS guide</a></li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Unsigned
      right shift operator</a></li>
</ul>
