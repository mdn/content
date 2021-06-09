---
title: TypedArray.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
tags:
- ECMAScript 2015
- JavaScript
- Method
- Prototype
- TypedArray
- TypedArrays
- Polyfill
browser-compat: javascript.builtins.TypedArray.some
---
<div>{{JSRef}}</div>

<p>The <code><strong>some()</strong></code> method tests whether some element in the typed
  array passes the test implemented by the provided function. This method has the same
  algorithm as {{jsxref("Array.prototype.some()")}}<em>.</em> <em>TypedArray</em> is one
  of the <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed
    array types</a> here.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-some.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Arrow function
some((element) => { ... } )
some((element, index) => { ... } )
some((element, index, array) => { ... } )

// Callback function
some(callbackFn)
some(callbackFn, thisArg)

// Inline callback function
some(function callbackFn(element) { ... })
some(function callbackFn(element, index) { ... })
some(function callbackFn(element, index, array){ ... })
some(function callbackFn(element, index, array) { ... }, thisArg)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>callbackFn</code></dt>
  <dd>Function to test for each element, taking three arguments:
    <dl>
      <dt><code>element</code></dt>
      <dd>The current element being processed in the typed array.</dd>
      <dt><code>index</code></dt>
      <dd>The index of the current element being processed in the typed array.</dd>
      <dt><code>array</code></dt>
      <dd>The typed array <code>some</code> was called upon.</dd>
    </dl>
  </dd>
  <dt><code>thisArg</code></dt>
  <dd>Optional. Value to use as <code>this</code> when executing <code>callback</code>.
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p><code><strong>true</strong></code> if the callback function returns a <a
    href="/en-US/docs/Glossary/truthy">truthy</a> value for any array element; otherwise,
  <code><strong>false</strong></code>.</p>

<h2 id="Description">Description</h2>

<p>The <code>some</code> method executes the <code>callbackFn</code> function once for each
  element present in the typed array until it finds one where <code>callbackFn</code>
  returns a true value. If such an element is found, <code>some</code> immediately returns
  <code>true</code>. Otherwise, <code>some</code> returns <code>false</code>.</p>

<p><code>callbackFn</code> is invoked with three arguments: the value of the element, the
  index of the element, and the array object being traversed.</p>

<p>If a <code>thisArg</code> parameter is provided to <code>some</code>, it will be passed
  to <code>callbackFn</code> when invoked, for use as its <code>this</code> value.
  Otherwise, the value <code>undefined</code> will be passed for use as its
  <code>this</code> value.  The <code>this</code> value ultimately observable by
  <code>callbackFn</code> is determined according to <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/this">the usual rules for
    determining the <code>this</code> seen by a function</a>.</p>

<p><code>some</code> does not mutate the typed array on which it is called.</p>

<h2 id="Polyfill">Polyfill</h2>

<p>Since there is no global object with the name <em>TypedArray</em>, polyfilling must be
  done on an "as needed" basis.</p>

<pre class="brush: js">// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
if (!Uint8Array.prototype.some) {
  Object.defineProperty(Uint8Array.prototype, 'some', {
    value: Array.prototype.some
  });
}
</pre>

<p>If you need to support truly obsolete JavaScript engines that don't support
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a></code>,
  it's best not to polyfill <code>Array.prototype</code> methods at all, as you can't make
  them non-enumerable.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Testing_size_of_all_typed_array_elements">Testing size of all typed array elements
</h3>

<p>The following example tests whether any element in the typed array is bigger than 10.
</p>

<pre class="brush: js">function isBiggerThan10(element, index, array) {
  return element &gt; 10;
}
new Uint8Array([2, 5, 8, 1, 4]).some(isBiggerThan10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(isBiggerThan10); // true
</pre>

<h3 id="Testing_typed_array_elements_using_arrow_functions">Testing typed array elements
  using arrow functions</h3>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow
    functions</a> provide a shorter syntax for the same test.</p>

<pre class="brush: js">new Uint8Array([2, 5, 8, 1, 4]).some(elem =&gt; elem &gt; 10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(elem =&gt; elem &gt; 10); // true</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>TypedArray.prototype.some</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-typed-arrays"><code>core-js</code></a></li>
  <li>{{jsxref("TypedArray.prototype.every()")}}</li>
  <li>{{jsxref("Array.prototype.some()")}}</li>
</ul>
