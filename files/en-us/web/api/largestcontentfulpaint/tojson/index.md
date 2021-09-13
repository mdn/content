---
title: LargestContentfulPaint.toJSON()
slug: Web/API/LargestContentfulPaint/toJSON
tags:
  - API
  - Method
  - Reference
  - toJSON
  - LargestContentfulPaint
browser-compat: api.LargestContentfulPaint.toJSON
---
<div>{{DefaultAPISidebar("Largest Contentful Paint API")}}</div>

<p>The <strong><code>toJSON()</code></strong> method of the {{domxref("LargestContentfulPaint")}} interface is a <em>serializer</em>, and returns a JSON representation of the <code>LargestContentfulPaint</code> object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">LargestContentfulPaint.toJSON();</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Returns">Return value</h3>

<p>A JSON object that is the serialization of the {{domxref("LargestContentfulPaint")}} object.</p>

<h2 id="Examples">Examples</h2>

<p>The following example gets the <code>LargestContentfulPaint</code> object and prints it as JSON to the console.</p>

<pre class="brush: js">try {
  let lcp;

  const po = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log(lastEntry.toJSON());
  });

  po.observe({type: 'largest-contentful-paint', buffered: true});

} catch (e) {
  // Do nothing if the browser doesn't support this API.
}</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
