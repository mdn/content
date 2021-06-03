---
title: 'Warning: Date.prototype.toLocaleFormat is deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat
tags:
  - Error
  - JavaScript
  - Warning
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript warning "Date.prototype.toLocaleFormat is deprecated; consider using
  Intl.DateTimeFormat instead" occurs when the non-standard
  {{jsxref("Date.prototype.toLocaleFormat")}} method is used.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">Warning: Date.prototype.toLocaleFormat is deprecated; consider using Intl.DateTimeFormat instead
</pre>

<h2 id="Error_type">Error type</h2>

<p>Warning. JavaScript execution won't be halted.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The non-standard {{jsxref("Date.prototype.toLocaleFormat")}} method is deprecated and
  shouldn't be used anymore. It uses a format string in the same format expected by the
  <code>strftime()</code> function in C. <strong>The function is no longer available in
    Firefox 58+</strong>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Deprecated_syntax">Deprecated syntax</h3>

<p>The {{jsxref("Date.prototype.toLocaleFormat")}} method is deprecated and will be
  removed (no cross-browser support, available in Firefox only).</p>

<pre class="brush: js example-bad">var today = new Date();
var date = today.toLocaleFormat('%A, %e. %B %Y');

console.log(date);
// In German locale
// "Freitag, 10. März 2017"</pre>

<h3 id="Alternative_standard_syntax_using_the_ECMAScript_Intl_API">Alternative standard
  syntax using the ECMAScript Intl API</h3>

<p>The ECMA-402 (ECMAScript Intl API) standard specifies standard objects and methods that
  enable language sensitive date and time formatting (available in Chrome 24+, Firefox
  29+, IE11+, Safari10+).</p>

<p>You can now either use the {{jsxref("Date.prototype.toLocaleDateString")}} method if
  you just want to format one date.</p>

<pre class="brush: js example-good">var today = new Date();
var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
var date = today.toLocaleDateString('de-DE', options);

console.log(date);
// "Freitag, 10. März 2017"
</pre>

<p>Or, you can make use of the {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}} object,
  which allows you to cache an object with most of the computations done so that
  formatting is fast. This is useful if you have a loop of dates to format.</p>

<pre class="brush: js example-good">var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
var dateFormatter = new Intl.DateTimeFormat('de-DE', options)

var dates = [Date.UTC(2012, 11, 20, 3, 0, 0),
             Date.UTC(2014, 04, 12, 8, 0, 0)];

dates.forEach(date =&gt; console.log(dateFormatter.format(date)));

// "Donnerstag, 20. Dezember 2012"
// "Montag, 12. Mai 2014"
</pre>

<h3 id="Alternative_standard_syntax_using_Date_methods">Alternative standard syntax using
  Date methods</h3>

<p>The {{jsxref("Date")}} object offers several methods to build a custom date string.</p>

<pre class="brush: js example-bad">(new Date()).toLocaleFormat("%Y%m%d");
// "20170310"
</pre>

<p>Can be converted to:</p>

<pre class="brush: js example-good">let now = new Date();
let date = now.getFullYear() * 10000 +
          (now.getMonth() + 1) * 100 + now.getDate();

console.log(date);
// "20170310"</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Date.prototype.toLocaleFormat")}}</li>
  <li>{{jsxref("Date.prototype.toLocaleDateString")}}</li>
  <li>{{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}</li>
</ul>
