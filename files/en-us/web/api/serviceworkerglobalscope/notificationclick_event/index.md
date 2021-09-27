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
{{APIRef}}

The **`notificationclick`** event is fired to indicate that a system notification spawned by {{domxref("ServiceWorkerRegistration.showNotification()")}} has been clicked.

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
      <td>
        {{domxref("ServiceWorkerGlobalScope/onnotificationclick", "onnotificationclick")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `notificationclick` event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:

```js
self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' && 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});
```

Or use the {{domxref("ServiceWorkerGlobalScope/onnotificationclick", "onnotificationclick")}} event handler property:

```js
self.onnotificationclick = function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' && 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
- [Notifications API](/en-US/docs/Web/API/Notifications_API)
