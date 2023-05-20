---
title: TypedArray.prototype.subarray()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.subarray
---

{{JSRef}}

The **`subarray()`** method returns a new _TypedArray_
on the same {{jsxref("ArrayBuffer")}} store and with the same element types as for this
_TypedArray_ object. The begin offset is **inclusive** and the end
offset is **exclusive**. _TypedArray_ is one of the
[typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

{{EmbedInteractiveExample("pages/js/typedarray-subarray.html")}}

## Syntax

```js-nolint
subarray()
subarray(begin)
subarray(begin, end)
```

### Parameters

- `begin` {{optional_inline}}
  - : Element to begin at. The offset is inclusive. The whole array will be included in
    the new view if this value is not specified.
- `end` {{optional_inline}}
  - : Element to end at. The offset is exclusive. If not specified, all elements from the
    one specified by `begin` to the end of the array are included in
    the new view.

### Return value

A new {{jsxref("TypedArray")}} object.

## Description

The range specified by `begin` and `end` is
clamped to the valid index range for the current array; if the computed length of the
new array would be negative, it's clamped to zero. If either
`begin` or `end` is negative, it refers to
an index from the end of the array instead of from the beginning.

Also note that this is creating a new view on the existing buffer; changes to the new
object's contents will impact the original object and vice versa.

## Examples

### Using the subarray() method

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);

console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]

const sub = uint8.subarray(0, 4);

console.log(sub); // Uint8Array [ 1, 2, 3, 0 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.subarray` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
