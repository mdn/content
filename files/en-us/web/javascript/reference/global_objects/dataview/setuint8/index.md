---
title: DataView.prototype.setUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setUint8
tags:
- DataView
- JavaScript
- Method
- Prototype
- TypedArrays
browser-compat: javascript.builtins.DataView.setUint8
---
<div>{{JSRef}}</div>

<p>The <strong><code>setUint8()</code></strong> method stores an unsigned 8-bit integer
  (byte) value at the specified byte offset from the start of the {{jsxref("DataView")}}.
</p>

<div>{{EmbedInteractiveExample("pages/js/dataview-setuint8.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">setUint8(byteOffset, value)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>byteOffset</var></code></dt>
  <dd>The offset, in byte, from the start of the view where to store the data.</dd>
  <dt><code><var>value</var></code></dt>
  <dd>The value to set.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>{{jsxref("undefined")}}.</p>

<h3 id="Errors_thrown">Errors thrown</h3>

<dl>
  <dt>{{jsxref("RangeError")}}</dt>
  <dd>Thrown if the <code>byteOffset</code> is set such as it would store beyond the end
    of the view.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_setUint8_method">Using the setUint8 method</h3>

<pre class="brush:js">var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setUint8(1, 3);
dataview.getUint8(1); // 3
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
