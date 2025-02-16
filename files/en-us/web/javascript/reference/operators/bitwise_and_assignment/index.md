---
title: Bitwise AND assignment (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
page-type: javascript-operator
browser-compat: javascript.operators.bitwise_and_assignment
---

{{jsSidebar("Operators")}}

The **bitwise AND assignment (`&=`)** operator performs [bitwise AND](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) on the two operands and assigns the result to the left operand.

{{InteractiveExample("JavaScript Demo: Expressions - Bitwise AND assignment", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101
a &= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000001
// Expected output: 1
```

## Syntax

```js-nolint
x &= y
```

## Description

`x &= y` is equivalent to `x = x & y`, except that the expression `x` is only evaluated once.

## Examples

### Using bitwise AND assignment

```js
let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0

let b = 5n;
b &= 2n; // 0n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Bitwise AND (`&`)](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
