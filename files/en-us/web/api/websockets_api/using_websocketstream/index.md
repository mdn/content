---
title: Using WebSocketStream to write a client
slug: Web/API/WebSockets_API/Using_WebSocketStream
page-type: guide
---

{{DefaultAPISidebar("WebSockets API")}}

The {{domxref("WebSocketStream")}} API is a {{jsxref("Promise")}}-based alternative to {{domxref("WebSocket")}} for creating and using client-side WebSocket connections. `WebSocketStream` uses the [Streams API](/en-US/docs/Web/API/Streams_API) to handle receiving and sending messages, meaning that socket connections can take advantage of stream [backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure) automatically (no additional action required by the developer), regulating the speed of reading or writing to avoid bottlenecks in the application.

This article explains how to use the {{domxref("WebSocketStream")}} API to create a WebSocket client.

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
const wss = new WebSocketStream("wss://example.com/wss");
```

It can also take an `options` object containing custom protocols and/or an {{domxref("AbortSignal")}}. The `AbortSignal` can be used to abort the connection attempt before the [handshake](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) has completed (that is, before the {{domxref("WebSocketStream.opened", "opened")}} promise resolves). It is typically used to implement a connection timeout. For example, the following code will time out if the handshake takes more than 5 seconds to complete:

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: AbortSignal.timeout(5000),
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
writer.write("My message");
```

To read data from the socket, you can continuously call {{domxref("ReadableStreamDefaultReader.read()")}} until the stream has finished, which is indicated by `done` being `true`:

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Process value in some way
}
```

The browser automatically controls the rate at which the client receives and sends data by applying backpressure when needed. If data is arriving faster than the client can `read()` it, the underlying Streams API exerts backpressure on the server. In addition, `write()` operations will only proceed if it is safe to do so.

## Closing the connection

To close a connection, call the {{domxref("WebSocketStream.close()")}} method, optionally passing a [closing code](/en-US/docs/Web/API/CloseEvent/code#value) and reason:

```js
wss.close({
  closeCode: 4000,
  reason: "Night draws to a close",
});
```

> [!NOTE]
> Depending on the server setup and status code you use, the server may choose to ignore a custom code in favor of a valid code that is correct for the closing reason.

Closing the underlying {{domxref("WritableStream")}} or {{domxref("WritableStreamDefaultWriter")}} also closes the connection.

To handle connection closure, wait for the {{domxref("WebSocketStream.closed", "closed")}} promise to resolve:

```js
const { closeCode, reason } = await wss.closed;
```

## A complete sample client

To demonstrate basic usage of `WebSocketStream`, we've created a sample client. You can see the [full listing](#full_listing) at the bottom of the article, and follow along with the explanation below.

> [!NOTE]
> To get the example working, you'll also need a server component. We wrote our client to work along with the Deno server explained in [Writing a WebSocket server in JavaScript (Deno)](/en-US/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno), but any compatible server will do.

The HTML for the demo is as follows. It includes informational [`<h2>`](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) and {{htmlelement("p")}} elements, a {{htmlelement("button")}} to close the WebSocket connection that is initially disabled, and a {{htmlelement("div")}} for us to write output messages into.

```html
<h2>WebSocketStream Test</h2>
<p>Sends a ping every five seconds</p>
<button id="close" disabled>Close socket connection</button>
<div id="output"></div>
```

Now on to the JavaScript. First we grab references to the output `<div>` and the close `<button>`, and define a utility function that writes messages to the `<div>`:

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}
```

Next, we create an `if...else` structure to feature detect `WebSocketStream` and output an informative message on non-supporting browsers:

```js
if (!("WebSocketStream" in self)) {
  writeToScreen("Your browser does not support WebSocketStream");
} else {
  // supporting code path
}
```

In the supporting code path, we begin by defining a variable containing the WebSocket server URL, and constructing a new `WebSocketServer` instance:

```js
const wsURL = "ws://127.0.0.1/";
const wss = new WebSocketStream(wsURL);
```

> [!NOTE]
> Best practice is to use secure WebSockets (`wss://`) in production apps. However, in this demo we are connecting to localhost, therefore we need to use the non-secure WebSocket protocol (`ws://`) for the example to work.

The main bulk of our code is contained within the `start()` function, which we define and then immediately invoke. We await the {{domxref("WebSocketStream.opened", "opened")}} promise, then after it fulfills write a message to let the reader know the connection is successful and create {{domxref("ReadableStreamDefaultReader")}} and {{domxref("WritableStreamDefaultWriter")}} instances from the returned `readable` and `writable` properties.

Next, we create a `start()` function that sends "ping" messages to the server and receives "pong" messages back, and invoke it. In the function body we await the `wss.opened` promise and create a reader and writer from its fulfillment values. Once the socket is open, we communicate that to the user and enable the close button. Next, we `write()` a `"ping"` value to the socket and communicate that to the user. At this point, the server will respond with a `"pong"` message. We await the `read()` of the response, communicate it to the user, then write another `"ping"` to the server after a timeout of 5 seconds. This continues the `"ping"`/`"pong"` loop indefinitely.

```js
async function start() {
  const { readable, writable } = await wss.opened;
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

    setTimeout(async () => {
      try {
        await writer.write("ping");
        writeToScreen("SENT: ping");
      } catch (e) {
        writeToScreen(`Error writing to socket: ${e.message}`);
      }
    }, 5000);
  }
}

start();
```

> [!NOTE]
> The {{domxref("Window.setTimeout", "setTimeout()")}} function wraps the `write()` call in a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block to handle any errors that can arise if the application tries to write to the stream after it has been closed.

We now include a promise-style code section to inform the user of the code and reason if the WebSocket connection is closed, as signalled by the {{domxref("WebSocketStream.closed", "closed")}} promise fulfilling:

```js
wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

Finally, we add an event listener to the close button that closes the connection using the `close()` method, with a code and custom reason. The function also disables the close button — we don't want users to press it once the connection is already closed.

```js
closeBtn.addEventListener("click", () => {
  wss.close({
    closeCode: 1000,
    reason: "That's all folks",
  });

  closeBtn.disabled = true;
});
```

### Full listing

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

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

  wss.closed.then((result) => {
    writeToScreen(
      `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
    );
    console.log("Socket closed", result.closeCode, result.reason);
  });

  closeBtn.addEventListener("click", () => {
    wss.close({
      closeCode: 1000,
      reason: "That's all folks",
    });

    closeBtn.disabled = true;
  });
}
```
