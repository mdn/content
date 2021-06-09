---
title: Intl.NumberFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - NumberFormat
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.NumberFormat.formatToParts
---
<div>{{JSRef}}</div>

<p>The <strong><code>Intl.Numberformat.prototype.formatToParts()</code></strong> method
	allows locale-aware formatting of strings produced by <code>NumberFormat</code>
	formatters.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
formatToParts()
formatToParts(number)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
	<dt><code><var>number</var></code> {{optional_inline}}</dt>
	<dd>A {{jsxref("Number")}} or {{jsxref("BigInt")}} to format.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An {{jsxref("Array")}} of objects containing the formatted number in parts.</p>

<h2 id="Description">Description</h2>

<p>The <code>formatToParts()</code> method is useful for custom formatting of number
	strings. It returns an {{jsxref("Array")}} of objects containing the locale-specific
	tokens from which it possible to build custom strings while preserving the
	locale-specific parts. The structure the <code>formatToParts()</code> method returns,
	looks like this:</p>

<pre class="brush: js">[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" }
]</pre>

<p>Possible types are the following:</p>

<dl>
	<dt>currency</dt>
	<dd>The currency string, such as the symbols "$" and "€" or the name "Dollar", "Euro"
		depending on how <code>currencyDisplay</code> is specified.</dd>
	<dt>decimal</dt>
	<dd>The decimal separator string (".").</dd>
	<dt>fraction</dt>
	<dd>The fraction number.</dd>
	<dt>group</dt>
	<dd>The group separator string (",").</dd>
	<dt>infinity</dt>
	<dd>The {{jsxref("Infinity")}} string ("∞").</dd>
	<dt>integer</dt>
	<dd>The integer number.</dd>
	<dt>literal</dt>
	<dd>Any literal strings or whitespace in the formatted number.</dd>
	<dt>minusSign</dt>
	<dd>The minus sign string ("-").</dd>
	<dt>nan</dt>
	<dd>The {{jsxref("NaN")}} string ("NaN").</dd>
	<dt>plusSign</dt>
	<dd>The plus sign string ("+").</dd>
	<dt>percentSign</dt>
	<dd>The percent sign string ("%").</dd>
	<dt>unit</dt>
	<dd>The unit string, such as the "l" or "litres", depending on how
		<code>unitDisplay</code> is specified.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Comparing_format_and_formatToParts">Comparing format and formatToParts</h3>

<p><code>NumberFormat</code> outputs localized, opaque strings that cannot be manipulated
	directly:</p>

<pre class="brush: js">var number = 3500;

var formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
});

formatter.format(number);
// "3.500,00 €"
</pre>

<p>However, in many User Interfaces there is a desire to customize the formatting of this
	string. The <code>formatToParts</code> method enables locale-aware formatting of
	strings produced by <code>NumberFormat</code> formatters by providing you the string
	in parts:</p>

<pre class="brush: js">formatter.formatToParts(number);

// return value:
[
  { type: "integer",  value: "3"   },
  { type: "group",    value: "."   },
  { type: "integer",  value: "500" },
  { type: "decimal",  value: ","   },
  { type: "fraction", value: "00"  },
  { type: "literal",  value: " "   },
  { type: "currency", value: "€"   }
]
</pre>

<p>Now the information is available separately and it can be formatted and concatenated
	again in a customized way. For example by using {{jsxref("Array.prototype.map()")}},
	<a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow
		functions</a>, a <a
		href="/en-US/docs/Web/JavaScript/Reference/Statements/switch">switch
		statement</a>, <a
		href="/en-US/docs/Web/JavaScript/Reference/Template_literals">template
		literals</a>, and {{jsxref("Array.prototype.reduce()")}}.</p>

<pre class="brush: js">var numberString = formatter.formatToParts(number).map(({type, value}) =&gt; {
  switch (type) {
    case 'currency': return `&lt;strong&gt;${value}&lt;/strong&gt;`;
    default : return value;
  }
}).reduce((string, part) =&gt; string + part);
</pre>

<p>This will make the currency bold, when using the <code>formatToParts()</code> method.
</p>

<pre class="brush: js">console.log(numberString);
// "3.500,00 &lt;strong&gt;€&lt;/strong&gt;"</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>

<h2 id="See_also">See also</h2>

<ul>
	<li>{{jsxref("Intl.NumberFormat")}}</li>
	<li>{{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format")}}</li>
	<li>Formatting dates: {{jsxref("Intl/DateTimeFormat/formatToParts",
		"Intl.DateTimeFormat.prototype.formatToParts()")}}</li>
</ul>
