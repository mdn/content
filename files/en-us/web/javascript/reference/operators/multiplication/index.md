---
title: Multiplication (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
page-type: javascript-operator
browser-compat: javascript.operators.multiplication
---

{{jsSidebar("Operators")}}

The **multiplication (`*`)** operator produces the product of the operands.

{{EmbedInteractiveExample("pages/js/expressions-multiplication.html")}}

## Syntax

```js-nolint
x * y
```

## Description

The `*` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). It first [coerces both operands to numeric values](/en-US/docs/Web/JavaScript/Data_structures#numeric_coercion) and tests the types of them. It performs BigInt multiplication if both operands becomes BigInts; otherwise, it performs number multiplication. A {{jsxref("TypeError")}} is thrown if one operand becomes a BigInt but the other becomes a number.

## Examples

### Multiplication using numbers

```js
2 * 2; // 4
-2 * 2; // -4
```

### Multiplication with Infinity

```js
Infinity * 0; // NaN
Infinity * Infinity; // Infinity
```

### Multiplication with non-numbers

```js
"foo" * 2; // NaN
"2" * 2; // 4
```

### Multiplication using BigInts

```js
2n * 2n; // 4n
-2n * 2n; // -4n

2n * 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions

// To multiply a BigInt with a non-BigInt, convert either operand
2n * BigInt(2); // 4n
Number(2n) * 2; // 4
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Addition operator](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [Remainder operator](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
