---
title: Multiplication assignment (*=)
slug: Web/JavaScript/Reference/Operators/Multiplication_assignment
page-type: javascript-operator
browser-compat: javascript.operators.multiplication_assignment
---

{{jsSidebar("Operators")}}

The **multiplication assignment (`*=`)** operator performs [multiplication](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication) on the two operands and assigns the result to the left operand.

{{EmbedInteractiveExample("pages/js/expressions-multiplication-assignment.html")}}

## Syntax

```js-nolint
x *= y
```

## Description

`x *= y` is equivalent to `x = x * y`.

## Examples

### Using multiplication assignment

```js
let bar = 5;

bar *= 2; // 10
bar *= "foo"; // NaN

let foo = 3n;
foo *= 2n; // 6n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Multiplication operator](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
