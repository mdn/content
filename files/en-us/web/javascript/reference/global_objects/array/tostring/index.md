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

The {{jsxref("Array")}} object overrides the `toString` method of
{{jsxref("Object")}}. For Array objects, the `toString` method joins the
array and returns one string containing each array element separated by commas.

JavaScript calls the `toString` method automatically when an array is to be
represented as a text value or when an array is referred to in a string concatenation.

### ECMAScript 5 semantics

Starting in JavaScript 1.8.5 (Firefox 4), and consistent with ECMAScript 5th edition
semantics, the `toString()` method is generic and can be used with any
object. {{jsxref("Object.prototype.toString()")}} will be called, and the resulting
value will be returned.

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
- {{jsxref("Object.prototype.toSource()")}}
