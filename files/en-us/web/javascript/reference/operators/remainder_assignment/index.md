---
title: Remainder assignment (%=)
slug: Web/JavaScript/Reference/Operators/Remainder_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.remainder_assignment
---
{{jsSidebar("Operators")}}

The remainder assignment operator (`%=`) divides a variable by the value of
the right operand and assigns the remainder to the variable.

{{EmbedInteractiveExample("pages/js/expressions-remainder-assignment.html")}}

## Syntax

```js
x %= y // x = x % y
```

## Examples

### Using remainder assignment

```js
// Assuming the following variable
//  bar = 5

bar %= 2     // 1
bar %= 'foo' // NaN
bar %= 0     // NaN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [Remainder operator](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
