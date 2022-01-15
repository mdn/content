---
title: ServiceWorkerGlobalScope.onnotificationclick
slug: Web/API/ServiceWorkerGlobalScope/onnotificationclick
tags:
  - API
  - Experimental
  - Interface
  - Property
  - Reference
  - ServiceWorkerGlobalScope
  - onnotificationclick
browser-compat: api.ServiceWorkerGlobalScope.onnotificationclick
---
{{APIRef("Service Workers API")}}

The **`ServiceWorkerGlobalScope.onnotificationclick`** property is an event handler called whenever the {{Event("notificationclick")}} event is dispatched on the {{domxref("ServiceWorkerGlobalScope")}} object, that is when a user clicks on a displayed notification spawned by {{domxref("ServiceWorkerRegistration.showNotification()")}}.

Notifications created on the main thread or in workers which aren't service workers using the {{domxref("Notification.Notification","Notification()")}} constructor will instead receive a {{Event("click")}} event on the `Notification` object itself.

> **Note:** Trying to create a notification inside the {{domxref("ServiceWorkerGlobalScope")}} using the {{domxref("Notification.Notification","Notification()")}} constructor will throw an error.

## Syntax

```js
ServiceWorkerGlobalScope.onnotificationclick = function(NotificationEvent) { /* ... */ };
```

## Example

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
