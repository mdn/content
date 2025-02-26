---
title: "WebSocket: error event"
short-title: error
slug: Web/API/WebSocket/error_event
page-type: web-api-event
browser-compat: api.WebSocket.error_event
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

The `error` event is fired when a connection with a `WebSocket` has been closed due to an error (some data couldn't be sent for example).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
// Create WebSocket connection
const socket = new WebSocket("ws://localhost:8080");

// Listen for possible errors
socket.addEventListener("error", (event) => {
  console.log("WebSocket error: ", event);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebSocket: close event](/en-US/docs/Web/API/WebSocket/close_event)
- [WebSocket: message event](/en-US/docs/Web/API/WebSocket/message_event)
- [WebSocket: open event](/en-US/docs/Web/API/WebSocket/open_event)
- [Writing WebSocket client applications](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
