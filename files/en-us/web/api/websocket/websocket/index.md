---
title: "WebSocket: WebSocket() constructor"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
page-type: web-api-constructor
browser-compat: api.WebSocket.WebSocket
---

{{APIRef("WebSockets API")}}

The **`WebSocket()`** constructor returns a new {{domxref("WebSocket")}} object and immediately attempts to establish a connection to the specified WebSocket URL.

## Syntax

```js-nolint
new WebSocket(url)
new WebSocket(url, protocols)
```

### Parameters

- `url`

  - : The URL of the target WebSocket server to connect to.
    The URL must use one of the following schemes: `ws`, `wss`, `http`, or `https`, and cannot include a [URL fragment](/en-US/docs/Web/HTTP/Identifying_resources_on_the_Web#fragment).
    If a relative URL is provided, it is relative to the base URL of the calling script.

- `protocols` {{optional_inline}}

  - : A single string or an array of strings representing the sub-protocol(s) that the client would like to use.
    If it is omitted, an empty array is used by default, i.e. `[]`.

    A single server can implement multiple WebSocket sub-protocols, and handle different types of interactions depending on the specified value.
    The allowed values are those that can be specified in the {{httpheader("Sec-WebSocket-Protocol")}} HTTP header.

    Note that the connection is not established until the sub-protocol is negotiated with the server.
    The selected protocol can then be read from {{domxref("WebSocket.protocol")}}.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}

  - : Thrown if:

    - parsing of [`url`](#url) fails
    - [`url`](#url) has a scheme other than `ws`, `wss`, `http`, or `https`
    - [`url`](#url) has a [fragment](/en-US/docs/Web/URI#fragment)
    - any of the values in [`protocols`](#protocols) occur more than once, or otherwise fail to match the requirements for elements that comprise the value of [`Sec-WebSocket-Protocol`](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism#sec-websocket-protocol) fields as defined by the WebSocket Protocol specification

## Examples

The examples below show how you might connect to a `WebSocket`.

The code below shows how we can connect to a socket using an URL with the `wss` schema:

```js
const httpsWebSocket = new WebSocket('wss://websocket.example.org');
console.log(httpsWebSocket.url); // 'wss://websocket.example.org'
... // Do something with socket
httpsWebSocket.close();
```

The code for connecting to an HTTPS URL is nearly the same.
Under the hood the browser resolves this to a "WSS" connection, so the {{domxref("WebSocket.url")}} will have the schema "wss:".

```js
let wssWebSocket = new WebSocket('https://websocket.example.org');
console.log(wssWebSocket.url); // 'wss://websocket.example.org'
... // Do something with socket
wssWebSocket.close();
```

We can also resolve relative URLs.
The absolute URL will depend on the base URL of the context in which it is called.

```js
relativeWebSocket = new WebSocket('/local/url');
... // Do something with socket
relativeWebSocket.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (the WebSocket Protocol specification)
