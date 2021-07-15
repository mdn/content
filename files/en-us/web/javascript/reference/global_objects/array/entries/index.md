---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
tags:
- Array
- ECMAScript 2015
- Iterator
- JavaScript
- Method
- Prototype
- Polyfill
browser-compat: javascript.builtins.Array.entries
---
<div>{{JSRef}}</div>

<p>The <strong><code>entries()</code></strong> method returns a new <strong>Array
    Iterator</strong> object that contains the key/value pairs for each index in the
  array.</p>

<div>{{EmbedInteractiveExample("pages/js/array-entries.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">entries()</pre>

<h3 id="Return_value">Return value</h3>

<p>A new {{jsxref("Array")}} iterator object.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Iterating_with_index_and_element">Iterating with index and element</h3>

<pre class="brush:js">const a = ['a', 'b', 'c'];

for (const [index, element] of a.entries())
  console.log(index, element);

// 0 'a'
// 1 'b'
// 2 'c'
</pre>

<h3 id="Using_a_for…of_loop">Using a <a
    href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for…of</a> loop</h3>

<pre class="brush:js">var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.prototype.entries</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li>{{jsxref("Array.prototype.keys()")}}</li>
  <li>{{jsxref("Array.prototype.values()")}}</li>
  <li>{{jsxref("Array.prototype.forEach()")}}</li>
  <li>{{jsxref("Array.prototype.every()")}}</li>
  <li>{{jsxref("Array.prototype.some()")}}</li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols">Iteration
      protocols</a></li>
  <li><a href="https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js">A polyfill</a></li>
</ul>
