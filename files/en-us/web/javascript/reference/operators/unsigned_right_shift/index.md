---
title: Unsigned right shift (>>>)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift
tags:
  - Bitwise operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.unsigned_right_shift
---
{{jsSidebar("Operators")}}

The **unsigned right shift operator (`>>>`)**
(zero-fill right shift) shifts the first operand the specified number of bits, modulo 32, to the
right.

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift.html")}}

## Syntax

```js
a >>> b
```

## Description

This operator shifts the first operand the specified number of bits to the right.
Excess bits shifted off to the right are discarded. Zero bits are shifted in from the
left. The sign bit becomes `0`, so the result is always non-negative. Unlike
the other bitwise operators, zero-fill right shift returns an unsigned 32-bit integer.

For non-negative numbers, zero-fill right shift and sign-propagating right shift yield
the same result. For example, `9 >>> 2` yields 2, the same as
`9 >> 2`:

```js
      9 (base 10): 00000000000000000000000000001001 (base 2)
                   --------------------------------
9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

However, this is not the case for negative numbers. For example,
`-9 >>> 2` yields 1073741821, which is different than
`-9 >> 2` (which yields `-3`):

```js
      -9 (base 10): 11111111111111111111111111110111 (base 2)
                    --------------------------------
-9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
```

The left operand will be converted to an unsigned 32-bit integer, which means floating point numbers will be truncated, and number not within the 32-bit bounds will over-/underflow.

The right operand will be converted to an unsigned 32-bit integer and then taken modulo 32, so the actual shift offset will always be a positive integer between 0 and 31, inclusive. For example, `100 >>> 32` is the same as `100 >>> 0` (and produces `100`) because 32 modulo 32 is 0.

## Examples

### Using unsigned right shift

```js
 9 >>> 2; // 2
-9 >>> 2; // 1073741821
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Bitwise operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators)
- [Unsigned right shift assignment operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)
