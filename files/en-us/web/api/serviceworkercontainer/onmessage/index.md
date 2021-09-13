---
title: ServiceWorkerContainer.onmessage
slug: Web/API/ServiceWorkerContainer/onmessage
tags:
- API
- Experimental
- Property
- Reference
- Service Workers
- ServiceWorker
- ServiceWorkerContainer
browser-compat: api.ServiceWorkerContainer.onmessage
---
<p>{{APIRef("Service Workers API")}}{{ SeeCompatTable() }}</p>

<p>The <strong><code>onmessage</code></strong> property of the
  {{domxref("ServiceWorkerContainer")}} interface is an event handler fired whenever a
  {{Event("message")}} event occurs — when incoming messages are received to the
  {{domxref("ServiceWorkerContainer")}} object (e.g., via a
  {{domxref("Client.postMessage()")}} call).</p>

<div class="note">
  <p><strong>Note:</strong> Messages received from service worker contexts (e.g. as the
    event object of onmessage) are represented by {{domxref("MessageEvent")}} objects in
    modern browsers, for consistency with other web messaging features. (They used to be
    represented by {{domxref("ServiceWorkerMessageEvent")}} objects, which have now been
    deprecated.)</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>serviceWorkerContainer</em>.onmessage = function(<em>messageevent</em>) { ... }</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">navigator.serviceWorker.onmessage = function(messageevent) {
  console.log(`received data: ${messageevent.data}`);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
