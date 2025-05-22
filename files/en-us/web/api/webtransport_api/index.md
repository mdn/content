---
title: WebTransport API
slug: Web/API/WebTransport_API
page-type: web-api-overview
browser-compat: api.WebTransport
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **WebTransport API** provides a modern update to {{domxref("WebSockets API", "WebSockets", "", "nocode")}}, transmitting data between client and server using [HTTP/3 Transport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/). WebTransport provides support for multiple streams, unidirectional streams, and out-of-order delivery. It enables reliable transport via {{domxref("Streams API", "streams", "", "nocode")}} and unreliable transport via UDP-like datagrams.

## Concepts and usage

[HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) has been in progress since 2018. It is based on Google's QUIC protocol (which is itself based on UDP), and fixes several issues around the classic TCP protocol, on which HTTP and WebSockets are based.

These include:

- **{{glossary("head of line blocking", "Head-of-line blocking")}}**
  - : HTTP/2 allows multiplexing, so a single connection can stream multiple resources simultaneously. However, if a single resource fails, all other resources on that connection are held up until any missing packets are retransmitted. With QUIC, only the failing resource is affected.
- **Faster performance**
  - : QUIC is more performant than TCP in many ways. QUIC can handle security features by itself, rather than handing responsibility off to other protocols like TLS — meaning fewer round trips. And streams provide better transport efficiency than the older packet mechanism. That can make a significant difference, especially on high-latency networks.
- **Better network transitions**
  - : QUIC uses a unique connection ID to handle the source and destination of each request — to ensure that packets are delivered correctly. This ID can persist between different networks, meaning that, for example, a download can continue without getting interrupted if you switch from Wi-Fi to a mobile network. HTTP/2, on the other hand, uses IP addresses as identifiers, so network transitions can be problematic.
- **Unreliable transport**
  - : HTTP/3 supports unreliable data transmission via datagrams.

The WebTransport API provides low-level access to two-way communication via HTTP/3, taking advantage of the above benefits, and supporting both reliable and unreliable data transmission.

### Initial connection

To open a connection to an HTTP/3 server, you pass its URL to the {{domxref("WebTransport.WebTransport", "WebTransport()")}} constructor. Note that the scheme needs to be HTTPS, and the port number needs to be explicitly specified. Once the {{domxref("WebTransport.ready")}} promise fulfills, you can start using the connection.

Also note that you can respond to the connection closing by waiting for the {{domxref("WebTransport.closed")}} promise to fulfill. Errors returned by WebTransport operations are of type {{domxref("WebTransportError")}}, and contain additional data on top of the standard {{domxref("DOMException")}} set.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  // …
}

// …

