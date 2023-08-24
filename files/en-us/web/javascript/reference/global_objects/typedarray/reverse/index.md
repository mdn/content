---
title: TypedArray.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.reverse
---

{{JSRef}}

The **`reverse()`** method of {{jsxref("TypedArray")}} instances reverses a typed array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ and returns the reference to the same typed array, the first typed array element now becoming the last, and the last typed array element becoming the first. In other words, elements order in the typed array will be turned towards the direction opposite to that previously stated. This method has the same algorithm as {{jsxref("Array.prototype.reverse()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-reverse.html","shorter")}}

## Syntax

```js-nolint
reverse()
```

### Parameters

None.

### Return value

The reference to the original typed array, now reversed. Note that the typed array is reversed _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_, and no copy is made.

## Description

See {{jsxref("Array.prototype.reverse()")}} for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Using reverse()

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8); // Uint8Array [3, 2, 1]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.reverse` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("Array.prototype.reverse()")}}
