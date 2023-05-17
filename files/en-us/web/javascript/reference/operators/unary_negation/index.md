---
title: Unary negation (-)
slug: Web/JavaScript/Reference/Operators/Unary_negation
page-type: javascript-operator
browser-compat: javascript.operators.unary_negation
---

{{jsSidebar("Operators")}}

The **unary negation (`-`)** operator precedes its operand and negates it.

{{EmbedInteractiveExample("pages/js/expressions-unary-negation.html")}}

## Syntax

```js-nolint
-x
```

## Description

The `-` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). It first [coerces the operand to a numeric value](/en-US/docs/Web/JavaScript/Data_structures#numeric_coercion) and tests the type of it. It performs BigInt negation if the operand becomes a BigInt; otherwise, it performs number negation.

## Examples

### Negating numbers

```js
const x = 3;
const y = -x;
// y is -3; x is 3
```

### Negating non-numbers

The unary negation operator can convert a non-number into a number.

```js
const x = "4";
const y = -x;

// y is -4
```

BigInts can be negated using the unary negation operator.

```js
const x = 4n;
const y = -x;

// y is -4n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Addition operator](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary plus operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
