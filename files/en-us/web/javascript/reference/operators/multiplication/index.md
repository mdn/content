---
title: Multiplication (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
page-type: javascript-operator
browser-compat: javascript.operators.multiplication
sidebar: jssidebar
---

The **multiplication (`*`)** operator produces the product of the operands.

{{InteractiveExample("JavaScript Demo: Multiplication (*) operator")}}

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

### Parameters

- `x`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 12 (multiplication) or above. Its value is coerced to [a number or a BigInt](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion).
- `y`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 13 (exponentiation) or above. Its value is coerced to [a number or a BigInt](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion).

### Return value

A number or a BigInt representing the product of `x` and `y`.

## Description

The `*` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). It first [coerces both operands to numeric values](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) and tests the types of them. It performs BigInt multiplication if both operands become BigInts; otherwise, it performs number multiplication. A {{jsxref("TypeError")}} is thrown if one operand becomes a BigInt but the other becomes a number.

When numeric multiplication is performed, the results are generally consistent with mathematics (save for rounding errors), including interactions with `Infinity` (e.g., `Infinity` times any finite positive number is still `Infinity`). The result's sign is positive when both operands have the same sign, and negative otherwise (`0` and `-0` have different signs). Some edge cases:

- If either operand is `NaN`, the result is `NaN`
- If one operand is ±Infinity and the other is ±0, the result is `NaN` (0 in this context is interpreted as an infinitestimally small value)

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

### Non-associativity

Be careful with operation order. Unlike in mathematics, multiplication in JavaScript isn't always associative due to how intermediate results are rounded. For example, `a * (b * c) !== (a * b) * c`:

```js
const a = 3;
const b = 0.1;
const c = 10;

console.log(a * b * c); // 3.0000000000000004
console.log(a * (b * c)); // 3
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
