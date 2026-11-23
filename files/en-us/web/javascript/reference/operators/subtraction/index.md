---
title: Subtraction (-)
slug: Web/JavaScript/Reference/Operators/Subtraction
page-type: javascript-operator
browser-compat: javascript.operators.subtraction
sidebar: jssidebar
---

The **subtraction (`-`)** operator subtracts the two operands, producing their difference.

{{InteractiveExample("JavaScript Demo: Subtraction (-) operator")}}

```js interactive-example
console.log(5 - 3);
// Expected output: 2

console.log(3.5 - 5);
// Expected output: -1.5

console.log(5 - "hello");
// Expected output: NaN

console.log(5 - true);
// Expected output: 4
```

## Syntax

```js-nolint
x - y
```

### Parameters

- `x`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 11 (addition) or above. Its value is coerced to [a number or a BigInt](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion).
- `y`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 12 (multiplication) or above. Its value is coerced to [a number or a BigInt](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion).

### Return value

A number or a BigInt representing the difference between `x` and `y`.

## Description

The `-` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). It first [coerces both operands to numeric values](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) and tests the types of them. It performs BigInt subtraction if both operands become BigInts; otherwise, it performs number subtraction. A {{jsxref("TypeError")}} is thrown if one operand becomes a BigInt but the other becomes a number.

When numeric subtraction is performed, `x - y` is specified to be equivalent to `x + -y`, so the rules of [addition](/en-US/docs/Web/JavaScript/Reference/Operators/Addition) apply:

- If either operand is `NaN`, the result is `NaN`
- `Infinity - Infinity` is `NaN`
- When the mathematical result is 0, `0` is returned unless the subtraction is `-0 - 0`, in which case `-0` is returned.

## Examples

### Subtraction using numbers

```js
5 - 3; // 2
3 - 5; // -2
```

Other non-BigInt values are coerced to numbers:

```js
"foo" - 3; // NaN; "foo" is converted to the number NaN
5 - "3"; // 2; "3" is converted to the number 3
```

### Subtraction using BigInts

```js
2n - 1n; // 1n
```

You cannot mix BigInt and number operands in subtraction.

```js example-bad
2n - 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 - 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

To do subtraction with a BigInt and a non-BigInt, convert either operand:

```js
2n - BigInt(1); // 1n
Number(2n) - 1; // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Addition (`+`)](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [Division (`/`)](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication (`*`)](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder (`%`)](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment (`++`)](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement (`--`)](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation (`-`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
