---
title: "WebSocket: message event"
short-title: message
slug: Web/API/WebSocket/message_event
page-type: web-api-event
browser-compat: api.WebSocket.message_event
---

{{APIRef}}

The `message` event is fired when data is received through a `WebSocket`.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Event type

A {{domxref("MessageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("MessageEvent.data", "data")}} {{ReadOnlyInline}}
  - : The data sent by the message emitter. The type of this property depends on the type of the WebSocket message and the value of {{domxref("WebSocket.binaryType")}}.
    - If the message type is "text", then this field is a string.
    - If the message type is "binary" type, then the type of this property can be inferred from the `binaryType` of this socket:
      - {{jsxref("ArrayBuffer")}} if `binaryType` is `"arraybuffer"`,
      - {{domxref("Blob")}} if `binaryType` is `"blob"`. This does not have an associated media type ({{domxref("Blob.type")}} is `""`).
- {{domxref("MessageEvent.origin", "origin")}} {{ReadOnlyInline}}
  - : A string representing the origin of the message emitter.

Other properties from the {{domxref("MessageEvent")}} interface are present, but do not pertain to the WebSocket API and are left at their default values:

- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{ReadOnlyInline}}
- {{domxref("MessageEvent.source", "source")}} {{ReadOnlyInline}}
- {{domxref("MessageEvent.ports", "ports")}} {{ReadOnlyInline}}

## Examples

```js
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Listen for messages
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebSocket: close event](/en-US/docs/Web/API/WebSocket/close_event)
- [WebSocket: error event](/en-US/docs/Web/API/WebSocket/error_event)
- [WebSocket: open event](/en-US/docs/Web/API/WebSocket/open_event)
- [Writing WebSocket client applications](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
