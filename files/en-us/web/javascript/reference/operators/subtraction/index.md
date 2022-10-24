---
title: Subtraction (-)
slug: Web/JavaScript/Reference/Operators/Subtraction
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.subtraction
---

{{jsSidebar("Operators")}}

The subtraction operator (`-`) subtracts the two operands, producing their
difference.

{{EmbedInteractiveExample("pages/js/expressions-subtraction.html")}}

## Syntax

```js-nolint
x - y
```

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
// String - Number -> concatenation
"foo" - 3; // NaN

// Number - String -> subtraction
5 - "3"; // 2
```

When subtracting a string (and the contents is a number) from a number Javascript will automaticly convert the string into a number and subtract like normal. This is known as [Numeric Conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#numeric_coercion).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Addition operator](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [Division operator](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
