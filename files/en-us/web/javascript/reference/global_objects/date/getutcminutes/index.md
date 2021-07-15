---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
tags:
- Date
- JavaScript
- Method
- Prototype
- Reference
browser-compat: javascript.builtins.Date.getUTCMinutes
---
<div>{{JSRef}}</div>

<p>The <strong><code>getUTCMinutes()</code></strong> method returns the minutes in the
  specified date according to universal time.</p>

<div>{{EmbedInteractiveExample("pages/js/date-getutcminutes.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">getUTCMinutes()</pre>

<h3 id="Return_value">Return value</h3>

<p>An integer number, between 0 and 59, representing the minutes in the given date
  according to universal time.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_getUTCMinutes">Using getUTCMinutes()</h3>

<p>The following example assigns the minutes portion of the current time to the variable
  <code>minutes</code>.</p>

<pre class="brush: js">var today = new Date();
var minutes = today.getUTCMinutes();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Date.prototype.getMinutes()")}}</li>
  <li>{{jsxref("Date.prototype.setUTCMinutes()")}}</li>
</ul>
