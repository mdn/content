---
title: CacheStorage.keys()
slug: Web/API/CacheStorage/keys
tags:
  - API
  - CacheStorage
  - Experimental
  - Method
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - keys
browser-compat: api.CacheStorage.keys
---
<p>{{APIRef("Service Workers API")}}</p>

<p>The
    <strong><code>keys()</code></strong> method of the
    {{domxref("CacheStorage")}} interface returns a {{jsxref("Promise")}} that will
    resolve with an array containing strings corresponding to all of the named
    {{domxref("Cache")}} objects tracked by the {{domxref("CacheStorage")}} object in the
    order they were created. Use this method to iterate over a list of all
    {{domxref("Cache")}} objects.</p>

<p>You can access <code>CacheStorage</code> through the global
  {{domxref("caches")}} property.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">caches.keys().then(function(<em>keyList</em>) {
  //do something with your keyList
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>a {{jsxref("Promise")}} that resolves with an array of the {{domxref("Cache")}} names
  inside the {{domxref("CacheStorage")}} object.</p>

<h2 id="Examples">Examples</h2>

<p>In this code snippet we wait for an {{domxref("ServiceWorkerGlobalScope.onactivate",
  "activate")}} event, and then run a
  {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} block that clears up any old,
  unused caches before a new service worker is activated. Here we have an allowlist
  containing the names of the caches we want to keep (<code>cacheAllowlist</code>). We
  return the keys of the caches in the {{domxref("CacheStorage")}} object using
  <code>keys()</code>, then check each key to see if it is in the allowlist. If not, we
  delete it using {{domxref("CacheStorage.delete()")}}.</p>

<pre class="brush: js">this.addEventListener('activate', function(event) {
  var cacheAllowlist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheAllowlist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers">Using Service
      Workers</a></li>
  <li>{{domxref("Cache")}}</li>
  <li>{{domxref("caches")}}</li>
</ul>
