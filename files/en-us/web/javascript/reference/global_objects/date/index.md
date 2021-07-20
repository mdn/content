---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
tags:
  - Class
  - Date
  - Epoch
  - JavaScript
  - Time
  - Unix Epoch
  - timeStamp
browser-compat: javascript.builtins.Date
---
<div>{{JSRef}}</div>

<p>JavaScript <strong><code>Date</code></strong> objects represent a single moment in time in a platform-independent format. <code>Date</code> objects contain a <code>Number</code> that represents milliseconds since 1 January 1970 UTC.</p>

<div class="notecard note">
<p><strong>Note:</strong> TC39 is working on <a href="https://tc39.es/proposal-temporal/docs/index.html">Temporal</a>, a new Date/Time API. Read more about it on the <a href="https://blogs.igalia.com/compilers/2020/06/23/dates-and-times-in-javascript/">Igalia blog</a>. It is not yet ready for production use!</p>
</div>

<h2 id="Description">Description</h2>

<h3 id="The_ECMAScript_epoch_and_timestamps">The ECMAScript epoch and timestamps</h3>

<p>A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC. This date and time are not the same as the <strong>UNIX epoch </strong>(the number of seconds that have elapsed since midnight on January 1, 1970, UTC), which is the predominant base value for computer-recorded date and time values.</p>

<p><strong>Note:</strong> It's important to keep in mind that while the time value at the heart of a Date object is UTC, the basic methods to fetch the date and time or its components all work in the local (i.e. host system) time zone and offset.</p>

<p>It should be noted that the maximum <code>Date</code> is not of the same value as the maximum safe integer (<code>Number.MAX_SAFE_INTEGER</code> is 9,007,199,254,740,991). Instead, it is defined in ECMA-262 that a maximum of ±100,000,000 (one hundred million) days relative to January 1, 1970 UTC (that is, April 20, 271821 BCE ~ September 13, 275760 CE) can be represented by the standard <code>Date</code> object (equivalent to ±8,640,000,000,000,000 milliseconds).</p>

<h3 id="Date_format_and_time_zone_conversions">Date format and time zone conversions</h3>

<p>There are several methods available to obtain a date in various formats, as well as to perform time zone conversions. Particularly useful are the functions that output the date and time in Coordinated Universal Time (UTC), the global standard time defined by the World Time Standard. (This time is historically known as <em>Greenwich Mean Time</em>, as UTC lies along the meridian that includes London—and nearby Greenwich—in the United Kingdom.) The user's device provides the local time.</p>

<p>In addition to methods to read and alter individual components of the local date and time (such as {{jsxref("Date.getDay", "getDay()")}} and {{jsxref("Date.setHours", "setHours()")}}), there are also versions of the same methods that read and manipulate the date and time using UTC (such as {{jsxref("Date.getUTCDay()", "getUTCDay()")}} and {{jsxref("Date.setUTCHours", "setUTCHours()")}}).</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("Date/Date", "Date()")}}</dt>
 <dd>When called as a function, returns a string representation of the current date and time, exactly as <code>new Date().toString()</code> does.</dd>
 <dt>{{jsxref("Date/Date", "new Date()")}}</dt>
 <dd>When called as a constructor, returns a new <code>Date</code> object.</dd>
</dl>

<h2 id="Static_methods">Static methods</h2>

