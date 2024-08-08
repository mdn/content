---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
page-type: javascript-instance-method
browser-compat: javascript.builtins.ArrayBuffer.slice
---

{{JSRef}}

The **`slice()`** method of {{jsxref("ArrayBuffer")}} instances returns a new `ArrayBuffer` whose contents are a copy of this `ArrayBuffer`'s bytes from `start`, inclusive, up to `end`, exclusive. If either `start` or `end` is negative, it refers to an index from the end of the array, as opposed to from the beginning.

{{EmbedInteractiveExample("pages/js/arraybuffer-slice.html")}}

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameters

- `start` {{optional_inline}}
  - : Zero-based index at which to start extraction, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Negative index counts back from the end of the buffer — if `-buffer.length <= start < 0`, `start + buffer.length` is used.
    - If `start < -buffer.length` or `start` is omitted, `0` is used.
    - If `start >= buffer.length`, an empty buffer is returned.
- `end` {{optional_inline}}
  - : Zero-based index at which to end extraction, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extracts up to but not including `end`.
    - Negative index counts back from the end of the buffer — if `-buffer.length <= end < 0`, `end + buffer.length` is used.
    - If `end < -buffer.length`, `0` is used.
    - If `end >= buffer.length` or `end` is omitted, `buffer.length` is used, causing all elements until the end to be extracted.
    - If `end` implies a position before or at the position that `start` implies, an empty buffer is returned.

### Return value

A new {{jsxref("ArrayBuffer")}} containing the extracted elements.

## Examples

### Copying an ArrayBuffer

```js
const buf1 = new ArrayBuffer(8);
const buf2 = buf1.slice(0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
