---
title: "Worker: messageerror event"
short-title: messageerror
slug: Web/API/Worker/messageerror_event
page-type: web-api-event
browser-compat: api.Worker.messageerror_event
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

The `messageerror` event is fired on a {{domxref('Worker')}} object when it receives a message that can't be deserialized.

This event is not cancellable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("messageerror", (event) => { })

onmessageerror = (event) => { }
```

## Event type

A {{domxref("MessageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Examples

Create a worker, and listen for `message` and `messageerror` events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener):

```js
// main.js

const worker = new Worker("static/scripts/worker.js");

worker.addEventListener("message", (event) => {
  console.error(`Received message from worker: ${event}`);
});

worker.addEventListener("messageerror", (event) => {
  console.error(`Error receiving message from worker: ${event}`);
});
```

The same, but using the `onmessageerror` event handler property:

```js
// main.js

const worker = new Worker("static/scripts/worker.js");

worker.onmessage = (event) => {
  console.error(`Received message from worker: ${event}`);
};

worker.onmessageerror = (event) => {
  console.error(`Error receiving message from worker: ${event}`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Worker.postMessage()`](/en-US/docs/Web/API/Worker/postMessage)
- Related events: [`message`](/en-US/docs/Web/API/Worker/message_event)
