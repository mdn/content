---
title: TransformStream
slug: Web/API/TransformStream
tags:
  - Streams API
browser-compat: api.TransformStream
---
{{APIRef("Streams")}}

The `TransformStream` interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a set of transformable data.

## Constructor

- {{domxref("TransformStream.TransformStream", "TransformStream()")}}
  - : Creates and returns a transform stream object from the given handlers.

## Properties

- {{domxref("TransformStream.readable")}} {{readonlyInline}}
  - : The `readable` end of a TransformStream.
- {{domxref("TransformStream.writable")}} {{readonlyInline}}
  - : The `writable` end of a TransformStream.

## Methods

None

## Examples

### Anything-to-uint8array stream

In the following example, a transform stream passes through all chunks it receives as {{jsxref("Uint8Array")}} values.

```js
const transformContent = {
  start() {}, // required.
  async transform(chunk, controller) {
    chunk = await chunk
    switch (typeof chunk) {
      case 'object':
        // just say the stream is done I guess
        if (chunk === null) controller.terminate()
        else if (ArrayBuffer.isView(chunk))
          controller.enqueue(new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength))
        else if (Array.isArray(chunk) && chunk.every(value => typeof value === 'number'))
          controller.enqueue(new Uint8Array(chunk))
        else if ('function' === typeof chunk.valueOf && chunk.valueOf() !== chunk)
          this.transform(chunk.valueOf(), controller) // hack
        else if ('toJSON' in chunk) this.transform(JSON.stringify(chunk), controller)
        break
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

### Polyfilling TextEncoderStream and TextDecoderStream

Note that this is deprecated by the native constructors. This is intended as a polyfill for unsupported platforms.

```js
const tes = {
  start(){this.encoder = new TextEncoder()},
  transform(chunk, controller) {
    controller.enqueue(this.encoder.encode(chunk))
  }
}

let _jstes_wm = new WeakMap(); /* info holder */
class JSTextEncoderStream extends TransformStream {
  constructor() {
    let t = {...tes}

    super(t)
    _jstes_wm.set(this, t)
  }
  get encoding() {return _jstes_wm.get(this).encoder.encoding}
}
```

Similarly, `TextDecoderStream` can be written as such:

```js
const tds = {
  start(){
    this.decoder = new TextDecoder(this.encoding, this.options)
  },
  transform(chunk, controller) {
    controller.enqueue(this.decoder.decode(chunk, { stream: true }))
  }
}

let _jstds_wm = new WeakMap(); /* info holder */
class JSTextDecoderStream extends TransformStream {
  constructor(encoding = 'utf-8', {...options} = {}) {
    let t = {...tds, encoding, options}

    super(t)
    _jstds_wm.set(this, t)
  }
  get encoding() {return _jstds_wm.get(this).decoder.encoding}
  get fatal() {return _jstds_wm.get(this).decoder.fatal}
  get ignoreBOM() {return _jstds_wm.get(this).decoder.ignoreBOM}
}
```

### Chaining multiple ReadableStreams together

This is a useful one, where multiple streams can be conjoined. Examples include building a PWA with progressive loading and progressive streaming.

```js
let responses = [ /* conjoined response tree */ ]
let {readable, writable} = new TransformStream

responses.reduce(
  (a, res, i, arr) => a.then(() => res.pipeTo(writable, {preventClose: (i+1) !== arr.length})),
  Promise.resolve()
)
```

Note that this is not resilient to other influences.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WHATWG Stream Visualiser](https://whatwg-stream-visualizer.glitch.me/), for a basic visualisation of readable, writable, and transform streams.
- [Streams—The Definitive Guide](https://web.dev/streams/)
