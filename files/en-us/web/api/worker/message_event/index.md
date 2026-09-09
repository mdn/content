---
title: "Worker: message event"
short-title: message
slug: Web/API/Worker/message_event
page-type: web-api-event
browser-compat: api.Worker.message_event
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

The `message` event is fired on a {{domxref('Worker')}} object when the worker's parent receives a message from its worker (i.e., when the worker sends a message using [`DedicatedWorkerGlobalScope.postMessage()`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)).

This event is not cancellable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Event type

A {{domxref("MessageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Examples

This code creates a new worker and listens to messages from it using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener):

```js
const worker = new Worker("static/scripts/worker.js");

worker.addEventListener("message", (event) => {
  console.log(`Received message from worker: ${event.data}`);
});
```

Alternatively, it could listen using the `onmessage` event handler property:

```js
const worker = new Worker("static/scripts/worker.js");

worker.onmessage = (event) => {
  console.log(`Received message from worker: ${event.data}`);
};
```

The worker posts messages using [`self.postMessage()`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/postMessage):

```js
// static/scripts/worker.js

self.postMessage("I'm alive!");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`messageerror`](/en-US/docs/Web/API/Worker/messageerror_event).
- [`DedicatedWorkerGlobalScope.postMessage()`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/postMessage).
