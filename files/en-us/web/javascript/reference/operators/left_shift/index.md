---
title: Left shift (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
page-type: javascript-operator
browser-compat: javascript.operators.left_shift
---

{{jsSidebar("Operators")}}

The **left shift (`<<`)** operator returns a number or BigInt whose binary representation is the first operand shifted by the specified number of bits to the left. Excess bits shifted off to the left are discarded, and zero bits are shifted in from the right.

{{EmbedInteractiveExample("pages/js/expressions-left-shift.html", "shorter")}}

## Syntax

```js-nolint
x << y
```

## Description

The `<<` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). For numbers, the operator returns a 32-bit integer. For BigInts, the operator returns a BigInt. It first [coerces both operands to numeric values](/en-US/docs/Web/JavaScript/Data_structures#numeric_coercion) and tests the types of them. It performs BigInt left shift if both operands becomes BigInts; otherwise, it converts both operands to [32-bit integers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) and performs number left shift. A {{jsxref("TypeError")}} is thrown if one operand becomes a BigInt but the other becomes a number.

The operator operates on the left operand's bit representation in [two's complement](https://en.wikipedia.org/wiki/Two's_complement). For example, `9 << 2` yields 36:

```
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
```

Bitwise a 32-bit integer `x` to the left by `y` bits yields `x * 2 ** y`. So for example, `9 << 3` is equivalent to `9 * (2 ** 3) = 9 * (8) = 72`.

If the left operand is a number with more than 32 bits, it will get the most significant bits discarded. For example, the following integer with more than 32 bits will be converted to a 32-bit integer:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

The right operand will be converted to an unsigned 32-bit integer and then taken modulo 32, so the actual shift offset will always be a positive integer between 0 and 31, inclusive. For example, `100 << 32` is the same as `100 << 0` (and produces `100`) because 32 modulo 32 is 0.

For BigInts, there's no truncation. Conceptually, understand positive BigInts as having an infinite number of leading `0` bits, and negative BigInts having an infinite number of leading `1` bits.

Left shifting any number `x` by `0` returns `x` converted to a 32-bit integer. Do not use `<< 0` to truncate numbers to integers; use [`Math.trunc()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers) instead.

## Examples

### Using left shift

```js
9 << 3; // 72

// 9 * (2 ** 3) = 9 * (8) = 72

9n << 3n; // 72n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Bitwise operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Left shift assignment operator](/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)