<dl>
 <dt>{{jsxref("Date.now()")}}</dt>
 <dd>Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.</dd>
 <dt>{{jsxref("Date.parse()")}}</dt>
 <dd>Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.
 <div class="note">
 <p><strong>Note:</strong> Parsing of strings with <code>Date.parse</code> is strongly discouraged due to browser differences and inconsistencies.</p>
 </div>
 </dd>
 <dt>{{jsxref("Date.UTC()")}}</dt>
 <dd>Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("Date.prototype.getDate()")}}</dt>
 <dd>Returns the day of the month (<code>1</code>–<code>31</code>) for the specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.getDay()")}}</dt>
 <dd>Returns the day of the week (<code>0</code>–<code>6</code>) for the specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.getFullYear()")}}</dt>
 <dd>Returns the year (4 digits for 4-digit years) of the specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.getHours()")}}</dt>
 <dd>Returns the hour (<code>0</code>–<code>23</code>) in the specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.getMilliseconds()")}}</dt>
 <dd>Returns the milliseconds (<code>0</code>–<code>999</code>) in the specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.getMinutes()")}}</dt>
 <dd>Returns the minutes (<code>0</code>–<code>59</code>) in the specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.getMonth()")}}</dt>
 <dd>Returns the month (<code>0</code>–<code>11</code>) in the specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.getSeconds()")}}</dt>
 <dd>Returns the seconds (<code>0</code>–<code>59</code>) in the specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.getTime()")}}</dt>
 <dd>Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)</dd>
 <dt>{{jsxref("Date.prototype.getTimezoneOffset()")}}</dt>
 <dd>Returns the time-zone offset in minutes for the current locale.</dd>
 <dt>{{jsxref("Date.prototype.getUTCDate()")}}</dt>
 <dd>Returns the day (date) of the month (<code>1</code>–<code>31</code>) in the specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.getUTCDay()")}}</dt>
 <dd>Returns the day of the week (<code>0</code>–<code>6</code>) in the specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.getUTCFullYear()")}}</dt>
 <dd>Returns the year (4 digits for 4-digit years) in the specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.getUTCHours()")}}</dt>
 <dd>Returns the hours (<code>0</code>–<code>23</code>) in the specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.getUTCMilliseconds()")}}</dt>
 <dd>Returns the milliseconds (<code>0</code>–<code>999</code>) in the specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.getUTCMinutes()")}}</dt>
 <dd>Returns the minutes (<code>0</code>–<code>59</code>) in the specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.getUTCMonth()")}}</dt>
 <dd>Returns the month (<code>0</code>–<code>11</code>) in the specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.getUTCSeconds()")}}</dt>
 <dd>Returns the seconds (<code>0</code>–<code>59</code>) in the specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.getYear()")}}</dt>
 <dd>Returns the year (usually 2–3 digits) in the specified date according to local time. Use {{jsxref("Date.prototype.getFullYear()", "getFullYear()")}} instead.</dd>
 <dt>{{jsxref("Date.prototype.setDate()")}}</dt>
 <dd>Sets the day of the month for a specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.setFullYear()")}}</dt>
 <dd>Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.setHours()")}}</dt>
 <dd>Sets the hours for a specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.setMilliseconds()")}}</dt>
 <dd>Sets the milliseconds for a specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.setMinutes()")}}</dt>
 <dd>Sets the minutes for a specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.setMonth()")}}</dt>
 <dd>Sets the month for a specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.setSeconds()")}}</dt>
 <dd>Sets the seconds for a specified date according to local time.</dd>
 <dt>{{jsxref("Date.prototype.setTime()")}}</dt>
 <dd>Sets the {{jsxref("Date")}} object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC. Use negative numbers for times prior.</dd>
 <dt>{{jsxref("Date.prototype.setUTCDate()")}}</dt>
 <dd>Sets the day of the month for a specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.setUTCFullYear()")}}</dt>
 <dd>Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.setUTCHours()")}}</dt>
 <dd>Sets the hour for a specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.setUTCMilliseconds()")}}</dt>
 <dd>Sets the milliseconds for a specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.setUTCMinutes()")}}</dt>
 <dd>Sets the minutes for a specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.setUTCMonth()")}}</dt>
 <dd>Sets the month for a specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.setUTCSeconds()")}}</dt>
 <dd>Sets the seconds for a specified date according to universal time.</dd>
 <dt>{{jsxref("Date.prototype.setYear()")}}</dt>
 <dd>Sets the year (usually 2–3 digits) for a specified date according to local time. Use {{jsxref("Date.prototype.setFullYear()", "setFullYear()")}} instead.</dd>
 <dt>{{jsxref("Date.prototype.toDateString()")}}</dt>
 <dd>Returns the "date" portion of the {{jsxref("Date")}} as a human-readable string like <code>'Thu Apr 12 2018'</code>.</dd>
 <dt>{{jsxref("Date.prototype.toISOString()")}}</dt>
 <dd>Converts a date to a string following the ISO 8601 Extended Format.</dd>
 <dt>{{jsxref("Date.prototype.toJSON()")}}</dt>
 <dd>Returns a string representing the {{jsxref("Date")}} using {{jsxref("Date.prototype.toISOString()", "toISOString()")}}. Intended for use by {{jsxref("JSON.stringify()")}}.</dd>
 <dt>{{jsxref("Date.prototype.toGMTString()")}}</dt>
 <dd>Returns a string representing the {{jsxref("Date")}} based on the GMT (UTC) time zone. Use {{jsxref("Date.prototype.toUTCString()", "toUTCString()")}} instead.</dd>
 <dt>{{jsxref("Date.prototype.toLocaleDateString()")}}</dt>
 <dd>Returns a string with a locality sensitive representation of the date portion of this date based on system settings.</dd>
 <dt>{{jsxref("Date.prototype.toLocaleString()")}}</dt>
 <dd>Returns a string with a locality-sensitive representation of this date. Overrides the {{jsxref("Object.prototype.toLocaleString()")}} method.</dd>
 <dt>{{jsxref("Date.prototype.toLocaleTimeString()")}}</dt>
 <dd>Returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.</dd>
 <dt>{{jsxref("Date.prototype.toString()")}}</dt>
 <dd>Returns a string representing the specified {{jsxref("Date")}} object. Overrides the {{jsxref("Object.prototype.toString()")}} method.</dd>
 <dt>{{jsxref("Date.prototype.toTimeString()")}}</dt>
 <dd>Returns the "time" portion of the {{jsxref("Date")}} as a human-readable string.</dd>
 <dt>{{jsxref("Date.prototype.toUTCString()")}}</dt>
 <dd>Converts a date to a string using the UTC timezone.</dd>
 <dt>{{jsxref("Date.prototype.valueOf()")}}</dt>
 <dd>Returns the primitive value of a {{jsxref("Date")}} object. Overrides the {{jsxref("Object.prototype.valueOf()")}} method.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Several_ways_to_create_a_Date_object">Several ways to create a Date object</h3>

