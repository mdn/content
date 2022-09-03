---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.addition
---
{{jsSidebar("Operators")}}

The addition operator (`+`) produces the sum of numeric operands or string
concatenation.

{{EmbedInteractiveExample("pages/js/expressions-addition.html")}}

## Syntax

```js
x + y
```

## Description

The addition operator (`+`) is overloaded for two distinct operations: numeric addition and string concatenation. When evaluating, it would first coerce both operands to primitives by calling the object's [`[@@toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (with `"default"` as hint), `valueOf()`, and `toString()` methods, in that order. Then, if one side is a string, the other operand is also [converted to a string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) and concatenated. Otherwise, both sides are converted to numbers (or, if they are [BigInts](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt), stay as BigInts), and numeric addition is performed.

String concatenation is often thought to be equivalent with [template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals) or [`String.prototype.concat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat), but they are not. Addition would coerce the expression to a _primitive_, which calls [`valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) in priority; on the other hand, template literals and `concat()` would coerce the expression to a _string_, which calls [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) in priority. If the expression has a [`@@toPrimitive`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) method, string concatenation calls it with `"default"` as hint, while template literals use `"string"`. This is important for objects that have different string and primitive representations — such as [Temporal](https://github.com/tc39/proposal-temporal), whose `valueOf()` method throws.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

You are advised to not use `"" + x` to perform [string coercion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

## Examples

### Numeric addition

```js
// Number + Number -> addition
1 + 2 // 3

// Boolean + Number -> addition
true + 1 // 2

// Boolean + Boolean -> addition
false + false // 0
```

### String concatenation

```js
// String + String -> concatenation
'foo' + 'bar' // "foobar"

// Number + String -> concatenation
5 + 'foo' // "5foo"

// String + Boolean -> concatenation
'foo' + false // "foofalse"
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
