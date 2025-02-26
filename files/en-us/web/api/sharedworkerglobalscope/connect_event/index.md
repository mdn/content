---
title: "SharedWorkerGlobalScope: connect event"
short-title: connect
slug: Web/API/SharedWorkerGlobalScope/connect_event
page-type: web-api-event
browser-compat: api.SharedWorkerGlobalScope.connect_event
---

{{APIRef("Web Workers API")}}

The **`connect`** event is fired in shared workers at their {{domxref("SharedWorkerGlobalScope")}} when a new client connects.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
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
  - : A `MessageEventSource` (which can be a {{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, or {{domxref("ServiceWorker")}} object) representing the message emitter.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : An array of {{domxref("MessagePort")}} objects representing the ports associated with the channel the message is being sent through (where appropriate, e.g. in channel messaging or when sending a message to a shared worker).

## Examples

This example shows a shared worker file — when a connection to the worker occurs from a main thread via a {{domxref("MessagePort")}}, the `onconnect` event handler fires. The event object is a {{domxref("MessageEvent")}}.

The connecting port can be referenced through the event object's `ports` parameter; this reference can have an `onmessage` handler attached to it to handle messages coming in through the port, and its `postMessage()` method can be used to send messages back to the main thread using the worker.

```js
self.onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };

  port.start();
};
```

For a complete running example, see our [Basic shared worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([run shared worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

### addEventListener equivalent

You could also set up an event handler using the {{domxref("EventTarget/addEventListener", "addEventListener()")}} method:

```js
self.addEventListener("connect", (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("SharedWorkerGlobalScope")}}
