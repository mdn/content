---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
tags:
- JavaScript
- Method
- Prototype
- Reference
- String
- Polyfill
browser-compat: javascript.builtins.String.trimEnd
---
<div>{{JSRef}}</div>

<p>The <strong><code>trimEnd()</code></strong> method removes whitespace from the end of a
  string. <code>trimRight()</code> is an alias of this method.</p>

<div>{{EmbedInteractiveExample("pages/js/string-trimend.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
trimEnd()

trimRight()
</pre>

<h3 id="Return_value">Return value</h3>

<p>A new string representing <code><var>str</var></code> stripped of whitespace from its end (right side).</p>

<p>If the end of <code><var>str</var></code> has no whitespace, a new string is still returned (essentially a copy of <code><var>str</var></code>), with no exception being thrown.</p>

<h3 id="Aliasing">Aliasing</h3>

<p>For consistency with functions like {{jsxref("String.prototype.padEnd")}} the standard
  method name is <code>trimEnd</code>. However, for web compatibility reasons,
  <code>trimRight</code> remains as an alias to <code>trimEnd</code>. In some engines this
  means:</p>

<pre class="brush: js">String.prototype.trimRight.name === "trimEnd";</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_trimEnd">Using trimEnd()</h3>

<p>The following example displays the lowercase string <code>'   foo'</code>:</p>

<pre class="brush: js highlight: [5]">var str = '   foo  ';

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str);        // '   foo'
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>String.prototype.trimEnd</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
  <li>{{jsxref("String.prototype.trim()")}}</li>
  <li>{{jsxref("String.prototype.trimStart()")}}</li>
</ul>
