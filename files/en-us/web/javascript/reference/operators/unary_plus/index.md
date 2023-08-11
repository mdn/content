---
title: Unary plus (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
page-type: javascript-operator
browser-compat: javascript.operators.unary_plus
---

{{jsSidebar("Operators")}}

The **unary plus (`+`)** operator precedes its operand and evaluates to its
operand but attempts to [convert it into a number](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), if it isn't already.

{{EmbedInteractiveExample("pages/js/expressions-unary-plus.html", "taller")}}

## Syntax

```js-nolint
+x
```

## Description

Although unary negation (`-`) also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number.

Unary plus does the exact same steps as normal [number coercion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) used by most built-in methods expecting numbers. It can convert string representations of integers and floats, as well as the non-string values `true`, `false`, and `null`. Integers in both decimal and hexadecimal (`0x`-prefixed) formats are supported. Negative numbers are supported (though not for hex). If it cannot parse a particular value, it will evaluate to {{jsxref("NaN")}}. Unlike other arithmetic operators, which work with both numbers and [BigInts](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt), using the `+` operator on BigInt values throws a {{jsxref("TypeError")}}.

## Examples

### Usage with numbers

```js
const x = 1;
const y = -1;

console.log(+x);
// 1
console.log(+y);
// -1
```

### Usage with non-numbers

```js-nolint
+true  // 1
+false // 0
+null  // 0
+[]    // 0
+function (val) { return val; } // NaN
+1n    // throws TypeError: Cannot convert BigInt value to number
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
- [Unary negation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
