---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
tags:
- Deprecated
- JavaScript
- Method
- Prototype
- Reference
- String
browser-compat: javascript.builtins.String.substr
---
<div>{{JSRef}}</div>

<p class="seoSummary">The <strong><code>substr()</code></strong> method returns a portion
  of the string, starting at the specified index and extending for a given number of
  characters afterwards.</p>

<div>{{EmbedInteractiveExample("pages/js/string-substr.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
substr(start)
substr(start, length)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>start</var></code></dt>
  <dd>The index of the first character to include in the returned substring.</dd>
  <dt><code><var>length</var></code></dt>
  <dd>Optional. The number of characters to extract.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new string containing the specified part of the given string.</p>

<h2 id="Description">Description</h2>

<p><code>substr()</code> extracts <code><var>length</var></code> characters from a
  <code><var>str</var></code>, counting from the <code><var>start</var></code> index.</p>

<ul>
  <li>If <code><var>start</var></code> is a positive number, the index starts counting at
    the start of the string. Its value is capped at <code><var>str</var>.length</code>.
  </li>
  <li>If <code><var>start</var></code> is a negative number, the index starts counting
    from the end of the string. Its value is capped at
    <code>-<var>str</var>.length</code>.</li>
  <li>Note: In Microsoft JScript, negative values of the <code><var>start</var></code>
    argument are not considered to refer to the end of the string.</li>
  <li>If <code><var>length</var></code> is omitted, <code>substr()</code> extracts
    characters to the end of the string.</li>
  <li>If <code><var>length</var></code> is {{jsxref("undefined")}}, <code>substr()</code>
    extracts characters to the end of the string.</li>
  <li>If <code><var>length</var></code> is a negative number, it is treated as
    <code>0</code>.</li>
  <li>For both <code><var>start</var></code> and <code><var>length</var></code>,
    {{jsxref("NaN")}} is treated as <code>0</code>.</li>
</ul>

<h2 id="Polyfill">Polyfill</h2>

<p>Microsoft's JScript does not support negative values for the start index. To use this
  feature in JScript, you can use the following code:</p>

<pre class="brush: js">// only run when the substr() function is broken
if ('ab'.substr(-1) != 'b') {
  /**
   *  Get the substring of a string
   *  @param  {integer}  start   where to start the substring
   *  @param  {integer}  length  how many characters to return
   *  @return {string}
   */
  String.prototype.substr = function(substr) {
    return function(start, length) {
      // call the original method
      return substr.call(this,
      	// did we get a negative start, calculate how much it is from the beginning of the string
        // adjust the start parameter for negative value
        start &lt; 0 ? this.length + start : start,
        length)
    }
  }(String.prototype.substr);
}
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_substr">Using substr()</h3>

<pre class="brush: js">var aString = 'Mozilla';

console.log(aString.substr(0, 1));   // 'M'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'a'
console.log(aString.substr(1, -1));  // ''
console.log(aString.substr(-3));     // 'lla'
console.log(aString.substr(1));      // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2));  // ''
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("String.prototype.slice()")}}</li>
  <li>{{jsxref("String.prototype.substring()")}}</li>
</ul>
