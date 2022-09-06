---
title: TransformStreamDefaultController
slug: Web/API/TransformStreamDefaultController
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - TransformStreamDefaultController
browser-compat: api.TransformStreamDefaultController
---
{{DefaultAPISidebar("Streams API")}}

The **`TransformStreamDefaultController`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) provides methods to manipulate the associated {{domxref("ReadableStream")}} and {{domxref("WritableStream")}}.

When constructing a {{domxref("TransformStream")}}, the `TransformStreamDefaultController` is created. It therefore has no constructor. The way to get an instance of `TransformStreamDefaultController` is via the callback methods of {{domxref("TransformStream.TransformStream", "TransformStream()")}}.

## Properties

- {{domxref("TransformStreamDefaultController.desiredSize")}} {{ReadOnlyInline}}
  - : Returns the desired size to fill the readable side of the stream's internal queue.

## Methods

- {{domxref("TransformStreamDefaultController.enqueue()")}}
  - : Enqueues a chunk (single piece of data) in the readable side of the stream.
- {{domxref("TransformStreamDefaultController.error()")}}
  - : Errors both the readable and writable side of the transform stream.
- {{domxref("TransformStreamDefaultController.terminate()")}}
  - : Closes the readable side and errors the writable side of the stream.

## Examples

In the following example, a transform stream passes through all chunks it receives as {{jsxref("Uint8Array")}} values, using the {{domxref("TransformStreamDefaultController.error()","error()")}} and {{domxref("TransformStreamDefaultController.enqueue()","enqueue()")}} methods.

```js
const transformContent = {
  start() {}, // required.
  async transform(chunk, controller) {
    chunk = await chunk;
    switch (typeof chunk) {
      case 'object':
        // just say the stream is done I guess
        if (chunk === null) {
          controller.terminate();
        } else if (ArrayBuffer.isView(chunk)) {
          controller.enqueue(new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength));
        } else if (
          Array.isArray(chunk) &&
          chunk.every((value) => typeof value === 'number')
        ) {
          controller.enqueue(new Uint8Array(chunk));
        } else if (
          typeof chunk.valueOf === 'function' &&
          chunk.valueOf() !== chunk
        ) {
          this.transform(chunk.valueOf(), controller); // hack
        } else if ('toJSON' in chunk) {
          this.transform(JSON.stringify(chunk), controller);
        }
        break;
      case 'symbol':
        controller.error("Cannot send a symbol as a chunk part")
        break
      case 'undefined':
        controller.error("Cannot send undefined as a chunk part")
        break
      default:
        controller.enqueue(this.textencoder.encode(String(chunk)))
        break
    }
  },
  flush() { /* do any destructor work here */ }
}

class AnyToU8Stream extends TransformStream {
  constructor() {
    super({...transformContent, textencoder: new TextEncoder()})
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
