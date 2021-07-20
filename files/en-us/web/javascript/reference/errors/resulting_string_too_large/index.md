---
title: 'RangeError: repeat count must be less than infinity'
slug: Web/JavaScript/Reference/Errors/Resulting_string_too_large
tags:
- Error
- Errors
- JavaScript
- RangeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "repeat count must be less than infinity" occurs when the
  {{jsxref("String.prototype.repeat()")}} method is used with a <code>count</code>
  argument that is infinity.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">RangeError: argument out of range (Edge)
RangeError: repeat count must be less than infinity and not overflow maximum string size (Firefox)
RangeError: Invalid count value (Chrome)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("RangeError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The {{jsxref("String.prototype.repeat()")}} method has been used. It has a
  <code>count</code> parameter indicating the number of times to repeat the string. It
  must be between 0 and less than positive {{jsxref("Infinity")}} and cannot be a negative
  number. The range of allowed values can be described like this: [0, +∞).</p>

<p>The resulting string can also not be larger than the maximum string size, which can
  differ in JavaScript engines. In Firefox (SpiderMonkey) the maximum string size is
  2^28 - 1 (<code>0xFFFFFFF</code>).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Invalid_cases">Invalid cases</h3>

<pre class="brush: js example-bad">'abc'.repeat(Infinity); // RangeError
'a'.repeat(2**28);      // RangeError
</pre>

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
