---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
tags:
- Internationalization
- JavaScript
- Method
- Prototype
- Reference
- String
browser-compat: javascript.builtins.String.localeCompare
---
<div>{{JSRef}}</div>

<p>The <strong><code>localeCompare()</code></strong> method returns a number indicating
  whether a reference string comes before, or after, or is the same as the given string in
  sort order.</p>

<div>{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}</div>

<p>The new <code><var>locales</var></code> and <code><var>options</var></code> arguments
  let applications specify the language whose sort order should be used and customize the
  behavior of the function. In older implementations, which ignore the
  <code><var>locales</var></code> and <code><var>options</var></code> arguments, the
  locale and sort order used are entirely implementation-dependent.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>compareString</var></code></dt>
  <dd>The string against which the <code><var>referenceStr</var></code> is compared.</dd>
  <dt><code><var>locales</var></code> and <code><var>options</var></code></dt>
  <dd>
    <p>These arguments customize the behavior of the function and let applications specify
      the language whose formatting conventions should be used. In implementations which
      ignore the <code><var>locales</var></code> and
      <code><var>options</var></code> arguments, the locale used and the form of the
      string returned are entirely implementation-dependent.</p>

    <p>See the <a
        href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/Collator"><code>Intl.Collator()</code>
        constructor</a> for details on these parameters and how to use them.</p>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <strong>negative</strong> number if <code><var>referenceStr</var></code> occurs
  before <code><var>compareString</var></code>; <strong>positive</strong> if the
  <code><var>referenceStr</var></code> occurs after <code><var>compareString</var></code>;
  <code>0</code> if they are equivalent.</p>

<h2 id="Description">Description</h2>

<p>Returns an integer indicating whether the <code><var>referenceStr</var></code> comes
  before, after or is equivalent to the <code><var>compareString</var></code>.</p>

<ul>
  <li>Negative when the <code><var>referenceStr</var></code> occurs before
    <code><var>compareString</var></code></li>
  <li>Positive when the <code><var>referenceStr</var></code> occurs after
    <code><var>compareString</var></code></li>
  <li>Returns <code>0</code> if they are equivalent</li>
</ul>

<div class="notecard warning">
  <p><strong>Warning:</strong> Do not rely on exact return values of <code>-1</code> or <code>1</code>!</p>

  <p>Negative and positive integer results vary between browsers (as well as between
    browser versions) because the W3C specification only mandates negative and positive
    values. Some browsers may return <code>-2</code> or <code>2</code>, or even some other
    negative or positive value.</p>
</div>

<h2 id="Performance">Performance</h2>

<p>When comparing large numbers of strings, such as in sorting large arrays, it is better
  to create an {{jsxref("Global_Objects/Collator", "Intl.Collator")}} object and use the
  function provided by its {{jsxref("Collator.prototype.compare", "compare")}} property.
</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_localeCompare">Using <code>localeCompare()</code></h3>

<pre class="brush: js">// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a'); // 0
</pre>

<h3 id="Sort_an_array">Sort an array</h3>

<p><code>localeCompare()</code> enables case-insensitive sorting for an array.</p>

<pre class="brush: js">let items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort( (a, b) =&gt; a.localeCompare(b, 'fr', {ignorePunctuation: true}));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
</pre>

<h3 id="Check_browser_support_for_extended_arguments">Check browser support for extended
  arguments</h3>

<p>The <code><var>locales</var></code> and <code><var>options</var></code> arguments are
  not supported in all browsers yet.</p>

<p>To check whether an implementation supports them, use the <code>"i"</code> argument (a
  requirement that illegal language tags are rejected) and look for a
  {{jsxref("RangeError")}} exception:</p>

<pre class="brush: js">function localeCompareSupportsLocales() {
  try {
    'foo'.localeCompare('bar', 'i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
</pre>

<h3 id="Using_locales">Using <code>locales</code></h3>

<p>The results provided by <code>localeCompare()</code> vary between languages. In order
  to get the sort order of the language used in the user interface of your application,
  make sure to specify that language (and possibly some fallback languages) using the
  <code><var>locales</var></code> argument:</p>

<pre class="brush: js">console.log('ä'.localeCompare('z', 'de')); // a negative value: in German, ä sorts before z
console.log('ä'.localeCompare('z', 'sv')); // a positive value: in Swedish, ä sorts after z
</pre>

<h3 id="Using_options">Using <code>options</code></h3>

<p>The results provided by <code>localeCompare()</code> can be customized using the
  <code><var>options</var></code> argument:</p>

<pre class="brush: js">// in German, ä has a as the base letter
console.log('ä'.localeCompare('a', 'de', { sensitivity: 'base' })); // 0

// in Swedish, ä and a are separate base letters
console.log('ä'.localeCompare('a', 'sv', { sensitivity: 'base' })); // a positive value
</pre>

<h3 id="Numeric_sorting">Numeric sorting</h3>

<pre class="brush: js">// by default, "2" &gt; "10"
console.log("2".localeCompare("10")); // 1

// numeric using options:
console.log("2".localeCompare("10", undefined, {numeric: true})); // -1

// numeric using locales tag:
console.log("2".localeCompare("10", "en-u-kn-true")); // -1
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Global_Objects/Collator", "Intl.Collator")}}</li>
</ul>
