---
title: Bitwise AND assignment (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
page-type: javascript-operator
browser-compat: javascript.operators.bitwise_and_assignment
---

{{jsSidebar("Operators")}}

The **bitwise AND assignment (`&=`)** operator performs [bitwise AND](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) on the two operands and assigns the result to the left operand. The [bitwise AND (&) operator](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) returns a 1 in each bit position for which the corresponding bits of both operands are 1s.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and-assignment.html", "shorter")}}

## Syntax

```js-nolint
x &= y
```

## Description

`x &= y` is equivalent to `x = x & y`.

## Examples

### Using bitwise AND assignment

```js
let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0 -> No corresponding bits of position 1

let b = 5n;
b &= 2n; // 0n
```

```js
const a = 6;          // 00000000000000000000000000000110
const b = 3;          // 00000000000000000000000000000011

console.log(a & b); // 3 00000000000000000000000000000010 -> Corresponding bits of position 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators)
- [Bitwise AND operator](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
