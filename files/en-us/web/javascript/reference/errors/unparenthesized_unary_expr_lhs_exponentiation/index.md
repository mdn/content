---
title: "SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**'"
slug: Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "unparenthesized unary expression can't appear on the left-hand side of '\*\*'" occurs when a unary operator (one of `typeof`, `void`, `delete`, `await`, `!`, `~`, `+`, `-`) is used on the left operand of the [exponentiation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) without parentheses.

## Message

```plain
SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence (V8-based)
SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**' (Firefox)
SyntaxError: Unexpected token '**'. Ambiguous unary expression in the left hand side of the exponentiation expression; parentheses must be used to disambiguate the expression. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

You likely wrote something like this:

```js example-bad
-a ** b
```

Whether it should be evaluated as `(-a) ** b` or `-(a ** b)` is ambiguous. In mathematics, -x<sup>2</sup> means `-(x ** 2)` — and that's how many languages, including Python, Haskell, and PHP, handle it. But making the unary minus operator take precedence over `**` breaks symmetry with `a ** -b`, which is unambiguously `a ** (-b)`. Therefore, the language forbids this syntax and requires you to parenthesize either side to resolve the ambiguity.

```js-nolint example-good
(-a) ** b
-(a ** b)
```

Other unary operators cannot be the left-hand side of exponentiation either.

```js example-bad
await a ** b
!a ** b
+a ** b
~a ** b
```

## Examples

When writing complex math expressions involving exponentiation, you may write something like this:

```js example-bad
function taylorSin(x) {
  return (n) => (-1 ** n * x ** (2 * n + 1)) / factorial(2 * n + 1);
  // SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**'
}
```

However, the `-1 ** n` part is illegal in JavaScript. Instead, parenthesize the left operand:

```js example-good
function taylorSin(x) {
  return (n) => ((-1) ** n * x ** (2 * n + 1)) / factorial(2 * n + 1);
}
```

This also makes the code's intent much clearer to other readers.

## See also

- [Original discussion of exponentiation operator precedence](https://esdiscuss.org/topic/exponentiation-operator-precedence)
- [Exponentiation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
