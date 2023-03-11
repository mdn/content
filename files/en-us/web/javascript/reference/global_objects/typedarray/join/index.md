---
title: TypedArray.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.join
---

{{JSRef}}

The **`join()`** method joins all elements of an array into a
string. This method has the same algorithm as {{jsxref("Array.prototype.join()")}}.
_TypedArray_ is one of the
[typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-join.html")}}

## Syntax

```js-nolint
join()
join(separator)
```

### Parameters

- `separator` {{optional_inline}}
  - : Specifies a string to separate each element. The `separator`
    is converted to a string if necessary. If omitted, the typed array elements are
    separated with a comma (",").

### Return value

A string with all array elements joined.

## Examples

### Using join()

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.join(); // '1,2,3'
uint8.join(" / "); // '1 / 2 / 3'
uint8.join(""); // '123'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.join` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.join()")}}
