---
title: NotificationEvent.action
slug: Web/API/NotificationEvent/action
tags:
  - API
  - Experimental
  - NotificationEvent
  - Notifications
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - action
browser-compat: api.NotificationEvent.action
---
{{APIRef("Web Notifications")}}

Returns the string ID of the notification button the user clicked. This value returns an empty string if the user clicked the notification somewhere other than an action button, or the notification does not have a button. The notification id is set during the creation of the Notification via the actions array attribute and can't be modified unless the notification is replaced.

## Returns

A {{domxref("DOMString")}} object.

## Example

```js
self.registration.showNotification("New articles available", {
  actions: [{action: "get", title: "Get now."}]
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'get') {
    synchronizeReader();
  } else {
    clients.openWindow("/reader");
  }
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
