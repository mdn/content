---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
tags:
- Date
- JavaScript
- Method
- Prototype
- Reference
browser-compat: javascript.builtins.Date.getUTCSeconds
---
<div>{{JSRef}}</div>

<p>The <strong><code>getUTCSeconds()</code></strong> method returns the seconds in the
  specified date according to universal time.</p>

<div>{{EmbedInteractiveExample("pages/js/date-getutcseconds.html", "shorter")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">getUTCSeconds()</pre>

<h3 id="Return_value">Return value</h3>

<p>An integer number, between 0 and 59, representing the seconds in the given date
  according to universal time.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_getUTCSeconds">Using getUTCSeconds()</h3>

<p>The following example assigns the seconds portion of the current time to the variable
  <code>seconds</code>.</p>

<pre class="brush: js">var today = new Date();
var seconds = today.getUTCSeconds();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Date.prototype.getSeconds()")}}</li>
  <li>{{jsxref("Date.prototype.setUTCSeconds()")}}</li>
</ul>
