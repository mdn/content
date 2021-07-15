---
title: Int8Array
slug: Web/JavaScript/Reference/Global_Objects/Int8Array
tags:
  - Class
  - Int8Array
  - JavaScript
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.Int8Array
---
<div>{{JSRef}}</div>

<p>The <strong><code>Int8Array</code></strong> typed array represents an array of twos-complement 8-bit signed integers. The contents are initialized to <code>0</code>. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("Global_Objects/Int8Array/Int8Array", "Int8Array()")}}</dt>
 <dd>Creates a new <code>Int8Array</code> object.</dd>
</dl>

<h2 id="Static_properties">Static properties</h2>

<dl>
 <dt>{{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int8Array.BYTES_PER_ELEMENT")}}</dt>
 <dd>Returns a number value of the element size. <code>1</code> in the case of an <code>Int8Array</code>.</dd>
 <dt>{{jsxref("TypedArray.name", "Int8Array.name")}}</dt>
 <dd>Returns the string value of the constructor name. In the case of the <code>Int8Array</code> type: "<code>Int8Array</code>".</dd>
</dl>

<h2 id="Static_methods">Static methods</h2>

<dl>
 <dt>{{jsxref("TypedArray.from", "Int8Array.from()")}}</dt>
 <dd>Creates a new <code>Int8Array</code> from an array-like or iterable object. See also {{jsxref("Array.from()")}}.</dd>
 <dt>{{jsxref("TypedArray.of", "Int8Array.of()")}}</dt>
 <dd>Creates a new <code>Int8Array</code> with a variable number of arguments. See also {{jsxref("Array.of()")}}.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{jsxref("TypedArray.prototype.buffer", "Int8Array.prototype.buffer")}}</dt>
 <dd>Returns the {{jsxref("ArrayBuffer")}} referenced by the <code>Int8Array</code>. Fixed at construction time and thus <strong>read only</strong>.</dd>
 <dt>{{jsxref("TypedArray.prototype.byteLength", "Int8Array.prototype.byteLength")}}</dt>
 <dd>Returns the length (in bytes) of the <code>Int8Array</code> from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus <strong>read only.</strong></dd>
 <dt>{{jsxref("TypedArray.prototype.byteOffset", "Int8Array.prototype.byteOffset")}}</dt>
 <dd>Returns the offset (in bytes) of the <code>Int8Array</code> from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus <strong>read only.</strong></dd>
 <dt>{{jsxref("TypedArray.prototype.length", "Int8Array.prototype.length")}}</dt>
 <dd>Returns the number of elements held in the <code>Int8Array</code>. Fixed at construction time and thus <strong>read only.</strong></dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("TypedArray.copyWithin", "Int8Array.prototype.copyWithin()")}}</dt>
 <dd>Copies a sequence of array elements within the array. See also {{jsxref("Array.prototype.copyWithin()")}}.</dd>
 <dt>{{jsxref("TypedArray.entries", "Int8Array.prototype.entries()")}}</dt>
 <dd>Returns a new <em>array iterator</em> object that contains the key/value pairs for each index in the array. See also {{jsxref("Array.prototype.entries()")}}.</dd>
 <dt>{{jsxref("TypedArray.every", "Int8Array.prototype.every()")}}</dt>
 <dd>Tests whether all elements in the array pass the test provided by a function. See also {{jsxref("Array.prototype.every()")}}.</dd>
 <dt>{{jsxref("TypedArray.fill", "Int8Array.prototype.fill()")}}</dt>
 <dd>Fills all the elements of an array from a start index to an end index with a static value. See also {{jsxref("Array.prototype.fill()")}}.</dd>
 <dt>{{jsxref("TypedArray.filter", "Int8Array.prototype.filter()")}}</dt>
 <dd>Creates a new array with all of the elements of this array for which the provided filtering function returns <code>true</code>. See also {{jsxref("Array.prototype.filter()")}}.</dd>
 <dt>{{jsxref("TypedArray.find", "Int8Array.prototype.find()")}}</dt>
 <dd>Returns the found value in the array, if an element in the array satisfies the provided testing function or <code>undefined</code> if not found. See also {{jsxref("Array.prototype.find()")}}.</dd>
 <dt>{{jsxref("TypedArray.findIndex", "Int8Array.prototype.findIndex()")}}</dt>
 <dd>Returns the found index in the array, if an element in the array satisfies the provided testing function or <code>-1</code> if not found. See also {{jsxref("Array.prototype.findIndex()")}}.</dd>
 <dt>{{jsxref("TypedArray.forEach", "Int8Array.prototype.forEach()")}}</dt>
 <dd>Calls a function for each element in the array. See also {{jsxref("Array.prototype.forEach()")}}.</dd>
 <dt>{{jsxref("TypedArray.includes", "Int8Array.prototype.includes()")}}</dt>
 <dd>Determines whether a typed array includes a certain element, returning <code>true</code> or <code>false</code> as appropriate. See also {{jsxref("Array.prototype.includes()")}}.</dd>
 <dt>{{jsxref("TypedArray.indexOf", "Int8Array.prototype.indexOf()")}}</dt>
 <dd>Returns the first (least) index of an element within the array equal to the specified value, or <code>-1</code> if none is found. See also {{jsxref("Array.prototype.indexOf()")}}.</dd>
 <dt>{{jsxref("TypedArray.join", "Int8Array.prototype.join()")}}</dt>
 <dd>Joins all elements of an array into a string. See also {{jsxref("Array.prototype.join()")}}.</dd>
 <dt>{{jsxref("TypedArray.keys", "Int8Array.prototype.keys()")}}</dt>
 <dd>Returns a new <em>array iterator</em> that contains the keys for each index in the array. See also {{jsxref("Array.prototype.keys()")}}.</dd>
 <dt>{{jsxref("TypedArray.lastIndexOf", "Int8Array.prototype.lastIndexOf()")}}</dt>
 <dd>Returns the last (greatest) index of an element within the array equal to the specified value, or <code>-1</code> if none is found. See also {{jsxref("Array.prototype.lastIndexOf()")}}.</dd>
 <dt>{{jsxref("TypedArray.map", "Int8Array.prototype.map()")}}</dt>
 <dd>Creates a new array with the results of calling a provided function on every element in this array. See also {{jsxref("Array.prototype.map()")}}.</dd>
 <dt>{{jsxref("TypedArray.reduce", "Int8Array.prototype.reduce()")}}</dt>
 <dd>Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduce()")}}.</dd>
 <dt>{{jsxref("TypedArray.reduceRight", "Int8Array.prototype.reduceRight()")}}</dt>
 <dd>Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduceRight()")}}.</dd>
 <dt>{{jsxref("TypedArray.reverse", "Int8Array.prototype.reverse()")}}</dt>
 <dd>Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.</dd>
 <dt>{{jsxref("TypedArray.set", "Int8Array.prototype.set()")}}</dt>
 <dd>Stores multiple values in the typed array, reading input values from a specified array.</dd>
 <dt>{{jsxref("TypedArray.slice", "Int8Array.prototype.slice()")}}</dt>
 <dd>Extracts a section of an array and returns a new array. See also {{jsxref("Array.prototype.slice()")}}.</dd>
 <dt>{{jsxref("TypedArray.some", "Int8Array.prototype.some()")}}</dt>
 <dd>Returns <code>true</code> if at least one element in this array satisfies the provided testing function. See also {{jsxref("Array.prototype.some()")}}.</dd>
 <dt>{{jsxref("TypedArray.sort", "Int8Array.prototype.sort()")}}</dt>
 <dd>Sorts the elements of an array in place and returns the array. See also {{jsxref("Array.prototype.sort()")}}.</dd>
 <dt>{{jsxref("TypedArray.subarray", "Int8Array.prototype.subarray()")}}</dt>
 <dd>Returns a new <code>Int8Array</code> from the given start and end element index.</dd>
 <dt>{{jsxref("TypedArray.values", "Int8Array.prototype.values()")}}</dt>
 <dd>Returns a new <em>array iterator</em> object that contains the values for each index in the array. See also {{jsxref("Array.prototype.values()")}}.</dd>
 <dt>{{jsxref("TypedArray.toLocaleString", "Int8Array.prototype.toLocaleString()")}}</dt>
 <dd>Returns a localized string representing the array and its elements. See also {{jsxref("Array.prototype.toLocaleString()")}}.</dd>
 <dt>{{jsxref("TypedArray.toString", "Int8Array.prototype.toString()")}}</dt>
 <dd>Returns a string representing the array and its elements. See also {{jsxref("Array.prototype.toString()")}}.</dd>
 <dt>{{jsxref("TypedArray.@@iterator", "Int8Array.prototype[@@iterator]()")}}</dt>
 <dd>Returns a new <em>array iterator</em> object that contains the values for each index in the array.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Different_ways_to_create_an_Int8Array">Different ways to create an Int8Array</h3>

<pre class="brush: js">// From a length
var int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// From an array
var arr = new Int8Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Int8Array([21, 31]);
var y = new Int8Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Int8Array(buffer, 1, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var int8 = new Int8Array(iterable);
// Int8Array[1, 2, 3]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>Int8Array</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-typed-arrays"><code>core-js</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a></li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li>{{jsxref("DataView")}}</li>
</ul>
