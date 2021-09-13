---
title: LargestContentfulPaint.element
slug: Web/API/LargestContentfulPaint/element
tags:
  - API
  - Property
  - Reference
  - element
  - LargestContentfulPaint
browser-compat: api.LargestContentfulPaint.element
---
<div>{{DefaultAPISidebar("Largest Contentful Paint API")}}</div>

<p>The <strong><code>element</code></strong> read-only property of the {{domxref("LargestContentfulPaint")}} interface returns an object representing the {{domxref("Element")}} that is the largest contentful paint.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let element = LargestContentfulPaint.element;</pre>

<h3>Value</h3>
<p>An {{domxref("Element")}}.</p>

<h2 id="Examples">Examples</h2>

<p>The following example gets the <code>LargestContentfulPaint</code> object and prints the value of <code>element</code> to the console.</p>

<pre class="brush: js">try {
  let lcp;

  const po = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log(lastEntry.element);
  });

  po.observe({type: 'largest-contentful-paint', buffered: true});

} catch (e) {
  // Do nothing if the browser doesn't support this API.
}</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
