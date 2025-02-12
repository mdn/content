---
title: TypedArray.from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
page-type: javascript-static-method
browser-compat: javascript.builtins.TypedArray.from
---

{{JSRef}}

The **`TypedArray.from()`** static method creates a new
[typed array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)
from an array-like or iterable object. This method is nearly the same as
{{jsxref("Array.from()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.from()", "shorter")}}

```js interactive-example
const uint16 = Int16Array.from("12345");

console.log(uint16);
// Expected output: Int16Array [1, 2, 3, 4, 5]
```

## Syntax

```js-nolint
TypedArray.from(arrayLike, mapFn)
TypedArray.from(arrayLike, mapFn, thisArg)
```

Where `TypedArray` is one of:

- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float16Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}

### Parameters

- `arrayLike`
  - : An iterable or array-like object to convert to a typed array.
- `mapFn` {{optional_inline}}
  - : A function to call on every element of the typed array. If provided, every value to be added to the array is first passed through this function, and `mapFn`'s return value is added to the typed array instead. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
- `thisArg` {{optional_inline}}
  - : Value to use as `this` when executing `mapFn`.

### Return value

A new {{jsxref("TypedArray")}} instance.

## Description

See {{jsxref("Array.from()")}} for more details.

There are some subtle distinctions between {{jsxref("Array.from()")}} and `TypedArray.from()` (note: the `this` value mentioned below is the `this` value that `TypedArray.from()` was called with, not the `thisArg` argument used to invoke `mapFn`):

- If the `this` value of `TypedArray.from()` is not a constructor, `TypedArray.from()` will throw a {{jsxref("TypeError")}}, while `Array.from()` defaults to creating a new {{jsxref("Array")}}.
- The object constructed by `this` must be a `TypedArray` instance, while `Array.from()` allows its `this` value to be constructed to any object.
- When the `source` parameter is an iterator, `TypedArray.from()` first collects all the values from the iterator, then creates an instance of `this` using the count, and finally sets the values on the instance. `Array.from()` sets each value as it receives them from the iterator, then sets its `length` at the end.
- `TypedArray.from()` uses `[[Set]]` while `Array.from()` uses `[[DefineOwnProperty]]`. Hence, when working with {{jsxref("Proxy")}} objects, it calls [`handler.set()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) to create new elements rather than [`handler.defineProperty()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty).
- When `Array.from()` gets an array-like which isn't an iterator, it respects holes. `TypedArray.from()` will ensure the result is dense.

## Examples

### From an iterable object (Set)

```js
const s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]
```

### From a string

```js
Int16Array.from("123");
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
Uint8Array.from({ length: 5 }, (v, k) => k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
```

### Calling from() on non-TypedArray constructors

The `this` value of `from()` must be a constructor that returns a `TypedArray` instance.

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

Int8Array.from.call({}, []); // TypeError: #<Object> is not a constructor
Int8Array.from.call(NotArray, []);
// NotArray called with length 0
// TypeError: Method %TypedArray%.from called on incompatible receiver #<NotArray>
```

```js
function NotArray2(len) {
  console.log("NotArray2 called with length", len);
  return new Uint8Array(len);
}
console.log(Int8Array.from.call(NotArray2, [1, 2, 3]));
// NotArray2 called with length 3
// Uint8Array(3) [ 1, 2, 3 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.from` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.of()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Array.from()")}}
