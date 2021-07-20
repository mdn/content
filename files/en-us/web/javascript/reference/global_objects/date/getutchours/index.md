---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
tags:
- Date
- JavaScript
- Method
- Prototype
- Reference
browser-compat: javascript.builtins.Date.getUTCHours
---
<div>{{JSRef}}</div>

<p>The <strong><code>getUTCHours()</code></strong> method returns the hours in the
  specified date according to universal time.</p>

<div>{{EmbedInteractiveExample("pages/js/date-getutchours.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">getUTCHours()</pre>

<h3 id="Return_value">Return value</h3>

<p>An integer number, between 0 and 23, representing the hours in the given date according
  to universal time.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_getUTCHours">Using getUTCHours()</h3>

<p>The following example assigns the hours portion of the current time to the variable
  <code>hours</code>.</p>

<pre class="brush: js">var today = new Date();
var hours = today.getUTCHours();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Date.prototype.getHours()")}}</li>
  <li>{{jsxref("Date.prototype.setUTCHours()")}}</li>
</ul>
