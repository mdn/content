---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
tags:
- Array
- ECMAScript 2015
- JavaScript
- Method
- Prototype
- Polyfill
browser-compat: javascript.builtins.Array.fill
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <code><strong>fill()</strong></code> method changes all
    elements in an array to a static value, from a start index (default <code>0</code>) to
    an end index (default <code>array.length</code>). It returns the modified
    array.</span></p>

<div>{{EmbedInteractiveExample("pages/js/array-fill.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
fill(value)
fill(value, start)
fill(value, start, end)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code><var>value</var></code></dt>
 <dd>Value to fill the array with. (Note all elements in the array will be this exact value.)</dd>
 <dt><code><var>start</var></code> {{optional_inline}}</dt>
 <dd>Start index, default <code>0</code>.</dd>
 <dt><code><var>end</var></code> {{optional_inline}}</dt>
 <dd>End index, default <code>arr.length</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The modified array, filled with <code><var>value</var></code>.</p>

<h2 id="Description">Description</h2>

<ul>
 <li>If <code><var>start</var></code> is negative, it is treated as <code>array.length + <var>start</var></code>.</li>
 <li>If <code><var>end</var></code> is negative, it is treated as <code>array.length + <var>end</var></code>.</li>
 <li><code>fill</code> is intentionally generic: it does not require that its <code>this</code> value be an <code>Array</code> object.</li>
 <li><code>fill</code> is a mutator method: it will change the array itself and return it, not a copy of it.</li>
 <li>If the first parameter is an object, each slot in the array will reference that object.</li>
</ul>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      // Steps 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length &gt;&gt;&gt; 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start &gt;&gt; 0;

      // Step 8.
      var k = relativeStart &lt; 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end &gt;&gt; 0;

      // Step 11.
      var finalValue = relativeEnd &lt; 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Step 12.
      while (k &lt; finalValue) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    }
  });
}
</pre>

<p>If you need to support truly obsolete JavaScript engines that don't support {{jsxref("Object.defineProperty")}}, it's best not to polyfill <code>Array.prototype</code> methods at all, as you can't make them non-enumerable.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_fill">Using fill</h3>

<pre class="brush: js">[1, 2, 3].fill(4)                // [4, 4, 4]
[1, 2, 3].fill(4, 1)             // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)          // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)          // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3)          // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)        // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN)      // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5)          // [1, 2, 3]
Array(3).fill(4)                 // [4, 4, 4]
[].fill.call({ length: 3 }, 4)   // {0: 4, 1: 4, 2: 4, length: 3}

// A single object, referenced by each slot of the array:
let arr = Array(3).fill({}) // [{}, {}, {}]
arr[0].hi = "hi"            // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
</pre>

<h3 id="Using_fill_to_create_a_matrix_of_all_1">Using fill() to create a matrix of all 1</h3>

<p>This example shows how to create a matrix of all 1, like the <em>ones()</em> function of Octave or MATLAB.</p>

<pre class="brush: js">const arr = new Array(3);
for (let i=0; i&lt;arr.length; i++) {
  arr[i] = new Array(4).fill(1); // Creating an array of size 4 and filled of 1
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.prototype.fill</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li>{{jsxref("Array")}}</li>
  <li>{{jsxref("TypedArray.prototype.fill()")}}</li>
</ul>
