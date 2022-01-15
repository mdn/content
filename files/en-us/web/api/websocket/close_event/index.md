---
title: 'WebSocket: close event'
slug: Web/API/WebSocket/close_event
tags:
  - API
  - Event
  - Reference
  - Web
  - WebSocket
  - close
  - events
browser-compat: api.WebSocket.close_event
---
{{APIRef}}

The `close` event is fired when a connection with a `WebSocket` is closed.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('close', event => { })

onclose = event => { }
```

## Event type

An {{domxref("CloseEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("CloseEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("CloseEvent.code", "code")}}{{readOnlyInline}}
  - : Returns an `unsigned short` containing the close code sent by the server.
- {{domxref("CloseEvent.reason", "reason")}}{{readOnlyInline}}
  - : Returns a {{domxref("DOMString")}} indicating the reason the server closed the connection. This is specific to the particular server and sub-protocol.
- {{domxref("CloseEvent.wasClean", "wasClean")}}{{readOnlyInline}}
  - : Returns a boolean value that Indicates whether or not the connection was cleanly closed.

## Examples

You might want to know when the connection has been closed so that you can update the UI or, perhaps, save data about the closed connection. Given that you have a variable called `exampleSocket` that refers to an opened `WebSocket`, this handler would handle the situation where the socket has been closed.

```js
exampleSocket.addEventListener('close', (event) => {
  console.log('The connection has been closed successfully.');
});
```

You can perform the same actions using the event handler property, like this:

```js
exampleSocket.onclose = function (event) {
  console.log('The connection has been closed successfully.');
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
