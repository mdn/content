---
title: Date.prototype.setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
tags:
- Date
- JavaScript
- Method
- Prototype
- Reference
browser-compat: javascript.builtins.Date.setDate
---
<div>{{JSRef}}</div>

<p>The <strong><code>setDate()</code></strong> method changes the day of the month of a given {{jsxref("Date")}} instance, based on local time.</p>

<p>To instead change the day of the month for a given {{jsxref("Date")}} instance based on UTC time, use the {{jsxref("Date.prototype.setUTCDate()", "setUTCDate()")}} method.</p>

<div>{{EmbedInteractiveExample("pages/js/date-setdate.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">setDate(dayValue)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>dayValue</var></code></dt>
  <dd>An integer representing the day of the month.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The number of milliseconds between 1 January 1970 00:00:00 UTC and the given date (the
  {{jsxref("Date")}} object is also changed in place).</p>

<h2 id="Description">Description</h2>

<p>If the <code><var>dayValue</var></code> is outside of the range of date values for the
  month, <code>setDate()</code> will update the {{jsxref("Date")}} object accordingly.</p>

<p>For example, if 0 is provided for <code><var>dayValue</var></code>, the date will be
  set to the last day of the previous month.</p>

<p>If a negative number is provided for <code><var>dayValue</var></code>, the date will be
  set counting backwards from the last day of the previous month. -1 would result in the
  date being set to 1 day before the last day of the previous month.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_setDate">Using setDate()</h3>

<pre class="brush: js">const theBigDay = new Date(1962, 6, 7, 12); // noon of 1962-07-07 (7th of July 1962)
theBigDay.setDate(24);  // 1962-07-24 (24th of July 1962)
theBigDay.setDate(32);  // 1962-08-01 (1st of August 1962)
theBigDay.setDate(22);  // 1962-08-22 (22nd of August 1962)
theBigDay.setDate(0);   // 1962-07-31 (31st of July 1962)
theBigDay.setDate(98);  // 1962-10-06 (6th of October 1962)
theBigDay.setDate(-50); // 1962-08-11 (11th of August 1962)
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Date.prototype.getDate()")}}</li>
  <li>{{jsxref("Date.prototype.setUTCDate()")}}</li>
</ul>
