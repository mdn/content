---
title: TypedArray.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/at
tags:
  - TypedArray
  - TypedArrays
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
  - at
  - Experimental
browser-compat: javascript.builtins.TypedArray.at
---
<div>{{JSRef}}</div>

<p class="summary">The <strong><code>at()</code></strong> method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.</p>

<p>This is not to suggest there is anything wrong with using the square bracket notation. For example <code>array[0]</code> would return the first item. However instead of using {{jsxref('TypedArray.prototype.length','array.length')}} for latter items; e.g. <code>array[array.length-1]</code> for the last item, you can call <code>array.at(-1)</code>. <a href="#Examples">(See the examples below)</a></p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-at.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">at(index)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>index</code></dt>
  <dd>The index (position) of the array element to be returned. Supports relative indexing from the end of the array when passed a negative index. i.e. If a negative number is used the element returned will be found by counting back from the end of the array.</dd>
</dl>

<h3 id="Returns">Return value</h3>

<p>The element in the array matching the given index. Returns {{jsxref('undefined')}} if the given index can not be found.</p>


<h2 id="Examples">Examples</h2>

<h3>Return the last value of a typed array</h3>

<p>The following example provides a function which returns the last element found in a specified array.</p>

<pre class="brush: js">
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}

const lastItem = returnLast(uint8);
console.log(lastItem); // Logs: 18
</pre>

<h3>Comparing methods</h3>

<p>Here we compare different ways to select the penultimate (last but one) item of a {{jsxref('TypedArray')}}. Whilst all below methods are valid, it highlights the succinctness and readability of the <code>at()</code> method.</p>

<pre class="brush: js">
// Our typed array with values
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// Using length property
const lengthWay = uint8[uint8.length-2];
console.log(lengthWay); // Logs: 11

// Using slice() method. Note an array is returned
const sliceWay = uint8.slice(-2, -1);
console.log(sliceWay[0]); // Logs: 11

// Using at() method
const atWay = uint8.at(-2);
console.log(atWay); // Logs: 11
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>TypedArray.prototype.at</code> is available in <a href="https://github.com/zloirock/core-js#relative-indexing-method"><code>core-js</code></a></li>
  <li><a href="https://github.com/tc39/proposal-relative-indexing-method#polyfill">A polyfill for the at() method</a>.</li>
  <li>{{jsxref("TypedArray.prototype.find()")}} – return a value based on a given test.</li>
  <li>{{jsxref("TypedArray.prototype.includes()")}} – test whether a value exists in the array.</li>
  <li>{{jsxref("TypedArray.prototype.indexOf()")}} – return the index of a given element.</li>
</ul>
