---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
page-type: javascript-operator
browser-compat: javascript.operators.addition
sidebar: jssidebar
---

The **addition (`+`)** operator produces the sum of numeric operands or string concatenation.

{{InteractiveExample("JavaScript Demo: Addition (+) operator")}}

```js interactive-example
console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log("hello " + "everyone");
// Expected output: "hello everyone"

console.log(2001 + ": A Space Odyssey");
// Expected output: "2001: A Space Odyssey"
```

## Syntax

```js-nolint
x + y
```

### Parameters

- `x`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 11 (addition) or above. Its value is coerced to either a string, a BigInt, or a number.
- `y`
  - : An expression with [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) 12 (multiplication) or above. Its value is coerced to either a string, a BigInt, or a number.

### Return value

A string, a BigInt, or a number, representing either the string concatenation or numeric sum of `x` and `y`.

## Description

The `+` operator is overloaded for two distinct operations: numeric addition and string concatenation. When evaluating, it first [coerces both operands to primitives](/en-US/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Then, the two operands' types are tested:

- If one side is a string, the other operand is also [converted to a string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) and they are concatenated.
- If they are both [BigInts](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt), BigInt addition is performed. If one side is a BigInt but the other is not, a {{jsxref("TypeError")}} is thrown.
- Otherwise, both sides are [converted to numbers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), and numeric addition is performed.

When numeric addition is performed, the results are generally consistent with mathematics (save for rounding errors), including interactions with `Infinity` (e.g., `Infinity` plus any finite number is still `Infinity`). Some edge cases:

- If either operand is `NaN`, the result is `NaN`
- `Infinity + -Infinity` is `NaN`
- When the mathematical result is 0, `0` is returned unless both operands are `-0`, in which case `-0` is returned.

String concatenation is often thought to be equivalent with [template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals) or [`String.prototype.concat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat), but they are not. Addition coerces the expression to a _primitive_, which calls [`valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) in priority; on the other hand, template literals and `concat()` coerce the expression to a _string_, which calls [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) in priority. If the expression has a [`[Symbol.toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) method, string concatenation calls it with `"default"` as hint, while template literals use `"string"`. This is important for objects that have different string and primitive representations — such as {{jsxref("Temporal")}}, whose objects' `valueOf()` methods all throw.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

You are advised to not use `"" + x` to perform [string coercion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

## Examples

### Addition using numbers

```js
1 + 2; // 3
```

Other non-string, non-BigInt values are coerced to numbers:

```js
true + 1; // 2
false + false; // 0
```

### Addition using BigInts

```js
1n + 2n; // 3n
```

You cannot mix BigInt and number operands in addition. `null`, `undefined`, and boolean values are coerced to numbers and are forbidden as well.

```js example-bad
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Strings have priority over other types, so adding a string to a BigInt produces string concatenation rather than a `TypeError`.

```js
"1" + 2n; // "12"
```

To do addition with a BigInt and a non-BigInt, convert either operand:

```js
1n + BigInt(2); // 3n
Number(1n) + 2; // 3
```

### Addition using strings

If one of the operands is a string, the other is converted to a string and they are concatenated:

```js
"foo" + "bar"; // "foobar"
5 + "foo"; // "5foo"
"foo" + false; // "foofalse"
"2" + 2; // "22"
```

### Non-associativity

Be careful with operation order. Unlike in mathematics, addition in JavaScript isn't always associative due to how intermediate results are rounded. For example, `a + (b + c) !== (a + b) + c`:

```js
const a = 1e20;
const b = -1e20;
const c = 0.1;

console.log(a + b + c); // 0.1
console.log(a + (b + c)); // 0
```

{{jsxref("Math.sumPrecise()")}} can alleviate the issue here:

```js
console.log(Math.sumPrecise([a, b, c])); // 0.1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Subtraction (`-`)](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication (`*`)](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder (`%`)](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment (`++`)](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement (`--`)](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation (`-`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
