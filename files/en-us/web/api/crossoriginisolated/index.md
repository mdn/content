---
title: crossOriginIsolated
slug: Web/API/crossOriginIsolated
tags:
  - API
  - Experimental
  - Property
  - Reference
  - crossOriginIsolated
browser-compat: api.crossOriginIsolated
---
<div>{{APIRef()}}{{SeeCompatTable}}</div>

<p>The global <code><strong>crossOriginIsolated</strong></code> read-only property returns a boolean value that
  indicates whether a {{JSxRef("SharedArrayBuffer")}} can be sent via a
  {{DOMxRef("Window.postMessage()")}} call.</p>

<p>This value is dependant on any {{HTTPHeader("Cross-Origin-Opener-Policy")}} and
  {{HTTPHeader("Cross-Origin-Embedder-Policy")}} headers present in the response.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>myCrossOriginIsolated</em> = self.crossOriginIsolated; // or just crossOriginIsolated
</pre>

<h3 id="Value">Value</h3>

<p>A boolean value</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">if(crossOriginIsolated) {
  // Post SharedArrayBuffer
} else {
  // Do something else
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/ServiceWorker_API">Service Workers</a></li>
  <li><a href="/en-US/docs/Web/API/Web_Workers_API">Web Workers</a></li>
</ul>
