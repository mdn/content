---
title: TypedArray.from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - TypedArray
  - TypedArrays
  - from
  - Polyfill
browser-compat: javascript.builtins.TypedArray.from
---
{{JSRef}}

The **`TypedArray.from()`** method creates a new
[typed array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)
from an array-like or iterable object. This method is nearly the same as
{{jsxref("Array.from()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-from.html","shorter")}}

## Syntax

```js
// Arrow function
TypedArray.from(arrayLike, (element) => { /* ... */ } )
TypedArray.from(arrayLike, (element, index) => { /* ... */ } )

// Mapping function
TypedArray.from(arrayLike, mapFn)
TypedArray.from(arrayLike, mapFn, thisArg)

// Inline mapping function
TypedArray.from(arrayLike, function mapFn(element) { /* ... */ })
TypedArray.from(arrayLike, function mapFn(element, index) { /* ... */ })
TypedArray.from(arrayLike, function mapFn(element) { /* ... */ }, thisArg)
TypedArray.from(arrayLike, function mapFn(element, index) { /* ... */ }, thisArg)
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

- `arrayLike`
  - : An array-like or iterable object to convert to a typed array.
- `mapFn` {{optional_inline}}
  - : Map function to call on every element of the typed array.
- `thisArg` {{optional_inline}}
  - : Value to use as `this` when executing `mapFn`.

### Return value

A new {{jsxref("TypedArray")}} instance.

## Description

`TypedArray.from()` lets you create typed arrays from:

- array-like objects (objects with a `length` property and indexed
  elements); or
- [iterable objects](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) (objects
  where you can get its elements, such as {{jsxref("Map")}} and {{jsxref("Set")}}).

`TypedArray.from()` has the optional parameter
`mapFn`, which allows you to execute a
{{jsxref("Array.prototype.map", "map()")}} function on each element of the typed array
(or subclass object) that is being created. This means that the following are
equivalent:

- `TypedArray.from(obj, mapFn, thisArg)`
- `TypedArray.from(Array.prototype.map.call(obj, mapFn, thisArg))`.

The `length` property of the `from()` method is `1`.

### Differences from Array.from()

Some subtle distinctions between {{jsxref("Array.from()")}} and
`TypedArray.from()`:

- If the `thisArg` value passed to
  `TypedArray.from()` is not a constructor,
  `TypedArray.from()` will throw a {{jsxref("TypeError")}},
  where `Array.from()` defaults to creating a new {{jsxref("Array")}}.
- `TypedArray.from()` uses `[[Set]]` where `Array.from()` uses `[[DefineOwnProperty]]`. Hence, when working with {{jsxref("Proxy")}} objects, it calls [`handler.set()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) to create new elements rather than [`handler.defineProperty()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty).
- When the `source` parameter is an iterator, the
  `TypedArray.from()` first collects all the values from the
  iterator, then creates an instance of `thisArg` using the
  count, then sets the values on the instance. `Array.from()` sets each
  value as it receives them from the iterator, then sets its `length` at
  the end.
- When `Array.from()` gets an array-like which isn't an iterator, it
  respects holes. `TypedArray.from()` will ensure the result
  is dense.

## Examples

### From an iterable object (Set)

```js
const s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]
```

### From a string

```js
Int16Array.from('123');
// Int16Array [ 1, 2, 3 ]
```

### Use with arrow function and map

Using an arrow function as the map function to manipulate the elements

```js
Float32Array.from([1, 2, 3], (x) => x + x);
// Float32Array [ 2, 4, 6 ]
```

### Generate a sequence of numbers

```js
Uint8Array.from({length: 5}, (v, k) => k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.from` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.of()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Array.prototype.map()")}}
- [A polyfill](https://github.com/behnammodi/polyfill/blob/v0.0.1/int-8-array.polyfill.js)
