---
title: "Client: postMessage() method"
short-title: postMessage()
slug: Web/API/Client/postMessage
page-type: web-api-instance-method
browser-compat: api.Client.postMessage
---

{{APIRef("Service Worker API")}}{{AvailableInWorkers("service")}}

The **`postMessage()`** method of the
{{domxref("Client")}} interface allows a service worker to send a message to a client
(a {{domxref("Window")}}, {{domxref("Worker")}}, or {{domxref("SharedWorker")}}). The
message is received in the `message` event on
{{domxref("ServiceWorkerContainer", "navigator.serviceWorker")}}.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameters

- `message`
  - : The message to send to the client. This can be any [structured-cloneable type](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- `transfer` {{optional_inline}}
  - : An optional [array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of [transferable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) to transfer ownership of. The ownership of these objects is given to the destination side and they are no longer usable on the sending side. These transferable objects should be attached to the message; otherwise they would be moved but not actually accessible on the receiving end.
- `options` {{optional_inline}}
  - : An optional object containing the following properties:
    - `transfer` {{optional_inline}}
      - : Has the same meaning as the `transfer` parameter.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The code below sends a message from a service worker to a client. The client is fetched using the {{domxref("Clients.get()", "get()")}} method on {{domxref("ServiceWorkerGlobalScope.clients", "clients")}}, which is a global in service worker scope.

```js
addEventListener("fetch", (event) => {
  event.waitUntil(
    (async () => {
      // Exit early if we don't have access to the client.
      // Eg, if it's cross-origin.
      if (!event.clientId) return;

      // Get the client.
      const client = await self.clients.get(event.clientId);
      // Exit early if we don't get the client.
      // Eg, if it closed.
      if (!client) return;

      // Send a message to the client.
      client.postMessage({
        msg: "Hey I just got a fetch from you!",
        url: event.request.url,
      });
    })(),
  );
});
```

Receiving that message:

```js
navigator.serviceWorker.addEventListener("message", (event) => {
  console.log(event.data.msg, event.data.url);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
