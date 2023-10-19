---
title: "SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions"
slug: Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "cannot use `??` unparenthesized within `||` and `&&` expressions" occurs when an [nullish coalescing operator](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) is used with a [logical OR](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR) or [logical AND](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) in the same expression without parentheses.

## Message

```plain
SyntaxError: Unexpected token '??' (V8-based)
SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions (Firefox)
SyntaxError: Unexpected token '??'. Coalescing and logical operators used together in the same expression; parentheses must be used to disambiguate. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

The [operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) chain looks like this:

```plain
|   >   &&   >   ||   >   =
|   >   ??   >   =
```

However, the precedence _between_ `??` and `&&`/`||` is intentionally undefined, because the short circuiting behavior of logical operators can make the expression's evaluation counter-intuitive. Therefore, the following combinations are all syntax errors, because the language doesn't know how to parenthesize the operands:

```js-nolint example-bad
a ?? b || c;
a || b ?? c;
a ?? b && c;
a && b ?? c;
```

Instead, make your intent clear by parenthesizing either side explicitly:

```js example-good
(a ?? b) || c;
a ?? (b && c);
```

## Examples

When migrating legacy code that uses `||` and `&&` for guarding against `null` or `undefined`, you may often convert it partially:

```js-nolint example-bad
function getId(user, fallback) {
  // Previously: user && user.id || fallback
  return user && user.id ?? fallback; // SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions
}
```

Instead, consider parenthesizing the `&&`:

```js
function getId(user, fallback) {
  return (user && user.id) ?? fallback;
}
```

Even better, consider using [optional chaining](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) instead of `&&`:

```js example-good
function getId(user, fallback) {
  return user?.id ?? fallback;
}
```

## See also

- [Issue about nullish coalescing precedence](https://github.com/tc39/proposal-nullish-coalescing/issues/15) in the TC39 nullish-coalescing proposal
- [Nullish coalescing operator (`??`)](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
