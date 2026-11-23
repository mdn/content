---
title: Subtraction assignment (-=)
slug: Web/JavaScript/Reference/Operators/Subtraction_assignment
page-type: javascript-operator
browser-compat: javascript.operators.subtraction_assignment
sidebar: jssidebar
---

The **subtraction assignment (`-=`)** operator performs [subtraction](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction) on the two operands and assigns the result to the left operand.

{{InteractiveExample("JavaScript Demo: Subtraction assignment (-=) operator")}}

```js interactive-example
let a = 2;

console.log((a -= 3));
// Expected output: -1

console.log((a -= "Hello"));
// Expected output: NaN
```

## Syntax

```js-nolint
x -= y
```

### Parameters

- `x`
  - : A valid assignment target, such as an [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) or a [property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors). Its current value is coerced to [a number or a BigInt](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion).
- `y`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 2 (assignment) or above. Its value is coerced to [a number or a BigInt](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion).

### Return value

The number or BigInt produced by [`x - y`](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction) using the original value of `x`.

## Description

`x -= y` is equivalent to `x = x - y`, except that the expression `x` is only evaluated once.

## Examples

### Subtraction assignment using numbers

```js
let bar = 5;

bar -= 2; // 3
```

Other non-BigInt values are coerced to numbers:

```js
bar -= "foo"; // NaN
```

### Subtraction assignment using BigInts

```js
let foo = 3n;
foo -= 2n; // 1n
foo -= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Subtraction (`-`)](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
