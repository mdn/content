---
title: "WebTransportSendStream: getWriter() method"
short-title: getWriter()
slug: Web/API/WebTransportSendStream/getWriter
page-type: web-api-instance-method
browser-compat: api.WebTransportSendStream.getWriter
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`getWriter()`** method of the {{domxref("WebTransportSendStream")}} interface returns a new `WebTransportWriter` object and locks the stream to that instance. While the stream is locked, no other writer can be acquired until this one is released.

`WebTransportWriter` is a subclass of {{domxref("WritableStreamDefaultWriter")}} that additionally provides the `atomicWrite()` and `commit()` methods.

## Syntax

```js-nolint
getWriter()
```

### Parameters

None.

### Return value

A `WebTransportWriter` object instance.

### Exceptions

- {{jsxref("TypeError")}}
  - : The stream is already locked to another writer.

## Examples

The following example shows how to open a unidirectional stream over a {{domxref("WebTransport")}} connection and use `getWriter()` to write chunks of data to it.

```js
const transport = new WebTransport("https://example.com/webtransport");
await transport.ready;

const stream = await transport.createUnidirectionalStream();
const writer = stream.getWriter();

const encoder = new TextEncoder();
await writer.write(encoder.encode("Hello"));
await writer.write(encoder.encode(", world!"));
await writer.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WritableStream.getWriter()")}}
- {{domxref("WritableStreamDefaultWriter")}}
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
