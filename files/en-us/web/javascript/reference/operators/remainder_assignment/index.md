---
title: Remainder assignment (%=)
slug: Web/JavaScript/Reference/Operators/Remainder_assignment
page-type: javascript-operator
browser-compat: javascript.operators.remainder_assignment
---

{{jsSidebar("Operators")}}

The **remainder assignment (`%=`)** operator performs [remainder](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) on the two operands and assigns the result to the left operand.

{{InteractiveExample("JavaScript Demo: Expressions - Remainder assignment operator")}}

```js interactive-example
let a = 3;

console.log((a %= 2));
// Expected output: 1

console.log((a %= 0));
// Expected output: NaN

console.log((a %= "hello"));
// Expected output: NaN
```

## Syntax

```js-nolint
x %= y
```

## Description

`x %= y` is equivalent to `x = x % y`, except that the expression `x` is only evaluated once.

## Examples

### Using remainder assignment

```js
let bar = 5;

bar %= 2; // 1
bar %= "foo"; // NaN
bar %= 0; // NaN

let foo = 3n;
foo %= 2n; // 1n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Remainder (`%`)](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
