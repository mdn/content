---
title: "WebSocket: close event"
short-title: close
slug: Web/API/WebSocket/close_event
page-type: web-api-event
browser-compat: api.WebSocket.close_event
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

The `close` event is fired when a connection with a `WebSocket` is closed.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Event type

A {{domxref("CloseEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("CloseEvent")}}

## Examples

You might want to know when the connection has been closed so that you can update the UI or, perhaps, save data about the closed connection. Given that you have a variable called `exampleSocket` that refers to an opened `WebSocket`, this handler would handle the situation where the socket has been closed.

```js
exampleSocket.addEventListener("close", (event) => {
  console.log("The connection has been closed successfully.");
});
```

You can perform the same actions using the event handler property, like this:

```js
exampleSocket.onclose = (event) => {
  console.log("The connection has been closed successfully.");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebSocket: error event](/en-US/docs/Web/API/WebSocket/error_event)
- [WebSocket: message event](/en-US/docs/Web/API/WebSocket/message_event)
- [WebSocket: open event](/en-US/docs/Web/API/WebSocket/open_event)
- [Writing WebSocket client applications](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
