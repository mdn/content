---
title: TypedArray.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/values
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
browser-compat: javascript.builtins.TypedArray.values
---
{{JSRef}}

The **`values()`** method returns a new _array iterator_ object that contains the values for each index in the array.

{{EmbedInteractiveExample("pages/js/typedarray-values.html")}}

## Syntax

```js
values()
```

### Return value

A new _array iterator_ object.

## Examples

### Iteration using for...of loop

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const values = arr.values();
for (const n of values) {
  console.log(n);
}
```

### Alternative iteration

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const values = arr.values();
console.log(values.next().value); // 10
console.log(values.next().value); // 20
console.log(values.next().value); // 30
console.log(values.next().value); // 40
console.log(values.next().value); // 50
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.values` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}
