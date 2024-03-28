---
title: SharedArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
page-type: javascript-instance-method
browser-compat: javascript.builtins.SharedArrayBuffer.slice
---

{{JSRef}}

The **`slice()`** method of {{jsxref("SharedArrayBuffer")}} instances returns a new `SharedArrayBuffer` whose contents are a copy of this `SharedArrayBuffer`'s bytes from `start`, inclusive, up to `end`, exclusive. If either `start` or `end` is negative, it refers to an index from the end of the array, as opposed to from the beginning.

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-slice.html")}}

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
    - If `start >= buffer.length`, nothing is extracted.
- `end` {{optional_inline}}
  - : Zero-based index at which to end extraction, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extracts up to but not including `end`.
    - Negative index counts back from the end of the buffer — if `-buffer.length <= end < 0`, `end + buffer.length` is used.
    - If `end < -buffer.length`, `0` is used.
    - If `end >= buffer.length` or `end` is omitted, `buffer.length` is used, causing all elements until the end to be extracted.
    - If `end` implies a position before or at the position that `start` implies, nothing is extracted.

### Return value

A new {{jsxref("SharedArrayBuffer")}} containing the extracted elements.

## Examples

### Using slice()

```js
const sab = new SharedArrayBuffer(1024);
sab.slice(); // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2); // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2); // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.slice()")}}
