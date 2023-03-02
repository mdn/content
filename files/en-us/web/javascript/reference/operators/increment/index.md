---
title: Increment (++)
slug: Web/JavaScript/Reference/Operators/Increment
page-type: javascript-operator
browser-compat: javascript.operators.increment
---

{{jsSidebar("Operators")}}

The **increment (`++`)** operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.

{{EmbedInteractiveExample("pages/js/expressions-increment.html")}}

## Syntax

```js-nolint
x++
++x
```

## Description

If used postfix, with operator after operand (for example, `x++`), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, `++x`), the increment operator increments and returns the value after incrementing.

The increment operator can only be applied on operands that are references (variables and object properties; i.e. valid [assignment targets](/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)). `++x` itself evaluates to a value, not a reference, so you cannot chain multiple increment operators together.

```js example-bad
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Examples

### Postfix increment

```js
let x = 3;
const y = x++;

// x = 4
// y = 3
```

### Prefix increment

```js
let x = 3;
const y = ++x;

// x = 4
// y = 4
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
- [Decrement operator](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
