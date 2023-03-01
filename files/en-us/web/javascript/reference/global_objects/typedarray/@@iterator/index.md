---
title: TypedArray.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.@@iterator
---

{{JSRef}}

The **`@@iterator`** method of a `TypedArray` object implements the [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) and allows typed arrays to be consumed by most syntaxes expecting iterables, such as the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops. It returns an iterator that yields the value of each index in the typed array.

The initial value of this property is the same function object as the initial value of the {{jsxref("TypedArray.prototype.values")}} property.

## Syntax

```js-nolint
typedArray[Symbol.iterator]()
```

### Return value

The same return value as {{jsxref("TypedArray.prototype.values()")}}: a new iterable iterator object that yields the value of each index in the typed array.

## Examples

### Iteration using for...of loop

Note that you seldom need to call this method directly. The existence of the `@@iterator` method makes typed arrays [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), and iterating syntaxes like the `for...of` loop automatically calls this method to obtain the iterator to loop over.

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
for (const n of arr) {
  console.log(n);
}
```

### Manually hand-rolling the iterator

You may still manually call the `next()` method of the returned iterator object to achieve maximum control over the iteration process.

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // 10
console.log(arrIter.next().value); // 20
console.log(arrIter.next().value); // 30
console.log(arrIter.next().value); // 40
console.log(arrIter.next().value); // 50
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype[@@iterator]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.values()")}}
