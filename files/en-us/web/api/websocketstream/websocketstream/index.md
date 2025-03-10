---
title: "WebSocketStream: WebSocketStream() constructor"
short-title: WebSocketStream()
slug: Web/API/WebSocketStream/WebSocketStream
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.WebSocketStream.WebSocketStream
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`WebSocketStream()`** constructor creates a new
{{domxref("WebSocketStream")}} object instance.

## Syntax

```js-nolint
new WebSocketStream(url)
new WebSocketStream(url, options)
```

### Parameters

- `url`
  - : A string representing the URL of the WebSocket server you want to connect to with this `WebSocketStream` instance. Allowed URL schemes are `"ws"`, `"wss"`, `"http"`, and `"https"`.
- `options` {{optional_inline}}
  - : An object that can contain the following properties:
    - `protocols` {{optional_inline}}
      - : A single string or an array of strings representing the sub-protocol(s) that the client would like to use, for example `"amqp"` or `"mqtt"`. Subprotocols may be selected from the [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) or may be custom names jointly understood by the client and the server. A single server can implement multiple WebSocket sub-protocols, and handle different types of interactions depending on the specified value. If it is omitted, an empty array is used by default. If `protocols` is included, the connection will only be established if the server reports that it has selected one of these sub-protocols.
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} belonging to an {{domxref("AbortController")}} that you want to use to close the WebSocket connection.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the URL scheme is not one of `"ws"`, `"wss"`, `"http"`, or `"https"`.

## Examples

The most basic example takes the URL of a WebSocket server as an argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

A more advanced example could also include an options object containing custom protocols and/or an {{domxref("AbortSignal")}}:

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: controller.signal,
});
```

At a later time, {{domxref("AbortController.abort()")}} can be called when required to close the connection:

```js
controller.abort();
```

Alternatively, you can use the {{domxref("WebSocketStream.close()")}} method to close a connection, however this is mainly needed if you wish to specify a custom code and/or reason for the server to report.

See [Using WebSocketStream to write a client](/en-US/docs/Web/API/WebSockets_API/Using_WebSocketStream) for a complete example with full explanation.

## Specifications

Not currently a part of any specification. See https://github.com/whatwg/websockets/pull/48 for standardization progress.

## Browser compatibility

{{Compat}}

## See also

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
