---
title: TypedArray.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
tags:
- JavaScript
- Method
- Prototype
- Reference
- TypedArray
- TypedArrays
- Polyfill
browser-compat: javascript.builtins.TypedArray.reduce
---
<div>{{JSRef}}</div>

<p>The <strong><code>reduce()</code></strong> method applies a function against an
  accumulator and each value of the typed array (from left-to-right) has to reduce it to a
  single value. This method has the same algorithm as
  {{jsxref("Array.prototype.reduce()")}}. <em>TypedArray</em> is one of the <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed
    array types</a> here.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-reduce.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Arrow function
reduce((accumulator, currentValue) => { ... } )
reduce((accumulator, currentValue, index) => { ... } )
reduce((accumulator, currentValue, index, array) => { ... } )
reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function callbackFn(accumulator, currentValue) { ... })
reduce(function callbackFn(accumulator, currentValue, index) { ... })
reduce(function callbackFn(accumulator, currentValue, index, array){ ... })
reduce(function callbackFn(accumulator, currentValue, index, array) { ... }, initialValue)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>callbackFn</var></code></dt>
  <dd>Function to execute on each value in the typed array, taking four arguments:
    <dl>
      <dt><code><var>accumulator</var></code></dt>
      <dd>The value previously returned in the last invocation of the callback, or
        <code>initialValue</code>, if supplied (see below).</dd>
      <dt><code><var>currentValue</var></code></dt>
      <dd>The current element being processed in the typed array.</dd>
      <dt><code><var>index</var></code></dt>
      <dd>The index of the current element being processed in the typed array.</dd>
      <dt><code><var>array</var></code></dt>
      <dd>The typed array <code>reduce()</code> was called upon.</dd>
    </dl>
  </dd>
  <dt><code><var>initialValue</var></code></dt>
  <dd>Optional. Object to use as the first argument to the first call of the
    <code><var>callbackFn</var></code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The value that results from the reduction.</p>

<h2 id="Description">Description</h2>

<p>The <code>reduce</code> method executes the <code><var>callbackFn</var></code> function
  once for each element present in the typed array, excluding holes in the typed array,
  receiving four arguments: the initial value (or value from the previous
  <code><var>callbackFn</var></code> call), the value of the current element, the current
  index, and the typed array over which iteration is occurring.</p>

<p>The first time the callback is called, <code><var>accumulator</var></code> and
  <code><var>currentValue</var></code> can be one of two values. If
  <code><var>initialValue</var></code> is provided in the call to <code>reduce</code>,
  then <code><var>accumulator</var></code> will be equal to
  <code><var>initialValue</var></code> and <code><var>currentValue</var></code> will be
  equal to the first value in the typed array. If no <code><var>initialValue</var></code>
  was provided, then <code><var>accumulator</var></code> will be equal to the first
  value in the typed array and <code><var>currentValue</var></code> will be equal to the
  second.</p>

<p>If the typed array is empty and no <code><var>initialValue</var></code> was provided,
  {{jsxref("TypeError")}} would be thrown. If the typed array has only one element
  (regardless of position) and no <code><var>initialValue</var></code> was provided, or if
  <code><var>initialValue</var></code> is provided but the typed array is empty, the solo
  value would be returned without calling <code><var>callbackFn</var></code>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Sum_up_all_values_within_an_array">Sum up all values within an array</h3>

<pre class="brush: js">var total = new Uint8Array([0, 1, 2, 3]).reduce(function(a, b) {
  return a + b;
});
// total == 6
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>This method uses the same algorithm as {{jsxref("Array.prototype.reduce()")}}, so the
  same polyfill can be used here: replace <code>Array.prototype.reduce</code> with
  <code>TypedArray.prototype.reduce</code>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>TypedArray.prototype.reduce</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-typed-arrays"><code>core-js</code></a></li>
  <li>{{jsxref("TypedArray.prototype.reduceRight()")}}</li>
  <li>{{jsxref("Array.prototype.reduce()")}}</li>
</ul>
