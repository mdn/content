---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
page-type: javascript-operator
browser-compat: javascript.operators.addition
---

{{jsSidebar("Operators")}}

The **addition (`+`)** operator produces the sum of numeric operands or string concatenation.

{{EmbedInteractiveExample("pages/js/expressions-addition.html")}}

## Syntax

```js-nolint
x + y
```

## Description

The `+` operator is overloaded for two distinct operations: numeric addition and string concatenation. When evaluating, it first [coerces both operands to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion). Then, the two operands' types are tested:

- If one side is a string, the other operand is also [converted to a string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) and they are concatenated.
- If they are both [BigInts](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt), BigInt addition is performed. If one side is a BigInt but the other is not, a {{jsxref("TypeError")}} is thrown.
- Otherwise, both sides are [converted to numbers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), and numeric addition is performed.

String concatenation is often thought to be equivalent with [template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals) or [`String.prototype.concat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat), but they are not. Addition coerces the expression to a _primitive_, which calls [`valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) in priority; on the other hand, template literals and `concat()` coerce the expression to a _string_, which calls [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) in priority. If the expression has a [`@@toPrimitive`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) method, string concatenation calls it with `"default"` as hint, while template literals use `"string"`. This is important for objects that have different string and primitive representations — such as [Temporal](https://github.com/tc39/proposal-temporal), whose `valueOf()` method throws.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

You are advised to not use `"" + x` to perform [string coercion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

## Examples

### Number addition

```js
// Number + Number -> addition
1 + 2; // 3

// Boolean + Number -> addition
true + 1; // 2

// Boolean + Boolean -> addition
false + false; // 0
```

### BigInt addition

```js
// BigInt + BigInt -> addition
1n + 2n; // 3n

// BigInt + Number -> throws TypeError
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions

// To add a BigInt to a non-BigInt, convert either operand
1n + BigInt(2); // 3n
Number(1n) + 2; // 3
```

### String concatenation

```js
// String + String -> concatenation
"foo" + "bar"; // "foobar"

// Number + String -> concatenation
5 + "foo"; // "5foo"

// String + Boolean -> concatenation
"foo" + false; // "foofalse"

// String + Number -> concatenation
"2" + 2; // "22"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Subtraction operator](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
