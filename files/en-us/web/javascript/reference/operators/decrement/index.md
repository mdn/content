---
title: Decrement (--)
slug: Web/JavaScript/Reference/Operators/Decrement
tags:
- Decrement
- JavaScript
- Language feature
- Operator
browser-compat: javascript.operators.decrement
---
<div>{{jsSidebar("Operators")}}</div>

<p>The decrement operator (<code>--</code>) decrements (subtracts one from) its operand
  and returns a value.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-decrement.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
x--
--x
</pre>

<h2 id="Description">Description</h2>

<p>If used postfix, with operator after operand (for example,
  <code><var>x</var>--</code>), the decrement operator decrements and returns the value
  before decrementing.</p>

<p>If used prefix, with operator before operand (for example,
  <code>--<var>x</var></code>), the decrement operator decrements and returns the value
  after decrementing.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Postfix_decrement">Postfix decrement</h3>

<pre class="brush: js">let x = 3;
y = x--;

// y = 3
// x = 2
</pre>

<h3 id="Prefix_decrement">Prefix decrement</h3>

<pre class="brush: js">let a = 2;
b = --a;

// a = 1
// b = 1
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Addition">Addition
      operator</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction">Subtraction
      operator</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Division">Division
      operator</a></li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication">Multiplication
      operator</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Remainder">Remainder
      operator</a></li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiation
      operator</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Increment">Increment
      operator</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation">Unary
      negation operator</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unary plus
      operator</a></li>
</ul>
