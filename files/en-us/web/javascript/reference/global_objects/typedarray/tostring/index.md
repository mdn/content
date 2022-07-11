---
title: TypedArray.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toString
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
browser-compat: javascript.builtins.TypedArray.toString
---
{{JSRef}}

The **`toString()`** method returns a string representing the
specified array and its elements. This method has the same algorithm as
{{jsxref("Array.prototype.toString()")}}. _TypedArray_ is one of the
[typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-tostring.html","shorter")}}

## Syntax

```js
toString()
```

### Return value

A string representing the elements of the typed array.

## Examples

The {{jsxref("TypedArray")}} objects override the `toString` method of
{{jsxref("Object")}}. For `TypedArray` objects, the `toString`
method joins the array and returns one string containing each typed array element
separated by commas. For example, the following code creates a typed array and uses
`toString` to convert the array to a string.

```js
const numbers = new Uint8Array([2, 5, 8, 1, 4])
numbers.toString(); // "2,5,8,1,4"
```

JavaScript calls the `toString` method automatically when a typed array is
to be represented as a text value or when an array is referred to in a string
concatenation.

### Compatibility

If a browser doesn't support the `TypedArray.prototype.toString()` method
yet, JavaScript will call the `toString` method of {{jsxref("Object")}}:

```js
const numbers = new Uint8Array([2, 5, 8, 1, 4])
numbers.toString(); // "[object Uint8Array]"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("TypedArray.prototype.join()")}}
