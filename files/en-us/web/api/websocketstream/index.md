---
title: WebSocketStream
slug: Web/API/WebSocketStream
page-type: web-api-interface
status:
  - experimental
browser-compat: api.WebSocketStream
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`WebSocketStream`** interface of the {{domxref("WebSockets API", "WebSockets API", "", "nocode")}} is a promise-based API for connecting to a WebSocket server. It uses [streams](/en-US/docs/Web/API/Streams_API) to send and receive data on the connection, and can therefore take advantage of stream [backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure) automatically, regulating the speed of reading or writing to avoid bottlenecks in the application.

{{InheritanceDiagram}}

## Constructor

- {{domxref("WebSocketStream.WebSocketStream", "WebSocketStream()")}} {{experimental_inline}}
  - : Creates a new `WebSocketStream` object instance.

## Instance properties

- {{domxref("WebSocketStream.url", "url")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns the URL of the WebSocket server that the `WebSocketStream` instance was created with.
- {{domxref("WebSocketStream.closed", "closed")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with an object once the socket connection is closed. The object contains the closing code and reason as sent by the server.
- {{domxref("WebSocketStream.opened", "opened")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with an object once the socket connection is successfully opened. Among other features, this object contains a {{domxref("ReadableStream")}} and a {{domxref("WritableStream")}} instance for receiving and sending data on the connection.

## Instance methods

- {{domxref("WebSocketStream.close", "close()")}} {{experimental_inline}}
  - : Closes the WebSocket connection.

## Examples

```js
const output = document.querySelector("#output");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}

if (!("WebSocketStream" in self)) {
  writeToScreen("Your browser does not support WebSocketStream");
} else {
  const wsURL = "ws://127.0.0.1/";
  const wss = new WebSocketStream(wsURL);

  console.log(wss.url);

  async function start() {
    const { readable, writable, extensions, protocol } = await wss.opened;
    writeToScreen("CONNECTED");
    closeBtn.disabled = false;
    const reader = readable.getReader();
    const writer = writable.getWriter();

    writer.write("ping");
    writeToScreen("SENT: ping");

    while (true) {
      const { value, done } = await reader.read();
      writeToScreen(`RECEIVED: ${value}`);
      if (done) {
        break;
      }

      setTimeout(() => {
        writer.write("ping");
        writeToScreen("SENT: ping");
      }, 5000);
    }
  }

  start();
}
```

See [Using WebSocketStream to write a client](/en-US/docs/Web/API/WebSockets_API/Using_WebSocketStream) for a complete example with full explanation.

## Specifications

Not currently a part of any specification. See https://github.com/whatwg/websockets/pull/48 for standardization progress.

## Browser compatibility

{{Compat}}

## See also

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
