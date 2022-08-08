---
title: TypedArray.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/entries
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.entries
---

{{JSRef}}

The **`entries()`** method returns a new {{jsxref("Array")}}
iterator object that contains the key/value pairs for each index in the array.

{{EmbedInteractiveExample("pages/js/typedarray-entries.html")}}

## Syntax

```js
entries();
```

### Return value

A new _array iterator_ object.

## Examples

### Iteration using for...of loop

```js
const array = new Uint8Array([10, 20, 30, 40, 50]);
const arrayEntries = arr.entries();
for (const element of arrayEntries) {
  console.log(element);
}
```

### Alternative iteration

```js
const array = new Uint8Array([10, 20, 30, 40, 50]);
const arrayEntries = arr.entries();

console.log(arrayEntries.next().value); // [0, 10]
console.log(arrayEntries.next().value); // [1, 20]
console.log(arrayEntries.next().value); // [2, 30]
console.log(arrayEntries.next().value); // [3, 40]
console.log(arrayEntries.next().value); // [4, 50]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.entries` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.values()")}}
- {{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}
