---
title: BroadcastChannel
slug: Web/API/BroadcastChannel
tags:
  - API
  - Broadcast Channel API
  - Experimental
  - HTML API
  - Interface
  - Reference
browser-compat: api.BroadcastChannel
---
{{APIRef("Broadcast Channel API")}}

The **`BroadcastChannel`** interface represents a named channel that any {{glossary("browsing context")}} of a given {{glossary("origin")}} can subscribe to. It allows communication between different documents (in different windows, tabs, frames or iframes) of the same origin. Messages are broadcasted via a {{event("message")}} event fired at all `BroadcastChannel` objects listening to the channel.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Constructor

- {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}
  - : Creates an object linking to the named channel.

## Properties

_This interface also inherits properties from its parent, {{domxref("EventTarget")}}._

- {{domxref("BroadcastChannel.name")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMString")}}, the name of the channel.

### Event handlers

- {{domxref("BroadcastChannel.onmessage")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) property that specifies the function to execute when a {{event("message")}} event is fired on this object.
- {{domxref("BroadcastChannel.onmessageerror")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called when a {{domxref("MessageEvent")}} of type {{domxref("MessageError")}} is fired—that is, when it receives a message that cannot be deserialized.

## Methods

_This interface also inherits methods from its parent, {{domxref("EventTarget")}}._

- {{domxref("BroadcastChannel.postMessage()")}}
  - : Sends the message, of any type of object, to each `BroadcastChannel` object listening to the same channel.
- {{domxref("BroadcastChannel.close()")}}
  - : Closes the channel object, indicating it won't get any new messages, and allowing it to be, eventually, garbage collected.

## Events

- [`message`](/en-US/docs/Web/API/BroadcastChannel/message_event)
  - : Fired when a message arrives on the channel.
    Also available via the [`onmessage`](/en-US/docs/Web/API/BroadcastChannel/onmessage) property.
- [`messageerror`](/en-US/docs/Web/API/BroadcastChannel/messageerror_event)
  - : Fired when a message arrives that can't be deserialized.
    Also available via the [`onmessageerror`](/en-US/docs/Web/API/BroadcastChannel/onmessageerror) property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Another, more heavyweight, way of communicating between browser contexts: {{domxref("ServiceWorker")}}.
- [Broadcast Channel API overview](/en-US/docs/Web/API/Broadcast_Channel_API)
