---
title: WebSocket
slug: Web/API/WebSocket
page-type: web-api-interface
tags:
  - API
  - Interface
  - NeedsContent
  - WebSocket
  - WebSockets
browser-compat: api.WebSocket
---
{{APIRef("Web Sockets API")}}

The `WebSocket` object provides the API for creating and managing a [WebSocket](/en-US/docs/Web/API/WebSockets_API) connection to a server, as well as for sending and receiving data on the connection.

To construct a `WebSocket`, use the [`WebSocket()`](/en-US/docs/Web/API/WebSocket/WebSocket) constructor.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Constructor

- {{domxref("WebSocket.WebSocket", "WebSocket()")}}
  - : Returns a newly created `WebSocket` object.

## Properties

- {{domxref("WebSocket.binaryType")}}
  - : The binary data type used by the connection.
- {{domxref("WebSocket.bufferedAmount")}} {{ReadOnlyInline}}
  - : The number of bytes of queued data.
- {{domxref("WebSocket.extensions")}} {{ReadOnlyInline}}
  - : The extensions selected by the server.
- {{domxref("WebSocket.protocol")}} {{ReadOnlyInline}}
  - : The sub-protocol selected by the server.
- {{domxref("WebSocket.readyState")}} {{ReadOnlyInline}}
  - : The current state of the connection.
- {{domxref("WebSocket.url")}} {{ReadOnlyInline}}
  - : The absolute URL of the WebSocket.

## Methods

- {{domxref("WebSocket.close()")}}
  - : Closes the connection.
- {{domxref("WebSocket.send()")}}
  - : Enqueues data to be transmitted.

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("WebSocket/close_event", "close")}}
  - : Fired when a connection with a `WebSocket` is closed.
    Also available via the `onclose` property
- {{domxref("WebSocket/error_event", "error")}}
  - : Fired when a connection with a `WebSocket` has been closed because of an error, such as when some data couldn't be sent.
    Also available via the `onerror` property.
- {{domxref("WebSocket/message_event", "message")}}
  - : Fired when data is received through a `WebSocket`.
    Also available via the `onmessage` property.
- {{domxref("WebSocket/open_event", "open")}}
  - : Fired when a connection with a `WebSocket` is opened.
    Also available via the `onopen` property.

## Examples

```js
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', (event) => {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', (event) => {
    console.log('Message from server ', event.data);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Writing WebSocket client applications](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
