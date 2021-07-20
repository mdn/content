---
title: Greater than or equal (>=)
slug: Web/JavaScript/Reference/Operators/Greater_than_or_equal
tags:
- JavaScript
- Language feature
- Operator
- Reference
browser-compat: javascript.operators.greater_than_or_equal
---
<div>{{jsSidebar("Operators")}}</div>

<p>The greater than or equal operator (<code>&gt;=</code>) returns <code>true</code> if
  the left operand is greater than or equal to the right operand, and <code>false</code>
  otherwise.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-greater-than-or-equal.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">x &gt;= y</pre>

<h2 id="Description">Description</h2>

<p>The operands are compared using the <a class="external external-icon"
    href="https://tc39.es/ecma262/#sec-abstract-relational-comparison"
    rel="noopener">Abstract Relational Comparison</a> algorithm. See the documentation for
  the <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than">Less than</a>
  operator for a summary of this algorithm.</p>

<h2 id="Examples">Examples</h2>

<h3 id="String_to_string_comparison">String to string comparison</h3>

<pre class="brush: js">console.log("a" &gt;= "b");     // false
console.log("a" &gt;= "a");     // true
console.log("a" &gt;= "3");     // true
</pre>

<h3 id="String_to_number_comparison">String to number comparison</h3>

<pre class="brush: js">console.log("5" &gt;= 3);       // true
console.log("3" &gt;= 3);       // true
console.log("3" &gt;= 5);       // false

console.log("hello" &gt;= 5);   // false
console.log(5 &gt;= "hello");   // false</pre>

<h3 id="Number_to_Number_comparison">Number to Number comparison</h3>

<pre class="brush: js">console.log(5 &gt;= 3);         // true
console.log(3 &gt;= 3);         // true
console.log(3 &gt;= 5);         // false</pre>

<h3 id="Number_to_BigInt_comparison">Number to BigInt comparison</h3>

<pre class="brush: js">console.log(5n &gt;= 3);        // true
console.log(3 &gt;= 3n);        // true
console.log(3 &gt;= 5n);        // false</pre>

<h3 id="Comparing_Boolean_null_undefined_NaN">Comparing Boolean, null, undefined, NaN</h3>

<pre class="brush: js">console.log(true &gt;= false);  // true
console.log(true &gt;= true);   // true
console.log(false &gt;= true);  // false

console.log(true &gt;= 0);      // true
console.log(true &gt;= 1);      // true

console.log(null &gt;= 0);      // true
console.log(1 &gt;= null);      // true

console.log(undefined &gt;= 3); // false
console.log(3 &gt;= undefined); // false

console.log(3 &gt;= NaN);       // false
console.log(NaN &gt;= 3);       // false</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than">Greater than
      operator</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than">Less than
      operator</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">Less
      than or equal operator</a></li>
</ul>
