---
title: Unsigned right shift assignment (>>>=)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
page-type: javascript-operator
browser-compat: javascript.operators.unsigned_right_shift_assignment
sidebar: jssidebar
---

The **unsigned right shift assignment (`>>>=`)** operator performs [unsigned right shift](/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) on the two operands and assigns the result to the left operand.

{{InteractiveExample("JavaScript Demo: Unsigned right shift assignment (>>>=) operator")}}

```js interactive-example
let a = 5; //  00000000000000000000000000000101

a >>>= 2; //  00000000000000000000000000000001
console.log(a);
// Expected output: 1

let b = -5; // -00000000000000000000000000000101

b >>>= 2; //  00111111111111111111111111111110
console.log(b);
// Expected output: 1073741822
```

## Syntax

```js-nolint
x >>>= y
```

### Parameters

- `x`
  - : A valid assignment target, such as an [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) or a [property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors). Its current value is coerced to an [unsigned 32-bit integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion).
- `y`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 2 (assignment) or above. Its value is coerced to an [unsigned 32-bit integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion). The lowest five bits give the shift count.

### Return value

The unsigned 32-bit integer produced by [`x >>> y`](/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) using the original value of `x`.

## Description

`x >>>= y` is equivalent to `x = x >>> y`, except that the expression `x` is only evaluated once.

## Examples

### Using unsigned right shift assignment

```js
let a = 5; // (00000000000000000000000000000101)
a >>>= 2; // 1 (00000000000000000000000000000001)

let b = -5; // (-00000000000000000000000000000101)
b >>>= 2; // 1073741822 (00111111111111111111111111111110)

let c = 5n;
c >>>= 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Unsigned right shift (`>>>`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
