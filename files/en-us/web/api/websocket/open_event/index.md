---
title: "WebSocket: open event"
short-title: open
slug: Web/API/WebSocket/open_event
page-type: web-api-event
browser-compat: api.WebSocket.open_event
---

{{APIRef}}

The `open` event is fired when a connection with a `WebSocket` is opened.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("open", (event) => {});

onopen = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebSocket: close event](/en-US/docs/Web/API/WebSocket/close_event)
- [WebSocket: error event](/en-US/docs/Web/API/WebSocket/error_event)
- [WebSocket: message event](/en-US/docs/Web/API/WebSocket/message_event)
- [Writing WebSocket client applications](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
