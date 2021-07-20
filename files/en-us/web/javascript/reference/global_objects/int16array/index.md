---
title: Int16Array
slug: Web/JavaScript/Reference/Global_Objects/Int16Array
tags:
  - Class
  - JavaScript
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.Int16Array
---
<div>{{JSRef}}</div>

<p>The <strong><code>Int16Array</code></strong> typed array represents an array of twos-complement 16-bit signed integers in the platform byte order. If control over byte order is needed, use {{jsxref("DataView")}} instead. The contents are initialized to <code>0</code>. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("Global_Objects/Int16Array/Int16Array", "Int16Array()")}}</dt>
 <dd>Creates a new <code>Int16Array</code> object.</dd>
</dl>

<h2 id="Static_properties">Static properties</h2>

<dl>
 <dt>{{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int16Array.BYTES_PER_ELEMENT")}}</dt>
 <dd>Returns a number value of the element size. <code>2</code> in the case of an <code>Int16Array</code>.</dd>
 <dt>{{jsxref("TypedArray.name", "Int16Array.name")}}</dt>
 <dd>Returns the string value of the constructor name. In the case of the <code>Int16Array</code> type: "<code>Int16Array</code>".</dd>
</dl>

<h2 id="Static_methods">Static methods</h2>

<dl>
 <dt>{{jsxref("TypedArray.from", "Int16Array.from()")}}</dt>
 <dd>Creates a new <code>Int16Array</code> from an array-like or iterable object. See also {{jsxref("Array.from()")}}.</dd>
 <dt>{{jsxref("TypedArray.of", "Int16Array.of()")}}</dt>
 <dd>Creates a new <code>Int16Array</code> with a variable number of arguments. See also {{jsxref("Array.of()")}}.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{jsxref("TypedArray.prototype.buffer", "Int16Array.prototype.buffer")}}</dt>
 <dd>Returns the {{jsxref("ArrayBuffer")}} referenced by the <code>Int16Array</code>. Fixed at construction time and thus <strong>read only</strong>.</dd>
 <dt>{{jsxref("TypedArray.prototype.byteLength", "Int16Array.prototype.byteLength")}}</dt>
 <dd>Returns the length (in bytes) of the <code>Int16Array</code> from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus <strong>read only.</strong></dd>
 <dt>{{jsxref("TypedArray.prototype.byteOffset", "Int16Array.prototype.byteOffset")}}</dt>
 <dd>Returns the offset (in bytes) of the <code>Int16Array</code> from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus <strong>read only.</strong></dd>
 <dt>{{jsxref("TypedArray.prototype.length", "Int16Array.prototype.length")}}</dt>
 <dd>Returns the number of elements held in the <code>Int16Array</code>. Fixed at construction time and thus <strong>read only.</strong></dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("TypedArray.copyWithin", "Int16Array.prototype.copyWithin()")}}</dt>
 <dd>Copies a sequence of array elements within the array. See also {{jsxref("Array.prototype.copyWithin()")}}.</dd>
 <dt>{{jsxref("TypedArray.entries", "Int16Array.prototype.entries()")}}</dt>
 <dd>Returns a new <em>array iterator</em> object that contains the key/value pairs for each index in the array. See also {{jsxref("Array.prototype.entries()")}}.</dd>
 <dt>{{jsxref("TypedArray.every", "Int16Array.prototype.every()")}}</dt>
 <dd>Tests whether all elements in the array pass the test provided by a function. See also {{jsxref("Array.prototype.every()")}}.</dd>
 <dt>{{jsxref("TypedArray.fill", "Int16Array.prototype.fill()")}}</dt>
 <dd>Fills all the elements of an array from a start index to an end index with a static value. See also {{jsxref("Array.prototype.fill()")}}.</dd>
 <dt>{{jsxref("TypedArray.filter", "Int16Array.prototype.filter()")}}</dt>
 <dd>Creates a new array with all of the elements of this array for which the provided filtering function returns <code>true</code>. See also {{jsxref("Array.prototype.filter()")}}.</dd>
 <dt>{{jsxref("TypedArray.find", "Int16Array.prototype.find()")}}</dt>
 <dd>Returns the found value in the array, if an element in the array satisfies the provided testing function or <code>undefined</code> if not found. See also {{jsxref("Array.prototype.find()")}}.</dd>
 <dt>{{jsxref("TypedArray.findIndex", "Int16Array.prototype.findIndex()")}}</dt>
 <dd>Returns the found index in the array, if an element in the array satisfies the provided testing function or <code>-1</code> if not found. See also {{jsxref("Array.prototype.findIndex()")}}.</dd>
 <dt>{{jsxref("TypedArray.forEach", "Int16Array.prototype.forEach()")}}</dt>
 <dd>Calls a function for each element in the array. See also {{jsxref("Array.prototype.forEach()")}}.</dd>
 <dt>{{jsxref("TypedArray.includes", "Int16Array.prototype.includes()")}}</dt>
 <dd>Determines whether a typed array includes a certain element, returning <code>true</code> or <code>false</code> as appropriate. See also {{jsxref("Array.prototype.includes()")}}.</dd>
 <dt>{{jsxref("TypedArray.indexOf", "Int16Array.prototype.indexOf()")}}</dt>
 <dd>Returns the first (least) index of an element within the array equal to the specified value, or <code>-1</code> if none is found. See also {{jsxref("Array.prototype.indexOf()")}}.</dd>
 <dt>{{jsxref("TypedArray.join", "Int16Array.prototype.join()")}}</dt>
 <dd>Joins all elements of an array into a string. See also {{jsxref("Array.prototype.join()")}}.</dd>
 <dt>{{jsxref("TypedArray.keys", "Int16Array.prototype.keys()")}}</dt>
 <dd>Returns a new <em>array iterator</em> that contains the keys for each index in the array. See also {{jsxref("Array.prototype.keys()")}}.</dd>
 <dt>{{jsxref("TypedArray.lastIndexOf", "Int16Array.prototype.lastIndexOf()")}}</dt>
 <dd>Returns the last (greatest) index of an element within the array equal to the specified value, or <code>-1</code> if none is found. See also {{jsxref("Array.prototype.lastIndexOf()")}}.</dd>
 <dt>{{jsxref("TypedArray.map", "Int16Array.prototype.map()")}}</dt>
 <dd>Creates a new array with the results of calling a provided function on every element in this array. See also {{jsxref("Array.prototype.map()")}}.</dd>
 <dt>{{jsxref("TypedArray.reduce", "Int16Array.prototype.reduce()")}}</dt>
 <dd>Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduce()")}}.</dd>
 <dt>{{jsxref("TypedArray.reduceRight", "Int16Array.prototype.reduceRight()")}}</dt>
 <dd>Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduceRight()")}}.</dd>
 <dt>{{jsxref("TypedArray.reverse", "Int16Array.prototype.reverse()")}}</dt>
 <dd>Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.</dd>
 <dt>{{jsxref("TypedArray.set", "Int16Array.prototype.set()")}}</dt>
 <dd>Stores multiple values in the typed array, reading input values from a specified array.</dd>
 <dt>{{jsxref("TypedArray.slice", "Int16Array.prototype.slice()")}}</dt>
 <dd>Extracts a section of an array and returns a new array. See also {{jsxref("Array.prototype.slice()")}}.</dd>
 <dt>{{jsxref("TypedArray.some", "Int16Array.prototype.some()")}}</dt>
 <dd>Returns <code>true</code> if at least one element in this array satisfies the provided testing function. See also {{jsxref("Array.prototype.some()")}}.</dd>
 <dt>{{jsxref("TypedArray.sort", "Int16Array.prototype.sort()")}}</dt>
 <dd>Sorts the elements of an array in place and returns the array. See also {{jsxref("Array.prototype.sort()")}}.</dd>
 <dt>{{jsxref("TypedArray.subarray", "Int16Array.prototype.subarray()")}}</dt>
 <dd>Returns a new <code>Int16Array</code> from the given start and end element index.</dd>
 <dt>{{jsxref("TypedArray.values", "Int16Array.prototype.values()")}}</dt>
 <dd>Returns a new <strong>array iterator object that contains the values for each index in the array. See also {{jsxref("Array.prototype.values()")}}.</strong></dd>
 <dt><strong>{{jsxref("TypedArray.toLocaleString", "Int16Array.prototype.toLocaleString()")}}</strong></dt>
 <dd><strong>Returns a localized string representing the array and its elements. See also {{jsxref("Array.prototype.toLocaleString()")}}.</strong></dd>
 <dt><strong>{{jsxref("TypedArray.toString", "Int16Array.prototype.toString()")}}</strong></dt>
 <dd><strong>Returns a string representing the array and its elements. See also {{jsxref("Array.prototype.toString()")}}.</strong></dd>
 <dt><strong>{{jsxref("TypedArray.@@iterator", "Int16Array.prototype[@@iterator]()")}}</strong></dt>
 <dd><strong>Returns a new <em>array iterator</em> object that contains the values for each index in the array.</strong></dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Different_ways_to_create_an_Int16Array">Different ways to create an Int16Array</h3>

<pre class="brush: js"><strong>// From a length
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2
console.log(int16.BYTES_PER_ELEMENT); // 2

// From an array
var arr = new Int16Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Int16Array([21, 31]);
var y = new Int16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Int16Array(buffer, 0, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var int16 = new Int16Array(iterable);
// Int16Array[1, 2, 3]
</strong></pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p><strong>{{Compat}}</strong></p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>Int16Array</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-typed-arrays"><code>core-js</code></a></li>
 <li><strong><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a></strong></li>
 <li><strong>{{jsxref("ArrayBuffer")}}</strong></li>
 <li><strong>{{jsxref("DataView")}}</strong></li>
</ul>
