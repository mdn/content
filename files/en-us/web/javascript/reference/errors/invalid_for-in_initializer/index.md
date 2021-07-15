---
title: 'SyntaxError: for-in loop head declarations may not have initializers'
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
tags:
  - Error
  - JavaScript
  - Strict Mode
  - SyntaxError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict
    mode</a>-only exception "for-in loop head declarations may not have initializers"
  occurs when the head of a <a
    href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> contains
  an initializer expression, such as |<code>for (var i = 0 in obj)</code>|. This is not
  allowed in for-in loops in strict mode.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">SyntaxError: for-in loop head declarations cannot have an initializer (Edge)
SyntaxError: for-in loop head declarations may not have initializers (Firefox)
SyntaxError: for-in loop variable declaration may not have an initializer. (Chrome)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("SyntaxError")}} in <a
    href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a> only.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The head of a<a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">
    for...in</a> loop contains an initializer expression. That is, a variable is declared
  and assigned a value |<code>for (var i = 0 in obj)</code>|. In non-strict mode, this
  head declaration is silently ignored and behaves like <code>|for (var i in obj)|</code>.
  In <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a>, however,
  a <code>SyntaxError</code> is thrown.</p>

<h2 id="Examples">Examples</h2>

<p>This example throws a <code>SyntaxError</code>:</p>

<pre class="brush: js example-bad">"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i = 0 in obj) {
  console.log(obj[i]);
}

// SyntaxError: for-in loop head declarations may not have initializers
</pre>

<h3 id="Valid_for-in_loop">Valid for-in loop</h3>

<p>You can remove the initializer (<code>i = 0</code>) in the head of the for-in loop.</p>

<pre class="brush: js example-good">"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i in obj) {
  console.log(obj[i]);
}
</pre>

<h3 id="Array_iteration">Array iteration</h3>

<p>The for...in loop <a
    href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in">shouldn't
    be used for Array iteration</a>. Did you intend to use a
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for">for</a></code> loop
  instead of a <code>for-in</code> loop to iterate an {{jsxref("Array")}}? The
  <code>for</code> loop allows you to set an initializer then as well:</p>

<pre class="brush: js example-good">var arr = [ "a", "b", "c" ]

for (var i = 2; i &lt; arr.length; i++) {
  console.log(arr[i]);
}

// "c"</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>
    <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></code>
  </li>
  <li>
    <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a></code>
    – also disallows an initializer in both strict and non-strict mode.</li>
  <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for">for</a></code> –
    preferred for array iteration, allows to define an initializer.</li>
</ul>
