---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
tags:
  - Internationalization
  - JavaScript
  - Method
  - Number
  - Prototype
browser-compat: javascript.builtins.Number.toLocaleString
---
<div>{{JSRef}}</div>

<p>The <strong><code>toLocaleString()</code></strong> method returns a string with a
  language-sensitive representation of this number.</p>

<div>{{EmbedInteractiveExample("pages/js/number-tolocalestring.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The <code>locales</code> and <code>options</code> arguments customize the behavior of
  the function and let applications specify the language whose formatting conventions
  should be used. In implementations, which ignore the <code>locales</code> and
  <code>options</code> arguments, the locale used and the form of the string returned are
  entirely implementation dependent.</p>

<div>See the <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat"><code>Intl.NumberFormat()</code>
    constructor</a> for details on these parameters and how to use them.</div>

<h3 id="Return_value">Return value</h3>

<p>A string with a language-sensitive representation of the given number.</p>

<h2 id="Performance">Performance</h2>

<p>When formatting large numbers of numbers, it is better to create a
  {{jsxref("Intl/NumberFormat")}} object and use the function provided by its
  {{jsxref("Intl/NumberFormat/format")}} property.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_toLocaleString">Using <code>toLocaleString</code></h3>

<p>In basic use without specifying a locale, a formatted string in the default locale and
  with default options is returned.</p>

<pre class="brush: js">var number = 3500;

console.log(number.toLocaleString()); // Displays "3,500" if in U.S. English locale
</pre>

<h3 id="Checking_for_support_for_locales_and_options_arguments">Checking for support for
  <code>locales</code> and <code>options</code> arguments</h3>

<p>The <code>locales</code> and <code>options</code> arguments are not supported in all
  browsers yet. To check for support in ES5.1 and later implementations, the requirement
  that illegal language tags are rejected with a {{jsxref("Global_Objects/RangeError",
  "RangeError")}} exception can be used:</p>

<pre class="brush: js">function toLocaleStringSupportsLocales() {
  var number = 0;
  try {
    number.toLocaleString('i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
</pre>

<p>Prior to ES5.1, implementations were not required to throw a range error exception if
  <code>toLocaleString</code> is called with arguments.</p>

<p>A check that works in all hosts, including those supporting ECMA-262 prior to ed 5.1,
  is to test for the features specified in ECMA-402 that are required to support regional
  options for <code>Number.prototype.toLocaleString</code> directly:</p>

<pre class="brush: js">function toLocaleStringSupportsOptions() {
  return !!(typeof Intl == 'object' &amp;&amp; Intl &amp;&amp; typeof Intl.NumberFormat == 'function');
}
</pre>

<p>This tests for a global <code>Intl</code> object, checks that it's not
  <code>null</code> and that it has a <code>NumberFormat</code> property that is a
  function.</p>

<h3 id="Using_locales">Using <code>locales</code></h3>

<p>This example shows some of the variations in localized number formats. In order to get
  the format of the language used in the user interface of your application, make sure to
  specify that language (and possibly some fallback languages) using the
  <code>locales</code> argument:</p>

<pre class="brush: js">var number = 123456.789;

// German uses comma as decimal separator and period for thousands
console.log(number.toLocaleString('de-DE'));
// → 123.456,789

// Arabic in most Arabic speaking countries uses <a href="https://en.wikipedia.org/wiki/Eastern_Arabic_numerals">Eastern Arabic</a> digits
console.log(number.toLocaleString('ar-EG'));
// → ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(number.toLocaleString('en-IN'));
// → 1,23,456.789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(number.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
// → 一二三,四五六.七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(number.toLocaleString(['ban', 'id']));
// → 123.456,789
</pre>

<h3 id="Using_options">Using <code>options</code></h3>

<p>The results provided by <code>toLocaleString</code> can be customized using the
  <code>options</code> argument:</p>

<pre class="brush: js">var number = 123456.789;

// request a currency format
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,457

// limit to three significant digits
console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,000

// Use the host default language with options for number formatting
var num = 30000.65;
console.log(num.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
// → "30,000.65" where English is the default language, or
// → "30.000,65" where German is the default language, or
// → "30 000,65" where French is the default language
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Number.prototype.toString()")}}</li>
</ul>
