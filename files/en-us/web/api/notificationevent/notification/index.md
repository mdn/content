---
title: "NotificationEvent: notification property"
short-title: notification
slug: Web/API/NotificationEvent/notification
page-type: web-api-instance-property
browser-compat: api.NotificationEvent.notification
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

The **`notification`** read-only property of the {{domxref("NotificationEvent")}} interface returns the instance of the {{domxref("Notification")}} that was clicked to fire the event. The {{domxref("Notification")}} provides read-only access to many properties that were set at the instantiation time of the Notification such as `tag` and `data` attributes that allow you to store information for deferred use in the `notificationclick` event.

## Value

A {{domxref("Notification")}} object.

## Examples

```js
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click");

  // Data can be attached to the notification so that you
  // can process it in the notificationclick handler.
  console.log(`Notification Tag: ${event.notification.tag}`);
  console.log(`Notification Data: ${event.notification.data}`);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
