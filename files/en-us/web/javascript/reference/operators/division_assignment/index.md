---
title: Division assignment (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
page-type: javascript-operator
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.division_assignment
---

{{jsSidebar("Operators")}}

The **division assignment (`/=`)** operator divides a variable by the value of
the right operand and assigns the result to the variable.

{{EmbedInteractiveExample("pages/js/expressions-division-assignment.html")}}

## Syntax

```js-nolint
x /= y // x = x / y
```

## Examples

### Using division assignment

```js
let bar = 5;

bar /= 2; // 2.5
bar /= 2; // 1.25
bar /= 0; // Infinity
bar /= "foo"; // NaN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators)
- [Division operator](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
