---
title: BigInt.asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
page-type: javascript-static-method
browser-compat: javascript.builtins.BigInt.asIntN
---

{{JSRef}}

The **`BigInt.asIntN()`** static method truncates a `BigInt` value to the given number of least significant bits and returns that value as a signed integer.

{{EmbedInteractiveExample("pages/js/bigint-asintn.html", "taller")}}

## Syntax

```js-nolint
BigInt.asIntN(bits, bigint)
```

### Parameters

- `bits`
  - : The amount of bits available for the returned BigInt. Should be an integer between 0 and 2<sup>53</sup> - 1, inclusive.
- `bigint`
  - : The BigInt value to truncate to fit into the supplied bits.

### Return value

The value of `bigint` modulo 2^`bits`, as a signed integer.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `bits` is negative or greater than 2<sup>53</sup> - 1.

## Description

The `BigInt.asIntN` method truncates a `BigInt` value to the given number of bits, and interprets the result as a signed integer. For example, for `BigInt.asIntN(3, 25n)`, the value `25n` is truncated to `1n`:

```plain
25n = 00011001 (base 2)
          ^=== Use only the three remaining bits
===>       001 (base 2) = 1n
```

If the leading bit of the remaining number is `1`, the result is negative. For example, `BigInt.asIntN(4, 25n)` yields `-7n`, because `1001` is the encoding of `-7` under two's complement:

```plain
25n = 00011001 (base 2)
         ^==== Use only the four remaining bits
===>      1001 (base 2) = -7n
```

> **Note:** `BigInt` values are always encoded as two's complement in binary.

Unlike similar language APIs such as {{jsxref("Number.prototype.toExponential()")}}, `asIntN` is a static property of {{jsxref("BigInt")}}, so you always use it as `BigInt.asIntN()`, rather than as a method of a BigInt value. Exposing `asIntN()` as a "standard library function" allows [interop with asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

## Examples

### Staying in 64-bit ranges

The `BigInt.asIntN()` method can be useful to stay in the range of 64-bit arithmetic.

```js
const max = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(64, max); // 9223372036854775807n

BigInt.asIntN(64, max + 1n); // -9223372036854775808n
// negative because the 64th bit of 2^63 is 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("BigInt")}}
- {{JSxRef("BigInt.asUintN()")}}
