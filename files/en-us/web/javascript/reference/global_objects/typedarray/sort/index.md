---
title: TypedArray.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
tags:
- ECMAScript 2015
- JavaScript
- Method
- Prototype
- TypedArray
- TypedArrays
- Polyfill
browser-compat: javascript.builtins.TypedArray.sort
---
<div>{{JSRef}}</div>

<p>The <code><strong>sort()</strong></code> method sorts the elements of a typed array
  numerically <em>in place</em> and returns the typed array. This method has the same
  algorithm as {{jsxref("Array.prototype.sort()")}}, except that sorts the values
  numerically instead of as strings. <em>TypedArray</em> is one of the <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed
    array types</a> here.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-sort.html","shorter")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Functionless
sort()

// Arrow function
sort((firstEl, secondEl) => { ... } )

// Compare function
sort(compareFn)

// Inline compare function
sort(function compareFn(firstEl, secondEl) { ... })
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>compareFunction</var></code> {{optional_inline}}</dt>
  <dd>Specifies a function that defines the sort order.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The sorted typed array.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_sort">Using sort</h3>

<p>For more examples, see also the {{jsxref("Array.prototype.sort()")}} method.</p>

<pre class="brush: js">let numbers = new Uint8Array([40, 1, 5, 200]);
numbers.sort();
// Uint8Array [ 1, 5, 40, 200 ]
// Unlike plain Arrays, a compare function is not required
// to sort the numbers numerically.

// Regular Arrays require a compare function to sort numerically:
numbers = [40, 1, 5, 200];
numbers.sort();
// [1, 200, 40, 5]

numbers.sort((a, b) =&gt; a - b); // compare numbers
// [ 1, 5, 40, 200 ]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>TypedArray.prototype.sort</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-typed-arrays"><code>core-js</code></a></li>
  <li>{{jsxref("Array.prototype.sort()")}}</li>
</ul>
