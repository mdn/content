---
title: Subtraction assignment (-=)
slug: Web/JavaScript/Reference/Operators/Subtraction_assignment
page-type: javascript-operator
browser-compat: javascript.operators.subtraction_assignment
---

{{jsSidebar("Operators")}}

The **subtraction assignment (`-=`)** operator performs [subtraction](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction) on the two operands and assigns the result to the left operand.

{{EmbedInteractiveExample("pages/js/expressions-subtraction-assignment.html")}}

## Syntax

```js-nolint
x -= y
```

## Description

`x -= y` is equivalent to `x = x - y`.

## Examples

### Using subtraction assignment

```js
let bar = 5;

bar -= 2; // 3
bar -= "foo"; // NaN

let foo = 3n;
foo -= 2n; // 1n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Subtraction (`-`)](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
