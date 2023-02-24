---
title: Left shift (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
page-type: javascript-operator
browser-compat: javascript.operators.left_shift
---

{{jsSidebar("Operators")}}

The **left shift (`<<`)** operator shifts the first operand the specified number of bits, modulo 32, to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.

{{EmbedInteractiveExample("pages/js/expressions-left-shift.html", "shorter")}}

## Syntax

```js-nolint
a << b
```

## Description

This operator shifts the first operand the specified number of bits to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.

For example, `9 << 2` yields 36:

```
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
```

Bitwise shifting any number `x` to the left by `y` bits yields `x * 2 ** y`.
So e.g.: `9 << 3` translates to: `9 * (2 ** 3) = 9 * (8) = 72`.

The left operand will be converted to a 32-bit integer, which means floating point numbers will be truncated, and number not within the 32-bit bounds will over-/underflow.

The right operand will be converted to an unsigned 32-bit integer and then taken modulo 32, so the actual shift offset will always be a positive integer between 0 and 31, inclusive. For example, `100 << 32` is the same as `100 << 0` (and produces `100`) because 32 modulo 32 is 0.

Left shifting any number `x` by `0` returns `x` converted to a 32-bit integer. Do not use `<< 0` to truncate numbers to integers; use [`Math.trunc()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers) instead.

## Examples

### Using left shift

```js
9 << 3; // 72

// 9 * (2 ** 3) = 9 * (8) = 72
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Bitwise operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators)
- [Left shift assignment operator](/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)
