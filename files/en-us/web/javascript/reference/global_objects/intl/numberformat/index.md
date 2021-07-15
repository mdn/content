---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
tags:
  - Class
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - NumberFormat
  - Reference
browser-compat: javascript.builtins.Intl.NumberFormat
---
<div>{{JSRef}}</div>

<p>The <strong><code>Intl.NumberFormat</code></strong> object enables language-sensitive number formatting.</p>

<div>{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}</div>
<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

<h2 id="Constructor">Constructor</h2>

<dl>
	<dt>{{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}</dt>
	<dd>Creates a new <code>NumberFormat</code> object.</dd>
</dl>

<h2 id="Static_methods">Static methods</h2>

<dl>
	<dt>{{jsxref("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}</dt>
	<dd>Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
	<dt>{{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}</dt>
	<dd>Getter function that formats a number according to the locale and formatting options of this {{jsxref("Intl/NumberFormat")}} object.</dd>
	<dt>{{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}</dt>
	<dd>Returns an {{jsxref("Array")}} of objects representing the number string in parts that can be used for custom locale-aware formatting.</dd>
	<dt>{{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}</dt>
	<dd>Returns a new object with properties reflecting the locale and collation options computed during initialization of the object.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Basic_usage">Basic usage</h3>

<p>In basic use without specifying a locale, a formatted string in the default locale and with default options is returned.</p>

<pre class="brush: js">var number = 3500;

console.log(new Intl.NumberFormat().format(number));
// → '3,500' if in US English locale
</pre>

<h3 id="Using_locales">Using locales</h3>

<p>This example shows some of the variations in localized number formats. In order to get the format of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the <code>locales</code> argument:</p>

<pre class="brush: js">var number = 123456.789;

// German uses comma as decimal separator and period for thousands
console.log(new Intl.NumberFormat('de-DE').format(number));
// → 123.456,789

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(new Intl.NumberFormat('ar-EG').format(number));
// → ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(new Intl.NumberFormat('en-IN').format(number));
// → 1,23,456.789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec').format(number));
// → 一二三,四五六.七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(new Intl.NumberFormat(['ban', 'id']).format(number));
// → 123.456,789
</pre>

<h3 id="Using_options">Using options</h3>

<p>The results can be customized using the <code>options</code> argument:</p>

<pre class="brush: js">var number = 123456.789;

// request a currency format
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
// → 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
// → ￥123,457

// limit to three significant digits
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// → 1,23,000
</pre>

<h3 id="Using_style_and_unit">Using style and unit</h3>

<pre class="brush: js">console.log(new Intl.NumberFormat('pt-PT',  {
    style: 'unit',
    unit: 'kilometer-per-hour'
}).format(50));
// → 50 km/h

console.log((16).toLocaleString('en-GB', {
    style: 'unit',
    unit: 'liter',
    unitDisplay: 'long'
}));
// → 16 litres
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p><a href="https://formatjs.io/docs/polyfills/intl-numberformat">formatjs Intl.NumberFormat polyfill</a></p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>

<h2 id="See_also">See also</h2>

<ul>
	<li>{{jsxref("Intl")}}</li>
</ul>
