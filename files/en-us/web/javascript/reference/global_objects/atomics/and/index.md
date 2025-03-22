---
title: Atomics.and()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/and
page-type: javascript-static-method
browser-compat: javascript.builtins.Atomics.and
---

{{JSRef}}

The **`Atomics.and()`** static
method computes a bitwise AND with a given value at a given position in the array, and
returns the old value at that position. This atomic operation guarantees that no other
write happens until the modified value is written back.

{{InteractiveExample("JavaScript Demo: Atomics.and()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 (0111) AND 2 (0010) = 2 (0010)
console.log(Atomics.and(uint8, 0, 2));
// Expected output: 7

console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## Syntax

```js-nolint
Atomics.and(typedArray, index, value)
```

### Parameters

- `typedArray`
  - : An integer typed array. One of {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, or
    {{jsxref("BigUint64Array")}}.
- `index`
  - : The position in the `typedArray` to compute the bitwise AND.
- `value`
  - : The number to compute the bitwise AND with.

### Return value

The old value at the given position
(`typedArray[index]`).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `typedArray` is not one of the allowed integer types.
- {{jsxref("RangeError")}}
  - : Thrown if `index` is out of bounds in the `typedArray`.

## Description

The bitwise AND operation only yields 1, if both `a` and `b` are
1\. The truth table for the AND operation is:

| `a` | `b` | `a & b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

For example, a bitwise AND of `5 & 1` results in `0001` which
is 1 in decimal.

```plain
5  0101
1  0001
   ----
1  0001
```

## Examples

### Using and()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.and(ta, 0, 1); // returns 5, the old value
Atomics.load(ta, 0); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.or()")}}
- {{jsxref("Atomics.xor()")}}
