---
title: Uint8Array.prototype.setFromBase64()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromBase64
page-type: javascript-instance-method
browser-compat: javascript.builtins.Uint8Array.setFromBase64
---

{{JSRef}}

The **`setFromBase64()`** method of {{jsxref("Uint8Array")}} instances populates this `Uint8Array` object with bytes from a [base64](/en-US/docs/Glossary/Base64)-encoded string, returning an object indicating how many bytes were read and written.

This method is most suitable for populating a pre-allocated array buffer. If you just want to create a new `Uint8Array` object from a base64-encoded string, use the static method {{jsxref("Uint8Array.fromBase64()")}} instead.

## Syntax

```js-nolint
setFromBase64(string)
setFromBase64(string, options)
```

### Parameters

- `string`
  - : A base64 string encoding bytes to write into a `Uint8Array`. It has the same requirements as the [`string` parameter of `Uint8Array.fromBase64()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64#string). Note that the string is only read up to the point where the array is filled, so any invalid base64 syntax after that point is ignored.
- `options` {{optional_inline}}
  - : An object customizing the base64 string interpretation process. It has the same requirements as the [`options` parameter of `Uint8Array.fromBase64()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64#options).

### Return value

An object containing the following properties:

- `read`
  - : The number of base64 characters read from the input string. If the decoded data fits into the array, this is the length of the input string (including padding); otherwise, it is the length up to the last complete 4-character chunk that fits into the array. Chunks will never be split (because the remaining bits cannot be partially "put back" into the base64 without completely re-encoding it); if the next chunk cannot fit into the remainder of the array, it will be entirely unread, resulting in the last one or two bytes of the array not being written.
- `written`
  - : The number of bytes written to the `Uint8Array`. Will never be greater than this `Uint8Array`'s {{jsxref("TypedArray/byteLength", "byteLength")}}.

### Exceptions

- {{jsxref("SyntaxError")}}
  - : Thrown if the input string contains characters outside the specified alphabet, or if the last chunk does not satisfy the `lastChunkHandling` option.
- {{jsxref("TypeError")}}
  - : Thrown in one of the following cases:
    - The input string is not a string.
    - The `options` object is not an object or `undefined`.
    - The options are not of the expected values or `undefined`.

## Examples

### Decoding a base64 string

This example uses the default `alphabet` and `lastChunkHandling` options to decode a base64 string into an existing `Uint8Array`.

```js
const uint8Array = new Uint8Array(16);
const result = uint8Array.setFromBase64("PGI+ TURO PC9i Pg==");
console.log(result); // { read: 19, written: 10 }
console.log(uint8Array);
// Uint8Array(16) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62, 0, 0, 0, 0, 0, 0]
```

### Decoding a big string into a small array

If the string contains more data than the array can hold, the method will only write as many bytes as the array can hold, without discarding any bits.

```js
const uint8Array = new Uint8Array(8);
const result = uint8Array.setFromBase64("PGI+ TURO PC9i Pg==");
console.log(result); // { read: 9, written: 6 }
console.log(uint8Array);
// Uint8Array(8) [60, 98, 62, 77, 68, 78, 0, 0]
```

Note how the last two bytes of the array are not written. To decode these two bytes, we need to read at least three more base64 characters, which represent 18 bits. These can't fit into the remaining two bytes of the array, so we can only write 2 chunks, or 6 bytes.

### Setting data at a specific offset

The `setFromBase64()` method always starts writing at the beginning of the `Uint8Array`. If you want to write to the middle of the array, you can write to a {{jsxref("TypedArray.prototype.subarray()")}} instead.

```js
const uint8Array = new Uint8Array(16);
// Start writing at offset 2
const result = uint8Array.subarray(2).setFromBase64("PGI+ TURO PC9i Pg==");
console.log(result); // { read: 19, written: 10 }
console.log(uint8Array);
// Uint8Array(16) [0, 0, 60, 98, 62, 77, 68, 78, 60, 47, 98, 62, 0, 0, 0, 0]
```

### Stream decoding

This example is adapted from the [original proposal](https://github.com/tc39/proposal-arraybuffer-base64/blob/main/stream.mjs). It mimics the {{domxref("TextDecoder")}} API with the `stream` option. Note the use of `lastChunkHandling: "stop-before-partial"` to handle incomplete chunks.

```js
class Base64Decoder {
  #extra = "";

  decode(chunk = "", options = {}) {
    const opts = { ...options };
    // match TextEncoder API
    if (opts.stream) {
      opts.lastChunkHandling = "stop-before-partial";
    }
    chunk = this.#extra + chunk;
    this.#extra = "";
    // For simplicity, allocate new memory every time
    // the calculation below is guaranteed to be enough,
    // but may be too much if there is whitespace
    // if you're really concerned about memory, a TextDecoder style API is a bad choice
    let buffer = new Uint8Array(Math.ceil((chunk.length * 3) / 4));
    const { read, written } = buffer.setFromBase64(chunk, opts);
    buffer = buffer.subarray(0, written);
    this.#extra = chunk.slice(read);
    return buffer;
  }
}

const decoder = new Base64Decoder();

console.log(decoder.decode("SG Vsb ", { stream: true }));
// Uint8Array(3) [72, 101, 108]
console.log(decoder.decode("G8gV29ybGR ", { stream: true }));
// Uint8Array(6) [108, 111, 32, 87, 111, 114]
console.log(decoder.decode(""));
// Uint8Array(2) [108, 100]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Uint8Array.setFromBase64` in `core-js`](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromBase64()")}}
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- {{domxref("Window.atob()")}}
