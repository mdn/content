---
title: "WebSocketStream: opened property"
short-title: opened
slug: Web/API/WebSocketStream/opened
page-type: web-api-instance-property
status:
  - non-standard
browser-compat: api.WebSocketStream.opened
---

{{APIRef("WebSockets API")}}{{non-standard_header}}

The **`opened`** read-only property of the
{{domxref("WebSocketStream")}} interface returns a {{jsxref("Promise")}} that fulfills with an object once the socket connection is successfully opened. The object contains several useful features, including a {{domxref("ReadableStream")}} and a {{domxref("WritableStream")}} instance for receiving and sending data on the connection.

## Value

A promise, which fulfills with an object containing the following properties:

- `extensions`
  - : A string representing any extensions applied to the `WebSocketStream`. Such extensions are not currently defined, but may be in the future. Currently returns an empty string.
- `protocol`
  - : A string representing any custom protocol used to open the current WebSocket connection, as specified in the [`protocols`](/en-US/docs/Web/API/WebSocketStream/WebSocketStream#protocols) option of the `WebSocketStream()` constructor. Returns an empty string if no custom protocol was used.
- `readable`
  - : A {{domxref("ReadableStream")}} instance. Call {{domxref("ReadableStream.getReader()")}} on it to obtain a {{domxref("ReadableStreamDefaultReader")}} instance that can be used to read incoming WebSocket data.
- `writable`
  - : A {{domxref("WritableStream")}} instance. Call {{domxref("WritableStream.getWriter()")}} on it to obtain a {{domxref("WritableStreamDefaultWriter")}} instance that can be used to write data to the WebSocket connection.

The promise rejects in the event of an unclean close.

## Examples

```js
const output = document.querySelector("#output");

function writeToScreen(message) {
  output.insertAdjacentHTML("beforeend", `<p>${message}</p>`);
}

if ("WebSocketStream" in window) {
  const wsURL = "ws://127.0.0.1/";
  const wss = new WebSocketStream(wsURL);

  console.log(wss.url);

  async function start() {
    const { readable, writable } = await wss.opened;
    writeToScreen("CONNECTED");
    const reader = readable.getReader();
    const writer = writable.getWriter();

    await writer.write("ping");
    writeToScreen("SENT: ping");

    while (true) {
      const { value, done } = await reader.read();
      writeToScreen(`RECEIVED: ${value}`);
      if (done) {
        break;
      }

      setTimeout(async () => {
        await writer.write("ping");
        writeToScreen("SENT: ping");
      }, 5000);
    }
  }

  start();
} else {
  writeToScreen("Your browser does not support WebSocketStream");
}
```

See [Using WebSocketStream to write a client](/en-US/docs/Web/API/WebSockets_API/Using_WebSocketStream) for a complete example with full explanation.

## Specifications

Not currently a part of any specification. See https://github.com/whatwg/websockets/pull/48 for standardization progress.

## Browser compatibility

{{Compat}}

## See also

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
