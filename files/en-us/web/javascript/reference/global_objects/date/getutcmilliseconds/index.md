---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
tags:
- Date
- JavaScript
- Method
- Prototype
- Reference
browser-compat: javascript.builtins.Date.getUTCMilliseconds
---
<div>{{JSRef}}</div>

<p>The <strong><code>getUTCMilliseconds()</code></strong> method returns the milliseconds
  portion of the time object's value.</p>

<div>{{EmbedInteractiveExample("pages/js/date-getutcmilliseconds.html","shorter")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">getUTCMilliseconds()</pre>

<h3 id="Return_value">Return value</h3>

<p>An integer number, between 0 and 999, representing the milliseconds portion of the
  given date object.  This method is a companion to the other UTC based methods that give
  hour portion, minute portion, etc.; this method gives milliseconds portion.  </p>

<p>Not to be confused with Unix epoch time.  To get total milliseconds since 1970/01/01,
  use the method ".getTime()".</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_getUTCMilliseconds">Using getUTCMilliseconds()</h3>

<p>The following example assigns the milliseconds portion of the current time to the
  variable <code>milliseconds</code>.</p>

<pre class="brush: js">var today = new Date();
var milliseconds = today.getUTCMilliseconds();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Date.prototype.getMilliseconds()")}}</li>
  <li>{{jsxref("Date.prototype.setUTCMilliseconds()")}}</li>
</ul>
