---
title: WebSocket
slug: Web/API/WebSocket
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

## Constructor

- {{domxref("WebSocket.WebSocket", "WebSocket(url[, protocols])")}}
  - : Returns a newly created `WebSocket` object.

## Properties

- {{domxref("WebSocket.binaryType")}}
  - : The binary data type used by the connection.
- {{domxref("WebSocket.bufferedAmount")}} {{readonlyinline}}
  - : The number of bytes of queued data.
- {{domxref("WebSocket.extensions")}} {{readonlyinline}}
  - : The extensions selected by the server.
- {{domxref("WebSocket.onclose")}}
  - : An event listener to be called when the connection is closed.
- {{domxref("WebSocket.onerror")}}
  - : An event listener to be called when an error occurs.
- {{domxref("WebSocket.onmessage")}}
  - : An event listener to be called when a message is received from the server.
- {{domxref("WebSocket.onopen")}}
  - : An event listener to be called when the connection is opened.
- {{domxref("WebSocket.protocol")}} {{readonlyinline}}
  - : The sub-protocol selected by the server.
- {{domxref("WebSocket.readyState")}} {{readonlyinline}}
  - : The current state of the connection.
- {{domxref("WebSocket.url")}} {{readonlyinline}}
  - : The absolute URL of the WebSocket.

## Methods

- {{domxref("WebSocket.close", "WebSocket.close([code[, reason]])")}}
  - : Closes the connection.
- {{domxref("WebSocket.send", "WebSocket.send(data)")}}
  - : Enqueues data to be transmitted.

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("WebSocket/close_event", "close")}}
  - : Fired when a connection with a `WebSocket` is closed.
    Also available via the {{domxref("WebSocket/onclose", "onclose")}} property
- {{domxref("WebSocket/error_event", "error")}}
  - : Fired when a connection with a `WebSocket` has been closed because of an error, such as when some data couldn't be sent.
    Also available via the {{domxref("WebSocket/onerror", "onerror")}} property.
- {{domxref("WebSocket/message_event", "message")}}
  - : Fired when data is received through a `WebSocket`.
    Also available via the {{domxref("WebSocket/onmessage", "onmessage")}} property.
- {{domxref("WebSocket/open_event", "open")}}
  - : Fired when a connection with a `WebSocket` is opened.
    Also available via the {{domxref("WebSocket/onopen", "onopen")}} property.

## Examples

```js
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

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

- [Writing WebSocket client applications](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
