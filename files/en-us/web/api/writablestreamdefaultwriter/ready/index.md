---
title: WritableStreamDefaultWriter.ready
slug: Web/API/WritableStreamDefaultWriter/ready
tags:
  - API
  - Method
  - Ready
  - Reference
  - Streams
  - Streams API
  - WritableStream
  - WritableStreamDefaultWriter
browser-compat: api.WritableStreamDefaultWriter.ready
---
{{SeeCompatTable}}{{APIRef("Streams")}}

The **`ready`** read-only property of the
{{domxref("WritableStreamDefaultWriter")}} interface returns a {{jsxref("Promise")}}
that resolves when the desired size of the stream's internal queue transitions from
non-positive to positive, signaling that it is no longer applying backpressure.

## Syntax

```js
var promise = writableStreamDefaultWriter.ready;
```

### Value

A {{jsxref("Promise")}}.

## Example

The following example shows two uses of the `ready` property. The first uses
`ready` to ensure that the `WritableStream` is done writing and
thus able to receive data before sending a binary chunk. The second also checks whether
the `WritableStream` is done writing, but this time because the writing
must be finished before the writer can be closed.

```js
function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  var defaultWriter = writableStream.getWriter();
  var encoder = new TextEncoder();
  var encoded = encoder.encode(message, {stream: true});
  encoded.forEach(function(chunk) {
    // Make sure the stream and its writer are able to
    //   receive data.
    defaultWriter.ready
    .then(function() {
      defaultWriter.write(chunk)
      .then(function() {
        console.log("Chunk written to sink.);
      })
      .catch(function(err) {
        console.log("Chunk error: " + err);
      });
    });
    // Call ready again to ensure that all chunks are written
    //   before closing the writer.
    defaultWriter.ready
    .then(function() {
      defaultWriter.close()
      .then(function() {
        console.log("All chunks written");
      })
      .catch(function(err) {
        console.log("Stream error: " + err);
      });
    });
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
