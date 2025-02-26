---
title: Subtraction assignment (-=)
slug: Web/JavaScript/Reference/Operators/Subtraction_assignment
page-type: javascript-operator
browser-compat: javascript.operators.subtraction_assignment
---

{{jsSidebar("Operators")}}

The **subtraction assignment (`-=`)** operator performs [subtraction](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction) on the two operands and assigns the result to the left operand.

{{InteractiveExample("JavaScript Demo: Expressions - Subtraction assignment operator")}}

```js interactive-example
let a = 2;

console.log((a -= 3));
// Expected output: -1

console.log((a -= "Hello"));
// Expected output: NaN
```

## Syntax

```js-nolint
x -= y
```

## Description

`x -= y` is equivalent to `x = x - y`, except that the expression `x` is only evaluated once.

## Examples

### Subtraction assignment using numbers

```js
let bar = 5;

bar -= 2; // 3
```

Other non-BigInt values are coerced to numbers:

```js
bar -= "foo"; // NaN
```

### Subtraction assignment using BigInts

```js
let foo = 3n;
foo -= 2n; // 1n
foo -= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Subtraction (`-`)](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
