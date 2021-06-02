---
title: TypedArray.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
tags:
- ECMAScript 2015
- JavaScript
- Method
- Prototype
- Reference
- TypedArray
- TypedArrays
- Polyfill
browser-compat: javascript.builtins.TypedArray.findIndex
---
<div>{{JSRef}}</div>

<p>The <strong><code>findIndex()</code></strong> method returns an <strong>index</strong>
  in the typed array, if an element in the typed array satisfies the provided testing
  function. Otherwise -1 is returned.</p>

<p>See also the {{jsxref("TypedArray.find", "find()")}} method, which returns the
  <strong>value</strong> of a found element in the typed array instead of its index.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-findindex.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Arrow function
findIndex((element) => { ... } )
findIndex((element, index) => { ... } )
findIndex((element, index, array) => { ... } )

// Callback function
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// Inline callback function
findIndex(function callbackFn(element) { ... })
findIndex(function callbackFn(element, index) { ... })
findIndex(function callbackFn(element, index, array){ ... })
findIndex(function callbackFn(element, index, array) { ... }, thisArg)
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
      <dd>The typed array <code>findIndex()</code> was called upon.</dd>
    </dl>
  </dd>
  <dt><code><var>thisArg</var></code> {{optional_inline}}</dt>
  <dd>Object to use as <code>this</code> when executing <code><var>callbackFn</var></code>.
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An index in the array if an element passes the test; otherwise, <code>-1</code>.</p>

<h2 id="Description">Description</h2>

<p>The <code>findIndex()</code> method executes the <code><var>callbackFn</var></code>
  function once for each element present in the typed array until it finds one where
  <code><var>callbackFn</var></code> returns a true value. If such an element is found,
  <code>findIndex()</code> immediately returns the index of that element. Otherwise,
  <code>findIndex()</code> returns -1. <code><var>callbackFn</var></code> is invoked only
  for indexes of the typed array which have assigned values; it is not invoked for indexes
  which have been deleted or which have never been assigned values.</p>

<p><code><var>callbackFn</var></code> is invoked with three arguments: the value of the
  element, the index of the element, and the typed array object being traversed.</p>

<p>If a <code><var>thisArg</var></code> parameter is provided to <code>findIndex()</code>,
  it will be used as the <code>this</code> for each invocation of the
  <code><var>callback</var></code>. If it is not provided, then {{jsxref("undefined")}} is
  used.</p>

<p><code>findIndex()</code> does not mutate the typed array on which it is called.</p>

<p>The range of elements processed by <code>findIndex()</code> is set before the first
  invocation of <code><var>callbackFn</var></code>. Elements that are appended to the typed
  array after the call to <code>findIndex()</code> begins will not be visited by
  <code><var>callbackFn</var></code>. If an existing, unvisited element of the typed array
  is changed by <code><var>callbackFn</var></code>, its value passed to the visiting
  <code><var>callbackFn</var></code> will be the value at the time that
  <code>findIndex()</code> visits that element's index; elements that are deleted are not
  visited.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Find_the_index_of_a_prime_number_in_a_typed_array">Find the index of a prime
  number in a typed array</h3>

<p>The following example finds the index of an element in the typed array that is a prime
  number (or returns <code>-1</code> if there is no prime number).</p>

<pre class="brush: js">function isPrime(element, index, array) {
  var start = 2;
  while (start &lt;= Math.sqrt(element)) {
    if (element % start++ &lt; 1) {
      return false;
    }
  }
  return element &gt; 1;
}

var uint8 = new Uint8Array([4, 6, 8, 12]);
var uint16 = new Uint16Array([4, 6, 7, 12]);

console.log(uint8.findIndex(isPrime)); // -1, not found
console.log(uint16.findIndex(isPrime)); // 2
</pre>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">TypedArray.prototype.findIndex = Array.prototype.findIndex = Array.prototype.findIndex || function(evaluator, thisArg) {
        'use strict';
        if (!this) {
          throw new TypeError('Array.prototype.some called on null or undefined');
        }

        if (typeof(evaluator) !== 'function') {
            if (typeof(evaluator) === 'string') {
                // Attempt to convert it to a function
                if ( ! (evaluator = eval(evaluator)) ){
                    throw new TypeError();
                }
            } else {
                throw new TypeError();
            }
        }

        var i;
        if (thisArg === undefined) {  // Optimize for thisArg
            for (i in this) {
                if (evaluator(this[i], i, this)) {
                    return i;
                }
            }
            return -1;
        }
        for (i in this) {
            if (evaluator.call(thisArg, this[i], i, this)) {
                return i;
            }
        }
        return -1;
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>TypedArray.prototype.findIndex</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-typed-arrays"><code>core-js</code></a></li>
  <li>{{jsxref("TypedArray.prototype.find()")}}</li>
  <li>{{jsxref("TypedArray.prototype.indexOf()")}}</li>
</ul>
