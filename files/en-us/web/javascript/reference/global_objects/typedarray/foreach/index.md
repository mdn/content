---
title: TypedArray.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.forEach
---
{{JSRef}}

The **`forEach()`** method executes a provided function once
per array element. This method has the same algorithm as
{{jsxref("Array.prototype.forEach()")}}. _TypedArray_ is one of the
[typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

## Syntax

```js
// Arrow function
forEach((element) => { /* ... */ } )
forEach((element, index) => { /* ... */ } )
forEach((element, index, array) => { /* ... */ } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function(element) { /* ... */ })
forEach(function(element, index) { /* ... */ })
forEach(function(element, index, array){ /* ... */ })
forEach(function(element, index, array) { /* ... */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : Function that produces an element of the new typed array.

    The function is called with the following arguments:

    - `element`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the array.
    - `array`
      - : The array `forEach()` was called upon.

- `thisArg` {{optional_inline}}
  - : Value to use as `this` when executing `callbackFn`.

### Return value

{{jsxref("undefined")}}.

## Description

The `forEach()` method executes the provided
`callbackFn` once for each element present in the typed array in
ascending order. It is not invoked for indexes that have been deleted or elided.
However, it is executed for elements that are present and have the value
{{jsxref("undefined")}}.

`callbackFn` is invoked with **three arguments**:

- the **element value**
- the **element index**
- the **typed array being traversed**

If a `thisArg` parameter is provided to `forEach()`,
it will be passed to `callbackFn` when invoked, for use as its
`this` value.  Otherwise, the value {{jsxref("undefined")}} will be passed
for use as its `this` value. The `this` value ultimately
observable by `callbackFn` is determined according to
[the usual rules for determining the `this` seen by a function](/en-US/docs/Web/JavaScript/Reference/Operators/this).

The range of elements processed by `forEach()` is set before the first
invocation of `callbackFn`. Elements that are appended to the typed array after
the call to `forEach()` begins will not be visited by
`callbackFn` . If the values of existing elements of the typed array
are changed, the value passed to `callbackFn` will be the value at
the time `forEach()` visits them; elements that are deleted before being
visited are not visited.

`forEach()` executes the `callbackFn` function once for each typed
array element; unlike {{jsxref("TypedArray.prototype.every()", "every()")}} and
{{jsxref("TypedArray.prototype.some()", "some()")}} it, always returns the value
{{jsxref("undefined")}}.

## Examples

### Logging the contents of a typed array

The following code logs a line for each element in a typed array:

```js
function logArrayElements(element, index, array) {
  console.log(`a[${index}] = ${element}`);
}

new Uint8Array([0, 1, 2, 3]).forEach(logArrayElements);
// logs:
// a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.forEach` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.forEach()")}}
