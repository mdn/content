---
title: 'DedicatedWorkerGlobalScope: messageerror event'
slug: Web/API/DedicatedWorkerGlobalScope/messageerror_event
page-type: web-api-event
tags:
  - API
  - DedicatedWorkerGlobalScope
  - Event
  - Reference
  - messageerror
browser-compat: api.DedicatedWorkerGlobalScope.messageerror_event
---
{{APIRef}}

The `messageerror` event is fired on a {{domxref('DedicatedWorkerGlobalScope')}} object when it receives a message that can't be deserialized.

This event is not cancellable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('messageerror', (event) => { });

onmessageerror = (event) => { };
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
  - : A `MessageEventSource` (which can be a {{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, or {{domxref("ServiceWorker")}} object) representing the message emitter.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : An array of {{domxref("MessagePort")}} objects representing the ports associated with the channel the message is being sent through (where appropriate, e.g. in channel messaging or when sending a message to a shared worker).

## Examples

Listen for `messageerror` using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener):

```js
// worker.js

self.addEventListener('messageerror', (event) => {
    self.postMessage('Error receiving message');
    console.error(event);
});
```

The same, but using the `onmessageerror` event handler property:

```js
// worker.js

self.onmessageerror = (event) => {
    self.postMessage('Error receiving message');
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
