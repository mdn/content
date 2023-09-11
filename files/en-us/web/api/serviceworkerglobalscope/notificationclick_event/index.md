---
title: "ServiceWorkerGlobalScope: notificationclick event"
short-title: notificationclick
slug: Web/API/ServiceWorkerGlobalScope/notificationclick_event
page-type: web-api-event
browser-compat: api.ServiceWorkerGlobalScope.notificationclick_event
---

{{APIRef}}

The **`notificationclick`** event is fired to indicate that a system notification spawned by {{domxref("ServiceWorkerRegistration.showNotification()")}} has been clicked.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("notificationclick", (event) => {});

onnotificationclick = (event) => {};
```

## Event type

A {{domxref("NotificationEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("NotificationEvent")}}

## Event properties

_Inherits properties from its ancestor, {{domxref("Event")}}_.

- {{domxref("NotificationEvent.notification")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Notification")}} object representing the notification that was clicked to fire the event.
- {{domxref("NotificationEvent.action")}} {{ReadOnlyInline}}
  - : Returns the string ID of the notification button the user clicked. This value returns an empty string if the user clicked the notification somewhere other than an action button, or the notification does not have a button.

## Examples

You can use the `notificationclick` event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:

```js
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag);
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

Or use the `onnotificationclick` event handler property:

```js
self.onnotificationclick = (event) => {
  console.log("On notification click: ", event.notification.tag);
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
};
```

You can handle event actions using `event.action` within a {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event handler:

```js
navigator.serviceWorker.register("sw.js");
Notification.requestPermission().then((result) => {
  if (result === "granted") {
    navigator.serviceWorker.ready.then((registration) => {
      // Show a notification that includes an action titled Archive.
      registration.showNotification("New mail from Alice", {
        actions: [
          {
            action: "archive",
            title: "Archive",
          },
        ],
      });
    });
  }
});

self.addEventListener(
  "notificationclick",
  (event) => {
    event.notification.close();
    if (event.action === "archive") {
      // User selected the Archive action.
      archiveEmail();
    } else {
      // User selected (e.g., clicked in) the main body of notification.
      clients.openWindow("/inbox");
    }
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
- [Notifications API](/en-US/docs/Web/API/Notifications_API)
