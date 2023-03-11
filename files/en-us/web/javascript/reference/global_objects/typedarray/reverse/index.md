---
title: TypedArray.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.reverse
---

{{JSRef}}

The **`reverse()`** method reverses a typed array in place. The
first typed array element becomes the last and the last becomes the first. This method
has the same algorithm as {{jsxref("Array.prototype.reverse()")}}. _TypedArray_
is one of the [typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-reverse.html","shorter")}}

## Syntax

```js-nolint
reverse()
```

### Return value

The reversed array.

## Examples

### Using reverse

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
- {{jsxref("Array.prototype.reverse()")}}
