---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.copyWithin
---
{{JSRef}}

The **`copyWithin()`** method shallow copies part of an array
to another location in the same array and returns it without modifying its length.

{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}

## Syntax

```js
copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)
```

### Parameters

- `target`

  - : Zero-based index at which to copy the sequence to. If negative, `target`
    will be counted from the end.

    If `target` is at or greater than `arr.length`, nothing will
    be copied. If `target` is positioned after `start`, the copied
    sequence will be trimmed to fit `arr.length`.

- `start` {{optional_inline}}

  - : Zero-based index at which to start copying elements from. If negative,
    `start` will be counted from the end.

    If `start` is omitted, `copyWithin` will copy from index
    `0`.

- `end` {{optional_inline}}

  - : Zero-based index at which to end copying elements from. `copyWithin`
    copies up to but not including `end`. If negative, `end` will be
    counted from the end.

    If `end` is omitted, `copyWithin` will copy until the last
    index (default to `arr.length`).

### Return value

The modified array.

## Description

The `copyWithin` works like C and C++'s `memmove`, and is a
high-performance method to shift the data of an {{jsxref("Array")}}. This especially
applies to the {{jsxref("TypedArray/copyWithin", "TypedArray")}} method of the same
name. The sequence is copied and pasted as one operation; pasted sequence will have the
copied values even when the copy and paste region overlap.

The `copyWithin` function is intentionally _generic_, it does not
require that its `this` value be an {{jsxref("Array")}} object.

The `copyWithin` method is a mutable method. It does not alter the length of
`this`, but it will change its content and create new properties, if
necessary.

## Examples

### Using copyWithin

```js
[1, 2, 3, 4, 5].copyWithin(-2)
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1)
// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3)
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5])

i32a.copyWithin(0, 2)
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Array.prototype.copyWithin` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [A
  polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
- {{jsxref("Array")}}
