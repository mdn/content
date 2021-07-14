---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
tags:
- Date
- JavaScript
- Method
- Reference
browser-compat: javascript.builtins.Date.parse
---
<div>{{JSRef}}</div>

<p>The <strong><code>Date.parse()</code></strong> method parses a string representation of
  a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC or
  <code>NaN</code> if the string is unrecognized or, in some cases, contains illegal date
  values (e.g. 2015-02-31).</p>

<p>It is not recommended to use <code>Date.parse</code> as until ES5, parsing of strings
  was entirely implementation dependent. There are still many differences in how different
  hosts parse date strings, therefore date strings should be manually parsed (a library
  can help if many different formats are to be accommodated).</p>

<div>{{EmbedInteractiveExample("pages/js/date-parse.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<p>Direct call:</p>

<pre class="brush: js">Date.parse(<var>dateString</var>)
</pre>

<p>Implicit call:</p>

<pre class="brush: js">new Date(<var>dateString</var>)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>dateString</var></code></dt>
  <dd>A string representing <a href="#date_time_string_format"> a simplification of the
      ISO 8601 calendar date extended format</a>. (Other formats may be used, but results
    are implementation-dependent.)</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A number representing the milliseconds elapsed since January 1, 1970, 00:00:00 UTC and
  the date obtained by parsing the given string representation of a date. If the argument
  doesn't represent a valid date, {{jsxref("NaN")}} is returned.</p>

<h2 id="Description">Description</h2>

<p>The <code>parse()</code> method takes a date string (such as
  "<code>2011-10-10T14:48:00</code>") and returns the number of milliseconds since January
  1, 1970, 00:00:00 UTC.</p>

<p>This function is useful for setting date values based on string values, for example in
  conjunction with the {{jsxref("Date.prototype.setTime()", "setTime()")}} method and the
  {{jsxref("Global_Objects/Date", "Date")}} object.</p>

<h3 id="Date_Time_String_Format">Date Time String Format</h3>

<p>The standard string representation of a date time string is a simplification of the ISO
  8601 calendar date extended format. (See the section <a
    href="https://tc39.github.io/ecma262/#sec-date-time-string-format">Date Time String
    Format</a> in the ECMAScript specification for more details.)</p>

<p>For example, "<code>2011-10-10</code>" (<em>date-only</em> form),
  "<code>2011-10-10T14:48:00</code>" (<em>date-time</em> form), or
  "<code>2011-10-10T14:48:00.000+09:00</code>" (<em>date-time</em> form with milliseconds
  and time zone) can be passed and will be parsed. When the time zone offset is absent,
  date-only forms are interpreted as a UTC time and date-time forms are interpreted as
  local time.</p>

<p>While time zone specifiers are used during date string parsing to interpret the
  argument, the value returned is always the number of milliseconds between January 1,
  1970 00:00:00 UTC and the point in time represented by the argument or <code>NaN</code>.
</p>

<p>Because <code>parse()</code> is a static method of {{jsxref("Date")}}, it is called as
  <code>Date.parse()</code> rather than as a method of a {{jsxref("Date")}} instance.</p>

<h3 id="Fall-back_to_implementation-specific_date_formats">Fall-back to
  implementation-specific date formats</h3>

<div class="notecard note">
  <p><strong>Note:</strong> This section contains implementation-specific behavior that can be inconsistent
    across implementations.</p>
</div>

<p>The ECMAScript specification states: If the String does not conform to the standard
  format the function may fall back to any implementation–specific heuristics or
  implementation–specific parsing algorithm. Unrecognizable strings or dates containing
  illegal element values in ISO formatted strings shall cause <code>Date.parse()</code> to
  return {{jsxref("NaN")}}.</p>

<p>However, invalid values in date strings not recognized as simplified ISO format as
  defined by ECMA-262 may or may not result in {{jsxref("NaN")}}, depending on the browser
  and values provided, e.g.:</p>

<pre class="brush: js">// Non-ISO string with invalid date values
new Date('23/25/2014');
</pre>

<p>will be treated as a local date of 25 November, 2015 in Firefox 30 and an invalid date
  in Safari 7.</p>

<p>However, if the string is recognized as an ISO format string and it contains invalid
  values, it will return {{jsxref("NaN")}} in all browsers compliant with ES5 and later:
</p>

<pre class="brush: js">// ISO string with invalid values
new Date('2014-25-23').toISOString();
// throws "RangeError: invalid date" in all ES5-compliant browsers
</pre>

<p>SpiderMonkey's implementation-specific heuristic can be found in <a
    href="https://dxr.mozilla.org/mozilla-central/source/js/src/jsdate.cpp?rev=64553c483cd1#889"><code>jsdate.cpp</code></a>.
  The string "<code>10 06 2014</code>" is an example of a non-conforming ISO format and
  thus falls back to a custom routine. See also this <a
    href="https://bugzilla.mozilla.org/show_bug.cgi?id=1023155#c6">rough outline</a> on
  how the parsing works.</p>

<pre class="brush: js">new Date('10 06 2014');
</pre>

<p>will be treated as a local date of 6 October, 2014, and not 10 June, 2014.</p>

<p>Other examples:</p>

<pre class="brush: js">new Date('foo-bar 2014').toString();
// returns: "Invalid Date"

Date.parse('foo-bar 2014');
// returns: NaN
</pre>

<h3 id="Differences_in_assumed_time_zone">Differences in assumed time zone</h3>

<div class="notecard note">
  <p><strong>Note:</strong> This section contains implementation-specific behavior that can be inconsistent
    across implementations.</p>
</div>

<p>Given a non-standard date string of "<code>March 7, 2014</code>", <code>parse()</code>
  assumes a local time zone, but given a simplification of the ISO 8601 calendar date
  extended format such as "<code>2014-03-07</code>", it will assume a time zone of UTC
  (ES5 and ECMAScript 2015). Therefore {{jsxref("Date")}} objects produced using those
  strings may represent different moments in time depending on the version of ECMAScript
  supported unless the system is set with a local time zone of UTC. This means that two
  date strings that appear equivalent may result in two different values depending on the
  format of the string that is being converted.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Date.parse">Using <code>Date.parse()</code></h3>

<p>The following calls all return <code>1546300800000</code>. The first according to ES5
  will imply UTC time, and the others are specifying UTC timezone via the ISO date
  specification (<code>Z</code> and <code>+00:00</code>)</p>

<pre class="brush: js">Date.parse("2019-01-01")
Date.parse("2019-01-01T00:00:00.000Z")
Date.parse("2019-01-01T00:00:00.000+00:00")
</pre>

<p>The following call, which does not specify a time zone will be set to 2019-01-01 at
  00:00:00 in the local timezone of the system.</p>

<pre class="brush: js">Date.parse("2019-01-01T00:00:00")
</pre>

<h3 id="Non-standard_date_strings">Non-standard date strings</h3>

<div class="notecard note">
  <p><strong>Note:</strong> This section contains implementation-specific behavior that can be inconsistent
    across implementations.</p>
</div>

<p>If <code>IPOdate</code> is an existing {{jsxref("Date")}} object, it can be set to
  August 9, 1995 (local time) as follows:</p>

<pre class="brush: js">IPOdate.setTime(Date.parse('Aug 9, 1995'));
</pre>

<p>Some other examples of parsing non-standard date strings:</p>

<pre class="brush: js">Date.parse('Aug 9, 1995');
</pre>

<p>Returns <code>807937200000</code> in time zone GMT-0300, and other values in other time
  zones, since the string does not specify a time zone and is not ISO format, therefore
  the time zone defaults to local.</p>

<pre class="brush: js">Date.parse('Wed, 09 Aug 1995 00:00:00 GMT');
</pre>

<p>Returns <code>807926400000</code> no matter the local time zone as GMT (UTC) is
  provided.</p>

<pre class="brush: js">Date.parse('Wed, 09 Aug 1995 00:00:00');
</pre>

<p>Returns <code>807937200000</code> in time zone GMT-0300, and other values in other time
  zones, since there is no time zone specifier in the argument and it is not ISO format,
  so is treated as local.</p>

<pre class="brush: js">Date.parse('Thu, 01 Jan 1970 00:00:00 GMT');
</pre>

<p>Returns <code>0</code> no matter the local time zone as a time zone GMT (UTC) is
  provided.</p>

<pre class="brush: js">Date.parse('Thu, 01 Jan 1970 00:00:00');
</pre>

<p>Returns <code>14400000</code> in time zone GMT-0400, and other values in other time
  zones, since no time zone is provided and the string is not in ISO format, therefore the
  local time zone is used.</p>

<pre class="brush: js">Date.parse('Thu, 01 Jan 1970 00:00:00 GMT-0400');
</pre>

<p>Returns <code>14400000</code> no matter the local time zone as a time zone GMT (UTC) is
  provided.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h3 id="Compatibility_notes">Compatibility notes</h3>

<ul>
  <li>Firefox 49 changed the parsing of 2-digit years to be aligned with the Google Chrome
    browser instead of Internet Explorer. Now, 2-digit years that are less than
    <code>50</code> are parsed as 21st century years. For example,
    <code>04/16/17</code>, previously parsed as April 16, 1917, will be April 16, 2017
    now. To avoid any interoperability issues or ambiguous years, it is recommended to use
    the ISO 8601 format like "<code>2017-04-16</code>" (<a
      href="https://bugzilla.mozilla.org/show_bug.cgi?id=1265136">bug 1265136</a>).</li>
  <li>Google Chrome will accept a numerical string as a valid
    <code><em>dateString</em></code> parameter. This means that, for instance, while
    <code>!!Date.parse("42")</code> evaluates to <code>false</code> in Firefox, it
    evaluates to <code>true</code> in Google Chrome because "<code>42</code>" is
    interpreted as the first of January 2042.</li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Date.UTC()")}}</li>
</ul>
