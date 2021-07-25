---
title: TypedArray.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/set
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - TypedArray
  - Polyfill
browser-compat: javascript.builtins.TypedArray.set
---
{{JSRef}}

The **`set()`** method stores multiple values in the typed
array, reading input values from a specified array.

{{EmbedInteractiveExample("pages/js/typedarray-set.html")}}

## Syntax

```js
set(array)
set(array, offset)

set(typedarray)
set(typedarray, offset)
```

### Parameters

- `array`
  - : The array from which to copy values. All values from the source array are copied
    into the target array, unless the length of the source array plus the offset exceeds
    the length of the target array, in which case an exception is thrown.
- `typedarray`
  - : If the source array is a typed array, the two arrays may share the same underlying
    {{jsxref("ArrayBuffer")}}; the JavaScript engine will intelligently
    **copy** the source range of the buffer to the destination range.
- `offset` {{optional_inline}}
  - : The offset into the target array at which to begin writing values from the source
    array. If this value is omitted, 0 is assumed (that is, the source array will
    overwrite values in the target array starting at index 0).

### Exceptions

A {{jsxref("RangeError")}}, if the `offset` is set such as it would store
beyond the end of the typed array.

## Examples

### Using set()

```js
var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);

uint8.set([1, 2, 3], 3);

console.log(uint8); // Uint8Array [ 0, 0, 0, 1, 2, 3, 0, 0 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `TypedArray.prototype.set` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
