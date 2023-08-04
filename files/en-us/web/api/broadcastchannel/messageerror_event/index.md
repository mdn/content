---
title: "BroadcastChannel: messageerror event"
short-title: messageerror
slug: Web/API/BroadcastChannel/messageerror_event
page-type: web-api-event
browser-compat: api.BroadcastChannel.messageerror_event
---

{{APIRef}}

The `messageerror` event is fired on a {{domxref('BroadcastChannel')}} object when a message that can't be deserialized arrives on the channel.

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

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("MessageEvent.data", "data")}} {{ReadOnlyInline}}
  - : The data sent by the message emitter.
- {{domxref("MessageEvent.origin", "origin")}} {{ReadOnlyInline}}
  - : A string representing the origin of the message emitter.
- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{ReadOnlyInline}}
  - : A string representing a unique ID for the event.
- {{domxref("MessageEvent.source", "source")}} {{ReadOnlyInline}}
  - : A _message event source_, which is either a {{glossary("WindowProxy")}}, a {{domxref("MessagePort")}}, or a {{domxref("ServiceWorker")}} object representing the message emitter.
- {{domxref("MessageEvent.ports", "ports")}} {{ReadOnlyInline}}
  - : An array of {{domxref("MessagePort")}} objects representing the ports associated with the channel the message is being sent through (where appropriate, e.g. in channel messaging or when sending a message to a shared worker).

## Examples

This code uses [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) to listen for messages and errors:

```js
const channel = new BroadcastChannel("example-channel");

channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});

channel.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

The same, but using the `onmessage` and `onmessageerror` event handler properties:

```js
const channel = new BroadcastChannel("example-channel");

channel.onmessage = (event) => {
  received.textContent = event.data;
};

channel.onmessageerror = (event) => {
  console.log(event);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`message`](/en-US/docs/Web/API/BroadcastChannel/message_event).
