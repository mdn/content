---
title: Multiplication (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
page-type: javascript-operator
browser-compat: javascript.operators.multiplication
---

{{jsSidebar("Operators")}}

The **multiplication (`*`)** operator produces the product of the operands.

{{InteractiveExample("JavaScript Demo: Expressions - Multiplication operator")}}

```js interactive-example
console.log(3 * 4);
// Expected output: 12

console.log(-3 * 4);
// Expected output: -12

console.log("3" * 2);
// Expected output: 6

console.log("foo" * 2);
// Expected output: NaN
```

## Syntax

```js-nolint
x * y
```

## Description

The `*` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). It first [coerces both operands to numeric values](/en-US/docs/Web/JavaScript/Data_structures#numeric_coercion) and tests the types of them. It performs BigInt multiplication if both operands become BigInts; otherwise, it performs number multiplication. A {{jsxref("TypeError")}} is thrown if one operand becomes a BigInt but the other becomes a number.

## Examples

### Multiplication using numbers

```js
2 * 2; // 4
-2 * 2; // -4

Infinity * 0; // NaN
Infinity * Infinity; // Infinity
```

Other non-BigInt values are coerced to numbers:

```js
"foo" * 2; // NaN
"2" * 2; // 4
```

### Multiplication using BigInts

```js
2n * 2n; // 4n
-2n * 2n; // -4n
```

You cannot mix BigInt and number operands in multiplication.

```js example-bad
2n * 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 * 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

To do multiplication with a BigInt and a non-BigInt, convert either operand:

```js
2n * BigInt(2); // 4n
Number(2n) * 2; // 4
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Addition (`+`)](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction (`-`)](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [Remainder (`%`)](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment (`++`)](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement (`--`)](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation (`-`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
