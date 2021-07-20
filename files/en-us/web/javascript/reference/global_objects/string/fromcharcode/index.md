---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
tags:
- JavaScript
- Method
- Reference
- String
- UTF-16
- Unicode
browser-compat: javascript.builtins.String.fromCharCode
---
<div>{{JSRef}}</div>

<p>The static <strong><code>String.fromCharCode()</code></strong> method returns a string
  created from the specified sequence of UTF-16 code units.</p>

<div>{{EmbedInteractiveExample("pages/js/string-fromcharcode.html","shorter")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
String.fromCharCode(num1)
String.fromCharCode(num1, num2)
String.fromCharCode(num1, num2, ..., numN)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>num1, ..., num<em>N</em></code></dt>
  <dd>A sequence of numbers that are UTF-16 code units. The range is between
    <code>0</code> and <code>65535</code> (<code>0xFFFF</code>). Numbers greater than
    <code>0xFFFF</code> are truncated. No validity checks are performed.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A string of length <code><var>N</var></code> consisting of the
  <code><var>N</var></code> specified UTF-16 code units.</p>

<h2 id="Description">Description</h2>

<p>This method returns a string and not a {{jsxref("String")}} object.</p>

<p>Because <code>fromCharCode()</code> is a static method of {{jsxref("String")}}, you
  always use it as <code>String.fromCharCode()</code>, rather than as a method of a
  {{jsxref("String")}} object you created.</p>

<h3 id="Returning_supplementary_characters">Returning supplementary characters</h3>

<p>In UTF-16, the most common characters can be represented by a single 16-bit value (i.e.
  a code unit). However, this set of characters, known as the Base Multilingual Plane
  (BMP), is only 1/17th of the total addressable Unicode
  code points. The remaining code points, in the range of <code>65536</code>
  (<code>0x010000</code>) to <code>1114111</code> (<code>0x10FFFF</code>) are known as
  supplementary characters. In UTF-16, supplementary characters are represented by two
  16-bit code units, known as surrogates, that were reserved for this purpose. A valid
  combination of two surrogates used to represent a supplementary character is known as a
  surrogate pair.</p>

<p>Because <code>fromCharCode()</code> only works with 16-bit values (same as the
  <code>\u</code> escape sequence), a surrogate pair is required in order to return a
  supplementary character. For example, both
  <code>String.fromCharCode(0xD83C, 0xDF03)</code> and <code>\uD83C\uDF03</code> return
  code point <code>U+1F303</code> "Night with Stars".</p>

<p>While there is a mathematical relationship between the supplementary code point value
  (e.g. <code>0x1F303</code>) and both surrogate values that represent it
  (e.g., <code>0xD83C</code> and <code>0xDF03</code>), it does require an extra step to
  either calculate or look up the surrogate pair values every time a supplementary code
  point is to be used. For this reason, it's more convenient to use
  {{jsxref("String.fromCodePoint()")}} (part of the ES2015 standard), which allows for
  returning supplementary characters based on their actual code point value. For example,
  <code>String.fromCodePoint(0x1F303)</code> returns code point <code>U+1F303</code>
  "Night with Stars".</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_fromCharCode">Using fromCharCode()</h3>

<p>BMP characters, in UTF-16, use a single code unit:</p>

<pre class="brush: js">String.fromCharCode(65, 66, 67);   // returns "ABC"
String.fromCharCode(0x2014);       // returns "—"
String.fromCharCode(0x12014);      // also returns "—"; the digit 1 is truncated and ignored
String.fromCharCode(8212);         // also returns "—"; 8212 is the decimal form of 0x2014
</pre>

<p>Supplementary characters, in UTF-16, require two code units (i.e. a surrogate pair):
</p>

<pre class="brush: js">String.fromCharCode(0xD83C, 0xDF03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091);   // Stars" == "\uD83C\uDF03"

String.fromCharCode(0xD834, 0xDF06, 0x61, 0xD834, 0xDF07); // "\uD834\uDF06a\uD834\uDF07"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("String.fromCodePoint()")}}</li>
  <li>{{jsxref("String.prototype.charAt()")}}</li>
  <li>{{jsxref("String.prototype.charCodeAt()")}}</li>
  <li>{{jsxref("String.prototype.codePointAt()")}}</li>
</ul>
