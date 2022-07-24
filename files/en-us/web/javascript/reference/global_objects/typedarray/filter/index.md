---
title: TypedArray.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/filter
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.filter
---
{{JSRef}}

The **`filter()`** method creates a new typed array with all
elements that pass the test implemented by the provided function. This method has the
same algorithm as {{jsxref("Array.prototype.filter()")}}. _TypedArray_ is one of
the [typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-filter.html")}}

## Syntax

```js
// Arrow function
filter((element) => { /* ... */ } )
filter((element, index) => { /* ... */ } )
filter((element, index, array) => { /* ... */ } )

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)

// Inline callback function
filter(function(element) { /* ... */ })
filter(function(element, index) { /* ... */ })
filter(function(element, index, array){ /* ... */ })
filter(function(element, index, array) { /* ... */ }, thisArg)
```

### Parameters

- `callbackFn`
  - : Function to test each element of the typed array.

    The function is called with the following arguments: `(element, index, array)`.
    Return `true` to keep the element, `false` otherwise.
- `thisArg` {{optional_inline}}
  - : Value to use as `this` when executing `callbackFn`.

### Return value

A new typed array with the elements that pass the test.

## Description

The `filter()` method calls a provided `callbackFn`
function once for each element in a typed array, and constructs a new typed array of all
the values for which `callbackFn` returns [a value that coerces to `true`](/en-US/docs/Glossary/Truthy).
`callbackFn` is invoked only for indexes of the typed array which
have assigned values; it is not invoked for indexes which have been deleted or which
have never been assigned values. Typed array elements which do not pass the
`callbackFn` test are skipped, and are not included in the new typed
array.

`callbackFn` is invoked with three arguments:

1. the value of the element
2. the index of the element
3. the typed array object being traversed

If a `thisArg` parameter is provided to `filter()`, it
will be passed to `callbackFn` when invoked, for use as its
`this` value. Otherwise, the value `undefined` will be passed for
use as its `this` value. The `this` value ultimately observable by
`callbackFn` is determined according to
[the usual rules for determining the `this` seen by a function](/en-US/docs/Web/JavaScript/Reference/Operators/this).

`filter()` does not mutate the typed array on which it is called.

The range of elements processed by `filter()` is set before the first
invocation of `callbackFn`. Elements which are appended to the typed
array after the call to `filter()` begins will not be visited by
`callbackFn`. If existing elements of the typed array are changed,
or deleted, their value as passed to `callbackFn` will be the value
at the time `filter()` visits them; elements that are deleted are not
visited.

## Examples

### Filtering out all small values

The following example uses `filter()` to create a filtered typed array that
has all elements with values less than 10 removed.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).filter(isBigEnough);
// Uint8Array [ 12, 130, 44 ]
```

### Filtering typed array elements using arrow functions

[Arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) provide a shorter syntax for the same test.

```js
new Uint8Array([12, 5, 8, 130, 44]).filter((elem) => elem >= 10);
// Uint8Array [ 12, 130, 44 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.filter` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.filter()")}}
