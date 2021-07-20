---
title: TypedArray.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/length
tags:
  - JavaScript
  - Property
  - Prototype
  - TypedArray
  - TypedArrays
browser-compat: javascript.builtins.TypedArray.length
---
<div>{{JSRef}}</div>

<p>The <strong><code>length</code></strong> accessor property represents the length (in elements) of a typed array.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-length.html","shorter")}}</div>

<h2 id="Description">Description</h2>

<p>The <code>length</code> property is an accessor property whose set accessor function is <code>undefined</code>, meaning that you can only read this property. The value is established when a <em>TypedArray</em> is constructed and cannot be changed. If the <em>TypedArray</em> is not specifying a <code>byteOffset</code> or a <code>length</code>, the length of the referenced {{jsxref("ArrayBuffer")}} will be returned. <em>TypedArray</em> is one of the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">TypedArray objects</a>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_length_property">Using the <code>length</code> property</h3>

<pre class="brush:js">var buffer = new ArrayBuffer(8);

var uint8 = new Uint8Array(buffer);
uint8.length; // 8 (matches the length of the buffer)

var uint8 = new Uint8Array(buffer, 1, 5);
uint8.length; // 5 (as specified when constructing the Uint8Array)

var uint8 = new Uint8Array(buffer, 2);
uint8.length; // 6 (due to the offset of the constructed Uint8Array)
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a></li>
 <li>{{jsxref("TypedArray")}}</li>
</ul>
