---
title: Division assignment (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
page-type: javascript-operator
browser-compat: javascript.operators.division_assignment
---

{{jsSidebar("Operators")}}

The **division assignment (`/=`)** operator performs [division](/en-US/docs/Web/JavaScript/Reference/Operators/Division) on the two operands and assigns the result to the left operand.

{{EmbedInteractiveExample("pages/js/expressions-division-assignment.html")}}

## Syntax

```js-nolint
x /= y
```

## Description

`x /= y` is equivalent to `x = x / y`.

## Examples

### Using division assignment

```js
let bar = 5;

bar /= 2; // 2.5
bar /= 2; // 1.25
bar /= 0; // Infinity
bar /= "foo"; // NaN

let foo = 3n;
foo /= 2n; // 1n
foo /= 2n; // 0n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Division (`/`)](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
