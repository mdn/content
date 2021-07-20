---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
tags:
- Array
- ECMAScript 5
- JavaScript
- Method
- Reference
- Polyfill
browser-compat: javascript.builtins.Array.isArray
---
<div>{{JSRef}}</div>

<p>The <code><strong>Array.isArray()</strong></code> method determines whether the passed
  value is an {{jsxref("Array")}}.</p>

<pre class="brush: js">Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
</pre>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Array.isArray(value)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>value</code></dt>
  <dd>The value to be checked.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p><code>true</code> if the value is an {{jsxref("Array")}}; otherwise,
  <code>false</code>.</p>

<h2 id="Description">Description</h2>

<p>If the value is an {{jsxref("Array")}}, <code>true</code> is returned; otherwise,
  <code>false</code> is. </p>

<p>See the article <a href="http://web.mit.edu/jwalden/www/isArray.html">“Determining with
    absolute accuracy whether or not a JavaScript object is an array”</a> for more
  details. Given a {{jsxref("TypedArray")}} instance, <code>false</code> is always
  returned.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Array.isArray">Using Array.isArray</h3>

<pre class="brush: js">// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });
</pre>

<h3 id="instanceof_vs_isArray"><code>instanceof</code> vs <code>isArray</code></h3>

<p>When checking for <code>Array</code> instance, <code>Array.isArray</code> is preferred
  over <code>instanceof</code> because it works through <code>iframes</code>.</p>

<pre class="brush: js">var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // [1,2,3]

// Correctly checking for Array
Array.isArray(arr);  // true
// Considered harmful, because doesn't work through iframes
arr instanceof Array; // false
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.isArray</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li><a href="https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js">A
    polyfill</a></li>
  <li>{{jsxref("Array")}}</li>
</ul>
