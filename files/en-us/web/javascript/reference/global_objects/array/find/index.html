---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.find
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <code>find()</code> method returns the value of the first
    element in the provided array that satisfies the provided testing function. If no
    values satisfy the testing function, {{jsxref("undefined")}} is returned.</span></p>

<div>{{EmbedInteractiveExample("pages/js/array-find.html","shorter")}}</div>

<ul>
  <li>If you need the <strong>index</strong> of the found element in the array, use
    {{jsxref("Array.findIndex", "findIndex()")}}.</li>
  <li>If you need to find the <strong>index of a value</strong>, use
    {{jsxref("Array.prototype.indexOf()")}}. (It’s similar to {{jsxref("Array.findIndex",
    "findIndex()")}}, but checks each element for equality with the value instead of using
    a testing function.)</li>
  <li>If you need to find if a value <strong>exists</strong> in an array, use
    {{jsxref("Array.prototype.includes()")}}. Again, it checks each element for equality
    with the value instead of using a testing function.</li>
  <li>If you need to find if any element satisfies the provided testing function, use
    {{jsxref("Array.prototype.some()")}}.</li>
</ul>

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
  <dd>Function to execute on each value in the array, taking 3 arguments:
    <dl>
      <dt><code><var>element</var></code></dt>
      <dd>The current element in the array.</dd>
      <dt><code><var>index</var></code> {{optional_inline}}</dt>
      <dd>The index (position) of the current element in the array.</dd>
      <dt><code><var>array</var></code> {{optional_inline}}</dt>
      <dd>The array that <code>find</code> was called on.</dd>
    </dl>
  </dd>
  <dt><code><var>thisArg</var></code> {{optional_inline}}</dt>
  <dd>Object to use as {{jsxref("Operators/this", "this")}} inside
    <code><var>callbackFn</var></code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <strong>value</strong> of the <strong>first element</strong> in the array that
  satisfies the provided testing function. Otherwise, {{jsxref("undefined")}} is returned.
</p>

<h2 id="Description">Description</h2>

<p>The <code>find</code> method executes the <code><var>callbackFn</var></code> function
  once for each index of the array until the <code><var>callbackFn</var></code> returns a <a
    href="/en-US/docs/Glossary/Truthy">truthy</a> value. If so, <code>find</code>
  immediately returns the value of that element. Otherwise, <code>find</code> returns
  {{jsxref("undefined")}}.</p>

<p><code><var>callbackFn</var></code> is invoked for <em>every</em> index of the array, not
  just those with assigned values. This means it may be less efficient for sparse arrays,
  compared to methods that only visit assigned values.</p>

<p>If a <code><var>thisArg</var></code> parameter is provided to <code>find</code>, it
  will be used as the <code>this</code> value inside each invocation of the
  <code><var>callbackFn</var></code>. If it is not provided, then {{jsxref("undefined")}} is
  used.</p>

<p>The <code>find</code> method does not mutate the array on which it is called, but the
  function provided to <code><var>callbackFn</var></code> can. If so, the elements processed
  by <code>find</code> are set <em>before</em> the first invocation of
  <code><var>callbackFn</var></code>. Therefore:</p>

<ul>
  <li><code><var>callbackFn</var></code> will not visit any elements added to the array
    after the call to <code>find</code> begins.</li>
  <li>If an existing, yet-unvisited element of the array is changed by
    <code><var>callbackFn</var></code>, its value passed to the
    <code><var>callbackFn</var></code> will be the value at the time <code>find</code>
    visits that element's index.</li>
  <li>Elements that are {{jsxref("Operators/delete", "deleted")}} are still visited.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Find_an_object_in_an_array_by_one_of_its_properties">Find an object in an array by
  one of its properties</h3>

<pre class="brush: js">const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }</pre>

<h4 id="Using_arrow_function_and_destructuring">Using arrow function and destructuring
</h4>

<pre class="brush: js">const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find( ({ name }) =&gt; name === 'cherries' );

console.log(result) // { name: 'cherries', quantity: 5 }</pre>

<h3 id="Find_a_prime_number_in_an_array">Find a prime number in an array</h3>

<p>The following example finds an element in the array that is a prime number (or returns
  {{jsxref("undefined")}} if there is no prime number):</p>

<pre class="brush: js">function isPrime(element, index, array) {
  let start = 2;
  while (start &lt;= Math.sqrt(element)) {
    if (element % start++ &lt; 1) {
      return false;
    }
  }
  return element &gt; 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
</pre>

<p>The following examples show that nonexistent and deleted elements <em>are</em> visited,
  and that the value passed to the callback is their value when visited:</p>

<pre class="brush: js">// Declare array with no elements at indexes 2, 3, and 4
const array = [0,1,,,,5,6];

// Shows all indexes, not just those with assigned values
array.find(function(value, index) {
  console.log('Visited index ', index, ' with value ', value);
});

// Shows all indexes, including deleted
array.find(function(value, index) {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log('Deleting array[5] with value ', array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log('Visited index ', index, ' with value ', value);
});
// expected output:
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.prototype.find</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li>{{jsxref("Array.prototype.findIndex()")}} – find and return an index</li>
  <li>{{jsxref("Array.prototype.includes()")}} – test whether a value exists in the array
  </li>
  <li>{{jsxref("Array.prototype.filter()")}} – remove all non-matching elements</li>
  <li>{{jsxref("Array.prototype.every()")}} – test all elements</li>
  <li>{{jsxref("Array.prototype.some()")}} – test until one element matches</li>
</ul>
