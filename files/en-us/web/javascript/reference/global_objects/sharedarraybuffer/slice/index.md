---
title: SharedArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
page-type: javascript-instance-method
browser-compat: javascript.builtins.SharedArrayBuffer.slice
---

{{JSRef}}

The **`slice()`** method of {{jsxref("SharedArrayBuffer")}} instances returns a
new {{jsxref("SharedArrayBuffer")}} whose contents are a copy of this
`SharedArrayBuffer`'s bytes from begin, inclusive, up to end, exclusive. If
either begin or end is negative, it refers to an index from the end of the array, as
opposed to from the beginning. This method has the same algorithm as
{{jsxref("Array.prototype.slice()")}}.

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-slice.html")}}

## Syntax

```js-nolint
slice()
slice(begin)
slice(begin, end)
```

### Parameters

- `begin` {{optional_inline}}

  - : Zero-based index at which to begin extraction.

    A negative index can be used, indicating an offset from the end of the sequence.
    `slice(-2)` extracts the last two elements in the sequence.

    If `begin` is undefined, `slice` begins from index
    `0`.

- `end` {{optional_inline}}

  - : Zero-based index _before_ which to end extraction. `slice`
    extracts up to but not including `end`.

    For example, `slice(1,4)` extracts the second element through the fourth
    element (elements indexed 1, 2, and 3).

    A negative index can be used, indicating an offset from the end of the sequence.
    `slice(2,-1)` extracts the third element through the second-to-last element
    in the sequence.

    If `end` is omitted, `slice` extracts through the
    end of the sequence (`sab.byteLength`).

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
- {{jsxref("Array.prototype.slice()")}}
