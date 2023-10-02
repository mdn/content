---
title: Increment (++)
slug: Web/JavaScript/Reference/Operators/Increment
page-type: javascript-operator
browser-compat: javascript.operators.increment
---

{{jsSidebar("Operators")}}

The **increment (`++`)** operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.

{{EmbedInteractiveExample("pages/js/expressions-increment.html")}}

## Syntax

```js-nolint
x++
++x
```

## Description

The `++` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). It first [coerces the operand to a numeric value](/en-US/docs/Web/JavaScript/Data_structures#numeric_coercion) and tests the type of it. It performs BigInt increment if the operand becomes a BigInt; otherwise, it performs number increment.

If used postfix, with operator after operand (for example, `x++`), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, `++x`), the increment operator increments and returns the value after incrementing.

The increment operator can only be applied on operands that are references (variables and object properties; i.e. valid [assignment targets](/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)). `++x` itself evaluates to a value, not a reference, so you cannot chain multiple increment operators together.

```js-nolint example-bad
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Examples

### Postfix increment

```js
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
```

### Prefix increment

```js
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Addition (`+`)](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction (`-`)](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication (`*`)](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder (`%`)](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Decrement (`--`)](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation (`-`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
