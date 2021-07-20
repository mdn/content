---
title: DataView.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
tags:
  - DataView
  - JavaScript
  - Property
  - Prototype
  - TypedArrays
browser-compat: javascript.builtins.DataView.byteOffset
---
<div>{{JSRef}}</div>

<p>The <strong><code>byteOffset</code></strong> accessor property represents the offset (in bytes) of this view from the start of its {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/dataview-byteoffset.html")}}</div>


<h2 id="Description">Description</h2>

<p>The <code>byteOffset</code> property is an accessor property whose set accessor function is <code>undefined</code>, meaning that you can only read this property. The value is established when an <code>DataView</code> is constructed and cannot be changed.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_byteOffset_property">Using the byteOffset property</h3>

<pre class="brush:js">var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.byteOffset; // 0 (no offset specified)

var dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (as specified when constructing the DataView)
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("DataView")}}</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li>{{jsxref("SharedArrayBuffer")}}</li>
</ul>
