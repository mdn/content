---
title: MessageEvent
slug: Web/API/MessageEvent
page-type: web-api-interface
browser-compat: api.MessageEvent
---

{{APIRef("HTML DOM")}} {{AvailableInWorkers}}

The **`MessageEvent`** interface represents a message received by a target object.

This is used to represent messages in:

- [Server-sent events](/en-US/docs/Web/API/Server-sent_events) (see the {{domxref("EventSource.message_event", "message")}} event of {{domxref("EventSource")}}).
- [Web sockets](/en-US/docs/Web/API/WebSockets_API) (see the {{domxref("WebSocket.message_event", "message")}} event of {{domxref("WebSocket")}}).
- Cross-document messaging (see {{domxref("Window.postMessage()")}} and the {{domxref("Window.message_event", "message")}} event of {{domxref("Window")}}).
- [Channel messaging](/en-US/docs/Web/API/Channel_Messaging_API) (see {{domxref("MessagePort.postMessage()")}} and the {{domxref("MessagePort.message_event", "message")}} event of {{domxref("MessagePort")}}).
- Cross-worker/document messaging (see the above two entries, but also {{domxref("Worker.postMessage()")}}, the {{domxref("Worker.message_event", "message")}} event of {{domxref("Worker")}}, the {{domxref("ServiceWorkerGlobalScope.message_event", "message")}} event of {{domxref("ServiceWorkerGlobalScope")}}, etc.)
- [Broadcast channels](/en-US/docs/Web/API/Broadcast_Channel_API) (see {{domxref("BroadcastChannel.postMessage()")}} and the {{domxref("BroadcastChannel.message_event", "message")}} event of {{domxref("BroadcastChannel")}}).
- WebRTC data channels (see the {{domxref("RTCDataChannel.message_event", "message")}} event of {{domxref("RTCDataChannel")}}).

The action triggered by this event is defined in a function set as the event handler for the relevant `message` event.

{{InheritanceDiagram}}

## Constructor

- {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}}
  - : Creates a new `MessageEvent`.

## Instance properties

_This interface also inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : The data sent by the message emitter.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : A string representing the origin of the message emitter.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : A string representing a unique ID for the event.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : A `MessageEventSource` (which can be a {{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, or {{domxref("ServiceWorker")}} object) representing the message emitter.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : An array of {{domxref("MessagePort")}} objects representing the ports associated with the channel the message is being sent through (where appropriate, e.g. in channel messaging or when sending a message to a shared worker).

## Instance methods

_This interface also inherits methods from its parent, {{domxref("Event")}}._

- {{domxref("MessageEvent.initMessageEvent","initMessageEvent()")}} {{deprecated_inline}}
  - : Initializes a message event. **Do not use this anymore** — **use the {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}} constructor instead.**

## Examples

In our [Basic shared worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([run shared worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)), we have two HTML pages, each of which uses some JavaScript to perform a simple calculation. The different scripts are using the same worker file to perform the calculation — they can both access it, even if their pages are running inside different windows.

The following code snippet shows creation of a {{domxref("SharedWorker")}} object using the {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructor. Both scripts contain this:

```js
const myWorker = new SharedWorker("worker.js");
```

Both scripts then access the worker through a {{domxref("MessagePort")}} object created using the {{domxref("SharedWorker.port")}} property. If the onmessage event is attached using addEventListener, the port is manually started using its `start()` method:

```js
myWorker.port.start();
```

When the port is started, both scripts post messages to the worker and handle messages sent from it using `port.postMessage()` and `port.onmessage`, respectively:

```js
first.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

Inside the worker we use the {{domxref("SharedWorkerGlobalScope.connect_event", "onconnect")}} handler to connect to the same port discussed above. The ports associated with that worker are accessible in the {{domxref("SharedWorkerGlobalScope/connect_event", "connect")}} event's `ports` property — we then use {{domxref("MessagePort")}} `start()` method to start the port, and the `onmessage` handler to deal with messages sent from the main threads.

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ExtendableMessageEvent")}} — similar to this interface but used in interfaces that needs to give more flexibility to authors.
