---
title: 'WebSocket: message event'
slug: Web/API/WebSocket/message_event
tags:
  - Event
  - Reference
  - WebSocket
  - message
browser-compat: api.WebSocket.message_event
---
{{APIRef}}

The `message` event is fired when data is received through a `WebSocket`.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('message', event => { })

onmessage = event => { }
```

## Event type

An {{domxref("MessageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("MessageEvent.data", "data")}} {{readonlyInline}}
  - : The data sent by the message emitter.
- {{domxref("MessageEvent.origin", "origin")}} {{readonlyInline}}
  - : A {{domxref("USVString")}} representing the origin of the message emitter.
- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{readonlyInline}}
  - : A {{domxref("DOMString")}} representing a unique ID for the event.
- {{domxref("MessageEvent.source", "source")}} {{readonlyInline}}
  - : A `MessageEventSource` (which can be a {{domxref("Window")}}, {{domxref("MessagePort")}}, or {{domxref("ServiceWorker")}} object) representing the message emitter.
- {{domxref("MessageEvent.ports", "ports")}} {{readonlyInline}}
  - : An array of {{domxref("MessagePort")}} objects representing the ports associated with the channel the message is being sent through (where appropriate, e.g. in channel messaging or when sending a message to a shared worker).

## Examples

```js
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
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
