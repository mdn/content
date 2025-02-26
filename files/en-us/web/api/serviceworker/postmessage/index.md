---
title: "ServiceWorker: postMessage() method"
short-title: postMessage()
slug: Web/API/ServiceWorker/postMessage
page-type: web-api-instance-method
browser-compat: api.ServiceWorker.postMessage
---

{{APIRef("Service Workers API")}}{{securecontext_header}}{{AvailableInWorkers}}

The **`postMessage()`** method of the {{domxref("ServiceWorker")}} interface sends a message to the worker. The first parameter is the data to send to the worker. The data may be any JavaScript object which can be handled by the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

The service worker can send back information to its clients by using the {{domxref("Client.postMessage", "postMessage()")}} method. The message will not be sent back to this `ServiceWorker` object but to the associated {{domxref("ServiceWorkerContainer")}} available via {{domxref("navigator.serviceWorker")}}.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameters

- `message`

  - : The object to deliver to the worker; this will be in the `data` field in the event delivered to the {{domxref("ServiceWorkerGlobalScope.message_event", "message")}} event. This may be any JavaScript object handled by the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

    The `message` parameter is mandatory. If the data to be passed to the worker is unimportant, `null` or `undefined` must be passed explicitly.

- `transfer` {{optional_inline}}
  - : An optional [array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of [transferable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) to transfer ownership of. The ownership of these objects is given to the destination side and they are no longer usable on the sending side. These transferable objects should be attached to the message; otherwise they would be moved but not actually accessible on the receiving end.
- `options` {{optional_inline}}
  - : An optional object containing the following properties:
    - `transfer` {{optional_inline}}
      - : Has the same meaning as the `transfer` parameter.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("SyntaxError")}}
  - : Thrown if the `message` parameter is not provided.

## Examples

In this example a {{domxref("ServiceWorker")}} is created and a message is immediately sent:

```js
navigator.serviceWorker.register("service-worker.js");

navigator.serviceWorker.ready.then((registration) => {
  registration.active.postMessage(
    "Test message sent immediately after creation",
  );
});
```

In order to receive the message, the service worker, in `service-worker.js` has to listen to the {{domxref("ServiceWorkerGlobalScope.message_event", "message")}} event on its global scope.

```js
// This must be in `service-worker.js`
addEventListener("message", (event) => {
  console.log(`Message received: ${event.data}`);
});
```

Note that the service worker can send back messages to the main thread using the {{domxref("Client.postMessage()", "postMessage()")}} method. To receive it, the main thread needs to listen for a {{domxref("ServiceWorkerContainer.message_event", "message")}} event on the {{domxref("ServiceWorkerContainer")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("ServiceWorker")}} interface it belongs to.
- Its counterpart, the {{domxref("Client.postMessage()", "postMessage()")}} method that a service worker must use to send a message back to the associated {{domxref("ServiceWorkerContainer")}}.
