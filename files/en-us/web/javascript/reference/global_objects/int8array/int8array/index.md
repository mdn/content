---
title: Int8Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/Int8Array/Int8Array
tags:
- Constructor
- JavaScript
- Reference
- TypedArray
- Polyfill
browser-compat: javascript.builtins.Int8Array.Int8Array
---
<div>{{JSRef}}</div>

<p>The <strong><code>Int8Array()</code></strong> constructor creates a typed array of
  twos-complement 8-bit signed integers. The contents are initialized to <code>0</code>.
  Once established, you can reference elements in the array using the object's methods, or
  using standard array index syntax (that is, using bracket notation).</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
new Int8Array(); // new in ES2017
new Int8Array(length);
new Int8Array(typedArray);
new Int8Array(object);

new Int8Array(buffer);
new Int8Array(buffer, byteOffset);
new Int8Array(buffer, byteOffset, length);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>length</var></code></dt>
  <dd>When called with a <code><var>length</var></code> argument, an internal array buffer
    is created in memory, of size <code><var>length</var></code><em> multiplied by
      <code>BYTES_PER_ELEMENT</code></em> bytes, containing zeros.</dd>
  <dt><code><var>typedArray</var></code></dt>
  <dd>When called with a <code>typedArray</code> argument, which can be an object of any
    of the typed array types (such as <code>Int32Array</code>), the
    <code><var>typedArray</var></code> gets copied into a new typed array. Each value in
    <code><var>typedArray</var></code> is converted to the corresponding type of the
    constructor before being copied into the new array. The length of the new typed array
    will be same as the length of the <code><var>typedArray</var></code> argument.</dd>
  <dt><code><var>object</var></code></dt>
  <dd>When called with an <code><var>object</var></code> argument, a new typed array is
    created as if by the <code><var>TypedArray</var>.from()</code> method.</dd>
  <dt><code><var>buffer</var></code>, <code><var>byteOffset</var></code>,
    <code><var>length</var></code></dt>
  <dd>When called with a <code><var>buffer</var></code>, and optionally a
    <code><var>byteOffset</var></code> and a <code><var>length</var></code> argument, a
    new typed array view is created that views the specified {{jsxref("ArrayBuffer")}}.
    The <code><var>byteOffset</var></code> and <code><var>length</var></code> parameters
    specify the memory range that will be exposed by the typed array view. If both are
    omitted, all of <code><var>buffer</var></code> is viewed; if only
    <code><var>length</var></code> is omitted, the remainder of
    <code><var>buffer</var></code> is viewed.</dd>
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

<h3 id="Compatibility_notes">Compatibility notes</h3>

<p>Starting with ECMAScript 2015, <code>Int8Array</code> constructors require to be
  constructed with a {{jsxref("Operators/new", "new")}} operator. Calling a
  <code>Int8Array</code> constructor as a function without <code>new</code>, will throw a
  {{jsxref("TypeError")}} from now on.</p>

<pre class="brush: js example-bad">var dv = Int8Array([1, 2, 3]);
// TypeError: calling a builtin Int8Array constructor
// without new is forbidden</pre>

<pre class="brush: js example-good">var dv = new Int8Array([1, 2, 3]);</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Int8Array</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-typed-arrays"><code>core-js</code></a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a></li>
  <li>{{jsxref("ArrayBuffer")}}</li>
  <li>{{jsxref("DataView")}}</li>
</ul>
