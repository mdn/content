---
title: 'ServiceWorkerGlobalScope: notificationclick event'
slug: Web/API/ServiceWorkerGlobalScope/notificationclick_event
tags:
  - Event
  - Notifications
  - Service Worker
  - ServiceWorkerGloablScope
  - events
  - notificationclick
browser-compat: api.ServiceWorkerGlobalScope.notificationclick_event
---
<div>{{APIRef}}</div>

<p>The <strong><code>notificationclick</code></strong> event is fired to indicate that a system notification spawned by {{domxref("ServiceWorkerRegistration.showNotification()")}} has been clicked.</p>

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
   <td>{{domxref("NotificationEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler</th>
   <td>{{domxref("ServiceWorkerGlobalScope/onnotificationclick", "onnotificationclick")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>You can use the <code>notificationclick</code> event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:</p>

<pre class="brush: js">self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i &lt; clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' &amp;&amp; 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});
</pre>

<p>Or use the {{domxref("ServiceWorkerGlobalScope/onnotificationclick", "onnotificationclick")}} event handler property:</p>

<pre class="brush: js">self.onnotificationclick = function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i &lt; clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' &amp;&amp; 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Service_Worker_API">Service Worker API</a></li>
 <li><a href="/en-US/docs/Web/API/Notifications_API">Notifications API</a></li>
</ul>
