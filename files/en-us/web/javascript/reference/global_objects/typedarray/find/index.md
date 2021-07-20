---
title: TypedArray.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/find
tags:
- ECMAScript 2015
- JavaScript
- Method
- Prototype
- Reference
- TypedArray
- TypedArrays
- Polyfill
browser-compat: javascript.builtins.TypedArray.find
---
<div>{{JSRef}}</div>

<p>The <strong><code>find()</code></strong> method returns a value of an element in the
  typed array, if it satisfies the provided testing function. Otherwise
  {{jsxref("undefined")}} is returned. <em>TypedArray</em> is one of the <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed
    array types</a> here.</p>

<p>See also the {{jsxref("TypedArray.findIndex", "findIndex()")}} method, which returns
  the <strong>index</strong> of a found element in the typed array instead of its value.
</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-find.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Arrow function
find((element) => { ... } )
find((element, index) => { ... } )
find((element, index, array) => { ... } )

// Callback function
find(callbackFn)
find(callbackFn, thisArg)

// Inline callback function
find(function callbackFn(element) { ... })
find(function callbackFn(element, index) { ... })
find(function callbackFn(element, index, array){ ... })
find(function callbackFn(element, index, array) { ... }, thisArg)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>callbackFn</var></code></dt>
  <dd>Function to execute on each value in the typed array, taking three arguments:
    <dl>
      <dt><code><var>element</var></code></dt>
      <dd>The current element being processed in the typed array.</dd>
      <dt><code><var>index</var></code></dt>
      <dd>The index of the current element being processed in the typed array.</dd>
      <dt><code><var>array</var></code></dt>
      <dd>The array <code>find()</code> was called upon.</dd>
    </dl>
  </dd>
  <dt><code><var>thisArg</var></code> {{optional_inline}}</dt>
  <dd>Object to use as <code>this</code> when executing <code><var>callbackFn</var></code>.
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A value in the array if an element passes the test; otherwise, {{jsxref("undefined")}}.
</p>

<h2 id="Description">Description</h2>

<p>The <code>find()</code> method executes the <code><var>callbackFn</var></code> function
  once for each element present in the typed array until it finds one where
  <code><var>callbackFn</var></code> returns a true value. If such an element is found,
  <code>find()</code> immediately returns the value of that element. Otherwise,
  <code>find()</code> returns {{jsxref("undefined")}}. <code><var>callbackFn</var></code> is
  invoked only for indexes of the typed array which have assigned values; it is not
  invoked for indexes which have been deleted or which have never been assigned values.
</p>

<p><code><var>callbackFn</var></code> is invoked with three arguments: the value of the
  element, the index of the element, and the typed array object being traversed.</p>

<p>If a <code><var>thisArg</var></code> parameter is provided to <code>find()</code>, it
  will be used as the <code>this</code> for each invocation of the
  <code><var>callbackFn</var></code>. If it is not provided, then {{jsxref("undefined")}} is
  used.</p>

<p><code>find()</code> does not mutate the typed array on which it is called.</p>

<p>The range of elements processed by <code>find()</code> is set before the first
  invocation of <code><var>callbackFn</var></code>. Elements that are appended to the typed
  array after the call to <code>find()</code> begins will not be visited by
  <code><var>callbackFn</var></code>. If an existing, unvisited element of the typed array
  is changed by <code><var>callbackFn</var></code>, its value passed to the visiting
  <code><var>callbackFn</var></code> will be the value at the time that <code>find()</code>
  visits that element's index; elements that are deleted are not visited.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Find_a_prime_number_in_a_typed_array">Find a prime number in a typed array</h3>

<p>The following example finds an element in the typed array that is a prime number (or
  returns {{jsxref("undefined")}} if there is no prime number).</p>

<pre class="brush: js">function isPrime(element, index, array) {
  var start = 2;
  while (start &lt;= Math.sqrt(element)) {
    if (element % start++ &lt; 1) {
      return false;
    }
  }
  return element &gt; 1;
}

var uint8 = new Uint8Array([4, 5, 8, 12]);
console.log(uint8.find(isPrime)); // 5</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>TypedArray.prototype.find</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-typed-arrays"><code>core-js</code></a></li>
  <li>{{jsxref("TypedArray.prototype.findIndex()")}}</li>
  <li>{{jsxref("TypedArray.prototype.every()")}}</li>
</ul>
