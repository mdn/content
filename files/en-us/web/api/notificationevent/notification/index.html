---
title: NotificationEvent.notification
slug: Web/API/NotificationEvent/notification
tags:
  - API
  - Experimental
  - NotificationEvent
  - Notifications
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
browser-compat: api.NotificationEvent.notification
---
<p>{{APIRef("Web Notifications")}}</p>

<p>The <code>notification</code> read-only property of the {{domxref("NotificationEvent")}} interface returns the instance of the {{domxref("Notification")}} that was clicked to fire the event. The {{domxref("Notification")}} provides read-only access to many properties that were set at the instantiation time of the Notification such as <code>tag</code> and <code>data</code> attributes that allow you to store information for deferred use in the <code>notificationclick</code> event.</p>

<h2 id="Returns">Returns</h2>

<p>A {{domxref("Notification")}} object.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">self.addEventListener('notificationclick', function(event) {
  console.log('On notification click');

  // Data can be attached to the notification so that you
  // can process it in the notificationclick handler.
  console.log('Notification Tag:', event.notification.tag);
  console.log('Notification Data:', event.notification.data);
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

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
