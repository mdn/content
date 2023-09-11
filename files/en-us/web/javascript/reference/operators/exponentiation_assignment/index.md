---
title: Exponentiation assignment (**=)
slug: Web/JavaScript/Reference/Operators/Exponentiation_assignment
page-type: javascript-operator
browser-compat: javascript.operators.exponentiation_assignment
---

{{jsSidebar("Operators")}}

The **exponentiation assignment (`**=`)** operator performs [exponentiation](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) on the two operands and assigns the result to the left operand.

{{EmbedInteractiveExample("pages/js/expressions-exponentiation-assignment.html")}}

## Syntax

```js-nolint
x **= y
```

## Description

`x **= y` is equivalent to `x = x ** y`.

## Examples

### Using exponentiation assignment

```js
let bar = 5;

bar **= 2; // 25
bar **= "foo"; // NaN

let foo = 3n;
foo **= 2n; // 9n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Exponentiation (`**`)](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
