---
title: WindowClient.visibilityState
slug: Web/API/WindowClient/visibilityState
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - WindowClient
  - visibilityState
browser-compat: api.WindowClient.visibilityState
---
{{APIRef("Service Workers API")}}

The **`visibilityState`** read-only property of the
{{domxref("WindowClient")}} interface indicates the visibility of the current client.
This value can be one of `"hidden"`, `"visible"`, or
`"prerender"`.

## Value

A {{domxref("DOMString")}} (See {{domxref("Document.visibilityState")}} for values).

## Examples

```js
event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (let i = 0; i < clientList.length; i++) {
      let client = clientList[i];
      if (client.url == '/' && 'focus' in client) {
        if (client.visibilityState === 'hidden')
          return client.focus();
        }
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
