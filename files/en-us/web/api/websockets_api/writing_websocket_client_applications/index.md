---
title: Writing WebSocket client applications
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
page-type: guide
---

{{APIRef("Websockets API")}}

WebSocket client applications use the [WebSocket API](/en-US/docs/Web/API/WebSockets_API) to communicate with [WebSocket servers](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers) using the WebSocket protocol.

{{AvailableInWorkers}}

> **Note:** The example snippets in this article are taken from our WebSocket chat client/server sample.
> [See the code](https://github.com/mdn/samples-server/tree/master/s/websocket-chat).

## Creating a WebSocket object

In order to communicate using the WebSocket protocol, you need to create a {{domxref("WebSocket")}} object; this will automatically attempt to open the connection to the server.

The WebSocket constructor accepts one required and one optional parameter:

```js
webSocket = new WebSocket(url, protocols);
```

- `url`
  - : The URL to which to connect; this should be the URL to which the WebSocket server will respond.
    This should use the URL scheme `wss://`, although some software may allow you to use the insecure `ws://` for local connections.
- `protocols` {{ optional_inline() }}
  - : Either a single protocol string or an array of protocol strings.
    These strings are used to indicate sub-protocols, so that a single server can implement multiple WebSocket sub-protocols (for example, you might want one server to be able to handle different types of interactions depending on the specified `protocol`).
    If you don't specify a protocol string, an empty string is assumed.

The constructor will throw a `SecurityError` if the destination doesn't allow access.
This may happen if you attempt to use an insecure connection (most {{Glossary("user agent", "user agents")}} now require a secure link for all WebSocket connections unless they're on the same device or possibly on the same network).

### Connection errors

If an error occurs while attempting to connect, first a simple event with the name `error` is sent to the {{domxref("WebSocket")}} object (thereby invoking its {{domxref("WebSocket/error_event", "onerror")}} handler), and then the {{domxref("CloseEvent")}} is sent to the `WebSocket` object (thereby invoking its {{domxref("WebSocket/close_event", "onclose")}} handler) to indicate the reason for the connection's closing.

The browser may also output to its console a more descriptive error message as well as a closing code as defined in [RFC 6455, Section 7.4](https://datatracker.ietf.org/doc/html/rfc6455#section-7.4) through the {{domxref("CloseEvent")}}.

### Examples

This simple example creates a new WebSocket, connecting to the server at `wss://www.example.com/socketserver`.
A custom protocol of "protocolOne" is named in the request for the socket in this example, though this can be omitted.

```js
const exampleSocket = new WebSocket(
  "wss://www.example.com/socketserver",
  "protocolOne",
);
```

On return, {{domxref("WebSocket.readyState", "exampleSocket.readyState")}} is `CONNECTING`. The `readyState` will become `OPEN` once
the connection is ready to transfer data.

If you want to open a connection and are flexible about the protocols you support, you can specify an array of protocols:

```js
const exampleSocket = new WebSocket("wss://www.example.com/socketserver", [
  "protocolOne",
  "protocolTwo",
]);
```

Once the connection is established (that is, `readyState` is `OPEN`), {{domxref("WebSocket.protocol", "exampleSocket.protocol")}} will tell you which protocol the server selected.

Establishing a WebSocket relies on the [HTTP Upgrade mechanism](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism), so the request for the protocol upgrade is implicit when we address the web server as `ws://www.example.com` or `wss://www.example.com`.

## Sending data to the server

Once you've opened your connection, you can begin transmitting data to the server.
To do this, call the `WebSocket` object's {{domxref("WebSocket.send", "send()")}} method for each message you want to send:

```js
exampleSocket.send("Here's some text that the server is urgently awaiting!");
```

You can send data as a string, {{ domxref("Blob") }}, or {{jsxref("ArrayBuffer")}}.

As establishing a connection is asynchronous and prone to failure there is no guarantee that calling the `send()` method immediately after creating a WebSocket object will be successful.
We can at least be sure that attempting to send data only takes place once a connection is established by defining an {{domxref("WebSocket/open_event", "onopen")}} event handler to do the work:

```js
exampleSocket.onopen = (event) => {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
```

### Using JSON to transmit objects

One handy thing you can do is use {{glossary("JSON")}} to send reasonably complex data
to the server. For example, a chat program can interact with a server using a protocol
implemented using packets of JSON-encapsulated data:

```js
// Send text to all users through the server
function sendText() {
  // Construct a msg object containing the data the server needs to process the message from the chat client.
  const msg = {
    type: "message",
    text: document.getElementById("text").value,
    id: clientID,
    date: Date.now(),
  };

  // Send the msg object as a JSON-formatted string.
  exampleSocket.send(JSON.stringify(msg));

  // Blank the text input element, ready to receive the next line of text from the user.
  document.getElementById("text").value = "";
}
```

## Receiving messages from the server

WebSockets is an event-driven API; when messages are received, a `message`
event is sent to the `WebSocket` object. To handle it, add an event listener
for the `message` event, or use the {{domxref("WebSocket/message_event",
  "onmessage")}} event handler. To begin listening for incoming data, you can do something
like this:

```js
exampleSocket.onmessage = (event) => {
  console.log(event.data);
};
```

### Receiving and interpreting JSON objects

Let's consider the chat client application first alluded to in [Using JSON to transmit objects](#using_json_to_transmit_objects). There are assorted types of data packets the client might receive, such as:

- Login handshake
- Message text
- User list updates

The code that interprets these incoming messages might look like this:

```js
exampleSocket.onmessage = (event) => {
  const f = document.getElementById("chatbox").contentDocument;
  let text = "";
  const msg = JSON.parse(event.data);
  const time = new Date(msg.date);
  const timeStr = time.toLocaleTimeString();

  switch (msg.type) {
    case "id":
      clientID = msg.id;
      setUsername();
      break;
    case "username":
      text = `User <em>${msg.name}</em> signed in at ${timeStr}<br>`;
      break;
    case "message":
      text = `(${timeStr}) ${msg.name} : ${msg.text} <br>`;
      break;
    case "rejectusername":
      text = `Your username has been set to <em>${msg.name}</em> because the name you chose is in use.<br>`;
      break;
    case "userlist":
      document.getElementById("userlistbox").innerHTML = msg.users.join("<br>");
      break;
  }

  if (text.length) {
    f.write(text);
    document.getElementById("chatbox").contentWindow.scrollByPages(1);
  }
};
```

Here we use {{jsxref("JSON.parse()")}} to convert the JSON object back into the original object, then examine and act upon its contents.

### Text data format

Text received over a WebSocket connection is in UTF-8 format.

## Closing the connection

When you've finished using the WebSocket connection, call the WebSocket method {{domxref("WebSocket.close", "close()")}}:

```js
exampleSocket.close();
```

It may be helpful to examine the socket's {{domxref("WebSocket.bufferedAmount", "bufferedAmount")}} attribute before attempting to close the connection to determine if any data has yet to be transmitted on the network.
If this value isn't 0, there's pending data still, so you may wish to wait before closing the connection.

## Security considerations

WebSockets should not be used in a mixed content environment; that is, you shouldn't open a non-secure WebSocket connection from a page loaded using HTTPS or vice versa.
Most browsers now only allow secure WebSocket connections, and no longer support using them in insecure contexts.
