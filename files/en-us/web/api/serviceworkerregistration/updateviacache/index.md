---
title: ServiceWorkerRegistration.updateViaCache
slug: Web/API/ServiceWorkerRegistration/updateViaCache
tags:
- API
- Method
- Reference
- Service Workers
- ServiceWorkerRegistration
- updateViaCache
browser-compat: api.ServiceWorkerRegistration.updateViaCache
---
<div>{{APIRef("Service Workers API")}}</div>

<p>The <code><strong>updateViaCache()</strong></code> method of the
  {{domxref("ServiceWorkerRegistration")}} interface updates the cache using
  the mode specified in the call to {{domxref('ServiceWorkerContainer.register')}}.
  Requests for `importScripts` still go via the HTTP cache. `updateViaCache` offers
  control over this behavior.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">serviceWorkerRegistration.updateViaCache;</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p></p>

<h2 id="Example">Example</h2>

<p>The following example shows the use of updateViaCache().
</p>

<pre class="brush: js">if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js', {
    updateViaCache: 'none'
  });
  // When set to 'none', the HTTP cache will not be
  // consulted when making requests for either the top-level
  // /service-worker.js or for any imported scripted, such as
  // the hypothetical path/to/import.js.
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers">Using Service
      Workers</a></li>
  <li><a href="https://github.com/mdn/sw-test">Service workers basic code example</a></li>
  <li><a href="https://jakearchibald.github.io/isserviceworkerready/">Is ServiceWorker
      ready?</a></li>
  <li>{{jsxref("Promise")}}</li>
  <li><a href="/en-US/docs/Web/API/Web_Workers_API/Using_web_workers">Using web
      workers</a></li>
</ul>
