---
title: "WebTransport: createUnidirectionalStream() method"
short-title: createUnidirectionalStream()
slug: Web/API/WebTransport/createUnidirectionalStream
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.WebTransport.createUnidirectionalStream
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`createUnidirectionalStream()`** method of the {{domxref("WebTransport")}} interface opens a unidirectional stream; it returns a {{domxref("WritableStream")}} object that can be used to reliably write data to the server.

"Reliable" means that transmission and order of data are guaranteed. This provides slower delivery (albeit faster than with WebSockets) than {{domxref("WebTransport.datagrams", "datagrams")}}, but is needed in situations where reliability and ordering are important, like chat applications.

{{AvailableInWorkers}}

## Syntax

```js
createUnidirectionalStream();
```

### Parameters

None.

### Return value

A {{domxref("WritableStream")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if `createUnidirectionalStream()` is invoked while the WebTransport is closed or failed.

## Examples

Use the `createUnidirectionalStream()` method to get a reference to a {{domxref("WritableStream")}}. From this you can {{domxref("WritableStream.getWriter", "get a writer", "", "nocode")}} to allow data to be written to the stream and sent to the server.

Use the {{domxref("WritableStreamDefaultWriter.close", "close()")}} method of the resulting {{domxref("WritableStreamDefaultWriter")}} to close the associated HTTP/3 connection. The browser tries to send all pending data before actually closing the associated connection.

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

You can also use {{domxref("WritableStreamDefaultWriter.abort()")}} to abruptly terminate the stream. When using `abort()`, the browser may discard any pending data that hasn't yet been sent.

```js
// ...

const stream = await transport.createUnidirectionalStream();
const writer = ws.getWriter();

// ...

writer.write(...);
writer.write(...);
await writer.abort();
// Not all the data may have been written.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://web.dev/webtransport/)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
