---
title: WebSocketStream
slug: Web/API/WebSocketStream
page-type: web-api-interface
status:
  - non-standard
browser-compat: api.WebSocketStream
---

{{APIRef("WebSockets API")}}{{non-standard_header}}

The **`WebSocketStream`** interface of the {{domxref("WebSockets API", "WebSockets API", "", "nocode")}} is a promise-based API for connecting to a WebSocket server. It uses [streams](/en-US/docs/Web/API/Streams_API) to send and receive data on the connection, and can therefore take advantage of stream [backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure) automatically, regulating the speed of reading or writing to avoid bottlenecks in the application.

{{InheritanceDiagram}}

## Constructor

- {{domxref("WebSocketStream.WebSocketStream", "WebSocketStream()")}}
  - : Creates a new `WebSocketStream` object instance.

## Instance properties

- {{domxref("WebSocketStream.url", "url")}} {{ReadOnlyInline}}
  - : Returns the URL of the WebSocket server that the `WebSocketStream` instance was created with.
- {{domxref("WebSocketStream.closed", "closed")}} {{ReadOnlyInline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with an object once the socket connection is closed. The object contains the closing code and reason sent by the server.
- {{domxref("WebSocketStream.opened", "opened")}} {{ReadOnlyInline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with an object once the socket connection is successfully opened. The object contains several useful features, including a {{domxref("ReadableStream")}} and a {{domxref("WritableStream")}} instance for receiving and sending data on the connection.

## Instance methods

- {{domxref("WebSocketStream.close", "close()")}}
  - : Closes the WebSocket connection.

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
