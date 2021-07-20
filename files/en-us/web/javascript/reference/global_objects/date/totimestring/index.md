---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
tags:
- Date
- JavaScript
- Method
- Prototype
- Reference
browser-compat: javascript.builtins.Date.toTimeString
---
<div>{{JSRef}}</div>

<p>The <strong><code>toTimeString()</code></strong> method returns the time portion of a
  {{jsxref("Date")}} object in human readable form in English.</p>

<div>{{EmbedInteractiveExample("pages/js/date-totimestring.html","shorter")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">toTimeString()</pre>

<h3 id="Return_value">Return value</h3>

<p>A string representing the time portion of the given date in human readable form in
  English.</p>

<h2 id="Description">Description</h2>

<p>{{jsxref("Date")}} instances refer to a specific point in time. Calling
  {{jsxref("Date.prototype.toString()", "toString()")}} will return the date formatted in
  a human readable form in English. In <a
    href="/en-US/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a>, this consists of
  the date portion (day, month, and year) followed by the time portion (hours, minutes,
  seconds, and time zone). Sometimes it is desirable to obtain a string of the time
  portion; such a thing can be accomplished with the <code>toTimeString()</code> method.
</p>

<p>The <code>toTimeString()</code> method is especially useful because compliant engines
  implementing <a href="/en-US/docs/Web/JavaScript/Language_Resources">ECMA-262</a> may
  differ in the string obtained from {{jsxref("Date.prototype.toString()", "toString()")}}
  for {{jsxref("Date")}} objects, as the format is implementation-dependent; simple string
  slicing approaches may not produce consistent results across multiple engines.</p>

<h2 id="Examples">Examples</h2>

<h3 id="A_basic_usage_of_toTimeString">A basic usage of toTimeString()</h3>

<pre class="brush: js">var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString());     // Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toTimeString()); // 14:39:07 GMT-0600 (PDT)
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Date.prototype.toLocaleTimeString()")}}</li>
  <li>{{jsxref("Date.prototype.toDateString()")}}</li>
  <li>{{jsxref("Date.prototype.toString()")}}</li>
</ul>
