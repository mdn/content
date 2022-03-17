---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
browser-compat: javascript.builtins.Array.reverse
---
{{JSRef}}

The **`reverse()`** method reverses an array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_. The first
array element becomes the last, and the last array element becomes the first.

{{EmbedInteractiveExample("pages/js/array-reverse.html")}}

## Syntax

```js
reverse()
```

### Return value

The reversed array.

## Description

The `reverse` method transposes the elements of the calling array object in
place, mutating the array, and returning a reference to the array.

`reverse` is intentionally generic; this method can be
{{jsxref("Function.call", "called", "", 1)}} or {{jsxref("Function.apply", "applied",
  "", 1)}} to objects resembling arrays. Objects which do not contain a
`length` property reflecting the last in a series of consecutive, zero-based
numerical properties may not behave in any meaningful manner.

## Examples

### Reversing the elements in an array

The following example creates an array `items`, containing three elements, then
reverses the array. The call to `reverse()` returns a reference to the
reversed array `items`.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]
```

### Reversing the elements in an array-like object

The following example creates an array-like object `obj`, containing three
elements and a length property, then reverses the array-like object. The call to
`reverse()` returns a reference to the reversed array-like object
`obj`.

```js
const obj = {0: 1, 1: 2, 2: 3, length: 3};
console.log(obj); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(obj); //same syntax for using apply()
console.log(obj); // {0: 3, 1: 2, 2: 1, length: 3}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
