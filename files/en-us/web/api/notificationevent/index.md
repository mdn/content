---
title: NotificationEvent
slug: Web/API/NotificationEvent
page-type: web-api-interface
browser-compat: api.NotificationEvent
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

The **`NotificationEvent`** interface of the {{domxref("Notifications API", "", "", "nocode")}} represents a notification event dispatched on the {{domxref("ServiceWorkerGlobalScope")}} of a {{domxref("ServiceWorker")}}.

This interface inherits from the {{domxref("ExtendableEvent")}} interface.

> [!NOTE]
> Only persistent notification events, fired at the {{domxref("ServiceWorkerGlobalScope")}} object, implement the `NotificationEvent` interface. Non-persistent notification events, fired at the {{domxref("Notification")}} object, implement the `Event` interface.

{{InheritanceDiagram}}

## Constructor

- {{domxref("NotificationEvent.NotificationEvent","NotificationEvent()")}}
  - : Creates a new `NotificationEvent` object.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("ExtendableEvent")}}_.

- {{domxref("NotificationEvent.notification")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Notification")}} object representing the notification that was clicked to fire the event.
- {{domxref("NotificationEvent.action")}} {{ReadOnlyInline}}
  - : Returns the string ID of the notification button the user clicked. This value returns an empty string if the user clicked the notification somewhere other than an action button, or the notification does not have a button.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("ExtendableEvent")}}_.

## Example

```js
self.addEventListener("notificationclick", (event) => {
  console.log(`On notification click: ${event.notification.tag}`);
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

> [!NOTE]
> This interface is specified in the [Notifications API](/en-US/docs/Web/API/Notifications_API), but accessed through {{domxref("ServiceWorkerGlobalScope")}}.

## Browser compatibility

{{Compat}}
