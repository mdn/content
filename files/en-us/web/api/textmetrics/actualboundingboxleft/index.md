---
title: TextMetrics.actualBoundingBoxLeft
slug: Web/API/TextMetrics/actualBoundingBoxLeft
tags:
  - API
  - Experimental
  - Property
  - Reference
  - TextMetrics
browser-compat: api.TextMetrics.actualBoundingBoxLeft
---
<div>{{APIRef("Canvas API")}}</div>

<p>The read-only <code>actualBoundingBoxLeft</code> property of the {{domxref("TextMetrics")}} interface is a <code>double</code> giving the distance parallel to the baseline from the alignment point given by the {{domxref("CanvasRenderingContext2D.textAlign")}} property to the left side of the bounding rectangle of the given text, in CSS pixels.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const text = ctx.measureText('foo'); // returns TextMetrics object

text.actualBoundingBoxLeft; // 0;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("TextMetrics")}}</li>
</ul>
