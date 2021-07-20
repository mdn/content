---
title: Intl.RelativeTimeFormat.prototype.resolvedOptions()
slug: >-
  Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
  - RelativeTimeFormat
browser-compat: javascript.builtins.Intl.RelativeTimeFormat.resolvedOptions
---
<div>{{JSRef}}</div>

<p>The <strong><code>Intl.RelativeTimeFormat.prototype.resolvedOptions()</code></strong> method returns a new object with properties reflecting the locale and relative time formatting options computed during initialization of this {{jsxref("Intl/RelativeTimeFormat")}} object.</p>

<div>{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-resolvedoptions.html")}}</div>
<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">resolvedOptions()</pre>

<h3 id="Return_value">Return value</h3>

<p>A new object with properties reflecting the locale and number formatting options computed during the initialization of the given {{jsxref("Intl/RelativeTimeFormat")}} object.</p>

<h2 id="Description">Description</h2>

<p>The resulting object has the following properties:</p>

<dl>
	<dt><code>locale</code></dt>
	<dd>The BCP 47 language tag for the locale actually used. If any Unicode extension values were requested in the input BCP 47 language tag that led to this locale, the key-value pairs that were requested and are supported for this locale are included in <code>locale</code>.</dd>
	<dt><code>style</code></dt>
	<dd>The length of the internationalized message. Possible values are:
		<ul>
			<li>"<code>long</code>" (default, e.g., <code>in 1 month</code>)</li>
			<li>"<code>short</code>" (e.g., <code>in 1 mo.</code>),</li>
			<li>or "<code>narrow</code>" (e.g., <code>in 1 mo.</code>). The narrow style could be similar to the short style for some locales.</li>
		</ul>
	</dd>
	<dt><code>numeric</code></dt>
	<dd>The format of output message. Possible values are:
		<ul>
			<li>"<code>always</code>" (default, e.g., <code>1 day ago</code>),</li>
			<li>or "<code>auto</code>" (e.g., <code>yesterday</code>). The "<code>auto</code>" value allows to not always have to use numeric values in the output.</li>
		</ul>
	</dd>
	<dt><code>numberingSystem</code></dt>
	<dd>The value requested using the Unicode extension key "<code>nu</code>" or filled in as a default.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_resolvedOptions_method">Using the <code>resolvedOptions</code> method</h3>

<pre class="brush: js">var de = new Intl.RelativeTimeFormat('de-DE');
var usedOptions = de.resolvedOptions();

usedOptions.locale;          // "de-DE"
usedOptions.style;           // "long"
usedOptions.numeric;         // "always"
usedOptions.numberingSystem; // "latn"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>

<h2 id="See_also">See also</h2>

<ul>
	<li>{{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}</li>
</ul>