async function closeTransport(transport) {
  // Respond to connection closing
  try {
    await transport.closed;
    console.log(`The HTTP/3 connection to ${url} closed gracefully.`);
  } catch (error) {
    console.error(`The HTTP/3 connection to ${url} closed due to ${error}.`);
  }
}
```

### Unreliable transmission via datagrams

"Unreliable" means that transmission of data is not guaranteed, nor is arrival in a specific order. This is fine in some situations and provides very fast delivery. For example, you might want to transmit regular game state updates where each message supersedes the last one that arrives, and order is not important.

Unreliable data transmission is handled via the {{domxref("WebTransport.datagrams")}} property — this returns a {{domxref("WebTransportDatagramDuplexStream")}} object containing everything you need to send datagrams to the server, and receive them back.

The {{domxref("WebTransportDatagramDuplexStream.writable")}} property returns a {{domxref("WritableStream")}} object that you can write data to using a writer, for transmission to the server:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

The {{domxref("WebTransportDatagramDuplexStream.readable")}} property returns a {{domxref("ReadableStream")}} object that you can use to receive data from the server:

```js
async function readData() {
  const reader = transport.datagrams.readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array.
    console.log(value);
  }
}
```

### Reliable transmission via streams

"Reliable" means that transmission and order of data are guaranteed. That provides slower delivery (albeit faster than with WebSockets), and is needed in situations where reliability and ordering are important (such as chat applications, for example).

When using reliable transmission via streams you can also set the relative priority of different streams over the same transport.

### Unidirectional transmission

To open a unidirectional stream from a user agent, you use the {{domxref("WebTransport.createUnidirectionalStream()")}} method to get a reference to a {{domxref("WritableStream")}}. From this you can [get a writer](/en-US/docs/Web/API/WritableStream/getWriter) to allow data to be written to the stream and sent to the server.

```js
async function writeData() {
  const stream = await transport.createUnidirectionalStream();
  const writer = stream.writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);

  try {
    await writer.close();
    console.log("All data has been sent.");
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}
```

Note also the use of the {{domxref("WritableStreamDefaultWriter.close()")}} method to close the associated HTTP/3 connection once all data has been sent.

If the server opens a unidirectional stream to transmit data to the client, this can be accessed on the client via the {{domxref("WebTransport.incomingUnidirectionalStreams")}} property, which returns a {{domxref("ReadableStream")}} of {{domxref("WebTransportReceiveStream")}} objects. These can be used to read {{jsxref("Uint8Array")}} instances sent by the server.

In this case, the first thing to do is set up a function to read a `WebTransportReceiveStream`. These objects inherit from the `ReadableStream` class, so can be used in just the same way:

```js
async function readData(receiveStream) {
  const reader = receiveStream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array
    console.log(value);
  }
}
```

Next, call {{domxref("WebTransport.incomingUnidirectionalStreams")}} and get a reference to the reader available on the `ReadableStream` it returns, and then use the reader to read the data from the server. Each chunk is a `WebTransportReceiveStream`, and we use the `readFrom()` set up earlier to read them:

```js
async function receiveUnidirectional() {
  const uds = transport.incomingUnidirectionalStreams;
  const reader = uds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is an instance of WebTransportReceiveStream
    await readData(value);
  }
}
```

#### Bidirectional transmission

To open a bidirectional stream from a user agent, you use the {{domxref("WebTransport.createBidirectionalStream()")}} method to get a reference to a {{domxref("WebTransportBidirectionalStream")}}.
This contains `readable` and `writable` properties returning references to `WebTransportReceiveStream` and `WebTransportSendStream` instances that can be used to read from and write to the server.

> **Note:** `WebTransportBidirectionalStream` is similar to {{domxref("WebTransportDatagramDuplexStream")}}, except that in that interface the `readable` and `writable` properties are `ReadableStream` and `WritableStream` respectively.

```js
async function setUpBidirectional() {
  const stream = await transport.createBidirectionalStream();
  // stream is a WebTransportBidirectionalStream
  // stream.readable is a WebTransportReceiveStream
  const readable = stream.readable;
  // stream.writable is a WebTransportSendStream
  const writable = stream.writable;

  // …
}
```

Reading from the `WebTransportReceiveStream` can then be done as follows:

```js
async function readData(readable) {
  const reader = readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array.
    console.log(value);
  }
}
```

And writing to the `WebTransportSendStream` can be done like this:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

If the server opens a bidirectional stream to transmit data to and receive it from the client, this can be accessed via the {{domxref("WebTransport.incomingBidirectionalStreams")}} property, which returns a {{domxref("ReadableStream")}} of `WebTransportBidirectionalStream` objects. Each one can be used to read and write {{jsxref("Uint8Array")}} instances as shown above. However, as with the unidirectional example, you need an initial function to read the bidirectional stream in the first place:

```js
async function receiveBidirectional() {
  const bds = transport.incomingBidirectionalStreams;
  const reader = bds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is an instance of WebTransportBidirectionalStream
    await readData(value.readable);
    await writeData(value.writable);
  }
}
```

## Interfaces

- {{domxref("WebTransport")}}
  - : Provides functionality to enable a user agent to connect to an HTTP/3 server, initiate reliable and unreliable transport in either or both directions, and close the connection once it is no longer needed.
- {{domxref("WebTransportBidirectionalStream")}}
  - : Represents a bidirectional stream created by a server or a client that can be used for reliable transport. Provides access to a {{domxref("ReadableStream")}} for reading incoming data, and a {{domxref("WritableStream")}} for writing outgoing data.
- {{domxref("WebTransportDatagramDuplexStream")}}
  - : Represents a duplex stream that can be used for unreliable transport of datagrams between client and server. Provides access to a {{domxref("ReadableStream")}} for reading incoming datagrams, a {{domxref("WritableStream")}} for writing outgoing datagrams, and various settings and statistics related to the stream.
- {{domxref("WebTransportError")}}
  - : Represents an error related to the WebTransport API, which can arise from server errors, network connection problems, or client-initiated abort operations (for example, arising from a {{domxref("WritableStream.abort()")}} call).
- {{domxref("WebTransportReceiveStream")}}
  - : Provides streaming features for an incoming WebTransport unidirectional or bidirectional {{domxref("WebTransport")}} stream.
- {{domxref("WebTransportSendStream")}}
  - : Provides streaming features for an outgoing WebTransport unidirectional or bidirectional {{domxref("WebTransport")}} stream.

## Examples

For complete examples, see:

- [WebTransport over HTTP/3 client](https://webtransport.day/)
- [WebTransport (BYOB) Echo with WebCodecs in Worker](https://webrtc.internaut.com/wc/wtSender4/)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
