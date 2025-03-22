---
title: "WebSocketStream: closed property"
short-title: closed
slug: Web/API/WebSocketStream/closed
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WebSocketStream.closed
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`closed`** read-only property of the
{{domxref("WebSocketStream")}} interface returns a {{jsxref("Promise")}} that fulfills with an object once the socket connection is closed. The object contains the closing code and reason.

## Value

A promise, which fulfills with an object containing the following properties:

- `closeCode`
  - : A number representing the closing code (see the full list of [`CloseEvent` status codes](/en-US/docs/Web/API/CloseEvent/code#value)).
- `reason`
  - : A string representing a human-readable description of the reason why the socket connection was closed.

The promise rejects if the WebSocket connection did not close cleanly (for a clean close, the associated TCP connection must be closed _after_ the WebSocket closing handshake is completed).

## Examples

```js
const wsURL = "wss://127.0.0.1/";
const wss = new WebSocketStream(wsURL);

wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

See [Using WebSocketStream to write a client](/en-US/docs/Web/API/WebSockets_API/Using_WebSocketStream) for a complete example with full explanation.

## Specifications

Not currently a part of any specification. See https://github.com/whatwg/websockets/pull/48 for standardization progress.

## Browser compatibility

{{Compat}}

## See also

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
