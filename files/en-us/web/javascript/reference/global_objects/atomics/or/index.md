---
title: Atomics.or()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/or
page-type: javascript-static-method
browser-compat: javascript.builtins.Atomics.or
---

{{JSRef}}

The **`Atomics.or()`** static
method computes a bitwise OR with a given value at a given position in the array, and
returns the old value at that position. This atomic operation guarantees that no other
write happens until the modified value is written back.

{{InteractiveExample("JavaScript Demo: Atomics.or()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

// 5 (0101) OR 2 (0010) = 7 (0111)
console.log(Atomics.or(uint8, 0, 2));
// Expected output: 5

console.log(Atomics.load(uint8, 0));
// Expected output: 7
```

## Syntax

```js-nolint
Atomics.or(typedArray, index, value)
```

### Parameters

- `typedArray`
  - : An integer typed array. One of {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, or
    {{jsxref("BigUint64Array")}}.
- `index`
  - : The position in the `typedArray` to compute the bitwise OR.
- `value`
  - : The number to compute the bitwise OR with.

### Return value

The old value at the given position
(`typedArray[index]`).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `typedArray` is not one of the allowed integer types.
- {{jsxref("RangeError")}}
  - : Thrown if `index` is out of bounds in the `typedArray`.

## Description

The bitwise OR operation yields 1, if either `a` or `b` are 1.
The truth table for the OR operation is:

| `a` | `b` | `a \| b` |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

For example, a bitwise OR of `5 | 1` results in `0101` which is 5
in decimal.

```plain
5  0101
1  0001
   ----
5  0101
```

## Examples

### Using or

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 2;

Atomics.or(ta, 0, 1); // returns 2, the old value
Atomics.load(ta, 0); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.and()")}}
- {{jsxref("Atomics.xor()")}}
