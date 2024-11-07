---
title: Uint8Array.fromBase64()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64
page-type: javascript-static-method
browser-compat: javascript.builtins.Uint8Array.fromBase64
---

{{JSRef}}

The **`Uint8Array.fromBase64()`** static method creates a new {{jsxref("Uint8Array")}} object from a [base64](/en-US/docs/Glossary/Base64)-encoded string.

This method should be preferred over {{domxref("Window.atob()")}} because it results in a byte array, which is easier to work with than a string containing raw bytes, unless your decoded binary data is actually intended to be ASCII text. If you already have an array buffer allocated and you want to populate it, use the instance method {{jsxref("Uint8Array.prototype.setFromBase64()")}} instead.

## Syntax

```js-nolint
Uint8Array.fromBase64(string)
Uint8Array.fromBase64(string, options)
```

### Parameters

- `string`
  - : A base64 string encoding bytes to convert to a `Uint8Array`. The string must only contain characters in the base64 alphabet, which includes A–Z, a–z, 0–9, and two special characters, which are either `+` and `/` (if using `alphabet: "base64"` in `options`) or `-` and `_` (if using `alphabet: "base64url"` in `options`). It may have padding `=` characters at the end. Any ASCII white space characters within the string are ignored.
- `options` {{optional_inline}}
  - : An object customizing the base64 string interpretation process. It can contain the following properties:
    - `alphabet` {{optional_inline}}
      - : A string specifying the base64 alphabet to use. It can be one of the following:
        - `"base64"` (default)
          - : Accept input encoded with the standard base64 alphabet, which uses `+` and `/`.
        - `"base64url"`
          - : Accept input encoded with the URL-safe base64 alphabet, which uses `-` and `_`.
    - `lastChunkHandling` {{optional_inline}}
      - : A string specifying how to handle the last chunk of the base64 string. Because every 4 characters in base64 encodes 3 bytes, the string is separated into chunks of 4 characters. If the last chunk has fewer than 4 characters, it needs to be handled differently. It can be one of the following:
        - `"loose"` (default)
          - : The last chunk can either be 2 or 3 base64 characters, or exactly 4 characters long with padding `=` characters. The last chunk is decoded and appended to the result.
        - `"strict"`
          - : The last chunk must be exactly 4 characters long with padding `=` characters. Furthermore, [overflow bits](/en-US/docs/Glossary/Base64#last_chunk) (trailing bits from the last base64 character that don't represent any data) must be 0. The last chunk is decoded and appended to the result.
        - `"stop-before-partial"`
          - : If the last chunk is exactly 4 characters long with padding `=` characters, then it's decoded and appended to the result. Otherwise, the last partial chunk is ignored (but if it contains one base64 character followed by `=`, then a syntax error is still thrown). This is useful if the string is coming from a stream and the last chunk is not yet complete. To know how many characters of the input were read, use {{jsxref("Uint8Array.prototype.setFromBase64()")}} instead (the linked page also contains an example of stream decoding using `"stop-before-partial"`).

### Return value

A new `Uint8Array` object containing the decoded bytes from the base64-encoded string.

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

This example uses the default `alphabet` and `lastChunkHandling` options to decode a base64 string. Note that:

- The whitespace in the space is ignored.
- The string has 14 base64 characters, not a multiple of 4. This is only valid and decodable with `lastChunkHandling: "loose"`.
- The last chunk, `Ph`, ends in the character `h` which is `0b100001` in base64, so the last `0001` bits are "overflow bits" and are ignored. This is only valid and decodable with `lastChunkHandling: "loose"`.

```js
const uint8Array = Uint8Array.fromBase64("PGI+ TURO PC9i Ph");
console.log(uint8Array); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]
```

### Decoding a URL-safe base64 string

This example uses the `alphabet` option to decode a URL-safe base64 string.

```js
const uint8Array = Uint8Array.fromBase64("PGI-TUROPC9iPg", {
  alphabet: "base64url",
});
console.log(uint8Array); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]
```

### Decoding a base64 string with strict last chunk handling

This example uses the `lastChunkHandling` option to decode a base64 string, where the last chunk must be exactly 4 characters long with padding `=` characters, and the overflow bits must be 0.

```js
const array1 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg==", {
  lastChunkHandling: "strict",
});
console.log(array1); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]

const array2 = Uint8Array.fromBase64("PGI+ TURO PC9i Ph==", {
  lastChunkHandling: "strict",
});
// Throws a SyntaxError because h is 0b100001, where the last 4 bits are not 0

const array3 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg", {
  lastChunkHandling: "strict",
});
// Throws a SyntaxError because the last chunk is not exactly 4 characters long
```

### Decoding a base64 string with partial last chunk handling

This example uses the `lastChunkHandling` option to decode a base64 string, ignoring any partial last chunk.

```js
// The last chunk is complete
const array1 = Uint8Array.fromBase64("PGI+ TURO PC9i", {
  lastChunkHandling: "stop-before-partial",
});
console.log(array1); // Uint8Array(9) [60, 98, 62, 77, 68, 78, 60, 47, 98]

// The last chunk is also complete with padding
const array2 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg==", {
  lastChunkHandling: "stop-before-partial",
});
console.log(array2); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]

// The last chunk is partial; it's ignored
const array3 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg", {
  lastChunkHandling: "stop-before-partial",
});
console.log(array3); // Uint8Array(9) [60, 98, 62, 77, 68, 78, 60, 47, 98]

// The last chunk is partial with padding; it's still ignored
const array4 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg=", {
  lastChunkHandling: "stop-before-partial",
});
console.log(array4); // Uint8Array(9) [60, 98, 62, 77, 68, 78, 60, 47, 98]

// The last chunk is partial, but it contains one base64 character followed by `=`
const array5 = Uint8Array.fromBase64("PGI+ TURO PC9i P=", {
  lastChunkHandling: "stop-before-partial",
});
// Throws a SyntaxError because this cannot possibly be part of a valid base64 string
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Uint8Array.fromBase64` in `core-js`](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.prototype.setFromBase64()")}}
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- {{domxref("Window.atob()")}}
