---
title: "MessagePort: messageerror event"
short-title: messageerror
slug: Web/API/MessagePort/messageerror_event
page-type: web-api-event
browser-compat: api.MessagePort.messageerror_event
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

The **`messageerror`** event is fired on a {{domxref('MessagePort')}} object when it receives a message that can't be deserialized.

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
  - : An array containing all {{domxref("MessagePort")}} objects sent with the message, in order.

## Examples

### Attempting to share memory

A common cause of `messageerror` events is attempting to send a {{jsxref("SharedArrayBuffer")}} object, or a buffer view backed by one, across [agent clusters](/en-US/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing). For example, a window is not in the same agent cluster as a shared worker it created, so suppose the page runs the following code:

```js
const worker = new SharedWorker("worker.js");
worker.port.start();
worker.port.addEventListener("message", (event) => {
  worker.port.postMessage(new SharedArrayBuffer(1024));
});
```

And `worker.js` contains the following code:

```js
self.addEventListener("connect", (event) => {
  console.log("Hello");
  const port = event.ports[0];
  port.start();
  port.postMessage("Port connected");
  port.addEventListener("messageerror", (event) => {
    console.log("Message error");
  });
});
```

Then the shared worker will receive a `messageerror` event when it tries to deserialize the message sent from the window.

> [!NOTE]
> You can use browser devtools to debug your SharedWorker, by entering a URL in your browser address bar to access the devtools workers inspector; for example, in Chrome, the URL `chrome://inspect/#workers`, and in Firefox, the URL `about:debugging#workers`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`message`](/en-US/docs/Web/API/MessagePort/message_event).
- [Using channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
