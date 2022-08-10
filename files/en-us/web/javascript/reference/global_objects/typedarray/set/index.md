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
set(array, targetOffset)

set(typedarray)
set(typedarray, targetOffset)
```

### Parameters

- `array`
  - : The array from which to copy values. All values from the source array are copied
    into the target array, unless the length of the source array plus the target offset exceeds
    the length of the target array, in which case an exception is thrown.
- `typedarray`
  - : If the source array is a typed array, the two arrays may share the same underlying
    {{jsxref("ArrayBuffer")}}; the JavaScript engine will intelligently
    **copy** the source range of the buffer to the destination range.
- `targetOffset` {{optional_inline}}
  - : The offset into the target array at which to begin writing values from the source
    array. If this value is omitted, 0 is assumed (that is, the source array will
    overwrite values in the target array starting at index 0).

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if one of the two conditions is met:
    - An element will be stored beyond the end of the typed array, either because `targetOffset` is too large or because `array` or `typedarray` is too large.
    - `targetOffset` is negative.

## Examples

### Using set()

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);

uint8.set([1, 2, 3], 3);

console.log(uint8); // Uint8Array [ 0, 0, 0, 1, 2, 3, 0, 0 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.set` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
