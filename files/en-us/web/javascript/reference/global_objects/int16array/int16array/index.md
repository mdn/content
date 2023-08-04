---
title: Int16Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/Int16Array/Int16Array
page-type: javascript-constructor
browser-compat: javascript.builtins.Int16Array.Int16Array
---

{{JSRef}}

The **`Int16Array()`** constructor creates {{jsxref("Int16Array")}} objects. The contents are initialized to `0`.

## Syntax

```js-nolint
new Int16Array()
new Int16Array(length)
new Int16Array(typedArray)
new Int16Array(object)

new Int16Array(buffer)
new Int16Array(buffer, byteOffset)
new Int16Array(buffer, byteOffset, length)
```

> **Note:** `Int16Array()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

See [`TypedArray`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#parameters).

### Exceptions

See [`TypedArray`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Examples

### Different ways to create an Int16Array

```js
// From a length
const int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2
console.log(int16.BYTES_PER_ELEMENT); // 2

// From an array
const x = new Int16Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Int16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(16);
const z = new Int16Array(buffer, 2, 4);
console.log(z.byteOffset); // 2

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int16FromIterable = new Int16Array(iterable);
console.log(int16FromIterable);
// Int16Array [1, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Int16Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
