---
title: Division assignment (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
page-type: javascript-operator
browser-compat: javascript.operators.division_assignment
sidebar: jssidebar
---

The **division assignment (`/=`)** operator performs [division](/en-US/docs/Web/JavaScript/Reference/Operators/Division) on the two operands and assigns the result to the left operand.

{{InteractiveExample("JavaScript Demo: Division assignment (/=) operator")}}

```js interactive-example
let a = 3;

a /= 2;
console.log(a);
// Expected output: 1.5

a /= 0;
console.log(a);
// Expected output: Infinity

a /= "hello";
console.log(a);
// Expected output: NaN
```

## Syntax

```js-nolint
x /= y
```

### Parameters

- `x`
  - : A valid assignment target, such as an [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) or a [property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors). Its current value is coerced to [a number or a BigInt](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion).
- `y`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 2 (assignment) or above. Its value is coerced to [a number or a BigInt](/en-US/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion).

### Return value

The number or BigInt produced by [`x / y`](/en-US/docs/Web/JavaScript/Reference/Operators/Division) using the original value of `x`.

## Description

`x /= y` is equivalent to `x = x / y`, except that the expression `x` is only evaluated once.

## Examples

### Division assignment using numbers

```js
let bar = 5;

bar /= 2; // 2.5
bar /= 2; // 1.25
bar /= 0; // Infinity
```

Other non-BigInt values are coerced to numbers:

```js
let bar = 5;
bar /= "2"; // 2.5
bar /= "foo"; // NaN
```

### Division assignment using BigInts

```js
let foo = 3n;
foo /= 2n; // 1n
foo /= 2n; // 0n

foo /= 0n; // RangeError: BigInt division by zero
foo /= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Division (`/`)](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
