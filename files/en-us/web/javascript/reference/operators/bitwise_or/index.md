---
title: Bitwise OR (|)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR
page-type: javascript-operator
browser-compat: javascript.operators.bitwise_or
---

{{jsSidebar("Operators")}}

The **bitwise OR (`|`)** operator returns a number or BigInt whose binary representation has a `1` in each bit position for which the corresponding bits of either or both operands are `1`.

{{InteractiveExample("JavaScript Demo: Bitwise OR (|) operator", "shorter")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

console.log(a | b); // 00000000000000000000000000000111
// Expected output: 7
```

## Syntax

```js-nolint
x | y
```

## Description

The `|` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). For numbers, the operator returns a 32-bit integer. For BigInts, the operator returns a BigInt. It first [coerces both operands to numeric values](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) and tests the types of them. It performs BigInt OR if both operands become BigInts; otherwise, it converts both operands to [32-bit integers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) and performs number bitwise OR. A {{jsxref("TypeError")}} is thrown if one operand becomes a BigInt but the other becomes a number.

The operator operates on the operands' bit representations in [two's complement](https://en.wikipedia.org/wiki/Two's_complement). Each bit in the first operand is paired with the corresponding bit in the second operand: _first bit_ to _first bit_, _second bit_ to _second bit_, and so on. The operator is applied to each pair of bits, and the result is constructed bitwise.

The truth table for the OR operation is:

| x   | y   | x OR y |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 1      |

```plain
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 | 9 (base 10) = 00000000000000000000000000001111 (base 2) = 15 (base 10)
```

Numbers with more than 32 bits get their most significant bits discarded. For example, the following integer with more than 32 bits will be converted to a 32-bit integer:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

> [!WARNING]
> You may see people using `| 0` to truncate numbers to integers. Bitwise ORing any number `x` with `0` returns `x` converted to a 32-bit integer, which additionally removes leading bits for numbers outside the range -2147483648 to 2147483647. Use [`Math.trunc()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers) instead.

For BigInts, there's no truncation. Conceptually, understand positive BigInts as having an infinite number of leading `0` bits, and negative BigInts having an infinite number of leading `1` bits.

## Examples

### Using bitwise OR

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 | 9;
// 15 (00000000000000000000000000001111)

14n | 9n; // 15n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Bitwise operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Bitwise OR assignment (`|=`)](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
