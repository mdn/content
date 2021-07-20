---
title: 'RangeError: repeat count must be non-negative'
slug: Web/JavaScript/Reference/Errors/Negative_repetition_count
tags:
- Error
- Errors
- JavaScript
- RangeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "repeat count must be non-negative" occurs when the
  {{jsxref("String.prototype.repeat()")}} method is used with a <code>count</code>
  argument that is a negative number.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">RangeError: argument out of range
RangeError: repeat count must be non-negative (Firefox)
RangeError: Invalid count value (Chrome)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("RangeError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The {{jsxref("String.prototype.repeat()")}} method has been used. It has a
  <code>count</code> parameter indicating the number of times to repeat the string. It
  must be between 0 and less than positive {{jsxref("Infinity")}} and cannot be a negative
  number. The range of allowed values can be described like this: [0, +∞).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Invalid_cases">Invalid cases</h3>

<pre class="brush: js example-bad">'abc'.repeat(-1); // RangeError </pre>

<h3 id="Valid_cases">Valid cases</h3>

<pre class="brush: js example-good">'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("String.prototype.repeat()")}}</li>
</ul>
