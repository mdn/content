---
title: "WebSocket: WebSocket() constructor"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
page-type: web-api-constructor
browser-compat: api.WebSocket.WebSocket
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

The **`WebSocket()`** constructor returns a new {{domxref("WebSocket")}} object and immediately attempts to establish a connection to the specified WebSocket URL.

## Syntax

```js-nolint
new WebSocket(url)
new WebSocket(url, protocols)
```

### Parameters

- `url`
  - : The URL of the target WebSocket server to connect to.
    The URL must use one of the following schemes: `ws`, `wss`, `http`, or `https`, and cannot include a [URL fragment](/en-US/docs/Web/URI/Reference/Fragment).
    If a relative URL is provided, it is relative to the base URL of the calling script.

- `protocols` {{optional_inline}}
  - : A single string or an array of strings representing the [sub-protocol(s)](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) that the client would like to use, in order of preference.
    If it is omitted, an empty array is used by default, i.e., `[]`.

    A single server can implement multiple WebSocket sub-protocols, and handle different types of interactions depending on the specified value.
    Note however that only one sub-protocol can be selected per connection.

    The allowed values are those that can be specified in the {{httpheader("Sec-WebSocket-Protocol")}} HTTP header.
    These are values selected from the [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name), such as `soap`, `wamp`, `ship` and so on, or may be a custom name jointly understood by the client and the server.

    > [!NOTE]
    > The connection is not established until the sub-protocol is negotiated with the server.
    > The selected protocol can then be read from {{domxref("WebSocket.protocol")}}: it will be the empty string if a connection cannot be established.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if:
    - parsing of [`url`](#url) fails
    - [`url`](#url) has a scheme other than `ws`, `wss`, `http`, or `https`
    - [`url`](#url) has a [fragment](/en-US/docs/Web/URI/Reference/Fragment)
    - any of the values in [`protocols`](#protocols) occur more than once, or otherwise fail to match the requirements for elements that comprise the value of [`Sec-WebSocket-Protocol`](/en-US/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#sec-websocket-protocol) fields as defined by the WebSocket Protocol specification

## Examples

The examples below show how you might connect to a `WebSocket`.

The code below shows how we can connect to a socket using a URL with the `wss` scheme:

```js
const wssWebSocket = new WebSocket("wss://websocket.example.org");
console.log(wssWebSocket.url); // 'wss://websocket.example.org'

// Do something with socket

wssWebSocket.close();
```

The code for connecting to an HTTPS URL is nearly the same.
Under the hood the browser resolves this to a "WSS" connection, so the {{domxref("WebSocket.url")}} will have the scheme "wss:".

```js
const httpsWebSocket = new WebSocket("https://websocket.example.org");
console.log(httpsWebSocket.url); // 'wss://websocket.example.org'

// Do something with socket

httpsWebSocket.close();
```

We can also resolve relative URLs.
The absolute URL will depend on the base URL of the context in which it is called.

```js
relativeWebSocket = new WebSocket("/local/url");

// Do something with socket

relativeWebSocket.close();
```

The previous examples show how to _construct_ a `WebSocket`, but the connection is established asynchronously. Calling {{domxref("WebSocket/send", "send()")}} before the {{domxref("WebSocket/open_event", "open")}} event fires throws an `InvalidStateError` exception, because {{domxref("WebSocket/readyState", "readyState")}} is still `CONNECTING`. The example below shows how to wait for the connection before sending, and how to handle the {{domxref("WebSocket/error_event", "error")}} and {{domxref("WebSocket/close_event", "close")}} events:

```js
// Create WebSocket connection.
const socket = new WebSocket("wss://websocket.example.org");

// Connection opened
socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});

// Listen for messages
socket.addEventListener("message", (event) => {
  console.log("Message from server:", event.data);
});

// Handle errors
socket.addEventListener("error", (event) => {
  console.error("WebSocket error:", event);
});

// Handle disconnection
socket.addEventListener("close", (event) => {
  if (event.wasClean) {
    console.log(`Closed cleanly, code=${event.code}, reason=${event.reason}`);
  } else {
    console.log("Connection died");
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (the WebSocket Protocol specification)
