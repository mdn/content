---
title: Right shift (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
page-type: javascript-operator
browser-compat: javascript.operators.right_shift
---

{{jsSidebar("Operators")}}

The **right shift (`>>`)** operator returns a number or BigInt whose binary representation is the first operand shifted by the specified number of bits to the right. Excess bits shifted off to the right are discarded, and copies of the leftmost bit are shifted in from the left. This operation is also called "sign-propagating right shift" or "arithmetic right shift", because the sign of the resulting number is the same as the sign of the first operand.

{{InteractiveExample("JavaScript Demo: Right shift (>>) operator")}}

```js interactive-example
const a = 5; //  00000000000000000000000000000101
const b = 2; //  00000000000000000000000000000010
const c = -5; //  11111111111111111111111111111011

console.log(a >> b); //  00000000000000000000000000000001
// Expected output: 1

console.log(c >> b); //  11111111111111111111111111111110
// Expected output: -2
```

## Syntax

```js-nolint
x >> y
```

## Description

The `>>` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). For numbers, the operator returns a 32-bit integer. For BigInts, the operator returns a BigInt. It first [coerces both operands to numeric values](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) and tests the types of them. It performs BigInt right shift if both operands become BigInts; otherwise, it converts both operands to [32-bit integers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) and performs number right shift. A {{jsxref("TypeError")}} is thrown if one operand becomes a BigInt but the other becomes a number.

Since the new leftmost bit has the same value as the previous leftmost bit, the sign bit (the leftmost bit) does not change. Hence the name "sign-propagating".

The operator operates on the left operand's bit representation in [two's complement](https://en.wikipedia.org/wiki/Two's_complement). Consider the 32-bit binary representations of the decimal (base 10) numbers `9` and `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

The binary representation under two's complement of the negative decimal (base 10) number `-9` is formed by inverting all the bits of its opposite number, which is `9` and `00000000000000000000000000001001` in binary, and adding `1`.

In both cases, the sign of the binary number is given by its leftmost bit: for the positive decimal number `9`, the leftmost bit of the binary representation is `0`, and for the negative decimal number `-9`, the leftmost bit of the binary representation is `1`.

Given those binary representations of the decimal (base 10) numbers `9`, and `-9`:

`9 >> 2` yields 2:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Notice how two rightmost bits, `01`, have been shifted off, and two copies of the leftmost bit, `0` have been shifted in from the left.

`-9 >> 2` yields `-3`:

```plain
     -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
```

Notice how two rightmost bits, `11`, have been shifted off. But as far as the leftmost bits: in this case, the leftmost bit is `1`. So two copies of that leftmost `1` bit have been shifted in from the left — which preserves the negative sign.

The binary representation `11111111111111111111111111111101` is equal to the negative decimal (base 10) number `-3`, because all negative integers are stored as [two's complements](https://en.wikipedia.org/wiki/Two's_complement), and this one can be calculated by inverting all the bits of the binary representation of the positive decimal (base 10) number `3`, which is `00000000000000000000000000000011`, and then adding one.

If the left operand is a number with more than 32 bits, it will get the most significant bits discarded. For example, the following integer with more than 32 bits will be converted to a 32-bit integer:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

The right operand will be converted to an unsigned 32-bit integer and then taken modulo 32, so the actual shift offset will always be a positive integer between 0 and 31, inclusive. For example, `100 >> 32` is the same as `100 >> 0` (and produces `100`) because 32 modulo 32 is 0.

> [!WARNING]
> You may see people using `>> 0` to truncate numbers to integers. Right shifting any number `x` by `0` returns `x` converted to a 32-bit integer, which additionally removes leading bits for numbers outside the range -2147483648 to 2147483647. Use [`Math.trunc()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers) instead.

For BigInts, there's no truncation. Conceptually, understand positive BigInts as having an infinite number of leading `0` bits, and negative BigInts having an infinite number of leading `1` bits.

## Examples

### Using right shift

```js
9 >> 2; // 2
-9 >> 2; // -3

9n >> 2n; // 2n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Bitwise operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Right shift assignment (`>>=`)](/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)
- [Unsigned right shift (`>>>`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
