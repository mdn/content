---
title: Exponentiation assignment (**=)
slug: Web/JavaScript/Reference/Operators/Exponentiation_assignment
page-type: javascript-operator
browser-compat: javascript.operators.exponentiation_assignment
---

{{jsSidebar("Operators")}}

The **exponentiation assignment (`**=`)** operator performs [exponentiation](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) on the two operands and assigns the result to the left operand.

{{InteractiveExample("JavaScript Demo: Expressions - Exponentiation assignment operator")}}

```js interactive-example
let a = 3;

console.log((a **= 2));
// Expected output: 9

console.log((a **= 0));
// Expected output: 1

console.log((a **= 'hello'));
// Expected output: NaN
```

## Syntax

```js-nolint
x **= y
```

## Description

`x **= y` is equivalent to `x = x ** y`, except that the expression `x` is only evaluated once.

## Examples

### Exponentiation assignment using numbers

```js
let bar = 5;
bar **= 2; // 25
```

Other non-BigInt values are coerced to numbers:

```js
let baz = 5;
baz **= "foo"; // NaN
```

### Exponentiation assignment using BigInts

```js
let foo = 3n;
foo **= 2n; // 9n
foo **= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Exponentiation (`**`)](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
