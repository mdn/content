---
title: SVGPointList.getItem()
slug: Web/API/SVGPointList/getItem
tags:
  - API
  - Method
  - Reference
  - getItem
  - SVGPointList
browser-compat: api.SVGPointList.getItem
---
<div>{{APIRef("SVG")}}</div>

<p>The <strong><code>getItem()</code></strong> method of the {{domxref("SVGPointList")}} interface gets one item from the list at the specified index.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">SVGPointList.getItem(index);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>index</code></dt>
  <dd>The index of the item to return.</dd>
</dl>

<h3 id="Returns">Return value</h3>

<p>An {{domxref("SVGPoint")}} object.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt>{{domxref("DOMException")}} <code>IndexSizeError</code></dt>
  <dd>Thrown if the index passed in is greater than the number of items in the list.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>The following example shows an SVG which contains a {{SVGElement("polyline")}} with five coordinate pairs. The {{domxref("SVGPoint")}} at index <code>0</code>.</p>

<pre class="brush: html">&lt;svg id="svg" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;polyline id="example" stroke="black" fill="none"
   points="50,0 21,90 98,35 2,35 79,90"/&gt;
</svg></pre>

<pre class="brush: js">let example = document.getElementById("example");
console.log(example.points.getItem(0));</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>
