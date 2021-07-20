---
title: String.prototype.normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
tags:
- ECMAScript 2015
- JavaScript
- Method
- Prototype
- Reference
- String
- Unicode
browser-compat: javascript.builtins.String.normalize
---
<div>{{JSRef}}</div>

<p>The <strong><code>normalize()</code></strong> method returns the Unicode Normalization
  Form of the string.</p>

<div>{{EmbedInteractiveExample("pages/js/string-normalize.html", "taller")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
normalize()
normalize(form)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>form</var></code> {{optional_inline}}</dt>
  <dd>
    <p>One of <code>"NFC"</code>, <code>"NFD"</code>, <code>"NFKC"</code>, or
      <code>"NFKD"</code>, specifying the Unicode Normalization Form. If omitted or
      {{jsxref("undefined")}}, <code>"NFC"</code> is used.</p>

    <p>These values have the following meanings:</p>

    <dl>
      <dt><code>"NFC"</code></dt>
      <dd>Canonical Decomposition, followed by Canonical Composition.</dd>
      <dt><code>"NFD"</code></dt>
      <dd>Canonical Decomposition.</dd>
      <dt><code>"NFKC"</code></dt>
      <dd>Compatibility Decomposition, followed by Canonical Composition.</dd>
      <dt><code>"NFKD"</code></dt>
      <dd>Compatibility Decomposition.</dd>
    </dl>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A string containing the Unicode Normalization Form of the given string.</p>

<h3 id="Errors_thrown">Errors thrown</h3>

<dl>
  <dt>{{jsxref("RangeError")}}</dt>
  <dd>A {{jsxref("RangeError")}} is thrown if <code>form</code> isn't one of the values
    specified above.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Unicode assigns a unique numerical value, called a <em>code point</em>, to each
  character. For example, the code point for <code>"A"</code> is given as U+0041. However,
  sometimes more than one code point, or sequence of code points, can represent the same
  abstract character — the character <code>"ñ"</code> for example can be represented by
  either of:</p>

<ul>
  <li>The single code point U+00F1.</li>
  <li>The code point for <code>"n"</code> (U+006E) followed by the code point for the
    combining tilde (U+0303).</li>
</ul>

<pre class="brush: js">let string1 = '\u00F1';
let string2 = '\u006E\u0303';

console.log(string1);  //  ñ
console.log(string2);  //  ñ
</pre>

<p>However, since the code points are different, string comparison will not treat them as
  equal. And since the number of code points in each version is different, they even have
  different lengths.</p>

<pre class="brush: js">let string1 = '\u00F1';            // ñ
let string2 = '\u006E\u0303';      // ñ

console.log(string1 === string2); // false
console.log(string1.length);      // 1
console.log(string2.length);      // 2
</pre>

<p>The <code>normalize()</code> method helps solve this problem by converting a string
  into a normalized form common for all sequences of code points that represent the same
  characters. There are two main normalization forms, one based on <strong>canonical
    equivalence</strong> and the other based on <strong>compatibility</strong>.</p>

<h3 id="Canonical_equivalence_normalization">Canonical equivalence normalization</h3>

<p>In Unicode, two sequences of code points have canonical equivalence if they represent
  the same abstract characters, and should always have the same visual appearance and
  behavior (for example, they should always be sorted in the same way).</p>

<p>You can use <code>normalize()</code> using the <code>"NFD"</code> or <code>"NFC"</code>
  arguments to produce a form of the string that will be the same for all canonically
  equivalent strings. In the example below we normalize two representations of the
  character <code>"ñ"</code>:</p>

<pre class="brush: js">let string1 = '\u00F1';           // ñ
let string2 = '\u006E\u0303';     // ñ

string1 = string1.normalize('NFD');
string2 = string2.normalize('NFD');

console.log(string1 === string2); // true
console.log(string1.length);      // 2
console.log(string2.length);      // 2
</pre>

<h4 id="Composed_and_decomposed_forms">Composed and decomposed forms</h4>

<p>Note that the length of the normalized form under <code>"NFD"</code> is
  <code>2</code>. That's because <code>"NFD"</code> gives you the
  <strong>decomposed</strong> version of the canonical form, in which single code points
  are split into multiple combining ones. The decomposed canonical form for
  <code>"ñ"</code> is <code>"\u006E\u0303"</code>.</p>

<p>You can specify <code>"NFC"</code> to get the <strong>composed</strong> canonical form,
  in which multiple code points are replaced with single code points where possible. The
  composed canonical form for <code>"ñ"</code> is <code>"\u00F1"</code>:</p>

<pre class="brush: js">let string1 = '\u00F1';                           // ñ
let string2 = '\u006E\u0303';                     // ñ

string1 = string1.normalize('NFC');
string2 = string2.normalize('NFC');

console.log(string1 === string2);                 // true
console.log(string1.length);                      // 1
console.log(string2.length);                      // 1
console.log(string2.codePointAt(0).toString(16)); // f1</pre>

<h3 id="Compatibility_normalization">Compatibility normalization</h3>

<p>In Unicode, two sequences of code points are compatible if they represent the same
  abstract characters, and should be treated alike in some — but not necessarily all —
  applications.</p>

<p>All canonically equivalent sequences are also compatible, but not vice versa.</p>

<p>For example:</p>

<ul>
  <li>the code point U+FB00 represents the <a
      href="/en-US/docs/Glossary/Ligature">ligature</a> <code>"ﬀ"</code>. It is compatible
    with two consecutive U+0066 code points (<code>"ff"</code>).</li>
  <li>the code point U+24B9 represents the symbol
    <code>"Ⓓ"</code>.
    It is compatible with the U+0044 code point (<code>"D"</code>).</li>
</ul>

<p>In some respects (such as sorting) they should be treated as equivalent—and in some
  (such as visual appearance) they should not, so they are not canonically equivalent.</p>

<p>You can use <code>normalize()</code> using the <code>"NFKD"</code> or
  <code>"NFKC"</code> arguments to produce a form of the string that will be the same for
  all compatible strings:</p>

<pre class="brush: js">let string1 = '\uFB00';
let string2 = '\u0066\u0066';

console.log(string1);             // ﬀ
console.log(string2);             // ff
console.log(string1 === string2); // false
console.log(string1.length);      // 1
console.log(string2.length);      // 2

string1 = string1.normalize('NFKD');
string2 = string2.normalize('NFKD');

console.log(string1);             // ff &lt;- visual appearance changed
console.log(string2);             // ff
console.log(string1 === string2); // true
console.log(string1.length);      // 2
console.log(string2.length);      // 2
</pre>

<p>When applying compatibility normalization it's important to consider what you intend to
  do with the strings, since the normalized form may not be appropriate for all
  applications. In the example above the normalization is appropriate for search, because
  it enables a user to find the string by searching for <code>"f"</code>. But it may not
  be appropriate for display, because the visual representation is different.</p>

<p>As with canonical normalization, you can ask for decomposed or composed compatible
  forms by passing <code>"NFKD"</code> or <code>"NFKC"</code>, respectively.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_normalize">Using <code>normalize()</code></h3>

<pre class="brush: js">// Initial string

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
let str = '\u1E9B\u0323';

// Canonically-composed form (NFC)

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
str.normalize('NFC'); // '\u1E9B\u0323'
str.normalize();      // same as above

// Canonically-decomposed form (NFD)

// U+017F: LATIN SMALL LETTER LONG S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize('NFD'); // '\u017F\u0323\u0307'

// Compatibly-composed (NFKC)

// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
str.normalize('NFKC'); // '\u1E69'

// Compatibly-decomposed (NFKD)

// U+0073: LATIN SMALL LETTER S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize('NFKD'); // '\u0073\u0323\u0307'
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="http://www.unicode.org/reports/tr15/">Unicode Standard Annex #15, Unicode
      Normalization Forms</a></li>
  <li><a href="https://en.wikipedia.org/wiki/Unicode_equivalence">Unicode equivalence</a>
  </li>
</ul>
