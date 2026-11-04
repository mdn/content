---
title: "DedicatedWorkerGlobalScope: messageerror event"
short-title: messageerror
slug: Web/API/DedicatedWorkerGlobalScope/messageerror_event
page-type: web-api-event
browser-compat: api.DedicatedWorkerGlobalScope.messageerror_event
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

The `messageerror` event is fired on a {{domxref('DedicatedWorkerGlobalScope')}} object when it receives a message that can't be deserialized.

This event is not cancellable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("messageerror", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onmessageerror = (event) => { }
```

## Event type

A {{domxref("MessageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Examples

Listen for `messageerror` using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener):

```js
// worker.js

self.addEventListener("messageerror", (event) => {
  self.postMessage("Error receiving message");
  console.error(event);
});
```

The same, but using the `onmessageerror` event handler property (but note that this replaces other event listeners added using `onmessageerror`, if any):

```js
// worker.js

self.onmessageerror = (event) => {
  self.postMessage("Error receiving message");
  console.error(event);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DedicatedWorkerGlobalScope")}}
- {{domxref("WorkerGlobalScope")}}
- Related events: [`message`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
- [`Worker.postMessage()`](/en-US/docs/Web/API/Worker/postMessage)
- [Using channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
