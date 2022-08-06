---
title: TypedArray.of()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/of
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.of
---
{{JSRef}}

The **`TypedArray.of()`** method creates a new
[typed array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) from a variable number of arguments. This method is nearly the same as
{{jsxref("Array.of()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-of.html","shorter")}}

## Syntax

```js
TypedArray.of(element0)
TypedArray.of(element0, element1)
TypedArray.of(element0, element1, /* ... ,*/ elementN)
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

- `elementN`
  - : Elements of which to create the typed array.

### Return value

A new {{jsxref("TypedArray")}} instance.

## Description

Some subtle distinctions between {{jsxref("Array.of()")}} and
`TypedArray.of()`:

- If the `this` value passed to `TypedArray.of()` is
  not a constructor, `TypedArray.of()` will throw a
  {{jsxref("TypeError")}}, where `Array.of()` defaults to creating a new
  {{jsxref("Array")}}.
- `TypedArray.of()` uses `[[Set]]` where `Array.of()` uses `[[DefineOwnProperty]]`. Hence, when working with {{jsxref("Proxy")}} objects, it calls [`handler.set()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) to create new elements rather than [`handler.defineProperty()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty).

## Examples

### Using of()

```js
Uint8Array.of(1);            // Uint8Array [ 1 ]
Int8Array.of('1', '2', '3'); // Int8Array [ 1, 2, 3 ]
Float32Array.of(1, 2, 3);    // Float32Array [ 1, 2, 3 ]
Int16Array.of(undefined);    // Int16Array [ 0 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.of` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.of()")}}
