---
title: ServiceWorker.postMessage()
slug: Web/API/ServiceWorker/postMessage
page-type: web-api-instance-method
browser-compat: api.ServiceWorker.postMessage
---

{{APIRef("Service Workers API")}}{{securecontext_header}}

The **`postMessage()`** method of the {{domxref("ServiceWorker")}} interface sends a message to the worker's inner scope. This accepts a single parameter, which is the data to send to the worker. The data may be any value or JavaScript object handled by the [structured clone](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) algorithm, which includes cyclical references.

The service worker can send back information to its clients by using the {{domxref("Client.postMessage", "postMessage()")}} method. The message will not be sent back to this `ServiceWorker` object but to the associated {{domxref("ServiceWorkerContainer")}} available via {{domxref("navigator.serviceWorker")}}.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, options)
postMessage(message, transfer)
```

### Parameters

- `message`

  - : The object to deliver to the worker; this will be in the `data` field in the event delivered to the {{domxref("ServiceWorkerGlobalScope.message_event", "message")}} event. This may be any value or JavaScript object handled by the [structured clone](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) algorithm, which includes cyclical references.

    The `message` parameter is mandatory. If the data to be passed to the worker is unimportant, `null` or `undefined` must be passed explicitly.

- `options` {{optional_inline}}

- `transfer` {{optional_inline}}

  - : An optional [array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of {{Glossary("Transferable Objects")}} to transfer ownership of. If the ownership of an object is transferred, it becomes unusable in the context it was sent from and becomes available only to the worker it was sent to.

    Transferable objects are instances of classes like {{jsxref("ArrayBuffer")}}, {{domxref("MessagePort")}} or {{domxref("ImageBitmap")}} objects that can be transferred. `null` is not an acceptable value for `transfer`.

> **Note:** The parameters `options` and `transfer` can't be both used at the same time.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("SyntaxError")}}
  - : Thrown if the `message` parameter

## Examples

This is a basic sample where a {{domxref("ServiceWorker")}} is created and a message is immediately sent:

```js
navigator.serviceWorker.register("service-worker.js");

navigator.serviceWorker.ready.then((registration) => {
  registration.active.postMessage(
    "Test message sent immediately after creation"
  );
});
```

In order to receive the message, the service worker, in `service-worker.js` has to listen to the {{domxref("ServiceWorkerGlobalScope.message_event", "event")}} on its global scope.

```js
// This must be in `service-worker.s``
addEventListener("message", (event) => 
  console.log(`Message received: ${event.data}`);
);
```

Note that the service worker can send back messages to the main thread using the {{domxref("ServiceWorkerGlobalScope.postMessage()", "postMessage()")}} method. To receive it, the main thread needs to listen for a {{domxref("ServiceWorker.message_event", "message")}} event on the {{domxref("ServiceWorker")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("ServiceWorker")}} interface it belongs to.
- Its counterpart, the {{domxref("Client.postMessage()", "postMessage()")}} method that a service worker must use to send a message back to the associated {{domxref"ServiceWorkerContainer")}}.
