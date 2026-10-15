---
title: "WebSocket: message event"
short-title: message
slug: Web/API/WebSocket/message_event
page-type: web-api-event
browser-compat: api.WebSocket.message_event
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

The `message` event is fired when data is received through a `WebSocket`.

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
