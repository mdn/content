---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.slice
---
<div>{{JSRef}}</div>

<p>The <strong><code>slice()</code></strong> method returns a new typed array (with a new
  underlying buffer), that contains a copy of a portion of the original typed array. This
  method has the same algorithm as {{jsxref("Array.prototype.slice()")}}.
  <em>TypedArray</em> is one of the <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects">typed
    array types</a> here.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-slice.html","shorter")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
slice()
slice(start)
slice(start, end)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>start</var></code> {{optional_inline}}</dt>
  <dd>
    <p>Zero-based index at which to begin extraction.</p>
    <p>A negative index can be used, indicating an offset from the end of the sequence.
    <code>slice(-2)</code> extracts the last two elements in the sequence.</p>
    <p>If <code><var>start</var></code> is undefined, <code>slice</code> begins from index
    <code>0</code>.</p>
  </dd>
  <dt><code><var>end</var></code> {{optional_inline}}</dt>
  <dd>
    <p>Zero-based index <em>before</em> which to end extraction. <code>slice</code>
    extracts up to but not including <code><var>end</var></code>.</p>
    <p>For example, <code>slice(1,4)</code> extracts the second element through the fourth
    element (elements indexed 1, 2, and 3).</p>
    <p>A negative index can be used, indicating an offset from the end of the sequence.
    <code>slice(2,-1)</code> extracts the third element through the second-to-last element
    in the sequence.</p>
    <p>If <code><var>end</var></code> is omitted, <code>slice</code> extracts through the
    end of the sequence (<code>typedarray.length</code>).</p>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new typed array containing the extracted elements.</p>

<h2 id="Description">Description</h2>

<p>The <code>slice</code> method does not alter the original typed array, but instead returns a copy of a portion of the original typed array. As typed arrays only store primitive values, the copy the <code>slice</code> method returns is always a shallow copy.</p>

<p>If an element is changed in either typed array, the other typed array is not affected.
</p>

<h2 id="Examples">Examples</h2>

<h3 id="Return_a_portion_of_an_existing_typed_array">Return a portion of an existing typed
  array</h3>

<pre class="brush: js">const uint8 = new Uint8Array([1,2,3]);
uint8.slice(1);   // Uint8Array [ 2, 3 ]
uint8.slice(2);   // Uint8Array [ 3 ]
uint8.slice(-2);  // Uint8Array [ 2, 3 ]
uint8.slice(0,1); // Uint8Array [ 1 ]
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>Since there is no global object with the name <em>TypedArray</em>, polyfilling must be
  done on an "as needed" basis.</p>

<pre class="brush: js">if (!Uint8Array.prototype.slice) {
  Object.defineProperty(Uint8Array.prototype, 'slice', {
    value: function (begin, end)
     {
        return new Uint8Array(Array.prototype.slice.call(this, begin, end));
     }
  });
}
</pre>

<p>If you need to support truly obsolete JavaScript engines that don't support
  {{jsxref("Object.defineProperty")}}, it's best not to polyfill
  <code><em>TypedArray</em>.prototype</code> methods at all, as you can't make them non-enumerable.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>TypedArray.prototype.slice</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-typed-arrays"><code>core-js</code></a></li>
  <li>{{jsxref("Array.prototype.slice()")}}</li>
</ul>
