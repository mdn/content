---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
tags:
- ECMAScript 2015
- JavaScript
- Method
- Reference
- String
- UTF-32
- Unicode
- Polyfill
browser-compat: javascript.builtins.String.fromCodePoint
---
<div>{{JSRef}}</div>

<p>The static <strong><code>String.fromCodePoint()</code></strong> method returns a string
  created by using the specified sequence of code points.</p>

<div>{{EmbedInteractiveExample("pages/js/string-fromcodepoint.html","shorter")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
String.fromCodePoint(num1)
String.fromCodePoint(num1, num2)
String.fromCodePoint(num1, num2, ..., numN)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>num1</var>, ..., <var>numN</var></code></dt>
  <dd>A sequence of code points.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A string created by using the specified sequence of code points.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>A {{jsxref("Errors/Not_a_codepoint", "RangeError")}} is thrown if an invalid Unicode
    code point is given (e.g. <code>"RangeError: NaN is not a valid code point"</code>).
  </li>
</ul>

<h2 id="Description">Description</h2>

<p>This method returns a string (and <em>not</em> a {{jsxref("String")}} object).</p>

<p>Because <code>fromCodePoint()</code> is a static method of {{jsxref("String")}}, you
  must call it as <code>String.fromCodePoint()</code>, rather than as a method of a
  {{jsxref("String")}} object you created.</p>

<h2 id="Polyfill">Polyfill</h2>

<p>The <code>String.fromCodePoint()</code> method has been added to ECMAScript 2015 and
  may not be supported in all web browsers or environments yet.</p>

<p>Use the code below for a polyfill:</p>

<pre class="brush: js">if (!String.fromCodePoint) (function(stringFromCharCode) {
    var fromCodePoint = function(_) {
      var codeUnits = [], codeLen = 0, result = "";
      for (var index=0, len = arguments.length; index !== len; ++index) {
        var codePoint = +arguments[index];
        // correctly handles all cases including `NaN`, `-Infinity`, `+Infinity`
        // The surrounding `!(...)` is required to correctly handle `NaN` cases
        // The (codePoint&gt;&gt;&gt;0) === codePoint clause handles decimals and negatives
        if (!(codePoint &lt; 0x10FFFF &amp;&amp; (codePoint&gt;&gt;&gt;0) === codePoint))
          throw RangeError("Invalid code point: " + codePoint);
        if (codePoint &lt;= 0xFFFF) { // BMP code point
          codeLen = codeUnits.push(codePoint);
        } else { // Astral code point; split in surrogate halves
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          codePoint -= 0x10000;
          codeLen = codeUnits.push(
            (codePoint &gt;&gt; 10) + 0xD800,  // highSurrogate
            (codePoint % 0x400) + 0xDC00 // lowSurrogate
          );
        }
        if (codeLen &gt;= 0x3fff) {
          result += stringFromCharCode.apply(null, codeUnits);
          codeUnits.length = 0;
        }
      }
      return result + stringFromCharCode.apply(null, codeUnits);
    };
    try { // IE 8 only supports `Object.defineProperty` on DOM elements
      Object.defineProperty(String, "fromCodePoint", {
        "value": fromCodePoint, "configurable": true, "writable": true
      });
    } catch(e) {
      String.fromCodePoint = fromCodePoint;
    }
}(String.fromCharCode));
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_fromCodePoint">Using <code>fromCodePoint()</code></h3>

<p>Valid input:</p>

<pre class="brush: js">String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404" == "Є"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307); // "\uD834\uDF06a\uD834\uDF07"
</pre>

<p>Invalid input:</p>

<pre class="brush: js">String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError
</pre>

<h3 id="Compared_to_fromCharCode">Compared to <code>fromCharCode()</code></h3>

<p>{{jsxref("String.fromCharCode()")}} cannot return supplementary characters (i.e. code
  points <code>0x010000</code> – <code>0x10FFFF</code>) by specifying their code point.
  Instead, it requires the UTF-16 surrogate pair in order to return a supplementary
  character:</p>

<pre class="brush: js">String.fromCharCode(0xD83C, 0xDF03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091);   // Stars" == "\uD83C\uDF03"
</pre>

<p><code>String.fromCodePoint()</code>, on the other hand, can return 4-byte supplementary
  characters, as well as the more common 2-byte BMP characters, by specifying their code
  point (which is equivalent to the UTF-32 code unit):</p>

<pre class="brush: js">String.fromCodePoint(0x1F303); // or 127747 in decimal
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>String.fromCodePoint</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
  <li>{{jsxref("String.fromCharCode()")}}</li>
  <li>{{jsxref("String.prototype.charAt()")}}</li>
  <li>{{jsxref("String.prototype.codePointAt()")}}</li>
  <li>{{jsxref("String.prototype.charCodeAt()")}}</li>
</ul>
