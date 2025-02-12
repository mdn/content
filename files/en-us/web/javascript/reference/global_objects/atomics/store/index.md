---
title: Atomics.store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
page-type: javascript-static-method
browser-compat: javascript.builtins.Atomics.store
---

{{JSRef}}

The **`Atomics.store()`** static
method stores a given value at the given position in the array and returns that value.

{{InteractiveExample("JavaScript Demo: Atomics.store()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(Atomics.store(uint8, 0, 2));
// Expected output: 2

console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## Syntax

```js-nolint
Atomics.store(typedArray, index, value)
```

### Parameters

- `typedArray`
  - : An integer typed array. One of {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, or
    {{jsxref("BigUint64Array")}}.
- `index`
  - : The position in the `typedArray` to store a
    `value` in.
- `value`
  - : The number to store.

### Return value

The value that has been stored.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `typedArray` is not one of the allowed integer types.
- {{jsxref("RangeError")}}
  - : Thrown if `index` is out of bounds in the `typedArray`.

## Examples

### Using store()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.store(ta, 0, 12); // 12
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.load()")}}
