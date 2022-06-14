---
title: Remainder (%)
slug: Web/JavaScript/Reference/Operators/Remainder
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.remainder
---
{{jsSidebar("Operators")}}

The remainder operator (`%`) returns the remainder left over when one
operand is divided by a second operand. It always takes the sign of the dividend.

{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}

## Syntax

```js
x % y
```

## Description

For the operation `n % d`, `n` is called the dividend and `d` is called the divisor. The operation returns `NaN` if one of the operands is `NaN`, `n` is ±Infinity, or if `d` is ±0. Otherwise, if `d` is ±Infinity or if `n` is ±0, the dividend `n` is returned.

When both operands are non-zero and finite, the remainder `r` is calculated as `r := n - d * q` where `q` is the integer such that `r` has the same sign as the dividend `n` while being as close to 0 as possible.

Note that while in most languages, '%' is a remainder operator, in some (e.g. [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) it is a modulo operator. Modulo is defined as `k := n - d * q` where `q` is the integer such that `k` has the same sign as the divisor `d` while being as close to 0 as possible. For two values of the same sign, the two are equivalent, but when the operands are of different signs, the modulo result always has the same sign as the _divisor_, while the remainder has the same sign as the _dividend_, which can make them differ by one unit of `d`. To obtain a modulo in JavaScript, in place of `n % d`, use `((n % d) + d) % d`. In JavaScript, the modulo operation (which doesn't have a dedicated operator) is used to normalize the second operand of bitwise shift operators ([`<<`](/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift), etc.), making the offset always a positive value.

## Examples

### Remainder with positive dividend

```js
 13 % 5  //  3
 1 % -2 //  1
 1 % 2  //  1
 2 % 3  //  2
5.5 % 2 // 1.5
```

### Remainder with negative dividend

```js
-13 % 5 // -3
-1 % 2  // -1
-4 % 2  // -0
```

### Remainder with NaN

```js
NaN % 2 // NaN
```

### Remainder with Infinity

```js
Infinity % 2 // NaN
Infinity % 0 // NaN
Infinity % Infinity // NaN
2 % Infinity // 2
0 % Infinity // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Addition operator](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Exponentiation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [Remainder operator vs. modulo operator](https://2ality.com/2019/08/remainder-vs-modulo.html)
- [Mod and Remainder are not the Same](https://bigmachine.io/2018/08/21/mod-and-remainder-are-not-the-same-2/)
