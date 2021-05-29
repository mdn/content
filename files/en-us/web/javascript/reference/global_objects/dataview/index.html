---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
tags:
  - Class
  - DataView
  - JavaScript
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.DataView
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <strong><code>DataView</code></strong> view provides a low-level interface for reading and writing multiple number types in a binary {{jsxref("ArrayBuffer")}}, without having to care about the platform's <a href="/en-US/docs/Glossary/Endianness">endianness</a>.</span></p>

<h2 id="Description">Description</h2>

<h3 id="Endianness">Endianness</h3>

<p>Multi-byte number formats are represented in memory differently depending on machine architecture — see <a href="/en-US/docs/Glossary/Endianness">Endianness</a> for an explanation. <code>DataView</code> accessors provide explicit control of how data is accessed, regardless of the executing computer's endianness.</p>

<pre class="brush: js">var littleEndian = (function() {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array uses the platform's endianness.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false
</pre>

<h3 id="64-bit_Integer_Values">64-bit Integer Values</h3>

<p>Some browsers don’t have support for {{jsxref("DataView.prototype.setBigInt64()")}} and {{jsxref("DataView.prototype.setBigUint64()")}}. So to enable 64-bit operations in your code that will work across browsers, you could implement your own <code>getUint64()</code> function, to obtain values with precision up to {{jsxref("Number.MAX_SAFE_INTEGER")}} — which could suffice for certain cases.</p>

<pre class="brush: js">function getUint64(dataview, byteOffset, littleEndian) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left =  dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset+4, littleEndian);

  // combine the two 32-bit values
  const combined = littleEndian? left + 2**32*right : 2**32*left + right;

  if (!Number.isSafeInteger(combined))
    console.warn(combined, 'exceeds MAX_SAFE_INTEGER. Precision may be lost');

  return combined;
}
</pre>

<p>Alternatively, if you need full 64-bit range, you can create a {{jsxref("BigInt")}}. Further, although native BigInts are much faster than user-land library equivalents, BigInts will always be much slower than 32-bit integers in JavaScript due to the nature of their variable size.</p>

<pre class="brush: js">const BigInt = window.BigInt, bigThirtyTwo = BigInt(32), bigZero = BigInt(0);
function getUint64BigInt(dataview, byteOffset, littleEndian) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left = BigInt(dataview.getUint32(byteOffset|0, !!littleEndian)&gt;&gt;&gt;0);
  const right = BigInt(dataview.getUint32((byteOffset|0) + 4|0, !!littleEndian)&gt;&gt;&gt;0);

  // combine the two 32-bit values and return
  return littleEndian ? (right&lt;&lt;bigThirtyTwo)|left : (left&lt;&lt;bigThirtyTwo)|right;
}</pre>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/DataView"><code>DataView()</code></a></dt>
 <dd>Creates a new <code>DataView</code> object.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{jsxref("DataView.prototype.buffer")}}</dt>
 <dd>The {{jsxref("ArrayBuffer")}} referenced by this view. Fixed at construction time and thus <strong>read only.</strong></dd>
 <dt>{{jsxref("DataView.prototype.byteLength")}}</dt>
 <dd>The length (in bytes) of this view from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus <strong>read only.</strong></dd>
 <dt>{{jsxref("DataView.prototype.byteOffset")}}</dt>
 <dd>The offset (in bytes) of this view from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus <strong>read only.</strong></dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("DataView.prototype.getInt8()")}}</dt>
 <dd>Gets a signed 8-bit integer (byte) at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.getUint8()")}}</dt>
 <dd>Gets an unsigned 8-bit integer (unsigned byte) at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.getInt16()")}}</dt>
 <dd>Gets a signed 16-bit integer (short) at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.getUint16()")}}</dt>
 <dd>Gets an unsigned 16-bit integer (unsigned short) at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.getInt32()")}}</dt>
 <dd>Gets a signed 32-bit integer (long) at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.getUint32()")}}</dt>
 <dd>Gets an unsigned 32-bit integer (unsigned long) at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.getFloat32()")}}</dt>
 <dd>Gets a signed 32-bit float (float) at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.getFloat64()")}}</dt>
 <dd>Gets a signed 64-bit float (double) at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.getBigInt64()")}}</dt>
 <dd>Gets a signed 64-bit integer (long long) at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.getBigUint64()")}}</dt>
 <dd>Gets an unsigned 64-bit integer (unsigned long long) at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.setInt8()")}}</dt>
 <dd>Stores a signed 8-bit integer (byte) value at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.setUint8()")}}</dt>
 <dd>Stores an unsigned 8-bit integer (unsigned byte) value at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.setInt16()")}}</dt>
 <dd>Stores a signed 16-bit integer (short) value at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.setUint16()")}}</dt>
 <dd>Stores an unsigned 16-bit integer (unsigned short) value at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.setInt32()")}}</dt>
 <dd>Stores a signed 32-bit integer (long) value at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.setUint32()")}}</dt>
 <dd>Stores an unsigned 32-bit integer (unsigned long) value at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.setFloat32()")}}</dt>
 <dd>Stores a signed 32-bit float (float) value at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.setFloat64()")}}</dt>
 <dd>Stores a signed 64-bit float (double) value at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.setBigInt64()")}}</dt>
 <dd>Stores a signed 64-bit integer (long long) value at the specified byte offset from the start of the view.</dd>
 <dt>{{jsxref("DataView.prototype.setBigUint64()")}}</dt>
 <dd>Stores an unsigned 64-bit integer (unsigned long long) value at the specified byte offset from the start of the view.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_DataView">Using DataView</h3>

<pre class="brush: js">var buffer = new ArrayBuffer(16);
var view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>DataView</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-typed-arrays"><code>core-js</code></a></li>
 <li><a class="link-https" href="https://github.com/jDataView/jDataView">jDataView</a>: JavaScript library that polyfills and extends the <code>DataView</code> API to all browsers and Node.js.</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li>{{jsxref("SharedArrayBuffer")}}</li>
</ul>
