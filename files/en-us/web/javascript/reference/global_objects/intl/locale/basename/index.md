---
title: Intl.Locale.prototype.baseName
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Locale
  - Localization
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.Locale.baseName
---
<div>{{JSRef}}</div>

<p>The <strong><code>Intl.Locale.prototype.baseName</code></strong> property returns a substring of the <code>Locale</code>'s string representation, containing core information about the <code>Locale</code>.</p>

<h2 id="Description">Description</h2>

<p>An {{jsxref("Intl/Locale", "Intl.Locale")}} object represents a parsed local and options for that locale. The <code>baseName</code> property returns basic, core information about the Locale in the form of a substring of the complete data string. Specifically, the property returns the substring containing the language, and the script and region if available.</p>

<p><code>baseName</code> returns the <code>language ["-" script] ["-" region] *("-" variant)</code> subsequence of the <a href="https://www.unicode.org/reports/tr35/#Identifiers">unicode_language_id grammar</a>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Basic_Example">Basic Example</h3>

<pre class="brush: js">let myLoc = new Intl.Locale("fr-Latn-CA"); // Sets locale to Canadian French
console.log(myLoc.toString()); // Prints out "fr-Latn-CA-u-ca-gregory"
console.log(myLoc.baseName); // Prints out "fr-Latn-CA"</pre>

<h3 id="Example_with_options_in_the_input_string">Example with options in the input string</h3>

<pre class="brush: js">// Sets language to Japanese, region to Japan,

// calendar to Gregorian, hour cycle to 24 hours
let japan = new Intl.Locale("ja-JP-u-ca-gregory-hc-24");
console.log(japan.toString()); // Prints out "ja-JP-u-ca-gregory-hc-h24"
console.log(japan.baseName); // Prints out "ja-JP"</pre>

<h3 id="Example_with_options_that_override_input_string">Example with options that override input string</h3>

<pre class="brush: js">// Input string indicates language as Dutch and region as Belgium,

// but options object overrides the region and sets it to the Netherlands
let dutch = new Intl.Locale("nl-Latn-BE", {region: "NL"});

console.log(dutch.baseName); // Prints out "nl-Latn-NL"</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>

<h2 id="See_also">See also</h2>

<ul>
	<li>{{jsxref("Intl.Locale")}}</li>
</ul>
