---
title: TypedArray.prototype.toReversed()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.toReversed
---

{{JSRef}}

The **`toReversed()`** method of {{jsxref("TypedArray")}} instances is the [copying](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) counterpart of the {{jsxref("TypedArray/reverse", "reverse()")}} method. It returns a new typed array with the elements in reversed order. This method has the same algorithm as {{jsxref("Array.prototype.toReversed()")}}.

## Syntax

```js-nolint
toReversed()
```

### Parameters

None.

### Return value

A new typed array containing the elements in reversed order.

## Description

See {{jsxref("Array.prototype.toReversed()")}} for more details. This method is not generic and can only be called on typed array instances.

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
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.toReversed()")}}
