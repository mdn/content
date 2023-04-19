---
title: Bitwise NOT (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
page-type: javascript-operator
browser-compat: javascript.operators.bitwise_not
---

{{jsSidebar("Operators")}}

The **bitwise NOT (`~`)** operator returns a number or BigInt whose binary representation has a `1` in each bit position for which the corresponding bit of the operand is `0`, and a `0` otherwise.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-not.html")}}

## Syntax

```js-nolint
~x
```

## Description

The `~` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). For numbers, the operator returns a 32-bit integer. For BigInts, the operator returns a BigInt. It first [coerces the operand to a numeric value](/en-US/docs/Web/JavaScript/Data_structures#numeric_coercion) and tests the type of it. It performs BigInt NOT if the operand becomes a BigInt; otherwise, it converts the operand to a [32-bit integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) and performs number bitwise NOT.

The operator operates on the operands' bit representations in [two's complement](https://en.wikipedia.org/wiki/Two's_complement). The operator is applied to each bit, and the result is constructed bitwise.

The truth table for the `NOT` operation is:

| x   | NOT x |
| --- | ----- |
| 0   | 1     |
| 1   | 0     |

```
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

Numbers with more than 32 bits get their most significant bits discarded. For example, the following integer with more than 32 bits will be converted to a 32-bit integer:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

For BigInts, there's no truncation. Conceptually, understand positive BigInts as having an infinite number of leading `0` bits, and negative BigInts having an infinite number of leading `1` bits.

Bitwise NOTing any 32-bit integer `x` yields `-(x + 1)`. For example, `~-5` yields `4`.

Bitwise NOTing any number `x` twice returns `x` converted to a 32-bit integer. Do not use `~~x` to truncate numbers to integers; use [`Math.trunc()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers) instead. Due to using 32-bit representation for numbers, both `~-1` and `~4294967295` (2<sup>32</sup> - 1) result in `0`.

## Examples

### Using bitwise NOT

```js
~0; // -1
~-1; // 0
~1; // -2

~0n; // -1n
~4294967295n; // -4294967296n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Bitwise operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
