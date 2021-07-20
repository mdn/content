---
title: Intl.DisplayNames.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
tags:
  - DisplayNames
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.DisplayNames.resolvedOptions
---
<div>{{JSRef}}</div>

<p>The <code><strong>Intl.DisplayNames.prototype.resolvedOptions()</strong></code> method
	returns a new object with properties reflecting the locale and style formatting
	options computed during the construction of the current {{jsxref("Intl/DisplayNames")}}
	object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">resolvedOptions()</pre>

<h3 id="Return_value">Return value</h3>

<p>An object with properties reflecting the locale and formatting options computed during
	the construction of the given {{jsxref("Intl/DisplayNames")}} object.</p>

<h2 id="Description">Description</h2>

<p>The object returned by <code>resolvedOptions()</code> has the following properties:</p>

<dl>
	<dt><code>locale</code></dt>
	<dd>The BCP 47 language tag for the locale actually used. If any Unicode extension
		values were requested in the input BCP 47 language tag that led to this locale,
		the key-value pairs that were requested and are supported for this locale are
		included in <code>locale</code>.</dd>
	<dt><code>style</code></dt>
	<dd>The value provided for this property in the <code>options</code> argument of the
		constructor or the default value ("<code>long</code>"). Its value is either
		"<code>long</code>", "<code>short</code>", or "<code>narrow</code>".</dd>
	<dt><code>type</code></dt>
	<dd>The value provided for this property in the <code>options</code> argument of the
		constructor or the default value ("<code>language</code>"). Its value is either
		"<code>language</code>", "<code>region</code>", "<code>script</code>", or
		"<code>currency</code>".</dd>
	<dt><code>fallback</code></dt>
	<dd>The value provided for this property in the options argument of the constructor or
		the default value ("<code>code</code>"). Its value is either "<code>code</code>"
		or "<code>none</code>".</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_resolvedOptions">Using resolvedOptions</h3>

<pre class="brush: js">const displayNames = new Intl.DisplayNames(['de-DE'], {type: 'region'});

const usedOptions = displayNames.resolvedOptions();
console.log(usedOptions.locale);   // "de-DE"
console.log(usedOptions.style);    // "long"
console.log(usedOptions.type);     // "region"
console.log(usedOptions.fallback); // "code"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>

<h2 id="See_also">See also</h2>

<ul>
	<li>{{jsxref("Intl.DisplayNames")}}</li>
</ul>
