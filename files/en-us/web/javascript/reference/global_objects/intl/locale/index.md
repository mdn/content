---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
tags:
  - Class
  - Internationalization
  - Intl
  - JavaScript
  - Locale
  - Reference
browser-compat: javascript.builtins.Intl.Locale
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <strong><code>Intl.Locale</code></strong> object is a standard built-in property of the Intl object that represents a Unicode locale identifier.</span></p>

<div>{{EmbedInteractiveExample("pages/js/intl-locale.html")}}</div>
<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

<h2 id="Description">Description</h2>

<p>The <strong><code>Intl.Locale</code></strong> object was created to allow for easier manipulation of Unicode locales. Unicode represents locales with a string, called a <em>locale identifier</em>. The locale identifier consists of a <em>language identifier</em> and <em>extension tags</em>. Language identifiers are the core of the locale, consisting of <em>language</em>, <em>script</em>, and <em>region subtags</em>. Additional information about the locale is stored in the optional <em>extension tags</em>. Extension tags hold information about locale aspects such as calendar type, clock type, and numbering system type.</p>

<p>Traditionally, the Intl API used strings to represent locales, just as Unicode does. This is a simple and lightweight solution that works well. Adding a Locale class, however, adds ease of parsing and manipulating the language, script, and region, as well as extension tags.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}</dt>
 <dd>Creates a new <code>Locale</code> object.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{jsxref("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}</dt>
 <dd>Returns basic, core information about the <code>Locale</code> in the form of a substring of the complete data string.</dd>
 <dt>{{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}</dt>
 <dd>Returns the part of the <code>Locale</code> that indicates the Locale's calendar era.</dd>
 <dt>{{jsxref("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}</dt>
 <dd>Returns whether case is taken into account for the locale's collation rules.</dd>
 <dt>{{jsxref("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}</dt>
 <dd>Returns the collation type for the <code>Locale</code>, which is used to order strings according to the locale's rules.</dd>
 <dt>{{jsxref("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}</dt>
 <dd>Returns the time keeping format convention used by the locale.</dd>
 <dt>{{jsxref("Intl/Locale/language", "Intl.Locale.prototype.language")}}</dt>
 <dd>Returns the language associated with the locale.</dd>
 <dt>{{jsxref("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}</dt>
 <dd>Returns the numeral system used by the locale.</dd>
 <dt>{{jsxref("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}</dt>
 <dd>Returns whether the locale has special collation handling for numeric characters.</dd>
 <dt>{{jsxref("Intl/Locale/region", "Intl.Locale.prototype.region")}}</dt>
 <dd>Returns the region of the world (usually a country) associated with the locale.</dd>
 <dt>{{jsxref("Intl/Locale/script", "Intl.Locale.prototype.script")}}</dt>
 <dd>Returns the script used for writing the particular language used in the locale.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}</dt>
 <dd>Gets the most likely values for the language, script, and region of the locale based on existing values.</dd>
 <dt>{{jsxref("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}</dt>
 <dd>Attempts to remove information about the locale that would be added by calling {{jsxref("Intl/Locale/maximize", "Locale.maximize()")}}.</dd>
 <dt>{{jsxref("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}</dt>
 <dd>Returns the Locale's full locale identifier string.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Basic_usage">Basic usage</h3>

<p>At its very simplest, the {{jsxref("Intl/Locale/Locale", "Intl.Locale")}} constructor takes a locale identifier string as its argument:</p>

<pre class="brush: js">let us = new Intl.Locale('en-US');</pre>

<h3 id="Using_the_Locale_constructor_with_an_options_object">Using the Locale constructor with an options object</h3>

<p>The constructor also takes an optional configuration object argument, which can contain any of several extension types. For example, set the {{jsxref("Intl/Locale/hourCycle", "hourCycle")}} property of the configuration object to your desired hour cycle type, and then pass it into the constructor:</p>

<pre class="brush: js">let us12hour = new Intl.Locale("en-US", {hourCycle: "h12"});
console.log(us12hour.hourCycle); // Prints "h12"</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Intl")}}</li>
 <li><a href="https://formatjs.io/docs/polyfills/intl-locale">The Intl.Locale Polyfill</a></li>
 <li><a href="https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers">Unicode locale identifiers spec</a></li>
</ul>
