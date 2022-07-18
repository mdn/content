---
title: Division assignment (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.division_assignment
---
{{jsSidebar("Operators")}}

The division assignment operator (`/=`) divides a variable by the value of
the right operand and assigns the result to the variable.

{{EmbedInteractiveExample("pages/js/expressions-division-assignment.html")}}

## Syntax

```js
x /= y // x = x / y
```

## Examples

### Using division assignment

```js
// Assuming the following variable and that all operations are run in order
//  bar = 5

bar /= 2     // 2.5
bar /= 2     // 1.25
bar /= 0     // Infinity
bar /= 'foo' // NaN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [Division operator](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
