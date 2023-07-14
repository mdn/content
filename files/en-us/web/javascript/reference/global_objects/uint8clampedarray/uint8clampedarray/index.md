---
title: Uint8ClampedArray() constructor
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray/Uint8ClampedArray
page-type: javascript-constructor
browser-compat: javascript.builtins.Uint8ClampedArray.Uint8ClampedArray
---

{{JSRef}}

The **`Uint8ClampedArray()`** constructor creates {{jsxref("Uint8ClampedArray")}} objects. The contents are initialized to `0`.

## Syntax

```js-nolint
new Uint8ClampedArray()
new Uint8ClampedArray(length)
new Uint8ClampedArray(typedArray)
new Uint8ClampedArray(object)

new Uint8ClampedArray(buffer)
new Uint8ClampedArray(buffer, byteOffset)
new Uint8ClampedArray(buffer, byteOffset, length)
```

> **Note:** `Uint8ClampedArray()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

See [`TypedArray`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#parameters).

### Exceptions

See [`TypedArray`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Examples

### Different ways to create a Uint8ClampedArray

```js
// From a length
const uintc8 = new Uint8ClampedArray(2);
uintc8[0] = 42;
uintc8[1] = 1337;
console.log(uintc8[0]); // 42
console.log(uintc8[1]); // 255 (clamped)
console.log(uintc8.length); // 2
console.log(uintc8.BYTES_PER_ELEMENT); // 1

// From an array
const x = new Uint8ClampedArray([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Uint8ClampedArray(buffer, 1, 4);
console.log(z.byteOffset); // 1

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uintc8FromIterable = new Uint8ClampedArray(iterable);
console.log(uintc8FromIterable);
// Uint8ClampedArray [1, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Uint8ClampedArray` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
