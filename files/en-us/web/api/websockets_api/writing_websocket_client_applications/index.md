---
title: Writing WebSocket client applications
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
page-type: guide
---

{{DefaultAPISidebar("WebSockets API")}}

In this guide we'll walk through the implementation of a WebSocket-based ping application. In this application, the client sends a "ping" message to the server every second, and the server responds with a "pong" message. The client listens for "pong" messages and logs them, keeping track of how many message exchanges there have been.

Although this is a pretty minimal application, it covers the fundamental points involved in writing a WebSocket client.

You can find the complete example at [https://github.com/mdn/dom-examples/tree/main/websockets](https://github.com/mdn/dom-examples/tree/main/websockets). The server side is written in [Deno](https://deno.com/), so you'll have to install that first if you want to run the example locally.

## Creating a `WebSocket` object

To communicate using the WebSocket protocol, you need to create a {{domxref("WebSocket")}} object. As soon as you create this object, it will start trying to connect to the specified server.

```js
const wsUri = "ws://127.0.0.1/";
const websocket = new WebSocket(wsUri);
```

The `WebSocket` constructor takes one mandatory argument — the URL of the WebSocket server to connect to. In this case, since we're running the server locally, we're using the localhost address.

> [!NOTE]
> In this example we're using the `ws` protocol for the connection, because in the example we're connecting to localhost. In a real application, web pages should be served using HTTPS, and the WebSocket connection should use `wss` as the protocol.

The constructor takes another optional argument [`protocols`](/en-US/docs/Web/API/WebSocket/WebSocket#protocols), which allows a single server to implement multiple sub-protocols. We're not using this feature in our example.

The constructor will throw a `SecurityError` if the destination doesn't allow access.
This may happen if you attempt to use an insecure connection (most {{Glossary("user agent", "user agents")}} now require a secure link for all WebSocket connections unless they're on the same device or possibly on the same network).

## Listening for the `open` event

Creating a `WebSocket` instance starts the process of establishing a connection to the server. Once the connection is established, the {{domxref("WebSocket.open_event", "open")}} event is fired, and after this point the socket is able to transmit data.

In the example code below, when the `open` event is fired, we start sending one "ping" message to the server every second, using the {{domxref("Window.setInterval()")}} API:

```js
websocket.addEventListener("open", () => {
  log("CONNECTED");
  pingInterval = setInterval(() => {
    log(`SENT: ping: ${counter}`);
    websocket.send("ping");
  }, 1000);
});
```

## Listening for errors

If an error occurs while the connection is being established or at any time after it is established, the {{domxref("WebSocket.error_event", "error")}} event will be fired.

Our application doesn't do anything special on error, but we do log it:

```js
websocket.addEventListener("error", (e) => {
  log(`ERROR`);
});
```

On an error, the connection is closed and the `close` event will be fired.

## Sending messages

We've already seen that once the connection is established, we can use the {{domxref("WebSocket.send()", "send()")}} method to send messages to the server:

```js
websocket.addEventListener("open", () => {
  log("CONNECTED");
  pingInterval = setInterval(() => {
    log(`SENT: ping: ${counter}`);
    websocket.send("ping");
  }, 1000);
});
```

In our example we send text, but you can also send binary data as a {{domxref("Blob")}}, {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}}.

A common approach is to use {{glossary("JSON")}} to send serialized JavaScript objects as text. For example, instead of just sending the text message "ping", our client could send a serialized object including the number of messages exchanged so far:

```js
const message = {
  iteration: counter,
  content: "ping",
};
websocket.send(JSON.stringify(message));
```

The `send()` method is asynchronous: it does not wait for the data to be transmitted before returning to the caller. It just adds the data to its internal buffer and begins the process of transmission. The {{domxref("WebSocket.bufferedAmount")}} property represents the number of bytes that have not yet been transmitted. Note that the WebSockets protocol uses {{glossary("UTF-8")}} to encode text, so `bufferedAmount` is calculated based on the UTF-8 encoding of any buffered text data.

## Receiving messages

To receive messages from the server, we listen for the {{domxref("WebSocket.message_event", "message")}} event.

Our message event handler logs the received message, and increments our count of the number of message exchanges that have occurred:

```js
websocket.addEventListener("message", (e) => {
  log(`RECEIVED: ${e.data}: ${counter}`);
  counter++;
});
```

The server can also send binary data, which is exposed to clients as a {{domxref("Blob")}} or an {{jsxref("ArrayBuffer")}}, based on the value of the {{domxref("WebSocket.binaryType")}} property.

As we saw for sending messages, the server can also send JSON strings, which the client can then parse into an object:

```js
websocket.addEventListener("message", (e) => {
  const message = JSON.parse(e.data);
  log(`RECEIVED: ${message.iteration}: ${message.content}`);
  counter++;
});
```

## Handling disconnect

When the connection is closed, because either the client or the server closed it or because an error occurred, the {{domxref("WebSocket.close_event", "close")}} event will be fired.

Our application listens for the `close` event and cleans up the interval timer when it is fired:

```js
websocket.addEventListener("close", () => {
  log("DISCONNECTED");
  clearInterval(pingInterval);
});
```

## Working with the bfcache

The back/forward cache, or {{glossary("bfcache")}}, enables much faster back and forward navigation between pages that the user has recently visited. It does this by storing a complete snapshot of the page, including the JavaScript heap.

The browser pauses and then resumes JavaScript execution when a page is added to or restored from the bfcache. This means that, depending on what the page is doing, it's not always safe for the browser to use the bfcache for the page. If the browser determines that it is not safe, the page will not be added to the bfcache, and the user will not get the performance benefit that it can bring.

Different browsers use different criteria for adding a page to the bfcache, and having an open WebSocket connection may prevent the browser adding your page to the bfcache. This means it's good practice to close your connection when the user has finished with your page. The best event to use for this is the {{domxref("Window.pagehide_event", "pagehide")}} event.

We do this in our example app:

```js
window.addEventListener("pagehide", () => {
  if (websocket) {
    log("CLOSING");
    websocket.close();
    websocket = null;
    window.clearInterval(pingInterval);
  }
});
```

Conversely, by listening for the {{domxref("Window.pageshow_event", "pageshow")}} event, you can seamlessly start the connection again when the page is restored from the bfcache. Since the `pageshow` event also fires on page load, it can also be used to start the WebSocket connection when the page is first loaded:

```js
let websocket = null;

window.addEventListener("pageshow", () => {
  log("OPENING");

  websocket = new WebSocket(wsUri);

  websocket.addEventListener("open", () => {
    log("CONNECTED");
    pingInterval = setInterval(() => {
      log(`SENT: ping: ${counter}`);
      websocket.send("ping");
    }, 1000);
  });

  websocket.addEventListener("close", () => {
    log("DISCONNECTED");
    clearInterval(pingInterval);
  });

  websocket.addEventListener("message", (e) => {
    log(`RECEIVED: ${e.data}: ${counter}`);
    counter++;
  });

  websocket.addEventListener("error", (e) => {
    log(`ERROR: ${e.data}`);
  });
});
```

If you run our example, try navigating to a different page, then back to the example. In Chrome, you should see that the example starts the connection again, and keeps its original context: so, for example, it remembers the count of exchanged messages.

See the [web.dev article on the bfcache](https://web.dev/articles/bfcache#close-open-connections) for more context on bfcache compatibility and the WebSockets API.

On browsers that support it, you can [use the `notRestoredReasons` property of the Performance API](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) to get the reason a page was not added to the bfcache.

## Security considerations

WebSockets should not be used in a mixed content environment; that is, you shouldn't open a non-secure WebSocket connection from a page loaded using HTTPS or vice versa.
Most browsers now only allow secure WebSocket connections, and no longer support using them in insecure contexts.
