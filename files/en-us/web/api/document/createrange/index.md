---
title: Document.createRange()
slug: Web/API/Document/createRange
tags:
- API
- DOM
- DOM Reference
- Document
- DocumentRange.createRange
- Method
- Range
browser-compat: api.Document.createRange
---
<div>{{APIRef("DOM")}}</div>

<p>The <code><strong>Document.createRange()</strong></code> method returns a new
  {{domxref("Range")}} object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>range</var> = document.createRange();
</pre>

<p><var>range</var> is the created {{domxref("Range")}} object.</p>

<h2 id="Example">Example</h2>

<pre class="brush:js">let range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
</pre>

<h2 id="Notes">Notes</h2>

<p>Once a <code>Range</code> is created, you need to set its boundary points before you
  can make use of most of its methods.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>
