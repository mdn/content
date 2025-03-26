---
title: Bitwise NOT (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
page-type: javascript-operator
browser-compat: javascript.operators.bitwise_not
---

{{jsSidebar("Operators")}}

The **bitwise NOT (`~`)** operator returns a number or BigInt whose binary representation has a `1` in each bit position for which the corresponding bit of the operand is `0`, and a `0` otherwise.

{{InteractiveExample("JavaScript Demo: Bitwise NOT (~) operator")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = -3; // 11111111111111111111111111111101

console.log(~a); // 11111111111111111111111111111010
// Expected output: -6

console.log(~b); // 00000000000000000000000000000010
// Expected output: 2
```

## Syntax

```js-nolint
~x
```

## Description

The `~` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). For numbers, the operator returns a 32-bit integer. For BigInts, the operator returns a BigInt. It first [coerces the operand to a numeric value](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) and tests the type of it. It performs BigInt NOT if the operand becomes a BigInt; otherwise, it converts the operand to a [32-bit integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) and performs number bitwise NOT.

The operator operates on the operands' bit representations in [two's complement](https://en.wikipedia.org/wiki/Two's_complement). The operator is applied to each bit, and the result is constructed bitwise.

The truth table for the NOT operation is:

| x   | NOT x |
| --- | ----- |
| 0   | 1     |
| 1   | 0     |

```plain
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

### Numbers

Bitwise NOTing any number representable as a 32-bit signed integer `x` yields `-(x + 1)`. For example, `~-5` yields `4`.

Numbers with more than 32 bits as a signed integer get their most significant bits discarded before the bitwise operation is performed. For example:

| Binary | Decimal |
|-------:|--------:|
`11100110111110100000000000000110000000000001`<br>Truncated: `10100000000000000110000000000001` | 15872588537857<br>2684379137
`11111111111111111111111111111111`<br>Truncated: `11111111111111111111111111111111` | -1<br>-1
`011111111111111111111111111111111`<br>Truncated: `11111111111111111111111111111111` | 4294967295 (2<sup>32</sup> - 1)<br>-1

Likewise, any non-integer part is also discarded. As a result, bitwise NOTing any number `x` twice returns `x` converted to a 32-bit integer, so `~~x` is occasionally used as a way of truncating arbitrary numbers to integers. However, [`Math.trunc()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers) is a better general-purpose method of truncating numbers, as it doesn't suffer from 32-bit integer overflow, and typically has near-identical performance in modern JavaScript engines.

### BigInts

For BigInts, no truncation takes place. Conceptually, positive BigInts have an infinite number of leading `0` bits, and negative BigInts have an infinite number of leading `1` bits.

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
