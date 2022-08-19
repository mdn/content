---
title: Client.postMessage()
slug: Web/API/Client/postMessage
page-type: web-api-instance-method
tags:
  - API
  - Client
  - Method
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - postMessage
browser-compat: api.Client.postMessage
---
{{APIRef("Service Worker API")}}

The **`postMessage()`** method of the
{{domxref("Client")}} interface allows a service worker to send a message to a client
(a {{domxref("Window")}}, {{domxref("Worker")}}, or {{domxref("SharedWorker")}}). The
message is received in the "`message`" event on
{{domxref("ServiceWorkerContainer", "navigator.serviceWorker")}}.

## Syntax

```js
postMessage(message)
postMessage(message, transferables)
```

### Parameters

- `message`
  - : The message to send to the client. This can be any [structured-clonable type](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- `transferables` {{optional_inline}}
  - : A sequence of objects that are [transferred](/en-US/docs/Web/API/Transferable) with the message. The
    ownership of these objects is given to the destination side and they are no longer
    usable on the sending side.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Sending a message from a service worker to a client:

```js
addEventListener('fetch', (event) => {
  event.waitUntil((async () => {
    // Exit early if we don't have access to the client.
    // Eg, if it's cross-origin.
    if (!event.clientId) return;

    // Get the client.
    const client = await clients.get(event.clientId);
    // Exit early if we don't get the client.
    // Eg, if it closed.
    if (!client) return;

    // Send a message to the client.
    client.postMessage({
      msg: "Hey I just got a fetch from you!",
      url: event.request.url
    });

  })());
});
```

Receiving that message:

```js
navigator.serviceWorker.addEventListener('message', (event) => {
  console.log(event.data.msg, event.data.url);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
