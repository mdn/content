---
title: Remainder assignment (%=)
slug: Web/JavaScript/Reference/Operators/Remainder_assignment
page-type: javascript-operator
browser-compat: javascript.operators.remainder_assignment
sidebar: jssidebar
---

The **remainder assignment (`%=`)** operator performs [remainder](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) on the two operands and assigns the result to the left operand.

{{InteractiveExample("JavaScript Demo: Remainder assignment (%=) operator")}}

```js interactive-example
let a = 3;

console.log((a %= 2));
// Expected output: 1

console.log((a %= 0));
// Expected output: NaN

console.log((a %= "hello"));
// Expected output: NaN
```

## Syntax

```js-nolint
x %= y
```

### Parameters

- `x`
  - : A valid assignment target, such as an [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) or a [property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors). Its current value is coerced to [a number or a BigInt](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion).
- `y`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 2 (assignment) or above. Its value is coerced to [a number or a BigInt](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion).

### Return value

The number or BigInt produced by [`x % y`](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) using the original value of `x`.

## Description

`x %= y` is equivalent to `x = x % y`, except that the expression `x` is only evaluated once.

## Examples

### Using remainder assignment

```js
let bar = 5;

bar %= 2; // 1
bar %= "foo"; // NaN
bar %= 0; // NaN

let foo = 3n;
foo %= 2n; // 1n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Remainder (`%`)](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
