---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
page-type: javascript-static-method
browser-compat: javascript.builtins.Array.of
---

{{JSRef}}

The **`Array.of()`** static method creates a new `Array`
instance from a variable number of arguments, regardless of number or type of the
arguments.

{{EmbedInteractiveExample("pages/js/array-of.html", "shorter")}}

## Syntax

```js-nolint
Array.of()
Array.of(element1)
Array.of(element1, element2)
Array.of(element1, element2, /* …, */ elementN)
```

### Parameters

- `element1`, …, `elementN`
  - : Elements used to create the array.

### Return value

A new {{jsxref("Array")}} instance.

## Description

The difference between `Array.of()` and the [`Array()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) constructor is in the handling of single arguments: `Array.of(7)` creates an array with a single element, `7`, whereas `Array(7)` creates an empty array with a `length` property of `7`. (That implies an array of 7 empty slots, not slots with actual {{jsxref("undefined")}} values.)

```js
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
```

The `Array.of()` method is a generic factory method. For example, if a subclass of `Array` inherits the `of()` method, the inherited `of()` method will return new instances of the subclass instead of `Array` instances. In fact, the `this` value can be any constructor function that accepts a single argument representing the length of the new array, and the constructor will be called with the number of arguments passed to `of()`. The final `length` will be set again when all elements are assigned. If the `this` value is not a constructor function, the plain `Array` constructor is used instead.

## Examples

### Using Array.of()

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

### Calling of() on non-array constructors

The `of()` method can be called on any constructor function that accepts a single argument representing the length of the new array.

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

console.log(Array.of.call(NotArray, 1, 2, 3));
// NotArray called with length 3
// NotArray { '0': 1, '1': 2, '2': 3, length: 3 }

console.log(Array.of.call(Object)); // [Number: 0] { length: 0 }
```

When the `this` value is not a constructor, a plain `Array` object is returned.

```js
console.log(Array.of.call({}, 1)); // [ 1 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.of` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
