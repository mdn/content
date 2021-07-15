---
title: Right shift (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
tags:
- Bitwise operator
- JavaScript
- Language feature
- Operator
- Reference
browser-compat: javascript.operators.right_shift
---
<div>{{jsSidebar("Operators")}}</div>

<p>The <strong>right shift operator (<code>&gt;&gt;</code>)</strong> shifts the first
  operand the specified number of bits to the right. Excess bits shifted off to the right
  are discarded. Copies of the leftmost bit are shifted in from the left. Since the new
  leftmost bit has the same value as the previous leftmost bit, the sign bit (the leftmost
  bit) does not change. Hence the name "sign-propagating".</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-right-shift.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">a &gt;&gt; b</pre>

<h2 id="Description">Description</h2>

<p>This operator shifts the first operand the specified number of bits to the right.
  Excess bits shifted off to the right are discarded. Copies of the leftmost bit are
  shifted in from the left. Since the new leftmost bit has the same value as the previous
  leftmost bit, the sign bit (the leftmost bit) does not change. Hence the name
  "sign-propagating".</p>

<p>For example, <code>9 &gt;&gt; 2</code> yields 2:</p>

<pre class="brush: js">.    9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 &gt;&gt; 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
</pre>

<p>Likewise, <code>-9 &gt;&gt; 2</code> yields <code>-3</code>, because the sign is
  preserved:</p>

<pre class="brush: js">.    -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 &gt;&gt; 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_right_shift">Using right shift</h3>

<pre class="brush: js"> 9 &gt;&gt; 2; //  2
-9 &gt;&gt; 2; // -3
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise">Bitwise
      operators in the JS guide</a></li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment">Right
      shift assignment operator</a></li>
</ul>
