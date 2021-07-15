---
title: Intl.Locale.prototype.numeric
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Locale
  - Localization
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.Locale.numeric
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <strong><code>Intl.Locale.prototype.numeric</code></strong> property is an accessor property that returns whether the locale has special collation handling for numeric characters.</span></p>

<h2 id="Description">Description</h2>

<p>Like {{jsxref("Intl/Locale/caseFirst", "Intl.Locale.caseFirst")}}, <code>numeric</code> represents a modification to the collation rules utilized by the locale. <code>numeric</code> is a {{jsxref("boolean", "Boolean")}} value, which means that it can be either <code>true</code> or <code>false</code>. If <code>numeric</code> is set to <code>false</code>, there will be no special handling of numeric values in strings. If <code>numeric</code> is set to <code>true</code>, then the locale will take numeric characters into account when collating strings. This special numeric handling means that sequences of decimal digits will be compared as numbers. For example, the string "A-21" will be considered less than "A-123".</p>

<h2 id="Examples">Examples</h2>

<h3 id="Setting_the_numeric_value_via_the_locale_string">Setting the numeric value via the locale string</h3>

<p>In the <a href="https://www.unicode.org/reports/tr35/" rel="noopener">Unicode locale string spec</a>, the values that <code>numeric</code> represents correspond to the key <code>kn</code>. <code>kn</code> is considered a locale string "extension subtag". These subtags add additional data about the locale, and are added to locale identifiers by using the <code>-u</code> extension key. Thus, the <code>numeric</code> value can be added to the initial locale identifier string that is passed into the {{jsxref("Intl/Locale/Locale", "Locale")}} constructor. To set the <code>numeric</code> value, first add the <code>-u</code> extension key to the string. Next, add the <code>-kn</code> extension key to indicate that you are adding a value for <code>numeric</code>. Finally, add the <code>numeric</code> value to the string. If you want to set <code>numeric</code> to <code>true</code>, adding the <code>kn</code> key will suffice. To set the value to <code>false</code>, you must specify in by adding "<code>false</code>" after the <code>kn</code> key.</p>

<pre class="brush: js">let numericViaStr = new Intl.Locale("fr-Latn-FR-u-kn-false");
console.log(numericStr.numeric); // Prints "false"</pre>

<h3 id="Setting_the_numeric_value_via_the_configuration_object_argument">Setting the <code>numeric</code> value via the configuration object argument</h3>

<p>The {{jsxref("Intl/Locale/Locale", "Intl.Locale")}} constructor has an optional configuration object argument, which can be used to pass extension types. Set the <code>numeric</code> property of the configuration object to your desired <code>numeric</code> value and pass it into the constructor.</p>

<pre class="brush: js">let numericViaObj= new Intl.Locale("en-Latn-US", {numeric: true});
console.log(us12hour.numeric); // Prints "true"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>

<h2 id="See_also">See also</h2>

<ul>
	<li>{{jsxref("Intl.Locale")}}</li>
</ul>
