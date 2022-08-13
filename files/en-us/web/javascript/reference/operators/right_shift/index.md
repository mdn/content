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

The **right shift operator (`>>`)** returns the signed number represented by the result of performing a sign-extending shift of the binary representation of the first operand (evaluated as a [two's complement](https://en.wikipedia.org/wiki/Two's_complement) bit string) to the right by the number of bits, modulo 32, specified in the second operand. Excess bits shifted off to the right are discarded, and copies of the leftmost bit are shifted in from the left.

The resulting binary representation is evaluated as a [two's complement](https://en.wikipedia.org/wiki/Two's_complement) bit string. So if the leftmost bit in the resulting binary representation is `1`, the resulting number is negative. Because the leftmost bit (the sign bit) of the result will always have the same value as the leftmost bit of the first operand, the sign of the resulting number is the same as the sign of the first operand, hence the name "sign-extending right shift" or "sign-filling right shift". This operation is also commonly referred to as an "arithmetic right shift".

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

Consider the 32-bit binary representations of the decimal (base 10) numbers `9` and `-9`:

```
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Notice that the binary representation of the negative decimal (base 10) number `-9` is the [two's complement](https://en.wikipedia.org/wiki/Two's_complement) of the binary representation of the positive decimal (base 10) number `9`. That is, it's calculated by inverting all the bits of `00000000000000000000000000001001` and adding `1`.

In both cases, the sign of the binary number is given by its leftmost bit: for the positive decimal number `9`, the leftmost bit of the binary representation is `0`, and for the negative decimal number `-9`, the leftmost bit of the binary representation is `1`.

Given those binary representations of the decimal (base 10) numbers `9`, and `-9`:

`9 >> 2` yields 2:

```
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Notice how two rightmost bits, `01`, have been shifted off, and two copies of the leftmost bit, `0` have been shifted in from the left.

`-9 >> 2` yields `-3`:

```
     -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
```

Notice how two rightmost bits, `11`, have been shifted off. But as far as the leftmost bits: in this case, the leftmost bit is `1`. So two copies of that leftmost `1` bit have been shifted in from the left — which preserves the negative sign.

The binary representation `11111111111111111111111111111101` is equal to the negative decimal (base 10) number `-3`, because all negative integers are stored as [two's complements](https://en.wikipedia.org/wiki/Two's_complement), and this one can be calculated by inverting all the bits of the binary representation of the positive decimal (base 10) number `3`, which is `00000000000000000000000000000011`, and then adding one.

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
