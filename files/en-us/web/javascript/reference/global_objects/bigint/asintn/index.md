---
title: BigInt.asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
tags:
  - BigInt
  - JavaScript
  - Method
  - Reference
  - asIntN
browser-compat: javascript.builtins.BigInt.asIntN
---
{{JSRef}}

The **`BigInt.asIntN`** static method clamps a `BigInt` value to the given number of bits, and returns that value as a signed integer.

{{EmbedInteractiveExample("pages/js/bigint-asintn.html", "taller")}}

## Syntax

```js
BigInt.asIntN(bits, bigint);
```

### Parameters

- `bits`
  - : The amount of bits available for the integer size.
- `bigint`
  - : The BigInt value to clamp to fit into the supplied bits.

### Returns

The value of `bigint` modulo 2^`bits`, as a signed integer.

## Description

The `BigInt.asIntN` method clamps a `BigInt` value to the given number of bits, and interprets the result as a signed integer. For example, for `BigInt.asIntN(3, 25n)`, the value `25n` is clamped to `1n`:

```plain
25n = 00011001 (base 2)
          ^=== Clamp to three remaining bits
===>       001 (base 2) = 1n
```

If the leading bit of the remaining number is `1`, the result is negative. For example, `BigInt.asIntN(4, 25n)` yields `-7n`, because `1001` is the encoding of `-7` under two's complement:

```plain
25n = 00011001 (base 2)
         ^==== Clamp to four remaining bits
===>      1001 (base 2) = -7n
```

> **Note:** `BigInt` values are always encoded as two's complement in binary.

## Examples

### Staying in 64-bit ranges

The `BigInt.asIntN()` method can be useful to stay in the range of 64-bit arithmetic.

```js
const max = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(64, max);
// ↪ 9223372036854775807n

BigInt.asIntN(64, max + 1n);
// ↪ -9223372036854775808n
// negative because the 64th bit of 2^63 is 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("BigInt")}}
- {{JSxRef("BigInt.asUintN()")}}
