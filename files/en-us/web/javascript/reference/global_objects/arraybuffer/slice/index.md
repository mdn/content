---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
page-type: javascript-instance-method
browser-compat: javascript.builtins.ArrayBuffer.slice
---

{{JSRef}}

The **`slice()`** method returns a new `ArrayBuffer`
whose contents are a copy of this `ArrayBuffer`'s bytes from
`begin`, inclusive, up to `end`, exclusive.

{{EmbedInteractiveExample("pages/js/arraybuffer-slice.html")}}

## Syntax

```js-nolint
slice(begin)
slice(begin, end)
```

### Parameters

- `begin`
  - : Zero-based byte index at which to begin slicing.
- `end` {{optional_inline}}
  - : Byte index before which to end slicing. If end is unspecified, the new
    `ArrayBuffer` contains all bytes from begin to the end of this
    `ArrayBuffer`. If negative, it will make the Byte index begin from the last
    Byte.

### Return value

A new {{jsxref("ArrayBuffer")}} object.

## Description

The `slice()` method copies up to, but not including, the byte indicated by
the `end` parameter. If either `begin` or `end` is
negative, it refers to an index from the end of the array, as opposed to from the
beginning.

The range specified by the `begin` and `end` parameters is
clamped to the valid index range for the current array. If the computed length of the
new `ArrayBuffer` would be negative, it is clamped to zero.

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
