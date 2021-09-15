---
title: NotificationEvent
slug: Web/API/NotificationEvent
tags:
  - API
  - Experimental
  - Interface
  - NotificationEvent
  - Notifications
  - Reference
  - Service Workers
  - ServiceWorker
browser-compat: api.NotificationEvent
---
{{APIRef("Web Notifications")}}

The parameter passed into the {{domxref("ServiceWorkerGlobalScope.onnotificationclick", "onnotificationclick")}} handler, the `NotificationEvent` interface represents a notification click event that is dispatched on the {{domxref("ServiceWorkerGlobalScope")}} of a {{domxref("ServiceWorker")}}.

This interface inherits from the {{domxref("ExtendableEvent")}} interface.

## Constructor

- {{domxref("NotificationEvent.NotificationEvent","NotificationEvent()")}}
  - : Creates a new `NotificationEvent` object.

## Properties

_Inherits properties from its ancestor, {{domxref("Event")}}_.

- {{domxref("NotificationEvent.notification")}} {{readonlyInline}}
  - : Returns a {{domxref("Notification")}} object representing the notification that was clicked to fire the event.
- {{domxref("NotificationEvent.action")}} {{readonlyinline}}
  - : Returns the string ID of the notification button the user clicked. This value returns an empty string if the user clicked the notification somewhere other than an action button, or the notification does not have a button.

## Methods

_Inherits methods from its parent, {{domxref("ExtendableEvent")}}_.

- {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}}
  - : Extends the lifetime of the event. Tells the browser that work is ongoing.

## Example

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

## Specifications

{{Specifications}}

> **Note:** This interface is specified in the [Notifications API](/en-US/docs/Web/API/Notifications_API), but accessed through {{domxref("ServiceWorkerGlobalScope")}}.

## Browser compatibility

{{Compat}}
