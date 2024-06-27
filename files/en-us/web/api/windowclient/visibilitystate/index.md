---
title: "WindowClient: visibilityState property"
short-title: visibilityState
slug: Web/API/WindowClient/visibilityState
page-type: web-api-instance-property
browser-compat: api.WindowClient.visibilityState
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

The **`visibilityState`** read-only property of the
{{domxref("WindowClient")}} interface indicates the visibility of the current client.
This value can be one of `"hidden"`, `"visible"`, or
`"prerender"`.

## Value

A string (See {{domxref("Document.visibilityState")}} for values).

## Examples

```js
event.waitUntil(
  clients
    .matchAll({
      type: "window",
    })
    .then((clientList) => {
      for (const client of clientList) {
        if (client.url === "/" && "focus" in client) {
          if (client.visibilityState === "hidden") return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow("/");
      }
    }),
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
