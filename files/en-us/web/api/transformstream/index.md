---
title: TransformStream
slug: Web/API/TransformStream
page-type: web-api-interface
browser-compat: api.TransformStream
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

The **`TransformStream`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a concrete implementation of the [pipe chain](/en-US/docs/Web/API/Streams_API/Concepts#pipe_chains) _transform stream_ concept.

It may be passed to the {{domxref("ReadableStream.pipeThrough()")}} method in order to transform a stream of data from one format into another.
For example, it might be used to decode (or encode) video frames, decompress data, or convert the stream from XML to JSON.

A transformation algorithm may be provided as an optional argument to the object constructor.
If not supplied, data is not modified when piped through the stream.

`TransformStream` is a [transferable object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

## Constructor

- {{domxref("TransformStream.TransformStream", "TransformStream()")}}
  - : Creates and returns a transform stream object, optionally specifying a transformation object and queuing strategies for the streams.

## Instance properties

- {{domxref("TransformStream.readable")}} {{ReadOnlyInline}}
  - : The `readable` end of a `TransformStream`.
- {{domxref("TransformStream.writable")}} {{ReadOnlyInline}}
  - : The `writable` end of a `TransformStream`.

## Instance methods

None

## Examples

### Anything-to-uint8array stream

In the following example, a transform stream passes through all chunks it receives as {{jsxref("Uint8Array")}} values.

```js
const transformContent = {
  start() {}, // required.
  async transform(chunk, controller) {
    chunk = await chunk;
    switch (typeof chunk) {
      case "object":
        // just say the stream is done I guess
        if (chunk === null) {
          controller.terminate();
        } else if (ArrayBuffer.isView(chunk)) {
          controller.enqueue(
            new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength),
          );
        } else if (
          Array.isArray(chunk) &&
          chunk.every((value) => typeof value === "number")
        ) {
          controller.enqueue(new Uint8Array(chunk));
        } else if (
          typeof chunk.valueOf === "function" &&
          chunk.valueOf() !== chunk
        ) {
          this.transform(chunk.valueOf(), controller); // hack
        } else if ("toJSON" in chunk) {
          this.transform(JSON.stringify(chunk), controller);
        }
        break;
      case "symbol":
        controller.error("Cannot send a symbol as a chunk part");
        break;
      case "undefined":
        controller.error("Cannot send undefined as a chunk part");
        break;
      default:
        controller.enqueue(this.textencoder.encode(String(chunk)));
        break;
    }
  },
  flush() {
    /* do any destructor work here */
  },
};

class AnyToU8Stream extends TransformStream {
  constructor() {
    super({ ...transformContent, textencoder: new TextEncoder() });
  }
}
```

### Chaining multiple ReadableStreams together

This is a useful one, where multiple streams can be conjoined. Examples include building a PWA with progressive loading and progressive streaming.

```js
let responses = [
  /* conjoined response tree */
];
let { readable, writable } = new TransformStream();

responses.reduce(
  (a, res, i, arr) =>
    a.then(() => res.pipeTo(writable, { preventClose: i + 1 !== arr.length })),
  Promise.resolve(),
);
```

Note that this is not resilient to other influences.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), for a basic visualization of readable, writable, and transform streams.
- [Streams—The Definitive Guide](https://web.dev/articles/streams)
