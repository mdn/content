---
title: Bitwise OR (|)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR
tags:
- Bitwise operator
- JavaScript
- Language feature
- Operator
- Reference
browser-compat: javascript.operators.bitwise_or
---
<div>{{jsSidebar("Operators")}}</div>

<p>The bitwise OR operator (<code>|</code>) returns a <code>1</code> in each bit position
  for which the corresponding bits of either or both operands are <code>1</code>s.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-bitwise-or.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">a | b</pre>

<h2 id="Description">Description</h2>

<p>The operands are converted to 32-bit integers and expressed by a series of bits (zeroes
  and ones). Numbers with more than 32 bits get their most significant bits discarded. For
  example, the following integer with more than 32 bits will be converted to a 32 bit
  integer:</p>

<pre class="brush: js">Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001</pre>

<p>Each bit in the first operand is paired with the corresponding bit in the second
  operand: <em>first bit</em> to <em>first bit</em>, <em>second bit</em> to <em>second
    bit</em>, and so on.</p>

<p>The operator is applied to each pair of bits, and the result is constructed bitwise.
</p>

<p>The truth table for the OR operation is:</p>

<table class="standard-table">
  <thead>
    <tr>
      <th class="header" scope="col">a</th>
      <th class="header" scope="col">b</th>
      <th class="header" scope="col">a OR b</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>0</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
  </tbody>
</table>

<pre class="brush: js">.    9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 | 9 (base 10) = 00000000000000000000000000001111 (base 2) = 15 (base 10)
</pre>

<p>Bitwise ORing any number <code><var>x</var></code> with <code>0</code> yields
  <code><var>x</var></code>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_bitwise_OR">Using bitwise OR</h3>

<pre class="brush: js">// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 | 9;
// 15 (00000000000000000000000000001111)</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise">Bitwise
      operators in the JS guide</a></li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment">Bitwise
      OR assignment operator</a></li>
</ul>
