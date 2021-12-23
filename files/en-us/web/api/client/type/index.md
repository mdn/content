---
title: Client.type
slug: Web/API/Client/type
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

## Syntax

```js
var myClientType = client.type;
```

### Value

A string, representing the client type. The value can be one of

- `"window"`
- `"worker"`
- `"sharedworker"`

## Example

```js
// service worker client (e.g. a document)
function sendMessage(message) {
  return new Promise(function(resolve, reject) {
    // note that this is the ServiceWorker.postMessage version
    navigator.serviceWorker.controller.postMessage(message);
    window.serviceWorker.onMessage = function(e) {
      resolve(e.data);
    };
  });
}

// controlling service worker
self.addEventListener("message", function(e) {
  // e.source is a client object
  e.source.postMessage("Hello! Your message was: " + e.data);
  // Let's also post the type value back to the client
  e.source.postMessage(e.source.type);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
