---
title: BigInt.asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
page-type: javascript-static-method
browser-compat: javascript.builtins.BigInt.asUintN
---

{{JSRef}}

The **`BigInt.asUintN()`** static method truncates a `BigInt` value to the given number of least significant bits and returns that value as an unsigned integer.

{{InteractiveExample("JavaScript Demo: BigInt.asUintN()", "taller")}}

```js interactive-example
const U64_CEIL = 2n ** 64n;

console.log(BigInt.asUintN(64, U64_CEIL - 1n));
// 18446744073709551615n (2n ** 64n - 1n, the maximum non-wrapping value)
console.log(BigInt.asUintN(64, U64_CEIL));
// 0n (wraps to zero)
console.log(BigInt.asUintN(64, U64_CEIL + 1n));
// 1n
console.log(BigInt.asUintN(64, U64_CEIL * 2n));
// 0n (wraps on multiples)
console.log(BigInt.asUintN(64, U64_CEIL * -42n));
// 0n (also wraps on negative multiples)
```

## Syntax

```js-nolint
BigInt.asUintN(bits, bigint)
```

### Parameters

- `bits`
  - : The amount of bits available for the returned BigInt. Should be an integer between 0 and 2<sup>53</sup> - 1, inclusive.
- `bigint`
  - : The BigInt value to truncate to fit into the supplied bits.

### Return value

The value of `bigint` modulo 2^`bits`, as an unsigned integer.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `bits` is negative or greater than 2<sup>53</sup> - 1.

## Description

The `BigInt.asUintN` method truncates a `BigInt` value to the given number of bits, and interprets the result as an unsigned integer. Unsigned integers have no sign bits and are always non-negative. For example, for `BigInt.asUintN(4, 25n)`, the value `25n` is truncated to `9n`:

```plain
25n = 00011001 (base 2)
         ^==== Use only the four remaining bits
===>      1001 (base 2) = 9n
```

> **Note:** `BigInt` values are always encoded as two's complement in binary.

Unlike similar language APIs such as {{jsxref("Number.prototype.toExponential()")}}, `asUintN` is a static property of {{jsxref("BigInt")}}, so you always use it as `BigInt.asUintN()`, rather than as a method of a BigInt value. Exposing `asUintN()` as a "standard library function" allows [interop with asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

## Examples

### Staying in 64-bit ranges

The `BigInt.asUintN()` method can be useful to stay in the range of 64-bit arithmetic.

```js
const max = 2n ** 64n - 1n;

BigInt.asUintN(64, max); // 18446744073709551615n

BigInt.asUintN(64, max + 1n); // 0n
// zero because of overflow: the lowest 64 bits are all zeros
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("BigInt")}}
- {{jsxref("BigInt.asIntN()")}}
