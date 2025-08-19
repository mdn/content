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
      - : An {{domxref("AbortSignal")}} belonging to an {{domxref("AbortController")}}, which can be used to abort the *handshake*. This is specifically intended to make it easy to implement connection timeouts. As such, it does nothing after the connection is established.


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
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: AbortSignal.timeout(5000),
});
```

and the connect will timeout after 5 seconds.

If you're connecting to localhost, it's likely to succeed or fail almost instantly, so this will have no effect.

You can use the {{domxref("WebSocketStream.close()")}} method to close a connection.

`WritableStream.close()` and `WritableStreamDefaultWriter.close()` from the `writable` of the fulfilled `opened` `Promise` also closes the connection.

See [Using WebSocketStream to write a client](/en-US/docs/Web/API/WebSockets_API/Using_WebSocketStream) for a complete example with full explanation.

## Specifications

Not currently a part of any specification. See https://github.com/whatwg/websockets/pull/48 for standardization progress. 

[WebSocketStream API design](https://docs.google.com/document/d/1La1ehXw76HP6n1uUeks-WJGFgAnpX2tCjKts7QFJ57Y/edit?pli=1&tab=t.0).


## Browser compatibility

{{Compat}}

## See also

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
