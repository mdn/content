---
title: TextEncoder
slug: Web/API/TextEncoder
page-type: web-api-interface
tags:
  - API
  - Encoding
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

- {{DOMxRef("TextEncoder.prototype.encoding")}} {{ReadOnlyInline}}
  - : Always returns "`utf-8`".

## Methods

_The `TextEncoder` interface doesn't inherit any method_.

- {{DOMxRef("TextEncoder.encode()")}}
  - : Takes a string as input, and returns a {{jsxref("Uint8Array")}} containing UTF-8 encoded text.
- {{DOMxRef("TextEncoder.encodeInto()")}}
  - : Takes a string to encode and a destination {{jsxref("Uint8Array")}} to put resulting UTF-8 encoded text into, and returns a dictionary object indicating the progress of the encoding. This is potentially more performant than the older `encode()` method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextDecoder")}} interface describing the inverse operation.
- [Node.js supports global export from v11.0.0](https://nodejs.org/api/util.html#util_class_util_textencoder)
