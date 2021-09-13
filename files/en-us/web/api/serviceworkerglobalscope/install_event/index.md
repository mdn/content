---
title: 'ServiceWorkerGlobalScope: install event'
slug: Web/API/ServiceWorkerGlobalScope/install_event
tags:
  - API
  - Event
  - Reference
  - Service worker API
  - ServiceWorkerGlobalScope
  - install
browser-compat: api.ServiceWorkerGlobalScope.install_event
---
<div>{{APIRef("Service Workers API")}}</div>

<p>The <strong><code>install</code></strong> event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when a {{domxref("ServiceWorkerRegistration")}} acquires a new {{domxref("ServiceWorkerRegistration.installing")}} worker.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("ExtendableEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td>{{domxref("ServiceWorkerGlobalScope.oninstall")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>The following snippet shows how an <code>install</code> event handler can be used to populate a cache with a number of responses, which the service worker can then use to serve assets offline:</p>

<pre class="brush: js">this.addEventListener('install', function(event) {
  event.waitUntil(
   caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ])
   })
   );
});</pre>

<p>You can also set up the event handler using the {{domxref("ServiceWorkerGlobalScope.oninstall")}} property:</p>

<pre class="brush: js">globalScope.oninstall = function(event) {
  ...
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}} event</li>
 <li>{{domxref("ServiceWorkerGlobalScope")}}</li>
 <li><a href="/en-US/docs/Web/API/Service_Worker_API">Service Worker API</a></li>
</ul>
