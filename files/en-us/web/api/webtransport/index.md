---
title: WebTransport
slug: Web/API/WebTransport
page-type: web-api-interface
browser-compat: api.WebTransport
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}}

The **`WebTransport`** interface of the {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} provides functionality to enable a user agent to connect to an HTTP/3 server, initiate reliable and unreliable transport in either or both directions, and close the connection once it is no longer needed.

{{InheritanceDiagram}}

{{AvailableInWorkers}}

## Constructor

- {{domxref("WebTransport.WebTransport", "WebTransport()")}}
  - : Creates a new `WebTransport` object instance.

## Instance properties

- {{domxref("WebTransport.closed", "closed")}} {{ReadOnlyInline}}
  - : Returns a promise that resolves when the transport is closed.
- {{domxref("WebTransport.datagrams", "datagrams")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("WebTransportDatagramDuplexStream")}} instance that can be used to send and receive datagrams.
- {{domxref("WebTransport.incomingBidirectionalStreams", "incomingBidirectionalStreams")}} {{ReadOnlyInline}}
  - : Represents one or more bidirectional streams opened by the server. Returns a {{domxref("ReadableStream")}} of {{domxref("WebTransportBidirectionalStream")}} objects. Each one can be used to read data from the server and write data back to it.
- {{domxref("WebTransport.incomingUnidirectionalStreams", "incomingUnidirectionalStreams")}} {{ReadOnlyInline}}
  - : Represents one or more unidirectional streams opened by the server. Returns a {{domxref("ReadableStream")}} of {{domxref("WebTransportReceiveStream")}} objects. Each one can be used to read data from the server.
- {{domxref("WebTransport.ready", "ready")}} {{ReadOnlyInline}}
  - : Returns a promise that resolves when the transport is ready to use.

## Instance methods

- {{domxref("WebTransport.close", "close()")}}
  - : Closes an ongoing WebTransport session.
- {{domxref("WebTransport.createBidirectionalStream", "createBidirectionalStream()")}}
  - : Opens a bidirectional stream; returns a {{domxref("WebTransportBidirectionalStream")}} object containing `readable` and `writable` properties, which can be used to read from and write to the server.
- {{domxref("WebTransport.createUnidirectionalStream", "createUnidirectionalStream()")}}
  - : Opens a unidirectional stream; returns a {{domxref("WritableStream")}} object that can be used to write to the server.

## Examples

The following snippet shows how you'd connect to an HTTP/3 server by passing its URL to the {{domxref("WebTransport.WebTransport", "WebTransport()")}} constructor. Note that the scheme needs to be HTTPS, and the port number needs to be explicitly specified. Once the {{domxref("WebTransport.ready")}} promise fulfills, you can start using the connection.

Also note that you can respond to the connection closing by waiting for the {{domxref("WebTransport.closed")}} promise to fulfill. Errors returned by WebTransport operations are of type {{domxref("WebTransportError")}}, and contain additional data on top of the standard {{domxref("DOMException")}} set.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  // ...
}

// ...

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

For other example code, see the individual property and method pages.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://web.dev/webtransport/)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
