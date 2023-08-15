---
title: Exponentiation (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
page-type: javascript-operator
browser-compat: javascript.operators.exponentiation
---

{{jsSidebar("Operators")}}

The **exponentiation (`**`)** operator returns the result of raising the first operand to the power of the second operand. It is equivalent to {{jsxref("Math.pow()")}}, except it also accepts [BigInts](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) as operands.

{{EmbedInteractiveExample("pages/js/expressions-exponentiation.html")}}

## Syntax

```js-nolint
x ** y
```

## Description

The `**` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). It first [coerces both operands to numeric values](/en-US/docs/Web/JavaScript/Data_structures#numeric_coercion) and tests the types of them. It performs BigInt exponentiation if both operands becomes BigInts; otherwise, it performs number exponentiation. A {{jsxref("TypeError")}} is thrown if one operand becomes a BigInt but the other becomes a number.

For both numbers and BigInts, `0` raised to a positive power returns `0`, and `0` raised to a power of `0` returns `1`. For numbers, `0` raised to a negative number returns `Infinity`, while `-0` raised to a negative number returns `-Infinity`.

`NaN ** 0` (and the equivalent `Math.pow(NaN, 0)`) is the only case where {{jsxref("NaN")}} doesn't propagate through mathematical operations — it returns `1` despite the operand being `NaN`. In addition, the behavior where `base` is 1 and `exponent` is non-finite (±Infinity or `NaN`) is different from IEEE 754, which specifies that the result should be 1, whereas JavaScript returns `NaN` to preserve backward compatibility with its original behavior.

For BigInt exponentiation, a {{jsxref("RangeError")}} is thrown if the exponent `y` is negative. This is because any negative exponent would likely result in a value between 0 and 1 (unless the base is `1`, `-1`, or `0`), which is rounded to zero, and is likely a developer mistake.

The exponentiation operator is [right-associative](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence): `a ** b ** c` is equal to `a ** (b ** c)`.

In most languages, such as PHP, Python, and others that have an exponentiation operator (`**`), the exponentiation operator is defined to have a higher precedence than unary operators, such as unary `+` and unary `-`, but there are a few exceptions. For example, in Bash, the `**` operator is defined to have a lower precedence than unary operators.

In JavaScript, it is impossible to write an ambiguous exponentiation expression. That is, you cannot put a unary operator (with [precedence 14](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), including `+`/`-`/`~`/`!`/`++`/`--`/`delete`/`void`/`typeof`/`await`) immediately before the base number; [doing so will cause a SyntaxError](/en-US/docs/Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation).

For example, `-2 ** 2` is 4 in Bash, but is -4 in other languages (such as Python). This is invalid in JavaScript, as the operation is ambiguous. You have to parenthesize either side — for example, as `-(2 ** 2)` — to make the intention unambiguous.

Note that some programming languages use the caret symbol `^` for exponentiation, but JavaScript uses that symbol for the [bitwise XOR operator](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

## Examples

### Basic exponentiation

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
2 ** 1024; // Infinity
NaN ** 2; // NaN
NaN ** 0; // 1
1 ** Infinity; // NaN

2n ** 3n; // 8n
2n ** 1024n; // A very large number, but not Infinity

2n ** 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions

// To do exponentiation with a BigInt and a non-BigInt, convert either operand
2n ** BigInt(2); // 4n
Number(2n) ** 2; // 4
```

### Associativity

```js-nolint
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
```

### Usage with unary operators

To invert the sign of the result of an exponentiation expression:

```js
-(2 ** 2); // -4
```

To force the base of an exponentiation expression to be a negative number:

```js
(-2) ** 2; // 4
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
- [Increment (`++`)](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement (`--`)](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation (`-`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
