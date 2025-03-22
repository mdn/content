---
title: Atomics.sub()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/sub
page-type: javascript-static-method
browser-compat: javascript.builtins.Atomics.sub
---

{{JSRef}}

The **`Atomics.sub()`** static method subtracts a given value
at a given position in the array and returns the old value at that position. This atomic
operation guarantees that no other write happens until the modified value is written
back.

{{InteractiveExample("JavaScript Demo: Atomics.sub()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 - 2 = 5
console.log(Atomics.sub(uint8, 0, 2));
// Expected output: 7

console.log(Atomics.load(uint8, 0));
// Expected output: 5
```

## Syntax

```js-nolint
Atomics.sub(typedArray, index, value)
```

### Parameters

- `typedArray`
  - : An integer typed array. One of {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, or
    {{jsxref("BigUint64Array")}}.
- `index`
  - : The position in the `typedArray` to subtract a
    `value` from.
- `value`
  - : The number to subtract.

### Return value

The old value at the given position
(`typedArray[index]`).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `typedArray` is not one of the allowed integer types.
- {{jsxref("RangeError")}}
  - : Thrown if `index` is out of bounds in the `typedArray`.

## Examples

### Using sub

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 48;

Atomics.sub(ta, 0, 12); // returns 48, the old value
Atomics.load(ta, 0); // 36
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.add()")}}
