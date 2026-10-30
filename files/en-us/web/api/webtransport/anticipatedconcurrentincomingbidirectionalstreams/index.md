---
title: "WebTransport: anticipatedConcurrentIncomingBidirectionalStreams property"
short-title: anticipatedConcurrentIncomingBidirectionalStreams
slug: Web/API/WebTransport/anticipatedConcurrentIncomingBidirectionalStreams
page-type: web-api-instance-property
browser-compat: api.WebTransport.anticipatedConcurrentIncomingBidirectionalStreams
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`anticipatedConcurrentIncomingBidirectionalStreams`** property of the {{domxref("WebTransport")}} interface represents the number of incoming bidirectional streams that the application expects the server to have open at the same time.

## Value

An integer between `0` and `65535`, or `null`.

The initial value comes from the [`anticipatedConcurrentIncomingBidirectionalStreams`](/en-US/docs/Web/API/WebTransport/WebTransport#anticipatedconcurrentincomingbidirectionalstreams) option of the {{domxref("WebTransport.WebTransport", "WebTransport()")}} constructor, and is `null` if that option isn't set.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the property is set to a value outside the range `0` to `65535`.

## Description

A server can open only as many bidirectional streams as the browser allows.
At the start of a session, the browser always allows the server to open at least 100 bidirectional streams.

Some applications expect the server to have more streams than that open at the same time, for example when the server sends each request to the client on its own stream.
Setting this property tells the browser how many streams to expect, so that it can raise its limit in advance.
This avoids delays when the server opens many streams at once, because the server doesn't have to wait for the browser to allow more streams.
The value is a hint, and setting it doesn't guarantee that the server can open that many streams.

A value of `null` means that the application gives no hint, and the browser uses its default limit.
A value below 100, including `0`, doesn't reduce the number of streams that the server can initially open.

You can also set the property after the transport is created.
The browser can take the new value into account in its later negotiations with the server.

## Examples

### Anticipating many streams when connecting

This example creates two transports.
The first doesn't set the `anticipatedConcurrentIncomingBidirectionalStreams` option, so the property is `null`.

```js
const url = "https://example.com:4999/wt";

const transport = new WebTransport(url);
console.log(transport.anticipatedConcurrentIncomingBidirectionalStreams); // null
```

This example sets the option to `300`, which tells the browser that the application expects the server to have up to 300 bidirectional streams open at once.

```js
const busyTransport = new WebTransport(url, {
  anticipatedConcurrentIncomingBidirectionalStreams: 300,
});
console.log(busyTransport.anticipatedConcurrentIncomingBidirectionalStreams); // 300
```

### Changing the anticipated number of streams

This example raises the anticipated number of streams after the session is ready.
An application might do this when it learns that the server will send more streams than it first expected.

```js
const transport = new WebTransport("https://example.com:4999/wt", {
  anticipatedConcurrentIncomingBidirectionalStreams: 300,
});
await transport.ready;

// The application now expects the server to open more streams
transport.anticipatedConcurrentIncomingBidirectionalStreams = 600;
console.log(transport.anticipatedConcurrentIncomingBidirectionalStreams); // 600
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebTransport.incomingBidirectionalStreams")}}
- {{domxref("WebTransport.anticipatedConcurrentIncomingUnidirectionalStreams")}}
- {{domxref("WebTransport.WebTransport", "WebTransport()")}} constructor
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
