---
title: Client.url
slug: Web/API/Client/url
page-type: web-api-instance-property
tags:
  - API
  - Client
  - Property
  - Reference
  - Service Workers
  - URL
browser-compat: api.Client.url
---
{{APIRef("Service Workers API")}}

The **`url`** read-only property of the {{domxref("Client")}}
interface returns the URL of the current service worker client.

## Value

A string.

## Examples

```js
self.addEventListener('notificationclick', (event) => {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: 'window'
  }).then((clientList) => {
    for (const client of clientList) {
      if (client.url === '/' && 'focus' in client) {
        return client.focus();
      }
    }
    if (clients.openWindow) {
      return clients.openWindow('/');
    }
  }));
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
