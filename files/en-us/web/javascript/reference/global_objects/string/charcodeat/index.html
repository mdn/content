---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
tags:
- JavaScript
- Method
- Reference
- String
- Unicode
browser-compat: javascript.builtins.String.charCodeAt
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <strong><code>charCodeAt()</code></strong> method returns
    an integer between <code>0</code> and <code>65535</code> representing the UTF-16 code
    unit at the given index.</span></p>

<div>{{EmbedInteractiveExample("pages/js/string-charcodeat.html", "shorter")}}</div>


<p>The UTF-16 code unit matches the Unicode code point for code points which can be
  represented in a single UTF-16 code unit. If the Unicode code point cannot be
  represented in a single UTF-16 code unit (because its value is greater than
  <code>0xFFFF</code>) then the code unit returned will be <em>the first part of a
    surrogate pair</em> for the code point. If you want the entire code point value, use
  {{jsxref("Global_Objects/String/codePointAt", "codePointAt()")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">charCodeAt(index)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>index</var></code></dt>
  <dd>An integer greater than or equal to <code>0</code> and less than the
    <code>length</code> of the string. If <code><var>index</var></code> is not a number,
    it defaults to <code>0</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A number representing the UTF-16 code unit value of the character at the given
  <code><var>index</var></code>. If <code><var>index</var></code> is out of range,
  <code>charCodeAt()</code> returns {{jsxref("Global_Objects/NaN", "NaN")}}.</p>

<h2 id="Description">Description</h2>

<p>Unicode code points range from <code>0</code> to <code>1114111</code>
  (<code>0x10FFFF</code>). The first 128 Unicode code points are a direct match of the
  ASCII character encoding. (For information on Unicode, see the <a
    href="/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode">JavaScript
    Guide</a>.)</p>

<div class="notecard note">
  <p><strong>Note:</strong> <code>charCodeAt()</code> will always return a value that is
    less than <code>65536</code>. This is because the higher code points are represented
    by <em>a pair</em> of (lower valued) "surrogate" pseudo-characters which are used to
    comprise the real character.</p>

  <p>Because of this, in order to examine (or reproduce) the full character for individual
    character values of <code>65536</code> or greater, for such characters, it is
    necessary to retrieve not only <code>charCodeAt(<var>i</var>)</code>, but also
    <code>charCodeAt(<var>i</var>+1)</code> (as if manipulating a string with two
    letters), or to use <code>codePointAt(<var>i</var>)</code> instead. See examples 2 and
    3 (below).</p>
</div>

<p><code>charCodeAt()</code> returns {{jsxref("Global_Objects/NaN", "NaN")}} if the given
  index is less than <code>0</code>, or if it is equal to or greater than the
  <code>length</code> of the string.</p>

<p>Backward compatibility: In historic versions (like JavaScript 1.2) the
  <code>charCodeAt()</code> method returns a number indicating the ISO-Latin-1 codeset
  value of the character at the given index. The ISO-Latin-1 codeset ranges from
  <code>0</code> to <code>255</code>. The first <code>0</code> to <code>127</code> are a
  direct match of the ASCII character set.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_charCodeAt">Using charCodeAt()</h3>

<p>The following example returns <code>65</code>, the Unicode value for A.</p>

<pre class="brush: js">'ABC'.charCodeAt(0)  // returns 65
</pre>

<h3
  id="Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown">
  Fixing charCodeAt() to handle non-Basic-Multilingual-Plane characters if their presence
  earlier in the string is unknown</h3>

<p>This version might be used in for loops and the like when it is unknown whether non-BMP
  characters exist before the specified index position.</p>

<pre class="brush: js">function fixedCharCodeAt(str, idx) {
  // ex. fixedCharCodeAt('\uD800\uDC00', 0); // 65536
  // ex. fixedCharCodeAt('\uD800\uDC00', 1); // false
  idx = idx || 0;
  var code = str.charCodeAt(idx);
  var hi, low;

  // High surrogate (could change last hex to 0xDB7F
  // to treat high private surrogates
  // as single characters)
  if (0xD800 &lt;= code &amp;&amp; code &lt;= 0xDBFF) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    if (isNaN(low)) {
      throw 'High surrogate not followed by ' +
        'low surrogate in fixedCharCodeAt()';
    }
    return (
      (hi - 0xD800) * 0x400) +
      (low - 0xDC00) + 0x10000;
  }
  if (0xDC00 &lt;= code &amp;&amp; code &lt;= 0xDFFF) { // Low surrogate
    // We return false to allow loops to skip
    // this iteration since should have already handled
    // high surrogate above in the previous iteration
    return false;
    // hi = str.charCodeAt(idx - 1);
    // low = code;
    // return ((hi - 0xD800) * 0x400) +
    //   (low - 0xDC00) + 0x10000;
  }
  return code;
}
</pre>

<h3
  id="Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_known">
  Fixing charCodeAt() to handle non-Basic-Multilingual-Plane characters if their presence
  earlier in the string is known</h3>

<pre class="brush: js">function knownCharCodeAt(str, idx) {
  str += '';
  var code,
      end = str.length;

  var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while ((surrogatePairs.exec(str)) != null) {
    var li = surrogatePairs.lastIndex;
    if (li - 2 &lt; idx) {
      idx++;
    }
    else {
      break;
    }
  }

  if (idx &gt;= end || idx &lt; 0) {
    return NaN;
  }

  code = str.charCodeAt(idx);

  var hi, low;
  if (0xD800 &lt;= code &amp;&amp; code &lt;= 0xDBFF) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    // Go one further, since one of the "characters"
    // is part of a surrogate pair
    return ((hi - 0xD800) * 0x400) +
      (low - 0xDC00) + 0x10000;
  }
  return code;
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("String.fromCharCode()")}}</li>
  <li>{{jsxref("String.prototype.charAt()")}}</li>
  <li>{{jsxref("String.fromCodePoint()")}}</li>
  <li>{{jsxref("String.prototype.codePointAt()")}}</li>
</ul>
