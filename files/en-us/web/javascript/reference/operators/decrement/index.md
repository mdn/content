---
title: Decrement (--)
slug: Web/JavaScript/Reference/Operators/Decrement
page-type: javascript-operator
browser-compat: javascript.operators.decrement
---

{{jsSidebar("Operators")}}

The **decrement (`--`)** operator decrements (subtracts one from) its operand and returns the value before or after the decrement, depending on where the operator is placed.

{{EmbedInteractiveExample("pages/js/expressions-decrement.html")}}

## Syntax

```js-nolint
x--
--x
```

## Description

If used postfix, with operator after operand (for example, `x--`), the decrement operator decrements and returns the value before decrementing.

If used prefix, with operator before operand (for example, `--x`), the decrement operator decrements and returns the value after decrementing.

The decrement operator can only be applied on operands that are references (variables and object properties; i.e. valid [assignment targets](/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)). `--x` itself evaluates to a value, not a reference, so you cannot chain multiple decrement operators together.

```js example-bad
--(--x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Examples

### Postfix decrement

```js
let x = 3;
const y = x--;

// x = 2
// y = 3
```

### Prefix decrement

```js
let x = 3;
const y = --x;

// x = 2
// y = 2
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
