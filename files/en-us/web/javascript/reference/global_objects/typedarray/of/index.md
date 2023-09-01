---
title: TypedArray.of()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/of
page-type: javascript-static-method
browser-compat: javascript.builtins.TypedArray.of
---

{{JSRef}}

The **`TypedArray.of()`** static method creates a new
[typed array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) from a variable number of arguments. This method is nearly the same as
{{jsxref("Array.of()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-of.html","shorter")}}

## Syntax

```js-nolint
TypedArray.of()
TypedArray.of(element1)
TypedArray.of(element1, element2)
TypedArray.of(element1, element2, /* …, */ elementN)
```

Where `TypedArray` is one of:

- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}

### Parameters

- `element1`, …, `elementN`
  - : Elements used to create the typed array.

### Return value

A new {{jsxref("TypedArray")}} instance.

## Description

See {{jsxref("Array.of()")}} for more details. There are some subtle distinctions between {{jsxref("Array.of()")}} and
`TypedArray.of()`:

- If the `this` value passed to `TypedArray.of()` is not a constructor, `TypedArray.from()` will throw a {{jsxref("TypeError")}}, while `Array.of()` defaults to creating a new {{jsxref("Array")}}.
- `TypedArray.of()` uses `[[Set]]` while `Array.of()` uses `[[DefineOwnProperty]]`. Hence, when working with {{jsxref("Proxy")}} objects, it calls [`handler.set()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) to create new elements rather than [`handler.defineProperty()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty).

## Examples

### Using of()

```js
Uint8Array.of(1); // Uint8Array [ 1 ]
Int8Array.of("1", "2", "3"); // Int8Array [ 1, 2, 3 ]
Float32Array.of(1, 2, 3); // Float32Array [ 1, 2, 3 ]
Int16Array.of(undefined); // Int16Array [ 0 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.of` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.of()")}}
