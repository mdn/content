---
title: Uint8Array.prototype.toBase64()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/toBase64
page-type: javascript-instance-method
browser-compat: javascript.builtins.Uint8Array.toBase64
---

{{JSRef}}

The **`toBase64()`** method of {{jsxref("Uint8Array")}} instances returns a [base64](/en-US/docs/Glossary/Base64)-encoded string based on the data in this `Uint8Array` object.

This method should be preferred over {{domxref("Window.btoa()")}}, especially if you already have a `Uint8Array` holding the object, because you don't need to convert it to a string first.

## Syntax

```js-nolint
toBase64()
toBase64(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object customizing the base64 string format. It can contain the following properties:
    - `alphabet` {{optional_inline}}
      - : A string specifying the base64 alphabet to use. It can be one of the following:
        - `"base64"` (default)
          - : Encode input with the standard base64 alphabet, which uses `+` and `/`.
        - `"base64url"`
          - : Encode input with the URL-safe base64 alphabet, which uses `-` and `_`.
    - `omitPadding` {{optional_inline}}
      - : A boolean specifying whether to omit padding characters (`=`) at the end of the base64 string. The default is `false`.

### Return value

A base64-encoded string representing the data in the `Uint8Array`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown in one of the following cases:
    - The `options` object is not an object or `undefined`.
    - The `options.alphabet` is not of the expected values or `undefined`.

## Examples

### Encoding binary data

This example uses the default `alphabet` and `omitPadding` options to encode data from a `Uint8Array` into a base64 string.

```js
const uint8Array = new Uint8Array([29, 233, 101, 161]);
console.log(uint8Array.toBase64()); // "HelloQ=="
```

### Encoding data without padding

```js
const uint8Array = new Uint8Array([29, 233, 101, 161]);
console.log(uint8Array.toBase64({ omitPadding: true })); // "HelloQ"
```

### Encoding data with URL-safe alphabet

This example populates a {{domxref("URLSearchParams")}} object with a base64-encoded string using the URL-safe alphabet.

```js
const uint8Array = new Uint8Array([46, 139, 222, 255, 42, 46]);
const base64 = uint8Array.toBase64({ alphabet: "base64url" });
const params = new URLSearchParams();
params.set("data", base64);
console.log(params.toString()); // "data=Love_you"
```

### Stream encoding

This example is adapted from the [original proposal](https://github.com/tc39/proposal-arraybuffer-base64/blob/main/stream.mjs), showcasing how to implement streaming in userland. It mimics the {{domxref("TextEncoder")}} API with the `stream` option.

```js
class Base64Encoder {
  #extra;
  #extraLength;
  constructor() {
    this.#extra = new Uint8Array(3);
    this.#extraLength = 0;
  }

  // Partly derived from https://github.com/lucacasonato/base64_streams/blob/main/src/iterator/encoder.ts
  encode(chunk = Uint8Array.of(), options = {}) {
    const stream = options.stream ?? false;

    if (this.#extraLength > 0) {
      const bytesNeeded = 3 - this.#extraLength;
      const bytesAvailable = Math.min(bytesNeeded, chunk.length);
      this.#extra.set(chunk.subarray(0, bytesAvailable), this.#extraLength);
      chunk = chunk.subarray(bytesAvailable);
      this.#extraLength += bytesAvailable;
    }

    if (!stream) {
      // assert: this.#extraLength.length === 0 || this.#extraLength === 3 || chunk.length === 0
      const prefix = this.#extra.subarray(0, this.#extraLength).toBase64();
      this.#extraLength = 0;
      return prefix + chunk.toBase64();
    }

    let extraReturn = "";

    if (this.#extraLength === 3) {
      extraReturn = this.#extra.toBase64();
      this.#extraLength = 0;
    }

    const remainder = chunk.length % 3;
    if (remainder > 0) {
      this.#extra.set(chunk.subarray(chunk.length - remainder));
      this.#extraLength = remainder;
      chunk = chunk.subarray(0, chunk.length - remainder);
    }

    return extraReturn + chunk.toBase64();
  }
}

const encoder = new Base64Encoder();

console.log(
  encoder.encode(Uint8Array.of(72, 101, 108, 108, 111), { stream: true }),
);
// "SGVs"
console.log(
  encoder.encode(Uint8Array.of(32, 87, 111, 114, 108, 100), { stream: true }),
);
// "bG8gV29y"
console.log(encoder.encode());
// "bGQ="
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Uint8Array.toBase64` in `core-js`](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromBase64()")}}
- {{jsxref("Uint8Array.prototype.setFromBase64()")}}
- {{domxref("Window.btoa()")}}
