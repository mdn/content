---
title: ServiceWorkerContainer.getRegistration()
slug: Web/API/ServiceWorkerContainer/getRegistration
tags:
- API
- Method
- Reference
- Service Workers
- ServiceWorker
- ServiceWorkerContainer
browser-compat: api.ServiceWorkerContainer.getRegistration
---
<p>{{APIRef("Service Workers API")}}</p>

<p>The <strong><code>getRegistration()</code></strong> method of the
  {{domxref("ServiceWorkerContainer")}} interface gets a
  {{domxref("ServiceWorkerRegistration")}} object whose scope URL matches the provided
  client URL.  The method returns a {{jsxref("Promise")}} that resolves to
  a {{domxref("ServiceWorkerRegistration")}} or <code>undefined</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>serviceWorkerContainer</em>.getRegistration(<em>clientURL</em>).then(function(<em>serviceWorkerRegistration</em>) { ... });</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>clientURL</code> {{optional_inline}}</dt>
  <dd>The registration whose scope matches this URL will be returned. Relative URLs are resolved with the current client as the base. If this parameter is not provided, the current client's URL will be used by default.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Promise")}} that resolves to a {{domxref("ServiceWorkerRegistration")}}
  object or <code>undefined</code>.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">navigator.serviceWorker.getRegistration('/app').then(function(registration) {
  if(registration){
    document.querySelector('#status').textContent = 'ServiceWorkerRegistration found.';
  }
});
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
