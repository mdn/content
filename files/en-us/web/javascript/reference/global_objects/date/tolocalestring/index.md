---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
tags:
  - Date
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.toLocaleString
---
<div>{{JSRef}}</div>

<p>The <strong><code>toLocaleString()</code></strong> method returns a string with a
  language sensitive representation of this date.</p>

<p>The new <code><var>locales</var></code> and <code><var>options</var></code> arguments
  let applications specify the language whose formatting conventions should be used and
  customize the behavior of the function.</p>

<p>In older implementations, which ignore the <code><var>locales</var></code> and
  <code><var>options</var></code> arguments, the locale used and the form of the string
  returned are entirely implementation-dependent.</p>

<div>{{EmbedInteractiveExample("pages/js/date-tolocalestring.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The <code><var>locales</var></code> and <code><var>options</var></code> arguments
  customize the behavior of the function and let applications specify the language whose
  formatting conventions should be used. In implementations, which ignore the
  <code><var>locales</var></code> and <code><var>options</var></code> arguments, the
  locale used and the form of the string returned are entirely implementation dependent.
</p>

<p>See the {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
  constructor for details on these parameters and how to use them.</p>

<p>The default value for each date-time component property is {{jsxref("undefined")}}.
  But, if the <code>weekday</code>, <code>year</code>, <code>month</code>, and
  <code>day</code> properties are all {{jsxref("undefined")}}, then <code>year</code>,
  <code>month</code>, and <code>day</code> are assumed to be <code>"numeric"</code>.</p>

<h3 id="Return_value">Return value</h3>

<p>A string representing the given date according to language-specific conventions.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_toLocaleString">Using toLocaleString()</h3>

<p>In basic use without specifying a locale, a formatted string in the default locale and
  with default options is returned.</p>

<pre class="brush: js">let date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleString() without arguments depends on the
// implementation, the default locale, and the default time zone
console.log(date.toLocaleString());
// → "12/11/2012, 7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
</pre>

<h3 id="Checking_for_support_for_locales_and_options_arguments">Checking for support for
  locales and options arguments</h3>

<p>The <code><var>locales</var></code> and <code><var>options</var></code> arguments are
  not supported in all browsers yet. To check whether an implementation supports them
  already, you can use the requirement that illegal language tags are rejected with a
  {{jsxref("RangeError")}} exception:</p>

<pre class="brush: js">function toLocaleStringSupportsLocales() {
  try {
    new Date().toLocaleString('i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
</pre>

<h3 id="Using_locales">Using locales</h3>

<p>This example shows some of the variations in localized date and time formats. In order
  to get the format of the language used in the user interface of your application, make
  sure to specify that language (and possibly some fallback languages) using the
  <code><var>locales</var></code> argument:</p>

<pre class="brush: js">let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses month-day-year order and 12-hour time with AM/PM
console.log(date.toLocaleString('en-US'));
// → "12/19/2012, 7:00:00 PM"

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(date.toLocaleString('en-GB'));
// → "20/12/2012 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(date.toLocaleString('ko-KR'));
// → "2012. 12. 20. 오후 12:00:00"

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(date.toLocaleString('ar-EG'));
// → "<span dir="rtl">٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص</span>"

// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
console.log(date.toLocaleString('ja-JP-u-ca-japanese'));
// → "24/12/20 12:00:00"

// When requesting a language that may not be supported, such as
// Balinese, include a fallback language (in this case, Indonesian)
console.log(date.toLocaleString(['ban', 'id']));
// → "20/12/2012 11.00.00"
</pre>

<h3 id="Using_options">Using options</h3>

<p>The results provided by <code>toLocaleString()</code> can be customized using the
  <code><var>options</var></code> argument:</p>

<pre class="brush: js">let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// request a weekday along with a long date
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(date.toLocaleString('de-DE', options));
// → "Donnerstag, 20. Dezember 2012"

// an application may want to use UTC and make that visible
options.timeZone = 'UTC';
options.timeZoneName = 'short';

console.log(date.toLocaleString('en-US', options));
// → "Thursday, December 20, 2012, GMT"

// sometimes even the US needs 24-hour time
console.log(date.toLocaleString('en-US', { hour12: false }));
// → "12/19/2012, 19:00:00"
</pre>

<h3 id="Avoid_comparing_formatted_date_values_to_static_values">Avoid comparing formatted
  date values to static values</h3>

<p>Most of the time, the formatting returned by <code>toLocaleString()</code> is
  consistent. However, this might change in the future, and isn't guaranteed for all
  languages; output variations are by design, and allowed by the specification.</p>

<p>Most notably, the IE and Edge browsers insert bidirectional control characters around
  dates, so the output text will flow properly when concatenated with other text.</p>

<p>For this reason, you cannot expect to be able to compare the results of
  <code>toLocaleString()</code> to a static value:</p>

<pre class="brush: js example-bad">"1/1/2019, 01:00:00" === new Date("2019-01-01T01:00:00Z").toLocaleString("en-US");
// true in Firefox and others
// false in IE and Edge</pre>

<div class="notecard note">
  <p><strong>Note:</strong> See also this <a
      href="https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results">StackOverflow
      thread</a> for more details and examples.</p>
</div>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Global_Objects/Intl/DateTimeFormat", "Intl.DateTimeFormat")}}</li>
  <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
  <li>{{jsxref("Date.prototype.toLocaleTimeString()")}}</li>
  <li>{{jsxref("Date.prototype.toString()")}}</li>
</ul>
