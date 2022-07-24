---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - array.concat
  - concat
  - Polyfill
browser-compat: javascript.builtins.Array.concat
---
{{JSRef}}

The **`concat()`** method is used to merge two or more arrays.
This method does not change the existing arrays, but instead returns a new array.

{{EmbedInteractiveExample("pages/js/array-concat.html","shorter")}}

## Syntax

```js
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, /* … ,*/ valueN)
```

### Parameters

- `valueN` {{optional_inline}}
  - : Arrays and/or values to concatenate into a new array. If all
    `valueN` parameters are omitted, `concat` returns a
    [shallow copy](/en-US/docs/Glossary/Shallow_copy) of the existing array on which it is called. See the description below
    for more details.

### Return value

A new {{jsxref("Array")}} instance.

## Description

The `concat` method creates a new array. The array will first be populated by the elements in the
object on which it is called. Then, for each argument, its value will be concatenated into the array — for normal objects or primitives, the argument itself will become an element of the final array; for arrays or array-like objects with the property [`Symbol.isConcatSpreadable`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable) set to a truthy value, each element of the argument will be independently added to the final array. The `concat` method does not recurse into nested array arguments.

The `concat` method does not alter `this` or any of the arrays
provided as arguments but instead returns a [shallow copy](/en-US/docs/Glossary/Shallow_copy) that contains copies of the
same elements combined from the original arrays. Elements of the original arrays are
copied into the new array as follows:

- Object references (and not the actual object): `concat` copies object
  references into the new array. Both the original and new array refer to the same
  object. That is, if a referenced object is modified, the changes are visible to both
  the new and original arrays. This includes elements of array arguments that are also
  arrays.
- Data types such as strings, numbers and booleans (not
  {{jsxref("Global_Objects/String", "String")}}, {{jsxref("Global_Objects/Number",
    "Number")}}, and {{jsxref("Global_Objects/Boolean", "Boolean")}} objects):
  `concat` copies the values of strings and numbers into the new array.

> **Note:** Concatenating array(s)/value(s) will leave the originals
> untouched. Furthermore, any operation on the new array (except operations on elements
> which are object references) will have no effect on the original arrays, and vice
> versa.

## Examples

### Concatenating two arrays

The following code concatenates two arrays:

```js
const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Concatenating three arrays

The following code concatenates three arrays:

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Concatenating values to an array

The following code concatenates three values to an array:

```js
const letters = ['a', 'b', 'c'];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Concatenating nested arrays

The following code concatenates nested arrays and demonstrates retention of references:

```js
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(numbers);
// results in [[1, 4], 2, [3]]
```

### Concatenating array-like objects with Symbol.isConcatSpreadable

`concat` does not treat all array-like objects as arrays by default — only if `Symbol.isConcatSpreadable` is set to a truthy value (e.g. `true`).

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.concat` in `core-js` with fixes and implementation of modern behavior like `Symbol.isConcatSpreadable` support](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.push", "push")}} / {{jsxref("Array.pop", "pop")}} — add/remove
  elements from the end of the array
- {{jsxref("Array.unshift", "unshift")}} / {{jsxref("Array.shift", "shift")}} —
  add/remove elements from the beginning of the array
- {{jsxref("Array.splice", "splice")}} — add/remove elements from the specified
  location of the array
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}} — control flattening.
