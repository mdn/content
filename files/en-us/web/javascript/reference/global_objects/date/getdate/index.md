---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
tags:
- Date
- JavaScript
- Method
- Prototype
- Reference
browser-compat: javascript.builtins.Date.getDate
---
<div>{{JSRef}}</div>

<p>The <strong><code>getDate()</code></strong> method returns the day of the month for the
  specified date according to local time.</p>

<div>{{EmbedInteractiveExample("pages/js/date-getdate.html","shorter")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">getDate()</pre>

<h3 id="Return_value">Return value</h3>

<p>An integer number, between 1 and 31, representing the day of the month for the given
  date according to local time.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_getDate">Using getDate()</h3>

<p>The second statement below assigns the value 25 to the variable <code>day</code>, based
  on the value of the {{jsxref("Date")}} object <code>Xmas95</code>.</p>

<pre class="brush: js">var Xmas95 = new Date('December 25, 1995 23:15:30');
var day = Xmas95.getDate();

console.log(day); // 25
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Date.prototype.getUTCDate()")}}</li>
  <li>{{jsxref("Date.prototype.getUTCDay()")}}</li>
  <li>{{jsxref("Date.prototype.setDate()")}}</li>
</ul>
