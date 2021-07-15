---
title: Intl.DateTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
tags:
  - DateTimeFormat
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.DateTimeFormat.formatToParts
---
<div>{{JSRef}}</div>

<p>The <strong><code>Intl.DateTimeFormat.prototype.formatToParts()</code></strong> method
  allows locale-aware formatting of strings produced by {{jsxref("Intl.DateTimeFormat")}}
  formatters.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">formatToParts(date)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>date</var></code> {{optional_inline}}</dt>
  <dd>The date to format.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An {{jsxref("Array")}} of objects containing the formatted date in parts.</p>

<h2 id="Description">Description</h2>

<p>The <code>formatToParts()</code> method is useful for custom formatting of date
  strings. It returns an {{jsxref("Array")}} of objects containing the locale-specific
  tokens from which it possible to build custom strings while preserving the
  locale-specific parts. The structure the <code>formatToParts()</code> method returns,
  looks like this:</p>

<pre class="brush: js">[
  { type: 'day', value: '17' },
  { type: 'weekday', value: 'Monday' }
]</pre>

<p>Possible types are the following:</p>

<dl>
  <dt>day</dt>
  <dd>The string used for the day, for example "<code>17</code>".</dd>
  <dt>dayPeriod</dt>
  <dd>The string used for the day period, for example, "<code>AM</code>",
    "<code>PM</code>", "<code>in the morning</code>", or "<code>noon</code>"</dd>
  <dt>era</dt>
  <dd>The string used for the era, for example "<code>BC</code>" or "<code>AD</code>".
  </dd>
  <dt>fractionalSecond</dt>
  <dd>The string used for the fractional seconds, for example "<code>0</code>" or
    "<code>00</code>" or "<code>000</code>".</dd>
  <dt>hour</dt>
  <dd>The string used for the hour, for example "<code>3</code>" or "<code>03</code>".
  </dd>
  <dt>literal</dt>
  <dd>The string used for separating date and time values, for example "<code>/</code>",
    "<code>,</code>", "<code>o'clock</code>", "<code>de</code>", etc.</dd>
  <dt>minute</dt>
  <dd>The string used for the minute, for example "<code>00</code>".</dd>
  <dt>month</dt>
  <dd>The string used for the month, for example "<code>12</code>".</dd>
  <dt>relatedYear</dt>
  <dd>The string used for the related 4-digit Gregorian year, in the event that the
    calendar's representation would be a yearName instead of a year, for example
    "<code>2019</code>".</dd>
  <dt>second</dt>
  <dd>The string used for the second, for example "<code>07</code>" or "<code>42</code>".
  </dd>
  <dt>timeZoneName</dt>
  <dd>The string used for the name of the time zone, for example "<code>UTC</code>".</dd>
  <dt>weekday</dt>
  <dd>The string used for the weekday, for example "<code>M</code>",
    "<code>Monday</code>", or "<code>Montag</code>".</dd>
  <dt>year</dt>
  <dd>The string used for the year, for example "<code>2012</code>" or "<code>96</code>".
  </dd>
  <dt>yearName</dt>
  <dd>The string used for the yearName in relevant contexts, for example
    "<code>geng-zi</code>"</dd>
</dl>

<h2 id="Polyfill">Polyfill</h2>

<p>A polyfill for this feature is available in the <a
    href="https://github.com/zbraniecki/proposal-intl-formatToParts">proposal
    repository</a>.</p>

<h2 id="Examples">Examples</h2>

<p><code>DateTimeFormat</code> outputs localized, opaque strings that cannot be
  manipulated directly:</p>

<pre class="brush: js">var date = Date.UTC(2012, 11, 17, 3, 0, 42);

var formatter = new Intl.DateTimeFormat('en-us', {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  fractionalSecondDigits: 3,
  hour12: true,
  timeZone: 'UTC'
});

formatter.format(date);
// "Monday, 12/17/2012, 3:00:42.000 AM"
</pre>

<p>However, in many User Interfaces there is a desire to customize the formatting of this
  string. The <code>formatToParts</code> method enables locale-aware formatting of strings
  produced by <code>DateTimeFormat</code> formatters by providing you the string in parts:
</p>

<pre class="brush: js">formatter.formatToParts(date);

