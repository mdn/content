---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
tags:
- JavaScript
- Method
- Prototype
- Reference
- String
- lastIndexOf
browser-compat: javascript.builtins.String.lastIndexOf
---
<div>{{JSRef}}</div>

<p>The <strong><code>lastIndexOf()</code></strong> method returns the index within the
  calling {{jsxref("String")}} object of the last occurrence of the specified value,
  searching backwards from <code>fromIndex</code>. Returns <code>-1</code> if the value is
  not found.</p>

<div>{{EmbedInteractiveExample("pages/js/string-lastindexof.html", "shorter")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
lastIndexOf(searchValue)
lastIndexOf(searchValue, fromIndex)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>searchValue</var></code></dt>
  <dd>A string representing the value to search for. If
    <code><var>searchValue</var></code> is an empty string, then
    <code><var>fromIndex</var></code> is returned.</dd>
  <dt><code><var>fromIndex</var></code> {{optional_inline}}</dt>
  <dd>The index of the last character in the string to be considered as the beginning of a
    match. The default value is <code>+Infinity</code>. If
    <code><var>fromIndex</var> &gt;= <var>str</var>.length</code>, the whole string is
    searched. If <code><var>fromIndex</var> &lt; 0</code>, the behavior will be the same
    as if it would be <code>0</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The index of the last occurrence of <code><var>searchValue</var></code>;
  <code>-1</code> if not found.</p>

<h2 id="Description">Description</h2>

<p>Characters in a string are indexed from left to right. The index of the first character
  is <code>0</code>, and the index of the last character is
  <code><var>str</var>.length - 1</code>.</p>

<pre class="brush: js">'canal'.lastIndexOf('a');     // returns 3
'canal'.lastIndexOf('a', 2);  // returns 1
'canal'.lastIndexOf('a', 0);  // returns -1
'canal'.lastIndexOf('x');     // returns -1
'canal'.lastIndexOf('c', -5); // returns 0
'canal'.lastIndexOf('c', 0);  // returns 0
'canal'.lastIndexOf('');      // returns 5
'canal'.lastIndexOf('', 2);   // returns 2
</pre>

<div class="note">
  <p><strong>Note:</strong> <code>'abab'.lastIndexOf('ab', 2)</code> will return
    <code>2</code> and not <code>0</code>, as <code><var>fromIndex</var></code> limits
    only the beginning of the match.</p>
</div>

<h3 id="Case-sensitivity">Case-sensitivity</h3>

<p>The <code>lastIndexOf()</code> method is case sensitive. For example, the following
  expression returns <code>-1</code>:</p>

<pre class="brush: js">'Blue Whale, Killer Whale'.lastIndexOf('blue'); // returns -1
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_indexOf_and_lastIndexOf">Using indexOf() and lastIndexOf()</h3>

<p>The following example uses {{jsxref("String.prototype.indexOf()", "indexOf()")}} and
  <code>lastIndexOf()</code> to locate values in the string
  "<code>Brave new world</code>".</p>

<pre class="brush: js">let anyString = 'Brave new world';

console.log('The index of the first w from the beginning is ' + anyString.indexOf('w'));
// logs 8
console.log('The index of the first w from the end is ' + anyString.lastIndexOf('w'));
// logs 10
console.log('The index of "new" from the beginning is ' + anyString.indexOf('new'));
// logs 6
console.log('The index of "new" from the end is ' + anyString.lastIndexOf('new'));
// logs 6
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("String.prototype.charAt()")}}</li>
  <li>{{jsxref("String.prototype.indexOf()")}}</li>
  <li>{{jsxref("String.prototype.split()")}}</li>
  <li>{{jsxref("Array.prototype.indexOf()")}}</li>
  <li>{{jsxref("Array.prototype.lastIndexOf()")}}</li>
</ul>
