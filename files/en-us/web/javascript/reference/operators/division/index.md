---
title: Division (/)
slug: Web/JavaScript/Reference/Operators/Division
page-type: javascript-operator
browser-compat: javascript.operators.division
---

{{jsSidebar("Operators")}}

The **division (`/`)** operator produces the quotient of its operands where the left operand is the dividend and the right operand is the divisor.

{{EmbedInteractiveExample("pages/js/expressions-division.html")}}

## Syntax

```js-nolint
x / y
```

## Description

The `/` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). It first [coerces both operands to numeric values](/en-US/docs/Web/JavaScript/Data_structures#numeric_coercion) and tests the types of them. It performs BigInt division if both operands becomes BigInts; otherwise, it performs number division. A {{jsxref("TypeError")}} is thrown if one operand becomes a BigInt but the other becomes a number.

For BigInt division, the result is the quotient of the two operands truncated towards zero, and the remainder is discarded. A {{jsxref("RangeError")}} is thrown if the divisor `y` is `0n`. This is because number division by zero returns `Infinity` or `-Infinity`, but BigInt has no concept of infinity.

## Examples

### Basic division

```js
1 / 2; // 0.5

Math.floor(3 / 2); // 1

1.0 / 2.0; // 0.5

1n / 2n; // 0n
5n / 3n; // 1n
-1n / 3n; // 0n
1n / -3n; // 0n

2n / 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions

// To do division with a BigInt and a non-BigInt, convert either operand
2n / BigInt(2); // 1n
Number(2n) / 2; // 1
```

### Division by zero

```js
2.0 / 0; // Infinity

2.0 / 0.0; // Infinity, because 0.0 === 0

2.0 / -0.0; // -Infinity

2n / 0n; // RangeError: Division by zero
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Addition (`+`)](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction (`-`)](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Multiplication (`*`)](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder (`/`)](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment (`++`)](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement (`--`)](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation (`-`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
