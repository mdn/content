---
title: Worker.postMessage()
slug: Web/API/Worker/postMessage
page-type: web-api-instance-method
tags:
  - API
  - JavaScript
  - Method
  - Reference
  - Web Workers
  - Worker
  - postMessage
browser-compat: api.Worker.postMessage
---
{{APIRef("Web Workers API")}}

The **`postMessage()`** method of the {{domxref("Worker")}} interface sends a message to the worker's inner scope. This accepts a single parameter, which is the data to send to the worker. The data may be any value or JavaScript object handled by the [structured clone](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) algorithm, which includes cyclical references.

The {{domxref("Worker")}} `postMessage()` method delegates to the {{domxref("MessagePort")}} {{domxref("MessagePort.postMessage", "postMessage()")}} method, which adds a task on the event loop corresponding to the receiving {{domxref("MessagePort")}}.

The `Worker` can send back information to the thread that spawned it using the {{domxref("DedicatedWorkerGlobalScope.postMessage")}} method.

## Syntax

```js
postMessage(message)
postMessage(message, transfer)
```

### Parameters

- `message`

  - : The object to deliver to the worker; this will be in the `data` field in the event delivered to the {{domxref("DedicatedWorkerGlobalScope.message_event")}} event. This may be any value or JavaScript object handled by the [structured clone](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) algorithm, which includes cyclical references.

    If the `message` parameter is _not_ provided, a {{jsxref("SyntaxError")}} will be thrown by the parser. If the data to be passed to the worker is unimportant, `null` or `undefined` can be passed explicitly.

- `transfer` {{optional_inline}}

  - : An optional [array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of {{Glossary("Transferable Objects")}} to transfer ownership of. If the ownership of an object is transferred, it becomes unusable in the context it was sent from and becomes available only to the worker it was sent to.

    Transferable objects are instances of classes like {{jsxref("ArrayBuffer")}}, {{domxref("MessagePort")}} or {{domxref("ImageBitmap")}} objects that can be transferred. `null` is not an acceptable value for `transfer`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following code snippet shows the creation of a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor. When either of two form inputs (`first` and `second`) have their values changed, {{domxref("HTMLElement/change_event", "change")}} events invoke `postMessage()` to send the value of both inputs to the current worker.

```js
const myWorker = new Worker('worker.js');

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}

second.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}
```

For a full example, see our [simple worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([run example](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

> **Note:** `postMessage()` can only send a single object at once. As seen above, if you want to pass multiple values you can send an array.

### Transfer Example

This minimum example has `main` create an `ArrayBuffer` and transfer it to `myWorker`, then has `myWorker` transfer it back to `main`, with the size logged at each step.

#### main.js code:

```js
// create worker
const myWorker = new Worker("myWorker.js");

// listen for myWorker to transfer the buffer back to main
myWorker.addEventListener("message", function handleMessageFromWorker(msg) {
  console.log("message from worker received in main:", msg);

  const bufTransferredBackFromWorker = msg.data;

  console.log(
    "buf.byteLength in main AFTER transfer back from worker:",
    bufTransferredBackFromWorker.byteLength
  );
});

// create the buffer
const myBuf = new ArrayBuffer(8);

console.log(
  "buf.byteLength in main BEFORE transfer to worker:",
  myBuf.byteLength
);

// send myBuf to myWorker and transfer the underlying ArrayBuffer
myWorker.postMessage(myBuf, [myBuf]);

console.log(
  "buf.byteLength in main AFTER transfer to worker:",
  myBuf.byteLength
);
```

#### myWorker.js code

```js
// listen for main to transfer the buffer to myWorker
self.onmessage = function handleMessageFromMain(msg) {
  console.log("message from main received in worker:", msg);

  const bufTransferredFromMain = msg.data;

  console.log(
    "buf.byteLength in worker BEFORE transfer back to main:",
    bufTransferredFromMain.byteLength
  );

  // send buf back to main and transfer the underlying ArrayBuffer
  self.postMessage(bufTransferredFromMain, [bufTransferredFromMain]);

  console.log(
    "buf.byteLength in worker AFTER transfer back to main:",
    bufTransferredFromMain.byteLength
  );
};
```

#### Output logged

```bash
buf.byteLength in main BEFORE transfer to worker:        8                     main.js:19
buf.byteLength in main AFTER transfer to worker:         0                     main.js:27

message from main received in worker:                    MessageEvent { ... }  myWorker.js:3
buf.byteLength in worker BEFORE transfer back to main:   8                     myWorker.js:7
buf.byteLength in worker AFTER transfer back to main:    0                     myWorker.js:15

message from worker received in main:                    MessageEvent { ... }  main.js:6
buf.byteLength in main AFTER transfer back from worker:  8                     main.js:10
```

`byteLength` goes to 0 after the `ArrayBuffer` is transferred. For a more sophisticated full working example of `ArrayBuffer` transfer, see this Firefox demo add-on: [GitHub :: ChromeWorker - demo-transfer-arraybuffer](https://github.com/Noitidart/ChromeWorker/tree/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Worker")}} interface it belongs to.
