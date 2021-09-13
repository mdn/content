---
title: InstallEvent.activeWorker
slug: Web/API/InstallEvent/activeWorker
tags:
  - API
  - InstallEvent
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - activeWorker
browser-compat: api.InstallEvent.activeWorker
---
<div>{{non-standard_header}}{{deprecated_header}}</div>

<p>The <code><strong>activeWorker</strong></code> read-only property of the {{domxref("InstallEvent")}} interface returns the {{domxref("ServiceWorker")}} that is currently actively controlling the page.</p>

<p>This will return <code>null</code> if no active worker is already controlling the page.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var myActiveWorker = event.activeWorker</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("ServiceWorker")}} object.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">self.addEventListener('install', function(event) {
  var myActiveWorker = event.activeWorker;
});</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/en-US/docs/Web/API/Fetch_API">Fetch API</a></li>
</ul>
