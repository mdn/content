---
title: Worker.onmessage
slug: Web/API/Worker/onmessage
tags:
  - API
  - EventHandler
  - Property
  - Reference
  - Web Workers
  - Worker
  - onmessage
browser-compat: api.Worker.onmessage
---
{{APIRef("Web Workers API")}}

The **`onmessage`** property of the {{domxref("Worker")}} interface represents an [event handler](/en-US/docs/Web/Events/Event_handlers), that is a function to be called when the {{event("message")}} event occurs. These events are of type {{domxref("MessageEvent")}} and will be called when the worker's parent receives a message (i.e. from the {{domxref("DedicatedWorkerGlobalScope.postMessage")}} method).

Note that deserializing the message sent by {{domxref("DedicatedWorkerGlobalScope.postMessage", "postMessage()")}} blocks the thread receiving it.

> **Note:** The message payload is available in the {{event("message")}} event's `data` property.

## Syntax

```js
myWorker.onmessage = function(e) { /* ... */ }
```

## Example

The following code snippet shows creation of a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor. Messages are passed to the worker when the value inside the form input `first` changes. An onmessage handler is also present, to deal with messages that are passed back from the worker.

```js
var myWorker = new Worker('worker.js');

first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
}
```

In the `worker.js` script, an `onmessage` handler is used to the handle messages from the main script:

```js
onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}
```

Notice how in the main script, `onmessage` has to be called on `myWorker`, whereas inside the worker script you just need `onmessage` because the worker is effectively the global scope ({{domxref("DedicatedWorkerGlobalScope")}}).

For a full example, see our[Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](https://mdn.github.io/simple-web-worker/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The {{domxref("Worker")}} interface it belongs to.