<p>The following examples show several ways to create JavaScript dates:</p>

<div class="note">
<p><strong>Note:</strong> Parsing of date strings with the <code>Date</code> constructor (and <code>Date.parse</code>, they are equivalent) is strongly discouraged due to browser differences and inconsistencies.</p>
</div>

<pre class="brush: js">let today = new Date()
let birthday = new Date('December 17, 1995 03:24:00')
let birthday = new Date('1995-12-17T03:24:00')
let birthday = new Date(1995, 11, 17)            // the month is 0-indexed
let birthday = new Date(1995, 11, 17, 3, 24, 0)
let birthday = new Date(628021800000)            // passing epoch timestamp
</pre>

<h3 id="To_get_Date_Month_and_Year_or_Time"> To get Date, Month and Year or Time</h3>

<pre class="brush: js">
const date = new Date();
const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
</pre>

<h3 id="Two_digit_years_map_to_1900_–_1999">Two digit years map to 1900 – 1999</h3>

<p>Values from <code>0</code> to <code>99</code> map to the years <code>1900</code> to <code>1999</code>. All other values are the actual year .</p>

<p>In order to create and get dates between the years <code>0</code> and <code>99</code> the {{jsxref("Date.prototype.setFullYear()")}} and {{jsxref("Date.prototype.getFullYear()")}} methods should be used.</p>

<pre class="brush: js">let date = new Date(98, 1)  // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

// Deprecated method; 98 maps to 1998 here as well
date.setYear(98)            // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

date.setFullYear(98)        // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)
</pre>

<h3 id="Calculating_elapsed_time">Calculating elapsed time</h3>

<p>The following examples show how to determine the elapsed time between two JavaScript dates in milliseconds.</p>

<p>Due to the differing lengths of days (due to daylight saving changeover), months, and years, expressing elapsed time in units greater than hours, minutes, and seconds requires addressing a number of issues, and should be thoroughly researched before being attempted.</p>

<pre class="brush: js">// Using Date objects
let start = Date.now()

// The event to time goes here:
doSomethingForALongTime()
let end = Date.now()
let elapsed = end - start // elapsed time in milliseconds
</pre>

<pre class="brush: js">// Using built-in methods
let start = new Date()

// The event to time goes here:
doSomethingForALongTime()
let end = new Date()
let elapsed = end.getTime() - start.getTime() // elapsed time in milliseconds
</pre>

<pre class="brush: js">// To test a function and get back its return
function printElapsedTime(fTest) {
  let nStartTime = Date.now(),
      vReturn = fTest(),
      nEndTime = Date.now()

  console.log(`Elapsed time: ${ String(nEndTime - nStartTime) } milliseconds`)
  return vReturn
}

let yourFunctionReturn = printElapsedTime(yourFunction)
</pre>

<div class="note">
<p><strong>Note:</strong> In browsers that support the {{domxref("Window.performance", "Web Performance API", "", 1)}}'s high-resolution time feature, {{domxref("Performance.now()")}} can provide more reliable and precise measurements of elapsed time than {{jsxref("Date.now()")}}.</p>
</div>

<h3 id="Get_the_number_of_seconds_since_the_ECMAScript_Epoch">Get the number of seconds since the ECMAScript Epoch</h3>

<pre class="brush: js">let seconds = Math.floor(Date.now() / 1000)
</pre>

<p>In this case, it's important to return only an integer—so a simple division won't do. It's also important to only return actually elapsed seconds. (That's why this code uses {{jsxref("Math.floor()")}}, and <em>not</em> {{jsxref("Math.round()")}}.)</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Date/Date", "Date()")}} constructor</li>
</ul>
