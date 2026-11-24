---
title: Left shift assignment (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
page-type: javascript-operator
browser-compat: javascript.operators.left_shift_assignment
sidebar: jssidebar
---

The **left shift assignment (`<<=`)** operator performs [left shift](/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift) on the two operands and assigns the result to the left operand.

{{InteractiveExample("JavaScript Demo: Left shift assignment (<<=) operator", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101

a <<= 2; // 00000000000000000000000000010100

console.log(a);
// Expected output: 20
```

## Syntax

```js-nolint
x <<= y
```

### Parameters

- `x`
  - : A valid assignment target, such as an [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) or a [property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors). Its current value is coerced to a [signed 32-bit integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) or a [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion).
- `y`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 2 (assignment) or above. Its value is coerced to an [unsigned 32-bit integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) or a [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion). For numbers, the lowest five bits give the shift count. For BigInts, a negative count reverses the shift direction.

### Return value

The number or BigInt produced by [`x << y`](/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift) using the original value of `x`.

## Description

`x <<= y` is equivalent to `x = x << y`, except that the expression `x` is only evaluated once.

## Examples

### Using left shift assignment

```js
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20
// 00000000000000000000000000010100

let b = 5n;
b <<= 2n; // 20n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Left shift (`<<`)](/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift)
