---
title: DedicatedWorkerGlobalScope.onmessage
slug: Web/API/DedicatedWorkerGlobalScope/onmessage
tags:
  - API
  - DedicatedWorkerGlobalScope
  - Property
  - Reference
  - Web Workers
  - onmessage
browser-compat: api.DedicatedWorkerGlobalScope.onmessage
---
{{APIRef("Web Workers API")}}

The **`onmessage`** property of the {{domxref("DedicatedWorkerGlobalScope")}} interface represents an [event handler](/en-US/docs/Web/Events/Event_handlers) to be called when the {{event("message")}} event occurs — i.e. when a message is sent to the worker using the {{domxref("Worker.postMessage")}} method.

## Syntax

```js
self.onmessage = function() { /* ... */ };
```

## Example

The following code snippet shows creation of a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor. Messages are passed to the worker when the value inside the form input `first` changes. A {{domxref("Worker.onmessage")}} handler is also present, to deal with messages are passed back from the worker.

```js
var myWorker = new Worker("worker.js");

first.onchange = function() {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}

myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
}
```

In the `worker.js` script, a `DedicatedWorkerGlobalScope.onmessage` handler is used to handle messages from the main script:

```js
onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}
```

Notice how in the main script, `onmessage` has to be called on `myWorker`, whereas inside the worker script you just need `onmessage` because the worker is effectively the global scope (the {{domxref("DedicatedWorkerGlobalScope")}}, in this case).

For a full example, see our[Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](https://mdn.github.io/simple-web-worker/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("DedicatedWorkerGlobalScope")}} interface it belongs to.
- {{domxref("WorkerGlobalScope")}}
