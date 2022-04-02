---
title: WindowClient.focused
slug: Web/API/WindowClient/focused
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - WindowClient
  - focused
browser-compat: api.WindowClient.focused
---
{{APIRef("Service Workers API")}}

The **`focused`** read-only property of the
{{domxref("WindowClient")}} interface is a boolean value that indicates whether
the current client has focus.

## Value

A boolean value.

## Examples

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
      if (client.url == '/' && 'focus' in client) {
        if(!client.focused)
          return client.focus();
        }
      }
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
