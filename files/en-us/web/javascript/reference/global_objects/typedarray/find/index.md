---
title: TypedArray.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/find
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.find
---

{{JSRef}}

The **`find()`** method returns a value of an element in the
typed array, if it satisfies the provided testing function. Otherwise
{{jsxref("undefined")}} is returned. _TypedArray_ is one of the
[typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

See also the {{jsxref("TypedArray.findIndex", "findIndex()")}} method, which returns
the **index** of a found element in the typed array instead of its value.

{{EmbedInteractiveExample("pages/js/typedarray-find.html")}}

## Syntax

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the typed array. It should return a [truthy](/en-US/docs/Glossary/Truthy) value to indicate a matching element has been found, and a [falsy](/en-US/docs/Glossary/Falsy) value otherwise. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The array `find()` was called upon.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`. See [iterative methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Return value

A value in the array if an element passes the test; otherwise, {{jsxref("undefined")}}.

## Description

The `find()` method executes the `callbackFn` function
once for each element present in the typed array until it finds one where
`callbackFn` returns a true value. If such an element is found,
`find()` immediately returns the value of that element. Otherwise,
`find()` returns {{jsxref("undefined")}}. `callbackFn` is
invoked only for indexes of the typed array which have assigned values; it is not
invoked for indexes which have been deleted or which have never been assigned values.

`callbackFn` is invoked with three arguments: the value of the
element, the index of the element, and the typed array object being traversed.

If a `thisArg` parameter is provided to `find()`, it
will be used as the `this` for each invocation of the
`callbackFn`. If it is not provided, then {{jsxref("undefined")}} is
used.

`find()` does not mutate the typed array on which it is called.

The range of elements processed by `find()` is set before the first
invocation of `callbackFn`. Elements that are appended to the typed
array after the call to `find()` begins will not be visited by
`callbackFn`. If an existing, unvisited element of the typed array
is changed by `callbackFn`, its value passed to the visiting
`callbackFn` will be the value at the time that `find()`
visits that element's index; elements that are deleted are not visited.

## Examples

### Find a prime number in a typed array

The following example finds an element in the typed array that is a prime number (or
returns {{jsxref("undefined")}} if there is no prime number).

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

const uint8 = new Uint8Array([4, 5, 8, 12]);
console.log(uint8.find(isPrime)); // 5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.find` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.every()")}}
