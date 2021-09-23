---
title: TextEncoder
slug: Web/API/TextEncoder
tags:
  - API
  - Encoding
  - Experimental
  - Interface
  - Reference
  - TextEncoder
browser-compat: api.TextEncoder
---
{{APIRef("Encoding API")}}

The **`TextEncoder`** interface takes a stream of code points as input and emits a stream of UTF-8 bytes.

{{AvailableInWorkers}}

## Example

```js
const encoder = new TextEncoder()
const view = encoder.encode('€')
console.log(view); // Uint8Array(3) [226, 130, 172]
```

## Constructor

- {{DOMxRef("TextEncoder.TextEncoder", "TextEncoder()")}}
  - : Returns a newly constructed `TextEncoder` that will generate a byte stream with UTF-8 encoding.

## Properties

_The `TextEncoder` interface doesn't inherit any property._

- {{DOMxRef("TextEncoder.prototype.encoding")}}{{ReadOnlyInline}}
  - : Always returns "`utf-8`".

## Methods

_The `TextEncoder` interface doesn't inherit any method_.

- {{DOMxRef("TextEncoder.prototype.encode()")}}
  - : Takes a {{domxref("USVString")}} as input, and returns a {{jsxref("Uint8Array")}} containing UTF-8 encoded text.
- {{DOMxRef("TextEncoder.prototype.encodeInto()")}}
  - : Takes a {{domxref("USVString")}} to encode and a destination {{jsxref("Uint8Array")}} to put resulting UTF-8 encoded text into, and returns a dictionary object indicating the progress of the encoding. This is potentially more performant than the older `encode()` method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextDecoder")}} interface describing the inverse operation.
- [Node.js supports global export from v11.0.0](https://nodejs.org/api/util.html#util_class_util_textencoder)
