---
title: Writing WebSocket client applications
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
page-type: guide
---

{{DefaultAPISidebar("WebSockets API")}} {{AvailableInWorkers}}

In this guide we'll walk through the implementation of a WebSocket-based ping application. In this application, the client sends a "ping" message to the server every second, and the server responds with a "pong" message. The client listens for "pong" messages and logs them, keeping track of how many message exchanges there have been.

Although this is a pretty minimal application, it covers the fundamental points involved in writing a WebSocket client.

You can find the complete example at [https://github.com/mdn/dom-examples/tree/main/websockets](https://github.com/mdn/dom-examples/tree/main/websockets). The server side is written in [Deno](https://deno.com/), so you'll have to install that first if you want to try running the example locally.

## Creating a `WebSocket` object

In order to communicate using the WebSocket protocol, you need to create a {{domxref("WebSocket")}} object. As soon as you create this object, it will start trying to connect to the server.

```js
const wsUri = "ws://127.0.0.1/";
const websocket = new WebSocket(wsUri);
```

The `WebSocket` constructor takes one mandatory argument, which is the URL of the WebSocket server to connect to. In this case, since we're running the server locally, we're using the address of localhost.

The constructor takes another optional argument [`protocols`](/en-US/docs/Web/API/WebSocket/WebSocket#protocols), which allows a single server to implement multiple sub-protocols. We're not using this feature in our example.

The constructor will throw a `SecurityError` if the destination doesn't allow access.
This may happen if you attempt to use an insecure connection (most {{Glossary("user agent", "user agents")}} now require a secure link for all WebSocket connections unless they're on the same device or possibly on the same network).

## Listening for the `open` event

Creating a `WebSocket` instance starts the process of establishing a connection to the server. Once the connection is established, the {{domxref("WebSocket.open_event", "open")}} event is fired, and after this point the socket is able to transmit data.

In the example code below, when the `open` event is fired, we start sending one "ping" message every second, using the {{domxref("Window.setInterval()")}} API:

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

We've already seen that once the connection is estalished, we can use the {{domxref("WebSocket.send()", "send()")}} method to send messages to the server:

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

A common approach is to use {{glossary("JSON")}} to send and receive serialized JavaScript objects. For example, instead of just sending the text message "ping", our client could send a serialized object including the number of messages exchanged so far:

```js
const message = {
  iteration: counter,
  content: "ping",
};
websocket.send(JSON.stringify(message));
```

The `send()` method is asynchronous, and the {{domxref("WebSocket.bufferedAmount")}} property represents the number of bytes that have not yet been transmitted. Note that the WebSockets protocol uses {{glossary("UTF-8")}} to encode text, so `bufferedAmount` is calculated based on the UTF-8 encoding of any buffered text data.

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

As we saw for sending messages, the server could also send JSON-serialized objects, which the client can then parse:

```js
websocket.addEventListener("message", (e) => {
  const message = JSON.parse(e.data);
  log(`RECEIVED: ${message.iteration}: ${message.content}`);
  counter++;
});
```

## Handling disconnect

When the connection is closed, because either client or server closed it or because there was an error, then the {{domxref("WebSocket.close_event", "close")}} event will be fired.

Our application listens for the `close` event and cleans up the interval timer when it is fired:

```js
websocket.addEventListener("close", () => {
  log("DISCONNECTED");
  clearInterval(pingInterval);
});
```

## Working with the bfcache

The back/forward cache, or {{glossary("bfcache")}}, enables much faster back and forward navigation between pages that the user has recently visited. It does this by storing a complete snapshot of the page, including the JavaScript heap.

The browser pauses and then resumes JavaScript execution when a page is added to or loaded from the bfcache. This means that, depending on what the page is doing, it's not always safe for the browser to use the bfcache for the page. If the browser determines that it is not safe, then the page will not be added to the bfcache, and then the user will not get the performance benefit that it can bring.

In practice, different browsers use different criteria for adding a page to the bfcache. If a page has an active WebSocket connection, then:

- Firefox and Chrome will not add the page to the bfcache.
- Safari will add the page to the bfcache, but will cancel any active network requests. This is likely to generate an error in your WebSocket connection, leading to the connection being closed.

In Chrome, you can make a WebSocket client compatible with the bfcache by closing your WebSocket connection in the handler for the {{domxref("Window.pagehide_event", "pagehide")}} event, which is fired before the page is added to the bfcache.

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

Conversely, by listening for the {{domxref("Window.pageshow_event", "pageshow")}} event, you can seamlessly start the connection again when the page is loaded, or when it is retrieved from the bfcache. So in our example we will add all the code to initialize our WebSocket and set up its event listeners inside the `pageshow` event handler:

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

See the [web.dev article on the bfcache](https://web.dev/articles/bfcache#close-open-connections) for more context on this issue.

## Security considerations

WebSockets should not be used in a mixed content environment; that is, you shouldn't open a non-secure WebSocket connection from a page loaded using HTTPS or vice versa.
Most browsers now only allow secure WebSocket connections, and no longer support using them in insecure contexts.
