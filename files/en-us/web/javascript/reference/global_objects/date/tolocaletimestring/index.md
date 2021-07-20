---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
tags:
- Date
- Internationalization
- JavaScript
- Method
- Prototype
- Reference
browser-compat: javascript.builtins.Date.toLocaleTimeString
---
<div>{{JSRef}}</div>

<p>The <strong><code>toLocaleTimeString()</code></strong> method returns a string with a
  language-sensitive representation of the time portion of the date. The newer
  <code>locales</code> and <code>options</code> arguments let applications specify the
  language formatting conventions to use. These arguments can also customize the behavior of the
  function.</p> 
  
  <p>More dated implementations ignore the <code>locales</code> and
  <code>options</code> arguments. In these circumstances, the form of the string returned is
  entirely implementation-dependent.</p>

<div>{{EmbedInteractiveExample("pages/js/date-tolocaletimestring.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
toLocaleTimeString()
toLocaleTimeString(locales)
toLocaleTimeString(locales, options)
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The <code>locales</code> and <code>options</code> arguments customize the behavior of
  the function and let applications specify which language formatting conventions
  should be used. In older implementations that ignore the <code>locales</code> and
  <code>options</code> arguments, the <code>locales</code> and the form of the string returned will be
  entirely implementation-dependent.</p>

<p>See the {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
  constructor for details on these parameters and how to use them.</p>

<p>The default value for each date-time component property is {{jsxref("undefined")}}, but
  if the <code>hour</code>, <code>minute</code>, <code>second</code> properties are all
  {{jsxref("undefined")}}, then <code>hour</code>, <code>minute</code>, and
  <code>second</code> are assumed to be <code>"numeric"</code>.</p>

<h3 id="Return_value">Return value</h3>

<p>A string representing the time portion of the given {{jsxref("Global_Objects/Date",
  "Date")}} instance according to language-specific conventions.</p>

<h2 id="Performance">Performance</h2>

<p>When formatting large numbers of dates, it is better to create an
  {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} object and use the
  function provided by its {{jsxref("DateTimeFormat.prototype.format", "format")}}
  property.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_toLocaleTimeString">Using toLocaleTimeString()</h3>

<p>Basic use of this method without specifying a <code>locale</code> returns a formatted string in the default locale and
  with default options.</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(date.toLocaleTimeString());
// → "7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
</pre>

<h3 id="Using_locales">Using locales</h3>

<p>This example shows some of the variations in localized time formats. In order to get
  the format of the language used in the user interface of your application, make sure to
  specify that language (and possibly some fallback languages) using the
  <code>locales</code> argument:</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses 12-hour time with AM/PM
console.log(date.toLocaleTimeString('en-US'));
// → "7:00:00 PM"

// British English uses 24-hour time without AM/PM
console.log(date.toLocaleTimeString('en-GB'));
// → "03:00:00"

// Korean uses 12-hour time with AM/PM
console.log(date.toLocaleTimeString('ko-KR'));
// → "오후 12:00:00"

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(date.toLocaleTimeString('ar-EG'));
// → "<span dir="rtl">٧:٠٠:٠٠ م</span>"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(date.toLocaleTimeString(['ban', 'id']));
// → "11.00.00"
</pre>

<h3 id="Using_options">Using options</h3>

<p>The results provided by <code>toLocaleTimeString()</code> can be customized using the
  <code>options</code> argument:</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// an application may want to use UTC and make that visible
var options = { timeZone: 'UTC', timeZoneName: 'short' };
console.log(date.toLocaleTimeString('en-US', options));
// → "3:00:00 AM GMT"

// sometimes even the US needs 24-hour time
console.log(date.toLocaleTimeString('en-US', { hour12: false }));
// → "19:00:00"

// show only hours and minutes, use options with the default locale - use an empty array
console.log(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
// → "20:01"

</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}</li>
  <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
  <li>{{jsxref("Date.prototype.toLocaleString()")}}</li>
  <li>{{jsxref("Date.prototype.toTimeString()")}}</li>
  <li>{{jsxref("Date.prototype.toString()")}}</li>
</ul>
