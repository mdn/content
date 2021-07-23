---
title: TypedArray.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.reverse
---
{{JSRef}}

The **`reverse()`** method reverses a typed array in place. The
first typed array element becomes the last and the last becomes the first. This method
has the same algorithm as {{jsxref("Array.prototype.reverse()")}}. _TypedArray_
is one of the [typed
array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-reverse.html","shorter")}}

## Syntax

```js
reverse()
```

### Return value

The reversed array.

## Examples

### Using reverse

```js
var uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8); // Uint8Array [3, 2, 1]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `TypedArray.prototype.reverse` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("Array.prototype.reverse()")}}
