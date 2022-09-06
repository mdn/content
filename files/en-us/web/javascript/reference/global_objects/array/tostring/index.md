---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
browser-compat: javascript.builtins.Array.toString
---
{{JSRef}}

The **`toString()`** method returns a string representing the
specified array and its elements.

{{EmbedInteractiveExample("pages/js/array-tostring.html","shorter")}}

## Syntax

```js
toString()
```

### Return value

A string representing the elements of the array.

## Description

The {{jsxref("Array")}} object overrides the `toString` method of {{jsxref("Object")}}. The `toString` method of arrays calls [`join()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) internally, which joins the array and returns one string containing each array element separated by commas. If the `join` method is unavailable or is not a function, [`Object.prototype.toString`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) is used instead, returning `[object Array]`.

```js
const arr = [];
arr.join = 1; // re-assign `join` with a non-function
console.log(arr.toString()); // Logs [object Array]

console.log(Array.prototype.toString.call({ join: () => 1 }));  // Logs 1
```

JavaScript calls the `toString` method automatically when an array is to be represented as a text value or when an array is referred to in a string concatenation.

## Examples

### Using toString

```js
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.join()")}}
