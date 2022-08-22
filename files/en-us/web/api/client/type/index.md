---
title: Client.type
slug: Web/API/Client/type
page-type: web-api-instance-property
tags:
  - API
  - Client
  - Property
  - Reference
  - Service Workers
  - Type
browser-compat: api.Client.type
---
{{APIRef("Service Workers API")}}

The **`type`** read-only property of the {{domxref("Client")}}
interface indicates the type of client the service worker is controlling.

## Value

A string, representing the client type. The value can be one of

- `"window"`
- `"worker"`
- `"sharedworker"`

## Examples

```js
// service worker client (e.g. a document)
function sendMessage(message) {
  return new Promise((resolve, reject) => {
    // note that this is the ServiceWorker.postMessage version
    navigator.serviceWorker.controller.postMessage(message);
    window.serviceWorker.onMessage = (e) => {
      resolve(e.data);
    };
  });
}

// controlling service worker
self.addEventListener("message", (e) => {
  // e.source is a client object
  e.source.postMessage(`Hello! Your message was: ${e.data}`);
  // Let's also post the type value back to the client
  e.source.postMessage(e.source.type);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
