---
title: "DedicatedWorkerGlobalScope: message event"
short-title: message
slug: Web/API/DedicatedWorkerGlobalScope/message_event
page-type: web-api-event
browser-compat: api.DedicatedWorkerGlobalScope.message_event
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

The `message` event is fired on a {{domxref('DedicatedWorkerGlobalScope')}} object when the worker receives a message from its parent (i.e. when the parent sends a message using [`Worker.postMessage()`](/en-US/docs/Web/API/Worker/postMessage)).

This event is not cancellable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Event type

A {{domxref("MessageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Event properties

_This interface also inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : The data sent by the message emitter.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : A string representing the origin of the message emitter.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : A string representing a unique ID for the event.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : A `MessageEventSource` (which can be a {{domxref("Window")}}, {{domxref("MessagePort")}}, or {{domxref("ServiceWorker")}} object) representing the message emitter.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : An array of {{domxref("MessagePort")}} objects representing the ports associated with the channel the message is being sent through (where appropriate, e.g. in channel messaging or when sending a message to a shared worker).

## Example

The following code snippet shows creation of a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor. Messages are passed to the worker when the value inside the form input `first` changes. An {{domxref("Worker.message_event", "onmessage")}} handler is also present, to deal with messages are passed back from the worker.

```js
// main.js

const myWorker = new Worker("worker.js");

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

// worker.js

self.onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

In the `main.js` script, an `onmessage` handler is used to handle messages from the worker script:

```js
// main.js

myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Alternatively, the script can listen for the message using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener):

```js
// worker.js

self.addEventListener("message", (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
});
```

Notice how in the main script, `onmessage` has to be called on `myWorker`, whereas inside the worker script you just need `onmessage` because the worker is effectively the global scope ({{domxref("DedicatedWorkerGlobalScope")}}).

For a full example, see our [Basic dedicated worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([run dedicated worker](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DedicatedWorkerGlobalScope")}}
- {{domxref("WorkerGlobalScope")}}
- Related events: [`messageerror`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
- [`Worker.postMessage()`](/en-US/docs/Web/API/Worker/postMessage)
- [Using channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
