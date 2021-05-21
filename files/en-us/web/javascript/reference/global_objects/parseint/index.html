---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
tags:
- JavaScript
- Method
- Reference
- parseInt
browser-compat: javascript.builtins.parseInt
---
<div>{{jsSidebar("Objects")}}</div>

<p>The <code><strong>parseInt()</strong></code> function parses a string argument and
  returns an integer of the specified <a
    href="https://en.wikipedia.org/wiki/Radix">radix</a> (the base in mathematical numeral
  systems).</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-parseint.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
parseInt(string)
parseInt(string, radix)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>string</var></code></dt>
  <dd>The value to parse. If this argument is not a string, then it is converted to one
    using the <code><a href="https://tc39.es/ecma262/#sec-tostring">ToString</a></code>
    abstract operation. Leading {{glossary("whitespace")}} in this argument is ignored.
  </dd>
  <dt><code><var>radix</var></code><var> {{optional_inline}}</var></dt>
  <dd>
    <p>An integer between <code>2</code> and <code>36</code> that represents the
    <em>radix</em> (the base in mathematical numeral systems) of the
    <code><var>string</var></code>. Be careful—this does <strong><em>not</em></strong>
    default to <code>10</code>! If the radix value is not of the <code>Number</code> type
    it will be coerced to a <code>Number</code>.</p>
    <div class="notecard warning">
    <p><strong>Warning:</strong> The <a href="#description">description below</a> explains
    in more detail what happens when <code><var>radix</var></code> is not provided.
    </p>
    </div>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An integer parsed from the given <code><var>string</var></code>.</p>

<p>Or {{jsxref("NaN")}} when</p>

<ul>
  <li>the <code><var>radix</var></code> is smaller than <code>2</code> or bigger than
    <code>36</code>, or</li>
  <li>the first non-whitespace character cannot be converted to a number.</li>
</ul>

<h2 id="Description">Description</h2>

<p>The <code>parseInt</code> function converts its first argument to a string, parses that
  string, then returns an integer or <code>NaN</code>.</p>

<p>If not <code>NaN</code>, the return value will be the integer that is the first
  argument taken as a number in the specified <code><var>radix</var></code>. (For example,
  a <code><var>radix</var></code> of <code>10</code> converts from a decimal number,
  <code>8</code> converts from octal, <code>16</code> from hexadecimal, and so on.)</p>

<p>For radices above <code>10</code>, letters of the English alphabet indicate numerals
  greater than <code>9</code>. For example, for hexadecimal numbers (base
  <code>16</code>), <code>A</code> through <code>F</code> are used.</p>

<p>If <code>parseInt</code> encounters a character that is not a numeral in the specified
  <code>radix</code>, it ignores it and all succeeding characters and returns the integer
  value parsed up to that point. <code>parseInt</code> truncates numbers to integer
  values. Leading and trailing spaces are allowed.</p>

<p>Because some numbers use the <code>e</code> character in their string representation
  (e.g. <strong><code>6.022E23</code></strong> for 6.022 × 10^23), using
  <code>parseInt</code> to truncate numbers will produce unexpected results when used on
  very large or very small numbers. <code>parseInt</code> should <em>not</em> be used as a
  substitute for {{jsxref("Math.floor()")}}.</p>

<p><code>parseInt</code> understands exactly two signs: <code>+</code> for positive, and
  <code>-</code> for negative (since ECMAScript 1). It is done as an initial step in the
  parsing after whitespace is removed. If no signs are found, the algorithm moves to the
  following step; otherwise, it removes the sign and runs the number-parsing on the rest
  of the string.</p>

<p>A value passed as the radix argument is coerced to a Number (if necessary), then if the
  value is 0, <code>NaN</code> or <code>Infinity</code> (undefined is coerced to
  <code>NaN</code>), JavaScript assumes the following:</p>

<ol>
  <li>If the input <code>string</code> begins with "<code>0x</code>" or "<code>0X</code>"
    (a zero, followed by lowercase or uppercase X), <code><var>radix</var></code> is
    assumed to be <code>16</code> and the rest of the string is parsed as a hexadecimal
    number.</li>
  <li>If the input <code>string</code> begins with any other value, the radix is
    <code>10</code> (decimal).</li>
</ol>

<p>Else if the radix value (coerced if necessary) is not in range [2, 36] (inclusive)
  <code>parseInt</code> returns <code>NaN</code>.</p>

<p>If the first character cannot be converted to a number with the radix in use,
  <code>parseInt</code> returns <code>NaN</code>.</p>

<p>For arithmetic purposes, the <code>NaN</code> value is not a number in any radix. You
  can call the {{jsxref("isNaN")}} function to determine if the result of
  <code>parseInt</code> is <code>NaN</code>. If <code>NaN</code> is passed on to
  arithmetic operations, the operation result will also be <code>NaN</code>.</p>

<p>To convert a number to its string literal in a particular radix, use
  <code><var>thatNumber</var>.toString(<var>radix</var>)</code>.</p>

