---
title: TypedArray.from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
tags:
- ECMAScript 2015
- JavaScript
- Method
- TypedArray
- TypedArrays
- from
- Polyfill
browser-compat: javascript.builtins.TypedArray.from
---
<div>{{JSRef}}</div>

<p>The <strong><code><var>TypedArray</var>.from()</code></strong> method creates a new <a
        href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed
        array</a> from an array-like or iterable object. This method is nearly the same as
    {{jsxref("Array.from()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-from.html","shorter")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Arrow function
TypedArray.from(arrayLike, (currentValue) => { ... } )
TypedArray.from(arrayLike, (currentValue, index) => { ... } )
TypedArray.from(arrayLike, (currentValue, index, array) => { ... } )

// Mapping function
TypedArray.from(arrayLike, mapFn)
TypedArray.from(arrayLike, mapFn, thisArg)

// Inline mapping function
TypedArray.from(arrayLike, function mapFn(currentValue) { ... })
TypedArray.from(arrayLike, function mapFn(currentValue, index) { ... })
TypedArray.from(arrayLike, function mapFn(currentValue, index, array){ ... })
TypedArray.from(arrayLike, function mapFn(currentValue, index, array) { ... }, thisArg)
</pre>

<p>Where <code><var>TypedArray</var></code> is one of:</p>

<div class="threecolumns">
    <ul>
        <li>{{jsxref("Int8Array")}}</li>
        <li>{{jsxref("Uint8Array")}}</li>
        <li>{{jsxref("Uint8ClampedArray")}}</li>
        <li>{{jsxref("Int16Array")}}</li>
        <li>{{jsxref("Uint16Array")}}</li>
        <li>{{jsxref("Int32Array")}}</li>
        <li>{{jsxref("Uint32Array")}}</li>
        <li>{{jsxref("Float32Array")}}</li>
        <li>{{jsxref("Float64Array")}}</li>
        <li>{{jsxref("BigInt64Array")}}</li>
        <li>{{jsxref("BigUint64Array")}}</li>
    </ul>
</div>

<h3 id="Parameters">Parameters</h3>

<dl>
    <dt><code><var>arrayLike</var></code></dt>
    <dd>An array-like or iterable object to convert to a typed array.</dd>
    <dt><code><var>mapFn</var></code> {{optional_inline}}</dt>
    <dd>Map function to call on every element of the typed array.</dd>
    <dt><code><var>thisArg</var></code> {{optional_inline}}</dt>
    <dd>Value to use as <code>this</code> when executing <code><var>mapFn</var></code>.
    </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new {{jsxref("TypedArray")}} instance.</p>

<h2 id="Description">Description</h2>

<p><code><var>TypedArray</var>.from()</code> lets you create typed arrays from:</p>

<ul>
    <li>array-like objects (objects with a <code>length</code> property and indexed
        elements); or</li>
    <li><a href="/en-US/docs/Web/JavaScript/Guide/iterable">iterable objects</a> (objects
        where you can get its elements, such as {{jsxref("Map")}} and {{jsxref("Set")}}).
    </li>
</ul>

<p><code><var>TypedArray</var>.from()</code> has the optional parameter
    <code><var>mapFn</var></code>, which allows you to execute a
    {{jsxref("Array.prototype.map", "map()")}} function on each element of the typed array
    (or subclass object) that is being created. This means that the following are
    equivalent:</p>

<ul>
    <li><code><var>TypedArray</var>.from(<var>obj</var>, <var>mapFn</var>, <var>thisArg</var>)</code>
    </li>
    <li><code><var>TypedArray</var>.from(Array.prototype.map.call(<var>obj</var>, <var>mapFn</var>, <var>thisArg</var>))</code>.
    </li>
</ul>

<p>The <code>length</code> property of the <code>from()</code> method is <code>1</code>.
</p>

<h3 id="Differences_from_Array.from">Differences from Array.from()</h3>

<p>Some subtle distinctions between {{jsxref("Array.from()")}} and
    <code><var>TypedArray</var>.from()</code>:</p>

<ul>
    <li>If the <code><var>thisArg</var></code> value passed to
        <code><var>TypedArray</var>.from()</code> is not a constructor,
        <code><var>TypedArray</var>.from()</code> will throw a {{jsxref("TypeError")}},
        where <code>Array.from()</code> defaults to creating a new {{jsxref("Array")}}.
    </li>
    <li><code><var>TypedArray</var>.from()</code> uses <code>[[Put]]</code> where
        <code>Array.from()</code> uses <code>[[DefineProperty]]</code>. Hence, when
        working with {{jsxref("Proxy")}} objects, it calls
        {{jsxref("Global_Objects/Proxy/handler/set", "handler.set")}} to create new
        elements rather than {{jsxref("Global_Objects/Proxy/handler/defineProperty",
        "handler.defineProperty()")}}.</li>
    <li>When the <code><var>source</var></code> parameter is an iterator, the
        <code><var>TypedArray</var>.from()</code> first collects all the values from the
        iterator, then creates an instance of <code><var>thisArg</var></code> using the
        count, then sets the values on the instance. <code>Array.from()</code> sets each
        value as it receives them from the iterator, then sets its <code>length</code> at
        the end.</li>
    <li>When <code>Array.from()</code> gets an array-like which isn't an iterator, it
        respects holes. <code><var>TypedArray</var>.from()</code> will ensure the result
        is dense.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="From_an_iterable_object_Set">From an iterable object (Set)</h3>

<pre class="brush: js">const s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]
</pre>

<h3 id="From_a_string">From a string</h3>

<pre class="brush: js">Int16Array.from('123');
// Int16Array [ 1, 2, 3 ]
</pre>

<h3 id="Use_with_arrow_function_and_map">Use with arrow function and map</h3>

<p>Using an arrow function as the map function to manipulate the elements</p>

<pre class="brush: js">Float32Array.from([1, 2, 3], x =&gt; x + x);
// Float32Array [ 2, 4, 6 ]
</pre>

<h3 id="Generate_a_sequence_of_numbers">Generate a sequence of numbers</h3>

<pre class="brush: js">Uint8Array.from({length: 5}, (v, k) =&gt; k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
    <li>A polyfill of <code>TypedArray.from</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-typed-arrays"><code>core-js</code></a></li>
    <li>{{jsxref("TypedArray.of()")}}</li>
    <li>{{jsxref("Array.from()")}}</li>
    <li>{{jsxref("Array.prototype.map()")}}</li>
    <li><a href="https://github.com/behnammodi/polyfill/blob/v0.0.1/int-8-array.polyfill.js">A polyfill</a></li>
</ul>
