---
title: 'RangeError: precision is out of range'
slug: Web/JavaScript/Reference/Errors/Precision_range
tags:
- Error
- Errors
- JavaScript
- RangeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "precision is out of range" occurs when a number that's
  outside of the range of 0 and 20 (or 21) was passed into <code>toFixed</code> or
  <code>toPrecision</code>.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">RangeError: The number of fractional digits is out of range (Edge)
RangeError: The precision is out of range (Edge)
RangeError: precision {0} out of range (Firefox)
RangeError: toExponential() argument must be between 0 and 20 (Chrome)
RangeError: toFixed() digits argument must be between 0 and 20 (Chrome)
RangeError: toPrecision() argument must be between 1 and 21 (Chrome)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("RangeError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>There was an out of range precision argument in one of these methods:</p>

<ul>
  <li>{{jsxref("Number.prototype.toExponential()")}}</li>
  <li>{{jsxref("Number.prototype.toFixed()")}}</li>
  <li>{{jsxref("Number.prototype.toPrecision()")}}</li>
</ul>

<p>The allowed range for these methods is usually between 0 and 20 (or 21). However, the
  ECMAScript specification allows to extend this range.</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Method</th>
      <th scope="col">Firefox (SpiderMonkey)</th>
      <th scope="col">Chrome, Opera (V8)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{jsxref("Number.prototype.toExponential()")}}</td>
      <td>0 to 100</td>
      <td>0 to 20</td>
    </tr>
    <tr>
      <td>{{jsxref("Number.prototype.toFixed()")}}</td>
      <td>-20 to 100</td>
      <td>0 to 20</td>
    </tr>
    <tr>
      <td>{{jsxref("Number.prototype.toPrecision()")}}</td>
      <td>1 to 100</td>
      <td>1 to 21</td>
    </tr>
  </tbody>
</table>

<h2 id="Examples">Examples</h2>

<h3 id="Invalid_cases">Invalid cases</h3>

<pre class="brush: js example-bad">77.1234.toExponential(-1);  // RangeError
77.1234.toExponential(101); // RangeError

2.34.toFixed(-100);         // RangeError
2.34.toFixed(1001);         // RangeError

1234.5.toPrecision(-1);     // RangeError
1234.5.toPrecision(101);    // RangeError
</pre>

<h3 id="Valid_cases">Valid cases</h3>

<pre class="brush: js example-good">77.1234.toExponential(4); // 7.7123e+1
77.1234.toExponential(2); // 7.71e+1

2.34.toFixed(1); // 2.3
2.35.toFixed(1); // 2.4 (note that it rounds up in this case)

5.123456.toPrecision(5); // 5.1235
5.123456.toPrecision(2); // 5.1
5.123456.toPrecision(1); // 5
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Number.prototype.toExponential()")}}</li>
  <li>{{jsxref("Number.prototype.toFixed()")}}</li>
  <li>{{jsxref("Number.prototype.toPrecision()")}}</li>
</ul>
