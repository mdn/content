---
title: Bitwise OR assignment (|=)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
page-type: javascript-operator
browser-compat: javascript.operators.bitwise_or_assignment
---

{{jsSidebar("Operators")}}

The **bitwise OR assignment (`|=`)** operator performs [bitwise OR](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) on the two operands and assigns the result to the left operand.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-or-assignment.html", "shorter")}}

## Syntax

```js-nolint
x |= y
```

## Description

`x |= y` is equivalent to `x = x | y`.

## Examples

### Using bitwise OR assignment

```js
let a = 5;
a |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111

let b = 5n;
b |= 2n; // 7n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Bitwise OR (`|`)](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)
- [Logical OR assignment (`||=`)](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
