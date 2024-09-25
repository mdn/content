---
title: "WebSocketStream: opened property"
short-title: opened
slug: Web/API/WebSocketStream/opened
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WebSocketStream.opened
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`opened`** read-only property of the
{{domxref("WebSocketStream")}} interface returns a {{jsxref("Promise")}} that fulfills with an object once the socket connection is successfully opened. Among other features, this object contains a {{domxref("ReadableStream")}} and a {{domxref("WritableStream")}} instance for receiving and sending data on the connection.

## Value

A promise, which fulfills with an object containing the following properties:

- `extensions`
  - : A string representing any extensions applied to the `WebSocketStream`. Such extensions are not currently defined, but may be in the future. Currently returns an empty string.
- `protocol`
  - : A string representing the sub-protocol used to open the current WebSocket connection (chosen from the options specified in the [`protocols`](/en-US/docs/Web/API/WebSocketStream/WebSocketStream#protocols) option of the `WebSocketStream()` constructor). Returns an empty string if no sub-protocol has been used to open the connection (i.e. no sub-protocol options were included in the constructor call).
- `readable`
  - : A {{domxref("ReadableStream")}} instance. Call {{domxref("ReadableStream.getReader()")}} on it to obtain a {{domxref("ReadableStreamDefaultReader")}} instance that can be used to read incoming WebSocket data.
- `writable`
  - : A {{domxref("WritableStream")}} instance. Call {{domxref("WritableStream.getWriter()")}} on it to obtain a {{domxref("WritableStreamDefaultWriter")}} instance that can be used to write data to the WebSocket connection.

The promise rejects if the WebSocket connection fails.

## Examples

```js
const wsURL = "wss://127.0.0.1/";
const wss = new WebSocketStream(wsURL);

async function start() {
  const { readable, writable, extensions, protocol } = await wss.opened;

  const reader = readable.getReader();
  const writer = writable.getWriter();

  writer.write("ping");

  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }

    setTimeout(() => {
      writer.write("ping");
    }, 5000);
  }
}
```

See [Using WebSocketStream to write a client](/en-US/docs/Web/API/WebSockets_API/Using_WebSocketStream) for a complete example with full explanation.

## Specifications

Not currently a part of any specification. See https://github.com/whatwg/websockets/pull/48 for standardization progress.

## Browser compatibility

{{Compat}}

## See also

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
