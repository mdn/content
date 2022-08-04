---
title: Bitwise NOT (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
tags:
  - Bitwise operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.bitwise_not
---
{{jsSidebar("Operators")}}

The bitwise NOT operator (`~`) inverts the bits of its operand. Like other bitwise operators, it converts the operand to a 32-bit signed integer

{{EmbedInteractiveExample("pages/js/expressions-bitwise-not.html")}}

## Syntax

```js
~a
```

## Description

The operand is converted to a 32-bit signed integer and expressed as a series of bits (zeroes
and ones). Numbers with more than 32 bits get their most significant bits discarded. For
example, the following integer, with more than 32 bits, will be converted to a 32-bit signed
integer:

```
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Each bit in the operand is inverted in the result.

The truth table for the `NOT` operation is:

| a   | NOT a |
| --- | ----- |
| 0   | 1     |
| 1   | 0     |

```
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

The 32-bit signed integer operand is inverted according to
[two's complement](https://en.wikipedia.org/wiki/Two%27s_complement). That is, the
presence of the most significant bit is used to express negative integers.

Bitwise NOTing any number `x` yields `-(x + 1)`. For example,
`~-5` yields `4`.

Note that due to using 32-bit representation for numbers both `~-1` and
`~4294967295` (2<sup>32</sup> - 1) results in `0`.

## Examples

### Using bitwise NOT

```js
~0;  // -1
~-1; // 0
~1;  // -2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Bitwise operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators)
