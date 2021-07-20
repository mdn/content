---
title: TypedArray.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf
tags:
- ECMAScript 2015
- JavaScript
- Method
- Prototype
- TypedArray
- TypedArrays
- Polyfill
browser-compat: javascript.builtins.TypedArray.indexOf
---
<div>{{JSRef}}</div>

<p>The <code><strong>indexOf()</strong></code> method returns the first index at which a
  given element can be found in the typed array, or -1 if it is not present. This method
  has the same algorithm as {{jsxref("Array.prototype.indexOf()")}}. <em>TypedArray</em>
  is one of the <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed
    array types</a> here.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-indexof.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
indexOf(searchElement)
indexOf(searchElement, fromIndex)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>searchElement</var></code></dt>
  <dd>Element to locate in the typed array.</dd>
  <dt><code><var>fromIndex</var></code> {{optional_inline}}</dt>
  <dd>The index to start the search at. If the index is greater than or equal to the typed
    array's length, -1 is returned, which means the typed array will not be searched. If
    the provided index value is a negative number, it is taken as the offset from the end
    of the typed array. Note: if the provided index is negative, the typed array is still
    searched from front to back. If the calculated index is less than 0, then the whole
    typed array will be searched. Default: 0 (entire typed array is searched).</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The first index of the element in the array; <code>-1</code> if not found.</p>

<h2 id="Description">Description</h2>

<p><code>indexOf</code> compares <code><var>searchElement</var></code> to elements of the
  typed array using <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators">strict
    equality</a> (the same method used by the ===, or triple-equals, operator).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_indexOf">Using indexOf</h3>

<pre class="brush: js">var uint8 = new Uint8Array([2, 5, 9]);
uint8.indexOf(2);     // 0
uint8.indexOf(7);     // -1
uint8.indexOf(9, 2);  // 2
uint8.indexOf(2, -1); // -1
uint8.indexOf(2, -3); // 0
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>TypedArray.prototype.indexOf</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-typed-arrays"><code>core-js</code></a></li>
  <li>{{jsxref("TypedArray.prototype.lastIndexOf()")}}</li>
  <li>{{jsxref("Array.prototype.indexOf()")}}</li>
</ul>
