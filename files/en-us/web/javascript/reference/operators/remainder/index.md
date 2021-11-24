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

Note that while in most languages, ‘%’ is a remainder operator, in some (e.g. [Python,
Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) it is a modulo operator. 
For two values of the same sign, the two are equivalent, but
when the dividend and divisor are of different signs, they give different results. To
obtain a modulo in JavaScript, in place of `a % n`, use
`((a % n ) + n ) % n`.

## Syntax

```js
x % y
```

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

### Remainder with Infinity

```js
Infinity % 2 // NaN
Infinity % 0 // NaN
Infinity % Infinity // NaN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Addition
  operator](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction
  operator](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division
  operator](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication
  operator](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Exponentiation
  operator](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment
  operator](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement
  operator](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary
  negation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus
  operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [Remainder operator vs. modulo operator](https://2ality.com/2019/08/remainder-vs-modulo.html)
- [Mod and Remainder are not the Same](https://rob.conery.io/2018/08/21/mod-and-remainder-are-not-the-same/)
