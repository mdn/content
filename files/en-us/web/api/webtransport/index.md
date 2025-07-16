---
title: WebTransport
slug: Web/API/WebTransport
page-type: web-api-interface
browser-compat: api.WebTransport
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`WebTransport`** interface of the {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} provides functionality to enable a user agent to connect to an HTTP/3 server, initiate reliable and unreliable transport in either or both directions, and close the connection once it is no longer needed.

{{InheritanceDiagram}}

## Constructor

- {{domxref("WebTransport.WebTransport", "WebTransport()")}}
  - : Creates a new `WebTransport` object instance.

## Instance properties

- {{domxref("WebTransport.closed", "closed")}} {{ReadOnlyInline}}
  - : Returns a promise that resolves when the transport is closed.
- {{domxref("WebTransport.datagrams", "datagrams")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("WebTransportDatagramDuplexStream")}} instance that can be used to send and receive datagrams.
- {{domxref("WebTransport.congestionControl", "congestionControl")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string that indicates the application preference for either high throughput or low-latency when sending data.
- {{domxref("WebTransport.incomingBidirectionalStreams", "incomingBidirectionalStreams")}} {{ReadOnlyInline}}
  - : Represents one or more bidirectional streams opened by the server. Returns a {{domxref("ReadableStream")}} of {{domxref("WebTransportBidirectionalStream")}} objects. Each one can be used to read data from the server and write data back to it.
- {{domxref("WebTransport.incomingUnidirectionalStreams", "incomingUnidirectionalStreams")}} {{ReadOnlyInline}}
  - : Represents one or more unidirectional streams opened by the server. Returns a {{domxref("ReadableStream")}} of {{domxref("WebTransportReceiveStream")}} objects. Each one can be used to read data from the server.
- {{domxref("WebTransport.ready", "ready")}} {{ReadOnlyInline}}
  - : Returns a promise that resolves when the transport is ready to use.
- {{domxref("WebTransport.reliability", "reliability")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string that indicates whether the connection supports reliable transports only, or whether it also supports unreliable transports (such as UDP).

## Instance methods

- {{domxref("WebTransport.close", "close()")}}
  - : Closes an ongoing WebTransport session.
- {{domxref("WebTransport.createBidirectionalStream", "createBidirectionalStream()")}}
  - : Asynchronously opens a bidirectional stream ({{domxref("WebTransportBidirectionalStream")}}) that can be used to read from and write to the server.
- {{domxref("WebTransport.createUnidirectionalStream", "createUnidirectionalStream()")}}
  - : Asynchronously opens a unidirectional stream ({{domxref("WritableStream")}}) that can be used to write to the server.
- {{domxref("WebTransport.getStats", "getStats()")}} {{Experimental_Inline}}
  - : Asynchronously returns a {{jsxref("Promise")}} that fulfills with an object containing HTTP/3 connection statistics.

## Examples

The example code below shows how you'd connect to an HTTP/3 server by passing its URL to the {{domxref("WebTransport.WebTransport", "WebTransport()")}} constructor.
Note that the scheme needs to be HTTPS, and the port number needs to be explicitly specified.
Once the {{domxref("WebTransport.ready")}} promise fulfills, you can start using the connection.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

You can respond to the connection closing by waiting for the {{domxref("WebTransport.closed")}} promise to fulfill.
Errors returned by `WebTransport` operations are of type {{domxref("WebTransportError")}}, and contain additional data on top of the standard {{domxref("DOMException")}} set.

The `closeTransport()` method below shows a possible implementation.
Within a `try...catch` block it uses `await` to wait for the `closed` promise to fulfill or reject, and then reports whether or not the connection closed intentionally or due to error.

```js
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

We might call the asynchronous functions above in their own asynchronous function, as shown below.

```js
// Use the transport
async function useTransport(url) {
  const transport = await initTransport(url);

  // Use the transport object to send and receive data
  // …

  // When done, close the transport
  await closeTransport(transport);
}

const url = "https://example.com:4999/wt";
useTransport(url);
```

For other example code, see the individual property and method pages.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
