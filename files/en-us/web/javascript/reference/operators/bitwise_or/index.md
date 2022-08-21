---
title: Bitwise OR (|)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR
tags:
  - Bitwise operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.bitwise_or
---
{{jsSidebar("Operators")}}

The bitwise OR operator (`|`) returns a `1` in each bit position
for which the corresponding bits of either or both operands are `1`s.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-or.html", "shorter")}}

## Syntax

```js
a | b
```

## Description

The operands are converted to 32-bit integers and expressed by a series of bits (zeroes
and ones). Numbers with more than 32 bits get their most significant bits discarded. For
example, the following integer with more than 32 bits will be converted to a 32-bit
integer:

```
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Each bit in the first operand is paired with the corresponding bit in the second
operand: _first bit_ to _first bit_, _second bit_ to _second
bit_, and so on.

The operator is applied to each pair of bits, and the result is constructed bitwise.

The truth table for the OR operation is:

| a   | b   | a OR b |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 1      |

```
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 | 9 (base 10) = 00000000000000000000000000001111 (base 2) = 15 (base 10)
```

Bitwise ORing any number `x` with `0` yields
`x` converted to a 32-bit integer.

## Examples

### Using bitwise OR

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 | 9;
// 15 (00000000000000000000000000001111)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Bitwise operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators)
- [Bitwise OR assignment operator](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
