---
title: Unsigned right shift assignment (>>>=)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
page-type: javascript-operator
browser-compat: javascript.operators.unsigned_right_shift_assignment
---

{{jsSidebar("Operators")}}

The **unsigned right shift assignment (`>>>=`)** operator performs [unsigned right shift](/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) on the two operands and assigns the result to the left operand.

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift-assignment.html")}}

## Syntax

```js-nolint
x >>>= y
```

## Description

`x >>>= y` is equivalent to `x = x >>> y`.

## Examples

### Using unsigned right shift assignment

```js
let a = 5; // (00000000000000000000000000000101)
a >>>= 2; // 1 (00000000000000000000000000000001)

let b = -5; // (-00000000000000000000000000000101)
b >>>= 2; // 1073741822 (00111111111111111111111111111110)

let c = 5n;
c >>>= 2n; // 1n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Unsigned right shift operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
