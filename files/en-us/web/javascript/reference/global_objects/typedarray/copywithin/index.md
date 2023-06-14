---
title: TypedArray.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.copyWithin
---

{{JSRef}}

The **`copyWithin()`** method copies the sequence of array
elements within the array to the position starting at `target`.
The copy is taken from the index positions of the second and third arguments
`start` and `end`. The
`end` argument is optional and defaults to the length of the
array. This method has the same algorithm as {{jsxref("Array.prototype.copyWithin")}}.
_TypedArray_ is one of the [typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-copywithin.html")}}

## Syntax

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### Parameters

- `target`
  - : Target start index position where to copy the elements to.
- `start`
  - : Source start index position where to start copying elements from.
- `end` {{optional_inline}}
  - : Optional. Source end index position where to end copying elements from.

### Return value

The modified array.

## Description

See {{jsxref("Array.prototype.copyWithin")}} for more details.

## Examples

### Using copyWithin

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);
console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]
uint8.copyWithin(3, 0, 3);
console.log(uint8); // Uint8Array [ 1, 2, 3, 1, 2, 3, 0, 0 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.copyWithin` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray")}}
