---
title: Remainder (%)
slug: Web/JavaScript/Reference/Operators/Remainder
page-type: javascript-operator
browser-compat: javascript.operators.remainder
---

{{jsSidebar("Operators")}}

The **remainder (`%`)** operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}

## Syntax

```js-nolint
x % y
```

## Description

The `%` operator is overloaded for two types of operands: number and [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). It first [coerces both operands to numeric values](/en-US/docs/Web/JavaScript/Data_structures#numeric_coercion) and tests the types of them. It performs BigInt remainder if both operands become BigInts; otherwise, it performs number remainder. A {{jsxref("TypeError")}} is thrown if one operand becomes a BigInt but the other becomes a number.

For the operation `n % d`, `n` is called the dividend and `d` is called the divisor. The operation returns `NaN` if one of the operands is `NaN`, `n` is ±Infinity, or if `d` is ±0. Otherwise, if `d` is ±Infinity or if `n` is ±0, the dividend `n` is returned.

When both operands are non-zero and finite, the remainder `r` is calculated as `r := n - d * q` where `q` is the integer such that `r` has the same sign as the dividend `n` while being as close to 0 as possible.

Note that while in most languages, '%' is a remainder operator, in some (e.g. [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) it is a modulo operator. Modulo is defined as `k := n - d * q` where `q` is the integer such that `k` has the same sign as the divisor `d` while being as close to 0 as possible. For two values of the same sign, the two are equivalent, but when the operands are of different signs, the modulo result always has the same sign as the _divisor_, while the remainder has the same sign as the _dividend_, which can make them differ by one unit of `d`. To obtain a modulo in JavaScript, in place of `n % d`, use `((n % d) + d) % d`. In JavaScript, the modulo operation (which doesn't have a dedicated operator) is used to normalize the second operand of bitwise shift operators ([`<<`](/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift), etc.), making the offset always a positive value.

For BigInt division, a {{jsxref("RangeError")}} is thrown if the divisor `y` is `0n`. This is because number remainder by zero returns `NaN`, but BigInt has no concept of `NaN`.

## Examples

### Remainder with positive dividend

```js
13 % 5; // 3
1 % -2; // 1
1 % 2; // 1
2 % 3; // 2
5.5 % 2; // 1.5

3n % 2n; // 1n
```

### Remainder with negative dividend

```js
-13 % 5; // -3
-1 % 2; // -1
-4 % 2; // -0

-3n % 2n; // -1n
```

### Remainder with NaN

```js
NaN % 2; // NaN
```

### Remainder with Infinity

```js
Infinity % 2; // NaN
Infinity % 0; // NaN
Infinity % Infinity; // NaN
2 % Infinity; // 2
0 % Infinity; // 0
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
- [Exponentiation (`**`)](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment (`++`)](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement (`--`)](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation (`-`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [Remainder operator vs. modulo operator](https://2ality.com/2019/08/remainder-vs-modulo.html) by Dr. Axel Rauschmayer (2019)
