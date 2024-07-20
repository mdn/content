---
title: "WindowClient: focused property"
short-title: focused
slug: Web/API/WindowClient/focused
page-type: web-api-instance-property
browser-compat: api.WindowClient.focused
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

The **`focused`** read-only property of the
{{domxref("WindowClient")}} interface is a boolean value that indicates whether
the current client has focus.

## Value

A boolean value.

## Examples

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
          if (client.url === "/" && "focus" in client) {
            if (!client.focused) return client.focus();
          }
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
