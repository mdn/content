---
title: TypedArray.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/values
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.values
---

{{JSRef}}

The **`values()`** method of {{jsxref("TypedArray")}} instances returns a new _[array iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that iterates the value of each item in the typed array. This method has the same algorithm as {{jsxref("Array.prototype.values()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.values()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);
const array1 = uint8.values();

array1.next();
array1.next();

console.log(array1.next().value);
// Expected output: 30
```

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Description

See {{jsxref("Array.prototype.values()")}} for more details. This method is not generic and can only be called on typed array instances.

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
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- [`TypedArray.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- {{jsxref("Array.prototype.values()")}}
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
