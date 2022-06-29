---
title: Right shift (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
tags:
  - Bitwise operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.right_shift
---
{{jsSidebar("Operators")}}

The **right shift operator (`>>`)** shifts the first
operand the specified number of bits, modulo 32, to the right. Excess bits shifted off to the right
are discarded. Copies of the leftmost bit are shifted in from the left. Since the new
leftmost bit has the same value as the previous leftmost bit, the sign bit (the leftmost
bit) does not change. Hence the name "sign-propagating".

{{EmbedInteractiveExample("pages/js/expressions-right-shift.html")}}

## Syntax

```js
a >> b
```

## Description

This operator shifts the first operand the specified number of bits to the right.
Excess bits shifted off to the right are discarded. Copies of the leftmost bit are
shifted in from the left. Since the new leftmost bit has the same value as the previous
leftmost bit, the sign bit (the leftmost bit) does not change. Hence the name
"sign-propagating".

For example, `9 >> 2` yields 2:

```js
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Likewise, `-9 >> 2` yields `-3`, because the sign is
preserved:

```js
     -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
```

The left operand will be converted to a 32-bit integer, which means floating point numbers will be truncated, and number not within the 32-bit bounds will over-/underflow.

The right operand will be converted to an unsigned 32-bit integer and then taken modulo 32, so the actual shift offset will always be a positive integer between 0 and 31, inclusive. For example, `100 >> 32` is the same as `100 >> 0` (and produces `100`) because 32 modulo 32 is 0.

## Examples

### Using right shift

```js
 9 >> 2; //  2
-9 >> 2; // -3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Bitwise operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators)
- [Right shift assignment operator](/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)
