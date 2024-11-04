---
title: Uint8Array.setFromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromHex
page-type: javascript-instance-method
browser-compat: javascript.builtins.Uint8Array.setFromHex
---

{{JSRef}}

The **`setFromHex()`** method of {{jsxref("Uint8Array")}} instances populates this `Uint8Array` object with bytes from a hex-encoded string, returning an object indicating how many bytes were read and written.

This method parses the string into a byte array. To convert the string into a single number, use the {{jsxref("Global_Objects/parseInt", "parseInt()")}} function with `radix` set to `16` instead.

## Syntax

```js-nolint
setFromHex(string)
```

### Parameters

- `string`

  - : A hexadecimal string encoding bytes to write into a `Uint8Array`. The string must:

    - Have an even number of characters because two characters encode one byte.
    - Only contain characters in the hexadecimal alphabet, which includes 0–9 and A–F (case-insensitive).
    - Not contain whitespace (unlike {{jsxref("Uint8Array.prototype.setFromBase64()")}}).

    Note that the string is only read up to the point where the array is filled, so any invalid hex syntax after that point is ignored.

### Return value

An object containing the following properties:

- `read`
  - : The number of hex characters read from the input string. If the decoded data fits into the array, it is the length of the input string: otherwise, it is the number of complete hex characters that fit into the array.
- `written`
  - : The number of bytes written to the `Uint8Array`. Will never be greater than this `Uint8Array`'s {{jsxref("TypedArray/byteLength", "byteLength")}}.

### Exceptions

- {{jsxref("SyntaxError")}}
  - : Thrown if the input string contains characters outside the hex alphabet, or its length is odd.
- {{jsxref("TypeError")}}
  - : Thrown if the input string is not a string.

## Examples

### Decoding a hexadecimal string

This example decodes a hexadecimal string into an existing `Uint8Array`.

```js
const uint8Array = new Uint8Array(8);
const result = uint8Array.setFromHex("cafed00d");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(8) [202, 254, 208, 13, 0, 0, 0, 0]
```

### Decoding a big string into a small array

If the string contains more data than the array can hold, the method will only write as many bytes as the array can hold.

```js
const uint8Array = new Uint8Array(4);
const result = uint8Array.setFromHex("cafed00d-some random stuff");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(4) [202, 254, 208, 13]
```

Excess characters are ignored, even if they are invalid. However the total length of the input string must be even.

### Setting data at a specific offset

The `setFromHex()` method always starts writing at the beginning of the `Uint8Array`. If you want to write to the middle of the array, you can write to a {{jsxref("TypedArray.prototype.subarray()")}} instead.

```js
const uint8Array = new Uint8Array(8);
// Start writing at offset 2
const result = uint8Array.subarray(2).setFromHex("cafed00d");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array);
// Uint8Array(8) [0, 0, 202, 254, 208, 13, 0, 0]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Uint8Array.setFromHex` in `core-js`](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromHex()")}}
- {{jsxref("Uint8Array.prototype.toHex()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
