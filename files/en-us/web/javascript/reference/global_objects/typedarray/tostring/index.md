---
title: TypedArray.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toString
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.toString
---

{{JSRef}}

The **`toString()`** method of {{jsxref("TypedArray")}} instances returns a string representing the specified typed array and its elements. This method has the same algorithm as {{jsxref("Array.prototype.toString()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-tostring.html","shorter")}}

## Syntax

```js-nolint
toString()
```

### Return value

A string representing the elements of the typed array.

## Description

See {{jsxref("Array.prototype.toString()")}} for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Converting a typed array to a string

```js
const uint8 = new Uint8Array([1, 2, 3]);
// Explicit conversion
console.log(uint8.toString()); // 1,2,3
// Implicit conversion
console.log(`${uint8}`); // 1,2,3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("String.prototype.toString()")}}
