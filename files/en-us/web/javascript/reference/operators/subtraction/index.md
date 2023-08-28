---
title: Subtraction (-)
slug: Web/JavaScript/Reference/Operators/Subtraction
page-type: javascript-operator
browser-compat: javascript.operators.subtraction
---

{{jsSidebar("Operators")}}

The **subtraction (`-`)** operator subtracts the two operands, producing their difference.

{{EmbedInteractiveExample("pages/js/expressions-subtraction.html")}}

## Syntax

```js-nolint
x - y
```

## Description

The `-` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). It first [coerces both operands to numeric values](/en-US/docs/Web/JavaScript/Data_structures#numeric_coercion) and tests the types of them. It performs BigInt subtraction if both operands become BigInts; otherwise, it performs number subtraction. A {{jsxref("TypeError")}} is thrown if one operand becomes a BigInt but the other becomes a number.

## Examples

### Subtraction with numbers

```js
// Number - Number -> subtraction
5 - 3; // 2

// Number - Number -> subtraction
3 - 5; // -2
```

### Subtraction with non-numbers

```js
// String - Number -> subtraction
"foo" - 3; // NaN; "foo" is converted to the number NaN

// Number - String -> subtraction
5 - "3"; // 2; "3" is converted to the number 3
```

### Subtraction with BigInts

```js
// BigInt - BigInt -> subtraction
2n - 1n; // 1n
```

You cannot mix BigInt and number operands in subtraction.

```js example-bad
2n - 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 - 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
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
