---
title: ServiceWorkerGlobalScope.clients
slug: Web/API/ServiceWorkerGlobalScope/clients
tags:
  - API
  - Clients
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerGlobalScope
browser-compat: api.ServiceWorkerGlobalScope.clients
---
<p>{{APIRef("Service Workers API")}}</p>

<p>The <strong><code>clients</code></strong> read-only property of the
  {{domxref("ServiceWorkerGlobalScope")}} interface returns the <a
    href="/en-US/docs/Web/API/Clients"
    title="The ServiceWorkerClients interface of the ServiceWorker API represents a container for a list of ServiceWorkerClient objects."><code>Clients</code></a>
  object associated with the service worker.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">swClients = self.clients
</pre>

<h3 id="Value">Value</h3>

<p>The {{domxref("Clients")}} object associated with the specific worker.</p>

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
  <li><a href="/en-US/docs/Web/API/Web_Workers_API/Using_web_workers">Using web workers</a>
  </li>
</ul>
