---
title: PushManager
slug: Web/API/PushManager
tags:
  - API
  - Experimental
  - Interface
  - Push
  - Push API
  - Reference
  - Service Workers
browser-compat: api.PushManager
---
<p>{{ApiRef("Push API")}}</p>

<p>The <strong><code>PushManager</code></strong> interface of the <a href="/en-US/docs/Web/API/Push_API">Push API</a> provides a way to receive notifications from third-party servers as well as request URLs for push notifications.</p>

<p>This interface is accessed via the {{domxref("ServiceWorkerRegistration.pushManager")}} property.</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("PushManager.supportedContentEncodings")}}</dt>
 <dd>Returns an array of supported content codings that can be used to encrypt the payload of a push message.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{domxref("PushManager.getSubscription()")}}</dt>
 <dd>Retrieves an existing push subscription. It returns a {{jsxref("Promise")}} that resolves to a {{domxref("PushSubscription")}} object containing details of an existing subscription. If no existing subscription exists, this resolves to a <code>null</code> value.</dd>
 <dt>{{domxref("PushManager.permissionState()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves to the permission state of the current {{domxref("PushManager")}}, which will be one of <code>'granted'</code>, <code>'denied'</code>, or <code>'prompt'</code>.</dd>
 <dt>{{domxref("PushManager.subscribe()")}}</dt>
 <dd>Subscribes to a push service. It returns a {{jsxref("Promise")}} that resolves to a {{domxref("PushSubscription")}} object containing details of a push subscription. A new push subscription is created if the current service worker does not have an existing subscription.</dd>
</dl>

<h3 id="Deprecated_methods">Deprecated methods</h3>

<dl>
 <dt>{{domxref("PushManager.hasPermission()")}} {{deprecated_inline}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves to the <code>PushPermissionStatus</code> of the requesting webapp, which will be one of <code>granted</code>, <code>denied</code>, or <code>default</code>. Replaced by {{domxref("PushManager.permissionState()")}}.</dd>
 <dt>{{domxref("PushManager.register()")}} {{deprecated_inline}}</dt>
 <dd>Subscribes to a push subscription. Replaced by {{domxref("PushManager.subscribe()")}}.</dd>
 <dt>{{domxref("PushManager.registrations()")}} {{deprecated_inline}}</dt>
 <dd>Retrieves existing push subscriptions. Replaced by {{domxref("PushManager.getSubscription()")}}.</dd>
 <dt>{{domxref("PushManager.unregister()")}} {{deprecated_inline}}</dt>
 <dd>Unregisters and deletes a specified subscription endpoint. In the updated API, a subscription is unregistered by calling the {{domxref("PushSubscription.unsubscribe()")}} method.</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">this.onpush = function(event) {
  console.log(event.data);
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
}

navigator.serviceWorker.register('serviceworker.js').then(
  function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe().then(
      function(pushSubscription) {
        console.log(pushSubscription.endpoint);
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, an XMLHttpRequest.
      }, function(error) {
        // During development it often helps to log errors to the
        // console. In a production environment it might make sense to
        // also report information about errors back to the
        // application server.
        console.log(error);
      }
    );
  });</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Push_API">Push API</a></li>
 <li><a href="/en-US/docs/Web/API/Service_Worker_API">Service Worker API</a></li>
</ul>
