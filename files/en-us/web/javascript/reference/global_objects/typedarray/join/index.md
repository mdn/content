---
title: TypedArray.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.join
---

{{JSRef}}

The **`join()`** method of {{jsxref("TypedArray")}} instances creates and returns a new string by concatenating all of the elements in this typed array, separated by commas or a specified separator string. If the typed array has only one item, then that item will be returned without using the separator. This method has the same algorithm as {{jsxref("Array.prototype.join()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.join()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.join());
// Expected output: "10,20,30,40,50"

console.log(uint8.join(""));
// Expected output: "1020304050"

console.log(uint8.join("-"));
// Expected output: "10-20-30-40-50"
```

## Syntax

```js-nolint
join()
join(separator)
```

### Parameters

- `separator` {{optional_inline}}
  - : A string to separate each pair of adjacent elements of the typed array. If omitted, the typed array elements are separated with a comma (",").

### Return value

A string with all typed array elements joined. If `array.length` is `0`, the empty string is returned.

## Description

See {{jsxref("Array.prototype.join()")}} for more details. This method is not generic and can only be called on typed array instances.

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
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
