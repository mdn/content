---
title: "WebSocketStream: closed property"
short-title: closed
slug: Web/API/WebSocketStream/closed
page-type: web-api-instance-property
status:
  - non-standard
browser-compat: api.WebSocketStream.closed
---

{{APIRef("WebSockets API")}}{{non-standard_header}}

The **`closed`** read-only property of the
{{domxref("WebSocketStream")}} interface returns a {{jsxref("Promise")}} that fulfills with an object once the socket connection is closed. The object contains the closing code and reason sent by the server.

## Value

A promise, which fulfills with an object containing the following properties:

- `closeCode`
  - : A number representing the closing code sent by the server (see the full list of [`CloseEvent` status codes](/en-US/docs/Web/API/CloseEvent/code#value)).
- `reason`
  - : A string representing a human-readable description of the reason why the socket connection is closed.

## Examples

```js
const output = document.querySelector("#output");

function writeToScreen(message) {
  output.insertAdjacentHTML("beforeend", `<p>${message}</p>`);
}

if ("WebSocketStream" in self) {
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

  wss.closed.then((result) => {
    writeToScreen(
      `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
    );
    console.error("Socket closed", result.closeCode, result.reason);
  });
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
