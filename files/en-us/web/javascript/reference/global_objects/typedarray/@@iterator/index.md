---
title: TypedArray.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator
tags:
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.@@iterator
---
{{JSRef}}

The initial value of the `@@iterator` property is the same function object
as the initial value of the {{jsxref("TypedArray.prototype.values()", "values")}}
property.

## Syntax

```js
[Symbol.iterator]()
```

### Return value

The array **iterator** function, which is the
{{jsxref("TypedArray.prototype.values()", "values()")}} function by default.

## Examples

### Iteration using for...of loop

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
// your browser must support for..of loop
// and let-scoped variables in for loops
for (let n of arr) {
  console.log(n);
}
```

### Alternative iteration

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // 10
console.log(eArr.next().value); // 20
console.log(eArr.next().value); // 30
console.log(eArr.next().value); // 40
console.log(eArr.next().value); // 50
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `TypedArray.prototype[@@iterator]` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.values()")}}
