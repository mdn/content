---
title: NavigationPreloadManager
slug: Web/API/NavigationPreloadManager
tags:
  - API
  - Interface
  - Navigation
  - NavigationPreloadManager
  - Offline
  - Reference
  - Service Workers
browser-compat: api.NavigationPreloadManager
---
<p>{{APIRef("Service Workers API")}}</p>

<p>The <strong><code>NavigationPreloadManager</code></strong> interface of the <a href="/en-US/docs/Web/API/Service_Worker_API">Service Worker API</a> provides methods for managing the preloading of resources with a service worker.</p>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{domxref("NavigationPreloadManager.enable()")}}</dt>
 <dd>Enables navigation preloading and returns a {{jsxref("Promise")}} that resolves.</dd>
 <dt>{{domxref("NavigationPreloadManager.disable()")}}</dt>
 <dd>Disables navigation preloading and returns a {{jsxref("Promise")}} that resolves.</dd>
 <dt>{{domxref("NavigationPreloadManager.setHeaderValue()")}}</dt>
 <dd>Sets the value of the <code>Service-Worker-Navigation-Preload</code> header and returns an empty {{jsxref("Promise")}}.</dd>
 <dt>{{domxref("NavigationPreloadManager.getState()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves to an object with properties indicating whether preload is enabled and the contents of the <code>Service-Worker-Navigation-Preload</code>.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h4 id="Feature_Detecting_and_Enabling_Navigation_Preloading">Feature Detecting and Enabling Navigation Preloading </h4>

<pre class="brush: js">addEventListener('activate', event =&gt; {
  event.waitUntil(async function() {
    if (self.registration.navigationPreload) {
      // Enable navigation preloads!
      await self.registration.navigationPreload.enable();
    }
  }());
});
</pre>

<h4 id="Using_a_Preloaded_Response">Using a Preloaded Response</h4>

<p>The following example shows the implementation of a fetch event that uses a preloaded response. </p>

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
