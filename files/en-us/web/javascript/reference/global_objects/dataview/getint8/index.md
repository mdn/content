---
title: DataView.prototype.getInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt8
tags:
- DataView
- JavaScript
- Method
- Prototype
- TypedArrays
browser-compat: javascript.builtins.DataView.getInt8
---
<div>{{JSRef}}</div>

<p>The <strong><code>getInt8()</code></strong> method gets a signed 8-bit integer (byte)
  at the specified byte offset from the start of the {{jsxref("DataView")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/dataview-getint8.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">getInt8(byteOffset)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>byteOffset</var></code></dt>
  <dd>The offset, in byte, from the start of the view where to read the data.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A signed 8-bit integer number.</p>

<h3 id="Errors_thrown">Errors thrown</h3>

<dl>
  <dt>{{jsxref("RangeError")}}</dt>
  <dd>Thrown if the <code>byteOffset</code> is set such as it would read beyond the end of
    the view.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>There is no alignment constraint; multi-byte values may be fetched from any offset.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_getInt8_method">Using the getInt8 method</h3>

<pre class="brush:js">var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getInt8(1); // 0
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("DataView")}}</li>
  <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
