---
title: Unsigned right shift (>>>)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift
page-type: javascript-operator
browser-compat: javascript.operators.unsigned_right_shift
---

{{jsSidebar("Operators")}}

The **unsigned right shift (`>>>`)** operator returns a number whose binary representation is the first operand shifted by the specified number of bits to the right. Excess bits shifted off to the right are discarded, and zero bits are shifted in from the left. This operation is also called "zero-filling right shift", because the sign bit becomes `0`, so the resulting number is always positive. Unsigned right shift does not accept [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) values.

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift.html")}}

## Syntax

```js-nolint
x >>> y
```

## Description

Unlike other arithmetic and bitwise operators, the unsigned right shift operator does not accept [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) values. This is because it fills the leftmost bits with zeroes, but conceptually, BigInts have an infinite number of leading sign bits, so there's no "leftmost bit" to fill with zeroes.

The operator operates on the left operand's bit representation in [two's complement](https://en.wikipedia.org/wiki/Two's_complement). Consider the 32-bit binary representations of the decimal (base 10) numbers `9` and `-9`:

```
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

The binary representation under two's complement of the negative decimal (base 10) number `-9` is formed by inverting all the bits of its opposite number, which is `9` and `00000000000000000000000000001001` in binary, and adding `1`.

In both cases, the sign of the binary number is given by its leftmost bit: for the positive decimal number `9`, the leftmost bit of the binary representation is `0`, and for the negative decimal number `-9`, the leftmost bit of the binary representation is `1`.

Given those binary representations of the decimal (base 10) numbers `9`, and `-9`:

For the positive number `9`, zero-fill right shift and [sign-propagating right shift](/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift) yield the same result: `9 >>> 2` yields `2`, the same as `9 >> 2`:

```
      9 (base 10): 00000000000000000000000000001001 (base 2)
                   --------------------------------
9 >>  2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Notice how two rightmost bits, `01`, have been shifted off, and two zeroes have been shifted in from the left.

However, notice what happens for `-9`: `-9 >> 2` ([sign-propagating right shift](/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift)) yields `-3`, but `-9 >>> 2` (zero-fill right shift) yields 1073741821:

```
      -9 (base 10): 11111111111111111111111111110111 (base 2)
                    --------------------------------
-9 >>  2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
-9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
```

Notice how two rightmost bits, `11`, have been shifted off. For `-9 >> 2` ([sign-propagating right shift](/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift)), two copies of the leftmost `1` bit have been shifted in from the left, which preserves the negative sign. On the other hand, for `-9 >>> 2` (zero-fill right shift), zeroes have instead been shifted in from the left, so the negative sign of the number is not preserved, and the result is instead a (large) positive number.

If the left operand is a number with more than 32 bits, it will get the most significant bits discarded. For example, the following integer with more than 32 bits will be converted to a 32-bit integer:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

The right operand will be converted to an unsigned 32-bit integer and then taken modulo 32, so the actual shift offset will always be a positive integer between 0 and 31, inclusive. For example, `100 >>> 32` is the same as `100 >>> 0` (and produces `100`) because 32 modulo 32 is 0.

## Examples

### Using unsigned right shift

```js
9 >>> 2; // 2
-9 >>> 2; // 1073741821
```

Unsigned right shift doesn't work with BigInts.

```js
9n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Bitwise operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Unsigned right shift assignment operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)
