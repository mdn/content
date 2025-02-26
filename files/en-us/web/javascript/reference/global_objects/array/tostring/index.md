---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.toString
---

{{JSRef}}

The **`toString()`** method of {{jsxref("Array")}} instances returns a string representing the
specified array and its elements.

{{InteractiveExample("JavaScript Demo: Array.toString()", "shorter")}}

```js interactive-example
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// Expected output: "1,2,a,1a"
```

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string representing the elements of the array.

## Description

The {{jsxref("Array")}} object overrides the `toString` method of {{jsxref("Object")}}. The `toString` method of arrays calls [`join()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) internally, which joins the array and returns one string containing each array element separated by commas. If the `join` method is unavailable or is not a function, [`Object.prototype.toString`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) is used instead, returning `[object Array]`.

```js
const arr = [];
arr.join = 1; // re-assign `join` with a non-function
console.log(arr.toString()); // [object Array]

console.log(Array.prototype.toString.call({ join: () => 1 })); // 1
```

JavaScript calls the `toString` method automatically when an array is to be represented as a text value or when an array is referred to in a string concatenation.

`Array.prototype.toString` recursively converts each element, including other arrays, to strings. Because the string returned by `Array.prototype.toString` does not have delimiters, nested arrays look like they are flattened.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.toString()); // 1,2,3,4,5,6,7,8,9
```

When an array is cyclic (it contains an element that is itself), browsers avoid infinite recursion by ignoring the cyclic reference.

```js
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.toString()); // 1,3,,4,2
```

## Examples

### Using toString()

```js
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString()); // "1,2,a,1a"
```

### Using toString() on sparse arrays

Following the behavior of `join()`, `toString()` treats empty slots the same as `undefined` and produces an extra separator:

```js
console.log([1, , 3].toString()); // '1,,3'
```

### Calling toString() on non-array objects

`toString()` is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It expects `this` to have a `join()` method; or, failing that, uses `Object.prototype.toString()` instead.

```js
console.log(Array.prototype.toString.call({ join: () => 1 }));
// 1; a number
console.log(Array.prototype.toString.call({ join: () => undefined }));
// undefined
console.log(Array.prototype.toString.call({ join: "not function" }));
// "[object Object]"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections) guide
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("String.prototype.toString()")}}
