---
title: TypedArray.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/entries
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.entries
---

{{JSRef}}

The **`entries()`** method returns a new _[array iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ that contains the key/value pairs for each index in the array.

{{EmbedInteractiveExample("pages/js/typedarray-entries.html")}}

## Syntax

```js-nolint
entries()
```

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

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
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.values()")}}
- [`TypedArray.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)
