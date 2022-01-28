---
title: MessageEvent
slug: Web/API/MessageEvent
tags:
  - API
  - Channels
  - Interface
  - Reference
  - WebSockets
  - Window
  - Workers
  - messaging
browser-compat: api.MessageEvent
---
{{APIRef("HTML DOM")}}

The **`MessageEvent`** interface represents a message received by a target object.

This is used to represent messages in:

- [Server-sent events](/en-US/docs/Web/API/Server-sent_events) (see {{domxref("EventSource.onmessage")}}).
- [Web sockets](/en-US/docs/Web/API/WebSockets_API) (see the `onmessage` property of the [WebSocket](/en-US/docs/Web/API/WebSocket) interface).
- Cross-document messaging (see {{domxref("Window.postMessage()")}} and {{domxref("Window.onmessage")}}).
- [Channel messaging](/en-US/docs/Web/API/Channel_Messaging_API) (see {{domxref("MessagePort.postMessage()")}} and {{domxref("MessagePort.onmessage")}}).
- Cross-worker/document messaging (see the above two entries, but also {{domxref("Worker.postMessage()")}}, {{domxref("Worker.onmessage")}}, {{domxref("ServiceWorkerGlobalScope.onmessage")}}, etc.)
- [Broadcast channels](/en-US/docs/Web/API/Broadcast_Channel_API) (see {{domxref("Broadcastchannel.postMessage()")}}) and {{domxref("BroadcastChannel.onmessage")}}).
- WebRTC data channels (see {{domxref("RTCDataChannel.onmessage")}}).

The action triggered by this event is defined in a function set as the event handler for the relevant {{event("message")}} event (e.g. using an `onmessage` handler as listed above).

{{AvailableInWorkers}}
{{InheritanceDiagram}}

## Constructor

- {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}}
  - : Creates a new `MessageEvent`.

## Properties

_This interface also inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{readonlyInline}}
  - : The data sent by the message emitter.
- {{domxref("MessageEvent.origin")}} {{readonlyInline}}
  - : A {{domxref("USVString")}} representing the origin of the message emitter.
- {{domxref("MessageEvent.lastEventId")}} {{readonlyInline}}
  - : A {{domxref("DOMString")}} representing a unique ID for the event.
- {{domxref("MessageEvent.source")}} {{readonlyInline}}
  - : A `MessageEventSource` (which can be a {{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, or {{domxref("ServiceWorker")}} object) representing the message emitter.
- {{domxref("MessageEvent.ports")}} {{readonlyInline}}
  - : An array of {{domxref("MessagePort")}} objects representing the ports associated with the channel the message is being sent through (where appropriate, e.g. in channel messaging or when sending a message to a shared worker).

## Methods

_This interface also inherits methods from its parent, {{domxref("Event")}}._

- {{domxref("MessageEvent.initMessageEvent","initMessageEvent()")}} {{deprecated_inline}}
  - : Initializes a message event. **Do not use this anymore** — **use the {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}} constructor instead.**

## Examples

In our [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](https://mdn.github.io/simple-shared-worker/)), we have two HTML pages, each of which uses some JavaScript to perform a simple calculation. The different scripts are using the same worker file to perform the calculation — they can both access it, even if their pages are running inside different windows.

The following code snippet shows creation of a {{domxref("SharedWorker")}} object using the {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructor. Both scripts contain this:

```js
var myWorker = new SharedWorker('worker.js');
```

Both scripts then access the worker through a {{domxref("MessagePort")}} object created using the {{domxref("SharedWorker.port")}} property. If the onmessage event is attached using addEventListener, the port is manually started using its `start()` method:

```js
myWorker.port.start();
```

When the port is started, both scripts post messages to the worker and handle messages sent from it using `port.postMessage()` and `port.onmessage`, respectively:

```js
first.onchange = function() {
  myWorker.port.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

second.onchange = function() {
  myWorker.port.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

myWorker.port.onmessage = function(e) {
  result1.textContent = e.data;
  console.log('Message received from worker');
}
```

Inside the worker we use the {{domxref("SharedWorkerGlobalScope.onconnect")}} handler to connect to the same port discussed above. The ports associated with that worker are accessible in the {{event("connect")}} event's `ports` property — we then use {{domxref("MessagePort")}} `start()` method to start the port, and the `onmessage` handler to deal with messages sent from the main threads.

```js
onconnect = function(e) {
  var port = e.ports[0];

  port.addEventListener('message', function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ExtendableMessageEvent")}} — similar to this interface but used in interfaces that needs to give more flexibility to authors.
