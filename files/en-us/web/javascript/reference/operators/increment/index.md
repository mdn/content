---
title: Increment (++)
slug: Web/JavaScript/Reference/Operators/Increment
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.increment
---
{{jsSidebar("Operators")}}

The increment operator (`++`) increments (adds one to) its operand and
returns a value.

{{EmbedInteractiveExample("pages/js/expressions-increment.html")}}

## Syntax

```js
x++
++x
```

## Description

If used postfix, with operator after operand (for example,
`x++`), the increment operator increments and returns the value
before incrementing.

If used prefix, with operator before operand (for example,
`++x`), the increment operator increments and returns the value
after incrementing.

## Examples

### Postfix increment

```js
let x = 3;
y = x++;

// y = 3
// x = 4
```

### Prefix increment

```js
let a = 2;
b = ++a;

// a = 3
// b = 3
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
