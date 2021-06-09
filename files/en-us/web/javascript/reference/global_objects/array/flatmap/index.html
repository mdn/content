---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
tags:
- Array
- JavaScript
- Map
- Method
- Prototype
- Reference
- flatMap
- Polyfill
browser-compat: javascript.builtins.Array.flatMap
---
<div>{{JSRef}}</div>

<p>The <code><strong>flatMap()</strong></code> method returns a new array formed by
  applying a given callback function to each element of the array, and then flattening the
  result by one level. It is identical to a {{jsxref("Array.prototype.map","map()")}}
  followed by a {{jsxref("Array.prototype.flat","flat()")}} of depth 1, but slightly more
  efficient than calling those two methods separately.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Arrow function
flatMap((currentValue) => { ... } )
flatMap((currentValue, index) => { ... } )
flatMap((currentValue, index, array) => { ... } )

// Callback function
flatMap(callbackFn)
flatMap(callbackFn, thisArg)

// Inline callback function
flatMap(function callbackFn(currentValue) { ... })
flatMap(function callbackFn(currentValue, index) { ... })
flatMap(function callbackFn(currentValue, index, array){ ... })
flatMap(function callbackFn(currentValue, index, array) { ... }, thisArg)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>callback</code></dt>
  <dd>Function that produces an element of the new Array, taking three arguments:
    <dl>
      <dt><code>currentValue</code></dt>
      <dd>The current element being processed in the array.</dd>
      <dt><code>index</code>{{optional_inline}}</dt>
      <dd>The index of the current element being processed in the array.</dd>
      <dt><code>array</code>{{optional_inline}}</dt>
      <dd>The array <code>map</code> was called upon.</dd>
    </dl>
  </dd>
  <dt><code>thisArg</code>{{optional_inline}}</dt>
  <dd>Value to use as <code>this</code> when executing <code>callback</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new array with each element being the result of the callback function and flattened
  to a depth of 1.</p>

<h2 id="Description">Description</h2>

<p>See {{jsxref("Array.prototype.map()")}} for a detailed description of the callback
  function. The <code>flatMap</code> method is identical to a
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map</a></code>
  followed by a call to
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat">flat</a></code>
  of depth 1.</p>

<h3 id="Alternative">Alternative</h3>

<h4 id="reduce_and_concat"><code>reduce()</code> and <code>concat()</code></h4>

<pre class="brush: js">var arr = [1, 2, 3, 4];

arr.flatMap(x =&gt; [x, x * 2]);
// is equivalent to
arr.reduce((acc, x) =&gt; acc.concat([x, x * 2]), []);
// [1, 2, 2, 4, 3, 6, 4, 8]
</pre>

<p>Note, however, that this is inefficient and should be avoided for large arrays: in each
  iteration, it creates a new temporary array that must be garbage-collected, and it
  copies elements from the current accumulator array into a new array instead of just
  adding the new elements to the existing array.</p>

<h2 id="Examples">Examples</h2>

<h3 id="map_and_flatMap"><code>map()</code> and <code>flatMap()</code></h3>

<pre class="brush: js">let arr1 = [1, 2, 3, 4];

arr1.map(x =&gt; [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x =&gt; [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x =&gt; [[x * 2]]);
// [[2], [4], [6], [8]]
</pre>

<p>While the above could have been achieved by using map itself, here is an example that
  better showcases the use of <code>flatMap</code>.</p>

<p>Let's generate a list of words from a list of sentences.</p>

<pre class="brush: js">let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x =&gt; x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x =&gt; x.split(" "));
// ["it's","Sunny","in", "", "California"]</pre>

<p>Notice, the output list length can be different from the input list length.</p>

<h3 id="For_adding_and_removing_items_during_a_map">For adding and removing items during
  a <code>map()</code></h3>

<p><code>flatMap</code> can be used as a way to add and remove items (modify the number of
  items) during a <code>map</code>. In other words, it allows you to map <em>many items to
    many items</em> (by handling each input item separately), rather than always
  <em>one-to-one</em>. In this sense, it works like the opposite of <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter</a>.
  Return a 1-element array to keep the item, a multiple-element array to add items, or a
  0-element array to remove the item.</p>

<pre class="brush: js">// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
let a = [5, 4, -3, 20, 17, -33, -4, 18]
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

a.flatMap( (n) =&gt;
  (n &lt; 0) ?      [] :
  (n % 2 == 0) ? [n] :
                 [n-1, 1]
)

// expected output: [4, 1, 4, 20, 16, 1, 18]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.prototype.flatMap</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li>{{jsxref("Array.prototype.flat()")}}</li>
  <li>{{jsxref("Array.prototype.map()")}}</li>
  <li>{{jsxref("Array.prototype.reduce()")}}</li>
  <li>{{jsxref("Array.prototype.concat()")}}</li>
  <li><a href="https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js">A polyfill</a></li>
</ul>
