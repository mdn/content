---
title: TypedArray.prototype.toReversed()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.toReversed
---

{{JSRef}}

The **`toReversed()`** method is the [copying](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) counterpart of the {{jsxref("TypedArray/reverse", "reverse()")}} method. It returns a new array with the elements in reversed order. This method has the same algorithm as {{jsxref("Array.prototype.reverse()")}}. _TypedArray_ is one of the [typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

## Syntax

```js-nolint
reverse()
```

### Return value

A new typed array containing the elements in reversed order.

## Examples

### Using toReversed()

```js
const uint8 = new Uint8Array([1, 2, 3]);
const reversedUint8 = uint8.toReversed();
console.log(reversedUint8); // Uint8Array [3, 2, 1]
console.log(uint8); // Uint8Array [1, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.toReversed` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("TypedArray.prototype.with()")}}
