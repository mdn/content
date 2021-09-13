---
title: WorkerLocation.hash
slug: Web/API/WorkerLocation/hash
tags:
  - API
  - Property
  - Read-only
  - Reference
  - WorkerLocation
browser-compat: api.WorkerLocation.hash
---
<p>{{ApiRef("WorkerLocation")}}</p>

<p>The <strong><code>hash</code></strong> property of a {{domxref("WorkerLocation")}} object returns the {{domxref("URL.hash", "hash")}} part of the worker’s location.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>string</em> = <em>location</em>.hash;</pre>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">// In a Web worker, on the page https://developer.mozilla.org/en-US/docs/Web/API/WorkerLocation/hash#examples
var result = location.hash; // Returns '#examples'</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li>The {{domxref("WorkerLocation")}} interface it belongs to.</li>
</ul>
