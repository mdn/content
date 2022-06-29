---
title: BigInt.asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
tags:
  - BigInt
  - JavaScript
  - Method
  - Reference
  - asUintN
browser-compat: javascript.builtins.BigInt.asUintN
---
{{JSRef}}

The **`BigInt.asUintN`** static method clamps a `BigInt` value to the given number of bits, and returns that value as an unsigned integer.

{{EmbedInteractiveExample("pages/js/bigint-asuintn.html", "taller")}}

## Syntax

```js
BigInt.asUintN(bits, bigint);
```

### Parameters

- `bits`
  - : The amount of bits available for the integer size.
- `bigint`
  - : The BigInt value to clamp to fit into the supplied bits.

### Returns

The value of `bigint` modulo 2^`bits`, as an unsigned integer.

## Description

The `BigInt.asUintN` method clamps a `BigInt` value to the given number of bits, and interprets the result as an unsigned integer. Unsigned integers have no sign bits and are always non-negative. For example, for `BigInt.asUintN(4, 25n)`, the value `25n` is clamped to `9n`:

```plain
25n = 00011001 (base 2)
         ^==== Clamp to four remaining bits
===>      1001 (base 2) = 9n
```

> **Note:** `BigInt` values are always encoded as two's complement in binary.

## Examples

### Staying in 64-bit ranges

The `BigInt.asUintN()` method can be useful to stay in the range of 64-bit arithmetic.

```js
const max = 2n ** 64n - 1n;

BigInt.asUintN(64, max);
// ↪ 18446744073709551615n

BigInt.asUintN(64, max + 1n);
// ↪ 0n
// zero because of overflow: the lowest 64 bits are all zeros
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("BigInt")}}
- {{JSxRef("BigInt.asIntN()")}}
