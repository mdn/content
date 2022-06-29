---
title: Decrement (--)
slug: Web/JavaScript/Reference/Operators/Decrement
tags:
  - Decrement
  - JavaScript
  - Language feature
  - Operator
browser-compat: javascript.operators.decrement
---
{{jsSidebar("Operators")}}

The decrement operator (`--`) decrements (subtracts one from) its operand
and returns a value.

{{EmbedInteractiveExample("pages/js/expressions-decrement.html")}}

## Syntax

```js
x--
--x
```

## Description

If used postfix, with operator after operand (for example,
`x--`), the decrement operator decrements and returns the value
before decrementing.

If used prefix, with operator before operand (for example,
`--x`), the decrement operator decrements and returns the value
after decrementing.

## Examples

### Postfix decrement

```js
let x = 3;
y = x--;

// y = 3
// x = 2
```

### Prefix decrement

```js
let a = 2;
b = --a;

// a = 1
// b = 1
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
- [Remainder operator](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Unary negation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
