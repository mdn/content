---
title: Atomics.xor()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/xor
page-type: javascript-static-method
browser-compat: javascript.builtins.Atomics.xor
---

{{JSRef}}

The **`Atomics.xor()`** static
method computes a bitwise XOR with a given value at a given position in the array, and
returns the old value at that position. This atomic operation guarantees that no other
write happens until the modified value is written back.

{{EmbedInteractiveExample("pages/js/atomics-xor.html")}}

## Syntax

```js-nolint
Atomics.xor(typedArray, index, value)
```

### Parameters

- `typedArray`
  - : An integer typed array. One of {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, or
    {{jsxref("BigUint64Array")}}.
- `index`
  - : The position in the `typedArray` to compute the bitwise XOR.
- `value`
  - : The number to compute the bitwise XOR with.

### Return value

The old value at the given position (`typedArray[index]`).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `typedArray` is not one of the allowed integer types.
- {{jsxref("RangeError")}}
  - : Thrown if `index` is out of bounds in the `typedArray`.

## Description

The bitwise XOR operation yields 1, if `a` and `b` are different.
The truth table for the XOR operation is:

| `a` | `b` | `a ^ b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

For example, a bitwise XOR of `5 ^ 1` results in `0100` which is
4 in decimal.

```plain
5  0101
1  0001
   ----
4  0100
```

## Examples

### Using xor

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.xor(ta, 0, 1); // returns 5, the old value
Atomics.load(ta, 0); // 4
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.and()")}}
- {{jsxref("Atomics.or()")}}
