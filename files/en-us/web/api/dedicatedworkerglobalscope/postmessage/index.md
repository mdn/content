---
title: DedicatedWorkerGlobalScope.postMessage()
slug: Web/API/DedicatedWorkerGlobalScope/postMessage
tags:
  - API
  - DedicatedWorkerGlobalScope
  - Method
  - Reference
  - Web Workers
  - postMessage
browser-compat: api.DedicatedWorkerGlobalScope.postMessage
---
{{APIRef("Web Workers API")}}

The **`postMessage()`** method of the {{domxref("DedicatedWorkerGlobalScope")}} interface sends a message to the main thread that spawned it. This accepts a single parameter, which is the data to send from the worker to the main thread. The data may be any value or JavaScript object handled by the [structured clone](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) algorithm, which includes cyclical references.

The main scope that spawned the worker can send back information to the thread that spawned it using the {{domxref("Worker.postMessage")}} method.

## Syntax

```js
postMessage(aMessage, transferList);
```

### Parameters

- _aMessage_
  - : The object to deliver to the main thread; this will be in the data field in the event delivered to the {{domxref("Worker.onmessage")}} handler. This may be any value or JavaScript object handled by the [structured clone](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) algorithm, which includes cyclical references.
- _transferList_ {{optional_inline}}

  - : An optional [array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of {{domxref("Transferable")}} objects to transfer ownership of. If the ownership of an object is transferred, it becomes unusable in the context it was sent from and it becomes available only to the main thread it was sent to.

    Only {{domxref("MessagePort")}} and {{jsxref("ArrayBuffer")}} objects can be transferred.

### Returns

Void.

## Example

The following code snippet shows `worker.js`, in which an `onmessage` handler is used to handle messages from the main script. Inside the handler a calculation is done from which a result message is created; this is then sent back to the main thread using `postMessage(workerResult);`

```js
onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}
```

In the main script, `onmessage` would have to be called on a `Worker object`, whereas inside the worker script you just need `onmessage` because the worker is effectively the global scope ({{domxref("DedicatedWorkerGlobalScope")}}).

For a full example, see our[Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](https://mdn.github.io/simple-web-worker/)).

> **Note:** `postMessage()` can only send a single object at once. As seen above, if you want to pass multiple values you can send an array.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The {{domxref("DedicatedWorkerGlobalScope")}} interface it belongs to.
