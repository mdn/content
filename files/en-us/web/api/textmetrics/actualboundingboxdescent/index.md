---
title: TextMetrics.actualBoundingBoxDescent
slug: Web/API/TextMetrics/actualBoundingBoxDescent
tags:
  - API
  - Experimental
  - Property
  - Reference
  - TextMetrics
browser-compat: api.TextMetrics.actualBoundingBoxDescent
---
<div>{{APIRef("Canvas API")}}</div>

<p>The read-only <code>actualBoundingBoxDescent</code> property of the {{domxref("TextMetrics")}} interface is a <code>double</code> giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute to the bottom of the bounding rectangle used to render the text, in CSS pixels.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const text = ctx.measureText('foo'); // returns TextMetrics object

text.actualBoundingBoxDescent; // 0;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("TextMetrics")}}</li>
</ul>