<div class="notecard warning">
  <p><strong>Warning:</strong> <code>parseInt</code> converts a
    {{jsxref("BigInt")}} to a {{jsxref("Number")}} and loses precision in the process.
    This is because trailing non-numeric values, including "<code>n</code>", are
    discarded.</p>
</div>

<h3 id="Octal_interpretations_with_no_radix">Octal interpretations with no radix</h3>

<p>Please note that following information doesn't apply to recent implementations as of 2021.</p>

<p>Although discouraged by ECMAScript 3, many ECMAScript 3
  implementations had interpreted a numeric string beginning with a leading <code>0</code> as
  octal. The following might have had an octal result, or it might have had a decimal result.</p>

<pre class="brush: js">parseInt('0e0')  // 0
parseInt('08')   // 0, because '8' is not an octal digit.
</pre>

<p>The ECMAScript 5 specification of the function <code>parseInt</code> no longer allows
  implementations to treat Strings beginning with a <code>0</code> character as octal
  values. Many implementations have adopted this behavior as of 2021.</p>

<pre class="brush: js">parseInt('0e0')  // 0
parseInt('08')   // 8
</pre>

<h3 id="A_stricter_parse_function">A stricter parse function</h3>

<p>It is sometimes useful to have a stricter way to parse integers.</p>

<p>Regular expressions can help:</p>

<pre class="brush: js">function filterInt(value) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value)
  } else {
    return NaN
  }
}

console.log(filterInt('421'))                // 421
console.log(filterInt('-421'))               // -421
console.log(filterInt('+421'))               // 421
console.log(filterInt('Infinity'))           // Infinity
console.log(filterInt('421e+0'))             // NaN
console.log(filterInt('421hop'))             // NaN
console.log(filterInt('hop1.61803398875'))   // NaN
console.log(filterInt('1.61803398875'))      // NaN
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_parseInt">Using parseInt</h3>

<p>The following examples all return <code>15</code>:</p>

<pre class="brush: js">parseInt('0xF', 16)
parseInt('F', 16)
parseInt('17', 8)
parseInt(021, 8)
parseInt('015', 10)    // but `parseInt(015, 8)` will return 13
parseInt(15.99, 10)
parseInt('15,123', 10)
parseInt('FXX123', 16)
parseInt('1111', 2)
parseInt('15 * 3', 10)
parseInt('15e2', 10)
parseInt('15px', 10)
parseInt('12', 13)
</pre>

<p>The following examples all return <code>NaN</code>:</p>

<pre class="brush: js">parseInt('Hello', 8)  // Not a number at all
parseInt('546', 2)    // Digits other than 0 or 1 are invalid for binary radix
</pre>

<p>The following examples all return <code>-15</code>:</p>

<pre class="brush: js">parseInt('-F', 16)
parseInt('-0F', 16)
parseInt('-0XF', 16)
parseInt(-15.1, 10)
parseInt('-17', 8)
parseInt('-15', 10)
parseInt('-1111', 2)
parseInt('-15e1', 10)
parseInt('-12', 13)
</pre>

<p>The following examples all return <code>4</code>.</p>

<pre class="brush: js">parseInt(4.7, 10)
parseInt(4.7 * 1e22, 10)        // Very large number becomes 4
parseInt(0.00000000000434, 10)  // Very small number becomes 4
</pre>

<p>If the number is greater than 1e+21 (including) or less than 1e-7 (including), it will
  return <code>1</code>. (when using radix 10).</p>

<pre class="brush: js">parseInt(0.0000001,10);
parseInt(0.000000123,10);
parseInt(1e-7,10);
parseInt(1000000000000000000000,10);
parseInt(123000000000000000000000,10);
parseInt(1e+21,10);
</pre>

<p>The following example returns <code>224</code>:</p>

<pre class="brush: js">parseInt('0e0', 16)
</pre>

<p>{{jsxref("BigInt")}} values lose precision:</p>

<pre class="brush: js">parseInt('900719925474099267n')
// 900719925474099300</pre>

<p><code>parseInt</code> doesn't work with <a
    href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Numeric_separators">numeric
    separators</a>:</p>

<pre class="brush: js">parseInt('123_456')
// 123
</pre>

<p>The radix is coerced to a <code>Number</code>:</p>

<pre class="brush: js">const obj = {
  valueOf() {return 8}
};
parseInt('11', obj); // 9

obj.valueOf = function() {return 1};
parseInt('11', obj); // NaN

obj.valueOf = function() {return Infinity};
parseInt('11', obj); // 11</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Global_Objects/parseFloat", "parseFloat()")}}</li>
  <li>{{jsxref("Number.parseFloat()")}}</li>
  <li>{{jsxref("Number.parseInt()")}}</li>
  <li>{{jsxref("Global_Objects/isNaN", "isNaN()")}}</li>
  <li>{{jsxref("Number.toString()")}}</li>
  <li>{{jsxref("Object.valueOf")}}</li>
</ul>
