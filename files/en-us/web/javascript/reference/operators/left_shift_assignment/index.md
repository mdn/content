---
title: Left shift assignment (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
page-type: javascript-operator
browser-compat: javascript.operators.left_shift_assignment
---

{{jsSidebar("Operators")}}

The **left shift assignment (`<<=`)** operator moves the specified amount of bits to the left and assigns the result to the variable.

{{EmbedInteractiveExample("pages/js/expressions-left-shift-assignment.html", "shorter")}}

## Syntax

```js-nolint
x <<= y // x = x << y
```

## Examples

### Using left shift assignment

```js
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20
// 00000000000000000000000000010100
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators)
- [Left shift operator](/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift)