// return value:
[
  { type: 'weekday',   value: 'Monday' },
  { type: 'literal',   value: ', '     },
  { type: 'month',     value: '12'     },
  { type: 'literal',   value: '/'      },
  { type: 'day',       value: '17'     },
  { type: 'literal',   value: '/'      },
  { type: 'year',      value: '2012'   },
  { type: 'literal',   value: ', '     },
  { type: 'hour',      value: '3'      },
  { type: 'literal',   value: ':'      },
  { type: 'minute',    value: '00'     },
  { type: 'literal',   value: ':'      },
  { type: 'second',    value: '42'     },
  { type: 'fractionalSecond', value: '000' },
  { type: 'literal',   value: ' '      },
  { type: 'dayPeriod', value: 'AM'     }
]
</pre>

<p>Now the information is available separately and it can be formatted and concatenated
  again in a customized way. For example by using {{jsxref("Array.prototype.map()")}}, <a
    href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow
    functions</a>, a <a
    href="/en-US/docs/Web/JavaScript/Reference/Statements/switch">switch statement</a>, <a
    href="/en-US/docs/Web/JavaScript/Reference/Template_literals">template literals</a>,
  and {{jsxref("Array.prototype.join()")}}.</p>

<pre class="brush: js">var dateString = formatter.formatToParts(date).map(({type, value}) =&gt; {
  switch (type) {
    case 'dayPeriod': return `&lt;b&gt;${value}&lt;/b&gt;`;
    default : return value;
  }
}).join('');
</pre>

<p>This will make the day period bold, when using the <code>formatToParts()</code> method.
</p>

<pre class="brush: js">console.log(formatter.format(date));
// "Monday, 12/17/2012, 3:00:42.000 AM"

console.log(dateString);
// "Monday, 12/17/2012, 3:00:42.000 &lt;b&gt;AM&lt;/b&gt;"</pre>

<h3 id="Named_Years_and_Mixed_calendars">Named Years and Mixed calendars</h3>

<p>In some cases, calendars use named years. Chinese and Tibetan calendars, for example,
  use a 60-year <a href="https://en.wikipedia.org/wiki/Sexagenary_cycle">sexagenary
    cycle</a> of named years. These years are disambiguated by relationship to
  corresponding years on the Gregorian calendar. When this is the case, the result of
  <code>formatToParts()</code> will contain an entry for <code>relatedYear</code> when a
  year would normally be present, containing the 4-digit Gregorian year, instead of an
  entry for <code>year</code>. Setting an entry in the bag for <code>year</code> (with any
  value) will yield both the and the <code>yearName</code> Gregorian
  <code>relatedYear</code>:</p>

<pre class="brush: js">let opts = { year: "numeric", month: "numeric", day: "numeric" };
let df = new Intl.DateTimeFormat("zh-u-ca-chinese", opts);
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// return value
[
  { type: 'relatedYear', value: '2012' },
  { type: 'literal', value: '年' },
  { type: 'month', value: '十一月' },
  { type: 'day', value: '4' }
]
</pre>

<p>If the <code>year</code> option is not set in the bag (to any value), the result will
  include only the <code>relatedYear</code>:</p>

<pre class="brush: js">let df = new Intl.DateTimeFormat("zh-u-ca-chinese");
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// return value
[
   { type: 'relatedYear', value: '2012' },
   { type: 'literal', value: '年' },
   { type: 'month', value: '十一月' },
   { type: 'day', value: '4' }
]
</pre>

<p>In cases where the <code>year</code> would be output, <code>.format()</code> may
  commonly present these side-by-side:</p>

<pre class="brush: js">let df = new Intl.DateTimeFormat("zh-u-ca-chinese", {year: "numeric"});
df.format(Date.UTC(2012, 11, 17, 3, 0, 42));

// return value
2012壬辰年</pre>

<p>This also makes it possible to mix locale and calendar in both <code>format</code>:</p>

<pre class="brush: js">let df = new Intl.DateTimeFormat("en-u-ca-chinese", {year: "numeric"});
let date = Date.UTC(2012, 11, 17, 3, 0, 42);
df.format(date);

// return value
2012(ren-chen)
</pre>

<p>And <code>formatToParts</code>:</p>

<pre class="brush: js">let opts = {month: 'numeric', day: 'numeric', year: "numeric"};
let df = new Intl.DateTimeFormat("en-u-ca-chinese", opts);
let date = Date.UTC(2012, 11, 17, 3);
df.formatToParts(date)

// return value
[
  { type: 'month', value: '11' },
  { type: 'literal', value: '/' },
  { type: 'day', value: '4' },
  { type: 'literal', value: '/' },
  { type: 'relatedYear', value: '2012' }
]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Intl.DateTimeFormat")}}</li>
  <li>{{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}</li>
  <li>{{jsxref("Date.prototype.toLocaleString()")}}</li>
  <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
  <li>{{jsxref("Date.prototype.toLocaleTimeString()")}}</li>
</ul>
