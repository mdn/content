---
title: "Client: url property"
short-title: url
slug: Web/API/Client/url
page-type: web-api-instance-property
browser-compat: api.Client.url
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

The **`url`** read-only property of the {{domxref("Client")}} interface returns the URL of the current service worker client.

Note that the {{domxref("Client.url")}} property is not updated unless a new page is actually loaded. This means that it will not be updated if the user navigates within the same page using a URL fragment, or if a {{glossary("SPA", "single-page app (SPA)")}} intercepts a navigation event (for example, using the [Navigation API](/en-US/docs/Web/API/Navigation_API)) and updates the page content using client-side code.

## Value

A string.

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
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow("/");
        }
      }),
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
