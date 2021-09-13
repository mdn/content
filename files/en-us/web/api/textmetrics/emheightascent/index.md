---
title: TextMetrics.emHeightAscent
slug: Web/API/TextMetrics/emHeightAscent
tags:
  - API
  - Experimental
  - Property
  - Reference
  - TextMetrics
browser-compat: api.TextMetrics.emHeightAscent
---
<div>{{APIRef("Canvas API")}}</div>

<p>The read-only <code>emHeightAscent</code> property of the {{domxref("TextMetrics")}} interface is a <code>double</code> giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the top of the <em>em</em> square in the line box, in CSS pixels.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const text = ctx.measureText('foo'); // returns TextMetrics object

text.emHeightAscent; // 7.59765625;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("TextMetrics")}}</li>
</ul>
