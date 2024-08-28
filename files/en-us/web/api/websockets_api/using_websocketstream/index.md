---
title: Using WebSocketStream to write a client
slug: Web/API/WebSockets_API/Using_WebSocketStream
page-type: guide
status:
  - non-standard
---

{{DefaultAPISidebar("WebSockets API")}}{{non-standard_header}}

The {{domxref("WebSocketStream")}} API is a modern reimagining of WebSocket client-side JavaScript functionality. It is promise-based, and therefore simpler to work with than the traditional {{domxref("WebSocket")}} API in the modern JavaScript scosystem. In addition, it uses the [Streams API](/en-US/docs/Web/API/Streams_API) to handle receiving and sending messages, meaning that socket connections can take advantage of stream [backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure) automatically, regulating the speed of reading or writing to avoid bottlenecks in the application.

This article explains how to use the {{domxref("WebSocketStream")}} API to create a simple WebSocket client.

> [!NOTE]
> Backpressure is an issue with the traditional `WebSocket` API — it has no way to apply backpressure, therefore when messages arrive faster than the application can process them, the application will either fill up the device's memory by buffering those messages, become unresponsive due to 100% CPU usage, or both.

## Feature detection

To check whether the `WebSocketStream` API is supported, you can use the following:

```js
if ("WebSocketStream" in self) {
  // WebSocketStream is supported
}
```

## Creating a WebSocketStream object

To create a WebSocket client, you first need to create a new `WebSocketStream` instance using the {{domxref("WebSocketStream.WebSocketStream", "WebSocketStream()")}} constructor. In its simplest form, it takes the URL of the WebSocket server as an argument:

```js
const wss = new WebSocketStream("example.com/wss");
```

It can also take an options object containing custom protocols and/or an {{domxref("AbortSignal")}} (see [Closing the connection](#closing_the_connection)):

```js
const controller = new AbortController();
const chatWSS = new WebSocketStream("wss://example.com/chat", {
  protocols: ["chat", "chatv2"],
  signal: controller.signal,
});
```

## Sending and receiving data

The `WebSocketStream` instance has an {{domxref("WebSocketStream.opened", "opened")}} property — this returns a promise that fulfills with an object containing a {{domxref("ReadableStream")}} and a {{domxref("WritableStream")}} instance once the WebSocket connection is opened successfully:

```js
const { readable, writable } = await wss.opened;
```

Calling {{domxref("ReadableStream.getReader", "getReader()")}} and {{domxref("WritableStream.getWriter", "getWriter()")}} on these objects provides us with a {{domxref("ReadableStreamDefaultReader")}} and a {{domxref("WritableStreamDefaultWriter")}} respectively, which can be used to read from and write to the socket connection:

```js
const reader = readable.getReader();
const writer = writable.getWriter();
```

To write data to the socket, you can use {{domxref("WritableStreamDefaultWriter.write()")}}:

```js
await writer.write("My message");
```

To read data from the socket, you can continuously call {{domxref("ReadableStreamDefaultReader.read()")}} until the stream is done (i.e. until the returned `value` is `undefined`, and `done` is `true`):

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Process value in some way
}
```

## Closing the connection

With `WebSocketStream`, the information previously available via the `WebSocket` {{domxref("WebSocket.close_event", "close")}} and {{domxref("WebSocket.error_event", "error")}} events is now available via the {{domxref("WebSocketStream.closed", "closed")}} property — this returns a promise that fulfills with an object containing the closing code (see the full list of [`CloseEvent` status codes](/en-US/docs/Web/API/CloseEvent/code#value)) and reason sent by the server:

```js
const { code, reason } = await wss.closed;
```

The promise rejects in the event of an unclean close.

As mentioned earlier, the WebSocket connection can be closed using an {{domxref("AbortController")}}. The necessary {{domxref("AbortSignal")}} is passed to the `WebSocketStream` constructor during creation, and {{domxref("AbortController.abort()")}} can then be called when required:

```js
const controller = new AbortController();
const wss = new WebSocketStream("example.com/wss", {
  signal: controller.signal,
});

// some time later

controller.abort();
```

Alternatively you can use the {{domxref("WebSocketStream.close()")}} method to close a connection, however this is mainly needed if you wish to specify a custom code and reason for the server to report:

```js
wss.close({
  code: 4000,
  reason: "Night draws to a close",
});
```

> [!NOTE]
> Depending on the server setup and status code you use, the server may choose to ignore a custom code in favor of a valid code that is correct for the closing reason.

## A complete sample client

To demonstrate basic usage of `WebSocketStream`, we've created a sample client. You can see the [full listing](#full_listing) at the bottom of the article, and follow along with the explanation below.

> [!NOTE]
> To get the example working, you'll also need a server component. We wrote our client to work along with the Deno server explained in [Writing a WebSocket server in JavaScript (Deno)](/en-US/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno), but any compatible server will do.

First we grab a reference to a DOM element into which we will write output messages, and define a utility function that writes a message to it:

```js
const output = document.querySelector("#output");

function writeToScreen(message) {
  output.insertAdjacentHTML("beforeend", `<p>${message}</p>`);
}
```

Next, we create an `if ... else` structure to feature detect `WebSocketStream` and output an informative message on non-supporting browsers:

```js
if ("WebSocketStream" in window) {
  // supporting code path
} else {
  writeToScreen("Your browser does not support WebSocketStream");
}
```

In the supporting code path, we begin by defining a variable containing the WebSocket server URL, and constructing a new `WebSocketServer` instance:

```js
const wsURL = "ws://127.0.0.1/";
const wss = new WebSocketStream(wsURL);
```

The main bulk of our code is contained within the `start()` function, which we define and then immediately invoke. We await the {{domxref("WebSocketStream.opened", "opened")}} promise, then after it fulfills write a message to let the reader know the connection is successful and create {{domxref("ReadableStreamDefaultReader")}} and {{domxref("WritableStreamDefaultWriter")}} instances from the returned `readable` and `writable` properties.

Next, we `write()` a `"ping"` value to the socket and communicate that to the user. At this point, the server will respond with a `"pong"` message. We await the `read()` of the read message, communicate it to the user, then write another `"ping"` to the server after a timeout of 5 seconds. This continues the `"ping"`/`"pong"` loop indefinitely.

```js
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
```

Finally, we include a promise-style code section to inform the user of the code and reason if the WebSocket connection is closed for any reason, as signalled by the {{domxref("WebSocketStream.closed", "closed")}} promise fulfilling:

```js
wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.error("Socket closed", result.closeCode, result.reason);
});
```

You can test this out by including something like the following after the previous code block:

```js
setTimeout(async () => {
  wss.close({
    code: 1000,
    reason: "That's all folks",
  });
}, 10000);
```

### Full listing

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>WebSocketStream Test</title>
  </head>
  <body>
    <h2>WebSocketStream Test</h2>
    <p>Sends a ping every five seconds</p>
    <div id="output"></div>
    <script>
      const output = document.querySelector("#output");

      function writeToScreen(message) {
        output.insertAdjacentHTML("beforeend", `<p>${message}</p>`);
      }

      if ("WebSocketStream" in window) {
        const wsURL = "ws://127.0.0.1/";
        const wss = new WebSocketStream(wsURL);

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

        // setTimeout(async () => {
        //   wss.close({
        //     code: 1000,
        //     reason: "That's all folks"
        //   });
        // }, 10000);
      } else {
        writeToScreen("Your browser does not support WebSocketStream");
      }
    </script>
  </body>
</html>
```
