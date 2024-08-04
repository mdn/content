---
title: "DedicatedWorkerGlobalScope: postMessage() method"
short-title: postMessage()
slug: Web/API/DedicatedWorkerGlobalScope/postMessage
page-type: web-api-instance-method
browser-compat: api.DedicatedWorkerGlobalScope.postMessage
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

The **`postMessage()`** method of the {{domxref("DedicatedWorkerGlobalScope")}} interface sends a message to the main thread that spawned it.

This accepts a data parameter, which contains data to copy from the worker to the main thread.
The data may be any value or JavaScript object handled by the [structured clone](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) algorithm, which includes cyclical references.

The method also accepts an optional array of [transferable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) to _transfer_ to the main thread;
Unlike the data parameter transferred objects are no longer usable in the worker thread.
(Where possible, objects are transferred using a high performance zero-copy operation).

The main scope that spawned the worker can send back information to the thread that spawned it using the {{domxref("Worker.postMessage")}} method.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parameters

- `message`

  - : The object to deliver to the main thread; this will be in the data field in the event delivered to the {{domxref("Window/message_event", "message")}} event.
    This may be any value or JavaScript object handled by the [structured clone](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) algorithm, which includes cyclical references.

- `transfer` {{optional_inline}}
  - : An optional [array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of [transferable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) to transfer ownership of. The ownership of these objects is given to the destination side and they are no longer usable on the sending side. These transferable objects should be attached to the message; otherwise they would be moved but not actually accessible on the receiving end.
- `options` {{optional_inline}}
  - : An optional object containing the following properties:
    - `transfer` {{optional_inline}}
      - : Has the same meaning as the `transfer` parameter.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following code snippet shows `worker.js`, in which an `onmessage` handler is used to handle messages from the main script.
Inside the handler a calculation is done from which a result message is created; this is then sent back to the main thread using `postMessage(workerResult);`

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

In the main script, `onmessage` would have to be called on a `Worker object`, whereas inside the worker script you just need `onmessage` because the worker is effectively the global scope ({{domxref("DedicatedWorkerGlobalScope")}}).

For a full example, see our [Basic dedicated worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([run dedicated worker](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

> **Note:** `postMessage()` can only send a single object at once. As seen above, if you want to pass multiple values you can send an array.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The {{domxref("DedicatedWorkerGlobalScope")}} interface it belongs to.
