---
title: 'ReferenceError: invalid assignment left-hand side'
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
tags:
  - Error
  - Errors
  - JavaScript
  - ReferenceError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "invalid assignment left-hand side" occurs when there was an
  unexpected assignment somewhere. For example, a single "<code>=</code>" sign was used
  instead of "<code>==</code>" or "<code>===</code>".</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">ReferenceError: invalid assignment left-hand side
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("ReferenceError")}}.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>There was an unexpected assignment somewhere. This might be due to a mismatch of a <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators">assignment
    operator</a> and an <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators">equality
    operator</a>, for example. While a single "<code>=</code>" sign assigns a value to a
  variable, the "<code>==</code>" or "<code>===</code>" operators compare a value.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Typical_invalid_assignments">Typical invalid assignments</h3>

<pre class="brush: js example-bad">if (Math.PI = 3 || Math.PI = 4) {
  console.log('no way!');
}
// ReferenceError: invalid assignment left-hand side

var str = 'Hello, '
+= 'is it me '
+= 'you\'re looking for?';
// ReferenceError: invalid assignment left-hand side
</pre>

<p>In the <code>if</code> statement, you want to use an equality operator ("=="), and for
  the string concatenation, the plus ("+") operator is needed.</p>

<pre class="brush: js example-good">if (Math.PI == 3 || Math.PI == 4) {
  console.log('no way!');
}

var str = 'Hello, '
+ 'from the '
+ 'other side!';
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators">Assignment
      operators</a></li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators">Equality
      operators</a></li>
</ul>
