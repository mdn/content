---
title: FetchEvent.preloadResponse
slug: Web/API/FetchEvent/preloadResponse
tags:
- API
- Experimental
- FetchEvent
- Offline
- Property
- Reference
- Service Workers
- Web Performance
- Workers
- request
browser-compat: api.FetchEvent.preloadResponse
---
<div>{{APIRef("Service Workers API")}}</div>

<p>The <strong><code>preloadResponse</code></strong> read-only property of the
  {{domxref("FetchEvent")}} interface returns a {{jsxref("Promise")}} that resolves to the
  navigation preload {{domxref("Response")}} if navigation preload was triggered or
  undefined otherwise.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>expectedResponse</em> = <em>fetchEvent</em>.preloadResponse;</pre>

<h3 id="Value">Value</h3>

<p>A {{jsxref("Promise")}} that resolves to a {{domxref("Response")}} or otherwise to
  <code>undefined</code>.</p>

<h2 id="Example">Example</h2>

<p>This code snippet is from the <a
    href="https://developers.google.com/web/updates/2017/02/navigation-preload#the-solution">navigation
    preload page</a>. The {{domxref("ServiceWorkerGlobalScope.onfetch")}} event handler
  listens for the <code>fetch</code> event. When fired, pass a promise that back to the
  controlled page to {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}}.
  This promise resolves to the first matching URL request in the {{domxref("Cache")}}
  object. If no match is found, the code checks for a preloaded response. Else it fetches
  a response from the network.</p>

<pre class="brush: js">addEventListener('fetch', event =&gt; {
  event.respondWith(async function() {
    // Respond from the cache if we can
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse;

    // Else, use the preloaded response, if it's there
    const response = await event.preloadResponse;
    if (response) return response;

    // Else try the network.
    return fetch(event.request);
  }());
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers">Using Service
      Workers</a></li>
  <li><a class="external external-icon" href="https://github.com/mdn/sw-test">Service
      workers basic code example</a></li>
  <li><a class="external external-icon"
      href="https://jakearchibald.github.io/isserviceworkerready/">Is ServiceWorker
      ready?</a></li>
  <li>{{jsxref("Promise")}}</li>
  <li><a href="/en-US/docs/Web/API/Web_Workers_API/Using_web_workers">Using web
      workers</a></li>
</ul>
