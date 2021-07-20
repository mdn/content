---
title: SharedArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
tags:
- JavaScript
- Method
- Prototype
- Shared Memory
- SharedArrayBuffer
- TypedArrays
browser-compat: javascript.builtins.SharedArrayBuffer.slice
---
<div>{{JSRef}}</div>

<p>The <strong><code>SharedArrayBuffer.prototype.slice()</code></strong> method returns a
  new {{jsxref("SharedArrayBuffer")}} whose contents are a copy of this
  <code>SharedArrayBuffer</code>'s bytes from begin, inclusive, up to end, exclusive. If
  either begin or end is negative, it refers to an index from the end of the array, as
  opposed to from the beginning. This method has the same algorithm as
  {{jsxref("Array.prototype.slice()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/sharedarraybuffer-slice.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
slice()
slice(begin)
slice(begin, end)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>begin</var></code> {{optional_inline}}</dt>
  <dd>
    <p>Zero-based index at which to begin extraction.</p>
    <p>A negative index can be used, indicating an offset from the end of the sequence.
    <code>slice(-2)</code> extracts the last two elements in the sequence.</p>
    <p>If <code><var>begin</var></code> is undefined, <code>slice</code> begins from index
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
    end of the sequence (<code>sab.byteLength</code>).</p>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new {{jsxref("SharedArrayBuffer")}} containing the extracted elements.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_slice">Using slice()</h3>

<pre class="brush:js">var sab = new SharedArrayBuffer(1024);
sab.slice();    // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2);   // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2);  // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("SharedArrayBuffer")}}</li>
  <li>{{jsxref("Array.prototype.slice()")}}</li>
</ul>
