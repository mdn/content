---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
tags:
- ECMAScript 2015
- JavaScript
- Method
- Prototype
- Reference
- String
- Polyfill
browser-compat: javascript.builtins.String.repeat
---
<div>{{JSRef}}</div>

<p>The <strong><code>repeat()</code></strong> method constructs and returns a new string
  which contains the specified number of copies of the string on which it was called,
  concatenated together.</p>

<div>{{EmbedInteractiveExample("pages/js/string-repeat.html","shorter")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">repeat(count)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>count</var></code></dt>
  <dd>An integer between <code>0</code> and
    {{jsxref("Global_Objects/Number/POSITIVE_INFINITY", "+Infinity")}}, indicating the
    number of times to repeat the string.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new string containing the specified number of copies of the given string.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>{{jsxref("Errors/Negative_repetition_count", "RangeError")}}: repeat count must be
    non-negative.</li>
  <li>{{jsxref("Errors/Resulting_string_too_large", "RangeError")}}: repeat count must be
    less than infinity and not overflow maximum string size.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Using_repeat">Using repeat()</h3>

<pre class="brush: js">'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0)   // RangeError

({ toString: () =&gt; 'abc', repeat: String.prototype.repeat }).repeat(2)
// 'abcabc' (repeat() is a generic method)
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>This method has been added to the ECMAScript 2015 specification and may not be
  available in all JavaScript implementations yet. However, you can polyfill
  <code>String.prototype.repeat()</code> with the following snippet:</p>

<pre class="brush: js">if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null)
      throw new TypeError('can\'t convert ' + this + ' to object');

    var str = '' + this;
    // To convert string to integer.
    count = +count;
    // Check NaN
    if (count != count)
      count = 0;

    if (count &lt; 0)
      throw new RangeError('repeat count must be non-negative');

    if (count == Infinity)
      throw new RangeError('repeat count must be less than infinity');

    count = Math.floor(count);
    if (str.length == 0 || count == 0)
      return '';

    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 &lt;&lt; 28 chars or longer, so:
    if (str.length * count &gt;= 1 &lt;&lt; 28)
      throw new RangeError('repeat count must not overflow maximum string size');

    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while (count) {
       str += str;
       count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>String.prototype.repeat</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
  <li>{{jsxref("String.prototype.concat()")}}</li>
</ul>
